export const id = 274;
export const ids = [274];
export const modules = {
  40052: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => gc,
      h: () => Kc,
      l: () => rc,
      p: () => qJ,
      r: () => Hc,
      t: () => jJ,
      w: () => Dc
    });
    var FJ = ZJ(40060),
      UJ = ZJ(40065),
      eJ = ZJ(40078);
    class XJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.state = JJ, this.pos = cJ, this.explicit = ZJ, this.view = FJ, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(JJ) {
        let cJ = (0, eJ.ub)(this.state).resolveInner(this.pos, -1);
        for (; cJ && JJ.indexOf(cJ.name) < 0;) cJ = cJ.parent;
        return cJ ? {
          from: cJ.from,
          to: this.pos,
          text: this.state.sliceDoc(cJ.from, this.pos),
          type: cJ.type
        } : null
      }
      matchBefore(JJ) {
        let cJ = this.state.doc.lineAt(this.pos),
          ZJ = Math.max(cJ.from, this.pos - 250),
          FJ = cJ.text.slice(ZJ - cJ.from, this.pos - cJ.from),
          UJ = FJ.search(DJ(JJ, !1));
        return UJ < 0 ? null : {
          from: ZJ + UJ,
          to: this.pos,
          text: FJ.slice(UJ)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(JJ, cJ, ZJ) {
        "abort" == JJ && this.abortListeners && (this.abortListeners.push(cJ), ZJ && ZJ.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function AJ(JJ) {
      let cJ = Object.keys(JJ).join(""),
        ZJ = /\w/.test(cJ);
      return ZJ && (cJ = cJ.replace(/\w/g, "")), `[${ZJ?"\\w":""}${cJ.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function qJ(JJ) {
      let cJ = JJ.map((JJ => "string" == typeof JJ ? {
          label: JJ
        } : JJ)),
        [ZJ, FJ] = cJ.every((JJ => /^\w+$/.test(JJ.label))) ? [/\w*$/, /\w+$/] : function(JJ) {
          let cJ = Object.create(null),
            ZJ = Object.create(null);
          for (let {
              label: UJ
            }
            of JJ) {
            cJ[UJ[0]] = !0;
            for (let JJ = 1; JJ < UJ.length; JJ++) ZJ[UJ[JJ]] = !0
          }
          let FJ = AJ(cJ) + AJ(ZJ) + "*$";
          return [new RegExp("^" + FJ), new RegExp(FJ)]
        }(cJ);
      return JJ => {
        let UJ = JJ.matchBefore(FJ);
        return UJ || JJ.explicit ? {
          from: UJ ? UJ.from : JJ.pos,
          options: cJ,
          validFor: ZJ
        } : null
      }
    }

    function jJ(JJ, cJ) {
      return ZJ => {
        for (let cJ = (0, eJ.ub)(ZJ.state).resolveInner(ZJ.pos, -1); cJ; cJ = cJ.parent) {
          if (JJ.indexOf(cJ.name) > -1) return null;
          if (cJ.type.isTop) break
        }
        return cJ(ZJ)
      }
    }
    class YJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.completion = JJ, this.source = cJ, this.match = ZJ, this.score = FJ
      }
    }

    function hJ(JJ) {
      return JJ.selection.main.from
    }

    function DJ(JJ, cJ) {
      var ZJ;
      let {
        source: FJ
      } = JJ, UJ = cJ && "^" != FJ[0], eJ = "$" != FJ[FJ.length - 1];
      return UJ || eJ ? new RegExp(`${UJ?"^":""}(?:${FJ})${eJ?"$":""}`, null !== (ZJ = JJ.flags) && void 0 !== ZJ ? ZJ : JJ.ignoreCase ? "i" : "") : JJ
    }
    const sJ = FJ.d.define();

    function nJ(JJ, cJ, ZJ, UJ) {
      let {
        main: eJ
      } = JJ.selection, XJ = ZJ - eJ.from, AJ = UJ - eJ.from;
      return {
        ...JJ.changeByRange((qJ => {
          if (qJ != eJ && ZJ != UJ && JJ.sliceDoc(qJ.from + XJ, qJ.from + AJ) != JJ.sliceDoc(ZJ, UJ)) return {
            range: qJ
          };
          let jJ = JJ.toText(cJ);
          return {
            changes: {
              from: qJ.from + XJ,
              to: UJ == eJ.from ? qJ.to : qJ.from + AJ,
              insert: jJ
            },
            range: FJ.m.cursor(qJ.from + XJ + jJ.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const GJ = new WeakMap;

    function fJ(JJ) {
      if (!Array.isArray(JJ)) return JJ;
      let cJ = GJ.get(JJ);
      return cJ || GJ.set(JJ, cJ = qJ(JJ)), cJ
    }
    const xJ = FJ.A.define(),
      rJ = FJ.A.define();
    class vJ {
      constructor(JJ) {
        this.pattern = JJ, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let cJ = 0; cJ < JJ.length;) {
          let ZJ = (0, FJ.L)(JJ, cJ),
            UJ = (0, FJ.P)(ZJ);
          this.chars.push(ZJ);
          let eJ = JJ.slice(cJ, cJ + UJ),
            XJ = eJ.toUpperCase();
          this.folded.push((0, FJ.L)(XJ == eJ ? eJ.toLowerCase() : XJ, 0)), cJ += UJ
        }
        this.astral = JJ.length != this.chars.length
      }
      ret(JJ, cJ) {
        return this.score = JJ, this.matched = cJ, this
      }
      match(JJ) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (JJ.length < this.pattern.length) return null;
        let {
          chars: cJ,
          folded: ZJ,
          any: UJ,
          precise: eJ,
          byWord: XJ
        } = this;
        if (1 == cJ.length) {
          let UJ = (0, FJ.L)(JJ, 0),
            eJ = (0, FJ.P)(UJ),
            XJ = eJ == JJ.length ? 0 : -100;
          if (UJ == cJ[0]);
          else {
            if (UJ != ZJ[0]) return null;
            XJ += -200
          }
          return this.ret(XJ, [0, eJ])
        }
        let AJ = JJ.indexOf(this.pattern);
        if (0 == AJ) return this.ret(JJ.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let qJ = cJ.length,
          jJ = 0;
        if (AJ < 0) {
          for (let eJ = 0, XJ = Math.min(JJ.length, 200); eJ < XJ && jJ < qJ;) {
            let XJ = (0, FJ.L)(JJ, eJ);
            XJ != cJ[jJ] && XJ != ZJ[jJ] || (UJ[jJ++] = eJ), eJ += (0, FJ.P)(XJ)
          }
          if (jJ < qJ) return null
        }
        let YJ = 0,
          hJ = 0,
          DJ = !1,
          sJ = 0,
          nJ = -1,
          GJ = -1,
          fJ = /[a-z]/.test(JJ),
          xJ = !0;
        for (let rJ = 0, vJ = Math.min(JJ.length, 200), mJ = 0; rJ < vJ && hJ < qJ;) {
          let UJ = (0, FJ.L)(JJ, rJ);
          AJ < 0 && (YJ < qJ && UJ == cJ[YJ] && (eJ[YJ++] = rJ), sJ < qJ && (UJ == cJ[sJ] || UJ == ZJ[sJ] ? (0 == sJ && (nJ = rJ), GJ = rJ + 1, sJ++) : sJ = 0));
          let jJ, vJ = UJ < 255 ? UJ >= 48 && UJ <= 57 || UJ >= 97 && UJ <= 122 ? 2 : UJ >= 65 && UJ <= 90 ? 1 : 0 : (jJ = (0, FJ.bb)(UJ)) != jJ.toLowerCase() ? 1 : jJ != jJ.toUpperCase() ? 2 : 0;
          (!rJ || 1 == vJ && fJ || 0 == mJ && 0 != vJ) && (cJ[hJ] == UJ || ZJ[hJ] == UJ && (DJ = !0) ? XJ[hJ++] = rJ : XJ.length && (xJ = !1)), mJ = vJ, rJ += (0, FJ.P)(UJ)
        }
        return hJ == qJ && 0 == XJ[0] && xJ ? this.result((DJ ? -200 : 0) - 100, XJ, JJ) : sJ == qJ && 0 == nJ ? this.ret(-200 - JJ.length + (GJ == JJ.length ? 0 : -100), [0, GJ]) : AJ > -1 ? this.ret(-700 - JJ.length, [AJ, AJ + this.pattern.length]) : sJ == qJ ? this.ret(-900 - JJ.length, [nJ, GJ]) : hJ == qJ ? this.result((DJ ? -200 : 0) - 100 - 700 + (xJ ? 0 : -1100), XJ, JJ) : 2 == cJ.length ? null : this.result((UJ[0] ? -700 : 0) - 200 - 1100, UJ, JJ)
      }
      result(JJ, cJ, ZJ) {
        let UJ = [],
          eJ = 0;
        for (let XJ of cJ) {
          let JJ = XJ + (this.astral ? (0, FJ.P)((0, FJ.L)(ZJ, XJ)) : 1);
          eJ && UJ[eJ - 1] == XJ ? UJ[eJ - 1] = JJ : (UJ[eJ++] = XJ, UJ[eJ++] = JJ)
        }
        return this.ret(JJ - ZJ.length, UJ)
      }
    }
    class mJ {
      constructor(JJ) {
        this.pattern = JJ, this.matched = [], this.score = 0, this.folded = JJ.toLowerCase()
      }
      match(JJ) {
        if (JJ.length < this.pattern.length) return null;
        let cJ = JJ.slice(0, this.pattern.length),
          ZJ = cJ == this.pattern ? 0 : cJ.toLowerCase() == this.folded ? -200 : null;
        return null == ZJ ? null : (this.matched = [0, cJ.length], this.score = ZJ + (JJ.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const QJ = FJ.p.define({
      combine: JJ => (0, FJ.S)(JJ, {
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
        positionInfo: VJ,
        filterStrict: !1,
        compareCompletions: (JJ, cJ) => (JJ.sortText || JJ.label).localeCompare(cJ.sortText || cJ.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (JJ, cJ) => JJ && cJ,
        closeOnBlur: (JJ, cJ) => JJ && cJ,
        icons: (JJ, cJ) => JJ && cJ,
        tooltipClass: (JJ, cJ) => ZJ => EJ(JJ(ZJ), cJ(ZJ)),
        optionClass: (JJ, cJ) => ZJ => EJ(JJ(ZJ), cJ(ZJ)),
        addToOptions: (JJ, cJ) => JJ.concat(cJ),
        filterStrict: (JJ, cJ) => JJ || cJ
      })
    });

    function EJ(JJ, cJ) {
      return JJ ? cJ ? JJ + " " + cJ : JJ : cJ
    }

    function VJ(JJ, cJ, ZJ, FJ, eJ, XJ) {
      let AJ, qJ, jJ = JJ.textDirection == UJ.e.RTL,
        YJ = jJ,
        hJ = !1,
        DJ = "top",
        sJ = cJ.left - eJ.left,
        nJ = eJ.right - cJ.right,
        GJ = FJ.right - FJ.left,
        fJ = FJ.bottom - FJ.top;
      if (YJ && sJ < Math.min(GJ, nJ) ? YJ = !1 : !YJ && nJ < Math.min(GJ, sJ) && (YJ = !0), GJ <= (YJ ? sJ : nJ)) AJ = Math.max(eJ.top, Math.min(ZJ.top, eJ.bottom - fJ)) - cJ.top, qJ = Math.min(400, YJ ? sJ : nJ);
      else {
        hJ = !0, qJ = Math.min(400, (jJ ? cJ.right : eJ.right - cJ.left) - 30);
        let JJ = eJ.bottom - cJ.bottom;
        JJ >= fJ || JJ > cJ.top ? AJ = ZJ.bottom - cJ.top : (DJ = "bottom", AJ = cJ.bottom - ZJ.top)
      }
      return {
        style: `${DJ}: ${AJ/((cJ.bottom-cJ.top)/XJ.offsetHeight)}px; max-width: ${qJ/((cJ.right-cJ.left)/XJ.offsetWidth)}px`,
        class: "cm-completionInfo-" + (hJ ? jJ ? "left-narrow" : "right-narrow" : YJ ? "left" : "right")
      }
    }
    const KJ = FJ.A.define();

    function yJ(JJ, cJ, ZJ) {
      if (JJ <= ZJ) return {
        from: 0,
        to: JJ
      };
      if (cJ < 0 && (cJ = 0), cJ <= JJ >> 1) {
        let JJ = Math.floor(cJ / ZJ);
        return {
          from: JJ * ZJ,
          to: (JJ + 1) * ZJ
        }
      }
      let FJ = Math.floor((JJ - cJ) / ZJ);
      return {
        from: JJ - (FJ + 1) * ZJ,
        to: JJ - FJ * ZJ
      }
    }
    class SJ {
      constructor(JJ, cJ, ZJ) {
        this.view = JJ, this.stateField = cJ, this.applyCompletion = ZJ, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: JJ => this.placeInfo(JJ),
          key: this
        }, this.space = null, this.currentClass = "";
        let FJ = JJ.state.field(cJ),
          {
            options: UJ,
            selected: eJ
          } = FJ.open,
          XJ = JJ.state.facet(QJ);
        this.optionContent = function(JJ) {
          let cJ = JJ.addToOptions.slice();
          return JJ.icons && cJ.push({
            render(JJ) {
              let cJ = document.createElement("div");
              return cJ.classList.add("cm-completionIcon"), JJ.type && cJ.classList.add(...JJ.type.split(/\s+/g).map((JJ => "cm-completionIcon-" + JJ))), cJ.setAttribute("aria-hidden", "true"), cJ
            },
            position: 20
          }), cJ.push({
            render(JJ, cJ, ZJ, FJ) {
              let UJ = document.createElement("span");
              UJ.className = "cm-completionLabel";
              let eJ = JJ.displayLabel || JJ.label,
                XJ = 0;
              for (let AJ = 0; AJ < FJ.length;) {
                let JJ = FJ[AJ++],
                  cJ = FJ[AJ++];
                JJ > XJ && UJ.appendChild(document.createTextNode(eJ.slice(XJ, JJ)));
                let ZJ = UJ.appendChild(document.createElement("span"));
                ZJ.appendChild(document.createTextNode(eJ.slice(JJ, cJ))), ZJ.className = "cm-completionMatchedText", XJ = cJ
              }
              return XJ < eJ.length && UJ.appendChild(document.createTextNode(eJ.slice(XJ))), UJ
            },
            position: 50
          }, {
            render(JJ) {
              if (!JJ.detail) return null;
              let cJ = document.createElement("span");
              return cJ.className = "cm-completionDetail", cJ.textContent = JJ.detail, cJ
            },
            position: 80
          }), cJ.sort(((JJ, cJ) => JJ.position - cJ.position)).map((JJ => JJ.render))
        }(XJ), this.optionClass = XJ.optionClass, this.tooltipClass = XJ.tooltipClass, this.range = yJ(UJ.length, eJ, XJ.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(JJ.state), this.dom.addEventListener("mousedown", (ZJ => {
          let {
            options: FJ
          } = JJ.state.field(cJ).open;
          for (let cJ, UJ = ZJ.target; UJ && UJ != this.dom; UJ = UJ.parentNode)
            if ("LI" == UJ.nodeName && (cJ = /-(\d+)$/.exec(UJ.id)) && +cJ[1] < FJ.length) return this.applyCompletion(JJ, FJ[+cJ[1]]), void ZJ.preventDefault();
          if (ZJ.target == this.list) {
            let cJ = this.list.classList.contains("cm-completionListIncompleteTop") && ZJ.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && ZJ.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != cJ && (JJ.dispatch({
              effects: KJ.of(cJ)
            }), ZJ.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (cJ => {
          let ZJ = JJ.state.field(this.stateField, !1);
          ZJ && ZJ.tooltip && JJ.state.facet(QJ).closeOnBlur && cJ.relatedTarget != JJ.contentDOM && JJ.dispatch({
            effects: rJ.of(null)
          })
        })), this.showOptions(UJ, FJ.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(JJ, cJ) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(JJ, cJ, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(JJ) {
        var cJ;
        let ZJ = JJ.state.field(this.stateField),
          FJ = JJ.startState.field(this.stateField);
        if (this.updateTooltipClass(JJ.state), ZJ != FJ) {
          let {
            options: UJ,
            selected: eJ,
            disabled: XJ
          } = ZJ.open;
          FJ.open && FJ.open.options == UJ || (this.range = yJ(UJ.length, eJ, JJ.state.facet(QJ).maxRenderedOptions), this.showOptions(UJ, ZJ.id)), this.updateSel(), XJ != (null === (cJ = FJ.open) || void 0 === cJ ? void 0 : cJ.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!XJ)
        }
      }
      updateTooltipClass(JJ) {
        let cJ = this.tooltipClass(JJ);
        if (cJ != this.currentClass) {
          for (let JJ of this.currentClass.split(" ")) JJ && this.dom.classList.remove(JJ);
          for (let JJ of cJ.split(" ")) JJ && this.dom.classList.add(JJ);
          this.currentClass = cJ
        }
      }
      positioned(JJ) {
        this.space = JJ, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let JJ = this.view.state.field(this.stateField),
          cJ = JJ.open;
        (cJ.selected > -1 && cJ.selected < this.range.from || cJ.selected >= this.range.to) && (this.range = yJ(cJ.options.length, cJ.selected, this.view.state.facet(QJ).maxRenderedOptions), this.showOptions(cJ.options, JJ.id));
        let ZJ = this.updateSelectedOption(cJ.selected);
        if (ZJ) {
          this.destroyInfo();
          let {
            completion: FJ
          } = cJ.options[cJ.selected], {
            info: eJ
          } = FJ;
          if (!eJ) return;
          let XJ = "string" === typeof eJ ? document.createTextNode(eJ) : eJ(FJ);
          if (!XJ) return;
          "then" in XJ ? XJ.then((cJ => {
            cJ && this.view.state.field(this.stateField, !1) == JJ && this.addInfoPane(cJ, FJ)
          })).catch((JJ => (0, UJ.Q)(this.view.state, JJ, "completion info"))) : (this.addInfoPane(XJ, FJ), ZJ.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(JJ, cJ) {
        this.destroyInfo();
        let ZJ = this.info = document.createElement("div");
        if (ZJ.className = "cm-tooltip cm-completionInfo", ZJ.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != JJ.nodeType) ZJ.appendChild(JJ), this.infoDestroy = null;
        else {
          let {
            dom: cJ,
            destroy: FJ
          } = JJ;
          ZJ.appendChild(cJ), this.infoDestroy = FJ || null
        }
        this.dom.appendChild(ZJ), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(JJ) {
        let cJ = null;
        for (let ZJ = this.list.firstChild, FJ = this.range.from; ZJ; ZJ = ZJ.nextSibling, FJ++) "LI" == ZJ.nodeName && ZJ.id ? FJ == JJ ? ZJ.hasAttribute("aria-selected") || (ZJ.setAttribute("aria-selected", "true"), cJ = ZJ) : ZJ.hasAttribute("aria-selected") && (ZJ.removeAttribute("aria-selected"), ZJ.removeAttribute("aria-describedby")) : FJ--;
        return cJ && function(JJ, cJ) {
          let ZJ = JJ.getBoundingClientRect(),
            FJ = cJ.getBoundingClientRect(),
            UJ = ZJ.height / JJ.offsetHeight;
          FJ.top < ZJ.top ? JJ.scrollTop -= (ZJ.top - FJ.top) / UJ : FJ.bottom > ZJ.bottom && (JJ.scrollTop += (FJ.bottom - ZJ.bottom) / UJ)
        }(this.list, cJ), cJ
      }
      measureInfo() {
        let JJ = this.dom.querySelector("[aria-selected]");
        if (!JJ || !this.info) return null;
        let cJ = this.dom.getBoundingClientRect(),
          ZJ = this.info.getBoundingClientRect(),
          FJ = JJ.getBoundingClientRect(),
          UJ = this.space;
        if (!UJ) {
          let JJ = this.dom.ownerDocument.documentElement;
          UJ = {
            left: 0,
            top: 0,
            right: JJ.clientWidth,
            bottom: JJ.clientHeight
          }
        }
        return FJ.top > Math.min(UJ.bottom, cJ.bottom) - 10 || FJ.bottom < Math.max(UJ.top, cJ.top) + 10 ? null : this.view.state.facet(QJ).positionInfo(this.view, cJ, FJ, ZJ, UJ, this.dom)
      }
      placeInfo(JJ) {
        this.info && (JJ ? (JJ.style && (this.info.style.cssText = JJ.style), this.info.className = "cm-tooltip cm-completionInfo " + (JJ.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(JJ, cJ, ZJ) {
        const FJ = document.createElement("ul");
        FJ.id = cJ, FJ.setAttribute("role", "listbox"), FJ.setAttribute("aria-expanded", "true"), FJ.setAttribute("aria-label", this.view.state.phrase("Completions")), FJ.addEventListener("mousedown", (JJ => {
          JJ.target == FJ && JJ.preventDefault()
        }));
        let UJ = null;
        for (let eJ = ZJ.from; eJ < ZJ.to; eJ++) {
          let {
            completion: XJ,
            match: AJ
          } = JJ[eJ], {
            section: qJ
          } = XJ;
          if (qJ) {
            let JJ = "string" == typeof qJ ? qJ : qJ.name;
            if (JJ != UJ && (eJ > ZJ.from || 0 == ZJ.from))
              if (UJ = JJ, "string" != typeof qJ && qJ.header) FJ.appendChild(qJ.header(qJ));
              else {
                FJ.appendChild(document.createElement("completion-section")).textContent = JJ
              }
          }
          const jJ = FJ.appendChild(document.createElement("li"));
          jJ.id = cJ + "-" + eJ, jJ.setAttribute("role", "option");
          let YJ = this.optionClass(XJ);
          YJ && (jJ.className = YJ);
          for (let JJ of this.optionContent) {
            let cJ = JJ(XJ, this.view.state, this.view, AJ);
            cJ && jJ.appendChild(cJ)
          }
        }
        return ZJ.from && FJ.classList.add("cm-completionListIncompleteTop"), ZJ.to < JJ.length && FJ.classList.add("cm-completionListIncompleteBottom"), FJ
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function IJ(JJ, cJ) {
      return ZJ => new SJ(ZJ, JJ, cJ)
    }

    function MJ(JJ) {
      return 100 * (JJ.boost || 0) + (JJ.apply ? 10 : 0) + (JJ.info ? 5 : 0) + (JJ.type ? 1 : 0)
    }
    class bJ {
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ) {
        this.options = JJ, this.attrs = cJ, this.tooltip = ZJ, this.timestamp = FJ, this.selected = UJ, this.disabled = eJ
      }
      setSelected(JJ, cJ) {
        return JJ == this.selected || JJ >= this.options.length ? this : new bJ(this.options, HJ(cJ, JJ), this.tooltip, this.timestamp, JJ, this.disabled)
      }
      static build(JJ, cJ, ZJ, FJ, UJ, eJ) {
        if (FJ && !eJ && JJ.some((JJ => JJ.isPending))) return FJ.setDisabled();
        let XJ = function(JJ, cJ) {
          let ZJ = [],
            FJ = null,
            UJ = null,
            eJ = JJ => {
              ZJ.push(JJ);
              let {
                section: cJ
              } = JJ.completion;
              if (cJ) {
                FJ || (FJ = []);
                let JJ = "string" == typeof cJ ? cJ : cJ.name;
                FJ.some((cJ => cJ.name == JJ)) || FJ.push("string" == typeof cJ ? {
                  name: JJ
                } : cJ)
              }
            },
            XJ = cJ.facet(QJ);
          for (let hJ of JJ)
            if (hJ.hasResult()) {
              let JJ = hJ.result.getMatch;
              if (!1 === hJ.result.filter)
                for (let cJ of hJ.result.options) eJ(new YJ(cJ, hJ.source, JJ ? JJ(cJ) : [], 1e9 - ZJ.length));
              else {
                let ZJ, FJ = cJ.sliceDoc(hJ.from, hJ.to),
                  AJ = XJ.filterStrict ? new mJ(FJ) : new vJ(FJ);
                for (let cJ of hJ.result.options)
                  if (ZJ = AJ.match(cJ.label)) {
                    let FJ = cJ.displayLabel ? JJ ? JJ(cJ, ZJ.matched) : [] : ZJ.matched,
                      XJ = ZJ.score + (cJ.boost || 0);
                    if (eJ(new YJ(cJ, hJ.source, FJ, XJ)), "object" == typeof cJ.section && "dynamic" === cJ.section.rank) {
                      let {
                        name: JJ
                      } = cJ.section;
                      UJ || (UJ = Object.create(null)), UJ[JJ] = Math.max(XJ, UJ[JJ] || -1e9)
                    }
                  }
              }
            } if (FJ) {
            let JJ = Object.create(null),
              cJ = 0,
              eJ = (JJ, cJ) => ("dynamic" === JJ.rank && "dynamic" === cJ.rank ? UJ[cJ.name] - UJ[JJ.name] : 0) || ("number" == typeof JJ.rank ? JJ.rank : 1e9) - ("number" == typeof cJ.rank ? cJ.rank : 1e9) || (JJ.name < cJ.name ? -1 : 1);
            for (let ZJ of FJ.sort(eJ)) cJ -= 1e5, JJ[ZJ.name] = cJ;
            for (let FJ of ZJ) {
              let {
                section: cJ
              } = FJ.completion;
              cJ && (FJ.score += JJ["string" == typeof cJ ? cJ : cJ.name])
            }
          }
          let AJ = [],
            qJ = null,
            jJ = XJ.compareCompletions;
          for (let YJ of ZJ.sort(((JJ, cJ) => cJ.score - JJ.score || jJ(JJ.completion, cJ.completion)))) {
            let JJ = YJ.completion;
            !qJ || qJ.label != JJ.label || qJ.detail != JJ.detail || null != qJ.type && null != JJ.type && qJ.type != JJ.type || qJ.apply != JJ.apply || qJ.boost != JJ.boost ? AJ.push(YJ) : MJ(YJ.completion) > MJ(qJ) && (AJ[AJ.length - 1] = YJ), qJ = YJ.completion
          }
          return AJ
        }(JJ, cJ);
        if (!XJ.length) return FJ && JJ.some((JJ => JJ.isPending)) ? FJ.setDisabled() : null;
        let AJ = cJ.facet(QJ).selectOnOpen ? 0 : -1;
        if (FJ && FJ.selected != AJ && -1 != FJ.selected) {
          let JJ = FJ.options[FJ.selected].completion;
          for (let cJ = 0; cJ < XJ.length; cJ++)
            if (XJ[cJ].completion == JJ) {
              AJ = cJ;
              break
            }
        }
        return new bJ(XJ, HJ(ZJ, AJ), {
          pos: JJ.reduce(((JJ, cJ) => cJ.hasResult() ? Math.min(JJ, cJ.from) : JJ), 1e8),
          create: TJ,
          above: UJ.aboveCursor
        }, FJ ? FJ.timestamp : Date.now(), AJ, !1)
      }
      map(JJ) {
        return new bJ(this.options, this.attrs, {
          ...this.tooltip,
          pos: JJ.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new bJ(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class wJ {
      constructor(JJ, cJ, ZJ) {
        this.active = JJ, this.id = cJ, this.open = ZJ
      }
      static start() {
        return new wJ(PJ, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(JJ) {
        let {
          state: cJ
        } = JJ, ZJ = cJ.facet(QJ), FJ = (ZJ.override || cJ.languageDataAt("autocomplete", hJ(cJ)).map(fJ)).map((cJ => (this.active.find((JJ => JJ.source == cJ)) || new pJ(cJ, this.active.some((JJ => 0 != JJ.state)) ? 1 : 0)).update(JJ, ZJ)));
        FJ.length == this.active.length && FJ.every(((JJ, cJ) => JJ == this.active[cJ])) && (FJ = this.active);
        let UJ = this.open,
          eJ = JJ.effects.some((JJ => JJ.is(zJ)));
        UJ && JJ.docChanged && (UJ = UJ.map(JJ.changes)), JJ.selection || FJ.some((cJ => cJ.hasResult() && JJ.changes.touchesRange(cJ.from, cJ.to))) || ! function(JJ, cJ) {
          if (JJ == cJ) return !0;
          for (let ZJ = 0, FJ = 0;;) {
            for (; ZJ < JJ.length && !JJ[ZJ].hasResult();) ZJ++;
            for (; FJ < cJ.length && !cJ[FJ].hasResult();) FJ++;
            let UJ = ZJ == JJ.length,
              eJ = FJ == cJ.length;
            if (UJ || eJ) return UJ == eJ;
            if (JJ[ZJ++].result != cJ[FJ++].result) return !1
          }
        }(FJ, this.active) || eJ ? UJ = bJ.build(FJ, cJ, this.id, UJ, ZJ, eJ) : UJ && UJ.disabled && !FJ.some((JJ => JJ.isPending)) && (UJ = null), !UJ && FJ.every((JJ => !JJ.isPending)) && FJ.some((JJ => JJ.hasResult())) && (FJ = FJ.map((JJ => JJ.hasResult() ? new pJ(JJ.source, 0) : JJ)));
        for (let XJ of JJ.effects) XJ.is(KJ) && (UJ = UJ && UJ.setSelected(XJ.value, this.id));
        return FJ == this.active && UJ == this.open ? this : new wJ(FJ, this.id, UJ)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? WJ : gJ
      }
    }
    const WJ = {
        "aria-autocomplete": "list"
      },
      gJ = {};

    function HJ(JJ, cJ) {
      let ZJ = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": JJ
      };
      return cJ > -1 && (ZJ["aria-activedescendant"] = JJ + "-" + cJ), ZJ
    }
    const PJ = [];

    function kJ(JJ, cJ) {
      if (JJ.isUserEvent("input.complete")) {
        let ZJ = JJ.annotation(sJ);
        if (ZJ && cJ.activateOnCompletion(ZJ)) return 12
      }
      let ZJ = JJ.isUserEvent("input.type");
      return ZJ && cJ.activateOnTyping ? 5 : ZJ ? 1 : JJ.isUserEvent("delete.backward") ? 2 : JJ.selection ? 8 : JJ.docChanged ? 16 : 0
    }
    class pJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = JJ, this.state = cJ, this.explicit = ZJ
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(JJ, cJ) {
        let ZJ = kJ(JJ, cJ),
          FJ = this;
        (8 & ZJ || 16 & ZJ && this.touches(JJ)) && (FJ = new pJ(FJ.source, 0)), 4 & ZJ && 0 == FJ.state && (FJ = new pJ(this.source, 1)), FJ = FJ.updateFor(JJ, ZJ);
        for (let UJ of JJ.effects)
          if (UJ.is(xJ)) FJ = new pJ(FJ.source, 1, UJ.value);
          else if (UJ.is(rJ)) FJ = new pJ(FJ.source, 0);
        else if (UJ.is(zJ))
          for (let JJ of UJ.value) JJ.source == FJ.source && (FJ = JJ);
        return FJ
      }
      updateFor(JJ, cJ) {
        return this.map(JJ.changes)
      }
      map(JJ) {
        return this
      }
      touches(JJ) {
        return JJ.changes.touchesRange(hJ(JJ.state))
      }
    }
    class dJ extends pJ {
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ) {
        super(JJ, 3, cJ), this.limit = ZJ, this.result = FJ, this.from = UJ, this.to = eJ
      }
      hasResult() {
        return !0
      }
      updateFor(JJ, cJ) {
        var ZJ;
        if (!(3 & cJ)) return this.map(JJ.changes);
        let FJ = this.result;
        FJ.map && !JJ.changes.empty && (FJ = FJ.map(FJ, JJ.changes));
        let UJ = JJ.changes.mapPos(this.from),
          eJ = JJ.changes.mapPos(this.to, 1),
          AJ = hJ(JJ.state);
        if (AJ > eJ || !FJ || 2 & cJ && (hJ(JJ.startState) == this.from || AJ < this.limit)) return new pJ(this.source, 4 & cJ ? 1 : 0);
        let qJ = JJ.changes.mapPos(this.limit);
        return function(JJ, cJ, ZJ, FJ) {
          if (!JJ) return !1;
          let UJ = cJ.sliceDoc(ZJ, FJ);
          return "function" == typeof JJ ? JJ(UJ, ZJ, FJ, cJ) : DJ(JJ, !0).test(UJ)
        }(FJ.validFor, JJ.state, UJ, eJ) ? new dJ(this.source, this.explicit, qJ, FJ, UJ, eJ) : FJ.update && (FJ = FJ.update(FJ, UJ, eJ, new XJ(JJ.state, AJ, !1))) ? new dJ(this.source, this.explicit, qJ, FJ, FJ.from, null !== (ZJ = FJ.to) && void 0 !== ZJ ? ZJ : hJ(JJ.state)) : new pJ(this.source, 1, this.explicit)
      }
      map(JJ) {
        if (JJ.empty) return this;
        return (this.result.map ? this.result.map(this.result, JJ) : this.result) ? new dJ(this.source, this.explicit, JJ.mapPos(this.limit), this.result, JJ.mapPos(this.from), JJ.mapPos(this.to, 1)) : new pJ(this.source, 0)
      }
      touches(JJ) {
        return JJ.changes.touchesRange(this.from, this.to)
      }
    }
    const zJ = FJ.A.define({
        map: (JJ, cJ) => JJ.map((JJ => JJ.map(cJ)))
      }),
      NJ = FJ.E.define({
        create: () => wJ.start(),
        update: (JJ, cJ) => JJ.update(cJ),
        provide: JJ => [UJ.ab.from(JJ, (JJ => JJ.tooltip)), UJ.f.contentAttributes.from(JJ, (JJ => JJ.attrs))]
      });

    function OJ(JJ, cJ) {
      const ZJ = cJ.completion.apply || cJ.completion.label;
      let FJ = JJ.state.field(NJ).active.find((JJ => JJ.source == cJ.source));
      return FJ instanceof dJ && ("string" == typeof ZJ ? JJ.dispatch({
        ...nJ(JJ.state, ZJ, FJ.from, FJ.to),
        annotations: sJ.of(cJ.completion)
      }) : ZJ(JJ, cJ.completion, FJ.from, FJ.to), !0)
    }
    const TJ = IJ(NJ, OJ);

    function CJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return ZJ => {
        let FJ = ZJ.state.field(NJ, !1);
        if (!FJ || !FJ.open || FJ.open.disabled || Date.now() - FJ.open.timestamp < ZJ.state.facet(QJ).interactionDelay) return !1;
        let eJ, XJ = 1;
        "page" == cJ && (eJ = (0, UJ.w)(ZJ, FJ.open.tooltip)) && (XJ = Math.max(2, Math.floor(eJ.dom.offsetHeight / eJ.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: AJ
        } = FJ.open.options, qJ = FJ.open.selected > -1 ? FJ.open.selected + XJ * (JJ ? 1 : -1) : JJ ? 0 : AJ - 1;
        return qJ < 0 ? qJ = "page" == cJ ? 0 : AJ - 1 : qJ >= AJ && (qJ = "page" == cJ ? AJ - 1 : 0), ZJ.dispatch({
          effects: KJ.of(qJ)
        }), !0
      }
    }
    const uJ = JJ => !!JJ.state.field(NJ, !1) && (JJ.dispatch({
      effects: xJ.of(!0)
    }), !0);
    class iJ {
      constructor(JJ, cJ) {
        this.active = JJ, this.context = cJ, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const RJ = UJ.k.fromClass(class {
        constructor(JJ) {
          this.view = JJ, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let cJ of JJ.state.field(NJ).active) cJ.isPending && this.startQuery(cJ)
        }
        update(JJ) {
          let cJ = JJ.state.field(NJ),
            ZJ = JJ.state.facet(QJ);
          if (!JJ.selectionSet && !JJ.docChanged && JJ.startState.field(NJ) == cJ) return;
          let FJ = JJ.transactions.some((JJ => {
            let cJ = kJ(JJ, ZJ);
            return 8 & cJ || (JJ.selection || JJ.docChanged) && !(3 & cJ)
          }));
          for (let AJ = 0; AJ < this.running.length; AJ++) {
            let cJ = this.running[AJ];
            if (FJ || cJ.context.abortOnDocChange && JJ.docChanged || cJ.updates.length + JJ.transactions.length > 50 && Date.now() - cJ.time > 1e3) {
              for (let JJ of cJ.context.abortListeners) try {
                JJ()
              } catch (XJ) {
                (0, UJ.Q)(this.view.state, XJ)
              }
              cJ.context.abortListeners = null, this.running.splice(AJ--, 1)
            } else cJ.updates.push(...JJ.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), JJ.transactions.some((JJ => JJ.effects.some((JJ => JJ.is(xJ))))) && (this.pendingStart = !0);
          let eJ = this.pendingStart ? 50 : ZJ.activateOnTypingDelay;
          if (this.debounceUpdate = cJ.active.some((JJ => JJ.isPending && !this.running.some((cJ => cJ.active.source == JJ.source)))) ? setTimeout((() => this.startUpdate()), eJ) : -1, 0 != this.composing)
            for (let UJ of JJ.transactions) UJ.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && UJ.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: JJ
          } = this.view, cJ = JJ.field(NJ);
          for (let ZJ of cJ.active) ZJ.isPending && !this.running.some((JJ => JJ.active.source == ZJ.source)) && this.startQuery(ZJ);
          this.running.length && cJ.open && cJ.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(QJ).updateSyncTime))
        }
        startQuery(JJ) {
          let {
            state: cJ
          } = this.view, ZJ = hJ(cJ), FJ = new XJ(cJ, ZJ, JJ.explicit, this.view), eJ = new iJ(JJ, FJ);
          this.running.push(eJ), Promise.resolve(JJ.source(FJ)).then((JJ => {
            eJ.context.aborted || (eJ.done = JJ || null, this.scheduleAccept())
          }), (JJ => {
            this.view.dispatch({
              effects: rJ.of(null)
            }), (0, UJ.Q)(this.view.state, JJ)
          }))
        }
        scheduleAccept() {
          this.running.every((JJ => void 0 !== JJ.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(QJ).updateSyncTime))
        }
        accept() {
          var JJ;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let cJ = [],
            ZJ = this.view.state.facet(QJ),
            FJ = this.view.state.field(NJ);
          for (let UJ = 0; UJ < this.running.length; UJ++) {
            let eJ = this.running[UJ];
            if (void 0 === eJ.done) continue;
            if (this.running.splice(UJ--, 1), eJ.done) {
              let FJ = hJ(eJ.updates.length ? eJ.updates[0].startState : this.view.state),
                UJ = Math.min(FJ, eJ.done.from + (eJ.active.explicit ? 0 : 1)),
                XJ = new dJ(eJ.active.source, eJ.active.explicit, UJ, eJ.done, eJ.done.from, null !== (JJ = eJ.done.to) && void 0 !== JJ ? JJ : FJ);
              for (let JJ of eJ.updates) XJ = XJ.update(JJ, ZJ);
              if (XJ.hasResult()) {
                cJ.push(XJ);
                continue
              }
            }
            let XJ = FJ.active.find((JJ => JJ.source == eJ.active.source));
            if (XJ && XJ.isPending)
              if (null == eJ.done) {
                let JJ = new pJ(eJ.active.source, 0);
                for (let cJ of eJ.updates) JJ = JJ.update(cJ, ZJ);
                JJ.isPending || cJ.push(JJ)
              } else this.startQuery(XJ)
          }(cJ.length || FJ.open && FJ.open.disabled) && this.view.dispatch({
            effects: zJ.of(cJ)
          })
        }
      }, {
        eventHandlers: {
          blur(JJ) {
            let cJ = this.view.state.field(NJ, !1);
            if (cJ && cJ.tooltip && this.view.state.facet(QJ).closeOnBlur) {
              let ZJ = cJ.open && (0, UJ.w)(this.view, cJ.open.tooltip);
              ZJ && ZJ.dom.contains(JJ.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: rJ.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: xJ.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      LJ = "object" == typeof navigator && /Win/.test(navigator.platform),
      aJ = FJ.t.highest(UJ.f.domEventHandlers({
        keydown(JJ, cJ) {
          let ZJ = cJ.state.field(NJ, !1);
          if (!ZJ || !ZJ.open || ZJ.open.disabled || ZJ.open.selected < 0 || JJ.key.length > 1 || JJ.ctrlKey && (!LJ || !JJ.altKey) || JJ.metaKey) return !1;
          let FJ = ZJ.open.options[ZJ.open.selected],
            UJ = ZJ.active.find((JJ => JJ.source == FJ.source)),
            eJ = FJ.completion.commitCharacters || UJ.result.commitCharacters;
          return eJ && eJ.indexOf(JJ.key) > -1 && OJ(cJ, FJ), !1
        }
      })),
      BJ = UJ.f.baseTheme({
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
    class tJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.field = JJ, this.line = cJ, this.from = ZJ, this.to = FJ
      }
    }
    class oJ {
      constructor(JJ, cJ, ZJ) {
        this.field = JJ, this.from = cJ, this.to = ZJ
      }
      map(JJ) {
        let cJ = JJ.mapPos(this.from, -1, FJ.r.TrackDel),
          ZJ = JJ.mapPos(this.to, 1, FJ.r.TrackDel);
        return null == cJ || null == ZJ ? null : new oJ(this.field, cJ, ZJ)
      }
    }
    class lJ {
      constructor(JJ, cJ) {
        this.lines = JJ, this.fieldPositions = cJ
      }
      instantiate(JJ, cJ) {
        let ZJ = [],
          FJ = [cJ],
          UJ = JJ.doc.lineAt(cJ),
          XJ = /^\s*/.exec(UJ.text)[0];
        for (let qJ of this.lines) {
          if (ZJ.length) {
            let ZJ = XJ,
              UJ = /^\t*/.exec(qJ)[0].length;
            for (let cJ = 0; cJ < UJ; cJ++) ZJ += JJ.facet(eJ.db);
            FJ.push(cJ + ZJ.length - UJ), qJ = ZJ + qJ.slice(UJ)
          }
          ZJ.push(qJ), cJ += qJ.length + 1
        }
        let AJ = this.fieldPositions.map((JJ => new oJ(JJ.field, FJ[JJ.line] + JJ.from, FJ[JJ.line] + JJ.to)));
        return {
          text: ZJ,
          ws: AJ
        }
      }
      static parse(JJ) {
        let cJ, ZJ = [],
          FJ = [],
          UJ = [];
        for (let eJ of JJ.split(/\r\n?|\n/)) {
          for (; cJ = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(eJ);) {
            let JJ = cJ[1] ? +cJ[1] : null,
              XJ = cJ[2] || cJ[3] || "",
              AJ = -1,
              qJ = XJ.replace(/\\[{}]/g, (JJ => JJ[1]));
            for (let cJ = 0; cJ < ZJ.length; cJ++)(null != JJ ? ZJ[cJ].seq == JJ : qJ && ZJ[cJ].name == qJ) && (AJ = cJ);
            if (AJ < 0) {
              let cJ = 0;
              for (; cJ < ZJ.length && (null == JJ || null != ZJ[cJ].seq && ZJ[cJ].seq < JJ);) cJ++;
              ZJ.splice(cJ, 0, {
                seq: JJ,
                name: qJ
              }), AJ = cJ;
              for (let JJ of UJ) JJ.field >= AJ && JJ.field++
            }
            for (let ZJ of UJ)
              if (ZJ.line == FJ.length && ZJ.from > cJ.index) {
                let JJ = cJ[2] ? 3 + (cJ[1] || "").length : 2;
                ZJ.from -= JJ, ZJ.to -= JJ
              } UJ.push(new tJ(AJ, FJ.length, cJ.index, cJ.index + qJ.length)), eJ = eJ.slice(0, cJ.index) + XJ + eJ.slice(cJ.index + cJ[0].length)
          }
          eJ = eJ.replace(/\\([{}])/g, ((JJ, cJ, ZJ) => {
            for (let eJ of UJ) eJ.line == FJ.length && eJ.from > ZJ && (eJ.from--, eJ.to--);
            return cJ
          })), FJ.push(eJ)
        }
        return new lJ(FJ, UJ)
      }
    }
    let Jc = UJ.c.widget({
        widget: new class extends UJ.l {
          toDOM() {
            let JJ = document.createElement("span");
            return JJ.className = "cm-snippetFieldPosition", JJ
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      cc = UJ.c.mark({
        class: "cm-snippetField"
      });
    class Zc {
      constructor(JJ, cJ) {
        this.ws = JJ, this.active = cJ, this.deco = UJ.c.set(JJ.map((JJ => (JJ.from == JJ.to ? Jc : cc).range(JJ.from, JJ.to))), !0)
      }
      map(JJ) {
        let cJ = [];
        for (let ZJ of this.ws) {
          let FJ = ZJ.map(JJ);
          if (!FJ) return null;
          cJ.push(FJ)
        }
        return new Zc(cJ, this.active)
      }
      selectionInsideField(JJ) {
        return JJ.ws.every((JJ => this.ws.some((cJ => cJ.field == this.active && cJ.from <= JJ.from && cJ.to >= JJ.to))))
      }
    }
    const Fc = FJ.A.define({
        map: (JJ, cJ) => JJ && JJ.map(cJ)
      }),
      Uc = FJ.A.define(),
      ec = FJ.E.define({
        create: () => null,
        update(JJ, cJ) {
          for (let ZJ of cJ.effects) {
            if (ZJ.is(Fc)) return ZJ.value;
            if (ZJ.is(Uc) && JJ) return new Zc(JJ.ws, ZJ.value)
          }
          return JJ && cJ.docChanged && (JJ = JJ.map(cJ.changes)), JJ && cJ.selection && !JJ.selectionInsideField(cJ.selection) && (JJ = null), JJ
        },
        provide: JJ => UJ.f.je.from(JJ, (JJ => JJ ? JJ.deco : UJ.c.none))
      });

    function Xc(JJ, cJ) {
      return FJ.m.create(JJ.filter((JJ => JJ.field == cJ)).map((JJ => FJ.m.range(JJ.from, JJ.to))))
    }

    function Ac(JJ) {
      let cJ = lJ.parse(JJ);
      return (JJ, ZJ, UJ, eJ) => {
        let {
          text: XJ,
          ws: AJ
        } = cJ.instantiate(JJ.state, UJ), {
          main: qJ
        } = JJ.state.selection, jJ = {
          changes: {
            from: UJ,
            to: eJ == qJ.from ? qJ.to : eJ,
            insert: FJ.F.of(XJ)
          },
          scrollIntoView: !0,
          annotations: ZJ ? [sJ.of(ZJ), FJ.J.userEvent.of("input.complete")] : void 0
        };
        if (AJ.length && (jJ.selection = Xc(AJ, 0)), AJ.some((JJ => JJ.field > 0))) {
          let cJ = new Zc(AJ, 0),
            ZJ = jJ.effects = [Fc.of(cJ)];
          void 0 === JJ.state.field(ec, !1) && ZJ.push(FJ.A.appendConfig.of([ec, hc, sc, BJ]))
        }
        JJ.dispatch(JJ.state.update(jJ))
      }
    }

    function qc(JJ) {
      return cJ => {
        let {
          state: ZJ,
          dispatch: FJ
        } = cJ, UJ = ZJ.field(ec, !1);
        if (!UJ || JJ < 0 && 0 == UJ.active) return !1;
        let eJ = UJ.active + JJ,
          XJ = JJ > 0 && !UJ.ws.some((cJ => cJ.field == eJ + JJ));
        return FJ(ZJ.update({
          selection: Xc(UJ.ws, eJ),
          effects: Fc.of(XJ ? null : new Zc(UJ.ws, eJ)),
          scrollIntoView: !0
        })), !0
      }
    }
    const jc = [{
        key: "Tab",
        run: qc(1),
        shift: qc(-1)
      }, {
        key: "Escape",
        run: JJ => {
          let {
            state: cJ,
            dispatch: ZJ
          } = JJ;
          return !!cJ.field(ec, !1) && (ZJ(cJ.update({
            effects: Fc.of(null)
          })), !0)
        }
      }],
      Yc = FJ.p.define({
        combine: JJ => JJ.length ? JJ[0] : jc
      }),
      hc = FJ.t.highest(UJ.K.compute([Yc], (JJ => JJ.facet(Yc))));

    function Dc(JJ, cJ) {
      return {
        ...cJ,
        apply: Ac(JJ)
      }
    }
    const sc = UJ.f.domEventHandlers({
      mousedown(JJ, cJ) {
        let ZJ, FJ = cJ.state.field(ec, !1);
        if (!FJ || null == (ZJ = cJ.posAtCoords({
            x: JJ.clientX,
            y: JJ.clientY
          }))) return !1;
        let UJ = FJ.ws.find((JJ => JJ.from <= ZJ && JJ.to >= ZJ));
        return !(!UJ || UJ.field == FJ.active) && (cJ.dispatch({
          selection: Xc(FJ.ws, UJ.field),
          effects: Fc.of(FJ.ws.some((JJ => JJ.field > UJ.field)) ? new Zc(FJ.ws, UJ.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const nc = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      Gc = FJ.A.define({
        map(JJ, cJ) {
          let ZJ = cJ.mapPos(JJ, -1, FJ.r.TrackAfter);
          return null == ZJ ? void 0 : ZJ
        }
      }),
      fc = new class extends FJ.x {};
    fc.startSide = 1, fc.endSide = -1;
    const xc = FJ.E.define({
      create: () => FJ.v.empty,
      update(JJ, cJ) {
        if (JJ = JJ.map(cJ.changes), cJ.selection) {
          let ZJ = cJ.state.doc.lineAt(cJ.selection.main.head);
          JJ = JJ.update({
            filter: JJ => JJ >= ZJ.from && JJ <= ZJ.to
          })
        }
        for (let ZJ of cJ.effects) ZJ.is(Gc) && (JJ = JJ.update({
          add: [fc.range(ZJ.value, ZJ.value + 1)]
        }));
        return JJ
      }
    });

    function rc() {
      return [Vc, xc]
    }
    const vc = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function mc(JJ) {
      for (let cJ = 0; cJ < 16; cJ += 2)
        if (vc.charCodeAt(cJ) == JJ) return vc.charAt(cJ + 1);
      return (0, FJ.bb)(JJ < 128 ? JJ : JJ + 1)
    }

    function Qc(JJ, cJ) {
      return JJ.languageDataAt("closeBrackets", cJ)[0] || nc
    }
    const Ec = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Vc = UJ.f.inputHandler.of(((JJ, cJ, ZJ, UJ) => {
        if ((Ec ? JJ.composing : JJ.compositionStarted) || JJ.state.readOnly) return !1;
        let eJ = JJ.state.selection.main;
        if (UJ.length > 2 || 2 == UJ.length && 1 == (0, FJ.P)((0, FJ.L)(UJ, 0)) || cJ != eJ.from || ZJ != eJ.to) return !1;
        let XJ = function(JJ, cJ) {
          let ZJ = Qc(JJ, JJ.selection.main.head),
            UJ = ZJ.brackets || nc.brackets;
          for (let eJ of UJ) {
            let XJ = mc((0, FJ.L)(eJ, 0));
            if (cJ == eJ) return XJ == eJ ? bc(JJ, eJ, UJ.indexOf(eJ + eJ + eJ) > -1, ZJ) : Ic(JJ, eJ, XJ, ZJ.before || nc.before);
            if (cJ == XJ && yc(JJ, JJ.selection.main.from)) return Mc(JJ, eJ, XJ)
          }
          return null
        }(JJ.state, UJ);
        return !!XJ && (JJ.dispatch(XJ), !0)
      })),
      Kc = [{
        key: "Backspace",
        run: JJ => {
          let {
            state: cJ,
            dispatch: ZJ
          } = JJ;
          if (cJ.readOnly) return !1;
          let UJ = Qc(cJ, cJ.selection.main.head).brackets || nc.brackets,
            eJ = null,
            XJ = cJ.changeByRange((JJ => {
              if (JJ.empty) {
                let ZJ = function(JJ, cJ) {
                  let ZJ = JJ.sliceString(cJ - 2, cJ);
                  return (0, FJ.P)((0, FJ.L)(ZJ, 0)) == ZJ.length ? ZJ : ZJ.slice(1)
                }(cJ.doc, JJ.head);
                for (let eJ of UJ)
                  if (eJ == ZJ && Sc(cJ.doc, JJ.head) == mc((0, FJ.L)(eJ, 0))) return {
                    changes: {
                      from: JJ.head - eJ.length,
                      to: JJ.head + eJ.length
                    },
                    range: FJ.m.cursor(JJ.head - eJ.length)
                  }
              }
              return {
                range: eJ = JJ
              }
            }));
          return eJ || ZJ(cJ.update(XJ, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !eJ
        }
      }];

    function yc(JJ, cJ) {
      let ZJ = !1;
      return JJ.field(xc).between(0, JJ.doc.length, (JJ => {
        JJ == cJ && (ZJ = !0)
      })), ZJ
    }

    function Sc(JJ, cJ) {
      let ZJ = JJ.sliceString(cJ, cJ + 2);
      return ZJ.slice(0, (0, FJ.P)((0, FJ.L)(ZJ, 0)))
    }

    function Ic(JJ, cJ, ZJ, UJ) {
      let eJ = null,
        XJ = JJ.changeByRange((XJ => {
          if (!XJ.empty) return {
            changes: [{
              insert: cJ,
              from: XJ.from
            }, {
              insert: ZJ,
              from: XJ.to
            }],
            effects: Gc.of(XJ.to + cJ.length),
            range: FJ.m.range(XJ.anchor + cJ.length, XJ.head + cJ.length)
          };
          let AJ = Sc(JJ.doc, XJ.head);
          return !AJ || /\s/.test(AJ) || UJ.indexOf(AJ) > -1 ? {
            changes: {
              insert: cJ + ZJ,
              from: XJ.head
            },
            effects: Gc.of(XJ.head + cJ.length),
            range: FJ.m.cursor(XJ.head + cJ.length)
          } : {
            range: eJ = XJ
          }
        }));
      return eJ ? null : JJ.update(XJ, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Mc(JJ, cJ, ZJ) {
      let UJ = null,
        eJ = JJ.changeByRange((cJ => cJ.empty && Sc(JJ.doc, cJ.head) == ZJ ? {
          changes: {
            from: cJ.head,
            to: cJ.head + ZJ.length,
            insert: ZJ
          },
          range: FJ.m.cursor(cJ.head + ZJ.length)
        } : UJ = {
          range: cJ
        }));
      return UJ ? null : JJ.update(eJ, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function bc(JJ, cJ, ZJ, UJ) {
      let XJ = UJ.stringPrefixes || nc.stringPrefixes,
        AJ = null,
        qJ = JJ.changeByRange((UJ => {
          if (!UJ.empty) return {
            changes: [{
              insert: cJ,
              from: UJ.from
            }, {
              insert: cJ,
              from: UJ.to
            }],
            effects: Gc.of(UJ.to + cJ.length),
            range: FJ.m.range(UJ.anchor + cJ.length, UJ.head + cJ.length)
          };
          let qJ, jJ = UJ.head,
            YJ = Sc(JJ.doc, jJ);
          if (YJ == cJ) {
            if (wc(JJ, jJ)) return {
              changes: {
                insert: cJ + cJ,
                from: jJ
              },
              effects: Gc.of(jJ + cJ.length),
              range: FJ.m.cursor(jJ + cJ.length)
            };
            if (yc(JJ, jJ)) {
              let UJ = ZJ && JJ.sliceDoc(jJ, jJ + 3 * cJ.length) == cJ + cJ + cJ ? cJ + cJ + cJ : cJ;
              return {
                changes: {
                  from: jJ,
                  to: jJ + UJ.length,
                  insert: UJ
                },
                range: FJ.m.cursor(jJ + UJ.length)
              }
            }
          } else {
            if (ZJ && JJ.sliceDoc(jJ - 2 * cJ.length, jJ) == cJ + cJ && (qJ = Wc(JJ, jJ - 2 * cJ.length, XJ)) > -1 && wc(JJ, qJ)) return {
              changes: {
                insert: cJ + cJ + cJ + cJ,
                from: jJ
              },
              effects: Gc.of(jJ + cJ.length),
              range: FJ.m.cursor(jJ + cJ.length)
            };
            if (JJ.charCategorizer(jJ)(YJ) != FJ.i.Word && Wc(JJ, jJ, XJ) > -1 && ! function(JJ, cJ, ZJ, FJ) {
                let UJ = (0, eJ.ub)(JJ).resolveInner(cJ, -1),
                  XJ = FJ.reduce(((JJ, cJ) => Math.max(JJ, cJ.length)), 0);
                for (let eJ = 0; eJ < 5; eJ++) {
                  let eJ = JJ.sliceDoc(UJ.from, Math.min(UJ.to, UJ.from + ZJ.length + XJ)),
                    AJ = eJ.indexOf(ZJ);
                  if (!AJ || AJ > -1 && FJ.indexOf(eJ.slice(0, AJ)) > -1) {
                    let cJ = UJ.firstChild;
                    for (; cJ && cJ.from == UJ.from && cJ.to - cJ.from > ZJ.length + AJ;) {
                      if (JJ.sliceDoc(cJ.to - ZJ.length, cJ.to) == ZJ) return !1;
                      cJ = cJ.firstChild
                    }
                    return !0
                  }
                  let qJ = UJ.to == cJ && UJ.parent;
                  if (!qJ) break;
                  UJ = qJ
                }
                return !1
              }(JJ, jJ, cJ, XJ)) return {
              changes: {
                insert: cJ + cJ,
                from: jJ
              },
              effects: Gc.of(jJ + cJ.length),
              range: FJ.m.cursor(jJ + cJ.length)
            }
          }
          return {
            range: AJ = UJ
          }
        }));
      return AJ ? null : JJ.update(qJ, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function wc(JJ, cJ) {
      let ZJ = (0, eJ.ub)(JJ).resolveInner(cJ + 1);
      return ZJ.parent && ZJ.from == cJ
    }

    function Wc(JJ, cJ, ZJ) {
      let UJ = JJ.charCategorizer(cJ);
      if (UJ(JJ.sliceDoc(cJ - 1, cJ)) != FJ.i.Word) return cJ;
      for (let eJ of ZJ) {
        let ZJ = cJ - eJ.length;
        if (JJ.sliceDoc(ZJ, cJ) == eJ && UJ(JJ.sliceDoc(ZJ - 1, ZJ)) != FJ.i.Word) return ZJ
      }
      return -1
    }

    function gc() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [aJ, NJ, QJ.of(JJ), RJ, Pc, BJ]
    }
    const Hc = [{
        key: "Ctrl-Space",
        run: uJ
      }, {
        mac: "Alt-`",
        run: uJ
      }, {
        mac: "Alt-i",
        run: uJ
      }, {
        key: "Escape",
        run: JJ => {
          let cJ = JJ.state.field(NJ, !1);
          return !(!cJ || !cJ.active.some((JJ => 0 != JJ.state))) && (JJ.dispatch({
            effects: rJ.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: CJ(!0)
      }, {
        key: "ArrowUp",
        run: CJ(!1)
      }, {
        key: "PageDown",
        run: CJ(!0, "page")
      }, {
        key: "PageUp",
        run: CJ(!1, "page")
      }, {
        key: "Enter",
        run: JJ => {
          let cJ = JJ.state.field(NJ, !1);
          return !(JJ.state.readOnly || !cJ || !cJ.open || cJ.open.selected < 0 || cJ.open.disabled || Date.now() - cJ.open.timestamp < JJ.state.facet(QJ).interactionDelay) && OJ(JJ, cJ.open.options[cJ.open.selected])
        }
      }],
      Pc = FJ.t.highest(UJ.K.computeN([QJ], (JJ => JJ.facet(QJ).defaultKeymap ? [Hc] : [])))
  },
  40189: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => jJ,
      d: () => DJ,
      f: () => YJ,
      i: () => hJ
    });
    var FJ = ZJ(40060);
    class UJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.origin = JJ, this.changes = cJ, this.effects = ZJ, this.clientID = FJ
      }
    }
    class eJ {
      constructor(JJ, cJ) {
        this.version = JJ, this.unconfirmed = cJ
      }
    }
    const XJ = FJ.p.define({
        combine(JJ) {
          let cJ = (0, FJ.S)(JJ, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: JJ => JJ
          });
          return null == cJ.clientID && (cJ.clientID = JJ.length && JJ[0].generatedID || ""), cJ
        }
      }),
      AJ = FJ.d.define(),
      qJ = FJ.E.define({
        create: JJ => new eJ(JJ.facet(XJ).startVersion, []),
        update(JJ, cJ) {
          let ZJ = cJ.annotation(AJ);
          if (ZJ) return ZJ;
          let {
            sharedEffects: FJ,
            clientID: qJ
          } = cJ.startState.facet(XJ), jJ = FJ(cJ);
          return jJ.length || !cJ.changes.empty ? new eJ(JJ.version, JJ.unconfirmed.concat(new UJ(cJ, cJ.changes, jJ, qJ))) : JJ
        }
      });

    function jJ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [qJ, XJ.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, JJ))]
    }

    function YJ(JJ, cJ) {
      let {
        version: ZJ,
        unconfirmed: jJ
      } = JJ.field(qJ), {
        clientID: YJ
      } = JJ.facet(XJ);
      ZJ += cJ.length;
      let hJ = [],
        DJ = null,
        sJ = 0;
      for (let UJ of cJ) {
        let JJ = sJ < jJ.length ? jJ[sJ] : null;
        JJ && JJ.clientID == UJ.clientID ? (DJ && (DJ = DJ.map(JJ.changes, !0)), hJ = FJ.A.mapEffects(hJ, UJ.changes), sJ++) : (hJ = FJ.A.mapEffects(hJ, UJ.changes), UJ.effects && (hJ = hJ.concat(UJ.effects)), DJ = DJ ? DJ.compose(UJ.changes) : UJ.changes)
      }
      if (sJ && (jJ = jJ.slice(sJ)), jJ.length && (DJ && (jJ = jJ.map((JJ => {
          let cJ = JJ.changes.map(DJ);
          return DJ = DJ.map(JJ.changes, !0), new UJ(JJ.origin, cJ, FJ.A.mapEffects(JJ.effects, DJ), YJ)
        }))), hJ.length)) {
        let JJ = jJ.reduce(((JJ, cJ) => JJ.compose(cJ.changes)), FJ.ChangeSet.empty(jJ[0].changes.length));
        hJ = FJ.A.mapEffects(hJ, JJ)
      }
      return DJ ? JJ.update({
        changes: DJ,
        effects: hJ,
        annotations: [FJ.J.addToHistory.of(!1), FJ.J.remote.of(!0), AJ.of(new eJ(ZJ, jJ))],
        filter: !1
      }) : JJ.update({
        annotations: [AJ.of(new eJ(ZJ, jJ))]
      })
    }

    function hJ(JJ) {
      return JJ.field(qJ).unconfirmed
    }

    function DJ(JJ) {
      return JJ.field(qJ).version
    }
  },
  40090: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => Gc
    });
    var FJ = ZJ(40080);
    class UJ {
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
        let jJ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          YJ = arguments.length > 10 ? arguments[10] : void 0;
        this.p = JJ, this.stack = cJ, this.state = ZJ, this.reducePos = FJ, this.pos = UJ, this.score = eJ, this.buffer = XJ, this.bufferBase = AJ, this.curContext = qJ, this.lookAhead = jJ, this.parent = YJ
      }
      toString() {
        return `[${this.stack.filter(((JJ,cJ)=>cJ%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FJ = JJ.parser.context;
        return new UJ(JJ, [], cJ, ZJ, ZJ, 0, [], 0, FJ ? new eJ(FJ, FJ.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(JJ, cJ) {
        this.stack.push(this.state, cJ, this.bufferBase + this.buffer.length), this.state = JJ
      }
      reduce(JJ) {
        var cJ;
        let ZJ = JJ >> 19,
          FJ = 65535 & JJ,
          {
            parser: UJ
          } = this.p,
          eJ = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          XJ = UJ.dynamicPrecedence(FJ);
        if (XJ && (this.score += XJ), 0 == ZJ) return this.pushState(UJ.getGoto(this.state, FJ, !0), this.reducePos), FJ < UJ.minRepeatTerm && this.storeNode(FJ, this.reducePos, this.reducePos, eJ ? 8 : 4, !0), void this.reduceContext(FJ, this.reducePos);
        let AJ = this.stack.length - 3 * (ZJ - 1) - (262144 & JJ ? 6 : 0),
          qJ = AJ ? this.stack[AJ - 2] : this.p.ws[0].from,
          jJ = this.reducePos - qJ;
        jJ >= 2e3 && !(null === (cJ = this.p.parser.nodeSet.types[FJ]) || void 0 === cJ ? void 0 : cJ.isAnonymous) && (qJ == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = jJ) : this.p.lastBigReductionSize < jJ && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = qJ, this.p.lastBigReductionSize = jJ));
        let YJ = AJ ? this.stack[AJ - 1] : 0,
          hJ = this.bufferBase + this.buffer.length - YJ;
        if (FJ < UJ.minRepeatTerm || 131072 & JJ) {
          let JJ = UJ.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(FJ, qJ, JJ, hJ + 4, !0)
        }
        if (262144 & JJ) this.state = this.stack[AJ];
        else {
          let JJ = this.stack[AJ - 3];
          this.state = UJ.getGoto(JJ, FJ, !0)
        }
        for (; this.stack.length > AJ;) this.stack.pop();
        this.reduceContext(FJ, qJ)
      }
      storeNode(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == JJ && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let JJ = this,
            FJ = this.buffer.length;
          if (0 == FJ && JJ.parent && (FJ = JJ.bufferBase - JJ.parent.bufferBase, JJ = JJ.parent), FJ > 0 && 0 == JJ.buffer[FJ - 4] && JJ.buffer[FJ - 1] > -1) {
            if (cJ == ZJ) return;
            if (JJ.buffer[FJ - 2] >= cJ) return void(JJ.buffer[FJ - 2] = ZJ)
          }
        }
        if (UJ && this.pos != ZJ) {
          let UJ = this.buffer.length;
          if (UJ > 0 && (0 != this.buffer[UJ - 4] || this.buffer[UJ - 1] < 0)) {
            let JJ = !1;
            for (let cJ = UJ; cJ > 0 && this.buffer[cJ - 2] > ZJ; cJ -= 4)
              if (this.buffer[cJ - 1] >= 0) {
                JJ = !0;
                break
              } if (JJ)
              for (; UJ > 0 && this.buffer[UJ - 2] > ZJ;) this.buffer[UJ] = this.buffer[UJ - 4], this.buffer[UJ + 1] = this.buffer[UJ - 3], this.buffer[UJ + 2] = this.buffer[UJ - 2], this.buffer[UJ + 3] = this.buffer[UJ - 1], UJ -= 4, FJ > 4 && (FJ -= 4)
          }
          this.buffer[UJ] = JJ, this.buffer[UJ + 1] = cJ, this.buffer[UJ + 2] = ZJ, this.buffer[UJ + 3] = FJ
        } else this.buffer.push(JJ, cJ, ZJ, FJ)
      }
      shift(JJ, cJ, ZJ, FJ) {
        if (131072 & JJ) this.pushState(65535 & JJ, this.pos);
        else if (0 == (262144 & JJ)) {
          let UJ = JJ,
            {
              parser: eJ
            } = this.p;
          this.pos = FJ;
          let XJ = eJ.stateFlag(UJ, 1);
          !XJ && (FJ > ZJ || cJ <= eJ.maxNode) && (this.reducePos = FJ), this.pushState(UJ, XJ ? ZJ : Math.min(ZJ, this.reducePos)), this.shiftContext(cJ, ZJ), cJ <= eJ.maxNode && this.buffer.push(cJ, ZJ, FJ, 4)
        } else this.pos = FJ, this.shiftContext(cJ, ZJ), cJ <= this.p.parser.maxNode && this.buffer.push(cJ, ZJ, FJ, 4)
      }
      apply(JJ, cJ, ZJ, FJ) {
        65536 & JJ ? this.reduce(JJ) : this.shift(JJ, cJ, ZJ, FJ)
      }
      useNode(JJ, cJ) {
        let ZJ = this.p.reused.length - 1;
        (ZJ < 0 || this.p.reused[ZJ] != JJ) && (this.p.reused.push(JJ), ZJ++);
        let FJ = this.pos;
        this.reducePos = this.pos = FJ + JJ.length, this.pushState(cJ, FJ), this.buffer.push(ZJ, FJ, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, JJ, this, this.p.stream.reset(this.pos - JJ.length)))
      }
      split() {
        let JJ = this,
          cJ = JJ.buffer.length;
        for (; cJ > 0 && JJ.buffer[cJ - 2] > JJ.reducePos;) cJ -= 4;
        let ZJ = JJ.buffer.slice(cJ),
          FJ = JJ.bufferBase + cJ;
        for (; JJ && FJ == JJ.bufferBase;) JJ = JJ.parent;
        return new UJ(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, ZJ, FJ, this.curContext, this.lookAhead, JJ)
      }
      recoverByDelete(JJ, cJ) {
        let ZJ = JJ <= this.p.parser.maxNode;
        ZJ && this.storeNode(JJ, this.pos, cJ, 4), this.storeNode(0, this.pos, cJ, ZJ ? 8 : 4), this.pos = this.reducePos = cJ, this.score -= 190
      }
      canShift(JJ) {
        for (let cJ = new XJ(this);;) {
          let ZJ = this.p.parser.stateSlot(cJ.state, 4) || this.p.parser.hasAction(cJ.state, JJ);
          if (0 == ZJ) return !1;
          if (0 == (65536 & ZJ)) return !0;
          cJ.reduce(ZJ)
        }
      }
      recoverByInsert(JJ) {
        if (this.stack.length >= 300) return [];
        let cJ = this.p.parser.nextStates(this.state);
        if (cJ.length > 8 || this.stack.length >= 120) {
          let ZJ = [];
          for (let FJ, UJ = 0; UJ < cJ.length; UJ += 2)(FJ = cJ[UJ + 1]) != this.state && this.p.parser.hasAction(FJ, JJ) && ZJ.push(cJ[UJ], FJ);
          if (this.stack.length < 120)
            for (let JJ = 0; ZJ.length < 8 && JJ < cJ.length; JJ += 2) {
              let FJ = cJ[JJ + 1];
              ZJ.some(((JJ, cJ) => 1 & cJ && JJ == FJ)) || ZJ.push(cJ[JJ], FJ)
            }
          cJ = ZJ
        }
        let ZJ = [];
        for (let FJ = 0; FJ < cJ.length && ZJ.length < 4; FJ += 2) {
          let JJ = cJ[FJ + 1];
          if (JJ == this.state) continue;
          let UJ = this.split();
          UJ.pushState(JJ, this.pos), UJ.storeNode(0, UJ.pos, UJ.pos, 4, !0), UJ.shiftContext(cJ[FJ], this.pos), UJ.reducePos = this.pos, UJ.score -= 200, ZJ.push(UJ)
        }
        return ZJ
      }
      forceReduce() {
        let {
          parser: JJ
        } = this.p, cJ = JJ.stateSlot(this.state, 5);
        if (0 == (65536 & cJ)) return !1;
        if (!JJ.validAction(this.state, cJ)) {
          let ZJ = cJ >> 19,
            FJ = 65535 & cJ,
            UJ = this.stack.length - 3 * ZJ;
          if (UJ < 0 || JJ.getGoto(this.stack[UJ], FJ, !1) < 0) {
            let JJ = this.findForcedReduction();
            if (null == JJ) return !1;
            cJ = JJ
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(cJ), !0
      }
      findForcedReduction() {
        let {
          parser: JJ
        } = this.p, cJ = [], ZJ = (FJ, UJ) => {
          if (!cJ.includes(FJ)) return cJ.push(FJ), JJ.allActions(FJ, (cJ => {
            if (393216 & cJ);
            else if (65536 & cJ) {
              let ZJ = (cJ >> 19) - UJ;
              if (ZJ > 1) {
                let FJ = 65535 & cJ,
                  UJ = this.stack.length - 3 * ZJ;
                if (UJ >= 0 && JJ.getGoto(this.stack[UJ], FJ, !1) >= 0) return ZJ << 19 | 65536 | FJ
              }
            } else {
              let JJ = ZJ(cJ, UJ + 1);
              if (null != JJ) return JJ
            }
          }))
        };
        return ZJ(this.state, 0)
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
          parser: JJ
        } = this.p;
        return 65535 == JJ.data[JJ.stateSlot(this.state, 1)] && !JJ.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(JJ) {
        if (this.state != JJ.state || this.stack.length != JJ.stack.length) return !1;
        for (let cJ = 0; cJ < this.stack.length; cJ += 3)
          if (this.stack[cJ] != JJ.stack[cJ]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(JJ) {
        return this.p.parser.dialect.flags[JJ]
      }
      shiftContext(JJ, cJ) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, JJ, this, this.p.stream.reset(cJ)))
      }
      reduceContext(JJ, cJ) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, JJ, this, this.p.stream.reset(cJ)))
      }
      emitContext() {
        let JJ = this.buffer.length - 1;
        (JJ < 0 || -3 != this.buffer[JJ]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let JJ = this.buffer.length - 1;
        (JJ < 0 || -4 != this.buffer[JJ]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(JJ) {
        if (JJ != this.curContext.context) {
          let cJ = new eJ(this.curContext.tracker, JJ);
          cJ.hash != this.curContext.hash && this.emitContext(), this.curContext = cJ
        }
      }
      setLookAhead(JJ) {
        return !(JJ <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = JJ, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class eJ {
      constructor(JJ, cJ) {
        this.tracker = JJ, this.context = cJ, this.hash = JJ.strict ? JJ.hash(cJ) : 0
      }
    }
    class XJ {
      constructor(JJ) {
        this.start = JJ, this.state = JJ.state, this.stack = JJ.stack, this.base = this.stack.length
      }
      reduce(JJ) {
        let cJ = 65535 & JJ,
          ZJ = JJ >> 19;
        0 == ZJ ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (ZJ - 1);
        let FJ = this.start.p.parser.getGoto(this.stack[this.base - 3], cJ, !0);
        this.state = FJ
      }
    }
    class AJ {
      constructor(JJ, cJ, ZJ) {
        this.stack = JJ, this.pos = cJ, this.index = ZJ, this.buffer = JJ.buffer, 0 == this.index && this.maybeNext()
      }
      static create(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ.bufferBase + JJ.buffer.length;
        return new AJ(JJ, cJ, cJ - JJ.bufferBase)
      }
      maybeNext() {
        let JJ = this.stack.parent;
        null != JJ && (this.index = this.stack.bufferBase - JJ.bufferBase, this.stack = JJ, this.buffer = JJ.buffer)
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
        return new AJ(this.stack, this.pos, this.index)
      }
    }

    function qJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof JJ) return JJ;
      let ZJ = null;
      for (let FJ = 0, UJ = 0; FJ < JJ.length;) {
        let eJ = 0;
        for (;;) {
          let cJ = JJ.charCodeAt(FJ++),
            ZJ = !1;
          if (126 == cJ) {
            eJ = 65535;
            break
          }
          cJ >= 92 && cJ--, cJ >= 34 && cJ--;
          let UJ = cJ - 32;
          if (UJ >= 46 && (UJ -= 46, ZJ = !0), eJ += UJ, ZJ) break;
          eJ *= 46
        }
        ZJ ? ZJ[UJ++] = eJ : ZJ = new cJ(eJ)
      }
      return ZJ
    }
    class jJ {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const YJ = new jJ;
    class hJ {
      constructor(JJ, cJ) {
        this.input = JJ, this.ws = cJ, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = YJ, this.rangeIndex = 0, this.pos = this.chunkPos = cJ[0].from, this.range = cJ[0], this.end = cJ[cJ.length - 1].to, this.readNext()
      }
      resolveOffset(JJ, cJ) {
        let ZJ = this.range,
          FJ = this.rangeIndex,
          UJ = this.pos + JJ;
        for (; UJ < ZJ.from;) {
          if (!FJ) return null;
          let JJ = this.ws[--FJ];
          UJ -= ZJ.from - JJ.to, ZJ = JJ
        }
        for (; cJ < 0 ? UJ > ZJ.to : UJ >= ZJ.to;) {
          if (FJ == this.ws.length - 1) return null;
          let JJ = this.ws[++FJ];
          UJ += JJ.from - ZJ.to, ZJ = JJ
        }
        return UJ
      }
      clipPos(JJ) {
        if (JJ >= this.range.from && JJ < this.range.to) return JJ;
        for (let cJ of this.ws)
          if (cJ.to > JJ) return Math.max(JJ, cJ.from);
        return this.end
      }
      peek(JJ) {
        let cJ, ZJ, FJ = this.chunkOff + JJ;
        if (FJ >= 0 && FJ < this.chunk.length) cJ = this.pos + JJ, ZJ = this.chunk.charCodeAt(FJ);
        else {
          let FJ = this.resolveOffset(JJ, 1);
          if (null == FJ) return -1;
          if (cJ = FJ, cJ >= this.chunk2Pos && cJ < this.chunk2Pos + this.chunk2.length) ZJ = this.chunk2.charCodeAt(cJ - this.chunk2Pos);
          else {
            let JJ = this.rangeIndex,
              FJ = this.range;
            for (; FJ.to <= cJ;) FJ = this.ws[++JJ];
            this.chunk2 = this.input.chunk(this.chunk2Pos = cJ), cJ + this.chunk2.length > FJ.to && (this.chunk2 = this.chunk2.slice(0, FJ.to - cJ)), ZJ = this.chunk2.charCodeAt(0)
          }
        }
        return cJ >= this.token.lookAhead && (this.token.lookAhead = cJ + 1), ZJ
      }
      acceptToken(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = cJ ? this.resolveOffset(cJ, -1) : this.pos;
        if (null == ZJ || ZJ < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = JJ, this.token.end = ZJ
      }
      acceptTokenTo(JJ, cJ) {
        this.token.value = JJ, this.token.end = cJ
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: JJ,
            chunkPos: cJ
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = JJ, this.chunk2Pos = cJ, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let JJ = this.input.chunk(this.pos),
            cJ = this.pos + JJ.length;
          this.chunk = cJ > this.range.to ? JJ.slice(0, this.range.to - this.pos) : JJ, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += JJ; this.pos + JJ >= this.range.to;) {
          if (this.rangeIndex == this.ws.length - 1) return this.setDone();
          JJ -= this.range.to - this.pos, this.range = this.ws[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += JJ, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.ws[this.rangeIndex = this.ws.length - 1], this.chunk = "", this.next = -1
      }
      reset(JJ, cJ) {
        if (cJ ? (this.token = cJ, cJ.start = JJ, cJ.lookAhead = JJ + 1, cJ.value = cJ.extended = -1) : this.token = YJ, this.pos != JJ) {
          if (this.pos = JJ, JJ == this.end) return this.setDone(), this;
          for (; JJ < this.range.from;) this.range = this.ws[--this.rangeIndex];
          for (; JJ >= this.range.to;) this.range = this.ws[++this.rangeIndex];
          JJ >= this.chunkPos && JJ < this.chunkPos + this.chunk.length ? this.chunkOff = JJ - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(JJ, cJ) {
        if (JJ >= this.chunkPos && cJ <= this.chunkPos + this.chunk.length) return this.chunk.slice(JJ - this.chunkPos, cJ - this.chunkPos);
        if (JJ >= this.chunk2Pos && cJ <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(JJ - this.chunk2Pos, cJ - this.chunk2Pos);
        if (JJ >= this.range.from && cJ <= this.range.to) return this.input.read(JJ, cJ);
        let ZJ = "";
        for (let FJ of this.ws) {
          if (FJ.from >= cJ) break;
          FJ.to > JJ && (ZJ += this.input.read(Math.max(FJ.from, JJ), Math.min(FJ.to, cJ)))
        }
        return ZJ
      }
    }
    class DJ {
      constructor(JJ, cJ) {
        this.data = JJ, this.id = cJ
      }
      token(JJ, cJ) {
        let {
          parser: ZJ
        } = cJ.p;
        GJ(this.data, JJ, cJ, this.id, ZJ.data, ZJ.tokenPrecTable)
      }
    }
    DJ.prototype.contextual = DJ.prototype.fallback = DJ.prototype.extend = !1;
    class sJ {
      constructor(JJ, cJ, ZJ) {
        this.precTable = cJ, this.elseToken = ZJ, this.data = "string" == typeof JJ ? qJ(JJ) : JJ
      }
      token(JJ, cJ) {
        let ZJ = JJ.pos,
          FJ = 0;
        for (;;) {
          let ZJ = JJ.next < 0,
            UJ = JJ.resolveOffset(1, 1);
          if (GJ(this.data, JJ, cJ, 0, this.data, this.precTable), JJ.token.value > -1) break;
          if (null == this.elseToken) return;
          if (ZJ || FJ++, null == UJ) break;
          JJ.reset(UJ, JJ.token)
        }
        FJ && (JJ.reset(ZJ, JJ.token), JJ.acceptToken(this.elseToken, FJ))
      }
    }
    sJ.prototype.contextual = DJ.prototype.fallback = DJ.prototype.extend = !1;
    class nJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = JJ, this.contextual = !!cJ.contextual, this.fallback = !!cJ.fallback, this.extend = !!cJ.extend
      }
    }

    function GJ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      let XJ = 0,
        AJ = 1 << FJ,
        {
          dialect: qJ
        } = ZJ.p.parser;
      JJ: for (; 0 != (AJ & JJ[XJ]);) {
        let ZJ = JJ[XJ + 1];
        for (let hJ = XJ + 3; hJ < ZJ; hJ += 2)
          if ((JJ[hJ + 1] & AJ) > 0) {
            let ZJ = JJ[hJ];
            if (qJ.allows(ZJ) && (-1 == cJ.token.value || cJ.token.value == ZJ || xJ(ZJ, cJ.token.value, UJ, eJ))) {
              cJ.acceptToken(ZJ);
              break
            }
          } let FJ = cJ.next,
          jJ = 0,
          YJ = JJ[XJ + 2];
        if (!(cJ.next < 0 && YJ > jJ && 65535 == JJ[ZJ + 3 * YJ - 3])) {
          for (; jJ < YJ;) {
            let UJ = jJ + YJ >> 1,
              eJ = ZJ + UJ + (UJ << 1),
              AJ = JJ[eJ],
              qJ = JJ[eJ + 1] || 65536;
            if (FJ < AJ) YJ = UJ;
            else {
              if (!(FJ >= qJ)) {
                XJ = JJ[eJ + 2], cJ.advance();
                continue JJ
              }
              jJ = UJ + 1
            }
          }
          break
        }
        XJ = JJ[ZJ + 3 * YJ - 1]
      }
    }

    function fJ(JJ, cJ, ZJ) {
      for (let FJ, UJ = cJ; 65535 != (FJ = JJ[UJ]); UJ++)
        if (FJ == ZJ) return UJ - cJ;
      return -1
    }

    function xJ(JJ, cJ, ZJ, FJ) {
      let UJ = fJ(ZJ, FJ, cJ);
      return UJ < 0 || fJ(ZJ, FJ, JJ) < UJ
    }
    const rJ = "undefined" != typeof process && {
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
    let vJ = null;

    function mJ(JJ, cJ, ZJ) {
      let UJ = JJ.cursor(FJ.f.IncludeAnonymous);
      for (UJ.moveTo(cJ);;)
        if (!(ZJ < 0 ? UJ.childBefore(cJ) : UJ.childAfter(cJ)))
          for (;;) {
            if ((ZJ < 0 ? UJ.to < cJ : UJ.from > cJ) && !UJ.type.isError) return ZJ < 0 ? Math.max(0, Math.min(UJ.to - 1, cJ - 25)) : Math.min(JJ.length, Math.max(UJ.from + 1, cJ + 25));
            if (ZJ < 0 ? UJ.prevSibling() : UJ.nextSibling()) break;
            if (!UJ.parent()) return ZJ < 0 ? 0 : JJ.length
          }
    }
    class QJ {
      constructor(JJ, cJ) {
        this.fragments = JJ, this.nodeSet = cJ, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let JJ = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (JJ) {
          for (this.safeFrom = JJ.openStart ? mJ(JJ.tree, JJ.from + JJ.offset, 1) - JJ.offset : JJ.from, this.safeTo = JJ.openEnd ? mJ(JJ.tree, JJ.to + JJ.offset, -1) - JJ.offset : JJ.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(JJ.tree), this.start.push(-JJ.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(JJ) {
        if (JJ < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= JJ;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let cJ = this.trees.length - 1;
          if (cJ < 0) return this.nextFragment(), null;
          let ZJ = this.trees[cJ],
            UJ = this.index[cJ];
          if (UJ == ZJ.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let eJ = ZJ.children[UJ],
            XJ = this.start[cJ] + ZJ.positions[UJ];
          if (XJ > JJ) return this.nextStart = XJ, null;
          if (eJ instanceof FJ.t) {
            if (XJ == JJ) {
              if (XJ < this.safeFrom) return null;
              let JJ = XJ + eJ.length;
              if (JJ <= this.safeTo) {
                let cJ = eJ.prop(FJ.h.lookAhead);
                if (!cJ || JJ + cJ < this.fragment.to) return eJ
              }
            }
            this.index[cJ]++, XJ + eJ.length >= Math.max(this.safeFrom, JJ) && (this.trees.push(eJ), this.start.push(XJ), this.index.push(0))
          } else this.index[cJ]++, this.nextStart = XJ + eJ.length
        }
      }
    }
    class EJ {
      constructor(JJ, cJ) {
        this.stream = cJ, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = JJ.tokenizers.map((JJ => new jJ))
      }
      getActions(JJ) {
        let cJ = 0,
          ZJ = null,
          {
            parser: FJ
          } = JJ.p,
          {
            tokenizers: UJ
          } = FJ,
          eJ = FJ.stateSlot(JJ.state, 3),
          XJ = JJ.curContext ? JJ.curContext.hash : 0,
          AJ = 0;
        for (let qJ = 0; qJ < UJ.length; qJ++) {
          if (0 == (1 << qJ & eJ)) continue;
          let FJ = UJ[qJ],
            jJ = this.tokens[qJ];
          if ((!ZJ || FJ.fallback) && ((FJ.contextual || jJ.start != JJ.pos || jJ.mask != eJ || jJ.context != XJ) && (this.updateCachedToken(jJ, FJ, JJ), jJ.mask = eJ, jJ.context = XJ), jJ.lookAhead > jJ.end + 25 && (AJ = Math.max(jJ.lookAhead, AJ)), 0 != jJ.value)) {
            let UJ = cJ;
            if (jJ.extended > -1 && (cJ = this.addActions(JJ, jJ.extended, jJ.end, cJ)), cJ = this.addActions(JJ, jJ.value, jJ.end, cJ), !FJ.extend && (ZJ = jJ, cJ > UJ)) break
          }
        }
        for (; this.actions.length > cJ;) this.actions.pop();
        return AJ && JJ.setLookAhead(AJ), ZJ || JJ.pos != this.stream.end || (ZJ = new jJ, ZJ.value = JJ.p.parser.eofTerm, ZJ.start = ZJ.end = JJ.pos, cJ = this.addActions(JJ, ZJ.value, ZJ.end, cJ)), this.mainToken = ZJ, this.actions
      }
      getMainToken(JJ) {
        if (this.mainToken) return this.mainToken;
        let cJ = new jJ,
          {
            pos: ZJ,
            p: FJ
          } = JJ;
        return cJ.start = ZJ, cJ.end = Math.min(ZJ + 1, FJ.stream.end), cJ.value = ZJ == FJ.stream.end ? FJ.parser.eofTerm : 0, cJ
      }
      updateCachedToken(JJ, cJ, ZJ) {
        let FJ = this.stream.clipPos(ZJ.pos);
        if (cJ.token(this.stream.reset(FJ, JJ), ZJ), JJ.value > -1) {
          let {
            parser: cJ
          } = ZJ.p;
          for (let FJ = 0; FJ < cJ.specialized.length; FJ++)
            if (cJ.specialized[FJ] == JJ.value) {
              let UJ = cJ.specializers[FJ](this.stream.read(JJ.start, JJ.end), ZJ);
              if (UJ >= 0 && ZJ.p.parser.dialect.allows(UJ >> 1)) {
                0 == (1 & UJ) ? JJ.value = UJ >> 1 : JJ.extended = UJ >> 1;
                break
              }
            }
        } else JJ.value = 0, JJ.end = this.stream.clipPos(FJ + 1)
      }
      putAction(JJ, cJ, ZJ, FJ) {
        for (let UJ = 0; UJ < FJ; UJ += 3)
          if (this.actions[UJ] == JJ) return FJ;
        return this.actions[FJ++] = JJ, this.actions[FJ++] = cJ, this.actions[FJ++] = ZJ, FJ
      }
      addActions(JJ, cJ, ZJ, FJ) {
        let {
          state: UJ
        } = JJ, {
          parser: eJ
        } = JJ.p, {
          data: XJ
        } = eJ;
        for (let AJ = 0; AJ < 2; AJ++)
          for (let JJ = eJ.stateSlot(UJ, AJ ? 2 : 1);; JJ += 3) {
            if (65535 == XJ[JJ]) {
              if (1 != XJ[JJ + 1]) {
                0 == FJ && 2 == XJ[JJ + 1] && (FJ = this.putAction(MJ(XJ, JJ + 2), cJ, ZJ, FJ));
                break
              }
              JJ = MJ(XJ, JJ + 2)
            }
            XJ[JJ] == cJ && (FJ = this.putAction(MJ(XJ, JJ + 1), cJ, ZJ, FJ))
          }
        return FJ
      }
    }
    class VJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.parser = JJ, this.input = cJ, this.ws = FJ, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new hJ(cJ, FJ), this.tokens = new EJ(JJ, this.stream), this.topTerm = JJ.top[1];
        let {
          from: eJ
        } = FJ[0];
        this.stacks = [UJ.start(this, JJ.top[0], eJ)], this.fragments = ZJ.length && this.stream.end - eJ > 4 * JJ.bufferLength ? new QJ(ZJ, JJ.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let JJ, cJ, ZJ = this.stacks,
          FJ = this.minStackPos,
          UJ = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == ZJ.length) {
          let [JJ] = ZJ;
          for (; JJ.forceReduce() && JJ.stack.length && JJ.stack[JJ.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let eJ = 0; eJ < ZJ.length; eJ++) {
          let XJ = ZJ[eJ];
          for (;;) {
            if (this.tokens.mainToken = null, XJ.pos > FJ) UJ.push(XJ);
            else {
              if (this.advanceStack(XJ, UJ, ZJ)) continue;
              {
                JJ || (JJ = [], cJ = []), JJ.push(XJ);
                let ZJ = this.tokens.getMainToken(XJ);
                cJ.push(ZJ.value, ZJ.end)
              }
            }
            break
          }
        }
        if (!UJ.length) {
          let cJ = JJ && function(JJ) {
            let cJ = null;
            for (let ZJ of JJ) {
              let JJ = ZJ.p.stoppedAt;
              (ZJ.pos == ZJ.p.stream.end || null != JJ && ZJ.pos > JJ) && ZJ.p.parser.stateFlag(ZJ.state, 2) && (!cJ || cJ.score < ZJ.score) && (cJ = ZJ)
            }
            return cJ
          }(JJ);
          if (cJ) return rJ && console.log("Finish with " + this.stackID(cJ)), this.stackToTree(cJ);
          if (this.parser.strict) throw rJ && JJ && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + FJ);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && JJ) {
          let ZJ = null != this.stoppedAt && JJ[0].pos > this.stoppedAt ? JJ[0] : this.runRecovery(JJ, cJ, UJ);
          if (ZJ) return rJ && console.log("Force-finish " + this.stackID(ZJ)), this.stackToTree(ZJ.forceAll())
        }
        if (this.recovering) {
          let JJ = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (UJ.length > JJ)
            for (UJ.sort(((JJ, cJ) => cJ.score - JJ.score)); UJ.length > JJ;) UJ.pop();
          UJ.some((JJ => JJ.reducePos > FJ)) && this.recovering--
        } else if (UJ.length > 1) {
          JJ: for (let JJ = 0; JJ < UJ.length - 1; JJ++) {
            let cJ = UJ[JJ];
            for (let ZJ = JJ + 1; ZJ < UJ.length; ZJ++) {
              let FJ = UJ[ZJ];
              if (cJ.sameState(FJ) || cJ.buffer.length > 500 && FJ.buffer.length > 500) {
                if (!((cJ.score - FJ.score || cJ.buffer.length - FJ.buffer.length) > 0)) {
                  UJ.splice(JJ--, 1);
                  continue JJ
                }
                UJ.splice(ZJ--, 1)
              }
            }
          }
          UJ.length > 12 && (UJ.sort(((JJ, cJ) => cJ.score - JJ.score)), UJ.splice(12, UJ.length - 12))
        }
        this.minStackPos = UJ[0].pos;
        for (let eJ = 1; eJ < UJ.length; eJ++) UJ[eJ].pos < this.minStackPos && (this.minStackPos = UJ[eJ].pos);
        return null
      }
      stopAt(JJ) {
        if (null != this.stoppedAt && this.stoppedAt < JJ) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = JJ
      }
      advanceStack(JJ, cJ, ZJ) {
        let UJ = JJ.pos,
          {
            parser: eJ
          } = this,
          XJ = rJ ? this.stackID(JJ) + " -> " : "";
        if (null != this.stoppedAt && UJ > this.stoppedAt) return JJ.forceReduce() ? JJ : null;
        if (this.fragments) {
          let cJ = JJ.curContext && JJ.curContext.tracker.strict,
            ZJ = cJ ? JJ.curContext.hash : 0;
          for (let AJ = this.fragments.nodeAt(UJ); AJ;) {
            let UJ = this.parser.nodeSet.types[AJ.type.id] == AJ.type ? eJ.getGoto(JJ.state, AJ.type.id) : -1;
            if (UJ > -1 && AJ.length && (!cJ || (AJ.prop(FJ.h.contextHash) || 0) == ZJ)) return JJ.useNode(AJ, UJ), rJ && console.log(XJ + this.stackID(JJ) + ` (via reuse of ${eJ.getName(AJ.type.id)})`), !0;
            if (!(AJ instanceof FJ.t) || 0 == AJ.children.length || AJ.positions[0] > 0) break;
            let qJ = AJ.children[0];
            if (!(qJ instanceof FJ.t && 0 == AJ.positions[0])) break;
            AJ = qJ
          }
        }
        let AJ = eJ.stateSlot(JJ.state, 4);
        if (AJ > 0) return JJ.reduce(AJ), rJ && console.log(XJ + this.stackID(JJ) + ` (via always-reduce ${eJ.getName(65535&AJ)})`), !0;
        if (JJ.stack.length >= 8400)
          for (; JJ.stack.length > 6e3 && JJ.forceReduce(););
        let qJ = this.tokens.getActions(JJ);
        for (let FJ = 0; FJ < qJ.length;) {
          let AJ = qJ[FJ++],
            jJ = qJ[FJ++],
            YJ = qJ[FJ++],
            hJ = FJ == qJ.length || !ZJ,
            DJ = hJ ? JJ : JJ.split(),
            sJ = this.tokens.mainToken;
          if (DJ.apply(AJ, jJ, sJ ? sJ.start : DJ.pos, YJ), rJ && console.log(XJ + this.stackID(DJ) + ` (via ${0==(65536&AJ)?"shift":`reduce of ${eJ.getName(65535&AJ)}`} for ${eJ.getName(jJ)} @ ${UJ}${DJ==JJ?"":", split"})`), hJ) return !0;
          DJ.pos > UJ ? cJ.push(DJ) : ZJ.push(DJ)
        }
        return !1
      }
      advanceFully(JJ, cJ) {
        let ZJ = JJ.pos;
        for (;;) {
          if (!this.advanceStack(JJ, null, null)) return !1;
          if (JJ.pos > ZJ) return KJ(JJ, cJ), !0
        }
      }
      runRecovery(JJ, cJ, ZJ) {
        let FJ = null,
          UJ = !1;
        for (let eJ = 0; eJ < JJ.length; eJ++) {
          let XJ = JJ[eJ],
            AJ = cJ[eJ << 1],
            qJ = cJ[1 + (eJ << 1)],
            jJ = rJ ? this.stackID(XJ) + " -> " : "";
          if (XJ.deadEnd) {
            if (UJ) continue;
            if (UJ = !0, XJ.restart(), rJ && console.log(jJ + this.stackID(XJ) + " (restarted)"), this.advanceFully(XJ, ZJ)) continue
          }
          let YJ = XJ.split(),
            hJ = jJ;
          for (let JJ = 0; JJ < 10 && YJ.forceReduce(); JJ++) {
            if (rJ && console.log(hJ + this.stackID(YJ) + " (via force-reduce)"), this.advanceFully(YJ, ZJ)) break;
            rJ && (hJ = this.stackID(YJ) + " -> ")
          }
          for (let JJ of XJ.recoverByInsert(AJ)) rJ && console.log(jJ + this.stackID(JJ) + " (via recover-insert)"), this.advanceFully(JJ, ZJ);
          this.stream.end > XJ.pos ? (qJ == XJ.pos && (qJ++, AJ = 0), XJ.recoverByDelete(AJ, qJ), rJ && console.log(jJ + this.stackID(XJ) + ` (via recover-delete ${this.parser.getName(AJ)})`), KJ(XJ, ZJ)) : (!FJ || FJ.score < YJ.score) && (FJ = YJ)
        }
        return FJ
      }
      stackToTree(JJ) {
        return JJ.close(), FJ.t.build({
          buffer: AJ.create(JJ),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.ws[0].from,
          length: JJ.pos - this.ws[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(JJ) {
        let cJ = (vJ || (vJ = new WeakMap)).get(JJ);
        return cJ || vJ.set(JJ, cJ = String.fromCodePoint(this.nextStackID++)), cJ + JJ
      }
    }

    function KJ(JJ, cJ) {
      for (let ZJ = 0; ZJ < cJ.length; ZJ++) {
        let FJ = cJ[ZJ];
        if (FJ.pos == JJ.pos && FJ.sameState(JJ)) return void(cJ[ZJ].score < JJ.score && (cJ[ZJ] = JJ))
      }
      cJ.push(JJ)
    }
    class yJ {
      constructor(JJ, cJ, ZJ) {
        this.source = JJ, this.flags = cJ, this.disabled = ZJ
      }
      allows(JJ) {
        return !this.disabled || 0 == this.disabled[JJ]
      }
    }
    const SJ = JJ => JJ;
    class IJ extends FJ.o {
      constructor(JJ) {
        if (super(), this.wrappers = [], 14 != JJ.version) throw new RangeError(`Parser version (${JJ.version}) doesn't match runtime version (14)`);
        let cJ = JJ.nodeNames.split(" ");
        this.minRepeatTerm = cJ.length;
        for (let FJ = 0; FJ < JJ.repeatNodeCount; FJ++) cJ.push("");
        let ZJ = Object.keys(JJ.topRules).map((cJ => JJ.topRules[cJ][1])),
          UJ = [];
        for (let FJ = 0; FJ < cJ.length; FJ++) UJ.push([]);

        function eJ(JJ, cJ, ZJ) {
          UJ[JJ].push([cJ, cJ.deserialize(String(ZJ))])
        }
        if (JJ.nodeProps)
          for (let AJ of JJ.nodeProps) {
            let JJ = AJ[0];
            "string" == typeof JJ && (JJ = FJ.h[JJ]);
            for (let cJ = 1; cJ < AJ.length;) {
              let ZJ = AJ[cJ++];
              if (ZJ >= 0) eJ(ZJ, JJ, AJ[cJ++]);
              else {
                let FJ = AJ[cJ + -ZJ];
                for (let UJ = -ZJ; UJ > 0; UJ--) eJ(AJ[cJ++], JJ, FJ);
                cJ++
              }
            }
          }
        this.nodeSet = new FJ.i(cJ.map(((cJ, eJ) => FJ.k.define({
          name: eJ >= this.minRepeatTerm ? void 0 : cJ,
          id: eJ,
          props: UJ[eJ],
          top: ZJ.indexOf(eJ) > -1,
          error: 0 == eJ,
          skipped: JJ.skippedNodes && JJ.skippedNodes.indexOf(eJ) > -1
        })))), JJ.propSources && (this.nodeSet = this.nodeSet.extend(...JJ.propSources)), this.strict = !1, this.bufferLength = FJ.b;
        let XJ = qJ(JJ.tokenData);
        this.context = JJ.context, this.specializerSpecs = JJ.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let FJ = 0; FJ < this.specializerSpecs.length; FJ++) this.specialized[FJ] = this.specializerSpecs[FJ].term;
        this.specializers = this.specializerSpecs.map(bJ), this.states = qJ(JJ.states, Uint32Array), this.data = qJ(JJ.stateData), this.goto = qJ(JJ.goto), this.maxTerm = JJ.maxTerm, this.tokenizers = JJ.tokenizers.map((JJ => "number" == typeof JJ ? new DJ(XJ, JJ) : JJ)), this.topRules = JJ.topRules, this.dialects = JJ.dialects || {}, this.dynamicPrecedences = JJ.dynamicPrecedences || null, this.tokenPrecTable = JJ.tokenPrec, this.termNames = JJ.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(JJ, cJ, ZJ) {
        let FJ = new VJ(this, JJ, cJ, ZJ);
        for (let UJ of this.wrappers) FJ = UJ(FJ, JJ, cJ, ZJ);
        return FJ
      }
      getGoto(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = this.goto;
        if (cJ >= FJ[0]) return -1;
        for (let UJ = FJ[cJ + 1];;) {
          let cJ = FJ[UJ++],
            eJ = 1 & cJ,
            XJ = FJ[UJ++];
          if (eJ && ZJ) return XJ;
          for (let ZJ = UJ + (cJ >> 1); UJ < ZJ; UJ++)
            if (FJ[UJ] == JJ) return XJ;
          if (eJ) return -1
        }
      }
      hasAction(JJ, cJ) {
        let ZJ = this.data;
        for (let FJ = 0; FJ < 2; FJ++)
          for (let UJ, eJ = this.stateSlot(JJ, FJ ? 2 : 1);; eJ += 3) {
            if (65535 == (UJ = ZJ[eJ])) {
              if (1 != ZJ[eJ + 1]) {
                if (2 == ZJ[eJ + 1]) return MJ(ZJ, eJ + 2);
                break
              }
              UJ = ZJ[eJ = MJ(ZJ, eJ + 2)]
            }
            if (UJ == cJ || 0 == UJ) return MJ(ZJ, eJ + 1)
          }
        return 0
      }
      stateSlot(JJ, cJ) {
        return this.states[6 * JJ + cJ]
      }
      stateFlag(JJ, cJ) {
        return (this.stateSlot(JJ, 0) & cJ) > 0
      }
      validAction(JJ, cJ) {
        return !!this.allActions(JJ, (JJ => JJ == cJ || null))
      }
      allActions(JJ, cJ) {
        let ZJ = this.stateSlot(JJ, 4),
          FJ = ZJ ? cJ(ZJ) : void 0;
        for (let UJ = this.stateSlot(JJ, 1); null == FJ; UJ += 3) {
          if (65535 == this.data[UJ]) {
            if (1 != this.data[UJ + 1]) break;
            UJ = MJ(this.data, UJ + 2)
          }
          FJ = cJ(MJ(this.data, UJ + 1))
        }
        return FJ
      }
      nextStates(JJ) {
        let cJ = [];
        for (let ZJ = this.stateSlot(JJ, 1);; ZJ += 3) {
          if (65535 == this.data[ZJ]) {
            if (1 != this.data[ZJ + 1]) break;
            ZJ = MJ(this.data, ZJ + 2)
          }
          if (0 == (1 & this.data[ZJ + 2])) {
            let JJ = this.data[ZJ + 1];
            cJ.some(((cJ, ZJ) => 1 & ZJ && cJ == JJ)) || cJ.push(this.data[ZJ], JJ)
          }
        }
        return cJ
      }
      configure(JJ) {
        let cJ = Object.assign(Object.create(IJ.prototype), this);
        if (JJ.props && (cJ.nodeSet = this.nodeSet.extend(...JJ.props)), JJ.top) {
          let ZJ = this.topRules[JJ.top];
          if (!ZJ) throw new RangeError(`Invalid top rule name ${JJ.top}`);
          cJ.top = ZJ
        }
        return JJ.tokenizers && (cJ.tokenizers = this.tokenizers.map((cJ => {
          let ZJ = JJ.tokenizers.find((JJ => JJ.from == cJ));
          return ZJ ? ZJ.to : cJ
        }))), JJ.specializers && (cJ.specializers = this.specializers.slice(), cJ.specializerSpecs = this.specializerSpecs.map(((ZJ, FJ) => {
          let UJ = JJ.specializers.find((JJ => JJ.from == ZJ.external));
          if (!UJ) return ZJ;
          let eJ = Object.assign(Object.assign({}, ZJ), {
            external: UJ.to
          });
          return cJ.specializers[FJ] = bJ(eJ), eJ
        }))), JJ.contextTracker && (cJ.context = JJ.contextTracker), JJ.dialect && (cJ.dialect = this.parseDialect(JJ.dialect)), null != JJ.strict && (cJ.strict = JJ.strict), JJ.wrap && (cJ.wrappers = cJ.wrappers.concat(JJ.wrap)), null != JJ.bufferLength && (cJ.bufferLength = JJ.bufferLength), cJ
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(JJ) {
        return this.termNames ? this.termNames[JJ] : String(JJ <= this.maxNode && this.nodeSet.types[JJ].name || JJ)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(JJ) {
        let cJ = this.dynamicPrecedences;
        return null == cJ ? 0 : cJ[JJ] || 0
      }
      parseDialect(JJ) {
        let cJ = Object.keys(this.dialects),
          ZJ = cJ.map((() => !1));
        if (JJ)
          for (let UJ of JJ.split(" ")) {
            let JJ = cJ.indexOf(UJ);
            JJ >= 0 && (ZJ[JJ] = !0)
          }
        let FJ = null;
        for (let UJ = 0; UJ < cJ.length; UJ++)
          if (!ZJ[UJ])
            for (let JJ, ZJ = this.dialects[cJ[UJ]]; 65535 != (JJ = this.data[ZJ++]);)(FJ || (FJ = new Uint8Array(this.maxTerm + 1)))[JJ] = 1;
        return new yJ(JJ, ZJ, FJ)
      }
      static deserialize(JJ) {
        return new IJ(JJ)
      }
    }

    function MJ(JJ, cJ) {
      return JJ[cJ] | JJ[cJ + 1] << 16
    }

    function bJ(JJ) {
      if (JJ.external) {
        let cJ = JJ.extend ? 1 : 0;
        return (ZJ, FJ) => JJ.external(ZJ, FJ) << 1 | cJ
      }
      return JJ.get
    }
    var wJ = ZJ(40084);
    const WJ = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      gJ = new class {
        constructor(JJ) {
          this.start = JJ.start, this.shift = JJ.shift || SJ, this.reduce = JJ.reduce || SJ, this.reuse = JJ.reuse || SJ, this.hash = JJ.hash || (() => 0), this.strict = !1 !== JJ.strict
        }
      }({
        start: !1,
        shift: (JJ, cJ) => 5 == cJ || 6 == cJ || 320 == cJ ? JJ : 321 == cJ,
        strict: !1
      }),
      HJ = new nJ(((JJ, cJ) => {
        let {
          next: ZJ
        } = JJ;
        (125 == ZJ || -1 == ZJ || cJ.context) && JJ.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      PJ = new nJ(((JJ, cJ) => {
        let ZJ, {
          next: FJ
        } = JJ;
        WJ.indexOf(FJ) > -1 || (47 != FJ || 47 != (ZJ = JJ.peek(1)) && 42 != ZJ) && (125 == FJ || 59 == FJ || -1 == FJ || cJ.context || JJ.acceptToken(316))
      }), {
        contextual: !0
      }),
      kJ = new nJ(((JJ, cJ) => {
        91 != JJ.next || cJ.context || JJ.acceptToken(317)
      }), {
        contextual: !0
      }),
      pJ = new nJ(((JJ, cJ) => {
        let {
          next: ZJ
        } = JJ;
        if (43 == ZJ || 45 == ZJ) {
          if (JJ.advance(), ZJ == JJ.next) {
            JJ.advance();
            let ZJ = !cJ.context && cJ.canShift(1);
            JJ.acceptToken(ZJ ? 1 : 2)
          }
        } else 63 == ZJ && 46 == JJ.peek(1) && (JJ.advance(), JJ.advance(), (JJ.next < 48 || JJ.next > 57) && JJ.acceptToken(3))
      }), {
        contextual: !0
      });

    function dJ(JJ, cJ) {
      return JJ >= 65 && JJ <= 90 || JJ >= 97 && JJ <= 122 || 95 == JJ || JJ >= 192 || !cJ && JJ >= 48 && JJ <= 57
    }
    const zJ = new nJ(((JJ, cJ) => {
        if (60 != JJ.next || !cJ.dialectEnabled(0)) return;
        if (JJ.advance(), 47 == JJ.next) return;
        let ZJ = 0;
        for (; WJ.indexOf(JJ.next) > -1;) JJ.advance(), ZJ++;
        if (dJ(JJ.next, !0)) {
          for (JJ.advance(), ZJ++; dJ(JJ.next, !1);) JJ.advance(), ZJ++;
          for (; WJ.indexOf(JJ.next) > -1;) JJ.advance(), ZJ++;
          if (44 == JJ.next) return;
          for (let cJ = 0;; cJ++) {
            if (7 == cJ) {
              if (!dJ(JJ.next, !0)) return;
              break
            }
            if (JJ.next != "extends".charCodeAt(cJ)) break;
            JJ.advance(), ZJ++
          }
        }
        JJ.acceptToken(4, -ZJ)
      })),
      NJ = (0, wJ.e)({
        "get set async static": wJ.j.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": wJ.j.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": wJ.j.operatorKeyword,
        "let var const using function class extends": wJ.j.definitionKeyword,
        "import export from": wJ.j.moduleKeyword,
        "with debugger new": wJ.j.keyword,
        TemplateString: wJ.j.special(wJ.j.string),
        super: wJ.j.atom,
        BooleanLiteral: wJ.j.bool,
        this: wJ.j.self,
        null: wJ.j.null,
        Star: wJ.j.modifier,
        VariableName: wJ.j.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": wJ.j.function(wJ.j.variableName),
        VariableDefinition: wJ.j.definition(wJ.j.variableName),
        Label: wJ.j.labelName,
        PropertyName: wJ.j.propertyName,
        PrivatePropertyName: wJ.j.special(wJ.j.propertyName),
        "CallExpression/MemberExpression/PropertyName": wJ.j.function(wJ.j.propertyName),
        "FunctionDeclaration/VariableDefinition": wJ.j.function(wJ.j.definition(wJ.j.variableName)),
        "ClassDeclaration/VariableDefinition": wJ.j.definition(wJ.j.className),
        "NewExpression/VariableName": wJ.j.className,
        PropertyDefinition: wJ.j.definition(wJ.j.propertyName),
        PrivatePropertyDefinition: wJ.j.definition(wJ.j.special(wJ.j.propertyName)),
        UpdateOp: wJ.j.updateOperator,
        "LineComment Hashbang": wJ.j.lineComment,
        BlockComment: wJ.j.blockComment,
        Number: wJ.j.number,
        String: wJ.j.string,
        Escape: wJ.j.escape,
        ArithOp: wJ.j.arithmeticOperator,
        LogicOp: wJ.j.logicOperator,
        BitOp: wJ.j.bitwiseOperator,
        CompareOp: wJ.j.compareOperator,
        RegExp: wJ.j.regexp,
        Equals: wJ.j.definitionOperator,
        Arrow: wJ.j.function(wJ.j.punctuation),
        ": Spread": wJ.j.punctuation,
        "( )": wJ.j.paren,
        "[ ]": wJ.j.squareBracket,
        "{ }": wJ.j.brace,
        "InterpolationStart InterpolationEnd": wJ.j.special(wJ.j.brace),
        ".": wJ.j.derefOperator,
        ", ;": wJ.j.separator,
        "@": wJ.j.meta,
        TypeName: wJ.j.typeName,
        TypeDefinition: wJ.j.definition(wJ.j.typeName),
        "type enum interface implements namespace module declare": wJ.j.definitionKeyword,
        "abstract global Privacy readonly override": wJ.j.modifier,
        "is keyof unique infer asserts": wJ.j.operatorKeyword,
        JSXAttributeValue: wJ.j.attributeValue,
        JSXText: wJ.j.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": wJ.j.angleBracket,
        "JSXIdentifier JSXNameSpacedName": wJ.j.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": wJ.j.attributeName,
        "JSXBuiltin/JSXIdentifier": wJ.j.standard(wJ.j.tagName)
      }),
      OJ = {
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
      TJ = {
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
      CJ = {
        __proto__: null,
        "<": 193
      },
      uJ = IJ.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: gJ,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [NJ],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [PJ, kJ, pJ, zJ, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, HJ, new sJ("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new sJ("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: JJ => OJ[JJ] || -1
        }, {
          term: 343,
          get: JJ => TJ[JJ] || -1
        }, {
          term: 95,
          get: JJ => CJ[JJ] || -1
        }],
        tokenPrec: 15201
      });
    var iJ = ZJ(40078),
      RJ = ZJ(40060),
      LJ = ZJ(40065),
      aJ = ZJ(40052);
    const BJ = [(0, aJ.w)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, aJ.w)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, aJ.w)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, aJ.w)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, aJ.w)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, aJ.w)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, aJ.w)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, aJ.w)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, aJ.w)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, aJ.w)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, aJ.w)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      tJ = BJ.concat([(0, aJ.w)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, aJ.w)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, aJ.w)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      oJ = new FJ.n,
      lJ = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function Jc(JJ) {
      return (cJ, ZJ) => {
        let FJ = cJ.node.getChild("VariableDefinition");
        return FJ && ZJ(FJ, JJ), !0
      }
    }
    const cc = ["FunctionDeclaration"],
      Zc = {
        FunctionDeclaration: Jc("function"),
        ClassDeclaration: Jc("class"),
        ClassExpression: () => !0,
        EnumDeclaration: Jc("constant"),
        TypeAliasDeclaration: Jc("type"),
        NamespaceDeclaration: Jc("namespace"),
        VariableDefinition(JJ, cJ) {
          JJ.matchContext(cc) || cJ(JJ, "variable")
        },
        TypeDefinition(JJ, cJ) {
          cJ(JJ, "type")
        },
        __proto__: null
      };

    function Fc(JJ, cJ) {
      let ZJ = oJ.get(cJ);
      if (ZJ) return ZJ;
      let UJ = [],
        eJ = !0;

      function XJ(cJ, ZJ) {
        let FJ = JJ.sliceString(cJ.from, cJ.to);
        UJ.push({
          label: FJ,
          type: ZJ
        })
      }
      return cJ.cursor(FJ.f.IncludeAnonymous).iterate((cJ => {
        if (eJ) eJ = !1;
        else if (cJ.name) {
          let JJ = Zc[cJ.name];
          if (JJ && JJ(cJ, XJ) || lJ.has(cJ.name)) return !1
        } else if (cJ.to - cJ.from > 8192) {
          for (let ZJ of Fc(JJ, cJ.node)) UJ.push(ZJ);
          return !1
        }
      })), oJ.set(cJ, UJ), UJ
    }
    const Uc = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      ec = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function Xc(JJ) {
      let cJ = (0, iJ.ub)(JJ.state).resolveInner(JJ.pos, -1);
      if (ec.indexOf(cJ.name) > -1) return null;
      let ZJ = "VariableName" == cJ.name || cJ.to - cJ.from < 20 && Uc.test(JJ.state.sliceDoc(cJ.from, cJ.to));
      if (!ZJ && !JJ.explicit) return null;
      let FJ = [];
      for (let UJ = cJ; UJ; UJ = UJ.parent) lJ.has(UJ.name) && (FJ = FJ.concat(Fc(JJ.state.doc, UJ)));
      return {
        options: FJ,
        from: ZJ ? cJ.from : JJ.pos,
        validFor: Uc
      }
    }
    const Ac = iJ.g.define({
        name: "javascript",
        parser: uJ.configure({
          props: [iJ.Y.add({
            IfStatement: (0, iJ.o)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, iJ.o)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: iJ.B,
            SwitchBody: JJ => {
              let cJ = JJ.textAfter,
                ZJ = /^\s*\}/.test(cJ),
                FJ = /^\s*(case|default)\b/.test(cJ);
              return JJ.baseIndent + (ZJ ? 0 : FJ ? 1 : 2) * JJ.unit
            },
            Block: (0, iJ.x)({
              closing: "}"
            }),
            ArrowFunction: JJ => JJ.baseIndent + JJ.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, iJ.o)({
              except: /^\s*{/
            }),
            JSXElement(JJ) {
              let cJ = /^\s*<\//.test(JJ.textAfter);
              return JJ.lineIndent(JJ.node.from) + (cJ ? 0 : JJ.unit)
            },
            JSXEscape(JJ) {
              let cJ = /\s*\}/.test(JJ.textAfter);
              return JJ.lineIndent(JJ.node.from) + (cJ ? 0 : JJ.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": JJ => JJ.column(JJ.node.from) + JJ.unit
          }), iJ.L.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": iJ.G,
            BlockComment: JJ => ({
              from: JJ.from + 2,
              to: JJ.to - 2
            }),
            JSXElement(JJ) {
              let cJ = JJ.firstChild;
              if (!cJ || "JSXSelfClosingTag" == cJ.name) return null;
              let ZJ = JJ.lastChild;
              return {
                from: cJ.to,
                to: ZJ.type.isError ? JJ.to : ZJ.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(JJ) {
              var cJ;
              let ZJ = null === (cJ = JJ.firstChild) || void 0 === cJ ? void 0 : cJ.nextSibling,
                FJ = JJ.lastChild;
              return !ZJ || ZJ.type.isError ? null : {
                from: ZJ.to,
                to: FJ.type.isError ? JJ.to : FJ.from
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
      qc = {
        test: JJ => /^JSX/.test(JJ.name),
        facet: (0, iJ.t)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      jc = Ac.configure({
        dialect: "ts"
      }, "typescript"),
      Yc = Ac.configure({
        dialect: "jsx",
        props: [iJ.jb.add((JJ => JJ.isTop ? [qc] : void 0))]
      }),
      hc = Ac.configure({
        dialect: "jsx ts",
        props: [iJ.jb.add((JJ => JJ.isTop ? [qc] : void 0))]
      }, "typescript");
    let Dc = JJ => ({
      label: JJ,
      type: "keyword"
    });
    const sc = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Dc),
      nc = sc.concat(["declare", "implements", "private", "protected", "public"].map(Dc));

    function Gc() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        cJ = JJ.jsx ? JJ.typescript ? hc : Yc : JJ.typescript ? jc : Ac,
        ZJ = JJ.typescript ? tJ.concat(nc) : BJ.concat(sc);
      return new iJ.j(cJ, [Ac.data.of({
        autocomplete: (0, aJ.t)(ec, (0, aJ.p)(ZJ))
      }), Ac.data.of({
        autocomplete: Xc
      }), JJ.jsx ? rc : []])
    }

    function fc(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JJ.length;
      for (let FJ = null === cJ || void 0 === cJ ? void 0 : cJ.firstChild; FJ; FJ = FJ.nextSibling)
        if ("JSXIdentifier" == FJ.name || "JSXBuiltin" == FJ.name || "JSXNamespacedName" == FJ.name || "JSXMemberExpression" == FJ.name) return JJ.sliceString(FJ.from, Math.min(FJ.to, ZJ));
      return ""
    }
    const xc = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      rc = LJ.f.inputHandler.of(((JJ, cJ, ZJ, FJ, UJ) => {
        if ((xc ? JJ.composing : JJ.compositionStarted) || JJ.state.readOnly || cJ != ZJ || ">" != FJ && "/" != FJ || !Ac.isActiveAt(JJ.state, cJ, -1)) return !1;
        let eJ = UJ(),
          {
            state: XJ
          } = eJ,
          AJ = XJ.changeByRange((JJ => {
            var cJ;
            let ZJ, {
                head: UJ
              } = JJ,
              eJ = (0, iJ.ub)(XJ).resolveInner(UJ - 1, -1);
            if ("JSXStartTag" == eJ.name && (eJ = eJ.parent), XJ.doc.sliceString(UJ - 1, UJ) != FJ || "JSXAttributeValue" == eJ.name && eJ.to > UJ);
            else {
              if (">" == FJ && "JSXFragmentTag" == eJ.name) return {
                range: JJ,
                changes: {
                  from: UJ,
                  insert: "</>"
                }
              };
              if ("/" == FJ && "JSXStartCloseTag" == eJ.name) {
                let JJ = eJ.parent,
                  FJ = JJ.parent;
                if (FJ && JJ.from == UJ - 2 && ((ZJ = fc(XJ.doc, FJ.firstChild, UJ)) || "JSXFragmentTag" == (null === (cJ = FJ.firstChild) || void 0 === cJ ? void 0 : cJ.name))) {
                  let JJ = `${ZJ}>`;
                  return {
                    range: RJ.m.cursor(UJ + JJ.length, -1),
                    changes: {
                      from: UJ,
                      insert: JJ
                    }
                  }
                }
              } else if (">" == FJ) {
                let cJ = function(JJ) {
                  for (;;) {
                    if ("JSXOpenTag" == JJ.name || "JSXSelfClosingTag" == JJ.name || "JSXFragmentTag" == JJ.name) return JJ;
                    if ("JSXEscape" == JJ.name || !JJ.parent) return null;
                    JJ = JJ.parent
                  }
                }(eJ);
                if (cJ && "JSXOpenTag" == cJ.name && !/^\/?>|^<\//.test(XJ.doc.sliceString(UJ, UJ + 2)) && (ZJ = fc(XJ.doc, cJ, UJ))) return {
                  range: JJ,
                  changes: {
                    from: UJ,
                    insert: `</${ZJ}>`
                  }
                }
              }
            }
            return {
              range: JJ
            }
          }));
        return !AJ.changes.empty && (JJ.dispatch([eJ, XJ.update(AJ, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  40078: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      B: () => CJ,
      E: () => rc,
      G: () => BJ,
      I: () => jc,
      L: () => aJ,
      P: () => xJ,
      S: () => wJ,
      W: () => gJ,
      Y: () => PJ,
      _: () => RJ,
      c: () => mc,
      cb: () => WJ,
      d: () => HJ,
      db: () => bJ,
      fb: () => Tc,
      g: () => nJ,
      j: () => IJ,
      jb: () => hJ,
      m: () => dc,
      nb: () => Kc,
      o: () => uJ,
      q: () => Ic,
      qb: () => fJ,
      t: () => YJ,
      ub: () => GJ,
      x: () => OJ
    });
    var FJ, UJ = ZJ(40080),
      eJ = ZJ(40060),
      XJ = ZJ(40065),
      AJ = ZJ(40084),
      qJ = ZJ(40068);
    const jJ = new UJ.h;

    function YJ(JJ) {
      return eJ.p.define({
        combine: JJ ? cJ => cJ.concat(JJ) : void 0
      })
    }
    const hJ = new UJ.h;
    class DJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = JJ, this.name = FJ, eJ.o.prototype.hasOwnProperty("tree") || Object.defineProperty(eJ.o.prototype, "tree", {
          get() {
            return GJ(this)
          }
        }), this.parser = cJ, this.extension = [SJ.of(this), eJ.o.languageData.of(((JJ, cJ, ZJ) => {
          let FJ = sJ(JJ, cJ, ZJ),
            UJ = FJ.type.prop(jJ);
          if (!UJ) return [];
          let eJ = JJ.facet(UJ),
            XJ = FJ.type.prop(hJ);
          if (XJ) {
            let UJ = FJ.resolve(cJ - FJ.from, ZJ);
            for (let cJ of XJ)
              if (cJ.test(UJ, JJ)) {
                let ZJ = JJ.facet(cJ.facet);
                return "replace" == cJ.type ? ZJ : ZJ.concat(eJ)
              }
          }
          return eJ
        }))].concat(ZJ)
      }
      isActiveAt(JJ, cJ) {
        return sJ(JJ, cJ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(jJ) == this.data
      }
      findRegions(JJ) {
        let cJ = JJ.facet(SJ);
        if ((null === cJ || void 0 === cJ ? void 0 : cJ.data) == this.data) return [{
          from: 0,
          to: JJ.doc.length
        }];
        if (!cJ || !cJ.allowsNesting) return [];
        let ZJ = [],
          FJ = (JJ, cJ) => {
            if (JJ.prop(jJ) == this.data) return void ZJ.push({
              from: cJ,
              to: cJ + JJ.length
            });
            let eJ = JJ.prop(UJ.h.mounted);
            if (eJ) {
              if (eJ.tree.prop(jJ) == this.data) {
                if (eJ.overlay)
                  for (let JJ of eJ.overlay) ZJ.push({
                    from: JJ.from + cJ,
                    to: JJ.to + cJ
                  });
                else ZJ.push({
                  from: cJ,
                  to: cJ + JJ.length
                });
                return
              }
              if (eJ.overlay) {
                let JJ = ZJ.length;
                if (FJ(eJ.tree, eJ.overlay[0].from + cJ), ZJ.length > JJ) return
              }
            }
            for (let ZJ = 0; ZJ < JJ.children.length; ZJ++) {
              let eJ = JJ.children[ZJ];
              eJ instanceof UJ.t && FJ(eJ, JJ.positions[ZJ] + cJ)
            }
          };
        return FJ(GJ(JJ), 0), ZJ
      }
      get allowsNesting() {
        return !0
      }
    }

    function sJ(JJ, cJ, ZJ) {
      let FJ = JJ.facet(SJ),
        eJ = GJ(JJ).topNode;
      if (!FJ || FJ.allowsNesting)
        for (let XJ = eJ; XJ; XJ = XJ.enter(cJ, ZJ, UJ.f.ExcludeBuffers | UJ.f.EnterBracketed)) XJ.type.isTop && (eJ = XJ);
      return eJ
    }
    DJ.setState = eJ.A.define();
    class nJ extends DJ {
      constructor(JJ, cJ, ZJ) {
        super(JJ, cJ, [], ZJ), this.parser = cJ
      }
      static define(JJ) {
        let cJ = YJ(JJ.languageData);
        return new nJ(cJ, JJ.parser.configure({
          props: [jJ.add((JJ => JJ.isTop ? cJ : void 0))]
        }), JJ.name)
      }
      configure(JJ, cJ) {
        return new nJ(this.data, this.parser.configure(JJ), cJ || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function GJ(JJ) {
      let cJ = JJ.field(DJ.state, !1);
      return cJ ? cJ.tree : UJ.t.empty
    }

    function fJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ.doc.length;
      var ZJ;
      return (null === (ZJ = JJ.field(DJ.state, !1)) || void 0 === ZJ ? void 0 : ZJ.context.isDone(cJ)) || !1
    }

    function xJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ.viewport.to,
        ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        FJ = function(JJ, cJ) {
          let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var FJ;
          let UJ = null === (FJ = JJ.field(DJ.state, !1)) || void 0 === FJ ? void 0 : FJ.context;
          if (!UJ) return null;
          let eJ = UJ.viewport;
          UJ.updateViewport({
            from: 0,
            to: cJ
          });
          let XJ = UJ.isDone(cJ) || UJ.work(ZJ, cJ) ? UJ.tree : null;
          return UJ.updateViewport(eJ), XJ
        }(JJ.state, cJ, ZJ);
      return FJ != GJ(JJ.state) && JJ.dispatch({}), !!FJ
    }
    class rJ {
      constructor(JJ) {
        this.doc = JJ, this.cursorPos = 0, this.string = "", this.cursor = JJ.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(JJ) {
        return this.string = this.cursor.next(JJ - this.cursorPos).value, this.cursorPos = JJ + this.string.length, this.cursorPos - this.string.length
      }
      chunk(JJ) {
        return this.syncTo(JJ), this.string
      }
      get lineChunks() {
        return !0
      }
      read(JJ, cJ) {
        let ZJ = this.cursorPos - this.string.length;
        return JJ < ZJ || cJ >= this.cursorPos ? this.doc.sliceString(JJ, cJ) : this.string.slice(JJ - ZJ, cJ - ZJ)
      }
    }
    let vJ = null;
    class mJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          FJ = arguments.length > 3 ? arguments[3] : void 0,
          UJ = arguments.length > 4 ? arguments[4] : void 0,
          eJ = arguments.length > 5 ? arguments[5] : void 0,
          XJ = arguments.length > 6 ? arguments[6] : void 0,
          AJ = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = JJ, this.state = cJ, this.fragments = ZJ, this.tree = FJ, this.treeLen = UJ, this.viewport = eJ, this.skipped = XJ, this.scheduleOn = AJ, this.parse = null, this.tempSkipped = []
      }
      static create(JJ, cJ, ZJ) {
        return new mJ(JJ, cJ, [], UJ.t.empty, 0, ZJ, [], null)
      }
      startParse() {
        return this.parser.startParse(new rJ(this.state.doc), this.fragments)
      }
      work(JJ, cJ) {
        return null != cJ && cJ >= this.state.doc.length && (cJ = void 0), this.tree != UJ.t.empty && this.isDone(null !== cJ && void 0 !== cJ ? cJ : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var ZJ;
          if ("number" == typeof JJ) {
            let cJ = Date.now() + JJ;
            JJ = () => Date.now() > cJ
          }
          for (this.parse || (this.parse = this.startParse()), null != cJ && (null == this.parse.stoppedAt || this.parse.stoppedAt > cJ) && cJ < this.state.doc.length && this.parse.stopAt(cJ);;) {
            let FJ = this.parse.advance();
            if (FJ) {
              if (this.fragments = this.withoutTempSkipped(UJ.r.addTree(FJ, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (ZJ = this.parse.stoppedAt) && void 0 !== ZJ ? ZJ : this.state.doc.length, this.tree = FJ, this.parse = null, !(this.treeLen < (null !== cJ && void 0 !== cJ ? cJ : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (JJ()) return !1
          }
        }))
      }
      takeTree() {
        let JJ, cJ;
        this.parse && (JJ = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > JJ) && this.parse.stopAt(JJ), this.withContext((() => {
          for (; !(cJ = this.parse.advance()););
        })), this.treeLen = JJ, this.tree = cJ, this.fragments = this.withoutTempSkipped(UJ.r.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(JJ) {
        let cJ = vJ;
        vJ = this;
        try {
          return JJ()
        } finally {
          vJ = cJ
        }
      }
      withoutTempSkipped(JJ) {
        for (let cJ; cJ = this.tempSkipped.pop();) JJ = QJ(JJ, cJ.from, cJ.to);
        return JJ
      }
      changes(JJ, cJ) {
        let {
          fragments: ZJ,
          tree: FJ,
          treeLen: eJ,
          viewport: XJ,
          skipped: AJ
        } = this;
        if (this.takeTree(), !JJ.empty) {
          let cJ = [];
          if (JJ.iterChangedRanges(((JJ, ZJ, FJ, UJ) => cJ.push({
              fromA: JJ,
              toA: ZJ,
              fromB: FJ,
              toB: UJ
            }))), ZJ = UJ.r.applyChanges(ZJ, cJ), FJ = UJ.t.empty, eJ = 0, XJ = {
              from: JJ.mapPos(XJ.from, -1),
              to: JJ.mapPos(XJ.to, 1)
            }, this.skipped.length) {
            AJ = [];
            for (let cJ of this.skipped) {
              let ZJ = JJ.mapPos(cJ.from, 1),
                FJ = JJ.mapPos(cJ.to, -1);
              ZJ < FJ && AJ.push({
                from: ZJ,
                to: FJ
              })
            }
          }
        }
        return new mJ(this.parser, cJ, ZJ, FJ, eJ, XJ, AJ, this.scheduleOn)
      }
      updateViewport(JJ) {
        if (this.viewport.from == JJ.from && this.viewport.to == JJ.to) return !1;
        this.viewport = JJ;
        let cJ = this.skipped.length;
        for (let ZJ = 0; ZJ < this.skipped.length; ZJ++) {
          let {
            from: cJ,
            to: FJ
          } = this.skipped[ZJ];
          cJ < JJ.to && FJ > JJ.from && (this.fragments = QJ(this.fragments, cJ, FJ), this.skipped.splice(ZJ--, 1))
        }
        return !(this.skipped.length >= cJ) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(JJ, cJ) {
        this.skipped.push({
          from: JJ,
          to: cJ
        })
      }
      static getSkippingParser(JJ) {
        return new class extends UJ.o {
          createParse(cJ, ZJ, FJ) {
            let eJ = FJ[0].from,
              XJ = FJ[FJ.length - 1].to;
            return {
              parsedPos: eJ,
              advance() {
                let cJ = vJ;
                if (cJ) {
                  for (let JJ of FJ) cJ.tempSkipped.push(JJ);
                  JJ && (cJ.scheduleOn = cJ.scheduleOn ? Promise.all([cJ.scheduleOn, JJ]) : JJ)
                }
                return this.parsedPos = XJ, new UJ.t(UJ.k.none, [], [], XJ - eJ)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(JJ) {
        JJ = Math.min(JJ, this.state.doc.length);
        let cJ = this.fragments;
        return this.treeLen >= JJ && cJ.length && 0 == cJ[0].from && cJ[0].to >= JJ
      }
      static get() {
        return vJ
      }
    }

    function QJ(JJ, cJ, ZJ) {
      return UJ.r.applyChanges(JJ, [{
        fromA: cJ,
        toA: ZJ,
        fromB: cJ,
        toB: ZJ
      }])
    }
    class EJ {
      constructor(JJ) {
        this.context = JJ, this.tree = JJ.tree
      }
      apply(JJ) {
        if (!JJ.docChanged && this.tree == this.context.tree) return this;
        let cJ = this.context.changes(JJ.changes, JJ.state),
          ZJ = this.context.treeLen == JJ.startState.doc.length ? void 0 : Math.max(JJ.changes.mapPos(this.context.treeLen), cJ.viewport.to);
        return cJ.work(20, ZJ) || cJ.takeTree(), new EJ(cJ)
      }
      static init(JJ) {
        let cJ = Math.min(3e3, JJ.doc.length),
          ZJ = mJ.create(JJ.facet(SJ).parser, JJ, {
            from: 0,
            to: cJ
          });
        return ZJ.work(20, cJ) || ZJ.takeTree(), new EJ(ZJ)
      }
    }
    DJ.state = eJ.E.define({
      create: EJ.init,
      update(JJ, cJ) {
        for (let ZJ of cJ.effects)
          if (ZJ.is(DJ.setState)) return ZJ.value;
        return cJ.startState.facet(SJ) != cJ.state.facet(SJ) ? EJ.init(cJ.state) : JJ.apply(cJ)
      }
    });
    let VJ = JJ => {
      let cJ = setTimeout((() => JJ()), 500);
      return () => clearTimeout(cJ)
    };
    "undefined" != typeof requestIdleCallback && (VJ = JJ => {
      let cJ = -1,
        ZJ = setTimeout((() => {
          cJ = requestIdleCallback(JJ, {
            timeout: 400
          })
        }), 100);
      return () => cJ < 0 ? clearTimeout(ZJ) : cancelIdleCallback(cJ)
    });
    const KJ = "undefined" != typeof navigator && (null === (FJ = navigator.scheduling) || void 0 === FJ ? void 0 : FJ.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      yJ = XJ.k.fromClass(class {
        constructor(JJ) {
          this.view = JJ, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(JJ) {
          let cJ = this.view.state.field(DJ.state).context;
          (cJ.updateViewport(JJ.view.viewport) || this.view.viewport.to > cJ.treeLen) && this.scheduleWork(), (JJ.docChanged || JJ.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(cJ)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: JJ
          } = this.view, cJ = JJ.field(DJ.state);
          cJ.tree == cJ.context.tree && cJ.context.isDone(JJ.doc.length) || (this.working = VJ(this.work))
        }
        work(JJ) {
          this.working = null;
          let cJ = Date.now();
          if (this.chunkEnd < cJ && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = cJ + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: ZJ,
            viewport: {
              to: FJ
            }
          } = this.view, UJ = ZJ.field(DJ.state);
          if (UJ.tree == UJ.context.tree && UJ.context.isDone(FJ + 1e5)) return;
          let eJ = Date.now() + Math.min(this.chunkBudget, 100, JJ && !KJ ? Math.max(25, JJ.timeRemaining() - 5) : 1e9),
            XJ = UJ.context.treeLen < FJ && ZJ.doc.length > FJ + 1e3,
            AJ = UJ.context.work((() => KJ && KJ() || Date.now() > eJ), FJ + (XJ ? 0 : 1e5));
          this.chunkBudget -= Date.now() - cJ, (AJ || this.chunkBudget <= 0) && (UJ.context.takeTree(), this.view.dispatch({
            effects: DJ.setState.of(new EJ(UJ.context))
          })), this.chunkBudget > 0 && (!AJ || XJ) && this.scheduleWork(), this.checkAsyncSchedule(UJ.context)
        }
        checkAsyncSchedule(JJ) {
          JJ.scheduleOn && (this.workScheduled++, JJ.scheduleOn.then((() => this.scheduleWork())).catch((JJ => (0, XJ.Q)(this.view.state, JJ))).then((() => this.workScheduled--)), JJ.scheduleOn = null)
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
      SJ = eJ.p.define({
        combine: JJ => JJ.length ? JJ[0] : null,
        enables: JJ => [DJ.state, yJ, XJ.f.contentAttributes.compute([JJ], (cJ => {
          let ZJ = cJ.facet(JJ);
          return ZJ && ZJ.name ? {
            "data-language": ZJ.name
          } : {}
        }))]
      });
    class IJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = JJ, this.support = cJ, this.extension = [JJ, cJ]
      }
    }
    const MJ = eJ.p.define(),
      bJ = eJ.p.define({
        combine: JJ => {
          if (!JJ.length) return "  ";
          let cJ = JJ[0];
          if (!cJ || /\S/.test(cJ) || Array.from(cJ).some((JJ => JJ != cJ[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(JJ[0]));
          return cJ
        }
      });

    function wJ(JJ) {
      let cJ = JJ.facet(bJ);
      return 9 == cJ.charCodeAt(0) ? JJ.tabSize * cJ.length : cJ.length
    }

    function WJ(JJ, cJ) {
      let ZJ = "",
        FJ = JJ.tabSize,
        UJ = JJ.facet(bJ)[0];
      if ("\t" == UJ) {
        for (; cJ >= FJ;) ZJ += "\t", cJ -= FJ;
        UJ = " "
      }
      for (let eJ = 0; eJ < cJ; eJ++) ZJ += UJ;
      return ZJ
    }

    function gJ(JJ, cJ) {
      JJ instanceof eJ.o && (JJ = new HJ(JJ));
      for (let FJ of JJ.state.facet(MJ)) {
        let ZJ = FJ(JJ, cJ);
        if (void 0 !== ZJ) return ZJ
      }
      let ZJ = GJ(JJ.state);
      return ZJ.length >= cJ ? function(JJ, cJ, ZJ) {
        let FJ = cJ.resolveStack(ZJ),
          UJ = cJ.resolveInner(ZJ, -1).resolve(ZJ, 0).enterUnfinishedNodesBefore(ZJ);
        if (UJ != FJ.node) {
          let JJ = [];
          for (let cJ = UJ; cJ && !(cJ.from < FJ.node.from || cJ.to > FJ.node.to || cJ.from == FJ.node.from && cJ.type == FJ.node.type); cJ = cJ.parent) JJ.push(cJ);
          for (let cJ = JJ.length - 1; cJ >= 0; cJ--) FJ = {
            node: JJ[cJ],
            next: FJ
          }
        }
        return kJ(FJ, JJ, ZJ)
      }(JJ, ZJ, cJ) : null
    }
    class HJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = JJ, this.options = cJ, this.unit = wJ(JJ)
      }
      lineAt(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZJ = this.state.doc.lineAt(JJ),
          {
            simulateBreak: FJ,
            simulateDoubleBreak: UJ
          } = this.options;
        return null != FJ && FJ >= ZJ.from && FJ <= ZJ.to ? UJ && FJ == JJ ? {
          text: "",
          from: JJ
        } : (cJ < 0 ? FJ < JJ : FJ <= JJ) ? {
          text: ZJ.text.slice(FJ - ZJ.from),
          from: FJ
        } : {
          text: ZJ.text.slice(0, FJ - ZJ.from),
          from: ZJ.from
        } : ZJ
      }
      textAfterPos(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && JJ == this.options.simulateBreak) return "";
        let {
          text: ZJ,
          from: FJ
        } = this.lineAt(JJ, cJ);
        return ZJ.slice(JJ - FJ, Math.min(ZJ.length, JJ + 100 - FJ))
      }
      column(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: ZJ,
            from: FJ
          } = this.lineAt(JJ, cJ),
          UJ = this.countColumn(ZJ, JJ - FJ),
          eJ = this.options.overrideIndentation ? this.options.overrideIndentation(FJ) : -1;
        return eJ > -1 && (UJ += eJ - this.countColumn(ZJ, ZJ.search(/\S|$/))), UJ
      }
      countColumn(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ.length;
        return (0, eJ.U)(JJ, this.state.tabSize, cJ)
      }
      lineIndent(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: ZJ,
            from: FJ
          } = this.lineAt(JJ, cJ),
          UJ = this.options.overrideIndentation;
        if (UJ) {
          let JJ = UJ(FJ);
          if (JJ > -1) return JJ
        }
        return this.countColumn(ZJ, ZJ.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const PJ = new UJ.h;

    function kJ(JJ, cJ, ZJ) {
      for (let FJ = JJ; FJ; FJ = FJ.next) {
        let JJ = pJ(FJ.node);
        if (JJ) return JJ(zJ.create(cJ, ZJ, FJ))
      }
      return 0
    }

    function pJ(JJ) {
      let cJ = JJ.type.prop(PJ);
      if (cJ) return cJ;
      let ZJ, FJ = JJ.firstChild;
      if (FJ && (ZJ = FJ.type.prop(UJ.h.closedBy))) {
        let cJ = JJ.lastChild,
          FJ = cJ && ZJ.indexOf(cJ.name) > -1;
        return JJ => TJ(JJ, !0, 1, void 0, FJ && ! function(JJ) {
          return JJ.pos == JJ.options.simulateBreak && JJ.options.simulateDoubleBreak
        }(JJ) ? cJ.from : void 0)
      }
      return null == JJ.parent ? dJ : null
    }

    function dJ() {
      return 0
    }
    class zJ extends HJ {
      constructor(JJ, cJ, ZJ) {
        super(JJ.state, JJ.options), this.base = JJ, this.pos = cJ, this.context = ZJ
      }
      get node() {
        return this.context.node
      }
      static create(JJ, cJ, ZJ) {
        return new zJ(JJ, cJ, ZJ)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(JJ) {
        let cJ = this.state.doc.lineAt(JJ.from);
        for (;;) {
          let ZJ = JJ.resolve(cJ.from);
          for (; ZJ.parent && ZJ.parent.from == ZJ.from;) ZJ = ZJ.parent;
          if (NJ(ZJ, JJ)) break;
          cJ = this.state.doc.lineAt(ZJ.from)
        }
        return this.lineIndent(cJ.from)
      }
      continue () {
        return kJ(this.context.next, this.base, this.pos)
      }
    }

    function NJ(JJ, cJ) {
      for (let ZJ = cJ; ZJ; ZJ = ZJ.parent)
        if (JJ == ZJ) return !0;
      return !1
    }

    function OJ(JJ) {
      let {
        closing: cJ,
        align: ZJ = !0,
        units: FJ = 1
      } = JJ;
      return JJ => TJ(JJ, ZJ, FJ, cJ)
    }

    function TJ(JJ, cJ, ZJ, FJ, UJ) {
      let eJ = JJ.textAfter,
        XJ = eJ.match(/^\s*/)[0].length,
        AJ = FJ && eJ.slice(XJ, XJ + FJ.length) == FJ || UJ == JJ.pos + XJ,
        qJ = cJ ? function(JJ) {
          let cJ = JJ.node,
            ZJ = cJ.childAfter(cJ.from),
            FJ = cJ.lastChild;
          if (!ZJ) return null;
          let UJ = JJ.options.simulateBreak,
            eJ = JJ.state.doc.lineAt(ZJ.from),
            XJ = null == UJ || UJ <= eJ.from ? eJ.to : Math.min(eJ.to, UJ);
          for (let AJ = ZJ.to;;) {
            let JJ = cJ.childAfter(AJ);
            if (!JJ || JJ == FJ) return null;
            if (!JJ.type.isSkipped) {
              if (JJ.from >= XJ) return null;
              let cJ = /^ */.exec(eJ.text.slice(ZJ.to - eJ.from))[0].length;
              return {
                from: ZJ.from,
                to: ZJ.to + cJ
              }
            }
            AJ = JJ.to
          }
        }(JJ) : null;
      return qJ ? AJ ? JJ.column(qJ.from) : JJ.column(qJ.to) : JJ.baseIndent + (AJ ? 0 : JJ.unit * ZJ)
    }
    const CJ = JJ => JJ.baseIndent;

    function uJ() {
      let {
        except: JJ,
        units: cJ = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return ZJ => {
        let FJ = JJ && JJ.test(ZJ.textAfter);
        return ZJ.baseIndent + (FJ ? 0 : cJ * ZJ.unit)
      }
    }
    const iJ = 200;

    function RJ() {
      return eJ.o.transactionFilter.of((JJ => {
        if (!JJ.docChanged || !JJ.isUserEvent("input.type") && !JJ.isUserEvent("input.complete")) return JJ;
        let cJ = JJ.startState.languageDataAt("indentOnInput", JJ.startState.selection.main.head);
        if (!cJ.length) return JJ;
        let ZJ = JJ.newDoc,
          {
            head: FJ
          } = JJ.newSelection.main,
          UJ = ZJ.lineAt(FJ);
        if (FJ > UJ.from + iJ) return JJ;
        let eJ = ZJ.sliceString(UJ.from, FJ);
        if (!cJ.some((JJ => JJ.test(eJ)))) return JJ;
        let {
          state: XJ
        } = JJ, AJ = -1, qJ = [];
        for (let {
            head: jJ
          }
          of XJ.selection.ws) {
          let JJ = XJ.doc.lineAt(jJ);
          if (JJ.from == AJ) continue;
          AJ = JJ.from;
          let cJ = gJ(XJ, JJ.from);
          if (null == cJ) continue;
          let ZJ = /^\s*/.exec(JJ.text)[0],
            FJ = WJ(XJ, cJ);
          ZJ != FJ && qJ.push({
            from: JJ.from,
            to: JJ.from + ZJ.length,
            insert: FJ
          })
        }
        return qJ.length ? [JJ, {
          changes: qJ,
          sequential: !0
        }] : JJ
      }))
    }
    const LJ = eJ.p.define(),
      aJ = new UJ.h;

    function BJ(JJ) {
      let cJ = JJ.firstChild,
        ZJ = JJ.lastChild;
      return cJ && cJ.to < ZJ.from ? {
        from: cJ.to,
        to: ZJ.type.isError ? JJ.to : ZJ.from
      } : null
    }

    function tJ(JJ) {
      let cJ = JJ.lastChild;
      return cJ && cJ.to == JJ.to && cJ.type.isError
    }

    function oJ(JJ, cJ, ZJ) {
      for (let FJ of JJ.facet(LJ)) {
        let UJ = FJ(JJ, cJ, ZJ);
        if (UJ) return UJ
      }
      return function(JJ, cJ, ZJ) {
        let FJ = GJ(JJ);
        if (FJ.length < ZJ) return null;
        let UJ = null;
        for (let eJ = FJ.resolveStack(ZJ, 1); eJ; eJ = eJ.next) {
          let XJ = eJ.node;
          if (XJ.to <= ZJ || XJ.from > ZJ) continue;
          if (UJ && XJ.from < cJ) break;
          let AJ = XJ.type.prop(aJ);
          if (AJ && (XJ.to < FJ.length - 50 || FJ.length == JJ.doc.length || !tJ(XJ))) {
            let FJ = AJ(XJ, JJ);
            FJ && FJ.from <= ZJ && FJ.from >= cJ && FJ.to > ZJ && (UJ = FJ)
          }
        }
        return UJ
      }(JJ, cJ, ZJ)
    }

    function lJ(JJ, cJ) {
      let ZJ = cJ.mapPos(JJ.from, 1),
        FJ = cJ.mapPos(JJ.to, -1);
      return ZJ >= FJ ? void 0 : {
        from: ZJ,
        to: FJ
      }
    }
    const Jc = eJ.A.define({
        map: lJ
      }),
      cc = eJ.A.define({
        map: lJ
      });

    function Zc(JJ) {
      let cJ = [];
      for (let {
          head: ZJ
        }
        of JJ.state.selection.ws) cJ.some((JJ => JJ.from <= ZJ && JJ.to >= ZJ)) || cJ.push(JJ.lineBlockAt(ZJ));
      return cJ
    }
    const Fc = eJ.E.define({
      create: () => XJ.c.none,
      update(JJ, cJ) {
        cJ.isUserEvent("delete") && cJ.changes.iterChangedRanges(((cJ, ZJ) => JJ = Uc(JJ, cJ, ZJ))), JJ = JJ.map(cJ.changes);
        for (let ZJ of cJ.effects)
          if (ZJ.is(Jc) && !Xc(JJ, ZJ.value.from, ZJ.value.to)) {
            let {
              preparePlaceholder: FJ
            } = cJ.state.facet(hc), UJ = FJ ? XJ.c.replace({
              widget: new Gc(FJ(cJ.state, ZJ.value))
            }) : nc;
            JJ = JJ.update({
              add: [UJ.range(ZJ.value.from, ZJ.value.to)]
            })
          } else ZJ.is(cc) && (JJ = JJ.update({
            filter: (JJ, cJ) => ZJ.value.from != JJ || ZJ.value.to != cJ,
            filterFrom: ZJ.value.from,
            filterTo: ZJ.value.to
          }));
        return cJ.selection && (JJ = Uc(JJ, cJ.selection.main.head)), JJ
      },
      provide: JJ => XJ.f.je.from(JJ),
      toJSON(JJ, cJ) {
        let ZJ = [];
        return JJ.between(0, cJ.doc.length, ((JJ, cJ) => {
          ZJ.push(JJ, cJ)
        })), ZJ
      },
      fromJSON(JJ) {
        if (!Array.isArray(JJ) || JJ.length % 2) throw new RangeError("Invalid JSON for fold state");
        let cJ = [];
        for (let ZJ = 0; ZJ < JJ.length;) {
          let FJ = JJ[ZJ++],
            UJ = JJ[ZJ++];
          if ("number" != typeof FJ || "number" != typeof UJ) throw new RangeError("Invalid JSON for fold state");
          cJ.push(nc.range(FJ, UJ))
        }
        return XJ.c.set(cJ, !0)
      }
    });

    function Uc(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cJ,
        FJ = !1;
      return JJ.between(cJ, ZJ, ((JJ, UJ) => {
        JJ < ZJ && UJ > cJ && (FJ = !0)
      })), FJ ? JJ.update({
        filterFrom: cJ,
        filterTo: ZJ,
        filter: (JJ, FJ) => JJ >= ZJ || FJ <= cJ
      }) : JJ
    }

    function ec(JJ, cJ, ZJ) {
      var FJ;
      let UJ = null;
      return null === (FJ = JJ.field(Fc, !1)) || void 0 === FJ || FJ.between(cJ, ZJ, ((JJ, cJ) => {
        (!UJ || UJ.from > JJ) && (UJ = {
          from: JJ,
          to: cJ
        })
      })), UJ
    }

    function Xc(JJ, cJ, ZJ) {
      let FJ = !1;
      return JJ.between(cJ, cJ, ((JJ, UJ) => {
        JJ == cJ && UJ == ZJ && (FJ = !0)
      })), FJ
    }

    function Ac(JJ, cJ) {
      return JJ.field(Fc, !1) ? cJ : cJ.concat(eJ.A.appendConfig.of(Dc()))
    }

    function qc(JJ, cJ) {
      let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        FJ = JJ.state.doc.lineAt(cJ.from).number,
        UJ = JJ.state.doc.lineAt(cJ.to).number;
      return XJ.f.announce.of(`${JJ.state.phrase(ZJ?"Folded lines":"Unfolded lines")} ${FJ} ${JJ.state.phrase("to")} ${UJ}.`)
    }
    const jc = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: JJ => {
          for (let cJ of Zc(JJ)) {
            let ZJ = oJ(JJ.state, cJ.from, cJ.to);
            if (ZJ) return JJ.dispatch({
              effects: Ac(JJ.state, [Jc.of(ZJ), qc(JJ, ZJ)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: JJ => {
          if (!JJ.state.field(Fc, !1)) return !1;
          let cJ = [];
          for (let ZJ of Zc(JJ)) {
            let FJ = ec(JJ.state, ZJ.from, ZJ.to);
            FJ && cJ.push(cc.of(FJ), qc(JJ, FJ, !1))
          }
          return cJ.length && JJ.dispatch({
            effects: cJ
          }), cJ.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: JJ => {
          let {
            state: cJ
          } = JJ, ZJ = [];
          for (let FJ = 0; FJ < cJ.doc.length;) {
            let UJ = JJ.lineBlockAt(FJ),
              eJ = oJ(cJ, UJ.from, UJ.to);
            eJ && ZJ.push(Jc.of(eJ)), FJ = (eJ ? JJ.lineBlockAt(eJ.to) : UJ).to + 1
          }
          return ZJ.length && JJ.dispatch({
            effects: Ac(JJ.state, ZJ)
          }), !!ZJ.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: JJ => {
          let cJ = JJ.state.field(Fc, !1);
          if (!cJ || !cJ.size) return !1;
          let ZJ = [];
          return cJ.between(0, JJ.state.doc.length, ((JJ, cJ) => {
            ZJ.push(cc.of({
              from: JJ,
              to: cJ
            }))
          })), JJ.dispatch({
            effects: ZJ
          }), !0
        }
      }],
      Yc = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      hc = eJ.p.define({
        combine: JJ => (0, eJ.S)(JJ, Yc)
      });

    function Dc(JJ) {
      let cJ = [Fc, vc];
      return JJ && cJ.push(hc.of(JJ)), cJ
    }

    function sc(JJ, cJ) {
      let {
        state: ZJ
      } = JJ, FJ = ZJ.facet(hc), UJ = cJ => {
        let ZJ = JJ.lineBlockAt(JJ.posAtDOM(cJ.target)),
          FJ = ec(JJ.state, ZJ.from, ZJ.to);
        FJ && JJ.dispatch({
          effects: cc.of(FJ)
        }), cJ.preventDefault()
      };
      if (FJ.placeholderDOM) return FJ.placeholderDOM(JJ, UJ, cJ);
      let eJ = document.createElement("span");
      return eJ.textContent = FJ.placeholderText, eJ.setAttribute("aria-label", ZJ.phrase("folded code")), eJ.title = ZJ.phrase("unfold"), eJ.className = "cm-foldPlaceholder", eJ.onclick = UJ, eJ
    }
    const nc = XJ.c.replace({
      widget: new class extends XJ.l {
        toDOM(JJ) {
          return sc(JJ, null)
        }
      }
    });
    class Gc extends XJ.l {
      constructor(JJ) {
        super(), this.value = JJ
      }
      eq(JJ) {
        return this.value == JJ.value
      }
      toDOM(JJ) {
        return sc(JJ, this.value)
      }
    }
    const fc = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class xc extends XJ.j {
      constructor(JJ, cJ) {
        super(), this.config = JJ, this.open = cJ
      }
      eq(JJ) {
        return this.config == JJ.config && this.open == JJ.open
      }
      toDOM(JJ) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let cJ = document.createElement("span");
        return cJ.textContent = this.open ? this.config.openText : this.config.closedText, cJ.title = JJ.state.phrase(this.open ? "Fold line" : "Unfold line"), cJ
      }
    }

    function rc() {
      let JJ = {
          ...fc,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        cJ = new xc(JJ, !0),
        ZJ = new xc(JJ, !1),
        FJ = XJ.k.fromClass(class {
          constructor(JJ) {
            this.from = JJ.viewport.from, this.markers = this.buildMarkers(JJ)
          }
          update(cJ) {
            (cJ.docChanged || cJ.viewportChanged || cJ.startState.facet(SJ) != cJ.state.facet(SJ) || cJ.startState.field(Fc, !1) != cJ.state.field(Fc, !1) || GJ(cJ.startState) != GJ(cJ.state) || JJ.foldingChanged(cJ)) && (this.markers = this.buildMarkers(cJ.view))
          }
          buildMarkers(JJ) {
            let FJ = new eJ.u;
            for (let UJ of JJ.viewportLineBlocks) {
              let eJ = ec(JJ.state, UJ.from, UJ.to) ? ZJ : oJ(JJ.state, UJ.from, UJ.to) ? cJ : null;
              eJ && FJ.add(UJ.from, UJ.from, eJ)
            }
            return FJ.finish()
          }
        }),
        {
          domEventHandlers: UJ
        } = JJ;
      return [FJ, (0, XJ.z)({
        class: "cm-foldGutter",
        markers(JJ) {
          var cJ;
          return (null === (cJ = JJ.plugin(FJ)) || void 0 === cJ ? void 0 : cJ.markers) || eJ.v.empty
        },
        initialSpacer: () => new xc(JJ, !1),
        domEventHandlers: {
          ...UJ,
          click: (JJ, cJ, ZJ) => {
            if (UJ.click && UJ.click(JJ, cJ, ZJ)) return !0;
            let FJ = ec(JJ.state, cJ.from, cJ.to);
            if (FJ) return JJ.dispatch({
              effects: cc.of(FJ)
            }), !0;
            let eJ = oJ(JJ.state, cJ.from, cJ.to);
            return !!eJ && (JJ.dispatch({
              effects: Jc.of(eJ)
            }), !0)
          }
        }
      }), Dc()]
    }
    const vc = XJ.f.baseTheme({
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
    class mc {
      constructor(JJ, cJ) {
        let ZJ;

        function FJ(JJ) {
          let cJ = qJ.c.newName();
          return (ZJ || (ZJ = Object.create(null)))["." + cJ] = JJ, cJ
        }
        this.specs = JJ;
        const UJ = "string" == typeof cJ.all ? cJ.all : cJ.all ? FJ(cJ.all) : void 0,
          eJ = cJ.scope;
        this.scope = eJ instanceof DJ ? JJ => JJ.prop(jJ) == eJ.data : eJ ? JJ => JJ == eJ : void 0, this.style = (0, AJ.f)(JJ.map((JJ => ({
          tag: JJ.tag,
          class: JJ.class || FJ(Object.assign({}, JJ, {
            tag: null
          }))
        }))), {
          all: UJ
        }).style, this.module = ZJ ? new qJ.c(ZJ) : null, this.themeType = cJ.themeType
      }
      static define(JJ, cJ) {
        return new mc(JJ, cJ || {})
      }
    }
    const Qc = eJ.p.define(),
      Ec = eJ.p.define({
        combine: JJ => JJ.length ? [JJ[0]] : null
      });

    function Vc(JJ) {
      let cJ = JJ.facet(Qc);
      return cJ.length ? cJ : JJ.facet(Ec)
    }

    function Kc(JJ, cJ) {
      let ZJ, FJ = [Sc];
      return JJ instanceof mc && (JJ.module && FJ.push(XJ.f.styleModule.of(JJ.module)), ZJ = JJ.themeType), (null === cJ || void 0 === cJ ? void 0 : cJ.fallback) ? FJ.push(Ec.of(JJ)) : ZJ ? FJ.push(Qc.computeN([XJ.f.darkTheme], (cJ => cJ.facet(XJ.f.darkTheme) == ("dark" == ZJ) ? [JJ] : []))) : FJ.push(Qc.of(JJ)), FJ
    }
    class yc {
      constructor(JJ) {
        this.markCache = Object.create(null), this.tree = GJ(JJ.state), this.je = this.buildDeco(JJ, Vc(JJ.state)), this.decoratedTo = JJ.viewport.to
      }
      update(JJ) {
        let cJ = GJ(JJ.state),
          ZJ = Vc(JJ.state),
          FJ = ZJ != Vc(JJ.startState),
          {
            viewport: UJ
          } = JJ.view,
          eJ = JJ.changes.mapPos(this.decoratedTo, 1);
        cJ.length < UJ.to && !FJ && cJ.type == this.tree.type && eJ >= UJ.to ? (this.je = this.je.map(JJ.changes), this.decoratedTo = eJ) : (cJ != this.tree || JJ.viewportChanged || FJ) && (this.tree = cJ, this.je = this.buildDeco(JJ.view, ZJ), this.decoratedTo = UJ.to)
      }
      buildDeco(JJ, cJ) {
        if (!cJ || !this.tree.length) return XJ.c.none;
        let ZJ = new eJ.u;
        for (let {
            from: FJ,
            to: UJ
          }
          of JJ.o5)(0, AJ.d)(this.tree, cJ, ((JJ, cJ, FJ) => {
          ZJ.add(JJ, cJ, this.markCache[FJ] || (this.markCache[FJ] = XJ.c.mark({
            class: FJ
          })))
        }), FJ, UJ);
        return ZJ.finish()
      }
    }
    const Sc = eJ.t.high(XJ.k.fromClass(yc, {
        je: JJ => JJ.je
      })),
      Ic = mc.define([{
        tag: AJ.j.meta,
        color: "#404740"
      }, {
        tag: AJ.j.link,
        textDecoration: "underline"
      }, {
        tag: AJ.j.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: AJ.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: AJ.j.strong,
        fontWeight: "bold"
      }, {
        tag: AJ.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: AJ.j.keyword,
        color: "#708"
      }, {
        tag: [AJ.j.atom, AJ.j.bool, AJ.j.url, AJ.j.contentSeparator, AJ.j.labelName],
        color: "#219"
      }, {
        tag: [AJ.j.literal, AJ.j.inserted],
        color: "#164"
      }, {
        tag: [AJ.j.string, AJ.j.deleted],
        color: "#a11"
      }, {
        tag: [AJ.j.regexp, AJ.j.escape, AJ.j.special(AJ.j.string)],
        color: "#e40"
      }, {
        tag: AJ.j.definition(AJ.j.variableName),
        color: "#00f"
      }, {
        tag: AJ.j.local(AJ.j.variableName),
        color: "#30a"
      }, {
        tag: [AJ.j.typeName, AJ.j.namespace],
        color: "#085"
      }, {
        tag: AJ.j.className,
        color: "#167"
      }, {
        tag: [AJ.j.special(AJ.j.variableName), AJ.j.macroName],
        color: "#256"
      }, {
        tag: AJ.j.definition(AJ.j.propertyName),
        color: "#00c"
      }, {
        tag: AJ.j.comment,
        color: "#940"
      }, {
        tag: AJ.j.invalid,
        color: "#f00"
      }]),
      Mc = XJ.f.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      bc = 1e4,
      wc = "()[]{}",
      Wc = eJ.p.define({
        combine: JJ => (0, eJ.S)(JJ, {
          afterCursor: !0,
          brackets: wc,
          maxScanDistance: bc,
          renderMatch: Pc
        })
      }),
      gc = XJ.c.mark({
        class: "cm-matchingBracket"
      }),
      Hc = XJ.c.mark({
        class: "cm-nonmatchingBracket"
      });

    function Pc(JJ) {
      let cJ = [],
        ZJ = JJ.matched ? gc : Hc;
      return cJ.push(ZJ.range(JJ.start.from, JJ.start.to)), JJ.end && cJ.push(ZJ.range(JJ.end.from, JJ.end.to)), cJ
    }

    function kc(JJ) {
      let cJ = [],
        ZJ = JJ.facet(Wc);
      for (let FJ of JJ.selection.ws) {
        if (!FJ.empty) continue;
        let UJ = Tc(JJ, FJ.head, -1, ZJ) || FJ.head > 0 && Tc(JJ, FJ.head - 1, 1, ZJ) || ZJ.afterCursor && (Tc(JJ, FJ.head, 1, ZJ) || FJ.head < JJ.doc.length && Tc(JJ, FJ.head + 1, -1, ZJ));
        UJ && (cJ = cJ.concat(ZJ.renderMatch(UJ, JJ)))
      }
      return XJ.c.set(cJ, !0)
    }
    const pc = [XJ.k.fromClass(class {
      constructor(JJ) {
        this.paused = !1, this.je = kc(JJ.state)
      }
      update(JJ) {
        (JJ.docChanged || JJ.selectionSet || this.paused) && (JJ.view.composing ? (this.je = this.je.map(JJ.changes), this.paused = !0) : (this.je = kc(JJ.state), this.paused = !1))
      }
    }, {
      je: JJ => JJ.je
    }), Mc];

    function dc() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Wc.of(JJ), pc]
    }
    const zc = new UJ.h;

    function Nc(JJ, cJ, ZJ) {
      let FJ = JJ.prop(cJ < 0 ? UJ.h.openedBy : UJ.h.closedBy);
      if (FJ) return FJ;
      if (1 == JJ.name.length) {
        let FJ = ZJ.indexOf(JJ.name);
        if (FJ > -1 && FJ % 2 == (cJ < 0 ? 1 : 0)) return [ZJ[FJ + cJ]]
      }
      return null
    }

    function Oc(JJ) {
      let cJ = JJ.type.prop(zc);
      return cJ ? cJ(JJ.node) : JJ
    }

    function Tc(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        UJ = FJ.maxScanDistance || bc,
        eJ = FJ.brackets || wc,
        XJ = GJ(JJ),
        AJ = XJ.resolveInner(cJ, ZJ);
      for (let qJ = AJ; qJ; qJ = qJ.parent) {
        let FJ = Nc(qJ.type, ZJ, eJ);
        if (FJ && qJ.from < qJ.to) {
          let UJ = Oc(qJ);
          if (UJ && (ZJ > 0 ? cJ >= UJ.from && cJ < UJ.to : cJ > UJ.from && cJ <= UJ.to)) return Cc(JJ, cJ, ZJ, qJ, UJ, FJ, eJ)
        }
      }
      return function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        if (ZJ < 0 ? !cJ : cJ == JJ.doc.length) return null;
        let AJ = ZJ < 0 ? JJ.sliceDoc(cJ - 1, cJ) : JJ.sliceDoc(cJ, cJ + 1),
          qJ = XJ.indexOf(AJ);
        if (qJ < 0 || qJ % 2 == 0 != ZJ > 0) return null;
        let jJ = {
            from: ZJ < 0 ? cJ - 1 : cJ,
            to: ZJ > 0 ? cJ + 1 : cJ
          },
          YJ = JJ.doc.iterRange(cJ, ZJ > 0 ? JJ.doc.length : 0),
          hJ = 0;
        for (let DJ = 0; !YJ.next().done && DJ <= eJ;) {
          let JJ = YJ.value;
          ZJ < 0 && (DJ += JJ.length);
          let eJ = cJ + DJ * ZJ;
          for (let cJ = ZJ > 0 ? 0 : JJ.length - 1, AJ = ZJ > 0 ? JJ.length : -1; cJ != AJ; cJ += ZJ) {
            let AJ = XJ.indexOf(JJ[cJ]);
            if (!(AJ < 0 || FJ.resolveInner(eJ + cJ, 1).type != UJ))
              if (AJ % 2 == 0 == ZJ > 0) hJ++;
              else {
                if (1 == hJ) return {
                  start: jJ,
                  end: {
                    from: eJ + cJ,
                    to: eJ + cJ + 1
                  },
                  matched: AJ >> 1 == qJ >> 1
                };
                hJ--
              }
          }
          ZJ > 0 && (DJ += JJ.length)
        }
        return YJ.done ? {
          start: jJ,
          matched: !1
        } : null
      }(JJ, cJ, ZJ, XJ, AJ.type, UJ, eJ)
    }

    function Cc(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      let AJ = FJ.parent,
        qJ = {
          from: UJ.from,
          to: UJ.to
        },
        jJ = 0,
        YJ = null === AJ || void 0 === AJ ? void 0 : AJ.cursor();
      if (YJ && (ZJ < 0 ? YJ.childBefore(FJ.from) : YJ.childAfter(FJ.to)))
        do {
          if (ZJ < 0 ? YJ.to <= FJ.from : YJ.from >= FJ.to) {
            if (0 == jJ && eJ.indexOf(YJ.type.name) > -1 && YJ.from < YJ.to) {
              let JJ = Oc(YJ);
              return {
                start: qJ,
                end: JJ ? {
                  from: JJ.from,
                  to: JJ.to
                } : void 0,
                matched: !0
              }
            }
            if (Nc(YJ.type, ZJ, XJ)) jJ++;
            else if (Nc(YJ.type, -ZJ, XJ)) {
              if (0 == jJ) {
                let JJ = Oc(YJ);
                return {
                  start: qJ,
                  end: JJ && JJ.from < JJ.to ? {
                    from: JJ.from,
                    to: JJ.to
                  } : void 0,
                  matched: !1
                }
              }
              jJ--
            }
          }
        } while (ZJ < 0 ? YJ.prevSibling() : YJ.nextSibling());
      return {
        start: qJ,
        matched: !1
      }
    }
    const uc = Object.create(null),
      ic = [UJ.k.none],
      Rc = [],
      Lc = Object.create(null),
      ac = Object.create(null);
    for (let [oc, lc] of [
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
      ]) ac[oc] = tc(uc, lc);

    function Bc(JJ, cJ) {
      Rc.indexOf(JJ) > -1 || (Rc.push(JJ), console.warn(cJ))
    }

    function tc(JJ, cJ) {
      let ZJ = [];
      for (let UJ of cJ.split(" ")) {
        let cJ = [];
        for (let ZJ of UJ.split(".")) {
          let FJ = JJ[ZJ] || AJ.j[ZJ];
          FJ ? "function" == typeof FJ ? cJ.length ? cJ = cJ.map(FJ) : Bc(ZJ, `Modifier ${ZJ} used at start of tag`) : cJ.length ? Bc(ZJ, `Tag ${ZJ} used as modifier`) : cJ = Array.isArray(FJ) ? FJ : [FJ] : Bc(ZJ, `Unknown highlighting tag ${ZJ}`)
        }
        for (let JJ of cJ) ZJ.push(JJ)
      }
      if (!ZJ.length) return 0;
      let FJ = cJ.replace(/ /g, "_"),
        eJ = FJ + " " + ZJ.map((JJ => JJ.id)),
        XJ = Lc[eJ];
      if (XJ) return XJ.id;
      let qJ = Lc[eJ] = UJ.k.define({
        id: ic.length,
        name: FJ,
        props: [(0, AJ.e)({
          [FJ]: ZJ
        })]
      });
      return ic.push(qJ), qJ.id
    }
    XJ.e.RTL, XJ.e.LTR
  },
  40097: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => vJ,
      e: () => VJ
    });
    var FJ = ZJ(40065),
      UJ = ZJ(40060),
      eJ = ZJ(40070);
    class XJ {
      constructor(JJ, cJ, ZJ) {
        this.from = JJ, this.to = cJ, this.diagnostic = ZJ
      }
    }
    class AJ {
      constructor(JJ, cJ, ZJ) {
        this.diagnostics = JJ, this.panel = cJ, this.selected = ZJ
      }
      static init(JJ, cJ, ZJ) {
        let eJ = ZJ.facet(QJ).markerFilter;
        eJ && (JJ = eJ(JJ, ZJ));
        let XJ = JJ.slice().sort(((JJ, cJ) => JJ.from - cJ.from || JJ.to - cJ.to)),
          jJ = new UJ.u,
          YJ = [],
          hJ = 0,
          DJ = ZJ.doc.iter(),
          sJ = 0,
          nJ = ZJ.doc.length;
        for (let UJ = 0;;) {
          let JJ, cJ, ZJ = UJ == XJ.length ? null : XJ[UJ];
          if (!ZJ && !YJ.length) break;
          if (YJ.length) JJ = hJ, cJ = YJ.reduce(((JJ, cJ) => Math.min(JJ, cJ.to)), ZJ && ZJ.from > JJ ? ZJ.from : 1e8);
          else {
            if (JJ = ZJ.from, JJ > nJ) break;
            cJ = ZJ.to, YJ.push(ZJ), UJ++
          }
          for (; UJ < XJ.length;) {
            let ZJ = XJ[UJ];
            if (ZJ.from != JJ || !(ZJ.to > ZJ.from || ZJ.to == JJ)) {
              cJ = Math.min(ZJ.from, cJ);
              break
            }
            YJ.push(ZJ), UJ++, cJ = Math.min(ZJ.to, cJ)
          }
          cJ = Math.min(cJ, nJ);
          let eJ = !1;
          if (YJ.some((ZJ => ZJ.from == JJ && (ZJ.to == cJ || cJ == nJ))) && (eJ = JJ == cJ, !eJ && cJ - JJ < 10)) {
            let ZJ = JJ - (sJ + DJ.value.length);
            ZJ > 0 && (DJ.next(ZJ), sJ = JJ);
            for (let FJ = JJ;;) {
              if (FJ >= cJ) {
                eJ = !0;
                break
              }
              if (!DJ.lineBreak && sJ + DJ.value.length > FJ) break;
              FJ = sJ + DJ.value.length, sJ += DJ.value.length, DJ.next()
            }
          }
          let AJ = HJ(YJ);
          if (eJ) jJ.add(JJ, JJ, FJ.c.widget({
            widget: new SJ(AJ),
            diagnostics: YJ.slice()
          }));
          else {
            let ZJ = YJ.reduce(((JJ, cJ) => cJ.markClass ? JJ + " " + cJ.markClass : JJ), "");
            jJ.add(JJ, cJ, FJ.c.mark({
              class: "cm-lintRange cm-lintRange-" + AJ + ZJ,
              diagnostics: YJ.slice(),
              inclusiveEnd: YJ.some((JJ => JJ.to > cJ))
            }))
          }
          if (hJ = cJ, hJ == nJ) break;
          for (let FJ = 0; FJ < YJ.length; FJ++) YJ[FJ].to <= hJ && YJ.splice(FJ--, 1)
        }
        let GJ = jJ.finish();
        return new AJ(GJ, cJ, qJ(GJ))
      }
    }

    function qJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        FJ = null;
      return JJ.between(ZJ, 1e9, ((JJ, ZJ, UJ) => {
        let {
          spec: eJ
        } = UJ;
        if (!(cJ && eJ.diagnostics.indexOf(cJ) < 0))
          if (FJ) {
            if (eJ.diagnostics.indexOf(FJ.diagnostic) < 0) return !1;
            FJ = new XJ(FJ.from, ZJ, FJ.diagnostic)
          } else FJ = new XJ(JJ, ZJ, cJ || eJ.diagnostics[0])
      })), FJ
    }

    function jJ(JJ, cJ) {
      let ZJ = cJ.pos,
        FJ = cJ.end || ZJ,
        UJ = JJ.state.facet(QJ).hideOn(JJ, ZJ, FJ);
      if (null != UJ) return UJ;
      let eJ = JJ.startState.doc.lineAt(cJ.pos);
      return !(!JJ.effects.some((JJ => JJ.is(hJ))) && !JJ.changes.touchesRange(eJ.from, Math.max(eJ.to, FJ)))
    }

    function YJ(JJ, cJ) {
      return JJ.field(nJ, !1) ? cJ : cJ.concat(UJ.A.appendConfig.of(PJ))
    }
    const hJ = UJ.A.define(),
      DJ = UJ.A.define(),
      sJ = UJ.A.define(),
      nJ = UJ.E.define({
        create: () => new AJ(FJ.c.none, null, null),
        update(JJ, cJ) {
          if (cJ.docChanged && JJ.diagnostics.size) {
            let ZJ = JJ.diagnostics.map(cJ.changes),
              FJ = null,
              UJ = JJ.panel;
            if (JJ.selected) {
              let UJ = cJ.changes.mapPos(JJ.selected.from, 1);
              FJ = qJ(ZJ, JJ.selected.diagnostic, UJ) || qJ(ZJ, null, UJ)
            }!ZJ.size && UJ && cJ.state.facet(QJ).autoPanel && (UJ = null), JJ = new AJ(ZJ, UJ, FJ)
          }
          for (let ZJ of cJ.effects)
            if (ZJ.is(hJ)) {
              let FJ = cJ.state.facet(QJ).autoPanel ? ZJ.value.length ? MJ.open : null : JJ.panel;
              JJ = AJ.init(ZJ.value, FJ, cJ.state)
            } else ZJ.is(DJ) ? JJ = new AJ(JJ.diagnostics, ZJ.value ? MJ.open : null, JJ.selected) : ZJ.is(sJ) && (JJ = new AJ(JJ.diagnostics, JJ.panel, ZJ.value));
          return JJ
        },
        provide: JJ => [FJ._.from(JJ, (JJ => JJ.panel)), FJ.f.je.from(JJ, (JJ => JJ.diagnostics))]
      });
    const GJ = FJ.c.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function fJ(JJ, cJ, ZJ) {
      let FJ, {
          diagnostics: UJ
        } = JJ.state.field(nJ),
        eJ = -1,
        XJ = -1;
      UJ.between(cJ - (ZJ < 0 ? 1 : 0), cJ + (ZJ > 0 ? 1 : 0), ((JJ, UJ, AJ) => {
        let {
          spec: qJ
        } = AJ;
        if (cJ >= JJ && cJ <= UJ && (JJ == UJ || (cJ > JJ || ZJ > 0) && (cJ < UJ || ZJ < 0))) return FJ = qJ.diagnostics, eJ = JJ, XJ = UJ, !1
      }));
      let AJ = JJ.state.facet(QJ).tooltipFilter;
      return FJ && AJ && (FJ = AJ(FJ, JJ.state)), FJ ? {
        pos: eJ,
        end: XJ,
        above: JJ.state.doc.lineAt(eJ).to < XJ,
        create: () => ({
          dom: xJ(JJ, FJ)
        })
      } : null
    }

    function xJ(JJ, cJ) {
      return (0, eJ.d)("ul", {
        class: "cm-tooltip-lint"
      }, cJ.map((cJ => yJ(JJ, cJ, !1))))
    }
    const rJ = JJ => {
        let cJ = JJ.state.field(nJ, !1);
        return !(!cJ || !cJ.panel) && (JJ.dispatch({
          effects: DJ.of(!1)
        }), !0)
      },
      vJ = [{
        key: "Mod-Shift-m",
        run: JJ => {
          let cJ = JJ.state.field(nJ, !1);
          cJ && cJ.panel || JJ.dispatch({
            effects: YJ(JJ.state, [DJ.of(!0)])
          });
          let ZJ = (0, FJ.u)(JJ, MJ.open);
          return ZJ && ZJ.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: JJ => {
          let cJ = JJ.state.field(nJ, !1);
          if (!cJ) return !1;
          let ZJ = JJ.state.selection.main,
            FJ = qJ(cJ.diagnostics, null, ZJ.to + 1);
          return !(!FJ && (FJ = qJ(cJ.diagnostics, null, 0), !FJ || FJ.from == ZJ.from && FJ.to == ZJ.to)) && (JJ.dispatch({
            selection: {
              anchor: FJ.from,
              head: FJ.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      mJ = FJ.k.fromClass(class {
        constructor(JJ) {
          this.view = JJ, this.timeout = -1, this.set = !0;
          let {
            delay: cJ
          } = JJ.state.facet(QJ);
          this.lintTime = Date.now() + cJ, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, cJ)
        }
        run() {
          clearTimeout(this.timeout);
          let JJ = Date.now();
          if (JJ < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - JJ);
          else {
            this.set = !1;
            let {
              state: JJ
            } = this.view, {
              sources: cJ
            } = JJ.facet(QJ);
            cJ.length && function(JJ, cJ, ZJ) {
              let FJ = [],
                UJ = -1;
              for (let eJ of JJ) eJ.then((ZJ => {
                FJ.push(ZJ), clearTimeout(UJ), FJ.length == JJ.length ? cJ(FJ) : UJ = setTimeout((() => cJ(FJ)), 200)
              }), ZJ)
            }(cJ.map((JJ => Promise.resolve(JJ(this.view)))), (cJ => {
              this.view.state.doc == JJ.doc && this.view.dispatch(function(JJ, cJ) {
                return {
                  effects: YJ(JJ, [hJ.of(cJ)])
                }
              }(this.view.state, cJ.reduce(((JJ, cJ) => JJ.concat(cJ)))))
            }), (JJ => {
              (0, FJ.Q)(this.view.state, JJ)
            }))
          }
        }
        update(JJ) {
          let cJ = JJ.state.facet(QJ);
          (JJ.docChanged || cJ != JJ.startState.facet(QJ) || cJ.needsRefresh && cJ.needsRefresh(JJ)) && (this.lintTime = Date.now() + cJ.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, cJ.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const QJ = UJ.p.define({
      combine: JJ => ({
        sources: JJ.map((JJ => JJ.source)).filter((JJ => null != JJ)),
        ...(0, UJ.S)(JJ.map((JJ => JJ.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: EJ,
          tooltipFilter: EJ,
          needsRefresh: (JJ, cJ) => JJ ? cJ ? ZJ => JJ(ZJ) || cJ(ZJ) : JJ : cJ,
          hideOn: (JJ, cJ) => JJ ? cJ ? (ZJ, FJ, UJ) => JJ(ZJ, FJ, UJ) || cJ(ZJ, FJ, UJ) : JJ : cJ,
          autoPanel: (JJ, cJ) => JJ || cJ
        })
      })
    });

    function EJ(JJ, cJ) {
      return JJ ? cJ ? (ZJ, FJ) => cJ(JJ(ZJ, FJ), FJ) : JJ : cJ
    }

    function VJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [QJ.of({
        source: JJ,
        config: cJ
      }), mJ, PJ]
    }

    function KJ(JJ) {
      let cJ = [];
      if (JJ) JJ: for (let {
          name: ZJ
        }
        of JJ) {
        for (let JJ = 0; JJ < ZJ.length; JJ++) {
          let FJ = ZJ[JJ];
          if (/[a-zA-Z]/.test(FJ) && !cJ.some((JJ => JJ.toLowerCase() == FJ.toLowerCase()))) {
            cJ.push(FJ);
            continue JJ
          }
        }
        cJ.push("")
      }
      return cJ
    }

    function yJ(JJ, cJ, ZJ) {
      var FJ;
      let UJ = ZJ ? KJ(cJ.actions) : [];
      return (0, eJ.d)("li", {
        class: "cm-diagnostic cm-diagnostic-" + cJ.severity
      }, (0, eJ.d)("span", {
        class: "cm-diagnosticText"
      }, cJ.renderMessage ? cJ.renderMessage(JJ) : cJ.message), null === (FJ = cJ.actions) || void 0 === FJ ? void 0 : FJ.map(((ZJ, FJ) => {
        let XJ = !1,
          AJ = FJ => {
            if (FJ.preventDefault(), XJ) return;
            XJ = !0;
            let UJ = qJ(JJ.state.field(nJ).diagnostics, cJ);
            UJ && ZJ.apply(JJ, UJ.from, UJ.to)
          },
          {
            name: jJ
          } = ZJ,
          YJ = UJ[FJ] ? jJ.indexOf(UJ[FJ]) : -1,
          hJ = YJ < 0 ? jJ : [jJ.slice(0, YJ), (0, eJ.d)("u", jJ.slice(YJ, YJ + 1)), jJ.slice(YJ + 1)],
          DJ = ZJ.markClass ? " " + ZJ.markClass : "";
        return (0, eJ.d)("button", {
          type: "button",
          class: "cm-diagnosticAction" + DJ,
          onclick: AJ,
          onmousedown: AJ,
          "aria-label": ` Action: ${jJ}${YJ<0?"":` (access key "${UJ[FJ]})"`}.`
        }, hJ)
      })), cJ.source && (0, eJ.d)("div", {
        class: "cm-diagnosticSource"
      }, cJ.source))
    }
    class SJ extends FJ.l {
      constructor(JJ) {
        super(), this.sev = JJ
      }
      eq(JJ) {
        return JJ.sev == this.sev
      }
      toDOM() {
        return (0, eJ.d)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class IJ {
      constructor(JJ, cJ) {
        this.diagnostic = cJ, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = yJ(JJ, cJ, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class MJ {
      constructor(JJ) {
        this.view = JJ, this.items = [];
        this.list = (0, eJ.d)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: cJ => {
            if (!(cJ.ctrlKey || cJ.altKey || cJ.metaKey)) {
              if (27 == cJ.keyCode) rJ(this.view), this.view.focus();
              else if (38 == cJ.keyCode || 33 == cJ.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == cJ.keyCode || 34 == cJ.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == cJ.keyCode) this.moveSelection(0);
              else if (35 == cJ.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == cJ.keyCode) this.view.focus();
              else {
                if (!(cJ.keyCode >= 65 && cJ.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: ZJ
                  } = this.items[this.selectedIndex], FJ = KJ(ZJ.actions);
                  for (let UJ = 0; UJ < FJ.length; UJ++)
                    if (FJ[UJ].toUpperCase().charCodeAt(0) == cJ.keyCode) {
                      let cJ = qJ(this.view.state.field(nJ).diagnostics, ZJ);
                      cJ && ZJ.actions[UJ].apply(JJ, cJ.from, cJ.to)
                    }
                }
              }
              cJ.preventDefault()
            }
          },
          onclick: JJ => {
            for (let cJ = 0; cJ < this.items.length; cJ++) this.items[cJ].dom.contains(JJ.target) && this.moveSelection(cJ)
          }
        }), this.dom = (0, eJ.d)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, eJ.d)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => rJ(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let JJ = this.view.state.field(nJ).selected;
        if (!JJ) return -1;
        for (let cJ = 0; cJ < this.items.length; cJ++)
          if (this.items[cJ].diagnostic == JJ.diagnostic) return cJ;
        return -1
      }
      update() {
        let {
          diagnostics: JJ,
          selected: cJ
        } = this.view.state.field(nJ), ZJ = 0, FJ = !1, UJ = null, eJ = new Set;
        for (JJ.between(0, this.view.state.doc.length, ((JJ, XJ, AJ) => {
            let {
              spec: qJ
            } = AJ;
            for (let jJ of qJ.diagnostics) {
              if (eJ.has(jJ)) continue;
              eJ.add(jJ);
              let JJ, XJ = -1;
              for (let cJ = ZJ; cJ < this.items.length; cJ++)
                if (this.items[cJ].diagnostic == jJ) {
                  XJ = cJ;
                  break
                } XJ < 0 ? (JJ = new IJ(this.view, jJ), this.items.splice(ZJ, 0, JJ), FJ = !0) : (JJ = this.items[XJ], XJ > ZJ && (this.items.splice(ZJ, XJ - ZJ), FJ = !0)), cJ && JJ.diagnostic == cJ.diagnostic ? JJ.dom.hasAttribute("aria-selected") || (JJ.dom.setAttribute("aria-selected", "true"), UJ = JJ) : JJ.dom.hasAttribute("aria-selected") && JJ.dom.removeAttribute("aria-selected"), ZJ++
            }
          })); ZJ < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) FJ = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new IJ(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), FJ = !0), UJ ? (this.list.setAttribute("aria-activedescendant", UJ.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: UJ.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: JJ => {
            let {
              sel: cJ,
              panel: ZJ
            } = JJ, FJ = ZJ.height / this.list.offsetHeight;
            cJ.top < ZJ.top ? this.list.scrollTop -= (ZJ.top - cJ.top) / FJ : cJ.bottom > ZJ.bottom && (this.list.scrollTop += (cJ.bottom - ZJ.bottom) / FJ)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), FJ && this.sync()
      }
      sync() {
        let JJ = this.list.firstChild;

        function cJ() {
          let cJ = JJ;
          JJ = cJ.nextSibling, cJ.remove()
        }
        for (let ZJ of this.items)
          if (ZJ.dom.parentNode == this.list) {
            for (; JJ != ZJ.dom;) cJ();
            JJ = ZJ.dom.nextSibling
          } else this.list.insertBefore(ZJ.dom, JJ);
        for (; JJ;) cJ()
      }
      moveSelection(JJ) {
        if (this.selectedIndex < 0) return;
        let cJ = qJ(this.view.state.field(nJ).diagnostics, this.items[JJ].diagnostic);
        cJ && this.view.dispatch({
          selection: {
            anchor: cJ.from,
            head: cJ.to
          },
          scrollIntoView: !0,
          effects: sJ.of(cJ)
        })
      }
      static open(JJ) {
        return new MJ(JJ)
      }
    }

    function bJ(JJ) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(JJ)}</svg>')`
    }

    function wJ(JJ) {
      return bJ(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${JJ}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const WJ = FJ.f.baseTheme({
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
        backgroundImage: wJ("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: wJ("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: wJ("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: wJ("#66d")
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

    function gJ(JJ) {
      return "error" == JJ ? 4 : "warning" == JJ ? 3 : "info" == JJ ? 2 : 1
    }

    function HJ(JJ) {
      let cJ = "hint",
        ZJ = 1;
      for (let FJ of JJ) {
        let JJ = gJ(FJ.severity);
        JJ > ZJ && (ZJ = JJ, cJ = FJ.severity)
      }
      return cJ
    }
    FJ.j;
    const PJ = [nJ, FJ.f.je.compute([nJ], (JJ => {
      let {
        selected: cJ,
        panel: ZJ
      } = JJ.field(nJ);
      return cJ && ZJ && cJ.from != cJ.to ? FJ.c.set([GJ.range(cJ.from, cJ.to)]) : FJ.c.none
    })), (0, FJ.G)(fJ, {
      hideOn: jJ
    }), WJ]
  },
  40094: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => oJ,
      d: () => xJ,
      e: () => lJ
    });
    var FJ = ZJ(40065),
      UJ = ZJ(40060),
      eJ = ZJ(40070);
    const XJ = "function" == typeof String.prototype.normalize ? JJ => JJ.normalize("NFKD") : JJ => JJ;
    class AJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JJ.length,
          UJ = arguments.length > 4 ? arguments[4] : void 0,
          eJ = arguments.length > 5 ? arguments[5] : void 0;
        this.test = eJ, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = JJ.iterRange(ZJ, FJ), this.bufferStart = ZJ, this.normalize = UJ ? JJ => UJ(XJ(JJ)) : XJ, this.query = this.normalize(cJ)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, UJ.L)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let JJ = this.peek();
          if (JJ < 0) return this.done = !0, this;
          let cJ = (0, UJ.bb)(JJ),
            ZJ = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, UJ.P)(JJ);
          let FJ = this.normalize(cJ);
          if (FJ.length)
            for (let UJ = 0, eJ = ZJ;; UJ++) {
              let JJ = FJ.charCodeAt(UJ),
                XJ = this.match(JJ, eJ, this.bufferPos + this.bufferStart);
              if (UJ == FJ.length - 1) {
                if (XJ) return this.value = XJ, this;
                break
              }
              eJ == ZJ && UJ < cJ.length && cJ.charCodeAt(UJ) == JJ && eJ++
            }
        }
      }
      match(JJ, cJ, ZJ) {
        let FJ = null;
        for (let UJ = 0; UJ < this.matches.length; UJ += 2) {
          let cJ = this.matches[UJ],
            eJ = !1;
          this.query.charCodeAt(cJ) == JJ && (cJ == this.query.length - 1 ? FJ = {
            from: this.matches[UJ + 1],
            to: ZJ
          } : (this.matches[UJ]++, eJ = !0)), eJ || (this.matches.splice(UJ, 2), UJ -= 2)
        }
        return this.query.charCodeAt(0) == JJ && (1 == this.query.length ? FJ = {
          from: cJ,
          to: ZJ
        } : this.matches.push(1, cJ)), FJ && this.test && !this.test(FJ.from, FJ.to, this.buffer, this.bufferStart) && (FJ = null), FJ
      }
    }
    "undefined" != typeof Symbol && (AJ.prototype[Symbol.iterator] = function() {
      return this
    });
    const qJ = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      jJ = "gm" + (null == /x/.unicode ? "" : "u");
    class YJ {
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : JJ.length;
        if (this.text = JJ, this.to = UJ, this.curLine = "", this.done = !1, this.value = qJ, /\\[sWDnr]|\n|\r|\[\^/.test(cJ)) return new sJ(JJ, cJ, ZJ, FJ, UJ);
        this.re = new RegExp(cJ, jJ + ((null === ZJ || void 0 === ZJ ? void 0 : ZJ.ignoreCase) ? "i" : "")), this.test = null === ZJ || void 0 === ZJ ? void 0 : ZJ.test, this.iter = JJ.iter();
        let eJ = JJ.lineAt(FJ);
        this.curLineStart = eJ.from, this.matchPos = nJ(JJ, FJ), this.getLine(this.curLineStart)
      }
      getLine(JJ) {
        this.iter.next(JJ), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let JJ = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = JJ;
          let cJ = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (cJ) {
            let ZJ = this.curLineStart + cJ.index,
              FJ = ZJ + cJ[0].length;
            if (this.matchPos = nJ(this.text, FJ + (ZJ == FJ ? 1 : 0)), ZJ == this.curLineStart + this.curLine.length && this.nextLine(), (ZJ < FJ || ZJ > this.value.to) && (!this.test || this.test(ZJ, FJ, cJ))) return this.value = {
              from: ZJ,
              to: FJ,
              match: cJ
            }, this;
            JJ = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), JJ = 0
          }
        }
      }
    }
    const hJ = new WeakMap;
    class DJ {
      constructor(JJ, cJ) {
        this.from = JJ, this.text = cJ
      }
      get to() {
        return this.from + this.text.length
      }
      static get(JJ, cJ, ZJ) {
        let FJ = hJ.get(JJ);
        if (!FJ || FJ.from >= ZJ || FJ.to <= cJ) {
          let FJ = new DJ(cJ, JJ.sliceString(cJ, ZJ));
          return hJ.set(JJ, FJ), FJ
        }
        if (FJ.from == cJ && FJ.to == ZJ) return FJ;
        let {
          text: UJ,
          from: eJ
        } = FJ;
        return eJ > cJ && (UJ = JJ.sliceString(cJ, eJ) + UJ, eJ = cJ), FJ.to < ZJ && (UJ += JJ.sliceString(FJ.to, ZJ)), hJ.set(JJ, new DJ(eJ, UJ)), new DJ(cJ, UJ.slice(cJ - eJ, ZJ - eJ))
      }
    }
    class sJ {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        this.text = JJ, this.to = UJ, this.done = !1, this.value = qJ, this.matchPos = nJ(JJ, FJ), this.re = new RegExp(cJ, jJ + ((null === ZJ || void 0 === ZJ ? void 0 : ZJ.ignoreCase) ? "i" : "")), this.test = null === ZJ || void 0 === ZJ ? void 0 : ZJ.test, this.flat = DJ.get(JJ, FJ, this.chunkEnd(FJ + 5e3))
      }
      chunkEnd(JJ) {
        return JJ >= this.to ? this.to : this.text.lineAt(JJ).to
      }
      next() {
        for (;;) {
          let JJ = this.re.lastIndex = this.matchPos - this.flat.from,
            cJ = this.re.exec(this.flat.text);
          if (cJ && !cJ[0] && cJ.index == JJ && (this.re.lastIndex = JJ + 1, cJ = this.re.exec(this.flat.text)), cJ) {
            let JJ = this.flat.from + cJ.index,
              ZJ = JJ + cJ[0].length;
            if ((this.flat.to >= this.to || cJ.index + cJ[0].length <= this.flat.text.length - 10) && (!this.test || this.test(JJ, ZJ, cJ))) return this.value = {
              from: JJ,
              to: ZJ,
              match: cJ
            }, this.matchPos = nJ(this.text, ZJ + (JJ == ZJ ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = DJ.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function nJ(JJ, cJ) {
      if (cJ >= JJ.length) return cJ;
      let ZJ, FJ = JJ.lineAt(cJ);
      for (; cJ < FJ.to && (ZJ = FJ.text.charCodeAt(cJ - FJ.from)) >= 56320 && ZJ < 57344;) cJ++;
      return cJ
    }
    "undefined" != typeof Symbol && (YJ.prototype[Symbol.iterator] = sJ.prototype[Symbol.iterator] = function() {
      return this
    });
    const GJ = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      fJ = UJ.p.define({
        combine: JJ => (0, UJ.S)(JJ, GJ, {
          highlightWordAroundCursor: (JJ, cJ) => JJ || cJ,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function xJ(JJ) {
      let cJ = [EJ, QJ];
      return JJ && cJ.push(fJ.of(JJ)), cJ
    }
    const rJ = FJ.c.mark({
        class: "cm-selectionMatch"
      }),
      vJ = FJ.c.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function mJ(JJ, cJ, ZJ, FJ) {
      return (0 == ZJ || JJ(cJ.sliceDoc(ZJ - 1, ZJ)) != UJ.i.Word) && (FJ == cJ.doc.length || JJ(cJ.sliceDoc(FJ, FJ + 1)) != UJ.i.Word)
    }
    const QJ = FJ.k.fromClass(class {
        constructor(JJ) {
          this.je = this.getDeco(JJ)
        }
        update(JJ) {
          (JJ.selectionSet || JJ.docChanged || JJ.viewportChanged) && (this.je = this.getDeco(JJ.view))
        }
        getDeco(JJ) {
          let cJ = JJ.state.facet(fJ),
            {
              state: ZJ
            } = JJ,
            eJ = ZJ.selection;
          if (eJ.ws.length > 1) return FJ.c.none;
          let XJ, qJ = eJ.main,
            jJ = null;
          if (qJ.empty) {
            if (!cJ.highlightWordAroundCursor) return FJ.c.none;
            let JJ = ZJ.wordAt(qJ.head);
            if (!JJ) return FJ.c.none;
            jJ = ZJ.charCategorizer(qJ.head), XJ = ZJ.sliceDoc(JJ.from, JJ.to)
          } else {
            let JJ = qJ.to - qJ.from;
            if (JJ < cJ.minSelectionLength || JJ > 200) return FJ.c.none;
            if (cJ.wholeWords) {
              if (XJ = ZJ.sliceDoc(qJ.from, qJ.to), jJ = ZJ.charCategorizer(qJ.head), !mJ(jJ, ZJ, qJ.from, qJ.to) || ! function(JJ, cJ, ZJ, FJ) {
                  return JJ(cJ.sliceDoc(ZJ, ZJ + 1)) == UJ.i.Word && JJ(cJ.sliceDoc(FJ - 1, FJ)) == UJ.i.Word
                }(jJ, ZJ, qJ.from, qJ.to)) return FJ.c.none
            } else if (XJ = ZJ.sliceDoc(qJ.from, qJ.to), !XJ) return FJ.c.none
          }
          let YJ = [];
          for (let UJ of JJ.o5) {
            let JJ = new AJ(ZJ.doc, XJ, UJ.from, UJ.to);
            for (; !JJ.next().done;) {
              let {
                from: UJ,
                to: eJ
              } = JJ.value;
              if ((!jJ || mJ(jJ, ZJ, UJ, eJ)) && (qJ.empty && UJ <= qJ.from && eJ >= qJ.to ? YJ.push(vJ.range(UJ, eJ)) : (UJ >= qJ.to || eJ <= qJ.from) && YJ.push(rJ.range(UJ, eJ)), YJ.length > cJ.maxMatches)) return FJ.c.none
            }
          }
          return FJ.c.set(YJ)
        }
      }, {
        je: JJ => JJ.je
      }),
      EJ = FJ.f.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const VJ = UJ.p.define({
      combine: JJ => (0, UJ.S)(JJ, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: JJ => new Jc(JJ),
        scrollToMatch: JJ => FJ.f.scrollIntoView(JJ)
      })
    });
    class KJ {
      constructor(JJ) {
        this.search = JJ.search, this.caseSensitive = !!JJ.caseSensitive, this.literal = !!JJ.literal, this.regexp = !!JJ.regexp, this.replace = JJ.replace || "", this.valid = !!this.search && (!this.regexp || function(JJ) {
          try {
            return new RegExp(JJ, jJ), !0
          } catch (cJ) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!JJ.wholeWord, this.test = JJ.test
      }
      unquote(JJ) {
        return this.literal ? JJ : JJ.replace(/\\([nrt\\])/g, ((JJ, cJ) => "n" == cJ ? "\n" : "r" == cJ ? "\r" : "t" == cJ ? "\t" : "\\"))
      }
      eq(JJ) {
        return this.search == JJ.search && this.replace == JJ.replace && this.caseSensitive == JJ.caseSensitive && this.regexp == JJ.regexp && this.wholeWord == JJ.wholeWord && this.test == JJ.test
      }
      create() {
        return this.regexp ? new WJ(this) : new IJ(this)
      }
      getCursor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = JJ.doc ? JJ : UJ.o.create({
            doc: JJ
          });
        return null == ZJ && (ZJ = FJ.doc.length), this.regexp ? MJ(this, FJ, cJ, ZJ) : SJ(this, FJ, cJ, ZJ)
      }
    }
    class yJ {
      constructor(JJ) {
        this.spec = JJ
      }
    }

    function SJ(JJ, cJ, ZJ, FJ) {
      let eJ;
      var XJ, qJ;
      return JJ.wholeWord && (XJ = cJ.doc, qJ = cJ.charCategorizer(cJ.selection.main.head), eJ = (JJ, cJ, ZJ, FJ) => ((FJ > JJ || FJ + ZJ.length < cJ) && (FJ = Math.max(0, JJ - 2), ZJ = XJ.sliceString(FJ, Math.min(XJ.length, cJ + 2))), (qJ(bJ(ZJ, JJ - FJ)) != UJ.i.Word || qJ(wJ(ZJ, JJ - FJ)) != UJ.i.Word) && (qJ(wJ(ZJ, cJ - FJ)) != UJ.i.Word || qJ(bJ(ZJ, cJ - FJ)) != UJ.i.Word))), JJ.test && (eJ = function(JJ, cJ, ZJ) {
        return (FJ, UJ, eJ, XJ) => {
          if (ZJ && !ZJ(FJ, UJ, eJ, XJ)) return !1;
          let AJ = FJ >= XJ && UJ <= XJ + eJ.length ? eJ.slice(FJ - XJ, UJ - XJ) : cJ.doc.sliceString(FJ, UJ);
          return JJ(AJ, cJ, FJ, UJ)
        }
      }(JJ.test, cJ, eJ)), new AJ(cJ.doc, JJ.unquoted, ZJ, FJ, JJ.caseSensitive ? void 0 : JJ => JJ.toLowerCase(), eJ)
    }
    class IJ extends yJ {
      constructor(JJ) {
        super(JJ)
      }
      nextMatch(JJ, cJ, ZJ) {
        let FJ = SJ(this.spec, JJ, ZJ, JJ.doc.length).nextOverlapping();
        if (FJ.done) {
          let ZJ = Math.min(JJ.doc.length, cJ + this.spec.unquoted.length);
          FJ = SJ(this.spec, JJ, 0, ZJ).nextOverlapping()
        }
        return FJ.done || FJ.value.from == cJ && FJ.value.to == ZJ ? null : FJ.value
      }
      prevMatchInRange(JJ, cJ, ZJ) {
        for (let FJ = ZJ;;) {
          let ZJ = Math.max(cJ, FJ - 1e4 - this.spec.unquoted.length),
            UJ = SJ(this.spec, JJ, ZJ, FJ),
            eJ = null;
          for (; !UJ.nextOverlapping().done;) eJ = UJ.value;
          if (eJ) return eJ;
          if (ZJ == cJ) return null;
          FJ -= 1e4
        }
      }
      prevMatch(JJ, cJ, ZJ) {
        let FJ = this.prevMatchInRange(JJ, 0, cJ);
        return FJ || (FJ = this.prevMatchInRange(JJ, Math.max(0, ZJ - this.spec.unquoted.length), JJ.doc.length)), !FJ || FJ.from == cJ && FJ.to == ZJ ? null : FJ
      }
      getReplacement(JJ) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(JJ, cJ) {
        let ZJ = SJ(this.spec, JJ, 0, JJ.doc.length),
          FJ = [];
        for (; !ZJ.next().done;) {
          if (FJ.length >= cJ) return null;
          FJ.push(ZJ.value)
        }
        return FJ
      }
      highlight(JJ, cJ, ZJ, FJ) {
        let UJ = SJ(this.spec, JJ, Math.max(0, cJ - this.spec.unquoted.length), Math.min(ZJ + this.spec.unquoted.length, JJ.doc.length));
        for (; !UJ.next().done;) FJ(UJ.value.from, UJ.value.to)
      }
    }

    function MJ(JJ, cJ, ZJ, FJ) {
      let eJ;
      var XJ;
      return JJ.wholeWord && (XJ = cJ.charCategorizer(cJ.selection.main.head), eJ = (JJ, cJ, ZJ) => !ZJ[0].length || (XJ(bJ(ZJ.input, ZJ.index)) != UJ.i.Word || XJ(wJ(ZJ.input, ZJ.index)) != UJ.i.Word) && (XJ(wJ(ZJ.input, ZJ.index + ZJ[0].length)) != UJ.i.Word || XJ(bJ(ZJ.input, ZJ.index + ZJ[0].length)) != UJ.i.Word)), JJ.test && (eJ = function(JJ, cJ, ZJ) {
        return (FJ, UJ, eJ) => (!ZJ || ZJ(FJ, UJ, eJ)) && JJ(eJ[0], cJ, FJ, UJ)
      }(JJ.test, cJ, eJ)), new YJ(cJ.doc, JJ.search, {
        ignoreCase: !JJ.caseSensitive,
        test: eJ
      }, ZJ, FJ)
    }

    function bJ(JJ, cJ) {
      return JJ.slice((0, UJ.X)(JJ, cJ, !1), cJ)
    }

    function wJ(JJ, cJ) {
      return JJ.slice(cJ, (0, UJ.X)(JJ, cJ))
    }
    class WJ extends yJ {
      nextMatch(JJ, cJ, ZJ) {
        let FJ = MJ(this.spec, JJ, ZJ, JJ.doc.length).next();
        return FJ.done && (FJ = MJ(this.spec, JJ, 0, cJ).next()), FJ.done ? null : FJ.value
      }
      prevMatchInRange(JJ, cJ, ZJ) {
        for (let FJ = 1;; FJ++) {
          let UJ = Math.max(cJ, ZJ - 1e4 * FJ),
            eJ = MJ(this.spec, JJ, UJ, ZJ),
            XJ = null;
          for (; !eJ.next().done;) XJ = eJ.value;
          if (XJ && (UJ == cJ || XJ.from > UJ + 10)) return XJ;
          if (UJ == cJ) return null
        }
      }
      prevMatch(JJ, cJ, ZJ) {
        return this.prevMatchInRange(JJ, 0, cJ) || this.prevMatchInRange(JJ, ZJ, JJ.doc.length)
      }
      getReplacement(JJ) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((cJ, ZJ) => {
          if ("&" == ZJ) return JJ.match[0];
          if ("$" == ZJ) return "$";
          for (let FJ = ZJ.length; FJ > 0; FJ--) {
            let cJ = +ZJ.slice(0, FJ);
            if (cJ > 0 && cJ < JJ.match.length) return JJ.match[cJ] + ZJ.slice(FJ)
          }
          return cJ
        }))
      }
      matchAll(JJ, cJ) {
        let ZJ = MJ(this.spec, JJ, 0, JJ.doc.length),
          FJ = [];
        for (; !ZJ.next().done;) {
          if (FJ.length >= cJ) return null;
          FJ.push(ZJ.value)
        }
        return FJ
      }
      highlight(JJ, cJ, ZJ, FJ) {
        let UJ = MJ(this.spec, JJ, Math.max(0, cJ - 250), Math.min(ZJ + 250, JJ.doc.length));
        for (; !UJ.next().done;) FJ(UJ.value.from, UJ.value.to)
      }
    }
    const gJ = UJ.A.define(),
      HJ = UJ.A.define(),
      PJ = UJ.E.define({
        create: JJ => new kJ(LJ(JJ).create(), null),
        update(JJ, cJ) {
          for (let ZJ of cJ.effects) ZJ.is(gJ) ? JJ = new kJ(ZJ.value.create(), JJ.panel) : ZJ.is(HJ) && (JJ = new kJ(JJ.query, ZJ.value ? RJ : null));
          return JJ
        },
        provide: JJ => FJ._.from(JJ, (JJ => JJ.panel))
      });
    class kJ {
      constructor(JJ, cJ) {
        this.query = JJ, this.panel = cJ
      }
    }
    const pJ = FJ.c.mark({
        class: "cm-searchMatch"
      }),
      dJ = FJ.c.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      zJ = FJ.k.fromClass(class {
        constructor(JJ) {
          this.view = JJ, this.je = this.highlight(JJ.state.field(PJ))
        }
        update(JJ) {
          let cJ = JJ.state.field(PJ);
          (cJ != JJ.startState.field(PJ) || JJ.docChanged || JJ.selectionSet || JJ.viewportChanged) && (this.je = this.highlight(cJ))
        }
        highlight(JJ) {
          let {
            query: cJ,
            panel: ZJ
          } = JJ;
          if (!ZJ || !cJ.spec.valid) return FJ.c.none;
          let {
            view: eJ
          } = this, XJ = new UJ.u;
          for (let FJ = 0, UJ = eJ.o5, AJ = UJ.length; FJ < AJ; FJ++) {
            let {
              from: JJ,
              to: ZJ
            } = UJ[FJ];
            for (; FJ < AJ - 1 && ZJ > UJ[FJ + 1].from - 500;) ZJ = UJ[++FJ].to;
            cJ.highlight(eJ.state, JJ, ZJ, ((JJ, cJ) => {
              let ZJ = eJ.state.selection.ws.some((ZJ => ZJ.from == JJ && ZJ.to == cJ));
              XJ.add(JJ, cJ, ZJ ? dJ : pJ)
            }))
          }
          return XJ.finish()
        }
      }, {
        je: JJ => JJ.je
      });

    function NJ(JJ) {
      return cJ => {
        let ZJ = cJ.state.field(PJ, !1);
        return ZJ && ZJ.query.spec.valid ? JJ(cJ, ZJ) : tJ(cJ)
      }
    }
    const OJ = NJ(((JJ, cJ) => {
        let {
          query: ZJ
        } = cJ, {
          to: FJ
        } = JJ.state.selection.main, eJ = ZJ.nextMatch(JJ.state, FJ, FJ);
        if (!eJ) return !1;
        let XJ = UJ.m.single(eJ.from, eJ.to),
          AJ = JJ.state.facet(VJ);
        return JJ.dispatch({
          selection: XJ,
          effects: [Uc(JJ, eJ), AJ.scrollToMatch(XJ.main, JJ)],
          userEvent: "select.search"
        }), BJ(JJ), !0
      })),
      TJ = NJ(((JJ, cJ) => {
        let {
          query: ZJ
        } = cJ, {
          state: FJ
        } = JJ, {
          from: eJ
        } = FJ.selection.main, XJ = ZJ.prevMatch(FJ, eJ, eJ);
        if (!XJ) return !1;
        let AJ = UJ.m.single(XJ.from, XJ.to),
          qJ = JJ.state.facet(VJ);
        return JJ.dispatch({
          selection: AJ,
          effects: [Uc(JJ, XJ), qJ.scrollToMatch(AJ.main, JJ)],
          userEvent: "select.search"
        }), BJ(JJ), !0
      })),
      CJ = NJ(((JJ, cJ) => {
        let {
          query: ZJ
        } = cJ, FJ = ZJ.matchAll(JJ.state, 1e3);
        return !(!FJ || !FJ.length) && (JJ.dispatch({
          selection: UJ.m.create(FJ.map((JJ => UJ.m.range(JJ.from, JJ.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      uJ = NJ(((JJ, cJ) => {
        let {
          query: ZJ
        } = cJ, {
          state: eJ
        } = JJ, {
          from: XJ,
          to: AJ
        } = eJ.selection.main;
        if (eJ.readOnly) return !1;
        let qJ = ZJ.nextMatch(eJ, XJ, XJ);
        if (!qJ) return !1;
        let jJ, YJ, hJ = qJ,
          DJ = [],
          sJ = [];
        hJ.from == XJ && hJ.to == AJ && (YJ = eJ.toText(ZJ.getReplacement(hJ)), DJ.push({
          from: hJ.from,
          to: hJ.to,
          insert: YJ
        }), hJ = ZJ.nextMatch(eJ, hJ.from, hJ.to), sJ.push(FJ.f.announce.of(eJ.phrase("replaced match on line $", eJ.doc.lineAt(XJ).number) + ".")));
        let nJ = JJ.state.changes(DJ);
        return hJ && (jJ = UJ.m.single(hJ.from, hJ.to).map(nJ), sJ.push(Uc(JJ, hJ)), sJ.push(eJ.facet(VJ).scrollToMatch(jJ.main, JJ))), JJ.dispatch({
          changes: nJ,
          selection: jJ,
          effects: sJ,
          userEvent: "input.replace"
        }), !0
      })),
      iJ = NJ(((JJ, cJ) => {
        let {
          query: ZJ
        } = cJ;
        if (JJ.state.readOnly) return !1;
        let UJ = ZJ.matchAll(JJ.state, 1e9).map((JJ => {
          let {
            from: cJ,
            to: FJ
          } = JJ;
          return {
            from: cJ,
            to: FJ,
            insert: ZJ.getReplacement(JJ)
          }
        }));
        if (!UJ.length) return !1;
        let eJ = JJ.state.phrase("replaced $ matches", UJ.length) + ".";
        return JJ.dispatch({
          changes: UJ,
          effects: FJ.f.announce.of(eJ),
          userEvent: "input.replace.all"
        }), !0
      }));

    function RJ(JJ) {
      return JJ.state.facet(VJ).createPanel(JJ)
    }

    function LJ(JJ, cJ) {
      var ZJ, FJ, UJ, eJ, XJ;
      let AJ = JJ.selection.main,
        qJ = AJ.empty || AJ.to > AJ.from + 100 ? "" : JJ.sliceDoc(AJ.from, AJ.to);
      if (cJ && !qJ) return cJ;
      let jJ = JJ.facet(VJ);
      return new KJ({
        search: (null !== (ZJ = null === cJ || void 0 === cJ ? void 0 : cJ.literal) && void 0 !== ZJ ? ZJ : jJ.literal) ? qJ : qJ.replace(/\n/g, "\\n"),
        caseSensitive: null !== (FJ = null === cJ || void 0 === cJ ? void 0 : cJ.caseSensitive) && void 0 !== FJ ? FJ : jJ.caseSensitive,
        literal: null !== (UJ = null === cJ || void 0 === cJ ? void 0 : cJ.literal) && void 0 !== UJ ? UJ : jJ.literal,
        regexp: null !== (eJ = null === cJ || void 0 === cJ ? void 0 : cJ.regexp) && void 0 !== eJ ? eJ : jJ.regexp,
        wholeWord: null !== (XJ = null === cJ || void 0 === cJ ? void 0 : cJ.wholeWord) && void 0 !== XJ ? XJ : jJ.wholeWord
      })
    }

    function aJ(JJ) {
      let cJ = (0, FJ.u)(JJ, RJ);
      return cJ && cJ.dom.querySelector("[main-field]")
    }

    function BJ(JJ) {
      let cJ = aJ(JJ);
      cJ && cJ == JJ.root.activeElement && cJ.select()
    }
    const tJ = JJ => {
        let cJ = JJ.state.field(PJ, !1);
        if (cJ && cJ.panel) {
          let ZJ = aJ(JJ);
          if (ZJ && ZJ != JJ.root.activeElement) {
            let FJ = LJ(JJ.state, cJ.query.spec);
            FJ.valid && JJ.dispatch({
              effects: gJ.of(FJ)
            }), ZJ.focus(), ZJ.select()
          }
        } else JJ.dispatch({
          effects: [HJ.of(!0), cJ ? gJ.of(LJ(JJ.state, cJ.query.spec)) : UJ.A.appendConfig.of(Xc)]
        });
        return !0
      },
      oJ = JJ => {
        let cJ = JJ.state.field(PJ, !1);
        if (!cJ || !cJ.panel) return !1;
        let ZJ = (0, FJ.u)(JJ, RJ);
        return ZJ && ZJ.dom.contains(JJ.root.activeElement) && JJ.focus(), JJ.dispatch({
          effects: HJ.of(!1)
        }), !0
      },
      lJ = [{
        key: "Mod-f",
        run: tJ,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: OJ,
        shift: TJ,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: OJ,
        shift: TJ,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: oJ,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: JJ => {
          let {
            state: cJ,
            dispatch: ZJ
          } = JJ, FJ = cJ.selection;
          if (FJ.ws.length > 1 || FJ.main.empty) return !1;
          let {
            from: eJ,
            to: XJ
          } = FJ.main, qJ = [], jJ = 0;
          for (let YJ = new AJ(cJ.doc, cJ.sliceDoc(eJ, XJ)); !YJ.next().done;) {
            if (qJ.length > 1e3) return !1;
            YJ.value.from == eJ && (jJ = qJ.length), qJ.push(UJ.m.range(YJ.value.from, YJ.value.to))
          }
          return ZJ(cJ.update({
            selection: UJ.m.create(qJ, jJ),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: JJ => {
          let {
            state: cJ
          } = JJ, ZJ = String(cJ.doc.lineAt(JJ.state.selection.main.head).number), {
            close: eJ,
            result: XJ
          } = (0, FJ.Y)(JJ, {
            label: cJ.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: ZJ
            },
            focus: !0,
            submitLabel: cJ.phrase("go")
          });
          return XJ.then((ZJ => {
            let XJ = ZJ && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(ZJ.elements.line.value);
            if (!XJ) return void JJ.dispatch({
              effects: eJ
            });
            let AJ = cJ.doc.lineAt(cJ.selection.main.head),
              [, qJ, jJ, YJ, hJ] = XJ,
              DJ = YJ ? +YJ.slice(1) : 0,
              sJ = jJ ? +jJ : AJ.number;
            if (jJ && hJ) {
              let JJ = sJ / 100;
              qJ && (JJ = JJ * ("-" == qJ ? -1 : 1) + AJ.number / cJ.doc.lines), sJ = Math.round(cJ.doc.lines * JJ)
            } else jJ && qJ && (sJ = sJ * ("-" == qJ ? -1 : 1) + AJ.number);
            let nJ = cJ.doc.line(Math.max(1, Math.min(cJ.doc.lines, sJ))),
              GJ = UJ.m.cursor(nJ.from + Math.max(0, Math.min(DJ, nJ.length)));
            JJ.dispatch({
              effects: [eJ, FJ.f.scrollIntoView(GJ.from, {
                y: "center"
              })],
              selection: GJ
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: JJ => {
          let {
            state: cJ,
            dispatch: ZJ
          } = JJ, {
            ws: eJ
          } = cJ.selection;
          if (eJ.some((JJ => JJ.from === JJ.to))) return (JJ => {
            let {
              state: cJ,
              dispatch: ZJ
            } = JJ, {
              selection: FJ
            } = cJ, eJ = UJ.m.create(FJ.ws.map((JJ => cJ.wordAt(JJ.head) || UJ.m.cursor(JJ.head))), FJ.mainIndex);
            return !eJ.eq(FJ) && (ZJ(cJ.update({
              selection: eJ
            })), !0)
          })({
            state: cJ,
            dispatch: ZJ
          });
          let XJ = cJ.sliceDoc(eJ[0].from, eJ[0].to);
          if (cJ.selection.ws.some((JJ => cJ.sliceDoc(JJ.from, JJ.to) != XJ))) return !1;
          let qJ = function(JJ, cJ) {
            let {
              main: ZJ,
              ws: FJ
            } = JJ.selection, UJ = JJ.wordAt(ZJ.head), eJ = UJ && UJ.from == ZJ.from && UJ.to == ZJ.to;
            for (let XJ = !1, qJ = new AJ(JJ.doc, cJ, FJ[FJ.length - 1].to);;) {
              if (qJ.next(), !qJ.done) {
                if (XJ && FJ.some((JJ => JJ.from == qJ.value.from))) continue;
                if (eJ) {
                  let cJ = JJ.wordAt(qJ.value.from);
                  if (!cJ || cJ.from != qJ.value.from || cJ.to != qJ.value.to) continue
                }
                return qJ.value
              }
              if (XJ) return null;
              qJ = new AJ(JJ.doc, cJ, 0, Math.max(0, FJ[FJ.length - 1].from - 1)), XJ = !0
            }
          }(cJ, XJ);
          return !!qJ && (ZJ(cJ.update({
            selection: cJ.selection.addRange(UJ.m.range(qJ.from, qJ.to), !1),
            effects: FJ.f.scrollIntoView(qJ.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class Jc {
      constructor(JJ) {
        this.view = JJ;
        let cJ = this.query = JJ.state.field(PJ).query.spec;

        function ZJ(JJ, cJ, ZJ) {
          return (0, eJ.d)("button", {
            class: "cm-button",
            name: JJ,
            onclick: cJ,
            type: "button"
          }, ZJ)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, eJ.d)("input", {
          value: cJ.search,
          placeholder: cc(JJ, "Find"),
          "aria-label": cc(JJ, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, eJ.d)("input", {
          value: cJ.replace,
          placeholder: cc(JJ, "Replace"),
          "aria-label": cc(JJ, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, eJ.d)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: cJ.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, eJ.d)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: cJ.regexp,
          onchange: this.commit
        }), this.wordField = (0, eJ.d)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: cJ.wholeWord,
          onchange: this.commit
        }), this.dom = (0, eJ.d)("div", {
          onkeydown: JJ => this.keydown(JJ),
          class: "cm-search"
        }, [this.searchField, ZJ("next", (() => OJ(JJ)), [cc(JJ, "next")]), ZJ("prev", (() => TJ(JJ)), [cc(JJ, "previous")]), ZJ("select", (() => CJ(JJ)), [cc(JJ, "all")]), (0, eJ.d)("label", null, [this.caseField, cc(JJ, "match case")]), (0, eJ.d)("label", null, [this.reField, cc(JJ, "regexp")]), (0, eJ.d)("label", null, [this.wordField, cc(JJ, "by word")]), ...JJ.state.readOnly ? [] : [(0, eJ.d)("br"), this.replaceField, ZJ("replace", (() => uJ(JJ)), [cc(JJ, "replace")]), ZJ("replaceAll", (() => iJ(JJ)), [cc(JJ, "replace all")])], (0, eJ.d)("button", {
          name: "close",
          onclick: () => oJ(JJ),
          "aria-label": cc(JJ, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let JJ = new KJ({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        JJ.eq(this.query) || (this.query = JJ, this.view.dispatch({
          effects: gJ.of(JJ)
        }))
      }
      keydown(JJ) {
        (0, FJ.U)(this.view, JJ, "search-panel") ? JJ.preventDefault(): 13 == JJ.keyCode && JJ.target == this.searchField ? (JJ.preventDefault(), (JJ.shiftKey ? TJ : OJ)(this.view)) : 13 == JJ.keyCode && JJ.target == this.replaceField && (JJ.preventDefault(), uJ(this.view))
      }
      update(JJ) {
        for (let cJ of JJ.transactions)
          for (let JJ of cJ.effects) JJ.is(gJ) && !JJ.value.eq(this.query) && this.setQuery(JJ.value)
      }
      setQuery(JJ) {
        this.query = JJ, this.searchField.value = JJ.search, this.replaceField.value = JJ.replace, this.caseField.checked = JJ.caseSensitive, this.reField.checked = JJ.regexp, this.wordField.checked = JJ.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(VJ).top
      }
    }

    function cc(JJ, cJ) {
      return JJ.state.phrase(cJ)
    }
    const Zc = 30,
      Fc = /[\s\.,:;?!]/;

    function Uc(JJ, cJ) {
      let {
        from: ZJ,
        to: UJ
      } = cJ, eJ = JJ.state.doc.lineAt(ZJ), XJ = JJ.state.doc.lineAt(UJ).to, AJ = Math.max(eJ.from, ZJ - Zc), qJ = Math.min(XJ, UJ + Zc), jJ = JJ.state.sliceDoc(AJ, qJ);
      if (AJ != eJ.from)
        for (let FJ = 0; FJ < Zc; FJ++)
          if (!Fc.test(jJ[FJ + 1]) && Fc.test(jJ[FJ])) {
            jJ = jJ.slice(FJ);
            break
          } if (qJ != XJ)
        for (let FJ = jJ.length - 1; FJ > jJ.length - Zc; FJ--)
          if (!Fc.test(jJ[FJ - 1]) && Fc.test(jJ[FJ])) {
            jJ = jJ.slice(0, FJ);
            break
          } return FJ.f.announce.of(`${JJ.state.phrase("current match")}. ${jJ} ${JJ.state.phrase("on line")} ${eJ.number}.`)
    }
    const ec = FJ.f.baseTheme({
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
      Xc = [PJ, UJ.t.low(zJ), ec]
  },
  40065: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => WJ,
      e: () => jc,
      f: () => yU,
      j: () => eX,
      k: () => Bc,
      l: () => bJ,
      m: () => Me,
      n: () => BU,
      r: () => ee,
      u: () => Be,
      w: () => Re,
      z: () => YX,
      D: () => xe,
      A: () => bX,
      F: () => se,
      G: () => ie,
      K: () => HU,
      O: () => yX,
      Q: () => ic,
      S: () => Qe,
      T: () => ye,
      U: () => pU,
      Y: () => cX,
      _: () => JX,
      ab: () => ze
    });
    for (var FJ = ZJ(40060), UJ = ZJ(40068), eJ = {
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
      }, XJ = {
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
      }, AJ = "undefined" != typeof navigator && /Mac/.test(navigator.platform), qJ = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), jJ = 0; jJ < 10; jJ++) eJ[48 + jJ] = eJ[96 + jJ] = String(jJ);
    for (jJ = 1; jJ <= 24; jJ++) eJ[jJ + 111] = "F" + jJ;
    for (jJ = 65; jJ <= 90; jJ++) eJ[jJ] = String.fromCharCode(jJ + 32), XJ[jJ] = String.fromCharCode(jJ);
    for (var YJ in eJ) XJ.hasOwnProperty(YJ) || (XJ[YJ] = eJ[YJ]);
    var hJ = ZJ(40070);
    let DJ = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      sJ = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const nJ = /Edge\/(\d+)/.exec(DJ.userAgent),
      GJ = /MSIE \d/.test(DJ.userAgent),
      fJ = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(DJ.userAgent),
      xJ = !!(GJ || fJ || nJ),
      rJ = !xJ && /gecko\/(\d+)/i.test(DJ.userAgent),
      vJ = !xJ && /Chrome\/(\d+)/.exec(DJ.userAgent),
      mJ = "webkitFontSmoothing" in sJ.documentElement.style,
      QJ = !xJ && /Apple Computer/.test(DJ.vendor),
      EJ = QJ && (/Mobile\/\w+/.test(DJ.userAgent) || DJ.maxTouchPoints > 2);
    var VJ = {
      mac: EJ || /Mac/.test(DJ.platform),
      windows: /Win/.test(DJ.platform),
      linux: /Linux|X11/.test(DJ.platform),
      ie: xJ,
      ie_version: GJ ? sJ.documentMode || 6 : fJ ? +fJ[1] : nJ ? +nJ[1] : 0,
      gecko: rJ,
      gecko_version: rJ ? +(/Firefox\/(\d+)/.exec(DJ.userAgent) || [0, 0])[1] : 0,
      chrome: !!vJ,
      chrome_version: vJ ? +vJ[1] : 0,
      ios: EJ,
      android: /Android\b/.test(DJ.userAgent),
      webkit: mJ,
      webkit_version: mJ ? +(/\bAppleWebKit\/(\d+)/.exec(DJ.userAgent) || [0, 0])[1] : 0,
      safari: QJ,
      safari_version: QJ ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(DJ.userAgent) || [0, 0])[1] : 0,
      tabSize: null != sJ.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function KJ(JJ, cJ) {
      for (let ZJ in JJ) "class" == ZJ && cJ.class ? cJ.class += " " + JJ.class : "style" == ZJ && cJ.style ? cJ.style += ";" + JJ.style : cJ[ZJ] = JJ[ZJ];
      return cJ
    }
    const yJ = Object.create(null);

    function SJ(JJ, cJ, ZJ) {
      if (JJ == cJ) return !0;
      JJ || (JJ = yJ), cJ || (cJ = yJ);
      let FJ = Object.keys(JJ),
        UJ = Object.keys(cJ);
      if (FJ.length - (ZJ && FJ.indexOf(ZJ) > -1 ? 1 : 0) != UJ.length - (ZJ && UJ.indexOf(ZJ) > -1 ? 1 : 0)) return !1;
      for (let eJ of FJ)
        if (eJ != ZJ && (-1 == UJ.indexOf(eJ) || JJ[eJ] !== cJ[eJ])) return !1;
      return !0
    }

    function IJ(JJ, cJ, ZJ) {
      let FJ = !1;
      if (cJ)
        for (let UJ in cJ) ZJ && UJ in ZJ || (FJ = !0, "style" == UJ ? JJ.style.cssText = "" : JJ.removeAttribute(UJ));
      if (ZJ)
        for (let UJ in ZJ) cJ && cJ[UJ] == ZJ[UJ] || (FJ = !0, "style" == UJ ? JJ.style.cssText = ZJ[UJ] : JJ.setAttribute(UJ, ZJ[UJ]));
      return FJ
    }

    function MJ(JJ) {
      let cJ = Object.create(null);
      for (let ZJ = 0; ZJ < JJ.attributes.length; ZJ++) {
        let FJ = JJ.attributes[ZJ];
        cJ[FJ.name] = FJ.value
      }
      return cJ
    }
    class bJ {
      eq(JJ) {
        return !1
      }
      updateDOM(JJ, cJ, ZJ) {
        return !1
      }
      compare(JJ) {
        return this == JJ || this.constructor == JJ.constructor && this.eq(JJ)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(JJ) {
        return !0
      }
      coordsAt(JJ, cJ, ZJ) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(JJ) {}
    }
    var wJ = function(JJ) {
      return JJ[JJ.Text = 0] = "Text", JJ[JJ.WidgetBefore = 1] = "WidgetBefore", JJ[JJ.WidgetAfter = 2] = "WidgetAfter", JJ[JJ.WidgetRange = 3] = "WidgetRange", JJ
    }(wJ || (wJ = {}));
    class WJ extends FJ.x {
      constructor(JJ, cJ, ZJ, FJ) {
        super(), this.startSide = JJ, this.endSide = cJ, this.widget = ZJ, this.spec = FJ
      }
      get heightRelevant() {
        return !1
      }
      static mark(JJ) {
        return new gJ(JJ)
      }
      static widget(JJ) {
        let cJ = Math.max(-1e4, Math.min(1e4, JJ.side || 0)),
          ZJ = !!JJ.block;
        return cJ += ZJ && !JJ.inlineOrder ? cJ > 0 ? 3e8 : -4e8 : cJ > 0 ? 1e8 : -1e8, new PJ(JJ, cJ, cJ, ZJ, JJ.widget || null, !1)
      }
      static replace(JJ) {
        let cJ, ZJ, FJ = !!JJ.block;
        if (JJ.isBlockGap) cJ = -5e8, ZJ = 4e8;
        else {
          let {
            start: UJ,
            end: eJ
          } = kJ(JJ, FJ);
          cJ = (UJ ? FJ ? -3e8 : -1 : 5e8) - 1, ZJ = 1 + (eJ ? FJ ? 2e8 : 1 : -6e8)
        }
        return new PJ(JJ, cJ, ZJ, FJ, JJ.widget || null, !0)
      }
      static line(JJ) {
        return new HJ(JJ)
      }
      static set(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return FJ.v.of(JJ, cJ)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    WJ.none = FJ.v.empty;
    class gJ extends WJ {
      constructor(JJ) {
        let {
          start: cJ,
          end: ZJ
        } = kJ(JJ);
        super(cJ ? -1 : 5e8, ZJ ? 1 : -6e8, null, JJ), this.tagName = JJ.tagName || "span", this.attrs = JJ.class && JJ.attributes ? KJ(JJ.attributes, {
          class: JJ.class
        }) : JJ.class ? {
          class: JJ.class
        } : JJ.attributes || yJ
      }
      eq(JJ) {
        return this == JJ || JJ instanceof gJ && this.tagName == JJ.tagName && SJ(this.attrs, JJ.attrs)
      }
      range(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ;
        if (JJ >= cJ) throw new RangeError("Mark decorations may not be empty");
        return super.range(JJ, cJ)
      }
    }
    gJ.prototype.point = !1;
    class HJ extends WJ {
      constructor(JJ) {
        super(-2e8, -2e8, null, JJ)
      }
      eq(JJ) {
        return JJ instanceof HJ && this.spec.class == JJ.spec.class && SJ(this.spec.attributes, JJ.spec.attributes)
      }
      range(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ;
        if (cJ != JJ) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(JJ, cJ)
      }
    }
    HJ.prototype.mapMode = FJ.r.TrackBefore, HJ.prototype.point = !0;
    class PJ extends WJ {
      constructor(JJ, cJ, ZJ, UJ, eJ, XJ) {
        super(cJ, ZJ, eJ, JJ), this.block = UJ, this.isReplace = XJ, this.mapMode = UJ ? cJ <= 0 ? FJ.r.TrackBefore : FJ.r.TrackAfter : FJ.r.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? wJ.WidgetRange : this.startSide <= 0 ? wJ.WidgetBefore : wJ.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(JJ) {
        return JJ instanceof PJ && (cJ = this.widget, ZJ = JJ.widget, cJ == ZJ || !!(cJ && ZJ && cJ.compare(ZJ))) && this.block == JJ.block && this.startSide == JJ.startSide && this.endSide == JJ.endSide;
        var cJ, ZJ
      }
      range(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ;
        if (this.isReplace && (JJ > cJ || JJ == cJ && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && cJ != JJ) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(JJ, cJ)
      }
    }

    function kJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: ZJ,
          inclusiveEnd: FJ
        } = JJ;
      return null == ZJ && (ZJ = JJ.inclusive), null == FJ && (FJ = JJ.inclusive), {
        start: null !== ZJ && void 0 !== ZJ ? ZJ : cJ,
        end: null !== FJ && void 0 !== FJ ? FJ : cJ
      }
    }

    function pJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        UJ = ZJ.length - 1;
      UJ >= 0 && ZJ[UJ] + FJ >= JJ ? ZJ[UJ] = Math.max(ZJ[UJ], cJ) : ZJ.push(JJ, cJ)
    }
    PJ.prototype.point = !0;
    class dJ extends FJ.x {
      constructor(JJ, cJ) {
        super(), this.tagName = JJ, this.attributes = cJ
      }
      eq(JJ) {
        return JJ == this || JJ instanceof dJ && this.tagName == JJ.tagName && SJ(this.attributes, JJ.attributes)
      }
      static create(JJ) {
        return new dJ(JJ.tagName, JJ.attributes || yJ)
      }
      static set(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return FJ.v.of(JJ, cJ)
      }
    }

    function zJ(JJ) {
      let cJ;
      return cJ = 11 == JJ.nodeType ? JJ.getSelection ? JJ : JJ.ownerDocument : JJ, cJ.getSelection()
    }

    function NJ(JJ, cJ) {
      return !!cJ && (JJ == cJ || JJ.contains(1 != cJ.nodeType ? cJ.parentNode : cJ))
    }

    function OJ(JJ, cJ) {
      if (!cJ.anchorNode) return !1;
      try {
        return NJ(JJ, cJ.anchorNode)
      } catch (ZJ) {
        return !1
      }
    }

    function TJ(JJ) {
      return 3 == JJ.nodeType ? Fc(JJ, 0, JJ.nodeValue.length).getClientRects() : 1 == JJ.nodeType ? JJ.getClientRects() : []
    }

    function CJ(JJ, cJ, ZJ, FJ) {
      return !!ZJ && (RJ(JJ, cJ, ZJ, FJ, -1) || RJ(JJ, cJ, ZJ, FJ, 1))
    }

    function uJ(JJ) {
      for (var cJ = 0;; cJ++)
        if (!(JJ = JJ.previousSibling)) return cJ
    }

    function iJ(JJ) {
      return 1 == JJ.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(JJ.nodeName)
    }

    function RJ(JJ, cJ, ZJ, FJ, UJ) {
      for (;;) {
        if (JJ == ZJ && cJ == FJ) return !0;
        if (cJ == (UJ < 0 ? 0 : LJ(JJ))) {
          if ("DIV" == JJ.nodeName) return !1;
          let ZJ = JJ.parentNode;
          if (!ZJ || 1 != ZJ.nodeType) return !1;
          cJ = uJ(JJ) + (UJ < 0 ? 0 : 1), JJ = ZJ
        } else {
          if (1 != JJ.nodeType) return !1;
          if (1 == (JJ = JJ.childNodes[cJ + (UJ < 0 ? -1 : 0)]).nodeType && "false" == JJ.contentEditable) return !1;
          cJ = UJ < 0 ? LJ(JJ) : 0
        }
      }
    }

    function LJ(JJ) {
      return 3 == JJ.nodeType ? JJ.nodeValue.length : JJ.childNodes.length
    }

    function aJ(JJ, cJ) {
      let ZJ = cJ ? JJ.left : JJ.right;
      return {
        left: ZJ,
        right: ZJ,
        top: JJ.top,
        bottom: JJ.bottom
      }
    }

    function BJ(JJ) {
      let cJ = JJ.visualViewport;
      return cJ ? {
        left: 0,
        right: cJ.width,
        top: 0,
        bottom: cJ.height
      } : {
        left: 0,
        right: JJ.innerWidth,
        top: 0,
        bottom: JJ.innerHeight
      }
    }

    function tJ(JJ, cJ) {
      let ZJ = cJ.width / JJ.offsetWidth,
        FJ = cJ.height / JJ.offsetHeight;
      return (ZJ > .995 && ZJ < 1.005 || !isFinite(ZJ) || Math.abs(cJ.width - JJ.offsetWidth) < 1) && (ZJ = 1), (FJ > .995 && FJ < 1.005 || !isFinite(FJ) || Math.abs(cJ.height - JJ.offsetHeight) < 1) && (FJ = 1), {
        scaleX: ZJ,
        scaleY: FJ
      }
    }

    function oJ(JJ) {
      let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        ZJ = JJ.ownerDocument,
        FJ = null,
        UJ = null;
      for (let eJ = JJ.parentNode; eJ && (eJ != ZJ.body && (cJ && !FJ || !UJ));)
        if (1 == eJ.nodeType) !UJ && eJ.scrollHeight > eJ.clientHeight && (UJ = eJ), cJ && !FJ && eJ.scrollWidth > eJ.clientWidth && (FJ = eJ), eJ = eJ.assignedSlot || eJ.parentNode;
        else {
          if (11 != eJ.nodeType) break;
          eJ = eJ.host
        } return {
        x: FJ,
        y: UJ
      }
    }
    dJ.prototype.startSide = dJ.prototype.endSide = -1;
    class lJ {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(JJ) {
        return this.anchorNode == JJ.anchorNode && this.anchorOffset == JJ.anchorOffset && this.focusNode == JJ.focusNode && this.focusOffset == JJ.focusOffset
      }
      setRange(JJ) {
        let {
          anchorNode: cJ,
          focusNode: ZJ
        } = JJ;
        this.set(cJ, Math.min(JJ.anchorOffset, cJ ? LJ(cJ) : 0), ZJ, Math.min(JJ.focusOffset, ZJ ? LJ(ZJ) : 0))
      }
      set(JJ, cJ, ZJ, FJ) {
        this.anchorNode = JJ, this.anchorOffset = cJ, this.focusNode = ZJ, this.focusOffset = FJ
      }
    }
    let Jc, cc = null;

    function Zc(JJ) {
      if (JJ.setActive) return JJ.setActive();
      if (cc) return JJ.focus(cc);
      let cJ = [];
      for (let ZJ = JJ; ZJ && (cJ.push(ZJ, ZJ.scrollTop, ZJ.scrollLeft), ZJ != ZJ.ownerDocument); ZJ = ZJ.parentNode);
      if (JJ.focus(null == cc ? {
          get preventScroll() {
            return cc = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !cc) {
        cc = !1;
        for (let JJ = 0; JJ < cJ.length;) {
          let ZJ = cJ[JJ++],
            FJ = cJ[JJ++],
            UJ = cJ[JJ++];
          ZJ.scrollTop != FJ && (ZJ.scrollTop = FJ), ZJ.scrollLeft != UJ && (ZJ.scrollLeft = UJ)
        }
      }
    }

    function Fc(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cJ,
        FJ = Jc || (Jc = document.createRange());
      return FJ.setEnd(JJ, ZJ), FJ.setStart(JJ, cJ), FJ
    }

    function Uc(JJ, cJ, ZJ, FJ) {
      let UJ = {
        key: cJ,
        code: cJ,
        keyCode: ZJ,
        which: ZJ,
        cancelable: !0
      };
      FJ && ({
        altKey: UJ.altKey,
        ctrlKey: UJ.ctrlKey,
        shiftKey: UJ.shiftKey,
        metaKey: UJ.metaKey
      } = FJ);
      let eJ = new KeyboardEvent("keydown", UJ);
      eJ.synthetic = !0, JJ.dispatchEvent(eJ);
      let XJ = new KeyboardEvent("keyup", UJ);
      return XJ.synthetic = !0, JJ.dispatchEvent(XJ), eJ.defaultPrevented || XJ.defaultPrevented
    }

    function ec(JJ) {
      return JJ instanceof Window ? JJ.pageYOffset > Math.max(0, JJ.document.documentElement.scrollHeight - JJ.innerHeight - 4) : JJ.scrollTop > Math.max(1, JJ.scrollHeight - JJ.clientHeight - 4)
    }

    function Xc(JJ, cJ) {
      for (let ZJ = JJ, FJ = cJ;;) {
        if (3 == ZJ.nodeType && FJ > 0) return {
          node: ZJ,
          offset: FJ
        };
        if (1 == ZJ.nodeType && FJ > 0) {
          if ("false" == ZJ.contentEditable) return null;
          ZJ = ZJ.childNodes[FJ - 1], FJ = LJ(ZJ)
        } else {
          if (!ZJ.parentNode || iJ(ZJ)) return null;
          FJ = uJ(ZJ), ZJ = ZJ.parentNode
        }
      }
    }

    function Ac(JJ, cJ) {
      for (let ZJ = JJ, FJ = cJ;;) {
        if (3 == ZJ.nodeType && FJ < ZJ.nodeValue.length) return {
          node: ZJ,
          offset: FJ
        };
        if (1 == ZJ.nodeType && FJ < ZJ.childNodes.length) {
          if ("false" == ZJ.contentEditable) return null;
          ZJ = ZJ.childNodes[FJ], FJ = 0
        } else {
          if (!ZJ.parentNode || iJ(ZJ)) return null;
          FJ = uJ(ZJ) + 1, ZJ = ZJ.parentNode
        }
      }
    }
    VJ.safari && VJ.safari_version >= 26 && (cc = !1);
    class qc {
      constructor(JJ, cJ) {
        let ZJ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = JJ, this.offset = cJ, this.precise = ZJ
      }
      static before(JJ, cJ) {
        return new qc(JJ.parentNode, uJ(JJ), cJ)
      }
      static after(JJ, cJ) {
        return new qc(JJ.parentNode, uJ(JJ) + 1, cJ)
      }
    }
    var jc = function(JJ) {
      return JJ[JJ.LTR = 0] = "LTR", JJ[JJ.RTL = 1] = "RTL", JJ
    }(jc || (jc = {}));
    const Yc = jc.LTR,
      hc = jc.RTL;

    function Dc(JJ) {
      let cJ = [];
      for (let ZJ = 0; ZJ < JJ.length; ZJ++) cJ.push(1 << +JJ[ZJ]);
      return cJ
    }
    const sc = Dc("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      nc = Dc("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      Gc = Object.create(null),
      fc = [];
    for (let wX of ["()", "[]", "{}"]) {
      let JJ = wX.charCodeAt(0),
        cJ = wX.charCodeAt(1);
      Gc[JJ] = cJ, Gc[cJ] = -JJ
    }

    function xc(JJ) {
      return JJ <= 247 ? sc[JJ] : 1424 <= JJ && JJ <= 1524 ? 2 : 1536 <= JJ && JJ <= 1785 ? nc[JJ - 1536] : 1774 <= JJ && JJ <= 2220 ? 4 : 8192 <= JJ && JJ <= 8204 ? 256 : 64336 <= JJ && JJ <= 65023 ? 4 : 1
    }
    const rc = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class vc {
      get dir() {
        return this.level % 2 ? hc : Yc
      }
      constructor(JJ, cJ, ZJ) {
        this.from = JJ, this.to = cJ, this.level = ZJ
      }
      side(JJ, cJ) {
        return this.dir == cJ == JJ ? this.to : this.from
      }
      forward(JJ, cJ) {
        return JJ == (this.dir == cJ)
      }
      static find(JJ, cJ, ZJ, FJ) {
        let UJ = -1;
        for (let eJ = 0; eJ < JJ.length; eJ++) {
          let XJ = JJ[eJ];
          if (XJ.from <= cJ && XJ.to >= cJ) {
            if (XJ.level == ZJ) return eJ;
            (UJ < 0 || (0 != FJ ? FJ < 0 ? XJ.from < cJ : XJ.to > cJ : JJ[UJ].level > XJ.level)) && (UJ = eJ)
          }
        }
        if (UJ < 0) throw new RangeError("Index out of range");
        return UJ
      }
    }

    function mc(JJ, cJ) {
      if (JJ.length != cJ.length) return !1;
      for (let ZJ = 0; ZJ < JJ.length; ZJ++) {
        let FJ = JJ[ZJ],
          UJ = cJ[ZJ];
        if (FJ.from != UJ.from || FJ.to != UJ.to || FJ.direction != UJ.direction || !mc(FJ.inner, UJ.inner)) return !1
      }
      return !0
    }
    const Qc = [];

    function Ec(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      let AJ = FJ % 2 ? 2 : 1;
      if (FJ % 2 == UJ % 2)
        for (let qJ = cJ, jJ = 0; qJ < ZJ;) {
          let cJ = !0,
            YJ = !1;
          if (jJ == eJ.length || qJ < eJ[jJ].from) {
            let JJ = Qc[qJ];
            JJ != AJ && (cJ = !1, YJ = 16 == JJ)
          }
          let hJ = cJ || 1 != AJ ? null : [],
            DJ = cJ ? FJ : FJ + 1,
            sJ = qJ;
          JJ: for (;;)
            if (jJ < eJ.length && sJ == eJ[jJ].from) {
              if (YJ) break JJ;
              let nJ = eJ[jJ];
              if (!cJ)
                for (let JJ = nJ.to, cJ = jJ + 1;;) {
                  if (JJ == ZJ) break JJ;
                  if (!(cJ < eJ.length && eJ[cJ].from == JJ)) {
                    if (Qc[JJ] == AJ) break JJ;
                    break
                  }
                  JJ = eJ[cJ++].to
                }
              if (jJ++, hJ) hJ.push(nJ);
              else {
                nJ.from > qJ && XJ.push(new vc(qJ, nJ.from, DJ)), Vc(JJ, nJ.direction == Yc != !(DJ % 2) ? FJ + 1 : FJ, UJ, nJ.inner, nJ.from, nJ.to, XJ), qJ = nJ.to
              }
              sJ = nJ.to
            } else {
              if (sJ == ZJ || (cJ ? Qc[sJ] != AJ : Qc[sJ] == AJ)) break;
              sJ++
            } hJ ? Ec(JJ, qJ, sJ, FJ + 1, UJ, hJ, XJ) : qJ < sJ && XJ.push(new vc(qJ, sJ, DJ)), qJ = sJ
        } else
          for (let qJ = ZJ, jJ = eJ.length; qJ > cJ;) {
            let ZJ = !0,
              YJ = !1;
            if (!jJ || qJ > eJ[jJ - 1].to) {
              let JJ = Qc[qJ - 1];
              JJ != AJ && (ZJ = !1, YJ = 16 == JJ)
            }
            let hJ = ZJ || 1 != AJ ? null : [],
              DJ = ZJ ? FJ : FJ + 1,
              sJ = qJ;
            JJ: for (;;)
              if (jJ && sJ == eJ[jJ - 1].to) {
                if (YJ) break JJ;
                let nJ = eJ[--jJ];
                if (!ZJ)
                  for (let JJ = nJ.from, ZJ = jJ;;) {
                    if (JJ == cJ) break JJ;
                    if (!ZJ || eJ[ZJ - 1].to != JJ) {
                      if (Qc[JJ - 1] == AJ) break JJ;
                      break
                    }
                    JJ = eJ[--ZJ].from
                  }
                if (hJ) hJ.push(nJ);
                else {
                  nJ.to < qJ && XJ.push(new vc(nJ.to, qJ, DJ)), Vc(JJ, nJ.direction == Yc != !(DJ % 2) ? FJ + 1 : FJ, UJ, nJ.inner, nJ.from, nJ.to, XJ), qJ = nJ.from
                }
                sJ = nJ.from
              } else {
                if (sJ == cJ || (ZJ ? Qc[sJ - 1] != AJ : Qc[sJ - 1] == AJ)) break;
                sJ--
              } hJ ? Ec(JJ, sJ, qJ, FJ + 1, UJ, hJ, XJ) : sJ < qJ && XJ.push(new vc(sJ, qJ, DJ)), qJ = sJ
          }
    }

    function Vc(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      let AJ = cJ % 2 ? 2 : 1;
      ! function(JJ, cJ, ZJ, FJ, UJ) {
        for (let eJ = 0; eJ <= FJ.length; eJ++) {
          let XJ = eJ ? FJ[eJ - 1].to : cJ,
            AJ = eJ < FJ.length ? FJ[eJ].from : ZJ,
            qJ = eJ ? 256 : UJ;
          for (let cJ = XJ, ZJ = qJ, FJ = qJ; cJ < AJ; cJ++) {
            let UJ = xc(JJ.charCodeAt(cJ));
            512 == UJ ? UJ = ZJ : 8 == UJ && 4 == FJ && (UJ = 16), Qc[cJ] = 4 == UJ ? 2 : UJ, 7 & UJ && (FJ = UJ), ZJ = UJ
          }
          for (let JJ = XJ, cJ = qJ, FJ = qJ; JJ < AJ; JJ++) {
            let UJ = Qc[JJ];
            if (128 == UJ) JJ < AJ - 1 && cJ == Qc[JJ + 1] && 24 & cJ ? UJ = Qc[JJ] = cJ : Qc[JJ] = 256;
            else if (64 == UJ) {
              let UJ = JJ + 1;
              for (; UJ < AJ && 64 == Qc[UJ];) UJ++;
              let eJ = JJ && 8 == cJ || UJ < ZJ && 8 == Qc[UJ] ? 1 == FJ ? 1 : 8 : 256;
              for (let cJ = JJ; cJ < UJ; cJ++) Qc[cJ] = eJ;
              JJ = UJ - 1
            } else 8 == UJ && 1 == FJ && (Qc[JJ] = 1);
            cJ = UJ, 7 & UJ && (FJ = UJ)
          }
        }
      }(JJ, UJ, eJ, FJ, AJ),
      function(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = 1 == UJ ? 2 : 1;
        for (let XJ = 0, AJ = 0, qJ = 0; XJ <= FJ.length; XJ++) {
          let jJ = XJ ? FJ[XJ - 1].to : cJ,
            YJ = XJ < FJ.length ? FJ[XJ].from : ZJ;
          for (let cJ, ZJ, FJ, XJ = jJ; XJ < YJ; XJ++)
            if (ZJ = Gc[cJ = JJ.charCodeAt(XJ)])
              if (ZJ < 0) {
                for (let JJ = AJ - 3; JJ >= 0; JJ -= 3)
                  if (fc[JJ + 1] == -ZJ) {
                    let cJ = fc[JJ + 2],
                      ZJ = 2 & cJ ? UJ : 4 & cJ ? 1 & cJ ? eJ : UJ : 0;
                    ZJ && (Qc[XJ] = Qc[fc[JJ]] = ZJ), AJ = JJ;
                    break
                  }
              } else {
                if (189 == fc.length) break;
                fc[AJ++] = XJ, fc[AJ++] = cJ, fc[AJ++] = qJ
              }
          else if (2 == (FJ = Qc[XJ]) || 1 == FJ) {
            let JJ = FJ == UJ;
            qJ = JJ ? 0 : 1;
            for (let cJ = AJ - 3; cJ >= 0; cJ -= 3) {
              let ZJ = fc[cJ + 2];
              if (2 & ZJ) break;
              if (JJ) fc[cJ + 2] |= 2;
              else {
                if (4 & ZJ) break;
                fc[cJ + 2] |= 4
              }
            }
          }
        }
      }(JJ, UJ, eJ, FJ, AJ),
      function(JJ, cJ, ZJ, FJ) {
        for (let UJ = 0, eJ = FJ; UJ <= ZJ.length; UJ++) {
          let XJ = UJ ? ZJ[UJ - 1].to : JJ,
            AJ = UJ < ZJ.length ? ZJ[UJ].from : cJ;
          for (let qJ = XJ; qJ < AJ;) {
            let XJ = Qc[qJ];
            if (256 == XJ) {
              let XJ = qJ + 1;
              for (;;)
                if (XJ == AJ) {
                  if (UJ == ZJ.length) break;
                  XJ = ZJ[UJ++].to, AJ = UJ < ZJ.length ? ZJ[UJ].from : cJ
                } else {
                  if (256 != Qc[XJ]) break;
                  XJ++
                } let jJ = 1 == eJ,
                YJ = jJ == (1 == (XJ < cJ ? Qc[XJ] : FJ)) ? jJ ? 1 : 2 : FJ;
              for (let cJ = XJ, FJ = UJ, eJ = FJ ? ZJ[FJ - 1].to : JJ; cJ > qJ;) cJ == eJ && (cJ = ZJ[--FJ].from, eJ = FJ ? ZJ[FJ - 1].to : JJ), Qc[--cJ] = YJ;
              qJ = XJ
            } else eJ = XJ, qJ++
          }
        }
      }(UJ, eJ, FJ, AJ), Ec(JJ, UJ, eJ, cJ, ZJ, FJ, XJ)
    }

    function Kc(JJ, cJ, ZJ) {
      if (!JJ) return [new vc(0, 0, cJ == hc ? 1 : 0)];
      if (cJ == Yc && !ZJ.length && !rc.test(JJ)) return yc(JJ.length);
      if (ZJ.length)
        for (; JJ.length > Qc.length;) Qc[Qc.length] = 256;
      let FJ = [],
        UJ = cJ == Yc ? 0 : 1;
      return Vc(JJ, UJ, UJ, ZJ, 0, JJ.length, FJ), FJ
    }

    function yc(JJ) {
      return [new vc(0, JJ, 0)]
    }
    let Sc = "";

    function Ic(JJ, cJ, ZJ, UJ, eJ) {
      var XJ;
      let AJ = UJ.head - JJ.from,
        qJ = vc.find(cJ, AJ, null !== (XJ = UJ.bidiLevel) && void 0 !== XJ ? XJ : -1, UJ.assoc),
        jJ = cJ[qJ],
        YJ = jJ.side(eJ, ZJ);
      if (AJ == YJ) {
        let JJ = qJ += eJ ? 1 : -1;
        if (JJ < 0 || JJ >= cJ.length) return null;
        jJ = cJ[qJ = JJ], AJ = jJ.side(!eJ, ZJ), YJ = jJ.side(eJ, ZJ)
      }
      let hJ = (0, FJ.X)(JJ.text, AJ, jJ.forward(eJ, ZJ));
      (hJ < jJ.from || hJ > jJ.to) && (hJ = YJ), Sc = JJ.text.slice(Math.min(AJ, hJ), Math.max(AJ, hJ));
      let DJ = qJ == (eJ ? cJ.length - 1 : 0) ? null : cJ[qJ + (eJ ? 1 : -1)];
      return DJ && hJ == YJ && DJ.level + (eJ ? 0 : 1) < jJ.level ? FJ.m.cursor(DJ.side(!eJ, ZJ) + JJ.from, DJ.forward(eJ, ZJ) ? 1 : -1, DJ.level) : FJ.m.cursor(hJ + JJ.from, jJ.forward(eJ, ZJ) ? -1 : 1, jJ.level)
    }

    function Mc(JJ, cJ, ZJ) {
      for (let FJ = cJ; FJ < ZJ; FJ++) {
        let cJ = xc(JJ.charCodeAt(FJ));
        if (1 == cJ) return Yc;
        if (2 == cJ || 4 == cJ) return hc
      }
      return Yc
    }
    const bc = FJ.p.define(),
      wc = FJ.p.define(),
      Wc = FJ.p.define(),
      gc = FJ.p.define(),
      Hc = FJ.p.define(),
      Pc = FJ.p.define(),
      kc = FJ.p.define(),
      pc = FJ.p.define(),
      dc = FJ.p.define(),
      zc = FJ.p.define({
        combine: JJ => JJ.some((JJ => JJ))
      }),
      Nc = FJ.p.define({
        combine: JJ => JJ.some((JJ => JJ))
      }),
      Oc = FJ.p.define();
    class Tc {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = JJ, this.y = cJ, this.x = ZJ, this.yMargin = FJ, this.xMargin = UJ, this.isSnapshot = eJ
      }
      map(JJ) {
        return JJ.empty ? this : new Tc(this.range.map(JJ), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(JJ) {
        return this.range.to <= JJ.doc.length ? this : new Tc(FJ.m.cursor(JJ.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const Cc = FJ.A.define({
        map: (JJ, cJ) => JJ.map(cJ)
      }),
      uc = FJ.A.define();

    function ic(JJ, cJ, ZJ) {
      let FJ = JJ.facet(gc);
      FJ.length ? FJ[0](cJ) : window.onerror && window.onerror(String(cJ), ZJ, void 0, void 0, cJ) || (ZJ ? console.error(ZJ + ":", cJ) : console.error(cJ))
    }
    const Rc = FJ.p.define({
      combine: JJ => !JJ.length || JJ[0]
    });
    let Lc = 0;
    const ac = FJ.p.define({
      combine: JJ => JJ.filter(((cJ, ZJ) => {
        for (let FJ = 0; FJ < ZJ; FJ++)
          if (JJ[FJ].plugin == cJ.plugin) return !1;
        return !0
      }))
    });
    class Bc {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        this.id = JJ, this.create = cJ, this.domEventHandlers = ZJ, this.domEventObservers = FJ, this.baseExtensions = UJ(this), this.extension = this.baseExtensions.concat(ac.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(JJ) {
        return this.baseExtensions.concat(ac.of({
          plugin: this,
          arg: JJ
        }))
      }
      static define(JJ, cJ) {
        const {
          eventHandlers: ZJ,
          eventObservers: FJ,
          provide: UJ,
          je: eJ
        } = cJ || {};
        return new Bc(Lc++, JJ, ZJ, FJ, (JJ => {
          let cJ = [];
          return eJ && cJ.push(JZ.of((cJ => {
            let ZJ = cJ.plugin(JJ);
            return ZJ ? eJ(ZJ) : WJ.none
          }))), UJ && cJ.push(UJ(JJ)), cJ
        }))
      }
      static fromClass(JJ, cJ) {
        return Bc.define(((cJ, ZJ) => new JJ(cJ, ZJ)), cJ)
      }
    }
    class tc {
      constructor(JJ) {
        this.spec = JJ, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(JJ) {
        if (this.value) {
          if (this.mustUpdate) {
            let JJ = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(JJ)
            } catch (cJ) {
              if (ic(JJ.state, cJ, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (ZJ) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(JJ, this.spec.arg)
        } catch (cJ) {
          ic(JJ.state, cJ, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(JJ) {
        var cJ;
        if (null === (cJ = this.value) || void 0 === cJ ? void 0 : cJ.destroy) try {
          this.value.destroy()
        } catch (ZJ) {
          ic(JJ.state, ZJ, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const oc = FJ.p.define(),
      lc = FJ.p.define(),
      JZ = FJ.p.define(),
      cZ = FJ.p.define(),
      ZZ = FJ.p.define(),
      FZ = FJ.p.define(),
      UZ = FJ.p.define();

    function eZ(JJ, cJ) {
      let ZJ = JJ.state.facet(UZ);
      if (!ZJ.length) return ZJ;
      let UJ = ZJ.map((cJ => cJ instanceof Function ? cJ(JJ) : cJ)),
        eJ = [];
      return FJ.v.spans(UJ, cJ.from, cJ.to, {
        point() {},
        span(JJ, ZJ, FJ, UJ) {
          let XJ = JJ - cJ.from,
            AJ = ZJ - cJ.from,
            qJ = eJ;
          for (let eJ = FJ.length - 1; eJ >= 0; eJ--, UJ--) {
            let JJ, ZJ = FJ[eJ].spec.bidiIsolate;
            if (null == ZJ && (ZJ = Mc(cJ.text, XJ, AJ)), UJ > 0 && qJ.length && (JJ = qJ[qJ.length - 1]).to == XJ && JJ.direction == ZJ) JJ.to = AJ, qJ = JJ.inner;
            else {
              let JJ = {
                from: XJ,
                to: AJ,
                direction: ZJ,
                inner: []
              };
              qJ.push(JJ), qJ = JJ.inner
            }
          }
        }
      }), eJ
    }
    const XZ = FJ.p.define();

    function AZ(JJ) {
      let cJ = 0,
        ZJ = 0,
        FJ = 0,
        UJ = 0;
      for (let eJ of JJ.state.facet(XZ)) {
        let XJ = eJ(JJ);
        XJ && (null != XJ.left && (cJ = Math.max(cJ, XJ.left)), null != XJ.right && (ZJ = Math.max(ZJ, XJ.right)), null != XJ.top && (FJ = Math.max(FJ, XJ.top)), null != XJ.bottom && (UJ = Math.max(UJ, XJ.bottom)))
      }
      return {
        left: cJ,
        right: ZJ,
        top: FJ,
        bottom: UJ
      }
    }
    const qZ = FJ.p.define();
    class jZ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.fromA = JJ, this.toA = cJ, this.fromB = ZJ, this.toB = FJ
      }
      join(JJ) {
        return new jZ(Math.min(this.fromA, JJ.fromA), Math.max(this.toA, JJ.toA), Math.min(this.fromB, JJ.fromB), Math.max(this.toB, JJ.toB))
      }
      addToSet(JJ) {
        let cJ = JJ.length,
          ZJ = this;
        for (; cJ > 0; cJ--) {
          let FJ = JJ[cJ - 1];
          if (!(FJ.fromA > ZJ.toA)) {
            if (FJ.toA < ZJ.fromA) break;
            ZJ = ZJ.join(FJ), JJ.splice(cJ - 1, 1)
          }
        }
        return JJ.splice(cJ, 0, ZJ), JJ
      }
      static extendWithRanges(JJ, cJ) {
        if (0 == cJ.length) return JJ;
        let ZJ = [];
        for (let FJ = 0, UJ = 0, eJ = 0;;) {
          let XJ = FJ < JJ.length ? JJ[FJ].fromB : 1e9,
            AJ = UJ < cJ.length ? cJ[UJ] : 1e9,
            qJ = Math.min(XJ, AJ);
          if (1e9 == qJ) break;
          let jJ = qJ + eJ,
            YJ = qJ,
            hJ = jJ;
          for (;;)
            if (UJ < cJ.length && cJ[UJ] <= YJ) {
              let ZJ = cJ[UJ + 1];
              UJ += 2, YJ = Math.max(YJ, ZJ);
              for (let cJ = FJ; cJ < JJ.length && JJ[cJ].fromB <= YJ; cJ++) eJ = JJ[cJ].toA - JJ[cJ].toB;
              hJ = Math.max(hJ, ZJ + eJ)
            } else {
              if (!(FJ < JJ.length && JJ[FJ].fromB <= YJ)) break;
              {
                let cJ = JJ[FJ++];
                YJ = Math.max(YJ, cJ.toB), hJ = Math.max(hJ, cJ.toA), eJ = cJ.toA - cJ.toB
              }
            } ZJ.push(new jZ(jJ, hJ, qJ, YJ))
        }
        return ZJ
      }
    }
    class YZ {
      constructor(JJ, cJ, ZJ) {
        this.view = JJ, this.state = cJ, this.transactions = ZJ, this.flags = 0, this.startState = JJ.state, this.changes = FJ.ChangeSet.empty(this.startState.doc.length);
        for (let FJ of ZJ) this.changes = this.changes.compose(FJ.changes);
        let UJ = [];
        this.changes.iterChangedRanges(((JJ, cJ, ZJ, FJ) => UJ.push(new jZ(JJ, cJ, ZJ, FJ)))), this.changedRanges = UJ
      }
      static create(JJ, cJ, ZJ) {
        return new YZ(JJ, cJ, ZJ)
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
        return this.transactions.some((JJ => JJ.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const hZ = [];
    class DZ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = JJ, this.length = cJ, this.flags = ZJ, this.parent = null, JJ.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return hZ
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
      sync(JJ) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let JJ = this.domAttrs;
          JJ && function(JJ, cJ) {
            for (let ZJ = JJ.attributes.length - 1; ZJ >= 0; ZJ--) {
              let FJ = JJ.attributes[ZJ].name;
              null == cJ[FJ] && JJ.removeAttribute(FJ)
            }
            for (let ZJ in cJ) {
              let FJ = cJ[ZJ];
              "style" == ZJ ? JJ.style.cssText = FJ : JJ.getAttribute(ZJ) != FJ && JJ.setAttribute(ZJ, FJ)
            }
          }(this.dom, JJ)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(JJ) {
        this.dom = JJ, JJ.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let ZJ of this.children) {
          if (ZJ == JJ) return cJ;
          cJ += ZJ.length + ZJ.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(JJ) {
        return this.posBefore(JJ) + JJ.length
      }
      covers(JJ) {
        return !0
      }
      coordsIn(JJ, cJ) {
        return null
      }
      domPosFor(JJ, cJ) {
        let ZJ = uJ(this.dom),
          FJ = this.length ? JJ > 0 : cJ > 0;
        return new qc(this.parent.dom, ZJ + (FJ ? 1 : 0), 0 == JJ || JJ == this.length)
      }
      markDirty(JJ) {
        this.flags &= -3, JJ && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let JJ = this; JJ; JJ = JJ.parent)
          if (JJ instanceof GZ) return JJ;
        return null
      }
      static get(JJ) {
        return JJ.cmTile
      }
    }
    class sZ extends DZ {
      constructor(JJ) {
        super(JJ, 0), this._children = []
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
      append(JJ) {
        this.children.push(JJ), JJ.parent = this
      }
      sync(JJ) {
        if (2 & this.flags) return;
        super.sync(JJ);
        let cJ, ZJ = this.dom,
          FJ = null,
          UJ = (null === JJ || void 0 === JJ ? void 0 : JJ.node) == ZJ ? JJ : null,
          eJ = 0;
        for (let XJ of this.children) {
          if (XJ.sync(JJ), eJ += XJ.length + XJ.breakAfter, cJ = FJ ? FJ.nextSibling : ZJ.firstChild, UJ && cJ != XJ.dom && (UJ.written = !0), XJ.dom.parentNode == ZJ)
            for (; cJ && cJ != XJ.dom;) cJ = nZ(cJ);
          else ZJ.insertBefore(XJ.dom, cJ);
          FJ = XJ.dom
        }
        for (cJ = FJ ? FJ.nextSibling : ZJ.firstChild, UJ && cJ && (UJ.written = !0); cJ;) cJ = nZ(cJ);
        this.length = eJ
      }
    }

    function nZ(JJ) {
      let cJ = JJ.nextSibling;
      return JJ.parentNode.removeChild(JJ), cJ
    }
    class GZ extends sZ {
      constructor(JJ, cJ) {
        super(cJ), this.view = JJ
      }
      owns(JJ) {
        for (; JJ; JJ = JJ.parent)
          if (JJ == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(JJ) {
        for (;;) {
          if (!JJ) return null;
          let cJ = DZ.get(JJ);
          if (cJ && this.owns(cJ)) return cJ;
          JJ = JJ.parentNode
        }
      }
      blockTiles(JJ) {
        for (let cJ = [], ZJ = this, FJ = 0, UJ = 0;;)
          if (FJ == ZJ.children.length) {
            if (!cJ.length) return;
            ZJ = ZJ.parent, ZJ.breakAfter && UJ++, FJ = cJ.pop()
          } else {
            let eJ = ZJ.children[FJ++];
            if (eJ instanceof fZ) cJ.push(FJ), ZJ = eJ, FJ = 0;
            else {
              let cJ = UJ + eJ.length,
                ZJ = JJ(eJ, UJ);
              if (void 0 !== ZJ) return ZJ;
              UJ = cJ + eJ.breakAfter
            }
          }
      }
      resolveBlock(JJ, cJ) {
        let ZJ, FJ, UJ = -1,
          eJ = -1;
        if (this.blockTiles(((XJ, AJ) => {
            let qJ = AJ + XJ.length;
            if (JJ >= AJ && JJ <= qJ) {
              if (XJ.isWidget() && cJ >= -1 && cJ <= 1) {
                if (32 & XJ.flags) return !0;
                16 & XJ.flags && (ZJ = void 0)
              }(AJ < JJ || JJ == qJ && (cJ < -1 ? XJ.length : XJ.covers(1))) && (!ZJ || !XJ.isWidget() && ZJ.isWidget()) && (ZJ = XJ, UJ = JJ - AJ), (qJ > JJ || JJ == AJ && (cJ > 1 ? XJ.length : XJ.covers(-1))) && (!FJ || !XJ.isWidget() && FJ.isWidget()) && (FJ = XJ, eJ = JJ - AJ)
            }
          })), !ZJ && !FJ) throw new Error("No tile at position " + JJ);
        return ZJ && cJ < 0 || !FJ ? {
          tile: ZJ,
          offset: UJ
        } : {
          tile: FJ,
          offset: eJ
        }
      }
    }
    class fZ extends sZ {
      constructor(JJ, cJ) {
        super(JJ), this.wrapper = cJ
      }
      isBlock() {
        return !0
      }
      covers(JJ) {
        return !!this.children.length && (JJ < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (JJ, cJ) {
        let ZJ = new fZ(cJ || document.createElement(JJ.tagName), JJ);
        return cJ || (ZJ.flags |= 4), ZJ
      }
    }
    class xZ extends sZ {
      constructor(JJ, cJ) {
        super(JJ), this.attrs = cJ
      }
      isLine() {
        return !0
      }
      static start(JJ, cJ, ZJ) {
        let FJ = new xZ(cJ || document.createElement("div"), JJ);
        return cJ && ZJ || (FJ.flags |= 4), FJ
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(JJ, cJ, ZJ) {
        let FJ = null,
          UJ = -1,
          eJ = null,
          XJ = -1;
        ! function JJ(AJ, qJ) {
          for (let jJ = 0, YJ = 0; jJ < AJ.children.length && YJ <= qJ; jJ++) {
            let hJ = AJ.children[jJ],
              DJ = YJ + hJ.length;
            DJ >= qJ && (hJ.isComposite() ? JJ(hJ, qJ - YJ) : (!eJ || eJ.isHidden && (cJ > 0 || ZJ && rZ(eJ, hJ))) && (DJ > qJ || 32 & hJ.flags) ? (eJ = hJ, XJ = qJ - YJ) : (YJ < qJ || 16 & hJ.flags && !hJ.isHidden) && (FJ = hJ, UJ = qJ - YJ)), YJ = DJ
          }
        }(this, JJ);
        let AJ = (cJ < 0 ? FJ : eJ) || FJ || eJ;
        return AJ ? {
          tile: AJ,
          offset: AJ == FJ ? UJ : XJ
        } : null
      }
      coordsIn(JJ, cJ) {
        let ZJ = this.resolveInline(JJ, cJ, !0);
        return ZJ ? ZJ.tile.coordsIn(Math.max(0, ZJ.offset), cJ) : function(JJ) {
          let cJ = JJ.dom.lastChild;
          if (!cJ) return JJ.dom.getBoundingClientRect();
          let ZJ = TJ(cJ);
          return ZJ[ZJ.length - 1] || null
        }(this)
      }
      domIn(JJ, cJ) {
        let ZJ = this.resolveInline(JJ, cJ);
        if (ZJ) {
          let {
            tile: JJ,
            offset: FJ
          } = ZJ;
          if (this.dom.contains(JJ.dom)) return JJ.isText() ? new qc(JJ.dom, Math.min(JJ.dom.nodeValue.length, FJ)) : JJ.domPosFor(FJ, 16 & JJ.flags ? 1 : 32 & JJ.flags ? -1 : cJ);
          let UJ = ZJ.tile.parent,
            eJ = !1;
          for (let cJ of UJ.children) {
            if (eJ) return new qc(cJ.dom, 0);
            cJ == ZJ.tile && (eJ = !0)
          }
        }
        return new qc(this.dom, 0)
      }
    }

    function rZ(JJ, cJ) {
      let ZJ = JJ.coordsIn(0, 1),
        FJ = cJ.coordsIn(0, 1);
      return ZJ && FJ && FJ.top < ZJ.bottom
    }
    class vZ extends sZ {
      constructor(JJ, cJ) {
        super(JJ), this.mark = cJ
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (JJ, cJ) {
        let ZJ = new vZ(cJ || document.createElement(JJ.tagName), JJ);
        return cJ || (ZJ.flags |= 4), ZJ
      }
    }
    class mZ extends DZ {
      constructor(JJ, cJ) {
        super(JJ, cJ.length), this.text = cJ
      }
      sync(JJ) {
        2 & this.flags || (super.sync(JJ), this.dom.nodeValue != this.text && (JJ && JJ.node == this.dom && (JJ.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(JJ, cJ) {
        let ZJ = this.dom.nodeValue.length;
        JJ > ZJ && (JJ = ZJ);
        let FJ = JJ,
          UJ = JJ,
          eJ = 0;
        0 == JJ && cJ < 0 || JJ == ZJ && cJ >= 0 ? VJ.chrome || VJ.gecko || (JJ ? (FJ--, eJ = 1) : UJ < ZJ && (UJ++, eJ = -1)) : cJ < 0 ? FJ-- : UJ < ZJ && UJ++;
        let XJ = Fc(this.dom, FJ, UJ).getClientRects();
        if (!XJ.length) return null;
        let AJ = XJ[(eJ ? eJ < 0 : cJ >= 0) ? 0 : XJ.length - 1];
        return VJ.safari && !eJ && 0 == AJ.width && (AJ = Array.prototype.find.call(XJ, (JJ => JJ.width)) || AJ), eJ ? aJ(AJ, eJ < 0) : AJ || null
      }
      static of (JJ, cJ) {
        let ZJ = new mZ(cJ || document.createTextNode(JJ), JJ);
        return cJ || (ZJ.flags |= 2), ZJ
      }
    }
    class QZ extends DZ {
      constructor(JJ, cJ, ZJ, FJ) {
        super(JJ, cJ, FJ), this.widget = ZJ
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(JJ) {
        return !(48 & this.flags) && (this.flags & (JJ < 0 ? 64 : 128)) > 0
      }
      coordsIn(JJ, cJ) {
        return this.coordsInWidget(JJ, cJ, !1)
      }
      coordsInWidget(JJ, cJ, ZJ) {
        let FJ = this.widget.coordsAt(this.dom, JJ, cJ);
        if (FJ) return FJ;
        if (ZJ) return aJ(this.dom.getBoundingClientRect(), this.length ? 0 == JJ : cJ <= 0);
        {
          let cJ = this.dom.getClientRects(),
            ZJ = null;
          if (!cJ.length) return null;
          let FJ = !!(16 & this.flags) || !(32 & this.flags) && JJ > 0;
          for (let UJ = FJ ? cJ.length - 1 : 0; ZJ = cJ[UJ], !(JJ > 0 ? 0 == UJ : UJ == cJ.length - 1 || ZJ.top < ZJ.bottom); UJ += FJ ? -1 : 1);
          return aJ(ZJ, !FJ)
        }
      }
      get overrideDOMText() {
        if (!this.length) return FJ.F.empty;
        let {
          root: JJ
        } = this;
        if (!JJ) return FJ.F.empty;
        let cJ = this.posAtStart;
        return JJ.view.state.doc.slice(cJ, cJ + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (JJ, cJ, ZJ, FJ, UJ) {
        return UJ || (UJ = JJ.toDOM(cJ), JJ.editable || (UJ.contentEditable = "false")), new QZ(UJ, ZJ, JJ, FJ)
      }
    }
    class EZ extends DZ {
      constructor(JJ) {
        let cJ = document.createElement("img");
        cJ.className = "cm-widgetBuffer", cJ.setAttribute("aria-hidden", "true"), super(cJ, 0, JJ)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return FJ.F.empty
      }
      coordsIn(JJ) {
        return this.dom.getBoundingClientRect()
      }
    }
    class VZ {
      constructor(JJ) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = JJ
      }
      advance(JJ, cJ, ZJ) {
        let {
          tile: FJ,
          index: UJ,
          beforeBreak: eJ,
          parents: XJ
        } = this;
        for (; JJ || cJ > 0;)
          if (FJ.isComposite())
            if (eJ) {
              if (!JJ) break;
              ZJ && ZJ.break(), JJ--, eJ = !1
            } else if (UJ == FJ.children.length) {
          if (!JJ && !XJ.length) break;
          ZJ && ZJ.cn(FJ), eJ = !!FJ.breakAfter, ({
            tile: FJ,
            index: UJ
          } = XJ.pop()), UJ++
        } else {
          let AJ = FJ.children[UJ],
            qJ = AJ.breakAfter;
          !(cJ > 0 ? AJ.length <= JJ : AJ.length < JJ) || ZJ && !1 === ZJ.skip(AJ, 0, AJ.length) && AJ.isComposite ? (XJ.push({
            tile: FJ,
            index: UJ
          }), FJ = AJ, UJ = 0, ZJ && AJ.isComposite() && ZJ.enter(AJ)) : (eJ = !!qJ, UJ++, JJ -= AJ.length)
        } else if (UJ == FJ.length) eJ = !!FJ.breakAfter, ({
          tile: FJ,
          index: UJ
        } = XJ.pop()), UJ++;
        else {
          if (!JJ) break;
          {
            let cJ = Math.min(JJ, FJ.length - UJ);
            ZJ && ZJ.skip(FJ, UJ, UJ + cJ), JJ -= cJ, UJ += cJ
          }
        }
        return this.tile = FJ, this.index = UJ, this.beforeBreak = eJ, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class KZ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.from = JJ, this.to = cJ, this.wrapper = ZJ, this.rank = FJ
      }
    }
    class yZ {
      constructor(JJ, cJ, ZJ) {
        this.cache = JJ, this.root = cJ, this.blockWrappers = ZJ, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(JJ, cJ, ZJ, FJ) {
        var UJ;
        this.flushBuffer();
        let eJ = this.ensureMarks(cJ, ZJ),
          XJ = eJ.lastChild;
        if (XJ && XJ.isText() && !(8 & XJ.flags) && XJ.length + JJ.length < 512) {
          this.cache.reused.set(XJ, 2), (eJ.children[eJ.children.length - 1] = new mZ(XJ.dom, XJ.text + JJ)).parent = eJ
        } else eJ.append(FJ || mZ.of(JJ, null === (UJ = this.cache.find(mZ)) || void 0 === UJ ? void 0 : UJ.dom));
        this.pos += JJ.length, this.afterWidget = null
      }
      addComposition(JJ, cJ) {
        let ZJ = this.curLine;
        ZJ.dom != cJ.line.dom && (ZJ.setDOM(this.cache.reused.has(cJ.line) ? gZ(cJ.line.dom) : cJ.line.dom), this.cache.reused.set(cJ.line, 2));
        let FJ = ZJ;
        for (let XJ = cJ.marks.length - 1; XJ >= 0; XJ--) {
          let JJ = cJ.marks[XJ],
            ZJ = FJ.lastChild;
          if (ZJ instanceof vZ && ZJ.mark.eq(JJ.mark)) ZJ.dom != JJ.dom && ZJ.setDOM(gZ(JJ.dom)), FJ = ZJ;
          else {
            if (this.cache.reused.get(JJ)) {
              let cJ = DZ.get(JJ.dom);
              cJ && cJ.setDOM(gZ(JJ.dom))
            }
            let cJ = vZ.of(JJ.mark, JJ.dom);
            FJ.append(cJ), FJ = cJ
          }
          this.cache.reused.set(JJ, 2)
        }
        let UJ = DZ.get(JJ.text);
        UJ && this.cache.reused.set(UJ, 2);
        let eJ = new mZ(JJ.text, JJ.text.nodeValue);
        eJ.flags |= 8, FJ.append(eJ)
      }
      addInlineWidget(JJ, cJ, ZJ) {
        let FJ = this.afterWidget && 48 & JJ.flags && (48 & this.afterWidget.flags) == (48 & JJ.flags);
        FJ || this.flushBuffer();
        let UJ = this.ensureMarks(cJ, ZJ);
        FJ || 16 & JJ.flags || UJ.append(this.getBuffer(1)), UJ.append(JJ), this.pos += JJ.length, this.afterWidget = JJ
      }
      addMark(JJ, cJ, ZJ) {
        this.flushBuffer(), this.ensureMarks(cJ, ZJ).append(JJ), this.pos += JJ.length, this.afterWidget = null
      }
      addBlockWidget(JJ) {
        this.getBlockPos().append(JJ), this.pos += JJ.length, this.lastBlock = JJ, this.endLine()
      }
      continueWidget(JJ) {
        (this.afterWidget || this.lastBlock).length += JJ, this.pos += JJ
      }
      addLineStart(JJ, cJ) {
        var ZJ;
        JJ || (JJ = WZ);
        let FJ = xZ.start(JJ, cJ || (null === (ZJ = this.cache.find(xZ)) || void 0 === ZJ ? void 0 : ZJ.dom), !!cJ);
        this.getBlockPos().append(this.lastBlock = this.curLine = FJ)
      }
      addLine(JJ) {
        this.getBlockPos().append(JJ), this.pos += JJ.length, this.lastBlock = JJ, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(JJ) {
        this.blockPosCovered() || this.addLineStart(JJ)
      }
      ensureLine(JJ) {
        this.curLine || this.addLineStart(JJ)
      }
      ensureMarks(JJ, cJ) {
        var ZJ;
        let FJ = this.curLine;
        for (let UJ = JJ.length - 1; UJ >= 0; UJ--) {
          let eJ, XJ = JJ[UJ];
          if (cJ > 0 && (eJ = FJ.lastChild) && eJ instanceof vZ && eJ.mark.eq(XJ)) FJ = eJ, cJ--;
          else {
            let JJ = vZ.of(XJ, null === (ZJ = this.cache.find(vZ, (JJ => JJ.mark.eq(XJ)))) || void 0 === ZJ ? void 0 : ZJ.dom);
            FJ.append(JJ), FJ = JJ, cJ = 0
          }
        }
        return FJ
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let JJ = this.curLine.lastChild;
          JJ && wZ(this.curLine, !1) && ("BR" == JJ.dom.nodeName || !JJ.isWidget() || VJ.ios && wZ(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(PZ, 0, 32) || new QZ(PZ.toDOM(), 0, PZ, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let JJ = this.wrappers.length - 1; JJ >= 0; JJ--) this.wrappers[JJ].to < this.pos && this.wrappers.splice(JJ, 1);
        for (let JJ = this.blockWrappers; JJ.value && JJ.from <= this.pos; JJ.next())
          if (JJ.to >= this.pos) {
            let cJ = new KZ(JJ.from, JJ.to, JJ.value, JJ.rank),
              ZJ = this.wrappers.length;
            for (; ZJ > 0 && (this.wrappers[ZJ - 1].rank - cJ.rank || this.wrappers[ZJ - 1].to - cJ.to) < 0;) ZJ--;
            this.wrappers.splice(ZJ, 0, cJ)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var JJ;
        this.updateBlockWrappers();
        let cJ = this.root;
        for (let ZJ of this.wrappers) {
          let FJ = cJ.lastChild;
          if (ZJ.from < this.pos && FJ instanceof fZ && FJ.wrapper.eq(ZJ.wrapper)) cJ = FJ;
          else {
            let FJ = fZ.of(ZJ.wrapper, null === (JJ = this.cache.find(fZ, (JJ => JJ.wrapper.eq(ZJ.wrapper)))) || void 0 === JJ ? void 0 : JJ.dom);
            cJ.append(FJ), cJ = FJ
          }
        }
        return cJ
      }
      blockPosCovered() {
        let JJ = this.lastBlock;
        return null != JJ && !JJ.breakAfter && (!JJ.isWidget() || (160 & JJ.flags) > 0)
      }
      getBuffer(JJ) {
        let cJ = 2 | (JJ < 0 ? 16 : 32),
          ZJ = this.cache.find(EZ, void 0, 1);
        return ZJ && (ZJ.flags = cJ), ZJ || new EZ(cJ)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class SZ {
      constructor(JJ) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = JJ.iter()
      }
      skip(JJ) {
        this.textOff + JJ <= this.text.length ? this.textOff += JJ : (this.skipCount += JJ - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(JJ) {
        if (this.textOff == this.text.length) {
          let {
            value: cJ,
            lineBreak: ZJ,
            done: FJ
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, FJ) throw new Error("Ran out of text content when drawing inline views");
          this.text = cJ;
          let UJ = this.textOff = Math.min(JJ, cJ.length);
          return ZJ ? null : cJ.slice(0, UJ)
        }
        let cJ = Math.min(this.text.length, this.textOff + JJ),
          ZJ = this.text.slice(this.textOff, cJ);
        return this.textOff = cJ, ZJ
      }
    }
    const IZ = [QZ, xZ, mZ, vZ, EZ, fZ, GZ];
    for (let wX = 0; wX < IZ.length; wX++) IZ[wX].bucket = wX;
    class MZ {
      constructor(JJ) {
        this.view = JJ, this.buckets = IZ.map((() => [])), this.index = IZ.map((() => 0)), this.reused = new Map
      }
      add(JJ) {
        let cJ = JJ.constructor.bucket,
          ZJ = this.buckets[cJ];
        ZJ.length < 6 ? ZJ.push(JJ) : ZJ[this.index[cJ] = (this.index[cJ] + 1) % 6] = JJ
      }
      find(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          FJ = JJ.bucket,
          UJ = this.buckets[FJ],
          eJ = this.index[FJ];
        for (let XJ = UJ.length - 1; XJ >= 0; XJ--) {
          let JJ = (XJ + eJ) % UJ.length,
            AJ = UJ[JJ];
          if ((!cJ || cJ(AJ)) && !this.reused.has(AJ)) return UJ.splice(JJ, 1), JJ < eJ && this.index[FJ]--, this.reused.set(AJ, ZJ), AJ
        }
        return null
      }
      findWidget(JJ, cJ, ZJ) {
        let FJ = this.buckets[0];
        if (FJ.length)
          for (let UJ = 0, eJ = 0;; UJ++) {
            if (UJ == FJ.length) {
              if (eJ) return null;
              eJ = 1, UJ = 0
            }
            let XJ = FJ[UJ];
            if (!this.reused.has(XJ) && (0 == eJ ? XJ.widget.compare(JJ) : XJ.widget.constructor == JJ.constructor && JJ.updateDOM(XJ.dom, this.view, XJ.widget))) return FJ.splice(UJ, 1), UJ < this.index[0] && this.index[0]--, XJ.widget == JJ && XJ.length == cJ && (497 & XJ.flags) == ZJ ? (this.reused.set(XJ, 1), XJ) : (this.reused.set(XJ, 2), new QZ(XJ.dom, cJ, JJ, -498 & XJ.flags | ZJ))
          }
      }
      reuse(JJ) {
        return this.reused.set(JJ, 1), JJ
      }
      maybeReuse(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(JJ)) return this.reused.set(JJ, cJ), JJ.dom
      }
      clear() {
        for (let JJ = 0; JJ < this.buckets.length; JJ++) this.buckets[JJ].length = this.index[JJ] = 0
      }
    }
    class bZ {
      constructor(JJ, cJ, ZJ, UJ, eJ) {
        this.view = JJ, this.je = UJ, this.disallowBlockEffectsFor = eJ, this.openWidget = !1, this.openMarks = 0, this.cache = new MZ(JJ), this.text = new SZ(JJ.state.doc), this.builder = new yZ(this.cache, new GZ(JJ, JJ.contentDOM), FJ.v.iter(ZJ)), this.cache.reused.set(cJ, 2), this.old = new VZ(cJ), this.reuseWalker = {
          skip: (JJ, cJ, ZJ) => {
            if (this.cache.add(JJ), JJ.isComposite()) return !1
          },
          enter: JJ => this.cache.add(JJ),
          cn: () => {},
          break: () => {}
        }
      }
      run(JJ, cJ) {
        let ZJ = cJ && this.getCompositionContext(cJ.text);
        for (let FJ = 0, UJ = 0, eJ = 0;;) {
          let XJ = eJ < JJ.length ? JJ[eJ++] : null,
            AJ = XJ ? XJ.fromA : this.old.root.length;
          if (AJ > FJ) {
            let JJ = AJ - FJ;
            this.preserve(JJ, !eJ, !XJ), FJ = AJ, UJ += JJ
          }
          if (!XJ) break;
          cJ && XJ.fromA <= cJ.range.fromA && XJ.toA >= cJ.range.toA ? (this.forward(XJ.fromA, cJ.range.fromA, cJ.range.fromA < cJ.range.toA ? 1 : -1), this.emit(UJ, cJ.range.fromB), this.cache.clear(), this.builder.addComposition(cJ, ZJ), this.text.skip(cJ.range.toB - cJ.range.fromB), this.forward(cJ.range.fromA, XJ.toA), this.emit(cJ.range.toB, XJ.toB)) : (this.forward(XJ.fromA, XJ.toA), this.emit(UJ, XJ.toB)), UJ = XJ.toB, FJ = XJ.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(JJ, cJ, ZJ) {
        let FJ = function(JJ) {
            let cJ = [];
            for (let ZJ = JJ.parents.length; ZJ > 1; ZJ--) {
              let FJ = ZJ == JJ.parents.length ? JJ.tile : JJ.parents[ZJ].tile;
              FJ instanceof vZ && cJ.push(FJ.mark)
            }
            return cJ
          }(this.old),
          UJ = this.openMarks;
        this.old.advance(JJ, ZJ ? 1 : -1, {
          skip: (JJ, cJ, ZJ) => {
            if (JJ.isWidget())
              if (this.openWidget) this.builder.continueWidget(ZJ - cJ);
              else {
                let eJ = ZJ > 0 || cJ < JJ.length ? QZ.of(JJ.widget, this.view, ZJ - cJ, 496 & JJ.flags, this.cache.maybeReuse(JJ)) : this.cache.reuse(JJ);
                256 & eJ.flags ? (eJ.flags &= -2, this.builder.addBlockWidget(eJ)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(eJ, FJ, UJ), UJ = FJ.length)
              }
            else if (JJ.isText()) this.builder.ensureLine(null), cJ || ZJ != JJ.length || this.cache.reused.has(JJ) ? (this.cache.add(JJ), this.builder.addText(JJ.text.slice(cJ, ZJ), FJ, UJ)) : this.builder.addText(JJ.text, FJ, UJ, this.cache.reuse(JJ)), UJ = FJ.length;
            else if (JJ.isLine()) JJ.flags &= -2, this.cache.reused.set(JJ, 1), this.builder.addLine(JJ);
            else if (JJ instanceof EZ) this.cache.add(JJ);
            else {
              if (!(JJ instanceof vZ)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(JJ, FJ, UJ), this.cache.reused.set(JJ, 1), UJ = FJ.length
            }
            this.openWidget = !1
          },
          enter: JJ => {
            JJ.isLine() ? this.builder.addLineStart(JJ.attrs, this.cache.maybeReuse(JJ)) : (this.cache.add(JJ), JJ instanceof vZ && FJ.unshift(JJ.mark)), this.openWidget = !1
          },
          cn: JJ => {
            JJ.isLine() ? FJ.length && (FJ.length = UJ = 0) : JJ instanceof vZ && (FJ.shift(), UJ = Math.min(UJ, FJ.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(JJ)
      }
      emit(JJ, cJ) {
        let ZJ = null,
          UJ = this.builder,
          eJ = 0,
          XJ = FJ.v.spans(this.je, JJ, cJ, {
            point: (JJ, cJ, FJ, XJ, AJ, qJ) => {
              if (FJ instanceof PJ) {
                if (this.disallowBlockEffectsFor[qJ]) {
                  if (FJ.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (cJ > this.view.state.doc.lineAt(JJ).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (eJ = XJ.length, AJ > XJ.length) UJ.continueWidget(cJ - JJ);
                else {
                  let eJ = FJ.widget || (FJ.block ? HZ.block : HZ.inline),
                    qJ = function(JJ) {
                      let cJ = JJ.isReplace ? (JJ.startSide < 0 ? 64 : 0) | (JJ.endSide > 0 ? 128 : 0) : JJ.startSide > 0 ? 32 : 16;
                      JJ.block && (cJ |= 256);
                      return cJ
                    }(FJ),
                    jJ = this.cache.findWidget(eJ, cJ - JJ, qJ) || QZ.of(eJ, this.view, cJ - JJ, qJ);
                  FJ.block ? (FJ.startSide > 0 && UJ.addLineStartIfNotCovered(ZJ), UJ.addBlockWidget(jJ)) : (UJ.ensureLine(ZJ), UJ.addInlineWidget(jJ, XJ, AJ))
                }
                ZJ = null
              } else ZJ = function(JJ, cJ) {
                let ZJ = cJ.spec.attributes,
                  FJ = cJ.spec.class;
                if (!ZJ && !FJ) return JJ;
                JJ || (JJ = {
                  class: "cm-line"
                });
                ZJ && KJ(ZJ, JJ);
                FJ && (JJ.class += " " + FJ);
                return JJ
              }(ZJ, FJ);
              cJ > JJ && this.text.skip(cJ - JJ)
            },
            span: (JJ, cJ, FJ, eJ) => {
              for (let XJ = JJ; XJ < cJ;) {
                let AJ = this.text.next(Math.min(512, cJ - XJ));
                null == AJ ? (UJ.addLineStartIfNotCovered(ZJ), UJ.addBreak(), XJ++) : (UJ.ensureLine(ZJ), UJ.addText(AJ, FJ, XJ == JJ ? eJ : FJ.length), XJ += AJ.length), ZJ = null
              }
            }
          });
        UJ.addLineStartIfNotCovered(ZJ), this.openWidget = XJ > eJ, this.openMarks = XJ
      }
      forward(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        cJ - JJ <= 10 ? this.old.advance(cJ - JJ, ZJ, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(cJ - JJ - 10, -1), this.old.advance(5, ZJ, this.reuseWalker))
      }
      getCompositionContext(JJ) {
        let cJ = [],
          ZJ = null;
        for (let FJ = JJ.parentNode;; FJ = FJ.parentNode) {
          let JJ = DZ.get(FJ);
          if (FJ == this.view.contentDOM) break;
          JJ instanceof vZ ? cJ.push(JJ) : (null === JJ || void 0 === JJ ? void 0 : JJ.isLine()) ? ZJ = JJ : JJ instanceof fZ || ("DIV" != FJ.nodeName || ZJ || FJ == this.view.contentDOM ? ZJ || cJ.push(vZ.of(new gJ({
            tagName: FJ.nodeName.toLowerCase(),
            attributes: MJ(FJ)
          }), FJ)) : ZJ = new xZ(FJ, WZ))
        }
        return {
          line: ZJ,
          marks: cJ
        }
      }
    }

    function wZ(JJ, cJ) {
      let ZJ = JJ => {
        for (let FJ of JJ.children)
          if ((cJ ? FJ.isText() : FJ.length) || ZJ(FJ)) return !0;
        return !1
      };
      return ZJ(JJ)
    }
    const WZ = {
      class: "cm-line"
    };

    function gZ(JJ) {
      let cJ = DZ.get(JJ);
      return cJ && cJ.setDOM(JJ.cloneNode()), JJ
    }
    class HZ extends bJ {
      constructor(JJ) {
        super(), this.tag = JJ
      }
      eq(JJ) {
        return JJ.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(JJ) {
        return JJ.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    HZ.inline = new HZ("span"), HZ.block = new HZ("div");
    const PZ = new class extends bJ {
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
    class kZ {
      constructor(JJ) {
        this.view = JJ, this.je = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = WJ.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new GZ(JJ, JJ.contentDOM), this.updateInner([new jZ(0, 0, 0, JJ.state.doc.length)], null)
      }
      update(JJ) {
        var cJ;
        let ZJ = JJ.changedRanges;
        this.minWidth > 0 && ZJ.length && (ZJ.every((JJ => {
          let {
            fromA: cJ,
            toA: ZJ
          } = JJ;
          return ZJ < this.minWidthFrom || cJ > this.minWidthTo
        })) ? (this.minWidthFrom = JJ.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = JJ.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(JJ);
        let UJ = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (cJ = this.domChanged) || void 0 === cJ ? void 0 : cJ.newSel) ? UJ = this.domChanged.newSel.head : function(JJ, cJ) {
          let ZJ = !1;
          cJ && JJ.iterChangedRanges(((JJ, FJ) => {
            JJ < cJ.to && FJ > cJ.from && (ZJ = !0)
          }));
          return ZJ
        }(JJ.changes, this.hasComposition) || JJ.selectionSet || (UJ = JJ.state.selection.main.head));
        let eJ = UJ > -1 ? function(JJ, cJ, ZJ) {
          let FJ = dZ(JJ, ZJ);
          if (!FJ) return null;
          let {
            node: UJ,
            from: eJ,
            to: XJ
          } = FJ, AJ = UJ.nodeValue;
          if (/[\n\r]/.test(AJ)) return null;
          if (JJ.state.doc.sliceString(FJ.from, FJ.to) != AJ) return null;
          let qJ = cJ.invertedDesc;
          return {
            range: new jZ(qJ.mapPos(eJ), qJ.mapPos(XJ), eJ, XJ),
            text: UJ
          }
        }(this.view, JJ.changes, UJ) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: cJ,
            to: FJ
          } = this.hasComposition;
          ZJ = new jZ(cJ, FJ, JJ.changes.mapPos(cJ, -1), JJ.changes.mapPos(FJ, 1)).addToSet(ZJ.slice())
        }
        this.hasComposition = eJ ? {
          from: eJ.range.fromB,
          to: eJ.range.toB
        } : null, (VJ.ie || VJ.chrome) && !eJ && JJ && JJ.state.doc.lines != JJ.startState.doc.lines && (this.forceSelection = !0);
        let XJ = this.je,
          AJ = this.blockWrappers;
        this.updateDeco();
        let qJ = function(JJ, cJ, ZJ) {
          let UJ = new zZ;
          return FJ.v.compare(JJ, cJ, ZJ, UJ), UJ.changes
        }(XJ, this.je, JJ.changes);
        qJ.length && (ZJ = jZ.extendWithRanges(ZJ, qJ));
        let jJ = function(JJ, cJ, ZJ) {
          let UJ = new NZ;
          return FJ.v.compare(JJ, cJ, ZJ, UJ), UJ.changes
        }(AJ, this.blockWrappers, JJ.changes);
        return jJ.length && (ZJ = jZ.extendWithRanges(ZJ, jJ)), eJ && !ZJ.some((JJ => JJ.fromA <= eJ.range.fromA && JJ.toA >= eJ.range.toA)) && (ZJ = eJ.range.addToSet(ZJ.slice())), !(2 & this.tile.flags && 0 == ZJ.length) && (this.updateInner(ZJ, eJ), JJ.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(JJ, cJ) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: ZJ
        } = this.view;
        ZJ.ignore((() => {
          if (cJ || JJ.length) {
            let ZJ = this.tile,
              FJ = new bZ(this.view, ZJ, this.blockWrappers, this.je, this.dynamicDecorationMap);
            cJ && DZ.get(cJ.text) && FJ.cache.reused.set(DZ.get(cJ.text), 2), this.tile = FJ.run(JJ, cJ), pZ(ZJ, FJ.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let FJ = VJ.chrome || VJ.ios ? {
            node: ZJ.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(FJ), !FJ || !FJ.written && ZJ.selectionRange.focusNode == FJ.node && this.tile.dom.contains(FJ.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let FJ = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let UJ of this.tile.children) UJ.isWidget() && UJ.widget instanceof OZ && FJ.push(UJ.dom);
        ZJ.updateGaps(FJ)
      }
      updateEditContextFormatting(JJ) {
        this.editContextFormatting = this.editContextFormatting.map(JJ.changes);
        for (let cJ of JJ.transactions)
          for (let JJ of cJ.effects) JJ.is(uc) && (this.editContextFormatting = JJ.value)
      }
      updateSelection() {
        let JJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: cJ
        } = this.tile, ZJ = this.view.root.activeElement, FJ = ZJ == cJ, UJ = !FJ && !(this.view.state.facet(Rc) || cJ.tabIndex > -1) && OJ(cJ, this.view.observer.selectionRange) && !(ZJ && cJ.contains(ZJ));
        if (!(FJ || JJ || UJ)) return;
        let eJ = this.forceSelection;
        this.forceSelection = !1;
        let XJ, AJ, qJ = this.view.state.selection.main;
        if (qJ.empty ? AJ = XJ = this.inlineDOMNearPos(qJ.anchor, qJ.assoc || 1) : (AJ = this.inlineDOMNearPos(qJ.head, qJ.head == qJ.from ? 1 : -1), XJ = this.inlineDOMNearPos(qJ.anchor, qJ.anchor == qJ.from ? 1 : -1)), VJ.gecko && qJ.empty && !this.hasComposition && (1 == (jJ = XJ).node.nodeType && jJ.node.firstChild && (0 == jJ.offset || "false" == jJ.node.childNodes[jJ.offset - 1].contentEditable) && (jJ.offset == jJ.node.childNodes.length || "false" == jJ.node.childNodes[jJ.offset].contentEditable))) {
          let JJ = document.createTextNode("");
          this.view.observer.ignore((() => XJ.node.insertBefore(JJ, XJ.node.childNodes[XJ.offset] || null))), XJ = AJ = new qc(JJ, 0), eJ = !0
        }
        var jJ;
        let YJ = this.view.observer.selectionRange;
        !eJ && YJ.focusNode && (CJ(XJ.node, XJ.offset, YJ.anchorNode, YJ.anchorOffset) && CJ(AJ.node, AJ.offset, YJ.focusNode, YJ.focusOffset) || this.suppressWidgetCursorChange(YJ, qJ)) || (this.view.observer.ignore((() => {
          VJ.android && VJ.chrome && cJ.contains(YJ.focusNode) && function(JJ, cJ) {
            for (let ZJ = JJ; ZJ && ZJ != cJ; ZJ = ZJ.assignedSlot || ZJ.parentNode)
              if (1 == ZJ.nodeType && "false" == ZJ.contentEditable) return !0;
            return !1
          }(YJ.focusNode, cJ) && (cJ.blur(), cJ.focus({
            preventScroll: !0
          }));
          let JJ = zJ(this.view.root);
          if (JJ)
            if (qJ.empty) {
              if (VJ.gecko) {
                let JJ = (FJ = XJ.node, eJ = XJ.offset, 1 != FJ.nodeType ? 0 : (eJ && "false" == FJ.childNodes[eJ - 1].contentEditable ? 1 : 0) | (eJ < FJ.childNodes.length && "false" == FJ.childNodes[eJ].contentEditable ? 2 : 0));
                if (JJ && 3 != JJ) {
                  let cJ = (1 == JJ ? Xc : Ac)(XJ.node, XJ.offset);
                  cJ && (XJ = new qc(cJ.node, cJ.offset))
                }
              }
              JJ.collapse(XJ.node, XJ.offset), null != qJ.bidiLevel && void 0 !== JJ.caretBidiLevel && (JJ.caretBidiLevel = qJ.bidiLevel)
            } else if (JJ.extend) {
            JJ.collapse(XJ.node, XJ.offset);
            try {
              JJ.extend(AJ.node, AJ.offset)
            } catch (jJ) {}
          } else {
            let cJ = document.createRange();
            qJ.anchor > qJ.head && ([XJ, AJ] = [AJ, XJ]), cJ.setEnd(AJ.node, AJ.offset), cJ.setStart(XJ.node, XJ.offset), JJ.removeAllRanges(), JJ.addRange(cJ)
          } else;
          var FJ, eJ;
          UJ && this.view.root.activeElement == cJ && (cJ.blur(), ZJ && ZJ.focus())
        })), this.view.observer.setSelectionRange(XJ, AJ)), this.impreciseAnchor = XJ.precise ? null : new qc(YJ.anchorNode, YJ.anchorOffset), this.impreciseHead = AJ.precise ? null : new qc(YJ.focusNode, YJ.focusOffset)
      }
      suppressWidgetCursorChange(JJ, cJ) {
        return this.hasComposition && cJ.empty && CJ(JJ.focusNode, JJ.focusOffset, JJ.anchorNode, JJ.anchorOffset) && this.posFromDOM(JJ.focusNode, JJ.focusOffset) == cJ.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: JJ
        } = this, cJ = JJ.state.selection.main, ZJ = zJ(JJ.root), {
          anchorNode: FJ,
          anchorOffset: UJ
        } = JJ.observer.selectionRange;
        if (!ZJ || !cJ.empty || !cJ.assoc || !ZJ.modify) return;
        let eJ = this.lineAt(cJ.head, cJ.assoc);
        if (!eJ) return;
        let XJ = eJ.posAtStart;
        if (cJ.head == XJ || cJ.head == XJ + eJ.length) return;
        let AJ = this.coordsAt(cJ.head, -1),
          qJ = this.coordsAt(cJ.head, 1);
        if (!AJ || !qJ || AJ.bottom > qJ.top) return;
        let jJ = this.domAtPos(cJ.head + cJ.assoc, cJ.assoc);
        ZJ.collapse(jJ.node, jJ.offset), ZJ.modify("move", cJ.assoc < 0 ? "forward" : "backward", "lineboundary"), JJ.observer.readSelectionRange();
        let YJ = JJ.observer.selectionRange;
        JJ.docView.posFromDOM(YJ.anchorNode, YJ.anchorOffset) != cJ.from && ZJ.collapse(FJ, UJ)
      }
      posFromDOM(JJ, cJ) {
        let ZJ = this.tile.nearest(JJ);
        if (!ZJ) return 2 & this.tile.dom.compareDocumentPosition(JJ) ? 0 : this.view.state.doc.length;
        let FJ = ZJ.posAtStart;
        if (!ZJ.isComposite()) return ZJ.isText() ? JJ == ZJ.dom ? FJ + cJ : FJ + (cJ ? ZJ.length : 0) : FJ;
        {
          let UJ;
          if (JJ == ZJ.dom) UJ = ZJ.dom.childNodes[cJ];
          else {
            let FJ = 0 == LJ(JJ) ? 0 : 0 == cJ ? -1 : 1;
            for (;;) {
              let cJ = JJ.parentNode;
              if (cJ == ZJ.dom) break;
              0 == FJ && cJ.firstChild != cJ.lastChild && (FJ = JJ == cJ.firstChild ? -1 : 1), JJ = cJ
            }
            UJ = FJ < 0 ? JJ : JJ.nextSibling
          }
          if (UJ == ZJ.dom.firstChild) return FJ;
          for (; UJ && !DZ.get(UJ);) UJ = UJ.nextSibling;
          if (!UJ) return FJ + ZJ.length;
          for (let JJ = 0, cJ = FJ;; JJ++) {
            let FJ = ZJ.children[JJ];
            if (FJ.dom == UJ) return cJ;
            cJ += FJ.length + FJ.breakAfter
          }
        }
      }
      domAtPos(JJ, cJ) {
        let {
          tile: ZJ,
          offset: FJ
        } = this.tile.resolveBlock(JJ, cJ);
        return ZJ.isWidget() ? ZJ.domPosFor(JJ, cJ) : ZJ.domIn(FJ, cJ)
      }
      inlineDOMNearPos(JJ, cJ) {
        let ZJ, FJ, UJ = -1,
          eJ = !1,
          XJ = -1,
          AJ = !1;
        return this.tile.blockTiles(((cJ, qJ) => {
          if (cJ.isWidget()) {
            if (32 & cJ.flags && qJ >= JJ) return !0;
            16 & cJ.flags && (eJ = !0)
          } else {
            let jJ = qJ + cJ.length;
            if (qJ <= JJ && (ZJ = cJ, UJ = JJ - qJ, eJ = jJ < JJ), jJ >= JJ && !FJ && (FJ = cJ, XJ = JJ - qJ, AJ = qJ > JJ), qJ > JJ && FJ) return !0
          }
        })), ZJ || FJ ? (eJ && FJ ? ZJ = null : AJ && ZJ && (FJ = null), ZJ && cJ < 0 || !FJ ? ZJ.domIn(UJ, cJ) : FJ.domIn(XJ, cJ)) : this.domAtPos(JJ, cJ)
      }
      coordsAt(JJ, cJ) {
        let {
          tile: ZJ,
          offset: FJ
        } = this.tile.resolveBlock(JJ, cJ);
        return ZJ.isWidget() ? ZJ.widget instanceof OZ ? null : ZJ.coordsInWidget(FJ, cJ, !0) : ZJ.coordsIn(FJ, cJ)
      }
      lineAt(JJ, cJ) {
        let {
          tile: ZJ
        } = this.tile.resolveBlock(JJ, cJ);
        return ZJ.isLine() ? ZJ : null
      }
      coordsForChar(JJ) {
        let {
          tile: cJ,
          offset: ZJ
        } = this.tile.resolveBlock(JJ, 1);
        if (!cJ.isLine()) return null;
        return function JJ(cJ, ZJ) {
          if (cJ.isComposite())
            for (let FJ of cJ.children) {
              if (FJ.length >= ZJ) {
                let cJ = JJ(FJ, ZJ);
                if (cJ) return cJ
              }
              if ((ZJ -= FJ.length) < 0) break
            } else if (cJ.isText() && ZJ < cJ.length) {
              let JJ = (0, FJ.X)(cJ.text, ZJ);
              if (JJ == ZJ) return null;
              let UJ = Fc(cJ.dom, ZJ, JJ).getClientRects();
              for (let cJ = 0; cJ < UJ.length; cJ++) {
                let JJ = UJ[cJ];
                if (cJ == UJ.length - 1 || JJ.top < JJ.bottom && JJ.left < JJ.right) return JJ
              }
            } return null
        }(cJ, ZJ)
      }
      measureVisibleLineHeights(JJ) {
        let cJ = [],
          {
            from: ZJ,
            to: FJ
          } = JJ,
          UJ = this.view.contentDOM.clientWidth,
          eJ = UJ > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          XJ = -1,
          AJ = this.view.textDirection == jc.LTR,
          qJ = 0,
          jJ = (JJ, YJ, hJ) => {
            for (let DJ = 0; DJ < JJ.children.length && !(YJ > FJ); DJ++) {
              let FJ = JJ.children[DJ],
                sJ = YJ + FJ.length,
                nJ = FJ.dom.getBoundingClientRect(),
                {
                  height: GJ
                } = nJ;
              if (hJ && !DJ && (qJ += nJ.top - hJ.top), FJ instanceof fZ) sJ > ZJ && jJ(FJ, YJ, nJ);
              else if (YJ >= ZJ && (qJ > 0 && cJ.push(-qJ), cJ.push(GJ + qJ), qJ = 0, eJ)) {
                let JJ = FJ.dom.lastChild,
                  cJ = JJ ? TJ(JJ) : [];
                if (cJ.length) {
                  let JJ = cJ[cJ.length - 1],
                    ZJ = AJ ? JJ.right - nJ.left : nJ.right - JJ.left;
                  ZJ > XJ && (XJ = ZJ, this.minWidth = UJ, this.minWidthFrom = YJ, this.minWidthTo = sJ)
                }
              }
              hJ && DJ == JJ.children.length - 1 && (qJ += hJ.bottom - nJ.bottom), YJ = sJ + FJ.breakAfter
            }
          };
        return jJ(this.tile, 0, null), cJ
      }
      textDirectionAt(JJ) {
        let {
          tile: cJ
        } = this.tile.resolveBlock(JJ, 1);
        return "rtl" == getComputedStyle(cJ.dom).direction ? jc.RTL : jc.LTR
      }
      measureTextSize() {
        let JJ = this.tile.blockTiles((JJ => {
          if (JJ.isLine() && JJ.children.length && JJ.length <= 20) {
            let cJ, ZJ = 0;
            for (let FJ of JJ.children) {
              if (!FJ.isText() || /[^ -~]/.test(FJ.text)) return;
              let JJ = TJ(FJ.dom);
              if (1 != JJ.length) return;
              ZJ += JJ[0].width, cJ = JJ[0].height
            }
            if (ZJ) return {
              lineHeight: JJ.dom.getBoundingClientRect().height,
              charWidth: ZJ / JJ.length,
              textHeight: cJ
            }
          }
        }));
        if (JJ) return JJ;
        let cJ, ZJ, FJ, UJ = document.createElement("div");
        return UJ.className = "cm-line", UJ.style.width = "99999px", UJ.style.position = "absolute", UJ.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(UJ);
          let JJ = TJ(UJ.firstChild)[0];
          cJ = UJ.getBoundingClientRect().height, ZJ = JJ && JJ.width ? JJ.width / 27 : 7, FJ = JJ && JJ.height ? JJ.height : cJ, UJ.remove()
        })), {
          lineHeight: cJ,
          charWidth: ZJ,
          textHeight: FJ
        }
      }
      computeBlockGapDeco() {
        let JJ = [],
          cJ = this.view.viewState;
        for (let ZJ = 0, FJ = 0;; FJ++) {
          let UJ = FJ == cJ.viewports.length ? null : cJ.viewports[FJ],
            eJ = UJ ? UJ.from - 1 : this.view.state.doc.length;
          if (eJ > ZJ) {
            let FJ = (cJ.lineBlockAt(eJ).bottom - cJ.lineBlockAt(ZJ).top) / this.view.scaleY;
            JJ.push(WJ.replace({
              widget: new OZ(FJ),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(ZJ, eJ))
          }
          if (!UJ) break;
          ZJ = UJ.to + 1
        }
        return WJ.set(JJ)
      }
      updateDeco() {
        let JJ = 1,
          cJ = this.view.state.facet(JZ).map((cJ => (this.dynamicDecorationMap[JJ++] = "function" == typeof cJ) ? cJ(this.view) : cJ)),
          ZJ = !1,
          UJ = this.view.state.facet(ZZ).map(((JJ, cJ) => {
            let FJ = "function" == typeof JJ;
            return FJ && (ZJ = !0), FJ ? JJ(this.view) : JJ
          }));
        for (UJ.length && (this.dynamicDecorationMap[JJ++] = ZJ, cJ.push(FJ.v.join(UJ))), this.je = [this.editContextFormatting, ...cJ, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; JJ < this.je.length;) this.dynamicDecorationMap[JJ++] = !1;
        this.blockWrappers = this.view.state.facet(cZ).map((JJ => "function" == typeof JJ ? JJ(this.view) : JJ))
      }
      scrollIntoView(JJ) {
        var cJ;
        if (JJ.isSnapshot) {
          let cJ = this.view.viewState.lineBlockAt(JJ.range.head);
          return this.view.scrollDOM.scrollTop = cJ.top - JJ.yMargin, void(this.view.scrollDOM.scrollLeft = JJ.xMargin)
        }
        for (let YJ of this.view.state.facet(Oc)) try {
          if (YJ(this.view, JJ.range, JJ)) return !0
        } catch (jJ) {
          ic(this.view.state, jJ, "scroll handler")
        }
        let ZJ, {
            range: FJ
          } = JJ,
          UJ = this.coordsAt(FJ.head, null !== (cJ = FJ.assoc) && void 0 !== cJ ? cJ : FJ.empty ? 0 : FJ.head > FJ.anchor ? -1 : 1);
        if (!UJ) return;
        !FJ.empty && (ZJ = this.coordsAt(FJ.anchor, FJ.anchor > FJ.head ? -1 : 1)) && (UJ = {
          left: Math.min(UJ.left, ZJ.left),
          top: Math.min(UJ.top, ZJ.top),
          right: Math.max(UJ.right, ZJ.right),
          bottom: Math.max(UJ.bottom, ZJ.bottom)
        });
        let eJ = AZ(this.view),
          XJ = {
            left: UJ.left - eJ.left,
            top: UJ.top - eJ.top,
            right: UJ.right + eJ.right,
            bottom: UJ.bottom + eJ.bottom
          },
          {
            offsetWidth: AJ,
            offsetHeight: qJ
          } = this.view.scrollDOM;
        if (function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
            let qJ = JJ.ownerDocument,
              jJ = qJ.defaultView || window;
            for (let YJ = JJ, hJ = !1; YJ && !hJ;)
              if (1 == YJ.nodeType) {
                let JJ, DJ = YJ == qJ.body,
                  sJ = 1,
                  nJ = 1;
                if (DJ) JJ = BJ(jJ);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(YJ).position) && (hJ = !0), YJ.scrollHeight <= YJ.clientHeight && YJ.scrollWidth <= YJ.clientWidth) {
                    YJ = YJ.assignedSlot || YJ.parentNode;
                    continue
                  }
                  let cJ = YJ.getBoundingClientRect();
                  ({
                    scaleX: sJ,
                    scaleY: nJ
                  } = tJ(YJ, cJ)), JJ = {
                    left: cJ.left,
                    right: cJ.left + YJ.clientWidth * sJ,
                    top: cJ.top,
                    bottom: cJ.top + YJ.clientHeight * nJ
                  }
                }
                let GJ = 0,
                  fJ = 0;
                if ("nearest" == UJ) cJ.top < JJ.top + XJ ? (fJ = cJ.top - (JJ.top + XJ), ZJ > 0 && cJ.bottom > JJ.bottom + fJ && (fJ = cJ.bottom - JJ.bottom + XJ)) : cJ.bottom > JJ.bottom - XJ && (fJ = cJ.bottom - JJ.bottom + XJ, ZJ < 0 && cJ.top - fJ < JJ.top && (fJ = cJ.top - (JJ.top + XJ)));
                else {
                  let FJ = cJ.bottom - cJ.top,
                    eJ = JJ.bottom - JJ.top;
                  fJ = ("center" == UJ && FJ <= eJ ? cJ.top + FJ / 2 - eJ / 2 : "start" == UJ || "center" == UJ && ZJ < 0 ? cJ.top - XJ : cJ.bottom - eJ + XJ) - JJ.top
                }
                if ("nearest" == FJ ? cJ.left < JJ.left + eJ ? (GJ = cJ.left - (JJ.left + eJ), ZJ > 0 && cJ.right > JJ.right + GJ && (GJ = cJ.right - JJ.right + eJ)) : cJ.right > JJ.right - eJ && (GJ = cJ.right - JJ.right + eJ, ZJ < 0 && cJ.left < JJ.left + GJ && (GJ = cJ.left - (JJ.left + eJ))) : GJ = ("center" == FJ ? cJ.left + (cJ.right - cJ.left) / 2 - (JJ.right - JJ.left) / 2 : "start" == FJ == AJ ? cJ.left - eJ : cJ.right - (JJ.right - JJ.left) + eJ) - JJ.left, GJ || fJ)
                  if (DJ) jJ.scrollBy(GJ, fJ);
                  else {
                    let JJ = 0,
                      ZJ = 0;
                    if (fJ) {
                      let JJ = YJ.scrollTop;
                      YJ.scrollTop += fJ / nJ, ZJ = (YJ.scrollTop - JJ) * nJ
                    }
                    if (GJ) {
                      let cJ = YJ.scrollLeft;
                      YJ.scrollLeft += GJ / sJ, JJ = (YJ.scrollLeft - cJ) * sJ
                    }
                    cJ = {
                      left: cJ.left - JJ,
                      top: cJ.top - ZJ,
                      right: cJ.right - JJ,
                      bottom: cJ.bottom - ZJ
                    }, JJ && Math.abs(JJ - GJ) < 1 && (FJ = "nearest"), ZJ && Math.abs(ZJ - fJ) < 1 && (UJ = "nearest")
                  } if (DJ) break;
                (cJ.top < JJ.top || cJ.bottom > JJ.bottom || cJ.left < JJ.left || cJ.right > JJ.right) && (cJ = {
                  left: Math.max(cJ.left, JJ.left),
                  right: Math.min(cJ.right, JJ.right),
                  top: Math.max(cJ.top, JJ.top),
                  bottom: Math.min(cJ.bottom, JJ.bottom)
                }), YJ = YJ.assignedSlot || YJ.parentNode
              } else {
                if (11 != YJ.nodeType) break;
                YJ = YJ.host
              }
          }(this.view.scrollDOM, XJ, FJ.head < FJ.anchor ? -1 : 1, JJ.x, JJ.y, Math.max(Math.min(JJ.xMargin, AJ), -AJ), Math.max(Math.min(JJ.yMargin, qJ), -qJ), this.view.textDirection == jc.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (UJ.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || UJ.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let JJ = this.view.docView.lineAt(FJ.head, 1);
          JJ && JJ.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(JJ) {
        let cJ = JJ => JJ.isWidget() || JJ.children.some(cJ);
        return cJ(this.tile.resolveBlock(JJ, 1).tile)
      }
      destroy() {
        pZ(this.tile)
      }
    }

    function pZ(JJ, cJ) {
      let ZJ = null === cJ || void 0 === cJ ? void 0 : cJ.get(JJ);
      if (1 != ZJ) {
        null == ZJ && JJ.destroy();
        for (let ZJ of JJ.children) pZ(ZJ, cJ)
      }
    }

    function dZ(JJ, cJ) {
      let ZJ = JJ.observer.selectionRange;
      if (!ZJ.focusNode) return null;
      let FJ = Xc(ZJ.focusNode, ZJ.focusOffset),
        UJ = Ac(ZJ.focusNode, ZJ.focusOffset),
        eJ = FJ || UJ;
      if (UJ && FJ && UJ.node != FJ.node) {
        let cJ = DZ.get(UJ.node);
        if (!cJ || cJ.isText() && cJ.text != UJ.node.nodeValue) eJ = UJ;
        else if (JJ.docView.lastCompositionAfterCursor) {
          let JJ = DZ.get(FJ.node);
          !JJ || JJ.isText() && JJ.text != FJ.node.nodeValue || (eJ = UJ)
        }
      }
      if (JJ.docView.lastCompositionAfterCursor = eJ != FJ, !eJ) return null;
      let XJ = cJ - eJ.offset;
      return {
        from: XJ,
        to: XJ + eJ.node.nodeValue.length,
        node: eJ.node
      }
    }
    let zZ = class {
      constructor() {
        this.changes = []
      }
      compareRange(JJ, cJ) {
        pJ(JJ, cJ, this.changes)
      }
      comparePoint(JJ, cJ) {
        pJ(JJ, cJ, this.changes)
      }
      boundChange(JJ) {
        pJ(JJ, JJ, this.changes)
      }
    };
    class NZ {
      constructor() {
        this.changes = []
      }
      compareRange(JJ, cJ) {
        pJ(JJ, cJ, this.changes)
      }
      comparePoint() {}
      boundChange(JJ) {
        pJ(JJ, JJ, this.changes)
      }
    }
    class OZ extends bJ {
      constructor(JJ) {
        super(), this.height = JJ
      }
      toDOM() {
        let JJ = document.createElement("div");
        return JJ.className = "cm-gap", this.updateDOM(JJ), JJ
      }
      eq(JJ) {
        return JJ.height == this.height
      }
      updateDOM(JJ) {
        return JJ.style.height = this.height + "px", !0
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

    function TZ(JJ, cJ, ZJ) {
      let FJ = JJ.lineBlockAt(cJ);
      if (Array.isArray(FJ.type)) {
        let JJ;
        for (let UJ of FJ.type) {
          if (UJ.from > cJ) break;
          if (!(UJ.to < cJ)) {
            if (UJ.from < cJ && UJ.to > cJ) return UJ;
            JJ && (UJ.type != wJ.Text || JJ.type == UJ.type && !(ZJ < 0 ? UJ.from < cJ : UJ.to > cJ)) || (JJ = UJ)
          }
        }
        return JJ || FJ
      }
      return FJ
    }

    function CZ(JJ, cJ, ZJ, FJ) {
      let UJ = JJ.state.doc.lineAt(cJ.head),
        eJ = JJ.bidiSpans(UJ),
        XJ = JJ.textDirectionAt(UJ.from);
      for (let AJ = cJ, qJ = null;;) {
        let cJ = Ic(UJ, eJ, XJ, AJ, ZJ),
          jJ = Sc;
        if (!cJ) {
          if (UJ.number == (ZJ ? JJ.state.doc.lines : 1)) return AJ;
          jJ = "\n", UJ = JJ.state.doc.line(UJ.number + (ZJ ? 1 : -1)), eJ = JJ.bidiSpans(UJ), cJ = JJ.visualLineSide(UJ, !ZJ)
        }
        if (qJ) {
          if (!qJ(jJ)) return AJ
        } else {
          if (!FJ) return cJ;
          qJ = FJ(jJ)
        }
        AJ = cJ
      }
    }

    function uZ(JJ, cJ, ZJ) {
      for (;;) {
        let FJ = 0;
        for (let UJ of JJ) UJ.between(cJ - 1, cJ + 1, ((JJ, UJ, eJ) => {
          if (cJ > JJ && cJ < UJ) {
            let eJ = FJ || ZJ || (cJ - JJ < UJ - cJ ? -1 : 1);
            cJ = eJ < 0 ? JJ : UJ, FJ = eJ
          }
        }));
        if (!FJ) return cJ
      }
    }

    function iZ(JJ, cJ) {
      let ZJ = null;
      for (let UJ = 0; UJ < cJ.ws.length; UJ++) {
        let eJ = cJ.ws[UJ],
          XJ = null;
        if (eJ.empty) {
          let cJ = uZ(JJ, eJ.from, 0);
          cJ != eJ.from && (XJ = FJ.m.cursor(cJ, -1))
        } else {
          let cJ = uZ(JJ, eJ.from, -1),
            ZJ = uZ(JJ, eJ.to, 1);
          cJ == eJ.from && ZJ == eJ.to || (XJ = FJ.m.range(eJ.from == eJ.anchor ? cJ : ZJ, eJ.from == eJ.head ? cJ : ZJ))
        }
        XJ && (ZJ || (ZJ = cJ.ws.slice()), ZJ[UJ] = XJ)
      }
      return ZJ ? FJ.m.create(ZJ, cJ.mainIndex) : cJ
    }

    function RZ(JJ, cJ, ZJ) {
      let UJ = uZ(JJ.state.facet(FZ).map((cJ => cJ(JJ))), ZJ.from, cJ.head > ZJ.from ? -1 : 1);
      return UJ == ZJ.from ? ZJ : FJ.m.cursor(UJ, UJ < ZJ.from ? 1 : -1)
    }
    class LZ {
      constructor(JJ, cJ) {
        this.pos = JJ, this.assoc = cJ
      }
    }

    function aZ(JJ, cJ, ZJ, UJ) {
      let eJ, XJ = JJ.contentDOM.getBoundingClientRect(),
        AJ = XJ.top + JJ.viewState.paddingTop,
        {
          x: qJ,
          y: jJ
        } = cJ,
        YJ = jJ - AJ;
      for (;;) {
        if (YJ < 0) return new LZ(0, 1);
        if (YJ > JJ.viewState.docHeight) return new LZ(JJ.state.doc.length, -1);
        if (eJ = JJ.elementAtHeight(YJ), null == UJ) break;
        if (eJ.type == wJ.Text) {
          if (UJ < 0 ? eJ.to < JJ.viewport.from : eJ.from > JJ.viewport.to) break;
          let cJ = JJ.docView.coordsAt(UJ < 0 ? eJ.from : eJ.to, UJ > 0 ? -1 : 1);
          if (cJ && (UJ < 0 ? cJ.top <= YJ + AJ : cJ.bottom >= YJ + AJ)) break
        }
        let cJ = JJ.viewState.heightOracle.textHeight / 2;
        YJ = UJ > 0 ? eJ.bottom + cJ : eJ.top - cJ
      }
      if (JJ.viewport.from >= eJ.to || JJ.viewport.to <= eJ.from) {
        if (ZJ) return null;
        if (eJ.type == wJ.Text) {
          let cJ = function(JJ, cJ, ZJ, UJ, eJ) {
            let XJ = Math.round((UJ - cJ.left) * JJ.defaultCharacterWidth);
            if (JJ.lineWrapping && ZJ.height > 1.5 * JJ.defaultLineHeight) {
              let cJ = JJ.viewState.heightOracle.textHeight;
              XJ += Math.floor((eJ - ZJ.top - .5 * (JJ.defaultLineHeight - cJ)) / cJ) * JJ.viewState.heightOracle.lineLength
            }
            let AJ = JJ.state.sliceDoc(ZJ.from, ZJ.to);
            return ZJ.from + (0, FJ._)(AJ, XJ, JJ.state.tabSize)
          }(JJ, XJ, eJ, qJ, jJ);
          return new LZ(cJ, cJ == eJ.from ? 1 : -1)
        }
      }
      if (eJ.type != wJ.Text) return YJ < (eJ.top + eJ.bottom) / 2 ? new LZ(eJ.from, 1) : new LZ(eJ.to, -1);
      let hJ = JJ.docView.lineAt(eJ.from, 2);
      return hJ && hJ.length == eJ.length || (hJ = JJ.docView.lineAt(eJ.from, -2)), new BZ(JJ, qJ, jJ, JJ.textDirectionAt(eJ.from)).scanTile(hJ, eJ.from)
    }
    class BZ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.view = JJ, this.x = cJ, this.y = ZJ, this.baseDir = FJ, this.line = null, this.spans = null
      }
      bidiSpansAt(JJ) {
        return (!this.line || this.line.from > JJ || this.line.to < JJ) && (this.line = this.view.state.doc.lineAt(JJ), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(JJ, cJ) {
        let {
          line: ZJ,
          spans: FJ
        } = this.bidiSpansAt(JJ);
        return FJ[vc.find(FJ, JJ - ZJ.from, -1, cJ)].level == this.baseDir
      }
      dirAt(JJ, cJ) {
        let {
          line: ZJ,
          spans: FJ
        } = this.bidiSpansAt(JJ);
        return FJ[vc.find(FJ, JJ - ZJ.from, -1, cJ)].dir
      }
      bidiIn(JJ, cJ) {
        let {
          spans: ZJ,
          line: FJ
        } = this.bidiSpansAt(JJ);
        return ZJ.length > 1 || ZJ.length && (ZJ[0].level != this.baseDir || ZJ[0].to + FJ.from < cJ)
      }
      scan(JJ, cJ) {
        let ZJ, FJ, UJ, eJ = 0,
          XJ = JJ.length - 1,
          AJ = new Set,
          qJ = this.bidiIn(JJ[0], JJ[XJ]),
          jJ = -1,
          YJ = 1e9;
        JJ: for (; eJ < XJ;) {
          let hJ = XJ - eJ,
            DJ = eJ + XJ >> 1;
          cJ: if (AJ.has(DJ)) {
            let JJ = eJ + Math.floor(Math.random() * hJ);
            for (let cJ = 0; cJ < hJ; cJ++) {
              if (!AJ.has(JJ)) {
                DJ = JJ;
                break cJ
              }
              JJ++, JJ == XJ && (JJ = eJ)
            }
            break JJ
          } AJ.add(DJ);
          let sJ = cJ(DJ);
          if (sJ)
            for (let cJ = 0; cJ < sJ.length; cJ++) {
              let AJ = sJ[cJ],
                hJ = 0;
              if (!(0 == AJ.width && sJ.length > 1)) {
                if (AJ.bottom < this.y)(!ZJ || ZJ.bottom < AJ.bottom) && (ZJ = AJ), hJ = 1;
                else if (AJ.top > this.y)(!FJ || FJ.top > AJ.top) && (FJ = AJ), hJ = -1;
                else {
                  let JJ = AJ.left > this.x ? this.x - AJ.left : AJ.right < this.x ? this.x - AJ.right : 0,
                    cJ = Math.abs(JJ);
                  cJ < YJ && (jJ = DJ, YJ = cJ, UJ = AJ), JJ && (hJ = JJ < 0 == (this.baseDir == jc.LTR) ? -1 : 1)
                } - 1 != hJ || qJ && !this.baseDirAt(JJ[DJ], 1) ? 1 != hJ || qJ && !this.baseDirAt(JJ[DJ + 1], -1) || (eJ = DJ + 1) : XJ = DJ
              }
            }
        }
        if (!UJ) {
          let UJ = ZJ && (!FJ || this.y - ZJ.bottom < FJ.top - this.y) ? ZJ : FJ;
          return this.y = (UJ.top + UJ.bottom) / 2, this.scan(JJ, cJ)
        }
        if (YJ) {
          if (ZJ && ZJ.bottom > UJ.top) return this.y = ZJ.bottom - 1, this.scan(JJ, cJ);
          if (FJ && FJ.top < UJ.bottom) return this.y = FJ.top + 1, this.scan(JJ, cJ)
        }
        let hJ = (qJ ? this.dirAt(JJ[jJ], 1) : this.baseDir) == jc.LTR;
        return {
          i: jJ,
          after: this.x > (UJ.left + UJ.right) / 2 == hJ
        }
      }
      scanText(JJ, cJ) {
        let ZJ = [];
        for (let eJ = 0; eJ < JJ.length; eJ = (0, FJ.X)(JJ.text, eJ)) ZJ.push(cJ + eJ);
        ZJ.push(cJ + JJ.length);
        let UJ = this.scan(ZJ, (FJ => {
          let UJ = ZJ[FJ] - cJ,
            eJ = ZJ[FJ + 1] - cJ;
          return Fc(JJ.dom, UJ, eJ).getClientRects()
        }));
        return UJ.after ? new LZ(ZJ[UJ.i + 1], -1) : new LZ(ZJ[UJ.i], 1)
      }
      scanTile(JJ, cJ) {
        if (!JJ.length) return new LZ(cJ, 1);
        if (1 == JJ.children.length) {
          let ZJ = JJ.children[0];
          if (ZJ.isText()) return this.scanText(ZJ, cJ);
          if (ZJ.isComposite()) return this.scanTile(ZJ, cJ)
        }
        let ZJ = [cJ];
        for (let XJ = 0, AJ = cJ; XJ < JJ.children.length; XJ++) ZJ.push(AJ += JJ.children[XJ].length);
        let FJ = this.scan(ZJ, (cJ => {
            let ZJ = JJ.children[cJ];
            return 48 & ZJ.flags ? null : (1 == ZJ.dom.nodeType ? ZJ.dom : Fc(ZJ.dom, 0, ZJ.length)).getClientRects()
          })),
          UJ = JJ.children[FJ.i],
          eJ = ZJ[FJ.i];
        return UJ.isText() ? this.scanText(UJ, eJ) : UJ.isComposite() ? this.scanTile(UJ, eJ) : FJ.after ? new LZ(ZJ[FJ.i + 1], -1) : new LZ(eJ, 1)
      }
    }
    const tZ = "\uffff";
    class oZ {
      constructor(JJ, cJ) {
        this.points = JJ, this.view = cJ, this.text = "", this.lineSeparator = cJ.state.facet(FJ.o.lineSeparator)
      }
      append(JJ) {
        this.text += JJ
      }
      lineBreak() {
        this.text += tZ
      }
      readRange(JJ, cJ) {
        if (!JJ) return this;
        let ZJ = JJ.parentNode;
        for (let FJ = JJ;;) {
          this.findPointBefore(ZJ, FJ);
          let JJ = this.text.length;
          this.readNode(FJ);
          let UJ = DZ.get(FJ),
            eJ = FJ.nextSibling;
          if (eJ == cJ) {
            (null === UJ || void 0 === UJ ? void 0 : UJ.breakAfter) && !eJ && ZJ != this.view.contentDOM && this.lineBreak();
            break
          }
          let XJ = DZ.get(eJ);
          (UJ && XJ ? UJ.breakAfter : (UJ ? UJ.breakAfter : iJ(FJ)) || iJ(eJ) && ("BR" != FJ.nodeName || (null === UJ || void 0 === UJ ? void 0 : UJ.isWidget())) && this.text.length > JJ) && !JF(eJ, cJ) && this.lineBreak(), FJ = eJ
        }
        return this.findPointBefore(ZJ, cJ), this
      }
      readTextNode(JJ) {
        let cJ = JJ.nodeValue;
        for (let ZJ of this.points) ZJ.node == JJ && (ZJ.pos = this.text.length + Math.min(ZJ.offset, cJ.length));
        for (let ZJ = 0, FJ = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let UJ, eJ = -1,
            XJ = 1;
          if (this.lineSeparator ? (eJ = cJ.indexOf(this.lineSeparator, ZJ), XJ = this.lineSeparator.length) : (UJ = FJ.exec(cJ)) && (eJ = UJ.index, XJ = UJ[0].length), this.append(cJ.slice(ZJ, eJ < 0 ? cJ.length : eJ)), eJ < 0) break;
          if (this.lineBreak(), XJ > 1)
            for (let cJ of this.points) cJ.node == JJ && cJ.pos > this.text.length && (cJ.pos -= XJ - 1);
          ZJ = eJ + XJ
        }
      }
      readNode(JJ) {
        let cJ = DZ.get(JJ),
          ZJ = cJ && cJ.overrideDOMText;
        if (null != ZJ) {
          this.findPointInside(JJ, ZJ.length);
          for (let JJ = ZJ.iter(); !JJ.next().done;) JJ.lineBreak ? this.lineBreak() : this.append(JJ.value)
        } else 3 == JJ.nodeType ? this.readTextNode(JJ) : "BR" == JJ.nodeName ? JJ.nextSibling && this.lineBreak() : 1 == JJ.nodeType && this.readRange(JJ.firstChild, null)
      }
      findPointBefore(JJ, cJ) {
        for (let ZJ of this.points) ZJ.node == JJ && JJ.childNodes[ZJ.offset] == cJ && (ZJ.pos = this.text.length)
      }
      findPointInside(JJ, cJ) {
        for (let ZJ of this.points)(3 == JJ.nodeType ? ZJ.node == JJ : JJ.contains(ZJ.node)) && (ZJ.pos = this.text.length + (lZ(JJ, ZJ.node, ZJ.offset) ? cJ : 0))
      }
    }

    function lZ(JJ, cJ, ZJ) {
      for (;;) {
        if (!cJ || ZJ < LJ(cJ)) return !1;
        if (cJ == JJ) return !0;
        ZJ = uJ(cJ) + 1, cJ = cJ.parentNode
      }
    }

    function JF(JJ, cJ) {
      let ZJ;
      for (; JJ != cJ && JJ; JJ = JJ.nextSibling) {
        let cJ = DZ.get(JJ);
        if (!(null === cJ || void 0 === cJ ? void 0 : cJ.isWidget())) return !1;
        cJ && (ZJ || (ZJ = [])).push(cJ)
      }
      if (ZJ)
        for (let FJ of ZJ) {
          let JJ = FJ.overrideDOMText;
          if (null === JJ || void 0 === JJ ? void 0 : JJ.length) return !1
        }
      return !0
    }
    class cF {
      constructor(JJ, cJ) {
        this.node = JJ, this.offset = cJ, this.pos = -1
      }
    }
    class ZF {
      constructor(JJ, cJ, ZJ, UJ) {
        this.typeOver = UJ, this.bounds = null, this.text = "", this.domChanged = cJ > -1;
        let {
          impreciseHead: eJ,
          impreciseAnchor: XJ
        } = JJ.docView, AJ = JJ.state.selection;
        if (JJ.state.readOnly && cJ > -1) this.newSel = null;
        else if (cJ > -1 && (this.bounds = FF(JJ.docView.tile, cJ, ZJ, 0))) {
          let cJ = eJ || XJ ? [] : function(JJ) {
              let cJ = [];
              if (JJ.root.activeElement != JJ.contentDOM) return cJ;
              let {
                anchorNode: ZJ,
                anchorOffset: FJ,
                focusNode: UJ,
                focusOffset: eJ
              } = JJ.observer.selectionRange;
              ZJ && (cJ.push(new cF(ZJ, FJ)), UJ == ZJ && eJ == FJ || cJ.push(new cF(UJ, eJ)));
              return cJ
            }(JJ),
            ZJ = new oZ(cJ, JJ);
          ZJ.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = ZJ.text, this.newSel = function(JJ, cJ) {
            if (0 == JJ.length) return null;
            let ZJ = JJ[0].pos,
              UJ = 2 == JJ.length ? JJ[1].pos : ZJ;
            return ZJ > -1 && UJ > -1 ? FJ.m.single(ZJ + cJ, UJ + cJ) : null
          }(cJ, this.bounds.from)
        } else {
          let cJ = JJ.observer.selectionRange,
            ZJ = eJ && eJ.node == cJ.focusNode && eJ.offset == cJ.focusOffset || !NJ(JJ.contentDOM, cJ.focusNode) ? AJ.main.head : JJ.docView.posFromDOM(cJ.focusNode, cJ.focusOffset),
            UJ = XJ && XJ.node == cJ.anchorNode && XJ.offset == cJ.anchorOffset || !NJ(JJ.contentDOM, cJ.anchorNode) ? AJ.main.anchor : JJ.docView.posFromDOM(cJ.anchorNode, cJ.anchorOffset),
            qJ = JJ.viewport;
          if ((VJ.ios || VJ.chrome) && AJ.main.empty && ZJ != UJ && (qJ.from > 0 || qJ.to < JJ.state.doc.length)) {
            let cJ = Math.min(ZJ, UJ),
              FJ = Math.max(ZJ, UJ),
              eJ = qJ.from - cJ,
              XJ = qJ.to - FJ;
            0 != eJ && 1 != eJ && 0 != cJ || 0 != XJ && -1 != XJ && FJ != JJ.state.doc.length || (ZJ = 0, UJ = JJ.state.doc.length)
          }
          if (JJ.inputState.composing > -1 && AJ.ws.length > 1) this.newSel = AJ.replaceRange(FJ.m.range(UJ, ZJ));
          else if (JJ.lineWrapping && UJ == ZJ && (!AJ.main.empty || AJ.main.head != ZJ) && JJ.inputState.lastTouchTime > Date.now() - 100) {
            let cJ = JJ.coordsAtPos(ZJ, -1),
              UJ = 0;
            cJ && (UJ = JJ.inputState.lastTouchY <= cJ.bottom ? -1 : 1), this.newSel = FJ.m.create([FJ.m.cursor(ZJ, UJ)])
          } else this.newSel = FJ.m.single(UJ, ZJ)
        }
      }
    }

    function FF(JJ, cJ, ZJ, FJ) {
      if (JJ.isComposite()) {
        let UJ = -1,
          eJ = -1,
          XJ = -1,
          AJ = -1;
        for (let qJ = 0, jJ = FJ, YJ = FJ; qJ < JJ.children.length; qJ++) {
          let FJ = JJ.children[qJ],
            hJ = jJ + FJ.length;
          if (jJ < cJ && hJ > ZJ) return FF(FJ, cJ, ZJ, jJ);
          if (hJ >= cJ && -1 == UJ && (UJ = qJ, eJ = jJ), jJ > ZJ && FJ.dom.parentNode == JJ.dom) {
            XJ = qJ, AJ = YJ;
            break
          }
          YJ = hJ, jJ = hJ + FJ.breakAfter
        }
        return {
          from: eJ,
          to: AJ < 0 ? FJ + JJ.length : AJ,
          startDOM: (UJ ? JJ.children[UJ - 1].dom.nextSibling : null) || JJ.dom.firstChild,
          endDOM: XJ < JJ.children.length && XJ >= 0 ? JJ.children[XJ].dom : null
        }
      }
      return JJ.isText() ? {
        from: FJ,
        to: FJ + JJ.length,
        startDOM: JJ.dom,
        endDOM: JJ.dom.nextSibling
      } : null
    }

    function UF(JJ, cJ) {
      let ZJ, {
          newSel: UJ
        } = cJ,
        {
          state: eJ
        } = JJ,
        XJ = eJ.selection.main,
        AJ = JJ.inputState.lastKeyTime > Date.now() - 100 ? JJ.inputState.lastKeyCode : -1;
      if (cJ.bounds) {
        let {
          from: JJ,
          to: UJ
        } = cJ.bounds, qJ = XJ.from, jJ = null;
        (8 === AJ || VJ.android && cJ.text.length < UJ - JJ) && (qJ = XJ.to, jJ = "end");
        let YJ, hJ, DJ = eJ.doc.sliceString(JJ, UJ, tZ);
        !XJ.empty && XJ.from >= JJ && XJ.to <= UJ && (cJ.typeOver || DJ != cJ.text) && DJ.slice(0, XJ.from - JJ) == cJ.text.slice(0, XJ.from - JJ) && DJ.slice(XJ.to - JJ) == cJ.text.slice(YJ = cJ.text.length - (DJ.length - (XJ.to - JJ))) ? ZJ = {
          from: XJ.from,
          to: XJ.to,
          insert: FJ.F.of(cJ.text.slice(XJ.from - JJ, YJ).split(tZ))
        } : (hJ = XF(DJ, cJ.text, qJ - JJ, jJ)) && (VJ.chrome && 13 == AJ && hJ.toB == hJ.from + 2 && cJ.text.slice(hJ.from, hJ.toB) == tZ + tZ && hJ.toB--, ZJ = {
          from: JJ + hJ.from,
          to: JJ + hJ.toA,
          insert: FJ.F.of(cJ.text.slice(hJ.from, hJ.toB).split(tZ))
        })
      } else UJ && (!JJ.hasFocus && eJ.facet(Rc) || AF(UJ, XJ)) && (UJ = null);
      if (!ZJ && !UJ) return !1;
      if ((VJ.mac || VJ.android) && ZJ && ZJ.from == ZJ.to && ZJ.from == XJ.head - 1 && /^\. ?$/.test(ZJ.insert.toString()) && "off" == JJ.contentDOM.getAttribute("autocorrect") ? (UJ && 2 == ZJ.insert.length && (UJ = FJ.m.single(UJ.main.anchor - 1, UJ.main.head - 1)), ZJ = {
          from: ZJ.from,
          to: ZJ.to,
          insert: FJ.F.of([ZJ.insert.toString().replace(".", " ")])
        }) : eJ.doc.lineAt(XJ.from).to < XJ.to && JJ.docView.lineHasWidget(XJ.to) && JJ.inputState.insertingTextAt > Date.now() - 50 ? ZJ = {
          from: XJ.from,
          to: XJ.to,
          insert: eJ.toText(JJ.inputState.insertingText)
        } : VJ.chrome && ZJ && ZJ.from == ZJ.to && ZJ.from == XJ.head && "\n " == ZJ.insert.toString() && JJ.lineWrapping && (UJ && (UJ = FJ.m.single(UJ.main.anchor - 1, UJ.main.head - 1)), ZJ = {
          from: XJ.from,
          to: XJ.to,
          insert: FJ.F.of([" "])
        }), ZJ) return eF(JJ, ZJ, UJ, AJ);
      if (UJ && !AF(UJ, XJ)) {
        let cJ = !1,
          ZJ = "select";
        return JJ.inputState.lastSelectionTime > Date.now() - 50 && ("select" == JJ.inputState.lastSelectionOrigin && (cJ = !0), ZJ = JJ.inputState.lastSelectionOrigin, "select.pointer" == ZJ && (UJ = iZ(eJ.facet(FZ).map((cJ => cJ(JJ))), UJ))), JJ.dispatch({
          selection: UJ,
          scrollIntoView: cJ,
          userEvent: ZJ
        }), !0
      }
      return !1
    }

    function eF(JJ, cJ, ZJ) {
      let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (VJ.ios && JJ.inputState.flushIOSKey(cJ)) return !0;
      let eJ = JJ.state.selection.main;
      if (VJ.android && (cJ.to == eJ.to && (cJ.from == eJ.from || cJ.from == eJ.from - 1 && " " == JJ.state.sliceDoc(cJ.from, eJ.from)) && 1 == cJ.insert.length && 2 == cJ.insert.lines && Uc(JJ.contentDOM, "Enter", 13) || (cJ.from == eJ.from - 1 && cJ.to == eJ.to && 0 == cJ.insert.length || 8 == UJ && cJ.insert.length < cJ.to - cJ.from && cJ.to > eJ.head) && Uc(JJ.contentDOM, "Backspace", 8) || cJ.from == eJ.from && cJ.to == eJ.to + 1 && 0 == cJ.insert.length && Uc(JJ.contentDOM, "Delete", 46))) return !0;
      let XJ, AJ = cJ.insert.toString();
      JJ.inputState.composing >= 0 && JJ.inputState.composing++;
      let qJ = () => XJ || (XJ = function(JJ, cJ, ZJ) {
        let UJ, eJ = JJ.state,
          XJ = eJ.selection.main,
          AJ = -1;
        if (cJ.from == cJ.to && cJ.from < XJ.from || cJ.from > XJ.to) {
          let ZJ = cJ.from < XJ.from ? -1 : 1,
            FJ = ZJ < 0 ? XJ.from : XJ.to,
            UJ = uZ(eJ.facet(FZ).map((cJ => cJ(JJ))), FJ, ZJ);
          cJ.from == UJ && (AJ = UJ)
        }
        if (AJ > -1) UJ = {
          changes: cJ,
          selection: FJ.m.cursor(cJ.from + cJ.insert.length, -1)
        };
        else if (cJ.from >= XJ.from && cJ.to <= XJ.to && cJ.to - cJ.from >= (XJ.to - XJ.from) / 3 && (!ZJ || ZJ.main.empty && ZJ.main.from == cJ.from + cJ.insert.length) && JJ.inputState.composing < 0) {
          let ZJ = XJ.from < cJ.from ? eJ.sliceDoc(XJ.from, cJ.from) : "",
            FJ = XJ.to > cJ.to ? eJ.sliceDoc(cJ.to, XJ.to) : "";
          UJ = eJ.replaceSelection(JJ.state.toText(ZJ + cJ.insert.sliceString(0, void 0, JJ.state.lineBreak) + FJ))
        } else {
          let AJ = eJ.changes(cJ),
            qJ = ZJ && ZJ.main.to <= AJ.newLength ? ZJ.main : void 0;
          if (eJ.selection.ws.length > 1 && (JJ.inputState.composing >= 0 || JJ.inputState.compositionPendingChange) && cJ.to <= XJ.to + 10 && cJ.to >= XJ.to - 10) {
            let jJ, YJ = JJ.state.sliceDoc(cJ.from, cJ.to),
              hJ = ZJ && dZ(JJ, ZJ.main.head);
            if (hJ) {
              let JJ = cJ.insert.length - (cJ.to - cJ.from);
              jJ = {
                from: hJ.from,
                to: hJ.to - JJ
              }
            } else jJ = JJ.state.doc.lineAt(XJ.head);
            let DJ = XJ.to - cJ.to;
            UJ = eJ.changeByRange((ZJ => {
              if (ZJ.from == XJ.from && ZJ.to == XJ.to) return {
                changes: AJ,
                range: qJ || ZJ.map(AJ)
              };
              let UJ = ZJ.to - DJ,
                hJ = UJ - YJ.length;
              if (JJ.state.sliceDoc(hJ, UJ) != YJ || UJ >= jJ.from && hJ <= jJ.to) return {
                range: ZJ
              };
              let sJ = eJ.changes({
                  from: hJ,
                  to: UJ,
                  insert: cJ.insert
                }),
                nJ = ZJ.to - XJ.to;
              return {
                changes: sJ,
                range: qJ ? FJ.m.range(Math.max(0, qJ.anchor + nJ), Math.max(0, qJ.head + nJ)) : ZJ.map(sJ)
              }
            }))
          } else UJ = {
            changes: AJ,
            selection: qJ && eJ.selection.replaceRange(qJ)
          }
        }
        let qJ = "input.type";
        (JJ.composing || JJ.inputState.compositionPendingChange && JJ.inputState.compositionEndedAt > Date.now() - 50) && (JJ.inputState.compositionPendingChange = !1, qJ += ".compose", JJ.inputState.compositionFirstChange && (qJ += ".start", JJ.inputState.compositionFirstChange = !1));
        return eJ.update(UJ, {
          userEvent: qJ,
          scrollIntoView: !0
        })
      }(JJ, cJ, ZJ));
      return JJ.state.facet(Pc).some((ZJ => ZJ(JJ, cJ.from, cJ.to, AJ, qJ))) || JJ.dispatch(qJ()), !0
    }

    function XF(JJ, cJ, ZJ, FJ) {
      let UJ = Math.min(JJ.length, cJ.length),
        eJ = 0;
      for (; eJ < UJ && JJ.charCodeAt(eJ) == cJ.charCodeAt(eJ);) eJ++;
      if (eJ == UJ && JJ.length == cJ.length) return null;
      let XJ = JJ.length,
        AJ = cJ.length;
      for (; XJ > 0 && AJ > 0 && JJ.charCodeAt(XJ - 1) == cJ.charCodeAt(AJ - 1);) XJ--, AJ--;
      if ("end" == FJ) {
        ZJ -= XJ + Math.max(0, eJ - Math.min(XJ, AJ)) - eJ
      }
      if (XJ < eJ && JJ.length < cJ.length) {
        eJ -= ZJ <= eJ && ZJ >= XJ ? eJ - ZJ : 0, AJ = eJ + (AJ - XJ), XJ = eJ
      } else if (AJ < eJ) {
        eJ -= ZJ <= eJ && ZJ >= AJ ? eJ - ZJ : 0, XJ = eJ + (XJ - AJ), AJ = eJ
      }
      return {
        from: eJ,
        toA: XJ,
        toB: AJ
      }
    }

    function AF(JJ, cJ) {
      return cJ.head == JJ.main.head && cJ.anchor == JJ.main.anchor
    }
    class qF {
      setSelectionOrigin(JJ) {
        this.lastSelectionOrigin = JJ, this.lastSelectionTime = Date.now()
      }
      constructor(JJ) {
        this.view = JJ, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = JJ.hasFocus, VJ.safari && JJ.contentDOM.addEventListener("input", (() => null)), VJ.gecko && function(JJ) {
          gF.has(JJ) || (gF.add(JJ), JJ.addEventListener("copy", (() => {})), JJ.addEventListener("cut", (() => {})))
        }(JJ.contentDOM.ownerDocument)
      }
      handleEvent(JJ) {
        (function(JJ, cJ) {
          if (!cJ.bubbles) return !0;
          if (cJ.defaultPrevented) return !1;
          for (let ZJ, FJ = cJ.target; FJ != JJ.contentDOM; FJ = FJ.parentNode)
            if (!FJ || 11 == FJ.nodeType || (ZJ = DZ.get(FJ)) && ZJ.isWidget() && !ZJ.isHidden && ZJ.widget.ignoreEvent(cJ)) return !1;
          return !0
        })(this.view, JJ) && !this.ignoreDuringComposition(JJ) && ("keydown" == JJ.type && this.keydown(JJ) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(JJ.type, JJ))) : this.runHandlers(JJ.type, JJ)))
      }
      runHandlers(JJ, cJ) {
        let ZJ = this.handlers[JJ];
        if (ZJ) {
          for (let JJ of ZJ.observers) JJ(this.view, cJ);
          for (let JJ of ZJ.handlers) {
            if (cJ.defaultPrevented) break;
            if (JJ(this.view, cJ)) {
              cJ.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(JJ) {
        let cJ = YF(JJ),
          ZJ = this.handlers,
          FJ = this.view.contentDOM;
        for (let UJ in cJ)
          if ("scroll" != UJ) {
            let JJ = !cJ[UJ].handlers.length,
              eJ = ZJ[UJ];
            eJ && JJ != !eJ.handlers.length && (FJ.removeEventListener(UJ, this.handleEvent), eJ = null), eJ || FJ.addEventListener(UJ, this.handleEvent, {
              passive: JJ
            })
          } for (let UJ in ZJ) "scroll" == UJ || cJ[UJ] || FJ.removeEventListener(UJ, this.handleEvent);
        this.handlers = cJ
      }
      keydown(JJ) {
        if (this.lastKeyCode = JJ.keyCode, this.lastKeyTime = Date.now(), 9 == JJ.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != JJ.keyCode && sF.indexOf(JJ.keyCode) < 0 && (this.tabFocusMode = -1), VJ.android && VJ.chrome && !JJ.synthetic && (13 == JJ.keyCode || 8 == JJ.keyCode)) return this.view.observer.delayAndroidKey(JJ.key, JJ.keyCode), !0;
        let cJ;
        return !VJ.ios || JJ.synthetic || JJ.altKey || JJ.metaKey || JJ.shiftKey || !((cJ = hF.find((cJ => cJ.keyCode == JJ.keyCode))) && !JJ.ctrlKey || DF.indexOf(JJ.key) > -1 && JJ.ctrlKey) ? (229 != JJ.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = cJ || JJ, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(JJ) {
        let cJ = this.pendingIOSKey;
        return !!cJ && (!("Enter" == cJ.key && JJ && JJ.from < JJ.to && /^\S+$/.test(JJ.insert.toString())) && (this.pendingIOSKey = void 0, Uc(this.view.contentDOM, cJ.key, cJ.keyCode, cJ instanceof KeyboardEvent ? cJ : void 0)))
      }
      ignoreDuringComposition(JJ) {
        return !(!/^key/.test(JJ.type) || JJ.synthetic) && (this.composing > 0 || !!(VJ.safari && !VJ.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(JJ) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = JJ
      }
      update(JJ) {
        this.view.observer.update(JJ), this.mouseSelection && this.mouseSelection.update(JJ), this.draggedContent && JJ.docChanged && (this.draggedContent = this.draggedContent.map(JJ.changes)), JJ.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function jF(JJ, cJ) {
      return (ZJ, FJ) => {
        try {
          return cJ.call(JJ, FJ, ZJ)
        } catch (UJ) {
          ic(ZJ.state, UJ)
        }
      }
    }

    function YF(JJ) {
      let cJ = Object.create(null);

      function ZJ(JJ) {
        return cJ[JJ] || (cJ[JJ] = {
          observers: [],
          handlers: []
        })
      }
      for (let FJ of JJ) {
        let JJ = FJ.spec,
          cJ = JJ && JJ.plugin.domEventHandlers,
          UJ = JJ && JJ.plugin.domEventObservers;
        if (cJ)
          for (let eJ in cJ) {
            let JJ = cJ[eJ];
            JJ && ZJ(eJ).handlers.push(jF(FJ.value, JJ))
          }
        if (UJ)
          for (let eJ in UJ) {
            let JJ = UJ[eJ];
            JJ && ZJ(eJ).observers.push(jF(FJ.value, JJ))
          }
      }
      for (let FJ in fF) ZJ(FJ).handlers.push(fF[FJ]);
      for (let FJ in xF) ZJ(FJ).observers.push(xF[FJ]);
      return cJ
    }
    const hF = [{
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
      DF = "dthko",
      sF = [16, 17, 18, 20, 91, 92, 224, 225];

    function nF(JJ) {
      return .7 * Math.max(0, JJ) + 8
    }
    class GF {
      constructor(JJ, cJ, ZJ, UJ) {
        this.view = JJ, this.startEvent = cJ, this.style = ZJ, this.mustSelect = UJ, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = cJ, this.scrollParents = oJ(JJ.contentDOM), this.atoms = JJ.state.facet(FZ).map((cJ => cJ(JJ)));
        let eJ = JJ.contentDOM.ownerDocument;
        eJ.addEventListener("mousemove", this.move = this.move.bind(this)), eJ.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = cJ.shiftKey, this.multiple = JJ.state.facet(FJ.o.allowMultipleSelections) && function(JJ, cJ) {
          let ZJ = JJ.state.facet(bc);
          return ZJ.length ? ZJ[0](cJ) : VJ.mac ? cJ.metaKey : cJ.ctrlKey
        }(JJ, cJ), this.dragging = !(! function(JJ, cJ) {
          let {
            main: ZJ
          } = JJ.state.selection;
          if (ZJ.empty) return !1;
          let FJ = zJ(JJ.root);
          if (!FJ || 0 == FJ.rangeCount) return !0;
          let UJ = FJ.getRangeAt(0).getClientRects();
          for (let eJ = 0; eJ < UJ.length; eJ++) {
            let JJ = UJ[eJ];
            if (JJ.left <= cJ.clientX && JJ.right >= cJ.clientX && JJ.top <= cJ.clientY && JJ.bottom >= cJ.clientY) return !0
          }
          return !1
        }(JJ, cJ) || 1 != SF(cJ)) && null
      }
      start(JJ) {
        !1 === this.dragging && this.select(JJ)
      }
      move(JJ) {
        if (0 == JJ.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (cJ = this.startEvent, ZJ = JJ, Math.max(Math.abs(cJ.clientX - ZJ.clientX), Math.abs(cJ.clientY - ZJ.clientY)) < 10)) return;
        var cJ, ZJ;
        this.select(this.lastEvent = JJ);
        let FJ = 0,
          UJ = 0,
          eJ = 0,
          XJ = 0,
          AJ = this.view.win.innerWidth,
          qJ = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: eJ,
          right: AJ
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: XJ,
          bottom: qJ
        } = this.scrollParents.y.getBoundingClientRect());
        let jJ = AZ(this.view);
        JJ.clientX - jJ.left <= eJ + 6 ? FJ = -nF(eJ - JJ.clientX) : JJ.clientX + jJ.right >= AJ - 6 && (FJ = nF(JJ.clientX - AJ)), JJ.clientY - jJ.top <= XJ + 6 ? UJ = -nF(XJ - JJ.clientY) : JJ.clientY + jJ.bottom >= qJ - 6 && (UJ = nF(JJ.clientY - qJ)), this.setScrollSpeed(FJ, UJ)
      }
      up(JJ) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || JJ.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let JJ = this.view.contentDOM.ownerDocument;
        JJ.removeEventListener("mousemove", this.move), JJ.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(JJ, cJ) {
        this.scrollSpeed = {
          x: JJ,
          y: cJ
        }, JJ || cJ ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: JJ,
          y: cJ
        } = this.scrollSpeed;
        JJ && this.scrollParents.x && (this.scrollParents.x.scrollLeft += JJ, JJ = 0), cJ && this.scrollParents.y && (this.scrollParents.y.scrollTop += cJ, cJ = 0), (JJ || cJ) && this.view.win.scrollBy(JJ, cJ), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(JJ) {
        let {
          view: cJ
        } = this, ZJ = iZ(this.atoms, this.style.get(JJ, this.extend, this.multiple));
        !this.mustSelect && ZJ.eq(cJ.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: ZJ,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(JJ) {
        JJ.transactions.some((JJ => JJ.isUserEvent("input.type"))) ? this.destroy() : this.style.update(JJ) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const fF = Object.create(null),
      xF = Object.create(null),
      rF = VJ.ie && VJ.ie_version < 15 || VJ.ios && VJ.webkit_version < 604;

    function vF(JJ, cJ, ZJ) {
      for (let FJ of JJ.facet(cJ)) ZJ = FJ(ZJ, JJ);
      return ZJ
    }

    function mF(JJ, cJ) {
      cJ = vF(JJ.state, pc, cJ);
      let ZJ, {
          state: UJ
        } = JJ,
        eJ = 1,
        XJ = UJ.toText(cJ),
        AJ = XJ.lines == UJ.selection.ws.length;
      if (null != MF && UJ.selection.ws.every((JJ => JJ.empty)) && MF == XJ.toString()) {
        let JJ = -1;
        ZJ = UJ.changeByRange((ZJ => {
          let qJ = UJ.doc.lineAt(ZJ.from);
          if (qJ.from == JJ) return {
            range: ZJ
          };
          JJ = qJ.from;
          let jJ = UJ.toText((AJ ? XJ.line(eJ++).text : cJ) + UJ.lineBreak);
          return {
            changes: {
              from: qJ.from,
              insert: jJ
            },
            range: FJ.m.cursor(ZJ.from + jJ.length)
          }
        }))
      } else ZJ = AJ ? UJ.changeByRange((JJ => {
        let cJ = XJ.line(eJ++);
        return {
          changes: {
            from: JJ.from,
            to: JJ.to,
            insert: cJ.text
          },
          range: FJ.m.cursor(JJ.from + cJ.length)
        }
      })) : UJ.replaceSelection(XJ);
      JJ.dispatch(ZJ, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function QF(JJ, cJ, ZJ, UJ) {
      if (1 == UJ) return FJ.m.cursor(cJ, ZJ);
      if (2 == UJ) return function(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          UJ = JJ.charCategorizer(cJ),
          eJ = JJ.doc.lineAt(cJ),
          XJ = cJ - eJ.from;
        if (0 == eJ.length) return FJ.m.cursor(cJ);
        0 == XJ ? ZJ = 1 : XJ == eJ.length && (ZJ = -1);
        let AJ = XJ,
          qJ = XJ;
        ZJ < 0 ? AJ = (0, FJ.X)(eJ.text, XJ, !1) : qJ = (0, FJ.X)(eJ.text, XJ);
        let jJ = UJ(eJ.text.slice(AJ, qJ));
        for (; AJ > 0;) {
          let JJ = (0, FJ.X)(eJ.text, AJ, !1);
          if (UJ(eJ.text.slice(JJ, AJ)) != jJ) break;
          AJ = JJ
        }
        for (; qJ < eJ.length;) {
          let JJ = (0, FJ.X)(eJ.text, qJ);
          if (UJ(eJ.text.slice(qJ, JJ)) != jJ) break;
          qJ = JJ
        }
        return FJ.m.range(AJ + eJ.from, qJ + eJ.from)
      }(JJ.state, cJ, ZJ);
      {
        let UJ = JJ.docView.lineAt(cJ, ZJ),
          eJ = JJ.state.doc.lineAt(UJ ? UJ.posAtEnd : cJ),
          XJ = UJ ? UJ.posAtStart : eJ.from,
          AJ = UJ ? UJ.posAtEnd : eJ.to;
        return AJ < JJ.state.doc.length && AJ == eJ.to && AJ++, FJ.m.range(XJ, AJ)
      }
    }
    xF.scroll = JJ => {
      JJ.inputState.lastScrollTop = JJ.scrollDOM.scrollTop, JJ.inputState.lastScrollLeft = JJ.scrollDOM.scrollLeft
    }, xF.wheel = xF.mousewheel = JJ => {
      JJ.inputState.lastWheelEvent = Date.now()
    }, fF.keydown = (JJ, cJ) => (JJ.inputState.setSelectionOrigin("select"), 27 == cJ.keyCode && 0 != JJ.inputState.tabFocusMode && (JJ.inputState.tabFocusMode = Date.now() + 2e3), !1), xF.touchstart = (JJ, cJ) => {
      let ZJ = JJ.inputState,
        FJ = cJ.targetTouches[0];
      ZJ.lastTouchTime = Date.now(), FJ && (ZJ.lastTouchX = FJ.clientX, ZJ.lastTouchY = FJ.clientY), ZJ.setSelectionOrigin("select.pointer")
    }, xF.touchmove = JJ => {
      JJ.inputState.setSelectionOrigin("select.pointer")
    }, fF.mousedown = (JJ, cJ) => {
      if (JJ.observer.flush(), JJ.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let ZJ = null;
      for (let FJ of JJ.state.facet(Wc))
        if (ZJ = FJ(JJ, cJ), ZJ) break;
      if (ZJ || 0 != cJ.button || (ZJ = function(JJ, cJ) {
          let ZJ = JJ.posAndSideAtCoords({
              x: cJ.clientX,
              y: cJ.clientY
            }, !1),
            UJ = SF(cJ),
            eJ = JJ.state.selection;
          return {
            update(JJ) {
              JJ.docChanged && (ZJ.pos = JJ.changes.mapPos(ZJ.pos), eJ = eJ.map(JJ.changes))
            },
            get(cJ, XJ, AJ) {
              let qJ, jJ = JJ.posAndSideAtCoords({
                  x: cJ.clientX,
                  y: cJ.clientY
                }, !1),
                YJ = QF(JJ, jJ.pos, jJ.assoc, UJ);
              if (ZJ.pos != jJ.pos && !XJ) {
                let cJ = QF(JJ, ZJ.pos, ZJ.assoc, UJ),
                  eJ = Math.min(cJ.from, YJ.from),
                  XJ = Math.max(cJ.to, YJ.to);
                YJ = eJ < YJ.from ? FJ.m.range(eJ, XJ, YJ.assoc) : FJ.m.range(XJ, eJ, YJ.assoc)
              }
              return XJ ? eJ.replaceRange(eJ.main.extend(YJ.from, YJ.to, YJ.assoc)) : AJ && 1 == UJ && eJ.ws.length > 1 && (qJ = function(JJ, cJ) {
                for (let ZJ = 0; ZJ < JJ.ws.length; ZJ++) {
                  let {
                    from: UJ,
                    to: eJ
                  } = JJ.ws[ZJ];
                  if (UJ <= cJ && eJ >= cJ) return FJ.m.create(JJ.ws.slice(0, ZJ).concat(JJ.ws.slice(ZJ + 1)), JJ.mainIndex == ZJ ? 0 : JJ.mainIndex - (JJ.mainIndex > ZJ ? 1 : 0))
                }
                return null
              }(eJ, jJ.pos)) ? qJ : AJ ? eJ.addRange(YJ) : FJ.m.create([YJ])
            }
          }
        }(JJ, cJ)), ZJ) {
        let FJ = !JJ.hasFocus;
        JJ.inputState.startMouseSelection(new GF(JJ, cJ, ZJ, FJ)), FJ && JJ.observer.ignore((() => {
          Zc(JJ.contentDOM);
          let cJ = JJ.root.activeElement;
          cJ && !cJ.contains(JJ.contentDOM) && cJ.blur()
        }));
        let UJ = JJ.inputState.mouseSelection;
        if (UJ) return UJ.start(cJ), !1 === UJ.dragging
      } else JJ.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const EF = VJ.ie && VJ.ie_version <= 11;
    let VF = null,
      KF = 0,
      yF = 0;

    function SF(JJ) {
      if (!EF) return JJ.detail;
      let cJ = VF,
        ZJ = yF;
      return VF = JJ, yF = Date.now(), KF = !cJ || ZJ > Date.now() - 400 && Math.abs(cJ.clientX - JJ.clientX) < 2 && Math.abs(cJ.clientY - JJ.clientY) < 2 ? (KF + 1) % 3 : 1
    }

    function IF(JJ, cJ, ZJ, FJ) {
      if (!(ZJ = vF(JJ.state, pc, ZJ))) return;
      let UJ = JJ.posAtCoords({
          x: cJ.clientX,
          y: cJ.clientY
        }, !1),
        {
          draggedContent: eJ
        } = JJ.inputState,
        XJ = FJ && eJ && function(JJ, cJ) {
          let ZJ = JJ.state.facet(wc);
          return ZJ.length ? ZJ[0](cJ) : VJ.mac ? !cJ.altKey : !cJ.ctrlKey
        }(JJ, cJ) ? {
          from: eJ.from,
          to: eJ.to
        } : null,
        AJ = {
          from: UJ,
          insert: ZJ
        },
        qJ = JJ.state.changes(XJ ? [XJ, AJ] : AJ);
      JJ.focus(), JJ.dispatch({
        changes: qJ,
        selection: {
          anchor: qJ.mapPos(UJ, -1),
          head: qJ.mapPos(UJ, 1)
        },
        userEvent: XJ ? "move.drop" : "input.drop"
      }), JJ.inputState.draggedContent = null
    }
    fF.dragstart = (JJ, cJ) => {
      let {
        selection: {
          main: ZJ
        }
      } = JJ.state;
      if (cJ.target.draggable) {
        let UJ = JJ.docView.tile.nearest(cJ.target);
        if (UJ && UJ.isWidget()) {
          let JJ = UJ.posAtStart,
            cJ = JJ + UJ.length;
          (JJ >= ZJ.to || cJ <= ZJ.from) && (ZJ = FJ.m.range(JJ, cJ))
        }
      }
      let {
        inputState: UJ
      } = JJ;
      return UJ.mouseSelection && (UJ.mouseSelection.dragging = !0), UJ.draggedContent = ZJ, cJ.dataTransfer && (cJ.dataTransfer.setData("Text", vF(JJ.state, dc, JJ.state.sliceDoc(ZJ.from, ZJ.to))), cJ.dataTransfer.effectAllowed = "copyMove"), !1
    }, fF.dragend = JJ => (JJ.inputState.draggedContent = null, !1), fF.drop = (JJ, cJ) => {
      if (!cJ.dataTransfer) return !1;
      if (JJ.state.readOnly) return !0;
      let ZJ = cJ.dataTransfer.files;
      if (ZJ && ZJ.length) {
        let FJ = Array(ZJ.length),
          UJ = 0,
          eJ = () => {
            ++UJ == ZJ.length && IF(JJ, cJ, FJ.filter((JJ => null != JJ)).join(JJ.state.lineBreak), !1)
          };
        for (let JJ = 0; JJ < ZJ.length; JJ++) {
          let cJ = new FileReader;
          cJ.onerror = eJ, cJ.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(cJ.result) || (FJ[JJ] = cJ.result), eJ()
          }, cJ.readAsText(ZJ[JJ])
        }
        return !0
      } {
        let ZJ = cJ.dataTransfer.getData("Text");
        if (ZJ) return IF(JJ, cJ, ZJ, !0), !0
      }
      return !1
    }, fF.paste = (JJ, cJ) => {
      if (JJ.state.readOnly) return !0;
      JJ.observer.flush();
      let ZJ = rF ? null : cJ.clipboardData;
      return ZJ ? (mF(JJ, ZJ.getData("text/plain") || ZJ.getData("text/uri-list")), !0) : (function(JJ) {
        let cJ = JJ.dom.parentNode;
        if (!cJ) return;
        let ZJ = cJ.appendChild(document.createElement("textarea"));
        ZJ.style.cssText = "position: fixed; left: -10000px; top: 10px", ZJ.focus(), setTimeout((() => {
          JJ.focus(), ZJ.remove(), mF(JJ, ZJ.value)
        }), 50)
      }(JJ), !1)
    };
    let MF = null;
    fF.copy = fF.cut = (JJ, cJ) => {
      if (!OJ(JJ.contentDOM, JJ.observer.selectionRange)) return !1;
      let {
        text: ZJ,
        ws: FJ,
        linewise: UJ
      } = function(JJ) {
        let cJ = [],
          ZJ = [],
          FJ = !1;
        for (let UJ of JJ.selection.ws) UJ.empty || (cJ.push(JJ.sliceDoc(UJ.from, UJ.to)), ZJ.push(UJ));
        if (!cJ.length) {
          let UJ = -1;
          for (let {
              from: FJ
            }
            of JJ.selection.ws) {
            let eJ = JJ.doc.lineAt(FJ);
            eJ.number > UJ && (cJ.push(eJ.text), ZJ.push({
              from: eJ.from,
              to: Math.min(JJ.doc.length, eJ.to + 1)
            })), UJ = eJ.number
          }
          FJ = !0
        }
        return {
          text: vF(JJ, dc, cJ.join(JJ.lineBreak)),
          ws: ZJ,
          linewise: FJ
        }
      }(JJ.state);
      if (!ZJ && !UJ) return !1;
      MF = UJ ? ZJ : null, "cut" != cJ.type || JJ.state.readOnly || JJ.dispatch({
        changes: FJ,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let eJ = rF ? null : cJ.clipboardData;
      return eJ ? (eJ.clearData(), eJ.setData("text/plain", ZJ), !0) : (function(JJ, cJ) {
        let ZJ = JJ.dom.parentNode;
        if (!ZJ) return;
        let FJ = ZJ.appendChild(document.createElement("textarea"));
        FJ.style.cssText = "position: fixed; left: -10000px; top: 10px", FJ.value = cJ, FJ.focus(), FJ.selectionEnd = cJ.length, FJ.selectionStart = 0, setTimeout((() => {
          FJ.remove(), JJ.focus()
        }), 50)
      }(JJ, ZJ), !1)
    };
    const bF = FJ.d.define();

    function wF(JJ, cJ) {
      let ZJ = [];
      for (let FJ of JJ.facet(kc)) {
        let UJ = FJ(JJ, cJ);
        UJ && ZJ.push(UJ)
      }
      return ZJ.length ? JJ.update({
        effects: ZJ,
        annotations: bF.of(!0)
      }) : null
    }

    function WF(JJ) {
      setTimeout((() => {
        let cJ = JJ.hasFocus;
        if (cJ != JJ.inputState.notifiedFocused) {
          let ZJ = wF(JJ.state, cJ);
          ZJ ? JJ.dispatch(ZJ) : JJ.update([])
        }
      }), 10)
    }
    xF.focus = JJ => {
      JJ.inputState.lastFocusTime = Date.now(), JJ.scrollDOM.scrollTop || !JJ.inputState.lastScrollTop && !JJ.inputState.lastScrollLeft || (JJ.scrollDOM.scrollTop = JJ.inputState.lastScrollTop, JJ.scrollDOM.scrollLeft = JJ.inputState.lastScrollLeft), WF(JJ)
    }, xF.blur = JJ => {
      JJ.observer.clearSelectionRange(), WF(JJ)
    }, xF.compositionstart = xF.compositionupdate = JJ => {
      JJ.observer.editContext || (null == JJ.inputState.compositionFirstChange && (JJ.inputState.compositionFirstChange = !0), JJ.inputState.composing < 0 && (JJ.inputState.composing = 0))
    }, xF.compositionend = JJ => {
      JJ.observer.editContext || (JJ.inputState.composing = -1, JJ.inputState.compositionEndedAt = Date.now(), JJ.inputState.compositionPendingKey = !0, JJ.inputState.compositionPendingChange = JJ.observer.pendingRecords().length > 0, JJ.inputState.compositionFirstChange = null, VJ.chrome && VJ.android ? JJ.observer.flushSoon() : JJ.inputState.compositionPendingChange ? Promise.resolve().then((() => JJ.observer.flush())) : setTimeout((() => {
        JJ.inputState.composing < 0 && JJ.docView.hasComposition && JJ.update([])
      }), 50))
    }, xF.contextmenu = JJ => {
      JJ.inputState.lastContextMenu = Date.now()
    }, fF.beforeinput = (JJ, cJ) => {
      var ZJ, FJ;
      if ("insertText" != cJ.inputType && "insertCompositionText" != cJ.inputType || (JJ.inputState.insertingText = cJ.data, JJ.inputState.insertingTextAt = Date.now()), "insertReplacementText" == cJ.inputType && JJ.observer.editContext) {
        let FJ = null === (ZJ = cJ.dataTransfer) || void 0 === ZJ ? void 0 : ZJ.getData("text/plain"),
          UJ = cJ.getTargetRanges();
        if (FJ && UJ.length) {
          let cJ = UJ[0],
            ZJ = JJ.posAtDOM(cJ.startContainer, cJ.startOffset),
            eJ = JJ.posAtDOM(cJ.endContainer, cJ.endOffset);
          return eF(JJ, {
            from: ZJ,
            to: eJ,
            insert: JJ.state.toText(FJ)
          }, null), !0
        }
      }
      let UJ;
      if (VJ.chrome && VJ.android && (UJ = hF.find((JJ => JJ.inputType == cJ.inputType))) && (JJ.observer.delayAndroidKey(UJ.key, UJ.keyCode), "Backspace" == UJ.key || "Delete" == UJ.key)) {
        let cJ = (null === (FJ = window.visualViewport) || void 0 === FJ ? void 0 : FJ.height) || 0;
        setTimeout((() => {
          var ZJ;
          ((null === (ZJ = window.visualViewport) || void 0 === ZJ ? void 0 : ZJ.height) || 0) > cJ + 10 && JJ.hasFocus && (JJ.contentDOM.blur(), JJ.focus())
        }), 100)
      }
      return VJ.ios && "deleteContentForward" == cJ.inputType && JJ.observer.flushSoon(), VJ.safari && "insertText" == cJ.inputType && JJ.inputState.composing >= 0 && setTimeout((() => xF.compositionend(JJ, cJ)), 20), !1
    };
    const gF = new Set;
    const HF = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let PF = !1;

    function kF() {
      PF = !1
    }
    class pF {
      constructor(JJ) {
        this.lineWrapping = JJ, this.doc = FJ.F.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(JJ, cJ) {
        let ZJ = this.doc.lineAt(cJ).number - this.doc.lineAt(JJ).number + 1;
        return this.lineWrapping && (ZJ += Math.max(0, Math.ceil((cJ - JJ - ZJ * this.lineLength * .5) / this.lineLength))), this.lineHeight * ZJ
      }
      heightForLine(JJ) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((JJ - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(JJ) {
        return this.doc = JJ, this
      }
      mustRefreshForWrapping(JJ) {
        return HF.indexOf(JJ) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(JJ) {
        let cJ = !1;
        for (let ZJ = 0; ZJ < JJ.length; ZJ++) {
          let FJ = JJ[ZJ];
          FJ < 0 ? ZJ++ : this.heightSamples[Math.floor(10 * FJ)] || (cJ = !0, this.heightSamples[Math.floor(10 * FJ)] = !0)
        }
        return cJ
      }
      refresh(JJ, cJ, ZJ, FJ, UJ, eJ) {
        let XJ = HF.indexOf(JJ) > -1,
          AJ = Math.abs(cJ - this.lineHeight) > .3 || this.lineWrapping != XJ || Math.abs(ZJ - this.charWidth) > .1;
        if (this.lineWrapping = XJ, this.lineHeight = cJ, this.charWidth = ZJ, this.textHeight = FJ, this.lineLength = UJ, AJ) {
          this.heightSamples = {};
          for (let JJ = 0; JJ < eJ.length; JJ++) {
            let cJ = eJ[JJ];
            cJ < 0 ? JJ++ : this.heightSamples[Math.floor(10 * cJ)] = !0
          }
        }
        return AJ
      }
    }
    class dF {
      constructor(JJ, cJ) {
        this.from = JJ, this.heights = cJ, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class zF {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        this.from = JJ, this.length = cJ, this.top = ZJ, this.height = FJ, this._content = UJ
      }
      get type() {
        return "number" == typeof this._content ? wJ.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof PJ ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(JJ) {
        let cJ = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(JJ._content) ? JJ._content : [JJ]);
        return new zF(this.from, this.length + JJ.length, this.top, this.height + JJ.height, cJ)
      }
    }
    var NF = function(JJ) {
      return JJ[JJ.ByPos = 0] = "ByPos", JJ[JJ.ByHeight = 1] = "ByHeight", JJ[JJ.ByPosNoHeight = 2] = "ByPosNoHeight", JJ
    }(NF || (NF = {}));
    const OF = .001;
    class TF {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = JJ, this.height = cJ, this.flags = ZJ
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(JJ) {
        this.flags = (JJ ? 2 : 0) | -3 & this.flags
      }
      setHeight(JJ) {
        this.height != JJ && (Math.abs(this.height - JJ) > OF && (PF = !0), this.height = JJ)
      }
      replace(JJ, cJ, ZJ) {
        return TF.of(ZJ)
      }
      decomposeLeft(JJ, cJ) {
        cJ.push(this)
      }
      decomposeRight(JJ, cJ) {
        cJ.push(this)
      }
      applyChanges(JJ, cJ, ZJ, FJ) {
        let UJ = this,
          eJ = ZJ.doc;
        for (let XJ = FJ.length - 1; XJ >= 0; XJ--) {
          let {
            fromA: AJ,
            toA: qJ,
            fromB: jJ,
            toB: YJ
          } = FJ[XJ], hJ = UJ.lineAt(AJ, NF.ByPosNoHeight, ZJ.setDoc(cJ), 0, 0), DJ = hJ.to >= qJ ? hJ : UJ.lineAt(qJ, NF.ByPosNoHeight, ZJ, 0, 0);
          for (YJ += DJ.to - qJ, qJ = DJ.to; XJ > 0 && hJ.from <= FJ[XJ - 1].toA;) AJ = FJ[XJ - 1].fromA, jJ = FJ[XJ - 1].fromB, XJ--, AJ < hJ.from && (hJ = UJ.lineAt(AJ, NF.ByPosNoHeight, ZJ, 0, 0));
          jJ += hJ.from - AJ, AJ = hJ.from;
          let sJ = tF.build(ZJ.setDoc(eJ), JJ, jJ, YJ);
          UJ = CF(UJ, UJ.replace(AJ, qJ, sJ))
        }
        return UJ.updateHeight(ZJ, 0)
      }
      static empty() {
        return new RF(0, 0, 0)
      }
      static of (JJ) {
        if (1 == JJ.length) return JJ[0];
        let cJ = 0,
          ZJ = JJ.length,
          FJ = 0,
          UJ = 0;
        for (;;)
          if (cJ == ZJ)
            if (FJ > 2 * UJ) {
              let UJ = JJ[cJ - 1];
              UJ.break ? JJ.splice(--cJ, 1, UJ.left, null, UJ.right) : JJ.splice(--cJ, 1, UJ.left, UJ.right), ZJ += 1 + UJ.break, FJ -= UJ.size
            } else {
              if (!(UJ > 2 * FJ)) break;
              {
                let cJ = JJ[ZJ];
                cJ.break ? JJ.splice(ZJ, 1, cJ.left, null, cJ.right) : JJ.splice(ZJ, 1, cJ.left, cJ.right), ZJ += 2 + cJ.break, UJ -= cJ.size
              }
            }
        else if (FJ < UJ) {
          let ZJ = JJ[cJ++];
          ZJ && (FJ += ZJ.size)
        } else {
          let cJ = JJ[--ZJ];
          cJ && (UJ += cJ.size)
        }
        let eJ = 0;
        return null == JJ[cJ - 1] ? (eJ = 1, cJ--) : null == JJ[cJ] && (eJ = 1, ZJ++), new aF(TF.of(JJ.slice(0, cJ)), eJ, TF.of(JJ.slice(ZJ)))
      }
    }

    function CF(JJ, cJ) {
      return JJ == cJ ? JJ : (JJ.constructor != cJ.constructor && (PF = !0), cJ)
    }
    TF.prototype.size = 1;
    const uF = WJ.replace({});
    class iF extends TF {
      constructor(JJ, cJ, ZJ) {
        super(JJ, cJ), this.deco = ZJ, this.spaceAbove = 0
      }
      mainBlock(JJ, cJ) {
        return new zF(cJ, this.length, JJ + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(JJ, cJ, ZJ, FJ) {
        return this.spaceAbove && JJ < ZJ + this.spaceAbove ? new zF(FJ, 0, ZJ, this.spaceAbove, uF) : this.mainBlock(ZJ, FJ)
      }
      lineAt(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = this.mainBlock(FJ, UJ);
        return this.spaceAbove ? this.blockAt(0, ZJ, FJ, UJ).join(eJ) : eJ
      }
      forEachLine(JJ, cJ, ZJ, FJ, UJ, eJ) {
        JJ <= UJ + this.length && cJ >= UJ && eJ(this.lineAt(0, NF.ByPos, ZJ, FJ, UJ))
      }
      setMeasuredHeight(JJ) {
        let cJ = JJ.heights[JJ.index++];
        cJ < 0 ? (this.spaceAbove = -cJ, cJ = JJ.heights[JJ.index++]) : this.spaceAbove = 0, this.setHeight(cJ)
      }
      updateHeight(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 3 ? arguments[3] : void 0;
        return ZJ && ZJ.from <= cJ && ZJ.more && this.setMeasuredHeight(ZJ), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class RF extends iF {
      constructor(JJ, cJ, ZJ) {
        super(JJ, cJ, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = ZJ
      }
      mainBlock(JJ, cJ) {
        return new zF(cJ, this.length, JJ + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(JJ, cJ, ZJ) {
        let FJ = ZJ[0];
        return 1 == ZJ.length && (FJ instanceof RF || FJ instanceof LF && 4 & FJ.flags) && Math.abs(this.length - FJ.length) < 10 ? (FJ instanceof LF ? FJ = new RF(FJ.length, this.height, this.spaceAbove) : FJ.height = this.height, this.outdated || (FJ.outdated = !1), FJ) : TF.of(ZJ)
      }
      updateHeight(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = arguments.length > 3 ? arguments[3] : void 0;
        return FJ && FJ.from <= cJ && FJ.more ? this.setMeasuredHeight(FJ) : (ZJ || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, JJ.heightForLine(this.length - this.collapsed)) + this.breaks * JJ.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class LF extends TF {
      constructor(JJ) {
        super(JJ, 0)
      }
      heightMetrics(JJ, cJ) {
        let ZJ, FJ = JJ.doc.lineAt(cJ).number,
          UJ = JJ.doc.lineAt(cJ + this.length).number,
          eJ = UJ - FJ + 1,
          XJ = 0;
        if (JJ.lineWrapping) {
          let cJ = Math.min(this.height, JJ.lineHeight * eJ);
          ZJ = cJ / eJ, this.length > eJ + 1 && (XJ = (this.height - cJ) / (this.length - eJ - 1))
        } else ZJ = this.height / eJ;
        return {
          firstLine: FJ,
          lastLine: UJ,
          perLine: ZJ,
          perChar: XJ
        }
      }
      blockAt(JJ, cJ, ZJ, FJ) {
        let {
          firstLine: UJ,
          lastLine: eJ,
          perLine: XJ,
          perChar: AJ
        } = this.heightMetrics(cJ, FJ);
        if (cJ.lineWrapping) {
          let UJ = FJ + (JJ < cJ.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (JJ - ZJ) / this.height)) * this.length)),
            eJ = cJ.doc.lineAt(UJ),
            qJ = XJ + eJ.length * AJ,
            jJ = Math.max(ZJ, JJ - qJ / 2);
          return new zF(eJ.from, eJ.length, jJ, qJ, 0)
        } {
          let FJ = Math.max(0, Math.min(eJ - UJ, Math.floor((JJ - ZJ) / XJ))),
            {
              from: AJ,
              length: qJ
            } = cJ.doc.line(UJ + FJ);
          return new zF(AJ, qJ, ZJ + XJ * FJ, XJ, 0)
        }
      }
      lineAt(JJ, cJ, ZJ, FJ, UJ) {
        if (cJ == NF.ByHeight) return this.blockAt(JJ, ZJ, FJ, UJ);
        if (cJ == NF.ByPosNoHeight) {
          let {
            from: cJ,
            to: FJ
          } = ZJ.doc.lineAt(JJ);
          return new zF(cJ, FJ - cJ, 0, 0, 0)
        }
        let {
          firstLine: eJ,
          perLine: XJ,
          perChar: AJ
        } = this.heightMetrics(ZJ, UJ), qJ = ZJ.doc.lineAt(JJ), jJ = XJ + qJ.length * AJ, YJ = qJ.number - eJ, hJ = FJ + XJ * YJ + AJ * (qJ.from - UJ - YJ);
        return new zF(qJ.from, qJ.length, Math.max(FJ, Math.min(hJ, FJ + this.height - jJ)), jJ, 0)
      }
      forEachLine(JJ, cJ, ZJ, FJ, UJ, eJ) {
        JJ = Math.max(JJ, UJ), cJ = Math.min(cJ, UJ + this.length);
        let {
          firstLine: XJ,
          perLine: AJ,
          perChar: qJ
        } = this.heightMetrics(ZJ, UJ);
        for (let jJ = JJ, YJ = FJ; jJ <= cJ;) {
          let cJ = ZJ.doc.lineAt(jJ);
          if (jJ == JJ) {
            let ZJ = cJ.number - XJ;
            YJ += AJ * ZJ + qJ * (JJ - UJ - ZJ)
          }
          let FJ = AJ + qJ * cJ.length;
          eJ(new zF(cJ.from, cJ.length, YJ, FJ, 0)), YJ += FJ, jJ = cJ.to + 1
        }
      }
      replace(JJ, cJ, ZJ) {
        let FJ = this.length - cJ;
        if (FJ > 0) {
          let JJ = ZJ[ZJ.length - 1];
          JJ instanceof LF ? ZJ[ZJ.length - 1] = new LF(JJ.length + FJ) : ZJ.push(null, new LF(FJ - 1))
        }
        if (JJ > 0) {
          let cJ = ZJ[0];
          cJ instanceof LF ? ZJ[0] = new LF(JJ + cJ.length) : ZJ.unshift(new LF(JJ - 1), null)
        }
        return TF.of(ZJ)
      }
      decomposeLeft(JJ, cJ) {
        cJ.push(new LF(JJ - 1), null)
      }
      decomposeRight(JJ, cJ) {
        cJ.push(null, new LF(this.length - JJ - 1))
      }
      updateHeight(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = arguments.length > 3 ? arguments[3] : void 0,
          UJ = cJ + this.length;
        if (FJ && FJ.from <= cJ + this.length && FJ.more) {
          let ZJ = [],
            eJ = Math.max(cJ, FJ.from),
            XJ = -1;
          for (FJ.from > cJ && ZJ.push(new LF(FJ.from - cJ - 1).updateHeight(JJ, cJ)); eJ <= UJ && FJ.more;) {
            let cJ = JJ.doc.lineAt(eJ).length;
            ZJ.length && ZJ.push(null);
            let UJ = FJ.heights[FJ.index++],
              AJ = 0;
            UJ < 0 && (AJ = -UJ, UJ = FJ.heights[FJ.index++]), -1 == XJ ? XJ = UJ : Math.abs(UJ - XJ) >= OF && (XJ = -2);
            let qJ = new RF(cJ, UJ, AJ);
            qJ.outdated = !1, ZJ.push(qJ), eJ += cJ + 1
          }
          eJ <= UJ && ZJ.push(null, new LF(UJ - eJ).updateHeight(JJ, eJ));
          let AJ = TF.of(ZJ);
          return (XJ < 0 || Math.abs(AJ.height - this.height) >= OF || Math.abs(XJ - this.heightMetrics(JJ, cJ).perLine) >= OF) && (PF = !0), CF(this, AJ)
        }
        return (ZJ || this.outdated) && (this.setHeight(JJ.heightForGap(cJ, cJ + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class aF extends TF {
      constructor(JJ, cJ, ZJ) {
        super(JJ.length + cJ + ZJ.length, JJ.height + ZJ.height, cJ | (JJ.outdated || ZJ.outdated ? 2 : 0)), this.left = JJ, this.right = ZJ, this.size = JJ.size + ZJ.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(JJ, cJ, ZJ, FJ) {
        let UJ = ZJ + this.left.height;
        return JJ < UJ ? this.left.blockAt(JJ, cJ, ZJ, FJ) : this.right.blockAt(JJ, cJ, UJ, FJ + this.left.length + this.break)
      }
      lineAt(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = FJ + this.left.height,
          XJ = UJ + this.left.length + this.break,
          AJ = cJ == NF.ByHeight ? JJ < eJ : JJ < XJ,
          qJ = AJ ? this.left.lineAt(JJ, cJ, ZJ, FJ, UJ) : this.right.lineAt(JJ, cJ, ZJ, eJ, XJ);
        if (this.break || (AJ ? qJ.to < XJ : qJ.from > XJ)) return qJ;
        let jJ = cJ == NF.ByPosNoHeight ? NF.ByPosNoHeight : NF.ByPos;
        return AJ ? qJ.join(this.right.lineAt(XJ, jJ, ZJ, eJ, XJ)) : this.left.lineAt(XJ, jJ, ZJ, FJ, UJ).join(qJ)
      }
      forEachLine(JJ, cJ, ZJ, FJ, UJ, eJ) {
        let XJ = FJ + this.left.height,
          AJ = UJ + this.left.length + this.break;
        if (this.break) JJ < AJ && this.left.forEachLine(JJ, cJ, ZJ, FJ, UJ, eJ), cJ >= AJ && this.right.forEachLine(JJ, cJ, ZJ, XJ, AJ, eJ);
        else {
          let qJ = this.lineAt(AJ, NF.ByPos, ZJ, FJ, UJ);
          JJ < qJ.from && this.left.forEachLine(JJ, qJ.from - 1, ZJ, FJ, UJ, eJ), qJ.to >= JJ && qJ.from <= cJ && eJ(qJ), cJ > qJ.to && this.right.forEachLine(qJ.to + 1, cJ, ZJ, XJ, AJ, eJ)
        }
      }
      replace(JJ, cJ, ZJ) {
        let FJ = this.left.length + this.break;
        if (cJ < FJ) return this.balanced(this.left.replace(JJ, cJ, ZJ), this.right);
        if (JJ > this.left.length) return this.balanced(this.left, this.right.replace(JJ - FJ, cJ - FJ, ZJ));
        let UJ = [];
        JJ > 0 && this.decomposeLeft(JJ, UJ);
        let eJ = UJ.length;
        for (let XJ of ZJ) UJ.push(XJ);
        if (JJ > 0 && BF(UJ, eJ - 1), cJ < this.length) {
          let JJ = UJ.length;
          this.decomposeRight(cJ, UJ), BF(UJ, JJ)
        }
        return TF.of(UJ)
      }
      decomposeLeft(JJ, cJ) {
        let ZJ = this.left.length;
        if (JJ <= ZJ) return this.left.decomposeLeft(JJ, cJ);
        cJ.push(this.left), this.break && (ZJ++, JJ >= ZJ && cJ.push(null)), JJ > ZJ && this.right.decomposeLeft(JJ - ZJ, cJ)
      }
      decomposeRight(JJ, cJ) {
        let ZJ = this.left.length,
          FJ = ZJ + this.break;
        if (JJ >= FJ) return this.right.decomposeRight(JJ - FJ, cJ);
        JJ < ZJ && this.left.decomposeRight(JJ, cJ), this.break && JJ < FJ && cJ.push(null), cJ.push(this.right)
      }
      balanced(JJ, cJ) {
        return JJ.size > 2 * cJ.size || cJ.size > 2 * JJ.size ? TF.of(this.break ? [JJ, null, cJ] : [JJ, cJ]) : (this.left = CF(this.left, JJ), this.right = CF(this.right, cJ), this.setHeight(JJ.height + cJ.height), this.outdated = JJ.outdated || cJ.outdated, this.size = JJ.size + cJ.size, this.length = JJ.length + this.break+cJ.length, this)
      }
      updateHeight(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: UJ,
            right: eJ
          } = this,
          XJ = cJ + UJ.length + this.break,
          AJ = null;
        return FJ && FJ.from <= cJ + UJ.length && FJ.more ? AJ = UJ = UJ.updateHeight(JJ, cJ, ZJ, FJ) : UJ.updateHeight(JJ, cJ, ZJ), FJ && FJ.from <= XJ + eJ.length && FJ.more ? AJ = eJ = eJ.updateHeight(JJ, XJ, ZJ, FJ) : eJ.updateHeight(JJ, XJ, ZJ), AJ ? this.balanced(UJ, eJ) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function BF(JJ, cJ) {
      let ZJ, FJ;
      null == JJ[cJ] && (ZJ = JJ[cJ - 1]) instanceof LF && (FJ = JJ[cJ + 1]) instanceof LF && JJ.splice(cJ - 1, 3, new LF(ZJ.length + 1 + FJ.length))
    }
    class tF {
      constructor(JJ, cJ) {
        this.pos = JJ, this.oracle = cJ, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = JJ
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(JJ, cJ) {
        if (this.lineStart > -1) {
          let JJ = Math.min(cJ, this.lineEnd),
            ZJ = this.nodes[this.nodes.length - 1];
          ZJ instanceof RF ? ZJ.length += JJ - this.pos : (JJ > this.pos || !this.isCovered) && this.nodes.push(new RF(JJ - this.pos, -1, 0)), this.writtenTo = JJ, cJ > JJ && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = cJ
      }
      point(JJ, cJ, ZJ) {
        if (JJ < cJ || ZJ.heightRelevant) {
          let FJ = ZJ.widget ? ZJ.widget.estimatedHeight : 0,
            UJ = ZJ.widget ? ZJ.widget.lineBreaks : 0;
          FJ < 0 && (FJ = this.oracle.lineHeight);
          let eJ = cJ - JJ;
          ZJ.block ? this.oJJ(new iF(eJ, FJ, ZJ)) : (eJ || UJ || FJ >= 5) && this.addLineDeco(FJ, UJ, eJ)
        } else cJ > JJ && this.span(JJ, cJ);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: JJ,
          to: cJ
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = JJ, this.lineEnd = cJ, this.writtenTo < JJ && ((this.writtenTo < JJ - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, JJ - 1)), this.nodes.push(null)), this.pos > JJ && this.nodes.push(new RF(this.pos - JJ, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(JJ, cJ) {
        let ZJ = new LF(cJ - JJ);
        return this.oracle.doc.lineAt(JJ).to == cJ && (ZJ.flags |= 4), ZJ
      }
      ensureLine() {
        this.enterLine();
        let JJ = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (JJ instanceof RF) return JJ;
        let cJ = new RF(0, -1, 0);
        return this.nodes.push(cJ), cJ
      }
      oJJ(JJ) {
        this.enterLine();
        let cJ = JJ.deco;
        cJ && cJ.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(JJ), this.writtenTo = this.pos = this.pos + JJ.length, cJ && cJ.endSide > 0 && (this.covering = JJ)
      }
      addLineDeco(JJ, cJ, ZJ) {
        let FJ = this.ensureLine();
        FJ.length += ZJ, FJ.collapsed += ZJ, FJ.widgetHeight = Math.max(FJ.widgetHeight, JJ), FJ.breaks += cJ, this.writtenTo = this.pos = this.pos + ZJ
      }
      finish(JJ) {
        let cJ = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || cJ instanceof RF || this.isCovered ? (this.writtenTo < this.pos || null == cJ) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new RF(0, -1, 0));
        let ZJ = JJ;
        for (let FJ of this.nodes) FJ instanceof RF && FJ.updateHeight(this.oracle, ZJ), ZJ += FJ ? FJ.length : 1;
        return this.nodes
      }
      static build(JJ, cJ, ZJ, UJ) {
        let eJ = new tF(ZJ, JJ);
        return FJ.v.spans(cJ, ZJ, UJ, eJ, 0), eJ.finish(ZJ)
      }
    }
    class oF {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(JJ, cJ, ZJ, FJ) {
        (JJ < cJ || ZJ && ZJ.heightRelevant || FJ && FJ.heightRelevant) && pJ(JJ, cJ, this.changes, 5)
      }
    }

    function lF(JJ, cJ) {
      let ZJ = JJ.getBoundingClientRect(),
        FJ = JJ.ownerDocument,
        UJ = FJ.defaultView || window,
        eJ = Math.max(0, ZJ.left),
        XJ = Math.min(UJ.innerWidth, ZJ.right),
        AJ = Math.max(0, ZJ.top),
        qJ = Math.min(UJ.innerHeight, ZJ.bottom);
      for (let jJ = JJ.parentNode; jJ && jJ != FJ.body;)
        if (1 == jJ.nodeType) {
          let cJ = jJ,
            ZJ = window.getComputedStyle(cJ);
          if ((cJ.scrollHeight > cJ.clientHeight || cJ.scrollWidth > cJ.clientWidth) && "visible" != ZJ.overflow) {
            let ZJ = cJ.getBoundingClientRect();
            eJ = Math.max(eJ, ZJ.left), XJ = Math.min(XJ, ZJ.right), AJ = Math.max(AJ, ZJ.top), qJ = Math.min(jJ == JJ.parentNode ? UJ.innerHeight : qJ, ZJ.bottom)
          }
          jJ = "absolute" == ZJ.position || "fixed" == ZJ.position ? cJ.offsetParent : cJ.parentNode
        } else {
          if (11 != jJ.nodeType) break;
          jJ = jJ.host
        } return {
        left: eJ - ZJ.left,
        right: Math.max(eJ, XJ) - ZJ.left,
        top: AJ - (ZJ.top + cJ),
        bottom: Math.max(AJ, qJ) - (ZJ.top + cJ)
      }
    }

    function JU(JJ, cJ) {
      let ZJ = JJ.getBoundingClientRect();
      return {
        left: 0,
        right: ZJ.right - ZJ.left,
        top: cJ,
        bottom: ZJ.bottom - (ZJ.top + cJ)
      }
    }
    class cU {
      constructor(JJ, cJ, ZJ, FJ) {
        this.from = JJ, this.to = cJ, this.size = ZJ, this.displaySize = FJ
      }
      static same(JJ, cJ) {
        if (JJ.length != cJ.length) return !1;
        for (let ZJ = 0; ZJ < JJ.length; ZJ++) {
          let FJ = JJ[ZJ],
            UJ = cJ[ZJ];
          if (FJ.from != UJ.from || FJ.to != UJ.to || FJ.size != UJ.size) return !1
        }
        return !0
      }
      draw(JJ, cJ) {
        return WJ.replace({
          widget: new ZU(this.displaySize * (cJ ? JJ.scaleY : JJ.scaleX), cJ)
        }).range(this.from, this.to)
      }
    }
    class ZU extends bJ {
      constructor(JJ, cJ) {
        super(), this.size = JJ, this.vertical = cJ
      }
      eq(JJ) {
        return JJ.size == this.size && JJ.vertical == this.vertical
      }
      toDOM() {
        let JJ = document.createElement("div");
        return this.vertical ? JJ.style.height = this.size + "px" : (JJ.style.width = this.size + "px", JJ.style.height = "2px", JJ.style.display = "inline-block"), JJ
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class FU {
      constructor(JJ, cJ) {
        this.view = JJ, this.state = cJ, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = AU, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = jc.LTR, this.o5 = [], this.mustEnforceCursorAssoc = !1;
        let ZJ = cJ.facet(lc).some((JJ => "function" != typeof JJ && "cm-lineWrapping" == JJ.class));
        this.heightOracle = new pF(ZJ), this.stateDeco = qU(cJ), this.heightMap = TF.empty().applyChanges(this.stateDeco, FJ.F.empty, this.heightOracle.setDoc(cJ.doc), [new jZ(0, 0, 0, cJ.doc.length)]);
        for (let FJ = 0; FJ < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); FJ++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = WJ.set(this.lineGaps.map((JJ => JJ.draw(this, !1)))), this.scrollParent = JJ.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let JJ = [this.viewport],
          {
            main: cJ
          } = this.state.selection;
        for (let ZJ = 0; ZJ <= 1; ZJ++) {
          let FJ = ZJ ? cJ.head : cJ.anchor;
          if (!JJ.some((JJ => {
              let {
                from: cJ,
                to: ZJ
              } = JJ;
              return FJ >= cJ && FJ <= ZJ
            }))) {
            let {
              from: cJ,
              to: ZJ
            } = this.lineBlockAt(FJ);
            JJ.push(new UU(cJ, ZJ))
          }
        }
        return this.viewports = JJ.sort(((JJ, cJ) => JJ.from - cJ.from)), this.updateScaler()
      }
      updateScaler() {
        let JJ = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? AU : new jU(this.heightOracle, this.heightMap, this.viewports), JJ.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (JJ => {
          this.viewportLines.push(YU(JJ, this.scaler))
        }))
      }
      update(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = JJ.state;
        let ZJ = this.stateDeco;
        this.stateDeco = qU(this.state);
        let UJ = JJ.changedRanges,
          eJ = jZ.extendWithRanges(UJ, function(JJ, cJ, ZJ) {
            let UJ = new oF;
            return FJ.v.compare(JJ, cJ, ZJ, UJ, 0), UJ.changes
          }(ZJ, this.stateDeco, JJ ? JJ.changes : FJ.ChangeSet.empty(this.state.doc.length))),
          XJ = this.heightMap.height,
          AJ = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        kF(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, JJ.startState.doc, this.heightOracle.setDoc(this.state.doc), eJ), (this.heightMap.height != XJ || PF) && (JJ.flags |= 2), AJ ? (this.scrollAnchorPos = JJ.changes.mapPos(AJ.from, -1), this.scrollAnchorHeight = AJ.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = XJ);
        let qJ = eJ.length ? this.mapViewport(this.viewport, JJ.changes) : this.viewport;
        (cJ && (cJ.range.head < qJ.from || cJ.range.head > qJ.to) || !this.viewportIsAppropriate(qJ)) && (qJ = this.getViewport(0, cJ));
        let jJ = qJ.from != this.viewport.from || qJ.to != this.viewport.to;
        this.viewport = qJ, JJ.flags |= this.updateForViewport(), (jJ || !JJ.changes.empty || 2 & JJ.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, JJ.changes))), JJ.flags |= this.computeVisibleRanges(JJ.changes), cJ && (this.scrollTarget = cJ), !this.mustEnforceCursorAssoc && (JJ.selectionSet || JJ.focusChanged) && JJ.view.lineWrapping && JJ.state.selection.main.empty && JJ.state.selection.main.assoc && !JJ.state.facet(Nc) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: JJ
        } = this, cJ = JJ.contentDOM, ZJ = window.getComputedStyle(cJ), UJ = this.heightOracle, eJ = ZJ.whiteSpace;
        this.defaultTextDirection = "rtl" == ZJ.direction ? jc.RTL : jc.LTR;
        let XJ = this.heightOracle.mustRefreshForWrapping(eJ) || "refresh" === this.mustMeasureContent,
          AJ = cJ.getBoundingClientRect(),
          qJ = XJ || this.mustMeasureContent || this.contentDOMHeight != AJ.height;
        this.contentDOMHeight = AJ.height, this.mustMeasureContent = !1;
        let jJ = 0,
          YJ = 0;
        if (AJ.width && AJ.height) {
          let {
            scaleX: JJ,
            scaleY: ZJ
          } = tJ(cJ, AJ);
          (JJ > .005 && Math.abs(this.scaleX - JJ) > .005 || ZJ > .005 && Math.abs(this.scaleY - ZJ) > .005) && (this.scaleX = JJ, this.scaleY = ZJ, jJ |= 16, XJ = qJ = !0)
        }
        let hJ = (parseInt(ZJ.paddingTop) || 0) * this.scaleY,
          DJ = (parseInt(ZJ.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == hJ && this.paddingBottom == DJ || (this.paddingTop = hJ, this.paddingBottom = DJ, jJ |= 18), this.editorWidth != JJ.scrollDOM.clientWidth && (UJ.lineWrapping && (qJ = !0), this.editorWidth = JJ.scrollDOM.clientWidth, jJ |= 16);
        let sJ = oJ(this.view.contentDOM, !1).y;
        sJ != this.scrollParent && (this.scrollParent = sJ, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let nJ = this.getScrollOffset();
        this.scrollOffset != nJ && (this.scrollAnchorHeight = -1, this.scrollOffset = nJ), this.scrolledToBottom = ec(this.scrollParent || JJ.win);
        let GJ = (this.printing ? JU : lF)(cJ, this.paddingTop),
          fJ = GJ.top - this.pixelViewport.top,
          xJ = GJ.bottom - this.pixelViewport.bottom;
        this.pixelViewport = GJ;
        let rJ = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (rJ != this.inView && (this.inView = rJ, rJ && (qJ = !0)), !this.inView && !this.scrollTarget && ! function(JJ) {
            let cJ = JJ.getBoundingClientRect(),
              ZJ = JJ.ownerDocument.defaultView || window;
            return cJ.left < ZJ.innerWidth && cJ.right > 0 && cJ.top < ZJ.innerHeight && cJ.bottom > 0
          }(JJ.dom)) return 0;
        let vJ = AJ.width;
        if (this.contentDOMWidth == vJ && this.editorHeight == JJ.scrollDOM.clientHeight || (this.contentDOMWidth = AJ.width, this.editorHeight = JJ.scrollDOM.clientHeight, jJ |= 16), qJ) {
          let cJ = JJ.docView.measureVisibleLineHeights(this.viewport);
          if (UJ.mustRefreshForHeights(cJ) && (XJ = !0), XJ || UJ.lineWrapping && Math.abs(vJ - this.contentDOMWidth) > UJ.charWidth) {
            let {
              lineHeight: ZJ,
              charWidth: FJ,
              textHeight: AJ
            } = JJ.docView.measureTextSize();
            XJ = ZJ > 0 && UJ.refresh(eJ, ZJ, FJ, AJ, Math.max(5, vJ / FJ), cJ), XJ && (JJ.docView.minWidth = 0, jJ |= 16)
          }
          fJ > 0 && xJ > 0 ? YJ = Math.max(fJ, xJ) : fJ < 0 && xJ < 0 && (YJ = Math.min(fJ, xJ)), kF();
          for (let ZJ of this.viewports) {
            let eJ = ZJ.from == this.viewport.from ? cJ : JJ.docView.measureVisibleLineHeights(ZJ);
            this.heightMap = (XJ ? TF.empty().applyChanges(this.stateDeco, FJ.F.empty, this.heightOracle, [new jZ(0, 0, 0, JJ.state.doc.length)]) : this.heightMap).updateHeight(UJ, 0, XJ, new dF(ZJ.from, eJ))
          }
          PF && (jJ |= 2)
        }
        let mJ = !this.viewportIsAppropriate(this.viewport, YJ) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return mJ && (2 & jJ && (jJ |= this.updateScaler()), this.viewport = this.getViewport(YJ, this.scrollTarget), jJ |= this.updateForViewport()), (2 & jJ || mJ) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(XJ ? [] : this.lineGaps, JJ)), jJ |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, JJ.docView.enforceCursorAssoc()), jJ
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(JJ, cJ) {
        let ZJ = .5 - Math.max(-.5, Math.min(.5, JJ / 1e3 / 2)),
          FJ = this.heightMap,
          UJ = this.heightOracle,
          {
            visibleTop: eJ,
            visibleBottom: XJ
          } = this,
          AJ = new UU(FJ.lineAt(eJ - 1e3 * ZJ, NF.ByHeight, UJ, 0, 0).from, FJ.lineAt(XJ + 1e3 * (1 - ZJ), NF.ByHeight, UJ, 0, 0).to);
        if (cJ) {
          let {
            head: JJ
          } = cJ.range;
          if (JJ < AJ.from || JJ > AJ.to) {
            let ZJ, eJ = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              XJ = FJ.lineAt(JJ, NF.ByPos, UJ, 0, 0);
            ZJ = "center" == cJ.y ? (XJ.top + XJ.bottom) / 2 - eJ / 2 : "start" == cJ.y || "nearest" == cJ.y && JJ < AJ.from ? XJ.top : XJ.bottom - eJ, AJ = new UU(FJ.lineAt(ZJ - 500, NF.ByHeight, UJ, 0, 0).from, FJ.lineAt(ZJ + eJ + 500, NF.ByHeight, UJ, 0, 0).to)
          }
        }
        return AJ
      }
      mapViewport(JJ, cJ) {
        let ZJ = cJ.mapPos(JJ.from, -1),
          FJ = cJ.mapPos(JJ.to, 1);
        return new UU(this.heightMap.lineAt(ZJ, NF.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(FJ, NF.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(JJ) {
        let {
          from: cJ,
          to: ZJ
        } = JJ, FJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: UJ
        } = this.heightMap.lineAt(cJ, NF.ByPos, this.heightOracle, 0, 0), {
          bottom: eJ
        } = this.heightMap.lineAt(ZJ, NF.ByPos, this.heightOracle, 0, 0), {
          visibleTop: XJ,
          visibleBottom: AJ
        } = this;
        return (0 == cJ || UJ <= XJ - Math.max(10, Math.min(-FJ, 250))) && (ZJ == this.state.doc.length || eJ >= AJ + Math.max(10, Math.min(FJ, 250))) && UJ > XJ - 2e3 && eJ < AJ + 2e3
      }
      mapLineGaps(JJ, cJ) {
        if (!JJ.length || cJ.empty) return JJ;
        let ZJ = [];
        for (let FJ of JJ) cJ.touchesRange(FJ.from, FJ.to) || ZJ.push(new cU(cJ.mapPos(FJ.from), cJ.mapPos(FJ.to), FJ.size, FJ.displaySize));
        return ZJ
      }
      ensureLineGaps(JJ, cJ) {
        let ZJ = this.heightOracle.lineWrapping,
          UJ = ZJ ? 1e4 : 2e3,
          eJ = UJ >> 1,
          XJ = UJ << 1;
        if (this.defaultTextDirection != jc.LTR && !ZJ) return [];
        let AJ = [],
          qJ = (UJ, XJ, jJ, YJ) => {
            if (XJ - UJ < eJ) return;
            let hJ = this.state.selection.main,
              DJ = [hJ.from];
            hJ.empty || DJ.push(hJ.to);
            for (let JJ of DJ)
              if (JJ > UJ && JJ < XJ) return qJ(UJ, JJ - 10, jJ, YJ), void qJ(JJ + 10, XJ, jJ, YJ);
            let sJ = function(JJ, cJ) {
              for (let ZJ of JJ)
                if (cJ(ZJ)) return ZJ;
              return
            }(JJ, (JJ => JJ.from >= jJ.from && JJ.to <= jJ.to && Math.abs(JJ.from - UJ) < eJ && Math.abs(JJ.to - XJ) < eJ && !DJ.some((cJ => JJ.from < cJ && JJ.to > cJ))));
            if (!sJ) {
              if (XJ < jJ.to && cJ && ZJ && cJ.o5.some((JJ => JJ.from <= XJ && JJ.to >= XJ))) {
                let JJ = cJ.moveToLineBoundary(FJ.m.cursor(XJ), !1, !0).head;
                JJ > UJ && (XJ = JJ)
              }
              let JJ = this.gapSize(jJ, UJ, XJ, YJ);
              sJ = new cU(UJ, XJ, JJ, ZJ || JJ < 2e6 ? JJ : 2e6)
            }
            AJ.push(sJ)
          },
          jJ = cJ => {
            if (cJ.length < XJ || cJ.type != wJ.Text) return;
            let eJ = function(JJ, cJ, ZJ) {
              let UJ = [],
                eJ = JJ,
                XJ = 0;
              FJ.v.spans(ZJ, JJ, cJ, {
                span() {},
                point(JJ, cJ) {
                  JJ > eJ && (UJ.push({
                    from: eJ,
                    to: JJ
                  }), XJ += JJ - eJ), eJ = cJ
                }
              }, 20), eJ < cJ && (UJ.push({
                from: eJ,
                to: cJ
              }), XJ += cJ - eJ);
              return {
                total: XJ,
                ws: UJ
              }
            }(cJ.from, cJ.to, this.stateDeco);
            if (eJ.total < XJ) return;
            let AJ, jJ, YJ = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (ZJ) {
              let JJ, ZJ, FJ = UJ / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != YJ) {
                let UJ = XU(eJ, YJ),
                  XJ = ((this.visibleBottom - this.visibleTop) / 2 + FJ) / cJ.height;
                JJ = UJ - XJ, ZJ = UJ + XJ
              } else JJ = (this.visibleTop - cJ.top - FJ) / cJ.height, ZJ = (this.visibleBottom - cJ.top + FJ) / cJ.height;
              AJ = eU(eJ, JJ), jJ = eU(eJ, ZJ)
            } else {
              let ZJ = eJ.total * this.heightOracle.charWidth,
                FJ = UJ * this.heightOracle.charWidth,
                XJ = 0;
              if (ZJ > 2e6)
                for (let UJ of JJ) UJ.from >= cJ.from && UJ.from < cJ.to && UJ.size != UJ.displaySize && UJ.from * this.heightOracle.charWidth + XJ < this.pixelViewport.left && (XJ = UJ.size - UJ.displaySize);
              let qJ, hJ, DJ = this.pixelViewport.left + XJ,
                sJ = this.pixelViewport.right + XJ;
              if (null != YJ) {
                let JJ = XU(eJ, YJ),
                  cJ = ((sJ - DJ) / 2 + FJ) / ZJ;
                qJ = JJ - cJ, hJ = JJ + cJ
              } else qJ = (DJ - FJ) / ZJ, hJ = (sJ + FJ) / ZJ;
              AJ = eU(eJ, qJ), jJ = eU(eJ, hJ)
            }
            AJ > cJ.from && qJ(cJ.from, AJ, cJ, eJ), jJ < cJ.to && qJ(jJ, cJ.to, cJ, eJ)
          };
        for (let FJ of this.viewportLines) Array.isArray(FJ.type) ? FJ.type.forEach(jJ) : jJ(FJ);
        return AJ
      }
      gapSize(JJ, cJ, ZJ, FJ) {
        let UJ = XU(FJ, ZJ) - XU(FJ, cJ);
        return this.heightOracle.lineWrapping ? JJ.height * UJ : FJ.total * this.heightOracle.charWidth * UJ
      }
      updateLineGaps(JJ) {
        cU.same(JJ, this.lineGaps) || (this.lineGaps = JJ, this.lineGapDeco = WJ.set(JJ.map((JJ => JJ.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(JJ) {
        let cJ = this.stateDeco;
        this.lineGaps.length && (cJ = cJ.concat(this.lineGapDeco));
        let ZJ = [];
        FJ.v.spans(cJ, this.viewport.from, this.viewport.to, {
          span(JJ, cJ) {
            ZJ.push({
              from: JJ,
              to: cJ
            })
          },
          point() {}
        }, 20);
        let UJ = 0;
        if (ZJ.length != this.o5.length) UJ = 12;
        else
          for (let FJ = 0; FJ < ZJ.length && !(8 & UJ); FJ++) {
            let cJ = this.o5[FJ],
              eJ = ZJ[FJ];
            cJ.from == eJ.from && cJ.to == eJ.to || (UJ |= 4, JJ && JJ.mapPos(cJ.from, -1) == eJ.from && JJ.mapPos(cJ.to, 1) == eJ.to || (UJ |= 8))
          }
        return this.o5 = ZJ, UJ
      }
      lineBlockAt(JJ) {
        return JJ >= this.viewport.from && JJ <= this.viewport.to && this.viewportLines.find((cJ => cJ.from <= JJ && cJ.to >= JJ)) || YU(this.heightMap.lineAt(JJ, NF.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(JJ) {
        return JJ >= this.viewportLines[0].top && JJ <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((cJ => cJ.top <= JJ && cJ.bottom >= JJ)) || YU(this.heightMap.lineAt(this.scaler.fromDOM(JJ), NF.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(JJ) {
        let cJ = this.lineBlockAtHeight(JJ + 8);
        return cJ.from >= this.viewport.from || this.viewportLines[0].top - JJ > 200 ? cJ : this.viewportLines[0]
      }
      elementAtHeight(JJ) {
        return YU(this.heightMap.blockAt(this.scaler.fromDOM(JJ), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class UU {
      constructor(JJ, cJ) {
        this.from = JJ, this.to = cJ
      }
    }

    function eU(JJ, cJ) {
      let {
        total: ZJ,
        ws: FJ
      } = JJ;
      if (cJ <= 0) return FJ[0].from;
      if (cJ >= 1) return FJ[FJ.length - 1].to;
      let UJ = Math.floor(ZJ * cJ);
      for (let eJ = 0;; eJ++) {
        let {
          from: JJ,
          to: cJ
        } = FJ[eJ], ZJ = cJ - JJ;
        if (UJ <= ZJ) return JJ + UJ;
        UJ -= ZJ
      }
    }

    function XU(JJ, cJ) {
      let ZJ = 0;
      for (let {
          from: FJ,
          to: UJ
        }
        of JJ.ws) {
        if (cJ <= UJ) {
          ZJ += cJ - FJ;
          break
        }
        ZJ += UJ - FJ
      }
      return ZJ / JJ.total
    }
    const AU = {
      toDOM: JJ => JJ,
      fromDOM: JJ => JJ,
      scale: 1,
      eq(JJ) {
        return JJ == this
      }
    };

    function qU(JJ) {
      let cJ = JJ.facet(JZ).filter((JJ => "function" != typeof JJ)),
        ZJ = JJ.facet(ZZ).filter((JJ => "function" != typeof JJ));
      return ZJ.length && cJ.push(FJ.v.join(ZJ)), cJ
    }
    class jU {
      constructor(JJ, cJ, ZJ) {
        let FJ = 0,
          UJ = 0,
          eJ = 0;
        this.viewports = ZJ.map((ZJ => {
          let {
            from: UJ,
            to: eJ
          } = ZJ, XJ = cJ.lineAt(UJ, NF.ByPos, JJ, 0, 0).top, AJ = cJ.lineAt(eJ, NF.ByPos, JJ, 0, 0).bottom;
          return FJ += AJ - XJ, {
            from: UJ,
            to: eJ,
            top: XJ,
            bottom: AJ,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - FJ) / (cJ.height - FJ);
        for (let XJ of this.viewports) XJ.domTop = eJ + (XJ.top - UJ) * this.scale, eJ = XJ.domBottom = XJ.domTop + (XJ.bottom - XJ.top), UJ = XJ.bottom
      }
      toDOM(JJ) {
        for (let cJ = 0, ZJ = 0, FJ = 0;; cJ++) {
          let UJ = cJ < this.viewports.length ? this.viewports[cJ] : null;
          if (!UJ || JJ < UJ.top) return FJ + (JJ - ZJ) * this.scale;
          if (JJ <= UJ.bottom) return UJ.domTop + (JJ - UJ.top);
          ZJ = UJ.bottom, FJ = UJ.domBottom
        }
      }
      fromDOM(JJ) {
        for (let cJ = 0, ZJ = 0, FJ = 0;; cJ++) {
          let UJ = cJ < this.viewports.length ? this.viewports[cJ] : null;
          if (!UJ || JJ < UJ.domTop) return ZJ + (JJ - FJ) / this.scale;
          if (JJ <= UJ.domBottom) return UJ.top + (JJ - UJ.domTop);
          ZJ = UJ.bottom, FJ = UJ.domBottom
        }
      }
      eq(JJ) {
        return JJ instanceof jU && (this.scale == JJ.scale && this.viewports.length == JJ.viewports.length && this.viewports.every(((cJ, ZJ) => cJ.from == JJ.viewports[ZJ].from && cJ.to == JJ.viewports[ZJ].to)))
      }
    }

    function YU(JJ, cJ) {
      if (1 == cJ.scale) return JJ;
      let ZJ = cJ.toDOM(JJ.top),
        FJ = cJ.toDOM(JJ.bottom);
      return new zF(JJ.from, JJ.length, ZJ, FJ - ZJ, Array.isArray(JJ._content) ? JJ._content.map((JJ => YU(JJ, cJ))) : JJ._content)
    }
    const hU = FJ.p.define({
        combine: JJ => JJ.join(" ")
      }),
      DU = FJ.p.define({
        combine: JJ => JJ.indexOf(!0) > -1
      }),
      sU = UJ.c.newName(),
      nU = UJ.c.newName(),
      GU = UJ.c.newName(),
      fU = {
        "&light": "." + nU,
        "&dark": "." + GU
      };

    function xU(JJ, cJ, ZJ) {
      return new UJ.c(cJ, {
        finish: cJ => /&/.test(cJ) ? cJ.replace(/&\w*/, (cJ => {
          if ("&" == cJ) return JJ;
          if (!ZJ || !ZJ[cJ]) throw new RangeError(`Unsupported selector: ${cJ}`);
          return ZJ[cJ]
        })) : JJ + " " + cJ
      })
    }
    const rU = xU("." + sU, {
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
      }, fU),
      vU = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      mU = VJ.ie && VJ.ie_version <= 11;
    class QU {
      constructor(JJ) {
        this.view = JJ, this.active = !1, this.editContext = null, this.selectionRange = new lJ, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = JJ.contentDOM, this.observer = new MutationObserver((cJ => {
          for (let JJ of cJ) this.queue.push(JJ);
          (VJ.ie && VJ.ie_version <= 11 || VJ.ios && JJ.composing) && cJ.some((JJ => "childList" == JJ.type && JJ.removedNodes.length || "characterData" == JJ.type && JJ.oldValue.length > JJ.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !VJ.android || !1 === JJ.constructor.EDIT_CONTEXT || VJ.chrome && VJ.chrome_version < 126 || (this.editContext = new KU(JJ), JJ.state.facet(Rc) && (JJ.contentDOM.editContext = this.editContext.editContext)), mU && (this.onCharData = JJ => {
          this.queue.push({
            target: JJ.target,
            type: "characterData",
            oldValue: JJ.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.Im = this.Im.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var JJ;
          (null === (JJ = this.view.docView) || void 0 === JJ ? void 0 : JJ.lastUpdate) < Date.now() - 75 && this.Im()
        })), this.resizeScroll.observe(JJ.scrollDOM)), this.addWindowListeners(this.win = JJ.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((JJ => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), JJ.length > 0 && JJ[JJ.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((JJ => {
          JJ.length > 0 && JJ[JJ.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(JJ) {
        this.view.inputState.runHandlers("scroll", JJ), this.intersecting && this.view.measure()
      }
      onScroll(JJ) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(JJ)
      }
      Im() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(JJ) {
        ("change" != JJ.type && JJ.type || JJ.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(JJ) {
        if (this.gapIntersection && (JJ.length != this.gaps.length || this.gaps.some(((cJ, ZJ) => cJ != JJ[ZJ])))) {
          this.gapIntersection.disconnect();
          for (let cJ of JJ) this.gapIntersection.observe(cJ);
          this.gaps = JJ
        }
      }
      onSelectionChange(JJ) {
        let cJ = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: ZJ
        } = this, FJ = this.selectionRange;
        if (ZJ.state.facet(Rc) ? ZJ.root.activeElement != this.dom : !OJ(this.dom, FJ)) return;
        let UJ = FJ.anchorNode && ZJ.docView.tile.nearest(FJ.anchorNode);
        UJ && UJ.isWidget() && UJ.widget.ignoreEvent(JJ) ? cJ || (this.selectionChanged = !1) : (VJ.ie && VJ.ie_version <= 11 || VJ.android && VJ.chrome) && !ZJ.state.selection.main.empty && FJ.focusNode && CJ(FJ.focusNode, FJ.focusOffset, FJ.anchorNode, FJ.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: JJ
        } = this, cJ = zJ(JJ.root);
        if (!cJ) return !1;
        let ZJ = VJ.safari && 11 == JJ.root.nodeType && JJ.root.activeElement == this.dom && function(JJ, cJ) {
          if (cJ.getComposedRanges) {
            let ZJ = cJ.getComposedRanges(JJ.root)[0];
            if (ZJ) return VU(JJ, ZJ)
          }
          let ZJ = null;

          function FJ(JJ) {
            JJ.preventDefault(), JJ.stopImmediatePropagation(), ZJ = JJ.getTargetRanges()[0]
          }
          return JJ.contentDOM.addEventListener("beforeinput", FJ, !0), JJ.dom.ownerDocument.execCommand("indent"), JJ.contentDOM.removeEventListener("beforeinput", FJ, !0), ZJ ? VU(JJ, ZJ) : null
        }(this.view, cJ) || cJ;
        if (!ZJ || this.selectionRange.eq(ZJ)) return !1;
        let FJ = OJ(this.dom, ZJ);
        return FJ && !this.selectionChanged && JJ.inputState.lastFocusTime > Date.now() - 200 && JJ.inputState.lastTouchTime < Date.now() - 300 && function(JJ, cJ) {
          let ZJ = cJ.focusNode,
            FJ = cJ.focusOffset;
          if (!ZJ || cJ.anchorNode != ZJ || cJ.anchorOffset != FJ) return !1;
          for (FJ = Math.min(FJ, LJ(ZJ));;)
            if (FJ) {
              if (1 != ZJ.nodeType) return !1;
              let JJ = ZJ.childNodes[FJ - 1];
              "false" == JJ.contentEditable ? FJ-- : (ZJ = JJ, FJ = LJ(ZJ))
            } else {
              if (ZJ == JJ) return !0;
              FJ = uJ(ZJ), ZJ = ZJ.parentNode
            }
        }(this.dom, ZJ) ? (this.view.inputState.lastFocusTime = 0, JJ.docView.updateSelection(), !1) : (this.selectionRange.setRange(ZJ), FJ && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(JJ, cJ) {
        this.selectionRange.set(JJ.node, JJ.offset, cJ.node, cJ.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let JJ = 0,
          cJ = null;
        for (let ZJ = this.dom; ZJ;)
          if (1 == ZJ.nodeType) !cJ && JJ < this.scrollTargets.length && this.scrollTargets[JJ] == ZJ ? JJ++ : cJ || (cJ = this.scrollTargets.slice(0, JJ)), cJ && cJ.push(ZJ), ZJ = ZJ.assignedSlot || ZJ.parentNode;
          else {
            if (11 != ZJ.nodeType) break;
            ZJ = ZJ.host
          } if (JJ < this.scrollTargets.length && !cJ && (cJ = this.scrollTargets.slice(0, JJ)), cJ) {
          for (let JJ of this.scrollTargets) JJ.removeEventListener("scroll", this.onScroll);
          for (let JJ of this.scrollTargets = cJ) JJ.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(JJ) {
        if (!this.active) return JJ();
        try {
          return this.stop(), JJ()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, vU), mU && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), mU && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(JJ, cJ) {
        var ZJ;
        if (!this.delayedAndroidKey) {
          let JJ = () => {
            let JJ = this.delayedAndroidKey;
            if (JJ) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = JJ.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && JJ.force && Uc(this.dom, JJ.key, JJ.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(JJ)
        }
        this.delayedAndroidKey && "Enter" != JJ || (this.delayedAndroidKey = {
          key: JJ,
          keyCode: cJ,
          force: this.lastChange < Date.now() - 50 || !!(null === (ZJ = this.delayedAndroidKey) || void 0 === ZJ ? void 0 : ZJ.force)
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
        for (let JJ of this.observer.takeRecords()) this.queue.push(JJ);
        return this.queue
      }
      processRecords() {
        let JJ = this.pendingRecords();
        JJ.length && (this.queue = []);
        let cJ = -1,
          ZJ = -1,
          FJ = !1;
        for (let UJ of JJ) {
          let JJ = this.readMutation(UJ);
          JJ && (JJ.typeOver && (FJ = !0), -1 == cJ ? ({
            from: cJ,
            to: ZJ
          } = JJ) : (cJ = Math.min(JJ.from, cJ), ZJ = Math.max(JJ.to, ZJ)))
        }
        return {
          from: cJ,
          to: ZJ,
          typeOver: FJ
        }
      }
      readChange() {
        let {
          from: JJ,
          to: cJ,
          typeOver: ZJ
        } = this.processRecords(), FJ = this.selectionChanged && OJ(this.dom, this.selectionRange);
        if (JJ < 0 && !FJ) return null;
        JJ > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let UJ = new ZF(this.view, JJ, cJ, ZJ);
        return this.view.docView.domChanged = {
          newSel: UJ.newSel ? UJ.newSel.main : null
        }, UJ
      }
      flush() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        JJ && this.readSelectionRange();
        let cJ = this.readChange();
        if (!cJ) return this.view.requestMeasure(), !1;
        let ZJ = this.view.state,
          FJ = UF(this.view, cJ);
        return this.view.state == ZJ && (cJ.domChanged || cJ.newSel && !AF(this.view.state.selection, cJ.newSel.main)) && this.view.update([]), FJ
      }
      readMutation(JJ) {
        let cJ = this.view.docView.tile.nearest(JJ.target);
        if (!cJ || cJ.isWidget()) return null;
        if (cJ.markDirty("attributes" == JJ.type), "childList" == JJ.type) {
          let ZJ = EU(cJ, JJ.previousSibling || JJ.target.previousSibling, -1),
            FJ = EU(cJ, JJ.nextSibling || JJ.target.nextSibling, 1);
          return {
            from: ZJ ? cJ.posAfter(ZJ) : cJ.posAtStart,
            to: FJ ? cJ.posBefore(FJ) : cJ.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == JJ.type ? {
          from: cJ.posAtStart,
          to: cJ.posAtEnd,
          typeOver: JJ.target.nodeValue == JJ.oldValue
        } : null
      }
      setWindow(JJ) {
        JJ != this.win && (this.removeWindowListeners(this.win), this.win = JJ, this.addWindowListeners(this.win))
      }
      addWindowListeners(JJ) {
        JJ.addEventListener("resize", this.Im), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : JJ.addEventListener("beforeprint", this.onPrint), JJ.addEventListener("scroll", this.onScroll), JJ.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(JJ) {
        JJ.removeEventListener("scroll", this.onScroll), JJ.removeEventListener("resize", this.Im), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : JJ.removeEventListener("beforeprint", this.onPrint), JJ.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(JJ) {
        this.editContext && (this.editContext.update(JJ), JJ.startState.facet(Rc) != JJ.state.facet(Rc) && (JJ.view.contentDOM.editContext = JJ.state.facet(Rc) ? this.editContext.editContext : null))
      }
      destroy() {
        var JJ, cJ, ZJ;
        this.stop(), null === (JJ = this.intersection) || void 0 === JJ || JJ.disconnect(), null === (cJ = this.gapIntersection) || void 0 === cJ || cJ.disconnect(), null === (ZJ = this.resizeScroll) || void 0 === ZJ || ZJ.disconnect();
        for (let FJ of this.scrollTargets) FJ.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function EU(JJ, cJ, ZJ) {
      for (; cJ;) {
        let FJ = DZ.get(cJ);
        if (FJ && FJ.parent == JJ) return FJ;
        let UJ = cJ.parentNode;
        cJ = UJ != JJ.dom ? UJ : ZJ > 0 ? cJ.nextSibling : cJ.previousSibling
      }
      return null
    }

    function VU(JJ, cJ) {
      let ZJ = cJ.startContainer,
        FJ = cJ.startOffset,
        UJ = cJ.endContainer,
        eJ = cJ.endOffset,
        XJ = JJ.docView.domAtPos(JJ.state.selection.main.anchor, 1);
      return CJ(XJ.node, XJ.offset, UJ, eJ) && ([ZJ, FJ, UJ, eJ] = [UJ, eJ, ZJ, FJ]), {
        anchorNode: ZJ,
        anchorOffset: FJ,
        focusNode: UJ,
        focusOffset: eJ
      }
    }
    class KU {
      constructor(JJ) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(JJ.state);
        let cJ = this.editContext = new window.EditContext({
          text: JJ.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, JJ.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(JJ.state.selection.main.head)
        });
        this.handlers.textupdate = ZJ => {
          let UJ = JJ.state.selection.main,
            {
              anchor: eJ,
              head: XJ
            } = UJ,
            AJ = this.toEditorPos(ZJ.updateRangeStart),
            qJ = this.toEditorPos(ZJ.updateRangeEnd);
          JJ.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: ZJ.updateRangeStart,
            editorBase: AJ,
            drifted: !1
          });
          let jJ = qJ - AJ > ZJ.text.length;
          AJ == this.from && eJ < this.from ? AJ = eJ : qJ == this.to && eJ > this.to && (qJ = eJ);
          let YJ = XF(JJ.state.sliceDoc(AJ, qJ), ZJ.text, (jJ ? UJ.from : UJ.to) - AJ, jJ ? "end" : null);
          if (!YJ) {
            let cJ = FJ.m.single(this.toEditorPos(ZJ.selectionStart), this.toEditorPos(ZJ.selectionEnd));
            return void(AF(cJ, UJ) || JJ.dispatch({
              selection: cJ,
              userEvent: "select"
            }))
          }
          let hJ = {
            from: YJ.from + AJ,
            to: YJ.toA + AJ,
            insert: FJ.F.of(ZJ.text.slice(YJ.from, YJ.toB).split("\n"))
          };
          if ((VJ.mac || VJ.android) && hJ.from == XJ - 1 && /^\. ?$/.test(ZJ.text) && "off" == JJ.contentDOM.getAttribute("autocorrect") && (hJ = {
              from: AJ,
              to: qJ,
              insert: FJ.F.of([ZJ.text.replace(".", " ")])
            }), this.pendingContextChange = hJ, !JJ.state.readOnly) {
            let cJ = this.to - this.from + (hJ.to - hJ.from + hJ.insert.length);
            eF(JJ, hJ, FJ.m.single(this.toEditorPos(ZJ.selectionStart, cJ), this.toEditorPos(ZJ.selectionEnd, cJ)))
          }
          this.pendingContextChange && (this.revertPending(JJ.state), this.setSelection(JJ.state)), hJ.from < hJ.to && !hJ.insert.length && JJ.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(cJ.text.slice(Math.max(0, ZJ.updateRangeStart - 1), Math.min(cJ.text.length, ZJ.updateRangeStart + 1))) && this.handlers.compositionend(ZJ)
        }, this.handlers.characterboundsupdate = ZJ => {
          let FJ = [],
            UJ = null;
          for (let cJ = this.toEditorPos(ZJ.rangeStart), eJ = this.toEditorPos(ZJ.rangeEnd); cJ < eJ; cJ++) {
            let ZJ = JJ.coordsForChar(cJ);
            UJ = ZJ && new DOMRect(ZJ.left, ZJ.top, ZJ.right - ZJ.left, ZJ.bottom - ZJ.top) || UJ || new DOMRect, FJ.push(UJ)
          }
          cJ.updateCharacterBounds(ZJ.rangeStart, FJ)
        }, this.handlers.textformatupdate = cJ => {
          let ZJ = [];
          for (let JJ of cJ.getTextFormats()) {
            let cJ = JJ.underlineStyle,
              FJ = JJ.underlineThickness;
            if (!/none/i.test(cJ) && !/none/i.test(FJ)) {
              let UJ = this.toEditorPos(JJ.rangeStart),
                eJ = this.toEditorPos(JJ.rangeEnd);
              if (UJ < eJ) {
                let JJ = `text-decoration: underline ${/^[a-z]/.test(cJ)?cJ+" ":"Dashed"==cJ?"dashed ":"Squiggle"==cJ?"wavy ":""}${/thin/i.test(FJ)?1:2}px`;
                ZJ.push(WJ.mark({
                  attributes: {
                    style: JJ
                  }
                }).range(UJ, eJ))
              }
            }
          }
          JJ.dispatch({
            effects: uc.of(WJ.set(ZJ))
          })
        }, this.handlers.compositionstart = () => {
          JJ.inputState.composing < 0 && (JJ.inputState.composing = 0, JJ.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (JJ.inputState.composing = -1, JJ.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: cJ
            } = this.composing;
            this.composing = null, cJ && this.reset(JJ.state)
          }
        };
        for (let ZJ in this.handlers) cJ.addEventListener(ZJ, this.handlers[ZJ]);
        this.measureReq = {
          read: JJ => {
            this.editContext.updateControlBounds(JJ.contentDOM.getBoundingClientRect());
            let cJ = zJ(JJ.root);
            cJ && cJ.rangeCount && this.editContext.updateSelectionBounds(cJ.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(JJ) {
        let cJ = 0,
          ZJ = !1,
          FJ = this.pendingContextChange;
        return JJ.changes.iterChanges(((UJ, eJ, XJ, AJ, qJ) => {
          if (ZJ) return;
          let jJ = qJ.length - (eJ - UJ);
          if (FJ && eJ >= FJ.to) {
            if (FJ.from == UJ && FJ.to == eJ && FJ.insert.eq(qJ)) return FJ = this.pendingContextChange = null, cJ += jJ, void(this.to += jJ);
            FJ = null, this.revertPending(JJ.state)
          }
          if (UJ += cJ, (eJ += cJ) <= this.from) this.from += jJ, this.to += jJ;
          else if (UJ < this.to) {
            if (UJ < this.from || eJ > this.to || this.to - this.from + qJ.length > 3e4) return void(ZJ = !0);
            this.editContext.updateText(this.toContextPos(UJ), this.toContextPos(eJ), qJ.toString()), this.to += jJ
          }
          cJ += jJ
        })), FJ && !ZJ && this.revertPending(JJ.state), !ZJ
      }
      update(JJ) {
        let cJ = this.pendingContextChange,
          ZJ = JJ.startState.selection.main;
        this.composing && (this.composing.drifted || !JJ.changes.touchesRange(ZJ.from, ZJ.to) && JJ.transactions.some((JJ => !JJ.isUserEvent("input.type") && JJ.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = JJ.changes.mapPos(this.composing.editorBase)) : this.applyEdits(JJ) && this.rangeIsValid(JJ.state) ? (JJ.docChanged || JJ.selectionSet || cJ) && this.setSelection(JJ.state) : (this.pendingContextChange = null, this.reset(JJ.state)), (JJ.geometryChanged || JJ.docChanged || JJ.selectionSet) && JJ.view.requestMeasure(this.measureReq)
      }
      resetRange(JJ) {
        let {
          head: cJ
        } = JJ.selection.main;
        this.from = Math.max(0, cJ - 1e4), this.to = Math.min(JJ.doc.length, cJ + 1e4)
      }
      reset(JJ) {
        this.resetRange(JJ), this.editContext.updateText(0, this.editContext.text.length, JJ.doc.sliceString(this.from, this.to)), this.setSelection(JJ)
      }
      revertPending(JJ) {
        let cJ = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(cJ.from), this.toContextPos(cJ.from + cJ.insert.length), JJ.doc.sliceString(cJ.from, cJ.to))
      }
      setSelection(JJ) {
        let {
          main: cJ
        } = JJ.selection, ZJ = this.toContextPos(Math.max(this.from, Math.min(this.to, cJ.anchor))), FJ = this.toContextPos(cJ.head);
        this.editContext.selectionStart == ZJ && this.editContext.selectionEnd == FJ || this.editContext.updateSelection(ZJ, FJ)
      }
      rangeIsValid(JJ) {
        let {
          head: cJ
        } = JJ.selection.main;
        return !(this.from > 0 && cJ - this.from < 500 || this.to < JJ.doc.length && this.to - cJ < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        JJ = Math.min(JJ, cJ);
        let ZJ = this.composing;
        return ZJ && ZJ.drifted ? ZJ.editorBase + (JJ - ZJ.contextBase) : JJ + this.from
      }
      toContextPos(JJ) {
        let cJ = this.composing;
        return cJ && cJ.drifted ? cJ.contextBase + (JJ - cJ.editorBase) : JJ - this.from
      }
      destroy() {
        for (let JJ in this.handlers) this.editContext.removeEventListener(JJ, this.handlers[JJ])
      }
    }
    class yU {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get o5() {
        return this.viewState.o5
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
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var cJ;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), JJ.parent && JJ.parent.appendChild(this.dom);
        let {
          dispatch: ZJ
        } = JJ;
        this.dispatchTransactions = JJ.dispatchTransactions || ZJ && (JJ => JJ.forEach((JJ => ZJ(JJ, this)))) || (JJ => this.update(JJ)), this.dispatch = this.dispatch.bind(this), this._root = JJ.root || function(JJ) {
          for (; JJ;) {
            if (JJ && (9 == JJ.nodeType || 11 == JJ.nodeType && JJ.host)) return JJ;
            JJ = JJ.assignedSlot || JJ.parentNode
          }
          return null
        }(JJ.parent) || document, this.viewState = new FU(this, JJ.state || FJ.o.create(JJ)), JJ.scrollTo && JJ.scrollTo.is(Cc) && (this.viewState.scrollTarget = JJ.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(ac).map((JJ => new tc(JJ)));
        for (let FJ of this.plugins) FJ.update(this);
        this.observer = new QU(this), this.inputState = new qF(this), this.inputState.ensureHandlers(this.plugins), this.docView = new kZ(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (cJ = document.fonts) || void 0 === cJ ? void 0 : cJ.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        let UJ = 1 == cJ.length && cJ[0] instanceof FJ.J ? cJ : 1 == cJ.length && Array.isArray(cJ[0]) ? cJ[0] : [this.state.update(...cJ)];
        this.dispatchTransactions(UJ, this)
      }
      update(JJ) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let cJ, ZJ = !1,
          UJ = !1,
          eJ = this.state;
        for (let FJ of JJ) {
          if (FJ.startState != eJ) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          eJ = FJ.state
        }
        if (this.destroyed) return void(this.viewState.state = eJ);
        let XJ = this.hasFocus,
          AJ = 0,
          qJ = null;
        JJ.some((JJ => JJ.annotation(bF))) ? (this.inputState.notifiedFocused = XJ, AJ = 1) : XJ != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = XJ, qJ = wF(eJ, XJ), qJ || (AJ = 1));
        let jJ = this.observer.delayedAndroidKey,
          YJ = null;
        if (jJ ? (this.observer.clearDelayedAndroidKey(), YJ = this.observer.readChange(), (YJ && !this.state.doc.eq(eJ.doc) || !this.state.selection.eq(eJ.selection)) && (YJ = null)) : this.observer.clear(), eJ.facet(FJ.o.phrases) != this.state.facet(FJ.o.phrases)) return this.setState(eJ);
        cJ = YZ.create(this, eJ, JJ), cJ.flags |= AJ;
        let hJ = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let cJ of JJ) {
            if (hJ && (hJ = hJ.map(cJ.changes)), cJ.scrollIntoView) {
              let {
                main: JJ
              } = cJ.state.selection, {
                x: ZJ,
                y: UJ
              } = this.state.facet(yU.cursorScrollMargin);
              hJ = new Tc(JJ.empty ? JJ : FJ.m.cursor(JJ.head, JJ.head > JJ.anchor ? -1 : 1), "nearest", "nearest", UJ, ZJ)
            }
            for (let JJ of cJ.effects) JJ.is(Cc) && (hJ = JJ.value.clip(this.state))
          }
          this.viewState.update(cJ, hJ), this.bidiCache = MU.update(this.bidiCache, cJ.changes), cJ.empty || (this.updatePlugins(cJ), this.inputState.update(cJ)), ZJ = this.docView.update(cJ), this.state.facet(qZ) != this.styleModules && this.mountStyles(), UJ = this.updateAttrs(), this.showAnnouncements(JJ), this.docView.updateSelection(ZJ, JJ.some((JJ => JJ.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (cJ.startState.facet(hU) != cJ.state.facet(hU) && (this.viewState.mustMeasureContent = !0), (ZJ || UJ || hJ || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), ZJ && this.docViewUpdate(), !cJ.empty)
          for (let FJ of this.state.facet(Hc)) try {
            FJ(cJ)
          } catch (DJ) {
            ic(this.state, DJ, "update listener")
          }(qJ || YJ) && Promise.resolve().then((() => {
            qJ && this.state == qJ.startState && this.dispatch(qJ), YJ && !UF(this, YJ) && jJ.force && Uc(this.contentDOM, jJ.key, jJ.keyCode)
          }))
      }
      setState(JJ) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = JJ);
        this.updateState = 2;
        let cJ = this.hasFocus;
        try {
          for (let JJ of this.plugins) JJ.destroy(this);
          this.viewState = new FU(this, JJ), this.plugins = JJ.facet(ac).map((JJ => new tc(JJ))), this.pluginMap.clear();
          for (let JJ of this.plugins) JJ.update(this);
          this.docView.destroy(), this.docView = new kZ(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        cJ && this.focus(), this.requestMeasure()
      }
      updatePlugins(JJ) {
        let cJ = JJ.startState.facet(ac),
          ZJ = JJ.state.facet(ac);
        if (cJ != ZJ) {
          let FJ = [];
          for (let UJ of ZJ) {
            let ZJ = cJ.indexOf(UJ);
            if (ZJ < 0) FJ.push(new tc(UJ));
            else {
              let cJ = this.plugins[ZJ];
              cJ.mustUpdate = JJ, FJ.push(cJ)
            }
          }
          for (let cJ of this.plugins) cJ.mustUpdate != JJ && cJ.destroy(this);
          this.plugins = FJ, this.pluginMap.clear()
        } else
          for (let FJ of this.plugins) FJ.mustUpdate = JJ;
        for (let FJ = 0; FJ < this.plugins.length; FJ++) this.plugins[FJ].update(this);
        cJ != ZJ && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let cJ of this.plugins) {
          let ZJ = cJ.value;
          if (ZJ && ZJ.docViewUpdate) try {
            ZJ.docViewUpdate(this)
          } catch (JJ) {
            ic(this.state, JJ, "doc view update listener")
          }
        }
      }
      measure() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, JJ && this.observer.forceFlush();
        let cJ = null,
          ZJ = this.viewState.scrollParent,
          FJ = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: UJ,
            scrollAnchorHeight: eJ
          } = this.viewState;
        Math.abs(FJ - this.viewState.scrollOffset) > 1 && (eJ = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let JJ = 0;; JJ++) {
            if (eJ < 0)
              if (ec(ZJ || this.win)) UJ = -1, eJ = this.viewState.heightMap.height;
              else {
                let JJ = this.viewState.scrollAnchorAt(FJ);
                UJ = JJ.from, eJ = JJ.top
              } this.updateState = 1;
            let AJ = this.viewState.measure();
            if (!AJ && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (JJ > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let qJ = [];
            4 & AJ || ([this.measureRequests, qJ] = [qJ, this.measureRequests]);
            let jJ = qJ.map((JJ => {
                try {
                  return JJ.read(this)
                } catch (cJ) {
                  return ic(this.state, cJ), IU
                }
              })),
              YJ = YZ.create(this, this.state, []),
              hJ = !1;
            YJ.flags |= AJ, cJ ? cJ.flags |= AJ : cJ = YJ, this.updateState = 2, YJ.empty || (this.updatePlugins(YJ), this.inputState.update(YJ), this.updateAttrs(), hJ = this.docView.update(YJ), hJ && this.docViewUpdate());
            for (let JJ = 0; JJ < qJ.length; JJ++)
              if (jJ[JJ] != IU) try {
                let cJ = qJ[JJ];
                cJ.write && cJ.write(jJ[JJ], this)
              } catch (XJ) {
                ic(this.state, XJ)
              }
            if (hJ && this.docView.updateSelection(!0), !YJ.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, eJ = -1;
                  continue
                } {
                  let JJ = ((UJ < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(UJ).top) - eJ) / this.scaleY;
                  if ((JJ > 1 || JJ < -1) && (ZJ == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    FJ += JJ, ZJ ? ZJ.scrollTop += JJ : this.win.scrollBy(0, JJ), eJ = -1;
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
        if (cJ && !cJ.empty)
          for (let AJ of this.state.facet(Hc)) AJ(cJ)
      }
      get themeClasses() {
        return sU + " " + (this.state.facet(DU) ? GU : nU) + " " + this.state.facet(hU)
      }
      updateAttrs() {
        let JJ = bU(this, oc, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          cJ = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(Rc) ? "true" : "false",
            class: "cm-content",
            style: `${VJ.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (cJ["aria-readonly"] = "true"), bU(this, lc, cJ);
        let ZJ = this.observer.ignore((() => {
          let ZJ = IJ(this.contentDOM, this.contentAttrs, cJ),
            FJ = IJ(this.dom, this.editorAttrs, JJ);
          return ZJ || FJ
        }));
        return this.editorAttrs = JJ, this.contentAttrs = cJ, ZJ
      }
      showAnnouncements(JJ) {
        let cJ = !0;
        for (let ZJ of JJ)
          for (let JJ of ZJ.effects)
            if (JJ.is(yU.announce)) {
              cJ && (this.announceDOM.textContent = ""), cJ = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = JJ.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(qZ);
        let JJ = this.state.facet(yU.cspNonce);
        UJ.c.mount(this.root, this.styleModules.concat(rU).reverse(), JJ ? {
          nonce: JJ
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(JJ) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), JJ) {
          if (this.measureRequests.indexOf(JJ) > -1) return;
          if (null != JJ.key)
            for (let cJ = 0; cJ < this.measureRequests.length; cJ++)
              if (this.measureRequests[cJ].key === JJ.key) return void(this.measureRequests[cJ] = JJ);
          this.measureRequests.push(JJ)
        }
      }
      plugin(JJ) {
        let cJ = this.pluginMap.get(JJ);
        return (void 0 === cJ || cJ && cJ.plugin != JJ) && this.pluginMap.set(JJ, cJ = this.plugins.find((cJ => cJ.plugin == JJ)) || null), cJ && cJ.update(this).value
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
      elementAtHeight(JJ) {
        return this.readMeasured(), this.viewState.elementAtHeight(JJ)
      }
      lineBlockAtHeight(JJ) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(JJ)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(JJ) {
        return this.viewState.lineBlockAt(JJ)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(JJ, cJ, ZJ) {
        return RZ(this, JJ, CZ(this, JJ, cJ, ZJ))
      }
      moveByGroup(JJ, cJ) {
        return RZ(this, JJ, CZ(this, JJ, cJ, (cJ => function(JJ, cJ, ZJ) {
          let UJ = JJ.state.charCategorizer(cJ),
            eJ = UJ(ZJ);
          return JJ => {
            let cJ = UJ(JJ);
            return eJ == FJ.i.Space && (eJ = cJ), eJ == cJ
          }
        }(this, JJ.head, cJ))))
      }
      visualLineSide(JJ, cJ) {
        let ZJ = this.bidiSpans(JJ),
          UJ = this.textDirectionAt(JJ.from),
          eJ = ZJ[cJ ? ZJ.length - 1 : 0];
        return FJ.m.cursor(eJ.side(cJ, UJ) + JJ.from, eJ.forward(!cJ, UJ) ? 1 : -1)
      }
      moveToLineBoundary(JJ, cJ) {
        return function(JJ, cJ, ZJ, UJ) {
          let eJ = TZ(JJ, cJ.head, cJ.assoc || -1),
            XJ = UJ && eJ.type == wJ.Text && (JJ.lineWrapping || eJ.widgetLineBreaks) ? JJ.coordsAtPos(cJ.assoc < 0 && cJ.head > eJ.from ? cJ.head - 1 : cJ.head) : null;
          if (XJ) {
            let cJ = JJ.dom.getBoundingClientRect(),
              UJ = JJ.textDirectionAt(eJ.from),
              AJ = JJ.posAtCoords({
                x: ZJ == (UJ == jc.LTR) ? cJ.right - 1 : cJ.left + 1,
                y: (XJ.top + XJ.bottom) / 2
              });
            if (null != AJ) return FJ.m.cursor(AJ, ZJ ? -1 : 1)
          }
          return FJ.m.cursor(ZJ ? eJ.to : eJ.from, ZJ ? -1 : 1)
        }(this, JJ, cJ, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(JJ, cJ, ZJ) {
        return RZ(this, JJ, function(JJ, cJ, ZJ, UJ) {
          let eJ = cJ.head,
            XJ = ZJ ? 1 : -1;
          if (eJ == (ZJ ? JJ.state.doc.length : 0)) return FJ.m.cursor(eJ, cJ.assoc);
          let AJ, qJ = cJ.goalColumn,
            jJ = JJ.contentDOM.getBoundingClientRect(),
            YJ = JJ.coordsAtPos(eJ, cJ.assoc || ((cJ.empty ? ZJ : cJ.head == cJ.from) ? 1 : -1)),
            hJ = JJ.documentTop;
          if (YJ) null == qJ && (qJ = YJ.left - jJ.left), AJ = XJ < 0 ? YJ.top : YJ.bottom;
          else {
            let cJ = JJ.viewState.lineBlockAt(eJ);
            null == qJ && (qJ = Math.min(jJ.right - jJ.left, JJ.defaultCharacterWidth * (eJ - cJ.from))), AJ = (XJ < 0 ? cJ.top : cJ.bottom) + hJ
          }
          let DJ = jJ.left + qJ,
            sJ = JJ.viewState.heightOracle.textHeight >> 1,
            nJ = null !== UJ && void 0 !== UJ ? UJ : sJ;
          for (let GJ = 0;; GJ += sJ) {
            let cJ = AJ + (nJ + GJ) * XJ,
              UJ = aZ(JJ, {
                x: DJ,
                y: cJ
              }, !1, XJ);
            if (ZJ ? cJ > jJ.bottom : cJ < jJ.top) return FJ.m.cursor(UJ.pos, UJ.assoc);
            let eJ = JJ.coordsAtPos(UJ.pos, UJ.assoc),
              YJ = eJ ? (eJ.top + eJ.bottom) / 2 : 0;
            if (!eJ || (ZJ ? YJ > AJ : YJ < AJ)) return FJ.m.cursor(UJ.pos, UJ.assoc, void 0, qJ)
          }
        }(this, JJ, cJ, ZJ))
      }
      domAtPos(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(JJ, cJ)
      }
      posAtDOM(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(JJ, cJ)
      }
      posAtCoords(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let ZJ = aZ(this, JJ, cJ);
        return ZJ && ZJ.pos
      }
      posAndSideAtCoords(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), aZ(this, JJ, cJ)
      }
      coordsAtPos(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let ZJ = this.docView.coordsAt(JJ, cJ);
        if (!ZJ || ZJ.left == ZJ.right) return ZJ;
        let FJ = this.state.doc.lineAt(JJ),
          UJ = this.bidiSpans(FJ);
        return aJ(ZJ, UJ[vc.find(UJ, JJ - FJ.from, -1, cJ)].dir == jc.LTR == cJ > 0)
      }
      coordsForChar(JJ) {
        return this.readMeasured(), this.docView.coordsForChar(JJ)
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
      textDirectionAt(JJ) {
        return !this.state.facet(zc) || JJ < this.viewport.from || JJ > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(JJ))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(JJ) {
        if (JJ.length > SU) return yc(JJ.length);
        let cJ, ZJ = this.textDirectionAt(JJ.from);
        for (let UJ of this.bidiCache)
          if (UJ.from == JJ.from && UJ.dir == ZJ && (UJ.fresh || mc(UJ.isolates, cJ = eZ(this, JJ)))) return UJ.order;
        cJ || (cJ = eZ(this, JJ));
        let FJ = Kc(JJ.text, ZJ, cJ);
        return this.bidiCache.push(new MU(JJ.from, JJ.to, ZJ, cJ, !0, FJ)), FJ
      }
      get hasFocus() {
        var JJ;
        return (this.dom.ownerDocument.hasFocus() || VJ.safari && (null === (JJ = this.inputState) || void 0 === JJ ? void 0 : JJ.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          Zc(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(JJ) {
        this._root != JJ && (this._root = JJ, this.observer.setWindow((9 == JJ.nodeType ? JJ : JJ.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let JJ of this.plugins) JJ.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var ZJ, UJ, eJ, XJ;
        return Cc.of(new Tc("number" == typeof JJ ? FJ.m.cursor(JJ) : JJ, null !== (ZJ = cJ.y) && void 0 !== ZJ ? ZJ : "nearest", null !== (UJ = cJ.x) && void 0 !== UJ ? UJ : "nearest", null !== (eJ = cJ.yMargin) && void 0 !== eJ ? eJ : 5, null !== (XJ = cJ.xMargin) && void 0 !== XJ ? XJ : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: JJ,
          scrollLeft: cJ
        } = this.scrollDOM, ZJ = this.viewState.scrollAnchorAt(JJ);
        return Cc.of(new Tc(FJ.m.cursor(ZJ.from), "start", "start", ZJ.top - JJ, cJ, !0))
      }
      setTabFocusMode(JJ) {
        null == JJ ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof JJ ? this.inputState.tabFocusMode = JJ ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + JJ)
      }
      static domEventHandlers(JJ) {
        return Bc.define((() => ({})), {
          eventHandlers: JJ
        })
      }
      static domEventObservers(JJ) {
        return Bc.define((() => ({})), {
          eventObservers: JJ
        })
      }
      static theme(JJ, cJ) {
        let ZJ = UJ.c.newName(),
          FJ = [hU.of(ZJ), qZ.of(xU(`.${ZJ}`, JJ))];
        return cJ && cJ.dark && FJ.push(DU.of(!0)), FJ
      }
      static baseTheme(JJ) {
        return FJ.t.lowest(qZ.of(xU("." + sU, JJ, fU)))
      }
      static findFromDOM(JJ) {
        var cJ;
        let ZJ = JJ.querySelector(".cm-content"),
          FJ = ZJ && DZ.get(ZJ) || DZ.get(JJ);
        return (null === (cJ = null === FJ || void 0 === FJ ? void 0 : FJ.root) || void 0 === cJ ? void 0 : cJ.view) || null
      }
    }
    yU.styleModule = qZ, yU.inputHandler = Pc, yU.clipboardInputFilter = pc, yU.clipboardOutputFilter = dc, yU.scrollHandler = Oc, yU.focusChangeEffect = kc, yU.perLineTextDirection = zc, yU.exceptionSink = gc, yU.updateListener = Hc, yU.editable = Rc, yU.mouseSelectionStyle = Wc, yU.dragMovesSelection = wc, yU.clickAddsSelectionRange = bc, yU.je = JZ, yU.blockWrappers = cZ, yU.outerDecorations = ZZ, yU.atomicRanges = FZ, yU.bidiIsolatedRanges = UZ, yU.cursorScrollMargin = FJ.p.define({
      combine: JJ => {
        let cJ = 5,
          ZJ = 5;
        for (let FJ of JJ) "number" == typeof FJ ? cJ = ZJ = FJ : ({
          x: cJ,
          y: ZJ
        } = FJ);
        return {
          x: cJ,
          y: ZJ
        }
      }
    }), yU.scrollMargins = XZ, yU.darkTheme = DU, yU.cspNonce = FJ.p.define({
      combine: JJ => JJ.length ? JJ[0] : ""
    }), yU.contentAttributes = lc, yU.editorAttributes = oc, yU.lineWrapping = yU.contentAttributes.of({
      class: "cm-lineWrapping"
    }), yU.announce = FJ.A.define();
    const SU = 4096,
      IU = {};
    class MU {
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ) {
        this.from = JJ, this.to = cJ, this.dir = ZJ, this.isolates = FJ, this.fresh = UJ, this.order = eJ
      }
      static update(JJ, cJ) {
        if (cJ.empty && !JJ.some((JJ => JJ.fresh))) return JJ;
        let ZJ = [],
          FJ = JJ.length ? JJ[JJ.length - 1].dir : jc.LTR;
        for (let UJ = Math.max(0, JJ.length - 10); UJ < JJ.length; UJ++) {
          let eJ = JJ[UJ];
          eJ.dir != FJ || cJ.touchesRange(eJ.from, eJ.to) || ZJ.push(new MU(cJ.mapPos(eJ.from, 1), cJ.mapPos(eJ.to, -1), eJ.dir, eJ.isolates, !1, eJ.order))
        }
        return ZJ
      }
    }

    function bU(JJ, cJ, ZJ) {
      for (let FJ = JJ.state.facet(cJ), UJ = FJ.length - 1; UJ >= 0; UJ--) {
        let cJ = FJ[UJ],
          eJ = "function" == typeof cJ ? cJ(JJ) : cJ;
        eJ && KJ(eJ, ZJ)
      }
      return ZJ
    }
    const wU = VJ.mac ? "mac" : VJ.windows ? "win" : VJ.linux ? "linux" : "key";

    function WU(JJ, cJ, ZJ) {
      return cJ.altKey && (JJ = "Alt-" + JJ), cJ.ctrlKey && (JJ = "Ctrl-" + JJ), cJ.metaKey && (JJ = "Meta-" + JJ), !1 !== ZJ && cJ.shiftKey && (JJ = "Shift-" + JJ), JJ
    }
    const gU = FJ.t.default(yU.domEventHandlers({
        keydown: (JJ, cJ) => OU(kU(cJ.state), JJ, cJ, "editor")
      })),
      HU = FJ.p.define({
        enables: gU
      }),
      PU = new WeakMap;

    function kU(JJ) {
      let cJ = JJ.facet(HU),
        ZJ = PU.get(cJ);
      return ZJ || PU.set(cJ, ZJ = function(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wU,
          ZJ = Object.create(null),
          FJ = Object.create(null),
          UJ = (JJ, cJ) => {
            let ZJ = FJ[JJ];
            if (null == ZJ) FJ[JJ] = cJ;
            else if (ZJ != cJ) throw new Error("Key binding " + JJ + " is used both as a regular binding and as a multi-stroke prefix")
          },
          eJ = (JJ, FJ, eJ, XJ, AJ) => {
            var qJ, jJ;
            let YJ = ZJ[JJ] || (ZJ[JJ] = Object.create(null)),
              hJ = FJ.split(/ (?!$)/).map((JJ => function(JJ, cJ) {
                const ZJ = JJ.split(/-(?!$)/);
                let FJ, UJ, eJ, XJ, AJ = ZJ[ZJ.length - 1];
                "Space" == AJ && (AJ = " ");
                for (let qJ = 0; qJ < ZJ.length - 1; ++qJ) {
                  const JJ = ZJ[qJ];
                  if (/^(cmd|meta|m)$/i.test(JJ)) XJ = !0;
                  else if (/^a(lt)?$/i.test(JJ)) FJ = !0;
                  else if (/^(c|ctrl|control)$/i.test(JJ)) UJ = !0;
                  else if (/^s(hift)?$/i.test(JJ)) eJ = !0;
                  else {
                    if (!/^mod$/i.test(JJ)) throw new Error("Unrecognized modifier name: " + JJ);
                    "mac" == cJ ? XJ = !0 : UJ = !0
                  }
                }
                return FJ && (AJ = "Alt-" + AJ), UJ && (AJ = "Ctrl-" + AJ), XJ && (AJ = "Meta-" + AJ), eJ && (AJ = "Shift-" + AJ), AJ
              }(JJ, cJ)));
            for (let cJ = 1; cJ < hJ.length; cJ++) {
              let ZJ = hJ.slice(0, cJ).join(" ");
              UJ(ZJ, !0), YJ[ZJ] || (YJ[ZJ] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [cJ => {
                  let FJ = dU = {
                    view: cJ,
                    prefix: ZJ,
                    scope: JJ
                  };
                  return setTimeout((() => {
                    dU == FJ && (dU = null)
                  }), zU), !0
                }]
              })
            }
            let DJ = hJ.join(" ");
            UJ(DJ, !1);
            let sJ = YJ[DJ] || (YJ[DJ] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (jJ = null === (qJ = YJ._any) || void 0 === qJ ? void 0 : qJ.run) || void 0 === jJ ? void 0 : jJ.slice()) || []
            });
            eJ && sJ.run.push(eJ), XJ && (sJ.preventDefault = !0), AJ && (sJ.stopPropagation = !0)
          };
        for (let XJ of JJ) {
          let JJ = XJ.scope ? XJ.scope.split(" ") : ["editor"];
          if (XJ.any)
            for (let cJ of JJ) {
              let JJ = ZJ[cJ] || (ZJ[cJ] = Object.create(null));
              JJ._any || (JJ._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: FJ
              } = XJ;
              for (let cJ in JJ) JJ[cJ].run.push((JJ => FJ(JJ, NU)))
            }
          let FJ = XJ[cJ] || XJ.key;
          if (FJ)
            for (let cJ of JJ) eJ(cJ, FJ, XJ.run, XJ.preventDefault, XJ.stopPropagation), XJ.shift && eJ(cJ, "Shift-" + FJ, XJ.shift, XJ.preventDefault, XJ.stopPropagation)
        }
        return ZJ
      }(cJ.reduce(((JJ, cJ) => JJ.concat(cJ)), []))), ZJ
    }

    function pU(JJ, cJ, ZJ) {
      return OU(kU(JJ.state), cJ, JJ, ZJ)
    }
    let dU = null;
    const zU = 4e3;
    let NU = null;

    function OU(JJ, cJ, ZJ, UJ) {
      NU = cJ;
      let jJ = function(JJ) {
          var cJ = !(AJ && JJ.metaKey && JJ.shiftKey && !JJ.ctrlKey && !JJ.altKey || qJ && JJ.shiftKey && JJ.key && 1 == JJ.key.length || "Unidentified" == JJ.key) && JJ.key || (JJ.shiftKey ? XJ : eJ)[JJ.keyCode] || JJ.key || "Unidentified";
          return "Esc" == cJ && (cJ = "Escape"), "Del" == cJ && (cJ = "Delete"), "Left" == cJ && (cJ = "ArrowLeft"), "Up" == cJ && (cJ = "ArrowUp"), "Right" == cJ && (cJ = "ArrowRight"), "Down" == cJ && (cJ = "ArrowDown"), cJ
        }(cJ),
        YJ = (0, FJ.L)(jJ, 0),
        hJ = (0, FJ.P)(YJ) == jJ.length && " " != jJ,
        DJ = "",
        sJ = !1,
        nJ = !1,
        GJ = !1;
      dU && dU.view == ZJ && dU.scope == UJ && (DJ = dU.prefix + " ", sF.indexOf(cJ.keyCode) < 0 && (nJ = !0, dU = null));
      let fJ, xJ, rJ = new Set,
        vJ = JJ => {
          if (JJ) {
            for (let cJ of JJ.run)
              if (!rJ.has(cJ) && (rJ.add(cJ), cJ(ZJ))) return JJ.stopPropagation && (GJ = !0), !0;
            JJ.preventDefault && (JJ.stopPropagation && (GJ = !0), nJ = !0)
          }
          return !1
        },
        mJ = JJ[UJ];
      return mJ && (vJ(mJ[DJ + WU(jJ, cJ, !hJ)]) ? sJ = !0 : !hJ || !(cJ.altKey || cJ.metaKey || cJ.ctrlKey) || VJ.windows && cJ.ctrlKey && cJ.altKey || VJ.mac && cJ.altKey && !cJ.ctrlKey && !cJ.metaKey || !(fJ = eJ[cJ.keyCode]) || fJ == jJ ? hJ && cJ.shiftKey && vJ(mJ[DJ + WU(jJ, cJ, !0)]) && (sJ = !0) : (vJ(mJ[DJ + WU(fJ, cJ, !0)]) || cJ.shiftKey && (xJ = XJ[cJ.keyCode]) != jJ && xJ != fJ && vJ(mJ[DJ + WU(xJ, cJ, !1)])) && (sJ = !0), !sJ && vJ(mJ._any) && (sJ = !0)), nJ && (sJ = !0), sJ && GJ && cJ.stopPropagation(), NU = null, sJ
    }
    class TU {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        this.className = JJ, this.left = cJ, this.top = ZJ, this.width = FJ, this.height = UJ
      }
      draw() {
        let JJ = document.createElement("div");
        return JJ.className = this.className, this.adjust(JJ), JJ
      }
      update(JJ, cJ) {
        return cJ.className == this.className && (this.adjust(JJ), !0)
      }
      adjust(JJ) {
        JJ.style.left = this.left + "px", JJ.style.top = this.top + "px", null != this.width && (JJ.style.width = this.width + "px"), JJ.style.height = this.height + "px"
      }
      eq(JJ) {
        return this.left == JJ.left && this.top == JJ.top && this.width == JJ.width && this.height == JJ.height && this.className == JJ.className
      }
      static forRange(JJ, cJ, ZJ) {
        if (ZJ.empty) {
          let FJ = JJ.coordsAtPos(ZJ.head, ZJ.assoc || 1);
          if (!FJ) return [];
          let UJ = CU(JJ);
          return [new TU(cJ, FJ.left - UJ.left, FJ.top - UJ.top, null, FJ.bottom - FJ.top)]
        }
        return function(JJ, cJ, ZJ) {
          if (ZJ.to <= JJ.viewport.from || ZJ.from >= JJ.viewport.to) return [];
          let FJ = Math.max(ZJ.from, JJ.viewport.from),
            UJ = Math.min(ZJ.to, JJ.viewport.to),
            eJ = JJ.textDirection == jc.LTR,
            XJ = JJ.contentDOM,
            AJ = XJ.getBoundingClientRect(),
            qJ = CU(JJ),
            jJ = XJ.querySelector(".cm-line"),
            YJ = jJ && window.getComputedStyle(jJ),
            hJ = AJ.left + (YJ ? parseInt(YJ.paddingLeft) + Math.min(0, parseInt(YJ.textIndent)) : 0),
            DJ = AJ.right - (YJ ? parseInt(YJ.paddingRight) : 0),
            sJ = TZ(JJ, FJ, 1),
            nJ = TZ(JJ, UJ, -1),
            GJ = sJ.type == wJ.Text ? sJ : null,
            fJ = nJ.type == wJ.Text ? nJ : null;
          GJ && (JJ.lineWrapping || sJ.widgetLineBreaks) && (GJ = uU(JJ, FJ, 1, GJ));
          fJ && (JJ.lineWrapping || nJ.widgetLineBreaks) && (fJ = uU(JJ, UJ, -1, fJ));
          if (GJ && fJ && GJ.from == fJ.from && GJ.to == fJ.to) return rJ(vJ(ZJ.from, ZJ.to, GJ));
          {
            let cJ = GJ ? vJ(ZJ.from, null, GJ) : mJ(sJ, !1),
              FJ = fJ ? vJ(null, ZJ.to, fJ) : mJ(nJ, !0),
              UJ = [];
            return (GJ || sJ).to < (fJ || nJ).from - (GJ && fJ ? 1 : 0) || sJ.widgetLineBreaks > 1 && cJ.bottom + JJ.defaultLineHeight / 2 < FJ.top ? UJ.push(xJ(hJ, cJ.bottom, DJ, FJ.top)) : cJ.bottom < FJ.top && JJ.elementAtHeight((cJ.bottom + FJ.top) / 2).type == wJ.Text && (cJ.bottom = FJ.top = (cJ.bottom + FJ.top) / 2), rJ(cJ).concat(UJ).concat(rJ(FJ))
          }

          function xJ(JJ, ZJ, FJ, UJ) {
            return new TU(cJ, JJ - qJ.left, ZJ - qJ.top, Math.max(0, FJ - JJ), UJ - ZJ)
          }

          function rJ(JJ) {
            let {
              top: cJ,
              bottom: ZJ,
              horizontal: FJ
            } = JJ, UJ = [];
            for (let eJ = 0; eJ < FJ.length; eJ += 2) UJ.push(xJ(FJ[eJ], cJ, FJ[eJ + 1], ZJ));
            return UJ
          }

          function vJ(cJ, ZJ, FJ) {
            let UJ = 1e9,
              XJ = -1e9,
              AJ = [];

            function qJ(cJ, ZJ, qJ, jJ, YJ) {
              let sJ = JJ.coordsAtPos(cJ, cJ == FJ.to ? -2 : 2),
                nJ = JJ.coordsAtPos(qJ, qJ == FJ.from ? 2 : -2);
              sJ && nJ && (UJ = Math.min(sJ.top, nJ.top, UJ), XJ = Math.max(sJ.bottom, nJ.bottom, XJ), YJ == jc.LTR ? AJ.push(eJ && ZJ ? hJ : sJ.left, eJ && jJ ? DJ : nJ.right) : AJ.push(!eJ && jJ ? hJ : nJ.left, !eJ && ZJ ? DJ : sJ.right))
            }
            let jJ = null !== cJ && void 0 !== cJ ? cJ : FJ.from,
              YJ = null !== ZJ && void 0 !== ZJ ? ZJ : FJ.to;
            for (let eJ of JJ.o5)
              if (eJ.to > jJ && eJ.from < YJ)
                for (let FJ = Math.max(eJ.from, jJ), UJ = Math.min(eJ.to, YJ);;) {
                  let eJ = JJ.state.doc.lineAt(FJ);
                  for (let XJ of JJ.bidiSpans(eJ)) {
                    let JJ = XJ.from + eJ.from,
                      AJ = XJ.to + eJ.from;
                    if (JJ >= UJ) break;
                    AJ > FJ && qJ(Math.max(JJ, FJ), null == cJ && JJ <= jJ, Math.min(AJ, UJ), null == ZJ && AJ >= YJ, XJ.dir)
                  }
                  if (FJ = eJ.to + 1, FJ >= UJ) break
                }
            return 0 == AJ.length && qJ(jJ, null == cJ, YJ, null == ZJ, JJ.textDirection), {
              top: UJ,
              bottom: XJ,
              horizontal: AJ
            }
          }

          function mJ(JJ, cJ) {
            let ZJ = AJ.top + (cJ ? JJ.top : JJ.bottom);
            return {
              top: ZJ,
              bottom: ZJ,
              horizontal: []
            }
          }
        }(JJ, cJ, ZJ)
      }
    }

    function CU(JJ) {
      let cJ = JJ.scrollDOM.getBoundingClientRect();
      return {
        left: (JJ.textDirection == jc.LTR ? cJ.left : cJ.right - JJ.scrollDOM.clientWidth * JJ.scaleX) - JJ.scrollDOM.scrollLeft * JJ.scaleX,
        top: cJ.top - JJ.scrollDOM.scrollTop * JJ.scaleY
      }
    }

    function uU(JJ, cJ, ZJ, FJ) {
      let UJ = JJ.coordsAtPos(cJ, 2 * ZJ);
      if (!UJ) return FJ;
      let eJ = JJ.dom.getBoundingClientRect(),
        XJ = (UJ.top + UJ.bottom) / 2,
        AJ = JJ.posAtCoords({
          x: eJ.left + 1,
          y: XJ
        }),
        qJ = JJ.posAtCoords({
          x: eJ.right - 1,
          y: XJ
        });
      return null == AJ || null == qJ ? FJ : {
        from: Math.max(FJ.from, Math.min(AJ, qJ)),
        to: Math.min(FJ.to, Math.max(AJ, qJ))
      }
    }
    class iU {
      constructor(JJ, cJ) {
        this.view = JJ, this.layer = cJ, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = JJ.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), cJ.above && this.dom.classList.add("cm-layer-above"), cJ.class && this.dom.classList.add(cJ.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(JJ.state), JJ.requestMeasure(this.measureReq), cJ.mount && cJ.mount(this.dom, JJ)
      }
      update(JJ) {
        JJ.startState.facet(RU) != JJ.state.facet(RU) && this.setOrder(JJ.state), (this.layer.update(JJ, this.dom) || JJ.geometryChanged) && (this.scale(), JJ.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(JJ) {
        !1 !== this.layer.updateOnDocViewUpdate && JJ.requestMeasure(this.measureReq)
      }
      setOrder(JJ) {
        let cJ = 0,
          ZJ = JJ.facet(RU);
        for (; cJ < ZJ.length && ZJ[cJ] != this.layer;) cJ++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - cJ)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: JJ,
          scaleY: cJ
        } = this.view;
        JJ == this.scaleX && cJ == this.scaleY || (this.scaleX = JJ, this.scaleY = cJ, this.dom.style.transform = `scale(${1/JJ}, ${1/cJ})`)
      }
      draw(JJ) {
        if (JJ.length != this.drawn.length || JJ.some(((JJ, cJ) => {
            return ZJ = JJ, FJ = this.drawn[cJ], !(ZJ.constructor == FJ.constructor && ZJ.eq(FJ));
            var ZJ, FJ
          }))) {
          let cJ = this.dom.firstChild,
            ZJ = 0;
          for (let FJ of JJ) FJ.update && cJ && FJ.constructor && this.drawn[ZJ].constructor && FJ.update(cJ, this.drawn[ZJ]) ? (cJ = cJ.nextSibling, ZJ++) : this.dom.insertBefore(FJ.draw(), cJ);
          for (; cJ;) {
            let JJ = cJ.nextSibling;
            cJ.remove(), cJ = JJ
          }
          this.drawn = JJ, VJ.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const RU = FJ.p.define();

    function LU(JJ) {
      return [Bc.define((cJ => new iU(cJ, JJ))), RU.of(JJ)]
    }
    const aU = FJ.p.define({
      combine: JJ => (0, FJ.S)(JJ, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (JJ, cJ) => Math.min(JJ, cJ),
        drawRangeCursor: (JJ, cJ) => JJ || cJ
      })
    });

    function BU() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [aU.of(JJ), oU, Je, ce, Nc.of(!0)]
    }

    function tU(JJ) {
      return JJ.startState.facet(aU) != JJ.state.facet(aU)
    }
    const oU = LU({
      above: !0,
      markers(JJ) {
        let {
          state: cJ
        } = JJ, ZJ = cJ.facet(aU), UJ = [];
        for (let eJ of cJ.selection.ws) {
          let XJ = eJ == cJ.selection.main;
          if (eJ.empty || ZJ.drawRangeCursor && !(XJ && VJ.ios && ZJ.iosSelectionHandles)) {
            let cJ = XJ ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              ZJ = eJ.empty ? eJ : FJ.m.cursor(eJ.head, eJ.assoc);
            for (let FJ of TU.forRange(JJ, cJ, ZJ)) UJ.push(FJ)
          }
        }
        return UJ
      },
      update(JJ, cJ) {
        JJ.transactions.some((JJ => JJ.selection)) && (cJ.style.animationName = "cm-blink" == cJ.style.animationName ? "cm-blink2" : "cm-blink");
        let ZJ = tU(JJ);
        return ZJ && lU(JJ.state, cJ), JJ.docChanged || JJ.selectionSet || ZJ
      },
      mount(JJ, cJ) {
        lU(cJ.state, JJ)
      },
      class: "cm-cursorLayer"
    });

    function lU(JJ, cJ) {
      cJ.style.animationDuration = JJ.facet(aU).cursorBlinkRate + "ms"
    }
    const Je = LU({
        above: !1,
        markers(JJ) {
          let cJ = [],
            {
              main: ZJ,
              ws: UJ
            } = JJ.state.selection;
          for (let FJ of UJ)
            if (!FJ.empty)
              for (let ZJ of TU.forRange(JJ, "cm-selectionBackground", FJ)) cJ.push(ZJ);
          if (VJ.ios && !ZJ.empty && JJ.state.facet(aU).iosSelectionHandles) {
            for (let UJ of TU.forRange(JJ, "cm-selectionHandle cm-selectionHandle-start", FJ.m.cursor(ZJ.from, 1))) cJ.push(UJ);
            for (let UJ of TU.forRange(JJ, "cm-selectionHandle cm-selectionHandle-end", FJ.m.cursor(ZJ.to, 1))) cJ.push(UJ)
          }
          return cJ
        },
        update: (JJ, cJ) => JJ.docChanged || JJ.selectionSet || JJ.viewportChanged || tU(JJ),
        class: "cm-selectionLayer"
      }),
      ce = FJ.t.highest(yU.theme({
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
      Ze = FJ.A.define({
        map: (JJ, cJ) => null == JJ ? null : cJ.mapPos(JJ)
      }),
      Fe = FJ.E.define({
        create: () => null,
        update: (JJ, cJ) => (null != JJ && (JJ = cJ.changes.mapPos(JJ)), cJ.effects.reduce(((JJ, cJ) => cJ.is(Ze) ? cJ.value : JJ), JJ))
      }),
      Ue = Bc.fromClass(class {
        constructor(JJ) {
          this.view = JJ, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(JJ) {
          var cJ;
          let ZJ = JJ.state.field(Fe);
          null == ZJ ? null != this.cursor && (null === (cJ = this.cursor) || void 0 === cJ || cJ.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (JJ.startState.field(Fe) != ZJ || JJ.docChanged || JJ.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: JJ
          } = this, cJ = JJ.state.field(Fe), ZJ = null != cJ && JJ.coordsAtPos(cJ);
          if (!ZJ) return null;
          let FJ = JJ.scrollDOM.getBoundingClientRect();
          return {
            left: ZJ.left - FJ.left + JJ.scrollDOM.scrollLeft * JJ.scaleX,
            top: ZJ.top - FJ.top + JJ.scrollDOM.scrollTop * JJ.scaleY,
            height: ZJ.bottom - ZJ.top
          }
        }
        drawCursor(JJ) {
          if (this.cursor) {
            let {
              scaleX: cJ,
              scaleY: ZJ
            } = this.view;
            JJ ? (this.cursor.style.left = JJ.left / cJ + "px", this.cursor.style.top = JJ.top / ZJ + "px", this.cursor.style.height = JJ.height / ZJ + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(JJ) {
          this.view.state.field(Fe) != JJ && this.view.dispatch({
            effects: Ze.of(JJ)
          })
        }
      }, {
        eventObservers: {
          dragover(JJ) {
            this.setDropPos(this.view.posAtCoords({
              x: JJ.clientX,
              y: JJ.clientY
            }))
          },
          dragleave(JJ) {
            JJ.target != this.view.contentDOM && this.view.contentDOM.contains(JJ.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function ee() {
      return [Fe, Ue]
    }

    function Xe(JJ, cJ, ZJ, FJ, UJ) {
      cJ.lastIndex = 0;
      for (let eJ, XJ = JJ.iterRange(ZJ, FJ), AJ = ZJ; !XJ.next().done; AJ += XJ.value.length)
        if (!XJ.lineBreak)
          for (; eJ = cJ.exec(XJ.value);) UJ(AJ + eJ.index, eJ)
    }
    class Ae {
      constructor(JJ) {
        const {
          regexp: cJ,
          decoration: ZJ,
          decorate: FJ,
          boundary: UJ,
          maxLength: eJ = 1e3
        } = JJ;
        if (!cJ.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = cJ, FJ) this.addMatch = (JJ, cJ, ZJ, UJ) => FJ(UJ, ZJ, ZJ + JJ[0].length, JJ, cJ);
        else if ("function" == typeof ZJ) this.addMatch = (JJ, cJ, FJ, UJ) => {
          let eJ = ZJ(JJ, cJ, FJ);
          eJ && UJ(FJ, FJ + JJ[0].length, eJ)
        };
        else {
          if (!ZJ) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (JJ, cJ, FJ, UJ) => UJ(FJ, FJ + JJ[0].length, ZJ)
        }
        this.boundary = UJ, this.maxLength = eJ
      }
      createDeco(JJ) {
        let cJ = new FJ.u,
          ZJ = cJ.add.bind(cJ);
        for (let {
            from: FJ,
            to: UJ
          }
          of
          function(JJ, cJ) {
            let ZJ = JJ.o5;
            if (1 == ZJ.length && ZJ[0].from == JJ.viewport.from && ZJ[0].to == JJ.viewport.to) return ZJ;
            let FJ = [];
            for (let {
                from: UJ,
                to: eJ
              }
              of ZJ) UJ = Math.max(JJ.state.doc.lineAt(UJ).from, UJ - cJ), eJ = Math.min(JJ.state.doc.lineAt(eJ).to, eJ + cJ), FJ.length && FJ[FJ.length - 1].to >= UJ ? FJ[FJ.length - 1].to = eJ : FJ.push({
              from: UJ,
              to: eJ
            });
            return FJ
          }(JJ, this.maxLength)) Xe(JJ.state.doc, this.regexp, FJ, UJ, ((cJ, FJ) => this.addMatch(FJ, JJ, cJ, ZJ)));
        return cJ.finish()
      }
      updateDeco(JJ, cJ) {
        let ZJ = 1e9,
          FJ = -1;
        return JJ.docChanged && JJ.changes.iterChanges(((cJ, UJ, eJ, XJ) => {
          XJ >= JJ.view.viewport.from && eJ <= JJ.view.viewport.to && (ZJ = Math.min(eJ, ZJ), FJ = Math.max(XJ, FJ))
        })), JJ.viewportMoved || FJ - ZJ > 1e3 ? this.createDeco(JJ.view) : FJ > -1 ? this.updateRange(JJ.view, cJ.map(JJ.changes), ZJ, FJ) : cJ
      }
      updateRange(JJ, cJ, ZJ, FJ) {
        for (let UJ of JJ.o5) {
          let eJ = Math.max(UJ.from, ZJ),
            XJ = Math.min(UJ.to, FJ);
          if (XJ >= eJ) {
            let ZJ = JJ.state.doc.lineAt(eJ),
              FJ = ZJ.to < XJ ? JJ.state.doc.lineAt(XJ) : ZJ,
              AJ = Math.max(UJ.from, ZJ.from),
              qJ = Math.min(UJ.to, FJ.to);
            if (this.boundary) {
              for (; eJ > ZJ.from; eJ--)
                if (this.boundary.test(ZJ.text[eJ - 1 - ZJ.from])) {
                  AJ = eJ;
                  break
                } for (; XJ < FJ.to; XJ++)
                if (this.boundary.test(FJ.text[XJ - FJ.from])) {
                  qJ = XJ;
                  break
                }
            }
            let jJ, YJ = [],
              hJ = (JJ, cJ, ZJ) => YJ.push(ZJ.range(JJ, cJ));
            if (ZJ == FJ)
              for (this.regexp.lastIndex = AJ - ZJ.from;
                (jJ = this.regexp.exec(ZJ.text)) && jJ.index < qJ - ZJ.from;) this.addMatch(jJ, JJ, jJ.index + ZJ.from, hJ);
            else Xe(JJ.state.doc, this.regexp, AJ, qJ, ((cJ, ZJ) => this.addMatch(ZJ, JJ, cJ, hJ)));
            cJ = cJ.update({
              filterFrom: AJ,
              filterTo: qJ,
              filter: (JJ, cJ) => JJ < AJ || cJ > qJ,
              add: YJ
            })
          }
        }
        return cJ
      }
    }
    const qe = null != /x/.unicode ? "gu" : "g",
      je = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", qe),
      Ye = {
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
    let he = null;
    const De = FJ.p.define({
      combine(JJ) {
        let cJ = (0, FJ.S)(JJ, {
          render: null,
          specialChars: je,
          addSpecialChars: null
        });
        return (cJ.replaceTabs = ! function() {
          var JJ;
          if (null == he && "undefined" != typeof document && document.body) {
            let cJ = document.body.style;
            he = null != (null !== (JJ = cJ.tabSize) && void 0 !== JJ ? JJ : cJ.MozTabSize)
          }
          return he || !1
        }()) && (cJ.specialChars = new RegExp("\t|" + cJ.specialChars.source, qe)), cJ.addSpecialChars && (cJ.specialChars = new RegExp(cJ.specialChars.source + "|" + cJ.addSpecialChars.source, qe)), cJ
      }
    });

    function se() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [De.of(JJ), ne || (ne = Bc.fromClass(class {
        constructor(JJ) {
          this.view = JJ, this.je = WJ.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(JJ.state.facet(De)), this.je = this.decorator.createDeco(JJ)
        }
        makeDecorator(JJ) {
          return new Ae({
            regexp: JJ.specialChars,
            decoration: (cJ, ZJ, UJ) => {
              let {
                doc: eJ
              } = ZJ.state, XJ = (0, FJ.L)(cJ[0], 0);
              if (9 == XJ) {
                let JJ = eJ.lineAt(UJ),
                  cJ = ZJ.state.tabSize,
                  XJ = (0, FJ.U)(JJ.text, cJ, UJ - JJ.from);
                return WJ.replace({
                  widget: new fe((cJ - XJ % cJ) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[XJ] || (this.decorationCache[XJ] = WJ.replace({
                widget: new Ge(JJ, XJ)
              }))
            },
            boundary: JJ.replaceTabs ? void 0 : /[^]/
          })
        }
        update(JJ) {
          let cJ = JJ.state.facet(De);
          JJ.startState.facet(De) != cJ ? (this.decorator = this.makeDecorator(cJ), this.je = this.decorator.createDeco(JJ.view)) : this.je = this.decorator.updateDeco(JJ, this.je)
        }
      }, {
        je: JJ => JJ.je
      }))]
    }
    let ne = null;
    class Ge extends bJ {
      constructor(JJ, cJ) {
        super(), this.options = JJ, this.code = cJ
      }
      eq(JJ) {
        return JJ.code == this.code
      }
      toDOM(JJ) {
        let cJ = function(JJ) {
            return JJ >= 32 ? "\u2022" : 10 == JJ ? "\u2424" : String.fromCharCode(9216 + JJ)
          }(this.code),
          ZJ = JJ.state.phrase("Control character") + " " + (Ye[this.code] || "0x" + this.code.toString(16)),
          FJ = this.options.render && this.options.render(this.code, ZJ, cJ);
        if (FJ) return FJ;
        let UJ = document.createElement("span");
        return UJ.textContent = cJ, UJ.title = ZJ, UJ.setAttribute("aria-label", ZJ), UJ.className = "cm-specialChar", UJ
      }
      ignoreEvent() {
        return !1
      }
    }
    class fe extends bJ {
      constructor(JJ) {
        super(), this.width = JJ
      }
      eq(JJ) {
        return JJ.width == this.width
      }
      toDOM() {
        let JJ = document.createElement("span");
        return JJ.textContent = "\t", JJ.className = "cm-tab", JJ.style.width = this.width + "px", JJ
      }
      ignoreEvent() {
        return !1
      }
    }

    function xe() {
      return ve
    }
    const re = WJ.line({
        class: "cm-activeLine"
      }),
      ve = Bc.fromClass(class {
        constructor(JJ) {
          this.je = this.getDeco(JJ)
        }
        update(JJ) {
          (JJ.docChanged || JJ.selectionSet) && (this.je = this.getDeco(JJ.view))
        }
        getDeco(JJ) {
          let cJ = -1,
            ZJ = [];
          for (let FJ of JJ.state.selection.ws) {
            let UJ = JJ.lineBlockAt(FJ.head);
            UJ.from > cJ && (ZJ.push(re.range(UJ.from)), cJ = UJ.from)
          }
          return WJ.set(ZJ)
        }
      }, {
        je: JJ => JJ.je
      });
    class me extends bJ {
      constructor(JJ) {
        super(), this.content = JJ
      }
      toDOM(JJ) {
        let cJ = document.createElement("span");
        return cJ.className = "cm-placeholder", cJ.style.pointerEvents = "none", cJ.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(JJ) : this.content.cloneNode(!0)), cJ.setAttribute("aria-hidden", "true"), cJ
      }
      coordsAt(JJ) {
        let cJ = JJ.firstChild ? TJ(JJ.firstChild) : [];
        if (!cJ.length) return null;
        let ZJ = window.getComputedStyle(JJ.parentNode),
          FJ = aJ(cJ[0], "rtl" != ZJ.direction),
          UJ = parseInt(ZJ.lineHeight);
        return FJ.bottom - FJ.top > 1.5 * UJ ? {
          left: FJ.left,
          right: FJ.right,
          top: FJ.top,
          bottom: FJ.top + UJ
        } : FJ
      }
      ignoreEvent() {
        return !1
      }
    }

    function Qe(JJ) {
      let cJ = Bc.fromClass(class {
        constructor(cJ) {
          this.view = cJ, this.placeholder = JJ ? WJ.set([WJ.widget({
            widget: new me(JJ),
            side: 1
          }).range(0)]) : WJ.none
        }
        get je() {
          return this.view.state.doc.length ? WJ.none : this.placeholder
        }
      }, {
        je: JJ => JJ.je
      });
      return "string" == typeof JJ ? [cJ, yU.contentAttributes.of({
        "aria-placeholder": JJ
      })] : cJ
    }
    const Ee = 2e3;

    function Ve(JJ, cJ) {
      let ZJ = JJ.posAtCoords({
          x: cJ.clientX,
          y: cJ.clientY
        }, !1),
        UJ = JJ.state.doc.lineAt(ZJ),
        eJ = ZJ - UJ.from,
        XJ = eJ > Ee ? -1 : eJ == UJ.length ? function(JJ, cJ) {
          let ZJ = JJ.coordsAtPos(JJ.viewport.from);
          return ZJ ? Math.round(Math.abs((ZJ.left - cJ) / JJ.defaultCharacterWidth)) : -1
        }(JJ, cJ.clientX) : (0, FJ.U)(UJ.text, JJ.state.tabSize, ZJ - UJ.from);
      return {
        line: UJ.number,
        col: XJ,
        off: eJ
      }
    }

    function Ke(JJ, cJ) {
      let ZJ = Ve(JJ, cJ),
        UJ = JJ.state.selection;
      return ZJ ? {
        update(JJ) {
          if (JJ.docChanged) {
            let cJ = JJ.changes.mapPos(JJ.startState.doc.line(ZJ.line).from),
              FJ = JJ.state.doc.lineAt(cJ);
            ZJ = {
              line: FJ.number,
              col: ZJ.col,
              off: Math.min(ZJ.off, FJ.length)
            }, UJ = UJ.map(JJ.changes)
          }
        },
        get(cJ, eJ, XJ) {
          let AJ = Ve(JJ, cJ);
          if (!AJ) return UJ;
          let qJ = function(JJ, cJ, ZJ) {
            let UJ = Math.min(cJ.line, ZJ.line),
              eJ = Math.max(cJ.line, ZJ.line),
              XJ = [];
            if (cJ.off > Ee || ZJ.off > Ee || cJ.col < 0 || ZJ.col < 0) {
              let AJ = Math.min(cJ.off, ZJ.off),
                qJ = Math.max(cJ.off, ZJ.off);
              for (let cJ = UJ; cJ <= eJ; cJ++) {
                let ZJ = JJ.doc.line(cJ);
                ZJ.length <= qJ && XJ.push(FJ.m.range(ZJ.from + AJ, ZJ.to + qJ))
              }
            } else {
              let AJ = Math.min(cJ.col, ZJ.col),
                qJ = Math.max(cJ.col, ZJ.col);
              for (let cJ = UJ; cJ <= eJ; cJ++) {
                let ZJ = JJ.doc.line(cJ),
                  UJ = (0, FJ._)(ZJ.text, AJ, JJ.tabSize, !0);
                if (UJ < 0) XJ.push(FJ.m.cursor(ZJ.to));
                else {
                  let cJ = (0, FJ._)(ZJ.text, qJ, JJ.tabSize);
                  XJ.push(FJ.m.range(ZJ.from + UJ, ZJ.from + cJ))
                }
              }
            }
            return XJ
          }(JJ.state, ZJ, AJ);
          return qJ.length ? XJ ? FJ.m.create(qJ.concat(UJ.ws)) : FJ.m.create(qJ) : UJ
        }
      } : null
    }

    function ye(JJ) {
      let cJ = (null === JJ || void 0 === JJ ? void 0 : JJ.eventFilter) || (JJ => JJ.altKey && 0 == JJ.button);
      return yU.mouseSelectionStyle.of(((JJ, ZJ) => cJ(ZJ) ? Ke(JJ, ZJ) : null))
    }
    const Se = {
        Alt: [18, JJ => !!JJ.altKey],
        Control: [17, JJ => !!JJ.ctrlKey],
        Shift: [16, JJ => !!JJ.shiftKey],
        Meta: [91, JJ => !!JJ.metaKey]
      },
      Ie = {
        style: "cursor: crosshair"
      };

    function Me() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [cJ, ZJ] = Se[JJ.key || "Alt"],
        FJ = Bc.fromClass(class {
          constructor(JJ) {
            this.view = JJ, this.isDown = !1
          }
          set(JJ) {
            this.isDown != JJ && (this.isDown = JJ, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(JJ) {
              this.set(JJ.keyCode == cJ || ZJ(JJ))
            },
            keyup(JJ) {
              JJ.keyCode != cJ && ZJ(JJ) || this.set(!1)
            },
            mousemove(JJ) {
              this.set(ZJ(JJ))
            }
          }
        });
      return [FJ, yU.contentAttributes.of((JJ => {
        var cJ;
        return (null === (cJ = JJ.plugin(FJ)) || void 0 === cJ ? void 0 : cJ.isDown) ? Ie : null
      }))]
    }
    const be = "-10000px";
    class we {
      constructor(JJ, cJ, ZJ, FJ) {
        this.facet = cJ, this.createTooltipView = ZJ, this.removeTooltipView = FJ, this.input = JJ.state.facet(cJ), this.tooltips = this.input.filter((JJ => JJ));
        let UJ = null;
        this.tooltipViews = this.tooltips.map((JJ => UJ = ZJ(JJ, UJ)))
      }
      update(JJ, cJ) {
        var ZJ;
        let FJ = JJ.state.facet(this.facet),
          UJ = FJ.filter((JJ => JJ));
        if (FJ === this.input) {
          for (let cJ of this.tooltipViews) cJ.update && cJ.update(JJ);
          return !1
        }
        let eJ = [],
          XJ = cJ ? [] : null;
        for (let AJ = 0; AJ < UJ.length; AJ++) {
          let ZJ = UJ[AJ],
            FJ = -1;
          if (ZJ) {
            for (let JJ = 0; JJ < this.tooltips.length; JJ++) {
              let cJ = this.tooltips[JJ];
              cJ && cJ.create == ZJ.create && (FJ = JJ)
            }
            if (FJ < 0) eJ[AJ] = this.createTooltipView(ZJ, AJ ? eJ[AJ - 1] : null), XJ && (XJ[AJ] = !!ZJ.above);
            else {
              let ZJ = eJ[AJ] = this.tooltipViews[FJ];
              XJ && (XJ[AJ] = cJ[FJ]), ZJ.update && ZJ.update(JJ)
            }
          }
        }
        for (let AJ of this.tooltipViews) eJ.indexOf(AJ) < 0 && (this.removeTooltipView(AJ), null === (ZJ = AJ.destroy) || void 0 === ZJ || ZJ.call(AJ));
        return cJ && (XJ.forEach(((JJ, ZJ) => cJ[ZJ] = JJ)), cJ.length = XJ.length), this.input = FJ, this.tooltips = UJ, this.tooltipViews = eJ, !0
      }
    }

    function We(JJ) {
      let cJ = JJ.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: cJ.clientHeight,
        right: cJ.clientWidth
      }
    }
    const ge = FJ.p.define({
        combine: JJ => {
          var cJ, ZJ, FJ;
          return {
            position: VJ.ios ? "absolute" : (null === (cJ = JJ.find((JJ => JJ.position))) || void 0 === cJ ? void 0 : cJ.position) || "fixed",
            parent: (null === (ZJ = JJ.find((JJ => JJ.parent))) || void 0 === ZJ ? void 0 : ZJ.parent) || null,
            tooltipSpace: (null === (FJ = JJ.find((JJ => JJ.tooltipSpace))) || void 0 === FJ ? void 0 : FJ.tooltipSpace) || We
          }
        }
      }),
      He = new WeakMap,
      Pe = Bc.fromClass(class {
        constructor(JJ) {
          this.view = JJ, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let cJ = JJ.state.facet(ge);
          this.position = cJ.position, this.parent = cJ.parent, this.classes = JJ.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new we(JJ, ze, ((JJ, cJ) => this.createTooltip(JJ, cJ)), (JJ => {
            this.resizeObserver && this.resizeObserver.unobserve(JJ.dom), JJ.dom.remove()
          })), this.above = this.manager.tooltips.map((JJ => !!JJ.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((JJ => {
            Date.now() > this.lastTransaction - 50 && JJ.length > 0 && JJ[JJ.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), JJ.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let JJ of this.manager.tooltipViews) this.intersectionObserver.observe(JJ.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(JJ) {
          JJ.transactions.length && (this.lastTransaction = Date.now());
          let cJ = this.manager.update(JJ, this.above);
          cJ && this.observeIntersection();
          let ZJ = cJ || JJ.geometryChanged,
            FJ = JJ.state.facet(ge);
          if (FJ.position != this.position && !this.madeAbsolute) {
            this.position = FJ.position;
            for (let JJ of this.manager.tooltipViews) JJ.dom.style.position = this.position;
            ZJ = !0
          }
          if (FJ.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = FJ.parent, this.createContainer();
            for (let JJ of this.manager.tooltipViews) this.container.appendChild(JJ.dom);
            ZJ = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          ZJ && this.maybeMeasure()
        }
        createTooltip(JJ, cJ) {
          let ZJ = JJ.create(this.view),
            FJ = cJ ? cJ.dom : null;
          if (ZJ.dom.classList.add("cm-tooltip"), JJ.arrow && !ZJ.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let JJ = document.createElement("div");
            JJ.className = "cm-tooltip-arrow", ZJ.dom.appendChild(JJ)
          }
          return ZJ.dom.style.position = this.position, ZJ.dom.style.top = be, ZJ.dom.style.left = "0px", this.container.insertBefore(ZJ.dom, FJ), ZJ.mount && ZJ.mount(this.view), this.resizeObserver && this.resizeObserver.observe(ZJ.dom), ZJ
        }
        destroy() {
          var JJ, cJ, ZJ;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let FJ of this.manager.tooltipViews) FJ.dom.remove(), null === (JJ = FJ.destroy) || void 0 === JJ || JJ.call(FJ);
          this.parent && this.container.remove(), null === (cJ = this.resizeObserver) || void 0 === cJ || cJ.disconnect(), null === (ZJ = this.intersectionObserver) || void 0 === ZJ || ZJ.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let JJ = 1,
            cJ = 1,
            ZJ = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: JJ
            } = this.manager.tooltipViews[0];
            if (VJ.safari) {
              let cJ = JJ.getBoundingClientRect();
              ZJ = Math.abs(cJ.top + 1e4) > 1 || Math.abs(cJ.left) > 1
            } else ZJ = !!JJ.offsetParent && JJ.offsetParent != this.container.ownerDocument.body
          }
          if (ZJ || "absolute" == this.position)
            if (this.parent) {
              let ZJ = this.parent.getBoundingClientRect();
              ZJ.width && ZJ.height && (JJ = ZJ.width / this.parent.offsetWidth, cJ = ZJ.height / this.parent.offsetHeight)
            } else({
              scaleX: JJ,
              scaleY: cJ
            } = this.view.viewState);
          let FJ = this.view.scrollDOM.getBoundingClientRect(),
            UJ = AZ(this.view);
          return {
            visible: {
              left: FJ.left + UJ.left,
              top: FJ.top + UJ.top,
              right: FJ.right - UJ.right,
              bottom: FJ.bottom - UJ.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((JJ, cJ) => {
              let ZJ = this.manager.tooltipViews[cJ];
              return ZJ.getCoords ? ZJ.getCoords(JJ.pos) : this.view.coordsAtPos(JJ.pos)
            })),
            size: this.manager.tooltipViews.map((JJ => {
              let {
                dom: cJ
              } = JJ;
              return cJ.getBoundingClientRect()
            })),
            space: this.view.state.facet(ge).tooltipSpace(this.view),
            scaleX: JJ,
            scaleY: cJ,
            makeAbsolute: ZJ
          }
        }
        writeMeasure(JJ) {
          var cJ;
          if (JJ.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let JJ of this.manager.tooltipViews) JJ.dom.style.position = "absolute"
          }
          let {
            visible: ZJ,
            space: FJ,
            scaleX: UJ,
            scaleY: eJ
          } = JJ, XJ = [];
          for (let AJ = 0; AJ < this.manager.tooltips.length; AJ++) {
            let qJ = this.manager.tooltips[AJ],
              jJ = this.manager.tooltipViews[AJ],
              {
                dom: YJ
              } = jJ,
              hJ = JJ.pos[AJ],
              DJ = JJ.size[AJ];
            if (!hJ || !1 !== qJ.clip && (hJ.bottom <= Math.max(ZJ.top, FJ.top) || hJ.top >= Math.min(ZJ.bottom, FJ.bottom) || hJ.right < Math.max(ZJ.left, FJ.left) - .1 || hJ.left > Math.min(ZJ.right, FJ.right) + .1)) {
              YJ.style.top = be;
              continue
            }
            let sJ = qJ.arrow ? jJ.dom.querySelector(".cm-tooltip-arrow") : null,
              nJ = sJ ? 7 : 0,
              GJ = DJ.right - DJ.left,
              fJ = null !== (cJ = He.get(jJ)) && void 0 !== cJ ? cJ : DJ.bottom - DJ.top,
              xJ = jJ.offset || de,
              rJ = this.view.textDirection == jc.LTR,
              vJ = DJ.width > FJ.right - FJ.left ? rJ ? FJ.left : FJ.right - DJ.width : rJ ? Math.max(FJ.left, Math.min(hJ.left - (sJ ? 14 : 0) + xJ.x, FJ.right - GJ)) : Math.min(Math.max(FJ.left, hJ.left - GJ + (sJ ? 14 : 0) - xJ.x), FJ.right - GJ),
              mJ = this.above[AJ];
            !qJ.strictSide && (mJ ? hJ.top - fJ - nJ - xJ.y < FJ.top : hJ.bottom + fJ + nJ + xJ.y > FJ.bottom) && mJ == FJ.bottom - hJ.bottom > hJ.top - FJ.top && (mJ = this.above[AJ] = !mJ);
            let QJ = (mJ ? hJ.top - FJ.top : FJ.bottom - hJ.bottom) - nJ;
            if (QJ < fJ && !1 !== jJ.resize) {
              if (QJ < this.view.defaultLineHeight) {
                YJ.style.top = be;
                continue
              }
              He.set(jJ, fJ), YJ.style.height = (fJ = QJ) / eJ + "px"
            } else YJ.style.height && (YJ.style.height = "");
            let EJ = mJ ? hJ.top - fJ - nJ - xJ.y : hJ.bottom + nJ + xJ.y,
              VJ = vJ + GJ;
            if (!0 !== jJ.overlap)
              for (let JJ of XJ) JJ.left < VJ && JJ.right > vJ && JJ.top < EJ + fJ && JJ.bottom > EJ && (EJ = mJ ? JJ.top - fJ - 2 - nJ : JJ.bottom + nJ + 2);
            if ("absolute" == this.position ? (YJ.style.top = (EJ - JJ.parent.top) / eJ + "px", ke(YJ, (vJ - JJ.parent.left) / UJ)) : (YJ.style.top = EJ / eJ + "px", ke(YJ, vJ / UJ)), sJ) {
              let JJ = hJ.left + (rJ ? xJ.x : -xJ.x) - (vJ + 14 - 7);
              sJ.style.left = JJ / UJ + "px"
            }!0 !== jJ.overlap && XJ.push({
              left: vJ,
              top: EJ,
              right: VJ,
              bottom: EJ + fJ
            }), YJ.classList.toggle("cm-tooltip-above", mJ), YJ.classList.toggle("cm-tooltip-below", !mJ), jJ.positioned && jJ.positioned(JJ.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let JJ of this.manager.tooltipViews) JJ.dom.style.top = be
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function ke(JJ, cJ) {
      let ZJ = parseInt(JJ.style.left, 10);
      (isNaN(ZJ) || Math.abs(cJ - ZJ) > 1) && (JJ.style.left = cJ + "px")
    }
    const pe = yU.baseTheme({
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
      de = {
        x: 0,
        y: 0
      },
      ze = FJ.p.define({
        enables: [Pe, pe]
      }),
      Ne = FJ.p.define({
        combine: JJ => JJ.reduce(((JJ, cJ) => JJ.concat(cJ)), [])
      });
    class Oe {
      static create(JJ) {
        return new Oe(JJ)
      }
      constructor(JJ) {
        this.view = JJ, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new we(JJ, Ne, ((JJ, cJ) => this.createHostedView(JJ, cJ)), (JJ => JJ.dom.remove()))
      }
      createHostedView(JJ, cJ) {
        let ZJ = JJ.create(this.view);
        return ZJ.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(ZJ.dom, cJ ? cJ.dom.nextSibling : this.dom.firstChild), this.mounted && ZJ.mount && ZJ.mount(this.view), ZJ
      }
      mount(JJ) {
        for (let cJ of this.manager.tooltipViews) cJ.mount && cJ.mount(JJ);
        this.mounted = !0
      }
      positioned(JJ) {
        for (let cJ of this.manager.tooltipViews) cJ.positioned && cJ.positioned(JJ)
      }
      update(JJ) {
        this.manager.update(JJ)
      }
      destroy() {
        var JJ;
        for (let cJ of this.manager.tooltipViews) null === (JJ = cJ.destroy) || void 0 === JJ || JJ.call(cJ)
      }
      passProp(JJ) {
        let cJ;
        for (let ZJ of this.manager.tooltipViews) {
          let FJ = ZJ[JJ];
          if (void 0 !== FJ)
            if (void 0 === cJ) cJ = FJ;
            else if (cJ !== FJ) return
        }
        return cJ
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
    const Te = ze.compute([Ne], (JJ => {
      let cJ = JJ.facet(Ne);
      return 0 === cJ.length ? null : {
        pos: Math.min(...cJ.map((JJ => JJ.pos))),
        end: Math.max(...cJ.map((JJ => {
          var cJ;
          return null !== (cJ = JJ.end) && void 0 !== cJ ? cJ : JJ.pos
        }))),
        create: Oe.create,
        above: cJ[0].above,
        arrow: cJ.some((JJ => JJ.arrow))
      }
    }));
    class Ce {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        this.view = JJ, this.source = cJ, this.field = ZJ, this.setHover = FJ, this.hoverTime = UJ, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: JJ.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), JJ.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), JJ.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let JJ = Date.now() - this.lastMove.time;
        JJ < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - JJ) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: JJ,
          lastMove: cJ
        } = this, ZJ = JJ.docView.tile.nearest(cJ.target);
        if (!ZJ) return;
        let FJ, UJ = 1;
        if (ZJ.isWidget()) FJ = ZJ.posAtStart;
        else {
          if (FJ = JJ.posAtCoords(cJ), null == FJ) return;
          let ZJ = JJ.coordsAtPos(FJ);
          if (!ZJ || cJ.y < ZJ.top || cJ.y > ZJ.bottom || cJ.x < ZJ.left - JJ.defaultCharacterWidth || cJ.x > ZJ.right + JJ.defaultCharacterWidth) return;
          let eJ = JJ.bidiSpans(JJ.state.doc.lineAt(FJ)).find((JJ => JJ.from <= FJ && JJ.to >= FJ)),
            XJ = eJ && eJ.dir == jc.RTL ? -1 : 1;
          UJ = cJ.x < ZJ.left ? -XJ : XJ
        }
        let eJ = this.source(JJ, FJ, UJ);
        if (null === eJ || void 0 === eJ ? void 0 : eJ.then) {
          let cJ = this.pending = {
            pos: FJ
          };
          eJ.then((ZJ => {
            this.pending == cJ && (this.pending = null, !ZJ || Array.isArray(ZJ) && !ZJ.length || JJ.dispatch({
              effects: this.setHover.of(Array.isArray(ZJ) ? ZJ : [ZJ])
            }))
          }), (cJ => ic(JJ.state, cJ, "hover tooltip")))
        } else !eJ || Array.isArray(eJ) && !eJ.length || JJ.dispatch({
          effects: this.setHover.of(Array.isArray(eJ) ? eJ : [eJ])
        })
      }
      get tooltip() {
        let JJ = this.view.plugin(Pe),
          cJ = JJ ? JJ.manager.tooltips.findIndex((JJ => JJ.create == Oe.create)) : -1;
        return cJ > -1 ? JJ.manager.tooltipViews[cJ] : null
      }
      mousemove(JJ) {
        var cJ, ZJ;
        this.lastMove = {
          x: JJ.clientX,
          y: JJ.clientY,
          target: JJ.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: FJ,
          tooltip: UJ
        } = this;
        if (FJ.length && UJ && ! function(JJ, cJ) {
            let ZJ, {
              left: FJ,
              right: UJ,
              top: eJ,
              bottom: XJ
            } = JJ.getBoundingClientRect();
            if (ZJ = JJ.querySelector(".cm-tooltip-arrow")) {
              let JJ = ZJ.getBoundingClientRect();
              eJ = Math.min(JJ.top, eJ), XJ = Math.max(JJ.bottom, XJ)
            }
            return cJ.clientX >= FJ - ue && cJ.clientX <= UJ + ue && cJ.clientY >= eJ - ue && cJ.clientY <= XJ + ue
          }(UJ.dom, JJ) || this.pending) {
          let {
            pos: UJ
          } = FJ[0] || this.pending, eJ = null !== (ZJ = null === (cJ = FJ[0]) || void 0 === cJ ? void 0 : cJ.end) && void 0 !== ZJ ? ZJ : UJ;
          (UJ == eJ ? this.view.posAtCoords(this.lastMove) == UJ : function(JJ, cJ, ZJ, FJ, UJ) {
            let eJ = JJ.scrollDOM.getBoundingClientRect(),
              XJ = JJ.documentTop + JJ.documentPadding.top + JJ.contentHeight;
            if (eJ.left > FJ || eJ.right < FJ || eJ.top > UJ || Math.min(eJ.bottom, XJ) < UJ) return !1;
            let AJ = JJ.posAtCoords({
              x: FJ,
              y: UJ
            }, !1);
            return AJ >= cJ && AJ <= ZJ
          }(this.view, UJ, eJ, JJ.clientX, JJ.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(JJ) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: cJ
        } = this;
        if (cJ.length) {
          let {
            tooltip: cJ
          } = this;
          cJ && cJ.dom.contains(JJ.relatedTarget) ? this.watchTooltipLeave(cJ.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(JJ) {
        let cJ = ZJ => {
          JJ.removeEventListener("mouseleave", cJ), this.active.length && !this.view.dom.contains(ZJ.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        JJ.addEventListener("mouseleave", cJ)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const ue = 4;

    function ie(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ZJ = FJ.A.define(),
        UJ = FJ.E.define({
          create: () => [],
          update(JJ, UJ) {
            if (JJ.length && (cJ.hideOnChange && (UJ.docChanged || UJ.selection) ? JJ = [] : cJ.hideOn && (JJ = JJ.filter((JJ => !cJ.hideOn(UJ, JJ)))), UJ.docChanged)) {
              let cJ = [];
              for (let ZJ of JJ) {
                let JJ = UJ.changes.mapPos(ZJ.pos, -1, FJ.r.TrackDel);
                if (null != JJ) {
                  let FJ = Object.assign(Object.create(null), ZJ);
                  FJ.pos = JJ, null != FJ.end && (FJ.end = UJ.changes.mapPos(FJ.end)), cJ.push(FJ)
                }
              }
              JJ = cJ
            }
            for (let cJ of UJ.effects) cJ.is(ZJ) && (JJ = cJ.value), cJ.is(Le) && (JJ = []);
            return JJ
          },
          provide: JJ => Ne.from(JJ)
        });
      return {
        active: UJ,
        extension: [UJ, Bc.define((FJ => new Ce(FJ, JJ, UJ, ZJ, cJ.hoverTime || 300))), Te]
      }
    }

    function Re(JJ, cJ) {
      let ZJ = JJ.plugin(Pe);
      if (!ZJ) return null;
      let FJ = ZJ.manager.tooltips.indexOf(cJ);
      return FJ < 0 ? null : ZJ.manager.tooltipViews[FJ]
    }
    const Le = FJ.A.define();
    const ae = FJ.p.define({
      combine(JJ) {
        let cJ, ZJ;
        for (let FJ of JJ) cJ = cJ || FJ.topContainer, ZJ = ZJ || FJ.bottomContainer;
        return {
          topContainer: cJ,
          bottomContainer: ZJ
        }
      }
    });

    function Be(JJ, cJ) {
      let ZJ = JJ.plugin(te),
        FJ = ZJ ? ZJ.specs.indexOf(cJ) : -1;
      return FJ > -1 ? ZJ.panels[FJ] : null
    }
    const te = Bc.fromClass(class {
      constructor(JJ) {
        this.input = JJ.state.facet(JX), this.specs = this.input.filter((JJ => JJ)), this.panels = this.specs.map((cJ => cJ(JJ)));
        let cJ = JJ.state.facet(ae);
        this.top = new oe(JJ, !0, cJ.topContainer), this.bottom = new oe(JJ, !1, cJ.bottomContainer), this.top.sync(this.panels.filter((JJ => JJ.top))), this.bottom.sync(this.panels.filter((JJ => !JJ.top)));
        for (let ZJ of this.panels) ZJ.dom.classList.add("cm-panel"), ZJ.mount && ZJ.mount()
      }
      update(JJ) {
        let cJ = JJ.state.facet(ae);
        this.top.container != cJ.topContainer && (this.top.sync([]), this.top = new oe(JJ.view, !0, cJ.topContainer)), this.bottom.container != cJ.bottomContainer && (this.bottom.sync([]), this.bottom = new oe(JJ.view, !1, cJ.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let ZJ = JJ.state.facet(JX);
        if (ZJ != this.input) {
          let cJ = ZJ.filter((JJ => JJ)),
            FJ = [],
            UJ = [],
            eJ = [],
            XJ = [];
          for (let ZJ of cJ) {
            let cJ, AJ = this.specs.indexOf(ZJ);
            AJ < 0 ? (cJ = ZJ(JJ.view), XJ.push(cJ)) : (cJ = this.panels[AJ], cJ.update && cJ.update(JJ)), FJ.push(cJ), (cJ.top ? UJ : eJ).push(cJ)
          }
          this.specs = cJ, this.panels = FJ, this.top.sync(UJ), this.bottom.sync(eJ);
          for (let JJ of XJ) JJ.dom.classList.add("cm-panel"), JJ.mount && JJ.mount()
        } else
          for (let FJ of this.panels) FJ.update && FJ.update(JJ)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: JJ => yU.scrollMargins.of((cJ => {
        let ZJ = cJ.plugin(JJ);
        return ZJ && {
          top: ZJ.top.scrollMargin(),
          bottom: ZJ.bottom.scrollMargin()
        }
      }))
    });
    class oe {
      constructor(JJ, cJ, ZJ) {
        this.view = JJ, this.top = cJ, this.container = ZJ, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(JJ) {
        for (let cJ of this.panels) cJ.destroy && JJ.indexOf(cJ) < 0 && cJ.destroy();
        this.panels = JJ, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let JJ = this.container || this.view.dom;
          JJ.insertBefore(this.dom, this.top ? JJ.firstChild : null)
        }
        let JJ = this.dom.firstChild;
        for (let cJ of this.panels)
          if (cJ.dom.parentNode == this.dom) {
            for (; JJ != cJ.dom;) JJ = le(JJ);
            JJ = JJ.nextSibling
          } else this.dom.insertBefore(cJ.dom, JJ);
        for (; JJ;) JJ = le(JJ)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let JJ of this.classes.split(" ")) JJ && this.container.classList.remove(JJ);
          for (let JJ of (this.classes = this.view.themeClasses).split(" ")) JJ && this.container.classList.add(JJ)
        }
      }
    }

    function le(JJ) {
      let cJ = JJ.nextSibling;
      return JJ.remove(), cJ
    }
    const JX = FJ.p.define({
      enables: te
    });

    function cX(JJ, cJ) {
      let ZJ, UJ = new Promise((JJ => ZJ = JJ)),
        eJ = JJ => function(JJ, cJ, ZJ) {
          let FJ = cJ.content ? cJ.content(JJ, (() => XJ(null))) : null;
          if (!FJ) {
            if (FJ = (0, hJ.d)("form"), cJ.input) {
              let JJ = (0, hJ.d)("input", cJ.input);
              /^(text|password|number|email|tel|url)$/.test(JJ.type) && JJ.classList.add("cm-textfield"), JJ.name || (JJ.name = "input"), FJ.appendChild((0, hJ.d)("label", (cJ.label || "") + ": ", JJ))
            } else FJ.appendChild(document.createTextNode(cJ.label || ""));
            FJ.appendChild(document.createTextNode(" ")), FJ.appendChild((0, hJ.d)("button", {
              class: "cm-button",
              type: "submit"
            }, cJ.submitLabel || "OK"))
          }
          let UJ = "FORM" == FJ.nodeName ? [FJ] : FJ.querySelectorAll("form");
          for (let AJ = 0; AJ < UJ.length; AJ++) {
            let JJ = UJ[AJ];
            JJ.addEventListener("keydown", (cJ => {
              27 == cJ.keyCode ? (cJ.preventDefault(), XJ(null)) : 13 == cJ.keyCode && (cJ.preventDefault(), XJ(JJ))
            })), JJ.addEventListener("submit", (cJ => {
              cJ.preventDefault(), XJ(JJ)
            }))
          }
          let eJ = (0, hJ.d)("div", FJ, (0, hJ.d)("button", {
            onclick: () => XJ(null),
            "aria-label": JJ.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          cJ.class && (eJ.className = cJ.class);

          function XJ(cJ) {
            eJ.contains(eJ.ownerDocument.activeElement) && JJ.focus(), ZJ(cJ)
          }
          return eJ.classList.add("cm-dialog"), {
            dom: eJ,
            top: cJ.top,
            mount: () => {
              if (cJ.focus) {
                let JJ;
                JJ = "string" == typeof cJ.focus ? FJ.querySelector(cJ.focus) : FJ.querySelector("input") || FJ.querySelector("button"), JJ && "select" in JJ ? JJ.select() : JJ && "focus" in JJ && JJ.focus()
              }
            }
          }
        }(JJ, cJ, ZJ);
      JJ.state.field(ZX, !1) ? JJ.dispatch({
        effects: FX.of(eJ)
      }) : JJ.dispatch({
        effects: FJ.A.appendConfig.of(ZX.init((() => [eJ])))
      });
      let XJ = UX.of(eJ);
      return {
        close: XJ,
        result: UJ.then((cJ => ((JJ.win.queueMicrotask || (cJ => JJ.win.setTimeout(cJ, 10)))((() => {
          JJ.state.field(ZX).indexOf(eJ) > -1 && JJ.dispatch({
            effects: XJ
          })
        })), cJ)))
      }
    }
    const ZX = FJ.E.define({
        create: () => [],
        update(JJ, cJ) {
          for (let ZJ of cJ.effects) ZJ.is(FX) ? JJ = [ZJ.value].concat(JJ) : ZJ.is(UX) && (JJ = JJ.filter((JJ => JJ != ZJ.value)));
          return JJ
        },
        provide: JJ => JX.computeN([JJ], (cJ => cJ.field(JJ)))
      }),
      FX = FJ.A.define(),
      UX = FJ.A.define();
    class eX extends FJ.x {
      compare(JJ) {
        return this == JJ || this.constructor == JJ.constructor && this.eq(JJ)
      }
      eq(JJ) {
        return !1
      }
      destroy(JJ) {}
    }
    eX.prototype.elementClass = "", eX.prototype.toDOM = void 0, eX.prototype.mapMode = FJ.r.TrackBefore, eX.prototype.startSide = eX.prototype.endSide = -1, eX.prototype.point = !0;
    const XX = FJ.p.define(),
      AX = FJ.p.define(),
      qX = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => FJ.v.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      jX = FJ.p.define();

    function YX(JJ) {
      return [DX(), jX.of({
        ...qX,
        ...JJ
      })]
    }
    const hX = FJ.p.define({
      combine: JJ => JJ.some((JJ => JJ))
    });

    function DX(JJ) {
      let cJ = [sX];
      return JJ && !1 === JJ.fixed && cJ.push(hX.of(!0)), cJ
    }
    const sX = Bc.fromClass(class {
      constructor(JJ) {
        this.view = JJ, this.domAfter = null, this.prevViewport = JJ.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = JJ.state.facet(jX).map((cJ => new xX(JJ, cJ))), this.fixed = !JJ.state.facet(hX);
        for (let cJ of this.gutters) "after" == cJ.config.side ? this.getDOMAfter().appendChild(cJ.dom) : this.dom.appendChild(cJ.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), JJ.scrollDOM.insertBefore(this.dom, JJ.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(JJ) {
        if (this.updateGutters(JJ)) {
          let cJ = this.prevViewport,
            ZJ = JJ.view.viewport,
            FJ = Math.min(cJ.to, ZJ.to) - Math.max(cJ.from, ZJ.from);
          this.syncGutters(FJ < .8 * (ZJ.to - ZJ.from))
        }
        if (JJ.geometryChanged) {
          let JJ = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = JJ, this.domAfter && (this.domAfter.style.minHeight = JJ)
        }
        this.view.state.facet(hX) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = JJ.view.viewport
      }
      syncGutters(JJ) {
        let cJ = this.dom.nextSibling;
        JJ && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let ZJ = FJ.v.iter(this.view.state.facet(XX), this.view.viewport.from),
          UJ = [],
          eJ = this.gutters.map((JJ => new fX(JJ, this.view.viewport, -this.view.documentPadding.top)));
        for (let FJ of this.view.viewportLineBlocks)
          if (UJ.length && (UJ = []), Array.isArray(FJ.type)) {
            let JJ = !0;
            for (let cJ of FJ.type)
              if (cJ.type == wJ.Text && JJ) {
                GX(ZJ, UJ, cJ.from);
                for (let JJ of eJ) JJ.line(this.view, cJ, UJ);
                JJ = !1
              } else if (cJ.widget)
              for (let JJ of eJ) JJ.widget(this.view, cJ)
          } else if (FJ.type == wJ.Text) {
          GX(ZJ, UJ, FJ.from);
          for (let JJ of eJ) JJ.line(this.view, FJ, UJ)
        } else if (FJ.widget)
          for (let JJ of eJ) JJ.widget(this.view, FJ);
        for (let FJ of eJ) FJ.finish();
        JJ && (this.view.scrollDOM.insertBefore(this.dom, cJ), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(JJ) {
        let cJ = JJ.startState.facet(jX),
          ZJ = JJ.state.facet(jX),
          UJ = JJ.docChanged || JJ.heightChanged || JJ.viewportChanged || !FJ.v.eq(JJ.startState.facet(XX), JJ.state.facet(XX), JJ.view.viewport.from, JJ.view.viewport.to);
        if (cJ == ZJ)
          for (let FJ of this.gutters) FJ.update(JJ) && (UJ = !0);
        else {
          UJ = !0;
          let FJ = [];
          for (let UJ of ZJ) {
            let ZJ = cJ.indexOf(UJ);
            ZJ < 0 ? FJ.push(new xX(this.view, UJ)) : (this.gutters[ZJ].update(JJ), FJ.push(this.gutters[ZJ]))
          }
          for (let JJ of this.gutters) JJ.dom.remove(), FJ.indexOf(JJ) < 0 && JJ.destroy();
          for (let JJ of FJ) "after" == JJ.config.side ? this.getDOMAfter().appendChild(JJ.dom) : this.dom.appendChild(JJ.dom);
          this.gutters = FJ
        }
        return UJ
      }
      destroy() {
        for (let JJ of this.gutters) JJ.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: JJ => yU.scrollMargins.of((cJ => {
        let ZJ = cJ.plugin(JJ);
        if (!ZJ || 0 == ZJ.gutters.length || !ZJ.fixed) return null;
        let FJ = ZJ.dom.offsetWidth * cJ.scaleX,
          UJ = ZJ.domAfter ? ZJ.domAfter.offsetWidth * cJ.scaleX : 0;
        return cJ.textDirection == jc.LTR ? {
          left: FJ,
          right: UJ
        } : {
          right: FJ,
          left: UJ
        }
      }))
    });

    function nX(JJ) {
      return Array.isArray(JJ) ? JJ : [JJ]
    }

    function GX(JJ, cJ, ZJ) {
      for (; JJ.value && JJ.from <= ZJ;) JJ.from == ZJ && cJ.push(JJ.value), JJ.next()
    }
    class fX {
      constructor(JJ, cJ, ZJ) {
        this.gutter = JJ, this.height = ZJ, this.i = 0, this.cursor = FJ.v.iter(JJ.markers, cJ.from)
      }
      addElement(JJ, cJ, ZJ) {
        let {
          gutter: FJ
        } = this, UJ = (cJ.top - this.height) / JJ.scaleY, eJ = cJ.height / JJ.scaleY;
        if (this.i == FJ.elements.length) {
          let cJ = new rX(JJ, eJ, UJ, ZJ);
          FJ.elements.push(cJ), FJ.dom.appendChild(cJ.dom)
        } else FJ.elements[this.i].update(JJ, eJ, UJ, ZJ);
        this.height = cJ.bottom, this.i++
      }
      line(JJ, cJ, ZJ) {
        let FJ = [];
        GX(this.cursor, FJ, cJ.from), ZJ.length && (FJ = FJ.concat(ZJ));
        let UJ = this.gutter.config.lineMarker(JJ, cJ, FJ);
        UJ && FJ.unshift(UJ);
        let eJ = this.gutter;
        (0 != FJ.length || eJ.config.renderEmptyElements) && this.addElement(JJ, cJ, FJ)
      }
      widget(JJ, cJ) {
        let ZJ = this.gutter.config.widgetMarker(JJ, cJ.widget, cJ),
          FJ = ZJ ? [ZJ] : null;
        for (let UJ of JJ.state.facet(AX)) {
          let ZJ = UJ(JJ, cJ.widget, cJ);
          ZJ && (FJ || (FJ = [])).push(ZJ)
        }
        FJ && this.addElement(JJ, cJ, FJ)
      }
      finish() {
        let JJ = this.gutter;
        for (; JJ.elements.length > this.i;) {
          let cJ = JJ.elements.pop();
          JJ.dom.removeChild(cJ.dom), cJ.destroy()
        }
      }
    }
    class xX {
      constructor(JJ, cJ) {
        this.view = JJ, this.config = cJ, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let ZJ in cJ.domEventHandlers) this.dom.addEventListener(ZJ, (FJ => {
          let UJ, eJ = FJ.target;
          if (eJ != this.dom && this.dom.contains(eJ)) {
            for (; eJ.parentNode != this.dom;) eJ = eJ.parentNode;
            let JJ = eJ.getBoundingClientRect();
            UJ = (JJ.top + JJ.bottom) / 2
          } else UJ = FJ.clientY;
          let XJ = JJ.lineBlockAtHeight(UJ - JJ.documentTop);
          cJ.domEventHandlers[ZJ](JJ, XJ, FJ) && FJ.preventDefault()
        }));
        this.markers = nX(cJ.markers(JJ)), cJ.initialSpacer && (this.spacer = new rX(JJ, 0, 0, [cJ.initialSpacer(JJ)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(JJ) {
        let cJ = this.markers;
        if (this.markers = nX(this.config.markers(JJ.view)), this.spacer && this.config.updateSpacer) {
          let cJ = this.config.updateSpacer(this.spacer.markers[0], JJ);
          cJ != this.spacer.markers[0] && this.spacer.update(JJ.view, 0, 0, [cJ])
        }
        let ZJ = JJ.view.viewport;
        return !FJ.v.eq(this.markers, cJ, ZJ.from, ZJ.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(JJ)
      }
      destroy() {
        for (let JJ of this.elements) JJ.destroy()
      }
    }
    class rX {
      constructor(JJ, cJ, ZJ, FJ) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(JJ, cJ, ZJ, FJ)
      }
      update(JJ, cJ, ZJ, FJ) {
        this.height != cJ && (this.height = cJ, this.dom.style.height = cJ + "px"), this.above != ZJ && (this.dom.style.marginTop = (this.above = ZJ) ? ZJ + "px" : ""),
          function(JJ, cJ) {
            if (JJ.length != cJ.length) return !1;
            for (let ZJ = 0; ZJ < JJ.length; ZJ++)
              if (!JJ[ZJ].compare(cJ[ZJ])) return !1;
            return !0
          }(this.markers, FJ) || this.setMarkers(JJ, FJ)
      }
      setMarkers(JJ, cJ) {
        let ZJ = "cm-gutterElement",
          FJ = this.dom.firstChild;
        for (let UJ = 0, eJ = 0;;) {
          let XJ = eJ,
            AJ = UJ < cJ.length ? cJ[UJ++] : null,
            qJ = !1;
          if (AJ) {
            let JJ = AJ.elementClass;
            JJ && (ZJ += " " + JJ);
            for (let cJ = eJ; cJ < this.markers.length; cJ++)
              if (this.markers[cJ].compare(AJ)) {
                XJ = cJ, qJ = !0;
                break
              }
          } else XJ = this.markers.length;
          for (; eJ < XJ;) {
            let JJ = this.markers[eJ++];
            if (JJ.toDOM) {
              JJ.destroy(FJ);
              let cJ = FJ.nextSibling;
              FJ.remove(), FJ = cJ
            }
          }
          if (!AJ) break;
          AJ.toDOM && (qJ ? FJ = FJ.nextSibling : this.dom.insertBefore(AJ.toDOM(JJ), FJ)), qJ && eJ++
        }
        this.dom.className = ZJ, this.markers = cJ
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const vX = FJ.p.define(),
      mX = FJ.p.define(),
      QX = FJ.p.define({
        combine: JJ => (0, FJ.S)(JJ, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(JJ, cJ) {
            let ZJ = Object.assign({}, JJ);
            for (let FJ in cJ) {
              let JJ = ZJ[FJ],
                UJ = cJ[FJ];
              ZJ[FJ] = JJ ? (cJ, ZJ, FJ) => JJ(cJ, ZJ, FJ) || UJ(cJ, ZJ, FJ) : UJ
            }
            return ZJ
          }
        })
      });
    class EX extends eX {
      constructor(JJ) {
        super(), this.number = JJ
      }
      eq(JJ) {
        return this.number == JJ.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function VX(JJ, cJ) {
      return JJ.state.facet(QX).formatNumber(cJ, JJ.state)
    }
    const KX = jX.compute([QX], (JJ => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: JJ => JJ.state.facet(vX),
      lineMarker: (JJ, cJ, ZJ) => ZJ.some((JJ => JJ.toDOM)) ? null : new EX(VX(JJ, JJ.state.doc.lineAt(cJ.from).number)),
      widgetMarker: (JJ, cJ, ZJ) => {
        for (let FJ of JJ.state.facet(mX)) {
          let UJ = FJ(JJ, cJ, ZJ);
          if (UJ) return UJ
        }
        return null
      },
      lineMarkerChange: JJ => JJ.startState.facet(QX) != JJ.state.facet(QX),
      initialSpacer: JJ => new EX(VX(JJ, SX(JJ.state.doc.lines))),
      updateSpacer(JJ, cJ) {
        let ZJ = VX(cJ.view, SX(cJ.view.state.doc.lines));
        return ZJ == JJ.number ? JJ : new EX(ZJ)
      },
      domEventHandlers: JJ.facet(QX).domEventHandlers,
      side: "before"
    })));

    function yX() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [QX.of(JJ), DX(), KX]
    }

    function SX(JJ) {
      let cJ = 9;
      for (; cJ < JJ;) cJ = 10 * cJ + 9;
      return cJ
    }
    const IX = new class extends eX {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      MX = XX.compute(["selection"], (JJ => {
        let cJ = [],
          ZJ = -1;
        for (let FJ of JJ.selection.ws) {
          let UJ = JJ.doc.lineAt(FJ.head).from;
          UJ > ZJ && (ZJ = UJ, cJ.push(IX.range(UJ)))
        }
        return FJ.v.of(cJ)
      }));

    function bX() {
      return MX
    }
  },
  40080: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ,
      f: () => sJ,
      h: () => XJ,
      i: () => YJ,
      k: () => jJ,
      n: () => gJ,
      o: () => PJ,
      r: () => HJ,
      t: () => nJ
    });
    const FJ = 1024;
    let UJ = 0;
    class eJ {
      constructor(JJ, cJ) {
        this.from = JJ, this.to = cJ
      }
    }
    class XJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = UJ++, this.perNode = !!JJ.perNode, this.deserialize = JJ.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = JJ.combine || null
      }
      add(JJ) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof JJ && (JJ = jJ.match(JJ)), cJ => {
          let ZJ = JJ(cJ);
          return void 0 === ZJ ? null : [this, ZJ]
        }
      }
    }
    XJ.closedBy = new XJ({
      deserialize: JJ => JJ.split(" ")
    }), XJ.openedBy = new XJ({
      deserialize: JJ => JJ.split(" ")
    }), XJ.group = new XJ({
      deserialize: JJ => JJ.split(" ")
    }), XJ.isolate = new XJ({
      deserialize: JJ => {
        if (JJ && "rtl" != JJ && "ltr" != JJ && "auto" != JJ) throw new RangeError("Invalid value for isolate: " + JJ);
        return JJ || "auto"
      }
    }), XJ.contextHash = new XJ({
      perNode: !0
    }), XJ.lookAhead = new XJ({
      perNode: !0
    }), XJ.mounted = new XJ({
      perNode: !0
    });
    class AJ {
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = JJ, this.overlay = cJ, this.parser = ZJ, this.bracketed = FJ
      }
      static get(JJ) {
        return JJ && JJ.props && JJ.props[XJ.mounted.id]
      }
    }
    const qJ = Object.create(null);
    class jJ {
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = JJ, this.props = cJ, this.id = ZJ, this.flags = FJ
      }
      static define(JJ) {
        let cJ = JJ.props && JJ.props.length ? Object.create(null) : qJ,
          ZJ = (JJ.top ? 1 : 0) | (JJ.skipped ? 2 : 0) | (JJ.error ? 4 : 0) | (null == JJ.name ? 8 : 0),
          FJ = new jJ(JJ.name || "", cJ, JJ.id, ZJ);
        if (JJ.props)
          for (let UJ of JJ.props)
            if (Array.isArray(UJ) || (UJ = UJ(FJ)), UJ) {
              if (UJ[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              cJ[UJ[0].id] = UJ[1]
            } return FJ
      }
      prop(JJ) {
        return this.props[JJ.id]
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
      is(JJ) {
        if ("string" == typeof JJ) {
          if (this.name == JJ) return !0;
          let cJ = this.prop(XJ.group);
          return !!cJ && cJ.indexOf(JJ) > -1
        }
        return this.id == JJ
      }
      static match(JJ) {
        let cJ = Object.create(null);
        for (let ZJ in JJ)
          for (let FJ of ZJ.split(" ")) cJ[FJ] = JJ[ZJ];
        return JJ => {
          for (let ZJ = JJ.prop(XJ.group), FJ = -1; FJ < (ZJ ? ZJ.length : 0); FJ++) {
            let UJ = cJ[FJ < 0 ? JJ.name : ZJ[FJ]];
            if (UJ) return UJ
          }
        }
      }
    }
    jJ.none = new jJ("", Object.create(null), 0, 8);
    class YJ {
      constructor(JJ) {
        this.types = JJ;
        for (let cJ = 0; cJ < JJ.length; cJ++)
          if (JJ[cJ].id != cJ) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let JJ = [];
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        for (let UJ of this.types) {
          let cJ = null;
          for (let JJ of ZJ) {
            let ZJ = JJ(UJ);
            if (ZJ) {
              cJ || (cJ = Object.assign({}, UJ.props));
              let JJ = ZJ[1],
                FJ = ZJ[0];
              FJ.combine && FJ.id in cJ && (JJ = FJ.combine(cJ[FJ.id], JJ)), cJ[FJ.id] = JJ
            }
          }
          JJ.push(cJ ? new jJ(UJ.name, cJ, UJ.id, UJ.flags) : UJ)
        }
        return new YJ(JJ)
      }
    }
    const hJ = new WeakMap,
      DJ = new WeakMap;
    var sJ;
    ! function(JJ) {
      JJ[JJ.ExcludeBuffers = 1] = "ExcludeBuffers", JJ[JJ.IncludeAnonymous = 2] = "IncludeAnonymous", JJ[JJ.IgnoreMounts = 4] = "IgnoreMounts", JJ[JJ.IgnoreOverlays = 8] = "IgnoreOverlays", JJ[JJ.EnterBracketed = 16] = "EnterBracketed"
    }(sJ || (sJ = {}));
    class nJ {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        if (this.type = JJ, this.children = cJ, this.positions = ZJ, this.length = FJ, this.props = null, UJ && UJ.length) {
          this.props = Object.create(null);
          for (let [JJ, cJ] of UJ) this.props["number" == typeof JJ ? JJ : JJ.id] = cJ
        }
      }
      toString() {
        let JJ = AJ.get(this);
        if (JJ && !JJ.overlay) return JJ.tree.toString();
        let cJ = "";
        for (let ZJ of this.children) {
          let JJ = ZJ.toString();
          JJ && (cJ && (cJ += ","), cJ += JJ)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (cJ.length ? "(" + cJ + ")" : "") : cJ
      }
      cursor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new IJ(this.topNode, JJ)
      }
      cursorAt(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = hJ.get(this) || this.topNode,
          FJ = new IJ(ZJ);
        return FJ.moveTo(JJ, cJ), hJ.set(this, FJ._tree), FJ
      }
      get topNode() {
        return new mJ(this, 0, 0, null)
      }
      resolve(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = rJ(hJ.get(this) || this.topNode, JJ, cJ, !1);
        return hJ.set(this, ZJ), ZJ
      }
      resolveInner(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = rJ(DJ.get(this) || this.topNode, JJ, cJ, !0);
        return DJ.set(this, ZJ), ZJ
      }
      resolveStack(JJ) {
        return function(JJ, cJ, ZJ) {
          let FJ = JJ.resolveInner(cJ, ZJ),
            UJ = null;
          for (let eJ = FJ instanceof mJ ? FJ : FJ.context.parent; eJ; eJ = eJ.parent)
            if (eJ.index < 0) {
              let JJ = eJ.parent;
              (UJ || (UJ = [FJ])).push(JJ.resolve(cJ, ZJ)), eJ = JJ
            } else {
              let JJ = AJ.get(eJ.tree);
              if (JJ && JJ.overlay && JJ.overlay[0].from <= cJ && JJ.overlay[JJ.overlay.length - 1].to >= cJ) {
                let XJ = new mJ(JJ.tree, JJ.overlay[0].from + eJ.from, -1, eJ);
                (UJ || (UJ = [FJ])).push(rJ(XJ, cJ, ZJ, !1))
              }
            } return UJ ? yJ(UJ) : FJ
        }(this, JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(JJ) {
        let {
          enter: cJ,
          cn: ZJ,
          from: FJ = 0,
          to: UJ = this.length
        } = JJ, eJ = JJ.mode || 0, XJ = (eJ & sJ.IncludeAnonymous) > 0;
        for (let AJ = this.cursor(eJ | sJ.IncludeAnonymous);;) {
          let JJ = !1;
          if (AJ.from <= UJ && AJ.to >= FJ && (!XJ && AJ.type.isAnonymous || !1 !== cJ(AJ))) {
            if (AJ.firstChild()) continue;
            JJ = !0
          }
          for (; JJ && ZJ && (XJ || !AJ.type.isAnonymous) && ZJ(AJ), !AJ.nextSibling();) {
            if (!AJ.parent()) return;
            JJ = !0
          }
        }
      }
      prop(JJ) {
        return JJ.perNode ? this.props ? this.props[JJ.id] : void 0 : this.type.prop(JJ)
      }
      get propValues() {
        let JJ = [];
        if (this.props)
          for (let cJ in this.props) JJ.push([+cJ, this.props[cJ]]);
        return JJ
      }
      balance() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : WJ(jJ.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((JJ, cJ, ZJ) => new nJ(this.type, JJ, cJ, ZJ, this.propValues)), JJ.makeTree || ((JJ, cJ, ZJ) => new nJ(jJ.none, JJ, cJ, ZJ)))
      }
      static build(JJ) {
        return function(JJ) {
          var cJ;
          let {
            buffer: ZJ,
            nodeSet: UJ,
            maxBufferLength: eJ = FJ,
            reused: AJ = [],
            minRepeatType: qJ = UJ.types.length
          } = JJ, jJ = Array.isArray(ZJ) ? new GJ(ZJ, ZJ.length) : ZJ, YJ = UJ.types, hJ = 0, DJ = 0;

          function sJ(JJ, cJ, ZJ, FJ, XJ, nJ) {
            let {
              id: GJ,
              start: VJ,
              end: KJ,
              size: yJ
            } = jJ, SJ = DJ, IJ = hJ;
            if (yJ < 0) {
              if (jJ.next(), -1 == yJ) {
                let cJ = AJ[GJ];
                return ZJ.push(cJ), void FJ.push(VJ - JJ)
              }
              if (-3 == yJ) return void(hJ = GJ);
              if (-4 == yJ) return void(DJ = GJ);
              throw new RangeError(`Unrecognized record size: ${yJ}`)
            }
            let MJ, bJ, wJ = YJ[GJ],
              gJ = VJ - JJ;
            if (KJ - VJ <= eJ && (bJ = QJ(jJ.pos - cJ, XJ))) {
              let cJ = new Uint16Array(bJ.size - bJ.skip),
                ZJ = jJ.pos - bJ.size,
                FJ = cJ.length;
              for (; jJ.pos > ZJ;) FJ = EJ(bJ.start, cJ, FJ);
              MJ = new fJ(cJ, KJ - bJ.start, UJ), gJ = bJ.start - JJ
            } else {
              let JJ = jJ.pos - yJ;
              jJ.next();
              let cJ = [],
                ZJ = [],
                FJ = GJ >= qJ ? GJ : -1,
                UJ = 0,
                XJ = KJ;
              for (; jJ.pos > JJ;) FJ >= 0 && jJ.id == FJ && jJ.size >= 0 ? (jJ.end <= XJ - eJ && (vJ(cJ, ZJ, VJ, UJ, jJ.end, XJ, FJ, SJ, IJ), UJ = cJ.length, XJ = jJ.end), jJ.next()) : nJ > 2500 ? xJ(VJ, JJ, cJ, ZJ) : sJ(VJ, JJ, cJ, ZJ, FJ, nJ + 1);
              if (FJ >= 0 && UJ > 0 && UJ < cJ.length && vJ(cJ, ZJ, VJ, UJ, VJ, XJ, FJ, SJ, IJ), cJ.reverse(), ZJ.reverse(), FJ > -1 && UJ > 0) {
                let JJ = rJ(wJ, IJ);
                MJ = WJ(wJ, cJ, ZJ, 0, cJ.length, 0, KJ - VJ, JJ, JJ)
              } else MJ = mJ(wJ, cJ, ZJ, KJ - VJ, SJ - KJ, IJ)
            }
            ZJ.push(MJ), FJ.push(gJ)
          }

          function xJ(JJ, cJ, ZJ, FJ) {
            let XJ = [],
              AJ = 0,
              qJ = -1;
            for (; jJ.pos > cJ;) {
              let {
                id: JJ,
                start: cJ,
                end: ZJ,
                size: FJ
              } = jJ;
              if (FJ > 4) jJ.next();
              else {
                if (qJ > -1 && cJ < qJ) break;
                qJ < 0 && (qJ = ZJ - eJ), XJ.push(JJ, cJ, ZJ), AJ++, jJ.next()
              }
            }
            if (AJ) {
              let cJ = new Uint16Array(4 * AJ),
                eJ = XJ[XJ.length - 2];
              for (let JJ = XJ.length - 3, ZJ = 0; JJ >= 0; JJ -= 3) cJ[ZJ++] = XJ[JJ], cJ[ZJ++] = XJ[JJ + 1] - eJ, cJ[ZJ++] = XJ[JJ + 2] - eJ, cJ[ZJ++] = ZJ;
              ZJ.push(new fJ(cJ, XJ[2] - eJ, UJ)), FJ.push(eJ - JJ)
            }
          }

          function rJ(JJ, cJ) {
            return (ZJ, FJ, UJ) => {
              let eJ, AJ, qJ = 0,
                jJ = ZJ.length - 1;
              if (jJ >= 0 && (eJ = ZJ[jJ]) instanceof nJ) {
                if (!jJ && eJ.type == JJ && eJ.length == UJ) return eJ;
                (AJ = eJ.prop(XJ.lookAhead)) && (qJ = FJ[jJ] + eJ.length + AJ)
              }
              return mJ(JJ, ZJ, FJ, UJ, qJ, cJ)
            }
          }

          function vJ(JJ, cJ, ZJ, FJ, eJ, XJ, AJ, qJ, jJ) {
            let YJ = [],
              hJ = [];
            for (; JJ.length > FJ;) YJ.push(JJ.pop()), hJ.push(cJ.pop() + ZJ - eJ);
            JJ.push(mJ(UJ.types[AJ], YJ, hJ, XJ - eJ, qJ - XJ, jJ)), cJ.push(eJ - ZJ)
          }

          function mJ(JJ, cJ, ZJ, FJ, UJ, eJ, AJ) {
            if (eJ) {
              let JJ = [XJ.contextHash, eJ];
              AJ = AJ ? [JJ].concat(AJ) : [JJ]
            }
            if (UJ > 25) {
              let JJ = [XJ.lookAhead, UJ];
              AJ = AJ ? [JJ].concat(AJ) : [JJ]
            }
            return new nJ(JJ, cJ, ZJ, FJ, AJ)
          }

          function QJ(JJ, cJ) {
            let ZJ = jJ.fork(),
              FJ = 0,
              UJ = 0,
              XJ = 0,
              AJ = ZJ.end - eJ,
              YJ = {
                size: 0,
                start: 0,
                skip: 0
              };
            JJ: for (let eJ = ZJ.pos - JJ; ZJ.pos > eJ;) {
              let JJ = ZJ.size;
              if (ZJ.id == cJ && JJ >= 0) {
                YJ.size = FJ, YJ.start = UJ, YJ.skip = XJ, XJ += 4, FJ += 4, ZJ.next();
                continue
              }
              let jJ = ZJ.pos - JJ;
              if (JJ < 0 || jJ < eJ || ZJ.start < AJ) break;
              let hJ = ZJ.id >= qJ ? 4 : 0,
                DJ = ZJ.start;
              for (ZJ.next(); ZJ.pos > jJ;) {
                if (ZJ.size < 0) {
                  if (-3 != ZJ.size && -4 != ZJ.size) break JJ;
                  hJ += 4
                } else ZJ.id >= qJ && (hJ += 4);
                ZJ.next()
              }
              UJ = DJ, FJ += JJ, XJ += hJ
            }
            return (cJ < 0 || FJ == JJ) && (YJ.size = FJ, YJ.start = UJ, YJ.skip = XJ), YJ.size > 4 ? YJ : void 0
          }

          function EJ(JJ, cJ, ZJ) {
            let {
              id: FJ,
              start: UJ,
              end: eJ,
              size: XJ
            } = jJ;
            if (jJ.next(), XJ >= 0 && FJ < qJ) {
              let AJ = ZJ;
              if (XJ > 4) {
                let FJ = jJ.pos - (XJ - 4);
                for (; jJ.pos > FJ;) ZJ = EJ(JJ, cJ, ZJ)
              }
              cJ[--ZJ] = AJ, cJ[--ZJ] = eJ - JJ, cJ[--ZJ] = UJ - JJ, cJ[--ZJ] = FJ
            } else - 3 == XJ ? hJ = FJ : -4 == XJ && (DJ = FJ);
            return ZJ
          }
          let VJ = [],
            KJ = [];
          for (; jJ.pos > 0;) sJ(JJ.start || 0, JJ.bufferStart || 0, VJ, KJ, -1, 0);
          let yJ = null !== (cJ = JJ.length) && void 0 !== cJ ? cJ : VJ.length ? KJ[0] + VJ[0].length : 0;
          return new nJ(YJ[JJ.topID], VJ.reverse(), KJ.reverse(), yJ)
        }(JJ)
      }
    }
    nJ.empty = new nJ(jJ.none, [], [], 0);
    class GJ {
      constructor(JJ, cJ) {
        this.buffer = JJ, this.index = cJ
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
        return new GJ(this.buffer, this.index)
      }
    }
    class fJ {
      constructor(JJ, cJ, ZJ) {
        this.buffer = JJ, this.length = cJ, this.set = ZJ
      }
      get type() {
        return jJ.none
      }
      toString() {
        let JJ = [];
        for (let cJ = 0; cJ < this.buffer.length;) JJ.push(this.childString(cJ)), cJ = this.buffer[cJ + 3];
        return JJ.join(",")
      }
      childString(JJ) {
        let cJ = this.buffer[JJ],
          ZJ = this.buffer[JJ + 3],
          FJ = this.set.types[cJ],
          UJ = FJ.name;
        if (/\W/.test(UJ) && !FJ.isError && (UJ = JSON.stringify(UJ)), ZJ == (JJ += 4)) return UJ;
        let eJ = [];
        for (; JJ < ZJ;) eJ.push(this.childString(JJ)), JJ = this.buffer[JJ + 3];
        return UJ + "(" + eJ.join(",") + ")"
      }
      findChild(JJ, cJ, ZJ, FJ, UJ) {
        let {
          buffer: eJ
        } = this, XJ = -1;
        for (let AJ = JJ; AJ != cJ && !(xJ(UJ, FJ, eJ[AJ + 1], eJ[AJ + 2]) && (XJ = AJ, ZJ > 0)); AJ = eJ[AJ + 3]);
        return XJ
      }
      slice(JJ, cJ, ZJ) {
        let FJ = this.buffer,
          UJ = new Uint16Array(cJ - JJ),
          eJ = 0;
        for (let XJ = JJ, AJ = 0; XJ < cJ;) {
          UJ[AJ++] = FJ[XJ++], UJ[AJ++] = FJ[XJ++] - ZJ;
          let cJ = UJ[AJ++] = FJ[XJ++] - ZJ;
          UJ[AJ++] = FJ[XJ++] - JJ, eJ = Math.max(eJ, cJ)
        }
        return new fJ(UJ, eJ, this.set)
      }
    }

    function xJ(JJ, cJ, ZJ, FJ) {
      switch (JJ) {
        case -2:
          return ZJ < cJ;
        case -1:
          return FJ >= cJ && ZJ < cJ;
        case 0:
          return ZJ < cJ && FJ > cJ;
        case 1:
          return ZJ <= cJ && FJ > cJ;
        case 2:
          return FJ > cJ;
        case 4:
          return !0
      }
    }

    function rJ(JJ, cJ, ZJ, FJ) {
      for (var UJ; JJ.from == JJ.to || (ZJ < 1 ? JJ.from >= cJ : JJ.from > cJ) || (ZJ > -1 ? JJ.to <= cJ : JJ.to < cJ);) {
        let cJ = !FJ && JJ instanceof mJ && JJ.index < 0 ? null : JJ.parent;
        if (!cJ) return JJ;
        JJ = cJ
      }
      let eJ = FJ ? 0 : sJ.IgnoreOverlays;
      if (FJ)
        for (let XJ = JJ, AJ = XJ.parent; AJ; XJ = AJ, AJ = XJ.parent) XJ instanceof mJ && XJ.index < 0 && (null === (UJ = AJ.enter(cJ, ZJ, eJ)) || void 0 === UJ ? void 0 : UJ.from) != XJ.from && (JJ = AJ);
      for (;;) {
        let FJ = JJ.enter(cJ, ZJ, eJ);
        if (!FJ) return JJ;
        JJ = FJ
      }
    }
    class vJ {
      cursor() {
        return new IJ(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(JJ) {
        let cJ = QJ(this, JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return cJ.length ? cJ[0] : null
      }
      getChildren(JJ) {
        return QJ(this, JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(JJ) {
        return rJ(this, JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(JJ) {
        return rJ(this, JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(JJ) {
        return EJ(this.parent, JJ)
      }
      enterUnfinishedNodesBefore(JJ) {
        let cJ = this.childBefore(JJ),
          ZJ = this;
        for (; cJ;) {
          let JJ = cJ.lastChild;
          if (!JJ || JJ.to != cJ.to) break;
          JJ.type.isError && JJ.from == JJ.to ? (ZJ = cJ, cJ = JJ.prevSibling) : cJ = JJ
        }
        return ZJ
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class mJ extends vJ {
      constructor(JJ, cJ, ZJ, FJ) {
        super(), this._tree = JJ, this.from = cJ, this.index = ZJ, this._parent = FJ
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
      nextChild(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let eJ = this;;) {
          for (let {
              children: XJ,
              positions: qJ
            } = eJ._tree, jJ = cJ > 0 ? XJ.length : -1; JJ != jJ; JJ += cJ) {
            let jJ, YJ = XJ[JJ],
              hJ = qJ[JJ] + eJ.from;
            if (UJ & sJ.EnterBracketed && YJ instanceof nJ && (jJ = AJ.get(YJ)) && !jJ.overlay && jJ.bracketed && ZJ >= hJ && ZJ <= hJ + YJ.length || xJ(FJ, ZJ, hJ, hJ + YJ.length))
              if (YJ instanceof fJ) {
                if (UJ & sJ.ExcludeBuffers) continue;
                let XJ = YJ.findChild(0, YJ.buffer.length, cJ, ZJ - hJ, FJ);
                if (XJ > -1) return new KJ(new VJ(eJ, YJ, JJ, hJ), null, XJ)
              } else if (UJ & sJ.IncludeAnonymous || !YJ.type.isAnonymous || MJ(YJ)) {
              let XJ;
              if (!(UJ & sJ.IgnoreMounts) && (XJ = AJ.get(YJ)) && !XJ.overlay) return new mJ(XJ.tree, hJ, JJ, eJ);
              let qJ = new mJ(YJ, hJ, JJ, eJ);
              return UJ & sJ.IncludeAnonymous || !qJ.type.isAnonymous ? qJ : qJ.nextChild(cJ < 0 ? YJ.children.length - 1 : 0, cJ, ZJ, FJ, UJ)
            }
          }
          if (UJ & sJ.IncludeAnonymous || !eJ.type.isAnonymous) return null;
          if (JJ = eJ.index >= 0 ? eJ.index + cJ : cJ < 0 ? -1 : eJ._parent._tree.children.length, eJ = eJ._parent, !eJ) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(JJ) {
        return this.nextChild(0, 1, JJ, 2)
      }
      childBefore(JJ) {
        return this.nextChild(this._tree.children.length - 1, -1, JJ, -2)
      }
      prop(JJ) {
        return this._tree.prop(JJ)
      }
      enter(JJ, cJ) {
        let ZJ, FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(FJ & sJ.IgnoreOverlays) && (ZJ = AJ.get(this._tree)) && ZJ.overlay) {
          let UJ = JJ - this.from,
            eJ = FJ & sJ.EnterBracketed && ZJ.bracketed;
          for (let {
              from: JJ,
              to: FJ
            }
            of ZJ.overlay)
            if ((cJ > 0 || eJ ? JJ <= UJ : JJ < UJ) && (cJ < 0 || eJ ? FJ >= UJ : FJ > UJ)) return new mJ(ZJ.tree, ZJ.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, JJ, cJ, FJ)
      }
      nextSignificantParent() {
        let JJ = this;
        for (; JJ.type.isAnonymous && JJ._parent;) JJ = JJ._parent;
        return JJ
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

    function QJ(JJ, cJ, ZJ, FJ) {
      let UJ = JJ.cursor(),
        eJ = [];
      if (!UJ.firstChild()) return eJ;
      if (null != ZJ)
        for (let XJ = !1; !XJ;)
          if (XJ = UJ.type.is(ZJ), !UJ.nextSibling()) return eJ;
      for (;;) {
        if (null != FJ && UJ.type.is(FJ)) return eJ;
        if (UJ.type.is(cJ) && eJ.push(UJ.node), !UJ.nextSibling()) return null == FJ ? eJ : []
      }
    }

    function EJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cJ.length - 1;
      for (let FJ = JJ; ZJ >= 0; FJ = FJ.parent) {
        if (!FJ) return !1;
        if (!FJ.type.isAnonymous) {
          if (cJ[ZJ] && cJ[ZJ] != FJ.name) return !1;
          ZJ--
        }
      }
      return !0
    }
    class VJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.parent = JJ, this.buffer = cJ, this.index = ZJ, this.start = FJ
      }
    }
    class KJ extends vJ {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(JJ, cJ, ZJ) {
        super(), this.context = JJ, this._parent = cJ, this.index = ZJ, this.type = JJ.buffer.set.types[JJ.buffer.buffer[ZJ]]
      }
      child(JJ, cJ, ZJ) {
        let {
          buffer: FJ
        } = this.context, UJ = FJ.findChild(this.index + 4, FJ.buffer[this.index + 3], JJ, cJ - this.context.start, ZJ);
        return UJ < 0 ? null : new KJ(this.context, this, UJ)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(JJ) {
        return this.child(1, JJ, 2)
      }
      childBefore(JJ) {
        return this.child(-1, JJ, -2)
      }
      prop(JJ) {
        return this.type.prop(JJ)
      }
      enter(JJ, cJ) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & sJ.ExcludeBuffers) return null;
        let {
          buffer: ZJ
        } = this.context, FJ = ZJ.findChild(this.index + 4, ZJ.buffer[this.index + 3], cJ > 0 ? 1 : -1, JJ - this.context.start, cJ);
        return FJ < 0 ? null : new KJ(this.context, this, FJ)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(JJ) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + JJ, JJ, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: JJ
        } = this.context, cJ = JJ.buffer[this.index + 3];
        return cJ < (this._parent ? JJ.buffer[this._parent.index + 3] : JJ.buffer.length) ? new KJ(this.context, this._parent, cJ) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: JJ
        } = this.context, cJ = this._parent ? this._parent.index + 4 : 0;
        return this.index == cJ ? this.externalSibling(-1) : new KJ(this.context, this._parent, JJ.findChild(cJ, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let JJ = [],
          cJ = [],
          {
            buffer: ZJ
          } = this.context,
          FJ = this.index + 4,
          UJ = ZJ.buffer[this.index + 3];
        if (UJ > FJ) {
          let eJ = ZJ.buffer[this.index + 1];
          JJ.push(ZJ.slice(FJ, UJ, eJ)), cJ.push(0)
        }
        return new nJ(this.type, JJ, cJ, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function yJ(JJ) {
      if (!JJ.length) return null;
      let cJ = 0,
        ZJ = JJ[0];
      for (let eJ = 1; eJ < JJ.length; eJ++) {
        let FJ = JJ[eJ];
        (FJ.from > ZJ.from || FJ.to < ZJ.to) && (ZJ = FJ, cJ = eJ)
      }
      let FJ = ZJ instanceof mJ && ZJ.index < 0 ? null : ZJ.parent,
        UJ = JJ.slice();
      return FJ ? UJ[cJ] = FJ : UJ.splice(cJ, 1), new SJ(UJ, ZJ)
    }
    class SJ {
      constructor(JJ, cJ) {
        this.heads = JJ, this.node = cJ
      }
      get next() {
        return yJ(this.heads)
      }
    }
    class IJ {
      get name() {
        return this.type.name
      }
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = cJ & ~sJ.EnterBracketed, JJ instanceof mJ) this.yieldNode(JJ);
        else {
          this._tree = JJ.context.parent, this.buffer = JJ.context;
          for (let cJ = JJ._parent; cJ; cJ = cJ._parent) this.stack.unshift(cJ.index);
          this.bufferNode = JJ, this.yieldBuf(JJ.index)
        }
      }
      yieldNode(JJ) {
        return !!JJ && (this._tree = JJ, this.type = JJ.type, this.from = JJ.from, this.to = JJ.to, !0)
      }
      yieldBuf(JJ, cJ) {
        this.index = JJ;
        let {
          start: ZJ,
          buffer: FJ
        } = this.buffer;
        return this.type = cJ || FJ.set.types[FJ.buffer[JJ]], this.from = ZJ + FJ.buffer[JJ + 1], this.to = ZJ + FJ.buffer[JJ + 2], !0
      }
      yield(JJ) {
        return !!JJ && (JJ instanceof mJ ? (this.buffer = null, this.yieldNode(JJ)) : (this.buffer = JJ.context, this.yieldBuf(JJ.index, JJ.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(JJ, cJ, ZJ) {
        if (!this.buffer) return this.yield(this._tree.nextChild(JJ < 0 ? this._tree._tree.children.length - 1 : 0, JJ, cJ, ZJ, this.mode));
        let {
          buffer: FJ
        } = this.buffer, UJ = FJ.findChild(this.index + 4, FJ.buffer[this.index + 3], JJ, cJ - this.buffer.start, ZJ);
        return !(UJ < 0) && (this.stack.push(this.index), this.yieldBuf(UJ))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(JJ) {
        return this.enterChild(1, JJ, 2)
      }
      childBefore(JJ) {
        return this.enterChild(-1, JJ, -2)
      }
      enter(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(ZJ & sJ.ExcludeBuffers) && this.enterChild(1, JJ, cJ) : this.yield(this._tree.enter(JJ, cJ, ZJ))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & sJ.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let JJ = this.mode & sJ.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(JJ)
      }
      sibling(JJ) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + JJ, JJ, 0, 4, this.mode));
        let {
          buffer: cJ
        } = this.buffer, ZJ = this.stack.length - 1;
        if (JJ < 0) {
          let JJ = ZJ < 0 ? 0 : this.stack[ZJ] + 4;
          if (this.index != JJ) return this.yieldBuf(cJ.findChild(JJ, this.index, -1, 0, 4))
        } else {
          let JJ = cJ.buffer[this.index + 3];
          if (JJ < (ZJ < 0 ? cJ.buffer.length : cJ.buffer[this.stack[ZJ] + 3])) return this.yieldBuf(JJ)
        }
        return ZJ < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + JJ, JJ, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(JJ) {
        let cJ, ZJ, {
          buffer: FJ
        } = this;
        if (FJ) {
          if (JJ > 0) {
            if (this.index < FJ.buffer.buffer.length) return !1
          } else
            for (let JJ = 0; JJ < this.index; JJ++)
              if (FJ.buffer.buffer[JJ + 3] < this.index) return !1;
          ({
            index: cJ,
            parent: ZJ
          } = FJ)
        } else({
          index: cJ,
          _parent: ZJ
        } = this._tree);
        for (; ZJ;
          ({
            index: cJ,
            _parent: ZJ
          } = ZJ))
          if (cJ > -1)
            for (let FJ = cJ + JJ, UJ = JJ < 0 ? -1 : ZJ._tree.children.length; FJ != UJ; FJ += JJ) {
              let JJ = ZJ._tree.children[FJ];
              if (this.mode & sJ.IncludeAnonymous || JJ instanceof fJ || !JJ.type.isAnonymous || MJ(JJ)) return !1
            }
        return !0
      }
      move(JJ, cJ) {
        if (cJ && this.enterChild(JJ, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(JJ)) return !0;
          if (this.atLastNode(JJ) || !this.parent()) return !1
        }
      }
      next() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, JJ)
      }
      prev() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, JJ)
      }
      moveTo(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (cJ < 1 ? this.from >= JJ : this.from > JJ) || (cJ > -1 ? this.to <= JJ : this.to < JJ)) && this.parent(););
        for (; this.enterChild(1, JJ, cJ););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let JJ = this.bufferNode,
          cJ = null,
          ZJ = 0;
        if (JJ && JJ.context == this.buffer) JJ: for (let FJ = this.index, UJ = this.stack.length; UJ >= 0;) {
          for (let eJ = JJ; eJ; eJ = eJ._parent)
            if (eJ.index == FJ) {
              if (FJ == this.index) return eJ;
              cJ = eJ, ZJ = UJ + 1;
              break JJ
            } FJ = this.stack[--UJ]
        }
        for (let FJ = ZJ; FJ < this.stack.length; FJ++) cJ = new KJ(this.buffer, cJ, this.stack[FJ]);
        return this.bufferNode = new KJ(this.buffer, cJ, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(JJ, cJ) {
        for (let ZJ = 0;;) {
          let FJ = !1;
          if (this.type.isAnonymous || !1 !== JJ(this)) {
            if (this.firstChild()) {
              ZJ++;
              continue
            }
            this.type.isAnonymous || (FJ = !0)
          }
          for (;;) {
            if (FJ && cJ && cJ(this), FJ = this.type.isAnonymous, !ZJ) return;
            if (this.nextSibling()) break;
            this.parent(), ZJ--, FJ = !0
          }
        }
      }
      matchContext(JJ) {
        if (!this.buffer) return EJ(this.node.parent, JJ);
        let {
          buffer: cJ
        } = this.buffer, {
          types: ZJ
        } = cJ.set;
        for (let FJ = JJ.length - 1, UJ = this.stack.length - 1; FJ >= 0; UJ--) {
          if (UJ < 0) return EJ(this._tree, JJ, FJ);
          let eJ = ZJ[cJ.buffer[this.stack[UJ]]];
          if (!eJ.isAnonymous) {
            if (JJ[FJ] && JJ[FJ] != eJ.name) return !1;
            FJ--
          }
        }
        return !0
      }
    }

    function MJ(JJ) {
      return JJ.children.some((JJ => JJ instanceof fJ || !JJ.type.isAnonymous || MJ(JJ)))
    }
    const bJ = new WeakMap;

    function wJ(JJ, cJ) {
      if (!JJ.isAnonymous || cJ instanceof fJ || cJ.type != JJ) return 1;
      let ZJ = bJ.get(cJ);
      if (null == ZJ) {
        ZJ = 1;
        for (let FJ of cJ.children) {
          if (FJ.type != JJ || !(FJ instanceof nJ)) {
            ZJ = 1;
            break
          }
          ZJ += wJ(JJ, FJ)
        }
        bJ.set(cJ, ZJ)
      }
      return ZJ
    }

    function WJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ) {
      let jJ = 0;
      for (let sJ = FJ; sJ < UJ; sJ++) jJ += wJ(JJ, cJ[sJ]);
      let YJ = Math.ceil(1.5 * jJ / 8),
        hJ = [],
        DJ = [];
      return function cJ(ZJ, FJ, UJ, XJ, AJ) {
        for (let jJ = UJ; jJ < XJ;) {
          let UJ = jJ,
            sJ = FJ[jJ],
            nJ = wJ(JJ, ZJ[jJ]);
          for (jJ++; jJ < XJ; jJ++) {
            let cJ = wJ(JJ, ZJ[jJ]);
            if (nJ + cJ >= YJ) break;
            nJ += cJ
          }
          if (jJ == UJ + 1) {
            if (nJ > YJ) {
              let JJ = ZJ[UJ];
              cJ(JJ.children, JJ.positions, 0, JJ.children.length, FJ[UJ] + AJ);
              continue
            }
            hJ.push(ZJ[UJ])
          } else {
            let cJ = FJ[jJ - 1] + ZJ[jJ - 1].length - sJ;
            hJ.push(WJ(JJ, ZJ, FJ, UJ, jJ, sJ, cJ, null, qJ))
          }
          DJ.push(sJ + AJ - eJ)
        }
      }(cJ, ZJ, FJ, UJ, 0), (AJ || qJ)(hJ, DJ, XJ)
    }
    class gJ {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(JJ, cJ, ZJ) {
        let FJ = this.map.get(JJ);
        FJ || this.map.set(JJ, FJ = new Map), FJ.set(cJ, ZJ)
      }
      getBuffer(JJ, cJ) {
        let ZJ = this.map.get(JJ);
        return ZJ && ZJ.get(cJ)
      }
      set(JJ, cJ) {
        JJ instanceof KJ ? this.setBuffer(JJ.context.buffer, JJ.index, cJ) : JJ instanceof mJ && this.map.set(JJ.tree, cJ)
      }
      get(JJ) {
        return JJ instanceof KJ ? this.getBuffer(JJ.context.buffer, JJ.index) : JJ instanceof mJ ? this.map.get(JJ.tree) : void 0
      }
      cursorSet(JJ, cJ) {
        JJ.buffer ? this.setBuffer(JJ.buffer.buffer, JJ.index, cJ) : this.map.set(JJ.tree, cJ)
      }
      cursorGet(JJ) {
        return JJ.buffer ? this.getBuffer(JJ.buffer.buffer, JJ.index) : this.map.get(JJ.tree)
      }
    }
    class HJ {
      constructor(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = JJ, this.to = cJ, this.tree = ZJ, this.offset = FJ, this.open = (UJ ? 1 : 0) | (eJ ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = [new HJ(0, JJ.length, JJ, 0, !1, ZJ)];
        for (let UJ of cJ) UJ.to > JJ.length && FJ.push(UJ);
        return FJ
      }
      static applyChanges(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!cJ.length) return JJ;
        let FJ = [],
          UJ = 1,
          eJ = JJ.length ? JJ[0] : null;
        for (let XJ = 0, AJ = 0, qJ = 0;; XJ++) {
          let jJ = XJ < cJ.length ? cJ[XJ] : null,
            YJ = jJ ? jJ.fromA : 1e9;
          if (YJ - AJ >= ZJ)
            for (; eJ && eJ.from < YJ;) {
              let cJ = eJ;
              if (AJ >= cJ.from || YJ <= cJ.to || qJ) {
                let JJ = Math.max(cJ.from, AJ) - qJ,
                  ZJ = Math.min(cJ.to, YJ) - qJ;
                cJ = JJ >= ZJ ? null : new HJ(JJ, ZJ, cJ.tree, cJ.offset + qJ, XJ > 0, !!jJ)
              }
              if (cJ && FJ.push(cJ), eJ.to > YJ) break;
              eJ = UJ < JJ.length ? JJ[UJ++] : null
            }
          if (!jJ) break;
          AJ = jJ.toA, qJ = jJ.toA - jJ.toB
        }
        return FJ
      }
    }
    class PJ {
      startParse(JJ, cJ, ZJ) {
        return "string" == typeof JJ && (JJ = new kJ(JJ)), ZJ = ZJ ? ZJ.length ? ZJ.map((JJ => new eJ(JJ.from, JJ.to))) : [new eJ(0, 0)] : [new eJ(0, JJ.length)], this.createParse(JJ, cJ || [], ZJ)
      }
      parse(JJ, cJ, ZJ) {
        let FJ = this.startParse(JJ, cJ, ZJ);
        for (;;) {
          let JJ = FJ.advance();
          if (JJ) return JJ
        }
      }
    }
    class kJ {
      constructor(JJ) {
        this.string = JJ
      }
      get length() {
        return this.string.length
      }
      chunk(JJ) {
        return this.string.slice(JJ)
      }
      get lineChunks() {
        return !1
      }
      read(JJ, cJ) {
        return this.string.slice(JJ, cJ)
      }
    }
    new XJ({
      perNode: !0
    })
  },
  40084: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => DJ,
      e: () => qJ,
      f: () => hJ,
      j: () => bJ
    });
    var FJ = ZJ(40080);
    let UJ = 0;
    class eJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.name = JJ, this.set = cJ, this.base = ZJ, this.modified = FJ, this.id = UJ++
      }
      toString() {
        let {
          name: JJ
        } = this;
        for (let cJ of this.modified) cJ.name && (JJ = `${cJ.name}(${JJ})`);
        return JJ
      }
      static define(JJ, cJ) {
        let ZJ = "string" == typeof JJ ? JJ : "?";
        if (JJ instanceof eJ && (cJ = JJ), null === cJ || void 0 === cJ ? void 0 : cJ.base) throw new Error("Can not derive from a modified tag");
        let FJ = new eJ(ZJ, [], null, []);
        if (FJ.set.push(FJ), cJ)
          for (let UJ of cJ.set) FJ.set.push(UJ);
        return FJ
      }
      static defineModifier(JJ) {
        let cJ = new AJ(JJ);
        return JJ => JJ.modified.indexOf(cJ) > -1 ? JJ : AJ.get(JJ.base || JJ, JJ.modified.concat(cJ).sort(((JJ, cJ) => JJ.id - cJ.id)))
      }
    }
    let XJ = 0;
    class AJ {
      constructor(JJ) {
        this.name = JJ, this.instances = [], this.id = XJ++
      }
      static get(JJ, cJ) {
        if (!cJ.length) return JJ;
        let ZJ = cJ[0].instances.find((ZJ => {
          return ZJ.base == JJ && (FJ = cJ, UJ = ZJ.modified, FJ.length == UJ.length && FJ.every(((JJ, cJ) => JJ == UJ[cJ])));
          var FJ, UJ
        }));
        if (ZJ) return ZJ;
        let FJ = [],
          UJ = new eJ(JJ.name, FJ, JJ, cJ);
        for (let eJ of cJ) eJ.instances.push(UJ);
        let XJ = function(JJ) {
          let cJ = [
            []
          ];
          for (let ZJ = 0; ZJ < JJ.length; ZJ++)
            for (let FJ = 0, UJ = cJ.length; FJ < UJ; FJ++) cJ.push(cJ[FJ].concat(JJ[ZJ]));
          return cJ.sort(((JJ, cJ) => cJ.length - JJ.length))
        }(cJ);
        for (let eJ of JJ.set)
          if (!eJ.modified.length)
            for (let JJ of XJ) FJ.push(AJ.get(eJ, JJ));
        return UJ
      }
    }

    function qJ(JJ) {
      let cJ = Object.create(null);
      for (let ZJ in JJ) {
        let FJ = JJ[ZJ];
        Array.isArray(FJ) || (FJ = [FJ]);
        for (let JJ of ZJ.split(" "))
          if (JJ) {
            let ZJ = [],
              UJ = 2,
              eJ = JJ;
            for (let cJ = 0;;) {
              if ("..." == eJ && cJ > 0 && cJ + 3 == JJ.length) {
                UJ = 1;
                break
              }
              let FJ = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(eJ);
              if (!FJ) throw new RangeError("Invalid path: " + JJ);
              if (ZJ.push("*" == FJ[0] ? "" : '"' == FJ[0][0] ? JSON.parse(FJ[0]) : FJ[0]), cJ += FJ[0].length, cJ == JJ.length) break;
              let XJ = JJ[cJ++];
              if (cJ == JJ.length && "!" == XJ) {
                UJ = 0;
                break
              }
              if ("/" != XJ) throw new RangeError("Invalid path: " + JJ);
              eJ = JJ.slice(cJ)
            }
            let XJ = ZJ.length - 1,
              AJ = ZJ[XJ];
            if (!AJ) throw new RangeError("Invalid path: " + JJ);
            let qJ = new YJ(FJ, UJ, XJ > 0 ? ZJ.slice(0, XJ) : null);
            cJ[AJ] = qJ.sort(cJ[AJ])
          }
      }
      return jJ.add(cJ)
    }
    const jJ = new FJ.h({
      combine(JJ, cJ) {
        let ZJ, FJ, UJ;
        for (; JJ || cJ;) {
          if (!JJ || cJ && JJ.depth >= cJ.depth ? (UJ = cJ, cJ = cJ.next) : (UJ = JJ, JJ = JJ.next), ZJ && ZJ.mode == UJ.mode && !UJ.context && !ZJ.context) continue;
          let eJ = new YJ(UJ.tags, UJ.mode, UJ.context);
          ZJ ? ZJ.next = eJ : FJ = eJ, ZJ = eJ
        }
        return FJ
      }
    });
    class YJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.tags = JJ, this.mode = cJ, this.context = ZJ, this.next = FJ
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(JJ) {
        return !JJ || JJ.depth < this.depth ? (this.next = JJ, this) : (JJ.next = this.sort(JJ.next), JJ)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function hJ(JJ, cJ) {
      let ZJ = Object.create(null);
      for (let eJ of JJ)
        if (Array.isArray(eJ.tag))
          for (let JJ of eJ.tag) ZJ[JJ.id] = eJ.class;
        else ZJ[eJ.tag.id] = eJ.class;
      let {
        scope: FJ,
        all: UJ = null
      } = cJ || {};
      return {
        style: JJ => {
          let cJ = UJ;
          for (let FJ of JJ)
            for (let JJ of FJ.set) {
              let FJ = ZJ[JJ.id];
              if (FJ) {
                cJ = cJ ? cJ + " " + FJ : FJ;
                break
              }
            }
          return cJ
        },
        scope: FJ
      }
    }

    function DJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : JJ.length,
        eJ = new sJ(FJ, Array.isArray(cJ) ? cJ : [cJ], ZJ);
      eJ.highlightRange(JJ.cursor(), FJ, UJ, "", eJ.highlighters), eJ.flush(UJ)
    }
    YJ.empty = new YJ([], 2, null);
    class sJ {
      constructor(JJ, cJ, ZJ) {
        this.at = JJ, this.highlighters = cJ, this.span = ZJ, this.class = ""
      }
      startSpan(JJ, cJ) {
        cJ != this.class && (this.flush(JJ), JJ > this.at && (this.at = JJ), this.class = cJ)
      }
      flush(JJ) {
        JJ > this.at && this.class && this.span(this.at, JJ, this.class)
      }
      highlightRange(JJ, cJ, ZJ, UJ, eJ) {
        let {
          type: XJ,
          from: AJ,
          to: qJ
        } = JJ;
        if (AJ >= ZJ || qJ <= cJ) return;
        XJ.isTop && (eJ = this.highlighters.filter((JJ => !JJ.scope || JJ.scope(XJ))));
        let hJ = UJ,
          DJ = function(JJ) {
            let cJ = JJ.type.prop(jJ);
            for (; cJ && cJ.context && !JJ.matchContext(cJ.context);) cJ = cJ.next;
            return cJ || null
          }(JJ) || YJ.empty,
          sJ = function(JJ, cJ) {
            let ZJ = null;
            for (let FJ of JJ) {
              let JJ = FJ.style(cJ);
              JJ && (ZJ = ZJ ? ZJ + " " + JJ : JJ)
            }
            return ZJ
          }(eJ, DJ.tags);
        if (sJ && (hJ && (hJ += " "), hJ += sJ, 1 == DJ.mode && (UJ += (UJ ? " " : "") + sJ)), this.startSpan(Math.max(cJ, AJ), hJ), DJ.opaque) return;
        let nJ = JJ.tree && JJ.tree.prop(FJ.h.mounted);
        if (nJ && nJ.overlay) {
          let FJ = JJ.node.enter(nJ.overlay[0].from + AJ, 1),
            XJ = this.highlighters.filter((JJ => !JJ.scope || JJ.scope(nJ.tree.type))),
            jJ = JJ.firstChild();
          for (let YJ = 0, DJ = AJ;; YJ++) {
            let sJ = YJ < nJ.overlay.length ? nJ.overlay[YJ] : null,
              GJ = sJ ? sJ.from + AJ : qJ,
              fJ = Math.max(cJ, DJ),
              xJ = Math.min(ZJ, GJ);
            if (fJ < xJ && jJ)
              for (; JJ.from < xJ && (this.highlightRange(JJ, fJ, xJ, UJ, eJ), this.startSpan(Math.min(xJ, JJ.to), hJ), !(JJ.to >= GJ) && JJ.nextSibling()););
            if (!sJ || GJ > ZJ) break;
            DJ = sJ.to + AJ, DJ > cJ && (this.highlightRange(FJ.cursor(), Math.max(cJ, sJ.from + AJ), Math.min(ZJ, DJ), "", XJ), this.startSpan(Math.min(ZJ, DJ), hJ))
          }
          jJ && JJ.parent()
        } else if (JJ.firstChild()) {
          nJ && (UJ = "");
          do {
            if (!(JJ.to <= cJ)) {
              if (JJ.from >= ZJ) break;
              this.highlightRange(JJ, cJ, ZJ, UJ, eJ), this.startSpan(Math.min(ZJ, JJ.to), hJ)
            }
          } while (JJ.nextSibling());
          JJ.parent()
        }
      }
    }
    const nJ = eJ.define,
      GJ = nJ(),
      fJ = nJ(),
      xJ = nJ(fJ),
      rJ = nJ(fJ),
      vJ = nJ(),
      mJ = nJ(vJ),
      QJ = nJ(vJ),
      EJ = nJ(),
      VJ = nJ(EJ),
      KJ = nJ(),
      yJ = nJ(),
      SJ = nJ(),
      IJ = nJ(SJ),
      MJ = nJ(),
      bJ = {
        comment: GJ,
        lineComment: nJ(GJ),
        blockComment: nJ(GJ),
        docComment: nJ(GJ),
        name: fJ,
        variableName: nJ(fJ),
        typeName: xJ,
        tagName: nJ(xJ),
        propertyName: rJ,
        attributeName: nJ(rJ),
        className: nJ(fJ),
        labelName: nJ(fJ),
        namespace: nJ(fJ),
        macroName: nJ(fJ),
        literal: vJ,
        string: mJ,
        docString: nJ(mJ),
        character: nJ(mJ),
        attributeValue: nJ(mJ),
        number: QJ,
        integer: nJ(QJ),
        float: nJ(QJ),
        bool: nJ(vJ),
        regexp: nJ(vJ),
        escape: nJ(vJ),
        color: nJ(vJ),
        url: nJ(vJ),
        keyword: KJ,
        self: nJ(KJ),
        null: nJ(KJ),
        atom: nJ(KJ),
        unit: nJ(KJ),
        modifier: nJ(KJ),
        operatorKeyword: nJ(KJ),
        controlKeyword: nJ(KJ),
        definitionKeyword: nJ(KJ),
        moduleKeyword: nJ(KJ),
        operator: yJ,
        derefOperator: nJ(yJ),
        arithmeticOperator: nJ(yJ),
        logicOperator: nJ(yJ),
        bitwiseOperator: nJ(yJ),
        compareOperator: nJ(yJ),
        updateOperator: nJ(yJ),
        definitionOperator: nJ(yJ),
        typeOperator: nJ(yJ),
        controlOperator: nJ(yJ),
        punctuation: SJ,
        separator: nJ(SJ),
        bracket: IJ,
        angleBracket: nJ(IJ),
        squareBracket: nJ(IJ),
        paren: nJ(IJ),
        brace: nJ(IJ),
        content: EJ,
        heading: VJ,
        heading1: nJ(VJ),
        heading2: nJ(VJ),
        heading3: nJ(VJ),
        heading4: nJ(VJ),
        heading5: nJ(VJ),
        heading6: nJ(VJ),
        contentSeparator: nJ(EJ),
        list: nJ(EJ),
        quote: nJ(EJ),
        emphasis: nJ(EJ),
        strong: nJ(EJ),
        link: nJ(EJ),
        monospace: nJ(EJ),
        strikethrough: nJ(EJ),
        inserted: nJ(),
        deleted: nJ(),
        changed: nJ(),
        invalid: nJ(),
        meta: MJ,
        documentMeta: nJ(MJ),
        annotation: nJ(MJ),
        processingInstruction: nJ(MJ),
        definition: eJ.defineModifier("definition"),
        constant: eJ.defineModifier("constant"),
        function: eJ.defineModifier("function"),
        standard: eJ.defineModifier("standard"),
        local: eJ.defineModifier("local"),
        special: eJ.defineModifier("special")
      };
    for (let wJ in bJ) {
      let JJ = bJ[wJ];
      JJ instanceof eJ && (JJ.name = wJ)
    }
    hJ([{
      tag: bJ.link,
      class: "tok-link"
    }, {
      tag: bJ.heading,
      class: "tok-heading"
    }, {
      tag: bJ.emphasis,
      class: "tok-emphasis"
    }, {
      tag: bJ.strong,
      class: "tok-strong"
    }, {
      tag: bJ.keyword,
      class: "tok-keyword"
    }, {
      tag: bJ.atom,
      class: "tok-atom"
    }, {
      tag: bJ.bool,
      class: "tok-bool"
    }, {
      tag: bJ.url,
      class: "tok-url"
    }, {
      tag: bJ.labelName,
      class: "tok-labelName"
    }, {
      tag: bJ.inserted,
      class: "tok-inserted"
    }, {
      tag: bJ.deleted,
      class: "tok-deleted"
    }, {
      tag: bJ.literal,
      class: "tok-literal"
    }, {
      tag: bJ.string,
      class: "tok-string"
    }, {
      tag: bJ.number,
      class: "tok-number"
    }, {
      tag: [bJ.regexp, bJ.escape, bJ.special(bJ.string)],
      class: "tok-string2"
    }, {
      tag: bJ.variableName,
      class: "tok-variableName"
    }, {
      tag: bJ.local(bJ.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: bJ.definition(bJ.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: bJ.special(bJ.variableName),
      class: "tok-variableName2"
    }, {
      tag: bJ.definition(bJ.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: bJ.typeName,
      class: "tok-typeName"
    }, {
      tag: bJ.namespace,
      class: "tok-namespace"
    }, {
      tag: bJ.className,
      class: "tok-className"
    }, {
      tag: bJ.macroName,
      class: "tok-macroName"
    }, {
      tag: bJ.propertyName,
      class: "tok-propertyName"
    }, {
      tag: bJ.operator,
      class: "tok-operator"
    }, {
      tag: bJ.comment,
      class: "tok-comment"
    }, {
      tag: bJ.meta,
      class: "tok-meta"
    }, {
      tag: bJ.invalid,
      class: "tok-invalid"
    }, {
      tag: bJ.punctuation,
      class: "tok-punctuation"
    }])
  },
  40092: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ.f,
      e: () => XJ.t,
      h: () => XJ.A,
      k: () => XJ.E,
      n: () => AJ.k,
      q: () => VZ,
      s: () => AJ.G,
      t: () => AJ.ab
    });
    var FJ = ZJ(1278),
      UJ = ZJ(1270),
      eJ = ZJ(47),
      XJ = ZJ(40060),
      AJ = ZJ(40065),
      qJ = ZJ(40078),
      jJ = ZJ(40080);

    function YJ(JJ, cJ) {
      return ZJ => {
        let {
          state: FJ,
          dispatch: UJ
        } = ZJ;
        if (FJ.readOnly) return !1;
        let eJ = JJ(cJ, FJ);
        return !!eJ && (UJ(FJ.update(eJ)), !0)
      }
    }
    const hJ = YJ(xJ, 0),
      DJ = YJ(fJ, 0),
      sJ = YJ(((JJ, cJ) => fJ(JJ, cJ, function(JJ) {
        let cJ = [];
        for (let ZJ of JJ.selection.ws) {
          let FJ = JJ.doc.lineAt(ZJ.from),
            UJ = ZJ.to <= FJ.to ? FJ : JJ.doc.lineAt(ZJ.to);
          UJ.from > FJ.from && UJ.from == ZJ.to && (UJ = ZJ.to == FJ.to + 1 ? FJ : JJ.doc.lineAt(ZJ.to - 1));
          let eJ = cJ.length - 1;
          eJ >= 0 && cJ[eJ].to > FJ.from ? cJ[eJ].to = UJ.to : cJ.push({
            from: FJ.from + /^\s*/.exec(FJ.text)[0].length,
            to: UJ.to
          })
        }
        return cJ
      }(cJ))), 0);

    function nJ(JJ, cJ) {
      let ZJ = JJ.languageDataAt("commentTokens", cJ, 1);
      return ZJ.length ? ZJ[0] : {}
    }
    const GJ = 50;

    function fJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cJ.selection.ws,
        FJ = ZJ.map((JJ => nJ(cJ, JJ.from).block));
      if (!FJ.every((JJ => JJ))) return null;
      let UJ = ZJ.map(((JJ, ZJ) => function(JJ, cJ, ZJ, FJ) {
        let UJ, eJ, {
            open: XJ,
            close: AJ
          } = cJ,
          qJ = JJ.sliceDoc(ZJ - GJ, ZJ),
          jJ = JJ.sliceDoc(FJ, FJ + GJ),
          YJ = /\s*$/.exec(qJ)[0].length,
          hJ = /^\s*/.exec(jJ)[0].length,
          DJ = qJ.length - YJ;
        if (qJ.slice(DJ - XJ.length, DJ) == XJ && jJ.slice(hJ, hJ + AJ.length) == AJ) return {
          open: {
            pos: ZJ - YJ,
            margin: YJ && 1
          },
          close: {
            pos: FJ + hJ,
            margin: hJ && 1
          }
        };
        FJ - ZJ <= 2 * GJ ? UJ = eJ = JJ.sliceDoc(ZJ, FJ) : (UJ = JJ.sliceDoc(ZJ, ZJ + GJ), eJ = JJ.sliceDoc(FJ - GJ, FJ));
        let sJ = /^\s*/.exec(UJ)[0].length,
          nJ = /\s*$/.exec(eJ)[0].length,
          fJ = eJ.length - nJ - AJ.length;
        return UJ.slice(sJ, sJ + XJ.length) == XJ && eJ.slice(fJ, fJ + AJ.length) == AJ ? {
          open: {
            pos: ZJ + sJ + XJ.length,
            margin: /\s/.test(UJ.charAt(sJ + XJ.length)) ? 1 : 0
          },
          close: {
            pos: FJ - nJ - AJ.length,
            margin: /\s/.test(eJ.charAt(fJ - 1)) ? 1 : 0
          }
        } : null
      }(cJ, FJ[ZJ], JJ.from, JJ.to)));
      if (2 != JJ && !UJ.every((JJ => JJ))) return {
        changes: cJ.changes(ZJ.map(((JJ, cJ) => UJ[cJ] ? [] : [{
          from: JJ.from,
          insert: FJ[cJ].open + " "
        }, {
          from: JJ.to,
          insert: " " + FJ[cJ].close
        }])))
      };
      if (1 != JJ && UJ.some((JJ => JJ))) {
        let JJ = [];
        for (let cJ, ZJ = 0; ZJ < UJ.length; ZJ++)
          if (cJ = UJ[ZJ]) {
            let UJ = FJ[ZJ],
              {
                open: eJ,
                close: XJ
              } = cJ;
            JJ.push({
              from: eJ.pos - UJ.open.length,
              to: eJ.pos + eJ.margin
            }, {
              from: XJ.pos - XJ.margin,
              to: XJ.pos + UJ.close.length
            })
          } return {
          changes: JJ
        }
      }
      return null
    }

    function xJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cJ.selection.ws,
        FJ = [],
        UJ = -1;
      JJ: for (let {
          from: eJ,
          to: XJ
        }
        of ZJ) {
        let JJ, ZJ = FJ.length,
          AJ = 1e9;
        for (let qJ = eJ; qJ <= XJ;) {
          let ZJ = cJ.doc.lineAt(qJ);
          if (void 0 == JJ && (JJ = nJ(cJ, ZJ.from).line, !JJ)) continue JJ;
          if (ZJ.from > UJ && (eJ == XJ || XJ > ZJ.from)) {
            UJ = ZJ.from;
            let cJ = /^\s*/.exec(ZJ.text)[0].length,
              eJ = cJ == ZJ.length,
              XJ = ZJ.text.slice(cJ, cJ + JJ.length) == JJ ? cJ : -1;
            cJ < ZJ.text.length && cJ < AJ && (AJ = cJ), FJ.push({
              line: ZJ,
              comment: XJ,
              token: JJ,
              indent: cJ,
              empty: eJ,
              single: !1
            })
          }
          qJ = ZJ.to + 1
        }
        if (AJ < 1e9)
          for (let cJ = ZJ; cJ < FJ.length; cJ++) FJ[cJ].indent < FJ[cJ].line.text.length && (FJ[cJ].indent = AJ);
        FJ.length == ZJ + 1 && (FJ[ZJ].single = !0)
      }
      if (2 != JJ && FJ.some((JJ => JJ.comment < 0 && (!JJ.empty || JJ.single)))) {
        let JJ = [];
        for (let {
            line: cJ,
            token: UJ,
            indent: eJ,
            empty: XJ,
            single: AJ
          }
          of FJ) !AJ && XJ || JJ.push({
          from: cJ.from + eJ,
          insert: UJ + " "
        });
        let ZJ = cJ.changes(JJ);
        return {
          changes: ZJ,
          selection: cJ.selection.map(ZJ, 1)
        }
      }
      if (1 != JJ && FJ.some((JJ => JJ.comment >= 0))) {
        let JJ = [];
        for (let {
            line: cJ,
            comment: ZJ,
            token: UJ
          }
          of FJ)
          if (ZJ >= 0) {
            let FJ = cJ.from + ZJ,
              eJ = FJ + UJ.length;
            " " == cJ.text[eJ - cJ.from] && eJ++, JJ.push({
              from: FJ,
              to: eJ
            })
          } return {
          changes: JJ
        }
      }
      return null
    }
    const rJ = XJ.d.define(),
      vJ = XJ.d.define(),
      mJ = XJ.p.define(),
      QJ = XJ.p.define({
        combine: JJ => (0, XJ.S)(JJ, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (JJ, cJ) => cJ
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (JJ, cJ) => (ZJ, FJ) => JJ(ZJ, FJ) || cJ(ZJ, FJ)
        })
      }),
      EJ = XJ.E.define({
        create: () => zJ.empty,
        update(JJ, cJ) {
          let ZJ = cJ.state.facet(QJ),
            FJ = cJ.annotation(rJ);
          if (FJ) {
            let UJ = MJ.fromTransaction(cJ, FJ.selection),
              eJ = FJ.side,
              XJ = 0 == eJ ? JJ.undone : JJ.done;
            return XJ = UJ ? bJ(XJ, XJ.length, ZJ.minDepth, UJ) : HJ(XJ, cJ.startState.selection), new zJ(0 == eJ ? FJ.rest : XJ, 0 == eJ ? XJ : FJ.rest)
          }
          let UJ = cJ.annotation(vJ);
          if ("full" != UJ && "before" != UJ || (JJ = JJ.isolate()), !1 === cJ.annotation(XJ.J.addToHistory)) return cJ.changes.empty ? JJ : JJ.addMapping(cJ.changes.desc);
          let eJ = MJ.fromTransaction(cJ),
            AJ = cJ.annotation(XJ.J.time),
            qJ = cJ.annotation(XJ.J.userEvent);
          return eJ ? JJ = JJ.addChanges(eJ, AJ, qJ, ZJ, cJ) : cJ.selection && (JJ = JJ.addSelection(cJ.startState.selection, AJ, qJ, ZJ.newGroupDelay)), "full" != UJ && "after" != UJ || (JJ = JJ.isolate()), JJ
        },
        toJSON: JJ => ({
          done: JJ.done.map((JJ => JJ.toJSON())),
          undone: JJ.undone.map((JJ => JJ.toJSON()))
        }),
        fromJSON: JJ => new zJ(JJ.done.map(MJ.fromJSON), JJ.undone.map(MJ.fromJSON))
      });

    function VJ(JJ, cJ) {
      return function(ZJ) {
        let {
          state: FJ,
          dispatch: UJ
        } = ZJ;
        if (!cJ && FJ.readOnly) return !1;
        let eJ = FJ.field(EJ, !1);
        if (!eJ) return !1;
        let XJ = eJ.pop(JJ, FJ, cJ);
        return !!XJ && (UJ(XJ), !0)
      }
    }
    const KJ = VJ(0, !1),
      yJ = VJ(1, !1),
      SJ = VJ(0, !0),
      IJ = VJ(1, !0);
    class MJ {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        this.changes = JJ, this.effects = cJ, this.mapped = ZJ, this.startSelection = FJ, this.selectionsAfter = UJ
      }
      setSelAfter(JJ) {
        return new MJ(this.changes, this.effects, this.mapped, this.startSelection, JJ)
      }
      toJSON() {
        var JJ, cJ, ZJ;
        return {
          changes: null === (JJ = this.changes) || void 0 === JJ ? void 0 : JJ.toJSON(),
          mapped: null === (cJ = this.mapped) || void 0 === cJ ? void 0 : cJ.toJSON(),
          startSelection: null === (ZJ = this.startSelection) || void 0 === ZJ ? void 0 : ZJ.toJSON(),
          selectionsAfter: this.selectionsAfter.map((JJ => JJ.toJSON()))
        }
      }
      static fromJSON(JJ) {
        return new MJ(JJ.changes && XJ.ChangeSet.fromJSON(JJ.changes), [], JJ.mapped && XJ.h.fromJSON(JJ.mapped), JJ.startSelection && XJ.m.fromJSON(JJ.startSelection), JJ.selectionsAfter.map(XJ.m.fromJSON))
      }
      static fromTransaction(JJ, cJ) {
        let ZJ = WJ;
        for (let FJ of JJ.startState.facet(mJ)) {
          let cJ = FJ(JJ);
          cJ.length && (ZJ = ZJ.concat(cJ))
        }
        return !ZJ.length && JJ.changes.empty ? null : new MJ(JJ.changes.invert(JJ.startState.doc), ZJ, void 0, cJ || JJ.startState.selection, WJ)
      }
      static selection(JJ) {
        return new MJ(void 0, WJ, void 0, void 0, JJ)
      }
    }

    function bJ(JJ, cJ, ZJ, FJ) {
      let UJ = cJ + 1 > ZJ + 20 ? cJ - ZJ - 1 : 0,
        eJ = JJ.slice(UJ, cJ);
      return eJ.push(FJ), eJ
    }

    function wJ(JJ, cJ) {
      return JJ.length ? cJ.length ? JJ.concat(cJ) : JJ : cJ
    }
    const WJ = [],
      gJ = 200;

    function HJ(JJ, cJ) {
      if (JJ.length) {
        let ZJ = JJ[JJ.length - 1],
          FJ = ZJ.selectionsAfter.slice(Math.max(0, ZJ.selectionsAfter.length - gJ));
        return FJ.length && FJ[FJ.length - 1].eq(cJ) ? JJ : (FJ.push(cJ), bJ(JJ, JJ.length - 1, 1e9, ZJ.setSelAfter(FJ)))
      }
      return [MJ.selection([cJ])]
    }

    function PJ(JJ) {
      let cJ = JJ[JJ.length - 1],
        ZJ = JJ.slice();
      return ZJ[JJ.length - 1] = cJ.setSelAfter(cJ.selectionsAfter.slice(0, cJ.selectionsAfter.length - 1)), ZJ
    }

    function kJ(JJ, cJ) {
      if (!JJ.length) return JJ;
      let ZJ = JJ.length,
        FJ = WJ;
      for (; ZJ;) {
        let UJ = pJ(JJ[ZJ - 1], cJ, FJ);
        if (UJ.changes && !UJ.changes.empty || UJ.effects.length) {
          let cJ = JJ.slice(0, ZJ);
          return cJ[ZJ - 1] = UJ, cJ
        }
        cJ = UJ.mapped, ZJ--, FJ = UJ.selectionsAfter
      }
      return FJ.length ? [MJ.selection(FJ)] : WJ
    }

    function pJ(JJ, cJ, ZJ) {
      let FJ = wJ(JJ.selectionsAfter.length ? JJ.selectionsAfter.map((JJ => JJ.map(cJ))) : WJ, ZJ);
      if (!JJ.changes) return MJ.selection(FJ);
      let UJ = JJ.changes.map(cJ),
        eJ = cJ.mapDesc(JJ.changes, !0),
        AJ = JJ.mapped ? JJ.mapped.composeDesc(eJ) : eJ;
      return new MJ(UJ, XJ.A.mapEffects(JJ.effects, cJ), AJ, JJ.startSelection.map(eJ), FJ)
    }
    const dJ = /^(input\.type|delete)($|\.)/;
    class zJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = JJ, this.undone = cJ, this.prevTime = ZJ, this.prevUserEvent = FJ
      }
      isolate() {
        return this.prevTime ? new zJ(this.done, this.undone) : this
      }
      addChanges(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = this.done,
          AJ = eJ[eJ.length - 1];
        return eJ = AJ && AJ.changes && !AJ.changes.empty && JJ.changes && (!ZJ || dJ.test(ZJ)) && (!AJ.selectionsAfter.length && cJ - this.prevTime < FJ.newGroupDelay && FJ.joinToEvent(UJ, function(JJ, cJ) {
          let ZJ = [],
            FJ = !1;
          return JJ.iterChangedRanges(((JJ, cJ) => ZJ.push(JJ, cJ))), cJ.iterChangedRanges(((JJ, cJ, UJ, eJ) => {
            for (let XJ = 0; XJ < ZJ.length;) {
              let JJ = ZJ[XJ++],
                cJ = ZJ[XJ++];
              eJ >= JJ && UJ <= cJ && (FJ = !0)
            }
          })), FJ
        }(AJ.changes, JJ.changes)) || "input.type.compose" == ZJ) ? bJ(eJ, eJ.length - 1, FJ.minDepth, new MJ(JJ.changes.compose(AJ.changes), wJ(XJ.A.mapEffects(JJ.effects, AJ.changes), AJ.effects), AJ.mapped, AJ.startSelection, WJ)) : bJ(eJ, eJ.length, FJ.minDepth, JJ), new zJ(eJ, WJ, cJ, ZJ)
      }
      addSelection(JJ, cJ, ZJ, FJ) {
        let UJ = this.done.length ? this.done[this.done.length - 1].selectionsAfter : WJ;
        return UJ.length > 0 && cJ - this.prevTime < FJ && ZJ == this.prevUserEvent && ZJ && /^select($|\.)/.test(ZJ) && (eJ = UJ[UJ.length - 1], XJ = JJ, eJ.ws.length == XJ.ws.length && 0 === eJ.ws.filter(((JJ, cJ) => JJ.empty != XJ.ws[cJ].empty)).length) ? this : new zJ(HJ(this.done, JJ), this.undone, cJ, ZJ);
        var eJ, XJ
      }
      addMapping(JJ) {
        return new zJ(kJ(this.done, JJ), kJ(this.undone, JJ), this.prevTime, this.prevUserEvent)
      }
      pop(JJ, cJ, ZJ) {
        let FJ = 0 == JJ ? this.done : this.undone;
        if (0 == FJ.length) return null;
        let UJ = FJ[FJ.length - 1],
          eJ = UJ.selectionsAfter[0] || (UJ.startSelection ? UJ.startSelection.map(UJ.changes.invertedDesc, 1) : cJ.selection);
        if (ZJ && UJ.selectionsAfter.length) return cJ.update({
          selection: UJ.selectionsAfter[UJ.selectionsAfter.length - 1],
          annotations: rJ.of({
            side: JJ,
            rest: PJ(FJ),
            selection: eJ
          }),
          userEvent: 0 == JJ ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (UJ.changes) {
          let ZJ = 1 == FJ.length ? WJ : FJ.slice(0, FJ.length - 1);
          return UJ.mapped && (ZJ = kJ(ZJ, UJ.mapped)), cJ.update({
            changes: UJ.changes,
            selection: UJ.startSelection,
            effects: UJ.effects,
            annotations: rJ.of({
              side: JJ,
              rest: ZJ,
              selection: eJ
            }),
            filter: !1,
            userEvent: 0 == JJ ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    zJ.empty = new zJ(WJ, WJ);
    const NJ = [{
      key: "Mod-z",
      run: KJ,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: yJ,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: yJ,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: SJ,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: IJ,
      preventDefault: !0
    }];

    function OJ(JJ, cJ) {
      return XJ.m.create(JJ.ws.map(cJ), JJ.mainIndex)
    }

    function TJ(JJ, cJ) {
      return JJ.update({
        selection: cJ,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function CJ(JJ, cJ) {
      let {
        state: ZJ,
        dispatch: FJ
      } = JJ, UJ = OJ(ZJ.selection, cJ);
      return !UJ.eq(ZJ.selection, !0) && (FJ(TJ(ZJ, UJ)), !0)
    }

    function uJ(JJ, cJ) {
      return XJ.m.cursor(cJ ? JJ.to : JJ.from)
    }

    function iJ(JJ, cJ) {
      return CJ(JJ, (ZJ => ZJ.empty ? JJ.moveByChar(ZJ, cJ) : uJ(ZJ, cJ)))
    }

    function RJ(JJ) {
      return JJ.textDirectionAt(JJ.state.selection.main.head) == AJ.e.LTR
    }
    const LJ = JJ => iJ(JJ, !RJ(JJ)),
      aJ = JJ => iJ(JJ, RJ(JJ));

    function BJ(JJ, cJ) {
      return CJ(JJ, (ZJ => ZJ.empty ? JJ.moveByGroup(ZJ, cJ) : uJ(ZJ, cJ)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function tJ(JJ, cJ, ZJ) {
      if (cJ.type.prop(ZJ)) return !0;
      let FJ = cJ.to - cJ.from;
      return FJ && (FJ > 2 || /[^\s,.;:]/.test(JJ.sliceDoc(cJ.from, cJ.to))) || cJ.firstChild
    }

    function oJ(JJ, cJ, ZJ) {
      let FJ, UJ, eJ = (0, qJ.ub)(JJ).resolveInner(cJ.head),
        AJ = ZJ ? jJ.h.closedBy : jJ.h.openedBy;
      for (let XJ = cJ.head;;) {
        let cJ = ZJ ? eJ.childAfter(XJ) : eJ.childBefore(XJ);
        if (!cJ) break;
        tJ(JJ, cJ, AJ) ? eJ = cJ : XJ = ZJ ? cJ.to : cJ.from
      }
      return UJ = eJ.type.prop(AJ) && (FJ = ZJ ? (0, qJ.fb)(JJ, eJ.from, 1) : (0, qJ.fb)(JJ, eJ.to, -1)) && FJ.matched ? ZJ ? FJ.end.to : FJ.end.from : ZJ ? eJ.to : eJ.from, XJ.m.cursor(UJ, ZJ ? -1 : 1)
    }

    function lJ(JJ, cJ) {
      return CJ(JJ, (ZJ => {
        if (!ZJ.empty) return uJ(ZJ, cJ);
        let FJ = JJ.moveVertically(ZJ, cJ);
        return FJ.head != ZJ.head ? FJ : JJ.moveToLineBoundary(ZJ, cJ)
      }))
    }
    const Jc = JJ => lJ(JJ, !1),
      cc = JJ => lJ(JJ, !0);

    function Zc(JJ) {
      let cJ, ZJ = JJ.scrollDOM.clientHeight < JJ.scrollDOM.scrollHeight - 2,
        FJ = 0,
        UJ = 0;
      if (ZJ) {
        for (let cJ of JJ.state.facet(AJ.f.scrollMargins)) {
          let ZJ = cJ(JJ);
          (null === ZJ || void 0 === ZJ ? void 0 : ZJ.top) && (FJ = Math.max(null === ZJ || void 0 === ZJ ? void 0 : ZJ.top, FJ)), (null === ZJ || void 0 === ZJ ? void 0 : ZJ.bottom) && (UJ = Math.max(null === ZJ || void 0 === ZJ ? void 0 : ZJ.bottom, UJ))
        }
        cJ = JJ.scrollDOM.clientHeight - FJ - UJ
      } else cJ = (JJ.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: FJ,
        marginBottom: UJ,
        selfScroll: ZJ,
        height: Math.max(JJ.defaultLineHeight, cJ - 5)
      }
    }

    function Fc(JJ, cJ) {
      let ZJ, FJ = Zc(JJ),
        {
          state: UJ
        } = JJ,
        eJ = OJ(UJ.selection, (ZJ => ZJ.empty ? JJ.moveVertically(ZJ, cJ, FJ.height) : uJ(ZJ, cJ)));
      if (eJ.eq(UJ.selection)) return !1;
      if (FJ.selfScroll) {
        let cJ = JJ.coordsAtPos(UJ.selection.main.head),
          XJ = JJ.scrollDOM.getBoundingClientRect(),
          qJ = XJ.top + FJ.marginTop,
          jJ = XJ.bottom - FJ.marginBottom;
        cJ && cJ.top > qJ && cJ.bottom < jJ && (ZJ = AJ.f.scrollIntoView(eJ.main.head, {
          y: "start",
          yMargin: cJ.top - qJ
        }))
      }
      return JJ.dispatch(TJ(UJ, eJ), {
        effects: ZJ
      }), !0
    }
    const Uc = JJ => Fc(JJ, !1),
      ec = JJ => Fc(JJ, !0);

    function Xc(JJ, cJ, ZJ) {
      let FJ = JJ.lineBlockAt(cJ.head),
        UJ = JJ.moveToLineBoundary(cJ, ZJ);
      if (UJ.head == cJ.head && UJ.head != (ZJ ? FJ.to : FJ.from) && (UJ = JJ.moveToLineBoundary(cJ, ZJ, !1)), !ZJ && UJ.head == FJ.from && FJ.length) {
        let ZJ = /^\s*/.exec(JJ.state.sliceDoc(FJ.from, Math.min(FJ.from + 100, FJ.to)))[0].length;
        ZJ && cJ.head != FJ.from + ZJ && (UJ = XJ.m.cursor(FJ.from + ZJ))
      }
      return UJ
    }

    function Ac(JJ, cJ, ZJ) {
      let FJ = !1,
        UJ = OJ(JJ.selection, (cJ => {
          let UJ = (0, qJ.fb)(JJ, cJ.head, -1) || (0, qJ.fb)(JJ, cJ.head, 1) || cJ.head > 0 && (0, qJ.fb)(JJ, cJ.head - 1, 1) || cJ.head < JJ.doc.length && (0, qJ.fb)(JJ, cJ.head + 1, -1);
          if (!UJ || !UJ.end) return cJ;
          FJ = !0;
          let eJ = UJ.start.from == cJ.head ? UJ.end.to : UJ.end.from;
          return ZJ ? XJ.m.range(cJ.anchor, eJ) : XJ.m.cursor(eJ)
        }));
      return !!FJ && (cJ(TJ(JJ, UJ)), !0)
    }

    function qc(JJ, cJ) {
      let ZJ = OJ(JJ.state.selection, (JJ => {
        let ZJ = cJ(JJ);
        return XJ.m.range(JJ.anchor, ZJ.head, ZJ.goalColumn, ZJ.bidiLevel || void 0, ZJ.assoc)
      }));
      return !ZJ.eq(JJ.state.selection) && (JJ.dispatch(TJ(JJ.state, ZJ)), !0)
    }

    function jc(JJ, cJ) {
      return qc(JJ, (ZJ => JJ.moveByChar(ZJ, cJ)))
    }
    const Yc = JJ => jc(JJ, !RJ(JJ)),
      hc = JJ => jc(JJ, RJ(JJ));

    function Dc(JJ, cJ) {
      return qc(JJ, (ZJ => JJ.moveByGroup(ZJ, cJ)))
    }

    function sc(JJ, cJ) {
      return qc(JJ, (ZJ => JJ.moveVertically(ZJ, cJ)))
    }
    const nc = JJ => sc(JJ, !1),
      Gc = JJ => sc(JJ, !0);

    function fc(JJ, cJ) {
      return qc(JJ, (ZJ => JJ.moveVertically(ZJ, cJ, Zc(JJ).height)))
    }
    const xc = JJ => fc(JJ, !1),
      rc = JJ => fc(JJ, !0),
      vc = JJ => {
        let {
          state: cJ,
          dispatch: ZJ
        } = JJ;
        return ZJ(TJ(cJ, {
          anchor: 0
        })), !0
      },
      mc = JJ => {
        let {
          state: cJ,
          dispatch: ZJ
        } = JJ;
        return ZJ(TJ(cJ, {
          anchor: cJ.doc.length
        })), !0
      },
      Qc = JJ => {
        let {
          state: cJ,
          dispatch: ZJ
        } = JJ;
        return ZJ(TJ(cJ, {
          anchor: cJ.selection.main.anchor,
          head: 0
        })), !0
      },
      Ec = JJ => {
        let {
          state: cJ,
          dispatch: ZJ
        } = JJ;
        return ZJ(TJ(cJ, {
          anchor: cJ.selection.main.anchor,
          head: cJ.doc.length
        })), !0
      };

    function Vc(JJ, cJ) {
      let {
        state: ZJ
      } = JJ, FJ = ZJ.selection, UJ = ZJ.selection.ws.slice();
      for (let eJ of ZJ.selection.ws) {
        let FJ = ZJ.doc.lineAt(eJ.head);
        if (cJ ? FJ.to < JJ.state.doc.length : FJ.from > 0)
          for (let ZJ = eJ;;) {
            let eJ = JJ.moveVertically(ZJ, cJ);
            if (eJ.head < FJ.from || eJ.head > FJ.to) {
              UJ.some((JJ => JJ.head == eJ.head)) || UJ.push(eJ);
              break
            }
            if (eJ.head == ZJ.head) break;
            ZJ = eJ
          }
      }
      return UJ.length != FJ.ws.length && (JJ.dispatch(TJ(ZJ, XJ.m.create(UJ, UJ.length - 1))), !0)
    }

    function Kc(JJ, cJ) {
      if (JJ.state.readOnly) return !1;
      let ZJ = "delete.selection",
        {
          state: FJ
        } = JJ,
        UJ = FJ.changeByRange((FJ => {
          let {
            from: UJ,
            to: eJ
          } = FJ;
          if (UJ == eJ) {
            let XJ = cJ(FJ);
            XJ < UJ ? (ZJ = "delete.backward", XJ = yc(JJ, XJ, !1)) : XJ > UJ && (ZJ = "delete.forward", XJ = yc(JJ, XJ, !0)), UJ = Math.min(UJ, XJ), eJ = Math.max(eJ, XJ)
          } else UJ = yc(JJ, UJ, !1), eJ = yc(JJ, eJ, !0);
          return UJ == eJ ? {
            range: FJ
          } : {
            changes: {
              from: UJ,
              to: eJ
            },
            range: XJ.m.cursor(UJ, UJ < FJ.head ? -1 : 1)
          }
        }));
      return !UJ.changes.empty && (JJ.dispatch(FJ.update(UJ, {
        scrollIntoView: !0,
        userEvent: ZJ,
        effects: "delete.selection" == ZJ ? AJ.f.announce.of(FJ.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function yc(JJ, cJ, ZJ) {
      if (JJ instanceof AJ.f)
        for (let FJ of JJ.state.facet(AJ.f.atomicRanges).map((cJ => cJ(JJ)))) FJ.between(cJ, cJ, ((JJ, FJ) => {
          JJ < cJ && FJ > cJ && (cJ = ZJ ? FJ : JJ)
        }));
      return cJ
    }
    const Sc = (JJ, cJ, ZJ) => Kc(JJ, (FJ => {
        let UJ, eJ, AJ = FJ.from,
          {
            state: jJ
          } = JJ,
          YJ = jJ.doc.lineAt(AJ);
        if (ZJ && !cJ && AJ > YJ.from && AJ < YJ.from + 200 && !/[^ \t]/.test(UJ = YJ.text.slice(0, AJ - YJ.from))) {
          if ("\t" == UJ[UJ.length - 1]) return AJ - 1;
          let JJ = (0, XJ.U)(UJ, jJ.tabSize) % (0, qJ.S)(jJ) || (0, qJ.S)(jJ);
          for (let cJ = 0; cJ < JJ && " " == UJ[UJ.length - 1 - cJ]; cJ++) AJ--;
          eJ = AJ
        } else eJ = (0, XJ.X)(YJ.text, AJ - YJ.from, cJ, cJ) + YJ.from, eJ == AJ && YJ.number != (cJ ? jJ.doc.lines : 1) ? eJ += cJ ? 1 : -1 : !cJ && /[\ufe00-\ufe0f]/.test(YJ.text.slice(eJ - YJ.from, AJ - YJ.from)) && (eJ = (0, XJ.X)(YJ.text, eJ - YJ.from, !1, !1) + YJ.from);
        return eJ
      })),
      Ic = JJ => Sc(JJ, !1, !0),
      Mc = JJ => Sc(JJ, !0, !1),
      bc = (JJ, cJ) => Kc(JJ, (ZJ => {
        let FJ = ZJ.head,
          {
            state: UJ
          } = JJ,
          eJ = UJ.doc.lineAt(FJ),
          AJ = UJ.charCategorizer(FJ);
        for (let JJ = null;;) {
          if (FJ == (cJ ? eJ.to : eJ.from)) {
            FJ == ZJ.head && eJ.number != (cJ ? UJ.doc.lines : 1) && (FJ += cJ ? 1 : -1);
            break
          }
          let qJ = (0, XJ.X)(eJ.text, FJ - eJ.from, cJ) + eJ.from,
            jJ = eJ.text.slice(Math.min(FJ, qJ) - eJ.from, Math.max(FJ, qJ) - eJ.from),
            YJ = AJ(jJ);
          if (null != JJ && YJ != JJ) break;
          " " == jJ && FJ == ZJ.head || (JJ = YJ), FJ = qJ
        }
        return FJ
      })),
      wc = JJ => bc(JJ, !1);

    function Wc(JJ) {
      let cJ = [],
        ZJ = -1;
      for (let FJ of JJ.selection.ws) {
        let UJ = JJ.doc.lineAt(FJ.from),
          eJ = JJ.doc.lineAt(FJ.to);
        if (FJ.empty || FJ.to != eJ.from || (eJ = JJ.doc.lineAt(FJ.to - 1)), ZJ >= UJ.number) {
          let JJ = cJ[cJ.length - 1];
          JJ.to = eJ.to, JJ.ws.push(FJ)
        } else cJ.push({
          from: UJ.from,
          to: eJ.to,
          ws: [FJ]
        });
        ZJ = eJ.number + 1
      }
      return cJ
    }

    function gc(JJ, cJ, ZJ) {
      if (JJ.readOnly) return !1;
      let FJ = [],
        UJ = [];
      for (let eJ of Wc(JJ)) {
        if (ZJ ? eJ.to == JJ.doc.length : 0 == eJ.from) continue;
        let cJ = JJ.doc.lineAt(ZJ ? eJ.to + 1 : eJ.from - 1),
          AJ = cJ.length + 1;
        if (ZJ) {
          FJ.push({
            from: eJ.to,
            to: cJ.to
          }, {
            from: eJ.from,
            insert: cJ.text + JJ.lineBreak
          });
          for (let cJ of eJ.ws) UJ.push(XJ.m.range(Math.min(JJ.doc.length, cJ.anchor + AJ), Math.min(JJ.doc.length, cJ.head + AJ)))
        } else {
          FJ.push({
            from: cJ.from,
            to: eJ.from
          }, {
            from: eJ.to,
            insert: JJ.lineBreak + cJ.text
          });
          for (let JJ of eJ.ws) UJ.push(XJ.m.range(JJ.anchor - AJ, JJ.head - AJ))
        }
      }
      return !!FJ.length && (cJ(JJ.update({
        changes: FJ,
        scrollIntoView: !0,
        selection: XJ.m.create(UJ, JJ.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function Hc(JJ, cJ, ZJ) {
      if (JJ.readOnly) return !1;
      let FJ = [];
      for (let eJ of Wc(JJ)) ZJ ? FJ.push({
        from: eJ.from,
        insert: JJ.doc.slice(eJ.from, eJ.to) + JJ.lineBreak
      }) : FJ.push({
        from: eJ.to,
        insert: JJ.lineBreak + JJ.doc.slice(eJ.from, eJ.to)
      });
      let UJ = JJ.changes(FJ);
      return cJ(JJ.update({
        changes: UJ,
        selection: JJ.selection.map(UJ, ZJ ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const Pc = kc(!1);

    function kc(JJ) {
      return cJ => {
        let {
          state: ZJ,
          dispatch: FJ
        } = cJ;
        if (ZJ.readOnly) return !1;
        let UJ = ZJ.changeByRange((cJ => {
          let {
            from: FJ,
            to: UJ
          } = cJ, eJ = ZJ.doc.lineAt(FJ), AJ = !JJ && FJ == UJ && function(JJ, cJ) {
            if (/\(\)|\[\]|\{\}/.test(JJ.sliceDoc(cJ - 1, cJ + 1))) return {
              from: cJ,
              to: cJ
            };
            let ZJ, FJ = (0, qJ.ub)(JJ).resolveInner(cJ),
              UJ = FJ.childBefore(cJ),
              eJ = FJ.childAfter(cJ);
            return UJ && eJ && UJ.to <= cJ && eJ.from >= cJ && (ZJ = UJ.type.prop(jJ.h.closedBy)) && ZJ.indexOf(eJ.name) > -1 && JJ.doc.lineAt(UJ.to).from == JJ.doc.lineAt(eJ.from).from && !/\S/.test(JJ.sliceDoc(UJ.to, eJ.from)) ? {
              from: UJ.to,
              to: eJ.from
            } : null
          }(ZJ, FJ);
          JJ && (FJ = UJ = (UJ <= eJ.to ? eJ : ZJ.doc.lineAt(UJ)).to);
          let YJ = new qJ.d(ZJ, {
              simulateBreak: FJ,
              simulateDoubleBreak: !!AJ
            }),
            hJ = (0, qJ.W)(YJ, FJ);
          for (null == hJ && (hJ = (0, XJ.U)(/^\s*/.exec(ZJ.doc.lineAt(FJ).text)[0], ZJ.tabSize)); UJ < eJ.to && /\s/.test(eJ.text[UJ - eJ.from]);) UJ++;
          AJ ? ({
            from: FJ,
            to: UJ
          } = AJ) : FJ > eJ.from && FJ < eJ.from + 100 && !/\S/.test(eJ.text.slice(0, FJ)) && (FJ = eJ.from);
          let DJ = ["", (0, qJ.cb)(ZJ, hJ)];
          return AJ && DJ.push((0, qJ.cb)(ZJ, YJ.lineIndent(eJ.from, -1))), {
            changes: {
              from: FJ,
              to: UJ,
              insert: XJ.F.of(DJ)
            },
            range: XJ.m.cursor(FJ + 1 + DJ[1].length)
          }
        }));
        return FJ(ZJ.update(UJ, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function pc(JJ, cJ) {
      let ZJ = -1;
      return JJ.changeByRange((FJ => {
        let UJ = [];
        for (let XJ = FJ.from; XJ <= FJ.to;) {
          let eJ = JJ.doc.lineAt(XJ);
          eJ.number > ZJ && (FJ.empty || FJ.to > eJ.from) && (cJ(eJ, UJ, FJ), ZJ = eJ.number), XJ = eJ.to + 1
        }
        let eJ = JJ.changes(UJ);
        return {
          changes: UJ,
          range: XJ.m.range(eJ.mapPos(FJ.anchor, 1), eJ.mapPos(FJ.head, 1))
        }
      }))
    }
    const dc = JJ => {
        let {
          state: cJ,
          dispatch: ZJ
        } = JJ;
        return !cJ.readOnly && (ZJ(cJ.update(pc(cJ, ((JJ, ZJ) => {
          ZJ.push({
            from: JJ.from,
            insert: cJ.facet(qJ.db)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      zc = JJ => {
        let {
          state: cJ,
          dispatch: ZJ
        } = JJ;
        return !cJ.readOnly && (ZJ(cJ.update(pc(cJ, ((JJ, ZJ) => {
          let FJ = /^\s*/.exec(JJ.text)[0];
          if (!FJ) return;
          let UJ = (0, XJ.U)(FJ, cJ.tabSize),
            eJ = 0,
            AJ = (0, qJ.cb)(cJ, Math.max(0, UJ - (0, qJ.S)(cJ)));
          for (; eJ < FJ.length && eJ < AJ.length && FJ.charCodeAt(eJ) == AJ.charCodeAt(eJ);) eJ++;
          ZJ.push({
            from: JJ.from + eJ,
            to: JJ.from + FJ.length,
            insert: AJ.slice(eJ)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      Nc = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: JJ => CJ(JJ, (cJ => oJ(JJ.state, cJ, !RJ(JJ)))),
        shift: JJ => qc(JJ, (cJ => oJ(JJ.state, cJ, !RJ(JJ))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: JJ => CJ(JJ, (cJ => oJ(JJ.state, cJ, RJ(JJ)))),
        shift: JJ => qc(JJ, (cJ => oJ(JJ.state, cJ, RJ(JJ))))
      }, {
        key: "Alt-ArrowUp",
        run: JJ => {
          let {
            state: cJ,
            dispatch: ZJ
          } = JJ;
          return gc(cJ, ZJ, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: JJ => {
          let {
            state: cJ,
            dispatch: ZJ
          } = JJ;
          return Hc(cJ, ZJ, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: JJ => {
          let {
            state: cJ,
            dispatch: ZJ
          } = JJ;
          return gc(cJ, ZJ, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: JJ => {
          let {
            state: cJ,
            dispatch: ZJ
          } = JJ;
          return Hc(cJ, ZJ, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: JJ => Vc(JJ, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: JJ => Vc(JJ, !0)
      }, {
        key: "Escape",
        run: JJ => {
          let {
            state: cJ,
            dispatch: ZJ
          } = JJ, FJ = cJ.selection, UJ = null;
          return FJ.ws.length > 1 ? UJ = XJ.m.create([FJ.main]) : FJ.main.empty || (UJ = XJ.m.create([XJ.m.cursor(FJ.main.head)])), !!UJ && (ZJ(TJ(cJ, UJ)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: kc(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: JJ => {
          let {
            state: cJ,
            dispatch: ZJ
          } = JJ, FJ = Wc(cJ).map((JJ => {
            let {
              from: ZJ,
              to: FJ
            } = JJ;
            return XJ.m.range(ZJ, Math.min(FJ + 1, cJ.doc.length))
          }));
          return ZJ(cJ.update({
            selection: XJ.m.create(FJ),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: JJ => {
          let {
            state: cJ,
            dispatch: ZJ
          } = JJ, FJ = OJ(cJ.selection, (JJ => {
            let ZJ = (0, qJ.ub)(cJ),
              FJ = ZJ.resolveStack(JJ.from, 1);
            if (JJ.empty) {
              let cJ = ZJ.resolveStack(JJ.from, -1);
              cJ.node.from >= FJ.node.from && cJ.node.to <= FJ.node.to && (FJ = cJ)
            }
            for (let cJ = FJ; cJ; cJ = cJ.next) {
              let {
                node: ZJ
              } = cJ;
              if ((ZJ.from < JJ.from && ZJ.to >= JJ.to || ZJ.to > JJ.to && ZJ.from <= JJ.from) && cJ.next) return XJ.m.range(ZJ.to, ZJ.from)
            }
            return JJ
          }));
          return !FJ.eq(cJ.selection) && (ZJ(TJ(cJ, FJ)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: zc
      }, {
        key: "Mod-]",
        run: dc
      }, {
        key: "Mod-Alt-\\",
        run: JJ => {
          let {
            state: cJ,
            dispatch: ZJ
          } = JJ;
          if (cJ.readOnly) return !1;
          let FJ = Object.create(null),
            UJ = new qJ.d(cJ, {
              overrideIndentation: JJ => {
                let cJ = FJ[JJ];
                return null == cJ ? -1 : cJ
              }
            }),
            eJ = pc(cJ, ((JJ, ZJ, eJ) => {
              let XJ = (0, qJ.W)(UJ, JJ.from);
              if (null == XJ) return;
              /\S/.test(JJ.text) || (XJ = 0);
              let AJ = /^\s*/.exec(JJ.text)[0],
                jJ = (0, qJ.cb)(cJ, XJ);
              (AJ != jJ || eJ.from < JJ.from + AJ.length) && (FJ[JJ.from] = XJ, ZJ.push({
                from: JJ.from,
                to: JJ.from + AJ.length,
                insert: jJ
              }))
            }));
          return eJ.changes.empty || ZJ(cJ.update(eJ, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: JJ => {
          if (JJ.state.readOnly) return !1;
          let {
            state: cJ
          } = JJ, ZJ = cJ.changes(Wc(cJ).map((JJ => {
            let {
              from: ZJ,
              to: FJ
            } = JJ;
            return ZJ > 0 ? ZJ-- : FJ < cJ.doc.length && FJ++, {
              from: ZJ,
              to: FJ
            }
          }))), FJ = OJ(cJ.selection, (cJ => {
            let ZJ;
            if (JJ.lineWrapping) {
              let FJ = JJ.lineBlockAt(cJ.head),
                UJ = JJ.coordsAtPos(cJ.head, cJ.assoc || 1);
              UJ && (ZJ = FJ.bottom + JJ.documentTop - UJ.bottom + JJ.defaultLineHeight / 2)
            }
            return JJ.moveVertically(cJ, !0, ZJ)
          })).map(ZJ);
          return JJ.dispatch({
            changes: ZJ,
            selection: FJ,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: JJ => {
          let {
            state: cJ,
            dispatch: ZJ
          } = JJ;
          return Ac(cJ, ZJ, !1)
        }
      }, {
        key: "Mod-/",
        run: JJ => {
          let {
            state: cJ
          } = JJ, ZJ = cJ.doc.lineAt(cJ.selection.main.from), FJ = nJ(JJ.state, ZJ.from);
          return FJ.line ? hJ(JJ) : !!FJ.block && sJ(JJ)
        }
      }, {
        key: "Alt-A",
        run: DJ
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: JJ => (JJ.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: LJ,
        shift: Yc,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: JJ => BJ(JJ, !RJ(JJ)),
        shift: JJ => Dc(JJ, !RJ(JJ)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: JJ => CJ(JJ, (cJ => Xc(JJ, cJ, !RJ(JJ)))),
        shift: JJ => qc(JJ, (cJ => Xc(JJ, cJ, !RJ(JJ)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: aJ,
        shift: hc,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: JJ => BJ(JJ, RJ(JJ)),
        shift: JJ => Dc(JJ, RJ(JJ)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: JJ => CJ(JJ, (cJ => Xc(JJ, cJ, RJ(JJ)))),
        shift: JJ => qc(JJ, (cJ => Xc(JJ, cJ, RJ(JJ)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: Jc,
        shift: nc,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: vc,
        shift: Qc
      }, {
        mac: "Ctrl-ArrowUp",
        run: Uc,
        shift: xc
      }, {
        key: "ArrowDown",
        run: cc,
        shift: Gc,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: mc,
        shift: Ec
      }, {
        mac: "Ctrl-ArrowDown",
        run: ec,
        shift: rc
      }, {
        key: "PageUp",
        run: Uc,
        shift: xc
      }, {
        key: "PageDown",
        run: ec,
        shift: rc
      }, {
        key: "Home",
        run: JJ => CJ(JJ, (cJ => Xc(JJ, cJ, !1))),
        shift: JJ => qc(JJ, (cJ => Xc(JJ, cJ, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: vc,
        shift: Qc
      }, {
        key: "End",
        run: JJ => CJ(JJ, (cJ => Xc(JJ, cJ, !0))),
        shift: JJ => qc(JJ, (cJ => Xc(JJ, cJ, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: mc,
        shift: Ec
      }, {
        key: "Enter",
        run: Pc,
        shift: Pc
      }, {
        key: "Mod-a",
        run: JJ => {
          let {
            state: cJ,
            dispatch: ZJ
          } = JJ;
          return ZJ(cJ.update({
            selection: {
              anchor: 0,
              head: cJ.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: Ic,
        shift: Ic,
        preventDefault: !0
      }, {
        key: "Delete",
        run: Mc,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: wc,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: JJ => bc(JJ, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: JJ => Kc(JJ, (cJ => {
          let ZJ = JJ.moveToLineBoundary(cJ, !1).head;
          return cJ.head > ZJ ? ZJ : Math.max(0, cJ.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: JJ => Kc(JJ, (cJ => {
          let ZJ = JJ.moveToLineBoundary(cJ, !0).head;
          return cJ.head < ZJ ? ZJ : Math.min(JJ.state.doc.length, cJ.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: LJ,
        shift: Yc,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: aJ,
        shift: hc
      }, {
        key: "Ctrl-p",
        run: Jc,
        shift: nc
      }, {
        key: "Ctrl-n",
        run: cc,
        shift: Gc
      }, {
        key: "Ctrl-a",
        run: JJ => CJ(JJ, (cJ => XJ.m.cursor(JJ.lineBlockAt(cJ.head).from, 1))),
        shift: JJ => qc(JJ, (cJ => XJ.m.cursor(JJ.lineBlockAt(cJ.head).from)))
      }, {
        key: "Ctrl-e",
        run: JJ => CJ(JJ, (cJ => XJ.m.cursor(JJ.lineBlockAt(cJ.head).to, -1))),
        shift: JJ => qc(JJ, (cJ => XJ.m.cursor(JJ.lineBlockAt(cJ.head).to)))
      }, {
        key: "Ctrl-d",
        run: Mc
      }, {
        key: "Ctrl-h",
        run: Ic
      }, {
        key: "Ctrl-k",
        run: JJ => Kc(JJ, (cJ => {
          let ZJ = JJ.lineBlockAt(cJ.head).to;
          return cJ.head < ZJ ? ZJ : Math.min(JJ.state.doc.length, cJ.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: wc
      }, {
        key: "Ctrl-o",
        run: JJ => {
          let {
            state: cJ,
            dispatch: ZJ
          } = JJ;
          if (cJ.readOnly) return !1;
          let FJ = cJ.changeByRange((JJ => ({
            changes: {
              from: JJ.from,
              to: JJ.to,
              insert: XJ.F.of(["", ""])
            },
            range: XJ.m.cursor(JJ.from)
          })));
          return ZJ(cJ.update(FJ, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: JJ => {
          let {
            state: cJ,
            dispatch: ZJ
          } = JJ;
          if (cJ.readOnly) return !1;
          let FJ = cJ.changeByRange((JJ => {
            if (!JJ.empty || 0 == JJ.from || JJ.from == cJ.doc.length) return {
              range: JJ
            };
            let ZJ = JJ.from,
              FJ = cJ.doc.lineAt(ZJ),
              UJ = ZJ == FJ.from ? ZJ - 1 : (0, XJ.X)(FJ.text, ZJ - FJ.from, !1) + FJ.from,
              eJ = ZJ == FJ.to ? ZJ + 1 : (0, XJ.X)(FJ.text, ZJ - FJ.from, !0) + FJ.from;
            return {
              changes: {
                from: UJ,
                to: eJ,
                insert: cJ.doc.slice(ZJ, eJ).append(cJ.doc.slice(UJ, ZJ))
              },
              range: XJ.m.cursor(eJ)
            }
          }));
          return !FJ.changes.empty && (ZJ(cJ.update(FJ, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: ec
      }].map((JJ => ({
        mac: JJ.key,
        run: JJ.run,
        shift: JJ.shift
      }))))),
      Oc = {
        key: "Tab",
        run: dc,
        shift: zc
      };
    var Tc = ZJ(40094),
      Cc = ZJ(40052),
      uc = ZJ(40097),
      ic = function(JJ) {
        void 0 === JJ && (JJ = {});
        var {
          crosshairCursor: cJ = !1
        } = JJ, ZJ = [];
        !1 !== JJ.closeBracketsKeymap && (ZJ = ZJ.concat(Cc.h)), !1 !== JJ.defaultKeymap && (ZJ = ZJ.concat(Nc)), !1 !== JJ.searchKeymap && (ZJ = ZJ.concat(Tc.e)), !1 !== JJ.historyKeymap && (ZJ = ZJ.concat(NJ)), !1 !== JJ.foldKeymap && (ZJ = ZJ.concat(qJ.I)), !1 !== JJ.completionKeymap && (ZJ = ZJ.concat(Cc.r)), !1 !== JJ.lintKeymap && (ZJ = ZJ.concat(uc.c));
        var FJ = [];
        return !1 !== JJ.lineNumbers && FJ.push((0, AJ.O)()), !1 !== JJ.highlightActiveLineGutter && FJ.push((0, AJ.A)()), !1 !== JJ.highlightSpecialChars && FJ.push((0, AJ.F)()), !1 !== JJ.history && FJ.push(function() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [EJ, QJ.of(JJ), AJ.f.domEventHandlers({
            beforeinput(JJ, cJ) {
              let ZJ = "historyUndo" == JJ.inputType ? KJ : "historyRedo" == JJ.inputType ? yJ : null;
              return !!ZJ && (JJ.preventDefault(), ZJ(cJ))
            }
          })]
        }()), !1 !== JJ.foldGutter && FJ.push((0, qJ.E)()), !1 !== JJ.drawSelection && FJ.push((0, AJ.n)()), !1 !== JJ.dropCursor && FJ.push((0, AJ.r)()), !1 !== JJ.allowMultipleSelections && FJ.push(XJ.o.allowMultipleSelections.of(!0)), !1 !== JJ.indentOnInput && FJ.push((0, qJ._)()), !1 !== JJ.syntaxHighlighting && FJ.push((0, qJ.nb)(qJ.q, {
          fallback: !0
        })), !1 !== JJ.bracketMatching && FJ.push((0, qJ.m)()), !1 !== JJ.closeBrackets && FJ.push((0, Cc.l)()), !1 !== JJ.autocompletion && FJ.push((0, Cc.e)()), !1 !== JJ.rectangularSelection && FJ.push((0, AJ.T)()), !1 !== cJ && FJ.push((0, AJ.m)()), !1 !== JJ.highlightActiveLine && FJ.push((0, AJ.D)()), !1 !== JJ.highlightSelectionMatches && FJ.push((0, Tc.d)()), JJ.tabSize && "number" === typeof JJ.tabSize && FJ.push(qJ.db.of(" ".repeat(JJ.tabSize))), FJ.concat([AJ.K.of(ZJ.flat())]).filter(Boolean)
      },
      Rc = ZJ(40084);
    const Lc = "#e5c07b",
      ac = "#e06c75",
      Bc = "#56b6c2",
      tc = "#ffffff",
      oc = "#abb2bf",
      lc = "#7d8799",
      JZ = "#61afef",
      cZ = "#98c379",
      ZZ = "#d19a66",
      FZ = "#c678dd",
      UZ = "#21252b",
      eZ = "#2c313a",
      XZ = "#282c34",
      AZ = "#353a42",
      qZ = "#3E4451",
      jZ = "#528bff",
      YZ = AJ.f.theme({
        "&": {
          color: oc,
          backgroundColor: XZ
        },
        ".cm-content": {
          caretColor: jZ
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: jZ
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: qZ
        },
        ".cm-panels": {
          backgroundColor: UZ,
          color: oc
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
          backgroundColor: XZ,
          color: lc,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: eZ
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: AZ
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: AZ,
          borderBottomColor: AZ
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: eZ,
            color: oc
          }
        }
      }, {
        dark: !0
      }),
      hZ = qJ.c.define([{
        tag: Rc.j.keyword,
        color: FZ
      }, {
        tag: [Rc.j.name, Rc.j.deleted, Rc.j.character, Rc.j.propertyName, Rc.j.macroName],
        color: ac
      }, {
        tag: [Rc.j.function(Rc.j.variableName), Rc.j.labelName],
        color: JZ
      }, {
        tag: [Rc.j.color, Rc.j.constant(Rc.j.name), Rc.j.standard(Rc.j.name)],
        color: ZZ
      }, {
        tag: [Rc.j.definition(Rc.j.name), Rc.j.separator],
        color: oc
      }, {
        tag: [Rc.j.typeName, Rc.j.className, Rc.j.number, Rc.j.changed, Rc.j.annotation, Rc.j.modifier, Rc.j.self, Rc.j.namespace],
        color: Lc
      }, {
        tag: [Rc.j.operator, Rc.j.operatorKeyword, Rc.j.url, Rc.j.escape, Rc.j.regexp, Rc.j.link, Rc.j.special(Rc.j.string)],
        color: Bc
      }, {
        tag: [Rc.j.meta, Rc.j.comment],
        color: lc
      }, {
        tag: Rc.j.strong,
        fontWeight: "bold"
      }, {
        tag: Rc.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: Rc.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: Rc.j.link,
        color: lc,
        textDecoration: "underline"
      }, {
        tag: Rc.j.heading,
        fontWeight: "bold",
        color: ac
      }, {
        tag: [Rc.j.atom, Rc.j.bool, Rc.j.special(Rc.j.variableName)],
        color: ZZ
      }, {
        tag: [Rc.j.processingInstruction, Rc.j.string, Rc.j.inserted],
        color: cZ
      }, {
        tag: Rc.j.invalid,
        color: tc
      }]),
      DZ = [YZ, (0, qJ.nb)(hZ)];
    var sZ = AJ.f.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class nZ {
      constructor(JJ, cJ) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = cJ, this.timeoutMS = cJ, this.callbacks.push(JJ)
      }
      Hh() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var JJ = this.callbacks.slice();
          this.callbacks.length = 0, JJ.forEach((JJ => {
            try {
              JJ()
            } catch (cJ) {
              console.error("TimeoutLatch callback error:", cJ)
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
    class GZ {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(JJ) {
        this.latches.add(JJ), this.start()
      }
      remove(JJ) {
        this.latches.delete(JJ), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((JJ => {
            JJ.Hh(), JJ.isDone && this.remove(JJ)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var fZ = null,
      xZ = XJ.d.define(),
      rZ = [];

    function vZ(JJ) {
      var {
        value: cJ,
        selection: ZJ,
        onChange: FJ,
        onStatistics: UJ,
        onCreateEditor: qJ,
        onUpdate: jJ,
        extensions: YJ = rZ,
        autoFocus: hJ,
        theme: DJ = "light",
        height: sJ = null,
        minHeight: nJ = null,
        maxHeight: GJ = null,
        width: fJ = null,
        minWidth: xJ = null,
        maxWidth: rJ = null,
        placeholder: vJ = "",
        editable: mJ = !0,
        readOnly: QJ = !1,
        indentWithTab: EJ = !0,
        basicSetup: VJ = !0,
        root: KJ,
        initialState: yJ
      } = JJ, [SJ, IJ] = (0, eJ.useState)(), [MJ, bJ] = (0, eJ.useState)(), [wJ, WJ] = (0, eJ.useState)(), gJ = (0, eJ.useState)((() => ({
        current: null
      })))[0], HJ = (0, eJ.useState)((() => ({
        current: null
      })))[0], PJ = AJ.f.theme({
        "&": {
          height: sJ,
          minHeight: nJ,
          maxHeight: GJ,
          width: fJ,
          minWidth: xJ,
          maxWidth: rJ
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), kJ = AJ.f.updateListener.of((JJ => {
        if (JJ.docChanged && "function" === typeof FJ && !JJ.transactions.some((JJ => JJ.annotation(xZ)))) {
          gJ.current ? gJ.current.reset() : (gJ.current = new nZ((() => {
            if (HJ.current) {
              var JJ = HJ.current;
              HJ.current = null, JJ()
            }
            gJ.current = null
          }), 200), ("undefined" === typeof window ? new GZ : (fZ || (fZ = new GZ), fZ)).add(gJ.current));
          var cJ = JJ.state.doc.toString();
          FJ(cJ, JJ)
        }
        UJ && UJ((JJ => ({
          line: JJ.state.doc.lineAt(JJ.state.selection.main.from),
          lineCount: JJ.state.doc.lines,
          lineBreak: JJ.state.lineBreak,
          length: JJ.state.doc.length,
          readOnly: JJ.state.readOnly,
          tabSize: JJ.state.tabSize,
          selection: JJ.state.selection,
          selectionAsSingle: JJ.state.selection.asSingle().main,
          ws: JJ.state.selection.ws,
          selectionCode: JJ.state.sliceDoc(JJ.state.selection.main.from, JJ.state.selection.main.to),
          selections: JJ.state.selection.ws.map((cJ => JJ.state.sliceDoc(cJ.from, cJ.to))),
          selectedText: JJ.state.selection.ws.some((JJ => !JJ.empty))
        }))(JJ))
      })), pJ = function(JJ) {
        void 0 === JJ && (JJ = {});
        var {
          indentWithTab: cJ = !0,
          editable: ZJ = !0,
          readOnly: FJ = !1,
          theme: UJ = "light",
          placeholder: eJ = "",
          basicSetup: qJ = !0
        } = JJ, jJ = [];
        switch (cJ && jJ.unshift(AJ.K.of([Oc])), qJ && ("boolean" === typeof qJ ? jJ.unshift(ic()) : jJ.unshift(ic(qJ))), eJ && jJ.unshift((0, AJ.S)(eJ)), UJ) {
          case "light":
            jJ.push(sZ);
            break;
          case "dark":
            jJ.push(DZ);
            break;
          case "none":
            break;
          default:
            jJ.push(UJ)
        }
        return !1 === ZJ && jJ.push(AJ.f.editable.of(!1)), FJ && jJ.push(XJ.o.readOnly.of(!0)), [...jJ]
      }({
        theme: DJ,
        editable: mJ,
        readOnly: QJ,
        placeholder: vJ,
        indentWithTab: EJ,
        basicSetup: VJ
      }), dJ = [kJ, PJ, ...pJ];
      return jJ && "function" === typeof jJ && dJ.push(AJ.f.updateListener.of(jJ)), dJ = dJ.concat(YJ), (0, eJ.useLayoutEffect)((() => {
        if (SJ && !wJ) {
          var JJ = {
              doc: cJ,
              selection: ZJ,
              extensions: dJ
            },
            FJ = yJ ? XJ.o.fromJSON(yJ.json, JJ, yJ.fields) : XJ.o.create(JJ);
          if (WJ(FJ), !MJ) {
            var UJ = new AJ.f({
              state: FJ,
              parent: SJ,
              root: KJ
            });
            bJ(UJ), qJ && qJ(UJ, FJ)
          }
        }
        return () => {
          MJ && (WJ(void 0), bJ(void 0))
        }
      }), [SJ, wJ]), (0, eJ.useEffect)((() => {
        JJ.container && IJ(JJ.container)
      }), [JJ.container]), (0, eJ.useEffect)((() => () => {
        MJ && (MJ.destroy(), bJ(void 0)), gJ.current && (gJ.current.cancel(), gJ.current = null)
      }), [MJ]), (0, eJ.useEffect)((() => {
        hJ && MJ && MJ.focus()
      }), [hJ, MJ]), (0, eJ.useEffect)((() => {
        MJ && MJ.dispatch({
          effects: XJ.A.reconfigure.of(dJ)
        })
      }), [DJ, YJ, sJ, nJ, GJ, fJ, xJ, rJ, vJ, mJ, QJ, EJ, VJ, FJ, jJ]), (0, eJ.useEffect)((() => {
        if (void 0 !== cJ) {
          var JJ = MJ ? MJ.state.doc.toString() : "";
          if (MJ && cJ !== JJ) {
            var ZJ = () => {
              MJ && cJ !== MJ.state.doc.toString() && MJ.dispatch({
                changes: {
                  from: 0,
                  to: MJ.state.doc.toString().length,
                  insert: cJ || ""
                },
                annotations: [xZ.of(!0)]
              })
            };
            gJ.current && !gJ.current.isDone ? HJ.current = ZJ : ZJ()
          }
        }
      }), [cJ, MJ]), {
        state: wJ,
        setState: WJ,
        view: MJ,
        setView: bJ,
        container: SJ,
        setContainer: IJ
      }
    }
    var mZ = ZJ(990),
      QZ = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      EZ = (0, eJ.forwardRef)(((JJ, cJ) => {
        var {
          className: ZJ,
          value: XJ = "",
          selection: AJ,
          extensions: qJ = [],
          onChange: jJ,
          onStatistics: YJ,
          onCreateEditor: hJ,
          onUpdate: DJ,
          autoFocus: sJ,
          theme: nJ = "light",
          height: GJ,
          minHeight: fJ,
          maxHeight: xJ,
          width: rJ,
          minWidth: vJ,
          maxWidth: mJ,
          basicSetup: QJ,
          placeholder: EJ,
          indentWithTab: VJ,
          editable: KJ,
          readOnly: yJ,
          root: SJ,
          initialState: IJ
        } = JJ, MJ = (0, UJ.c)(JJ, QZ), bJ = (0, eJ.useRef)(null), {
          state: wJ,
          view: WJ,
          container: gJ,
          setContainer: HJ
        } = vZ({
          root: SJ,
          value: XJ,
          autoFocus: sJ,
          theme: nJ,
          height: GJ,
          minHeight: fJ,
          maxHeight: xJ,
          width: rJ,
          minWidth: vJ,
          maxWidth: mJ,
          basicSetup: QJ,
          placeholder: EJ,
          indentWithTab: VJ,
          editable: KJ,
          readOnly: yJ,
          selection: AJ,
          onChange: jJ,
          onStatistics: YJ,
          onCreateEditor: hJ,
          onUpdate: DJ,
          extensions: qJ,
          initialState: IJ
        });
        (0, eJ.useImperativeHandle)(cJ, (() => ({
          editor: bJ.current,
          state: wJ,
          view: WJ
        })), [bJ, gJ, wJ, WJ]);
        var PJ = (0, eJ.useCallback)((JJ => {
          bJ.current = JJ, HJ(JJ)
        }), [HJ]);
        if ("string" !== typeof XJ) throw new Error("value must be typeof string but got " + typeof XJ);
        var kJ = "string" === typeof nJ ? "cm-theme-" + nJ : "cm-theme";
        return (0, mZ.jsx)("div", (0, FJ.b)({
          ref: PJ,
          className: kJ + (ZJ ? " " + ZJ : "")
        }, MJ))
      }));
    EZ.displayName = "CodeMirror";
    const VZ = EZ
  },
  40070: (JJ, cJ, ZJ) => {
    function FJ() {
      var JJ = arguments[0];
      "string" == typeof JJ && (JJ = document.createElement(JJ));
      var cJ = 1,
        ZJ = arguments[1];
      if (ZJ && "object" == typeof ZJ && null == ZJ.nodeType && !Array.isArray(ZJ)) {
        for (var FJ in ZJ)
          if (Object.prototype.hasOwnProperty.call(ZJ, FJ)) {
            var eJ = ZJ[FJ];
            "string" == typeof eJ ? JJ.setAttribute(FJ, eJ) : null != eJ && (JJ[FJ] = eJ)
          } cJ++
      }
      for (; cJ < arguments.length; cJ++) UJ(JJ, arguments[cJ]);
      return JJ
    }

    function UJ(JJ, cJ) {
      if ("string" == typeof cJ) JJ.appendChild(document.createTextNode(cJ));
      else if (null == cJ);
      else if (null != cJ.nodeType) JJ.appendChild(cJ);
      else {
        if (!Array.isArray(cJ)) throw new RangeError("Unsupported child node: " + cJ);
        for (var ZJ = 0; ZJ < cJ.length; ZJ++) UJ(JJ, cJ[ZJ])
      }
    }
    ZJ.d(cJ, {
      d: () => FJ
    })
  },
  40068: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ
    });
    const FJ = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      UJ = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      eJ = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class XJ {
      constructor(JJ, cJ) {
        this.rules = [];
        let {
          finish: ZJ
        } = cJ || {};

        function FJ(JJ) {
          return /^@/.test(JJ) ? [JJ] : JJ.split(/,\s*/)
        }

        function UJ(JJ, cJ, eJ, XJ) {
          let AJ = [],
            qJ = /^@(\w+)\b/.exec(JJ[0]),
            jJ = qJ && "keyframes" == qJ[1];
          if (qJ && null == cJ) return eJ.push(JJ[0] + ";");
          for (let ZJ in cJ) {
            let XJ = cJ[ZJ];
            if (/&/.test(ZJ)) UJ(ZJ.split(/,\s*/).map((cJ => JJ.map((JJ => cJ.replace(/&/, JJ))))).reduce(((JJ, cJ) => JJ.concat(cJ))), XJ, eJ);
            else if (XJ && "object" == typeof XJ) {
              if (!qJ) throw new RangeError("The value of a property (" + ZJ + ") should be a primitive value.");
              UJ(FJ(ZJ), XJ, AJ, jJ)
            } else null != XJ && AJ.push(ZJ.replace(/_.*/, "").replace(/[A-Z]/g, (JJ => "-" + JJ.toLowerCase())) + ": " + XJ + ";")
          }(AJ.length || jJ) && eJ.push((!ZJ || qJ || XJ ? JJ : JJ.map(ZJ)).join(", ") + " {" + AJ.join(" ") + "}")
        }
        for (let eJ in JJ) UJ(FJ(eJ), JJ[eJ], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let JJ = eJ[FJ] || 1;
        return eJ[FJ] = JJ + 1, "\u037c" + JJ.toString(36)
      }
      static mount(JJ, cJ, ZJ) {
        let FJ = JJ[UJ],
          eJ = ZJ && ZJ.nonce;
        FJ ? eJ && FJ.setNonce(eJ) : FJ = new qJ(JJ, eJ), FJ.mount(Array.isArray(cJ) ? cJ : [cJ], JJ)
      }
    }
    let AJ = new Map;
    class qJ {
      constructor(JJ, cJ) {
        let ZJ = JJ.ownerDocument || JJ,
          FJ = ZJ.defaultView;
        if (!JJ.head && JJ.adoptedStyleSheets && FJ.CSSStyleSheet) {
          let cJ = AJ.get(ZJ);
          if (cJ) return JJ[UJ] = cJ;
          this.sheet = new FJ.CSSStyleSheet, AJ.set(ZJ, this)
        } else this.styleTag = ZJ.createElement("style"), cJ && this.styleTag.setAttribute("nonce", cJ);
        this.modules = [], JJ[UJ] = this
      }
      mount(JJ, cJ) {
        let ZJ = this.sheet,
          FJ = 0,
          UJ = 0;
        for (let eJ = 0; eJ < JJ.length; eJ++) {
          let cJ = JJ[eJ],
            XJ = this.modules.indexOf(cJ);
          if (XJ < UJ && XJ > -1 && (this.modules.splice(XJ, 1), UJ--, XJ = -1), -1 == XJ) {
            if (this.modules.splice(UJ++, 0, cJ), ZJ)
              for (let JJ = 0; JJ < cJ.rules.length; JJ++) ZJ.insertRule(cJ.rules[JJ], FJ++)
          } else {
            for (; UJ < XJ;) FJ += this.modules[UJ++].rules.length;
            FJ += cJ.rules.length, UJ++
          }
        }
        if (ZJ) cJ.adoptedStyleSheets.indexOf(this.sheet) < 0 && (cJ.adoptedStyleSheets = [this.sheet, ...cJ.adoptedStyleSheets]);
        else {
          let JJ = "";
          for (let cJ = 0; cJ < this.modules.length; cJ++) JJ += this.modules[cJ].getRules() + "\n";
          this.styleTag.textContent = JJ;
          let ZJ = cJ.head || cJ;
          this.styleTag.parentNode != ZJ && ZJ.insertBefore(this.styleTag, ZJ.firstChild)
        }
      }
      setNonce(JJ) {
        this.styleTag && this.styleTag.getAttribute("nonce") != JJ && this.styleTag.setAttribute("nonce", JJ)
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);