export const id = 285;
export const ids = [285];
export const modules = {
  40938: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => Gk,
      h: () => Pk,
      l: () => Qk,
      o: () => fT,
      q: () => Vk,
      r: () => xT,
      v: () => Ck
    });
    var lT = cT(40941),
      MT = cT(40944),
      KT = cT(40953);
    class OT {
      constructor(TT, kT, cT, lT) {
        this.state = TT, this.pos = kT, this.explicit = cT, this.view = lT, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(TT) {
        let kT = (0, KT.hb)(this.state).resolveInner(this.pos, -1);
        for (; kT && TT.indexOf(kT.name) < 0;) kT = kT.parent;
        return kT ? {
          from: kT.from,
          to: this.pos,
          text: this.state.sliceDoc(kT.from, this.pos),
          type: kT.type
        } : null
      }
      matchBefore(TT) {
        let kT = this.state.doc.lineAt(this.pos),
          cT = Math.max(kT.from, this.pos - 250),
          lT = kT.text.slice(cT - kT.from, this.pos - kT.from),
          MT = lT.search(CT(TT, !1));
        return MT < 0 ? null : {
          from: cT + MT,
          to: this.pos,
          text: lT.slice(MT)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(TT, kT, cT) {
        "abort" == TT && this.abortListeners && (this.abortListeners.push(kT), cT && cT.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function yT(TT) {
      let kT = Object.keys(TT).join(""),
        cT = /\w/.test(kT);
      return cT && (kT = kT.replace(/\w/g, "")), `[${cT?"\\w":""}${kT.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function fT(TT) {
      let kT = TT.map((TT => "string" == typeof TT ? {
          label: TT
        } : TT)),
        [cT, lT] = kT.every((TT => /^\w+$/.test(TT.label))) ? [/\w*$/, /\w+$/] : function(TT) {
          let kT = Object.create(null),
            cT = Object.create(null);
          for (let {
              label: MT
            }
            of TT) {
            kT[MT[0]] = !0;
            for (let TT = 1; TT < MT.length; TT++) cT[MT[TT]] = !0
          }
          let lT = yT(kT) + yT(cT) + "*$";
          return [new RegExp("^" + lT), new RegExp(lT)]
        }(kT);
      return TT => {
        let MT = TT.matchBefore(lT);
        return MT || TT.explicit ? {
          from: MT ? MT.from : TT.pos,
          options: kT,
          validFor: cT
        } : null
      }
    }

    function xT(TT, kT) {
      return cT => {
        for (let kT = (0, KT.hb)(cT.state).resolveInner(cT.pos, -1); kT; kT = kT.parent) {
          if (TT.indexOf(kT.name) > -1) return null;
          if (kT.type.isTop) break
        }
        return kT(cT)
      }
    }
    class IT {
      constructor(TT, kT, cT, lT) {
        this.completion = TT, this.source = kT, this.match = cT, this.score = lT
      }
    }

    function AT(TT) {
      return TT.selection.main.from
    }

    function CT(TT, kT) {
      var cT;
      let {
        source: lT
      } = TT, MT = kT && "^" != lT[0], KT = "$" != lT[lT.length - 1];
      return MT || KT ? new RegExp(`${MT?"^":""}(?:${lT})${KT?"$":""}`, null !== (cT = TT.flags) && void 0 !== cT ? cT : TT.ignoreCase ? "i" : "") : TT
    }
    const jT = lT.d.define();

    function vT(TT, kT, cT, MT) {
      let {
        main: KT
      } = TT.selection, OT = cT - KT.from, yT = MT - KT.from;
      return {
        ...TT.changeByRange((fT => {
          if (fT != KT && cT != MT && TT.sliceDoc(fT.from + OT, fT.from + yT) != TT.sliceDoc(cT, MT)) return {
            range: fT
          };
          let xT = TT.toText(kT);
          return {
            changes: {
              from: fT.from + OT,
              to: MT == KT.from ? fT.to : fT.from + yT,
              insert: xT
            },
            range: lT.j.cursor(fT.from + OT + xT.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const tT = new WeakMap;

    function hT(TT) {
      if (!Array.isArray(TT)) return TT;
      let kT = tT.get(TT);
      return kT || tT.set(TT, kT = fT(TT)), kT
    }
    const NT = lT.F.define(),
      QT = lT.F.define();
    class ST {
      constructor(TT) {
        this.pattern = TT, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let kT = 0; kT < TT.length;) {
          let cT = (0, lT.N)(TT, kT),
            MT = (0, lT.O)(cT);
          this.chars.push(cT);
          let KT = TT.slice(kT, kT + MT),
            OT = KT.toUpperCase();
          this.folded.push((0, lT.N)(OT == KT ? KT.toLowerCase() : OT, 0)), kT += MT
        }
        this.astral = TT.length != this.chars.length
      }
      ret(TT, kT) {
        return this.score = TT, this.matched = kT, this
      }
      match(TT) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (TT.length < this.pattern.length) return null;
        let {
          chars: kT,
          folded: cT,
          any: MT,
          precise: KT,
          byWord: OT
        } = this;
        if (1 == kT.length) {
          let MT = (0, lT.N)(TT, 0),
            KT = (0, lT.O)(MT),
            OT = KT == TT.length ? 0 : -100;
          if (MT == kT[0]);
          else {
            if (MT != cT[0]) return null;
            OT += -200
          }
          return this.ret(OT, [0, KT])
        }
        let yT = TT.indexOf(this.pattern);
        if (0 == yT) return this.ret(TT.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let fT = kT.length,
          xT = 0;
        if (yT < 0) {
          for (let KT = 0, OT = Math.min(TT.length, 200); KT < OT && xT < fT;) {
            let OT = (0, lT.N)(TT, KT);
            OT != kT[xT] && OT != cT[xT] || (MT[xT++] = KT), KT += (0, lT.O)(OT)
          }
          if (xT < fT) return null
        }
        let IT = 0,
          AT = 0,
          CT = !1,
          jT = 0,
          vT = -1,
          tT = -1,
          hT = /[a-z]/.test(TT),
          NT = !0;
        for (let QT = 0, ST = Math.min(TT.length, 200), DT = 0; QT < ST && AT < fT;) {
          let MT = (0, lT.N)(TT, QT);
          yT < 0 && (IT < fT && MT == kT[IT] && (KT[IT++] = QT), jT < fT && (MT == kT[jT] || MT == cT[jT] ? (0 == jT && (vT = QT), tT = QT + 1, jT++) : jT = 0));
          let xT, ST = MT < 255 ? MT >= 48 && MT <= 57 || MT >= 97 && MT <= 122 ? 2 : MT >= 65 && MT <= 90 ? 1 : 0 : (xT = (0, lT._)(MT)) != xT.toLowerCase() ? 1 : xT != xT.toUpperCase() ? 2 : 0;
          (!QT || 1 == ST && hT || 0 == DT && 0 != ST) && (kT[AT] == MT || cT[AT] == MT && (CT = !0) ? OT[AT++] = QT : OT.length && (NT = !1)), DT = ST, QT += (0, lT.O)(MT)
        }
        return AT == fT && 0 == OT[0] && NT ? this.result((CT ? -200 : 0) - 100, OT, TT) : jT == fT && 0 == vT ? this.ret(-200 - TT.length + (tT == TT.length ? 0 : -100), [0, tT]) : yT > -1 ? this.ret(-700 - TT.length, [yT, yT + this.pattern.length]) : jT == fT ? this.ret(-900 - TT.length, [vT, tT]) : AT == fT ? this.result((CT ? -200 : 0) - 100 - 700 + (NT ? 0 : -1100), OT, TT) : 2 == kT.length ? null : this.result((MT[0] ? -700 : 0) - 200 - 1100, MT, TT)
      }
      result(TT, kT, cT) {
        let MT = [],
          KT = 0;
        for (let OT of kT) {
          let TT = OT + (this.astral ? (0, lT.O)((0, lT.N)(cT, OT)) : 1);
          KT && MT[KT - 1] == OT ? MT[KT - 1] = TT : (MT[KT++] = OT, MT[KT++] = TT)
        }
        return this.ret(TT - cT.length, MT)
      }
    }
    class DT {
      constructor(TT) {
        this.pattern = TT, this.matched = [], this.score = 0, this.folded = TT.toLowerCase()
      }
      match(TT) {
        if (TT.length < this.pattern.length) return null;
        let kT = TT.slice(0, this.pattern.length),
          cT = kT == this.pattern ? 0 : kT.toLowerCase() == this.folded ? -200 : null;
        return null == cT ? null : (this.matched = [0, kT.length], this.score = cT + (TT.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const aT = lT.o.define({
      combine: TT => (0, lT.R)(TT, {
        activateOnTyping: !0,
        activateOnCompletion: () => !1,
        activateOnTypingDelay: 100,
        selectOnOpen: !0,
        override: null,
        closeOnBlur: !0,
        maxRenderedOptions: 100,
        defaultKeymap: !0,
        tooltipClass: () => "",
        optionClass: () => "",
        aboveCursor: !1,
        icons: !0,
        addToOptions: [],
        positionInfo: rT,
        filterStrict: !1,
        compareCompletions: (TT, kT) => (TT.sortText || TT.label).localeCompare(kT.sortText || kT.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (TT, kT) => TT && kT,
        closeOnBlur: (TT, kT) => TT && kT,
        icons: (TT, kT) => TT && kT,
        tooltipClass: (TT, kT) => cT => FT(TT(cT), kT(cT)),
        optionClass: (TT, kT) => cT => FT(TT(cT), kT(cT)),
        addToOptions: (TT, kT) => TT.concat(kT),
        filterStrict: (TT, kT) => TT || kT
      })
    });

    function FT(TT, kT) {
      return TT ? kT ? TT + " " + kT : TT : kT
    }

    function rT(TT, kT, cT, lT, KT, OT) {
      let yT, fT, xT = TT.textDirection == MT.f.RTL,
        IT = xT,
        AT = !1,
        CT = "top",
        jT = kT.left - KT.left,
        vT = KT.right - kT.right,
        tT = lT.right - lT.left,
        hT = lT.bottom - lT.top;
      if (IT && jT < Math.min(tT, vT) ? IT = !1 : !IT && vT < Math.min(tT, jT) && (IT = !0), tT <= (IT ? jT : vT)) yT = Math.max(KT.top, Math.min(cT.top, KT.bottom - hT)) - kT.top, fT = Math.min(400, IT ? jT : vT);
      else {
        AT = !0, fT = Math.min(400, (xT ? kT.right : KT.right - kT.left) - 30);
        let TT = KT.bottom - kT.bottom;
        TT >= hT || TT > kT.top ? yT = cT.bottom - kT.top : (CT = "bottom", yT = kT.bottom - cT.top)
      }
      return {
        style: `${CT}: ${yT/((kT.bottom-kT.top)/OT.offsetHeight)}px; max-width: ${fT/((kT.right-kT.left)/OT.offsetWidth)}px`,
        class: "cm-completionInfo-" + (AT ? xT ? "left-narrow" : "right-narrow" : IT ? "left" : "right")
      }
    }
    const PT = lT.F.define();

    function wT(TT, kT, cT) {
      if (TT <= cT) return {
        from: 0,
        to: TT
      };
      if (kT < 0 && (kT = 0), kT <= TT >> 1) {
        let TT = Math.floor(kT / cT);
        return {
          from: TT * cT,
          to: (TT + 1) * cT
        }
      }
      let lT = Math.floor((TT - kT) / cT);
      return {
        from: TT - (lT + 1) * cT,
        to: TT - lT * cT
      }
    }
    class mT {
      constructor(TT, kT, cT) {
        this.view = TT, this.stateField = kT, this.applyCompletion = cT, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: TT => this.placeInfo(TT),
          key: this
        }, this.space = null, this.currentClass = "";
        let lT = TT.state.field(kT),
          {
            options: MT,
            selected: KT
          } = lT.open,
          OT = TT.state.facet(aT);
        this.optionContent = function(TT) {
          let kT = TT.addToOptions.slice();
          return TT.icons && kT.push({
            render(TT) {
              let kT = document.createElement("div");
              return kT.classList.add("cm-completionIcon"), TT.type && kT.classList.add(...TT.type.split(/\s+/g).map((TT => "cm-completionIcon-" + TT))), kT.setAttribute("aria-hidden", "true"), kT
            },
            position: 20
          }), kT.push({
            render(TT, kT, cT, lT) {
              let MT = document.createElement("span");
              MT.className = "cm-completionLabel";
              let KT = TT.displayLabel || TT.label,
                OT = 0;
              for (let yT = 0; yT < lT.length;) {
                let TT = lT[yT++],
                  kT = lT[yT++];
                TT > OT && MT.appendChild(document.createTextNode(KT.slice(OT, TT)));
                let cT = MT.appendChild(document.createElement("span"));
                cT.appendChild(document.createTextNode(KT.slice(TT, kT))), cT.className = "cm-completionMatchedText", OT = kT
              }
              return OT < KT.length && MT.appendChild(document.createTextNode(KT.slice(OT))), MT
            },
            position: 50
          }, {
            render(TT) {
              if (!TT.detail) return null;
              let kT = document.createElement("span");
              return kT.className = "cm-completionDetail", kT.textContent = TT.detail, kT
            },
            position: 80
          }), kT.sort(((TT, kT) => TT.position - kT.position)).map((TT => TT.render))
        }(OT), this.optionClass = OT.optionClass, this.tooltipClass = OT.tooltipClass, this.range = wT(MT.length, KT, OT.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(TT.state), this.dom.addEventListener("mousedown", (cT => {
          let {
            options: lT
          } = TT.state.field(kT).open;
          for (let kT, MT = cT.target; MT && MT != this.dom; MT = MT.parentNode)
            if ("LI" == MT.nodeName && (kT = /-(\d+)$/.exec(MT.id)) && +kT[1] < lT.length) return this.applyCompletion(TT, lT[+kT[1]]), void cT.preventDefault();
          if (cT.target == this.list) {
            let kT = this.list.classList.contains("cm-completionListIncompleteTop") && cT.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && cT.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != kT && (TT.dispatch({
              effects: PT.of(kT)
            }), cT.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (kT => {
          let cT = TT.state.field(this.stateField, !1);
          cT && cT.tooltip && TT.state.facet(aT).closeOnBlur && kT.relatedTarget != TT.contentDOM && TT.dispatch({
            effects: QT.of(null)
          })
        })), this.showOptions(MT, lT.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(TT, kT) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(TT, kT, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(TT) {
        var kT;
        let cT = TT.state.field(this.stateField),
          lT = TT.startState.field(this.stateField);
        if (this.updateTooltipClass(TT.state), cT != lT) {
          let {
            options: MT,
            selected: KT,
            disabled: OT
          } = cT.open;
          lT.open && lT.open.options == MT || (this.range = wT(MT.length, KT, TT.state.facet(aT).maxRenderedOptions), this.showOptions(MT, cT.id)), this.updateSel(), OT != (null === (kT = lT.open) || void 0 === kT ? void 0 : kT.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!OT)
        }
      }
      updateTooltipClass(TT) {
        let kT = this.tooltipClass(TT);
        if (kT != this.currentClass) {
          for (let TT of this.currentClass.split(" ")) TT && this.dom.classList.remove(TT);
          for (let TT of kT.split(" ")) TT && this.dom.classList.add(TT);
          this.currentClass = kT
        }
      }
      positioned(TT) {
        this.space = TT, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let TT = this.view.state.field(this.stateField),
          kT = TT.open;
        (kT.selected > -1 && kT.selected < this.range.from || kT.selected >= this.range.to) && (this.range = wT(kT.options.length, kT.selected, this.view.state.facet(aT).maxRenderedOptions), this.showOptions(kT.options, TT.id));
        let cT = this.updateSelectedOption(kT.selected);
        if (cT) {
          this.destroyInfo();
          let {
            completion: lT
          } = kT.options[kT.selected], {
            info: KT
          } = lT;
          if (!KT) return;
          let OT = "string" === typeof KT ? document.createTextNode(KT) : KT(lT);
          if (!OT) return;
          "then" in OT ? OT.then((kT => {
            kT && this.view.state.field(this.stateField, !1) == TT && this.addInfoPane(kT, lT)
          })).catch((TT => (0, MT.S)(this.view.state, TT, "completion info"))) : (this.addInfoPane(OT, lT), cT.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(TT, kT) {
        this.destroyInfo();
        let cT = this.info = document.createElement("div");
        if (cT.className = "cm-tooltip cm-completionInfo", cT.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != TT.nodeType) cT.appendChild(TT), this.infoDestroy = null;
        else {
          let {
            dom: kT,
            destroy: lT
          } = TT;
          cT.appendChild(kT), this.infoDestroy = lT || null
        }
        this.dom.appendChild(cT), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(TT) {
        let kT = null;
        for (let cT = this.list.firstChild, lT = this.range.from; cT; cT = cT.nextSibling, lT++) "LI" == cT.nodeName && cT.id ? lT == TT ? cT.hasAttribute("aria-selected") || (cT.setAttribute("aria-selected", "true"), kT = cT) : cT.hasAttribute("aria-selected") && (cT.removeAttribute("aria-selected"), cT.removeAttribute("aria-describedby")) : lT--;
        return kT && function(TT, kT) {
          let cT = TT.getBoundingClientRect(),
            lT = kT.getBoundingClientRect(),
            MT = cT.height / TT.offsetHeight;
          lT.top < cT.top ? TT.scrollTop -= (cT.top - lT.top) / MT : lT.bottom > cT.bottom && (TT.scrollTop += (lT.bottom - cT.bottom) / MT)
        }(this.list, kT), kT
      }
      measureInfo() {
        let TT = this.dom.querySelector("[aria-selected]");
        if (!TT || !this.info) return null;
        let kT = this.dom.getBoundingClientRect(),
          cT = this.info.getBoundingClientRect(),
          lT = TT.getBoundingClientRect(),
          MT = this.space;
        if (!MT) {
          let TT = this.dom.ownerDocument.documentElement;
          MT = {
            left: 0,
            top: 0,
            right: TT.clientWidth,
            bottom: TT.clientHeight
          }
        }
        return lT.top > Math.min(MT.bottom, kT.bottom) - 10 || lT.bottom < Math.max(MT.top, kT.top) + 10 ? null : this.view.state.facet(aT).positionInfo(this.view, kT, lT, cT, MT, this.dom)
      }
      placeInfo(TT) {
        this.info && (TT ? (TT.style && (this.info.style.cssText = TT.style), this.info.className = "cm-tooltip cm-completionInfo " + (TT.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(TT, kT, cT) {
        const lT = document.createElement("ul");
        lT.id = kT, lT.setAttribute("role", "listbox"), lT.setAttribute("aria-expanded", "true"), lT.setAttribute("aria-label", this.view.state.phrase("Completions")), lT.addEventListener("mousedown", (TT => {
          TT.target == lT && TT.preventDefault()
        }));
        let MT = null;
        for (let KT = cT.from; KT < cT.to; KT++) {
          let {
            completion: OT,
            match: yT
          } = TT[KT], {
            section: fT
          } = OT;
          if (fT) {
            let TT = "string" == typeof fT ? fT : fT.name;
            if (TT != MT && (KT > cT.from || 0 == cT.from))
              if (MT = TT, "string" != typeof fT && fT.header) lT.appendChild(fT.header(fT));
              else {
                lT.appendChild(document.createElement("completion-section")).textContent = TT
              }
          }
          const xT = lT.appendChild(document.createElement("li"));
          xT.id = kT + "-" + KT, xT.setAttribute("role", "option");
          let IT = this.optionClass(OT);
          IT && (xT.className = IT);
          for (let TT of this.optionContent) {
            let kT = TT(OT, this.view.state, this.view, yT);
            kT && xT.appendChild(kT)
          }
        }
        return cT.from && lT.classList.add("cm-completionListIncompleteTop"), cT.to < TT.length && lT.classList.add("cm-completionListIncompleteBottom"), lT
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function bT(TT, kT) {
      return cT => new mT(cT, TT, kT)
    }

    function zT(TT) {
      return 100 * (TT.boost || 0) + (TT.apply ? 10 : 0) + (TT.info ? 5 : 0) + (TT.type ? 1 : 0)
    }
    class JT {
      constructor(TT, kT, cT, lT, MT, KT) {
        this.options = TT, this.attrs = kT, this.tooltip = cT, this.timestamp = lT, this.selected = MT, this.disabled = KT
      }
      setSelected(TT, kT) {
        return TT == this.selected || TT >= this.options.length ? this : new JT(this.options, GT(kT, TT), this.tooltip, this.timestamp, TT, this.disabled)
      }
      static build(TT, kT, cT, lT, MT, KT) {
        if (lT && !KT && TT.some((TT => TT.isPending))) return lT.setDisabled();
        let OT = function(TT, kT) {
          let cT = [],
            lT = null,
            MT = null,
            KT = TT => {
              cT.push(TT);
              let {
                section: kT
              } = TT.completion;
              if (kT) {
                lT || (lT = []);
                let TT = "string" == typeof kT ? kT : kT.name;
                lT.some((kT => kT.name == TT)) || lT.push("string" == typeof kT ? {
                  name: TT
                } : kT)
              }
            },
            OT = kT.facet(aT);
          for (let AT of TT)
            if (AT.hasResult()) {
              let TT = AT.result.getMatch;
              if (!1 === AT.result.filter)
                for (let kT of AT.result.options) KT(new IT(kT, AT.source, TT ? TT(kT) : [], 1e9 - cT.length));
              else {
                let cT, lT = kT.sliceDoc(AT.from, AT.to),
                  yT = OT.filterStrict ? new DT(lT) : new ST(lT);
                for (let kT of AT.result.options)
                  if (cT = yT.match(kT.label)) {
                    let lT = kT.displayLabel ? TT ? TT(kT, cT.matched) : [] : cT.matched,
                      OT = cT.score + (kT.boost || 0);
                    if (KT(new IT(kT, AT.source, lT, OT)), "object" == typeof kT.section && "dynamic" === kT.section.rank) {
                      let {
                        name: TT
                      } = kT.section;
                      MT || (MT = Object.create(null)), MT[TT] = Math.max(OT, MT[TT] || -1e9)
                    }
                  }
              }
            } if (lT) {
            let TT = Object.create(null),
              kT = 0,
              KT = (TT, kT) => ("dynamic" === TT.rank && "dynamic" === kT.rank ? MT[kT.name] - MT[TT.name] : 0) || ("number" == typeof TT.rank ? TT.rank : 1e9) - ("number" == typeof kT.rank ? kT.rank : 1e9) || (TT.name < kT.name ? -1 : 1);
            for (let cT of lT.sort(KT)) kT -= 1e5, TT[cT.name] = kT;
            for (let lT of cT) {
              let {
                section: kT
              } = lT.completion;
              kT && (lT.score += TT["string" == typeof kT ? kT : kT.name])
            }
          }
          let yT = [],
            fT = null,
            xT = OT.compareCompletions;
          for (let IT of cT.sort(((TT, kT) => kT.score - TT.score || xT(TT.completion, kT.completion)))) {
            let TT = IT.completion;
            !fT || fT.label != TT.label || fT.detail != TT.detail || null != fT.type && null != TT.type && fT.type != TT.type || fT.apply != TT.apply || fT.boost != TT.boost ? yT.push(IT) : zT(IT.completion) > zT(fT) && (yT[yT.length - 1] = IT), fT = IT.completion
          }
          return yT
        }(TT, kT);
        if (!OT.length) return lT && TT.some((TT => TT.isPending)) ? lT.setDisabled() : null;
        let yT = kT.facet(aT).selectOnOpen ? 0 : -1;
        if (lT && lT.selected != yT && -1 != lT.selected) {
          let TT = lT.options[lT.selected].completion;
          for (let kT = 0; kT < OT.length; kT++)
            if (OT[kT].completion == TT) {
              yT = kT;
              break
            }
        }
        return new JT(OT, GT(cT, yT), {
          pos: TT.reduce(((TT, kT) => kT.hasResult() ? Math.min(TT, kT.from) : TT), 1e8),
          create: RT,
          above: MT.aboveCursor
        }, lT ? lT.timestamp : Date.now(), yT, !1)
      }
      map(TT) {
        return new JT(this.options, this.attrs, {
          ...this.tooltip,
          pos: TT.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new JT(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class oT {
      constructor(TT, kT, cT) {
        this.active = TT, this.id = kT, this.open = cT
      }
      static start() {
        return new oT(VT, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(TT) {
        let {
          state: kT
        } = TT, cT = kT.facet(aT), lT = (cT.override || kT.languageDataAt("autocomplete", AT(kT)).map(hT)).map((kT => (this.active.find((TT => TT.source == kT)) || new ZT(kT, this.active.some((TT => 0 != TT.state)) ? 1 : 0)).update(TT, cT)));
        lT.length == this.active.length && lT.every(((TT, kT) => TT == this.active[kT])) && (lT = this.active);
        let MT = this.open,
          KT = TT.effects.some((TT => TT.is(XT)));
        MT && TT.docChanged && (MT = MT.map(TT.changes)), TT.selection || lT.some((kT => kT.hasResult() && TT.changes.touchesRange(kT.from, kT.to))) || ! function(TT, kT) {
          if (TT == kT) return !0;
          for (let cT = 0, lT = 0;;) {
            for (; cT < TT.length && !TT[cT].hasResult();) cT++;
            for (; lT < kT.length && !kT[lT].hasResult();) lT++;
            let MT = cT == TT.length,
              KT = lT == kT.length;
            if (MT || KT) return MT == KT;
            if (TT[cT++].result != kT[lT++].result) return !1
          }
        }(lT, this.active) || KT ? MT = JT.build(lT, kT, this.id, MT, cT, KT) : MT && MT.disabled && !lT.some((TT => TT.isPending)) && (MT = null), !MT && lT.every((TT => !TT.isPending)) && lT.some((TT => TT.hasResult())) && (lT = lT.map((TT => TT.hasResult() ? new ZT(TT.source, 0) : TT)));
        for (let OT of TT.effects) OT.is(PT) && (MT = MT && MT.setSelected(OT.value, this.id));
        return lT == this.active && MT == this.open ? this : new oT(lT, this.id, MT)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? HT : eT
      }
    }
    const HT = {
        "aria-autocomplete": "list"
      },
      eT = {};

    function GT(TT, kT) {
      let cT = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": TT
      };
      return kT > -1 && (cT["aria-activedescendant"] = TT + "-" + kT), cT
    }
    const VT = [];

    function ET(TT, kT) {
      if (TT.isUserEvent("input.complete")) {
        let cT = TT.annotation(jT);
        if (cT && kT.activateOnCompletion(cT)) return 12
      }
      let cT = TT.isUserEvent("input.type");
      return cT && kT.activateOnTyping ? 5 : cT ? 1 : TT.isUserEvent("delete.backward") ? 2 : TT.selection ? 8 : TT.docChanged ? 16 : 0
    }
    class ZT {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = TT, this.state = kT, this.explicit = cT
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(TT, kT) {
        let cT = ET(TT, kT),
          lT = this;
        (8 & cT || 16 & cT && this.touches(TT)) && (lT = new ZT(lT.source, 0)), 4 & cT && 0 == lT.state && (lT = new ZT(this.source, 1)), lT = lT.updateFor(TT, cT);
        for (let MT of TT.effects)
          if (MT.is(NT)) lT = new ZT(lT.source, 1, MT.value);
          else if (MT.is(QT)) lT = new ZT(lT.source, 0);
        else if (MT.is(XT))
          for (let TT of MT.value) TT.source == lT.source && (lT = TT);
        return lT
      }
      updateFor(TT, kT) {
        return this.map(TT.changes)
      }
      map(TT) {
        return this
      }
      touches(TT) {
        return TT.changes.touchesRange(AT(TT.state))
      }
    }
    class uT extends ZT {
      constructor(TT, kT, cT, lT, MT, KT) {
        super(TT, 3, kT), this.limit = cT, this.result = lT, this.from = MT, this.to = KT
      }
      hasResult() {
        return !0
      }
      updateFor(TT, kT) {
        var cT;
        if (!(3 & kT)) return this.map(TT.changes);
        let lT = this.result;
        lT.map && !TT.changes.empty && (lT = lT.map(lT, TT.changes));
        let MT = TT.changes.mapPos(this.from),
          KT = TT.changes.mapPos(this.to, 1),
          yT = AT(TT.state);
        if (yT > KT || !lT || 2 & kT && (AT(TT.startState) == this.from || yT < this.limit)) return new ZT(this.source, 4 & kT ? 1 : 0);
        let fT = TT.changes.mapPos(this.limit);
        return function(TT, kT, cT, lT) {
          if (!TT) return !1;
          let MT = kT.sliceDoc(cT, lT);
          return "function" == typeof TT ? TT(MT, cT, lT, kT) : CT(TT, !0).test(MT)
        }(lT.validFor, TT.state, MT, KT) ? new uT(this.source, this.explicit, fT, lT, MT, KT) : lT.update && (lT = lT.update(lT, MT, KT, new OT(TT.state, yT, !1))) ? new uT(this.source, this.explicit, fT, lT, lT.from, null !== (cT = lT.to) && void 0 !== cT ? cT : AT(TT.state)) : new ZT(this.source, 1, this.explicit)
      }
      map(TT) {
        if (TT.empty) return this;
        return (this.result.map ? this.result.map(this.result, TT) : this.result) ? new uT(this.source, this.explicit, TT.mapPos(this.limit), this.result, TT.mapPos(this.from), TT.mapPos(this.to, 1)) : new ZT(this.source, 0)
      }
      touches(TT) {
        return TT.changes.touchesRange(this.from, this.to)
      }
    }
    const XT = lT.F.define({
        map: (TT, kT) => TT.map((TT => TT.map(kT)))
      }),
      dT = lT.H.define({
        create: () => oT.start(),
        update: (TT, kT) => TT.update(kT),
        provide: TT => [MT.gb.from(TT, (TT => TT.tooltip)), MT.h.contentAttributes.from(TT, (TT => TT.attrs))]
      });

    function LT(TT, kT) {
      const cT = kT.completion.apply || kT.completion.label;
      let lT = TT.state.field(dT).active.find((TT => TT.source == kT.source));
      return lT instanceof uT && ("string" == typeof cT ? TT.dispatch({
        ...vT(TT.state, cT, lT.from, lT.to),
        annotations: jT.of(kT.completion)
      }) : cT(TT, kT.completion, lT.from, lT.to), !0)
    }
    const RT = bT(dT, LT);

    function gT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return cT => {
        let lT = cT.state.field(dT, !1);
        if (!lT || !lT.open || lT.open.disabled || Date.now() - lT.open.timestamp < cT.state.facet(aT).interactionDelay) return !1;
        let KT, OT = 1;
        "page" == kT && (KT = (0, MT.x)(cT, lT.open.tooltip)) && (OT = Math.max(2, Math.floor(KT.dom.offsetHeight / KT.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: yT
        } = lT.open.options, fT = lT.open.selected > -1 ? lT.open.selected + OT * (TT ? 1 : -1) : TT ? 0 : yT - 1;
        return fT < 0 ? fT = "page" == kT ? 0 : yT - 1 : fT >= yT && (fT = "page" == kT ? yT - 1 : 0), cT.dispatch({
          effects: PT.of(fT)
        }), !0
      }
    }
    const UT = TT => !!TT.state.field(dT, !1) && (TT.dispatch({
      effects: NT.of(!0)
    }), !0);
    class YT {
      constructor(TT, kT) {
        this.active = TT, this.context = kT, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const BT = MT.k.fromClass(class {
        constructor(TT) {
          this.view = TT, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let kT of TT.state.field(dT).active) kT.isPending && this.startQuery(kT)
        }
        update(TT) {
          let kT = TT.state.field(dT),
            cT = TT.state.facet(aT);
          if (!TT.selectionSet && !TT.docChanged && TT.startState.field(dT) == kT) return;
          let lT = TT.transactions.some((TT => {
            let kT = ET(TT, cT);
            return 8 & kT || (TT.selection || TT.docChanged) && !(3 & kT)
          }));
          for (let yT = 0; yT < this.running.length; yT++) {
            let kT = this.running[yT];
            if (lT || kT.context.abortOnDocChange && TT.docChanged || kT.updates.length + TT.transactions.length > 50 && Date.now() - kT.time > 1e3) {
              for (let TT of kT.context.abortListeners) try {
                TT()
              } catch (OT) {
                (0, MT.S)(this.view.state, OT)
              }
              kT.context.abortListeners = null, this.running.splice(yT--, 1)
            } else kT.updates.push(...TT.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), TT.transactions.some((TT => TT.effects.some((TT => TT.is(NT))))) && (this.pendingStart = !0);
          let KT = this.pendingStart ? 50 : cT.activateOnTypingDelay;
          if (this.debounceUpdate = kT.active.some((TT => TT.isPending && !this.running.some((kT => kT.active.source == TT.source)))) ? setTimeout((() => this.startUpdate()), KT) : -1, 0 != this.composing)
            for (let MT of TT.transactions) MT.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && MT.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: TT
          } = this.view, kT = TT.field(dT);
          for (let cT of kT.active) cT.isPending && !this.running.some((TT => TT.active.source == cT.source)) && this.startQuery(cT);
          this.running.length && kT.open && kT.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(aT).updateSyncTime))
        }
        startQuery(TT) {
          let {
            state: kT
          } = this.view, cT = AT(kT), lT = new OT(kT, cT, TT.explicit, this.view), KT = new YT(TT, lT);
          this.running.push(KT), Promise.resolve(TT.source(lT)).then((TT => {
            KT.context.aborted || (KT.done = TT || null, this.scheduleAccept())
          }), (TT => {
            this.view.dispatch({
              effects: QT.of(null)
            }), (0, MT.S)(this.view.state, TT)
          }))
        }
        scheduleAccept() {
          this.running.every((TT => void 0 !== TT.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(aT).updateSyncTime))
        }
        accept() {
          var TT;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let kT = [],
            cT = this.view.state.facet(aT),
            lT = this.view.state.field(dT);
          for (let MT = 0; MT < this.running.length; MT++) {
            let KT = this.running[MT];
            if (void 0 === KT.done) continue;
            if (this.running.splice(MT--, 1), KT.done) {
              let lT = AT(KT.updates.length ? KT.updates[0].startState : this.view.state),
                MT = Math.min(lT, KT.done.from + (KT.active.explicit ? 0 : 1)),
                OT = new uT(KT.active.source, KT.active.explicit, MT, KT.done, KT.done.from, null !== (TT = KT.done.to) && void 0 !== TT ? TT : lT);
              for (let TT of KT.updates) OT = OT.update(TT, cT);
              if (OT.hasResult()) {
                kT.push(OT);
                continue
              }
            }
            let OT = lT.active.find((TT => TT.source == KT.active.source));
            if (OT && OT.isPending)
              if (null == KT.done) {
                let TT = new ZT(KT.active.source, 0);
                for (let kT of KT.updates) TT = TT.update(kT, cT);
                TT.isPending || kT.push(TT)
              } else this.startQuery(OT)
          }(kT.length || lT.open && lT.open.disabled) && this.view.dispatch({
            effects: XT.of(kT)
          })
        }
      }, {
        eventHandlers: {
          blur(TT) {
            let kT = this.view.state.field(dT, !1);
            if (kT && kT.tooltip && this.view.state.facet(aT).closeOnBlur) {
              let cT = kT.open && (0, MT.x)(this.view, kT.open.tooltip);
              cT && cT.dom.contains(TT.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: QT.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: NT.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      WT = "object" == typeof navigator && /Win/.test(navigator.platform),
      nT = lT.t.highest(MT.h.domEventHandlers({
        keydown(TT, kT) {
          let cT = kT.state.field(dT, !1);
          if (!cT || !cT.open || cT.open.disabled || cT.open.selected < 0 || TT.key.length > 1 || TT.ctrlKey && (!WT || !TT.altKey) || TT.metaKey) return !1;
          let lT = cT.open.options[cT.open.selected],
            MT = cT.active.find((TT => TT.source == lT.source)),
            KT = lT.completion.commitCharacters || MT.result.commitCharacters;
          return KT && KT.indexOf(TT.key) > -1 && LT(kT, lT), !1
        }
      })),
      pT = MT.h.baseTheme({
        ".cm-tooltip.cm-tooltip-autocomplete": {
          "& > ul": {
            fontFamily: "monospace",
            whiteSpace: "nowrap",
            overflow: "hidden auto",
            maxWidth_fallback: "700px",
            maxWidth: "min(700px, 95vw)",
            minWidth: "250px",
            maxHeight: "10em",
            height: "100%",
            listStyle: "none",
            margin: 0,
            padding: 0,
            "& > li, & > completion-section": {
              padding: "1px 3px",
              lineHeight: 1.2
            },
            "& > li": {
              overflowX: "hidden",
              textOverflow: "ellipsis",
              cursor: "pointer"
            },
            "& > completion-section": {
              display: "list-item",
              borderBottom: "1px solid silver",
              paddingLeft: "0.5em",
              opacity: .7
            }
          }
        },
        "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
          background: "#17c",
          color: "white"
        },
        "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
          background: "#777"
        },
        "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
          background: "#347",
          color: "white"
        },
        "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
          background: "#444"
        },
        ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
          content: '"\xb7\xb7\xb7"',
          opacity: .5,
          display: "block",
          textAlign: "center"
        },
        ".cm-tooltip.cm-completionInfo": {
          position: "absolute",
          padding: "3px 9px",
          width: "max-content",
          maxWidth: "400px",
          boxSizing: "border-box",
          whiteSpace: "pre-line"
        },
        ".cm-completionInfo.cm-completionInfo-left": {
          right: "100%"
        },
        ".cm-completionInfo.cm-completionInfo-right": {
          left: "100%"
        },
        ".cm-completionInfo.cm-completionInfo-left-narrow": {
          right: "30px"
        },
        ".cm-completionInfo.cm-completionInfo-right-narrow": {
          left: "30px"
        },
        "&light .cm-snippetField": {
          backgroundColor: "#00000022"
        },
        "&dark .cm-snippetField": {
          backgroundColor: "#ffffff22"
        },
        ".cm-snippetFieldPosition": {
          verticalAlign: "text-top",
          width: 0,
          height: "1.15em",
          display: "inline-block",
          margin: "0 -0.7px -.7em",
          borderLeft: "1.4px dotted #888"
        },
        ".cm-completionMatchedText": {
          textDecoration: "underline"
        },
        ".cm-completionDetail": {
          marginLeft: "0.5em",
          fontStyle: "italic"
        },
        ".cm-completionIcon": {
          fontSize: "90%",
          width: ".8em",
          display: "inline-block",
          textAlign: "center",
          paddingRight: ".6em",
          opacity: "0.6",
          boxSizing: "content-box"
        },
        ".cm-completionIcon-function, .cm-completionIcon-method": {
          "&:after": {
            content: "'\u0192'"
          }
        },
        ".cm-completionIcon-class": {
          "&:after": {
            content: "'\u25cb'"
          }
        },
        ".cm-completionIcon-interface": {
          "&:after": {
            content: "'\u25cc'"
          }
        },
        ".cm-completionIcon-variable": {
          "&:after": {
            content: "'\ud835\udc65'"
          }
        },
        ".cm-completionIcon-constant": {
          "&:after": {
            content: "'\ud835\udc36'"
          }
        },
        ".cm-completionIcon-type": {
          "&:after": {
            content: "'\ud835\udc61'"
          }
        },
        ".cm-completionIcon-enum": {
          "&:after": {
            content: "'\u222a'"
          }
        },
        ".cm-completionIcon-property": {
          "&:after": {
            content: "'\u25a1'"
          }
        },
        ".cm-completionIcon-keyword": {
          "&:after": {
            content: "'\ud83d\udd11\ufe0e'"
          }
        },
        ".cm-completionIcon-namespace": {
          "&:after": {
            content: "'\u25a2'"
          }
        },
        ".cm-completionIcon-text": {
          "&:after": {
            content: "'abc'",
            fontSize: "50%",
            verticalAlign: "middle"
          }
        }
      });
    class iT {
      constructor(TT, kT, cT, lT) {
        this.field = TT, this.line = kT, this.from = cT, this.to = lT
      }
    }
    class qT {
      constructor(TT, kT, cT) {
        this.field = TT, this.from = kT, this.to = cT
      }
      map(TT) {
        let kT = TT.mapPos(this.from, -1, lT.r.TrackDel),
          cT = TT.mapPos(this.to, 1, lT.r.TrackDel);
        return null == kT || null == cT ? null : new qT(this.field, kT, cT)
      }
    }
    class sT {
      constructor(TT, kT) {
        this.lines = TT, this.fieldPositions = kT
      }
      instantiate(TT, kT) {
        let cT = [],
          lT = [kT],
          MT = TT.doc.lineAt(kT),
          OT = /^\s*/.exec(MT.text)[0];
        for (let fT of this.lines) {
          if (cT.length) {
            let cT = OT,
              MT = /^\t*/.exec(fT)[0].length;
            for (let kT = 0; kT < MT; kT++) cT += TT.facet(KT.$);
            lT.push(kT + cT.length - MT), fT = cT + fT.slice(MT)
          }
          cT.push(fT), kT += fT.length + 1
        }
        let yT = this.fieldPositions.map((TT => new qT(TT.field, lT[TT.line] + TT.from, lT[TT.line] + TT.to)));
        return {
          text: cT,
          qt: yT
        }
      }
      static parse(TT) {
        let kT, cT = [],
          lT = [],
          MT = [];
        for (let KT of TT.split(/\r\n?|\n/)) {
          for (; kT = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(KT);) {
            let TT = kT[1] ? +kT[1] : null,
              OT = kT[2] || kT[3] || "",
              yT = -1,
              fT = OT.replace(/\\[{}]/g, (TT => TT[1]));
            for (let kT = 0; kT < cT.length; kT++)(null != TT ? cT[kT].seq == TT : fT && cT[kT].name == fT) && (yT = kT);
            if (yT < 0) {
              let kT = 0;
              for (; kT < cT.length && (null == TT || null != cT[kT].seq && cT[kT].seq < TT);) kT++;
              cT.splice(kT, 0, {
                seq: TT,
                name: fT
              }), yT = kT;
              for (let TT of MT) TT.field >= yT && TT.field++
            }
            for (let cT of MT)
              if (cT.line == lT.length && cT.from > kT.index) {
                let TT = kT[2] ? 3 + (kT[1] || "").length : 2;
                cT.from -= TT, cT.to -= TT
              } MT.push(new iT(yT, lT.length, kT.index, kT.index + fT.length)), KT = KT.slice(0, kT.index) + OT + KT.slice(kT.index + kT[0].length)
          }
          KT = KT.replace(/\\([{}])/g, ((TT, kT, cT) => {
            for (let KT of MT) KT.line == lT.length && KT.from > cT && (KT.from--, KT.to--);
            return kT
          })), lT.push(KT)
        }
        return new sT(lT, MT)
      }
    }
    let Tk = MT.e.widget({
        widget: new class extends MT.m {
          toDOM() {
            let TT = document.createElement("span");
            return TT.className = "cm-snippetFieldPosition", TT
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      kk = MT.e.mark({
        class: "cm-snippetField"
      });
    class ck {
      constructor(TT, kT) {
        this.qt = TT, this.active = kT, this.deco = MT.e.set(TT.map((TT => (TT.from == TT.to ? Tk : kk).range(TT.from, TT.to))), !0)
      }
      map(TT) {
        let kT = [];
        for (let cT of this.qt) {
          let lT = cT.map(TT);
          if (!lT) return null;
          kT.push(lT)
        }
        return new ck(kT, this.active)
      }
      selectionInsideField(TT) {
        return TT.qt.every((TT => this.qt.some((kT => kT.field == this.active && kT.from <= TT.from && kT.to >= TT.to))))
      }
    }
    const lk = lT.F.define({
        map: (TT, kT) => TT && TT.map(kT)
      }),
      Mk = lT.F.define(),
      Kk = lT.H.define({
        create: () => null,
        update(TT, kT) {
          for (let cT of kT.effects) {
            if (cT.is(lk)) return cT.value;
            if (cT.is(Mk) && TT) return new ck(TT.qt, cT.value)
          }
          return TT && kT.docChanged && (TT = TT.map(kT.changes)), TT && kT.selection && !TT.selectionInsideField(kT.selection) && (TT = null), TT
        },
        provide: TT => MT.h.cK.from(TT, (TT => TT ? TT.deco : MT.e.none))
      });

    function Ok(TT, kT) {
      return lT.j.create(TT.filter((TT => TT.field == kT)).map((TT => lT.j.range(TT.from, TT.to))))
    }

    function yk(TT) {
      let kT = sT.parse(TT);
      return (TT, cT, MT, KT) => {
        let {
          text: OT,
          qt: yT
        } = kT.instantiate(TT.state, MT), {
          main: fT
        } = TT.state.selection, xT = {
          changes: {
            from: MT,
            to: KT == fT.from ? fT.to : KT,
            insert: lT.I.of(OT)
          },
          scrollIntoView: !0,
          annotations: cT ? [jT.of(cT), lT.M.userEvent.of("input.complete")] : void 0
        };
        if (yT.length && (xT.selection = Ok(yT, 0)), yT.some((TT => TT.field > 0))) {
          let kT = new ck(yT, 0),
            cT = xT.effects = [lk.of(kT)];
          void 0 === TT.state.field(Kk, !1) && cT.push(lT.F.appendConfig.of([Kk, Ak, jk, pT]))
        }
        TT.dispatch(TT.state.update(xT))
      }
    }

    function fk(TT) {
      return kT => {
        let {
          state: cT,
          dispatch: lT
        } = kT, MT = cT.field(Kk, !1);
        if (!MT || TT < 0 && 0 == MT.active) return !1;
        let KT = MT.active + TT,
          OT = TT > 0 && !MT.qt.some((kT => kT.field == KT + TT));
        return lT(cT.update({
          selection: Ok(MT.qt, KT),
          effects: lk.of(OT ? null : new ck(MT.qt, KT)),
          scrollIntoView: !0
        })), !0
      }
    }
    const xk = [{
        key: "Tab",
        run: fk(1),
        shift: fk(-1)
      }, {
        key: "Escape",
        run: TT => {
          let {
            state: kT,
            dispatch: cT
          } = TT;
          return !!kT.field(Kk, !1) && (cT(kT.update({
            effects: lk.of(null)
          })), !0)
        }
      }],
      Ik = lT.o.define({
        combine: TT => TT.length ? TT[0] : xk
      }),
      Ak = lT.t.highest(MT.L.compute([Ik], (TT => TT.facet(Ik))));

    function Ck(TT, kT) {
      return {
        ...kT,
        apply: yk(TT)
      }
    }
    const jk = MT.h.domEventHandlers({
      mousedown(TT, kT) {
        let cT, lT = kT.state.field(Kk, !1);
        if (!lT || null == (cT = kT.posAtCoords({
            x: TT.clientX,
            y: TT.clientY
          }))) return !1;
        let MT = lT.qt.find((TT => TT.from <= cT && TT.to >= cT));
        return !(!MT || MT.field == lT.active) && (kT.dispatch({
          selection: Ok(lT.qt, MT.field),
          effects: lk.of(lT.qt.some((TT => TT.field > MT.field)) ? new ck(lT.qt, MT.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const vk = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      tk = lT.F.define({
        map(TT, kT) {
          let cT = kT.mapPos(TT, -1, lT.r.TrackAfter);
          return null == cT ? void 0 : cT
        }
      }),
      hk = new class extends lT.C {};
    hk.startSide = 1, hk.endSide = -1;
    const Nk = lT.H.define({
      create: () => lT.y.empty,
      update(TT, kT) {
        if (TT = TT.map(kT.changes), kT.selection) {
          let cT = kT.state.doc.lineAt(kT.selection.main.head);
          TT = TT.update({
            filter: TT => TT >= cT.from && TT <= cT.to
          })
        }
        for (let cT of kT.effects) cT.is(tk) && (TT = TT.update({
          add: [hk.range(cT.value, cT.value + 1)]
        }));
        return TT
      }
    });

    function Qk() {
      return [rk, Nk]
    }
    const Sk = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function Dk(TT) {
      for (let kT = 0; kT < 16; kT += 2)
        if (Sk.charCodeAt(kT) == TT) return Sk.charAt(kT + 1);
      return (0, lT._)(TT < 128 ? TT : TT + 1)
    }

    function ak(TT, kT) {
      return TT.languageDataAt("closeBrackets", kT)[0] || vk
    }
    const Fk = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      rk = MT.h.inputHandler.of(((TT, kT, cT, MT) => {
        if ((Fk ? TT.composing : TT.compositionStarted) || TT.state.readOnly) return !1;
        let KT = TT.state.selection.main;
        if (MT.length > 2 || 2 == MT.length && 1 == (0, lT.O)((0, lT.N)(MT, 0)) || kT != KT.from || cT != KT.to) return !1;
        let OT = function(TT, kT) {
          let cT = ak(TT, TT.selection.main.head),
            MT = cT.brackets || vk.brackets;
          for (let KT of MT) {
            let OT = Dk((0, lT.N)(KT, 0));
            if (kT == KT) return OT == KT ? Jk(TT, KT, MT.indexOf(KT + KT + KT) > -1, cT) : bk(TT, KT, OT, cT.before || vk.before);
            if (kT == OT && wk(TT, TT.selection.main.from)) return zk(TT, KT, OT)
          }
          return null
        }(TT.state, MT);
        return !!OT && (TT.dispatch(OT), !0)
      })),
      Pk = [{
        key: "Backspace",
        run: TT => {
          let {
            state: kT,
            dispatch: cT
          } = TT;
          if (kT.readOnly) return !1;
          let MT = ak(kT, kT.selection.main.head).brackets || vk.brackets,
            KT = null,
            OT = kT.changeByRange((TT => {
              if (TT.empty) {
                let cT = function(TT, kT) {
                  let cT = TT.sliceString(kT - 2, kT);
                  return (0, lT.O)((0, lT.N)(cT, 0)) == cT.length ? cT : cT.slice(1)
                }(kT.doc, TT.head);
                for (let KT of MT)
                  if (KT == cT && mk(kT.doc, TT.head) == Dk((0, lT.N)(KT, 0))) return {
                    changes: {
                      from: TT.head - KT.length,
                      to: TT.head + KT.length
                    },
                    range: lT.j.cursor(TT.head - KT.length)
                  }
              }
              return {
                range: KT = TT
              }
            }));
          return KT || cT(kT.update(OT, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !KT
        }
      }];

    function wk(TT, kT) {
      let cT = !1;
      return TT.field(Nk).between(0, TT.doc.length, (TT => {
        TT == kT && (cT = !0)
      })), cT
    }

    function mk(TT, kT) {
      let cT = TT.sliceString(kT, kT + 2);
      return cT.slice(0, (0, lT.O)((0, lT.N)(cT, 0)))
    }

    function bk(TT, kT, cT, MT) {
      let KT = null,
        OT = TT.changeByRange((OT => {
          if (!OT.empty) return {
            changes: [{
              insert: kT,
              from: OT.from
            }, {
              insert: cT,
              from: OT.to
            }],
            effects: tk.of(OT.to + kT.length),
            range: lT.j.range(OT.anchor + kT.length, OT.head + kT.length)
          };
          let yT = mk(TT.doc, OT.head);
          return !yT || /\s/.test(yT) || MT.indexOf(yT) > -1 ? {
            changes: {
              insert: kT + cT,
              from: OT.head
            },
            effects: tk.of(OT.head + kT.length),
            range: lT.j.cursor(OT.head + kT.length)
          } : {
            range: KT = OT
          }
        }));
      return KT ? null : TT.update(OT, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function zk(TT, kT, cT) {
      let MT = null,
        KT = TT.changeByRange((kT => kT.empty && mk(TT.doc, kT.head) == cT ? {
          changes: {
            from: kT.head,
            to: kT.head + cT.length,
            insert: cT
          },
          range: lT.j.cursor(kT.head + cT.length)
        } : MT = {
          range: kT
        }));
      return MT ? null : TT.update(KT, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Jk(TT, kT, cT, MT) {
      let OT = MT.stringPrefixes || vk.stringPrefixes,
        yT = null,
        fT = TT.changeByRange((MT => {
          if (!MT.empty) return {
            changes: [{
              insert: kT,
              from: MT.from
            }, {
              insert: kT,
              from: MT.to
            }],
            effects: tk.of(MT.to + kT.length),
            range: lT.j.range(MT.anchor + kT.length, MT.head + kT.length)
          };
          let fT, xT = MT.head,
            IT = mk(TT.doc, xT);
          if (IT == kT) {
            if (Hk(TT, xT)) return {
              changes: {
                insert: kT + kT,
                from: xT
              },
              effects: tk.of(xT + kT.length),
              range: lT.j.cursor(xT + kT.length)
            };
            if (wk(TT, xT)) {
              let MT = cT && TT.sliceDoc(xT, xT + 3 * kT.length) == kT + kT + kT ? kT + kT + kT : kT;
              return {
                changes: {
                  from: xT,
                  to: xT + MT.length,
                  insert: MT
                },
                range: lT.j.cursor(xT + MT.length)
              }
            }
          } else {
            if (cT && TT.sliceDoc(xT - 2 * kT.length, xT) == kT + kT && (fT = ek(TT, xT - 2 * kT.length, OT)) > -1 && Hk(TT, fT)) return {
              changes: {
                insert: kT + kT + kT + kT,
                from: xT
              },
              effects: tk.of(xT + kT.length),
              range: lT.j.cursor(xT + kT.length)
            };
            if (TT.charCategorizer(xT)(IT) != lT.i.Word && ek(TT, xT, OT) > -1 && ! function(TT, kT, cT, lT) {
                let MT = (0, KT.hb)(TT).resolveInner(kT, -1),
                  OT = lT.reduce(((TT, kT) => Math.max(TT, kT.length)), 0);
                for (let KT = 0; KT < 5; KT++) {
                  let KT = TT.sliceDoc(MT.from, Math.min(MT.to, MT.from + cT.length + OT)),
                    yT = KT.indexOf(cT);
                  if (!yT || yT > -1 && lT.indexOf(KT.slice(0, yT)) > -1) {
                    let kT = MT.firstChild;
                    for (; kT && kT.from == MT.from && kT.to - kT.from > cT.length + yT;) {
                      if (TT.sliceDoc(kT.to - cT.length, kT.to) == cT) return !1;
                      kT = kT.firstChild
                    }
                    return !0
                  }
                  let fT = MT.to == kT && MT.parent;
                  if (!fT) break;
                  MT = fT
                }
                return !1
              }(TT, xT, kT, OT)) return {
              changes: {
                insert: kT + kT,
                from: xT
              },
              effects: tk.of(xT + kT.length),
              range: lT.j.cursor(xT + kT.length)
            }
          }
          return {
            range: yT = MT
          }
        }));
      return yT ? null : TT.update(fT, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Hk(TT, kT) {
      let cT = (0, KT.hb)(TT).resolveInner(kT + 1);
      return cT.parent && cT.from == kT
    }

    function ek(TT, kT, cT) {
      let MT = TT.charCategorizer(kT);
      if (MT(TT.sliceDoc(kT - 1, kT)) != lT.i.Word) return kT;
      for (let KT of cT) {
        let cT = kT - KT.length;
        if (TT.sliceDoc(cT, kT) == KT && MT(TT.sliceDoc(cT - 1, cT)) != lT.i.Word) return cT
      }
      return -1
    }

    function Gk() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [nT, dT, aT.of(TT), BT, Ek, pT]
    }
    const Vk = [{
        key: "Ctrl-Space",
        run: UT
      }, {
        mac: "Alt-`",
        run: UT
      }, {
        mac: "Alt-i",
        run: UT
      }, {
        key: "Escape",
        run: TT => {
          let kT = TT.state.field(dT, !1);
          return !(!kT || !kT.active.some((TT => 0 != TT.state))) && (TT.dispatch({
            effects: QT.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: gT(!0)
      }, {
        key: "ArrowUp",
        run: gT(!1)
      }, {
        key: "PageDown",
        run: gT(!0, "page")
      }, {
        key: "PageUp",
        run: gT(!1, "page")
      }, {
        key: "Enter",
        run: TT => {
          let kT = TT.state.field(dT, !1);
          return !(TT.state.readOnly || !kT || !kT.open || kT.open.selected < 0 || kT.open.disabled || Date.now() - kT.open.timestamp < TT.state.facet(aT).interactionDelay) && LT(TT, kT.open.options[kT.open.selected])
        }
      }],
      Ek = lT.t.highest(MT.L.computeN([aT], (TT => TT.facet(aT).defaultKeymap ? [Vk] : [])))
  },
  41062: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => xT,
      f: () => CT,
      g: () => IT,
      i: () => AT
    });
    var lT = cT(40941);
    class MT {
      constructor(TT, kT, cT, lT) {
        this.origin = TT, this.changes = kT, this.effects = cT, this.clientID = lT
      }
    }
    class KT {
      constructor(TT, kT) {
        this.version = TT, this.unconfirmed = kT
      }
    }
    const OT = lT.o.define({
        combine(TT) {
          let kT = (0, lT.R)(TT, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: TT => TT
          });
          return null == kT.clientID && (kT.clientID = TT.length && TT[0].generatedID || ""), kT
        }
      }),
      yT = lT.d.define(),
      fT = lT.H.define({
        create: TT => new KT(TT.facet(OT).startVersion, []),
        update(TT, kT) {
          let cT = kT.annotation(yT);
          if (cT) return cT;
          let {
            sharedEffects: lT,
            clientID: fT
          } = kT.startState.facet(OT), xT = lT(kT);
          return xT.length || !kT.changes.empty ? new KT(TT.version, TT.unconfirmed.concat(new MT(kT, kT.changes, xT, fT))) : TT
        }
      });

    function xT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [fT, OT.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, TT))]
    }

    function IT(TT, kT) {
      let {
        version: cT,
        unconfirmed: xT
      } = TT.field(fT), {
        clientID: IT
      } = TT.facet(OT);
      cT += kT.length;
      let AT = [],
        CT = null,
        jT = 0;
      for (let MT of kT) {
        let TT = jT < xT.length ? xT[jT] : null;
        TT && TT.clientID == MT.clientID ? (CT && (CT = CT.map(TT.changes, !0)), AT = lT.F.mapEffects(AT, MT.changes), jT++) : (AT = lT.F.mapEffects(AT, MT.changes), MT.effects && (AT = AT.concat(MT.effects)), CT = CT ? CT.compose(MT.changes) : MT.changes)
      }
      if (jT && (xT = xT.slice(jT)), xT.length && (CT && (xT = xT.map((TT => {
          let kT = TT.changes.map(CT);
          return CT = CT.map(TT.changes, !0), new MT(TT.origin, kT, lT.F.mapEffects(TT.effects, CT), IT)
        }))), AT.length)) {
        let TT = xT.reduce(((TT, kT) => TT.compose(kT.changes)), lT.ChangeSet.empty(xT[0].changes.length));
        AT = lT.F.mapEffects(AT, TT)
      }
      return CT ? TT.update({
        changes: CT,
        effects: AT,
        annotations: [lT.M.addToHistory.of(!1), lT.M.remote.of(!0), yT.of(new KT(cT, xT))],
        filter: !1
      }) : TT.update({
        annotations: [yT.of(new KT(cT, xT))]
      })
    }

    function AT(TT) {
      return TT.field(fT).unconfirmed
    }

    function CT(TT) {
      return TT.field(fT).version
    }
  },
  40963: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => tk
    });
    var lT = cT(40955);
    class MT {
      constructor(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
        let xT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          IT = arguments.length > 10 ? arguments[10] : void 0;
        this.p = TT, this.stack = kT, this.state = cT, this.reducePos = lT, this.pos = MT, this.score = KT, this.buffer = OT, this.bufferBase = yT, this.curContext = fT, this.lookAhead = xT, this.parent = IT
      }
      toString() {
        return `[${this.stack.filter(((TT,kT)=>kT%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          lT = TT.parser.context;
        return new MT(TT, [], kT, cT, cT, 0, [], 0, lT ? new KT(lT, lT.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(TT, kT) {
        this.stack.push(this.state, kT, this.bufferBase + this.buffer.length), this.state = TT
      }
      reduce(TT) {
        var kT;
        let cT = TT >> 19,
          lT = 65535 & TT,
          {
            parser: MT
          } = this.p,
          KT = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          OT = MT.dynamicPrecedence(lT);
        if (OT && (this.score += OT), 0 == cT) return this.pushState(MT.getGoto(this.state, lT, !0), this.reducePos), lT < MT.minRepeatTerm && this.storeNode(lT, this.reducePos, this.reducePos, KT ? 8 : 4, !0), void this.reduceContext(lT, this.reducePos);
        let yT = this.stack.length - 3 * (cT - 1) - (262144 & TT ? 6 : 0),
          fT = yT ? this.stack[yT - 2] : this.p.qt[0].from,
          xT = this.reducePos - fT;
        xT >= 2e3 && !(null === (kT = this.p.parser.nodeSet.types[lT]) || void 0 === kT ? void 0 : kT.isAnonymous) && (fT == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = xT) : this.p.lastBigReductionSize < xT && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = fT, this.p.lastBigReductionSize = xT));
        let IT = yT ? this.stack[yT - 1] : 0,
          AT = this.bufferBase + this.buffer.length - IT;
        if (lT < MT.minRepeatTerm || 131072 & TT) {
          let TT = MT.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(lT, fT, TT, AT + 4, !0)
        }
        if (262144 & TT) this.state = this.stack[yT];
        else {
          let TT = this.stack[yT - 3];
          this.state = MT.getGoto(TT, lT, !0)
        }
        for (; this.stack.length > yT;) this.stack.pop();
        this.reduceContext(lT, fT)
      }
      storeNode(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == TT && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let TT = this,
            lT = this.buffer.length;
          if (0 == lT && TT.parent && (lT = TT.bufferBase - TT.parent.bufferBase, TT = TT.parent), lT > 0 && 0 == TT.buffer[lT - 4] && TT.buffer[lT - 1] > -1) {
            if (kT == cT) return;
            if (TT.buffer[lT - 2] >= kT) return void(TT.buffer[lT - 2] = cT)
          }
        }
        if (MT && this.pos != cT) {
          let MT = this.buffer.length;
          if (MT > 0 && (0 != this.buffer[MT - 4] || this.buffer[MT - 1] < 0)) {
            let TT = !1;
            for (let kT = MT; kT > 0 && this.buffer[kT - 2] > cT; kT -= 4)
              if (this.buffer[kT - 1] >= 0) {
                TT = !0;
                break
              } if (TT)
              for (; MT > 0 && this.buffer[MT - 2] > cT;) this.buffer[MT] = this.buffer[MT - 4], this.buffer[MT + 1] = this.buffer[MT - 3], this.buffer[MT + 2] = this.buffer[MT - 2], this.buffer[MT + 3] = this.buffer[MT - 1], MT -= 4, lT > 4 && (lT -= 4)
          }
          this.buffer[MT] = TT, this.buffer[MT + 1] = kT, this.buffer[MT + 2] = cT, this.buffer[MT + 3] = lT
        } else this.buffer.push(TT, kT, cT, lT)
      }
      shift(TT, kT, cT, lT) {
        if (131072 & TT) this.pushState(65535 & TT, this.pos);
        else if (0 == (262144 & TT)) {
          let MT = TT,
            {
              parser: KT
            } = this.p;
          this.pos = lT;
          let OT = KT.stateFlag(MT, 1);
          !OT && (lT > cT || kT <= KT.maxNode) && (this.reducePos = lT), this.pushState(MT, OT ? cT : Math.min(cT, this.reducePos)), this.shiftContext(kT, cT), kT <= KT.maxNode && this.buffer.push(kT, cT, lT, 4)
        } else this.pos = lT, this.shiftContext(kT, cT), kT <= this.p.parser.maxNode && this.buffer.push(kT, cT, lT, 4)
      }
      apply(TT, kT, cT, lT) {
        65536 & TT ? this.reduce(TT) : this.shift(TT, kT, cT, lT)
      }
      useNode(TT, kT) {
        let cT = this.p.reused.length - 1;
        (cT < 0 || this.p.reused[cT] != TT) && (this.p.reused.push(TT), cT++);
        let lT = this.pos;
        this.reducePos = this.pos = lT + TT.length, this.pushState(kT, lT), this.buffer.push(cT, lT, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, TT, this, this.p.stream.reset(this.pos - TT.length)))
      }
      split() {
        let TT = this,
          kT = TT.buffer.length;
        for (; kT > 0 && TT.buffer[kT - 2] > TT.reducePos;) kT -= 4;
        let cT = TT.buffer.slice(kT),
          lT = TT.bufferBase + kT;
        for (; TT && lT == TT.bufferBase;) TT = TT.parent;
        return new MT(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, cT, lT, this.curContext, this.lookAhead, TT)
      }
      recoverByDelete(TT, kT) {
        let cT = TT <= this.p.parser.maxNode;
        cT && this.storeNode(TT, this.pos, kT, 4), this.storeNode(0, this.pos, kT, cT ? 8 : 4), this.pos = this.reducePos = kT, this.score -= 190
      }
      canShift(TT) {
        for (let kT = new OT(this);;) {
          let cT = this.p.parser.stateSlot(kT.state, 4) || this.p.parser.hasAction(kT.state, TT);
          if (0 == cT) return !1;
          if (0 == (65536 & cT)) return !0;
          kT.reduce(cT)
        }
      }
      recoverByInsert(TT) {
        if (this.stack.length >= 300) return [];
        let kT = this.p.parser.nextStates(this.state);
        if (kT.length > 8 || this.stack.length >= 120) {
          let cT = [];
          for (let lT, MT = 0; MT < kT.length; MT += 2)(lT = kT[MT + 1]) != this.state && this.p.parser.hasAction(lT, TT) && cT.push(kT[MT], lT);
          if (this.stack.length < 120)
            for (let TT = 0; cT.length < 8 && TT < kT.length; TT += 2) {
              let lT = kT[TT + 1];
              cT.some(((TT, kT) => 1 & kT && TT == lT)) || cT.push(kT[TT], lT)
            }
          kT = cT
        }
        let cT = [];
        for (let lT = 0; lT < kT.length && cT.length < 4; lT += 2) {
          let TT = kT[lT + 1];
          if (TT == this.state) continue;
          let MT = this.split();
          MT.pushState(TT, this.pos), MT.storeNode(0, MT.pos, MT.pos, 4, !0), MT.shiftContext(kT[lT], this.pos), MT.reducePos = this.pos, MT.score -= 200, cT.push(MT)
        }
        return cT
      }
      forceReduce() {
        let {
          parser: TT
        } = this.p, kT = TT.stateSlot(this.state, 5);
        if (0 == (65536 & kT)) return !1;
        if (!TT.validAction(this.state, kT)) {
          let cT = kT >> 19,
            lT = 65535 & kT,
            MT = this.stack.length - 3 * cT;
          if (MT < 0 || TT.getGoto(this.stack[MT], lT, !1) < 0) {
            let TT = this.findForcedReduction();
            if (null == TT) return !1;
            kT = TT
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(kT), !0
      }
      findForcedReduction() {
        let {
          parser: TT
        } = this.p, kT = [], cT = (lT, MT) => {
          if (!kT.includes(lT)) return kT.push(lT), TT.allActions(lT, (kT => {
            if (393216 & kT);
            else if (65536 & kT) {
              let cT = (kT >> 19) - MT;
              if (cT > 1) {
                let lT = 65535 & kT,
                  MT = this.stack.length - 3 * cT;
                if (MT >= 0 && TT.getGoto(this.stack[MT], lT, !1) >= 0) return cT << 19 | 65536 | lT
              }
            } else {
              let TT = cT(kT, MT + 1);
              if (null != TT) return TT
            }
          }))
        };
        return cT(this.state, 0)
      }
      forceAll() {
        for (; !this.p.parser.stateFlag(this.state, 2);)
          if (!this.forceReduce()) {
            this.storeNode(0, this.pos, this.pos, 4, !0);
            break
          } return this
      }
      get deadEnd() {
        if (3 != this.stack.length) return !1;
        let {
          parser: TT
        } = this.p;
        return 65535 == TT.data[TT.stateSlot(this.state, 1)] && !TT.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(TT) {
        if (this.state != TT.state || this.stack.length != TT.stack.length) return !1;
        for (let kT = 0; kT < this.stack.length; kT += 3)
          if (this.stack[kT] != TT.stack[kT]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(TT) {
        return this.p.parser.dialect.flags[TT]
      }
      shiftContext(TT, kT) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, TT, this, this.p.stream.reset(kT)))
      }
      reduceContext(TT, kT) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, TT, this, this.p.stream.reset(kT)))
      }
      emitContext() {
        let TT = this.buffer.length - 1;
        (TT < 0 || -3 != this.buffer[TT]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let TT = this.buffer.length - 1;
        (TT < 0 || -4 != this.buffer[TT]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(TT) {
        if (TT != this.curContext.context) {
          let kT = new KT(this.curContext.tracker, TT);
          kT.hash != this.curContext.hash && this.emitContext(), this.curContext = kT
        }
      }
      setLookAhead(TT) {
        return !(TT <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = TT, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class KT {
      constructor(TT, kT) {
        this.tracker = TT, this.context = kT, this.hash = TT.strict ? TT.hash(kT) : 0
      }
    }
    class OT {
      constructor(TT) {
        this.start = TT, this.state = TT.state, this.stack = TT.stack, this.base = this.stack.length
      }
      reduce(TT) {
        let kT = 65535 & TT,
          cT = TT >> 19;
        0 == cT ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (cT - 1);
        let lT = this.start.p.parser.getGoto(this.stack[this.base - 3], kT, !0);
        this.state = lT
      }
    }
    class yT {
      constructor(TT, kT, cT) {
        this.stack = TT, this.pos = kT, this.index = cT, this.buffer = TT.buffer, 0 == this.index && this.maybeNext()
      }
      static create(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.bufferBase + TT.buffer.length;
        return new yT(TT, kT, kT - TT.bufferBase)
      }
      maybeNext() {
        let TT = this.stack.parent;
        null != TT && (this.index = this.stack.bufferBase - TT.bufferBase, this.stack = TT, this.buffer = TT.buffer)
      }
      get id() {
        return this.buffer[this.index - 4]
      }
      get start() {
        return this.buffer[this.index - 3]
      }
      get end() {
        return this.buffer[this.index - 2]
      }
      get size() {
        return this.buffer[this.index - 1]
      }
      next() {
        this.index -= 4, this.pos -= 4, 0 == this.index && this.maybeNext()
      }
      fork() {
        return new yT(this.stack, this.pos, this.index)
      }
    }

    function fT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof TT) return TT;
      let cT = null;
      for (let lT = 0, MT = 0; lT < TT.length;) {
        let KT = 0;
        for (;;) {
          let kT = TT.charCodeAt(lT++),
            cT = !1;
          if (126 == kT) {
            KT = 65535;
            break
          }
          kT >= 92 && kT--, kT >= 34 && kT--;
          let MT = kT - 32;
          if (MT >= 46 && (MT -= 46, cT = !0), KT += MT, cT) break;
          KT *= 46
        }
        cT ? cT[MT++] = KT : cT = new kT(KT)
      }
      return cT
    }
    class xT {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const IT = new xT;
    class AT {
      constructor(TT, kT) {
        this.input = TT, this.qt = kT, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = IT, this.rangeIndex = 0, this.pos = this.chunkPos = kT[0].from, this.range = kT[0], this.end = kT[kT.length - 1].to, this.readNext()
      }
      resolveOffset(TT, kT) {
        let cT = this.range,
          lT = this.rangeIndex,
          MT = this.pos + TT;
        for (; MT < cT.from;) {
          if (!lT) return null;
          let TT = this.qt[--lT];
          MT -= cT.from - TT.to, cT = TT
        }
        for (; kT < 0 ? MT > cT.to : MT >= cT.to;) {
          if (lT == this.qt.length - 1) return null;
          let TT = this.qt[++lT];
          MT += TT.from - cT.to, cT = TT
        }
        return MT
      }
      clipPos(TT) {
        if (TT >= this.range.from && TT < this.range.to) return TT;
        for (let kT of this.qt)
          if (kT.to > TT) return Math.max(TT, kT.from);
        return this.end
      }
      peek(TT) {
        let kT, cT, lT = this.chunkOff + TT;
        if (lT >= 0 && lT < this.chunk.length) kT = this.pos + TT, cT = this.chunk.charCodeAt(lT);
        else {
          let lT = this.resolveOffset(TT, 1);
          if (null == lT) return -1;
          if (kT = lT, kT >= this.chunk2Pos && kT < this.chunk2Pos + this.chunk2.length) cT = this.chunk2.charCodeAt(kT - this.chunk2Pos);
          else {
            let TT = this.rangeIndex,
              lT = this.range;
            for (; lT.to <= kT;) lT = this.qt[++TT];
            this.chunk2 = this.input.chunk(this.chunk2Pos = kT), kT + this.chunk2.length > lT.to && (this.chunk2 = this.chunk2.slice(0, lT.to - kT)), cT = this.chunk2.charCodeAt(0)
          }
        }
        return kT >= this.token.lookAhead && (this.token.lookAhead = kT + 1), cT
      }
      acceptToken(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = kT ? this.resolveOffset(kT, -1) : this.pos;
        if (null == cT || cT < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = TT, this.token.end = cT
      }
      acceptTokenTo(TT, kT) {
        this.token.value = TT, this.token.end = kT
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: TT,
            chunkPos: kT
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = TT, this.chunk2Pos = kT, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let TT = this.input.chunk(this.pos),
            kT = this.pos + TT.length;
          this.chunk = kT > this.range.to ? TT.slice(0, this.range.to - this.pos) : TT, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += TT; this.pos + TT >= this.range.to;) {
          if (this.rangeIndex == this.qt.length - 1) return this.setDone();
          TT -= this.range.to - this.pos, this.range = this.qt[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += TT, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.qt[this.rangeIndex = this.qt.length - 1], this.chunk = "", this.next = -1
      }
      reset(TT, kT) {
        if (kT ? (this.token = kT, kT.start = TT, kT.lookAhead = TT + 1, kT.value = kT.extended = -1) : this.token = IT, this.pos != TT) {
          if (this.pos = TT, TT == this.end) return this.setDone(), this;
          for (; TT < this.range.from;) this.range = this.qt[--this.rangeIndex];
          for (; TT >= this.range.to;) this.range = this.qt[++this.rangeIndex];
          TT >= this.chunkPos && TT < this.chunkPos + this.chunk.length ? this.chunkOff = TT - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(TT, kT) {
        if (TT >= this.chunkPos && kT <= this.chunkPos + this.chunk.length) return this.chunk.slice(TT - this.chunkPos, kT - this.chunkPos);
        if (TT >= this.chunk2Pos && kT <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(TT - this.chunk2Pos, kT - this.chunk2Pos);
        if (TT >= this.range.from && kT <= this.range.to) return this.input.read(TT, kT);
        let cT = "";
        for (let lT of this.qt) {
          if (lT.from >= kT) break;
          lT.to > TT && (cT += this.input.read(Math.max(lT.from, TT), Math.min(lT.to, kT)))
        }
        return cT
      }
    }
    class CT {
      constructor(TT, kT) {
        this.data = TT, this.id = kT
      }
      token(TT, kT) {
        let {
          parser: cT
        } = kT.p;
        tT(this.data, TT, kT, this.id, cT.data, cT.tokenPrecTable)
      }
    }
    CT.prototype.contextual = CT.prototype.fallback = CT.prototype.extend = !1;
    class jT {
      constructor(TT, kT, cT) {
        this.precTable = kT, this.elseToken = cT, this.data = "string" == typeof TT ? fT(TT) : TT
      }
      token(TT, kT) {
        let cT = TT.pos,
          lT = 0;
        for (;;) {
          let cT = TT.next < 0,
            MT = TT.resolveOffset(1, 1);
          if (tT(this.data, TT, kT, 0, this.data, this.precTable), TT.token.value > -1) break;
          if (null == this.elseToken) return;
          if (cT || lT++, null == MT) break;
          TT.reset(MT, TT.token)
        }
        lT && (TT.reset(cT, TT.token), TT.acceptToken(this.elseToken, lT))
      }
    }
    jT.prototype.contextual = CT.prototype.fallback = CT.prototype.extend = !1;
    class vT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = TT, this.contextual = !!kT.contextual, this.fallback = !!kT.fallback, this.extend = !!kT.extend
      }
    }

    function tT(TT, kT, cT, lT, MT, KT) {
      let OT = 0,
        yT = 1 << lT,
        {
          dialect: fT
        } = cT.p.parser;
      TT: for (; 0 != (yT & TT[OT]);) {
        let cT = TT[OT + 1];
        for (let AT = OT + 3; AT < cT; AT += 2)
          if ((TT[AT + 1] & yT) > 0) {
            let cT = TT[AT];
            if (fT.allows(cT) && (-1 == kT.token.value || kT.token.value == cT || NT(cT, kT.token.value, MT, KT))) {
              kT.acceptToken(cT);
              break
            }
          } let lT = kT.next,
          xT = 0,
          IT = TT[OT + 2];
        if (!(kT.next < 0 && IT > xT && 65535 == TT[cT + 3 * IT - 3])) {
          for (; xT < IT;) {
            let MT = xT + IT >> 1,
              KT = cT + MT + (MT << 1),
              yT = TT[KT],
              fT = TT[KT + 1] || 65536;
            if (lT < yT) IT = MT;
            else {
              if (!(lT >= fT)) {
                OT = TT[KT + 2], kT.advance();
                continue TT
              }
              xT = MT + 1
            }
          }
          break
        }
        OT = TT[cT + 3 * IT - 1]
      }
    }

    function hT(TT, kT, cT) {
      for (let lT, MT = kT; 65535 != (lT = TT[MT]); MT++)
        if (lT == cT) return MT - kT;
      return -1
    }

    function NT(TT, kT, cT, lT) {
      let MT = hT(cT, lT, kT);
      return MT < 0 || hT(cT, lT, TT) < MT
    }
    const QT = "undefined" != typeof process && {
      NODE_ENV: "production",
      PUBLIC_URL: "",
      WDS_SOCKET_HOST: void 0,
      WDS_SOCKET_PATH: void 0,
      WDS_SOCKET_PORT: void 0,
      FAST_REFRESH: !0,
      REACT_APP_DEV_URLS: "false"
    } && /\bparse\b/.test({
      NODE_ENV: "production",
      PUBLIC_URL: "",
      WDS_SOCKET_HOST: void 0,
      WDS_SOCKET_PATH: void 0,
      WDS_SOCKET_PORT: void 0,
      FAST_REFRESH: !0,
      REACT_APP_DEV_URLS: "false"
    }.LOG);
    let ST = null;

    function DT(TT, kT, cT) {
      let MT = TT.cursor(lT.g.IncludeAnonymous);
      for (MT.moveTo(kT);;)
        if (!(cT < 0 ? MT.childBefore(kT) : MT.childAfter(kT)))
          for (;;) {
            if ((cT < 0 ? MT.to < kT : MT.from > kT) && !MT.type.isError) return cT < 0 ? Math.max(0, Math.min(MT.to - 1, kT - 25)) : Math.min(TT.length, Math.max(MT.from + 1, kT + 25));
            if (cT < 0 ? MT.prevSibling() : MT.nextSibling()) break;
            if (!MT.parent()) return cT < 0 ? 0 : TT.length
          }
    }
    class aT {
      constructor(TT, kT) {
        this.fragments = TT, this.nodeSet = kT, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let TT = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (TT) {
          for (this.safeFrom = TT.openStart ? DT(TT.tree, TT.from + TT.offset, 1) - TT.offset : TT.from, this.safeTo = TT.openEnd ? DT(TT.tree, TT.to + TT.offset, -1) - TT.offset : TT.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(TT.tree), this.start.push(-TT.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(TT) {
        if (TT < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= TT;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let kT = this.trees.length - 1;
          if (kT < 0) return this.nextFragment(), null;
          let cT = this.trees[kT],
            MT = this.index[kT];
          if (MT == cT.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let KT = cT.children[MT],
            OT = this.start[kT] + cT.positions[MT];
          if (OT > TT) return this.nextStart = OT, null;
          if (KT instanceof lT.y) {
            if (OT == TT) {
              if (OT < this.safeFrom) return null;
              let TT = OT + KT.length;
              if (TT <= this.safeTo) {
                let kT = KT.prop(lT.j.lookAhead);
                if (!kT || TT + kT < this.fragment.to) return KT
              }
            }
            this.index[kT]++, OT + KT.length >= Math.max(this.safeFrom, TT) && (this.trees.push(KT), this.start.push(OT), this.index.push(0))
          } else this.index[kT]++, this.nextStart = OT + KT.length
        }
      }
    }
    class FT {
      constructor(TT, kT) {
        this.stream = kT, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = TT.tokenizers.map((TT => new xT))
      }
      getActions(TT) {
        let kT = 0,
          cT = null,
          {
            parser: lT
          } = TT.p,
          {
            tokenizers: MT
          } = lT,
          KT = lT.stateSlot(TT.state, 3),
          OT = TT.curContext ? TT.curContext.hash : 0,
          yT = 0;
        for (let fT = 0; fT < MT.length; fT++) {
          if (0 == (1 << fT & KT)) continue;
          let lT = MT[fT],
            xT = this.tokens[fT];
          if ((!cT || lT.fallback) && ((lT.contextual || xT.start != TT.pos || xT.mask != KT || xT.context != OT) && (this.updateCachedToken(xT, lT, TT), xT.mask = KT, xT.context = OT), xT.lookAhead > xT.end + 25 && (yT = Math.max(xT.lookAhead, yT)), 0 != xT.value)) {
            let MT = kT;
            if (xT.extended > -1 && (kT = this.addActions(TT, xT.extended, xT.end, kT)), kT = this.addActions(TT, xT.value, xT.end, kT), !lT.extend && (cT = xT, kT > MT)) break
          }
        }
        for (; this.actions.length > kT;) this.actions.pop();
        return yT && TT.setLookAhead(yT), cT || TT.pos != this.stream.end || (cT = new xT, cT.value = TT.p.parser.eofTerm, cT.start = cT.end = TT.pos, kT = this.addActions(TT, cT.value, cT.end, kT)), this.mainToken = cT, this.actions
      }
      getMainToken(TT) {
        if (this.mainToken) return this.mainToken;
        let kT = new xT,
          {
            pos: cT,
            p: lT
          } = TT;
        return kT.start = cT, kT.end = Math.min(cT + 1, lT.stream.end), kT.value = cT == lT.stream.end ? lT.parser.eofTerm : 0, kT
      }
      updateCachedToken(TT, kT, cT) {
        let lT = this.stream.clipPos(cT.pos);
        if (kT.token(this.stream.reset(lT, TT), cT), TT.value > -1) {
          let {
            parser: kT
          } = cT.p;
          for (let lT = 0; lT < kT.specialized.length; lT++)
            if (kT.specialized[lT] == TT.value) {
              let MT = kT.specializers[lT](this.stream.read(TT.start, TT.end), cT);
              if (MT >= 0 && cT.p.parser.dialect.allows(MT >> 1)) {
                0 == (1 & MT) ? TT.value = MT >> 1 : TT.extended = MT >> 1;
                break
              }
            }
        } else TT.value = 0, TT.end = this.stream.clipPos(lT + 1)
      }
      putAction(TT, kT, cT, lT) {
        for (let MT = 0; MT < lT; MT += 3)
          if (this.actions[MT] == TT) return lT;
        return this.actions[lT++] = TT, this.actions[lT++] = kT, this.actions[lT++] = cT, lT
      }
      addActions(TT, kT, cT, lT) {
        let {
          state: MT
        } = TT, {
          parser: KT
        } = TT.p, {
          data: OT
        } = KT;
        for (let yT = 0; yT < 2; yT++)
          for (let TT = KT.stateSlot(MT, yT ? 2 : 1);; TT += 3) {
            if (65535 == OT[TT]) {
              if (1 != OT[TT + 1]) {
                0 == lT && 2 == OT[TT + 1] && (lT = this.putAction(zT(OT, TT + 2), kT, cT, lT));
                break
              }
              TT = zT(OT, TT + 2)
            }
            OT[TT] == kT && (lT = this.putAction(zT(OT, TT + 1), kT, cT, lT))
          }
        return lT
      }
    }
    class rT {
      constructor(TT, kT, cT, lT) {
        this.parser = TT, this.input = kT, this.qt = lT, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new AT(kT, lT), this.tokens = new FT(TT, this.stream), this.topTerm = TT.top[1];
        let {
          from: KT
        } = lT[0];
        this.stacks = [MT.start(this, TT.top[0], KT)], this.fragments = cT.length && this.stream.end - KT > 4 * TT.bufferLength ? new aT(cT, TT.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let TT, kT, cT = this.stacks,
          lT = this.minStackPos,
          MT = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == cT.length) {
          let [TT] = cT;
          for (; TT.forceReduce() && TT.stack.length && TT.stack[TT.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let KT = 0; KT < cT.length; KT++) {
          let OT = cT[KT];
          for (;;) {
            if (this.tokens.mainToken = null, OT.pos > lT) MT.push(OT);
            else {
              if (this.advanceStack(OT, MT, cT)) continue;
              {
                TT || (TT = [], kT = []), TT.push(OT);
                let cT = this.tokens.getMainToken(OT);
                kT.push(cT.value, cT.end)
              }
            }
            break
          }
        }
        if (!MT.length) {
          let kT = TT && function(TT) {
            let kT = null;
            for (let cT of TT) {
              let TT = cT.p.stoppedAt;
              (cT.pos == cT.p.stream.end || null != TT && cT.pos > TT) && cT.p.parser.stateFlag(cT.state, 2) && (!kT || kT.score < cT.score) && (kT = cT)
            }
            return kT
          }(TT);
          if (kT) return QT && console.log("Finish with " + this.stackID(kT)), this.stackToTree(kT);
          if (this.parser.strict) throw QT && TT && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + lT);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && TT) {
          let cT = null != this.stoppedAt && TT[0].pos > this.stoppedAt ? TT[0] : this.runRecovery(TT, kT, MT);
          if (cT) return QT && console.log("Force-finish " + this.stackID(cT)), this.stackToTree(cT.forceAll())
        }
        if (this.recovering) {
          let TT = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (MT.length > TT)
            for (MT.sort(((TT, kT) => kT.score - TT.score)); MT.length > TT;) MT.pop();
          MT.some((TT => TT.reducePos > lT)) && this.recovering--
        } else if (MT.length > 1) {
          TT: for (let TT = 0; TT < MT.length - 1; TT++) {
            let kT = MT[TT];
            for (let cT = TT + 1; cT < MT.length; cT++) {
              let lT = MT[cT];
              if (kT.sameState(lT) || kT.buffer.length > 500 && lT.buffer.length > 500) {
                if (!((kT.score - lT.score || kT.buffer.length - lT.buffer.length) > 0)) {
                  MT.splice(TT--, 1);
                  continue TT
                }
                MT.splice(cT--, 1)
              }
            }
          }
          MT.length > 12 && (MT.sort(((TT, kT) => kT.score - TT.score)), MT.splice(12, MT.length - 12))
        }
        this.minStackPos = MT[0].pos;
        for (let KT = 1; KT < MT.length; KT++) MT[KT].pos < this.minStackPos && (this.minStackPos = MT[KT].pos);
        return null
      }
      stopAt(TT) {
        if (null != this.stoppedAt && this.stoppedAt < TT) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = TT
      }
      advanceStack(TT, kT, cT) {
        let MT = TT.pos,
          {
            parser: KT
          } = this,
          OT = QT ? this.stackID(TT) + " -> " : "";
        if (null != this.stoppedAt && MT > this.stoppedAt) return TT.forceReduce() ? TT : null;
        if (this.fragments) {
          let kT = TT.curContext && TT.curContext.tracker.strict,
            cT = kT ? TT.curContext.hash : 0;
          for (let yT = this.fragments.nodeAt(MT); yT;) {
            let MT = this.parser.nodeSet.types[yT.type.id] == yT.type ? KT.getGoto(TT.state, yT.type.id) : -1;
            if (MT > -1 && yT.length && (!kT || (yT.prop(lT.j.contextHash) || 0) == cT)) return TT.useNode(yT, MT), QT && console.log(OT + this.stackID(TT) + ` (via reuse of ${KT.getName(yT.type.id)})`), !0;
            if (!(yT instanceof lT.y) || 0 == yT.children.length || yT.positions[0] > 0) break;
            let fT = yT.children[0];
            if (!(fT instanceof lT.y && 0 == yT.positions[0])) break;
            yT = fT
          }
        }
        let yT = KT.stateSlot(TT.state, 4);
        if (yT > 0) return TT.reduce(yT), QT && console.log(OT + this.stackID(TT) + ` (via always-reduce ${KT.getName(65535&yT)})`), !0;
        if (TT.stack.length >= 8400)
          for (; TT.stack.length > 6e3 && TT.forceReduce(););
        let fT = this.tokens.getActions(TT);
        for (let lT = 0; lT < fT.length;) {
          let yT = fT[lT++],
            xT = fT[lT++],
            IT = fT[lT++],
            AT = lT == fT.length || !cT,
            CT = AT ? TT : TT.split(),
            jT = this.tokens.mainToken;
          if (CT.apply(yT, xT, jT ? jT.start : CT.pos, IT), QT && console.log(OT + this.stackID(CT) + ` (via ${0==(65536&yT)?"shift":`reduce of ${KT.getName(65535&yT)}`} for ${KT.getName(xT)} @ ${MT}${CT==TT?"":", split"})`), AT) return !0;
          CT.pos > MT ? kT.push(CT) : cT.push(CT)
        }
        return !1
      }
      advanceFully(TT, kT) {
        let cT = TT.pos;
        for (;;) {
          if (!this.advanceStack(TT, null, null)) return !1;
          if (TT.pos > cT) return PT(TT, kT), !0
        }
      }
      runRecovery(TT, kT, cT) {
        let lT = null,
          MT = !1;
        for (let KT = 0; KT < TT.length; KT++) {
          let OT = TT[KT],
            yT = kT[KT << 1],
            fT = kT[1 + (KT << 1)],
            xT = QT ? this.stackID(OT) + " -> " : "";
          if (OT.deadEnd) {
            if (MT) continue;
            if (MT = !0, OT.restart(), QT && console.log(xT + this.stackID(OT) + " (restarted)"), this.advanceFully(OT, cT)) continue
          }
          let IT = OT.split(),
            AT = xT;
          for (let TT = 0; TT < 10 && IT.forceReduce(); TT++) {
            if (QT && console.log(AT + this.stackID(IT) + " (via force-reduce)"), this.advanceFully(IT, cT)) break;
            QT && (AT = this.stackID(IT) + " -> ")
          }
          for (let TT of OT.recoverByInsert(yT)) QT && console.log(xT + this.stackID(TT) + " (via recover-insert)"), this.advanceFully(TT, cT);
          this.stream.end > OT.pos ? (fT == OT.pos && (fT++, yT = 0), OT.recoverByDelete(yT, fT), QT && console.log(xT + this.stackID(OT) + ` (via recover-delete ${this.parser.getName(yT)})`), PT(OT, cT)) : (!lT || lT.score < IT.score) && (lT = IT)
        }
        return lT
      }
      stackToTree(TT) {
        return TT.close(), lT.y.build({
          buffer: yT.create(TT),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.qt[0].from,
          length: TT.pos - this.qt[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(TT) {
        let kT = (ST || (ST = new WeakMap)).get(TT);
        return kT || ST.set(TT, kT = String.fromCodePoint(this.nextStackID++)), kT + TT
      }
    }

    function PT(TT, kT) {
      for (let cT = 0; cT < kT.length; cT++) {
        let lT = kT[cT];
        if (lT.pos == TT.pos && lT.sameState(TT)) return void(kT[cT].score < TT.score && (kT[cT] = TT))
      }
      kT.push(TT)
    }
    class wT {
      constructor(TT, kT, cT) {
        this.source = TT, this.flags = kT, this.disabled = cT
      }
      allows(TT) {
        return !this.disabled || 0 == this.disabled[TT]
      }
    }
    const mT = TT => TT;
    class bT extends lT.r {
      constructor(TT) {
        if (super(), this.wrappers = [], 14 != TT.version) throw new RangeError(`Parser version (${TT.version}) doesn't match runtime version (14)`);
        let kT = TT.nodeNames.split(" ");
        this.minRepeatTerm = kT.length;
        for (let lT = 0; lT < TT.repeatNodeCount; lT++) kT.push("");
        let cT = Object.keys(TT.topRules).map((kT => TT.topRules[kT][1])),
          MT = [];
        for (let lT = 0; lT < kT.length; lT++) MT.push([]);

        function KT(TT, kT, cT) {
          MT[TT].push([kT, kT.deserialize(String(cT))])
        }
        if (TT.nodeProps)
          for (let yT of TT.nodeProps) {
            let TT = yT[0];
            "string" == typeof TT && (TT = lT.j[TT]);
            for (let kT = 1; kT < yT.length;) {
              let cT = yT[kT++];
              if (cT >= 0) KT(cT, TT, yT[kT++]);
              else {
                let lT = yT[kT + -cT];
                for (let MT = -cT; MT > 0; MT--) KT(yT[kT++], TT, lT);
                kT++
              }
            }
          }
        this.nodeSet = new lT.k(kT.map(((kT, KT) => lT.o.define({
          name: KT >= this.minRepeatTerm ? void 0 : kT,
          id: KT,
          props: MT[KT],
          top: cT.indexOf(KT) > -1,
          error: 0 == KT,
          skipped: TT.skippedNodes && TT.skippedNodes.indexOf(KT) > -1
        })))), TT.propSources && (this.nodeSet = this.nodeSet.extend(...TT.propSources)), this.strict = !1, this.bufferLength = lT.d;
        let OT = fT(TT.tokenData);
        this.context = TT.context, this.specializerSpecs = TT.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let lT = 0; lT < this.specializerSpecs.length; lT++) this.specialized[lT] = this.specializerSpecs[lT].term;
        this.specializers = this.specializerSpecs.map(JT), this.states = fT(TT.states, Uint32Array), this.data = fT(TT.stateData), this.goto = fT(TT.goto), this.maxTerm = TT.maxTerm, this.tokenizers = TT.tokenizers.map((TT => "number" == typeof TT ? new CT(OT, TT) : TT)), this.topRules = TT.topRules, this.dialects = TT.dialects || {}, this.dynamicPrecedences = TT.dynamicPrecedences || null, this.tokenPrecTable = TT.tokenPrec, this.termNames = TT.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(TT, kT, cT) {
        let lT = new rT(this, TT, kT, cT);
        for (let MT of this.wrappers) lT = MT(lT, TT, kT, cT);
        return lT
      }
      getGoto(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = this.goto;
        if (kT >= lT[0]) return -1;
        for (let MT = lT[kT + 1];;) {
          let kT = lT[MT++],
            KT = 1 & kT,
            OT = lT[MT++];
          if (KT && cT) return OT;
          for (let cT = MT + (kT >> 1); MT < cT; MT++)
            if (lT[MT] == TT) return OT;
          if (KT) return -1
        }
      }
      hasAction(TT, kT) {
        let cT = this.data;
        for (let lT = 0; lT < 2; lT++)
          for (let MT, KT = this.stateSlot(TT, lT ? 2 : 1);; KT += 3) {
            if (65535 == (MT = cT[KT])) {
              if (1 != cT[KT + 1]) {
                if (2 == cT[KT + 1]) return zT(cT, KT + 2);
                break
              }
              MT = cT[KT = zT(cT, KT + 2)]
            }
            if (MT == kT || 0 == MT) return zT(cT, KT + 1)
          }
        return 0
      }
      stateSlot(TT, kT) {
        return this.states[6 * TT + kT]
      }
      stateFlag(TT, kT) {
        return (this.stateSlot(TT, 0) & kT) > 0
      }
      validAction(TT, kT) {
        return !!this.allActions(TT, (TT => TT == kT || null))
      }
      allActions(TT, kT) {
        let cT = this.stateSlot(TT, 4),
          lT = cT ? kT(cT) : void 0;
        for (let MT = this.stateSlot(TT, 1); null == lT; MT += 3) {
          if (65535 == this.data[MT]) {
            if (1 != this.data[MT + 1]) break;
            MT = zT(this.data, MT + 2)
          }
          lT = kT(zT(this.data, MT + 1))
        }
        return lT
      }
      nextStates(TT) {
        let kT = [];
        for (let cT = this.stateSlot(TT, 1);; cT += 3) {
          if (65535 == this.data[cT]) {
            if (1 != this.data[cT + 1]) break;
            cT = zT(this.data, cT + 2)
          }
          if (0 == (1 & this.data[cT + 2])) {
            let TT = this.data[cT + 1];
            kT.some(((kT, cT) => 1 & cT && kT == TT)) || kT.push(this.data[cT], TT)
          }
        }
        return kT
      }
      configure(TT) {
        let kT = Object.assign(Object.create(bT.prototype), this);
        if (TT.props && (kT.nodeSet = this.nodeSet.extend(...TT.props)), TT.top) {
          let cT = this.topRules[TT.top];
          if (!cT) throw new RangeError(`Invalid top rule name ${TT.top}`);
          kT.top = cT
        }
        return TT.tokenizers && (kT.tokenizers = this.tokenizers.map((kT => {
          let cT = TT.tokenizers.find((TT => TT.from == kT));
          return cT ? cT.to : kT
        }))), TT.specializers && (kT.specializers = this.specializers.slice(), kT.specializerSpecs = this.specializerSpecs.map(((cT, lT) => {
          let MT = TT.specializers.find((TT => TT.from == cT.external));
          if (!MT) return cT;
          let KT = Object.assign(Object.assign({}, cT), {
            external: MT.to
          });
          return kT.specializers[lT] = JT(KT), KT
        }))), TT.contextTracker && (kT.context = TT.contextTracker), TT.dialect && (kT.dialect = this.parseDialect(TT.dialect)), null != TT.strict && (kT.strict = TT.strict), TT.wrap && (kT.wrappers = kT.wrappers.concat(TT.wrap)), null != TT.bufferLength && (kT.bufferLength = TT.bufferLength), kT
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(TT) {
        return this.termNames ? this.termNames[TT] : String(TT <= this.maxNode && this.nodeSet.types[TT].name || TT)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(TT) {
        let kT = this.dynamicPrecedences;
        return null == kT ? 0 : kT[TT] || 0
      }
      parseDialect(TT) {
        let kT = Object.keys(this.dialects),
          cT = kT.map((() => !1));
        if (TT)
          for (let MT of TT.split(" ")) {
            let TT = kT.indexOf(MT);
            TT >= 0 && (cT[TT] = !0)
          }
        let lT = null;
        for (let MT = 0; MT < kT.length; MT++)
          if (!cT[MT])
            for (let TT, cT = this.dialects[kT[MT]]; 65535 != (TT = this.data[cT++]);)(lT || (lT = new Uint8Array(this.maxTerm + 1)))[TT] = 1;
        return new wT(TT, cT, lT)
      }
      static deserialize(TT) {
        return new bT(TT)
      }
    }

    function zT(TT, kT) {
      return TT[kT] | TT[kT + 1] << 16
    }

    function JT(TT) {
      if (TT.external) {
        let kT = TT.extend ? 1 : 0;
        return (cT, lT) => TT.external(cT, lT) << 1 | kT
      }
      return TT.get
    }
    var oT = cT(40961);
    const HT = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      eT = new class {
        constructor(TT) {
          this.start = TT.start, this.shift = TT.shift || mT, this.reduce = TT.reduce || mT, this.reuse = TT.reuse || mT, this.hash = TT.hash || (() => 0), this.strict = !1 !== TT.strict
        }
      }({
        start: !1,
        shift: (TT, kT) => 5 == kT || 6 == kT || 320 == kT ? TT : 321 == kT,
        strict: !1
      }),
      GT = new vT(((TT, kT) => {
        let {
          next: cT
        } = TT;
        (125 == cT || -1 == cT || kT.context) && TT.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      VT = new vT(((TT, kT) => {
        let cT, {
          next: lT
        } = TT;
        HT.indexOf(lT) > -1 || (47 != lT || 47 != (cT = TT.peek(1)) && 42 != cT) && (125 == lT || 59 == lT || -1 == lT || kT.context || TT.acceptToken(316))
      }), {
        contextual: !0
      }),
      ET = new vT(((TT, kT) => {
        91 != TT.next || kT.context || TT.acceptToken(317)
      }), {
        contextual: !0
      }),
      ZT = new vT(((TT, kT) => {
        let {
          next: cT
        } = TT;
        if (43 == cT || 45 == cT) {
          if (TT.advance(), cT == TT.next) {
            TT.advance();
            let cT = !kT.context && kT.canShift(1);
            TT.acceptToken(cT ? 1 : 2)
          }
        } else 63 == cT && 46 == TT.peek(1) && (TT.advance(), TT.advance(), (TT.next < 48 || TT.next > 57) && TT.acceptToken(3))
      }), {
        contextual: !0
      });

    function uT(TT, kT) {
      return TT >= 65 && TT <= 90 || TT >= 97 && TT <= 122 || 95 == TT || TT >= 192 || !kT && TT >= 48 && TT <= 57
    }
    const XT = new vT(((TT, kT) => {
        if (60 != TT.next || !kT.dialectEnabled(0)) return;
        if (TT.advance(), 47 == TT.next) return;
        let cT = 0;
        for (; HT.indexOf(TT.next) > -1;) TT.advance(), cT++;
        if (uT(TT.next, !0)) {
          for (TT.advance(), cT++; uT(TT.next, !1);) TT.advance(), cT++;
          for (; HT.indexOf(TT.next) > -1;) TT.advance(), cT++;
          if (44 == TT.next) return;
          for (let kT = 0;; kT++) {
            if (7 == kT) {
              if (!uT(TT.next, !0)) return;
              break
            }
            if (TT.next != "extends".charCodeAt(kT)) break;
            TT.advance(), cT++
          }
        }
        TT.acceptToken(4, -cT)
      })),
      dT = (0, oT.e)({
        "get set async static": oT.i.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": oT.i.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": oT.i.operatorKeyword,
        "let var const using function class extends": oT.i.definitionKeyword,
        "import export from": oT.i.moduleKeyword,
        "with debugger new": oT.i.keyword,
        TemplateString: oT.i.special(oT.i.string),
        super: oT.i.atom,
        BooleanLiteral: oT.i.bool,
        this: oT.i.self,
        null: oT.i.null,
        Star: oT.i.modifier,
        VariableName: oT.i.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": oT.i.function(oT.i.variableName),
        VariableDefinition: oT.i.definition(oT.i.variableName),
        Label: oT.i.labelName,
        PropertyName: oT.i.propertyName,
        PrivatePropertyName: oT.i.special(oT.i.propertyName),
        "CallExpression/MemberExpression/PropertyName": oT.i.function(oT.i.propertyName),
        "FunctionDeclaration/VariableDefinition": oT.i.function(oT.i.definition(oT.i.variableName)),
        "ClassDeclaration/VariableDefinition": oT.i.definition(oT.i.className),
        "NewExpression/VariableName": oT.i.className,
        PropertyDefinition: oT.i.definition(oT.i.propertyName),
        PrivatePropertyDefinition: oT.i.definition(oT.i.special(oT.i.propertyName)),
        UpdateOp: oT.i.updateOperator,
        "LineComment Hashbang": oT.i.lineComment,
        BlockComment: oT.i.blockComment,
        Number: oT.i.number,
        String: oT.i.string,
        Escape: oT.i.escape,
        ArithOp: oT.i.arithmeticOperator,
        LogicOp: oT.i.logicOperator,
        BitOp: oT.i.bitwiseOperator,
        CompareOp: oT.i.compareOperator,
        RegExp: oT.i.regexp,
        Equals: oT.i.definitionOperator,
        Arrow: oT.i.function(oT.i.punctuation),
        ": Spread": oT.i.punctuation,
        "( )": oT.i.paren,
        "[ ]": oT.i.squareBracket,
        "{ }": oT.i.brace,
        "InterpolationStart InterpolationEnd": oT.i.special(oT.i.brace),
        ".": oT.i.derefOperator,
        ", ;": oT.i.separator,
        "@": oT.i.meta,
        TypeName: oT.i.typeName,
        TypeDefinition: oT.i.definition(oT.i.typeName),
        "type enum interface implements namespace module declare": oT.i.definitionKeyword,
        "abstract global Privacy readonly override": oT.i.modifier,
        "is keyof unique infer asserts": oT.i.operatorKeyword,
        JSXAttributeValue: oT.i.attributeValue,
        JSXText: oT.i.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": oT.i.angleBracket,
        "JSXIdentifier JSXNameSpacedName": oT.i.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": oT.i.attributeName,
        "JSXBuiltin/JSXIdentifier": oT.i.standard(oT.i.tagName)
      }),
      LT = {
        __proto__: null,
        export: 20,
        as: 25,
        from: 33,
        default: 36,
        async: 41,
        function: 42,
        in: 52,
        out: 55,
        const: 56,
        extends: 60,
        this: 64,
        true: 72,
        false: 72,
        null: 84,
        void: 88,
        typeof: 92,
        super: 108,
        new: 142,
        delete: 154,
        yield: 163,
        await: 167,
        class: 172,
        public: 235,
        private: 235,
        protected: 235,
        readonly: 237,
        instanceof: 256,
        satisfies: 259,
        import: 292,
        keyof: 349,
        unique: 353,
        infer: 359,
        asserts: 395,
        is: 397,
        abstract: 417,
        implements: 419,
        type: 421,
        let: 424,
        var: 426,
        using: 429,
        interface: 435,
        enum: 439,
        namespace: 445,
        module: 447,
        declare: 451,
        global: 455,
        defer: 471,
        for: 476,
        of: 485,
        while: 488,
        with: 492,
        do: 496,
        if: 500,
        else: 502,
        switch: 506,
        case: 512,
        try: 518,
        catch: 522,
        finally: 526,
        return: 530,
        throw: 534,
        break: 538,
        continue: 542,
        debugger: 546
      },
      RT = {
        __proto__: null,
        async: 129,
        get: 131,
        set: 133,
        declare: 195,
        public: 197,
        private: 197,
        protected: 197,
        static: 199,
        abstract: 201,
        override: 203,
        readonly: 209,
        accessor: 211,
        new: 401
      },
      gT = {
        __proto__: null,
        "<": 193
      },
      UT = bT.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: eT,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [dT],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [VT, ET, ZT, XT, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, GT, new jT("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new jT("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
        topRules: {
          Script: [0, 7],
          SingleExpression: [1, 276],
          SingleClassItem: [2, 277]
        },
        dialects: {
          jsx: 0,
          ts: 15175
        },
        dynamicPrecedences: {
          80: 1,
          82: 1,
          94: 1,
          169: 1,
          199: 1
        },
        specialized: [{
          term: 327,
          get: TT => LT[TT] || -1
        }, {
          term: 343,
          get: TT => RT[TT] || -1
        }, {
          term: 95,
          get: TT => gT[TT] || -1
        }],
        tokenPrec: 15201
      });
    var YT = cT(40953),
      BT = cT(40941),
      WT = cT(40944),
      nT = cT(40938);
    const pT = [(0, nT.v)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, nT.v)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, nT.v)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, nT.v)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, nT.v)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, nT.v)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, nT.v)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, nT.v)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, nT.v)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, nT.v)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, nT.v)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      iT = pT.concat([(0, nT.v)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, nT.v)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, nT.v)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      qT = new lT.q,
      sT = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function Tk(TT) {
      return (kT, cT) => {
        let lT = kT.node.getChild("VariableDefinition");
        return lT && cT(lT, TT), !0
      }
    }
    const kk = ["FunctionDeclaration"],
      ck = {
        FunctionDeclaration: Tk("function"),
        ClassDeclaration: Tk("class"),
        ClassExpression: () => !0,
        EnumDeclaration: Tk("constant"),
        TypeAliasDeclaration: Tk("type"),
        NamespaceDeclaration: Tk("namespace"),
        VariableDefinition(TT, kT) {
          TT.matchContext(kk) || kT(TT, "variable")
        },
        TypeDefinition(TT, kT) {
          kT(TT, "type")
        },
        __proto__: null
      };

    function lk(TT, kT) {
      let cT = qT.get(kT);
      if (cT) return cT;
      let MT = [],
        KT = !0;

      function OT(kT, cT) {
        let lT = TT.sliceString(kT.from, kT.to);
        MT.push({
          label: lT,
          type: cT
        })
      }
      return kT.cursor(lT.g.IncludeAnonymous).iterate((kT => {
        if (KT) KT = !1;
        else if (kT.name) {
          let TT = ck[kT.name];
          if (TT && TT(kT, OT) || sT.has(kT.name)) return !1
        } else if (kT.to - kT.from > 8192) {
          for (let cT of lk(TT, kT.node)) MT.push(cT);
          return !1
        }
      })), qT.set(kT, MT), MT
    }
    const Mk = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      Kk = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function Ok(TT) {
      let kT = (0, YT.hb)(TT.state).resolveInner(TT.pos, -1);
      if (Kk.indexOf(kT.name) > -1) return null;
      let cT = "VariableName" == kT.name || kT.to - kT.from < 20 && Mk.test(TT.state.sliceDoc(kT.from, kT.to));
      if (!cT && !TT.explicit) return null;
      let lT = [];
      for (let MT = kT; MT; MT = MT.parent) sT.has(MT.name) && (lT = lT.concat(lk(TT.state.doc, MT)));
      return {
        options: lT,
        from: cT ? kT.from : TT.pos,
        validFor: Mk
      }
    }
    const yk = YT.f.define({
        name: "javascript",
        parser: UT.configure({
          props: [YT.T.add({
            IfStatement: (0, YT.n)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, YT.n)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: YT.u,
            SwitchBody: TT => {
              let kT = TT.textAfter,
                cT = /^\s*\}/.test(kT),
                lT = /^\s*(case|default)\b/.test(kT);
              return TT.baseIndent + (cT ? 0 : lT ? 1 : 2) * TT.unit
            },
            Block: (0, YT.s)({
              closing: "}"
            }),
            ArrowFunction: TT => TT.baseIndent + TT.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, YT.n)({
              except: /^\s*{/
            }),
            JSXElement(TT) {
              let kT = /^\s*<\//.test(TT.textAfter);
              return TT.lineIndent(TT.node.from) + (kT ? 0 : TT.unit)
            },
            JSXEscape(TT) {
              let kT = /\s*\}/.test(TT.textAfter);
              return TT.lineIndent(TT.node.from) + (kT ? 0 : TT.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": TT => TT.column(TT.node.from) + TT.unit
          }), YT.I.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": YT.B,
            BlockComment: TT => ({
              from: TT.from + 2,
              to: TT.to - 2
            }),
            JSXElement(TT) {
              let kT = TT.firstChild;
              if (!kT || "JSXSelfClosingTag" == kT.name) return null;
              let cT = TT.lastChild;
              return {
                from: kT.to,
                to: cT.type.isError ? TT.to : cT.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(TT) {
              var kT;
              let cT = null === (kT = TT.firstChild) || void 0 === kT ? void 0 : kT.nextSibling,
                lT = TT.lastChild;
              return !cT || cT.type.isError ? null : {
                from: cT.to,
                to: lT.type.isError ? TT.to : lT.from
              }
            }
          })]
        }),
        languageData: {
          closeBrackets: {
            brackets: ["(", "[", "{", "'", '"', "`"]
          },
          commentTokens: {
            line: "//",
            block: {
              open: "/*",
              close: "*/"
            }
          },
          indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
          wordChars: "$"
        }
      }),
      fk = {
        test: TT => /^JSX/.test(TT.name),
        facet: (0, YT.q)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      xk = yk.configure({
        dialect: "ts"
      }, "typescript"),
      Ik = yk.configure({
        dialect: "jsx",
        props: [YT.eb.add((TT => TT.isTop ? [fk] : void 0))]
      }),
      Ak = yk.configure({
        dialect: "jsx ts",
        props: [YT.eb.add((TT => TT.isTop ? [fk] : void 0))]
      }, "typescript");
    let Ck = TT => ({
      label: TT,
      type: "keyword"
    });
    const jk = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Ck),
      vk = jk.concat(["declare", "implements", "private", "protected", "public"].map(Ck));

    function tk() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        kT = TT.jsx ? TT.typescript ? Ak : Ik : TT.typescript ? xk : yk,
        cT = TT.typescript ? iT.concat(vk) : pT.concat(jk);
      return new YT.h(kT, [yk.data.of({
        autocomplete: (0, nT.r)(Kk, (0, nT.o)(cT))
      }), yk.data.of({
        autocomplete: Ok
      }), TT.jsx ? Qk : []])
    }

    function hk(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT.length;
      for (let lT = null === kT || void 0 === kT ? void 0 : kT.firstChild; lT; lT = lT.nextSibling)
        if ("JSXIdentifier" == lT.name || "JSXBuiltin" == lT.name || "JSXNamespacedName" == lT.name || "JSXMemberExpression" == lT.name) return TT.sliceString(lT.from, Math.min(lT.to, cT));
      return ""
    }
    const Nk = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Qk = WT.h.inputHandler.of(((TT, kT, cT, lT, MT) => {
        if ((Nk ? TT.composing : TT.compositionStarted) || TT.state.readOnly || kT != cT || ">" != lT && "/" != lT || !yk.isActiveAt(TT.state, kT, -1)) return !1;
        let KT = MT(),
          {
            state: OT
          } = KT,
          yT = OT.changeByRange((TT => {
            var kT;
            let cT, {
                head: MT
              } = TT,
              KT = (0, YT.hb)(OT).resolveInner(MT - 1, -1);
            if ("JSXStartTag" == KT.name && (KT = KT.parent), OT.doc.sliceString(MT - 1, MT) != lT || "JSXAttributeValue" == KT.name && KT.to > MT);
            else {
              if (">" == lT && "JSXFragmentTag" == KT.name) return {
                range: TT,
                changes: {
                  from: MT,
                  insert: "</>"
                }
              };
              if ("/" == lT && "JSXStartCloseTag" == KT.name) {
                let TT = KT.parent,
                  lT = TT.parent;
                if (lT && TT.from == MT - 2 && ((cT = hk(OT.doc, lT.firstChild, MT)) || "JSXFragmentTag" == (null === (kT = lT.firstChild) || void 0 === kT ? void 0 : kT.name))) {
                  let TT = `${cT}>`;
                  return {
                    range: BT.j.cursor(MT + TT.length, -1),
                    changes: {
                      from: MT,
                      insert: TT
                    }
                  }
                }
              } else if (">" == lT) {
                let kT = function(TT) {
                  for (;;) {
                    if ("JSXOpenTag" == TT.name || "JSXSelfClosingTag" == TT.name || "JSXFragmentTag" == TT.name) return TT;
                    if ("JSXEscape" == TT.name || !TT.parent) return null;
                    TT = TT.parent
                  }
                }(KT);
                if (kT && "JSXOpenTag" == kT.name && !/^\/?>|^<\//.test(OT.doc.sliceString(MT, MT + 2)) && (cT = hk(OT.doc, kT, MT))) return {
                  range: TT,
                  changes: {
                    from: MT,
                    insert: `</${cT}>`
                  }
                }
              }
            }
            return {
              range: TT
            }
          }));
        return !yT.changes.empty && (TT.dispatch([KT, OT.update(yT, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  40953: (TT, kT, cT) => {
    cT.d(kT, {
      $: () => JT,
      B: () => pT,
      F: () => xk,
      I: () => nT,
      J: () => NT,
      N: () => oT,
      R: () => eT,
      T: () => VT,
      X: () => BT,
      Y: () => HT,
      b: () => Dk,
      bb: () => gk,
      d: () => GT,
      eb: () => AT,
      f: () => vT,
      fb: () => Pk,
      gb: () => hT,
      h: () => bT,
      hb: () => tT,
      l: () => Xk,
      n: () => UT,
      p: () => bk,
      q: () => IT,
      s: () => LT,
      u: () => gT,
      x: () => Qk
    });
    var lT, MT = cT(40955),
      KT = cT(40941),
      OT = cT(40944),
      yT = cT(40961),
      fT = cT(40946);
    const xT = new MT.j;

    function IT(TT) {
      return KT.o.define({
        combine: TT ? kT => kT.concat(TT) : void 0
      })
    }
    const AT = new MT.j;
    class CT {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = TT, this.name = lT, KT.l.prototype.hasOwnProperty("tree") || Object.defineProperty(KT.l.prototype, "tree", {
          get() {
            return tT(this)
          }
        }), this.parser = kT, this.extension = [mT.of(this), KT.l.languageData.of(((TT, kT, cT) => {
          let lT = jT(TT, kT, cT),
            MT = lT.type.prop(xT);
          if (!MT) return [];
          let KT = TT.facet(MT),
            OT = lT.type.prop(AT);
          if (OT) {
            let MT = lT.resolve(kT - lT.from, cT);
            for (let kT of OT)
              if (kT.test(MT, TT)) {
                let cT = TT.facet(kT.facet);
                return "replace" == kT.type ? cT : cT.concat(KT)
              }
          }
          return KT
        }))].concat(cT)
      }
      isActiveAt(TT, kT) {
        return jT(TT, kT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(xT) == this.data
      }
      findRegions(TT) {
        let kT = TT.facet(mT);
        if ((null === kT || void 0 === kT ? void 0 : kT.data) == this.data) return [{
          from: 0,
          to: TT.doc.length
        }];
        if (!kT || !kT.allowsNesting) return [];
        let cT = [],
          lT = (TT, kT) => {
            if (TT.prop(xT) == this.data) return void cT.push({
              from: kT,
              to: kT + TT.length
            });
            let KT = TT.prop(MT.j.mounted);
            if (KT) {
              if (KT.tree.prop(xT) == this.data) {
                if (KT.overlay)
                  for (let TT of KT.overlay) cT.push({
                    from: TT.from + kT,
                    to: TT.to + kT
                  });
                else cT.push({
                  from: kT,
                  to: kT + TT.length
                });
                return
              }
              if (KT.overlay) {
                let TT = cT.length;
                if (lT(KT.tree, KT.overlay[0].from + kT), cT.length > TT) return
              }
            }
            for (let cT = 0; cT < TT.children.length; cT++) {
              let KT = TT.children[cT];
              KT instanceof MT.y && lT(KT, TT.positions[cT] + kT)
            }
          };
        return lT(tT(TT), 0), cT
      }
      get allowsNesting() {
        return !0
      }
    }

    function jT(TT, kT, cT) {
      let lT = TT.facet(mT),
        KT = tT(TT).topNode;
      if (!lT || lT.allowsNesting)
        for (let OT = KT; OT; OT = OT.enter(kT, cT, MT.g.ExcludeBuffers | MT.g.EnterBracketed)) OT.type.isTop && (KT = OT);
      return KT
    }
    CT.setState = KT.F.define();
    class vT extends CT {
      constructor(TT, kT, cT) {
        super(TT, kT, [], cT), this.parser = kT
      }
      static define(TT) {
        let kT = IT(TT.languageData);
        return new vT(kT, TT.parser.configure({
          props: [xT.add((TT => TT.isTop ? kT : void 0))]
        }), TT.name)
      }
      configure(TT, kT) {
        return new vT(this.data, this.parser.configure(TT), kT || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function tT(TT) {
      let kT = TT.field(CT.state, !1);
      return kT ? kT.tree : MT.y.empty
    }

    function hT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.doc.length;
      var cT;
      return (null === (cT = TT.field(CT.state, !1)) || void 0 === cT ? void 0 : cT.context.isDone(kT)) || !1
    }

    function NT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.viewport.to,
        cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        lT = function(TT, kT) {
          let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var lT;
          let MT = null === (lT = TT.field(CT.state, !1)) || void 0 === lT ? void 0 : lT.context;
          if (!MT) return null;
          let KT = MT.viewport;
          MT.updateViewport({
            from: 0,
            to: kT
          });
          let OT = MT.isDone(kT) || MT.work(cT, kT) ? MT.tree : null;
          return MT.updateViewport(KT), OT
        }(TT.state, kT, cT);
      return lT != tT(TT.state) && TT.dispatch({}), !!lT
    }
    class QT {
      constructor(TT) {
        this.doc = TT, this.cursorPos = 0, this.string = "", this.cursor = TT.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(TT) {
        return this.string = this.cursor.next(TT - this.cursorPos).value, this.cursorPos = TT + this.string.length, this.cursorPos - this.string.length
      }
      chunk(TT) {
        return this.syncTo(TT), this.string
      }
      get lineChunks() {
        return !0
      }
      read(TT, kT) {
        let cT = this.cursorPos - this.string.length;
        return TT < cT || kT >= this.cursorPos ? this.doc.sliceString(TT, kT) : this.string.slice(TT - cT, kT - cT)
      }
    }
    let ST = null;
    class DT {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          lT = arguments.length > 3 ? arguments[3] : void 0,
          MT = arguments.length > 4 ? arguments[4] : void 0,
          KT = arguments.length > 5 ? arguments[5] : void 0,
          OT = arguments.length > 6 ? arguments[6] : void 0,
          yT = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = TT, this.state = kT, this.fragments = cT, this.tree = lT, this.treeLen = MT, this.viewport = KT, this.skipped = OT, this.scheduleOn = yT, this.parse = null, this.tempSkipped = []
      }
      static create(TT, kT, cT) {
        return new DT(TT, kT, [], MT.y.empty, 0, cT, [], null)
      }
      startParse() {
        return this.parser.startParse(new QT(this.state.doc), this.fragments)
      }
      work(TT, kT) {
        return null != kT && kT >= this.state.doc.length && (kT = void 0), this.tree != MT.y.empty && this.isDone(null !== kT && void 0 !== kT ? kT : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var cT;
          if ("number" == typeof TT) {
            let kT = Date.now() + TT;
            TT = () => Date.now() > kT
          }
          for (this.parse || (this.parse = this.startParse()), null != kT && (null == this.parse.stoppedAt || this.parse.stoppedAt > kT) && kT < this.state.doc.length && this.parse.stopAt(kT);;) {
            let lT = this.parse.advance();
            if (lT) {
              if (this.fragments = this.withoutTempSkipped(MT.v.addTree(lT, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (cT = this.parse.stoppedAt) && void 0 !== cT ? cT : this.state.doc.length, this.tree = lT, this.parse = null, !(this.treeLen < (null !== kT && void 0 !== kT ? kT : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (TT()) return !1
          }
        }))
      }
      takeTree() {
        let TT, kT;
        this.parse && (TT = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > TT) && this.parse.stopAt(TT), this.withContext((() => {
          for (; !(kT = this.parse.advance()););
        })), this.treeLen = TT, this.tree = kT, this.fragments = this.withoutTempSkipped(MT.v.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(TT) {
        let kT = ST;
        ST = this;
        try {
          return TT()
        } finally {
          ST = kT
        }
      }
      withoutTempSkipped(TT) {
        for (let kT; kT = this.tempSkipped.pop();) TT = aT(TT, kT.from, kT.to);
        return TT
      }
      changes(TT, kT) {
        let {
          fragments: cT,
          tree: lT,
          treeLen: KT,
          viewport: OT,
          skipped: yT
        } = this;
        if (this.takeTree(), !TT.empty) {
          let kT = [];
          if (TT.iterChangedRanges(((TT, cT, lT, MT) => kT.push({
              fromA: TT,
              toA: cT,
              fromB: lT,
              toB: MT
            }))), cT = MT.v.applyChanges(cT, kT), lT = MT.y.empty, KT = 0, OT = {
              from: TT.mapPos(OT.from, -1),
              to: TT.mapPos(OT.to, 1)
            }, this.skipped.length) {
            yT = [];
            for (let kT of this.skipped) {
              let cT = TT.mapPos(kT.from, 1),
                lT = TT.mapPos(kT.to, -1);
              cT < lT && yT.push({
                from: cT,
                to: lT
              })
            }
          }
        }
        return new DT(this.parser, kT, cT, lT, KT, OT, yT, this.scheduleOn)
      }
      updateViewport(TT) {
        if (this.viewport.from == TT.from && this.viewport.to == TT.to) return !1;
        this.viewport = TT;
        let kT = this.skipped.length;
        for (let cT = 0; cT < this.skipped.length; cT++) {
          let {
            from: kT,
            to: lT
          } = this.skipped[cT];
          kT < TT.to && lT > TT.from && (this.fragments = aT(this.fragments, kT, lT), this.skipped.splice(cT--, 1))
        }
        return !(this.skipped.length >= kT) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(TT, kT) {
        this.skipped.push({
          from: TT,
          to: kT
        })
      }
      static getSkippingParser(TT) {
        return new class extends MT.r {
          createParse(kT, cT, lT) {
            let KT = lT[0].from,
              OT = lT[lT.length - 1].to;
            return {
              parsedPos: KT,
              advance() {
                let kT = ST;
                if (kT) {
                  for (let TT of lT) kT.tempSkipped.push(TT);
                  TT && (kT.scheduleOn = kT.scheduleOn ? Promise.all([kT.scheduleOn, TT]) : TT)
                }
                return this.parsedPos = OT, new MT.y(MT.o.none, [], [], OT - KT)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(TT) {
        TT = Math.min(TT, this.state.doc.length);
        let kT = this.fragments;
        return this.treeLen >= TT && kT.length && 0 == kT[0].from && kT[0].to >= TT
      }
      static get() {
        return ST
      }
    }

    function aT(TT, kT, cT) {
      return MT.v.applyChanges(TT, [{
        fromA: kT,
        toA: cT,
        fromB: kT,
        toB: cT
      }])
    }
    class FT {
      constructor(TT) {
        this.context = TT, this.tree = TT.tree
      }
      apply(TT) {
        if (!TT.docChanged && this.tree == this.context.tree) return this;
        let kT = this.context.changes(TT.changes, TT.state),
          cT = this.context.treeLen == TT.startState.doc.length ? void 0 : Math.max(TT.changes.mapPos(this.context.treeLen), kT.viewport.to);
        return kT.work(20, cT) || kT.takeTree(), new FT(kT)
      }
      static init(TT) {
        let kT = Math.min(3e3, TT.doc.length),
          cT = DT.create(TT.facet(mT).parser, TT, {
            from: 0,
            to: kT
          });
        return cT.work(20, kT) || cT.takeTree(), new FT(cT)
      }
    }
    CT.state = KT.H.define({
      create: FT.init,
      update(TT, kT) {
        for (let cT of kT.effects)
          if (cT.is(CT.setState)) return cT.value;
        return kT.startState.facet(mT) != kT.state.facet(mT) ? FT.init(kT.state) : TT.apply(kT)
      }
    });
    let rT = TT => {
      let kT = setTimeout((() => TT()), 500);
      return () => clearTimeout(kT)
    };
    "undefined" != typeof requestIdleCallback && (rT = TT => {
      let kT = -1,
        cT = setTimeout((() => {
          kT = requestIdleCallback(TT, {
            timeout: 400
          })
        }), 100);
      return () => kT < 0 ? clearTimeout(cT) : cancelIdleCallback(kT)
    });
    const PT = "undefined" != typeof navigator && (null === (lT = navigator.scheduling) || void 0 === lT ? void 0 : lT.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      wT = OT.k.fromClass(class {
        constructor(TT) {
          this.view = TT, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(TT) {
          let kT = this.view.state.field(CT.state).context;
          (kT.updateViewport(TT.view.viewport) || this.view.viewport.to > kT.treeLen) && this.scheduleWork(), (TT.docChanged || TT.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(kT)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: TT
          } = this.view, kT = TT.field(CT.state);
          kT.tree == kT.context.tree && kT.context.isDone(TT.doc.length) || (this.working = rT(this.work))
        }
        work(TT) {
          this.working = null;
          let kT = Date.now();
          if (this.chunkEnd < kT && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = kT + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: cT,
            viewport: {
              to: lT
            }
          } = this.view, MT = cT.field(CT.state);
          if (MT.tree == MT.context.tree && MT.context.isDone(lT + 1e5)) return;
          let KT = Date.now() + Math.min(this.chunkBudget, 100, TT && !PT ? Math.max(25, TT.timeRemaining() - 5) : 1e9),
            OT = MT.context.treeLen < lT && cT.doc.length > lT + 1e3,
            yT = MT.context.work((() => PT && PT() || Date.now() > KT), lT + (OT ? 0 : 1e5));
          this.chunkBudget -= Date.now() - kT, (yT || this.chunkBudget <= 0) && (MT.context.takeTree(), this.view.dispatch({
            effects: CT.setState.of(new FT(MT.context))
          })), this.chunkBudget > 0 && (!yT || OT) && this.scheduleWork(), this.checkAsyncSchedule(MT.context)
        }
        checkAsyncSchedule(TT) {
          TT.scheduleOn && (this.workScheduled++, TT.scheduleOn.then((() => this.scheduleWork())).catch((TT => (0, OT.S)(this.view.state, TT))).then((() => this.workScheduled--)), TT.scheduleOn = null)
        }
        destroy() {
          this.working && this.working()
        }
        isWorking() {
          return !!(this.working || this.workScheduled > 0)
        }
      }, {
        eventHandlers: {
          focus() {
            this.scheduleWork()
          }
        }
      }),
      mT = KT.o.define({
        combine: TT => TT.length ? TT[0] : null,
        enables: TT => [CT.state, wT, OT.h.contentAttributes.compute([TT], (kT => {
          let cT = kT.facet(TT);
          return cT && cT.name ? {
            "data-language": cT.name
          } : {}
        }))]
      });
    class bT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = TT, this.support = kT, this.extension = [TT, kT]
      }
    }
    const zT = KT.o.define(),
      JT = KT.o.define({
        combine: TT => {
          if (!TT.length) return "  ";
          let kT = TT[0];
          if (!kT || /\S/.test(kT) || Array.from(kT).some((TT => TT != kT[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(TT[0]));
          return kT
        }
      });

    function oT(TT) {
      let kT = TT.facet(JT);
      return 9 == kT.charCodeAt(0) ? TT.tabSize * kT.length : kT.length
    }

    function HT(TT, kT) {
      let cT = "",
        lT = TT.tabSize,
        MT = TT.facet(JT)[0];
      if ("\t" == MT) {
        for (; kT >= lT;) cT += "\t", kT -= lT;
        MT = " "
      }
      for (let KT = 0; KT < kT; KT++) cT += MT;
      return cT
    }

    function eT(TT, kT) {
      TT instanceof KT.l && (TT = new GT(TT));
      for (let lT of TT.state.facet(zT)) {
        let cT = lT(TT, kT);
        if (void 0 !== cT) return cT
      }
      let cT = tT(TT.state);
      return cT.length >= kT ? function(TT, kT, cT) {
        let lT = kT.resolveStack(cT),
          MT = kT.resolveInner(cT, -1).resolve(cT, 0).enterUnfinishedNodesBefore(cT);
        if (MT != lT.node) {
          let TT = [];
          for (let kT = MT; kT && !(kT.from < lT.node.from || kT.to > lT.node.to || kT.from == lT.node.from && kT.type == lT.node.type); kT = kT.parent) TT.push(kT);
          for (let kT = TT.length - 1; kT >= 0; kT--) lT = {
            node: TT[kT],
            next: lT
          }
        }
        return ET(lT, TT, cT)
      }(TT, cT, kT) : null
    }
    class GT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = TT, this.options = kT, this.unit = oT(TT)
      }
      lineAt(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cT = this.state.doc.lineAt(TT),
          {
            simulateBreak: lT,
            simulateDoubleBreak: MT
          } = this.options;
        return null != lT && lT >= cT.from && lT <= cT.to ? MT && lT == TT ? {
          text: "",
          from: TT
        } : (kT < 0 ? lT < TT : lT <= TT) ? {
          text: cT.text.slice(lT - cT.from),
          from: lT
        } : {
          text: cT.text.slice(0, lT - cT.from),
          from: cT.from
        } : cT
      }
      textAfterPos(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && TT == this.options.simulateBreak) return "";
        let {
          text: cT,
          from: lT
        } = this.lineAt(TT, kT);
        return cT.slice(TT - lT, Math.min(cT.length, TT + 100 - lT))
      }
      column(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: cT,
            from: lT
          } = this.lineAt(TT, kT),
          MT = this.countColumn(cT, TT - lT),
          KT = this.options.overrideIndentation ? this.options.overrideIndentation(lT) : -1;
        return KT > -1 && (MT += KT - this.countColumn(cT, cT.search(/\S|$/))), MT
      }
      countColumn(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.length;
        return (0, KT.T)(TT, this.state.tabSize, kT)
      }
      lineIndent(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: cT,
            from: lT
          } = this.lineAt(TT, kT),
          MT = this.options.overrideIndentation;
        if (MT) {
          let TT = MT(lT);
          if (TT > -1) return TT
        }
        return this.countColumn(cT, cT.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const VT = new MT.j;

    function ET(TT, kT, cT) {
      for (let lT = TT; lT; lT = lT.next) {
        let TT = ZT(lT.node);
        if (TT) return TT(XT.create(kT, cT, lT))
      }
      return 0
    }

    function ZT(TT) {
      let kT = TT.type.prop(VT);
      if (kT) return kT;
      let cT, lT = TT.firstChild;
      if (lT && (cT = lT.type.prop(MT.j.closedBy))) {
        let kT = TT.lastChild,
          lT = kT && cT.indexOf(kT.name) > -1;
        return TT => RT(TT, !0, 1, void 0, lT && ! function(TT) {
          return TT.pos == TT.options.simulateBreak && TT.options.simulateDoubleBreak
        }(TT) ? kT.from : void 0)
      }
      return null == TT.parent ? uT : null
    }

    function uT() {
      return 0
    }
    class XT extends GT {
      constructor(TT, kT, cT) {
        super(TT.state, TT.options), this.base = TT, this.pos = kT, this.context = cT
      }
      get node() {
        return this.context.node
      }
      static create(TT, kT, cT) {
        return new XT(TT, kT, cT)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(TT) {
        let kT = this.state.doc.lineAt(TT.from);
        for (;;) {
          let cT = TT.resolve(kT.from);
          for (; cT.parent && cT.parent.from == cT.from;) cT = cT.parent;
          if (dT(cT, TT)) break;
          kT = this.state.doc.lineAt(cT.from)
        }
        return this.lineIndent(kT.from)
      }
      continue () {
        return ET(this.context.next, this.base, this.pos)
      }
    }

    function dT(TT, kT) {
      for (let cT = kT; cT; cT = cT.parent)
        if (TT == cT) return !0;
      return !1
    }

    function LT(TT) {
      let {
        closing: kT,
        align: cT = !0,
        units: lT = 1
      } = TT;
      return TT => RT(TT, cT, lT, kT)
    }

    function RT(TT, kT, cT, lT, MT) {
      let KT = TT.textAfter,
        OT = KT.match(/^\s*/)[0].length,
        yT = lT && KT.slice(OT, OT + lT.length) == lT || MT == TT.pos + OT,
        fT = kT ? function(TT) {
          let kT = TT.node,
            cT = kT.childAfter(kT.from),
            lT = kT.lastChild;
          if (!cT) return null;
          let MT = TT.options.simulateBreak,
            KT = TT.state.doc.lineAt(cT.from),
            OT = null == MT || MT <= KT.from ? KT.to : Math.min(KT.to, MT);
          for (let yT = cT.to;;) {
            let TT = kT.childAfter(yT);
            if (!TT || TT == lT) return null;
            if (!TT.type.isSkipped) {
              if (TT.from >= OT) return null;
              let kT = /^ */.exec(KT.text.slice(cT.to - KT.from))[0].length;
              return {
                from: cT.from,
                to: cT.to + kT
              }
            }
            yT = TT.to
          }
        }(TT) : null;
      return fT ? yT ? TT.column(fT.from) : TT.column(fT.to) : TT.baseIndent + (yT ? 0 : TT.unit * cT)
    }
    const gT = TT => TT.baseIndent;

    function UT() {
      let {
        except: TT,
        units: kT = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return cT => {
        let lT = TT && TT.test(cT.textAfter);
        return cT.baseIndent + (lT ? 0 : kT * cT.unit)
      }
    }
    const YT = 200;

    function BT() {
      return KT.l.transactionFilter.of((TT => {
        if (!TT.docChanged || !TT.isUserEvent("input.type") && !TT.isUserEvent("input.complete")) return TT;
        let kT = TT.startState.languageDataAt("indentOnInput", TT.startState.selection.main.head);
        if (!kT.length) return TT;
        let cT = TT.newDoc,
          {
            head: lT
          } = TT.newSelection.main,
          MT = cT.lineAt(lT);
        if (lT > MT.from + YT) return TT;
        let KT = cT.sliceString(MT.from, lT);
        if (!kT.some((TT => TT.test(KT)))) return TT;
        let {
          state: OT
        } = TT, yT = -1, fT = [];
        for (let {
            head: xT
          }
          of OT.selection.qt) {
          let TT = OT.doc.lineAt(xT);
          if (TT.from == yT) continue;
          yT = TT.from;
          let kT = eT(OT, TT.from);
          if (null == kT) continue;
          let cT = /^\s*/.exec(TT.text)[0],
            lT = HT(OT, kT);
          cT != lT && fT.push({
            from: TT.from,
            to: TT.from + cT.length,
            insert: lT
          })
        }
        return fT.length ? [TT, {
          changes: fT,
          sequential: !0
        }] : TT
      }))
    }
    const WT = KT.o.define(),
      nT = new MT.j;

    function pT(TT) {
      let kT = TT.firstChild,
        cT = TT.lastChild;
      return kT && kT.to < cT.from ? {
        from: kT.to,
        to: cT.type.isError ? TT.to : cT.from
      } : null
    }

    function iT(TT) {
      let kT = TT.lastChild;
      return kT && kT.to == TT.to && kT.type.isError
    }

    function qT(TT, kT, cT) {
      for (let lT of TT.facet(WT)) {
        let MT = lT(TT, kT, cT);
        if (MT) return MT
      }
      return function(TT, kT, cT) {
        let lT = tT(TT);
        if (lT.length < cT) return null;
        let MT = null;
        for (let KT = lT.resolveStack(cT, 1); KT; KT = KT.next) {
          let OT = KT.node;
          if (OT.to <= cT || OT.from > cT) continue;
          if (MT && OT.from < kT) break;
          let yT = OT.type.prop(nT);
          if (yT && (OT.to < lT.length - 50 || lT.length == TT.doc.length || !iT(OT))) {
            let lT = yT(OT, TT);
            lT && lT.from <= cT && lT.from >= kT && lT.to > cT && (MT = lT)
          }
        }
        return MT
      }(TT, kT, cT)
    }

    function sT(TT, kT) {
      let cT = kT.mapPos(TT.from, 1),
        lT = kT.mapPos(TT.to, -1);
      return cT >= lT ? void 0 : {
        from: cT,
        to: lT
      }
    }
    const Tk = KT.F.define({
        map: sT
      }),
      kk = KT.F.define({
        map: sT
      });

    function ck(TT) {
      let kT = [];
      for (let {
          head: cT
        }
        of TT.state.selection.qt) kT.some((TT => TT.from <= cT && TT.to >= cT)) || kT.push(TT.lineBlockAt(cT));
      return kT
    }
    const lk = KT.H.define({
      create: () => OT.e.none,
      update(TT, kT) {
        kT.isUserEvent("delete") && kT.changes.iterChangedRanges(((kT, cT) => TT = Mk(TT, kT, cT))), TT = TT.map(kT.changes);
        for (let cT of kT.effects)
          if (cT.is(Tk) && !Ok(TT, cT.value.from, cT.value.to)) {
            let {
              preparePlaceholder: lT
            } = kT.state.facet(Ak), MT = lT ? OT.e.replace({
              widget: new tk(lT(kT.state, cT.value))
            }) : vk;
            TT = TT.update({
              add: [MT.range(cT.value.from, cT.value.to)]
            })
          } else cT.is(kk) && (TT = TT.update({
            filter: (TT, kT) => cT.value.from != TT || cT.value.to != kT,
            filterFrom: cT.value.from,
            filterTo: cT.value.to
          }));
        return kT.selection && (TT = Mk(TT, kT.selection.main.head)), TT
      },
      provide: TT => OT.h.cK.from(TT),
      toJSON(TT, kT) {
        let cT = [];
        return TT.between(0, kT.doc.length, ((TT, kT) => {
          cT.push(TT, kT)
        })), cT
      },
      fromJSON(TT) {
        if (!Array.isArray(TT) || TT.length % 2) throw new RangeError("Invalid JSON for fold state");
        let kT = [];
        for (let cT = 0; cT < TT.length;) {
          let lT = TT[cT++],
            MT = TT[cT++];
          if ("number" != typeof lT || "number" != typeof MT) throw new RangeError("Invalid JSON for fold state");
          kT.push(vk.range(lT, MT))
        }
        return OT.e.set(kT, !0)
      }
    });

    function Mk(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kT,
        lT = !1;
      return TT.between(kT, cT, ((TT, MT) => {
        TT < cT && MT > kT && (lT = !0)
      })), lT ? TT.update({
        filterFrom: kT,
        filterTo: cT,
        filter: (TT, lT) => TT >= cT || lT <= kT
      }) : TT
    }

    function Kk(TT, kT, cT) {
      var lT;
      let MT = null;
      return null === (lT = TT.field(lk, !1)) || void 0 === lT || lT.between(kT, cT, ((TT, kT) => {
        (!MT || MT.from > TT) && (MT = {
          from: TT,
          to: kT
        })
      })), MT
    }

    function Ok(TT, kT, cT) {
      let lT = !1;
      return TT.between(kT, kT, ((TT, MT) => {
        TT == kT && MT == cT && (lT = !0)
      })), lT
    }

    function yk(TT, kT) {
      return TT.field(lk, !1) ? kT : kT.concat(KT.F.appendConfig.of(Ck()))
    }

    function fk(TT, kT) {
      let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        lT = TT.state.doc.lineAt(kT.from).number,
        MT = TT.state.doc.lineAt(kT.to).number;
      return OT.h.announce.of(`${TT.state.phrase(cT?"Folded lines":"Unfolded lines")} ${lT} ${TT.state.phrase("to")} ${MT}.`)
    }
    const xk = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: TT => {
          for (let kT of ck(TT)) {
            let cT = qT(TT.state, kT.from, kT.to);
            if (cT) return TT.dispatch({
              effects: yk(TT.state, [Tk.of(cT), fk(TT, cT)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: TT => {
          if (!TT.state.field(lk, !1)) return !1;
          let kT = [];
          for (let cT of ck(TT)) {
            let lT = Kk(TT.state, cT.from, cT.to);
            lT && kT.push(kk.of(lT), fk(TT, lT, !1))
          }
          return kT.length && TT.dispatch({
            effects: kT
          }), kT.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: TT => {
          let {
            state: kT
          } = TT, cT = [];
          for (let lT = 0; lT < kT.doc.length;) {
            let MT = TT.lineBlockAt(lT),
              KT = qT(kT, MT.from, MT.to);
            KT && cT.push(Tk.of(KT)), lT = (KT ? TT.lineBlockAt(KT.to) : MT).to + 1
          }
          return cT.length && TT.dispatch({
            effects: yk(TT.state, cT)
          }), !!cT.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: TT => {
          let kT = TT.state.field(lk, !1);
          if (!kT || !kT.size) return !1;
          let cT = [];
          return kT.between(0, TT.state.doc.length, ((TT, kT) => {
            cT.push(kk.of({
              from: TT,
              to: kT
            }))
          })), TT.dispatch({
            effects: cT
          }), !0
        }
      }],
      Ik = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      Ak = KT.o.define({
        combine: TT => (0, KT.R)(TT, Ik)
      });

    function Ck(TT) {
      let kT = [lk, Sk];
      return TT && kT.push(Ak.of(TT)), kT
    }

    function jk(TT, kT) {
      let {
        state: cT
      } = TT, lT = cT.facet(Ak), MT = kT => {
        let cT = TT.lineBlockAt(TT.posAtDOM(kT.target)),
          lT = Kk(TT.state, cT.from, cT.to);
        lT && TT.dispatch({
          effects: kk.of(lT)
        }), kT.preventDefault()
      };
      if (lT.placeholderDOM) return lT.placeholderDOM(TT, MT, kT);
      let KT = document.createElement("span");
      return KT.textContent = lT.placeholderText, KT.setAttribute("aria-label", cT.phrase("folded code")), KT.title = cT.phrase("unfold"), KT.className = "cm-foldPlaceholder", KT.onclick = MT, KT
    }
    const vk = OT.e.replace({
      widget: new class extends OT.m {
        toDOM(TT) {
          return jk(TT, null)
        }
      }
    });
    class tk extends OT.m {
      constructor(TT) {
        super(), this.value = TT
      }
      eq(TT) {
        return this.value == TT.value
      }
      toDOM(TT) {
        return jk(TT, this.value)
      }
    }
    const hk = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class Nk extends OT.j {
      constructor(TT, kT) {
        super(), this.config = TT, this.open = kT
      }
      eq(TT) {
        return this.config == TT.config && this.open == TT.open
      }
      toDOM(TT) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let kT = document.createElement("span");
        return kT.textContent = this.open ? this.config.openText : this.config.closedText, kT.title = TT.state.phrase(this.open ? "Fold line" : "Unfold line"), kT
      }
    }

    function Qk() {
      let TT = {
          ...hk,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        kT = new Nk(TT, !0),
        cT = new Nk(TT, !1),
        lT = OT.k.fromClass(class {
          constructor(TT) {
            this.from = TT.viewport.from, this.markers = this.buildMarkers(TT)
          }
          update(kT) {
            (kT.docChanged || kT.viewportChanged || kT.startState.facet(mT) != kT.state.facet(mT) || kT.startState.field(lk, !1) != kT.state.field(lk, !1) || tT(kT.startState) != tT(kT.state) || TT.foldingChanged(kT)) && (this.markers = this.buildMarkers(kT.view))
          }
          buildMarkers(TT) {
            let lT = new KT.v;
            for (let MT of TT.viewportLineBlocks) {
              let KT = Kk(TT.state, MT.from, MT.to) ? cT : qT(TT.state, MT.from, MT.to) ? kT : null;
              KT && lT.add(MT.from, MT.from, KT)
            }
            return lT.finish()
          }
        }),
        {
          domEventHandlers: MT
        } = TT;
      return [lT, (0, OT.z)({
        class: "cm-foldGutter",
        markers(TT) {
          var kT;
          return (null === (kT = TT.plugin(lT)) || void 0 === kT ? void 0 : kT.markers) || KT.y.empty
        },
        initialSpacer: () => new Nk(TT, !1),
        domEventHandlers: {
          ...MT,
          click: (TT, kT, cT) => {
            if (MT.click && MT.click(TT, kT, cT)) return !0;
            let lT = Kk(TT.state, kT.from, kT.to);
            if (lT) return TT.dispatch({
              effects: kk.of(lT)
            }), !0;
            let KT = qT(TT.state, kT.from, kT.to);
            return !!KT && (TT.dispatch({
              effects: Tk.of(KT)
            }), !0)
          }
        }
      }), Ck()]
    }
    const Sk = OT.h.baseTheme({
      ".cm-foldPlaceholder": {
        backgroundColor: "#eee",
        border: "1px solid #ddd",
        color: "#888",
        borderRadius: ".2em",
        margin: "0 1px",
        padding: "0 1px",
        cursor: "pointer"
      },
      ".cm-foldGutter span": {
        padding: "0 1px",
        cursor: "pointer"
      }
    });
    class Dk {
      constructor(TT, kT) {
        let cT;

        function lT(TT) {
          let kT = fT.e.newName();
          return (cT || (cT = Object.create(null)))["." + kT] = TT, kT
        }
        this.specs = TT;
        const MT = "string" == typeof kT.all ? kT.all : kT.all ? lT(kT.all) : void 0,
          KT = kT.scope;
        this.scope = KT instanceof CT ? TT => TT.prop(xT) == KT.data : KT ? TT => TT == KT : void 0, this.style = (0, yT.f)(TT.map((TT => ({
          tag: TT.tag,
          class: TT.class || lT(Object.assign({}, TT, {
            tag: null
          }))
        }))), {
          all: MT
        }).style, this.module = cT ? new fT.e(cT) : null, this.themeType = kT.themeType
      }
      static define(TT, kT) {
        return new Dk(TT, kT || {})
      }
    }
    const ak = KT.o.define(),
      Fk = KT.o.define({
        combine: TT => TT.length ? [TT[0]] : null
      });

    function rk(TT) {
      let kT = TT.facet(ak);
      return kT.length ? kT : TT.facet(Fk)
    }

    function Pk(TT, kT) {
      let cT, lT = [mk];
      return TT instanceof Dk && (TT.module && lT.push(OT.h.styleModule.of(TT.module)), cT = TT.themeType), (null === kT || void 0 === kT ? void 0 : kT.fallback) ? lT.push(Fk.of(TT)) : cT ? lT.push(ak.computeN([OT.h.darkTheme], (kT => kT.facet(OT.h.darkTheme) == ("dark" == cT) ? [TT] : []))) : lT.push(ak.of(TT)), lT
    }
    class wk {
      constructor(TT) {
        this.markCache = Object.create(null), this.tree = tT(TT.state), this.cK = this.buildDeco(TT, rk(TT.state)), this.decoratedTo = TT.viewport.to
      }
      update(TT) {
        let kT = tT(TT.state),
          cT = rk(TT.state),
          lT = cT != rk(TT.startState),
          {
            viewport: MT
          } = TT.view,
          KT = TT.changes.mapPos(this.decoratedTo, 1);
        kT.length < MT.to && !lT && kT.type == this.tree.type && KT >= MT.to ? (this.cK = this.cK.map(TT.changes), this.decoratedTo = KT) : (kT != this.tree || TT.viewportChanged || lT) && (this.tree = kT, this.cK = this.buildDeco(TT.view, cT), this.decoratedTo = MT.to)
      }
      buildDeco(TT, kT) {
        if (!kT || !this.tree.length) return OT.e.none;
        let cT = new KT.v;
        for (let {
            from: lT,
            to: MT
          }
          of TT.R7)(0, yT.c)(this.tree, kT, ((TT, kT, lT) => {
          cT.add(TT, kT, this.markCache[lT] || (this.markCache[lT] = OT.e.mark({
            class: lT
          })))
        }), lT, MT);
        return cT.finish()
      }
    }
    const mk = KT.t.high(OT.k.fromClass(wk, {
        cK: TT => TT.cK
      })),
      bk = Dk.define([{
        tag: yT.i.meta,
        color: "#404740"
      }, {
        tag: yT.i.link,
        textDecoration: "underline"
      }, {
        tag: yT.i.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: yT.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: yT.i.strong,
        fontWeight: "bold"
      }, {
        tag: yT.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: yT.i.keyword,
        color: "#708"
      }, {
        tag: [yT.i.atom, yT.i.bool, yT.i.url, yT.i.contentSeparator, yT.i.labelName],
        color: "#219"
      }, {
        tag: [yT.i.literal, yT.i.inserted],
        color: "#164"
      }, {
        tag: [yT.i.string, yT.i.deleted],
        color: "#a11"
      }, {
        tag: [yT.i.regexp, yT.i.escape, yT.i.special(yT.i.string)],
        color: "#e40"
      }, {
        tag: yT.i.definition(yT.i.variableName),
        color: "#00f"
      }, {
        tag: yT.i.local(yT.i.variableName),
        color: "#30a"
      }, {
        tag: [yT.i.typeName, yT.i.namespace],
        color: "#085"
      }, {
        tag: yT.i.className,
        color: "#167"
      }, {
        tag: [yT.i.special(yT.i.variableName), yT.i.macroName],
        color: "#256"
      }, {
        tag: yT.i.definition(yT.i.propertyName),
        color: "#00c"
      }, {
        tag: yT.i.comment,
        color: "#940"
      }, {
        tag: yT.i.invalid,
        color: "#f00"
      }]),
      zk = OT.h.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Jk = 1e4,
      Hk = "()[]{}",
      ek = KT.o.define({
        combine: TT => (0, KT.R)(TT, {
          afterCursor: !0,
          brackets: Hk,
          maxScanDistance: Jk,
          renderMatch: Ek
        })
      }),
      Gk = OT.e.mark({
        class: "cm-matchingBracket"
      }),
      Vk = OT.e.mark({
        class: "cm-nonmatchingBracket"
      });

    function Ek(TT) {
      let kT = [],
        cT = TT.matched ? Gk : Vk;
      return kT.push(cT.range(TT.start.from, TT.start.to)), TT.end && kT.push(cT.range(TT.end.from, TT.end.to)), kT
    }

    function Zk(TT) {
      let kT = [],
        cT = TT.facet(ek);
      for (let lT of TT.selection.qt) {
        if (!lT.empty) continue;
        let MT = gk(TT, lT.head, -1, cT) || lT.head > 0 && gk(TT, lT.head - 1, 1, cT) || cT.afterCursor && (gk(TT, lT.head, 1, cT) || lT.head < TT.doc.length && gk(TT, lT.head + 1, -1, cT));
        MT && (kT = kT.concat(cT.renderMatch(MT, TT)))
      }
      return OT.e.set(kT, !0)
    }
    const uk = [OT.k.fromClass(class {
      constructor(TT) {
        this.paused = !1, this.cK = Zk(TT.state)
      }
      update(TT) {
        (TT.docChanged || TT.selectionSet || this.paused) && (TT.view.composing ? (this.cK = this.cK.map(TT.changes), this.paused = !0) : (this.cK = Zk(TT.state), this.paused = !1))
      }
    }, {
      cK: TT => TT.cK
    }), zk];

    function Xk() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [ek.of(TT), uk]
    }
    const dk = new MT.j;

    function Lk(TT, kT, cT) {
      let lT = TT.prop(kT < 0 ? MT.j.openedBy : MT.j.closedBy);
      if (lT) return lT;
      if (1 == TT.name.length) {
        let lT = cT.indexOf(TT.name);
        if (lT > -1 && lT % 2 == (kT < 0 ? 1 : 0)) return [cT[lT + kT]]
      }
      return null
    }

    function Rk(TT) {
      let kT = TT.type.prop(dk);
      return kT ? kT(TT.node) : TT
    }

    function gk(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        MT = lT.maxScanDistance || Jk,
        KT = lT.brackets || Hk,
        OT = tT(TT),
        yT = OT.resolveInner(kT, cT);
      for (let fT = yT; fT; fT = fT.parent) {
        let lT = Lk(fT.type, cT, KT);
        if (lT && fT.from < fT.to) {
          let MT = Rk(fT);
          if (MT && (cT > 0 ? kT >= MT.from && kT < MT.to : kT > MT.from && kT <= MT.to)) return Uk(TT, kT, cT, fT, MT, lT, KT)
        }
      }
      return function(TT, kT, cT, lT, MT, KT, OT) {
        if (cT < 0 ? !kT : kT == TT.doc.length) return null;
        let yT = cT < 0 ? TT.sliceDoc(kT - 1, kT) : TT.sliceDoc(kT, kT + 1),
          fT = OT.indexOf(yT);
        if (fT < 0 || fT % 2 == 0 != cT > 0) return null;
        let xT = {
            from: cT < 0 ? kT - 1 : kT,
            to: cT > 0 ? kT + 1 : kT
          },
          IT = TT.doc.iterRange(kT, cT > 0 ? TT.doc.length : 0),
          AT = 0;
        for (let CT = 0; !IT.next().done && CT <= KT;) {
          let TT = IT.value;
          cT < 0 && (CT += TT.length);
          let KT = kT + CT * cT;
          for (let kT = cT > 0 ? 0 : TT.length - 1, yT = cT > 0 ? TT.length : -1; kT != yT; kT += cT) {
            let yT = OT.indexOf(TT[kT]);
            if (!(yT < 0 || lT.resolveInner(KT + kT, 1).type != MT))
              if (yT % 2 == 0 == cT > 0) AT++;
              else {
                if (1 == AT) return {
                  start: xT,
                  end: {
                    from: KT + kT,
                    to: KT + kT + 1
                  },
                  matched: yT >> 1 == fT >> 1
                };
                AT--
              }
          }
          cT > 0 && (CT += TT.length)
        }
        return IT.done ? {
          start: xT,
          matched: !1
        } : null
      }(TT, kT, cT, OT, yT.type, MT, KT)
    }

    function Uk(TT, kT, cT, lT, MT, KT, OT) {
      let yT = lT.parent,
        fT = {
          from: MT.from,
          to: MT.to
        },
        xT = 0,
        IT = null === yT || void 0 === yT ? void 0 : yT.cursor();
      if (IT && (cT < 0 ? IT.childBefore(lT.from) : IT.childAfter(lT.to)))
        do {
          if (cT < 0 ? IT.to <= lT.from : IT.from >= lT.to) {
            if (0 == xT && KT.indexOf(IT.type.name) > -1 && IT.from < IT.to) {
              let TT = Rk(IT);
              return {
                start: fT,
                end: TT ? {
                  from: TT.from,
                  to: TT.to
                } : void 0,
                matched: !0
              }
            }
            if (Lk(IT.type, cT, OT)) xT++;
            else if (Lk(IT.type, -cT, OT)) {
              if (0 == xT) {
                let TT = Rk(IT);
                return {
                  start: fT,
                  end: TT && TT.from < TT.to ? {
                    from: TT.from,
                    to: TT.to
                  } : void 0,
                  matched: !1
                }
              }
              xT--
            }
          }
        } while (cT < 0 ? IT.prevSibling() : IT.nextSibling());
      return {
        start: fT,
        matched: !1
      }
    }
    const Yk = Object.create(null),
      Bk = [MT.o.none],
      Wk = [],
      nk = Object.create(null),
      pk = Object.create(null);
    for (let [sk, Tc] of [
        ["variable", "variableName"],
        ["variable-2", "variableName.special"],
        ["string-2", "string.special"],
        ["def", "variableName.definition"],
        ["tag", "tagName"],
        ["attribute", "attributeName"],
        ["type", "typeName"],
        ["builtin", "variableName.standard"],
        ["qualifier", "modifier"],
        ["error", "invalid"],
        ["header", "heading"],
        ["property", "propertyName"]
      ]) pk[sk] = qk(Yk, Tc);

    function ik(TT, kT) {
      Wk.indexOf(TT) > -1 || (Wk.push(TT), console.warn(kT))
    }

    function qk(TT, kT) {
      let cT = [];
      for (let MT of kT.split(" ")) {
        let kT = [];
        for (let cT of MT.split(".")) {
          let lT = TT[cT] || yT.i[cT];
          lT ? "function" == typeof lT ? kT.length ? kT = kT.map(lT) : ik(cT, `Modifier ${cT} used at start of tag`) : kT.length ? ik(cT, `Tag ${cT} used as modifier`) : kT = Array.isArray(lT) ? lT : [lT] : ik(cT, `Unknown highlighting tag ${cT}`)
        }
        for (let TT of kT) cT.push(TT)
      }
      if (!cT.length) return 0;
      let lT = kT.replace(/ /g, "_"),
        KT = lT + " " + cT.map((TT => TT.id)),
        OT = nk[KT];
      if (OT) return OT.id;
      let fT = nk[KT] = MT.o.define({
        id: Bk.length,
        name: lT,
        props: [(0, yT.e)({
          [lT]: cT
        })]
      });
      return Bk.push(fT), fT.id
    }
    OT.f.RTL, OT.f.LTR
  },
  40981: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => ST,
      d: () => rT
    });
    var lT = cT(40944),
      MT = cT(40941),
      KT = cT(40950);
    class OT {
      constructor(TT, kT, cT) {
        this.from = TT, this.to = kT, this.diagnostic = cT
      }
    }
    class yT {
      constructor(TT, kT, cT) {
        this.diagnostics = TT, this.panel = kT, this.selected = cT
      }
      static init(TT, kT, cT) {
        let KT = cT.facet(aT).markerFilter;
        KT && (TT = KT(TT, cT));
        let OT = TT.slice().sort(((TT, kT) => TT.from - kT.from || TT.to - kT.to)),
          xT = new MT.v,
          IT = [],
          AT = 0,
          CT = cT.doc.iter(),
          jT = 0,
          vT = cT.doc.length;
        for (let MT = 0;;) {
          let TT, kT, cT = MT == OT.length ? null : OT[MT];
          if (!cT && !IT.length) break;
          if (IT.length) TT = AT, kT = IT.reduce(((TT, kT) => Math.min(TT, kT.to)), cT && cT.from > TT ? cT.from : 1e8);
          else {
            if (TT = cT.from, TT > vT) break;
            kT = cT.to, IT.push(cT), MT++
          }
          for (; MT < OT.length;) {
            let cT = OT[MT];
            if (cT.from != TT || !(cT.to > cT.from || cT.to == TT)) {
              kT = Math.min(cT.from, kT);
              break
            }
            IT.push(cT), MT++, kT = Math.min(cT.to, kT)
          }
          kT = Math.min(kT, vT);
          let KT = !1;
          if (IT.some((cT => cT.from == TT && (cT.to == kT || kT == vT))) && (KT = TT == kT, !KT && kT - TT < 10)) {
            let cT = TT - (jT + CT.value.length);
            cT > 0 && (CT.next(cT), jT = TT);
            for (let lT = TT;;) {
              if (lT >= kT) {
                KT = !0;
                break
              }
              if (!CT.lineBreak && jT + CT.value.length > lT) break;
              lT = jT + CT.value.length, jT += CT.value.length, CT.next()
            }
          }
          let yT = GT(IT);
          if (KT) xT.add(TT, TT, lT.e.widget({
            widget: new mT(yT),
            diagnostics: IT.slice()
          }));
          else {
            let cT = IT.reduce(((TT, kT) => kT.markClass ? TT + " " + kT.markClass : TT), "");
            xT.add(TT, kT, lT.e.mark({
              class: "cm-lintRange cm-lintRange-" + yT + cT,
              diagnostics: IT.slice(),
              inclusiveEnd: IT.some((TT => TT.to > kT))
            }))
          }
          if (AT = kT, AT == vT) break;
          for (let lT = 0; lT < IT.length; lT++) IT[lT].to <= AT && IT.splice(lT--, 1)
        }
        let tT = xT.finish();
        return new yT(tT, kT, fT(tT))
      }
    }

    function fT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        lT = null;
      return TT.between(cT, 1e9, ((TT, cT, MT) => {
        let {
          spec: KT
        } = MT;
        if (!(kT && KT.diagnostics.indexOf(kT) < 0))
          if (lT) {
            if (KT.diagnostics.indexOf(lT.diagnostic) < 0) return !1;
            lT = new OT(lT.from, cT, lT.diagnostic)
          } else lT = new OT(TT, cT, kT || KT.diagnostics[0])
      })), lT
    }

    function xT(TT, kT) {
      let cT = kT.pos,
        lT = kT.end || cT,
        MT = TT.state.facet(aT).hideOn(TT, cT, lT);
      if (null != MT) return MT;
      let KT = TT.startState.doc.lineAt(kT.pos);
      return !(!TT.effects.some((TT => TT.is(AT))) && !TT.changes.touchesRange(KT.from, Math.max(KT.to, lT)))
    }

    function IT(TT, kT) {
      return TT.field(vT, !1) ? kT : kT.concat(MT.F.appendConfig.of(VT))
    }
    const AT = MT.F.define(),
      CT = MT.F.define(),
      jT = MT.F.define(),
      vT = MT.H.define({
        create: () => new yT(lT.e.none, null, null),
        update(TT, kT) {
          if (kT.docChanged && TT.diagnostics.size) {
            let cT = TT.diagnostics.map(kT.changes),
              lT = null,
              MT = TT.panel;
            if (TT.selected) {
              let MT = kT.changes.mapPos(TT.selected.from, 1);
              lT = fT(cT, TT.selected.diagnostic, MT) || fT(cT, null, MT)
            }!cT.size && MT && kT.state.facet(aT).autoPanel && (MT = null), TT = new yT(cT, MT, lT)
          }
          for (let cT of kT.effects)
            if (cT.is(AT)) {
              let lT = kT.state.facet(aT).autoPanel ? cT.value.length ? zT.open : null : TT.panel;
              TT = yT.init(cT.value, lT, kT.state)
            } else cT.is(CT) ? TT = new yT(TT.diagnostics, cT.value ? zT.open : null, TT.selected) : cT.is(jT) && (TT = new yT(TT.diagnostics, TT.panel, cT.value));
          return TT
        },
        provide: TT => [lT.cb.from(TT, (TT => TT.panel)), lT.h.cK.from(TT, (TT => TT.diagnostics))]
      });
    const tT = lT.e.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function hT(TT, kT, cT) {
      let lT, {
          diagnostics: MT
        } = TT.state.field(vT),
        KT = -1,
        OT = -1;
      MT.between(kT - (cT < 0 ? 1 : 0), kT + (cT > 0 ? 1 : 0), ((TT, MT, yT) => {
        let {
          spec: fT
        } = yT;
        if (kT >= TT && kT <= MT && (TT == MT || (kT > TT || cT > 0) && (kT < MT || cT < 0))) return lT = fT.diagnostics, KT = TT, OT = MT, !1
      }));
      let yT = TT.state.facet(aT).tooltipFilter;
      return lT && yT && (lT = yT(lT, TT.state)), lT ? {
        pos: KT,
        end: OT,
        above: TT.state.doc.lineAt(KT).to < OT,
        create: () => ({
          dom: NT(TT, lT)
        })
      } : null
    }

    function NT(TT, kT) {
      return (0, KT.d)("ul", {
        class: "cm-tooltip-lint"
      }, kT.map((kT => wT(TT, kT, !1))))
    }
    const QT = TT => {
        let kT = TT.state.field(vT, !1);
        return !(!kT || !kT.panel) && (TT.dispatch({
          effects: CT.of(!1)
        }), !0)
      },
      ST = [{
        key: "Mod-Shift-m",
        run: TT => {
          let kT = TT.state.field(vT, !1);
          kT && kT.panel || TT.dispatch({
            effects: IT(TT.state, [CT.of(!0)])
          });
          let cT = (0, lT.w)(TT, zT.open);
          return cT && cT.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: TT => {
          let kT = TT.state.field(vT, !1);
          if (!kT) return !1;
          let cT = TT.state.selection.main,
            lT = fT(kT.diagnostics, null, cT.to + 1);
          return !(!lT && (lT = fT(kT.diagnostics, null, 0), !lT || lT.from == cT.from && lT.to == cT.to)) && (TT.dispatch({
            selection: {
              anchor: lT.from,
              head: lT.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      DT = lT.k.fromClass(class {
        constructor(TT) {
          this.view = TT, this.timeout = -1, this.set = !0;
          let {
            delay: kT
          } = TT.state.facet(aT);
          this.lintTime = Date.now() + kT, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, kT)
        }
        run() {
          clearTimeout(this.timeout);
          let TT = Date.now();
          if (TT < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - TT);
          else {
            this.set = !1;
            let {
              state: TT
            } = this.view, {
              sources: kT
            } = TT.facet(aT);
            kT.length && function(TT, kT, cT) {
              let lT = [],
                MT = -1;
              for (let KT of TT) KT.then((cT => {
                lT.push(cT), clearTimeout(MT), lT.length == TT.length ? kT(lT) : MT = setTimeout((() => kT(lT)), 200)
              }), cT)
            }(kT.map((TT => Promise.resolve(TT(this.view)))), (kT => {
              this.view.state.doc == TT.doc && this.view.dispatch(function(TT, kT) {
                return {
                  effects: IT(TT, [AT.of(kT)])
                }
              }(this.view.state, kT.reduce(((TT, kT) => TT.concat(kT)))))
            }), (TT => {
              (0, lT.S)(this.view.state, TT)
            }))
          }
        }
        update(TT) {
          let kT = TT.state.facet(aT);
          (TT.docChanged || kT != TT.startState.facet(aT) || kT.needsRefresh && kT.needsRefresh(TT)) && (this.lintTime = Date.now() + kT.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, kT.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const aT = MT.o.define({
      combine: TT => ({
        sources: TT.map((TT => TT.source)).filter((TT => null != TT)),
        ...(0, MT.R)(TT.map((TT => TT.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: FT,
          tooltipFilter: FT,
          needsRefresh: (TT, kT) => TT ? kT ? cT => TT(cT) || kT(cT) : TT : kT,
          hideOn: (TT, kT) => TT ? kT ? (cT, lT, MT) => TT(cT, lT, MT) || kT(cT, lT, MT) : TT : kT,
          autoPanel: (TT, kT) => TT || kT
        })
      })
    });

    function FT(TT, kT) {
      return TT ? kT ? (cT, lT) => kT(TT(cT, lT), lT) : TT : kT
    }

    function rT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [aT.of({
        source: TT,
        config: kT
      }), DT, VT]
    }

    function PT(TT) {
      let kT = [];
      if (TT) TT: for (let {
          name: cT
        }
        of TT) {
        for (let TT = 0; TT < cT.length; TT++) {
          let lT = cT[TT];
          if (/[a-zA-Z]/.test(lT) && !kT.some((TT => TT.toLowerCase() == lT.toLowerCase()))) {
            kT.push(lT);
            continue TT
          }
        }
        kT.push("")
      }
      return kT
    }

    function wT(TT, kT, cT) {
      var lT;
      let MT = cT ? PT(kT.actions) : [];
      return (0, KT.d)("li", {
        class: "cm-diagnostic cm-diagnostic-" + kT.severity
      }, (0, KT.d)("span", {
        class: "cm-diagnosticText"
      }, kT.renderMessage ? kT.renderMessage(TT) : kT.message), null === (lT = kT.actions) || void 0 === lT ? void 0 : lT.map(((cT, lT) => {
        let OT = !1,
          yT = lT => {
            if (lT.preventDefault(), OT) return;
            OT = !0;
            let MT = fT(TT.state.field(vT).diagnostics, kT);
            MT && cT.apply(TT, MT.from, MT.to)
          },
          {
            name: xT
          } = cT,
          IT = MT[lT] ? xT.indexOf(MT[lT]) : -1,
          AT = IT < 0 ? xT : [xT.slice(0, IT), (0, KT.d)("u", xT.slice(IT, IT + 1)), xT.slice(IT + 1)],
          CT = cT.markClass ? " " + cT.markClass : "";
        return (0, KT.d)("button", {
          type: "button",
          class: "cm-diagnosticAction" + CT,
          onclick: yT,
          onmousedown: yT,
          "aria-label": ` Action: ${xT}${IT<0?"":` (access key "${MT[lT]})"`}.`
        }, AT)
      })), kT.source && (0, KT.d)("div", {
        class: "cm-diagnosticSource"
      }, kT.source))
    }
    class mT extends lT.m {
      constructor(TT) {
        super(), this.sev = TT
      }
      eq(TT) {
        return TT.sev == this.sev
      }
      toDOM() {
        return (0, KT.d)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class bT {
      constructor(TT, kT) {
        this.diagnostic = kT, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = wT(TT, kT, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class zT {
      constructor(TT) {
        this.view = TT, this.items = [];
        this.list = (0, KT.d)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: kT => {
            if (!(kT.ctrlKey || kT.altKey || kT.metaKey)) {
              if (27 == kT.keyCode) QT(this.view), this.view.focus();
              else if (38 == kT.keyCode || 33 == kT.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == kT.keyCode || 34 == kT.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == kT.keyCode) this.moveSelection(0);
              else if (35 == kT.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == kT.keyCode) this.view.focus();
              else {
                if (!(kT.keyCode >= 65 && kT.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: cT
                  } = this.items[this.selectedIndex], lT = PT(cT.actions);
                  for (let MT = 0; MT < lT.length; MT++)
                    if (lT[MT].toUpperCase().charCodeAt(0) == kT.keyCode) {
                      let kT = fT(this.view.state.field(vT).diagnostics, cT);
                      kT && cT.actions[MT].apply(TT, kT.from, kT.to)
                    }
                }
              }
              kT.preventDefault()
            }
          },
          onclick: TT => {
            for (let kT = 0; kT < this.items.length; kT++) this.items[kT].dom.contains(TT.target) && this.moveSelection(kT)
          }
        }), this.dom = (0, KT.d)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, KT.d)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => QT(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let TT = this.view.state.field(vT).selected;
        if (!TT) return -1;
        for (let kT = 0; kT < this.items.length; kT++)
          if (this.items[kT].diagnostic == TT.diagnostic) return kT;
        return -1
      }
      update() {
        let {
          diagnostics: TT,
          selected: kT
        } = this.view.state.field(vT), cT = 0, lT = !1, MT = null, KT = new Set;
        for (TT.between(0, this.view.state.doc.length, ((TT, OT, yT) => {
            let {
              spec: fT
            } = yT;
            for (let xT of fT.diagnostics) {
              if (KT.has(xT)) continue;
              KT.add(xT);
              let TT, OT = -1;
              for (let kT = cT; kT < this.items.length; kT++)
                if (this.items[kT].diagnostic == xT) {
                  OT = kT;
                  break
                } OT < 0 ? (TT = new bT(this.view, xT), this.items.splice(cT, 0, TT), lT = !0) : (TT = this.items[OT], OT > cT && (this.items.splice(cT, OT - cT), lT = !0)), kT && TT.diagnostic == kT.diagnostic ? TT.dom.hasAttribute("aria-selected") || (TT.dom.setAttribute("aria-selected", "true"), MT = TT) : TT.dom.hasAttribute("aria-selected") && TT.dom.removeAttribute("aria-selected"), cT++
            }
          })); cT < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) lT = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new bT(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), lT = !0), MT ? (this.list.setAttribute("aria-activedescendant", MT.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: MT.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: TT => {
            let {
              sel: kT,
              panel: cT
            } = TT, lT = cT.height / this.list.offsetHeight;
            kT.top < cT.top ? this.list.scrollTop -= (cT.top - kT.top) / lT : kT.bottom > cT.bottom && (this.list.scrollTop += (kT.bottom - cT.bottom) / lT)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), lT && this.sync()
      }
      sync() {
        let TT = this.list.firstChild;

        function kT() {
          let kT = TT;
          TT = kT.nextSibling, kT.remove()
        }
        for (let cT of this.items)
          if (cT.dom.parentNode == this.list) {
            for (; TT != cT.dom;) kT();
            TT = cT.dom.nextSibling
          } else this.list.insertBefore(cT.dom, TT);
        for (; TT;) kT()
      }
      moveSelection(TT) {
        if (this.selectedIndex < 0) return;
        let kT = fT(this.view.state.field(vT).diagnostics, this.items[TT].diagnostic);
        kT && this.view.dispatch({
          selection: {
            anchor: kT.from,
            head: kT.to
          },
          scrollIntoView: !0,
          effects: jT.of(kT)
        })
      }
      static open(TT) {
        return new zT(TT)
      }
    }

    function JT(TT) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(TT)}</svg>')`
    }

    function oT(TT) {
      return JT(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${TT}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const HT = lT.h.baseTheme({
      ".cm-diagnostic": {
        padding: "3px 6px 3px 8px",
        marginLeft: "-1px",
        display: "block",
        whiteSpace: "pre-wrap"
      },
      ".cm-diagnostic-error": {
        borderLeft: "5px solid #d11"
      },
      ".cm-diagnostic-warning": {
        borderLeft: "5px solid orange"
      },
      ".cm-diagnostic-info": {
        borderLeft: "5px solid #999"
      },
      ".cm-diagnostic-hint": {
        borderLeft: "5px solid #66d"
      },
      ".cm-diagnosticAction": {
        font: "inherit",
        border: "none",
        padding: "2px 4px",
        backgroundColor: "#444",
        color: "white",
        borderRadius: "3px",
        marginLeft: "8px",
        cursor: "pointer"
      },
      ".cm-diagnosticSource": {
        fontSize: "70%",
        opacity: .7
      },
      ".cm-lintRange": {
        backgroundPosition: "left bottom",
        backgroundRepeat: "repeat-x",
        paddingBottom: "0.7px"
      },
      ".cm-lintRange-error": {
        backgroundImage: oT("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: oT("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: oT("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: oT("#66d")
      },
      ".cm-lintRange-active": {
        backgroundColor: "#ffdd9980"
      },
      ".cm-tooltip-lint": {
        padding: 0,
        margin: 0
      },
      ".cm-lintPoint": {
        position: "relative",
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "-2px",
          borderLeft: "3px solid transparent",
          borderRight: "3px solid transparent",
          borderBottom: "4px solid #d11"
        }
      },
      ".cm-lintPoint-warning": {
        "&:after": {
          borderBottomColor: "orange"
        }
      },
      ".cm-lintPoint-info": {
        "&:after": {
          borderBottomColor: "#999"
        }
      },
      ".cm-lintPoint-hint": {
        "&:after": {
          borderBottomColor: "#66d"
        }
      },
      ".cm-panel.cm-panel-lint": {
        position: "relative",
        "& ul": {
          maxHeight: "100px",
          overflowY: "auto",
          "& [aria-selected]": {
            backgroundColor: "#ddd",
            "& u": {
              textDecoration: "underline"
            }
          },
          "&:focus [aria-selected]": {
            background_fallback: "#bdf",
            backgroundColor: "Highlight",
            color_fallback: "white",
            color: "HighlightText"
          },
          "& u": {
            textDecoration: "none"
          },
          padding: 0,
          margin: 0
        },
        "& [name=close]": {
          position: "absolute",
          top: "0",
          right: "2px",
          background: "inherit",
          border: "none",
          font: "inherit",
          padding: 0,
          margin: 0
        }
      },
      "&dark .cm-lintRange-active": {
        backgroundColor: "#86714a80"
      },
      "&dark .cm-panel.cm-panel-lint ul": {
        "& [aria-selected]": {
          backgroundColor: "#2e343e"
        }
      }
    });

    function eT(TT) {
      return "error" == TT ? 4 : "warning" == TT ? 3 : "info" == TT ? 2 : 1
    }

    function GT(TT) {
      let kT = "hint",
        cT = 1;
      for (let lT of TT) {
        let TT = eT(lT.severity);
        TT > cT && (cT = TT, kT = lT.severity)
      }
      return kT
    }
    lT.j;
    const VT = [vT, lT.h.cK.compute([vT], (TT => {
      let {
        selected: kT,
        panel: cT
      } = TT.field(vT);
      return kT && cT && kT.from != kT.to ? lT.e.set([tT.range(kT.from, kT.to)]) : lT.e.none
    })), (0, lT.J)(hT, {
      hideOn: xT
    }), HT]
  },
  40976: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => qT,
      e: () => NT,
      f: () => sT
    });
    var lT = cT(40944),
      MT = cT(40941),
      KT = cT(40950);
    const OT = "function" == typeof String.prototype.normalize ? TT => TT.normalize("NFKD") : TT => TT;
    class yT {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length,
          MT = arguments.length > 4 ? arguments[4] : void 0,
          KT = arguments.length > 5 ? arguments[5] : void 0;
        this.test = KT, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = TT.iterRange(cT, lT), this.bufferStart = cT, this.normalize = MT ? TT => MT(OT(TT)) : OT, this.query = this.normalize(kT)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, MT.N)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let TT = this.peek();
          if (TT < 0) return this.done = !0, this;
          let kT = (0, MT._)(TT),
            cT = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, MT.O)(TT);
          let lT = this.normalize(kT);
          if (lT.length)
            for (let MT = 0, KT = cT;; MT++) {
              let TT = lT.charCodeAt(MT),
                OT = this.match(TT, KT, this.bufferPos + this.bufferStart);
              if (MT == lT.length - 1) {
                if (OT) return this.value = OT, this;
                break
              }
              KT == cT && MT < kT.length && kT.charCodeAt(MT) == TT && KT++
            }
        }
      }
      match(TT, kT, cT) {
        let lT = null;
        for (let MT = 0; MT < this.matches.length; MT += 2) {
          let kT = this.matches[MT],
            KT = !1;
          this.query.charCodeAt(kT) == TT && (kT == this.query.length - 1 ? lT = {
            from: this.matches[MT + 1],
            to: cT
          } : (this.matches[MT]++, KT = !0)), KT || (this.matches.splice(MT, 2), MT -= 2)
        }
        return this.query.charCodeAt(0) == TT && (1 == this.query.length ? lT = {
          from: kT,
          to: cT
        } : this.matches.push(1, kT)), lT && this.test && !this.test(lT.from, lT.to, this.buffer, this.bufferStart) && (lT = null), lT
      }
    }
    "undefined" != typeof Symbol && (yT.prototype[Symbol.iterator] = function() {
      return this
    });
    const fT = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      xT = "gm" + (null == /x/.unicode ? "" : "u");
    class IT {
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : TT.length;
        if (this.text = TT, this.to = MT, this.curLine = "", this.done = !1, this.value = fT, /\\[sWDnr]|\n|\r|\[\^/.test(kT)) return new jT(TT, kT, cT, lT, MT);
        this.re = new RegExp(kT, xT + ((null === cT || void 0 === cT ? void 0 : cT.ignoreCase) ? "i" : "")), this.test = null === cT || void 0 === cT ? void 0 : cT.test, this.iter = TT.iter();
        let KT = TT.lineAt(lT);
        this.curLineStart = KT.from, this.matchPos = vT(TT, lT), this.getLine(this.curLineStart)
      }
      getLine(TT) {
        this.iter.next(TT), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let TT = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = TT;
          let kT = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (kT) {
            let cT = this.curLineStart + kT.index,
              lT = cT + kT[0].length;
            if (this.matchPos = vT(this.text, lT + (cT == lT ? 1 : 0)), cT == this.curLineStart + this.curLine.length && this.nextLine(), (cT < lT || cT > this.value.to) && (!this.test || this.test(cT, lT, kT))) return this.value = {
              from: cT,
              to: lT,
              match: kT
            }, this;
            TT = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), TT = 0
          }
        }
      }
    }
    const AT = new WeakMap;
    class CT {
      constructor(TT, kT) {
        this.from = TT, this.text = kT
      }
      get to() {
        return this.from + this.text.length
      }
      static get(TT, kT, cT) {
        let lT = AT.get(TT);
        if (!lT || lT.from >= cT || lT.to <= kT) {
          let lT = new CT(kT, TT.sliceString(kT, cT));
          return AT.set(TT, lT), lT
        }
        if (lT.from == kT && lT.to == cT) return lT;
        let {
          text: MT,
          from: KT
        } = lT;
        return KT > kT && (MT = TT.sliceString(kT, KT) + MT, KT = kT), lT.to < cT && (MT += TT.sliceString(lT.to, cT)), AT.set(TT, new CT(KT, MT)), new CT(kT, MT.slice(kT - KT, cT - KT))
      }
    }
    class jT {
      constructor(TT, kT, cT, lT, MT) {
        this.text = TT, this.to = MT, this.done = !1, this.value = fT, this.matchPos = vT(TT, lT), this.re = new RegExp(kT, xT + ((null === cT || void 0 === cT ? void 0 : cT.ignoreCase) ? "i" : "")), this.test = null === cT || void 0 === cT ? void 0 : cT.test, this.flat = CT.get(TT, lT, this.chunkEnd(lT + 5e3))
      }
      chunkEnd(TT) {
        return TT >= this.to ? this.to : this.text.lineAt(TT).to
      }
      next() {
        for (;;) {
          let TT = this.re.lastIndex = this.matchPos - this.flat.from,
            kT = this.re.exec(this.flat.text);
          if (kT && !kT[0] && kT.index == TT && (this.re.lastIndex = TT + 1, kT = this.re.exec(this.flat.text)), kT) {
            let TT = this.flat.from + kT.index,
              cT = TT + kT[0].length;
            if ((this.flat.to >= this.to || kT.index + kT[0].length <= this.flat.text.length - 10) && (!this.test || this.test(TT, cT, kT))) return this.value = {
              from: TT,
              to: cT,
              match: kT
            }, this.matchPos = vT(this.text, cT + (TT == cT ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = CT.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function vT(TT, kT) {
      if (kT >= TT.length) return kT;
      let cT, lT = TT.lineAt(kT);
      for (; kT < lT.to && (cT = lT.text.charCodeAt(kT - lT.from)) >= 56320 && cT < 57344;) kT++;
      return kT
    }
    "undefined" != typeof Symbol && (IT.prototype[Symbol.iterator] = jT.prototype[Symbol.iterator] = function() {
      return this
    });
    const tT = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      hT = MT.o.define({
        combine: TT => (0, MT.R)(TT, tT, {
          highlightWordAroundCursor: (TT, kT) => TT || kT,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function NT(TT) {
      let kT = [FT, aT];
      return TT && kT.push(hT.of(TT)), kT
    }
    const QT = lT.e.mark({
        class: "cm-selectionMatch"
      }),
      ST = lT.e.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function DT(TT, kT, cT, lT) {
      return (0 == cT || TT(kT.sliceDoc(cT - 1, cT)) != MT.i.Word) && (lT == kT.doc.length || TT(kT.sliceDoc(lT, lT + 1)) != MT.i.Word)
    }
    const aT = lT.k.fromClass(class {
        constructor(TT) {
          this.cK = this.getDeco(TT)
        }
        update(TT) {
          (TT.selectionSet || TT.docChanged || TT.viewportChanged) && (this.cK = this.getDeco(TT.view))
        }
        getDeco(TT) {
          let kT = TT.state.facet(hT),
            {
              state: cT
            } = TT,
            KT = cT.selection;
          if (KT.qt.length > 1) return lT.e.none;
          let OT, fT = KT.main,
            xT = null;
          if (fT.empty) {
            if (!kT.highlightWordAroundCursor) return lT.e.none;
            let TT = cT.wordAt(fT.head);
            if (!TT) return lT.e.none;
            xT = cT.charCategorizer(fT.head), OT = cT.sliceDoc(TT.from, TT.to)
          } else {
            let TT = fT.to - fT.from;
            if (TT < kT.minSelectionLength || TT > 200) return lT.e.none;
            if (kT.wholeWords) {
              if (OT = cT.sliceDoc(fT.from, fT.to), xT = cT.charCategorizer(fT.head), !DT(xT, cT, fT.from, fT.to) || ! function(TT, kT, cT, lT) {
                  return TT(kT.sliceDoc(cT, cT + 1)) == MT.i.Word && TT(kT.sliceDoc(lT - 1, lT)) == MT.i.Word
                }(xT, cT, fT.from, fT.to)) return lT.e.none
            } else if (OT = cT.sliceDoc(fT.from, fT.to), !OT) return lT.e.none
          }
          let IT = [];
          for (let MT of TT.R7) {
            let TT = new yT(cT.doc, OT, MT.from, MT.to);
            for (; !TT.next().done;) {
              let {
                from: MT,
                to: KT
              } = TT.value;
              if ((!xT || DT(xT, cT, MT, KT)) && (fT.empty && MT <= fT.from && KT >= fT.to ? IT.push(ST.range(MT, KT)) : (MT >= fT.to || KT <= fT.from) && IT.push(QT.range(MT, KT)), IT.length > kT.maxMatches)) return lT.e.none
            }
          }
          return lT.e.set(IT)
        }
      }, {
        cK: TT => TT.cK
      }),
      FT = lT.h.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const rT = MT.o.define({
      combine: TT => (0, MT.R)(TT, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: TT => new Tk(TT),
        scrollToMatch: TT => lT.h.scrollIntoView(TT)
      })
    });
    class PT {
      constructor(TT) {
        this.search = TT.search, this.caseSensitive = !!TT.caseSensitive, this.literal = !!TT.literal, this.regexp = !!TT.regexp, this.replace = TT.replace || "", this.valid = !!this.search && (!this.regexp || function(TT) {
          try {
            return new RegExp(TT, xT), !0
          } catch (kT) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!TT.wholeWord, this.test = TT.test
      }
      unquote(TT) {
        return this.literal ? TT : TT.replace(/\\([nrt\\])/g, ((TT, kT) => "n" == kT ? "\n" : "r" == kT ? "\r" : "t" == kT ? "\t" : "\\"))
      }
      eq(TT) {
        return this.search == TT.search && this.replace == TT.replace && this.caseSensitive == TT.caseSensitive && this.regexp == TT.regexp && this.wholeWord == TT.wholeWord && this.test == TT.test
      }
      create() {
        return this.regexp ? new HT(this) : new bT(this)
      }
      getCursor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = TT.doc ? TT : MT.l.create({
            doc: TT
          });
        return null == cT && (cT = lT.doc.length), this.regexp ? zT(this, lT, kT, cT) : mT(this, lT, kT, cT)
      }
    }
    class wT {
      constructor(TT) {
        this.spec = TT
      }
    }

    function mT(TT, kT, cT, lT) {
      let KT;
      var OT, fT;
      return TT.wholeWord && (OT = kT.doc, fT = kT.charCategorizer(kT.selection.main.head), KT = (TT, kT, cT, lT) => ((lT > TT || lT + cT.length < kT) && (lT = Math.max(0, TT - 2), cT = OT.sliceString(lT, Math.min(OT.length, kT + 2))), (fT(JT(cT, TT - lT)) != MT.i.Word || fT(oT(cT, TT - lT)) != MT.i.Word) && (fT(oT(cT, kT - lT)) != MT.i.Word || fT(JT(cT, kT - lT)) != MT.i.Word))), TT.test && (KT = function(TT, kT, cT) {
        return (lT, MT, KT, OT) => {
          if (cT && !cT(lT, MT, KT, OT)) return !1;
          let yT = lT >= OT && MT <= OT + KT.length ? KT.slice(lT - OT, MT - OT) : kT.doc.sliceString(lT, MT);
          return TT(yT, kT, lT, MT)
        }
      }(TT.test, kT, KT)), new yT(kT.doc, TT.unquoted, cT, lT, TT.caseSensitive ? void 0 : TT => TT.toLowerCase(), KT)
    }
    class bT extends wT {
      constructor(TT) {
        super(TT)
      }
      nextMatch(TT, kT, cT) {
        let lT = mT(this.spec, TT, cT, TT.doc.length).nextOverlapping();
        if (lT.done) {
          let cT = Math.min(TT.doc.length, kT + this.spec.unquoted.length);
          lT = mT(this.spec, TT, 0, cT).nextOverlapping()
        }
        return lT.done || lT.value.from == kT && lT.value.to == cT ? null : lT.value
      }
      prevMatchInRange(TT, kT, cT) {
        for (let lT = cT;;) {
          let cT = Math.max(kT, lT - 1e4 - this.spec.unquoted.length),
            MT = mT(this.spec, TT, cT, lT),
            KT = null;
          for (; !MT.nextOverlapping().done;) KT = MT.value;
          if (KT) return KT;
          if (cT == kT) return null;
          lT -= 1e4
        }
      }
      prevMatch(TT, kT, cT) {
        let lT = this.prevMatchInRange(TT, 0, kT);
        return lT || (lT = this.prevMatchInRange(TT, Math.max(0, cT - this.spec.unquoted.length), TT.doc.length)), !lT || lT.from == kT && lT.to == cT ? null : lT
      }
      getReplacement(TT) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(TT, kT) {
        let cT = mT(this.spec, TT, 0, TT.doc.length),
          lT = [];
        for (; !cT.next().done;) {
          if (lT.length >= kT) return null;
          lT.push(cT.value)
        }
        return lT
      }
      highlight(TT, kT, cT, lT) {
        let MT = mT(this.spec, TT, Math.max(0, kT - this.spec.unquoted.length), Math.min(cT + this.spec.unquoted.length, TT.doc.length));
        for (; !MT.next().done;) lT(MT.value.from, MT.value.to)
      }
    }

    function zT(TT, kT, cT, lT) {
      let KT;
      var OT;
      return TT.wholeWord && (OT = kT.charCategorizer(kT.selection.main.head), KT = (TT, kT, cT) => !cT[0].length || (OT(JT(cT.input, cT.index)) != MT.i.Word || OT(oT(cT.input, cT.index)) != MT.i.Word) && (OT(oT(cT.input, cT.index + cT[0].length)) != MT.i.Word || OT(JT(cT.input, cT.index + cT[0].length)) != MT.i.Word)), TT.test && (KT = function(TT, kT, cT) {
        return (lT, MT, KT) => (!cT || cT(lT, MT, KT)) && TT(KT[0], kT, lT, MT)
      }(TT.test, kT, KT)), new IT(kT.doc, TT.search, {
        ignoreCase: !TT.caseSensitive,
        test: KT
      }, cT, lT)
    }

    function JT(TT, kT) {
      return TT.slice((0, MT.W)(TT, kT, !1), kT)
    }

    function oT(TT, kT) {
      return TT.slice(kT, (0, MT.W)(TT, kT))
    }
    class HT extends wT {
      nextMatch(TT, kT, cT) {
        let lT = zT(this.spec, TT, cT, TT.doc.length).next();
        return lT.done && (lT = zT(this.spec, TT, 0, kT).next()), lT.done ? null : lT.value
      }
      prevMatchInRange(TT, kT, cT) {
        for (let lT = 1;; lT++) {
          let MT = Math.max(kT, cT - 1e4 * lT),
            KT = zT(this.spec, TT, MT, cT),
            OT = null;
          for (; !KT.next().done;) OT = KT.value;
          if (OT && (MT == kT || OT.from > MT + 10)) return OT;
          if (MT == kT) return null
        }
      }
      prevMatch(TT, kT, cT) {
        return this.prevMatchInRange(TT, 0, kT) || this.prevMatchInRange(TT, cT, TT.doc.length)
      }
      getReplacement(TT) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((kT, cT) => {
          if ("&" == cT) return TT.match[0];
          if ("$" == cT) return "$";
          for (let lT = cT.length; lT > 0; lT--) {
            let kT = +cT.slice(0, lT);
            if (kT > 0 && kT < TT.match.length) return TT.match[kT] + cT.slice(lT)
          }
          return kT
        }))
      }
      matchAll(TT, kT) {
        let cT = zT(this.spec, TT, 0, TT.doc.length),
          lT = [];
        for (; !cT.next().done;) {
          if (lT.length >= kT) return null;
          lT.push(cT.value)
        }
        return lT
      }
      highlight(TT, kT, cT, lT) {
        let MT = zT(this.spec, TT, Math.max(0, kT - 250), Math.min(cT + 250, TT.doc.length));
        for (; !MT.next().done;) lT(MT.value.from, MT.value.to)
      }
    }
    const eT = MT.F.define(),
      GT = MT.F.define(),
      VT = MT.H.define({
        create: TT => new ET(WT(TT).create(), null),
        update(TT, kT) {
          for (let cT of kT.effects) cT.is(eT) ? TT = new ET(cT.value.create(), TT.panel) : cT.is(GT) && (TT = new ET(TT.query, cT.value ? BT : null));
          return TT
        },
        provide: TT => lT.cb.from(TT, (TT => TT.panel))
      });
    class ET {
      constructor(TT, kT) {
        this.query = TT, this.panel = kT
      }
    }
    const ZT = lT.e.mark({
        class: "cm-searchMatch"
      }),
      uT = lT.e.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      XT = lT.k.fromClass(class {
        constructor(TT) {
          this.view = TT, this.cK = this.highlight(TT.state.field(VT))
        }
        update(TT) {
          let kT = TT.state.field(VT);
          (kT != TT.startState.field(VT) || TT.docChanged || TT.selectionSet || TT.viewportChanged) && (this.cK = this.highlight(kT))
        }
        highlight(TT) {
          let {
            query: kT,
            panel: cT
          } = TT;
          if (!cT || !kT.spec.valid) return lT.e.none;
          let {
            view: KT
          } = this, OT = new MT.v;
          for (let lT = 0, MT = KT.R7, yT = MT.length; lT < yT; lT++) {
            let {
              from: TT,
              to: cT
            } = MT[lT];
            for (; lT < yT - 1 && cT > MT[lT + 1].from - 500;) cT = MT[++lT].to;
            kT.highlight(KT.state, TT, cT, ((TT, kT) => {
              let cT = KT.state.selection.qt.some((cT => cT.from == TT && cT.to == kT));
              OT.add(TT, kT, cT ? uT : ZT)
            }))
          }
          return OT.finish()
        }
      }, {
        cK: TT => TT.cK
      });

    function dT(TT) {
      return kT => {
        let cT = kT.state.field(VT, !1);
        return cT && cT.query.spec.valid ? TT(kT, cT) : iT(kT)
      }
    }
    const LT = dT(((TT, kT) => {
        let {
          query: cT
        } = kT, {
          to: lT
        } = TT.state.selection.main, KT = cT.nextMatch(TT.state, lT, lT);
        if (!KT) return !1;
        let OT = MT.j.single(KT.from, KT.to),
          yT = TT.state.facet(rT);
        return TT.dispatch({
          selection: OT,
          effects: [Mk(TT, KT), yT.scrollToMatch(OT.main, TT)],
          userEvent: "select.search"
        }), pT(TT), !0
      })),
      RT = dT(((TT, kT) => {
        let {
          query: cT
        } = kT, {
          state: lT
        } = TT, {
          from: KT
        } = lT.selection.main, OT = cT.prevMatch(lT, KT, KT);
        if (!OT) return !1;
        let yT = MT.j.single(OT.from, OT.to),
          fT = TT.state.facet(rT);
        return TT.dispatch({
          selection: yT,
          effects: [Mk(TT, OT), fT.scrollToMatch(yT.main, TT)],
          userEvent: "select.search"
        }), pT(TT), !0
      })),
      gT = dT(((TT, kT) => {
        let {
          query: cT
        } = kT, lT = cT.matchAll(TT.state, 1e3);
        return !(!lT || !lT.length) && (TT.dispatch({
          selection: MT.j.create(lT.map((TT => MT.j.range(TT.from, TT.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      UT = dT(((TT, kT) => {
        let {
          query: cT
        } = kT, {
          state: KT
        } = TT, {
          from: OT,
          to: yT
        } = KT.selection.main;
        if (KT.readOnly) return !1;
        let fT = cT.nextMatch(KT, OT, OT);
        if (!fT) return !1;
        let xT, IT, AT = fT,
          CT = [],
          jT = [];
        AT.from == OT && AT.to == yT && (IT = KT.toText(cT.getReplacement(AT)), CT.push({
          from: AT.from,
          to: AT.to,
          insert: IT
        }), AT = cT.nextMatch(KT, AT.from, AT.to), jT.push(lT.h.announce.of(KT.phrase("replaced match on line $", KT.doc.lineAt(OT).number) + ".")));
        let vT = TT.state.changes(CT);
        return AT && (xT = MT.j.single(AT.from, AT.to).map(vT), jT.push(Mk(TT, AT)), jT.push(KT.facet(rT).scrollToMatch(xT.main, TT))), TT.dispatch({
          changes: vT,
          selection: xT,
          effects: jT,
          userEvent: "input.replace"
        }), !0
      })),
      YT = dT(((TT, kT) => {
        let {
          query: cT
        } = kT;
        if (TT.state.readOnly) return !1;
        let MT = cT.matchAll(TT.state, 1e9).map((TT => {
          let {
            from: kT,
            to: lT
          } = TT;
          return {
            from: kT,
            to: lT,
            insert: cT.getReplacement(TT)
          }
        }));
        if (!MT.length) return !1;
        let KT = TT.state.phrase("replaced $ matches", MT.length) + ".";
        return TT.dispatch({
          changes: MT,
          effects: lT.h.announce.of(KT),
          userEvent: "input.replace.all"
        }), !0
      }));

    function BT(TT) {
      return TT.state.facet(rT).createPanel(TT)
    }

    function WT(TT, kT) {
      var cT, lT, MT, KT, OT;
      let yT = TT.selection.main,
        fT = yT.empty || yT.to > yT.from + 100 ? "" : TT.sliceDoc(yT.from, yT.to);
      if (kT && !fT) return kT;
      let xT = TT.facet(rT);
      return new PT({
        search: (null !== (cT = null === kT || void 0 === kT ? void 0 : kT.literal) && void 0 !== cT ? cT : xT.literal) ? fT : fT.replace(/\n/g, "\\n"),
        caseSensitive: null !== (lT = null === kT || void 0 === kT ? void 0 : kT.caseSensitive) && void 0 !== lT ? lT : xT.caseSensitive,
        literal: null !== (MT = null === kT || void 0 === kT ? void 0 : kT.literal) && void 0 !== MT ? MT : xT.literal,
        regexp: null !== (KT = null === kT || void 0 === kT ? void 0 : kT.regexp) && void 0 !== KT ? KT : xT.regexp,
        wholeWord: null !== (OT = null === kT || void 0 === kT ? void 0 : kT.wholeWord) && void 0 !== OT ? OT : xT.wholeWord
      })
    }

    function nT(TT) {
      let kT = (0, lT.w)(TT, BT);
      return kT && kT.dom.querySelector("[main-field]")
    }

    function pT(TT) {
      let kT = nT(TT);
      kT && kT == TT.root.activeElement && kT.select()
    }
    const iT = TT => {
        let kT = TT.state.field(VT, !1);
        if (kT && kT.panel) {
          let cT = nT(TT);
          if (cT && cT != TT.root.activeElement) {
            let lT = WT(TT.state, kT.query.spec);
            lT.valid && TT.dispatch({
              effects: eT.of(lT)
            }), cT.focus(), cT.select()
          }
        } else TT.dispatch({
          effects: [GT.of(!0), kT ? eT.of(WT(TT.state, kT.query.spec)) : MT.F.appendConfig.of(Ok)]
        });
        return !0
      },
      qT = TT => {
        let kT = TT.state.field(VT, !1);
        if (!kT || !kT.panel) return !1;
        let cT = (0, lT.w)(TT, BT);
        return cT && cT.dom.contains(TT.root.activeElement) && TT.focus(), TT.dispatch({
          effects: GT.of(!1)
        }), !0
      },
      sT = [{
        key: "Mod-f",
        run: iT,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: LT,
        shift: RT,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: LT,
        shift: RT,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: qT,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: TT => {
          let {
            state: kT,
            dispatch: cT
          } = TT, lT = kT.selection;
          if (lT.qt.length > 1 || lT.main.empty) return !1;
          let {
            from: KT,
            to: OT
          } = lT.main, fT = [], xT = 0;
          for (let IT = new yT(kT.doc, kT.sliceDoc(KT, OT)); !IT.next().done;) {
            if (fT.length > 1e3) return !1;
            IT.value.from == KT && (xT = fT.length), fT.push(MT.j.range(IT.value.from, IT.value.to))
          }
          return cT(kT.update({
            selection: MT.j.create(fT, xT),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: TT => {
          let {
            state: kT
          } = TT, cT = String(kT.doc.lineAt(TT.state.selection.main.head).number), {
            close: KT,
            result: OT
          } = (0, lT.ab)(TT, {
            label: kT.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: cT
            },
            focus: !0,
            submitLabel: kT.phrase("go")
          });
          return OT.then((cT => {
            let OT = cT && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(cT.elements.line.value);
            if (!OT) return void TT.dispatch({
              effects: KT
            });
            let yT = kT.doc.lineAt(kT.selection.main.head),
              [, fT, xT, IT, AT] = OT,
              CT = IT ? +IT.slice(1) : 0,
              jT = xT ? +xT : yT.number;
            if (xT && AT) {
              let TT = jT / 100;
              fT && (TT = TT * ("-" == fT ? -1 : 1) + yT.number / kT.doc.lines), jT = Math.round(kT.doc.lines * TT)
            } else xT && fT && (jT = jT * ("-" == fT ? -1 : 1) + yT.number);
            let vT = kT.doc.line(Math.max(1, Math.min(kT.doc.lines, jT))),
              tT = MT.j.cursor(vT.from + Math.max(0, Math.min(CT, vT.length)));
            TT.dispatch({
              effects: [KT, lT.h.scrollIntoView(tT.from, {
                y: "center"
              })],
              selection: tT
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: TT => {
          let {
            state: kT,
            dispatch: cT
          } = TT, {
            qt: KT
          } = kT.selection;
          if (KT.some((TT => TT.from === TT.to))) return (TT => {
            let {
              state: kT,
              dispatch: cT
            } = TT, {
              selection: lT
            } = kT, KT = MT.j.create(lT.qt.map((TT => kT.wordAt(TT.head) || MT.j.cursor(TT.head))), lT.mainIndex);
            return !KT.eq(lT) && (cT(kT.update({
              selection: KT
            })), !0)
          })({
            state: kT,
            dispatch: cT
          });
          let OT = kT.sliceDoc(KT[0].from, KT[0].to);
          if (kT.selection.qt.some((TT => kT.sliceDoc(TT.from, TT.to) != OT))) return !1;
          let fT = function(TT, kT) {
            let {
              main: cT,
              qt: lT
            } = TT.selection, MT = TT.wordAt(cT.head), KT = MT && MT.from == cT.from && MT.to == cT.to;
            for (let OT = !1, fT = new yT(TT.doc, kT, lT[lT.length - 1].to);;) {
              if (fT.next(), !fT.done) {
                if (OT && lT.some((TT => TT.from == fT.value.from))) continue;
                if (KT) {
                  let kT = TT.wordAt(fT.value.from);
                  if (!kT || kT.from != fT.value.from || kT.to != fT.value.to) continue
                }
                return fT.value
              }
              if (OT) return null;
              fT = new yT(TT.doc, kT, 0, Math.max(0, lT[lT.length - 1].from - 1)), OT = !0
            }
          }(kT, OT);
          return !!fT && (cT(kT.update({
            selection: kT.selection.addRange(MT.j.range(fT.from, fT.to), !1),
            effects: lT.h.scrollIntoView(fT.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class Tk {
      constructor(TT) {
        this.view = TT;
        let kT = this.query = TT.state.field(VT).query.spec;

        function cT(TT, kT, cT) {
          return (0, KT.d)("button", {
            class: "cm-button",
            name: TT,
            onclick: kT,
            type: "button"
          }, cT)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, KT.d)("input", {
          value: kT.search,
          placeholder: kk(TT, "Find"),
          "aria-label": kk(TT, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, KT.d)("input", {
          value: kT.replace,
          placeholder: kk(TT, "Replace"),
          "aria-label": kk(TT, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, KT.d)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: kT.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, KT.d)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: kT.regexp,
          onchange: this.commit
        }), this.wordField = (0, KT.d)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: kT.wholeWord,
          onchange: this.commit
        }), this.dom = (0, KT.d)("div", {
          onkeydown: TT => this.keydown(TT),
          class: "cm-search"
        }, [this.searchField, cT("next", (() => LT(TT)), [kk(TT, "next")]), cT("prev", (() => RT(TT)), [kk(TT, "previous")]), cT("select", (() => gT(TT)), [kk(TT, "all")]), (0, KT.d)("label", null, [this.caseField, kk(TT, "match case")]), (0, KT.d)("label", null, [this.reField, kk(TT, "regexp")]), (0, KT.d)("label", null, [this.wordField, kk(TT, "by word")]), ...TT.state.readOnly ? [] : [(0, KT.d)("br"), this.replaceField, cT("replace", (() => UT(TT)), [kk(TT, "replace")]), cT("replaceAll", (() => YT(TT)), [kk(TT, "replace all")])], (0, KT.d)("button", {
          name: "close",
          onclick: () => qT(TT),
          "aria-label": kk(TT, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let TT = new PT({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        TT.eq(this.query) || (this.query = TT, this.view.dispatch({
          effects: eT.of(TT)
        }))
      }
      keydown(TT) {
        (0, lT.Y)(this.view, TT, "search-panel") ? TT.preventDefault(): 13 == TT.keyCode && TT.target == this.searchField ? (TT.preventDefault(), (TT.shiftKey ? RT : LT)(this.view)) : 13 == TT.keyCode && TT.target == this.replaceField && (TT.preventDefault(), UT(this.view))
      }
      update(TT) {
        for (let kT of TT.transactions)
          for (let TT of kT.effects) TT.is(eT) && !TT.value.eq(this.query) && this.setQuery(TT.value)
      }
      setQuery(TT) {
        this.query = TT, this.searchField.value = TT.search, this.replaceField.value = TT.replace, this.caseField.checked = TT.caseSensitive, this.reField.checked = TT.regexp, this.wordField.checked = TT.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(rT).top
      }
    }

    function kk(TT, kT) {
      return TT.state.phrase(kT)
    }
    const ck = 30,
      lk = /[\s\.,:;?!]/;

    function Mk(TT, kT) {
      let {
        from: cT,
        to: MT
      } = kT, KT = TT.state.doc.lineAt(cT), OT = TT.state.doc.lineAt(MT).to, yT = Math.max(KT.from, cT - ck), fT = Math.min(OT, MT + ck), xT = TT.state.sliceDoc(yT, fT);
      if (yT != KT.from)
        for (let lT = 0; lT < ck; lT++)
          if (!lk.test(xT[lT + 1]) && lk.test(xT[lT])) {
            xT = xT.slice(lT);
            break
          } if (fT != OT)
        for (let lT = xT.length - 1; lT > xT.length - ck; lT--)
          if (!lk.test(xT[lT - 1]) && lk.test(xT[lT])) {
            xT = xT.slice(0, lT);
            break
          } return lT.h.announce.of(`${TT.state.phrase("current match")}. ${xT} ${TT.state.phrase("on line")} ${KT.number}.`)
    }
    const Kk = lT.h.baseTheme({
        ".cm-panel.cm-search": {
          padding: "2px 6px 4px",
          position: "relative",
          "& [name=close]": {
            position: "absolute",
            top: "0",
            right: "4px",
            backgroundColor: "inherit",
            border: "none",
            font: "inherit",
            padding: 0,
            margin: 0
          },
          "& input, & button, & label": {
            margin: ".2em .6em .2em 0"
          },
          "& input[type=checkbox]": {
            marginRight: ".2em"
          },
          "& label": {
            fontSize: "80%",
            whiteSpace: "pre"
          }
        },
        "&light .cm-searchMatch": {
          backgroundColor: "#ffff0054"
        },
        "&dark .cm-searchMatch": {
          backgroundColor: "#00ffff8a"
        },
        "&light .cm-searchMatch-selected": {
          backgroundColor: "#ff6a0054"
        },
        "&dark .cm-searchMatch-selected": {
          backgroundColor: "#ff00ff8a"
        }
      }),
      Ok = [VT, MT.t.low(XT), Kk]
  },
  40944: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => HT,
      f: () => xk,
      h: () => mM,
      j: () => OO,
      k: () => ik,
      m: () => JT,
      p: () => JK,
      r: () => iM,
      t: () => OK,
      w: () => iK,
      x: () => WK,
      z: () => AO,
      E: () => QK,
      B: () => oO,
      H: () => vK,
      J: () => BK,
      L: () => VM,
      P: () => mO,
      S: () => Bk,
      U: () => FK,
      X: () => mK,
      Y: () => uM,
      ab: () => cO,
      cb: () => kO,
      gb: () => dK
    });
    for (var lT = cT(40941), MT = cT(40946), KT = {
        8: "Backspace",
        9: "Tab",
        10: "Enter",
        12: "NumLock",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        44: "PrintScreen",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Meta",
        92: "Meta",
        106: "*",
        107: "+",
        108: ",",
        109: "-",
        110: ".",
        111: "/",
        144: "NumLock",
        145: "ScrollLock",
        160: "Shift",
        161: "Shift",
        162: "Control",
        163: "Control",
        164: "Alt",
        165: "Alt",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
      }, OT = {
        48: ")",
        49: "!",
        50: "@",
        51: "#",
        52: "$",
        53: "%",
        54: "^",
        55: "&",
        56: "*",
        57: "(",
        59: ":",
        61: "+",
        173: "_",
        186: ":",
        187: "+",
        188: "<",
        189: "_",
        190: ">",
        191: "?",
        192: "~",
        219: "{",
        220: "|",
        221: "}",
        222: '"'
      }, yT = "undefined" != typeof navigator && /Mac/.test(navigator.platform), fT = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), xT = 0; xT < 10; xT++) KT[48 + xT] = KT[96 + xT] = String(xT);
    for (xT = 1; xT <= 24; xT++) KT[xT + 111] = "F" + xT;
    for (xT = 65; xT <= 90; xT++) KT[xT] = String.fromCharCode(xT + 32), OT[xT] = String.fromCharCode(xT);
    for (var IT in KT) OT.hasOwnProperty(IT) || (OT[IT] = KT[IT]);
    var AT = cT(40950);
    let CT = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      jT = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const vT = /Edge\/(\d+)/.exec(CT.userAgent),
      tT = /MSIE \d/.test(CT.userAgent),
      hT = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(CT.userAgent),
      NT = !!(tT || hT || vT),
      QT = !NT && /gecko\/(\d+)/i.test(CT.userAgent),
      ST = !NT && /Chrome\/(\d+)/.exec(CT.userAgent),
      DT = "webkitFontSmoothing" in jT.documentElement.style,
      aT = !NT && /Apple Computer/.test(CT.vendor),
      FT = aT && (/Mobile\/\w+/.test(CT.userAgent) || CT.maxTouchPoints > 2);
    var rT = {
      mac: FT || /Mac/.test(CT.platform),
      windows: /Win/.test(CT.platform),
      linux: /Linux|X11/.test(CT.platform),
      ie: NT,
      ie_version: tT ? jT.documentMode || 6 : hT ? +hT[1] : vT ? +vT[1] : 0,
      gecko: QT,
      gecko_version: QT ? +(/Firefox\/(\d+)/.exec(CT.userAgent) || [0, 0])[1] : 0,
      chrome: !!ST,
      chrome_version: ST ? +ST[1] : 0,
      ios: FT,
      android: /Android\b/.test(CT.userAgent),
      webkit: DT,
      webkit_version: DT ? +(/\bAppleWebKit\/(\d+)/.exec(CT.userAgent) || [0, 0])[1] : 0,
      safari: aT,
      safari_version: aT ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(CT.userAgent) || [0, 0])[1] : 0,
      tabSize: null != jT.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function PT(TT, kT) {
      for (let cT in TT) "class" == cT && kT.class ? kT.class += " " + TT.class : "style" == cT && kT.style ? kT.style += ";" + TT.style : kT[cT] = TT[cT];
      return kT
    }
    const wT = Object.create(null);

    function mT(TT, kT, cT) {
      if (TT == kT) return !0;
      TT || (TT = wT), kT || (kT = wT);
      let lT = Object.keys(TT),
        MT = Object.keys(kT);
      if (lT.length - (cT && lT.indexOf(cT) > -1 ? 1 : 0) != MT.length - (cT && MT.indexOf(cT) > -1 ? 1 : 0)) return !1;
      for (let KT of lT)
        if (KT != cT && (-1 == MT.indexOf(KT) || TT[KT] !== kT[KT])) return !1;
      return !0
    }

    function bT(TT, kT, cT) {
      let lT = !1;
      if (kT)
        for (let MT in kT) cT && MT in cT || (lT = !0, "style" == MT ? TT.style.cssText = "" : TT.removeAttribute(MT));
      if (cT)
        for (let MT in cT) kT && kT[MT] == cT[MT] || (lT = !0, "style" == MT ? TT.style.cssText = cT[MT] : TT.setAttribute(MT, cT[MT]));
      return lT
    }

    function zT(TT) {
      let kT = Object.create(null);
      for (let cT = 0; cT < TT.attributes.length; cT++) {
        let lT = TT.attributes[cT];
        kT[lT.name] = lT.value
      }
      return kT
    }
    class JT {
      eq(TT) {
        return !1
      }
      updateDOM(TT, kT, cT) {
        return !1
      }
      compare(TT) {
        return this == TT || this.constructor == TT.constructor && this.eq(TT)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(TT) {
        return !0
      }
      coordsAt(TT, kT, cT) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(TT) {}
    }
    var oT = function(TT) {
      return TT[TT.Text = 0] = "Text", TT[TT.WidgetBefore = 1] = "WidgetBefore", TT[TT.WidgetAfter = 2] = "WidgetAfter", TT[TT.WidgetRange = 3] = "WidgetRange", TT
    }(oT || (oT = {}));
    class HT extends lT.C {
      constructor(TT, kT, cT, lT) {
        super(), this.startSide = TT, this.endSide = kT, this.widget = cT, this.spec = lT
      }
      get heightRelevant() {
        return !1
      }
      static mark(TT) {
        return new eT(TT)
      }
      static widget(TT) {
        let kT = Math.max(-1e4, Math.min(1e4, TT.side || 0)),
          cT = !!TT.block;
        return kT += cT && !TT.inlineOrder ? kT > 0 ? 3e8 : -4e8 : kT > 0 ? 1e8 : -1e8, new VT(TT, kT, kT, cT, TT.widget || null, !1)
      }
      static replace(TT) {
        let kT, cT, lT = !!TT.block;
        if (TT.isBlockGap) kT = -5e8, cT = 4e8;
        else {
          let {
            start: MT,
            end: KT
          } = ET(TT, lT);
          kT = (MT ? lT ? -3e8 : -1 : 5e8) - 1, cT = 1 + (KT ? lT ? 2e8 : 1 : -6e8)
        }
        return new VT(TT, kT, cT, lT, TT.widget || null, !0)
      }
      static line(TT) {
        return new GT(TT)
      }
      static set(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return lT.y.of(TT, kT)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    HT.none = lT.y.empty;
    class eT extends HT {
      constructor(TT) {
        let {
          start: kT,
          end: cT
        } = ET(TT);
        super(kT ? -1 : 5e8, cT ? 1 : -6e8, null, TT), this.tagName = TT.tagName || "span", this.attrs = TT.class && TT.attributes ? PT(TT.attributes, {
          class: TT.class
        }) : TT.class ? {
          class: TT.class
        } : TT.attributes || wT
      }
      eq(TT) {
        return this == TT || TT instanceof eT && this.tagName == TT.tagName && mT(this.attrs, TT.attrs)
      }
      range(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        if (TT >= kT) throw new RangeError("Mark decorations may not be empty");
        return super.range(TT, kT)
      }
    }
    eT.prototype.point = !1;
    class GT extends HT {
      constructor(TT) {
        super(-2e8, -2e8, null, TT)
      }
      eq(TT) {
        return TT instanceof GT && this.spec.class == TT.spec.class && mT(this.spec.attributes, TT.spec.attributes)
      }
      range(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        if (kT != TT) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(TT, kT)
      }
    }
    GT.prototype.mapMode = lT.r.TrackBefore, GT.prototype.point = !0;
    class VT extends HT {
      constructor(TT, kT, cT, MT, KT, OT) {
        super(kT, cT, KT, TT), this.block = MT, this.isReplace = OT, this.mapMode = MT ? kT <= 0 ? lT.r.TrackBefore : lT.r.TrackAfter : lT.r.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? oT.WidgetRange : this.startSide <= 0 ? oT.WidgetBefore : oT.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(TT) {
        return TT instanceof VT && (kT = this.widget, cT = TT.widget, kT == cT || !!(kT && cT && kT.compare(cT))) && this.block == TT.block && this.startSide == TT.startSide && this.endSide == TT.endSide;
        var kT, cT
      }
      range(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        if (this.isReplace && (TT > kT || TT == kT && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && kT != TT) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(TT, kT)
      }
    }

    function ET(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: cT,
          inclusiveEnd: lT
        } = TT;
      return null == cT && (cT = TT.inclusive), null == lT && (lT = TT.inclusive), {
        start: null !== cT && void 0 !== cT ? cT : kT,
        end: null !== lT && void 0 !== lT ? lT : kT
      }
    }

    function ZT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        MT = cT.length - 1;
      MT >= 0 && cT[MT] + lT >= TT ? cT[MT] = Math.max(cT[MT], kT) : cT.push(TT, kT)
    }
    VT.prototype.point = !0;
    class uT extends lT.C {
      constructor(TT, kT) {
        super(), this.tagName = TT, this.attributes = kT
      }
      eq(TT) {
        return TT == this || TT instanceof uT && this.tagName == TT.tagName && mT(this.attributes, TT.attributes)
      }
      static create(TT) {
        return new uT(TT.tagName, TT.attributes || wT)
      }
      static set(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return lT.y.of(TT, kT)
      }
    }

    function XT(TT) {
      let kT;
      return kT = 11 == TT.nodeType ? TT.getSelection ? TT : TT.ownerDocument : TT, kT.getSelection()
    }

    function dT(TT, kT) {
      return !!kT && (TT == kT || TT.contains(1 != kT.nodeType ? kT.parentNode : kT))
    }

    function LT(TT, kT) {
      if (!kT.anchorNode) return !1;
      try {
        return dT(TT, kT.anchorNode)
      } catch (cT) {
        return !1
      }
    }

    function RT(TT) {
      return 3 == TT.nodeType ? lk(TT, 0, TT.nodeValue.length).getClientRects() : 1 == TT.nodeType ? TT.getClientRects() : []
    }

    function gT(TT, kT, cT, lT) {
      return !!cT && (BT(TT, kT, cT, lT, -1) || BT(TT, kT, cT, lT, 1))
    }

    function UT(TT) {
      for (var kT = 0;; kT++)
        if (!(TT = TT.previousSibling)) return kT
    }

    function YT(TT) {
      return 1 == TT.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(TT.nodeName)
    }

    function BT(TT, kT, cT, lT, MT) {
      for (;;) {
        if (TT == cT && kT == lT) return !0;
        if (kT == (MT < 0 ? 0 : WT(TT))) {
          if ("DIV" == TT.nodeName) return !1;
          let cT = TT.parentNode;
          if (!cT || 1 != cT.nodeType) return !1;
          kT = UT(TT) + (MT < 0 ? 0 : 1), TT = cT
        } else {
          if (1 != TT.nodeType) return !1;
          if (1 == (TT = TT.childNodes[kT + (MT < 0 ? -1 : 0)]).nodeType && "false" == TT.contentEditable) return !1;
          kT = MT < 0 ? WT(TT) : 0
        }
      }
    }

    function WT(TT) {
      return 3 == TT.nodeType ? TT.nodeValue.length : TT.childNodes.length
    }

    function nT(TT, kT) {
      let cT = kT ? TT.left : TT.right;
      return {
        left: cT,
        right: cT,
        top: TT.top,
        bottom: TT.bottom
      }
    }

    function pT(TT) {
      let kT = TT.visualViewport;
      return kT ? {
        left: 0,
        right: kT.width,
        top: 0,
        bottom: kT.height
      } : {
        left: 0,
        right: TT.innerWidth,
        top: 0,
        bottom: TT.innerHeight
      }
    }

    function iT(TT, kT) {
      let cT = kT.width / TT.offsetWidth,
        lT = kT.height / TT.offsetHeight;
      return (cT > .995 && cT < 1.005 || !isFinite(cT) || Math.abs(kT.width - TT.offsetWidth) < 1) && (cT = 1), (lT > .995 && lT < 1.005 || !isFinite(lT) || Math.abs(kT.height - TT.offsetHeight) < 1) && (lT = 1), {
        scaleX: cT,
        scaleY: lT
      }
    }

    function qT(TT) {
      let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        cT = TT.ownerDocument,
        lT = null,
        MT = null;
      for (let KT = TT.parentNode; KT && (KT != cT.body && (kT && !lT || !MT));)
        if (1 == KT.nodeType) !MT && KT.scrollHeight > KT.clientHeight && (MT = KT), kT && !lT && KT.scrollWidth > KT.clientWidth && (lT = KT), KT = KT.assignedSlot || KT.parentNode;
        else {
          if (11 != KT.nodeType) break;
          KT = KT.host
        } return {
        x: lT,
        y: MT
      }
    }
    uT.prototype.startSide = uT.prototype.endSide = -1;
    class sT {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(TT) {
        return this.anchorNode == TT.anchorNode && this.anchorOffset == TT.anchorOffset && this.focusNode == TT.focusNode && this.focusOffset == TT.focusOffset
      }
      setRange(TT) {
        let {
          anchorNode: kT,
          focusNode: cT
        } = TT;
        this.set(kT, Math.min(TT.anchorOffset, kT ? WT(kT) : 0), cT, Math.min(TT.focusOffset, cT ? WT(cT) : 0))
      }
      set(TT, kT, cT, lT) {
        this.anchorNode = TT, this.anchorOffset = kT, this.focusNode = cT, this.focusOffset = lT
      }
    }
    let Tk, kk = null;

    function ck(TT) {
      if (TT.setActive) return TT.setActive();
      if (kk) return TT.focus(kk);
      let kT = [];
      for (let cT = TT; cT && (kT.push(cT, cT.scrollTop, cT.scrollLeft), cT != cT.ownerDocument); cT = cT.parentNode);
      if (TT.focus(null == kk ? {
          get preventScroll() {
            return kk = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !kk) {
        kk = !1;
        for (let TT = 0; TT < kT.length;) {
          let cT = kT[TT++],
            lT = kT[TT++],
            MT = kT[TT++];
          cT.scrollTop != lT && (cT.scrollTop = lT), cT.scrollLeft != MT && (cT.scrollLeft = MT)
        }
      }
    }

    function lk(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kT,
        lT = Tk || (Tk = document.createRange());
      return lT.setEnd(TT, cT), lT.setStart(TT, kT), lT
    }

    function Mk(TT, kT, cT, lT) {
      let MT = {
        key: kT,
        code: kT,
        keyCode: cT,
        which: cT,
        cancelable: !0
      };
      lT && ({
        altKey: MT.altKey,
        ctrlKey: MT.ctrlKey,
        shiftKey: MT.shiftKey,
        metaKey: MT.metaKey
      } = lT);
      let KT = new KeyboardEvent("keydown", MT);
      KT.synthetic = !0, TT.dispatchEvent(KT);
      let OT = new KeyboardEvent("keyup", MT);
      return OT.synthetic = !0, TT.dispatchEvent(OT), KT.defaultPrevented || OT.defaultPrevented
    }

    function Kk(TT) {
      return TT instanceof Window ? TT.pageYOffset > Math.max(0, TT.document.documentElement.scrollHeight - TT.innerHeight - 4) : TT.scrollTop > Math.max(1, TT.scrollHeight - TT.clientHeight - 4)
    }

    function Ok(TT, kT) {
      for (let cT = TT, lT = kT;;) {
        if (3 == cT.nodeType && lT > 0) return {
          node: cT,
          offset: lT
        };
        if (1 == cT.nodeType && lT > 0) {
          if ("false" == cT.contentEditable) return null;
          cT = cT.childNodes[lT - 1], lT = WT(cT)
        } else {
          if (!cT.parentNode || YT(cT)) return null;
          lT = UT(cT), cT = cT.parentNode
        }
      }
    }

    function yk(TT, kT) {
      for (let cT = TT, lT = kT;;) {
        if (3 == cT.nodeType && lT < cT.nodeValue.length) return {
          node: cT,
          offset: lT
        };
        if (1 == cT.nodeType && lT < cT.childNodes.length) {
          if ("false" == cT.contentEditable) return null;
          cT = cT.childNodes[lT], lT = 0
        } else {
          if (!cT.parentNode || YT(cT)) return null;
          lT = UT(cT) + 1, cT = cT.parentNode
        }
      }
    }
    rT.safari && rT.safari_version >= 26 && (kk = !1);
    class fk {
      constructor(TT, kT) {
        let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = TT, this.offset = kT, this.precise = cT
      }
      static before(TT, kT) {
        return new fk(TT.parentNode, UT(TT), kT)
      }
      static after(TT, kT) {
        return new fk(TT.parentNode, UT(TT) + 1, kT)
      }
    }
    var xk = function(TT) {
      return TT[TT.LTR = 0] = "LTR", TT[TT.RTL = 1] = "RTL", TT
    }(xk || (xk = {}));
    const Ik = xk.LTR,
      Ak = xk.RTL;

    function Ck(TT) {
      let kT = [];
      for (let cT = 0; cT < TT.length; cT++) kT.push(1 << +TT[cT]);
      return kT
    }
    const jk = Ck("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      vk = Ck("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      tk = Object.create(null),
      hk = [];
    for (let HO of ["()", "[]", "{}"]) {
      let TT = HO.charCodeAt(0),
        kT = HO.charCodeAt(1);
      tk[TT] = kT, tk[kT] = -TT
    }

    function Nk(TT) {
      return TT <= 247 ? jk[TT] : 1424 <= TT && TT <= 1524 ? 2 : 1536 <= TT && TT <= 1785 ? vk[TT - 1536] : 1774 <= TT && TT <= 2220 ? 4 : 8192 <= TT && TT <= 8204 ? 256 : 64336 <= TT && TT <= 65023 ? 4 : 1
    }
    const Qk = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class Sk {
      get dir() {
        return this.level % 2 ? Ak : Ik
      }
      constructor(TT, kT, cT) {
        this.from = TT, this.to = kT, this.level = cT
      }
      side(TT, kT) {
        return this.dir == kT == TT ? this.to : this.from
      }
      forward(TT, kT) {
        return TT == (this.dir == kT)
      }
      static find(TT, kT, cT, lT) {
        let MT = -1;
        for (let KT = 0; KT < TT.length; KT++) {
          let OT = TT[KT];
          if (OT.from <= kT && OT.to >= kT) {
            if (OT.level == cT) return KT;
            (MT < 0 || (0 != lT ? lT < 0 ? OT.from < kT : OT.to > kT : TT[MT].level > OT.level)) && (MT = KT)
          }
        }
        if (MT < 0) throw new RangeError("Index out of range");
        return MT
      }
    }

    function Dk(TT, kT) {
      if (TT.length != kT.length) return !1;
      for (let cT = 0; cT < TT.length; cT++) {
        let lT = TT[cT],
          MT = kT[cT];
        if (lT.from != MT.from || lT.to != MT.to || lT.direction != MT.direction || !Dk(lT.inner, MT.inner)) return !1
      }
      return !0
    }
    const ak = [];

    function Fk(TT, kT, cT, lT, MT, KT, OT) {
      let yT = lT % 2 ? 2 : 1;
      if (lT % 2 == MT % 2)
        for (let fT = kT, xT = 0; fT < cT;) {
          let kT = !0,
            IT = !1;
          if (xT == KT.length || fT < KT[xT].from) {
            let TT = ak[fT];
            TT != yT && (kT = !1, IT = 16 == TT)
          }
          let AT = kT || 1 != yT ? null : [],
            CT = kT ? lT : lT + 1,
            jT = fT;
          TT: for (;;)
            if (xT < KT.length && jT == KT[xT].from) {
              if (IT) break TT;
              let vT = KT[xT];
              if (!kT)
                for (let TT = vT.to, kT = xT + 1;;) {
                  if (TT == cT) break TT;
                  if (!(kT < KT.length && KT[kT].from == TT)) {
                    if (ak[TT] == yT) break TT;
                    break
                  }
                  TT = KT[kT++].to
                }
              if (xT++, AT) AT.push(vT);
              else {
                vT.from > fT && OT.push(new Sk(fT, vT.from, CT)), rk(TT, vT.direction == Ik != !(CT % 2) ? lT + 1 : lT, MT, vT.inner, vT.from, vT.to, OT), fT = vT.to
              }
              jT = vT.to
            } else {
              if (jT == cT || (kT ? ak[jT] != yT : ak[jT] == yT)) break;
              jT++
            } AT ? Fk(TT, fT, jT, lT + 1, MT, AT, OT) : fT < jT && OT.push(new Sk(fT, jT, CT)), fT = jT
        } else
          for (let fT = cT, xT = KT.length; fT > kT;) {
            let cT = !0,
              IT = !1;
            if (!xT || fT > KT[xT - 1].to) {
              let TT = ak[fT - 1];
              TT != yT && (cT = !1, IT = 16 == TT)
            }
            let AT = cT || 1 != yT ? null : [],
              CT = cT ? lT : lT + 1,
              jT = fT;
            TT: for (;;)
              if (xT && jT == KT[xT - 1].to) {
                if (IT) break TT;
                let vT = KT[--xT];
                if (!cT)
                  for (let TT = vT.from, cT = xT;;) {
                    if (TT == kT) break TT;
                    if (!cT || KT[cT - 1].to != TT) {
                      if (ak[TT - 1] == yT) break TT;
                      break
                    }
                    TT = KT[--cT].from
                  }
                if (AT) AT.push(vT);
                else {
                  vT.to < fT && OT.push(new Sk(vT.to, fT, CT)), rk(TT, vT.direction == Ik != !(CT % 2) ? lT + 1 : lT, MT, vT.inner, vT.from, vT.to, OT), fT = vT.from
                }
                jT = vT.from
              } else {
                if (jT == kT || (cT ? ak[jT - 1] != yT : ak[jT - 1] == yT)) break;
                jT--
              } AT ? Fk(TT, jT, fT, lT + 1, MT, AT, OT) : jT < fT && OT.push(new Sk(jT, fT, CT)), fT = jT
          }
    }

    function rk(TT, kT, cT, lT, MT, KT, OT) {
      let yT = kT % 2 ? 2 : 1;
      ! function(TT, kT, cT, lT, MT) {
        for (let KT = 0; KT <= lT.length; KT++) {
          let OT = KT ? lT[KT - 1].to : kT,
            yT = KT < lT.length ? lT[KT].from : cT,
            fT = KT ? 256 : MT;
          for (let kT = OT, cT = fT, lT = fT; kT < yT; kT++) {
            let MT = Nk(TT.charCodeAt(kT));
            512 == MT ? MT = cT : 8 == MT && 4 == lT && (MT = 16), ak[kT] = 4 == MT ? 2 : MT, 7 & MT && (lT = MT), cT = MT
          }
          for (let TT = OT, kT = fT, lT = fT; TT < yT; TT++) {
            let MT = ak[TT];
            if (128 == MT) TT < yT - 1 && kT == ak[TT + 1] && 24 & kT ? MT = ak[TT] = kT : ak[TT] = 256;
            else if (64 == MT) {
              let MT = TT + 1;
              for (; MT < yT && 64 == ak[MT];) MT++;
              let KT = TT && 8 == kT || MT < cT && 8 == ak[MT] ? 1 == lT ? 1 : 8 : 256;
              for (let kT = TT; kT < MT; kT++) ak[kT] = KT;
              TT = MT - 1
            } else 8 == MT && 1 == lT && (ak[TT] = 1);
            kT = MT, 7 & MT && (lT = MT)
          }
        }
      }(TT, MT, KT, lT, yT),
      function(TT, kT, cT, lT, MT) {
        let KT = 1 == MT ? 2 : 1;
        for (let OT = 0, yT = 0, fT = 0; OT <= lT.length; OT++) {
          let xT = OT ? lT[OT - 1].to : kT,
            IT = OT < lT.length ? lT[OT].from : cT;
          for (let kT, cT, lT, OT = xT; OT < IT; OT++)
            if (cT = tk[kT = TT.charCodeAt(OT)])
              if (cT < 0) {
                for (let TT = yT - 3; TT >= 0; TT -= 3)
                  if (hk[TT + 1] == -cT) {
                    let kT = hk[TT + 2],
                      cT = 2 & kT ? MT : 4 & kT ? 1 & kT ? KT : MT : 0;
                    cT && (ak[OT] = ak[hk[TT]] = cT), yT = TT;
                    break
                  }
              } else {
                if (189 == hk.length) break;
                hk[yT++] = OT, hk[yT++] = kT, hk[yT++] = fT
              }
          else if (2 == (lT = ak[OT]) || 1 == lT) {
            let TT = lT == MT;
            fT = TT ? 0 : 1;
            for (let kT = yT - 3; kT >= 0; kT -= 3) {
              let cT = hk[kT + 2];
              if (2 & cT) break;
              if (TT) hk[kT + 2] |= 2;
              else {
                if (4 & cT) break;
                hk[kT + 2] |= 4
              }
            }
          }
        }
      }(TT, MT, KT, lT, yT),
      function(TT, kT, cT, lT) {
        for (let MT = 0, KT = lT; MT <= cT.length; MT++) {
          let OT = MT ? cT[MT - 1].to : TT,
            yT = MT < cT.length ? cT[MT].from : kT;
          for (let fT = OT; fT < yT;) {
            let OT = ak[fT];
            if (256 == OT) {
              let OT = fT + 1;
              for (;;)
                if (OT == yT) {
                  if (MT == cT.length) break;
                  OT = cT[MT++].to, yT = MT < cT.length ? cT[MT].from : kT
                } else {
                  if (256 != ak[OT]) break;
                  OT++
                } let xT = 1 == KT,
                IT = xT == (1 == (OT < kT ? ak[OT] : lT)) ? xT ? 1 : 2 : lT;
              for (let kT = OT, lT = MT, KT = lT ? cT[lT - 1].to : TT; kT > fT;) kT == KT && (kT = cT[--lT].from, KT = lT ? cT[lT - 1].to : TT), ak[--kT] = IT;
              fT = OT
            } else KT = OT, fT++
          }
        }
      }(MT, KT, lT, yT), Fk(TT, MT, KT, kT, cT, lT, OT)
    }

    function Pk(TT, kT, cT) {
      if (!TT) return [new Sk(0, 0, kT == Ak ? 1 : 0)];
      if (kT == Ik && !cT.length && !Qk.test(TT)) return wk(TT.length);
      if (cT.length)
        for (; TT.length > ak.length;) ak[ak.length] = 256;
      let lT = [],
        MT = kT == Ik ? 0 : 1;
      return rk(TT, MT, MT, cT, 0, TT.length, lT), lT
    }

    function wk(TT) {
      return [new Sk(0, TT, 0)]
    }
    let mk = "";

    function bk(TT, kT, cT, MT, KT) {
      var OT;
      let yT = MT.head - TT.from,
        fT = Sk.find(kT, yT, null !== (OT = MT.bidiLevel) && void 0 !== OT ? OT : -1, MT.assoc),
        xT = kT[fT],
        IT = xT.side(KT, cT);
      if (yT == IT) {
        let TT = fT += KT ? 1 : -1;
        if (TT < 0 || TT >= kT.length) return null;
        xT = kT[fT = TT], yT = xT.side(!KT, cT), IT = xT.side(KT, cT)
      }
      let AT = (0, lT.W)(TT.text, yT, xT.forward(KT, cT));
      (AT < xT.from || AT > xT.to) && (AT = IT), mk = TT.text.slice(Math.min(yT, AT), Math.max(yT, AT));
      let CT = fT == (KT ? kT.length - 1 : 0) ? null : kT[fT + (KT ? 1 : -1)];
      return CT && AT == IT && CT.level + (KT ? 0 : 1) < xT.level ? lT.j.cursor(CT.side(!KT, cT) + TT.from, CT.forward(KT, cT) ? 1 : -1, CT.level) : lT.j.cursor(AT + TT.from, xT.forward(KT, cT) ? -1 : 1, xT.level)
    }

    function zk(TT, kT, cT) {
      for (let lT = kT; lT < cT; lT++) {
        let kT = Nk(TT.charCodeAt(lT));
        if (1 == kT) return Ik;
        if (2 == kT || 4 == kT) return Ak
      }
      return Ik
    }
    const Jk = lT.o.define(),
      Hk = lT.o.define(),
      ek = lT.o.define(),
      Gk = lT.o.define(),
      Vk = lT.o.define(),
      Ek = lT.o.define(),
      Zk = lT.o.define(),
      uk = lT.o.define(),
      Xk = lT.o.define(),
      dk = lT.o.define({
        combine: TT => TT.some((TT => TT))
      }),
      Lk = lT.o.define({
        combine: TT => TT.some((TT => TT))
      }),
      Rk = lT.o.define();
    class gk {
      constructor(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = TT, this.y = kT, this.x = cT, this.yMargin = lT, this.xMargin = MT, this.isSnapshot = KT
      }
      map(TT) {
        return TT.empty ? this : new gk(this.range.map(TT), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(TT) {
        return this.range.to <= TT.doc.length ? this : new gk(lT.j.cursor(TT.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const Uk = lT.F.define({
        map: (TT, kT) => TT.map(kT)
      }),
      Yk = lT.F.define();

    function Bk(TT, kT, cT) {
      let lT = TT.facet(Gk);
      lT.length ? lT[0](kT) : window.onerror && window.onerror(String(kT), cT, void 0, void 0, kT) || (cT ? console.error(cT + ":", kT) : console.error(kT))
    }
    const Wk = lT.o.define({
      combine: TT => !TT.length || TT[0]
    });
    let nk = 0;
    const pk = lT.o.define({
      combine: TT => TT.filter(((kT, cT) => {
        for (let lT = 0; lT < cT; lT++)
          if (TT[lT].plugin == kT.plugin) return !1;
        return !0
      }))
    });
    class ik {
      constructor(TT, kT, cT, lT, MT) {
        this.id = TT, this.create = kT, this.domEventHandlers = cT, this.domEventObservers = lT, this.baseExtensions = MT(this), this.extension = this.baseExtensions.concat(pk.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(TT) {
        return this.baseExtensions.concat(pk.of({
          plugin: this,
          arg: TT
        }))
      }
      static define(TT, kT) {
        const {
          eventHandlers: cT,
          eventObservers: lT,
          provide: MT,
          cK: KT
        } = kT || {};
        return new ik(nk++, TT, cT, lT, (TT => {
          let kT = [];
          return KT && kT.push(kc.of((kT => {
            let cT = kT.plugin(TT);
            return cT ? KT(cT) : HT.none
          }))), MT && kT.push(MT(TT)), kT
        }))
      }
      static fromClass(TT, kT) {
        return ik.define(((kT, cT) => new TT(kT, cT)), kT)
      }
    }
    class qk {
      constructor(TT) {
        this.spec = TT, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(TT) {
        if (this.value) {
          if (this.mustUpdate) {
            let TT = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(TT)
            } catch (kT) {
              if (Bk(TT.state, kT, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (cT) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(TT, this.spec.arg)
        } catch (kT) {
          Bk(TT.state, kT, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(TT) {
        var kT;
        if (null === (kT = this.value) || void 0 === kT ? void 0 : kT.destroy) try {
          this.value.destroy()
        } catch (cT) {
          Bk(TT.state, cT, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const sk = lT.o.define(),
      Tc = lT.o.define(),
      kc = lT.o.define(),
      cc = lT.o.define(),
      lc = lT.o.define(),
      Mc = lT.o.define(),
      Kc = lT.o.define();

    function Oc(TT, kT) {
      let cT = TT.state.facet(Kc);
      if (!cT.length) return cT;
      let MT = cT.map((kT => kT instanceof Function ? kT(TT) : kT)),
        KT = [];
      return lT.y.spans(MT, kT.from, kT.to, {
        point() {},
        span(TT, cT, lT, MT) {
          let OT = TT - kT.from,
            yT = cT - kT.from,
            fT = KT;
          for (let KT = lT.length - 1; KT >= 0; KT--, MT--) {
            let TT, cT = lT[KT].spec.bidiIsolate;
            if (null == cT && (cT = zk(kT.text, OT, yT)), MT > 0 && fT.length && (TT = fT[fT.length - 1]).to == OT && TT.direction == cT) TT.to = yT, fT = TT.inner;
            else {
              let TT = {
                from: OT,
                to: yT,
                direction: cT,
                inner: []
              };
              fT.push(TT), fT = TT.inner
            }
          }
        }
      }), KT
    }
    const yc = lT.o.define();

    function fc(TT) {
      let kT = 0,
        cT = 0,
        lT = 0,
        MT = 0;
      for (let KT of TT.state.facet(yc)) {
        let OT = KT(TT);
        OT && (null != OT.left && (kT = Math.max(kT, OT.left)), null != OT.right && (cT = Math.max(cT, OT.right)), null != OT.top && (lT = Math.max(lT, OT.top)), null != OT.bottom && (MT = Math.max(MT, OT.bottom)))
      }
      return {
        left: kT,
        right: cT,
        top: lT,
        bottom: MT
      }
    }
    const xc = lT.o.define();
    class Ic {
      constructor(TT, kT, cT, lT) {
        this.fromA = TT, this.toA = kT, this.fromB = cT, this.toB = lT
      }
      join(TT) {
        return new Ic(Math.min(this.fromA, TT.fromA), Math.max(this.toA, TT.toA), Math.min(this.fromB, TT.fromB), Math.max(this.toB, TT.toB))
      }
      addToSet(TT) {
        let kT = TT.length,
          cT = this;
        for (; kT > 0; kT--) {
          let lT = TT[kT - 1];
          if (!(lT.fromA > cT.toA)) {
            if (lT.toA < cT.fromA) break;
            cT = cT.join(lT), TT.splice(kT - 1, 1)
          }
        }
        return TT.splice(kT, 0, cT), TT
      }
      static extendWithRanges(TT, kT) {
        if (0 == kT.length) return TT;
        let cT = [];
        for (let lT = 0, MT = 0, KT = 0;;) {
          let OT = lT < TT.length ? TT[lT].fromB : 1e9,
            yT = MT < kT.length ? kT[MT] : 1e9,
            fT = Math.min(OT, yT);
          if (1e9 == fT) break;
          let xT = fT + KT,
            IT = fT,
            AT = xT;
          for (;;)
            if (MT < kT.length && kT[MT] <= IT) {
              let cT = kT[MT + 1];
              MT += 2, IT = Math.max(IT, cT);
              for (let kT = lT; kT < TT.length && TT[kT].fromB <= IT; kT++) KT = TT[kT].toA - TT[kT].toB;
              AT = Math.max(AT, cT + KT)
            } else {
              if (!(lT < TT.length && TT[lT].fromB <= IT)) break;
              {
                let kT = TT[lT++];
                IT = Math.max(IT, kT.toB), AT = Math.max(AT, kT.toA), KT = kT.toA - kT.toB
              }
            } cT.push(new Ic(xT, AT, fT, IT))
        }
        return cT
      }
    }
    class Ac {
      constructor(TT, kT, cT) {
        this.view = TT, this.state = kT, this.transactions = cT, this.flags = 0, this.startState = TT.state, this.changes = lT.ChangeSet.empty(this.startState.doc.length);
        for (let lT of cT) this.changes = this.changes.compose(lT.changes);
        let MT = [];
        this.changes.iterChangedRanges(((TT, kT, cT, lT) => MT.push(new Ic(TT, kT, cT, lT)))), this.changedRanges = MT
      }
      static create(TT, kT, cT) {
        return new Ac(TT, kT, cT)
      }
      get viewportChanged() {
        return (4 & this.flags) > 0
      }
      get viewportMoved() {
        return (8 & this.flags) > 0
      }
      get heightChanged() {
        return (2 & this.flags) > 0
      }
      get geometryChanged() {
        return this.docChanged || (18 & this.flags) > 0
      }
      get focusChanged() {
        return (1 & this.flags) > 0
      }
      get docChanged() {
        return !this.changes.empty
      }
      get selectionSet() {
        return this.transactions.some((TT => TT.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const Cc = [];
    class jc {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = TT, this.length = kT, this.flags = cT, this.parent = null, TT.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return Cc
      }
      isWidget() {
        return !1
      }
      get isHidden() {
        return !1
      }
      isComposite() {
        return !1
      }
      isLine() {
        return !1
      }
      isText() {
        return !1
      }
      isBlock() {
        return !1
      }
      get domAttrs() {
        return null
      }
      sync(TT) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let TT = this.domAttrs;
          TT && function(TT, kT) {
            for (let cT = TT.attributes.length - 1; cT >= 0; cT--) {
              let lT = TT.attributes[cT].name;
              null == kT[lT] && TT.removeAttribute(lT)
            }
            for (let cT in kT) {
              let lT = kT[cT];
              "style" == cT ? TT.style.cssText = lT : TT.getAttribute(cT) != lT && TT.setAttribute(cT, lT)
            }
          }(this.dom, TT)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(TT) {
        this.dom = TT, TT.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let cT of this.children) {
          if (cT == TT) return kT;
          kT += cT.length + cT.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(TT) {
        return this.posBefore(TT) + TT.length
      }
      covers(TT) {
        return !0
      }
      coordsIn(TT, kT) {
        return null
      }
      domPosFor(TT, kT) {
        let cT = UT(this.dom),
          lT = this.length ? TT > 0 : kT > 0;
        return new fk(this.parent.dom, cT + (lT ? 1 : 0), 0 == TT || TT == this.length)
      }
      markDirty(TT) {
        this.flags &= -3, TT && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let TT = this; TT; TT = TT.parent)
          if (TT instanceof hc) return TT;
        return null
      }
      static get(TT) {
        return TT.cmTile
      }
    }
    class vc extends jc {
      constructor(TT) {
        super(TT, 0), this._children = []
      }
      isComposite() {
        return !0
      }
      get children() {
        return this._children
      }
      get lastChild() {
        return this.children.length ? this.children[this.children.length - 1] : null
      }
      append(TT) {
        this.children.push(TT), TT.parent = this
      }
      sync(TT) {
        if (2 & this.flags) return;
        super.sync(TT);
        let kT, cT = this.dom,
          lT = null,
          MT = (null === TT || void 0 === TT ? void 0 : TT.node) == cT ? TT : null,
          KT = 0;
        for (let OT of this.children) {
          if (OT.sync(TT), KT += OT.length + OT.breakAfter, kT = lT ? lT.nextSibling : cT.firstChild, MT && kT != OT.dom && (MT.written = !0), OT.dom.parentNode == cT)
            for (; kT && kT != OT.dom;) kT = tc(kT);
          else cT.insertBefore(OT.dom, kT);
          lT = OT.dom
        }
        for (kT = lT ? lT.nextSibling : cT.firstChild, MT && kT && (MT.written = !0); kT;) kT = tc(kT);
        this.length = KT
      }
    }

    function tc(TT) {
      let kT = TT.nextSibling;
      return TT.parentNode.removeChild(TT), kT
    }
    class hc extends vc {
      constructor(TT, kT) {
        super(kT), this.view = TT
      }
      owns(TT) {
        for (; TT; TT = TT.parent)
          if (TT == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(TT) {
        for (;;) {
          if (!TT) return null;
          let kT = jc.get(TT);
          if (kT && this.owns(kT)) return kT;
          TT = TT.parentNode
        }
      }
      blockTiles(TT) {
        for (let kT = [], cT = this, lT = 0, MT = 0;;)
          if (lT == cT.children.length) {
            if (!kT.length) return;
            cT = cT.parent, cT.breakAfter && MT++, lT = kT.pop()
          } else {
            let KT = cT.children[lT++];
            if (KT instanceof Nc) kT.push(lT), cT = KT, lT = 0;
            else {
              let kT = MT + KT.length,
                cT = TT(KT, MT);
              if (void 0 !== cT) return cT;
              MT = kT + KT.breakAfter
            }
          }
      }
      resolveBlock(TT, kT) {
        let cT, lT, MT = -1,
          KT = -1;
        if (this.blockTiles(((OT, yT) => {
            let fT = yT + OT.length;
            if (TT >= yT && TT <= fT) {
              if (OT.isWidget() && kT >= -1 && kT <= 1) {
                if (32 & OT.flags) return !0;
                16 & OT.flags && (cT = void 0)
              }(yT < TT || TT == fT && (kT < -1 ? OT.length : OT.covers(1))) && (!cT || !OT.isWidget() && cT.isWidget()) && (cT = OT, MT = TT - yT), (fT > TT || TT == yT && (kT > 1 ? OT.length : OT.covers(-1))) && (!lT || !OT.isWidget() && lT.isWidget()) && (lT = OT, KT = TT - yT)
            }
          })), !cT && !lT) throw new Error("No tile at position " + TT);
        return cT && kT < 0 || !lT ? {
          tile: cT,
          offset: MT
        } : {
          tile: lT,
          offset: KT
        }
      }
    }
    class Nc extends vc {
      constructor(TT, kT) {
        super(TT), this.wrapper = kT
      }
      isBlock() {
        return !0
      }
      covers(TT) {
        return !!this.children.length && (TT < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (TT, kT) {
        let cT = new Nc(kT || document.createElement(TT.tagName), TT);
        return kT || (cT.flags |= 4), cT
      }
    }
    class Qc extends vc {
      constructor(TT, kT) {
        super(TT), this.attrs = kT
      }
      isLine() {
        return !0
      }
      static start(TT, kT, cT) {
        let lT = new Qc(kT || document.createElement("div"), TT);
        return kT && cT || (lT.flags |= 4), lT
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(TT, kT, cT) {
        let lT = null,
          MT = -1,
          KT = null,
          OT = -1;
        ! function TT(yT, fT) {
          for (let xT = 0, IT = 0; xT < yT.children.length && IT <= fT; xT++) {
            let AT = yT.children[xT],
              CT = IT + AT.length;
            CT >= fT && (AT.isComposite() ? TT(AT, fT - IT) : (!KT || KT.isHidden && (kT > 0 || cT && Sc(KT, AT))) && (CT > fT || 32 & AT.flags) ? (KT = AT, OT = fT - IT) : (IT < fT || 16 & AT.flags && !AT.isHidden) && (lT = AT, MT = fT - IT)), IT = CT
          }
        }(this, TT);
        let yT = (kT < 0 ? lT : KT) || lT || KT;
        return yT ? {
          tile: yT,
          offset: yT == lT ? MT : OT
        } : null
      }
      coordsIn(TT, kT) {
        let cT = this.resolveInline(TT, kT, !0);
        return cT ? cT.tile.coordsIn(Math.max(0, cT.offset), kT) : function(TT) {
          let kT = TT.dom.lastChild;
          if (!kT) return TT.dom.getBoundingClientRect();
          let cT = RT(kT);
          return cT[cT.length - 1] || null
        }(this)
      }
      domIn(TT, kT) {
        let cT = this.resolveInline(TT, kT);
        if (cT) {
          let {
            tile: TT,
            offset: lT
          } = cT;
          if (this.dom.contains(TT.dom)) return TT.isText() ? new fk(TT.dom, Math.min(TT.dom.nodeValue.length, lT)) : TT.domPosFor(lT, 16 & TT.flags ? 1 : 32 & TT.flags ? -1 : kT);
          let MT = cT.tile.parent,
            KT = !1;
          for (let kT of MT.children) {
            if (KT) return new fk(kT.dom, 0);
            kT == cT.tile && (KT = !0)
          }
        }
        return new fk(this.dom, 0)
      }
    }

    function Sc(TT, kT) {
      let cT = TT.coordsIn(0, 1),
        lT = kT.coordsIn(0, 1);
      return cT && lT && lT.top < cT.bottom
    }
    class Dc extends vc {
      constructor(TT, kT) {
        super(TT), this.mark = kT
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (TT, kT) {
        let cT = new Dc(kT || document.createElement(TT.tagName), TT);
        return kT || (cT.flags |= 4), cT
      }
    }
    class ac extends jc {
      constructor(TT, kT) {
        super(TT, kT.length), this.text = kT
      }
      sync(TT) {
        2 & this.flags || (super.sync(TT), this.dom.nodeValue != this.text && (TT && TT.node == this.dom && (TT.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(TT, kT) {
        let cT = this.dom.nodeValue.length;
        TT > cT && (TT = cT);
        let lT = TT,
          MT = TT,
          KT = 0;
        0 == TT && kT < 0 || TT == cT && kT >= 0 ? rT.chrome || rT.gecko || (TT ? (lT--, KT = 1) : MT < cT && (MT++, KT = -1)) : kT < 0 ? lT-- : MT < cT && MT++;
        let OT = lk(this.dom, lT, MT).getClientRects();
        if (!OT.length) return null;
        let yT = OT[(KT ? KT < 0 : kT >= 0) ? 0 : OT.length - 1];
        return rT.safari && !KT && 0 == yT.width && (yT = Array.prototype.find.call(OT, (TT => TT.width)) || yT), KT ? nT(yT, KT < 0) : yT || null
      }
      static of (TT, kT) {
        let cT = new ac(kT || document.createTextNode(TT), TT);
        return kT || (cT.flags |= 2), cT
      }
    }
    class Fc extends jc {
      constructor(TT, kT, cT, lT) {
        super(TT, kT, lT), this.widget = cT
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(TT) {
        return !(48 & this.flags) && (this.flags & (TT < 0 ? 64 : 128)) > 0
      }
      coordsIn(TT, kT) {
        return this.coordsInWidget(TT, kT, !1)
      }
      coordsInWidget(TT, kT, cT) {
        let lT = this.widget.coordsAt(this.dom, TT, kT);
        if (lT) return lT;
        if (cT) return nT(this.dom.getBoundingClientRect(), this.length ? 0 == TT : kT <= 0);
        {
          let kT = this.dom.getClientRects(),
            cT = null;
          if (!kT.length) return null;
          let lT = !!(16 & this.flags) || !(32 & this.flags) && TT > 0;
          for (let MT = lT ? kT.length - 1 : 0; cT = kT[MT], !(TT > 0 ? 0 == MT : MT == kT.length - 1 || cT.top < cT.bottom); MT += lT ? -1 : 1);
          return nT(cT, !lT)
        }
      }
      get overrideDOMText() {
        if (!this.length) return lT.I.empty;
        let {
          root: TT
        } = this;
        if (!TT) return lT.I.empty;
        let kT = this.posAtStart;
        return TT.view.state.doc.slice(kT, kT + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (TT, kT, cT, lT, MT) {
        return MT || (MT = TT.toDOM(kT), TT.editable || (MT.contentEditable = "false")), new Fc(MT, cT, TT, lT)
      }
    }
    class rc extends jc {
      constructor(TT) {
        let kT = document.createElement("img");
        kT.className = "cm-widgetBuffer", kT.setAttribute("aria-hidden", "true"), super(kT, 0, TT)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return lT.I.empty
      }
      coordsIn(TT) {
        return this.dom.getBoundingClientRect()
      }
    }
    class Pc {
      constructor(TT) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = TT
      }
      advance(TT, kT, cT) {
        let {
          tile: lT,
          index: MT,
          beforeBreak: KT,
          parents: OT
        } = this;
        for (; TT || kT > 0;)
          if (lT.isComposite())
            if (KT) {
              if (!TT) break;
              cT && cT.break(), TT--, KT = !1
            } else if (MT == lT.children.length) {
          if (!TT && !OT.length) break;
          cT && cT.leave(lT), KT = !!lT.breakAfter, ({
            tile: lT,
            index: MT
          } = OT.pop()), MT++
        } else {
          let yT = lT.children[MT],
            fT = yT.breakAfter;
          !(kT > 0 ? yT.length <= TT : yT.length < TT) || cT && !1 === cT.skip(yT, 0, yT.length) && yT.isComposite ? (OT.push({
            tile: lT,
            index: MT
          }), lT = yT, MT = 0, cT && yT.isComposite() && cT.enter(yT)) : (KT = !!fT, MT++, TT -= yT.length)
        } else if (MT == lT.length) KT = !!lT.breakAfter, ({
          tile: lT,
          index: MT
        } = OT.pop()), MT++;
        else {
          if (!TT) break;
          {
            let kT = Math.min(TT, lT.length - MT);
            cT && cT.skip(lT, MT, MT + kT), TT -= kT, MT += kT
          }
        }
        return this.tile = lT, this.index = MT, this.beforeBreak = KT, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class wc {
      constructor(TT, kT, cT, lT) {
        this.from = TT, this.to = kT, this.wrapper = cT, this.rank = lT
      }
    }
    class mc {
      constructor(TT, kT, cT) {
        this.cache = TT, this.root = kT, this.blockWrappers = cT, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(TT, kT, cT, lT) {
        var MT;
        this.flushBuffer();
        let KT = this.ensureMarks(kT, cT),
          OT = KT.lastChild;
        if (OT && OT.isText() && !(8 & OT.flags) && OT.length + TT.length < 512) {
          this.cache.reused.set(OT, 2), (KT.children[KT.children.length - 1] = new ac(OT.dom, OT.text + TT)).parent = KT
        } else KT.append(lT || ac.of(TT, null === (MT = this.cache.find(ac)) || void 0 === MT ? void 0 : MT.dom));
        this.pos += TT.length, this.afterWidget = null
      }
      addComposition(TT, kT) {
        let cT = this.curLine;
        cT.dom != kT.line.dom && (cT.setDOM(this.cache.reused.has(kT.line) ? Gc(kT.line.dom) : kT.line.dom), this.cache.reused.set(kT.line, 2));
        let lT = cT;
        for (let OT = kT.marks.length - 1; OT >= 0; OT--) {
          let TT = kT.marks[OT],
            cT = lT.lastChild;
          if (cT instanceof Dc && cT.mark.eq(TT.mark)) cT.dom != TT.dom && cT.setDOM(Gc(TT.dom)), lT = cT;
          else {
            if (this.cache.reused.get(TT)) {
              let kT = jc.get(TT.dom);
              kT && kT.setDOM(Gc(TT.dom))
            }
            let kT = Dc.of(TT.mark, TT.dom);
            lT.append(kT), lT = kT
          }
          this.cache.reused.set(TT, 2)
        }
        let MT = jc.get(TT.text);
        MT && this.cache.reused.set(MT, 2);
        let KT = new ac(TT.text, TT.text.nodeValue);
        KT.flags |= 8, lT.append(KT)
      }
      addInlineWidget(TT, kT, cT) {
        let lT = this.afterWidget && 48 & TT.flags && (48 & this.afterWidget.flags) == (48 & TT.flags);
        lT || this.flushBuffer();
        let MT = this.ensureMarks(kT, cT);
        lT || 16 & TT.flags || MT.append(this.getBuffer(1)), MT.append(TT), this.pos += TT.length, this.afterWidget = TT
      }
      addMark(TT, kT, cT) {
        this.flushBuffer(), this.ensureMarks(kT, cT).append(TT), this.pos += TT.length, this.afterWidget = null
      }
      addBlockWidget(TT) {
        this.getBlockPos().append(TT), this.pos += TT.length, this.lastBlock = TT, this.endLine()
      }
      continueWidget(TT) {
        (this.afterWidget || this.lastBlock).length += TT, this.pos += TT
      }
      addLineStart(TT, kT) {
        var cT;
        TT || (TT = ec);
        let lT = Qc.start(TT, kT || (null === (cT = this.cache.find(Qc)) || void 0 === cT ? void 0 : cT.dom), !!kT);
        this.getBlockPos().append(this.lastBlock = this.curLine = lT)
      }
      addLine(TT) {
        this.getBlockPos().append(TT), this.pos += TT.length, this.lastBlock = TT, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(TT) {
        this.blockPosCovered() || this.addLineStart(TT)
      }
      ensureLine(TT) {
        this.curLine || this.addLineStart(TT)
      }
      ensureMarks(TT, kT) {
        var cT;
        let lT = this.curLine;
        for (let MT = TT.length - 1; MT >= 0; MT--) {
          let KT, OT = TT[MT];
          if (kT > 0 && (KT = lT.lastChild) && KT instanceof Dc && KT.mark.eq(OT)) lT = KT, kT--;
          else {
            let TT = Dc.of(OT, null === (cT = this.cache.find(Dc, (TT => TT.mark.eq(OT)))) || void 0 === cT ? void 0 : cT.dom);
            lT.append(TT), lT = TT, kT = 0
          }
        }
        return lT
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let TT = this.curLine.lastChild;
          TT && Hc(this.curLine, !1) && ("BR" == TT.dom.nodeName || !TT.isWidget() || rT.ios && Hc(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(Ec, 0, 32) || new Fc(Ec.toDOM(), 0, Ec, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let TT = this.wrappers.length - 1; TT >= 0; TT--) this.wrappers[TT].to < this.pos && this.wrappers.splice(TT, 1);
        for (let TT = this.blockWrappers; TT.value && TT.from <= this.pos; TT.next())
          if (TT.to >= this.pos) {
            let kT = new wc(TT.from, TT.to, TT.value, TT.rank),
              cT = this.wrappers.length;
            for (; cT > 0 && (this.wrappers[cT - 1].rank - kT.rank || this.wrappers[cT - 1].to - kT.to) < 0;) cT--;
            this.wrappers.splice(cT, 0, kT)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var TT;
        this.updateBlockWrappers();
        let kT = this.root;
        for (let cT of this.wrappers) {
          let lT = kT.lastChild;
          if (cT.from < this.pos && lT instanceof Nc && lT.wrapper.eq(cT.wrapper)) kT = lT;
          else {
            let lT = Nc.of(cT.wrapper, null === (TT = this.cache.find(Nc, (TT => TT.wrapper.eq(cT.wrapper)))) || void 0 === TT ? void 0 : TT.dom);
            kT.append(lT), kT = lT
          }
        }
        return kT
      }
      blockPosCovered() {
        let TT = this.lastBlock;
        return null != TT && !TT.breakAfter && (!TT.isWidget() || (160 & TT.flags) > 0)
      }
      getBuffer(TT) {
        let kT = 2 | (TT < 0 ? 16 : 32),
          cT = this.cache.find(rc, void 0, 1);
        return cT && (cT.flags = kT), cT || new rc(kT)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class bc {
      constructor(TT) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = TT.iter()
      }
      skip(TT) {
        this.textOff + TT <= this.text.length ? this.textOff += TT : (this.skipCount += TT - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(TT) {
        if (this.textOff == this.text.length) {
          let {
            value: kT,
            lineBreak: cT,
            done: lT
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, lT) throw new Error("Ran out of text content when drawing inline views");
          this.text = kT;
          let MT = this.textOff = Math.min(TT, kT.length);
          return cT ? null : kT.slice(0, MT)
        }
        let kT = Math.min(this.text.length, this.textOff + TT),
          cT = this.text.slice(this.textOff, kT);
        return this.textOff = kT, cT
      }
    }
    const zc = [Fc, Qc, ac, Dc, rc, Nc, hc];
    for (let HO = 0; HO < zc.length; HO++) zc[HO].bucket = HO;
    class Jc {
      constructor(TT) {
        this.view = TT, this.buckets = zc.map((() => [])), this.index = zc.map((() => 0)), this.reused = new Map
      }
      add(TT) {
        let kT = TT.constructor.bucket,
          cT = this.buckets[kT];
        cT.length < 6 ? cT.push(TT) : cT[this.index[kT] = (this.index[kT] + 1) % 6] = TT
      }
      find(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          lT = TT.bucket,
          MT = this.buckets[lT],
          KT = this.index[lT];
        for (let OT = MT.length - 1; OT >= 0; OT--) {
          let TT = (OT + KT) % MT.length,
            yT = MT[TT];
          if ((!kT || kT(yT)) && !this.reused.has(yT)) return MT.splice(TT, 1), TT < KT && this.index[lT]--, this.reused.set(yT, cT), yT
        }
        return null
      }
      findWidget(TT, kT, cT) {
        let lT = this.buckets[0];
        if (lT.length)
          for (let MT = 0, KT = 0;; MT++) {
            if (MT == lT.length) {
              if (KT) return null;
              KT = 1, MT = 0
            }
            let OT = lT[MT];
            if (!this.reused.has(OT) && (0 == KT ? OT.widget.compare(TT) : OT.widget.constructor == TT.constructor && TT.updateDOM(OT.dom, this.view, OT.widget))) return lT.splice(MT, 1), MT < this.index[0] && this.index[0]--, OT.widget == TT && OT.length == kT && (497 & OT.flags) == cT ? (this.reused.set(OT, 1), OT) : (this.reused.set(OT, 2), new Fc(OT.dom, kT, TT, -498 & OT.flags | cT))
          }
      }
      reuse(TT) {
        return this.reused.set(TT, 1), TT
      }
      maybeReuse(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(TT)) return this.reused.set(TT, kT), TT.dom
      }
      clear() {
        for (let TT = 0; TT < this.buckets.length; TT++) this.buckets[TT].length = this.index[TT] = 0
      }
    }
    class oc {
      constructor(TT, kT, cT, MT, KT) {
        this.view = TT, this.cK = MT, this.disallowBlockEffectsFor = KT, this.openWidget = !1, this.openMarks = 0, this.cache = new Jc(TT), this.text = new bc(TT.state.doc), this.builder = new mc(this.cache, new hc(TT, TT.contentDOM), lT.y.iter(cT)), this.cache.reused.set(kT, 2), this.old = new Pc(kT), this.reuseWalker = {
          skip: (TT, kT, cT) => {
            if (this.cache.add(TT), TT.isComposite()) return !1
          },
          enter: TT => this.cache.add(TT),
          leave: () => {},
          break: () => {}
        }
      }
      run(TT, kT) {
        let cT = kT && this.getCompositionContext(kT.text);
        for (let lT = 0, MT = 0, KT = 0;;) {
          let OT = KT < TT.length ? TT[KT++] : null,
            yT = OT ? OT.fromA : this.old.root.length;
          if (yT > lT) {
            let TT = yT - lT;
            this.preserve(TT, !KT, !OT), lT = yT, MT += TT
          }
          if (!OT) break;
          kT && OT.fromA <= kT.range.fromA && OT.toA >= kT.range.toA ? (this.forward(OT.fromA, kT.range.fromA, kT.range.fromA < kT.range.toA ? 1 : -1), this.emit(MT, kT.range.fromB), this.cache.clear(), this.builder.addComposition(kT, cT), this.text.skip(kT.range.toB - kT.range.fromB), this.forward(kT.range.fromA, OT.toA), this.emit(kT.range.toB, OT.toB)) : (this.forward(OT.fromA, OT.toA), this.emit(MT, OT.toB)), MT = OT.toB, lT = OT.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(TT, kT, cT) {
        let lT = function(TT) {
            let kT = [];
            for (let cT = TT.parents.length; cT > 1; cT--) {
              let lT = cT == TT.parents.length ? TT.tile : TT.parents[cT].tile;
              lT instanceof Dc && kT.push(lT.mark)
            }
            return kT
          }(this.old),
          MT = this.openMarks;
        this.old.advance(TT, cT ? 1 : -1, {
          skip: (TT, kT, cT) => {
            if (TT.isWidget())
              if (this.openWidget) this.builder.continueWidget(cT - kT);
              else {
                let KT = cT > 0 || kT < TT.length ? Fc.of(TT.widget, this.view, cT - kT, 496 & TT.flags, this.cache.maybeReuse(TT)) : this.cache.reuse(TT);
                256 & KT.flags ? (KT.flags &= -2, this.builder.addBlockWidget(KT)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(KT, lT, MT), MT = lT.length)
              }
            else if (TT.isText()) this.builder.ensureLine(null), kT || cT != TT.length || this.cache.reused.has(TT) ? (this.cache.add(TT), this.builder.addText(TT.text.slice(kT, cT), lT, MT)) : this.builder.addText(TT.text, lT, MT, this.cache.reuse(TT)), MT = lT.length;
            else if (TT.isLine()) TT.flags &= -2, this.cache.reused.set(TT, 1), this.builder.addLine(TT);
            else if (TT instanceof rc) this.cache.add(TT);
            else {
              if (!(TT instanceof Dc)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(TT, lT, MT), this.cache.reused.set(TT, 1), MT = lT.length
            }
            this.openWidget = !1
          },
          enter: TT => {
            TT.isLine() ? this.builder.addLineStart(TT.attrs, this.cache.maybeReuse(TT)) : (this.cache.add(TT), TT instanceof Dc && lT.unshift(TT.mark)), this.openWidget = !1
          },
          leave: TT => {
            TT.isLine() ? lT.length && (lT.length = MT = 0) : TT instanceof Dc && (lT.shift(), MT = Math.min(MT, lT.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(TT)
      }
      emit(TT, kT) {
        let cT = null,
          MT = this.builder,
          KT = 0,
          OT = lT.y.spans(this.cK, TT, kT, {
            point: (TT, kT, lT, OT, yT, fT) => {
              if (lT instanceof VT) {
                if (this.disallowBlockEffectsFor[fT]) {
                  if (lT.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (kT > this.view.state.doc.lineAt(TT).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (KT = OT.length, yT > OT.length) MT.continueWidget(kT - TT);
                else {
                  let KT = lT.widget || (lT.block ? Vc.block : Vc.inline),
                    fT = function(TT) {
                      let kT = TT.isReplace ? (TT.startSide < 0 ? 64 : 0) | (TT.endSide > 0 ? 128 : 0) : TT.startSide > 0 ? 32 : 16;
                      TT.block && (kT |= 256);
                      return kT
                    }(lT),
                    xT = this.cache.findWidget(KT, kT - TT, fT) || Fc.of(KT, this.view, kT - TT, fT);
                  lT.block ? (lT.startSide > 0 && MT.addLineStartIfNotCovered(cT), MT.addBlockWidget(xT)) : (MT.ensureLine(cT), MT.addInlineWidget(xT, OT, yT))
                }
                cT = null
              } else cT = function(TT, kT) {
                let cT = kT.spec.attributes,
                  lT = kT.spec.class;
                if (!cT && !lT) return TT;
                TT || (TT = {
                  class: "cm-line"
                });
                cT && PT(cT, TT);
                lT && (TT.class += " " + lT);
                return TT
              }(cT, lT);
              kT > TT && this.text.skip(kT - TT)
            },
            span: (TT, kT, lT, KT) => {
              for (let OT = TT; OT < kT;) {
                let yT = this.text.next(Math.min(512, kT - OT));
                null == yT ? (MT.addLineStartIfNotCovered(cT), MT.addBreak(), OT++) : (MT.ensureLine(cT), MT.addText(yT, lT, OT == TT ? KT : lT.length), OT += yT.length), cT = null
              }
            }
          });
        MT.addLineStartIfNotCovered(cT), this.openWidget = OT > KT, this.openMarks = OT
      }
      forward(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        kT - TT <= 10 ? this.old.advance(kT - TT, cT, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(kT - TT - 10, -1), this.old.advance(5, cT, this.reuseWalker))
      }
      getCompositionContext(TT) {
        let kT = [],
          cT = null;
        for (let lT = TT.parentNode;; lT = lT.parentNode) {
          let TT = jc.get(lT);
          if (lT == this.view.contentDOM) break;
          TT instanceof Dc ? kT.push(TT) : (null === TT || void 0 === TT ? void 0 : TT.isLine()) ? cT = TT : TT instanceof Nc || ("DIV" != lT.nodeName || cT || lT == this.view.contentDOM ? cT || kT.push(Dc.of(new eT({
            tagName: lT.nodeName.toLowerCase(),
            attributes: zT(lT)
          }), lT)) : cT = new Qc(lT, ec))
        }
        return {
          line: cT,
          marks: kT
        }
      }
    }

    function Hc(TT, kT) {
      let cT = TT => {
        for (let lT of TT.children)
          if ((kT ? lT.isText() : lT.length) || cT(lT)) return !0;
        return !1
      };
      return cT(TT)
    }
    const ec = {
      class: "cm-line"
    };

    function Gc(TT) {
      let kT = jc.get(TT);
      return kT && kT.setDOM(TT.cloneNode()), TT
    }
    class Vc extends JT {
      constructor(TT) {
        super(), this.tag = TT
      }
      eq(TT) {
        return TT.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(TT) {
        return TT.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    Vc.inline = new Vc("span"), Vc.block = new Vc("div");
    const Ec = new class extends JT {
      toDOM() {
        return document.createElement("br")
      }
      get isHidden() {
        return !0
      }
      get editable() {
        return !0
      }
    };
    class Zc {
      constructor(TT) {
        this.view = TT, this.cK = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = HT.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new hc(TT, TT.contentDOM), this.updateInner([new Ic(0, 0, 0, TT.state.doc.length)], null)
      }
      update(TT) {
        var kT;
        let cT = TT.changedRanges;
        this.minWidth > 0 && cT.length && (cT.every((TT => {
          let {
            fromA: kT,
            toA: cT
          } = TT;
          return cT < this.minWidthFrom || kT > this.minWidthTo
        })) ? (this.minWidthFrom = TT.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = TT.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(TT);
        let MT = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (kT = this.domChanged) || void 0 === kT ? void 0 : kT.newSel) ? MT = this.domChanged.newSel.head : function(TT, kT) {
          let cT = !1;
          kT && TT.iterChangedRanges(((TT, lT) => {
            TT < kT.to && lT > kT.from && (cT = !0)
          }));
          return cT
        }(TT.changes, this.hasComposition) || TT.selectionSet || (MT = TT.state.selection.main.head));
        let KT = MT > -1 ? function(TT, kT, cT) {
          let lT = Xc(TT, cT);
          if (!lT) return null;
          let {
            node: MT,
            from: KT,
            to: OT
          } = lT, yT = MT.nodeValue;
          if (/[\n\r]/.test(yT)) return null;
          if (TT.state.doc.sliceString(lT.from, lT.to) != yT) return null;
          let fT = kT.invertedDesc;
          return {
            range: new Ic(fT.mapPos(KT), fT.mapPos(OT), KT, OT),
            text: MT
          }
        }(this.view, TT.changes, MT) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: kT,
            to: lT
          } = this.hasComposition;
          cT = new Ic(kT, lT, TT.changes.mapPos(kT, -1), TT.changes.mapPos(lT, 1)).addToSet(cT.slice())
        }
        this.hasComposition = KT ? {
          from: KT.range.fromB,
          to: KT.range.toB
        } : null, (rT.ie || rT.chrome) && !KT && TT && TT.state.doc.lines != TT.startState.doc.lines && (this.forceSelection = !0);
        let OT = this.cK,
          yT = this.blockWrappers;
        this.updateDeco();
        let fT = function(TT, kT, cT) {
          let MT = new dc;
          return lT.y.compare(TT, kT, cT, MT), MT.changes
        }(OT, this.cK, TT.changes);
        fT.length && (cT = Ic.extendWithRanges(cT, fT));
        let xT = function(TT, kT, cT) {
          let MT = new Lc;
          return lT.y.compare(TT, kT, cT, MT), MT.changes
        }(yT, this.blockWrappers, TT.changes);
        return xT.length && (cT = Ic.extendWithRanges(cT, xT)), KT && !cT.some((TT => TT.fromA <= KT.range.fromA && TT.toA >= KT.range.toA)) && (cT = KT.range.addToSet(cT.slice())), !(2 & this.tile.flags && 0 == cT.length) && (this.updateInner(cT, KT), TT.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(TT, kT) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: cT
        } = this.view;
        cT.ignore((() => {
          if (kT || TT.length) {
            let cT = this.tile,
              lT = new oc(this.view, cT, this.blockWrappers, this.cK, this.dynamicDecorationMap);
            kT && jc.get(kT.text) && lT.cache.reused.set(jc.get(kT.text), 2), this.tile = lT.run(TT, kT), uc(cT, lT.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let lT = rT.chrome || rT.ios ? {
            node: cT.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(lT), !lT || !lT.written && cT.selectionRange.focusNode == lT.node && this.tile.dom.contains(lT.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let lT = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let MT of this.tile.children) MT.isWidget() && MT.widget instanceof Rc && lT.push(MT.dom);
        cT.updateGaps(lT)
      }
      updateEditContextFormatting(TT) {
        this.editContextFormatting = this.editContextFormatting.map(TT.changes);
        for (let kT of TT.transactions)
          for (let TT of kT.effects) TT.is(Yk) && (this.editContextFormatting = TT.value)
      }
      updateSelection() {
        let TT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: kT
        } = this.tile, cT = this.view.root.activeElement, lT = cT == kT, MT = !lT && !(this.view.state.facet(Wk) || kT.tabIndex > -1) && LT(kT, this.view.observer.selectionRange) && !(cT && kT.contains(cT));
        if (!(lT || TT || MT)) return;
        let KT = this.forceSelection;
        this.forceSelection = !1;
        let OT, yT, fT = this.view.state.selection.main;
        if (fT.empty ? yT = OT = this.inlineDOMNearPos(fT.anchor, fT.assoc || 1) : (yT = this.inlineDOMNearPos(fT.head, fT.head == fT.from ? 1 : -1), OT = this.inlineDOMNearPos(fT.anchor, fT.anchor == fT.from ? 1 : -1)), rT.gecko && fT.empty && !this.hasComposition && (1 == (xT = OT).node.nodeType && xT.node.firstChild && (0 == xT.offset || "false" == xT.node.childNodes[xT.offset - 1].contentEditable) && (xT.offset == xT.node.childNodes.length || "false" == xT.node.childNodes[xT.offset].contentEditable))) {
          let TT = document.createTextNode("");
          this.view.observer.ignore((() => OT.node.insertBefore(TT, OT.node.childNodes[OT.offset] || null))), OT = yT = new fk(TT, 0), KT = !0
        }
        var xT;
        let IT = this.view.observer.selectionRange;
        !KT && IT.focusNode && (gT(OT.node, OT.offset, IT.anchorNode, IT.anchorOffset) && gT(yT.node, yT.offset, IT.focusNode, IT.focusOffset) || this.suppressWidgetCursorChange(IT, fT)) || (this.view.observer.ignore((() => {
          rT.android && rT.chrome && kT.contains(IT.focusNode) && function(TT, kT) {
            for (let cT = TT; cT && cT != kT; cT = cT.assignedSlot || cT.parentNode)
              if (1 == cT.nodeType && "false" == cT.contentEditable) return !0;
            return !1
          }(IT.focusNode, kT) && (kT.blur(), kT.focus({
            preventScroll: !0
          }));
          let TT = XT(this.view.root);
          if (TT)
            if (fT.empty) {
              if (rT.gecko) {
                let TT = (lT = OT.node, KT = OT.offset, 1 != lT.nodeType ? 0 : (KT && "false" == lT.childNodes[KT - 1].contentEditable ? 1 : 0) | (KT < lT.childNodes.length && "false" == lT.childNodes[KT].contentEditable ? 2 : 0));
                if (TT && 3 != TT) {
                  let kT = (1 == TT ? Ok : yk)(OT.node, OT.offset);
                  kT && (OT = new fk(kT.node, kT.offset))
                }
              }
              TT.collapse(OT.node, OT.offset), null != fT.bidiLevel && void 0 !== TT.caretBidiLevel && (TT.caretBidiLevel = fT.bidiLevel)
            } else if (TT.extend) {
            TT.collapse(OT.node, OT.offset);
            try {
              TT.extend(yT.node, yT.offset)
            } catch (xT) {}
          } else {
            let kT = document.createRange();
            fT.anchor > fT.head && ([OT, yT] = [yT, OT]), kT.setEnd(yT.node, yT.offset), kT.setStart(OT.node, OT.offset), TT.removeAllRanges(), TT.addRange(kT)
          } else;
          var lT, KT;
          MT && this.view.root.activeElement == kT && (kT.blur(), cT && cT.focus())
        })), this.view.observer.setSelectionRange(OT, yT)), this.impreciseAnchor = OT.precise ? null : new fk(IT.anchorNode, IT.anchorOffset), this.impreciseHead = yT.precise ? null : new fk(IT.focusNode, IT.focusOffset)
      }
      suppressWidgetCursorChange(TT, kT) {
        return this.hasComposition && kT.empty && gT(TT.focusNode, TT.focusOffset, TT.anchorNode, TT.anchorOffset) && this.posFromDOM(TT.focusNode, TT.focusOffset) == kT.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: TT
        } = this, kT = TT.state.selection.main, cT = XT(TT.root), {
          anchorNode: lT,
          anchorOffset: MT
        } = TT.observer.selectionRange;
        if (!cT || !kT.empty || !kT.assoc || !cT.modify) return;
        let KT = this.lineAt(kT.head, kT.assoc);
        if (!KT) return;
        let OT = KT.posAtStart;
        if (kT.head == OT || kT.head == OT + KT.length) return;
        let yT = this.coordsAt(kT.head, -1),
          fT = this.coordsAt(kT.head, 1);
        if (!yT || !fT || yT.bottom > fT.top) return;
        let xT = this.domAtPos(kT.head + kT.assoc, kT.assoc);
        cT.collapse(xT.node, xT.offset), cT.modify("move", kT.assoc < 0 ? "forward" : "backward", "lineboundary"), TT.observer.readSelectionRange();
        let IT = TT.observer.selectionRange;
        TT.docView.posFromDOM(IT.anchorNode, IT.anchorOffset) != kT.from && cT.collapse(lT, MT)
      }
      posFromDOM(TT, kT) {
        let cT = this.tile.nearest(TT);
        if (!cT) return 2 & this.tile.dom.compareDocumentPosition(TT) ? 0 : this.view.state.doc.length;
        let lT = cT.posAtStart;
        if (!cT.isComposite()) return cT.isText() ? TT == cT.dom ? lT + kT : lT + (kT ? cT.length : 0) : lT;
        {
          let MT;
          if (TT == cT.dom) MT = cT.dom.childNodes[kT];
          else {
            let lT = 0 == WT(TT) ? 0 : 0 == kT ? -1 : 1;
            for (;;) {
              let kT = TT.parentNode;
              if (kT == cT.dom) break;
              0 == lT && kT.firstChild != kT.lastChild && (lT = TT == kT.firstChild ? -1 : 1), TT = kT
            }
            MT = lT < 0 ? TT : TT.nextSibling
          }
          if (MT == cT.dom.firstChild) return lT;
          for (; MT && !jc.get(MT);) MT = MT.nextSibling;
          if (!MT) return lT + cT.length;
          for (let TT = 0, kT = lT;; TT++) {
            let lT = cT.children[TT];
            if (lT.dom == MT) return kT;
            kT += lT.length + lT.breakAfter
          }
        }
      }
      domAtPos(TT, kT) {
        let {
          tile: cT,
          offset: lT
        } = this.tile.resolveBlock(TT, kT);
        return cT.isWidget() ? cT.domPosFor(TT, kT) : cT.domIn(lT, kT)
      }
      inlineDOMNearPos(TT, kT) {
        let cT, lT, MT = -1,
          KT = !1,
          OT = -1,
          yT = !1;
        return this.tile.blockTiles(((kT, fT) => {
          if (kT.isWidget()) {
            if (32 & kT.flags && fT >= TT) return !0;
            16 & kT.flags && (KT = !0)
          } else {
            let xT = fT + kT.length;
            if (fT <= TT && (cT = kT, MT = TT - fT, KT = xT < TT), xT >= TT && !lT && (lT = kT, OT = TT - fT, yT = fT > TT), fT > TT && lT) return !0
          }
        })), cT || lT ? (KT && lT ? cT = null : yT && cT && (lT = null), cT && kT < 0 || !lT ? cT.domIn(MT, kT) : lT.domIn(OT, kT)) : this.domAtPos(TT, kT)
      }
      coordsAt(TT, kT) {
        let {
          tile: cT,
          offset: lT
        } = this.tile.resolveBlock(TT, kT);
        return cT.isWidget() ? cT.widget instanceof Rc ? null : cT.coordsInWidget(lT, kT, !0) : cT.coordsIn(lT, kT)
      }
      lineAt(TT, kT) {
        let {
          tile: cT
        } = this.tile.resolveBlock(TT, kT);
        return cT.isLine() ? cT : null
      }
      coordsForChar(TT) {
        let {
          tile: kT,
          offset: cT
        } = this.tile.resolveBlock(TT, 1);
        if (!kT.isLine()) return null;
        return function TT(kT, cT) {
          if (kT.isComposite())
            for (let lT of kT.children) {
              if (lT.length >= cT) {
                let kT = TT(lT, cT);
                if (kT) return kT
              }
              if ((cT -= lT.length) < 0) break
            } else if (kT.isText() && cT < kT.length) {
              let TT = (0, lT.W)(kT.text, cT);
              if (TT == cT) return null;
              let MT = lk(kT.dom, cT, TT).getClientRects();
              for (let kT = 0; kT < MT.length; kT++) {
                let TT = MT[kT];
                if (kT == MT.length - 1 || TT.top < TT.bottom && TT.left < TT.right) return TT
              }
            } return null
        }(kT, cT)
      }
      measureVisibleLineHeights(TT) {
        let kT = [],
          {
            from: cT,
            to: lT
          } = TT,
          MT = this.view.contentDOM.clientWidth,
          KT = MT > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          OT = -1,
          yT = this.view.textDirection == xk.LTR,
          fT = 0,
          xT = (TT, IT, AT) => {
            for (let CT = 0; CT < TT.children.length && !(IT > lT); CT++) {
              let lT = TT.children[CT],
                jT = IT + lT.length,
                vT = lT.dom.getBoundingClientRect(),
                {
                  height: tT
                } = vT;
              if (AT && !CT && (fT += vT.top - AT.top), lT instanceof Nc) jT > cT && xT(lT, IT, vT);
              else if (IT >= cT && (fT > 0 && kT.push(-fT), kT.push(tT + fT), fT = 0, KT)) {
                let TT = lT.dom.lastChild,
                  kT = TT ? RT(TT) : [];
                if (kT.length) {
                  let TT = kT[kT.length - 1],
                    cT = yT ? TT.right - vT.left : vT.right - TT.left;
                  cT > OT && (OT = cT, this.minWidth = MT, this.minWidthFrom = IT, this.minWidthTo = jT)
                }
              }
              AT && CT == TT.children.length - 1 && (fT += AT.bottom - vT.bottom), IT = jT + lT.breakAfter
            }
          };
        return xT(this.tile, 0, null), kT
      }
      textDirectionAt(TT) {
        let {
          tile: kT
        } = this.tile.resolveBlock(TT, 1);
        return "rtl" == getComputedStyle(kT.dom).direction ? xk.RTL : xk.LTR
      }
      measureTextSize() {
        let TT = this.tile.blockTiles((TT => {
          if (TT.isLine() && TT.children.length && TT.length <= 20) {
            let kT, cT = 0;
            for (let lT of TT.children) {
              if (!lT.isText() || /[^ -~]/.test(lT.text)) return;
              let TT = RT(lT.dom);
              if (1 != TT.length) return;
              cT += TT[0].width, kT = TT[0].height
            }
            if (cT) return {
              lineHeight: TT.dom.getBoundingClientRect().height,
              charWidth: cT / TT.length,
              textHeight: kT
            }
          }
        }));
        if (TT) return TT;
        let kT, cT, lT, MT = document.createElement("div");
        return MT.className = "cm-line", MT.style.width = "99999px", MT.style.position = "absolute", MT.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(MT);
          let TT = RT(MT.firstChild)[0];
          kT = MT.getBoundingClientRect().height, cT = TT && TT.width ? TT.width / 27 : 7, lT = TT && TT.height ? TT.height : kT, MT.remove()
        })), {
          lineHeight: kT,
          charWidth: cT,
          textHeight: lT
        }
      }
      computeBlockGapDeco() {
        let TT = [],
          kT = this.view.viewState;
        for (let cT = 0, lT = 0;; lT++) {
          let MT = lT == kT.viewports.length ? null : kT.viewports[lT],
            KT = MT ? MT.from - 1 : this.view.state.doc.length;
          if (KT > cT) {
            let lT = (kT.lineBlockAt(KT).bottom - kT.lineBlockAt(cT).top) / this.view.scaleY;
            TT.push(HT.replace({
              widget: new Rc(lT),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(cT, KT))
          }
          if (!MT) break;
          cT = MT.to + 1
        }
        return HT.set(TT)
      }
      updateDeco() {
        let TT = 1,
          kT = this.view.state.facet(kc).map((kT => (this.dynamicDecorationMap[TT++] = "function" == typeof kT) ? kT(this.view) : kT)),
          cT = !1,
          MT = this.view.state.facet(lc).map(((TT, kT) => {
            let lT = "function" == typeof TT;
            return lT && (cT = !0), lT ? TT(this.view) : TT
          }));
        for (MT.length && (this.dynamicDecorationMap[TT++] = cT, kT.push(lT.y.join(MT))), this.cK = [this.editContextFormatting, ...kT, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; TT < this.cK.length;) this.dynamicDecorationMap[TT++] = !1;
        this.blockWrappers = this.view.state.facet(cc).map((TT => "function" == typeof TT ? TT(this.view) : TT))
      }
      scrollIntoView(TT) {
        var kT;
        if (TT.isSnapshot) {
          let kT = this.view.viewState.lineBlockAt(TT.range.head);
          return this.view.scrollDOM.scrollTop = kT.top - TT.yMargin, void(this.view.scrollDOM.scrollLeft = TT.xMargin)
        }
        for (let IT of this.view.state.facet(Rk)) try {
          if (IT(this.view, TT.range, TT)) return !0
        } catch (xT) {
          Bk(this.view.state, xT, "scroll handler")
        }
        let cT, {
            range: lT
          } = TT,
          MT = this.coordsAt(lT.head, null !== (kT = lT.assoc) && void 0 !== kT ? kT : lT.empty ? 0 : lT.head > lT.anchor ? -1 : 1);
        if (!MT) return;
        !lT.empty && (cT = this.coordsAt(lT.anchor, lT.anchor > lT.head ? -1 : 1)) && (MT = {
          left: Math.min(MT.left, cT.left),
          top: Math.min(MT.top, cT.top),
          right: Math.max(MT.right, cT.right),
          bottom: Math.max(MT.bottom, cT.bottom)
        });
        let KT = fc(this.view),
          OT = {
            left: MT.left - KT.left,
            top: MT.top - KT.top,
            right: MT.right + KT.right,
            bottom: MT.bottom + KT.bottom
          },
          {
            offsetWidth: yT,
            offsetHeight: fT
          } = this.view.scrollDOM;
        if (function(TT, kT, cT, lT, MT, KT, OT, yT) {
            let fT = TT.ownerDocument,
              xT = fT.defaultView || window;
            for (let IT = TT, AT = !1; IT && !AT;)
              if (1 == IT.nodeType) {
                let TT, CT = IT == fT.body,
                  jT = 1,
                  vT = 1;
                if (CT) TT = pT(xT);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(IT).position) && (AT = !0), IT.scrollHeight <= IT.clientHeight && IT.scrollWidth <= IT.clientWidth) {
                    IT = IT.assignedSlot || IT.parentNode;
                    continue
                  }
                  let kT = IT.getBoundingClientRect();
                  ({
                    scaleX: jT,
                    scaleY: vT
                  } = iT(IT, kT)), TT = {
                    left: kT.left,
                    right: kT.left + IT.clientWidth * jT,
                    top: kT.top,
                    bottom: kT.top + IT.clientHeight * vT
                  }
                }
                let tT = 0,
                  hT = 0;
                if ("nearest" == MT) kT.top < TT.top + OT ? (hT = kT.top - (TT.top + OT), cT > 0 && kT.bottom > TT.bottom + hT && (hT = kT.bottom - TT.bottom + OT)) : kT.bottom > TT.bottom - OT && (hT = kT.bottom - TT.bottom + OT, cT < 0 && kT.top - hT < TT.top && (hT = kT.top - (TT.top + OT)));
                else {
                  let lT = kT.bottom - kT.top,
                    KT = TT.bottom - TT.top;
                  hT = ("center" == MT && lT <= KT ? kT.top + lT / 2 - KT / 2 : "start" == MT || "center" == MT && cT < 0 ? kT.top - OT : kT.bottom - KT + OT) - TT.top
                }
                if ("nearest" == lT ? kT.left < TT.left + KT ? (tT = kT.left - (TT.left + KT), cT > 0 && kT.right > TT.right + tT && (tT = kT.right - TT.right + KT)) : kT.right > TT.right - KT && (tT = kT.right - TT.right + KT, cT < 0 && kT.left < TT.left + tT && (tT = kT.left - (TT.left + KT))) : tT = ("center" == lT ? kT.left + (kT.right - kT.left) / 2 - (TT.right - TT.left) / 2 : "start" == lT == yT ? kT.left - KT : kT.right - (TT.right - TT.left) + KT) - TT.left, tT || hT)
                  if (CT) xT.scrollBy(tT, hT);
                  else {
                    let TT = 0,
                      cT = 0;
                    if (hT) {
                      let TT = IT.scrollTop;
                      IT.scrollTop += hT / vT, cT = (IT.scrollTop - TT) * vT
                    }
                    if (tT) {
                      let kT = IT.scrollLeft;
                      IT.scrollLeft += tT / jT, TT = (IT.scrollLeft - kT) * jT
                    }
                    kT = {
                      left: kT.left - TT,
                      top: kT.top - cT,
                      right: kT.right - TT,
                      bottom: kT.bottom - cT
                    }, TT && Math.abs(TT - tT) < 1 && (lT = "nearest"), cT && Math.abs(cT - hT) < 1 && (MT = "nearest")
                  } if (CT) break;
                (kT.top < TT.top || kT.bottom > TT.bottom || kT.left < TT.left || kT.right > TT.right) && (kT = {
                  left: Math.max(kT.left, TT.left),
                  right: Math.min(kT.right, TT.right),
                  top: Math.max(kT.top, TT.top),
                  bottom: Math.min(kT.bottom, TT.bottom)
                }), IT = IT.assignedSlot || IT.parentNode
              } else {
                if (11 != IT.nodeType) break;
                IT = IT.host
              }
          }(this.view.scrollDOM, OT, lT.head < lT.anchor ? -1 : 1, TT.x, TT.y, Math.max(Math.min(TT.xMargin, yT), -yT), Math.max(Math.min(TT.yMargin, fT), -fT), this.view.textDirection == xk.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (MT.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || MT.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let TT = this.view.docView.lineAt(lT.head, 1);
          TT && TT.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(TT) {
        let kT = TT => TT.isWidget() || TT.children.some(kT);
        return kT(this.tile.resolveBlock(TT, 1).tile)
      }
      destroy() {
        uc(this.tile)
      }
    }

    function uc(TT, kT) {
      let cT = null === kT || void 0 === kT ? void 0 : kT.get(TT);
      if (1 != cT) {
        null == cT && TT.destroy();
        for (let cT of TT.children) uc(cT, kT)
      }
    }

    function Xc(TT, kT) {
      let cT = TT.observer.selectionRange;
      if (!cT.focusNode) return null;
      let lT = Ok(cT.focusNode, cT.focusOffset),
        MT = yk(cT.focusNode, cT.focusOffset),
        KT = lT || MT;
      if (MT && lT && MT.node != lT.node) {
        let kT = jc.get(MT.node);
        if (!kT || kT.isText() && kT.text != MT.node.nodeValue) KT = MT;
        else if (TT.docView.lastCompositionAfterCursor) {
          let TT = jc.get(lT.node);
          !TT || TT.isText() && TT.text != lT.node.nodeValue || (KT = MT)
        }
      }
      if (TT.docView.lastCompositionAfterCursor = KT != lT, !KT) return null;
      let OT = kT - KT.offset;
      return {
        from: OT,
        to: OT + KT.node.nodeValue.length,
        node: KT.node
      }
    }
    let dc = class {
      constructor() {
        this.changes = []
      }
      compareRange(TT, kT) {
        ZT(TT, kT, this.changes)
      }
      comparePoint(TT, kT) {
        ZT(TT, kT, this.changes)
      }
      boundChange(TT) {
        ZT(TT, TT, this.changes)
      }
    };
    class Lc {
      constructor() {
        this.changes = []
      }
      compareRange(TT, kT) {
        ZT(TT, kT, this.changes)
      }
      comparePoint() {}
      boundChange(TT) {
        ZT(TT, TT, this.changes)
      }
    }
    class Rc extends JT {
      constructor(TT) {
        super(), this.height = TT
      }
      toDOM() {
        let TT = document.createElement("div");
        return TT.className = "cm-gap", this.updateDOM(TT), TT
      }
      eq(TT) {
        return TT.height == this.height
      }
      updateDOM(TT) {
        return TT.style.height = this.height + "px", !0
      }
      get editable() {
        return !0
      }
      get estimatedHeight() {
        return this.height
      }
      ignoreEvent() {
        return !1
      }
    }

    function gc(TT, kT, cT) {
      let lT = TT.lineBlockAt(kT);
      if (Array.isArray(lT.type)) {
        let TT;
        for (let MT of lT.type) {
          if (MT.from > kT) break;
          if (!(MT.to < kT)) {
            if (MT.from < kT && MT.to > kT) return MT;
            TT && (MT.type != oT.Text || TT.type == MT.type && !(cT < 0 ? MT.from < kT : MT.to > kT)) || (TT = MT)
          }
        }
        return TT || lT
      }
      return lT
    }

    function Uc(TT, kT, cT, lT) {
      let MT = TT.state.doc.lineAt(kT.head),
        KT = TT.bidiSpans(MT),
        OT = TT.textDirectionAt(MT.from);
      for (let yT = kT, fT = null;;) {
        let kT = bk(MT, KT, OT, yT, cT),
          xT = mk;
        if (!kT) {
          if (MT.number == (cT ? TT.state.doc.lines : 1)) return yT;
          xT = "\n", MT = TT.state.doc.line(MT.number + (cT ? 1 : -1)), KT = TT.bidiSpans(MT), kT = TT.visualLineSide(MT, !cT)
        }
        if (fT) {
          if (!fT(xT)) return yT
        } else {
          if (!lT) return kT;
          fT = lT(xT)
        }
        yT = kT
      }
    }

    function Yc(TT, kT, cT) {
      for (;;) {
        let lT = 0;
        for (let MT of TT) MT.between(kT - 1, kT + 1, ((TT, MT, KT) => {
          if (kT > TT && kT < MT) {
            let KT = lT || cT || (kT - TT < MT - kT ? -1 : 1);
            kT = KT < 0 ? TT : MT, lT = KT
          }
        }));
        if (!lT) return kT
      }
    }

    function Bc(TT, kT) {
      let cT = null;
      for (let MT = 0; MT < kT.qt.length; MT++) {
        let KT = kT.qt[MT],
          OT = null;
        if (KT.empty) {
          let kT = Yc(TT, KT.from, 0);
          kT != KT.from && (OT = lT.j.cursor(kT, -1))
        } else {
          let kT = Yc(TT, KT.from, -1),
            cT = Yc(TT, KT.to, 1);
          kT == KT.from && cT == KT.to || (OT = lT.j.range(KT.from == KT.anchor ? kT : cT, KT.from == KT.head ? kT : cT))
        }
        OT && (cT || (cT = kT.qt.slice()), cT[MT] = OT)
      }
      return cT ? lT.j.create(cT, kT.mainIndex) : kT
    }

    function Wc(TT, kT, cT) {
      let MT = Yc(TT.state.facet(Mc).map((kT => kT(TT))), cT.from, kT.head > cT.from ? -1 : 1);
      return MT == cT.from ? cT : lT.j.cursor(MT, MT < cT.from ? 1 : -1)
    }
    class nc {
      constructor(TT, kT) {
        this.pos = TT, this.assoc = kT
      }
    }

    function pc(TT, kT, cT, MT) {
      let KT, OT = TT.contentDOM.getBoundingClientRect(),
        yT = OT.top + TT.viewState.paddingTop,
        {
          x: fT,
          y: xT
        } = kT,
        IT = xT - yT;
      for (;;) {
        if (IT < 0) return new nc(0, 1);
        if (IT > TT.viewState.docHeight) return new nc(TT.state.doc.length, -1);
        if (KT = TT.elementAtHeight(IT), null == MT) break;
        if (KT.type == oT.Text) {
          if (MT < 0 ? KT.to < TT.viewport.from : KT.from > TT.viewport.to) break;
          let kT = TT.docView.coordsAt(MT < 0 ? KT.from : KT.to, MT > 0 ? -1 : 1);
          if (kT && (MT < 0 ? kT.top <= IT + yT : kT.bottom >= IT + yT)) break
        }
        let kT = TT.viewState.heightOracle.textHeight / 2;
        IT = MT > 0 ? KT.bottom + kT : KT.top - kT
      }
      if (TT.viewport.from >= KT.to || TT.viewport.to <= KT.from) {
        if (cT) return null;
        if (KT.type == oT.Text) {
          let kT = function(TT, kT, cT, MT, KT) {
            let OT = Math.round((MT - kT.left) * TT.defaultCharacterWidth);
            if (TT.lineWrapping && cT.height > 1.5 * TT.defaultLineHeight) {
              let kT = TT.viewState.heightOracle.textHeight;
              OT += Math.floor((KT - cT.top - .5 * (TT.defaultLineHeight - kT)) / kT) * TT.viewState.heightOracle.lineLength
            }
            let yT = TT.state.sliceDoc(cT.from, cT.to);
            return cT.from + (0, lT.Y)(yT, OT, TT.state.tabSize)
          }(TT, OT, KT, fT, xT);
          return new nc(kT, kT == KT.from ? 1 : -1)
        }
      }
      if (KT.type != oT.Text) return IT < (KT.top + KT.bottom) / 2 ? new nc(KT.from, 1) : new nc(KT.to, -1);
      let AT = TT.docView.lineAt(KT.from, 2);
      return AT && AT.length == KT.length || (AT = TT.docView.lineAt(KT.from, -2)), new ic(TT, fT, xT, TT.textDirectionAt(KT.from)).scanTile(AT, KT.from)
    }
    class ic {
      constructor(TT, kT, cT, lT) {
        this.view = TT, this.x = kT, this.y = cT, this.baseDir = lT, this.line = null, this.spans = null
      }
      bidiSpansAt(TT) {
        return (!this.line || this.line.from > TT || this.line.to < TT) && (this.line = this.view.state.doc.lineAt(TT), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(TT, kT) {
        let {
          line: cT,
          spans: lT
        } = this.bidiSpansAt(TT);
        return lT[Sk.find(lT, TT - cT.from, -1, kT)].level == this.baseDir
      }
      dirAt(TT, kT) {
        let {
          line: cT,
          spans: lT
        } = this.bidiSpansAt(TT);
        return lT[Sk.find(lT, TT - cT.from, -1, kT)].dir
      }
      bidiIn(TT, kT) {
        let {
          spans: cT,
          line: lT
        } = this.bidiSpansAt(TT);
        return cT.length > 1 || cT.length && (cT[0].level != this.baseDir || cT[0].to + lT.from < kT)
      }
      scan(TT, kT) {
        let cT, lT, MT, KT = 0,
          OT = TT.length - 1,
          yT = new Set,
          fT = this.bidiIn(TT[0], TT[OT]),
          xT = -1,
          IT = 1e9;
        TT: for (; KT < OT;) {
          let AT = OT - KT,
            CT = KT + OT >> 1;
          kT: if (yT.has(CT)) {
            let TT = KT + Math.floor(Math.random() * AT);
            for (let kT = 0; kT < AT; kT++) {
              if (!yT.has(TT)) {
                CT = TT;
                break kT
              }
              TT++, TT == OT && (TT = KT)
            }
            break TT
          } yT.add(CT);
          let jT = kT(CT);
          if (jT)
            for (let kT = 0; kT < jT.length; kT++) {
              let yT = jT[kT],
                AT = 0;
              if (!(0 == yT.width && jT.length > 1)) {
                if (yT.bottom < this.y)(!cT || cT.bottom < yT.bottom) && (cT = yT), AT = 1;
                else if (yT.top > this.y)(!lT || lT.top > yT.top) && (lT = yT), AT = -1;
                else {
                  let TT = yT.left > this.x ? this.x - yT.left : yT.right < this.x ? this.x - yT.right : 0,
                    kT = Math.abs(TT);
                  kT < IT && (xT = CT, IT = kT, MT = yT), TT && (AT = TT < 0 == (this.baseDir == xk.LTR) ? -1 : 1)
                } - 1 != AT || fT && !this.baseDirAt(TT[CT], 1) ? 1 != AT || fT && !this.baseDirAt(TT[CT + 1], -1) || (KT = CT + 1) : OT = CT
              }
            }
        }
        if (!MT) {
          let MT = cT && (!lT || this.y - cT.bottom < lT.top - this.y) ? cT : lT;
          return this.y = (MT.top + MT.bottom) / 2, this.scan(TT, kT)
        }
        if (IT) {
          if (cT && cT.bottom > MT.top) return this.y = cT.bottom - 1, this.scan(TT, kT);
          if (lT && lT.top < MT.bottom) return this.y = lT.top + 1, this.scan(TT, kT)
        }
        let AT = (fT ? this.dirAt(TT[xT], 1) : this.baseDir) == xk.LTR;
        return {
          i: xT,
          after: this.x > (MT.left + MT.right) / 2 == AT
        }
      }
      scanText(TT, kT) {
        let cT = [];
        for (let KT = 0; KT < TT.length; KT = (0, lT.W)(TT.text, KT)) cT.push(kT + KT);
        cT.push(kT + TT.length);
        let MT = this.scan(cT, (lT => {
          let MT = cT[lT] - kT,
            KT = cT[lT + 1] - kT;
          return lk(TT.dom, MT, KT).getClientRects()
        }));
        return MT.after ? new nc(cT[MT.i + 1], -1) : new nc(cT[MT.i], 1)
      }
      scanTile(TT, kT) {
        if (!TT.length) return new nc(kT, 1);
        if (1 == TT.children.length) {
          let cT = TT.children[0];
          if (cT.isText()) return this.scanText(cT, kT);
          if (cT.isComposite()) return this.scanTile(cT, kT)
        }
        let cT = [kT];
        for (let OT = 0, yT = kT; OT < TT.children.length; OT++) cT.push(yT += TT.children[OT].length);
        let lT = this.scan(cT, (kT => {
            let cT = TT.children[kT];
            return 48 & cT.flags ? null : (1 == cT.dom.nodeType ? cT.dom : lk(cT.dom, 0, cT.length)).getClientRects()
          })),
          MT = TT.children[lT.i],
          KT = cT[lT.i];
        return MT.isText() ? this.scanText(MT, KT) : MT.isComposite() ? this.scanTile(MT, KT) : lT.after ? new nc(cT[lT.i + 1], -1) : new nc(KT, 1)
      }
    }
    const qc = "\uffff";
    class sc {
      constructor(TT, kT) {
        this.points = TT, this.view = kT, this.text = "", this.lineSeparator = kT.state.facet(lT.l.lineSeparator)
      }
      append(TT) {
        this.text += TT
      }
      lineBreak() {
        this.text += qc
      }
      readRange(TT, kT) {
        if (!TT) return this;
        let cT = TT.parentNode;
        for (let lT = TT;;) {
          this.findPointBefore(cT, lT);
          let TT = this.text.length;
          this.readNode(lT);
          let MT = jc.get(lT),
            KT = lT.nextSibling;
          if (KT == kT) {
            (null === MT || void 0 === MT ? void 0 : MT.breakAfter) && !KT && cT != this.view.contentDOM && this.lineBreak();
            break
          }
          let OT = jc.get(KT);
          (MT && OT ? MT.breakAfter : (MT ? MT.breakAfter : YT(lT)) || YT(KT) && ("BR" != lT.nodeName || (null === MT || void 0 === MT ? void 0 : MT.isWidget())) && this.text.length > TT) && !kl(KT, kT) && this.lineBreak(), lT = KT
        }
        return this.findPointBefore(cT, kT), this
      }
      readTextNode(TT) {
        let kT = TT.nodeValue;
        for (let cT of this.points) cT.node == TT && (cT.pos = this.text.length + Math.min(cT.offset, kT.length));
        for (let cT = 0, lT = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let MT, KT = -1,
            OT = 1;
          if (this.lineSeparator ? (KT = kT.indexOf(this.lineSeparator, cT), OT = this.lineSeparator.length) : (MT = lT.exec(kT)) && (KT = MT.index, OT = MT[0].length), this.append(kT.slice(cT, KT < 0 ? kT.length : KT)), KT < 0) break;
          if (this.lineBreak(), OT > 1)
            for (let kT of this.points) kT.node == TT && kT.pos > this.text.length && (kT.pos -= OT - 1);
          cT = KT + OT
        }
      }
      readNode(TT) {
        let kT = jc.get(TT),
          cT = kT && kT.overrideDOMText;
        if (null != cT) {
          this.findPointInside(TT, cT.length);
          for (let TT = cT.iter(); !TT.next().done;) TT.lineBreak ? this.lineBreak() : this.append(TT.value)
        } else 3 == TT.nodeType ? this.readTextNode(TT) : "BR" == TT.nodeName ? TT.nextSibling && this.lineBreak() : 1 == TT.nodeType && this.readRange(TT.firstChild, null)
      }
      findPointBefore(TT, kT) {
        for (let cT of this.points) cT.node == TT && TT.childNodes[cT.offset] == kT && (cT.pos = this.text.length)
      }
      findPointInside(TT, kT) {
        for (let cT of this.points)(3 == TT.nodeType ? cT.node == TT : TT.contains(cT.node)) && (cT.pos = this.text.length + (Tl(TT, cT.node, cT.offset) ? kT : 0))
      }
    }

    function Tl(TT, kT, cT) {
      for (;;) {
        if (!kT || cT < WT(kT)) return !1;
        if (kT == TT) return !0;
        cT = UT(kT) + 1, kT = kT.parentNode
      }
    }

    function kl(TT, kT) {
      let cT;
      for (; TT != kT && TT; TT = TT.nextSibling) {
        let kT = jc.get(TT);
        if (!(null === kT || void 0 === kT ? void 0 : kT.isWidget())) return !1;
        kT && (cT || (cT = [])).push(kT)
      }
      if (cT)
        for (let lT of cT) {
          let TT = lT.overrideDOMText;
          if (null === TT || void 0 === TT ? void 0 : TT.length) return !1
        }
      return !0
    }
    class cl {
      constructor(TT, kT) {
        this.node = TT, this.offset = kT, this.pos = -1
      }
    }
    class ll {
      constructor(TT, kT, cT, MT) {
        this.typeOver = MT, this.bounds = null, this.text = "", this.domChanged = kT > -1;
        let {
          impreciseHead: KT,
          impreciseAnchor: OT
        } = TT.docView, yT = TT.state.selection;
        if (TT.state.readOnly && kT > -1) this.newSel = null;
        else if (kT > -1 && (this.bounds = Ml(TT.docView.tile, kT, cT, 0))) {
          let kT = KT || OT ? [] : function(TT) {
              let kT = [];
              if (TT.root.activeElement != TT.contentDOM) return kT;
              let {
                anchorNode: cT,
                anchorOffset: lT,
                focusNode: MT,
                focusOffset: KT
              } = TT.observer.selectionRange;
              cT && (kT.push(new cl(cT, lT)), MT == cT && KT == lT || kT.push(new cl(MT, KT)));
              return kT
            }(TT),
            cT = new sc(kT, TT);
          cT.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = cT.text, this.newSel = function(TT, kT) {
            if (0 == TT.length) return null;
            let cT = TT[0].pos,
              MT = 2 == TT.length ? TT[1].pos : cT;
            return cT > -1 && MT > -1 ? lT.j.single(cT + kT, MT + kT) : null
          }(kT, this.bounds.from)
        } else {
          let kT = TT.observer.selectionRange,
            cT = KT && KT.node == kT.focusNode && KT.offset == kT.focusOffset || !dT(TT.contentDOM, kT.focusNode) ? yT.main.head : TT.docView.posFromDOM(kT.focusNode, kT.focusOffset),
            MT = OT && OT.node == kT.anchorNode && OT.offset == kT.anchorOffset || !dT(TT.contentDOM, kT.anchorNode) ? yT.main.anchor : TT.docView.posFromDOM(kT.anchorNode, kT.anchorOffset),
            fT = TT.viewport;
          if ((rT.ios || rT.chrome) && yT.main.empty && cT != MT && (fT.from > 0 || fT.to < TT.state.doc.length)) {
            let kT = Math.min(cT, MT),
              lT = Math.max(cT, MT),
              KT = fT.from - kT,
              OT = fT.to - lT;
            0 != KT && 1 != KT && 0 != kT || 0 != OT && -1 != OT && lT != TT.state.doc.length || (cT = 0, MT = TT.state.doc.length)
          }
          if (TT.inputState.composing > -1 && yT.qt.length > 1) this.newSel = yT.replaceRange(lT.j.range(MT, cT));
          else if (TT.lineWrapping && MT == cT && (!yT.main.empty || yT.main.head != cT) && TT.inputState.lastTouchTime > Date.now() - 100) {
            let kT = TT.coordsAtPos(cT, -1),
              MT = 0;
            kT && (MT = TT.inputState.lastTouchY <= kT.bottom ? -1 : 1), this.newSel = lT.j.create([lT.j.cursor(cT, MT)])
          } else this.newSel = lT.j.single(MT, cT)
        }
      }
    }

    function Ml(TT, kT, cT, lT) {
      if (TT.isComposite()) {
        let MT = -1,
          KT = -1,
          OT = -1,
          yT = -1;
        for (let fT = 0, xT = lT, IT = lT; fT < TT.children.length; fT++) {
          let lT = TT.children[fT],
            AT = xT + lT.length;
          if (xT < kT && AT > cT) return Ml(lT, kT, cT, xT);
          if (AT >= kT && -1 == MT && (MT = fT, KT = xT), xT > cT && lT.dom.parentNode == TT.dom) {
            OT = fT, yT = IT;
            break
          }
          IT = AT, xT = AT + lT.breakAfter
        }
        return {
          from: KT,
          to: yT < 0 ? lT + TT.length : yT,
          startDOM: (MT ? TT.children[MT - 1].dom.nextSibling : null) || TT.dom.firstChild,
          endDOM: OT < TT.children.length && OT >= 0 ? TT.children[OT].dom : null
        }
      }
      return TT.isText() ? {
        from: lT,
        to: lT + TT.length,
        startDOM: TT.dom,
        endDOM: TT.dom.nextSibling
      } : null
    }

    function Kl(TT, kT) {
      let cT, {
          newSel: MT
        } = kT,
        {
          state: KT
        } = TT,
        OT = KT.selection.main,
        yT = TT.inputState.lastKeyTime > Date.now() - 100 ? TT.inputState.lastKeyCode : -1;
      if (kT.bounds) {
        let {
          from: TT,
          to: MT
        } = kT.bounds, fT = OT.from, xT = null;
        (8 === yT || rT.android && kT.text.length < MT - TT) && (fT = OT.to, xT = "end");
        let IT, AT, CT = KT.doc.sliceString(TT, MT, qc);
        !OT.empty && OT.from >= TT && OT.to <= MT && (kT.typeOver || CT != kT.text) && CT.slice(0, OT.from - TT) == kT.text.slice(0, OT.from - TT) && CT.slice(OT.to - TT) == kT.text.slice(IT = kT.text.length - (CT.length - (OT.to - TT))) ? cT = {
          from: OT.from,
          to: OT.to,
          insert: lT.I.of(kT.text.slice(OT.from - TT, IT).split(qc))
        } : (AT = yl(CT, kT.text, fT - TT, xT)) && (rT.chrome && 13 == yT && AT.toB == AT.from + 2 && kT.text.slice(AT.from, AT.toB) == qc + qc && AT.toB--, cT = {
          from: TT + AT.from,
          to: TT + AT.toA,
          insert: lT.I.of(kT.text.slice(AT.from, AT.toB).split(qc))
        })
      } else MT && (!TT.hasFocus && KT.facet(Wk) || fl(MT, OT)) && (MT = null);
      if (!cT && !MT) return !1;
      if ((rT.mac || rT.android) && cT && cT.from == cT.to && cT.from == OT.head - 1 && /^\. ?$/.test(cT.insert.toString()) && "off" == TT.contentDOM.getAttribute("autocorrect") ? (MT && 2 == cT.insert.length && (MT = lT.j.single(MT.main.anchor - 1, MT.main.head - 1)), cT = {
          from: cT.from,
          to: cT.to,
          insert: lT.I.of([cT.insert.toString().replace(".", " ")])
        }) : KT.doc.lineAt(OT.from).to < OT.to && TT.docView.lineHasWidget(OT.to) && TT.inputState.insertingTextAt > Date.now() - 50 ? cT = {
          from: OT.from,
          to: OT.to,
          insert: KT.toText(TT.inputState.insertingText)
        } : rT.chrome && cT && cT.from == cT.to && cT.from == OT.head && "\n " == cT.insert.toString() && TT.lineWrapping && (MT && (MT = lT.j.single(MT.main.anchor - 1, MT.main.head - 1)), cT = {
          from: OT.from,
          to: OT.to,
          insert: lT.I.of([" "])
        }), cT) return Ol(TT, cT, MT, yT);
      if (MT && !fl(MT, OT)) {
        let kT = !1,
          cT = "select";
        return TT.inputState.lastSelectionTime > Date.now() - 50 && ("select" == TT.inputState.lastSelectionOrigin && (kT = !0), cT = TT.inputState.lastSelectionOrigin, "select.pointer" == cT && (MT = Bc(KT.facet(Mc).map((kT => kT(TT))), MT))), TT.dispatch({
          selection: MT,
          scrollIntoView: kT,
          userEvent: cT
        }), !0
      }
      return !1
    }

    function Ol(TT, kT, cT) {
      let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (rT.ios && TT.inputState.flushIOSKey(kT)) return !0;
      let KT = TT.state.selection.main;
      if (rT.android && (kT.to == KT.to && (kT.from == KT.from || kT.from == KT.from - 1 && " " == TT.state.sliceDoc(kT.from, KT.from)) && 1 == kT.insert.length && 2 == kT.insert.lines && Mk(TT.contentDOM, "Enter", 13) || (kT.from == KT.from - 1 && kT.to == KT.to && 0 == kT.insert.length || 8 == MT && kT.insert.length < kT.to - kT.from && kT.to > KT.head) && Mk(TT.contentDOM, "Backspace", 8) || kT.from == KT.from && kT.to == KT.to + 1 && 0 == kT.insert.length && Mk(TT.contentDOM, "Delete", 46))) return !0;
      let OT, yT = kT.insert.toString();
      TT.inputState.composing >= 0 && TT.inputState.composing++;
      let fT = () => OT || (OT = function(TT, kT, cT) {
        let MT, KT = TT.state,
          OT = KT.selection.main,
          yT = -1;
        if (kT.from == kT.to && kT.from < OT.from || kT.from > OT.to) {
          let cT = kT.from < OT.from ? -1 : 1,
            lT = cT < 0 ? OT.from : OT.to,
            MT = Yc(KT.facet(Mc).map((kT => kT(TT))), lT, cT);
          kT.from == MT && (yT = MT)
        }
        if (yT > -1) MT = {
          changes: kT,
          selection: lT.j.cursor(kT.from + kT.insert.length, -1)
        };
        else if (kT.from >= OT.from && kT.to <= OT.to && kT.to - kT.from >= (OT.to - OT.from) / 3 && (!cT || cT.main.empty && cT.main.from == kT.from + kT.insert.length) && TT.inputState.composing < 0) {
          let cT = OT.from < kT.from ? KT.sliceDoc(OT.from, kT.from) : "",
            lT = OT.to > kT.to ? KT.sliceDoc(kT.to, OT.to) : "";
          MT = KT.replaceSelection(TT.state.toText(cT + kT.insert.sliceString(0, void 0, TT.state.lineBreak) + lT))
        } else {
          let yT = KT.changes(kT),
            fT = cT && cT.main.to <= yT.newLength ? cT.main : void 0;
          if (KT.selection.qt.length > 1 && (TT.inputState.composing >= 0 || TT.inputState.compositionPendingChange) && kT.to <= OT.to + 10 && kT.to >= OT.to - 10) {
            let xT, IT = TT.state.sliceDoc(kT.from, kT.to),
              AT = cT && Xc(TT, cT.main.head);
            if (AT) {
              let TT = kT.insert.length - (kT.to - kT.from);
              xT = {
                from: AT.from,
                to: AT.to - TT
              }
            } else xT = TT.state.doc.lineAt(OT.head);
            let CT = OT.to - kT.to;
            MT = KT.changeByRange((cT => {
              if (cT.from == OT.from && cT.to == OT.to) return {
                changes: yT,
                range: fT || cT.map(yT)
              };
              let MT = cT.to - CT,
                AT = MT - IT.length;
              if (TT.state.sliceDoc(AT, MT) != IT || MT >= xT.from && AT <= xT.to) return {
                range: cT
              };
              let jT = KT.changes({
                  from: AT,
                  to: MT,
                  insert: kT.insert
                }),
                vT = cT.to - OT.to;
              return {
                changes: jT,
                range: fT ? lT.j.range(Math.max(0, fT.anchor + vT), Math.max(0, fT.head + vT)) : cT.map(jT)
              }
            }))
          } else MT = {
            changes: yT,
            selection: fT && KT.selection.replaceRange(fT)
          }
        }
        let fT = "input.type";
        (TT.composing || TT.inputState.compositionPendingChange && TT.inputState.compositionEndedAt > Date.now() - 50) && (TT.inputState.compositionPendingChange = !1, fT += ".compose", TT.inputState.compositionFirstChange && (fT += ".start", TT.inputState.compositionFirstChange = !1));
        return KT.update(MT, {
          userEvent: fT,
          scrollIntoView: !0
        })
      }(TT, kT, cT));
      return TT.state.facet(Ek).some((cT => cT(TT, kT.from, kT.to, yT, fT))) || TT.dispatch(fT()), !0
    }

    function yl(TT, kT, cT, lT) {
      let MT = Math.min(TT.length, kT.length),
        KT = 0;
      for (; KT < MT && TT.charCodeAt(KT) == kT.charCodeAt(KT);) KT++;
      if (KT == MT && TT.length == kT.length) return null;
      let OT = TT.length,
        yT = kT.length;
      for (; OT > 0 && yT > 0 && TT.charCodeAt(OT - 1) == kT.charCodeAt(yT - 1);) OT--, yT--;
      if ("end" == lT) {
        cT -= OT + Math.max(0, KT - Math.min(OT, yT)) - KT
      }
      if (OT < KT && TT.length < kT.length) {
        KT -= cT <= KT && cT >= OT ? KT - cT : 0, yT = KT + (yT - OT), OT = KT
      } else if (yT < KT) {
        KT -= cT <= KT && cT >= yT ? KT - cT : 0, OT = KT + (OT - yT), yT = KT
      }
      return {
        from: KT,
        toA: OT,
        toB: yT
      }
    }

    function fl(TT, kT) {
      return kT.head == TT.main.head && kT.anchor == TT.main.anchor
    }
    class xl {
      setSelectionOrigin(TT) {
        this.lastSelectionOrigin = TT, this.lastSelectionTime = Date.now()
      }
      constructor(TT) {
        this.view = TT, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = TT.hasFocus, rT.safari && TT.contentDOM.addEventListener("input", (() => null)), rT.gecko && function(TT) {
          Gl.has(TT) || (Gl.add(TT), TT.addEventListener("copy", (() => {})), TT.addEventListener("cut", (() => {})))
        }(TT.contentDOM.ownerDocument)
      }
      handleEvent(TT) {
        (function(TT, kT) {
          if (!kT.bubbles) return !0;
          if (kT.defaultPrevented) return !1;
          for (let cT, lT = kT.target; lT != TT.contentDOM; lT = lT.parentNode)
            if (!lT || 11 == lT.nodeType || (cT = jc.get(lT)) && cT.isWidget() && !cT.isHidden && cT.widget.ignoreEvent(kT)) return !1;
          return !0
        })(this.view, TT) && !this.ignoreDuringComposition(TT) && ("keydown" == TT.type && this.keydown(TT) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(TT.type, TT))) : this.runHandlers(TT.type, TT)))
      }
      runHandlers(TT, kT) {
        let cT = this.handlers[TT];
        if (cT) {
          for (let TT of cT.observers) TT(this.view, kT);
          for (let TT of cT.handlers) {
            if (kT.defaultPrevented) break;
            if (TT(this.view, kT)) {
              kT.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(TT) {
        let kT = Al(TT),
          cT = this.handlers,
          lT = this.view.contentDOM;
        for (let MT in kT)
          if ("scroll" != MT) {
            let TT = !kT[MT].handlers.length,
              KT = cT[MT];
            KT && TT != !KT.handlers.length && (lT.removeEventListener(MT, this.handleEvent), KT = null), KT || lT.addEventListener(MT, this.handleEvent, {
              passive: TT
            })
          } for (let MT in cT) "scroll" == MT || kT[MT] || lT.removeEventListener(MT, this.handleEvent);
        this.handlers = kT
      }
      keydown(TT) {
        if (this.lastKeyCode = TT.keyCode, this.lastKeyTime = Date.now(), 9 == TT.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != TT.keyCode && vl.indexOf(TT.keyCode) < 0 && (this.tabFocusMode = -1), rT.android && rT.chrome && !TT.synthetic && (13 == TT.keyCode || 8 == TT.keyCode)) return this.view.observer.delayAndroidKey(TT.key, TT.keyCode), !0;
        let kT;
        return !rT.ios || TT.synthetic || TT.altKey || TT.metaKey || TT.shiftKey || !((kT = Cl.find((kT => kT.keyCode == TT.keyCode))) && !TT.ctrlKey || jl.indexOf(TT.key) > -1 && TT.ctrlKey) ? (229 != TT.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = kT || TT, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(TT) {
        let kT = this.pendingIOSKey;
        return !!kT && (!("Enter" == kT.key && TT && TT.from < TT.to && /^\S+$/.test(TT.insert.toString())) && (this.pendingIOSKey = void 0, Mk(this.view.contentDOM, kT.key, kT.keyCode, kT instanceof KeyboardEvent ? kT : void 0)))
      }
      ignoreDuringComposition(TT) {
        return !(!/^key/.test(TT.type) || TT.synthetic) && (this.composing > 0 || !!(rT.safari && !rT.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(TT) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = TT
      }
      update(TT) {
        this.view.observer.update(TT), this.mouseSelection && this.mouseSelection.update(TT), this.draggedContent && TT.docChanged && (this.draggedContent = this.draggedContent.map(TT.changes)), TT.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function Il(TT, kT) {
      return (cT, lT) => {
        try {
          return kT.call(TT, lT, cT)
        } catch (MT) {
          Bk(cT.state, MT)
        }
      }
    }

    function Al(TT) {
      let kT = Object.create(null);

      function cT(TT) {
        return kT[TT] || (kT[TT] = {
          observers: [],
          handlers: []
        })
      }
      for (let lT of TT) {
        let TT = lT.spec,
          kT = TT && TT.plugin.domEventHandlers,
          MT = TT && TT.plugin.domEventObservers;
        if (kT)
          for (let KT in kT) {
            let TT = kT[KT];
            TT && cT(KT).handlers.push(Il(lT.value, TT))
          }
        if (MT)
          for (let KT in MT) {
            let TT = MT[KT];
            TT && cT(KT).observers.push(Il(lT.value, TT))
          }
      }
      for (let lT in Nl) cT(lT).handlers.push(Nl[lT]);
      for (let lT in Ql) cT(lT).observers.push(Ql[lT]);
      return kT
    }
    const Cl = [{
        key: "Backspace",
        keyCode: 8,
        inputType: "deleteContentBackward"
      }, {
        key: "Enter",
        keyCode: 13,
        inputType: "insertParagraph"
      }, {
        key: "Enter",
        keyCode: 13,
        inputType: "insertLineBreak"
      }, {
        key: "Delete",
        keyCode: 46,
        inputType: "deleteContentForward"
      }],
      jl = "dthko",
      vl = [16, 17, 18, 20, 91, 92, 224, 225];

    function tl(TT) {
      return .7 * Math.max(0, TT) + 8
    }
    class hl {
      constructor(TT, kT, cT, MT) {
        this.view = TT, this.startEvent = kT, this.style = cT, this.mustSelect = MT, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = kT, this.scrollParents = qT(TT.contentDOM), this.atoms = TT.state.facet(Mc).map((kT => kT(TT)));
        let KT = TT.contentDOM.ownerDocument;
        KT.addEventListener("mousemove", this.move = this.move.bind(this)), KT.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = kT.shiftKey, this.multiple = TT.state.facet(lT.l.allowMultipleSelections) && function(TT, kT) {
          let cT = TT.state.facet(Jk);
          return cT.length ? cT[0](kT) : rT.mac ? kT.metaKey : kT.ctrlKey
        }(TT, kT), this.dragging = !(! function(TT, kT) {
          let {
            main: cT
          } = TT.state.selection;
          if (cT.empty) return !1;
          let lT = XT(TT.root);
          if (!lT || 0 == lT.rangeCount) return !0;
          let MT = lT.getRangeAt(0).getClientRects();
          for (let KT = 0; KT < MT.length; KT++) {
            let TT = MT[KT];
            if (TT.left <= kT.clientX && TT.right >= kT.clientX && TT.top <= kT.clientY && TT.bottom >= kT.clientY) return !0
          }
          return !1
        }(TT, kT) || 1 != bl(kT)) && null
      }
      start(TT) {
        !1 === this.dragging && this.select(TT)
      }
      move(TT) {
        if (0 == TT.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (kT = this.startEvent, cT = TT, Math.max(Math.abs(kT.clientX - cT.clientX), Math.abs(kT.clientY - cT.clientY)) < 10)) return;
        var kT, cT;
        this.select(this.lastEvent = TT);
        let lT = 0,
          MT = 0,
          KT = 0,
          OT = 0,
          yT = this.view.win.innerWidth,
          fT = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: KT,
          right: yT
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: OT,
          bottom: fT
        } = this.scrollParents.y.getBoundingClientRect());
        let xT = fc(this.view);
        TT.clientX - xT.left <= KT + 6 ? lT = -tl(KT - TT.clientX) : TT.clientX + xT.right >= yT - 6 && (lT = tl(TT.clientX - yT)), TT.clientY - xT.top <= OT + 6 ? MT = -tl(OT - TT.clientY) : TT.clientY + xT.bottom >= fT - 6 && (MT = tl(TT.clientY - fT)), this.setScrollSpeed(lT, MT)
      }
      up(TT) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || TT.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let TT = this.view.contentDOM.ownerDocument;
        TT.removeEventListener("mousemove", this.move), TT.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(TT, kT) {
        this.scrollSpeed = {
          x: TT,
          y: kT
        }, TT || kT ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: TT,
          y: kT
        } = this.scrollSpeed;
        TT && this.scrollParents.x && (this.scrollParents.x.scrollLeft += TT, TT = 0), kT && this.scrollParents.y && (this.scrollParents.y.scrollTop += kT, kT = 0), (TT || kT) && this.view.win.scrollBy(TT, kT), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(TT) {
        let {
          view: kT
        } = this, cT = Bc(this.atoms, this.style.get(TT, this.extend, this.multiple));
        !this.mustSelect && cT.eq(kT.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: cT,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(TT) {
        TT.transactions.some((TT => TT.isUserEvent("input.type"))) ? this.destroy() : this.style.update(TT) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const Nl = Object.create(null),
      Ql = Object.create(null),
      Sl = rT.ie && rT.ie_version < 15 || rT.ios && rT.webkit_version < 604;

    function Dl(TT, kT, cT) {
      for (let lT of TT.facet(kT)) cT = lT(cT, TT);
      return cT
    }

    function al(TT, kT) {
      kT = Dl(TT.state, uk, kT);
      let cT, {
          state: MT
        } = TT,
        KT = 1,
        OT = MT.toText(kT),
        yT = OT.lines == MT.selection.qt.length;
      if (null != Jl && MT.selection.qt.every((TT => TT.empty)) && Jl == OT.toString()) {
        let TT = -1;
        cT = MT.changeByRange((cT => {
          let fT = MT.doc.lineAt(cT.from);
          if (fT.from == TT) return {
            range: cT
          };
          TT = fT.from;
          let xT = MT.toText((yT ? OT.line(KT++).text : kT) + MT.lineBreak);
          return {
            changes: {
              from: fT.from,
              insert: xT
            },
            range: lT.j.cursor(cT.from + xT.length)
          }
        }))
      } else cT = yT ? MT.changeByRange((TT => {
        let kT = OT.line(KT++);
        return {
          changes: {
            from: TT.from,
            to: TT.to,
            insert: kT.text
          },
          range: lT.j.cursor(TT.from + kT.length)
        }
      })) : MT.replaceSelection(OT);
      TT.dispatch(cT, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function Fl(TT, kT, cT, MT) {
      if (1 == MT) return lT.j.cursor(kT, cT);
      if (2 == MT) return function(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          MT = TT.charCategorizer(kT),
          KT = TT.doc.lineAt(kT),
          OT = kT - KT.from;
        if (0 == KT.length) return lT.j.cursor(kT);
        0 == OT ? cT = 1 : OT == KT.length && (cT = -1);
        let yT = OT,
          fT = OT;
        cT < 0 ? yT = (0, lT.W)(KT.text, OT, !1) : fT = (0, lT.W)(KT.text, OT);
        let xT = MT(KT.text.slice(yT, fT));
        for (; yT > 0;) {
          let TT = (0, lT.W)(KT.text, yT, !1);
          if (MT(KT.text.slice(TT, yT)) != xT) break;
          yT = TT
        }
        for (; fT < KT.length;) {
          let TT = (0, lT.W)(KT.text, fT);
          if (MT(KT.text.slice(fT, TT)) != xT) break;
          fT = TT
        }
        return lT.j.range(yT + KT.from, fT + KT.from)
      }(TT.state, kT, cT);
      {
        let MT = TT.docView.lineAt(kT, cT),
          KT = TT.state.doc.lineAt(MT ? MT.posAtEnd : kT),
          OT = MT ? MT.posAtStart : KT.from,
          yT = MT ? MT.posAtEnd : KT.to;
        return yT < TT.state.doc.length && yT == KT.to && yT++, lT.j.range(OT, yT)
      }
    }
    Ql.scroll = TT => {
      TT.inputState.lastScrollTop = TT.scrollDOM.scrollTop, TT.inputState.lastScrollLeft = TT.scrollDOM.scrollLeft
    }, Ql.wheel = Ql.mousewheel = TT => {
      TT.inputState.lastWheelEvent = Date.now()
    }, Nl.keydown = (TT, kT) => (TT.inputState.setSelectionOrigin("select"), 27 == kT.keyCode && 0 != TT.inputState.tabFocusMode && (TT.inputState.tabFocusMode = Date.now() + 2e3), !1), Ql.touchstart = (TT, kT) => {
      let cT = TT.inputState,
        lT = kT.targetTouches[0];
      cT.lastTouchTime = Date.now(), lT && (cT.lastTouchX = lT.clientX, cT.lastTouchY = lT.clientY), cT.setSelectionOrigin("select.pointer")
    }, Ql.touchmove = TT => {
      TT.inputState.setSelectionOrigin("select.pointer")
    }, Nl.mousedown = (TT, kT) => {
      if (TT.observer.flush(), TT.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let cT = null;
      for (let lT of TT.state.facet(ek))
        if (cT = lT(TT, kT), cT) break;
      if (cT || 0 != kT.button || (cT = function(TT, kT) {
          let cT = TT.posAndSideAtCoords({
              x: kT.clientX,
              y: kT.clientY
            }, !1),
            MT = bl(kT),
            KT = TT.state.selection;
          return {
            update(TT) {
              TT.docChanged && (cT.pos = TT.changes.mapPos(cT.pos), KT = KT.map(TT.changes))
            },
            get(kT, OT, yT) {
              let fT, xT = TT.posAndSideAtCoords({
                  x: kT.clientX,
                  y: kT.clientY
                }, !1),
                IT = Fl(TT, xT.pos, xT.assoc, MT);
              if (cT.pos != xT.pos && !OT) {
                let kT = Fl(TT, cT.pos, cT.assoc, MT),
                  KT = Math.min(kT.from, IT.from),
                  OT = Math.max(kT.to, IT.to);
                IT = KT < IT.from ? lT.j.range(KT, OT, IT.assoc) : lT.j.range(OT, KT, IT.assoc)
              }
              return OT ? KT.replaceRange(KT.main.extend(IT.from, IT.to, IT.assoc)) : yT && 1 == MT && KT.qt.length > 1 && (fT = function(TT, kT) {
                for (let cT = 0; cT < TT.qt.length; cT++) {
                  let {
                    from: MT,
                    to: KT
                  } = TT.qt[cT];
                  if (MT <= kT && KT >= kT) return lT.j.create(TT.qt.slice(0, cT).concat(TT.qt.slice(cT + 1)), TT.mainIndex == cT ? 0 : TT.mainIndex - (TT.mainIndex > cT ? 1 : 0))
                }
                return null
              }(KT, xT.pos)) ? fT : yT ? KT.addRange(IT) : lT.j.create([IT])
            }
          }
        }(TT, kT)), cT) {
        let lT = !TT.hasFocus;
        TT.inputState.startMouseSelection(new hl(TT, kT, cT, lT)), lT && TT.observer.ignore((() => {
          ck(TT.contentDOM);
          let kT = TT.root.activeElement;
          kT && !kT.contains(TT.contentDOM) && kT.blur()
        }));
        let MT = TT.inputState.mouseSelection;
        if (MT) return MT.start(kT), !1 === MT.dragging
      } else TT.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const rl = rT.ie && rT.ie_version <= 11;
    let Pl = null,
      wl = 0,
      ml = 0;

    function bl(TT) {
      if (!rl) return TT.detail;
      let kT = Pl,
        cT = ml;
      return Pl = TT, ml = Date.now(), wl = !kT || cT > Date.now() - 400 && Math.abs(kT.clientX - TT.clientX) < 2 && Math.abs(kT.clientY - TT.clientY) < 2 ? (wl + 1) % 3 : 1
    }

    function zl(TT, kT, cT, lT) {
      if (!(cT = Dl(TT.state, uk, cT))) return;
      let MT = TT.posAtCoords({
          x: kT.clientX,
          y: kT.clientY
        }, !1),
        {
          draggedContent: KT
        } = TT.inputState,
        OT = lT && KT && function(TT, kT) {
          let cT = TT.state.facet(Hk);
          return cT.length ? cT[0](kT) : rT.mac ? !kT.altKey : !kT.ctrlKey
        }(TT, kT) ? {
          from: KT.from,
          to: KT.to
        } : null,
        yT = {
          from: MT,
          insert: cT
        },
        fT = TT.state.changes(OT ? [OT, yT] : yT);
      TT.focus(), TT.dispatch({
        changes: fT,
        selection: {
          anchor: fT.mapPos(MT, -1),
          head: fT.mapPos(MT, 1)
        },
        userEvent: OT ? "move.drop" : "input.drop"
      }), TT.inputState.draggedContent = null
    }
    Nl.dragstart = (TT, kT) => {
      let {
        selection: {
          main: cT
        }
      } = TT.state;
      if (kT.target.draggable) {
        let MT = TT.docView.tile.nearest(kT.target);
        if (MT && MT.isWidget()) {
          let TT = MT.posAtStart,
            kT = TT + MT.length;
          (TT >= cT.to || kT <= cT.from) && (cT = lT.j.range(TT, kT))
        }
      }
      let {
        inputState: MT
      } = TT;
      return MT.mouseSelection && (MT.mouseSelection.dragging = !0), MT.draggedContent = cT, kT.dataTransfer && (kT.dataTransfer.setData("Text", Dl(TT.state, Xk, TT.state.sliceDoc(cT.from, cT.to))), kT.dataTransfer.effectAllowed = "copyMove"), !1
    }, Nl.dragend = TT => (TT.inputState.draggedContent = null, !1), Nl.drop = (TT, kT) => {
      if (!kT.dataTransfer) return !1;
      if (TT.state.readOnly) return !0;
      let cT = kT.dataTransfer.files;
      if (cT && cT.length) {
        let lT = Array(cT.length),
          MT = 0,
          KT = () => {
            ++MT == cT.length && zl(TT, kT, lT.filter((TT => null != TT)).join(TT.state.lineBreak), !1)
          };
        for (let TT = 0; TT < cT.length; TT++) {
          let kT = new FileReader;
          kT.onerror = KT, kT.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(kT.result) || (lT[TT] = kT.result), KT()
          }, kT.readAsText(cT[TT])
        }
        return !0
      } {
        let cT = kT.dataTransfer.getData("Text");
        if (cT) return zl(TT, kT, cT, !0), !0
      }
      return !1
    }, Nl.paste = (TT, kT) => {
      if (TT.state.readOnly) return !0;
      TT.observer.flush();
      let cT = Sl ? null : kT.clipboardData;
      return cT ? (al(TT, cT.getData("text/plain") || cT.getData("text/uri-list")), !0) : (function(TT) {
        let kT = TT.dom.parentNode;
        if (!kT) return;
        let cT = kT.appendChild(document.createElement("textarea"));
        cT.style.cssText = "position: fixed; left: -10000px; top: 10px", cT.focus(), setTimeout((() => {
          TT.focus(), cT.remove(), al(TT, cT.value)
        }), 50)
      }(TT), !1)
    };
    let Jl = null;
    Nl.copy = Nl.cut = (TT, kT) => {
      if (!LT(TT.contentDOM, TT.observer.selectionRange)) return !1;
      let {
        text: cT,
        qt: lT,
        linewise: MT
      } = function(TT) {
        let kT = [],
          cT = [],
          lT = !1;
        for (let MT of TT.selection.qt) MT.empty || (kT.push(TT.sliceDoc(MT.from, MT.to)), cT.push(MT));
        if (!kT.length) {
          let MT = -1;
          for (let {
              from: lT
            }
            of TT.selection.qt) {
            let KT = TT.doc.lineAt(lT);
            KT.number > MT && (kT.push(KT.text), cT.push({
              from: KT.from,
              to: Math.min(TT.doc.length, KT.to + 1)
            })), MT = KT.number
          }
          lT = !0
        }
        return {
          text: Dl(TT, Xk, kT.join(TT.lineBreak)),
          qt: cT,
          linewise: lT
        }
      }(TT.state);
      if (!cT && !MT) return !1;
      Jl = MT ? cT : null, "cut" != kT.type || TT.state.readOnly || TT.dispatch({
        changes: lT,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let KT = Sl ? null : kT.clipboardData;
      return KT ? (KT.clearData(), KT.setData("text/plain", cT), !0) : (function(TT, kT) {
        let cT = TT.dom.parentNode;
        if (!cT) return;
        let lT = cT.appendChild(document.createElement("textarea"));
        lT.style.cssText = "position: fixed; left: -10000px; top: 10px", lT.value = kT, lT.focus(), lT.selectionEnd = kT.length, lT.selectionStart = 0, setTimeout((() => {
          lT.remove(), TT.focus()
        }), 50)
      }(TT, cT), !1)
    };
    const ol = lT.d.define();

    function Hl(TT, kT) {
      let cT = [];
      for (let lT of TT.facet(Zk)) {
        let MT = lT(TT, kT);
        MT && cT.push(MT)
      }
      return cT.length ? TT.update({
        effects: cT,
        annotations: ol.of(!0)
      }) : null
    }

    function el(TT) {
      setTimeout((() => {
        let kT = TT.hasFocus;
        if (kT != TT.inputState.notifiedFocused) {
          let cT = Hl(TT.state, kT);
          cT ? TT.dispatch(cT) : TT.update([])
        }
      }), 10)
    }
    Ql.focus = TT => {
      TT.inputState.lastFocusTime = Date.now(), TT.scrollDOM.scrollTop || !TT.inputState.lastScrollTop && !TT.inputState.lastScrollLeft || (TT.scrollDOM.scrollTop = TT.inputState.lastScrollTop, TT.scrollDOM.scrollLeft = TT.inputState.lastScrollLeft), el(TT)
    }, Ql.blur = TT => {
      TT.observer.clearSelectionRange(), el(TT)
    }, Ql.compositionstart = Ql.compositionupdate = TT => {
      TT.observer.editContext || (null == TT.inputState.compositionFirstChange && (TT.inputState.compositionFirstChange = !0), TT.inputState.composing < 0 && (TT.inputState.composing = 0))
    }, Ql.compositionend = TT => {
      TT.observer.editContext || (TT.inputState.composing = -1, TT.inputState.compositionEndedAt = Date.now(), TT.inputState.compositionPendingKey = !0, TT.inputState.compositionPendingChange = TT.observer.pendingRecords().length > 0, TT.inputState.compositionFirstChange = null, rT.chrome && rT.android ? TT.observer.flushSoon() : TT.inputState.compositionPendingChange ? Promise.resolve().then((() => TT.observer.flush())) : setTimeout((() => {
        TT.inputState.composing < 0 && TT.docView.hasComposition && TT.update([])
      }), 50))
    }, Ql.contextmenu = TT => {
      TT.inputState.lastContextMenu = Date.now()
    }, Nl.beforeinput = (TT, kT) => {
      var cT, lT;
      if ("insertText" != kT.inputType && "insertCompositionText" != kT.inputType || (TT.inputState.insertingText = kT.data, TT.inputState.insertingTextAt = Date.now()), "insertReplacementText" == kT.inputType && TT.observer.editContext) {
        let lT = null === (cT = kT.dataTransfer) || void 0 === cT ? void 0 : cT.getData("text/plain"),
          MT = kT.getTargetRanges();
        if (lT && MT.length) {
          let kT = MT[0],
            cT = TT.posAtDOM(kT.startContainer, kT.startOffset),
            KT = TT.posAtDOM(kT.endContainer, kT.endOffset);
          return Ol(TT, {
            from: cT,
            to: KT,
            insert: TT.state.toText(lT)
          }, null), !0
        }
      }
      let MT;
      if (rT.chrome && rT.android && (MT = Cl.find((TT => TT.inputType == kT.inputType))) && (TT.observer.delayAndroidKey(MT.key, MT.keyCode), "Backspace" == MT.key || "Delete" == MT.key)) {
        let kT = (null === (lT = window.visualViewport) || void 0 === lT ? void 0 : lT.height) || 0;
        setTimeout((() => {
          var cT;
          ((null === (cT = window.visualViewport) || void 0 === cT ? void 0 : cT.height) || 0) > kT + 10 && TT.hasFocus && (TT.contentDOM.blur(), TT.focus())
        }), 100)
      }
      return rT.ios && "deleteContentForward" == kT.inputType && TT.observer.flushSoon(), rT.safari && "insertText" == kT.inputType && TT.inputState.composing >= 0 && setTimeout((() => Ql.compositionend(TT, kT)), 20), !1
    };
    const Gl = new Set;
    const Vl = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let El = !1;

    function Zl() {
      El = !1
    }
    class ul {
      constructor(TT) {
        this.lineWrapping = TT, this.doc = lT.I.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(TT, kT) {
        let cT = this.doc.lineAt(kT).number - this.doc.lineAt(TT).number + 1;
        return this.lineWrapping && (cT += Math.max(0, Math.ceil((kT - TT - cT * this.lineLength * .5) / this.lineLength))), this.lineHeight * cT
      }
      heightForLine(TT) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((TT - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(TT) {
        return this.doc = TT, this
      }
      mustRefreshForWrapping(TT) {
        return Vl.indexOf(TT) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(TT) {
        let kT = !1;
        for (let cT = 0; cT < TT.length; cT++) {
          let lT = TT[cT];
          lT < 0 ? cT++ : this.heightSamples[Math.floor(10 * lT)] || (kT = !0, this.heightSamples[Math.floor(10 * lT)] = !0)
        }
        return kT
      }
      refresh(TT, kT, cT, lT, MT, KT) {
        let OT = Vl.indexOf(TT) > -1,
          yT = Math.abs(kT - this.lineHeight) > .3 || this.lineWrapping != OT || Math.abs(cT - this.charWidth) > .1;
        if (this.lineWrapping = OT, this.lineHeight = kT, this.charWidth = cT, this.textHeight = lT, this.lineLength = MT, yT) {
          this.heightSamples = {};
          for (let TT = 0; TT < KT.length; TT++) {
            let kT = KT[TT];
            kT < 0 ? TT++ : this.heightSamples[Math.floor(10 * kT)] = !0
          }
        }
        return yT
      }
    }
    class Xl {
      constructor(TT, kT) {
        this.from = TT, this.heights = kT, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class dl {
      constructor(TT, kT, cT, lT, MT) {
        this.from = TT, this.length = kT, this.top = cT, this.height = lT, this._content = MT
      }
      get type() {
        return "number" == typeof this._content ? oT.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof VT ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(TT) {
        let kT = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(TT._content) ? TT._content : [TT]);
        return new dl(this.from, this.length + TT.length, this.top, this.height + TT.height, kT)
      }
    }
    var Ll = function(TT) {
      return TT[TT.ByPos = 0] = "ByPos", TT[TT.ByHeight = 1] = "ByHeight", TT[TT.ByPosNoHeight = 2] = "ByPosNoHeight", TT
    }(Ll || (Ll = {}));
    const Rl = .001;
    class gl {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = TT, this.height = kT, this.flags = cT
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(TT) {
        this.flags = (TT ? 2 : 0) | -3 & this.flags
      }
      setHeight(TT) {
        this.height != TT && (Math.abs(this.height - TT) > Rl && (El = !0), this.height = TT)
      }
      replace(TT, kT, cT) {
        return gl.of(cT)
      }
      decomposeLeft(TT, kT) {
        kT.push(this)
      }
      decomposeRight(TT, kT) {
        kT.push(this)
      }
      applyChanges(TT, kT, cT, lT) {
        let MT = this,
          KT = cT.doc;
        for (let OT = lT.length - 1; OT >= 0; OT--) {
          let {
            fromA: yT,
            toA: fT,
            fromB: xT,
            toB: IT
          } = lT[OT], AT = MT.lineAt(yT, Ll.ByPosNoHeight, cT.setDoc(kT), 0, 0), CT = AT.to >= fT ? AT : MT.lineAt(fT, Ll.ByPosNoHeight, cT, 0, 0);
          for (IT += CT.to - fT, fT = CT.to; OT > 0 && AT.from <= lT[OT - 1].toA;) yT = lT[OT - 1].fromA, xT = lT[OT - 1].fromB, OT--, yT < AT.from && (AT = MT.lineAt(yT, Ll.ByPosNoHeight, cT, 0, 0));
          xT += AT.from - yT, yT = AT.from;
          let jT = ql.build(cT.setDoc(KT), TT, xT, IT);
          MT = Ul(MT, MT.replace(yT, fT, jT))
        }
        return MT.updateHeight(cT, 0)
      }
      static empty() {
        return new Wl(0, 0, 0)
      }
      static of (TT) {
        if (1 == TT.length) return TT[0];
        let kT = 0,
          cT = TT.length,
          lT = 0,
          MT = 0;
        for (;;)
          if (kT == cT)
            if (lT > 2 * MT) {
              let MT = TT[kT - 1];
              MT.break ? TT.splice(--kT, 1, MT.left, null, MT.right) : TT.splice(--kT, 1, MT.left, MT.right), cT += 1 + MT.break, lT -= MT.size
            } else {
              if (!(MT > 2 * lT)) break;
              {
                let kT = TT[cT];
                kT.break ? TT.splice(cT, 1, kT.left, null, kT.right) : TT.splice(cT, 1, kT.left, kT.right), cT += 2 + kT.break, MT -= kT.size
              }
            }
        else if (lT < MT) {
          let cT = TT[kT++];
          cT && (lT += cT.size)
        } else {
          let kT = TT[--cT];
          kT && (MT += kT.size)
        }
        let KT = 0;
        return null == TT[kT - 1] ? (KT = 1, kT--) : null == TT[kT] && (KT = 1, cT++), new pl(gl.of(TT.slice(0, kT)), KT, gl.of(TT.slice(cT)))
      }
    }

    function Ul(TT, kT) {
      return TT == kT ? TT : (TT.constructor != kT.constructor && (El = !0), kT)
    }
    gl.prototype.size = 1;
    const Yl = HT.replace({});
    class Bl extends gl {
      constructor(TT, kT, cT) {
        super(TT, kT), this.deco = cT, this.spaceAbove = 0
      }
      mainBlock(TT, kT) {
        return new dl(kT, this.length, TT + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(TT, kT, cT, lT) {
        return this.spaceAbove && TT < cT + this.spaceAbove ? new dl(lT, 0, cT, this.spaceAbove, Yl) : this.mainBlock(cT, lT)
      }
      lineAt(TT, kT, cT, lT, MT) {
        let KT = this.mainBlock(lT, MT);
        return this.spaceAbove ? this.blockAt(0, cT, lT, MT).join(KT) : KT
      }
      forEachLine(TT, kT, cT, lT, MT, KT) {
        TT <= MT + this.length && kT >= MT && KT(this.lineAt(0, Ll.ByPos, cT, lT, MT))
      }
      setMeasuredHeight(TT) {
        let kT = TT.heights[TT.index++];
        kT < 0 ? (this.spaceAbove = -kT, kT = TT.heights[TT.index++]) : this.spaceAbove = 0, this.setHeight(kT)
      }
      updateHeight(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 3 ? arguments[3] : void 0;
        return cT && cT.from <= kT && cT.more && this.setMeasuredHeight(cT), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class Wl extends Bl {
      constructor(TT, kT, cT) {
        super(TT, kT, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = cT
      }
      mainBlock(TT, kT) {
        return new dl(kT, this.length, TT + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(TT, kT, cT) {
        let lT = cT[0];
        return 1 == cT.length && (lT instanceof Wl || lT instanceof nl && 4 & lT.flags) && Math.abs(this.length - lT.length) < 10 ? (lT instanceof nl ? lT = new Wl(lT.length, this.height, this.spaceAbove) : lT.height = this.height, this.outdated || (lT.outdated = !1), lT) : gl.of(cT)
      }
      updateHeight(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = arguments.length > 3 ? arguments[3] : void 0;
        return lT && lT.from <= kT && lT.more ? this.setMeasuredHeight(lT) : (cT || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, TT.heightForLine(this.length - this.collapsed)) + this.breaks * TT.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class nl extends gl {
      constructor(TT) {
        super(TT, 0)
      }
      heightMetrics(TT, kT) {
        let cT, lT = TT.doc.lineAt(kT).number,
          MT = TT.doc.lineAt(kT + this.length).number,
          KT = MT - lT + 1,
          OT = 0;
        if (TT.lineWrapping) {
          let kT = Math.min(this.height, TT.lineHeight * KT);
          cT = kT / KT, this.length > KT + 1 && (OT = (this.height - kT) / (this.length - KT - 1))
        } else cT = this.height / KT;
        return {
          firstLine: lT,
          lastLine: MT,
          perLine: cT,
          perChar: OT
        }
      }
      blockAt(TT, kT, cT, lT) {
        let {
          firstLine: MT,
          lastLine: KT,
          perLine: OT,
          perChar: yT
        } = this.heightMetrics(kT, lT);
        if (kT.lineWrapping) {
          let MT = lT + (TT < kT.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (TT - cT) / this.height)) * this.length)),
            KT = kT.doc.lineAt(MT),
            fT = OT + KT.length * yT,
            xT = Math.max(cT, TT - fT / 2);
          return new dl(KT.from, KT.length, xT, fT, 0)
        } {
          let lT = Math.max(0, Math.min(KT - MT, Math.floor((TT - cT) / OT))),
            {
              from: yT,
              length: fT
            } = kT.doc.line(MT + lT);
          return new dl(yT, fT, cT + OT * lT, OT, 0)
        }
      }
      lineAt(TT, kT, cT, lT, MT) {
        if (kT == Ll.ByHeight) return this.blockAt(TT, cT, lT, MT);
        if (kT == Ll.ByPosNoHeight) {
          let {
            from: kT,
            to: lT
          } = cT.doc.lineAt(TT);
          return new dl(kT, lT - kT, 0, 0, 0)
        }
        let {
          firstLine: KT,
          perLine: OT,
          perChar: yT
        } = this.heightMetrics(cT, MT), fT = cT.doc.lineAt(TT), xT = OT + fT.length * yT, IT = fT.number - KT, AT = lT + OT * IT + yT * (fT.from - MT - IT);
        return new dl(fT.from, fT.length, Math.max(lT, Math.min(AT, lT + this.height - xT)), xT, 0)
      }
      forEachLine(TT, kT, cT, lT, MT, KT) {
        TT = Math.max(TT, MT), kT = Math.min(kT, MT + this.length);
        let {
          firstLine: OT,
          perLine: yT,
          perChar: fT
        } = this.heightMetrics(cT, MT);
        for (let xT = TT, IT = lT; xT <= kT;) {
          let kT = cT.doc.lineAt(xT);
          if (xT == TT) {
            let cT = kT.number - OT;
            IT += yT * cT + fT * (TT - MT - cT)
          }
          let lT = yT + fT * kT.length;
          KT(new dl(kT.from, kT.length, IT, lT, 0)), IT += lT, xT = kT.to + 1
        }
      }
      replace(TT, kT, cT) {
        let lT = this.length - kT;
        if (lT > 0) {
          let TT = cT[cT.length - 1];
          TT instanceof nl ? cT[cT.length - 1] = new nl(TT.length + lT) : cT.push(null, new nl(lT - 1))
        }
        if (TT > 0) {
          let kT = cT[0];
          kT instanceof nl ? cT[0] = new nl(TT + kT.length) : cT.unshift(new nl(TT - 1), null)
        }
        return gl.of(cT)
      }
      decomposeLeft(TT, kT) {
        kT.push(new nl(TT - 1), null)
      }
      decomposeRight(TT, kT) {
        kT.push(null, new nl(this.length - TT - 1))
      }
      updateHeight(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = arguments.length > 3 ? arguments[3] : void 0,
          MT = kT + this.length;
        if (lT && lT.from <= kT + this.length && lT.more) {
          let cT = [],
            KT = Math.max(kT, lT.from),
            OT = -1;
          for (lT.from > kT && cT.push(new nl(lT.from - kT - 1).updateHeight(TT, kT)); KT <= MT && lT.more;) {
            let kT = TT.doc.lineAt(KT).length;
            cT.length && cT.push(null);
            let MT = lT.heights[lT.index++],
              yT = 0;
            MT < 0 && (yT = -MT, MT = lT.heights[lT.index++]), -1 == OT ? OT = MT : Math.abs(MT - OT) >= Rl && (OT = -2);
            let fT = new Wl(kT, MT, yT);
            fT.outdated = !1, cT.push(fT), KT += kT + 1
          }
          KT <= MT && cT.push(null, new nl(MT - KT).updateHeight(TT, KT));
          let yT = gl.of(cT);
          return (OT < 0 || Math.abs(yT.height - this.height) >= Rl || Math.abs(OT - this.heightMetrics(TT, kT).perLine) >= Rl) && (El = !0), Ul(this, yT)
        }
        return (cT || this.outdated) && (this.setHeight(TT.heightForGap(kT, kT + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class pl extends gl {
      constructor(TT, kT, cT) {
        super(TT.length + kT + cT.length, TT.height + cT.height, kT | (TT.outdated || cT.outdated ? 2 : 0)), this.left = TT, this.right = cT, this.size = TT.size + cT.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(TT, kT, cT, lT) {
        let MT = cT + this.left.height;
        return TT < MT ? this.left.blockAt(TT, kT, cT, lT) : this.right.blockAt(TT, kT, MT, lT + this.left.length + this.break)
      }
      lineAt(TT, kT, cT, lT, MT) {
        let KT = lT + this.left.height,
          OT = MT + this.left.length + this.break,
          yT = kT == Ll.ByHeight ? TT < KT : TT < OT,
          fT = yT ? this.left.lineAt(TT, kT, cT, lT, MT) : this.right.lineAt(TT, kT, cT, KT, OT);
        if (this.break || (yT ? fT.to < OT : fT.from > OT)) return fT;
        let xT = kT == Ll.ByPosNoHeight ? Ll.ByPosNoHeight : Ll.ByPos;
        return yT ? fT.join(this.right.lineAt(OT, xT, cT, KT, OT)) : this.left.lineAt(OT, xT, cT, lT, MT).join(fT)
      }
      forEachLine(TT, kT, cT, lT, MT, KT) {
        let OT = lT + this.left.height,
          yT = MT + this.left.length + this.break;
        if (this.break) TT < yT && this.left.forEachLine(TT, kT, cT, lT, MT, KT), kT >= yT && this.right.forEachLine(TT, kT, cT, OT, yT, KT);
        else {
          let fT = this.lineAt(yT, Ll.ByPos, cT, lT, MT);
          TT < fT.from && this.left.forEachLine(TT, fT.from - 1, cT, lT, MT, KT), fT.to >= TT && fT.from <= kT && KT(fT), kT > fT.to && this.right.forEachLine(fT.to + 1, kT, cT, OT, yT, KT)
        }
      }
      replace(TT, kT, cT) {
        let lT = this.left.length + this.break;
        if (kT < lT) return this.balanced(this.left.replace(TT, kT, cT), this.right);
        if (TT > this.left.length) return this.balanced(this.left, this.right.replace(TT - lT, kT - lT, cT));
        let MT = [];
        TT > 0 && this.decomposeLeft(TT, MT);
        let KT = MT.length;
        for (let OT of cT) MT.push(OT);
        if (TT > 0 && il(MT, KT - 1), kT < this.length) {
          let TT = MT.length;
          this.decomposeRight(kT, MT), il(MT, TT)
        }
        return gl.of(MT)
      }
      decomposeLeft(TT, kT) {
        let cT = this.left.length;
        if (TT <= cT) return this.left.decomposeLeft(TT, kT);
        kT.push(this.left), this.break && (cT++, TT >= cT && kT.push(null)), TT > cT && this.right.decomposeLeft(TT - cT, kT)
      }
      decomposeRight(TT, kT) {
        let cT = this.left.length,
          lT = cT + this.break;
        if (TT >= lT) return this.right.decomposeRight(TT - lT, kT);
        TT < cT && this.left.decomposeRight(TT, kT), this.break && TT < lT && kT.push(null), kT.push(this.right)
      }
      balanced(TT, kT) {
        return TT.size > 2 * kT.size || kT.size > 2 * TT.size ? gl.of(this.break ? [TT, null, kT] : [TT, kT]) : (this.left = Ul(this.left, TT), this.right = Ul(this.right, kT), this.setHeight(TT.height + kT.height), this.outdated = TT.outdated || kT.outdated, this.size = TT.size + kT.size, this.length = TT.length + this.break+kT.length, this)
      }
      updateHeight(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: MT,
            right: KT
          } = this,
          OT = kT + MT.length + this.break,
          yT = null;
        return lT && lT.from <= kT + MT.length && lT.more ? yT = MT = MT.updateHeight(TT, kT, cT, lT) : MT.updateHeight(TT, kT, cT), lT && lT.from <= OT + KT.length && lT.more ? yT = KT = KT.updateHeight(TT, OT, cT, lT) : KT.updateHeight(TT, OT, cT), yT ? this.balanced(MT, KT) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function il(TT, kT) {
      let cT, lT;
      null == TT[kT] && (cT = TT[kT - 1]) instanceof nl && (lT = TT[kT + 1]) instanceof nl && TT.splice(kT - 1, 3, new nl(cT.length + 1 + lT.length))
    }
    class ql {
      constructor(TT, kT) {
        this.pos = TT, this.oracle = kT, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = TT
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(TT, kT) {
        if (this.lineStart > -1) {
          let TT = Math.min(kT, this.lineEnd),
            cT = this.nodes[this.nodes.length - 1];
          cT instanceof Wl ? cT.length += TT - this.pos : (TT > this.pos || !this.isCovered) && this.nodes.push(new Wl(TT - this.pos, -1, 0)), this.writtenTo = TT, kT > TT && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = kT
      }
      point(TT, kT, cT) {
        if (TT < kT || cT.heightRelevant) {
          let lT = cT.widget ? cT.widget.estimatedHeight : 0,
            MT = cT.widget ? cT.widget.lineBreaks : 0;
          lT < 0 && (lT = this.oracle.lineHeight);
          let KT = kT - TT;
          cT.block ? this.STT(new Bl(KT, lT, cT)) : (KT || MT || lT >= 5) && this.addLineDeco(lT, MT, KT)
        } else kT > TT && this.span(TT, kT);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: TT,
          to: kT
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = TT, this.lineEnd = kT, this.writtenTo < TT && ((this.writtenTo < TT - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, TT - 1)), this.nodes.push(null)), this.pos > TT && this.nodes.push(new Wl(this.pos - TT, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(TT, kT) {
        let cT = new nl(kT - TT);
        return this.oracle.doc.lineAt(TT).to == kT && (cT.flags |= 4), cT
      }
      ensureLine() {
        this.enterLine();
        let TT = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (TT instanceof Wl) return TT;
        let kT = new Wl(0, -1, 0);
        return this.nodes.push(kT), kT
      }
      STT(TT) {
        this.enterLine();
        let kT = TT.deco;
        kT && kT.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(TT), this.writtenTo = this.pos = this.pos + TT.length, kT && kT.endSide > 0 && (this.covering = TT)
      }
      addLineDeco(TT, kT, cT) {
        let lT = this.ensureLine();
        lT.length += cT, lT.collapsed += cT, lT.widgetHeight = Math.max(lT.widgetHeight, TT), lT.breaks += kT, this.writtenTo = this.pos = this.pos + cT
      }
      finish(TT) {
        let kT = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || kT instanceof Wl || this.isCovered ? (this.writtenTo < this.pos || null == kT) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new Wl(0, -1, 0));
        let cT = TT;
        for (let lT of this.nodes) lT instanceof Wl && lT.updateHeight(this.oracle, cT), cT += lT ? lT.length : 1;
        return this.nodes
      }
      static build(TT, kT, cT, MT) {
        let KT = new ql(cT, TT);
        return lT.y.spans(kT, cT, MT, KT, 0), KT.finish(cT)
      }
    }
    class sl {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(TT, kT, cT, lT) {
        (TT < kT || cT && cT.heightRelevant || lT && lT.heightRelevant) && ZT(TT, kT, this.changes, 5)
      }
    }

    function TM(TT, kT) {
      let cT = TT.getBoundingClientRect(),
        lT = TT.ownerDocument,
        MT = lT.defaultView || window,
        KT = Math.max(0, cT.left),
        OT = Math.min(MT.innerWidth, cT.right),
        yT = Math.max(0, cT.top),
        fT = Math.min(MT.innerHeight, cT.bottom);
      for (let xT = TT.parentNode; xT && xT != lT.body;)
        if (1 == xT.nodeType) {
          let kT = xT,
            cT = window.getComputedStyle(kT);
          if ((kT.scrollHeight > kT.clientHeight || kT.scrollWidth > kT.clientWidth) && "visible" != cT.overflow) {
            let cT = kT.getBoundingClientRect();
            KT = Math.max(KT, cT.left), OT = Math.min(OT, cT.right), yT = Math.max(yT, cT.top), fT = Math.min(xT == TT.parentNode ? MT.innerHeight : fT, cT.bottom)
          }
          xT = "absolute" == cT.position || "fixed" == cT.position ? kT.offsetParent : kT.parentNode
        } else {
          if (11 != xT.nodeType) break;
          xT = xT.host
        } return {
        left: KT - cT.left,
        right: Math.max(KT, OT) - cT.left,
        top: yT - (cT.top + kT),
        bottom: Math.max(yT, fT) - (cT.top + kT)
      }
    }

    function kM(TT, kT) {
      let cT = TT.getBoundingClientRect();
      return {
        left: 0,
        right: cT.right - cT.left,
        top: kT,
        bottom: cT.bottom - (cT.top + kT)
      }
    }
    class cM {
      constructor(TT, kT, cT, lT) {
        this.from = TT, this.to = kT, this.size = cT, this.displaySize = lT
      }
      static same(TT, kT) {
        if (TT.length != kT.length) return !1;
        for (let cT = 0; cT < TT.length; cT++) {
          let lT = TT[cT],
            MT = kT[cT];
          if (lT.from != MT.from || lT.to != MT.to || lT.size != MT.size) return !1
        }
        return !0
      }
      draw(TT, kT) {
        return HT.replace({
          widget: new lM(this.displaySize * (kT ? TT.scaleY : TT.scaleX), kT)
        }).range(this.from, this.to)
      }
    }
    class lM extends JT {
      constructor(TT, kT) {
        super(), this.size = TT, this.vertical = kT
      }
      eq(TT) {
        return TT.size == this.size && TT.vertical == this.vertical
      }
      toDOM() {
        let TT = document.createElement("div");
        return this.vertical ? TT.style.height = this.size + "px" : (TT.style.width = this.size + "px", TT.style.height = "2px", TT.style.display = "inline-block"), TT
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class MM {
      constructor(TT, kT) {
        this.view = TT, this.state = kT, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = fM, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = xk.LTR, this.R7 = [], this.mustEnforceCursorAssoc = !1;
        let cT = kT.facet(Tc).some((TT => "function" != typeof TT && "cm-lineWrapping" == TT.class));
        this.heightOracle = new ul(cT), this.stateDeco = xM(kT), this.heightMap = gl.empty().applyChanges(this.stateDeco, lT.I.empty, this.heightOracle.setDoc(kT.doc), [new Ic(0, 0, 0, kT.doc.length)]);
        for (let lT = 0; lT < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); lT++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = HT.set(this.lineGaps.map((TT => TT.draw(this, !1)))), this.scrollParent = TT.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let TT = [this.viewport],
          {
            main: kT
          } = this.state.selection;
        for (let cT = 0; cT <= 1; cT++) {
          let lT = cT ? kT.head : kT.anchor;
          if (!TT.some((TT => {
              let {
                from: kT,
                to: cT
              } = TT;
              return lT >= kT && lT <= cT
            }))) {
            let {
              from: kT,
              to: cT
            } = this.lineBlockAt(lT);
            TT.push(new KM(kT, cT))
          }
        }
        return this.viewports = TT.sort(((TT, kT) => TT.from - kT.from)), this.updateScaler()
      }
      updateScaler() {
        let TT = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? fM : new IM(this.heightOracle, this.heightMap, this.viewports), TT.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (TT => {
          this.viewportLines.push(AM(TT, this.scaler))
        }))
      }
      update(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = TT.state;
        let cT = this.stateDeco;
        this.stateDeco = xM(this.state);
        let MT = TT.changedRanges,
          KT = Ic.extendWithRanges(MT, function(TT, kT, cT) {
            let MT = new sl;
            return lT.y.compare(TT, kT, cT, MT, 0), MT.changes
          }(cT, this.stateDeco, TT ? TT.changes : lT.ChangeSet.empty(this.state.doc.length))),
          OT = this.heightMap.height,
          yT = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        Zl(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, TT.startState.doc, this.heightOracle.setDoc(this.state.doc), KT), (this.heightMap.height != OT || El) && (TT.flags |= 2), yT ? (this.scrollAnchorPos = TT.changes.mapPos(yT.from, -1), this.scrollAnchorHeight = yT.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = OT);
        let fT = KT.length ? this.mapViewport(this.viewport, TT.changes) : this.viewport;
        (kT && (kT.range.head < fT.from || kT.range.head > fT.to) || !this.viewportIsAppropriate(fT)) && (fT = this.getViewport(0, kT));
        let xT = fT.from != this.viewport.from || fT.to != this.viewport.to;
        this.viewport = fT, TT.flags |= this.updateForViewport(), (xT || !TT.changes.empty || 2 & TT.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, TT.changes))), TT.flags |= this.computeVisibleRanges(TT.changes), kT && (this.scrollTarget = kT), !this.mustEnforceCursorAssoc && (TT.selectionSet || TT.focusChanged) && TT.view.lineWrapping && TT.state.selection.main.empty && TT.state.selection.main.assoc && !TT.state.facet(Lk) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: TT
        } = this, kT = TT.contentDOM, cT = window.getComputedStyle(kT), MT = this.heightOracle, KT = cT.whiteSpace;
        this.defaultTextDirection = "rtl" == cT.direction ? xk.RTL : xk.LTR;
        let OT = this.heightOracle.mustRefreshForWrapping(KT) || "refresh" === this.mustMeasureContent,
          yT = kT.getBoundingClientRect(),
          fT = OT || this.mustMeasureContent || this.contentDOMHeight != yT.height;
        this.contentDOMHeight = yT.height, this.mustMeasureContent = !1;
        let xT = 0,
          IT = 0;
        if (yT.width && yT.height) {
          let {
            scaleX: TT,
            scaleY: cT
          } = iT(kT, yT);
          (TT > .005 && Math.abs(this.scaleX - TT) > .005 || cT > .005 && Math.abs(this.scaleY - cT) > .005) && (this.scaleX = TT, this.scaleY = cT, xT |= 16, OT = fT = !0)
        }
        let AT = (parseInt(cT.paddingTop) || 0) * this.scaleY,
          CT = (parseInt(cT.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == AT && this.paddingBottom == CT || (this.paddingTop = AT, this.paddingBottom = CT, xT |= 18), this.editorWidth != TT.scrollDOM.clientWidth && (MT.lineWrapping && (fT = !0), this.editorWidth = TT.scrollDOM.clientWidth, xT |= 16);
        let jT = qT(this.view.contentDOM, !1).y;
        jT != this.scrollParent && (this.scrollParent = jT, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let vT = this.getScrollOffset();
        this.scrollOffset != vT && (this.scrollAnchorHeight = -1, this.scrollOffset = vT), this.scrolledToBottom = Kk(this.scrollParent || TT.win);
        let tT = (this.printing ? kM : TM)(kT, this.paddingTop),
          hT = tT.top - this.pixelViewport.top,
          NT = tT.bottom - this.pixelViewport.bottom;
        this.pixelViewport = tT;
        let QT = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (QT != this.inView && (this.inView = QT, QT && (fT = !0)), !this.inView && !this.scrollTarget && ! function(TT) {
            let kT = TT.getBoundingClientRect(),
              cT = TT.ownerDocument.defaultView || window;
            return kT.left < cT.innerWidth && kT.right > 0 && kT.top < cT.innerHeight && kT.bottom > 0
          }(TT.dom)) return 0;
        let ST = yT.width;
        if (this.contentDOMWidth == ST && this.editorHeight == TT.scrollDOM.clientHeight || (this.contentDOMWidth = yT.width, this.editorHeight = TT.scrollDOM.clientHeight, xT |= 16), fT) {
          let kT = TT.docView.measureVisibleLineHeights(this.viewport);
          if (MT.mustRefreshForHeights(kT) && (OT = !0), OT || MT.lineWrapping && Math.abs(ST - this.contentDOMWidth) > MT.charWidth) {
            let {
              lineHeight: cT,
              charWidth: lT,
              textHeight: yT
            } = TT.docView.measureTextSize();
            OT = cT > 0 && MT.refresh(KT, cT, lT, yT, Math.max(5, ST / lT), kT), OT && (TT.docView.minWidth = 0, xT |= 16)
          }
          hT > 0 && NT > 0 ? IT = Math.max(hT, NT) : hT < 0 && NT < 0 && (IT = Math.min(hT, NT)), Zl();
          for (let cT of this.viewports) {
            let KT = cT.from == this.viewport.from ? kT : TT.docView.measureVisibleLineHeights(cT);
            this.heightMap = (OT ? gl.empty().applyChanges(this.stateDeco, lT.I.empty, this.heightOracle, [new Ic(0, 0, 0, TT.state.doc.length)]) : this.heightMap).updateHeight(MT, 0, OT, new Xl(cT.from, KT))
          }
          El && (xT |= 2)
        }
        let DT = !this.viewportIsAppropriate(this.viewport, IT) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return DT && (2 & xT && (xT |= this.updateScaler()), this.viewport = this.getViewport(IT, this.scrollTarget), xT |= this.updateForViewport()), (2 & xT || DT) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(OT ? [] : this.lineGaps, TT)), xT |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, TT.docView.enforceCursorAssoc()), xT
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(TT, kT) {
        let cT = .5 - Math.max(-.5, Math.min(.5, TT / 1e3 / 2)),
          lT = this.heightMap,
          MT = this.heightOracle,
          {
            visibleTop: KT,
            visibleBottom: OT
          } = this,
          yT = new KM(lT.lineAt(KT - 1e3 * cT, Ll.ByHeight, MT, 0, 0).from, lT.lineAt(OT + 1e3 * (1 - cT), Ll.ByHeight, MT, 0, 0).to);
        if (kT) {
          let {
            head: TT
          } = kT.range;
          if (TT < yT.from || TT > yT.to) {
            let cT, KT = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              OT = lT.lineAt(TT, Ll.ByPos, MT, 0, 0);
            cT = "center" == kT.y ? (OT.top + OT.bottom) / 2 - KT / 2 : "start" == kT.y || "nearest" == kT.y && TT < yT.from ? OT.top : OT.bottom - KT, yT = new KM(lT.lineAt(cT - 500, Ll.ByHeight, MT, 0, 0).from, lT.lineAt(cT + KT + 500, Ll.ByHeight, MT, 0, 0).to)
          }
        }
        return yT
      }
      mapViewport(TT, kT) {
        let cT = kT.mapPos(TT.from, -1),
          lT = kT.mapPos(TT.to, 1);
        return new KM(this.heightMap.lineAt(cT, Ll.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(lT, Ll.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(TT) {
        let {
          from: kT,
          to: cT
        } = TT, lT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: MT
        } = this.heightMap.lineAt(kT, Ll.ByPos, this.heightOracle, 0, 0), {
          bottom: KT
        } = this.heightMap.lineAt(cT, Ll.ByPos, this.heightOracle, 0, 0), {
          visibleTop: OT,
          visibleBottom: yT
        } = this;
        return (0 == kT || MT <= OT - Math.max(10, Math.min(-lT, 250))) && (cT == this.state.doc.length || KT >= yT + Math.max(10, Math.min(lT, 250))) && MT > OT - 2e3 && KT < yT + 2e3
      }
      mapLineGaps(TT, kT) {
        if (!TT.length || kT.empty) return TT;
        let cT = [];
        for (let lT of TT) kT.touchesRange(lT.from, lT.to) || cT.push(new cM(kT.mapPos(lT.from), kT.mapPos(lT.to), lT.size, lT.displaySize));
        return cT
      }
      ensureLineGaps(TT, kT) {
        let cT = this.heightOracle.lineWrapping,
          MT = cT ? 1e4 : 2e3,
          KT = MT >> 1,
          OT = MT << 1;
        if (this.defaultTextDirection != xk.LTR && !cT) return [];
        let yT = [],
          fT = (MT, OT, xT, IT) => {
            if (OT - MT < KT) return;
            let AT = this.state.selection.main,
              CT = [AT.from];
            AT.empty || CT.push(AT.to);
            for (let TT of CT)
              if (TT > MT && TT < OT) return fT(MT, TT - 10, xT, IT), void fT(TT + 10, OT, xT, IT);
            let jT = function(TT, kT) {
              for (let cT of TT)
                if (kT(cT)) return cT;
              return
            }(TT, (TT => TT.from >= xT.from && TT.to <= xT.to && Math.abs(TT.from - MT) < KT && Math.abs(TT.to - OT) < KT && !CT.some((kT => TT.from < kT && TT.to > kT))));
            if (!jT) {
              if (OT < xT.to && kT && cT && kT.R7.some((TT => TT.from <= OT && TT.to >= OT))) {
                let TT = kT.moveToLineBoundary(lT.j.cursor(OT), !1, !0).head;
                TT > MT && (OT = TT)
              }
              let TT = this.gapSize(xT, MT, OT, IT);
              jT = new cM(MT, OT, TT, cT || TT < 2e6 ? TT : 2e6)
            }
            yT.push(jT)
          },
          xT = kT => {
            if (kT.length < OT || kT.type != oT.Text) return;
            let KT = function(TT, kT, cT) {
              let MT = [],
                KT = TT,
                OT = 0;
              lT.y.spans(cT, TT, kT, {
                span() {},
                point(TT, kT) {
                  TT > KT && (MT.push({
                    from: KT,
                    to: TT
                  }), OT += TT - KT), KT = kT
                }
              }, 20), KT < kT && (MT.push({
                from: KT,
                to: kT
              }), OT += kT - KT);
              return {
                total: OT,
                qt: MT
              }
            }(kT.from, kT.to, this.stateDeco);
            if (KT.total < OT) return;
            let yT, xT, IT = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (cT) {
              let TT, cT, lT = MT / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != IT) {
                let MT = yM(KT, IT),
                  OT = ((this.visibleBottom - this.visibleTop) / 2 + lT) / kT.height;
                TT = MT - OT, cT = MT + OT
              } else TT = (this.visibleTop - kT.top - lT) / kT.height, cT = (this.visibleBottom - kT.top + lT) / kT.height;
              yT = OM(KT, TT), xT = OM(KT, cT)
            } else {
              let cT = KT.total * this.heightOracle.charWidth,
                lT = MT * this.heightOracle.charWidth,
                OT = 0;
              if (cT > 2e6)
                for (let MT of TT) MT.from >= kT.from && MT.from < kT.to && MT.size != MT.displaySize && MT.from * this.heightOracle.charWidth + OT < this.pixelViewport.left && (OT = MT.size - MT.displaySize);
              let fT, AT, CT = this.pixelViewport.left + OT,
                jT = this.pixelViewport.right + OT;
              if (null != IT) {
                let TT = yM(KT, IT),
                  kT = ((jT - CT) / 2 + lT) / cT;
                fT = TT - kT, AT = TT + kT
              } else fT = (CT - lT) / cT, AT = (jT + lT) / cT;
              yT = OM(KT, fT), xT = OM(KT, AT)
            }
            yT > kT.from && fT(kT.from, yT, kT, KT), xT < kT.to && fT(xT, kT.to, kT, KT)
          };
        for (let lT of this.viewportLines) Array.isArray(lT.type) ? lT.type.forEach(xT) : xT(lT);
        return yT
      }
      gapSize(TT, kT, cT, lT) {
        let MT = yM(lT, cT) - yM(lT, kT);
        return this.heightOracle.lineWrapping ? TT.height * MT : lT.total * this.heightOracle.charWidth * MT
      }
      updateLineGaps(TT) {
        cM.same(TT, this.lineGaps) || (this.lineGaps = TT, this.lineGapDeco = HT.set(TT.map((TT => TT.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(TT) {
        let kT = this.stateDeco;
        this.lineGaps.length && (kT = kT.concat(this.lineGapDeco));
        let cT = [];
        lT.y.spans(kT, this.viewport.from, this.viewport.to, {
          span(TT, kT) {
            cT.push({
              from: TT,
              to: kT
            })
          },
          point() {}
        }, 20);
        let MT = 0;
        if (cT.length != this.R7.length) MT = 12;
        else
          for (let lT = 0; lT < cT.length && !(8 & MT); lT++) {
            let kT = this.R7[lT],
              KT = cT[lT];
            kT.from == KT.from && kT.to == KT.to || (MT |= 4, TT && TT.mapPos(kT.from, -1) == KT.from && TT.mapPos(kT.to, 1) == KT.to || (MT |= 8))
          }
        return this.R7 = cT, MT
      }
      lineBlockAt(TT) {
        return TT >= this.viewport.from && TT <= this.viewport.to && this.viewportLines.find((kT => kT.from <= TT && kT.to >= TT)) || AM(this.heightMap.lineAt(TT, Ll.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(TT) {
        return TT >= this.viewportLines[0].top && TT <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((kT => kT.top <= TT && kT.bottom >= TT)) || AM(this.heightMap.lineAt(this.scaler.fromDOM(TT), Ll.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(TT) {
        let kT = this.lineBlockAtHeight(TT + 8);
        return kT.from >= this.viewport.from || this.viewportLines[0].top - TT > 200 ? kT : this.viewportLines[0]
      }
      elementAtHeight(TT) {
        return AM(this.heightMap.blockAt(this.scaler.fromDOM(TT), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class KM {
      constructor(TT, kT) {
        this.from = TT, this.to = kT
      }
    }

    function OM(TT, kT) {
      let {
        total: cT,
        qt: lT
      } = TT;
      if (kT <= 0) return lT[0].from;
      if (kT >= 1) return lT[lT.length - 1].to;
      let MT = Math.floor(cT * kT);
      for (let KT = 0;; KT++) {
        let {
          from: TT,
          to: kT
        } = lT[KT], cT = kT - TT;
        if (MT <= cT) return TT + MT;
        MT -= cT
      }
    }

    function yM(TT, kT) {
      let cT = 0;
      for (let {
          from: lT,
          to: MT
        }
        of TT.qt) {
        if (kT <= MT) {
          cT += kT - lT;
          break
        }
        cT += MT - lT
      }
      return cT / TT.total
    }
    const fM = {
      toDOM: TT => TT,
      fromDOM: TT => TT,
      scale: 1,
      eq(TT) {
        return TT == this
      }
    };

    function xM(TT) {
      let kT = TT.facet(kc).filter((TT => "function" != typeof TT)),
        cT = TT.facet(lc).filter((TT => "function" != typeof TT));
      return cT.length && kT.push(lT.y.join(cT)), kT
    }
    class IM {
      constructor(TT, kT, cT) {
        let lT = 0,
          MT = 0,
          KT = 0;
        this.viewports = cT.map((cT => {
          let {
            from: MT,
            to: KT
          } = cT, OT = kT.lineAt(MT, Ll.ByPos, TT, 0, 0).top, yT = kT.lineAt(KT, Ll.ByPos, TT, 0, 0).bottom;
          return lT += yT - OT, {
            from: MT,
            to: KT,
            top: OT,
            bottom: yT,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - lT) / (kT.height - lT);
        for (let OT of this.viewports) OT.domTop = KT + (OT.top - MT) * this.scale, KT = OT.domBottom = OT.domTop + (OT.bottom - OT.top), MT = OT.bottom
      }
      toDOM(TT) {
        for (let kT = 0, cT = 0, lT = 0;; kT++) {
          let MT = kT < this.viewports.length ? this.viewports[kT] : null;
          if (!MT || TT < MT.top) return lT + (TT - cT) * this.scale;
          if (TT <= MT.bottom) return MT.domTop + (TT - MT.top);
          cT = MT.bottom, lT = MT.domBottom
        }
      }
      fromDOM(TT) {
        for (let kT = 0, cT = 0, lT = 0;; kT++) {
          let MT = kT < this.viewports.length ? this.viewports[kT] : null;
          if (!MT || TT < MT.domTop) return cT + (TT - lT) / this.scale;
          if (TT <= MT.domBottom) return MT.top + (TT - MT.domTop);
          cT = MT.bottom, lT = MT.domBottom
        }
      }
      eq(TT) {
        return TT instanceof IM && (this.scale == TT.scale && this.viewports.length == TT.viewports.length && this.viewports.every(((kT, cT) => kT.from == TT.viewports[cT].from && kT.to == TT.viewports[cT].to)))
      }
    }

    function AM(TT, kT) {
      if (1 == kT.scale) return TT;
      let cT = kT.toDOM(TT.top),
        lT = kT.toDOM(TT.bottom);
      return new dl(TT.from, TT.length, cT, lT - cT, Array.isArray(TT._content) ? TT._content.map((TT => AM(TT, kT))) : TT._content)
    }
    const CM = lT.o.define({
        combine: TT => TT.join(" ")
      }),
      jM = lT.o.define({
        combine: TT => TT.indexOf(!0) > -1
      }),
      vM = MT.e.newName(),
      tM = MT.e.newName(),
      hM = MT.e.newName(),
      NM = {
        "&light": "." + tM,
        "&dark": "." + hM
      };

    function QM(TT, kT, cT) {
      return new MT.e(kT, {
        finish: kT => /&/.test(kT) ? kT.replace(/&\w*/, (kT => {
          if ("&" == kT) return TT;
          if (!cT || !cT[kT]) throw new RangeError(`Unsupported selector: ${kT}`);
          return cT[kT]
        })) : TT + " " + kT
      })
    }
    const SM = QM("." + vM, {
        "&": {
          position: "relative !important",
          boxSizing: "border-box",
          "&.cm-focused": {
            outline: "1px dotted #212121"
          },
          display: "flex !important",
          flexDirection: "column"
        },
        ".cm-scroller": {
          display: "flex !important",
          alignItems: "flex-start !important",
          fontFamily: "monospace",
          lineHeight: 1.4,
          height: "100%",
          overflowX: "auto",
          position: "relative",
          zIndex: 0,
          overflowAnchor: "none"
        },
        ".cm-content": {
          margin: 0,
          flexGrow: 2,
          flexShrink: 0,
          display: "block",
          whiteSpace: "pre",
          wordWrap: "normal",
          boxSizing: "border-box",
          minHeight: "100%",
          padding: "4px 0",
          outline: "none",
          "&[contenteditable=true]": {
            WebkitUserModify: "read-write-plaintext-only"
          }
        },
        ".cm-lineWrapping": {
          whiteSpace_fallback: "pre-wrap",
          whiteSpace: "break-spaces",
          wordBreak: "break-word",
          overflowWrap: "anywhere",
          flexShrink: 1
        },
        "&light .cm-content": {
          caretColor: "black"
        },
        "&dark .cm-content": {
          caretColor: "white"
        },
        ".cm-line": {
          display: "block",
          padding: "0 2px 0 6px"
        },
        ".cm-layer": {
          position: "absolute",
          left: 0,
          top: 0,
          contain: "size style",
          "& > *": {
            position: "absolute"
          }
        },
        "&light .cm-selectionBackground": {
          background: "#d9d9d9"
        },
        "&dark .cm-selectionBackground": {
          background: "#222"
        },
        "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
          background: "#d7d4f0"
        },
        "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
          background: "#233"
        },
        ".cm-cursorLayer": {
          pointerEvents: "none"
        },
        "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
          animation: "steps(1) cm-blink 1.2s infinite"
        },
        "@keyframes cm-blink": {
          "0%": {},
          "50%": {
            opacity: 0
          },
          "100%": {}
        },
        "@keyframes cm-blink2": {
          "0%": {},
          "50%": {
            opacity: 0
          },
          "100%": {}
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeft: "1.2px solid black",
          marginLeft: "-0.6px",
          pointerEvents: "none"
        },
        ".cm-cursor": {
          display: "none"
        },
        "&dark .cm-cursor": {
          borderLeftColor: "#ddd"
        },
        ".cm-selectionHandle": {
          backgroundColor: "currentColor",
          width: "1.5px"
        },
        ".cm-selectionHandle-start::before, .cm-selectionHandle-end::before": {
          content: '""',
          backgroundColor: "inherit",
          borderRadius: "50%",
          width: "8px",
          height: "8px",
          position: "absolute",
          left: "-3.25px"
        },
        ".cm-selectionHandle-start::before": {
          top: "-8px"
        },
        ".cm-selectionHandle-end::before": {
          bottom: "-8px"
        },
        ".cm-dropCursor": {
          position: "absolute"
        },
        "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": {
          display: "block"
        },
        ".cm-iso": {
          unicodeBidi: "isolate"
        },
        ".cm-announced": {
          position: "fixed",
          top: "-10000px"
        },
        "@media print": {
          ".cm-announced": {
            display: "none"
          }
        },
        "&light .cm-activeLine": {
          backgroundColor: "#cceeff44"
        },
        "&dark .cm-activeLine": {
          backgroundColor: "#99eeff33"
        },
        "&light .cm-specialChar": {
          color: "red"
        },
        "&dark .cm-specialChar": {
          color: "#f78"
        },
        ".cm-gutters": {
          flexShrink: 0,
          display: "flex",
          height: "100%",
          boxSizing: "border-box",
          zIndex: 200
        },
        ".cm-gutters-before": {
          insetInlineStart: 0
        },
        ".cm-gutters-after": {
          insetInlineEnd: 0
        },
        "&light .cm-gutters": {
          backgroundColor: "#f5f5f5",
          color: "#6c6c6c",
          border: "0px solid #ddd",
          "&.cm-gutters-before": {
            borderRightWidth: "1px"
          },
          "&.cm-gutters-after": {
            borderLeftWidth: "1px"
          }
        },
        "&dark .cm-gutters": {
          backgroundColor: "#333338",
          color: "#ccc"
        },
        ".cm-gutter": {
          display: "flex !important",
          flexDirection: "column",
          flexShrink: 0,
          boxSizing: "border-box",
          minHeight: "100%",
          overflow: "hidden"
        },
        ".cm-gutterElement": {
          boxSizing: "border-box"
        },
        ".cm-lineNumbers .cm-gutterElement": {
          padding: "0 3px 0 5px",
          minWidth: "20px",
          textAlign: "right",
          whiteSpace: "nowrap"
        },
        "&light .cm-activeLineGutter": {
          backgroundColor: "#e2f2ff"
        },
        "&dark .cm-activeLineGutter": {
          backgroundColor: "#222227"
        },
        ".cm-panels": {
          boxSizing: "border-box",
          position: "sticky",
          left: 0,
          right: 0,
          zIndex: 300
        },
        "&light .cm-panels": {
          backgroundColor: "#f5f5f5",
          color: "black"
        },
        "&light .cm-panels-top": {
          borderBottom: "1px solid #ddd"
        },
        "&light .cm-panels-bottom": {
          borderTop: "1px solid #ddd"
        },
        "&dark .cm-panels": {
          backgroundColor: "#333338",
          color: "white"
        },
        ".cm-dialog": {
          padding: "2px 19px 4px 6px",
          position: "relative",
          "& label": {
            fontSize: "80%"
          }
        },
        ".cm-dialog-close": {
          position: "absolute",
          top: "3px",
          right: "4px",
          backgroundColor: "inherit",
          border: "none",
          font: "inherit",
          fontSize: "14px",
          padding: "0"
        },
        ".cm-tab": {
          display: "inline-block",
          overflow: "hidden",
          verticalAlign: "bottom"
        },
        ".cm-widgetBuffer": {
          verticalAlign: "text-top",
          height: "1em",
          width: 0,
          display: "inline"
        },
        ".cm-placeholder": {
          color: "#888",
          display: "inline-block",
          verticalAlign: "top",
          userSelect: "none"
        },
        ".cm-highlightSpace": {
          backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
          backgroundPosition: "center"
        },
        ".cm-highlightTab": {
          backgroundImage: 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>\')',
          backgroundSize: "auto 100%",
          backgroundPosition: "right 90%",
          backgroundRepeat: "no-repeat"
        },
        ".cm-trailingSpace": {
          backgroundColor: "#ff332255"
        },
        ".cm-button": {
          verticalAlign: "middle",
          color: "inherit",
          fontSize: "70%",
          padding: ".2em 1em",
          borderRadius: "1px"
        },
        "&light .cm-button": {
          backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
          border: "1px solid #888",
          "&:active": {
            backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
          }
        },
        "&dark .cm-button": {
          backgroundImage: "linear-gradient(#393939, #111)",
          border: "1px solid #888",
          "&:active": {
            backgroundImage: "linear-gradient(#111, #333)"
          }
        },
        ".cm-textfield": {
          verticalAlign: "middle",
          color: "inherit",
          fontSize: "70%",
          border: "1px solid silver",
          padding: ".2em .5em"
        },
        "&light .cm-textfield": {
          backgroundColor: "white"
        },
        "&dark .cm-textfield": {
          border: "1px solid #555",
          backgroundColor: "inherit"
        }
      }, NM),
      DM = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      aM = rT.ie && rT.ie_version <= 11;
    class FM {
      constructor(TT) {
        this.view = TT, this.active = !1, this.editContext = null, this.selectionRange = new sT, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = TT.contentDOM, this.observer = new MutationObserver((kT => {
          for (let TT of kT) this.queue.push(TT);
          (rT.ie && rT.ie_version <= 11 || rT.ios && TT.composing) && kT.some((TT => "childList" == TT.type && TT.removedNodes.length || "characterData" == TT.type && TT.oldValue.length > TT.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !rT.android || !1 === TT.constructor.EDIT_CONTEXT || rT.chrome && rT.chrome_version < 126 || (this.editContext = new wM(TT), TT.state.facet(Wk) && (TT.contentDOM.editContext = this.editContext.editContext)), aM && (this.onCharData = TT => {
          this.queue.push({
            target: TT.target,
            type: "characterData",
            oldValue: TT.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.zN = this.zN.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var TT;
          (null === (TT = this.view.docView) || void 0 === TT ? void 0 : TT.lastUpdate) < Date.now() - 75 && this.zN()
        })), this.resizeScroll.observe(TT.scrollDOM)), this.addWindowListeners(this.win = TT.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((TT => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), TT.length > 0 && TT[TT.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((TT => {
          TT.length > 0 && TT[TT.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(TT) {
        this.view.inputState.runHandlers("scroll", TT), this.intersecting && this.view.measure()
      }
      onScroll(TT) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(TT)
      }
      zN() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(TT) {
        ("change" != TT.type && TT.type || TT.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(TT) {
        if (this.gapIntersection && (TT.length != this.gaps.length || this.gaps.some(((kT, cT) => kT != TT[cT])))) {
          this.gapIntersection.disconnect();
          for (let kT of TT) this.gapIntersection.observe(kT);
          this.gaps = TT
        }
      }
      onSelectionChange(TT) {
        let kT = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: cT
        } = this, lT = this.selectionRange;
        if (cT.state.facet(Wk) ? cT.root.activeElement != this.dom : !LT(this.dom, lT)) return;
        let MT = lT.anchorNode && cT.docView.tile.nearest(lT.anchorNode);
        MT && MT.isWidget() && MT.widget.ignoreEvent(TT) ? kT || (this.selectionChanged = !1) : (rT.ie && rT.ie_version <= 11 || rT.android && rT.chrome) && !cT.state.selection.main.empty && lT.focusNode && gT(lT.focusNode, lT.focusOffset, lT.anchorNode, lT.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: TT
        } = this, kT = XT(TT.root);
        if (!kT) return !1;
        let cT = rT.safari && 11 == TT.root.nodeType && TT.root.activeElement == this.dom && function(TT, kT) {
          if (kT.getComposedRanges) {
            let cT = kT.getComposedRanges(TT.root)[0];
            if (cT) return PM(TT, cT)
          }
          let cT = null;

          function lT(TT) {
            TT.preventDefault(), TT.stopImmediatePropagation(), cT = TT.getTargetRanges()[0]
          }
          return TT.contentDOM.addEventListener("beforeinput", lT, !0), TT.dom.ownerDocument.execCommand("indent"), TT.contentDOM.removeEventListener("beforeinput", lT, !0), cT ? PM(TT, cT) : null
        }(this.view, kT) || kT;
        if (!cT || this.selectionRange.eq(cT)) return !1;
        let lT = LT(this.dom, cT);
        return lT && !this.selectionChanged && TT.inputState.lastFocusTime > Date.now() - 200 && TT.inputState.lastTouchTime < Date.now() - 300 && function(TT, kT) {
          let cT = kT.focusNode,
            lT = kT.focusOffset;
          if (!cT || kT.anchorNode != cT || kT.anchorOffset != lT) return !1;
          for (lT = Math.min(lT, WT(cT));;)
            if (lT) {
              if (1 != cT.nodeType) return !1;
              let TT = cT.childNodes[lT - 1];
              "false" == TT.contentEditable ? lT-- : (cT = TT, lT = WT(cT))
            } else {
              if (cT == TT) return !0;
              lT = UT(cT), cT = cT.parentNode
            }
        }(this.dom, cT) ? (this.view.inputState.lastFocusTime = 0, TT.docView.updateSelection(), !1) : (this.selectionRange.setRange(cT), lT && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(TT, kT) {
        this.selectionRange.set(TT.node, TT.offset, kT.node, kT.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let TT = 0,
          kT = null;
        for (let cT = this.dom; cT;)
          if (1 == cT.nodeType) !kT && TT < this.scrollTargets.length && this.scrollTargets[TT] == cT ? TT++ : kT || (kT = this.scrollTargets.slice(0, TT)), kT && kT.push(cT), cT = cT.assignedSlot || cT.parentNode;
          else {
            if (11 != cT.nodeType) break;
            cT = cT.host
          } if (TT < this.scrollTargets.length && !kT && (kT = this.scrollTargets.slice(0, TT)), kT) {
          for (let TT of this.scrollTargets) TT.removeEventListener("scroll", this.onScroll);
          for (let TT of this.scrollTargets = kT) TT.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(TT) {
        if (!this.active) return TT();
        try {
          return this.stop(), TT()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, DM), aM && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), aM && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(TT, kT) {
        var cT;
        if (!this.delayedAndroidKey) {
          let TT = () => {
            let TT = this.delayedAndroidKey;
            if (TT) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = TT.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && TT.force && Mk(this.dom, TT.key, TT.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(TT)
        }
        this.delayedAndroidKey && "Enter" != TT || (this.delayedAndroidKey = {
          key: TT,
          keyCode: kT,
          force: this.lastChange < Date.now() - 50 || !!(null === (cT = this.delayedAndroidKey) || void 0 === cT ? void 0 : cT.force)
        })
      }
      clearDelayedAndroidKey() {
        this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1
      }
      flushSoon() {
        this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame((() => {
          this.delayedFlush = -1, this.flush()
        })))
      }
      forceFlush() {
        this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush()
      }
      pendingRecords() {
        for (let TT of this.observer.takeRecords()) this.queue.push(TT);
        return this.queue
      }
      processRecords() {
        let TT = this.pendingRecords();
        TT.length && (this.queue = []);
        let kT = -1,
          cT = -1,
          lT = !1;
        for (let MT of TT) {
          let TT = this.readMutation(MT);
          TT && (TT.typeOver && (lT = !0), -1 == kT ? ({
            from: kT,
            to: cT
          } = TT) : (kT = Math.min(TT.from, kT), cT = Math.max(TT.to, cT)))
        }
        return {
          from: kT,
          to: cT,
          typeOver: lT
        }
      }
      readChange() {
        let {
          from: TT,
          to: kT,
          typeOver: cT
        } = this.processRecords(), lT = this.selectionChanged && LT(this.dom, this.selectionRange);
        if (TT < 0 && !lT) return null;
        TT > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let MT = new ll(this.view, TT, kT, cT);
        return this.view.docView.domChanged = {
          newSel: MT.newSel ? MT.newSel.main : null
        }, MT
      }
      flush() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        TT && this.readSelectionRange();
        let kT = this.readChange();
        if (!kT) return this.view.requestMeasure(), !1;
        let cT = this.view.state,
          lT = Kl(this.view, kT);
        return this.view.state == cT && (kT.domChanged || kT.newSel && !fl(this.view.state.selection, kT.newSel.main)) && this.view.update([]), lT
      }
      readMutation(TT) {
        let kT = this.view.docView.tile.nearest(TT.target);
        if (!kT || kT.isWidget()) return null;
        if (kT.markDirty("attributes" == TT.type), "childList" == TT.type) {
          let cT = rM(kT, TT.previousSibling || TT.target.previousSibling, -1),
            lT = rM(kT, TT.nextSibling || TT.target.nextSibling, 1);
          return {
            from: cT ? kT.posAfter(cT) : kT.posAtStart,
            to: lT ? kT.posBefore(lT) : kT.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == TT.type ? {
          from: kT.posAtStart,
          to: kT.posAtEnd,
          typeOver: TT.target.nodeValue == TT.oldValue
        } : null
      }
      setWindow(TT) {
        TT != this.win && (this.removeWindowListeners(this.win), this.win = TT, this.addWindowListeners(this.win))
      }
      addWindowListeners(TT) {
        TT.addEventListener("resize", this.zN), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : TT.addEventListener("beforeprint", this.onPrint), TT.addEventListener("scroll", this.onScroll), TT.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(TT) {
        TT.removeEventListener("scroll", this.onScroll), TT.removeEventListener("resize", this.zN), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : TT.removeEventListener("beforeprint", this.onPrint), TT.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(TT) {
        this.editContext && (this.editContext.update(TT), TT.startState.facet(Wk) != TT.state.facet(Wk) && (TT.view.contentDOM.editContext = TT.state.facet(Wk) ? this.editContext.editContext : null))
      }
      destroy() {
        var TT, kT, cT;
        this.stop(), null === (TT = this.intersection) || void 0 === TT || TT.disconnect(), null === (kT = this.gapIntersection) || void 0 === kT || kT.disconnect(), null === (cT = this.resizeScroll) || void 0 === cT || cT.disconnect();
        for (let lT of this.scrollTargets) lT.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function rM(TT, kT, cT) {
      for (; kT;) {
        let lT = jc.get(kT);
        if (lT && lT.parent == TT) return lT;
        let MT = kT.parentNode;
        kT = MT != TT.dom ? MT : cT > 0 ? kT.nextSibling : kT.previousSibling
      }
      return null
    }

    function PM(TT, kT) {
      let cT = kT.startContainer,
        lT = kT.startOffset,
        MT = kT.endContainer,
        KT = kT.endOffset,
        OT = TT.docView.domAtPos(TT.state.selection.main.anchor, 1);
      return gT(OT.node, OT.offset, MT, KT) && ([cT, lT, MT, KT] = [MT, KT, cT, lT]), {
        anchorNode: cT,
        anchorOffset: lT,
        focusNode: MT,
        focusOffset: KT
      }
    }
    class wM {
      constructor(TT) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(TT.state);
        let kT = this.editContext = new window.EditContext({
          text: TT.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, TT.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(TT.state.selection.main.head)
        });
        this.handlers.textupdate = cT => {
          let MT = TT.state.selection.main,
            {
              anchor: KT,
              head: OT
            } = MT,
            yT = this.toEditorPos(cT.updateRangeStart),
            fT = this.toEditorPos(cT.updateRangeEnd);
          TT.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: cT.updateRangeStart,
            editorBase: yT,
            drifted: !1
          });
          let xT = fT - yT > cT.text.length;
          yT == this.from && KT < this.from ? yT = KT : fT == this.to && KT > this.to && (fT = KT);
          let IT = yl(TT.state.sliceDoc(yT, fT), cT.text, (xT ? MT.from : MT.to) - yT, xT ? "end" : null);
          if (!IT) {
            let kT = lT.j.single(this.toEditorPos(cT.selectionStart), this.toEditorPos(cT.selectionEnd));
            return void(fl(kT, MT) || TT.dispatch({
              selection: kT,
              userEvent: "select"
            }))
          }
          let AT = {
            from: IT.from + yT,
            to: IT.toA + yT,
            insert: lT.I.of(cT.text.slice(IT.from, IT.toB).split("\n"))
          };
          if ((rT.mac || rT.android) && AT.from == OT - 1 && /^\. ?$/.test(cT.text) && "off" == TT.contentDOM.getAttribute("autocorrect") && (AT = {
              from: yT,
              to: fT,
              insert: lT.I.of([cT.text.replace(".", " ")])
            }), this.pendingContextChange = AT, !TT.state.readOnly) {
            let kT = this.to - this.from + (AT.to - AT.from + AT.insert.length);
            Ol(TT, AT, lT.j.single(this.toEditorPos(cT.selectionStart, kT), this.toEditorPos(cT.selectionEnd, kT)))
          }
          this.pendingContextChange && (this.revertPending(TT.state), this.setSelection(TT.state)), AT.from < AT.to && !AT.insert.length && TT.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(kT.text.slice(Math.max(0, cT.updateRangeStart - 1), Math.min(kT.text.length, cT.updateRangeStart + 1))) && this.handlers.compositionend(cT)
        }, this.handlers.characterboundsupdate = cT => {
          let lT = [],
            MT = null;
          for (let kT = this.toEditorPos(cT.rangeStart), KT = this.toEditorPos(cT.rangeEnd); kT < KT; kT++) {
            let cT = TT.coordsForChar(kT);
            MT = cT && new DOMRect(cT.left, cT.top, cT.right - cT.left, cT.bottom - cT.top) || MT || new DOMRect, lT.push(MT)
          }
          kT.updateCharacterBounds(cT.rangeStart, lT)
        }, this.handlers.textformatupdate = kT => {
          let cT = [];
          for (let TT of kT.getTextFormats()) {
            let kT = TT.underlineStyle,
              lT = TT.underlineThickness;
            if (!/none/i.test(kT) && !/none/i.test(lT)) {
              let MT = this.toEditorPos(TT.rangeStart),
                KT = this.toEditorPos(TT.rangeEnd);
              if (MT < KT) {
                let TT = `text-decoration: underline ${/^[a-z]/.test(kT)?kT+" ":"Dashed"==kT?"dashed ":"Squiggle"==kT?"wavy ":""}${/thin/i.test(lT)?1:2}px`;
                cT.push(HT.mark({
                  attributes: {
                    style: TT
                  }
                }).range(MT, KT))
              }
            }
          }
          TT.dispatch({
            effects: Yk.of(HT.set(cT))
          })
        }, this.handlers.compositionstart = () => {
          TT.inputState.composing < 0 && (TT.inputState.composing = 0, TT.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (TT.inputState.composing = -1, TT.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: kT
            } = this.composing;
            this.composing = null, kT && this.reset(TT.state)
          }
        };
        for (let cT in this.handlers) kT.addEventListener(cT, this.handlers[cT]);
        this.measureReq = {
          read: TT => {
            this.editContext.updateControlBounds(TT.contentDOM.getBoundingClientRect());
            let kT = XT(TT.root);
            kT && kT.rangeCount && this.editContext.updateSelectionBounds(kT.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(TT) {
        let kT = 0,
          cT = !1,
          lT = this.pendingContextChange;
        return TT.changes.iterChanges(((MT, KT, OT, yT, fT) => {
          if (cT) return;
          let xT = fT.length - (KT - MT);
          if (lT && KT >= lT.to) {
            if (lT.from == MT && lT.to == KT && lT.insert.eq(fT)) return lT = this.pendingContextChange = null, kT += xT, void(this.to += xT);
            lT = null, this.revertPending(TT.state)
          }
          if (MT += kT, (KT += kT) <= this.from) this.from += xT, this.to += xT;
          else if (MT < this.to) {
            if (MT < this.from || KT > this.to || this.to - this.from + fT.length > 3e4) return void(cT = !0);
            this.editContext.updateText(this.toContextPos(MT), this.toContextPos(KT), fT.toString()), this.to += xT
          }
          kT += xT
        })), lT && !cT && this.revertPending(TT.state), !cT
      }
      update(TT) {
        let kT = this.pendingContextChange,
          cT = TT.startState.selection.main;
        this.composing && (this.composing.drifted || !TT.changes.touchesRange(cT.from, cT.to) && TT.transactions.some((TT => !TT.isUserEvent("input.type") && TT.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = TT.changes.mapPos(this.composing.editorBase)) : this.applyEdits(TT) && this.rangeIsValid(TT.state) ? (TT.docChanged || TT.selectionSet || kT) && this.setSelection(TT.state) : (this.pendingContextChange = null, this.reset(TT.state)), (TT.geometryChanged || TT.docChanged || TT.selectionSet) && TT.view.requestMeasure(this.measureReq)
      }
      resetRange(TT) {
        let {
          head: kT
        } = TT.selection.main;
        this.from = Math.max(0, kT - 1e4), this.to = Math.min(TT.doc.length, kT + 1e4)
      }
      reset(TT) {
        this.resetRange(TT), this.editContext.updateText(0, this.editContext.text.length, TT.doc.sliceString(this.from, this.to)), this.setSelection(TT)
      }
      revertPending(TT) {
        let kT = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(kT.from), this.toContextPos(kT.from + kT.insert.length), TT.doc.sliceString(kT.from, kT.to))
      }
      setSelection(TT) {
        let {
          main: kT
        } = TT.selection, cT = this.toContextPos(Math.max(this.from, Math.min(this.to, kT.anchor))), lT = this.toContextPos(kT.head);
        this.editContext.selectionStart == cT && this.editContext.selectionEnd == lT || this.editContext.updateSelection(cT, lT)
      }
      rangeIsValid(TT) {
        let {
          head: kT
        } = TT.selection.main;
        return !(this.from > 0 && kT - this.from < 500 || this.to < TT.doc.length && this.to - kT < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        TT = Math.min(TT, kT);
        let cT = this.composing;
        return cT && cT.drifted ? cT.editorBase + (TT - cT.contextBase) : TT + this.from
      }
      toContextPos(TT) {
        let kT = this.composing;
        return kT && kT.drifted ? kT.contextBase + (TT - kT.editorBase) : TT - this.from
      }
      destroy() {
        for (let TT in this.handlers) this.editContext.removeEventListener(TT, this.handlers[TT])
      }
    }
    class mM {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get R7() {
        return this.viewState.R7
      }
      get inView() {
        return this.viewState.inView
      }
      get composing() {
        return !!this.inputState && this.inputState.composing > 0
      }
      get compositionStarted() {
        return !!this.inputState && this.inputState.composing >= 0
      }
      get root() {
        return this._root
      }
      get win() {
        return this.dom.ownerDocument.defaultView || window
      }
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var kT;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), TT.parent && TT.parent.appendChild(this.dom);
        let {
          dispatch: cT
        } = TT;
        this.dispatchTransactions = TT.dispatchTransactions || cT && (TT => TT.forEach((TT => cT(TT, this)))) || (TT => this.update(TT)), this.dispatch = this.dispatch.bind(this), this._root = TT.root || function(TT) {
          for (; TT;) {
            if (TT && (9 == TT.nodeType || 11 == TT.nodeType && TT.host)) return TT;
            TT = TT.assignedSlot || TT.parentNode
          }
          return null
        }(TT.parent) || document, this.viewState = new MM(this, TT.state || lT.l.create(TT)), TT.scrollTo && TT.scrollTo.is(Uk) && (this.viewState.scrollTarget = TT.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(pk).map((TT => new qk(TT)));
        for (let lT of this.plugins) lT.update(this);
        this.observer = new FM(this), this.inputState = new xl(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Zc(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (kT = document.fonts) || void 0 === kT ? void 0 : kT.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
        let MT = 1 == kT.length && kT[0] instanceof lT.M ? kT : 1 == kT.length && Array.isArray(kT[0]) ? kT[0] : [this.state.update(...kT)];
        this.dispatchTransactions(MT, this)
      }
      update(TT) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let kT, cT = !1,
          MT = !1,
          KT = this.state;
        for (let lT of TT) {
          if (lT.startState != KT) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          KT = lT.state
        }
        if (this.destroyed) return void(this.viewState.state = KT);
        let OT = this.hasFocus,
          yT = 0,
          fT = null;
        TT.some((TT => TT.annotation(ol))) ? (this.inputState.notifiedFocused = OT, yT = 1) : OT != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = OT, fT = Hl(KT, OT), fT || (yT = 1));
        let xT = this.observer.delayedAndroidKey,
          IT = null;
        if (xT ? (this.observer.clearDelayedAndroidKey(), IT = this.observer.readChange(), (IT && !this.state.doc.eq(KT.doc) || !this.state.selection.eq(KT.selection)) && (IT = null)) : this.observer.clear(), KT.facet(lT.l.phrases) != this.state.facet(lT.l.phrases)) return this.setState(KT);
        kT = Ac.create(this, KT, TT), kT.flags |= yT;
        let AT = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let kT of TT) {
            if (AT && (AT = AT.map(kT.changes)), kT.scrollIntoView) {
              let {
                main: TT
              } = kT.state.selection, {
                x: cT,
                y: MT
              } = this.state.facet(mM.cursorScrollMargin);
              AT = new gk(TT.empty ? TT : lT.j.cursor(TT.head, TT.head > TT.anchor ? -1 : 1), "nearest", "nearest", MT, cT)
            }
            for (let TT of kT.effects) TT.is(Uk) && (AT = TT.value.clip(this.state))
          }
          this.viewState.update(kT, AT), this.bidiCache = JM.update(this.bidiCache, kT.changes), kT.empty || (this.updatePlugins(kT), this.inputState.update(kT)), cT = this.docView.update(kT), this.state.facet(xc) != this.styleModules && this.mountStyles(), MT = this.updateAttrs(), this.showAnnouncements(TT), this.docView.updateSelection(cT, TT.some((TT => TT.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (kT.startState.facet(CM) != kT.state.facet(CM) && (this.viewState.mustMeasureContent = !0), (cT || MT || AT || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), cT && this.docViewUpdate(), !kT.empty)
          for (let lT of this.state.facet(Vk)) try {
            lT(kT)
          } catch (CT) {
            Bk(this.state, CT, "update listener")
          }(fT || IT) && Promise.resolve().then((() => {
            fT && this.state == fT.startState && this.dispatch(fT), IT && !Kl(this, IT) && xT.force && Mk(this.contentDOM, xT.key, xT.keyCode)
          }))
      }
      setState(TT) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = TT);
        this.updateState = 2;
        let kT = this.hasFocus;
        try {
          for (let TT of this.plugins) TT.destroy(this);
          this.viewState = new MM(this, TT), this.plugins = TT.facet(pk).map((TT => new qk(TT))), this.pluginMap.clear();
          for (let TT of this.plugins) TT.update(this);
          this.docView.destroy(), this.docView = new Zc(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        kT && this.focus(), this.requestMeasure()
      }
      updatePlugins(TT) {
        let kT = TT.startState.facet(pk),
          cT = TT.state.facet(pk);
        if (kT != cT) {
          let lT = [];
          for (let MT of cT) {
            let cT = kT.indexOf(MT);
            if (cT < 0) lT.push(new qk(MT));
            else {
              let kT = this.plugins[cT];
              kT.mustUpdate = TT, lT.push(kT)
            }
          }
          for (let kT of this.plugins) kT.mustUpdate != TT && kT.destroy(this);
          this.plugins = lT, this.pluginMap.clear()
        } else
          for (let lT of this.plugins) lT.mustUpdate = TT;
        for (let lT = 0; lT < this.plugins.length; lT++) this.plugins[lT].update(this);
        kT != cT && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let kT of this.plugins) {
          let cT = kT.value;
          if (cT && cT.docViewUpdate) try {
            cT.docViewUpdate(this)
          } catch (TT) {
            Bk(this.state, TT, "doc view update listener")
          }
        }
      }
      measure() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, TT && this.observer.forceFlush();
        let kT = null,
          cT = this.viewState.scrollParent,
          lT = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: MT,
            scrollAnchorHeight: KT
          } = this.viewState;
        Math.abs(lT - this.viewState.scrollOffset) > 1 && (KT = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let TT = 0;; TT++) {
            if (KT < 0)
              if (Kk(cT || this.win)) MT = -1, KT = this.viewState.heightMap.height;
              else {
                let TT = this.viewState.scrollAnchorAt(lT);
                MT = TT.from, KT = TT.top
              } this.updateState = 1;
            let yT = this.viewState.measure();
            if (!yT && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (TT > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let fT = [];
            4 & yT || ([this.measureRequests, fT] = [fT, this.measureRequests]);
            let xT = fT.map((TT => {
                try {
                  return TT.read(this)
                } catch (kT) {
                  return Bk(this.state, kT), zM
                }
              })),
              IT = Ac.create(this, this.state, []),
              AT = !1;
            IT.flags |= yT, kT ? kT.flags |= yT : kT = IT, this.updateState = 2, IT.empty || (this.updatePlugins(IT), this.inputState.update(IT), this.updateAttrs(), AT = this.docView.update(IT), AT && this.docViewUpdate());
            for (let TT = 0; TT < fT.length; TT++)
              if (xT[TT] != zM) try {
                let kT = fT[TT];
                kT.write && kT.write(xT[TT], this)
              } catch (OT) {
                Bk(this.state, OT)
              }
            if (AT && this.docView.updateSelection(!0), !IT.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, KT = -1;
                  continue
                } {
                  let TT = ((MT < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(MT).top) - KT) / this.scaleY;
                  if ((TT > 1 || TT < -1) && (cT == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    lT += TT, cT ? cT.scrollTop += TT : this.win.scrollBy(0, TT), KT = -1;
                    continue
                  }
                }
              }
              break
            }
          }
        } finally {
          this.updateState = 0, this.measureScheduled = -1
        }
        if (kT && !kT.empty)
          for (let yT of this.state.facet(Vk)) yT(kT)
      }
      get themeClasses() {
        return vM + " " + (this.state.facet(jM) ? hM : tM) + " " + this.state.facet(CM)
      }
      updateAttrs() {
        let TT = oM(this, sk, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          kT = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(Wk) ? "true" : "false",
            class: "cm-content",
            style: `${rT.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (kT["aria-readonly"] = "true"), oM(this, Tc, kT);
        let cT = this.observer.ignore((() => {
          let cT = bT(this.contentDOM, this.contentAttrs, kT),
            lT = bT(this.dom, this.editorAttrs, TT);
          return cT || lT
        }));
        return this.editorAttrs = TT, this.contentAttrs = kT, cT
      }
      showAnnouncements(TT) {
        let kT = !0;
        for (let cT of TT)
          for (let TT of cT.effects)
            if (TT.is(mM.announce)) {
              kT && (this.announceDOM.textContent = ""), kT = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = TT.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(xc);
        let TT = this.state.facet(mM.cspNonce);
        MT.e.mount(this.root, this.styleModules.concat(SM).reverse(), TT ? {
          nonce: TT
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(TT) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), TT) {
          if (this.measureRequests.indexOf(TT) > -1) return;
          if (null != TT.key)
            for (let kT = 0; kT < this.measureRequests.length; kT++)
              if (this.measureRequests[kT].key === TT.key) return void(this.measureRequests[kT] = TT);
          this.measureRequests.push(TT)
        }
      }
      plugin(TT) {
        let kT = this.pluginMap.get(TT);
        return (void 0 === kT || kT && kT.plugin != TT) && this.pluginMap.set(TT, kT = this.plugins.find((kT => kT.plugin == TT)) || null), kT && kT.update(this).value
      }
      get documentTop() {
        return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop
      }
      get documentPadding() {
        return {
          top: this.viewState.paddingTop,
          bottom: this.viewState.paddingBottom
        }
      }
      get scaleX() {
        return this.viewState.scaleX
      }
      get scaleY() {
        return this.viewState.scaleY
      }
      elementAtHeight(TT) {
        return this.readMeasured(), this.viewState.elementAtHeight(TT)
      }
      lineBlockAtHeight(TT) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(TT)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(TT) {
        return this.viewState.lineBlockAt(TT)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(TT, kT, cT) {
        return Wc(this, TT, Uc(this, TT, kT, cT))
      }
      moveByGroup(TT, kT) {
        return Wc(this, TT, Uc(this, TT, kT, (kT => function(TT, kT, cT) {
          let MT = TT.state.charCategorizer(kT),
            KT = MT(cT);
          return TT => {
            let kT = MT(TT);
            return KT == lT.i.Space && (KT = kT), KT == kT
          }
        }(this, TT.head, kT))))
      }
      visualLineSide(TT, kT) {
        let cT = this.bidiSpans(TT),
          MT = this.textDirectionAt(TT.from),
          KT = cT[kT ? cT.length - 1 : 0];
        return lT.j.cursor(KT.side(kT, MT) + TT.from, KT.forward(!kT, MT) ? 1 : -1)
      }
      moveToLineBoundary(TT, kT) {
        return function(TT, kT, cT, MT) {
          let KT = gc(TT, kT.head, kT.assoc || -1),
            OT = MT && KT.type == oT.Text && (TT.lineWrapping || KT.widgetLineBreaks) ? TT.coordsAtPos(kT.assoc < 0 && kT.head > KT.from ? kT.head - 1 : kT.head) : null;
          if (OT) {
            let kT = TT.dom.getBoundingClientRect(),
              MT = TT.textDirectionAt(KT.from),
              yT = TT.posAtCoords({
                x: cT == (MT == xk.LTR) ? kT.right - 1 : kT.left + 1,
                y: (OT.top + OT.bottom) / 2
              });
            if (null != yT) return lT.j.cursor(yT, cT ? -1 : 1)
          }
          return lT.j.cursor(cT ? KT.to : KT.from, cT ? -1 : 1)
        }(this, TT, kT, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(TT, kT, cT) {
        return Wc(this, TT, function(TT, kT, cT, MT) {
          let KT = kT.head,
            OT = cT ? 1 : -1;
          if (KT == (cT ? TT.state.doc.length : 0)) return lT.j.cursor(KT, kT.assoc);
          let yT, fT = kT.goalColumn,
            xT = TT.contentDOM.getBoundingClientRect(),
            IT = TT.coordsAtPos(KT, kT.assoc || ((kT.empty ? cT : kT.head == kT.from) ? 1 : -1)),
            AT = TT.documentTop;
          if (IT) null == fT && (fT = IT.left - xT.left), yT = OT < 0 ? IT.top : IT.bottom;
          else {
            let kT = TT.viewState.lineBlockAt(KT);
            null == fT && (fT = Math.min(xT.right - xT.left, TT.defaultCharacterWidth * (KT - kT.from))), yT = (OT < 0 ? kT.top : kT.bottom) + AT
          }
          let CT = xT.left + fT,
            jT = TT.viewState.heightOracle.textHeight >> 1,
            vT = null !== MT && void 0 !== MT ? MT : jT;
          for (let tT = 0;; tT += jT) {
            let kT = yT + (vT + tT) * OT,
              MT = pc(TT, {
                x: CT,
                y: kT
              }, !1, OT);
            if (cT ? kT > xT.bottom : kT < xT.top) return lT.j.cursor(MT.pos, MT.assoc);
            let KT = TT.coordsAtPos(MT.pos, MT.assoc),
              IT = KT ? (KT.top + KT.bottom) / 2 : 0;
            if (!KT || (cT ? IT > yT : IT < yT)) return lT.j.cursor(MT.pos, MT.assoc, void 0, fT)
          }
        }(this, TT, kT, cT))
      }
      domAtPos(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(TT, kT)
      }
      posAtDOM(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(TT, kT)
      }
      posAtCoords(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let cT = pc(this, TT, kT);
        return cT && cT.pos
      }
      posAndSideAtCoords(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), pc(this, TT, kT)
      }
      coordsAtPos(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let cT = this.docView.coordsAt(TT, kT);
        if (!cT || cT.left == cT.right) return cT;
        let lT = this.state.doc.lineAt(TT),
          MT = this.bidiSpans(lT);
        return nT(cT, MT[Sk.find(MT, TT - lT.from, -1, kT)].dir == xk.LTR == kT > 0)
      }
      coordsForChar(TT) {
        return this.readMeasured(), this.docView.coordsForChar(TT)
      }
      get defaultCharacterWidth() {
        return this.viewState.heightOracle.charWidth
      }
      get defaultLineHeight() {
        return this.viewState.heightOracle.lineHeight
      }
      get textDirection() {
        return this.viewState.defaultTextDirection
      }
      textDirectionAt(TT) {
        return !this.state.facet(dk) || TT < this.viewport.from || TT > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(TT))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(TT) {
        if (TT.length > bM) return wk(TT.length);
        let kT, cT = this.textDirectionAt(TT.from);
        for (let MT of this.bidiCache)
          if (MT.from == TT.from && MT.dir == cT && (MT.fresh || Dk(MT.isolates, kT = Oc(this, TT)))) return MT.order;
        kT || (kT = Oc(this, TT));
        let lT = Pk(TT.text, cT, kT);
        return this.bidiCache.push(new JM(TT.from, TT.to, cT, kT, !0, lT)), lT
      }
      get hasFocus() {
        var TT;
        return (this.dom.ownerDocument.hasFocus() || rT.safari && (null === (TT = this.inputState) || void 0 === TT ? void 0 : TT.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          ck(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(TT) {
        this._root != TT && (this._root = TT, this.observer.setWindow((9 == TT.nodeType ? TT : TT.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let TT of this.plugins) TT.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var cT, MT, KT, OT;
        return Uk.of(new gk("number" == typeof TT ? lT.j.cursor(TT) : TT, null !== (cT = kT.y) && void 0 !== cT ? cT : "nearest", null !== (MT = kT.x) && void 0 !== MT ? MT : "nearest", null !== (KT = kT.yMargin) && void 0 !== KT ? KT : 5, null !== (OT = kT.xMargin) && void 0 !== OT ? OT : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: TT,
          scrollLeft: kT
        } = this.scrollDOM, cT = this.viewState.scrollAnchorAt(TT);
        return Uk.of(new gk(lT.j.cursor(cT.from), "start", "start", cT.top - TT, kT, !0))
      }
      setTabFocusMode(TT) {
        null == TT ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof TT ? this.inputState.tabFocusMode = TT ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + TT)
      }
      static domEventHandlers(TT) {
        return ik.define((() => ({})), {
          eventHandlers: TT
        })
      }
      static domEventObservers(TT) {
        return ik.define((() => ({})), {
          eventObservers: TT
        })
      }
      static theme(TT, kT) {
        let cT = MT.e.newName(),
          lT = [CM.of(cT), xc.of(QM(`.${cT}`, TT))];
        return kT && kT.dark && lT.push(jM.of(!0)), lT
      }
      static baseTheme(TT) {
        return lT.t.lowest(xc.of(QM("." + vM, TT, NM)))
      }
      static findFromDOM(TT) {
        var kT;
        let cT = TT.querySelector(".cm-content"),
          lT = cT && jc.get(cT) || jc.get(TT);
        return (null === (kT = null === lT || void 0 === lT ? void 0 : lT.root) || void 0 === kT ? void 0 : kT.view) || null
      }
    }
    mM.styleModule = xc, mM.inputHandler = Ek, mM.clipboardInputFilter = uk, mM.clipboardOutputFilter = Xk, mM.scrollHandler = Rk, mM.focusChangeEffect = Zk, mM.perLineTextDirection = dk, mM.exceptionSink = Gk, mM.updateListener = Vk, mM.editable = Wk, mM.mouseSelectionStyle = ek, mM.dragMovesSelection = Hk, mM.clickAddsSelectionRange = Jk, mM.cK = kc, mM.blockWrappers = cc, mM.outerDecorations = lc, mM.atomicRanges = Mc, mM.bidiIsolatedRanges = Kc, mM.cursorScrollMargin = lT.o.define({
      combine: TT => {
        let kT = 5,
          cT = 5;
        for (let lT of TT) "number" == typeof lT ? kT = cT = lT : ({
          x: kT,
          y: cT
        } = lT);
        return {
          x: kT,
          y: cT
        }
      }
    }), mM.scrollMargins = yc, mM.darkTheme = jM, mM.cspNonce = lT.o.define({
      combine: TT => TT.length ? TT[0] : ""
    }), mM.contentAttributes = Tc, mM.editorAttributes = sk, mM.lineWrapping = mM.contentAttributes.of({
      class: "cm-lineWrapping"
    }), mM.announce = lT.F.define();
    const bM = 4096,
      zM = {};
    class JM {
      constructor(TT, kT, cT, lT, MT, KT) {
        this.from = TT, this.to = kT, this.dir = cT, this.isolates = lT, this.fresh = MT, this.order = KT
      }
      static update(TT, kT) {
        if (kT.empty && !TT.some((TT => TT.fresh))) return TT;
        let cT = [],
          lT = TT.length ? TT[TT.length - 1].dir : xk.LTR;
        for (let MT = Math.max(0, TT.length - 10); MT < TT.length; MT++) {
          let KT = TT[MT];
          KT.dir != lT || kT.touchesRange(KT.from, KT.to) || cT.push(new JM(kT.mapPos(KT.from, 1), kT.mapPos(KT.to, -1), KT.dir, KT.isolates, !1, KT.order))
        }
        return cT
      }
    }

    function oM(TT, kT, cT) {
      for (let lT = TT.state.facet(kT), MT = lT.length - 1; MT >= 0; MT--) {
        let kT = lT[MT],
          KT = "function" == typeof kT ? kT(TT) : kT;
        KT && PT(KT, cT)
      }
      return cT
    }
    const HM = rT.mac ? "mac" : rT.windows ? "win" : rT.linux ? "linux" : "key";

    function eM(TT, kT, cT) {
      return kT.altKey && (TT = "Alt-" + TT), kT.ctrlKey && (TT = "Ctrl-" + TT), kT.metaKey && (TT = "Meta-" + TT), !1 !== cT && kT.shiftKey && (TT = "Shift-" + TT), TT
    }
    const GM = lT.t.default(mM.domEventHandlers({
        keydown: (TT, kT) => RM(ZM(kT.state), TT, kT, "editor")
      })),
      VM = lT.o.define({
        enables: GM
      }),
      EM = new WeakMap;

    function ZM(TT) {
      let kT = TT.facet(VM),
        cT = EM.get(kT);
      return cT || EM.set(kT, cT = function(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HM,
          cT = Object.create(null),
          lT = Object.create(null),
          MT = (TT, kT) => {
            let cT = lT[TT];
            if (null == cT) lT[TT] = kT;
            else if (cT != kT) throw new Error("Key binding " + TT + " is used both as a regular binding and as a multi-stroke prefix")
          },
          KT = (TT, lT, KT, OT, yT) => {
            var fT, xT;
            let IT = cT[TT] || (cT[TT] = Object.create(null)),
              AT = lT.split(/ (?!$)/).map((TT => function(TT, kT) {
                const cT = TT.split(/-(?!$)/);
                let lT, MT, KT, OT, yT = cT[cT.length - 1];
                "Space" == yT && (yT = " ");
                for (let fT = 0; fT < cT.length - 1; ++fT) {
                  const TT = cT[fT];
                  if (/^(cmd|meta|m)$/i.test(TT)) OT = !0;
                  else if (/^a(lt)?$/i.test(TT)) lT = !0;
                  else if (/^(c|ctrl|control)$/i.test(TT)) MT = !0;
                  else if (/^s(hift)?$/i.test(TT)) KT = !0;
                  else {
                    if (!/^mod$/i.test(TT)) throw new Error("Unrecognized modifier name: " + TT);
                    "mac" == kT ? OT = !0 : MT = !0
                  }
                }
                return lT && (yT = "Alt-" + yT), MT && (yT = "Ctrl-" + yT), OT && (yT = "Meta-" + yT), KT && (yT = "Shift-" + yT), yT
              }(TT, kT)));
            for (let kT = 1; kT < AT.length; kT++) {
              let cT = AT.slice(0, kT).join(" ");
              MT(cT, !0), IT[cT] || (IT[cT] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [kT => {
                  let lT = XM = {
                    view: kT,
                    prefix: cT,
                    scope: TT
                  };
                  return setTimeout((() => {
                    XM == lT && (XM = null)
                  }), dM), !0
                }]
              })
            }
            let CT = AT.join(" ");
            MT(CT, !1);
            let jT = IT[CT] || (IT[CT] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (xT = null === (fT = IT._any) || void 0 === fT ? void 0 : fT.run) || void 0 === xT ? void 0 : xT.slice()) || []
            });
            KT && jT.run.push(KT), OT && (jT.preventDefault = !0), yT && (jT.stopPropagation = !0)
          };
        for (let OT of TT) {
          let TT = OT.scope ? OT.scope.split(" ") : ["editor"];
          if (OT.any)
            for (let kT of TT) {
              let TT = cT[kT] || (cT[kT] = Object.create(null));
              TT._any || (TT._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: lT
              } = OT;
              for (let kT in TT) TT[kT].run.push((TT => lT(TT, LM)))
            }
          let lT = OT[kT] || OT.key;
          if (lT)
            for (let kT of TT) KT(kT, lT, OT.run, OT.preventDefault, OT.stopPropagation), OT.shift && KT(kT, "Shift-" + lT, OT.shift, OT.preventDefault, OT.stopPropagation)
        }
        return cT
      }(kT.reduce(((TT, kT) => TT.concat(kT)), []))), cT
    }

    function uM(TT, kT, cT) {
      return RM(ZM(TT.state), kT, TT, cT)
    }
    let XM = null;
    const dM = 4e3;
    let LM = null;

    function RM(TT, kT, cT, MT) {
      LM = kT;
      let xT = function(TT) {
          var kT = !(yT && TT.metaKey && TT.shiftKey && !TT.ctrlKey && !TT.altKey || fT && TT.shiftKey && TT.key && 1 == TT.key.length || "Unidentified" == TT.key) && TT.key || (TT.shiftKey ? OT : KT)[TT.keyCode] || TT.key || "Unidentified";
          return "Esc" == kT && (kT = "Escape"), "Del" == kT && (kT = "Delete"), "Left" == kT && (kT = "ArrowLeft"), "Up" == kT && (kT = "ArrowUp"), "Right" == kT && (kT = "ArrowRight"), "Down" == kT && (kT = "ArrowDown"), kT
        }(kT),
        IT = (0, lT.N)(xT, 0),
        AT = (0, lT.O)(IT) == xT.length && " " != xT,
        CT = "",
        jT = !1,
        vT = !1,
        tT = !1;
      XM && XM.view == cT && XM.scope == MT && (CT = XM.prefix + " ", vl.indexOf(kT.keyCode) < 0 && (vT = !0, XM = null));
      let hT, NT, QT = new Set,
        ST = TT => {
          if (TT) {
            for (let kT of TT.run)
              if (!QT.has(kT) && (QT.add(kT), kT(cT))) return TT.stopPropagation && (tT = !0), !0;
            TT.preventDefault && (TT.stopPropagation && (tT = !0), vT = !0)
          }
          return !1
        },
        DT = TT[MT];
      return DT && (ST(DT[CT + eM(xT, kT, !AT)]) ? jT = !0 : !AT || !(kT.altKey || kT.metaKey || kT.ctrlKey) || rT.windows && kT.ctrlKey && kT.altKey || rT.mac && kT.altKey && !kT.ctrlKey && !kT.metaKey || !(hT = KT[kT.keyCode]) || hT == xT ? AT && kT.shiftKey && ST(DT[CT + eM(xT, kT, !0)]) && (jT = !0) : (ST(DT[CT + eM(hT, kT, !0)]) || kT.shiftKey && (NT = OT[kT.keyCode]) != xT && NT != hT && ST(DT[CT + eM(NT, kT, !1)])) && (jT = !0), !jT && ST(DT._any) && (jT = !0)), vT && (jT = !0), jT && tT && kT.stopPropagation(), LM = null, jT
    }
    class gM {
      constructor(TT, kT, cT, lT, MT) {
        this.className = TT, this.left = kT, this.top = cT, this.width = lT, this.height = MT
      }
      draw() {
        let TT = document.createElement("div");
        return TT.className = this.className, this.adjust(TT), TT
      }
      update(TT, kT) {
        return kT.className == this.className && (this.adjust(TT), !0)
      }
      adjust(TT) {
        TT.style.left = this.left + "px", TT.style.top = this.top + "px", null != this.width && (TT.style.width = this.width + "px"), TT.style.height = this.height + "px"
      }
      eq(TT) {
        return this.left == TT.left && this.top == TT.top && this.width == TT.width && this.height == TT.height && this.className == TT.className
      }
      static forRange(TT, kT, cT) {
        if (cT.empty) {
          let lT = TT.coordsAtPos(cT.head, cT.assoc || 1);
          if (!lT) return [];
          let MT = UM(TT);
          return [new gM(kT, lT.left - MT.left, lT.top - MT.top, null, lT.bottom - lT.top)]
        }
        return function(TT, kT, cT) {
          if (cT.to <= TT.viewport.from || cT.from >= TT.viewport.to) return [];
          let lT = Math.max(cT.from, TT.viewport.from),
            MT = Math.min(cT.to, TT.viewport.to),
            KT = TT.textDirection == xk.LTR,
            OT = TT.contentDOM,
            yT = OT.getBoundingClientRect(),
            fT = UM(TT),
            xT = OT.querySelector(".cm-line"),
            IT = xT && window.getComputedStyle(xT),
            AT = yT.left + (IT ? parseInt(IT.paddingLeft) + Math.min(0, parseInt(IT.textIndent)) : 0),
            CT = yT.right - (IT ? parseInt(IT.paddingRight) : 0),
            jT = gc(TT, lT, 1),
            vT = gc(TT, MT, -1),
            tT = jT.type == oT.Text ? jT : null,
            hT = vT.type == oT.Text ? vT : null;
          tT && (TT.lineWrapping || jT.widgetLineBreaks) && (tT = YM(TT, lT, 1, tT));
          hT && (TT.lineWrapping || vT.widgetLineBreaks) && (hT = YM(TT, MT, -1, hT));
          if (tT && hT && tT.from == hT.from && tT.to == hT.to) return QT(ST(cT.from, cT.to, tT));
          {
            let kT = tT ? ST(cT.from, null, tT) : DT(jT, !1),
              lT = hT ? ST(null, cT.to, hT) : DT(vT, !0),
              MT = [];
            return (tT || jT).to < (hT || vT).from - (tT && hT ? 1 : 0) || jT.widgetLineBreaks > 1 && kT.bottom + TT.defaultLineHeight / 2 < lT.top ? MT.push(NT(AT, kT.bottom, CT, lT.top)) : kT.bottom < lT.top && TT.elementAtHeight((kT.bottom + lT.top) / 2).type == oT.Text && (kT.bottom = lT.top = (kT.bottom + lT.top) / 2), QT(kT).concat(MT).concat(QT(lT))
          }

          function NT(TT, cT, lT, MT) {
            return new gM(kT, TT - fT.left, cT - fT.top, Math.max(0, lT - TT), MT - cT)
          }

          function QT(TT) {
            let {
              top: kT,
              bottom: cT,
              horizontal: lT
            } = TT, MT = [];
            for (let KT = 0; KT < lT.length; KT += 2) MT.push(NT(lT[KT], kT, lT[KT + 1], cT));
            return MT
          }

          function ST(kT, cT, lT) {
            let MT = 1e9,
              OT = -1e9,
              yT = [];

            function fT(kT, cT, fT, xT, IT) {
              let jT = TT.coordsAtPos(kT, kT == lT.to ? -2 : 2),
                vT = TT.coordsAtPos(fT, fT == lT.from ? 2 : -2);
              jT && vT && (MT = Math.min(jT.top, vT.top, MT), OT = Math.max(jT.bottom, vT.bottom, OT), IT == xk.LTR ? yT.push(KT && cT ? AT : jT.left, KT && xT ? CT : vT.right) : yT.push(!KT && xT ? AT : vT.left, !KT && cT ? CT : jT.right))
            }
            let xT = null !== kT && void 0 !== kT ? kT : lT.from,
              IT = null !== cT && void 0 !== cT ? cT : lT.to;
            for (let KT of TT.R7)
              if (KT.to > xT && KT.from < IT)
                for (let lT = Math.max(KT.from, xT), MT = Math.min(KT.to, IT);;) {
                  let KT = TT.state.doc.lineAt(lT);
                  for (let OT of TT.bidiSpans(KT)) {
                    let TT = OT.from + KT.from,
                      yT = OT.to + KT.from;
                    if (TT >= MT) break;
                    yT > lT && fT(Math.max(TT, lT), null == kT && TT <= xT, Math.min(yT, MT), null == cT && yT >= IT, OT.dir)
                  }
                  if (lT = KT.to + 1, lT >= MT) break
                }
            return 0 == yT.length && fT(xT, null == kT, IT, null == cT, TT.textDirection), {
              top: MT,
              bottom: OT,
              horizontal: yT
            }
          }

          function DT(TT, kT) {
            let cT = yT.top + (kT ? TT.top : TT.bottom);
            return {
              top: cT,
              bottom: cT,
              horizontal: []
            }
          }
        }(TT, kT, cT)
      }
    }

    function UM(TT) {
      let kT = TT.scrollDOM.getBoundingClientRect();
      return {
        left: (TT.textDirection == xk.LTR ? kT.left : kT.right - TT.scrollDOM.clientWidth * TT.scaleX) - TT.scrollDOM.scrollLeft * TT.scaleX,
        top: kT.top - TT.scrollDOM.scrollTop * TT.scaleY
      }
    }

    function YM(TT, kT, cT, lT) {
      let MT = TT.coordsAtPos(kT, 2 * cT);
      if (!MT) return lT;
      let KT = TT.dom.getBoundingClientRect(),
        OT = (MT.top + MT.bottom) / 2,
        yT = TT.posAtCoords({
          x: KT.left + 1,
          y: OT
        }),
        fT = TT.posAtCoords({
          x: KT.right - 1,
          y: OT
        });
      return null == yT || null == fT ? lT : {
        from: Math.max(lT.from, Math.min(yT, fT)),
        to: Math.min(lT.to, Math.max(yT, fT))
      }
    }
    class BM {
      constructor(TT, kT) {
        this.view = TT, this.layer = kT, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = TT.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), kT.above && this.dom.classList.add("cm-layer-above"), kT.class && this.dom.classList.add(kT.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(TT.state), TT.requestMeasure(this.measureReq), kT.mount && kT.mount(this.dom, TT)
      }
      update(TT) {
        TT.startState.facet(WM) != TT.state.facet(WM) && this.setOrder(TT.state), (this.layer.update(TT, this.dom) || TT.geometryChanged) && (this.scale(), TT.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(TT) {
        !1 !== this.layer.updateOnDocViewUpdate && TT.requestMeasure(this.measureReq)
      }
      setOrder(TT) {
        let kT = 0,
          cT = TT.facet(WM);
        for (; kT < cT.length && cT[kT] != this.layer;) kT++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - kT)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: TT,
          scaleY: kT
        } = this.view;
        TT == this.scaleX && kT == this.scaleY || (this.scaleX = TT, this.scaleY = kT, this.dom.style.transform = `scale(${1/TT}, ${1/kT})`)
      }
      draw(TT) {
        if (TT.length != this.drawn.length || TT.some(((TT, kT) => {
            return cT = TT, lT = this.drawn[kT], !(cT.constructor == lT.constructor && cT.eq(lT));
            var cT, lT
          }))) {
          let kT = this.dom.firstChild,
            cT = 0;
          for (let lT of TT) lT.update && kT && lT.constructor && this.drawn[cT].constructor && lT.update(kT, this.drawn[cT]) ? (kT = kT.nextSibling, cT++) : this.dom.insertBefore(lT.draw(), kT);
          for (; kT;) {
            let TT = kT.nextSibling;
            kT.remove(), kT = TT
          }
          this.drawn = TT, rT.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const WM = lT.o.define();

    function nM(TT) {
      return [ik.define((kT => new BM(kT, TT))), WM.of(TT)]
    }
    const pM = lT.o.define({
      combine: TT => (0, lT.R)(TT, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (TT, kT) => Math.min(TT, kT),
        drawRangeCursor: (TT, kT) => TT || kT
      })
    });

    function iM() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [pM.of(TT), sM, kK, cK, Lk.of(!0)]
    }

    function qM(TT) {
      return TT.startState.facet(pM) != TT.state.facet(pM)
    }
    const sM = nM({
      above: !0,
      markers(TT) {
        let {
          state: kT
        } = TT, cT = kT.facet(pM), MT = [];
        for (let KT of kT.selection.qt) {
          let OT = KT == kT.selection.main;
          if (KT.empty || cT.drawRangeCursor && !(OT && rT.ios && cT.iosSelectionHandles)) {
            let kT = OT ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              cT = KT.empty ? KT : lT.j.cursor(KT.head, KT.assoc);
            for (let lT of gM.forRange(TT, kT, cT)) MT.push(lT)
          }
        }
        return MT
      },
      update(TT, kT) {
        TT.transactions.some((TT => TT.selection)) && (kT.style.animationName = "cm-blink" == kT.style.animationName ? "cm-blink2" : "cm-blink");
        let cT = qM(TT);
        return cT && TK(TT.state, kT), TT.docChanged || TT.selectionSet || cT
      },
      mount(TT, kT) {
        TK(kT.state, TT)
      },
      class: "cm-cursorLayer"
    });

    function TK(TT, kT) {
      kT.style.animationDuration = TT.facet(pM).cursorBlinkRate + "ms"
    }
    const kK = nM({
        above: !1,
        markers(TT) {
          let kT = [],
            {
              main: cT,
              qt: MT
            } = TT.state.selection;
          for (let lT of MT)
            if (!lT.empty)
              for (let cT of gM.forRange(TT, "cm-selectionBackground", lT)) kT.push(cT);
          if (rT.ios && !cT.empty && TT.state.facet(pM).iosSelectionHandles) {
            for (let MT of gM.forRange(TT, "cm-selectionHandle cm-selectionHandle-start", lT.j.cursor(cT.from, 1))) kT.push(MT);
            for (let MT of gM.forRange(TT, "cm-selectionHandle cm-selectionHandle-end", lT.j.cursor(cT.to, 1))) kT.push(MT)
          }
          return kT
        },
        update: (TT, kT) => TT.docChanged || TT.selectionSet || TT.viewportChanged || qM(TT),
        class: "cm-selectionLayer"
      }),
      cK = lT.t.highest(mM.theme({
        ".cm-line": {
          "& ::selection, &::selection": {
            backgroundColor: "transparent !important"
          },
          caretColor: "transparent !important"
        },
        ".cm-content": {
          caretColor: "transparent !important",
          "& :focus": {
            caretColor: "initial !important",
            "&::selection, & ::selection": {
              backgroundColor: "Highlight !important"
            }
          }
        }
      })),
      lK = lT.F.define({
        map: (TT, kT) => null == TT ? null : kT.mapPos(TT)
      }),
      MK = lT.H.define({
        create: () => null,
        update: (TT, kT) => (null != TT && (TT = kT.changes.mapPos(TT)), kT.effects.reduce(((TT, kT) => kT.is(lK) ? kT.value : TT), TT))
      }),
      KK = ik.fromClass(class {
        constructor(TT) {
          this.view = TT, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(TT) {
          var kT;
          let cT = TT.state.field(MK);
          null == cT ? null != this.cursor && (null === (kT = this.cursor) || void 0 === kT || kT.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (TT.startState.field(MK) != cT || TT.docChanged || TT.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: TT
          } = this, kT = TT.state.field(MK), cT = null != kT && TT.coordsAtPos(kT);
          if (!cT) return null;
          let lT = TT.scrollDOM.getBoundingClientRect();
          return {
            left: cT.left - lT.left + TT.scrollDOM.scrollLeft * TT.scaleX,
            top: cT.top - lT.top + TT.scrollDOM.scrollTop * TT.scaleY,
            height: cT.bottom - cT.top
          }
        }
        drawCursor(TT) {
          if (this.cursor) {
            let {
              scaleX: kT,
              scaleY: cT
            } = this.view;
            TT ? (this.cursor.style.left = TT.left / kT + "px", this.cursor.style.top = TT.top / cT + "px", this.cursor.style.height = TT.height / cT + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(TT) {
          this.view.state.field(MK) != TT && this.view.dispatch({
            effects: lK.of(TT)
          })
        }
      }, {
        eventObservers: {
          dragover(TT) {
            this.setDropPos(this.view.posAtCoords({
              x: TT.clientX,
              y: TT.clientY
            }))
          },
          dragleave(TT) {
            TT.target != this.view.contentDOM && this.view.contentDOM.contains(TT.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function OK() {
      return [MK, KK]
    }

    function yK(TT, kT, cT, lT, MT) {
      kT.lastIndex = 0;
      for (let KT, OT = TT.iterRange(cT, lT), yT = cT; !OT.next().done; yT += OT.value.length)
        if (!OT.lineBreak)
          for (; KT = kT.exec(OT.value);) MT(yT + KT.index, KT)
    }
    class fK {
      constructor(TT) {
        const {
          regexp: kT,
          decoration: cT,
          decorate: lT,
          boundary: MT,
          maxLength: KT = 1e3
        } = TT;
        if (!kT.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = kT, lT) this.addMatch = (TT, kT, cT, MT) => lT(MT, cT, cT + TT[0].length, TT, kT);
        else if ("function" == typeof cT) this.addMatch = (TT, kT, lT, MT) => {
          let KT = cT(TT, kT, lT);
          KT && MT(lT, lT + TT[0].length, KT)
        };
        else {
          if (!cT) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (TT, kT, lT, MT) => MT(lT, lT + TT[0].length, cT)
        }
        this.boundary = MT, this.maxLength = KT
      }
      createDeco(TT) {
        let kT = new lT.v,
          cT = kT.add.bind(kT);
        for (let {
            from: lT,
            to: MT
          }
          of
          function(TT, kT) {
            let cT = TT.R7;
            if (1 == cT.length && cT[0].from == TT.viewport.from && cT[0].to == TT.viewport.to) return cT;
            let lT = [];
            for (let {
                from: MT,
                to: KT
              }
              of cT) MT = Math.max(TT.state.doc.lineAt(MT).from, MT - kT), KT = Math.min(TT.state.doc.lineAt(KT).to, KT + kT), lT.length && lT[lT.length - 1].to >= MT ? lT[lT.length - 1].to = KT : lT.push({
              from: MT,
              to: KT
            });
            return lT
          }(TT, this.maxLength)) yK(TT.state.doc, this.regexp, lT, MT, ((kT, lT) => this.addMatch(lT, TT, kT, cT)));
        return kT.finish()
      }
      updateDeco(TT, kT) {
        let cT = 1e9,
          lT = -1;
        return TT.docChanged && TT.changes.iterChanges(((kT, MT, KT, OT) => {
          OT >= TT.view.viewport.from && KT <= TT.view.viewport.to && (cT = Math.min(KT, cT), lT = Math.max(OT, lT))
        })), TT.viewportMoved || lT - cT > 1e3 ? this.createDeco(TT.view) : lT > -1 ? this.updateRange(TT.view, kT.map(TT.changes), cT, lT) : kT
      }
      updateRange(TT, kT, cT, lT) {
        for (let MT of TT.R7) {
          let KT = Math.max(MT.from, cT),
            OT = Math.min(MT.to, lT);
          if (OT >= KT) {
            let cT = TT.state.doc.lineAt(KT),
              lT = cT.to < OT ? TT.state.doc.lineAt(OT) : cT,
              yT = Math.max(MT.from, cT.from),
              fT = Math.min(MT.to, lT.to);
            if (this.boundary) {
              for (; KT > cT.from; KT--)
                if (this.boundary.test(cT.text[KT - 1 - cT.from])) {
                  yT = KT;
                  break
                } for (; OT < lT.to; OT++)
                if (this.boundary.test(lT.text[OT - lT.from])) {
                  fT = OT;
                  break
                }
            }
            let xT, IT = [],
              AT = (TT, kT, cT) => IT.push(cT.range(TT, kT));
            if (cT == lT)
              for (this.regexp.lastIndex = yT - cT.from;
                (xT = this.regexp.exec(cT.text)) && xT.index < fT - cT.from;) this.addMatch(xT, TT, xT.index + cT.from, AT);
            else yK(TT.state.doc, this.regexp, yT, fT, ((kT, cT) => this.addMatch(cT, TT, kT, AT)));
            kT = kT.update({
              filterFrom: yT,
              filterTo: fT,
              filter: (TT, kT) => TT < yT || kT > fT,
              add: IT
            })
          }
        }
        return kT
      }
    }
    const xK = null != /x/.unicode ? "gu" : "g",
      IK = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", xK),
      AK = {
        0: "null",
        7: "bell",
        8: "backspace",
        10: "newline",
        11: "vertical tab",
        13: "carriage return",
        27: "escape",
        8203: "zero width space",
        8204: "zero width non-joiner",
        8205: "zero width joiner",
        8206: "left-to-right mark",
        8207: "right-to-left mark",
        8232: "line separator",
        8237: "left-to-right override",
        8238: "right-to-left override",
        8294: "left-to-right isolate",
        8295: "right-to-left isolate",
        8297: "pop directional isolate",
        8233: "paragraph separator",
        65279: "zero width no-break space",
        65532: "object replacement"
      };
    let CK = null;
    const jK = lT.o.define({
      combine(TT) {
        let kT = (0, lT.R)(TT, {
          render: null,
          specialChars: IK,
          addSpecialChars: null
        });
        return (kT.replaceTabs = ! function() {
          var TT;
          if (null == CK && "undefined" != typeof document && document.body) {
            let kT = document.body.style;
            CK = null != (null !== (TT = kT.tabSize) && void 0 !== TT ? TT : kT.MozTabSize)
          }
          return CK || !1
        }()) && (kT.specialChars = new RegExp("\t|" + kT.specialChars.source, xK)), kT.addSpecialChars && (kT.specialChars = new RegExp(kT.specialChars.source + "|" + kT.addSpecialChars.source, xK)), kT
      }
    });

    function vK() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [jK.of(TT), tK || (tK = ik.fromClass(class {
        constructor(TT) {
          this.view = TT, this.cK = HT.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(TT.state.facet(jK)), this.cK = this.decorator.createDeco(TT)
        }
        makeDecorator(TT) {
          return new fK({
            regexp: TT.specialChars,
            decoration: (kT, cT, MT) => {
              let {
                doc: KT
              } = cT.state, OT = (0, lT.N)(kT[0], 0);
              if (9 == OT) {
                let TT = KT.lineAt(MT),
                  kT = cT.state.tabSize,
                  OT = (0, lT.T)(TT.text, kT, MT - TT.from);
                return HT.replace({
                  widget: new NK((kT - OT % kT) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[OT] || (this.decorationCache[OT] = HT.replace({
                widget: new hK(TT, OT)
              }))
            },
            boundary: TT.replaceTabs ? void 0 : /[^]/
          })
        }
        update(TT) {
          let kT = TT.state.facet(jK);
          TT.startState.facet(jK) != kT ? (this.decorator = this.makeDecorator(kT), this.cK = this.decorator.createDeco(TT.view)) : this.cK = this.decorator.updateDeco(TT, this.cK)
        }
      }, {
        cK: TT => TT.cK
      }))]
    }
    let tK = null;
    class hK extends JT {
      constructor(TT, kT) {
        super(), this.options = TT, this.code = kT
      }
      eq(TT) {
        return TT.code == this.code
      }
      toDOM(TT) {
        let kT = function(TT) {
            return TT >= 32 ? "\u2022" : 10 == TT ? "\u2424" : String.fromCharCode(9216 + TT)
          }(this.code),
          cT = TT.state.phrase("Control character") + " " + (AK[this.code] || "0x" + this.code.toString(16)),
          lT = this.options.render && this.options.render(this.code, cT, kT);
        if (lT) return lT;
        let MT = document.createElement("span");
        return MT.textContent = kT, MT.title = cT, MT.setAttribute("aria-label", cT), MT.className = "cm-specialChar", MT
      }
      ignoreEvent() {
        return !1
      }
    }
    class NK extends JT {
      constructor(TT) {
        super(), this.width = TT
      }
      eq(TT) {
        return TT.width == this.width
      }
      toDOM() {
        let TT = document.createElement("span");
        return TT.textContent = "\t", TT.className = "cm-tab", TT.style.width = this.width + "px", TT
      }
      ignoreEvent() {
        return !1
      }
    }

    function QK() {
      return DK
    }
    const SK = HT.line({
        class: "cm-activeLine"
      }),
      DK = ik.fromClass(class {
        constructor(TT) {
          this.cK = this.getDeco(TT)
        }
        update(TT) {
          (TT.docChanged || TT.selectionSet) && (this.cK = this.getDeco(TT.view))
        }
        getDeco(TT) {
          let kT = -1,
            cT = [];
          for (let lT of TT.state.selection.qt) {
            let MT = TT.lineBlockAt(lT.head);
            MT.from > kT && (cT.push(SK.range(MT.from)), kT = MT.from)
          }
          return HT.set(cT)
        }
      }, {
        cK: TT => TT.cK
      });
    class aK extends JT {
      constructor(TT) {
        super(), this.content = TT
      }
      toDOM(TT) {
        let kT = document.createElement("span");
        return kT.className = "cm-placeholder", kT.style.pointerEvents = "none", kT.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(TT) : this.content.cloneNode(!0)), kT.setAttribute("aria-hidden", "true"), kT
      }
      coordsAt(TT) {
        let kT = TT.firstChild ? RT(TT.firstChild) : [];
        if (!kT.length) return null;
        let cT = window.getComputedStyle(TT.parentNode),
          lT = nT(kT[0], "rtl" != cT.direction),
          MT = parseInt(cT.lineHeight);
        return lT.bottom - lT.top > 1.5 * MT ? {
          left: lT.left,
          right: lT.right,
          top: lT.top,
          bottom: lT.top + MT
        } : lT
      }
      ignoreEvent() {
        return !1
      }
    }

    function FK(TT) {
      let kT = ik.fromClass(class {
        constructor(kT) {
          this.view = kT, this.placeholder = TT ? HT.set([HT.widget({
            widget: new aK(TT),
            side: 1
          }).range(0)]) : HT.none
        }
        get cK() {
          return this.view.state.doc.length ? HT.none : this.placeholder
        }
      }, {
        cK: TT => TT.cK
      });
      return "string" == typeof TT ? [kT, mM.contentAttributes.of({
        "aria-placeholder": TT
      })] : kT
    }
    const rK = 2e3;

    function PK(TT, kT) {
      let cT = TT.posAtCoords({
          x: kT.clientX,
          y: kT.clientY
        }, !1),
        MT = TT.state.doc.lineAt(cT),
        KT = cT - MT.from,
        OT = KT > rK ? -1 : KT == MT.length ? function(TT, kT) {
          let cT = TT.coordsAtPos(TT.viewport.from);
          return cT ? Math.round(Math.abs((cT.left - kT) / TT.defaultCharacterWidth)) : -1
        }(TT, kT.clientX) : (0, lT.T)(MT.text, TT.state.tabSize, cT - MT.from);
      return {
        line: MT.number,
        col: OT,
        off: KT
      }
    }

    function wK(TT, kT) {
      let cT = PK(TT, kT),
        MT = TT.state.selection;
      return cT ? {
        update(TT) {
          if (TT.docChanged) {
            let kT = TT.changes.mapPos(TT.startState.doc.line(cT.line).from),
              lT = TT.state.doc.lineAt(kT);
            cT = {
              line: lT.number,
              col: cT.col,
              off: Math.min(cT.off, lT.length)
            }, MT = MT.map(TT.changes)
          }
        },
        get(kT, KT, OT) {
          let yT = PK(TT, kT);
          if (!yT) return MT;
          let fT = function(TT, kT, cT) {
            let MT = Math.min(kT.line, cT.line),
              KT = Math.max(kT.line, cT.line),
              OT = [];
            if (kT.off > rK || cT.off > rK || kT.col < 0 || cT.col < 0) {
              let yT = Math.min(kT.off, cT.off),
                fT = Math.max(kT.off, cT.off);
              for (let kT = MT; kT <= KT; kT++) {
                let cT = TT.doc.line(kT);
                cT.length <= fT && OT.push(lT.j.range(cT.from + yT, cT.to + fT))
              }
            } else {
              let yT = Math.min(kT.col, cT.col),
                fT = Math.max(kT.col, cT.col);
              for (let kT = MT; kT <= KT; kT++) {
                let cT = TT.doc.line(kT),
                  MT = (0, lT.Y)(cT.text, yT, TT.tabSize, !0);
                if (MT < 0) OT.push(lT.j.cursor(cT.to));
                else {
                  let kT = (0, lT.Y)(cT.text, fT, TT.tabSize);
                  OT.push(lT.j.range(cT.from + MT, cT.from + kT))
                }
              }
            }
            return OT
          }(TT.state, cT, yT);
          return fT.length ? OT ? lT.j.create(fT.concat(MT.qt)) : lT.j.create(fT) : MT
        }
      } : null
    }

    function mK(TT) {
      let kT = (null === TT || void 0 === TT ? void 0 : TT.eventFilter) || (TT => TT.altKey && 0 == TT.button);
      return mM.mouseSelectionStyle.of(((TT, cT) => kT(cT) ? wK(TT, cT) : null))
    }
    const bK = {
        Alt: [18, TT => !!TT.altKey],
        Control: [17, TT => !!TT.ctrlKey],
        Shift: [16, TT => !!TT.shiftKey],
        Meta: [91, TT => !!TT.metaKey]
      },
      zK = {
        style: "cursor: crosshair"
      };

    function JK() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [kT, cT] = bK[TT.key || "Alt"],
        lT = ik.fromClass(class {
          constructor(TT) {
            this.view = TT, this.isDown = !1
          }
          set(TT) {
            this.isDown != TT && (this.isDown = TT, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(TT) {
              this.set(TT.keyCode == kT || cT(TT))
            },
            keyup(TT) {
              TT.keyCode != kT && cT(TT) || this.set(!1)
            },
            mousemove(TT) {
              this.set(cT(TT))
            }
          }
        });
      return [lT, mM.contentAttributes.of((TT => {
        var kT;
        return (null === (kT = TT.plugin(lT)) || void 0 === kT ? void 0 : kT.isDown) ? zK : null
      }))]
    }
    const oK = "-10000px";
    class HK {
      constructor(TT, kT, cT, lT) {
        this.facet = kT, this.createTooltipView = cT, this.removeTooltipView = lT, this.input = TT.state.facet(kT), this.tooltips = this.input.filter((TT => TT));
        let MT = null;
        this.tooltipViews = this.tooltips.map((TT => MT = cT(TT, MT)))
      }
      update(TT, kT) {
        var cT;
        let lT = TT.state.facet(this.facet),
          MT = lT.filter((TT => TT));
        if (lT === this.input) {
          for (let kT of this.tooltipViews) kT.update && kT.update(TT);
          return !1
        }
        let KT = [],
          OT = kT ? [] : null;
        for (let yT = 0; yT < MT.length; yT++) {
          let cT = MT[yT],
            lT = -1;
          if (cT) {
            for (let TT = 0; TT < this.tooltips.length; TT++) {
              let kT = this.tooltips[TT];
              kT && kT.create == cT.create && (lT = TT)
            }
            if (lT < 0) KT[yT] = this.createTooltipView(cT, yT ? KT[yT - 1] : null), OT && (OT[yT] = !!cT.above);
            else {
              let cT = KT[yT] = this.tooltipViews[lT];
              OT && (OT[yT] = kT[lT]), cT.update && cT.update(TT)
            }
          }
        }
        for (let yT of this.tooltipViews) KT.indexOf(yT) < 0 && (this.removeTooltipView(yT), null === (cT = yT.destroy) || void 0 === cT || cT.call(yT));
        return kT && (OT.forEach(((TT, cT) => kT[cT] = TT)), kT.length = OT.length), this.input = lT, this.tooltips = MT, this.tooltipViews = KT, !0
      }
    }

    function eK(TT) {
      let kT = TT.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: kT.clientHeight,
        right: kT.clientWidth
      }
    }
    const GK = lT.o.define({
        combine: TT => {
          var kT, cT, lT;
          return {
            position: rT.ios ? "absolute" : (null === (kT = TT.find((TT => TT.position))) || void 0 === kT ? void 0 : kT.position) || "fixed",
            parent: (null === (cT = TT.find((TT => TT.parent))) || void 0 === cT ? void 0 : cT.parent) || null,
            tooltipSpace: (null === (lT = TT.find((TT => TT.tooltipSpace))) || void 0 === lT ? void 0 : lT.tooltipSpace) || eK
          }
        }
      }),
      VK = new WeakMap,
      EK = ik.fromClass(class {
        constructor(TT) {
          this.view = TT, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let kT = TT.state.facet(GK);
          this.position = kT.position, this.parent = kT.parent, this.classes = TT.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new HK(TT, dK, ((TT, kT) => this.createTooltip(TT, kT)), (TT => {
            this.resizeObserver && this.resizeObserver.unobserve(TT.dom), TT.dom.remove()
          })), this.above = this.manager.tooltips.map((TT => !!TT.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((TT => {
            Date.now() > this.lastTransaction - 50 && TT.length > 0 && TT[TT.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), TT.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let TT of this.manager.tooltipViews) this.intersectionObserver.observe(TT.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(TT) {
          TT.transactions.length && (this.lastTransaction = Date.now());
          let kT = this.manager.update(TT, this.above);
          kT && this.observeIntersection();
          let cT = kT || TT.geometryChanged,
            lT = TT.state.facet(GK);
          if (lT.position != this.position && !this.madeAbsolute) {
            this.position = lT.position;
            for (let TT of this.manager.tooltipViews) TT.dom.style.position = this.position;
            cT = !0
          }
          if (lT.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = lT.parent, this.createContainer();
            for (let TT of this.manager.tooltipViews) this.container.appendChild(TT.dom);
            cT = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          cT && this.maybeMeasure()
        }
        createTooltip(TT, kT) {
          let cT = TT.create(this.view),
            lT = kT ? kT.dom : null;
          if (cT.dom.classList.add("cm-tooltip"), TT.arrow && !cT.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let TT = document.createElement("div");
            TT.className = "cm-tooltip-arrow", cT.dom.appendChild(TT)
          }
          return cT.dom.style.position = this.position, cT.dom.style.top = oK, cT.dom.style.left = "0px", this.container.insertBefore(cT.dom, lT), cT.mount && cT.mount(this.view), this.resizeObserver && this.resizeObserver.observe(cT.dom), cT
        }
        destroy() {
          var TT, kT, cT;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let lT of this.manager.tooltipViews) lT.dom.remove(), null === (TT = lT.destroy) || void 0 === TT || TT.call(lT);
          this.parent && this.container.remove(), null === (kT = this.resizeObserver) || void 0 === kT || kT.disconnect(), null === (cT = this.intersectionObserver) || void 0 === cT || cT.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let TT = 1,
            kT = 1,
            cT = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: TT
            } = this.manager.tooltipViews[0];
            if (rT.safari) {
              let kT = TT.getBoundingClientRect();
              cT = Math.abs(kT.top + 1e4) > 1 || Math.abs(kT.left) > 1
            } else cT = !!TT.offsetParent && TT.offsetParent != this.container.ownerDocument.body
          }
          if (cT || "absolute" == this.position)
            if (this.parent) {
              let cT = this.parent.getBoundingClientRect();
              cT.width && cT.height && (TT = cT.width / this.parent.offsetWidth, kT = cT.height / this.parent.offsetHeight)
            } else({
              scaleX: TT,
              scaleY: kT
            } = this.view.viewState);
          let lT = this.view.scrollDOM.getBoundingClientRect(),
            MT = fc(this.view);
          return {
            visible: {
              left: lT.left + MT.left,
              top: lT.top + MT.top,
              right: lT.right - MT.right,
              bottom: lT.bottom - MT.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((TT, kT) => {
              let cT = this.manager.tooltipViews[kT];
              return cT.getCoords ? cT.getCoords(TT.pos) : this.view.coordsAtPos(TT.pos)
            })),
            size: this.manager.tooltipViews.map((TT => {
              let {
                dom: kT
              } = TT;
              return kT.getBoundingClientRect()
            })),
            space: this.view.state.facet(GK).tooltipSpace(this.view),
            scaleX: TT,
            scaleY: kT,
            makeAbsolute: cT
          }
        }
        writeMeasure(TT) {
          var kT;
          if (TT.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let TT of this.manager.tooltipViews) TT.dom.style.position = "absolute"
          }
          let {
            visible: cT,
            space: lT,
            scaleX: MT,
            scaleY: KT
          } = TT, OT = [];
          for (let yT = 0; yT < this.manager.tooltips.length; yT++) {
            let fT = this.manager.tooltips[yT],
              xT = this.manager.tooltipViews[yT],
              {
                dom: IT
              } = xT,
              AT = TT.pos[yT],
              CT = TT.size[yT];
            if (!AT || !1 !== fT.clip && (AT.bottom <= Math.max(cT.top, lT.top) || AT.top >= Math.min(cT.bottom, lT.bottom) || AT.right < Math.max(cT.left, lT.left) - .1 || AT.left > Math.min(cT.right, lT.right) + .1)) {
              IT.style.top = oK;
              continue
            }
            let jT = fT.arrow ? xT.dom.querySelector(".cm-tooltip-arrow") : null,
              vT = jT ? 7 : 0,
              tT = CT.right - CT.left,
              hT = null !== (kT = VK.get(xT)) && void 0 !== kT ? kT : CT.bottom - CT.top,
              NT = xT.offset || XK,
              QT = this.view.textDirection == xk.LTR,
              ST = CT.width > lT.right - lT.left ? QT ? lT.left : lT.right - CT.width : QT ? Math.max(lT.left, Math.min(AT.left - (jT ? 14 : 0) + NT.x, lT.right - tT)) : Math.min(Math.max(lT.left, AT.left - tT + (jT ? 14 : 0) - NT.x), lT.right - tT),
              DT = this.above[yT];
            !fT.strictSide && (DT ? AT.top - hT - vT - NT.y < lT.top : AT.bottom + hT + vT + NT.y > lT.bottom) && DT == lT.bottom - AT.bottom > AT.top - lT.top && (DT = this.above[yT] = !DT);
            let aT = (DT ? AT.top - lT.top : lT.bottom - AT.bottom) - vT;
            if (aT < hT && !1 !== xT.resize) {
              if (aT < this.view.defaultLineHeight) {
                IT.style.top = oK;
                continue
              }
              VK.set(xT, hT), IT.style.height = (hT = aT) / KT + "px"
            } else IT.style.height && (IT.style.height = "");
            let FT = DT ? AT.top - hT - vT - NT.y : AT.bottom + vT + NT.y,
              rT = ST + tT;
            if (!0 !== xT.overlap)
              for (let TT of OT) TT.left < rT && TT.right > ST && TT.top < FT + hT && TT.bottom > FT && (FT = DT ? TT.top - hT - 2 - vT : TT.bottom + vT + 2);
            if ("absolute" == this.position ? (IT.style.top = (FT - TT.parent.top) / KT + "px", ZK(IT, (ST - TT.parent.left) / MT)) : (IT.style.top = FT / KT + "px", ZK(IT, ST / MT)), jT) {
              let TT = AT.left + (QT ? NT.x : -NT.x) - (ST + 14 - 7);
              jT.style.left = TT / MT + "px"
            }!0 !== xT.overlap && OT.push({
              left: ST,
              top: FT,
              right: rT,
              bottom: FT + hT
            }), IT.classList.toggle("cm-tooltip-above", DT), IT.classList.toggle("cm-tooltip-below", !DT), xT.positioned && xT.positioned(TT.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let TT of this.manager.tooltipViews) TT.dom.style.top = oK
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function ZK(TT, kT) {
      let cT = parseInt(TT.style.left, 10);
      (isNaN(cT) || Math.abs(kT - cT) > 1) && (TT.style.left = kT + "px")
    }
    const uK = mM.baseTheme({
        ".cm-tooltip": {
          zIndex: 500,
          boxSizing: "border-box"
        },
        "&light .cm-tooltip": {
          border: "1px solid #bbb",
          backgroundColor: "#f5f5f5"
        },
        "&light .cm-tooltip-section:not(:first-child)": {
          borderTop: "1px solid #bbb"
        },
        "&dark .cm-tooltip": {
          backgroundColor: "#333338",
          color: "white"
        },
        ".cm-tooltip-arrow": {
          height: "7px",
          width: "14px",
          position: "absolute",
          zIndex: -1,
          overflow: "hidden",
          "&:before, &:after": {
            content: "''",
            position: "absolute",
            width: 0,
            height: 0,
            borderLeft: "7px solid transparent",
            borderRight: "7px solid transparent"
          },
          ".cm-tooltip-above &": {
            bottom: "-7px",
            "&:before": {
              borderTop: "7px solid #bbb"
            },
            "&:after": {
              borderTop: "7px solid #f5f5f5",
              bottom: "1px"
            }
          },
          ".cm-tooltip-below &": {
            top: "-7px",
            "&:before": {
              borderBottom: "7px solid #bbb"
            },
            "&:after": {
              borderBottom: "7px solid #f5f5f5",
              top: "1px"
            }
          }
        },
        "&dark .cm-tooltip .cm-tooltip-arrow": {
          "&:before": {
            borderTopColor: "#333338",
            borderBottomColor: "#333338"
          },
          "&:after": {
            borderTopColor: "transparent",
            borderBottomColor: "transparent"
          }
        }
      }),
      XK = {
        x: 0,
        y: 0
      },
      dK = lT.o.define({
        enables: [EK, uK]
      }),
      LK = lT.o.define({
        combine: TT => TT.reduce(((TT, kT) => TT.concat(kT)), [])
      });
    class RK {
      static create(TT) {
        return new RK(TT)
      }
      constructor(TT) {
        this.view = TT, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new HK(TT, LK, ((TT, kT) => this.createHostedView(TT, kT)), (TT => TT.dom.remove()))
      }
      createHostedView(TT, kT) {
        let cT = TT.create(this.view);
        return cT.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(cT.dom, kT ? kT.dom.nextSibling : this.dom.firstChild), this.mounted && cT.mount && cT.mount(this.view), cT
      }
      mount(TT) {
        for (let kT of this.manager.tooltipViews) kT.mount && kT.mount(TT);
        this.mounted = !0
      }
      positioned(TT) {
        for (let kT of this.manager.tooltipViews) kT.positioned && kT.positioned(TT)
      }
      update(TT) {
        this.manager.update(TT)
      }
      destroy() {
        var TT;
        for (let kT of this.manager.tooltipViews) null === (TT = kT.destroy) || void 0 === TT || TT.call(kT)
      }
      passProp(TT) {
        let kT;
        for (let cT of this.manager.tooltipViews) {
          let lT = cT[TT];
          if (void 0 !== lT)
            if (void 0 === kT) kT = lT;
            else if (kT !== lT) return
        }
        return kT
      }
      get offset() {
        return this.passProp("offset")
      }
      get getCoords() {
        return this.passProp("getCoords")
      }
      get overlap() {
        return this.passProp("overlap")
      }
      get resize() {
        return this.passProp("resize")
      }
    }
    const gK = dK.compute([LK], (TT => {
      let kT = TT.facet(LK);
      return 0 === kT.length ? null : {
        pos: Math.min(...kT.map((TT => TT.pos))),
        end: Math.max(...kT.map((TT => {
          var kT;
          return null !== (kT = TT.end) && void 0 !== kT ? kT : TT.pos
        }))),
        create: RK.create,
        above: kT[0].above,
        arrow: kT.some((TT => TT.arrow))
      }
    }));
    class UK {
      constructor(TT, kT, cT, lT, MT) {
        this.view = TT, this.source = kT, this.field = cT, this.setHover = lT, this.hoverTime = MT, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: TT.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), TT.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), TT.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let TT = Date.now() - this.lastMove.time;
        TT < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - TT) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: TT,
          lastMove: kT
        } = this, cT = TT.docView.tile.nearest(kT.target);
        if (!cT) return;
        let lT, MT = 1;
        if (cT.isWidget()) lT = cT.posAtStart;
        else {
          if (lT = TT.posAtCoords(kT), null == lT) return;
          let cT = TT.coordsAtPos(lT);
          if (!cT || kT.y < cT.top || kT.y > cT.bottom || kT.x < cT.left - TT.defaultCharacterWidth || kT.x > cT.right + TT.defaultCharacterWidth) return;
          let KT = TT.bidiSpans(TT.state.doc.lineAt(lT)).find((TT => TT.from <= lT && TT.to >= lT)),
            OT = KT && KT.dir == xk.RTL ? -1 : 1;
          MT = kT.x < cT.left ? -OT : OT
        }
        let KT = this.source(TT, lT, MT);
        if (null === KT || void 0 === KT ? void 0 : KT.then) {
          let kT = this.pending = {
            pos: lT
          };
          KT.then((cT => {
            this.pending == kT && (this.pending = null, !cT || Array.isArray(cT) && !cT.length || TT.dispatch({
              effects: this.setHover.of(Array.isArray(cT) ? cT : [cT])
            }))
          }), (kT => Bk(TT.state, kT, "hover tooltip")))
        } else !KT || Array.isArray(KT) && !KT.length || TT.dispatch({
          effects: this.setHover.of(Array.isArray(KT) ? KT : [KT])
        })
      }
      get tooltip() {
        let TT = this.view.plugin(EK),
          kT = TT ? TT.manager.tooltips.findIndex((TT => TT.create == RK.create)) : -1;
        return kT > -1 ? TT.manager.tooltipViews[kT] : null
      }
      mousemove(TT) {
        var kT, cT;
        this.lastMove = {
          x: TT.clientX,
          y: TT.clientY,
          target: TT.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: lT,
          tooltip: MT
        } = this;
        if (lT.length && MT && ! function(TT, kT) {
            let cT, {
              left: lT,
              right: MT,
              top: KT,
              bottom: OT
            } = TT.getBoundingClientRect();
            if (cT = TT.querySelector(".cm-tooltip-arrow")) {
              let TT = cT.getBoundingClientRect();
              KT = Math.min(TT.top, KT), OT = Math.max(TT.bottom, OT)
            }
            return kT.clientX >= lT - YK && kT.clientX <= MT + YK && kT.clientY >= KT - YK && kT.clientY <= OT + YK
          }(MT.dom, TT) || this.pending) {
          let {
            pos: MT
          } = lT[0] || this.pending, KT = null !== (cT = null === (kT = lT[0]) || void 0 === kT ? void 0 : kT.end) && void 0 !== cT ? cT : MT;
          (MT == KT ? this.view.posAtCoords(this.lastMove) == MT : function(TT, kT, cT, lT, MT) {
            let KT = TT.scrollDOM.getBoundingClientRect(),
              OT = TT.documentTop + TT.documentPadding.top + TT.contentHeight;
            if (KT.left > lT || KT.right < lT || KT.top > MT || Math.min(KT.bottom, OT) < MT) return !1;
            let yT = TT.posAtCoords({
              x: lT,
              y: MT
            }, !1);
            return yT >= kT && yT <= cT
          }(this.view, MT, KT, TT.clientX, TT.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(TT) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: kT
        } = this;
        if (kT.length) {
          let {
            tooltip: kT
          } = this;
          kT && kT.dom.contains(TT.relatedTarget) ? this.watchTooltipLeave(kT.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(TT) {
        let kT = cT => {
          TT.removeEventListener("mouseleave", kT), this.active.length && !this.view.dom.contains(cT.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        TT.addEventListener("mouseleave", kT)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const YK = 4;

    function BK(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        cT = lT.F.define(),
        MT = lT.H.define({
          create: () => [],
          update(TT, MT) {
            if (TT.length && (kT.hideOnChange && (MT.docChanged || MT.selection) ? TT = [] : kT.hideOn && (TT = TT.filter((TT => !kT.hideOn(MT, TT)))), MT.docChanged)) {
              let kT = [];
              for (let cT of TT) {
                let TT = MT.changes.mapPos(cT.pos, -1, lT.r.TrackDel);
                if (null != TT) {
                  let lT = Object.assign(Object.create(null), cT);
                  lT.pos = TT, null != lT.end && (lT.end = MT.changes.mapPos(lT.end)), kT.push(lT)
                }
              }
              TT = kT
            }
            for (let kT of MT.effects) kT.is(cT) && (TT = kT.value), kT.is(nK) && (TT = []);
            return TT
          },
          provide: TT => LK.from(TT)
        });
      return {
        active: MT,
        extension: [MT, ik.define((lT => new UK(lT, TT, MT, cT, kT.hoverTime || 300))), gK]
      }
    }

    function WK(TT, kT) {
      let cT = TT.plugin(EK);
      if (!cT) return null;
      let lT = cT.manager.tooltips.indexOf(kT);
      return lT < 0 ? null : cT.manager.tooltipViews[lT]
    }
    const nK = lT.F.define();
    const pK = lT.o.define({
      combine(TT) {
        let kT, cT;
        for (let lT of TT) kT = kT || lT.topContainer, cT = cT || lT.bottomContainer;
        return {
          topContainer: kT,
          bottomContainer: cT
        }
      }
    });

    function iK(TT, kT) {
      let cT = TT.plugin(qK),
        lT = cT ? cT.specs.indexOf(kT) : -1;
      return lT > -1 ? cT.panels[lT] : null
    }
    const qK = ik.fromClass(class {
      constructor(TT) {
        this.input = TT.state.facet(kO), this.specs = this.input.filter((TT => TT)), this.panels = this.specs.map((kT => kT(TT)));
        let kT = TT.state.facet(pK);
        this.top = new sK(TT, !0, kT.topContainer), this.bottom = new sK(TT, !1, kT.bottomContainer), this.top.sync(this.panels.filter((TT => TT.top))), this.bottom.sync(this.panels.filter((TT => !TT.top)));
        for (let cT of this.panels) cT.dom.classList.add("cm-panel"), cT.mount && cT.mount()
      }
      update(TT) {
        let kT = TT.state.facet(pK);
        this.top.container != kT.topContainer && (this.top.sync([]), this.top = new sK(TT.view, !0, kT.topContainer)), this.bottom.container != kT.bottomContainer && (this.bottom.sync([]), this.bottom = new sK(TT.view, !1, kT.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let cT = TT.state.facet(kO);
        if (cT != this.input) {
          let kT = cT.filter((TT => TT)),
            lT = [],
            MT = [],
            KT = [],
            OT = [];
          for (let cT of kT) {
            let kT, yT = this.specs.indexOf(cT);
            yT < 0 ? (kT = cT(TT.view), OT.push(kT)) : (kT = this.panels[yT], kT.update && kT.update(TT)), lT.push(kT), (kT.top ? MT : KT).push(kT)
          }
          this.specs = kT, this.panels = lT, this.top.sync(MT), this.bottom.sync(KT);
          for (let TT of OT) TT.dom.classList.add("cm-panel"), TT.mount && TT.mount()
        } else
          for (let lT of this.panels) lT.update && lT.update(TT)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: TT => mM.scrollMargins.of((kT => {
        let cT = kT.plugin(TT);
        return cT && {
          top: cT.top.scrollMargin(),
          bottom: cT.bottom.scrollMargin()
        }
      }))
    });
    class sK {
      constructor(TT, kT, cT) {
        this.view = TT, this.top = kT, this.container = cT, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(TT) {
        for (let kT of this.panels) kT.destroy && TT.indexOf(kT) < 0 && kT.destroy();
        this.panels = TT, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let TT = this.container || this.view.dom;
          TT.insertBefore(this.dom, this.top ? TT.firstChild : null)
        }
        let TT = this.dom.firstChild;
        for (let kT of this.panels)
          if (kT.dom.parentNode == this.dom) {
            for (; TT != kT.dom;) TT = TO(TT);
            TT = TT.nextSibling
          } else this.dom.insertBefore(kT.dom, TT);
        for (; TT;) TT = TO(TT)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let TT of this.classes.split(" ")) TT && this.container.classList.remove(TT);
          for (let TT of (this.classes = this.view.themeClasses).split(" ")) TT && this.container.classList.add(TT)
        }
      }
    }

    function TO(TT) {
      let kT = TT.nextSibling;
      return TT.remove(), kT
    }
    const kO = lT.o.define({
      enables: qK
    });

    function cO(TT, kT) {
      let cT, MT = new Promise((TT => cT = TT)),
        KT = TT => function(TT, kT, cT) {
          let lT = kT.content ? kT.content(TT, (() => OT(null))) : null;
          if (!lT) {
            if (lT = (0, AT.d)("form"), kT.input) {
              let TT = (0, AT.d)("input", kT.input);
              /^(text|password|number|email|tel|url)$/.test(TT.type) && TT.classList.add("cm-textfield"), TT.name || (TT.name = "input"), lT.appendChild((0, AT.d)("label", (kT.label || "") + ": ", TT))
            } else lT.appendChild(document.createTextNode(kT.label || ""));
            lT.appendChild(document.createTextNode(" ")), lT.appendChild((0, AT.d)("button", {
              class: "cm-button",
              type: "submit"
            }, kT.submitLabel || "OK"))
          }
          let MT = "FORM" == lT.nodeName ? [lT] : lT.querySelectorAll("form");
          for (let yT = 0; yT < MT.length; yT++) {
            let TT = MT[yT];
            TT.addEventListener("keydown", (kT => {
              27 == kT.keyCode ? (kT.preventDefault(), OT(null)) : 13 == kT.keyCode && (kT.preventDefault(), OT(TT))
            })), TT.addEventListener("submit", (kT => {
              kT.preventDefault(), OT(TT)
            }))
          }
          let KT = (0, AT.d)("div", lT, (0, AT.d)("button", {
            onclick: () => OT(null),
            "aria-label": TT.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          kT.class && (KT.className = kT.class);

          function OT(kT) {
            KT.contains(KT.ownerDocument.activeElement) && TT.focus(), cT(kT)
          }
          return KT.classList.add("cm-dialog"), {
            dom: KT,
            top: kT.top,
            mount: () => {
              if (kT.focus) {
                let TT;
                TT = "string" == typeof kT.focus ? lT.querySelector(kT.focus) : lT.querySelector("input") || lT.querySelector("button"), TT && "select" in TT ? TT.select() : TT && "focus" in TT && TT.focus()
              }
            }
          }
        }(TT, kT, cT);
      TT.state.field(lO, !1) ? TT.dispatch({
        effects: MO.of(KT)
      }) : TT.dispatch({
        effects: lT.F.appendConfig.of(lO.init((() => [KT])))
      });
      let OT = KO.of(KT);
      return {
        close: OT,
        result: MT.then((kT => ((TT.win.queueMicrotask || (kT => TT.win.setTimeout(kT, 10)))((() => {
          TT.state.field(lO).indexOf(KT) > -1 && TT.dispatch({
            effects: OT
          })
        })), kT)))
      }
    }
    const lO = lT.H.define({
        create: () => [],
        update(TT, kT) {
          for (let cT of kT.effects) cT.is(MO) ? TT = [cT.value].concat(TT) : cT.is(KO) && (TT = TT.filter((TT => TT != cT.value)));
          return TT
        },
        provide: TT => kO.computeN([TT], (kT => kT.field(TT)))
      }),
      MO = lT.F.define(),
      KO = lT.F.define();
    class OO extends lT.C {
      compare(TT) {
        return this == TT || this.constructor == TT.constructor && this.eq(TT)
      }
      eq(TT) {
        return !1
      }
      destroy(TT) {}
    }
    OO.prototype.elementClass = "", OO.prototype.toDOM = void 0, OO.prototype.mapMode = lT.r.TrackBefore, OO.prototype.startSide = OO.prototype.endSide = -1, OO.prototype.point = !0;
    const yO = lT.o.define(),
      fO = lT.o.define(),
      xO = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => lT.y.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      IO = lT.o.define();

    function AO(TT) {
      return [jO(), IO.of({
        ...xO,
        ...TT
      })]
    }
    const CO = lT.o.define({
      combine: TT => TT.some((TT => TT))
    });

    function jO(TT) {
      let kT = [vO];
      return TT && !1 === TT.fixed && kT.push(CO.of(!0)), kT
    }
    const vO = ik.fromClass(class {
      constructor(TT) {
        this.view = TT, this.domAfter = null, this.prevViewport = TT.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = TT.state.facet(IO).map((kT => new QO(TT, kT))), this.fixed = !TT.state.facet(CO);
        for (let kT of this.gutters) "after" == kT.config.side ? this.getDOMAfter().appendChild(kT.dom) : this.dom.appendChild(kT.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), TT.scrollDOM.insertBefore(this.dom, TT.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(TT) {
        if (this.updateGutters(TT)) {
          let kT = this.prevViewport,
            cT = TT.view.viewport,
            lT = Math.min(kT.to, cT.to) - Math.max(kT.from, cT.from);
          this.syncGutters(lT < .8 * (cT.to - cT.from))
        }
        if (TT.geometryChanged) {
          let TT = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = TT, this.domAfter && (this.domAfter.style.minHeight = TT)
        }
        this.view.state.facet(CO) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = TT.view.viewport
      }
      syncGutters(TT) {
        let kT = this.dom.nextSibling;
        TT && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let cT = lT.y.iter(this.view.state.facet(yO), this.view.viewport.from),
          MT = [],
          KT = this.gutters.map((TT => new NO(TT, this.view.viewport, -this.view.documentPadding.top)));
        for (let lT of this.view.viewportLineBlocks)
          if (MT.length && (MT = []), Array.isArray(lT.type)) {
            let TT = !0;
            for (let kT of lT.type)
              if (kT.type == oT.Text && TT) {
                hO(cT, MT, kT.from);
                for (let TT of KT) TT.line(this.view, kT, MT);
                TT = !1
              } else if (kT.widget)
              for (let TT of KT) TT.widget(this.view, kT)
          } else if (lT.type == oT.Text) {
          hO(cT, MT, lT.from);
          for (let TT of KT) TT.line(this.view, lT, MT)
        } else if (lT.widget)
          for (let TT of KT) TT.widget(this.view, lT);
        for (let lT of KT) lT.finish();
        TT && (this.view.scrollDOM.insertBefore(this.dom, kT), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(TT) {
        let kT = TT.startState.facet(IO),
          cT = TT.state.facet(IO),
          MT = TT.docChanged || TT.heightChanged || TT.viewportChanged || !lT.y.eq(TT.startState.facet(yO), TT.state.facet(yO), TT.view.viewport.from, TT.view.viewport.to);
        if (kT == cT)
          for (let lT of this.gutters) lT.update(TT) && (MT = !0);
        else {
          MT = !0;
          let lT = [];
          for (let MT of cT) {
            let cT = kT.indexOf(MT);
            cT < 0 ? lT.push(new QO(this.view, MT)) : (this.gutters[cT].update(TT), lT.push(this.gutters[cT]))
          }
          for (let TT of this.gutters) TT.dom.remove(), lT.indexOf(TT) < 0 && TT.destroy();
          for (let TT of lT) "after" == TT.config.side ? this.getDOMAfter().appendChild(TT.dom) : this.dom.appendChild(TT.dom);
          this.gutters = lT
        }
        return MT
      }
      destroy() {
        for (let TT of this.gutters) TT.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: TT => mM.scrollMargins.of((kT => {
        let cT = kT.plugin(TT);
        if (!cT || 0 == cT.gutters.length || !cT.fixed) return null;
        let lT = cT.dom.offsetWidth * kT.scaleX,
          MT = cT.domAfter ? cT.domAfter.offsetWidth * kT.scaleX : 0;
        return kT.textDirection == xk.LTR ? {
          left: lT,
          right: MT
        } : {
          right: lT,
          left: MT
        }
      }))
    });

    function tO(TT) {
      return Array.isArray(TT) ? TT : [TT]
    }

    function hO(TT, kT, cT) {
      for (; TT.value && TT.from <= cT;) TT.from == cT && kT.push(TT.value), TT.next()
    }
    class NO {
      constructor(TT, kT, cT) {
        this.gutter = TT, this.height = cT, this.i = 0, this.cursor = lT.y.iter(TT.markers, kT.from)
      }
      addElement(TT, kT, cT) {
        let {
          gutter: lT
        } = this, MT = (kT.top - this.height) / TT.scaleY, KT = kT.height / TT.scaleY;
        if (this.i == lT.elements.length) {
          let kT = new SO(TT, KT, MT, cT);
          lT.elements.push(kT), lT.dom.appendChild(kT.dom)
        } else lT.elements[this.i].update(TT, KT, MT, cT);
        this.height = kT.bottom, this.i++
      }
      line(TT, kT, cT) {
        let lT = [];
        hO(this.cursor, lT, kT.from), cT.length && (lT = lT.concat(cT));
        let MT = this.gutter.config.lineMarker(TT, kT, lT);
        MT && lT.unshift(MT);
        let KT = this.gutter;
        (0 != lT.length || KT.config.renderEmptyElements) && this.addElement(TT, kT, lT)
      }
      widget(TT, kT) {
        let cT = this.gutter.config.widgetMarker(TT, kT.widget, kT),
          lT = cT ? [cT] : null;
        for (let MT of TT.state.facet(fO)) {
          let cT = MT(TT, kT.widget, kT);
          cT && (lT || (lT = [])).push(cT)
        }
        lT && this.addElement(TT, kT, lT)
      }
      finish() {
        let TT = this.gutter;
        for (; TT.elements.length > this.i;) {
          let kT = TT.elements.pop();
          TT.dom.removeChild(kT.dom), kT.destroy()
        }
      }
    }
    class QO {
      constructor(TT, kT) {
        this.view = TT, this.config = kT, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let cT in kT.domEventHandlers) this.dom.addEventListener(cT, (lT => {
          let MT, KT = lT.target;
          if (KT != this.dom && this.dom.contains(KT)) {
            for (; KT.parentNode != this.dom;) KT = KT.parentNode;
            let TT = KT.getBoundingClientRect();
            MT = (TT.top + TT.bottom) / 2
          } else MT = lT.clientY;
          let OT = TT.lineBlockAtHeight(MT - TT.documentTop);
          kT.domEventHandlers[cT](TT, OT, lT) && lT.preventDefault()
        }));
        this.markers = tO(kT.markers(TT)), kT.initialSpacer && (this.spacer = new SO(TT, 0, 0, [kT.initialSpacer(TT)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(TT) {
        let kT = this.markers;
        if (this.markers = tO(this.config.markers(TT.view)), this.spacer && this.config.updateSpacer) {
          let kT = this.config.updateSpacer(this.spacer.markers[0], TT);
          kT != this.spacer.markers[0] && this.spacer.update(TT.view, 0, 0, [kT])
        }
        let cT = TT.view.viewport;
        return !lT.y.eq(this.markers, kT, cT.from, cT.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(TT)
      }
      destroy() {
        for (let TT of this.elements) TT.destroy()
      }
    }
    class SO {
      constructor(TT, kT, cT, lT) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(TT, kT, cT, lT)
      }
      update(TT, kT, cT, lT) {
        this.height != kT && (this.height = kT, this.dom.style.height = kT + "px"), this.above != cT && (this.dom.style.marginTop = (this.above = cT) ? cT + "px" : ""),
          function(TT, kT) {
            if (TT.length != kT.length) return !1;
            for (let cT = 0; cT < TT.length; cT++)
              if (!TT[cT].compare(kT[cT])) return !1;
            return !0
          }(this.markers, lT) || this.setMarkers(TT, lT)
      }
      setMarkers(TT, kT) {
        let cT = "cm-gutterElement",
          lT = this.dom.firstChild;
        for (let MT = 0, KT = 0;;) {
          let OT = KT,
            yT = MT < kT.length ? kT[MT++] : null,
            fT = !1;
          if (yT) {
            let TT = yT.elementClass;
            TT && (cT += " " + TT);
            for (let kT = KT; kT < this.markers.length; kT++)
              if (this.markers[kT].compare(yT)) {
                OT = kT, fT = !0;
                break
              }
          } else OT = this.markers.length;
          for (; KT < OT;) {
            let TT = this.markers[KT++];
            if (TT.toDOM) {
              TT.destroy(lT);
              let kT = lT.nextSibling;
              lT.remove(), lT = kT
            }
          }
          if (!yT) break;
          yT.toDOM && (fT ? lT = lT.nextSibling : this.dom.insertBefore(yT.toDOM(TT), lT)), fT && KT++
        }
        this.dom.className = cT, this.markers = kT
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const DO = lT.o.define(),
      aO = lT.o.define(),
      FO = lT.o.define({
        combine: TT => (0, lT.R)(TT, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(TT, kT) {
            let cT = Object.assign({}, TT);
            for (let lT in kT) {
              let TT = cT[lT],
                MT = kT[lT];
              cT[lT] = TT ? (kT, cT, lT) => TT(kT, cT, lT) || MT(kT, cT, lT) : MT
            }
            return cT
          }
        })
      });
    class rO extends OO {
      constructor(TT) {
        super(), this.number = TT
      }
      eq(TT) {
        return this.number == TT.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function PO(TT, kT) {
      return TT.state.facet(FO).formatNumber(kT, TT.state)
    }
    const wO = IO.compute([FO], (TT => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: TT => TT.state.facet(DO),
      lineMarker: (TT, kT, cT) => cT.some((TT => TT.toDOM)) ? null : new rO(PO(TT, TT.state.doc.lineAt(kT.from).number)),
      widgetMarker: (TT, kT, cT) => {
        for (let lT of TT.state.facet(aO)) {
          let MT = lT(TT, kT, cT);
          if (MT) return MT
        }
        return null
      },
      lineMarkerChange: TT => TT.startState.facet(FO) != TT.state.facet(FO),
      initialSpacer: TT => new rO(PO(TT, bO(TT.state.doc.lines))),
      updateSpacer(TT, kT) {
        let cT = PO(kT.view, bO(kT.view.state.doc.lines));
        return cT == TT.number ? TT : new rO(cT)
      },
      domEventHandlers: TT.facet(FO).domEventHandlers,
      side: "before"
    })));

    function mO() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [FO.of(TT), jO(), wO]
    }

    function bO(TT) {
      let kT = 9;
      for (; kT < TT;) kT = 10 * kT + 9;
      return kT
    }
    const zO = new class extends OO {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      JO = yO.compute(["selection"], (TT => {
        let kT = [],
          cT = -1;
        for (let lT of TT.selection.qt) {
          let MT = TT.doc.lineAt(lT.head).from;
          MT > cT && (cT = MT, kT.push(zO.range(MT)))
        }
        return lT.y.of(kT)
      }));

    function oO() {
      return JO
    }
  },
  40955: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT,
      g: () => jT,
      j: () => OT,
      k: () => IT,
      o: () => xT,
      q: () => eT,
      r: () => VT,
      v: () => GT,
      y: () => vT
    });
    const lT = 1024;
    let MT = 0;
    class KT {
      constructor(TT, kT) {
        this.from = TT, this.to = kT
      }
    }
    class OT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = MT++, this.perNode = !!TT.perNode, this.deserialize = TT.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = TT.combine || null
      }
      add(TT) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof TT && (TT = xT.match(TT)), kT => {
          let cT = TT(kT);
          return void 0 === cT ? null : [this, cT]
        }
      }
    }
    OT.closedBy = new OT({
      deserialize: TT => TT.split(" ")
    }), OT.openedBy = new OT({
      deserialize: TT => TT.split(" ")
    }), OT.group = new OT({
      deserialize: TT => TT.split(" ")
    }), OT.isolate = new OT({
      deserialize: TT => {
        if (TT && "rtl" != TT && "ltr" != TT && "auto" != TT) throw new RangeError("Invalid value for isolate: " + TT);
        return TT || "auto"
      }
    }), OT.contextHash = new OT({
      perNode: !0
    }), OT.lookAhead = new OT({
      perNode: !0
    }), OT.mounted = new OT({
      perNode: !0
    });
    class yT {
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = TT, this.overlay = kT, this.parser = cT, this.bracketed = lT
      }
      static get(TT) {
        return TT && TT.props && TT.props[OT.mounted.id]
      }
    }
    const fT = Object.create(null);
    class xT {
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = TT, this.props = kT, this.id = cT, this.flags = lT
      }
      static define(TT) {
        let kT = TT.props && TT.props.length ? Object.create(null) : fT,
          cT = (TT.top ? 1 : 0) | (TT.skipped ? 2 : 0) | (TT.error ? 4 : 0) | (null == TT.name ? 8 : 0),
          lT = new xT(TT.name || "", kT, TT.id, cT);
        if (TT.props)
          for (let MT of TT.props)
            if (Array.isArray(MT) || (MT = MT(lT)), MT) {
              if (MT[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              kT[MT[0].id] = MT[1]
            } return lT
      }
      prop(TT) {
        return this.props[TT.id]
      }
      get isTop() {
        return (1 & this.flags) > 0
      }
      get isSkipped() {
        return (2 & this.flags) > 0
      }
      get isError() {
        return (4 & this.flags) > 0
      }
      get isAnonymous() {
        return (8 & this.flags) > 0
      }
      is(TT) {
        if ("string" == typeof TT) {
          if (this.name == TT) return !0;
          let kT = this.prop(OT.group);
          return !!kT && kT.indexOf(TT) > -1
        }
        return this.id == TT
      }
      static match(TT) {
        let kT = Object.create(null);
        for (let cT in TT)
          for (let lT of cT.split(" ")) kT[lT] = TT[cT];
        return TT => {
          for (let cT = TT.prop(OT.group), lT = -1; lT < (cT ? cT.length : 0); lT++) {
            let MT = kT[lT < 0 ? TT.name : cT[lT]];
            if (MT) return MT
          }
        }
      }
    }
    xT.none = new xT("", Object.create(null), 0, 8);
    class IT {
      constructor(TT) {
        this.types = TT;
        for (let kT = 0; kT < TT.length; kT++)
          if (TT[kT].id != kT) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let TT = [];
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        for (let MT of this.types) {
          let kT = null;
          for (let TT of cT) {
            let cT = TT(MT);
            if (cT) {
              kT || (kT = Object.assign({}, MT.props));
              let TT = cT[1],
                lT = cT[0];
              lT.combine && lT.id in kT && (TT = lT.combine(kT[lT.id], TT)), kT[lT.id] = TT
            }
          }
          TT.push(kT ? new xT(MT.name, kT, MT.id, MT.flags) : MT)
        }
        return new IT(TT)
      }
    }
    const AT = new WeakMap,
      CT = new WeakMap;
    var jT;
    ! function(TT) {
      TT[TT.ExcludeBuffers = 1] = "ExcludeBuffers", TT[TT.IncludeAnonymous = 2] = "IncludeAnonymous", TT[TT.IgnoreMounts = 4] = "IgnoreMounts", TT[TT.IgnoreOverlays = 8] = "IgnoreOverlays", TT[TT.EnterBracketed = 16] = "EnterBracketed"
    }(jT || (jT = {}));
    class vT {
      constructor(TT, kT, cT, lT, MT) {
        if (this.type = TT, this.children = kT, this.positions = cT, this.length = lT, this.props = null, MT && MT.length) {
          this.props = Object.create(null);
          for (let [TT, kT] of MT) this.props["number" == typeof TT ? TT : TT.id] = kT
        }
      }
      toString() {
        let TT = yT.get(this);
        if (TT && !TT.overlay) return TT.tree.toString();
        let kT = "";
        for (let cT of this.children) {
          let TT = cT.toString();
          TT && (kT && (kT += ","), kT += TT)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (kT.length ? "(" + kT + ")" : "") : kT
      }
      cursor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new bT(this.topNode, TT)
      }
      cursorAt(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = AT.get(this) || this.topNode,
          lT = new bT(cT);
        return lT.moveTo(TT, kT), AT.set(this, lT._tree), lT
      }
      get topNode() {
        return new DT(this, 0, 0, null)
      }
      resolve(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = QT(AT.get(this) || this.topNode, TT, kT, !1);
        return AT.set(this, cT), cT
      }
      resolveInner(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = QT(CT.get(this) || this.topNode, TT, kT, !0);
        return CT.set(this, cT), cT
      }
      resolveStack(TT) {
        return function(TT, kT, cT) {
          let lT = TT.resolveInner(kT, cT),
            MT = null;
          for (let KT = lT instanceof DT ? lT : lT.context.parent; KT; KT = KT.parent)
            if (KT.index < 0) {
              let TT = KT.parent;
              (MT || (MT = [lT])).push(TT.resolve(kT, cT)), KT = TT
            } else {
              let TT = yT.get(KT.tree);
              if (TT && TT.overlay && TT.overlay[0].from <= kT && TT.overlay[TT.overlay.length - 1].to >= kT) {
                let OT = new DT(TT.tree, TT.overlay[0].from + KT.from, -1, KT);
                (MT || (MT = [lT])).push(QT(OT, kT, cT, !1))
              }
            } return MT ? wT(MT) : lT
        }(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(TT) {
        let {
          enter: kT,
          leave: cT,
          from: lT = 0,
          to: MT = this.length
        } = TT, KT = TT.mode || 0, OT = (KT & jT.IncludeAnonymous) > 0;
        for (let yT = this.cursor(KT | jT.IncludeAnonymous);;) {
          let TT = !1;
          if (yT.from <= MT && yT.to >= lT && (!OT && yT.type.isAnonymous || !1 !== kT(yT))) {
            if (yT.firstChild()) continue;
            TT = !0
          }
          for (; TT && cT && (OT || !yT.type.isAnonymous) && cT(yT), !yT.nextSibling();) {
            if (!yT.parent()) return;
            TT = !0
          }
        }
      }
      prop(TT) {
        return TT.perNode ? this.props ? this.props[TT.id] : void 0 : this.type.prop(TT)
      }
      get propValues() {
        let TT = [];
        if (this.props)
          for (let kT in this.props) TT.push([+kT, this.props[kT]]);
        return TT
      }
      balance() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : HT(xT.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((TT, kT, cT) => new vT(this.type, TT, kT, cT, this.propValues)), TT.makeTree || ((TT, kT, cT) => new vT(xT.none, TT, kT, cT)))
      }
      static build(TT) {
        return function(TT) {
          var kT;
          let {
            buffer: cT,
            nodeSet: MT,
            maxBufferLength: KT = lT,
            reused: yT = [],
            minRepeatType: fT = MT.types.length
          } = TT, xT = Array.isArray(cT) ? new tT(cT, cT.length) : cT, IT = MT.types, AT = 0, CT = 0;

          function jT(TT, kT, cT, lT, OT, vT) {
            let {
              id: tT,
              start: rT,
              end: PT,
              size: wT
            } = xT, mT = CT, bT = AT;
            if (wT < 0) {
              if (xT.next(), -1 == wT) {
                let kT = yT[tT];
                return cT.push(kT), void lT.push(rT - TT)
              }
              if (-3 == wT) return void(AT = tT);
              if (-4 == wT) return void(CT = tT);
              throw new RangeError(`Unrecognized record size: ${wT}`)
            }
            let zT, JT, oT = IT[tT],
              eT = rT - TT;
            if (PT - rT <= KT && (JT = aT(xT.pos - kT, OT))) {
              let kT = new Uint16Array(JT.size - JT.skip),
                cT = xT.pos - JT.size,
                lT = kT.length;
              for (; xT.pos > cT;) lT = FT(JT.start, kT, lT);
              zT = new hT(kT, PT - JT.start, MT), eT = JT.start - TT
            } else {
              let TT = xT.pos - wT;
              xT.next();
              let kT = [],
                cT = [],
                lT = tT >= fT ? tT : -1,
                MT = 0,
                OT = PT;
              for (; xT.pos > TT;) lT >= 0 && xT.id == lT && xT.size >= 0 ? (xT.end <= OT - KT && (ST(kT, cT, rT, MT, xT.end, OT, lT, mT, bT), MT = kT.length, OT = xT.end), xT.next()) : vT > 2500 ? NT(rT, TT, kT, cT) : jT(rT, TT, kT, cT, lT, vT + 1);
              if (lT >= 0 && MT > 0 && MT < kT.length && ST(kT, cT, rT, MT, rT, OT, lT, mT, bT), kT.reverse(), cT.reverse(), lT > -1 && MT > 0) {
                let TT = QT(oT, bT);
                zT = HT(oT, kT, cT, 0, kT.length, 0, PT - rT, TT, TT)
              } else zT = DT(oT, kT, cT, PT - rT, mT - PT, bT)
            }
            cT.push(zT), lT.push(eT)
          }

          function NT(TT, kT, cT, lT) {
            let OT = [],
              yT = 0,
              fT = -1;
            for (; xT.pos > kT;) {
              let {
                id: TT,
                start: kT,
                end: cT,
                size: lT
              } = xT;
              if (lT > 4) xT.next();
              else {
                if (fT > -1 && kT < fT) break;
                fT < 0 && (fT = cT - KT), OT.push(TT, kT, cT), yT++, xT.next()
              }
            }
            if (yT) {
              let kT = new Uint16Array(4 * yT),
                KT = OT[OT.length - 2];
              for (let TT = OT.length - 3, cT = 0; TT >= 0; TT -= 3) kT[cT++] = OT[TT], kT[cT++] = OT[TT + 1] - KT, kT[cT++] = OT[TT + 2] - KT, kT[cT++] = cT;
              cT.push(new hT(kT, OT[2] - KT, MT)), lT.push(KT - TT)
            }
          }

          function QT(TT, kT) {
            return (cT, lT, MT) => {
              let KT, yT, fT = 0,
                xT = cT.length - 1;
              if (xT >= 0 && (KT = cT[xT]) instanceof vT) {
                if (!xT && KT.type == TT && KT.length == MT) return KT;
                (yT = KT.prop(OT.lookAhead)) && (fT = lT[xT] + KT.length + yT)
              }
              return DT(TT, cT, lT, MT, fT, kT)
            }
          }

          function ST(TT, kT, cT, lT, KT, OT, yT, fT, xT) {
            let IT = [],
              AT = [];
            for (; TT.length > lT;) IT.push(TT.pop()), AT.push(kT.pop() + cT - KT);
            TT.push(DT(MT.types[yT], IT, AT, OT - KT, fT - OT, xT)), kT.push(KT - cT)
          }

          function DT(TT, kT, cT, lT, MT, KT, yT) {
            if (KT) {
              let TT = [OT.contextHash, KT];
              yT = yT ? [TT].concat(yT) : [TT]
            }
            if (MT > 25) {
              let TT = [OT.lookAhead, MT];
              yT = yT ? [TT].concat(yT) : [TT]
            }
            return new vT(TT, kT, cT, lT, yT)
          }

          function aT(TT, kT) {
            let cT = xT.fork(),
              lT = 0,
              MT = 0,
              OT = 0,
              yT = cT.end - KT,
              IT = {
                size: 0,
                start: 0,
                skip: 0
              };
            TT: for (let KT = cT.pos - TT; cT.pos > KT;) {
              let TT = cT.size;
              if (cT.id == kT && TT >= 0) {
                IT.size = lT, IT.start = MT, IT.skip = OT, OT += 4, lT += 4, cT.next();
                continue
              }
              let xT = cT.pos - TT;
              if (TT < 0 || xT < KT || cT.start < yT) break;
              let AT = cT.id >= fT ? 4 : 0,
                CT = cT.start;
              for (cT.next(); cT.pos > xT;) {
                if (cT.size < 0) {
                  if (-3 != cT.size && -4 != cT.size) break TT;
                  AT += 4
                } else cT.id >= fT && (AT += 4);
                cT.next()
              }
              MT = CT, lT += TT, OT += AT
            }
            return (kT < 0 || lT == TT) && (IT.size = lT, IT.start = MT, IT.skip = OT), IT.size > 4 ? IT : void 0
          }

          function FT(TT, kT, cT) {
            let {
              id: lT,
              start: MT,
              end: KT,
              size: OT
            } = xT;
            if (xT.next(), OT >= 0 && lT < fT) {
              let yT = cT;
              if (OT > 4) {
                let lT = xT.pos - (OT - 4);
                for (; xT.pos > lT;) cT = FT(TT, kT, cT)
              }
              kT[--cT] = yT, kT[--cT] = KT - TT, kT[--cT] = MT - TT, kT[--cT] = lT
            } else - 3 == OT ? AT = lT : -4 == OT && (CT = lT);
            return cT
          }
          let rT = [],
            PT = [];
          for (; xT.pos > 0;) jT(TT.start || 0, TT.bufferStart || 0, rT, PT, -1, 0);
          let wT = null !== (kT = TT.length) && void 0 !== kT ? kT : rT.length ? PT[0] + rT[0].length : 0;
          return new vT(IT[TT.topID], rT.reverse(), PT.reverse(), wT)
        }(TT)
      }
    }
    vT.empty = new vT(xT.none, [], [], 0);
    class tT {
      constructor(TT, kT) {
        this.buffer = TT, this.index = kT
      }
      get id() {
        return this.buffer[this.index - 4]
      }
      get start() {
        return this.buffer[this.index - 3]
      }
      get end() {
        return this.buffer[this.index - 2]
      }
      get size() {
        return this.buffer[this.index - 1]
      }
      get pos() {
        return this.index
      }
      next() {
        this.index -= 4
      }
      fork() {
        return new tT(this.buffer, this.index)
      }
    }
    class hT {
      constructor(TT, kT, cT) {
        this.buffer = TT, this.length = kT, this.set = cT
      }
      get type() {
        return xT.none
      }
      toString() {
        let TT = [];
        for (let kT = 0; kT < this.buffer.length;) TT.push(this.childString(kT)), kT = this.buffer[kT + 3];
        return TT.join(",")
      }
      childString(TT) {
        let kT = this.buffer[TT],
          cT = this.buffer[TT + 3],
          lT = this.set.types[kT],
          MT = lT.name;
        if (/\W/.test(MT) && !lT.isError && (MT = JSON.stringify(MT)), cT == (TT += 4)) return MT;
        let KT = [];
        for (; TT < cT;) KT.push(this.childString(TT)), TT = this.buffer[TT + 3];
        return MT + "(" + KT.join(",") + ")"
      }
      findChild(TT, kT, cT, lT, MT) {
        let {
          buffer: KT
        } = this, OT = -1;
        for (let yT = TT; yT != kT && !(NT(MT, lT, KT[yT + 1], KT[yT + 2]) && (OT = yT, cT > 0)); yT = KT[yT + 3]);
        return OT
      }
      slice(TT, kT, cT) {
        let lT = this.buffer,
          MT = new Uint16Array(kT - TT),
          KT = 0;
        for (let OT = TT, yT = 0; OT < kT;) {
          MT[yT++] = lT[OT++], MT[yT++] = lT[OT++] - cT;
          let kT = MT[yT++] = lT[OT++] - cT;
          MT[yT++] = lT[OT++] - TT, KT = Math.max(KT, kT)
        }
        return new hT(MT, KT, this.set)
      }
    }

    function NT(TT, kT, cT, lT) {
      switch (TT) {
        case -2:
          return cT < kT;
        case -1:
          return lT >= kT && cT < kT;
        case 0:
          return cT < kT && lT > kT;
        case 1:
          return cT <= kT && lT > kT;
        case 2:
          return lT > kT;
        case 4:
          return !0
      }
    }

    function QT(TT, kT, cT, lT) {
      for (var MT; TT.from == TT.to || (cT < 1 ? TT.from >= kT : TT.from > kT) || (cT > -1 ? TT.to <= kT : TT.to < kT);) {
        let kT = !lT && TT instanceof DT && TT.index < 0 ? null : TT.parent;
        if (!kT) return TT;
        TT = kT
      }
      let KT = lT ? 0 : jT.IgnoreOverlays;
      if (lT)
        for (let OT = TT, yT = OT.parent; yT; OT = yT, yT = OT.parent) OT instanceof DT && OT.index < 0 && (null === (MT = yT.enter(kT, cT, KT)) || void 0 === MT ? void 0 : MT.from) != OT.from && (TT = yT);
      for (;;) {
        let lT = TT.enter(kT, cT, KT);
        if (!lT) return TT;
        TT = lT
      }
    }
    class ST {
      cursor() {
        return new bT(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(TT) {
        let kT = aT(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return kT.length ? kT[0] : null
      }
      getChildren(TT) {
        return aT(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(TT) {
        return QT(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(TT) {
        return QT(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(TT) {
        return FT(this.parent, TT)
      }
      enterUnfinishedNodesBefore(TT) {
        let kT = this.childBefore(TT),
          cT = this;
        for (; kT;) {
          let TT = kT.lastChild;
          if (!TT || TT.to != kT.to) break;
          TT.type.isError && TT.from == TT.to ? (cT = kT, kT = TT.prevSibling) : kT = TT
        }
        return cT
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class DT extends ST {
      constructor(TT, kT, cT, lT) {
        super(), this._tree = TT, this.from = kT, this.index = cT, this._parent = lT
      }
      get type() {
        return this._tree.type
      }
      get name() {
        return this._tree.type.name
      }
      get to() {
        return this.from + this._tree.length
      }
      nextChild(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let KT = this;;) {
          for (let {
              children: OT,
              positions: fT
            } = KT._tree, xT = kT > 0 ? OT.length : -1; TT != xT; TT += kT) {
            let xT, IT = OT[TT],
              AT = fT[TT] + KT.from;
            if (MT & jT.EnterBracketed && IT instanceof vT && (xT = yT.get(IT)) && !xT.overlay && xT.bracketed && cT >= AT && cT <= AT + IT.length || NT(lT, cT, AT, AT + IT.length))
              if (IT instanceof hT) {
                if (MT & jT.ExcludeBuffers) continue;
                let OT = IT.findChild(0, IT.buffer.length, kT, cT - AT, lT);
                if (OT > -1) return new PT(new rT(KT, IT, TT, AT), null, OT)
              } else if (MT & jT.IncludeAnonymous || !IT.type.isAnonymous || zT(IT)) {
              let OT;
              if (!(MT & jT.IgnoreMounts) && (OT = yT.get(IT)) && !OT.overlay) return new DT(OT.tree, AT, TT, KT);
              let fT = new DT(IT, AT, TT, KT);
              return MT & jT.IncludeAnonymous || !fT.type.isAnonymous ? fT : fT.nextChild(kT < 0 ? IT.children.length - 1 : 0, kT, cT, lT, MT)
            }
          }
          if (MT & jT.IncludeAnonymous || !KT.type.isAnonymous) return null;
          if (TT = KT.index >= 0 ? KT.index + kT : kT < 0 ? -1 : KT._parent._tree.children.length, KT = KT._parent, !KT) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(TT) {
        return this.nextChild(0, 1, TT, 2)
      }
      childBefore(TT) {
        return this.nextChild(this._tree.children.length - 1, -1, TT, -2)
      }
      prop(TT) {
        return this._tree.prop(TT)
      }
      enter(TT, kT) {
        let cT, lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(lT & jT.IgnoreOverlays) && (cT = yT.get(this._tree)) && cT.overlay) {
          let MT = TT - this.from,
            KT = lT & jT.EnterBracketed && cT.bracketed;
          for (let {
              from: TT,
              to: lT
            }
            of cT.overlay)
            if ((kT > 0 || KT ? TT <= MT : TT < MT) && (kT < 0 || KT ? lT >= MT : lT > MT)) return new DT(cT.tree, cT.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, TT, kT, lT)
      }
      nextSignificantParent() {
        let TT = this;
        for (; TT.type.isAnonymous && TT._parent;) TT = TT._parent;
        return TT
      }
      get parent() {
        return this._parent ? this._parent.nextSignificantParent() : null
      }
      get nextSibling() {
        return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null
      }
      get prevSibling() {
        return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null
      }
      get tree() {
        return this._tree
      }
      toTree() {
        return this._tree
      }
      toString() {
        return this._tree.toString()
      }
    }

    function aT(TT, kT, cT, lT) {
      let MT = TT.cursor(),
        KT = [];
      if (!MT.firstChild()) return KT;
      if (null != cT)
        for (let OT = !1; !OT;)
          if (OT = MT.type.is(cT), !MT.nextSibling()) return KT;
      for (;;) {
        if (null != lT && MT.type.is(lT)) return KT;
        if (MT.type.is(kT) && KT.push(MT.node), !MT.nextSibling()) return null == lT ? KT : []
      }
    }

    function FT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kT.length - 1;
      for (let lT = TT; cT >= 0; lT = lT.parent) {
        if (!lT) return !1;
        if (!lT.type.isAnonymous) {
          if (kT[cT] && kT[cT] != lT.name) return !1;
          cT--
        }
      }
      return !0
    }
    class rT {
      constructor(TT, kT, cT, lT) {
        this.parent = TT, this.buffer = kT, this.index = cT, this.start = lT
      }
    }
    class PT extends ST {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(TT, kT, cT) {
        super(), this.context = TT, this._parent = kT, this.index = cT, this.type = TT.buffer.set.types[TT.buffer.buffer[cT]]
      }
      child(TT, kT, cT) {
        let {
          buffer: lT
        } = this.context, MT = lT.findChild(this.index + 4, lT.buffer[this.index + 3], TT, kT - this.context.start, cT);
        return MT < 0 ? null : new PT(this.context, this, MT)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(TT) {
        return this.child(1, TT, 2)
      }
      childBefore(TT) {
        return this.child(-1, TT, -2)
      }
      prop(TT) {
        return this.type.prop(TT)
      }
      enter(TT, kT) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & jT.ExcludeBuffers) return null;
        let {
          buffer: cT
        } = this.context, lT = cT.findChild(this.index + 4, cT.buffer[this.index + 3], kT > 0 ? 1 : -1, TT - this.context.start, kT);
        return lT < 0 ? null : new PT(this.context, this, lT)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(TT) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + TT, TT, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: TT
        } = this.context, kT = TT.buffer[this.index + 3];
        return kT < (this._parent ? TT.buffer[this._parent.index + 3] : TT.buffer.length) ? new PT(this.context, this._parent, kT) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: TT
        } = this.context, kT = this._parent ? this._parent.index + 4 : 0;
        return this.index == kT ? this.externalSibling(-1) : new PT(this.context, this._parent, TT.findChild(kT, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let TT = [],
          kT = [],
          {
            buffer: cT
          } = this.context,
          lT = this.index + 4,
          MT = cT.buffer[this.index + 3];
        if (MT > lT) {
          let KT = cT.buffer[this.index + 1];
          TT.push(cT.slice(lT, MT, KT)), kT.push(0)
        }
        return new vT(this.type, TT, kT, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function wT(TT) {
      if (!TT.length) return null;
      let kT = 0,
        cT = TT[0];
      for (let KT = 1; KT < TT.length; KT++) {
        let lT = TT[KT];
        (lT.from > cT.from || lT.to < cT.to) && (cT = lT, kT = KT)
      }
      let lT = cT instanceof DT && cT.index < 0 ? null : cT.parent,
        MT = TT.slice();
      return lT ? MT[kT] = lT : MT.splice(kT, 1), new mT(MT, cT)
    }
    class mT {
      constructor(TT, kT) {
        this.heads = TT, this.node = kT
      }
      get next() {
        return wT(this.heads)
      }
    }
    class bT {
      get name() {
        return this.type.name
      }
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = kT & ~jT.EnterBracketed, TT instanceof DT) this.yieldNode(TT);
        else {
          this._tree = TT.context.parent, this.buffer = TT.context;
          for (let kT = TT._parent; kT; kT = kT._parent) this.stack.unshift(kT.index);
          this.bufferNode = TT, this.yieldBuf(TT.index)
        }
      }
      yieldNode(TT) {
        return !!TT && (this._tree = TT, this.type = TT.type, this.from = TT.from, this.to = TT.to, !0)
      }
      yieldBuf(TT, kT) {
        this.index = TT;
        let {
          start: cT,
          buffer: lT
        } = this.buffer;
        return this.type = kT || lT.set.types[lT.buffer[TT]], this.from = cT + lT.buffer[TT + 1], this.to = cT + lT.buffer[TT + 2], !0
      }
      yield(TT) {
        return !!TT && (TT instanceof DT ? (this.buffer = null, this.yieldNode(TT)) : (this.buffer = TT.context, this.yieldBuf(TT.index, TT.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(TT, kT, cT) {
        if (!this.buffer) return this.yield(this._tree.nextChild(TT < 0 ? this._tree._tree.children.length - 1 : 0, TT, kT, cT, this.mode));
        let {
          buffer: lT
        } = this.buffer, MT = lT.findChild(this.index + 4, lT.buffer[this.index + 3], TT, kT - this.buffer.start, cT);
        return !(MT < 0) && (this.stack.push(this.index), this.yieldBuf(MT))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(TT) {
        return this.enterChild(1, TT, 2)
      }
      childBefore(TT) {
        return this.enterChild(-1, TT, -2)
      }
      enter(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(cT & jT.ExcludeBuffers) && this.enterChild(1, TT, kT) : this.yield(this._tree.enter(TT, kT, cT))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & jT.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let TT = this.mode & jT.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(TT)
      }
      sibling(TT) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + TT, TT, 0, 4, this.mode));
        let {
          buffer: kT
        } = this.buffer, cT = this.stack.length - 1;
        if (TT < 0) {
          let TT = cT < 0 ? 0 : this.stack[cT] + 4;
          if (this.index != TT) return this.yieldBuf(kT.findChild(TT, this.index, -1, 0, 4))
        } else {
          let TT = kT.buffer[this.index + 3];
          if (TT < (cT < 0 ? kT.buffer.length : kT.buffer[this.stack[cT] + 3])) return this.yieldBuf(TT)
        }
        return cT < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + TT, TT, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(TT) {
        let kT, cT, {
          buffer: lT
        } = this;
        if (lT) {
          if (TT > 0) {
            if (this.index < lT.buffer.buffer.length) return !1
          } else
            for (let TT = 0; TT < this.index; TT++)
              if (lT.buffer.buffer[TT + 3] < this.index) return !1;
          ({
            index: kT,
            parent: cT
          } = lT)
        } else({
          index: kT,
          _parent: cT
        } = this._tree);
        for (; cT;
          ({
            index: kT,
            _parent: cT
          } = cT))
          if (kT > -1)
            for (let lT = kT + TT, MT = TT < 0 ? -1 : cT._tree.children.length; lT != MT; lT += TT) {
              let TT = cT._tree.children[lT];
              if (this.mode & jT.IncludeAnonymous || TT instanceof hT || !TT.type.isAnonymous || zT(TT)) return !1
            }
        return !0
      }
      move(TT, kT) {
        if (kT && this.enterChild(TT, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(TT)) return !0;
          if (this.atLastNode(TT) || !this.parent()) return !1
        }
      }
      next() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, TT)
      }
      prev() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, TT)
      }
      moveTo(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (kT < 1 ? this.from >= TT : this.from > TT) || (kT > -1 ? this.to <= TT : this.to < TT)) && this.parent(););
        for (; this.enterChild(1, TT, kT););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let TT = this.bufferNode,
          kT = null,
          cT = 0;
        if (TT && TT.context == this.buffer) TT: for (let lT = this.index, MT = this.stack.length; MT >= 0;) {
          for (let KT = TT; KT; KT = KT._parent)
            if (KT.index == lT) {
              if (lT == this.index) return KT;
              kT = KT, cT = MT + 1;
              break TT
            } lT = this.stack[--MT]
        }
        for (let lT = cT; lT < this.stack.length; lT++) kT = new PT(this.buffer, kT, this.stack[lT]);
        return this.bufferNode = new PT(this.buffer, kT, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(TT, kT) {
        for (let cT = 0;;) {
          let lT = !1;
          if (this.type.isAnonymous || !1 !== TT(this)) {
            if (this.firstChild()) {
              cT++;
              continue
            }
            this.type.isAnonymous || (lT = !0)
          }
          for (;;) {
            if (lT && kT && kT(this), lT = this.type.isAnonymous, !cT) return;
            if (this.nextSibling()) break;
            this.parent(), cT--, lT = !0
          }
        }
      }
      matchContext(TT) {
        if (!this.buffer) return FT(this.node.parent, TT);
        let {
          buffer: kT
        } = this.buffer, {
          types: cT
        } = kT.set;
        for (let lT = TT.length - 1, MT = this.stack.length - 1; lT >= 0; MT--) {
          if (MT < 0) return FT(this._tree, TT, lT);
          let KT = cT[kT.buffer[this.stack[MT]]];
          if (!KT.isAnonymous) {
            if (TT[lT] && TT[lT] != KT.name) return !1;
            lT--
          }
        }
        return !0
      }
    }

    function zT(TT) {
      return TT.children.some((TT => TT instanceof hT || !TT.type.isAnonymous || zT(TT)))
    }
    const JT = new WeakMap;

    function oT(TT, kT) {
      if (!TT.isAnonymous || kT instanceof hT || kT.type != TT) return 1;
      let cT = JT.get(kT);
      if (null == cT) {
        cT = 1;
        for (let lT of kT.children) {
          if (lT.type != TT || !(lT instanceof vT)) {
            cT = 1;
            break
          }
          cT += oT(TT, lT)
        }
        JT.set(kT, cT)
      }
      return cT
    }

    function HT(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
      let xT = 0;
      for (let jT = lT; jT < MT; jT++) xT += oT(TT, kT[jT]);
      let IT = Math.ceil(1.5 * xT / 8),
        AT = [],
        CT = [];
      return function kT(cT, lT, MT, OT, yT) {
        for (let xT = MT; xT < OT;) {
          let MT = xT,
            jT = lT[xT],
            vT = oT(TT, cT[xT]);
          for (xT++; xT < OT; xT++) {
            let kT = oT(TT, cT[xT]);
            if (vT + kT >= IT) break;
            vT += kT
          }
          if (xT == MT + 1) {
            if (vT > IT) {
              let TT = cT[MT];
              kT(TT.children, TT.positions, 0, TT.children.length, lT[MT] + yT);
              continue
            }
            AT.push(cT[MT])
          } else {
            let kT = lT[xT - 1] + cT[xT - 1].length - jT;
            AT.push(HT(TT, cT, lT, MT, xT, jT, kT, null, fT))
          }
          CT.push(jT + yT - KT)
        }
      }(kT, cT, lT, MT, 0), (yT || fT)(AT, CT, OT)
    }
    class eT {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(TT, kT, cT) {
        let lT = this.map.get(TT);
        lT || this.map.set(TT, lT = new Map), lT.set(kT, cT)
      }
      getBuffer(TT, kT) {
        let cT = this.map.get(TT);
        return cT && cT.get(kT)
      }
      set(TT, kT) {
        TT instanceof PT ? this.setBuffer(TT.context.buffer, TT.index, kT) : TT instanceof DT && this.map.set(TT.tree, kT)
      }
      get(TT) {
        return TT instanceof PT ? this.getBuffer(TT.context.buffer, TT.index) : TT instanceof DT ? this.map.get(TT.tree) : void 0
      }
      cursorSet(TT, kT) {
        TT.buffer ? this.setBuffer(TT.buffer.buffer, TT.index, kT) : this.map.set(TT.tree, kT)
      }
      cursorGet(TT) {
        return TT.buffer ? this.getBuffer(TT.buffer.buffer, TT.index) : this.map.get(TT.tree)
      }
    }
    class GT {
      constructor(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = TT, this.to = kT, this.tree = cT, this.offset = lT, this.open = (MT ? 1 : 0) | (KT ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = [new GT(0, TT.length, TT, 0, !1, cT)];
        for (let MT of kT) MT.to > TT.length && lT.push(MT);
        return lT
      }
      static applyChanges(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!kT.length) return TT;
        let lT = [],
          MT = 1,
          KT = TT.length ? TT[0] : null;
        for (let OT = 0, yT = 0, fT = 0;; OT++) {
          let xT = OT < kT.length ? kT[OT] : null,
            IT = xT ? xT.fromA : 1e9;
          if (IT - yT >= cT)
            for (; KT && KT.from < IT;) {
              let kT = KT;
              if (yT >= kT.from || IT <= kT.to || fT) {
                let TT = Math.max(kT.from, yT) - fT,
                  cT = Math.min(kT.to, IT) - fT;
                kT = TT >= cT ? null : new GT(TT, cT, kT.tree, kT.offset + fT, OT > 0, !!xT)
              }
              if (kT && lT.push(kT), KT.to > IT) break;
              KT = MT < TT.length ? TT[MT++] : null
            }
          if (!xT) break;
          yT = xT.toA, fT = xT.toA - xT.toB
        }
        return lT
      }
    }
    class VT {
      startParse(TT, kT, cT) {
        return "string" == typeof TT && (TT = new ET(TT)), cT = cT ? cT.length ? cT.map((TT => new KT(TT.from, TT.to))) : [new KT(0, 0)] : [new KT(0, TT.length)], this.createParse(TT, kT || [], cT)
      }
      parse(TT, kT, cT) {
        let lT = this.startParse(TT, kT, cT);
        for (;;) {
          let TT = lT.advance();
          if (TT) return TT
        }
      }
    }
    class ET {
      constructor(TT) {
        this.string = TT
      }
      get length() {
        return this.string.length
      }
      chunk(TT) {
        return this.string.slice(TT)
      }
      get lineChunks() {
        return !1
      }
      read(TT, kT) {
        return this.string.slice(TT, kT)
      }
    }
    new OT({
      perNode: !0
    })
  },
  40961: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => CT,
      e: () => fT,
      f: () => AT,
      i: () => JT
    });
    var lT = cT(40955);
    let MT = 0;
    class KT {
      constructor(TT, kT, cT, lT) {
        this.name = TT, this.set = kT, this.base = cT, this.modified = lT, this.id = MT++
      }
      toString() {
        let {
          name: TT
        } = this;
        for (let kT of this.modified) kT.name && (TT = `${kT.name}(${TT})`);
        return TT
      }
      static define(TT, kT) {
        let cT = "string" == typeof TT ? TT : "?";
        if (TT instanceof KT && (kT = TT), null === kT || void 0 === kT ? void 0 : kT.base) throw new Error("Can not derive from a modified tag");
        let lT = new KT(cT, [], null, []);
        if (lT.set.push(lT), kT)
          for (let MT of kT.set) lT.set.push(MT);
        return lT
      }
      static defineModifier(TT) {
        let kT = new yT(TT);
        return TT => TT.modified.indexOf(kT) > -1 ? TT : yT.get(TT.base || TT, TT.modified.concat(kT).sort(((TT, kT) => TT.id - kT.id)))
      }
    }
    let OT = 0;
    class yT {
      constructor(TT) {
        this.name = TT, this.instances = [], this.id = OT++
      }
      static get(TT, kT) {
        if (!kT.length) return TT;
        let cT = kT[0].instances.find((cT => {
          return cT.base == TT && (lT = kT, MT = cT.modified, lT.length == MT.length && lT.every(((TT, kT) => TT == MT[kT])));
          var lT, MT
        }));
        if (cT) return cT;
        let lT = [],
          MT = new KT(TT.name, lT, TT, kT);
        for (let KT of kT) KT.instances.push(MT);
        let OT = function(TT) {
          let kT = [
            []
          ];
          for (let cT = 0; cT < TT.length; cT++)
            for (let lT = 0, MT = kT.length; lT < MT; lT++) kT.push(kT[lT].concat(TT[cT]));
          return kT.sort(((TT, kT) => kT.length - TT.length))
        }(kT);
        for (let KT of TT.set)
          if (!KT.modified.length)
            for (let TT of OT) lT.push(yT.get(KT, TT));
        return MT
      }
    }

    function fT(TT) {
      let kT = Object.create(null);
      for (let cT in TT) {
        let lT = TT[cT];
        Array.isArray(lT) || (lT = [lT]);
        for (let TT of cT.split(" "))
          if (TT) {
            let cT = [],
              MT = 2,
              KT = TT;
            for (let kT = 0;;) {
              if ("..." == KT && kT > 0 && kT + 3 == TT.length) {
                MT = 1;
                break
              }
              let lT = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(KT);
              if (!lT) throw new RangeError("Invalid path: " + TT);
              if (cT.push("*" == lT[0] ? "" : '"' == lT[0][0] ? JSON.parse(lT[0]) : lT[0]), kT += lT[0].length, kT == TT.length) break;
              let OT = TT[kT++];
              if (kT == TT.length && "!" == OT) {
                MT = 0;
                break
              }
              if ("/" != OT) throw new RangeError("Invalid path: " + TT);
              KT = TT.slice(kT)
            }
            let OT = cT.length - 1,
              yT = cT[OT];
            if (!yT) throw new RangeError("Invalid path: " + TT);
            let fT = new IT(lT, MT, OT > 0 ? cT.slice(0, OT) : null);
            kT[yT] = fT.sort(kT[yT])
          }
      }
      return xT.add(kT)
    }
    const xT = new lT.j({
      combine(TT, kT) {
        let cT, lT, MT;
        for (; TT || kT;) {
          if (!TT || kT && TT.depth >= kT.depth ? (MT = kT, kT = kT.next) : (MT = TT, TT = TT.next), cT && cT.mode == MT.mode && !MT.context && !cT.context) continue;
          let KT = new IT(MT.tags, MT.mode, MT.context);
          cT ? cT.next = KT : lT = KT, cT = KT
        }
        return lT
      }
    });
    class IT {
      constructor(TT, kT, cT, lT) {
        this.tags = TT, this.mode = kT, this.context = cT, this.next = lT
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(TT) {
        return !TT || TT.depth < this.depth ? (this.next = TT, this) : (TT.next = this.sort(TT.next), TT)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function AT(TT, kT) {
      let cT = Object.create(null);
      for (let KT of TT)
        if (Array.isArray(KT.tag))
          for (let TT of KT.tag) cT[TT.id] = KT.class;
        else cT[KT.tag.id] = KT.class;
      let {
        scope: lT,
        all: MT = null
      } = kT || {};
      return {
        style: TT => {
          let kT = MT;
          for (let lT of TT)
            for (let TT of lT.set) {
              let lT = cT[TT.id];
              if (lT) {
                kT = kT ? kT + " " + lT : lT;
                break
              }
            }
          return kT
        },
        scope: lT
      }
    }

    function CT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : TT.length,
        KT = new jT(lT, Array.isArray(kT) ? kT : [kT], cT);
      KT.highlightRange(TT.cursor(), lT, MT, "", KT.highlighters), KT.flush(MT)
    }
    IT.empty = new IT([], 2, null);
    class jT {
      constructor(TT, kT, cT) {
        this.at = TT, this.highlighters = kT, this.span = cT, this.class = ""
      }
      startSpan(TT, kT) {
        kT != this.class && (this.flush(TT), TT > this.at && (this.at = TT), this.class = kT)
      }
      flush(TT) {
        TT > this.at && this.class && this.span(this.at, TT, this.class)
      }
      highlightRange(TT, kT, cT, MT, KT) {
        let {
          type: OT,
          from: yT,
          to: fT
        } = TT;
        if (yT >= cT || fT <= kT) return;
        OT.isTop && (KT = this.highlighters.filter((TT => !TT.scope || TT.scope(OT))));
        let AT = MT,
          CT = function(TT) {
            let kT = TT.type.prop(xT);
            for (; kT && kT.context && !TT.matchContext(kT.context);) kT = kT.next;
            return kT || null
          }(TT) || IT.empty,
          jT = function(TT, kT) {
            let cT = null;
            for (let lT of TT) {
              let TT = lT.style(kT);
              TT && (cT = cT ? cT + " " + TT : TT)
            }
            return cT
          }(KT, CT.tags);
        if (jT && (AT && (AT += " "), AT += jT, 1 == CT.mode && (MT += (MT ? " " : "") + jT)), this.startSpan(Math.max(kT, yT), AT), CT.opaque) return;
        let vT = TT.tree && TT.tree.prop(lT.j.mounted);
        if (vT && vT.overlay) {
          let lT = TT.node.enter(vT.overlay[0].from + yT, 1),
            OT = this.highlighters.filter((TT => !TT.scope || TT.scope(vT.tree.type))),
            xT = TT.firstChild();
          for (let IT = 0, CT = yT;; IT++) {
            let jT = IT < vT.overlay.length ? vT.overlay[IT] : null,
              tT = jT ? jT.from + yT : fT,
              hT = Math.max(kT, CT),
              NT = Math.min(cT, tT);
            if (hT < NT && xT)
              for (; TT.from < NT && (this.highlightRange(TT, hT, NT, MT, KT), this.startSpan(Math.min(NT, TT.to), AT), !(TT.to >= tT) && TT.nextSibling()););
            if (!jT || tT > cT) break;
            CT = jT.to + yT, CT > kT && (this.highlightRange(lT.cursor(), Math.max(kT, jT.from + yT), Math.min(cT, CT), "", OT), this.startSpan(Math.min(cT, CT), AT))
          }
          xT && TT.parent()
        } else if (TT.firstChild()) {
          vT && (MT = "");
          do {
            if (!(TT.to <= kT)) {
              if (TT.from >= cT) break;
              this.highlightRange(TT, kT, cT, MT, KT), this.startSpan(Math.min(cT, TT.to), AT)
            }
          } while (TT.nextSibling());
          TT.parent()
        }
      }
    }
    const vT = KT.define,
      tT = vT(),
      hT = vT(),
      NT = vT(hT),
      QT = vT(hT),
      ST = vT(),
      DT = vT(ST),
      aT = vT(ST),
      FT = vT(),
      rT = vT(FT),
      PT = vT(),
      wT = vT(),
      mT = vT(),
      bT = vT(mT),
      zT = vT(),
      JT = {
        comment: tT,
        lineComment: vT(tT),
        blockComment: vT(tT),
        docComment: vT(tT),
        name: hT,
        variableName: vT(hT),
        typeName: NT,
        tagName: vT(NT),
        propertyName: QT,
        attributeName: vT(QT),
        className: vT(hT),
        labelName: vT(hT),
        namespace: vT(hT),
        macroName: vT(hT),
        literal: ST,
        string: DT,
        docString: vT(DT),
        character: vT(DT),
        attributeValue: vT(DT),
        number: aT,
        integer: vT(aT),
        float: vT(aT),
        bool: vT(ST),
        regexp: vT(ST),
        escape: vT(ST),
        color: vT(ST),
        url: vT(ST),
        keyword: PT,
        self: vT(PT),
        null: vT(PT),
        atom: vT(PT),
        unit: vT(PT),
        modifier: vT(PT),
        operatorKeyword: vT(PT),
        controlKeyword: vT(PT),
        definitionKeyword: vT(PT),
        moduleKeyword: vT(PT),
        operator: wT,
        derefOperator: vT(wT),
        arithmeticOperator: vT(wT),
        logicOperator: vT(wT),
        bitwiseOperator: vT(wT),
        compareOperator: vT(wT),
        updateOperator: vT(wT),
        definitionOperator: vT(wT),
        typeOperator: vT(wT),
        controlOperator: vT(wT),
        punctuation: mT,
        separator: vT(mT),
        bracket: bT,
        angleBracket: vT(bT),
        squareBracket: vT(bT),
        paren: vT(bT),
        brace: vT(bT),
        content: FT,
        heading: rT,
        heading1: vT(rT),
        heading2: vT(rT),
        heading3: vT(rT),
        heading4: vT(rT),
        heading5: vT(rT),
        heading6: vT(rT),
        contentSeparator: vT(FT),
        list: vT(FT),
        quote: vT(FT),
        emphasis: vT(FT),
        strong: vT(FT),
        link: vT(FT),
        monospace: vT(FT),
        strikethrough: vT(FT),
        inserted: vT(),
        deleted: vT(),
        changed: vT(),
        invalid: vT(),
        meta: zT,
        documentMeta: vT(zT),
        annotation: vT(zT),
        processingInstruction: vT(zT),
        definition: KT.defineModifier("definition"),
        constant: KT.defineModifier("constant"),
        function: KT.defineModifier("function"),
        standard: KT.defineModifier("standard"),
        local: KT.defineModifier("local"),
        special: KT.defineModifier("special")
      };
    for (let oT in JT) {
      let TT = JT[oT];
      TT instanceof KT && (TT.name = oT)
    }
    AT([{
      tag: JT.link,
      class: "tok-link"
    }, {
      tag: JT.heading,
      class: "tok-heading"
    }, {
      tag: JT.emphasis,
      class: "tok-emphasis"
    }, {
      tag: JT.strong,
      class: "tok-strong"
    }, {
      tag: JT.keyword,
      class: "tok-keyword"
    }, {
      tag: JT.atom,
      class: "tok-atom"
    }, {
      tag: JT.bool,
      class: "tok-bool"
    }, {
      tag: JT.url,
      class: "tok-url"
    }, {
      tag: JT.labelName,
      class: "tok-labelName"
    }, {
      tag: JT.inserted,
      class: "tok-inserted"
    }, {
      tag: JT.deleted,
      class: "tok-deleted"
    }, {
      tag: JT.literal,
      class: "tok-literal"
    }, {
      tag: JT.string,
      class: "tok-string"
    }, {
      tag: JT.number,
      class: "tok-number"
    }, {
      tag: [JT.regexp, JT.escape, JT.special(JT.string)],
      class: "tok-string2"
    }, {
      tag: JT.variableName,
      class: "tok-variableName"
    }, {
      tag: JT.local(JT.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: JT.definition(JT.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: JT.special(JT.variableName),
      class: "tok-variableName2"
    }, {
      tag: JT.definition(JT.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: JT.typeName,
      class: "tok-typeName"
    }, {
      tag: JT.namespace,
      class: "tok-namespace"
    }, {
      tag: JT.className,
      class: "tok-className"
    }, {
      tag: JT.macroName,
      class: "tok-macroName"
    }, {
      tag: JT.propertyName,
      class: "tok-propertyName"
    }, {
      tag: JT.operator,
      class: "tok-operator"
    }, {
      tag: JT.comment,
      class: "tok-comment"
    }, {
      tag: JT.meta,
      class: "tok-meta"
    }, {
      tag: JT.invalid,
      class: "tok-invalid"
    }, {
      tag: JT.punctuation,
      class: "tok-punctuation"
    }])
  },
  40970: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT.h,
      h: () => OT.t,
      l: () => OT.F,
      o: () => OT.H,
      s: () => yT.k,
      w: () => Pc,
      x: () => yT.J,
      z: () => yT.gb
    });
    var lT = cT(1398),
      MT = cT(1390),
      KT = cT(71),
      OT = cT(40941),
      yT = cT(40944),
      fT = cT(40953),
      xT = cT(40955);

    function IT(TT, kT) {
      return cT => {
        let {
          state: lT,
          dispatch: MT
        } = cT;
        if (lT.readOnly) return !1;
        let KT = TT(kT, lT);
        return !!KT && (MT(lT.update(KT)), !0)
      }
    }
    const AT = IT(NT, 0),
      CT = IT(hT, 0),
      jT = IT(((TT, kT) => hT(TT, kT, function(TT) {
        let kT = [];
        for (let cT of TT.selection.qt) {
          let lT = TT.doc.lineAt(cT.from),
            MT = cT.to <= lT.to ? lT : TT.doc.lineAt(cT.to);
          MT.from > lT.from && MT.from == cT.to && (MT = cT.to == lT.to + 1 ? lT : TT.doc.lineAt(cT.to - 1));
          let KT = kT.length - 1;
          KT >= 0 && kT[KT].to > lT.from ? kT[KT].to = MT.to : kT.push({
            from: lT.from + /^\s*/.exec(lT.text)[0].length,
            to: MT.to
          })
        }
        return kT
      }(kT))), 0);

    function vT(TT, kT) {
      let cT = TT.languageDataAt("commentTokens", kT, 1);
      return cT.length ? cT[0] : {}
    }
    const tT = 50;

    function hT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kT.selection.qt,
        lT = cT.map((TT => vT(kT, TT.from).block));
      if (!lT.every((TT => TT))) return null;
      let MT = cT.map(((TT, cT) => function(TT, kT, cT, lT) {
        let MT, KT, {
            open: OT,
            close: yT
          } = kT,
          fT = TT.sliceDoc(cT - tT, cT),
          xT = TT.sliceDoc(lT, lT + tT),
          IT = /\s*$/.exec(fT)[0].length,
          AT = /^\s*/.exec(xT)[0].length,
          CT = fT.length - IT;
        if (fT.slice(CT - OT.length, CT) == OT && xT.slice(AT, AT + yT.length) == yT) return {
          open: {
            pos: cT - IT,
            margin: IT && 1
          },
          close: {
            pos: lT + AT,
            margin: AT && 1
          }
        };
        lT - cT <= 2 * tT ? MT = KT = TT.sliceDoc(cT, lT) : (MT = TT.sliceDoc(cT, cT + tT), KT = TT.sliceDoc(lT - tT, lT));
        let jT = /^\s*/.exec(MT)[0].length,
          vT = /\s*$/.exec(KT)[0].length,
          hT = KT.length - vT - yT.length;
        return MT.slice(jT, jT + OT.length) == OT && KT.slice(hT, hT + yT.length) == yT ? {
          open: {
            pos: cT + jT + OT.length,
            margin: /\s/.test(MT.charAt(jT + OT.length)) ? 1 : 0
          },
          close: {
            pos: lT - vT - yT.length,
            margin: /\s/.test(KT.charAt(hT - 1)) ? 1 : 0
          }
        } : null
      }(kT, lT[cT], TT.from, TT.to)));
      if (2 != TT && !MT.every((TT => TT))) return {
        changes: kT.changes(cT.map(((TT, kT) => MT[kT] ? [] : [{
          from: TT.from,
          insert: lT[kT].open + " "
        }, {
          from: TT.to,
          insert: " " + lT[kT].close
        }])))
      };
      if (1 != TT && MT.some((TT => TT))) {
        let TT = [];
        for (let kT, cT = 0; cT < MT.length; cT++)
          if (kT = MT[cT]) {
            let MT = lT[cT],
              {
                open: KT,
                close: OT
              } = kT;
            TT.push({
              from: KT.pos - MT.open.length,
              to: KT.pos + KT.margin
            }, {
              from: OT.pos - OT.margin,
              to: OT.pos + MT.close.length
            })
          } return {
          changes: TT
        }
      }
      return null
    }

    function NT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kT.selection.qt,
        lT = [],
        MT = -1;
      TT: for (let {
          from: KT,
          to: OT
        }
        of cT) {
        let TT, cT = lT.length,
          yT = 1e9;
        for (let fT = KT; fT <= OT;) {
          let cT = kT.doc.lineAt(fT);
          if (void 0 == TT && (TT = vT(kT, cT.from).line, !TT)) continue TT;
          if (cT.from > MT && (KT == OT || OT > cT.from)) {
            MT = cT.from;
            let kT = /^\s*/.exec(cT.text)[0].length,
              KT = kT == cT.length,
              OT = cT.text.slice(kT, kT + TT.length) == TT ? kT : -1;
            kT < cT.text.length && kT < yT && (yT = kT), lT.push({
              line: cT,
              comment: OT,
              token: TT,
              indent: kT,
              empty: KT,
              single: !1
            })
          }
          fT = cT.to + 1
        }
        if (yT < 1e9)
          for (let kT = cT; kT < lT.length; kT++) lT[kT].indent < lT[kT].line.text.length && (lT[kT].indent = yT);
        lT.length == cT + 1 && (lT[cT].single = !0)
      }
      if (2 != TT && lT.some((TT => TT.comment < 0 && (!TT.empty || TT.single)))) {
        let TT = [];
        for (let {
            line: kT,
            token: MT,
            indent: KT,
            empty: OT,
            single: yT
          }
          of lT) !yT && OT || TT.push({
          from: kT.from + KT,
          insert: MT + " "
        });
        let cT = kT.changes(TT);
        return {
          changes: cT,
          selection: kT.selection.map(cT, 1)
        }
      }
      if (1 != TT && lT.some((TT => TT.comment >= 0))) {
        let TT = [];
        for (let {
            line: kT,
            comment: cT,
            token: MT
          }
          of lT)
          if (cT >= 0) {
            let lT = kT.from + cT,
              KT = lT + MT.length;
            " " == kT.text[KT - kT.from] && KT++, TT.push({
              from: lT,
              to: KT
            })
          } return {
          changes: TT
        }
      }
      return null
    }
    const QT = OT.d.define(),
      ST = OT.d.define(),
      DT = OT.o.define(),
      aT = OT.o.define({
        combine: TT => (0, OT.R)(TT, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (TT, kT) => kT
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (TT, kT) => (cT, lT) => TT(cT, lT) || kT(cT, lT)
        })
      }),
      FT = OT.H.define({
        create: () => XT.empty,
        update(TT, kT) {
          let cT = kT.state.facet(aT),
            lT = kT.annotation(QT);
          if (lT) {
            let MT = zT.fromTransaction(kT, lT.selection),
              KT = lT.side,
              OT = 0 == KT ? TT.undone : TT.done;
            return OT = MT ? JT(OT, OT.length, cT.minDepth, MT) : GT(OT, kT.startState.selection), new XT(0 == KT ? lT.rest : OT, 0 == KT ? OT : lT.rest)
          }
          let MT = kT.annotation(ST);
          if ("full" != MT && "before" != MT || (TT = TT.isolate()), !1 === kT.annotation(OT.M.addToHistory)) return kT.changes.empty ? TT : TT.addMapping(kT.changes.desc);
          let KT = zT.fromTransaction(kT),
            yT = kT.annotation(OT.M.time),
            fT = kT.annotation(OT.M.userEvent);
          return KT ? TT = TT.addChanges(KT, yT, fT, cT, kT) : kT.selection && (TT = TT.addSelection(kT.startState.selection, yT, fT, cT.newGroupDelay)), "full" != MT && "after" != MT || (TT = TT.isolate()), TT
        },
        toJSON: TT => ({
          done: TT.done.map((TT => TT.toJSON())),
          undone: TT.undone.map((TT => TT.toJSON()))
        }),
        fromJSON: TT => new XT(TT.done.map(zT.fromJSON), TT.undone.map(zT.fromJSON))
      });

    function rT(TT, kT) {
      return function(cT) {
        let {
          state: lT,
          dispatch: MT
        } = cT;
        if (!kT && lT.readOnly) return !1;
        let KT = lT.field(FT, !1);
        if (!KT) return !1;
        let OT = KT.pop(TT, lT, kT);
        return !!OT && (MT(OT), !0)
      }
    }
    const PT = rT(0, !1),
      wT = rT(1, !1),
      mT = rT(0, !0),
      bT = rT(1, !0);
    class zT {
      constructor(TT, kT, cT, lT, MT) {
        this.changes = TT, this.effects = kT, this.mapped = cT, this.startSelection = lT, this.selectionsAfter = MT
      }
      setSelAfter(TT) {
        return new zT(this.changes, this.effects, this.mapped, this.startSelection, TT)
      }
      toJSON() {
        var TT, kT, cT;
        return {
          changes: null === (TT = this.changes) || void 0 === TT ? void 0 : TT.toJSON(),
          mapped: null === (kT = this.mapped) || void 0 === kT ? void 0 : kT.toJSON(),
          startSelection: null === (cT = this.startSelection) || void 0 === cT ? void 0 : cT.toJSON(),
          selectionsAfter: this.selectionsAfter.map((TT => TT.toJSON()))
        }
      }
      static fromJSON(TT) {
        return new zT(TT.changes && OT.ChangeSet.fromJSON(TT.changes), [], TT.mapped && OT.e.fromJSON(TT.mapped), TT.startSelection && OT.j.fromJSON(TT.startSelection), TT.selectionsAfter.map(OT.j.fromJSON))
      }
      static fromTransaction(TT, kT) {
        let cT = HT;
        for (let lT of TT.startState.facet(DT)) {
          let kT = lT(TT);
          kT.length && (cT = cT.concat(kT))
        }
        return !cT.length && TT.changes.empty ? null : new zT(TT.changes.invert(TT.startState.doc), cT, void 0, kT || TT.startState.selection, HT)
      }
      static selection(TT) {
        return new zT(void 0, HT, void 0, void 0, TT)
      }
    }

    function JT(TT, kT, cT, lT) {
      let MT = kT + 1 > cT + 20 ? kT - cT - 1 : 0,
        KT = TT.slice(MT, kT);
      return KT.push(lT), KT
    }

    function oT(TT, kT) {
      return TT.length ? kT.length ? TT.concat(kT) : TT : kT
    }
    const HT = [],
      eT = 200;

    function GT(TT, kT) {
      if (TT.length) {
        let cT = TT[TT.length - 1],
          lT = cT.selectionsAfter.slice(Math.max(0, cT.selectionsAfter.length - eT));
        return lT.length && lT[lT.length - 1].eq(kT) ? TT : (lT.push(kT), JT(TT, TT.length - 1, 1e9, cT.setSelAfter(lT)))
      }
      return [zT.selection([kT])]
    }

    function VT(TT) {
      let kT = TT[TT.length - 1],
        cT = TT.slice();
      return cT[TT.length - 1] = kT.setSelAfter(kT.selectionsAfter.slice(0, kT.selectionsAfter.length - 1)), cT
    }

    function ET(TT, kT) {
      if (!TT.length) return TT;
      let cT = TT.length,
        lT = HT;
      for (; cT;) {
        let MT = ZT(TT[cT - 1], kT, lT);
        if (MT.changes && !MT.changes.empty || MT.effects.length) {
          let kT = TT.slice(0, cT);
          return kT[cT - 1] = MT, kT
        }
        kT = MT.mapped, cT--, lT = MT.selectionsAfter
      }
      return lT.length ? [zT.selection(lT)] : HT
    }

    function ZT(TT, kT, cT) {
      let lT = oT(TT.selectionsAfter.length ? TT.selectionsAfter.map((TT => TT.map(kT))) : HT, cT);
      if (!TT.changes) return zT.selection(lT);
      let MT = TT.changes.map(kT),
        KT = kT.mapDesc(TT.changes, !0),
        yT = TT.mapped ? TT.mapped.composeDesc(KT) : KT;
      return new zT(MT, OT.F.mapEffects(TT.effects, kT), yT, TT.startSelection.map(KT), lT)
    }
    const uT = /^(input\.type|delete)($|\.)/;
    class XT {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = TT, this.undone = kT, this.prevTime = cT, this.prevUserEvent = lT
      }
      isolate() {
        return this.prevTime ? new XT(this.done, this.undone) : this
      }
      addChanges(TT, kT, cT, lT, MT) {
        let KT = this.done,
          yT = KT[KT.length - 1];
        return KT = yT && yT.changes && !yT.changes.empty && TT.changes && (!cT || uT.test(cT)) && (!yT.selectionsAfter.length && kT - this.prevTime < lT.newGroupDelay && lT.joinToEvent(MT, function(TT, kT) {
          let cT = [],
            lT = !1;
          return TT.iterChangedRanges(((TT, kT) => cT.push(TT, kT))), kT.iterChangedRanges(((TT, kT, MT, KT) => {
            for (let OT = 0; OT < cT.length;) {
              let TT = cT[OT++],
                kT = cT[OT++];
              KT >= TT && MT <= kT && (lT = !0)
            }
          })), lT
        }(yT.changes, TT.changes)) || "input.type.compose" == cT) ? JT(KT, KT.length - 1, lT.minDepth, new zT(TT.changes.compose(yT.changes), oT(OT.F.mapEffects(TT.effects, yT.changes), yT.effects), yT.mapped, yT.startSelection, HT)) : JT(KT, KT.length, lT.minDepth, TT), new XT(KT, HT, kT, cT)
      }
      addSelection(TT, kT, cT, lT) {
        let MT = this.done.length ? this.done[this.done.length - 1].selectionsAfter : HT;
        return MT.length > 0 && kT - this.prevTime < lT && cT == this.prevUserEvent && cT && /^select($|\.)/.test(cT) && (KT = MT[MT.length - 1], OT = TT, KT.qt.length == OT.qt.length && 0 === KT.qt.filter(((TT, kT) => TT.empty != OT.qt[kT].empty)).length) ? this : new XT(GT(this.done, TT), this.undone, kT, cT);
        var KT, OT
      }
      addMapping(TT) {
        return new XT(ET(this.done, TT), ET(this.undone, TT), this.prevTime, this.prevUserEvent)
      }
      pop(TT, kT, cT) {
        let lT = 0 == TT ? this.done : this.undone;
        if (0 == lT.length) return null;
        let MT = lT[lT.length - 1],
          KT = MT.selectionsAfter[0] || (MT.startSelection ? MT.startSelection.map(MT.changes.invertedDesc, 1) : kT.selection);
        if (cT && MT.selectionsAfter.length) return kT.update({
          selection: MT.selectionsAfter[MT.selectionsAfter.length - 1],
          annotations: QT.of({
            side: TT,
            rest: VT(lT),
            selection: KT
          }),
          userEvent: 0 == TT ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (MT.changes) {
          let cT = 1 == lT.length ? HT : lT.slice(0, lT.length - 1);
          return MT.mapped && (cT = ET(cT, MT.mapped)), kT.update({
            changes: MT.changes,
            selection: MT.startSelection,
            effects: MT.effects,
            annotations: QT.of({
              side: TT,
              rest: cT,
              selection: KT
            }),
            filter: !1,
            userEvent: 0 == TT ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    XT.empty = new XT(HT, HT);
    const dT = [{
      key: "Mod-z",
      run: PT,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: wT,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: wT,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: mT,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: bT,
      preventDefault: !0
    }];

    function LT(TT, kT) {
      return OT.j.create(TT.qt.map(kT), TT.mainIndex)
    }

    function RT(TT, kT) {
      return TT.update({
        selection: kT,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function gT(TT, kT) {
      let {
        state: cT,
        dispatch: lT
      } = TT, MT = LT(cT.selection, kT);
      return !MT.eq(cT.selection, !0) && (lT(RT(cT, MT)), !0)
    }

    function UT(TT, kT) {
      return OT.j.cursor(kT ? TT.to : TT.from)
    }

    function YT(TT, kT) {
      return gT(TT, (cT => cT.empty ? TT.moveByChar(cT, kT) : UT(cT, kT)))
    }

    function BT(TT) {
      return TT.textDirectionAt(TT.state.selection.main.head) == yT.f.LTR
    }
    const WT = TT => YT(TT, !BT(TT)),
      nT = TT => YT(TT, BT(TT));

    function pT(TT, kT) {
      return gT(TT, (cT => cT.empty ? TT.moveByGroup(cT, kT) : UT(cT, kT)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function iT(TT, kT, cT) {
      if (kT.type.prop(cT)) return !0;
      let lT = kT.to - kT.from;
      return lT && (lT > 2 || /[^\s,.;:]/.test(TT.sliceDoc(kT.from, kT.to))) || kT.firstChild
    }

    function qT(TT, kT, cT) {
      let lT, MT, KT = (0, fT.hb)(TT).resolveInner(kT.head),
        yT = cT ? xT.j.closedBy : xT.j.openedBy;
      for (let OT = kT.head;;) {
        let kT = cT ? KT.childAfter(OT) : KT.childBefore(OT);
        if (!kT) break;
        iT(TT, kT, yT) ? KT = kT : OT = cT ? kT.to : kT.from
      }
      return MT = KT.type.prop(yT) && (lT = cT ? (0, fT.bb)(TT, KT.from, 1) : (0, fT.bb)(TT, KT.to, -1)) && lT.matched ? cT ? lT.end.to : lT.end.from : cT ? KT.to : KT.from, OT.j.cursor(MT, cT ? -1 : 1)
    }

    function sT(TT, kT) {
      return gT(TT, (cT => {
        if (!cT.empty) return UT(cT, kT);
        let lT = TT.moveVertically(cT, kT);
        return lT.head != cT.head ? lT : TT.moveToLineBoundary(cT, kT)
      }))
    }
    const Tk = TT => sT(TT, !1),
      kk = TT => sT(TT, !0);

    function ck(TT) {
      let kT, cT = TT.scrollDOM.clientHeight < TT.scrollDOM.scrollHeight - 2,
        lT = 0,
        MT = 0;
      if (cT) {
        for (let kT of TT.state.facet(yT.h.scrollMargins)) {
          let cT = kT(TT);
          (null === cT || void 0 === cT ? void 0 : cT.top) && (lT = Math.max(null === cT || void 0 === cT ? void 0 : cT.top, lT)), (null === cT || void 0 === cT ? void 0 : cT.bottom) && (MT = Math.max(null === cT || void 0 === cT ? void 0 : cT.bottom, MT))
        }
        kT = TT.scrollDOM.clientHeight - lT - MT
      } else kT = (TT.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: lT,
        marginBottom: MT,
        selfScroll: cT,
        height: Math.max(TT.defaultLineHeight, kT - 5)
      }
    }

    function lk(TT, kT) {
      let cT, lT = ck(TT),
        {
          state: MT
        } = TT,
        KT = LT(MT.selection, (cT => cT.empty ? TT.moveVertically(cT, kT, lT.height) : UT(cT, kT)));
      if (KT.eq(MT.selection)) return !1;
      if (lT.selfScroll) {
        let kT = TT.coordsAtPos(MT.selection.main.head),
          OT = TT.scrollDOM.getBoundingClientRect(),
          fT = OT.top + lT.marginTop,
          xT = OT.bottom - lT.marginBottom;
        kT && kT.top > fT && kT.bottom < xT && (cT = yT.h.scrollIntoView(KT.main.head, {
          y: "start",
          yMargin: kT.top - fT
        }))
      }
      return TT.dispatch(RT(MT, KT), {
        effects: cT
      }), !0
    }
    const Mk = TT => lk(TT, !1),
      Kk = TT => lk(TT, !0);

    function Ok(TT, kT, cT) {
      let lT = TT.lineBlockAt(kT.head),
        MT = TT.moveToLineBoundary(kT, cT);
      if (MT.head == kT.head && MT.head != (cT ? lT.to : lT.from) && (MT = TT.moveToLineBoundary(kT, cT, !1)), !cT && MT.head == lT.from && lT.length) {
        let cT = /^\s*/.exec(TT.state.sliceDoc(lT.from, Math.min(lT.from + 100, lT.to)))[0].length;
        cT && kT.head != lT.from + cT && (MT = OT.j.cursor(lT.from + cT))
      }
      return MT
    }

    function yk(TT, kT, cT) {
      let lT = !1,
        MT = LT(TT.selection, (kT => {
          let MT = (0, fT.bb)(TT, kT.head, -1) || (0, fT.bb)(TT, kT.head, 1) || kT.head > 0 && (0, fT.bb)(TT, kT.head - 1, 1) || kT.head < TT.doc.length && (0, fT.bb)(TT, kT.head + 1, -1);
          if (!MT || !MT.end) return kT;
          lT = !0;
          let KT = MT.start.from == kT.head ? MT.end.to : MT.end.from;
          return cT ? OT.j.range(kT.anchor, KT) : OT.j.cursor(KT)
        }));
      return !!lT && (kT(RT(TT, MT)), !0)
    }

    function fk(TT, kT) {
      let cT = LT(TT.state.selection, (TT => {
        let cT = kT(TT);
        return OT.j.range(TT.anchor, cT.head, cT.goalColumn, cT.bidiLevel || void 0, cT.assoc)
      }));
      return !cT.eq(TT.state.selection) && (TT.dispatch(RT(TT.state, cT)), !0)
    }

    function xk(TT, kT) {
      return fk(TT, (cT => TT.moveByChar(cT, kT)))
    }
    const Ik = TT => xk(TT, !BT(TT)),
      Ak = TT => xk(TT, BT(TT));

    function Ck(TT, kT) {
      return fk(TT, (cT => TT.moveByGroup(cT, kT)))
    }

    function jk(TT, kT) {
      return fk(TT, (cT => TT.moveVertically(cT, kT)))
    }
    const vk = TT => jk(TT, !1),
      tk = TT => jk(TT, !0);

    function hk(TT, kT) {
      return fk(TT, (cT => TT.moveVertically(cT, kT, ck(TT).height)))
    }
    const Nk = TT => hk(TT, !1),
      Qk = TT => hk(TT, !0),
      Sk = TT => {
        let {
          state: kT,
          dispatch: cT
        } = TT;
        return cT(RT(kT, {
          anchor: 0
        })), !0
      },
      Dk = TT => {
        let {
          state: kT,
          dispatch: cT
        } = TT;
        return cT(RT(kT, {
          anchor: kT.doc.length
        })), !0
      },
      ak = TT => {
        let {
          state: kT,
          dispatch: cT
        } = TT;
        return cT(RT(kT, {
          anchor: kT.selection.main.anchor,
          head: 0
        })), !0
      },
      Fk = TT => {
        let {
          state: kT,
          dispatch: cT
        } = TT;
        return cT(RT(kT, {
          anchor: kT.selection.main.anchor,
          head: kT.doc.length
        })), !0
      };

    function rk(TT, kT) {
      let {
        state: cT
      } = TT, lT = cT.selection, MT = cT.selection.qt.slice();
      for (let KT of cT.selection.qt) {
        let lT = cT.doc.lineAt(KT.head);
        if (kT ? lT.to < TT.state.doc.length : lT.from > 0)
          for (let cT = KT;;) {
            let KT = TT.moveVertically(cT, kT);
            if (KT.head < lT.from || KT.head > lT.to) {
              MT.some((TT => TT.head == KT.head)) || MT.push(KT);
              break
            }
            if (KT.head == cT.head) break;
            cT = KT
          }
      }
      return MT.length != lT.qt.length && (TT.dispatch(RT(cT, OT.j.create(MT, MT.length - 1))), !0)
    }

    function Pk(TT, kT) {
      if (TT.state.readOnly) return !1;
      let cT = "delete.selection",
        {
          state: lT
        } = TT,
        MT = lT.changeByRange((lT => {
          let {
            from: MT,
            to: KT
          } = lT;
          if (MT == KT) {
            let OT = kT(lT);
            OT < MT ? (cT = "delete.backward", OT = wk(TT, OT, !1)) : OT > MT && (cT = "delete.forward", OT = wk(TT, OT, !0)), MT = Math.min(MT, OT), KT = Math.max(KT, OT)
          } else MT = wk(TT, MT, !1), KT = wk(TT, KT, !0);
          return MT == KT ? {
            range: lT
          } : {
            changes: {
              from: MT,
              to: KT
            },
            range: OT.j.cursor(MT, MT < lT.head ? -1 : 1)
          }
        }));
      return !MT.changes.empty && (TT.dispatch(lT.update(MT, {
        scrollIntoView: !0,
        userEvent: cT,
        effects: "delete.selection" == cT ? yT.h.announce.of(lT.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function wk(TT, kT, cT) {
      if (TT instanceof yT.h)
        for (let lT of TT.state.facet(yT.h.atomicRanges).map((kT => kT(TT)))) lT.between(kT, kT, ((TT, lT) => {
          TT < kT && lT > kT && (kT = cT ? lT : TT)
        }));
      return kT
    }
    const mk = (TT, kT, cT) => Pk(TT, (lT => {
        let MT, KT, yT = lT.from,
          {
            state: xT
          } = TT,
          IT = xT.doc.lineAt(yT);
        if (cT && !kT && yT > IT.from && yT < IT.from + 200 && !/[^ \t]/.test(MT = IT.text.slice(0, yT - IT.from))) {
          if ("\t" == MT[MT.length - 1]) return yT - 1;
          let TT = (0, OT.T)(MT, xT.tabSize) % (0, fT.N)(xT) || (0, fT.N)(xT);
          for (let kT = 0; kT < TT && " " == MT[MT.length - 1 - kT]; kT++) yT--;
          KT = yT
        } else KT = (0, OT.W)(IT.text, yT - IT.from, kT, kT) + IT.from, KT == yT && IT.number != (kT ? xT.doc.lines : 1) ? KT += kT ? 1 : -1 : !kT && /[\ufe00-\ufe0f]/.test(IT.text.slice(KT - IT.from, yT - IT.from)) && (KT = (0, OT.W)(IT.text, KT - IT.from, !1, !1) + IT.from);
        return KT
      })),
      bk = TT => mk(TT, !1, !0),
      zk = TT => mk(TT, !0, !1),
      Jk = (TT, kT) => Pk(TT, (cT => {
        let lT = cT.head,
          {
            state: MT
          } = TT,
          KT = MT.doc.lineAt(lT),
          yT = MT.charCategorizer(lT);
        for (let TT = null;;) {
          if (lT == (kT ? KT.to : KT.from)) {
            lT == cT.head && KT.number != (kT ? MT.doc.lines : 1) && (lT += kT ? 1 : -1);
            break
          }
          let fT = (0, OT.W)(KT.text, lT - KT.from, kT) + KT.from,
            xT = KT.text.slice(Math.min(lT, fT) - KT.from, Math.max(lT, fT) - KT.from),
            IT = yT(xT);
          if (null != TT && IT != TT) break;
          " " == xT && lT == cT.head || (TT = IT), lT = fT
        }
        return lT
      })),
      Hk = TT => Jk(TT, !1);

    function ek(TT) {
      let kT = [],
        cT = -1;
      for (let lT of TT.selection.qt) {
        let MT = TT.doc.lineAt(lT.from),
          KT = TT.doc.lineAt(lT.to);
        if (lT.empty || lT.to != KT.from || (KT = TT.doc.lineAt(lT.to - 1)), cT >= MT.number) {
          let TT = kT[kT.length - 1];
          TT.to = KT.to, TT.qt.push(lT)
        } else kT.push({
          from: MT.from,
          to: KT.to,
          qt: [lT]
        });
        cT = KT.number + 1
      }
      return kT
    }

    function Gk(TT, kT, cT) {
      if (TT.readOnly) return !1;
      let lT = [],
        MT = [];
      for (let KT of ek(TT)) {
        if (cT ? KT.to == TT.doc.length : 0 == KT.from) continue;
        let kT = TT.doc.lineAt(cT ? KT.to + 1 : KT.from - 1),
          yT = kT.length + 1;
        if (cT) {
          lT.push({
            from: KT.to,
            to: kT.to
          }, {
            from: KT.from,
            insert: kT.text + TT.lineBreak
          });
          for (let kT of KT.qt) MT.push(OT.j.range(Math.min(TT.doc.length, kT.anchor + yT), Math.min(TT.doc.length, kT.head + yT)))
        } else {
          lT.push({
            from: kT.from,
            to: KT.from
          }, {
            from: KT.to,
            insert: TT.lineBreak + kT.text
          });
          for (let TT of KT.qt) MT.push(OT.j.range(TT.anchor - yT, TT.head - yT))
        }
      }
      return !!lT.length && (kT(TT.update({
        changes: lT,
        scrollIntoView: !0,
        selection: OT.j.create(MT, TT.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function Vk(TT, kT, cT) {
      if (TT.readOnly) return !1;
      let lT = [];
      for (let KT of ek(TT)) cT ? lT.push({
        from: KT.from,
        insert: TT.doc.slice(KT.from, KT.to) + TT.lineBreak
      }) : lT.push({
        from: KT.to,
        insert: TT.lineBreak + TT.doc.slice(KT.from, KT.to)
      });
      let MT = TT.changes(lT);
      return kT(TT.update({
        changes: MT,
        selection: TT.selection.map(MT, cT ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const Ek = Zk(!1);

    function Zk(TT) {
      return kT => {
        let {
          state: cT,
          dispatch: lT
        } = kT;
        if (cT.readOnly) return !1;
        let MT = cT.changeByRange((kT => {
          let {
            from: lT,
            to: MT
          } = kT, KT = cT.doc.lineAt(lT), yT = !TT && lT == MT && function(TT, kT) {
            if (/\(\)|\[\]|\{\}/.test(TT.sliceDoc(kT - 1, kT + 1))) return {
              from: kT,
              to: kT
            };
            let cT, lT = (0, fT.hb)(TT).resolveInner(kT),
              MT = lT.childBefore(kT),
              KT = lT.childAfter(kT);
            return MT && KT && MT.to <= kT && KT.from >= kT && (cT = MT.type.prop(xT.j.closedBy)) && cT.indexOf(KT.name) > -1 && TT.doc.lineAt(MT.to).from == TT.doc.lineAt(KT.from).from && !/\S/.test(TT.sliceDoc(MT.to, KT.from)) ? {
              from: MT.to,
              to: KT.from
            } : null
          }(cT, lT);
          TT && (lT = MT = (MT <= KT.to ? KT : cT.doc.lineAt(MT)).to);
          let IT = new fT.d(cT, {
              simulateBreak: lT,
              simulateDoubleBreak: !!yT
            }),
            AT = (0, fT.R)(IT, lT);
          for (null == AT && (AT = (0, OT.T)(/^\s*/.exec(cT.doc.lineAt(lT).text)[0], cT.tabSize)); MT < KT.to && /\s/.test(KT.text[MT - KT.from]);) MT++;
          yT ? ({
            from: lT,
            to: MT
          } = yT) : lT > KT.from && lT < KT.from + 100 && !/\S/.test(KT.text.slice(0, lT)) && (lT = KT.from);
          let CT = ["", (0, fT.Y)(cT, AT)];
          return yT && CT.push((0, fT.Y)(cT, IT.lineIndent(KT.from, -1))), {
            changes: {
              from: lT,
              to: MT,
              insert: OT.I.of(CT)
            },
            range: OT.j.cursor(lT + 1 + CT[1].length)
          }
        }));
        return lT(cT.update(MT, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function uk(TT, kT) {
      let cT = -1;
      return TT.changeByRange((lT => {
        let MT = [];
        for (let OT = lT.from; OT <= lT.to;) {
          let KT = TT.doc.lineAt(OT);
          KT.number > cT && (lT.empty || lT.to > KT.from) && (kT(KT, MT, lT), cT = KT.number), OT = KT.to + 1
        }
        let KT = TT.changes(MT);
        return {
          changes: MT,
          range: OT.j.range(KT.mapPos(lT.anchor, 1), KT.mapPos(lT.head, 1))
        }
      }))
    }
    const Xk = TT => {
        let {
          state: kT,
          dispatch: cT
        } = TT;
        return !kT.readOnly && (cT(kT.update(uk(kT, ((TT, cT) => {
          cT.push({
            from: TT.from,
            insert: kT.facet(fT.$)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      dk = TT => {
        let {
          state: kT,
          dispatch: cT
        } = TT;
        return !kT.readOnly && (cT(kT.update(uk(kT, ((TT, cT) => {
          let lT = /^\s*/.exec(TT.text)[0];
          if (!lT) return;
          let MT = (0, OT.T)(lT, kT.tabSize),
            KT = 0,
            yT = (0, fT.Y)(kT, Math.max(0, MT - (0, fT.N)(kT)));
          for (; KT < lT.length && KT < yT.length && lT.charCodeAt(KT) == yT.charCodeAt(KT);) KT++;
          cT.push({
            from: TT.from + KT,
            to: TT.from + lT.length,
            insert: yT.slice(KT)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      Lk = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: TT => gT(TT, (kT => qT(TT.state, kT, !BT(TT)))),
        shift: TT => fk(TT, (kT => qT(TT.state, kT, !BT(TT))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: TT => gT(TT, (kT => qT(TT.state, kT, BT(TT)))),
        shift: TT => fk(TT, (kT => qT(TT.state, kT, BT(TT))))
      }, {
        key: "Alt-ArrowUp",
        run: TT => {
          let {
            state: kT,
            dispatch: cT
          } = TT;
          return Gk(kT, cT, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: TT => {
          let {
            state: kT,
            dispatch: cT
          } = TT;
          return Vk(kT, cT, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: TT => {
          let {
            state: kT,
            dispatch: cT
          } = TT;
          return Gk(kT, cT, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: TT => {
          let {
            state: kT,
            dispatch: cT
          } = TT;
          return Vk(kT, cT, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: TT => rk(TT, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: TT => rk(TT, !0)
      }, {
        key: "Escape",
        run: TT => {
          let {
            state: kT,
            dispatch: cT
          } = TT, lT = kT.selection, MT = null;
          return lT.qt.length > 1 ? MT = OT.j.create([lT.main]) : lT.main.empty || (MT = OT.j.create([OT.j.cursor(lT.main.head)])), !!MT && (cT(RT(kT, MT)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: Zk(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: TT => {
          let {
            state: kT,
            dispatch: cT
          } = TT, lT = ek(kT).map((TT => {
            let {
              from: cT,
              to: lT
            } = TT;
            return OT.j.range(cT, Math.min(lT + 1, kT.doc.length))
          }));
          return cT(kT.update({
            selection: OT.j.create(lT),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: TT => {
          let {
            state: kT,
            dispatch: cT
          } = TT, lT = LT(kT.selection, (TT => {
            let cT = (0, fT.hb)(kT),
              lT = cT.resolveStack(TT.from, 1);
            if (TT.empty) {
              let kT = cT.resolveStack(TT.from, -1);
              kT.node.from >= lT.node.from && kT.node.to <= lT.node.to && (lT = kT)
            }
            for (let kT = lT; kT; kT = kT.next) {
              let {
                node: cT
              } = kT;
              if ((cT.from < TT.from && cT.to >= TT.to || cT.to > TT.to && cT.from <= TT.from) && kT.next) return OT.j.range(cT.to, cT.from)
            }
            return TT
          }));
          return !lT.eq(kT.selection) && (cT(RT(kT, lT)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: dk
      }, {
        key: "Mod-]",
        run: Xk
      }, {
        key: "Mod-Alt-\\",
        run: TT => {
          let {
            state: kT,
            dispatch: cT
          } = TT;
          if (kT.readOnly) return !1;
          let lT = Object.create(null),
            MT = new fT.d(kT, {
              overrideIndentation: TT => {
                let kT = lT[TT];
                return null == kT ? -1 : kT
              }
            }),
            KT = uk(kT, ((TT, cT, KT) => {
              let OT = (0, fT.R)(MT, TT.from);
              if (null == OT) return;
              /\S/.test(TT.text) || (OT = 0);
              let yT = /^\s*/.exec(TT.text)[0],
                xT = (0, fT.Y)(kT, OT);
              (yT != xT || KT.from < TT.from + yT.length) && (lT[TT.from] = OT, cT.push({
                from: TT.from,
                to: TT.from + yT.length,
                insert: xT
              }))
            }));
          return KT.changes.empty || cT(kT.update(KT, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: TT => {
          if (TT.state.readOnly) return !1;
          let {
            state: kT
          } = TT, cT = kT.changes(ek(kT).map((TT => {
            let {
              from: cT,
              to: lT
            } = TT;
            return cT > 0 ? cT-- : lT < kT.doc.length && lT++, {
              from: cT,
              to: lT
            }
          }))), lT = LT(kT.selection, (kT => {
            let cT;
            if (TT.lineWrapping) {
              let lT = TT.lineBlockAt(kT.head),
                MT = TT.coordsAtPos(kT.head, kT.assoc || 1);
              MT && (cT = lT.bottom + TT.documentTop - MT.bottom + TT.defaultLineHeight / 2)
            }
            return TT.moveVertically(kT, !0, cT)
          })).map(cT);
          return TT.dispatch({
            changes: cT,
            selection: lT,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: TT => {
          let {
            state: kT,
            dispatch: cT
          } = TT;
          return yk(kT, cT, !1)
        }
      }, {
        key: "Mod-/",
        run: TT => {
          let {
            state: kT
          } = TT, cT = kT.doc.lineAt(kT.selection.main.from), lT = vT(TT.state, cT.from);
          return lT.line ? AT(TT) : !!lT.block && jT(TT)
        }
      }, {
        key: "Alt-A",
        run: CT
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: TT => (TT.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: WT,
        shift: Ik,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: TT => pT(TT, !BT(TT)),
        shift: TT => Ck(TT, !BT(TT)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: TT => gT(TT, (kT => Ok(TT, kT, !BT(TT)))),
        shift: TT => fk(TT, (kT => Ok(TT, kT, !BT(TT)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: nT,
        shift: Ak,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: TT => pT(TT, BT(TT)),
        shift: TT => Ck(TT, BT(TT)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: TT => gT(TT, (kT => Ok(TT, kT, BT(TT)))),
        shift: TT => fk(TT, (kT => Ok(TT, kT, BT(TT)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: Tk,
        shift: vk,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: Sk,
        shift: ak
      }, {
        mac: "Ctrl-ArrowUp",
        run: Mk,
        shift: Nk
      }, {
        key: "ArrowDown",
        run: kk,
        shift: tk,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: Dk,
        shift: Fk
      }, {
        mac: "Ctrl-ArrowDown",
        run: Kk,
        shift: Qk
      }, {
        key: "PageUp",
        run: Mk,
        shift: Nk
      }, {
        key: "PageDown",
        run: Kk,
        shift: Qk
      }, {
        key: "Home",
        run: TT => gT(TT, (kT => Ok(TT, kT, !1))),
        shift: TT => fk(TT, (kT => Ok(TT, kT, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: Sk,
        shift: ak
      }, {
        key: "End",
        run: TT => gT(TT, (kT => Ok(TT, kT, !0))),
        shift: TT => fk(TT, (kT => Ok(TT, kT, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: Dk,
        shift: Fk
      }, {
        key: "Enter",
        run: Ek,
        shift: Ek
      }, {
        key: "Mod-a",
        run: TT => {
          let {
            state: kT,
            dispatch: cT
          } = TT;
          return cT(kT.update({
            selection: {
              anchor: 0,
              head: kT.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: bk,
        shift: bk,
        preventDefault: !0
      }, {
        key: "Delete",
        run: zk,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: Hk,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: TT => Jk(TT, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: TT => Pk(TT, (kT => {
          let cT = TT.moveToLineBoundary(kT, !1).head;
          return kT.head > cT ? cT : Math.max(0, kT.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: TT => Pk(TT, (kT => {
          let cT = TT.moveToLineBoundary(kT, !0).head;
          return kT.head < cT ? cT : Math.min(TT.state.doc.length, kT.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: WT,
        shift: Ik,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: nT,
        shift: Ak
      }, {
        key: "Ctrl-p",
        run: Tk,
        shift: vk
      }, {
        key: "Ctrl-n",
        run: kk,
        shift: tk
      }, {
        key: "Ctrl-a",
        run: TT => gT(TT, (kT => OT.j.cursor(TT.lineBlockAt(kT.head).from, 1))),
        shift: TT => fk(TT, (kT => OT.j.cursor(TT.lineBlockAt(kT.head).from)))
      }, {
        key: "Ctrl-e",
        run: TT => gT(TT, (kT => OT.j.cursor(TT.lineBlockAt(kT.head).to, -1))),
        shift: TT => fk(TT, (kT => OT.j.cursor(TT.lineBlockAt(kT.head).to)))
      }, {
        key: "Ctrl-d",
        run: zk
      }, {
        key: "Ctrl-h",
        run: bk
      }, {
        key: "Ctrl-k",
        run: TT => Pk(TT, (kT => {
          let cT = TT.lineBlockAt(kT.head).to;
          return kT.head < cT ? cT : Math.min(TT.state.doc.length, kT.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: Hk
      }, {
        key: "Ctrl-o",
        run: TT => {
          let {
            state: kT,
            dispatch: cT
          } = TT;
          if (kT.readOnly) return !1;
          let lT = kT.changeByRange((TT => ({
            changes: {
              from: TT.from,
              to: TT.to,
              insert: OT.I.of(["", ""])
            },
            range: OT.j.cursor(TT.from)
          })));
          return cT(kT.update(lT, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: TT => {
          let {
            state: kT,
            dispatch: cT
          } = TT;
          if (kT.readOnly) return !1;
          let lT = kT.changeByRange((TT => {
            if (!TT.empty || 0 == TT.from || TT.from == kT.doc.length) return {
              range: TT
            };
            let cT = TT.from,
              lT = kT.doc.lineAt(cT),
              MT = cT == lT.from ? cT - 1 : (0, OT.W)(lT.text, cT - lT.from, !1) + lT.from,
              KT = cT == lT.to ? cT + 1 : (0, OT.W)(lT.text, cT - lT.from, !0) + lT.from;
            return {
              changes: {
                from: MT,
                to: KT,
                insert: kT.doc.slice(cT, KT).append(kT.doc.slice(MT, cT))
              },
              range: OT.j.cursor(KT)
            }
          }));
          return !lT.changes.empty && (cT(kT.update(lT, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: Kk
      }].map((TT => ({
        mac: TT.key,
        run: TT.run,
        shift: TT.shift
      }))))),
      Rk = {
        key: "Tab",
        run: Xk,
        shift: dk
      };
    var gk = cT(40976),
      Uk = cT(40938),
      Yk = cT(40981),
      Bk = function(TT) {
        void 0 === TT && (TT = {});
        var {
          crosshairCursor: kT = !1
        } = TT, cT = [];
        !1 !== TT.closeBracketsKeymap && (cT = cT.concat(Uk.h)), !1 !== TT.defaultKeymap && (cT = cT.concat(Lk)), !1 !== TT.searchKeymap && (cT = cT.concat(gk.f)), !1 !== TT.historyKeymap && (cT = cT.concat(dT)), !1 !== TT.foldKeymap && (cT = cT.concat(fT.F)), !1 !== TT.completionKeymap && (cT = cT.concat(Uk.q)), !1 !== TT.lintKeymap && (cT = cT.concat(Yk.c));
        var lT = [];
        return !1 !== TT.lineNumbers && lT.push((0, yT.P)()), !1 !== TT.highlightActiveLineGutter && lT.push((0, yT.B)()), !1 !== TT.highlightSpecialChars && lT.push((0, yT.H)()), !1 !== TT.history && lT.push(function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [FT, aT.of(TT), yT.h.domEventHandlers({
            beforeinput(TT, kT) {
              let cT = "historyUndo" == TT.inputType ? PT : "historyRedo" == TT.inputType ? wT : null;
              return !!cT && (TT.preventDefault(), cT(kT))
            }
          })]
        }()), !1 !== TT.foldGutter && lT.push((0, fT.x)()), !1 !== TT.drawSelection && lT.push((0, yT.r)()), !1 !== TT.dropCursor && lT.push((0, yT.t)()), !1 !== TT.allowMultipleSelections && lT.push(OT.l.allowMultipleSelections.of(!0)), !1 !== TT.indentOnInput && lT.push((0, fT.X)()), !1 !== TT.syntaxHighlighting && lT.push((0, fT.fb)(fT.p, {
          fallback: !0
        })), !1 !== TT.bracketMatching && lT.push((0, fT.l)()), !1 !== TT.closeBrackets && lT.push((0, Uk.l)()), !1 !== TT.autocompletion && lT.push((0, Uk.e)()), !1 !== TT.rectangularSelection && lT.push((0, yT.X)()), !1 !== kT && lT.push((0, yT.p)()), !1 !== TT.highlightActiveLine && lT.push((0, yT.E)()), !1 !== TT.highlightSelectionMatches && lT.push((0, gk.e)()), TT.tabSize && "number" === typeof TT.tabSize && lT.push(fT.$.of(" ".repeat(TT.tabSize))), lT.concat([yT.L.of(cT.flat())]).filter(Boolean)
      },
      Wk = cT(40961);
    const nk = "#e5c07b",
      pk = "#e06c75",
      ik = "#56b6c2",
      qk = "#ffffff",
      sk = "#abb2bf",
      Tc = "#7d8799",
      kc = "#61afef",
      cc = "#98c379",
      lc = "#d19a66",
      Mc = "#c678dd",
      Kc = "#21252b",
      Oc = "#2c313a",
      yc = "#282c34",
      fc = "#353a42",
      xc = "#3E4451",
      Ic = "#528bff",
      Ac = yT.h.theme({
        "&": {
          color: sk,
          backgroundColor: yc
        },
        ".cm-content": {
          caretColor: Ic
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: Ic
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: xc
        },
        ".cm-panels": {
          backgroundColor: Kc,
          color: sk
        },
        ".cm-panels.cm-panels-top": {
          borderBottom: "2px solid black"
        },
        ".cm-panels.cm-panels-bottom": {
          borderTop: "2px solid black"
        },
        ".cm-searchMatch": {
          backgroundColor: "#72a1ff59",
          outline: "1px solid #457dff"
        },
        ".cm-searchMatch.cm-searchMatch-selected": {
          backgroundColor: "#6199ff2f"
        },
        ".cm-activeLine": {
          backgroundColor: "#6699ff0b"
        },
        ".cm-selectionMatch": {
          backgroundColor: "#aafe661a"
        },
        "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bad0f847"
        },
        ".cm-gutters": {
          backgroundColor: yc,
          color: Tc,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Oc
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: fc
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: fc,
          borderBottomColor: fc
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Oc,
            color: sk
          }
        }
      }, {
        dark: !0
      }),
      Cc = fT.b.define([{
        tag: Wk.i.keyword,
        color: Mc
      }, {
        tag: [Wk.i.name, Wk.i.deleted, Wk.i.character, Wk.i.propertyName, Wk.i.macroName],
        color: pk
      }, {
        tag: [Wk.i.function(Wk.i.variableName), Wk.i.labelName],
        color: kc
      }, {
        tag: [Wk.i.color, Wk.i.constant(Wk.i.name), Wk.i.standard(Wk.i.name)],
        color: lc
      }, {
        tag: [Wk.i.definition(Wk.i.name), Wk.i.separator],
        color: sk
      }, {
        tag: [Wk.i.typeName, Wk.i.className, Wk.i.number, Wk.i.changed, Wk.i.annotation, Wk.i.modifier, Wk.i.self, Wk.i.namespace],
        color: nk
      }, {
        tag: [Wk.i.operator, Wk.i.operatorKeyword, Wk.i.url, Wk.i.escape, Wk.i.regexp, Wk.i.link, Wk.i.special(Wk.i.string)],
        color: ik
      }, {
        tag: [Wk.i.meta, Wk.i.comment],
        color: Tc
      }, {
        tag: Wk.i.strong,
        fontWeight: "bold"
      }, {
        tag: Wk.i.emphasis,
        fontStyle: "italic"
      }, {
        tag: Wk.i.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Wk.i.link,
        color: Tc,
        textDecoration: "underline"
      }, {
        tag: Wk.i.heading,
        fontWeight: "bold",
        color: pk
      }, {
        tag: [Wk.i.atom, Wk.i.bool, Wk.i.special(Wk.i.variableName)],
        color: lc
      }, {
        tag: [Wk.i.processingInstruction, Wk.i.string, Wk.i.inserted],
        color: cc
      }, {
        tag: Wk.i.invalid,
        color: qk
      }]),
      jc = [Ac, (0, fT.fb)(Cc)];
    var vc = yT.h.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class tc {
      constructor(TT, kT) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = kT, this.timeoutMS = kT, this.callbacks.push(TT)
      }
      UA() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var TT = this.callbacks.slice();
          this.callbacks.length = 0, TT.forEach((TT => {
            try {
              TT()
            } catch (kT) {
              console.error("TimeoutLatch callback error:", kT)
            }
          }))
        }
      }
      cancel() {
        this.isCancelled = !0, this.callbacks.length = 0
      }
      reset() {
        this.timeLeftMS = this.timeoutMS, this.isCancelled = !1, this.isTimeExhausted = !1
      }
      get isDone() {
        return this.isCancelled || this.isTimeExhausted
      }
    }
    class hc {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(TT) {
        this.latches.add(TT), this.start()
      }
      remove(TT) {
        this.latches.delete(TT), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((TT => {
            TT.UA(), TT.isDone && this.remove(TT)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var Nc = null,
      Qc = OT.d.define(),
      Sc = [];

    function Dc(TT) {
      var {
        value: kT,
        selection: cT,
        onChange: lT,
        onStatistics: MT,
        onCreateEditor: fT,
        onUpdate: xT,
        extensions: IT = Sc,
        autoFocus: AT,
        theme: CT = "light",
        height: jT = null,
        minHeight: vT = null,
        maxHeight: tT = null,
        width: hT = null,
        minWidth: NT = null,
        maxWidth: QT = null,
        placeholder: ST = "",
        editable: DT = !0,
        readOnly: aT = !1,
        indentWithTab: FT = !0,
        basicSetup: rT = !0,
        root: PT,
        initialState: wT
      } = TT, [mT, bT] = (0, KT.useState)(), [zT, JT] = (0, KT.useState)(), [oT, HT] = (0, KT.useState)(), eT = (0, KT.useState)((() => ({
        current: null
      })))[0], GT = (0, KT.useState)((() => ({
        current: null
      })))[0], VT = yT.h.theme({
        "&": {
          height: jT,
          minHeight: vT,
          maxHeight: tT,
          width: hT,
          minWidth: NT,
          maxWidth: QT
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), ET = yT.h.updateListener.of((TT => {
        if (TT.docChanged && "function" === typeof lT && !TT.transactions.some((TT => TT.annotation(Qc)))) {
          eT.current ? eT.current.reset() : (eT.current = new tc((() => {
            if (GT.current) {
              var TT = GT.current;
              GT.current = null, TT()
            }
            eT.current = null
          }), 200), ("undefined" === typeof window ? new hc : (Nc || (Nc = new hc), Nc)).add(eT.current));
          var kT = TT.state.doc.toString();
          lT(kT, TT)
        }
        MT && MT((TT => ({
          line: TT.state.doc.lineAt(TT.state.selection.main.from),
          lineCount: TT.state.doc.lines,
          lineBreak: TT.state.lineBreak,
          length: TT.state.doc.length,
          readOnly: TT.state.readOnly,
          tabSize: TT.state.tabSize,
          selection: TT.state.selection,
          selectionAsSingle: TT.state.selection.asSingle().main,
          qt: TT.state.selection.qt,
          selectionCode: TT.state.sliceDoc(TT.state.selection.main.from, TT.state.selection.main.to),
          selections: TT.state.selection.qt.map((kT => TT.state.sliceDoc(kT.from, kT.to))),
          selectedText: TT.state.selection.qt.some((TT => !TT.empty))
        }))(TT))
      })), ZT = function(TT) {
        void 0 === TT && (TT = {});
        var {
          indentWithTab: kT = !0,
          editable: cT = !0,
          readOnly: lT = !1,
          theme: MT = "light",
          placeholder: KT = "",
          basicSetup: fT = !0
        } = TT, xT = [];
        switch (kT && xT.unshift(yT.L.of([Rk])), fT && ("boolean" === typeof fT ? xT.unshift(Bk()) : xT.unshift(Bk(fT))), KT && xT.unshift((0, yT.U)(KT)), MT) {
          case "light":
            xT.push(vc);
            break;
          case "dark":
            xT.push(jc);
            break;
          case "none":
            break;
          default:
            xT.push(MT)
        }
        return !1 === cT && xT.push(yT.h.editable.of(!1)), lT && xT.push(OT.l.readOnly.of(!0)), [...xT]
      }({
        theme: CT,
        editable: DT,
        readOnly: aT,
        placeholder: ST,
        indentWithTab: FT,
        basicSetup: rT
      }), uT = [ET, VT, ...ZT];
      return xT && "function" === typeof xT && uT.push(yT.h.updateListener.of(xT)), uT = uT.concat(IT), (0, KT.useLayoutEffect)((() => {
        if (mT && !oT) {
          var TT = {
              doc: kT,
              selection: cT,
              extensions: uT
            },
            lT = wT ? OT.l.fromJSON(wT.json, TT, wT.fields) : OT.l.create(TT);
          if (HT(lT), !zT) {
            var MT = new yT.h({
              state: lT,
              parent: mT,
              root: PT
            });
            JT(MT), fT && fT(MT, lT)
          }
        }
        return () => {
          zT && (HT(void 0), JT(void 0))
        }
      }), [mT, oT]), (0, KT.useEffect)((() => {
        TT.container && bT(TT.container)
      }), [TT.container]), (0, KT.useEffect)((() => () => {
        zT && (zT.destroy(), JT(void 0)), eT.current && (eT.current.cancel(), eT.current = null)
      }), [zT]), (0, KT.useEffect)((() => {
        AT && zT && zT.focus()
      }), [AT, zT]), (0, KT.useEffect)((() => {
        zT && zT.dispatch({
          effects: OT.F.reconfigure.of(uT)
        })
      }), [CT, IT, jT, vT, tT, hT, NT, QT, ST, DT, aT, FT, rT, lT, xT]), (0, KT.useEffect)((() => {
        if (void 0 !== kT) {
          var TT = zT ? zT.state.doc.toString() : "";
          if (zT && kT !== TT) {
            var cT = () => {
              zT && kT !== zT.state.doc.toString() && zT.dispatch({
                changes: {
                  from: 0,
                  to: zT.state.doc.toString().length,
                  insert: kT || ""
                },
                annotations: [Qc.of(!0)]
              })
            };
            eT.current && !eT.current.isDone ? GT.current = cT : cT()
          }
        }
      }), [kT, zT]), {
        state: oT,
        setState: HT,
        view: zT,
        setView: JT,
        container: mT,
        setContainer: bT
      }
    }
    var ac = cT(1099),
      Fc = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      rc = (0, KT.forwardRef)(((TT, kT) => {
        var {
          className: cT,
          value: OT = "",
          selection: yT,
          extensions: fT = [],
          onChange: xT,
          onStatistics: IT,
          onCreateEditor: AT,
          onUpdate: CT,
          autoFocus: jT,
          theme: vT = "light",
          height: tT,
          minHeight: hT,
          maxHeight: NT,
          width: QT,
          minWidth: ST,
          maxWidth: DT,
          basicSetup: aT,
          placeholder: FT,
          indentWithTab: rT,
          editable: PT,
          readOnly: wT,
          root: mT,
          initialState: bT
        } = TT, zT = (0, MT.c)(TT, Fc), JT = (0, KT.useRef)(null), {
          state: oT,
          view: HT,
          container: eT,
          setContainer: GT
        } = Dc({
          root: mT,
          value: OT,
          autoFocus: jT,
          theme: vT,
          height: tT,
          minHeight: hT,
          maxHeight: NT,
          width: QT,
          minWidth: ST,
          maxWidth: DT,
          basicSetup: aT,
          placeholder: FT,
          indentWithTab: rT,
          editable: PT,
          readOnly: wT,
          selection: yT,
          onChange: xT,
          onStatistics: IT,
          onCreateEditor: AT,
          onUpdate: CT,
          extensions: fT,
          initialState: bT
        });
        (0, KT.useImperativeHandle)(kT, (() => ({
          editor: JT.current,
          state: oT,
          view: HT
        })), [JT, eT, oT, HT]);
        var VT = (0, KT.useCallback)((TT => {
          JT.current = TT, GT(TT)
        }), [GT]);
        if ("string" !== typeof OT) throw new Error("value must be typeof string but got " + typeof OT);
        var ET = "string" === typeof vT ? "cm-theme-" + vT : "cm-theme";
        return (0, ac.jsx)("div", (0, lT.b)({
          ref: VT,
          className: ET + (cT ? " " + cT : "")
        }, zT))
      }));
    rc.displayName = "CodeMirror";
    const Pc = rc
  },
  40950: (TT, kT, cT) => {
    function lT() {
      var TT = arguments[0];
      "string" == typeof TT && (TT = document.createElement(TT));
      var kT = 1,
        cT = arguments[1];
      if (cT && "object" == typeof cT && null == cT.nodeType && !Array.isArray(cT)) {
        for (var lT in cT)
          if (Object.prototype.hasOwnProperty.call(cT, lT)) {
            var KT = cT[lT];
            "string" == typeof KT ? TT.setAttribute(lT, KT) : null != KT && (TT[lT] = KT)
          } kT++
      }
      for (; kT < arguments.length; kT++) MT(TT, arguments[kT]);
      return TT
    }

    function MT(TT, kT) {
      if ("string" == typeof kT) TT.appendChild(document.createTextNode(kT));
      else if (null == kT);
      else if (null != kT.nodeType) TT.appendChild(kT);
      else {
        if (!Array.isArray(kT)) throw new RangeError("Unsupported child node: " + kT);
        for (var cT = 0; cT < kT.length; cT++) MT(TT, kT[cT])
      }
    }
    cT.d(kT, {
      d: () => lT
    })
  },
  40946: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT
    });
    const lT = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      MT = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      KT = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class OT {
      constructor(TT, kT) {
        this.rules = [];
        let {
          finish: cT
        } = kT || {};

        function lT(TT) {
          return /^@/.test(TT) ? [TT] : TT.split(/,\s*/)
        }

        function MT(TT, kT, KT, OT) {
          let yT = [],
            fT = /^@(\w+)\b/.exec(TT[0]),
            xT = fT && "keyframes" == fT[1];
          if (fT && null == kT) return KT.push(TT[0] + ";");
          for (let cT in kT) {
            let OT = kT[cT];
            if (/&/.test(cT)) MT(cT.split(/,\s*/).map((kT => TT.map((TT => kT.replace(/&/, TT))))).reduce(((TT, kT) => TT.concat(kT))), OT, KT);
            else if (OT && "object" == typeof OT) {
              if (!fT) throw new RangeError("The value of a property (" + cT + ") should be a primitive value.");
              MT(lT(cT), OT, yT, xT)
            } else null != OT && yT.push(cT.replace(/_.*/, "").replace(/[A-Z]/g, (TT => "-" + TT.toLowerCase())) + ": " + OT + ";")
          }(yT.length || xT) && KT.push((!cT || fT || OT ? TT : TT.map(cT)).join(", ") + " {" + yT.join(" ") + "}")
        }
        for (let KT in TT) MT(lT(KT), TT[KT], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let TT = KT[lT] || 1;
        return KT[lT] = TT + 1, "\u037c" + TT.toString(36)
      }
      static mount(TT, kT, cT) {
        let lT = TT[MT],
          KT = cT && cT.nonce;
        lT ? KT && lT.setNonce(KT) : lT = new fT(TT, KT), lT.mount(Array.isArray(kT) ? kT : [kT], TT)
      }
    }
    let yT = new Map;
    class fT {
      constructor(TT, kT) {
        let cT = TT.ownerDocument || TT,
          lT = cT.defaultView;
        if (!TT.head && TT.adoptedStyleSheets && lT.CSSStyleSheet) {
          let kT = yT.get(cT);
          if (kT) return TT[MT] = kT;
          this.sheet = new lT.CSSStyleSheet, yT.set(cT, this)
        } else this.styleTag = cT.createElement("style"), kT && this.styleTag.setAttribute("nonce", kT);
        this.modules = [], TT[MT] = this
      }
      mount(TT, kT) {
        let cT = this.sheet,
          lT = 0,
          MT = 0;
        for (let KT = 0; KT < TT.length; KT++) {
          let kT = TT[KT],
            OT = this.modules.indexOf(kT);
          if (OT < MT && OT > -1 && (this.modules.splice(OT, 1), MT--, OT = -1), -1 == OT) {
            if (this.modules.splice(MT++, 0, kT), cT)
              for (let TT = 0; TT < kT.rules.length; TT++) cT.insertRule(kT.rules[TT], lT++)
          } else {
            for (; MT < OT;) lT += this.modules[MT++].rules.length;
            lT += kT.rules.length, MT++
          }
        }
        if (cT) kT.adoptedStyleSheets.indexOf(this.sheet) < 0 && (kT.adoptedStyleSheets = [this.sheet, ...kT.adoptedStyleSheets]);
        else {
          let TT = "";
          for (let kT = 0; kT < this.modules.length; kT++) TT += this.modules[kT].getRules() + "\n";
          this.styleTag.textContent = TT;
          let cT = kT.head || kT;
          this.styleTag.parentNode != cT && cT.insertBefore(this.styleTag, cT.firstChild)
        }
      }
      setNonce(TT) {
        this.styleTag && this.styleTag.getAttribute("nonce") != TT && this.styleTag.setAttribute("nonce", TT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);