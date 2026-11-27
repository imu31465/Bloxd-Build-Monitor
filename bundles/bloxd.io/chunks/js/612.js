export const id = 612;
export const ids = [612];
export const modules = {
  53501: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => ei,
      h: () => yi,
      j: () => ki,
      m: () => cW,
      q: () => vi,
      u: () => wW,
      y: () => xi
    });
    var mW = OW(53507),
      EW = OW(53511),
      NW = OW(53522);
    class PW {
      constructor(WW, iW, OW, mW) {
        this.state = WW, this.pos = iW, this.explicit = OW, this.view = mW, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(WW) {
        let iW = (0, NW.hb)(this.state).resolveInner(this.pos, -1);
        for (; iW && WW.indexOf(iW.name) < 0;) iW = iW.parent;
        return iW ? {
          from: iW.from,
          to: this.pos,
          text: this.state.sliceDoc(iW.from, this.pos),
          type: iW.type
        } : null
      }
      matchBefore(WW) {
        let iW = this.state.doc.lineAt(this.pos),
          OW = Math.max(iW.from, this.pos - 250),
          mW = iW.text.slice(OW - iW.from, this.pos - iW.from),
          EW = mW.search(xW(WW, !1));
        return EW < 0 ? null : {
          from: OW + EW,
          to: this.pos,
          text: mW.slice(EW)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(WW, iW, OW) {
        "abort" == WW && this.abortListeners && (this.abortListeners.push(iW), OW && OW.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function LW(WW) {
      let iW = Object.keys(WW).join(""),
        OW = /\w/.test(iW);
      return OW && (iW = iW.replace(/\w/g, "")), `[${OW?"\\w":""}${iW.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function cW(WW) {
      let iW = WW.map((WW => "string" == typeof WW ? {
          label: WW
        } : WW)),
        [OW, mW] = iW.every((WW => /^\w+$/.test(WW.label))) ? [/\w*$/, /\w+$/] : function(WW) {
          let iW = Object.create(null),
            OW = Object.create(null);
          for (let {
              label: EW
            }
            of WW) {
            iW[EW[0]] = !0;
            for (let WW = 1; WW < EW.length; WW++) OW[EW[WW]] = !0
          }
          let mW = LW(iW) + LW(OW) + "*$";
          return [new RegExp("^" + mW), new RegExp(mW)]
        }(iW);
      return WW => {
        let EW = WW.matchBefore(mW);
        return EW || WW.explicit ? {
          from: EW ? EW.from : WW.pos,
          options: iW,
          validFor: OW
        } : null
      }
    }

    function wW(WW, iW) {
      return OW => {
        for (let iW = (0, NW.hb)(OW.state).resolveInner(OW.pos, -1); iW; iW = iW.parent) {
          if (WW.indexOf(iW.name) > -1) return null;
          if (iW.type.isTop) break
        }
        return iW(OW)
      }
    }
    class tW {
      constructor(WW, iW, OW, mW) {
        this.completion = WW, this.source = iW, this.match = OW, this.score = mW
      }
    }

    function ZW(WW) {
      return WW.selection.main.from
    }

    function xW(WW, iW) {
      var OW;
      let {
        source: mW
      } = WW, EW = iW && "^" != mW[0], NW = "$" != mW[mW.length - 1];
      return EW || NW ? new RegExp(`${EW?"^":""}(?:${mW})${NW?"$":""}`, null !== (OW = WW.flags) && void 0 !== OW ? OW : WW.ignoreCase ? "i" : "") : WW
    }
    const lW = mW.d.define();

    function AW(WW, iW, OW, EW) {
      let {
        main: NW
      } = WW.selection, PW = OW - NW.from, LW = EW - NW.from;
      return {
        ...WW.changeByRange((cW => {
          if (cW != NW && OW != EW && WW.sliceDoc(cW.from + PW, cW.from + LW) != WW.sliceDoc(OW, EW)) return {
            range: cW
          };
          let wW = WW.toText(iW);
          return {
            changes: {
              from: cW.from + PW,
              to: EW == NW.from ? cW.to : cW.from + LW,
              insert: wW
            },
            range: mW.l.cursor(cW.from + PW + wW.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const bW = new WeakMap;

    function jW(WW) {
      if (!Array.isArray(WW)) return WW;
      let iW = bW.get(WW);
      return iW || bW.set(WW, iW = cW(WW)), iW
    }
    const UW = mW.H.define(),
      kW = mW.H.define();
    class sW {
      constructor(WW) {
        this.pattern = WW, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let iW = 0; iW < WW.length;) {
          let OW = (0, mW.Q)(WW, iW),
            EW = (0, mW.R)(OW);
          this.chars.push(OW);
          let NW = WW.slice(iW, iW + EW),
            PW = NW.toUpperCase();
          this.folded.push((0, mW.Q)(PW == NW ? NW.toLowerCase() : PW, 0)), iW += EW
        }
        this.astral = WW.length != this.chars.length
      }
      ret(WW, iW) {
        return this.score = WW, this.matched = iW, this
      }
      match(WW) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (WW.length < this.pattern.length) return null;
        let {
          chars: iW,
          folded: OW,
          any: EW,
          precise: NW,
          byWord: PW
        } = this;
        if (1 == iW.length) {
          let EW = (0, mW.Q)(WW, 0),
            NW = (0, mW.R)(EW),
            PW = NW == WW.length ? 0 : -100;
          if (EW == iW[0]);
          else {
            if (EW != OW[0]) return null;
            PW += -200
          }
          return this.ret(PW, [0, NW])
        }
        let LW = WW.indexOf(this.pattern);
        if (0 == LW) return this.ret(WW.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let cW = iW.length,
          wW = 0;
        if (LW < 0) {
          for (let NW = 0, PW = Math.min(WW.length, 200); NW < PW && wW < cW;) {
            let PW = (0, mW.Q)(WW, NW);
            PW != iW[wW] && PW != OW[wW] || (EW[wW++] = NW), NW += (0, mW.R)(PW)
          }
          if (wW < cW) return null
        }
        let tW = 0,
          ZW = 0,
          xW = !1,
          lW = 0,
          AW = -1,
          bW = -1,
          jW = /[a-z]/.test(WW),
          UW = !0;
        for (let kW = 0, sW = Math.min(WW.length, 200), MW = 0; kW < sW && ZW < cW;) {
          let EW = (0, mW.Q)(WW, kW);
          LW < 0 && (tW < cW && EW == iW[tW] && (NW[tW++] = kW), lW < cW && (EW == iW[lW] || EW == OW[lW] ? (0 == lW && (AW = kW), bW = kW + 1, lW++) : lW = 0));
          let wW, sW = EW < 255 ? EW >= 48 && EW <= 57 || EW >= 97 && EW <= 122 ? 2 : EW >= 65 && EW <= 90 ? 1 : 0 : (wW = (0, mW.cb)(EW)) != wW.toLowerCase() ? 1 : wW != wW.toUpperCase() ? 2 : 0;
          (!kW || 1 == sW && jW || 0 == MW && 0 != sW) && (iW[ZW] == EW || OW[ZW] == EW && (xW = !0) ? PW[ZW++] = kW : PW.length && (UW = !1)), MW = sW, kW += (0, mW.R)(EW)
        }
        return ZW == cW && 0 == PW[0] && UW ? this.result((xW ? -200 : 0) - 100, PW, WW) : lW == cW && 0 == AW ? this.ret(-200 - WW.length + (bW == WW.length ? 0 : -100), [0, bW]) : LW > -1 ? this.ret(-700 - WW.length, [LW, LW + this.pattern.length]) : lW == cW ? this.ret(-900 - WW.length, [AW, bW]) : ZW == cW ? this.result((xW ? -200 : 0) - 100 - 700 + (UW ? 0 : -1100), PW, WW) : 2 == iW.length ? null : this.result((EW[0] ? -700 : 0) - 200 - 1100, EW, WW)
      }
      result(WW, iW, OW) {
        let EW = [],
          NW = 0;
        for (let PW of iW) {
          let WW = PW + (this.astral ? (0, mW.R)((0, mW.Q)(OW, PW)) : 1);
          NW && EW[NW - 1] == PW ? EW[NW - 1] = WW : (EW[NW++] = PW, EW[NW++] = WW)
        }
        return this.ret(WW - OW.length, EW)
      }
    }
    class MW {
      constructor(WW) {
        this.pattern = WW, this.matched = [], this.score = 0, this.folded = WW.toLowerCase()
      }
      match(WW) {
        if (WW.length < this.pattern.length) return null;
        let iW = WW.slice(0, this.pattern.length),
          OW = iW == this.pattern ? 0 : iW.toLowerCase() == this.folded ? -200 : null;
        return null == OW ? null : (this.matched = [0, iW.length], this.score = OW + (WW.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const KW = mW.p.define({
      combine: WW => (0, mW.U)(WW, {
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
        positionInfo: YW,
        filterStrict: !1,
        compareCompletions: (WW, iW) => (WW.sortText || WW.label).localeCompare(iW.sortText || iW.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (WW, iW) => WW && iW,
        closeOnBlur: (WW, iW) => WW && iW,
        icons: (WW, iW) => WW && iW,
        tooltipClass: (WW, iW) => OW => SW(WW(OW), iW(OW)),
        optionClass: (WW, iW) => OW => SW(WW(OW), iW(OW)),
        addToOptions: (WW, iW) => WW.concat(iW),
        filterStrict: (WW, iW) => WW || iW
      })
    });

    function SW(WW, iW) {
      return WW ? iW ? WW + " " + iW : WW : iW
    }

    function YW(WW, iW, OW, mW, NW, PW) {
      let LW, cW, wW = WW.textDirection == EW.d.RTL,
        tW = wW,
        ZW = !1,
        xW = "top",
        lW = iW.left - NW.left,
        AW = NW.right - iW.right,
        bW = mW.right - mW.left,
        jW = mW.bottom - mW.top;
      if (tW && lW < Math.min(bW, AW) ? tW = !1 : !tW && AW < Math.min(bW, lW) && (tW = !0), bW <= (tW ? lW : AW)) LW = Math.max(NW.top, Math.min(OW.top, NW.bottom - jW)) - iW.top, cW = Math.min(400, tW ? lW : AW);
      else {
        ZW = !0, cW = Math.min(400, (wW ? iW.right : NW.right - iW.left) - 30);
        let WW = NW.bottom - iW.bottom;
        WW >= jW || WW > iW.top ? LW = OW.bottom - iW.top : (xW = "bottom", LW = iW.bottom - OW.top)
      }
      return {
        style: `${xW}: ${LW/((iW.bottom-iW.top)/PW.offsetHeight)}px; max-width: ${cW/((iW.right-iW.left)/PW.offsetWidth)}px`,
        class: "cm-completionInfo-" + (ZW ? wW ? "left-narrow" : "right-narrow" : tW ? "left" : "right")
      }
    }
    const yW = mW.H.define();

    function TW(WW, iW, OW) {
      if (WW <= OW) return {
        from: 0,
        to: WW
      };
      if (iW < 0 && (iW = 0), iW <= WW >> 1) {
        let WW = Math.floor(iW / OW);
        return {
          from: WW * OW,
          to: (WW + 1) * OW
        }
      }
      let mW = Math.floor((WW - iW) / OW);
      return {
        from: WW - (mW + 1) * OW,
        to: WW - mW * OW
      }
    }
    class JW {
      constructor(WW, iW, OW) {
        this.view = WW, this.stateField = iW, this.applyCompletion = OW, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: WW => this.placeInfo(WW),
          key: this
        }, this.space = null, this.currentClass = "";
        let mW = WW.state.field(iW),
          {
            options: EW,
            selected: NW
          } = mW.open,
          PW = WW.state.facet(KW);
        this.optionContent = function(WW) {
          let iW = WW.addToOptions.slice();
          return WW.icons && iW.push({
            render(WW) {
              let iW = document.createElement("div");
              return iW.classList.add("cm-completionIcon"), WW.type && iW.classList.add(...WW.type.split(/\s+/g).map((WW => "cm-completionIcon-" + WW))), iW.setAttribute("aria-hidden", "true"), iW
            },
            position: 20
          }), iW.push({
            render(WW, iW, OW, mW) {
              let EW = document.createElement("span");
              EW.className = "cm-completionLabel";
              let NW = WW.displayLabel || WW.label,
                PW = 0;
              for (let LW = 0; LW < mW.length;) {
                let WW = mW[LW++],
                  iW = mW[LW++];
                WW > PW && EW.appendChild(document.createTextNode(NW.slice(PW, WW)));
                let OW = EW.appendChild(document.createElement("span"));
                OW.appendChild(document.createTextNode(NW.slice(WW, iW))), OW.className = "cm-completionMatchedText", PW = iW
              }
              return PW < NW.length && EW.appendChild(document.createTextNode(NW.slice(PW))), EW
            },
            position: 50
          }, {
            render(WW) {
              if (!WW.detail) return null;
              let iW = document.createElement("span");
              return iW.className = "cm-completionDetail", iW.textContent = WW.detail, iW
            },
            position: 80
          }), iW.sort(((WW, iW) => WW.position - iW.position)).map((WW => WW.render))
        }(PW), this.optionClass = PW.optionClass, this.tooltipClass = PW.tooltipClass, this.range = TW(EW.length, NW, PW.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(WW.state), this.dom.addEventListener("mousedown", (OW => {
          let {
            options: mW
          } = WW.state.field(iW).open;
          for (let iW, EW = OW.target; EW && EW != this.dom; EW = EW.parentNode)
            if ("LI" == EW.nodeName && (iW = /-(\d+)$/.exec(EW.id)) && +iW[1] < mW.length) return this.applyCompletion(WW, mW[+iW[1]]), void OW.preventDefault();
          if (OW.target == this.list) {
            let iW = this.list.classList.contains("cm-completionListIncompleteTop") && OW.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && OW.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != iW && (WW.dispatch({
              effects: yW.of(iW)
            }), OW.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (iW => {
          let OW = WW.state.field(this.stateField, !1);
          OW && OW.tooltip && WW.state.facet(KW).closeOnBlur && iW.relatedTarget != WW.contentDOM && WW.dispatch({
            effects: kW.of(null)
          })
        })), this.showOptions(EW, mW.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(WW, iW) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(WW, iW, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(WW) {
        var iW;
        let OW = WW.state.field(this.stateField),
          mW = WW.startState.field(this.stateField);
        if (this.updateTooltipClass(WW.state), OW != mW) {
          let {
            options: EW,
            selected: NW,
            disabled: PW
          } = OW.open;
          mW.open && mW.open.options == EW || (this.range = TW(EW.length, NW, WW.state.facet(KW).maxRenderedOptions), this.showOptions(EW, OW.id)), this.updateSel(), PW != (null === (iW = mW.open) || void 0 === iW ? void 0 : iW.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!PW)
        }
      }
      updateTooltipClass(WW) {
        let iW = this.tooltipClass(WW);
        if (iW != this.currentClass) {
          for (let WW of this.currentClass.split(" ")) WW && this.dom.classList.remove(WW);
          for (let WW of iW.split(" ")) WW && this.dom.classList.add(WW);
          this.currentClass = iW
        }
      }
      positioned(WW) {
        this.space = WW, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let WW = this.view.state.field(this.stateField),
          iW = WW.open;
        (iW.selected > -1 && iW.selected < this.range.from || iW.selected >= this.range.to) && (this.range = TW(iW.options.length, iW.selected, this.view.state.facet(KW).maxRenderedOptions), this.showOptions(iW.options, WW.id));
        let OW = this.updateSelectedOption(iW.selected);
        if (OW) {
          this.destroyInfo();
          let {
            completion: mW
          } = iW.options[iW.selected], {
            info: NW
          } = mW;
          if (!NW) return;
          let PW = "string" === typeof NW ? document.createTextNode(NW) : NW(mW);
          if (!PW) return;
          "then" in PW ? PW.then((iW => {
            iW && this.view.state.field(this.stateField, !1) == WW && this.addInfoPane(iW, mW)
          })).catch((WW => (0, EW.L)(this.view.state, WW, "completion info"))) : (this.addInfoPane(PW, mW), OW.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(WW, iW) {
        this.destroyInfo();
        let OW = this.info = document.createElement("div");
        if (OW.className = "cm-tooltip cm-completionInfo", OW.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != WW.nodeType) OW.appendChild(WW), this.infoDestroy = null;
        else {
          let {
            dom: iW,
            destroy: mW
          } = WW;
          OW.appendChild(iW), this.infoDestroy = mW || null
        }
        this.dom.appendChild(OW), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(WW) {
        let iW = null;
        for (let OW = this.list.firstChild, mW = this.range.from; OW; OW = OW.nextSibling, mW++) "LI" == OW.nodeName && OW.id ? mW == WW ? OW.hasAttribute("aria-selected") || (OW.setAttribute("aria-selected", "true"), iW = OW) : OW.hasAttribute("aria-selected") && (OW.removeAttribute("aria-selected"), OW.removeAttribute("aria-describedby")) : mW--;
        return iW && function(WW, iW) {
          let OW = WW.getBoundingClientRect(),
            mW = iW.getBoundingClientRect(),
            EW = OW.height / WW.offsetHeight;
          mW.top < OW.top ? WW.scrollTop -= (OW.top - mW.top) / EW : mW.bottom > OW.bottom && (WW.scrollTop += (mW.bottom - OW.bottom) / EW)
        }(this.list, iW), iW
      }
      measureInfo() {
        let WW = this.dom.querySelector("[aria-selected]");
        if (!WW || !this.info) return null;
        let iW = this.dom.getBoundingClientRect(),
          OW = this.info.getBoundingClientRect(),
          mW = WW.getBoundingClientRect(),
          EW = this.space;
        if (!EW) {
          let WW = this.dom.ownerDocument.documentElement;
          EW = {
            left: 0,
            top: 0,
            right: WW.clientWidth,
            bottom: WW.clientHeight
          }
        }
        return mW.top > Math.min(EW.bottom, iW.bottom) - 10 || mW.bottom < Math.max(EW.top, iW.top) + 10 ? null : this.view.state.facet(KW).positionInfo(this.view, iW, mW, OW, EW, this.dom)
      }
      placeInfo(WW) {
        this.info && (WW ? (WW.style && (this.info.style.cssText = WW.style), this.info.className = "cm-tooltip cm-completionInfo " + (WW.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(WW, iW, OW) {
        const mW = document.createElement("ul");
        mW.id = iW, mW.setAttribute("role", "listbox"), mW.setAttribute("aria-expanded", "true"), mW.setAttribute("aria-label", this.view.state.phrase("Completions")), mW.addEventListener("mousedown", (WW => {
          WW.target == mW && WW.preventDefault()
        }));
        let EW = null;
        for (let NW = OW.from; NW < OW.to; NW++) {
          let {
            completion: PW,
            match: LW
          } = WW[NW], {
            section: cW
          } = PW;
          if (cW) {
            let WW = "string" == typeof cW ? cW : cW.name;
            if (WW != EW && (NW > OW.from || 0 == OW.from))
              if (EW = WW, "string" != typeof cW && cW.header) mW.appendChild(cW.header(cW));
              else {
                mW.appendChild(document.createElement("completion-section")).textContent = WW
              }
          }
          const wW = mW.appendChild(document.createElement("li"));
          wW.id = iW + "-" + NW, wW.setAttribute("role", "option");
          let tW = this.optionClass(PW);
          tW && (wW.className = tW);
          for (let WW of this.optionContent) {
            let iW = WW(PW, this.view.state, this.view, LW);
            iW && wW.appendChild(iW)
          }
        }
        return OW.from && mW.classList.add("cm-completionListIncompleteTop"), OW.to < WW.length && mW.classList.add("cm-completionListIncompleteBottom"), mW
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function hW(WW, iW) {
      return OW => new JW(OW, WW, iW)
    }

    function HW(WW) {
      return 100 * (WW.boost || 0) + (WW.apply ? 10 : 0) + (WW.info ? 5 : 0) + (WW.type ? 1 : 0)
    }
    class nW {
      constructor(WW, iW, OW, mW, EW, NW) {
        this.options = WW, this.attrs = iW, this.tooltip = OW, this.timestamp = mW, this.selected = EW, this.disabled = NW
      }
      setSelected(WW, iW) {
        return WW == this.selected || WW >= this.options.length ? this : new nW(this.options, eW(iW, WW), this.tooltip, this.timestamp, WW, this.disabled)
      }
      static build(WW, iW, OW, mW, EW, NW) {
        if (mW && !NW && WW.some((WW => WW.isPending))) return mW.setDisabled();
        let PW = function(WW, iW) {
          let OW = [],
            mW = null,
            EW = null,
            NW = WW => {
              OW.push(WW);
              let {
                section: iW
              } = WW.completion;
              if (iW) {
                mW || (mW = []);
                let WW = "string" == typeof iW ? iW : iW.name;
                mW.some((iW => iW.name == WW)) || mW.push("string" == typeof iW ? {
                  name: WW
                } : iW)
              }
            },
            PW = iW.facet(KW);
          for (let ZW of WW)
            if (ZW.hasResult()) {
              let WW = ZW.result.getMatch;
              if (!1 === ZW.result.filter)
                for (let iW of ZW.result.options) NW(new tW(iW, ZW.source, WW ? WW(iW) : [], 1e9 - OW.length));
              else {
                let OW, mW = iW.sliceDoc(ZW.from, ZW.to),
                  LW = PW.filterStrict ? new MW(mW) : new sW(mW);
                for (let iW of ZW.result.options)
                  if (OW = LW.match(iW.label)) {
                    let mW = iW.displayLabel ? WW ? WW(iW, OW.matched) : [] : OW.matched,
                      PW = OW.score + (iW.boost || 0);
                    if (NW(new tW(iW, ZW.source, mW, PW)), "object" == typeof iW.section && "dynamic" === iW.section.rank) {
                      let {
                        name: WW
                      } = iW.section;
                      EW || (EW = Object.create(null)), EW[WW] = Math.max(PW, EW[WW] || -1e9)
                    }
                  }
              }
            } if (mW) {
            let WW = Object.create(null),
              iW = 0,
              NW = (WW, iW) => ("dynamic" === WW.rank && "dynamic" === iW.rank ? EW[iW.name] - EW[WW.name] : 0) || ("number" == typeof WW.rank ? WW.rank : 1e9) - ("number" == typeof iW.rank ? iW.rank : 1e9) || (WW.name < iW.name ? -1 : 1);
            for (let OW of mW.sort(NW)) iW -= 1e5, WW[OW.name] = iW;
            for (let mW of OW) {
              let {
                section: iW
              } = mW.completion;
              iW && (mW.score += WW["string" == typeof iW ? iW : iW.name])
            }
          }
          let LW = [],
            cW = null,
            wW = PW.compareCompletions;
          for (let tW of OW.sort(((WW, iW) => iW.score - WW.score || wW(WW.completion, iW.completion)))) {
            let WW = tW.completion;
            !cW || cW.label != WW.label || cW.detail != WW.detail || null != cW.type && null != WW.type && cW.type != WW.type || cW.apply != WW.apply || cW.boost != WW.boost ? LW.push(tW) : HW(tW.completion) > HW(cW) && (LW[LW.length - 1] = tW), cW = tW.completion
          }
          return LW
        }(WW, iW);
        if (!PW.length) return mW && WW.some((WW => WW.isPending)) ? mW.setDisabled() : null;
        let LW = iW.facet(KW).selectOnOpen ? 0 : -1;
        if (mW && mW.selected != LW && -1 != mW.selected) {
          let WW = mW.options[mW.selected].completion;
          for (let iW = 0; iW < PW.length; iW++)
            if (PW[iW].completion == WW) {
              LW = iW;
              break
            }
        }
        return new nW(PW, eW(OW, LW), {
          pos: WW.reduce(((WW, iW) => iW.hasResult() ? Math.min(WW, iW.from) : WW), 1e8),
          create: XW,
          above: EW.aboveCursor
        }, mW ? mW.timestamp : Date.now(), LW, !1)
      }
      map(WW) {
        return new nW(this.options, this.attrs, {
          ...this.tooltip,
          pos: WW.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new nW(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class uW {
      constructor(WW, iW, OW) {
        this.active = WW, this.id = iW, this.open = OW
      }
      static start() {
        return new uW(vW, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(WW) {
        let {
          state: iW
        } = WW, OW = iW.facet(KW), mW = (OW.override || iW.languageDataAt("autocomplete", ZW(iW)).map(jW)).map((iW => (this.active.find((WW => WW.source == iW)) || new DW(iW, this.active.some((WW => 0 != WW.state)) ? 1 : 0)).update(WW, OW)));
        mW.length == this.active.length && mW.every(((WW, iW) => WW == this.active[iW])) && (mW = this.active);
        let EW = this.open,
          NW = WW.effects.some((WW => WW.is(pW)));
        EW && WW.docChanged && (EW = EW.map(WW.changes)), WW.selection || mW.some((iW => iW.hasResult() && WW.changes.touchesRange(iW.from, iW.to))) || ! function(WW, iW) {
          if (WW == iW) return !0;
          for (let OW = 0, mW = 0;;) {
            for (; OW < WW.length && !WW[OW].hasResult();) OW++;
            for (; mW < iW.length && !iW[mW].hasResult();) mW++;
            let EW = OW == WW.length,
              NW = mW == iW.length;
            if (EW || NW) return EW == NW;
            if (WW[OW++].result != iW[mW++].result) return !1
          }
        }(mW, this.active) || NW ? EW = nW.build(mW, iW, this.id, EW, OW, NW) : EW && EW.disabled && !mW.some((WW => WW.isPending)) && (EW = null), !EW && mW.every((WW => !WW.isPending)) && mW.some((WW => WW.hasResult())) && (mW = mW.map((WW => WW.hasResult() ? new DW(WW.source, 0) : WW)));
        for (let PW of WW.effects) PW.is(yW) && (EW = EW && EW.setSelected(PW.value, this.id));
        return mW == this.active && EW == this.open ? this : new uW(mW, this.id, EW)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? oW : dW
      }
    }
    const oW = {
        "aria-autocomplete": "list"
      },
      dW = {};

    function eW(WW, iW) {
      let OW = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": WW
      };
      return iW > -1 && (OW["aria-activedescendant"] = WW + "-" + iW), OW
    }
    const vW = [];

    function gW(WW, iW) {
      if (WW.isUserEvent("input.complete")) {
        let OW = WW.annotation(lW);
        if (OW && iW.activateOnCompletion(OW)) return 12
      }
      let OW = WW.isUserEvent("input.type");
      return OW && iW.activateOnTyping ? 5 : OW ? 1 : WW.isUserEvent("delete.backward") ? 2 : WW.selection ? 8 : WW.docChanged ? 16 : 0
    }
    class DW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = WW, this.state = iW, this.explicit = OW
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(WW, iW) {
        let OW = gW(WW, iW),
          mW = this;
        (8 & OW || 16 & OW && this.touches(WW)) && (mW = new DW(mW.source, 0)), 4 & OW && 0 == mW.state && (mW = new DW(this.source, 1)), mW = mW.updateFor(WW, OW);
        for (let EW of WW.effects)
          if (EW.is(UW)) mW = new DW(mW.source, 1, EW.value);
          else if (EW.is(kW)) mW = new DW(mW.source, 0);
        else if (EW.is(pW))
          for (let WW of EW.value) WW.source == mW.source && (mW = WW);
        return mW
      }
      updateFor(WW, iW) {
        return this.map(WW.changes)
      }
      map(WW) {
        return this
      }
      touches(WW) {
        return WW.changes.touchesRange(ZW(WW.state))
      }
    }
    class VW extends DW {
      constructor(WW, iW, OW, mW, EW, NW) {
        super(WW, 3, iW), this.limit = OW, this.result = mW, this.from = EW, this.to = NW
      }
      hasResult() {
        return !0
      }
      updateFor(WW, iW) {
        var OW;
        if (!(3 & iW)) return this.map(WW.changes);
        let mW = this.result;
        mW.map && !WW.changes.empty && (mW = mW.map(mW, WW.changes));
        let EW = WW.changes.mapPos(this.from),
          NW = WW.changes.mapPos(this.to, 1),
          LW = ZW(WW.state);
        if (LW > NW || !mW || 2 & iW && (ZW(WW.startState) == this.from || LW < this.limit)) return new DW(this.source, 4 & iW ? 1 : 0);
        let cW = WW.changes.mapPos(this.limit);
        return function(WW, iW, OW, mW) {
          if (!WW) return !1;
          let EW = iW.sliceDoc(OW, mW);
          return "function" == typeof WW ? WW(EW, OW, mW, iW) : xW(WW, !0).test(EW)
        }(mW.validFor, WW.state, EW, NW) ? new VW(this.source, this.explicit, cW, mW, EW, NW) : mW.update && (mW = mW.update(mW, EW, NW, new PW(WW.state, LW, !1))) ? new VW(this.source, this.explicit, cW, mW, mW.from, null !== (OW = mW.to) && void 0 !== OW ? OW : ZW(WW.state)) : new DW(this.source, 1, this.explicit)
      }
      map(WW) {
        if (WW.empty) return this;
        return (this.result.map ? this.result.map(this.result, WW) : this.result) ? new VW(this.source, this.explicit, WW.mapPos(this.limit), this.result, WW.mapPos(this.from), WW.mapPos(this.to, 1)) : new DW(this.source, 0)
      }
      touches(WW) {
        return WW.changes.touchesRange(this.from, this.to)
      }
    }
    const pW = mW.H.define({
        map: (WW, iW) => WW.map((WW => WW.map(iW)))
      }),
      fW = mW.L.define({
        create: () => uW.start(),
        update: (WW, iW) => WW.update(iW),
        provide: WW => [EW._.from(WW, (WW => WW.tooltip)), EW.e.contentAttributes.from(WW, (WW => WW.attrs))]
      });

    function CW(WW, iW) {
      const OW = iW.completion.apply || iW.completion.label;
      let mW = WW.state.field(fW).active.find((WW => WW.source == iW.source));
      return mW instanceof VW && ("string" == typeof OW ? WW.dispatch({
        ...AW(WW.state, OW, mW.from, mW.to),
        annotations: lW.of(iW.completion)
      }) : OW(WW, iW.completion, mW.from, mW.to), !0)
    }
    const XW = hW(fW, CW);

    function BW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return OW => {
        let mW = OW.state.field(fW, !1);
        if (!mW || !mW.open || mW.open.disabled || Date.now() - mW.open.timestamp < OW.state.facet(KW).interactionDelay) return !1;
        let NW, PW = 1;
        "page" == iW && (NW = (0, EW.u)(OW, mW.open.tooltip)) && (PW = Math.max(2, Math.floor(NW.dom.offsetHeight / NW.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: LW
        } = mW.open.options, cW = mW.open.selected > -1 ? mW.open.selected + PW * (WW ? 1 : -1) : WW ? 0 : LW - 1;
        return cW < 0 ? cW = "page" == iW ? 0 : LW - 1 : cW >= LW && (cW = "page" == iW ? LW - 1 : 0), OW.dispatch({
          effects: yW.of(cW)
        }), !0
      }
    }
    const qW = WW => !!WW.state.field(fW, !1) && (WW.dispatch({
      effects: UW.of(!0)
    }), !0);
    class RW {
      constructor(WW, iW) {
        this.active = WW, this.context = iW, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const GW = EW.i.fromClass(class {
        constructor(WW) {
          this.view = WW, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let iW of WW.state.field(fW).active) iW.isPending && this.startQuery(iW)
        }
        update(WW) {
          let iW = WW.state.field(fW),
            OW = WW.state.facet(KW);
          if (!WW.selectionSet && !WW.docChanged && WW.startState.field(fW) == iW) return;
          let mW = WW.transactions.some((WW => {
            let iW = gW(WW, OW);
            return 8 & iW || (WW.selection || WW.docChanged) && !(3 & iW)
          }));
          for (let LW = 0; LW < this.running.length; LW++) {
            let iW = this.running[LW];
            if (mW || iW.context.abortOnDocChange && WW.docChanged || iW.updates.length + WW.transactions.length > 50 && Date.now() - iW.time > 1e3) {
              for (let WW of iW.context.abortListeners) try {
                WW()
              } catch (PW) {
                (0, EW.L)(this.view.state, PW)
              }
              iW.context.abortListeners = null, this.running.splice(LW--, 1)
            } else iW.updates.push(...WW.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), WW.transactions.some((WW => WW.effects.some((WW => WW.is(UW))))) && (this.pendingStart = !0);
          let NW = this.pendingStart ? 50 : OW.activateOnTypingDelay;
          if (this.debounceUpdate = iW.active.some((WW => WW.isPending && !this.running.some((iW => iW.active.source == WW.source)))) ? setTimeout((() => this.startUpdate()), NW) : -1, 0 != this.composing)
            for (let EW of WW.transactions) EW.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && EW.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: WW
          } = this.view, iW = WW.field(fW);
          for (let OW of iW.active) OW.isPending && !this.running.some((WW => WW.active.source == OW.source)) && this.startQuery(OW);
          this.running.length && iW.open && iW.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(KW).updateSyncTime))
        }
        startQuery(WW) {
          let {
            state: iW
          } = this.view, OW = ZW(iW), mW = new PW(iW, OW, WW.explicit, this.view), NW = new RW(WW, mW);
          this.running.push(NW), Promise.resolve(WW.source(mW)).then((WW => {
            NW.context.aborted || (NW.done = WW || null, this.scheduleAccept())
          }), (WW => {
            this.view.dispatch({
              effects: kW.of(null)
            }), (0, EW.L)(this.view.state, WW)
          }))
        }
        scheduleAccept() {
          this.running.every((WW => void 0 !== WW.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(KW).updateSyncTime))
        }
        accept() {
          var WW;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let iW = [],
            OW = this.view.state.facet(KW),
            mW = this.view.state.field(fW);
          for (let EW = 0; EW < this.running.length; EW++) {
            let NW = this.running[EW];
            if (void 0 === NW.done) continue;
            if (this.running.splice(EW--, 1), NW.done) {
              let mW = ZW(NW.updates.length ? NW.updates[0].startState : this.view.state),
                EW = Math.min(mW, NW.done.from + (NW.active.explicit ? 0 : 1)),
                PW = new VW(NW.active.source, NW.active.explicit, EW, NW.done, NW.done.from, null !== (WW = NW.done.to) && void 0 !== WW ? WW : mW);
              for (let WW of NW.updates) PW = PW.update(WW, OW);
              if (PW.hasResult()) {
                iW.push(PW);
                continue
              }
            }
            let PW = mW.active.find((WW => WW.source == NW.active.source));
            if (PW && PW.isPending)
              if (null == NW.done) {
                let WW = new DW(NW.active.source, 0);
                for (let iW of NW.updates) WW = WW.update(iW, OW);
                WW.isPending || iW.push(WW)
              } else this.startQuery(PW)
          }(iW.length || mW.open && mW.open.disabled) && this.view.dispatch({
            effects: pW.of(iW)
          })
        }
      }, {
        eventHandlers: {
          blur(WW) {
            let iW = this.view.state.field(fW, !1);
            if (iW && iW.tooltip && this.view.state.facet(KW).closeOnBlur) {
              let OW = iW.open && (0, EW.u)(this.view, iW.open.tooltip);
              OW && OW.dom.contains(WW.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: kW.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: UW.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      IW = "object" == typeof navigator && /Win/.test(navigator.platform),
      aW = mW.w.highest(EW.e.domEventHandlers({
        keydown(WW, iW) {
          let OW = iW.state.field(fW, !1);
          if (!OW || !OW.open || OW.open.disabled || OW.open.selected < 0 || WW.key.length > 1 || WW.ctrlKey && (!IW || !WW.altKey) || WW.metaKey) return !1;
          let mW = OW.open.options[OW.open.selected],
            EW = OW.active.find((WW => WW.source == mW.source)),
            NW = mW.completion.commitCharacters || EW.result.commitCharacters;
          return NW && NW.indexOf(WW.key) > -1 && CW(iW, mW), !1
        }
      })),
      rW = EW.e.baseTheme({
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
    class zW {
      constructor(WW, iW, OW, mW) {
        this.field = WW, this.line = iW, this.from = OW, this.to = mW
      }
    }
    class FW {
      constructor(WW, iW, OW) {
        this.field = WW, this.from = iW, this.to = OW
      }
      map(WW) {
        let iW = WW.mapPos(this.from, -1, mW.t.TrackDel),
          OW = WW.mapPos(this.to, 1, mW.t.TrackDel);
        return null == iW || null == OW ? null : new FW(this.field, iW, OW)
      }
    }
    class QW {
      constructor(WW, iW) {
        this.lines = WW, this.fieldPositions = iW
      }
      instantiate(WW, iW) {
        let OW = [],
          mW = [iW],
          EW = WW.doc.lineAt(iW),
          PW = /^\s*/.exec(EW.text)[0];
        for (let cW of this.lines) {
          if (OW.length) {
            let OW = PW,
              EW = /^\t*/.exec(cW)[0].length;
            for (let iW = 0; iW < EW; iW++) OW += WW.facet(NW.X);
            mW.push(iW + OW.length - EW), cW = OW + cW.slice(EW)
          }
          OW.push(cW), iW += cW.length + 1
        }
        let LW = this.fieldPositions.map((WW => new FW(WW.field, mW[WW.line] + WW.from, mW[WW.line] + WW.to)));
        return {
          text: OW,
          kj: LW
        }
      }
      static parse(WW) {
        let iW, OW = [],
          mW = [],
          EW = [];
        for (let NW of WW.split(/\r\n?|\n/)) {
          for (; iW = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(NW);) {
            let WW = iW[1] ? +iW[1] : null,
              PW = iW[2] || iW[3] || "",
              LW = -1,
              cW = PW.replace(/\\[{}]/g, (WW => WW[1]));
            for (let iW = 0; iW < OW.length; iW++)(null != WW ? OW[iW].seq == WW : cW && OW[iW].name == cW) && (LW = iW);
            if (LW < 0) {
              let iW = 0;
              for (; iW < OW.length && (null == WW || null != OW[iW].seq && OW[iW].seq < WW);) iW++;
              OW.splice(iW, 0, {
                seq: WW,
                name: cW
              }), LW = iW;
              for (let WW of EW) WW.field >= LW && WW.field++
            }
            for (let OW of EW)
              if (OW.line == mW.length && OW.from > iW.index) {
                let WW = iW[2] ? 3 + (iW[1] || "").length : 2;
                OW.from -= WW, OW.to -= WW
              } EW.push(new zW(LW, mW.length, iW.index, iW.index + cW.length)), NW = NW.slice(0, iW.index) + PW + NW.slice(iW.index + iW[0].length)
          }
          NW = NW.replace(/\\([{}])/g, ((WW, iW, OW) => {
            for (let NW of EW) NW.line == mW.length && NW.from > OW && (NW.from--, NW.to--);
            return iW
          })), mW.push(NW)
        }
        return new QW(mW, EW)
      }
    }
    let Wi = EW.c.widget({
        widget: new class extends EW.j {
          toDOM() {
            let WW = document.createElement("span");
            return WW.className = "cm-snippetFieldPosition", WW
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      ii = EW.c.mark({
        class: "cm-snippetField"
      });
    class Oi {
      constructor(WW, iW) {
        this.kj = WW, this.active = iW, this.deco = EW.c.set(WW.map((WW => (WW.from == WW.to ? Wi : ii).range(WW.from, WW.to))), !0)
      }
      map(WW) {
        let iW = [];
        for (let OW of this.kj) {
          let mW = OW.map(WW);
          if (!mW) return null;
          iW.push(mW)
        }
        return new Oi(iW, this.active)
      }
      selectionInsideField(WW) {
        return WW.kj.every((WW => this.kj.some((iW => iW.field == this.active && iW.from <= WW.from && iW.to >= WW.to))))
      }
    }
    const mi = mW.H.define({
        map: (WW, iW) => WW && WW.map(iW)
      }),
      Ei = mW.H.define(),
      Ni = mW.L.define({
        create: () => null,
        update(WW, iW) {
          for (let OW of iW.effects) {
            if (OW.is(mi)) return OW.value;
            if (OW.is(Ei) && WW) return new Oi(WW.kj, OW.value)
          }
          return WW && iW.docChanged && (WW = WW.map(iW.changes)), WW && iW.selection && !WW.selectionInsideField(iW.selection) && (WW = null), WW
        },
        provide: WW => EW.e.Km.from(WW, (WW => WW ? WW.deco : EW.c.none))
      });

    function Pi(WW, iW) {
      return mW.l.create(WW.filter((WW => WW.field == iW)).map((WW => mW.l.range(WW.from, WW.to))))
    }

    function Li(WW) {
      let iW = QW.parse(WW);
      return (WW, OW, EW, NW) => {
        let {
          text: PW,
          kj: LW
        } = iW.instantiate(WW.state, EW), {
          main: cW
        } = WW.state.selection, wW = {
          changes: {
            from: EW,
            to: NW == cW.from ? cW.to : NW,
            insert: mW.M.of(PW)
          },
          scrollIntoView: !0,
          annotations: OW ? [lW.of(OW), mW.P.userEvent.of("input.complete")] : void 0
        };
        if (LW.length && (wW.selection = Pi(LW, 0)), LW.some((WW => WW.field > 0))) {
          let iW = new Oi(LW, 0),
            OW = wW.effects = [mi.of(iW)];
          void 0 === WW.state.field(Ni, !1) && OW.push(mW.H.appendConfig.of([Ni, Zi, li, rW]))
        }
        WW.dispatch(WW.state.update(wW))
      }
    }

    function ci(WW) {
      return iW => {
        let {
          state: OW,
          dispatch: mW
        } = iW, EW = OW.field(Ni, !1);
        if (!EW || WW < 0 && 0 == EW.active) return !1;
        let NW = EW.active + WW,
          PW = WW > 0 && !EW.kj.some((iW => iW.field == NW + WW));
        return mW(OW.update({
          selection: Pi(EW.kj, NW),
          effects: mi.of(PW ? null : new Oi(EW.kj, NW)),
          scrollIntoView: !0
        })), !0
      }
    }
    const wi = [{
        key: "Tab",
        run: ci(1),
        shift: ci(-1)
      }, {
        key: "Escape",
        run: WW => {
          let {
            state: iW,
            dispatch: OW
          } = WW;
          return !!iW.field(Ni, !1) && (OW(iW.update({
            effects: mi.of(null)
          })), !0)
        }
      }],
      ti = mW.p.define({
        combine: WW => WW.length ? WW[0] : wi
      }),
      Zi = mW.w.highest(EW.I.compute([ti], (WW => WW.facet(ti))));

    function xi(WW, iW) {
      return {
        ...iW,
        apply: Li(WW)
      }
    }
    const li = EW.e.domEventHandlers({
      mousedown(WW, iW) {
        let OW, mW = iW.state.field(Ni, !1);
        if (!mW || null == (OW = iW.posAtCoords({
            x: WW.clientX,
            y: WW.clientY
          }))) return !1;
        let EW = mW.kj.find((WW => WW.from <= OW && WW.to >= OW));
        return !(!EW || EW.field == mW.active) && (iW.dispatch({
          selection: Pi(mW.kj, EW.field),
          effects: mi.of(mW.kj.some((WW => WW.field > EW.field)) ? new Oi(mW.kj, EW.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const Ai = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      bi = mW.H.define({
        map(WW, iW) {
          let OW = iW.mapPos(WW, -1, mW.t.TrackAfter);
          return null == OW ? void 0 : OW
        }
      }),
      ji = new class extends mW.G {};
    ji.startSide = 1, ji.endSide = -1;
    const Ui = mW.L.define({
      create: () => mW.C.empty,
      update(WW, iW) {
        if (WW = WW.map(iW.changes), iW.selection) {
          let OW = iW.state.doc.lineAt(iW.selection.main.head);
          WW = WW.update({
            filter: WW => WW >= OW.from && WW <= OW.to
          })
        }
        for (let OW of iW.effects) OW.is(bi) && (WW = WW.update({
          add: [ji.range(OW.value, OW.value + 1)]
        }));
        return WW
      }
    });

    function ki() {
      return [Yi, Ui]
    }
    const si = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function Mi(WW) {
      for (let iW = 0; iW < 16; iW += 2)
        if (si.charCodeAt(iW) == WW) return si.charAt(iW + 1);
      return (0, mW.cb)(WW < 128 ? WW : WW + 1)
    }

    function Ki(WW, iW) {
      return WW.languageDataAt("closeBrackets", iW)[0] || Ai
    }
    const Si = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      Yi = EW.e.inputHandler.of(((WW, iW, OW, EW) => {
        if ((Si ? WW.composing : WW.compositionStarted) || WW.state.readOnly) return !1;
        let NW = WW.state.selection.main;
        if (EW.length > 2 || 2 == EW.length && 1 == (0, mW.R)((0, mW.Q)(EW, 0)) || iW != NW.from || OW != NW.to) return !1;
        let PW = function(WW, iW) {
          let OW = Ki(WW, WW.selection.main.head),
            EW = OW.brackets || Ai.brackets;
          for (let NW of EW) {
            let PW = Mi((0, mW.Q)(NW, 0));
            if (iW == NW) return PW == NW ? ui(WW, NW, EW.indexOf(NW + NW + NW) > -1, OW) : Hi(WW, NW, PW, OW.before || Ai.before);
            if (iW == PW && Ti(WW, WW.selection.main.from)) return ni(WW, NW, PW)
          }
          return null
        }(WW.state, EW);
        return !!PW && (WW.dispatch(PW), !0)
      })),
      yi = [{
        key: "Backspace",
        run: WW => {
          let {
            state: iW,
            dispatch: OW
          } = WW;
          if (iW.readOnly) return !1;
          let EW = Ki(iW, iW.selection.main.head).brackets || Ai.brackets,
            NW = null,
            PW = iW.changeByRange((WW => {
              if (WW.empty) {
                let OW = function(WW, iW) {
                  let OW = WW.sliceString(iW - 2, iW);
                  return (0, mW.R)((0, mW.Q)(OW, 0)) == OW.length ? OW : OW.slice(1)
                }(iW.doc, WW.head);
                for (let NW of EW)
                  if (NW == OW && Ji(iW.doc, WW.head) == Mi((0, mW.Q)(NW, 0))) return {
                    changes: {
                      from: WW.head - NW.length,
                      to: WW.head + NW.length
                    },
                    range: mW.l.cursor(WW.head - NW.length)
                  }
              }
              return {
                range: NW = WW
              }
            }));
          return NW || OW(iW.update(PW, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !NW
        }
      }];

    function Ti(WW, iW) {
      let OW = !1;
      return WW.field(Ui).between(0, WW.doc.length, (WW => {
        WW == iW && (OW = !0)
      })), OW
    }

    function Ji(WW, iW) {
      let OW = WW.sliceString(iW, iW + 2);
      return OW.slice(0, (0, mW.R)((0, mW.Q)(OW, 0)))
    }

    function Hi(WW, iW, OW, EW) {
      let NW = null,
        PW = WW.changeByRange((PW => {
          if (!PW.empty) return {
            changes: [{
              insert: iW,
              from: PW.from
            }, {
              insert: OW,
              from: PW.to
            }],
            effects: bi.of(PW.to + iW.length),
            range: mW.l.range(PW.anchor + iW.length, PW.head + iW.length)
          };
          let LW = Ji(WW.doc, PW.head);
          return !LW || /\s/.test(LW) || EW.indexOf(LW) > -1 ? {
            changes: {
              insert: iW + OW,
              from: PW.head
            },
            effects: bi.of(PW.head + iW.length),
            range: mW.l.cursor(PW.head + iW.length)
          } : {
            range: NW = PW
          }
        }));
      return NW ? null : WW.update(PW, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function ni(WW, iW, OW) {
      let EW = null,
        NW = WW.changeByRange((iW => iW.empty && Ji(WW.doc, iW.head) == OW ? {
          changes: {
            from: iW.head,
            to: iW.head + OW.length,
            insert: OW
          },
          range: mW.l.cursor(iW.head + OW.length)
        } : EW = {
          range: iW
        }));
      return EW ? null : WW.update(NW, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function ui(WW, iW, OW, EW) {
      let PW = EW.stringPrefixes || Ai.stringPrefixes,
        LW = null,
        cW = WW.changeByRange((EW => {
          if (!EW.empty) return {
            changes: [{
              insert: iW,
              from: EW.from
            }, {
              insert: iW,
              from: EW.to
            }],
            effects: bi.of(EW.to + iW.length),
            range: mW.l.range(EW.anchor + iW.length, EW.head + iW.length)
          };
          let cW, wW = EW.head,
            tW = Ji(WW.doc, wW);
          if (tW == iW) {
            if (oi(WW, wW)) return {
              changes: {
                insert: iW + iW,
                from: wW
              },
              effects: bi.of(wW + iW.length),
              range: mW.l.cursor(wW + iW.length)
            };
            if (Ti(WW, wW)) {
              let EW = OW && WW.sliceDoc(wW, wW + 3 * iW.length) == iW + iW + iW ? iW + iW + iW : iW;
              return {
                changes: {
                  from: wW,
                  to: wW + EW.length,
                  insert: EW
                },
                range: mW.l.cursor(wW + EW.length)
              }
            }
          } else {
            if (OW && WW.sliceDoc(wW - 2 * iW.length, wW) == iW + iW && (cW = di(WW, wW - 2 * iW.length, PW)) > -1 && oi(WW, cW)) return {
              changes: {
                insert: iW + iW + iW + iW,
                from: wW
              },
              effects: bi.of(wW + iW.length),
              range: mW.l.cursor(wW + iW.length)
            };
            if (WW.charCategorizer(wW)(tW) != mW.i.Word && di(WW, wW, PW) > -1 && ! function(WW, iW, OW, mW) {
                let EW = (0, NW.hb)(WW).resolveInner(iW, -1),
                  PW = mW.reduce(((WW, iW) => Math.max(WW, iW.length)), 0);
                for (let NW = 0; NW < 5; NW++) {
                  let NW = WW.sliceDoc(EW.from, Math.min(EW.to, EW.from + OW.length + PW)),
                    LW = NW.indexOf(OW);
                  if (!LW || LW > -1 && mW.indexOf(NW.slice(0, LW)) > -1) {
                    let iW = EW.firstChild;
                    for (; iW && iW.from == EW.from && iW.to - iW.from > OW.length + LW;) {
                      if (WW.sliceDoc(iW.to - OW.length, iW.to) == OW) return !1;
                      iW = iW.firstChild
                    }
                    return !0
                  }
                  let cW = EW.to == iW && EW.parent;
                  if (!cW) break;
                  EW = cW
                }
                return !1
              }(WW, wW, iW, PW)) return {
              changes: {
                insert: iW + iW,
                from: wW
              },
              effects: bi.of(wW + iW.length),
              range: mW.l.cursor(wW + iW.length)
            }
          }
          return {
            range: LW = EW
          }
        }));
      return LW ? null : WW.update(cW, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function oi(WW, iW) {
      let OW = (0, NW.hb)(WW).resolveInner(iW + 1);
      return OW.parent && OW.from == iW
    }

    function di(WW, iW, OW) {
      let EW = WW.charCategorizer(iW);
      if (EW(WW.sliceDoc(iW - 1, iW)) != mW.i.Word) return iW;
      for (let NW of OW) {
        let OW = iW - NW.length;
        if (WW.sliceDoc(OW, iW) == NW && EW(WW.sliceDoc(OW - 1, OW)) != mW.i.Word) return OW
      }
      return -1
    }

    function ei() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [aW, fW, KW.of(WW), GW, gi, rW]
    }
    const vi = [{
        key: "Ctrl-Space",
        run: qW
      }, {
        mac: "Alt-`",
        run: qW
      }, {
        mac: "Alt-i",
        run: qW
      }, {
        key: "Escape",
        run: WW => {
          let iW = WW.state.field(fW, !1);
          return !(!iW || !iW.active.some((WW => 0 != WW.state))) && (WW.dispatch({
            effects: kW.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: BW(!0)
      }, {
        key: "ArrowUp",
        run: BW(!1)
      }, {
        key: "PageDown",
        run: BW(!0, "page")
      }, {
        key: "PageUp",
        run: BW(!1, "page")
      }, {
        key: "Enter",
        run: WW => {
          let iW = WW.state.field(fW, !1);
          return !(WW.state.readOnly || !iW || !iW.open || iW.open.selected < 0 || iW.open.disabled || Date.now() - iW.open.timestamp < WW.state.facet(KW).interactionDelay) && CW(WW, iW.open.options[iW.open.selected])
        }
      }],
      gi = mW.w.highest(EW.I.computeN([KW], (WW => WW.facet(KW).defaultKeymap ? [vi] : [])))
  },
  53636: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => wW,
      f: () => xW,
      j: () => tW,
      k: () => ZW
    });
    var mW = OW(53507);
    class EW {
      constructor(WW, iW, OW, mW) {
        this.origin = WW, this.changes = iW, this.effects = OW, this.clientID = mW
      }
    }
    class NW {
      constructor(WW, iW) {
        this.version = WW, this.unconfirmed = iW
      }
    }
    const PW = mW.p.define({
        combine(WW) {
          let iW = (0, mW.U)(WW, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: WW => WW
          });
          return null == iW.clientID && (iW.clientID = WW.length && WW[0].generatedID || ""), iW
        }
      }),
      LW = mW.d.define(),
      cW = mW.L.define({
        create: WW => new NW(WW.facet(PW).startVersion, []),
        update(WW, iW) {
          let OW = iW.annotation(LW);
          if (OW) return OW;
          let {
            sharedEffects: mW,
            clientID: cW
          } = iW.startState.facet(PW), wW = mW(iW);
          return wW.length || !iW.changes.empty ? new NW(WW.version, WW.unconfirmed.concat(new EW(iW, iW.changes, wW, cW))) : WW
        }
      });

    function wW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [cW, PW.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, WW))]
    }

    function tW(WW, iW) {
      let {
        version: OW,
        unconfirmed: wW
      } = WW.field(cW), {
        clientID: tW
      } = WW.facet(PW);
      OW += iW.length;
      let ZW = [],
        xW = null,
        lW = 0;
      for (let EW of iW) {
        let WW = lW < wW.length ? wW[lW] : null;
        WW && WW.clientID == EW.clientID ? (xW && (xW = xW.map(WW.changes, !0)), ZW = mW.H.mapEffects(ZW, EW.changes), lW++) : (ZW = mW.H.mapEffects(ZW, EW.changes), EW.effects && (ZW = ZW.concat(EW.effects)), xW = xW ? xW.compose(EW.changes) : EW.changes)
      }
      if (lW && (wW = wW.slice(lW)), wW.length && (xW && (wW = wW.map((WW => {
          let iW = WW.changes.map(xW);
          return xW = xW.map(WW.changes, !0), new EW(WW.origin, iW, mW.H.mapEffects(WW.effects, xW), tW)
        }))), ZW.length)) {
        let WW = wW.reduce(((WW, iW) => WW.compose(iW.changes)), mW.ChangeSet.empty(wW[0].changes.length));
        ZW = mW.H.mapEffects(ZW, WW)
      }
      return xW ? WW.update({
        changes: xW,
        effects: ZW,
        annotations: [mW.P.addToHistory.of(!1), mW.P.remote.of(!0), LW.of(new NW(OW, wW))],
        filter: !1
      }) : WW.update({
        annotations: [LW.of(new NW(OW, wW))]
      })
    }

    function ZW(WW) {
      return WW.field(cW).unconfirmed
    }

    function xW(WW) {
      return WW.field(cW).version
    }
  },
  53539: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => bi
    });
    var mW = OW(53528);
    class EW {
      constructor(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        let wW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          tW = arguments.length > 10 ? arguments[10] : void 0;
        this.p = WW, this.stack = iW, this.state = OW, this.reducePos = mW, this.pos = EW, this.score = NW, this.buffer = PW, this.bufferBase = LW, this.curContext = cW, this.lookAhead = wW, this.parent = tW
      }
      toString() {
        return `[${this.stack.filter(((WW,iW)=>iW%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          mW = WW.parser.context;
        return new EW(WW, [], iW, OW, OW, 0, [], 0, mW ? new NW(mW, mW.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(WW, iW) {
        this.stack.push(this.state, iW, this.bufferBase + this.buffer.length), this.state = WW
      }
      reduce(WW) {
        var iW;
        let OW = WW >> 19,
          mW = 65535 & WW,
          {
            parser: EW
          } = this.p,
          NW = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          PW = EW.dynamicPrecedence(mW);
        if (PW && (this.score += PW), 0 == OW) return this.pushState(EW.getGoto(this.state, mW, !0), this.reducePos), mW < EW.minRepeatTerm && this.storeNode(mW, this.reducePos, this.reducePos, NW ? 8 : 4, !0), void this.reduceContext(mW, this.reducePos);
        let LW = this.stack.length - 3 * (OW - 1) - (262144 & WW ? 6 : 0),
          cW = LW ? this.stack[LW - 2] : this.p.kj[0].from,
          wW = this.reducePos - cW;
        wW >= 2e3 && !(null === (iW = this.p.parser.nodeSet.types[mW]) || void 0 === iW ? void 0 : iW.isAnonymous) && (cW == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = wW) : this.p.lastBigReductionSize < wW && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = cW, this.p.lastBigReductionSize = wW));
        let tW = LW ? this.stack[LW - 1] : 0,
          ZW = this.bufferBase + this.buffer.length - tW;
        if (mW < EW.minRepeatTerm || 131072 & WW) {
          let WW = EW.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(mW, cW, WW, ZW + 4, !0)
        }
        if (262144 & WW) this.state = this.stack[LW];
        else {
          let WW = this.stack[LW - 3];
          this.state = EW.getGoto(WW, mW, !0)
        }
        for (; this.stack.length > LW;) this.stack.pop();
        this.reduceContext(mW, cW)
      }
      storeNode(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == WW && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let WW = this,
            mW = this.buffer.length;
          if (0 == mW && WW.parent && (mW = WW.bufferBase - WW.parent.bufferBase, WW = WW.parent), mW > 0 && 0 == WW.buffer[mW - 4] && WW.buffer[mW - 1] > -1) {
            if (iW == OW) return;
            if (WW.buffer[mW - 2] >= iW) return void(WW.buffer[mW - 2] = OW)
          }
        }
        if (EW && this.pos != OW) {
          let EW = this.buffer.length;
          if (EW > 0 && (0 != this.buffer[EW - 4] || this.buffer[EW - 1] < 0)) {
            let WW = !1;
            for (let iW = EW; iW > 0 && this.buffer[iW - 2] > OW; iW -= 4)
              if (this.buffer[iW - 1] >= 0) {
                WW = !0;
                break
              } if (WW)
              for (; EW > 0 && this.buffer[EW - 2] > OW;) this.buffer[EW] = this.buffer[EW - 4], this.buffer[EW + 1] = this.buffer[EW - 3], this.buffer[EW + 2] = this.buffer[EW - 2], this.buffer[EW + 3] = this.buffer[EW - 1], EW -= 4, mW > 4 && (mW -= 4)
          }
          this.buffer[EW] = WW, this.buffer[EW + 1] = iW, this.buffer[EW + 2] = OW, this.buffer[EW + 3] = mW
        } else this.buffer.push(WW, iW, OW, mW)
      }
      shift(WW, iW, OW, mW) {
        if (131072 & WW) this.pushState(65535 & WW, this.pos);
        else if (0 == (262144 & WW)) {
          let EW = WW,
            {
              parser: NW
            } = this.p;
          this.pos = mW;
          let PW = NW.stateFlag(EW, 1);
          !PW && (mW > OW || iW <= NW.maxNode) && (this.reducePos = mW), this.pushState(EW, PW ? OW : Math.min(OW, this.reducePos)), this.shiftContext(iW, OW), iW <= NW.maxNode && this.buffer.push(iW, OW, mW, 4)
        } else this.pos = mW, this.shiftContext(iW, OW), iW <= this.p.parser.maxNode && this.buffer.push(iW, OW, mW, 4)
      }
      apply(WW, iW, OW, mW) {
        65536 & WW ? this.reduce(WW) : this.shift(WW, iW, OW, mW)
      }
      useNode(WW, iW) {
        let OW = this.p.reused.length - 1;
        (OW < 0 || this.p.reused[OW] != WW) && (this.p.reused.push(WW), OW++);
        let mW = this.pos;
        this.reducePos = this.pos = mW + WW.length, this.pushState(iW, mW), this.buffer.push(OW, mW, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, WW, this, this.p.stream.reset(this.pos - WW.length)))
      }
      split() {
        let WW = this,
          iW = WW.buffer.length;
        for (; iW > 0 && WW.buffer[iW - 2] > WW.reducePos;) iW -= 4;
        let OW = WW.buffer.slice(iW),
          mW = WW.bufferBase + iW;
        for (; WW && mW == WW.bufferBase;) WW = WW.parent;
        return new EW(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, OW, mW, this.curContext, this.lookAhead, WW)
      }
      recoverByDelete(WW, iW) {
        let OW = WW <= this.p.parser.maxNode;
        OW && this.storeNode(WW, this.pos, iW, 4), this.storeNode(0, this.pos, iW, OW ? 8 : 4), this.pos = this.reducePos = iW, this.score -= 190
      }
      canShift(WW) {
        for (let iW = new PW(this);;) {
          let OW = this.p.parser.stateSlot(iW.state, 4) || this.p.parser.hasAction(iW.state, WW);
          if (0 == OW) return !1;
          if (0 == (65536 & OW)) return !0;
          iW.reduce(OW)
        }
      }
      recoverByInsert(WW) {
        if (this.stack.length >= 300) return [];
        let iW = this.p.parser.nextStates(this.state);
        if (iW.length > 8 || this.stack.length >= 120) {
          let OW = [];
          for (let mW, EW = 0; EW < iW.length; EW += 2)(mW = iW[EW + 1]) != this.state && this.p.parser.hasAction(mW, WW) && OW.push(iW[EW], mW);
          if (this.stack.length < 120)
            for (let WW = 0; OW.length < 8 && WW < iW.length; WW += 2) {
              let mW = iW[WW + 1];
              OW.some(((WW, iW) => 1 & iW && WW == mW)) || OW.push(iW[WW], mW)
            }
          iW = OW
        }
        let OW = [];
        for (let mW = 0; mW < iW.length && OW.length < 4; mW += 2) {
          let WW = iW[mW + 1];
          if (WW == this.state) continue;
          let EW = this.split();
          EW.pushState(WW, this.pos), EW.storeNode(0, EW.pos, EW.pos, 4, !0), EW.shiftContext(iW[mW], this.pos), EW.reducePos = this.pos, EW.score -= 200, OW.push(EW)
        }
        return OW
      }
      forceReduce() {
        let {
          parser: WW
        } = this.p, iW = WW.stateSlot(this.state, 5);
        if (0 == (65536 & iW)) return !1;
        if (!WW.validAction(this.state, iW)) {
          let OW = iW >> 19,
            mW = 65535 & iW,
            EW = this.stack.length - 3 * OW;
          if (EW < 0 || WW.getGoto(this.stack[EW], mW, !1) < 0) {
            let WW = this.findForcedReduction();
            if (null == WW) return !1;
            iW = WW
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(iW), !0
      }
      findForcedReduction() {
        let {
          parser: WW
        } = this.p, iW = [], OW = (mW, EW) => {
          if (!iW.includes(mW)) return iW.push(mW), WW.allActions(mW, (iW => {
            if (393216 & iW);
            else if (65536 & iW) {
              let OW = (iW >> 19) - EW;
              if (OW > 1) {
                let mW = 65535 & iW,
                  EW = this.stack.length - 3 * OW;
                if (EW >= 0 && WW.getGoto(this.stack[EW], mW, !1) >= 0) return OW << 19 | 65536 | mW
              }
            } else {
              let WW = OW(iW, EW + 1);
              if (null != WW) return WW
            }
          }))
        };
        return OW(this.state, 0)
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
          parser: WW
        } = this.p;
        return 65535 == WW.data[WW.stateSlot(this.state, 1)] && !WW.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(WW) {
        if (this.state != WW.state || this.stack.length != WW.stack.length) return !1;
        for (let iW = 0; iW < this.stack.length; iW += 3)
          if (this.stack[iW] != WW.stack[iW]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(WW) {
        return this.p.parser.dialect.flags[WW]
      }
      shiftContext(WW, iW) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, WW, this, this.p.stream.reset(iW)))
      }
      reduceContext(WW, iW) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, WW, this, this.p.stream.reset(iW)))
      }
      emitContext() {
        let WW = this.buffer.length - 1;
        (WW < 0 || -3 != this.buffer[WW]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let WW = this.buffer.length - 1;
        (WW < 0 || -4 != this.buffer[WW]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(WW) {
        if (WW != this.curContext.context) {
          let iW = new NW(this.curContext.tracker, WW);
          iW.hash != this.curContext.hash && this.emitContext(), this.curContext = iW
        }
      }
      setLookAhead(WW) {
        return !(WW <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = WW, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class NW {
      constructor(WW, iW) {
        this.tracker = WW, this.context = iW, this.hash = WW.strict ? WW.hash(iW) : 0
      }
    }
    class PW {
      constructor(WW) {
        this.start = WW, this.state = WW.state, this.stack = WW.stack, this.base = this.stack.length
      }
      reduce(WW) {
        let iW = 65535 & WW,
          OW = WW >> 19;
        0 == OW ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (OW - 1);
        let mW = this.start.p.parser.getGoto(this.stack[this.base - 3], iW, !0);
        this.state = mW
      }
    }
    class LW {
      constructor(WW, iW, OW) {
        this.stack = WW, this.pos = iW, this.index = OW, this.buffer = WW.buffer, 0 == this.index && this.maybeNext()
      }
      static create(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW.bufferBase + WW.buffer.length;
        return new LW(WW, iW, iW - WW.bufferBase)
      }
      maybeNext() {
        let WW = this.stack.parent;
        null != WW && (this.index = this.stack.bufferBase - WW.bufferBase, this.stack = WW, this.buffer = WW.buffer)
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
        return new LW(this.stack, this.pos, this.index)
      }
    }

    function cW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof WW) return WW;
      let OW = null;
      for (let mW = 0, EW = 0; mW < WW.length;) {
        let NW = 0;
        for (;;) {
          let iW = WW.charCodeAt(mW++),
            OW = !1;
          if (126 == iW) {
            NW = 65535;
            break
          }
          iW >= 92 && iW--, iW >= 34 && iW--;
          let EW = iW - 32;
          if (EW >= 46 && (EW -= 46, OW = !0), NW += EW, OW) break;
          NW *= 46
        }
        OW ? OW[EW++] = NW : OW = new iW(NW)
      }
      return OW
    }
    class wW {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const tW = new wW;
    class ZW {
      constructor(WW, iW) {
        this.input = WW, this.kj = iW, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = tW, this.rangeIndex = 0, this.pos = this.chunkPos = iW[0].from, this.range = iW[0], this.end = iW[iW.length - 1].to, this.readNext()
      }
      resolveOffset(WW, iW) {
        let OW = this.range,
          mW = this.rangeIndex,
          EW = this.pos + WW;
        for (; EW < OW.from;) {
          if (!mW) return null;
          let WW = this.kj[--mW];
          EW -= OW.from - WW.to, OW = WW
        }
        for (; iW < 0 ? EW > OW.to : EW >= OW.to;) {
          if (mW == this.kj.length - 1) return null;
          let WW = this.kj[++mW];
          EW += WW.from - OW.to, OW = WW
        }
        return EW
      }
      clipPos(WW) {
        if (WW >= this.range.from && WW < this.range.to) return WW;
        for (let iW of this.kj)
          if (iW.to > WW) return Math.max(WW, iW.from);
        return this.end
      }
      peek(WW) {
        let iW, OW, mW = this.chunkOff + WW;
        if (mW >= 0 && mW < this.chunk.length) iW = this.pos + WW, OW = this.chunk.charCodeAt(mW);
        else {
          let mW = this.resolveOffset(WW, 1);
          if (null == mW) return -1;
          if (iW = mW, iW >= this.chunk2Pos && iW < this.chunk2Pos + this.chunk2.length) OW = this.chunk2.charCodeAt(iW - this.chunk2Pos);
          else {
            let WW = this.rangeIndex,
              mW = this.range;
            for (; mW.to <= iW;) mW = this.kj[++WW];
            this.chunk2 = this.input.chunk(this.chunk2Pos = iW), iW + this.chunk2.length > mW.to && (this.chunk2 = this.chunk2.slice(0, mW.to - iW)), OW = this.chunk2.charCodeAt(0)
          }
        }
        return iW >= this.token.lookAhead && (this.token.lookAhead = iW + 1), OW
      }
      acceptToken(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = iW ? this.resolveOffset(iW, -1) : this.pos;
        if (null == OW || OW < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = WW, this.token.end = OW
      }
      acceptTokenTo(WW, iW) {
        this.token.value = WW, this.token.end = iW
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: WW,
            chunkPos: iW
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = WW, this.chunk2Pos = iW, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let WW = this.input.chunk(this.pos),
            iW = this.pos + WW.length;
          this.chunk = iW > this.range.to ? WW.slice(0, this.range.to - this.pos) : WW, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += WW; this.pos + WW >= this.range.to;) {
          if (this.rangeIndex == this.kj.length - 1) return this.setDone();
          WW -= this.range.to - this.pos, this.range = this.kj[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += WW, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.kj[this.rangeIndex = this.kj.length - 1], this.chunk = "", this.next = -1
      }
      reset(WW, iW) {
        if (iW ? (this.token = iW, iW.start = WW, iW.lookAhead = WW + 1, iW.value = iW.extended = -1) : this.token = tW, this.pos != WW) {
          if (this.pos = WW, WW == this.end) return this.setDone(), this;
          for (; WW < this.range.from;) this.range = this.kj[--this.rangeIndex];
          for (; WW >= this.range.to;) this.range = this.kj[++this.rangeIndex];
          WW >= this.chunkPos && WW < this.chunkPos + this.chunk.length ? this.chunkOff = WW - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(WW, iW) {
        if (WW >= this.chunkPos && iW <= this.chunkPos + this.chunk.length) return this.chunk.slice(WW - this.chunkPos, iW - this.chunkPos);
        if (WW >= this.chunk2Pos && iW <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(WW - this.chunk2Pos, iW - this.chunk2Pos);
        if (WW >= this.range.from && iW <= this.range.to) return this.input.read(WW, iW);
        let OW = "";
        for (let mW of this.kj) {
          if (mW.from >= iW) break;
          mW.to > WW && (OW += this.input.read(Math.max(mW.from, WW), Math.min(mW.to, iW)))
        }
        return OW
      }
    }
    class xW {
      constructor(WW, iW) {
        this.data = WW, this.id = iW
      }
      token(WW, iW) {
        let {
          parser: OW
        } = iW.p;
        bW(this.data, WW, iW, this.id, OW.data, OW.tokenPrecTable)
      }
    }
    xW.prototype.contextual = xW.prototype.fallback = xW.prototype.extend = !1;
    class lW {
      constructor(WW, iW, OW) {
        this.precTable = iW, this.elseToken = OW, this.data = "string" == typeof WW ? cW(WW) : WW
      }
      token(WW, iW) {
        let OW = WW.pos,
          mW = 0;
        for (;;) {
          let OW = WW.next < 0,
            EW = WW.resolveOffset(1, 1);
          if (bW(this.data, WW, iW, 0, this.data, this.precTable), WW.token.value > -1) break;
          if (null == this.elseToken) return;
          if (OW || mW++, null == EW) break;
          WW.reset(EW, WW.token)
        }
        mW && (WW.reset(OW, WW.token), WW.acceptToken(this.elseToken, mW))
      }
    }
    lW.prototype.contextual = xW.prototype.fallback = xW.prototype.extend = !1;
    class AW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = WW, this.contextual = !!iW.contextual, this.fallback = !!iW.fallback, this.extend = !!iW.extend
      }
    }

    function bW(WW, iW, OW, mW, EW, NW) {
      let PW = 0,
        LW = 1 << mW,
        {
          dialect: cW
        } = OW.p.parser;
      WW: for (; 0 != (LW & WW[PW]);) {
        let OW = WW[PW + 1];
        for (let ZW = PW + 3; ZW < OW; ZW += 2)
          if ((WW[ZW + 1] & LW) > 0) {
            let OW = WW[ZW];
            if (cW.allows(OW) && (-1 == iW.token.value || iW.token.value == OW || UW(OW, iW.token.value, EW, NW))) {
              iW.acceptToken(OW);
              break
            }
          } let mW = iW.next,
          wW = 0,
          tW = WW[PW + 2];
        if (!(iW.next < 0 && tW > wW && 65535 == WW[OW + 3 * tW - 3])) {
          for (; wW < tW;) {
            let EW = wW + tW >> 1,
              NW = OW + EW + (EW << 1),
              LW = WW[NW],
              cW = WW[NW + 1] || 65536;
            if (mW < LW) tW = EW;
            else {
              if (!(mW >= cW)) {
                PW = WW[NW + 2], iW.advance();
                continue WW
              }
              wW = EW + 1
            }
          }
          break
        }
        PW = WW[OW + 3 * tW - 1]
      }
    }

    function jW(WW, iW, OW) {
      for (let mW, EW = iW; 65535 != (mW = WW[EW]); EW++)
        if (mW == OW) return EW - iW;
      return -1
    }

    function UW(WW, iW, OW, mW) {
      let EW = jW(OW, mW, iW);
      return EW < 0 || jW(OW, mW, WW) < EW
    }
    const kW = "undefined" != typeof process && {
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
    let sW = null;

    function MW(WW, iW, OW) {
      let EW = WW.cursor(mW.h.IncludeAnonymous);
      for (EW.moveTo(iW);;)
        if (!(OW < 0 ? EW.childBefore(iW) : EW.childAfter(iW)))
          for (;;) {
            if ((OW < 0 ? EW.to < iW : EW.from > iW) && !EW.type.isError) return OW < 0 ? Math.max(0, Math.min(EW.to - 1, iW - 25)) : Math.min(WW.length, Math.max(EW.from + 1, iW + 25));
            if (OW < 0 ? EW.prevSibling() : EW.nextSibling()) break;
            if (!EW.parent()) return OW < 0 ? 0 : WW.length
          }
    }
    class KW {
      constructor(WW, iW) {
        this.fragments = WW, this.nodeSet = iW, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let WW = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (WW) {
          for (this.safeFrom = WW.openStart ? MW(WW.tree, WW.from + WW.offset, 1) - WW.offset : WW.from, this.safeTo = WW.openEnd ? MW(WW.tree, WW.to + WW.offset, -1) - WW.offset : WW.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(WW.tree), this.start.push(-WW.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(WW) {
        if (WW < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= WW;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let iW = this.trees.length - 1;
          if (iW < 0) return this.nextFragment(), null;
          let OW = this.trees[iW],
            EW = this.index[iW];
          if (EW == OW.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let NW = OW.children[EW],
            PW = this.start[iW] + OW.positions[EW];
          if (PW > WW) return this.nextStart = PW, null;
          if (NW instanceof mW.v) {
            if (PW == WW) {
              if (PW < this.safeFrom) return null;
              let WW = PW + NW.length;
              if (WW <= this.safeTo) {
                let iW = NW.prop(mW.j.lookAhead);
                if (!iW || WW + iW < this.fragment.to) return NW
              }
            }
            this.index[iW]++, PW + NW.length >= Math.max(this.safeFrom, WW) && (this.trees.push(NW), this.start.push(PW), this.index.push(0))
          } else this.index[iW]++, this.nextStart = PW + NW.length
        }
      }
    }
    class SW {
      constructor(WW, iW) {
        this.stream = iW, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = WW.tokenizers.map((WW => new wW))
      }
      getActions(WW) {
        let iW = 0,
          OW = null,
          {
            parser: mW
          } = WW.p,
          {
            tokenizers: EW
          } = mW,
          NW = mW.stateSlot(WW.state, 3),
          PW = WW.curContext ? WW.curContext.hash : 0,
          LW = 0;
        for (let cW = 0; cW < EW.length; cW++) {
          if (0 == (1 << cW & NW)) continue;
          let mW = EW[cW],
            wW = this.tokens[cW];
          if ((!OW || mW.fallback) && ((mW.contextual || wW.start != WW.pos || wW.mask != NW || wW.context != PW) && (this.updateCachedToken(wW, mW, WW), wW.mask = NW, wW.context = PW), wW.lookAhead > wW.end + 25 && (LW = Math.max(wW.lookAhead, LW)), 0 != wW.value)) {
            let EW = iW;
            if (wW.extended > -1 && (iW = this.addActions(WW, wW.extended, wW.end, iW)), iW = this.addActions(WW, wW.value, wW.end, iW), !mW.extend && (OW = wW, iW > EW)) break
          }
        }
        for (; this.actions.length > iW;) this.actions.pop();
        return LW && WW.setLookAhead(LW), OW || WW.pos != this.stream.end || (OW = new wW, OW.value = WW.p.parser.eofTerm, OW.start = OW.end = WW.pos, iW = this.addActions(WW, OW.value, OW.end, iW)), this.mainToken = OW, this.actions
      }
      getMainToken(WW) {
        if (this.mainToken) return this.mainToken;
        let iW = new wW,
          {
            pos: OW,
            p: mW
          } = WW;
        return iW.start = OW, iW.end = Math.min(OW + 1, mW.stream.end), iW.value = OW == mW.stream.end ? mW.parser.eofTerm : 0, iW
      }
      updateCachedToken(WW, iW, OW) {
        let mW = this.stream.clipPos(OW.pos);
        if (iW.token(this.stream.reset(mW, WW), OW), WW.value > -1) {
          let {
            parser: iW
          } = OW.p;
          for (let mW = 0; mW < iW.specialized.length; mW++)
            if (iW.specialized[mW] == WW.value) {
              let EW = iW.specializers[mW](this.stream.read(WW.start, WW.end), OW);
              if (EW >= 0 && OW.p.parser.dialect.allows(EW >> 1)) {
                0 == (1 & EW) ? WW.value = EW >> 1 : WW.extended = EW >> 1;
                break
              }
            }
        } else WW.value = 0, WW.end = this.stream.clipPos(mW + 1)
      }
      putAction(WW, iW, OW, mW) {
        for (let EW = 0; EW < mW; EW += 3)
          if (this.actions[EW] == WW) return mW;
        return this.actions[mW++] = WW, this.actions[mW++] = iW, this.actions[mW++] = OW, mW
      }
      addActions(WW, iW, OW, mW) {
        let {
          state: EW
        } = WW, {
          parser: NW
        } = WW.p, {
          data: PW
        } = NW;
        for (let LW = 0; LW < 2; LW++)
          for (let WW = NW.stateSlot(EW, LW ? 2 : 1);; WW += 3) {
            if (65535 == PW[WW]) {
              if (1 != PW[WW + 1]) {
                0 == mW && 2 == PW[WW + 1] && (mW = this.putAction(HW(PW, WW + 2), iW, OW, mW));
                break
              }
              WW = HW(PW, WW + 2)
            }
            PW[WW] == iW && (mW = this.putAction(HW(PW, WW + 1), iW, OW, mW))
          }
        return mW
      }
    }
    class YW {
      constructor(WW, iW, OW, mW) {
        this.parser = WW, this.input = iW, this.kj = mW, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new ZW(iW, mW), this.tokens = new SW(WW, this.stream), this.topTerm = WW.top[1];
        let {
          from: NW
        } = mW[0];
        this.stacks = [EW.start(this, WW.top[0], NW)], this.fragments = OW.length && this.stream.end - NW > 4 * WW.bufferLength ? new KW(OW, WW.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let WW, iW, OW = this.stacks,
          mW = this.minStackPos,
          EW = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == OW.length) {
          let [WW] = OW;
          for (; WW.forceReduce() && WW.stack.length && WW.stack[WW.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let NW = 0; NW < OW.length; NW++) {
          let PW = OW[NW];
          for (;;) {
            if (this.tokens.mainToken = null, PW.pos > mW) EW.push(PW);
            else {
              if (this.advanceStack(PW, EW, OW)) continue;
              {
                WW || (WW = [], iW = []), WW.push(PW);
                let OW = this.tokens.getMainToken(PW);
                iW.push(OW.value, OW.end)
              }
            }
            break
          }
        }
        if (!EW.length) {
          let iW = WW && function(WW) {
            let iW = null;
            for (let OW of WW) {
              let WW = OW.p.stoppedAt;
              (OW.pos == OW.p.stream.end || null != WW && OW.pos > WW) && OW.p.parser.stateFlag(OW.state, 2) && (!iW || iW.score < OW.score) && (iW = OW)
            }
            return iW
          }(WW);
          if (iW) return kW && console.log("Finish with " + this.stackID(iW)), this.stackToTree(iW);
          if (this.parser.strict) throw kW && WW && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + mW);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && WW) {
          let OW = null != this.stoppedAt && WW[0].pos > this.stoppedAt ? WW[0] : this.runRecovery(WW, iW, EW);
          if (OW) return kW && console.log("Force-finish " + this.stackID(OW)), this.stackToTree(OW.forceAll())
        }
        if (this.recovering) {
          let WW = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (EW.length > WW)
            for (EW.sort(((WW, iW) => iW.score - WW.score)); EW.length > WW;) EW.pop();
          EW.some((WW => WW.reducePos > mW)) && this.recovering--
        } else if (EW.length > 1) {
          WW: for (let WW = 0; WW < EW.length - 1; WW++) {
            let iW = EW[WW];
            for (let OW = WW + 1; OW < EW.length; OW++) {
              let mW = EW[OW];
              if (iW.sameState(mW) || iW.buffer.length > 500 && mW.buffer.length > 500) {
                if (!((iW.score - mW.score || iW.buffer.length - mW.buffer.length) > 0)) {
                  EW.splice(WW--, 1);
                  continue WW
                }
                EW.splice(OW--, 1)
              }
            }
          }
          EW.length > 12 && (EW.sort(((WW, iW) => iW.score - WW.score)), EW.splice(12, EW.length - 12))
        }
        this.minStackPos = EW[0].pos;
        for (let NW = 1; NW < EW.length; NW++) EW[NW].pos < this.minStackPos && (this.minStackPos = EW[NW].pos);
        return null
      }
      stopAt(WW) {
        if (null != this.stoppedAt && this.stoppedAt < WW) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = WW
      }
      advanceStack(WW, iW, OW) {
        let EW = WW.pos,
          {
            parser: NW
          } = this,
          PW = kW ? this.stackID(WW) + " -> " : "";
        if (null != this.stoppedAt && EW > this.stoppedAt) return WW.forceReduce() ? WW : null;
        if (this.fragments) {
          let iW = WW.curContext && WW.curContext.tracker.strict,
            OW = iW ? WW.curContext.hash : 0;
          for (let LW = this.fragments.nodeAt(EW); LW;) {
            let EW = this.parser.nodeSet.types[LW.type.id] == LW.type ? NW.getGoto(WW.state, LW.type.id) : -1;
            if (EW > -1 && LW.length && (!iW || (LW.prop(mW.j.contextHash) || 0) == OW)) return WW.useNode(LW, EW), kW && console.log(PW + this.stackID(WW) + ` (via reuse of ${NW.getName(LW.type.id)})`), !0;
            if (!(LW instanceof mW.v) || 0 == LW.children.length || LW.positions[0] > 0) break;
            let cW = LW.children[0];
            if (!(cW instanceof mW.v && 0 == LW.positions[0])) break;
            LW = cW
          }
        }
        let LW = NW.stateSlot(WW.state, 4);
        if (LW > 0) return WW.reduce(LW), kW && console.log(PW + this.stackID(WW) + ` (via always-reduce ${NW.getName(65535&LW)})`), !0;
        if (WW.stack.length >= 8400)
          for (; WW.stack.length > 6e3 && WW.forceReduce(););
        let cW = this.tokens.getActions(WW);
        for (let mW = 0; mW < cW.length;) {
          let LW = cW[mW++],
            wW = cW[mW++],
            tW = cW[mW++],
            ZW = mW == cW.length || !OW,
            xW = ZW ? WW : WW.split(),
            lW = this.tokens.mainToken;
          if (xW.apply(LW, wW, lW ? lW.start : xW.pos, tW), kW && console.log(PW + this.stackID(xW) + ` (via ${0==(65536&LW)?"shift":`reduce of ${NW.getName(65535&LW)}`} for ${NW.getName(wW)} @ ${EW}${xW==WW?"":", split"})`), ZW) return !0;
          xW.pos > EW ? iW.push(xW) : OW.push(xW)
        }
        return !1
      }
      advanceFully(WW, iW) {
        let OW = WW.pos;
        for (;;) {
          if (!this.advanceStack(WW, null, null)) return !1;
          if (WW.pos > OW) return yW(WW, iW), !0
        }
      }
      runRecovery(WW, iW, OW) {
        let mW = null,
          EW = !1;
        for (let NW = 0; NW < WW.length; NW++) {
          let PW = WW[NW],
            LW = iW[NW << 1],
            cW = iW[1 + (NW << 1)],
            wW = kW ? this.stackID(PW) + " -> " : "";
          if (PW.deadEnd) {
            if (EW) continue;
            if (EW = !0, PW.restart(), kW && console.log(wW + this.stackID(PW) + " (restarted)"), this.advanceFully(PW, OW)) continue
          }
          let tW = PW.split(),
            ZW = wW;
          for (let WW = 0; WW < 10 && tW.forceReduce(); WW++) {
            if (kW && console.log(ZW + this.stackID(tW) + " (via force-reduce)"), this.advanceFully(tW, OW)) break;
            kW && (ZW = this.stackID(tW) + " -> ")
          }
          for (let WW of PW.recoverByInsert(LW)) kW && console.log(wW + this.stackID(WW) + " (via recover-insert)"), this.advanceFully(WW, OW);
          this.stream.end > PW.pos ? (cW == PW.pos && (cW++, LW = 0), PW.recoverByDelete(LW, cW), kW && console.log(wW + this.stackID(PW) + ` (via recover-delete ${this.parser.getName(LW)})`), yW(PW, OW)) : (!mW || mW.score < tW.score) && (mW = tW)
        }
        return mW
      }
      stackToTree(WW) {
        return WW.close(), mW.v.build({
          buffer: LW.create(WW),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.kj[0].from,
          length: WW.pos - this.kj[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(WW) {
        let iW = (sW || (sW = new WeakMap)).get(WW);
        return iW || sW.set(WW, iW = String.fromCodePoint(this.nextStackID++)), iW + WW
      }
    }

    function yW(WW, iW) {
      for (let OW = 0; OW < iW.length; OW++) {
        let mW = iW[OW];
        if (mW.pos == WW.pos && mW.sameState(WW)) return void(iW[OW].score < WW.score && (iW[OW] = WW))
      }
      iW.push(WW)
    }
    class TW {
      constructor(WW, iW, OW) {
        this.source = WW, this.flags = iW, this.disabled = OW
      }
      allows(WW) {
        return !this.disabled || 0 == this.disabled[WW]
      }
    }
    const JW = WW => WW;
    class hW extends mW.s {
      constructor(WW) {
        if (super(), this.wrappers = [], 14 != WW.version) throw new RangeError(`Parser version (${WW.version}) doesn't match runtime version (14)`);
        let iW = WW.nodeNames.split(" ");
        this.minRepeatTerm = iW.length;
        for (let mW = 0; mW < WW.repeatNodeCount; mW++) iW.push("");
        let OW = Object.keys(WW.topRules).map((iW => WW.topRules[iW][1])),
          EW = [];
        for (let mW = 0; mW < iW.length; mW++) EW.push([]);

        function NW(WW, iW, OW) {
          EW[WW].push([iW, iW.deserialize(String(OW))])
        }
        if (WW.nodeProps)
          for (let LW of WW.nodeProps) {
            let WW = LW[0];
            "string" == typeof WW && (WW = mW.j[WW]);
            for (let iW = 1; iW < LW.length;) {
              let OW = LW[iW++];
              if (OW >= 0) NW(OW, WW, LW[iW++]);
              else {
                let mW = LW[iW + -OW];
                for (let EW = -OW; EW > 0; EW--) NW(LW[iW++], WW, mW);
                iW++
              }
            }
          }
        this.nodeSet = new mW.k(iW.map(((iW, NW) => mW.n.define({
          name: NW >= this.minRepeatTerm ? void 0 : iW,
          id: NW,
          props: EW[NW],
          top: OW.indexOf(NW) > -1,
          error: 0 == NW,
          skipped: WW.skippedNodes && WW.skippedNodes.indexOf(NW) > -1
        })))), WW.propSources && (this.nodeSet = this.nodeSet.extend(...WW.propSources)), this.strict = !1, this.bufferLength = mW.e;
        let PW = cW(WW.tokenData);
        this.context = WW.context, this.specializerSpecs = WW.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let mW = 0; mW < this.specializerSpecs.length; mW++) this.specialized[mW] = this.specializerSpecs[mW].term;
        this.specializers = this.specializerSpecs.map(nW), this.states = cW(WW.states, Uint32Array), this.data = cW(WW.stateData), this.goto = cW(WW.goto), this.maxTerm = WW.maxTerm, this.tokenizers = WW.tokenizers.map((WW => "number" == typeof WW ? new xW(PW, WW) : WW)), this.topRules = WW.topRules, this.dialects = WW.dialects || {}, this.dynamicPrecedences = WW.dynamicPrecedences || null, this.tokenPrecTable = WW.tokenPrec, this.termNames = WW.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(WW, iW, OW) {
        let mW = new YW(this, WW, iW, OW);
        for (let EW of this.wrappers) mW = EW(mW, WW, iW, OW);
        return mW
      }
      getGoto(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = this.goto;
        if (iW >= mW[0]) return -1;
        for (let EW = mW[iW + 1];;) {
          let iW = mW[EW++],
            NW = 1 & iW,
            PW = mW[EW++];
          if (NW && OW) return PW;
          for (let OW = EW + (iW >> 1); EW < OW; EW++)
            if (mW[EW] == WW) return PW;
          if (NW) return -1
        }
      }
      hasAction(WW, iW) {
        let OW = this.data;
        for (let mW = 0; mW < 2; mW++)
          for (let EW, NW = this.stateSlot(WW, mW ? 2 : 1);; NW += 3) {
            if (65535 == (EW = OW[NW])) {
              if (1 != OW[NW + 1]) {
                if (2 == OW[NW + 1]) return HW(OW, NW + 2);
                break
              }
              EW = OW[NW = HW(OW, NW + 2)]
            }
            if (EW == iW || 0 == EW) return HW(OW, NW + 1)
          }
        return 0
      }
      stateSlot(WW, iW) {
        return this.states[6 * WW + iW]
      }
      stateFlag(WW, iW) {
        return (this.stateSlot(WW, 0) & iW) > 0
      }
      validAction(WW, iW) {
        return !!this.allActions(WW, (WW => WW == iW || null))
      }
      allActions(WW, iW) {
        let OW = this.stateSlot(WW, 4),
          mW = OW ? iW(OW) : void 0;
        for (let EW = this.stateSlot(WW, 1); null == mW; EW += 3) {
          if (65535 == this.data[EW]) {
            if (1 != this.data[EW + 1]) break;
            EW = HW(this.data, EW + 2)
          }
          mW = iW(HW(this.data, EW + 1))
        }
        return mW
      }
      nextStates(WW) {
        let iW = [];
        for (let OW = this.stateSlot(WW, 1);; OW += 3) {
          if (65535 == this.data[OW]) {
            if (1 != this.data[OW + 1]) break;
            OW = HW(this.data, OW + 2)
          }
          if (0 == (1 & this.data[OW + 2])) {
            let WW = this.data[OW + 1];
            iW.some(((iW, OW) => 1 & OW && iW == WW)) || iW.push(this.data[OW], WW)
          }
        }
        return iW
      }
      configure(WW) {
        let iW = Object.assign(Object.create(hW.prototype), this);
        if (WW.props && (iW.nodeSet = this.nodeSet.extend(...WW.props)), WW.top) {
          let OW = this.topRules[WW.top];
          if (!OW) throw new RangeError(`Invalid top rule name ${WW.top}`);
          iW.top = OW
        }
        return WW.tokenizers && (iW.tokenizers = this.tokenizers.map((iW => {
          let OW = WW.tokenizers.find((WW => WW.from == iW));
          return OW ? OW.to : iW
        }))), WW.specializers && (iW.specializers = this.specializers.slice(), iW.specializerSpecs = this.specializerSpecs.map(((OW, mW) => {
          let EW = WW.specializers.find((WW => WW.from == OW.external));
          if (!EW) return OW;
          let NW = Object.assign(Object.assign({}, OW), {
            external: EW.to
          });
          return iW.specializers[mW] = nW(NW), NW
        }))), WW.contextTracker && (iW.context = WW.contextTracker), WW.dialect && (iW.dialect = this.parseDialect(WW.dialect)), null != WW.strict && (iW.strict = WW.strict), WW.wrap && (iW.wrappers = iW.wrappers.concat(WW.wrap)), null != WW.bufferLength && (iW.bufferLength = WW.bufferLength), iW
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(WW) {
        return this.termNames ? this.termNames[WW] : String(WW <= this.maxNode && this.nodeSet.types[WW].name || WW)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(WW) {
        let iW = this.dynamicPrecedences;
        return null == iW ? 0 : iW[WW] || 0
      }
      parseDialect(WW) {
        let iW = Object.keys(this.dialects),
          OW = iW.map((() => !1));
        if (WW)
          for (let EW of WW.split(" ")) {
            let WW = iW.indexOf(EW);
            WW >= 0 && (OW[WW] = !0)
          }
        let mW = null;
        for (let EW = 0; EW < iW.length; EW++)
          if (!OW[EW])
            for (let WW, OW = this.dialects[iW[EW]]; 65535 != (WW = this.data[OW++]);)(mW || (mW = new Uint8Array(this.maxTerm + 1)))[WW] = 1;
        return new TW(WW, OW, mW)
      }
      static deserialize(WW) {
        return new hW(WW)
      }
    }

    function HW(WW, iW) {
      return WW[iW] | WW[iW + 1] << 16
    }

    function nW(WW) {
      if (WW.external) {
        let iW = WW.extend ? 1 : 0;
        return (OW, mW) => WW.external(OW, mW) << 1 | iW
      }
      return WW.get
    }
    var uW = OW(53532);
    const oW = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      dW = new class {
        constructor(WW) {
          this.start = WW.start, this.shift = WW.shift || JW, this.reduce = WW.reduce || JW, this.reuse = WW.reuse || JW, this.hash = WW.hash || (() => 0), this.strict = !1 !== WW.strict
        }
      }({
        start: !1,
        shift: (WW, iW) => 5 == iW || 6 == iW || 320 == iW ? WW : 321 == iW,
        strict: !1
      }),
      eW = new AW(((WW, iW) => {
        let {
          next: OW
        } = WW;
        (125 == OW || -1 == OW || iW.context) && WW.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      vW = new AW(((WW, iW) => {
        let OW, {
          next: mW
        } = WW;
        oW.indexOf(mW) > -1 || (47 != mW || 47 != (OW = WW.peek(1)) && 42 != OW) && (125 == mW || 59 == mW || -1 == mW || iW.context || WW.acceptToken(316))
      }), {
        contextual: !0
      }),
      gW = new AW(((WW, iW) => {
        91 != WW.next || iW.context || WW.acceptToken(317)
      }), {
        contextual: !0
      }),
      DW = new AW(((WW, iW) => {
        let {
          next: OW
        } = WW;
        if (43 == OW || 45 == OW) {
          if (WW.advance(), OW == WW.next) {
            WW.advance();
            let OW = !iW.context && iW.canShift(1);
            WW.acceptToken(OW ? 1 : 2)
          }
        } else 63 == OW && 46 == WW.peek(1) && (WW.advance(), WW.advance(), (WW.next < 48 || WW.next > 57) && WW.acceptToken(3))
      }), {
        contextual: !0
      });

    function VW(WW, iW) {
      return WW >= 65 && WW <= 90 || WW >= 97 && WW <= 122 || 95 == WW || WW >= 192 || !iW && WW >= 48 && WW <= 57
    }
    const pW = new AW(((WW, iW) => {
        if (60 != WW.next || !iW.dialectEnabled(0)) return;
        if (WW.advance(), 47 == WW.next) return;
        let OW = 0;
        for (; oW.indexOf(WW.next) > -1;) WW.advance(), OW++;
        if (VW(WW.next, !0)) {
          for (WW.advance(), OW++; VW(WW.next, !1);) WW.advance(), OW++;
          for (; oW.indexOf(WW.next) > -1;) WW.advance(), OW++;
          if (44 == WW.next) return;
          for (let iW = 0;; iW++) {
            if (7 == iW) {
              if (!VW(WW.next, !0)) return;
              break
            }
            if (WW.next != "extends".charCodeAt(iW)) break;
            WW.advance(), OW++
          }
        }
        WW.acceptToken(4, -OW)
      })),
      fW = (0, uW.f)({
        "get set async static": uW.l.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": uW.l.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": uW.l.operatorKeyword,
        "let var const using function class extends": uW.l.definitionKeyword,
        "import export from": uW.l.moduleKeyword,
        "with debugger new": uW.l.keyword,
        TemplateString: uW.l.special(uW.l.string),
        super: uW.l.atom,
        BooleanLiteral: uW.l.bool,
        this: uW.l.self,
        null: uW.l.null,
        Star: uW.l.modifier,
        VariableName: uW.l.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": uW.l.function(uW.l.variableName),
        VariableDefinition: uW.l.definition(uW.l.variableName),
        Label: uW.l.labelName,
        PropertyName: uW.l.propertyName,
        PrivatePropertyName: uW.l.special(uW.l.propertyName),
        "CallExpression/MemberExpression/PropertyName": uW.l.function(uW.l.propertyName),
        "FunctionDeclaration/VariableDefinition": uW.l.function(uW.l.definition(uW.l.variableName)),
        "ClassDeclaration/VariableDefinition": uW.l.definition(uW.l.className),
        "NewExpression/VariableName": uW.l.className,
        PropertyDefinition: uW.l.definition(uW.l.propertyName),
        PrivatePropertyDefinition: uW.l.definition(uW.l.special(uW.l.propertyName)),
        UpdateOp: uW.l.updateOperator,
        "LineComment Hashbang": uW.l.lineComment,
        BlockComment: uW.l.blockComment,
        Number: uW.l.number,
        String: uW.l.string,
        Escape: uW.l.escape,
        ArithOp: uW.l.arithmeticOperator,
        LogicOp: uW.l.logicOperator,
        BitOp: uW.l.bitwiseOperator,
        CompareOp: uW.l.compareOperator,
        RegExp: uW.l.regexp,
        Equals: uW.l.definitionOperator,
        Arrow: uW.l.function(uW.l.punctuation),
        ": Spread": uW.l.punctuation,
        "( )": uW.l.paren,
        "[ ]": uW.l.squareBracket,
        "{ }": uW.l.brace,
        "InterpolationStart InterpolationEnd": uW.l.special(uW.l.brace),
        ".": uW.l.derefOperator,
        ", ;": uW.l.separator,
        "@": uW.l.meta,
        TypeName: uW.l.typeName,
        TypeDefinition: uW.l.definition(uW.l.typeName),
        "type enum interface implements namespace module declare": uW.l.definitionKeyword,
        "abstract global Privacy readonly override": uW.l.modifier,
        "is keyof unique infer asserts": uW.l.operatorKeyword,
        JSXAttributeValue: uW.l.attributeValue,
        JSXText: uW.l.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": uW.l.angleBracket,
        "JSXIdentifier JSXNameSpacedName": uW.l.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": uW.l.attributeName,
        "JSXBuiltin/JSXIdentifier": uW.l.standard(uW.l.tagName)
      }),
      CW = {
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
      XW = {
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
      BW = {
        __proto__: null,
        "<": 193
      },
      qW = hW.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: dW,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [fW],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [vW, gW, DW, pW, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, eW, new lW("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new lW("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: WW => CW[WW] || -1
        }, {
          term: 343,
          get: WW => XW[WW] || -1
        }, {
          term: 95,
          get: WW => BW[WW] || -1
        }],
        tokenPrec: 15201
      });
    var RW = OW(53522),
      GW = OW(53507),
      IW = OW(53511),
      aW = OW(53501);
    const rW = [(0, aW.y)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, aW.y)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, aW.y)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, aW.y)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, aW.y)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, aW.y)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, aW.y)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, aW.y)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, aW.y)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, aW.y)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, aW.y)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      zW = rW.concat([(0, aW.y)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, aW.y)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, aW.y)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      FW = new mW.q,
      QW = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function Wi(WW) {
      return (iW, OW) => {
        let mW = iW.node.getChild("VariableDefinition");
        return mW && OW(mW, WW), !0
      }
    }
    const ii = ["FunctionDeclaration"],
      Oi = {
        FunctionDeclaration: Wi("function"),
        ClassDeclaration: Wi("class"),
        ClassExpression: () => !0,
        EnumDeclaration: Wi("constant"),
        TypeAliasDeclaration: Wi("type"),
        NamespaceDeclaration: Wi("namespace"),
        VariableDefinition(WW, iW) {
          WW.matchContext(ii) || iW(WW, "variable")
        },
        TypeDefinition(WW, iW) {
          iW(WW, "type")
        },
        __proto__: null
      };

    function mi(WW, iW) {
      let OW = FW.get(iW);
      if (OW) return OW;
      let EW = [],
        NW = !0;

      function PW(iW, OW) {
        let mW = WW.sliceString(iW.from, iW.to);
        EW.push({
          label: mW,
          type: OW
        })
      }
      return iW.cursor(mW.h.IncludeAnonymous).iterate((iW => {
        if (NW) NW = !1;
        else if (iW.name) {
          let WW = Oi[iW.name];
          if (WW && WW(iW, PW) || QW.has(iW.name)) return !1
        } else if (iW.to - iW.from > 8192) {
          for (let OW of mi(WW, iW.node)) EW.push(OW);
          return !1
        }
      })), FW.set(iW, EW), EW
    }
    const Ei = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      Ni = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function Pi(WW) {
      let iW = (0, RW.hb)(WW.state).resolveInner(WW.pos, -1);
      if (Ni.indexOf(iW.name) > -1) return null;
      let OW = "VariableName" == iW.name || iW.to - iW.from < 20 && Ei.test(WW.state.sliceDoc(iW.from, iW.to));
      if (!OW && !WW.explicit) return null;
      let mW = [];
      for (let EW = iW; EW; EW = EW.parent) QW.has(EW.name) && (mW = mW.concat(mi(WW.state.doc, EW)));
      return {
        options: mW,
        from: OW ? iW.from : WW.pos,
        validFor: Ei
      }
    }
    const Li = RW.g.define({
        name: "javascript",
        parser: qW.configure({
          props: [RW.S.add({
            IfStatement: (0, RW.o)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, RW.o)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: RW.z,
            SwitchBody: WW => {
              let iW = WW.textAfter,
                OW = /^\s*\}/.test(iW),
                mW = /^\s*(case|default)\b/.test(iW);
              return WW.baseIndent + (OW ? 0 : mW ? 1 : 2) * WW.unit
            },
            Block: (0, RW.v)({
              closing: "}"
            }),
            ArrowFunction: WW => WW.baseIndent + WW.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, RW.o)({
              except: /^\s*{/
            }),
            JSXElement(WW) {
              let iW = /^\s*<\//.test(WW.textAfter);
              return WW.lineIndent(WW.node.from) + (iW ? 0 : WW.unit)
            },
            JSXEscape(WW) {
              let iW = /\s*\}/.test(WW.textAfter);
              return WW.lineIndent(WW.node.from) + (iW ? 0 : WW.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": WW => WW.column(WW.node.from) + WW.unit
          }), RW.H.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": RW.E,
            BlockComment: WW => ({
              from: WW.from + 2,
              to: WW.to - 2
            }),
            JSXElement(WW) {
              let iW = WW.firstChild;
              if (!iW || "JSXSelfClosingTag" == iW.name) return null;
              let OW = WW.lastChild;
              return {
                from: iW.to,
                to: OW.type.isError ? WW.to : OW.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(WW) {
              var iW;
              let OW = null === (iW = WW.firstChild) || void 0 === iW ? void 0 : iW.nextSibling,
                mW = WW.lastChild;
              return !OW || OW.type.isError ? null : {
                from: OW.to,
                to: mW.type.isError ? WW.to : mW.from
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
      ci = {
        test: WW => /^JSX/.test(WW.name),
        facet: (0, RW.t)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      wi = Li.configure({
        dialect: "ts"
      }, "typescript"),
      ti = Li.configure({
        dialect: "jsx",
        props: [RW._.add((WW => WW.isTop ? [ci] : void 0))]
      }),
      Zi = Li.configure({
        dialect: "jsx ts",
        props: [RW._.add((WW => WW.isTop ? [ci] : void 0))]
      }, "typescript");
    let xi = WW => ({
      label: WW,
      type: "keyword"
    });
    const li = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(xi),
      Ai = li.concat(["declare", "implements", "private", "protected", "public"].map(xi));

    function bi() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        iW = WW.jsx ? WW.typescript ? Zi : ti : WW.typescript ? wi : Li,
        OW = WW.typescript ? zW.concat(Ai) : rW.concat(li);
      return new RW.i(iW, [Li.data.of({
        autocomplete: (0, aW.u)(Ni, (0, aW.m)(OW))
      }), Li.data.of({
        autocomplete: Pi
      }), WW.jsx ? ki : []])
    }

    function ji(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WW.length;
      for (let mW = null === iW || void 0 === iW ? void 0 : iW.firstChild; mW; mW = mW.nextSibling)
        if ("JSXIdentifier" == mW.name || "JSXBuiltin" == mW.name || "JSXNamespacedName" == mW.name || "JSXMemberExpression" == mW.name) return WW.sliceString(mW.from, Math.min(mW.to, OW));
      return ""
    }
    const Ui = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      ki = IW.e.inputHandler.of(((WW, iW, OW, mW, EW) => {
        if ((Ui ? WW.composing : WW.compositionStarted) || WW.state.readOnly || iW != OW || ">" != mW && "/" != mW || !Li.isActiveAt(WW.state, iW, -1)) return !1;
        let NW = EW(),
          {
            state: PW
          } = NW,
          LW = PW.changeByRange((WW => {
            var iW;
            let OW, {
                head: EW
              } = WW,
              NW = (0, RW.hb)(PW).resolveInner(EW - 1, -1);
            if ("JSXStartTag" == NW.name && (NW = NW.parent), PW.doc.sliceString(EW - 1, EW) != mW || "JSXAttributeValue" == NW.name && NW.to > EW);
            else {
              if (">" == mW && "JSXFragmentTag" == NW.name) return {
                range: WW,
                changes: {
                  from: EW,
                  insert: "</>"
                }
              };
              if ("/" == mW && "JSXStartCloseTag" == NW.name) {
                let WW = NW.parent,
                  mW = WW.parent;
                if (mW && WW.from == EW - 2 && ((OW = ji(PW.doc, mW.firstChild, EW)) || "JSXFragmentTag" == (null === (iW = mW.firstChild) || void 0 === iW ? void 0 : iW.name))) {
                  let WW = `${OW}>`;
                  return {
                    range: GW.l.cursor(EW + WW.length, -1),
                    changes: {
                      from: EW,
                      insert: WW
                    }
                  }
                }
              } else if (">" == mW) {
                let iW = function(WW) {
                  for (;;) {
                    if ("JSXOpenTag" == WW.name || "JSXSelfClosingTag" == WW.name || "JSXFragmentTag" == WW.name) return WW;
                    if ("JSXEscape" == WW.name || !WW.parent) return null;
                    WW = WW.parent
                  }
                }(NW);
                if (iW && "JSXOpenTag" == iW.name && !/^\/?>|^<\//.test(PW.doc.sliceString(EW, EW + 2)) && (OW = ji(PW.doc, iW, EW))) return {
                  range: WW,
                  changes: {
                    from: EW,
                    insert: `</${OW}>`
                  }
                }
              }
            }
            return {
              range: WW
            }
          }));
        return !LW.changes.empty && (WW.dispatch([NW, PW.update(LW, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  53522: (WW, iW, OW) => {
    OW.d(iW, {
      C: () => ki,
      E: () => rW,
      F: () => wi,
      H: () => aW,
      K: () => UW,
      L: () => uW,
      O: () => dW,
      S: () => vW,
      T: () => GW,
      V: () => oW,
      X: () => nW,
      Y: () => qi,
      _: () => ZW,
      b: () => Mi,
      cb: () => yi,
      db: () => jW,
      e: () => eW,
      g: () => AW,
      hb: () => bW,
      i: () => hW,
      m: () => fi,
      o: () => qW,
      q: () => Hi,
      t: () => tW,
      v: () => CW,
      z: () => BW
    });
    var mW, EW = OW(53528),
      NW = OW(53507),
      PW = OW(53511),
      LW = OW(53532),
      cW = OW(53515);
    const wW = new EW.j;

    function tW(WW) {
      return NW.p.define({
        combine: WW ? iW => iW.concat(WW) : void 0
      })
    }
    const ZW = new EW.j;
    class xW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = WW, this.name = mW, NW.o.prototype.hasOwnProperty("tree") || Object.defineProperty(NW.o.prototype, "tree", {
          get() {
            return bW(this)
          }
        }), this.parser = iW, this.extension = [JW.of(this), NW.o.languageData.of(((WW, iW, OW) => {
          let mW = lW(WW, iW, OW),
            EW = mW.type.prop(wW);
          if (!EW) return [];
          let NW = WW.facet(EW),
            PW = mW.type.prop(ZW);
          if (PW) {
            let EW = mW.resolve(iW - mW.from, OW);
            for (let iW of PW)
              if (iW.test(EW, WW)) {
                let OW = WW.facet(iW.facet);
                return "replace" == iW.type ? OW : OW.concat(NW)
              }
          }
          return NW
        }))].concat(OW)
      }
      isActiveAt(WW, iW) {
        return lW(WW, iW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(wW) == this.data
      }
      findRegions(WW) {
        let iW = WW.facet(JW);
        if ((null === iW || void 0 === iW ? void 0 : iW.data) == this.data) return [{
          from: 0,
          to: WW.doc.length
        }];
        if (!iW || !iW.allowsNesting) return [];
        let OW = [],
          mW = (WW, iW) => {
            if (WW.prop(wW) == this.data) return void OW.push({
              from: iW,
              to: iW + WW.length
            });
            let NW = WW.prop(EW.j.mounted);
            if (NW) {
              if (NW.tree.prop(wW) == this.data) {
                if (NW.overlay)
                  for (let WW of NW.overlay) OW.push({
                    from: WW.from + iW,
                    to: WW.to + iW
                  });
                else OW.push({
                  from: iW,
                  to: iW + WW.length
                });
                return
              }
              if (NW.overlay) {
                let WW = OW.length;
                if (mW(NW.tree, NW.overlay[0].from + iW), OW.length > WW) return
              }
            }
            for (let OW = 0; OW < WW.children.length; OW++) {
              let NW = WW.children[OW];
              NW instanceof EW.v && mW(NW, WW.positions[OW] + iW)
            }
          };
        return mW(bW(WW), 0), OW
      }
      get allowsNesting() {
        return !0
      }
    }

    function lW(WW, iW, OW) {
      let mW = WW.facet(JW),
        NW = bW(WW).topNode;
      if (!mW || mW.allowsNesting)
        for (let PW = NW; PW; PW = PW.enter(iW, OW, EW.h.ExcludeBuffers | EW.h.EnterBracketed)) PW.type.isTop && (NW = PW);
      return NW
    }
    xW.setState = NW.H.define();
    class AW extends xW {
      constructor(WW, iW, OW) {
        super(WW, iW, [], OW), this.parser = iW
      }
      static define(WW) {
        let iW = tW(WW.languageData);
        return new AW(iW, WW.parser.configure({
          props: [wW.add((WW => WW.isTop ? iW : void 0))]
        }), WW.name)
      }
      configure(WW, iW) {
        return new AW(this.data, this.parser.configure(WW), iW || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function bW(WW) {
      let iW = WW.field(xW.state, !1);
      return iW ? iW.tree : EW.v.empty
    }

    function jW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW.doc.length;
      var OW;
      return (null === (OW = WW.field(xW.state, !1)) || void 0 === OW ? void 0 : OW.context.isDone(iW)) || !1
    }

    function UW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW.viewport.to,
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        mW = function(WW, iW) {
          let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var mW;
          let EW = null === (mW = WW.field(xW.state, !1)) || void 0 === mW ? void 0 : mW.context;
          if (!EW) return null;
          let NW = EW.viewport;
          EW.updateViewport({
            from: 0,
            to: iW
          });
          let PW = EW.isDone(iW) || EW.work(OW, iW) ? EW.tree : null;
          return EW.updateViewport(NW), PW
        }(WW.state, iW, OW);
      return mW != bW(WW.state) && WW.dispatch({}), !!mW
    }
    class kW {
      constructor(WW) {
        this.doc = WW, this.cursorPos = 0, this.string = "", this.cursor = WW.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(WW) {
        return this.string = this.cursor.next(WW - this.cursorPos).value, this.cursorPos = WW + this.string.length, this.cursorPos - this.string.length
      }
      chunk(WW) {
        return this.syncTo(WW), this.string
      }
      get lineChunks() {
        return !0
      }
      read(WW, iW) {
        let OW = this.cursorPos - this.string.length;
        return WW < OW || iW >= this.cursorPos ? this.doc.sliceString(WW, iW) : this.string.slice(WW - OW, iW - OW)
      }
    }
    let sW = null;
    class MW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          mW = arguments.length > 3 ? arguments[3] : void 0,
          EW = arguments.length > 4 ? arguments[4] : void 0,
          NW = arguments.length > 5 ? arguments[5] : void 0,
          PW = arguments.length > 6 ? arguments[6] : void 0,
          LW = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = WW, this.state = iW, this.fragments = OW, this.tree = mW, this.treeLen = EW, this.viewport = NW, this.skipped = PW, this.scheduleOn = LW, this.parse = null, this.tempSkipped = []
      }
      static create(WW, iW, OW) {
        return new MW(WW, iW, [], EW.v.empty, 0, OW, [], null)
      }
      startParse() {
        return this.parser.startParse(new kW(this.state.doc), this.fragments)
      }
      work(WW, iW) {
        return null != iW && iW >= this.state.doc.length && (iW = void 0), this.tree != EW.v.empty && this.isDone(null !== iW && void 0 !== iW ? iW : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var OW;
          if ("number" == typeof WW) {
            let iW = Date.now() + WW;
            WW = () => Date.now() > iW
          }
          for (this.parse || (this.parse = this.startParse()), null != iW && (null == this.parse.stoppedAt || this.parse.stoppedAt > iW) && iW < this.state.doc.length && this.parse.stopAt(iW);;) {
            let mW = this.parse.advance();
            if (mW) {
              if (this.fragments = this.withoutTempSkipped(EW.u.addTree(mW, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (OW = this.parse.stoppedAt) && void 0 !== OW ? OW : this.state.doc.length, this.tree = mW, this.parse = null, !(this.treeLen < (null !== iW && void 0 !== iW ? iW : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (WW()) return !1
          }
        }))
      }
      takeTree() {
        let WW, iW;
        this.parse && (WW = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > WW) && this.parse.stopAt(WW), this.withContext((() => {
          for (; !(iW = this.parse.advance()););
        })), this.treeLen = WW, this.tree = iW, this.fragments = this.withoutTempSkipped(EW.u.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(WW) {
        let iW = sW;
        sW = this;
        try {
          return WW()
        } finally {
          sW = iW
        }
      }
      withoutTempSkipped(WW) {
        for (let iW; iW = this.tempSkipped.pop();) WW = KW(WW, iW.from, iW.to);
        return WW
      }
      changes(WW, iW) {
        let {
          fragments: OW,
          tree: mW,
          treeLen: NW,
          viewport: PW,
          skipped: LW
        } = this;
        if (this.takeTree(), !WW.empty) {
          let iW = [];
          if (WW.iterChangedRanges(((WW, OW, mW, EW) => iW.push({
              fromA: WW,
              toA: OW,
              fromB: mW,
              toB: EW
            }))), OW = EW.u.applyChanges(OW, iW), mW = EW.v.empty, NW = 0, PW = {
              from: WW.mapPos(PW.from, -1),
              to: WW.mapPos(PW.to, 1)
            }, this.skipped.length) {
            LW = [];
            for (let iW of this.skipped) {
              let OW = WW.mapPos(iW.from, 1),
                mW = WW.mapPos(iW.to, -1);
              OW < mW && LW.push({
                from: OW,
                to: mW
              })
            }
          }
        }
        return new MW(this.parser, iW, OW, mW, NW, PW, LW, this.scheduleOn)
      }
      updateViewport(WW) {
        if (this.viewport.from == WW.from && this.viewport.to == WW.to) return !1;
        this.viewport = WW;
        let iW = this.skipped.length;
        for (let OW = 0; OW < this.skipped.length; OW++) {
          let {
            from: iW,
            to: mW
          } = this.skipped[OW];
          iW < WW.to && mW > WW.from && (this.fragments = KW(this.fragments, iW, mW), this.skipped.splice(OW--, 1))
        }
        return !(this.skipped.length >= iW) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(WW, iW) {
        this.skipped.push({
          from: WW,
          to: iW
        })
      }
      static getSkippingParser(WW) {
        return new class extends EW.s {
          createParse(iW, OW, mW) {
            let NW = mW[0].from,
              PW = mW[mW.length - 1].to;
            return {
              parsedPos: NW,
              advance() {
                let iW = sW;
                if (iW) {
                  for (let WW of mW) iW.tempSkipped.push(WW);
                  WW && (iW.scheduleOn = iW.scheduleOn ? Promise.all([iW.scheduleOn, WW]) : WW)
                }
                return this.parsedPos = PW, new EW.v(EW.n.none, [], [], PW - NW)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(WW) {
        WW = Math.min(WW, this.state.doc.length);
        let iW = this.fragments;
        return this.treeLen >= WW && iW.length && 0 == iW[0].from && iW[0].to >= WW
      }
      static get() {
        return sW
      }
    }

    function KW(WW, iW, OW) {
      return EW.u.applyChanges(WW, [{
        fromA: iW,
        toA: OW,
        fromB: iW,
        toB: OW
      }])
    }
    class SW {
      constructor(WW) {
        this.context = WW, this.tree = WW.tree
      }
      apply(WW) {
        if (!WW.docChanged && this.tree == this.context.tree) return this;
        let iW = this.context.changes(WW.changes, WW.state),
          OW = this.context.treeLen == WW.startState.doc.length ? void 0 : Math.max(WW.changes.mapPos(this.context.treeLen), iW.viewport.to);
        return iW.work(20, OW) || iW.takeTree(), new SW(iW)
      }
      static init(WW) {
        let iW = Math.min(3e3, WW.doc.length),
          OW = MW.create(WW.facet(JW).parser, WW, {
            from: 0,
            to: iW
          });
        return OW.work(20, iW) || OW.takeTree(), new SW(OW)
      }
    }
    xW.state = NW.L.define({
      create: SW.init,
      update(WW, iW) {
        for (let OW of iW.effects)
          if (OW.is(xW.setState)) return OW.value;
        return iW.startState.facet(JW) != iW.state.facet(JW) ? SW.init(iW.state) : WW.apply(iW)
      }
    });
    let YW = WW => {
      let iW = setTimeout((() => WW()), 500);
      return () => clearTimeout(iW)
    };
    "undefined" != typeof requestIdleCallback && (YW = WW => {
      let iW = -1,
        OW = setTimeout((() => {
          iW = requestIdleCallback(WW, {
            timeout: 400
          })
        }), 100);
      return () => iW < 0 ? clearTimeout(OW) : cancelIdleCallback(iW)
    });
    const yW = "undefined" != typeof navigator && (null === (mW = navigator.scheduling) || void 0 === mW ? void 0 : mW.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      TW = PW.i.fromClass(class {
        constructor(WW) {
          this.view = WW, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(WW) {
          let iW = this.view.state.field(xW.state).context;
          (iW.updateViewport(WW.view.viewport) || this.view.viewport.to > iW.treeLen) && this.scheduleWork(), (WW.docChanged || WW.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(iW)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: WW
          } = this.view, iW = WW.field(xW.state);
          iW.tree == iW.context.tree && iW.context.isDone(WW.doc.length) || (this.working = YW(this.work))
        }
        work(WW) {
          this.working = null;
          let iW = Date.now();
          if (this.chunkEnd < iW && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = iW + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: OW,
            viewport: {
              to: mW
            }
          } = this.view, EW = OW.field(xW.state);
          if (EW.tree == EW.context.tree && EW.context.isDone(mW + 1e5)) return;
          let NW = Date.now() + Math.min(this.chunkBudget, 100, WW && !yW ? Math.max(25, WW.timeRemaining() - 5) : 1e9),
            PW = EW.context.treeLen < mW && OW.doc.length > mW + 1e3,
            LW = EW.context.work((() => yW && yW() || Date.now() > NW), mW + (PW ? 0 : 1e5));
          this.chunkBudget -= Date.now() - iW, (LW || this.chunkBudget <= 0) && (EW.context.takeTree(), this.view.dispatch({
            effects: xW.setState.of(new SW(EW.context))
          })), this.chunkBudget > 0 && (!LW || PW) && this.scheduleWork(), this.checkAsyncSchedule(EW.context)
        }
        checkAsyncSchedule(WW) {
          WW.scheduleOn && (this.workScheduled++, WW.scheduleOn.then((() => this.scheduleWork())).catch((WW => (0, PW.L)(this.view.state, WW))).then((() => this.workScheduled--)), WW.scheduleOn = null)
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
      JW = NW.p.define({
        combine: WW => WW.length ? WW[0] : null,
        enables: WW => [xW.state, TW, PW.e.contentAttributes.compute([WW], (iW => {
          let OW = iW.facet(WW);
          return OW && OW.name ? {
            "data-language": OW.name
          } : {}
        }))]
      });
    class hW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = WW, this.support = iW, this.extension = [WW, iW]
      }
    }
    const HW = NW.p.define(),
      nW = NW.p.define({
        combine: WW => {
          if (!WW.length) return "  ";
          let iW = WW[0];
          if (!iW || /\S/.test(iW) || Array.from(iW).some((WW => WW != iW[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(WW[0]));
          return iW
        }
      });

    function uW(WW) {
      let iW = WW.facet(nW);
      return 9 == iW.charCodeAt(0) ? WW.tabSize * iW.length : iW.length
    }

    function oW(WW, iW) {
      let OW = "",
        mW = WW.tabSize,
        EW = WW.facet(nW)[0];
      if ("\t" == EW) {
        for (; iW >= mW;) OW += "\t", iW -= mW;
        EW = " "
      }
      for (let NW = 0; NW < iW; NW++) OW += EW;
      return OW
    }

    function dW(WW, iW) {
      WW instanceof NW.o && (WW = new eW(WW));
      for (let mW of WW.state.facet(HW)) {
        let OW = mW(WW, iW);
        if (void 0 !== OW) return OW
      }
      let OW = bW(WW.state);
      return OW.length >= iW ? function(WW, iW, OW) {
        let mW = iW.resolveStack(OW),
          EW = iW.resolveInner(OW, -1).resolve(OW, 0).enterUnfinishedNodesBefore(OW);
        if (EW != mW.node) {
          let WW = [];
          for (let iW = EW; iW && !(iW.from < mW.node.from || iW.to > mW.node.to || iW.from == mW.node.from && iW.type == mW.node.type); iW = iW.parent) WW.push(iW);
          for (let iW = WW.length - 1; iW >= 0; iW--) mW = {
            node: WW[iW],
            next: mW
          }
        }
        return gW(mW, WW, OW)
      }(WW, OW, iW) : null
    }
    class eW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = WW, this.options = iW, this.unit = uW(WW)
      }
      lineAt(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          OW = this.state.doc.lineAt(WW),
          {
            simulateBreak: mW,
            simulateDoubleBreak: EW
          } = this.options;
        return null != mW && mW >= OW.from && mW <= OW.to ? EW && mW == WW ? {
          text: "",
          from: WW
        } : (iW < 0 ? mW < WW : mW <= WW) ? {
          text: OW.text.slice(mW - OW.from),
          from: mW
        } : {
          text: OW.text.slice(0, mW - OW.from),
          from: OW.from
        } : OW
      }
      textAfterPos(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && WW == this.options.simulateBreak) return "";
        let {
          text: OW,
          from: mW
        } = this.lineAt(WW, iW);
        return OW.slice(WW - mW, Math.min(OW.length, WW + 100 - mW))
      }
      column(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: OW,
            from: mW
          } = this.lineAt(WW, iW),
          EW = this.countColumn(OW, WW - mW),
          NW = this.options.overrideIndentation ? this.options.overrideIndentation(mW) : -1;
        return NW > -1 && (EW += NW - this.countColumn(OW, OW.search(/\S|$/))), EW
      }
      countColumn(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW.length;
        return (0, NW.X)(WW, this.state.tabSize, iW)
      }
      lineIndent(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: OW,
            from: mW
          } = this.lineAt(WW, iW),
          EW = this.options.overrideIndentation;
        if (EW) {
          let WW = EW(mW);
          if (WW > -1) return WW
        }
        return this.countColumn(OW, OW.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const vW = new EW.j;

    function gW(WW, iW, OW) {
      for (let mW = WW; mW; mW = mW.next) {
        let WW = DW(mW.node);
        if (WW) return WW(pW.create(iW, OW, mW))
      }
      return 0
    }

    function DW(WW) {
      let iW = WW.type.prop(vW);
      if (iW) return iW;
      let OW, mW = WW.firstChild;
      if (mW && (OW = mW.type.prop(EW.j.closedBy))) {
        let iW = WW.lastChild,
          mW = iW && OW.indexOf(iW.name) > -1;
        return WW => XW(WW, !0, 1, void 0, mW && ! function(WW) {
          return WW.pos == WW.options.simulateBreak && WW.options.simulateDoubleBreak
        }(WW) ? iW.from : void 0)
      }
      return null == WW.parent ? VW : null
    }

    function VW() {
      return 0
    }
    class pW extends eW {
      constructor(WW, iW, OW) {
        super(WW.state, WW.options), this.base = WW, this.pos = iW, this.context = OW
      }
      get node() {
        return this.context.node
      }
      static create(WW, iW, OW) {
        return new pW(WW, iW, OW)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(WW) {
        let iW = this.state.doc.lineAt(WW.from);
        for (;;) {
          let OW = WW.resolve(iW.from);
          for (; OW.parent && OW.parent.from == OW.from;) OW = OW.parent;
          if (fW(OW, WW)) break;
          iW = this.state.doc.lineAt(OW.from)
        }
        return this.lineIndent(iW.from)
      }
      continue () {
        return gW(this.context.next, this.base, this.pos)
      }
    }

    function fW(WW, iW) {
      for (let OW = iW; OW; OW = OW.parent)
        if (WW == OW) return !0;
      return !1
    }

    function CW(WW) {
      let {
        closing: iW,
        align: OW = !0,
        units: mW = 1
      } = WW;
      return WW => XW(WW, OW, mW, iW)
    }

    function XW(WW, iW, OW, mW, EW) {
      let NW = WW.textAfter,
        PW = NW.match(/^\s*/)[0].length,
        LW = mW && NW.slice(PW, PW + mW.length) == mW || EW == WW.pos + PW,
        cW = iW ? function(WW) {
          let iW = WW.node,
            OW = iW.childAfter(iW.from),
            mW = iW.lastChild;
          if (!OW) return null;
          let EW = WW.options.simulateBreak,
            NW = WW.state.doc.lineAt(OW.from),
            PW = null == EW || EW <= NW.from ? NW.to : Math.min(NW.to, EW);
          for (let LW = OW.to;;) {
            let WW = iW.childAfter(LW);
            if (!WW || WW == mW) return null;
            if (!WW.type.isSkipped) {
              if (WW.from >= PW) return null;
              let iW = /^ */.exec(NW.text.slice(OW.to - NW.from))[0].length;
              return {
                from: OW.from,
                to: OW.to + iW
              }
            }
            LW = WW.to
          }
        }(WW) : null;
      return cW ? LW ? WW.column(cW.from) : WW.column(cW.to) : WW.baseIndent + (LW ? 0 : WW.unit * OW)
    }
    const BW = WW => WW.baseIndent;

    function qW() {
      let {
        except: WW,
        units: iW = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return OW => {
        let mW = WW && WW.test(OW.textAfter);
        return OW.baseIndent + (mW ? 0 : iW * OW.unit)
      }
    }
    const RW = 200;

    function GW() {
      return NW.o.transactionFilter.of((WW => {
        if (!WW.docChanged || !WW.isUserEvent("input.type") && !WW.isUserEvent("input.complete")) return WW;
        let iW = WW.startState.languageDataAt("indentOnInput", WW.startState.selection.main.head);
        if (!iW.length) return WW;
        let OW = WW.newDoc,
          {
            head: mW
          } = WW.newSelection.main,
          EW = OW.lineAt(mW);
        if (mW > EW.from + RW) return WW;
        let NW = OW.sliceString(EW.from, mW);
        if (!iW.some((WW => WW.test(NW)))) return WW;
        let {
          state: PW
        } = WW, LW = -1, cW = [];
        for (let {
            head: wW
          }
          of PW.selection.kj) {
          let WW = PW.doc.lineAt(wW);
          if (WW.from == LW) continue;
          LW = WW.from;
          let iW = dW(PW, WW.from);
          if (null == iW) continue;
          let OW = /^\s*/.exec(WW.text)[0],
            mW = oW(PW, iW);
          OW != mW && cW.push({
            from: WW.from,
            to: WW.from + OW.length,
            insert: mW
          })
        }
        return cW.length ? [WW, {
          changes: cW,
          sequential: !0
        }] : WW
      }))
    }
    const IW = NW.p.define(),
      aW = new EW.j;

    function rW(WW) {
      let iW = WW.firstChild,
        OW = WW.lastChild;
      return iW && iW.to < OW.from ? {
        from: iW.to,
        to: OW.type.isError ? WW.to : OW.from
      } : null
    }

    function zW(WW) {
      let iW = WW.lastChild;
      return iW && iW.to == WW.to && iW.type.isError
    }

    function FW(WW, iW, OW) {
      for (let mW of WW.facet(IW)) {
        let EW = mW(WW, iW, OW);
        if (EW) return EW
      }
      return function(WW, iW, OW) {
        let mW = bW(WW);
        if (mW.length < OW) return null;
        let EW = null;
        for (let NW = mW.resolveStack(OW, 1); NW; NW = NW.next) {
          let PW = NW.node;
          if (PW.to <= OW || PW.from > OW) continue;
          if (EW && PW.from < iW) break;
          let LW = PW.type.prop(aW);
          if (LW && (PW.to < mW.length - 50 || mW.length == WW.doc.length || !zW(PW))) {
            let mW = LW(PW, WW);
            mW && mW.from <= OW && mW.from >= iW && mW.to > OW && (EW = mW)
          }
        }
        return EW
      }(WW, iW, OW)
    }

    function QW(WW, iW) {
      let OW = iW.mapPos(WW.from, 1),
        mW = iW.mapPos(WW.to, -1);
      return OW >= mW ? void 0 : {
        from: OW,
        to: mW
      }
    }
    const Wi = NW.H.define({
        map: QW
      }),
      ii = NW.H.define({
        map: QW
      });

    function Oi(WW) {
      let iW = [];
      for (let {
          head: OW
        }
        of WW.state.selection.kj) iW.some((WW => WW.from <= OW && WW.to >= OW)) || iW.push(WW.lineBlockAt(OW));
      return iW
    }
    const mi = NW.L.define({
      create: () => PW.c.none,
      update(WW, iW) {
        iW.isUserEvent("delete") && iW.changes.iterChangedRanges(((iW, OW) => WW = Ei(WW, iW, OW))), WW = WW.map(iW.changes);
        for (let OW of iW.effects)
          if (OW.is(Wi) && !Pi(WW, OW.value.from, OW.value.to)) {
            let {
              preparePlaceholder: mW
            } = iW.state.facet(Zi), EW = mW ? PW.c.replace({
              widget: new bi(mW(iW.state, OW.value))
            }) : Ai;
            WW = WW.update({
              add: [EW.range(OW.value.from, OW.value.to)]
            })
          } else OW.is(ii) && (WW = WW.update({
            filter: (WW, iW) => OW.value.from != WW || OW.value.to != iW,
            filterFrom: OW.value.from,
            filterTo: OW.value.to
          }));
        return iW.selection && (WW = Ei(WW, iW.selection.main.head)), WW
      },
      provide: WW => PW.e.Km.from(WW),
      toJSON(WW, iW) {
        let OW = [];
        return WW.between(0, iW.doc.length, ((WW, iW) => {
          OW.push(WW, iW)
        })), OW
      },
      fromJSON(WW) {
        if (!Array.isArray(WW) || WW.length % 2) throw new RangeError("Invalid JSON for fold state");
        let iW = [];
        for (let OW = 0; OW < WW.length;) {
          let mW = WW[OW++],
            EW = WW[OW++];
          if ("number" != typeof mW || "number" != typeof EW) throw new RangeError("Invalid JSON for fold state");
          iW.push(Ai.range(mW, EW))
        }
        return PW.c.set(iW, !0)
      }
    });

    function Ei(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iW,
        mW = !1;
      return WW.between(iW, OW, ((WW, EW) => {
        WW < OW && EW > iW && (mW = !0)
      })), mW ? WW.update({
        filterFrom: iW,
        filterTo: OW,
        filter: (WW, mW) => WW >= OW || mW <= iW
      }) : WW
    }

    function Ni(WW, iW, OW) {
      var mW;
      let EW = null;
      return null === (mW = WW.field(mi, !1)) || void 0 === mW || mW.between(iW, OW, ((WW, iW) => {
        (!EW || EW.from > WW) && (EW = {
          from: WW,
          to: iW
        })
      })), EW
    }

    function Pi(WW, iW, OW) {
      let mW = !1;
      return WW.between(iW, iW, ((WW, EW) => {
        WW == iW && EW == OW && (mW = !0)
      })), mW
    }

    function Li(WW, iW) {
      return WW.field(mi, !1) ? iW : iW.concat(NW.H.appendConfig.of(xi()))
    }

    function ci(WW, iW) {
      let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        mW = WW.state.doc.lineAt(iW.from).number,
        EW = WW.state.doc.lineAt(iW.to).number;
      return PW.e.announce.of(`${WW.state.phrase(OW?"Folded lines":"Unfolded lines")} ${mW} ${WW.state.phrase("to")} ${EW}.`)
    }
    const wi = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: WW => {
          for (let iW of Oi(WW)) {
            let OW = FW(WW.state, iW.from, iW.to);
            if (OW) return WW.dispatch({
              effects: Li(WW.state, [Wi.of(OW), ci(WW, OW)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: WW => {
          if (!WW.state.field(mi, !1)) return !1;
          let iW = [];
          for (let OW of Oi(WW)) {
            let mW = Ni(WW.state, OW.from, OW.to);
            mW && iW.push(ii.of(mW), ci(WW, mW, !1))
          }
          return iW.length && WW.dispatch({
            effects: iW
          }), iW.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: WW => {
          let {
            state: iW
          } = WW, OW = [];
          for (let mW = 0; mW < iW.doc.length;) {
            let EW = WW.lineBlockAt(mW),
              NW = FW(iW, EW.from, EW.to);
            NW && OW.push(Wi.of(NW)), mW = (NW ? WW.lineBlockAt(NW.to) : EW).to + 1
          }
          return OW.length && WW.dispatch({
            effects: Li(WW.state, OW)
          }), !!OW.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: WW => {
          let iW = WW.state.field(mi, !1);
          if (!iW || !iW.size) return !1;
          let OW = [];
          return iW.between(0, WW.state.doc.length, ((WW, iW) => {
            OW.push(ii.of({
              from: WW,
              to: iW
            }))
          })), WW.dispatch({
            effects: OW
          }), !0
        }
      }],
      ti = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      Zi = NW.p.define({
        combine: WW => (0, NW.U)(WW, ti)
      });

    function xi(WW) {
      let iW = [mi, si];
      return WW && iW.push(Zi.of(WW)), iW
    }

    function li(WW, iW) {
      let {
        state: OW
      } = WW, mW = OW.facet(Zi), EW = iW => {
        let OW = WW.lineBlockAt(WW.posAtDOM(iW.target)),
          mW = Ni(WW.state, OW.from, OW.to);
        mW && WW.dispatch({
          effects: ii.of(mW)
        }), iW.preventDefault()
      };
      if (mW.placeholderDOM) return mW.placeholderDOM(WW, EW, iW);
      let NW = document.createElement("span");
      return NW.textContent = mW.placeholderText, NW.setAttribute("aria-label", OW.phrase("folded code")), NW.title = OW.phrase("unfold"), NW.className = "cm-foldPlaceholder", NW.onclick = EW, NW
    }
    const Ai = PW.c.replace({
      widget: new class extends PW.j {
        toDOM(WW) {
          return li(WW, null)
        }
      }
    });
    class bi extends PW.j {
      constructor(WW) {
        super(), this.value = WW
      }
      eq(WW) {
        return this.value == WW.value
      }
      toDOM(WW) {
        return li(WW, this.value)
      }
    }
    const ji = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class Ui extends PW.f {
      constructor(WW, iW) {
        super(), this.config = WW, this.open = iW
      }
      eq(WW) {
        return this.config == WW.config && this.open == WW.open
      }
      toDOM(WW) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let iW = document.createElement("span");
        return iW.textContent = this.open ? this.config.openText : this.config.closedText, iW.title = WW.state.phrase(this.open ? "Fold line" : "Unfold line"), iW
      }
    }

    function ki() {
      let WW = {
          ...ji,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        iW = new Ui(WW, !0),
        OW = new Ui(WW, !1),
        mW = PW.i.fromClass(class {
          constructor(WW) {
            this.from = WW.viewport.from, this.markers = this.buildMarkers(WW)
          }
          update(iW) {
            (iW.docChanged || iW.viewportChanged || iW.startState.facet(JW) != iW.state.facet(JW) || iW.startState.field(mi, !1) != iW.state.field(mi, !1) || bW(iW.startState) != bW(iW.state) || WW.foldingChanged(iW)) && (this.markers = this.buildMarkers(iW.view))
          }
          buildMarkers(WW) {
            let mW = new NW.A;
            for (let EW of WW.viewportLineBlocks) {
              let NW = Ni(WW.state, EW.from, EW.to) ? OW : FW(WW.state, EW.from, EW.to) ? iW : null;
              NW && mW.add(EW.from, EW.from, NW)
            }
            return mW.finish()
          }
        }),
        {
          domEventHandlers: EW
        } = WW;
      return [mW, (0, PW.y)({
        class: "cm-foldGutter",
        markers(WW) {
          var iW;
          return (null === (iW = WW.plugin(mW)) || void 0 === iW ? void 0 : iW.markers) || NW.C.empty
        },
        initialSpacer: () => new Ui(WW, !1),
        domEventHandlers: {
          ...EW,
          click: (WW, iW, OW) => {
            if (EW.click && EW.click(WW, iW, OW)) return !0;
            let mW = Ni(WW.state, iW.from, iW.to);
            if (mW) return WW.dispatch({
              effects: ii.of(mW)
            }), !0;
            let NW = FW(WW.state, iW.from, iW.to);
            return !!NW && (WW.dispatch({
              effects: Wi.of(NW)
            }), !0)
          }
        }
      }), xi()]
    }
    const si = PW.e.baseTheme({
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
    class Mi {
      constructor(WW, iW) {
        let OW;

        function mW(WW) {
          let iW = cW.c.newName();
          return (OW || (OW = Object.create(null)))["." + iW] = WW, iW
        }
        this.specs = WW;
        const EW = "string" == typeof iW.all ? iW.all : iW.all ? mW(iW.all) : void 0,
          NW = iW.scope;
        this.scope = NW instanceof xW ? WW => WW.prop(wW) == NW.data : NW ? WW => WW == NW : void 0, this.style = (0, LW.i)(WW.map((WW => ({
          tag: WW.tag,
          class: WW.class || mW(Object.assign({}, WW, {
            tag: null
          }))
        }))), {
          all: EW
        }).style, this.module = OW ? new cW.c(OW) : null, this.themeType = iW.themeType
      }
      static define(WW, iW) {
        return new Mi(WW, iW || {})
      }
    }
    const Ki = NW.p.define(),
      Si = NW.p.define({
        combine: WW => WW.length ? [WW[0]] : null
      });

    function Yi(WW) {
      let iW = WW.facet(Ki);
      return iW.length ? iW : WW.facet(Si)
    }

    function yi(WW, iW) {
      let OW, mW = [Ji];
      return WW instanceof Mi && (WW.module && mW.push(PW.e.styleModule.of(WW.module)), OW = WW.themeType), (null === iW || void 0 === iW ? void 0 : iW.fallback) ? mW.push(Si.of(WW)) : OW ? mW.push(Ki.computeN([PW.e.darkTheme], (iW => iW.facet(PW.e.darkTheme) == ("dark" == OW) ? [WW] : []))) : mW.push(Ki.of(WW)), mW
    }
    class Ti {
      constructor(WW) {
        this.markCache = Object.create(null), this.tree = bW(WW.state), this.Km = this.buildDeco(WW, Yi(WW.state)), this.decoratedTo = WW.viewport.to
      }
      update(WW) {
        let iW = bW(WW.state),
          OW = Yi(WW.state),
          mW = OW != Yi(WW.startState),
          {
            viewport: EW
          } = WW.view,
          NW = WW.changes.mapPos(this.decoratedTo, 1);
        iW.length < EW.to && !mW && iW.type == this.tree.type && NW >= EW.to ? (this.Km = this.Km.map(WW.changes), this.decoratedTo = NW) : (iW != this.tree || WW.viewportChanged || mW) && (this.tree = iW, this.Km = this.buildDeco(WW.view, OW), this.decoratedTo = EW.to)
      }
      buildDeco(WW, iW) {
        if (!iW || !this.tree.length) return PW.c.none;
        let OW = new NW.A;
        for (let {
            from: mW,
            to: EW
          }
          of WW.jWW)(0, LW.d)(this.tree, iW, ((WW, iW, mW) => {
          OW.add(WW, iW, this.markCache[mW] || (this.markCache[mW] = PW.c.mark({
            class: mW
          })))
        }), mW, EW);
        return OW.finish()
      }
    }
    const Ji = NW.w.high(PW.i.fromClass(Ti, {
        Km: WW => WW.Km
      })),
      Hi = Mi.define([{
        tag: LW.l.meta,
        color: "#404740"
      }, {
        tag: LW.l.link,
        textDecoration: "underline"
      }, {
        tag: LW.l.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: LW.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: LW.l.strong,
        fontWeight: "bold"
      }, {
        tag: LW.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: LW.l.keyword,
        color: "#708"
      }, {
        tag: [LW.l.atom, LW.l.bool, LW.l.url, LW.l.contentSeparator, LW.l.labelName],
        color: "#219"
      }, {
        tag: [LW.l.literal, LW.l.inserted],
        color: "#164"
      }, {
        tag: [LW.l.string, LW.l.deleted],
        color: "#a11"
      }, {
        tag: [LW.l.regexp, LW.l.escape, LW.l.special(LW.l.string)],
        color: "#e40"
      }, {
        tag: LW.l.definition(LW.l.variableName),
        color: "#00f"
      }, {
        tag: LW.l.local(LW.l.variableName),
        color: "#30a"
      }, {
        tag: [LW.l.typeName, LW.l.namespace],
        color: "#085"
      }, {
        tag: LW.l.className,
        color: "#167"
      }, {
        tag: [LW.l.special(LW.l.variableName), LW.l.macroName],
        color: "#256"
      }, {
        tag: LW.l.definition(LW.l.propertyName),
        color: "#00c"
      }, {
        tag: LW.l.comment,
        color: "#940"
      }, {
        tag: LW.l.invalid,
        color: "#f00"
      }]),
      ni = PW.e.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      ui = 1e4,
      oi = "()[]{}",
      di = NW.p.define({
        combine: WW => (0, NW.U)(WW, {
          afterCursor: !0,
          brackets: oi,
          maxScanDistance: ui,
          renderMatch: gi
        })
      }),
      ei = PW.c.mark({
        class: "cm-matchingBracket"
      }),
      vi = PW.c.mark({
        class: "cm-nonmatchingBracket"
      });

    function gi(WW) {
      let iW = [],
        OW = WW.matched ? ei : vi;
      return iW.push(OW.range(WW.start.from, WW.start.to)), WW.end && iW.push(OW.range(WW.end.from, WW.end.to)), iW
    }

    function Di(WW) {
      let iW = [],
        OW = WW.facet(di);
      for (let mW of WW.selection.kj) {
        if (!mW.empty) continue;
        let EW = qi(WW, mW.head, -1, OW) || mW.head > 0 && qi(WW, mW.head - 1, 1, OW) || OW.afterCursor && (qi(WW, mW.head, 1, OW) || mW.head < WW.doc.length && qi(WW, mW.head + 1, -1, OW));
        EW && (iW = iW.concat(OW.renderMatch(EW, WW)))
      }
      return PW.c.set(iW, !0)
    }
    const Vi = [PW.i.fromClass(class {
      constructor(WW) {
        this.paused = !1, this.Km = Di(WW.state)
      }
      update(WW) {
        (WW.docChanged || WW.selectionSet || this.paused) && (WW.view.composing ? (this.Km = this.Km.map(WW.changes), this.paused = !0) : (this.Km = Di(WW.state), this.paused = !1))
      }
    }, {
      Km: WW => WW.Km
    }), ni];

    function fi() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [di.of(WW), Vi]
    }
    const Ci = new EW.j;

    function Xi(WW, iW, OW) {
      let mW = WW.prop(iW < 0 ? EW.j.openedBy : EW.j.closedBy);
      if (mW) return mW;
      if (1 == WW.name.length) {
        let mW = OW.indexOf(WW.name);
        if (mW > -1 && mW % 2 == (iW < 0 ? 1 : 0)) return [OW[mW + iW]]
      }
      return null
    }

    function Bi(WW) {
      let iW = WW.type.prop(Ci);
      return iW ? iW(WW.node) : WW
    }

    function qi(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        EW = mW.maxScanDistance || ui,
        NW = mW.brackets || oi,
        PW = bW(WW),
        LW = PW.resolveInner(iW, OW);
      for (let cW = LW; cW; cW = cW.parent) {
        let mW = Xi(cW.type, OW, NW);
        if (mW && cW.from < cW.to) {
          let EW = Bi(cW);
          if (EW && (OW > 0 ? iW >= EW.from && iW < EW.to : iW > EW.from && iW <= EW.to)) return Ri(WW, iW, OW, cW, EW, mW, NW)
        }
      }
      return function(WW, iW, OW, mW, EW, NW, PW) {
        if (OW < 0 ? !iW : iW == WW.doc.length) return null;
        let LW = OW < 0 ? WW.sliceDoc(iW - 1, iW) : WW.sliceDoc(iW, iW + 1),
          cW = PW.indexOf(LW);
        if (cW < 0 || cW % 2 == 0 != OW > 0) return null;
        let wW = {
            from: OW < 0 ? iW - 1 : iW,
            to: OW > 0 ? iW + 1 : iW
          },
          tW = WW.doc.iterRange(iW, OW > 0 ? WW.doc.length : 0),
          ZW = 0;
        for (let xW = 0; !tW.next().done && xW <= NW;) {
          let WW = tW.value;
          OW < 0 && (xW += WW.length);
          let NW = iW + xW * OW;
          for (let iW = OW > 0 ? 0 : WW.length - 1, LW = OW > 0 ? WW.length : -1; iW != LW; iW += OW) {
            let LW = PW.indexOf(WW[iW]);
            if (!(LW < 0 || mW.resolveInner(NW + iW, 1).type != EW))
              if (LW % 2 == 0 == OW > 0) ZW++;
              else {
                if (1 == ZW) return {
                  start: wW,
                  end: {
                    from: NW + iW,
                    to: NW + iW + 1
                  },
                  matched: LW >> 1 == cW >> 1
                };
                ZW--
              }
          }
          OW > 0 && (xW += WW.length)
        }
        return tW.done ? {
          start: wW,
          matched: !1
        } : null
      }(WW, iW, OW, PW, LW.type, EW, NW)
    }

    function Ri(WW, iW, OW, mW, EW, NW, PW) {
      let LW = mW.parent,
        cW = {
          from: EW.from,
          to: EW.to
        },
        wW = 0,
        tW = null === LW || void 0 === LW ? void 0 : LW.cursor();
      if (tW && (OW < 0 ? tW.childBefore(mW.from) : tW.childAfter(mW.to)))
        do {
          if (OW < 0 ? tW.to <= mW.from : tW.from >= mW.to) {
            if (0 == wW && NW.indexOf(tW.type.name) > -1 && tW.from < tW.to) {
              let WW = Bi(tW);
              return {
                start: cW,
                end: WW ? {
                  from: WW.from,
                  to: WW.to
                } : void 0,
                matched: !0
              }
            }
            if (Xi(tW.type, OW, PW)) wW++;
            else if (Xi(tW.type, -OW, PW)) {
              if (0 == wW) {
                let WW = Bi(tW);
                return {
                  start: cW,
                  end: WW && WW.from < WW.to ? {
                    from: WW.from,
                    to: WW.to
                  } : void 0,
                  matched: !1
                }
              }
              wW--
            }
          }
        } while (OW < 0 ? tW.prevSibling() : tW.nextSibling());
      return {
        start: cW,
        matched: !1
      }
    }
    const Gi = Object.create(null),
      Ii = [EW.n.none],
      ai = [],
      ri = Object.create(null),
      zi = Object.create(null);
    for (let [WO, iO] of [
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
      ]) zi[WO] = Qi(Gi, iO);

    function Fi(WW, iW) {
      ai.indexOf(WW) > -1 || (ai.push(WW), console.warn(iW))
    }

    function Qi(WW, iW) {
      let OW = [];
      for (let EW of iW.split(" ")) {
        let iW = [];
        for (let OW of EW.split(".")) {
          let mW = WW[OW] || LW.l[OW];
          mW ? "function" == typeof mW ? iW.length ? iW = iW.map(mW) : Fi(OW, `Modifier ${OW} used at start of tag`) : iW.length ? Fi(OW, `Tag ${OW} used as modifier`) : iW = Array.isArray(mW) ? mW : [mW] : Fi(OW, `Unknown highlighting tag ${OW}`)
        }
        for (let WW of iW) OW.push(WW)
      }
      if (!OW.length) return 0;
      let mW = iW.replace(/ /g, "_"),
        NW = mW + " " + OW.map((WW => WW.id)),
        PW = ri[NW];
      if (PW) return PW.id;
      let cW = ri[NW] = EW.n.define({
        id: Ii.length,
        name: mW,
        props: [(0, LW.f)({
          [mW]: OW
        })]
      });
      return Ii.push(cW), cW.id
    }
    PW.d.RTL, PW.d.LTR
  },
  53557: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => sW,
      h: () => YW
    });
    var mW = OW(53511),
      EW = OW(53507),
      NW = OW(53517);
    class PW {
      constructor(WW, iW, OW) {
        this.from = WW, this.to = iW, this.diagnostic = OW
      }
    }
    class LW {
      constructor(WW, iW, OW) {
        this.diagnostics = WW, this.panel = iW, this.selected = OW
      }
      static init(WW, iW, OW) {
        let NW = OW.facet(KW).markerFilter;
        NW && (WW = NW(WW, OW));
        let PW = WW.slice().sort(((WW, iW) => WW.from - iW.from || WW.to - iW.to)),
          wW = new EW.A,
          tW = [],
          ZW = 0,
          xW = OW.doc.iter(),
          lW = 0,
          AW = OW.doc.length;
        for (let EW = 0;;) {
          let WW, iW, OW = EW == PW.length ? null : PW[EW];
          if (!OW && !tW.length) break;
          if (tW.length) WW = ZW, iW = tW.reduce(((WW, iW) => Math.min(WW, iW.to)), OW && OW.from > WW ? OW.from : 1e8);
          else {
            if (WW = OW.from, WW > AW) break;
            iW = OW.to, tW.push(OW), EW++
          }
          for (; EW < PW.length;) {
            let OW = PW[EW];
            if (OW.from != WW || !(OW.to > OW.from || OW.to == WW)) {
              iW = Math.min(OW.from, iW);
              break
            }
            tW.push(OW), EW++, iW = Math.min(OW.to, iW)
          }
          iW = Math.min(iW, AW);
          let NW = !1;
          if (tW.some((OW => OW.from == WW && (OW.to == iW || iW == AW))) && (NW = WW == iW, !NW && iW - WW < 10)) {
            let OW = WW - (lW + xW.value.length);
            OW > 0 && (xW.next(OW), lW = WW);
            for (let mW = WW;;) {
              if (mW >= iW) {
                NW = !0;
                break
              }
              if (!xW.lineBreak && lW + xW.value.length > mW) break;
              mW = lW + xW.value.length, lW += xW.value.length, xW.next()
            }
          }
          let LW = eW(tW);
          if (NW) wW.add(WW, WW, mW.c.widget({
            widget: new JW(LW),
            diagnostics: tW.slice()
          }));
          else {
            let OW = tW.reduce(((WW, iW) => iW.markClass ? WW + " " + iW.markClass : WW), "");
            wW.add(WW, iW, mW.c.mark({
              class: "cm-lintRange cm-lintRange-" + LW + OW,
              diagnostics: tW.slice(),
              inclusiveEnd: tW.some((WW => WW.to > iW))
            }))
          }
          if (ZW = iW, ZW == AW) break;
          for (let mW = 0; mW < tW.length; mW++) tW[mW].to <= ZW && tW.splice(mW--, 1)
        }
        let bW = wW.finish();
        return new LW(bW, iW, cW(bW))
      }
    }

    function cW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        mW = null;
      return WW.between(OW, 1e9, ((WW, OW, EW) => {
        let {
          spec: NW
        } = EW;
        if (!(iW && NW.diagnostics.indexOf(iW) < 0))
          if (mW) {
            if (NW.diagnostics.indexOf(mW.diagnostic) < 0) return !1;
            mW = new PW(mW.from, OW, mW.diagnostic)
          } else mW = new PW(WW, OW, iW || NW.diagnostics[0])
      })), mW
    }

    function wW(WW, iW) {
      let OW = iW.pos,
        mW = iW.end || OW,
        EW = WW.state.facet(KW).hideOn(WW, OW, mW);
      if (null != EW) return EW;
      let NW = WW.startState.doc.lineAt(iW.pos);
      return !(!WW.effects.some((WW => WW.is(ZW))) && !WW.changes.touchesRange(NW.from, Math.max(NW.to, mW)))
    }

    function tW(WW, iW) {
      return WW.field(AW, !1) ? iW : iW.concat(EW.H.appendConfig.of(vW))
    }
    const ZW = EW.H.define(),
      xW = EW.H.define(),
      lW = EW.H.define(),
      AW = EW.L.define({
        create: () => new LW(mW.c.none, null, null),
        update(WW, iW) {
          if (iW.docChanged && WW.diagnostics.size) {
            let OW = WW.diagnostics.map(iW.changes),
              mW = null,
              EW = WW.panel;
            if (WW.selected) {
              let EW = iW.changes.mapPos(WW.selected.from, 1);
              mW = cW(OW, WW.selected.diagnostic, EW) || cW(OW, null, EW)
            }!OW.size && EW && iW.state.facet(KW).autoPanel && (EW = null), WW = new LW(OW, EW, mW)
          }
          for (let OW of iW.effects)
            if (OW.is(ZW)) {
              let mW = iW.state.facet(KW).autoPanel ? OW.value.length ? HW.open : null : WW.panel;
              WW = LW.init(OW.value, mW, iW.state)
            } else OW.is(xW) ? WW = new LW(WW.diagnostics, OW.value ? HW.open : null, WW.selected) : OW.is(lW) && (WW = new LW(WW.diagnostics, WW.panel, OW.value));
          return WW
        },
        provide: WW => [mW.Z.from(WW, (WW => WW.panel)), mW.e.Km.from(WW, (WW => WW.diagnostics))]
      });
    const bW = mW.c.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function jW(WW, iW, OW) {
      let mW, {
          diagnostics: EW
        } = WW.state.field(AW),
        NW = -1,
        PW = -1;
      EW.between(iW - (OW < 0 ? 1 : 0), iW + (OW > 0 ? 1 : 0), ((WW, EW, LW) => {
        let {
          spec: cW
        } = LW;
        if (iW >= WW && iW <= EW && (WW == EW || (iW > WW || OW > 0) && (iW < EW || OW < 0))) return mW = cW.diagnostics, NW = WW, PW = EW, !1
      }));
      let LW = WW.state.facet(KW).tooltipFilter;
      return mW && LW && (mW = LW(mW, WW.state)), mW ? {
        pos: NW,
        end: PW,
        above: WW.state.doc.lineAt(NW).to < PW,
        create: () => ({
          dom: UW(WW, mW)
        })
      } : null
    }

    function UW(WW, iW) {
      return (0, NW.c)("ul", {
        class: "cm-tooltip-lint"
      }, iW.map((iW => TW(WW, iW, !1))))
    }
    const kW = WW => {
        let iW = WW.state.field(AW, !1);
        return !(!iW || !iW.panel) && (WW.dispatch({
          effects: xW.of(!1)
        }), !0)
      },
      sW = [{
        key: "Mod-Shift-m",
        run: WW => {
          let iW = WW.state.field(AW, !1);
          iW && iW.panel || WW.dispatch({
            effects: tW(WW.state, [xW.of(!0)])
          });
          let OW = (0, mW.t)(WW, HW.open);
          return OW && OW.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: WW => {
          let iW = WW.state.field(AW, !1);
          if (!iW) return !1;
          let OW = WW.state.selection.main,
            mW = cW(iW.diagnostics, null, OW.to + 1);
          return !(!mW && (mW = cW(iW.diagnostics, null, 0), !mW || mW.from == OW.from && mW.to == OW.to)) && (WW.dispatch({
            selection: {
              anchor: mW.from,
              head: mW.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      MW = mW.i.fromClass(class {
        constructor(WW) {
          this.view = WW, this.timeout = -1, this.set = !0;
          let {
            delay: iW
          } = WW.state.facet(KW);
          this.lintTime = Date.now() + iW, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, iW)
        }
        run() {
          clearTimeout(this.timeout);
          let WW = Date.now();
          if (WW < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - WW);
          else {
            this.set = !1;
            let {
              state: WW
            } = this.view, {
              sources: iW
            } = WW.facet(KW);
            iW.length && function(WW, iW, OW) {
              let mW = [],
                EW = -1;
              for (let NW of WW) NW.then((OW => {
                mW.push(OW), clearTimeout(EW), mW.length == WW.length ? iW(mW) : EW = setTimeout((() => iW(mW)), 200)
              }), OW)
            }(iW.map((WW => Promise.resolve(WW(this.view)))), (iW => {
              this.view.state.doc == WW.doc && this.view.dispatch(function(WW, iW) {
                return {
                  effects: tW(WW, [ZW.of(iW)])
                }
              }(this.view.state, iW.reduce(((WW, iW) => WW.concat(iW)))))
            }), (WW => {
              (0, mW.L)(this.view.state, WW)
            }))
          }
        }
        update(WW) {
          let iW = WW.state.facet(KW);
          (WW.docChanged || iW != WW.startState.facet(KW) || iW.needsRefresh && iW.needsRefresh(WW)) && (this.lintTime = Date.now() + iW.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, iW.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const KW = EW.p.define({
      combine: WW => ({
        sources: WW.map((WW => WW.source)).filter((WW => null != WW)),
        ...(0, EW.U)(WW.map((WW => WW.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: SW,
          tooltipFilter: SW,
          needsRefresh: (WW, iW) => WW ? iW ? OW => WW(OW) || iW(OW) : WW : iW,
          hideOn: (WW, iW) => WW ? iW ? (OW, mW, EW) => WW(OW, mW, EW) || iW(OW, mW, EW) : WW : iW,
          autoPanel: (WW, iW) => WW || iW
        })
      })
    });

    function SW(WW, iW) {
      return WW ? iW ? (OW, mW) => iW(WW(OW, mW), mW) : WW : iW
    }

    function YW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [KW.of({
        source: WW,
        config: iW
      }), MW, vW]
    }

    function yW(WW) {
      let iW = [];
      if (WW) WW: for (let {
          name: OW
        }
        of WW) {
        for (let WW = 0; WW < OW.length; WW++) {
          let mW = OW[WW];
          if (/[a-zA-Z]/.test(mW) && !iW.some((WW => WW.toLowerCase() == mW.toLowerCase()))) {
            iW.push(mW);
            continue WW
          }
        }
        iW.push("")
      }
      return iW
    }

    function TW(WW, iW, OW) {
      var mW;
      let EW = OW ? yW(iW.actions) : [];
      return (0, NW.c)("li", {
        class: "cm-diagnostic cm-diagnostic-" + iW.severity
      }, (0, NW.c)("span", {
        class: "cm-diagnosticText"
      }, iW.renderMessage ? iW.renderMessage(WW) : iW.message), null === (mW = iW.actions) || void 0 === mW ? void 0 : mW.map(((OW, mW) => {
        let PW = !1,
          LW = mW => {
            if (mW.preventDefault(), PW) return;
            PW = !0;
            let EW = cW(WW.state.field(AW).diagnostics, iW);
            EW && OW.apply(WW, EW.from, EW.to)
          },
          {
            name: wW
          } = OW,
          tW = EW[mW] ? wW.indexOf(EW[mW]) : -1,
          ZW = tW < 0 ? wW : [wW.slice(0, tW), (0, NW.c)("u", wW.slice(tW, tW + 1)), wW.slice(tW + 1)],
          xW = OW.markClass ? " " + OW.markClass : "";
        return (0, NW.c)("button", {
          type: "button",
          class: "cm-diagnosticAction" + xW,
          onclick: LW,
          onmousedown: LW,
          "aria-label": ` Action: ${wW}${tW<0?"":` (access key "${EW[mW]})"`}.`
        }, ZW)
      })), iW.source && (0, NW.c)("div", {
        class: "cm-diagnosticSource"
      }, iW.source))
    }
    class JW extends mW.j {
      constructor(WW) {
        super(), this.sev = WW
      }
      eq(WW) {
        return WW.sev == this.sev
      }
      toDOM() {
        return (0, NW.c)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class hW {
      constructor(WW, iW) {
        this.diagnostic = iW, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = TW(WW, iW, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class HW {
      constructor(WW) {
        this.view = WW, this.items = [];
        this.list = (0, NW.c)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: iW => {
            if (!(iW.ctrlKey || iW.altKey || iW.metaKey)) {
              if (27 == iW.keyCode) kW(this.view), this.view.focus();
              else if (38 == iW.keyCode || 33 == iW.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == iW.keyCode || 34 == iW.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == iW.keyCode) this.moveSelection(0);
              else if (35 == iW.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == iW.keyCode) this.view.focus();
              else {
                if (!(iW.keyCode >= 65 && iW.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: OW
                  } = this.items[this.selectedIndex], mW = yW(OW.actions);
                  for (let EW = 0; EW < mW.length; EW++)
                    if (mW[EW].toUpperCase().charCodeAt(0) == iW.keyCode) {
                      let iW = cW(this.view.state.field(AW).diagnostics, OW);
                      iW && OW.actions[EW].apply(WW, iW.from, iW.to)
                    }
                }
              }
              iW.preventDefault()
            }
          },
          onclick: WW => {
            for (let iW = 0; iW < this.items.length; iW++) this.items[iW].dom.contains(WW.target) && this.moveSelection(iW)
          }
        }), this.dom = (0, NW.c)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, NW.c)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => kW(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let WW = this.view.state.field(AW).selected;
        if (!WW) return -1;
        for (let iW = 0; iW < this.items.length; iW++)
          if (this.items[iW].diagnostic == WW.diagnostic) return iW;
        return -1
      }
      update() {
        let {
          diagnostics: WW,
          selected: iW
        } = this.view.state.field(AW), OW = 0, mW = !1, EW = null, NW = new Set;
        for (WW.between(0, this.view.state.doc.length, ((WW, PW, LW) => {
            let {
              spec: cW
            } = LW;
            for (let wW of cW.diagnostics) {
              if (NW.has(wW)) continue;
              NW.add(wW);
              let WW, PW = -1;
              for (let iW = OW; iW < this.items.length; iW++)
                if (this.items[iW].diagnostic == wW) {
                  PW = iW;
                  break
                } PW < 0 ? (WW = new hW(this.view, wW), this.items.splice(OW, 0, WW), mW = !0) : (WW = this.items[PW], PW > OW && (this.items.splice(OW, PW - OW), mW = !0)), iW && WW.diagnostic == iW.diagnostic ? WW.dom.hasAttribute("aria-selected") || (WW.dom.setAttribute("aria-selected", "true"), EW = WW) : WW.dom.hasAttribute("aria-selected") && WW.dom.removeAttribute("aria-selected"), OW++
            }
          })); OW < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) mW = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new hW(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), mW = !0), EW ? (this.list.setAttribute("aria-activedescendant", EW.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: EW.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: WW => {
            let {
              sel: iW,
              panel: OW
            } = WW, mW = OW.height / this.list.offsetHeight;
            iW.top < OW.top ? this.list.scrollTop -= (OW.top - iW.top) / mW : iW.bottom > OW.bottom && (this.list.scrollTop += (iW.bottom - OW.bottom) / mW)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), mW && this.sync()
      }
      sync() {
        let WW = this.list.firstChild;

        function iW() {
          let iW = WW;
          WW = iW.nextSibling, iW.remove()
        }
        for (let OW of this.items)
          if (OW.dom.parentNode == this.list) {
            for (; WW != OW.dom;) iW();
            WW = OW.dom.nextSibling
          } else this.list.insertBefore(OW.dom, WW);
        for (; WW;) iW()
      }
      moveSelection(WW) {
        if (this.selectedIndex < 0) return;
        let iW = cW(this.view.state.field(AW).diagnostics, this.items[WW].diagnostic);
        iW && this.view.dispatch({
          selection: {
            anchor: iW.from,
            head: iW.to
          },
          scrollIntoView: !0,
          effects: lW.of(iW)
        })
      }
      static open(WW) {
        return new HW(WW)
      }
    }

    function nW(WW) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(WW)}</svg>')`
    }

    function uW(WW) {
      return nW(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${WW}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const oW = mW.e.baseTheme({
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
        backgroundImage: uW("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: uW("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: uW("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: uW("#66d")
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

    function dW(WW) {
      return "error" == WW ? 4 : "warning" == WW ? 3 : "info" == WW ? 2 : 1
    }

    function eW(WW) {
      let iW = "hint",
        OW = 1;
      for (let mW of WW) {
        let WW = dW(mW.severity);
        WW > OW && (OW = WW, iW = mW.severity)
      }
      return iW
    }
    mW.f;
    const vW = [AW, mW.e.Km.compute([AW], (WW => {
      let {
        selected: iW,
        panel: OW
      } = WW.field(AW);
      return iW && OW && iW.from != iW.to ? mW.c.set([bW.range(iW.from, iW.to)]) : mW.c.none
    })), (0, mW.H)(jW, {
      hideOn: wW
    }), oW]
  },
  53555: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => FW,
      e: () => UW,
      g: () => QW
    });
    var mW = OW(53511),
      EW = OW(53507),
      NW = OW(53517);
    const PW = "function" == typeof String.prototype.normalize ? WW => WW.normalize("NFKD") : WW => WW;
    class LW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.length,
          EW = arguments.length > 4 ? arguments[4] : void 0,
          NW = arguments.length > 5 ? arguments[5] : void 0;
        this.test = NW, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = WW.iterRange(OW, mW), this.bufferStart = OW, this.normalize = EW ? WW => EW(PW(WW)) : PW, this.query = this.normalize(iW)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, EW.Q)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let WW = this.peek();
          if (WW < 0) return this.done = !0, this;
          let iW = (0, EW.cb)(WW),
            OW = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, EW.R)(WW);
          let mW = this.normalize(iW);
          if (mW.length)
            for (let EW = 0, NW = OW;; EW++) {
              let WW = mW.charCodeAt(EW),
                PW = this.match(WW, NW, this.bufferPos + this.bufferStart);
              if (EW == mW.length - 1) {
                if (PW) return this.value = PW, this;
                break
              }
              NW == OW && EW < iW.length && iW.charCodeAt(EW) == WW && NW++
            }
        }
      }
      match(WW, iW, OW) {
        let mW = null;
        for (let EW = 0; EW < this.matches.length; EW += 2) {
          let iW = this.matches[EW],
            NW = !1;
          this.query.charCodeAt(iW) == WW && (iW == this.query.length - 1 ? mW = {
            from: this.matches[EW + 1],
            to: OW
          } : (this.matches[EW]++, NW = !0)), NW || (this.matches.splice(EW, 2), EW -= 2)
        }
        return this.query.charCodeAt(0) == WW && (1 == this.query.length ? mW = {
          from: iW,
          to: OW
        } : this.matches.push(1, iW)), mW && this.test && !this.test(mW.from, mW.to, this.buffer, this.bufferStart) && (mW = null), mW
      }
    }
    "undefined" != typeof Symbol && (LW.prototype[Symbol.iterator] = function() {
      return this
    });
    const cW = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      wW = "gm" + (null == /x/.unicode ? "" : "u");
    class tW {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : WW.length;
        if (this.text = WW, this.to = EW, this.curLine = "", this.done = !1, this.value = cW, /\\[sWDnr]|\n|\r|\[\^/.test(iW)) return new lW(WW, iW, OW, mW, EW);
        this.re = new RegExp(iW, wW + ((null === OW || void 0 === OW ? void 0 : OW.ignoreCase) ? "i" : "")), this.test = null === OW || void 0 === OW ? void 0 : OW.test, this.iter = WW.iter();
        let NW = WW.lineAt(mW);
        this.curLineStart = NW.from, this.matchPos = AW(WW, mW), this.getLine(this.curLineStart)
      }
      getLine(WW) {
        this.iter.next(WW), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let WW = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = WW;
          let iW = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (iW) {
            let OW = this.curLineStart + iW.index,
              mW = OW + iW[0].length;
            if (this.matchPos = AW(this.text, mW + (OW == mW ? 1 : 0)), OW == this.curLineStart + this.curLine.length && this.nextLine(), (OW < mW || OW > this.value.to) && (!this.test || this.test(OW, mW, iW))) return this.value = {
              from: OW,
              to: mW,
              match: iW
            }, this;
            WW = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), WW = 0
          }
        }
      }
    }
    const ZW = new WeakMap;
    class xW {
      constructor(WW, iW) {
        this.from = WW, this.text = iW
      }
      get to() {
        return this.from + this.text.length
      }
      static get(WW, iW, OW) {
        let mW = ZW.get(WW);
        if (!mW || mW.from >= OW || mW.to <= iW) {
          let mW = new xW(iW, WW.sliceString(iW, OW));
          return ZW.set(WW, mW), mW
        }
        if (mW.from == iW && mW.to == OW) return mW;
        let {
          text: EW,
          from: NW
        } = mW;
        return NW > iW && (EW = WW.sliceString(iW, NW) + EW, NW = iW), mW.to < OW && (EW += WW.sliceString(mW.to, OW)), ZW.set(WW, new xW(NW, EW)), new xW(iW, EW.slice(iW - NW, OW - NW))
      }
    }
    class lW {
      constructor(WW, iW, OW, mW, EW) {
        this.text = WW, this.to = EW, this.done = !1, this.value = cW, this.matchPos = AW(WW, mW), this.re = new RegExp(iW, wW + ((null === OW || void 0 === OW ? void 0 : OW.ignoreCase) ? "i" : "")), this.test = null === OW || void 0 === OW ? void 0 : OW.test, this.flat = xW.get(WW, mW, this.chunkEnd(mW + 5e3))
      }
      chunkEnd(WW) {
        return WW >= this.to ? this.to : this.text.lineAt(WW).to
      }
      next() {
        for (;;) {
          let WW = this.re.lastIndex = this.matchPos - this.flat.from,
            iW = this.re.exec(this.flat.text);
          if (iW && !iW[0] && iW.index == WW && (this.re.lastIndex = WW + 1, iW = this.re.exec(this.flat.text)), iW) {
            let WW = this.flat.from + iW.index,
              OW = WW + iW[0].length;
            if ((this.flat.to >= this.to || iW.index + iW[0].length <= this.flat.text.length - 10) && (!this.test || this.test(WW, OW, iW))) return this.value = {
              from: WW,
              to: OW,
              match: iW
            }, this.matchPos = AW(this.text, OW + (WW == OW ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = xW.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function AW(WW, iW) {
      if (iW >= WW.length) return iW;
      let OW, mW = WW.lineAt(iW);
      for (; iW < mW.to && (OW = mW.text.charCodeAt(iW - mW.from)) >= 56320 && OW < 57344;) iW++;
      return iW
    }
    "undefined" != typeof Symbol && (tW.prototype[Symbol.iterator] = lW.prototype[Symbol.iterator] = function() {
      return this
    });
    const bW = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      jW = EW.p.define({
        combine: WW => (0, EW.U)(WW, bW, {
          highlightWordAroundCursor: (WW, iW) => WW || iW,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function UW(WW) {
      let iW = [SW, KW];
      return WW && iW.push(jW.of(WW)), iW
    }
    const kW = mW.c.mark({
        class: "cm-selectionMatch"
      }),
      sW = mW.c.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function MW(WW, iW, OW, mW) {
      return (0 == OW || WW(iW.sliceDoc(OW - 1, OW)) != EW.i.Word) && (mW == iW.doc.length || WW(iW.sliceDoc(mW, mW + 1)) != EW.i.Word)
    }
    const KW = mW.i.fromClass(class {
        constructor(WW) {
          this.Km = this.getDeco(WW)
        }
        update(WW) {
          (WW.selectionSet || WW.docChanged || WW.viewportChanged) && (this.Km = this.getDeco(WW.view))
        }
        getDeco(WW) {
          let iW = WW.state.facet(jW),
            {
              state: OW
            } = WW,
            NW = OW.selection;
          if (NW.kj.length > 1) return mW.c.none;
          let PW, cW = NW.main,
            wW = null;
          if (cW.empty) {
            if (!iW.highlightWordAroundCursor) return mW.c.none;
            let WW = OW.wordAt(cW.head);
            if (!WW) return mW.c.none;
            wW = OW.charCategorizer(cW.head), PW = OW.sliceDoc(WW.from, WW.to)
          } else {
            let WW = cW.to - cW.from;
            if (WW < iW.minSelectionLength || WW > 200) return mW.c.none;
            if (iW.wholeWords) {
              if (PW = OW.sliceDoc(cW.from, cW.to), wW = OW.charCategorizer(cW.head), !MW(wW, OW, cW.from, cW.to) || ! function(WW, iW, OW, mW) {
                  return WW(iW.sliceDoc(OW, OW + 1)) == EW.i.Word && WW(iW.sliceDoc(mW - 1, mW)) == EW.i.Word
                }(wW, OW, cW.from, cW.to)) return mW.c.none
            } else if (PW = OW.sliceDoc(cW.from, cW.to), !PW) return mW.c.none
          }
          let tW = [];
          for (let EW of WW.jWW) {
            let WW = new LW(OW.doc, PW, EW.from, EW.to);
            for (; !WW.next().done;) {
              let {
                from: EW,
                to: NW
              } = WW.value;
              if ((!wW || MW(wW, OW, EW, NW)) && (cW.empty && EW <= cW.from && NW >= cW.to ? tW.push(sW.range(EW, NW)) : (EW >= cW.to || NW <= cW.from) && tW.push(kW.range(EW, NW)), tW.length > iW.maxMatches)) return mW.c.none
            }
          }
          return mW.c.set(tW)
        }
      }, {
        Km: WW => WW.Km
      }),
      SW = mW.e.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const YW = EW.p.define({
      combine: WW => (0, EW.U)(WW, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: WW => new Wi(WW),
        scrollToMatch: WW => mW.e.scrollIntoView(WW)
      })
    });
    class yW {
      constructor(WW) {
        this.search = WW.search, this.caseSensitive = !!WW.caseSensitive, this.literal = !!WW.literal, this.regexp = !!WW.regexp, this.replace = WW.replace || "", this.valid = !!this.search && (!this.regexp || function(WW) {
          try {
            return new RegExp(WW, wW), !0
          } catch (iW) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!WW.wholeWord, this.test = WW.test
      }
      unquote(WW) {
        return this.literal ? WW : WW.replace(/\\([nrt\\])/g, ((WW, iW) => "n" == iW ? "\n" : "r" == iW ? "\r" : "t" == iW ? "\t" : "\\"))
      }
      eq(WW) {
        return this.search == WW.search && this.replace == WW.replace && this.caseSensitive == WW.caseSensitive && this.regexp == WW.regexp && this.wholeWord == WW.wholeWord && this.test == WW.test
      }
      create() {
        return this.regexp ? new oW(this) : new hW(this)
      }
      getCursor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = WW.doc ? WW : EW.o.create({
            doc: WW
          });
        return null == OW && (OW = mW.doc.length), this.regexp ? HW(this, mW, iW, OW) : JW(this, mW, iW, OW)
      }
    }
    class TW {
      constructor(WW) {
        this.spec = WW
      }
    }

    function JW(WW, iW, OW, mW) {
      let NW;
      var PW, cW;
      return WW.wholeWord && (PW = iW.doc, cW = iW.charCategorizer(iW.selection.main.head), NW = (WW, iW, OW, mW) => ((mW > WW || mW + OW.length < iW) && (mW = Math.max(0, WW - 2), OW = PW.sliceString(mW, Math.min(PW.length, iW + 2))), (cW(nW(OW, WW - mW)) != EW.i.Word || cW(uW(OW, WW - mW)) != EW.i.Word) && (cW(uW(OW, iW - mW)) != EW.i.Word || cW(nW(OW, iW - mW)) != EW.i.Word))), WW.test && (NW = function(WW, iW, OW) {
        return (mW, EW, NW, PW) => {
          if (OW && !OW(mW, EW, NW, PW)) return !1;
          let LW = mW >= PW && EW <= PW + NW.length ? NW.slice(mW - PW, EW - PW) : iW.doc.sliceString(mW, EW);
          return WW(LW, iW, mW, EW)
        }
      }(WW.test, iW, NW)), new LW(iW.doc, WW.unquoted, OW, mW, WW.caseSensitive ? void 0 : WW => WW.toLowerCase(), NW)
    }
    class hW extends TW {
      constructor(WW) {
        super(WW)
      }
      nextMatch(WW, iW, OW) {
        let mW = JW(this.spec, WW, OW, WW.doc.length).nextOverlapping();
        if (mW.done) {
          let OW = Math.min(WW.doc.length, iW + this.spec.unquoted.length);
          mW = JW(this.spec, WW, 0, OW).nextOverlapping()
        }
        return mW.done || mW.value.from == iW && mW.value.to == OW ? null : mW.value
      }
      prevMatchInRange(WW, iW, OW) {
        for (let mW = OW;;) {
          let OW = Math.max(iW, mW - 1e4 - this.spec.unquoted.length),
            EW = JW(this.spec, WW, OW, mW),
            NW = null;
          for (; !EW.nextOverlapping().done;) NW = EW.value;
          if (NW) return NW;
          if (OW == iW) return null;
          mW -= 1e4
        }
      }
      prevMatch(WW, iW, OW) {
        let mW = this.prevMatchInRange(WW, 0, iW);
        return mW || (mW = this.prevMatchInRange(WW, Math.max(0, OW - this.spec.unquoted.length), WW.doc.length)), !mW || mW.from == iW && mW.to == OW ? null : mW
      }
      getReplacement(WW) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(WW, iW) {
        let OW = JW(this.spec, WW, 0, WW.doc.length),
          mW = [];
        for (; !OW.next().done;) {
          if (mW.length >= iW) return null;
          mW.push(OW.value)
        }
        return mW
      }
      highlight(WW, iW, OW, mW) {
        let EW = JW(this.spec, WW, Math.max(0, iW - this.spec.unquoted.length), Math.min(OW + this.spec.unquoted.length, WW.doc.length));
        for (; !EW.next().done;) mW(EW.value.from, EW.value.to)
      }
    }

    function HW(WW, iW, OW, mW) {
      let NW;
      var PW;
      return WW.wholeWord && (PW = iW.charCategorizer(iW.selection.main.head), NW = (WW, iW, OW) => !OW[0].length || (PW(nW(OW.input, OW.index)) != EW.i.Word || PW(uW(OW.input, OW.index)) != EW.i.Word) && (PW(uW(OW.input, OW.index + OW[0].length)) != EW.i.Word || PW(nW(OW.input, OW.index + OW[0].length)) != EW.i.Word)), WW.test && (NW = function(WW, iW, OW) {
        return (mW, EW, NW) => (!OW || OW(mW, EW, NW)) && WW(NW[0], iW, mW, EW)
      }(WW.test, iW, NW)), new tW(iW.doc, WW.search, {
        ignoreCase: !WW.caseSensitive,
        test: NW
      }, OW, mW)
    }

    function nW(WW, iW) {
      return WW.slice((0, EW.$)(WW, iW, !1), iW)
    }

    function uW(WW, iW) {
      return WW.slice(iW, (0, EW.$)(WW, iW))
    }
    class oW extends TW {
      nextMatch(WW, iW, OW) {
        let mW = HW(this.spec, WW, OW, WW.doc.length).next();
        return mW.done && (mW = HW(this.spec, WW, 0, iW).next()), mW.done ? null : mW.value
      }
      prevMatchInRange(WW, iW, OW) {
        for (let mW = 1;; mW++) {
          let EW = Math.max(iW, OW - 1e4 * mW),
            NW = HW(this.spec, WW, EW, OW),
            PW = null;
          for (; !NW.next().done;) PW = NW.value;
          if (PW && (EW == iW || PW.from > EW + 10)) return PW;
          if (EW == iW) return null
        }
      }
      prevMatch(WW, iW, OW) {
        return this.prevMatchInRange(WW, 0, iW) || this.prevMatchInRange(WW, OW, WW.doc.length)
      }
      getReplacement(WW) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((iW, OW) => {
          if ("&" == OW) return WW.match[0];
          if ("$" == OW) return "$";
          for (let mW = OW.length; mW > 0; mW--) {
            let iW = +OW.slice(0, mW);
            if (iW > 0 && iW < WW.match.length) return WW.match[iW] + OW.slice(mW)
          }
          return iW
        }))
      }
      matchAll(WW, iW) {
        let OW = HW(this.spec, WW, 0, WW.doc.length),
          mW = [];
        for (; !OW.next().done;) {
          if (mW.length >= iW) return null;
          mW.push(OW.value)
        }
        return mW
      }
      highlight(WW, iW, OW, mW) {
        let EW = HW(this.spec, WW, Math.max(0, iW - 250), Math.min(OW + 250, WW.doc.length));
        for (; !EW.next().done;) mW(EW.value.from, EW.value.to)
      }
    }
    const dW = EW.H.define(),
      eW = EW.H.define(),
      vW = EW.L.define({
        create: WW => new gW(IW(WW).create(), null),
        update(WW, iW) {
          for (let OW of iW.effects) OW.is(dW) ? WW = new gW(OW.value.create(), WW.panel) : OW.is(eW) && (WW = new gW(WW.query, OW.value ? GW : null));
          return WW
        },
        provide: WW => mW.Z.from(WW, (WW => WW.panel))
      });
    class gW {
      constructor(WW, iW) {
        this.query = WW, this.panel = iW
      }
    }
    const DW = mW.c.mark({
        class: "cm-searchMatch"
      }),
      VW = mW.c.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      pW = mW.i.fromClass(class {
        constructor(WW) {
          this.view = WW, this.Km = this.highlight(WW.state.field(vW))
        }
        update(WW) {
          let iW = WW.state.field(vW);
          (iW != WW.startState.field(vW) || WW.docChanged || WW.selectionSet || WW.viewportChanged) && (this.Km = this.highlight(iW))
        }
        highlight(WW) {
          let {
            query: iW,
            panel: OW
          } = WW;
          if (!OW || !iW.spec.valid) return mW.c.none;
          let {
            view: NW
          } = this, PW = new EW.A;
          for (let mW = 0, EW = NW.jWW, LW = EW.length; mW < LW; mW++) {
            let {
              from: WW,
              to: OW
            } = EW[mW];
            for (; mW < LW - 1 && OW > EW[mW + 1].from - 500;) OW = EW[++mW].to;
            iW.highlight(NW.state, WW, OW, ((WW, iW) => {
              let OW = NW.state.selection.kj.some((OW => OW.from == WW && OW.to == iW));
              PW.add(WW, iW, OW ? VW : DW)
            }))
          }
          return PW.finish()
        }
      }, {
        Km: WW => WW.Km
      });

    function fW(WW) {
      return iW => {
        let OW = iW.state.field(vW, !1);
        return OW && OW.query.spec.valid ? WW(iW, OW) : zW(iW)
      }
    }
    const CW = fW(((WW, iW) => {
        let {
          query: OW
        } = iW, {
          to: mW
        } = WW.state.selection.main, NW = OW.nextMatch(WW.state, mW, mW);
        if (!NW) return !1;
        let PW = EW.l.single(NW.from, NW.to),
          LW = WW.state.facet(YW);
        return WW.dispatch({
          selection: PW,
          effects: [Ei(WW, NW), LW.scrollToMatch(PW.main, WW)],
          userEvent: "select.search"
        }), rW(WW), !0
      })),
      XW = fW(((WW, iW) => {
        let {
          query: OW
        } = iW, {
          state: mW
        } = WW, {
          from: NW
        } = mW.selection.main, PW = OW.prevMatch(mW, NW, NW);
        if (!PW) return !1;
        let LW = EW.l.single(PW.from, PW.to),
          cW = WW.state.facet(YW);
        return WW.dispatch({
          selection: LW,
          effects: [Ei(WW, PW), cW.scrollToMatch(LW.main, WW)],
          userEvent: "select.search"
        }), rW(WW), !0
      })),
      BW = fW(((WW, iW) => {
        let {
          query: OW
        } = iW, mW = OW.matchAll(WW.state, 1e3);
        return !(!mW || !mW.length) && (WW.dispatch({
          selection: EW.l.create(mW.map((WW => EW.l.range(WW.from, WW.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      qW = fW(((WW, iW) => {
        let {
          query: OW
        } = iW, {
          state: NW
        } = WW, {
          from: PW,
          to: LW
        } = NW.selection.main;
        if (NW.readOnly) return !1;
        let cW = OW.nextMatch(NW, PW, PW);
        if (!cW) return !1;
        let wW, tW, ZW = cW,
          xW = [],
          lW = [];
        ZW.from == PW && ZW.to == LW && (tW = NW.toText(OW.getReplacement(ZW)), xW.push({
          from: ZW.from,
          to: ZW.to,
          insert: tW
        }), ZW = OW.nextMatch(NW, ZW.from, ZW.to), lW.push(mW.e.announce.of(NW.phrase("replaced match on line $", NW.doc.lineAt(PW).number) + ".")));
        let AW = WW.state.changes(xW);
        return ZW && (wW = EW.l.single(ZW.from, ZW.to).map(AW), lW.push(Ei(WW, ZW)), lW.push(NW.facet(YW).scrollToMatch(wW.main, WW))), WW.dispatch({
          changes: AW,
          selection: wW,
          effects: lW,
          userEvent: "input.replace"
        }), !0
      })),
      RW = fW(((WW, iW) => {
        let {
          query: OW
        } = iW;
        if (WW.state.readOnly) return !1;
        let EW = OW.matchAll(WW.state, 1e9).map((WW => {
          let {
            from: iW,
            to: mW
          } = WW;
          return {
            from: iW,
            to: mW,
            insert: OW.getReplacement(WW)
          }
        }));
        if (!EW.length) return !1;
        let NW = WW.state.phrase("replaced $ matches", EW.length) + ".";
        return WW.dispatch({
          changes: EW,
          effects: mW.e.announce.of(NW),
          userEvent: "input.replace.all"
        }), !0
      }));

    function GW(WW) {
      return WW.state.facet(YW).createPanel(WW)
    }

    function IW(WW, iW) {
      var OW, mW, EW, NW, PW;
      let LW = WW.selection.main,
        cW = LW.empty || LW.to > LW.from + 100 ? "" : WW.sliceDoc(LW.from, LW.to);
      if (iW && !cW) return iW;
      let wW = WW.facet(YW);
      return new yW({
        search: (null !== (OW = null === iW || void 0 === iW ? void 0 : iW.literal) && void 0 !== OW ? OW : wW.literal) ? cW : cW.replace(/\n/g, "\\n"),
        caseSensitive: null !== (mW = null === iW || void 0 === iW ? void 0 : iW.caseSensitive) && void 0 !== mW ? mW : wW.caseSensitive,
        literal: null !== (EW = null === iW || void 0 === iW ? void 0 : iW.literal) && void 0 !== EW ? EW : wW.literal,
        regexp: null !== (NW = null === iW || void 0 === iW ? void 0 : iW.regexp) && void 0 !== NW ? NW : wW.regexp,
        wholeWord: null !== (PW = null === iW || void 0 === iW ? void 0 : iW.wholeWord) && void 0 !== PW ? PW : wW.wholeWord
      })
    }

    function aW(WW) {
      let iW = (0, mW.t)(WW, GW);
      return iW && iW.dom.querySelector("[main-field]")
    }

    function rW(WW) {
      let iW = aW(WW);
      iW && iW == WW.root.activeElement && iW.select()
    }
    const zW = WW => {
        let iW = WW.state.field(vW, !1);
        if (iW && iW.panel) {
          let OW = aW(WW);
          if (OW && OW != WW.root.activeElement) {
            let mW = IW(WW.state, iW.query.spec);
            mW.valid && WW.dispatch({
              effects: dW.of(mW)
            }), OW.focus(), OW.select()
          }
        } else WW.dispatch({
          effects: [eW.of(!0), iW ? dW.of(IW(WW.state, iW.query.spec)) : EW.H.appendConfig.of(Pi)]
        });
        return !0
      },
      FW = WW => {
        let iW = WW.state.field(vW, !1);
        if (!iW || !iW.panel) return !1;
        let OW = (0, mW.t)(WW, GW);
        return OW && OW.dom.contains(WW.root.activeElement) && WW.focus(), WW.dispatch({
          effects: eW.of(!1)
        }), !0
      },
      QW = [{
        key: "Mod-f",
        run: zW,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: CW,
        shift: XW,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: CW,
        shift: XW,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: FW,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: WW => {
          let {
            state: iW,
            dispatch: OW
          } = WW, mW = iW.selection;
          if (mW.kj.length > 1 || mW.main.empty) return !1;
          let {
            from: NW,
            to: PW
          } = mW.main, cW = [], wW = 0;
          for (let tW = new LW(iW.doc, iW.sliceDoc(NW, PW)); !tW.next().done;) {
            if (cW.length > 1e3) return !1;
            tW.value.from == NW && (wW = cW.length), cW.push(EW.l.range(tW.value.from, tW.value.to))
          }
          return OW(iW.update({
            selection: EW.l.create(cW, wW),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: WW => {
          let {
            state: iW
          } = WW, OW = String(iW.doc.lineAt(WW.state.selection.main.head).number), {
            close: NW,
            result: PW
          } = (0, mW.W)(WW, {
            label: iW.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: OW
            },
            focus: !0,
            submitLabel: iW.phrase("go")
          });
          return PW.then((OW => {
            let PW = OW && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(OW.elements.line.value);
            if (!PW) return void WW.dispatch({
              effects: NW
            });
            let LW = iW.doc.lineAt(iW.selection.main.head),
              [, cW, wW, tW, ZW] = PW,
              xW = tW ? +tW.slice(1) : 0,
              lW = wW ? +wW : LW.number;
            if (wW && ZW) {
              let WW = lW / 100;
              cW && (WW = WW * ("-" == cW ? -1 : 1) + LW.number / iW.doc.lines), lW = Math.round(iW.doc.lines * WW)
            } else wW && cW && (lW = lW * ("-" == cW ? -1 : 1) + LW.number);
            let AW = iW.doc.line(Math.max(1, Math.min(iW.doc.lines, lW))),
              bW = EW.l.cursor(AW.from + Math.max(0, Math.min(xW, AW.length)));
            WW.dispatch({
              effects: [NW, mW.e.scrollIntoView(bW.from, {
                y: "center"
              })],
              selection: bW
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: WW => {
          let {
            state: iW,
            dispatch: OW
          } = WW, {
            kj: NW
          } = iW.selection;
          if (NW.some((WW => WW.from === WW.to))) return (WW => {
            let {
              state: iW,
              dispatch: OW
            } = WW, {
              selection: mW
            } = iW, NW = EW.l.create(mW.kj.map((WW => iW.wordAt(WW.head) || EW.l.cursor(WW.head))), mW.mainIndex);
            return !NW.eq(mW) && (OW(iW.update({
              selection: NW
            })), !0)
          })({
            state: iW,
            dispatch: OW
          });
          let PW = iW.sliceDoc(NW[0].from, NW[0].to);
          if (iW.selection.kj.some((WW => iW.sliceDoc(WW.from, WW.to) != PW))) return !1;
          let cW = function(WW, iW) {
            let {
              main: OW,
              kj: mW
            } = WW.selection, EW = WW.wordAt(OW.head), NW = EW && EW.from == OW.from && EW.to == OW.to;
            for (let PW = !1, cW = new LW(WW.doc, iW, mW[mW.length - 1].to);;) {
              if (cW.next(), !cW.done) {
                if (PW && mW.some((WW => WW.from == cW.value.from))) continue;
                if (NW) {
                  let iW = WW.wordAt(cW.value.from);
                  if (!iW || iW.from != cW.value.from || iW.to != cW.value.to) continue
                }
                return cW.value
              }
              if (PW) return null;
              cW = new LW(WW.doc, iW, 0, Math.max(0, mW[mW.length - 1].from - 1)), PW = !0
            }
          }(iW, PW);
          return !!cW && (OW(iW.update({
            selection: iW.selection.addRange(EW.l.range(cW.from, cW.to), !1),
            effects: mW.e.scrollIntoView(cW.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class Wi {
      constructor(WW) {
        this.view = WW;
        let iW = this.query = WW.state.field(vW).query.spec;

        function OW(WW, iW, OW) {
          return (0, NW.c)("button", {
            class: "cm-button",
            name: WW,
            onclick: iW,
            type: "button"
          }, OW)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, NW.c)("input", {
          value: iW.search,
          placeholder: ii(WW, "Find"),
          "aria-label": ii(WW, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, NW.c)("input", {
          value: iW.replace,
          placeholder: ii(WW, "Replace"),
          "aria-label": ii(WW, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, NW.c)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: iW.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, NW.c)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: iW.regexp,
          onchange: this.commit
        }), this.wordField = (0, NW.c)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: iW.wholeWord,
          onchange: this.commit
        }), this.dom = (0, NW.c)("div", {
          onkeydown: WW => this.keydown(WW),
          class: "cm-search"
        }, [this.searchField, OW("next", (() => CW(WW)), [ii(WW, "next")]), OW("prev", (() => XW(WW)), [ii(WW, "previous")]), OW("select", (() => BW(WW)), [ii(WW, "all")]), (0, NW.c)("label", null, [this.caseField, ii(WW, "match case")]), (0, NW.c)("label", null, [this.reField, ii(WW, "regexp")]), (0, NW.c)("label", null, [this.wordField, ii(WW, "by word")]), ...WW.state.readOnly ? [] : [(0, NW.c)("br"), this.replaceField, OW("replace", (() => qW(WW)), [ii(WW, "replace")]), OW("replaceAll", (() => RW(WW)), [ii(WW, "replace all")])], (0, NW.c)("button", {
          name: "close",
          onclick: () => FW(WW),
          "aria-label": ii(WW, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let WW = new yW({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        WW.eq(this.query) || (this.query = WW, this.view.dispatch({
          effects: dW.of(WW)
        }))
      }
      keydown(WW) {
        (0, mW.U)(this.view, WW, "search-panel") ? WW.preventDefault(): 13 == WW.keyCode && WW.target == this.searchField ? (WW.preventDefault(), (WW.shiftKey ? XW : CW)(this.view)) : 13 == WW.keyCode && WW.target == this.replaceField && (WW.preventDefault(), qW(this.view))
      }
      update(WW) {
        for (let iW of WW.transactions)
          for (let WW of iW.effects) WW.is(dW) && !WW.value.eq(this.query) && this.setQuery(WW.value)
      }
      setQuery(WW) {
        this.query = WW, this.searchField.value = WW.search, this.replaceField.value = WW.replace, this.caseField.checked = WW.caseSensitive, this.reField.checked = WW.regexp, this.wordField.checked = WW.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(YW).top
      }
    }

    function ii(WW, iW) {
      return WW.state.phrase(iW)
    }
    const Oi = 30,
      mi = /[\s\.,:;?!]/;

    function Ei(WW, iW) {
      let {
        from: OW,
        to: EW
      } = iW, NW = WW.state.doc.lineAt(OW), PW = WW.state.doc.lineAt(EW).to, LW = Math.max(NW.from, OW - Oi), cW = Math.min(PW, EW + Oi), wW = WW.state.sliceDoc(LW, cW);
      if (LW != NW.from)
        for (let mW = 0; mW < Oi; mW++)
          if (!mi.test(wW[mW + 1]) && mi.test(wW[mW])) {
            wW = wW.slice(mW);
            break
          } if (cW != PW)
        for (let mW = wW.length - 1; mW > wW.length - Oi; mW--)
          if (!mi.test(wW[mW - 1]) && mi.test(wW[mW])) {
            wW = wW.slice(0, mW);
            break
          } return mW.e.announce.of(`${WW.state.phrase("current match")}. ${wW} ${WW.state.phrase("on line")} ${NW.number}.`)
    }
    const Ni = mW.e.baseTheme({
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
      Pi = [vW, EW.w.low(pW), Ni]
  },
  53511: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => oW,
      d: () => wi,
      e: () => HE,
      f: () => cP,
      i: () => Fi,
      j: () => nW,
      n: () => oN,
      o: () => QE,
      s: () => cN,
      t: () => QN,
      u: () => rN,
      y: () => lP,
      E: () => MN,
      A: () => dP,
      G: () => jN,
      H: () => aN,
      I: () => DE,
      K: () => HP,
      L: () => Ii,
      N: () => yN,
      R: () => HN,
      U: () => fE,
      W: () => EP,
      Z: () => mP,
      _: () => XN
    });
    for (var mW = OW(53507), EW = OW(53515), NW = {
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
      }, PW = {
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
      }, LW = "undefined" != typeof navigator && /Mac/.test(navigator.platform), cW = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), wW = 0; wW < 10; wW++) NW[48 + wW] = NW[96 + wW] = String(wW);
    for (wW = 1; wW <= 24; wW++) NW[wW + 111] = "F" + wW;
    for (wW = 65; wW <= 90; wW++) NW[wW] = String.fromCharCode(wW + 32), PW[wW] = String.fromCharCode(wW);
    for (var tW in NW) PW.hasOwnProperty(tW) || (PW[tW] = NW[tW]);
    var ZW = OW(53517);
    let xW = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      lW = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const AW = /Edge\/(\d+)/.exec(xW.userAgent),
      bW = /MSIE \d/.test(xW.userAgent),
      jW = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(xW.userAgent),
      UW = !!(bW || jW || AW),
      kW = !UW && /gecko\/(\d+)/i.test(xW.userAgent),
      sW = !UW && /Chrome\/(\d+)/.exec(xW.userAgent),
      MW = "webkitFontSmoothing" in lW.documentElement.style,
      KW = !UW && /Apple Computer/.test(xW.vendor),
      SW = KW && (/Mobile\/\w+/.test(xW.userAgent) || xW.maxTouchPoints > 2);
    var YW = {
      mac: SW || /Mac/.test(xW.platform),
      windows: /Win/.test(xW.platform),
      linux: /Linux|X11/.test(xW.platform),
      ie: UW,
      ie_version: bW ? lW.documentMode || 6 : jW ? +jW[1] : AW ? +AW[1] : 0,
      gecko: kW,
      gecko_version: kW ? +(/Firefox\/(\d+)/.exec(xW.userAgent) || [0, 0])[1] : 0,
      chrome: !!sW,
      chrome_version: sW ? +sW[1] : 0,
      ios: SW,
      android: /Android\b/.test(xW.userAgent),
      webkit: MW,
      webkit_version: MW ? +(/\bAppleWebKit\/(\d+)/.exec(xW.userAgent) || [0, 0])[1] : 0,
      safari: KW,
      safari_version: KW ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(xW.userAgent) || [0, 0])[1] : 0,
      tabSize: null != lW.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function yW(WW, iW) {
      for (let OW in WW) "class" == OW && iW.class ? iW.class += " " + WW.class : "style" == OW && iW.style ? iW.style += ";" + WW.style : iW[OW] = WW[OW];
      return iW
    }
    const TW = Object.create(null);

    function JW(WW, iW, OW) {
      if (WW == iW) return !0;
      WW || (WW = TW), iW || (iW = TW);
      let mW = Object.keys(WW),
        EW = Object.keys(iW);
      if (mW.length - (OW && mW.indexOf(OW) > -1 ? 1 : 0) != EW.length - (OW && EW.indexOf(OW) > -1 ? 1 : 0)) return !1;
      for (let NW of mW)
        if (NW != OW && (-1 == EW.indexOf(NW) || WW[NW] !== iW[NW])) return !1;
      return !0
    }

    function hW(WW, iW, OW) {
      let mW = !1;
      if (iW)
        for (let EW in iW) OW && EW in OW || (mW = !0, "style" == EW ? WW.style.cssText = "" : WW.removeAttribute(EW));
      if (OW)
        for (let EW in OW) iW && iW[EW] == OW[EW] || (mW = !0, "style" == EW ? WW.style.cssText = OW[EW] : WW.setAttribute(EW, OW[EW]));
      return mW
    }

    function HW(WW) {
      let iW = Object.create(null);
      for (let OW = 0; OW < WW.attributes.length; OW++) {
        let mW = WW.attributes[OW];
        iW[mW.name] = mW.value
      }
      return iW
    }
    class nW {
      eq(WW) {
        return !1
      }
      updateDOM(WW, iW, OW) {
        return !1
      }
      compare(WW) {
        return this == WW || this.constructor == WW.constructor && this.eq(WW)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(WW) {
        return !0
      }
      coordsAt(WW, iW, OW) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(WW) {}
    }
    var uW = function(WW) {
      return WW[WW.Text = 0] = "Text", WW[WW.WidgetBefore = 1] = "WidgetBefore", WW[WW.WidgetAfter = 2] = "WidgetAfter", WW[WW.WidgetRange = 3] = "WidgetRange", WW
    }(uW || (uW = {}));
    class oW extends mW.G {
      constructor(WW, iW, OW, mW) {
        super(), this.startSide = WW, this.endSide = iW, this.widget = OW, this.spec = mW
      }
      get heightRelevant() {
        return !1
      }
      static mark(WW) {
        return new dW(WW)
      }
      static widget(WW) {
        let iW = Math.max(-1e4, Math.min(1e4, WW.side || 0)),
          OW = !!WW.block;
        return iW += OW && !WW.inlineOrder ? iW > 0 ? 3e8 : -4e8 : iW > 0 ? 1e8 : -1e8, new vW(WW, iW, iW, OW, WW.widget || null, !1)
      }
      static replace(WW) {
        let iW, OW, mW = !!WW.block;
        if (WW.isBlockGap) iW = -5e8, OW = 4e8;
        else {
          let {
            start: EW,
            end: NW
          } = gW(WW, mW);
          iW = (EW ? mW ? -3e8 : -1 : 5e8) - 1, OW = 1 + (NW ? mW ? 2e8 : 1 : -6e8)
        }
        return new vW(WW, iW, OW, mW, WW.widget || null, !0)
      }
      static line(WW) {
        return new eW(WW)
      }
      static set(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return mW.C.of(WW, iW)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    oW.none = mW.C.empty;
    class dW extends oW {
      constructor(WW) {
        let {
          start: iW,
          end: OW
        } = gW(WW);
        super(iW ? -1 : 5e8, OW ? 1 : -6e8, null, WW), this.tagName = WW.tagName || "span", this.attrs = WW.class && WW.attributes ? yW(WW.attributes, {
          class: WW.class
        }) : WW.class ? {
          class: WW.class
        } : WW.attributes || TW
      }
      eq(WW) {
        return this == WW || WW instanceof dW && this.tagName == WW.tagName && JW(this.attrs, WW.attrs)
      }
      range(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW;
        if (WW >= iW) throw new RangeError("Mark decorations may not be empty");
        return super.range(WW, iW)
      }
    }
    dW.prototype.point = !1;
    class eW extends oW {
      constructor(WW) {
        super(-2e8, -2e8, null, WW)
      }
      eq(WW) {
        return WW instanceof eW && this.spec.class == WW.spec.class && JW(this.spec.attributes, WW.spec.attributes)
      }
      range(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW;
        if (iW != WW) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(WW, iW)
      }
    }
    eW.prototype.mapMode = mW.t.TrackBefore, eW.prototype.point = !0;
    class vW extends oW {
      constructor(WW, iW, OW, EW, NW, PW) {
        super(iW, OW, NW, WW), this.block = EW, this.isReplace = PW, this.mapMode = EW ? iW <= 0 ? mW.t.TrackBefore : mW.t.TrackAfter : mW.t.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? uW.WidgetRange : this.startSide <= 0 ? uW.WidgetBefore : uW.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(WW) {
        return WW instanceof vW && (iW = this.widget, OW = WW.widget, iW == OW || !!(iW && OW && iW.compare(OW))) && this.block == WW.block && this.startSide == WW.startSide && this.endSide == WW.endSide;
        var iW, OW
      }
      range(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW;
        if (this.isReplace && (WW > iW || WW == iW && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && iW != WW) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(WW, iW)
      }
    }

    function gW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: OW,
          inclusiveEnd: mW
        } = WW;
      return null == OW && (OW = WW.inclusive), null == mW && (mW = WW.inclusive), {
        start: null !== OW && void 0 !== OW ? OW : iW,
        end: null !== mW && void 0 !== mW ? mW : iW
      }
    }

    function DW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        EW = OW.length - 1;
      EW >= 0 && OW[EW] + mW >= WW ? OW[EW] = Math.max(OW[EW], iW) : OW.push(WW, iW)
    }
    vW.prototype.point = !0;
    class VW extends mW.G {
      constructor(WW, iW) {
        super(), this.tagName = WW, this.attributes = iW
      }
      eq(WW) {
        return WW == this || WW instanceof VW && this.tagName == WW.tagName && JW(this.attributes, WW.attributes)
      }
      static create(WW) {
        return new VW(WW.tagName, WW.attributes || TW)
      }
      static set(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return mW.C.of(WW, iW)
      }
    }

    function pW(WW) {
      let iW;
      return iW = 11 == WW.nodeType ? WW.getSelection ? WW : WW.ownerDocument : WW, iW.getSelection()
    }

    function fW(WW, iW) {
      return !!iW && (WW == iW || WW.contains(1 != iW.nodeType ? iW.parentNode : iW))
    }

    function CW(WW, iW) {
      if (!iW.anchorNode) return !1;
      try {
        return fW(WW, iW.anchorNode)
      } catch (OW) {
        return !1
      }
    }

    function XW(WW) {
      return 3 == WW.nodeType ? mi(WW, 0, WW.nodeValue.length).getClientRects() : 1 == WW.nodeType ? WW.getClientRects() : []
    }

    function BW(WW, iW, OW, mW) {
      return !!OW && (GW(WW, iW, OW, mW, -1) || GW(WW, iW, OW, mW, 1))
    }

    function qW(WW) {
      for (var iW = 0;; iW++)
        if (!(WW = WW.previousSibling)) return iW
    }

    function RW(WW) {
      return 1 == WW.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(WW.nodeName)
    }

    function GW(WW, iW, OW, mW, EW) {
      for (;;) {
        if (WW == OW && iW == mW) return !0;
        if (iW == (EW < 0 ? 0 : IW(WW))) {
          if ("DIV" == WW.nodeName) return !1;
          let OW = WW.parentNode;
          if (!OW || 1 != OW.nodeType) return !1;
          iW = qW(WW) + (EW < 0 ? 0 : 1), WW = OW
        } else {
          if (1 != WW.nodeType) return !1;
          if (1 == (WW = WW.childNodes[iW + (EW < 0 ? -1 : 0)]).nodeType && "false" == WW.contentEditable) return !1;
          iW = EW < 0 ? IW(WW) : 0
        }
      }
    }

    function IW(WW) {
      return 3 == WW.nodeType ? WW.nodeValue.length : WW.childNodes.length
    }

    function aW(WW, iW) {
      let OW = iW ? WW.left : WW.right;
      return {
        left: OW,
        right: OW,
        top: WW.top,
        bottom: WW.bottom
      }
    }

    function rW(WW) {
      let iW = WW.visualViewport;
      return iW ? {
        left: 0,
        right: iW.width,
        top: 0,
        bottom: iW.height
      } : {
        left: 0,
        right: WW.innerWidth,
        top: 0,
        bottom: WW.innerHeight
      }
    }

    function zW(WW, iW) {
      let OW = iW.width / WW.offsetWidth,
        mW = iW.height / WW.offsetHeight;
      return (OW > .995 && OW < 1.005 || !isFinite(OW) || Math.abs(iW.width - WW.offsetWidth) < 1) && (OW = 1), (mW > .995 && mW < 1.005 || !isFinite(mW) || Math.abs(iW.height - WW.offsetHeight) < 1) && (mW = 1), {
        scaleX: OW,
        scaleY: mW
      }
    }

    function FW(WW) {
      let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        OW = WW.ownerDocument,
        mW = null,
        EW = null;
      for (let NW = WW.parentNode; NW && (NW != OW.body && (iW && !mW || !EW));)
        if (1 == NW.nodeType) !EW && NW.scrollHeight > NW.clientHeight && (EW = NW), iW && !mW && NW.scrollWidth > NW.clientWidth && (mW = NW), NW = NW.assignedSlot || NW.parentNode;
        else {
          if (11 != NW.nodeType) break;
          NW = NW.host
        } return {
        x: mW,
        y: EW
      }
    }
    VW.prototype.startSide = VW.prototype.endSide = -1;
    class QW {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(WW) {
        return this.anchorNode == WW.anchorNode && this.anchorOffset == WW.anchorOffset && this.focusNode == WW.focusNode && this.focusOffset == WW.focusOffset
      }
      setRange(WW) {
        let {
          anchorNode: iW,
          focusNode: OW
        } = WW;
        this.set(iW, Math.min(WW.anchorOffset, iW ? IW(iW) : 0), OW, Math.min(WW.focusOffset, OW ? IW(OW) : 0))
      }
      set(WW, iW, OW, mW) {
        this.anchorNode = WW, this.anchorOffset = iW, this.focusNode = OW, this.focusOffset = mW
      }
    }
    let Wi, ii = null;

    function Oi(WW) {
      if (WW.setActive) return WW.setActive();
      if (ii) return WW.focus(ii);
      let iW = [];
      for (let OW = WW; OW && (iW.push(OW, OW.scrollTop, OW.scrollLeft), OW != OW.ownerDocument); OW = OW.parentNode);
      if (WW.focus(null == ii ? {
          get preventScroll() {
            return ii = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !ii) {
        ii = !1;
        for (let WW = 0; WW < iW.length;) {
          let OW = iW[WW++],
            mW = iW[WW++],
            EW = iW[WW++];
          OW.scrollTop != mW && (OW.scrollTop = mW), OW.scrollLeft != EW && (OW.scrollLeft = EW)
        }
      }
    }

    function mi(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iW,
        mW = Wi || (Wi = document.createRange());
      return mW.setEnd(WW, OW), mW.setStart(WW, iW), mW
    }

    function Ei(WW, iW, OW, mW) {
      let EW = {
        key: iW,
        code: iW,
        keyCode: OW,
        which: OW,
        cancelable: !0
      };
      mW && ({
        altKey: EW.altKey,
        ctrlKey: EW.ctrlKey,
        shiftKey: EW.shiftKey,
        metaKey: EW.metaKey
      } = mW);
      let NW = new KeyboardEvent("keydown", EW);
      NW.synthetic = !0, WW.dispatchEvent(NW);
      let PW = new KeyboardEvent("keyup", EW);
      return PW.synthetic = !0, WW.dispatchEvent(PW), NW.defaultPrevented || PW.defaultPrevented
    }

    function Ni(WW) {
      return WW instanceof Window ? WW.pageYOffset > Math.max(0, WW.document.documentElement.scrollHeight - WW.innerHeight - 4) : WW.scrollTop > Math.max(1, WW.scrollHeight - WW.clientHeight - 4)
    }

    function Pi(WW, iW) {
      for (let OW = WW, mW = iW;;) {
        if (3 == OW.nodeType && mW > 0) return {
          node: OW,
          offset: mW
        };
        if (1 == OW.nodeType && mW > 0) {
          if ("false" == OW.contentEditable) return null;
          OW = OW.childNodes[mW - 1], mW = IW(OW)
        } else {
          if (!OW.parentNode || RW(OW)) return null;
          mW = qW(OW), OW = OW.parentNode
        }
      }
    }

    function Li(WW, iW) {
      for (let OW = WW, mW = iW;;) {
        if (3 == OW.nodeType && mW < OW.nodeValue.length) return {
          node: OW,
          offset: mW
        };
        if (1 == OW.nodeType && mW < OW.childNodes.length) {
          if ("false" == OW.contentEditable) return null;
          OW = OW.childNodes[mW], mW = 0
        } else {
          if (!OW.parentNode || RW(OW)) return null;
          mW = qW(OW) + 1, OW = OW.parentNode
        }
      }
    }
    YW.safari && YW.safari_version >= 26 && (ii = !1);
    class ci {
      constructor(WW, iW) {
        let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = WW, this.offset = iW, this.precise = OW
      }
      static before(WW, iW) {
        return new ci(WW.parentNode, qW(WW), iW)
      }
      static after(WW, iW) {
        return new ci(WW.parentNode, qW(WW) + 1, iW)
      }
    }
    var wi = function(WW) {
      return WW[WW.LTR = 0] = "LTR", WW[WW.RTL = 1] = "RTL", WW
    }(wi || (wi = {}));
    const ti = wi.LTR,
      Zi = wi.RTL;

    function xi(WW) {
      let iW = [];
      for (let OW = 0; OW < WW.length; OW++) iW.push(1 << +WW[OW]);
      return iW
    }
    const li = xi("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      Ai = xi("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      bi = Object.create(null),
      ji = [];
    for (let eP of ["()", "[]", "{}"]) {
      let WW = eP.charCodeAt(0),
        iW = eP.charCodeAt(1);
      bi[WW] = iW, bi[iW] = -WW
    }

    function Ui(WW) {
      return WW <= 247 ? li[WW] : 1424 <= WW && WW <= 1524 ? 2 : 1536 <= WW && WW <= 1785 ? Ai[WW - 1536] : 1774 <= WW && WW <= 2220 ? 4 : 8192 <= WW && WW <= 8204 ? 256 : 64336 <= WW && WW <= 65023 ? 4 : 1
    }
    const ki = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class si {
      get dir() {
        return this.level % 2 ? Zi : ti
      }
      constructor(WW, iW, OW) {
        this.from = WW, this.to = iW, this.level = OW
      }
      side(WW, iW) {
        return this.dir == iW == WW ? this.to : this.from
      }
      forward(WW, iW) {
        return WW == (this.dir == iW)
      }
      static find(WW, iW, OW, mW) {
        let EW = -1;
        for (let NW = 0; NW < WW.length; NW++) {
          let PW = WW[NW];
          if (PW.from <= iW && PW.to >= iW) {
            if (PW.level == OW) return NW;
            (EW < 0 || (0 != mW ? mW < 0 ? PW.from < iW : PW.to > iW : WW[EW].level > PW.level)) && (EW = NW)
          }
        }
        if (EW < 0) throw new RangeError("Index out of range");
        return EW
      }
    }

    function Mi(WW, iW) {
      if (WW.length != iW.length) return !1;
      for (let OW = 0; OW < WW.length; OW++) {
        let mW = WW[OW],
          EW = iW[OW];
        if (mW.from != EW.from || mW.to != EW.to || mW.direction != EW.direction || !Mi(mW.inner, EW.inner)) return !1
      }
      return !0
    }
    const Ki = [];

    function Si(WW, iW, OW, mW, EW, NW, PW) {
      let LW = mW % 2 ? 2 : 1;
      if (mW % 2 == EW % 2)
        for (let cW = iW, wW = 0; cW < OW;) {
          let iW = !0,
            tW = !1;
          if (wW == NW.length || cW < NW[wW].from) {
            let WW = Ki[cW];
            WW != LW && (iW = !1, tW = 16 == WW)
          }
          let ZW = iW || 1 != LW ? null : [],
            xW = iW ? mW : mW + 1,
            lW = cW;
          WW: for (;;)
            if (wW < NW.length && lW == NW[wW].from) {
              if (tW) break WW;
              let AW = NW[wW];
              if (!iW)
                for (let WW = AW.to, iW = wW + 1;;) {
                  if (WW == OW) break WW;
                  if (!(iW < NW.length && NW[iW].from == WW)) {
                    if (Ki[WW] == LW) break WW;
                    break
                  }
                  WW = NW[iW++].to
                }
              if (wW++, ZW) ZW.push(AW);
              else {
                AW.from > cW && PW.push(new si(cW, AW.from, xW)), Yi(WW, AW.direction == ti != !(xW % 2) ? mW + 1 : mW, EW, AW.inner, AW.from, AW.to, PW), cW = AW.to
              }
              lW = AW.to
            } else {
              if (lW == OW || (iW ? Ki[lW] != LW : Ki[lW] == LW)) break;
              lW++
            } ZW ? Si(WW, cW, lW, mW + 1, EW, ZW, PW) : cW < lW && PW.push(new si(cW, lW, xW)), cW = lW
        } else
          for (let cW = OW, wW = NW.length; cW > iW;) {
            let OW = !0,
              tW = !1;
            if (!wW || cW > NW[wW - 1].to) {
              let WW = Ki[cW - 1];
              WW != LW && (OW = !1, tW = 16 == WW)
            }
            let ZW = OW || 1 != LW ? null : [],
              xW = OW ? mW : mW + 1,
              lW = cW;
            WW: for (;;)
              if (wW && lW == NW[wW - 1].to) {
                if (tW) break WW;
                let AW = NW[--wW];
                if (!OW)
                  for (let WW = AW.from, OW = wW;;) {
                    if (WW == iW) break WW;
                    if (!OW || NW[OW - 1].to != WW) {
                      if (Ki[WW - 1] == LW) break WW;
                      break
                    }
                    WW = NW[--OW].from
                  }
                if (ZW) ZW.push(AW);
                else {
                  AW.to < cW && PW.push(new si(AW.to, cW, xW)), Yi(WW, AW.direction == ti != !(xW % 2) ? mW + 1 : mW, EW, AW.inner, AW.from, AW.to, PW), cW = AW.from
                }
                lW = AW.from
              } else {
                if (lW == iW || (OW ? Ki[lW - 1] != LW : Ki[lW - 1] == LW)) break;
                lW--
              } ZW ? Si(WW, lW, cW, mW + 1, EW, ZW, PW) : lW < cW && PW.push(new si(lW, cW, xW)), cW = lW
          }
    }

    function Yi(WW, iW, OW, mW, EW, NW, PW) {
      let LW = iW % 2 ? 2 : 1;
      ! function(WW, iW, OW, mW, EW) {
        for (let NW = 0; NW <= mW.length; NW++) {
          let PW = NW ? mW[NW - 1].to : iW,
            LW = NW < mW.length ? mW[NW].from : OW,
            cW = NW ? 256 : EW;
          for (let iW = PW, OW = cW, mW = cW; iW < LW; iW++) {
            let EW = Ui(WW.charCodeAt(iW));
            512 == EW ? EW = OW : 8 == EW && 4 == mW && (EW = 16), Ki[iW] = 4 == EW ? 2 : EW, 7 & EW && (mW = EW), OW = EW
          }
          for (let WW = PW, iW = cW, mW = cW; WW < LW; WW++) {
            let EW = Ki[WW];
            if (128 == EW) WW < LW - 1 && iW == Ki[WW + 1] && 24 & iW ? EW = Ki[WW] = iW : Ki[WW] = 256;
            else if (64 == EW) {
              let EW = WW + 1;
              for (; EW < LW && 64 == Ki[EW];) EW++;
              let NW = WW && 8 == iW || EW < OW && 8 == Ki[EW] ? 1 == mW ? 1 : 8 : 256;
              for (let iW = WW; iW < EW; iW++) Ki[iW] = NW;
              WW = EW - 1
            } else 8 == EW && 1 == mW && (Ki[WW] = 1);
            iW = EW, 7 & EW && (mW = EW)
          }
        }
      }(WW, EW, NW, mW, LW),
      function(WW, iW, OW, mW, EW) {
        let NW = 1 == EW ? 2 : 1;
        for (let PW = 0, LW = 0, cW = 0; PW <= mW.length; PW++) {
          let wW = PW ? mW[PW - 1].to : iW,
            tW = PW < mW.length ? mW[PW].from : OW;
          for (let iW, OW, mW, PW = wW; PW < tW; PW++)
            if (OW = bi[iW = WW.charCodeAt(PW)])
              if (OW < 0) {
                for (let WW = LW - 3; WW >= 0; WW -= 3)
                  if (ji[WW + 1] == -OW) {
                    let iW = ji[WW + 2],
                      OW = 2 & iW ? EW : 4 & iW ? 1 & iW ? NW : EW : 0;
                    OW && (Ki[PW] = Ki[ji[WW]] = OW), LW = WW;
                    break
                  }
              } else {
                if (189 == ji.length) break;
                ji[LW++] = PW, ji[LW++] = iW, ji[LW++] = cW
              }
          else if (2 == (mW = Ki[PW]) || 1 == mW) {
            let WW = mW == EW;
            cW = WW ? 0 : 1;
            for (let iW = LW - 3; iW >= 0; iW -= 3) {
              let OW = ji[iW + 2];
              if (2 & OW) break;
              if (WW) ji[iW + 2] |= 2;
              else {
                if (4 & OW) break;
                ji[iW + 2] |= 4
              }
            }
          }
        }
      }(WW, EW, NW, mW, LW),
      function(WW, iW, OW, mW) {
        for (let EW = 0, NW = mW; EW <= OW.length; EW++) {
          let PW = EW ? OW[EW - 1].to : WW,
            LW = EW < OW.length ? OW[EW].from : iW;
          for (let cW = PW; cW < LW;) {
            let PW = Ki[cW];
            if (256 == PW) {
              let PW = cW + 1;
              for (;;)
                if (PW == LW) {
                  if (EW == OW.length) break;
                  PW = OW[EW++].to, LW = EW < OW.length ? OW[EW].from : iW
                } else {
                  if (256 != Ki[PW]) break;
                  PW++
                } let wW = 1 == NW,
                tW = wW == (1 == (PW < iW ? Ki[PW] : mW)) ? wW ? 1 : 2 : mW;
              for (let iW = PW, mW = EW, NW = mW ? OW[mW - 1].to : WW; iW > cW;) iW == NW && (iW = OW[--mW].from, NW = mW ? OW[mW - 1].to : WW), Ki[--iW] = tW;
              cW = PW
            } else NW = PW, cW++
          }
        }
      }(EW, NW, mW, LW), Si(WW, EW, NW, iW, OW, mW, PW)
    }

    function yi(WW, iW, OW) {
      if (!WW) return [new si(0, 0, iW == Zi ? 1 : 0)];
      if (iW == ti && !OW.length && !ki.test(WW)) return Ti(WW.length);
      if (OW.length)
        for (; WW.length > Ki.length;) Ki[Ki.length] = 256;
      let mW = [],
        EW = iW == ti ? 0 : 1;
      return Yi(WW, EW, EW, OW, 0, WW.length, mW), mW
    }

    function Ti(WW) {
      return [new si(0, WW, 0)]
    }
    let Ji = "";

    function Hi(WW, iW, OW, EW, NW) {
      var PW;
      let LW = EW.head - WW.from,
        cW = si.find(iW, LW, null !== (PW = EW.bidiLevel) && void 0 !== PW ? PW : -1, EW.assoc),
        wW = iW[cW],
        tW = wW.side(NW, OW);
      if (LW == tW) {
        let WW = cW += NW ? 1 : -1;
        if (WW < 0 || WW >= iW.length) return null;
        wW = iW[cW = WW], LW = wW.side(!NW, OW), tW = wW.side(NW, OW)
      }
      let ZW = (0, mW.$)(WW.text, LW, wW.forward(NW, OW));
      (ZW < wW.from || ZW > wW.to) && (ZW = tW), Ji = WW.text.slice(Math.min(LW, ZW), Math.max(LW, ZW));
      let xW = cW == (NW ? iW.length - 1 : 0) ? null : iW[cW + (NW ? 1 : -1)];
      return xW && ZW == tW && xW.level + (NW ? 0 : 1) < wW.level ? mW.l.cursor(xW.side(!NW, OW) + WW.from, xW.forward(NW, OW) ? 1 : -1, xW.level) : mW.l.cursor(ZW + WW.from, wW.forward(NW, OW) ? -1 : 1, wW.level)
    }

    function ni(WW, iW, OW) {
      for (let mW = iW; mW < OW; mW++) {
        let iW = Ui(WW.charCodeAt(mW));
        if (1 == iW) return ti;
        if (2 == iW || 4 == iW) return Zi
      }
      return ti
    }
    const ui = mW.p.define(),
      oi = mW.p.define(),
      di = mW.p.define(),
      ei = mW.p.define(),
      vi = mW.p.define(),
      gi = mW.p.define(),
      Di = mW.p.define(),
      Vi = mW.p.define(),
      fi = mW.p.define(),
      Ci = mW.p.define({
        combine: WW => WW.some((WW => WW))
      }),
      Xi = mW.p.define({
        combine: WW => WW.some((WW => WW))
      }),
      Bi = mW.p.define();
    class qi {
      constructor(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = WW, this.y = iW, this.x = OW, this.yMargin = mW, this.xMargin = EW, this.isSnapshot = NW
      }
      map(WW) {
        return WW.empty ? this : new qi(this.range.map(WW), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(WW) {
        return this.range.to <= WW.doc.length ? this : new qi(mW.l.cursor(WW.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const Ri = mW.H.define({
        map: (WW, iW) => WW.map(iW)
      }),
      Gi = mW.H.define();

    function Ii(WW, iW, OW) {
      let mW = WW.facet(ei);
      mW.length ? mW[0](iW) : window.onerror && window.onerror(String(iW), OW, void 0, void 0, iW) || (OW ? console.error(OW + ":", iW) : console.error(iW))
    }
    const ai = mW.p.define({
      combine: WW => !WW.length || WW[0]
    });
    let ri = 0;
    const zi = mW.p.define({
      combine: WW => WW.filter(((iW, OW) => {
        for (let mW = 0; mW < OW; mW++)
          if (WW[mW].plugin == iW.plugin) return !1;
        return !0
      }))
    });
    class Fi {
      constructor(WW, iW, OW, mW, EW) {
        this.id = WW, this.create = iW, this.domEventHandlers = OW, this.domEventObservers = mW, this.baseExtensions = EW(this), this.extension = this.baseExtensions.concat(zi.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(WW) {
        return this.baseExtensions.concat(zi.of({
          plugin: this,
          arg: WW
        }))
      }
      static define(WW, iW) {
        const {
          eventHandlers: OW,
          eventObservers: mW,
          provide: EW,
          Km: NW
        } = iW || {};
        return new Fi(ri++, WW, OW, mW, (WW => {
          let iW = [];
          return NW && iW.push(OO.of((iW => {
            let OW = iW.plugin(WW);
            return OW ? NW(OW) : oW.none
          }))), EW && iW.push(EW(WW)), iW
        }))
      }
      static fromClass(WW, iW) {
        return Fi.define(((iW, OW) => new WW(iW, OW)), iW)
      }
    }
    class Qi {
      constructor(WW) {
        this.spec = WW, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(WW) {
        if (this.value) {
          if (this.mustUpdate) {
            let WW = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(WW)
            } catch (iW) {
              if (Ii(WW.state, iW, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (OW) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(WW, this.spec.arg)
        } catch (iW) {
          Ii(WW.state, iW, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(WW) {
        var iW;
        if (null === (iW = this.value) || void 0 === iW ? void 0 : iW.destroy) try {
          this.value.destroy()
        } catch (OW) {
          Ii(WW.state, OW, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const WO = mW.p.define(),
      iO = mW.p.define(),
      OO = mW.p.define(),
      mO = mW.p.define(),
      EO = mW.p.define(),
      NO = mW.p.define(),
      PO = mW.p.define();

    function LO(WW, iW) {
      let OW = WW.state.facet(PO);
      if (!OW.length) return OW;
      let EW = OW.map((iW => iW instanceof Function ? iW(WW) : iW)),
        NW = [];
      return mW.C.spans(EW, iW.from, iW.to, {
        point() {},
        span(WW, OW, mW, EW) {
          let PW = WW - iW.from,
            LW = OW - iW.from,
            cW = NW;
          for (let NW = mW.length - 1; NW >= 0; NW--, EW--) {
            let WW, OW = mW[NW].spec.bidiIsolate;
            if (null == OW && (OW = ni(iW.text, PW, LW)), EW > 0 && cW.length && (WW = cW[cW.length - 1]).to == PW && WW.direction == OW) WW.to = LW, cW = WW.inner;
            else {
              let WW = {
                from: PW,
                to: LW,
                direction: OW,
                inner: []
              };
              cW.push(WW), cW = WW.inner
            }
          }
        }
      }), NW
    }
    const cO = mW.p.define();

    function wO(WW) {
      let iW = 0,
        OW = 0,
        mW = 0,
        EW = 0;
      for (let NW of WW.state.facet(cO)) {
        let PW = NW(WW);
        PW && (null != PW.left && (iW = Math.max(iW, PW.left)), null != PW.right && (OW = Math.max(OW, PW.right)), null != PW.top && (mW = Math.max(mW, PW.top)), null != PW.bottom && (EW = Math.max(EW, PW.bottom)))
      }
      return {
        left: iW,
        right: OW,
        top: mW,
        bottom: EW
      }
    }
    const tO = mW.p.define();
    class ZO {
      constructor(WW, iW, OW, mW) {
        this.fromA = WW, this.toA = iW, this.fromB = OW, this.toB = mW
      }
      join(WW) {
        return new ZO(Math.min(this.fromA, WW.fromA), Math.max(this.toA, WW.toA), Math.min(this.fromB, WW.fromB), Math.max(this.toB, WW.toB))
      }
      addToSet(WW) {
        let iW = WW.length,
          OW = this;
        for (; iW > 0; iW--) {
          let mW = WW[iW - 1];
          if (!(mW.fromA > OW.toA)) {
            if (mW.toA < OW.fromA) break;
            OW = OW.join(mW), WW.splice(iW - 1, 1)
          }
        }
        return WW.splice(iW, 0, OW), WW
      }
      static extendWithRanges(WW, iW) {
        if (0 == iW.length) return WW;
        let OW = [];
        for (let mW = 0, EW = 0, NW = 0;;) {
          let PW = mW < WW.length ? WW[mW].fromB : 1e9,
            LW = EW < iW.length ? iW[EW] : 1e9,
            cW = Math.min(PW, LW);
          if (1e9 == cW) break;
          let wW = cW + NW,
            tW = cW,
            ZW = wW;
          for (;;)
            if (EW < iW.length && iW[EW] <= tW) {
              let OW = iW[EW + 1];
              EW += 2, tW = Math.max(tW, OW);
              for (let iW = mW; iW < WW.length && WW[iW].fromB <= tW; iW++) NW = WW[iW].toA - WW[iW].toB;
              ZW = Math.max(ZW, OW + NW)
            } else {
              if (!(mW < WW.length && WW[mW].fromB <= tW)) break;
              {
                let iW = WW[mW++];
                tW = Math.max(tW, iW.toB), ZW = Math.max(ZW, iW.toA), NW = iW.toA - iW.toB
              }
            } OW.push(new ZO(wW, ZW, cW, tW))
        }
        return OW
      }
    }
    class xO {
      constructor(WW, iW, OW) {
        this.view = WW, this.state = iW, this.transactions = OW, this.flags = 0, this.startState = WW.state, this.changes = mW.ChangeSet.empty(this.startState.doc.length);
        for (let mW of OW) this.changes = this.changes.compose(mW.changes);
        let EW = [];
        this.changes.iterChangedRanges(((WW, iW, OW, mW) => EW.push(new ZO(WW, iW, OW, mW)))), this.changedRanges = EW
      }
      static create(WW, iW, OW) {
        return new xO(WW, iW, OW)
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
        return this.transactions.some((WW => WW.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const lO = [];
    class AO {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = WW, this.length = iW, this.flags = OW, this.parent = null, WW.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return lO
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
      sync(WW) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let WW = this.domAttrs;
          WW && function(WW, iW) {
            for (let OW = WW.attributes.length - 1; OW >= 0; OW--) {
              let mW = WW.attributes[OW].name;
              null == iW[mW] && WW.removeAttribute(mW)
            }
            for (let OW in iW) {
              let mW = iW[OW];
              "style" == OW ? WW.style.cssText = mW : WW.getAttribute(OW) != mW && WW.setAttribute(OW, mW)
            }
          }(this.dom, WW)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(WW) {
        this.dom = WW, WW.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let OW of this.children) {
          if (OW == WW) return iW;
          iW += OW.length + OW.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(WW) {
        return this.posBefore(WW) + WW.length
      }
      covers(WW) {
        return !0
      }
      coordsIn(WW, iW) {
        return null
      }
      domPosFor(WW, iW) {
        let OW = qW(this.dom),
          mW = this.length ? WW > 0 : iW > 0;
        return new ci(this.parent.dom, OW + (mW ? 1 : 0), 0 == WW || WW == this.length)
      }
      markDirty(WW) {
        this.flags &= -3, WW && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let WW = this; WW; WW = WW.parent)
          if (WW instanceof UO) return WW;
        return null
      }
      static get(WW) {
        return WW.cmTile
      }
    }
    class bO extends AO {
      constructor(WW) {
        super(WW, 0), this._children = []
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
      append(WW) {
        this.children.push(WW), WW.parent = this
      }
      sync(WW) {
        if (2 & this.flags) return;
        super.sync(WW);
        let iW, OW = this.dom,
          mW = null,
          EW = (null === WW || void 0 === WW ? void 0 : WW.node) == OW ? WW : null,
          NW = 0;
        for (let PW of this.children) {
          if (PW.sync(WW), NW += PW.length + PW.breakAfter, iW = mW ? mW.nextSibling : OW.firstChild, EW && iW != PW.dom && (EW.written = !0), PW.dom.parentNode == OW)
            for (; iW && iW != PW.dom;) iW = jO(iW);
          else OW.insertBefore(PW.dom, iW);
          mW = PW.dom
        }
        for (iW = mW ? mW.nextSibling : OW.firstChild, EW && iW && (EW.written = !0); iW;) iW = jO(iW);
        this.length = NW
      }
    }

    function jO(WW) {
      let iW = WW.nextSibling;
      return WW.parentNode.removeChild(WW), iW
    }
    class UO extends bO {
      constructor(WW, iW) {
        super(iW), this.view = WW
      }
      owns(WW) {
        for (; WW; WW = WW.parent)
          if (WW == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(WW) {
        for (;;) {
          if (!WW) return null;
          let iW = AO.get(WW);
          if (iW && this.owns(iW)) return iW;
          WW = WW.parentNode
        }
      }
      blockTiles(WW) {
        for (let iW = [], OW = this, mW = 0, EW = 0;;)
          if (mW == OW.children.length) {
            if (!iW.length) return;
            OW = OW.parent, OW.breakAfter && EW++, mW = iW.pop()
          } else {
            let NW = OW.children[mW++];
            if (NW instanceof kO) iW.push(mW), OW = NW, mW = 0;
            else {
              let iW = EW + NW.length,
                OW = WW(NW, EW);
              if (void 0 !== OW) return OW;
              EW = iW + NW.breakAfter
            }
          }
      }
      resolveBlock(WW, iW) {
        let OW, mW, EW = -1,
          NW = -1;
        if (this.blockTiles(((PW, LW) => {
            let cW = LW + PW.length;
            if (WW >= LW && WW <= cW) {
              if (PW.isWidget() && iW >= -1 && iW <= 1) {
                if (32 & PW.flags) return !0;
                16 & PW.flags && (OW = void 0)
              }(LW < WW || WW == cW && (iW < -1 ? PW.length : PW.covers(1))) && (!OW || !PW.isWidget() && OW.isWidget()) && (OW = PW, EW = WW - LW), (cW > WW || WW == LW && (iW > 1 ? PW.length : PW.covers(-1))) && (!mW || !PW.isWidget() && mW.isWidget()) && (mW = PW, NW = WW - LW)
            }
          })), !OW && !mW) throw new Error("No tile at position " + WW);
        return OW && iW < 0 || !mW ? {
          tile: OW,
          offset: EW
        } : {
          tile: mW,
          offset: NW
        }
      }
    }
    class kO extends bO {
      constructor(WW, iW) {
        super(WW), this.wrapper = iW
      }
      isBlock() {
        return !0
      }
      covers(WW) {
        return !!this.children.length && (WW < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (WW, iW) {
        let OW = new kO(iW || document.createElement(WW.tagName), WW);
        return iW || (OW.flags |= 4), OW
      }
    }
    class sO extends bO {
      constructor(WW, iW) {
        super(WW), this.attrs = iW
      }
      isLine() {
        return !0
      }
      static start(WW, iW, OW) {
        let mW = new sO(iW || document.createElement("div"), WW);
        return iW && OW || (mW.flags |= 4), mW
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(WW, iW, OW) {
        let mW = null,
          EW = -1,
          NW = null,
          PW = -1;
        ! function WW(LW, cW) {
          for (let wW = 0, tW = 0; wW < LW.children.length && tW <= cW; wW++) {
            let ZW = LW.children[wW],
              xW = tW + ZW.length;
            xW >= cW && (ZW.isComposite() ? WW(ZW, cW - tW) : (!NW || NW.isHidden && (iW > 0 || OW && MO(NW, ZW))) && (xW > cW || 32 & ZW.flags) ? (NW = ZW, PW = cW - tW) : (tW < cW || 16 & ZW.flags && !ZW.isHidden) && (mW = ZW, EW = cW - tW)), tW = xW
          }
        }(this, WW);
        let LW = (iW < 0 ? mW : NW) || mW || NW;
        return LW ? {
          tile: LW,
          offset: LW == mW ? EW : PW
        } : null
      }
      coordsIn(WW, iW) {
        let OW = this.resolveInline(WW, iW, !0);
        return OW ? OW.tile.coordsIn(Math.max(0, OW.offset), iW) : function(WW) {
          let iW = WW.dom.lastChild;
          if (!iW) return WW.dom.getBoundingClientRect();
          let OW = XW(iW);
          return OW[OW.length - 1] || null
        }(this)
      }
      domIn(WW, iW) {
        let OW = this.resolveInline(WW, iW);
        if (OW) {
          let {
            tile: WW,
            offset: mW
          } = OW;
          if (this.dom.contains(WW.dom)) return WW.isText() ? new ci(WW.dom, Math.min(WW.dom.nodeValue.length, mW)) : WW.domPosFor(mW, 16 & WW.flags ? 1 : 32 & WW.flags ? -1 : iW);
          let EW = OW.tile.parent,
            NW = !1;
          for (let iW of EW.children) {
            if (NW) return new ci(iW.dom, 0);
            iW == OW.tile && (NW = !0)
          }
        }
        return new ci(this.dom, 0)
      }
    }

    function MO(WW, iW) {
      let OW = WW.coordsIn(0, 1),
        mW = iW.coordsIn(0, 1);
      return OW && mW && mW.top < OW.bottom
    }
    class KO extends bO {
      constructor(WW, iW) {
        super(WW), this.mark = iW
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (WW, iW) {
        let OW = new KO(iW || document.createElement(WW.tagName), WW);
        return iW || (OW.flags |= 4), OW
      }
    }
    class SO extends AO {
      constructor(WW, iW) {
        super(WW, iW.length), this.text = iW
      }
      sync(WW) {
        2 & this.flags || (super.sync(WW), this.dom.nodeValue != this.text && (WW && WW.node == this.dom && (WW.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(WW, iW) {
        let OW = this.dom.nodeValue.length;
        WW > OW && (WW = OW);
        let mW = WW,
          EW = WW,
          NW = 0;
        0 == WW && iW < 0 || WW == OW && iW >= 0 ? YW.chrome || YW.gecko || (WW ? (mW--, NW = 1) : EW < OW && (EW++, NW = -1)) : iW < 0 ? mW-- : EW < OW && EW++;
        let PW = mi(this.dom, mW, EW).getClientRects();
        if (!PW.length) return null;
        let LW = PW[(NW ? NW < 0 : iW >= 0) ? 0 : PW.length - 1];
        return YW.safari && !NW && 0 == LW.width && (LW = Array.prototype.find.call(PW, (WW => WW.width)) || LW), NW ? aW(LW, NW < 0) : LW || null
      }
      static of (WW, iW) {
        let OW = new SO(iW || document.createTextNode(WW), WW);
        return iW || (OW.flags |= 2), OW
      }
    }
    class YO extends AO {
      constructor(WW, iW, OW, mW) {
        super(WW, iW, mW), this.widget = OW
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(WW) {
        return !(48 & this.flags) && (this.flags & (WW < 0 ? 64 : 128)) > 0
      }
      coordsIn(WW, iW) {
        return this.coordsInWidget(WW, iW, !1)
      }
      coordsInWidget(WW, iW, OW) {
        let mW = this.widget.coordsAt(this.dom, WW, iW);
        if (mW) return mW;
        if (OW) return aW(this.dom.getBoundingClientRect(), this.length ? 0 == WW : iW <= 0);
        {
          let iW = this.dom.getClientRects(),
            OW = null;
          if (!iW.length) return null;
          let mW = !!(16 & this.flags) || !(32 & this.flags) && WW > 0;
          for (let EW = mW ? iW.length - 1 : 0; OW = iW[EW], !(WW > 0 ? 0 == EW : EW == iW.length - 1 || OW.top < OW.bottom); EW += mW ? -1 : 1);
          return aW(OW, !mW)
        }
      }
      get overrideDOMText() {
        if (!this.length) return mW.M.empty;
        let {
          root: WW
        } = this;
        if (!WW) return mW.M.empty;
        let iW = this.posAtStart;
        return WW.view.state.doc.slice(iW, iW + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (WW, iW, OW, mW, EW) {
        return EW || (EW = WW.toDOM(iW), WW.editable || (EW.contentEditable = "false")), new YO(EW, OW, WW, mW)
      }
    }
    class yO extends AO {
      constructor(WW) {
        let iW = document.createElement("img");
        iW.className = "cm-widgetBuffer", iW.setAttribute("aria-hidden", "true"), super(iW, 0, WW)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return mW.M.empty
      }
      coordsIn(WW) {
        return this.dom.getBoundingClientRect()
      }
    }
    class TO {
      constructor(WW) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = WW
      }
      advance(WW, iW, OW) {
        let {
          tile: mW,
          index: EW,
          beforeBreak: NW,
          parents: PW
        } = this;
        for (; WW || iW > 0;)
          if (mW.isComposite())
            if (NW) {
              if (!WW) break;
              OW && OW.break(), WW--, NW = !1
            } else if (EW == mW.children.length) {
          if (!WW && !PW.length) break;
          OW && OW.leave(mW), NW = !!mW.breakAfter, ({
            tile: mW,
            index: EW
          } = PW.pop()), EW++
        } else {
          let LW = mW.children[EW],
            cW = LW.breakAfter;
          !(iW > 0 ? LW.length <= WW : LW.length < WW) || OW && !1 === OW.skip(LW, 0, LW.length) && LW.isComposite ? (PW.push({
            tile: mW,
            index: EW
          }), mW = LW, EW = 0, OW && LW.isComposite() && OW.enter(LW)) : (NW = !!cW, EW++, WW -= LW.length)
        } else if (EW == mW.length) NW = !!mW.breakAfter, ({
          tile: mW,
          index: EW
        } = PW.pop()), EW++;
        else {
          if (!WW) break;
          {
            let iW = Math.min(WW, mW.length - EW);
            OW && OW.skip(mW, EW, EW + iW), WW -= iW, EW += iW
          }
        }
        return this.tile = mW, this.index = EW, this.beforeBreak = NW, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class JO {
      constructor(WW, iW, OW, mW) {
        this.from = WW, this.to = iW, this.wrapper = OW, this.rank = mW
      }
    }
    class hO {
      constructor(WW, iW, OW) {
        this.cache = WW, this.root = iW, this.blockWrappers = OW, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(WW, iW, OW, mW) {
        var EW;
        this.flushBuffer();
        let NW = this.ensureMarks(iW, OW),
          PW = NW.lastChild;
        if (PW && PW.isText() && !(8 & PW.flags) && PW.length + WW.length < 512) {
          this.cache.reused.set(PW, 2), (NW.children[NW.children.length - 1] = new SO(PW.dom, PW.text + WW)).parent = NW
        } else NW.append(mW || SO.of(WW, null === (EW = this.cache.find(SO)) || void 0 === EW ? void 0 : EW.dom));
        this.pos += WW.length, this.afterWidget = null
      }
      addComposition(WW, iW) {
        let OW = this.curLine;
        OW.dom != iW.line.dom && (OW.setDOM(this.cache.reused.has(iW.line) ? vO(iW.line.dom) : iW.line.dom), this.cache.reused.set(iW.line, 2));
        let mW = OW;
        for (let PW = iW.marks.length - 1; PW >= 0; PW--) {
          let WW = iW.marks[PW],
            OW = mW.lastChild;
          if (OW instanceof KO && OW.mark.eq(WW.mark)) OW.dom != WW.dom && OW.setDOM(vO(WW.dom)), mW = OW;
          else {
            if (this.cache.reused.get(WW)) {
              let iW = AO.get(WW.dom);
              iW && iW.setDOM(vO(WW.dom))
            }
            let iW = KO.of(WW.mark, WW.dom);
            mW.append(iW), mW = iW
          }
          this.cache.reused.set(WW, 2)
        }
        let EW = AO.get(WW.text);
        EW && this.cache.reused.set(EW, 2);
        let NW = new SO(WW.text, WW.text.nodeValue);
        NW.flags |= 8, mW.append(NW)
      }
      addInlineWidget(WW, iW, OW) {
        let mW = this.afterWidget && 48 & WW.flags && (48 & this.afterWidget.flags) == (48 & WW.flags);
        mW || this.flushBuffer();
        let EW = this.ensureMarks(iW, OW);
        mW || 16 & WW.flags || EW.append(this.getBuffer(1)), EW.append(WW), this.pos += WW.length, this.afterWidget = WW
      }
      addMark(WW, iW, OW) {
        this.flushBuffer(), this.ensureMarks(iW, OW).append(WW), this.pos += WW.length, this.afterWidget = null
      }
      addBlockWidget(WW) {
        this.getBlockPos().append(WW), this.pos += WW.length, this.lastBlock = WW, this.endLine()
      }
      continueWidget(WW) {
        (this.afterWidget || this.lastBlock).length += WW, this.pos += WW
      }
      addLineStart(WW, iW) {
        var OW;
        WW || (WW = eO);
        let mW = sO.start(WW, iW || (null === (OW = this.cache.find(sO)) || void 0 === OW ? void 0 : OW.dom), !!iW);
        this.getBlockPos().append(this.lastBlock = this.curLine = mW)
      }
      addLine(WW) {
        this.getBlockPos().append(WW), this.pos += WW.length, this.lastBlock = WW, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(WW) {
        this.blockPosCovered() || this.addLineStart(WW)
      }
      ensureLine(WW) {
        this.curLine || this.addLineStart(WW)
      }
      ensureMarks(WW, iW) {
        var OW;
        let mW = this.curLine;
        for (let EW = WW.length - 1; EW >= 0; EW--) {
          let NW, PW = WW[EW];
          if (iW > 0 && (NW = mW.lastChild) && NW instanceof KO && NW.mark.eq(PW)) mW = NW, iW--;
          else {
            let WW = KO.of(PW, null === (OW = this.cache.find(KO, (WW => WW.mark.eq(PW)))) || void 0 === OW ? void 0 : OW.dom);
            mW.append(WW), mW = WW, iW = 0
          }
        }
        return mW
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let WW = this.curLine.lastChild;
          WW && dO(this.curLine, !1) && ("BR" == WW.dom.nodeName || !WW.isWidget() || YW.ios && dO(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(DO, 0, 32) || new YO(DO.toDOM(), 0, DO, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let WW = this.wrappers.length - 1; WW >= 0; WW--) this.wrappers[WW].to < this.pos && this.wrappers.splice(WW, 1);
        for (let WW = this.blockWrappers; WW.value && WW.from <= this.pos; WW.next())
          if (WW.to >= this.pos) {
            let iW = new JO(WW.from, WW.to, WW.value, WW.rank),
              OW = this.wrappers.length;
            for (; OW > 0 && (this.wrappers[OW - 1].rank - iW.rank || this.wrappers[OW - 1].to - iW.to) < 0;) OW--;
            this.wrappers.splice(OW, 0, iW)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var WW;
        this.updateBlockWrappers();
        let iW = this.root;
        for (let OW of this.wrappers) {
          let mW = iW.lastChild;
          if (OW.from < this.pos && mW instanceof kO && mW.wrapper.eq(OW.wrapper)) iW = mW;
          else {
            let mW = kO.of(OW.wrapper, null === (WW = this.cache.find(kO, (WW => WW.wrapper.eq(OW.wrapper)))) || void 0 === WW ? void 0 : WW.dom);
            iW.append(mW), iW = mW
          }
        }
        return iW
      }
      blockPosCovered() {
        let WW = this.lastBlock;
        return null != WW && !WW.breakAfter && (!WW.isWidget() || (160 & WW.flags) > 0)
      }
      getBuffer(WW) {
        let iW = 2 | (WW < 0 ? 16 : 32),
          OW = this.cache.find(yO, void 0, 1);
        return OW && (OW.flags = iW), OW || new yO(iW)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class HO {
      constructor(WW) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = WW.iter()
      }
      skip(WW) {
        this.textOff + WW <= this.text.length ? this.textOff += WW : (this.skipCount += WW - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(WW) {
        if (this.textOff == this.text.length) {
          let {
            value: iW,
            lineBreak: OW,
            done: mW
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, mW) throw new Error("Ran out of text content when drawing inline views");
          this.text = iW;
          let EW = this.textOff = Math.min(WW, iW.length);
          return OW ? null : iW.slice(0, EW)
        }
        let iW = Math.min(this.text.length, this.textOff + WW),
          OW = this.text.slice(this.textOff, iW);
        return this.textOff = iW, OW
      }
    }
    const nO = [YO, sO, SO, KO, yO, kO, UO];
    for (let eP = 0; eP < nO.length; eP++) nO[eP].bucket = eP;
    class uO {
      constructor(WW) {
        this.view = WW, this.buckets = nO.map((() => [])), this.index = nO.map((() => 0)), this.reused = new Map
      }
      add(WW) {
        let iW = WW.constructor.bucket,
          OW = this.buckets[iW];
        OW.length < 6 ? OW.push(WW) : OW[this.index[iW] = (this.index[iW] + 1) % 6] = WW
      }
      find(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          mW = WW.bucket,
          EW = this.buckets[mW],
          NW = this.index[mW];
        for (let PW = EW.length - 1; PW >= 0; PW--) {
          let WW = (PW + NW) % EW.length,
            LW = EW[WW];
          if ((!iW || iW(LW)) && !this.reused.has(LW)) return EW.splice(WW, 1), WW < NW && this.index[mW]--, this.reused.set(LW, OW), LW
        }
        return null
      }
      findWidget(WW, iW, OW) {
        let mW = this.buckets[0];
        if (mW.length)
          for (let EW = 0, NW = 0;; EW++) {
            if (EW == mW.length) {
              if (NW) return null;
              NW = 1, EW = 0
            }
            let PW = mW[EW];
            if (!this.reused.has(PW) && (0 == NW ? PW.widget.compare(WW) : PW.widget.constructor == WW.constructor && WW.updateDOM(PW.dom, this.view, PW.widget))) return mW.splice(EW, 1), EW < this.index[0] && this.index[0]--, PW.widget == WW && PW.length == iW && (497 & PW.flags) == OW ? (this.reused.set(PW, 1), PW) : (this.reused.set(PW, 2), new YO(PW.dom, iW, WW, -498 & PW.flags | OW))
          }
      }
      reuse(WW) {
        return this.reused.set(WW, 1), WW
      }
      maybeReuse(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(WW)) return this.reused.set(WW, iW), WW.dom
      }
      clear() {
        for (let WW = 0; WW < this.buckets.length; WW++) this.buckets[WW].length = this.index[WW] = 0
      }
    }
    class oO {
      constructor(WW, iW, OW, EW, NW) {
        this.view = WW, this.Km = EW, this.disallowBlockEffectsFor = NW, this.openWidget = !1, this.openMarks = 0, this.cache = new uO(WW), this.text = new HO(WW.state.doc), this.builder = new hO(this.cache, new UO(WW, WW.contentDOM), mW.C.iter(OW)), this.cache.reused.set(iW, 2), this.old = new TO(iW), this.reuseWalker = {
          skip: (WW, iW, OW) => {
            if (this.cache.add(WW), WW.isComposite()) return !1
          },
          enter: WW => this.cache.add(WW),
          leave: () => {},
          break: () => {}
        }
      }
      run(WW, iW) {
        let OW = iW && this.getCompositionContext(iW.text);
        for (let mW = 0, EW = 0, NW = 0;;) {
          let PW = NW < WW.length ? WW[NW++] : null,
            LW = PW ? PW.fromA : this.old.root.length;
          if (LW > mW) {
            let WW = LW - mW;
            this.preserve(WW, !NW, !PW), mW = LW, EW += WW
          }
          if (!PW) break;
          iW && PW.fromA <= iW.range.fromA && PW.toA >= iW.range.toA ? (this.forward(PW.fromA, iW.range.fromA, iW.range.fromA < iW.range.toA ? 1 : -1), this.emit(EW, iW.range.fromB), this.cache.clear(), this.builder.addComposition(iW, OW), this.text.skip(iW.range.toB - iW.range.fromB), this.forward(iW.range.fromA, PW.toA), this.emit(iW.range.toB, PW.toB)) : (this.forward(PW.fromA, PW.toA), this.emit(EW, PW.toB)), EW = PW.toB, mW = PW.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(WW, iW, OW) {
        let mW = function(WW) {
            let iW = [];
            for (let OW = WW.parents.length; OW > 1; OW--) {
              let mW = OW == WW.parents.length ? WW.tile : WW.parents[OW].tile;
              mW instanceof KO && iW.push(mW.mark)
            }
            return iW
          }(this.old),
          EW = this.openMarks;
        this.old.advance(WW, OW ? 1 : -1, {
          skip: (WW, iW, OW) => {
            if (WW.isWidget())
              if (this.openWidget) this.builder.continueWidget(OW - iW);
              else {
                let NW = OW > 0 || iW < WW.length ? YO.of(WW.widget, this.view, OW - iW, 496 & WW.flags, this.cache.maybeReuse(WW)) : this.cache.reuse(WW);
                256 & NW.flags ? (NW.flags &= -2, this.builder.addBlockWidget(NW)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(NW, mW, EW), EW = mW.length)
              }
            else if (WW.isText()) this.builder.ensureLine(null), iW || OW != WW.length || this.cache.reused.has(WW) ? (this.cache.add(WW), this.builder.addText(WW.text.slice(iW, OW), mW, EW)) : this.builder.addText(WW.text, mW, EW, this.cache.reuse(WW)), EW = mW.length;
            else if (WW.isLine()) WW.flags &= -2, this.cache.reused.set(WW, 1), this.builder.addLine(WW);
            else if (WW instanceof yO) this.cache.add(WW);
            else {
              if (!(WW instanceof KO)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(WW, mW, EW), this.cache.reused.set(WW, 1), EW = mW.length
            }
            this.openWidget = !1
          },
          enter: WW => {
            WW.isLine() ? this.builder.addLineStart(WW.attrs, this.cache.maybeReuse(WW)) : (this.cache.add(WW), WW instanceof KO && mW.unshift(WW.mark)), this.openWidget = !1
          },
          leave: WW => {
            WW.isLine() ? mW.length && (mW.length = EW = 0) : WW instanceof KO && (mW.shift(), EW = Math.min(EW, mW.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(WW)
      }
      emit(WW, iW) {
        let OW = null,
          EW = this.builder,
          NW = 0,
          PW = mW.C.spans(this.Km, WW, iW, {
            point: (WW, iW, mW, PW, LW, cW) => {
              if (mW instanceof vW) {
                if (this.disallowBlockEffectsFor[cW]) {
                  if (mW.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (iW > this.view.state.doc.lineAt(WW).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (NW = PW.length, LW > PW.length) EW.continueWidget(iW - WW);
                else {
                  let NW = mW.widget || (mW.block ? gO.block : gO.inline),
                    cW = function(WW) {
                      let iW = WW.isReplace ? (WW.startSide < 0 ? 64 : 0) | (WW.endSide > 0 ? 128 : 0) : WW.startSide > 0 ? 32 : 16;
                      WW.block && (iW |= 256);
                      return iW
                    }(mW),
                    wW = this.cache.findWidget(NW, iW - WW, cW) || YO.of(NW, this.view, iW - WW, cW);
                  mW.block ? (mW.startSide > 0 && EW.addLineStartIfNotCovered(OW), EW.addBlockWidget(wW)) : (EW.ensureLine(OW), EW.addInlineWidget(wW, PW, LW))
                }
                OW = null
              } else OW = function(WW, iW) {
                let OW = iW.spec.attributes,
                  mW = iW.spec.class;
                if (!OW && !mW) return WW;
                WW || (WW = {
                  class: "cm-line"
                });
                OW && yW(OW, WW);
                mW && (WW.class += " " + mW);
                return WW
              }(OW, mW);
              iW > WW && this.text.skip(iW - WW)
            },
            span: (WW, iW, mW, NW) => {
              for (let PW = WW; PW < iW;) {
                let LW = this.text.next(Math.min(512, iW - PW));
                null == LW ? (EW.addLineStartIfNotCovered(OW), EW.addBreak(), PW++) : (EW.ensureLine(OW), EW.addText(LW, mW, PW == WW ? NW : mW.length), PW += LW.length), OW = null
              }
            }
          });
        EW.addLineStartIfNotCovered(OW), this.openWidget = PW > NW, this.openMarks = PW
      }
      forward(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        iW - WW <= 10 ? this.old.advance(iW - WW, OW, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(iW - WW - 10, -1), this.old.advance(5, OW, this.reuseWalker))
      }
      getCompositionContext(WW) {
        let iW = [],
          OW = null;
        for (let mW = WW.parentNode;; mW = mW.parentNode) {
          let WW = AO.get(mW);
          if (mW == this.view.contentDOM) break;
          WW instanceof KO ? iW.push(WW) : (null === WW || void 0 === WW ? void 0 : WW.isLine()) ? OW = WW : WW instanceof kO || ("DIV" != mW.nodeName || OW || mW == this.view.contentDOM ? OW || iW.push(KO.of(new dW({
            tagName: mW.nodeName.toLowerCase(),
            attributes: HW(mW)
          }), mW)) : OW = new sO(mW, eO))
        }
        return {
          line: OW,
          marks: iW
        }
      }
    }

    function dO(WW, iW) {
      let OW = WW => {
        for (let mW of WW.children)
          if ((iW ? mW.isText() : mW.length) || OW(mW)) return !0;
        return !1
      };
      return OW(WW)
    }
    const eO = {
      class: "cm-line"
    };

    function vO(WW) {
      let iW = AO.get(WW);
      return iW && iW.setDOM(WW.cloneNode()), WW
    }
    class gO extends nW {
      constructor(WW) {
        super(), this.tag = WW
      }
      eq(WW) {
        return WW.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(WW) {
        return WW.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    gO.inline = new gO("span"), gO.block = new gO("div");
    const DO = new class extends nW {
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
    class VO {
      constructor(WW) {
        this.view = WW, this.Km = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = oW.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new UO(WW, WW.contentDOM), this.updateInner([new ZO(0, 0, 0, WW.state.doc.length)], null)
      }
      update(WW) {
        var iW;
        let OW = WW.changedRanges;
        this.minWidth > 0 && OW.length && (OW.every((WW => {
          let {
            fromA: iW,
            toA: OW
          } = WW;
          return OW < this.minWidthFrom || iW > this.minWidthTo
        })) ? (this.minWidthFrom = WW.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = WW.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(WW);
        let EW = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (iW = this.domChanged) || void 0 === iW ? void 0 : iW.newSel) ? EW = this.domChanged.newSel.head : function(WW, iW) {
          let OW = !1;
          iW && WW.iterChangedRanges(((WW, mW) => {
            WW < iW.to && mW > iW.from && (OW = !0)
          }));
          return OW
        }(WW.changes, this.hasComposition) || WW.selectionSet || (EW = WW.state.selection.main.head));
        let NW = EW > -1 ? function(WW, iW, OW) {
          let mW = fO(WW, OW);
          if (!mW) return null;
          let {
            node: EW,
            from: NW,
            to: PW
          } = mW, LW = EW.nodeValue;
          if (/[\n\r]/.test(LW)) return null;
          if (WW.state.doc.sliceString(mW.from, mW.to) != LW) return null;
          let cW = iW.invertedDesc;
          return {
            range: new ZO(cW.mapPos(NW), cW.mapPos(PW), NW, PW),
            text: EW
          }
        }(this.view, WW.changes, EW) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: iW,
            to: mW
          } = this.hasComposition;
          OW = new ZO(iW, mW, WW.changes.mapPos(iW, -1), WW.changes.mapPos(mW, 1)).addToSet(OW.slice())
        }
        this.hasComposition = NW ? {
          from: NW.range.fromB,
          to: NW.range.toB
        } : null, (YW.ie || YW.chrome) && !NW && WW && WW.state.doc.lines != WW.startState.doc.lines && (this.forceSelection = !0);
        let PW = this.Km,
          LW = this.blockWrappers;
        this.updateDeco();
        let cW = function(WW, iW, OW) {
          let EW = new CO;
          return mW.C.compare(WW, iW, OW, EW), EW.changes
        }(PW, this.Km, WW.changes);
        cW.length && (OW = ZO.extendWithRanges(OW, cW));
        let wW = function(WW, iW, OW) {
          let EW = new XO;
          return mW.C.compare(WW, iW, OW, EW), EW.changes
        }(LW, this.blockWrappers, WW.changes);
        return wW.length && (OW = ZO.extendWithRanges(OW, wW)), NW && !OW.some((WW => WW.fromA <= NW.range.fromA && WW.toA >= NW.range.toA)) && (OW = NW.range.addToSet(OW.slice())), !(2 & this.tile.flags && 0 == OW.length) && (this.updateInner(OW, NW), WW.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(WW, iW) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: OW
        } = this.view;
        OW.ignore((() => {
          if (iW || WW.length) {
            let OW = this.tile,
              mW = new oO(this.view, OW, this.blockWrappers, this.Km, this.dynamicDecorationMap);
            iW && AO.get(iW.text) && mW.cache.reused.set(AO.get(iW.text), 2), this.tile = mW.run(WW, iW), pO(OW, mW.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let mW = YW.chrome || YW.ios ? {
            node: OW.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(mW), !mW || !mW.written && OW.selectionRange.focusNode == mW.node && this.tile.dom.contains(mW.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let mW = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let EW of this.tile.children) EW.isWidget() && EW.widget instanceof BO && mW.push(EW.dom);
        OW.updateGaps(mW)
      }
      updateEditContextFormatting(WW) {
        this.editContextFormatting = this.editContextFormatting.map(WW.changes);
        for (let iW of WW.transactions)
          for (let WW of iW.effects) WW.is(Gi) && (this.editContextFormatting = WW.value)
      }
      updateSelection() {
        let WW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: iW
        } = this.tile, OW = this.view.root.activeElement, mW = OW == iW, EW = !mW && !(this.view.state.facet(ai) || iW.tabIndex > -1) && CW(iW, this.view.observer.selectionRange) && !(OW && iW.contains(OW));
        if (!(mW || WW || EW)) return;
        let NW = this.forceSelection;
        this.forceSelection = !1;
        let PW, LW, cW = this.view.state.selection.main;
        if (cW.empty ? LW = PW = this.inlineDOMNearPos(cW.anchor, cW.assoc || 1) : (LW = this.inlineDOMNearPos(cW.head, cW.head == cW.from ? 1 : -1), PW = this.inlineDOMNearPos(cW.anchor, cW.anchor == cW.from ? 1 : -1)), YW.gecko && cW.empty && !this.hasComposition && (1 == (wW = PW).node.nodeType && wW.node.firstChild && (0 == wW.offset || "false" == wW.node.childNodes[wW.offset - 1].contentEditable) && (wW.offset == wW.node.childNodes.length || "false" == wW.node.childNodes[wW.offset].contentEditable))) {
          let WW = document.createTextNode("");
          this.view.observer.ignore((() => PW.node.insertBefore(WW, PW.node.childNodes[PW.offset] || null))), PW = LW = new ci(WW, 0), NW = !0
        }
        var wW;
        let tW = this.view.observer.selectionRange;
        !NW && tW.focusNode && (BW(PW.node, PW.offset, tW.anchorNode, tW.anchorOffset) && BW(LW.node, LW.offset, tW.focusNode, tW.focusOffset) || this.suppressWidgetCursorChange(tW, cW)) || (this.view.observer.ignore((() => {
          YW.android && YW.chrome && iW.contains(tW.focusNode) && function(WW, iW) {
            for (let OW = WW; OW && OW != iW; OW = OW.assignedSlot || OW.parentNode)
              if (1 == OW.nodeType && "false" == OW.contentEditable) return !0;
            return !1
          }(tW.focusNode, iW) && (iW.blur(), iW.focus({
            preventScroll: !0
          }));
          let WW = pW(this.view.root);
          if (WW)
            if (cW.empty) {
              if (YW.gecko) {
                let WW = (mW = PW.node, NW = PW.offset, 1 != mW.nodeType ? 0 : (NW && "false" == mW.childNodes[NW - 1].contentEditable ? 1 : 0) | (NW < mW.childNodes.length && "false" == mW.childNodes[NW].contentEditable ? 2 : 0));
                if (WW && 3 != WW) {
                  let iW = (1 == WW ? Pi : Li)(PW.node, PW.offset);
                  iW && (PW = new ci(iW.node, iW.offset))
                }
              }
              WW.collapse(PW.node, PW.offset), null != cW.bidiLevel && void 0 !== WW.caretBidiLevel && (WW.caretBidiLevel = cW.bidiLevel)
            } else if (WW.extend) {
            WW.collapse(PW.node, PW.offset);
            try {
              WW.extend(LW.node, LW.offset)
            } catch (wW) {}
          } else {
            let iW = document.createRange();
            cW.anchor > cW.head && ([PW, LW] = [LW, PW]), iW.setEnd(LW.node, LW.offset), iW.setStart(PW.node, PW.offset), WW.removeAllRanges(), WW.addRange(iW)
          } else;
          var mW, NW;
          EW && this.view.root.activeElement == iW && (iW.blur(), OW && OW.focus())
        })), this.view.observer.setSelectionRange(PW, LW)), this.impreciseAnchor = PW.precise ? null : new ci(tW.anchorNode, tW.anchorOffset), this.impreciseHead = LW.precise ? null : new ci(tW.focusNode, tW.focusOffset)
      }
      suppressWidgetCursorChange(WW, iW) {
        return this.hasComposition && iW.empty && BW(WW.focusNode, WW.focusOffset, WW.anchorNode, WW.anchorOffset) && this.posFromDOM(WW.focusNode, WW.focusOffset) == iW.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: WW
        } = this, iW = WW.state.selection.main, OW = pW(WW.root), {
          anchorNode: mW,
          anchorOffset: EW
        } = WW.observer.selectionRange;
        if (!OW || !iW.empty || !iW.assoc || !OW.modify) return;
        let NW = this.lineAt(iW.head, iW.assoc);
        if (!NW) return;
        let PW = NW.posAtStart;
        if (iW.head == PW || iW.head == PW + NW.length) return;
        let LW = this.coordsAt(iW.head, -1),
          cW = this.coordsAt(iW.head, 1);
        if (!LW || !cW || LW.bottom > cW.top) return;
        let wW = this.domAtPos(iW.head + iW.assoc, iW.assoc);
        OW.collapse(wW.node, wW.offset), OW.modify("move", iW.assoc < 0 ? "forward" : "backward", "lineboundary"), WW.observer.readSelectionRange();
        let tW = WW.observer.selectionRange;
        WW.docView.posFromDOM(tW.anchorNode, tW.anchorOffset) != iW.from && OW.collapse(mW, EW)
      }
      posFromDOM(WW, iW) {
        let OW = this.tile.nearest(WW);
        if (!OW) return 2 & this.tile.dom.compareDocumentPosition(WW) ? 0 : this.view.state.doc.length;
        let mW = OW.posAtStart;
        if (!OW.isComposite()) return OW.isText() ? WW == OW.dom ? mW + iW : mW + (iW ? OW.length : 0) : mW;
        {
          let EW;
          if (WW == OW.dom) EW = OW.dom.childNodes[iW];
          else {
            let mW = 0 == IW(WW) ? 0 : 0 == iW ? -1 : 1;
            for (;;) {
              let iW = WW.parentNode;
              if (iW == OW.dom) break;
              0 == mW && iW.firstChild != iW.lastChild && (mW = WW == iW.firstChild ? -1 : 1), WW = iW
            }
            EW = mW < 0 ? WW : WW.nextSibling
          }
          if (EW == OW.dom.firstChild) return mW;
          for (; EW && !AO.get(EW);) EW = EW.nextSibling;
          if (!EW) return mW + OW.length;
          for (let WW = 0, iW = mW;; WW++) {
            let mW = OW.children[WW];
            if (mW.dom == EW) return iW;
            iW += mW.length + mW.breakAfter
          }
        }
      }
      domAtPos(WW, iW) {
        let {
          tile: OW,
          offset: mW
        } = this.tile.resolveBlock(WW, iW);
        return OW.isWidget() ? OW.domPosFor(WW, iW) : OW.domIn(mW, iW)
      }
      inlineDOMNearPos(WW, iW) {
        let OW, mW, EW = -1,
          NW = !1,
          PW = -1,
          LW = !1;
        return this.tile.blockTiles(((iW, cW) => {
          if (iW.isWidget()) {
            if (32 & iW.flags && cW >= WW) return !0;
            16 & iW.flags && (NW = !0)
          } else {
            let wW = cW + iW.length;
            if (cW <= WW && (OW = iW, EW = WW - cW, NW = wW < WW), wW >= WW && !mW && (mW = iW, PW = WW - cW, LW = cW > WW), cW > WW && mW) return !0
          }
        })), OW || mW ? (NW && mW ? OW = null : LW && OW && (mW = null), OW && iW < 0 || !mW ? OW.domIn(EW, iW) : mW.domIn(PW, iW)) : this.domAtPos(WW, iW)
      }
      coordsAt(WW, iW) {
        let {
          tile: OW,
          offset: mW
        } = this.tile.resolveBlock(WW, iW);
        return OW.isWidget() ? OW.widget instanceof BO ? null : OW.coordsInWidget(mW, iW, !0) : OW.coordsIn(mW, iW)
      }
      lineAt(WW, iW) {
        let {
          tile: OW
        } = this.tile.resolveBlock(WW, iW);
        return OW.isLine() ? OW : null
      }
      coordsForChar(WW) {
        let {
          tile: iW,
          offset: OW
        } = this.tile.resolveBlock(WW, 1);
        if (!iW.isLine()) return null;
        return function WW(iW, OW) {
          if (iW.isComposite())
            for (let mW of iW.children) {
              if (mW.length >= OW) {
                let iW = WW(mW, OW);
                if (iW) return iW
              }
              if ((OW -= mW.length) < 0) break
            } else if (iW.isText() && OW < iW.length) {
              let WW = (0, mW.$)(iW.text, OW);
              if (WW == OW) return null;
              let EW = mi(iW.dom, OW, WW).getClientRects();
              for (let iW = 0; iW < EW.length; iW++) {
                let WW = EW[iW];
                if (iW == EW.length - 1 || WW.top < WW.bottom && WW.left < WW.right) return WW
              }
            } return null
        }(iW, OW)
      }
      measureVisibleLineHeights(WW) {
        let iW = [],
          {
            from: OW,
            to: mW
          } = WW,
          EW = this.view.contentDOM.clientWidth,
          NW = EW > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          PW = -1,
          LW = this.view.textDirection == wi.LTR,
          cW = 0,
          wW = (WW, tW, ZW) => {
            for (let xW = 0; xW < WW.children.length && !(tW > mW); xW++) {
              let mW = WW.children[xW],
                lW = tW + mW.length,
                AW = mW.dom.getBoundingClientRect(),
                {
                  height: bW
                } = AW;
              if (ZW && !xW && (cW += AW.top - ZW.top), mW instanceof kO) lW > OW && wW(mW, tW, AW);
              else if (tW >= OW && (cW > 0 && iW.push(-cW), iW.push(bW + cW), cW = 0, NW)) {
                let WW = mW.dom.lastChild,
                  iW = WW ? XW(WW) : [];
                if (iW.length) {
                  let WW = iW[iW.length - 1],
                    OW = LW ? WW.right - AW.left : AW.right - WW.left;
                  OW > PW && (PW = OW, this.minWidth = EW, this.minWidthFrom = tW, this.minWidthTo = lW)
                }
              }
              ZW && xW == WW.children.length - 1 && (cW += ZW.bottom - AW.bottom), tW = lW + mW.breakAfter
            }
          };
        return wW(this.tile, 0, null), iW
      }
      textDirectionAt(WW) {
        let {
          tile: iW
        } = this.tile.resolveBlock(WW, 1);
        return "rtl" == getComputedStyle(iW.dom).direction ? wi.RTL : wi.LTR
      }
      measureTextSize() {
        let WW = this.tile.blockTiles((WW => {
          if (WW.isLine() && WW.children.length && WW.length <= 20) {
            let iW, OW = 0;
            for (let mW of WW.children) {
              if (!mW.isText() || /[^ -~]/.test(mW.text)) return;
              let WW = XW(mW.dom);
              if (1 != WW.length) return;
              OW += WW[0].width, iW = WW[0].height
            }
            if (OW) return {
              lineHeight: WW.dom.getBoundingClientRect().height,
              charWidth: OW / WW.length,
              textHeight: iW
            }
          }
        }));
        if (WW) return WW;
        let iW, OW, mW, EW = document.createElement("div");
        return EW.className = "cm-line", EW.style.width = "99999px", EW.style.position = "absolute", EW.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(EW);
          let WW = XW(EW.firstChild)[0];
          iW = EW.getBoundingClientRect().height, OW = WW && WW.width ? WW.width / 27 : 7, mW = WW && WW.height ? WW.height : iW, EW.remove()
        })), {
          lineHeight: iW,
          charWidth: OW,
          textHeight: mW
        }
      }
      computeBlockGapDeco() {
        let WW = [],
          iW = this.view.viewState;
        for (let OW = 0, mW = 0;; mW++) {
          let EW = mW == iW.viewports.length ? null : iW.viewports[mW],
            NW = EW ? EW.from - 1 : this.view.state.doc.length;
          if (NW > OW) {
            let mW = (iW.lineBlockAt(NW).bottom - iW.lineBlockAt(OW).top) / this.view.scaleY;
            WW.push(oW.replace({
              widget: new BO(mW),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(OW, NW))
          }
          if (!EW) break;
          OW = EW.to + 1
        }
        return oW.set(WW)
      }
      updateDeco() {
        let WW = 1,
          iW = this.view.state.facet(OO).map((iW => (this.dynamicDecorationMap[WW++] = "function" == typeof iW) ? iW(this.view) : iW)),
          OW = !1,
          EW = this.view.state.facet(EO).map(((WW, iW) => {
            let mW = "function" == typeof WW;
            return mW && (OW = !0), mW ? WW(this.view) : WW
          }));
        for (EW.length && (this.dynamicDecorationMap[WW++] = OW, iW.push(mW.C.join(EW))), this.Km = [this.editContextFormatting, ...iW, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; WW < this.Km.length;) this.dynamicDecorationMap[WW++] = !1;
        this.blockWrappers = this.view.state.facet(mO).map((WW => "function" == typeof WW ? WW(this.view) : WW))
      }
      scrollIntoView(WW) {
        var iW;
        if (WW.isSnapshot) {
          let iW = this.view.viewState.lineBlockAt(WW.range.head);
          return this.view.scrollDOM.scrollTop = iW.top - WW.yMargin, void(this.view.scrollDOM.scrollLeft = WW.xMargin)
        }
        for (let tW of this.view.state.facet(Bi)) try {
          if (tW(this.view, WW.range, WW)) return !0
        } catch (wW) {
          Ii(this.view.state, wW, "scroll handler")
        }
        let OW, {
            range: mW
          } = WW,
          EW = this.coordsAt(mW.head, null !== (iW = mW.assoc) && void 0 !== iW ? iW : mW.empty ? 0 : mW.head > mW.anchor ? -1 : 1);
        if (!EW) return;
        !mW.empty && (OW = this.coordsAt(mW.anchor, mW.anchor > mW.head ? -1 : 1)) && (EW = {
          left: Math.min(EW.left, OW.left),
          top: Math.min(EW.top, OW.top),
          right: Math.max(EW.right, OW.right),
          bottom: Math.max(EW.bottom, OW.bottom)
        });
        let NW = wO(this.view),
          PW = {
            left: EW.left - NW.left,
            top: EW.top - NW.top,
            right: EW.right + NW.right,
            bottom: EW.bottom + NW.bottom
          },
          {
            offsetWidth: LW,
            offsetHeight: cW
          } = this.view.scrollDOM;
        if (function(WW, iW, OW, mW, EW, NW, PW, LW) {
            let cW = WW.ownerDocument,
              wW = cW.defaultView || window;
            for (let tW = WW, ZW = !1; tW && !ZW;)
              if (1 == tW.nodeType) {
                let WW, xW = tW == cW.body,
                  lW = 1,
                  AW = 1;
                if (xW) WW = rW(wW);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(tW).position) && (ZW = !0), tW.scrollHeight <= tW.clientHeight && tW.scrollWidth <= tW.clientWidth) {
                    tW = tW.assignedSlot || tW.parentNode;
                    continue
                  }
                  let iW = tW.getBoundingClientRect();
                  ({
                    scaleX: lW,
                    scaleY: AW
                  } = zW(tW, iW)), WW = {
                    left: iW.left,
                    right: iW.left + tW.clientWidth * lW,
                    top: iW.top,
                    bottom: iW.top + tW.clientHeight * AW
                  }
                }
                let bW = 0,
                  jW = 0;
                if ("nearest" == EW) iW.top < WW.top + PW ? (jW = iW.top - (WW.top + PW), OW > 0 && iW.bottom > WW.bottom + jW && (jW = iW.bottom - WW.bottom + PW)) : iW.bottom > WW.bottom - PW && (jW = iW.bottom - WW.bottom + PW, OW < 0 && iW.top - jW < WW.top && (jW = iW.top - (WW.top + PW)));
                else {
                  let mW = iW.bottom - iW.top,
                    NW = WW.bottom - WW.top;
                  jW = ("center" == EW && mW <= NW ? iW.top + mW / 2 - NW / 2 : "start" == EW || "center" == EW && OW < 0 ? iW.top - PW : iW.bottom - NW + PW) - WW.top
                }
                if ("nearest" == mW ? iW.left < WW.left + NW ? (bW = iW.left - (WW.left + NW), OW > 0 && iW.right > WW.right + bW && (bW = iW.right - WW.right + NW)) : iW.right > WW.right - NW && (bW = iW.right - WW.right + NW, OW < 0 && iW.left < WW.left + bW && (bW = iW.left - (WW.left + NW))) : bW = ("center" == mW ? iW.left + (iW.right - iW.left) / 2 - (WW.right - WW.left) / 2 : "start" == mW == LW ? iW.left - NW : iW.right - (WW.right - WW.left) + NW) - WW.left, bW || jW)
                  if (xW) wW.scrollBy(bW, jW);
                  else {
                    let WW = 0,
                      OW = 0;
                    if (jW) {
                      let WW = tW.scrollTop;
                      tW.scrollTop += jW / AW, OW = (tW.scrollTop - WW) * AW
                    }
                    if (bW) {
                      let iW = tW.scrollLeft;
                      tW.scrollLeft += bW / lW, WW = (tW.scrollLeft - iW) * lW
                    }
                    iW = {
                      left: iW.left - WW,
                      top: iW.top - OW,
                      right: iW.right - WW,
                      bottom: iW.bottom - OW
                    }, WW && Math.abs(WW - bW) < 1 && (mW = "nearest"), OW && Math.abs(OW - jW) < 1 && (EW = "nearest")
                  } if (xW) break;
                (iW.top < WW.top || iW.bottom > WW.bottom || iW.left < WW.left || iW.right > WW.right) && (iW = {
                  left: Math.max(iW.left, WW.left),
                  right: Math.min(iW.right, WW.right),
                  top: Math.max(iW.top, WW.top),
                  bottom: Math.min(iW.bottom, WW.bottom)
                }), tW = tW.assignedSlot || tW.parentNode
              } else {
                if (11 != tW.nodeType) break;
                tW = tW.host
              }
          }(this.view.scrollDOM, PW, mW.head < mW.anchor ? -1 : 1, WW.x, WW.y, Math.max(Math.min(WW.xMargin, LW), -LW), Math.max(Math.min(WW.yMargin, cW), -cW), this.view.textDirection == wi.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (EW.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || EW.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let WW = this.view.docView.lineAt(mW.head, 1);
          WW && WW.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(WW) {
        let iW = WW => WW.isWidget() || WW.children.some(iW);
        return iW(this.tile.resolveBlock(WW, 1).tile)
      }
      destroy() {
        pO(this.tile)
      }
    }

    function pO(WW, iW) {
      let OW = null === iW || void 0 === iW ? void 0 : iW.get(WW);
      if (1 != OW) {
        null == OW && WW.destroy();
        for (let OW of WW.children) pO(OW, iW)
      }
    }

    function fO(WW, iW) {
      let OW = WW.observer.selectionRange;
      if (!OW.focusNode) return null;
      let mW = Pi(OW.focusNode, OW.focusOffset),
        EW = Li(OW.focusNode, OW.focusOffset),
        NW = mW || EW;
      if (EW && mW && EW.node != mW.node) {
        let iW = AO.get(EW.node);
        if (!iW || iW.isText() && iW.text != EW.node.nodeValue) NW = EW;
        else if (WW.docView.lastCompositionAfterCursor) {
          let WW = AO.get(mW.node);
          !WW || WW.isText() && WW.text != mW.node.nodeValue || (NW = EW)
        }
      }
      if (WW.docView.lastCompositionAfterCursor = NW != mW, !NW) return null;
      let PW = iW - NW.offset;
      return {
        from: PW,
        to: PW + NW.node.nodeValue.length,
        node: NW.node
      }
    }
    let CO = class {
      constructor() {
        this.changes = []
      }
      compareRange(WW, iW) {
        DW(WW, iW, this.changes)
      }
      comparePoint(WW, iW) {
        DW(WW, iW, this.changes)
      }
      boundChange(WW) {
        DW(WW, WW, this.changes)
      }
    };
    class XO {
      constructor() {
        this.changes = []
      }
      compareRange(WW, iW) {
        DW(WW, iW, this.changes)
      }
      comparePoint() {}
      boundChange(WW) {
        DW(WW, WW, this.changes)
      }
    }
    class BO extends nW {
      constructor(WW) {
        super(), this.height = WW
      }
      toDOM() {
        let WW = document.createElement("div");
        return WW.className = "cm-gap", this.updateDOM(WW), WW
      }
      eq(WW) {
        return WW.height == this.height
      }
      updateDOM(WW) {
        return WW.style.height = this.height + "px", !0
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

    function qO(WW, iW, OW) {
      let mW = WW.lineBlockAt(iW);
      if (Array.isArray(mW.type)) {
        let WW;
        for (let EW of mW.type) {
          if (EW.from > iW) break;
          if (!(EW.to < iW)) {
            if (EW.from < iW && EW.to > iW) return EW;
            WW && (EW.type != uW.Text || WW.type == EW.type && !(OW < 0 ? EW.from < iW : EW.to > iW)) || (WW = EW)
          }
        }
        return WW || mW
      }
      return mW
    }

    function RO(WW, iW, OW, mW) {
      let EW = WW.state.doc.lineAt(iW.head),
        NW = WW.bidiSpans(EW),
        PW = WW.textDirectionAt(EW.from);
      for (let LW = iW, cW = null;;) {
        let iW = Hi(EW, NW, PW, LW, OW),
          wW = Ji;
        if (!iW) {
          if (EW.number == (OW ? WW.state.doc.lines : 1)) return LW;
          wW = "\n", EW = WW.state.doc.line(EW.number + (OW ? 1 : -1)), NW = WW.bidiSpans(EW), iW = WW.visualLineSide(EW, !OW)
        }
        if (cW) {
          if (!cW(wW)) return LW
        } else {
          if (!mW) return iW;
          cW = mW(wW)
        }
        LW = iW
      }
    }

    function GO(WW, iW, OW) {
      for (;;) {
        let mW = 0;
        for (let EW of WW) EW.between(iW - 1, iW + 1, ((WW, EW, NW) => {
          if (iW > WW && iW < EW) {
            let NW = mW || OW || (iW - WW < EW - iW ? -1 : 1);
            iW = NW < 0 ? WW : EW, mW = NW
          }
        }));
        if (!mW) return iW
      }
    }

    function IO(WW, iW) {
      let OW = null;
      for (let EW = 0; EW < iW.kj.length; EW++) {
        let NW = iW.kj[EW],
          PW = null;
        if (NW.empty) {
          let iW = GO(WW, NW.from, 0);
          iW != NW.from && (PW = mW.l.cursor(iW, -1))
        } else {
          let iW = GO(WW, NW.from, -1),
            OW = GO(WW, NW.to, 1);
          iW == NW.from && OW == NW.to || (PW = mW.l.range(NW.from == NW.anchor ? iW : OW, NW.from == NW.head ? iW : OW))
        }
        PW && (OW || (OW = iW.kj.slice()), OW[EW] = PW)
      }
      return OW ? mW.l.create(OW, iW.mainIndex) : iW
    }

    function aO(WW, iW, OW) {
      let EW = GO(WW.state.facet(NO).map((iW => iW(WW))), OW.from, iW.head > OW.from ? -1 : 1);
      return EW == OW.from ? OW : mW.l.cursor(EW, EW < OW.from ? 1 : -1)
    }
    class rO {
      constructor(WW, iW) {
        this.pos = WW, this.assoc = iW
      }
    }

    function zO(WW, iW, OW, EW) {
      let NW, PW = WW.contentDOM.getBoundingClientRect(),
        LW = PW.top + WW.viewState.paddingTop,
        {
          x: cW,
          y: wW
        } = iW,
        tW = wW - LW;
      for (;;) {
        if (tW < 0) return new rO(0, 1);
        if (tW > WW.viewState.docHeight) return new rO(WW.state.doc.length, -1);
        if (NW = WW.elementAtHeight(tW), null == EW) break;
        if (NW.type == uW.Text) {
          if (EW < 0 ? NW.to < WW.viewport.from : NW.from > WW.viewport.to) break;
          let iW = WW.docView.coordsAt(EW < 0 ? NW.from : NW.to, EW > 0 ? -1 : 1);
          if (iW && (EW < 0 ? iW.top <= tW + LW : iW.bottom >= tW + LW)) break
        }
        let iW = WW.viewState.heightOracle.textHeight / 2;
        tW = EW > 0 ? NW.bottom + iW : NW.top - iW
      }
      if (WW.viewport.from >= NW.to || WW.viewport.to <= NW.from) {
        if (OW) return null;
        if (NW.type == uW.Text) {
          let iW = function(WW, iW, OW, EW, NW) {
            let PW = Math.round((EW - iW.left) * WW.defaultCharacterWidth);
            if (WW.lineWrapping && OW.height > 1.5 * WW.defaultLineHeight) {
              let iW = WW.viewState.heightOracle.textHeight;
              PW += Math.floor((NW - OW.top - .5 * (WW.defaultLineHeight - iW)) / iW) * WW.viewState.heightOracle.lineLength
            }
            let LW = WW.state.sliceDoc(OW.from, OW.to);
            return OW.from + (0, mW.ab)(LW, PW, WW.state.tabSize)
          }(WW, PW, NW, cW, wW);
          return new rO(iW, iW == NW.from ? 1 : -1)
        }
      }
      if (NW.type != uW.Text) return tW < (NW.top + NW.bottom) / 2 ? new rO(NW.from, 1) : new rO(NW.to, -1);
      let ZW = WW.docView.lineAt(NW.from, 2);
      return ZW && ZW.length == NW.length || (ZW = WW.docView.lineAt(NW.from, -2)), new FO(WW, cW, wW, WW.textDirectionAt(NW.from)).scanTile(ZW, NW.from)
    }
    class FO {
      constructor(WW, iW, OW, mW) {
        this.view = WW, this.x = iW, this.y = OW, this.baseDir = mW, this.line = null, this.spans = null
      }
      bidiSpansAt(WW) {
        return (!this.line || this.line.from > WW || this.line.to < WW) && (this.line = this.view.state.doc.lineAt(WW), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(WW, iW) {
        let {
          line: OW,
          spans: mW
        } = this.bidiSpansAt(WW);
        return mW[si.find(mW, WW - OW.from, -1, iW)].level == this.baseDir
      }
      dirAt(WW, iW) {
        let {
          line: OW,
          spans: mW
        } = this.bidiSpansAt(WW);
        return mW[si.find(mW, WW - OW.from, -1, iW)].dir
      }
      bidiIn(WW, iW) {
        let {
          spans: OW,
          line: mW
        } = this.bidiSpansAt(WW);
        return OW.length > 1 || OW.length && (OW[0].level != this.baseDir || OW[0].to + mW.from < iW)
      }
      scan(WW, iW) {
        let OW, mW, EW, NW = 0,
          PW = WW.length - 1,
          LW = new Set,
          cW = this.bidiIn(WW[0], WW[PW]),
          wW = -1,
          tW = 1e9;
        WW: for (; NW < PW;) {
          let ZW = PW - NW,
            xW = NW + PW >> 1;
          iW: if (LW.has(xW)) {
            let WW = NW + Math.floor(Math.random() * ZW);
            for (let iW = 0; iW < ZW; iW++) {
              if (!LW.has(WW)) {
                xW = WW;
                break iW
              }
              WW++, WW == PW && (WW = NW)
            }
            break WW
          } LW.add(xW);
          let lW = iW(xW);
          if (lW)
            for (let iW = 0; iW < lW.length; iW++) {
              let LW = lW[iW],
                ZW = 0;
              if (!(0 == LW.width && lW.length > 1)) {
                if (LW.bottom < this.y)(!OW || OW.bottom < LW.bottom) && (OW = LW), ZW = 1;
                else if (LW.top > this.y)(!mW || mW.top > LW.top) && (mW = LW), ZW = -1;
                else {
                  let WW = LW.left > this.x ? this.x - LW.left : LW.right < this.x ? this.x - LW.right : 0,
                    iW = Math.abs(WW);
                  iW < tW && (wW = xW, tW = iW, EW = LW), WW && (ZW = WW < 0 == (this.baseDir == wi.LTR) ? -1 : 1)
                } - 1 != ZW || cW && !this.baseDirAt(WW[xW], 1) ? 1 != ZW || cW && !this.baseDirAt(WW[xW + 1], -1) || (NW = xW + 1) : PW = xW
              }
            }
        }
        if (!EW) {
          let EW = OW && (!mW || this.y - OW.bottom < mW.top - this.y) ? OW : mW;
          return this.y = (EW.top + EW.bottom) / 2, this.scan(WW, iW)
        }
        if (tW) {
          if (OW && OW.bottom > EW.top) return this.y = OW.bottom - 1, this.scan(WW, iW);
          if (mW && mW.top < EW.bottom) return this.y = mW.top + 1, this.scan(WW, iW)
        }
        let ZW = (cW ? this.dirAt(WW[wW], 1) : this.baseDir) == wi.LTR;
        return {
          i: wW,
          after: this.x > (EW.left + EW.right) / 2 == ZW
        }
      }
      scanText(WW, iW) {
        let OW = [];
        for (let NW = 0; NW < WW.length; NW = (0, mW.$)(WW.text, NW)) OW.push(iW + NW);
        OW.push(iW + WW.length);
        let EW = this.scan(OW, (mW => {
          let EW = OW[mW] - iW,
            NW = OW[mW + 1] - iW;
          return mi(WW.dom, EW, NW).getClientRects()
        }));
        return EW.after ? new rO(OW[EW.i + 1], -1) : new rO(OW[EW.i], 1)
      }
      scanTile(WW, iW) {
        if (!WW.length) return new rO(iW, 1);
        if (1 == WW.children.length) {
          let OW = WW.children[0];
          if (OW.isText()) return this.scanText(OW, iW);
          if (OW.isComposite()) return this.scanTile(OW, iW)
        }
        let OW = [iW];
        for (let PW = 0, LW = iW; PW < WW.children.length; PW++) OW.push(LW += WW.children[PW].length);
        let mW = this.scan(OW, (iW => {
            let OW = WW.children[iW];
            return 48 & OW.flags ? null : (1 == OW.dom.nodeType ? OW.dom : mi(OW.dom, 0, OW.length)).getClientRects()
          })),
          EW = WW.children[mW.i],
          NW = OW[mW.i];
        return EW.isText() ? this.scanText(EW, NW) : EW.isComposite() ? this.scanTile(EW, NW) : mW.after ? new rO(OW[mW.i + 1], -1) : new rO(NW, 1)
      }
    }
    const QO = "\uffff";
    class Wm {
      constructor(WW, iW) {
        this.points = WW, this.view = iW, this.text = "", this.lineSeparator = iW.state.facet(mW.o.lineSeparator)
      }
      append(WW) {
        this.text += WW
      }
      lineBreak() {
        this.text += QO
      }
      readRange(WW, iW) {
        if (!WW) return this;
        let OW = WW.parentNode;
        for (let mW = WW;;) {
          this.findPointBefore(OW, mW);
          let WW = this.text.length;
          this.readNode(mW);
          let EW = AO.get(mW),
            NW = mW.nextSibling;
          if (NW == iW) {
            (null === EW || void 0 === EW ? void 0 : EW.breakAfter) && !NW && OW != this.view.contentDOM && this.lineBreak();
            break
          }
          let PW = AO.get(NW);
          (EW && PW ? EW.breakAfter : (EW ? EW.breakAfter : RW(mW)) || RW(NW) && ("BR" != mW.nodeName || (null === EW || void 0 === EW ? void 0 : EW.isWidget())) && this.text.length > WW) && !Om(NW, iW) && this.lineBreak(), mW = NW
        }
        return this.findPointBefore(OW, iW), this
      }
      readTextNode(WW) {
        let iW = WW.nodeValue;
        for (let OW of this.points) OW.node == WW && (OW.pos = this.text.length + Math.min(OW.offset, iW.length));
        for (let OW = 0, mW = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let EW, NW = -1,
            PW = 1;
          if (this.lineSeparator ? (NW = iW.indexOf(this.lineSeparator, OW), PW = this.lineSeparator.length) : (EW = mW.exec(iW)) && (NW = EW.index, PW = EW[0].length), this.append(iW.slice(OW, NW < 0 ? iW.length : NW)), NW < 0) break;
          if (this.lineBreak(), PW > 1)
            for (let iW of this.points) iW.node == WW && iW.pos > this.text.length && (iW.pos -= PW - 1);
          OW = NW + PW
        }
      }
      readNode(WW) {
        let iW = AO.get(WW),
          OW = iW && iW.overrideDOMText;
        if (null != OW) {
          this.findPointInside(WW, OW.length);
          for (let WW = OW.iter(); !WW.next().done;) WW.lineBreak ? this.lineBreak() : this.append(WW.value)
        } else 3 == WW.nodeType ? this.readTextNode(WW) : "BR" == WW.nodeName ? WW.nextSibling && this.lineBreak() : 1 == WW.nodeType && this.readRange(WW.firstChild, null)
      }
      findPointBefore(WW, iW) {
        for (let OW of this.points) OW.node == WW && WW.childNodes[OW.offset] == iW && (OW.pos = this.text.length)
      }
      findPointInside(WW, iW) {
        for (let OW of this.points)(3 == WW.nodeType ? OW.node == WW : WW.contains(OW.node)) && (OW.pos = this.text.length + (im(WW, OW.node, OW.offset) ? iW : 0))
      }
    }

    function im(WW, iW, OW) {
      for (;;) {
        if (!iW || OW < IW(iW)) return !1;
        if (iW == WW) return !0;
        OW = qW(iW) + 1, iW = iW.parentNode
      }
    }

    function Om(WW, iW) {
      let OW;
      for (; WW != iW && WW; WW = WW.nextSibling) {
        let iW = AO.get(WW);
        if (!(null === iW || void 0 === iW ? void 0 : iW.isWidget())) return !1;
        iW && (OW || (OW = [])).push(iW)
      }
      if (OW)
        for (let mW of OW) {
          let WW = mW.overrideDOMText;
          if (null === WW || void 0 === WW ? void 0 : WW.length) return !1
        }
      return !0
    }
    class mm {
      constructor(WW, iW) {
        this.node = WW, this.offset = iW, this.pos = -1
      }
    }
    class Em {
      constructor(WW, iW, OW, EW) {
        this.typeOver = EW, this.bounds = null, this.text = "", this.domChanged = iW > -1;
        let {
          impreciseHead: NW,
          impreciseAnchor: PW
        } = WW.docView, LW = WW.state.selection;
        if (WW.state.readOnly && iW > -1) this.newSel = null;
        else if (iW > -1 && (this.bounds = Nm(WW.docView.tile, iW, OW, 0))) {
          let iW = NW || PW ? [] : function(WW) {
              let iW = [];
              if (WW.root.activeElement != WW.contentDOM) return iW;
              let {
                anchorNode: OW,
                anchorOffset: mW,
                focusNode: EW,
                focusOffset: NW
              } = WW.observer.selectionRange;
              OW && (iW.push(new mm(OW, mW)), EW == OW && NW == mW || iW.push(new mm(EW, NW)));
              return iW
            }(WW),
            OW = new Wm(iW, WW);
          OW.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = OW.text, this.newSel = function(WW, iW) {
            if (0 == WW.length) return null;
            let OW = WW[0].pos,
              EW = 2 == WW.length ? WW[1].pos : OW;
            return OW > -1 && EW > -1 ? mW.l.single(OW + iW, EW + iW) : null
          }(iW, this.bounds.from)
        } else {
          let iW = WW.observer.selectionRange,
            OW = NW && NW.node == iW.focusNode && NW.offset == iW.focusOffset || !fW(WW.contentDOM, iW.focusNode) ? LW.main.head : WW.docView.posFromDOM(iW.focusNode, iW.focusOffset),
            EW = PW && PW.node == iW.anchorNode && PW.offset == iW.anchorOffset || !fW(WW.contentDOM, iW.anchorNode) ? LW.main.anchor : WW.docView.posFromDOM(iW.anchorNode, iW.anchorOffset),
            cW = WW.viewport;
          if ((YW.ios || YW.chrome) && LW.main.empty && OW != EW && (cW.from > 0 || cW.to < WW.state.doc.length)) {
            let iW = Math.min(OW, EW),
              mW = Math.max(OW, EW),
              NW = cW.from - iW,
              PW = cW.to - mW;
            0 != NW && 1 != NW && 0 != iW || 0 != PW && -1 != PW && mW != WW.state.doc.length || (OW = 0, EW = WW.state.doc.length)
          }
          if (WW.inputState.composing > -1 && LW.kj.length > 1) this.newSel = LW.replaceRange(mW.l.range(EW, OW));
          else if (WW.lineWrapping && EW == OW && (!LW.main.empty || LW.main.head != OW) && WW.inputState.lastTouchTime > Date.now() - 100) {
            let iW = WW.coordsAtPos(OW, -1),
              EW = 0;
            iW && (EW = WW.inputState.lastTouchY <= iW.bottom ? -1 : 1), this.newSel = mW.l.create([mW.l.cursor(OW, EW)])
          } else this.newSel = mW.l.single(EW, OW)
        }
      }
    }

    function Nm(WW, iW, OW, mW) {
      if (WW.isComposite()) {
        let EW = -1,
          NW = -1,
          PW = -1,
          LW = -1;
        for (let cW = 0, wW = mW, tW = mW; cW < WW.children.length; cW++) {
          let mW = WW.children[cW],
            ZW = wW + mW.length;
          if (wW < iW && ZW > OW) return Nm(mW, iW, OW, wW);
          if (ZW >= iW && -1 == EW && (EW = cW, NW = wW), wW > OW && mW.dom.parentNode == WW.dom) {
            PW = cW, LW = tW;
            break
          }
          tW = ZW, wW = ZW + mW.breakAfter
        }
        return {
          from: NW,
          to: LW < 0 ? mW + WW.length : LW,
          startDOM: (EW ? WW.children[EW - 1].dom.nextSibling : null) || WW.dom.firstChild,
          endDOM: PW < WW.children.length && PW >= 0 ? WW.children[PW].dom : null
        }
      }
      return WW.isText() ? {
        from: mW,
        to: mW + WW.length,
        startDOM: WW.dom,
        endDOM: WW.dom.nextSibling
      } : null
    }

    function Pm(WW, iW) {
      let OW, {
          newSel: EW
        } = iW,
        {
          state: NW
        } = WW,
        PW = NW.selection.main,
        LW = WW.inputState.lastKeyTime > Date.now() - 100 ? WW.inputState.lastKeyCode : -1;
      if (iW.bounds) {
        let {
          from: WW,
          to: EW
        } = iW.bounds, cW = PW.from, wW = null;
        (8 === LW || YW.android && iW.text.length < EW - WW) && (cW = PW.to, wW = "end");
        let tW, ZW, xW = NW.doc.sliceString(WW, EW, QO);
        !PW.empty && PW.from >= WW && PW.to <= EW && (iW.typeOver || xW != iW.text) && xW.slice(0, PW.from - WW) == iW.text.slice(0, PW.from - WW) && xW.slice(PW.to - WW) == iW.text.slice(tW = iW.text.length - (xW.length - (PW.to - WW))) ? OW = {
          from: PW.from,
          to: PW.to,
          insert: mW.M.of(iW.text.slice(PW.from - WW, tW).split(QO))
        } : (ZW = cm(xW, iW.text, cW - WW, wW)) && (YW.chrome && 13 == LW && ZW.toB == ZW.from + 2 && iW.text.slice(ZW.from, ZW.toB) == QO + QO && ZW.toB--, OW = {
          from: WW + ZW.from,
          to: WW + ZW.toA,
          insert: mW.M.of(iW.text.slice(ZW.from, ZW.toB).split(QO))
        })
      } else EW && (!WW.hasFocus && NW.facet(ai) || wm(EW, PW)) && (EW = null);
      if (!OW && !EW) return !1;
      if ((YW.mac || YW.android) && OW && OW.from == OW.to && OW.from == PW.head - 1 && /^\. ?$/.test(OW.insert.toString()) && "off" == WW.contentDOM.getAttribute("autocorrect") ? (EW && 2 == OW.insert.length && (EW = mW.l.single(EW.main.anchor - 1, EW.main.head - 1)), OW = {
          from: OW.from,
          to: OW.to,
          insert: mW.M.of([OW.insert.toString().replace(".", " ")])
        }) : NW.doc.lineAt(PW.from).to < PW.to && WW.docView.lineHasWidget(PW.to) && WW.inputState.insertingTextAt > Date.now() - 50 ? OW = {
          from: PW.from,
          to: PW.to,
          insert: NW.toText(WW.inputState.insertingText)
        } : YW.chrome && OW && OW.from == OW.to && OW.from == PW.head && "\n " == OW.insert.toString() && WW.lineWrapping && (EW && (EW = mW.l.single(EW.main.anchor - 1, EW.main.head - 1)), OW = {
          from: PW.from,
          to: PW.to,
          insert: mW.M.of([" "])
        }), OW) return Lm(WW, OW, EW, LW);
      if (EW && !wm(EW, PW)) {
        let iW = !1,
          OW = "select";
        return WW.inputState.lastSelectionTime > Date.now() - 50 && ("select" == WW.inputState.lastSelectionOrigin && (iW = !0), OW = WW.inputState.lastSelectionOrigin, "select.pointer" == OW && (EW = IO(NW.facet(NO).map((iW => iW(WW))), EW))), WW.dispatch({
          selection: EW,
          scrollIntoView: iW,
          userEvent: OW
        }), !0
      }
      return !1
    }

    function Lm(WW, iW, OW) {
      let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (YW.ios && WW.inputState.flushIOSKey(iW)) return !0;
      let NW = WW.state.selection.main;
      if (YW.android && (iW.to == NW.to && (iW.from == NW.from || iW.from == NW.from - 1 && " " == WW.state.sliceDoc(iW.from, NW.from)) && 1 == iW.insert.length && 2 == iW.insert.lines && Ei(WW.contentDOM, "Enter", 13) || (iW.from == NW.from - 1 && iW.to == NW.to && 0 == iW.insert.length || 8 == EW && iW.insert.length < iW.to - iW.from && iW.to > NW.head) && Ei(WW.contentDOM, "Backspace", 8) || iW.from == NW.from && iW.to == NW.to + 1 && 0 == iW.insert.length && Ei(WW.contentDOM, "Delete", 46))) return !0;
      let PW, LW = iW.insert.toString();
      WW.inputState.composing >= 0 && WW.inputState.composing++;
      let cW = () => PW || (PW = function(WW, iW, OW) {
        let EW, NW = WW.state,
          PW = NW.selection.main,
          LW = -1;
        if (iW.from == iW.to && iW.from < PW.from || iW.from > PW.to) {
          let OW = iW.from < PW.from ? -1 : 1,
            mW = OW < 0 ? PW.from : PW.to,
            EW = GO(NW.facet(NO).map((iW => iW(WW))), mW, OW);
          iW.from == EW && (LW = EW)
        }
        if (LW > -1) EW = {
          changes: iW,
          selection: mW.l.cursor(iW.from + iW.insert.length, -1)
        };
        else if (iW.from >= PW.from && iW.to <= PW.to && iW.to - iW.from >= (PW.to - PW.from) / 3 && (!OW || OW.main.empty && OW.main.from == iW.from + iW.insert.length) && WW.inputState.composing < 0) {
          let OW = PW.from < iW.from ? NW.sliceDoc(PW.from, iW.from) : "",
            mW = PW.to > iW.to ? NW.sliceDoc(iW.to, PW.to) : "";
          EW = NW.replaceSelection(WW.state.toText(OW + iW.insert.sliceString(0, void 0, WW.state.lineBreak) + mW))
        } else {
          let LW = NW.changes(iW),
            cW = OW && OW.main.to <= LW.newLength ? OW.main : void 0;
          if (NW.selection.kj.length > 1 && (WW.inputState.composing >= 0 || WW.inputState.compositionPendingChange) && iW.to <= PW.to + 10 && iW.to >= PW.to - 10) {
            let wW, tW = WW.state.sliceDoc(iW.from, iW.to),
              ZW = OW && fO(WW, OW.main.head);
            if (ZW) {
              let WW = iW.insert.length - (iW.to - iW.from);
              wW = {
                from: ZW.from,
                to: ZW.to - WW
              }
            } else wW = WW.state.doc.lineAt(PW.head);
            let xW = PW.to - iW.to;
            EW = NW.changeByRange((OW => {
              if (OW.from == PW.from && OW.to == PW.to) return {
                changes: LW,
                range: cW || OW.map(LW)
              };
              let EW = OW.to - xW,
                ZW = EW - tW.length;
              if (WW.state.sliceDoc(ZW, EW) != tW || EW >= wW.from && ZW <= wW.to) return {
                range: OW
              };
              let lW = NW.changes({
                  from: ZW,
                  to: EW,
                  insert: iW.insert
                }),
                AW = OW.to - PW.to;
              return {
                changes: lW,
                range: cW ? mW.l.range(Math.max(0, cW.anchor + AW), Math.max(0, cW.head + AW)) : OW.map(lW)
              }
            }))
          } else EW = {
            changes: LW,
            selection: cW && NW.selection.replaceRange(cW)
          }
        }
        let cW = "input.type";
        (WW.composing || WW.inputState.compositionPendingChange && WW.inputState.compositionEndedAt > Date.now() - 50) && (WW.inputState.compositionPendingChange = !1, cW += ".compose", WW.inputState.compositionFirstChange && (cW += ".start", WW.inputState.compositionFirstChange = !1));
        return NW.update(EW, {
          userEvent: cW,
          scrollIntoView: !0
        })
      }(WW, iW, OW));
      return WW.state.facet(gi).some((OW => OW(WW, iW.from, iW.to, LW, cW))) || WW.dispatch(cW()), !0
    }

    function cm(WW, iW, OW, mW) {
      let EW = Math.min(WW.length, iW.length),
        NW = 0;
      for (; NW < EW && WW.charCodeAt(NW) == iW.charCodeAt(NW);) NW++;
      if (NW == EW && WW.length == iW.length) return null;
      let PW = WW.length,
        LW = iW.length;
      for (; PW > 0 && LW > 0 && WW.charCodeAt(PW - 1) == iW.charCodeAt(LW - 1);) PW--, LW--;
      if ("end" == mW) {
        OW -= PW + Math.max(0, NW - Math.min(PW, LW)) - NW
      }
      if (PW < NW && WW.length < iW.length) {
        NW -= OW <= NW && OW >= PW ? NW - OW : 0, LW = NW + (LW - PW), PW = NW
      } else if (LW < NW) {
        NW -= OW <= NW && OW >= LW ? NW - OW : 0, PW = NW + (PW - LW), LW = NW
      }
      return {
        from: NW,
        toA: PW,
        toB: LW
      }
    }

    function wm(WW, iW) {
      return iW.head == WW.main.head && iW.anchor == WW.main.anchor
    }
    class tm {
      setSelectionOrigin(WW) {
        this.lastSelectionOrigin = WW, this.lastSelectionTime = Date.now()
      }
      constructor(WW) {
        this.view = WW, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = WW.hasFocus, YW.safari && WW.contentDOM.addEventListener("input", (() => null)), YW.gecko && function(WW) {
          gm.has(WW) || (gm.add(WW), WW.addEventListener("copy", (() => {})), WW.addEventListener("cut", (() => {})))
        }(WW.contentDOM.ownerDocument)
      }
      handleEvent(WW) {
        (function(WW, iW) {
          if (!iW.bubbles) return !0;
          if (iW.defaultPrevented) return !1;
          for (let OW, mW = iW.target; mW != WW.contentDOM; mW = mW.parentNode)
            if (!mW || 11 == mW.nodeType || (OW = AO.get(mW)) && OW.isWidget() && !OW.isHidden && OW.widget.ignoreEvent(iW)) return !1;
          return !0
        })(this.view, WW) && !this.ignoreDuringComposition(WW) && ("keydown" == WW.type && this.keydown(WW) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(WW.type, WW))) : this.runHandlers(WW.type, WW)))
      }
      runHandlers(WW, iW) {
        let OW = this.handlers[WW];
        if (OW) {
          for (let WW of OW.observers) WW(this.view, iW);
          for (let WW of OW.handlers) {
            if (iW.defaultPrevented) break;
            if (WW(this.view, iW)) {
              iW.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(WW) {
        let iW = xm(WW),
          OW = this.handlers,
          mW = this.view.contentDOM;
        for (let EW in iW)
          if ("scroll" != EW) {
            let WW = !iW[EW].handlers.length,
              NW = OW[EW];
            NW && WW != !NW.handlers.length && (mW.removeEventListener(EW, this.handleEvent), NW = null), NW || mW.addEventListener(EW, this.handleEvent, {
              passive: WW
            })
          } for (let EW in OW) "scroll" == EW || iW[EW] || mW.removeEventListener(EW, this.handleEvent);
        this.handlers = iW
      }
      keydown(WW) {
        if (this.lastKeyCode = WW.keyCode, this.lastKeyTime = Date.now(), 9 == WW.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != WW.keyCode && bm.indexOf(WW.keyCode) < 0 && (this.tabFocusMode = -1), YW.android && YW.chrome && !WW.synthetic && (13 == WW.keyCode || 8 == WW.keyCode)) return this.view.observer.delayAndroidKey(WW.key, WW.keyCode), !0;
        let iW;
        return !YW.ios || WW.synthetic || WW.altKey || WW.metaKey || WW.shiftKey || !((iW = lm.find((iW => iW.keyCode == WW.keyCode))) && !WW.ctrlKey || Am.indexOf(WW.key) > -1 && WW.ctrlKey) ? (229 != WW.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = iW || WW, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(WW) {
        let iW = this.pendingIOSKey;
        return !!iW && (!("Enter" == iW.key && WW && WW.from < WW.to && /^\S+$/.test(WW.insert.toString())) && (this.pendingIOSKey = void 0, Ei(this.view.contentDOM, iW.key, iW.keyCode, iW instanceof KeyboardEvent ? iW : void 0)))
      }
      ignoreDuringComposition(WW) {
        return !(!/^key/.test(WW.type) || WW.synthetic) && (this.composing > 0 || !!(YW.safari && !YW.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(WW) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = WW
      }
      update(WW) {
        this.view.observer.update(WW), this.mouseSelection && this.mouseSelection.update(WW), this.draggedContent && WW.docChanged && (this.draggedContent = this.draggedContent.map(WW.changes)), WW.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function Zm(WW, iW) {
      return (OW, mW) => {
        try {
          return iW.call(WW, mW, OW)
        } catch (EW) {
          Ii(OW.state, EW)
        }
      }
    }

    function xm(WW) {
      let iW = Object.create(null);

      function OW(WW) {
        return iW[WW] || (iW[WW] = {
          observers: [],
          handlers: []
        })
      }
      for (let mW of WW) {
        let WW = mW.spec,
          iW = WW && WW.plugin.domEventHandlers,
          EW = WW && WW.plugin.domEventObservers;
        if (iW)
          for (let NW in iW) {
            let WW = iW[NW];
            WW && OW(NW).handlers.push(Zm(mW.value, WW))
          }
        if (EW)
          for (let NW in EW) {
            let WW = EW[NW];
            WW && OW(NW).observers.push(Zm(mW.value, WW))
          }
      }
      for (let mW in km) OW(mW).handlers.push(km[mW]);
      for (let mW in sm) OW(mW).observers.push(sm[mW]);
      return iW
    }
    const lm = [{
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
      Am = "dthko",
      bm = [16, 17, 18, 20, 91, 92, 224, 225];

    function jm(WW) {
      return .7 * Math.max(0, WW) + 8
    }
    class Um {
      constructor(WW, iW, OW, EW) {
        this.view = WW, this.startEvent = iW, this.style = OW, this.mustSelect = EW, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = iW, this.scrollParents = FW(WW.contentDOM), this.atoms = WW.state.facet(NO).map((iW => iW(WW)));
        let NW = WW.contentDOM.ownerDocument;
        NW.addEventListener("mousemove", this.move = this.move.bind(this)), NW.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = iW.shiftKey, this.multiple = WW.state.facet(mW.o.allowMultipleSelections) && function(WW, iW) {
          let OW = WW.state.facet(ui);
          return OW.length ? OW[0](iW) : YW.mac ? iW.metaKey : iW.ctrlKey
        }(WW, iW), this.dragging = !(! function(WW, iW) {
          let {
            main: OW
          } = WW.state.selection;
          if (OW.empty) return !1;
          let mW = pW(WW.root);
          if (!mW || 0 == mW.rangeCount) return !0;
          let EW = mW.getRangeAt(0).getClientRects();
          for (let NW = 0; NW < EW.length; NW++) {
            let WW = EW[NW];
            if (WW.left <= iW.clientX && WW.right >= iW.clientX && WW.top <= iW.clientY && WW.bottom >= iW.clientY) return !0
          }
          return !1
        }(WW, iW) || 1 != Hm(iW)) && null
      }
      start(WW) {
        !1 === this.dragging && this.select(WW)
      }
      move(WW) {
        if (0 == WW.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (iW = this.startEvent, OW = WW, Math.max(Math.abs(iW.clientX - OW.clientX), Math.abs(iW.clientY - OW.clientY)) < 10)) return;
        var iW, OW;
        this.select(this.lastEvent = WW);
        let mW = 0,
          EW = 0,
          NW = 0,
          PW = 0,
          LW = this.view.win.innerWidth,
          cW = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: NW,
          right: LW
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: PW,
          bottom: cW
        } = this.scrollParents.y.getBoundingClientRect());
        let wW = wO(this.view);
        WW.clientX - wW.left <= NW + 6 ? mW = -jm(NW - WW.clientX) : WW.clientX + wW.right >= LW - 6 && (mW = jm(WW.clientX - LW)), WW.clientY - wW.top <= PW + 6 ? EW = -jm(PW - WW.clientY) : WW.clientY + wW.bottom >= cW - 6 && (EW = jm(WW.clientY - cW)), this.setScrollSpeed(mW, EW)
      }
      up(WW) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || WW.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let WW = this.view.contentDOM.ownerDocument;
        WW.removeEventListener("mousemove", this.move), WW.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(WW, iW) {
        this.scrollSpeed = {
          x: WW,
          y: iW
        }, WW || iW ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: WW,
          y: iW
        } = this.scrollSpeed;
        WW && this.scrollParents.x && (this.scrollParents.x.scrollLeft += WW, WW = 0), iW && this.scrollParents.y && (this.scrollParents.y.scrollTop += iW, iW = 0), (WW || iW) && this.view.win.scrollBy(WW, iW), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(WW) {
        let {
          view: iW
        } = this, OW = IO(this.atoms, this.style.get(WW, this.extend, this.multiple));
        !this.mustSelect && OW.eq(iW.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: OW,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(WW) {
        WW.transactions.some((WW => WW.isUserEvent("input.type"))) ? this.destroy() : this.style.update(WW) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const km = Object.create(null),
      sm = Object.create(null),
      Mm = YW.ie && YW.ie_version < 15 || YW.ios && YW.webkit_version < 604;

    function Km(WW, iW, OW) {
      for (let mW of WW.facet(iW)) OW = mW(OW, WW);
      return OW
    }

    function Sm(WW, iW) {
      iW = Km(WW.state, Vi, iW);
      let OW, {
          state: EW
        } = WW,
        NW = 1,
        PW = EW.toText(iW),
        LW = PW.lines == EW.selection.kj.length;
      if (null != um && EW.selection.kj.every((WW => WW.empty)) && um == PW.toString()) {
        let WW = -1;
        OW = EW.changeByRange((OW => {
          let cW = EW.doc.lineAt(OW.from);
          if (cW.from == WW) return {
            range: OW
          };
          WW = cW.from;
          let wW = EW.toText((LW ? PW.line(NW++).text : iW) + EW.lineBreak);
          return {
            changes: {
              from: cW.from,
              insert: wW
            },
            range: mW.l.cursor(OW.from + wW.length)
          }
        }))
      } else OW = LW ? EW.changeByRange((WW => {
        let iW = PW.line(NW++);
        return {
          changes: {
            from: WW.from,
            to: WW.to,
            insert: iW.text
          },
          range: mW.l.cursor(WW.from + iW.length)
        }
      })) : EW.replaceSelection(PW);
      WW.dispatch(OW, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function Ym(WW, iW, OW, EW) {
      if (1 == EW) return mW.l.cursor(iW, OW);
      if (2 == EW) return function(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          EW = WW.charCategorizer(iW),
          NW = WW.doc.lineAt(iW),
          PW = iW - NW.from;
        if (0 == NW.length) return mW.l.cursor(iW);
        0 == PW ? OW = 1 : PW == NW.length && (OW = -1);
        let LW = PW,
          cW = PW;
        OW < 0 ? LW = (0, mW.$)(NW.text, PW, !1) : cW = (0, mW.$)(NW.text, PW);
        let wW = EW(NW.text.slice(LW, cW));
        for (; LW > 0;) {
          let WW = (0, mW.$)(NW.text, LW, !1);
          if (EW(NW.text.slice(WW, LW)) != wW) break;
          LW = WW
        }
        for (; cW < NW.length;) {
          let WW = (0, mW.$)(NW.text, cW);
          if (EW(NW.text.slice(cW, WW)) != wW) break;
          cW = WW
        }
        return mW.l.range(LW + NW.from, cW + NW.from)
      }(WW.state, iW, OW);
      {
        let EW = WW.docView.lineAt(iW, OW),
          NW = WW.state.doc.lineAt(EW ? EW.posAtEnd : iW),
          PW = EW ? EW.posAtStart : NW.from,
          LW = EW ? EW.posAtEnd : NW.to;
        return LW < WW.state.doc.length && LW == NW.to && LW++, mW.l.range(PW, LW)
      }
    }
    sm.scroll = WW => {
      WW.inputState.lastScrollTop = WW.scrollDOM.scrollTop, WW.inputState.lastScrollLeft = WW.scrollDOM.scrollLeft
    }, sm.wheel = sm.mousewheel = WW => {
      WW.inputState.lastWheelEvent = Date.now()
    }, km.keydown = (WW, iW) => (WW.inputState.setSelectionOrigin("select"), 27 == iW.keyCode && 0 != WW.inputState.tabFocusMode && (WW.inputState.tabFocusMode = Date.now() + 2e3), !1), sm.touchstart = (WW, iW) => {
      let OW = WW.inputState,
        mW = iW.targetTouches[0];
      OW.lastTouchTime = Date.now(), mW && (OW.lastTouchX = mW.clientX, OW.lastTouchY = mW.clientY), OW.setSelectionOrigin("select.pointer")
    }, sm.touchmove = WW => {
      WW.inputState.setSelectionOrigin("select.pointer")
    }, km.mousedown = (WW, iW) => {
      if (WW.observer.flush(), WW.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let OW = null;
      for (let mW of WW.state.facet(di))
        if (OW = mW(WW, iW), OW) break;
      if (OW || 0 != iW.button || (OW = function(WW, iW) {
          let OW = WW.posAndSideAtCoords({
              x: iW.clientX,
              y: iW.clientY
            }, !1),
            EW = Hm(iW),
            NW = WW.state.selection;
          return {
            update(WW) {
              WW.docChanged && (OW.pos = WW.changes.mapPos(OW.pos), NW = NW.map(WW.changes))
            },
            get(iW, PW, LW) {
              let cW, wW = WW.posAndSideAtCoords({
                  x: iW.clientX,
                  y: iW.clientY
                }, !1),
                tW = Ym(WW, wW.pos, wW.assoc, EW);
              if (OW.pos != wW.pos && !PW) {
                let iW = Ym(WW, OW.pos, OW.assoc, EW),
                  NW = Math.min(iW.from, tW.from),
                  PW = Math.max(iW.to, tW.to);
                tW = NW < tW.from ? mW.l.range(NW, PW, tW.assoc) : mW.l.range(PW, NW, tW.assoc)
              }
              return PW ? NW.replaceRange(NW.main.extend(tW.from, tW.to, tW.assoc)) : LW && 1 == EW && NW.kj.length > 1 && (cW = function(WW, iW) {
                for (let OW = 0; OW < WW.kj.length; OW++) {
                  let {
                    from: EW,
                    to: NW
                  } = WW.kj[OW];
                  if (EW <= iW && NW >= iW) return mW.l.create(WW.kj.slice(0, OW).concat(WW.kj.slice(OW + 1)), WW.mainIndex == OW ? 0 : WW.mainIndex - (WW.mainIndex > OW ? 1 : 0))
                }
                return null
              }(NW, wW.pos)) ? cW : LW ? NW.addRange(tW) : mW.l.create([tW])
            }
          }
        }(WW, iW)), OW) {
        let mW = !WW.hasFocus;
        WW.inputState.startMouseSelection(new Um(WW, iW, OW, mW)), mW && WW.observer.ignore((() => {
          Oi(WW.contentDOM);
          let iW = WW.root.activeElement;
          iW && !iW.contains(WW.contentDOM) && iW.blur()
        }));
        let EW = WW.inputState.mouseSelection;
        if (EW) return EW.start(iW), !1 === EW.dragging
      } else WW.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const ym = YW.ie && YW.ie_version <= 11;
    let Tm = null,
      Jm = 0,
      hm = 0;

    function Hm(WW) {
      if (!ym) return WW.detail;
      let iW = Tm,
        OW = hm;
      return Tm = WW, hm = Date.now(), Jm = !iW || OW > Date.now() - 400 && Math.abs(iW.clientX - WW.clientX) < 2 && Math.abs(iW.clientY - WW.clientY) < 2 ? (Jm + 1) % 3 : 1
    }

    function nm(WW, iW, OW, mW) {
      if (!(OW = Km(WW.state, Vi, OW))) return;
      let EW = WW.posAtCoords({
          x: iW.clientX,
          y: iW.clientY
        }, !1),
        {
          draggedContent: NW
        } = WW.inputState,
        PW = mW && NW && function(WW, iW) {
          let OW = WW.state.facet(oi);
          return OW.length ? OW[0](iW) : YW.mac ? !iW.altKey : !iW.ctrlKey
        }(WW, iW) ? {
          from: NW.from,
          to: NW.to
        } : null,
        LW = {
          from: EW,
          insert: OW
        },
        cW = WW.state.changes(PW ? [PW, LW] : LW);
      WW.focus(), WW.dispatch({
        changes: cW,
        selection: {
          anchor: cW.mapPos(EW, -1),
          head: cW.mapPos(EW, 1)
        },
        userEvent: PW ? "move.drop" : "input.drop"
      }), WW.inputState.draggedContent = null
    }
    km.dragstart = (WW, iW) => {
      let {
        selection: {
          main: OW
        }
      } = WW.state;
      if (iW.target.draggable) {
        let EW = WW.docView.tile.nearest(iW.target);
        if (EW && EW.isWidget()) {
          let WW = EW.posAtStart,
            iW = WW + EW.length;
          (WW >= OW.to || iW <= OW.from) && (OW = mW.l.range(WW, iW))
        }
      }
      let {
        inputState: EW
      } = WW;
      return EW.mouseSelection && (EW.mouseSelection.dragging = !0), EW.draggedContent = OW, iW.dataTransfer && (iW.dataTransfer.setData("Text", Km(WW.state, fi, WW.state.sliceDoc(OW.from, OW.to))), iW.dataTransfer.effectAllowed = "copyMove"), !1
    }, km.dragend = WW => (WW.inputState.draggedContent = null, !1), km.drop = (WW, iW) => {
      if (!iW.dataTransfer) return !1;
      if (WW.state.readOnly) return !0;
      let OW = iW.dataTransfer.files;
      if (OW && OW.length) {
        let mW = Array(OW.length),
          EW = 0,
          NW = () => {
            ++EW == OW.length && nm(WW, iW, mW.filter((WW => null != WW)).join(WW.state.lineBreak), !1)
          };
        for (let WW = 0; WW < OW.length; WW++) {
          let iW = new FileReader;
          iW.onerror = NW, iW.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(iW.result) || (mW[WW] = iW.result), NW()
          }, iW.readAsText(OW[WW])
        }
        return !0
      } {
        let OW = iW.dataTransfer.getData("Text");
        if (OW) return nm(WW, iW, OW, !0), !0
      }
      return !1
    }, km.paste = (WW, iW) => {
      if (WW.state.readOnly) return !0;
      WW.observer.flush();
      let OW = Mm ? null : iW.clipboardData;
      return OW ? (Sm(WW, OW.getData("text/plain") || OW.getData("text/uri-list")), !0) : (function(WW) {
        let iW = WW.dom.parentNode;
        if (!iW) return;
        let OW = iW.appendChild(document.createElement("textarea"));
        OW.style.cssText = "position: fixed; left: -10000px; top: 10px", OW.focus(), setTimeout((() => {
          WW.focus(), OW.remove(), Sm(WW, OW.value)
        }), 50)
      }(WW), !1)
    };
    let um = null;
    km.copy = km.cut = (WW, iW) => {
      if (!CW(WW.contentDOM, WW.observer.selectionRange)) return !1;
      let {
        text: OW,
        kj: mW,
        linewise: EW
      } = function(WW) {
        let iW = [],
          OW = [],
          mW = !1;
        for (let EW of WW.selection.kj) EW.empty || (iW.push(WW.sliceDoc(EW.from, EW.to)), OW.push(EW));
        if (!iW.length) {
          let EW = -1;
          for (let {
              from: mW
            }
            of WW.selection.kj) {
            let NW = WW.doc.lineAt(mW);
            NW.number > EW && (iW.push(NW.text), OW.push({
              from: NW.from,
              to: Math.min(WW.doc.length, NW.to + 1)
            })), EW = NW.number
          }
          mW = !0
        }
        return {
          text: Km(WW, fi, iW.join(WW.lineBreak)),
          kj: OW,
          linewise: mW
        }
      }(WW.state);
      if (!OW && !EW) return !1;
      um = EW ? OW : null, "cut" != iW.type || WW.state.readOnly || WW.dispatch({
        changes: mW,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let NW = Mm ? null : iW.clipboardData;
      return NW ? (NW.clearData(), NW.setData("text/plain", OW), !0) : (function(WW, iW) {
        let OW = WW.dom.parentNode;
        if (!OW) return;
        let mW = OW.appendChild(document.createElement("textarea"));
        mW.style.cssText = "position: fixed; left: -10000px; top: 10px", mW.value = iW, mW.focus(), mW.selectionEnd = iW.length, mW.selectionStart = 0, setTimeout((() => {
          mW.remove(), WW.focus()
        }), 50)
      }(WW, OW), !1)
    };
    const om = mW.d.define();

    function dm(WW, iW) {
      let OW = [];
      for (let mW of WW.facet(Di)) {
        let EW = mW(WW, iW);
        EW && OW.push(EW)
      }
      return OW.length ? WW.update({
        effects: OW,
        annotations: om.of(!0)
      }) : null
    }

    function em(WW) {
      setTimeout((() => {
        let iW = WW.hasFocus;
        if (iW != WW.inputState.notifiedFocused) {
          let OW = dm(WW.state, iW);
          OW ? WW.dispatch(OW) : WW.update([])
        }
      }), 10)
    }
    sm.focus = WW => {
      WW.inputState.lastFocusTime = Date.now(), WW.scrollDOM.scrollTop || !WW.inputState.lastScrollTop && !WW.inputState.lastScrollLeft || (WW.scrollDOM.scrollTop = WW.inputState.lastScrollTop, WW.scrollDOM.scrollLeft = WW.inputState.lastScrollLeft), em(WW)
    }, sm.blur = WW => {
      WW.observer.clearSelectionRange(), em(WW)
    }, sm.compositionstart = sm.compositionupdate = WW => {
      WW.observer.editContext || (null == WW.inputState.compositionFirstChange && (WW.inputState.compositionFirstChange = !0), WW.inputState.composing < 0 && (WW.inputState.composing = 0))
    }, sm.compositionend = WW => {
      WW.observer.editContext || (WW.inputState.composing = -1, WW.inputState.compositionEndedAt = Date.now(), WW.inputState.compositionPendingKey = !0, WW.inputState.compositionPendingChange = WW.observer.pendingRecords().length > 0, WW.inputState.compositionFirstChange = null, YW.chrome && YW.android ? WW.observer.flushSoon() : WW.inputState.compositionPendingChange ? Promise.resolve().then((() => WW.observer.flush())) : setTimeout((() => {
        WW.inputState.composing < 0 && WW.docView.hasComposition && WW.update([])
      }), 50))
    }, sm.contextmenu = WW => {
      WW.inputState.lastContextMenu = Date.now()
    }, km.beforeinput = (WW, iW) => {
      var OW, mW;
      if ("insertText" != iW.inputType && "insertCompositionText" != iW.inputType || (WW.inputState.insertingText = iW.data, WW.inputState.insertingTextAt = Date.now()), "insertReplacementText" == iW.inputType && WW.observer.editContext) {
        let mW = null === (OW = iW.dataTransfer) || void 0 === OW ? void 0 : OW.getData("text/plain"),
          EW = iW.getTargetRanges();
        if (mW && EW.length) {
          let iW = EW[0],
            OW = WW.posAtDOM(iW.startContainer, iW.startOffset),
            NW = WW.posAtDOM(iW.endContainer, iW.endOffset);
          return Lm(WW, {
            from: OW,
            to: NW,
            insert: WW.state.toText(mW)
          }, null), !0
        }
      }
      let EW;
      if (YW.chrome && YW.android && (EW = lm.find((WW => WW.inputType == iW.inputType))) && (WW.observer.delayAndroidKey(EW.key, EW.keyCode), "Backspace" == EW.key || "Delete" == EW.key)) {
        let iW = (null === (mW = window.visualViewport) || void 0 === mW ? void 0 : mW.height) || 0;
        setTimeout((() => {
          var OW;
          ((null === (OW = window.visualViewport) || void 0 === OW ? void 0 : OW.height) || 0) > iW + 10 && WW.hasFocus && (WW.contentDOM.blur(), WW.focus())
        }), 100)
      }
      return YW.ios && "deleteContentForward" == iW.inputType && WW.observer.flushSoon(), YW.safari && "insertText" == iW.inputType && WW.inputState.composing >= 0 && setTimeout((() => sm.compositionend(WW, iW)), 20), !1
    };
    const gm = new Set;
    const Dm = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let Vm = !1;

    function pm() {
      Vm = !1
    }
    class fm {
      constructor(WW) {
        this.lineWrapping = WW, this.doc = mW.M.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(WW, iW) {
        let OW = this.doc.lineAt(iW).number - this.doc.lineAt(WW).number + 1;
        return this.lineWrapping && (OW += Math.max(0, Math.ceil((iW - WW - OW * this.lineLength * .5) / this.lineLength))), this.lineHeight * OW
      }
      heightForLine(WW) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((WW - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(WW) {
        return this.doc = WW, this
      }
      mustRefreshForWrapping(WW) {
        return Dm.indexOf(WW) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(WW) {
        let iW = !1;
        for (let OW = 0; OW < WW.length; OW++) {
          let mW = WW[OW];
          mW < 0 ? OW++ : this.heightSamples[Math.floor(10 * mW)] || (iW = !0, this.heightSamples[Math.floor(10 * mW)] = !0)
        }
        return iW
      }
      refresh(WW, iW, OW, mW, EW, NW) {
        let PW = Dm.indexOf(WW) > -1,
          LW = Math.abs(iW - this.lineHeight) > .3 || this.lineWrapping != PW || Math.abs(OW - this.charWidth) > .1;
        if (this.lineWrapping = PW, this.lineHeight = iW, this.charWidth = OW, this.textHeight = mW, this.lineLength = EW, LW) {
          this.heightSamples = {};
          for (let WW = 0; WW < NW.length; WW++) {
            let iW = NW[WW];
            iW < 0 ? WW++ : this.heightSamples[Math.floor(10 * iW)] = !0
          }
        }
        return LW
      }
    }
    class Cm {
      constructor(WW, iW) {
        this.from = WW, this.heights = iW, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class Xm {
      constructor(WW, iW, OW, mW, EW) {
        this.from = WW, this.length = iW, this.top = OW, this.height = mW, this._content = EW
      }
      get type() {
        return "number" == typeof this._content ? uW.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof vW ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(WW) {
        let iW = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(WW._content) ? WW._content : [WW]);
        return new Xm(this.from, this.length + WW.length, this.top, this.height + WW.height, iW)
      }
    }
    var Bm = function(WW) {
      return WW[WW.ByPos = 0] = "ByPos", WW[WW.ByHeight = 1] = "ByHeight", WW[WW.ByPosNoHeight = 2] = "ByPosNoHeight", WW
    }(Bm || (Bm = {}));
    const qm = .001;
    class Rm {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = WW, this.height = iW, this.flags = OW
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(WW) {
        this.flags = (WW ? 2 : 0) | -3 & this.flags
      }
      setHeight(WW) {
        this.height != WW && (Math.abs(this.height - WW) > qm && (Vm = !0), this.height = WW)
      }
      replace(WW, iW, OW) {
        return Rm.of(OW)
      }
      decomposeLeft(WW, iW) {
        iW.push(this)
      }
      decomposeRight(WW, iW) {
        iW.push(this)
      }
      applyChanges(WW, iW, OW, mW) {
        let EW = this,
          NW = OW.doc;
        for (let PW = mW.length - 1; PW >= 0; PW--) {
          let {
            fromA: LW,
            toA: cW,
            fromB: wW,
            toB: tW
          } = mW[PW], ZW = EW.lineAt(LW, Bm.ByPosNoHeight, OW.setDoc(iW), 0, 0), xW = ZW.to >= cW ? ZW : EW.lineAt(cW, Bm.ByPosNoHeight, OW, 0, 0);
          for (tW += xW.to - cW, cW = xW.to; PW > 0 && ZW.from <= mW[PW - 1].toA;) LW = mW[PW - 1].fromA, wW = mW[PW - 1].fromB, PW--, LW < ZW.from && (ZW = EW.lineAt(LW, Bm.ByPosNoHeight, OW, 0, 0));
          wW += ZW.from - LW, LW = ZW.from;
          let lW = WE.build(OW.setDoc(NW), WW, wW, tW);
          EW = Gm(EW, EW.replace(LW, cW, lW))
        }
        return EW.updateHeight(OW, 0)
      }
      static empty() {
        return new rm(0, 0, 0)
      }
      static of (WW) {
        if (1 == WW.length) return WW[0];
        let iW = 0,
          OW = WW.length,
          mW = 0,
          EW = 0;
        for (;;)
          if (iW == OW)
            if (mW > 2 * EW) {
              let EW = WW[iW - 1];
              EW.break ? WW.splice(--iW, 1, EW.left, null, EW.right) : WW.splice(--iW, 1, EW.left, EW.right), OW += 1 + EW.break, mW -= EW.size
            } else {
              if (!(EW > 2 * mW)) break;
              {
                let iW = WW[OW];
                iW.break ? WW.splice(OW, 1, iW.left, null, iW.right) : WW.splice(OW, 1, iW.left, iW.right), OW += 2 + iW.break, EW -= iW.size
              }
            }
        else if (mW < EW) {
          let OW = WW[iW++];
          OW && (mW += OW.size)
        } else {
          let iW = WW[--OW];
          iW && (EW += iW.size)
        }
        let NW = 0;
        return null == WW[iW - 1] ? (NW = 1, iW--) : null == WW[iW] && (NW = 1, OW++), new Fm(Rm.of(WW.slice(0, iW)), NW, Rm.of(WW.slice(OW)))
      }
    }

    function Gm(WW, iW) {
      return WW == iW ? WW : (WW.constructor != iW.constructor && (Vm = !0), iW)
    }
    Rm.prototype.size = 1;
    const Im = oW.replace({});
    class am extends Rm {
      constructor(WW, iW, OW) {
        super(WW, iW), this.deco = OW, this.spaceAbove = 0
      }
      mainBlock(WW, iW) {
        return new Xm(iW, this.length, WW + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(WW, iW, OW, mW) {
        return this.spaceAbove && WW < OW + this.spaceAbove ? new Xm(mW, 0, OW, this.spaceAbove, Im) : this.mainBlock(OW, mW)
      }
      lineAt(WW, iW, OW, mW, EW) {
        let NW = this.mainBlock(mW, EW);
        return this.spaceAbove ? this.blockAt(0, OW, mW, EW).join(NW) : NW
      }
      forEachLine(WW, iW, OW, mW, EW, NW) {
        WW <= EW + this.length && iW >= EW && NW(this.lineAt(0, Bm.ByPos, OW, mW, EW))
      }
      setMeasuredHeight(WW) {
        let iW = WW.heights[WW.index++];
        iW < 0 ? (this.spaceAbove = -iW, iW = WW.heights[WW.index++]) : this.spaceAbove = 0, this.setHeight(iW)
      }
      updateHeight(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 3 ? arguments[3] : void 0;
        return OW && OW.from <= iW && OW.more && this.setMeasuredHeight(OW), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class rm extends am {
      constructor(WW, iW, OW) {
        super(WW, iW, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = OW
      }
      mainBlock(WW, iW) {
        return new Xm(iW, this.length, WW + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(WW, iW, OW) {
        let mW = OW[0];
        return 1 == OW.length && (mW instanceof rm || mW instanceof zm && 4 & mW.flags) && Math.abs(this.length - mW.length) < 10 ? (mW instanceof zm ? mW = new rm(mW.length, this.height, this.spaceAbove) : mW.height = this.height, this.outdated || (mW.outdated = !1), mW) : Rm.of(OW)
      }
      updateHeight(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = arguments.length > 3 ? arguments[3] : void 0;
        return mW && mW.from <= iW && mW.more ? this.setMeasuredHeight(mW) : (OW || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, WW.heightForLine(this.length - this.collapsed)) + this.breaks * WW.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class zm extends Rm {
      constructor(WW) {
        super(WW, 0)
      }
      heightMetrics(WW, iW) {
        let OW, mW = WW.doc.lineAt(iW).number,
          EW = WW.doc.lineAt(iW + this.length).number,
          NW = EW - mW + 1,
          PW = 0;
        if (WW.lineWrapping) {
          let iW = Math.min(this.height, WW.lineHeight * NW);
          OW = iW / NW, this.length > NW + 1 && (PW = (this.height - iW) / (this.length - NW - 1))
        } else OW = this.height / NW;
        return {
          firstLine: mW,
          lastLine: EW,
          perLine: OW,
          perChar: PW
        }
      }
      blockAt(WW, iW, OW, mW) {
        let {
          firstLine: EW,
          lastLine: NW,
          perLine: PW,
          perChar: LW
        } = this.heightMetrics(iW, mW);
        if (iW.lineWrapping) {
          let EW = mW + (WW < iW.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (WW - OW) / this.height)) * this.length)),
            NW = iW.doc.lineAt(EW),
            cW = PW + NW.length * LW,
            wW = Math.max(OW, WW - cW / 2);
          return new Xm(NW.from, NW.length, wW, cW, 0)
        } {
          let mW = Math.max(0, Math.min(NW - EW, Math.floor((WW - OW) / PW))),
            {
              from: LW,
              length: cW
            } = iW.doc.line(EW + mW);
          return new Xm(LW, cW, OW + PW * mW, PW, 0)
        }
      }
      lineAt(WW, iW, OW, mW, EW) {
        if (iW == Bm.ByHeight) return this.blockAt(WW, OW, mW, EW);
        if (iW == Bm.ByPosNoHeight) {
          let {
            from: iW,
            to: mW
          } = OW.doc.lineAt(WW);
          return new Xm(iW, mW - iW, 0, 0, 0)
        }
        let {
          firstLine: NW,
          perLine: PW,
          perChar: LW
        } = this.heightMetrics(OW, EW), cW = OW.doc.lineAt(WW), wW = PW + cW.length * LW, tW = cW.number - NW, ZW = mW + PW * tW + LW * (cW.from - EW - tW);
        return new Xm(cW.from, cW.length, Math.max(mW, Math.min(ZW, mW + this.height - wW)), wW, 0)
      }
      forEachLine(WW, iW, OW, mW, EW, NW) {
        WW = Math.max(WW, EW), iW = Math.min(iW, EW + this.length);
        let {
          firstLine: PW,
          perLine: LW,
          perChar: cW
        } = this.heightMetrics(OW, EW);
        for (let wW = WW, tW = mW; wW <= iW;) {
          let iW = OW.doc.lineAt(wW);
          if (wW == WW) {
            let OW = iW.number - PW;
            tW += LW * OW + cW * (WW - EW - OW)
          }
          let mW = LW + cW * iW.length;
          NW(new Xm(iW.from, iW.length, tW, mW, 0)), tW += mW, wW = iW.to + 1
        }
      }
      replace(WW, iW, OW) {
        let mW = this.length - iW;
        if (mW > 0) {
          let WW = OW[OW.length - 1];
          WW instanceof zm ? OW[OW.length - 1] = new zm(WW.length + mW) : OW.push(null, new zm(mW - 1))
        }
        if (WW > 0) {
          let iW = OW[0];
          iW instanceof zm ? OW[0] = new zm(WW + iW.length) : OW.unshift(new zm(WW - 1), null)
        }
        return Rm.of(OW)
      }
      decomposeLeft(WW, iW) {
        iW.push(new zm(WW - 1), null)
      }
      decomposeRight(WW, iW) {
        iW.push(null, new zm(this.length - WW - 1))
      }
      updateHeight(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = arguments.length > 3 ? arguments[3] : void 0,
          EW = iW + this.length;
        if (mW && mW.from <= iW + this.length && mW.more) {
          let OW = [],
            NW = Math.max(iW, mW.from),
            PW = -1;
          for (mW.from > iW && OW.push(new zm(mW.from - iW - 1).updateHeight(WW, iW)); NW <= EW && mW.more;) {
            let iW = WW.doc.lineAt(NW).length;
            OW.length && OW.push(null);
            let EW = mW.heights[mW.index++],
              LW = 0;
            EW < 0 && (LW = -EW, EW = mW.heights[mW.index++]), -1 == PW ? PW = EW : Math.abs(EW - PW) >= qm && (PW = -2);
            let cW = new rm(iW, EW, LW);
            cW.outdated = !1, OW.push(cW), NW += iW + 1
          }
          NW <= EW && OW.push(null, new zm(EW - NW).updateHeight(WW, NW));
          let LW = Rm.of(OW);
          return (PW < 0 || Math.abs(LW.height - this.height) >= qm || Math.abs(PW - this.heightMetrics(WW, iW).perLine) >= qm) && (Vm = !0), Gm(this, LW)
        }
        return (OW || this.outdated) && (this.setHeight(WW.heightForGap(iW, iW + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class Fm extends Rm {
      constructor(WW, iW, OW) {
        super(WW.length + iW + OW.length, WW.height + OW.height, iW | (WW.outdated || OW.outdated ? 2 : 0)), this.left = WW, this.right = OW, this.size = WW.size + OW.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(WW, iW, OW, mW) {
        let EW = OW + this.left.height;
        return WW < EW ? this.left.blockAt(WW, iW, OW, mW) : this.right.blockAt(WW, iW, EW, mW + this.left.length + this.break)
      }
      lineAt(WW, iW, OW, mW, EW) {
        let NW = mW + this.left.height,
          PW = EW + this.left.length + this.break,
          LW = iW == Bm.ByHeight ? WW < NW : WW < PW,
          cW = LW ? this.left.lineAt(WW, iW, OW, mW, EW) : this.right.lineAt(WW, iW, OW, NW, PW);
        if (this.break || (LW ? cW.to < PW : cW.from > PW)) return cW;
        let wW = iW == Bm.ByPosNoHeight ? Bm.ByPosNoHeight : Bm.ByPos;
        return LW ? cW.join(this.right.lineAt(PW, wW, OW, NW, PW)) : this.left.lineAt(PW, wW, OW, mW, EW).join(cW)
      }
      forEachLine(WW, iW, OW, mW, EW, NW) {
        let PW = mW + this.left.height,
          LW = EW + this.left.length + this.break;
        if (this.break) WW < LW && this.left.forEachLine(WW, iW, OW, mW, EW, NW), iW >= LW && this.right.forEachLine(WW, iW, OW, PW, LW, NW);
        else {
          let cW = this.lineAt(LW, Bm.ByPos, OW, mW, EW);
          WW < cW.from && this.left.forEachLine(WW, cW.from - 1, OW, mW, EW, NW), cW.to >= WW && cW.from <= iW && NW(cW), iW > cW.to && this.right.forEachLine(cW.to + 1, iW, OW, PW, LW, NW)
        }
      }
      replace(WW, iW, OW) {
        let mW = this.left.length + this.break;
        if (iW < mW) return this.balanced(this.left.replace(WW, iW, OW), this.right);
        if (WW > this.left.length) return this.balanced(this.left, this.right.replace(WW - mW, iW - mW, OW));
        let EW = [];
        WW > 0 && this.decomposeLeft(WW, EW);
        let NW = EW.length;
        for (let PW of OW) EW.push(PW);
        if (WW > 0 && Qm(EW, NW - 1), iW < this.length) {
          let WW = EW.length;
          this.decomposeRight(iW, EW), Qm(EW, WW)
        }
        return Rm.of(EW)
      }
      decomposeLeft(WW, iW) {
        let OW = this.left.length;
        if (WW <= OW) return this.left.decomposeLeft(WW, iW);
        iW.push(this.left), this.break && (OW++, WW >= OW && iW.push(null)), WW > OW && this.right.decomposeLeft(WW - OW, iW)
      }
      decomposeRight(WW, iW) {
        let OW = this.left.length,
          mW = OW + this.break;
        if (WW >= mW) return this.right.decomposeRight(WW - mW, iW);
        WW < OW && this.left.decomposeRight(WW, iW), this.break && WW < mW && iW.push(null), iW.push(this.right)
      }
      balanced(WW, iW) {
        return WW.size > 2 * iW.size || iW.size > 2 * WW.size ? Rm.of(this.break ? [WW, null, iW] : [WW, iW]) : (this.left = Gm(this.left, WW), this.right = Gm(this.right, iW), this.setHeight(WW.height + iW.height), this.outdated = WW.outdated || iW.outdated, this.size = WW.size + iW.size, this.length = WW.length + this.break+iW.length, this)
      }
      updateHeight(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: EW,
            right: NW
          } = this,
          PW = iW + EW.length + this.break,
          LW = null;
        return mW && mW.from <= iW + EW.length && mW.more ? LW = EW = EW.updateHeight(WW, iW, OW, mW) : EW.updateHeight(WW, iW, OW), mW && mW.from <= PW + NW.length && mW.more ? LW = NW = NW.updateHeight(WW, PW, OW, mW) : NW.updateHeight(WW, PW, OW), LW ? this.balanced(EW, NW) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function Qm(WW, iW) {
      let OW, mW;
      null == WW[iW] && (OW = WW[iW - 1]) instanceof zm && (mW = WW[iW + 1]) instanceof zm && WW.splice(iW - 1, 3, new zm(OW.length + 1 + mW.length))
    }
    class WE {
      constructor(WW, iW) {
        this.pos = WW, this.oracle = iW, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = WW
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(WW, iW) {
        if (this.lineStart > -1) {
          let WW = Math.min(iW, this.lineEnd),
            OW = this.nodes[this.nodes.length - 1];
          OW instanceof rm ? OW.length += WW - this.pos : (WW > this.pos || !this.isCovered) && this.nodes.push(new rm(WW - this.pos, -1, 0)), this.writtenTo = WW, iW > WW && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = iW
      }
      point(WW, iW, OW) {
        if (WW < iW || OW.heightRelevant) {
          let mW = OW.widget ? OW.widget.estimatedHeight : 0,
            EW = OW.widget ? OW.widget.lineBreaks : 0;
          mW < 0 && (mW = this.oracle.lineHeight);
          let NW = iW - WW;
          OW.block ? this.ViW(new am(NW, mW, OW)) : (NW || EW || mW >= 5) && this.addLineDeco(mW, EW, NW)
        } else iW > WW && this.span(WW, iW);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: WW,
          to: iW
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = WW, this.lineEnd = iW, this.writtenTo < WW && ((this.writtenTo < WW - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, WW - 1)), this.nodes.push(null)), this.pos > WW && this.nodes.push(new rm(this.pos - WW, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(WW, iW) {
        let OW = new zm(iW - WW);
        return this.oracle.doc.lineAt(WW).to == iW && (OW.flags |= 4), OW
      }
      ensureLine() {
        this.enterLine();
        let WW = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (WW instanceof rm) return WW;
        let iW = new rm(0, -1, 0);
        return this.nodes.push(iW), iW
      }
      ViW(WW) {
        this.enterLine();
        let iW = WW.deco;
        iW && iW.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(WW), this.writtenTo = this.pos = this.pos + WW.length, iW && iW.endSide > 0 && (this.covering = WW)
      }
      addLineDeco(WW, iW, OW) {
        let mW = this.ensureLine();
        mW.length += OW, mW.collapsed += OW, mW.widgetHeight = Math.max(mW.widgetHeight, WW), mW.breaks += iW, this.writtenTo = this.pos = this.pos + OW
      }
      finish(WW) {
        let iW = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || iW instanceof rm || this.isCovered ? (this.writtenTo < this.pos || null == iW) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new rm(0, -1, 0));
        let OW = WW;
        for (let mW of this.nodes) mW instanceof rm && mW.updateHeight(this.oracle, OW), OW += mW ? mW.length : 1;
        return this.nodes
      }
      static build(WW, iW, OW, EW) {
        let NW = new WE(OW, WW);
        return mW.C.spans(iW, OW, EW, NW, 0), NW.finish(OW)
      }
    }
    class iE {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(WW, iW, OW, mW) {
        (WW < iW || OW && OW.heightRelevant || mW && mW.heightRelevant) && DW(WW, iW, this.changes, 5)
      }
    }

    function OE(WW, iW) {
      let OW = WW.getBoundingClientRect(),
        mW = WW.ownerDocument,
        EW = mW.defaultView || window,
        NW = Math.max(0, OW.left),
        PW = Math.min(EW.innerWidth, OW.right),
        LW = Math.max(0, OW.top),
        cW = Math.min(EW.innerHeight, OW.bottom);
      for (let wW = WW.parentNode; wW && wW != mW.body;)
        if (1 == wW.nodeType) {
          let iW = wW,
            OW = window.getComputedStyle(iW);
          if ((iW.scrollHeight > iW.clientHeight || iW.scrollWidth > iW.clientWidth) && "visible" != OW.overflow) {
            let OW = iW.getBoundingClientRect();
            NW = Math.max(NW, OW.left), PW = Math.min(PW, OW.right), LW = Math.max(LW, OW.top), cW = Math.min(wW == WW.parentNode ? EW.innerHeight : cW, OW.bottom)
          }
          wW = "absolute" == OW.position || "fixed" == OW.position ? iW.offsetParent : iW.parentNode
        } else {
          if (11 != wW.nodeType) break;
          wW = wW.host
        } return {
        left: NW - OW.left,
        right: Math.max(NW, PW) - OW.left,
        top: LW - (OW.top + iW),
        bottom: Math.max(LW, cW) - (OW.top + iW)
      }
    }

    function mE(WW, iW) {
      let OW = WW.getBoundingClientRect();
      return {
        left: 0,
        right: OW.right - OW.left,
        top: iW,
        bottom: OW.bottom - (OW.top + iW)
      }
    }
    class EE {
      constructor(WW, iW, OW, mW) {
        this.from = WW, this.to = iW, this.size = OW, this.displaySize = mW
      }
      static same(WW, iW) {
        if (WW.length != iW.length) return !1;
        for (let OW = 0; OW < WW.length; OW++) {
          let mW = WW[OW],
            EW = iW[OW];
          if (mW.from != EW.from || mW.to != EW.to || mW.size != EW.size) return !1
        }
        return !0
      }
      draw(WW, iW) {
        return oW.replace({
          widget: new NE(this.displaySize * (iW ? WW.scaleY : WW.scaleX), iW)
        }).range(this.from, this.to)
      }
    }
    class NE extends nW {
      constructor(WW, iW) {
        super(), this.size = WW, this.vertical = iW
      }
      eq(WW) {
        return WW.size == this.size && WW.vertical == this.vertical
      }
      toDOM() {
        let WW = document.createElement("div");
        return this.vertical ? WW.style.height = this.size + "px" : (WW.style.width = this.size + "px", WW.style.height = "2px", WW.style.display = "inline-block"), WW
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class PE {
      constructor(WW, iW) {
        this.view = WW, this.state = iW, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = tE, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = wi.LTR, this.jWW = [], this.mustEnforceCursorAssoc = !1;
        let OW = iW.facet(iO).some((WW => "function" != typeof WW && "cm-lineWrapping" == WW.class));
        this.heightOracle = new fm(OW), this.stateDeco = ZE(iW), this.heightMap = Rm.empty().applyChanges(this.stateDeco, mW.M.empty, this.heightOracle.setDoc(iW.doc), [new ZO(0, 0, 0, iW.doc.length)]);
        for (let mW = 0; mW < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); mW++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = oW.set(this.lineGaps.map((WW => WW.draw(this, !1)))), this.scrollParent = WW.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let WW = [this.viewport],
          {
            main: iW
          } = this.state.selection;
        for (let OW = 0; OW <= 1; OW++) {
          let mW = OW ? iW.head : iW.anchor;
          if (!WW.some((WW => {
              let {
                from: iW,
                to: OW
              } = WW;
              return mW >= iW && mW <= OW
            }))) {
            let {
              from: iW,
              to: OW
            } = this.lineBlockAt(mW);
            WW.push(new LE(iW, OW))
          }
        }
        return this.viewports = WW.sort(((WW, iW) => WW.from - iW.from)), this.updateScaler()
      }
      updateScaler() {
        let WW = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? tE : new xE(this.heightOracle, this.heightMap, this.viewports), WW.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (WW => {
          this.viewportLines.push(lE(WW, this.scaler))
        }))
      }
      update(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = WW.state;
        let OW = this.stateDeco;
        this.stateDeco = ZE(this.state);
        let EW = WW.changedRanges,
          NW = ZO.extendWithRanges(EW, function(WW, iW, OW) {
            let EW = new iE;
            return mW.C.compare(WW, iW, OW, EW, 0), EW.changes
          }(OW, this.stateDeco, WW ? WW.changes : mW.ChangeSet.empty(this.state.doc.length))),
          PW = this.heightMap.height,
          LW = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        pm(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, WW.startState.doc, this.heightOracle.setDoc(this.state.doc), NW), (this.heightMap.height != PW || Vm) && (WW.flags |= 2), LW ? (this.scrollAnchorPos = WW.changes.mapPos(LW.from, -1), this.scrollAnchorHeight = LW.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = PW);
        let cW = NW.length ? this.mapViewport(this.viewport, WW.changes) : this.viewport;
        (iW && (iW.range.head < cW.from || iW.range.head > cW.to) || !this.viewportIsAppropriate(cW)) && (cW = this.getViewport(0, iW));
        let wW = cW.from != this.viewport.from || cW.to != this.viewport.to;
        this.viewport = cW, WW.flags |= this.updateForViewport(), (wW || !WW.changes.empty || 2 & WW.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, WW.changes))), WW.flags |= this.computeVisibleRanges(WW.changes), iW && (this.scrollTarget = iW), !this.mustEnforceCursorAssoc && (WW.selectionSet || WW.focusChanged) && WW.view.lineWrapping && WW.state.selection.main.empty && WW.state.selection.main.assoc && !WW.state.facet(Xi) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: WW
        } = this, iW = WW.contentDOM, OW = window.getComputedStyle(iW), EW = this.heightOracle, NW = OW.whiteSpace;
        this.defaultTextDirection = "rtl" == OW.direction ? wi.RTL : wi.LTR;
        let PW = this.heightOracle.mustRefreshForWrapping(NW) || "refresh" === this.mustMeasureContent,
          LW = iW.getBoundingClientRect(),
          cW = PW || this.mustMeasureContent || this.contentDOMHeight != LW.height;
        this.contentDOMHeight = LW.height, this.mustMeasureContent = !1;
        let wW = 0,
          tW = 0;
        if (LW.width && LW.height) {
          let {
            scaleX: WW,
            scaleY: OW
          } = zW(iW, LW);
          (WW > .005 && Math.abs(this.scaleX - WW) > .005 || OW > .005 && Math.abs(this.scaleY - OW) > .005) && (this.scaleX = WW, this.scaleY = OW, wW |= 16, PW = cW = !0)
        }
        let ZW = (parseInt(OW.paddingTop) || 0) * this.scaleY,
          xW = (parseInt(OW.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == ZW && this.paddingBottom == xW || (this.paddingTop = ZW, this.paddingBottom = xW, wW |= 18), this.editorWidth != WW.scrollDOM.clientWidth && (EW.lineWrapping && (cW = !0), this.editorWidth = WW.scrollDOM.clientWidth, wW |= 16);
        let lW = FW(this.view.contentDOM, !1).y;
        lW != this.scrollParent && (this.scrollParent = lW, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let AW = this.getScrollOffset();
        this.scrollOffset != AW && (this.scrollAnchorHeight = -1, this.scrollOffset = AW), this.scrolledToBottom = Ni(this.scrollParent || WW.win);
        let bW = (this.printing ? mE : OE)(iW, this.paddingTop),
          jW = bW.top - this.pixelViewport.top,
          UW = bW.bottom - this.pixelViewport.bottom;
        this.pixelViewport = bW;
        let kW = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (kW != this.inView && (this.inView = kW, kW && (cW = !0)), !this.inView && !this.scrollTarget && ! function(WW) {
            let iW = WW.getBoundingClientRect(),
              OW = WW.ownerDocument.defaultView || window;
            return iW.left < OW.innerWidth && iW.right > 0 && iW.top < OW.innerHeight && iW.bottom > 0
          }(WW.dom)) return 0;
        let sW = LW.width;
        if (this.contentDOMWidth == sW && this.editorHeight == WW.scrollDOM.clientHeight || (this.contentDOMWidth = LW.width, this.editorHeight = WW.scrollDOM.clientHeight, wW |= 16), cW) {
          let iW = WW.docView.measureVisibleLineHeights(this.viewport);
          if (EW.mustRefreshForHeights(iW) && (PW = !0), PW || EW.lineWrapping && Math.abs(sW - this.contentDOMWidth) > EW.charWidth) {
            let {
              lineHeight: OW,
              charWidth: mW,
              textHeight: LW
            } = WW.docView.measureTextSize();
            PW = OW > 0 && EW.refresh(NW, OW, mW, LW, Math.max(5, sW / mW), iW), PW && (WW.docView.minWidth = 0, wW |= 16)
          }
          jW > 0 && UW > 0 ? tW = Math.max(jW, UW) : jW < 0 && UW < 0 && (tW = Math.min(jW, UW)), pm();
          for (let OW of this.viewports) {
            let NW = OW.from == this.viewport.from ? iW : WW.docView.measureVisibleLineHeights(OW);
            this.heightMap = (PW ? Rm.empty().applyChanges(this.stateDeco, mW.M.empty, this.heightOracle, [new ZO(0, 0, 0, WW.state.doc.length)]) : this.heightMap).updateHeight(EW, 0, PW, new Cm(OW.from, NW))
          }
          Vm && (wW |= 2)
        }
        let MW = !this.viewportIsAppropriate(this.viewport, tW) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return MW && (2 & wW && (wW |= this.updateScaler()), this.viewport = this.getViewport(tW, this.scrollTarget), wW |= this.updateForViewport()), (2 & wW || MW) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(PW ? [] : this.lineGaps, WW)), wW |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, WW.docView.enforceCursorAssoc()), wW
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(WW, iW) {
        let OW = .5 - Math.max(-.5, Math.min(.5, WW / 1e3 / 2)),
          mW = this.heightMap,
          EW = this.heightOracle,
          {
            visibleTop: NW,
            visibleBottom: PW
          } = this,
          LW = new LE(mW.lineAt(NW - 1e3 * OW, Bm.ByHeight, EW, 0, 0).from, mW.lineAt(PW + 1e3 * (1 - OW), Bm.ByHeight, EW, 0, 0).to);
        if (iW) {
          let {
            head: WW
          } = iW.range;
          if (WW < LW.from || WW > LW.to) {
            let OW, NW = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              PW = mW.lineAt(WW, Bm.ByPos, EW, 0, 0);
            OW = "center" == iW.y ? (PW.top + PW.bottom) / 2 - NW / 2 : "start" == iW.y || "nearest" == iW.y && WW < LW.from ? PW.top : PW.bottom - NW, LW = new LE(mW.lineAt(OW - 500, Bm.ByHeight, EW, 0, 0).from, mW.lineAt(OW + NW + 500, Bm.ByHeight, EW, 0, 0).to)
          }
        }
        return LW
      }
      mapViewport(WW, iW) {
        let OW = iW.mapPos(WW.from, -1),
          mW = iW.mapPos(WW.to, 1);
        return new LE(this.heightMap.lineAt(OW, Bm.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(mW, Bm.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(WW) {
        let {
          from: iW,
          to: OW
        } = WW, mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: EW
        } = this.heightMap.lineAt(iW, Bm.ByPos, this.heightOracle, 0, 0), {
          bottom: NW
        } = this.heightMap.lineAt(OW, Bm.ByPos, this.heightOracle, 0, 0), {
          visibleTop: PW,
          visibleBottom: LW
        } = this;
        return (0 == iW || EW <= PW - Math.max(10, Math.min(-mW, 250))) && (OW == this.state.doc.length || NW >= LW + Math.max(10, Math.min(mW, 250))) && EW > PW - 2e3 && NW < LW + 2e3
      }
      mapLineGaps(WW, iW) {
        if (!WW.length || iW.empty) return WW;
        let OW = [];
        for (let mW of WW) iW.touchesRange(mW.from, mW.to) || OW.push(new EE(iW.mapPos(mW.from), iW.mapPos(mW.to), mW.size, mW.displaySize));
        return OW
      }
      ensureLineGaps(WW, iW) {
        let OW = this.heightOracle.lineWrapping,
          EW = OW ? 1e4 : 2e3,
          NW = EW >> 1,
          PW = EW << 1;
        if (this.defaultTextDirection != wi.LTR && !OW) return [];
        let LW = [],
          cW = (EW, PW, wW, tW) => {
            if (PW - EW < NW) return;
            let ZW = this.state.selection.main,
              xW = [ZW.from];
            ZW.empty || xW.push(ZW.to);
            for (let WW of xW)
              if (WW > EW && WW < PW) return cW(EW, WW - 10, wW, tW), void cW(WW + 10, PW, wW, tW);
            let lW = function(WW, iW) {
              for (let OW of WW)
                if (iW(OW)) return OW;
              return
            }(WW, (WW => WW.from >= wW.from && WW.to <= wW.to && Math.abs(WW.from - EW) < NW && Math.abs(WW.to - PW) < NW && !xW.some((iW => WW.from < iW && WW.to > iW))));
            if (!lW) {
              if (PW < wW.to && iW && OW && iW.jWW.some((WW => WW.from <= PW && WW.to >= PW))) {
                let WW = iW.moveToLineBoundary(mW.l.cursor(PW), !1, !0).head;
                WW > EW && (PW = WW)
              }
              let WW = this.gapSize(wW, EW, PW, tW);
              lW = new EE(EW, PW, WW, OW || WW < 2e6 ? WW : 2e6)
            }
            LW.push(lW)
          },
          wW = iW => {
            if (iW.length < PW || iW.type != uW.Text) return;
            let NW = function(WW, iW, OW) {
              let EW = [],
                NW = WW,
                PW = 0;
              mW.C.spans(OW, WW, iW, {
                span() {},
                point(WW, iW) {
                  WW > NW && (EW.push({
                    from: NW,
                    to: WW
                  }), PW += WW - NW), NW = iW
                }
              }, 20), NW < iW && (EW.push({
                from: NW,
                to: iW
              }), PW += iW - NW);
              return {
                total: PW,
                kj: EW
              }
            }(iW.from, iW.to, this.stateDeco);
            if (NW.total < PW) return;
            let LW, wW, tW = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (OW) {
              let WW, OW, mW = EW / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != tW) {
                let EW = wE(NW, tW),
                  PW = ((this.visibleBottom - this.visibleTop) / 2 + mW) / iW.height;
                WW = EW - PW, OW = EW + PW
              } else WW = (this.visibleTop - iW.top - mW) / iW.height, OW = (this.visibleBottom - iW.top + mW) / iW.height;
              LW = cE(NW, WW), wW = cE(NW, OW)
            } else {
              let OW = NW.total * this.heightOracle.charWidth,
                mW = EW * this.heightOracle.charWidth,
                PW = 0;
              if (OW > 2e6)
                for (let EW of WW) EW.from >= iW.from && EW.from < iW.to && EW.size != EW.displaySize && EW.from * this.heightOracle.charWidth + PW < this.pixelViewport.left && (PW = EW.size - EW.displaySize);
              let cW, ZW, xW = this.pixelViewport.left + PW,
                lW = this.pixelViewport.right + PW;
              if (null != tW) {
                let WW = wE(NW, tW),
                  iW = ((lW - xW) / 2 + mW) / OW;
                cW = WW - iW, ZW = WW + iW
              } else cW = (xW - mW) / OW, ZW = (lW + mW) / OW;
              LW = cE(NW, cW), wW = cE(NW, ZW)
            }
            LW > iW.from && cW(iW.from, LW, iW, NW), wW < iW.to && cW(wW, iW.to, iW, NW)
          };
        for (let mW of this.viewportLines) Array.isArray(mW.type) ? mW.type.forEach(wW) : wW(mW);
        return LW
      }
      gapSize(WW, iW, OW, mW) {
        let EW = wE(mW, OW) - wE(mW, iW);
        return this.heightOracle.lineWrapping ? WW.height * EW : mW.total * this.heightOracle.charWidth * EW
      }
      updateLineGaps(WW) {
        EE.same(WW, this.lineGaps) || (this.lineGaps = WW, this.lineGapDeco = oW.set(WW.map((WW => WW.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(WW) {
        let iW = this.stateDeco;
        this.lineGaps.length && (iW = iW.concat(this.lineGapDeco));
        let OW = [];
        mW.C.spans(iW, this.viewport.from, this.viewport.to, {
          span(WW, iW) {
            OW.push({
              from: WW,
              to: iW
            })
          },
          point() {}
        }, 20);
        let EW = 0;
        if (OW.length != this.jWW.length) EW = 12;
        else
          for (let mW = 0; mW < OW.length && !(8 & EW); mW++) {
            let iW = this.jWW[mW],
              NW = OW[mW];
            iW.from == NW.from && iW.to == NW.to || (EW |= 4, WW && WW.mapPos(iW.from, -1) == NW.from && WW.mapPos(iW.to, 1) == NW.to || (EW |= 8))
          }
        return this.jWW = OW, EW
      }
      lineBlockAt(WW) {
        return WW >= this.viewport.from && WW <= this.viewport.to && this.viewportLines.find((iW => iW.from <= WW && iW.to >= WW)) || lE(this.heightMap.lineAt(WW, Bm.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(WW) {
        return WW >= this.viewportLines[0].top && WW <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((iW => iW.top <= WW && iW.bottom >= WW)) || lE(this.heightMap.lineAt(this.scaler.fromDOM(WW), Bm.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(WW) {
        let iW = this.lineBlockAtHeight(WW + 8);
        return iW.from >= this.viewport.from || this.viewportLines[0].top - WW > 200 ? iW : this.viewportLines[0]
      }
      elementAtHeight(WW) {
        return lE(this.heightMap.blockAt(this.scaler.fromDOM(WW), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class LE {
      constructor(WW, iW) {
        this.from = WW, this.to = iW
      }
    }

    function cE(WW, iW) {
      let {
        total: OW,
        kj: mW
      } = WW;
      if (iW <= 0) return mW[0].from;
      if (iW >= 1) return mW[mW.length - 1].to;
      let EW = Math.floor(OW * iW);
      for (let NW = 0;; NW++) {
        let {
          from: WW,
          to: iW
        } = mW[NW], OW = iW - WW;
        if (EW <= OW) return WW + EW;
        EW -= OW
      }
    }

    function wE(WW, iW) {
      let OW = 0;
      for (let {
          from: mW,
          to: EW
        }
        of WW.kj) {
        if (iW <= EW) {
          OW += iW - mW;
          break
        }
        OW += EW - mW
      }
      return OW / WW.total
    }
    const tE = {
      toDOM: WW => WW,
      fromDOM: WW => WW,
      scale: 1,
      eq(WW) {
        return WW == this
      }
    };

    function ZE(WW) {
      let iW = WW.facet(OO).filter((WW => "function" != typeof WW)),
        OW = WW.facet(EO).filter((WW => "function" != typeof WW));
      return OW.length && iW.push(mW.C.join(OW)), iW
    }
    class xE {
      constructor(WW, iW, OW) {
        let mW = 0,
          EW = 0,
          NW = 0;
        this.viewports = OW.map((OW => {
          let {
            from: EW,
            to: NW
          } = OW, PW = iW.lineAt(EW, Bm.ByPos, WW, 0, 0).top, LW = iW.lineAt(NW, Bm.ByPos, WW, 0, 0).bottom;
          return mW += LW - PW, {
            from: EW,
            to: NW,
            top: PW,
            bottom: LW,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - mW) / (iW.height - mW);
        for (let PW of this.viewports) PW.domTop = NW + (PW.top - EW) * this.scale, NW = PW.domBottom = PW.domTop + (PW.bottom - PW.top), EW = PW.bottom
      }
      toDOM(WW) {
        for (let iW = 0, OW = 0, mW = 0;; iW++) {
          let EW = iW < this.viewports.length ? this.viewports[iW] : null;
          if (!EW || WW < EW.top) return mW + (WW - OW) * this.scale;
          if (WW <= EW.bottom) return EW.domTop + (WW - EW.top);
          OW = EW.bottom, mW = EW.domBottom
        }
      }
      fromDOM(WW) {
        for (let iW = 0, OW = 0, mW = 0;; iW++) {
          let EW = iW < this.viewports.length ? this.viewports[iW] : null;
          if (!EW || WW < EW.domTop) return OW + (WW - mW) / this.scale;
          if (WW <= EW.domBottom) return EW.top + (WW - EW.domTop);
          OW = EW.bottom, mW = EW.domBottom
        }
      }
      eq(WW) {
        return WW instanceof xE && (this.scale == WW.scale && this.viewports.length == WW.viewports.length && this.viewports.every(((iW, OW) => iW.from == WW.viewports[OW].from && iW.to == WW.viewports[OW].to)))
      }
    }

    function lE(WW, iW) {
      if (1 == iW.scale) return WW;
      let OW = iW.toDOM(WW.top),
        mW = iW.toDOM(WW.bottom);
      return new Xm(WW.from, WW.length, OW, mW - OW, Array.isArray(WW._content) ? WW._content.map((WW => lE(WW, iW))) : WW._content)
    }
    const AE = mW.p.define({
        combine: WW => WW.join(" ")
      }),
      bE = mW.p.define({
        combine: WW => WW.indexOf(!0) > -1
      }),
      jE = EW.c.newName(),
      UE = EW.c.newName(),
      kE = EW.c.newName(),
      sE = {
        "&light": "." + UE,
        "&dark": "." + kE
      };

    function ME(WW, iW, OW) {
      return new EW.c(iW, {
        finish: iW => /&/.test(iW) ? iW.replace(/&\w*/, (iW => {
          if ("&" == iW) return WW;
          if (!OW || !OW[iW]) throw new RangeError(`Unsupported selector: ${iW}`);
          return OW[iW]
        })) : WW + " " + iW
      })
    }
    const KE = ME("." + jE, {
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
      }, sE),
      SE = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      YE = YW.ie && YW.ie_version <= 11;
    class yE {
      constructor(WW) {
        this.view = WW, this.active = !1, this.editContext = null, this.selectionRange = new QW, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = WW.contentDOM, this.observer = new MutationObserver((iW => {
          for (let WW of iW) this.queue.push(WW);
          (YW.ie && YW.ie_version <= 11 || YW.ios && WW.composing) && iW.some((WW => "childList" == WW.type && WW.removedNodes.length || "characterData" == WW.type && WW.oldValue.length > WW.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !YW.android || !1 === WW.constructor.EDIT_CONTEXT || YW.chrome && YW.chrome_version < 126 || (this.editContext = new hE(WW), WW.state.facet(ai) && (WW.contentDOM.editContext = this.editContext.editContext)), YE && (this.onCharData = WW => {
          this.queue.push({
            target: WW.target,
            type: "characterData",
            oldValue: WW.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.Lk = this.Lk.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var WW;
          (null === (WW = this.view.docView) || void 0 === WW ? void 0 : WW.lastUpdate) < Date.now() - 75 && this.Lk()
        })), this.resizeScroll.observe(WW.scrollDOM)), this.addWindowListeners(this.win = WW.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((WW => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), WW.length > 0 && WW[WW.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((WW => {
          WW.length > 0 && WW[WW.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(WW) {
        this.view.inputState.runHandlers("scroll", WW), this.intersecting && this.view.measure()
      }
      onScroll(WW) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(WW)
      }
      Lk() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(WW) {
        ("change" != WW.type && WW.type || WW.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(WW) {
        if (this.gapIntersection && (WW.length != this.gaps.length || this.gaps.some(((iW, OW) => iW != WW[OW])))) {
          this.gapIntersection.disconnect();
          for (let iW of WW) this.gapIntersection.observe(iW);
          this.gaps = WW
        }
      }
      onSelectionChange(WW) {
        let iW = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: OW
        } = this, mW = this.selectionRange;
        if (OW.state.facet(ai) ? OW.root.activeElement != this.dom : !CW(this.dom, mW)) return;
        let EW = mW.anchorNode && OW.docView.tile.nearest(mW.anchorNode);
        EW && EW.isWidget() && EW.widget.ignoreEvent(WW) ? iW || (this.selectionChanged = !1) : (YW.ie && YW.ie_version <= 11 || YW.android && YW.chrome) && !OW.state.selection.main.empty && mW.focusNode && BW(mW.focusNode, mW.focusOffset, mW.anchorNode, mW.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: WW
        } = this, iW = pW(WW.root);
        if (!iW) return !1;
        let OW = YW.safari && 11 == WW.root.nodeType && WW.root.activeElement == this.dom && function(WW, iW) {
          if (iW.getComposedRanges) {
            let OW = iW.getComposedRanges(WW.root)[0];
            if (OW) return JE(WW, OW)
          }
          let OW = null;

          function mW(WW) {
            WW.preventDefault(), WW.stopImmediatePropagation(), OW = WW.getTargetRanges()[0]
          }
          return WW.contentDOM.addEventListener("beforeinput", mW, !0), WW.dom.ownerDocument.execCommand("indent"), WW.contentDOM.removeEventListener("beforeinput", mW, !0), OW ? JE(WW, OW) : null
        }(this.view, iW) || iW;
        if (!OW || this.selectionRange.eq(OW)) return !1;
        let mW = CW(this.dom, OW);
        return mW && !this.selectionChanged && WW.inputState.lastFocusTime > Date.now() - 200 && WW.inputState.lastTouchTime < Date.now() - 300 && function(WW, iW) {
          let OW = iW.focusNode,
            mW = iW.focusOffset;
          if (!OW || iW.anchorNode != OW || iW.anchorOffset != mW) return !1;
          for (mW = Math.min(mW, IW(OW));;)
            if (mW) {
              if (1 != OW.nodeType) return !1;
              let WW = OW.childNodes[mW - 1];
              "false" == WW.contentEditable ? mW-- : (OW = WW, mW = IW(OW))
            } else {
              if (OW == WW) return !0;
              mW = qW(OW), OW = OW.parentNode
            }
        }(this.dom, OW) ? (this.view.inputState.lastFocusTime = 0, WW.docView.updateSelection(), !1) : (this.selectionRange.setRange(OW), mW && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(WW, iW) {
        this.selectionRange.set(WW.node, WW.offset, iW.node, iW.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let WW = 0,
          iW = null;
        for (let OW = this.dom; OW;)
          if (1 == OW.nodeType) !iW && WW < this.scrollTargets.length && this.scrollTargets[WW] == OW ? WW++ : iW || (iW = this.scrollTargets.slice(0, WW)), iW && iW.push(OW), OW = OW.assignedSlot || OW.parentNode;
          else {
            if (11 != OW.nodeType) break;
            OW = OW.host
          } if (WW < this.scrollTargets.length && !iW && (iW = this.scrollTargets.slice(0, WW)), iW) {
          for (let WW of this.scrollTargets) WW.removeEventListener("scroll", this.onScroll);
          for (let WW of this.scrollTargets = iW) WW.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(WW) {
        if (!this.active) return WW();
        try {
          return this.stop(), WW()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, SE), YE && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), YE && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(WW, iW) {
        var OW;
        if (!this.delayedAndroidKey) {
          let WW = () => {
            let WW = this.delayedAndroidKey;
            if (WW) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = WW.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && WW.force && Ei(this.dom, WW.key, WW.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(WW)
        }
        this.delayedAndroidKey && "Enter" != WW || (this.delayedAndroidKey = {
          key: WW,
          keyCode: iW,
          force: this.lastChange < Date.now() - 50 || !!(null === (OW = this.delayedAndroidKey) || void 0 === OW ? void 0 : OW.force)
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
        for (let WW of this.observer.takeRecords()) this.queue.push(WW);
        return this.queue
      }
      processRecords() {
        let WW = this.pendingRecords();
        WW.length && (this.queue = []);
        let iW = -1,
          OW = -1,
          mW = !1;
        for (let EW of WW) {
          let WW = this.readMutation(EW);
          WW && (WW.typeOver && (mW = !0), -1 == iW ? ({
            from: iW,
            to: OW
          } = WW) : (iW = Math.min(WW.from, iW), OW = Math.max(WW.to, OW)))
        }
        return {
          from: iW,
          to: OW,
          typeOver: mW
        }
      }
      readChange() {
        let {
          from: WW,
          to: iW,
          typeOver: OW
        } = this.processRecords(), mW = this.selectionChanged && CW(this.dom, this.selectionRange);
        if (WW < 0 && !mW) return null;
        WW > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let EW = new Em(this.view, WW, iW, OW);
        return this.view.docView.domChanged = {
          newSel: EW.newSel ? EW.newSel.main : null
        }, EW
      }
      flush() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        WW && this.readSelectionRange();
        let iW = this.readChange();
        if (!iW) return this.view.requestMeasure(), !1;
        let OW = this.view.state,
          mW = Pm(this.view, iW);
        return this.view.state == OW && (iW.domChanged || iW.newSel && !wm(this.view.state.selection, iW.newSel.main)) && this.view.update([]), mW
      }
      readMutation(WW) {
        let iW = this.view.docView.tile.nearest(WW.target);
        if (!iW || iW.isWidget()) return null;
        if (iW.markDirty("attributes" == WW.type), "childList" == WW.type) {
          let OW = TE(iW, WW.previousSibling || WW.target.previousSibling, -1),
            mW = TE(iW, WW.nextSibling || WW.target.nextSibling, 1);
          return {
            from: OW ? iW.posAfter(OW) : iW.posAtStart,
            to: mW ? iW.posBefore(mW) : iW.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == WW.type ? {
          from: iW.posAtStart,
          to: iW.posAtEnd,
          typeOver: WW.target.nodeValue == WW.oldValue
        } : null
      }
      setWindow(WW) {
        WW != this.win && (this.removeWindowListeners(this.win), this.win = WW, this.addWindowListeners(this.win))
      }
      addWindowListeners(WW) {
        WW.addEventListener("resize", this.Lk), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : WW.addEventListener("beforeprint", this.onPrint), WW.addEventListener("scroll", this.onScroll), WW.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(WW) {
        WW.removeEventListener("scroll", this.onScroll), WW.removeEventListener("resize", this.Lk), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : WW.removeEventListener("beforeprint", this.onPrint), WW.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(WW) {
        this.editContext && (this.editContext.update(WW), WW.startState.facet(ai) != WW.state.facet(ai) && (WW.view.contentDOM.editContext = WW.state.facet(ai) ? this.editContext.editContext : null))
      }
      destroy() {
        var WW, iW, OW;
        this.stop(), null === (WW = this.intersection) || void 0 === WW || WW.disconnect(), null === (iW = this.gapIntersection) || void 0 === iW || iW.disconnect(), null === (OW = this.resizeScroll) || void 0 === OW || OW.disconnect();
        for (let mW of this.scrollTargets) mW.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function TE(WW, iW, OW) {
      for (; iW;) {
        let mW = AO.get(iW);
        if (mW && mW.parent == WW) return mW;
        let EW = iW.parentNode;
        iW = EW != WW.dom ? EW : OW > 0 ? iW.nextSibling : iW.previousSibling
      }
      return null
    }

    function JE(WW, iW) {
      let OW = iW.startContainer,
        mW = iW.startOffset,
        EW = iW.endContainer,
        NW = iW.endOffset,
        PW = WW.docView.domAtPos(WW.state.selection.main.anchor, 1);
      return BW(PW.node, PW.offset, EW, NW) && ([OW, mW, EW, NW] = [EW, NW, OW, mW]), {
        anchorNode: OW,
        anchorOffset: mW,
        focusNode: EW,
        focusOffset: NW
      }
    }
    class hE {
      constructor(WW) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(WW.state);
        let iW = this.editContext = new window.EditContext({
          text: WW.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, WW.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(WW.state.selection.main.head)
        });
        this.handlers.textupdate = OW => {
          let EW = WW.state.selection.main,
            {
              anchor: NW,
              head: PW
            } = EW,
            LW = this.toEditorPos(OW.updateRangeStart),
            cW = this.toEditorPos(OW.updateRangeEnd);
          WW.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: OW.updateRangeStart,
            editorBase: LW,
            drifted: !1
          });
          let wW = cW - LW > OW.text.length;
          LW == this.from && NW < this.from ? LW = NW : cW == this.to && NW > this.to && (cW = NW);
          let tW = cm(WW.state.sliceDoc(LW, cW), OW.text, (wW ? EW.from : EW.to) - LW, wW ? "end" : null);
          if (!tW) {
            let iW = mW.l.single(this.toEditorPos(OW.selectionStart), this.toEditorPos(OW.selectionEnd));
            return void(wm(iW, EW) || WW.dispatch({
              selection: iW,
              userEvent: "select"
            }))
          }
          let ZW = {
            from: tW.from + LW,
            to: tW.toA + LW,
            insert: mW.M.of(OW.text.slice(tW.from, tW.toB).split("\n"))
          };
          if ((YW.mac || YW.android) && ZW.from == PW - 1 && /^\. ?$/.test(OW.text) && "off" == WW.contentDOM.getAttribute("autocorrect") && (ZW = {
              from: LW,
              to: cW,
              insert: mW.M.of([OW.text.replace(".", " ")])
            }), this.pendingContextChange = ZW, !WW.state.readOnly) {
            let iW = this.to - this.from + (ZW.to - ZW.from + ZW.insert.length);
            Lm(WW, ZW, mW.l.single(this.toEditorPos(OW.selectionStart, iW), this.toEditorPos(OW.selectionEnd, iW)))
          }
          this.pendingContextChange && (this.revertPending(WW.state), this.setSelection(WW.state)), ZW.from < ZW.to && !ZW.insert.length && WW.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(iW.text.slice(Math.max(0, OW.updateRangeStart - 1), Math.min(iW.text.length, OW.updateRangeStart + 1))) && this.handlers.compositionend(OW)
        }, this.handlers.characterboundsupdate = OW => {
          let mW = [],
            EW = null;
          for (let iW = this.toEditorPos(OW.rangeStart), NW = this.toEditorPos(OW.rangeEnd); iW < NW; iW++) {
            let OW = WW.coordsForChar(iW);
            EW = OW && new DOMRect(OW.left, OW.top, OW.right - OW.left, OW.bottom - OW.top) || EW || new DOMRect, mW.push(EW)
          }
          iW.updateCharacterBounds(OW.rangeStart, mW)
        }, this.handlers.textformatupdate = iW => {
          let OW = [];
          for (let WW of iW.getTextFormats()) {
            let iW = WW.underlineStyle,
              mW = WW.underlineThickness;
            if (!/none/i.test(iW) && !/none/i.test(mW)) {
              let EW = this.toEditorPos(WW.rangeStart),
                NW = this.toEditorPos(WW.rangeEnd);
              if (EW < NW) {
                let WW = `text-decoration: underline ${/^[a-z]/.test(iW)?iW+" ":"Dashed"==iW?"dashed ":"Squiggle"==iW?"wavy ":""}${/thin/i.test(mW)?1:2}px`;
                OW.push(oW.mark({
                  attributes: {
                    style: WW
                  }
                }).range(EW, NW))
              }
            }
          }
          WW.dispatch({
            effects: Gi.of(oW.set(OW))
          })
        }, this.handlers.compositionstart = () => {
          WW.inputState.composing < 0 && (WW.inputState.composing = 0, WW.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (WW.inputState.composing = -1, WW.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: iW
            } = this.composing;
            this.composing = null, iW && this.reset(WW.state)
          }
        };
        for (let OW in this.handlers) iW.addEventListener(OW, this.handlers[OW]);
        this.measureReq = {
          read: WW => {
            this.editContext.updateControlBounds(WW.contentDOM.getBoundingClientRect());
            let iW = pW(WW.root);
            iW && iW.rangeCount && this.editContext.updateSelectionBounds(iW.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(WW) {
        let iW = 0,
          OW = !1,
          mW = this.pendingContextChange;
        return WW.changes.iterChanges(((EW, NW, PW, LW, cW) => {
          if (OW) return;
          let wW = cW.length - (NW - EW);
          if (mW && NW >= mW.to) {
            if (mW.from == EW && mW.to == NW && mW.insert.eq(cW)) return mW = this.pendingContextChange = null, iW += wW, void(this.to += wW);
            mW = null, this.revertPending(WW.state)
          }
          if (EW += iW, (NW += iW) <= this.from) this.from += wW, this.to += wW;
          else if (EW < this.to) {
            if (EW < this.from || NW > this.to || this.to - this.from + cW.length > 3e4) return void(OW = !0);
            this.editContext.updateText(this.toContextPos(EW), this.toContextPos(NW), cW.toString()), this.to += wW
          }
          iW += wW
        })), mW && !OW && this.revertPending(WW.state), !OW
      }
      update(WW) {
        let iW = this.pendingContextChange,
          OW = WW.startState.selection.main;
        this.composing && (this.composing.drifted || !WW.changes.touchesRange(OW.from, OW.to) && WW.transactions.some((WW => !WW.isUserEvent("input.type") && WW.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = WW.changes.mapPos(this.composing.editorBase)) : this.applyEdits(WW) && this.rangeIsValid(WW.state) ? (WW.docChanged || WW.selectionSet || iW) && this.setSelection(WW.state) : (this.pendingContextChange = null, this.reset(WW.state)), (WW.geometryChanged || WW.docChanged || WW.selectionSet) && WW.view.requestMeasure(this.measureReq)
      }
      resetRange(WW) {
        let {
          head: iW
        } = WW.selection.main;
        this.from = Math.max(0, iW - 1e4), this.to = Math.min(WW.doc.length, iW + 1e4)
      }
      reset(WW) {
        this.resetRange(WW), this.editContext.updateText(0, this.editContext.text.length, WW.doc.sliceString(this.from, this.to)), this.setSelection(WW)
      }
      revertPending(WW) {
        let iW = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(iW.from), this.toContextPos(iW.from + iW.insert.length), WW.doc.sliceString(iW.from, iW.to))
      }
      setSelection(WW) {
        let {
          main: iW
        } = WW.selection, OW = this.toContextPos(Math.max(this.from, Math.min(this.to, iW.anchor))), mW = this.toContextPos(iW.head);
        this.editContext.selectionStart == OW && this.editContext.selectionEnd == mW || this.editContext.updateSelection(OW, mW)
      }
      rangeIsValid(WW) {
        let {
          head: iW
        } = WW.selection.main;
        return !(this.from > 0 && iW - this.from < 500 || this.to < WW.doc.length && this.to - iW < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        WW = Math.min(WW, iW);
        let OW = this.composing;
        return OW && OW.drifted ? OW.editorBase + (WW - OW.contextBase) : WW + this.from
      }
      toContextPos(WW) {
        let iW = this.composing;
        return iW && iW.drifted ? iW.contextBase + (WW - iW.editorBase) : WW - this.from
      }
      destroy() {
        for (let WW in this.handlers) this.editContext.removeEventListener(WW, this.handlers[WW])
      }
    }
    class HE {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get jWW() {
        return this.viewState.jWW
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
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var iW;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), WW.parent && WW.parent.appendChild(this.dom);
        let {
          dispatch: OW
        } = WW;
        this.dispatchTransactions = WW.dispatchTransactions || OW && (WW => WW.forEach((WW => OW(WW, this)))) || (WW => this.update(WW)), this.dispatch = this.dispatch.bind(this), this._root = WW.root || function(WW) {
          for (; WW;) {
            if (WW && (9 == WW.nodeType || 11 == WW.nodeType && WW.host)) return WW;
            WW = WW.assignedSlot || WW.parentNode
          }
          return null
        }(WW.parent) || document, this.viewState = new PE(this, WW.state || mW.o.create(WW)), WW.scrollTo && WW.scrollTo.is(Ri) && (this.viewState.scrollTarget = WW.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(zi).map((WW => new Qi(WW)));
        for (let mW of this.plugins) mW.update(this);
        this.observer = new yE(this), this.inputState = new tm(this), this.inputState.ensureHandlers(this.plugins), this.docView = new VO(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (iW = document.fonts) || void 0 === iW ? void 0 : iW.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        let EW = 1 == iW.length && iW[0] instanceof mW.P ? iW : 1 == iW.length && Array.isArray(iW[0]) ? iW[0] : [this.state.update(...iW)];
        this.dispatchTransactions(EW, this)
      }
      update(WW) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let iW, OW = !1,
          EW = !1,
          NW = this.state;
        for (let mW of WW) {
          if (mW.startState != NW) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          NW = mW.state
        }
        if (this.destroyed) return void(this.viewState.state = NW);
        let PW = this.hasFocus,
          LW = 0,
          cW = null;
        WW.some((WW => WW.annotation(om))) ? (this.inputState.notifiedFocused = PW, LW = 1) : PW != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = PW, cW = dm(NW, PW), cW || (LW = 1));
        let wW = this.observer.delayedAndroidKey,
          tW = null;
        if (wW ? (this.observer.clearDelayedAndroidKey(), tW = this.observer.readChange(), (tW && !this.state.doc.eq(NW.doc) || !this.state.selection.eq(NW.selection)) && (tW = null)) : this.observer.clear(), NW.facet(mW.o.phrases) != this.state.facet(mW.o.phrases)) return this.setState(NW);
        iW = xO.create(this, NW, WW), iW.flags |= LW;
        let ZW = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let iW of WW) {
            if (ZW && (ZW = ZW.map(iW.changes)), iW.scrollIntoView) {
              let {
                main: WW
              } = iW.state.selection, {
                x: OW,
                y: EW
              } = this.state.facet(HE.cursorScrollMargin);
              ZW = new qi(WW.empty ? WW : mW.l.cursor(WW.head, WW.head > WW.anchor ? -1 : 1), "nearest", "nearest", EW, OW)
            }
            for (let WW of iW.effects) WW.is(Ri) && (ZW = WW.value.clip(this.state))
          }
          this.viewState.update(iW, ZW), this.bidiCache = oE.update(this.bidiCache, iW.changes), iW.empty || (this.updatePlugins(iW), this.inputState.update(iW)), OW = this.docView.update(iW), this.state.facet(tO) != this.styleModules && this.mountStyles(), EW = this.updateAttrs(), this.showAnnouncements(WW), this.docView.updateSelection(OW, WW.some((WW => WW.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (iW.startState.facet(AE) != iW.state.facet(AE) && (this.viewState.mustMeasureContent = !0), (OW || EW || ZW || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), OW && this.docViewUpdate(), !iW.empty)
          for (let mW of this.state.facet(vi)) try {
            mW(iW)
          } catch (xW) {
            Ii(this.state, xW, "update listener")
          }(cW || tW) && Promise.resolve().then((() => {
            cW && this.state == cW.startState && this.dispatch(cW), tW && !Pm(this, tW) && wW.force && Ei(this.contentDOM, wW.key, wW.keyCode)
          }))
      }
      setState(WW) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = WW);
        this.updateState = 2;
        let iW = this.hasFocus;
        try {
          for (let WW of this.plugins) WW.destroy(this);
          this.viewState = new PE(this, WW), this.plugins = WW.facet(zi).map((WW => new Qi(WW))), this.pluginMap.clear();
          for (let WW of this.plugins) WW.update(this);
          this.docView.destroy(), this.docView = new VO(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        iW && this.focus(), this.requestMeasure()
      }
      updatePlugins(WW) {
        let iW = WW.startState.facet(zi),
          OW = WW.state.facet(zi);
        if (iW != OW) {
          let mW = [];
          for (let EW of OW) {
            let OW = iW.indexOf(EW);
            if (OW < 0) mW.push(new Qi(EW));
            else {
              let iW = this.plugins[OW];
              iW.mustUpdate = WW, mW.push(iW)
            }
          }
          for (let iW of this.plugins) iW.mustUpdate != WW && iW.destroy(this);
          this.plugins = mW, this.pluginMap.clear()
        } else
          for (let mW of this.plugins) mW.mustUpdate = WW;
        for (let mW = 0; mW < this.plugins.length; mW++) this.plugins[mW].update(this);
        iW != OW && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let iW of this.plugins) {
          let OW = iW.value;
          if (OW && OW.docViewUpdate) try {
            OW.docViewUpdate(this)
          } catch (WW) {
            Ii(this.state, WW, "doc view update listener")
          }
        }
      }
      measure() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, WW && this.observer.forceFlush();
        let iW = null,
          OW = this.viewState.scrollParent,
          mW = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: EW,
            scrollAnchorHeight: NW
          } = this.viewState;
        Math.abs(mW - this.viewState.scrollOffset) > 1 && (NW = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let WW = 0;; WW++) {
            if (NW < 0)
              if (Ni(OW || this.win)) EW = -1, NW = this.viewState.heightMap.height;
              else {
                let WW = this.viewState.scrollAnchorAt(mW);
                EW = WW.from, NW = WW.top
              } this.updateState = 1;
            let LW = this.viewState.measure();
            if (!LW && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (WW > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let cW = [];
            4 & LW || ([this.measureRequests, cW] = [cW, this.measureRequests]);
            let wW = cW.map((WW => {
                try {
                  return WW.read(this)
                } catch (iW) {
                  return Ii(this.state, iW), uE
                }
              })),
              tW = xO.create(this, this.state, []),
              ZW = !1;
            tW.flags |= LW, iW ? iW.flags |= LW : iW = tW, this.updateState = 2, tW.empty || (this.updatePlugins(tW), this.inputState.update(tW), this.updateAttrs(), ZW = this.docView.update(tW), ZW && this.docViewUpdate());
            for (let WW = 0; WW < cW.length; WW++)
              if (wW[WW] != uE) try {
                let iW = cW[WW];
                iW.write && iW.write(wW[WW], this)
              } catch (PW) {
                Ii(this.state, PW)
              }
            if (ZW && this.docView.updateSelection(!0), !tW.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, NW = -1;
                  continue
                } {
                  let WW = ((EW < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(EW).top) - NW) / this.scaleY;
                  if ((WW > 1 || WW < -1) && (OW == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    mW += WW, OW ? OW.scrollTop += WW : this.win.scrollBy(0, WW), NW = -1;
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
        if (iW && !iW.empty)
          for (let LW of this.state.facet(vi)) LW(iW)
      }
      get themeClasses() {
        return jE + " " + (this.state.facet(bE) ? kE : UE) + " " + this.state.facet(AE)
      }
      updateAttrs() {
        let WW = dE(this, WO, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          iW = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(ai) ? "true" : "false",
            class: "cm-content",
            style: `${YW.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (iW["aria-readonly"] = "true"), dE(this, iO, iW);
        let OW = this.observer.ignore((() => {
          let OW = hW(this.contentDOM, this.contentAttrs, iW),
            mW = hW(this.dom, this.editorAttrs, WW);
          return OW || mW
        }));
        return this.editorAttrs = WW, this.contentAttrs = iW, OW
      }
      showAnnouncements(WW) {
        let iW = !0;
        for (let OW of WW)
          for (let WW of OW.effects)
            if (WW.is(HE.announce)) {
              iW && (this.announceDOM.textContent = ""), iW = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = WW.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(tO);
        let WW = this.state.facet(HE.cspNonce);
        EW.c.mount(this.root, this.styleModules.concat(KE).reverse(), WW ? {
          nonce: WW
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(WW) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), WW) {
          if (this.measureRequests.indexOf(WW) > -1) return;
          if (null != WW.key)
            for (let iW = 0; iW < this.measureRequests.length; iW++)
              if (this.measureRequests[iW].key === WW.key) return void(this.measureRequests[iW] = WW);
          this.measureRequests.push(WW)
        }
      }
      plugin(WW) {
        let iW = this.pluginMap.get(WW);
        return (void 0 === iW || iW && iW.plugin != WW) && this.pluginMap.set(WW, iW = this.plugins.find((iW => iW.plugin == WW)) || null), iW && iW.update(this).value
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
      elementAtHeight(WW) {
        return this.readMeasured(), this.viewState.elementAtHeight(WW)
      }
      lineBlockAtHeight(WW) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(WW)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(WW) {
        return this.viewState.lineBlockAt(WW)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(WW, iW, OW) {
        return aO(this, WW, RO(this, WW, iW, OW))
      }
      moveByGroup(WW, iW) {
        return aO(this, WW, RO(this, WW, iW, (iW => function(WW, iW, OW) {
          let EW = WW.state.charCategorizer(iW),
            NW = EW(OW);
          return WW => {
            let iW = EW(WW);
            return NW == mW.i.Space && (NW = iW), NW == iW
          }
        }(this, WW.head, iW))))
      }
      visualLineSide(WW, iW) {
        let OW = this.bidiSpans(WW),
          EW = this.textDirectionAt(WW.from),
          NW = OW[iW ? OW.length - 1 : 0];
        return mW.l.cursor(NW.side(iW, EW) + WW.from, NW.forward(!iW, EW) ? 1 : -1)
      }
      moveToLineBoundary(WW, iW) {
        return function(WW, iW, OW, EW) {
          let NW = qO(WW, iW.head, iW.assoc || -1),
            PW = EW && NW.type == uW.Text && (WW.lineWrapping || NW.widgetLineBreaks) ? WW.coordsAtPos(iW.assoc < 0 && iW.head > NW.from ? iW.head - 1 : iW.head) : null;
          if (PW) {
            let iW = WW.dom.getBoundingClientRect(),
              EW = WW.textDirectionAt(NW.from),
              LW = WW.posAtCoords({
                x: OW == (EW == wi.LTR) ? iW.right - 1 : iW.left + 1,
                y: (PW.top + PW.bottom) / 2
              });
            if (null != LW) return mW.l.cursor(LW, OW ? -1 : 1)
          }
          return mW.l.cursor(OW ? NW.to : NW.from, OW ? -1 : 1)
        }(this, WW, iW, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(WW, iW, OW) {
        return aO(this, WW, function(WW, iW, OW, EW) {
          let NW = iW.head,
            PW = OW ? 1 : -1;
          if (NW == (OW ? WW.state.doc.length : 0)) return mW.l.cursor(NW, iW.assoc);
          let LW, cW = iW.goalColumn,
            wW = WW.contentDOM.getBoundingClientRect(),
            tW = WW.coordsAtPos(NW, iW.assoc || ((iW.empty ? OW : iW.head == iW.from) ? 1 : -1)),
            ZW = WW.documentTop;
          if (tW) null == cW && (cW = tW.left - wW.left), LW = PW < 0 ? tW.top : tW.bottom;
          else {
            let iW = WW.viewState.lineBlockAt(NW);
            null == cW && (cW = Math.min(wW.right - wW.left, WW.defaultCharacterWidth * (NW - iW.from))), LW = (PW < 0 ? iW.top : iW.bottom) + ZW
          }
          let xW = wW.left + cW,
            lW = WW.viewState.heightOracle.textHeight >> 1,
            AW = null !== EW && void 0 !== EW ? EW : lW;
          for (let bW = 0;; bW += lW) {
            let iW = LW + (AW + bW) * PW,
              EW = zO(WW, {
                x: xW,
                y: iW
              }, !1, PW);
            if (OW ? iW > wW.bottom : iW < wW.top) return mW.l.cursor(EW.pos, EW.assoc);
            let NW = WW.coordsAtPos(EW.pos, EW.assoc),
              tW = NW ? (NW.top + NW.bottom) / 2 : 0;
            if (!NW || (OW ? tW > LW : tW < LW)) return mW.l.cursor(EW.pos, EW.assoc, void 0, cW)
          }
        }(this, WW, iW, OW))
      }
      domAtPos(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(WW, iW)
      }
      posAtDOM(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(WW, iW)
      }
      posAtCoords(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let OW = zO(this, WW, iW);
        return OW && OW.pos
      }
      posAndSideAtCoords(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), zO(this, WW, iW)
      }
      coordsAtPos(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let OW = this.docView.coordsAt(WW, iW);
        if (!OW || OW.left == OW.right) return OW;
        let mW = this.state.doc.lineAt(WW),
          EW = this.bidiSpans(mW);
        return aW(OW, EW[si.find(EW, WW - mW.from, -1, iW)].dir == wi.LTR == iW > 0)
      }
      coordsForChar(WW) {
        return this.readMeasured(), this.docView.coordsForChar(WW)
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
      textDirectionAt(WW) {
        return !this.state.facet(Ci) || WW < this.viewport.from || WW > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(WW))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(WW) {
        if (WW.length > nE) return Ti(WW.length);
        let iW, OW = this.textDirectionAt(WW.from);
        for (let EW of this.bidiCache)
          if (EW.from == WW.from && EW.dir == OW && (EW.fresh || Mi(EW.isolates, iW = LO(this, WW)))) return EW.order;
        iW || (iW = LO(this, WW));
        let mW = yi(WW.text, OW, iW);
        return this.bidiCache.push(new oE(WW.from, WW.to, OW, iW, !0, mW)), mW
      }
      get hasFocus() {
        var WW;
        return (this.dom.ownerDocument.hasFocus() || YW.safari && (null === (WW = this.inputState) || void 0 === WW ? void 0 : WW.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          Oi(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(WW) {
        this._root != WW && (this._root = WW, this.observer.setWindow((9 == WW.nodeType ? WW : WW.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let WW of this.plugins) WW.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var OW, EW, NW, PW;
        return Ri.of(new qi("number" == typeof WW ? mW.l.cursor(WW) : WW, null !== (OW = iW.y) && void 0 !== OW ? OW : "nearest", null !== (EW = iW.x) && void 0 !== EW ? EW : "nearest", null !== (NW = iW.yMargin) && void 0 !== NW ? NW : 5, null !== (PW = iW.xMargin) && void 0 !== PW ? PW : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: WW,
          scrollLeft: iW
        } = this.scrollDOM, OW = this.viewState.scrollAnchorAt(WW);
        return Ri.of(new qi(mW.l.cursor(OW.from), "start", "start", OW.top - WW, iW, !0))
      }
      setTabFocusMode(WW) {
        null == WW ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof WW ? this.inputState.tabFocusMode = WW ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + WW)
      }
      static domEventHandlers(WW) {
        return Fi.define((() => ({})), {
          eventHandlers: WW
        })
      }
      static domEventObservers(WW) {
        return Fi.define((() => ({})), {
          eventObservers: WW
        })
      }
      static theme(WW, iW) {
        let OW = EW.c.newName(),
          mW = [AE.of(OW), tO.of(ME(`.${OW}`, WW))];
        return iW && iW.dark && mW.push(bE.of(!0)), mW
      }
      static baseTheme(WW) {
        return mW.w.lowest(tO.of(ME("." + jE, WW, sE)))
      }
      static findFromDOM(WW) {
        var iW;
        let OW = WW.querySelector(".cm-content"),
          mW = OW && AO.get(OW) || AO.get(WW);
        return (null === (iW = null === mW || void 0 === mW ? void 0 : mW.root) || void 0 === iW ? void 0 : iW.view) || null
      }
    }
    HE.styleModule = tO, HE.inputHandler = gi, HE.clipboardInputFilter = Vi, HE.clipboardOutputFilter = fi, HE.scrollHandler = Bi, HE.focusChangeEffect = Di, HE.perLineTextDirection = Ci, HE.exceptionSink = ei, HE.updateListener = vi, HE.editable = ai, HE.mouseSelectionStyle = di, HE.dragMovesSelection = oi, HE.clickAddsSelectionRange = ui, HE.Km = OO, HE.blockWrappers = mO, HE.outerDecorations = EO, HE.atomicRanges = NO, HE.bidiIsolatedRanges = PO, HE.cursorScrollMargin = mW.p.define({
      combine: WW => {
        let iW = 5,
          OW = 5;
        for (let mW of WW) "number" == typeof mW ? iW = OW = mW : ({
          x: iW,
          y: OW
        } = mW);
        return {
          x: iW,
          y: OW
        }
      }
    }), HE.scrollMargins = cO, HE.darkTheme = bE, HE.cspNonce = mW.p.define({
      combine: WW => WW.length ? WW[0] : ""
    }), HE.contentAttributes = iO, HE.editorAttributes = WO, HE.lineWrapping = HE.contentAttributes.of({
      class: "cm-lineWrapping"
    }), HE.announce = mW.H.define();
    const nE = 4096,
      uE = {};
    class oE {
      constructor(WW, iW, OW, mW, EW, NW) {
        this.from = WW, this.to = iW, this.dir = OW, this.isolates = mW, this.fresh = EW, this.order = NW
      }
      static update(WW, iW) {
        if (iW.empty && !WW.some((WW => WW.fresh))) return WW;
        let OW = [],
          mW = WW.length ? WW[WW.length - 1].dir : wi.LTR;
        for (let EW = Math.max(0, WW.length - 10); EW < WW.length; EW++) {
          let NW = WW[EW];
          NW.dir != mW || iW.touchesRange(NW.from, NW.to) || OW.push(new oE(iW.mapPos(NW.from, 1), iW.mapPos(NW.to, -1), NW.dir, NW.isolates, !1, NW.order))
        }
        return OW
      }
    }

    function dE(WW, iW, OW) {
      for (let mW = WW.state.facet(iW), EW = mW.length - 1; EW >= 0; EW--) {
        let iW = mW[EW],
          NW = "function" == typeof iW ? iW(WW) : iW;
        NW && yW(NW, OW)
      }
      return OW
    }
    const eE = YW.mac ? "mac" : YW.windows ? "win" : YW.linux ? "linux" : "key";

    function vE(WW, iW, OW) {
      return iW.altKey && (WW = "Alt-" + WW), iW.ctrlKey && (WW = "Ctrl-" + WW), iW.metaKey && (WW = "Meta-" + WW), !1 !== OW && iW.shiftKey && (WW = "Shift-" + WW), WW
    }
    const gE = mW.w.default(HE.domEventHandlers({
        keydown: (WW, iW) => qE(pE(iW.state), WW, iW, "editor")
      })),
      DE = mW.p.define({
        enables: gE
      }),
      VE = new WeakMap;

    function pE(WW) {
      let iW = WW.facet(DE),
        OW = VE.get(iW);
      return OW || VE.set(iW, OW = function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE,
          OW = Object.create(null),
          mW = Object.create(null),
          EW = (WW, iW) => {
            let OW = mW[WW];
            if (null == OW) mW[WW] = iW;
            else if (OW != iW) throw new Error("Key binding " + WW + " is used both as a regular binding and as a multi-stroke prefix")
          },
          NW = (WW, mW, NW, PW, LW) => {
            var cW, wW;
            let tW = OW[WW] || (OW[WW] = Object.create(null)),
              ZW = mW.split(/ (?!$)/).map((WW => function(WW, iW) {
                const OW = WW.split(/-(?!$)/);
                let mW, EW, NW, PW, LW = OW[OW.length - 1];
                "Space" == LW && (LW = " ");
                for (let cW = 0; cW < OW.length - 1; ++cW) {
                  const WW = OW[cW];
                  if (/^(cmd|meta|m)$/i.test(WW)) PW = !0;
                  else if (/^a(lt)?$/i.test(WW)) mW = !0;
                  else if (/^(c|ctrl|control)$/i.test(WW)) EW = !0;
                  else if (/^s(hift)?$/i.test(WW)) NW = !0;
                  else {
                    if (!/^mod$/i.test(WW)) throw new Error("Unrecognized modifier name: " + WW);
                    "mac" == iW ? PW = !0 : EW = !0
                  }
                }
                return mW && (LW = "Alt-" + LW), EW && (LW = "Ctrl-" + LW), PW && (LW = "Meta-" + LW), NW && (LW = "Shift-" + LW), LW
              }(WW, iW)));
            for (let iW = 1; iW < ZW.length; iW++) {
              let OW = ZW.slice(0, iW).join(" ");
              EW(OW, !0), tW[OW] || (tW[OW] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [iW => {
                  let mW = CE = {
                    view: iW,
                    prefix: OW,
                    scope: WW
                  };
                  return setTimeout((() => {
                    CE == mW && (CE = null)
                  }), XE), !0
                }]
              })
            }
            let xW = ZW.join(" ");
            EW(xW, !1);
            let lW = tW[xW] || (tW[xW] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (wW = null === (cW = tW._any) || void 0 === cW ? void 0 : cW.run) || void 0 === wW ? void 0 : wW.slice()) || []
            });
            NW && lW.run.push(NW), PW && (lW.preventDefault = !0), LW && (lW.stopPropagation = !0)
          };
        for (let PW of WW) {
          let WW = PW.scope ? PW.scope.split(" ") : ["editor"];
          if (PW.any)
            for (let iW of WW) {
              let WW = OW[iW] || (OW[iW] = Object.create(null));
              WW._any || (WW._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: mW
              } = PW;
              for (let iW in WW) WW[iW].run.push((WW => mW(WW, BE)))
            }
          let mW = PW[iW] || PW.key;
          if (mW)
            for (let iW of WW) NW(iW, mW, PW.run, PW.preventDefault, PW.stopPropagation), PW.shift && NW(iW, "Shift-" + mW, PW.shift, PW.preventDefault, PW.stopPropagation)
        }
        return OW
      }(iW.reduce(((WW, iW) => WW.concat(iW)), []))), OW
    }

    function fE(WW, iW, OW) {
      return qE(pE(WW.state), iW, WW, OW)
    }
    let CE = null;
    const XE = 4e3;
    let BE = null;

    function qE(WW, iW, OW, EW) {
      BE = iW;
      let wW = function(WW) {
          var iW = !(LW && WW.metaKey && WW.shiftKey && !WW.ctrlKey && !WW.altKey || cW && WW.shiftKey && WW.key && 1 == WW.key.length || "Unidentified" == WW.key) && WW.key || (WW.shiftKey ? PW : NW)[WW.keyCode] || WW.key || "Unidentified";
          return "Esc" == iW && (iW = "Escape"), "Del" == iW && (iW = "Delete"), "Left" == iW && (iW = "ArrowLeft"), "Up" == iW && (iW = "ArrowUp"), "Right" == iW && (iW = "ArrowRight"), "Down" == iW && (iW = "ArrowDown"), iW
        }(iW),
        tW = (0, mW.Q)(wW, 0),
        ZW = (0, mW.R)(tW) == wW.length && " " != wW,
        xW = "",
        lW = !1,
        AW = !1,
        bW = !1;
      CE && CE.view == OW && CE.scope == EW && (xW = CE.prefix + " ", bm.indexOf(iW.keyCode) < 0 && (AW = !0, CE = null));
      let jW, UW, kW = new Set,
        sW = WW => {
          if (WW) {
            for (let iW of WW.run)
              if (!kW.has(iW) && (kW.add(iW), iW(OW))) return WW.stopPropagation && (bW = !0), !0;
            WW.preventDefault && (WW.stopPropagation && (bW = !0), AW = !0)
          }
          return !1
        },
        MW = WW[EW];
      return MW && (sW(MW[xW + vE(wW, iW, !ZW)]) ? lW = !0 : !ZW || !(iW.altKey || iW.metaKey || iW.ctrlKey) || YW.windows && iW.ctrlKey && iW.altKey || YW.mac && iW.altKey && !iW.ctrlKey && !iW.metaKey || !(jW = NW[iW.keyCode]) || jW == wW ? ZW && iW.shiftKey && sW(MW[xW + vE(wW, iW, !0)]) && (lW = !0) : (sW(MW[xW + vE(jW, iW, !0)]) || iW.shiftKey && (UW = PW[iW.keyCode]) != wW && UW != jW && sW(MW[xW + vE(UW, iW, !1)])) && (lW = !0), !lW && sW(MW._any) && (lW = !0)), AW && (lW = !0), lW && bW && iW.stopPropagation(), BE = null, lW
    }
    class RE {
      constructor(WW, iW, OW, mW, EW) {
        this.className = WW, this.left = iW, this.top = OW, this.width = mW, this.height = EW
      }
      draw() {
        let WW = document.createElement("div");
        return WW.className = this.className, this.adjust(WW), WW
      }
      update(WW, iW) {
        return iW.className == this.className && (this.adjust(WW), !0)
      }
      adjust(WW) {
        WW.style.left = this.left + "px", WW.style.top = this.top + "px", null != this.width && (WW.style.width = this.width + "px"), WW.style.height = this.height + "px"
      }
      eq(WW) {
        return this.left == WW.left && this.top == WW.top && this.width == WW.width && this.height == WW.height && this.className == WW.className
      }
      static forRange(WW, iW, OW) {
        if (OW.empty) {
          let mW = WW.coordsAtPos(OW.head, OW.assoc || 1);
          if (!mW) return [];
          let EW = GE(WW);
          return [new RE(iW, mW.left - EW.left, mW.top - EW.top, null, mW.bottom - mW.top)]
        }
        return function(WW, iW, OW) {
          if (OW.to <= WW.viewport.from || OW.from >= WW.viewport.to) return [];
          let mW = Math.max(OW.from, WW.viewport.from),
            EW = Math.min(OW.to, WW.viewport.to),
            NW = WW.textDirection == wi.LTR,
            PW = WW.contentDOM,
            LW = PW.getBoundingClientRect(),
            cW = GE(WW),
            wW = PW.querySelector(".cm-line"),
            tW = wW && window.getComputedStyle(wW),
            ZW = LW.left + (tW ? parseInt(tW.paddingLeft) + Math.min(0, parseInt(tW.textIndent)) : 0),
            xW = LW.right - (tW ? parseInt(tW.paddingRight) : 0),
            lW = qO(WW, mW, 1),
            AW = qO(WW, EW, -1),
            bW = lW.type == uW.Text ? lW : null,
            jW = AW.type == uW.Text ? AW : null;
          bW && (WW.lineWrapping || lW.widgetLineBreaks) && (bW = IE(WW, mW, 1, bW));
          jW && (WW.lineWrapping || AW.widgetLineBreaks) && (jW = IE(WW, EW, -1, jW));
          if (bW && jW && bW.from == jW.from && bW.to == jW.to) return kW(sW(OW.from, OW.to, bW));
          {
            let iW = bW ? sW(OW.from, null, bW) : MW(lW, !1),
              mW = jW ? sW(null, OW.to, jW) : MW(AW, !0),
              EW = [];
            return (bW || lW).to < (jW || AW).from - (bW && jW ? 1 : 0) || lW.widgetLineBreaks > 1 && iW.bottom + WW.defaultLineHeight / 2 < mW.top ? EW.push(UW(ZW, iW.bottom, xW, mW.top)) : iW.bottom < mW.top && WW.elementAtHeight((iW.bottom + mW.top) / 2).type == uW.Text && (iW.bottom = mW.top = (iW.bottom + mW.top) / 2), kW(iW).concat(EW).concat(kW(mW))
          }

          function UW(WW, OW, mW, EW) {
            return new RE(iW, WW - cW.left, OW - cW.top, Math.max(0, mW - WW), EW - OW)
          }

          function kW(WW) {
            let {
              top: iW,
              bottom: OW,
              horizontal: mW
            } = WW, EW = [];
            for (let NW = 0; NW < mW.length; NW += 2) EW.push(UW(mW[NW], iW, mW[NW + 1], OW));
            return EW
          }

          function sW(iW, OW, mW) {
            let EW = 1e9,
              PW = -1e9,
              LW = [];

            function cW(iW, OW, cW, wW, tW) {
              let lW = WW.coordsAtPos(iW, iW == mW.to ? -2 : 2),
                AW = WW.coordsAtPos(cW, cW == mW.from ? 2 : -2);
              lW && AW && (EW = Math.min(lW.top, AW.top, EW), PW = Math.max(lW.bottom, AW.bottom, PW), tW == wi.LTR ? LW.push(NW && OW ? ZW : lW.left, NW && wW ? xW : AW.right) : LW.push(!NW && wW ? ZW : AW.left, !NW && OW ? xW : lW.right))
            }
            let wW = null !== iW && void 0 !== iW ? iW : mW.from,
              tW = null !== OW && void 0 !== OW ? OW : mW.to;
            for (let NW of WW.jWW)
              if (NW.to > wW && NW.from < tW)
                for (let mW = Math.max(NW.from, wW), EW = Math.min(NW.to, tW);;) {
                  let NW = WW.state.doc.lineAt(mW);
                  for (let PW of WW.bidiSpans(NW)) {
                    let WW = PW.from + NW.from,
                      LW = PW.to + NW.from;
                    if (WW >= EW) break;
                    LW > mW && cW(Math.max(WW, mW), null == iW && WW <= wW, Math.min(LW, EW), null == OW && LW >= tW, PW.dir)
                  }
                  if (mW = NW.to + 1, mW >= EW) break
                }
            return 0 == LW.length && cW(wW, null == iW, tW, null == OW, WW.textDirection), {
              top: EW,
              bottom: PW,
              horizontal: LW
            }
          }

          function MW(WW, iW) {
            let OW = LW.top + (iW ? WW.top : WW.bottom);
            return {
              top: OW,
              bottom: OW,
              horizontal: []
            }
          }
        }(WW, iW, OW)
      }
    }

    function GE(WW) {
      let iW = WW.scrollDOM.getBoundingClientRect();
      return {
        left: (WW.textDirection == wi.LTR ? iW.left : iW.right - WW.scrollDOM.clientWidth * WW.scaleX) - WW.scrollDOM.scrollLeft * WW.scaleX,
        top: iW.top - WW.scrollDOM.scrollTop * WW.scaleY
      }
    }

    function IE(WW, iW, OW, mW) {
      let EW = WW.coordsAtPos(iW, 2 * OW);
      if (!EW) return mW;
      let NW = WW.dom.getBoundingClientRect(),
        PW = (EW.top + EW.bottom) / 2,
        LW = WW.posAtCoords({
          x: NW.left + 1,
          y: PW
        }),
        cW = WW.posAtCoords({
          x: NW.right - 1,
          y: PW
        });
      return null == LW || null == cW ? mW : {
        from: Math.max(mW.from, Math.min(LW, cW)),
        to: Math.min(mW.to, Math.max(LW, cW))
      }
    }
    class aE {
      constructor(WW, iW) {
        this.view = WW, this.layer = iW, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = WW.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), iW.above && this.dom.classList.add("cm-layer-above"), iW.class && this.dom.classList.add(iW.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(WW.state), WW.requestMeasure(this.measureReq), iW.mount && iW.mount(this.dom, WW)
      }
      update(WW) {
        WW.startState.facet(rE) != WW.state.facet(rE) && this.setOrder(WW.state), (this.layer.update(WW, this.dom) || WW.geometryChanged) && (this.scale(), WW.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(WW) {
        !1 !== this.layer.updateOnDocViewUpdate && WW.requestMeasure(this.measureReq)
      }
      setOrder(WW) {
        let iW = 0,
          OW = WW.facet(rE);
        for (; iW < OW.length && OW[iW] != this.layer;) iW++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - iW)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: WW,
          scaleY: iW
        } = this.view;
        WW == this.scaleX && iW == this.scaleY || (this.scaleX = WW, this.scaleY = iW, this.dom.style.transform = `scale(${1/WW}, ${1/iW})`)
      }
      draw(WW) {
        if (WW.length != this.drawn.length || WW.some(((WW, iW) => {
            return OW = WW, mW = this.drawn[iW], !(OW.constructor == mW.constructor && OW.eq(mW));
            var OW, mW
          }))) {
          let iW = this.dom.firstChild,
            OW = 0;
          for (let mW of WW) mW.update && iW && mW.constructor && this.drawn[OW].constructor && mW.update(iW, this.drawn[OW]) ? (iW = iW.nextSibling, OW++) : this.dom.insertBefore(mW.draw(), iW);
          for (; iW;) {
            let WW = iW.nextSibling;
            iW.remove(), iW = WW
          }
          this.drawn = WW, YW.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const rE = mW.p.define();

    function zE(WW) {
      return [Fi.define((iW => new aE(iW, WW))), rE.of(WW)]
    }
    const FE = mW.p.define({
      combine: WW => (0, mW.U)(WW, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (WW, iW) => Math.min(WW, iW),
        drawRangeCursor: (WW, iW) => WW || iW
      })
    });

    function QE() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [FE.of(WW), iN, mN, EN, Xi.of(!0)]
    }

    function WN(WW) {
      return WW.startState.facet(FE) != WW.state.facet(FE)
    }
    const iN = zE({
      above: !0,
      markers(WW) {
        let {
          state: iW
        } = WW, OW = iW.facet(FE), EW = [];
        for (let NW of iW.selection.kj) {
          let PW = NW == iW.selection.main;
          if (NW.empty || OW.drawRangeCursor && !(PW && YW.ios && OW.iosSelectionHandles)) {
            let iW = PW ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              OW = NW.empty ? NW : mW.l.cursor(NW.head, NW.assoc);
            for (let mW of RE.forRange(WW, iW, OW)) EW.push(mW)
          }
        }
        return EW
      },
      update(WW, iW) {
        WW.transactions.some((WW => WW.selection)) && (iW.style.animationName = "cm-blink" == iW.style.animationName ? "cm-blink2" : "cm-blink");
        let OW = WN(WW);
        return OW && ON(WW.state, iW), WW.docChanged || WW.selectionSet || OW
      },
      mount(WW, iW) {
        ON(iW.state, WW)
      },
      class: "cm-cursorLayer"
    });

    function ON(WW, iW) {
      iW.style.animationDuration = WW.facet(FE).cursorBlinkRate + "ms"
    }
    const mN = zE({
        above: !1,
        markers(WW) {
          let iW = [],
            {
              main: OW,
              kj: EW
            } = WW.state.selection;
          for (let mW of EW)
            if (!mW.empty)
              for (let OW of RE.forRange(WW, "cm-selectionBackground", mW)) iW.push(OW);
          if (YW.ios && !OW.empty && WW.state.facet(FE).iosSelectionHandles) {
            for (let EW of RE.forRange(WW, "cm-selectionHandle cm-selectionHandle-start", mW.l.cursor(OW.from, 1))) iW.push(EW);
            for (let EW of RE.forRange(WW, "cm-selectionHandle cm-selectionHandle-end", mW.l.cursor(OW.to, 1))) iW.push(EW)
          }
          return iW
        },
        update: (WW, iW) => WW.docChanged || WW.selectionSet || WW.viewportChanged || WN(WW),
        class: "cm-selectionLayer"
      }),
      EN = mW.w.highest(HE.theme({
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
      NN = mW.H.define({
        map: (WW, iW) => null == WW ? null : iW.mapPos(WW)
      }),
      PN = mW.L.define({
        create: () => null,
        update: (WW, iW) => (null != WW && (WW = iW.changes.mapPos(WW)), iW.effects.reduce(((WW, iW) => iW.is(NN) ? iW.value : WW), WW))
      }),
      LN = Fi.fromClass(class {
        constructor(WW) {
          this.view = WW, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(WW) {
          var iW;
          let OW = WW.state.field(PN);
          null == OW ? null != this.cursor && (null === (iW = this.cursor) || void 0 === iW || iW.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (WW.startState.field(PN) != OW || WW.docChanged || WW.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: WW
          } = this, iW = WW.state.field(PN), OW = null != iW && WW.coordsAtPos(iW);
          if (!OW) return null;
          let mW = WW.scrollDOM.getBoundingClientRect();
          return {
            left: OW.left - mW.left + WW.scrollDOM.scrollLeft * WW.scaleX,
            top: OW.top - mW.top + WW.scrollDOM.scrollTop * WW.scaleY,
            height: OW.bottom - OW.top
          }
        }
        drawCursor(WW) {
          if (this.cursor) {
            let {
              scaleX: iW,
              scaleY: OW
            } = this.view;
            WW ? (this.cursor.style.left = WW.left / iW + "px", this.cursor.style.top = WW.top / OW + "px", this.cursor.style.height = WW.height / OW + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(WW) {
          this.view.state.field(PN) != WW && this.view.dispatch({
            effects: NN.of(WW)
          })
        }
      }, {
        eventObservers: {
          dragover(WW) {
            this.setDropPos(this.view.posAtCoords({
              x: WW.clientX,
              y: WW.clientY
            }))
          },
          dragleave(WW) {
            WW.target != this.view.contentDOM && this.view.contentDOM.contains(WW.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function cN() {
      return [PN, LN]
    }

    function wN(WW, iW, OW, mW, EW) {
      iW.lastIndex = 0;
      for (let NW, PW = WW.iterRange(OW, mW), LW = OW; !PW.next().done; LW += PW.value.length)
        if (!PW.lineBreak)
          for (; NW = iW.exec(PW.value);) EW(LW + NW.index, NW)
    }
    class tN {
      constructor(WW) {
        const {
          regexp: iW,
          decoration: OW,
          decorate: mW,
          boundary: EW,
          maxLength: NW = 1e3
        } = WW;
        if (!iW.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = iW, mW) this.addMatch = (WW, iW, OW, EW) => mW(EW, OW, OW + WW[0].length, WW, iW);
        else if ("function" == typeof OW) this.addMatch = (WW, iW, mW, EW) => {
          let NW = OW(WW, iW, mW);
          NW && EW(mW, mW + WW[0].length, NW)
        };
        else {
          if (!OW) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (WW, iW, mW, EW) => EW(mW, mW + WW[0].length, OW)
        }
        this.boundary = EW, this.maxLength = NW
      }
      createDeco(WW) {
        let iW = new mW.A,
          OW = iW.add.bind(iW);
        for (let {
            from: mW,
            to: EW
          }
          of
          function(WW, iW) {
            let OW = WW.jWW;
            if (1 == OW.length && OW[0].from == WW.viewport.from && OW[0].to == WW.viewport.to) return OW;
            let mW = [];
            for (let {
                from: EW,
                to: NW
              }
              of OW) EW = Math.max(WW.state.doc.lineAt(EW).from, EW - iW), NW = Math.min(WW.state.doc.lineAt(NW).to, NW + iW), mW.length && mW[mW.length - 1].to >= EW ? mW[mW.length - 1].to = NW : mW.push({
              from: EW,
              to: NW
            });
            return mW
          }(WW, this.maxLength)) wN(WW.state.doc, this.regexp, mW, EW, ((iW, mW) => this.addMatch(mW, WW, iW, OW)));
        return iW.finish()
      }
      updateDeco(WW, iW) {
        let OW = 1e9,
          mW = -1;
        return WW.docChanged && WW.changes.iterChanges(((iW, EW, NW, PW) => {
          PW >= WW.view.viewport.from && NW <= WW.view.viewport.to && (OW = Math.min(NW, OW), mW = Math.max(PW, mW))
        })), WW.viewportMoved || mW - OW > 1e3 ? this.createDeco(WW.view) : mW > -1 ? this.updateRange(WW.view, iW.map(WW.changes), OW, mW) : iW
      }
      updateRange(WW, iW, OW, mW) {
        for (let EW of WW.jWW) {
          let NW = Math.max(EW.from, OW),
            PW = Math.min(EW.to, mW);
          if (PW >= NW) {
            let OW = WW.state.doc.lineAt(NW),
              mW = OW.to < PW ? WW.state.doc.lineAt(PW) : OW,
              LW = Math.max(EW.from, OW.from),
              cW = Math.min(EW.to, mW.to);
            if (this.boundary) {
              for (; NW > OW.from; NW--)
                if (this.boundary.test(OW.text[NW - 1 - OW.from])) {
                  LW = NW;
                  break
                } for (; PW < mW.to; PW++)
                if (this.boundary.test(mW.text[PW - mW.from])) {
                  cW = PW;
                  break
                }
            }
            let wW, tW = [],
              ZW = (WW, iW, OW) => tW.push(OW.range(WW, iW));
            if (OW == mW)
              for (this.regexp.lastIndex = LW - OW.from;
                (wW = this.regexp.exec(OW.text)) && wW.index < cW - OW.from;) this.addMatch(wW, WW, wW.index + OW.from, ZW);
            else wN(WW.state.doc, this.regexp, LW, cW, ((iW, OW) => this.addMatch(OW, WW, iW, ZW)));
            iW = iW.update({
              filterFrom: LW,
              filterTo: cW,
              filter: (WW, iW) => WW < LW || iW > cW,
              add: tW
            })
          }
        }
        return iW
      }
    }
    const ZN = null != /x/.unicode ? "gu" : "g",
      xN = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", ZN),
      lN = {
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
    let AN = null;
    const bN = mW.p.define({
      combine(WW) {
        let iW = (0, mW.U)(WW, {
          render: null,
          specialChars: xN,
          addSpecialChars: null
        });
        return (iW.replaceTabs = ! function() {
          var WW;
          if (null == AN && "undefined" != typeof document && document.body) {
            let iW = document.body.style;
            AN = null != (null !== (WW = iW.tabSize) && void 0 !== WW ? WW : iW.MozTabSize)
          }
          return AN || !1
        }()) && (iW.specialChars = new RegExp("\t|" + iW.specialChars.source, ZN)), iW.addSpecialChars && (iW.specialChars = new RegExp(iW.specialChars.source + "|" + iW.addSpecialChars.source, ZN)), iW
      }
    });

    function jN() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [bN.of(WW), UN || (UN = Fi.fromClass(class {
        constructor(WW) {
          this.view = WW, this.Km = oW.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(WW.state.facet(bN)), this.Km = this.decorator.createDeco(WW)
        }
        makeDecorator(WW) {
          return new tN({
            regexp: WW.specialChars,
            decoration: (iW, OW, EW) => {
              let {
                doc: NW
              } = OW.state, PW = (0, mW.Q)(iW[0], 0);
              if (9 == PW) {
                let WW = NW.lineAt(EW),
                  iW = OW.state.tabSize,
                  PW = (0, mW.X)(WW.text, iW, EW - WW.from);
                return oW.replace({
                  widget: new sN((iW - PW % iW) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[PW] || (this.decorationCache[PW] = oW.replace({
                widget: new kN(WW, PW)
              }))
            },
            boundary: WW.replaceTabs ? void 0 : /[^]/
          })
        }
        update(WW) {
          let iW = WW.state.facet(bN);
          WW.startState.facet(bN) != iW ? (this.decorator = this.makeDecorator(iW), this.Km = this.decorator.createDeco(WW.view)) : this.Km = this.decorator.updateDeco(WW, this.Km)
        }
      }, {
        Km: WW => WW.Km
      }))]
    }
    let UN = null;
    class kN extends nW {
      constructor(WW, iW) {
        super(), this.options = WW, this.code = iW
      }
      eq(WW) {
        return WW.code == this.code
      }
      toDOM(WW) {
        let iW = function(WW) {
            return WW >= 32 ? "\u2022" : 10 == WW ? "\u2424" : String.fromCharCode(9216 + WW)
          }(this.code),
          OW = WW.state.phrase("Control character") + " " + (lN[this.code] || "0x" + this.code.toString(16)),
          mW = this.options.render && this.options.render(this.code, OW, iW);
        if (mW) return mW;
        let EW = document.createElement("span");
        return EW.textContent = iW, EW.title = OW, EW.setAttribute("aria-label", OW), EW.className = "cm-specialChar", EW
      }
      ignoreEvent() {
        return !1
      }
    }
    class sN extends nW {
      constructor(WW) {
        super(), this.width = WW
      }
      eq(WW) {
        return WW.width == this.width
      }
      toDOM() {
        let WW = document.createElement("span");
        return WW.textContent = "\t", WW.className = "cm-tab", WW.style.width = this.width + "px", WW
      }
      ignoreEvent() {
        return !1
      }
    }

    function MN() {
      return SN
    }
    const KN = oW.line({
        class: "cm-activeLine"
      }),
      SN = Fi.fromClass(class {
        constructor(WW) {
          this.Km = this.getDeco(WW)
        }
        update(WW) {
          (WW.docChanged || WW.selectionSet) && (this.Km = this.getDeco(WW.view))
        }
        getDeco(WW) {
          let iW = -1,
            OW = [];
          for (let mW of WW.state.selection.kj) {
            let EW = WW.lineBlockAt(mW.head);
            EW.from > iW && (OW.push(KN.range(EW.from)), iW = EW.from)
          }
          return oW.set(OW)
        }
      }, {
        Km: WW => WW.Km
      });
    class YN extends nW {
      constructor(WW) {
        super(), this.content = WW
      }
      toDOM(WW) {
        let iW = document.createElement("span");
        return iW.className = "cm-placeholder", iW.style.pointerEvents = "none", iW.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(WW) : this.content.cloneNode(!0)), iW.setAttribute("aria-hidden", "true"), iW
      }
      coordsAt(WW) {
        let iW = WW.firstChild ? XW(WW.firstChild) : [];
        if (!iW.length) return null;
        let OW = window.getComputedStyle(WW.parentNode),
          mW = aW(iW[0], "rtl" != OW.direction),
          EW = parseInt(OW.lineHeight);
        return mW.bottom - mW.top > 1.5 * EW ? {
          left: mW.left,
          right: mW.right,
          top: mW.top,
          bottom: mW.top + EW
        } : mW
      }
      ignoreEvent() {
        return !1
      }
    }

    function yN(WW) {
      let iW = Fi.fromClass(class {
        constructor(iW) {
          this.view = iW, this.placeholder = WW ? oW.set([oW.widget({
            widget: new YN(WW),
            side: 1
          }).range(0)]) : oW.none
        }
        get Km() {
          return this.view.state.doc.length ? oW.none : this.placeholder
        }
      }, {
        Km: WW => WW.Km
      });
      return "string" == typeof WW ? [iW, HE.contentAttributes.of({
        "aria-placeholder": WW
      })] : iW
    }
    const TN = 2e3;

    function JN(WW, iW) {
      let OW = WW.posAtCoords({
          x: iW.clientX,
          y: iW.clientY
        }, !1),
        EW = WW.state.doc.lineAt(OW),
        NW = OW - EW.from,
        PW = NW > TN ? -1 : NW == EW.length ? function(WW, iW) {
          let OW = WW.coordsAtPos(WW.viewport.from);
          return OW ? Math.round(Math.abs((OW.left - iW) / WW.defaultCharacterWidth)) : -1
        }(WW, iW.clientX) : (0, mW.X)(EW.text, WW.state.tabSize, OW - EW.from);
      return {
        line: EW.number,
        col: PW,
        off: NW
      }
    }

    function hN(WW, iW) {
      let OW = JN(WW, iW),
        EW = WW.state.selection;
      return OW ? {
        update(WW) {
          if (WW.docChanged) {
            let iW = WW.changes.mapPos(WW.startState.doc.line(OW.line).from),
              mW = WW.state.doc.lineAt(iW);
            OW = {
              line: mW.number,
              col: OW.col,
              off: Math.min(OW.off, mW.length)
            }, EW = EW.map(WW.changes)
          }
        },
        get(iW, NW, PW) {
          let LW = JN(WW, iW);
          if (!LW) return EW;
          let cW = function(WW, iW, OW) {
            let EW = Math.min(iW.line, OW.line),
              NW = Math.max(iW.line, OW.line),
              PW = [];
            if (iW.off > TN || OW.off > TN || iW.col < 0 || OW.col < 0) {
              let LW = Math.min(iW.off, OW.off),
                cW = Math.max(iW.off, OW.off);
              for (let iW = EW; iW <= NW; iW++) {
                let OW = WW.doc.line(iW);
                OW.length <= cW && PW.push(mW.l.range(OW.from + LW, OW.to + cW))
              }
            } else {
              let LW = Math.min(iW.col, OW.col),
                cW = Math.max(iW.col, OW.col);
              for (let iW = EW; iW <= NW; iW++) {
                let OW = WW.doc.line(iW),
                  EW = (0, mW.ab)(OW.text, LW, WW.tabSize, !0);
                if (EW < 0) PW.push(mW.l.cursor(OW.to));
                else {
                  let iW = (0, mW.ab)(OW.text, cW, WW.tabSize);
                  PW.push(mW.l.range(OW.from + EW, OW.from + iW))
                }
              }
            }
            return PW
          }(WW.state, OW, LW);
          return cW.length ? PW ? mW.l.create(cW.concat(EW.kj)) : mW.l.create(cW) : EW
        }
      } : null
    }

    function HN(WW) {
      let iW = (null === WW || void 0 === WW ? void 0 : WW.eventFilter) || (WW => WW.altKey && 0 == WW.button);
      return HE.mouseSelectionStyle.of(((WW, OW) => iW(OW) ? hN(WW, OW) : null))
    }
    const nN = {
        Alt: [18, WW => !!WW.altKey],
        Control: [17, WW => !!WW.ctrlKey],
        Shift: [16, WW => !!WW.shiftKey],
        Meta: [91, WW => !!WW.metaKey]
      },
      uN = {
        style: "cursor: crosshair"
      };

    function oN() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [iW, OW] = nN[WW.key || "Alt"],
        mW = Fi.fromClass(class {
          constructor(WW) {
            this.view = WW, this.isDown = !1
          }
          set(WW) {
            this.isDown != WW && (this.isDown = WW, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(WW) {
              this.set(WW.keyCode == iW || OW(WW))
            },
            keyup(WW) {
              WW.keyCode != iW && OW(WW) || this.set(!1)
            },
            mousemove(WW) {
              this.set(OW(WW))
            }
          }
        });
      return [mW, HE.contentAttributes.of((WW => {
        var iW;
        return (null === (iW = WW.plugin(mW)) || void 0 === iW ? void 0 : iW.isDown) ? uN : null
      }))]
    }
    const dN = "-10000px";
    class eN {
      constructor(WW, iW, OW, mW) {
        this.facet = iW, this.createTooltipView = OW, this.removeTooltipView = mW, this.input = WW.state.facet(iW), this.tooltips = this.input.filter((WW => WW));
        let EW = null;
        this.tooltipViews = this.tooltips.map((WW => EW = OW(WW, EW)))
      }
      update(WW, iW) {
        var OW;
        let mW = WW.state.facet(this.facet),
          EW = mW.filter((WW => WW));
        if (mW === this.input) {
          for (let iW of this.tooltipViews) iW.update && iW.update(WW);
          return !1
        }
        let NW = [],
          PW = iW ? [] : null;
        for (let LW = 0; LW < EW.length; LW++) {
          let OW = EW[LW],
            mW = -1;
          if (OW) {
            for (let WW = 0; WW < this.tooltips.length; WW++) {
              let iW = this.tooltips[WW];
              iW && iW.create == OW.create && (mW = WW)
            }
            if (mW < 0) NW[LW] = this.createTooltipView(OW, LW ? NW[LW - 1] : null), PW && (PW[LW] = !!OW.above);
            else {
              let OW = NW[LW] = this.tooltipViews[mW];
              PW && (PW[LW] = iW[mW]), OW.update && OW.update(WW)
            }
          }
        }
        for (let LW of this.tooltipViews) NW.indexOf(LW) < 0 && (this.removeTooltipView(LW), null === (OW = LW.destroy) || void 0 === OW || OW.call(LW));
        return iW && (PW.forEach(((WW, OW) => iW[OW] = WW)), iW.length = PW.length), this.input = mW, this.tooltips = EW, this.tooltipViews = NW, !0
      }
    }

    function vN(WW) {
      let iW = WW.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: iW.clientHeight,
        right: iW.clientWidth
      }
    }
    const gN = mW.p.define({
        combine: WW => {
          var iW, OW, mW;
          return {
            position: YW.ios ? "absolute" : (null === (iW = WW.find((WW => WW.position))) || void 0 === iW ? void 0 : iW.position) || "fixed",
            parent: (null === (OW = WW.find((WW => WW.parent))) || void 0 === OW ? void 0 : OW.parent) || null,
            tooltipSpace: (null === (mW = WW.find((WW => WW.tooltipSpace))) || void 0 === mW ? void 0 : mW.tooltipSpace) || vN
          }
        }
      }),
      DN = new WeakMap,
      VN = Fi.fromClass(class {
        constructor(WW) {
          this.view = WW, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let iW = WW.state.facet(gN);
          this.position = iW.position, this.parent = iW.parent, this.classes = WW.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new eN(WW, XN, ((WW, iW) => this.createTooltip(WW, iW)), (WW => {
            this.resizeObserver && this.resizeObserver.unobserve(WW.dom), WW.dom.remove()
          })), this.above = this.manager.tooltips.map((WW => !!WW.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((WW => {
            Date.now() > this.lastTransaction - 50 && WW.length > 0 && WW[WW.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), WW.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let WW of this.manager.tooltipViews) this.intersectionObserver.observe(WW.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(WW) {
          WW.transactions.length && (this.lastTransaction = Date.now());
          let iW = this.manager.update(WW, this.above);
          iW && this.observeIntersection();
          let OW = iW || WW.geometryChanged,
            mW = WW.state.facet(gN);
          if (mW.position != this.position && !this.madeAbsolute) {
            this.position = mW.position;
            for (let WW of this.manager.tooltipViews) WW.dom.style.position = this.position;
            OW = !0
          }
          if (mW.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = mW.parent, this.createContainer();
            for (let WW of this.manager.tooltipViews) this.container.appendChild(WW.dom);
            OW = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          OW && this.maybeMeasure()
        }
        createTooltip(WW, iW) {
          let OW = WW.create(this.view),
            mW = iW ? iW.dom : null;
          if (OW.dom.classList.add("cm-tooltip"), WW.arrow && !OW.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let WW = document.createElement("div");
            WW.className = "cm-tooltip-arrow", OW.dom.appendChild(WW)
          }
          return OW.dom.style.position = this.position, OW.dom.style.top = dN, OW.dom.style.left = "0px", this.container.insertBefore(OW.dom, mW), OW.mount && OW.mount(this.view), this.resizeObserver && this.resizeObserver.observe(OW.dom), OW
        }
        destroy() {
          var WW, iW, OW;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let mW of this.manager.tooltipViews) mW.dom.remove(), null === (WW = mW.destroy) || void 0 === WW || WW.call(mW);
          this.parent && this.container.remove(), null === (iW = this.resizeObserver) || void 0 === iW || iW.disconnect(), null === (OW = this.intersectionObserver) || void 0 === OW || OW.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let WW = 1,
            iW = 1,
            OW = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: WW
            } = this.manager.tooltipViews[0];
            if (YW.safari) {
              let iW = WW.getBoundingClientRect();
              OW = Math.abs(iW.top + 1e4) > 1 || Math.abs(iW.left) > 1
            } else OW = !!WW.offsetParent && WW.offsetParent != this.container.ownerDocument.body
          }
          if (OW || "absolute" == this.position)
            if (this.parent) {
              let OW = this.parent.getBoundingClientRect();
              OW.width && OW.height && (WW = OW.width / this.parent.offsetWidth, iW = OW.height / this.parent.offsetHeight)
            } else({
              scaleX: WW,
              scaleY: iW
            } = this.view.viewState);
          let mW = this.view.scrollDOM.getBoundingClientRect(),
            EW = wO(this.view);
          return {
            visible: {
              left: mW.left + EW.left,
              top: mW.top + EW.top,
              right: mW.right - EW.right,
              bottom: mW.bottom - EW.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((WW, iW) => {
              let OW = this.manager.tooltipViews[iW];
              return OW.getCoords ? OW.getCoords(WW.pos) : this.view.coordsAtPos(WW.pos)
            })),
            size: this.manager.tooltipViews.map((WW => {
              let {
                dom: iW
              } = WW;
              return iW.getBoundingClientRect()
            })),
            space: this.view.state.facet(gN).tooltipSpace(this.view),
            scaleX: WW,
            scaleY: iW,
            makeAbsolute: OW
          }
        }
        writeMeasure(WW) {
          var iW;
          if (WW.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let WW of this.manager.tooltipViews) WW.dom.style.position = "absolute"
          }
          let {
            visible: OW,
            space: mW,
            scaleX: EW,
            scaleY: NW
          } = WW, PW = [];
          for (let LW = 0; LW < this.manager.tooltips.length; LW++) {
            let cW = this.manager.tooltips[LW],
              wW = this.manager.tooltipViews[LW],
              {
                dom: tW
              } = wW,
              ZW = WW.pos[LW],
              xW = WW.size[LW];
            if (!ZW || !1 !== cW.clip && (ZW.bottom <= Math.max(OW.top, mW.top) || ZW.top >= Math.min(OW.bottom, mW.bottom) || ZW.right < Math.max(OW.left, mW.left) - .1 || ZW.left > Math.min(OW.right, mW.right) + .1)) {
              tW.style.top = dN;
              continue
            }
            let lW = cW.arrow ? wW.dom.querySelector(".cm-tooltip-arrow") : null,
              AW = lW ? 7 : 0,
              bW = xW.right - xW.left,
              jW = null !== (iW = DN.get(wW)) && void 0 !== iW ? iW : xW.bottom - xW.top,
              UW = wW.offset || CN,
              kW = this.view.textDirection == wi.LTR,
              sW = xW.width > mW.right - mW.left ? kW ? mW.left : mW.right - xW.width : kW ? Math.max(mW.left, Math.min(ZW.left - (lW ? 14 : 0) + UW.x, mW.right - bW)) : Math.min(Math.max(mW.left, ZW.left - bW + (lW ? 14 : 0) - UW.x), mW.right - bW),
              MW = this.above[LW];
            !cW.strictSide && (MW ? ZW.top - jW - AW - UW.y < mW.top : ZW.bottom + jW + AW + UW.y > mW.bottom) && MW == mW.bottom - ZW.bottom > ZW.top - mW.top && (MW = this.above[LW] = !MW);
            let KW = (MW ? ZW.top - mW.top : mW.bottom - ZW.bottom) - AW;
            if (KW < jW && !1 !== wW.resize) {
              if (KW < this.view.defaultLineHeight) {
                tW.style.top = dN;
                continue
              }
              DN.set(wW, jW), tW.style.height = (jW = KW) / NW + "px"
            } else tW.style.height && (tW.style.height = "");
            let SW = MW ? ZW.top - jW - AW - UW.y : ZW.bottom + AW + UW.y,
              YW = sW + bW;
            if (!0 !== wW.overlap)
              for (let WW of PW) WW.left < YW && WW.right > sW && WW.top < SW + jW && WW.bottom > SW && (SW = MW ? WW.top - jW - 2 - AW : WW.bottom + AW + 2);
            if ("absolute" == this.position ? (tW.style.top = (SW - WW.parent.top) / NW + "px", pN(tW, (sW - WW.parent.left) / EW)) : (tW.style.top = SW / NW + "px", pN(tW, sW / EW)), lW) {
              let WW = ZW.left + (kW ? UW.x : -UW.x) - (sW + 14 - 7);
              lW.style.left = WW / EW + "px"
            }!0 !== wW.overlap && PW.push({
              left: sW,
              top: SW,
              right: YW,
              bottom: SW + jW
            }), tW.classList.toggle("cm-tooltip-above", MW), tW.classList.toggle("cm-tooltip-below", !MW), wW.positioned && wW.positioned(WW.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let WW of this.manager.tooltipViews) WW.dom.style.top = dN
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function pN(WW, iW) {
      let OW = parseInt(WW.style.left, 10);
      (isNaN(OW) || Math.abs(iW - OW) > 1) && (WW.style.left = iW + "px")
    }
    const fN = HE.baseTheme({
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
      CN = {
        x: 0,
        y: 0
      },
      XN = mW.p.define({
        enables: [VN, fN]
      }),
      BN = mW.p.define({
        combine: WW => WW.reduce(((WW, iW) => WW.concat(iW)), [])
      });
    class qN {
      static create(WW) {
        return new qN(WW)
      }
      constructor(WW) {
        this.view = WW, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new eN(WW, BN, ((WW, iW) => this.createHostedView(WW, iW)), (WW => WW.dom.remove()))
      }
      createHostedView(WW, iW) {
        let OW = WW.create(this.view);
        return OW.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(OW.dom, iW ? iW.dom.nextSibling : this.dom.firstChild), this.mounted && OW.mount && OW.mount(this.view), OW
      }
      mount(WW) {
        for (let iW of this.manager.tooltipViews) iW.mount && iW.mount(WW);
        this.mounted = !0
      }
      positioned(WW) {
        for (let iW of this.manager.tooltipViews) iW.positioned && iW.positioned(WW)
      }
      update(WW) {
        this.manager.update(WW)
      }
      destroy() {
        var WW;
        for (let iW of this.manager.tooltipViews) null === (WW = iW.destroy) || void 0 === WW || WW.call(iW)
      }
      passProp(WW) {
        let iW;
        for (let OW of this.manager.tooltipViews) {
          let mW = OW[WW];
          if (void 0 !== mW)
            if (void 0 === iW) iW = mW;
            else if (iW !== mW) return
        }
        return iW
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
    const RN = XN.compute([BN], (WW => {
      let iW = WW.facet(BN);
      return 0 === iW.length ? null : {
        pos: Math.min(...iW.map((WW => WW.pos))),
        end: Math.max(...iW.map((WW => {
          var iW;
          return null !== (iW = WW.end) && void 0 !== iW ? iW : WW.pos
        }))),
        create: qN.create,
        above: iW[0].above,
        arrow: iW.some((WW => WW.arrow))
      }
    }));
    class GN {
      constructor(WW, iW, OW, mW, EW) {
        this.view = WW, this.source = iW, this.field = OW, this.setHover = mW, this.hoverTime = EW, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: WW.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), WW.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), WW.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let WW = Date.now() - this.lastMove.time;
        WW < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - WW) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: WW,
          lastMove: iW
        } = this, OW = WW.docView.tile.nearest(iW.target);
        if (!OW) return;
        let mW, EW = 1;
        if (OW.isWidget()) mW = OW.posAtStart;
        else {
          if (mW = WW.posAtCoords(iW), null == mW) return;
          let OW = WW.coordsAtPos(mW);
          if (!OW || iW.y < OW.top || iW.y > OW.bottom || iW.x < OW.left - WW.defaultCharacterWidth || iW.x > OW.right + WW.defaultCharacterWidth) return;
          let NW = WW.bidiSpans(WW.state.doc.lineAt(mW)).find((WW => WW.from <= mW && WW.to >= mW)),
            PW = NW && NW.dir == wi.RTL ? -1 : 1;
          EW = iW.x < OW.left ? -PW : PW
        }
        let NW = this.source(WW, mW, EW);
        if (null === NW || void 0 === NW ? void 0 : NW.then) {
          let iW = this.pending = {
            pos: mW
          };
          NW.then((OW => {
            this.pending == iW && (this.pending = null, !OW || Array.isArray(OW) && !OW.length || WW.dispatch({
              effects: this.setHover.of(Array.isArray(OW) ? OW : [OW])
            }))
          }), (iW => Ii(WW.state, iW, "hover tooltip")))
        } else !NW || Array.isArray(NW) && !NW.length || WW.dispatch({
          effects: this.setHover.of(Array.isArray(NW) ? NW : [NW])
        })
      }
      get tooltip() {
        let WW = this.view.plugin(VN),
          iW = WW ? WW.manager.tooltips.findIndex((WW => WW.create == qN.create)) : -1;
        return iW > -1 ? WW.manager.tooltipViews[iW] : null
      }
      mousemove(WW) {
        var iW, OW;
        this.lastMove = {
          x: WW.clientX,
          y: WW.clientY,
          target: WW.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: mW,
          tooltip: EW
        } = this;
        if (mW.length && EW && ! function(WW, iW) {
            let OW, {
              left: mW,
              right: EW,
              top: NW,
              bottom: PW
            } = WW.getBoundingClientRect();
            if (OW = WW.querySelector(".cm-tooltip-arrow")) {
              let WW = OW.getBoundingClientRect();
              NW = Math.min(WW.top, NW), PW = Math.max(WW.bottom, PW)
            }
            return iW.clientX >= mW - IN && iW.clientX <= EW + IN && iW.clientY >= NW - IN && iW.clientY <= PW + IN
          }(EW.dom, WW) || this.pending) {
          let {
            pos: EW
          } = mW[0] || this.pending, NW = null !== (OW = null === (iW = mW[0]) || void 0 === iW ? void 0 : iW.end) && void 0 !== OW ? OW : EW;
          (EW == NW ? this.view.posAtCoords(this.lastMove) == EW : function(WW, iW, OW, mW, EW) {
            let NW = WW.scrollDOM.getBoundingClientRect(),
              PW = WW.documentTop + WW.documentPadding.top + WW.contentHeight;
            if (NW.left > mW || NW.right < mW || NW.top > EW || Math.min(NW.bottom, PW) < EW) return !1;
            let LW = WW.posAtCoords({
              x: mW,
              y: EW
            }, !1);
            return LW >= iW && LW <= OW
          }(this.view, EW, NW, WW.clientX, WW.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(WW) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: iW
        } = this;
        if (iW.length) {
          let {
            tooltip: iW
          } = this;
          iW && iW.dom.contains(WW.relatedTarget) ? this.watchTooltipLeave(iW.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(WW) {
        let iW = OW => {
          WW.removeEventListener("mouseleave", iW), this.active.length && !this.view.dom.contains(OW.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        WW.addEventListener("mouseleave", iW)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const IN = 4;

    function aN(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        OW = mW.H.define(),
        EW = mW.L.define({
          create: () => [],
          update(WW, EW) {
            if (WW.length && (iW.hideOnChange && (EW.docChanged || EW.selection) ? WW = [] : iW.hideOn && (WW = WW.filter((WW => !iW.hideOn(EW, WW)))), EW.docChanged)) {
              let iW = [];
              for (let OW of WW) {
                let WW = EW.changes.mapPos(OW.pos, -1, mW.t.TrackDel);
                if (null != WW) {
                  let mW = Object.assign(Object.create(null), OW);
                  mW.pos = WW, null != mW.end && (mW.end = EW.changes.mapPos(mW.end)), iW.push(mW)
                }
              }
              WW = iW
            }
            for (let iW of EW.effects) iW.is(OW) && (WW = iW.value), iW.is(zN) && (WW = []);
            return WW
          },
          provide: WW => BN.from(WW)
        });
      return {
        active: EW,
        extension: [EW, Fi.define((mW => new GN(mW, WW, EW, OW, iW.hoverTime || 300))), RN]
      }
    }

    function rN(WW, iW) {
      let OW = WW.plugin(VN);
      if (!OW) return null;
      let mW = OW.manager.tooltips.indexOf(iW);
      return mW < 0 ? null : OW.manager.tooltipViews[mW]
    }
    const zN = mW.H.define();
    const FN = mW.p.define({
      combine(WW) {
        let iW, OW;
        for (let mW of WW) iW = iW || mW.topContainer, OW = OW || mW.bottomContainer;
        return {
          topContainer: iW,
          bottomContainer: OW
        }
      }
    });

    function QN(WW, iW) {
      let OW = WW.plugin(WP),
        mW = OW ? OW.specs.indexOf(iW) : -1;
      return mW > -1 ? OW.panels[mW] : null
    }
    const WP = Fi.fromClass(class {
      constructor(WW) {
        this.input = WW.state.facet(mP), this.specs = this.input.filter((WW => WW)), this.panels = this.specs.map((iW => iW(WW)));
        let iW = WW.state.facet(FN);
        this.top = new iP(WW, !0, iW.topContainer), this.bottom = new iP(WW, !1, iW.bottomContainer), this.top.sync(this.panels.filter((WW => WW.top))), this.bottom.sync(this.panels.filter((WW => !WW.top)));
        for (let OW of this.panels) OW.dom.classList.add("cm-panel"), OW.mount && OW.mount()
      }
      update(WW) {
        let iW = WW.state.facet(FN);
        this.top.container != iW.topContainer && (this.top.sync([]), this.top = new iP(WW.view, !0, iW.topContainer)), this.bottom.container != iW.bottomContainer && (this.bottom.sync([]), this.bottom = new iP(WW.view, !1, iW.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let OW = WW.state.facet(mP);
        if (OW != this.input) {
          let iW = OW.filter((WW => WW)),
            mW = [],
            EW = [],
            NW = [],
            PW = [];
          for (let OW of iW) {
            let iW, LW = this.specs.indexOf(OW);
            LW < 0 ? (iW = OW(WW.view), PW.push(iW)) : (iW = this.panels[LW], iW.update && iW.update(WW)), mW.push(iW), (iW.top ? EW : NW).push(iW)
          }
          this.specs = iW, this.panels = mW, this.top.sync(EW), this.bottom.sync(NW);
          for (let WW of PW) WW.dom.classList.add("cm-panel"), WW.mount && WW.mount()
        } else
          for (let mW of this.panels) mW.update && mW.update(WW)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: WW => HE.scrollMargins.of((iW => {
        let OW = iW.plugin(WW);
        return OW && {
          top: OW.top.scrollMargin(),
          bottom: OW.bottom.scrollMargin()
        }
      }))
    });
    class iP {
      constructor(WW, iW, OW) {
        this.view = WW, this.top = iW, this.container = OW, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(WW) {
        for (let iW of this.panels) iW.destroy && WW.indexOf(iW) < 0 && iW.destroy();
        this.panels = WW, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let WW = this.container || this.view.dom;
          WW.insertBefore(this.dom, this.top ? WW.firstChild : null)
        }
        let WW = this.dom.firstChild;
        for (let iW of this.panels)
          if (iW.dom.parentNode == this.dom) {
            for (; WW != iW.dom;) WW = OP(WW);
            WW = WW.nextSibling
          } else this.dom.insertBefore(iW.dom, WW);
        for (; WW;) WW = OP(WW)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let WW of this.classes.split(" ")) WW && this.container.classList.remove(WW);
          for (let WW of (this.classes = this.view.themeClasses).split(" ")) WW && this.container.classList.add(WW)
        }
      }
    }

    function OP(WW) {
      let iW = WW.nextSibling;
      return WW.remove(), iW
    }
    const mP = mW.p.define({
      enables: WP
    });

    function EP(WW, iW) {
      let OW, EW = new Promise((WW => OW = WW)),
        NW = WW => function(WW, iW, OW) {
          let mW = iW.content ? iW.content(WW, (() => PW(null))) : null;
          if (!mW) {
            if (mW = (0, ZW.c)("form"), iW.input) {
              let WW = (0, ZW.c)("input", iW.input);
              /^(text|password|number|email|tel|url)$/.test(WW.type) && WW.classList.add("cm-textfield"), WW.name || (WW.name = "input"), mW.appendChild((0, ZW.c)("label", (iW.label || "") + ": ", WW))
            } else mW.appendChild(document.createTextNode(iW.label || ""));
            mW.appendChild(document.createTextNode(" ")), mW.appendChild((0, ZW.c)("button", {
              class: "cm-button",
              type: "submit"
            }, iW.submitLabel || "OK"))
          }
          let EW = "FORM" == mW.nodeName ? [mW] : mW.querySelectorAll("form");
          for (let LW = 0; LW < EW.length; LW++) {
            let WW = EW[LW];
            WW.addEventListener("keydown", (iW => {
              27 == iW.keyCode ? (iW.preventDefault(), PW(null)) : 13 == iW.keyCode && (iW.preventDefault(), PW(WW))
            })), WW.addEventListener("submit", (iW => {
              iW.preventDefault(), PW(WW)
            }))
          }
          let NW = (0, ZW.c)("div", mW, (0, ZW.c)("button", {
            onclick: () => PW(null),
            "aria-label": WW.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          iW.class && (NW.className = iW.class);

          function PW(iW) {
            NW.contains(NW.ownerDocument.activeElement) && WW.focus(), OW(iW)
          }
          return NW.classList.add("cm-dialog"), {
            dom: NW,
            top: iW.top,
            mount: () => {
              if (iW.focus) {
                let WW;
                WW = "string" == typeof iW.focus ? mW.querySelector(iW.focus) : mW.querySelector("input") || mW.querySelector("button"), WW && "select" in WW ? WW.select() : WW && "focus" in WW && WW.focus()
              }
            }
          }
        }(WW, iW, OW);
      WW.state.field(NP, !1) ? WW.dispatch({
        effects: PP.of(NW)
      }) : WW.dispatch({
        effects: mW.H.appendConfig.of(NP.init((() => [NW])))
      });
      let PW = LP.of(NW);
      return {
        close: PW,
        result: EW.then((iW => ((WW.win.queueMicrotask || (iW => WW.win.setTimeout(iW, 10)))((() => {
          WW.state.field(NP).indexOf(NW) > -1 && WW.dispatch({
            effects: PW
          })
        })), iW)))
      }
    }
    const NP = mW.L.define({
        create: () => [],
        update(WW, iW) {
          for (let OW of iW.effects) OW.is(PP) ? WW = [OW.value].concat(WW) : OW.is(LP) && (WW = WW.filter((WW => WW != OW.value)));
          return WW
        },
        provide: WW => mP.computeN([WW], (iW => iW.field(WW)))
      }),
      PP = mW.H.define(),
      LP = mW.H.define();
    class cP extends mW.G {
      compare(WW) {
        return this == WW || this.constructor == WW.constructor && this.eq(WW)
      }
      eq(WW) {
        return !1
      }
      destroy(WW) {}
    }
    cP.prototype.elementClass = "", cP.prototype.toDOM = void 0, cP.prototype.mapMode = mW.t.TrackBefore, cP.prototype.startSide = cP.prototype.endSide = -1, cP.prototype.point = !0;
    const wP = mW.p.define(),
      tP = mW.p.define(),
      ZP = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => mW.C.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      xP = mW.p.define();

    function lP(WW) {
      return [bP(), xP.of({
        ...ZP,
        ...WW
      })]
    }
    const AP = mW.p.define({
      combine: WW => WW.some((WW => WW))
    });

    function bP(WW) {
      let iW = [jP];
      return WW && !1 === WW.fixed && iW.push(AP.of(!0)), iW
    }
    const jP = Fi.fromClass(class {
      constructor(WW) {
        this.view = WW, this.domAfter = null, this.prevViewport = WW.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = WW.state.facet(xP).map((iW => new MP(WW, iW))), this.fixed = !WW.state.facet(AP);
        for (let iW of this.gutters) "after" == iW.config.side ? this.getDOMAfter().appendChild(iW.dom) : this.dom.appendChild(iW.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), WW.scrollDOM.insertBefore(this.dom, WW.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(WW) {
        if (this.updateGutters(WW)) {
          let iW = this.prevViewport,
            OW = WW.view.viewport,
            mW = Math.min(iW.to, OW.to) - Math.max(iW.from, OW.from);
          this.syncGutters(mW < .8 * (OW.to - OW.from))
        }
        if (WW.geometryChanged) {
          let WW = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = WW, this.domAfter && (this.domAfter.style.minHeight = WW)
        }
        this.view.state.facet(AP) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = WW.view.viewport
      }
      syncGutters(WW) {
        let iW = this.dom.nextSibling;
        WW && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let OW = mW.C.iter(this.view.state.facet(wP), this.view.viewport.from),
          EW = [],
          NW = this.gutters.map((WW => new sP(WW, this.view.viewport, -this.view.documentPadding.top)));
        for (let mW of this.view.viewportLineBlocks)
          if (EW.length && (EW = []), Array.isArray(mW.type)) {
            let WW = !0;
            for (let iW of mW.type)
              if (iW.type == uW.Text && WW) {
                kP(OW, EW, iW.from);
                for (let WW of NW) WW.line(this.view, iW, EW);
                WW = !1
              } else if (iW.widget)
              for (let WW of NW) WW.widget(this.view, iW)
          } else if (mW.type == uW.Text) {
          kP(OW, EW, mW.from);
          for (let WW of NW) WW.line(this.view, mW, EW)
        } else if (mW.widget)
          for (let WW of NW) WW.widget(this.view, mW);
        for (let mW of NW) mW.finish();
        WW && (this.view.scrollDOM.insertBefore(this.dom, iW), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(WW) {
        let iW = WW.startState.facet(xP),
          OW = WW.state.facet(xP),
          EW = WW.docChanged || WW.heightChanged || WW.viewportChanged || !mW.C.eq(WW.startState.facet(wP), WW.state.facet(wP), WW.view.viewport.from, WW.view.viewport.to);
        if (iW == OW)
          for (let mW of this.gutters) mW.update(WW) && (EW = !0);
        else {
          EW = !0;
          let mW = [];
          for (let EW of OW) {
            let OW = iW.indexOf(EW);
            OW < 0 ? mW.push(new MP(this.view, EW)) : (this.gutters[OW].update(WW), mW.push(this.gutters[OW]))
          }
          for (let WW of this.gutters) WW.dom.remove(), mW.indexOf(WW) < 0 && WW.destroy();
          for (let WW of mW) "after" == WW.config.side ? this.getDOMAfter().appendChild(WW.dom) : this.dom.appendChild(WW.dom);
          this.gutters = mW
        }
        return EW
      }
      destroy() {
        for (let WW of this.gutters) WW.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: WW => HE.scrollMargins.of((iW => {
        let OW = iW.plugin(WW);
        if (!OW || 0 == OW.gutters.length || !OW.fixed) return null;
        let mW = OW.dom.offsetWidth * iW.scaleX,
          EW = OW.domAfter ? OW.domAfter.offsetWidth * iW.scaleX : 0;
        return iW.textDirection == wi.LTR ? {
          left: mW,
          right: EW
        } : {
          right: mW,
          left: EW
        }
      }))
    });

    function UP(WW) {
      return Array.isArray(WW) ? WW : [WW]
    }

    function kP(WW, iW, OW) {
      for (; WW.value && WW.from <= OW;) WW.from == OW && iW.push(WW.value), WW.next()
    }
    class sP {
      constructor(WW, iW, OW) {
        this.gutter = WW, this.height = OW, this.i = 0, this.cursor = mW.C.iter(WW.markers, iW.from)
      }
      addElement(WW, iW, OW) {
        let {
          gutter: mW
        } = this, EW = (iW.top - this.height) / WW.scaleY, NW = iW.height / WW.scaleY;
        if (this.i == mW.elements.length) {
          let iW = new KP(WW, NW, EW, OW);
          mW.elements.push(iW), mW.dom.appendChild(iW.dom)
        } else mW.elements[this.i].update(WW, NW, EW, OW);
        this.height = iW.bottom, this.i++
      }
      line(WW, iW, OW) {
        let mW = [];
        kP(this.cursor, mW, iW.from), OW.length && (mW = mW.concat(OW));
        let EW = this.gutter.config.lineMarker(WW, iW, mW);
        EW && mW.unshift(EW);
        let NW = this.gutter;
        (0 != mW.length || NW.config.renderEmptyElements) && this.addElement(WW, iW, mW)
      }
      widget(WW, iW) {
        let OW = this.gutter.config.widgetMarker(WW, iW.widget, iW),
          mW = OW ? [OW] : null;
        for (let EW of WW.state.facet(tP)) {
          let OW = EW(WW, iW.widget, iW);
          OW && (mW || (mW = [])).push(OW)
        }
        mW && this.addElement(WW, iW, mW)
      }
      finish() {
        let WW = this.gutter;
        for (; WW.elements.length > this.i;) {
          let iW = WW.elements.pop();
          WW.dom.removeChild(iW.dom), iW.destroy()
        }
      }
    }
    class MP {
      constructor(WW, iW) {
        this.view = WW, this.config = iW, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let OW in iW.domEventHandlers) this.dom.addEventListener(OW, (mW => {
          let EW, NW = mW.target;
          if (NW != this.dom && this.dom.contains(NW)) {
            for (; NW.parentNode != this.dom;) NW = NW.parentNode;
            let WW = NW.getBoundingClientRect();
            EW = (WW.top + WW.bottom) / 2
          } else EW = mW.clientY;
          let PW = WW.lineBlockAtHeight(EW - WW.documentTop);
          iW.domEventHandlers[OW](WW, PW, mW) && mW.preventDefault()
        }));
        this.markers = UP(iW.markers(WW)), iW.initialSpacer && (this.spacer = new KP(WW, 0, 0, [iW.initialSpacer(WW)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(WW) {
        let iW = this.markers;
        if (this.markers = UP(this.config.markers(WW.view)), this.spacer && this.config.updateSpacer) {
          let iW = this.config.updateSpacer(this.spacer.markers[0], WW);
          iW != this.spacer.markers[0] && this.spacer.update(WW.view, 0, 0, [iW])
        }
        let OW = WW.view.viewport;
        return !mW.C.eq(this.markers, iW, OW.from, OW.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(WW)
      }
      destroy() {
        for (let WW of this.elements) WW.destroy()
      }
    }
    class KP {
      constructor(WW, iW, OW, mW) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(WW, iW, OW, mW)
      }
      update(WW, iW, OW, mW) {
        this.height != iW && (this.height = iW, this.dom.style.height = iW + "px"), this.above != OW && (this.dom.style.marginTop = (this.above = OW) ? OW + "px" : ""),
          function(WW, iW) {
            if (WW.length != iW.length) return !1;
            for (let OW = 0; OW < WW.length; OW++)
              if (!WW[OW].compare(iW[OW])) return !1;
            return !0
          }(this.markers, mW) || this.setMarkers(WW, mW)
      }
      setMarkers(WW, iW) {
        let OW = "cm-gutterElement",
          mW = this.dom.firstChild;
        for (let EW = 0, NW = 0;;) {
          let PW = NW,
            LW = EW < iW.length ? iW[EW++] : null,
            cW = !1;
          if (LW) {
            let WW = LW.elementClass;
            WW && (OW += " " + WW);
            for (let iW = NW; iW < this.markers.length; iW++)
              if (this.markers[iW].compare(LW)) {
                PW = iW, cW = !0;
                break
              }
          } else PW = this.markers.length;
          for (; NW < PW;) {
            let WW = this.markers[NW++];
            if (WW.toDOM) {
              WW.destroy(mW);
              let iW = mW.nextSibling;
              mW.remove(), mW = iW
            }
          }
          if (!LW) break;
          LW.toDOM && (cW ? mW = mW.nextSibling : this.dom.insertBefore(LW.toDOM(WW), mW)), cW && NW++
        }
        this.dom.className = OW, this.markers = iW
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const SP = mW.p.define(),
      YP = mW.p.define(),
      yP = mW.p.define({
        combine: WW => (0, mW.U)(WW, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(WW, iW) {
            let OW = Object.assign({}, WW);
            for (let mW in iW) {
              let WW = OW[mW],
                EW = iW[mW];
              OW[mW] = WW ? (iW, OW, mW) => WW(iW, OW, mW) || EW(iW, OW, mW) : EW
            }
            return OW
          }
        })
      });
    class TP extends cP {
      constructor(WW) {
        super(), this.number = WW
      }
      eq(WW) {
        return this.number == WW.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function JP(WW, iW) {
      return WW.state.facet(yP).formatNumber(iW, WW.state)
    }
    const hP = xP.compute([yP], (WW => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: WW => WW.state.facet(SP),
      lineMarker: (WW, iW, OW) => OW.some((WW => WW.toDOM)) ? null : new TP(JP(WW, WW.state.doc.lineAt(iW.from).number)),
      widgetMarker: (WW, iW, OW) => {
        for (let mW of WW.state.facet(YP)) {
          let EW = mW(WW, iW, OW);
          if (EW) return EW
        }
        return null
      },
      lineMarkerChange: WW => WW.startState.facet(yP) != WW.state.facet(yP),
      initialSpacer: WW => new TP(JP(WW, nP(WW.state.doc.lines))),
      updateSpacer(WW, iW) {
        let OW = JP(iW.view, nP(iW.view.state.doc.lines));
        return OW == WW.number ? WW : new TP(OW)
      },
      domEventHandlers: WW.facet(yP).domEventHandlers,
      side: "before"
    })));

    function HP() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [yP.of(WW), bP(), hP]
    }

    function nP(WW) {
      let iW = 9;
      for (; iW < WW;) iW = 10 * iW + 9;
      return iW
    }
    const uP = new class extends cP {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      oP = wP.compute(["selection"], (WW => {
        let iW = [],
          OW = -1;
        for (let mW of WW.selection.kj) {
          let EW = WW.doc.lineAt(mW.head).from;
          EW > OW && (OW = EW, iW.push(uP.range(EW)))
        }
        return mW.C.of(iW)
      }));

    function dP() {
      return oP
    }
  },
  53528: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW,
      h: () => lW,
      j: () => PW,
      k: () => tW,
      n: () => wW,
      q: () => dW,
      s: () => vW,
      u: () => eW,
      v: () => AW
    });
    const mW = 1024;
    let EW = 0;
    class NW {
      constructor(WW, iW) {
        this.from = WW, this.to = iW
      }
    }
    class PW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = EW++, this.perNode = !!WW.perNode, this.deserialize = WW.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = WW.combine || null
      }
      add(WW) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof WW && (WW = wW.match(WW)), iW => {
          let OW = WW(iW);
          return void 0 === OW ? null : [this, OW]
        }
      }
    }
    PW.closedBy = new PW({
      deserialize: WW => WW.split(" ")
    }), PW.openedBy = new PW({
      deserialize: WW => WW.split(" ")
    }), PW.group = new PW({
      deserialize: WW => WW.split(" ")
    }), PW.isolate = new PW({
      deserialize: WW => {
        if (WW && "rtl" != WW && "ltr" != WW && "auto" != WW) throw new RangeError("Invalid value for isolate: " + WW);
        return WW || "auto"
      }
    }), PW.contextHash = new PW({
      perNode: !0
    }), PW.lookAhead = new PW({
      perNode: !0
    }), PW.mounted = new PW({
      perNode: !0
    });
    class LW {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = WW, this.overlay = iW, this.parser = OW, this.bracketed = mW
      }
      static get(WW) {
        return WW && WW.props && WW.props[PW.mounted.id]
      }
    }
    const cW = Object.create(null);
    class wW {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = WW, this.props = iW, this.id = OW, this.flags = mW
      }
      static define(WW) {
        let iW = WW.props && WW.props.length ? Object.create(null) : cW,
          OW = (WW.top ? 1 : 0) | (WW.skipped ? 2 : 0) | (WW.error ? 4 : 0) | (null == WW.name ? 8 : 0),
          mW = new wW(WW.name || "", iW, WW.id, OW);
        if (WW.props)
          for (let EW of WW.props)
            if (Array.isArray(EW) || (EW = EW(mW)), EW) {
              if (EW[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              iW[EW[0].id] = EW[1]
            } return mW
      }
      prop(WW) {
        return this.props[WW.id]
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
      is(WW) {
        if ("string" == typeof WW) {
          if (this.name == WW) return !0;
          let iW = this.prop(PW.group);
          return !!iW && iW.indexOf(WW) > -1
        }
        return this.id == WW
      }
      static match(WW) {
        let iW = Object.create(null);
        for (let OW in WW)
          for (let mW of OW.split(" ")) iW[mW] = WW[OW];
        return WW => {
          for (let OW = WW.prop(PW.group), mW = -1; mW < (OW ? OW.length : 0); mW++) {
            let EW = iW[mW < 0 ? WW.name : OW[mW]];
            if (EW) return EW
          }
        }
      }
    }
    wW.none = new wW("", Object.create(null), 0, 8);
    class tW {
      constructor(WW) {
        this.types = WW;
        for (let iW = 0; iW < WW.length; iW++)
          if (WW[iW].id != iW) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let WW = [];
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        for (let EW of this.types) {
          let iW = null;
          for (let WW of OW) {
            let OW = WW(EW);
            if (OW) {
              iW || (iW = Object.assign({}, EW.props));
              let WW = OW[1],
                mW = OW[0];
              mW.combine && mW.id in iW && (WW = mW.combine(iW[mW.id], WW)), iW[mW.id] = WW
            }
          }
          WW.push(iW ? new wW(EW.name, iW, EW.id, EW.flags) : EW)
        }
        return new tW(WW)
      }
    }
    const ZW = new WeakMap,
      xW = new WeakMap;
    var lW;
    ! function(WW) {
      WW[WW.ExcludeBuffers = 1] = "ExcludeBuffers", WW[WW.IncludeAnonymous = 2] = "IncludeAnonymous", WW[WW.IgnoreMounts = 4] = "IgnoreMounts", WW[WW.IgnoreOverlays = 8] = "IgnoreOverlays", WW[WW.EnterBracketed = 16] = "EnterBracketed"
    }(lW || (lW = {}));
    class AW {
      constructor(WW, iW, OW, mW, EW) {
        if (this.type = WW, this.children = iW, this.positions = OW, this.length = mW, this.props = null, EW && EW.length) {
          this.props = Object.create(null);
          for (let [WW, iW] of EW) this.props["number" == typeof WW ? WW : WW.id] = iW
        }
      }
      toString() {
        let WW = LW.get(this);
        if (WW && !WW.overlay) return WW.tree.toString();
        let iW = "";
        for (let OW of this.children) {
          let WW = OW.toString();
          WW && (iW && (iW += ","), iW += WW)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (iW.length ? "(" + iW + ")" : "") : iW
      }
      cursor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new hW(this.topNode, WW)
      }
      cursorAt(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = ZW.get(this) || this.topNode,
          mW = new hW(OW);
        return mW.moveTo(WW, iW), ZW.set(this, mW._tree), mW
      }
      get topNode() {
        return new MW(this, 0, 0, null)
      }
      resolve(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = kW(ZW.get(this) || this.topNode, WW, iW, !1);
        return ZW.set(this, OW), OW
      }
      resolveInner(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = kW(xW.get(this) || this.topNode, WW, iW, !0);
        return xW.set(this, OW), OW
      }
      resolveStack(WW) {
        return function(WW, iW, OW) {
          let mW = WW.resolveInner(iW, OW),
            EW = null;
          for (let NW = mW instanceof MW ? mW : mW.context.parent; NW; NW = NW.parent)
            if (NW.index < 0) {
              let WW = NW.parent;
              (EW || (EW = [mW])).push(WW.resolve(iW, OW)), NW = WW
            } else {
              let WW = LW.get(NW.tree);
              if (WW && WW.overlay && WW.overlay[0].from <= iW && WW.overlay[WW.overlay.length - 1].to >= iW) {
                let PW = new MW(WW.tree, WW.overlay[0].from + NW.from, -1, NW);
                (EW || (EW = [mW])).push(kW(PW, iW, OW, !1))
              }
            } return EW ? TW(EW) : mW
        }(this, WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(WW) {
        let {
          enter: iW,
          leave: OW,
          from: mW = 0,
          to: EW = this.length
        } = WW, NW = WW.mode || 0, PW = (NW & lW.IncludeAnonymous) > 0;
        for (let LW = this.cursor(NW | lW.IncludeAnonymous);;) {
          let WW = !1;
          if (LW.from <= EW && LW.to >= mW && (!PW && LW.type.isAnonymous || !1 !== iW(LW))) {
            if (LW.firstChild()) continue;
            WW = !0
          }
          for (; WW && OW && (PW || !LW.type.isAnonymous) && OW(LW), !LW.nextSibling();) {
            if (!LW.parent()) return;
            WW = !0
          }
        }
      }
      prop(WW) {
        return WW.perNode ? this.props ? this.props[WW.id] : void 0 : this.type.prop(WW)
      }
      get propValues() {
        let WW = [];
        if (this.props)
          for (let iW in this.props) WW.push([+iW, this.props[iW]]);
        return WW
      }
      balance() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : oW(wW.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((WW, iW, OW) => new AW(this.type, WW, iW, OW, this.propValues)), WW.makeTree || ((WW, iW, OW) => new AW(wW.none, WW, iW, OW)))
      }
      static build(WW) {
        return function(WW) {
          var iW;
          let {
            buffer: OW,
            nodeSet: EW,
            maxBufferLength: NW = mW,
            reused: LW = [],
            minRepeatType: cW = EW.types.length
          } = WW, wW = Array.isArray(OW) ? new bW(OW, OW.length) : OW, tW = EW.types, ZW = 0, xW = 0;

          function lW(WW, iW, OW, mW, PW, AW) {
            let {
              id: bW,
              start: YW,
              end: yW,
              size: TW
            } = wW, JW = xW, hW = ZW;
            if (TW < 0) {
              if (wW.next(), -1 == TW) {
                let iW = LW[bW];
                return OW.push(iW), void mW.push(YW - WW)
              }
              if (-3 == TW) return void(ZW = bW);
              if (-4 == TW) return void(xW = bW);
              throw new RangeError(`Unrecognized record size: ${TW}`)
            }
            let HW, nW, uW = tW[bW],
              dW = YW - WW;
            if (yW - YW <= NW && (nW = KW(wW.pos - iW, PW))) {
              let iW = new Uint16Array(nW.size - nW.skip),
                OW = wW.pos - nW.size,
                mW = iW.length;
              for (; wW.pos > OW;) mW = SW(nW.start, iW, mW);
              HW = new jW(iW, yW - nW.start, EW), dW = nW.start - WW
            } else {
              let WW = wW.pos - TW;
              wW.next();
              let iW = [],
                OW = [],
                mW = bW >= cW ? bW : -1,
                EW = 0,
                PW = yW;
              for (; wW.pos > WW;) mW >= 0 && wW.id == mW && wW.size >= 0 ? (wW.end <= PW - NW && (sW(iW, OW, YW, EW, wW.end, PW, mW, JW, hW), EW = iW.length, PW = wW.end), wW.next()) : AW > 2500 ? UW(YW, WW, iW, OW) : lW(YW, WW, iW, OW, mW, AW + 1);
              if (mW >= 0 && EW > 0 && EW < iW.length && sW(iW, OW, YW, EW, YW, PW, mW, JW, hW), iW.reverse(), OW.reverse(), mW > -1 && EW > 0) {
                let WW = kW(uW, hW);
                HW = oW(uW, iW, OW, 0, iW.length, 0, yW - YW, WW, WW)
              } else HW = MW(uW, iW, OW, yW - YW, JW - yW, hW)
            }
            OW.push(HW), mW.push(dW)
          }

          function UW(WW, iW, OW, mW) {
            let PW = [],
              LW = 0,
              cW = -1;
            for (; wW.pos > iW;) {
              let {
                id: WW,
                start: iW,
                end: OW,
                size: mW
              } = wW;
              if (mW > 4) wW.next();
              else {
                if (cW > -1 && iW < cW) break;
                cW < 0 && (cW = OW - NW), PW.push(WW, iW, OW), LW++, wW.next()
              }
            }
            if (LW) {
              let iW = new Uint16Array(4 * LW),
                NW = PW[PW.length - 2];
              for (let WW = PW.length - 3, OW = 0; WW >= 0; WW -= 3) iW[OW++] = PW[WW], iW[OW++] = PW[WW + 1] - NW, iW[OW++] = PW[WW + 2] - NW, iW[OW++] = OW;
              OW.push(new jW(iW, PW[2] - NW, EW)), mW.push(NW - WW)
            }
          }

          function kW(WW, iW) {
            return (OW, mW, EW) => {
              let NW, LW, cW = 0,
                wW = OW.length - 1;
              if (wW >= 0 && (NW = OW[wW]) instanceof AW) {
                if (!wW && NW.type == WW && NW.length == EW) return NW;
                (LW = NW.prop(PW.lookAhead)) && (cW = mW[wW] + NW.length + LW)
              }
              return MW(WW, OW, mW, EW, cW, iW)
            }
          }

          function sW(WW, iW, OW, mW, NW, PW, LW, cW, wW) {
            let tW = [],
              ZW = [];
            for (; WW.length > mW;) tW.push(WW.pop()), ZW.push(iW.pop() + OW - NW);
            WW.push(MW(EW.types[LW], tW, ZW, PW - NW, cW - PW, wW)), iW.push(NW - OW)
          }

          function MW(WW, iW, OW, mW, EW, NW, LW) {
            if (NW) {
              let WW = [PW.contextHash, NW];
              LW = LW ? [WW].concat(LW) : [WW]
            }
            if (EW > 25) {
              let WW = [PW.lookAhead, EW];
              LW = LW ? [WW].concat(LW) : [WW]
            }
            return new AW(WW, iW, OW, mW, LW)
          }

          function KW(WW, iW) {
            let OW = wW.fork(),
              mW = 0,
              EW = 0,
              PW = 0,
              LW = OW.end - NW,
              tW = {
                size: 0,
                start: 0,
                skip: 0
              };
            WW: for (let NW = OW.pos - WW; OW.pos > NW;) {
              let WW = OW.size;
              if (OW.id == iW && WW >= 0) {
                tW.size = mW, tW.start = EW, tW.skip = PW, PW += 4, mW += 4, OW.next();
                continue
              }
              let wW = OW.pos - WW;
              if (WW < 0 || wW < NW || OW.start < LW) break;
              let ZW = OW.id >= cW ? 4 : 0,
                xW = OW.start;
              for (OW.next(); OW.pos > wW;) {
                if (OW.size < 0) {
                  if (-3 != OW.size && -4 != OW.size) break WW;
                  ZW += 4
                } else OW.id >= cW && (ZW += 4);
                OW.next()
              }
              EW = xW, mW += WW, PW += ZW
            }
            return (iW < 0 || mW == WW) && (tW.size = mW, tW.start = EW, tW.skip = PW), tW.size > 4 ? tW : void 0
          }

          function SW(WW, iW, OW) {
            let {
              id: mW,
              start: EW,
              end: NW,
              size: PW
            } = wW;
            if (wW.next(), PW >= 0 && mW < cW) {
              let LW = OW;
              if (PW > 4) {
                let mW = wW.pos - (PW - 4);
                for (; wW.pos > mW;) OW = SW(WW, iW, OW)
              }
              iW[--OW] = LW, iW[--OW] = NW - WW, iW[--OW] = EW - WW, iW[--OW] = mW
            } else - 3 == PW ? ZW = mW : -4 == PW && (xW = mW);
            return OW
          }
          let YW = [],
            yW = [];
          for (; wW.pos > 0;) lW(WW.start || 0, WW.bufferStart || 0, YW, yW, -1, 0);
          let TW = null !== (iW = WW.length) && void 0 !== iW ? iW : YW.length ? yW[0] + YW[0].length : 0;
          return new AW(tW[WW.topID], YW.reverse(), yW.reverse(), TW)
        }(WW)
      }
    }
    AW.empty = new AW(wW.none, [], [], 0);
    class bW {
      constructor(WW, iW) {
        this.buffer = WW, this.index = iW
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
        return new bW(this.buffer, this.index)
      }
    }
    class jW {
      constructor(WW, iW, OW) {
        this.buffer = WW, this.length = iW, this.set = OW
      }
      get type() {
        return wW.none
      }
      toString() {
        let WW = [];
        for (let iW = 0; iW < this.buffer.length;) WW.push(this.childString(iW)), iW = this.buffer[iW + 3];
        return WW.join(",")
      }
      childString(WW) {
        let iW = this.buffer[WW],
          OW = this.buffer[WW + 3],
          mW = this.set.types[iW],
          EW = mW.name;
        if (/\W/.test(EW) && !mW.isError && (EW = JSON.stringify(EW)), OW == (WW += 4)) return EW;
        let NW = [];
        for (; WW < OW;) NW.push(this.childString(WW)), WW = this.buffer[WW + 3];
        return EW + "(" + NW.join(",") + ")"
      }
      findChild(WW, iW, OW, mW, EW) {
        let {
          buffer: NW
        } = this, PW = -1;
        for (let LW = WW; LW != iW && !(UW(EW, mW, NW[LW + 1], NW[LW + 2]) && (PW = LW, OW > 0)); LW = NW[LW + 3]);
        return PW
      }
      slice(WW, iW, OW) {
        let mW = this.buffer,
          EW = new Uint16Array(iW - WW),
          NW = 0;
        for (let PW = WW, LW = 0; PW < iW;) {
          EW[LW++] = mW[PW++], EW[LW++] = mW[PW++] - OW;
          let iW = EW[LW++] = mW[PW++] - OW;
          EW[LW++] = mW[PW++] - WW, NW = Math.max(NW, iW)
        }
        return new jW(EW, NW, this.set)
      }
    }

    function UW(WW, iW, OW, mW) {
      switch (WW) {
        case -2:
          return OW < iW;
        case -1:
          return mW >= iW && OW < iW;
        case 0:
          return OW < iW && mW > iW;
        case 1:
          return OW <= iW && mW > iW;
        case 2:
          return mW > iW;
        case 4:
          return !0
      }
    }

    function kW(WW, iW, OW, mW) {
      for (var EW; WW.from == WW.to || (OW < 1 ? WW.from >= iW : WW.from > iW) || (OW > -1 ? WW.to <= iW : WW.to < iW);) {
        let iW = !mW && WW instanceof MW && WW.index < 0 ? null : WW.parent;
        if (!iW) return WW;
        WW = iW
      }
      let NW = mW ? 0 : lW.IgnoreOverlays;
      if (mW)
        for (let PW = WW, LW = PW.parent; LW; PW = LW, LW = PW.parent) PW instanceof MW && PW.index < 0 && (null === (EW = LW.enter(iW, OW, NW)) || void 0 === EW ? void 0 : EW.from) != PW.from && (WW = LW);
      for (;;) {
        let mW = WW.enter(iW, OW, NW);
        if (!mW) return WW;
        WW = mW
      }
    }
    class sW {
      cursor() {
        return new hW(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(WW) {
        let iW = KW(this, WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return iW.length ? iW[0] : null
      }
      getChildren(WW) {
        return KW(this, WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(WW) {
        return kW(this, WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(WW) {
        return kW(this, WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(WW) {
        return SW(this.parent, WW)
      }
      enterUnfinishedNodesBefore(WW) {
        let iW = this.childBefore(WW),
          OW = this;
        for (; iW;) {
          let WW = iW.lastChild;
          if (!WW || WW.to != iW.to) break;
          WW.type.isError && WW.from == WW.to ? (OW = iW, iW = WW.prevSibling) : iW = WW
        }
        return OW
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class MW extends sW {
      constructor(WW, iW, OW, mW) {
        super(), this._tree = WW, this.from = iW, this.index = OW, this._parent = mW
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
      nextChild(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let NW = this;;) {
          for (let {
              children: PW,
              positions: cW
            } = NW._tree, wW = iW > 0 ? PW.length : -1; WW != wW; WW += iW) {
            let wW, tW = PW[WW],
              ZW = cW[WW] + NW.from;
            if (EW & lW.EnterBracketed && tW instanceof AW && (wW = LW.get(tW)) && !wW.overlay && wW.bracketed && OW >= ZW && OW <= ZW + tW.length || UW(mW, OW, ZW, ZW + tW.length))
              if (tW instanceof jW) {
                if (EW & lW.ExcludeBuffers) continue;
                let PW = tW.findChild(0, tW.buffer.length, iW, OW - ZW, mW);
                if (PW > -1) return new yW(new YW(NW, tW, WW, ZW), null, PW)
              } else if (EW & lW.IncludeAnonymous || !tW.type.isAnonymous || HW(tW)) {
              let PW;
              if (!(EW & lW.IgnoreMounts) && (PW = LW.get(tW)) && !PW.overlay) return new MW(PW.tree, ZW, WW, NW);
              let cW = new MW(tW, ZW, WW, NW);
              return EW & lW.IncludeAnonymous || !cW.type.isAnonymous ? cW : cW.nextChild(iW < 0 ? tW.children.length - 1 : 0, iW, OW, mW, EW)
            }
          }
          if (EW & lW.IncludeAnonymous || !NW.type.isAnonymous) return null;
          if (WW = NW.index >= 0 ? NW.index + iW : iW < 0 ? -1 : NW._parent._tree.children.length, NW = NW._parent, !NW) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(WW) {
        return this.nextChild(0, 1, WW, 2)
      }
      childBefore(WW) {
        return this.nextChild(this._tree.children.length - 1, -1, WW, -2)
      }
      prop(WW) {
        return this._tree.prop(WW)
      }
      enter(WW, iW) {
        let OW, mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(mW & lW.IgnoreOverlays) && (OW = LW.get(this._tree)) && OW.overlay) {
          let EW = WW - this.from,
            NW = mW & lW.EnterBracketed && OW.bracketed;
          for (let {
              from: WW,
              to: mW
            }
            of OW.overlay)
            if ((iW > 0 || NW ? WW <= EW : WW < EW) && (iW < 0 || NW ? mW >= EW : mW > EW)) return new MW(OW.tree, OW.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, WW, iW, mW)
      }
      nextSignificantParent() {
        let WW = this;
        for (; WW.type.isAnonymous && WW._parent;) WW = WW._parent;
        return WW
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

    function KW(WW, iW, OW, mW) {
      let EW = WW.cursor(),
        NW = [];
      if (!EW.firstChild()) return NW;
      if (null != OW)
        for (let PW = !1; !PW;)
          if (PW = EW.type.is(OW), !EW.nextSibling()) return NW;
      for (;;) {
        if (null != mW && EW.type.is(mW)) return NW;
        if (EW.type.is(iW) && NW.push(EW.node), !EW.nextSibling()) return null == mW ? NW : []
      }
    }

    function SW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iW.length - 1;
      for (let mW = WW; OW >= 0; mW = mW.parent) {
        if (!mW) return !1;
        if (!mW.type.isAnonymous) {
          if (iW[OW] && iW[OW] != mW.name) return !1;
          OW--
        }
      }
      return !0
    }
    class YW {
      constructor(WW, iW, OW, mW) {
        this.parent = WW, this.buffer = iW, this.index = OW, this.start = mW
      }
    }
    class yW extends sW {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(WW, iW, OW) {
        super(), this.context = WW, this._parent = iW, this.index = OW, this.type = WW.buffer.set.types[WW.buffer.buffer[OW]]
      }
      child(WW, iW, OW) {
        let {
          buffer: mW
        } = this.context, EW = mW.findChild(this.index + 4, mW.buffer[this.index + 3], WW, iW - this.context.start, OW);
        return EW < 0 ? null : new yW(this.context, this, EW)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(WW) {
        return this.child(1, WW, 2)
      }
      childBefore(WW) {
        return this.child(-1, WW, -2)
      }
      prop(WW) {
        return this.type.prop(WW)
      }
      enter(WW, iW) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & lW.ExcludeBuffers) return null;
        let {
          buffer: OW
        } = this.context, mW = OW.findChild(this.index + 4, OW.buffer[this.index + 3], iW > 0 ? 1 : -1, WW - this.context.start, iW);
        return mW < 0 ? null : new yW(this.context, this, mW)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(WW) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + WW, WW, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: WW
        } = this.context, iW = WW.buffer[this.index + 3];
        return iW < (this._parent ? WW.buffer[this._parent.index + 3] : WW.buffer.length) ? new yW(this.context, this._parent, iW) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: WW
        } = this.context, iW = this._parent ? this._parent.index + 4 : 0;
        return this.index == iW ? this.externalSibling(-1) : new yW(this.context, this._parent, WW.findChild(iW, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let WW = [],
          iW = [],
          {
            buffer: OW
          } = this.context,
          mW = this.index + 4,
          EW = OW.buffer[this.index + 3];
        if (EW > mW) {
          let NW = OW.buffer[this.index + 1];
          WW.push(OW.slice(mW, EW, NW)), iW.push(0)
        }
        return new AW(this.type, WW, iW, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function TW(WW) {
      if (!WW.length) return null;
      let iW = 0,
        OW = WW[0];
      for (let NW = 1; NW < WW.length; NW++) {
        let mW = WW[NW];
        (mW.from > OW.from || mW.to < OW.to) && (OW = mW, iW = NW)
      }
      let mW = OW instanceof MW && OW.index < 0 ? null : OW.parent,
        EW = WW.slice();
      return mW ? EW[iW] = mW : EW.splice(iW, 1), new JW(EW, OW)
    }
    class JW {
      constructor(WW, iW) {
        this.heads = WW, this.node = iW
      }
      get next() {
        return TW(this.heads)
      }
    }
    class hW {
      get name() {
        return this.type.name
      }
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = iW & ~lW.EnterBracketed, WW instanceof MW) this.yieldNode(WW);
        else {
          this._tree = WW.context.parent, this.buffer = WW.context;
          for (let iW = WW._parent; iW; iW = iW._parent) this.stack.unshift(iW.index);
          this.bufferNode = WW, this.yieldBuf(WW.index)
        }
      }
      yieldNode(WW) {
        return !!WW && (this._tree = WW, this.type = WW.type, this.from = WW.from, this.to = WW.to, !0)
      }
      yieldBuf(WW, iW) {
        this.index = WW;
        let {
          start: OW,
          buffer: mW
        } = this.buffer;
        return this.type = iW || mW.set.types[mW.buffer[WW]], this.from = OW + mW.buffer[WW + 1], this.to = OW + mW.buffer[WW + 2], !0
      }
      yield(WW) {
        return !!WW && (WW instanceof MW ? (this.buffer = null, this.yieldNode(WW)) : (this.buffer = WW.context, this.yieldBuf(WW.index, WW.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(WW, iW, OW) {
        if (!this.buffer) return this.yield(this._tree.nextChild(WW < 0 ? this._tree._tree.children.length - 1 : 0, WW, iW, OW, this.mode));
        let {
          buffer: mW
        } = this.buffer, EW = mW.findChild(this.index + 4, mW.buffer[this.index + 3], WW, iW - this.buffer.start, OW);
        return !(EW < 0) && (this.stack.push(this.index), this.yieldBuf(EW))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(WW) {
        return this.enterChild(1, WW, 2)
      }
      childBefore(WW) {
        return this.enterChild(-1, WW, -2)
      }
      enter(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(OW & lW.ExcludeBuffers) && this.enterChild(1, WW, iW) : this.yield(this._tree.enter(WW, iW, OW))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & lW.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let WW = this.mode & lW.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(WW)
      }
      sibling(WW) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + WW, WW, 0, 4, this.mode));
        let {
          buffer: iW
        } = this.buffer, OW = this.stack.length - 1;
        if (WW < 0) {
          let WW = OW < 0 ? 0 : this.stack[OW] + 4;
          if (this.index != WW) return this.yieldBuf(iW.findChild(WW, this.index, -1, 0, 4))
        } else {
          let WW = iW.buffer[this.index + 3];
          if (WW < (OW < 0 ? iW.buffer.length : iW.buffer[this.stack[OW] + 3])) return this.yieldBuf(WW)
        }
        return OW < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + WW, WW, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(WW) {
        let iW, OW, {
          buffer: mW
        } = this;
        if (mW) {
          if (WW > 0) {
            if (this.index < mW.buffer.buffer.length) return !1
          } else
            for (let WW = 0; WW < this.index; WW++)
              if (mW.buffer.buffer[WW + 3] < this.index) return !1;
          ({
            index: iW,
            parent: OW
          } = mW)
        } else({
          index: iW,
          _parent: OW
        } = this._tree);
        for (; OW;
          ({
            index: iW,
            _parent: OW
          } = OW))
          if (iW > -1)
            for (let mW = iW + WW, EW = WW < 0 ? -1 : OW._tree.children.length; mW != EW; mW += WW) {
              let WW = OW._tree.children[mW];
              if (this.mode & lW.IncludeAnonymous || WW instanceof jW || !WW.type.isAnonymous || HW(WW)) return !1
            }
        return !0
      }
      move(WW, iW) {
        if (iW && this.enterChild(WW, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(WW)) return !0;
          if (this.atLastNode(WW) || !this.parent()) return !1
        }
      }
      next() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, WW)
      }
      prev() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, WW)
      }
      moveTo(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (iW < 1 ? this.from >= WW : this.from > WW) || (iW > -1 ? this.to <= WW : this.to < WW)) && this.parent(););
        for (; this.enterChild(1, WW, iW););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let WW = this.bufferNode,
          iW = null,
          OW = 0;
        if (WW && WW.context == this.buffer) WW: for (let mW = this.index, EW = this.stack.length; EW >= 0;) {
          for (let NW = WW; NW; NW = NW._parent)
            if (NW.index == mW) {
              if (mW == this.index) return NW;
              iW = NW, OW = EW + 1;
              break WW
            } mW = this.stack[--EW]
        }
        for (let mW = OW; mW < this.stack.length; mW++) iW = new yW(this.buffer, iW, this.stack[mW]);
        return this.bufferNode = new yW(this.buffer, iW, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(WW, iW) {
        for (let OW = 0;;) {
          let mW = !1;
          if (this.type.isAnonymous || !1 !== WW(this)) {
            if (this.firstChild()) {
              OW++;
              continue
            }
            this.type.isAnonymous || (mW = !0)
          }
          for (;;) {
            if (mW && iW && iW(this), mW = this.type.isAnonymous, !OW) return;
            if (this.nextSibling()) break;
            this.parent(), OW--, mW = !0
          }
        }
      }
      matchContext(WW) {
        if (!this.buffer) return SW(this.node.parent, WW);
        let {
          buffer: iW
        } = this.buffer, {
          types: OW
        } = iW.set;
        for (let mW = WW.length - 1, EW = this.stack.length - 1; mW >= 0; EW--) {
          if (EW < 0) return SW(this._tree, WW, mW);
          let NW = OW[iW.buffer[this.stack[EW]]];
          if (!NW.isAnonymous) {
            if (WW[mW] && WW[mW] != NW.name) return !1;
            mW--
          }
        }
        return !0
      }
    }

    function HW(WW) {
      return WW.children.some((WW => WW instanceof jW || !WW.type.isAnonymous || HW(WW)))
    }
    const nW = new WeakMap;

    function uW(WW, iW) {
      if (!WW.isAnonymous || iW instanceof jW || iW.type != WW) return 1;
      let OW = nW.get(iW);
      if (null == OW) {
        OW = 1;
        for (let mW of iW.children) {
          if (mW.type != WW || !(mW instanceof AW)) {
            OW = 1;
            break
          }
          OW += uW(WW, mW)
        }
        nW.set(iW, OW)
      }
      return OW
    }

    function oW(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
      let wW = 0;
      for (let lW = mW; lW < EW; lW++) wW += uW(WW, iW[lW]);
      let tW = Math.ceil(1.5 * wW / 8),
        ZW = [],
        xW = [];
      return function iW(OW, mW, EW, PW, LW) {
        for (let wW = EW; wW < PW;) {
          let EW = wW,
            lW = mW[wW],
            AW = uW(WW, OW[wW]);
          for (wW++; wW < PW; wW++) {
            let iW = uW(WW, OW[wW]);
            if (AW + iW >= tW) break;
            AW += iW
          }
          if (wW == EW + 1) {
            if (AW > tW) {
              let WW = OW[EW];
              iW(WW.children, WW.positions, 0, WW.children.length, mW[EW] + LW);
              continue
            }
            ZW.push(OW[EW])
          } else {
            let iW = mW[wW - 1] + OW[wW - 1].length - lW;
            ZW.push(oW(WW, OW, mW, EW, wW, lW, iW, null, cW))
          }
          xW.push(lW + LW - NW)
        }
      }(iW, OW, mW, EW, 0), (LW || cW)(ZW, xW, PW)
    }
    class dW {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(WW, iW, OW) {
        let mW = this.map.get(WW);
        mW || this.map.set(WW, mW = new Map), mW.set(iW, OW)
      }
      getBuffer(WW, iW) {
        let OW = this.map.get(WW);
        return OW && OW.get(iW)
      }
      set(WW, iW) {
        WW instanceof yW ? this.setBuffer(WW.context.buffer, WW.index, iW) : WW instanceof MW && this.map.set(WW.tree, iW)
      }
      get(WW) {
        return WW instanceof yW ? this.getBuffer(WW.context.buffer, WW.index) : WW instanceof MW ? this.map.get(WW.tree) : void 0
      }
      cursorSet(WW, iW) {
        WW.buffer ? this.setBuffer(WW.buffer.buffer, WW.index, iW) : this.map.set(WW.tree, iW)
      }
      cursorGet(WW) {
        return WW.buffer ? this.getBuffer(WW.buffer.buffer, WW.index) : this.map.get(WW.tree)
      }
    }
    class eW {
      constructor(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = WW, this.to = iW, this.tree = OW, this.offset = mW, this.open = (EW ? 1 : 0) | (NW ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = [new eW(0, WW.length, WW, 0, !1, OW)];
        for (let EW of iW) EW.to > WW.length && mW.push(EW);
        return mW
      }
      static applyChanges(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!iW.length) return WW;
        let mW = [],
          EW = 1,
          NW = WW.length ? WW[0] : null;
        for (let PW = 0, LW = 0, cW = 0;; PW++) {
          let wW = PW < iW.length ? iW[PW] : null,
            tW = wW ? wW.fromA : 1e9;
          if (tW - LW >= OW)
            for (; NW && NW.from < tW;) {
              let iW = NW;
              if (LW >= iW.from || tW <= iW.to || cW) {
                let WW = Math.max(iW.from, LW) - cW,
                  OW = Math.min(iW.to, tW) - cW;
                iW = WW >= OW ? null : new eW(WW, OW, iW.tree, iW.offset + cW, PW > 0, !!wW)
              }
              if (iW && mW.push(iW), NW.to > tW) break;
              NW = EW < WW.length ? WW[EW++] : null
            }
          if (!wW) break;
          LW = wW.toA, cW = wW.toA - wW.toB
        }
        return mW
      }
    }
    class vW {
      startParse(WW, iW, OW) {
        return "string" == typeof WW && (WW = new gW(WW)), OW = OW ? OW.length ? OW.map((WW => new NW(WW.from, WW.to))) : [new NW(0, 0)] : [new NW(0, WW.length)], this.createParse(WW, iW || [], OW)
      }
      parse(WW, iW, OW) {
        let mW = this.startParse(WW, iW, OW);
        for (;;) {
          let WW = mW.advance();
          if (WW) return WW
        }
      }
    }
    class gW {
      constructor(WW) {
        this.string = WW
      }
      get length() {
        return this.string.length
      }
      chunk(WW) {
        return this.string.slice(WW)
      }
      get lineChunks() {
        return !1
      }
      read(WW, iW) {
        return this.string.slice(WW, iW)
      }
    }
    new PW({
      perNode: !0
    })
  },
  53532: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => xW,
      f: () => cW,
      i: () => ZW,
      l: () => nW
    });
    var mW = OW(53528);
    let EW = 0;
    class NW {
      constructor(WW, iW, OW, mW) {
        this.name = WW, this.set = iW, this.base = OW, this.modified = mW, this.id = EW++
      }
      toString() {
        let {
          name: WW
        } = this;
        for (let iW of this.modified) iW.name && (WW = `${iW.name}(${WW})`);
        return WW
      }
      static define(WW, iW) {
        let OW = "string" == typeof WW ? WW : "?";
        if (WW instanceof NW && (iW = WW), null === iW || void 0 === iW ? void 0 : iW.base) throw new Error("Can not derive from a modified tag");
        let mW = new NW(OW, [], null, []);
        if (mW.set.push(mW), iW)
          for (let EW of iW.set) mW.set.push(EW);
        return mW
      }
      static defineModifier(WW) {
        let iW = new LW(WW);
        return WW => WW.modified.indexOf(iW) > -1 ? WW : LW.get(WW.base || WW, WW.modified.concat(iW).sort(((WW, iW) => WW.id - iW.id)))
      }
    }
    let PW = 0;
    class LW {
      constructor(WW) {
        this.name = WW, this.instances = [], this.id = PW++
      }
      static get(WW, iW) {
        if (!iW.length) return WW;
        let OW = iW[0].instances.find((OW => {
          return OW.base == WW && (mW = iW, EW = OW.modified, mW.length == EW.length && mW.every(((WW, iW) => WW == EW[iW])));
          var mW, EW
        }));
        if (OW) return OW;
        let mW = [],
          EW = new NW(WW.name, mW, WW, iW);
        for (let NW of iW) NW.instances.push(EW);
        let PW = function(WW) {
          let iW = [
            []
          ];
          for (let OW = 0; OW < WW.length; OW++)
            for (let mW = 0, EW = iW.length; mW < EW; mW++) iW.push(iW[mW].concat(WW[OW]));
          return iW.sort(((WW, iW) => iW.length - WW.length))
        }(iW);
        for (let NW of WW.set)
          if (!NW.modified.length)
            for (let WW of PW) mW.push(LW.get(NW, WW));
        return EW
      }
    }

    function cW(WW) {
      let iW = Object.create(null);
      for (let OW in WW) {
        let mW = WW[OW];
        Array.isArray(mW) || (mW = [mW]);
        for (let WW of OW.split(" "))
          if (WW) {
            let OW = [],
              EW = 2,
              NW = WW;
            for (let iW = 0;;) {
              if ("..." == NW && iW > 0 && iW + 3 == WW.length) {
                EW = 1;
                break
              }
              let mW = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(NW);
              if (!mW) throw new RangeError("Invalid path: " + WW);
              if (OW.push("*" == mW[0] ? "" : '"' == mW[0][0] ? JSON.parse(mW[0]) : mW[0]), iW += mW[0].length, iW == WW.length) break;
              let PW = WW[iW++];
              if (iW == WW.length && "!" == PW) {
                EW = 0;
                break
              }
              if ("/" != PW) throw new RangeError("Invalid path: " + WW);
              NW = WW.slice(iW)
            }
            let PW = OW.length - 1,
              LW = OW[PW];
            if (!LW) throw new RangeError("Invalid path: " + WW);
            let cW = new tW(mW, EW, PW > 0 ? OW.slice(0, PW) : null);
            iW[LW] = cW.sort(iW[LW])
          }
      }
      return wW.add(iW)
    }
    const wW = new mW.j({
      combine(WW, iW) {
        let OW, mW, EW;
        for (; WW || iW;) {
          if (!WW || iW && WW.depth >= iW.depth ? (EW = iW, iW = iW.next) : (EW = WW, WW = WW.next), OW && OW.mode == EW.mode && !EW.context && !OW.context) continue;
          let NW = new tW(EW.tags, EW.mode, EW.context);
          OW ? OW.next = NW : mW = NW, OW = NW
        }
        return mW
      }
    });
    class tW {
      constructor(WW, iW, OW, mW) {
        this.tags = WW, this.mode = iW, this.context = OW, this.next = mW
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(WW) {
        return !WW || WW.depth < this.depth ? (this.next = WW, this) : (WW.next = this.sort(WW.next), WW)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function ZW(WW, iW) {
      let OW = Object.create(null);
      for (let NW of WW)
        if (Array.isArray(NW.tag))
          for (let WW of NW.tag) OW[WW.id] = NW.class;
        else OW[NW.tag.id] = NW.class;
      let {
        scope: mW,
        all: EW = null
      } = iW || {};
      return {
        style: WW => {
          let iW = EW;
          for (let mW of WW)
            for (let WW of mW.set) {
              let mW = OW[WW.id];
              if (mW) {
                iW = iW ? iW + " " + mW : mW;
                break
              }
            }
          return iW
        },
        scope: mW
      }
    }

    function xW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : WW.length,
        NW = new lW(mW, Array.isArray(iW) ? iW : [iW], OW);
      NW.highlightRange(WW.cursor(), mW, EW, "", NW.highlighters), NW.flush(EW)
    }
    tW.empty = new tW([], 2, null);
    class lW {
      constructor(WW, iW, OW) {
        this.at = WW, this.highlighters = iW, this.span = OW, this.class = ""
      }
      startSpan(WW, iW) {
        iW != this.class && (this.flush(WW), WW > this.at && (this.at = WW), this.class = iW)
      }
      flush(WW) {
        WW > this.at && this.class && this.span(this.at, WW, this.class)
      }
      highlightRange(WW, iW, OW, EW, NW) {
        let {
          type: PW,
          from: LW,
          to: cW
        } = WW;
        if (LW >= OW || cW <= iW) return;
        PW.isTop && (NW = this.highlighters.filter((WW => !WW.scope || WW.scope(PW))));
        let ZW = EW,
          xW = function(WW) {
            let iW = WW.type.prop(wW);
            for (; iW && iW.context && !WW.matchContext(iW.context);) iW = iW.next;
            return iW || null
          }(WW) || tW.empty,
          lW = function(WW, iW) {
            let OW = null;
            for (let mW of WW) {
              let WW = mW.style(iW);
              WW && (OW = OW ? OW + " " + WW : WW)
            }
            return OW
          }(NW, xW.tags);
        if (lW && (ZW && (ZW += " "), ZW += lW, 1 == xW.mode && (EW += (EW ? " " : "") + lW)), this.startSpan(Math.max(iW, LW), ZW), xW.opaque) return;
        let AW = WW.tree && WW.tree.prop(mW.j.mounted);
        if (AW && AW.overlay) {
          let mW = WW.node.enter(AW.overlay[0].from + LW, 1),
            PW = this.highlighters.filter((WW => !WW.scope || WW.scope(AW.tree.type))),
            wW = WW.firstChild();
          for (let tW = 0, xW = LW;; tW++) {
            let lW = tW < AW.overlay.length ? AW.overlay[tW] : null,
              bW = lW ? lW.from + LW : cW,
              jW = Math.max(iW, xW),
              UW = Math.min(OW, bW);
            if (jW < UW && wW)
              for (; WW.from < UW && (this.highlightRange(WW, jW, UW, EW, NW), this.startSpan(Math.min(UW, WW.to), ZW), !(WW.to >= bW) && WW.nextSibling()););
            if (!lW || bW > OW) break;
            xW = lW.to + LW, xW > iW && (this.highlightRange(mW.cursor(), Math.max(iW, lW.from + LW), Math.min(OW, xW), "", PW), this.startSpan(Math.min(OW, xW), ZW))
          }
          wW && WW.parent()
        } else if (WW.firstChild()) {
          AW && (EW = "");
          do {
            if (!(WW.to <= iW)) {
              if (WW.from >= OW) break;
              this.highlightRange(WW, iW, OW, EW, NW), this.startSpan(Math.min(OW, WW.to), ZW)
            }
          } while (WW.nextSibling());
          WW.parent()
        }
      }
    }
    const AW = NW.define,
      bW = AW(),
      jW = AW(),
      UW = AW(jW),
      kW = AW(jW),
      sW = AW(),
      MW = AW(sW),
      KW = AW(sW),
      SW = AW(),
      YW = AW(SW),
      yW = AW(),
      TW = AW(),
      JW = AW(),
      hW = AW(JW),
      HW = AW(),
      nW = {
        comment: bW,
        lineComment: AW(bW),
        blockComment: AW(bW),
        docComment: AW(bW),
        name: jW,
        variableName: AW(jW),
        typeName: UW,
        tagName: AW(UW),
        propertyName: kW,
        attributeName: AW(kW),
        className: AW(jW),
        labelName: AW(jW),
        namespace: AW(jW),
        macroName: AW(jW),
        literal: sW,
        string: MW,
        docString: AW(MW),
        character: AW(MW),
        attributeValue: AW(MW),
        number: KW,
        integer: AW(KW),
        float: AW(KW),
        bool: AW(sW),
        regexp: AW(sW),
        escape: AW(sW),
        color: AW(sW),
        url: AW(sW),
        keyword: yW,
        self: AW(yW),
        null: AW(yW),
        atom: AW(yW),
        unit: AW(yW),
        modifier: AW(yW),
        operatorKeyword: AW(yW),
        controlKeyword: AW(yW),
        definitionKeyword: AW(yW),
        moduleKeyword: AW(yW),
        operator: TW,
        derefOperator: AW(TW),
        arithmeticOperator: AW(TW),
        logicOperator: AW(TW),
        bitwiseOperator: AW(TW),
        compareOperator: AW(TW),
        updateOperator: AW(TW),
        definitionOperator: AW(TW),
        typeOperator: AW(TW),
        controlOperator: AW(TW),
        punctuation: JW,
        separator: AW(JW),
        bracket: hW,
        angleBracket: AW(hW),
        squareBracket: AW(hW),
        paren: AW(hW),
        brace: AW(hW),
        content: SW,
        heading: YW,
        heading1: AW(YW),
        heading2: AW(YW),
        heading3: AW(YW),
        heading4: AW(YW),
        heading5: AW(YW),
        heading6: AW(YW),
        contentSeparator: AW(SW),
        list: AW(SW),
        quote: AW(SW),
        emphasis: AW(SW),
        strong: AW(SW),
        link: AW(SW),
        monospace: AW(SW),
        strikethrough: AW(SW),
        inserted: AW(),
        deleted: AW(),
        changed: AW(),
        invalid: AW(),
        meta: HW,
        documentMeta: AW(HW),
        annotation: AW(HW),
        processingInstruction: AW(HW),
        definition: NW.defineModifier("definition"),
        constant: NW.defineModifier("constant"),
        function: NW.defineModifier("function"),
        standard: NW.defineModifier("standard"),
        local: NW.defineModifier("local"),
        special: NW.defineModifier("special")
      };
    for (let uW in nW) {
      let WW = nW[uW];
      WW instanceof NW && (WW.name = uW)
    }
    ZW([{
      tag: nW.link,
      class: "tok-link"
    }, {
      tag: nW.heading,
      class: "tok-heading"
    }, {
      tag: nW.emphasis,
      class: "tok-emphasis"
    }, {
      tag: nW.strong,
      class: "tok-strong"
    }, {
      tag: nW.keyword,
      class: "tok-keyword"
    }, {
      tag: nW.atom,
      class: "tok-atom"
    }, {
      tag: nW.bool,
      class: "tok-bool"
    }, {
      tag: nW.url,
      class: "tok-url"
    }, {
      tag: nW.labelName,
      class: "tok-labelName"
    }, {
      tag: nW.inserted,
      class: "tok-inserted"
    }, {
      tag: nW.deleted,
      class: "tok-deleted"
    }, {
      tag: nW.literal,
      class: "tok-literal"
    }, {
      tag: nW.string,
      class: "tok-string"
    }, {
      tag: nW.number,
      class: "tok-number"
    }, {
      tag: [nW.regexp, nW.escape, nW.special(nW.string)],
      class: "tok-string2"
    }, {
      tag: nW.variableName,
      class: "tok-variableName"
    }, {
      tag: nW.local(nW.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: nW.definition(nW.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: nW.special(nW.variableName),
      class: "tok-variableName2"
    }, {
      tag: nW.definition(nW.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: nW.typeName,
      class: "tok-typeName"
    }, {
      tag: nW.namespace,
      class: "tok-namespace"
    }, {
      tag: nW.className,
      class: "tok-className"
    }, {
      tag: nW.macroName,
      class: "tok-macroName"
    }, {
      tag: nW.propertyName,
      class: "tok-propertyName"
    }, {
      tag: nW.operator,
      class: "tok-operator"
    }, {
      tag: nW.comment,
      class: "tok-comment"
    }, {
      tag: nW.meta,
      class: "tok-meta"
    }, {
      tag: nW.invalid,
      class: "tok-invalid"
    }, {
      tag: nW.punctuation,
      class: "tok-punctuation"
    }])
  },
  53546: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => LW.e,
      f: () => PW.w,
      j: () => PW.H,
      m: () => PW.L,
      n: () => LW.i,
      o: () => TO,
      p: () => LW.H,
      q: () => LW._
    });
    var mW = OW(1450),
      EW = OW(1441),
      NW = OW(62),
      PW = OW(53507),
      LW = OW(53511),
      cW = OW(53522),
      wW = OW(53528);

    function tW(WW, iW) {
      return OW => {
        let {
          state: mW,
          dispatch: EW
        } = OW;
        if (mW.readOnly) return !1;
        let NW = WW(iW, mW);
        return !!NW && (EW(mW.update(NW)), !0)
      }
    }
    const ZW = tW(UW, 0),
      xW = tW(jW, 0),
      lW = tW(((WW, iW) => jW(WW, iW, function(WW) {
        let iW = [];
        for (let OW of WW.selection.kj) {
          let mW = WW.doc.lineAt(OW.from),
            EW = OW.to <= mW.to ? mW : WW.doc.lineAt(OW.to);
          EW.from > mW.from && EW.from == OW.to && (EW = OW.to == mW.to + 1 ? mW : WW.doc.lineAt(OW.to - 1));
          let NW = iW.length - 1;
          NW >= 0 && iW[NW].to > mW.from ? iW[NW].to = EW.to : iW.push({
            from: mW.from + /^\s*/.exec(mW.text)[0].length,
            to: EW.to
          })
        }
        return iW
      }(iW))), 0);

    function AW(WW, iW) {
      let OW = WW.languageDataAt("commentTokens", iW, 1);
      return OW.length ? OW[0] : {}
    }
    const bW = 50;

    function jW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iW.selection.kj,
        mW = OW.map((WW => AW(iW, WW.from).block));
      if (!mW.every((WW => WW))) return null;
      let EW = OW.map(((WW, OW) => function(WW, iW, OW, mW) {
        let EW, NW, {
            open: PW,
            close: LW
          } = iW,
          cW = WW.sliceDoc(OW - bW, OW),
          wW = WW.sliceDoc(mW, mW + bW),
          tW = /\s*$/.exec(cW)[0].length,
          ZW = /^\s*/.exec(wW)[0].length,
          xW = cW.length - tW;
        if (cW.slice(xW - PW.length, xW) == PW && wW.slice(ZW, ZW + LW.length) == LW) return {
          open: {
            pos: OW - tW,
            margin: tW && 1
          },
          close: {
            pos: mW + ZW,
            margin: ZW && 1
          }
        };
        mW - OW <= 2 * bW ? EW = NW = WW.sliceDoc(OW, mW) : (EW = WW.sliceDoc(OW, OW + bW), NW = WW.sliceDoc(mW - bW, mW));
        let lW = /^\s*/.exec(EW)[0].length,
          AW = /\s*$/.exec(NW)[0].length,
          jW = NW.length - AW - LW.length;
        return EW.slice(lW, lW + PW.length) == PW && NW.slice(jW, jW + LW.length) == LW ? {
          open: {
            pos: OW + lW + PW.length,
            margin: /\s/.test(EW.charAt(lW + PW.length)) ? 1 : 0
          },
          close: {
            pos: mW - AW - LW.length,
            margin: /\s/.test(NW.charAt(jW - 1)) ? 1 : 0
          }
        } : null
      }(iW, mW[OW], WW.from, WW.to)));
      if (2 != WW && !EW.every((WW => WW))) return {
        changes: iW.changes(OW.map(((WW, iW) => EW[iW] ? [] : [{
          from: WW.from,
          insert: mW[iW].open + " "
        }, {
          from: WW.to,
          insert: " " + mW[iW].close
        }])))
      };
      if (1 != WW && EW.some((WW => WW))) {
        let WW = [];
        for (let iW, OW = 0; OW < EW.length; OW++)
          if (iW = EW[OW]) {
            let EW = mW[OW],
              {
                open: NW,
                close: PW
              } = iW;
            WW.push({
              from: NW.pos - EW.open.length,
              to: NW.pos + NW.margin
            }, {
              from: PW.pos - PW.margin,
              to: PW.pos + EW.close.length
            })
          } return {
          changes: WW
        }
      }
      return null
    }

    function UW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iW.selection.kj,
        mW = [],
        EW = -1;
      WW: for (let {
          from: NW,
          to: PW
        }
        of OW) {
        let WW, OW = mW.length,
          LW = 1e9;
        for (let cW = NW; cW <= PW;) {
          let OW = iW.doc.lineAt(cW);
          if (void 0 == WW && (WW = AW(iW, OW.from).line, !WW)) continue WW;
          if (OW.from > EW && (NW == PW || PW > OW.from)) {
            EW = OW.from;
            let iW = /^\s*/.exec(OW.text)[0].length,
              NW = iW == OW.length,
              PW = OW.text.slice(iW, iW + WW.length) == WW ? iW : -1;
            iW < OW.text.length && iW < LW && (LW = iW), mW.push({
              line: OW,
              comment: PW,
              token: WW,
              indent: iW,
              empty: NW,
              single: !1
            })
          }
          cW = OW.to + 1
        }
        if (LW < 1e9)
          for (let iW = OW; iW < mW.length; iW++) mW[iW].indent < mW[iW].line.text.length && (mW[iW].indent = LW);
        mW.length == OW + 1 && (mW[OW].single = !0)
      }
      if (2 != WW && mW.some((WW => WW.comment < 0 && (!WW.empty || WW.single)))) {
        let WW = [];
        for (let {
            line: iW,
            token: EW,
            indent: NW,
            empty: PW,
            single: LW
          }
          of mW) !LW && PW || WW.push({
          from: iW.from + NW,
          insert: EW + " "
        });
        let OW = iW.changes(WW);
        return {
          changes: OW,
          selection: iW.selection.map(OW, 1)
        }
      }
      if (1 != WW && mW.some((WW => WW.comment >= 0))) {
        let WW = [];
        for (let {
            line: iW,
            comment: OW,
            token: EW
          }
          of mW)
          if (OW >= 0) {
            let mW = iW.from + OW,
              NW = mW + EW.length;
            " " == iW.text[NW - iW.from] && NW++, WW.push({
              from: mW,
              to: NW
            })
          } return {
          changes: WW
        }
      }
      return null
    }
    const kW = PW.d.define(),
      sW = PW.d.define(),
      MW = PW.p.define(),
      KW = PW.p.define({
        combine: WW => (0, PW.U)(WW, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (WW, iW) => iW
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (WW, iW) => (OW, mW) => WW(OW, mW) || iW(OW, mW)
        })
      }),
      SW = PW.L.define({
        create: () => pW.empty,
        update(WW, iW) {
          let OW = iW.state.facet(KW),
            mW = iW.annotation(kW);
          if (mW) {
            let EW = HW.fromTransaction(iW, mW.selection),
              NW = mW.side,
              PW = 0 == NW ? WW.undone : WW.done;
            return PW = EW ? nW(PW, PW.length, OW.minDepth, EW) : eW(PW, iW.startState.selection), new pW(0 == NW ? mW.rest : PW, 0 == NW ? PW : mW.rest)
          }
          let EW = iW.annotation(sW);
          if ("full" != EW && "before" != EW || (WW = WW.isolate()), !1 === iW.annotation(PW.P.addToHistory)) return iW.changes.empty ? WW : WW.addMapping(iW.changes.desc);
          let NW = HW.fromTransaction(iW),
            LW = iW.annotation(PW.P.time),
            cW = iW.annotation(PW.P.userEvent);
          return NW ? WW = WW.addChanges(NW, LW, cW, OW, iW) : iW.selection && (WW = WW.addSelection(iW.startState.selection, LW, cW, OW.newGroupDelay)), "full" != EW && "after" != EW || (WW = WW.isolate()), WW
        },
        toJSON: WW => ({
          done: WW.done.map((WW => WW.toJSON())),
          undone: WW.undone.map((WW => WW.toJSON()))
        }),
        fromJSON: WW => new pW(WW.done.map(HW.fromJSON), WW.undone.map(HW.fromJSON))
      });

    function YW(WW, iW) {
      return function(OW) {
        let {
          state: mW,
          dispatch: EW
        } = OW;
        if (!iW && mW.readOnly) return !1;
        let NW = mW.field(SW, !1);
        if (!NW) return !1;
        let PW = NW.pop(WW, mW, iW);
        return !!PW && (EW(PW), !0)
      }
    }
    const yW = YW(0, !1),
      TW = YW(1, !1),
      JW = YW(0, !0),
      hW = YW(1, !0);
    class HW {
      constructor(WW, iW, OW, mW, EW) {
        this.changes = WW, this.effects = iW, this.mapped = OW, this.startSelection = mW, this.selectionsAfter = EW
      }
      setSelAfter(WW) {
        return new HW(this.changes, this.effects, this.mapped, this.startSelection, WW)
      }
      toJSON() {
        var WW, iW, OW;
        return {
          changes: null === (WW = this.changes) || void 0 === WW ? void 0 : WW.toJSON(),
          mapped: null === (iW = this.mapped) || void 0 === iW ? void 0 : iW.toJSON(),
          startSelection: null === (OW = this.startSelection) || void 0 === OW ? void 0 : OW.toJSON(),
          selectionsAfter: this.selectionsAfter.map((WW => WW.toJSON()))
        }
      }
      static fromJSON(WW) {
        return new HW(WW.changes && PW.ChangeSet.fromJSON(WW.changes), [], WW.mapped && PW.e.fromJSON(WW.mapped), WW.startSelection && PW.l.fromJSON(WW.startSelection), WW.selectionsAfter.map(PW.l.fromJSON))
      }
      static fromTransaction(WW, iW) {
        let OW = oW;
        for (let mW of WW.startState.facet(MW)) {
          let iW = mW(WW);
          iW.length && (OW = OW.concat(iW))
        }
        return !OW.length && WW.changes.empty ? null : new HW(WW.changes.invert(WW.startState.doc), OW, void 0, iW || WW.startState.selection, oW)
      }
      static selection(WW) {
        return new HW(void 0, oW, void 0, void 0, WW)
      }
    }

    function nW(WW, iW, OW, mW) {
      let EW = iW + 1 > OW + 20 ? iW - OW - 1 : 0,
        NW = WW.slice(EW, iW);
      return NW.push(mW), NW
    }

    function uW(WW, iW) {
      return WW.length ? iW.length ? WW.concat(iW) : WW : iW
    }
    const oW = [],
      dW = 200;

    function eW(WW, iW) {
      if (WW.length) {
        let OW = WW[WW.length - 1],
          mW = OW.selectionsAfter.slice(Math.max(0, OW.selectionsAfter.length - dW));
        return mW.length && mW[mW.length - 1].eq(iW) ? WW : (mW.push(iW), nW(WW, WW.length - 1, 1e9, OW.setSelAfter(mW)))
      }
      return [HW.selection([iW])]
    }

    function vW(WW) {
      let iW = WW[WW.length - 1],
        OW = WW.slice();
      return OW[WW.length - 1] = iW.setSelAfter(iW.selectionsAfter.slice(0, iW.selectionsAfter.length - 1)), OW
    }

    function gW(WW, iW) {
      if (!WW.length) return WW;
      let OW = WW.length,
        mW = oW;
      for (; OW;) {
        let EW = DW(WW[OW - 1], iW, mW);
        if (EW.changes && !EW.changes.empty || EW.effects.length) {
          let iW = WW.slice(0, OW);
          return iW[OW - 1] = EW, iW
        }
        iW = EW.mapped, OW--, mW = EW.selectionsAfter
      }
      return mW.length ? [HW.selection(mW)] : oW
    }

    function DW(WW, iW, OW) {
      let mW = uW(WW.selectionsAfter.length ? WW.selectionsAfter.map((WW => WW.map(iW))) : oW, OW);
      if (!WW.changes) return HW.selection(mW);
      let EW = WW.changes.map(iW),
        NW = iW.mapDesc(WW.changes, !0),
        LW = WW.mapped ? WW.mapped.composeDesc(NW) : NW;
      return new HW(EW, PW.H.mapEffects(WW.effects, iW), LW, WW.startSelection.map(NW), mW)
    }
    const VW = /^(input\.type|delete)($|\.)/;
    class pW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = WW, this.undone = iW, this.prevTime = OW, this.prevUserEvent = mW
      }
      isolate() {
        return this.prevTime ? new pW(this.done, this.undone) : this
      }
      addChanges(WW, iW, OW, mW, EW) {
        let NW = this.done,
          LW = NW[NW.length - 1];
        return NW = LW && LW.changes && !LW.changes.empty && WW.changes && (!OW || VW.test(OW)) && (!LW.selectionsAfter.length && iW - this.prevTime < mW.newGroupDelay && mW.joinToEvent(EW, function(WW, iW) {
          let OW = [],
            mW = !1;
          return WW.iterChangedRanges(((WW, iW) => OW.push(WW, iW))), iW.iterChangedRanges(((WW, iW, EW, NW) => {
            for (let PW = 0; PW < OW.length;) {
              let WW = OW[PW++],
                iW = OW[PW++];
              NW >= WW && EW <= iW && (mW = !0)
            }
          })), mW
        }(LW.changes, WW.changes)) || "input.type.compose" == OW) ? nW(NW, NW.length - 1, mW.minDepth, new HW(WW.changes.compose(LW.changes), uW(PW.H.mapEffects(WW.effects, LW.changes), LW.effects), LW.mapped, LW.startSelection, oW)) : nW(NW, NW.length, mW.minDepth, WW), new pW(NW, oW, iW, OW)
      }
      addSelection(WW, iW, OW, mW) {
        let EW = this.done.length ? this.done[this.done.length - 1].selectionsAfter : oW;
        return EW.length > 0 && iW - this.prevTime < mW && OW == this.prevUserEvent && OW && /^select($|\.)/.test(OW) && (NW = EW[EW.length - 1], PW = WW, NW.kj.length == PW.kj.length && 0 === NW.kj.filter(((WW, iW) => WW.empty != PW.kj[iW].empty)).length) ? this : new pW(eW(this.done, WW), this.undone, iW, OW);
        var NW, PW
      }
      addMapping(WW) {
        return new pW(gW(this.done, WW), gW(this.undone, WW), this.prevTime, this.prevUserEvent)
      }
      pop(WW, iW, OW) {
        let mW = 0 == WW ? this.done : this.undone;
        if (0 == mW.length) return null;
        let EW = mW[mW.length - 1],
          NW = EW.selectionsAfter[0] || (EW.startSelection ? EW.startSelection.map(EW.changes.invertedDesc, 1) : iW.selection);
        if (OW && EW.selectionsAfter.length) return iW.update({
          selection: EW.selectionsAfter[EW.selectionsAfter.length - 1],
          annotations: kW.of({
            side: WW,
            rest: vW(mW),
            selection: NW
          }),
          userEvent: 0 == WW ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (EW.changes) {
          let OW = 1 == mW.length ? oW : mW.slice(0, mW.length - 1);
          return EW.mapped && (OW = gW(OW, EW.mapped)), iW.update({
            changes: EW.changes,
            selection: EW.startSelection,
            effects: EW.effects,
            annotations: kW.of({
              side: WW,
              rest: OW,
              selection: NW
            }),
            filter: !1,
            userEvent: 0 == WW ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    pW.empty = new pW(oW, oW);
    const fW = [{
      key: "Mod-z",
      run: yW,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: TW,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: TW,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: JW,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: hW,
      preventDefault: !0
    }];

    function CW(WW, iW) {
      return PW.l.create(WW.kj.map(iW), WW.mainIndex)
    }

    function XW(WW, iW) {
      return WW.update({
        selection: iW,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function BW(WW, iW) {
      let {
        state: OW,
        dispatch: mW
      } = WW, EW = CW(OW.selection, iW);
      return !EW.eq(OW.selection, !0) && (mW(XW(OW, EW)), !0)
    }

    function qW(WW, iW) {
      return PW.l.cursor(iW ? WW.to : WW.from)
    }

    function RW(WW, iW) {
      return BW(WW, (OW => OW.empty ? WW.moveByChar(OW, iW) : qW(OW, iW)))
    }

    function GW(WW) {
      return WW.textDirectionAt(WW.state.selection.main.head) == LW.d.LTR
    }
    const IW = WW => RW(WW, !GW(WW)),
      aW = WW => RW(WW, GW(WW));

    function rW(WW, iW) {
      return BW(WW, (OW => OW.empty ? WW.moveByGroup(OW, iW) : qW(OW, iW)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function zW(WW, iW, OW) {
      if (iW.type.prop(OW)) return !0;
      let mW = iW.to - iW.from;
      return mW && (mW > 2 || /[^\s,.;:]/.test(WW.sliceDoc(iW.from, iW.to))) || iW.firstChild
    }

    function FW(WW, iW, OW) {
      let mW, EW, NW = (0, cW.hb)(WW).resolveInner(iW.head),
        LW = OW ? wW.j.closedBy : wW.j.openedBy;
      for (let PW = iW.head;;) {
        let iW = OW ? NW.childAfter(PW) : NW.childBefore(PW);
        if (!iW) break;
        zW(WW, iW, LW) ? NW = iW : PW = OW ? iW.to : iW.from
      }
      return EW = NW.type.prop(LW) && (mW = OW ? (0, cW.Y)(WW, NW.from, 1) : (0, cW.Y)(WW, NW.to, -1)) && mW.matched ? OW ? mW.end.to : mW.end.from : OW ? NW.to : NW.from, PW.l.cursor(EW, OW ? -1 : 1)
    }

    function QW(WW, iW) {
      return BW(WW, (OW => {
        if (!OW.empty) return qW(OW, iW);
        let mW = WW.moveVertically(OW, iW);
        return mW.head != OW.head ? mW : WW.moveToLineBoundary(OW, iW)
      }))
    }
    const Wi = WW => QW(WW, !1),
      ii = WW => QW(WW, !0);

    function Oi(WW) {
      let iW, OW = WW.scrollDOM.clientHeight < WW.scrollDOM.scrollHeight - 2,
        mW = 0,
        EW = 0;
      if (OW) {
        for (let iW of WW.state.facet(LW.e.scrollMargins)) {
          let OW = iW(WW);
          (null === OW || void 0 === OW ? void 0 : OW.top) && (mW = Math.max(null === OW || void 0 === OW ? void 0 : OW.top, mW)), (null === OW || void 0 === OW ? void 0 : OW.bottom) && (EW = Math.max(null === OW || void 0 === OW ? void 0 : OW.bottom, EW))
        }
        iW = WW.scrollDOM.clientHeight - mW - EW
      } else iW = (WW.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: mW,
        marginBottom: EW,
        selfScroll: OW,
        height: Math.max(WW.defaultLineHeight, iW - 5)
      }
    }

    function mi(WW, iW) {
      let OW, mW = Oi(WW),
        {
          state: EW
        } = WW,
        NW = CW(EW.selection, (OW => OW.empty ? WW.moveVertically(OW, iW, mW.height) : qW(OW, iW)));
      if (NW.eq(EW.selection)) return !1;
      if (mW.selfScroll) {
        let iW = WW.coordsAtPos(EW.selection.main.head),
          PW = WW.scrollDOM.getBoundingClientRect(),
          cW = PW.top + mW.marginTop,
          wW = PW.bottom - mW.marginBottom;
        iW && iW.top > cW && iW.bottom < wW && (OW = LW.e.scrollIntoView(NW.main.head, {
          y: "start",
          yMargin: iW.top - cW
        }))
      }
      return WW.dispatch(XW(EW, NW), {
        effects: OW
      }), !0
    }
    const Ei = WW => mi(WW, !1),
      Ni = WW => mi(WW, !0);

    function Pi(WW, iW, OW) {
      let mW = WW.lineBlockAt(iW.head),
        EW = WW.moveToLineBoundary(iW, OW);
      if (EW.head == iW.head && EW.head != (OW ? mW.to : mW.from) && (EW = WW.moveToLineBoundary(iW, OW, !1)), !OW && EW.head == mW.from && mW.length) {
        let OW = /^\s*/.exec(WW.state.sliceDoc(mW.from, Math.min(mW.from + 100, mW.to)))[0].length;
        OW && iW.head != mW.from + OW && (EW = PW.l.cursor(mW.from + OW))
      }
      return EW
    }

    function Li(WW, iW, OW) {
      let mW = !1,
        EW = CW(WW.selection, (iW => {
          let EW = (0, cW.Y)(WW, iW.head, -1) || (0, cW.Y)(WW, iW.head, 1) || iW.head > 0 && (0, cW.Y)(WW, iW.head - 1, 1) || iW.head < WW.doc.length && (0, cW.Y)(WW, iW.head + 1, -1);
          if (!EW || !EW.end) return iW;
          mW = !0;
          let NW = EW.start.from == iW.head ? EW.end.to : EW.end.from;
          return OW ? PW.l.range(iW.anchor, NW) : PW.l.cursor(NW)
        }));
      return !!mW && (iW(XW(WW, EW)), !0)
    }

    function ci(WW, iW) {
      let OW = CW(WW.state.selection, (WW => {
        let OW = iW(WW);
        return PW.l.range(WW.anchor, OW.head, OW.goalColumn, OW.bidiLevel || void 0, OW.assoc)
      }));
      return !OW.eq(WW.state.selection) && (WW.dispatch(XW(WW.state, OW)), !0)
    }

    function wi(WW, iW) {
      return ci(WW, (OW => WW.moveByChar(OW, iW)))
    }
    const ti = WW => wi(WW, !GW(WW)),
      Zi = WW => wi(WW, GW(WW));

    function xi(WW, iW) {
      return ci(WW, (OW => WW.moveByGroup(OW, iW)))
    }

    function li(WW, iW) {
      return ci(WW, (OW => WW.moveVertically(OW, iW)))
    }
    const Ai = WW => li(WW, !1),
      bi = WW => li(WW, !0);

    function ji(WW, iW) {
      return ci(WW, (OW => WW.moveVertically(OW, iW, Oi(WW).height)))
    }
    const Ui = WW => ji(WW, !1),
      ki = WW => ji(WW, !0),
      si = WW => {
        let {
          state: iW,
          dispatch: OW
        } = WW;
        return OW(XW(iW, {
          anchor: 0
        })), !0
      },
      Mi = WW => {
        let {
          state: iW,
          dispatch: OW
        } = WW;
        return OW(XW(iW, {
          anchor: iW.doc.length
        })), !0
      },
      Ki = WW => {
        let {
          state: iW,
          dispatch: OW
        } = WW;
        return OW(XW(iW, {
          anchor: iW.selection.main.anchor,
          head: 0
        })), !0
      },
      Si = WW => {
        let {
          state: iW,
          dispatch: OW
        } = WW;
        return OW(XW(iW, {
          anchor: iW.selection.main.anchor,
          head: iW.doc.length
        })), !0
      };

    function Yi(WW, iW) {
      let {
        state: OW
      } = WW, mW = OW.selection, EW = OW.selection.kj.slice();
      for (let NW of OW.selection.kj) {
        let mW = OW.doc.lineAt(NW.head);
        if (iW ? mW.to < WW.state.doc.length : mW.from > 0)
          for (let OW = NW;;) {
            let NW = WW.moveVertically(OW, iW);
            if (NW.head < mW.from || NW.head > mW.to) {
              EW.some((WW => WW.head == NW.head)) || EW.push(NW);
              break
            }
            if (NW.head == OW.head) break;
            OW = NW
          }
      }
      return EW.length != mW.kj.length && (WW.dispatch(XW(OW, PW.l.create(EW, EW.length - 1))), !0)
    }

    function yi(WW, iW) {
      if (WW.state.readOnly) return !1;
      let OW = "delete.selection",
        {
          state: mW
        } = WW,
        EW = mW.changeByRange((mW => {
          let {
            from: EW,
            to: NW
          } = mW;
          if (EW == NW) {
            let PW = iW(mW);
            PW < EW ? (OW = "delete.backward", PW = Ti(WW, PW, !1)) : PW > EW && (OW = "delete.forward", PW = Ti(WW, PW, !0)), EW = Math.min(EW, PW), NW = Math.max(NW, PW)
          } else EW = Ti(WW, EW, !1), NW = Ti(WW, NW, !0);
          return EW == NW ? {
            range: mW
          } : {
            changes: {
              from: EW,
              to: NW
            },
            range: PW.l.cursor(EW, EW < mW.head ? -1 : 1)
          }
        }));
      return !EW.changes.empty && (WW.dispatch(mW.update(EW, {
        scrollIntoView: !0,
        userEvent: OW,
        effects: "delete.selection" == OW ? LW.e.announce.of(mW.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function Ti(WW, iW, OW) {
      if (WW instanceof LW.e)
        for (let mW of WW.state.facet(LW.e.atomicRanges).map((iW => iW(WW)))) mW.between(iW, iW, ((WW, mW) => {
          WW < iW && mW > iW && (iW = OW ? mW : WW)
        }));
      return iW
    }
    const Ji = (WW, iW, OW) => yi(WW, (mW => {
        let EW, NW, LW = mW.from,
          {
            state: wW
          } = WW,
          tW = wW.doc.lineAt(LW);
        if (OW && !iW && LW > tW.from && LW < tW.from + 200 && !/[^ \t]/.test(EW = tW.text.slice(0, LW - tW.from))) {
          if ("\t" == EW[EW.length - 1]) return LW - 1;
          let WW = (0, PW.X)(EW, wW.tabSize) % (0, cW.L)(wW) || (0, cW.L)(wW);
          for (let iW = 0; iW < WW && " " == EW[EW.length - 1 - iW]; iW++) LW--;
          NW = LW
        } else NW = (0, PW.$)(tW.text, LW - tW.from, iW, iW) + tW.from, NW == LW && tW.number != (iW ? wW.doc.lines : 1) ? NW += iW ? 1 : -1 : !iW && /[\ufe00-\ufe0f]/.test(tW.text.slice(NW - tW.from, LW - tW.from)) && (NW = (0, PW.$)(tW.text, NW - tW.from, !1, !1) + tW.from);
        return NW
      })),
      Hi = WW => Ji(WW, !1, !0),
      ni = WW => Ji(WW, !0, !1),
      ui = (WW, iW) => yi(WW, (OW => {
        let mW = OW.head,
          {
            state: EW
          } = WW,
          NW = EW.doc.lineAt(mW),
          LW = EW.charCategorizer(mW);
        for (let WW = null;;) {
          if (mW == (iW ? NW.to : NW.from)) {
            mW == OW.head && NW.number != (iW ? EW.doc.lines : 1) && (mW += iW ? 1 : -1);
            break
          }
          let cW = (0, PW.$)(NW.text, mW - NW.from, iW) + NW.from,
            wW = NW.text.slice(Math.min(mW, cW) - NW.from, Math.max(mW, cW) - NW.from),
            tW = LW(wW);
          if (null != WW && tW != WW) break;
          " " == wW && mW == OW.head || (WW = tW), mW = cW
        }
        return mW
      })),
      oi = WW => ui(WW, !1);

    function di(WW) {
      let iW = [],
        OW = -1;
      for (let mW of WW.selection.kj) {
        let EW = WW.doc.lineAt(mW.from),
          NW = WW.doc.lineAt(mW.to);
        if (mW.empty || mW.to != NW.from || (NW = WW.doc.lineAt(mW.to - 1)), OW >= EW.number) {
          let WW = iW[iW.length - 1];
          WW.to = NW.to, WW.kj.push(mW)
        } else iW.push({
          from: EW.from,
          to: NW.to,
          kj: [mW]
        });
        OW = NW.number + 1
      }
      return iW
    }

    function ei(WW, iW, OW) {
      if (WW.readOnly) return !1;
      let mW = [],
        EW = [];
      for (let NW of di(WW)) {
        if (OW ? NW.to == WW.doc.length : 0 == NW.from) continue;
        let iW = WW.doc.lineAt(OW ? NW.to + 1 : NW.from - 1),
          LW = iW.length + 1;
        if (OW) {
          mW.push({
            from: NW.to,
            to: iW.to
          }, {
            from: NW.from,
            insert: iW.text + WW.lineBreak
          });
          for (let iW of NW.kj) EW.push(PW.l.range(Math.min(WW.doc.length, iW.anchor + LW), Math.min(WW.doc.length, iW.head + LW)))
        } else {
          mW.push({
            from: iW.from,
            to: NW.from
          }, {
            from: NW.to,
            insert: WW.lineBreak + iW.text
          });
          for (let WW of NW.kj) EW.push(PW.l.range(WW.anchor - LW, WW.head - LW))
        }
      }
      return !!mW.length && (iW(WW.update({
        changes: mW,
        scrollIntoView: !0,
        selection: PW.l.create(EW, WW.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function vi(WW, iW, OW) {
      if (WW.readOnly) return !1;
      let mW = [];
      for (let NW of di(WW)) OW ? mW.push({
        from: NW.from,
        insert: WW.doc.slice(NW.from, NW.to) + WW.lineBreak
      }) : mW.push({
        from: NW.to,
        insert: WW.lineBreak + WW.doc.slice(NW.from, NW.to)
      });
      let EW = WW.changes(mW);
      return iW(WW.update({
        changes: EW,
        selection: WW.selection.map(EW, OW ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const gi = Di(!1);

    function Di(WW) {
      return iW => {
        let {
          state: OW,
          dispatch: mW
        } = iW;
        if (OW.readOnly) return !1;
        let EW = OW.changeByRange((iW => {
          let {
            from: mW,
            to: EW
          } = iW, NW = OW.doc.lineAt(mW), LW = !WW && mW == EW && function(WW, iW) {
            if (/\(\)|\[\]|\{\}/.test(WW.sliceDoc(iW - 1, iW + 1))) return {
              from: iW,
              to: iW
            };
            let OW, mW = (0, cW.hb)(WW).resolveInner(iW),
              EW = mW.childBefore(iW),
              NW = mW.childAfter(iW);
            return EW && NW && EW.to <= iW && NW.from >= iW && (OW = EW.type.prop(wW.j.closedBy)) && OW.indexOf(NW.name) > -1 && WW.doc.lineAt(EW.to).from == WW.doc.lineAt(NW.from).from && !/\S/.test(WW.sliceDoc(EW.to, NW.from)) ? {
              from: EW.to,
              to: NW.from
            } : null
          }(OW, mW);
          WW && (mW = EW = (EW <= NW.to ? NW : OW.doc.lineAt(EW)).to);
          let tW = new cW.e(OW, {
              simulateBreak: mW,
              simulateDoubleBreak: !!LW
            }),
            ZW = (0, cW.O)(tW, mW);
          for (null == ZW && (ZW = (0, PW.X)(/^\s*/.exec(OW.doc.lineAt(mW).text)[0], OW.tabSize)); EW < NW.to && /\s/.test(NW.text[EW - NW.from]);) EW++;
          LW ? ({
            from: mW,
            to: EW
          } = LW) : mW > NW.from && mW < NW.from + 100 && !/\S/.test(NW.text.slice(0, mW)) && (mW = NW.from);
          let xW = ["", (0, cW.V)(OW, ZW)];
          return LW && xW.push((0, cW.V)(OW, tW.lineIndent(NW.from, -1))), {
            changes: {
              from: mW,
              to: EW,
              insert: PW.M.of(xW)
            },
            range: PW.l.cursor(mW + 1 + xW[1].length)
          }
        }));
        return mW(OW.update(EW, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function Vi(WW, iW) {
      let OW = -1;
      return WW.changeByRange((mW => {
        let EW = [];
        for (let PW = mW.from; PW <= mW.to;) {
          let NW = WW.doc.lineAt(PW);
          NW.number > OW && (mW.empty || mW.to > NW.from) && (iW(NW, EW, mW), OW = NW.number), PW = NW.to + 1
        }
        let NW = WW.changes(EW);
        return {
          changes: EW,
          range: PW.l.range(NW.mapPos(mW.anchor, 1), NW.mapPos(mW.head, 1))
        }
      }))
    }
    const fi = WW => {
        let {
          state: iW,
          dispatch: OW
        } = WW;
        return !iW.readOnly && (OW(iW.update(Vi(iW, ((WW, OW) => {
          OW.push({
            from: WW.from,
            insert: iW.facet(cW.X)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      Ci = WW => {
        let {
          state: iW,
          dispatch: OW
        } = WW;
        return !iW.readOnly && (OW(iW.update(Vi(iW, ((WW, OW) => {
          let mW = /^\s*/.exec(WW.text)[0];
          if (!mW) return;
          let EW = (0, PW.X)(mW, iW.tabSize),
            NW = 0,
            LW = (0, cW.V)(iW, Math.max(0, EW - (0, cW.L)(iW)));
          for (; NW < mW.length && NW < LW.length && mW.charCodeAt(NW) == LW.charCodeAt(NW);) NW++;
          OW.push({
            from: WW.from + NW,
            to: WW.from + mW.length,
            insert: LW.slice(NW)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      Xi = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: WW => BW(WW, (iW => FW(WW.state, iW, !GW(WW)))),
        shift: WW => ci(WW, (iW => FW(WW.state, iW, !GW(WW))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: WW => BW(WW, (iW => FW(WW.state, iW, GW(WW)))),
        shift: WW => ci(WW, (iW => FW(WW.state, iW, GW(WW))))
      }, {
        key: "Alt-ArrowUp",
        run: WW => {
          let {
            state: iW,
            dispatch: OW
          } = WW;
          return ei(iW, OW, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: WW => {
          let {
            state: iW,
            dispatch: OW
          } = WW;
          return vi(iW, OW, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: WW => {
          let {
            state: iW,
            dispatch: OW
          } = WW;
          return ei(iW, OW, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: WW => {
          let {
            state: iW,
            dispatch: OW
          } = WW;
          return vi(iW, OW, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: WW => Yi(WW, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: WW => Yi(WW, !0)
      }, {
        key: "Escape",
        run: WW => {
          let {
            state: iW,
            dispatch: OW
          } = WW, mW = iW.selection, EW = null;
          return mW.kj.length > 1 ? EW = PW.l.create([mW.main]) : mW.main.empty || (EW = PW.l.create([PW.l.cursor(mW.main.head)])), !!EW && (OW(XW(iW, EW)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: Di(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: WW => {
          let {
            state: iW,
            dispatch: OW
          } = WW, mW = di(iW).map((WW => {
            let {
              from: OW,
              to: mW
            } = WW;
            return PW.l.range(OW, Math.min(mW + 1, iW.doc.length))
          }));
          return OW(iW.update({
            selection: PW.l.create(mW),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: WW => {
          let {
            state: iW,
            dispatch: OW
          } = WW, mW = CW(iW.selection, (WW => {
            let OW = (0, cW.hb)(iW),
              mW = OW.resolveStack(WW.from, 1);
            if (WW.empty) {
              let iW = OW.resolveStack(WW.from, -1);
              iW.node.from >= mW.node.from && iW.node.to <= mW.node.to && (mW = iW)
            }
            for (let iW = mW; iW; iW = iW.next) {
              let {
                node: OW
              } = iW;
              if ((OW.from < WW.from && OW.to >= WW.to || OW.to > WW.to && OW.from <= WW.from) && iW.next) return PW.l.range(OW.to, OW.from)
            }
            return WW
          }));
          return !mW.eq(iW.selection) && (OW(XW(iW, mW)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: Ci
      }, {
        key: "Mod-]",
        run: fi
      }, {
        key: "Mod-Alt-\\",
        run: WW => {
          let {
            state: iW,
            dispatch: OW
          } = WW;
          if (iW.readOnly) return !1;
          let mW = Object.create(null),
            EW = new cW.e(iW, {
              overrideIndentation: WW => {
                let iW = mW[WW];
                return null == iW ? -1 : iW
              }
            }),
            NW = Vi(iW, ((WW, OW, NW) => {
              let PW = (0, cW.O)(EW, WW.from);
              if (null == PW) return;
              /\S/.test(WW.text) || (PW = 0);
              let LW = /^\s*/.exec(WW.text)[0],
                wW = (0, cW.V)(iW, PW);
              (LW != wW || NW.from < WW.from + LW.length) && (mW[WW.from] = PW, OW.push({
                from: WW.from,
                to: WW.from + LW.length,
                insert: wW
              }))
            }));
          return NW.changes.empty || OW(iW.update(NW, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: WW => {
          if (WW.state.readOnly) return !1;
          let {
            state: iW
          } = WW, OW = iW.changes(di(iW).map((WW => {
            let {
              from: OW,
              to: mW
            } = WW;
            return OW > 0 ? OW-- : mW < iW.doc.length && mW++, {
              from: OW,
              to: mW
            }
          }))), mW = CW(iW.selection, (iW => {
            let OW;
            if (WW.lineWrapping) {
              let mW = WW.lineBlockAt(iW.head),
                EW = WW.coordsAtPos(iW.head, iW.assoc || 1);
              EW && (OW = mW.bottom + WW.documentTop - EW.bottom + WW.defaultLineHeight / 2)
            }
            return WW.moveVertically(iW, !0, OW)
          })).map(OW);
          return WW.dispatch({
            changes: OW,
            selection: mW,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: WW => {
          let {
            state: iW,
            dispatch: OW
          } = WW;
          return Li(iW, OW, !1)
        }
      }, {
        key: "Mod-/",
        run: WW => {
          let {
            state: iW
          } = WW, OW = iW.doc.lineAt(iW.selection.main.from), mW = AW(WW.state, OW.from);
          return mW.line ? ZW(WW) : !!mW.block && lW(WW)
        }
      }, {
        key: "Alt-A",
        run: xW
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: WW => (WW.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: IW,
        shift: ti,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: WW => rW(WW, !GW(WW)),
        shift: WW => xi(WW, !GW(WW)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: WW => BW(WW, (iW => Pi(WW, iW, !GW(WW)))),
        shift: WW => ci(WW, (iW => Pi(WW, iW, !GW(WW)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: aW,
        shift: Zi,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: WW => rW(WW, GW(WW)),
        shift: WW => xi(WW, GW(WW)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: WW => BW(WW, (iW => Pi(WW, iW, GW(WW)))),
        shift: WW => ci(WW, (iW => Pi(WW, iW, GW(WW)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: Wi,
        shift: Ai,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: si,
        shift: Ki
      }, {
        mac: "Ctrl-ArrowUp",
        run: Ei,
        shift: Ui
      }, {
        key: "ArrowDown",
        run: ii,
        shift: bi,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: Mi,
        shift: Si
      }, {
        mac: "Ctrl-ArrowDown",
        run: Ni,
        shift: ki
      }, {
        key: "PageUp",
        run: Ei,
        shift: Ui
      }, {
        key: "PageDown",
        run: Ni,
        shift: ki
      }, {
        key: "Home",
        run: WW => BW(WW, (iW => Pi(WW, iW, !1))),
        shift: WW => ci(WW, (iW => Pi(WW, iW, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: si,
        shift: Ki
      }, {
        key: "End",
        run: WW => BW(WW, (iW => Pi(WW, iW, !0))),
        shift: WW => ci(WW, (iW => Pi(WW, iW, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: Mi,
        shift: Si
      }, {
        key: "Enter",
        run: gi,
        shift: gi
      }, {
        key: "Mod-a",
        run: WW => {
          let {
            state: iW,
            dispatch: OW
          } = WW;
          return OW(iW.update({
            selection: {
              anchor: 0,
              head: iW.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: Hi,
        shift: Hi,
        preventDefault: !0
      }, {
        key: "Delete",
        run: ni,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: oi,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: WW => ui(WW, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: WW => yi(WW, (iW => {
          let OW = WW.moveToLineBoundary(iW, !1).head;
          return iW.head > OW ? OW : Math.max(0, iW.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: WW => yi(WW, (iW => {
          let OW = WW.moveToLineBoundary(iW, !0).head;
          return iW.head < OW ? OW : Math.min(WW.state.doc.length, iW.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: IW,
        shift: ti,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: aW,
        shift: Zi
      }, {
        key: "Ctrl-p",
        run: Wi,
        shift: Ai
      }, {
        key: "Ctrl-n",
        run: ii,
        shift: bi
      }, {
        key: "Ctrl-a",
        run: WW => BW(WW, (iW => PW.l.cursor(WW.lineBlockAt(iW.head).from, 1))),
        shift: WW => ci(WW, (iW => PW.l.cursor(WW.lineBlockAt(iW.head).from)))
      }, {
        key: "Ctrl-e",
        run: WW => BW(WW, (iW => PW.l.cursor(WW.lineBlockAt(iW.head).to, -1))),
        shift: WW => ci(WW, (iW => PW.l.cursor(WW.lineBlockAt(iW.head).to)))
      }, {
        key: "Ctrl-d",
        run: ni
      }, {
        key: "Ctrl-h",
        run: Hi
      }, {
        key: "Ctrl-k",
        run: WW => yi(WW, (iW => {
          let OW = WW.lineBlockAt(iW.head).to;
          return iW.head < OW ? OW : Math.min(WW.state.doc.length, iW.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: oi
      }, {
        key: "Ctrl-o",
        run: WW => {
          let {
            state: iW,
            dispatch: OW
          } = WW;
          if (iW.readOnly) return !1;
          let mW = iW.changeByRange((WW => ({
            changes: {
              from: WW.from,
              to: WW.to,
              insert: PW.M.of(["", ""])
            },
            range: PW.l.cursor(WW.from)
          })));
          return OW(iW.update(mW, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: WW => {
          let {
            state: iW,
            dispatch: OW
          } = WW;
          if (iW.readOnly) return !1;
          let mW = iW.changeByRange((WW => {
            if (!WW.empty || 0 == WW.from || WW.from == iW.doc.length) return {
              range: WW
            };
            let OW = WW.from,
              mW = iW.doc.lineAt(OW),
              EW = OW == mW.from ? OW - 1 : (0, PW.$)(mW.text, OW - mW.from, !1) + mW.from,
              NW = OW == mW.to ? OW + 1 : (0, PW.$)(mW.text, OW - mW.from, !0) + mW.from;
            return {
              changes: {
                from: EW,
                to: NW,
                insert: iW.doc.slice(OW, NW).append(iW.doc.slice(EW, OW))
              },
              range: PW.l.cursor(NW)
            }
          }));
          return !mW.changes.empty && (OW(iW.update(mW, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: Ni
      }].map((WW => ({
        mac: WW.key,
        run: WW.run,
        shift: WW.shift
      }))))),
      Bi = {
        key: "Tab",
        run: fi,
        shift: Ci
      };
    var qi = OW(53555),
      Ri = OW(53501),
      Gi = OW(53557),
      Ii = function(WW) {
        void 0 === WW && (WW = {});
        var {
          crosshairCursor: iW = !1
        } = WW, OW = [];
        !1 !== WW.closeBracketsKeymap && (OW = OW.concat(Ri.h)), !1 !== WW.defaultKeymap && (OW = OW.concat(Xi)), !1 !== WW.searchKeymap && (OW = OW.concat(qi.g)), !1 !== WW.historyKeymap && (OW = OW.concat(fW)), !1 !== WW.foldKeymap && (OW = OW.concat(cW.F)), !1 !== WW.completionKeymap && (OW = OW.concat(Ri.q)), !1 !== WW.lintKeymap && (OW = OW.concat(Gi.e));
        var mW = [];
        return !1 !== WW.lineNumbers && mW.push((0, LW.K)()), !1 !== WW.highlightActiveLineGutter && mW.push((0, LW.A)()), !1 !== WW.highlightSpecialChars && mW.push((0, LW.G)()), !1 !== WW.history && mW.push(function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [SW, KW.of(WW), LW.e.domEventHandlers({
            beforeinput(WW, iW) {
              let OW = "historyUndo" == WW.inputType ? yW : "historyRedo" == WW.inputType ? TW : null;
              return !!OW && (WW.preventDefault(), OW(iW))
            }
          })]
        }()), !1 !== WW.foldGutter && mW.push((0, cW.C)()), !1 !== WW.drawSelection && mW.push((0, LW.o)()), !1 !== WW.dropCursor && mW.push((0, LW.s)()), !1 !== WW.allowMultipleSelections && mW.push(PW.o.allowMultipleSelections.of(!0)), !1 !== WW.indentOnInput && mW.push((0, cW.T)()), !1 !== WW.syntaxHighlighting && mW.push((0, cW.cb)(cW.q, {
          fallback: !0
        })), !1 !== WW.bracketMatching && mW.push((0, cW.m)()), !1 !== WW.closeBrackets && mW.push((0, Ri.j)()), !1 !== WW.autocompletion && mW.push((0, Ri.d)()), !1 !== WW.rectangularSelection && mW.push((0, LW.R)()), !1 !== iW && mW.push((0, LW.n)()), !1 !== WW.highlightActiveLine && mW.push((0, LW.E)()), !1 !== WW.highlightSelectionMatches && mW.push((0, qi.e)()), WW.tabSize && "number" === typeof WW.tabSize && mW.push(cW.X.of(" ".repeat(WW.tabSize))), mW.concat([LW.I.of(OW.flat())]).filter(Boolean)
      },
      ai = OW(53532);
    const ri = "#e5c07b",
      zi = "#e06c75",
      Fi = "#56b6c2",
      Qi = "#ffffff",
      WO = "#abb2bf",
      iO = "#7d8799",
      OO = "#61afef",
      mO = "#98c379",
      EO = "#d19a66",
      NO = "#c678dd",
      PO = "#21252b",
      LO = "#2c313a",
      cO = "#282c34",
      wO = "#353a42",
      tO = "#3E4451",
      ZO = "#528bff",
      xO = LW.e.theme({
        "&": {
          color: WO,
          backgroundColor: cO
        },
        ".cm-content": {
          caretColor: ZO
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: ZO
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: tO
        },
        ".cm-panels": {
          backgroundColor: PO,
          color: WO
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
          backgroundColor: cO,
          color: iO,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: LO
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: wO
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: wO,
          borderBottomColor: wO
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: LO,
            color: WO
          }
        }
      }, {
        dark: !0
      }),
      lO = cW.b.define([{
        tag: ai.l.keyword,
        color: NO
      }, {
        tag: [ai.l.name, ai.l.deleted, ai.l.character, ai.l.propertyName, ai.l.macroName],
        color: zi
      }, {
        tag: [ai.l.function(ai.l.variableName), ai.l.labelName],
        color: OO
      }, {
        tag: [ai.l.color, ai.l.constant(ai.l.name), ai.l.standard(ai.l.name)],
        color: EO
      }, {
        tag: [ai.l.definition(ai.l.name), ai.l.separator],
        color: WO
      }, {
        tag: [ai.l.typeName, ai.l.className, ai.l.number, ai.l.changed, ai.l.annotation, ai.l.modifier, ai.l.self, ai.l.namespace],
        color: ri
      }, {
        tag: [ai.l.operator, ai.l.operatorKeyword, ai.l.url, ai.l.escape, ai.l.regexp, ai.l.link, ai.l.special(ai.l.string)],
        color: Fi
      }, {
        tag: [ai.l.meta, ai.l.comment],
        color: iO
      }, {
        tag: ai.l.strong,
        fontWeight: "bold"
      }, {
        tag: ai.l.emphasis,
        fontStyle: "italic"
      }, {
        tag: ai.l.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: ai.l.link,
        color: iO,
        textDecoration: "underline"
      }, {
        tag: ai.l.heading,
        fontWeight: "bold",
        color: zi
      }, {
        tag: [ai.l.atom, ai.l.bool, ai.l.special(ai.l.variableName)],
        color: EO
      }, {
        tag: [ai.l.processingInstruction, ai.l.string, ai.l.inserted],
        color: mO
      }, {
        tag: ai.l.invalid,
        color: Qi
      }]),
      AO = [xO, (0, cW.cb)(lO)];
    var bO = LW.e.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class jO {
      constructor(WW, iW) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = iW, this.timeoutMS = iW, this.callbacks.push(WW)
      }
      hZ() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var WW = this.callbacks.slice();
          this.callbacks.length = 0, WW.forEach((WW => {
            try {
              WW()
            } catch (iW) {
              console.error("TimeoutLatch callback error:", iW)
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
    class UO {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(WW) {
        this.latches.add(WW), this.start()
      }
      remove(WW) {
        this.latches.delete(WW), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((WW => {
            WW.hZ(), WW.isDone && this.remove(WW)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var kO = null,
      sO = PW.d.define(),
      MO = [];

    function KO(WW) {
      var {
        value: iW,
        selection: OW,
        onChange: mW,
        onStatistics: EW,
        onCreateEditor: cW,
        onUpdate: wW,
        extensions: tW = MO,
        autoFocus: ZW,
        theme: xW = "light",
        height: lW = null,
        minHeight: AW = null,
        maxHeight: bW = null,
        width: jW = null,
        minWidth: UW = null,
        maxWidth: kW = null,
        placeholder: sW = "",
        editable: MW = !0,
        readOnly: KW = !1,
        indentWithTab: SW = !0,
        basicSetup: YW = !0,
        root: yW,
        initialState: TW
      } = WW, [JW, hW] = (0, NW.useState)(), [HW, nW] = (0, NW.useState)(), [uW, oW] = (0, NW.useState)(), dW = (0, NW.useState)((() => ({
        current: null
      })))[0], eW = (0, NW.useState)((() => ({
        current: null
      })))[0], vW = LW.e.theme({
        "&": {
          height: lW,
          minHeight: AW,
          maxHeight: bW,
          width: jW,
          minWidth: UW,
          maxWidth: kW
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), gW = LW.e.updateListener.of((WW => {
        if (WW.docChanged && "function" === typeof mW && !WW.transactions.some((WW => WW.annotation(sO)))) {
          dW.current ? dW.current.reset() : (dW.current = new jO((() => {
            if (eW.current) {
              var WW = eW.current;
              eW.current = null, WW()
            }
            dW.current = null
          }), 200), ("undefined" === typeof window ? new UO : (kO || (kO = new UO), kO)).add(dW.current));
          var iW = WW.state.doc.toString();
          mW(iW, WW)
        }
        EW && EW((WW => ({
          line: WW.state.doc.lineAt(WW.state.selection.main.from),
          lineCount: WW.state.doc.lines,
          lineBreak: WW.state.lineBreak,
          length: WW.state.doc.length,
          readOnly: WW.state.readOnly,
          tabSize: WW.state.tabSize,
          selection: WW.state.selection,
          selectionAsSingle: WW.state.selection.asSingle().main,
          kj: WW.state.selection.kj,
          selectionCode: WW.state.sliceDoc(WW.state.selection.main.from, WW.state.selection.main.to),
          selections: WW.state.selection.kj.map((iW => WW.state.sliceDoc(iW.from, iW.to))),
          selectedText: WW.state.selection.kj.some((WW => !WW.empty))
        }))(WW))
      })), DW = function(WW) {
        void 0 === WW && (WW = {});
        var {
          indentWithTab: iW = !0,
          editable: OW = !0,
          readOnly: mW = !1,
          theme: EW = "light",
          placeholder: NW = "",
          basicSetup: cW = !0
        } = WW, wW = [];
        switch (iW && wW.unshift(LW.I.of([Bi])), cW && ("boolean" === typeof cW ? wW.unshift(Ii()) : wW.unshift(Ii(cW))), NW && wW.unshift((0, LW.N)(NW)), EW) {
          case "light":
            wW.push(bO);
            break;
          case "dark":
            wW.push(AO);
            break;
          case "none":
            break;
          default:
            wW.push(EW)
        }
        return !1 === OW && wW.push(LW.e.editable.of(!1)), mW && wW.push(PW.o.readOnly.of(!0)), [...wW]
      }({
        theme: xW,
        editable: MW,
        readOnly: KW,
        placeholder: sW,
        indentWithTab: SW,
        basicSetup: YW
      }), VW = [gW, vW, ...DW];
      return wW && "function" === typeof wW && VW.push(LW.e.updateListener.of(wW)), VW = VW.concat(tW), (0, NW.useLayoutEffect)((() => {
        if (JW && !uW) {
          var WW = {
              doc: iW,
              selection: OW,
              extensions: VW
            },
            mW = TW ? PW.o.fromJSON(TW.json, WW, TW.fields) : PW.o.create(WW);
          if (oW(mW), !HW) {
            var EW = new LW.e({
              state: mW,
              parent: JW,
              root: yW
            });
            nW(EW), cW && cW(EW, mW)
          }
        }
        return () => {
          HW && (oW(void 0), nW(void 0))
        }
      }), [JW, uW]), (0, NW.useEffect)((() => {
        WW.container && hW(WW.container)
      }), [WW.container]), (0, NW.useEffect)((() => () => {
        HW && (HW.destroy(), nW(void 0)), dW.current && (dW.current.cancel(), dW.current = null)
      }), [HW]), (0, NW.useEffect)((() => {
        ZW && HW && HW.focus()
      }), [ZW, HW]), (0, NW.useEffect)((() => {
        HW && HW.dispatch({
          effects: PW.H.reconfigure.of(VW)
        })
      }), [xW, tW, lW, AW, bW, jW, UW, kW, sW, MW, KW, SW, YW, mW, wW]), (0, NW.useEffect)((() => {
        if (void 0 !== iW) {
          var WW = HW ? HW.state.doc.toString() : "";
          if (HW && iW !== WW) {
            var OW = () => {
              HW && iW !== HW.state.doc.toString() && HW.dispatch({
                changes: {
                  from: 0,
                  to: HW.state.doc.toString().length,
                  insert: iW || ""
                },
                annotations: [sO.of(!0)]
              })
            };
            dW.current && !dW.current.isDone ? eW.current = OW : OW()
          }
        }
      }), [iW, HW]), {
        state: uW,
        setState: oW,
        view: HW,
        setView: nW,
        container: JW,
        setContainer: hW
      }
    }
    var SO = OW(1283),
      YO = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      yO = (0, NW.forwardRef)(((WW, iW) => {
        var {
          className: OW,
          value: PW = "",
          selection: LW,
          extensions: cW = [],
          onChange: wW,
          onStatistics: tW,
          onCreateEditor: ZW,
          onUpdate: xW,
          autoFocus: lW,
          theme: AW = "light",
          height: bW,
          minHeight: jW,
          maxHeight: UW,
          width: kW,
          minWidth: sW,
          maxWidth: MW,
          basicSetup: KW,
          placeholder: SW,
          indentWithTab: YW,
          editable: yW,
          readOnly: TW,
          root: JW,
          initialState: hW
        } = WW, HW = (0, EW.c)(WW, YO), nW = (0, NW.useRef)(null), {
          state: uW,
          view: oW,
          container: dW,
          setContainer: eW
        } = KO({
          root: JW,
          value: PW,
          autoFocus: lW,
          theme: AW,
          height: bW,
          minHeight: jW,
          maxHeight: UW,
          width: kW,
          minWidth: sW,
          maxWidth: MW,
          basicSetup: KW,
          placeholder: SW,
          indentWithTab: YW,
          editable: yW,
          readOnly: TW,
          selection: LW,
          onChange: wW,
          onStatistics: tW,
          onCreateEditor: ZW,
          onUpdate: xW,
          extensions: cW,
          initialState: hW
        });
        (0, NW.useImperativeHandle)(iW, (() => ({
          editor: nW.current,
          state: uW,
          view: oW
        })), [nW, dW, uW, oW]);
        var vW = (0, NW.useCallback)((WW => {
          nW.current = WW, eW(WW)
        }), [eW]);
        if ("string" !== typeof PW) throw new Error("value must be typeof string but got " + typeof PW);
        var gW = "string" === typeof AW ? "cm-theme-" + AW : "cm-theme";
        return (0, SO.jsx)("div", (0, mW.c)({
          ref: vW,
          className: gW + (OW ? " " + OW : "")
        }, HW))
      }));
    yO.displayName = "CodeMirror";
    const TO = yO
  },
  53517: (WW, iW, OW) => {
    function mW() {
      var WW = arguments[0];
      "string" == typeof WW && (WW = document.createElement(WW));
      var iW = 1,
        OW = arguments[1];
      if (OW && "object" == typeof OW && null == OW.nodeType && !Array.isArray(OW)) {
        for (var mW in OW)
          if (Object.prototype.hasOwnProperty.call(OW, mW)) {
            var NW = OW[mW];
            "string" == typeof NW ? WW.setAttribute(mW, NW) : null != NW && (WW[mW] = NW)
          } iW++
      }
      for (; iW < arguments.length; iW++) EW(WW, arguments[iW]);
      return WW
    }

    function EW(WW, iW) {
      if ("string" == typeof iW) WW.appendChild(document.createTextNode(iW));
      else if (null == iW);
      else if (null != iW.nodeType) WW.appendChild(iW);
      else {
        if (!Array.isArray(iW)) throw new RangeError("Unsupported child node: " + iW);
        for (var OW = 0; OW < iW.length; OW++) EW(WW, iW[OW])
      }
    }
    OW.d(iW, {
      c: () => mW
    })
  },
  53515: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    const mW = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      EW = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      NW = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class PW {
      constructor(WW, iW) {
        this.rules = [];
        let {
          finish: OW
        } = iW || {};

        function mW(WW) {
          return /^@/.test(WW) ? [WW] : WW.split(/,\s*/)
        }

        function EW(WW, iW, NW, PW) {
          let LW = [],
            cW = /^@(\w+)\b/.exec(WW[0]),
            wW = cW && "keyframes" == cW[1];
          if (cW && null == iW) return NW.push(WW[0] + ";");
          for (let OW in iW) {
            let PW = iW[OW];
            if (/&/.test(OW)) EW(OW.split(/,\s*/).map((iW => WW.map((WW => iW.replace(/&/, WW))))).reduce(((WW, iW) => WW.concat(iW))), PW, NW);
            else if (PW && "object" == typeof PW) {
              if (!cW) throw new RangeError("The value of a property (" + OW + ") should be a primitive value.");
              EW(mW(OW), PW, LW, wW)
            } else null != PW && LW.push(OW.replace(/_.*/, "").replace(/[A-Z]/g, (WW => "-" + WW.toLowerCase())) + ": " + PW + ";")
          }(LW.length || wW) && NW.push((!OW || cW || PW ? WW : WW.map(OW)).join(", ") + " {" + LW.join(" ") + "}")
        }
        for (let NW in WW) EW(mW(NW), WW[NW], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let WW = NW[mW] || 1;
        return NW[mW] = WW + 1, "\u037c" + WW.toString(36)
      }
      static mount(WW, iW, OW) {
        let mW = WW[EW],
          NW = OW && OW.nonce;
        mW ? NW && mW.setNonce(NW) : mW = new cW(WW, NW), mW.mount(Array.isArray(iW) ? iW : [iW], WW)
      }
    }
    let LW = new Map;
    class cW {
      constructor(WW, iW) {
        let OW = WW.ownerDocument || WW,
          mW = OW.defaultView;
        if (!WW.head && WW.adoptedStyleSheets && mW.CSSStyleSheet) {
          let iW = LW.get(OW);
          if (iW) return WW[EW] = iW;
          this.sheet = new mW.CSSStyleSheet, LW.set(OW, this)
        } else this.styleTag = OW.createElement("style"), iW && this.styleTag.setAttribute("nonce", iW);
        this.modules = [], WW[EW] = this
      }
      mount(WW, iW) {
        let OW = this.sheet,
          mW = 0,
          EW = 0;
        for (let NW = 0; NW < WW.length; NW++) {
          let iW = WW[NW],
            PW = this.modules.indexOf(iW);
          if (PW < EW && PW > -1 && (this.modules.splice(PW, 1), EW--, PW = -1), -1 == PW) {
            if (this.modules.splice(EW++, 0, iW), OW)
              for (let WW = 0; WW < iW.rules.length; WW++) OW.insertRule(iW.rules[WW], mW++)
          } else {
            for (; EW < PW;) mW += this.modules[EW++].rules.length;
            mW += iW.rules.length, EW++
          }
        }
        if (OW) iW.adoptedStyleSheets.indexOf(this.sheet) < 0 && (iW.adoptedStyleSheets = [this.sheet, ...iW.adoptedStyleSheets]);
        else {
          let WW = "";
          for (let iW = 0; iW < this.modules.length; iW++) WW += this.modules[iW].getRules() + "\n";
          this.styleTag.textContent = WW;
          let OW = iW.head || iW;
          this.styleTag.parentNode != OW && OW.insertBefore(this.styleTag, OW.firstChild)
        }
      }
      setNonce(WW) {
        this.styleTag && this.styleTag.getAttribute("nonce") != WW && this.styleTag.setAttribute("nonce", WW)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);