export const id = 284;
export const ids = [284];
export const modules = {
  40103: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => Uo,
      i: () => Ro,
      j: () => Ao,
      k: () => BT,
      l: () => ao,
      o: () => FT,
      s: () => Lo
    });
    var iT = IT(40110),
      zT = IT(40115),
      kT = IT(40137);
    class WT {
      constructor(TT, oT, IT, iT) {
        this.state = TT, this.pos = oT, this.explicit = IT, this.view = iT, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(TT) {
        let oT = (0, kT.jb)(this.state).resolveInner(this.pos, -1);
        for (; oT && TT.indexOf(oT.name) < 0;) oT = oT.parent;
        return oT ? {
          from: oT.from,
          to: this.pos,
          text: this.state.sliceDoc(oT.from, this.pos),
          type: oT.type
        } : null
      }
      matchBefore(TT) {
        let oT = this.state.doc.lineAt(this.pos),
          IT = Math.max(oT.from, this.pos - 250),
          iT = oT.text.slice(IT - oT.from, this.pos - oT.from),
          zT = iT.search(LT(TT, !1));
        return zT < 0 ? null : {
          from: IT + zT,
          to: this.pos,
          text: iT.slice(zT)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(TT, oT, IT) {
        "abort" == TT && this.abortListeners && (this.abortListeners.push(oT), IT && IT.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function XT(TT) {
      let oT = Object.keys(TT).join(""),
        IT = /\w/.test(oT);
      return IT && (oT = oT.replace(/\w/g, "")), `[${IT?"\\w":""}${oT.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function BT(TT) {
      let oT = TT.map((TT => "string" == typeof TT ? {
          label: TT
        } : TT)),
        [IT, iT] = oT.every((TT => /^\w+$/.test(TT.label))) ? [/\w*$/, /\w+$/] : function(TT) {
          let oT = Object.create(null),
            IT = Object.create(null);
          for (let {
              label: zT
            }
            of TT) {
            oT[zT[0]] = !0;
            for (let TT = 1; TT < zT.length; TT++) IT[zT[TT]] = !0
          }
          let iT = XT(oT) + XT(IT) + "*$";
          return [new RegExp("^" + iT), new RegExp(iT)]
        }(oT);
      return TT => {
        let zT = TT.matchBefore(iT);
        return zT || TT.explicit ? {
          from: zT ? zT.from : TT.pos,
          options: oT,
          validFor: IT
        } : null
      }
    }

    function FT(TT, oT) {
      return IT => {
        for (let oT = (0, kT.jb)(IT.state).resolveInner(IT.pos, -1); oT; oT = oT.parent) {
          if (TT.indexOf(oT.name) > -1) return null;
          if (oT.type.isTop) break
        }
        return oT(IT)
      }
    }
    class ST {
      constructor(TT, oT, IT, iT) {
        this.completion = TT, this.source = oT, this.match = IT, this.score = iT
      }
    }

    function DT(TT) {
      return TT.selection.main.from
    }

    function LT(TT, oT) {
      var IT;
      let {
        source: iT
      } = TT, zT = oT && "^" != iT[0], kT = "$" != iT[iT.length - 1];
      return zT || kT ? new RegExp(`${zT?"^":""}(?:${iT})${kT?"$":""}`, null !== (IT = TT.flags) && void 0 !== IT ? IT : TT.ignoreCase ? "i" : "") : TT
    }
    const xT = iT.b.define();

    function cT(TT, oT, IT, zT) {
      let {
        main: kT
      } = TT.selection, WT = IT - kT.from, XT = zT - kT.from;
      return {
        ...TT.changeByRange((BT => {
          if (BT != kT && IT != zT && TT.sliceDoc(BT.from + WT, BT.from + XT) != TT.sliceDoc(IT, zT)) return {
            range: BT
          };
          let FT = TT.toText(oT);
          return {
            changes: {
              from: BT.from + WT,
              to: zT == kT.from ? BT.to : BT.from + XT,
              insert: FT
            },
            range: iT.k.cursor(BT.from + WT + FT.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const KT = new WeakMap;

    function MT(TT) {
      if (!Array.isArray(TT)) return TT;
      let oT = KT.get(TT);
      return oT || KT.set(TT, oT = BT(TT)), oT
    }
    const rT = iT.H.define(),
      AT = iT.H.define();
    class gT {
      constructor(TT) {
        this.pattern = TT, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let oT = 0; oT < TT.length;) {
          let IT = (0, iT.S)(TT, oT),
            zT = (0, iT.T)(IT);
          this.chars.push(IT);
          let kT = TT.slice(oT, oT + zT),
            WT = kT.toUpperCase();
          this.folded.push((0, iT.S)(WT == kT ? kT.toLowerCase() : WT, 0)), oT += zT
        }
        this.astral = TT.length != this.chars.length
      }
      ret(TT, oT) {
        return this.score = TT, this.matched = oT, this
      }
      match(TT) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (TT.length < this.pattern.length) return null;
        let {
          chars: oT,
          folded: IT,
          any: zT,
          precise: kT,
          byWord: WT
        } = this;
        if (1 == oT.length) {
          let zT = (0, iT.S)(TT, 0),
            kT = (0, iT.T)(zT),
            WT = kT == TT.length ? 0 : -100;
          if (zT == oT[0]);
          else {
            if (zT != IT[0]) return null;
            WT += -200
          }
          return this.ret(WT, [0, kT])
        }
        let XT = TT.indexOf(this.pattern);
        if (0 == XT) return this.ret(TT.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let BT = oT.length,
          FT = 0;
        if (XT < 0) {
          for (let kT = 0, WT = Math.min(TT.length, 200); kT < WT && FT < BT;) {
            let WT = (0, iT.S)(TT, kT);
            WT != oT[FT] && WT != IT[FT] || (zT[FT++] = kT), kT += (0, iT.T)(WT)
          }
          if (FT < BT) return null
        }
        let ST = 0,
          DT = 0,
          LT = !1,
          xT = 0,
          cT = -1,
          KT = -1,
          MT = /[a-z]/.test(TT),
          rT = !0;
        for (let AT = 0, gT = Math.min(TT.length, 200), hT = 0; AT < gT && DT < BT;) {
          let zT = (0, iT.S)(TT, AT);
          XT < 0 && (ST < BT && zT == oT[ST] && (kT[ST++] = AT), xT < BT && (zT == oT[xT] || zT == IT[xT] ? (0 == xT && (cT = AT), KT = AT + 1, xT++) : xT = 0));
          let FT, gT = zT < 255 ? zT >= 48 && zT <= 57 || zT >= 97 && zT <= 122 ? 2 : zT >= 65 && zT <= 90 ? 1 : 0 : (FT = (0, iT.eb)(zT)) != FT.toLowerCase() ? 1 : FT != FT.toUpperCase() ? 2 : 0;
          (!AT || 1 == gT && MT || 0 == hT && 0 != gT) && (oT[DT] == zT || IT[DT] == zT && (LT = !0) ? WT[DT++] = AT : WT.length && (rT = !1)), hT = gT, AT += (0, iT.T)(zT)
        }
        return DT == BT && 0 == WT[0] && rT ? this.result((LT ? -200 : 0) - 100, WT, TT) : xT == BT && 0 == cT ? this.ret(-200 - TT.length + (KT == TT.length ? 0 : -100), [0, KT]) : XT > -1 ? this.ret(-700 - TT.length, [XT, XT + this.pattern.length]) : xT == BT ? this.ret(-900 - TT.length, [cT, KT]) : DT == BT ? this.result((LT ? -200 : 0) - 100 - 700 + (rT ? 0 : -1100), WT, TT) : 2 == oT.length ? null : this.result((zT[0] ? -700 : 0) - 200 - 1100, zT, TT)
      }
      result(TT, oT, IT) {
        let zT = [],
          kT = 0;
        for (let WT of oT) {
          let TT = WT + (this.astral ? (0, iT.T)((0, iT.S)(IT, WT)) : 1);
          kT && zT[kT - 1] == WT ? zT[kT - 1] = TT : (zT[kT++] = WT, zT[kT++] = TT)
        }
        return this.ret(TT - IT.length, zT)
      }
    }
    class hT {
      constructor(TT) {
        this.pattern = TT, this.matched = [], this.score = 0, this.folded = TT.toLowerCase()
      }
      match(TT) {
        if (TT.length < this.pattern.length) return null;
        let oT = TT.slice(0, this.pattern.length),
          IT = oT == this.pattern ? 0 : oT.toLowerCase() == this.folded ? -200 : null;
        return null == IT ? null : (this.matched = [0, oT.length], this.score = IT + (TT.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const wT = iT.p.define({
      combine: TT => (0, iT.V)(TT, {
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
        positionInfo: eT,
        filterStrict: !1,
        compareCompletions: (TT, oT) => (TT.sortText || TT.label).localeCompare(oT.sortText || oT.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (TT, oT) => TT && oT,
        closeOnBlur: (TT, oT) => TT && oT,
        icons: (TT, oT) => TT && oT,
        tooltipClass: (TT, oT) => IT => mT(TT(IT), oT(IT)),
        optionClass: (TT, oT) => IT => mT(TT(IT), oT(IT)),
        addToOptions: (TT, oT) => TT.concat(oT),
        filterStrict: (TT, oT) => TT || oT
      })
    });

    function mT(TT, oT) {
      return TT ? oT ? TT + " " + oT : TT : oT
    }

    function eT(TT, oT, IT, iT, kT, WT) {
      let XT, BT, FT = TT.textDirection == zT.f.RTL,
        ST = FT,
        DT = !1,
        LT = "top",
        xT = oT.left - kT.left,
        cT = kT.right - oT.right,
        KT = iT.right - iT.left,
        MT = iT.bottom - iT.top;
      if (ST && xT < Math.min(KT, cT) ? ST = !1 : !ST && cT < Math.min(KT, xT) && (ST = !0), KT <= (ST ? xT : cT)) XT = Math.max(kT.top, Math.min(IT.top, kT.bottom - MT)) - oT.top, BT = Math.min(400, ST ? xT : cT);
      else {
        DT = !0, BT = Math.min(400, (FT ? oT.right : kT.right - oT.left) - 30);
        let TT = kT.bottom - oT.bottom;
        TT >= MT || TT > oT.top ? XT = IT.bottom - oT.top : (LT = "bottom", XT = oT.bottom - IT.top)
      }
      return {
        style: `${LT}: ${XT/((oT.bottom-oT.top)/WT.offsetHeight)}px; max-width: ${BT/((oT.right-oT.left)/WT.offsetWidth)}px`,
        class: "cm-completionInfo-" + (DT ? FT ? "left-narrow" : "right-narrow" : ST ? "left" : "right")
      }
    }
    const RT = iT.H.define();

    function uT(TT, oT, IT) {
      if (TT <= IT) return {
        from: 0,
        to: TT
      };
      if (oT < 0 && (oT = 0), oT <= TT >> 1) {
        let TT = Math.floor(oT / IT);
        return {
          from: TT * IT,
          to: (TT + 1) * IT
        }
      }
      let iT = Math.floor((TT - oT) / IT);
      return {
        from: TT - (iT + 1) * IT,
        to: TT - iT * IT
      }
    }
    class vT {
      constructor(TT, oT, IT) {
        this.view = TT, this.stateField = oT, this.applyCompletion = IT, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: TT => this.placeInfo(TT),
          key: this
        }, this.space = null, this.currentClass = "";
        let iT = TT.state.field(oT),
          {
            options: zT,
            selected: kT
          } = iT.open,
          WT = TT.state.facet(wT);
        this.optionContent = function(TT) {
          let oT = TT.addToOptions.slice();
          return TT.icons && oT.push({
            render(TT) {
              let oT = document.createElement("div");
              return oT.classList.add("cm-completionIcon"), TT.type && oT.classList.add(...TT.type.split(/\s+/g).map((TT => "cm-completionIcon-" + TT))), oT.setAttribute("aria-hidden", "true"), oT
            },
            position: 20
          }), oT.push({
            render(TT, oT, IT, iT) {
              let zT = document.createElement("span");
              zT.className = "cm-completionLabel";
              let kT = TT.displayLabel || TT.label,
                WT = 0;
              for (let XT = 0; XT < iT.length;) {
                let TT = iT[XT++],
                  oT = iT[XT++];
                TT > WT && zT.appendChild(document.createTextNode(kT.slice(WT, TT)));
                let IT = zT.appendChild(document.createElement("span"));
                IT.appendChild(document.createTextNode(kT.slice(TT, oT))), IT.className = "cm-completionMatchedText", WT = oT
              }
              return WT < kT.length && zT.appendChild(document.createTextNode(kT.slice(WT))), zT
            },
            position: 50
          }, {
            render(TT) {
              if (!TT.detail) return null;
              let oT = document.createElement("span");
              return oT.className = "cm-completionDetail", oT.textContent = TT.detail, oT
            },
            position: 80
          }), oT.sort(((TT, oT) => TT.position - oT.position)).map((TT => TT.render))
        }(WT), this.optionClass = WT.optionClass, this.tooltipClass = WT.tooltipClass, this.range = uT(zT.length, kT, WT.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(TT.state), this.dom.addEventListener("mousedown", (IT => {
          let {
            options: iT
          } = TT.state.field(oT).open;
          for (let oT, zT = IT.target; zT && zT != this.dom; zT = zT.parentNode)
            if ("LI" == zT.nodeName && (oT = /-(\d+)$/.exec(zT.id)) && +oT[1] < iT.length) return this.applyCompletion(TT, iT[+oT[1]]), void IT.preventDefault();
          if (IT.target == this.list) {
            let oT = this.list.classList.contains("cm-completionListIncompleteTop") && IT.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && IT.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != oT && (TT.dispatch({
              effects: RT.of(oT)
            }), IT.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (oT => {
          let IT = TT.state.field(this.stateField, !1);
          IT && IT.tooltip && TT.state.facet(wT).closeOnBlur && oT.relatedTarget != TT.contentDOM && TT.dispatch({
            effects: AT.of(null)
          })
        })), this.showOptions(zT, iT.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(TT, oT) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(TT, oT, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(TT) {
        var oT;
        let IT = TT.state.field(this.stateField),
          iT = TT.startState.field(this.stateField);
        if (this.updateTooltipClass(TT.state), IT != iT) {
          let {
            options: zT,
            selected: kT,
            disabled: WT
          } = IT.open;
          iT.open && iT.open.options == zT || (this.range = uT(zT.length, kT, TT.state.facet(wT).maxRenderedOptions), this.showOptions(zT, IT.id)), this.updateSel(), WT != (null === (oT = iT.open) || void 0 === oT ? void 0 : oT.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!WT)
        }
      }
      updateTooltipClass(TT) {
        let oT = this.tooltipClass(TT);
        if (oT != this.currentClass) {
          for (let TT of this.currentClass.split(" ")) TT && this.dom.classList.remove(TT);
          for (let TT of oT.split(" ")) TT && this.dom.classList.add(TT);
          this.currentClass = oT
        }
      }
      positioned(TT) {
        this.space = TT, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let TT = this.view.state.field(this.stateField),
          oT = TT.open;
        (oT.selected > -1 && oT.selected < this.range.from || oT.selected >= this.range.to) && (this.range = uT(oT.options.length, oT.selected, this.view.state.facet(wT).maxRenderedOptions), this.showOptions(oT.options, TT.id));
        let IT = this.updateSelectedOption(oT.selected);
        if (IT) {
          this.destroyInfo();
          let {
            completion: iT
          } = oT.options[oT.selected], {
            info: kT
          } = iT;
          if (!kT) return;
          let WT = "string" === typeof kT ? document.createTextNode(kT) : kT(iT);
          if (!WT) return;
          "then" in WT ? WT.then((oT => {
            oT && this.view.state.field(this.stateField, !1) == TT && this.addInfoPane(oT, iT)
          })).catch((TT => (0, zT.U)(this.view.state, TT, "completion info"))) : (this.addInfoPane(WT, iT), IT.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(TT, oT) {
        this.destroyInfo();
        let IT = this.info = document.createElement("div");
        if (IT.className = "cm-tooltip cm-completionInfo", IT.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != TT.nodeType) IT.appendChild(TT), this.infoDestroy = null;
        else {
          let {
            dom: oT,
            destroy: iT
          } = TT;
          IT.appendChild(oT), this.infoDestroy = iT || null
        }
        this.dom.appendChild(IT), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(TT) {
        let oT = null;
        for (let IT = this.list.firstChild, iT = this.range.from; IT; IT = IT.nextSibling, iT++) "LI" == IT.nodeName && IT.id ? iT == TT ? IT.hasAttribute("aria-selected") || (IT.setAttribute("aria-selected", "true"), oT = IT) : IT.hasAttribute("aria-selected") && (IT.removeAttribute("aria-selected"), IT.removeAttribute("aria-describedby")) : iT--;
        return oT && function(TT, oT) {
          let IT = TT.getBoundingClientRect(),
            iT = oT.getBoundingClientRect(),
            zT = IT.height / TT.offsetHeight;
          iT.top < IT.top ? TT.scrollTop -= (IT.top - iT.top) / zT : iT.bottom > IT.bottom && (TT.scrollTop += (iT.bottom - IT.bottom) / zT)
        }(this.list, oT), oT
      }
      measureInfo() {
        let TT = this.dom.querySelector("[aria-selected]");
        if (!TT || !this.info) return null;
        let oT = this.dom.getBoundingClientRect(),
          IT = this.info.getBoundingClientRect(),
          iT = TT.getBoundingClientRect(),
          zT = this.space;
        if (!zT) {
          let TT = this.dom.ownerDocument.documentElement;
          zT = {
            left: 0,
            top: 0,
            right: TT.clientWidth,
            bottom: TT.clientHeight
          }
        }
        return iT.top > Math.min(zT.bottom, oT.bottom) - 10 || iT.bottom < Math.max(zT.top, oT.top) + 10 ? null : this.view.state.facet(wT).positionInfo(this.view, oT, iT, IT, zT, this.dom)
      }
      placeInfo(TT) {
        this.info && (TT ? (TT.style && (this.info.style.cssText = TT.style), this.info.className = "cm-tooltip cm-completionInfo " + (TT.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(TT, oT, IT) {
        const iT = document.createElement("ul");
        iT.id = oT, iT.setAttribute("role", "listbox"), iT.setAttribute("aria-expanded", "true"), iT.setAttribute("aria-label", this.view.state.phrase("Completions")), iT.addEventListener("mousedown", (TT => {
          TT.target == iT && TT.preventDefault()
        }));
        let zT = null;
        for (let kT = IT.from; kT < IT.to; kT++) {
          let {
            completion: WT,
            match: XT
          } = TT[kT], {
            section: BT
          } = WT;
          if (BT) {
            let TT = "string" == typeof BT ? BT : BT.name;
            if (TT != zT && (kT > IT.from || 0 == IT.from))
              if (zT = TT, "string" != typeof BT && BT.header) iT.appendChild(BT.header(BT));
              else {
                iT.appendChild(document.createElement("completion-section")).textContent = TT
              }
          }
          const FT = iT.appendChild(document.createElement("li"));
          FT.id = oT + "-" + kT, FT.setAttribute("role", "option");
          let ST = this.optionClass(WT);
          ST && (FT.className = ST);
          for (let TT of this.optionContent) {
            let oT = TT(WT, this.view.state, this.view, XT);
            oT && FT.appendChild(oT)
          }
        }
        return IT.from && iT.classList.add("cm-completionListIncompleteTop"), IT.to < TT.length && iT.classList.add("cm-completionListIncompleteBottom"), iT
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function ET(TT, oT) {
      return IT => new vT(IT, TT, oT)
    }

    function fT(TT) {
      return 100 * (TT.boost || 0) + (TT.apply ? 10 : 0) + (TT.info ? 5 : 0) + (TT.type ? 1 : 0)
    }
    class CT {
      constructor(TT, oT, IT, iT, zT, kT) {
        this.options = TT, this.attrs = oT, this.tooltip = IT, this.timestamp = iT, this.selected = zT, this.disabled = kT
      }
      setSelected(TT, oT) {
        return TT == this.selected || TT >= this.options.length ? this : new CT(this.options, aT(oT, TT), this.tooltip, this.timestamp, TT, this.disabled)
      }
      static build(TT, oT, IT, iT, zT, kT) {
        if (iT && !kT && TT.some((TT => TT.isPending))) return iT.setDisabled();
        let WT = function(TT, oT) {
          let IT = [],
            iT = null,
            zT = null,
            kT = TT => {
              IT.push(TT);
              let {
                section: oT
              } = TT.completion;
              if (oT) {
                iT || (iT = []);
                let TT = "string" == typeof oT ? oT : oT.name;
                iT.some((oT => oT.name == TT)) || iT.push("string" == typeof oT ? {
                  name: TT
                } : oT)
              }
            },
            WT = oT.facet(wT);
          for (let DT of TT)
            if (DT.hasResult()) {
              let TT = DT.result.getMatch;
              if (!1 === DT.result.filter)
                for (let oT of DT.result.options) kT(new ST(oT, DT.source, TT ? TT(oT) : [], 1e9 - IT.length));
              else {
                let IT, iT = oT.sliceDoc(DT.from, DT.to),
                  XT = WT.filterStrict ? new hT(iT) : new gT(iT);
                for (let oT of DT.result.options)
                  if (IT = XT.match(oT.label)) {
                    let iT = oT.displayLabel ? TT ? TT(oT, IT.matched) : [] : IT.matched,
                      WT = IT.score + (oT.boost || 0);
                    if (kT(new ST(oT, DT.source, iT, WT)), "object" == typeof oT.section && "dynamic" === oT.section.rank) {
                      let {
                        name: TT
                      } = oT.section;
                      zT || (zT = Object.create(null)), zT[TT] = Math.max(WT, zT[TT] || -1e9)
                    }
                  }
              }
            } if (iT) {
            let TT = Object.create(null),
              oT = 0,
              kT = (TT, oT) => ("dynamic" === TT.rank && "dynamic" === oT.rank ? zT[oT.name] - zT[TT.name] : 0) || ("number" == typeof TT.rank ? TT.rank : 1e9) - ("number" == typeof oT.rank ? oT.rank : 1e9) || (TT.name < oT.name ? -1 : 1);
            for (let IT of iT.sort(kT)) oT -= 1e5, TT[IT.name] = oT;
            for (let iT of IT) {
              let {
                section: oT
              } = iT.completion;
              oT && (iT.score += TT["string" == typeof oT ? oT : oT.name])
            }
          }
          let XT = [],
            BT = null,
            FT = WT.compareCompletions;
          for (let ST of IT.sort(((TT, oT) => oT.score - TT.score || FT(TT.completion, oT.completion)))) {
            let TT = ST.completion;
            !BT || BT.label != TT.label || BT.detail != TT.detail || null != BT.type && null != TT.type && BT.type != TT.type || BT.apply != TT.apply || BT.boost != TT.boost ? XT.push(ST) : fT(ST.completion) > fT(BT) && (XT[XT.length - 1] = ST), BT = ST.completion
          }
          return XT
        }(TT, oT);
        if (!WT.length) return iT && TT.some((TT => TT.isPending)) ? iT.setDisabled() : null;
        let XT = oT.facet(wT).selectOnOpen ? 0 : -1;
        if (iT && iT.selected != XT && -1 != iT.selected) {
          let TT = iT.options[iT.selected].completion;
          for (let oT = 0; oT < WT.length; oT++)
            if (WT[oT].completion == TT) {
              XT = oT;
              break
            }
        }
        return new CT(WT, aT(IT, XT), {
          pos: TT.reduce(((TT, oT) => oT.hasResult() ? Math.min(TT, oT.from) : TT), 1e8),
          create: lT,
          above: zT.aboveCursor
        }, iT ? iT.timestamp : Date.now(), XT, !1)
      }
      map(TT) {
        return new CT(this.options, this.attrs, {
          ...this.tooltip,
          pos: TT.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new CT(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class jT {
      constructor(TT, oT, IT) {
        this.active = TT, this.id = oT, this.open = IT
      }
      static start() {
        return new jT(YT, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(TT) {
        let {
          state: oT
        } = TT, IT = oT.facet(wT), iT = (IT.override || oT.languageDataAt("autocomplete", DT(oT)).map(MT)).map((oT => (this.active.find((TT => TT.source == oT)) || new OT(oT, this.active.some((TT => 0 != TT.state)) ? 1 : 0)).update(TT, IT)));
        iT.length == this.active.length && iT.every(((TT, oT) => TT == this.active[oT])) && (iT = this.active);
        let zT = this.open,
          kT = TT.effects.some((TT => TT.is(nT)));
        zT && TT.docChanged && (zT = zT.map(TT.changes)), TT.selection || iT.some((oT => oT.hasResult() && TT.changes.touchesRange(oT.from, oT.to))) || ! function(TT, oT) {
          if (TT == oT) return !0;
          for (let IT = 0, iT = 0;;) {
            for (; IT < TT.length && !TT[IT].hasResult();) IT++;
            for (; iT < oT.length && !oT[iT].hasResult();) iT++;
            let zT = IT == TT.length,
              kT = iT == oT.length;
            if (zT || kT) return zT == kT;
            if (TT[IT++].result != oT[iT++].result) return !1
          }
        }(iT, this.active) || kT ? zT = CT.build(iT, oT, this.id, zT, IT, kT) : zT && zT.disabled && !iT.some((TT => TT.isPending)) && (zT = null), !zT && iT.every((TT => !TT.isPending)) && iT.some((TT => TT.hasResult())) && (iT = iT.map((TT => TT.hasResult() ? new OT(TT.source, 0) : TT)));
        for (let WT of TT.effects) WT.is(RT) && (zT = zT && zT.setSelected(WT.value, this.id));
        return iT == this.active && zT == this.open ? this : new jT(iT, this.id, zT)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? JT : UT
      }
    }
    const JT = {
        "aria-autocomplete": "list"
      },
      UT = {};

    function aT(TT, oT) {
      let IT = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": TT
      };
      return oT > -1 && (IT["aria-activedescendant"] = TT + "-" + oT), IT
    }
    const YT = [];

    function QT(TT, oT) {
      if (TT.isUserEvent("input.complete")) {
        let IT = TT.annotation(xT);
        if (IT && oT.activateOnCompletion(IT)) return 12
      }
      let IT = TT.isUserEvent("input.type");
      return IT && oT.activateOnTyping ? 5 : IT ? 1 : TT.isUserEvent("delete.backward") ? 2 : TT.selection ? 8 : TT.docChanged ? 16 : 0
    }
    class OT {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = TT, this.state = oT, this.explicit = IT
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(TT, oT) {
        let IT = QT(TT, oT),
          iT = this;
        (8 & IT || 16 & IT && this.touches(TT)) && (iT = new OT(iT.source, 0)), 4 & IT && 0 == iT.state && (iT = new OT(this.source, 1)), iT = iT.updateFor(TT, IT);
        for (let zT of TT.effects)
          if (zT.is(rT)) iT = new OT(iT.source, 1, zT.value);
          else if (zT.is(AT)) iT = new OT(iT.source, 0);
        else if (zT.is(nT))
          for (let TT of zT.value) TT.source == iT.source && (iT = TT);
        return iT
      }
      updateFor(TT, oT) {
        return this.map(TT.changes)
      }
      map(TT) {
        return this
      }
      touches(TT) {
        return TT.changes.touchesRange(DT(TT.state))
      }
    }
    class HT extends OT {
      constructor(TT, oT, IT, iT, zT, kT) {
        super(TT, 3, oT), this.limit = IT, this.result = iT, this.from = zT, this.to = kT
      }
      hasResult() {
        return !0
      }
      updateFor(TT, oT) {
        var IT;
        if (!(3 & oT)) return this.map(TT.changes);
        let iT = this.result;
        iT.map && !TT.changes.empty && (iT = iT.map(iT, TT.changes));
        let zT = TT.changes.mapPos(this.from),
          kT = TT.changes.mapPos(this.to, 1),
          XT = DT(TT.state);
        if (XT > kT || !iT || 2 & oT && (DT(TT.startState) == this.from || XT < this.limit)) return new OT(this.source, 4 & oT ? 1 : 0);
        let BT = TT.changes.mapPos(this.limit);
        return function(TT, oT, IT, iT) {
          if (!TT) return !1;
          let zT = oT.sliceDoc(IT, iT);
          return "function" == typeof TT ? TT(zT, IT, iT, oT) : LT(TT, !0).test(zT)
        }(iT.validFor, TT.state, zT, kT) ? new HT(this.source, this.explicit, BT, iT, zT, kT) : iT.update && (iT = iT.update(iT, zT, kT, new WT(TT.state, XT, !1))) ? new HT(this.source, this.explicit, BT, iT, iT.from, null !== (IT = iT.to) && void 0 !== IT ? IT : DT(TT.state)) : new OT(this.source, 1, this.explicit)
      }
      map(TT) {
        if (TT.empty) return this;
        return (this.result.map ? this.result.map(this.result, TT) : this.result) ? new HT(this.source, this.explicit, TT.mapPos(this.limit), this.result, TT.mapPos(this.from), TT.mapPos(this.to, 1)) : new OT(this.source, 0)
      }
      touches(TT) {
        return TT.changes.touchesRange(this.from, this.to)
      }
    }
    const nT = iT.H.define({
        map: (TT, oT) => TT.map((TT => TT.map(oT)))
      }),
      qT = iT.K.define({
        create: () => jT.start(),
        update: (TT, oT) => TT.update(oT),
        provide: TT => [zT.jb.from(TT, (TT => TT.tooltip)), zT.i.contentAttributes.from(TT, (TT => TT.attrs))]
      });

    function ZT(TT, oT) {
      const IT = oT.completion.apply || oT.completion.label;
      let iT = TT.state.field(qT).active.find((TT => TT.source == oT.source));
      return iT instanceof HT && ("string" == typeof IT ? TT.dispatch({
        ...cT(TT.state, IT, iT.from, iT.to),
        annotations: xT.of(oT.completion)
      }) : IT(TT, oT.completion, iT.from, iT.to), !0)
    }
    const lT = ET(qT, ZT);

    function sT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return IT => {
        let iT = IT.state.field(qT, !1);
        if (!iT || !iT.open || iT.open.disabled || Date.now() - iT.open.timestamp < IT.state.facet(wT).interactionDelay) return !1;
        let kT, WT = 1;
        "page" == oT && (kT = (0, zT.z)(IT, iT.open.tooltip)) && (WT = Math.max(2, Math.floor(kT.dom.offsetHeight / kT.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: XT
        } = iT.open.options, BT = iT.open.selected > -1 ? iT.open.selected + WT * (TT ? 1 : -1) : TT ? 0 : XT - 1;
        return BT < 0 ? BT = "page" == oT ? 0 : XT - 1 : BT >= XT && (BT = "page" == oT ? XT - 1 : 0), IT.dispatch({
          effects: RT.of(BT)
        }), !0
      }
    }
    const tT = TT => !!TT.state.field(qT, !1) && (TT.dispatch({
      effects: rT.of(!0)
    }), !0);
    class GT {
      constructor(TT, oT) {
        this.active = TT, this.context = oT, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const pT = zT.l.fromClass(class {
        constructor(TT) {
          this.view = TT, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let oT of TT.state.field(qT).active) oT.isPending && this.startQuery(oT)
        }
        update(TT) {
          let oT = TT.state.field(qT),
            IT = TT.state.facet(wT);
          if (!TT.selectionSet && !TT.docChanged && TT.startState.field(qT) == oT) return;
          let iT = TT.transactions.some((TT => {
            let oT = QT(TT, IT);
            return 8 & oT || (TT.selection || TT.docChanged) && !(3 & oT)
          }));
          for (let XT = 0; XT < this.running.length; XT++) {
            let oT = this.running[XT];
            if (iT || oT.context.abortOnDocChange && TT.docChanged || oT.updates.length + TT.transactions.length > 50 && Date.now() - oT.time > 1e3) {
              for (let TT of oT.context.abortListeners) try {
                TT()
              } catch (WT) {
                (0, zT.U)(this.view.state, WT)
              }
              oT.context.abortListeners = null, this.running.splice(XT--, 1)
            } else oT.updates.push(...TT.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), TT.transactions.some((TT => TT.effects.some((TT => TT.is(rT))))) && (this.pendingStart = !0);
          let kT = this.pendingStart ? 50 : IT.activateOnTypingDelay;
          if (this.debounceUpdate = oT.active.some((TT => TT.isPending && !this.running.some((oT => oT.active.source == TT.source)))) ? setTimeout((() => this.startUpdate()), kT) : -1, 0 != this.composing)
            for (let zT of TT.transactions) zT.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && zT.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: TT
          } = this.view, oT = TT.field(qT);
          for (let IT of oT.active) IT.isPending && !this.running.some((TT => TT.active.source == IT.source)) && this.startQuery(IT);
          this.running.length && oT.open && oT.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(wT).updateSyncTime))
        }
        startQuery(TT) {
          let {
            state: oT
          } = this.view, IT = DT(oT), iT = new WT(oT, IT, TT.explicit, this.view), kT = new GT(TT, iT);
          this.running.push(kT), Promise.resolve(TT.source(iT)).then((TT => {
            kT.context.aborted || (kT.done = TT || null, this.scheduleAccept())
          }), (TT => {
            this.view.dispatch({
              effects: AT.of(null)
            }), (0, zT.U)(this.view.state, TT)
          }))
        }
        scheduleAccept() {
          this.running.every((TT => void 0 !== TT.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(wT).updateSyncTime))
        }
        accept() {
          var TT;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let oT = [],
            IT = this.view.state.facet(wT),
            iT = this.view.state.field(qT);
          for (let zT = 0; zT < this.running.length; zT++) {
            let kT = this.running[zT];
            if (void 0 === kT.done) continue;
            if (this.running.splice(zT--, 1), kT.done) {
              let iT = DT(kT.updates.length ? kT.updates[0].startState : this.view.state),
                zT = Math.min(iT, kT.done.from + (kT.active.explicit ? 0 : 1)),
                WT = new HT(kT.active.source, kT.active.explicit, zT, kT.done, kT.done.from, null !== (TT = kT.done.to) && void 0 !== TT ? TT : iT);
              for (let TT of kT.updates) WT = WT.update(TT, IT);
              if (WT.hasResult()) {
                oT.push(WT);
                continue
              }
            }
            let WT = iT.active.find((TT => TT.source == kT.active.source));
            if (WT && WT.isPending)
              if (null == kT.done) {
                let TT = new OT(kT.active.source, 0);
                for (let oT of kT.updates) TT = TT.update(oT, IT);
                TT.isPending || oT.push(TT)
              } else this.startQuery(WT)
          }(oT.length || iT.open && iT.open.disabled) && this.view.dispatch({
            effects: nT.of(oT)
          })
        }
      }, {
        eventHandlers: {
          blur(TT) {
            let oT = this.view.state.field(qT, !1);
            if (oT && oT.tooltip && this.view.state.facet(wT).closeOnBlur) {
              let IT = oT.open && (0, zT.z)(this.view, oT.open.tooltip);
              IT && IT.dom.contains(TT.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: AT.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: rT.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      bT = "object" == typeof navigator && /Win/.test(navigator.platform),
      yT = iT.w.highest(zT.i.domEventHandlers({
        keydown(TT, oT) {
          let IT = oT.state.field(qT, !1);
          if (!IT || !IT.open || IT.open.disabled || IT.open.selected < 0 || TT.key.length > 1 || TT.ctrlKey && (!bT || !TT.altKey) || TT.metaKey) return !1;
          let iT = IT.open.options[IT.open.selected],
            zT = IT.active.find((TT => TT.source == iT.source)),
            kT = iT.completion.commitCharacters || zT.result.commitCharacters;
          return kT && kT.indexOf(TT.key) > -1 && ZT(oT, iT), !1
        }
      })),
      NT = zT.i.baseTheme({
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
    class PT {
      constructor(TT, oT, IT, iT) {
        this.field = TT, this.line = oT, this.from = IT, this.to = iT
      }
    }
    class dT {
      constructor(TT, oT, IT) {
        this.field = TT, this.from = oT, this.to = IT
      }
      map(TT) {
        let oT = TT.mapPos(this.from, -1, iT.t.TrackDel),
          IT = TT.mapPos(this.to, 1, iT.t.TrackDel);
        return null == oT || null == IT ? null : new dT(this.field, oT, IT)
      }
    }
    class VT {
      constructor(TT, oT) {
        this.lines = TT, this.fieldPositions = oT
      }
      instantiate(TT, oT) {
        let IT = [],
          iT = [oT],
          zT = TT.doc.lineAt(oT),
          WT = /^\s*/.exec(zT.text)[0];
        for (let BT of this.lines) {
          if (IT.length) {
            let IT = WT,
              zT = /^\t*/.exec(BT)[0].length;
            for (let oT = 0; oT < zT; oT++) IT += TT.facet(kT.$);
            iT.push(oT + IT.length - zT), BT = IT + BT.slice(zT)
          }
          IT.push(BT), oT += BT.length + 1
        }
        let XT = this.fieldPositions.map((TT => new dT(TT.field, iT[TT.line] + TT.from, iT[TT.line] + TT.to)));
        return {
          text: IT,
          ec: XT
        }
      }
      static parse(TT) {
        let oT, IT = [],
          iT = [],
          zT = [];
        for (let kT of TT.split(/\r\n?|\n/)) {
          for (; oT = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(kT);) {
            let TT = oT[1] ? +oT[1] : null,
              WT = oT[2] || oT[3] || "",
              XT = -1,
              BT = WT.replace(/\\[{}]/g, (TT => TT[1]));
            for (let oT = 0; oT < IT.length; oT++)(null != TT ? IT[oT].seq == TT : BT && IT[oT].name == BT) && (XT = oT);
            if (XT < 0) {
              let oT = 0;
              for (; oT < IT.length && (null == TT || null != IT[oT].seq && IT[oT].seq < TT);) oT++;
              IT.splice(oT, 0, {
                seq: TT,
                name: BT
              }), XT = oT;
              for (let TT of zT) TT.field >= XT && TT.field++
            }
            for (let IT of zT)
              if (IT.line == iT.length && IT.from > oT.index) {
                let TT = oT[2] ? 3 + (oT[1] || "").length : 2;
                IT.from -= TT, IT.to -= TT
              } zT.push(new PT(XT, iT.length, oT.index, oT.index + BT.length)), kT = kT.slice(0, oT.index) + WT + kT.slice(oT.index + oT[0].length)
          }
          kT = kT.replace(/\\([{}])/g, ((TT, oT, IT) => {
            for (let kT of zT) kT.line == iT.length && kT.from > IT && (kT.from--, kT.to--);
            return oT
          })), iT.push(kT)
        }
        return new VT(iT, zT)
      }
    }
    let To = zT.b.widget({
        widget: new class extends zT.m {
          toDOM() {
            let TT = document.createElement("span");
            return TT.className = "cm-snippetFieldPosition", TT
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      oo = zT.b.mark({
        class: "cm-snippetField"
      });
    class Io {
      constructor(TT, oT) {
        this.ec = TT, this.active = oT, this.deco = zT.b.set(TT.map((TT => (TT.from == TT.to ? To : oo).range(TT.from, TT.to))), !0)
      }
      map(TT) {
        let oT = [];
        for (let IT of this.ec) {
          let iT = IT.map(TT);
          if (!iT) return null;
          oT.push(iT)
        }
        return new Io(oT, this.active)
      }
      selectionInsideField(TT) {
        return TT.ec.every((TT => this.ec.some((oT => oT.field == this.active && oT.from <= TT.from && oT.to >= TT.to))))
      }
    }
    const io = iT.H.define({
        map: (TT, oT) => TT && TT.map(oT)
      }),
      zo = iT.H.define(),
      ko = iT.K.define({
        create: () => null,
        update(TT, oT) {
          for (let IT of oT.effects) {
            if (IT.is(io)) return IT.value;
            if (IT.is(zo) && TT) return new Io(TT.ec, IT.value)
          }
          return TT && oT.docChanged && (TT = TT.map(oT.changes)), TT && oT.selection && !TT.selectionInsideField(oT.selection) && (TT = null), TT
        },
        provide: TT => zT.i.dz.from(TT, (TT => TT ? TT.deco : zT.b.none))
      });

    function Wo(TT, oT) {
      return iT.k.create(TT.filter((TT => TT.field == oT)).map((TT => iT.k.range(TT.from, TT.to))))
    }

    function Xo(TT) {
      let oT = VT.parse(TT);
      return (TT, IT, zT, kT) => {
        let {
          text: WT,
          ec: XT
        } = oT.instantiate(TT.state, zT), {
          main: BT
        } = TT.state.selection, FT = {
          changes: {
            from: zT,
            to: kT == BT.from ? BT.to : kT,
            insert: iT.N.of(WT)
          },
          scrollIntoView: !0,
          annotations: IT ? [xT.of(IT), iT.O.userEvent.of("input.complete")] : void 0
        };
        if (XT.length && (FT.selection = Wo(XT, 0)), XT.some((TT => TT.field > 0))) {
          let oT = new Io(XT, 0),
            IT = FT.effects = [io.of(oT)];
          void 0 === TT.state.field(ko, !1) && IT.push(iT.H.appendConfig.of([ko, Do, xo, NT]))
        }
        TT.dispatch(TT.state.update(FT))
      }
    }

    function Bo(TT) {
      return oT => {
        let {
          state: IT,
          dispatch: iT
        } = oT, zT = IT.field(ko, !1);
        if (!zT || TT < 0 && 0 == zT.active) return !1;
        let kT = zT.active + TT,
          WT = TT > 0 && !zT.ec.some((oT => oT.field == kT + TT));
        return iT(IT.update({
          selection: Wo(zT.ec, kT),
          effects: io.of(WT ? null : new Io(zT.ec, kT)),
          scrollIntoView: !0
        })), !0
      }
    }
    const Fo = [{
        key: "Tab",
        run: Bo(1),
        shift: Bo(-1)
      }, {
        key: "Escape",
        run: TT => {
          let {
            state: oT,
            dispatch: IT
          } = TT;
          return !!oT.field(ko, !1) && (IT(oT.update({
            effects: io.of(null)
          })), !0)
        }
      }],
      So = iT.p.define({
        combine: TT => TT.length ? TT[0] : Fo
      }),
      Do = iT.w.highest(zT.N.compute([So], (TT => TT.facet(So))));

    function Lo(TT, oT) {
      return {
        ...oT,
        apply: Xo(TT)
      }
    }
    const xo = zT.i.domEventHandlers({
      mousedown(TT, oT) {
        let IT, iT = oT.state.field(ko, !1);
        if (!iT || null == (IT = oT.posAtCoords({
            x: TT.clientX,
            y: TT.clientY
          }))) return !1;
        let zT = iT.ec.find((TT => TT.from <= IT && TT.to >= IT));
        return !(!zT || zT.field == iT.active) && (oT.dispatch({
          selection: Wo(iT.ec, zT.field),
          effects: io.of(iT.ec.some((TT => TT.field > zT.field)) ? new Io(iT.ec, zT.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const co = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      Ko = iT.H.define({
        map(TT, oT) {
          let IT = oT.mapPos(TT, -1, iT.t.TrackAfter);
          return null == IT ? void 0 : IT
        }
      }),
      Mo = new class extends iT.F {};
    Mo.startSide = 1, Mo.endSide = -1;
    const ro = iT.K.define({
      create: () => iT.D.empty,
      update(TT, oT) {
        if (TT = TT.map(oT.changes), oT.selection) {
          let IT = oT.state.doc.lineAt(oT.selection.main.head);
          TT = TT.update({
            filter: TT => TT >= IT.from && TT <= IT.to
          })
        }
        for (let IT of oT.effects) IT.is(Ko) && (TT = TT.update({
          add: [Mo.range(IT.value, IT.value + 1)]
        }));
        return TT
      }
    });

    function Ao() {
      return [eo, ro]
    }
    const go = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function ho(TT) {
      for (let oT = 0; oT < 16; oT += 2)
        if (go.charCodeAt(oT) == TT) return go.charAt(oT + 1);
      return (0, iT.eb)(TT < 128 ? TT : TT + 1)
    }

    function wo(TT, oT) {
      return TT.languageDataAt("closeBrackets", oT)[0] || co
    }
    const mo = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      eo = zT.i.inputHandler.of(((TT, oT, IT, zT) => {
        if ((mo ? TT.composing : TT.compositionStarted) || TT.state.readOnly) return !1;
        let kT = TT.state.selection.main;
        if (zT.length > 2 || 2 == zT.length && 1 == (0, iT.T)((0, iT.S)(zT, 0)) || oT != kT.from || IT != kT.to) return !1;
        let WT = function(TT, oT) {
          let IT = wo(TT, TT.selection.main.head),
            zT = IT.brackets || co.brackets;
          for (let kT of zT) {
            let WT = ho((0, iT.S)(kT, 0));
            if (oT == kT) return WT == kT ? Co(TT, kT, zT.indexOf(kT + kT + kT) > -1, IT) : Eo(TT, kT, WT, IT.before || co.before);
            if (oT == WT && uo(TT, TT.selection.main.from)) return fo(TT, kT, WT)
          }
          return null
        }(TT.state, zT);
        return !!WT && (TT.dispatch(WT), !0)
      })),
      Ro = [{
        key: "Backspace",
        run: TT => {
          let {
            state: oT,
            dispatch: IT
          } = TT;
          if (oT.readOnly) return !1;
          let zT = wo(oT, oT.selection.main.head).brackets || co.brackets,
            kT = null,
            WT = oT.changeByRange((TT => {
              if (TT.empty) {
                let IT = function(TT, oT) {
                  let IT = TT.sliceString(oT - 2, oT);
                  return (0, iT.T)((0, iT.S)(IT, 0)) == IT.length ? IT : IT.slice(1)
                }(oT.doc, TT.head);
                for (let kT of zT)
                  if (kT == IT && vo(oT.doc, TT.head) == ho((0, iT.S)(kT, 0))) return {
                    changes: {
                      from: TT.head - kT.length,
                      to: TT.head + kT.length
                    },
                    range: iT.k.cursor(TT.head - kT.length)
                  }
              }
              return {
                range: kT = TT
              }
            }));
          return kT || IT(oT.update(WT, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !kT
        }
      }];

    function uo(TT, oT) {
      let IT = !1;
      return TT.field(ro).between(0, TT.doc.length, (TT => {
        TT == oT && (IT = !0)
      })), IT
    }

    function vo(TT, oT) {
      let IT = TT.sliceString(oT, oT + 2);
      return IT.slice(0, (0, iT.T)((0, iT.S)(IT, 0)))
    }

    function Eo(TT, oT, IT, zT) {
      let kT = null,
        WT = TT.changeByRange((WT => {
          if (!WT.empty) return {
            changes: [{
              insert: oT,
              from: WT.from
            }, {
              insert: IT,
              from: WT.to
            }],
            effects: Ko.of(WT.to + oT.length),
            range: iT.k.range(WT.anchor + oT.length, WT.head + oT.length)
          };
          let XT = vo(TT.doc, WT.head);
          return !XT || /\s/.test(XT) || zT.indexOf(XT) > -1 ? {
            changes: {
              insert: oT + IT,
              from: WT.head
            },
            effects: Ko.of(WT.head + oT.length),
            range: iT.k.cursor(WT.head + oT.length)
          } : {
            range: kT = WT
          }
        }));
      return kT ? null : TT.update(WT, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function fo(TT, oT, IT) {
      let zT = null,
        kT = TT.changeByRange((oT => oT.empty && vo(TT.doc, oT.head) == IT ? {
          changes: {
            from: oT.head,
            to: oT.head + IT.length,
            insert: IT
          },
          range: iT.k.cursor(oT.head + IT.length)
        } : zT = {
          range: oT
        }));
      return zT ? null : TT.update(kT, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function Co(TT, oT, IT, zT) {
      let WT = zT.stringPrefixes || co.stringPrefixes,
        XT = null,
        BT = TT.changeByRange((zT => {
          if (!zT.empty) return {
            changes: [{
              insert: oT,
              from: zT.from
            }, {
              insert: oT,
              from: zT.to
            }],
            effects: Ko.of(zT.to + oT.length),
            range: iT.k.range(zT.anchor + oT.length, zT.head + oT.length)
          };
          let BT, FT = zT.head,
            ST = vo(TT.doc, FT);
          if (ST == oT) {
            if (jo(TT, FT)) return {
              changes: {
                insert: oT + oT,
                from: FT
              },
              effects: Ko.of(FT + oT.length),
              range: iT.k.cursor(FT + oT.length)
            };
            if (uo(TT, FT)) {
              let zT = IT && TT.sliceDoc(FT, FT + 3 * oT.length) == oT + oT + oT ? oT + oT + oT : oT;
              return {
                changes: {
                  from: FT,
                  to: FT + zT.length,
                  insert: zT
                },
                range: iT.k.cursor(FT + zT.length)
              }
            }
          } else {
            if (IT && TT.sliceDoc(FT - 2 * oT.length, FT) == oT + oT && (BT = Jo(TT, FT - 2 * oT.length, WT)) > -1 && jo(TT, BT)) return {
              changes: {
                insert: oT + oT + oT + oT,
                from: FT
              },
              effects: Ko.of(FT + oT.length),
              range: iT.k.cursor(FT + oT.length)
            };
            if (TT.charCategorizer(FT)(ST) != iT.g.Word && Jo(TT, FT, WT) > -1 && ! function(TT, oT, IT, iT) {
                let zT = (0, kT.jb)(TT).resolveInner(oT, -1),
                  WT = iT.reduce(((TT, oT) => Math.max(TT, oT.length)), 0);
                for (let kT = 0; kT < 5; kT++) {
                  let kT = TT.sliceDoc(zT.from, Math.min(zT.to, zT.from + IT.length + WT)),
                    XT = kT.indexOf(IT);
                  if (!XT || XT > -1 && iT.indexOf(kT.slice(0, XT)) > -1) {
                    let oT = zT.firstChild;
                    for (; oT && oT.from == zT.from && oT.to - oT.from > IT.length + XT;) {
                      if (TT.sliceDoc(oT.to - IT.length, oT.to) == IT) return !1;
                      oT = oT.firstChild
                    }
                    return !0
                  }
                  let BT = zT.to == oT && zT.parent;
                  if (!BT) break;
                  zT = BT
                }
                return !1
              }(TT, FT, oT, WT)) return {
              changes: {
                insert: oT + oT,
                from: FT
              },
              effects: Ko.of(FT + oT.length),
              range: iT.k.cursor(FT + oT.length)
            }
          }
          return {
            range: XT = zT
          }
        }));
      return XT ? null : TT.update(BT, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function jo(TT, oT) {
      let IT = (0, kT.jb)(TT).resolveInner(oT + 1);
      return IT.parent && IT.from == oT
    }

    function Jo(TT, oT, IT) {
      let zT = TT.charCategorizer(oT);
      if (zT(TT.sliceDoc(oT - 1, oT)) != iT.g.Word) return oT;
      for (let kT of IT) {
        let IT = oT - kT.length;
        if (TT.sliceDoc(IT, oT) == kT && zT(TT.sliceDoc(IT - 1, IT)) != iT.g.Word) return IT
      }
      return -1
    }

    function Uo() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [yT, qT, wT.of(TT), pT, Yo, NT]
    }
    const ao = [{
        key: "Ctrl-Space",
        run: tT
      }, {
        mac: "Alt-`",
        run: tT
      }, {
        mac: "Alt-i",
        run: tT
      }, {
        key: "Escape",
        run: TT => {
          let oT = TT.state.field(qT, !1);
          return !(!oT || !oT.active.some((TT => 0 != TT.state))) && (TT.dispatch({
            effects: AT.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: sT(!0)
      }, {
        key: "ArrowUp",
        run: sT(!1)
      }, {
        key: "PageDown",
        run: sT(!0, "page")
      }, {
        key: "PageUp",
        run: sT(!1, "page")
      }, {
        key: "Enter",
        run: TT => {
          let oT = TT.state.field(qT, !1);
          return !(TT.state.readOnly || !oT || !oT.open || oT.open.selected < 0 || oT.open.disabled || Date.now() - oT.open.timestamp < TT.state.facet(wT).interactionDelay) && ZT(TT, oT.open.options[oT.open.selected])
        }
      }],
      Yo = iT.w.highest(zT.N.computeN([wT], (TT => TT.facet(wT).defaultKeymap ? [ao] : [])))
  },
  40268: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => FT,
      e: () => LT,
      g: () => ST,
      k: () => DT
    });
    var iT = IT(40110);
    class zT {
      constructor(TT, oT, IT, iT) {
        this.origin = TT, this.changes = oT, this.effects = IT, this.clientID = iT
      }
    }
    class kT {
      constructor(TT, oT) {
        this.version = TT, this.unconfirmed = oT
      }
    }
    const WT = iT.p.define({
        combine(TT) {
          let oT = (0, iT.V)(TT, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: TT => TT
          });
          return null == oT.clientID && (oT.clientID = TT.length && TT[0].generatedID || ""), oT
        }
      }),
      XT = iT.b.define(),
      BT = iT.K.define({
        create: TT => new kT(TT.facet(WT).startVersion, []),
        update(TT, oT) {
          let IT = oT.annotation(XT);
          if (IT) return IT;
          let {
            sharedEffects: iT,
            clientID: BT
          } = oT.startState.facet(WT), FT = iT(oT);
          return FT.length || !oT.changes.empty ? new kT(TT.version, TT.unconfirmed.concat(new zT(oT, oT.changes, FT, BT))) : TT
        }
      });

    function FT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [BT, WT.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, TT))]
    }

    function ST(TT, oT) {
      let {
        version: IT,
        unconfirmed: FT
      } = TT.field(BT), {
        clientID: ST
      } = TT.facet(WT);
      IT += oT.length;
      let DT = [],
        LT = null,
        xT = 0;
      for (let zT of oT) {
        let TT = xT < FT.length ? FT[xT] : null;
        TT && TT.clientID == zT.clientID ? (LT && (LT = LT.map(TT.changes, !0)), DT = iT.H.mapEffects(DT, zT.changes), xT++) : (DT = iT.H.mapEffects(DT, zT.changes), zT.effects && (DT = DT.concat(zT.effects)), LT = LT ? LT.compose(zT.changes) : zT.changes)
      }
      if (xT && (FT = FT.slice(xT)), FT.length && (LT && (FT = FT.map((TT => {
          let oT = TT.changes.map(LT);
          return LT = LT.map(TT.changes, !0), new zT(TT.origin, oT, iT.H.mapEffects(TT.effects, LT), ST)
        }))), DT.length)) {
        let TT = FT.reduce(((TT, oT) => TT.compose(oT.changes)), iT.ChangeSet.empty(FT[0].changes.length));
        DT = iT.H.mapEffects(DT, TT)
      }
      return LT ? TT.update({
        changes: LT,
        effects: DT,
        annotations: [iT.O.addToHistory.of(!1), iT.O.remote.of(!0), XT.of(new kT(IT, FT))],
        filter: !1
      }) : TT.update({
        annotations: [XT.of(new kT(IT, FT))]
      })
    }

    function DT(TT) {
      return TT.field(BT).unconfirmed
    }

    function LT(TT) {
      return TT.field(BT).version
    }
  },
  40153: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => Ko
    });
    var iT = IT(40143);
    class zT {
      constructor(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
        let FT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          ST = arguments.length > 10 ? arguments[10] : void 0;
        this.p = TT, this.stack = oT, this.state = IT, this.reducePos = iT, this.pos = zT, this.score = kT, this.buffer = WT, this.bufferBase = XT, this.curContext = BT, this.lookAhead = FT, this.parent = ST
      }
      toString() {
        return `[${this.stack.filter(((TT,oT)=>oT%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iT = TT.parser.context;
        return new zT(TT, [], oT, IT, IT, 0, [], 0, iT ? new kT(iT, iT.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(TT, oT) {
        this.stack.push(this.state, oT, this.bufferBase + this.buffer.length), this.state = TT
      }
      reduce(TT) {
        var oT;
        let IT = TT >> 19,
          iT = 65535 & TT,
          {
            parser: zT
          } = this.p,
          kT = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          WT = zT.dynamicPrecedence(iT);
        if (WT && (this.score += WT), 0 == IT) return this.pushState(zT.getGoto(this.state, iT, !0), this.reducePos), iT < zT.minRepeatTerm && this.storeNode(iT, this.reducePos, this.reducePos, kT ? 8 : 4, !0), void this.reduceContext(iT, this.reducePos);
        let XT = this.stack.length - 3 * (IT - 1) - (262144 & TT ? 6 : 0),
          BT = XT ? this.stack[XT - 2] : this.p.ec[0].from,
          FT = this.reducePos - BT;
        FT >= 2e3 && !(null === (oT = this.p.parser.nodeSet.types[iT]) || void 0 === oT ? void 0 : oT.isAnonymous) && (BT == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = FT) : this.p.lastBigReductionSize < FT && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = BT, this.p.lastBigReductionSize = FT));
        let ST = XT ? this.stack[XT - 1] : 0,
          DT = this.bufferBase + this.buffer.length - ST;
        if (iT < zT.minRepeatTerm || 131072 & TT) {
          let TT = zT.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(iT, BT, TT, DT + 4, !0)
        }
        if (262144 & TT) this.state = this.stack[XT];
        else {
          let TT = this.stack[XT - 3];
          this.state = zT.getGoto(TT, iT, !0)
        }
        for (; this.stack.length > XT;) this.stack.pop();
        this.reduceContext(iT, BT)
      }
      storeNode(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == TT && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let TT = this,
            iT = this.buffer.length;
          if (0 == iT && TT.parent && (iT = TT.bufferBase - TT.parent.bufferBase, TT = TT.parent), iT > 0 && 0 == TT.buffer[iT - 4] && TT.buffer[iT - 1] > -1) {
            if (oT == IT) return;
            if (TT.buffer[iT - 2] >= oT) return void(TT.buffer[iT - 2] = IT)
          }
        }
        if (zT && this.pos != IT) {
          let zT = this.buffer.length;
          if (zT > 0 && (0 != this.buffer[zT - 4] || this.buffer[zT - 1] < 0)) {
            let TT = !1;
            for (let oT = zT; oT > 0 && this.buffer[oT - 2] > IT; oT -= 4)
              if (this.buffer[oT - 1] >= 0) {
                TT = !0;
                break
              } if (TT)
              for (; zT > 0 && this.buffer[zT - 2] > IT;) this.buffer[zT] = this.buffer[zT - 4], this.buffer[zT + 1] = this.buffer[zT - 3], this.buffer[zT + 2] = this.buffer[zT - 2], this.buffer[zT + 3] = this.buffer[zT - 1], zT -= 4, iT > 4 && (iT -= 4)
          }
          this.buffer[zT] = TT, this.buffer[zT + 1] = oT, this.buffer[zT + 2] = IT, this.buffer[zT + 3] = iT
        } else this.buffer.push(TT, oT, IT, iT)
      }
      shift(TT, oT, IT, iT) {
        if (131072 & TT) this.pushState(65535 & TT, this.pos);
        else if (0 == (262144 & TT)) {
          let zT = TT,
            {
              parser: kT
            } = this.p;
          this.pos = iT;
          let WT = kT.stateFlag(zT, 1);
          !WT && (iT > IT || oT <= kT.maxNode) && (this.reducePos = iT), this.pushState(zT, WT ? IT : Math.min(IT, this.reducePos)), this.shiftContext(oT, IT), oT <= kT.maxNode && this.buffer.push(oT, IT, iT, 4)
        } else this.pos = iT, this.shiftContext(oT, IT), oT <= this.p.parser.maxNode && this.buffer.push(oT, IT, iT, 4)
      }
      apply(TT, oT, IT, iT) {
        65536 & TT ? this.reduce(TT) : this.shift(TT, oT, IT, iT)
      }
      useNode(TT, oT) {
        let IT = this.p.reused.length - 1;
        (IT < 0 || this.p.reused[IT] != TT) && (this.p.reused.push(TT), IT++);
        let iT = this.pos;
        this.reducePos = this.pos = iT + TT.length, this.pushState(oT, iT), this.buffer.push(IT, iT, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, TT, this, this.p.stream.reset(this.pos - TT.length)))
      }
      split() {
        let TT = this,
          oT = TT.buffer.length;
        for (; oT > 0 && TT.buffer[oT - 2] > TT.reducePos;) oT -= 4;
        let IT = TT.buffer.slice(oT),
          iT = TT.bufferBase + oT;
        for (; TT && iT == TT.bufferBase;) TT = TT.parent;
        return new zT(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, IT, iT, this.curContext, this.lookAhead, TT)
      }
      recoverByDelete(TT, oT) {
        let IT = TT <= this.p.parser.maxNode;
        IT && this.storeNode(TT, this.pos, oT, 4), this.storeNode(0, this.pos, oT, IT ? 8 : 4), this.pos = this.reducePos = oT, this.score -= 190
      }
      canShift(TT) {
        for (let oT = new WT(this);;) {
          let IT = this.p.parser.stateSlot(oT.state, 4) || this.p.parser.hasAction(oT.state, TT);
          if (0 == IT) return !1;
          if (0 == (65536 & IT)) return !0;
          oT.reduce(IT)
        }
      }
      recoverByInsert(TT) {
        if (this.stack.length >= 300) return [];
        let oT = this.p.parser.nextStates(this.state);
        if (oT.length > 8 || this.stack.length >= 120) {
          let IT = [];
          for (let iT, zT = 0; zT < oT.length; zT += 2)(iT = oT[zT + 1]) != this.state && this.p.parser.hasAction(iT, TT) && IT.push(oT[zT], iT);
          if (this.stack.length < 120)
            for (let TT = 0; IT.length < 8 && TT < oT.length; TT += 2) {
              let iT = oT[TT + 1];
              IT.some(((TT, oT) => 1 & oT && TT == iT)) || IT.push(oT[TT], iT)
            }
          oT = IT
        }
        let IT = [];
        for (let iT = 0; iT < oT.length && IT.length < 4; iT += 2) {
          let TT = oT[iT + 1];
          if (TT == this.state) continue;
          let zT = this.split();
          zT.pushState(TT, this.pos), zT.storeNode(0, zT.pos, zT.pos, 4, !0), zT.shiftContext(oT[iT], this.pos), zT.reducePos = this.pos, zT.score -= 200, IT.push(zT)
        }
        return IT
      }
      forceReduce() {
        let {
          parser: TT
        } = this.p, oT = TT.stateSlot(this.state, 5);
        if (0 == (65536 & oT)) return !1;
        if (!TT.validAction(this.state, oT)) {
          let IT = oT >> 19,
            iT = 65535 & oT,
            zT = this.stack.length - 3 * IT;
          if (zT < 0 || TT.getGoto(this.stack[zT], iT, !1) < 0) {
            let TT = this.findForcedReduction();
            if (null == TT) return !1;
            oT = TT
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(oT), !0
      }
      findForcedReduction() {
        let {
          parser: TT
        } = this.p, oT = [], IT = (iT, zT) => {
          if (!oT.includes(iT)) return oT.push(iT), TT.allActions(iT, (oT => {
            if (393216 & oT);
            else if (65536 & oT) {
              let IT = (oT >> 19) - zT;
              if (IT > 1) {
                let iT = 65535 & oT,
                  zT = this.stack.length - 3 * IT;
                if (zT >= 0 && TT.getGoto(this.stack[zT], iT, !1) >= 0) return IT << 19 | 65536 | iT
              }
            } else {
              let TT = IT(oT, zT + 1);
              if (null != TT) return TT
            }
          }))
        };
        return IT(this.state, 0)
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
        for (let oT = 0; oT < this.stack.length; oT += 3)
          if (this.stack[oT] != TT.stack[oT]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(TT) {
        return this.p.parser.dialect.flags[TT]
      }
      shiftContext(TT, oT) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, TT, this, this.p.stream.reset(oT)))
      }
      reduceContext(TT, oT) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, TT, this, this.p.stream.reset(oT)))
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
          let oT = new kT(this.curContext.tracker, TT);
          oT.hash != this.curContext.hash && this.emitContext(), this.curContext = oT
        }
      }
      setLookAhead(TT) {
        return !(TT <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = TT, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class kT {
      constructor(TT, oT) {
        this.tracker = TT, this.context = oT, this.hash = TT.strict ? TT.hash(oT) : 0
      }
    }
    class WT {
      constructor(TT) {
        this.start = TT, this.state = TT.state, this.stack = TT.stack, this.base = this.stack.length
      }
      reduce(TT) {
        let oT = 65535 & TT,
          IT = TT >> 19;
        0 == IT ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (IT - 1);
        let iT = this.start.p.parser.getGoto(this.stack[this.base - 3], oT, !0);
        this.state = iT
      }
    }
    class XT {
      constructor(TT, oT, IT) {
        this.stack = TT, this.pos = oT, this.index = IT, this.buffer = TT.buffer, 0 == this.index && this.maybeNext()
      }
      static create(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.bufferBase + TT.buffer.length;
        return new XT(TT, oT, oT - TT.bufferBase)
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
        return new XT(this.stack, this.pos, this.index)
      }
    }

    function BT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof TT) return TT;
      let IT = null;
      for (let iT = 0, zT = 0; iT < TT.length;) {
        let kT = 0;
        for (;;) {
          let oT = TT.charCodeAt(iT++),
            IT = !1;
          if (126 == oT) {
            kT = 65535;
            break
          }
          oT >= 92 && oT--, oT >= 34 && oT--;
          let zT = oT - 32;
          if (zT >= 46 && (zT -= 46, IT = !0), kT += zT, IT) break;
          kT *= 46
        }
        IT ? IT[zT++] = kT : IT = new oT(kT)
      }
      return IT
    }
    class FT {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const ST = new FT;
    class DT {
      constructor(TT, oT) {
        this.input = TT, this.ec = oT, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = ST, this.rangeIndex = 0, this.pos = this.chunkPos = oT[0].from, this.range = oT[0], this.end = oT[oT.length - 1].to, this.readNext()
      }
      resolveOffset(TT, oT) {
        let IT = this.range,
          iT = this.rangeIndex,
          zT = this.pos + TT;
        for (; zT < IT.from;) {
          if (!iT) return null;
          let TT = this.ec[--iT];
          zT -= IT.from - TT.to, IT = TT
        }
        for (; oT < 0 ? zT > IT.to : zT >= IT.to;) {
          if (iT == this.ec.length - 1) return null;
          let TT = this.ec[++iT];
          zT += TT.from - IT.to, IT = TT
        }
        return zT
      }
      clipPos(TT) {
        if (TT >= this.range.from && TT < this.range.to) return TT;
        for (let oT of this.ec)
          if (oT.to > TT) return Math.max(TT, oT.from);
        return this.end
      }
      peek(TT) {
        let oT, IT, iT = this.chunkOff + TT;
        if (iT >= 0 && iT < this.chunk.length) oT = this.pos + TT, IT = this.chunk.charCodeAt(iT);
        else {
          let iT = this.resolveOffset(TT, 1);
          if (null == iT) return -1;
          if (oT = iT, oT >= this.chunk2Pos && oT < this.chunk2Pos + this.chunk2.length) IT = this.chunk2.charCodeAt(oT - this.chunk2Pos);
          else {
            let TT = this.rangeIndex,
              iT = this.range;
            for (; iT.to <= oT;) iT = this.ec[++TT];
            this.chunk2 = this.input.chunk(this.chunk2Pos = oT), oT + this.chunk2.length > iT.to && (this.chunk2 = this.chunk2.slice(0, iT.to - oT)), IT = this.chunk2.charCodeAt(0)
          }
        }
        return oT >= this.token.lookAhead && (this.token.lookAhead = oT + 1), IT
      }
      acceptToken(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = oT ? this.resolveOffset(oT, -1) : this.pos;
        if (null == IT || IT < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = TT, this.token.end = IT
      }
      acceptTokenTo(TT, oT) {
        this.token.value = TT, this.token.end = oT
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: TT,
            chunkPos: oT
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = TT, this.chunk2Pos = oT, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let TT = this.input.chunk(this.pos),
            oT = this.pos + TT.length;
          this.chunk = oT > this.range.to ? TT.slice(0, this.range.to - this.pos) : TT, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += TT; this.pos + TT >= this.range.to;) {
          if (this.rangeIndex == this.ec.length - 1) return this.setDone();
          TT -= this.range.to - this.pos, this.range = this.ec[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += TT, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.ec[this.rangeIndex = this.ec.length - 1], this.chunk = "", this.next = -1
      }
      reset(TT, oT) {
        if (oT ? (this.token = oT, oT.start = TT, oT.lookAhead = TT + 1, oT.value = oT.extended = -1) : this.token = ST, this.pos != TT) {
          if (this.pos = TT, TT == this.end) return this.setDone(), this;
          for (; TT < this.range.from;) this.range = this.ec[--this.rangeIndex];
          for (; TT >= this.range.to;) this.range = this.ec[++this.rangeIndex];
          TT >= this.chunkPos && TT < this.chunkPos + this.chunk.length ? this.chunkOff = TT - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(TT, oT) {
        if (TT >= this.chunkPos && oT <= this.chunkPos + this.chunk.length) return this.chunk.slice(TT - this.chunkPos, oT - this.chunkPos);
        if (TT >= this.chunk2Pos && oT <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(TT - this.chunk2Pos, oT - this.chunk2Pos);
        if (TT >= this.range.from && oT <= this.range.to) return this.input.read(TT, oT);
        let IT = "";
        for (let iT of this.ec) {
          if (iT.from >= oT) break;
          iT.to > TT && (IT += this.input.read(Math.max(iT.from, TT), Math.min(iT.to, oT)))
        }
        return IT
      }
    }
    class LT {
      constructor(TT, oT) {
        this.data = TT, this.id = oT
      }
      token(TT, oT) {
        let {
          parser: IT
        } = oT.p;
        KT(this.data, TT, oT, this.id, IT.data, IT.tokenPrecTable)
      }
    }
    LT.prototype.contextual = LT.prototype.fallback = LT.prototype.extend = !1;
    class xT {
      constructor(TT, oT, IT) {
        this.precTable = oT, this.elseToken = IT, this.data = "string" == typeof TT ? BT(TT) : TT
      }
      token(TT, oT) {
        let IT = TT.pos,
          iT = 0;
        for (;;) {
          let IT = TT.next < 0,
            zT = TT.resolveOffset(1, 1);
          if (KT(this.data, TT, oT, 0, this.data, this.precTable), TT.token.value > -1) break;
          if (null == this.elseToken) return;
          if (IT || iT++, null == zT) break;
          TT.reset(zT, TT.token)
        }
        iT && (TT.reset(IT, TT.token), TT.acceptToken(this.elseToken, iT))
      }
    }
    xT.prototype.contextual = LT.prototype.fallback = LT.prototype.extend = !1;
    class cT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = TT, this.contextual = !!oT.contextual, this.fallback = !!oT.fallback, this.extend = !!oT.extend
      }
    }

    function KT(TT, oT, IT, iT, zT, kT) {
      let WT = 0,
        XT = 1 << iT,
        {
          dialect: BT
        } = IT.p.parser;
      TT: for (; 0 != (XT & TT[WT]);) {
        let IT = TT[WT + 1];
        for (let DT = WT + 3; DT < IT; DT += 2)
          if ((TT[DT + 1] & XT) > 0) {
            let IT = TT[DT];
            if (BT.allows(IT) && (-1 == oT.token.value || oT.token.value == IT || rT(IT, oT.token.value, zT, kT))) {
              oT.acceptToken(IT);
              break
            }
          } let iT = oT.next,
          FT = 0,
          ST = TT[WT + 2];
        if (!(oT.next < 0 && ST > FT && 65535 == TT[IT + 3 * ST - 3])) {
          for (; FT < ST;) {
            let zT = FT + ST >> 1,
              kT = IT + zT + (zT << 1),
              XT = TT[kT],
              BT = TT[kT + 1] || 65536;
            if (iT < XT) ST = zT;
            else {
              if (!(iT >= BT)) {
                WT = TT[kT + 2], oT.advance();
                continue TT
              }
              FT = zT + 1
            }
          }
          break
        }
        WT = TT[IT + 3 * ST - 1]
      }
    }

    function MT(TT, oT, IT) {
      for (let iT, zT = oT; 65535 != (iT = TT[zT]); zT++)
        if (iT == IT) return zT - oT;
      return -1
    }

    function rT(TT, oT, IT, iT) {
      let zT = MT(IT, iT, oT);
      return zT < 0 || MT(IT, iT, TT) < zT
    }
    const AT = "undefined" != typeof process && {
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
    let gT = null;

    function hT(TT, oT, IT) {
      let zT = TT.cursor(iT.h.IncludeAnonymous);
      for (zT.moveTo(oT);;)
        if (!(IT < 0 ? zT.childBefore(oT) : zT.childAfter(oT)))
          for (;;) {
            if ((IT < 0 ? zT.to < oT : zT.from > oT) && !zT.type.isError) return IT < 0 ? Math.max(0, Math.min(zT.to - 1, oT - 25)) : Math.min(TT.length, Math.max(zT.from + 1, oT + 25));
            if (IT < 0 ? zT.prevSibling() : zT.nextSibling()) break;
            if (!zT.parent()) return IT < 0 ? 0 : TT.length
          }
    }
    class wT {
      constructor(TT, oT) {
        this.fragments = TT, this.nodeSet = oT, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let TT = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (TT) {
          for (this.safeFrom = TT.openStart ? hT(TT.tree, TT.from + TT.offset, 1) - TT.offset : TT.from, this.safeTo = TT.openEnd ? hT(TT.tree, TT.to + TT.offset, -1) - TT.offset : TT.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(TT.tree), this.start.push(-TT.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(TT) {
        if (TT < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= TT;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let oT = this.trees.length - 1;
          if (oT < 0) return this.nextFragment(), null;
          let IT = this.trees[oT],
            zT = this.index[oT];
          if (zT == IT.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let kT = IT.children[zT],
            WT = this.start[oT] + IT.positions[zT];
          if (WT > TT) return this.nextStart = WT, null;
          if (kT instanceof iT.x) {
            if (WT == TT) {
              if (WT < this.safeFrom) return null;
              let TT = WT + kT.length;
              if (TT <= this.safeTo) {
                let oT = kT.prop(iT.j.lookAhead);
                if (!oT || TT + oT < this.fragment.to) return kT
              }
            }
            this.index[oT]++, WT + kT.length >= Math.max(this.safeFrom, TT) && (this.trees.push(kT), this.start.push(WT), this.index.push(0))
          } else this.index[oT]++, this.nextStart = WT + kT.length
        }
      }
    }
    class mT {
      constructor(TT, oT) {
        this.stream = oT, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = TT.tokenizers.map((TT => new FT))
      }
      getActions(TT) {
        let oT = 0,
          IT = null,
          {
            parser: iT
          } = TT.p,
          {
            tokenizers: zT
          } = iT,
          kT = iT.stateSlot(TT.state, 3),
          WT = TT.curContext ? TT.curContext.hash : 0,
          XT = 0;
        for (let BT = 0; BT < zT.length; BT++) {
          if (0 == (1 << BT & kT)) continue;
          let iT = zT[BT],
            FT = this.tokens[BT];
          if ((!IT || iT.fallback) && ((iT.contextual || FT.start != TT.pos || FT.mask != kT || FT.context != WT) && (this.updateCachedToken(FT, iT, TT), FT.mask = kT, FT.context = WT), FT.lookAhead > FT.end + 25 && (XT = Math.max(FT.lookAhead, XT)), 0 != FT.value)) {
            let zT = oT;
            if (FT.extended > -1 && (oT = this.addActions(TT, FT.extended, FT.end, oT)), oT = this.addActions(TT, FT.value, FT.end, oT), !iT.extend && (IT = FT, oT > zT)) break
          }
        }
        for (; this.actions.length > oT;) this.actions.pop();
        return XT && TT.setLookAhead(XT), IT || TT.pos != this.stream.end || (IT = new FT, IT.value = TT.p.parser.eofTerm, IT.start = IT.end = TT.pos, oT = this.addActions(TT, IT.value, IT.end, oT)), this.mainToken = IT, this.actions
      }
      getMainToken(TT) {
        if (this.mainToken) return this.mainToken;
        let oT = new FT,
          {
            pos: IT,
            p: iT
          } = TT;
        return oT.start = IT, oT.end = Math.min(IT + 1, iT.stream.end), oT.value = IT == iT.stream.end ? iT.parser.eofTerm : 0, oT
      }
      updateCachedToken(TT, oT, IT) {
        let iT = this.stream.clipPos(IT.pos);
        if (oT.token(this.stream.reset(iT, TT), IT), TT.value > -1) {
          let {
            parser: oT
          } = IT.p;
          for (let iT = 0; iT < oT.specialized.length; iT++)
            if (oT.specialized[iT] == TT.value) {
              let zT = oT.specializers[iT](this.stream.read(TT.start, TT.end), IT);
              if (zT >= 0 && IT.p.parser.dialect.allows(zT >> 1)) {
                0 == (1 & zT) ? TT.value = zT >> 1 : TT.extended = zT >> 1;
                break
              }
            }
        } else TT.value = 0, TT.end = this.stream.clipPos(iT + 1)
      }
      putAction(TT, oT, IT, iT) {
        for (let zT = 0; zT < iT; zT += 3)
          if (this.actions[zT] == TT) return iT;
        return this.actions[iT++] = TT, this.actions[iT++] = oT, this.actions[iT++] = IT, iT
      }
      addActions(TT, oT, IT, iT) {
        let {
          state: zT
        } = TT, {
          parser: kT
        } = TT.p, {
          data: WT
        } = kT;
        for (let XT = 0; XT < 2; XT++)
          for (let TT = kT.stateSlot(zT, XT ? 2 : 1);; TT += 3) {
            if (65535 == WT[TT]) {
              if (1 != WT[TT + 1]) {
                0 == iT && 2 == WT[TT + 1] && (iT = this.putAction(fT(WT, TT + 2), oT, IT, iT));
                break
              }
              TT = fT(WT, TT + 2)
            }
            WT[TT] == oT && (iT = this.putAction(fT(WT, TT + 1), oT, IT, iT))
          }
        return iT
      }
    }
    class eT {
      constructor(TT, oT, IT, iT) {
        this.parser = TT, this.input = oT, this.ec = iT, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new DT(oT, iT), this.tokens = new mT(TT, this.stream), this.topTerm = TT.top[1];
        let {
          from: kT
        } = iT[0];
        this.stacks = [zT.start(this, TT.top[0], kT)], this.fragments = IT.length && this.stream.end - kT > 4 * TT.bufferLength ? new wT(IT, TT.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let TT, oT, IT = this.stacks,
          iT = this.minStackPos,
          zT = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == IT.length) {
          let [TT] = IT;
          for (; TT.forceReduce() && TT.stack.length && TT.stack[TT.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let kT = 0; kT < IT.length; kT++) {
          let WT = IT[kT];
          for (;;) {
            if (this.tokens.mainToken = null, WT.pos > iT) zT.push(WT);
            else {
              if (this.advanceStack(WT, zT, IT)) continue;
              {
                TT || (TT = [], oT = []), TT.push(WT);
                let IT = this.tokens.getMainToken(WT);
                oT.push(IT.value, IT.end)
              }
            }
            break
          }
        }
        if (!zT.length) {
          let oT = TT && function(TT) {
            let oT = null;
            for (let IT of TT) {
              let TT = IT.p.stoppedAt;
              (IT.pos == IT.p.stream.end || null != TT && IT.pos > TT) && IT.p.parser.stateFlag(IT.state, 2) && (!oT || oT.score < IT.score) && (oT = IT)
            }
            return oT
          }(TT);
          if (oT) return AT && console.log("Finish with " + this.stackID(oT)), this.stackToTree(oT);
          if (this.parser.strict) throw AT && TT && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + iT);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && TT) {
          let IT = null != this.stoppedAt && TT[0].pos > this.stoppedAt ? TT[0] : this.runRecovery(TT, oT, zT);
          if (IT) return AT && console.log("Force-finish " + this.stackID(IT)), this.stackToTree(IT.forceAll())
        }
        if (this.recovering) {
          let TT = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (zT.length > TT)
            for (zT.sort(((TT, oT) => oT.score - TT.score)); zT.length > TT;) zT.pop();
          zT.some((TT => TT.reducePos > iT)) && this.recovering--
        } else if (zT.length > 1) {
          TT: for (let TT = 0; TT < zT.length - 1; TT++) {
            let oT = zT[TT];
            for (let IT = TT + 1; IT < zT.length; IT++) {
              let iT = zT[IT];
              if (oT.sameState(iT) || oT.buffer.length > 500 && iT.buffer.length > 500) {
                if (!((oT.score - iT.score || oT.buffer.length - iT.buffer.length) > 0)) {
                  zT.splice(TT--, 1);
                  continue TT
                }
                zT.splice(IT--, 1)
              }
            }
          }
          zT.length > 12 && (zT.sort(((TT, oT) => oT.score - TT.score)), zT.splice(12, zT.length - 12))
        }
        this.minStackPos = zT[0].pos;
        for (let kT = 1; kT < zT.length; kT++) zT[kT].pos < this.minStackPos && (this.minStackPos = zT[kT].pos);
        return null
      }
      stopAt(TT) {
        if (null != this.stoppedAt && this.stoppedAt < TT) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = TT
      }
      advanceStack(TT, oT, IT) {
        let zT = TT.pos,
          {
            parser: kT
          } = this,
          WT = AT ? this.stackID(TT) + " -> " : "";
        if (null != this.stoppedAt && zT > this.stoppedAt) return TT.forceReduce() ? TT : null;
        if (this.fragments) {
          let oT = TT.curContext && TT.curContext.tracker.strict,
            IT = oT ? TT.curContext.hash : 0;
          for (let XT = this.fragments.nodeAt(zT); XT;) {
            let zT = this.parser.nodeSet.types[XT.type.id] == XT.type ? kT.getGoto(TT.state, XT.type.id) : -1;
            if (zT > -1 && XT.length && (!oT || (XT.prop(iT.j.contextHash) || 0) == IT)) return TT.useNode(XT, zT), AT && console.log(WT + this.stackID(TT) + ` (via reuse of ${kT.getName(XT.type.id)})`), !0;
            if (!(XT instanceof iT.x) || 0 == XT.children.length || XT.positions[0] > 0) break;
            let BT = XT.children[0];
            if (!(BT instanceof iT.x && 0 == XT.positions[0])) break;
            XT = BT
          }
        }
        let XT = kT.stateSlot(TT.state, 4);
        if (XT > 0) return TT.reduce(XT), AT && console.log(WT + this.stackID(TT) + ` (via always-reduce ${kT.getName(65535&XT)})`), !0;
        if (TT.stack.length >= 8400)
          for (; TT.stack.length > 6e3 && TT.forceReduce(););
        let BT = this.tokens.getActions(TT);
        for (let iT = 0; iT < BT.length;) {
          let XT = BT[iT++],
            FT = BT[iT++],
            ST = BT[iT++],
            DT = iT == BT.length || !IT,
            LT = DT ? TT : TT.split(),
            xT = this.tokens.mainToken;
          if (LT.apply(XT, FT, xT ? xT.start : LT.pos, ST), AT && console.log(WT + this.stackID(LT) + ` (via ${0==(65536&XT)?"shift":`reduce of ${kT.getName(65535&XT)}`} for ${kT.getName(FT)} @ ${zT}${LT==TT?"":", split"})`), DT) return !0;
          LT.pos > zT ? oT.push(LT) : IT.push(LT)
        }
        return !1
      }
      advanceFully(TT, oT) {
        let IT = TT.pos;
        for (;;) {
          if (!this.advanceStack(TT, null, null)) return !1;
          if (TT.pos > IT) return RT(TT, oT), !0
        }
      }
      runRecovery(TT, oT, IT) {
        let iT = null,
          zT = !1;
        for (let kT = 0; kT < TT.length; kT++) {
          let WT = TT[kT],
            XT = oT[kT << 1],
            BT = oT[1 + (kT << 1)],
            FT = AT ? this.stackID(WT) + " -> " : "";
          if (WT.deadEnd) {
            if (zT) continue;
            if (zT = !0, WT.restart(), AT && console.log(FT + this.stackID(WT) + " (restarted)"), this.advanceFully(WT, IT)) continue
          }
          let ST = WT.split(),
            DT = FT;
          for (let TT = 0; TT < 10 && ST.forceReduce(); TT++) {
            if (AT && console.log(DT + this.stackID(ST) + " (via force-reduce)"), this.advanceFully(ST, IT)) break;
            AT && (DT = this.stackID(ST) + " -> ")
          }
          for (let TT of WT.recoverByInsert(XT)) AT && console.log(FT + this.stackID(TT) + " (via recover-insert)"), this.advanceFully(TT, IT);
          this.stream.end > WT.pos ? (BT == WT.pos && (BT++, XT = 0), WT.recoverByDelete(XT, BT), AT && console.log(FT + this.stackID(WT) + ` (via recover-delete ${this.parser.getName(XT)})`), RT(WT, IT)) : (!iT || iT.score < ST.score) && (iT = ST)
        }
        return iT
      }
      stackToTree(TT) {
        return TT.close(), iT.x.build({
          buffer: XT.create(TT),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.ec[0].from,
          length: TT.pos - this.ec[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(TT) {
        let oT = (gT || (gT = new WeakMap)).get(TT);
        return oT || gT.set(TT, oT = String.fromCodePoint(this.nextStackID++)), oT + TT
      }
    }

    function RT(TT, oT) {
      for (let IT = 0; IT < oT.length; IT++) {
        let iT = oT[IT];
        if (iT.pos == TT.pos && iT.sameState(TT)) return void(oT[IT].score < TT.score && (oT[IT] = TT))
      }
      oT.push(TT)
    }
    class uT {
      constructor(TT, oT, IT) {
        this.source = TT, this.flags = oT, this.disabled = IT
      }
      allows(TT) {
        return !this.disabled || 0 == this.disabled[TT]
      }
    }
    const vT = TT => TT;
    class ET extends iT.u {
      constructor(TT) {
        if (super(), this.wrappers = [], 14 != TT.version) throw new RangeError(`Parser version (${TT.version}) doesn't match runtime version (14)`);
        let oT = TT.nodeNames.split(" ");
        this.minRepeatTerm = oT.length;
        for (let iT = 0; iT < TT.repeatNodeCount; iT++) oT.push("");
        let IT = Object.keys(TT.topRules).map((oT => TT.topRules[oT][1])),
          zT = [];
        for (let iT = 0; iT < oT.length; iT++) zT.push([]);

        function kT(TT, oT, IT) {
          zT[TT].push([oT, oT.deserialize(String(IT))])
        }
        if (TT.nodeProps)
          for (let XT of TT.nodeProps) {
            let TT = XT[0];
            "string" == typeof TT && (TT = iT.j[TT]);
            for (let oT = 1; oT < XT.length;) {
              let IT = XT[oT++];
              if (IT >= 0) kT(IT, TT, XT[oT++]);
              else {
                let iT = XT[oT + -IT];
                for (let zT = -IT; zT > 0; zT--) kT(XT[oT++], TT, iT);
                oT++
              }
            }
          }
        this.nodeSet = new iT.m(oT.map(((oT, kT) => iT.n.define({
          name: kT >= this.minRepeatTerm ? void 0 : oT,
          id: kT,
          props: zT[kT],
          top: IT.indexOf(kT) > -1,
          error: 0 == kT,
          skipped: TT.skippedNodes && TT.skippedNodes.indexOf(kT) > -1
        })))), TT.propSources && (this.nodeSet = this.nodeSet.extend(...TT.propSources)), this.strict = !1, this.bufferLength = iT.d;
        let WT = BT(TT.tokenData);
        this.context = TT.context, this.specializerSpecs = TT.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let iT = 0; iT < this.specializerSpecs.length; iT++) this.specialized[iT] = this.specializerSpecs[iT].term;
        this.specializers = this.specializerSpecs.map(CT), this.states = BT(TT.states, Uint32Array), this.data = BT(TT.stateData), this.goto = BT(TT.goto), this.maxTerm = TT.maxTerm, this.tokenizers = TT.tokenizers.map((TT => "number" == typeof TT ? new LT(WT, TT) : TT)), this.topRules = TT.topRules, this.dialects = TT.dialects || {}, this.dynamicPrecedences = TT.dynamicPrecedences || null, this.tokenPrecTable = TT.tokenPrec, this.termNames = TT.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(TT, oT, IT) {
        let iT = new eT(this, TT, oT, IT);
        for (let zT of this.wrappers) iT = zT(iT, TT, oT, IT);
        return iT
      }
      getGoto(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = this.goto;
        if (oT >= iT[0]) return -1;
        for (let zT = iT[oT + 1];;) {
          let oT = iT[zT++],
            kT = 1 & oT,
            WT = iT[zT++];
          if (kT && IT) return WT;
          for (let IT = zT + (oT >> 1); zT < IT; zT++)
            if (iT[zT] == TT) return WT;
          if (kT) return -1
        }
      }
      hasAction(TT, oT) {
        let IT = this.data;
        for (let iT = 0; iT < 2; iT++)
          for (let zT, kT = this.stateSlot(TT, iT ? 2 : 1);; kT += 3) {
            if (65535 == (zT = IT[kT])) {
              if (1 != IT[kT + 1]) {
                if (2 == IT[kT + 1]) return fT(IT, kT + 2);
                break
              }
              zT = IT[kT = fT(IT, kT + 2)]
            }
            if (zT == oT || 0 == zT) return fT(IT, kT + 1)
          }
        return 0
      }
      stateSlot(TT, oT) {
        return this.states[6 * TT + oT]
      }
      stateFlag(TT, oT) {
        return (this.stateSlot(TT, 0) & oT) > 0
      }
      validAction(TT, oT) {
        return !!this.allActions(TT, (TT => TT == oT || null))
      }
      allActions(TT, oT) {
        let IT = this.stateSlot(TT, 4),
          iT = IT ? oT(IT) : void 0;
        for (let zT = this.stateSlot(TT, 1); null == iT; zT += 3) {
          if (65535 == this.data[zT]) {
            if (1 != this.data[zT + 1]) break;
            zT = fT(this.data, zT + 2)
          }
          iT = oT(fT(this.data, zT + 1))
        }
        return iT
      }
      nextStates(TT) {
        let oT = [];
        for (let IT = this.stateSlot(TT, 1);; IT += 3) {
          if (65535 == this.data[IT]) {
            if (1 != this.data[IT + 1]) break;
            IT = fT(this.data, IT + 2)
          }
          if (0 == (1 & this.data[IT + 2])) {
            let TT = this.data[IT + 1];
            oT.some(((oT, IT) => 1 & IT && oT == TT)) || oT.push(this.data[IT], TT)
          }
        }
        return oT
      }
      configure(TT) {
        let oT = Object.assign(Object.create(ET.prototype), this);
        if (TT.props && (oT.nodeSet = this.nodeSet.extend(...TT.props)), TT.top) {
          let IT = this.topRules[TT.top];
          if (!IT) throw new RangeError(`Invalid top rule name ${TT.top}`);
          oT.top = IT
        }
        return TT.tokenizers && (oT.tokenizers = this.tokenizers.map((oT => {
          let IT = TT.tokenizers.find((TT => TT.from == oT));
          return IT ? IT.to : oT
        }))), TT.specializers && (oT.specializers = this.specializers.slice(), oT.specializerSpecs = this.specializerSpecs.map(((IT, iT) => {
          let zT = TT.specializers.find((TT => TT.from == IT.external));
          if (!zT) return IT;
          let kT = Object.assign(Object.assign({}, IT), {
            external: zT.to
          });
          return oT.specializers[iT] = CT(kT), kT
        }))), TT.contextTracker && (oT.context = TT.contextTracker), TT.dialect && (oT.dialect = this.parseDialect(TT.dialect)), null != TT.strict && (oT.strict = TT.strict), TT.wrap && (oT.wrappers = oT.wrappers.concat(TT.wrap)), null != TT.bufferLength && (oT.bufferLength = TT.bufferLength), oT
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
        let oT = this.dynamicPrecedences;
        return null == oT ? 0 : oT[TT] || 0
      }
      parseDialect(TT) {
        let oT = Object.keys(this.dialects),
          IT = oT.map((() => !1));
        if (TT)
          for (let zT of TT.split(" ")) {
            let TT = oT.indexOf(zT);
            TT >= 0 && (IT[TT] = !0)
          }
        let iT = null;
        for (let zT = 0; zT < oT.length; zT++)
          if (!IT[zT])
            for (let TT, IT = this.dialects[oT[zT]]; 65535 != (TT = this.data[IT++]);)(iT || (iT = new Uint8Array(this.maxTerm + 1)))[TT] = 1;
        return new uT(TT, IT, iT)
      }
      static deserialize(TT) {
        return new ET(TT)
      }
    }

    function fT(TT, oT) {
      return TT[oT] | TT[oT + 1] << 16
    }

    function CT(TT) {
      if (TT.external) {
        let oT = TT.extend ? 1 : 0;
        return (IT, iT) => TT.external(IT, iT) << 1 | oT
      }
      return TT.get
    }
    var jT = IT(40151);
    const JT = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      UT = new class {
        constructor(TT) {
          this.start = TT.start, this.shift = TT.shift || vT, this.reduce = TT.reduce || vT, this.reuse = TT.reuse || vT, this.hash = TT.hash || (() => 0), this.strict = !1 !== TT.strict
        }
      }({
        start: !1,
        shift: (TT, oT) => 5 == oT || 6 == oT || 320 == oT ? TT : 321 == oT,
        strict: !1
      }),
      aT = new cT(((TT, oT) => {
        let {
          next: IT
        } = TT;
        (125 == IT || -1 == IT || oT.context) && TT.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      YT = new cT(((TT, oT) => {
        let IT, {
          next: iT
        } = TT;
        JT.indexOf(iT) > -1 || (47 != iT || 47 != (IT = TT.peek(1)) && 42 != IT) && (125 == iT || 59 == iT || -1 == iT || oT.context || TT.acceptToken(316))
      }), {
        contextual: !0
      }),
      QT = new cT(((TT, oT) => {
        91 != TT.next || oT.context || TT.acceptToken(317)
      }), {
        contextual: !0
      }),
      OT = new cT(((TT, oT) => {
        let {
          next: IT
        } = TT;
        if (43 == IT || 45 == IT) {
          if (TT.advance(), IT == TT.next) {
            TT.advance();
            let IT = !oT.context && oT.canShift(1);
            TT.acceptToken(IT ? 1 : 2)
          }
        } else 63 == IT && 46 == TT.peek(1) && (TT.advance(), TT.advance(), (TT.next < 48 || TT.next > 57) && TT.acceptToken(3))
      }), {
        contextual: !0
      });

    function HT(TT, oT) {
      return TT >= 65 && TT <= 90 || TT >= 97 && TT <= 122 || 95 == TT || TT >= 192 || !oT && TT >= 48 && TT <= 57
    }
    const nT = new cT(((TT, oT) => {
        if (60 != TT.next || !oT.dialectEnabled(0)) return;
        if (TT.advance(), 47 == TT.next) return;
        let IT = 0;
        for (; JT.indexOf(TT.next) > -1;) TT.advance(), IT++;
        if (HT(TT.next, !0)) {
          for (TT.advance(), IT++; HT(TT.next, !1);) TT.advance(), IT++;
          for (; JT.indexOf(TT.next) > -1;) TT.advance(), IT++;
          if (44 == TT.next) return;
          for (let oT = 0;; oT++) {
            if (7 == oT) {
              if (!HT(TT.next, !0)) return;
              break
            }
            if (TT.next != "extends".charCodeAt(oT)) break;
            TT.advance(), IT++
          }
        }
        TT.acceptToken(4, -IT)
      })),
      qT = (0, jT.h)({
        "get set async static": jT.m.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": jT.m.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": jT.m.operatorKeyword,
        "let var const using function class extends": jT.m.definitionKeyword,
        "import export from": jT.m.moduleKeyword,
        "with debugger new": jT.m.keyword,
        TemplateString: jT.m.special(jT.m.string),
        super: jT.m.atom,
        BooleanLiteral: jT.m.bool,
        this: jT.m.self,
        null: jT.m.null,
        Star: jT.m.modifier,
        VariableName: jT.m.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": jT.m.function(jT.m.variableName),
        VariableDefinition: jT.m.definition(jT.m.variableName),
        Label: jT.m.labelName,
        PropertyName: jT.m.propertyName,
        PrivatePropertyName: jT.m.special(jT.m.propertyName),
        "CallExpression/MemberExpression/PropertyName": jT.m.function(jT.m.propertyName),
        "FunctionDeclaration/VariableDefinition": jT.m.function(jT.m.definition(jT.m.variableName)),
        "ClassDeclaration/VariableDefinition": jT.m.definition(jT.m.className),
        "NewExpression/VariableName": jT.m.className,
        PropertyDefinition: jT.m.definition(jT.m.propertyName),
        PrivatePropertyDefinition: jT.m.definition(jT.m.special(jT.m.propertyName)),
        UpdateOp: jT.m.updateOperator,
        "LineComment Hashbang": jT.m.lineComment,
        BlockComment: jT.m.blockComment,
        Number: jT.m.number,
        String: jT.m.string,
        Escape: jT.m.escape,
        ArithOp: jT.m.arithmeticOperator,
        LogicOp: jT.m.logicOperator,
        BitOp: jT.m.bitwiseOperator,
        CompareOp: jT.m.compareOperator,
        RegExp: jT.m.regexp,
        Equals: jT.m.definitionOperator,
        Arrow: jT.m.function(jT.m.punctuation),
        ": Spread": jT.m.punctuation,
        "( )": jT.m.paren,
        "[ ]": jT.m.squareBracket,
        "{ }": jT.m.brace,
        "InterpolationStart InterpolationEnd": jT.m.special(jT.m.brace),
        ".": jT.m.derefOperator,
        ", ;": jT.m.separator,
        "@": jT.m.meta,
        TypeName: jT.m.typeName,
        TypeDefinition: jT.m.definition(jT.m.typeName),
        "type enum interface implements namespace module declare": jT.m.definitionKeyword,
        "abstract global Privacy readonly override": jT.m.modifier,
        "is keyof unique infer asserts": jT.m.operatorKeyword,
        JSXAttributeValue: jT.m.attributeValue,
        JSXText: jT.m.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": jT.m.angleBracket,
        "JSXIdentifier JSXNameSpacedName": jT.m.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": jT.m.attributeName,
        "JSXBuiltin/JSXIdentifier": jT.m.standard(jT.m.tagName)
      }),
      ZT = {
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
      lT = {
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
      sT = {
        __proto__: null,
        "<": 193
      },
      tT = ET.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: UT,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [qT],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [YT, QT, OT, nT, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, aT, new xT("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new xT("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: TT => ZT[TT] || -1
        }, {
          term: 343,
          get: TT => lT[TT] || -1
        }, {
          term: 95,
          get: TT => sT[TT] || -1
        }],
        tokenPrec: 15201
      });
    var GT = IT(40137),
      pT = IT(40110),
      bT = IT(40115),
      yT = IT(40103);
    const NT = [(0, yT.s)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, yT.s)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, yT.s)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, yT.s)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, yT.s)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, yT.s)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, yT.s)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, yT.s)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, yT.s)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, yT.s)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, yT.s)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      PT = NT.concat([(0, yT.s)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, yT.s)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, yT.s)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      dT = new iT.q,
      VT = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function To(TT) {
      return (oT, IT) => {
        let iT = oT.node.getChild("VariableDefinition");
        return iT && IT(iT, TT), !0
      }
    }
    const oo = ["FunctionDeclaration"],
      Io = {
        FunctionDeclaration: To("function"),
        ClassDeclaration: To("class"),
        ClassExpression: () => !0,
        EnumDeclaration: To("constant"),
        TypeAliasDeclaration: To("type"),
        NamespaceDeclaration: To("namespace"),
        VariableDefinition(TT, oT) {
          TT.matchContext(oo) || oT(TT, "variable")
        },
        TypeDefinition(TT, oT) {
          oT(TT, "type")
        },
        __proto__: null
      };

    function io(TT, oT) {
      let IT = dT.get(oT);
      if (IT) return IT;
      let zT = [],
        kT = !0;

      function WT(oT, IT) {
        let iT = TT.sliceString(oT.from, oT.to);
        zT.push({
          label: iT,
          type: IT
        })
      }
      return oT.cursor(iT.h.IncludeAnonymous).iterate((oT => {
        if (kT) kT = !1;
        else if (oT.name) {
          let TT = Io[oT.name];
          if (TT && TT(oT, WT) || VT.has(oT.name)) return !1
        } else if (oT.to - oT.from > 8192) {
          for (let IT of io(TT, oT.node)) zT.push(IT);
          return !1
        }
      })), dT.set(oT, zT), zT
    }
    const zo = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      ko = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function Wo(TT) {
      let oT = (0, GT.jb)(TT.state).resolveInner(TT.pos, -1);
      if (ko.indexOf(oT.name) > -1) return null;
      let IT = "VariableName" == oT.name || oT.to - oT.from < 20 && zo.test(TT.state.sliceDoc(oT.from, oT.to));
      if (!IT && !TT.explicit) return null;
      let iT = [];
      for (let zT = oT; zT; zT = zT.parent) VT.has(zT.name) && (iT = iT.concat(io(TT.state.doc, zT)));
      return {
        options: iT,
        from: IT ? oT.from : TT.pos,
        validFor: zo
      }
    }
    const Xo = GT.h.define({
        name: "javascript",
        parser: tT.configure({
          props: [GT.T.add({
            IfStatement: (0, GT.p)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, GT.p)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: GT.B,
            SwitchBody: TT => {
              let oT = TT.textAfter,
                IT = /^\s*\}/.test(oT),
                iT = /^\s*(case|default)\b/.test(oT);
              return TT.baseIndent + (IT ? 0 : iT ? 1 : 2) * TT.unit
            },
            Block: (0, GT.x)({
              closing: "}"
            }),
            ArrowFunction: TT => TT.baseIndent + TT.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, GT.p)({
              except: /^\s*{/
            }),
            JSXElement(TT) {
              let oT = /^\s*<\//.test(TT.textAfter);
              return TT.lineIndent(TT.node.from) + (oT ? 0 : TT.unit)
            },
            JSXEscape(TT) {
              let oT = /\s*\}/.test(TT.textAfter);
              return TT.lineIndent(TT.node.from) + (oT ? 0 : TT.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": TT => TT.column(TT.node.from) + TT.unit
          }), GT.J.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": GT.D,
            BlockComment: TT => ({
              from: TT.from + 2,
              to: TT.to - 2
            }),
            JSXElement(TT) {
              let oT = TT.firstChild;
              if (!oT || "JSXSelfClosingTag" == oT.name) return null;
              let IT = TT.lastChild;
              return {
                from: oT.to,
                to: IT.type.isError ? TT.to : IT.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(TT) {
              var oT;
              let IT = null === (oT = TT.firstChild) || void 0 === oT ? void 0 : oT.nextSibling,
                iT = TT.lastChild;
              return !IT || IT.type.isError ? null : {
                from: IT.to,
                to: iT.type.isError ? TT.to : iT.from
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
      Bo = {
        test: TT => /^JSX/.test(TT.name),
        facet: (0, GT.t)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      Fo = Xo.configure({
        dialect: "ts"
      }, "typescript"),
      So = Xo.configure({
        dialect: "jsx",
        props: [GT.db.add((TT => TT.isTop ? [Bo] : void 0))]
      }),
      Do = Xo.configure({
        dialect: "jsx ts",
        props: [GT.db.add((TT => TT.isTop ? [Bo] : void 0))]
      }, "typescript");
    let Lo = TT => ({
      label: TT,
      type: "keyword"
    });
    const xo = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(Lo),
      co = xo.concat(["declare", "implements", "private", "protected", "public"].map(Lo));

    function Ko() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        oT = TT.jsx ? TT.typescript ? Do : So : TT.typescript ? Fo : Xo,
        IT = TT.typescript ? PT.concat(co) : NT.concat(xo);
      return new GT.l(oT, [Xo.data.of({
        autocomplete: (0, yT.o)(ko, (0, yT.k)(IT))
      }), Xo.data.of({
        autocomplete: Wo
      }), TT.jsx ? Ao : []])
    }

    function Mo(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT.length;
      for (let iT = null === oT || void 0 === oT ? void 0 : oT.firstChild; iT; iT = iT.nextSibling)
        if ("JSXIdentifier" == iT.name || "JSXBuiltin" == iT.name || "JSXNamespacedName" == iT.name || "JSXMemberExpression" == iT.name) return TT.sliceString(iT.from, Math.min(iT.to, IT));
      return ""
    }
    const ro = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Ao = bT.i.inputHandler.of(((TT, oT, IT, iT, zT) => {
        if ((ro ? TT.composing : TT.compositionStarted) || TT.state.readOnly || oT != IT || ">" != iT && "/" != iT || !Xo.isActiveAt(TT.state, oT, -1)) return !1;
        let kT = zT(),
          {
            state: WT
          } = kT,
          XT = WT.changeByRange((TT => {
            var oT;
            let IT, {
                head: zT
              } = TT,
              kT = (0, GT.jb)(WT).resolveInner(zT - 1, -1);
            if ("JSXStartTag" == kT.name && (kT = kT.parent), WT.doc.sliceString(zT - 1, zT) != iT || "JSXAttributeValue" == kT.name && kT.to > zT);
            else {
              if (">" == iT && "JSXFragmentTag" == kT.name) return {
                range: TT,
                changes: {
                  from: zT,
                  insert: "</>"
                }
              };
              if ("/" == iT && "JSXStartCloseTag" == kT.name) {
                let TT = kT.parent,
                  iT = TT.parent;
                if (iT && TT.from == zT - 2 && ((IT = Mo(WT.doc, iT.firstChild, zT)) || "JSXFragmentTag" == (null === (oT = iT.firstChild) || void 0 === oT ? void 0 : oT.name))) {
                  let TT = `${IT}>`;
                  return {
                    range: pT.k.cursor(zT + TT.length, -1),
                    changes: {
                      from: zT,
                      insert: TT
                    }
                  }
                }
              } else if (">" == iT) {
                let oT = function(TT) {
                  for (;;) {
                    if ("JSXOpenTag" == TT.name || "JSXSelfClosingTag" == TT.name || "JSXFragmentTag" == TT.name) return TT;
                    if ("JSXEscape" == TT.name || !TT.parent) return null;
                    TT = TT.parent
                  }
                }(kT);
                if (oT && "JSXOpenTag" == oT.name && !/^\/?>|^<\//.test(WT.doc.sliceString(zT, zT + 2)) && (IT = Mo(WT.doc, oT, zT))) return {
                  range: TT,
                  changes: {
                    from: zT,
                    insert: `</${IT}>`
                  }
                }
              }
            }
            return {
              range: TT
            }
          }));
        return !XT.changes.empty && (TT.dispatch([kT, WT.update(XT, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  40137: (TT, oT, IT) => {
    IT.d(oT, {
      $: () => CT,
      B: () => sT,
      C: () => Ao,
      D: () => NT,
      G: () => Fo,
      J: () => yT,
      M: () => rT,
      Q: () => jT,
      S: () => UT,
      T: () => YT,
      U: () => pT,
      X: () => JT,
      c: () => ho,
      cb: () => so,
      db: () => DT,
      f: () => aT,
      fb: () => Ro,
      h: () => cT,
      hb: () => MT,
      jb: () => KT,
      l: () => ET,
      n: () => Ho,
      p: () => tT,
      s: () => Eo,
      t: () => ST,
      x: () => ZT
    });
    var iT, zT = IT(40143),
      kT = IT(40110),
      WT = IT(40115),
      XT = IT(40151),
      BT = IT(40123);
    const FT = new zT.j;

    function ST(TT) {
      return kT.p.define({
        combine: TT ? oT => oT.concat(TT) : void 0
      })
    }
    const DT = new zT.j;
    class LT {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = TT, this.name = iT, kT.o.prototype.hasOwnProperty("tree") || Object.defineProperty(kT.o.prototype, "tree", {
          get() {
            return KT(this)
          }
        }), this.parser = oT, this.extension = [vT.of(this), kT.o.languageData.of(((TT, oT, IT) => {
          let iT = xT(TT, oT, IT),
            zT = iT.type.prop(FT);
          if (!zT) return [];
          let kT = TT.facet(zT),
            WT = iT.type.prop(DT);
          if (WT) {
            let zT = iT.resolve(oT - iT.from, IT);
            for (let oT of WT)
              if (oT.test(zT, TT)) {
                let IT = TT.facet(oT.facet);
                return "replace" == oT.type ? IT : IT.concat(kT)
              }
          }
          return kT
        }))].concat(IT)
      }
      isActiveAt(TT, oT) {
        return xT(TT, oT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(FT) == this.data
      }
      findRegions(TT) {
        let oT = TT.facet(vT);
        if ((null === oT || void 0 === oT ? void 0 : oT.data) == this.data) return [{
          from: 0,
          to: TT.doc.length
        }];
        if (!oT || !oT.allowsNesting) return [];
        let IT = [],
          iT = (TT, oT) => {
            if (TT.prop(FT) == this.data) return void IT.push({
              from: oT,
              to: oT + TT.length
            });
            let kT = TT.prop(zT.j.mounted);
            if (kT) {
              if (kT.tree.prop(FT) == this.data) {
                if (kT.overlay)
                  for (let TT of kT.overlay) IT.push({
                    from: TT.from + oT,
                    to: TT.to + oT
                  });
                else IT.push({
                  from: oT,
                  to: oT + TT.length
                });
                return
              }
              if (kT.overlay) {
                let TT = IT.length;
                if (iT(kT.tree, kT.overlay[0].from + oT), IT.length > TT) return
              }
            }
            for (let IT = 0; IT < TT.children.length; IT++) {
              let kT = TT.children[IT];
              kT instanceof zT.x && iT(kT, TT.positions[IT] + oT)
            }
          };
        return iT(KT(TT), 0), IT
      }
      get allowsNesting() {
        return !0
      }
    }

    function xT(TT, oT, IT) {
      let iT = TT.facet(vT),
        kT = KT(TT).topNode;
      if (!iT || iT.allowsNesting)
        for (let WT = kT; WT; WT = WT.enter(oT, IT, zT.h.ExcludeBuffers | zT.h.EnterBracketed)) WT.type.isTop && (kT = WT);
      return kT
    }
    LT.setState = kT.H.define();
    class cT extends LT {
      constructor(TT, oT, IT) {
        super(TT, oT, [], IT), this.parser = oT
      }
      static define(TT) {
        let oT = ST(TT.languageData);
        return new cT(oT, TT.parser.configure({
          props: [FT.add((TT => TT.isTop ? oT : void 0))]
        }), TT.name)
      }
      configure(TT, oT) {
        return new cT(this.data, this.parser.configure(TT), oT || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function KT(TT) {
      let oT = TT.field(LT.state, !1);
      return oT ? oT.tree : zT.x.empty
    }

    function MT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.doc.length;
      var IT;
      return (null === (IT = TT.field(LT.state, !1)) || void 0 === IT ? void 0 : IT.context.isDone(oT)) || !1
    }

    function rT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.viewport.to,
        IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        iT = function(TT, oT) {
          let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var iT;
          let zT = null === (iT = TT.field(LT.state, !1)) || void 0 === iT ? void 0 : iT.context;
          if (!zT) return null;
          let kT = zT.viewport;
          zT.updateViewport({
            from: 0,
            to: oT
          });
          let WT = zT.isDone(oT) || zT.work(IT, oT) ? zT.tree : null;
          return zT.updateViewport(kT), WT
        }(TT.state, oT, IT);
      return iT != KT(TT.state) && TT.dispatch({}), !!iT
    }
    class AT {
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
      read(TT, oT) {
        let IT = this.cursorPos - this.string.length;
        return TT < IT || oT >= this.cursorPos ? this.doc.sliceString(TT, oT) : this.string.slice(TT - IT, oT - IT)
      }
    }
    let gT = null;
    class hT {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          iT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          kT = arguments.length > 5 ? arguments[5] : void 0,
          WT = arguments.length > 6 ? arguments[6] : void 0,
          XT = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = TT, this.state = oT, this.fragments = IT, this.tree = iT, this.treeLen = zT, this.viewport = kT, this.skipped = WT, this.scheduleOn = XT, this.parse = null, this.tempSkipped = []
      }
      static create(TT, oT, IT) {
        return new hT(TT, oT, [], zT.x.empty, 0, IT, [], null)
      }
      startParse() {
        return this.parser.startParse(new AT(this.state.doc), this.fragments)
      }
      work(TT, oT) {
        return null != oT && oT >= this.state.doc.length && (oT = void 0), this.tree != zT.x.empty && this.isDone(null !== oT && void 0 !== oT ? oT : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var IT;
          if ("number" == typeof TT) {
            let oT = Date.now() + TT;
            TT = () => Date.now() > oT
          }
          for (this.parse || (this.parse = this.startParse()), null != oT && (null == this.parse.stoppedAt || this.parse.stoppedAt > oT) && oT < this.state.doc.length && this.parse.stopAt(oT);;) {
            let iT = this.parse.advance();
            if (iT) {
              if (this.fragments = this.withoutTempSkipped(zT.w.addTree(iT, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (IT = this.parse.stoppedAt) && void 0 !== IT ? IT : this.state.doc.length, this.tree = iT, this.parse = null, !(this.treeLen < (null !== oT && void 0 !== oT ? oT : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (TT()) return !1
          }
        }))
      }
      takeTree() {
        let TT, oT;
        this.parse && (TT = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > TT) && this.parse.stopAt(TT), this.withContext((() => {
          for (; !(oT = this.parse.advance()););
        })), this.treeLen = TT, this.tree = oT, this.fragments = this.withoutTempSkipped(zT.w.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(TT) {
        let oT = gT;
        gT = this;
        try {
          return TT()
        } finally {
          gT = oT
        }
      }
      withoutTempSkipped(TT) {
        for (let oT; oT = this.tempSkipped.pop();) TT = wT(TT, oT.from, oT.to);
        return TT
      }
      changes(TT, oT) {
        let {
          fragments: IT,
          tree: iT,
          treeLen: kT,
          viewport: WT,
          skipped: XT
        } = this;
        if (this.takeTree(), !TT.empty) {
          let oT = [];
          if (TT.iterChangedRanges(((TT, IT, iT, zT) => oT.push({
              fromA: TT,
              toA: IT,
              fromB: iT,
              toB: zT
            }))), IT = zT.w.applyChanges(IT, oT), iT = zT.x.empty, kT = 0, WT = {
              from: TT.mapPos(WT.from, -1),
              to: TT.mapPos(WT.to, 1)
            }, this.skipped.length) {
            XT = [];
            for (let oT of this.skipped) {
              let IT = TT.mapPos(oT.from, 1),
                iT = TT.mapPos(oT.to, -1);
              IT < iT && XT.push({
                from: IT,
                to: iT
              })
            }
          }
        }
        return new hT(this.parser, oT, IT, iT, kT, WT, XT, this.scheduleOn)
      }
      updateViewport(TT) {
        if (this.viewport.from == TT.from && this.viewport.to == TT.to) return !1;
        this.viewport = TT;
        let oT = this.skipped.length;
        for (let IT = 0; IT < this.skipped.length; IT++) {
          let {
            from: oT,
            to: iT
          } = this.skipped[IT];
          oT < TT.to && iT > TT.from && (this.fragments = wT(this.fragments, oT, iT), this.skipped.splice(IT--, 1))
        }
        return !(this.skipped.length >= oT) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(TT, oT) {
        this.skipped.push({
          from: TT,
          to: oT
        })
      }
      static getSkippingParser(TT) {
        return new class extends zT.u {
          createParse(oT, IT, iT) {
            let kT = iT[0].from,
              WT = iT[iT.length - 1].to;
            return {
              parsedPos: kT,
              advance() {
                let oT = gT;
                if (oT) {
                  for (let TT of iT) oT.tempSkipped.push(TT);
                  TT && (oT.scheduleOn = oT.scheduleOn ? Promise.all([oT.scheduleOn, TT]) : TT)
                }
                return this.parsedPos = WT, new zT.x(zT.n.none, [], [], WT - kT)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(TT) {
        TT = Math.min(TT, this.state.doc.length);
        let oT = this.fragments;
        return this.treeLen >= TT && oT.length && 0 == oT[0].from && oT[0].to >= TT
      }
      static get() {
        return gT
      }
    }

    function wT(TT, oT, IT) {
      return zT.w.applyChanges(TT, [{
        fromA: oT,
        toA: IT,
        fromB: oT,
        toB: IT
      }])
    }
    class mT {
      constructor(TT) {
        this.context = TT, this.tree = TT.tree
      }
      apply(TT) {
        if (!TT.docChanged && this.tree == this.context.tree) return this;
        let oT = this.context.changes(TT.changes, TT.state),
          IT = this.context.treeLen == TT.startState.doc.length ? void 0 : Math.max(TT.changes.mapPos(this.context.treeLen), oT.viewport.to);
        return oT.work(20, IT) || oT.takeTree(), new mT(oT)
      }
      static init(TT) {
        let oT = Math.min(3e3, TT.doc.length),
          IT = hT.create(TT.facet(vT).parser, TT, {
            from: 0,
            to: oT
          });
        return IT.work(20, oT) || IT.takeTree(), new mT(IT)
      }
    }
    LT.state = kT.K.define({
      create: mT.init,
      update(TT, oT) {
        for (let IT of oT.effects)
          if (IT.is(LT.setState)) return IT.value;
        return oT.startState.facet(vT) != oT.state.facet(vT) ? mT.init(oT.state) : TT.apply(oT)
      }
    });
    let eT = TT => {
      let oT = setTimeout((() => TT()), 500);
      return () => clearTimeout(oT)
    };
    "undefined" != typeof requestIdleCallback && (eT = TT => {
      let oT = -1,
        IT = setTimeout((() => {
          oT = requestIdleCallback(TT, {
            timeout: 400
          })
        }), 100);
      return () => oT < 0 ? clearTimeout(IT) : cancelIdleCallback(oT)
    });
    const RT = "undefined" != typeof navigator && (null === (iT = navigator.scheduling) || void 0 === iT ? void 0 : iT.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      uT = WT.l.fromClass(class {
        constructor(TT) {
          this.view = TT, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(TT) {
          let oT = this.view.state.field(LT.state).context;
          (oT.updateViewport(TT.view.viewport) || this.view.viewport.to > oT.treeLen) && this.scheduleWork(), (TT.docChanged || TT.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(oT)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: TT
          } = this.view, oT = TT.field(LT.state);
          oT.tree == oT.context.tree && oT.context.isDone(TT.doc.length) || (this.working = eT(this.work))
        }
        work(TT) {
          this.working = null;
          let oT = Date.now();
          if (this.chunkEnd < oT && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = oT + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: IT,
            viewport: {
              to: iT
            }
          } = this.view, zT = IT.field(LT.state);
          if (zT.tree == zT.context.tree && zT.context.isDone(iT + 1e5)) return;
          let kT = Date.now() + Math.min(this.chunkBudget, 100, TT && !RT ? Math.max(25, TT.timeRemaining() - 5) : 1e9),
            WT = zT.context.treeLen < iT && IT.doc.length > iT + 1e3,
            XT = zT.context.work((() => RT && RT() || Date.now() > kT), iT + (WT ? 0 : 1e5));
          this.chunkBudget -= Date.now() - oT, (XT || this.chunkBudget <= 0) && (zT.context.takeTree(), this.view.dispatch({
            effects: LT.setState.of(new mT(zT.context))
          })), this.chunkBudget > 0 && (!XT || WT) && this.scheduleWork(), this.checkAsyncSchedule(zT.context)
        }
        checkAsyncSchedule(TT) {
          TT.scheduleOn && (this.workScheduled++, TT.scheduleOn.then((() => this.scheduleWork())).catch((TT => (0, WT.U)(this.view.state, TT))).then((() => this.workScheduled--)), TT.scheduleOn = null)
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
      vT = kT.p.define({
        combine: TT => TT.length ? TT[0] : null,
        enables: TT => [LT.state, uT, WT.i.contentAttributes.compute([TT], (oT => {
          let IT = oT.facet(TT);
          return IT && IT.name ? {
            "data-language": IT.name
          } : {}
        }))]
      });
    class ET {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = TT, this.support = oT, this.extension = [TT, oT]
      }
    }
    const fT = kT.p.define(),
      CT = kT.p.define({
        combine: TT => {
          if (!TT.length) return "  ";
          let oT = TT[0];
          if (!oT || /\S/.test(oT) || Array.from(oT).some((TT => TT != oT[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(TT[0]));
          return oT
        }
      });

    function jT(TT) {
      let oT = TT.facet(CT);
      return 9 == oT.charCodeAt(0) ? TT.tabSize * oT.length : oT.length
    }

    function JT(TT, oT) {
      let IT = "",
        iT = TT.tabSize,
        zT = TT.facet(CT)[0];
      if ("\t" == zT) {
        for (; oT >= iT;) IT += "\t", oT -= iT;
        zT = " "
      }
      for (let kT = 0; kT < oT; kT++) IT += zT;
      return IT
    }

    function UT(TT, oT) {
      TT instanceof kT.o && (TT = new aT(TT));
      for (let iT of TT.state.facet(fT)) {
        let IT = iT(TT, oT);
        if (void 0 !== IT) return IT
      }
      let IT = KT(TT.state);
      return IT.length >= oT ? function(TT, oT, IT) {
        let iT = oT.resolveStack(IT),
          zT = oT.resolveInner(IT, -1).resolve(IT, 0).enterUnfinishedNodesBefore(IT);
        if (zT != iT.node) {
          let TT = [];
          for (let oT = zT; oT && !(oT.from < iT.node.from || oT.to > iT.node.to || oT.from == iT.node.from && oT.type == iT.node.type); oT = oT.parent) TT.push(oT);
          for (let oT = TT.length - 1; oT >= 0; oT--) iT = {
            node: TT[oT],
            next: iT
          }
        }
        return QT(iT, TT, IT)
      }(TT, IT, oT) : null
    }
    class aT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = TT, this.options = oT, this.unit = jT(TT)
      }
      lineAt(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          IT = this.state.doc.lineAt(TT),
          {
            simulateBreak: iT,
            simulateDoubleBreak: zT
          } = this.options;
        return null != iT && iT >= IT.from && iT <= IT.to ? zT && iT == TT ? {
          text: "",
          from: TT
        } : (oT < 0 ? iT < TT : iT <= TT) ? {
          text: IT.text.slice(iT - IT.from),
          from: iT
        } : {
          text: IT.text.slice(0, iT - IT.from),
          from: IT.from
        } : IT
      }
      textAfterPos(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && TT == this.options.simulateBreak) return "";
        let {
          text: IT,
          from: iT
        } = this.lineAt(TT, oT);
        return IT.slice(TT - iT, Math.min(IT.length, TT + 100 - iT))
      }
      column(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: IT,
            from: iT
          } = this.lineAt(TT, oT),
          zT = this.countColumn(IT, TT - iT),
          kT = this.options.overrideIndentation ? this.options.overrideIndentation(iT) : -1;
        return kT > -1 && (zT += kT - this.countColumn(IT, IT.search(/\S|$/))), zT
      }
      countColumn(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.length;
        return (0, kT.Y)(TT, this.state.tabSize, oT)
      }
      lineIndent(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: IT,
            from: iT
          } = this.lineAt(TT, oT),
          zT = this.options.overrideIndentation;
        if (zT) {
          let TT = zT(iT);
          if (TT > -1) return TT
        }
        return this.countColumn(IT, IT.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const YT = new zT.j;

    function QT(TT, oT, IT) {
      for (let iT = TT; iT; iT = iT.next) {
        let TT = OT(iT.node);
        if (TT) return TT(nT.create(oT, IT, iT))
      }
      return 0
    }

    function OT(TT) {
      let oT = TT.type.prop(YT);
      if (oT) return oT;
      let IT, iT = TT.firstChild;
      if (iT && (IT = iT.type.prop(zT.j.closedBy))) {
        let oT = TT.lastChild,
          iT = oT && IT.indexOf(oT.name) > -1;
        return TT => lT(TT, !0, 1, void 0, iT && ! function(TT) {
          return TT.pos == TT.options.simulateBreak && TT.options.simulateDoubleBreak
        }(TT) ? oT.from : void 0)
      }
      return null == TT.parent ? HT : null
    }

    function HT() {
      return 0
    }
    class nT extends aT {
      constructor(TT, oT, IT) {
        super(TT.state, TT.options), this.base = TT, this.pos = oT, this.context = IT
      }
      get node() {
        return this.context.node
      }
      static create(TT, oT, IT) {
        return new nT(TT, oT, IT)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(TT) {
        let oT = this.state.doc.lineAt(TT.from);
        for (;;) {
          let IT = TT.resolve(oT.from);
          for (; IT.parent && IT.parent.from == IT.from;) IT = IT.parent;
          if (qT(IT, TT)) break;
          oT = this.state.doc.lineAt(IT.from)
        }
        return this.lineIndent(oT.from)
      }
      continue () {
        return QT(this.context.next, this.base, this.pos)
      }
    }

    function qT(TT, oT) {
      for (let IT = oT; IT; IT = IT.parent)
        if (TT == IT) return !0;
      return !1
    }

    function ZT(TT) {
      let {
        closing: oT,
        align: IT = !0,
        units: iT = 1
      } = TT;
      return TT => lT(TT, IT, iT, oT)
    }

    function lT(TT, oT, IT, iT, zT) {
      let kT = TT.textAfter,
        WT = kT.match(/^\s*/)[0].length,
        XT = iT && kT.slice(WT, WT + iT.length) == iT || zT == TT.pos + WT,
        BT = oT ? function(TT) {
          let oT = TT.node,
            IT = oT.childAfter(oT.from),
            iT = oT.lastChild;
          if (!IT) return null;
          let zT = TT.options.simulateBreak,
            kT = TT.state.doc.lineAt(IT.from),
            WT = null == zT || zT <= kT.from ? kT.to : Math.min(kT.to, zT);
          for (let XT = IT.to;;) {
            let TT = oT.childAfter(XT);
            if (!TT || TT == iT) return null;
            if (!TT.type.isSkipped) {
              if (TT.from >= WT) return null;
              let oT = /^ */.exec(kT.text.slice(IT.to - kT.from))[0].length;
              return {
                from: IT.from,
                to: IT.to + oT
              }
            }
            XT = TT.to
          }
        }(TT) : null;
      return BT ? XT ? TT.column(BT.from) : TT.column(BT.to) : TT.baseIndent + (XT ? 0 : TT.unit * IT)
    }
    const sT = TT => TT.baseIndent;

    function tT() {
      let {
        except: TT,
        units: oT = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return IT => {
        let iT = TT && TT.test(IT.textAfter);
        return IT.baseIndent + (iT ? 0 : oT * IT.unit)
      }
    }
    const GT = 200;

    function pT() {
      return kT.o.transactionFilter.of((TT => {
        if (!TT.docChanged || !TT.isUserEvent("input.type") && !TT.isUserEvent("input.complete")) return TT;
        let oT = TT.startState.languageDataAt("indentOnInput", TT.startState.selection.main.head);
        if (!oT.length) return TT;
        let IT = TT.newDoc,
          {
            head: iT
          } = TT.newSelection.main,
          zT = IT.lineAt(iT);
        if (iT > zT.from + GT) return TT;
        let kT = IT.sliceString(zT.from, iT);
        if (!oT.some((TT => TT.test(kT)))) return TT;
        let {
          state: WT
        } = TT, XT = -1, BT = [];
        for (let {
            head: FT
          }
          of WT.selection.ec) {
          let TT = WT.doc.lineAt(FT);
          if (TT.from == XT) continue;
          XT = TT.from;
          let oT = UT(WT, TT.from);
          if (null == oT) continue;
          let IT = /^\s*/.exec(TT.text)[0],
            iT = JT(WT, oT);
          IT != iT && BT.push({
            from: TT.from,
            to: TT.from + IT.length,
            insert: iT
          })
        }
        return BT.length ? [TT, {
          changes: BT,
          sequential: !0
        }] : TT
      }))
    }
    const bT = kT.p.define(),
      yT = new zT.j;

    function NT(TT) {
      let oT = TT.firstChild,
        IT = TT.lastChild;
      return oT && oT.to < IT.from ? {
        from: oT.to,
        to: IT.type.isError ? TT.to : IT.from
      } : null
    }

    function PT(TT) {
      let oT = TT.lastChild;
      return oT && oT.to == TT.to && oT.type.isError
    }

    function dT(TT, oT, IT) {
      for (let iT of TT.facet(bT)) {
        let zT = iT(TT, oT, IT);
        if (zT) return zT
      }
      return function(TT, oT, IT) {
        let iT = KT(TT);
        if (iT.length < IT) return null;
        let zT = null;
        for (let kT = iT.resolveStack(IT, 1); kT; kT = kT.next) {
          let WT = kT.node;
          if (WT.to <= IT || WT.from > IT) continue;
          if (zT && WT.from < oT) break;
          let XT = WT.type.prop(yT);
          if (XT && (WT.to < iT.length - 50 || iT.length == TT.doc.length || !PT(WT))) {
            let iT = XT(WT, TT);
            iT && iT.from <= IT && iT.from >= oT && iT.to > IT && (zT = iT)
          }
        }
        return zT
      }(TT, oT, IT)
    }

    function VT(TT, oT) {
      let IT = oT.mapPos(TT.from, 1),
        iT = oT.mapPos(TT.to, -1);
      return IT >= iT ? void 0 : {
        from: IT,
        to: iT
      }
    }
    const To = kT.H.define({
        map: VT
      }),
      oo = kT.H.define({
        map: VT
      });

    function Io(TT) {
      let oT = [];
      for (let {
          head: IT
        }
        of TT.state.selection.ec) oT.some((TT => TT.from <= IT && TT.to >= IT)) || oT.push(TT.lineBlockAt(IT));
      return oT
    }
    const io = kT.K.define({
      create: () => WT.b.none,
      update(TT, oT) {
        oT.isUserEvent("delete") && oT.changes.iterChangedRanges(((oT, IT) => TT = zo(TT, oT, IT))), TT = TT.map(oT.changes);
        for (let IT of oT.effects)
          if (IT.is(To) && !Wo(TT, IT.value.from, IT.value.to)) {
            let {
              preparePlaceholder: iT
            } = oT.state.facet(Do), zT = iT ? WT.b.replace({
              widget: new Ko(iT(oT.state, IT.value))
            }) : co;
            TT = TT.update({
              add: [zT.range(IT.value.from, IT.value.to)]
            })
          } else IT.is(oo) && (TT = TT.update({
            filter: (TT, oT) => IT.value.from != TT || IT.value.to != oT,
            filterFrom: IT.value.from,
            filterTo: IT.value.to
          }));
        return oT.selection && (TT = zo(TT, oT.selection.main.head)), TT
      },
      provide: TT => WT.i.dz.from(TT),
      toJSON(TT, oT) {
        let IT = [];
        return TT.between(0, oT.doc.length, ((TT, oT) => {
          IT.push(TT, oT)
        })), IT
      },
      fromJSON(TT) {
        if (!Array.isArray(TT) || TT.length % 2) throw new RangeError("Invalid JSON for fold state");
        let oT = [];
        for (let IT = 0; IT < TT.length;) {
          let iT = TT[IT++],
            zT = TT[IT++];
          if ("number" != typeof iT || "number" != typeof zT) throw new RangeError("Invalid JSON for fold state");
          oT.push(co.range(iT, zT))
        }
        return WT.b.set(oT, !0)
      }
    });

    function zo(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oT,
        iT = !1;
      return TT.between(oT, IT, ((TT, zT) => {
        TT < IT && zT > oT && (iT = !0)
      })), iT ? TT.update({
        filterFrom: oT,
        filterTo: IT,
        filter: (TT, iT) => TT >= IT || iT <= oT
      }) : TT
    }

    function ko(TT, oT, IT) {
      var iT;
      let zT = null;
      return null === (iT = TT.field(io, !1)) || void 0 === iT || iT.between(oT, IT, ((TT, oT) => {
        (!zT || zT.from > TT) && (zT = {
          from: TT,
          to: oT
        })
      })), zT
    }

    function Wo(TT, oT, IT) {
      let iT = !1;
      return TT.between(oT, oT, ((TT, zT) => {
        TT == oT && zT == IT && (iT = !0)
      })), iT
    }

    function Xo(TT, oT) {
      return TT.field(io, !1) ? oT : oT.concat(kT.H.appendConfig.of(Lo()))
    }

    function Bo(TT, oT) {
      let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        iT = TT.state.doc.lineAt(oT.from).number,
        zT = TT.state.doc.lineAt(oT.to).number;
      return WT.i.announce.of(`${TT.state.phrase(IT?"Folded lines":"Unfolded lines")} ${iT} ${TT.state.phrase("to")} ${zT}.`)
    }
    const Fo = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: TT => {
          for (let oT of Io(TT)) {
            let IT = dT(TT.state, oT.from, oT.to);
            if (IT) return TT.dispatch({
              effects: Xo(TT.state, [To.of(IT), Bo(TT, IT)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: TT => {
          if (!TT.state.field(io, !1)) return !1;
          let oT = [];
          for (let IT of Io(TT)) {
            let iT = ko(TT.state, IT.from, IT.to);
            iT && oT.push(oo.of(iT), Bo(TT, iT, !1))
          }
          return oT.length && TT.dispatch({
            effects: oT
          }), oT.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: TT => {
          let {
            state: oT
          } = TT, IT = [];
          for (let iT = 0; iT < oT.doc.length;) {
            let zT = TT.lineBlockAt(iT),
              kT = dT(oT, zT.from, zT.to);
            kT && IT.push(To.of(kT)), iT = (kT ? TT.lineBlockAt(kT.to) : zT).to + 1
          }
          return IT.length && TT.dispatch({
            effects: Xo(TT.state, IT)
          }), !!IT.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: TT => {
          let oT = TT.state.field(io, !1);
          if (!oT || !oT.size) return !1;
          let IT = [];
          return oT.between(0, TT.state.doc.length, ((TT, oT) => {
            IT.push(oo.of({
              from: TT,
              to: oT
            }))
          })), TT.dispatch({
            effects: IT
          }), !0
        }
      }],
      So = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      Do = kT.p.define({
        combine: TT => (0, kT.V)(TT, So)
      });

    function Lo(TT) {
      let oT = [io, go];
      return TT && oT.push(Do.of(TT)), oT
    }

    function xo(TT, oT) {
      let {
        state: IT
      } = TT, iT = IT.facet(Do), zT = oT => {
        let IT = TT.lineBlockAt(TT.posAtDOM(oT.target)),
          iT = ko(TT.state, IT.from, IT.to);
        iT && TT.dispatch({
          effects: oo.of(iT)
        }), oT.preventDefault()
      };
      if (iT.placeholderDOM) return iT.placeholderDOM(TT, zT, oT);
      let kT = document.createElement("span");
      return kT.textContent = iT.placeholderText, kT.setAttribute("aria-label", IT.phrase("folded code")), kT.title = IT.phrase("unfold"), kT.className = "cm-foldPlaceholder", kT.onclick = zT, kT
    }
    const co = WT.b.replace({
      widget: new class extends WT.m {
        toDOM(TT) {
          return xo(TT, null)
        }
      }
    });
    class Ko extends WT.m {
      constructor(TT) {
        super(), this.value = TT
      }
      eq(TT) {
        return this.value == TT.value
      }
      toDOM(TT) {
        return xo(TT, this.value)
      }
    }
    const Mo = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class ro extends WT.j {
      constructor(TT, oT) {
        super(), this.config = TT, this.open = oT
      }
      eq(TT) {
        return this.config == TT.config && this.open == TT.open
      }
      toDOM(TT) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let oT = document.createElement("span");
        return oT.textContent = this.open ? this.config.openText : this.config.closedText, oT.title = TT.state.phrase(this.open ? "Fold line" : "Unfold line"), oT
      }
    }

    function Ao() {
      let TT = {
          ...Mo,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        oT = new ro(TT, !0),
        IT = new ro(TT, !1),
        iT = WT.l.fromClass(class {
          constructor(TT) {
            this.from = TT.viewport.from, this.markers = this.buildMarkers(TT)
          }
          update(oT) {
            (oT.docChanged || oT.viewportChanged || oT.startState.facet(vT) != oT.state.facet(vT) || oT.startState.field(io, !1) != oT.state.field(io, !1) || KT(oT.startState) != KT(oT.state) || TT.foldingChanged(oT)) && (this.markers = this.buildMarkers(oT.view))
          }
          buildMarkers(TT) {
            let iT = new kT.A;
            for (let zT of TT.viewportLineBlocks) {
              let kT = ko(TT.state, zT.from, zT.to) ? IT : dT(TT.state, zT.from, zT.to) ? oT : null;
              kT && iT.add(zT.from, zT.from, kT)
            }
            return iT.finish()
          }
        }),
        {
          domEventHandlers: zT
        } = TT;
      return [iT, (0, WT.D)({
        class: "cm-foldGutter",
        markers(TT) {
          var oT;
          return (null === (oT = TT.plugin(iT)) || void 0 === oT ? void 0 : oT.markers) || kT.D.empty
        },
        initialSpacer: () => new ro(TT, !1),
        domEventHandlers: {
          ...zT,
          click: (TT, oT, IT) => {
            if (zT.click && zT.click(TT, oT, IT)) return !0;
            let iT = ko(TT.state, oT.from, oT.to);
            if (iT) return TT.dispatch({
              effects: oo.of(iT)
            }), !0;
            let kT = dT(TT.state, oT.from, oT.to);
            return !!kT && (TT.dispatch({
              effects: To.of(kT)
            }), !0)
          }
        }
      }), Lo()]
    }
    const go = WT.i.baseTheme({
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
    class ho {
      constructor(TT, oT) {
        let IT;

        function iT(TT) {
          let oT = BT.b.newName();
          return (IT || (IT = Object.create(null)))["." + oT] = TT, oT
        }
        this.specs = TT;
        const zT = "string" == typeof oT.all ? oT.all : oT.all ? iT(oT.all) : void 0,
          kT = oT.scope;
        this.scope = kT instanceof LT ? TT => TT.prop(FT) == kT.data : kT ? TT => TT == kT : void 0, this.style = (0, XT.i)(TT.map((TT => ({
          tag: TT.tag,
          class: TT.class || iT(Object.assign({}, TT, {
            tag: null
          }))
        }))), {
          all: zT
        }).style, this.module = IT ? new BT.b(IT) : null, this.themeType = oT.themeType
      }
      static define(TT, oT) {
        return new ho(TT, oT || {})
      }
    }
    const wo = kT.p.define(),
      mo = kT.p.define({
        combine: TT => TT.length ? [TT[0]] : null
      });

    function eo(TT) {
      let oT = TT.facet(wo);
      return oT.length ? oT : TT.facet(mo)
    }

    function Ro(TT, oT) {
      let IT, iT = [vo];
      return TT instanceof ho && (TT.module && iT.push(WT.i.styleModule.of(TT.module)), IT = TT.themeType), (null === oT || void 0 === oT ? void 0 : oT.fallback) ? iT.push(mo.of(TT)) : IT ? iT.push(wo.computeN([WT.i.darkTheme], (oT => oT.facet(WT.i.darkTheme) == ("dark" == IT) ? [TT] : []))) : iT.push(wo.of(TT)), iT
    }
    class uo {
      constructor(TT) {
        this.markCache = Object.create(null), this.tree = KT(TT.state), this.dz = this.buildDeco(TT, eo(TT.state)), this.decoratedTo = TT.viewport.to
      }
      update(TT) {
        let oT = KT(TT.state),
          IT = eo(TT.state),
          iT = IT != eo(TT.startState),
          {
            viewport: zT
          } = TT.view,
          kT = TT.changes.mapPos(this.decoratedTo, 1);
        oT.length < zT.to && !iT && oT.type == this.tree.type && kT >= zT.to ? (this.dz = this.dz.map(TT.changes), this.decoratedTo = kT) : (oT != this.tree || TT.viewportChanged || iT) && (this.tree = oT, this.dz = this.buildDeco(TT.view, IT), this.decoratedTo = zT.to)
      }
      buildDeco(TT, oT) {
        if (!oT || !this.tree.length) return WT.b.none;
        let IT = new kT.A;
        for (let {
            from: iT,
            to: zT
          }
          of TT.o2)(0, XT.e)(this.tree, oT, ((TT, oT, iT) => {
          IT.add(TT, oT, this.markCache[iT] || (this.markCache[iT] = WT.b.mark({
            class: iT
          })))
        }), iT, zT);
        return IT.finish()
      }
    }
    const vo = kT.w.high(WT.l.fromClass(uo, {
        dz: TT => TT.dz
      })),
      Eo = ho.define([{
        tag: XT.m.meta,
        color: "#404740"
      }, {
        tag: XT.m.link,
        textDecoration: "underline"
      }, {
        tag: XT.m.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: XT.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: XT.m.strong,
        fontWeight: "bold"
      }, {
        tag: XT.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: XT.m.keyword,
        color: "#708"
      }, {
        tag: [XT.m.atom, XT.m.bool, XT.m.url, XT.m.contentSeparator, XT.m.labelName],
        color: "#219"
      }, {
        tag: [XT.m.literal, XT.m.inserted],
        color: "#164"
      }, {
        tag: [XT.m.string, XT.m.deleted],
        color: "#a11"
      }, {
        tag: [XT.m.regexp, XT.m.escape, XT.m.special(XT.m.string)],
        color: "#e40"
      }, {
        tag: XT.m.definition(XT.m.variableName),
        color: "#00f"
      }, {
        tag: XT.m.local(XT.m.variableName),
        color: "#30a"
      }, {
        tag: [XT.m.typeName, XT.m.namespace],
        color: "#085"
      }, {
        tag: XT.m.className,
        color: "#167"
      }, {
        tag: [XT.m.special(XT.m.variableName), XT.m.macroName],
        color: "#256"
      }, {
        tag: XT.m.definition(XT.m.propertyName),
        color: "#00c"
      }, {
        tag: XT.m.comment,
        color: "#940"
      }, {
        tag: XT.m.invalid,
        color: "#f00"
      }]),
      fo = WT.i.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      Co = 1e4,
      jo = "()[]{}",
      Jo = kT.p.define({
        combine: TT => (0, kT.V)(TT, {
          afterCursor: !0,
          brackets: jo,
          maxScanDistance: Co,
          renderMatch: Yo
        })
      }),
      Uo = WT.b.mark({
        class: "cm-matchingBracket"
      }),
      ao = WT.b.mark({
        class: "cm-nonmatchingBracket"
      });

    function Yo(TT) {
      let oT = [],
        IT = TT.matched ? Uo : ao;
      return oT.push(IT.range(TT.start.from, TT.start.to)), TT.end && oT.push(IT.range(TT.end.from, TT.end.to)), oT
    }

    function Qo(TT) {
      let oT = [],
        IT = TT.facet(Jo);
      for (let iT of TT.selection.ec) {
        if (!iT.empty) continue;
        let zT = so(TT, iT.head, -1, IT) || iT.head > 0 && so(TT, iT.head - 1, 1, IT) || IT.afterCursor && (so(TT, iT.head, 1, IT) || iT.head < TT.doc.length && so(TT, iT.head + 1, -1, IT));
        zT && (oT = oT.concat(IT.renderMatch(zT, TT)))
      }
      return WT.b.set(oT, !0)
    }
    const Oo = [WT.l.fromClass(class {
      constructor(TT) {
        this.paused = !1, this.dz = Qo(TT.state)
      }
      update(TT) {
        (TT.docChanged || TT.selectionSet || this.paused) && (TT.view.composing ? (this.dz = this.dz.map(TT.changes), this.paused = !0) : (this.dz = Qo(TT.state), this.paused = !1))
      }
    }, {
      dz: TT => TT.dz
    }), fo];

    function Ho() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Jo.of(TT), Oo]
    }
    const no = new zT.j;

    function qo(TT, oT, IT) {
      let iT = TT.prop(oT < 0 ? zT.j.openedBy : zT.j.closedBy);
      if (iT) return iT;
      if (1 == TT.name.length) {
        let iT = IT.indexOf(TT.name);
        if (iT > -1 && iT % 2 == (oT < 0 ? 1 : 0)) return [IT[iT + oT]]
      }
      return null
    }

    function Zo(TT) {
      let oT = TT.type.prop(no);
      return oT ? oT(TT.node) : TT
    }

    function so(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        zT = iT.maxScanDistance || Co,
        kT = iT.brackets || jo,
        WT = KT(TT),
        XT = WT.resolveInner(oT, IT);
      for (let BT = XT; BT; BT = BT.parent) {
        let iT = qo(BT.type, IT, kT);
        if (iT && BT.from < BT.to) {
          let zT = Zo(BT);
          if (zT && (IT > 0 ? oT >= zT.from && oT < zT.to : oT > zT.from && oT <= zT.to)) return to(TT, oT, IT, BT, zT, iT, kT)
        }
      }
      return function(TT, oT, IT, iT, zT, kT, WT) {
        if (IT < 0 ? !oT : oT == TT.doc.length) return null;
        let XT = IT < 0 ? TT.sliceDoc(oT - 1, oT) : TT.sliceDoc(oT, oT + 1),
          BT = WT.indexOf(XT);
        if (BT < 0 || BT % 2 == 0 != IT > 0) return null;
        let FT = {
            from: IT < 0 ? oT - 1 : oT,
            to: IT > 0 ? oT + 1 : oT
          },
          ST = TT.doc.iterRange(oT, IT > 0 ? TT.doc.length : 0),
          DT = 0;
        for (let LT = 0; !ST.next().done && LT <= kT;) {
          let TT = ST.value;
          IT < 0 && (LT += TT.length);
          let kT = oT + LT * IT;
          for (let oT = IT > 0 ? 0 : TT.length - 1, XT = IT > 0 ? TT.length : -1; oT != XT; oT += IT) {
            let XT = WT.indexOf(TT[oT]);
            if (!(XT < 0 || iT.resolveInner(kT + oT, 1).type != zT))
              if (XT % 2 == 0 == IT > 0) DT++;
              else {
                if (1 == DT) return {
                  start: FT,
                  end: {
                    from: kT + oT,
                    to: kT + oT + 1
                  },
                  matched: XT >> 1 == BT >> 1
                };
                DT--
              }
          }
          IT > 0 && (LT += TT.length)
        }
        return ST.done ? {
          start: FT,
          matched: !1
        } : null
      }(TT, oT, IT, WT, XT.type, zT, kT)
    }

    function to(TT, oT, IT, iT, zT, kT, WT) {
      let XT = iT.parent,
        BT = {
          from: zT.from,
          to: zT.to
        },
        FT = 0,
        ST = null === XT || void 0 === XT ? void 0 : XT.cursor();
      if (ST && (IT < 0 ? ST.childBefore(iT.from) : ST.childAfter(iT.to)))
        do {
          if (IT < 0 ? ST.to <= iT.from : ST.from >= iT.to) {
            if (0 == FT && kT.indexOf(ST.type.name) > -1 && ST.from < ST.to) {
              let TT = Zo(ST);
              return {
                start: BT,
                end: TT ? {
                  from: TT.from,
                  to: TT.to
                } : void 0,
                matched: !0
              }
            }
            if (qo(ST.type, IT, WT)) FT++;
            else if (qo(ST.type, -IT, WT)) {
              if (0 == FT) {
                let TT = Zo(ST);
                return {
                  start: BT,
                  end: TT && TT.from < TT.to ? {
                    from: TT.from,
                    to: TT.to
                  } : void 0,
                  matched: !1
                }
              }
              FT--
            }
          }
        } while (IT < 0 ? ST.prevSibling() : ST.nextSibling());
      return {
        start: BT,
        matched: !1
      }
    }
    const Go = Object.create(null),
      po = [zT.n.none],
      bo = [],
      yo = Object.create(null),
      No = Object.create(null);
    for (let [TI, oI] of [
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
      ]) No[TI] = Vo(Go, oI);

    function Po(TT, oT) {
      bo.indexOf(TT) > -1 || (bo.push(TT), console.warn(oT))
    }

    function Vo(TT, oT) {
      let IT = [];
      for (let zT of oT.split(" ")) {
        let oT = [];
        for (let IT of zT.split(".")) {
          let iT = TT[IT] || XT.m[IT];
          iT ? "function" == typeof iT ? oT.length ? oT = oT.map(iT) : Po(IT, `Modifier ${IT} used at start of tag`) : oT.length ? Po(IT, `Tag ${IT} used as modifier`) : oT = Array.isArray(iT) ? iT : [iT] : Po(IT, `Unknown highlighting tag ${IT}`)
        }
        for (let TT of oT) IT.push(TT)
      }
      if (!IT.length) return 0;
      let iT = oT.replace(/ /g, "_"),
        kT = iT + " " + IT.map((TT => TT.id)),
        WT = yo[kT];
      if (WT) return WT.id;
      let BT = yo[kT] = zT.n.define({
        id: po.length,
        name: iT,
        props: [(0, XT.h)({
          [iT]: IT
        })]
      });
      return po.push(BT), BT.id
    }
    WT.f.RTL, WT.f.LTR
  },
  40176: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => gT,
      d: () => eT
    });
    var iT = IT(40115),
      zT = IT(40110),
      kT = IT(40128);
    class WT {
      constructor(TT, oT, IT) {
        this.from = TT, this.to = oT, this.diagnostic = IT
      }
    }
    class XT {
      constructor(TT, oT, IT) {
        this.diagnostics = TT, this.panel = oT, this.selected = IT
      }
      static init(TT, oT, IT) {
        let kT = IT.facet(wT).markerFilter;
        kT && (TT = kT(TT, IT));
        let WT = TT.slice().sort(((TT, oT) => TT.from - oT.from || TT.to - oT.to)),
          FT = new zT.A,
          ST = [],
          DT = 0,
          LT = IT.doc.iter(),
          xT = 0,
          cT = IT.doc.length;
        for (let zT = 0;;) {
          let TT, oT, IT = zT == WT.length ? null : WT[zT];
          if (!IT && !ST.length) break;
          if (ST.length) TT = DT, oT = ST.reduce(((TT, oT) => Math.min(TT, oT.to)), IT && IT.from > TT ? IT.from : 1e8);
          else {
            if (TT = IT.from, TT > cT) break;
            oT = IT.to, ST.push(IT), zT++
          }
          for (; zT < WT.length;) {
            let IT = WT[zT];
            if (IT.from != TT || !(IT.to > IT.from || IT.to == TT)) {
              oT = Math.min(IT.from, oT);
              break
            }
            ST.push(IT), zT++, oT = Math.min(IT.to, oT)
          }
          oT = Math.min(oT, cT);
          let kT = !1;
          if (ST.some((IT => IT.from == TT && (IT.to == oT || oT == cT))) && (kT = TT == oT, !kT && oT - TT < 10)) {
            let IT = TT - (xT + LT.value.length);
            IT > 0 && (LT.next(IT), xT = TT);
            for (let iT = TT;;) {
              if (iT >= oT) {
                kT = !0;
                break
              }
              if (!LT.lineBreak && xT + LT.value.length > iT) break;
              iT = xT + LT.value.length, xT += LT.value.length, LT.next()
            }
          }
          let XT = aT(ST);
          if (kT) FT.add(TT, TT, iT.b.widget({
            widget: new vT(XT),
            diagnostics: ST.slice()
          }));
          else {
            let IT = ST.reduce(((TT, oT) => oT.markClass ? TT + " " + oT.markClass : TT), "");
            FT.add(TT, oT, iT.b.mark({
              class: "cm-lintRange cm-lintRange-" + XT + IT,
              diagnostics: ST.slice(),
              inclusiveEnd: ST.some((TT => TT.to > oT))
            }))
          }
          if (DT = oT, DT == cT) break;
          for (let iT = 0; iT < ST.length; iT++) ST[iT].to <= DT && ST.splice(iT--, 1)
        }
        let KT = FT.finish();
        return new XT(KT, oT, BT(KT))
      }
    }

    function BT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        iT = null;
      return TT.between(IT, 1e9, ((TT, IT, zT) => {
        let {
          spec: kT
        } = zT;
        if (!(oT && kT.diagnostics.indexOf(oT) < 0))
          if (iT) {
            if (kT.diagnostics.indexOf(iT.diagnostic) < 0) return !1;
            iT = new WT(iT.from, IT, iT.diagnostic)
          } else iT = new WT(TT, IT, oT || kT.diagnostics[0])
      })), iT
    }

    function FT(TT, oT) {
      let IT = oT.pos,
        iT = oT.end || IT,
        zT = TT.state.facet(wT).hideOn(TT, IT, iT);
      if (null != zT) return zT;
      let kT = TT.startState.doc.lineAt(oT.pos);
      return !(!TT.effects.some((TT => TT.is(DT))) && !TT.changes.touchesRange(kT.from, Math.max(kT.to, iT)))
    }

    function ST(TT, oT) {
      return TT.field(cT, !1) ? oT : oT.concat(zT.H.appendConfig.of(YT))
    }
    const DT = zT.H.define(),
      LT = zT.H.define(),
      xT = zT.H.define(),
      cT = zT.K.define({
        create: () => new XT(iT.b.none, null, null),
        update(TT, oT) {
          if (oT.docChanged && TT.diagnostics.size) {
            let IT = TT.diagnostics.map(oT.changes),
              iT = null,
              zT = TT.panel;
            if (TT.selected) {
              let zT = oT.changes.mapPos(TT.selected.from, 1);
              iT = BT(IT, TT.selected.diagnostic, zT) || BT(IT, null, zT)
            }!IT.size && zT && oT.state.facet(wT).autoPanel && (zT = null), TT = new XT(IT, zT, iT)
          }
          for (let IT of oT.effects)
            if (IT.is(DT)) {
              let iT = oT.state.facet(wT).autoPanel ? IT.value.length ? fT.open : null : TT.panel;
              TT = XT.init(IT.value, iT, oT.state)
            } else IT.is(LT) ? TT = new XT(TT.diagnostics, IT.value ? fT.open : null, TT.selected) : IT.is(xT) && (TT = new XT(TT.diagnostics, TT.panel, IT.value));
          return TT
        },
        provide: TT => [iT.gb.from(TT, (TT => TT.panel)), iT.i.dz.from(TT, (TT => TT.diagnostics))]
      });
    const KT = iT.b.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function MT(TT, oT, IT) {
      let iT, {
          diagnostics: zT
        } = TT.state.field(cT),
        kT = -1,
        WT = -1;
      zT.between(oT - (IT < 0 ? 1 : 0), oT + (IT > 0 ? 1 : 0), ((TT, zT, XT) => {
        let {
          spec: BT
        } = XT;
        if (oT >= TT && oT <= zT && (TT == zT || (oT > TT || IT > 0) && (oT < zT || IT < 0))) return iT = BT.diagnostics, kT = TT, WT = zT, !1
      }));
      let XT = TT.state.facet(wT).tooltipFilter;
      return iT && XT && (iT = XT(iT, TT.state)), iT ? {
        pos: kT,
        end: WT,
        above: TT.state.doc.lineAt(kT).to < WT,
        create: () => ({
          dom: rT(TT, iT)
        })
      } : null
    }

    function rT(TT, oT) {
      return (0, kT.d)("ul", {
        class: "cm-tooltip-lint"
      }, oT.map((oT => uT(TT, oT, !1))))
    }
    const AT = TT => {
        let oT = TT.state.field(cT, !1);
        return !(!oT || !oT.panel) && (TT.dispatch({
          effects: LT.of(!1)
        }), !0)
      },
      gT = [{
        key: "Mod-Shift-m",
        run: TT => {
          let oT = TT.state.field(cT, !1);
          oT && oT.panel || TT.dispatch({
            effects: ST(TT.state, [LT.of(!0)])
          });
          let IT = (0, iT.v)(TT, fT.open);
          return IT && IT.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: TT => {
          let oT = TT.state.field(cT, !1);
          if (!oT) return !1;
          let IT = TT.state.selection.main,
            iT = BT(oT.diagnostics, null, IT.to + 1);
          return !(!iT && (iT = BT(oT.diagnostics, null, 0), !iT || iT.from == IT.from && iT.to == IT.to)) && (TT.dispatch({
            selection: {
              anchor: iT.from,
              head: iT.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      hT = iT.l.fromClass(class {
        constructor(TT) {
          this.view = TT, this.timeout = -1, this.set = !0;
          let {
            delay: oT
          } = TT.state.facet(wT);
          this.lintTime = Date.now() + oT, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, oT)
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
              sources: oT
            } = TT.facet(wT);
            oT.length && function(TT, oT, IT) {
              let iT = [],
                zT = -1;
              for (let kT of TT) kT.then((IT => {
                iT.push(IT), clearTimeout(zT), iT.length == TT.length ? oT(iT) : zT = setTimeout((() => oT(iT)), 200)
              }), IT)
            }(oT.map((TT => Promise.resolve(TT(this.view)))), (oT => {
              this.view.state.doc == TT.doc && this.view.dispatch(function(TT, oT) {
                return {
                  effects: ST(TT, [DT.of(oT)])
                }
              }(this.view.state, oT.reduce(((TT, oT) => TT.concat(oT)))))
            }), (TT => {
              (0, iT.U)(this.view.state, TT)
            }))
          }
        }
        update(TT) {
          let oT = TT.state.facet(wT);
          (TT.docChanged || oT != TT.startState.facet(wT) || oT.needsRefresh && oT.needsRefresh(TT)) && (this.lintTime = Date.now() + oT.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, oT.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const wT = zT.p.define({
      combine: TT => ({
        sources: TT.map((TT => TT.source)).filter((TT => null != TT)),
        ...(0, zT.V)(TT.map((TT => TT.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: mT,
          tooltipFilter: mT,
          needsRefresh: (TT, oT) => TT ? oT ? IT => TT(IT) || oT(IT) : TT : oT,
          hideOn: (TT, oT) => TT ? oT ? (IT, iT, zT) => TT(IT, iT, zT) || oT(IT, iT, zT) : TT : oT,
          autoPanel: (TT, oT) => TT || oT
        })
      })
    });

    function mT(TT, oT) {
      return TT ? oT ? (IT, iT) => oT(TT(IT, iT), iT) : TT : oT
    }

    function eT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [wT.of({
        source: TT,
        config: oT
      }), hT, YT]
    }

    function RT(TT) {
      let oT = [];
      if (TT) TT: for (let {
          name: IT
        }
        of TT) {
        for (let TT = 0; TT < IT.length; TT++) {
          let iT = IT[TT];
          if (/[a-zA-Z]/.test(iT) && !oT.some((TT => TT.toLowerCase() == iT.toLowerCase()))) {
            oT.push(iT);
            continue TT
          }
        }
        oT.push("")
      }
      return oT
    }

    function uT(TT, oT, IT) {
      var iT;
      let zT = IT ? RT(oT.actions) : [];
      return (0, kT.d)("li", {
        class: "cm-diagnostic cm-diagnostic-" + oT.severity
      }, (0, kT.d)("span", {
        class: "cm-diagnosticText"
      }, oT.renderMessage ? oT.renderMessage(TT) : oT.message), null === (iT = oT.actions) || void 0 === iT ? void 0 : iT.map(((IT, iT) => {
        let WT = !1,
          XT = iT => {
            if (iT.preventDefault(), WT) return;
            WT = !0;
            let zT = BT(TT.state.field(cT).diagnostics, oT);
            zT && IT.apply(TT, zT.from, zT.to)
          },
          {
            name: FT
          } = IT,
          ST = zT[iT] ? FT.indexOf(zT[iT]) : -1,
          DT = ST < 0 ? FT : [FT.slice(0, ST), (0, kT.d)("u", FT.slice(ST, ST + 1)), FT.slice(ST + 1)],
          LT = IT.markClass ? " " + IT.markClass : "";
        return (0, kT.d)("button", {
          type: "button",
          class: "cm-diagnosticAction" + LT,
          onclick: XT,
          onmousedown: XT,
          "aria-label": ` Action: ${FT}${ST<0?"":` (access key "${zT[iT]})"`}.`
        }, DT)
      })), oT.source && (0, kT.d)("div", {
        class: "cm-diagnosticSource"
      }, oT.source))
    }
    class vT extends iT.m {
      constructor(TT) {
        super(), this.sev = TT
      }
      eq(TT) {
        return TT.sev == this.sev
      }
      toDOM() {
        return (0, kT.d)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class ET {
      constructor(TT, oT) {
        this.diagnostic = oT, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = uT(TT, oT, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class fT {
      constructor(TT) {
        this.view = TT, this.items = [];
        this.list = (0, kT.d)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: oT => {
            if (!(oT.ctrlKey || oT.altKey || oT.metaKey)) {
              if (27 == oT.keyCode) AT(this.view), this.view.focus();
              else if (38 == oT.keyCode || 33 == oT.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == oT.keyCode || 34 == oT.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == oT.keyCode) this.moveSelection(0);
              else if (35 == oT.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == oT.keyCode) this.view.focus();
              else {
                if (!(oT.keyCode >= 65 && oT.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: IT
                  } = this.items[this.selectedIndex], iT = RT(IT.actions);
                  for (let zT = 0; zT < iT.length; zT++)
                    if (iT[zT].toUpperCase().charCodeAt(0) == oT.keyCode) {
                      let oT = BT(this.view.state.field(cT).diagnostics, IT);
                      oT && IT.actions[zT].apply(TT, oT.from, oT.to)
                    }
                }
              }
              oT.preventDefault()
            }
          },
          onclick: TT => {
            for (let oT = 0; oT < this.items.length; oT++) this.items[oT].dom.contains(TT.target) && this.moveSelection(oT)
          }
        }), this.dom = (0, kT.d)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, kT.d)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => AT(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let TT = this.view.state.field(cT).selected;
        if (!TT) return -1;
        for (let oT = 0; oT < this.items.length; oT++)
          if (this.items[oT].diagnostic == TT.diagnostic) return oT;
        return -1
      }
      update() {
        let {
          diagnostics: TT,
          selected: oT
        } = this.view.state.field(cT), IT = 0, iT = !1, zT = null, kT = new Set;
        for (TT.between(0, this.view.state.doc.length, ((TT, WT, XT) => {
            let {
              spec: BT
            } = XT;
            for (let FT of BT.diagnostics) {
              if (kT.has(FT)) continue;
              kT.add(FT);
              let TT, WT = -1;
              for (let oT = IT; oT < this.items.length; oT++)
                if (this.items[oT].diagnostic == FT) {
                  WT = oT;
                  break
                } WT < 0 ? (TT = new ET(this.view, FT), this.items.splice(IT, 0, TT), iT = !0) : (TT = this.items[WT], WT > IT && (this.items.splice(IT, WT - IT), iT = !0)), oT && TT.diagnostic == oT.diagnostic ? TT.dom.hasAttribute("aria-selected") || (TT.dom.setAttribute("aria-selected", "true"), zT = TT) : TT.dom.hasAttribute("aria-selected") && TT.dom.removeAttribute("aria-selected"), IT++
            }
          })); IT < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) iT = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new ET(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), iT = !0), zT ? (this.list.setAttribute("aria-activedescendant", zT.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: zT.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: TT => {
            let {
              sel: oT,
              panel: IT
            } = TT, iT = IT.height / this.list.offsetHeight;
            oT.top < IT.top ? this.list.scrollTop -= (IT.top - oT.top) / iT : oT.bottom > IT.bottom && (this.list.scrollTop += (oT.bottom - IT.bottom) / iT)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), iT && this.sync()
      }
      sync() {
        let TT = this.list.firstChild;

        function oT() {
          let oT = TT;
          TT = oT.nextSibling, oT.remove()
        }
        for (let IT of this.items)
          if (IT.dom.parentNode == this.list) {
            for (; TT != IT.dom;) oT();
            TT = IT.dom.nextSibling
          } else this.list.insertBefore(IT.dom, TT);
        for (; TT;) oT()
      }
      moveSelection(TT) {
        if (this.selectedIndex < 0) return;
        let oT = BT(this.view.state.field(cT).diagnostics, this.items[TT].diagnostic);
        oT && this.view.dispatch({
          selection: {
            anchor: oT.from,
            head: oT.to
          },
          scrollIntoView: !0,
          effects: xT.of(oT)
        })
      }
      static open(TT) {
        return new fT(TT)
      }
    }

    function CT(TT) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(TT)}</svg>')`
    }

    function jT(TT) {
      return CT(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${TT}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const JT = iT.i.baseTheme({
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
        backgroundImage: jT("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: jT("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: jT("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: jT("#66d")
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

    function UT(TT) {
      return "error" == TT ? 4 : "warning" == TT ? 3 : "info" == TT ? 2 : 1
    }

    function aT(TT) {
      let oT = "hint",
        IT = 1;
      for (let iT of TT) {
        let TT = UT(iT.severity);
        TT > IT && (IT = TT, oT = iT.severity)
      }
      return oT
    }
    iT.j;
    const YT = [cT, iT.i.dz.compute([cT], (TT => {
      let {
        selected: oT,
        panel: IT
      } = TT.field(cT);
      return oT && IT && oT.from != oT.to ? iT.b.set([KT.range(oT.from, oT.to)]) : iT.b.none
    })), (0, iT.L)(MT, {
      hideOn: FT
    }), JT]
  },
  40171: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => dT,
      d: () => rT,
      h: () => VT
    });
    var iT = IT(40115),
      zT = IT(40110),
      kT = IT(40128);
    const WT = "function" == typeof String.prototype.normalize ? TT => TT.normalize("NFKD") : TT => TT;
    class XT {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          kT = arguments.length > 5 ? arguments[5] : void 0;
        this.test = kT, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = TT.iterRange(IT, iT), this.bufferStart = IT, this.normalize = zT ? TT => zT(WT(TT)) : WT, this.query = this.normalize(oT)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, zT.S)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let TT = this.peek();
          if (TT < 0) return this.done = !0, this;
          let oT = (0, zT.eb)(TT),
            IT = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, zT.T)(TT);
          let iT = this.normalize(oT);
          if (iT.length)
            for (let zT = 0, kT = IT;; zT++) {
              let TT = iT.charCodeAt(zT),
                WT = this.match(TT, kT, this.bufferPos + this.bufferStart);
              if (zT == iT.length - 1) {
                if (WT) return this.value = WT, this;
                break
              }
              kT == IT && zT < oT.length && oT.charCodeAt(zT) == TT && kT++
            }
        }
      }
      match(TT, oT, IT) {
        let iT = null;
        for (let zT = 0; zT < this.matches.length; zT += 2) {
          let oT = this.matches[zT],
            kT = !1;
          this.query.charCodeAt(oT) == TT && (oT == this.query.length - 1 ? iT = {
            from: this.matches[zT + 1],
            to: IT
          } : (this.matches[zT]++, kT = !0)), kT || (this.matches.splice(zT, 2), zT -= 2)
        }
        return this.query.charCodeAt(0) == TT && (1 == this.query.length ? iT = {
          from: oT,
          to: IT
        } : this.matches.push(1, oT)), iT && this.test && !this.test(iT.from, iT.to, this.buffer, this.bufferStart) && (iT = null), iT
      }
    }
    "undefined" != typeof Symbol && (XT.prototype[Symbol.iterator] = function() {
      return this
    });
    const BT = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      FT = "gm" + (null == /x/.unicode ? "" : "u");
    class ST {
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : TT.length;
        if (this.text = TT, this.to = zT, this.curLine = "", this.done = !1, this.value = BT, /\\[sWDnr]|\n|\r|\[\^/.test(oT)) return new xT(TT, oT, IT, iT, zT);
        this.re = new RegExp(oT, FT + ((null === IT || void 0 === IT ? void 0 : IT.ignoreCase) ? "i" : "")), this.test = null === IT || void 0 === IT ? void 0 : IT.test, this.iter = TT.iter();
        let kT = TT.lineAt(iT);
        this.curLineStart = kT.from, this.matchPos = cT(TT, iT), this.getLine(this.curLineStart)
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
          let oT = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (oT) {
            let IT = this.curLineStart + oT.index,
              iT = IT + oT[0].length;
            if (this.matchPos = cT(this.text, iT + (IT == iT ? 1 : 0)), IT == this.curLineStart + this.curLine.length && this.nextLine(), (IT < iT || IT > this.value.to) && (!this.test || this.test(IT, iT, oT))) return this.value = {
              from: IT,
              to: iT,
              match: oT
            }, this;
            TT = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), TT = 0
          }
        }
      }
    }
    const DT = new WeakMap;
    class LT {
      constructor(TT, oT) {
        this.from = TT, this.text = oT
      }
      get to() {
        return this.from + this.text.length
      }
      static get(TT, oT, IT) {
        let iT = DT.get(TT);
        if (!iT || iT.from >= IT || iT.to <= oT) {
          let iT = new LT(oT, TT.sliceString(oT, IT));
          return DT.set(TT, iT), iT
        }
        if (iT.from == oT && iT.to == IT) return iT;
        let {
          text: zT,
          from: kT
        } = iT;
        return kT > oT && (zT = TT.sliceString(oT, kT) + zT, kT = oT), iT.to < IT && (zT += TT.sliceString(iT.to, IT)), DT.set(TT, new LT(kT, zT)), new LT(oT, zT.slice(oT - kT, IT - kT))
      }
    }
    class xT {
      constructor(TT, oT, IT, iT, zT) {
        this.text = TT, this.to = zT, this.done = !1, this.value = BT, this.matchPos = cT(TT, iT), this.re = new RegExp(oT, FT + ((null === IT || void 0 === IT ? void 0 : IT.ignoreCase) ? "i" : "")), this.test = null === IT || void 0 === IT ? void 0 : IT.test, this.flat = LT.get(TT, iT, this.chunkEnd(iT + 5e3))
      }
      chunkEnd(TT) {
        return TT >= this.to ? this.to : this.text.lineAt(TT).to
      }
      next() {
        for (;;) {
          let TT = this.re.lastIndex = this.matchPos - this.flat.from,
            oT = this.re.exec(this.flat.text);
          if (oT && !oT[0] && oT.index == TT && (this.re.lastIndex = TT + 1, oT = this.re.exec(this.flat.text)), oT) {
            let TT = this.flat.from + oT.index,
              IT = TT + oT[0].length;
            if ((this.flat.to >= this.to || oT.index + oT[0].length <= this.flat.text.length - 10) && (!this.test || this.test(TT, IT, oT))) return this.value = {
              from: TT,
              to: IT,
              match: oT
            }, this.matchPos = cT(this.text, IT + (TT == IT ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = LT.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function cT(TT, oT) {
      if (oT >= TT.length) return oT;
      let IT, iT = TT.lineAt(oT);
      for (; oT < iT.to && (IT = iT.text.charCodeAt(oT - iT.from)) >= 56320 && IT < 57344;) oT++;
      return oT
    }
    "undefined" != typeof Symbol && (ST.prototype[Symbol.iterator] = xT.prototype[Symbol.iterator] = function() {
      return this
    });
    const KT = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      MT = zT.p.define({
        combine: TT => (0, zT.V)(TT, KT, {
          highlightWordAroundCursor: (TT, oT) => TT || oT,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function rT(TT) {
      let oT = [mT, wT];
      return TT && oT.push(MT.of(TT)), oT
    }
    const AT = iT.b.mark({
        class: "cm-selectionMatch"
      }),
      gT = iT.b.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function hT(TT, oT, IT, iT) {
      return (0 == IT || TT(oT.sliceDoc(IT - 1, IT)) != zT.g.Word) && (iT == oT.doc.length || TT(oT.sliceDoc(iT, iT + 1)) != zT.g.Word)
    }
    const wT = iT.l.fromClass(class {
        constructor(TT) {
          this.dz = this.getDeco(TT)
        }
        update(TT) {
          (TT.selectionSet || TT.docChanged || TT.viewportChanged) && (this.dz = this.getDeco(TT.view))
        }
        getDeco(TT) {
          let oT = TT.state.facet(MT),
            {
              state: IT
            } = TT,
            kT = IT.selection;
          if (kT.ec.length > 1) return iT.b.none;
          let WT, BT = kT.main,
            FT = null;
          if (BT.empty) {
            if (!oT.highlightWordAroundCursor) return iT.b.none;
            let TT = IT.wordAt(BT.head);
            if (!TT) return iT.b.none;
            FT = IT.charCategorizer(BT.head), WT = IT.sliceDoc(TT.from, TT.to)
          } else {
            let TT = BT.to - BT.from;
            if (TT < oT.minSelectionLength || TT > 200) return iT.b.none;
            if (oT.wholeWords) {
              if (WT = IT.sliceDoc(BT.from, BT.to), FT = IT.charCategorizer(BT.head), !hT(FT, IT, BT.from, BT.to) || ! function(TT, oT, IT, iT) {
                  return TT(oT.sliceDoc(IT, IT + 1)) == zT.g.Word && TT(oT.sliceDoc(iT - 1, iT)) == zT.g.Word
                }(FT, IT, BT.from, BT.to)) return iT.b.none
            } else if (WT = IT.sliceDoc(BT.from, BT.to), !WT) return iT.b.none
          }
          let ST = [];
          for (let zT of TT.o2) {
            let TT = new XT(IT.doc, WT, zT.from, zT.to);
            for (; !TT.next().done;) {
              let {
                from: zT,
                to: kT
              } = TT.value;
              if ((!FT || hT(FT, IT, zT, kT)) && (BT.empty && zT <= BT.from && kT >= BT.to ? ST.push(gT.range(zT, kT)) : (zT >= BT.to || kT <= BT.from) && ST.push(AT.range(zT, kT)), ST.length > oT.maxMatches)) return iT.b.none
            }
          }
          return iT.b.set(ST)
        }
      }, {
        dz: TT => TT.dz
      }),
      mT = iT.i.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const eT = zT.p.define({
      combine: TT => (0, zT.V)(TT, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: TT => new To(TT),
        scrollToMatch: TT => iT.i.scrollIntoView(TT)
      })
    });
    class RT {
      constructor(TT) {
        this.search = TT.search, this.caseSensitive = !!TT.caseSensitive, this.literal = !!TT.literal, this.regexp = !!TT.regexp, this.replace = TT.replace || "", this.valid = !!this.search && (!this.regexp || function(TT) {
          try {
            return new RegExp(TT, FT), !0
          } catch (oT) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!TT.wholeWord, this.test = TT.test
      }
      unquote(TT) {
        return this.literal ? TT : TT.replace(/\\([nrt\\])/g, ((TT, oT) => "n" == oT ? "\n" : "r" == oT ? "\r" : "t" == oT ? "\t" : "\\"))
      }
      eq(TT) {
        return this.search == TT.search && this.replace == TT.replace && this.caseSensitive == TT.caseSensitive && this.regexp == TT.regexp && this.wholeWord == TT.wholeWord && this.test == TT.test
      }
      create() {
        return this.regexp ? new JT(this) : new ET(this)
      }
      getCursor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = TT.doc ? TT : zT.o.create({
            doc: TT
          });
        return null == IT && (IT = iT.doc.length), this.regexp ? fT(this, iT, oT, IT) : vT(this, iT, oT, IT)
      }
    }
    class uT {
      constructor(TT) {
        this.spec = TT
      }
    }

    function vT(TT, oT, IT, iT) {
      let kT;
      var WT, BT;
      return TT.wholeWord && (WT = oT.doc, BT = oT.charCategorizer(oT.selection.main.head), kT = (TT, oT, IT, iT) => ((iT > TT || iT + IT.length < oT) && (iT = Math.max(0, TT - 2), IT = WT.sliceString(iT, Math.min(WT.length, oT + 2))), (BT(CT(IT, TT - iT)) != zT.g.Word || BT(jT(IT, TT - iT)) != zT.g.Word) && (BT(jT(IT, oT - iT)) != zT.g.Word || BT(CT(IT, oT - iT)) != zT.g.Word))), TT.test && (kT = function(TT, oT, IT) {
        return (iT, zT, kT, WT) => {
          if (IT && !IT(iT, zT, kT, WT)) return !1;
          let XT = iT >= WT && zT <= WT + kT.length ? kT.slice(iT - WT, zT - WT) : oT.doc.sliceString(iT, zT);
          return TT(XT, oT, iT, zT)
        }
      }(TT.test, oT, kT)), new XT(oT.doc, TT.unquoted, IT, iT, TT.caseSensitive ? void 0 : TT => TT.toLowerCase(), kT)
    }
    class ET extends uT {
      constructor(TT) {
        super(TT)
      }
      nextMatch(TT, oT, IT) {
        let iT = vT(this.spec, TT, IT, TT.doc.length).nextOverlapping();
        if (iT.done) {
          let IT = Math.min(TT.doc.length, oT + this.spec.unquoted.length);
          iT = vT(this.spec, TT, 0, IT).nextOverlapping()
        }
        return iT.done || iT.value.from == oT && iT.value.to == IT ? null : iT.value
      }
      prevMatchInRange(TT, oT, IT) {
        for (let iT = IT;;) {
          let IT = Math.max(oT, iT - 1e4 - this.spec.unquoted.length),
            zT = vT(this.spec, TT, IT, iT),
            kT = null;
          for (; !zT.nextOverlapping().done;) kT = zT.value;
          if (kT) return kT;
          if (IT == oT) return null;
          iT -= 1e4
        }
      }
      prevMatch(TT, oT, IT) {
        let iT = this.prevMatchInRange(TT, 0, oT);
        return iT || (iT = this.prevMatchInRange(TT, Math.max(0, IT - this.spec.unquoted.length), TT.doc.length)), !iT || iT.from == oT && iT.to == IT ? null : iT
      }
      getReplacement(TT) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(TT, oT) {
        let IT = vT(this.spec, TT, 0, TT.doc.length),
          iT = [];
        for (; !IT.next().done;) {
          if (iT.length >= oT) return null;
          iT.push(IT.value)
        }
        return iT
      }
      highlight(TT, oT, IT, iT) {
        let zT = vT(this.spec, TT, Math.max(0, oT - this.spec.unquoted.length), Math.min(IT + this.spec.unquoted.length, TT.doc.length));
        for (; !zT.next().done;) iT(zT.value.from, zT.value.to)
      }
    }

    function fT(TT, oT, IT, iT) {
      let kT;
      var WT;
      return TT.wholeWord && (WT = oT.charCategorizer(oT.selection.main.head), kT = (TT, oT, IT) => !IT[0].length || (WT(CT(IT.input, IT.index)) != zT.g.Word || WT(jT(IT.input, IT.index)) != zT.g.Word) && (WT(jT(IT.input, IT.index + IT[0].length)) != zT.g.Word || WT(CT(IT.input, IT.index + IT[0].length)) != zT.g.Word)), TT.test && (kT = function(TT, oT, IT) {
        return (iT, zT, kT) => (!IT || IT(iT, zT, kT)) && TT(kT[0], oT, iT, zT)
      }(TT.test, oT, kT)), new ST(oT.doc, TT.search, {
        ignoreCase: !TT.caseSensitive,
        test: kT
      }, IT, iT)
    }

    function CT(TT, oT) {
      return TT.slice((0, zT.ab)(TT, oT, !1), oT)
    }

    function jT(TT, oT) {
      return TT.slice(oT, (0, zT.ab)(TT, oT))
    }
    class JT extends uT {
      nextMatch(TT, oT, IT) {
        let iT = fT(this.spec, TT, IT, TT.doc.length).next();
        return iT.done && (iT = fT(this.spec, TT, 0, oT).next()), iT.done ? null : iT.value
      }
      prevMatchInRange(TT, oT, IT) {
        for (let iT = 1;; iT++) {
          let zT = Math.max(oT, IT - 1e4 * iT),
            kT = fT(this.spec, TT, zT, IT),
            WT = null;
          for (; !kT.next().done;) WT = kT.value;
          if (WT && (zT == oT || WT.from > zT + 10)) return WT;
          if (zT == oT) return null
        }
      }
      prevMatch(TT, oT, IT) {
        return this.prevMatchInRange(TT, 0, oT) || this.prevMatchInRange(TT, IT, TT.doc.length)
      }
      getReplacement(TT) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((oT, IT) => {
          if ("&" == IT) return TT.match[0];
          if ("$" == IT) return "$";
          for (let iT = IT.length; iT > 0; iT--) {
            let oT = +IT.slice(0, iT);
            if (oT > 0 && oT < TT.match.length) return TT.match[oT] + IT.slice(iT)
          }
          return oT
        }))
      }
      matchAll(TT, oT) {
        let IT = fT(this.spec, TT, 0, TT.doc.length),
          iT = [];
        for (; !IT.next().done;) {
          if (iT.length >= oT) return null;
          iT.push(IT.value)
        }
        return iT
      }
      highlight(TT, oT, IT, iT) {
        let zT = fT(this.spec, TT, Math.max(0, oT - 250), Math.min(IT + 250, TT.doc.length));
        for (; !zT.next().done;) iT(zT.value.from, zT.value.to)
      }
    }
    const UT = zT.H.define(),
      aT = zT.H.define(),
      YT = zT.K.define({
        create: TT => new QT(bT(TT).create(), null),
        update(TT, oT) {
          for (let IT of oT.effects) IT.is(UT) ? TT = new QT(IT.value.create(), TT.panel) : IT.is(aT) && (TT = new QT(TT.query, IT.value ? pT : null));
          return TT
        },
        provide: TT => iT.gb.from(TT, (TT => TT.panel))
      });
    class QT {
      constructor(TT, oT) {
        this.query = TT, this.panel = oT
      }
    }
    const OT = iT.b.mark({
        class: "cm-searchMatch"
      }),
      HT = iT.b.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      nT = iT.l.fromClass(class {
        constructor(TT) {
          this.view = TT, this.dz = this.highlight(TT.state.field(YT))
        }
        update(TT) {
          let oT = TT.state.field(YT);
          (oT != TT.startState.field(YT) || TT.docChanged || TT.selectionSet || TT.viewportChanged) && (this.dz = this.highlight(oT))
        }
        highlight(TT) {
          let {
            query: oT,
            panel: IT
          } = TT;
          if (!IT || !oT.spec.valid) return iT.b.none;
          let {
            view: kT
          } = this, WT = new zT.A;
          for (let iT = 0, zT = kT.o2, XT = zT.length; iT < XT; iT++) {
            let {
              from: TT,
              to: IT
            } = zT[iT];
            for (; iT < XT - 1 && IT > zT[iT + 1].from - 500;) IT = zT[++iT].to;
            oT.highlight(kT.state, TT, IT, ((TT, oT) => {
              let IT = kT.state.selection.ec.some((IT => IT.from == TT && IT.to == oT));
              WT.add(TT, oT, IT ? HT : OT)
            }))
          }
          return WT.finish()
        }
      }, {
        dz: TT => TT.dz
      });

    function qT(TT) {
      return oT => {
        let IT = oT.state.field(YT, !1);
        return IT && IT.query.spec.valid ? TT(oT, IT) : PT(oT)
      }
    }
    const ZT = qT(((TT, oT) => {
        let {
          query: IT
        } = oT, {
          to: iT
        } = TT.state.selection.main, kT = IT.nextMatch(TT.state, iT, iT);
        if (!kT) return !1;
        let WT = zT.k.single(kT.from, kT.to),
          XT = TT.state.facet(eT);
        return TT.dispatch({
          selection: WT,
          effects: [zo(TT, kT), XT.scrollToMatch(WT.main, TT)],
          userEvent: "select.search"
        }), NT(TT), !0
      })),
      lT = qT(((TT, oT) => {
        let {
          query: IT
        } = oT, {
          state: iT
        } = TT, {
          from: kT
        } = iT.selection.main, WT = IT.prevMatch(iT, kT, kT);
        if (!WT) return !1;
        let XT = zT.k.single(WT.from, WT.to),
          BT = TT.state.facet(eT);
        return TT.dispatch({
          selection: XT,
          effects: [zo(TT, WT), BT.scrollToMatch(XT.main, TT)],
          userEvent: "select.search"
        }), NT(TT), !0
      })),
      sT = qT(((TT, oT) => {
        let {
          query: IT
        } = oT, iT = IT.matchAll(TT.state, 1e3);
        return !(!iT || !iT.length) && (TT.dispatch({
          selection: zT.k.create(iT.map((TT => zT.k.range(TT.from, TT.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      tT = qT(((TT, oT) => {
        let {
          query: IT
        } = oT, {
          state: kT
        } = TT, {
          from: WT,
          to: XT
        } = kT.selection.main;
        if (kT.readOnly) return !1;
        let BT = IT.nextMatch(kT, WT, WT);
        if (!BT) return !1;
        let FT, ST, DT = BT,
          LT = [],
          xT = [];
        DT.from == WT && DT.to == XT && (ST = kT.toText(IT.getReplacement(DT)), LT.push({
          from: DT.from,
          to: DT.to,
          insert: ST
        }), DT = IT.nextMatch(kT, DT.from, DT.to), xT.push(iT.i.announce.of(kT.phrase("replaced match on line $", kT.doc.lineAt(WT).number) + ".")));
        let cT = TT.state.changes(LT);
        return DT && (FT = zT.k.single(DT.from, DT.to).map(cT), xT.push(zo(TT, DT)), xT.push(kT.facet(eT).scrollToMatch(FT.main, TT))), TT.dispatch({
          changes: cT,
          selection: FT,
          effects: xT,
          userEvent: "input.replace"
        }), !0
      })),
      GT = qT(((TT, oT) => {
        let {
          query: IT
        } = oT;
        if (TT.state.readOnly) return !1;
        let zT = IT.matchAll(TT.state, 1e9).map((TT => {
          let {
            from: oT,
            to: iT
          } = TT;
          return {
            from: oT,
            to: iT,
            insert: IT.getReplacement(TT)
          }
        }));
        if (!zT.length) return !1;
        let kT = TT.state.phrase("replaced $ matches", zT.length) + ".";
        return TT.dispatch({
          changes: zT,
          effects: iT.i.announce.of(kT),
          userEvent: "input.replace.all"
        }), !0
      }));

    function pT(TT) {
      return TT.state.facet(eT).createPanel(TT)
    }

    function bT(TT, oT) {
      var IT, iT, zT, kT, WT;
      let XT = TT.selection.main,
        BT = XT.empty || XT.to > XT.from + 100 ? "" : TT.sliceDoc(XT.from, XT.to);
      if (oT && !BT) return oT;
      let FT = TT.facet(eT);
      return new RT({
        search: (null !== (IT = null === oT || void 0 === oT ? void 0 : oT.literal) && void 0 !== IT ? IT : FT.literal) ? BT : BT.replace(/\n/g, "\\n"),
        caseSensitive: null !== (iT = null === oT || void 0 === oT ? void 0 : oT.caseSensitive) && void 0 !== iT ? iT : FT.caseSensitive,
        literal: null !== (zT = null === oT || void 0 === oT ? void 0 : oT.literal) && void 0 !== zT ? zT : FT.literal,
        regexp: null !== (kT = null === oT || void 0 === oT ? void 0 : oT.regexp) && void 0 !== kT ? kT : FT.regexp,
        wholeWord: null !== (WT = null === oT || void 0 === oT ? void 0 : oT.wholeWord) && void 0 !== WT ? WT : FT.wholeWord
      })
    }

    function yT(TT) {
      let oT = (0, iT.v)(TT, pT);
      return oT && oT.dom.querySelector("[main-field]")
    }

    function NT(TT) {
      let oT = yT(TT);
      oT && oT == TT.root.activeElement && oT.select()
    }
    const PT = TT => {
        let oT = TT.state.field(YT, !1);
        if (oT && oT.panel) {
          let IT = yT(TT);
          if (IT && IT != TT.root.activeElement) {
            let iT = bT(TT.state, oT.query.spec);
            iT.valid && TT.dispatch({
              effects: UT.of(iT)
            }), IT.focus(), IT.select()
          }
        } else TT.dispatch({
          effects: [aT.of(!0), oT ? UT.of(bT(TT.state, oT.query.spec)) : zT.H.appendConfig.of(Wo)]
        });
        return !0
      },
      dT = TT => {
        let oT = TT.state.field(YT, !1);
        if (!oT || !oT.panel) return !1;
        let IT = (0, iT.v)(TT, pT);
        return IT && IT.dom.contains(TT.root.activeElement) && TT.focus(), TT.dispatch({
          effects: aT.of(!1)
        }), !0
      },
      VT = [{
        key: "Mod-f",
        run: PT,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: ZT,
        shift: lT,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: ZT,
        shift: lT,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: dT,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: TT => {
          let {
            state: oT,
            dispatch: IT
          } = TT, iT = oT.selection;
          if (iT.ec.length > 1 || iT.main.empty) return !1;
          let {
            from: kT,
            to: WT
          } = iT.main, BT = [], FT = 0;
          for (let ST = new XT(oT.doc, oT.sliceDoc(kT, WT)); !ST.next().done;) {
            if (BT.length > 1e3) return !1;
            ST.value.from == kT && (FT = BT.length), BT.push(zT.k.range(ST.value.from, ST.value.to))
          }
          return IT(oT.update({
            selection: zT.k.create(BT, FT),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: TT => {
          let {
            state: oT
          } = TT, IT = String(oT.doc.lineAt(TT.state.selection.main.head).number), {
            close: kT,
            result: WT
          } = (0, iT.cb)(TT, {
            label: oT.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: IT
            },
            focus: !0,
            submitLabel: oT.phrase("go")
          });
          return WT.then((IT => {
            let WT = IT && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(IT.elements.line.value);
            if (!WT) return void TT.dispatch({
              effects: kT
            });
            let XT = oT.doc.lineAt(oT.selection.main.head),
              [, BT, FT, ST, DT] = WT,
              LT = ST ? +ST.slice(1) : 0,
              xT = FT ? +FT : XT.number;
            if (FT && DT) {
              let TT = xT / 100;
              BT && (TT = TT * ("-" == BT ? -1 : 1) + XT.number / oT.doc.lines), xT = Math.round(oT.doc.lines * TT)
            } else FT && BT && (xT = xT * ("-" == BT ? -1 : 1) + XT.number);
            let cT = oT.doc.line(Math.max(1, Math.min(oT.doc.lines, xT))),
              KT = zT.k.cursor(cT.from + Math.max(0, Math.min(LT, cT.length)));
            TT.dispatch({
              effects: [kT, iT.i.scrollIntoView(KT.from, {
                y: "center"
              })],
              selection: KT
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: TT => {
          let {
            state: oT,
            dispatch: IT
          } = TT, {
            ec: kT
          } = oT.selection;
          if (kT.some((TT => TT.from === TT.to))) return (TT => {
            let {
              state: oT,
              dispatch: IT
            } = TT, {
              selection: iT
            } = oT, kT = zT.k.create(iT.ec.map((TT => oT.wordAt(TT.head) || zT.k.cursor(TT.head))), iT.mainIndex);
            return !kT.eq(iT) && (IT(oT.update({
              selection: kT
            })), !0)
          })({
            state: oT,
            dispatch: IT
          });
          let WT = oT.sliceDoc(kT[0].from, kT[0].to);
          if (oT.selection.ec.some((TT => oT.sliceDoc(TT.from, TT.to) != WT))) return !1;
          let BT = function(TT, oT) {
            let {
              main: IT,
              ec: iT
            } = TT.selection, zT = TT.wordAt(IT.head), kT = zT && zT.from == IT.from && zT.to == IT.to;
            for (let WT = !1, BT = new XT(TT.doc, oT, iT[iT.length - 1].to);;) {
              if (BT.next(), !BT.done) {
                if (WT && iT.some((TT => TT.from == BT.value.from))) continue;
                if (kT) {
                  let oT = TT.wordAt(BT.value.from);
                  if (!oT || oT.from != BT.value.from || oT.to != BT.value.to) continue
                }
                return BT.value
              }
              if (WT) return null;
              BT = new XT(TT.doc, oT, 0, Math.max(0, iT[iT.length - 1].from - 1)), WT = !0
            }
          }(oT, WT);
          return !!BT && (IT(oT.update({
            selection: oT.selection.addRange(zT.k.range(BT.from, BT.to), !1),
            effects: iT.i.scrollIntoView(BT.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class To {
      constructor(TT) {
        this.view = TT;
        let oT = this.query = TT.state.field(YT).query.spec;

        function IT(TT, oT, IT) {
          return (0, kT.d)("button", {
            class: "cm-button",
            name: TT,
            onclick: oT,
            type: "button"
          }, IT)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, kT.d)("input", {
          value: oT.search,
          placeholder: oo(TT, "Find"),
          "aria-label": oo(TT, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, kT.d)("input", {
          value: oT.replace,
          placeholder: oo(TT, "Replace"),
          "aria-label": oo(TT, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, kT.d)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: oT.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, kT.d)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: oT.regexp,
          onchange: this.commit
        }), this.wordField = (0, kT.d)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: oT.wholeWord,
          onchange: this.commit
        }), this.dom = (0, kT.d)("div", {
          onkeydown: TT => this.keydown(TT),
          class: "cm-search"
        }, [this.searchField, IT("next", (() => ZT(TT)), [oo(TT, "next")]), IT("prev", (() => lT(TT)), [oo(TT, "previous")]), IT("select", (() => sT(TT)), [oo(TT, "all")]), (0, kT.d)("label", null, [this.caseField, oo(TT, "match case")]), (0, kT.d)("label", null, [this.reField, oo(TT, "regexp")]), (0, kT.d)("label", null, [this.wordField, oo(TT, "by word")]), ...TT.state.readOnly ? [] : [(0, kT.d)("br"), this.replaceField, IT("replace", (() => tT(TT)), [oo(TT, "replace")]), IT("replaceAll", (() => GT(TT)), [oo(TT, "replace all")])], (0, kT.d)("button", {
          name: "close",
          onclick: () => dT(TT),
          "aria-label": oo(TT, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let TT = new RT({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        TT.eq(this.query) || (this.query = TT, this.view.dispatch({
          effects: UT.of(TT)
        }))
      }
      keydown(TT) {
        (0, iT.bb)(this.view, TT, "search-panel") ? TT.preventDefault(): 13 == TT.keyCode && TT.target == this.searchField ? (TT.preventDefault(), (TT.shiftKey ? lT : ZT)(this.view)) : 13 == TT.keyCode && TT.target == this.replaceField && (TT.preventDefault(), tT(this.view))
      }
      update(TT) {
        for (let oT of TT.transactions)
          for (let TT of oT.effects) TT.is(UT) && !TT.value.eq(this.query) && this.setQuery(TT.value)
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
        return this.view.state.facet(eT).top
      }
    }

    function oo(TT, oT) {
      return TT.state.phrase(oT)
    }
    const Io = 30,
      io = /[\s\.,:;?!]/;

    function zo(TT, oT) {
      let {
        from: IT,
        to: zT
      } = oT, kT = TT.state.doc.lineAt(IT), WT = TT.state.doc.lineAt(zT).to, XT = Math.max(kT.from, IT - Io), BT = Math.min(WT, zT + Io), FT = TT.state.sliceDoc(XT, BT);
      if (XT != kT.from)
        for (let iT = 0; iT < Io; iT++)
          if (!io.test(FT[iT + 1]) && io.test(FT[iT])) {
            FT = FT.slice(iT);
            break
          } if (BT != WT)
        for (let iT = FT.length - 1; iT > FT.length - Io; iT--)
          if (!io.test(FT[iT - 1]) && io.test(FT[iT])) {
            FT = FT.slice(0, iT);
            break
          } return iT.i.announce.of(`${TT.state.phrase("current match")}. ${FT} ${TT.state.phrase("on line")} ${kT.number}.`)
    }
    const ko = iT.i.baseTheme({
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
      Wo = [YT, zT.w.low(nT), ko]
  },
  40115: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => JT,
      f: () => Fo,
      i: () => Cz,
      j: () => SW,
      l: () => Po,
      m: () => CT,
      q: () => ak,
      s: () => Tk,
      t: () => Sk,
      v: () => oW,
      z: () => dk,
      D: () => KW,
      G: () => mk,
      F: () => YW,
      K: () => Ak,
      L: () => Pk,
      N: () => Hz,
      Q: () => jW,
      U: () => po,
      Y: () => vk,
      _: () => jk,
      bb: () => Zz,
      cb: () => WW,
      gb: () => kW,
      jb: () => tk
    });
    for (var iT = IT(40110), zT = IT(40123), kT = {
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
      }, WT = {
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
      }, XT = "undefined" != typeof navigator && /Mac/.test(navigator.platform), BT = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), FT = 0; FT < 10; FT++) kT[48 + FT] = kT[96 + FT] = String(FT);
    for (FT = 1; FT <= 24; FT++) kT[FT + 111] = "F" + FT;
    for (FT = 65; FT <= 90; FT++) kT[FT] = String.fromCharCode(FT + 32), WT[FT] = String.fromCharCode(FT);
    for (var ST in kT) WT.hasOwnProperty(ST) || (WT[ST] = kT[ST]);
    var DT = IT(40128);
    let LT = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      xT = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const cT = /Edge\/(\d+)/.exec(LT.userAgent),
      KT = /MSIE \d/.test(LT.userAgent),
      MT = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(LT.userAgent),
      rT = !!(KT || MT || cT),
      AT = !rT && /gecko\/(\d+)/i.test(LT.userAgent),
      gT = !rT && /Chrome\/(\d+)/.exec(LT.userAgent),
      hT = "webkitFontSmoothing" in xT.documentElement.style,
      wT = !rT && /Apple Computer/.test(LT.vendor),
      mT = wT && (/Mobile\/\w+/.test(LT.userAgent) || LT.maxTouchPoints > 2);
    var eT = {
      mac: mT || /Mac/.test(LT.platform),
      windows: /Win/.test(LT.platform),
      linux: /Linux|X11/.test(LT.platform),
      ie: rT,
      ie_version: KT ? xT.documentMode || 6 : MT ? +MT[1] : cT ? +cT[1] : 0,
      gecko: AT,
      gecko_version: AT ? +(/Firefox\/(\d+)/.exec(LT.userAgent) || [0, 0])[1] : 0,
      chrome: !!gT,
      chrome_version: gT ? +gT[1] : 0,
      ios: mT,
      android: /Android\b/.test(LT.userAgent),
      webkit: hT,
      webkit_version: hT ? +(/\bAppleWebKit\/(\d+)/.exec(LT.userAgent) || [0, 0])[1] : 0,
      safari: wT,
      safari_version: wT ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(LT.userAgent) || [0, 0])[1] : 0,
      tabSize: null != xT.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function RT(TT, oT) {
      for (let IT in TT) "class" == IT && oT.class ? oT.class += " " + TT.class : "style" == IT && oT.style ? oT.style += ";" + TT.style : oT[IT] = TT[IT];
      return oT
    }
    const uT = Object.create(null);

    function vT(TT, oT, IT) {
      if (TT == oT) return !0;
      TT || (TT = uT), oT || (oT = uT);
      let iT = Object.keys(TT),
        zT = Object.keys(oT);
      if (iT.length - (IT && iT.indexOf(IT) > -1 ? 1 : 0) != zT.length - (IT && zT.indexOf(IT) > -1 ? 1 : 0)) return !1;
      for (let kT of iT)
        if (kT != IT && (-1 == zT.indexOf(kT) || TT[kT] !== oT[kT])) return !1;
      return !0
    }

    function ET(TT, oT, IT) {
      let iT = !1;
      if (oT)
        for (let zT in oT) IT && zT in IT || (iT = !0, "style" == zT ? TT.style.cssText = "" : TT.removeAttribute(zT));
      if (IT)
        for (let zT in IT) oT && oT[zT] == IT[zT] || (iT = !0, "style" == zT ? TT.style.cssText = IT[zT] : TT.setAttribute(zT, IT[zT]));
      return iT
    }

    function fT(TT) {
      let oT = Object.create(null);
      for (let IT = 0; IT < TT.attributes.length; IT++) {
        let iT = TT.attributes[IT];
        oT[iT.name] = iT.value
      }
      return oT
    }
    class CT {
      eq(TT) {
        return !1
      }
      updateDOM(TT, oT, IT) {
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
      coordsAt(TT, oT, IT) {
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
    var jT = function(TT) {
      return TT[TT.Text = 0] = "Text", TT[TT.WidgetBefore = 1] = "WidgetBefore", TT[TT.WidgetAfter = 2] = "WidgetAfter", TT[TT.WidgetRange = 3] = "WidgetRange", TT
    }(jT || (jT = {}));
    class JT extends iT.F {
      constructor(TT, oT, IT, iT) {
        super(), this.startSide = TT, this.endSide = oT, this.widget = IT, this.spec = iT
      }
      get heightRelevant() {
        return !1
      }
      static mark(TT) {
        return new UT(TT)
      }
      static widget(TT) {
        let oT = Math.max(-1e4, Math.min(1e4, TT.side || 0)),
          IT = !!TT.block;
        return oT += IT && !TT.inlineOrder ? oT > 0 ? 3e8 : -4e8 : oT > 0 ? 1e8 : -1e8, new YT(TT, oT, oT, IT, TT.widget || null, !1)
      }
      static replace(TT) {
        let oT, IT, iT = !!TT.block;
        if (TT.isBlockGap) oT = -5e8, IT = 4e8;
        else {
          let {
            start: zT,
            end: kT
          } = QT(TT, iT);
          oT = (zT ? iT ? -3e8 : -1 : 5e8) - 1, IT = 1 + (kT ? iT ? 2e8 : 1 : -6e8)
        }
        return new YT(TT, oT, IT, iT, TT.widget || null, !0)
      }
      static line(TT) {
        return new aT(TT)
      }
      static set(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return iT.D.of(TT, oT)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    JT.none = iT.D.empty;
    class UT extends JT {
      constructor(TT) {
        let {
          start: oT,
          end: IT
        } = QT(TT);
        super(oT ? -1 : 5e8, IT ? 1 : -6e8, null, TT), this.tagName = TT.tagName || "span", this.attrs = TT.class && TT.attributes ? RT(TT.attributes, {
          class: TT.class
        }) : TT.class ? {
          class: TT.class
        } : TT.attributes || uT
      }
      eq(TT) {
        return this == TT || TT instanceof UT && this.tagName == TT.tagName && vT(this.attrs, TT.attrs)
      }
      range(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        if (TT >= oT) throw new RangeError("Mark decorations may not be empty");
        return super.range(TT, oT)
      }
    }
    UT.prototype.point = !1;
    class aT extends JT {
      constructor(TT) {
        super(-2e8, -2e8, null, TT)
      }
      eq(TT) {
        return TT instanceof aT && this.spec.class == TT.spec.class && vT(this.spec.attributes, TT.spec.attributes)
      }
      range(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        if (oT != TT) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(TT, oT)
      }
    }
    aT.prototype.mapMode = iT.t.TrackBefore, aT.prototype.point = !0;
    class YT extends JT {
      constructor(TT, oT, IT, zT, kT, WT) {
        super(oT, IT, kT, TT), this.block = zT, this.isReplace = WT, this.mapMode = zT ? oT <= 0 ? iT.t.TrackBefore : iT.t.TrackAfter : iT.t.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? jT.WidgetRange : this.startSide <= 0 ? jT.WidgetBefore : jT.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(TT) {
        return TT instanceof YT && (oT = this.widget, IT = TT.widget, oT == IT || !!(oT && IT && oT.compare(IT))) && this.block == TT.block && this.startSide == TT.startSide && this.endSide == TT.endSide;
        var oT, IT
      }
      range(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        if (this.isReplace && (TT > oT || TT == oT && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && oT != TT) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(TT, oT)
      }
    }

    function QT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: IT,
          inclusiveEnd: iT
        } = TT;
      return null == IT && (IT = TT.inclusive), null == iT && (iT = TT.inclusive), {
        start: null !== IT && void 0 !== IT ? IT : oT,
        end: null !== iT && void 0 !== iT ? iT : oT
      }
    }

    function OT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        zT = IT.length - 1;
      zT >= 0 && IT[zT] + iT >= TT ? IT[zT] = Math.max(IT[zT], oT) : IT.push(TT, oT)
    }
    YT.prototype.point = !0;
    class HT extends iT.F {
      constructor(TT, oT) {
        super(), this.tagName = TT, this.attributes = oT
      }
      eq(TT) {
        return TT == this || TT instanceof HT && this.tagName == TT.tagName && vT(this.attributes, TT.attributes)
      }
      static create(TT) {
        return new HT(TT.tagName, TT.attributes || uT)
      }
      static set(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return iT.D.of(TT, oT)
      }
    }

    function nT(TT) {
      let oT;
      return oT = 11 == TT.nodeType ? TT.getSelection ? TT : TT.ownerDocument : TT, oT.getSelection()
    }

    function qT(TT, oT) {
      return !!oT && (TT == oT || TT.contains(1 != oT.nodeType ? oT.parentNode : oT))
    }

    function ZT(TT, oT) {
      if (!oT.anchorNode) return !1;
      try {
        return qT(TT, oT.anchorNode)
      } catch (IT) {
        return !1
      }
    }

    function lT(TT) {
      return 3 == TT.nodeType ? io(TT, 0, TT.nodeValue.length).getClientRects() : 1 == TT.nodeType ? TT.getClientRects() : []
    }

    function sT(TT, oT, IT, iT) {
      return !!IT && (pT(TT, oT, IT, iT, -1) || pT(TT, oT, IT, iT, 1))
    }

    function tT(TT) {
      for (var oT = 0;; oT++)
        if (!(TT = TT.previousSibling)) return oT
    }

    function GT(TT) {
      return 1 == TT.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(TT.nodeName)
    }

    function pT(TT, oT, IT, iT, zT) {
      for (;;) {
        if (TT == IT && oT == iT) return !0;
        if (oT == (zT < 0 ? 0 : bT(TT))) {
          if ("DIV" == TT.nodeName) return !1;
          let IT = TT.parentNode;
          if (!IT || 1 != IT.nodeType) return !1;
          oT = tT(TT) + (zT < 0 ? 0 : 1), TT = IT
        } else {
          if (1 != TT.nodeType) return !1;
          if (1 == (TT = TT.childNodes[oT + (zT < 0 ? -1 : 0)]).nodeType && "false" == TT.contentEditable) return !1;
          oT = zT < 0 ? bT(TT) : 0
        }
      }
    }

    function bT(TT) {
      return 3 == TT.nodeType ? TT.nodeValue.length : TT.childNodes.length
    }

    function yT(TT, oT) {
      let IT = oT ? TT.left : TT.right;
      return {
        left: IT,
        right: IT,
        top: TT.top,
        bottom: TT.bottom
      }
    }

    function NT(TT) {
      let oT = TT.visualViewport;
      return oT ? {
        left: 0,
        right: oT.width,
        top: 0,
        bottom: oT.height
      } : {
        left: 0,
        right: TT.innerWidth,
        top: 0,
        bottom: TT.innerHeight
      }
    }

    function PT(TT, oT) {
      let IT = oT.width / TT.offsetWidth,
        iT = oT.height / TT.offsetHeight;
      return (IT > .995 && IT < 1.005 || !isFinite(IT) || Math.abs(oT.width - TT.offsetWidth) < 1) && (IT = 1), (iT > .995 && iT < 1.005 || !isFinite(iT) || Math.abs(oT.height - TT.offsetHeight) < 1) && (iT = 1), {
        scaleX: IT,
        scaleY: iT
      }
    }

    function dT(TT) {
      let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        IT = TT.ownerDocument,
        iT = null,
        zT = null;
      for (let kT = TT.parentNode; kT && (kT != IT.body && (oT && !iT || !zT));)
        if (1 == kT.nodeType) !zT && kT.scrollHeight > kT.clientHeight && (zT = kT), oT && !iT && kT.scrollWidth > kT.clientWidth && (iT = kT), kT = kT.assignedSlot || kT.parentNode;
        else {
          if (11 != kT.nodeType) break;
          kT = kT.host
        } return {
        x: iT,
        y: zT
      }
    }
    HT.prototype.startSide = HT.prototype.endSide = -1;
    class VT {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(TT) {
        return this.anchorNode == TT.anchorNode && this.anchorOffset == TT.anchorOffset && this.focusNode == TT.focusNode && this.focusOffset == TT.focusOffset
      }
      setRange(TT) {
        let {
          anchorNode: oT,
          focusNode: IT
        } = TT;
        this.set(oT, Math.min(TT.anchorOffset, oT ? bT(oT) : 0), IT, Math.min(TT.focusOffset, IT ? bT(IT) : 0))
      }
      set(TT, oT, IT, iT) {
        this.anchorNode = TT, this.anchorOffset = oT, this.focusNode = IT, this.focusOffset = iT
      }
    }
    let To, oo = null;

    function Io(TT) {
      if (TT.setActive) return TT.setActive();
      if (oo) return TT.focus(oo);
      let oT = [];
      for (let IT = TT; IT && (oT.push(IT, IT.scrollTop, IT.scrollLeft), IT != IT.ownerDocument); IT = IT.parentNode);
      if (TT.focus(null == oo ? {
          get preventScroll() {
            return oo = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !oo) {
        oo = !1;
        for (let TT = 0; TT < oT.length;) {
          let IT = oT[TT++],
            iT = oT[TT++],
            zT = oT[TT++];
          IT.scrollTop != iT && (IT.scrollTop = iT), IT.scrollLeft != zT && (IT.scrollLeft = zT)
        }
      }
    }

    function io(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oT,
        iT = To || (To = document.createRange());
      return iT.setEnd(TT, IT), iT.setStart(TT, oT), iT
    }

    function zo(TT, oT, IT, iT) {
      let zT = {
        key: oT,
        code: oT,
        keyCode: IT,
        which: IT,
        cancelable: !0
      };
      iT && ({
        altKey: zT.altKey,
        ctrlKey: zT.ctrlKey,
        shiftKey: zT.shiftKey,
        metaKey: zT.metaKey
      } = iT);
      let kT = new KeyboardEvent("keydown", zT);
      kT.synthetic = !0, TT.dispatchEvent(kT);
      let WT = new KeyboardEvent("keyup", zT);
      return WT.synthetic = !0, TT.dispatchEvent(WT), kT.defaultPrevented || WT.defaultPrevented
    }

    function ko(TT) {
      return TT instanceof Window ? TT.pageYOffset > Math.max(0, TT.document.documentElement.scrollHeight - TT.innerHeight - 4) : TT.scrollTop > Math.max(1, TT.scrollHeight - TT.clientHeight - 4)
    }

    function Wo(TT, oT) {
      for (let IT = TT, iT = oT;;) {
        if (3 == IT.nodeType && iT > 0) return {
          node: IT,
          offset: iT
        };
        if (1 == IT.nodeType && iT > 0) {
          if ("false" == IT.contentEditable) return null;
          IT = IT.childNodes[iT - 1], iT = bT(IT)
        } else {
          if (!IT.parentNode || GT(IT)) return null;
          iT = tT(IT), IT = IT.parentNode
        }
      }
    }

    function Xo(TT, oT) {
      for (let IT = TT, iT = oT;;) {
        if (3 == IT.nodeType && iT < IT.nodeValue.length) return {
          node: IT,
          offset: iT
        };
        if (1 == IT.nodeType && iT < IT.childNodes.length) {
          if ("false" == IT.contentEditable) return null;
          IT = IT.childNodes[iT], iT = 0
        } else {
          if (!IT.parentNode || GT(IT)) return null;
          iT = tT(IT) + 1, IT = IT.parentNode
        }
      }
    }
    eT.safari && eT.safari_version >= 26 && (oo = !1);
    class Bo {
      constructor(TT, oT) {
        let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = TT, this.offset = oT, this.precise = IT
      }
      static before(TT, oT) {
        return new Bo(TT.parentNode, tT(TT), oT)
      }
      static after(TT, oT) {
        return new Bo(TT.parentNode, tT(TT) + 1, oT)
      }
    }
    var Fo = function(TT) {
      return TT[TT.LTR = 0] = "LTR", TT[TT.RTL = 1] = "RTL", TT
    }(Fo || (Fo = {}));
    const So = Fo.LTR,
      Do = Fo.RTL;

    function Lo(TT) {
      let oT = [];
      for (let IT = 0; IT < TT.length; IT++) oT.push(1 << +TT[IT]);
      return oT
    }
    const xo = Lo("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      co = Lo("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      Ko = Object.create(null),
      Mo = [];
    for (let QW of ["()", "[]", "{}"]) {
      let TT = QW.charCodeAt(0),
        oT = QW.charCodeAt(1);
      Ko[TT] = oT, Ko[oT] = -TT
    }

    function ro(TT) {
      return TT <= 247 ? xo[TT] : 1424 <= TT && TT <= 1524 ? 2 : 1536 <= TT && TT <= 1785 ? co[TT - 1536] : 1774 <= TT && TT <= 2220 ? 4 : 8192 <= TT && TT <= 8204 ? 256 : 64336 <= TT && TT <= 65023 ? 4 : 1
    }
    const Ao = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class go {
      get dir() {
        return this.level % 2 ? Do : So
      }
      constructor(TT, oT, IT) {
        this.from = TT, this.to = oT, this.level = IT
      }
      side(TT, oT) {
        return this.dir == oT == TT ? this.to : this.from
      }
      forward(TT, oT) {
        return TT == (this.dir == oT)
      }
      static find(TT, oT, IT, iT) {
        let zT = -1;
        for (let kT = 0; kT < TT.length; kT++) {
          let WT = TT[kT];
          if (WT.from <= oT && WT.to >= oT) {
            if (WT.level == IT) return kT;
            (zT < 0 || (0 != iT ? iT < 0 ? WT.from < oT : WT.to > oT : TT[zT].level > WT.level)) && (zT = kT)
          }
        }
        if (zT < 0) throw new RangeError("Index out of range");
        return zT
      }
    }

    function ho(TT, oT) {
      if (TT.length != oT.length) return !1;
      for (let IT = 0; IT < TT.length; IT++) {
        let iT = TT[IT],
          zT = oT[IT];
        if (iT.from != zT.from || iT.to != zT.to || iT.direction != zT.direction || !ho(iT.inner, zT.inner)) return !1
      }
      return !0
    }
    const wo = [];

    function mo(TT, oT, IT, iT, zT, kT, WT) {
      let XT = iT % 2 ? 2 : 1;
      if (iT % 2 == zT % 2)
        for (let BT = oT, FT = 0; BT < IT;) {
          let oT = !0,
            ST = !1;
          if (FT == kT.length || BT < kT[FT].from) {
            let TT = wo[BT];
            TT != XT && (oT = !1, ST = 16 == TT)
          }
          let DT = oT || 1 != XT ? null : [],
            LT = oT ? iT : iT + 1,
            xT = BT;
          TT: for (;;)
            if (FT < kT.length && xT == kT[FT].from) {
              if (ST) break TT;
              let cT = kT[FT];
              if (!oT)
                for (let TT = cT.to, oT = FT + 1;;) {
                  if (TT == IT) break TT;
                  if (!(oT < kT.length && kT[oT].from == TT)) {
                    if (wo[TT] == XT) break TT;
                    break
                  }
                  TT = kT[oT++].to
                }
              if (FT++, DT) DT.push(cT);
              else {
                cT.from > BT && WT.push(new go(BT, cT.from, LT)), eo(TT, cT.direction == So != !(LT % 2) ? iT + 1 : iT, zT, cT.inner, cT.from, cT.to, WT), BT = cT.to
              }
              xT = cT.to
            } else {
              if (xT == IT || (oT ? wo[xT] != XT : wo[xT] == XT)) break;
              xT++
            } DT ? mo(TT, BT, xT, iT + 1, zT, DT, WT) : BT < xT && WT.push(new go(BT, xT, LT)), BT = xT
        } else
          for (let BT = IT, FT = kT.length; BT > oT;) {
            let IT = !0,
              ST = !1;
            if (!FT || BT > kT[FT - 1].to) {
              let TT = wo[BT - 1];
              TT != XT && (IT = !1, ST = 16 == TT)
            }
            let DT = IT || 1 != XT ? null : [],
              LT = IT ? iT : iT + 1,
              xT = BT;
            TT: for (;;)
              if (FT && xT == kT[FT - 1].to) {
                if (ST) break TT;
                let cT = kT[--FT];
                if (!IT)
                  for (let TT = cT.from, IT = FT;;) {
                    if (TT == oT) break TT;
                    if (!IT || kT[IT - 1].to != TT) {
                      if (wo[TT - 1] == XT) break TT;
                      break
                    }
                    TT = kT[--IT].from
                  }
                if (DT) DT.push(cT);
                else {
                  cT.to < BT && WT.push(new go(cT.to, BT, LT)), eo(TT, cT.direction == So != !(LT % 2) ? iT + 1 : iT, zT, cT.inner, cT.from, cT.to, WT), BT = cT.from
                }
                xT = cT.from
              } else {
                if (xT == oT || (IT ? wo[xT - 1] != XT : wo[xT - 1] == XT)) break;
                xT--
              } DT ? mo(TT, xT, BT, iT + 1, zT, DT, WT) : xT < BT && WT.push(new go(xT, BT, LT)), BT = xT
          }
    }

    function eo(TT, oT, IT, iT, zT, kT, WT) {
      let XT = oT % 2 ? 2 : 1;
      ! function(TT, oT, IT, iT, zT) {
        for (let kT = 0; kT <= iT.length; kT++) {
          let WT = kT ? iT[kT - 1].to : oT,
            XT = kT < iT.length ? iT[kT].from : IT,
            BT = kT ? 256 : zT;
          for (let oT = WT, IT = BT, iT = BT; oT < XT; oT++) {
            let zT = ro(TT.charCodeAt(oT));
            512 == zT ? zT = IT : 8 == zT && 4 == iT && (zT = 16), wo[oT] = 4 == zT ? 2 : zT, 7 & zT && (iT = zT), IT = zT
          }
          for (let TT = WT, oT = BT, iT = BT; TT < XT; TT++) {
            let zT = wo[TT];
            if (128 == zT) TT < XT - 1 && oT == wo[TT + 1] && 24 & oT ? zT = wo[TT] = oT : wo[TT] = 256;
            else if (64 == zT) {
              let zT = TT + 1;
              for (; zT < XT && 64 == wo[zT];) zT++;
              let kT = TT && 8 == oT || zT < IT && 8 == wo[zT] ? 1 == iT ? 1 : 8 : 256;
              for (let oT = TT; oT < zT; oT++) wo[oT] = kT;
              TT = zT - 1
            } else 8 == zT && 1 == iT && (wo[TT] = 1);
            oT = zT, 7 & zT && (iT = zT)
          }
        }
      }(TT, zT, kT, iT, XT),
      function(TT, oT, IT, iT, zT) {
        let kT = 1 == zT ? 2 : 1;
        for (let WT = 0, XT = 0, BT = 0; WT <= iT.length; WT++) {
          let FT = WT ? iT[WT - 1].to : oT,
            ST = WT < iT.length ? iT[WT].from : IT;
          for (let oT, IT, iT, WT = FT; WT < ST; WT++)
            if (IT = Ko[oT = TT.charCodeAt(WT)])
              if (IT < 0) {
                for (let TT = XT - 3; TT >= 0; TT -= 3)
                  if (Mo[TT + 1] == -IT) {
                    let oT = Mo[TT + 2],
                      IT = 2 & oT ? zT : 4 & oT ? 1 & oT ? kT : zT : 0;
                    IT && (wo[WT] = wo[Mo[TT]] = IT), XT = TT;
                    break
                  }
              } else {
                if (189 == Mo.length) break;
                Mo[XT++] = WT, Mo[XT++] = oT, Mo[XT++] = BT
              }
          else if (2 == (iT = wo[WT]) || 1 == iT) {
            let TT = iT == zT;
            BT = TT ? 0 : 1;
            for (let oT = XT - 3; oT >= 0; oT -= 3) {
              let IT = Mo[oT + 2];
              if (2 & IT) break;
              if (TT) Mo[oT + 2] |= 2;
              else {
                if (4 & IT) break;
                Mo[oT + 2] |= 4
              }
            }
          }
        }
      }(TT, zT, kT, iT, XT),
      function(TT, oT, IT, iT) {
        for (let zT = 0, kT = iT; zT <= IT.length; zT++) {
          let WT = zT ? IT[zT - 1].to : TT,
            XT = zT < IT.length ? IT[zT].from : oT;
          for (let BT = WT; BT < XT;) {
            let WT = wo[BT];
            if (256 == WT) {
              let WT = BT + 1;
              for (;;)
                if (WT == XT) {
                  if (zT == IT.length) break;
                  WT = IT[zT++].to, XT = zT < IT.length ? IT[zT].from : oT
                } else {
                  if (256 != wo[WT]) break;
                  WT++
                } let FT = 1 == kT,
                ST = FT == (1 == (WT < oT ? wo[WT] : iT)) ? FT ? 1 : 2 : iT;
              for (let oT = WT, iT = zT, kT = iT ? IT[iT - 1].to : TT; oT > BT;) oT == kT && (oT = IT[--iT].from, kT = iT ? IT[iT - 1].to : TT), wo[--oT] = ST;
              BT = WT
            } else kT = WT, BT++
          }
        }
      }(zT, kT, iT, XT), mo(TT, zT, kT, oT, IT, iT, WT)
    }

    function Ro(TT, oT, IT) {
      if (!TT) return [new go(0, 0, oT == Do ? 1 : 0)];
      if (oT == So && !IT.length && !Ao.test(TT)) return uo(TT.length);
      if (IT.length)
        for (; TT.length > wo.length;) wo[wo.length] = 256;
      let iT = [],
        zT = oT == So ? 0 : 1;
      return eo(TT, zT, zT, IT, 0, TT.length, iT), iT
    }

    function uo(TT) {
      return [new go(0, TT, 0)]
    }
    let vo = "";

    function Eo(TT, oT, IT, zT, kT) {
      var WT;
      let XT = zT.head - TT.from,
        BT = go.find(oT, XT, null !== (WT = zT.bidiLevel) && void 0 !== WT ? WT : -1, zT.assoc),
        FT = oT[BT],
        ST = FT.side(kT, IT);
      if (XT == ST) {
        let TT = BT += kT ? 1 : -1;
        if (TT < 0 || TT >= oT.length) return null;
        FT = oT[BT = TT], XT = FT.side(!kT, IT), ST = FT.side(kT, IT)
      }
      let DT = (0, iT.ab)(TT.text, XT, FT.forward(kT, IT));
      (DT < FT.from || DT > FT.to) && (DT = ST), vo = TT.text.slice(Math.min(XT, DT), Math.max(XT, DT));
      let LT = BT == (kT ? oT.length - 1 : 0) ? null : oT[BT + (kT ? 1 : -1)];
      return LT && DT == ST && LT.level + (kT ? 0 : 1) < FT.level ? iT.k.cursor(LT.side(!kT, IT) + TT.from, LT.forward(kT, IT) ? 1 : -1, LT.level) : iT.k.cursor(DT + TT.from, FT.forward(kT, IT) ? -1 : 1, FT.level)
    }

    function fo(TT, oT, IT) {
      for (let iT = oT; iT < IT; iT++) {
        let oT = ro(TT.charCodeAt(iT));
        if (1 == oT) return So;
        if (2 == oT || 4 == oT) return Do
      }
      return So
    }
    const Co = iT.p.define(),
      jo = iT.p.define(),
      Jo = iT.p.define(),
      Uo = iT.p.define(),
      ao = iT.p.define(),
      Yo = iT.p.define(),
      Qo = iT.p.define(),
      Oo = iT.p.define(),
      Ho = iT.p.define(),
      no = iT.p.define({
        combine: TT => TT.some((TT => TT))
      }),
      qo = iT.p.define({
        combine: TT => TT.some((TT => TT))
      }),
      Zo = iT.p.define();
    class so {
      constructor(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = TT, this.y = oT, this.x = IT, this.yMargin = iT, this.xMargin = zT, this.isSnapshot = kT
      }
      map(TT) {
        return TT.empty ? this : new so(this.range.map(TT), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(TT) {
        return this.range.to <= TT.doc.length ? this : new so(iT.k.cursor(TT.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const to = iT.H.define({
        map: (TT, oT) => TT.map(oT)
      }),
      Go = iT.H.define();

    function po(TT, oT, IT) {
      let iT = TT.facet(Uo);
      iT.length ? iT[0](oT) : window.onerror && window.onerror(String(oT), IT, void 0, void 0, oT) || (IT ? console.error(IT + ":", oT) : console.error(oT))
    }
    const bo = iT.p.define({
      combine: TT => !TT.length || TT[0]
    });
    let yo = 0;
    const No = iT.p.define({
      combine: TT => TT.filter(((oT, IT) => {
        for (let iT = 0; iT < IT; iT++)
          if (TT[iT].plugin == oT.plugin) return !1;
        return !0
      }))
    });
    class Po {
      constructor(TT, oT, IT, iT, zT) {
        this.id = TT, this.create = oT, this.domEventHandlers = IT, this.domEventObservers = iT, this.baseExtensions = zT(this), this.extension = this.baseExtensions.concat(No.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(TT) {
        return this.baseExtensions.concat(No.of({
          plugin: this,
          arg: TT
        }))
      }
      static define(TT, oT) {
        const {
          eventHandlers: IT,
          eventObservers: iT,
          provide: zT,
          dz: kT
        } = oT || {};
        return new Po(yo++, TT, IT, iT, (TT => {
          let oT = [];
          return kT && oT.push(II.of((oT => {
            let IT = oT.plugin(TT);
            return IT ? kT(IT) : JT.none
          }))), zT && oT.push(zT(TT)), oT
        }))
      }
      static fromClass(TT, oT) {
        return Po.define(((oT, IT) => new TT(oT, IT)), oT)
      }
    }
    class Vo {
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
            } catch (oT) {
              if (po(TT.state, oT, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (IT) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(TT, this.spec.arg)
        } catch (oT) {
          po(TT.state, oT, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(TT) {
        var oT;
        if (null === (oT = this.value) || void 0 === oT ? void 0 : oT.destroy) try {
          this.value.destroy()
        } catch (IT) {
          po(TT.state, IT, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const TI = iT.p.define(),
      oI = iT.p.define(),
      II = iT.p.define(),
      iI = iT.p.define(),
      zI = iT.p.define(),
      kI = iT.p.define(),
      WI = iT.p.define();

    function XI(TT, oT) {
      let IT = TT.state.facet(WI);
      if (!IT.length) return IT;
      let zT = IT.map((oT => oT instanceof Function ? oT(TT) : oT)),
        kT = [];
      return iT.D.spans(zT, oT.from, oT.to, {
        point() {},
        span(TT, IT, iT, zT) {
          let WT = TT - oT.from,
            XT = IT - oT.from,
            BT = kT;
          for (let kT = iT.length - 1; kT >= 0; kT--, zT--) {
            let TT, IT = iT[kT].spec.bidiIsolate;
            if (null == IT && (IT = fo(oT.text, WT, XT)), zT > 0 && BT.length && (TT = BT[BT.length - 1]).to == WT && TT.direction == IT) TT.to = XT, BT = TT.inner;
            else {
              let TT = {
                from: WT,
                to: XT,
                direction: IT,
                inner: []
              };
              BT.push(TT), BT = TT.inner
            }
          }
        }
      }), kT
    }
    const BI = iT.p.define();

    function FI(TT) {
      let oT = 0,
        IT = 0,
        iT = 0,
        zT = 0;
      for (let kT of TT.state.facet(BI)) {
        let WT = kT(TT);
        WT && (null != WT.left && (oT = Math.max(oT, WT.left)), null != WT.right && (IT = Math.max(IT, WT.right)), null != WT.top && (iT = Math.max(iT, WT.top)), null != WT.bottom && (zT = Math.max(zT, WT.bottom)))
      }
      return {
        left: oT,
        right: IT,
        top: iT,
        bottom: zT
      }
    }
    const SI = iT.p.define();
    class DI {
      constructor(TT, oT, IT, iT) {
        this.fromA = TT, this.toA = oT, this.fromB = IT, this.toB = iT
      }
      join(TT) {
        return new DI(Math.min(this.fromA, TT.fromA), Math.max(this.toA, TT.toA), Math.min(this.fromB, TT.fromB), Math.max(this.toB, TT.toB))
      }
      addToSet(TT) {
        let oT = TT.length,
          IT = this;
        for (; oT > 0; oT--) {
          let iT = TT[oT - 1];
          if (!(iT.fromA > IT.toA)) {
            if (iT.toA < IT.fromA) break;
            IT = IT.join(iT), TT.splice(oT - 1, 1)
          }
        }
        return TT.splice(oT, 0, IT), TT
      }
      static extendWithRanges(TT, oT) {
        if (0 == oT.length) return TT;
        let IT = [];
        for (let iT = 0, zT = 0, kT = 0;;) {
          let WT = iT < TT.length ? TT[iT].fromB : 1e9,
            XT = zT < oT.length ? oT[zT] : 1e9,
            BT = Math.min(WT, XT);
          if (1e9 == BT) break;
          let FT = BT + kT,
            ST = BT,
            DT = FT;
          for (;;)
            if (zT < oT.length && oT[zT] <= ST) {
              let IT = oT[zT + 1];
              zT += 2, ST = Math.max(ST, IT);
              for (let oT = iT; oT < TT.length && TT[oT].fromB <= ST; oT++) kT = TT[oT].toA - TT[oT].toB;
              DT = Math.max(DT, IT + kT)
            } else {
              if (!(iT < TT.length && TT[iT].fromB <= ST)) break;
              {
                let oT = TT[iT++];
                ST = Math.max(ST, oT.toB), DT = Math.max(DT, oT.toA), kT = oT.toA - oT.toB
              }
            } IT.push(new DI(FT, DT, BT, ST))
        }
        return IT
      }
    }
    class LI {
      constructor(TT, oT, IT) {
        this.view = TT, this.state = oT, this.transactions = IT, this.flags = 0, this.startState = TT.state, this.changes = iT.ChangeSet.empty(this.startState.doc.length);
        for (let iT of IT) this.changes = this.changes.compose(iT.changes);
        let zT = [];
        this.changes.iterChangedRanges(((TT, oT, IT, iT) => zT.push(new DI(TT, oT, IT, iT)))), this.changedRanges = zT
      }
      static create(TT, oT, IT) {
        return new LI(TT, oT, IT)
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
    const xI = [];
    class cI {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = TT, this.length = oT, this.flags = IT, this.parent = null, TT.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return xI
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
          TT && function(TT, oT) {
            for (let IT = TT.attributes.length - 1; IT >= 0; IT--) {
              let iT = TT.attributes[IT].name;
              null == oT[iT] && TT.removeAttribute(iT)
            }
            for (let IT in oT) {
              let iT = oT[IT];
              "style" == IT ? TT.style.cssText = iT : TT.getAttribute(IT) != iT && TT.setAttribute(IT, iT)
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
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let IT of this.children) {
          if (IT == TT) return oT;
          oT += IT.length + IT.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(TT) {
        return this.posBefore(TT) + TT.length
      }
      covers(TT) {
        return !0
      }
      coordsIn(TT, oT) {
        return null
      }
      domPosFor(TT, oT) {
        let IT = tT(this.dom),
          iT = this.length ? TT > 0 : oT > 0;
        return new Bo(this.parent.dom, IT + (iT ? 1 : 0), 0 == TT || TT == this.length)
      }
      markDirty(TT) {
        this.flags &= -3, TT && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let TT = this; TT; TT = TT.parent)
          if (TT instanceof rI) return TT;
        return null
      }
      static get(TT) {
        return TT.cmTile
      }
    }
    class KI extends cI {
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
        let oT, IT = this.dom,
          iT = null,
          zT = (null === TT || void 0 === TT ? void 0 : TT.node) == IT ? TT : null,
          kT = 0;
        for (let WT of this.children) {
          if (WT.sync(TT), kT += WT.length + WT.breakAfter, oT = iT ? iT.nextSibling : IT.firstChild, zT && oT != WT.dom && (zT.written = !0), WT.dom.parentNode == IT)
            for (; oT && oT != WT.dom;) oT = MI(oT);
          else IT.insertBefore(WT.dom, oT);
          iT = WT.dom
        }
        for (oT = iT ? iT.nextSibling : IT.firstChild, zT && oT && (zT.written = !0); oT;) oT = MI(oT);
        this.length = kT
      }
    }

    function MI(TT) {
      let oT = TT.nextSibling;
      return TT.parentNode.removeChild(TT), oT
    }
    class rI extends KI {
      constructor(TT, oT) {
        super(oT), this.view = TT
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
          let oT = cI.get(TT);
          if (oT && this.owns(oT)) return oT;
          TT = TT.parentNode
        }
      }
      blockTiles(TT) {
        for (let oT = [], IT = this, iT = 0, zT = 0;;)
          if (iT == IT.children.length) {
            if (!oT.length) return;
            IT = IT.parent, IT.breakAfter && zT++, iT = oT.pop()
          } else {
            let kT = IT.children[iT++];
            if (kT instanceof AI) oT.push(iT), IT = kT, iT = 0;
            else {
              let oT = zT + kT.length,
                IT = TT(kT, zT);
              if (void 0 !== IT) return IT;
              zT = oT + kT.breakAfter
            }
          }
      }
      resolveBlock(TT, oT) {
        let IT, iT, zT = -1,
          kT = -1;
        if (this.blockTiles(((WT, XT) => {
            let BT = XT + WT.length;
            if (TT >= XT && TT <= BT) {
              if (WT.isWidget() && oT >= -1 && oT <= 1) {
                if (32 & WT.flags) return !0;
                16 & WT.flags && (IT = void 0)
              }(XT < TT || TT == BT && (oT < -1 ? WT.length : WT.covers(1))) && (!IT || !WT.isWidget() && IT.isWidget()) && (IT = WT, zT = TT - XT), (BT > TT || TT == XT && (oT > 1 ? WT.length : WT.covers(-1))) && (!iT || !WT.isWidget() && iT.isWidget()) && (iT = WT, kT = TT - XT)
            }
          })), !IT && !iT) throw new Error("No tile at position " + TT);
        return IT && oT < 0 || !iT ? {
          tile: IT,
          offset: zT
        } : {
          tile: iT,
          offset: kT
        }
      }
    }
    class AI extends KI {
      constructor(TT, oT) {
        super(TT), this.wrapper = oT
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
      static of (TT, oT) {
        let IT = new AI(oT || document.createElement(TT.tagName), TT);
        return oT || (IT.flags |= 4), IT
      }
    }
    class gI extends KI {
      constructor(TT, oT) {
        super(TT), this.attrs = oT
      }
      isLine() {
        return !0
      }
      static start(TT, oT, IT) {
        let iT = new gI(oT || document.createElement("div"), TT);
        return oT && IT || (iT.flags |= 4), iT
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(TT, oT, IT) {
        let iT = null,
          zT = -1,
          kT = null,
          WT = -1;
        ! function TT(XT, BT) {
          for (let FT = 0, ST = 0; FT < XT.children.length && ST <= BT; FT++) {
            let DT = XT.children[FT],
              LT = ST + DT.length;
            LT >= BT && (DT.isComposite() ? TT(DT, BT - ST) : (!kT || kT.isHidden && (oT > 0 || IT && hI(kT, DT))) && (LT > BT || 32 & DT.flags) ? (kT = DT, WT = BT - ST) : (ST < BT || 16 & DT.flags && !DT.isHidden) && (iT = DT, zT = BT - ST)), ST = LT
          }
        }(this, TT);
        let XT = (oT < 0 ? iT : kT) || iT || kT;
        return XT ? {
          tile: XT,
          offset: XT == iT ? zT : WT
        } : null
      }
      coordsIn(TT, oT) {
        let IT = this.resolveInline(TT, oT, !0);
        return IT ? IT.tile.coordsIn(Math.max(0, IT.offset), oT) : function(TT) {
          let oT = TT.dom.lastChild;
          if (!oT) return TT.dom.getBoundingClientRect();
          let IT = lT(oT);
          return IT[IT.length - 1] || null
        }(this)
      }
      domIn(TT, oT) {
        let IT = this.resolveInline(TT, oT);
        if (IT) {
          let {
            tile: TT,
            offset: iT
          } = IT;
          if (this.dom.contains(TT.dom)) return TT.isText() ? new Bo(TT.dom, Math.min(TT.dom.nodeValue.length, iT)) : TT.domPosFor(iT, 16 & TT.flags ? 1 : 32 & TT.flags ? -1 : oT);
          let zT = IT.tile.parent,
            kT = !1;
          for (let oT of zT.children) {
            if (kT) return new Bo(oT.dom, 0);
            oT == IT.tile && (kT = !0)
          }
        }
        return new Bo(this.dom, 0)
      }
    }

    function hI(TT, oT) {
      let IT = TT.coordsIn(0, 1),
        iT = oT.coordsIn(0, 1);
      return IT && iT && iT.top < IT.bottom
    }
    class wI extends KI {
      constructor(TT, oT) {
        super(TT), this.mark = oT
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (TT, oT) {
        let IT = new wI(oT || document.createElement(TT.tagName), TT);
        return oT || (IT.flags |= 4), IT
      }
    }
    class mI extends cI {
      constructor(TT, oT) {
        super(TT, oT.length), this.text = oT
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
      coordsIn(TT, oT) {
        let IT = this.dom.nodeValue.length;
        TT > IT && (TT = IT);
        let iT = TT,
          zT = TT,
          kT = 0;
        0 == TT && oT < 0 || TT == IT && oT >= 0 ? eT.chrome || eT.gecko || (TT ? (iT--, kT = 1) : zT < IT && (zT++, kT = -1)) : oT < 0 ? iT-- : zT < IT && zT++;
        let WT = io(this.dom, iT, zT).getClientRects();
        if (!WT.length) return null;
        let XT = WT[(kT ? kT < 0 : oT >= 0) ? 0 : WT.length - 1];
        return eT.safari && !kT && 0 == XT.width && (XT = Array.prototype.find.call(WT, (TT => TT.width)) || XT), kT ? yT(XT, kT < 0) : XT || null
      }
      static of (TT, oT) {
        let IT = new mI(oT || document.createTextNode(TT), TT);
        return oT || (IT.flags |= 2), IT
      }
    }
    class eI extends cI {
      constructor(TT, oT, IT, iT) {
        super(TT, oT, iT), this.widget = IT
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
      coordsIn(TT, oT) {
        return this.coordsInWidget(TT, oT, !1)
      }
      coordsInWidget(TT, oT, IT) {
        let iT = this.widget.coordsAt(this.dom, TT, oT);
        if (iT) return iT;
        if (IT) return yT(this.dom.getBoundingClientRect(), this.length ? 0 == TT : oT <= 0);
        {
          let oT = this.dom.getClientRects(),
            IT = null;
          if (!oT.length) return null;
          let iT = !!(16 & this.flags) || !(32 & this.flags) && TT > 0;
          for (let zT = iT ? oT.length - 1 : 0; IT = oT[zT], !(TT > 0 ? 0 == zT : zT == oT.length - 1 || IT.top < IT.bottom); zT += iT ? -1 : 1);
          return yT(IT, !iT)
        }
      }
      get overrideDOMText() {
        if (!this.length) return iT.N.empty;
        let {
          root: TT
        } = this;
        if (!TT) return iT.N.empty;
        let oT = this.posAtStart;
        return TT.view.state.doc.slice(oT, oT + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (TT, oT, IT, iT, zT) {
        return zT || (zT = TT.toDOM(oT), TT.editable || (zT.contentEditable = "false")), new eI(zT, IT, TT, iT)
      }
    }
    class RI extends cI {
      constructor(TT) {
        let oT = document.createElement("img");
        oT.className = "cm-widgetBuffer", oT.setAttribute("aria-hidden", "true"), super(oT, 0, TT)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return iT.N.empty
      }
      coordsIn(TT) {
        return this.dom.getBoundingClientRect()
      }
    }
    class uI {
      constructor(TT) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = TT
      }
      advance(TT, oT, IT) {
        let {
          tile: iT,
          index: zT,
          beforeBreak: kT,
          parents: WT
        } = this;
        for (; TT || oT > 0;)
          if (iT.isComposite())
            if (kT) {
              if (!TT) break;
              IT && IT.break(), TT--, kT = !1
            } else if (zT == iT.children.length) {
          if (!TT && !WT.length) break;
          IT && IT.leave(iT), kT = !!iT.breakAfter, ({
            tile: iT,
            index: zT
          } = WT.pop()), zT++
        } else {
          let XT = iT.children[zT],
            BT = XT.breakAfter;
          !(oT > 0 ? XT.length <= TT : XT.length < TT) || IT && !1 === IT.skip(XT, 0, XT.length) && XT.isComposite ? (WT.push({
            tile: iT,
            index: zT
          }), iT = XT, zT = 0, IT && XT.isComposite() && IT.enter(XT)) : (kT = !!BT, zT++, TT -= XT.length)
        } else if (zT == iT.length) kT = !!iT.breakAfter, ({
          tile: iT,
          index: zT
        } = WT.pop()), zT++;
        else {
          if (!TT) break;
          {
            let oT = Math.min(TT, iT.length - zT);
            IT && IT.skip(iT, zT, zT + oT), TT -= oT, zT += oT
          }
        }
        return this.tile = iT, this.index = zT, this.beforeBreak = kT, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class vI {
      constructor(TT, oT, IT, iT) {
        this.from = TT, this.to = oT, this.wrapper = IT, this.rank = iT
      }
    }
    class EI {
      constructor(TT, oT, IT) {
        this.cache = TT, this.root = oT, this.blockWrappers = IT, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(TT, oT, IT, iT) {
        var zT;
        this.flushBuffer();
        let kT = this.ensureMarks(oT, IT),
          WT = kT.lastChild;
        if (WT && WT.isText() && !(8 & WT.flags) && WT.length + TT.length < 512) {
          this.cache.reused.set(WT, 2), (kT.children[kT.children.length - 1] = new mI(WT.dom, WT.text + TT)).parent = kT
        } else kT.append(iT || mI.of(TT, null === (zT = this.cache.find(mI)) || void 0 === zT ? void 0 : zT.dom));
        this.pos += TT.length, this.afterWidget = null
      }
      addComposition(TT, oT) {
        let IT = this.curLine;
        IT.dom != oT.line.dom && (IT.setDOM(this.cache.reused.has(oT.line) ? YI(oT.line.dom) : oT.line.dom), this.cache.reused.set(oT.line, 2));
        let iT = IT;
        for (let WT = oT.marks.length - 1; WT >= 0; WT--) {
          let TT = oT.marks[WT],
            IT = iT.lastChild;
          if (IT instanceof wI && IT.mark.eq(TT.mark)) IT.dom != TT.dom && IT.setDOM(YI(TT.dom)), iT = IT;
          else {
            if (this.cache.reused.get(TT)) {
              let oT = cI.get(TT.dom);
              oT && oT.setDOM(YI(TT.dom))
            }
            let oT = wI.of(TT.mark, TT.dom);
            iT.append(oT), iT = oT
          }
          this.cache.reused.set(TT, 2)
        }
        let zT = cI.get(TT.text);
        zT && this.cache.reused.set(zT, 2);
        let kT = new mI(TT.text, TT.text.nodeValue);
        kT.flags |= 8, iT.append(kT)
      }
      addInlineWidget(TT, oT, IT) {
        let iT = this.afterWidget && 48 & TT.flags && (48 & this.afterWidget.flags) == (48 & TT.flags);
        iT || this.flushBuffer();
        let zT = this.ensureMarks(oT, IT);
        iT || 16 & TT.flags || zT.append(this.getBuffer(1)), zT.append(TT), this.pos += TT.length, this.afterWidget = TT
      }
      addMark(TT, oT, IT) {
        this.flushBuffer(), this.ensureMarks(oT, IT).append(TT), this.pos += TT.length, this.afterWidget = null
      }
      addBlockWidget(TT) {
        this.getBlockPos().append(TT), this.pos += TT.length, this.lastBlock = TT, this.endLine()
      }
      continueWidget(TT) {
        (this.afterWidget || this.lastBlock).length += TT, this.pos += TT
      }
      addLineStart(TT, oT) {
        var IT;
        TT || (TT = aI);
        let iT = gI.start(TT, oT || (null === (IT = this.cache.find(gI)) || void 0 === IT ? void 0 : IT.dom), !!oT);
        this.getBlockPos().append(this.lastBlock = this.curLine = iT)
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
      ensureMarks(TT, oT) {
        var IT;
        let iT = this.curLine;
        for (let zT = TT.length - 1; zT >= 0; zT--) {
          let kT, WT = TT[zT];
          if (oT > 0 && (kT = iT.lastChild) && kT instanceof wI && kT.mark.eq(WT)) iT = kT, oT--;
          else {
            let TT = wI.of(WT, null === (IT = this.cache.find(wI, (TT => TT.mark.eq(WT)))) || void 0 === IT ? void 0 : IT.dom);
            iT.append(TT), iT = TT, oT = 0
          }
        }
        return iT
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let TT = this.curLine.lastChild;
          TT && UI(this.curLine, !1) && ("BR" == TT.dom.nodeName || !TT.isWidget() || eT.ios && UI(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(OI, 0, 32) || new eI(OI.toDOM(), 0, OI, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let TT = this.wrappers.length - 1; TT >= 0; TT--) this.wrappers[TT].to < this.pos && this.wrappers.splice(TT, 1);
        for (let TT = this.blockWrappers; TT.value && TT.from <= this.pos; TT.next())
          if (TT.to >= this.pos) {
            let oT = new vI(TT.from, TT.to, TT.value, TT.rank),
              IT = this.wrappers.length;
            for (; IT > 0 && (this.wrappers[IT - 1].rank - oT.rank || this.wrappers[IT - 1].to - oT.to) < 0;) IT--;
            this.wrappers.splice(IT, 0, oT)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var TT;
        this.updateBlockWrappers();
        let oT = this.root;
        for (let IT of this.wrappers) {
          let iT = oT.lastChild;
          if (IT.from < this.pos && iT instanceof AI && iT.wrapper.eq(IT.wrapper)) oT = iT;
          else {
            let iT = AI.of(IT.wrapper, null === (TT = this.cache.find(AI, (TT => TT.wrapper.eq(IT.wrapper)))) || void 0 === TT ? void 0 : TT.dom);
            oT.append(iT), oT = iT
          }
        }
        return oT
      }
      blockPosCovered() {
        let TT = this.lastBlock;
        return null != TT && !TT.breakAfter && (!TT.isWidget() || (160 & TT.flags) > 0)
      }
      getBuffer(TT) {
        let oT = 2 | (TT < 0 ? 16 : 32),
          IT = this.cache.find(RI, void 0, 1);
        return IT && (IT.flags = oT), IT || new RI(oT)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class fI {
      constructor(TT) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = TT.iter()
      }
      skip(TT) {
        this.textOff + TT <= this.text.length ? this.textOff += TT : (this.skipCount += TT - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(TT) {
        if (this.textOff == this.text.length) {
          let {
            value: oT,
            lineBreak: IT,
            done: iT
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, iT) throw new Error("Ran out of text content when drawing inline views");
          this.text = oT;
          let zT = this.textOff = Math.min(TT, oT.length);
          return IT ? null : oT.slice(0, zT)
        }
        let oT = Math.min(this.text.length, this.textOff + TT),
          IT = this.text.slice(this.textOff, oT);
        return this.textOff = oT, IT
      }
    }
    const CI = [eI, gI, mI, wI, RI, AI, rI];
    for (let QW = 0; QW < CI.length; QW++) CI[QW].bucket = QW;
    class jI {
      constructor(TT) {
        this.view = TT, this.buckets = CI.map((() => [])), this.index = CI.map((() => 0)), this.reused = new Map
      }
      add(TT) {
        let oT = TT.constructor.bucket,
          IT = this.buckets[oT];
        IT.length < 6 ? IT.push(TT) : IT[this.index[oT] = (this.index[oT] + 1) % 6] = TT
      }
      find(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          iT = TT.bucket,
          zT = this.buckets[iT],
          kT = this.index[iT];
        for (let WT = zT.length - 1; WT >= 0; WT--) {
          let TT = (WT + kT) % zT.length,
            XT = zT[TT];
          if ((!oT || oT(XT)) && !this.reused.has(XT)) return zT.splice(TT, 1), TT < kT && this.index[iT]--, this.reused.set(XT, IT), XT
        }
        return null
      }
      findWidget(TT, oT, IT) {
        let iT = this.buckets[0];
        if (iT.length)
          for (let zT = 0, kT = 0;; zT++) {
            if (zT == iT.length) {
              if (kT) return null;
              kT = 1, zT = 0
            }
            let WT = iT[zT];
            if (!this.reused.has(WT) && (0 == kT ? WT.widget.compare(TT) : WT.widget.constructor == TT.constructor && TT.updateDOM(WT.dom, this.view, WT.widget))) return iT.splice(zT, 1), zT < this.index[0] && this.index[0]--, WT.widget == TT && WT.length == oT && (497 & WT.flags) == IT ? (this.reused.set(WT, 1), WT) : (this.reused.set(WT, 2), new eI(WT.dom, oT, TT, -498 & WT.flags | IT))
          }
      }
      reuse(TT) {
        return this.reused.set(TT, 1), TT
      }
      maybeReuse(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(TT)) return this.reused.set(TT, oT), TT.dom
      }
      clear() {
        for (let TT = 0; TT < this.buckets.length; TT++) this.buckets[TT].length = this.index[TT] = 0
      }
    }
    class JI {
      constructor(TT, oT, IT, zT, kT) {
        this.view = TT, this.dz = zT, this.disallowBlockEffectsFor = kT, this.openWidget = !1, this.openMarks = 0, this.cache = new jI(TT), this.text = new fI(TT.state.doc), this.builder = new EI(this.cache, new rI(TT, TT.contentDOM), iT.D.iter(IT)), this.cache.reused.set(oT, 2), this.old = new uI(oT), this.reuseWalker = {
          skip: (TT, oT, IT) => {
            if (this.cache.add(TT), TT.isComposite()) return !1
          },
          enter: TT => this.cache.add(TT),
          leave: () => {},
          break: () => {}
        }
      }
      run(TT, oT) {
        let IT = oT && this.getCompositionContext(oT.text);
        for (let iT = 0, zT = 0, kT = 0;;) {
          let WT = kT < TT.length ? TT[kT++] : null,
            XT = WT ? WT.fromA : this.old.root.length;
          if (XT > iT) {
            let TT = XT - iT;
            this.preserve(TT, !kT, !WT), iT = XT, zT += TT
          }
          if (!WT) break;
          oT && WT.fromA <= oT.range.fromA && WT.toA >= oT.range.toA ? (this.forward(WT.fromA, oT.range.fromA, oT.range.fromA < oT.range.toA ? 1 : -1), this.emit(zT, oT.range.fromB), this.cache.clear(), this.builder.addComposition(oT, IT), this.text.skip(oT.range.toB - oT.range.fromB), this.forward(oT.range.fromA, WT.toA), this.emit(oT.range.toB, WT.toB)) : (this.forward(WT.fromA, WT.toA), this.emit(zT, WT.toB)), zT = WT.toB, iT = WT.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(TT, oT, IT) {
        let iT = function(TT) {
            let oT = [];
            for (let IT = TT.parents.length; IT > 1; IT--) {
              let iT = IT == TT.parents.length ? TT.tile : TT.parents[IT].tile;
              iT instanceof wI && oT.push(iT.mark)
            }
            return oT
          }(this.old),
          zT = this.openMarks;
        this.old.advance(TT, IT ? 1 : -1, {
          skip: (TT, oT, IT) => {
            if (TT.isWidget())
              if (this.openWidget) this.builder.continueWidget(IT - oT);
              else {
                let kT = IT > 0 || oT < TT.length ? eI.of(TT.widget, this.view, IT - oT, 496 & TT.flags, this.cache.maybeReuse(TT)) : this.cache.reuse(TT);
                256 & kT.flags ? (kT.flags &= -2, this.builder.addBlockWidget(kT)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(kT, iT, zT), zT = iT.length)
              }
            else if (TT.isText()) this.builder.ensureLine(null), oT || IT != TT.length || this.cache.reused.has(TT) ? (this.cache.add(TT), this.builder.addText(TT.text.slice(oT, IT), iT, zT)) : this.builder.addText(TT.text, iT, zT, this.cache.reuse(TT)), zT = iT.length;
            else if (TT.isLine()) TT.flags &= -2, this.cache.reused.set(TT, 1), this.builder.addLine(TT);
            else if (TT instanceof RI) this.cache.add(TT);
            else {
              if (!(TT instanceof wI)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(TT, iT, zT), this.cache.reused.set(TT, 1), zT = iT.length
            }
            this.openWidget = !1
          },
          enter: TT => {
            TT.isLine() ? this.builder.addLineStart(TT.attrs, this.cache.maybeReuse(TT)) : (this.cache.add(TT), TT instanceof wI && iT.unshift(TT.mark)), this.openWidget = !1
          },
          leave: TT => {
            TT.isLine() ? iT.length && (iT.length = zT = 0) : TT instanceof wI && (iT.shift(), zT = Math.min(zT, iT.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(TT)
      }
      emit(TT, oT) {
        let IT = null,
          zT = this.builder,
          kT = 0,
          WT = iT.D.spans(this.dz, TT, oT, {
            point: (TT, oT, iT, WT, XT, BT) => {
              if (iT instanceof YT) {
                if (this.disallowBlockEffectsFor[BT]) {
                  if (iT.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (oT > this.view.state.doc.lineAt(TT).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (kT = WT.length, XT > WT.length) zT.continueWidget(oT - TT);
                else {
                  let kT = iT.widget || (iT.block ? QI.block : QI.inline),
                    BT = function(TT) {
                      let oT = TT.isReplace ? (TT.startSide < 0 ? 64 : 0) | (TT.endSide > 0 ? 128 : 0) : TT.startSide > 0 ? 32 : 16;
                      TT.block && (oT |= 256);
                      return oT
                    }(iT),
                    FT = this.cache.findWidget(kT, oT - TT, BT) || eI.of(kT, this.view, oT - TT, BT);
                  iT.block ? (iT.startSide > 0 && zT.addLineStartIfNotCovered(IT), zT.addBlockWidget(FT)) : (zT.ensureLine(IT), zT.addInlineWidget(FT, WT, XT))
                }
                IT = null
              } else IT = function(TT, oT) {
                let IT = oT.spec.attributes,
                  iT = oT.spec.class;
                if (!IT && !iT) return TT;
                TT || (TT = {
                  class: "cm-line"
                });
                IT && RT(IT, TT);
                iT && (TT.class += " " + iT);
                return TT
              }(IT, iT);
              oT > TT && this.text.skip(oT - TT)
            },
            span: (TT, oT, iT, kT) => {
              for (let WT = TT; WT < oT;) {
                let XT = this.text.next(Math.min(512, oT - WT));
                null == XT ? (zT.addLineStartIfNotCovered(IT), zT.addBreak(), WT++) : (zT.ensureLine(IT), zT.addText(XT, iT, WT == TT ? kT : iT.length), WT += XT.length), IT = null
              }
            }
          });
        zT.addLineStartIfNotCovered(IT), this.openWidget = WT > kT, this.openMarks = WT
      }
      forward(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        oT - TT <= 10 ? this.old.advance(oT - TT, IT, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(oT - TT - 10, -1), this.old.advance(5, IT, this.reuseWalker))
      }
      getCompositionContext(TT) {
        let oT = [],
          IT = null;
        for (let iT = TT.parentNode;; iT = iT.parentNode) {
          let TT = cI.get(iT);
          if (iT == this.view.contentDOM) break;
          TT instanceof wI ? oT.push(TT) : (null === TT || void 0 === TT ? void 0 : TT.isLine()) ? IT = TT : TT instanceof AI || ("DIV" != iT.nodeName || IT || iT == this.view.contentDOM ? IT || oT.push(wI.of(new UT({
            tagName: iT.nodeName.toLowerCase(),
            attributes: fT(iT)
          }), iT)) : IT = new gI(iT, aI))
        }
        return {
          line: IT,
          marks: oT
        }
      }
    }

    function UI(TT, oT) {
      let IT = TT => {
        for (let iT of TT.children)
          if ((oT ? iT.isText() : iT.length) || IT(iT)) return !0;
        return !1
      };
      return IT(TT)
    }
    const aI = {
      class: "cm-line"
    };

    function YI(TT) {
      let oT = cI.get(TT);
      return oT && oT.setDOM(TT.cloneNode()), TT
    }
    class QI extends CT {
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
    QI.inline = new QI("span"), QI.block = new QI("div");
    const OI = new class extends CT {
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
    class HI {
      constructor(TT) {
        this.view = TT, this.dz = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = JT.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new rI(TT, TT.contentDOM), this.updateInner([new DI(0, 0, 0, TT.state.doc.length)], null)
      }
      update(TT) {
        var oT;
        let IT = TT.changedRanges;
        this.minWidth > 0 && IT.length && (IT.every((TT => {
          let {
            fromA: oT,
            toA: IT
          } = TT;
          return IT < this.minWidthFrom || oT > this.minWidthTo
        })) ? (this.minWidthFrom = TT.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = TT.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(TT);
        let zT = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (oT = this.domChanged) || void 0 === oT ? void 0 : oT.newSel) ? zT = this.domChanged.newSel.head : function(TT, oT) {
          let IT = !1;
          oT && TT.iterChangedRanges(((TT, iT) => {
            TT < oT.to && iT > oT.from && (IT = !0)
          }));
          return IT
        }(TT.changes, this.hasComposition) || TT.selectionSet || (zT = TT.state.selection.main.head));
        let kT = zT > -1 ? function(TT, oT, IT) {
          let iT = qI(TT, IT);
          if (!iT) return null;
          let {
            node: zT,
            from: kT,
            to: WT
          } = iT, XT = zT.nodeValue;
          if (/[\n\r]/.test(XT)) return null;
          if (TT.state.doc.sliceString(iT.from, iT.to) != XT) return null;
          let BT = oT.invertedDesc;
          return {
            range: new DI(BT.mapPos(kT), BT.mapPos(WT), kT, WT),
            text: zT
          }
        }(this.view, TT.changes, zT) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: oT,
            to: iT
          } = this.hasComposition;
          IT = new DI(oT, iT, TT.changes.mapPos(oT, -1), TT.changes.mapPos(iT, 1)).addToSet(IT.slice())
        }
        this.hasComposition = kT ? {
          from: kT.range.fromB,
          to: kT.range.toB
        } : null, (eT.ie || eT.chrome) && !kT && TT && TT.state.doc.lines != TT.startState.doc.lines && (this.forceSelection = !0);
        let WT = this.dz,
          XT = this.blockWrappers;
        this.updateDeco();
        let BT = function(TT, oT, IT) {
          let zT = new ZI;
          return iT.D.compare(TT, oT, IT, zT), zT.changes
        }(WT, this.dz, TT.changes);
        BT.length && (IT = DI.extendWithRanges(IT, BT));
        let FT = function(TT, oT, IT) {
          let zT = new lI;
          return iT.D.compare(TT, oT, IT, zT), zT.changes
        }(XT, this.blockWrappers, TT.changes);
        return FT.length && (IT = DI.extendWithRanges(IT, FT)), kT && !IT.some((TT => TT.fromA <= kT.range.fromA && TT.toA >= kT.range.toA)) && (IT = kT.range.addToSet(IT.slice())), !(2 & this.tile.flags && 0 == IT.length) && (this.updateInner(IT, kT), TT.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(TT, oT) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: IT
        } = this.view;
        IT.ignore((() => {
          if (oT || TT.length) {
            let IT = this.tile,
              iT = new JI(this.view, IT, this.blockWrappers, this.dz, this.dynamicDecorationMap);
            oT && cI.get(oT.text) && iT.cache.reused.set(cI.get(oT.text), 2), this.tile = iT.run(TT, oT), nI(IT, iT.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let iT = eT.chrome || eT.ios ? {
            node: IT.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(iT), !iT || !iT.written && IT.selectionRange.focusNode == iT.node && this.tile.dom.contains(iT.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let iT = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let zT of this.tile.children) zT.isWidget() && zT.widget instanceof sI && iT.push(zT.dom);
        IT.updateGaps(iT)
      }
      updateEditContextFormatting(TT) {
        this.editContextFormatting = this.editContextFormatting.map(TT.changes);
        for (let oT of TT.transactions)
          for (let TT of oT.effects) TT.is(Go) && (this.editContextFormatting = TT.value)
      }
      updateSelection() {
        let TT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: oT
        } = this.tile, IT = this.view.root.activeElement, iT = IT == oT, zT = !iT && !(this.view.state.facet(bo) || oT.tabIndex > -1) && ZT(oT, this.view.observer.selectionRange) && !(IT && oT.contains(IT));
        if (!(iT || TT || zT)) return;
        let kT = this.forceSelection;
        this.forceSelection = !1;
        let WT, XT, BT = this.view.state.selection.main;
        if (BT.empty ? XT = WT = this.inlineDOMNearPos(BT.anchor, BT.assoc || 1) : (XT = this.inlineDOMNearPos(BT.head, BT.head == BT.from ? 1 : -1), WT = this.inlineDOMNearPos(BT.anchor, BT.anchor == BT.from ? 1 : -1)), eT.gecko && BT.empty && !this.hasComposition && (1 == (FT = WT).node.nodeType && FT.node.firstChild && (0 == FT.offset || "false" == FT.node.childNodes[FT.offset - 1].contentEditable) && (FT.offset == FT.node.childNodes.length || "false" == FT.node.childNodes[FT.offset].contentEditable))) {
          let TT = document.createTextNode("");
          this.view.observer.ignore((() => WT.node.insertBefore(TT, WT.node.childNodes[WT.offset] || null))), WT = XT = new Bo(TT, 0), kT = !0
        }
        var FT;
        let ST = this.view.observer.selectionRange;
        !kT && ST.focusNode && (sT(WT.node, WT.offset, ST.anchorNode, ST.anchorOffset) && sT(XT.node, XT.offset, ST.focusNode, ST.focusOffset) || this.suppressWidgetCursorChange(ST, BT)) || (this.view.observer.ignore((() => {
          eT.android && eT.chrome && oT.contains(ST.focusNode) && function(TT, oT) {
            for (let IT = TT; IT && IT != oT; IT = IT.assignedSlot || IT.parentNode)
              if (1 == IT.nodeType && "false" == IT.contentEditable) return !0;
            return !1
          }(ST.focusNode, oT) && (oT.blur(), oT.focus({
            preventScroll: !0
          }));
          let TT = nT(this.view.root);
          if (TT)
            if (BT.empty) {
              if (eT.gecko) {
                let TT = (iT = WT.node, kT = WT.offset, 1 != iT.nodeType ? 0 : (kT && "false" == iT.childNodes[kT - 1].contentEditable ? 1 : 0) | (kT < iT.childNodes.length && "false" == iT.childNodes[kT].contentEditable ? 2 : 0));
                if (TT && 3 != TT) {
                  let oT = (1 == TT ? Wo : Xo)(WT.node, WT.offset);
                  oT && (WT = new Bo(oT.node, oT.offset))
                }
              }
              TT.collapse(WT.node, WT.offset), null != BT.bidiLevel && void 0 !== TT.caretBidiLevel && (TT.caretBidiLevel = BT.bidiLevel)
            } else if (TT.extend) {
            TT.collapse(WT.node, WT.offset);
            try {
              TT.extend(XT.node, XT.offset)
            } catch (FT) {}
          } else {
            let oT = document.createRange();
            BT.anchor > BT.head && ([WT, XT] = [XT, WT]), oT.setEnd(XT.node, XT.offset), oT.setStart(WT.node, WT.offset), TT.removeAllRanges(), TT.addRange(oT)
          } else;
          var iT, kT;
          zT && this.view.root.activeElement == oT && (oT.blur(), IT && IT.focus())
        })), this.view.observer.setSelectionRange(WT, XT)), this.impreciseAnchor = WT.precise ? null : new Bo(ST.anchorNode, ST.anchorOffset), this.impreciseHead = XT.precise ? null : new Bo(ST.focusNode, ST.focusOffset)
      }
      suppressWidgetCursorChange(TT, oT) {
        return this.hasComposition && oT.empty && sT(TT.focusNode, TT.focusOffset, TT.anchorNode, TT.anchorOffset) && this.posFromDOM(TT.focusNode, TT.focusOffset) == oT.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: TT
        } = this, oT = TT.state.selection.main, IT = nT(TT.root), {
          anchorNode: iT,
          anchorOffset: zT
        } = TT.observer.selectionRange;
        if (!IT || !oT.empty || !oT.assoc || !IT.modify) return;
        let kT = this.lineAt(oT.head, oT.assoc);
        if (!kT) return;
        let WT = kT.posAtStart;
        if (oT.head == WT || oT.head == WT + kT.length) return;
        let XT = this.coordsAt(oT.head, -1),
          BT = this.coordsAt(oT.head, 1);
        if (!XT || !BT || XT.bottom > BT.top) return;
        let FT = this.domAtPos(oT.head + oT.assoc, oT.assoc);
        IT.collapse(FT.node, FT.offset), IT.modify("move", oT.assoc < 0 ? "forward" : "backward", "lineboundary"), TT.observer.readSelectionRange();
        let ST = TT.observer.selectionRange;
        TT.docView.posFromDOM(ST.anchorNode, ST.anchorOffset) != oT.from && IT.collapse(iT, zT)
      }
      posFromDOM(TT, oT) {
        let IT = this.tile.nearest(TT);
        if (!IT) return 2 & this.tile.dom.compareDocumentPosition(TT) ? 0 : this.view.state.doc.length;
        let iT = IT.posAtStart;
        if (!IT.isComposite()) return IT.isText() ? TT == IT.dom ? iT + oT : iT + (oT ? IT.length : 0) : iT;
        {
          let zT;
          if (TT == IT.dom) zT = IT.dom.childNodes[oT];
          else {
            let iT = 0 == bT(TT) ? 0 : 0 == oT ? -1 : 1;
            for (;;) {
              let oT = TT.parentNode;
              if (oT == IT.dom) break;
              0 == iT && oT.firstChild != oT.lastChild && (iT = TT == oT.firstChild ? -1 : 1), TT = oT
            }
            zT = iT < 0 ? TT : TT.nextSibling
          }
          if (zT == IT.dom.firstChild) return iT;
          for (; zT && !cI.get(zT);) zT = zT.nextSibling;
          if (!zT) return iT + IT.length;
          for (let TT = 0, oT = iT;; TT++) {
            let iT = IT.children[TT];
            if (iT.dom == zT) return oT;
            oT += iT.length + iT.breakAfter
          }
        }
      }
      domAtPos(TT, oT) {
        let {
          tile: IT,
          offset: iT
        } = this.tile.resolveBlock(TT, oT);
        return IT.isWidget() ? IT.domPosFor(TT, oT) : IT.domIn(iT, oT)
      }
      inlineDOMNearPos(TT, oT) {
        let IT, iT, zT = -1,
          kT = !1,
          WT = -1,
          XT = !1;
        return this.tile.blockTiles(((oT, BT) => {
          if (oT.isWidget()) {
            if (32 & oT.flags && BT >= TT) return !0;
            16 & oT.flags && (kT = !0)
          } else {
            let FT = BT + oT.length;
            if (BT <= TT && (IT = oT, zT = TT - BT, kT = FT < TT), FT >= TT && !iT && (iT = oT, WT = TT - BT, XT = BT > TT), BT > TT && iT) return !0
          }
        })), IT || iT ? (kT && iT ? IT = null : XT && IT && (iT = null), IT && oT < 0 || !iT ? IT.domIn(zT, oT) : iT.domIn(WT, oT)) : this.domAtPos(TT, oT)
      }
      coordsAt(TT, oT) {
        let {
          tile: IT,
          offset: iT
        } = this.tile.resolveBlock(TT, oT);
        return IT.isWidget() ? IT.widget instanceof sI ? null : IT.coordsInWidget(iT, oT, !0) : IT.coordsIn(iT, oT)
      }
      lineAt(TT, oT) {
        let {
          tile: IT
        } = this.tile.resolveBlock(TT, oT);
        return IT.isLine() ? IT : null
      }
      coordsForChar(TT) {
        let {
          tile: oT,
          offset: IT
        } = this.tile.resolveBlock(TT, 1);
        if (!oT.isLine()) return null;
        return function TT(oT, IT) {
          if (oT.isComposite())
            for (let iT of oT.children) {
              if (iT.length >= IT) {
                let oT = TT(iT, IT);
                if (oT) return oT
              }
              if ((IT -= iT.length) < 0) break
            } else if (oT.isText() && IT < oT.length) {
              let TT = (0, iT.ab)(oT.text, IT);
              if (TT == IT) return null;
              let zT = io(oT.dom, IT, TT).getClientRects();
              for (let oT = 0; oT < zT.length; oT++) {
                let TT = zT[oT];
                if (oT == zT.length - 1 || TT.top < TT.bottom && TT.left < TT.right) return TT
              }
            } return null
        }(oT, IT)
      }
      measureVisibleLineHeights(TT) {
        let oT = [],
          {
            from: IT,
            to: iT
          } = TT,
          zT = this.view.contentDOM.clientWidth,
          kT = zT > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          WT = -1,
          XT = this.view.textDirection == Fo.LTR,
          BT = 0,
          FT = (TT, ST, DT) => {
            for (let LT = 0; LT < TT.children.length && !(ST > iT); LT++) {
              let iT = TT.children[LT],
                xT = ST + iT.length,
                cT = iT.dom.getBoundingClientRect(),
                {
                  height: KT
                } = cT;
              if (DT && !LT && (BT += cT.top - DT.top), iT instanceof AI) xT > IT && FT(iT, ST, cT);
              else if (ST >= IT && (BT > 0 && oT.push(-BT), oT.push(KT + BT), BT = 0, kT)) {
                let TT = iT.dom.lastChild,
                  oT = TT ? lT(TT) : [];
                if (oT.length) {
                  let TT = oT[oT.length - 1],
                    IT = XT ? TT.right - cT.left : cT.right - TT.left;
                  IT > WT && (WT = IT, this.minWidth = zT, this.minWidthFrom = ST, this.minWidthTo = xT)
                }
              }
              DT && LT == TT.children.length - 1 && (BT += DT.bottom - cT.bottom), ST = xT + iT.breakAfter
            }
          };
        return FT(this.tile, 0, null), oT
      }
      textDirectionAt(TT) {
        let {
          tile: oT
        } = this.tile.resolveBlock(TT, 1);
        return "rtl" == getComputedStyle(oT.dom).direction ? Fo.RTL : Fo.LTR
      }
      measureTextSize() {
        let TT = this.tile.blockTiles((TT => {
          if (TT.isLine() && TT.children.length && TT.length <= 20) {
            let oT, IT = 0;
            for (let iT of TT.children) {
              if (!iT.isText() || /[^ -~]/.test(iT.text)) return;
              let TT = lT(iT.dom);
              if (1 != TT.length) return;
              IT += TT[0].width, oT = TT[0].height
            }
            if (IT) return {
              lineHeight: TT.dom.getBoundingClientRect().height,
              charWidth: IT / TT.length,
              textHeight: oT
            }
          }
        }));
        if (TT) return TT;
        let oT, IT, iT, zT = document.createElement("div");
        return zT.className = "cm-line", zT.style.width = "99999px", zT.style.position = "absolute", zT.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(zT);
          let TT = lT(zT.firstChild)[0];
          oT = zT.getBoundingClientRect().height, IT = TT && TT.width ? TT.width / 27 : 7, iT = TT && TT.height ? TT.height : oT, zT.remove()
        })), {
          lineHeight: oT,
          charWidth: IT,
          textHeight: iT
        }
      }
      computeBlockGapDeco() {
        let TT = [],
          oT = this.view.viewState;
        for (let IT = 0, iT = 0;; iT++) {
          let zT = iT == oT.viewports.length ? null : oT.viewports[iT],
            kT = zT ? zT.from - 1 : this.view.state.doc.length;
          if (kT > IT) {
            let iT = (oT.lineBlockAt(kT).bottom - oT.lineBlockAt(IT).top) / this.view.scaleY;
            TT.push(JT.replace({
              widget: new sI(iT),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(IT, kT))
          }
          if (!zT) break;
          IT = zT.to + 1
        }
        return JT.set(TT)
      }
      updateDeco() {
        let TT = 1,
          oT = this.view.state.facet(II).map((oT => (this.dynamicDecorationMap[TT++] = "function" == typeof oT) ? oT(this.view) : oT)),
          IT = !1,
          zT = this.view.state.facet(zI).map(((TT, oT) => {
            let iT = "function" == typeof TT;
            return iT && (IT = !0), iT ? TT(this.view) : TT
          }));
        for (zT.length && (this.dynamicDecorationMap[TT++] = IT, oT.push(iT.D.join(zT))), this.dz = [this.editContextFormatting, ...oT, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; TT < this.dz.length;) this.dynamicDecorationMap[TT++] = !1;
        this.blockWrappers = this.view.state.facet(iI).map((TT => "function" == typeof TT ? TT(this.view) : TT))
      }
      scrollIntoView(TT) {
        var oT;
        if (TT.isSnapshot) {
          let oT = this.view.viewState.lineBlockAt(TT.range.head);
          return this.view.scrollDOM.scrollTop = oT.top - TT.yMargin, void(this.view.scrollDOM.scrollLeft = TT.xMargin)
        }
        for (let ST of this.view.state.facet(Zo)) try {
          if (ST(this.view, TT.range, TT)) return !0
        } catch (FT) {
          po(this.view.state, FT, "scroll handler")
        }
        let IT, {
            range: iT
          } = TT,
          zT = this.coordsAt(iT.head, null !== (oT = iT.assoc) && void 0 !== oT ? oT : iT.empty ? 0 : iT.head > iT.anchor ? -1 : 1);
        if (!zT) return;
        !iT.empty && (IT = this.coordsAt(iT.anchor, iT.anchor > iT.head ? -1 : 1)) && (zT = {
          left: Math.min(zT.left, IT.left),
          top: Math.min(zT.top, IT.top),
          right: Math.max(zT.right, IT.right),
          bottom: Math.max(zT.bottom, IT.bottom)
        });
        let kT = FI(this.view),
          WT = {
            left: zT.left - kT.left,
            top: zT.top - kT.top,
            right: zT.right + kT.right,
            bottom: zT.bottom + kT.bottom
          },
          {
            offsetWidth: XT,
            offsetHeight: BT
          } = this.view.scrollDOM;
        if (function(TT, oT, IT, iT, zT, kT, WT, XT) {
            let BT = TT.ownerDocument,
              FT = BT.defaultView || window;
            for (let ST = TT, DT = !1; ST && !DT;)
              if (1 == ST.nodeType) {
                let TT, LT = ST == BT.body,
                  xT = 1,
                  cT = 1;
                if (LT) TT = NT(FT);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(ST).position) && (DT = !0), ST.scrollHeight <= ST.clientHeight && ST.scrollWidth <= ST.clientWidth) {
                    ST = ST.assignedSlot || ST.parentNode;
                    continue
                  }
                  let oT = ST.getBoundingClientRect();
                  ({
                    scaleX: xT,
                    scaleY: cT
                  } = PT(ST, oT)), TT = {
                    left: oT.left,
                    right: oT.left + ST.clientWidth * xT,
                    top: oT.top,
                    bottom: oT.top + ST.clientHeight * cT
                  }
                }
                let KT = 0,
                  MT = 0;
                if ("nearest" == zT) oT.top < TT.top + WT ? (MT = oT.top - (TT.top + WT), IT > 0 && oT.bottom > TT.bottom + MT && (MT = oT.bottom - TT.bottom + WT)) : oT.bottom > TT.bottom - WT && (MT = oT.bottom - TT.bottom + WT, IT < 0 && oT.top - MT < TT.top && (MT = oT.top - (TT.top + WT)));
                else {
                  let iT = oT.bottom - oT.top,
                    kT = TT.bottom - TT.top;
                  MT = ("center" == zT && iT <= kT ? oT.top + iT / 2 - kT / 2 : "start" == zT || "center" == zT && IT < 0 ? oT.top - WT : oT.bottom - kT + WT) - TT.top
                }
                if ("nearest" == iT ? oT.left < TT.left + kT ? (KT = oT.left - (TT.left + kT), IT > 0 && oT.right > TT.right + KT && (KT = oT.right - TT.right + kT)) : oT.right > TT.right - kT && (KT = oT.right - TT.right + kT, IT < 0 && oT.left < TT.left + KT && (KT = oT.left - (TT.left + kT))) : KT = ("center" == iT ? oT.left + (oT.right - oT.left) / 2 - (TT.right - TT.left) / 2 : "start" == iT == XT ? oT.left - kT : oT.right - (TT.right - TT.left) + kT) - TT.left, KT || MT)
                  if (LT) FT.scrollBy(KT, MT);
                  else {
                    let TT = 0,
                      IT = 0;
                    if (MT) {
                      let TT = ST.scrollTop;
                      ST.scrollTop += MT / cT, IT = (ST.scrollTop - TT) * cT
                    }
                    if (KT) {
                      let oT = ST.scrollLeft;
                      ST.scrollLeft += KT / xT, TT = (ST.scrollLeft - oT) * xT
                    }
                    oT = {
                      left: oT.left - TT,
                      top: oT.top - IT,
                      right: oT.right - TT,
                      bottom: oT.bottom - IT
                    }, TT && Math.abs(TT - KT) < 1 && (iT = "nearest"), IT && Math.abs(IT - MT) < 1 && (zT = "nearest")
                  } if (LT) break;
                (oT.top < TT.top || oT.bottom > TT.bottom || oT.left < TT.left || oT.right > TT.right) && (oT = {
                  left: Math.max(oT.left, TT.left),
                  right: Math.min(oT.right, TT.right),
                  top: Math.max(oT.top, TT.top),
                  bottom: Math.min(oT.bottom, TT.bottom)
                }), ST = ST.assignedSlot || ST.parentNode
              } else {
                if (11 != ST.nodeType) break;
                ST = ST.host
              }
          }(this.view.scrollDOM, WT, iT.head < iT.anchor ? -1 : 1, TT.x, TT.y, Math.max(Math.min(TT.xMargin, XT), -XT), Math.max(Math.min(TT.yMargin, BT), -BT), this.view.textDirection == Fo.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (zT.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || zT.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let TT = this.view.docView.lineAt(iT.head, 1);
          TT && TT.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(TT) {
        let oT = TT => TT.isWidget() || TT.children.some(oT);
        return oT(this.tile.resolveBlock(TT, 1).tile)
      }
      destroy() {
        nI(this.tile)
      }
    }

    function nI(TT, oT) {
      let IT = null === oT || void 0 === oT ? void 0 : oT.get(TT);
      if (1 != IT) {
        null == IT && TT.destroy();
        for (let IT of TT.children) nI(IT, oT)
      }
    }

    function qI(TT, oT) {
      let IT = TT.observer.selectionRange;
      if (!IT.focusNode) return null;
      let iT = Wo(IT.focusNode, IT.focusOffset),
        zT = Xo(IT.focusNode, IT.focusOffset),
        kT = iT || zT;
      if (zT && iT && zT.node != iT.node) {
        let oT = cI.get(zT.node);
        if (!oT || oT.isText() && oT.text != zT.node.nodeValue) kT = zT;
        else if (TT.docView.lastCompositionAfterCursor) {
          let TT = cI.get(iT.node);
          !TT || TT.isText() && TT.text != iT.node.nodeValue || (kT = zT)
        }
      }
      if (TT.docView.lastCompositionAfterCursor = kT != iT, !kT) return null;
      let WT = oT - kT.offset;
      return {
        from: WT,
        to: WT + kT.node.nodeValue.length,
        node: kT.node
      }
    }
    let ZI = class {
      constructor() {
        this.changes = []
      }
      compareRange(TT, oT) {
        OT(TT, oT, this.changes)
      }
      comparePoint(TT, oT) {
        OT(TT, oT, this.changes)
      }
      boundChange(TT) {
        OT(TT, TT, this.changes)
      }
    };
    class lI {
      constructor() {
        this.changes = []
      }
      compareRange(TT, oT) {
        OT(TT, oT, this.changes)
      }
      comparePoint() {}
      boundChange(TT) {
        OT(TT, TT, this.changes)
      }
    }
    class sI extends CT {
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

    function tI(TT, oT, IT) {
      let iT = TT.lineBlockAt(oT);
      if (Array.isArray(iT.type)) {
        let TT;
        for (let zT of iT.type) {
          if (zT.from > oT) break;
          if (!(zT.to < oT)) {
            if (zT.from < oT && zT.to > oT) return zT;
            TT && (zT.type != jT.Text || TT.type == zT.type && !(IT < 0 ? zT.from < oT : zT.to > oT)) || (TT = zT)
          }
        }
        return TT || iT
      }
      return iT
    }

    function GI(TT, oT, IT, iT) {
      let zT = TT.state.doc.lineAt(oT.head),
        kT = TT.bidiSpans(zT),
        WT = TT.textDirectionAt(zT.from);
      for (let XT = oT, BT = null;;) {
        let oT = Eo(zT, kT, WT, XT, IT),
          FT = vo;
        if (!oT) {
          if (zT.number == (IT ? TT.state.doc.lines : 1)) return XT;
          FT = "\n", zT = TT.state.doc.line(zT.number + (IT ? 1 : -1)), kT = TT.bidiSpans(zT), oT = TT.visualLineSide(zT, !IT)
        }
        if (BT) {
          if (!BT(FT)) return XT
        } else {
          if (!iT) return oT;
          BT = iT(FT)
        }
        XT = oT
      }
    }

    function pI(TT, oT, IT) {
      for (;;) {
        let iT = 0;
        for (let zT of TT) zT.between(oT - 1, oT + 1, ((TT, zT, kT) => {
          if (oT > TT && oT < zT) {
            let kT = iT || IT || (oT - TT < zT - oT ? -1 : 1);
            oT = kT < 0 ? TT : zT, iT = kT
          }
        }));
        if (!iT) return oT
      }
    }

    function bI(TT, oT) {
      let IT = null;
      for (let zT = 0; zT < oT.ec.length; zT++) {
        let kT = oT.ec[zT],
          WT = null;
        if (kT.empty) {
          let oT = pI(TT, kT.from, 0);
          oT != kT.from && (WT = iT.k.cursor(oT, -1))
        } else {
          let oT = pI(TT, kT.from, -1),
            IT = pI(TT, kT.to, 1);
          oT == kT.from && IT == kT.to || (WT = iT.k.range(kT.from == kT.anchor ? oT : IT, kT.from == kT.head ? oT : IT))
        }
        WT && (IT || (IT = oT.ec.slice()), IT[zT] = WT)
      }
      return IT ? iT.k.create(IT, oT.mainIndex) : oT
    }

    function yI(TT, oT, IT) {
      let zT = pI(TT.state.facet(kI).map((oT => oT(TT))), IT.from, oT.head > IT.from ? -1 : 1);
      return zT == IT.from ? IT : iT.k.cursor(zT, zT < IT.from ? 1 : -1)
    }
    class NI {
      constructor(TT, oT) {
        this.pos = TT, this.assoc = oT
      }
    }

    function PI(TT, oT, IT, zT) {
      let kT, WT = TT.contentDOM.getBoundingClientRect(),
        XT = WT.top + TT.viewState.paddingTop,
        {
          x: BT,
          y: FT
        } = oT,
        ST = FT - XT;
      for (;;) {
        if (ST < 0) return new NI(0, 1);
        if (ST > TT.viewState.docHeight) return new NI(TT.state.doc.length, -1);
        if (kT = TT.elementAtHeight(ST), null == zT) break;
        if (kT.type == jT.Text) {
          if (zT < 0 ? kT.to < TT.viewport.from : kT.from > TT.viewport.to) break;
          let oT = TT.docView.coordsAt(zT < 0 ? kT.from : kT.to, zT > 0 ? -1 : 1);
          if (oT && (zT < 0 ? oT.top <= ST + XT : oT.bottom >= ST + XT)) break
        }
        let oT = TT.viewState.heightOracle.textHeight / 2;
        ST = zT > 0 ? kT.bottom + oT : kT.top - oT
      }
      if (TT.viewport.from >= kT.to || TT.viewport.to <= kT.from) {
        if (IT) return null;
        if (kT.type == jT.Text) {
          let oT = function(TT, oT, IT, zT, kT) {
            let WT = Math.round((zT - oT.left) * TT.defaultCharacterWidth);
            if (TT.lineWrapping && IT.height > 1.5 * TT.defaultLineHeight) {
              let oT = TT.viewState.heightOracle.textHeight;
              WT += Math.floor((kT - IT.top - .5 * (TT.defaultLineHeight - oT)) / oT) * TT.viewState.heightOracle.lineLength
            }
            let XT = TT.state.sliceDoc(IT.from, IT.to);
            return IT.from + (0, iT.db)(XT, WT, TT.state.tabSize)
          }(TT, WT, kT, BT, FT);
          return new NI(oT, oT == kT.from ? 1 : -1)
        }
      }
      if (kT.type != jT.Text) return ST < (kT.top + kT.bottom) / 2 ? new NI(kT.from, 1) : new NI(kT.to, -1);
      let DT = TT.docView.lineAt(kT.from, 2);
      return DT && DT.length == kT.length || (DT = TT.docView.lineAt(kT.from, -2)), new dI(TT, BT, FT, TT.textDirectionAt(kT.from)).scanTile(DT, kT.from)
    }
    class dI {
      constructor(TT, oT, IT, iT) {
        this.view = TT, this.x = oT, this.y = IT, this.baseDir = iT, this.line = null, this.spans = null
      }
      bidiSpansAt(TT) {
        return (!this.line || this.line.from > TT || this.line.to < TT) && (this.line = this.view.state.doc.lineAt(TT), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(TT, oT) {
        let {
          line: IT,
          spans: iT
        } = this.bidiSpansAt(TT);
        return iT[go.find(iT, TT - IT.from, -1, oT)].level == this.baseDir
      }
      dirAt(TT, oT) {
        let {
          line: IT,
          spans: iT
        } = this.bidiSpansAt(TT);
        return iT[go.find(iT, TT - IT.from, -1, oT)].dir
      }
      bidiIn(TT, oT) {
        let {
          spans: IT,
          line: iT
        } = this.bidiSpansAt(TT);
        return IT.length > 1 || IT.length && (IT[0].level != this.baseDir || IT[0].to + iT.from < oT)
      }
      scan(TT, oT) {
        let IT, iT, zT, kT = 0,
          WT = TT.length - 1,
          XT = new Set,
          BT = this.bidiIn(TT[0], TT[WT]),
          FT = -1,
          ST = 1e9;
        TT: for (; kT < WT;) {
          let DT = WT - kT,
            LT = kT + WT >> 1;
          oT: if (XT.has(LT)) {
            let TT = kT + Math.floor(Math.random() * DT);
            for (let oT = 0; oT < DT; oT++) {
              if (!XT.has(TT)) {
                LT = TT;
                break oT
              }
              TT++, TT == WT && (TT = kT)
            }
            break TT
          } XT.add(LT);
          let xT = oT(LT);
          if (xT)
            for (let oT = 0; oT < xT.length; oT++) {
              let XT = xT[oT],
                DT = 0;
              if (!(0 == XT.width && xT.length > 1)) {
                if (XT.bottom < this.y)(!IT || IT.bottom < XT.bottom) && (IT = XT), DT = 1;
                else if (XT.top > this.y)(!iT || iT.top > XT.top) && (iT = XT), DT = -1;
                else {
                  let TT = XT.left > this.x ? this.x - XT.left : XT.right < this.x ? this.x - XT.right : 0,
                    oT = Math.abs(TT);
                  oT < ST && (FT = LT, ST = oT, zT = XT), TT && (DT = TT < 0 == (this.baseDir == Fo.LTR) ? -1 : 1)
                } - 1 != DT || BT && !this.baseDirAt(TT[LT], 1) ? 1 != DT || BT && !this.baseDirAt(TT[LT + 1], -1) || (kT = LT + 1) : WT = LT
              }
            }
        }
        if (!zT) {
          let zT = IT && (!iT || this.y - IT.bottom < iT.top - this.y) ? IT : iT;
          return this.y = (zT.top + zT.bottom) / 2, this.scan(TT, oT)
        }
        if (ST) {
          if (IT && IT.bottom > zT.top) return this.y = IT.bottom - 1, this.scan(TT, oT);
          if (iT && iT.top < zT.bottom) return this.y = iT.top + 1, this.scan(TT, oT)
        }
        let DT = (BT ? this.dirAt(TT[FT], 1) : this.baseDir) == Fo.LTR;
        return {
          i: FT,
          after: this.x > (zT.left + zT.right) / 2 == DT
        }
      }
      scanText(TT, oT) {
        let IT = [];
        for (let kT = 0; kT < TT.length; kT = (0, iT.ab)(TT.text, kT)) IT.push(oT + kT);
        IT.push(oT + TT.length);
        let zT = this.scan(IT, (iT => {
          let zT = IT[iT] - oT,
            kT = IT[iT + 1] - oT;
          return io(TT.dom, zT, kT).getClientRects()
        }));
        return zT.after ? new NI(IT[zT.i + 1], -1) : new NI(IT[zT.i], 1)
      }
      scanTile(TT, oT) {
        if (!TT.length) return new NI(oT, 1);
        if (1 == TT.children.length) {
          let IT = TT.children[0];
          if (IT.isText()) return this.scanText(IT, oT);
          if (IT.isComposite()) return this.scanTile(IT, oT)
        }
        let IT = [oT];
        for (let WT = 0, XT = oT; WT < TT.children.length; WT++) IT.push(XT += TT.children[WT].length);
        let iT = this.scan(IT, (oT => {
            let IT = TT.children[oT];
            return 48 & IT.flags ? null : (1 == IT.dom.nodeType ? IT.dom : io(IT.dom, 0, IT.length)).getClientRects()
          })),
          zT = TT.children[iT.i],
          kT = IT[iT.i];
        return zT.isText() ? this.scanText(zT, kT) : zT.isComposite() ? this.scanTile(zT, kT) : iT.after ? new NI(IT[iT.i + 1], -1) : new NI(kT, 1)
      }
    }
    const VI = "\uffff";
    class Ti {
      constructor(TT, oT) {
        this.points = TT, this.view = oT, this.text = "", this.lineSeparator = oT.state.facet(iT.o.lineSeparator)
      }
      append(TT) {
        this.text += TT
      }
      lineBreak() {
        this.text += VI
      }
      readRange(TT, oT) {
        if (!TT) return this;
        let IT = TT.parentNode;
        for (let iT = TT;;) {
          this.findPointBefore(IT, iT);
          let TT = this.text.length;
          this.readNode(iT);
          let zT = cI.get(iT),
            kT = iT.nextSibling;
          if (kT == oT) {
            (null === zT || void 0 === zT ? void 0 : zT.breakAfter) && !kT && IT != this.view.contentDOM && this.lineBreak();
            break
          }
          let WT = cI.get(kT);
          (zT && WT ? zT.breakAfter : (zT ? zT.breakAfter : GT(iT)) || GT(kT) && ("BR" != iT.nodeName || (null === zT || void 0 === zT ? void 0 : zT.isWidget())) && this.text.length > TT) && !Ii(kT, oT) && this.lineBreak(), iT = kT
        }
        return this.findPointBefore(IT, oT), this
      }
      readTextNode(TT) {
        let oT = TT.nodeValue;
        for (let IT of this.points) IT.node == TT && (IT.pos = this.text.length + Math.min(IT.offset, oT.length));
        for (let IT = 0, iT = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let zT, kT = -1,
            WT = 1;
          if (this.lineSeparator ? (kT = oT.indexOf(this.lineSeparator, IT), WT = this.lineSeparator.length) : (zT = iT.exec(oT)) && (kT = zT.index, WT = zT[0].length), this.append(oT.slice(IT, kT < 0 ? oT.length : kT)), kT < 0) break;
          if (this.lineBreak(), WT > 1)
            for (let oT of this.points) oT.node == TT && oT.pos > this.text.length && (oT.pos -= WT - 1);
          IT = kT + WT
        }
      }
      readNode(TT) {
        let oT = cI.get(TT),
          IT = oT && oT.overrideDOMText;
        if (null != IT) {
          this.findPointInside(TT, IT.length);
          for (let TT = IT.iter(); !TT.next().done;) TT.lineBreak ? this.lineBreak() : this.append(TT.value)
        } else 3 == TT.nodeType ? this.readTextNode(TT) : "BR" == TT.nodeName ? TT.nextSibling && this.lineBreak() : 1 == TT.nodeType && this.readRange(TT.firstChild, null)
      }
      findPointBefore(TT, oT) {
        for (let IT of this.points) IT.node == TT && TT.childNodes[IT.offset] == oT && (IT.pos = this.text.length)
      }
      findPointInside(TT, oT) {
        for (let IT of this.points)(3 == TT.nodeType ? IT.node == TT : TT.contains(IT.node)) && (IT.pos = this.text.length + (oi(TT, IT.node, IT.offset) ? oT : 0))
      }
    }

    function oi(TT, oT, IT) {
      for (;;) {
        if (!oT || IT < bT(oT)) return !1;
        if (oT == TT) return !0;
        IT = tT(oT) + 1, oT = oT.parentNode
      }
    }

    function Ii(TT, oT) {
      let IT;
      for (; TT != oT && TT; TT = TT.nextSibling) {
        let oT = cI.get(TT);
        if (!(null === oT || void 0 === oT ? void 0 : oT.isWidget())) return !1;
        oT && (IT || (IT = [])).push(oT)
      }
      if (IT)
        for (let iT of IT) {
          let TT = iT.overrideDOMText;
          if (null === TT || void 0 === TT ? void 0 : TT.length) return !1
        }
      return !0
    }
    class ii {
      constructor(TT, oT) {
        this.node = TT, this.offset = oT, this.pos = -1
      }
    }
    class zi {
      constructor(TT, oT, IT, zT) {
        this.typeOver = zT, this.bounds = null, this.text = "", this.domChanged = oT > -1;
        let {
          impreciseHead: kT,
          impreciseAnchor: WT
        } = TT.docView, XT = TT.state.selection;
        if (TT.state.readOnly && oT > -1) this.newSel = null;
        else if (oT > -1 && (this.bounds = ki(TT.docView.tile, oT, IT, 0))) {
          let oT = kT || WT ? [] : function(TT) {
              let oT = [];
              if (TT.root.activeElement != TT.contentDOM) return oT;
              let {
                anchorNode: IT,
                anchorOffset: iT,
                focusNode: zT,
                focusOffset: kT
              } = TT.observer.selectionRange;
              IT && (oT.push(new ii(IT, iT)), zT == IT && kT == iT || oT.push(new ii(zT, kT)));
              return oT
            }(TT),
            IT = new Ti(oT, TT);
          IT.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = IT.text, this.newSel = function(TT, oT) {
            if (0 == TT.length) return null;
            let IT = TT[0].pos,
              zT = 2 == TT.length ? TT[1].pos : IT;
            return IT > -1 && zT > -1 ? iT.k.single(IT + oT, zT + oT) : null
          }(oT, this.bounds.from)
        } else {
          let oT = TT.observer.selectionRange,
            IT = kT && kT.node == oT.focusNode && kT.offset == oT.focusOffset || !qT(TT.contentDOM, oT.focusNode) ? XT.main.head : TT.docView.posFromDOM(oT.focusNode, oT.focusOffset),
            zT = WT && WT.node == oT.anchorNode && WT.offset == oT.anchorOffset || !qT(TT.contentDOM, oT.anchorNode) ? XT.main.anchor : TT.docView.posFromDOM(oT.anchorNode, oT.anchorOffset),
            BT = TT.viewport;
          if ((eT.ios || eT.chrome) && XT.main.empty && IT != zT && (BT.from > 0 || BT.to < TT.state.doc.length)) {
            let oT = Math.min(IT, zT),
              iT = Math.max(IT, zT),
              kT = BT.from - oT,
              WT = BT.to - iT;
            0 != kT && 1 != kT && 0 != oT || 0 != WT && -1 != WT && iT != TT.state.doc.length || (IT = 0, zT = TT.state.doc.length)
          }
          if (TT.inputState.composing > -1 && XT.ec.length > 1) this.newSel = XT.replaceRange(iT.k.range(zT, IT));
          else if (TT.lineWrapping && zT == IT && (!XT.main.empty || XT.main.head != IT) && TT.inputState.lastTouchTime > Date.now() - 100) {
            let oT = TT.coordsAtPos(IT, -1),
              zT = 0;
            oT && (zT = TT.inputState.lastTouchY <= oT.bottom ? -1 : 1), this.newSel = iT.k.create([iT.k.cursor(IT, zT)])
          } else this.newSel = iT.k.single(zT, IT)
        }
      }
    }

    function ki(TT, oT, IT, iT) {
      if (TT.isComposite()) {
        let zT = -1,
          kT = -1,
          WT = -1,
          XT = -1;
        for (let BT = 0, FT = iT, ST = iT; BT < TT.children.length; BT++) {
          let iT = TT.children[BT],
            DT = FT + iT.length;
          if (FT < oT && DT > IT) return ki(iT, oT, IT, FT);
          if (DT >= oT && -1 == zT && (zT = BT, kT = FT), FT > IT && iT.dom.parentNode == TT.dom) {
            WT = BT, XT = ST;
            break
          }
          ST = DT, FT = DT + iT.breakAfter
        }
        return {
          from: kT,
          to: XT < 0 ? iT + TT.length : XT,
          startDOM: (zT ? TT.children[zT - 1].dom.nextSibling : null) || TT.dom.firstChild,
          endDOM: WT < TT.children.length && WT >= 0 ? TT.children[WT].dom : null
        }
      }
      return TT.isText() ? {
        from: iT,
        to: iT + TT.length,
        startDOM: TT.dom,
        endDOM: TT.dom.nextSibling
      } : null
    }

    function Wi(TT, oT) {
      let IT, {
          newSel: zT
        } = oT,
        {
          state: kT
        } = TT,
        WT = kT.selection.main,
        XT = TT.inputState.lastKeyTime > Date.now() - 100 ? TT.inputState.lastKeyCode : -1;
      if (oT.bounds) {
        let {
          from: TT,
          to: zT
        } = oT.bounds, BT = WT.from, FT = null;
        (8 === XT || eT.android && oT.text.length < zT - TT) && (BT = WT.to, FT = "end");
        let ST, DT, LT = kT.doc.sliceString(TT, zT, VI);
        !WT.empty && WT.from >= TT && WT.to <= zT && (oT.typeOver || LT != oT.text) && LT.slice(0, WT.from - TT) == oT.text.slice(0, WT.from - TT) && LT.slice(WT.to - TT) == oT.text.slice(ST = oT.text.length - (LT.length - (WT.to - TT))) ? IT = {
          from: WT.from,
          to: WT.to,
          insert: iT.N.of(oT.text.slice(WT.from - TT, ST).split(VI))
        } : (DT = Bi(LT, oT.text, BT - TT, FT)) && (eT.chrome && 13 == XT && DT.toB == DT.from + 2 && oT.text.slice(DT.from, DT.toB) == VI + VI && DT.toB--, IT = {
          from: TT + DT.from,
          to: TT + DT.toA,
          insert: iT.N.of(oT.text.slice(DT.from, DT.toB).split(VI))
        })
      } else zT && (!TT.hasFocus && kT.facet(bo) || Fi(zT, WT)) && (zT = null);
      if (!IT && !zT) return !1;
      if ((eT.mac || eT.android) && IT && IT.from == IT.to && IT.from == WT.head - 1 && /^\. ?$/.test(IT.insert.toString()) && "off" == TT.contentDOM.getAttribute("autocorrect") ? (zT && 2 == IT.insert.length && (zT = iT.k.single(zT.main.anchor - 1, zT.main.head - 1)), IT = {
          from: IT.from,
          to: IT.to,
          insert: iT.N.of([IT.insert.toString().replace(".", " ")])
        }) : kT.doc.lineAt(WT.from).to < WT.to && TT.docView.lineHasWidget(WT.to) && TT.inputState.insertingTextAt > Date.now() - 50 ? IT = {
          from: WT.from,
          to: WT.to,
          insert: kT.toText(TT.inputState.insertingText)
        } : eT.chrome && IT && IT.from == IT.to && IT.from == WT.head && "\n " == IT.insert.toString() && TT.lineWrapping && (zT && (zT = iT.k.single(zT.main.anchor - 1, zT.main.head - 1)), IT = {
          from: WT.from,
          to: WT.to,
          insert: iT.N.of([" "])
        }), IT) return Xi(TT, IT, zT, XT);
      if (zT && !Fi(zT, WT)) {
        let oT = !1,
          IT = "select";
        return TT.inputState.lastSelectionTime > Date.now() - 50 && ("select" == TT.inputState.lastSelectionOrigin && (oT = !0), IT = TT.inputState.lastSelectionOrigin, "select.pointer" == IT && (zT = bI(kT.facet(kI).map((oT => oT(TT))), zT))), TT.dispatch({
          selection: zT,
          scrollIntoView: oT,
          userEvent: IT
        }), !0
      }
      return !1
    }

    function Xi(TT, oT, IT) {
      let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (eT.ios && TT.inputState.flushIOSKey(oT)) return !0;
      let kT = TT.state.selection.main;
      if (eT.android && (oT.to == kT.to && (oT.from == kT.from || oT.from == kT.from - 1 && " " == TT.state.sliceDoc(oT.from, kT.from)) && 1 == oT.insert.length && 2 == oT.insert.lines && zo(TT.contentDOM, "Enter", 13) || (oT.from == kT.from - 1 && oT.to == kT.to && 0 == oT.insert.length || 8 == zT && oT.insert.length < oT.to - oT.from && oT.to > kT.head) && zo(TT.contentDOM, "Backspace", 8) || oT.from == kT.from && oT.to == kT.to + 1 && 0 == oT.insert.length && zo(TT.contentDOM, "Delete", 46))) return !0;
      let WT, XT = oT.insert.toString();
      TT.inputState.composing >= 0 && TT.inputState.composing++;
      let BT = () => WT || (WT = function(TT, oT, IT) {
        let zT, kT = TT.state,
          WT = kT.selection.main,
          XT = -1;
        if (oT.from == oT.to && oT.from < WT.from || oT.from > WT.to) {
          let IT = oT.from < WT.from ? -1 : 1,
            iT = IT < 0 ? WT.from : WT.to,
            zT = pI(kT.facet(kI).map((oT => oT(TT))), iT, IT);
          oT.from == zT && (XT = zT)
        }
        if (XT > -1) zT = {
          changes: oT,
          selection: iT.k.cursor(oT.from + oT.insert.length, -1)
        };
        else if (oT.from >= WT.from && oT.to <= WT.to && oT.to - oT.from >= (WT.to - WT.from) / 3 && (!IT || IT.main.empty && IT.main.from == oT.from + oT.insert.length) && TT.inputState.composing < 0) {
          let IT = WT.from < oT.from ? kT.sliceDoc(WT.from, oT.from) : "",
            iT = WT.to > oT.to ? kT.sliceDoc(oT.to, WT.to) : "";
          zT = kT.replaceSelection(TT.state.toText(IT + oT.insert.sliceString(0, void 0, TT.state.lineBreak) + iT))
        } else {
          let XT = kT.changes(oT),
            BT = IT && IT.main.to <= XT.newLength ? IT.main : void 0;
          if (kT.selection.ec.length > 1 && (TT.inputState.composing >= 0 || TT.inputState.compositionPendingChange) && oT.to <= WT.to + 10 && oT.to >= WT.to - 10) {
            let FT, ST = TT.state.sliceDoc(oT.from, oT.to),
              DT = IT && qI(TT, IT.main.head);
            if (DT) {
              let TT = oT.insert.length - (oT.to - oT.from);
              FT = {
                from: DT.from,
                to: DT.to - TT
              }
            } else FT = TT.state.doc.lineAt(WT.head);
            let LT = WT.to - oT.to;
            zT = kT.changeByRange((IT => {
              if (IT.from == WT.from && IT.to == WT.to) return {
                changes: XT,
                range: BT || IT.map(XT)
              };
              let zT = IT.to - LT,
                DT = zT - ST.length;
              if (TT.state.sliceDoc(DT, zT) != ST || zT >= FT.from && DT <= FT.to) return {
                range: IT
              };
              let xT = kT.changes({
                  from: DT,
                  to: zT,
                  insert: oT.insert
                }),
                cT = IT.to - WT.to;
              return {
                changes: xT,
                range: BT ? iT.k.range(Math.max(0, BT.anchor + cT), Math.max(0, BT.head + cT)) : IT.map(xT)
              }
            }))
          } else zT = {
            changes: XT,
            selection: BT && kT.selection.replaceRange(BT)
          }
        }
        let BT = "input.type";
        (TT.composing || TT.inputState.compositionPendingChange && TT.inputState.compositionEndedAt > Date.now() - 50) && (TT.inputState.compositionPendingChange = !1, BT += ".compose", TT.inputState.compositionFirstChange && (BT += ".start", TT.inputState.compositionFirstChange = !1));
        return kT.update(zT, {
          userEvent: BT,
          scrollIntoView: !0
        })
      }(TT, oT, IT));
      return TT.state.facet(Yo).some((IT => IT(TT, oT.from, oT.to, XT, BT))) || TT.dispatch(BT()), !0
    }

    function Bi(TT, oT, IT, iT) {
      let zT = Math.min(TT.length, oT.length),
        kT = 0;
      for (; kT < zT && TT.charCodeAt(kT) == oT.charCodeAt(kT);) kT++;
      if (kT == zT && TT.length == oT.length) return null;
      let WT = TT.length,
        XT = oT.length;
      for (; WT > 0 && XT > 0 && TT.charCodeAt(WT - 1) == oT.charCodeAt(XT - 1);) WT--, XT--;
      if ("end" == iT) {
        IT -= WT + Math.max(0, kT - Math.min(WT, XT)) - kT
      }
      if (WT < kT && TT.length < oT.length) {
        kT -= IT <= kT && IT >= WT ? kT - IT : 0, XT = kT + (XT - WT), WT = kT
      } else if (XT < kT) {
        kT -= IT <= kT && IT >= XT ? kT - IT : 0, WT = kT + (WT - XT), XT = kT
      }
      return {
        from: kT,
        toA: WT,
        toB: XT
      }
    }

    function Fi(TT, oT) {
      return oT.head == TT.main.head && oT.anchor == TT.main.anchor
    }
    class Si {
      setSelectionOrigin(TT) {
        this.lastSelectionOrigin = TT, this.lastSelectionTime = Date.now()
      }
      constructor(TT) {
        this.view = TT, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = TT.hasFocus, eT.safari && TT.contentDOM.addEventListener("input", (() => null)), eT.gecko && function(TT) {
          Qi.has(TT) || (Qi.add(TT), TT.addEventListener("copy", (() => {})), TT.addEventListener("cut", (() => {})))
        }(TT.contentDOM.ownerDocument)
      }
      handleEvent(TT) {
        (function(TT, oT) {
          if (!oT.bubbles) return !0;
          if (oT.defaultPrevented) return !1;
          for (let IT, iT = oT.target; iT != TT.contentDOM; iT = iT.parentNode)
            if (!iT || 11 == iT.nodeType || (IT = cI.get(iT)) && IT.isWidget() && !IT.isHidden && IT.widget.ignoreEvent(oT)) return !1;
          return !0
        })(this.view, TT) && !this.ignoreDuringComposition(TT) && ("keydown" == TT.type && this.keydown(TT) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(TT.type, TT))) : this.runHandlers(TT.type, TT)))
      }
      runHandlers(TT, oT) {
        let IT = this.handlers[TT];
        if (IT) {
          for (let TT of IT.observers) TT(this.view, oT);
          for (let TT of IT.handlers) {
            if (oT.defaultPrevented) break;
            if (TT(this.view, oT)) {
              oT.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(TT) {
        let oT = Li(TT),
          IT = this.handlers,
          iT = this.view.contentDOM;
        for (let zT in oT)
          if ("scroll" != zT) {
            let TT = !oT[zT].handlers.length,
              kT = IT[zT];
            kT && TT != !kT.handlers.length && (iT.removeEventListener(zT, this.handleEvent), kT = null), kT || iT.addEventListener(zT, this.handleEvent, {
              passive: TT
            })
          } for (let zT in IT) "scroll" == zT || oT[zT] || iT.removeEventListener(zT, this.handleEvent);
        this.handlers = oT
      }
      keydown(TT) {
        if (this.lastKeyCode = TT.keyCode, this.lastKeyTime = Date.now(), 9 == TT.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != TT.keyCode && Ki.indexOf(TT.keyCode) < 0 && (this.tabFocusMode = -1), eT.android && eT.chrome && !TT.synthetic && (13 == TT.keyCode || 8 == TT.keyCode)) return this.view.observer.delayAndroidKey(TT.key, TT.keyCode), !0;
        let oT;
        return !eT.ios || TT.synthetic || TT.altKey || TT.metaKey || TT.shiftKey || !((oT = xi.find((oT => oT.keyCode == TT.keyCode))) && !TT.ctrlKey || ci.indexOf(TT.key) > -1 && TT.ctrlKey) ? (229 != TT.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = oT || TT, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(TT) {
        let oT = this.pendingIOSKey;
        return !!oT && (!("Enter" == oT.key && TT && TT.from < TT.to && /^\S+$/.test(TT.insert.toString())) && (this.pendingIOSKey = void 0, zo(this.view.contentDOM, oT.key, oT.keyCode, oT instanceof KeyboardEvent ? oT : void 0)))
      }
      ignoreDuringComposition(TT) {
        return !(!/^key/.test(TT.type) || TT.synthetic) && (this.composing > 0 || !!(eT.safari && !eT.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
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

    function Di(TT, oT) {
      return (IT, iT) => {
        try {
          return oT.call(TT, iT, IT)
        } catch (zT) {
          po(IT.state, zT)
        }
      }
    }

    function Li(TT) {
      let oT = Object.create(null);

      function IT(TT) {
        return oT[TT] || (oT[TT] = {
          observers: [],
          handlers: []
        })
      }
      for (let iT of TT) {
        let TT = iT.spec,
          oT = TT && TT.plugin.domEventHandlers,
          zT = TT && TT.plugin.domEventObservers;
        if (oT)
          for (let kT in oT) {
            let TT = oT[kT];
            TT && IT(kT).handlers.push(Di(iT.value, TT))
          }
        if (zT)
          for (let kT in zT) {
            let TT = zT[kT];
            TT && IT(kT).observers.push(Di(iT.value, TT))
          }
      }
      for (let iT in Ai) IT(iT).handlers.push(Ai[iT]);
      for (let iT in gi) IT(iT).observers.push(gi[iT]);
      return oT
    }
    const xi = [{
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
      ci = "dthko",
      Ki = [16, 17, 18, 20, 91, 92, 224, 225];

    function Mi(TT) {
      return .7 * Math.max(0, TT) + 8
    }
    class ri {
      constructor(TT, oT, IT, zT) {
        this.view = TT, this.startEvent = oT, this.style = IT, this.mustSelect = zT, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = oT, this.scrollParents = dT(TT.contentDOM), this.atoms = TT.state.facet(kI).map((oT => oT(TT)));
        let kT = TT.contentDOM.ownerDocument;
        kT.addEventListener("mousemove", this.move = this.move.bind(this)), kT.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = oT.shiftKey, this.multiple = TT.state.facet(iT.o.allowMultipleSelections) && function(TT, oT) {
          let IT = TT.state.facet(Co);
          return IT.length ? IT[0](oT) : eT.mac ? oT.metaKey : oT.ctrlKey
        }(TT, oT), this.dragging = !(! function(TT, oT) {
          let {
            main: IT
          } = TT.state.selection;
          if (IT.empty) return !1;
          let iT = nT(TT.root);
          if (!iT || 0 == iT.rangeCount) return !0;
          let zT = iT.getRangeAt(0).getClientRects();
          for (let kT = 0; kT < zT.length; kT++) {
            let TT = zT[kT];
            if (TT.left <= oT.clientX && TT.right >= oT.clientX && TT.top <= oT.clientY && TT.bottom >= oT.clientY) return !0
          }
          return !1
        }(TT, oT) || 1 != Ci(oT)) && null
      }
      start(TT) {
        !1 === this.dragging && this.select(TT)
      }
      move(TT) {
        if (0 == TT.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (oT = this.startEvent, IT = TT, Math.max(Math.abs(oT.clientX - IT.clientX), Math.abs(oT.clientY - IT.clientY)) < 10)) return;
        var oT, IT;
        this.select(this.lastEvent = TT);
        let iT = 0,
          zT = 0,
          kT = 0,
          WT = 0,
          XT = this.view.win.innerWidth,
          BT = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: kT,
          right: XT
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: WT,
          bottom: BT
        } = this.scrollParents.y.getBoundingClientRect());
        let FT = FI(this.view);
        TT.clientX - FT.left <= kT + 6 ? iT = -Mi(kT - TT.clientX) : TT.clientX + FT.right >= XT - 6 && (iT = Mi(TT.clientX - XT)), TT.clientY - FT.top <= WT + 6 ? zT = -Mi(WT - TT.clientY) : TT.clientY + FT.bottom >= BT - 6 && (zT = Mi(TT.clientY - BT)), this.setScrollSpeed(iT, zT)
      }
      up(TT) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || TT.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let TT = this.view.contentDOM.ownerDocument;
        TT.removeEventListener("mousemove", this.move), TT.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(TT, oT) {
        this.scrollSpeed = {
          x: TT,
          y: oT
        }, TT || oT ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: TT,
          y: oT
        } = this.scrollSpeed;
        TT && this.scrollParents.x && (this.scrollParents.x.scrollLeft += TT, TT = 0), oT && this.scrollParents.y && (this.scrollParents.y.scrollTop += oT, oT = 0), (TT || oT) && this.view.win.scrollBy(TT, oT), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(TT) {
        let {
          view: oT
        } = this, IT = bI(this.atoms, this.style.get(TT, this.extend, this.multiple));
        !this.mustSelect && IT.eq(oT.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: IT,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(TT) {
        TT.transactions.some((TT => TT.isUserEvent("input.type"))) ? this.destroy() : this.style.update(TT) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const Ai = Object.create(null),
      gi = Object.create(null),
      wi = eT.ie && eT.ie_version < 15 || eT.ios && eT.webkit_version < 604;

    function mi(TT, oT, IT) {
      for (let iT of TT.facet(oT)) IT = iT(IT, TT);
      return IT
    }

    function ei(TT, oT) {
      oT = mi(TT.state, Oo, oT);
      let IT, {
          state: zT
        } = TT,
        kT = 1,
        WT = zT.toText(oT),
        XT = WT.lines == zT.selection.ec.length;
      if (null != Ji && zT.selection.ec.every((TT => TT.empty)) && Ji == WT.toString()) {
        let TT = -1;
        IT = zT.changeByRange((IT => {
          let BT = zT.doc.lineAt(IT.from);
          if (BT.from == TT) return {
            range: IT
          };
          TT = BT.from;
          let FT = zT.toText((XT ? WT.line(kT++).text : oT) + zT.lineBreak);
          return {
            changes: {
              from: BT.from,
              insert: FT
            },
            range: iT.k.cursor(IT.from + FT.length)
          }
        }))
      } else IT = XT ? zT.changeByRange((TT => {
        let oT = WT.line(kT++);
        return {
          changes: {
            from: TT.from,
            to: TT.to,
            insert: oT.text
          },
          range: iT.k.cursor(TT.from + oT.length)
        }
      })) : zT.replaceSelection(WT);
      TT.dispatch(IT, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function Ri(TT, oT, IT, zT) {
      if (1 == zT) return iT.k.cursor(oT, IT);
      if (2 == zT) return function(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          zT = TT.charCategorizer(oT),
          kT = TT.doc.lineAt(oT),
          WT = oT - kT.from;
        if (0 == kT.length) return iT.k.cursor(oT);
        0 == WT ? IT = 1 : WT == kT.length && (IT = -1);
        let XT = WT,
          BT = WT;
        IT < 0 ? XT = (0, iT.ab)(kT.text, WT, !1) : BT = (0, iT.ab)(kT.text, WT);
        let FT = zT(kT.text.slice(XT, BT));
        for (; XT > 0;) {
          let TT = (0, iT.ab)(kT.text, XT, !1);
          if (zT(kT.text.slice(TT, XT)) != FT) break;
          XT = TT
        }
        for (; BT < kT.length;) {
          let TT = (0, iT.ab)(kT.text, BT);
          if (zT(kT.text.slice(BT, TT)) != FT) break;
          BT = TT
        }
        return iT.k.range(XT + kT.from, BT + kT.from)
      }(TT.state, oT, IT);
      {
        let zT = TT.docView.lineAt(oT, IT),
          kT = TT.state.doc.lineAt(zT ? zT.posAtEnd : oT),
          WT = zT ? zT.posAtStart : kT.from,
          XT = zT ? zT.posAtEnd : kT.to;
        return XT < TT.state.doc.length && XT == kT.to && XT++, iT.k.range(WT, XT)
      }
    }
    gi.scroll = TT => {
      TT.inputState.lastScrollTop = TT.scrollDOM.scrollTop, TT.inputState.lastScrollLeft = TT.scrollDOM.scrollLeft
    }, gi.wheel = gi.mousewheel = TT => {
      TT.inputState.lastWheelEvent = Date.now()
    }, Ai.keydown = (TT, oT) => (TT.inputState.setSelectionOrigin("select"), 27 == oT.keyCode && 0 != TT.inputState.tabFocusMode && (TT.inputState.tabFocusMode = Date.now() + 2e3), !1), gi.touchstart = (TT, oT) => {
      let IT = TT.inputState,
        iT = oT.targetTouches[0];
      IT.lastTouchTime = Date.now(), iT && (IT.lastTouchX = iT.clientX, IT.lastTouchY = iT.clientY), IT.setSelectionOrigin("select.pointer")
    }, gi.touchmove = TT => {
      TT.inputState.setSelectionOrigin("select.pointer")
    }, Ai.mousedown = (TT, oT) => {
      if (TT.observer.flush(), TT.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let IT = null;
      for (let iT of TT.state.facet(Jo))
        if (IT = iT(TT, oT), IT) break;
      if (IT || 0 != oT.button || (IT = function(TT, oT) {
          let IT = TT.posAndSideAtCoords({
              x: oT.clientX,
              y: oT.clientY
            }, !1),
            zT = Ci(oT),
            kT = TT.state.selection;
          return {
            update(TT) {
              TT.docChanged && (IT.pos = TT.changes.mapPos(IT.pos), kT = kT.map(TT.changes))
            },
            get(oT, WT, XT) {
              let BT, FT = TT.posAndSideAtCoords({
                  x: oT.clientX,
                  y: oT.clientY
                }, !1),
                ST = Ri(TT, FT.pos, FT.assoc, zT);
              if (IT.pos != FT.pos && !WT) {
                let oT = Ri(TT, IT.pos, IT.assoc, zT),
                  kT = Math.min(oT.from, ST.from),
                  WT = Math.max(oT.to, ST.to);
                ST = kT < ST.from ? iT.k.range(kT, WT, ST.assoc) : iT.k.range(WT, kT, ST.assoc)
              }
              return WT ? kT.replaceRange(kT.main.extend(ST.from, ST.to, ST.assoc)) : XT && 1 == zT && kT.ec.length > 1 && (BT = function(TT, oT) {
                for (let IT = 0; IT < TT.ec.length; IT++) {
                  let {
                    from: zT,
                    to: kT
                  } = TT.ec[IT];
                  if (zT <= oT && kT >= oT) return iT.k.create(TT.ec.slice(0, IT).concat(TT.ec.slice(IT + 1)), TT.mainIndex == IT ? 0 : TT.mainIndex - (TT.mainIndex > IT ? 1 : 0))
                }
                return null
              }(kT, FT.pos)) ? BT : XT ? kT.addRange(ST) : iT.k.create([ST])
            }
          }
        }(TT, oT)), IT) {
        let iT = !TT.hasFocus;
        TT.inputState.startMouseSelection(new ri(TT, oT, IT, iT)), iT && TT.observer.ignore((() => {
          Io(TT.contentDOM);
          let oT = TT.root.activeElement;
          oT && !oT.contains(TT.contentDOM) && oT.blur()
        }));
        let zT = TT.inputState.mouseSelection;
        if (zT) return zT.start(oT), !1 === zT.dragging
      } else TT.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const ui = eT.ie && eT.ie_version <= 11;
    let vi = null,
      Ei = 0,
      fi = 0;

    function Ci(TT) {
      if (!ui) return TT.detail;
      let oT = vi,
        IT = fi;
      return vi = TT, fi = Date.now(), Ei = !oT || IT > Date.now() - 400 && Math.abs(oT.clientX - TT.clientX) < 2 && Math.abs(oT.clientY - TT.clientY) < 2 ? (Ei + 1) % 3 : 1
    }

    function ji(TT, oT, IT, iT) {
      if (!(IT = mi(TT.state, Oo, IT))) return;
      let zT = TT.posAtCoords({
          x: oT.clientX,
          y: oT.clientY
        }, !1),
        {
          draggedContent: kT
        } = TT.inputState,
        WT = iT && kT && function(TT, oT) {
          let IT = TT.state.facet(jo);
          return IT.length ? IT[0](oT) : eT.mac ? !oT.altKey : !oT.ctrlKey
        }(TT, oT) ? {
          from: kT.from,
          to: kT.to
        } : null,
        XT = {
          from: zT,
          insert: IT
        },
        BT = TT.state.changes(WT ? [WT, XT] : XT);
      TT.focus(), TT.dispatch({
        changes: BT,
        selection: {
          anchor: BT.mapPos(zT, -1),
          head: BT.mapPos(zT, 1)
        },
        userEvent: WT ? "move.drop" : "input.drop"
      }), TT.inputState.draggedContent = null
    }
    Ai.dragstart = (TT, oT) => {
      let {
        selection: {
          main: IT
        }
      } = TT.state;
      if (oT.target.draggable) {
        let zT = TT.docView.tile.nearest(oT.target);
        if (zT && zT.isWidget()) {
          let TT = zT.posAtStart,
            oT = TT + zT.length;
          (TT >= IT.to || oT <= IT.from) && (IT = iT.k.range(TT, oT))
        }
      }
      let {
        inputState: zT
      } = TT;
      return zT.mouseSelection && (zT.mouseSelection.dragging = !0), zT.draggedContent = IT, oT.dataTransfer && (oT.dataTransfer.setData("Text", mi(TT.state, Ho, TT.state.sliceDoc(IT.from, IT.to))), oT.dataTransfer.effectAllowed = "copyMove"), !1
    }, Ai.dragend = TT => (TT.inputState.draggedContent = null, !1), Ai.drop = (TT, oT) => {
      if (!oT.dataTransfer) return !1;
      if (TT.state.readOnly) return !0;
      let IT = oT.dataTransfer.files;
      if (IT && IT.length) {
        let iT = Array(IT.length),
          zT = 0,
          kT = () => {
            ++zT == IT.length && ji(TT, oT, iT.filter((TT => null != TT)).join(TT.state.lineBreak), !1)
          };
        for (let TT = 0; TT < IT.length; TT++) {
          let oT = new FileReader;
          oT.onerror = kT, oT.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(oT.result) || (iT[TT] = oT.result), kT()
          }, oT.readAsText(IT[TT])
        }
        return !0
      } {
        let IT = oT.dataTransfer.getData("Text");
        if (IT) return ji(TT, oT, IT, !0), !0
      }
      return !1
    }, Ai.paste = (TT, oT) => {
      if (TT.state.readOnly) return !0;
      TT.observer.flush();
      let IT = wi ? null : oT.clipboardData;
      return IT ? (ei(TT, IT.getData("text/plain") || IT.getData("text/uri-list")), !0) : (function(TT) {
        let oT = TT.dom.parentNode;
        if (!oT) return;
        let IT = oT.appendChild(document.createElement("textarea"));
        IT.style.cssText = "position: fixed; left: -10000px; top: 10px", IT.focus(), setTimeout((() => {
          TT.focus(), IT.remove(), ei(TT, IT.value)
        }), 50)
      }(TT), !1)
    };
    let Ji = null;
    Ai.copy = Ai.cut = (TT, oT) => {
      if (!ZT(TT.contentDOM, TT.observer.selectionRange)) return !1;
      let {
        text: IT,
        ec: iT,
        linewise: zT
      } = function(TT) {
        let oT = [],
          IT = [],
          iT = !1;
        for (let zT of TT.selection.ec) zT.empty || (oT.push(TT.sliceDoc(zT.from, zT.to)), IT.push(zT));
        if (!oT.length) {
          let zT = -1;
          for (let {
              from: iT
            }
            of TT.selection.ec) {
            let kT = TT.doc.lineAt(iT);
            kT.number > zT && (oT.push(kT.text), IT.push({
              from: kT.from,
              to: Math.min(TT.doc.length, kT.to + 1)
            })), zT = kT.number
          }
          iT = !0
        }
        return {
          text: mi(TT, Ho, oT.join(TT.lineBreak)),
          ec: IT,
          linewise: iT
        }
      }(TT.state);
      if (!IT && !zT) return !1;
      Ji = zT ? IT : null, "cut" != oT.type || TT.state.readOnly || TT.dispatch({
        changes: iT,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let kT = wi ? null : oT.clipboardData;
      return kT ? (kT.clearData(), kT.setData("text/plain", IT), !0) : (function(TT, oT) {
        let IT = TT.dom.parentNode;
        if (!IT) return;
        let iT = IT.appendChild(document.createElement("textarea"));
        iT.style.cssText = "position: fixed; left: -10000px; top: 10px", iT.value = oT, iT.focus(), iT.selectionEnd = oT.length, iT.selectionStart = 0, setTimeout((() => {
          iT.remove(), TT.focus()
        }), 50)
      }(TT, IT), !1)
    };
    const Ui = iT.b.define();

    function ai(TT, oT) {
      let IT = [];
      for (let iT of TT.facet(Qo)) {
        let zT = iT(TT, oT);
        zT && IT.push(zT)
      }
      return IT.length ? TT.update({
        effects: IT,
        annotations: Ui.of(!0)
      }) : null
    }

    function Yi(TT) {
      setTimeout((() => {
        let oT = TT.hasFocus;
        if (oT != TT.inputState.notifiedFocused) {
          let IT = ai(TT.state, oT);
          IT ? TT.dispatch(IT) : TT.update([])
        }
      }), 10)
    }
    gi.focus = TT => {
      TT.inputState.lastFocusTime = Date.now(), TT.scrollDOM.scrollTop || !TT.inputState.lastScrollTop && !TT.inputState.lastScrollLeft || (TT.scrollDOM.scrollTop = TT.inputState.lastScrollTop, TT.scrollDOM.scrollLeft = TT.inputState.lastScrollLeft), Yi(TT)
    }, gi.blur = TT => {
      TT.observer.clearSelectionRange(), Yi(TT)
    }, gi.compositionstart = gi.compositionupdate = TT => {
      TT.observer.editContext || (null == TT.inputState.compositionFirstChange && (TT.inputState.compositionFirstChange = !0), TT.inputState.composing < 0 && (TT.inputState.composing = 0))
    }, gi.compositionend = TT => {
      TT.observer.editContext || (TT.inputState.composing = -1, TT.inputState.compositionEndedAt = Date.now(), TT.inputState.compositionPendingKey = !0, TT.inputState.compositionPendingChange = TT.observer.pendingRecords().length > 0, TT.inputState.compositionFirstChange = null, eT.chrome && eT.android ? TT.observer.flushSoon() : TT.inputState.compositionPendingChange ? Promise.resolve().then((() => TT.observer.flush())) : setTimeout((() => {
        TT.inputState.composing < 0 && TT.docView.hasComposition && TT.update([])
      }), 50))
    }, gi.contextmenu = TT => {
      TT.inputState.lastContextMenu = Date.now()
    }, Ai.beforeinput = (TT, oT) => {
      var IT, iT;
      if ("insertText" != oT.inputType && "insertCompositionText" != oT.inputType || (TT.inputState.insertingText = oT.data, TT.inputState.insertingTextAt = Date.now()), "insertReplacementText" == oT.inputType && TT.observer.editContext) {
        let iT = null === (IT = oT.dataTransfer) || void 0 === IT ? void 0 : IT.getData("text/plain"),
          zT = oT.getTargetRanges();
        if (iT && zT.length) {
          let oT = zT[0],
            IT = TT.posAtDOM(oT.startContainer, oT.startOffset),
            kT = TT.posAtDOM(oT.endContainer, oT.endOffset);
          return Xi(TT, {
            from: IT,
            to: kT,
            insert: TT.state.toText(iT)
          }, null), !0
        }
      }
      let zT;
      if (eT.chrome && eT.android && (zT = xi.find((TT => TT.inputType == oT.inputType))) && (TT.observer.delayAndroidKey(zT.key, zT.keyCode), "Backspace" == zT.key || "Delete" == zT.key)) {
        let oT = (null === (iT = window.visualViewport) || void 0 === iT ? void 0 : iT.height) || 0;
        setTimeout((() => {
          var IT;
          ((null === (IT = window.visualViewport) || void 0 === IT ? void 0 : IT.height) || 0) > oT + 10 && TT.hasFocus && (TT.contentDOM.blur(), TT.focus())
        }), 100)
      }
      return eT.ios && "deleteContentForward" == oT.inputType && TT.observer.flushSoon(), eT.safari && "insertText" == oT.inputType && TT.inputState.composing >= 0 && setTimeout((() => gi.compositionend(TT, oT)), 20), !1
    };
    const Qi = new Set;
    const Oi = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let Hi = !1;

    function ni() {
      Hi = !1
    }
    class qi {
      constructor(TT) {
        this.lineWrapping = TT, this.doc = iT.N.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(TT, oT) {
        let IT = this.doc.lineAt(oT).number - this.doc.lineAt(TT).number + 1;
        return this.lineWrapping && (IT += Math.max(0, Math.ceil((oT - TT - IT * this.lineLength * .5) / this.lineLength))), this.lineHeight * IT
      }
      heightForLine(TT) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((TT - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(TT) {
        return this.doc = TT, this
      }
      mustRefreshForWrapping(TT) {
        return Oi.indexOf(TT) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(TT) {
        let oT = !1;
        for (let IT = 0; IT < TT.length; IT++) {
          let iT = TT[IT];
          iT < 0 ? IT++ : this.heightSamples[Math.floor(10 * iT)] || (oT = !0, this.heightSamples[Math.floor(10 * iT)] = !0)
        }
        return oT
      }
      refresh(TT, oT, IT, iT, zT, kT) {
        let WT = Oi.indexOf(TT) > -1,
          XT = Math.abs(oT - this.lineHeight) > .3 || this.lineWrapping != WT || Math.abs(IT - this.charWidth) > .1;
        if (this.lineWrapping = WT, this.lineHeight = oT, this.charWidth = IT, this.textHeight = iT, this.lineLength = zT, XT) {
          this.heightSamples = {};
          for (let TT = 0; TT < kT.length; TT++) {
            let oT = kT[TT];
            oT < 0 ? TT++ : this.heightSamples[Math.floor(10 * oT)] = !0
          }
        }
        return XT
      }
    }
    class Zi {
      constructor(TT, oT) {
        this.from = TT, this.heights = oT, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class li {
      constructor(TT, oT, IT, iT, zT) {
        this.from = TT, this.length = oT, this.top = IT, this.height = iT, this._content = zT
      }
      get type() {
        return "number" == typeof this._content ? jT.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof YT ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(TT) {
        let oT = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(TT._content) ? TT._content : [TT]);
        return new li(this.from, this.length + TT.length, this.top, this.height + TT.height, oT)
      }
    }
    var si = function(TT) {
      return TT[TT.ByPos = 0] = "ByPos", TT[TT.ByHeight = 1] = "ByHeight", TT[TT.ByPosNoHeight = 2] = "ByPosNoHeight", TT
    }(si || (si = {}));
    const ti = .001;
    class Gi {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = TT, this.height = oT, this.flags = IT
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(TT) {
        this.flags = (TT ? 2 : 0) | -3 & this.flags
      }
      setHeight(TT) {
        this.height != TT && (Math.abs(this.height - TT) > ti && (Hi = !0), this.height = TT)
      }
      replace(TT, oT, IT) {
        return Gi.of(IT)
      }
      decomposeLeft(TT, oT) {
        oT.push(this)
      }
      decomposeRight(TT, oT) {
        oT.push(this)
      }
      applyChanges(TT, oT, IT, iT) {
        let zT = this,
          kT = IT.doc;
        for (let WT = iT.length - 1; WT >= 0; WT--) {
          let {
            fromA: XT,
            toA: BT,
            fromB: FT,
            toB: ST
          } = iT[WT], DT = zT.lineAt(XT, si.ByPosNoHeight, IT.setDoc(oT), 0, 0), LT = DT.to >= BT ? DT : zT.lineAt(BT, si.ByPosNoHeight, IT, 0, 0);
          for (ST += LT.to - BT, BT = LT.to; WT > 0 && DT.from <= iT[WT - 1].toA;) XT = iT[WT - 1].fromA, FT = iT[WT - 1].fromB, WT--, XT < DT.from && (DT = zT.lineAt(XT, si.ByPosNoHeight, IT, 0, 0));
          FT += DT.from - XT, XT = DT.from;
          let xT = oz.build(IT.setDoc(kT), TT, FT, ST);
          zT = bi(zT, zT.replace(XT, BT, xT))
        }
        return zT.updateHeight(IT, 0)
      }
      static empty() {
        return new Pi(0, 0, 0)
      }
      static of (TT) {
        if (1 == TT.length) return TT[0];
        let oT = 0,
          IT = TT.length,
          iT = 0,
          zT = 0;
        for (;;)
          if (oT == IT)
            if (iT > 2 * zT) {
              let zT = TT[oT - 1];
              zT.break ? TT.splice(--oT, 1, zT.left, null, zT.right) : TT.splice(--oT, 1, zT.left, zT.right), IT += 1 + zT.break, iT -= zT.size
            } else {
              if (!(zT > 2 * iT)) break;
              {
                let oT = TT[IT];
                oT.break ? TT.splice(IT, 1, oT.left, null, oT.right) : TT.splice(IT, 1, oT.left, oT.right), IT += 2 + oT.break, zT -= oT.size
              }
            }
        else if (iT < zT) {
          let IT = TT[oT++];
          IT && (iT += IT.size)
        } else {
          let oT = TT[--IT];
          oT && (zT += oT.size)
        }
        let kT = 0;
        return null == TT[oT - 1] ? (kT = 1, oT--) : null == TT[oT] && (kT = 1, IT++), new Vi(Gi.of(TT.slice(0, oT)), kT, Gi.of(TT.slice(IT)))
      }
    }

    function bi(TT, oT) {
      return TT == oT ? TT : (TT.constructor != oT.constructor && (Hi = !0), oT)
    }
    Gi.prototype.size = 1;
    const yi = JT.replace({});
    class Ni extends Gi {
      constructor(TT, oT, IT) {
        super(TT, oT), this.deco = IT, this.spaceAbove = 0
      }
      mainBlock(TT, oT) {
        return new li(oT, this.length, TT + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(TT, oT, IT, iT) {
        return this.spaceAbove && TT < IT + this.spaceAbove ? new li(iT, 0, IT, this.spaceAbove, yi) : this.mainBlock(IT, iT)
      }
      lineAt(TT, oT, IT, iT, zT) {
        let kT = this.mainBlock(iT, zT);
        return this.spaceAbove ? this.blockAt(0, IT, iT, zT).join(kT) : kT
      }
      forEachLine(TT, oT, IT, iT, zT, kT) {
        TT <= zT + this.length && oT >= zT && kT(this.lineAt(0, si.ByPos, IT, iT, zT))
      }
      setMeasuredHeight(TT) {
        let oT = TT.heights[TT.index++];
        oT < 0 ? (this.spaceAbove = -oT, oT = TT.heights[TT.index++]) : this.spaceAbove = 0, this.setHeight(oT)
      }
      updateHeight(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 3 ? arguments[3] : void 0;
        return IT && IT.from <= oT && IT.more && this.setMeasuredHeight(IT), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class Pi extends Ni {
      constructor(TT, oT, IT) {
        super(TT, oT, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = IT
      }
      mainBlock(TT, oT) {
        return new li(oT, this.length, TT + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(TT, oT, IT) {
        let iT = IT[0];
        return 1 == IT.length && (iT instanceof Pi || iT instanceof di && 4 & iT.flags) && Math.abs(this.length - iT.length) < 10 ? (iT instanceof di ? iT = new Pi(iT.length, this.height, this.spaceAbove) : iT.height = this.height, this.outdated || (iT.outdated = !1), iT) : Gi.of(IT)
      }
      updateHeight(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = arguments.length > 3 ? arguments[3] : void 0;
        return iT && iT.from <= oT && iT.more ? this.setMeasuredHeight(iT) : (IT || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, TT.heightForLine(this.length - this.collapsed)) + this.breaks * TT.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class di extends Gi {
      constructor(TT) {
        super(TT, 0)
      }
      heightMetrics(TT, oT) {
        let IT, iT = TT.doc.lineAt(oT).number,
          zT = TT.doc.lineAt(oT + this.length).number,
          kT = zT - iT + 1,
          WT = 0;
        if (TT.lineWrapping) {
          let oT = Math.min(this.height, TT.lineHeight * kT);
          IT = oT / kT, this.length > kT + 1 && (WT = (this.height - oT) / (this.length - kT - 1))
        } else IT = this.height / kT;
        return {
          firstLine: iT,
          lastLine: zT,
          perLine: IT,
          perChar: WT
        }
      }
      blockAt(TT, oT, IT, iT) {
        let {
          firstLine: zT,
          lastLine: kT,
          perLine: WT,
          perChar: XT
        } = this.heightMetrics(oT, iT);
        if (oT.lineWrapping) {
          let zT = iT + (TT < oT.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (TT - IT) / this.height)) * this.length)),
            kT = oT.doc.lineAt(zT),
            BT = WT + kT.length * XT,
            FT = Math.max(IT, TT - BT / 2);
          return new li(kT.from, kT.length, FT, BT, 0)
        } {
          let iT = Math.max(0, Math.min(kT - zT, Math.floor((TT - IT) / WT))),
            {
              from: XT,
              length: BT
            } = oT.doc.line(zT + iT);
          return new li(XT, BT, IT + WT * iT, WT, 0)
        }
      }
      lineAt(TT, oT, IT, iT, zT) {
        if (oT == si.ByHeight) return this.blockAt(TT, IT, iT, zT);
        if (oT == si.ByPosNoHeight) {
          let {
            from: oT,
            to: iT
          } = IT.doc.lineAt(TT);
          return new li(oT, iT - oT, 0, 0, 0)
        }
        let {
          firstLine: kT,
          perLine: WT,
          perChar: XT
        } = this.heightMetrics(IT, zT), BT = IT.doc.lineAt(TT), FT = WT + BT.length * XT, ST = BT.number - kT, DT = iT + WT * ST + XT * (BT.from - zT - ST);
        return new li(BT.from, BT.length, Math.max(iT, Math.min(DT, iT + this.height - FT)), FT, 0)
      }
      forEachLine(TT, oT, IT, iT, zT, kT) {
        TT = Math.max(TT, zT), oT = Math.min(oT, zT + this.length);
        let {
          firstLine: WT,
          perLine: XT,
          perChar: BT
        } = this.heightMetrics(IT, zT);
        for (let FT = TT, ST = iT; FT <= oT;) {
          let oT = IT.doc.lineAt(FT);
          if (FT == TT) {
            let IT = oT.number - WT;
            ST += XT * IT + BT * (TT - zT - IT)
          }
          let iT = XT + BT * oT.length;
          kT(new li(oT.from, oT.length, ST, iT, 0)), ST += iT, FT = oT.to + 1
        }
      }
      replace(TT, oT, IT) {
        let iT = this.length - oT;
        if (iT > 0) {
          let TT = IT[IT.length - 1];
          TT instanceof di ? IT[IT.length - 1] = new di(TT.length + iT) : IT.push(null, new di(iT - 1))
        }
        if (TT > 0) {
          let oT = IT[0];
          oT instanceof di ? IT[0] = new di(TT + oT.length) : IT.unshift(new di(TT - 1), null)
        }
        return Gi.of(IT)
      }
      decomposeLeft(TT, oT) {
        oT.push(new di(TT - 1), null)
      }
      decomposeRight(TT, oT) {
        oT.push(null, new di(this.length - TT - 1))
      }
      updateHeight(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = arguments.length > 3 ? arguments[3] : void 0,
          zT = oT + this.length;
        if (iT && iT.from <= oT + this.length && iT.more) {
          let IT = [],
            kT = Math.max(oT, iT.from),
            WT = -1;
          for (iT.from > oT && IT.push(new di(iT.from - oT - 1).updateHeight(TT, oT)); kT <= zT && iT.more;) {
            let oT = TT.doc.lineAt(kT).length;
            IT.length && IT.push(null);
            let zT = iT.heights[iT.index++],
              XT = 0;
            zT < 0 && (XT = -zT, zT = iT.heights[iT.index++]), -1 == WT ? WT = zT : Math.abs(zT - WT) >= ti && (WT = -2);
            let BT = new Pi(oT, zT, XT);
            BT.outdated = !1, IT.push(BT), kT += oT + 1
          }
          kT <= zT && IT.push(null, new di(zT - kT).updateHeight(TT, kT));
          let XT = Gi.of(IT);
          return (WT < 0 || Math.abs(XT.height - this.height) >= ti || Math.abs(WT - this.heightMetrics(TT, oT).perLine) >= ti) && (Hi = !0), bi(this, XT)
        }
        return (IT || this.outdated) && (this.setHeight(TT.heightForGap(oT, oT + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class Vi extends Gi {
      constructor(TT, oT, IT) {
        super(TT.length + oT + IT.length, TT.height + IT.height, oT | (TT.outdated || IT.outdated ? 2 : 0)), this.left = TT, this.right = IT, this.size = TT.size + IT.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(TT, oT, IT, iT) {
        let zT = IT + this.left.height;
        return TT < zT ? this.left.blockAt(TT, oT, IT, iT) : this.right.blockAt(TT, oT, zT, iT + this.left.length + this.break)
      }
      lineAt(TT, oT, IT, iT, zT) {
        let kT = iT + this.left.height,
          WT = zT + this.left.length + this.break,
          XT = oT == si.ByHeight ? TT < kT : TT < WT,
          BT = XT ? this.left.lineAt(TT, oT, IT, iT, zT) : this.right.lineAt(TT, oT, IT, kT, WT);
        if (this.break || (XT ? BT.to < WT : BT.from > WT)) return BT;
        let FT = oT == si.ByPosNoHeight ? si.ByPosNoHeight : si.ByPos;
        return XT ? BT.join(this.right.lineAt(WT, FT, IT, kT, WT)) : this.left.lineAt(WT, FT, IT, iT, zT).join(BT)
      }
      forEachLine(TT, oT, IT, iT, zT, kT) {
        let WT = iT + this.left.height,
          XT = zT + this.left.length + this.break;
        if (this.break) TT < XT && this.left.forEachLine(TT, oT, IT, iT, zT, kT), oT >= XT && this.right.forEachLine(TT, oT, IT, WT, XT, kT);
        else {
          let BT = this.lineAt(XT, si.ByPos, IT, iT, zT);
          TT < BT.from && this.left.forEachLine(TT, BT.from - 1, IT, iT, zT, kT), BT.to >= TT && BT.from <= oT && kT(BT), oT > BT.to && this.right.forEachLine(BT.to + 1, oT, IT, WT, XT, kT)
        }
      }
      replace(TT, oT, IT) {
        let iT = this.left.length + this.break;
        if (oT < iT) return this.balanced(this.left.replace(TT, oT, IT), this.right);
        if (TT > this.left.length) return this.balanced(this.left, this.right.replace(TT - iT, oT - iT, IT));
        let zT = [];
        TT > 0 && this.decomposeLeft(TT, zT);
        let kT = zT.length;
        for (let WT of IT) zT.push(WT);
        if (TT > 0 && Tz(zT, kT - 1), oT < this.length) {
          let TT = zT.length;
          this.decomposeRight(oT, zT), Tz(zT, TT)
        }
        return Gi.of(zT)
      }
      decomposeLeft(TT, oT) {
        let IT = this.left.length;
        if (TT <= IT) return this.left.decomposeLeft(TT, oT);
        oT.push(this.left), this.break && (IT++, TT >= IT && oT.push(null)), TT > IT && this.right.decomposeLeft(TT - IT, oT)
      }
      decomposeRight(TT, oT) {
        let IT = this.left.length,
          iT = IT + this.break;
        if (TT >= iT) return this.right.decomposeRight(TT - iT, oT);
        TT < IT && this.left.decomposeRight(TT, oT), this.break && TT < iT && oT.push(null), oT.push(this.right)
      }
      balanced(TT, oT) {
        return TT.size > 2 * oT.size || oT.size > 2 * TT.size ? Gi.of(this.break ? [TT, null, oT] : [TT, oT]) : (this.left = bi(this.left, TT), this.right = bi(this.right, oT), this.setHeight(TT.height + oT.height), this.outdated = TT.outdated || oT.outdated, this.size = TT.size + oT.size, this.length = TT.length + this.break+oT.length, this)
      }
      updateHeight(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: zT,
            right: kT
          } = this,
          WT = oT + zT.length + this.break,
          XT = null;
        return iT && iT.from <= oT + zT.length && iT.more ? XT = zT = zT.updateHeight(TT, oT, IT, iT) : zT.updateHeight(TT, oT, IT), iT && iT.from <= WT + kT.length && iT.more ? XT = kT = kT.updateHeight(TT, WT, IT, iT) : kT.updateHeight(TT, WT, IT), XT ? this.balanced(zT, kT) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function Tz(TT, oT) {
      let IT, iT;
      null == TT[oT] && (IT = TT[oT - 1]) instanceof di && (iT = TT[oT + 1]) instanceof di && TT.splice(oT - 1, 3, new di(IT.length + 1 + iT.length))
    }
    class oz {
      constructor(TT, oT) {
        this.pos = TT, this.oracle = oT, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = TT
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(TT, oT) {
        if (this.lineStart > -1) {
          let TT = Math.min(oT, this.lineEnd),
            IT = this.nodes[this.nodes.length - 1];
          IT instanceof Pi ? IT.length += TT - this.pos : (TT > this.pos || !this.isCovered) && this.nodes.push(new Pi(TT - this.pos, -1, 0)), this.writtenTo = TT, oT > TT && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = oT
      }
      point(TT, oT, IT) {
        if (TT < oT || IT.heightRelevant) {
          let iT = IT.widget ? IT.widget.estimatedHeight : 0,
            zT = IT.widget ? IT.widget.lineBreaks : 0;
          iT < 0 && (iT = this.oracle.lineHeight);
          let kT = oT - TT;
          IT.block ? this.ZTT(new Ni(kT, iT, IT)) : (kT || zT || iT >= 5) && this.addLineDeco(iT, zT, kT)
        } else oT > TT && this.span(TT, oT);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: TT,
          to: oT
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = TT, this.lineEnd = oT, this.writtenTo < TT && ((this.writtenTo < TT - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, TT - 1)), this.nodes.push(null)), this.pos > TT && this.nodes.push(new Pi(this.pos - TT, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(TT, oT) {
        let IT = new di(oT - TT);
        return this.oracle.doc.lineAt(TT).to == oT && (IT.flags |= 4), IT
      }
      ensureLine() {
        this.enterLine();
        let TT = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (TT instanceof Pi) return TT;
        let oT = new Pi(0, -1, 0);
        return this.nodes.push(oT), oT
      }
      ZTT(TT) {
        this.enterLine();
        let oT = TT.deco;
        oT && oT.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(TT), this.writtenTo = this.pos = this.pos + TT.length, oT && oT.endSide > 0 && (this.covering = TT)
      }
      addLineDeco(TT, oT, IT) {
        let iT = this.ensureLine();
        iT.length += IT, iT.collapsed += IT, iT.widgetHeight = Math.max(iT.widgetHeight, TT), iT.breaks += oT, this.writtenTo = this.pos = this.pos + IT
      }
      finish(TT) {
        let oT = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || oT instanceof Pi || this.isCovered ? (this.writtenTo < this.pos || null == oT) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new Pi(0, -1, 0));
        let IT = TT;
        for (let iT of this.nodes) iT instanceof Pi && iT.updateHeight(this.oracle, IT), IT += iT ? iT.length : 1;
        return this.nodes
      }
      static build(TT, oT, IT, zT) {
        let kT = new oz(IT, TT);
        return iT.D.spans(oT, IT, zT, kT, 0), kT.finish(IT)
      }
    }
    class Iz {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(TT, oT, IT, iT) {
        (TT < oT || IT && IT.heightRelevant || iT && iT.heightRelevant) && OT(TT, oT, this.changes, 5)
      }
    }

    function iz(TT, oT) {
      let IT = TT.getBoundingClientRect(),
        iT = TT.ownerDocument,
        zT = iT.defaultView || window,
        kT = Math.max(0, IT.left),
        WT = Math.min(zT.innerWidth, IT.right),
        XT = Math.max(0, IT.top),
        BT = Math.min(zT.innerHeight, IT.bottom);
      for (let FT = TT.parentNode; FT && FT != iT.body;)
        if (1 == FT.nodeType) {
          let oT = FT,
            IT = window.getComputedStyle(oT);
          if ((oT.scrollHeight > oT.clientHeight || oT.scrollWidth > oT.clientWidth) && "visible" != IT.overflow) {
            let IT = oT.getBoundingClientRect();
            kT = Math.max(kT, IT.left), WT = Math.min(WT, IT.right), XT = Math.max(XT, IT.top), BT = Math.min(FT == TT.parentNode ? zT.innerHeight : BT, IT.bottom)
          }
          FT = "absolute" == IT.position || "fixed" == IT.position ? oT.offsetParent : oT.parentNode
        } else {
          if (11 != FT.nodeType) break;
          FT = FT.host
        } return {
        left: kT - IT.left,
        right: Math.max(kT, WT) - IT.left,
        top: XT - (IT.top + oT),
        bottom: Math.max(XT, BT) - (IT.top + oT)
      }
    }

    function zz(TT, oT) {
      let IT = TT.getBoundingClientRect();
      return {
        left: 0,
        right: IT.right - IT.left,
        top: oT,
        bottom: IT.bottom - (IT.top + oT)
      }
    }
    class kz {
      constructor(TT, oT, IT, iT) {
        this.from = TT, this.to = oT, this.size = IT, this.displaySize = iT
      }
      static same(TT, oT) {
        if (TT.length != oT.length) return !1;
        for (let IT = 0; IT < TT.length; IT++) {
          let iT = TT[IT],
            zT = oT[IT];
          if (iT.from != zT.from || iT.to != zT.to || iT.size != zT.size) return !1
        }
        return !0
      }
      draw(TT, oT) {
        return JT.replace({
          widget: new Wz(this.displaySize * (oT ? TT.scaleY : TT.scaleX), oT)
        }).range(this.from, this.to)
      }
    }
    class Wz extends CT {
      constructor(TT, oT) {
        super(), this.size = TT, this.vertical = oT
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
    class Xz {
      constructor(TT, oT) {
        this.view = TT, this.state = oT, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Dz, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Fo.LTR, this.o2 = [], this.mustEnforceCursorAssoc = !1;
        let IT = oT.facet(oI).some((TT => "function" != typeof TT && "cm-lineWrapping" == TT.class));
        this.heightOracle = new qi(IT), this.stateDeco = Lz(oT), this.heightMap = Gi.empty().applyChanges(this.stateDeco, iT.N.empty, this.heightOracle.setDoc(oT.doc), [new DI(0, 0, 0, oT.doc.length)]);
        for (let iT = 0; iT < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); iT++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = JT.set(this.lineGaps.map((TT => TT.draw(this, !1)))), this.scrollParent = TT.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let TT = [this.viewport],
          {
            main: oT
          } = this.state.selection;
        for (let IT = 0; IT <= 1; IT++) {
          let iT = IT ? oT.head : oT.anchor;
          if (!TT.some((TT => {
              let {
                from: oT,
                to: IT
              } = TT;
              return iT >= oT && iT <= IT
            }))) {
            let {
              from: oT,
              to: IT
            } = this.lineBlockAt(iT);
            TT.push(new Bz(oT, IT))
          }
        }
        return this.viewports = TT.sort(((TT, oT) => TT.from - oT.from)), this.updateScaler()
      }
      updateScaler() {
        let TT = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? Dz : new xz(this.heightOracle, this.heightMap, this.viewports), TT.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (TT => {
          this.viewportLines.push(cz(TT, this.scaler))
        }))
      }
      update(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = TT.state;
        let IT = this.stateDeco;
        this.stateDeco = Lz(this.state);
        let zT = TT.changedRanges,
          kT = DI.extendWithRanges(zT, function(TT, oT, IT) {
            let zT = new Iz;
            return iT.D.compare(TT, oT, IT, zT, 0), zT.changes
          }(IT, this.stateDeco, TT ? TT.changes : iT.ChangeSet.empty(this.state.doc.length))),
          WT = this.heightMap.height,
          XT = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        ni(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, TT.startState.doc, this.heightOracle.setDoc(this.state.doc), kT), (this.heightMap.height != WT || Hi) && (TT.flags |= 2), XT ? (this.scrollAnchorPos = TT.changes.mapPos(XT.from, -1), this.scrollAnchorHeight = XT.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = WT);
        let BT = kT.length ? this.mapViewport(this.viewport, TT.changes) : this.viewport;
        (oT && (oT.range.head < BT.from || oT.range.head > BT.to) || !this.viewportIsAppropriate(BT)) && (BT = this.getViewport(0, oT));
        let FT = BT.from != this.viewport.from || BT.to != this.viewport.to;
        this.viewport = BT, TT.flags |= this.updateForViewport(), (FT || !TT.changes.empty || 2 & TT.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, TT.changes))), TT.flags |= this.computeVisibleRanges(TT.changes), oT && (this.scrollTarget = oT), !this.mustEnforceCursorAssoc && (TT.selectionSet || TT.focusChanged) && TT.view.lineWrapping && TT.state.selection.main.empty && TT.state.selection.main.assoc && !TT.state.facet(qo) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: TT
        } = this, oT = TT.contentDOM, IT = window.getComputedStyle(oT), zT = this.heightOracle, kT = IT.whiteSpace;
        this.defaultTextDirection = "rtl" == IT.direction ? Fo.RTL : Fo.LTR;
        let WT = this.heightOracle.mustRefreshForWrapping(kT) || "refresh" === this.mustMeasureContent,
          XT = oT.getBoundingClientRect(),
          BT = WT || this.mustMeasureContent || this.contentDOMHeight != XT.height;
        this.contentDOMHeight = XT.height, this.mustMeasureContent = !1;
        let FT = 0,
          ST = 0;
        if (XT.width && XT.height) {
          let {
            scaleX: TT,
            scaleY: IT
          } = PT(oT, XT);
          (TT > .005 && Math.abs(this.scaleX - TT) > .005 || IT > .005 && Math.abs(this.scaleY - IT) > .005) && (this.scaleX = TT, this.scaleY = IT, FT |= 16, WT = BT = !0)
        }
        let DT = (parseInt(IT.paddingTop) || 0) * this.scaleY,
          LT = (parseInt(IT.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == DT && this.paddingBottom == LT || (this.paddingTop = DT, this.paddingBottom = LT, FT |= 18), this.editorWidth != TT.scrollDOM.clientWidth && (zT.lineWrapping && (BT = !0), this.editorWidth = TT.scrollDOM.clientWidth, FT |= 16);
        let xT = dT(this.view.contentDOM, !1).y;
        xT != this.scrollParent && (this.scrollParent = xT, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let cT = this.getScrollOffset();
        this.scrollOffset != cT && (this.scrollAnchorHeight = -1, this.scrollOffset = cT), this.scrolledToBottom = ko(this.scrollParent || TT.win);
        let KT = (this.printing ? zz : iz)(oT, this.paddingTop),
          MT = KT.top - this.pixelViewport.top,
          rT = KT.bottom - this.pixelViewport.bottom;
        this.pixelViewport = KT;
        let AT = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (AT != this.inView && (this.inView = AT, AT && (BT = !0)), !this.inView && !this.scrollTarget && ! function(TT) {
            let oT = TT.getBoundingClientRect(),
              IT = TT.ownerDocument.defaultView || window;
            return oT.left < IT.innerWidth && oT.right > 0 && oT.top < IT.innerHeight && oT.bottom > 0
          }(TT.dom)) return 0;
        let gT = XT.width;
        if (this.contentDOMWidth == gT && this.editorHeight == TT.scrollDOM.clientHeight || (this.contentDOMWidth = XT.width, this.editorHeight = TT.scrollDOM.clientHeight, FT |= 16), BT) {
          let oT = TT.docView.measureVisibleLineHeights(this.viewport);
          if (zT.mustRefreshForHeights(oT) && (WT = !0), WT || zT.lineWrapping && Math.abs(gT - this.contentDOMWidth) > zT.charWidth) {
            let {
              lineHeight: IT,
              charWidth: iT,
              textHeight: XT
            } = TT.docView.measureTextSize();
            WT = IT > 0 && zT.refresh(kT, IT, iT, XT, Math.max(5, gT / iT), oT), WT && (TT.docView.minWidth = 0, FT |= 16)
          }
          MT > 0 && rT > 0 ? ST = Math.max(MT, rT) : MT < 0 && rT < 0 && (ST = Math.min(MT, rT)), ni();
          for (let IT of this.viewports) {
            let kT = IT.from == this.viewport.from ? oT : TT.docView.measureVisibleLineHeights(IT);
            this.heightMap = (WT ? Gi.empty().applyChanges(this.stateDeco, iT.N.empty, this.heightOracle, [new DI(0, 0, 0, TT.state.doc.length)]) : this.heightMap).updateHeight(zT, 0, WT, new Zi(IT.from, kT))
          }
          Hi && (FT |= 2)
        }
        let hT = !this.viewportIsAppropriate(this.viewport, ST) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return hT && (2 & FT && (FT |= this.updateScaler()), this.viewport = this.getViewport(ST, this.scrollTarget), FT |= this.updateForViewport()), (2 & FT || hT) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(WT ? [] : this.lineGaps, TT)), FT |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, TT.docView.enforceCursorAssoc()), FT
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(TT, oT) {
        let IT = .5 - Math.max(-.5, Math.min(.5, TT / 1e3 / 2)),
          iT = this.heightMap,
          zT = this.heightOracle,
          {
            visibleTop: kT,
            visibleBottom: WT
          } = this,
          XT = new Bz(iT.lineAt(kT - 1e3 * IT, si.ByHeight, zT, 0, 0).from, iT.lineAt(WT + 1e3 * (1 - IT), si.ByHeight, zT, 0, 0).to);
        if (oT) {
          let {
            head: TT
          } = oT.range;
          if (TT < XT.from || TT > XT.to) {
            let IT, kT = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              WT = iT.lineAt(TT, si.ByPos, zT, 0, 0);
            IT = "center" == oT.y ? (WT.top + WT.bottom) / 2 - kT / 2 : "start" == oT.y || "nearest" == oT.y && TT < XT.from ? WT.top : WT.bottom - kT, XT = new Bz(iT.lineAt(IT - 500, si.ByHeight, zT, 0, 0).from, iT.lineAt(IT + kT + 500, si.ByHeight, zT, 0, 0).to)
          }
        }
        return XT
      }
      mapViewport(TT, oT) {
        let IT = oT.mapPos(TT.from, -1),
          iT = oT.mapPos(TT.to, 1);
        return new Bz(this.heightMap.lineAt(IT, si.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(iT, si.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(TT) {
        let {
          from: oT,
          to: IT
        } = TT, iT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: zT
        } = this.heightMap.lineAt(oT, si.ByPos, this.heightOracle, 0, 0), {
          bottom: kT
        } = this.heightMap.lineAt(IT, si.ByPos, this.heightOracle, 0, 0), {
          visibleTop: WT,
          visibleBottom: XT
        } = this;
        return (0 == oT || zT <= WT - Math.max(10, Math.min(-iT, 250))) && (IT == this.state.doc.length || kT >= XT + Math.max(10, Math.min(iT, 250))) && zT > WT - 2e3 && kT < XT + 2e3
      }
      mapLineGaps(TT, oT) {
        if (!TT.length || oT.empty) return TT;
        let IT = [];
        for (let iT of TT) oT.touchesRange(iT.from, iT.to) || IT.push(new kz(oT.mapPos(iT.from), oT.mapPos(iT.to), iT.size, iT.displaySize));
        return IT
      }
      ensureLineGaps(TT, oT) {
        let IT = this.heightOracle.lineWrapping,
          zT = IT ? 1e4 : 2e3,
          kT = zT >> 1,
          WT = zT << 1;
        if (this.defaultTextDirection != Fo.LTR && !IT) return [];
        let XT = [],
          BT = (zT, WT, FT, ST) => {
            if (WT - zT < kT) return;
            let DT = this.state.selection.main,
              LT = [DT.from];
            DT.empty || LT.push(DT.to);
            for (let TT of LT)
              if (TT > zT && TT < WT) return BT(zT, TT - 10, FT, ST), void BT(TT + 10, WT, FT, ST);
            let xT = function(TT, oT) {
              for (let IT of TT)
                if (oT(IT)) return IT;
              return
            }(TT, (TT => TT.from >= FT.from && TT.to <= FT.to && Math.abs(TT.from - zT) < kT && Math.abs(TT.to - WT) < kT && !LT.some((oT => TT.from < oT && TT.to > oT))));
            if (!xT) {
              if (WT < FT.to && oT && IT && oT.o2.some((TT => TT.from <= WT && TT.to >= WT))) {
                let TT = oT.moveToLineBoundary(iT.k.cursor(WT), !1, !0).head;
                TT > zT && (WT = TT)
              }
              let TT = this.gapSize(FT, zT, WT, ST);
              xT = new kz(zT, WT, TT, IT || TT < 2e6 ? TT : 2e6)
            }
            XT.push(xT)
          },
          FT = oT => {
            if (oT.length < WT || oT.type != jT.Text) return;
            let kT = function(TT, oT, IT) {
              let zT = [],
                kT = TT,
                WT = 0;
              iT.D.spans(IT, TT, oT, {
                span() {},
                point(TT, oT) {
                  TT > kT && (zT.push({
                    from: kT,
                    to: TT
                  }), WT += TT - kT), kT = oT
                }
              }, 20), kT < oT && (zT.push({
                from: kT,
                to: oT
              }), WT += oT - kT);
              return {
                total: WT,
                ec: zT
              }
            }(oT.from, oT.to, this.stateDeco);
            if (kT.total < WT) return;
            let XT, FT, ST = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (IT) {
              let TT, IT, iT = zT / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != ST) {
                let zT = Sz(kT, ST),
                  WT = ((this.visibleBottom - this.visibleTop) / 2 + iT) / oT.height;
                TT = zT - WT, IT = zT + WT
              } else TT = (this.visibleTop - oT.top - iT) / oT.height, IT = (this.visibleBottom - oT.top + iT) / oT.height;
              XT = Fz(kT, TT), FT = Fz(kT, IT)
            } else {
              let IT = kT.total * this.heightOracle.charWidth,
                iT = zT * this.heightOracle.charWidth,
                WT = 0;
              if (IT > 2e6)
                for (let zT of TT) zT.from >= oT.from && zT.from < oT.to && zT.size != zT.displaySize && zT.from * this.heightOracle.charWidth + WT < this.pixelViewport.left && (WT = zT.size - zT.displaySize);
              let BT, DT, LT = this.pixelViewport.left + WT,
                xT = this.pixelViewport.right + WT;
              if (null != ST) {
                let TT = Sz(kT, ST),
                  oT = ((xT - LT) / 2 + iT) / IT;
                BT = TT - oT, DT = TT + oT
              } else BT = (LT - iT) / IT, DT = (xT + iT) / IT;
              XT = Fz(kT, BT), FT = Fz(kT, DT)
            }
            XT > oT.from && BT(oT.from, XT, oT, kT), FT < oT.to && BT(FT, oT.to, oT, kT)
          };
        for (let iT of this.viewportLines) Array.isArray(iT.type) ? iT.type.forEach(FT) : FT(iT);
        return XT
      }
      gapSize(TT, oT, IT, iT) {
        let zT = Sz(iT, IT) - Sz(iT, oT);
        return this.heightOracle.lineWrapping ? TT.height * zT : iT.total * this.heightOracle.charWidth * zT
      }
      updateLineGaps(TT) {
        kz.same(TT, this.lineGaps) || (this.lineGaps = TT, this.lineGapDeco = JT.set(TT.map((TT => TT.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(TT) {
        let oT = this.stateDeco;
        this.lineGaps.length && (oT = oT.concat(this.lineGapDeco));
        let IT = [];
        iT.D.spans(oT, this.viewport.from, this.viewport.to, {
          span(TT, oT) {
            IT.push({
              from: TT,
              to: oT
            })
          },
          point() {}
        }, 20);
        let zT = 0;
        if (IT.length != this.o2.length) zT = 12;
        else
          for (let iT = 0; iT < IT.length && !(8 & zT); iT++) {
            let oT = this.o2[iT],
              kT = IT[iT];
            oT.from == kT.from && oT.to == kT.to || (zT |= 4, TT && TT.mapPos(oT.from, -1) == kT.from && TT.mapPos(oT.to, 1) == kT.to || (zT |= 8))
          }
        return this.o2 = IT, zT
      }
      lineBlockAt(TT) {
        return TT >= this.viewport.from && TT <= this.viewport.to && this.viewportLines.find((oT => oT.from <= TT && oT.to >= TT)) || cz(this.heightMap.lineAt(TT, si.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(TT) {
        return TT >= this.viewportLines[0].top && TT <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((oT => oT.top <= TT && oT.bottom >= TT)) || cz(this.heightMap.lineAt(this.scaler.fromDOM(TT), si.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(TT) {
        let oT = this.lineBlockAtHeight(TT + 8);
        return oT.from >= this.viewport.from || this.viewportLines[0].top - TT > 200 ? oT : this.viewportLines[0]
      }
      elementAtHeight(TT) {
        return cz(this.heightMap.blockAt(this.scaler.fromDOM(TT), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class Bz {
      constructor(TT, oT) {
        this.from = TT, this.to = oT
      }
    }

    function Fz(TT, oT) {
      let {
        total: IT,
        ec: iT
      } = TT;
      if (oT <= 0) return iT[0].from;
      if (oT >= 1) return iT[iT.length - 1].to;
      let zT = Math.floor(IT * oT);
      for (let kT = 0;; kT++) {
        let {
          from: TT,
          to: oT
        } = iT[kT], IT = oT - TT;
        if (zT <= IT) return TT + zT;
        zT -= IT
      }
    }

    function Sz(TT, oT) {
      let IT = 0;
      for (let {
          from: iT,
          to: zT
        }
        of TT.ec) {
        if (oT <= zT) {
          IT += oT - iT;
          break
        }
        IT += zT - iT
      }
      return IT / TT.total
    }
    const Dz = {
      toDOM: TT => TT,
      fromDOM: TT => TT,
      scale: 1,
      eq(TT) {
        return TT == this
      }
    };

    function Lz(TT) {
      let oT = TT.facet(II).filter((TT => "function" != typeof TT)),
        IT = TT.facet(zI).filter((TT => "function" != typeof TT));
      return IT.length && oT.push(iT.D.join(IT)), oT
    }
    class xz {
      constructor(TT, oT, IT) {
        let iT = 0,
          zT = 0,
          kT = 0;
        this.viewports = IT.map((IT => {
          let {
            from: zT,
            to: kT
          } = IT, WT = oT.lineAt(zT, si.ByPos, TT, 0, 0).top, XT = oT.lineAt(kT, si.ByPos, TT, 0, 0).bottom;
          return iT += XT - WT, {
            from: zT,
            to: kT,
            top: WT,
            bottom: XT,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - iT) / (oT.height - iT);
        for (let WT of this.viewports) WT.domTop = kT + (WT.top - zT) * this.scale, kT = WT.domBottom = WT.domTop + (WT.bottom - WT.top), zT = WT.bottom
      }
      toDOM(TT) {
        for (let oT = 0, IT = 0, iT = 0;; oT++) {
          let zT = oT < this.viewports.length ? this.viewports[oT] : null;
          if (!zT || TT < zT.top) return iT + (TT - IT) * this.scale;
          if (TT <= zT.bottom) return zT.domTop + (TT - zT.top);
          IT = zT.bottom, iT = zT.domBottom
        }
      }
      fromDOM(TT) {
        for (let oT = 0, IT = 0, iT = 0;; oT++) {
          let zT = oT < this.viewports.length ? this.viewports[oT] : null;
          if (!zT || TT < zT.domTop) return IT + (TT - iT) / this.scale;
          if (TT <= zT.domBottom) return zT.top + (TT - zT.domTop);
          IT = zT.bottom, iT = zT.domBottom
        }
      }
      eq(TT) {
        return TT instanceof xz && (this.scale == TT.scale && this.viewports.length == TT.viewports.length && this.viewports.every(((oT, IT) => oT.from == TT.viewports[IT].from && oT.to == TT.viewports[IT].to)))
      }
    }

    function cz(TT, oT) {
      if (1 == oT.scale) return TT;
      let IT = oT.toDOM(TT.top),
        iT = oT.toDOM(TT.bottom);
      return new li(TT.from, TT.length, IT, iT - IT, Array.isArray(TT._content) ? TT._content.map((TT => cz(TT, oT))) : TT._content)
    }
    const Kz = iT.p.define({
        combine: TT => TT.join(" ")
      }),
      Mz = iT.p.define({
        combine: TT => TT.indexOf(!0) > -1
      }),
      rz = zT.b.newName(),
      Az = zT.b.newName(),
      gz = zT.b.newName(),
      hz = {
        "&light": "." + Az,
        "&dark": "." + gz
      };

    function wz(TT, oT, IT) {
      return new zT.b(oT, {
        finish: oT => /&/.test(oT) ? oT.replace(/&\w*/, (oT => {
          if ("&" == oT) return TT;
          if (!IT || !IT[oT]) throw new RangeError(`Unsupported selector: ${oT}`);
          return IT[oT]
        })) : TT + " " + oT
      })
    }
    const mz = wz("." + rz, {
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
      }, hz),
      ez = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      Rz = eT.ie && eT.ie_version <= 11;
    class uz {
      constructor(TT) {
        this.view = TT, this.active = !1, this.editContext = null, this.selectionRange = new VT, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = TT.contentDOM, this.observer = new MutationObserver((oT => {
          for (let TT of oT) this.queue.push(TT);
          (eT.ie && eT.ie_version <= 11 || eT.ios && TT.composing) && oT.some((TT => "childList" == TT.type && TT.removedNodes.length || "characterData" == TT.type && TT.oldValue.length > TT.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !eT.android || !1 === TT.constructor.EDIT_CONTEXT || eT.chrome && eT.chrome_version < 126 || (this.editContext = new fz(TT), TT.state.facet(bo) && (TT.contentDOM.editContext = this.editContext.editContext)), Rz && (this.onCharData = TT => {
          this.queue.push({
            target: TT.target,
            type: "characterData",
            oldValue: TT.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.Tm = this.Tm.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var TT;
          (null === (TT = this.view.docView) || void 0 === TT ? void 0 : TT.lastUpdate) < Date.now() - 75 && this.Tm()
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
      Tm() {
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
        if (this.gapIntersection && (TT.length != this.gaps.length || this.gaps.some(((oT, IT) => oT != TT[IT])))) {
          this.gapIntersection.disconnect();
          for (let oT of TT) this.gapIntersection.observe(oT);
          this.gaps = TT
        }
      }
      onSelectionChange(TT) {
        let oT = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: IT
        } = this, iT = this.selectionRange;
        if (IT.state.facet(bo) ? IT.root.activeElement != this.dom : !ZT(this.dom, iT)) return;
        let zT = iT.anchorNode && IT.docView.tile.nearest(iT.anchorNode);
        zT && zT.isWidget() && zT.widget.ignoreEvent(TT) ? oT || (this.selectionChanged = !1) : (eT.ie && eT.ie_version <= 11 || eT.android && eT.chrome) && !IT.state.selection.main.empty && iT.focusNode && sT(iT.focusNode, iT.focusOffset, iT.anchorNode, iT.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: TT
        } = this, oT = nT(TT.root);
        if (!oT) return !1;
        let IT = eT.safari && 11 == TT.root.nodeType && TT.root.activeElement == this.dom && function(TT, oT) {
          if (oT.getComposedRanges) {
            let IT = oT.getComposedRanges(TT.root)[0];
            if (IT) return Ez(TT, IT)
          }
          let IT = null;

          function iT(TT) {
            TT.preventDefault(), TT.stopImmediatePropagation(), IT = TT.getTargetRanges()[0]
          }
          return TT.contentDOM.addEventListener("beforeinput", iT, !0), TT.dom.ownerDocument.execCommand("indent"), TT.contentDOM.removeEventListener("beforeinput", iT, !0), IT ? Ez(TT, IT) : null
        }(this.view, oT) || oT;
        if (!IT || this.selectionRange.eq(IT)) return !1;
        let iT = ZT(this.dom, IT);
        return iT && !this.selectionChanged && TT.inputState.lastFocusTime > Date.now() - 200 && TT.inputState.lastTouchTime < Date.now() - 300 && function(TT, oT) {
          let IT = oT.focusNode,
            iT = oT.focusOffset;
          if (!IT || oT.anchorNode != IT || oT.anchorOffset != iT) return !1;
          for (iT = Math.min(iT, bT(IT));;)
            if (iT) {
              if (1 != IT.nodeType) return !1;
              let TT = IT.childNodes[iT - 1];
              "false" == TT.contentEditable ? iT-- : (IT = TT, iT = bT(IT))
            } else {
              if (IT == TT) return !0;
              iT = tT(IT), IT = IT.parentNode
            }
        }(this.dom, IT) ? (this.view.inputState.lastFocusTime = 0, TT.docView.updateSelection(), !1) : (this.selectionRange.setRange(IT), iT && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(TT, oT) {
        this.selectionRange.set(TT.node, TT.offset, oT.node, oT.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let TT = 0,
          oT = null;
        for (let IT = this.dom; IT;)
          if (1 == IT.nodeType) !oT && TT < this.scrollTargets.length && this.scrollTargets[TT] == IT ? TT++ : oT || (oT = this.scrollTargets.slice(0, TT)), oT && oT.push(IT), IT = IT.assignedSlot || IT.parentNode;
          else {
            if (11 != IT.nodeType) break;
            IT = IT.host
          } if (TT < this.scrollTargets.length && !oT && (oT = this.scrollTargets.slice(0, TT)), oT) {
          for (let TT of this.scrollTargets) TT.removeEventListener("scroll", this.onScroll);
          for (let TT of this.scrollTargets = oT) TT.addEventListener("scroll", this.onScroll)
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
        this.active || (this.observer.observe(this.dom, ez), Rz && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), Rz && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(TT, oT) {
        var IT;
        if (!this.delayedAndroidKey) {
          let TT = () => {
            let TT = this.delayedAndroidKey;
            if (TT) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = TT.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && TT.force && zo(this.dom, TT.key, TT.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(TT)
        }
        this.delayedAndroidKey && "Enter" != TT || (this.delayedAndroidKey = {
          key: TT,
          keyCode: oT,
          force: this.lastChange < Date.now() - 50 || !!(null === (IT = this.delayedAndroidKey) || void 0 === IT ? void 0 : IT.force)
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
        let oT = -1,
          IT = -1,
          iT = !1;
        for (let zT of TT) {
          let TT = this.readMutation(zT);
          TT && (TT.typeOver && (iT = !0), -1 == oT ? ({
            from: oT,
            to: IT
          } = TT) : (oT = Math.min(TT.from, oT), IT = Math.max(TT.to, IT)))
        }
        return {
          from: oT,
          to: IT,
          typeOver: iT
        }
      }
      readChange() {
        let {
          from: TT,
          to: oT,
          typeOver: IT
        } = this.processRecords(), iT = this.selectionChanged && ZT(this.dom, this.selectionRange);
        if (TT < 0 && !iT) return null;
        TT > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let zT = new zi(this.view, TT, oT, IT);
        return this.view.docView.domChanged = {
          newSel: zT.newSel ? zT.newSel.main : null
        }, zT
      }
      flush() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        TT && this.readSelectionRange();
        let oT = this.readChange();
        if (!oT) return this.view.requestMeasure(), !1;
        let IT = this.view.state,
          iT = Wi(this.view, oT);
        return this.view.state == IT && (oT.domChanged || oT.newSel && !Fi(this.view.state.selection, oT.newSel.main)) && this.view.update([]), iT
      }
      readMutation(TT) {
        let oT = this.view.docView.tile.nearest(TT.target);
        if (!oT || oT.isWidget()) return null;
        if (oT.markDirty("attributes" == TT.type), "childList" == TT.type) {
          let IT = vz(oT, TT.previousSibling || TT.target.previousSibling, -1),
            iT = vz(oT, TT.nextSibling || TT.target.nextSibling, 1);
          return {
            from: IT ? oT.posAfter(IT) : oT.posAtStart,
            to: iT ? oT.posBefore(iT) : oT.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == TT.type ? {
          from: oT.posAtStart,
          to: oT.posAtEnd,
          typeOver: TT.target.nodeValue == TT.oldValue
        } : null
      }
      setWindow(TT) {
        TT != this.win && (this.removeWindowListeners(this.win), this.win = TT, this.addWindowListeners(this.win))
      }
      addWindowListeners(TT) {
        TT.addEventListener("resize", this.Tm), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : TT.addEventListener("beforeprint", this.onPrint), TT.addEventListener("scroll", this.onScroll), TT.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(TT) {
        TT.removeEventListener("scroll", this.onScroll), TT.removeEventListener("resize", this.Tm), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : TT.removeEventListener("beforeprint", this.onPrint), TT.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(TT) {
        this.editContext && (this.editContext.update(TT), TT.startState.facet(bo) != TT.state.facet(bo) && (TT.view.contentDOM.editContext = TT.state.facet(bo) ? this.editContext.editContext : null))
      }
      destroy() {
        var TT, oT, IT;
        this.stop(), null === (TT = this.intersection) || void 0 === TT || TT.disconnect(), null === (oT = this.gapIntersection) || void 0 === oT || oT.disconnect(), null === (IT = this.resizeScroll) || void 0 === IT || IT.disconnect();
        for (let iT of this.scrollTargets) iT.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function vz(TT, oT, IT) {
      for (; oT;) {
        let iT = cI.get(oT);
        if (iT && iT.parent == TT) return iT;
        let zT = oT.parentNode;
        oT = zT != TT.dom ? zT : IT > 0 ? oT.nextSibling : oT.previousSibling
      }
      return null
    }

    function Ez(TT, oT) {
      let IT = oT.startContainer,
        iT = oT.startOffset,
        zT = oT.endContainer,
        kT = oT.endOffset,
        WT = TT.docView.domAtPos(TT.state.selection.main.anchor, 1);
      return sT(WT.node, WT.offset, zT, kT) && ([IT, iT, zT, kT] = [zT, kT, IT, iT]), {
        anchorNode: IT,
        anchorOffset: iT,
        focusNode: zT,
        focusOffset: kT
      }
    }
    class fz {
      constructor(TT) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(TT.state);
        let oT = this.editContext = new window.EditContext({
          text: TT.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, TT.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(TT.state.selection.main.head)
        });
        this.handlers.textupdate = IT => {
          let zT = TT.state.selection.main,
            {
              anchor: kT,
              head: WT
            } = zT,
            XT = this.toEditorPos(IT.updateRangeStart),
            BT = this.toEditorPos(IT.updateRangeEnd);
          TT.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: IT.updateRangeStart,
            editorBase: XT,
            drifted: !1
          });
          let FT = BT - XT > IT.text.length;
          XT == this.from && kT < this.from ? XT = kT : BT == this.to && kT > this.to && (BT = kT);
          let ST = Bi(TT.state.sliceDoc(XT, BT), IT.text, (FT ? zT.from : zT.to) - XT, FT ? "end" : null);
          if (!ST) {
            let oT = iT.k.single(this.toEditorPos(IT.selectionStart), this.toEditorPos(IT.selectionEnd));
            return void(Fi(oT, zT) || TT.dispatch({
              selection: oT,
              userEvent: "select"
            }))
          }
          let DT = {
            from: ST.from + XT,
            to: ST.toA + XT,
            insert: iT.N.of(IT.text.slice(ST.from, ST.toB).split("\n"))
          };
          if ((eT.mac || eT.android) && DT.from == WT - 1 && /^\. ?$/.test(IT.text) && "off" == TT.contentDOM.getAttribute("autocorrect") && (DT = {
              from: XT,
              to: BT,
              insert: iT.N.of([IT.text.replace(".", " ")])
            }), this.pendingContextChange = DT, !TT.state.readOnly) {
            let oT = this.to - this.from + (DT.to - DT.from + DT.insert.length);
            Xi(TT, DT, iT.k.single(this.toEditorPos(IT.selectionStart, oT), this.toEditorPos(IT.selectionEnd, oT)))
          }
          this.pendingContextChange && (this.revertPending(TT.state), this.setSelection(TT.state)), DT.from < DT.to && !DT.insert.length && TT.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(oT.text.slice(Math.max(0, IT.updateRangeStart - 1), Math.min(oT.text.length, IT.updateRangeStart + 1))) && this.handlers.compositionend(IT)
        }, this.handlers.characterboundsupdate = IT => {
          let iT = [],
            zT = null;
          for (let oT = this.toEditorPos(IT.rangeStart), kT = this.toEditorPos(IT.rangeEnd); oT < kT; oT++) {
            let IT = TT.coordsForChar(oT);
            zT = IT && new DOMRect(IT.left, IT.top, IT.right - IT.left, IT.bottom - IT.top) || zT || new DOMRect, iT.push(zT)
          }
          oT.updateCharacterBounds(IT.rangeStart, iT)
        }, this.handlers.textformatupdate = oT => {
          let IT = [];
          for (let TT of oT.getTextFormats()) {
            let oT = TT.underlineStyle,
              iT = TT.underlineThickness;
            if (!/none/i.test(oT) && !/none/i.test(iT)) {
              let zT = this.toEditorPos(TT.rangeStart),
                kT = this.toEditorPos(TT.rangeEnd);
              if (zT < kT) {
                let TT = `text-decoration: underline ${/^[a-z]/.test(oT)?oT+" ":"Dashed"==oT?"dashed ":"Squiggle"==oT?"wavy ":""}${/thin/i.test(iT)?1:2}px`;
                IT.push(JT.mark({
                  attributes: {
                    style: TT
                  }
                }).range(zT, kT))
              }
            }
          }
          TT.dispatch({
            effects: Go.of(JT.set(IT))
          })
        }, this.handlers.compositionstart = () => {
          TT.inputState.composing < 0 && (TT.inputState.composing = 0, TT.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (TT.inputState.composing = -1, TT.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: oT
            } = this.composing;
            this.composing = null, oT && this.reset(TT.state)
          }
        };
        for (let IT in this.handlers) oT.addEventListener(IT, this.handlers[IT]);
        this.measureReq = {
          read: TT => {
            this.editContext.updateControlBounds(TT.contentDOM.getBoundingClientRect());
            let oT = nT(TT.root);
            oT && oT.rangeCount && this.editContext.updateSelectionBounds(oT.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(TT) {
        let oT = 0,
          IT = !1,
          iT = this.pendingContextChange;
        return TT.changes.iterChanges(((zT, kT, WT, XT, BT) => {
          if (IT) return;
          let FT = BT.length - (kT - zT);
          if (iT && kT >= iT.to) {
            if (iT.from == zT && iT.to == kT && iT.insert.eq(BT)) return iT = this.pendingContextChange = null, oT += FT, void(this.to += FT);
            iT = null, this.revertPending(TT.state)
          }
          if (zT += oT, (kT += oT) <= this.from) this.from += FT, this.to += FT;
          else if (zT < this.to) {
            if (zT < this.from || kT > this.to || this.to - this.from + BT.length > 3e4) return void(IT = !0);
            this.editContext.updateText(this.toContextPos(zT), this.toContextPos(kT), BT.toString()), this.to += FT
          }
          oT += FT
        })), iT && !IT && this.revertPending(TT.state), !IT
      }
      update(TT) {
        let oT = this.pendingContextChange,
          IT = TT.startState.selection.main;
        this.composing && (this.composing.drifted || !TT.changes.touchesRange(IT.from, IT.to) && TT.transactions.some((TT => !TT.isUserEvent("input.type") && TT.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = TT.changes.mapPos(this.composing.editorBase)) : this.applyEdits(TT) && this.rangeIsValid(TT.state) ? (TT.docChanged || TT.selectionSet || oT) && this.setSelection(TT.state) : (this.pendingContextChange = null, this.reset(TT.state)), (TT.geometryChanged || TT.docChanged || TT.selectionSet) && TT.view.requestMeasure(this.measureReq)
      }
      resetRange(TT) {
        let {
          head: oT
        } = TT.selection.main;
        this.from = Math.max(0, oT - 1e4), this.to = Math.min(TT.doc.length, oT + 1e4)
      }
      reset(TT) {
        this.resetRange(TT), this.editContext.updateText(0, this.editContext.text.length, TT.doc.sliceString(this.from, this.to)), this.setSelection(TT)
      }
      revertPending(TT) {
        let oT = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(oT.from), this.toContextPos(oT.from + oT.insert.length), TT.doc.sliceString(oT.from, oT.to))
      }
      setSelection(TT) {
        let {
          main: oT
        } = TT.selection, IT = this.toContextPos(Math.max(this.from, Math.min(this.to, oT.anchor))), iT = this.toContextPos(oT.head);
        this.editContext.selectionStart == IT && this.editContext.selectionEnd == iT || this.editContext.updateSelection(IT, iT)
      }
      rangeIsValid(TT) {
        let {
          head: oT
        } = TT.selection.main;
        return !(this.from > 0 && oT - this.from < 500 || this.to < TT.doc.length && this.to - oT < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        TT = Math.min(TT, oT);
        let IT = this.composing;
        return IT && IT.drifted ? IT.editorBase + (TT - IT.contextBase) : TT + this.from
      }
      toContextPos(TT) {
        let oT = this.composing;
        return oT && oT.drifted ? oT.contextBase + (TT - oT.editorBase) : TT - this.from
      }
      destroy() {
        for (let TT in this.handlers) this.editContext.removeEventListener(TT, this.handlers[TT])
      }
    }
    class Cz {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get o2() {
        return this.viewState.o2
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
        var oT;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), TT.parent && TT.parent.appendChild(this.dom);
        let {
          dispatch: IT
        } = TT;
        this.dispatchTransactions = TT.dispatchTransactions || IT && (TT => TT.forEach((TT => IT(TT, this)))) || (TT => this.update(TT)), this.dispatch = this.dispatch.bind(this), this._root = TT.root || function(TT) {
          for (; TT;) {
            if (TT && (9 == TT.nodeType || 11 == TT.nodeType && TT.host)) return TT;
            TT = TT.assignedSlot || TT.parentNode
          }
          return null
        }(TT.parent) || document, this.viewState = new Xz(this, TT.state || iT.o.create(TT)), TT.scrollTo && TT.scrollTo.is(to) && (this.viewState.scrollTarget = TT.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(No).map((TT => new Vo(TT)));
        for (let iT of this.plugins) iT.update(this);
        this.observer = new uz(this), this.inputState = new Si(this), this.inputState.ensureHandlers(this.plugins), this.docView = new HI(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (oT = document.fonts) || void 0 === oT ? void 0 : oT.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        let zT = 1 == oT.length && oT[0] instanceof iT.O ? oT : 1 == oT.length && Array.isArray(oT[0]) ? oT[0] : [this.state.update(...oT)];
        this.dispatchTransactions(zT, this)
      }
      update(TT) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let oT, IT = !1,
          zT = !1,
          kT = this.state;
        for (let iT of TT) {
          if (iT.startState != kT) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          kT = iT.state
        }
        if (this.destroyed) return void(this.viewState.state = kT);
        let WT = this.hasFocus,
          XT = 0,
          BT = null;
        TT.some((TT => TT.annotation(Ui))) ? (this.inputState.notifiedFocused = WT, XT = 1) : WT != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = WT, BT = ai(kT, WT), BT || (XT = 1));
        let FT = this.observer.delayedAndroidKey,
          ST = null;
        if (FT ? (this.observer.clearDelayedAndroidKey(), ST = this.observer.readChange(), (ST && !this.state.doc.eq(kT.doc) || !this.state.selection.eq(kT.selection)) && (ST = null)) : this.observer.clear(), kT.facet(iT.o.phrases) != this.state.facet(iT.o.phrases)) return this.setState(kT);
        oT = LI.create(this, kT, TT), oT.flags |= XT;
        let DT = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let oT of TT) {
            if (DT && (DT = DT.map(oT.changes)), oT.scrollIntoView) {
              let {
                main: TT
              } = oT.state.selection, {
                x: IT,
                y: zT
              } = this.state.facet(Cz.cursorScrollMargin);
              DT = new so(TT.empty ? TT : iT.k.cursor(TT.head, TT.head > TT.anchor ? -1 : 1), "nearest", "nearest", zT, IT)
            }
            for (let TT of oT.effects) TT.is(to) && (DT = TT.value.clip(this.state))
          }
          this.viewState.update(oT, DT), this.bidiCache = Uz.update(this.bidiCache, oT.changes), oT.empty || (this.updatePlugins(oT), this.inputState.update(oT)), IT = this.docView.update(oT), this.state.facet(SI) != this.styleModules && this.mountStyles(), zT = this.updateAttrs(), this.showAnnouncements(TT), this.docView.updateSelection(IT, TT.some((TT => TT.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (oT.startState.facet(Kz) != oT.state.facet(Kz) && (this.viewState.mustMeasureContent = !0), (IT || zT || DT || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), IT && this.docViewUpdate(), !oT.empty)
          for (let iT of this.state.facet(ao)) try {
            iT(oT)
          } catch (LT) {
            po(this.state, LT, "update listener")
          }(BT || ST) && Promise.resolve().then((() => {
            BT && this.state == BT.startState && this.dispatch(BT), ST && !Wi(this, ST) && FT.force && zo(this.contentDOM, FT.key, FT.keyCode)
          }))
      }
      setState(TT) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = TT);
        this.updateState = 2;
        let oT = this.hasFocus;
        try {
          for (let TT of this.plugins) TT.destroy(this);
          this.viewState = new Xz(this, TT), this.plugins = TT.facet(No).map((TT => new Vo(TT))), this.pluginMap.clear();
          for (let TT of this.plugins) TT.update(this);
          this.docView.destroy(), this.docView = new HI(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        oT && this.focus(), this.requestMeasure()
      }
      updatePlugins(TT) {
        let oT = TT.startState.facet(No),
          IT = TT.state.facet(No);
        if (oT != IT) {
          let iT = [];
          for (let zT of IT) {
            let IT = oT.indexOf(zT);
            if (IT < 0) iT.push(new Vo(zT));
            else {
              let oT = this.plugins[IT];
              oT.mustUpdate = TT, iT.push(oT)
            }
          }
          for (let oT of this.plugins) oT.mustUpdate != TT && oT.destroy(this);
          this.plugins = iT, this.pluginMap.clear()
        } else
          for (let iT of this.plugins) iT.mustUpdate = TT;
        for (let iT = 0; iT < this.plugins.length; iT++) this.plugins[iT].update(this);
        oT != IT && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let oT of this.plugins) {
          let IT = oT.value;
          if (IT && IT.docViewUpdate) try {
            IT.docViewUpdate(this)
          } catch (TT) {
            po(this.state, TT, "doc view update listener")
          }
        }
      }
      measure() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, TT && this.observer.forceFlush();
        let oT = null,
          IT = this.viewState.scrollParent,
          iT = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: zT,
            scrollAnchorHeight: kT
          } = this.viewState;
        Math.abs(iT - this.viewState.scrollOffset) > 1 && (kT = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let TT = 0;; TT++) {
            if (kT < 0)
              if (ko(IT || this.win)) zT = -1, kT = this.viewState.heightMap.height;
              else {
                let TT = this.viewState.scrollAnchorAt(iT);
                zT = TT.from, kT = TT.top
              } this.updateState = 1;
            let XT = this.viewState.measure();
            if (!XT && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (TT > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let BT = [];
            4 & XT || ([this.measureRequests, BT] = [BT, this.measureRequests]);
            let FT = BT.map((TT => {
                try {
                  return TT.read(this)
                } catch (oT) {
                  return po(this.state, oT), Jz
                }
              })),
              ST = LI.create(this, this.state, []),
              DT = !1;
            ST.flags |= XT, oT ? oT.flags |= XT : oT = ST, this.updateState = 2, ST.empty || (this.updatePlugins(ST), this.inputState.update(ST), this.updateAttrs(), DT = this.docView.update(ST), DT && this.docViewUpdate());
            for (let TT = 0; TT < BT.length; TT++)
              if (FT[TT] != Jz) try {
                let oT = BT[TT];
                oT.write && oT.write(FT[TT], this)
              } catch (WT) {
                po(this.state, WT)
              }
            if (DT && this.docView.updateSelection(!0), !ST.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, kT = -1;
                  continue
                } {
                  let TT = ((zT < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(zT).top) - kT) / this.scaleY;
                  if ((TT > 1 || TT < -1) && (IT == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    iT += TT, IT ? IT.scrollTop += TT : this.win.scrollBy(0, TT), kT = -1;
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
        if (oT && !oT.empty)
          for (let XT of this.state.facet(ao)) XT(oT)
      }
      get themeClasses() {
        return rz + " " + (this.state.facet(Mz) ? gz : Az) + " " + this.state.facet(Kz)
      }
      updateAttrs() {
        let TT = az(this, TI, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          oT = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(bo) ? "true" : "false",
            class: "cm-content",
            style: `${eT.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (oT["aria-readonly"] = "true"), az(this, oI, oT);
        let IT = this.observer.ignore((() => {
          let IT = ET(this.contentDOM, this.contentAttrs, oT),
            iT = ET(this.dom, this.editorAttrs, TT);
          return IT || iT
        }));
        return this.editorAttrs = TT, this.contentAttrs = oT, IT
      }
      showAnnouncements(TT) {
        let oT = !0;
        for (let IT of TT)
          for (let TT of IT.effects)
            if (TT.is(Cz.announce)) {
              oT && (this.announceDOM.textContent = ""), oT = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = TT.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(SI);
        let TT = this.state.facet(Cz.cspNonce);
        zT.b.mount(this.root, this.styleModules.concat(mz).reverse(), TT ? {
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
            for (let oT = 0; oT < this.measureRequests.length; oT++)
              if (this.measureRequests[oT].key === TT.key) return void(this.measureRequests[oT] = TT);
          this.measureRequests.push(TT)
        }
      }
      plugin(TT) {
        let oT = this.pluginMap.get(TT);
        return (void 0 === oT || oT && oT.plugin != TT) && this.pluginMap.set(TT, oT = this.plugins.find((oT => oT.plugin == TT)) || null), oT && oT.update(this).value
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
      moveByChar(TT, oT, IT) {
        return yI(this, TT, GI(this, TT, oT, IT))
      }
      moveByGroup(TT, oT) {
        return yI(this, TT, GI(this, TT, oT, (oT => function(TT, oT, IT) {
          let zT = TT.state.charCategorizer(oT),
            kT = zT(IT);
          return TT => {
            let oT = zT(TT);
            return kT == iT.g.Space && (kT = oT), kT == oT
          }
        }(this, TT.head, oT))))
      }
      visualLineSide(TT, oT) {
        let IT = this.bidiSpans(TT),
          zT = this.textDirectionAt(TT.from),
          kT = IT[oT ? IT.length - 1 : 0];
        return iT.k.cursor(kT.side(oT, zT) + TT.from, kT.forward(!oT, zT) ? 1 : -1)
      }
      moveToLineBoundary(TT, oT) {
        return function(TT, oT, IT, zT) {
          let kT = tI(TT, oT.head, oT.assoc || -1),
            WT = zT && kT.type == jT.Text && (TT.lineWrapping || kT.widgetLineBreaks) ? TT.coordsAtPos(oT.assoc < 0 && oT.head > kT.from ? oT.head - 1 : oT.head) : null;
          if (WT) {
            let oT = TT.dom.getBoundingClientRect(),
              zT = TT.textDirectionAt(kT.from),
              XT = TT.posAtCoords({
                x: IT == (zT == Fo.LTR) ? oT.right - 1 : oT.left + 1,
                y: (WT.top + WT.bottom) / 2
              });
            if (null != XT) return iT.k.cursor(XT, IT ? -1 : 1)
          }
          return iT.k.cursor(IT ? kT.to : kT.from, IT ? -1 : 1)
        }(this, TT, oT, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(TT, oT, IT) {
        return yI(this, TT, function(TT, oT, IT, zT) {
          let kT = oT.head,
            WT = IT ? 1 : -1;
          if (kT == (IT ? TT.state.doc.length : 0)) return iT.k.cursor(kT, oT.assoc);
          let XT, BT = oT.goalColumn,
            FT = TT.contentDOM.getBoundingClientRect(),
            ST = TT.coordsAtPos(kT, oT.assoc || ((oT.empty ? IT : oT.head == oT.from) ? 1 : -1)),
            DT = TT.documentTop;
          if (ST) null == BT && (BT = ST.left - FT.left), XT = WT < 0 ? ST.top : ST.bottom;
          else {
            let oT = TT.viewState.lineBlockAt(kT);
            null == BT && (BT = Math.min(FT.right - FT.left, TT.defaultCharacterWidth * (kT - oT.from))), XT = (WT < 0 ? oT.top : oT.bottom) + DT
          }
          let LT = FT.left + BT,
            xT = TT.viewState.heightOracle.textHeight >> 1,
            cT = null !== zT && void 0 !== zT ? zT : xT;
          for (let KT = 0;; KT += xT) {
            let oT = XT + (cT + KT) * WT,
              zT = PI(TT, {
                x: LT,
                y: oT
              }, !1, WT);
            if (IT ? oT > FT.bottom : oT < FT.top) return iT.k.cursor(zT.pos, zT.assoc);
            let kT = TT.coordsAtPos(zT.pos, zT.assoc),
              ST = kT ? (kT.top + kT.bottom) / 2 : 0;
            if (!kT || (IT ? ST > XT : ST < XT)) return iT.k.cursor(zT.pos, zT.assoc, void 0, BT)
          }
        }(this, TT, oT, IT))
      }
      domAtPos(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(TT, oT)
      }
      posAtDOM(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(TT, oT)
      }
      posAtCoords(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let IT = PI(this, TT, oT);
        return IT && IT.pos
      }
      posAndSideAtCoords(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), PI(this, TT, oT)
      }
      coordsAtPos(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let IT = this.docView.coordsAt(TT, oT);
        if (!IT || IT.left == IT.right) return IT;
        let iT = this.state.doc.lineAt(TT),
          zT = this.bidiSpans(iT);
        return yT(IT, zT[go.find(zT, TT - iT.from, -1, oT)].dir == Fo.LTR == oT > 0)
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
        return !this.state.facet(no) || TT < this.viewport.from || TT > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(TT))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(TT) {
        if (TT.length > jz) return uo(TT.length);
        let oT, IT = this.textDirectionAt(TT.from);
        for (let zT of this.bidiCache)
          if (zT.from == TT.from && zT.dir == IT && (zT.fresh || ho(zT.isolates, oT = XI(this, TT)))) return zT.order;
        oT || (oT = XI(this, TT));
        let iT = Ro(TT.text, IT, oT);
        return this.bidiCache.push(new Uz(TT.from, TT.to, IT, oT, !0, iT)), iT
      }
      get hasFocus() {
        var TT;
        return (this.dom.ownerDocument.hasFocus() || eT.safari && (null === (TT = this.inputState) || void 0 === TT ? void 0 : TT.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          Io(this.contentDOM), this.docView.updateSelection()
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
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var IT, zT, kT, WT;
        return to.of(new so("number" == typeof TT ? iT.k.cursor(TT) : TT, null !== (IT = oT.y) && void 0 !== IT ? IT : "nearest", null !== (zT = oT.x) && void 0 !== zT ? zT : "nearest", null !== (kT = oT.yMargin) && void 0 !== kT ? kT : 5, null !== (WT = oT.xMargin) && void 0 !== WT ? WT : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: TT,
          scrollLeft: oT
        } = this.scrollDOM, IT = this.viewState.scrollAnchorAt(TT);
        return to.of(new so(iT.k.cursor(IT.from), "start", "start", IT.top - TT, oT, !0))
      }
      setTabFocusMode(TT) {
        null == TT ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof TT ? this.inputState.tabFocusMode = TT ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + TT)
      }
      static domEventHandlers(TT) {
        return Po.define((() => ({})), {
          eventHandlers: TT
        })
      }
      static domEventObservers(TT) {
        return Po.define((() => ({})), {
          eventObservers: TT
        })
      }
      static theme(TT, oT) {
        let IT = zT.b.newName(),
          iT = [Kz.of(IT), SI.of(wz(`.${IT}`, TT))];
        return oT && oT.dark && iT.push(Mz.of(!0)), iT
      }
      static baseTheme(TT) {
        return iT.w.lowest(SI.of(wz("." + rz, TT, hz)))
      }
      static findFromDOM(TT) {
        var oT;
        let IT = TT.querySelector(".cm-content"),
          iT = IT && cI.get(IT) || cI.get(TT);
        return (null === (oT = null === iT || void 0 === iT ? void 0 : iT.root) || void 0 === oT ? void 0 : oT.view) || null
      }
    }
    Cz.styleModule = SI, Cz.inputHandler = Yo, Cz.clipboardInputFilter = Oo, Cz.clipboardOutputFilter = Ho, Cz.scrollHandler = Zo, Cz.focusChangeEffect = Qo, Cz.perLineTextDirection = no, Cz.exceptionSink = Uo, Cz.updateListener = ao, Cz.editable = bo, Cz.mouseSelectionStyle = Jo, Cz.dragMovesSelection = jo, Cz.clickAddsSelectionRange = Co, Cz.dz = II, Cz.blockWrappers = iI, Cz.outerDecorations = zI, Cz.atomicRanges = kI, Cz.bidiIsolatedRanges = WI, Cz.cursorScrollMargin = iT.p.define({
      combine: TT => {
        let oT = 5,
          IT = 5;
        for (let iT of TT) "number" == typeof iT ? oT = IT = iT : ({
          x: oT,
          y: IT
        } = iT);
        return {
          x: oT,
          y: IT
        }
      }
    }), Cz.scrollMargins = BI, Cz.darkTheme = Mz, Cz.cspNonce = iT.p.define({
      combine: TT => TT.length ? TT[0] : ""
    }), Cz.contentAttributes = oI, Cz.editorAttributes = TI, Cz.lineWrapping = Cz.contentAttributes.of({
      class: "cm-lineWrapping"
    }), Cz.announce = iT.H.define();
    const jz = 4096,
      Jz = {};
    class Uz {
      constructor(TT, oT, IT, iT, zT, kT) {
        this.from = TT, this.to = oT, this.dir = IT, this.isolates = iT, this.fresh = zT, this.order = kT
      }
      static update(TT, oT) {
        if (oT.empty && !TT.some((TT => TT.fresh))) return TT;
        let IT = [],
          iT = TT.length ? TT[TT.length - 1].dir : Fo.LTR;
        for (let zT = Math.max(0, TT.length - 10); zT < TT.length; zT++) {
          let kT = TT[zT];
          kT.dir != iT || oT.touchesRange(kT.from, kT.to) || IT.push(new Uz(oT.mapPos(kT.from, 1), oT.mapPos(kT.to, -1), kT.dir, kT.isolates, !1, kT.order))
        }
        return IT
      }
    }

    function az(TT, oT, IT) {
      for (let iT = TT.state.facet(oT), zT = iT.length - 1; zT >= 0; zT--) {
        let oT = iT[zT],
          kT = "function" == typeof oT ? oT(TT) : oT;
        kT && RT(kT, IT)
      }
      return IT
    }
    const Yz = eT.mac ? "mac" : eT.windows ? "win" : eT.linux ? "linux" : "key";

    function Qz(TT, oT, IT) {
      return oT.altKey && (TT = "Alt-" + TT), oT.ctrlKey && (TT = "Ctrl-" + TT), oT.metaKey && (TT = "Meta-" + TT), !1 !== IT && oT.shiftKey && (TT = "Shift-" + TT), TT
    }
    const Oz = iT.w.default(Cz.domEventHandlers({
        keydown: (TT, oT) => Gz(qz(oT.state), TT, oT, "editor")
      })),
      Hz = iT.p.define({
        enables: Oz
      }),
      nz = new WeakMap;

    function qz(TT) {
      let oT = TT.facet(Hz),
        IT = nz.get(oT);
      return IT || nz.set(oT, IT = function(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yz,
          IT = Object.create(null),
          iT = Object.create(null),
          zT = (TT, oT) => {
            let IT = iT[TT];
            if (null == IT) iT[TT] = oT;
            else if (IT != oT) throw new Error("Key binding " + TT + " is used both as a regular binding and as a multi-stroke prefix")
          },
          kT = (TT, iT, kT, WT, XT) => {
            var BT, FT;
            let ST = IT[TT] || (IT[TT] = Object.create(null)),
              DT = iT.split(/ (?!$)/).map((TT => function(TT, oT) {
                const IT = TT.split(/-(?!$)/);
                let iT, zT, kT, WT, XT = IT[IT.length - 1];
                "Space" == XT && (XT = " ");
                for (let BT = 0; BT < IT.length - 1; ++BT) {
                  const TT = IT[BT];
                  if (/^(cmd|meta|m)$/i.test(TT)) WT = !0;
                  else if (/^a(lt)?$/i.test(TT)) iT = !0;
                  else if (/^(c|ctrl|control)$/i.test(TT)) zT = !0;
                  else if (/^s(hift)?$/i.test(TT)) kT = !0;
                  else {
                    if (!/^mod$/i.test(TT)) throw new Error("Unrecognized modifier name: " + TT);
                    "mac" == oT ? WT = !0 : zT = !0
                  }
                }
                return iT && (XT = "Alt-" + XT), zT && (XT = "Ctrl-" + XT), WT && (XT = "Meta-" + XT), kT && (XT = "Shift-" + XT), XT
              }(TT, oT)));
            for (let oT = 1; oT < DT.length; oT++) {
              let IT = DT.slice(0, oT).join(" ");
              zT(IT, !0), ST[IT] || (ST[IT] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [oT => {
                  let iT = lz = {
                    view: oT,
                    prefix: IT,
                    scope: TT
                  };
                  return setTimeout((() => {
                    lz == iT && (lz = null)
                  }), sz), !0
                }]
              })
            }
            let LT = DT.join(" ");
            zT(LT, !1);
            let xT = ST[LT] || (ST[LT] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (FT = null === (BT = ST._any) || void 0 === BT ? void 0 : BT.run) || void 0 === FT ? void 0 : FT.slice()) || []
            });
            kT && xT.run.push(kT), WT && (xT.preventDefault = !0), XT && (xT.stopPropagation = !0)
          };
        for (let WT of TT) {
          let TT = WT.scope ? WT.scope.split(" ") : ["editor"];
          if (WT.any)
            for (let oT of TT) {
              let TT = IT[oT] || (IT[oT] = Object.create(null));
              TT._any || (TT._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: iT
              } = WT;
              for (let oT in TT) TT[oT].run.push((TT => iT(TT, tz)))
            }
          let iT = WT[oT] || WT.key;
          if (iT)
            for (let oT of TT) kT(oT, iT, WT.run, WT.preventDefault, WT.stopPropagation), WT.shift && kT(oT, "Shift-" + iT, WT.shift, WT.preventDefault, WT.stopPropagation)
        }
        return IT
      }(oT.reduce(((TT, oT) => TT.concat(oT)), []))), IT
    }

    function Zz(TT, oT, IT) {
      return Gz(qz(TT.state), oT, TT, IT)
    }
    let lz = null;
    const sz = 4e3;
    let tz = null;

    function Gz(TT, oT, IT, zT) {
      tz = oT;
      let FT = function(TT) {
          var oT = !(XT && TT.metaKey && TT.shiftKey && !TT.ctrlKey && !TT.altKey || BT && TT.shiftKey && TT.key && 1 == TT.key.length || "Unidentified" == TT.key) && TT.key || (TT.shiftKey ? WT : kT)[TT.keyCode] || TT.key || "Unidentified";
          return "Esc" == oT && (oT = "Escape"), "Del" == oT && (oT = "Delete"), "Left" == oT && (oT = "ArrowLeft"), "Up" == oT && (oT = "ArrowUp"), "Right" == oT && (oT = "ArrowRight"), "Down" == oT && (oT = "ArrowDown"), oT
        }(oT),
        ST = (0, iT.S)(FT, 0),
        DT = (0, iT.T)(ST) == FT.length && " " != FT,
        LT = "",
        xT = !1,
        cT = !1,
        KT = !1;
      lz && lz.view == IT && lz.scope == zT && (LT = lz.prefix + " ", Ki.indexOf(oT.keyCode) < 0 && (cT = !0, lz = null));
      let MT, rT, AT = new Set,
        gT = TT => {
          if (TT) {
            for (let oT of TT.run)
              if (!AT.has(oT) && (AT.add(oT), oT(IT))) return TT.stopPropagation && (KT = !0), !0;
            TT.preventDefault && (TT.stopPropagation && (KT = !0), cT = !0)
          }
          return !1
        },
        hT = TT[zT];
      return hT && (gT(hT[LT + Qz(FT, oT, !DT)]) ? xT = !0 : !DT || !(oT.altKey || oT.metaKey || oT.ctrlKey) || eT.windows && oT.ctrlKey && oT.altKey || eT.mac && oT.altKey && !oT.ctrlKey && !oT.metaKey || !(MT = kT[oT.keyCode]) || MT == FT ? DT && oT.shiftKey && gT(hT[LT + Qz(FT, oT, !0)]) && (xT = !0) : (gT(hT[LT + Qz(MT, oT, !0)]) || oT.shiftKey && (rT = WT[oT.keyCode]) != FT && rT != MT && gT(hT[LT + Qz(rT, oT, !1)])) && (xT = !0), !xT && gT(hT._any) && (xT = !0)), cT && (xT = !0), xT && KT && oT.stopPropagation(), tz = null, xT
    }
    class pz {
      constructor(TT, oT, IT, iT, zT) {
        this.className = TT, this.left = oT, this.top = IT, this.width = iT, this.height = zT
      }
      draw() {
        let TT = document.createElement("div");
        return TT.className = this.className, this.adjust(TT), TT
      }
      update(TT, oT) {
        return oT.className == this.className && (this.adjust(TT), !0)
      }
      adjust(TT) {
        TT.style.left = this.left + "px", TT.style.top = this.top + "px", null != this.width && (TT.style.width = this.width + "px"), TT.style.height = this.height + "px"
      }
      eq(TT) {
        return this.left == TT.left && this.top == TT.top && this.width == TT.width && this.height == TT.height && this.className == TT.className
      }
      static forRange(TT, oT, IT) {
        if (IT.empty) {
          let iT = TT.coordsAtPos(IT.head, IT.assoc || 1);
          if (!iT) return [];
          let zT = bz(TT);
          return [new pz(oT, iT.left - zT.left, iT.top - zT.top, null, iT.bottom - iT.top)]
        }
        return function(TT, oT, IT) {
          if (IT.to <= TT.viewport.from || IT.from >= TT.viewport.to) return [];
          let iT = Math.max(IT.from, TT.viewport.from),
            zT = Math.min(IT.to, TT.viewport.to),
            kT = TT.textDirection == Fo.LTR,
            WT = TT.contentDOM,
            XT = WT.getBoundingClientRect(),
            BT = bz(TT),
            FT = WT.querySelector(".cm-line"),
            ST = FT && window.getComputedStyle(FT),
            DT = XT.left + (ST ? parseInt(ST.paddingLeft) + Math.min(0, parseInt(ST.textIndent)) : 0),
            LT = XT.right - (ST ? parseInt(ST.paddingRight) : 0),
            xT = tI(TT, iT, 1),
            cT = tI(TT, zT, -1),
            KT = xT.type == jT.Text ? xT : null,
            MT = cT.type == jT.Text ? cT : null;
          KT && (TT.lineWrapping || xT.widgetLineBreaks) && (KT = yz(TT, iT, 1, KT));
          MT && (TT.lineWrapping || cT.widgetLineBreaks) && (MT = yz(TT, zT, -1, MT));
          if (KT && MT && KT.from == MT.from && KT.to == MT.to) return AT(gT(IT.from, IT.to, KT));
          {
            let oT = KT ? gT(IT.from, null, KT) : hT(xT, !1),
              iT = MT ? gT(null, IT.to, MT) : hT(cT, !0),
              zT = [];
            return (KT || xT).to < (MT || cT).from - (KT && MT ? 1 : 0) || xT.widgetLineBreaks > 1 && oT.bottom + TT.defaultLineHeight / 2 < iT.top ? zT.push(rT(DT, oT.bottom, LT, iT.top)) : oT.bottom < iT.top && TT.elementAtHeight((oT.bottom + iT.top) / 2).type == jT.Text && (oT.bottom = iT.top = (oT.bottom + iT.top) / 2), AT(oT).concat(zT).concat(AT(iT))
          }

          function rT(TT, IT, iT, zT) {
            return new pz(oT, TT - BT.left, IT - BT.top, Math.max(0, iT - TT), zT - IT)
          }

          function AT(TT) {
            let {
              top: oT,
              bottom: IT,
              horizontal: iT
            } = TT, zT = [];
            for (let kT = 0; kT < iT.length; kT += 2) zT.push(rT(iT[kT], oT, iT[kT + 1], IT));
            return zT
          }

          function gT(oT, IT, iT) {
            let zT = 1e9,
              WT = -1e9,
              XT = [];

            function BT(oT, IT, BT, FT, ST) {
              let xT = TT.coordsAtPos(oT, oT == iT.to ? -2 : 2),
                cT = TT.coordsAtPos(BT, BT == iT.from ? 2 : -2);
              xT && cT && (zT = Math.min(xT.top, cT.top, zT), WT = Math.max(xT.bottom, cT.bottom, WT), ST == Fo.LTR ? XT.push(kT && IT ? DT : xT.left, kT && FT ? LT : cT.right) : XT.push(!kT && FT ? DT : cT.left, !kT && IT ? LT : xT.right))
            }
            let FT = null !== oT && void 0 !== oT ? oT : iT.from,
              ST = null !== IT && void 0 !== IT ? IT : iT.to;
            for (let kT of TT.o2)
              if (kT.to > FT && kT.from < ST)
                for (let iT = Math.max(kT.from, FT), zT = Math.min(kT.to, ST);;) {
                  let kT = TT.state.doc.lineAt(iT);
                  for (let WT of TT.bidiSpans(kT)) {
                    let TT = WT.from + kT.from,
                      XT = WT.to + kT.from;
                    if (TT >= zT) break;
                    XT > iT && BT(Math.max(TT, iT), null == oT && TT <= FT, Math.min(XT, zT), null == IT && XT >= ST, WT.dir)
                  }
                  if (iT = kT.to + 1, iT >= zT) break
                }
            return 0 == XT.length && BT(FT, null == oT, ST, null == IT, TT.textDirection), {
              top: zT,
              bottom: WT,
              horizontal: XT
            }
          }

          function hT(TT, oT) {
            let IT = XT.top + (oT ? TT.top : TT.bottom);
            return {
              top: IT,
              bottom: IT,
              horizontal: []
            }
          }
        }(TT, oT, IT)
      }
    }

    function bz(TT) {
      let oT = TT.scrollDOM.getBoundingClientRect();
      return {
        left: (TT.textDirection == Fo.LTR ? oT.left : oT.right - TT.scrollDOM.clientWidth * TT.scaleX) - TT.scrollDOM.scrollLeft * TT.scaleX,
        top: oT.top - TT.scrollDOM.scrollTop * TT.scaleY
      }
    }

    function yz(TT, oT, IT, iT) {
      let zT = TT.coordsAtPos(oT, 2 * IT);
      if (!zT) return iT;
      let kT = TT.dom.getBoundingClientRect(),
        WT = (zT.top + zT.bottom) / 2,
        XT = TT.posAtCoords({
          x: kT.left + 1,
          y: WT
        }),
        BT = TT.posAtCoords({
          x: kT.right - 1,
          y: WT
        });
      return null == XT || null == BT ? iT : {
        from: Math.max(iT.from, Math.min(XT, BT)),
        to: Math.min(iT.to, Math.max(XT, BT))
      }
    }
    class Nz {
      constructor(TT, oT) {
        this.view = TT, this.layer = oT, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = TT.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), oT.above && this.dom.classList.add("cm-layer-above"), oT.class && this.dom.classList.add(oT.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(TT.state), TT.requestMeasure(this.measureReq), oT.mount && oT.mount(this.dom, TT)
      }
      update(TT) {
        TT.startState.facet(Pz) != TT.state.facet(Pz) && this.setOrder(TT.state), (this.layer.update(TT, this.dom) || TT.geometryChanged) && (this.scale(), TT.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(TT) {
        !1 !== this.layer.updateOnDocViewUpdate && TT.requestMeasure(this.measureReq)
      }
      setOrder(TT) {
        let oT = 0,
          IT = TT.facet(Pz);
        for (; oT < IT.length && IT[oT] != this.layer;) oT++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - oT)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: TT,
          scaleY: oT
        } = this.view;
        TT == this.scaleX && oT == this.scaleY || (this.scaleX = TT, this.scaleY = oT, this.dom.style.transform = `scale(${1/TT}, ${1/oT})`)
      }
      draw(TT) {
        if (TT.length != this.drawn.length || TT.some(((TT, oT) => {
            return IT = TT, iT = this.drawn[oT], !(IT.constructor == iT.constructor && IT.eq(iT));
            var IT, iT
          }))) {
          let oT = this.dom.firstChild,
            IT = 0;
          for (let iT of TT) iT.update && oT && iT.constructor && this.drawn[IT].constructor && iT.update(oT, this.drawn[IT]) ? (oT = oT.nextSibling, IT++) : this.dom.insertBefore(iT.draw(), oT);
          for (; oT;) {
            let TT = oT.nextSibling;
            oT.remove(), oT = TT
          }
          this.drawn = TT, eT.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const Pz = iT.p.define();

    function dz(TT) {
      return [Po.define((oT => new Nz(oT, TT))), Pz.of(TT)]
    }
    const Vz = iT.p.define({
      combine: TT => (0, iT.V)(TT, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (TT, oT) => Math.min(TT, oT),
        drawRangeCursor: (TT, oT) => TT || oT
      })
    });

    function Tk() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Vz.of(TT), ik, kk, Wk, qo.of(!0)]
    }

    function Ik(TT) {
      return TT.startState.facet(Vz) != TT.state.facet(Vz)
    }
    const ik = dz({
      above: !0,
      markers(TT) {
        let {
          state: oT
        } = TT, IT = oT.facet(Vz), zT = [];
        for (let kT of oT.selection.ec) {
          let WT = kT == oT.selection.main;
          if (kT.empty || IT.drawRangeCursor && !(WT && eT.ios && IT.iosSelectionHandles)) {
            let oT = WT ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              IT = kT.empty ? kT : iT.k.cursor(kT.head, kT.assoc);
            for (let iT of pz.forRange(TT, oT, IT)) zT.push(iT)
          }
        }
        return zT
      },
      update(TT, oT) {
        TT.transactions.some((TT => TT.selection)) && (oT.style.animationName = "cm-blink" == oT.style.animationName ? "cm-blink2" : "cm-blink");
        let IT = Ik(TT);
        return IT && zk(TT.state, oT), TT.docChanged || TT.selectionSet || IT
      },
      mount(TT, oT) {
        zk(oT.state, TT)
      },
      class: "cm-cursorLayer"
    });

    function zk(TT, oT) {
      oT.style.animationDuration = TT.facet(Vz).cursorBlinkRate + "ms"
    }
    const kk = dz({
        above: !1,
        markers(TT) {
          let oT = [],
            {
              main: IT,
              ec: zT
            } = TT.state.selection;
          for (let iT of zT)
            if (!iT.empty)
              for (let IT of pz.forRange(TT, "cm-selectionBackground", iT)) oT.push(IT);
          if (eT.ios && !IT.empty && TT.state.facet(Vz).iosSelectionHandles) {
            for (let zT of pz.forRange(TT, "cm-selectionHandle cm-selectionHandle-start", iT.k.cursor(IT.from, 1))) oT.push(zT);
            for (let zT of pz.forRange(TT, "cm-selectionHandle cm-selectionHandle-end", iT.k.cursor(IT.to, 1))) oT.push(zT)
          }
          return oT
        },
        update: (TT, oT) => TT.docChanged || TT.selectionSet || TT.viewportChanged || Ik(TT),
        class: "cm-selectionLayer"
      }),
      Wk = iT.w.highest(Cz.theme({
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
      Xk = iT.H.define({
        map: (TT, oT) => null == TT ? null : oT.mapPos(TT)
      }),
      Bk = iT.K.define({
        create: () => null,
        update: (TT, oT) => (null != TT && (TT = oT.changes.mapPos(TT)), oT.effects.reduce(((TT, oT) => oT.is(Xk) ? oT.value : TT), TT))
      }),
      Fk = Po.fromClass(class {
        constructor(TT) {
          this.view = TT, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(TT) {
          var oT;
          let IT = TT.state.field(Bk);
          null == IT ? null != this.cursor && (null === (oT = this.cursor) || void 0 === oT || oT.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (TT.startState.field(Bk) != IT || TT.docChanged || TT.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: TT
          } = this, oT = TT.state.field(Bk), IT = null != oT && TT.coordsAtPos(oT);
          if (!IT) return null;
          let iT = TT.scrollDOM.getBoundingClientRect();
          return {
            left: IT.left - iT.left + TT.scrollDOM.scrollLeft * TT.scaleX,
            top: IT.top - iT.top + TT.scrollDOM.scrollTop * TT.scaleY,
            height: IT.bottom - IT.top
          }
        }
        drawCursor(TT) {
          if (this.cursor) {
            let {
              scaleX: oT,
              scaleY: IT
            } = this.view;
            TT ? (this.cursor.style.left = TT.left / oT + "px", this.cursor.style.top = TT.top / IT + "px", this.cursor.style.height = TT.height / IT + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(TT) {
          this.view.state.field(Bk) != TT && this.view.dispatch({
            effects: Xk.of(TT)
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

    function Sk() {
      return [Bk, Fk]
    }

    function Dk(TT, oT, IT, iT, zT) {
      oT.lastIndex = 0;
      for (let kT, WT = TT.iterRange(IT, iT), XT = IT; !WT.next().done; XT += WT.value.length)
        if (!WT.lineBreak)
          for (; kT = oT.exec(WT.value);) zT(XT + kT.index, kT)
    }
    class Lk {
      constructor(TT) {
        const {
          regexp: oT,
          decoration: IT,
          decorate: iT,
          boundary: zT,
          maxLength: kT = 1e3
        } = TT;
        if (!oT.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = oT, iT) this.addMatch = (TT, oT, IT, zT) => iT(zT, IT, IT + TT[0].length, TT, oT);
        else if ("function" == typeof IT) this.addMatch = (TT, oT, iT, zT) => {
          let kT = IT(TT, oT, iT);
          kT && zT(iT, iT + TT[0].length, kT)
        };
        else {
          if (!IT) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (TT, oT, iT, zT) => zT(iT, iT + TT[0].length, IT)
        }
        this.boundary = zT, this.maxLength = kT
      }
      createDeco(TT) {
        let oT = new iT.A,
          IT = oT.add.bind(oT);
        for (let {
            from: iT,
            to: zT
          }
          of
          function(TT, oT) {
            let IT = TT.o2;
            if (1 == IT.length && IT[0].from == TT.viewport.from && IT[0].to == TT.viewport.to) return IT;
            let iT = [];
            for (let {
                from: zT,
                to: kT
              }
              of IT) zT = Math.max(TT.state.doc.lineAt(zT).from, zT - oT), kT = Math.min(TT.state.doc.lineAt(kT).to, kT + oT), iT.length && iT[iT.length - 1].to >= zT ? iT[iT.length - 1].to = kT : iT.push({
              from: zT,
              to: kT
            });
            return iT
          }(TT, this.maxLength)) Dk(TT.state.doc, this.regexp, iT, zT, ((oT, iT) => this.addMatch(iT, TT, oT, IT)));
        return oT.finish()
      }
      updateDeco(TT, oT) {
        let IT = 1e9,
          iT = -1;
        return TT.docChanged && TT.changes.iterChanges(((oT, zT, kT, WT) => {
          WT >= TT.view.viewport.from && kT <= TT.view.viewport.to && (IT = Math.min(kT, IT), iT = Math.max(WT, iT))
        })), TT.viewportMoved || iT - IT > 1e3 ? this.createDeco(TT.view) : iT > -1 ? this.updateRange(TT.view, oT.map(TT.changes), IT, iT) : oT
      }
      updateRange(TT, oT, IT, iT) {
        for (let zT of TT.o2) {
          let kT = Math.max(zT.from, IT),
            WT = Math.min(zT.to, iT);
          if (WT >= kT) {
            let IT = TT.state.doc.lineAt(kT),
              iT = IT.to < WT ? TT.state.doc.lineAt(WT) : IT,
              XT = Math.max(zT.from, IT.from),
              BT = Math.min(zT.to, iT.to);
            if (this.boundary) {
              for (; kT > IT.from; kT--)
                if (this.boundary.test(IT.text[kT - 1 - IT.from])) {
                  XT = kT;
                  break
                } for (; WT < iT.to; WT++)
                if (this.boundary.test(iT.text[WT - iT.from])) {
                  BT = WT;
                  break
                }
            }
            let FT, ST = [],
              DT = (TT, oT, IT) => ST.push(IT.range(TT, oT));
            if (IT == iT)
              for (this.regexp.lastIndex = XT - IT.from;
                (FT = this.regexp.exec(IT.text)) && FT.index < BT - IT.from;) this.addMatch(FT, TT, FT.index + IT.from, DT);
            else Dk(TT.state.doc, this.regexp, XT, BT, ((oT, IT) => this.addMatch(IT, TT, oT, DT)));
            oT = oT.update({
              filterFrom: XT,
              filterTo: BT,
              filter: (TT, oT) => TT < XT || oT > BT,
              add: ST
            })
          }
        }
        return oT
      }
    }
    const xk = null != /x/.unicode ? "gu" : "g",
      ck = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", xk),
      Kk = {
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
    let Mk = null;
    const rk = iT.p.define({
      combine(TT) {
        let oT = (0, iT.V)(TT, {
          render: null,
          specialChars: ck,
          addSpecialChars: null
        });
        return (oT.replaceTabs = ! function() {
          var TT;
          if (null == Mk && "undefined" != typeof document && document.body) {
            let oT = document.body.style;
            Mk = null != (null !== (TT = oT.tabSize) && void 0 !== TT ? TT : oT.MozTabSize)
          }
          return Mk || !1
        }()) && (oT.specialChars = new RegExp("\t|" + oT.specialChars.source, xk)), oT.addSpecialChars && (oT.specialChars = new RegExp(oT.specialChars.source + "|" + oT.addSpecialChars.source, xk)), oT
      }
    });

    function Ak() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [rk.of(TT), gk || (gk = Po.fromClass(class {
        constructor(TT) {
          this.view = TT, this.dz = JT.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(TT.state.facet(rk)), this.dz = this.decorator.createDeco(TT)
        }
        makeDecorator(TT) {
          return new Lk({
            regexp: TT.specialChars,
            decoration: (oT, IT, zT) => {
              let {
                doc: kT
              } = IT.state, WT = (0, iT.S)(oT[0], 0);
              if (9 == WT) {
                let TT = kT.lineAt(zT),
                  oT = IT.state.tabSize,
                  WT = (0, iT.Y)(TT.text, oT, zT - TT.from);
                return JT.replace({
                  widget: new wk((oT - WT % oT) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[WT] || (this.decorationCache[WT] = JT.replace({
                widget: new hk(TT, WT)
              }))
            },
            boundary: TT.replaceTabs ? void 0 : /[^]/
          })
        }
        update(TT) {
          let oT = TT.state.facet(rk);
          TT.startState.facet(rk) != oT ? (this.decorator = this.makeDecorator(oT), this.dz = this.decorator.createDeco(TT.view)) : this.dz = this.decorator.updateDeco(TT, this.dz)
        }
      }, {
        dz: TT => TT.dz
      }))]
    }
    let gk = null;
    class hk extends CT {
      constructor(TT, oT) {
        super(), this.options = TT, this.code = oT
      }
      eq(TT) {
        return TT.code == this.code
      }
      toDOM(TT) {
        let oT = function(TT) {
            return TT >= 32 ? "\u2022" : 10 == TT ? "\u2424" : String.fromCharCode(9216 + TT)
          }(this.code),
          IT = TT.state.phrase("Control character") + " " + (Kk[this.code] || "0x" + this.code.toString(16)),
          iT = this.options.render && this.options.render(this.code, IT, oT);
        if (iT) return iT;
        let zT = document.createElement("span");
        return zT.textContent = oT, zT.title = IT, zT.setAttribute("aria-label", IT), zT.className = "cm-specialChar", zT
      }
      ignoreEvent() {
        return !1
      }
    }
    class wk extends CT {
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

    function mk() {
      return Rk
    }
    const ek = JT.line({
        class: "cm-activeLine"
      }),
      Rk = Po.fromClass(class {
        constructor(TT) {
          this.dz = this.getDeco(TT)
        }
        update(TT) {
          (TT.docChanged || TT.selectionSet) && (this.dz = this.getDeco(TT.view))
        }
        getDeco(TT) {
          let oT = -1,
            IT = [];
          for (let iT of TT.state.selection.ec) {
            let zT = TT.lineBlockAt(iT.head);
            zT.from > oT && (IT.push(ek.range(zT.from)), oT = zT.from)
          }
          return JT.set(IT)
        }
      }, {
        dz: TT => TT.dz
      });
    class uk extends CT {
      constructor(TT) {
        super(), this.content = TT
      }
      toDOM(TT) {
        let oT = document.createElement("span");
        return oT.className = "cm-placeholder", oT.style.pointerEvents = "none", oT.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(TT) : this.content.cloneNode(!0)), oT.setAttribute("aria-hidden", "true"), oT
      }
      coordsAt(TT) {
        let oT = TT.firstChild ? lT(TT.firstChild) : [];
        if (!oT.length) return null;
        let IT = window.getComputedStyle(TT.parentNode),
          iT = yT(oT[0], "rtl" != IT.direction),
          zT = parseInt(IT.lineHeight);
        return iT.bottom - iT.top > 1.5 * zT ? {
          left: iT.left,
          right: iT.right,
          top: iT.top,
          bottom: iT.top + zT
        } : iT
      }
      ignoreEvent() {
        return !1
      }
    }

    function vk(TT) {
      let oT = Po.fromClass(class {
        constructor(oT) {
          this.view = oT, this.placeholder = TT ? JT.set([JT.widget({
            widget: new uk(TT),
            side: 1
          }).range(0)]) : JT.none
        }
        get dz() {
          return this.view.state.doc.length ? JT.none : this.placeholder
        }
      }, {
        dz: TT => TT.dz
      });
      return "string" == typeof TT ? [oT, Cz.contentAttributes.of({
        "aria-placeholder": TT
      })] : oT
    }
    const Ek = 2e3;

    function fk(TT, oT) {
      let IT = TT.posAtCoords({
          x: oT.clientX,
          y: oT.clientY
        }, !1),
        zT = TT.state.doc.lineAt(IT),
        kT = IT - zT.from,
        WT = kT > Ek ? -1 : kT == zT.length ? function(TT, oT) {
          let IT = TT.coordsAtPos(TT.viewport.from);
          return IT ? Math.round(Math.abs((IT.left - oT) / TT.defaultCharacterWidth)) : -1
        }(TT, oT.clientX) : (0, iT.Y)(zT.text, TT.state.tabSize, IT - zT.from);
      return {
        line: zT.number,
        col: WT,
        off: kT
      }
    }

    function Ck(TT, oT) {
      let IT = fk(TT, oT),
        zT = TT.state.selection;
      return IT ? {
        update(TT) {
          if (TT.docChanged) {
            let oT = TT.changes.mapPos(TT.startState.doc.line(IT.line).from),
              iT = TT.state.doc.lineAt(oT);
            IT = {
              line: iT.number,
              col: IT.col,
              off: Math.min(IT.off, iT.length)
            }, zT = zT.map(TT.changes)
          }
        },
        get(oT, kT, WT) {
          let XT = fk(TT, oT);
          if (!XT) return zT;
          let BT = function(TT, oT, IT) {
            let zT = Math.min(oT.line, IT.line),
              kT = Math.max(oT.line, IT.line),
              WT = [];
            if (oT.off > Ek || IT.off > Ek || oT.col < 0 || IT.col < 0) {
              let XT = Math.min(oT.off, IT.off),
                BT = Math.max(oT.off, IT.off);
              for (let oT = zT; oT <= kT; oT++) {
                let IT = TT.doc.line(oT);
                IT.length <= BT && WT.push(iT.k.range(IT.from + XT, IT.to + BT))
              }
            } else {
              let XT = Math.min(oT.col, IT.col),
                BT = Math.max(oT.col, IT.col);
              for (let oT = zT; oT <= kT; oT++) {
                let IT = TT.doc.line(oT),
                  zT = (0, iT.db)(IT.text, XT, TT.tabSize, !0);
                if (zT < 0) WT.push(iT.k.cursor(IT.to));
                else {
                  let oT = (0, iT.db)(IT.text, BT, TT.tabSize);
                  WT.push(iT.k.range(IT.from + zT, IT.from + oT))
                }
              }
            }
            return WT
          }(TT.state, IT, XT);
          return BT.length ? WT ? iT.k.create(BT.concat(zT.ec)) : iT.k.create(BT) : zT
        }
      } : null
    }

    function jk(TT) {
      let oT = (null === TT || void 0 === TT ? void 0 : TT.eventFilter) || (TT => TT.altKey && 0 == TT.button);
      return Cz.mouseSelectionStyle.of(((TT, IT) => oT(IT) ? Ck(TT, IT) : null))
    }
    const Jk = {
        Alt: [18, TT => !!TT.altKey],
        Control: [17, TT => !!TT.ctrlKey],
        Shift: [16, TT => !!TT.shiftKey],
        Meta: [91, TT => !!TT.metaKey]
      },
      Uk = {
        style: "cursor: crosshair"
      };

    function ak() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [oT, IT] = Jk[TT.key || "Alt"],
        iT = Po.fromClass(class {
          constructor(TT) {
            this.view = TT, this.isDown = !1
          }
          set(TT) {
            this.isDown != TT && (this.isDown = TT, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(TT) {
              this.set(TT.keyCode == oT || IT(TT))
            },
            keyup(TT) {
              TT.keyCode != oT && IT(TT) || this.set(!1)
            },
            mousemove(TT) {
              this.set(IT(TT))
            }
          }
        });
      return [iT, Cz.contentAttributes.of((TT => {
        var oT;
        return (null === (oT = TT.plugin(iT)) || void 0 === oT ? void 0 : oT.isDown) ? Uk : null
      }))]
    }
    const Yk = "-10000px";
    class Qk {
      constructor(TT, oT, IT, iT) {
        this.facet = oT, this.createTooltipView = IT, this.removeTooltipView = iT, this.input = TT.state.facet(oT), this.tooltips = this.input.filter((TT => TT));
        let zT = null;
        this.tooltipViews = this.tooltips.map((TT => zT = IT(TT, zT)))
      }
      update(TT, oT) {
        var IT;
        let iT = TT.state.facet(this.facet),
          zT = iT.filter((TT => TT));
        if (iT === this.input) {
          for (let oT of this.tooltipViews) oT.update && oT.update(TT);
          return !1
        }
        let kT = [],
          WT = oT ? [] : null;
        for (let XT = 0; XT < zT.length; XT++) {
          let IT = zT[XT],
            iT = -1;
          if (IT) {
            for (let TT = 0; TT < this.tooltips.length; TT++) {
              let oT = this.tooltips[TT];
              oT && oT.create == IT.create && (iT = TT)
            }
            if (iT < 0) kT[XT] = this.createTooltipView(IT, XT ? kT[XT - 1] : null), WT && (WT[XT] = !!IT.above);
            else {
              let IT = kT[XT] = this.tooltipViews[iT];
              WT && (WT[XT] = oT[iT]), IT.update && IT.update(TT)
            }
          }
        }
        for (let XT of this.tooltipViews) kT.indexOf(XT) < 0 && (this.removeTooltipView(XT), null === (IT = XT.destroy) || void 0 === IT || IT.call(XT));
        return oT && (WT.forEach(((TT, IT) => oT[IT] = TT)), oT.length = WT.length), this.input = iT, this.tooltips = zT, this.tooltipViews = kT, !0
      }
    }

    function Ok(TT) {
      let oT = TT.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: oT.clientHeight,
        right: oT.clientWidth
      }
    }
    const Hk = iT.p.define({
        combine: TT => {
          var oT, IT, iT;
          return {
            position: eT.ios ? "absolute" : (null === (oT = TT.find((TT => TT.position))) || void 0 === oT ? void 0 : oT.position) || "fixed",
            parent: (null === (IT = TT.find((TT => TT.parent))) || void 0 === IT ? void 0 : IT.parent) || null,
            tooltipSpace: (null === (iT = TT.find((TT => TT.tooltipSpace))) || void 0 === iT ? void 0 : iT.tooltipSpace) || Ok
          }
        }
      }),
      nk = new WeakMap,
      qk = Po.fromClass(class {
        constructor(TT) {
          this.view = TT, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let oT = TT.state.facet(Hk);
          this.position = oT.position, this.parent = oT.parent, this.classes = TT.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new Qk(TT, tk, ((TT, oT) => this.createTooltip(TT, oT)), (TT => {
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
          let oT = this.manager.update(TT, this.above);
          oT && this.observeIntersection();
          let IT = oT || TT.geometryChanged,
            iT = TT.state.facet(Hk);
          if (iT.position != this.position && !this.madeAbsolute) {
            this.position = iT.position;
            for (let TT of this.manager.tooltipViews) TT.dom.style.position = this.position;
            IT = !0
          }
          if (iT.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = iT.parent, this.createContainer();
            for (let TT of this.manager.tooltipViews) this.container.appendChild(TT.dom);
            IT = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          IT && this.maybeMeasure()
        }
        createTooltip(TT, oT) {
          let IT = TT.create(this.view),
            iT = oT ? oT.dom : null;
          if (IT.dom.classList.add("cm-tooltip"), TT.arrow && !IT.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let TT = document.createElement("div");
            TT.className = "cm-tooltip-arrow", IT.dom.appendChild(TT)
          }
          return IT.dom.style.position = this.position, IT.dom.style.top = Yk, IT.dom.style.left = "0px", this.container.insertBefore(IT.dom, iT), IT.mount && IT.mount(this.view), this.resizeObserver && this.resizeObserver.observe(IT.dom), IT
        }
        destroy() {
          var TT, oT, IT;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let iT of this.manager.tooltipViews) iT.dom.remove(), null === (TT = iT.destroy) || void 0 === TT || TT.call(iT);
          this.parent && this.container.remove(), null === (oT = this.resizeObserver) || void 0 === oT || oT.disconnect(), null === (IT = this.intersectionObserver) || void 0 === IT || IT.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let TT = 1,
            oT = 1,
            IT = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: TT
            } = this.manager.tooltipViews[0];
            if (eT.safari) {
              let oT = TT.getBoundingClientRect();
              IT = Math.abs(oT.top + 1e4) > 1 || Math.abs(oT.left) > 1
            } else IT = !!TT.offsetParent && TT.offsetParent != this.container.ownerDocument.body
          }
          if (IT || "absolute" == this.position)
            if (this.parent) {
              let IT = this.parent.getBoundingClientRect();
              IT.width && IT.height && (TT = IT.width / this.parent.offsetWidth, oT = IT.height / this.parent.offsetHeight)
            } else({
              scaleX: TT,
              scaleY: oT
            } = this.view.viewState);
          let iT = this.view.scrollDOM.getBoundingClientRect(),
            zT = FI(this.view);
          return {
            visible: {
              left: iT.left + zT.left,
              top: iT.top + zT.top,
              right: iT.right - zT.right,
              bottom: iT.bottom - zT.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((TT, oT) => {
              let IT = this.manager.tooltipViews[oT];
              return IT.getCoords ? IT.getCoords(TT.pos) : this.view.coordsAtPos(TT.pos)
            })),
            size: this.manager.tooltipViews.map((TT => {
              let {
                dom: oT
              } = TT;
              return oT.getBoundingClientRect()
            })),
            space: this.view.state.facet(Hk).tooltipSpace(this.view),
            scaleX: TT,
            scaleY: oT,
            makeAbsolute: IT
          }
        }
        writeMeasure(TT) {
          var oT;
          if (TT.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let TT of this.manager.tooltipViews) TT.dom.style.position = "absolute"
          }
          let {
            visible: IT,
            space: iT,
            scaleX: zT,
            scaleY: kT
          } = TT, WT = [];
          for (let XT = 0; XT < this.manager.tooltips.length; XT++) {
            let BT = this.manager.tooltips[XT],
              FT = this.manager.tooltipViews[XT],
              {
                dom: ST
              } = FT,
              DT = TT.pos[XT],
              LT = TT.size[XT];
            if (!DT || !1 !== BT.clip && (DT.bottom <= Math.max(IT.top, iT.top) || DT.top >= Math.min(IT.bottom, iT.bottom) || DT.right < Math.max(IT.left, iT.left) - .1 || DT.left > Math.min(IT.right, iT.right) + .1)) {
              ST.style.top = Yk;
              continue
            }
            let xT = BT.arrow ? FT.dom.querySelector(".cm-tooltip-arrow") : null,
              cT = xT ? 7 : 0,
              KT = LT.right - LT.left,
              MT = null !== (oT = nk.get(FT)) && void 0 !== oT ? oT : LT.bottom - LT.top,
              rT = FT.offset || sk,
              AT = this.view.textDirection == Fo.LTR,
              gT = LT.width > iT.right - iT.left ? AT ? iT.left : iT.right - LT.width : AT ? Math.max(iT.left, Math.min(DT.left - (xT ? 14 : 0) + rT.x, iT.right - KT)) : Math.min(Math.max(iT.left, DT.left - KT + (xT ? 14 : 0) - rT.x), iT.right - KT),
              hT = this.above[XT];
            !BT.strictSide && (hT ? DT.top - MT - cT - rT.y < iT.top : DT.bottom + MT + cT + rT.y > iT.bottom) && hT == iT.bottom - DT.bottom > DT.top - iT.top && (hT = this.above[XT] = !hT);
            let wT = (hT ? DT.top - iT.top : iT.bottom - DT.bottom) - cT;
            if (wT < MT && !1 !== FT.resize) {
              if (wT < this.view.defaultLineHeight) {
                ST.style.top = Yk;
                continue
              }
              nk.set(FT, MT), ST.style.height = (MT = wT) / kT + "px"
            } else ST.style.height && (ST.style.height = "");
            let mT = hT ? DT.top - MT - cT - rT.y : DT.bottom + cT + rT.y,
              eT = gT + KT;
            if (!0 !== FT.overlap)
              for (let TT of WT) TT.left < eT && TT.right > gT && TT.top < mT + MT && TT.bottom > mT && (mT = hT ? TT.top - MT - 2 - cT : TT.bottom + cT + 2);
            if ("absolute" == this.position ? (ST.style.top = (mT - TT.parent.top) / kT + "px", Zk(ST, (gT - TT.parent.left) / zT)) : (ST.style.top = mT / kT + "px", Zk(ST, gT / zT)), xT) {
              let TT = DT.left + (AT ? rT.x : -rT.x) - (gT + 14 - 7);
              xT.style.left = TT / zT + "px"
            }!0 !== FT.overlap && WT.push({
              left: gT,
              top: mT,
              right: eT,
              bottom: mT + MT
            }), ST.classList.toggle("cm-tooltip-above", hT), ST.classList.toggle("cm-tooltip-below", !hT), FT.positioned && FT.positioned(TT.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let TT of this.manager.tooltipViews) TT.dom.style.top = Yk
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function Zk(TT, oT) {
      let IT = parseInt(TT.style.left, 10);
      (isNaN(IT) || Math.abs(oT - IT) > 1) && (TT.style.left = oT + "px")
    }
    const lk = Cz.baseTheme({
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
      sk = {
        x: 0,
        y: 0
      },
      tk = iT.p.define({
        enables: [qk, lk]
      }),
      Gk = iT.p.define({
        combine: TT => TT.reduce(((TT, oT) => TT.concat(oT)), [])
      });
    class pk {
      static create(TT) {
        return new pk(TT)
      }
      constructor(TT) {
        this.view = TT, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Qk(TT, Gk, ((TT, oT) => this.createHostedView(TT, oT)), (TT => TT.dom.remove()))
      }
      createHostedView(TT, oT) {
        let IT = TT.create(this.view);
        return IT.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(IT.dom, oT ? oT.dom.nextSibling : this.dom.firstChild), this.mounted && IT.mount && IT.mount(this.view), IT
      }
      mount(TT) {
        for (let oT of this.manager.tooltipViews) oT.mount && oT.mount(TT);
        this.mounted = !0
      }
      positioned(TT) {
        for (let oT of this.manager.tooltipViews) oT.positioned && oT.positioned(TT)
      }
      update(TT) {
        this.manager.update(TT)
      }
      destroy() {
        var TT;
        for (let oT of this.manager.tooltipViews) null === (TT = oT.destroy) || void 0 === TT || TT.call(oT)
      }
      passProp(TT) {
        let oT;
        for (let IT of this.manager.tooltipViews) {
          let iT = IT[TT];
          if (void 0 !== iT)
            if (void 0 === oT) oT = iT;
            else if (oT !== iT) return
        }
        return oT
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
    const bk = tk.compute([Gk], (TT => {
      let oT = TT.facet(Gk);
      return 0 === oT.length ? null : {
        pos: Math.min(...oT.map((TT => TT.pos))),
        end: Math.max(...oT.map((TT => {
          var oT;
          return null !== (oT = TT.end) && void 0 !== oT ? oT : TT.pos
        }))),
        create: pk.create,
        above: oT[0].above,
        arrow: oT.some((TT => TT.arrow))
      }
    }));
    class yk {
      constructor(TT, oT, IT, iT, zT) {
        this.view = TT, this.source = oT, this.field = IT, this.setHover = iT, this.hoverTime = zT, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
          lastMove: oT
        } = this, IT = TT.docView.tile.nearest(oT.target);
        if (!IT) return;
        let iT, zT = 1;
        if (IT.isWidget()) iT = IT.posAtStart;
        else {
          if (iT = TT.posAtCoords(oT), null == iT) return;
          let IT = TT.coordsAtPos(iT);
          if (!IT || oT.y < IT.top || oT.y > IT.bottom || oT.x < IT.left - TT.defaultCharacterWidth || oT.x > IT.right + TT.defaultCharacterWidth) return;
          let kT = TT.bidiSpans(TT.state.doc.lineAt(iT)).find((TT => TT.from <= iT && TT.to >= iT)),
            WT = kT && kT.dir == Fo.RTL ? -1 : 1;
          zT = oT.x < IT.left ? -WT : WT
        }
        let kT = this.source(TT, iT, zT);
        if (null === kT || void 0 === kT ? void 0 : kT.then) {
          let oT = this.pending = {
            pos: iT
          };
          kT.then((IT => {
            this.pending == oT && (this.pending = null, !IT || Array.isArray(IT) && !IT.length || TT.dispatch({
              effects: this.setHover.of(Array.isArray(IT) ? IT : [IT])
            }))
          }), (oT => po(TT.state, oT, "hover tooltip")))
        } else !kT || Array.isArray(kT) && !kT.length || TT.dispatch({
          effects: this.setHover.of(Array.isArray(kT) ? kT : [kT])
        })
      }
      get tooltip() {
        let TT = this.view.plugin(qk),
          oT = TT ? TT.manager.tooltips.findIndex((TT => TT.create == pk.create)) : -1;
        return oT > -1 ? TT.manager.tooltipViews[oT] : null
      }
      mousemove(TT) {
        var oT, IT;
        this.lastMove = {
          x: TT.clientX,
          y: TT.clientY,
          target: TT.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: iT,
          tooltip: zT
        } = this;
        if (iT.length && zT && ! function(TT, oT) {
            let IT, {
              left: iT,
              right: zT,
              top: kT,
              bottom: WT
            } = TT.getBoundingClientRect();
            if (IT = TT.querySelector(".cm-tooltip-arrow")) {
              let TT = IT.getBoundingClientRect();
              kT = Math.min(TT.top, kT), WT = Math.max(TT.bottom, WT)
            }
            return oT.clientX >= iT - Nk && oT.clientX <= zT + Nk && oT.clientY >= kT - Nk && oT.clientY <= WT + Nk
          }(zT.dom, TT) || this.pending) {
          let {
            pos: zT
          } = iT[0] || this.pending, kT = null !== (IT = null === (oT = iT[0]) || void 0 === oT ? void 0 : oT.end) && void 0 !== IT ? IT : zT;
          (zT == kT ? this.view.posAtCoords(this.lastMove) == zT : function(TT, oT, IT, iT, zT) {
            let kT = TT.scrollDOM.getBoundingClientRect(),
              WT = TT.documentTop + TT.documentPadding.top + TT.contentHeight;
            if (kT.left > iT || kT.right < iT || kT.top > zT || Math.min(kT.bottom, WT) < zT) return !1;
            let XT = TT.posAtCoords({
              x: iT,
              y: zT
            }, !1);
            return XT >= oT && XT <= IT
          }(this.view, zT, kT, TT.clientX, TT.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(TT) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: oT
        } = this;
        if (oT.length) {
          let {
            tooltip: oT
          } = this;
          oT && oT.dom.contains(TT.relatedTarget) ? this.watchTooltipLeave(oT.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(TT) {
        let oT = IT => {
          TT.removeEventListener("mouseleave", oT), this.active.length && !this.view.dom.contains(IT.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        TT.addEventListener("mouseleave", oT)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const Nk = 4;

    function Pk(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        IT = iT.H.define(),
        zT = iT.K.define({
          create: () => [],
          update(TT, zT) {
            if (TT.length && (oT.hideOnChange && (zT.docChanged || zT.selection) ? TT = [] : oT.hideOn && (TT = TT.filter((TT => !oT.hideOn(zT, TT)))), zT.docChanged)) {
              let oT = [];
              for (let IT of TT) {
                let TT = zT.changes.mapPos(IT.pos, -1, iT.t.TrackDel);
                if (null != TT) {
                  let iT = Object.assign(Object.create(null), IT);
                  iT.pos = TT, null != iT.end && (iT.end = zT.changes.mapPos(iT.end)), oT.push(iT)
                }
              }
              TT = oT
            }
            for (let oT of zT.effects) oT.is(IT) && (TT = oT.value), oT.is(Vk) && (TT = []);
            return TT
          },
          provide: TT => Gk.from(TT)
        });
      return {
        active: zT,
        extension: [zT, Po.define((iT => new yk(iT, TT, zT, IT, oT.hoverTime || 300))), bk]
      }
    }

    function dk(TT, oT) {
      let IT = TT.plugin(qk);
      if (!IT) return null;
      let iT = IT.manager.tooltips.indexOf(oT);
      return iT < 0 ? null : IT.manager.tooltipViews[iT]
    }
    const Vk = iT.H.define();
    const TW = iT.p.define({
      combine(TT) {
        let oT, IT;
        for (let iT of TT) oT = oT || iT.topContainer, IT = IT || iT.bottomContainer;
        return {
          topContainer: oT,
          bottomContainer: IT
        }
      }
    });

    function oW(TT, oT) {
      let IT = TT.plugin(IW),
        iT = IT ? IT.specs.indexOf(oT) : -1;
      return iT > -1 ? IT.panels[iT] : null
    }
    const IW = Po.fromClass(class {
      constructor(TT) {
        this.input = TT.state.facet(kW), this.specs = this.input.filter((TT => TT)), this.panels = this.specs.map((oT => oT(TT)));
        let oT = TT.state.facet(TW);
        this.top = new iW(TT, !0, oT.topContainer), this.bottom = new iW(TT, !1, oT.bottomContainer), this.top.sync(this.panels.filter((TT => TT.top))), this.bottom.sync(this.panels.filter((TT => !TT.top)));
        for (let IT of this.panels) IT.dom.classList.add("cm-panel"), IT.mount && IT.mount()
      }
      update(TT) {
        let oT = TT.state.facet(TW);
        this.top.container != oT.topContainer && (this.top.sync([]), this.top = new iW(TT.view, !0, oT.topContainer)), this.bottom.container != oT.bottomContainer && (this.bottom.sync([]), this.bottom = new iW(TT.view, !1, oT.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let IT = TT.state.facet(kW);
        if (IT != this.input) {
          let oT = IT.filter((TT => TT)),
            iT = [],
            zT = [],
            kT = [],
            WT = [];
          for (let IT of oT) {
            let oT, XT = this.specs.indexOf(IT);
            XT < 0 ? (oT = IT(TT.view), WT.push(oT)) : (oT = this.panels[XT], oT.update && oT.update(TT)), iT.push(oT), (oT.top ? zT : kT).push(oT)
          }
          this.specs = oT, this.panels = iT, this.top.sync(zT), this.bottom.sync(kT);
          for (let TT of WT) TT.dom.classList.add("cm-panel"), TT.mount && TT.mount()
        } else
          for (let iT of this.panels) iT.update && iT.update(TT)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: TT => Cz.scrollMargins.of((oT => {
        let IT = oT.plugin(TT);
        return IT && {
          top: IT.top.scrollMargin(),
          bottom: IT.bottom.scrollMargin()
        }
      }))
    });
    class iW {
      constructor(TT, oT, IT) {
        this.view = TT, this.top = oT, this.container = IT, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(TT) {
        for (let oT of this.panels) oT.destroy && TT.indexOf(oT) < 0 && oT.destroy();
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
        for (let oT of this.panels)
          if (oT.dom.parentNode == this.dom) {
            for (; TT != oT.dom;) TT = zW(TT);
            TT = TT.nextSibling
          } else this.dom.insertBefore(oT.dom, TT);
        for (; TT;) TT = zW(TT)
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

    function zW(TT) {
      let oT = TT.nextSibling;
      return TT.remove(), oT
    }
    const kW = iT.p.define({
      enables: IW
    });

    function WW(TT, oT) {
      let IT, zT = new Promise((TT => IT = TT)),
        kT = TT => function(TT, oT, IT) {
          let iT = oT.content ? oT.content(TT, (() => WT(null))) : null;
          if (!iT) {
            if (iT = (0, DT.d)("form"), oT.input) {
              let TT = (0, DT.d)("input", oT.input);
              /^(text|password|number|email|tel|url)$/.test(TT.type) && TT.classList.add("cm-textfield"), TT.name || (TT.name = "input"), iT.appendChild((0, DT.d)("label", (oT.label || "") + ": ", TT))
            } else iT.appendChild(document.createTextNode(oT.label || ""));
            iT.appendChild(document.createTextNode(" ")), iT.appendChild((0, DT.d)("button", {
              class: "cm-button",
              type: "submit"
            }, oT.submitLabel || "OK"))
          }
          let zT = "FORM" == iT.nodeName ? [iT] : iT.querySelectorAll("form");
          for (let XT = 0; XT < zT.length; XT++) {
            let TT = zT[XT];
            TT.addEventListener("keydown", (oT => {
              27 == oT.keyCode ? (oT.preventDefault(), WT(null)) : 13 == oT.keyCode && (oT.preventDefault(), WT(TT))
            })), TT.addEventListener("submit", (oT => {
              oT.preventDefault(), WT(TT)
            }))
          }
          let kT = (0, DT.d)("div", iT, (0, DT.d)("button", {
            onclick: () => WT(null),
            "aria-label": TT.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          oT.class && (kT.className = oT.class);

          function WT(oT) {
            kT.contains(kT.ownerDocument.activeElement) && TT.focus(), IT(oT)
          }
          return kT.classList.add("cm-dialog"), {
            dom: kT,
            top: oT.top,
            mount: () => {
              if (oT.focus) {
                let TT;
                TT = "string" == typeof oT.focus ? iT.querySelector(oT.focus) : iT.querySelector("input") || iT.querySelector("button"), TT && "select" in TT ? TT.select() : TT && "focus" in TT && TT.focus()
              }
            }
          }
        }(TT, oT, IT);
      TT.state.field(XW, !1) ? TT.dispatch({
        effects: BW.of(kT)
      }) : TT.dispatch({
        effects: iT.H.appendConfig.of(XW.init((() => [kT])))
      });
      let WT = FW.of(kT);
      return {
        close: WT,
        result: zT.then((oT => ((TT.win.queueMicrotask || (oT => TT.win.setTimeout(oT, 10)))((() => {
          TT.state.field(XW).indexOf(kT) > -1 && TT.dispatch({
            effects: WT
          })
        })), oT)))
      }
    }
    const XW = iT.K.define({
        create: () => [],
        update(TT, oT) {
          for (let IT of oT.effects) IT.is(BW) ? TT = [IT.value].concat(TT) : IT.is(FW) && (TT = TT.filter((TT => TT != IT.value)));
          return TT
        },
        provide: TT => kW.computeN([TT], (oT => oT.field(TT)))
      }),
      BW = iT.H.define(),
      FW = iT.H.define();
    class SW extends iT.F {
      compare(TT) {
        return this == TT || this.constructor == TT.constructor && this.eq(TT)
      }
      eq(TT) {
        return !1
      }
      destroy(TT) {}
    }
    SW.prototype.elementClass = "", SW.prototype.toDOM = void 0, SW.prototype.mapMode = iT.t.TrackBefore, SW.prototype.startSide = SW.prototype.endSide = -1, SW.prototype.point = !0;
    const DW = iT.p.define(),
      LW = iT.p.define(),
      xW = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => iT.D.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      cW = iT.p.define();

    function KW(TT) {
      return [rW(), cW.of({
        ...xW,
        ...TT
      })]
    }
    const MW = iT.p.define({
      combine: TT => TT.some((TT => TT))
    });

    function rW(TT) {
      let oT = [AW];
      return TT && !1 === TT.fixed && oT.push(MW.of(!0)), oT
    }
    const AW = Po.fromClass(class {
      constructor(TT) {
        this.view = TT, this.domAfter = null, this.prevViewport = TT.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = TT.state.facet(cW).map((oT => new mW(TT, oT))), this.fixed = !TT.state.facet(MW);
        for (let oT of this.gutters) "after" == oT.config.side ? this.getDOMAfter().appendChild(oT.dom) : this.dom.appendChild(oT.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), TT.scrollDOM.insertBefore(this.dom, TT.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(TT) {
        if (this.updateGutters(TT)) {
          let oT = this.prevViewport,
            IT = TT.view.viewport,
            iT = Math.min(oT.to, IT.to) - Math.max(oT.from, IT.from);
          this.syncGutters(iT < .8 * (IT.to - IT.from))
        }
        if (TT.geometryChanged) {
          let TT = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = TT, this.domAfter && (this.domAfter.style.minHeight = TT)
        }
        this.view.state.facet(MW) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = TT.view.viewport
      }
      syncGutters(TT) {
        let oT = this.dom.nextSibling;
        TT && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let IT = iT.D.iter(this.view.state.facet(DW), this.view.viewport.from),
          zT = [],
          kT = this.gutters.map((TT => new wW(TT, this.view.viewport, -this.view.documentPadding.top)));
        for (let iT of this.view.viewportLineBlocks)
          if (zT.length && (zT = []), Array.isArray(iT.type)) {
            let TT = !0;
            for (let oT of iT.type)
              if (oT.type == jT.Text && TT) {
                hW(IT, zT, oT.from);
                for (let TT of kT) TT.line(this.view, oT, zT);
                TT = !1
              } else if (oT.widget)
              for (let TT of kT) TT.widget(this.view, oT)
          } else if (iT.type == jT.Text) {
          hW(IT, zT, iT.from);
          for (let TT of kT) TT.line(this.view, iT, zT)
        } else if (iT.widget)
          for (let TT of kT) TT.widget(this.view, iT);
        for (let iT of kT) iT.finish();
        TT && (this.view.scrollDOM.insertBefore(this.dom, oT), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(TT) {
        let oT = TT.startState.facet(cW),
          IT = TT.state.facet(cW),
          zT = TT.docChanged || TT.heightChanged || TT.viewportChanged || !iT.D.eq(TT.startState.facet(DW), TT.state.facet(DW), TT.view.viewport.from, TT.view.viewport.to);
        if (oT == IT)
          for (let iT of this.gutters) iT.update(TT) && (zT = !0);
        else {
          zT = !0;
          let iT = [];
          for (let zT of IT) {
            let IT = oT.indexOf(zT);
            IT < 0 ? iT.push(new mW(this.view, zT)) : (this.gutters[IT].update(TT), iT.push(this.gutters[IT]))
          }
          for (let TT of this.gutters) TT.dom.remove(), iT.indexOf(TT) < 0 && TT.destroy();
          for (let TT of iT) "after" == TT.config.side ? this.getDOMAfter().appendChild(TT.dom) : this.dom.appendChild(TT.dom);
          this.gutters = iT
        }
        return zT
      }
      destroy() {
        for (let TT of this.gutters) TT.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: TT => Cz.scrollMargins.of((oT => {
        let IT = oT.plugin(TT);
        if (!IT || 0 == IT.gutters.length || !IT.fixed) return null;
        let iT = IT.dom.offsetWidth * oT.scaleX,
          zT = IT.domAfter ? IT.domAfter.offsetWidth * oT.scaleX : 0;
        return oT.textDirection == Fo.LTR ? {
          left: iT,
          right: zT
        } : {
          right: iT,
          left: zT
        }
      }))
    });

    function gW(TT) {
      return Array.isArray(TT) ? TT : [TT]
    }

    function hW(TT, oT, IT) {
      for (; TT.value && TT.from <= IT;) TT.from == IT && oT.push(TT.value), TT.next()
    }
    class wW {
      constructor(TT, oT, IT) {
        this.gutter = TT, this.height = IT, this.i = 0, this.cursor = iT.D.iter(TT.markers, oT.from)
      }
      addElement(TT, oT, IT) {
        let {
          gutter: iT
        } = this, zT = (oT.top - this.height) / TT.scaleY, kT = oT.height / TT.scaleY;
        if (this.i == iT.elements.length) {
          let oT = new eW(TT, kT, zT, IT);
          iT.elements.push(oT), iT.dom.appendChild(oT.dom)
        } else iT.elements[this.i].update(TT, kT, zT, IT);
        this.height = oT.bottom, this.i++
      }
      line(TT, oT, IT) {
        let iT = [];
        hW(this.cursor, iT, oT.from), IT.length && (iT = iT.concat(IT));
        let zT = this.gutter.config.lineMarker(TT, oT, iT);
        zT && iT.unshift(zT);
        let kT = this.gutter;
        (0 != iT.length || kT.config.renderEmptyElements) && this.addElement(TT, oT, iT)
      }
      widget(TT, oT) {
        let IT = this.gutter.config.widgetMarker(TT, oT.widget, oT),
          iT = IT ? [IT] : null;
        for (let zT of TT.state.facet(LW)) {
          let IT = zT(TT, oT.widget, oT);
          IT && (iT || (iT = [])).push(IT)
        }
        iT && this.addElement(TT, oT, iT)
      }
      finish() {
        let TT = this.gutter;
        for (; TT.elements.length > this.i;) {
          let oT = TT.elements.pop();
          TT.dom.removeChild(oT.dom), oT.destroy()
        }
      }
    }
    class mW {
      constructor(TT, oT) {
        this.view = TT, this.config = oT, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let IT in oT.domEventHandlers) this.dom.addEventListener(IT, (iT => {
          let zT, kT = iT.target;
          if (kT != this.dom && this.dom.contains(kT)) {
            for (; kT.parentNode != this.dom;) kT = kT.parentNode;
            let TT = kT.getBoundingClientRect();
            zT = (TT.top + TT.bottom) / 2
          } else zT = iT.clientY;
          let WT = TT.lineBlockAtHeight(zT - TT.documentTop);
          oT.domEventHandlers[IT](TT, WT, iT) && iT.preventDefault()
        }));
        this.markers = gW(oT.markers(TT)), oT.initialSpacer && (this.spacer = new eW(TT, 0, 0, [oT.initialSpacer(TT)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(TT) {
        let oT = this.markers;
        if (this.markers = gW(this.config.markers(TT.view)), this.spacer && this.config.updateSpacer) {
          let oT = this.config.updateSpacer(this.spacer.markers[0], TT);
          oT != this.spacer.markers[0] && this.spacer.update(TT.view, 0, 0, [oT])
        }
        let IT = TT.view.viewport;
        return !iT.D.eq(this.markers, oT, IT.from, IT.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(TT)
      }
      destroy() {
        for (let TT of this.elements) TT.destroy()
      }
    }
    class eW {
      constructor(TT, oT, IT, iT) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(TT, oT, IT, iT)
      }
      update(TT, oT, IT, iT) {
        this.height != oT && (this.height = oT, this.dom.style.height = oT + "px"), this.above != IT && (this.dom.style.marginTop = (this.above = IT) ? IT + "px" : ""),
          function(TT, oT) {
            if (TT.length != oT.length) return !1;
            for (let IT = 0; IT < TT.length; IT++)
              if (!TT[IT].compare(oT[IT])) return !1;
            return !0
          }(this.markers, iT) || this.setMarkers(TT, iT)
      }
      setMarkers(TT, oT) {
        let IT = "cm-gutterElement",
          iT = this.dom.firstChild;
        for (let zT = 0, kT = 0;;) {
          let WT = kT,
            XT = zT < oT.length ? oT[zT++] : null,
            BT = !1;
          if (XT) {
            let TT = XT.elementClass;
            TT && (IT += " " + TT);
            for (let oT = kT; oT < this.markers.length; oT++)
              if (this.markers[oT].compare(XT)) {
                WT = oT, BT = !0;
                break
              }
          } else WT = this.markers.length;
          for (; kT < WT;) {
            let TT = this.markers[kT++];
            if (TT.toDOM) {
              TT.destroy(iT);
              let oT = iT.nextSibling;
              iT.remove(), iT = oT
            }
          }
          if (!XT) break;
          XT.toDOM && (BT ? iT = iT.nextSibling : this.dom.insertBefore(XT.toDOM(TT), iT)), BT && kT++
        }
        this.dom.className = IT, this.markers = oT
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const RW = iT.p.define(),
      uW = iT.p.define(),
      vW = iT.p.define({
        combine: TT => (0, iT.V)(TT, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(TT, oT) {
            let IT = Object.assign({}, TT);
            for (let iT in oT) {
              let TT = IT[iT],
                zT = oT[iT];
              IT[iT] = TT ? (oT, IT, iT) => TT(oT, IT, iT) || zT(oT, IT, iT) : zT
            }
            return IT
          }
        })
      });
    class EW extends SW {
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

    function fW(TT, oT) {
      return TT.state.facet(vW).formatNumber(oT, TT.state)
    }
    const CW = cW.compute([vW], (TT => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: TT => TT.state.facet(RW),
      lineMarker: (TT, oT, IT) => IT.some((TT => TT.toDOM)) ? null : new EW(fW(TT, TT.state.doc.lineAt(oT.from).number)),
      widgetMarker: (TT, oT, IT) => {
        for (let iT of TT.state.facet(uW)) {
          let zT = iT(TT, oT, IT);
          if (zT) return zT
        }
        return null
      },
      lineMarkerChange: TT => TT.startState.facet(vW) != TT.state.facet(vW),
      initialSpacer: TT => new EW(fW(TT, JW(TT.state.doc.lines))),
      updateSpacer(TT, oT) {
        let IT = fW(oT.view, JW(oT.view.state.doc.lines));
        return IT == TT.number ? TT : new EW(IT)
      },
      domEventHandlers: TT.facet(vW).domEventHandlers,
      side: "before"
    })));

    function jW() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [vW.of(TT), rW(), CW]
    }

    function JW(TT) {
      let oT = 9;
      for (; oT < TT;) oT = 10 * oT + 9;
      return oT
    }
    const UW = new class extends SW {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      aW = DW.compute(["selection"], (TT => {
        let oT = [],
          IT = -1;
        for (let iT of TT.selection.ec) {
          let zT = TT.doc.lineAt(iT.head).from;
          zT > IT && (IT = zT, oT.push(UW.range(zT)))
        }
        return iT.D.of(oT)
      }));

    function YW() {
      return aW
    }
  },
  40143: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT,
      h: () => xT,
      j: () => WT,
      m: () => ST,
      n: () => FT,
      q: () => UT,
      u: () => YT,
      w: () => aT,
      x: () => cT
    });
    const iT = 1024;
    let zT = 0;
    class kT {
      constructor(TT, oT) {
        this.from = TT, this.to = oT
      }
    }
    class WT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = zT++, this.perNode = !!TT.perNode, this.deserialize = TT.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = TT.combine || null
      }
      add(TT) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof TT && (TT = FT.match(TT)), oT => {
          let IT = TT(oT);
          return void 0 === IT ? null : [this, IT]
        }
      }
    }
    WT.closedBy = new WT({
      deserialize: TT => TT.split(" ")
    }), WT.openedBy = new WT({
      deserialize: TT => TT.split(" ")
    }), WT.group = new WT({
      deserialize: TT => TT.split(" ")
    }), WT.isolate = new WT({
      deserialize: TT => {
        if (TT && "rtl" != TT && "ltr" != TT && "auto" != TT) throw new RangeError("Invalid value for isolate: " + TT);
        return TT || "auto"
      }
    }), WT.contextHash = new WT({
      perNode: !0
    }), WT.lookAhead = new WT({
      perNode: !0
    }), WT.mounted = new WT({
      perNode: !0
    });
    class XT {
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = TT, this.overlay = oT, this.parser = IT, this.bracketed = iT
      }
      static get(TT) {
        return TT && TT.props && TT.props[WT.mounted.id]
      }
    }
    const BT = Object.create(null);
    class FT {
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = TT, this.props = oT, this.id = IT, this.flags = iT
      }
      static define(TT) {
        let oT = TT.props && TT.props.length ? Object.create(null) : BT,
          IT = (TT.top ? 1 : 0) | (TT.skipped ? 2 : 0) | (TT.error ? 4 : 0) | (null == TT.name ? 8 : 0),
          iT = new FT(TT.name || "", oT, TT.id, IT);
        if (TT.props)
          for (let zT of TT.props)
            if (Array.isArray(zT) || (zT = zT(iT)), zT) {
              if (zT[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              oT[zT[0].id] = zT[1]
            } return iT
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
          let oT = this.prop(WT.group);
          return !!oT && oT.indexOf(TT) > -1
        }
        return this.id == TT
      }
      static match(TT) {
        let oT = Object.create(null);
        for (let IT in TT)
          for (let iT of IT.split(" ")) oT[iT] = TT[IT];
        return TT => {
          for (let IT = TT.prop(WT.group), iT = -1; iT < (IT ? IT.length : 0); iT++) {
            let zT = oT[iT < 0 ? TT.name : IT[iT]];
            if (zT) return zT
          }
        }
      }
    }
    FT.none = new FT("", Object.create(null), 0, 8);
    class ST {
      constructor(TT) {
        this.types = TT;
        for (let oT = 0; oT < TT.length; oT++)
          if (TT[oT].id != oT) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let TT = [];
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        for (let zT of this.types) {
          let oT = null;
          for (let TT of IT) {
            let IT = TT(zT);
            if (IT) {
              oT || (oT = Object.assign({}, zT.props));
              let TT = IT[1],
                iT = IT[0];
              iT.combine && iT.id in oT && (TT = iT.combine(oT[iT.id], TT)), oT[iT.id] = TT
            }
          }
          TT.push(oT ? new FT(zT.name, oT, zT.id, zT.flags) : zT)
        }
        return new ST(TT)
      }
    }
    const DT = new WeakMap,
      LT = new WeakMap;
    var xT;
    ! function(TT) {
      TT[TT.ExcludeBuffers = 1] = "ExcludeBuffers", TT[TT.IncludeAnonymous = 2] = "IncludeAnonymous", TT[TT.IgnoreMounts = 4] = "IgnoreMounts", TT[TT.IgnoreOverlays = 8] = "IgnoreOverlays", TT[TT.EnterBracketed = 16] = "EnterBracketed"
    }(xT || (xT = {}));
    class cT {
      constructor(TT, oT, IT, iT, zT) {
        if (this.type = TT, this.children = oT, this.positions = IT, this.length = iT, this.props = null, zT && zT.length) {
          this.props = Object.create(null);
          for (let [TT, oT] of zT) this.props["number" == typeof TT ? TT : TT.id] = oT
        }
      }
      toString() {
        let TT = XT.get(this);
        if (TT && !TT.overlay) return TT.tree.toString();
        let oT = "";
        for (let IT of this.children) {
          let TT = IT.toString();
          TT && (oT && (oT += ","), oT += TT)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (oT.length ? "(" + oT + ")" : "") : oT
      }
      cursor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new ET(this.topNode, TT)
      }
      cursorAt(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = DT.get(this) || this.topNode,
          iT = new ET(IT);
        return iT.moveTo(TT, oT), DT.set(this, iT._tree), iT
      }
      get topNode() {
        return new hT(this, 0, 0, null)
      }
      resolve(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = AT(DT.get(this) || this.topNode, TT, oT, !1);
        return DT.set(this, IT), IT
      }
      resolveInner(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = AT(LT.get(this) || this.topNode, TT, oT, !0);
        return LT.set(this, IT), IT
      }
      resolveStack(TT) {
        return function(TT, oT, IT) {
          let iT = TT.resolveInner(oT, IT),
            zT = null;
          for (let kT = iT instanceof hT ? iT : iT.context.parent; kT; kT = kT.parent)
            if (kT.index < 0) {
              let TT = kT.parent;
              (zT || (zT = [iT])).push(TT.resolve(oT, IT)), kT = TT
            } else {
              let TT = XT.get(kT.tree);
              if (TT && TT.overlay && TT.overlay[0].from <= oT && TT.overlay[TT.overlay.length - 1].to >= oT) {
                let WT = new hT(TT.tree, TT.overlay[0].from + kT.from, -1, kT);
                (zT || (zT = [iT])).push(AT(WT, oT, IT, !1))
              }
            } return zT ? uT(zT) : iT
        }(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(TT) {
        let {
          enter: oT,
          leave: IT,
          from: iT = 0,
          to: zT = this.length
        } = TT, kT = TT.mode || 0, WT = (kT & xT.IncludeAnonymous) > 0;
        for (let XT = this.cursor(kT | xT.IncludeAnonymous);;) {
          let TT = !1;
          if (XT.from <= zT && XT.to >= iT && (!WT && XT.type.isAnonymous || !1 !== oT(XT))) {
            if (XT.firstChild()) continue;
            TT = !0
          }
          for (; TT && IT && (WT || !XT.type.isAnonymous) && IT(XT), !XT.nextSibling();) {
            if (!XT.parent()) return;
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
          for (let oT in this.props) TT.push([+oT, this.props[oT]]);
        return TT
      }
      balance() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : JT(FT.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((TT, oT, IT) => new cT(this.type, TT, oT, IT, this.propValues)), TT.makeTree || ((TT, oT, IT) => new cT(FT.none, TT, oT, IT)))
      }
      static build(TT) {
        return function(TT) {
          var oT;
          let {
            buffer: IT,
            nodeSet: zT,
            maxBufferLength: kT = iT,
            reused: XT = [],
            minRepeatType: BT = zT.types.length
          } = TT, FT = Array.isArray(IT) ? new KT(IT, IT.length) : IT, ST = zT.types, DT = 0, LT = 0;

          function xT(TT, oT, IT, iT, WT, cT) {
            let {
              id: KT,
              start: eT,
              end: RT,
              size: uT
            } = FT, vT = LT, ET = DT;
            if (uT < 0) {
              if (FT.next(), -1 == uT) {
                let oT = XT[KT];
                return IT.push(oT), void iT.push(eT - TT)
              }
              if (-3 == uT) return void(DT = KT);
              if (-4 == uT) return void(LT = KT);
              throw new RangeError(`Unrecognized record size: ${uT}`)
            }
            let fT, CT, jT = ST[KT],
              UT = eT - TT;
            if (RT - eT <= kT && (CT = wT(FT.pos - oT, WT))) {
              let oT = new Uint16Array(CT.size - CT.skip),
                IT = FT.pos - CT.size,
                iT = oT.length;
              for (; FT.pos > IT;) iT = mT(CT.start, oT, iT);
              fT = new MT(oT, RT - CT.start, zT), UT = CT.start - TT
            } else {
              let TT = FT.pos - uT;
              FT.next();
              let oT = [],
                IT = [],
                iT = KT >= BT ? KT : -1,
                zT = 0,
                WT = RT;
              for (; FT.pos > TT;) iT >= 0 && FT.id == iT && FT.size >= 0 ? (FT.end <= WT - kT && (gT(oT, IT, eT, zT, FT.end, WT, iT, vT, ET), zT = oT.length, WT = FT.end), FT.next()) : cT > 2500 ? rT(eT, TT, oT, IT) : xT(eT, TT, oT, IT, iT, cT + 1);
              if (iT >= 0 && zT > 0 && zT < oT.length && gT(oT, IT, eT, zT, eT, WT, iT, vT, ET), oT.reverse(), IT.reverse(), iT > -1 && zT > 0) {
                let TT = AT(jT, ET);
                fT = JT(jT, oT, IT, 0, oT.length, 0, RT - eT, TT, TT)
              } else fT = hT(jT, oT, IT, RT - eT, vT - RT, ET)
            }
            IT.push(fT), iT.push(UT)
          }

          function rT(TT, oT, IT, iT) {
            let WT = [],
              XT = 0,
              BT = -1;
            for (; FT.pos > oT;) {
              let {
                id: TT,
                start: oT,
                end: IT,
                size: iT
              } = FT;
              if (iT > 4) FT.next();
              else {
                if (BT > -1 && oT < BT) break;
                BT < 0 && (BT = IT - kT), WT.push(TT, oT, IT), XT++, FT.next()
              }
            }
            if (XT) {
              let oT = new Uint16Array(4 * XT),
                kT = WT[WT.length - 2];
              for (let TT = WT.length - 3, IT = 0; TT >= 0; TT -= 3) oT[IT++] = WT[TT], oT[IT++] = WT[TT + 1] - kT, oT[IT++] = WT[TT + 2] - kT, oT[IT++] = IT;
              IT.push(new MT(oT, WT[2] - kT, zT)), iT.push(kT - TT)
            }
          }

          function AT(TT, oT) {
            return (IT, iT, zT) => {
              let kT, XT, BT = 0,
                FT = IT.length - 1;
              if (FT >= 0 && (kT = IT[FT]) instanceof cT) {
                if (!FT && kT.type == TT && kT.length == zT) return kT;
                (XT = kT.prop(WT.lookAhead)) && (BT = iT[FT] + kT.length + XT)
              }
              return hT(TT, IT, iT, zT, BT, oT)
            }
          }

          function gT(TT, oT, IT, iT, kT, WT, XT, BT, FT) {
            let ST = [],
              DT = [];
            for (; TT.length > iT;) ST.push(TT.pop()), DT.push(oT.pop() + IT - kT);
            TT.push(hT(zT.types[XT], ST, DT, WT - kT, BT - WT, FT)), oT.push(kT - IT)
          }

          function hT(TT, oT, IT, iT, zT, kT, XT) {
            if (kT) {
              let TT = [WT.contextHash, kT];
              XT = XT ? [TT].concat(XT) : [TT]
            }
            if (zT > 25) {
              let TT = [WT.lookAhead, zT];
              XT = XT ? [TT].concat(XT) : [TT]
            }
            return new cT(TT, oT, IT, iT, XT)
          }

          function wT(TT, oT) {
            let IT = FT.fork(),
              iT = 0,
              zT = 0,
              WT = 0,
              XT = IT.end - kT,
              ST = {
                size: 0,
                start: 0,
                skip: 0
              };
            TT: for (let kT = IT.pos - TT; IT.pos > kT;) {
              let TT = IT.size;
              if (IT.id == oT && TT >= 0) {
                ST.size = iT, ST.start = zT, ST.skip = WT, WT += 4, iT += 4, IT.next();
                continue
              }
              let FT = IT.pos - TT;
              if (TT < 0 || FT < kT || IT.start < XT) break;
              let DT = IT.id >= BT ? 4 : 0,
                LT = IT.start;
              for (IT.next(); IT.pos > FT;) {
                if (IT.size < 0) {
                  if (-3 != IT.size && -4 != IT.size) break TT;
                  DT += 4
                } else IT.id >= BT && (DT += 4);
                IT.next()
              }
              zT = LT, iT += TT, WT += DT
            }
            return (oT < 0 || iT == TT) && (ST.size = iT, ST.start = zT, ST.skip = WT), ST.size > 4 ? ST : void 0
          }

          function mT(TT, oT, IT) {
            let {
              id: iT,
              start: zT,
              end: kT,
              size: WT
            } = FT;
            if (FT.next(), WT >= 0 && iT < BT) {
              let XT = IT;
              if (WT > 4) {
                let iT = FT.pos - (WT - 4);
                for (; FT.pos > iT;) IT = mT(TT, oT, IT)
              }
              oT[--IT] = XT, oT[--IT] = kT - TT, oT[--IT] = zT - TT, oT[--IT] = iT
            } else - 3 == WT ? DT = iT : -4 == WT && (LT = iT);
            return IT
          }
          let eT = [],
            RT = [];
          for (; FT.pos > 0;) xT(TT.start || 0, TT.bufferStart || 0, eT, RT, -1, 0);
          let uT = null !== (oT = TT.length) && void 0 !== oT ? oT : eT.length ? RT[0] + eT[0].length : 0;
          return new cT(ST[TT.topID], eT.reverse(), RT.reverse(), uT)
        }(TT)
      }
    }
    cT.empty = new cT(FT.none, [], [], 0);
    class KT {
      constructor(TT, oT) {
        this.buffer = TT, this.index = oT
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
        return new KT(this.buffer, this.index)
      }
    }
    class MT {
      constructor(TT, oT, IT) {
        this.buffer = TT, this.length = oT, this.set = IT
      }
      get type() {
        return FT.none
      }
      toString() {
        let TT = [];
        for (let oT = 0; oT < this.buffer.length;) TT.push(this.childString(oT)), oT = this.buffer[oT + 3];
        return TT.join(",")
      }
      childString(TT) {
        let oT = this.buffer[TT],
          IT = this.buffer[TT + 3],
          iT = this.set.types[oT],
          zT = iT.name;
        if (/\W/.test(zT) && !iT.isError && (zT = JSON.stringify(zT)), IT == (TT += 4)) return zT;
        let kT = [];
        for (; TT < IT;) kT.push(this.childString(TT)), TT = this.buffer[TT + 3];
        return zT + "(" + kT.join(",") + ")"
      }
      findChild(TT, oT, IT, iT, zT) {
        let {
          buffer: kT
        } = this, WT = -1;
        for (let XT = TT; XT != oT && !(rT(zT, iT, kT[XT + 1], kT[XT + 2]) && (WT = XT, IT > 0)); XT = kT[XT + 3]);
        return WT
      }
      slice(TT, oT, IT) {
        let iT = this.buffer,
          zT = new Uint16Array(oT - TT),
          kT = 0;
        for (let WT = TT, XT = 0; WT < oT;) {
          zT[XT++] = iT[WT++], zT[XT++] = iT[WT++] - IT;
          let oT = zT[XT++] = iT[WT++] - IT;
          zT[XT++] = iT[WT++] - TT, kT = Math.max(kT, oT)
        }
        return new MT(zT, kT, this.set)
      }
    }

    function rT(TT, oT, IT, iT) {
      switch (TT) {
        case -2:
          return IT < oT;
        case -1:
          return iT >= oT && IT < oT;
        case 0:
          return IT < oT && iT > oT;
        case 1:
          return IT <= oT && iT > oT;
        case 2:
          return iT > oT;
        case 4:
          return !0
      }
    }

    function AT(TT, oT, IT, iT) {
      for (var zT; TT.from == TT.to || (IT < 1 ? TT.from >= oT : TT.from > oT) || (IT > -1 ? TT.to <= oT : TT.to < oT);) {
        let oT = !iT && TT instanceof hT && TT.index < 0 ? null : TT.parent;
        if (!oT) return TT;
        TT = oT
      }
      let kT = iT ? 0 : xT.IgnoreOverlays;
      if (iT)
        for (let WT = TT, XT = WT.parent; XT; WT = XT, XT = WT.parent) WT instanceof hT && WT.index < 0 && (null === (zT = XT.enter(oT, IT, kT)) || void 0 === zT ? void 0 : zT.from) != WT.from && (TT = XT);
      for (;;) {
        let iT = TT.enter(oT, IT, kT);
        if (!iT) return TT;
        TT = iT
      }
    }
    class gT {
      cursor() {
        return new ET(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(TT) {
        let oT = wT(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return oT.length ? oT[0] : null
      }
      getChildren(TT) {
        return wT(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(TT) {
        return AT(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(TT) {
        return AT(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(TT) {
        return mT(this.parent, TT)
      }
      enterUnfinishedNodesBefore(TT) {
        let oT = this.childBefore(TT),
          IT = this;
        for (; oT;) {
          let TT = oT.lastChild;
          if (!TT || TT.to != oT.to) break;
          TT.type.isError && TT.from == TT.to ? (IT = oT, oT = TT.prevSibling) : oT = TT
        }
        return IT
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class hT extends gT {
      constructor(TT, oT, IT, iT) {
        super(), this._tree = TT, this.from = oT, this.index = IT, this._parent = iT
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
      nextChild(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let kT = this;;) {
          for (let {
              children: WT,
              positions: BT
            } = kT._tree, FT = oT > 0 ? WT.length : -1; TT != FT; TT += oT) {
            let FT, ST = WT[TT],
              DT = BT[TT] + kT.from;
            if (zT & xT.EnterBracketed && ST instanceof cT && (FT = XT.get(ST)) && !FT.overlay && FT.bracketed && IT >= DT && IT <= DT + ST.length || rT(iT, IT, DT, DT + ST.length))
              if (ST instanceof MT) {
                if (zT & xT.ExcludeBuffers) continue;
                let WT = ST.findChild(0, ST.buffer.length, oT, IT - DT, iT);
                if (WT > -1) return new RT(new eT(kT, ST, TT, DT), null, WT)
              } else if (zT & xT.IncludeAnonymous || !ST.type.isAnonymous || fT(ST)) {
              let WT;
              if (!(zT & xT.IgnoreMounts) && (WT = XT.get(ST)) && !WT.overlay) return new hT(WT.tree, DT, TT, kT);
              let BT = new hT(ST, DT, TT, kT);
              return zT & xT.IncludeAnonymous || !BT.type.isAnonymous ? BT : BT.nextChild(oT < 0 ? ST.children.length - 1 : 0, oT, IT, iT, zT)
            }
          }
          if (zT & xT.IncludeAnonymous || !kT.type.isAnonymous) return null;
          if (TT = kT.index >= 0 ? kT.index + oT : oT < 0 ? -1 : kT._parent._tree.children.length, kT = kT._parent, !kT) return null
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
      enter(TT, oT) {
        let IT, iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(iT & xT.IgnoreOverlays) && (IT = XT.get(this._tree)) && IT.overlay) {
          let zT = TT - this.from,
            kT = iT & xT.EnterBracketed && IT.bracketed;
          for (let {
              from: TT,
              to: iT
            }
            of IT.overlay)
            if ((oT > 0 || kT ? TT <= zT : TT < zT) && (oT < 0 || kT ? iT >= zT : iT > zT)) return new hT(IT.tree, IT.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, TT, oT, iT)
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

    function wT(TT, oT, IT, iT) {
      let zT = TT.cursor(),
        kT = [];
      if (!zT.firstChild()) return kT;
      if (null != IT)
        for (let WT = !1; !WT;)
          if (WT = zT.type.is(IT), !zT.nextSibling()) return kT;
      for (;;) {
        if (null != iT && zT.type.is(iT)) return kT;
        if (zT.type.is(oT) && kT.push(zT.node), !zT.nextSibling()) return null == iT ? kT : []
      }
    }

    function mT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oT.length - 1;
      for (let iT = TT; IT >= 0; iT = iT.parent) {
        if (!iT) return !1;
        if (!iT.type.isAnonymous) {
          if (oT[IT] && oT[IT] != iT.name) return !1;
          IT--
        }
      }
      return !0
    }
    class eT {
      constructor(TT, oT, IT, iT) {
        this.parent = TT, this.buffer = oT, this.index = IT, this.start = iT
      }
    }
    class RT extends gT {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(TT, oT, IT) {
        super(), this.context = TT, this._parent = oT, this.index = IT, this.type = TT.buffer.set.types[TT.buffer.buffer[IT]]
      }
      child(TT, oT, IT) {
        let {
          buffer: iT
        } = this.context, zT = iT.findChild(this.index + 4, iT.buffer[this.index + 3], TT, oT - this.context.start, IT);
        return zT < 0 ? null : new RT(this.context, this, zT)
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
      enter(TT, oT) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & xT.ExcludeBuffers) return null;
        let {
          buffer: IT
        } = this.context, iT = IT.findChild(this.index + 4, IT.buffer[this.index + 3], oT > 0 ? 1 : -1, TT - this.context.start, oT);
        return iT < 0 ? null : new RT(this.context, this, iT)
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
        } = this.context, oT = TT.buffer[this.index + 3];
        return oT < (this._parent ? TT.buffer[this._parent.index + 3] : TT.buffer.length) ? new RT(this.context, this._parent, oT) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: TT
        } = this.context, oT = this._parent ? this._parent.index + 4 : 0;
        return this.index == oT ? this.externalSibling(-1) : new RT(this.context, this._parent, TT.findChild(oT, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let TT = [],
          oT = [],
          {
            buffer: IT
          } = this.context,
          iT = this.index + 4,
          zT = IT.buffer[this.index + 3];
        if (zT > iT) {
          let kT = IT.buffer[this.index + 1];
          TT.push(IT.slice(iT, zT, kT)), oT.push(0)
        }
        return new cT(this.type, TT, oT, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function uT(TT) {
      if (!TT.length) return null;
      let oT = 0,
        IT = TT[0];
      for (let kT = 1; kT < TT.length; kT++) {
        let iT = TT[kT];
        (iT.from > IT.from || iT.to < IT.to) && (IT = iT, oT = kT)
      }
      let iT = IT instanceof hT && IT.index < 0 ? null : IT.parent,
        zT = TT.slice();
      return iT ? zT[oT] = iT : zT.splice(oT, 1), new vT(zT, IT)
    }
    class vT {
      constructor(TT, oT) {
        this.heads = TT, this.node = oT
      }
      get next() {
        return uT(this.heads)
      }
    }
    class ET {
      get name() {
        return this.type.name
      }
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = oT & ~xT.EnterBracketed, TT instanceof hT) this.yieldNode(TT);
        else {
          this._tree = TT.context.parent, this.buffer = TT.context;
          for (let oT = TT._parent; oT; oT = oT._parent) this.stack.unshift(oT.index);
          this.bufferNode = TT, this.yieldBuf(TT.index)
        }
      }
      yieldNode(TT) {
        return !!TT && (this._tree = TT, this.type = TT.type, this.from = TT.from, this.to = TT.to, !0)
      }
      yieldBuf(TT, oT) {
        this.index = TT;
        let {
          start: IT,
          buffer: iT
        } = this.buffer;
        return this.type = oT || iT.set.types[iT.buffer[TT]], this.from = IT + iT.buffer[TT + 1], this.to = IT + iT.buffer[TT + 2], !0
      }
      yield(TT) {
        return !!TT && (TT instanceof hT ? (this.buffer = null, this.yieldNode(TT)) : (this.buffer = TT.context, this.yieldBuf(TT.index, TT.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(TT, oT, IT) {
        if (!this.buffer) return this.yield(this._tree.nextChild(TT < 0 ? this._tree._tree.children.length - 1 : 0, TT, oT, IT, this.mode));
        let {
          buffer: iT
        } = this.buffer, zT = iT.findChild(this.index + 4, iT.buffer[this.index + 3], TT, oT - this.buffer.start, IT);
        return !(zT < 0) && (this.stack.push(this.index), this.yieldBuf(zT))
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
      enter(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(IT & xT.ExcludeBuffers) && this.enterChild(1, TT, oT) : this.yield(this._tree.enter(TT, oT, IT))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & xT.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let TT = this.mode & xT.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(TT)
      }
      sibling(TT) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + TT, TT, 0, 4, this.mode));
        let {
          buffer: oT
        } = this.buffer, IT = this.stack.length - 1;
        if (TT < 0) {
          let TT = IT < 0 ? 0 : this.stack[IT] + 4;
          if (this.index != TT) return this.yieldBuf(oT.findChild(TT, this.index, -1, 0, 4))
        } else {
          let TT = oT.buffer[this.index + 3];
          if (TT < (IT < 0 ? oT.buffer.length : oT.buffer[this.stack[IT] + 3])) return this.yieldBuf(TT)
        }
        return IT < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + TT, TT, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(TT) {
        let oT, IT, {
          buffer: iT
        } = this;
        if (iT) {
          if (TT > 0) {
            if (this.index < iT.buffer.buffer.length) return !1
          } else
            for (let TT = 0; TT < this.index; TT++)
              if (iT.buffer.buffer[TT + 3] < this.index) return !1;
          ({
            index: oT,
            parent: IT
          } = iT)
        } else({
          index: oT,
          _parent: IT
        } = this._tree);
        for (; IT;
          ({
            index: oT,
            _parent: IT
          } = IT))
          if (oT > -1)
            for (let iT = oT + TT, zT = TT < 0 ? -1 : IT._tree.children.length; iT != zT; iT += TT) {
              let TT = IT._tree.children[iT];
              if (this.mode & xT.IncludeAnonymous || TT instanceof MT || !TT.type.isAnonymous || fT(TT)) return !1
            }
        return !0
      }
      move(TT, oT) {
        if (oT && this.enterChild(TT, 0, 4)) return !0;
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
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (oT < 1 ? this.from >= TT : this.from > TT) || (oT > -1 ? this.to <= TT : this.to < TT)) && this.parent(););
        for (; this.enterChild(1, TT, oT););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let TT = this.bufferNode,
          oT = null,
          IT = 0;
        if (TT && TT.context == this.buffer) TT: for (let iT = this.index, zT = this.stack.length; zT >= 0;) {
          for (let kT = TT; kT; kT = kT._parent)
            if (kT.index == iT) {
              if (iT == this.index) return kT;
              oT = kT, IT = zT + 1;
              break TT
            } iT = this.stack[--zT]
        }
        for (let iT = IT; iT < this.stack.length; iT++) oT = new RT(this.buffer, oT, this.stack[iT]);
        return this.bufferNode = new RT(this.buffer, oT, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(TT, oT) {
        for (let IT = 0;;) {
          let iT = !1;
          if (this.type.isAnonymous || !1 !== TT(this)) {
            if (this.firstChild()) {
              IT++;
              continue
            }
            this.type.isAnonymous || (iT = !0)
          }
          for (;;) {
            if (iT && oT && oT(this), iT = this.type.isAnonymous, !IT) return;
            if (this.nextSibling()) break;
            this.parent(), IT--, iT = !0
          }
        }
      }
      matchContext(TT) {
        if (!this.buffer) return mT(this.node.parent, TT);
        let {
          buffer: oT
        } = this.buffer, {
          types: IT
        } = oT.set;
        for (let iT = TT.length - 1, zT = this.stack.length - 1; iT >= 0; zT--) {
          if (zT < 0) return mT(this._tree, TT, iT);
          let kT = IT[oT.buffer[this.stack[zT]]];
          if (!kT.isAnonymous) {
            if (TT[iT] && TT[iT] != kT.name) return !1;
            iT--
          }
        }
        return !0
      }
    }

    function fT(TT) {
      return TT.children.some((TT => TT instanceof MT || !TT.type.isAnonymous || fT(TT)))
    }
    const CT = new WeakMap;

    function jT(TT, oT) {
      if (!TT.isAnonymous || oT instanceof MT || oT.type != TT) return 1;
      let IT = CT.get(oT);
      if (null == IT) {
        IT = 1;
        for (let iT of oT.children) {
          if (iT.type != TT || !(iT instanceof cT)) {
            IT = 1;
            break
          }
          IT += jT(TT, iT)
        }
        CT.set(oT, IT)
      }
      return IT
    }

    function JT(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
      let FT = 0;
      for (let xT = iT; xT < zT; xT++) FT += jT(TT, oT[xT]);
      let ST = Math.ceil(1.5 * FT / 8),
        DT = [],
        LT = [];
      return function oT(IT, iT, zT, WT, XT) {
        for (let FT = zT; FT < WT;) {
          let zT = FT,
            xT = iT[FT],
            cT = jT(TT, IT[FT]);
          for (FT++; FT < WT; FT++) {
            let oT = jT(TT, IT[FT]);
            if (cT + oT >= ST) break;
            cT += oT
          }
          if (FT == zT + 1) {
            if (cT > ST) {
              let TT = IT[zT];
              oT(TT.children, TT.positions, 0, TT.children.length, iT[zT] + XT);
              continue
            }
            DT.push(IT[zT])
          } else {
            let oT = iT[FT - 1] + IT[FT - 1].length - xT;
            DT.push(JT(TT, IT, iT, zT, FT, xT, oT, null, BT))
          }
          LT.push(xT + XT - kT)
        }
      }(oT, IT, iT, zT, 0), (XT || BT)(DT, LT, WT)
    }
    class UT {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(TT, oT, IT) {
        let iT = this.map.get(TT);
        iT || this.map.set(TT, iT = new Map), iT.set(oT, IT)
      }
      getBuffer(TT, oT) {
        let IT = this.map.get(TT);
        return IT && IT.get(oT)
      }
      set(TT, oT) {
        TT instanceof RT ? this.setBuffer(TT.context.buffer, TT.index, oT) : TT instanceof hT && this.map.set(TT.tree, oT)
      }
      get(TT) {
        return TT instanceof RT ? this.getBuffer(TT.context.buffer, TT.index) : TT instanceof hT ? this.map.get(TT.tree) : void 0
      }
      cursorSet(TT, oT) {
        TT.buffer ? this.setBuffer(TT.buffer.buffer, TT.index, oT) : this.map.set(TT.tree, oT)
      }
      cursorGet(TT) {
        return TT.buffer ? this.getBuffer(TT.buffer.buffer, TT.index) : this.map.get(TT.tree)
      }
    }
    class aT {
      constructor(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = TT, this.to = oT, this.tree = IT, this.offset = iT, this.open = (zT ? 1 : 0) | (kT ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = [new aT(0, TT.length, TT, 0, !1, IT)];
        for (let zT of oT) zT.to > TT.length && iT.push(zT);
        return iT
      }
      static applyChanges(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!oT.length) return TT;
        let iT = [],
          zT = 1,
          kT = TT.length ? TT[0] : null;
        for (let WT = 0, XT = 0, BT = 0;; WT++) {
          let FT = WT < oT.length ? oT[WT] : null,
            ST = FT ? FT.fromA : 1e9;
          if (ST - XT >= IT)
            for (; kT && kT.from < ST;) {
              let oT = kT;
              if (XT >= oT.from || ST <= oT.to || BT) {
                let TT = Math.max(oT.from, XT) - BT,
                  IT = Math.min(oT.to, ST) - BT;
                oT = TT >= IT ? null : new aT(TT, IT, oT.tree, oT.offset + BT, WT > 0, !!FT)
              }
              if (oT && iT.push(oT), kT.to > ST) break;
              kT = zT < TT.length ? TT[zT++] : null
            }
          if (!FT) break;
          XT = FT.toA, BT = FT.toA - FT.toB
        }
        return iT
      }
    }
    class YT {
      startParse(TT, oT, IT) {
        return "string" == typeof TT && (TT = new QT(TT)), IT = IT ? IT.length ? IT.map((TT => new kT(TT.from, TT.to))) : [new kT(0, 0)] : [new kT(0, TT.length)], this.createParse(TT, oT || [], IT)
      }
      parse(TT, oT, IT) {
        let iT = this.startParse(TT, oT, IT);
        for (;;) {
          let TT = iT.advance();
          if (TT) return TT
        }
      }
    }
    class QT {
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
      read(TT, oT) {
        return this.string.slice(TT, oT)
      }
    }
    new WT({
      perNode: !0
    })
  },
  40151: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => LT,
      h: () => BT,
      i: () => DT,
      m: () => CT
    });
    var iT = IT(40143);
    let zT = 0;
    class kT {
      constructor(TT, oT, IT, iT) {
        this.name = TT, this.set = oT, this.base = IT, this.modified = iT, this.id = zT++
      }
      toString() {
        let {
          name: TT
        } = this;
        for (let oT of this.modified) oT.name && (TT = `${oT.name}(${TT})`);
        return TT
      }
      static define(TT, oT) {
        let IT = "string" == typeof TT ? TT : "?";
        if (TT instanceof kT && (oT = TT), null === oT || void 0 === oT ? void 0 : oT.base) throw new Error("Can not derive from a modified tag");
        let iT = new kT(IT, [], null, []);
        if (iT.set.push(iT), oT)
          for (let zT of oT.set) iT.set.push(zT);
        return iT
      }
      static defineModifier(TT) {
        let oT = new XT(TT);
        return TT => TT.modified.indexOf(oT) > -1 ? TT : XT.get(TT.base || TT, TT.modified.concat(oT).sort(((TT, oT) => TT.id - oT.id)))
      }
    }
    let WT = 0;
    class XT {
      constructor(TT) {
        this.name = TT, this.instances = [], this.id = WT++
      }
      static get(TT, oT) {
        if (!oT.length) return TT;
        let IT = oT[0].instances.find((IT => {
          return IT.base == TT && (iT = oT, zT = IT.modified, iT.length == zT.length && iT.every(((TT, oT) => TT == zT[oT])));
          var iT, zT
        }));
        if (IT) return IT;
        let iT = [],
          zT = new kT(TT.name, iT, TT, oT);
        for (let kT of oT) kT.instances.push(zT);
        let WT = function(TT) {
          let oT = [
            []
          ];
          for (let IT = 0; IT < TT.length; IT++)
            for (let iT = 0, zT = oT.length; iT < zT; iT++) oT.push(oT[iT].concat(TT[IT]));
          return oT.sort(((TT, oT) => oT.length - TT.length))
        }(oT);
        for (let kT of TT.set)
          if (!kT.modified.length)
            for (let TT of WT) iT.push(XT.get(kT, TT));
        return zT
      }
    }

    function BT(TT) {
      let oT = Object.create(null);
      for (let IT in TT) {
        let iT = TT[IT];
        Array.isArray(iT) || (iT = [iT]);
        for (let TT of IT.split(" "))
          if (TT) {
            let IT = [],
              zT = 2,
              kT = TT;
            for (let oT = 0;;) {
              if ("..." == kT && oT > 0 && oT + 3 == TT.length) {
                zT = 1;
                break
              }
              let iT = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(kT);
              if (!iT) throw new RangeError("Invalid path: " + TT);
              if (IT.push("*" == iT[0] ? "" : '"' == iT[0][0] ? JSON.parse(iT[0]) : iT[0]), oT += iT[0].length, oT == TT.length) break;
              let WT = TT[oT++];
              if (oT == TT.length && "!" == WT) {
                zT = 0;
                break
              }
              if ("/" != WT) throw new RangeError("Invalid path: " + TT);
              kT = TT.slice(oT)
            }
            let WT = IT.length - 1,
              XT = IT[WT];
            if (!XT) throw new RangeError("Invalid path: " + TT);
            let BT = new ST(iT, zT, WT > 0 ? IT.slice(0, WT) : null);
            oT[XT] = BT.sort(oT[XT])
          }
      }
      return FT.add(oT)
    }
    const FT = new iT.j({
      combine(TT, oT) {
        let IT, iT, zT;
        for (; TT || oT;) {
          if (!TT || oT && TT.depth >= oT.depth ? (zT = oT, oT = oT.next) : (zT = TT, TT = TT.next), IT && IT.mode == zT.mode && !zT.context && !IT.context) continue;
          let kT = new ST(zT.tags, zT.mode, zT.context);
          IT ? IT.next = kT : iT = kT, IT = kT
        }
        return iT
      }
    });
    class ST {
      constructor(TT, oT, IT, iT) {
        this.tags = TT, this.mode = oT, this.context = IT, this.next = iT
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

    function DT(TT, oT) {
      let IT = Object.create(null);
      for (let kT of TT)
        if (Array.isArray(kT.tag))
          for (let TT of kT.tag) IT[TT.id] = kT.class;
        else IT[kT.tag.id] = kT.class;
      let {
        scope: iT,
        all: zT = null
      } = oT || {};
      return {
        style: TT => {
          let oT = zT;
          for (let iT of TT)
            for (let TT of iT.set) {
              let iT = IT[TT.id];
              if (iT) {
                oT = oT ? oT + " " + iT : iT;
                break
              }
            }
          return oT
        },
        scope: iT
      }
    }

    function LT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : TT.length,
        kT = new xT(iT, Array.isArray(oT) ? oT : [oT], IT);
      kT.highlightRange(TT.cursor(), iT, zT, "", kT.highlighters), kT.flush(zT)
    }
    ST.empty = new ST([], 2, null);
    class xT {
      constructor(TT, oT, IT) {
        this.at = TT, this.highlighters = oT, this.span = IT, this.class = ""
      }
      startSpan(TT, oT) {
        oT != this.class && (this.flush(TT), TT > this.at && (this.at = TT), this.class = oT)
      }
      flush(TT) {
        TT > this.at && this.class && this.span(this.at, TT, this.class)
      }
      highlightRange(TT, oT, IT, zT, kT) {
        let {
          type: WT,
          from: XT,
          to: BT
        } = TT;
        if (XT >= IT || BT <= oT) return;
        WT.isTop && (kT = this.highlighters.filter((TT => !TT.scope || TT.scope(WT))));
        let DT = zT,
          LT = function(TT) {
            let oT = TT.type.prop(FT);
            for (; oT && oT.context && !TT.matchContext(oT.context);) oT = oT.next;
            return oT || null
          }(TT) || ST.empty,
          xT = function(TT, oT) {
            let IT = null;
            for (let iT of TT) {
              let TT = iT.style(oT);
              TT && (IT = IT ? IT + " " + TT : TT)
            }
            return IT
          }(kT, LT.tags);
        if (xT && (DT && (DT += " "), DT += xT, 1 == LT.mode && (zT += (zT ? " " : "") + xT)), this.startSpan(Math.max(oT, XT), DT), LT.opaque) return;
        let cT = TT.tree && TT.tree.prop(iT.j.mounted);
        if (cT && cT.overlay) {
          let iT = TT.node.enter(cT.overlay[0].from + XT, 1),
            WT = this.highlighters.filter((TT => !TT.scope || TT.scope(cT.tree.type))),
            FT = TT.firstChild();
          for (let ST = 0, LT = XT;; ST++) {
            let xT = ST < cT.overlay.length ? cT.overlay[ST] : null,
              KT = xT ? xT.from + XT : BT,
              MT = Math.max(oT, LT),
              rT = Math.min(IT, KT);
            if (MT < rT && FT)
              for (; TT.from < rT && (this.highlightRange(TT, MT, rT, zT, kT), this.startSpan(Math.min(rT, TT.to), DT), !(TT.to >= KT) && TT.nextSibling()););
            if (!xT || KT > IT) break;
            LT = xT.to + XT, LT > oT && (this.highlightRange(iT.cursor(), Math.max(oT, xT.from + XT), Math.min(IT, LT), "", WT), this.startSpan(Math.min(IT, LT), DT))
          }
          FT && TT.parent()
        } else if (TT.firstChild()) {
          cT && (zT = "");
          do {
            if (!(TT.to <= oT)) {
              if (TT.from >= IT) break;
              this.highlightRange(TT, oT, IT, zT, kT), this.startSpan(Math.min(IT, TT.to), DT)
            }
          } while (TT.nextSibling());
          TT.parent()
        }
      }
    }
    const cT = kT.define,
      KT = cT(),
      MT = cT(),
      rT = cT(MT),
      AT = cT(MT),
      gT = cT(),
      hT = cT(gT),
      wT = cT(gT),
      mT = cT(),
      eT = cT(mT),
      RT = cT(),
      uT = cT(),
      vT = cT(),
      ET = cT(vT),
      fT = cT(),
      CT = {
        comment: KT,
        lineComment: cT(KT),
        blockComment: cT(KT),
        docComment: cT(KT),
        name: MT,
        variableName: cT(MT),
        typeName: rT,
        tagName: cT(rT),
        propertyName: AT,
        attributeName: cT(AT),
        className: cT(MT),
        labelName: cT(MT),
        namespace: cT(MT),
        macroName: cT(MT),
        literal: gT,
        string: hT,
        docString: cT(hT),
        character: cT(hT),
        attributeValue: cT(hT),
        number: wT,
        integer: cT(wT),
        float: cT(wT),
        bool: cT(gT),
        regexp: cT(gT),
        escape: cT(gT),
        color: cT(gT),
        url: cT(gT),
        keyword: RT,
        self: cT(RT),
        null: cT(RT),
        atom: cT(RT),
        unit: cT(RT),
        modifier: cT(RT),
        operatorKeyword: cT(RT),
        controlKeyword: cT(RT),
        definitionKeyword: cT(RT),
        moduleKeyword: cT(RT),
        operator: uT,
        derefOperator: cT(uT),
        arithmeticOperator: cT(uT),
        logicOperator: cT(uT),
        bitwiseOperator: cT(uT),
        compareOperator: cT(uT),
        updateOperator: cT(uT),
        definitionOperator: cT(uT),
        typeOperator: cT(uT),
        controlOperator: cT(uT),
        punctuation: vT,
        separator: cT(vT),
        bracket: ET,
        angleBracket: cT(ET),
        squareBracket: cT(ET),
        paren: cT(ET),
        brace: cT(ET),
        content: mT,
        heading: eT,
        heading1: cT(eT),
        heading2: cT(eT),
        heading3: cT(eT),
        heading4: cT(eT),
        heading5: cT(eT),
        heading6: cT(eT),
        contentSeparator: cT(mT),
        list: cT(mT),
        quote: cT(mT),
        emphasis: cT(mT),
        strong: cT(mT),
        link: cT(mT),
        monospace: cT(mT),
        strikethrough: cT(mT),
        inserted: cT(),
        deleted: cT(),
        changed: cT(),
        invalid: cT(),
        meta: fT,
        documentMeta: cT(fT),
        annotation: cT(fT),
        processingInstruction: cT(fT),
        definition: kT.defineModifier("definition"),
        constant: kT.defineModifier("constant"),
        function: kT.defineModifier("function"),
        standard: kT.defineModifier("standard"),
        local: kT.defineModifier("local"),
        special: kT.defineModifier("special")
      };
    for (let jT in CT) {
      let TT = CT[jT];
      TT instanceof kT && (TT.name = jT)
    }
    DT([{
      tag: CT.link,
      class: "tok-link"
    }, {
      tag: CT.heading,
      class: "tok-heading"
    }, {
      tag: CT.emphasis,
      class: "tok-emphasis"
    }, {
      tag: CT.strong,
      class: "tok-strong"
    }, {
      tag: CT.keyword,
      class: "tok-keyword"
    }, {
      tag: CT.atom,
      class: "tok-atom"
    }, {
      tag: CT.bool,
      class: "tok-bool"
    }, {
      tag: CT.url,
      class: "tok-url"
    }, {
      tag: CT.labelName,
      class: "tok-labelName"
    }, {
      tag: CT.inserted,
      class: "tok-inserted"
    }, {
      tag: CT.deleted,
      class: "tok-deleted"
    }, {
      tag: CT.literal,
      class: "tok-literal"
    }, {
      tag: CT.string,
      class: "tok-string"
    }, {
      tag: CT.number,
      class: "tok-number"
    }, {
      tag: [CT.regexp, CT.escape, CT.special(CT.string)],
      class: "tok-string2"
    }, {
      tag: CT.variableName,
      class: "tok-variableName"
    }, {
      tag: CT.local(CT.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: CT.definition(CT.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: CT.special(CT.variableName),
      class: "tok-variableName2"
    }, {
      tag: CT.definition(CT.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: CT.typeName,
      class: "tok-typeName"
    }, {
      tag: CT.namespace,
      class: "tok-namespace"
    }, {
      tag: CT.className,
      class: "tok-className"
    }, {
      tag: CT.macroName,
      class: "tok-macroName"
    }, {
      tag: CT.propertyName,
      class: "tok-propertyName"
    }, {
      tag: CT.operator,
      class: "tok-operator"
    }, {
      tag: CT.comment,
      class: "tok-comment"
    }, {
      tag: CT.meta,
      class: "tok-meta"
    }, {
      tag: CT.invalid,
      class: "tok-invalid"
    }, {
      tag: CT.punctuation,
      class: "tok-punctuation"
    }])
  },
  40162: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => XT.i,
      d: () => WT.w,
      g: () => WT.H,
      h: () => WT.K,
      i: () => XT.l,
      l: () => uI,
      o: () => XT.L,
      p: () => XT.jb
    });
    var iT = IT(1345),
      zT = IT(1342),
      kT = IT(46),
      WT = IT(40110),
      XT = IT(40115),
      BT = IT(40137),
      FT = IT(40143);

    function ST(TT, oT) {
      return IT => {
        let {
          state: iT,
          dispatch: zT
        } = IT;
        if (iT.readOnly) return !1;
        let kT = TT(oT, iT);
        return !!kT && (zT(iT.update(kT)), !0)
      }
    }
    const DT = ST(rT, 0),
      LT = ST(MT, 0),
      xT = ST(((TT, oT) => MT(TT, oT, function(TT) {
        let oT = [];
        for (let IT of TT.selection.ec) {
          let iT = TT.doc.lineAt(IT.from),
            zT = IT.to <= iT.to ? iT : TT.doc.lineAt(IT.to);
          zT.from > iT.from && zT.from == IT.to && (zT = IT.to == iT.to + 1 ? iT : TT.doc.lineAt(IT.to - 1));
          let kT = oT.length - 1;
          kT >= 0 && oT[kT].to > iT.from ? oT[kT].to = zT.to : oT.push({
            from: iT.from + /^\s*/.exec(iT.text)[0].length,
            to: zT.to
          })
        }
        return oT
      }(oT))), 0);

    function cT(TT, oT) {
      let IT = TT.languageDataAt("commentTokens", oT, 1);
      return IT.length ? IT[0] : {}
    }
    const KT = 50;

    function MT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oT.selection.ec,
        iT = IT.map((TT => cT(oT, TT.from).block));
      if (!iT.every((TT => TT))) return null;
      let zT = IT.map(((TT, IT) => function(TT, oT, IT, iT) {
        let zT, kT, {
            open: WT,
            close: XT
          } = oT,
          BT = TT.sliceDoc(IT - KT, IT),
          FT = TT.sliceDoc(iT, iT + KT),
          ST = /\s*$/.exec(BT)[0].length,
          DT = /^\s*/.exec(FT)[0].length,
          LT = BT.length - ST;
        if (BT.slice(LT - WT.length, LT) == WT && FT.slice(DT, DT + XT.length) == XT) return {
          open: {
            pos: IT - ST,
            margin: ST && 1
          },
          close: {
            pos: iT + DT,
            margin: DT && 1
          }
        };
        iT - IT <= 2 * KT ? zT = kT = TT.sliceDoc(IT, iT) : (zT = TT.sliceDoc(IT, IT + KT), kT = TT.sliceDoc(iT - KT, iT));
        let xT = /^\s*/.exec(zT)[0].length,
          cT = /\s*$/.exec(kT)[0].length,
          MT = kT.length - cT - XT.length;
        return zT.slice(xT, xT + WT.length) == WT && kT.slice(MT, MT + XT.length) == XT ? {
          open: {
            pos: IT + xT + WT.length,
            margin: /\s/.test(zT.charAt(xT + WT.length)) ? 1 : 0
          },
          close: {
            pos: iT - cT - XT.length,
            margin: /\s/.test(kT.charAt(MT - 1)) ? 1 : 0
          }
        } : null
      }(oT, iT[IT], TT.from, TT.to)));
      if (2 != TT && !zT.every((TT => TT))) return {
        changes: oT.changes(IT.map(((TT, oT) => zT[oT] ? [] : [{
          from: TT.from,
          insert: iT[oT].open + " "
        }, {
          from: TT.to,
          insert: " " + iT[oT].close
        }])))
      };
      if (1 != TT && zT.some((TT => TT))) {
        let TT = [];
        for (let oT, IT = 0; IT < zT.length; IT++)
          if (oT = zT[IT]) {
            let zT = iT[IT],
              {
                open: kT,
                close: WT
              } = oT;
            TT.push({
              from: kT.pos - zT.open.length,
              to: kT.pos + kT.margin
            }, {
              from: WT.pos - WT.margin,
              to: WT.pos + zT.close.length
            })
          } return {
          changes: TT
        }
      }
      return null
    }

    function rT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oT.selection.ec,
        iT = [],
        zT = -1;
      TT: for (let {
          from: kT,
          to: WT
        }
        of IT) {
        let TT, IT = iT.length,
          XT = 1e9;
        for (let BT = kT; BT <= WT;) {
          let IT = oT.doc.lineAt(BT);
          if (void 0 == TT && (TT = cT(oT, IT.from).line, !TT)) continue TT;
          if (IT.from > zT && (kT == WT || WT > IT.from)) {
            zT = IT.from;
            let oT = /^\s*/.exec(IT.text)[0].length,
              kT = oT == IT.length,
              WT = IT.text.slice(oT, oT + TT.length) == TT ? oT : -1;
            oT < IT.text.length && oT < XT && (XT = oT), iT.push({
              line: IT,
              comment: WT,
              token: TT,
              indent: oT,
              empty: kT,
              single: !1
            })
          }
          BT = IT.to + 1
        }
        if (XT < 1e9)
          for (let oT = IT; oT < iT.length; oT++) iT[oT].indent < iT[oT].line.text.length && (iT[oT].indent = XT);
        iT.length == IT + 1 && (iT[IT].single = !0)
      }
      if (2 != TT && iT.some((TT => TT.comment < 0 && (!TT.empty || TT.single)))) {
        let TT = [];
        for (let {
            line: oT,
            token: zT,
            indent: kT,
            empty: WT,
            single: XT
          }
          of iT) !XT && WT || TT.push({
          from: oT.from + kT,
          insert: zT + " "
        });
        let IT = oT.changes(TT);
        return {
          changes: IT,
          selection: oT.selection.map(IT, 1)
        }
      }
      if (1 != TT && iT.some((TT => TT.comment >= 0))) {
        let TT = [];
        for (let {
            line: oT,
            comment: IT,
            token: zT
          }
          of iT)
          if (IT >= 0) {
            let iT = oT.from + IT,
              kT = iT + zT.length;
            " " == oT.text[kT - oT.from] && kT++, TT.push({
              from: iT,
              to: kT
            })
          } return {
          changes: TT
        }
      }
      return null
    }
    const AT = WT.b.define(),
      gT = WT.b.define(),
      hT = WT.p.define(),
      wT = WT.p.define({
        combine: TT => (0, WT.V)(TT, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (TT, oT) => oT
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (TT, oT) => (IT, iT) => TT(IT, iT) || oT(IT, iT)
        })
      }),
      mT = WT.K.define({
        create: () => nT.empty,
        update(TT, oT) {
          let IT = oT.state.facet(wT),
            iT = oT.annotation(AT);
          if (iT) {
            let zT = fT.fromTransaction(oT, iT.selection),
              kT = iT.side,
              WT = 0 == kT ? TT.undone : TT.done;
            return WT = zT ? CT(WT, WT.length, IT.minDepth, zT) : aT(WT, oT.startState.selection), new nT(0 == kT ? iT.rest : WT, 0 == kT ? WT : iT.rest)
          }
          let zT = oT.annotation(gT);
          if ("full" != zT && "before" != zT || (TT = TT.isolate()), !1 === oT.annotation(WT.O.addToHistory)) return oT.changes.empty ? TT : TT.addMapping(oT.changes.desc);
          let kT = fT.fromTransaction(oT),
            XT = oT.annotation(WT.O.time),
            BT = oT.annotation(WT.O.userEvent);
          return kT ? TT = TT.addChanges(kT, XT, BT, IT, oT) : oT.selection && (TT = TT.addSelection(oT.startState.selection, XT, BT, IT.newGroupDelay)), "full" != zT && "after" != zT || (TT = TT.isolate()), TT
        },
        toJSON: TT => ({
          done: TT.done.map((TT => TT.toJSON())),
          undone: TT.undone.map((TT => TT.toJSON()))
        }),
        fromJSON: TT => new nT(TT.done.map(fT.fromJSON), TT.undone.map(fT.fromJSON))
      });

    function eT(TT, oT) {
      return function(IT) {
        let {
          state: iT,
          dispatch: zT
        } = IT;
        if (!oT && iT.readOnly) return !1;
        let kT = iT.field(mT, !1);
        if (!kT) return !1;
        let WT = kT.pop(TT, iT, oT);
        return !!WT && (zT(WT), !0)
      }
    }
    const RT = eT(0, !1),
      uT = eT(1, !1),
      vT = eT(0, !0),
      ET = eT(1, !0);
    class fT {
      constructor(TT, oT, IT, iT, zT) {
        this.changes = TT, this.effects = oT, this.mapped = IT, this.startSelection = iT, this.selectionsAfter = zT
      }
      setSelAfter(TT) {
        return new fT(this.changes, this.effects, this.mapped, this.startSelection, TT)
      }
      toJSON() {
        var TT, oT, IT;
        return {
          changes: null === (TT = this.changes) || void 0 === TT ? void 0 : TT.toJSON(),
          mapped: null === (oT = this.mapped) || void 0 === oT ? void 0 : oT.toJSON(),
          startSelection: null === (IT = this.startSelection) || void 0 === IT ? void 0 : IT.toJSON(),
          selectionsAfter: this.selectionsAfter.map((TT => TT.toJSON()))
        }
      }
      static fromJSON(TT) {
        return new fT(TT.changes && WT.ChangeSet.fromJSON(TT.changes), [], TT.mapped && WT.c.fromJSON(TT.mapped), TT.startSelection && WT.k.fromJSON(TT.startSelection), TT.selectionsAfter.map(WT.k.fromJSON))
      }
      static fromTransaction(TT, oT) {
        let IT = JT;
        for (let iT of TT.startState.facet(hT)) {
          let oT = iT(TT);
          oT.length && (IT = IT.concat(oT))
        }
        return !IT.length && TT.changes.empty ? null : new fT(TT.changes.invert(TT.startState.doc), IT, void 0, oT || TT.startState.selection, JT)
      }
      static selection(TT) {
        return new fT(void 0, JT, void 0, void 0, TT)
      }
    }

    function CT(TT, oT, IT, iT) {
      let zT = oT + 1 > IT + 20 ? oT - IT - 1 : 0,
        kT = TT.slice(zT, oT);
      return kT.push(iT), kT
    }

    function jT(TT, oT) {
      return TT.length ? oT.length ? TT.concat(oT) : TT : oT
    }
    const JT = [],
      UT = 200;

    function aT(TT, oT) {
      if (TT.length) {
        let IT = TT[TT.length - 1],
          iT = IT.selectionsAfter.slice(Math.max(0, IT.selectionsAfter.length - UT));
        return iT.length && iT[iT.length - 1].eq(oT) ? TT : (iT.push(oT), CT(TT, TT.length - 1, 1e9, IT.setSelAfter(iT)))
      }
      return [fT.selection([oT])]
    }

    function YT(TT) {
      let oT = TT[TT.length - 1],
        IT = TT.slice();
      return IT[TT.length - 1] = oT.setSelAfter(oT.selectionsAfter.slice(0, oT.selectionsAfter.length - 1)), IT
    }

    function QT(TT, oT) {
      if (!TT.length) return TT;
      let IT = TT.length,
        iT = JT;
      for (; IT;) {
        let zT = OT(TT[IT - 1], oT, iT);
        if (zT.changes && !zT.changes.empty || zT.effects.length) {
          let oT = TT.slice(0, IT);
          return oT[IT - 1] = zT, oT
        }
        oT = zT.mapped, IT--, iT = zT.selectionsAfter
      }
      return iT.length ? [fT.selection(iT)] : JT
    }

    function OT(TT, oT, IT) {
      let iT = jT(TT.selectionsAfter.length ? TT.selectionsAfter.map((TT => TT.map(oT))) : JT, IT);
      if (!TT.changes) return fT.selection(iT);
      let zT = TT.changes.map(oT),
        kT = oT.mapDesc(TT.changes, !0),
        XT = TT.mapped ? TT.mapped.composeDesc(kT) : kT;
      return new fT(zT, WT.H.mapEffects(TT.effects, oT), XT, TT.startSelection.map(kT), iT)
    }
    const HT = /^(input\.type|delete)($|\.)/;
    class nT {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = TT, this.undone = oT, this.prevTime = IT, this.prevUserEvent = iT
      }
      isolate() {
        return this.prevTime ? new nT(this.done, this.undone) : this
      }
      addChanges(TT, oT, IT, iT, zT) {
        let kT = this.done,
          XT = kT[kT.length - 1];
        return kT = XT && XT.changes && !XT.changes.empty && TT.changes && (!IT || HT.test(IT)) && (!XT.selectionsAfter.length && oT - this.prevTime < iT.newGroupDelay && iT.joinToEvent(zT, function(TT, oT) {
          let IT = [],
            iT = !1;
          return TT.iterChangedRanges(((TT, oT) => IT.push(TT, oT))), oT.iterChangedRanges(((TT, oT, zT, kT) => {
            for (let WT = 0; WT < IT.length;) {
              let TT = IT[WT++],
                oT = IT[WT++];
              kT >= TT && zT <= oT && (iT = !0)
            }
          })), iT
        }(XT.changes, TT.changes)) || "input.type.compose" == IT) ? CT(kT, kT.length - 1, iT.minDepth, new fT(TT.changes.compose(XT.changes), jT(WT.H.mapEffects(TT.effects, XT.changes), XT.effects), XT.mapped, XT.startSelection, JT)) : CT(kT, kT.length, iT.minDepth, TT), new nT(kT, JT, oT, IT)
      }
      addSelection(TT, oT, IT, iT) {
        let zT = this.done.length ? this.done[this.done.length - 1].selectionsAfter : JT;
        return zT.length > 0 && oT - this.prevTime < iT && IT == this.prevUserEvent && IT && /^select($|\.)/.test(IT) && (kT = zT[zT.length - 1], WT = TT, kT.ec.length == WT.ec.length && 0 === kT.ec.filter(((TT, oT) => TT.empty != WT.ec[oT].empty)).length) ? this : new nT(aT(this.done, TT), this.undone, oT, IT);
        var kT, WT
      }
      addMapping(TT) {
        return new nT(QT(this.done, TT), QT(this.undone, TT), this.prevTime, this.prevUserEvent)
      }
      pop(TT, oT, IT) {
        let iT = 0 == TT ? this.done : this.undone;
        if (0 == iT.length) return null;
        let zT = iT[iT.length - 1],
          kT = zT.selectionsAfter[0] || (zT.startSelection ? zT.startSelection.map(zT.changes.invertedDesc, 1) : oT.selection);
        if (IT && zT.selectionsAfter.length) return oT.update({
          selection: zT.selectionsAfter[zT.selectionsAfter.length - 1],
          annotations: AT.of({
            side: TT,
            rest: YT(iT),
            selection: kT
          }),
          userEvent: 0 == TT ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (zT.changes) {
          let IT = 1 == iT.length ? JT : iT.slice(0, iT.length - 1);
          return zT.mapped && (IT = QT(IT, zT.mapped)), oT.update({
            changes: zT.changes,
            selection: zT.startSelection,
            effects: zT.effects,
            annotations: AT.of({
              side: TT,
              rest: IT,
              selection: kT
            }),
            filter: !1,
            userEvent: 0 == TT ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    nT.empty = new nT(JT, JT);
    const qT = [{
      key: "Mod-z",
      run: RT,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: uT,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: uT,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: vT,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: ET,
      preventDefault: !0
    }];

    function ZT(TT, oT) {
      return WT.k.create(TT.ec.map(oT), TT.mainIndex)
    }

    function lT(TT, oT) {
      return TT.update({
        selection: oT,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function sT(TT, oT) {
      let {
        state: IT,
        dispatch: iT
      } = TT, zT = ZT(IT.selection, oT);
      return !zT.eq(IT.selection, !0) && (iT(lT(IT, zT)), !0)
    }

    function tT(TT, oT) {
      return WT.k.cursor(oT ? TT.to : TT.from)
    }

    function GT(TT, oT) {
      return sT(TT, (IT => IT.empty ? TT.moveByChar(IT, oT) : tT(IT, oT)))
    }

    function pT(TT) {
      return TT.textDirectionAt(TT.state.selection.main.head) == XT.f.LTR
    }
    const bT = TT => GT(TT, !pT(TT)),
      yT = TT => GT(TT, pT(TT));

    function NT(TT, oT) {
      return sT(TT, (IT => IT.empty ? TT.moveByGroup(IT, oT) : tT(IT, oT)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function PT(TT, oT, IT) {
      if (oT.type.prop(IT)) return !0;
      let iT = oT.to - oT.from;
      return iT && (iT > 2 || /[^\s,.;:]/.test(TT.sliceDoc(oT.from, oT.to))) || oT.firstChild
    }

    function dT(TT, oT, IT) {
      let iT, zT, kT = (0, BT.jb)(TT).resolveInner(oT.head),
        XT = IT ? FT.j.closedBy : FT.j.openedBy;
      for (let WT = oT.head;;) {
        let oT = IT ? kT.childAfter(WT) : kT.childBefore(WT);
        if (!oT) break;
        PT(TT, oT, XT) ? kT = oT : WT = IT ? oT.to : oT.from
      }
      return zT = kT.type.prop(XT) && (iT = IT ? (0, BT.cb)(TT, kT.from, 1) : (0, BT.cb)(TT, kT.to, -1)) && iT.matched ? IT ? iT.end.to : iT.end.from : IT ? kT.to : kT.from, WT.k.cursor(zT, IT ? -1 : 1)
    }

    function VT(TT, oT) {
      return sT(TT, (IT => {
        if (!IT.empty) return tT(IT, oT);
        let iT = TT.moveVertically(IT, oT);
        return iT.head != IT.head ? iT : TT.moveToLineBoundary(IT, oT)
      }))
    }
    const To = TT => VT(TT, !1),
      oo = TT => VT(TT, !0);

    function Io(TT) {
      let oT, IT = TT.scrollDOM.clientHeight < TT.scrollDOM.scrollHeight - 2,
        iT = 0,
        zT = 0;
      if (IT) {
        for (let oT of TT.state.facet(XT.i.scrollMargins)) {
          let IT = oT(TT);
          (null === IT || void 0 === IT ? void 0 : IT.top) && (iT = Math.max(null === IT || void 0 === IT ? void 0 : IT.top, iT)), (null === IT || void 0 === IT ? void 0 : IT.bottom) && (zT = Math.max(null === IT || void 0 === IT ? void 0 : IT.bottom, zT))
        }
        oT = TT.scrollDOM.clientHeight - iT - zT
      } else oT = (TT.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: iT,
        marginBottom: zT,
        selfScroll: IT,
        height: Math.max(TT.defaultLineHeight, oT - 5)
      }
    }

    function io(TT, oT) {
      let IT, iT = Io(TT),
        {
          state: zT
        } = TT,
        kT = ZT(zT.selection, (IT => IT.empty ? TT.moveVertically(IT, oT, iT.height) : tT(IT, oT)));
      if (kT.eq(zT.selection)) return !1;
      if (iT.selfScroll) {
        let oT = TT.coordsAtPos(zT.selection.main.head),
          WT = TT.scrollDOM.getBoundingClientRect(),
          BT = WT.top + iT.marginTop,
          FT = WT.bottom - iT.marginBottom;
        oT && oT.top > BT && oT.bottom < FT && (IT = XT.i.scrollIntoView(kT.main.head, {
          y: "start",
          yMargin: oT.top - BT
        }))
      }
      return TT.dispatch(lT(zT, kT), {
        effects: IT
      }), !0
    }
    const zo = TT => io(TT, !1),
      ko = TT => io(TT, !0);

    function Wo(TT, oT, IT) {
      let iT = TT.lineBlockAt(oT.head),
        zT = TT.moveToLineBoundary(oT, IT);
      if (zT.head == oT.head && zT.head != (IT ? iT.to : iT.from) && (zT = TT.moveToLineBoundary(oT, IT, !1)), !IT && zT.head == iT.from && iT.length) {
        let IT = /^\s*/.exec(TT.state.sliceDoc(iT.from, Math.min(iT.from + 100, iT.to)))[0].length;
        IT && oT.head != iT.from + IT && (zT = WT.k.cursor(iT.from + IT))
      }
      return zT
    }

    function Xo(TT, oT, IT) {
      let iT = !1,
        zT = ZT(TT.selection, (oT => {
          let zT = (0, BT.cb)(TT, oT.head, -1) || (0, BT.cb)(TT, oT.head, 1) || oT.head > 0 && (0, BT.cb)(TT, oT.head - 1, 1) || oT.head < TT.doc.length && (0, BT.cb)(TT, oT.head + 1, -1);
          if (!zT || !zT.end) return oT;
          iT = !0;
          let kT = zT.start.from == oT.head ? zT.end.to : zT.end.from;
          return IT ? WT.k.range(oT.anchor, kT) : WT.k.cursor(kT)
        }));
      return !!iT && (oT(lT(TT, zT)), !0)
    }

    function Bo(TT, oT) {
      let IT = ZT(TT.state.selection, (TT => {
        let IT = oT(TT);
        return WT.k.range(TT.anchor, IT.head, IT.goalColumn, IT.bidiLevel || void 0, IT.assoc)
      }));
      return !IT.eq(TT.state.selection) && (TT.dispatch(lT(TT.state, IT)), !0)
    }

    function Fo(TT, oT) {
      return Bo(TT, (IT => TT.moveByChar(IT, oT)))
    }
    const So = TT => Fo(TT, !pT(TT)),
      Do = TT => Fo(TT, pT(TT));

    function Lo(TT, oT) {
      return Bo(TT, (IT => TT.moveByGroup(IT, oT)))
    }

    function xo(TT, oT) {
      return Bo(TT, (IT => TT.moveVertically(IT, oT)))
    }
    const co = TT => xo(TT, !1),
      Ko = TT => xo(TT, !0);

    function Mo(TT, oT) {
      return Bo(TT, (IT => TT.moveVertically(IT, oT, Io(TT).height)))
    }
    const ro = TT => Mo(TT, !1),
      Ao = TT => Mo(TT, !0),
      go = TT => {
        let {
          state: oT,
          dispatch: IT
        } = TT;
        return IT(lT(oT, {
          anchor: 0
        })), !0
      },
      ho = TT => {
        let {
          state: oT,
          dispatch: IT
        } = TT;
        return IT(lT(oT, {
          anchor: oT.doc.length
        })), !0
      },
      wo = TT => {
        let {
          state: oT,
          dispatch: IT
        } = TT;
        return IT(lT(oT, {
          anchor: oT.selection.main.anchor,
          head: 0
        })), !0
      },
      mo = TT => {
        let {
          state: oT,
          dispatch: IT
        } = TT;
        return IT(lT(oT, {
          anchor: oT.selection.main.anchor,
          head: oT.doc.length
        })), !0
      };

    function eo(TT, oT) {
      let {
        state: IT
      } = TT, iT = IT.selection, zT = IT.selection.ec.slice();
      for (let kT of IT.selection.ec) {
        let iT = IT.doc.lineAt(kT.head);
        if (oT ? iT.to < TT.state.doc.length : iT.from > 0)
          for (let IT = kT;;) {
            let kT = TT.moveVertically(IT, oT);
            if (kT.head < iT.from || kT.head > iT.to) {
              zT.some((TT => TT.head == kT.head)) || zT.push(kT);
              break
            }
            if (kT.head == IT.head) break;
            IT = kT
          }
      }
      return zT.length != iT.ec.length && (TT.dispatch(lT(IT, WT.k.create(zT, zT.length - 1))), !0)
    }

    function Ro(TT, oT) {
      if (TT.state.readOnly) return !1;
      let IT = "delete.selection",
        {
          state: iT
        } = TT,
        zT = iT.changeByRange((iT => {
          let {
            from: zT,
            to: kT
          } = iT;
          if (zT == kT) {
            let WT = oT(iT);
            WT < zT ? (IT = "delete.backward", WT = uo(TT, WT, !1)) : WT > zT && (IT = "delete.forward", WT = uo(TT, WT, !0)), zT = Math.min(zT, WT), kT = Math.max(kT, WT)
          } else zT = uo(TT, zT, !1), kT = uo(TT, kT, !0);
          return zT == kT ? {
            range: iT
          } : {
            changes: {
              from: zT,
              to: kT
            },
            range: WT.k.cursor(zT, zT < iT.head ? -1 : 1)
          }
        }));
      return !zT.changes.empty && (TT.dispatch(iT.update(zT, {
        scrollIntoView: !0,
        userEvent: IT,
        effects: "delete.selection" == IT ? XT.i.announce.of(iT.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function uo(TT, oT, IT) {
      if (TT instanceof XT.i)
        for (let iT of TT.state.facet(XT.i.atomicRanges).map((oT => oT(TT)))) iT.between(oT, oT, ((TT, iT) => {
          TT < oT && iT > oT && (oT = IT ? iT : TT)
        }));
      return oT
    }
    const vo = (TT, oT, IT) => Ro(TT, (iT => {
        let zT, kT, XT = iT.from,
          {
            state: FT
          } = TT,
          ST = FT.doc.lineAt(XT);
        if (IT && !oT && XT > ST.from && XT < ST.from + 200 && !/[^ \t]/.test(zT = ST.text.slice(0, XT - ST.from))) {
          if ("\t" == zT[zT.length - 1]) return XT - 1;
          let TT = (0, WT.Y)(zT, FT.tabSize) % (0, BT.Q)(FT) || (0, BT.Q)(FT);
          for (let oT = 0; oT < TT && " " == zT[zT.length - 1 - oT]; oT++) XT--;
          kT = XT
        } else kT = (0, WT.ab)(ST.text, XT - ST.from, oT, oT) + ST.from, kT == XT && ST.number != (oT ? FT.doc.lines : 1) ? kT += oT ? 1 : -1 : !oT && /[\ufe00-\ufe0f]/.test(ST.text.slice(kT - ST.from, XT - ST.from)) && (kT = (0, WT.ab)(ST.text, kT - ST.from, !1, !1) + ST.from);
        return kT
      })),
      Eo = TT => vo(TT, !1, !0),
      fo = TT => vo(TT, !0, !1),
      Co = (TT, oT) => Ro(TT, (IT => {
        let iT = IT.head,
          {
            state: zT
          } = TT,
          kT = zT.doc.lineAt(iT),
          XT = zT.charCategorizer(iT);
        for (let TT = null;;) {
          if (iT == (oT ? kT.to : kT.from)) {
            iT == IT.head && kT.number != (oT ? zT.doc.lines : 1) && (iT += oT ? 1 : -1);
            break
          }
          let BT = (0, WT.ab)(kT.text, iT - kT.from, oT) + kT.from,
            FT = kT.text.slice(Math.min(iT, BT) - kT.from, Math.max(iT, BT) - kT.from),
            ST = XT(FT);
          if (null != TT && ST != TT) break;
          " " == FT && iT == IT.head || (TT = ST), iT = BT
        }
        return iT
      })),
      jo = TT => Co(TT, !1);

    function Jo(TT) {
      let oT = [],
        IT = -1;
      for (let iT of TT.selection.ec) {
        let zT = TT.doc.lineAt(iT.from),
          kT = TT.doc.lineAt(iT.to);
        if (iT.empty || iT.to != kT.from || (kT = TT.doc.lineAt(iT.to - 1)), IT >= zT.number) {
          let TT = oT[oT.length - 1];
          TT.to = kT.to, TT.ec.push(iT)
        } else oT.push({
          from: zT.from,
          to: kT.to,
          ec: [iT]
        });
        IT = kT.number + 1
      }
      return oT
    }

    function Uo(TT, oT, IT) {
      if (TT.readOnly) return !1;
      let iT = [],
        zT = [];
      for (let kT of Jo(TT)) {
        if (IT ? kT.to == TT.doc.length : 0 == kT.from) continue;
        let oT = TT.doc.lineAt(IT ? kT.to + 1 : kT.from - 1),
          XT = oT.length + 1;
        if (IT) {
          iT.push({
            from: kT.to,
            to: oT.to
          }, {
            from: kT.from,
            insert: oT.text + TT.lineBreak
          });
          for (let oT of kT.ec) zT.push(WT.k.range(Math.min(TT.doc.length, oT.anchor + XT), Math.min(TT.doc.length, oT.head + XT)))
        } else {
          iT.push({
            from: oT.from,
            to: kT.from
          }, {
            from: kT.to,
            insert: TT.lineBreak + oT.text
          });
          for (let TT of kT.ec) zT.push(WT.k.range(TT.anchor - XT, TT.head - XT))
        }
      }
      return !!iT.length && (oT(TT.update({
        changes: iT,
        scrollIntoView: !0,
        selection: WT.k.create(zT, TT.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function ao(TT, oT, IT) {
      if (TT.readOnly) return !1;
      let iT = [];
      for (let kT of Jo(TT)) IT ? iT.push({
        from: kT.from,
        insert: TT.doc.slice(kT.from, kT.to) + TT.lineBreak
      }) : iT.push({
        from: kT.to,
        insert: TT.lineBreak + TT.doc.slice(kT.from, kT.to)
      });
      let zT = TT.changes(iT);
      return oT(TT.update({
        changes: zT,
        selection: TT.selection.map(zT, IT ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const Yo = Qo(!1);

    function Qo(TT) {
      return oT => {
        let {
          state: IT,
          dispatch: iT
        } = oT;
        if (IT.readOnly) return !1;
        let zT = IT.changeByRange((oT => {
          let {
            from: iT,
            to: zT
          } = oT, kT = IT.doc.lineAt(iT), XT = !TT && iT == zT && function(TT, oT) {
            if (/\(\)|\[\]|\{\}/.test(TT.sliceDoc(oT - 1, oT + 1))) return {
              from: oT,
              to: oT
            };
            let IT, iT = (0, BT.jb)(TT).resolveInner(oT),
              zT = iT.childBefore(oT),
              kT = iT.childAfter(oT);
            return zT && kT && zT.to <= oT && kT.from >= oT && (IT = zT.type.prop(FT.j.closedBy)) && IT.indexOf(kT.name) > -1 && TT.doc.lineAt(zT.to).from == TT.doc.lineAt(kT.from).from && !/\S/.test(TT.sliceDoc(zT.to, kT.from)) ? {
              from: zT.to,
              to: kT.from
            } : null
          }(IT, iT);
          TT && (iT = zT = (zT <= kT.to ? kT : IT.doc.lineAt(zT)).to);
          let ST = new BT.f(IT, {
              simulateBreak: iT,
              simulateDoubleBreak: !!XT
            }),
            DT = (0, BT.S)(ST, iT);
          for (null == DT && (DT = (0, WT.Y)(/^\s*/.exec(IT.doc.lineAt(iT).text)[0], IT.tabSize)); zT < kT.to && /\s/.test(kT.text[zT - kT.from]);) zT++;
          XT ? ({
            from: iT,
            to: zT
          } = XT) : iT > kT.from && iT < kT.from + 100 && !/\S/.test(kT.text.slice(0, iT)) && (iT = kT.from);
          let LT = ["", (0, BT.X)(IT, DT)];
          return XT && LT.push((0, BT.X)(IT, ST.lineIndent(kT.from, -1))), {
            changes: {
              from: iT,
              to: zT,
              insert: WT.N.of(LT)
            },
            range: WT.k.cursor(iT + 1 + LT[1].length)
          }
        }));
        return iT(IT.update(zT, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function Oo(TT, oT) {
      let IT = -1;
      return TT.changeByRange((iT => {
        let zT = [];
        for (let WT = iT.from; WT <= iT.to;) {
          let kT = TT.doc.lineAt(WT);
          kT.number > IT && (iT.empty || iT.to > kT.from) && (oT(kT, zT, iT), IT = kT.number), WT = kT.to + 1
        }
        let kT = TT.changes(zT);
        return {
          changes: zT,
          range: WT.k.range(kT.mapPos(iT.anchor, 1), kT.mapPos(iT.head, 1))
        }
      }))
    }
    const Ho = TT => {
        let {
          state: oT,
          dispatch: IT
        } = TT;
        return !oT.readOnly && (IT(oT.update(Oo(oT, ((TT, IT) => {
          IT.push({
            from: TT.from,
            insert: oT.facet(BT.$)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      no = TT => {
        let {
          state: oT,
          dispatch: IT
        } = TT;
        return !oT.readOnly && (IT(oT.update(Oo(oT, ((TT, IT) => {
          let iT = /^\s*/.exec(TT.text)[0];
          if (!iT) return;
          let zT = (0, WT.Y)(iT, oT.tabSize),
            kT = 0,
            XT = (0, BT.X)(oT, Math.max(0, zT - (0, BT.Q)(oT)));
          for (; kT < iT.length && kT < XT.length && iT.charCodeAt(kT) == XT.charCodeAt(kT);) kT++;
          IT.push({
            from: TT.from + kT,
            to: TT.from + iT.length,
            insert: XT.slice(kT)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      qo = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: TT => sT(TT, (oT => dT(TT.state, oT, !pT(TT)))),
        shift: TT => Bo(TT, (oT => dT(TT.state, oT, !pT(TT))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: TT => sT(TT, (oT => dT(TT.state, oT, pT(TT)))),
        shift: TT => Bo(TT, (oT => dT(TT.state, oT, pT(TT))))
      }, {
        key: "Alt-ArrowUp",
        run: TT => {
          let {
            state: oT,
            dispatch: IT
          } = TT;
          return Uo(oT, IT, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: TT => {
          let {
            state: oT,
            dispatch: IT
          } = TT;
          return ao(oT, IT, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: TT => {
          let {
            state: oT,
            dispatch: IT
          } = TT;
          return Uo(oT, IT, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: TT => {
          let {
            state: oT,
            dispatch: IT
          } = TT;
          return ao(oT, IT, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: TT => eo(TT, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: TT => eo(TT, !0)
      }, {
        key: "Escape",
        run: TT => {
          let {
            state: oT,
            dispatch: IT
          } = TT, iT = oT.selection, zT = null;
          return iT.ec.length > 1 ? zT = WT.k.create([iT.main]) : iT.main.empty || (zT = WT.k.create([WT.k.cursor(iT.main.head)])), !!zT && (IT(lT(oT, zT)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: Qo(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: TT => {
          let {
            state: oT,
            dispatch: IT
          } = TT, iT = Jo(oT).map((TT => {
            let {
              from: IT,
              to: iT
            } = TT;
            return WT.k.range(IT, Math.min(iT + 1, oT.doc.length))
          }));
          return IT(oT.update({
            selection: WT.k.create(iT),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: TT => {
          let {
            state: oT,
            dispatch: IT
          } = TT, iT = ZT(oT.selection, (TT => {
            let IT = (0, BT.jb)(oT),
              iT = IT.resolveStack(TT.from, 1);
            if (TT.empty) {
              let oT = IT.resolveStack(TT.from, -1);
              oT.node.from >= iT.node.from && oT.node.to <= iT.node.to && (iT = oT)
            }
            for (let oT = iT; oT; oT = oT.next) {
              let {
                node: IT
              } = oT;
              if ((IT.from < TT.from && IT.to >= TT.to || IT.to > TT.to && IT.from <= TT.from) && oT.next) return WT.k.range(IT.to, IT.from)
            }
            return TT
          }));
          return !iT.eq(oT.selection) && (IT(lT(oT, iT)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: no
      }, {
        key: "Mod-]",
        run: Ho
      }, {
        key: "Mod-Alt-\\",
        run: TT => {
          let {
            state: oT,
            dispatch: IT
          } = TT;
          if (oT.readOnly) return !1;
          let iT = Object.create(null),
            zT = new BT.f(oT, {
              overrideIndentation: TT => {
                let oT = iT[TT];
                return null == oT ? -1 : oT
              }
            }),
            kT = Oo(oT, ((TT, IT, kT) => {
              let WT = (0, BT.S)(zT, TT.from);
              if (null == WT) return;
              /\S/.test(TT.text) || (WT = 0);
              let XT = /^\s*/.exec(TT.text)[0],
                FT = (0, BT.X)(oT, WT);
              (XT != FT || kT.from < TT.from + XT.length) && (iT[TT.from] = WT, IT.push({
                from: TT.from,
                to: TT.from + XT.length,
                insert: FT
              }))
            }));
          return kT.changes.empty || IT(oT.update(kT, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: TT => {
          if (TT.state.readOnly) return !1;
          let {
            state: oT
          } = TT, IT = oT.changes(Jo(oT).map((TT => {
            let {
              from: IT,
              to: iT
            } = TT;
            return IT > 0 ? IT-- : iT < oT.doc.length && iT++, {
              from: IT,
              to: iT
            }
          }))), iT = ZT(oT.selection, (oT => {
            let IT;
            if (TT.lineWrapping) {
              let iT = TT.lineBlockAt(oT.head),
                zT = TT.coordsAtPos(oT.head, oT.assoc || 1);
              zT && (IT = iT.bottom + TT.documentTop - zT.bottom + TT.defaultLineHeight / 2)
            }
            return TT.moveVertically(oT, !0, IT)
          })).map(IT);
          return TT.dispatch({
            changes: IT,
            selection: iT,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: TT => {
          let {
            state: oT,
            dispatch: IT
          } = TT;
          return Xo(oT, IT, !1)
        }
      }, {
        key: "Mod-/",
        run: TT => {
          let {
            state: oT
          } = TT, IT = oT.doc.lineAt(oT.selection.main.from), iT = cT(TT.state, IT.from);
          return iT.line ? DT(TT) : !!iT.block && xT(TT)
        }
      }, {
        key: "Alt-A",
        run: LT
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: TT => (TT.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: bT,
        shift: So,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: TT => NT(TT, !pT(TT)),
        shift: TT => Lo(TT, !pT(TT)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: TT => sT(TT, (oT => Wo(TT, oT, !pT(TT)))),
        shift: TT => Bo(TT, (oT => Wo(TT, oT, !pT(TT)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: yT,
        shift: Do,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: TT => NT(TT, pT(TT)),
        shift: TT => Lo(TT, pT(TT)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: TT => sT(TT, (oT => Wo(TT, oT, pT(TT)))),
        shift: TT => Bo(TT, (oT => Wo(TT, oT, pT(TT)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: To,
        shift: co,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: go,
        shift: wo
      }, {
        mac: "Ctrl-ArrowUp",
        run: zo,
        shift: ro
      }, {
        key: "ArrowDown",
        run: oo,
        shift: Ko,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: ho,
        shift: mo
      }, {
        mac: "Ctrl-ArrowDown",
        run: ko,
        shift: Ao
      }, {
        key: "PageUp",
        run: zo,
        shift: ro
      }, {
        key: "PageDown",
        run: ko,
        shift: Ao
      }, {
        key: "Home",
        run: TT => sT(TT, (oT => Wo(TT, oT, !1))),
        shift: TT => Bo(TT, (oT => Wo(TT, oT, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: go,
        shift: wo
      }, {
        key: "End",
        run: TT => sT(TT, (oT => Wo(TT, oT, !0))),
        shift: TT => Bo(TT, (oT => Wo(TT, oT, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: ho,
        shift: mo
      }, {
        key: "Enter",
        run: Yo,
        shift: Yo
      }, {
        key: "Mod-a",
        run: TT => {
          let {
            state: oT,
            dispatch: IT
          } = TT;
          return IT(oT.update({
            selection: {
              anchor: 0,
              head: oT.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: Eo,
        shift: Eo,
        preventDefault: !0
      }, {
        key: "Delete",
        run: fo,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: jo,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: TT => Co(TT, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: TT => Ro(TT, (oT => {
          let IT = TT.moveToLineBoundary(oT, !1).head;
          return oT.head > IT ? IT : Math.max(0, oT.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: TT => Ro(TT, (oT => {
          let IT = TT.moveToLineBoundary(oT, !0).head;
          return oT.head < IT ? IT : Math.min(TT.state.doc.length, oT.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: bT,
        shift: So,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: yT,
        shift: Do
      }, {
        key: "Ctrl-p",
        run: To,
        shift: co
      }, {
        key: "Ctrl-n",
        run: oo,
        shift: Ko
      }, {
        key: "Ctrl-a",
        run: TT => sT(TT, (oT => WT.k.cursor(TT.lineBlockAt(oT.head).from, 1))),
        shift: TT => Bo(TT, (oT => WT.k.cursor(TT.lineBlockAt(oT.head).from)))
      }, {
        key: "Ctrl-e",
        run: TT => sT(TT, (oT => WT.k.cursor(TT.lineBlockAt(oT.head).to, -1))),
        shift: TT => Bo(TT, (oT => WT.k.cursor(TT.lineBlockAt(oT.head).to)))
      }, {
        key: "Ctrl-d",
        run: fo
      }, {
        key: "Ctrl-h",
        run: Eo
      }, {
        key: "Ctrl-k",
        run: TT => Ro(TT, (oT => {
          let IT = TT.lineBlockAt(oT.head).to;
          return oT.head < IT ? IT : Math.min(TT.state.doc.length, oT.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: jo
      }, {
        key: "Ctrl-o",
        run: TT => {
          let {
            state: oT,
            dispatch: IT
          } = TT;
          if (oT.readOnly) return !1;
          let iT = oT.changeByRange((TT => ({
            changes: {
              from: TT.from,
              to: TT.to,
              insert: WT.N.of(["", ""])
            },
            range: WT.k.cursor(TT.from)
          })));
          return IT(oT.update(iT, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: TT => {
          let {
            state: oT,
            dispatch: IT
          } = TT;
          if (oT.readOnly) return !1;
          let iT = oT.changeByRange((TT => {
            if (!TT.empty || 0 == TT.from || TT.from == oT.doc.length) return {
              range: TT
            };
            let IT = TT.from,
              iT = oT.doc.lineAt(IT),
              zT = IT == iT.from ? IT - 1 : (0, WT.ab)(iT.text, IT - iT.from, !1) + iT.from,
              kT = IT == iT.to ? IT + 1 : (0, WT.ab)(iT.text, IT - iT.from, !0) + iT.from;
            return {
              changes: {
                from: zT,
                to: kT,
                insert: oT.doc.slice(IT, kT).append(oT.doc.slice(zT, IT))
              },
              range: WT.k.cursor(kT)
            }
          }));
          return !iT.changes.empty && (IT(oT.update(iT, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: ko
      }].map((TT => ({
        mac: TT.key,
        run: TT.run,
        shift: TT.shift
      }))))),
      Zo = {
        key: "Tab",
        run: Ho,
        shift: no
      };
    var so = IT(40171),
      to = IT(40103),
      Go = IT(40176),
      po = function(TT) {
        void 0 === TT && (TT = {});
        var {
          crosshairCursor: oT = !1
        } = TT, IT = [];
        !1 !== TT.closeBracketsKeymap && (IT = IT.concat(to.i)), !1 !== TT.defaultKeymap && (IT = IT.concat(qo)), !1 !== TT.searchKeymap && (IT = IT.concat(so.h)), !1 !== TT.historyKeymap && (IT = IT.concat(qT)), !1 !== TT.foldKeymap && (IT = IT.concat(BT.G)), !1 !== TT.completionKeymap && (IT = IT.concat(to.l)), !1 !== TT.lintKeymap && (IT = IT.concat(Go.b));
        var iT = [];
        return !1 !== TT.lineNumbers && iT.push((0, XT.Q)()), !1 !== TT.highlightActiveLineGutter && iT.push((0, XT.F)()), !1 !== TT.highlightSpecialChars && iT.push((0, XT.K)()), !1 !== TT.history && iT.push(function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [mT, wT.of(TT), XT.i.domEventHandlers({
            beforeinput(TT, oT) {
              let IT = "historyUndo" == TT.inputType ? RT : "historyRedo" == TT.inputType ? uT : null;
              return !!IT && (TT.preventDefault(), IT(oT))
            }
          })]
        }()), !1 !== TT.foldGutter && iT.push((0, BT.C)()), !1 !== TT.drawSelection && iT.push((0, XT.s)()), !1 !== TT.dropCursor && iT.push((0, XT.t)()), !1 !== TT.allowMultipleSelections && iT.push(WT.o.allowMultipleSelections.of(!0)), !1 !== TT.indentOnInput && iT.push((0, BT.U)()), !1 !== TT.syntaxHighlighting && iT.push((0, BT.fb)(BT.s, {
          fallback: !0
        })), !1 !== TT.bracketMatching && iT.push((0, BT.n)()), !1 !== TT.closeBrackets && iT.push((0, to.j)()), !1 !== TT.autocompletion && iT.push((0, to.e)()), !1 !== TT.rectangularSelection && iT.push((0, XT._)()), !1 !== oT && iT.push((0, XT.q)()), !1 !== TT.highlightActiveLine && iT.push((0, XT.G)()), !1 !== TT.highlightSelectionMatches && iT.push((0, so.d)()), TT.tabSize && "number" === typeof TT.tabSize && iT.push(BT.$.of(" ".repeat(TT.tabSize))), iT.concat([XT.N.of(IT.flat())]).filter(Boolean)
      },
      bo = IT(40151);
    const yo = "#e5c07b",
      No = "#e06c75",
      Po = "#56b6c2",
      Vo = "#ffffff",
      TI = "#abb2bf",
      oI = "#7d8799",
      II = "#61afef",
      iI = "#98c379",
      zI = "#d19a66",
      kI = "#c678dd",
      WI = "#21252b",
      XI = "#2c313a",
      BI = "#282c34",
      FI = "#353a42",
      SI = "#3E4451",
      DI = "#528bff",
      LI = XT.i.theme({
        "&": {
          color: TI,
          backgroundColor: BI
        },
        ".cm-content": {
          caretColor: DI
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: DI
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: SI
        },
        ".cm-panels": {
          backgroundColor: WI,
          color: TI
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
          backgroundColor: BI,
          color: oI,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: XI
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: FI
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: FI,
          borderBottomColor: FI
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: XI,
            color: TI
          }
        }
      }, {
        dark: !0
      }),
      xI = BT.c.define([{
        tag: bo.m.keyword,
        color: kI
      }, {
        tag: [bo.m.name, bo.m.deleted, bo.m.character, bo.m.propertyName, bo.m.macroName],
        color: No
      }, {
        tag: [bo.m.function(bo.m.variableName), bo.m.labelName],
        color: II
      }, {
        tag: [bo.m.color, bo.m.constant(bo.m.name), bo.m.standard(bo.m.name)],
        color: zI
      }, {
        tag: [bo.m.definition(bo.m.name), bo.m.separator],
        color: TI
      }, {
        tag: [bo.m.typeName, bo.m.className, bo.m.number, bo.m.changed, bo.m.annotation, bo.m.modifier, bo.m.self, bo.m.namespace],
        color: yo
      }, {
        tag: [bo.m.operator, bo.m.operatorKeyword, bo.m.url, bo.m.escape, bo.m.regexp, bo.m.link, bo.m.special(bo.m.string)],
        color: Po
      }, {
        tag: [bo.m.meta, bo.m.comment],
        color: oI
      }, {
        tag: bo.m.strong,
        fontWeight: "bold"
      }, {
        tag: bo.m.emphasis,
        fontStyle: "italic"
      }, {
        tag: bo.m.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: bo.m.link,
        color: oI,
        textDecoration: "underline"
      }, {
        tag: bo.m.heading,
        fontWeight: "bold",
        color: No
      }, {
        tag: [bo.m.atom, bo.m.bool, bo.m.special(bo.m.variableName)],
        color: zI
      }, {
        tag: [bo.m.processingInstruction, bo.m.string, bo.m.inserted],
        color: iI
      }, {
        tag: bo.m.invalid,
        color: Vo
      }]),
      cI = [LI, (0, BT.fb)(xI)];
    var KI = XT.i.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class MI {
      constructor(TT, oT) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = oT, this.timeoutMS = oT, this.callbacks.push(TT)
      }
      dD() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var TT = this.callbacks.slice();
          this.callbacks.length = 0, TT.forEach((TT => {
            try {
              TT()
            } catch (oT) {
              console.error("TimeoutLatch callback error:", oT)
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
    class rI {
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
            TT.dD(), TT.isDone && this.remove(TT)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var AI = null,
      gI = WT.b.define(),
      hI = [];

    function wI(TT) {
      var {
        value: oT,
        selection: IT,
        onChange: iT,
        onStatistics: zT,
        onCreateEditor: BT,
        onUpdate: FT,
        extensions: ST = hI,
        autoFocus: DT,
        theme: LT = "light",
        height: xT = null,
        minHeight: cT = null,
        maxHeight: KT = null,
        width: MT = null,
        minWidth: rT = null,
        maxWidth: AT = null,
        placeholder: gT = "",
        editable: hT = !0,
        readOnly: wT = !1,
        indentWithTab: mT = !0,
        basicSetup: eT = !0,
        root: RT,
        initialState: uT
      } = TT, [vT, ET] = (0, kT.useState)(), [fT, CT] = (0, kT.useState)(), [jT, JT] = (0, kT.useState)(), UT = (0, kT.useState)((() => ({
        current: null
      })))[0], aT = (0, kT.useState)((() => ({
        current: null
      })))[0], YT = XT.i.theme({
        "&": {
          height: xT,
          minHeight: cT,
          maxHeight: KT,
          width: MT,
          minWidth: rT,
          maxWidth: AT
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), QT = XT.i.updateListener.of((TT => {
        if (TT.docChanged && "function" === typeof iT && !TT.transactions.some((TT => TT.annotation(gI)))) {
          UT.current ? UT.current.reset() : (UT.current = new MI((() => {
            if (aT.current) {
              var TT = aT.current;
              aT.current = null, TT()
            }
            UT.current = null
          }), 200), ("undefined" === typeof window ? new rI : (AI || (AI = new rI), AI)).add(UT.current));
          var oT = TT.state.doc.toString();
          iT(oT, TT)
        }
        zT && zT((TT => ({
          line: TT.state.doc.lineAt(TT.state.selection.main.from),
          lineCount: TT.state.doc.lines,
          lineBreak: TT.state.lineBreak,
          length: TT.state.doc.length,
          readOnly: TT.state.readOnly,
          tabSize: TT.state.tabSize,
          selection: TT.state.selection,
          selectionAsSingle: TT.state.selection.asSingle().main,
          ec: TT.state.selection.ec,
          selectionCode: TT.state.sliceDoc(TT.state.selection.main.from, TT.state.selection.main.to),
          selections: TT.state.selection.ec.map((oT => TT.state.sliceDoc(oT.from, oT.to))),
          selectedText: TT.state.selection.ec.some((TT => !TT.empty))
        }))(TT))
      })), OT = function(TT) {
        void 0 === TT && (TT = {});
        var {
          indentWithTab: oT = !0,
          editable: IT = !0,
          readOnly: iT = !1,
          theme: zT = "light",
          placeholder: kT = "",
          basicSetup: BT = !0
        } = TT, FT = [];
        switch (oT && FT.unshift(XT.N.of([Zo])), BT && ("boolean" === typeof BT ? FT.unshift(po()) : FT.unshift(po(BT))), kT && FT.unshift((0, XT.Y)(kT)), zT) {
          case "light":
            FT.push(KI);
            break;
          case "dark":
            FT.push(cI);
            break;
          case "none":
            break;
          default:
            FT.push(zT)
        }
        return !1 === IT && FT.push(XT.i.editable.of(!1)), iT && FT.push(WT.o.readOnly.of(!0)), [...FT]
      }({
        theme: LT,
        editable: hT,
        readOnly: wT,
        placeholder: gT,
        indentWithTab: mT,
        basicSetup: eT
      }), HT = [QT, YT, ...OT];
      return FT && "function" === typeof FT && HT.push(XT.i.updateListener.of(FT)), HT = HT.concat(ST), (0, kT.useLayoutEffect)((() => {
        if (vT && !jT) {
          var TT = {
              doc: oT,
              selection: IT,
              extensions: HT
            },
            iT = uT ? WT.o.fromJSON(uT.json, TT, uT.fields) : WT.o.create(TT);
          if (JT(iT), !fT) {
            var zT = new XT.i({
              state: iT,
              parent: vT,
              root: RT
            });
            CT(zT), BT && BT(zT, iT)
          }
        }
        return () => {
          fT && (JT(void 0), CT(void 0))
        }
      }), [vT, jT]), (0, kT.useEffect)((() => {
        TT.container && ET(TT.container)
      }), [TT.container]), (0, kT.useEffect)((() => () => {
        fT && (fT.destroy(), CT(void 0)), UT.current && (UT.current.cancel(), UT.current = null)
      }), [fT]), (0, kT.useEffect)((() => {
        DT && fT && fT.focus()
      }), [DT, fT]), (0, kT.useEffect)((() => {
        fT && fT.dispatch({
          effects: WT.H.reconfigure.of(HT)
        })
      }), [LT, ST, xT, cT, KT, MT, rT, AT, gT, hT, wT, mT, eT, iT, FT]), (0, kT.useEffect)((() => {
        if (void 0 !== oT) {
          var TT = fT ? fT.state.doc.toString() : "";
          if (fT && oT !== TT) {
            var IT = () => {
              fT && oT !== fT.state.doc.toString() && fT.dispatch({
                changes: {
                  from: 0,
                  to: fT.state.doc.toString().length,
                  insert: oT || ""
                },
                annotations: [gI.of(!0)]
              })
            };
            UT.current && !UT.current.isDone ? aT.current = IT : IT()
          }
        }
      }), [oT, fT]), {
        state: jT,
        setState: JT,
        view: fT,
        setView: CT,
        container: vT,
        setContainer: ET
      }
    }
    var mI = IT(1083),
      eI = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      RI = (0, kT.forwardRef)(((TT, oT) => {
        var {
          className: IT,
          value: WT = "",
          selection: XT,
          extensions: BT = [],
          onChange: FT,
          onStatistics: ST,
          onCreateEditor: DT,
          onUpdate: LT,
          autoFocus: xT,
          theme: cT = "light",
          height: KT,
          minHeight: MT,
          maxHeight: rT,
          width: AT,
          minWidth: gT,
          maxWidth: hT,
          basicSetup: wT,
          placeholder: mT,
          indentWithTab: eT,
          editable: RT,
          readOnly: uT,
          root: vT,
          initialState: ET
        } = TT, fT = (0, zT.c)(TT, eI), CT = (0, kT.useRef)(null), {
          state: jT,
          view: JT,
          container: UT,
          setContainer: aT
        } = wI({
          root: vT,
          value: WT,
          autoFocus: xT,
          theme: cT,
          height: KT,
          minHeight: MT,
          maxHeight: rT,
          width: AT,
          minWidth: gT,
          maxWidth: hT,
          basicSetup: wT,
          placeholder: mT,
          indentWithTab: eT,
          editable: RT,
          readOnly: uT,
          selection: XT,
          onChange: FT,
          onStatistics: ST,
          onCreateEditor: DT,
          onUpdate: LT,
          extensions: BT,
          initialState: ET
        });
        (0, kT.useImperativeHandle)(oT, (() => ({
          editor: CT.current,
          state: jT,
          view: JT
        })), [CT, UT, jT, JT]);
        var YT = (0, kT.useCallback)((TT => {
          CT.current = TT, aT(TT)
        }), [aT]);
        if ("string" !== typeof WT) throw new Error("value must be typeof string but got " + typeof WT);
        var QT = "string" === typeof cT ? "cm-theme-" + cT : "cm-theme";
        return (0, mI.jsx)("div", (0, iT.d)({
          ref: YT,
          className: QT + (IT ? " " + IT : "")
        }, fT))
      }));
    RI.displayName = "CodeMirror";
    const uI = RI
  },
  40128: (TT, oT, IT) => {
    function iT() {
      var TT = arguments[0];
      "string" == typeof TT && (TT = document.createElement(TT));
      var oT = 1,
        IT = arguments[1];
      if (IT && "object" == typeof IT && null == IT.nodeType && !Array.isArray(IT)) {
        for (var iT in IT)
          if (Object.prototype.hasOwnProperty.call(IT, iT)) {
            var kT = IT[iT];
            "string" == typeof kT ? TT.setAttribute(iT, kT) : null != kT && (TT[iT] = kT)
          } oT++
      }
      for (; oT < arguments.length; oT++) zT(TT, arguments[oT]);
      return TT
    }

    function zT(TT, oT) {
      if ("string" == typeof oT) TT.appendChild(document.createTextNode(oT));
      else if (null == oT);
      else if (null != oT.nodeType) TT.appendChild(oT);
      else {
        if (!Array.isArray(oT)) throw new RangeError("Unsupported child node: " + oT);
        for (var IT = 0; IT < oT.length; IT++) zT(TT, oT[IT])
      }
    }
    IT.d(oT, {
      d: () => iT
    })
  },
  40123: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => WT
    });
    const iT = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      zT = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      kT = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class WT {
      constructor(TT, oT) {
        this.rules = [];
        let {
          finish: IT
        } = oT || {};

        function iT(TT) {
          return /^@/.test(TT) ? [TT] : TT.split(/,\s*/)
        }

        function zT(TT, oT, kT, WT) {
          let XT = [],
            BT = /^@(\w+)\b/.exec(TT[0]),
            FT = BT && "keyframes" == BT[1];
          if (BT && null == oT) return kT.push(TT[0] + ";");
          for (let IT in oT) {
            let WT = oT[IT];
            if (/&/.test(IT)) zT(IT.split(/,\s*/).map((oT => TT.map((TT => oT.replace(/&/, TT))))).reduce(((TT, oT) => TT.concat(oT))), WT, kT);
            else if (WT && "object" == typeof WT) {
              if (!BT) throw new RangeError("The value of a property (" + IT + ") should be a primitive value.");
              zT(iT(IT), WT, XT, FT)
            } else null != WT && XT.push(IT.replace(/_.*/, "").replace(/[A-Z]/g, (TT => "-" + TT.toLowerCase())) + ": " + WT + ";")
          }(XT.length || FT) && kT.push((!IT || BT || WT ? TT : TT.map(IT)).join(", ") + " {" + XT.join(" ") + "}")
        }
        for (let kT in TT) zT(iT(kT), TT[kT], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let TT = kT[iT] || 1;
        return kT[iT] = TT + 1, "\u037c" + TT.toString(36)
      }
      static mount(TT, oT, IT) {
        let iT = TT[zT],
          kT = IT && IT.nonce;
        iT ? kT && iT.setNonce(kT) : iT = new BT(TT, kT), iT.mount(Array.isArray(oT) ? oT : [oT], TT)
      }
    }
    let XT = new Map;
    class BT {
      constructor(TT, oT) {
        let IT = TT.ownerDocument || TT,
          iT = IT.defaultView;
        if (!TT.head && TT.adoptedStyleSheets && iT.CSSStyleSheet) {
          let oT = XT.get(IT);
          if (oT) return TT[zT] = oT;
          this.sheet = new iT.CSSStyleSheet, XT.set(IT, this)
        } else this.styleTag = IT.createElement("style"), oT && this.styleTag.setAttribute("nonce", oT);
        this.modules = [], TT[zT] = this
      }
      mount(TT, oT) {
        let IT = this.sheet,
          iT = 0,
          zT = 0;
        for (let kT = 0; kT < TT.length; kT++) {
          let oT = TT[kT],
            WT = this.modules.indexOf(oT);
          if (WT < zT && WT > -1 && (this.modules.splice(WT, 1), zT--, WT = -1), -1 == WT) {
            if (this.modules.splice(zT++, 0, oT), IT)
              for (let TT = 0; TT < oT.rules.length; TT++) IT.insertRule(oT.rules[TT], iT++)
          } else {
            for (; zT < WT;) iT += this.modules[zT++].rules.length;
            iT += oT.rules.length, zT++
          }
        }
        if (IT) oT.adoptedStyleSheets.indexOf(this.sheet) < 0 && (oT.adoptedStyleSheets = [this.sheet, ...oT.adoptedStyleSheets]);
        else {
          let TT = "";
          for (let oT = 0; oT < this.modules.length; oT++) TT += this.modules[oT].getRules() + "\n";
          this.styleTag.textContent = TT;
          let IT = oT.head || oT;
          this.styleTag.parentNode != IT && IT.insertBefore(this.styleTag, IT.firstChild)
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