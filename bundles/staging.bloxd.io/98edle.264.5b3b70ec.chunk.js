export const id = 264;
export const ids = [264];
export const modules = {
  38776: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => dR,
      e: () => QR,
      h: () => PR,
      i: () => yR,
      l: () => pR,
      o: () => NW,
      q: () => tM
    });
    var wW = MW(38778),
      CW = MW(38784),
      zR = MW(38800);
    class AW {
      constructor(WW, RW, MW, wW) {
        this.state = WW, this.pos = RW, this.explicit = MW, this.view = wW, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(WW) {
        let RW = (0, zR.nb)(this.state).resolveInner(this.pos, -1);
        for (; RW && WW.indexOf(RW.name) < 0;) RW = RW.parent;
        return RW ? {
          from: RW.from,
          to: this.pos,
          text: this.state.sliceDoc(RW.from, this.pos),
          type: RW.type
        } : null
      }
      matchBefore(WW) {
        let RW = this.state.doc.lineAt(this.pos),
          MW = Math.max(RW.from, this.pos - 250),
          wW = RW.text.slice(MW - RW.from, this.pos - RW.from),
          CW = wW.search(tR(WW, !1));
        return CW < 0 ? null : {
          from: MW + CW,
          to: this.pos,
          text: wW.slice(CW)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(WW, RW, MW) {
        "abort" == WW && this.abortListeners && (this.abortListeners.push(RW), MW && MW.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function bR(WW) {
      let RW = Object.keys(WW).join(""),
        MW = /\w/.test(RW);
      return MW && (RW = RW.replace(/\w/g, "")), `[${MW?"\\w":""}${RW.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function yR(WW) {
      let RW = WW.map((WW => "string" == typeof WW ? {
          label: WW
        } : WW)),
        [MW, wW] = RW.every((WW => /^\w+$/.test(WW.label))) ? [/\w*$/, /\w+$/] : function(WW) {
          let RW = Object.create(null),
            MW = Object.create(null);
          for (let {
              label: CW
            }
            of WW) {
            RW[CW[0]] = !0;
            for (let WW = 1; WW < CW.length; WW++) MW[CW[WW]] = !0
          }
          let wW = bR(RW) + bR(MW) + "*$";
          return [new RegExp("^" + wW), new RegExp(wW)]
        }(RW);
      return WW => {
        let CW = WW.matchBefore(wW);
        return CW || WW.explicit ? {
          from: CW ? CW.from : WW.pos,
          options: RW,
          validFor: MW
        } : null
      }
    }

    function NW(WW, RW) {
      return MW => {
        for (let RW = (0, zR.nb)(MW.state).resolveInner(MW.pos, -1); RW; RW = RW.parent) {
          if (WW.indexOf(RW.name) > -1) return null;
          if (RW.type.isTop) break
        }
        return RW(MW)
      }
    }
    class eW {
      constructor(WW, RW, MW, wW) {
        this.completion = WW, this.source = RW, this.match = MW, this.score = wW
      }
    }

    function BW(WW) {
      return WW.selection.main.from
    }

    function tR(WW, RW) {
      var MW;
      let {
        source: wW
      } = WW, CW = RW && "^" != wW[0], zR = "$" != wW[wW.length - 1];
      return CW || zR ? new RegExp(`${CW?"^":""}(?:${wW})${zR?"$":""}`, null !== (MW = WW.flags) && void 0 !== MW ? MW : WW.ignoreCase ? "i" : "") : WW
    }
    const TW = wW.d.define();

    function gR(WW, RW, MW, CW) {
      let {
        main: zR
      } = WW.selection, AW = MW - zR.from, bR = CW - zR.from;
      return {
        ...WW.changeByRange((yR => {
          if (yR != zR && MW != CW && WW.sliceDoc(yR.from + AW, yR.from + bR) != WW.sliceDoc(MW, CW)) return {
            range: yR
          };
          let NW = WW.toText(RW);
          return {
            changes: {
              from: yR.from + AW,
              to: CW == zR.from ? yR.to : yR.from + bR,
              insert: NW
            },
            range: wW.j.cursor(yR.from + AW + NW.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const iR = new WeakMap;

    function YW(WW) {
      if (!Array.isArray(WW)) return WW;
      let RW = iR.get(WW);
      return RW || iR.set(WW, RW = yR(WW)), RW
    }
    const JW = wW.A.define(),
      PW = wW.A.define();
    class IW {
      constructor(WW) {
        this.pattern = WW, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let RW = 0; RW < WW.length;) {
          let MW = (0, wW.J)(WW, RW),
            CW = (0, wW.L)(MW);
          this.chars.push(MW);
          let zR = WW.slice(RW, RW + CW),
            AW = zR.toUpperCase();
          this.folded.push((0, wW.J)(AW == zR ? zR.toLowerCase() : AW, 0)), RW += CW
        }
        this.astral = WW.length != this.chars.length
      }
      ret(WW, RW) {
        return this.score = WW, this.matched = RW, this
      }
      match(WW) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (WW.length < this.pattern.length) return null;
        let {
          chars: RW,
          folded: MW,
          any: CW,
          precise: zR,
          byWord: AW
        } = this;
        if (1 == RW.length) {
          let CW = (0, wW.J)(WW, 0),
            zR = (0, wW.L)(CW),
            AW = zR == WW.length ? 0 : -100;
          if (CW == RW[0]);
          else {
            if (CW != MW[0]) return null;
            AW += -200
          }
          return this.ret(AW, [0, zR])
        }
        let bR = WW.indexOf(this.pattern);
        if (0 == bR) return this.ret(WW.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let yR = RW.length,
          NW = 0;
        if (bR < 0) {
          for (let zR = 0, AW = Math.min(WW.length, 200); zR < AW && NW < yR;) {
            let AW = (0, wW.J)(WW, zR);
            AW != RW[NW] && AW != MW[NW] || (CW[NW++] = zR), zR += (0, wW.L)(AW)
          }
          if (NW < yR) return null
        }
        let eW = 0,
          BW = 0,
          tR = !1,
          TW = 0,
          gR = -1,
          iR = -1,
          YW = /[a-z]/.test(WW),
          JW = !0;
        for (let PW = 0, IW = Math.min(WW.length, 200), oW = 0; PW < IW && BW < yR;) {
          let CW = (0, wW.J)(WW, PW);
          bR < 0 && (eW < yR && CW == RW[eW] && (zR[eW++] = PW), TW < yR && (CW == RW[TW] || CW == MW[TW] ? (0 == TW && (gR = PW), iR = PW + 1, TW++) : TW = 0));
          let NW, IW = CW < 255 ? CW >= 48 && CW <= 57 || CW >= 97 && CW <= 122 ? 2 : CW >= 65 && CW <= 90 ? 1 : 0 : (NW = (0, wW.X)(CW)) != NW.toLowerCase() ? 1 : NW != NW.toUpperCase() ? 2 : 0;
          (!PW || 1 == IW && YW || 0 == oW && 0 != IW) && (RW[BW] == CW || MW[BW] == CW && (tR = !0) ? AW[BW++] = PW : AW.length && (JW = !1)), oW = IW, PW += (0, wW.L)(CW)
        }
        return BW == yR && 0 == AW[0] && JW ? this.result((tR ? -200 : 0) - 100, AW, WW) : TW == yR && 0 == gR ? this.ret(-200 - WW.length + (iR == WW.length ? 0 : -100), [0, iR]) : bR > -1 ? this.ret(-700 - WW.length, [bR, bR + this.pattern.length]) : TW == yR ? this.ret(-900 - WW.length, [gR, iR]) : BW == yR ? this.result((tR ? -200 : 0) - 100 - 700 + (JW ? 0 : -1100), AW, WW) : 2 == RW.length ? null : this.result((CW[0] ? -700 : 0) - 200 - 1100, CW, WW)
      }
      result(WW, RW, MW) {
        let CW = [],
          zR = 0;
        for (let AW of RW) {
          let WW = AW + (this.astral ? (0, wW.L)((0, wW.J)(MW, AW)) : 1);
          zR && CW[zR - 1] == AW ? CW[zR - 1] = WW : (CW[zR++] = AW, CW[zR++] = WW)
        }
        return this.ret(WW - MW.length, CW)
      }
    }
    class oW {
      constructor(WW) {
        this.pattern = WW, this.matched = [], this.score = 0, this.folded = WW.toLowerCase()
      }
      match(WW) {
        if (WW.length < this.pattern.length) return null;
        let RW = WW.slice(0, this.pattern.length),
          MW = RW == this.pattern ? 0 : RW.toLowerCase() == this.folded ? -200 : null;
        return null == MW ? null : (this.matched = [0, RW.length], this.score = MW + (WW.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const lW = wW.m.define({
      combine: WW => (0, wW.O)(WW, {
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
        positionInfo: fW,
        filterStrict: !1,
        compareCompletions: (WW, RW) => (WW.sortText || WW.label).localeCompare(RW.sortText || RW.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (WW, RW) => WW && RW,
        closeOnBlur: (WW, RW) => WW && RW,
        icons: (WW, RW) => WW && RW,
        tooltipClass: (WW, RW) => MW => FW(WW(MW), RW(MW)),
        optionClass: (WW, RW) => MW => FW(WW(MW), RW(MW)),
        addToOptions: (WW, RW) => WW.concat(RW),
        filterStrict: (WW, RW) => WW || RW
      })
    });

    function FW(WW, RW) {
      return WW ? RW ? WW + " " + RW : WW : RW
    }

    function fW(WW, RW, MW, wW, zR, AW) {
      let bR, yR, NW = WW.textDirection == CW.d.RTL,
        eW = NW,
        BW = !1,
        tR = "top",
        TW = RW.left - zR.left,
        gR = zR.right - RW.right,
        iR = wW.right - wW.left,
        YW = wW.bottom - wW.top;
      if (eW && TW < Math.min(iR, gR) ? eW = !1 : !eW && gR < Math.min(iR, TW) && (eW = !0), iR <= (eW ? TW : gR)) bR = Math.max(zR.top, Math.min(MW.top, zR.bottom - YW)) - RW.top, yR = Math.min(400, eW ? TW : gR);
      else {
        BW = !0, yR = Math.min(400, (NW ? RW.right : zR.right - RW.left) - 30);
        let WW = zR.bottom - RW.bottom;
        WW >= YW || WW > RW.top ? bR = MW.bottom - RW.top : (tR = "bottom", bR = RW.bottom - MW.top)
      }
      return {
        style: `${tR}: ${bR/((RW.bottom-RW.top)/AW.offsetHeight)}px; max-width: ${yR/((RW.right-RW.left)/AW.offsetWidth)}px`,
        class: "cm-completionInfo-" + (BW ? NW ? "left-narrow" : "right-narrow" : eW ? "left" : "right")
      }
    }
    const QW = wW.A.define();

    function rR(WW, RW, MW) {
      if (WW <= MW) return {
        from: 0,
        to: WW
      };
      if (RW < 0 && (RW = 0), RW <= WW >> 1) {
        let WW = Math.floor(RW / MW);
        return {
          from: WW * MW,
          to: (WW + 1) * MW
        }
      }
      let wW = Math.floor((WW - RW) / MW);
      return {
        from: WW - (wW + 1) * MW,
        to: WW - wW * MW
      }
    }
    class cR {
      constructor(WW, RW, MW) {
        this.view = WW, this.stateField = RW, this.applyCompletion = MW, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: WW => this.placeInfo(WW),
          key: this
        }, this.space = null, this.currentClass = "";
        let wW = WW.state.field(RW),
          {
            options: CW,
            selected: zR
          } = wW.open,
          AW = WW.state.facet(lW);
        this.optionContent = function(WW) {
          let RW = WW.addToOptions.slice();
          return WW.icons && RW.push({
            render(WW) {
              let RW = document.createElement("div");
              return RW.classList.add("cm-completionIcon"), WW.type && RW.classList.add(...WW.type.split(/\s+/g).map((WW => "cm-completionIcon-" + WW))), RW.setAttribute("aria-hidden", "true"), RW
            },
            position: 20
          }), RW.push({
            render(WW, RW, MW, wW) {
              let CW = document.createElement("span");
              CW.className = "cm-completionLabel";
              let zR = WW.displayLabel || WW.label,
                AW = 0;
              for (let bR = 0; bR < wW.length;) {
                let WW = wW[bR++],
                  RW = wW[bR++];
                WW > AW && CW.appendChild(document.createTextNode(zR.slice(AW, WW)));
                let MW = CW.appendChild(document.createElement("span"));
                MW.appendChild(document.createTextNode(zR.slice(WW, RW))), MW.className = "cm-completionMatchedText", AW = RW
              }
              return AW < zR.length && CW.appendChild(document.createTextNode(zR.slice(AW))), CW
            },
            position: 50
          }, {
            render(WW) {
              if (!WW.detail) return null;
              let RW = document.createElement("span");
              return RW.className = "cm-completionDetail", RW.textContent = WW.detail, RW
            },
            position: 80
          }), RW.sort(((WW, RW) => WW.position - RW.position)).map((WW => WW.render))
        }(AW), this.optionClass = AW.optionClass, this.tooltipClass = AW.tooltipClass, this.range = rR(CW.length, zR, AW.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(WW.state), this.dom.addEventListener("mousedown", (MW => {
          let {
            options: wW
          } = WW.state.field(RW).open;
          for (let RW, CW = MW.target; CW && CW != this.dom; CW = CW.parentNode)
            if ("LI" == CW.nodeName && (RW = /-(\d+)$/.exec(CW.id)) && +RW[1] < wW.length) return this.applyCompletion(WW, wW[+RW[1]]), void MW.preventDefault();
          if (MW.target == this.list) {
            let RW = this.list.classList.contains("cm-completionListIncompleteTop") && MW.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && MW.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != RW && (WW.dispatch({
              effects: QW.of(RW)
            }), MW.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (RW => {
          let MW = WW.state.field(this.stateField, !1);
          MW && MW.tooltip && WW.state.facet(lW).closeOnBlur && RW.relatedTarget != WW.contentDOM && WW.dispatch({
            effects: PW.of(null)
          })
        })), this.showOptions(CW, wW.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(WW, RW) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(WW, RW, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(WW) {
        var RW;
        let MW = WW.state.field(this.stateField),
          wW = WW.startState.field(this.stateField);
        if (this.updateTooltipClass(WW.state), MW != wW) {
          let {
            options: CW,
            selected: zR,
            disabled: AW
          } = MW.open;
          wW.open && wW.open.options == CW || (this.range = rR(CW.length, zR, WW.state.facet(lW).maxRenderedOptions), this.showOptions(CW, MW.id)), this.updateSel(), AW != (null === (RW = wW.open) || void 0 === RW ? void 0 : RW.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!AW)
        }
      }
      updateTooltipClass(WW) {
        let RW = this.tooltipClass(WW);
        if (RW != this.currentClass) {
          for (let WW of this.currentClass.split(" ")) WW && this.dom.classList.remove(WW);
          for (let WW of RW.split(" ")) WW && this.dom.classList.add(WW);
          this.currentClass = RW
        }
      }
      positioned(WW) {
        this.space = WW, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let WW = this.view.state.field(this.stateField),
          RW = WW.open;
        (RW.selected > -1 && RW.selected < this.range.from || RW.selected >= this.range.to) && (this.range = rR(RW.options.length, RW.selected, this.view.state.facet(lW).maxRenderedOptions), this.showOptions(RW.options, WW.id));
        let MW = this.updateSelectedOption(RW.selected);
        if (MW) {
          this.destroyInfo();
          let {
            completion: wW
          } = RW.options[RW.selected], {
            info: zR
          } = wW;
          if (!zR) return;
          let AW = "string" === typeof zR ? document.createTextNode(zR) : zR(wW);
          if (!AW) return;
          "then" in AW ? AW.then((RW => {
            RW && this.view.state.field(this.stateField, !1) == WW && this.addInfoPane(RW, wW)
          })).catch((WW => (0, CW.X)(this.view.state, WW, "completion info"))) : (this.addInfoPane(AW, wW), MW.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(WW, RW) {
        this.destroyInfo();
        let MW = this.info = document.createElement("div");
        if (MW.className = "cm-tooltip cm-completionInfo", MW.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != WW.nodeType) MW.appendChild(WW), this.infoDestroy = null;
        else {
          let {
            dom: RW,
            destroy: wW
          } = WW;
          MW.appendChild(RW), this.infoDestroy = wW || null
        }
        this.dom.appendChild(MW), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(WW) {
        let RW = null;
        for (let MW = this.list.firstChild, wW = this.range.from; MW; MW = MW.nextSibling, wW++) "LI" == MW.nodeName && MW.id ? wW == WW ? MW.hasAttribute("aria-selected") || (MW.setAttribute("aria-selected", "true"), RW = MW) : MW.hasAttribute("aria-selected") && (MW.removeAttribute("aria-selected"), MW.removeAttribute("aria-describedby")) : wW--;
        return RW && function(WW, RW) {
          let MW = WW.getBoundingClientRect(),
            wW = RW.getBoundingClientRect(),
            CW = MW.height / WW.offsetHeight;
          wW.top < MW.top ? WW.scrollTop -= (MW.top - wW.top) / CW : wW.bottom > MW.bottom && (WW.scrollTop += (wW.bottom - MW.bottom) / CW)
        }(this.list, RW), RW
      }
      measureInfo() {
        let WW = this.dom.querySelector("[aria-selected]");
        if (!WW || !this.info) return null;
        let RW = this.dom.getBoundingClientRect(),
          MW = this.info.getBoundingClientRect(),
          wW = WW.getBoundingClientRect(),
          CW = this.space;
        if (!CW) {
          let WW = this.dom.ownerDocument.documentElement;
          CW = {
            left: 0,
            top: 0,
            right: WW.clientWidth,
            bottom: WW.clientHeight
          }
        }
        return wW.top > Math.min(CW.bottom, RW.bottom) - 10 || wW.bottom < Math.max(CW.top, RW.top) + 10 ? null : this.view.state.facet(lW).positionInfo(this.view, RW, wW, MW, CW, this.dom)
      }
      placeInfo(WW) {
        this.info && (WW ? (WW.style && (this.info.style.cssText = WW.style), this.info.className = "cm-tooltip cm-completionInfo " + (WW.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(WW, RW, MW) {
        const wW = document.createElement("ul");
        wW.id = RW, wW.setAttribute("role", "listbox"), wW.setAttribute("aria-expanded", "true"), wW.setAttribute("aria-label", this.view.state.phrase("Completions")), wW.addEventListener("mousedown", (WW => {
          WW.target == wW && WW.preventDefault()
        }));
        let CW = null;
        for (let zR = MW.from; zR < MW.to; zR++) {
          let {
            completion: AW,
            match: bR
          } = WW[zR], {
            section: yR
          } = AW;
          if (yR) {
            let WW = "string" == typeof yR ? yR : yR.name;
            if (WW != CW && (zR > MW.from || 0 == MW.from))
              if (CW = WW, "string" != typeof yR && yR.header) wW.appendChild(yR.header(yR));
              else {
                wW.appendChild(document.createElement("completion-section")).textContent = WW
              }
          }
          const NW = wW.appendChild(document.createElement("li"));
          NW.id = RW + "-" + zR, NW.setAttribute("role", "option");
          let eW = this.optionClass(AW);
          eW && (NW.className = eW);
          for (let WW of this.optionContent) {
            let RW = WW(AW, this.view.state, this.view, bR);
            RW && NW.appendChild(RW)
          }
        }
        return MW.from && wW.classList.add("cm-completionListIncompleteTop"), MW.to < WW.length && wW.classList.add("cm-completionListIncompleteBottom"), wW
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function XW(WW, RW) {
      return MW => new cR(MW, WW, RW)
    }

    function jR(WW) {
      return 100 * (WW.boost || 0) + (WW.apply ? 10 : 0) + (WW.info ? 5 : 0) + (WW.type ? 1 : 0)
    }
    class kR {
      constructor(WW, RW, MW, wW, CW, zR) {
        this.options = WW, this.attrs = RW, this.tooltip = MW, this.timestamp = wW, this.selected = CW, this.disabled = zR
      }
      setSelected(WW, RW) {
        return WW == this.selected || WW >= this.options.length ? this : new kR(this.options, pW(RW, WW), this.tooltip, this.timestamp, WW, this.disabled)
      }
      static build(WW, RW, MW, wW, CW, zR) {
        if (wW && !zR && WW.some((WW => WW.isPending))) return wW.setDisabled();
        let AW = function(WW, RW) {
          let MW = [],
            wW = null,
            CW = null,
            zR = WW => {
              MW.push(WW);
              let {
                section: RW
              } = WW.completion;
              if (RW) {
                wW || (wW = []);
                let WW = "string" == typeof RW ? RW : RW.name;
                wW.some((RW => RW.name == WW)) || wW.push("string" == typeof RW ? {
                  name: WW
                } : RW)
              }
            },
            AW = RW.facet(lW);
          for (let BW of WW)
            if (BW.hasResult()) {
              let WW = BW.result.getMatch;
              if (!1 === BW.result.filter)
                for (let RW of BW.result.options) zR(new eW(RW, BW.source, WW ? WW(RW) : [], 1e9 - MW.length));
              else {
                let MW, wW = RW.sliceDoc(BW.from, BW.to),
                  bR = AW.filterStrict ? new oW(wW) : new IW(wW);
                for (let RW of BW.result.options)
                  if (MW = bR.match(RW.label)) {
                    let wW = RW.displayLabel ? WW ? WW(RW, MW.matched) : [] : MW.matched,
                      AW = MW.score + (RW.boost || 0);
                    if (zR(new eW(RW, BW.source, wW, AW)), "object" == typeof RW.section && "dynamic" === RW.section.rank) {
                      let {
                        name: WW
                      } = RW.section;
                      CW || (CW = Object.create(null)), CW[WW] = Math.max(AW, CW[WW] || -1e9)
                    }
                  }
              }
            } if (wW) {
            let WW = Object.create(null),
              RW = 0,
              zR = (WW, RW) => ("dynamic" === WW.rank && "dynamic" === RW.rank ? CW[RW.name] - CW[WW.name] : 0) || ("number" == typeof WW.rank ? WW.rank : 1e9) - ("number" == typeof RW.rank ? RW.rank : 1e9) || (WW.name < RW.name ? -1 : 1);
            for (let MW of wW.sort(zR)) RW -= 1e5, WW[MW.name] = RW;
            for (let wW of MW) {
              let {
                section: RW
              } = wW.completion;
              RW && (wW.score += WW["string" == typeof RW ? RW : RW.name])
            }
          }
          let bR = [],
            yR = null,
            NW = AW.compareCompletions;
          for (let eW of MW.sort(((WW, RW) => RW.score - WW.score || NW(WW.completion, RW.completion)))) {
            let WW = eW.completion;
            !yR || yR.label != WW.label || yR.detail != WW.detail || null != yR.type && null != WW.type && yR.type != WW.type || yR.apply != WW.apply || yR.boost != WW.boost ? bR.push(eW) : jR(eW.completion) > jR(yR) && (bR[bR.length - 1] = eW), yR = eW.completion
          }
          return bR
        }(WW, RW);
        if (!AW.length) return wW && WW.some((WW => WW.isPending)) ? wW.setDisabled() : null;
        let bR = RW.facet(lW).selectOnOpen ? 0 : -1;
        if (wW && wW.selected != bR && -1 != wW.selected) {
          let WW = wW.options[wW.selected].completion;
          for (let RW = 0; RW < AW.length; RW++)
            if (AW[RW].completion == WW) {
              bR = RW;
              break
            }
        }
        return new kR(AW, pW(MW, bR), {
          pos: WW.reduce(((WW, RW) => RW.hasResult() ? Math.min(WW, RW.from) : WW), 1e8),
          create: KW,
          above: CW.aboveCursor
        }, wW ? wW.timestamp : Date.now(), bR, !1)
      }
      map(WW) {
        return new kR(this.options, this.attrs, {
          ...this.tooltip,
          pos: WW.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new kR(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class aR {
      constructor(WW, RW, MW) {
        this.active = WW, this.id = RW, this.open = MW
      }
      static start() {
        return new aR(hW, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(WW) {
        let {
          state: RW
        } = WW, MW = RW.facet(lW), wW = (MW.override || RW.languageDataAt("autocomplete", BW(RW)).map(YW)).map((RW => (this.active.find((WW => WW.source == RW)) || new EW(RW, this.active.some((WW => 0 != WW.state)) ? 1 : 0)).update(WW, MW)));
        wW.length == this.active.length && wW.every(((WW, RW) => WW == this.active[RW])) && (wW = this.active);
        let CW = this.open,
          zR = WW.effects.some((WW => WW.is(mR)));
        CW && WW.docChanged && (CW = CW.map(WW.changes)), WW.selection || wW.some((RW => RW.hasResult() && WW.changes.touchesRange(RW.from, RW.to))) || ! function(WW, RW) {
          if (WW == RW) return !0;
          for (let MW = 0, wW = 0;;) {
            for (; MW < WW.length && !WW[MW].hasResult();) MW++;
            for (; wW < RW.length && !RW[wW].hasResult();) wW++;
            let CW = MW == WW.length,
              zR = wW == RW.length;
            if (CW || zR) return CW == zR;
            if (WW[MW++].result != RW[wW++].result) return !1
          }
        }(wW, this.active) || zR ? CW = kR.build(wW, RW, this.id, CW, MW, zR) : CW && CW.disabled && !wW.some((WW => WW.isPending)) && (CW = null), !CW && wW.every((WW => !WW.isPending)) && wW.some((WW => WW.hasResult())) && (wW = wW.map((WW => WW.hasResult() ? new EW(WW.source, 0) : WW)));
        for (let AW of WW.effects) AW.is(QW) && (CW = CW && CW.setSelected(AW.value, this.id));
        return wW == this.active && CW == this.open ? this : new aR(wW, this.id, CW)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? sW : dW
      }
    }
    const sW = {
        "aria-autocomplete": "list"
      },
      dW = {};

    function pW(WW, RW) {
      let MW = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": WW
      };
      return RW > -1 && (MW["aria-activedescendant"] = WW + "-" + RW), MW
    }
    const hW = [];

    function UW(WW, RW) {
      if (WW.isUserEvent("input.complete")) {
        let MW = WW.annotation(TW);
        if (MW && RW.activateOnCompletion(MW)) return 12
      }
      let MW = WW.isUserEvent("input.type");
      return MW && RW.activateOnTyping ? 5 : MW ? 1 : WW.isUserEvent("delete.backward") ? 2 : WW.selection ? 8 : WW.docChanged ? 16 : 0
    }
    class EW {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = WW, this.state = RW, this.explicit = MW
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(WW, RW) {
        let MW = UW(WW, RW),
          wW = this;
        (8 & MW || 16 & MW && this.touches(WW)) && (wW = new EW(wW.source, 0)), 4 & MW && 0 == wW.state && (wW = new EW(this.source, 1)), wW = wW.updateFor(WW, MW);
        for (let CW of WW.effects)
          if (CW.is(JW)) wW = new EW(wW.source, 1, CW.value);
          else if (CW.is(PW)) wW = new EW(wW.source, 0);
        else if (CW.is(mR))
          for (let WW of CW.value) WW.source == wW.source && (wW = WW);
        return wW
      }
      updateFor(WW, RW) {
        return this.map(WW.changes)
      }
      map(WW) {
        return this
      }
      touches(WW) {
        return WW.changes.touchesRange(BW(WW.state))
      }
    }
    class VW extends EW {
      constructor(WW, RW, MW, wW, CW, zR) {
        super(WW, 3, RW), this.limit = MW, this.result = wW, this.from = CW, this.to = zR
      }
      hasResult() {
        return !0
      }
      updateFor(WW, RW) {
        var MW;
        if (!(3 & RW)) return this.map(WW.changes);
        let wW = this.result;
        wW.map && !WW.changes.empty && (wW = wW.map(wW, WW.changes));
        let CW = WW.changes.mapPos(this.from),
          zR = WW.changes.mapPos(this.to, 1),
          bR = BW(WW.state);
        if (bR > zR || !wW || 2 & RW && (BW(WW.startState) == this.from || bR < this.limit)) return new EW(this.source, 4 & RW ? 1 : 0);
        let yR = WW.changes.mapPos(this.limit);
        return function(WW, RW, MW, wW) {
          if (!WW) return !1;
          let CW = RW.sliceDoc(MW, wW);
          return "function" == typeof WW ? WW(CW, MW, wW, RW) : tR(WW, !0).test(CW)
        }(wW.validFor, WW.state, CW, zR) ? new VW(this.source, this.explicit, yR, wW, CW, zR) : wW.update && (wW = wW.update(wW, CW, zR, new AW(WW.state, bR, !1))) ? new VW(this.source, this.explicit, yR, wW, wW.from, null !== (MW = wW.to) && void 0 !== MW ? MW : BW(WW.state)) : new EW(this.source, 1, this.explicit)
      }
      map(WW) {
        if (WW.empty) return this;
        return (this.result.map ? this.result.map(this.result, WW) : this.result) ? new VW(this.source, this.explicit, WW.mapPos(this.limit), this.result, WW.mapPos(this.from), WW.mapPos(this.to, 1)) : new EW(this.source, 0)
      }
      touches(WW) {
        return WW.changes.touchesRange(this.from, this.to)
      }
    }
    const mR = wW.A.define({
        map: (WW, RW) => WW.map((WW => WW.map(RW)))
      }),
      xR = wW.C.define({
        create: () => aR.start(),
        update: (WW, RW) => WW.update(RW),
        provide: WW => [CW.fb.from(WW, (WW => WW.tooltip)), CW.g.contentAttributes.from(WW, (WW => WW.attrs))]
      });

    function vR(WW, RW) {
      const MW = RW.completion.apply || RW.completion.label;
      let wW = WW.state.field(xR).active.find((WW => WW.source == RW.source));
      return wW instanceof VW && ("string" == typeof MW ? WW.dispatch({
        ...gR(WW.state, MW, wW.from, wW.to),
        annotations: TW.of(RW.completion)
      }) : MW(WW, RW.completion, wW.from, wW.to), !0)
    }
    const KW = XW(xR, vR);

    function uW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return MW => {
        let wW = MW.state.field(xR, !1);
        if (!wW || !wW.open || wW.open.disabled || Date.now() - wW.open.timestamp < MW.state.facet(lW).interactionDelay) return !1;
        let zR, AW = 1;
        "page" == RW && (zR = (0, CW.F)(MW, wW.open.tooltip)) && (AW = Math.max(2, Math.floor(zR.dom.offsetHeight / zR.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: bR
        } = wW.open.options, yR = wW.open.selected > -1 ? wW.open.selected + AW * (WW ? 1 : -1) : WW ? 0 : bR - 1;
        return yR < 0 ? yR = "page" == RW ? 0 : bR - 1 : yR >= bR && (yR = "page" == RW ? bR - 1 : 0), MW.dispatch({
          effects: QW.of(yR)
        }), !0
      }
    }
    const OW = WW => !!WW.state.field(xR, !1) && (WW.dispatch({
      effects: JW.of(!0)
    }), !0);
    class nW {
      constructor(WW, RW) {
        this.active = WW, this.context = RW, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const GW = CW.n.fromClass(class {
        constructor(WW) {
          this.view = WW, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let RW of WW.state.field(xR).active) RW.isPending && this.startQuery(RW)
        }
        update(WW) {
          let RW = WW.state.field(xR),
            MW = WW.state.facet(lW);
          if (!WW.selectionSet && !WW.docChanged && WW.startState.field(xR) == RW) return;
          let wW = WW.transactions.some((WW => {
            let RW = UW(WW, MW);
            return 8 & RW || (WW.selection || WW.docChanged) && !(3 & RW)
          }));
          for (let bR = 0; bR < this.running.length; bR++) {
            let RW = this.running[bR];
            if (wW || RW.context.abortOnDocChange && WW.docChanged || RW.updates.length + WW.transactions.length > 50 && Date.now() - RW.time > 1e3) {
              for (let WW of RW.context.abortListeners) try {
                WW()
              } catch (AW) {
                (0, CW.X)(this.view.state, AW)
              }
              RW.context.abortListeners = null, this.running.splice(bR--, 1)
            } else RW.updates.push(...WW.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), WW.transactions.some((WW => WW.effects.some((WW => WW.is(JW))))) && (this.pendingStart = !0);
          let zR = this.pendingStart ? 50 : MW.activateOnTypingDelay;
          if (this.debounceUpdate = RW.active.some((WW => WW.isPending && !this.running.some((RW => RW.active.source == WW.source)))) ? setTimeout((() => this.startUpdate()), zR) : -1, 0 != this.composing)
            for (let CW of WW.transactions) CW.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && CW.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: WW
          } = this.view, RW = WW.field(xR);
          for (let MW of RW.active) MW.isPending && !this.running.some((WW => WW.active.source == MW.source)) && this.startQuery(MW);
          this.running.length && RW.open && RW.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(lW).updateSyncTime))
        }
        startQuery(WW) {
          let {
            state: RW
          } = this.view, MW = BW(RW), wW = new AW(RW, MW, WW.explicit, this.view), zR = new nW(WW, wW);
          this.running.push(zR), Promise.resolve(WW.source(wW)).then((WW => {
            zR.context.aborted || (zR.done = WW || null, this.scheduleAccept())
          }), (WW => {
            this.view.dispatch({
              effects: PW.of(null)
            }), (0, CW.X)(this.view.state, WW)
          }))
        }
        scheduleAccept() {
          this.running.every((WW => void 0 !== WW.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(lW).updateSyncTime))
        }
        accept() {
          var WW;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let RW = [],
            MW = this.view.state.facet(lW),
            wW = this.view.state.field(xR);
          for (let CW = 0; CW < this.running.length; CW++) {
            let zR = this.running[CW];
            if (void 0 === zR.done) continue;
            if (this.running.splice(CW--, 1), zR.done) {
              let wW = BW(zR.updates.length ? zR.updates[0].startState : this.view.state),
                CW = Math.min(wW, zR.done.from + (zR.active.explicit ? 0 : 1)),
                AW = new VW(zR.active.source, zR.active.explicit, CW, zR.done, zR.done.from, null !== (WW = zR.done.to) && void 0 !== WW ? WW : wW);
              for (let WW of zR.updates) AW = AW.update(WW, MW);
              if (AW.hasResult()) {
                RW.push(AW);
                continue
              }
            }
            let AW = wW.active.find((WW => WW.source == zR.active.source));
            if (AW && AW.isPending)
              if (null == zR.done) {
                let WW = new EW(zR.active.source, 0);
                for (let RW of zR.updates) WW = WW.update(RW, MW);
                WW.isPending || RW.push(WW)
              } else this.startQuery(AW)
          }(RW.length || wW.open && wW.open.disabled) && this.view.dispatch({
            effects: mR.of(RW)
          })
        }
      }, {
        eventHandlers: {
          blur(WW) {
            let RW = this.view.state.field(xR, !1);
            if (RW && RW.tooltip && this.view.state.facet(lW).closeOnBlur) {
              let MW = RW.open && (0, CW.F)(this.view, RW.open.tooltip);
              MW && MW.dom.contains(WW.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: PW.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: JW.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      LW = "object" == typeof navigator && /Win/.test(navigator.platform),
      HW = wW.p.highest(CW.g.domEventHandlers({
        keydown(WW, RW) {
          let MW = RW.state.field(xR, !1);
          if (!MW || !MW.open || MW.open.disabled || MW.open.selected < 0 || WW.key.length > 1 || WW.ctrlKey && (!LW || !WW.altKey) || WW.metaKey) return !1;
          let wW = MW.open.options[MW.open.selected],
            CW = MW.active.find((WW => WW.source == wW.source)),
            zR = wW.completion.commitCharacters || CW.result.commitCharacters;
          return zR && zR.indexOf(WW.key) > -1 && vR(RW, wW), !1
        }
      })),
      DW = CW.g.baseTheme({
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
    class qR {
      constructor(WW, RW, MW, wW) {
        this.field = WW, this.line = RW, this.from = MW, this.to = wW
      }
    }
    class ZW {
      constructor(WW, RW, MW) {
        this.field = WW, this.from = RW, this.to = MW
      }
      map(WW) {
        let RW = WW.mapPos(this.from, -1, wW.n.TrackDel),
          MW = WW.mapPos(this.to, 1, wW.n.TrackDel);
        return null == RW || null == MW ? null : new ZW(this.field, RW, MW)
      }
    }
    class SW {
      constructor(WW, RW) {
        this.lines = WW, this.fieldPositions = RW
      }
      instantiate(WW, RW) {
        let MW = [],
          wW = [RW],
          CW = WW.doc.lineAt(RW),
          AW = /^\s*/.exec(CW.text)[0];
        for (let yR of this.lines) {
          if (MW.length) {
            let MW = AW,
              CW = /^\t*/.exec(yR)[0].length;
            for (let RW = 0; RW < CW; RW++) MW += WW.facet(zR.cb);
            wW.push(RW + MW.length - CW), yR = MW + yR.slice(CW)
          }
          MW.push(yR), RW += yR.length + 1
        }
        let bR = this.fieldPositions.map((WW => new ZW(WW.field, wW[WW.line] + WW.from, wW[WW.line] + WW.to)));
        return {
          text: MW,
          WA: bR
        }
      }
      static parse(WW) {
        let RW, MW = [],
          wW = [],
          CW = [];
        for (let zR of WW.split(/\r\n?|\n/)) {
          for (; RW = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(zR);) {
            let WW = RW[1] ? +RW[1] : null,
              AW = RW[2] || RW[3] || "",
              bR = -1,
              yR = AW.replace(/\\[{}]/g, (WW => WW[1]));
            for (let RW = 0; RW < MW.length; RW++)(null != WW ? MW[RW].seq == WW : yR && MW[RW].name == yR) && (bR = RW);
            if (bR < 0) {
              let RW = 0;
              for (; RW < MW.length && (null == WW || null != MW[RW].seq && MW[RW].seq < WW);) RW++;
              MW.splice(RW, 0, {
                seq: WW,
                name: yR
              }), bR = RW;
              for (let WW of CW) WW.field >= bR && WW.field++
            }
            for (let MW of CW)
              if (MW.line == wW.length && MW.from > RW.index) {
                let WW = RW[2] ? 3 + (RW[1] || "").length : 2;
                MW.from -= WW, MW.to -= WW
              } CW.push(new qR(bR, wW.length, RW.index, RW.index + yR.length)), zR = zR.slice(0, RW.index) + AW + zR.slice(RW.index + RW[0].length)
          }
          zR = zR.replace(/\\([{}])/g, ((WW, RW, MW) => {
            for (let zR of CW) zR.line == wW.length && zR.from > MW && (zR.from--, zR.to--);
            return RW
          })), wW.push(zR)
        }
        return new SW(wW, CW)
      }
    }
    let WR = CW.c.widget({
        widget: new class extends CW.r {
          toDOM() {
            let WW = document.createElement("span");
            return WW.className = "cm-snippetFieldPosition", WW
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      RR = CW.c.mark({
        class: "cm-snippetField"
      });
    class MR {
      constructor(WW, RW) {
        this.WA = WW, this.active = RW, this.deco = CW.c.set(WW.map((WW => (WW.from == WW.to ? WR : RR).range(WW.from, WW.to))), !0)
      }
      map(WW) {
        let RW = [];
        for (let MW of this.WA) {
          let wW = MW.map(WW);
          if (!wW) return null;
          RW.push(wW)
        }
        return new MR(RW, this.active)
      }
      selectionInsideField(WW) {
        return WW.WA.every((WW => this.WA.some((RW => RW.field == this.active && RW.from <= WW.from && RW.to >= WW.to))))
      }
    }
    const wR = wW.A.define({
        map: (WW, RW) => WW && WW.map(RW)
      }),
      CR = wW.A.define(),
      zM = wW.C.define({
        create: () => null,
        update(WW, RW) {
          for (let MW of RW.effects) {
            if (MW.is(wR)) return MW.value;
            if (MW.is(CR) && WW) return new MR(WW.WA, MW.value)
          }
          return WW && RW.docChanged && (WW = WW.map(RW.changes)), WW && RW.selection && !WW.selectionInsideField(RW.selection) && (WW = null), WW
        },
        provide: WW => CW.g.vA.from(WW, (WW => WW ? WW.deco : CW.c.none))
      });

    function AR(WW, RW) {
      return wW.j.create(WW.filter((WW => WW.field == RW)).map((WW => wW.j.range(WW.from, WW.to))))
    }

    function bM(WW) {
      let RW = SW.parse(WW);
      return (WW, MW, CW, zR) => {
        let {
          text: AW,
          WA: bR
        } = RW.instantiate(WW.state, CW), {
          main: yR
        } = WW.state.selection, NW = {
          changes: {
            from: CW,
            to: zR == yR.from ? yR.to : zR,
            insert: wW.D.of(AW)
          },
          scrollIntoView: !0,
          annotations: MW ? [TW.of(MW), wW.G.userEvent.of("input.complete")] : void 0
        };
        if (bR.length && (NW.selection = AR(bR, 0)), bR.some((WW => WW.field > 0))) {
          let RW = new MR(bR, 0),
            MW = NW.effects = [wR.of(RW)];
          void 0 === WW.state.field(zM, !1) && MW.push(wW.A.appendConfig.of([zM, BR, TR, DW]))
        }
        WW.dispatch(WW.state.update(NW))
      }
    }

    function yM(WW) {
      return RW => {
        let {
          state: MW,
          dispatch: wW
        } = RW, CW = MW.field(zM, !1);
        if (!CW || WW < 0 && 0 == CW.active) return !1;
        let zR = CW.active + WW,
          AW = WW > 0 && !CW.WA.some((RW => RW.field == zR + WW));
        return wW(MW.update({
          selection: AR(CW.WA, zR),
          effects: wR.of(AW ? null : new MR(CW.WA, zR)),
          scrollIntoView: !0
        })), !0
      }
    }
    const NR = [{
        key: "Tab",
        run: yM(1),
        shift: yM(-1)
      }, {
        key: "Escape",
        run: WW => {
          let {
            state: RW,
            dispatch: MW
          } = WW;
          return !!RW.field(zM, !1) && (MW(RW.update({
            effects: wR.of(null)
          })), !0)
        }
      }],
      eR = wW.m.define({
        combine: WW => WW.length ? WW[0] : NR
      }),
      BR = wW.p.highest(CW.S.compute([eR], (WW => WW.facet(eR))));

    function tM(WW, RW) {
      return {
        ...RW,
        apply: bM(WW)
      }
    }
    const TR = CW.g.domEventHandlers({
      mousedown(WW, RW) {
        let MW, wW = RW.state.field(zM, !1);
        if (!wW || null == (MW = RW.posAtCoords({
            x: WW.clientX,
            y: WW.clientY
          }))) return !1;
        let CW = wW.WA.find((WW => WW.from <= MW && WW.to >= MW));
        return !(!CW || CW.field == wW.active) && (RW.dispatch({
          selection: AR(wW.WA, CW.field),
          effects: wR.of(wW.WA.some((WW => WW.field > CW.field)) ? new MR(wW.WA, CW.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const gM = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      iM = wW.A.define({
        map(WW, RW) {
          let MW = RW.mapPos(WW, -1, wW.n.TrackAfter);
          return null == MW ? void 0 : MW
        }
      }),
      YR = new class extends wW.w {};
    YR.startSide = 1, YR.endSide = -1;
    const JR = wW.C.define({
      create: () => wW.s.empty,
      update(WW, RW) {
        if (WW = WW.map(RW.changes), RW.selection) {
          let MW = RW.state.doc.lineAt(RW.selection.main.head);
          WW = WW.update({
            filter: WW => WW >= MW.from && WW <= MW.to
          })
        }
        for (let MW of RW.effects) MW.is(iM) && (WW = WW.update({
          add: [YR.range(MW.value, MW.value + 1)]
        }));
        return WW
      }
    });

    function PR() {
      return [fR, JR]
    }
    const IR = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function oR(WW) {
      for (let RW = 0; RW < 16; RW += 2)
        if (IR.charCodeAt(RW) == WW) return IR.charAt(RW + 1);
      return (0, wW.X)(WW < 128 ? WW : WW + 1)
    }

    function lR(WW, RW) {
      return WW.languageDataAt("closeBrackets", RW)[0] || gM
    }
    const FR = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      fR = CW.g.inputHandler.of(((WW, RW, MW, CW) => {
        if ((FR ? WW.composing : WW.compositionStarted) || WW.state.readOnly) return !1;
        let zR = WW.state.selection.main;
        if (CW.length > 2 || 2 == CW.length && 1 == (0, wW.L)((0, wW.J)(CW, 0)) || RW != zR.from || MW != zR.to) return !1;
        let AW = function(WW, RW) {
          let MW = lR(WW, WW.selection.main.head),
            CW = MW.brackets || gM.brackets;
          for (let zR of CW) {
            let AW = oR((0, wW.J)(zR, 0));
            if (RW == zR) return AW == zR ? kM(WW, zR, CW.indexOf(zR + zR + zR) > -1, MW) : XR(WW, zR, AW, MW.before || gM.before);
            if (RW == AW && rM(WW, WW.selection.main.from)) return jM(WW, zR, AW)
          }
          return null
        }(WW.state, CW);
        return !!AW && (WW.dispatch(AW), !0)
      })),
      QR = [{
        key: "Backspace",
        run: WW => {
          let {
            state: RW,
            dispatch: MW
          } = WW;
          if (RW.readOnly) return !1;
          let CW = lR(RW, RW.selection.main.head).brackets || gM.brackets,
            zR = null,
            AW = RW.changeByRange((WW => {
              if (WW.empty) {
                let MW = function(WW, RW) {
                  let MW = WW.sliceString(RW - 2, RW);
                  return (0, wW.L)((0, wW.J)(MW, 0)) == MW.length ? MW : MW.slice(1)
                }(RW.doc, WW.head);
                for (let zR of CW)
                  if (zR == MW && cM(RW.doc, WW.head) == oR((0, wW.J)(zR, 0))) return {
                    changes: {
                      from: WW.head - zR.length,
                      to: WW.head + zR.length
                    },
                    range: wW.j.cursor(WW.head - zR.length)
                  }
              }
              return {
                range: zR = WW
              }
            }));
          return zR || MW(RW.update(AW, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !zR
        }
      }];

    function rM(WW, RW) {
      let MW = !1;
      return WW.field(JR).between(0, WW.doc.length, (WW => {
        WW == RW && (MW = !0)
      })), MW
    }

    function cM(WW, RW) {
      let MW = WW.sliceString(RW, RW + 2);
      return MW.slice(0, (0, wW.L)((0, wW.J)(MW, 0)))
    }

    function XR(WW, RW, MW, CW) {
      let zR = null,
        AW = WW.changeByRange((AW => {
          if (!AW.empty) return {
            changes: [{
              insert: RW,
              from: AW.from
            }, {
              insert: MW,
              from: AW.to
            }],
            effects: iM.of(AW.to + RW.length),
            range: wW.j.range(AW.anchor + RW.length, AW.head + RW.length)
          };
          let bR = cM(WW.doc, AW.head);
          return !bR || /\s/.test(bR) || CW.indexOf(bR) > -1 ? {
            changes: {
              insert: RW + MW,
              from: AW.head
            },
            effects: iM.of(AW.head + RW.length),
            range: wW.j.cursor(AW.head + RW.length)
          } : {
            range: zR = AW
          }
        }));
      return zR ? null : WW.update(AW, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function jM(WW, RW, MW) {
      let CW = null,
        zR = WW.changeByRange((RW => RW.empty && cM(WW.doc, RW.head) == MW ? {
          changes: {
            from: RW.head,
            to: RW.head + MW.length,
            insert: MW
          },
          range: wW.j.cursor(RW.head + MW.length)
        } : CW = {
          range: RW
        }));
      return CW ? null : WW.update(zR, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function kM(WW, RW, MW, CW) {
      let AW = CW.stringPrefixes || gM.stringPrefixes,
        bR = null,
        yR = WW.changeByRange((CW => {
          if (!CW.empty) return {
            changes: [{
              insert: RW,
              from: CW.from
            }, {
              insert: RW,
              from: CW.to
            }],
            effects: iM.of(CW.to + RW.length),
            range: wW.j.range(CW.anchor + RW.length, CW.head + RW.length)
          };
          let yR, NW = CW.head,
            eW = cM(WW.doc, NW);
          if (eW == RW) {
            if (aM(WW, NW)) return {
              changes: {
                insert: RW + RW,
                from: NW
              },
              effects: iM.of(NW + RW.length),
              range: wW.j.cursor(NW + RW.length)
            };
            if (rM(WW, NW)) {
              let CW = MW && WW.sliceDoc(NW, NW + 3 * RW.length) == RW + RW + RW ? RW + RW + RW : RW;
              return {
                changes: {
                  from: NW,
                  to: NW + CW.length,
                  insert: CW
                },
                range: wW.j.cursor(NW + CW.length)
              }
            }
          } else {
            if (MW && WW.sliceDoc(NW - 2 * RW.length, NW) == RW + RW && (yR = sR(WW, NW - 2 * RW.length, AW)) > -1 && aM(WW, yR)) return {
              changes: {
                insert: RW + RW + RW + RW,
                from: NW
              },
              effects: iM.of(NW + RW.length),
              range: wW.j.cursor(NW + RW.length)
            };
            if (WW.charCategorizer(NW)(eW) != wW.g.Word && sR(WW, NW, AW) > -1 && ! function(WW, RW, MW, wW) {
                let CW = (0, zR.nb)(WW).resolveInner(RW, -1),
                  AW = wW.reduce(((WW, RW) => Math.max(WW, RW.length)), 0);
                for (let zR = 0; zR < 5; zR++) {
                  let zR = WW.sliceDoc(CW.from, Math.min(CW.to, CW.from + MW.length + AW)),
                    bR = zR.indexOf(MW);
                  if (!bR || bR > -1 && wW.indexOf(zR.slice(0, bR)) > -1) {
                    let RW = CW.firstChild;
                    for (; RW && RW.from == CW.from && RW.to - RW.from > MW.length + bR;) {
                      if (WW.sliceDoc(RW.to - MW.length, RW.to) == MW) return !1;
                      RW = RW.firstChild
                    }
                    return !0
                  }
                  let yR = CW.to == RW && CW.parent;
                  if (!yR) break;
                  CW = yR
                }
                return !1
              }(WW, NW, RW, AW)) return {
              changes: {
                insert: RW + RW,
                from: NW
              },
              effects: iM.of(NW + RW.length),
              range: wW.j.cursor(NW + RW.length)
            }
          }
          return {
            range: bR = CW
          }
        }));
      return bR ? null : WW.update(yR, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function aM(WW, RW) {
      let MW = (0, zR.nb)(WW).resolveInner(RW + 1);
      return MW.parent && MW.from == RW
    }

    function sR(WW, RW, MW) {
      let CW = WW.charCategorizer(RW);
      if (CW(WW.sliceDoc(RW - 1, RW)) != wW.g.Word) return RW;
      for (let zR of MW) {
        let MW = RW - zR.length;
        if (WW.sliceDoc(MW, RW) == zR && CW(WW.sliceDoc(MW - 1, MW)) != wW.g.Word) return MW
      }
      return -1
    }

    function dR() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [HW, xR, lW.of(WW), GW, hR, DW]
    }
    const pR = [{
        key: "Ctrl-Space",
        run: OW
      }, {
        mac: "Alt-`",
        run: OW
      }, {
        mac: "Alt-i",
        run: OW
      }, {
        key: "Escape",
        run: WW => {
          let RW = WW.state.field(xR, !1);
          return !(!RW || !RW.active.some((WW => 0 != WW.state))) && (WW.dispatch({
            effects: PW.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: uW(!0)
      }, {
        key: "ArrowUp",
        run: uW(!1)
      }, {
        key: "PageDown",
        run: uW(!0, "page")
      }, {
        key: "PageUp",
        run: uW(!1, "page")
      }, {
        key: "Enter",
        run: WW => {
          let RW = WW.state.field(xR, !1);
          return !(WW.state.readOnly || !RW || !RW.open || RW.open.selected < 0 || RW.open.disabled || Date.now() - RW.open.timestamp < WW.state.facet(lW).interactionDelay) && vR(WW, RW.open.options[RW.open.selected])
        }
      }],
      hR = wW.p.highest(CW.S.computeN([lW], (WW => WW.facet(lW).defaultKeymap ? [pR] : [])))
  },
  38924: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => NW,
      g: () => tR,
      h: () => eW,
      j: () => BW
    });
    var wW = MW(38778);
    class CW {
      constructor(WW, RW, MW, wW) {
        this.origin = WW, this.changes = RW, this.effects = MW, this.clientID = wW
      }
    }
    class zR {
      constructor(WW, RW) {
        this.version = WW, this.unconfirmed = RW
      }
    }
    const AW = wW.m.define({
        combine(WW) {
          let RW = (0, wW.O)(WW, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: WW => WW
          });
          return null == RW.clientID && (RW.clientID = WW.length && WW[0].generatedID || ""), RW
        }
      }),
      bR = wW.d.define(),
      yR = wW.C.define({
        create: WW => new zR(WW.facet(AW).startVersion, []),
        update(WW, RW) {
          let MW = RW.annotation(bR);
          if (MW) return MW;
          let {
            sharedEffects: wW,
            clientID: yR
          } = RW.startState.facet(AW), NW = wW(RW);
          return NW.length || !RW.changes.empty ? new zR(WW.version, WW.unconfirmed.concat(new CW(RW, RW.changes, NW, yR))) : WW
        }
      });

    function NW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [yR, AW.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, WW))]
    }

    function eW(WW, RW) {
      let {
        version: MW,
        unconfirmed: NW
      } = WW.field(yR), {
        clientID: eW
      } = WW.facet(AW);
      MW += RW.length;
      let BW = [],
        tR = null,
        TW = 0;
      for (let CW of RW) {
        let WW = TW < NW.length ? NW[TW] : null;
        WW && WW.clientID == CW.clientID ? (tR && (tR = tR.map(WW.changes, !0)), BW = wW.A.mapEffects(BW, CW.changes), TW++) : (BW = wW.A.mapEffects(BW, CW.changes), CW.effects && (BW = BW.concat(CW.effects)), tR = tR ? tR.compose(CW.changes) : CW.changes)
      }
      if (TW && (NW = NW.slice(TW)), NW.length && (tR && (NW = NW.map((WW => {
          let RW = WW.changes.map(tR);
          return tR = tR.map(WW.changes, !0), new CW(WW.origin, RW, wW.A.mapEffects(WW.effects, tR), eW)
        }))), BW.length)) {
        let WW = NW.reduce(((WW, RW) => WW.compose(RW.changes)), wW.ChangeSet.empty(NW[0].changes.length));
        BW = wW.A.mapEffects(BW, WW)
      }
      return tR ? WW.update({
        changes: tR,
        effects: BW,
        annotations: [wW.G.addToHistory.of(!1), wW.G.remote.of(!0), bR.of(new zR(MW, NW))],
        filter: !1
      }) : WW.update({
        annotations: [bR.of(new zR(MW, NW))]
      })
    }

    function BW(WW) {
      return WW.field(yR).unconfirmed
    }

    function tR(WW) {
      return WW.field(yR).version
    }
  },
  38820: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => iM
    });
    var wW = MW(38808);
    class CW {
      constructor(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
        let NW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          eW = arguments.length > 10 ? arguments[10] : void 0;
        this.p = WW, this.stack = RW, this.state = MW, this.reducePos = wW, this.pos = CW, this.score = zR, this.buffer = AW, this.bufferBase = bR, this.curContext = yR, this.lookAhead = NW, this.parent = eW
      }
      toString() {
        return `[${this.stack.filter(((WW,RW)=>RW%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wW = WW.parser.context;
        return new CW(WW, [], RW, MW, MW, 0, [], 0, wW ? new zR(wW, wW.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(WW, RW) {
        this.stack.push(this.state, RW, this.bufferBase + this.buffer.length), this.state = WW
      }
      reduce(WW) {
        var RW;
        let MW = WW >> 19,
          wW = 65535 & WW,
          {
            parser: CW
          } = this.p,
          zR = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          AW = CW.dynamicPrecedence(wW);
        if (AW && (this.score += AW), 0 == MW) return this.pushState(CW.getGoto(this.state, wW, !0), this.reducePos), wW < CW.minRepeatTerm && this.storeNode(wW, this.reducePos, this.reducePos, zR ? 8 : 4, !0), void this.reduceContext(wW, this.reducePos);
        let bR = this.stack.length - 3 * (MW - 1) - (262144 & WW ? 6 : 0),
          yR = bR ? this.stack[bR - 2] : this.p.WA[0].from,
          NW = this.reducePos - yR;
        NW >= 2e3 && !(null === (RW = this.p.parser.nodeSet.types[wW]) || void 0 === RW ? void 0 : RW.isAnonymous) && (yR == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = NW) : this.p.lastBigReductionSize < NW && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = yR, this.p.lastBigReductionSize = NW));
        let eW = bR ? this.stack[bR - 1] : 0,
          BW = this.bufferBase + this.buffer.length - eW;
        if (wW < CW.minRepeatTerm || 131072 & WW) {
          let WW = CW.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(wW, yR, WW, BW + 4, !0)
        }
        if (262144 & WW) this.state = this.stack[bR];
        else {
          let WW = this.stack[bR - 3];
          this.state = CW.getGoto(WW, wW, !0)
        }
        for (; this.stack.length > bR;) this.stack.pop();
        this.reduceContext(wW, yR)
      }
      storeNode(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == WW && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let WW = this,
            wW = this.buffer.length;
          if (0 == wW && WW.parent && (wW = WW.bufferBase - WW.parent.bufferBase, WW = WW.parent), wW > 0 && 0 == WW.buffer[wW - 4] && WW.buffer[wW - 1] > -1) {
            if (RW == MW) return;
            if (WW.buffer[wW - 2] >= RW) return void(WW.buffer[wW - 2] = MW)
          }
        }
        if (CW && this.pos != MW) {
          let CW = this.buffer.length;
          if (CW > 0 && (0 != this.buffer[CW - 4] || this.buffer[CW - 1] < 0)) {
            let WW = !1;
            for (let RW = CW; RW > 0 && this.buffer[RW - 2] > MW; RW -= 4)
              if (this.buffer[RW - 1] >= 0) {
                WW = !0;
                break
              } if (WW)
              for (; CW > 0 && this.buffer[CW - 2] > MW;) this.buffer[CW] = this.buffer[CW - 4], this.buffer[CW + 1] = this.buffer[CW - 3], this.buffer[CW + 2] = this.buffer[CW - 2], this.buffer[CW + 3] = this.buffer[CW - 1], CW -= 4, wW > 4 && (wW -= 4)
          }
          this.buffer[CW] = WW, this.buffer[CW + 1] = RW, this.buffer[CW + 2] = MW, this.buffer[CW + 3] = wW
        } else this.buffer.push(WW, RW, MW, wW)
      }
      shift(WW, RW, MW, wW) {
        if (131072 & WW) this.pushState(65535 & WW, this.pos);
        else if (0 == (262144 & WW)) {
          let CW = WW,
            {
              parser: zR
            } = this.p;
          this.pos = wW;
          let AW = zR.stateFlag(CW, 1);
          !AW && (wW > MW || RW <= zR.maxNode) && (this.reducePos = wW), this.pushState(CW, AW ? MW : Math.min(MW, this.reducePos)), this.shiftContext(RW, MW), RW <= zR.maxNode && this.buffer.push(RW, MW, wW, 4)
        } else this.pos = wW, this.shiftContext(RW, MW), RW <= this.p.parser.maxNode && this.buffer.push(RW, MW, wW, 4)
      }
      apply(WW, RW, MW, wW) {
        65536 & WW ? this.reduce(WW) : this.shift(WW, RW, MW, wW)
      }
      useNode(WW, RW) {
        let MW = this.p.reused.length - 1;
        (MW < 0 || this.p.reused[MW] != WW) && (this.p.reused.push(WW), MW++);
        let wW = this.pos;
        this.reducePos = this.pos = wW + WW.length, this.pushState(RW, wW), this.buffer.push(MW, wW, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, WW, this, this.p.stream.reset(this.pos - WW.length)))
      }
      split() {
        let WW = this,
          RW = WW.buffer.length;
        for (; RW > 0 && WW.buffer[RW - 2] > WW.reducePos;) RW -= 4;
        let MW = WW.buffer.slice(RW),
          wW = WW.bufferBase + RW;
        for (; WW && wW == WW.bufferBase;) WW = WW.parent;
        return new CW(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, MW, wW, this.curContext, this.lookAhead, WW)
      }
      recoverByDelete(WW, RW) {
        let MW = WW <= this.p.parser.maxNode;
        MW && this.storeNode(WW, this.pos, RW, 4), this.storeNode(0, this.pos, RW, MW ? 8 : 4), this.pos = this.reducePos = RW, this.score -= 190
      }
      canShift(WW) {
        for (let RW = new AW(this);;) {
          let MW = this.p.parser.stateSlot(RW.state, 4) || this.p.parser.hasAction(RW.state, WW);
          if (0 == MW) return !1;
          if (0 == (65536 & MW)) return !0;
          RW.reduce(MW)
        }
      }
      recoverByInsert(WW) {
        if (this.stack.length >= 300) return [];
        let RW = this.p.parser.nextStates(this.state);
        if (RW.length > 8 || this.stack.length >= 120) {
          let MW = [];
          for (let wW, CW = 0; CW < RW.length; CW += 2)(wW = RW[CW + 1]) != this.state && this.p.parser.hasAction(wW, WW) && MW.push(RW[CW], wW);
          if (this.stack.length < 120)
            for (let WW = 0; MW.length < 8 && WW < RW.length; WW += 2) {
              let wW = RW[WW + 1];
              MW.some(((WW, RW) => 1 & RW && WW == wW)) || MW.push(RW[WW], wW)
            }
          RW = MW
        }
        let MW = [];
        for (let wW = 0; wW < RW.length && MW.length < 4; wW += 2) {
          let WW = RW[wW + 1];
          if (WW == this.state) continue;
          let CW = this.split();
          CW.pushState(WW, this.pos), CW.storeNode(0, CW.pos, CW.pos, 4, !0), CW.shiftContext(RW[wW], this.pos), CW.reducePos = this.pos, CW.score -= 200, MW.push(CW)
        }
        return MW
      }
      forceReduce() {
        let {
          parser: WW
        } = this.p, RW = WW.stateSlot(this.state, 5);
        if (0 == (65536 & RW)) return !1;
        if (!WW.validAction(this.state, RW)) {
          let MW = RW >> 19,
            wW = 65535 & RW,
            CW = this.stack.length - 3 * MW;
          if (CW < 0 || WW.getGoto(this.stack[CW], wW, !1) < 0) {
            let WW = this.findForcedReduction();
            if (null == WW) return !1;
            RW = WW
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(RW), !0
      }
      findForcedReduction() {
        let {
          parser: WW
        } = this.p, RW = [], MW = (wW, CW) => {
          if (!RW.includes(wW)) return RW.push(wW), WW.allActions(wW, (RW => {
            if (393216 & RW);
            else if (65536 & RW) {
              let MW = (RW >> 19) - CW;
              if (MW > 1) {
                let wW = 65535 & RW,
                  CW = this.stack.length - 3 * MW;
                if (CW >= 0 && WW.getGoto(this.stack[CW], wW, !1) >= 0) return MW << 19 | 65536 | wW
              }
            } else {
              let WW = MW(RW, CW + 1);
              if (null != WW) return WW
            }
          }))
        };
        return MW(this.state, 0)
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
        for (let RW = 0; RW < this.stack.length; RW += 3)
          if (this.stack[RW] != WW.stack[RW]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(WW) {
        return this.p.parser.dialect.flags[WW]
      }
      shiftContext(WW, RW) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, WW, this, this.p.stream.reset(RW)))
      }
      reduceContext(WW, RW) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, WW, this, this.p.stream.reset(RW)))
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
          let RW = new zR(this.curContext.tracker, WW);
          RW.hash != this.curContext.hash && this.emitContext(), this.curContext = RW
        }
      }
      setLookAhead(WW) {
        return !(WW <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = WW, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class zR {
      constructor(WW, RW) {
        this.tracker = WW, this.context = RW, this.hash = WW.strict ? WW.hash(RW) : 0
      }
    }
    class AW {
      constructor(WW) {
        this.start = WW, this.state = WW.state, this.stack = WW.stack, this.base = this.stack.length
      }
      reduce(WW) {
        let RW = 65535 & WW,
          MW = WW >> 19;
        0 == MW ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (MW - 1);
        let wW = this.start.p.parser.getGoto(this.stack[this.base - 3], RW, !0);
        this.state = wW
      }
    }
    class bR {
      constructor(WW, RW, MW) {
        this.stack = WW, this.pos = RW, this.index = MW, this.buffer = WW.buffer, 0 == this.index && this.maybeNext()
      }
      static create(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW.bufferBase + WW.buffer.length;
        return new bR(WW, RW, RW - WW.bufferBase)
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
        return new bR(this.stack, this.pos, this.index)
      }
    }

    function yR(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof WW) return WW;
      let MW = null;
      for (let wW = 0, CW = 0; wW < WW.length;) {
        let zR = 0;
        for (;;) {
          let RW = WW.charCodeAt(wW++),
            MW = !1;
          if (126 == RW) {
            zR = 65535;
            break
          }
          RW >= 92 && RW--, RW >= 34 && RW--;
          let CW = RW - 32;
          if (CW >= 46 && (CW -= 46, MW = !0), zR += CW, MW) break;
          zR *= 46
        }
        MW ? MW[CW++] = zR : MW = new RW(zR)
      }
      return MW
    }
    class NW {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const eW = new NW;
    class BW {
      constructor(WW, RW) {
        this.input = WW, this.WA = RW, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = eW, this.rangeIndex = 0, this.pos = this.chunkPos = RW[0].from, this.range = RW[0], this.end = RW[RW.length - 1].to, this.readNext()
      }
      resolveOffset(WW, RW) {
        let MW = this.range,
          wW = this.rangeIndex,
          CW = this.pos + WW;
        for (; CW < MW.from;) {
          if (!wW) return null;
          let WW = this.WA[--wW];
          CW -= MW.from - WW.to, MW = WW
        }
        for (; RW < 0 ? CW > MW.to : CW >= MW.to;) {
          if (wW == this.WA.length - 1) return null;
          let WW = this.WA[++wW];
          CW += WW.from - MW.to, MW = WW
        }
        return CW
      }
      clipPos(WW) {
        if (WW >= this.range.from && WW < this.range.to) return WW;
        for (let RW of this.WA)
          if (RW.to > WW) return Math.max(WW, RW.from);
        return this.end
      }
      peek(WW) {
        let RW, MW, wW = this.chunkOff + WW;
        if (wW >= 0 && wW < this.chunk.length) RW = this.pos + WW, MW = this.chunk.charCodeAt(wW);
        else {
          let wW = this.resolveOffset(WW, 1);
          if (null == wW) return -1;
          if (RW = wW, RW >= this.chunk2Pos && RW < this.chunk2Pos + this.chunk2.length) MW = this.chunk2.charCodeAt(RW - this.chunk2Pos);
          else {
            let WW = this.rangeIndex,
              wW = this.range;
            for (; wW.to <= RW;) wW = this.WA[++WW];
            this.chunk2 = this.input.chunk(this.chunk2Pos = RW), RW + this.chunk2.length > wW.to && (this.chunk2 = this.chunk2.slice(0, wW.to - RW)), MW = this.chunk2.charCodeAt(0)
          }
        }
        return RW >= this.token.lookAhead && (this.token.lookAhead = RW + 1), MW
      }
      acceptToken(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = RW ? this.resolveOffset(RW, -1) : this.pos;
        if (null == MW || MW < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = WW, this.token.end = MW
      }
      acceptTokenTo(WW, RW) {
        this.token.value = WW, this.token.end = RW
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: WW,
            chunkPos: RW
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = WW, this.chunk2Pos = RW, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let WW = this.input.chunk(this.pos),
            RW = this.pos + WW.length;
          this.chunk = RW > this.range.to ? WW.slice(0, this.range.to - this.pos) : WW, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += WW; this.pos + WW >= this.range.to;) {
          if (this.rangeIndex == this.WA.length - 1) return this.setDone();
          WW -= this.range.to - this.pos, this.range = this.WA[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += WW, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.WA[this.rangeIndex = this.WA.length - 1], this.chunk = "", this.next = -1
      }
      reset(WW, RW) {
        if (RW ? (this.token = RW, RW.start = WW, RW.lookAhead = WW + 1, RW.value = RW.extended = -1) : this.token = eW, this.pos != WW) {
          if (this.pos = WW, WW == this.end) return this.setDone(), this;
          for (; WW < this.range.from;) this.range = this.WA[--this.rangeIndex];
          for (; WW >= this.range.to;) this.range = this.WA[++this.rangeIndex];
          WW >= this.chunkPos && WW < this.chunkPos + this.chunk.length ? this.chunkOff = WW - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(WW, RW) {
        if (WW >= this.chunkPos && RW <= this.chunkPos + this.chunk.length) return this.chunk.slice(WW - this.chunkPos, RW - this.chunkPos);
        if (WW >= this.chunk2Pos && RW <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(WW - this.chunk2Pos, RW - this.chunk2Pos);
        if (WW >= this.range.from && RW <= this.range.to) return this.input.read(WW, RW);
        let MW = "";
        for (let wW of this.WA) {
          if (wW.from >= RW) break;
          wW.to > WW && (MW += this.input.read(Math.max(wW.from, WW), Math.min(wW.to, RW)))
        }
        return MW
      }
    }
    class tR {
      constructor(WW, RW) {
        this.data = WW, this.id = RW
      }
      token(WW, RW) {
        let {
          parser: MW
        } = RW.p;
        iR(this.data, WW, RW, this.id, MW.data, MW.tokenPrecTable)
      }
    }
    tR.prototype.contextual = tR.prototype.fallback = tR.prototype.extend = !1;
    class TW {
      constructor(WW, RW, MW) {
        this.precTable = RW, this.elseToken = MW, this.data = "string" == typeof WW ? yR(WW) : WW
      }
      token(WW, RW) {
        let MW = WW.pos,
          wW = 0;
        for (;;) {
          let MW = WW.next < 0,
            CW = WW.resolveOffset(1, 1);
          if (iR(this.data, WW, RW, 0, this.data, this.precTable), WW.token.value > -1) break;
          if (null == this.elseToken) return;
          if (MW || wW++, null == CW) break;
          WW.reset(CW, WW.token)
        }
        wW && (WW.reset(MW, WW.token), WW.acceptToken(this.elseToken, wW))
      }
    }
    TW.prototype.contextual = tR.prototype.fallback = tR.prototype.extend = !1;
    class gR {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = WW, this.contextual = !!RW.contextual, this.fallback = !!RW.fallback, this.extend = !!RW.extend
      }
    }

    function iR(WW, RW, MW, wW, CW, zR) {
      let AW = 0,
        bR = 1 << wW,
        {
          dialect: yR
        } = MW.p.parser;
      WW: for (; 0 != (bR & WW[AW]);) {
        let MW = WW[AW + 1];
        for (let BW = AW + 3; BW < MW; BW += 2)
          if ((WW[BW + 1] & bR) > 0) {
            let MW = WW[BW];
            if (yR.allows(MW) && (-1 == RW.token.value || RW.token.value == MW || JW(MW, RW.token.value, CW, zR))) {
              RW.acceptToken(MW);
              break
            }
          } let wW = RW.next,
          NW = 0,
          eW = WW[AW + 2];
        if (!(RW.next < 0 && eW > NW && 65535 == WW[MW + 3 * eW - 3])) {
          for (; NW < eW;) {
            let CW = NW + eW >> 1,
              zR = MW + CW + (CW << 1),
              bR = WW[zR],
              yR = WW[zR + 1] || 65536;
            if (wW < bR) eW = CW;
            else {
              if (!(wW >= yR)) {
                AW = WW[zR + 2], RW.advance();
                continue WW
              }
              NW = CW + 1
            }
          }
          break
        }
        AW = WW[MW + 3 * eW - 1]
      }
    }

    function YW(WW, RW, MW) {
      for (let wW, CW = RW; 65535 != (wW = WW[CW]); CW++)
        if (wW == MW) return CW - RW;
      return -1
    }

    function JW(WW, RW, MW, wW) {
      let CW = YW(MW, wW, RW);
      return CW < 0 || YW(MW, wW, WW) < CW
    }
    const PW = "undefined" != typeof process && {
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
    let IW = null;

    function oW(WW, RW, MW) {
      let CW = WW.cursor(wW.g.IncludeAnonymous);
      for (CW.moveTo(RW);;)
        if (!(MW < 0 ? CW.childBefore(RW) : CW.childAfter(RW)))
          for (;;) {
            if ((MW < 0 ? CW.to < RW : CW.from > RW) && !CW.type.isError) return MW < 0 ? Math.max(0, Math.min(CW.to - 1, RW - 25)) : Math.min(WW.length, Math.max(CW.from + 1, RW + 25));
            if (MW < 0 ? CW.prevSibling() : CW.nextSibling()) break;
            if (!CW.parent()) return MW < 0 ? 0 : WW.length
          }
    }
    class lW {
      constructor(WW, RW) {
        this.fragments = WW, this.nodeSet = RW, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let WW = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (WW) {
          for (this.safeFrom = WW.openStart ? oW(WW.tree, WW.from + WW.offset, 1) - WW.offset : WW.from, this.safeTo = WW.openEnd ? oW(WW.tree, WW.to + WW.offset, -1) - WW.offset : WW.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(WW.tree), this.start.push(-WW.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(WW) {
        if (WW < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= WW;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let RW = this.trees.length - 1;
          if (RW < 0) return this.nextFragment(), null;
          let MW = this.trees[RW],
            CW = this.index[RW];
          if (CW == MW.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let zR = MW.children[CW],
            AW = this.start[RW] + MW.positions[CW];
          if (AW > WW) return this.nextStart = AW, null;
          if (zR instanceof wW.z) {
            if (AW == WW) {
              if (AW < this.safeFrom) return null;
              let WW = AW + zR.length;
              if (WW <= this.safeTo) {
                let RW = zR.prop(wW.j.lookAhead);
                if (!RW || WW + RW < this.fragment.to) return zR
              }
            }
            this.index[RW]++, AW + zR.length >= Math.max(this.safeFrom, WW) && (this.trees.push(zR), this.start.push(AW), this.index.push(0))
          } else this.index[RW]++, this.nextStart = AW + zR.length
        }
      }
    }
    class FW {
      constructor(WW, RW) {
        this.stream = RW, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = WW.tokenizers.map((WW => new NW))
      }
      getActions(WW) {
        let RW = 0,
          MW = null,
          {
            parser: wW
          } = WW.p,
          {
            tokenizers: CW
          } = wW,
          zR = wW.stateSlot(WW.state, 3),
          AW = WW.curContext ? WW.curContext.hash : 0,
          bR = 0;
        for (let yR = 0; yR < CW.length; yR++) {
          if (0 == (1 << yR & zR)) continue;
          let wW = CW[yR],
            NW = this.tokens[yR];
          if ((!MW || wW.fallback) && ((wW.contextual || NW.start != WW.pos || NW.mask != zR || NW.context != AW) && (this.updateCachedToken(NW, wW, WW), NW.mask = zR, NW.context = AW), NW.lookAhead > NW.end + 25 && (bR = Math.max(NW.lookAhead, bR)), 0 != NW.value)) {
            let CW = RW;
            if (NW.extended > -1 && (RW = this.addActions(WW, NW.extended, NW.end, RW)), RW = this.addActions(WW, NW.value, NW.end, RW), !wW.extend && (MW = NW, RW > CW)) break
          }
        }
        for (; this.actions.length > RW;) this.actions.pop();
        return bR && WW.setLookAhead(bR), MW || WW.pos != this.stream.end || (MW = new NW, MW.value = WW.p.parser.eofTerm, MW.start = MW.end = WW.pos, RW = this.addActions(WW, MW.value, MW.end, RW)), this.mainToken = MW, this.actions
      }
      getMainToken(WW) {
        if (this.mainToken) return this.mainToken;
        let RW = new NW,
          {
            pos: MW,
            p: wW
          } = WW;
        return RW.start = MW, RW.end = Math.min(MW + 1, wW.stream.end), RW.value = MW == wW.stream.end ? wW.parser.eofTerm : 0, RW
      }
      updateCachedToken(WW, RW, MW) {
        let wW = this.stream.clipPos(MW.pos);
        if (RW.token(this.stream.reset(wW, WW), MW), WW.value > -1) {
          let {
            parser: RW
          } = MW.p;
          for (let wW = 0; wW < RW.specialized.length; wW++)
            if (RW.specialized[wW] == WW.value) {
              let CW = RW.specializers[wW](this.stream.read(WW.start, WW.end), MW);
              if (CW >= 0 && MW.p.parser.dialect.allows(CW >> 1)) {
                0 == (1 & CW) ? WW.value = CW >> 1 : WW.extended = CW >> 1;
                break
              }
            }
        } else WW.value = 0, WW.end = this.stream.clipPos(wW + 1)
      }
      putAction(WW, RW, MW, wW) {
        for (let CW = 0; CW < wW; CW += 3)
          if (this.actions[CW] == WW) return wW;
        return this.actions[wW++] = WW, this.actions[wW++] = RW, this.actions[wW++] = MW, wW
      }
      addActions(WW, RW, MW, wW) {
        let {
          state: CW
        } = WW, {
          parser: zR
        } = WW.p, {
          data: AW
        } = zR;
        for (let bR = 0; bR < 2; bR++)
          for (let WW = zR.stateSlot(CW, bR ? 2 : 1);; WW += 3) {
            if (65535 == AW[WW]) {
              if (1 != AW[WW + 1]) {
                0 == wW && 2 == AW[WW + 1] && (wW = this.putAction(jR(AW, WW + 2), RW, MW, wW));
                break
              }
              WW = jR(AW, WW + 2)
            }
            AW[WW] == RW && (wW = this.putAction(jR(AW, WW + 1), RW, MW, wW))
          }
        return wW
      }
    }
    class fW {
      constructor(WW, RW, MW, wW) {
        this.parser = WW, this.input = RW, this.WA = wW, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new BW(RW, wW), this.tokens = new FW(WW, this.stream), this.topTerm = WW.top[1];
        let {
          from: zR
        } = wW[0];
        this.stacks = [CW.start(this, WW.top[0], zR)], this.fragments = MW.length && this.stream.end - zR > 4 * WW.bufferLength ? new lW(MW, WW.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let WW, RW, MW = this.stacks,
          wW = this.minStackPos,
          CW = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == MW.length) {
          let [WW] = MW;
          for (; WW.forceReduce() && WW.stack.length && WW.stack[WW.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let zR = 0; zR < MW.length; zR++) {
          let AW = MW[zR];
          for (;;) {
            if (this.tokens.mainToken = null, AW.pos > wW) CW.push(AW);
            else {
              if (this.advanceStack(AW, CW, MW)) continue;
              {
                WW || (WW = [], RW = []), WW.push(AW);
                let MW = this.tokens.getMainToken(AW);
                RW.push(MW.value, MW.end)
              }
            }
            break
          }
        }
        if (!CW.length) {
          let RW = WW && function(WW) {
            let RW = null;
            for (let MW of WW) {
              let WW = MW.p.stoppedAt;
              (MW.pos == MW.p.stream.end || null != WW && MW.pos > WW) && MW.p.parser.stateFlag(MW.state, 2) && (!RW || RW.score < MW.score) && (RW = MW)
            }
            return RW
          }(WW);
          if (RW) return PW && console.log("Finish with " + this.stackID(RW)), this.stackToTree(RW);
          if (this.parser.strict) throw PW && WW && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + wW);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && WW) {
          let MW = null != this.stoppedAt && WW[0].pos > this.stoppedAt ? WW[0] : this.runRecovery(WW, RW, CW);
          if (MW) return PW && console.log("Force-finish " + this.stackID(MW)), this.stackToTree(MW.forceAll())
        }
        if (this.recovering) {
          let WW = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (CW.length > WW)
            for (CW.sort(((WW, RW) => RW.score - WW.score)); CW.length > WW;) CW.pop();
          CW.some((WW => WW.reducePos > wW)) && this.recovering--
        } else if (CW.length > 1) {
          WW: for (let WW = 0; WW < CW.length - 1; WW++) {
            let RW = CW[WW];
            for (let MW = WW + 1; MW < CW.length; MW++) {
              let wW = CW[MW];
              if (RW.sameState(wW) || RW.buffer.length > 500 && wW.buffer.length > 500) {
                if (!((RW.score - wW.score || RW.buffer.length - wW.buffer.length) > 0)) {
                  CW.splice(WW--, 1);
                  continue WW
                }
                CW.splice(MW--, 1)
              }
            }
          }
          CW.length > 12 && (CW.sort(((WW, RW) => RW.score - WW.score)), CW.splice(12, CW.length - 12))
        }
        this.minStackPos = CW[0].pos;
        for (let zR = 1; zR < CW.length; zR++) CW[zR].pos < this.minStackPos && (this.minStackPos = CW[zR].pos);
        return null
      }
      stopAt(WW) {
        if (null != this.stoppedAt && this.stoppedAt < WW) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = WW
      }
      advanceStack(WW, RW, MW) {
        let CW = WW.pos,
          {
            parser: zR
          } = this,
          AW = PW ? this.stackID(WW) + " -> " : "";
        if (null != this.stoppedAt && CW > this.stoppedAt) return WW.forceReduce() ? WW : null;
        if (this.fragments) {
          let RW = WW.curContext && WW.curContext.tracker.strict,
            MW = RW ? WW.curContext.hash : 0;
          for (let bR = this.fragments.nodeAt(CW); bR;) {
            let CW = this.parser.nodeSet.types[bR.type.id] == bR.type ? zR.getGoto(WW.state, bR.type.id) : -1;
            if (CW > -1 && bR.length && (!RW || (bR.prop(wW.j.contextHash) || 0) == MW)) return WW.useNode(bR, CW), PW && console.log(AW + this.stackID(WW) + ` (via reuse of ${zR.getName(bR.type.id)})`), !0;
            if (!(bR instanceof wW.z) || 0 == bR.children.length || bR.positions[0] > 0) break;
            let yR = bR.children[0];
            if (!(yR instanceof wW.z && 0 == bR.positions[0])) break;
            bR = yR
          }
        }
        let bR = zR.stateSlot(WW.state, 4);
        if (bR > 0) return WW.reduce(bR), PW && console.log(AW + this.stackID(WW) + ` (via always-reduce ${zR.getName(65535&bR)})`), !0;
        if (WW.stack.length >= 8400)
          for (; WW.stack.length > 6e3 && WW.forceReduce(););
        let yR = this.tokens.getActions(WW);
        for (let wW = 0; wW < yR.length;) {
          let bR = yR[wW++],
            NW = yR[wW++],
            eW = yR[wW++],
            BW = wW == yR.length || !MW,
            tR = BW ? WW : WW.split(),
            TW = this.tokens.mainToken;
          if (tR.apply(bR, NW, TW ? TW.start : tR.pos, eW), PW && console.log(AW + this.stackID(tR) + ` (via ${0==(65536&bR)?"shift":`reduce of ${zR.getName(65535&bR)}`} for ${zR.getName(NW)} @ ${CW}${tR==WW?"":", split"})`), BW) return !0;
          tR.pos > CW ? RW.push(tR) : MW.push(tR)
        }
        return !1
      }
      advanceFully(WW, RW) {
        let MW = WW.pos;
        for (;;) {
          if (!this.advanceStack(WW, null, null)) return !1;
          if (WW.pos > MW) return QW(WW, RW), !0
        }
      }
      runRecovery(WW, RW, MW) {
        let wW = null,
          CW = !1;
        for (let zR = 0; zR < WW.length; zR++) {
          let AW = WW[zR],
            bR = RW[zR << 1],
            yR = RW[1 + (zR << 1)],
            NW = PW ? this.stackID(AW) + " -> " : "";
          if (AW.deadEnd) {
            if (CW) continue;
            if (CW = !0, AW.restart(), PW && console.log(NW + this.stackID(AW) + " (restarted)"), this.advanceFully(AW, MW)) continue
          }
          let eW = AW.split(),
            BW = NW;
          for (let WW = 0; WW < 10 && eW.forceReduce(); WW++) {
            if (PW && console.log(BW + this.stackID(eW) + " (via force-reduce)"), this.advanceFully(eW, MW)) break;
            PW && (BW = this.stackID(eW) + " -> ")
          }
          for (let WW of AW.recoverByInsert(bR)) PW && console.log(NW + this.stackID(WW) + " (via recover-insert)"), this.advanceFully(WW, MW);
          this.stream.end > AW.pos ? (yR == AW.pos && (yR++, bR = 0), AW.recoverByDelete(bR, yR), PW && console.log(NW + this.stackID(AW) + ` (via recover-delete ${this.parser.getName(bR)})`), QW(AW, MW)) : (!wW || wW.score < eW.score) && (wW = eW)
        }
        return wW
      }
      stackToTree(WW) {
        return WW.close(), wW.z.build({
          buffer: bR.create(WW),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.WA[0].from,
          length: WW.pos - this.WA[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(WW) {
        let RW = (IW || (IW = new WeakMap)).get(WW);
        return RW || IW.set(WW, RW = String.fromCodePoint(this.nextStackID++)), RW + WW
      }
    }

    function QW(WW, RW) {
      for (let MW = 0; MW < RW.length; MW++) {
        let wW = RW[MW];
        if (wW.pos == WW.pos && wW.sameState(WW)) return void(RW[MW].score < WW.score && (RW[MW] = WW))
      }
      RW.push(WW)
    }
    class rR {
      constructor(WW, RW, MW) {
        this.source = WW, this.flags = RW, this.disabled = MW
      }
      allows(WW) {
        return !this.disabled || 0 == this.disabled[WW]
      }
    }
    const cR = WW => WW;
    class XW extends wW.w {
      constructor(WW) {
        if (super(), this.wrappers = [], 14 != WW.version) throw new RangeError(`Parser version (${WW.version}) doesn't match runtime version (14)`);
        let RW = WW.nodeNames.split(" ");
        this.minRepeatTerm = RW.length;
        for (let wW = 0; wW < WW.repeatNodeCount; wW++) RW.push("");
        let MW = Object.keys(WW.topRules).map((RW => WW.topRules[RW][1])),
          CW = [];
        for (let wW = 0; wW < RW.length; wW++) CW.push([]);

        function zR(WW, RW, MW) {
          CW[WW].push([RW, RW.deserialize(String(MW))])
        }
        if (WW.nodeProps)
          for (let bR of WW.nodeProps) {
            let WW = bR[0];
            "string" == typeof WW && (WW = wW.j[WW]);
            for (let RW = 1; RW < bR.length;) {
              let MW = bR[RW++];
              if (MW >= 0) zR(MW, WW, bR[RW++]);
              else {
                let wW = bR[RW + -MW];
                for (let CW = -MW; CW > 0; CW--) zR(bR[RW++], WW, wW);
                RW++
              }
            }
          }
        this.nodeSet = new wW.n(RW.map(((RW, zR) => wW.r.define({
          name: zR >= this.minRepeatTerm ? void 0 : RW,
          id: zR,
          props: CW[zR],
          top: MW.indexOf(zR) > -1,
          error: 0 == zR,
          skipped: WW.skippedNodes && WW.skippedNodes.indexOf(zR) > -1
        })))), WW.propSources && (this.nodeSet = this.nodeSet.extend(...WW.propSources)), this.strict = !1, this.bufferLength = wW.d;
        let AW = yR(WW.tokenData);
        this.context = WW.context, this.specializerSpecs = WW.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let wW = 0; wW < this.specializerSpecs.length; wW++) this.specialized[wW] = this.specializerSpecs[wW].term;
        this.specializers = this.specializerSpecs.map(kR), this.states = yR(WW.states, Uint32Array), this.data = yR(WW.stateData), this.goto = yR(WW.goto), this.maxTerm = WW.maxTerm, this.tokenizers = WW.tokenizers.map((WW => "number" == typeof WW ? new tR(AW, WW) : WW)), this.topRules = WW.topRules, this.dialects = WW.dialects || {}, this.dynamicPrecedences = WW.dynamicPrecedences || null, this.tokenPrecTable = WW.tokenPrec, this.termNames = WW.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(WW, RW, MW) {
        let wW = new fW(this, WW, RW, MW);
        for (let CW of this.wrappers) wW = CW(wW, WW, RW, MW);
        return wW
      }
      getGoto(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = this.goto;
        if (RW >= wW[0]) return -1;
        for (let CW = wW[RW + 1];;) {
          let RW = wW[CW++],
            zR = 1 & RW,
            AW = wW[CW++];
          if (zR && MW) return AW;
          for (let MW = CW + (RW >> 1); CW < MW; CW++)
            if (wW[CW] == WW) return AW;
          if (zR) return -1
        }
      }
      hasAction(WW, RW) {
        let MW = this.data;
        for (let wW = 0; wW < 2; wW++)
          for (let CW, zR = this.stateSlot(WW, wW ? 2 : 1);; zR += 3) {
            if (65535 == (CW = MW[zR])) {
              if (1 != MW[zR + 1]) {
                if (2 == MW[zR + 1]) return jR(MW, zR + 2);
                break
              }
              CW = MW[zR = jR(MW, zR + 2)]
            }
            if (CW == RW || 0 == CW) return jR(MW, zR + 1)
          }
        return 0
      }
      stateSlot(WW, RW) {
        return this.states[6 * WW + RW]
      }
      stateFlag(WW, RW) {
        return (this.stateSlot(WW, 0) & RW) > 0
      }
      validAction(WW, RW) {
        return !!this.allActions(WW, (WW => WW == RW || null))
      }
      allActions(WW, RW) {
        let MW = this.stateSlot(WW, 4),
          wW = MW ? RW(MW) : void 0;
        for (let CW = this.stateSlot(WW, 1); null == wW; CW += 3) {
          if (65535 == this.data[CW]) {
            if (1 != this.data[CW + 1]) break;
            CW = jR(this.data, CW + 2)
          }
          wW = RW(jR(this.data, CW + 1))
        }
        return wW
      }
      nextStates(WW) {
        let RW = [];
        for (let MW = this.stateSlot(WW, 1);; MW += 3) {
          if (65535 == this.data[MW]) {
            if (1 != this.data[MW + 1]) break;
            MW = jR(this.data, MW + 2)
          }
          if (0 == (1 & this.data[MW + 2])) {
            let WW = this.data[MW + 1];
            RW.some(((RW, MW) => 1 & MW && RW == WW)) || RW.push(this.data[MW], WW)
          }
        }
        return RW
      }
      configure(WW) {
        let RW = Object.assign(Object.create(XW.prototype), this);
        if (WW.props && (RW.nodeSet = this.nodeSet.extend(...WW.props)), WW.top) {
          let MW = this.topRules[WW.top];
          if (!MW) throw new RangeError(`Invalid top rule name ${WW.top}`);
          RW.top = MW
        }
        return WW.tokenizers && (RW.tokenizers = this.tokenizers.map((RW => {
          let MW = WW.tokenizers.find((WW => WW.from == RW));
          return MW ? MW.to : RW
        }))), WW.specializers && (RW.specializers = this.specializers.slice(), RW.specializerSpecs = this.specializerSpecs.map(((MW, wW) => {
          let CW = WW.specializers.find((WW => WW.from == MW.external));
          if (!CW) return MW;
          let zR = Object.assign(Object.assign({}, MW), {
            external: CW.to
          });
          return RW.specializers[wW] = kR(zR), zR
        }))), WW.contextTracker && (RW.context = WW.contextTracker), WW.dialect && (RW.dialect = this.parseDialect(WW.dialect)), null != WW.strict && (RW.strict = WW.strict), WW.wrap && (RW.wrappers = RW.wrappers.concat(WW.wrap)), null != WW.bufferLength && (RW.bufferLength = WW.bufferLength), RW
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
        let RW = this.dynamicPrecedences;
        return null == RW ? 0 : RW[WW] || 0
      }
      parseDialect(WW) {
        let RW = Object.keys(this.dialects),
          MW = RW.map((() => !1));
        if (WW)
          for (let CW of WW.split(" ")) {
            let WW = RW.indexOf(CW);
            WW >= 0 && (MW[WW] = !0)
          }
        let wW = null;
        for (let CW = 0; CW < RW.length; CW++)
          if (!MW[CW])
            for (let WW, MW = this.dialects[RW[CW]]; 65535 != (WW = this.data[MW++]);)(wW || (wW = new Uint8Array(this.maxTerm + 1)))[WW] = 1;
        return new rR(WW, MW, wW)
      }
      static deserialize(WW) {
        return new XW(WW)
      }
    }

    function jR(WW, RW) {
      return WW[RW] | WW[RW + 1] << 16
    }

    function kR(WW) {
      if (WW.external) {
        let RW = WW.extend ? 1 : 0;
        return (MW, wW) => WW.external(MW, wW) << 1 | RW
      }
      return WW.get
    }
    var aR = MW(38816);
    const sW = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      dW = new class {
        constructor(WW) {
          this.start = WW.start, this.shift = WW.shift || cR, this.reduce = WW.reduce || cR, this.reuse = WW.reuse || cR, this.hash = WW.hash || (() => 0), this.strict = !1 !== WW.strict
        }
      }({
        start: !1,
        shift: (WW, RW) => 5 == RW || 6 == RW || 320 == RW ? WW : 321 == RW,
        strict: !1
      }),
      pW = new gR(((WW, RW) => {
        let {
          next: MW
        } = WW;
        (125 == MW || -1 == MW || RW.context) && WW.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      hW = new gR(((WW, RW) => {
        let MW, {
          next: wW
        } = WW;
        sW.indexOf(wW) > -1 || (47 != wW || 47 != (MW = WW.peek(1)) && 42 != MW) && (125 == wW || 59 == wW || -1 == wW || RW.context || WW.acceptToken(316))
      }), {
        contextual: !0
      }),
      UW = new gR(((WW, RW) => {
        91 != WW.next || RW.context || WW.acceptToken(317)
      }), {
        contextual: !0
      }),
      EW = new gR(((WW, RW) => {
        let {
          next: MW
        } = WW;
        if (43 == MW || 45 == MW) {
          if (WW.advance(), MW == WW.next) {
            WW.advance();
            let MW = !RW.context && RW.canShift(1);
            WW.acceptToken(MW ? 1 : 2)
          }
        } else 63 == MW && 46 == WW.peek(1) && (WW.advance(), WW.advance(), (WW.next < 48 || WW.next > 57) && WW.acceptToken(3))
      }), {
        contextual: !0
      });

    function VW(WW, RW) {
      return WW >= 65 && WW <= 90 || WW >= 97 && WW <= 122 || 95 == WW || WW >= 192 || !RW && WW >= 48 && WW <= 57
    }
    const mR = new gR(((WW, RW) => {
        if (60 != WW.next || !RW.dialectEnabled(0)) return;
        if (WW.advance(), 47 == WW.next) return;
        let MW = 0;
        for (; sW.indexOf(WW.next) > -1;) WW.advance(), MW++;
        if (VW(WW.next, !0)) {
          for (WW.advance(), MW++; VW(WW.next, !1);) WW.advance(), MW++;
          for (; sW.indexOf(WW.next) > -1;) WW.advance(), MW++;
          if (44 == WW.next) return;
          for (let RW = 0;; RW++) {
            if (7 == RW) {
              if (!VW(WW.next, !0)) return;
              break
            }
            if (WW.next != "extends".charCodeAt(RW)) break;
            WW.advance(), MW++
          }
        }
        WW.acceptToken(4, -MW)
      })),
      xR = (0, aR.f)({
        "get set async static": aR.n.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": aR.n.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": aR.n.operatorKeyword,
        "let var const using function class extends": aR.n.definitionKeyword,
        "import export from": aR.n.moduleKeyword,
        "with debugger new": aR.n.keyword,
        TemplateString: aR.n.special(aR.n.string),
        super: aR.n.atom,
        BooleanLiteral: aR.n.bool,
        this: aR.n.self,
        null: aR.n.null,
        Star: aR.n.modifier,
        VariableName: aR.n.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": aR.n.function(aR.n.variableName),
        VariableDefinition: aR.n.definition(aR.n.variableName),
        Label: aR.n.labelName,
        PropertyName: aR.n.propertyName,
        PrivatePropertyName: aR.n.special(aR.n.propertyName),
        "CallExpression/MemberExpression/PropertyName": aR.n.function(aR.n.propertyName),
        "FunctionDeclaration/VariableDefinition": aR.n.function(aR.n.definition(aR.n.variableName)),
        "ClassDeclaration/VariableDefinition": aR.n.definition(aR.n.className),
        "NewExpression/VariableName": aR.n.className,
        PropertyDefinition: aR.n.definition(aR.n.propertyName),
        PrivatePropertyDefinition: aR.n.definition(aR.n.special(aR.n.propertyName)),
        UpdateOp: aR.n.updateOperator,
        "LineComment Hashbang": aR.n.lineComment,
        BlockComment: aR.n.blockComment,
        Number: aR.n.number,
        String: aR.n.string,
        Escape: aR.n.escape,
        ArithOp: aR.n.arithmeticOperator,
        LogicOp: aR.n.logicOperator,
        BitOp: aR.n.bitwiseOperator,
        CompareOp: aR.n.compareOperator,
        RegExp: aR.n.regexp,
        Equals: aR.n.definitionOperator,
        Arrow: aR.n.function(aR.n.punctuation),
        ": Spread": aR.n.punctuation,
        "( )": aR.n.paren,
        "[ ]": aR.n.squareBracket,
        "{ }": aR.n.brace,
        "InterpolationStart InterpolationEnd": aR.n.special(aR.n.brace),
        ".": aR.n.derefOperator,
        ", ;": aR.n.separator,
        "@": aR.n.meta,
        TypeName: aR.n.typeName,
        TypeDefinition: aR.n.definition(aR.n.typeName),
        "type enum interface implements namespace module declare": aR.n.definitionKeyword,
        "abstract global Privacy readonly override": aR.n.modifier,
        "is keyof unique infer asserts": aR.n.operatorKeyword,
        JSXAttributeValue: aR.n.attributeValue,
        JSXText: aR.n.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": aR.n.angleBracket,
        "JSXIdentifier JSXNameSpacedName": aR.n.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": aR.n.attributeName,
        "JSXBuiltin/JSXIdentifier": aR.n.standard(aR.n.tagName)
      }),
      vR = {
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
      KW = {
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
      uW = {
        __proto__: null,
        "<": 193
      },
      OW = XW.deserialize({
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
        propSources: [xR],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [hW, UW, EW, mR, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, pW, new TW("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new TW("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: WW => vR[WW] || -1
        }, {
          term: 343,
          get: WW => KW[WW] || -1
        }, {
          term: 95,
          get: WW => uW[WW] || -1
        }],
        tokenPrec: 15201
      });
    var nW = MW(38800),
      GW = MW(38778),
      LW = MW(38784),
      HW = MW(38776);
    const DW = [(0, HW.q)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, HW.q)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, HW.q)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, HW.q)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, HW.q)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, HW.q)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, HW.q)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, HW.q)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, HW.q)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, HW.q)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, HW.q)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      qR = DW.concat([(0, HW.q)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, HW.q)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, HW.q)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      ZW = new wW.t,
      SW = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function WR(WW) {
      return (RW, MW) => {
        let wW = RW.node.getChild("VariableDefinition");
        return wW && MW(wW, WW), !0
      }
    }
    const RR = ["FunctionDeclaration"],
      MR = {
        FunctionDeclaration: WR("function"),
        ClassDeclaration: WR("class"),
        ClassExpression: () => !0,
        EnumDeclaration: WR("constant"),
        TypeAliasDeclaration: WR("type"),
        NamespaceDeclaration: WR("namespace"),
        VariableDefinition(WW, RW) {
          WW.matchContext(RR) || RW(WW, "variable")
        },
        TypeDefinition(WW, RW) {
          RW(WW, "type")
        },
        __proto__: null
      };

    function wR(WW, RW) {
      let MW = ZW.get(RW);
      if (MW) return MW;
      let CW = [],
        zR = !0;

      function AW(RW, MW) {
        let wW = WW.sliceString(RW.from, RW.to);
        CW.push({
          label: wW,
          type: MW
        })
      }
      return RW.cursor(wW.g.IncludeAnonymous).iterate((RW => {
        if (zR) zR = !1;
        else if (RW.name) {
          let WW = MR[RW.name];
          if (WW && WW(RW, AW) || SW.has(RW.name)) return !1
        } else if (RW.to - RW.from > 8192) {
          for (let MW of wR(WW, RW.node)) CW.push(MW);
          return !1
        }
      })), ZW.set(RW, CW), CW
    }
    const CR = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      zM = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function AR(WW) {
      let RW = (0, nW.nb)(WW.state).resolveInner(WW.pos, -1);
      if (zM.indexOf(RW.name) > -1) return null;
      let MW = "VariableName" == RW.name || RW.to - RW.from < 20 && CR.test(WW.state.sliceDoc(RW.from, RW.to));
      if (!MW && !WW.explicit) return null;
      let wW = [];
      for (let CW = RW; CW; CW = CW.parent) SW.has(CW.name) && (wW = wW.concat(wR(WW.state.doc, CW)));
      return {
        options: wW,
        from: MW ? RW.from : WW.pos,
        validFor: CR
      }
    }
    const bM = nW.j.define({
        name: "javascript",
        parser: OW.configure({
          props: [nW.Y.add({
            IfStatement: (0, nW.q)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, nW.q)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: nW.B,
            SwitchBody: WW => {
              let RW = WW.textAfter,
                MW = /^\s*\}/.test(RW),
                wW = /^\s*(case|default)\b/.test(RW);
              return WW.baseIndent + (MW ? 0 : wW ? 1 : 2) * WW.unit
            },
            Block: (0, nW.x)({
              closing: "}"
            }),
            ArrowFunction: WW => WW.baseIndent + WW.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, nW.q)({
              except: /^\s*{/
            }),
            JSXElement(WW) {
              let RW = /^\s*<\//.test(WW.textAfter);
              return WW.lineIndent(WW.node.from) + (RW ? 0 : WW.unit)
            },
            JSXEscape(WW) {
              let RW = /\s*\}/.test(WW.textAfter);
              return WW.lineIndent(WW.node.from) + (RW ? 0 : WW.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": WW => WW.column(WW.node.from) + WW.unit
          }), nW.M.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": nW.F,
            BlockComment: WW => ({
              from: WW.from + 2,
              to: WW.to - 2
            }),
            JSXElement(WW) {
              let RW = WW.firstChild;
              if (!RW || "JSXSelfClosingTag" == RW.name) return null;
              let MW = WW.lastChild;
              return {
                from: RW.to,
                to: MW.type.isError ? WW.to : MW.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(WW) {
              var RW;
              let MW = null === (RW = WW.firstChild) || void 0 === RW ? void 0 : RW.nextSibling,
                wW = WW.lastChild;
              return !MW || MW.type.isError ? null : {
                from: MW.to,
                to: wW.type.isError ? WW.to : wW.from
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
      yM = {
        test: WW => /^JSX/.test(WW.name),
        facet: (0, nW.u)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      NR = bM.configure({
        dialect: "ts"
      }, "typescript"),
      eR = bM.configure({
        dialect: "jsx",
        props: [nW.fb.add((WW => WW.isTop ? [yM] : void 0))]
      }),
      BR = bM.configure({
        dialect: "jsx ts",
        props: [nW.fb.add((WW => WW.isTop ? [yM] : void 0))]
      }, "typescript");
    let tM = WW => ({
      label: WW,
      type: "keyword"
    });
    const TR = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(tM),
      gM = TR.concat(["declare", "implements", "private", "protected", "public"].map(tM));

    function iM() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        RW = WW.jsx ? WW.typescript ? BR : eR : WW.typescript ? NR : bM,
        MW = WW.typescript ? qR.concat(gM) : DW.concat(TR);
      return new nW.l(RW, [bM.data.of({
        autocomplete: (0, HW.o)(zM, (0, HW.i)(MW))
      }), bM.data.of({
        autocomplete: AR
      }), WW.jsx ? PR : []])
    }

    function YR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WW.length;
      for (let wW = null === RW || void 0 === RW ? void 0 : RW.firstChild; wW; wW = wW.nextSibling)
        if ("JSXIdentifier" == wW.name || "JSXBuiltin" == wW.name || "JSXNamespacedName" == wW.name || "JSXMemberExpression" == wW.name) return WW.sliceString(wW.from, Math.min(wW.to, MW));
      return ""
    }
    const JR = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      PR = LW.g.inputHandler.of(((WW, RW, MW, wW, CW) => {
        if ((JR ? WW.composing : WW.compositionStarted) || WW.state.readOnly || RW != MW || ">" != wW && "/" != wW || !bM.isActiveAt(WW.state, RW, -1)) return !1;
        let zR = CW(),
          {
            state: AW
          } = zR,
          bR = AW.changeByRange((WW => {
            var RW;
            let MW, {
                head: CW
              } = WW,
              zR = (0, nW.nb)(AW).resolveInner(CW - 1, -1);
            if ("JSXStartTag" == zR.name && (zR = zR.parent), AW.doc.sliceString(CW - 1, CW) != wW || "JSXAttributeValue" == zR.name && zR.to > CW);
            else {
              if (">" == wW && "JSXFragmentTag" == zR.name) return {
                range: WW,
                changes: {
                  from: CW,
                  insert: "</>"
                }
              };
              if ("/" == wW && "JSXStartCloseTag" == zR.name) {
                let WW = zR.parent,
                  wW = WW.parent;
                if (wW && WW.from == CW - 2 && ((MW = YR(AW.doc, wW.firstChild, CW)) || "JSXFragmentTag" == (null === (RW = wW.firstChild) || void 0 === RW ? void 0 : RW.name))) {
                  let WW = `${MW}>`;
                  return {
                    range: GW.j.cursor(CW + WW.length, -1),
                    changes: {
                      from: CW,
                      insert: WW
                    }
                  }
                }
              } else if (">" == wW) {
                let RW = function(WW) {
                  for (;;) {
                    if ("JSXOpenTag" == WW.name || "JSXSelfClosingTag" == WW.name || "JSXFragmentTag" == WW.name) return WW;
                    if ("JSXEscape" == WW.name || !WW.parent) return null;
                    WW = WW.parent
                  }
                }(zR);
                if (RW && "JSXOpenTag" == RW.name && !/^\/?>|^<\//.test(AW.doc.sliceString(CW, CW + 2)) && (MW = YR(AW.doc, RW, CW))) return {
                  range: WW,
                  changes: {
                    from: CW,
                    insert: `</${MW}>`
                  }
                }
              }
            }
            return {
              range: WW
            }
          }));
        return !bR.changes.empty && (WW.dispatch([zR, AW.update(bR, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  38800: (WW, RW, MW) => {
    MW.d(RW, {
      $: () => sW,
      B: () => uW,
      E: () => PR,
      F: () => DW,
      J: () => NR,
      M: () => HW,
      P: () => JW,
      Q: () => aR,
      U: () => dW,
      Y: () => hW,
      _: () => GW,
      c: () => oR,
      cb: () => kR,
      db: () => KR,
      f: () => pW,
      fb: () => BW,
      hb: () => QR,
      j: () => gR,
      l: () => XW,
      lb: () => YW,
      nb: () => iR,
      o: () => VR,
      q: () => OW,
      s: () => XR,
      u: () => eW,
      x: () => vR
    });
    var wW, CW = MW(38808),
      zR = MW(38778),
      AW = MW(38784),
      bR = MW(38816),
      yR = MW(38789);
    const NW = new CW.j;

    function eW(WW) {
      return zR.m.define({
        combine: WW ? RW => RW.concat(WW) : void 0
      })
    }
    const BW = new CW.j;
    class tR {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = WW, this.name = wW, zR.l.prototype.hasOwnProperty("tree") || Object.defineProperty(zR.l.prototype, "tree", {
          get() {
            return iR(this)
          }
        }), this.parser = RW, this.extension = [cR.of(this), zR.l.languageData.of(((WW, RW, MW) => {
          let wW = TW(WW, RW, MW),
            CW = wW.type.prop(NW);
          if (!CW) return [];
          let zR = WW.facet(CW),
            AW = wW.type.prop(BW);
          if (AW) {
            let CW = wW.resolve(RW - wW.from, MW);
            for (let RW of AW)
              if (RW.test(CW, WW)) {
                let MW = WW.facet(RW.facet);
                return "replace" == RW.type ? MW : MW.concat(zR)
              }
          }
          return zR
        }))].concat(MW)
      }
      isActiveAt(WW, RW) {
        return TW(WW, RW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(NW) == this.data
      }
      findRegions(WW) {
        let RW = WW.facet(cR);
        if ((null === RW || void 0 === RW ? void 0 : RW.data) == this.data) return [{
          from: 0,
          to: WW.doc.length
        }];
        if (!RW || !RW.allowsNesting) return [];
        let MW = [],
          wW = (WW, RW) => {
            if (WW.prop(NW) == this.data) return void MW.push({
              from: RW,
              to: RW + WW.length
            });
            let zR = WW.prop(CW.j.mounted);
            if (zR) {
              if (zR.tree.prop(NW) == this.data) {
                if (zR.overlay)
                  for (let WW of zR.overlay) MW.push({
                    from: WW.from + RW,
                    to: WW.to + RW
                  });
                else MW.push({
                  from: RW,
                  to: RW + WW.length
                });
                return
              }
              if (zR.overlay) {
                let WW = MW.length;
                if (wW(zR.tree, zR.overlay[0].from + RW), MW.length > WW) return
              }
            }
            for (let MW = 0; MW < WW.children.length; MW++) {
              let zR = WW.children[MW];
              zR instanceof CW.z && wW(zR, WW.positions[MW] + RW)
            }
          };
        return wW(iR(WW), 0), MW
      }
      get allowsNesting() {
        return !0
      }
    }

    function TW(WW, RW, MW) {
      let wW = WW.facet(cR),
        zR = iR(WW).topNode;
      if (!wW || wW.allowsNesting)
        for (let AW = zR; AW; AW = AW.enter(RW, MW, CW.g.ExcludeBuffers | CW.g.EnterBracketed)) AW.type.isTop && (zR = AW);
      return zR
    }
    tR.setState = zR.A.define();
    class gR extends tR {
      constructor(WW, RW, MW) {
        super(WW, RW, [], MW), this.parser = RW
      }
      static define(WW) {
        let RW = eW(WW.languageData);
        return new gR(RW, WW.parser.configure({
          props: [NW.add((WW => WW.isTop ? RW : void 0))]
        }), WW.name)
      }
      configure(WW, RW) {
        return new gR(this.data, this.parser.configure(WW), RW || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function iR(WW) {
      let RW = WW.field(tR.state, !1);
      return RW ? RW.tree : CW.z.empty
    }

    function YW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW.doc.length;
      var MW;
      return (null === (MW = WW.field(tR.state, !1)) || void 0 === MW ? void 0 : MW.context.isDone(RW)) || !1
    }

    function JW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW.viewport.to,
        MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        wW = function(WW, RW) {
          let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var wW;
          let CW = null === (wW = WW.field(tR.state, !1)) || void 0 === wW ? void 0 : wW.context;
          if (!CW) return null;
          let zR = CW.viewport;
          CW.updateViewport({
            from: 0,
            to: RW
          });
          let AW = CW.isDone(RW) || CW.work(MW, RW) ? CW.tree : null;
          return CW.updateViewport(zR), AW
        }(WW.state, RW, MW);
      return wW != iR(WW.state) && WW.dispatch({}), !!wW
    }
    class PW {
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
      read(WW, RW) {
        let MW = this.cursorPos - this.string.length;
        return WW < MW || RW >= this.cursorPos ? this.doc.sliceString(WW, RW) : this.string.slice(WW - MW, RW - MW)
      }
    }
    let IW = null;
    class oW {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          wW = arguments.length > 3 ? arguments[3] : void 0,
          CW = arguments.length > 4 ? arguments[4] : void 0,
          zR = arguments.length > 5 ? arguments[5] : void 0,
          AW = arguments.length > 6 ? arguments[6] : void 0,
          bR = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = WW, this.state = RW, this.fragments = MW, this.tree = wW, this.treeLen = CW, this.viewport = zR, this.skipped = AW, this.scheduleOn = bR, this.parse = null, this.tempSkipped = []
      }
      static create(WW, RW, MW) {
        return new oW(WW, RW, [], CW.z.empty, 0, MW, [], null)
      }
      startParse() {
        return this.parser.startParse(new PW(this.state.doc), this.fragments)
      }
      work(WW, RW) {
        return null != RW && RW >= this.state.doc.length && (RW = void 0), this.tree != CW.z.empty && this.isDone(null !== RW && void 0 !== RW ? RW : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var MW;
          if ("number" == typeof WW) {
            let RW = Date.now() + WW;
            WW = () => Date.now() > RW
          }
          for (this.parse || (this.parse = this.startParse()), null != RW && (null == this.parse.stoppedAt || this.parse.stoppedAt > RW) && RW < this.state.doc.length && this.parse.stopAt(RW);;) {
            let wW = this.parse.advance();
            if (wW) {
              if (this.fragments = this.withoutTempSkipped(CW.x.addTree(wW, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (MW = this.parse.stoppedAt) && void 0 !== MW ? MW : this.state.doc.length, this.tree = wW, this.parse = null, !(this.treeLen < (null !== RW && void 0 !== RW ? RW : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (WW()) return !1
          }
        }))
      }
      takeTree() {
        let WW, RW;
        this.parse && (WW = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > WW) && this.parse.stopAt(WW), this.withContext((() => {
          for (; !(RW = this.parse.advance()););
        })), this.treeLen = WW, this.tree = RW, this.fragments = this.withoutTempSkipped(CW.x.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(WW) {
        let RW = IW;
        IW = this;
        try {
          return WW()
        } finally {
          IW = RW
        }
      }
      withoutTempSkipped(WW) {
        for (let RW; RW = this.tempSkipped.pop();) WW = lW(WW, RW.from, RW.to);
        return WW
      }
      changes(WW, RW) {
        let {
          fragments: MW,
          tree: wW,
          treeLen: zR,
          viewport: AW,
          skipped: bR
        } = this;
        if (this.takeTree(), !WW.empty) {
          let RW = [];
          if (WW.iterChangedRanges(((WW, MW, wW, CW) => RW.push({
              fromA: WW,
              toA: MW,
              fromB: wW,
              toB: CW
            }))), MW = CW.x.applyChanges(MW, RW), wW = CW.z.empty, zR = 0, AW = {
              from: WW.mapPos(AW.from, -1),
              to: WW.mapPos(AW.to, 1)
            }, this.skipped.length) {
            bR = [];
            for (let RW of this.skipped) {
              let MW = WW.mapPos(RW.from, 1),
                wW = WW.mapPos(RW.to, -1);
              MW < wW && bR.push({
                from: MW,
                to: wW
              })
            }
          }
        }
        return new oW(this.parser, RW, MW, wW, zR, AW, bR, this.scheduleOn)
      }
      updateViewport(WW) {
        if (this.viewport.from == WW.from && this.viewport.to == WW.to) return !1;
        this.viewport = WW;
        let RW = this.skipped.length;
        for (let MW = 0; MW < this.skipped.length; MW++) {
          let {
            from: RW,
            to: wW
          } = this.skipped[MW];
          RW < WW.to && wW > WW.from && (this.fragments = lW(this.fragments, RW, wW), this.skipped.splice(MW--, 1))
        }
        return !(this.skipped.length >= RW) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(WW, RW) {
        this.skipped.push({
          from: WW,
          to: RW
        })
      }
      static getSkippingParser(WW) {
        return new class extends CW.w {
          createParse(RW, MW, wW) {
            let zR = wW[0].from,
              AW = wW[wW.length - 1].to;
            return {
              parsedPos: zR,
              advance() {
                let RW = IW;
                if (RW) {
                  for (let WW of wW) RW.tempSkipped.push(WW);
                  WW && (RW.scheduleOn = RW.scheduleOn ? Promise.all([RW.scheduleOn, WW]) : WW)
                }
                return this.parsedPos = AW, new CW.z(CW.r.none, [], [], AW - zR)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(WW) {
        WW = Math.min(WW, this.state.doc.length);
        let RW = this.fragments;
        return this.treeLen >= WW && RW.length && 0 == RW[0].from && RW[0].to >= WW
      }
      static get() {
        return IW
      }
    }

    function lW(WW, RW, MW) {
      return CW.x.applyChanges(WW, [{
        fromA: RW,
        toA: MW,
        fromB: RW,
        toB: MW
      }])
    }
    class FW {
      constructor(WW) {
        this.context = WW, this.tree = WW.tree
      }
      apply(WW) {
        if (!WW.docChanged && this.tree == this.context.tree) return this;
        let RW = this.context.changes(WW.changes, WW.state),
          MW = this.context.treeLen == WW.startState.doc.length ? void 0 : Math.max(WW.changes.mapPos(this.context.treeLen), RW.viewport.to);
        return RW.work(20, MW) || RW.takeTree(), new FW(RW)
      }
      static init(WW) {
        let RW = Math.min(3e3, WW.doc.length),
          MW = oW.create(WW.facet(cR).parser, WW, {
            from: 0,
            to: RW
          });
        return MW.work(20, RW) || MW.takeTree(), new FW(MW)
      }
    }
    tR.state = zR.C.define({
      create: FW.init,
      update(WW, RW) {
        for (let MW of RW.effects)
          if (MW.is(tR.setState)) return MW.value;
        return RW.startState.facet(cR) != RW.state.facet(cR) ? FW.init(RW.state) : WW.apply(RW)
      }
    });
    let fW = WW => {
      let RW = setTimeout((() => WW()), 500);
      return () => clearTimeout(RW)
    };
    "undefined" != typeof requestIdleCallback && (fW = WW => {
      let RW = -1,
        MW = setTimeout((() => {
          RW = requestIdleCallback(WW, {
            timeout: 400
          })
        }), 100);
      return () => RW < 0 ? clearTimeout(MW) : cancelIdleCallback(RW)
    });
    const QW = "undefined" != typeof navigator && (null === (wW = navigator.scheduling) || void 0 === wW ? void 0 : wW.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      rR = AW.n.fromClass(class {
        constructor(WW) {
          this.view = WW, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(WW) {
          let RW = this.view.state.field(tR.state).context;
          (RW.updateViewport(WW.view.viewport) || this.view.viewport.to > RW.treeLen) && this.scheduleWork(), (WW.docChanged || WW.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(RW)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: WW
          } = this.view, RW = WW.field(tR.state);
          RW.tree == RW.context.tree && RW.context.isDone(WW.doc.length) || (this.working = fW(this.work))
        }
        work(WW) {
          this.working = null;
          let RW = Date.now();
          if (this.chunkEnd < RW && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = RW + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: MW,
            viewport: {
              to: wW
            }
          } = this.view, CW = MW.field(tR.state);
          if (CW.tree == CW.context.tree && CW.context.isDone(wW + 1e5)) return;
          let zR = Date.now() + Math.min(this.chunkBudget, 100, WW && !QW ? Math.max(25, WW.timeRemaining() - 5) : 1e9),
            AW = CW.context.treeLen < wW && MW.doc.length > wW + 1e3,
            bR = CW.context.work((() => QW && QW() || Date.now() > zR), wW + (AW ? 0 : 1e5));
          this.chunkBudget -= Date.now() - RW, (bR || this.chunkBudget <= 0) && (CW.context.takeTree(), this.view.dispatch({
            effects: tR.setState.of(new FW(CW.context))
          })), this.chunkBudget > 0 && (!bR || AW) && this.scheduleWork(), this.checkAsyncSchedule(CW.context)
        }
        checkAsyncSchedule(WW) {
          WW.scheduleOn && (this.workScheduled++, WW.scheduleOn.then((() => this.scheduleWork())).catch((WW => (0, AW.X)(this.view.state, WW))).then((() => this.workScheduled--)), WW.scheduleOn = null)
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
      cR = zR.m.define({
        combine: WW => WW.length ? WW[0] : null,
        enables: WW => [tR.state, rR, AW.g.contentAttributes.compute([WW], (RW => {
          let MW = RW.facet(WW);
          return MW && MW.name ? {
            "data-language": MW.name
          } : {}
        }))]
      });
    class XW {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = WW, this.support = RW, this.extension = [WW, RW]
      }
    }
    const jR = zR.m.define(),
      kR = zR.m.define({
        combine: WW => {
          if (!WW.length) return "  ";
          let RW = WW[0];
          if (!RW || /\S/.test(RW) || Array.from(RW).some((WW => WW != RW[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(WW[0]));
          return RW
        }
      });

    function aR(WW) {
      let RW = WW.facet(kR);
      return 9 == RW.charCodeAt(0) ? WW.tabSize * RW.length : RW.length
    }

    function sW(WW, RW) {
      let MW = "",
        wW = WW.tabSize,
        CW = WW.facet(kR)[0];
      if ("\t" == CW) {
        for (; RW >= wW;) MW += "\t", RW -= wW;
        CW = " "
      }
      for (let zR = 0; zR < RW; zR++) MW += CW;
      return MW
    }

    function dW(WW, RW) {
      WW instanceof zR.l && (WW = new pW(WW));
      for (let wW of WW.state.facet(jR)) {
        let MW = wW(WW, RW);
        if (void 0 !== MW) return MW
      }
      let MW = iR(WW.state);
      return MW.length >= RW ? function(WW, RW, MW) {
        let wW = RW.resolveStack(MW),
          CW = RW.resolveInner(MW, -1).resolve(MW, 0).enterUnfinishedNodesBefore(MW);
        if (CW != wW.node) {
          let WW = [];
          for (let RW = CW; RW && !(RW.from < wW.node.from || RW.to > wW.node.to || RW.from == wW.node.from && RW.type == wW.node.type); RW = RW.parent) WW.push(RW);
          for (let RW = WW.length - 1; RW >= 0; RW--) wW = {
            node: WW[RW],
            next: wW
          }
        }
        return UW(wW, WW, MW)
      }(WW, MW, RW) : null
    }
    class pW {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = WW, this.options = RW, this.unit = aR(WW)
      }
      lineAt(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          MW = this.state.doc.lineAt(WW),
          {
            simulateBreak: wW,
            simulateDoubleBreak: CW
          } = this.options;
        return null != wW && wW >= MW.from && wW <= MW.to ? CW && wW == WW ? {
          text: "",
          from: WW
        } : (RW < 0 ? wW < WW : wW <= WW) ? {
          text: MW.text.slice(wW - MW.from),
          from: wW
        } : {
          text: MW.text.slice(0, wW - MW.from),
          from: MW.from
        } : MW
      }
      textAfterPos(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && WW == this.options.simulateBreak) return "";
        let {
          text: MW,
          from: wW
        } = this.lineAt(WW, RW);
        return MW.slice(WW - wW, Math.min(MW.length, WW + 100 - wW))
      }
      column(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: MW,
            from: wW
          } = this.lineAt(WW, RW),
          CW = this.countColumn(MW, WW - wW),
          zR = this.options.overrideIndentation ? this.options.overrideIndentation(wW) : -1;
        return zR > -1 && (CW += zR - this.countColumn(MW, MW.search(/\S|$/))), CW
      }
      countColumn(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW.length;
        return (0, zR.P)(WW, this.state.tabSize, RW)
      }
      lineIndent(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: MW,
            from: wW
          } = this.lineAt(WW, RW),
          CW = this.options.overrideIndentation;
        if (CW) {
          let WW = CW(wW);
          if (WW > -1) return WW
        }
        return this.countColumn(MW, MW.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const hW = new CW.j;

    function UW(WW, RW, MW) {
      for (let wW = WW; wW; wW = wW.next) {
        let WW = EW(wW.node);
        if (WW) return WW(mR.create(RW, MW, wW))
      }
      return 0
    }

    function EW(WW) {
      let RW = WW.type.prop(hW);
      if (RW) return RW;
      let MW, wW = WW.firstChild;
      if (wW && (MW = wW.type.prop(CW.j.closedBy))) {
        let RW = WW.lastChild,
          wW = RW && MW.indexOf(RW.name) > -1;
        return WW => KW(WW, !0, 1, void 0, wW && ! function(WW) {
          return WW.pos == WW.options.simulateBreak && WW.options.simulateDoubleBreak
        }(WW) ? RW.from : void 0)
      }
      return null == WW.parent ? VW : null
    }

    function VW() {
      return 0
    }
    class mR extends pW {
      constructor(WW, RW, MW) {
        super(WW.state, WW.options), this.base = WW, this.pos = RW, this.context = MW
      }
      get node() {
        return this.context.node
      }
      static create(WW, RW, MW) {
        return new mR(WW, RW, MW)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(WW) {
        let RW = this.state.doc.lineAt(WW.from);
        for (;;) {
          let MW = WW.resolve(RW.from);
          for (; MW.parent && MW.parent.from == MW.from;) MW = MW.parent;
          if (xR(MW, WW)) break;
          RW = this.state.doc.lineAt(MW.from)
        }
        return this.lineIndent(RW.from)
      }
      continue () {
        return UW(this.context.next, this.base, this.pos)
      }
    }

    function xR(WW, RW) {
      for (let MW = RW; MW; MW = MW.parent)
        if (WW == MW) return !0;
      return !1
    }

    function vR(WW) {
      let {
        closing: RW,
        align: MW = !0,
        units: wW = 1
      } = WW;
      return WW => KW(WW, MW, wW, RW)
    }

    function KW(WW, RW, MW, wW, CW) {
      let zR = WW.textAfter,
        AW = zR.match(/^\s*/)[0].length,
        bR = wW && zR.slice(AW, AW + wW.length) == wW || CW == WW.pos + AW,
        yR = RW ? function(WW) {
          let RW = WW.node,
            MW = RW.childAfter(RW.from),
            wW = RW.lastChild;
          if (!MW) return null;
          let CW = WW.options.simulateBreak,
            zR = WW.state.doc.lineAt(MW.from),
            AW = null == CW || CW <= zR.from ? zR.to : Math.min(zR.to, CW);
          for (let bR = MW.to;;) {
            let WW = RW.childAfter(bR);
            if (!WW || WW == wW) return null;
            if (!WW.type.isSkipped) {
              if (WW.from >= AW) return null;
              let RW = /^ */.exec(zR.text.slice(MW.to - zR.from))[0].length;
              return {
                from: MW.from,
                to: MW.to + RW
              }
            }
            bR = WW.to
          }
        }(WW) : null;
      return yR ? bR ? WW.column(yR.from) : WW.column(yR.to) : WW.baseIndent + (bR ? 0 : WW.unit * MW)
    }
    const uW = WW => WW.baseIndent;

    function OW() {
      let {
        except: WW,
        units: RW = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return MW => {
        let wW = WW && WW.test(MW.textAfter);
        return MW.baseIndent + (wW ? 0 : RW * MW.unit)
      }
    }
    const nW = 200;

    function GW() {
      return zR.l.transactionFilter.of((WW => {
        if (!WW.docChanged || !WW.isUserEvent("input.type") && !WW.isUserEvent("input.complete")) return WW;
        let RW = WW.startState.languageDataAt("indentOnInput", WW.startState.selection.main.head);
        if (!RW.length) return WW;
        let MW = WW.newDoc,
          {
            head: wW
          } = WW.newSelection.main,
          CW = MW.lineAt(wW);
        if (wW > CW.from + nW) return WW;
        let zR = MW.sliceString(CW.from, wW);
        if (!RW.some((WW => WW.test(zR)))) return WW;
        let {
          state: AW
        } = WW, bR = -1, yR = [];
        for (let {
            head: NW
          }
          of AW.selection.WA) {
          let WW = AW.doc.lineAt(NW);
          if (WW.from == bR) continue;
          bR = WW.from;
          let RW = dW(AW, WW.from);
          if (null == RW) continue;
          let MW = /^\s*/.exec(WW.text)[0],
            wW = sW(AW, RW);
          MW != wW && yR.push({
            from: WW.from,
            to: WW.from + MW.length,
            insert: wW
          })
        }
        return yR.length ? [WW, {
          changes: yR,
          sequential: !0
        }] : WW
      }))
    }
    const LW = zR.m.define(),
      HW = new CW.j;

    function DW(WW) {
      let RW = WW.firstChild,
        MW = WW.lastChild;
      return RW && RW.to < MW.from ? {
        from: RW.to,
        to: MW.type.isError ? WW.to : MW.from
      } : null
    }

    function qR(WW) {
      let RW = WW.lastChild;
      return RW && RW.to == WW.to && RW.type.isError
    }

    function ZW(WW, RW, MW) {
      for (let wW of WW.facet(LW)) {
        let CW = wW(WW, RW, MW);
        if (CW) return CW
      }
      return function(WW, RW, MW) {
        let wW = iR(WW);
        if (wW.length < MW) return null;
        let CW = null;
        for (let zR = wW.resolveStack(MW, 1); zR; zR = zR.next) {
          let AW = zR.node;
          if (AW.to <= MW || AW.from > MW) continue;
          if (CW && AW.from < RW) break;
          let bR = AW.type.prop(HW);
          if (bR && (AW.to < wW.length - 50 || wW.length == WW.doc.length || !qR(AW))) {
            let wW = bR(AW, WW);
            wW && wW.from <= MW && wW.from >= RW && wW.to > MW && (CW = wW)
          }
        }
        return CW
      }(WW, RW, MW)
    }

    function SW(WW, RW) {
      let MW = RW.mapPos(WW.from, 1),
        wW = RW.mapPos(WW.to, -1);
      return MW >= wW ? void 0 : {
        from: MW,
        to: wW
      }
    }
    const WR = zR.A.define({
        map: SW
      }),
      RR = zR.A.define({
        map: SW
      });

    function MR(WW) {
      let RW = [];
      for (let {
          head: MW
        }
        of WW.state.selection.WA) RW.some((WW => WW.from <= MW && WW.to >= MW)) || RW.push(WW.lineBlockAt(MW));
      return RW
    }
    const wR = zR.C.define({
      create: () => AW.c.none,
      update(WW, RW) {
        RW.isUserEvent("delete") && RW.changes.iterChangedRanges(((RW, MW) => WW = CR(WW, RW, MW))), WW = WW.map(RW.changes);
        for (let MW of RW.effects)
          if (MW.is(WR) && !AR(WW, MW.value.from, MW.value.to)) {
            let {
              preparePlaceholder: wW
            } = RW.state.facet(BR), CW = wW ? AW.c.replace({
              widget: new iM(wW(RW.state, MW.value))
            }) : gM;
            WW = WW.update({
              add: [CW.range(MW.value.from, MW.value.to)]
            })
          } else MW.is(RR) && (WW = WW.update({
            filter: (WW, RW) => MW.value.from != WW || MW.value.to != RW,
            filterFrom: MW.value.from,
            filterTo: MW.value.to
          }));
        return RW.selection && (WW = CR(WW, RW.selection.main.head)), WW
      },
      provide: WW => AW.g.vA.from(WW),
      toJSON(WW, RW) {
        let MW = [];
        return WW.between(0, RW.doc.length, ((WW, RW) => {
          MW.push(WW, RW)
        })), MW
      },
      fromJSON(WW) {
        if (!Array.isArray(WW) || WW.length % 2) throw new RangeError("Invalid JSON for fold state");
        let RW = [];
        for (let MW = 0; MW < WW.length;) {
          let wW = WW[MW++],
            CW = WW[MW++];
          if ("number" != typeof wW || "number" != typeof CW) throw new RangeError("Invalid JSON for fold state");
          RW.push(gM.range(wW, CW))
        }
        return AW.c.set(RW, !0)
      }
    });

    function CR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RW,
        wW = !1;
      return WW.between(RW, MW, ((WW, CW) => {
        WW < MW && CW > RW && (wW = !0)
      })), wW ? WW.update({
        filterFrom: RW,
        filterTo: MW,
        filter: (WW, wW) => WW >= MW || wW <= RW
      }) : WW
    }

    function zM(WW, RW, MW) {
      var wW;
      let CW = null;
      return null === (wW = WW.field(wR, !1)) || void 0 === wW || wW.between(RW, MW, ((WW, RW) => {
        (!CW || CW.from > WW) && (CW = {
          from: WW,
          to: RW
        })
      })), CW
    }

    function AR(WW, RW, MW) {
      let wW = !1;
      return WW.between(RW, RW, ((WW, CW) => {
        WW == RW && CW == MW && (wW = !0)
      })), wW
    }

    function bM(WW, RW) {
      return WW.field(wR, !1) ? RW : RW.concat(zR.A.appendConfig.of(tM()))
    }

    function yM(WW, RW) {
      let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        wW = WW.state.doc.lineAt(RW.from).number,
        CW = WW.state.doc.lineAt(RW.to).number;
      return AW.g.announce.of(`${WW.state.phrase(MW?"Folded lines":"Unfolded lines")} ${wW} ${WW.state.phrase("to")} ${CW}.`)
    }
    const NR = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: WW => {
          for (let RW of MR(WW)) {
            let MW = ZW(WW.state, RW.from, RW.to);
            if (MW) return WW.dispatch({
              effects: bM(WW.state, [WR.of(MW), yM(WW, MW)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: WW => {
          if (!WW.state.field(wR, !1)) return !1;
          let RW = [];
          for (let MW of MR(WW)) {
            let wW = zM(WW.state, MW.from, MW.to);
            wW && RW.push(RR.of(wW), yM(WW, wW, !1))
          }
          return RW.length && WW.dispatch({
            effects: RW
          }), RW.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: WW => {
          let {
            state: RW
          } = WW, MW = [];
          for (let wW = 0; wW < RW.doc.length;) {
            let CW = WW.lineBlockAt(wW),
              zR = ZW(RW, CW.from, CW.to);
            zR && MW.push(WR.of(zR)), wW = (zR ? WW.lineBlockAt(zR.to) : CW).to + 1
          }
          return MW.length && WW.dispatch({
            effects: bM(WW.state, MW)
          }), !!MW.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: WW => {
          let RW = WW.state.field(wR, !1);
          if (!RW || !RW.size) return !1;
          let MW = [];
          return RW.between(0, WW.state.doc.length, ((WW, RW) => {
            MW.push(RR.of({
              from: WW,
              to: RW
            }))
          })), WW.dispatch({
            effects: MW
          }), !0
        }
      }],
      eR = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      BR = zR.m.define({
        combine: WW => (0, zR.O)(WW, eR)
      });

    function tM(WW) {
      let RW = [wR, IR];
      return WW && RW.push(BR.of(WW)), RW
    }

    function TR(WW, RW) {
      let {
        state: MW
      } = WW, wW = MW.facet(BR), CW = RW => {
        let MW = WW.lineBlockAt(WW.posAtDOM(RW.target)),
          wW = zM(WW.state, MW.from, MW.to);
        wW && WW.dispatch({
          effects: RR.of(wW)
        }), RW.preventDefault()
      };
      if (wW.placeholderDOM) return wW.placeholderDOM(WW, CW, RW);
      let zR = document.createElement("span");
      return zR.textContent = wW.placeholderText, zR.setAttribute("aria-label", MW.phrase("folded code")), zR.title = MW.phrase("unfold"), zR.className = "cm-foldPlaceholder", zR.onclick = CW, zR
    }
    const gM = AW.c.replace({
      widget: new class extends AW.r {
        toDOM(WW) {
          return TR(WW, null)
        }
      }
    });
    class iM extends AW.r {
      constructor(WW) {
        super(), this.value = WW
      }
      eq(WW) {
        return this.value == WW.value
      }
      toDOM(WW) {
        return TR(WW, this.value)
      }
    }
    const YR = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class JR extends AW.k {
      constructor(WW, RW) {
        super(), this.config = WW, this.open = RW
      }
      eq(WW) {
        return this.config == WW.config && this.open == WW.open
      }
      toDOM(WW) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let RW = document.createElement("span");
        return RW.textContent = this.open ? this.config.openText : this.config.closedText, RW.title = WW.state.phrase(this.open ? "Fold line" : "Unfold line"), RW
      }
    }

    function PR() {
      let WW = {
          ...YR,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        RW = new JR(WW, !0),
        MW = new JR(WW, !1),
        wW = AW.n.fromClass(class {
          constructor(WW) {
            this.from = WW.viewport.from, this.markers = this.buildMarkers(WW)
          }
          update(RW) {
            (RW.docChanged || RW.viewportChanged || RW.startState.facet(cR) != RW.state.facet(cR) || RW.startState.field(wR, !1) != RW.state.field(wR, !1) || iR(RW.startState) != iR(RW.state) || WW.foldingChanged(RW)) && (this.markers = this.buildMarkers(RW.view))
          }
          buildMarkers(WW) {
            let wW = new zR.q;
            for (let CW of WW.viewportLineBlocks) {
              let zR = zM(WW.state, CW.from, CW.to) ? MW : ZW(WW.state, CW.from, CW.to) ? RW : null;
              zR && wW.add(CW.from, CW.from, zR)
            }
            return wW.finish()
          }
        }),
        {
          domEventHandlers: CW
        } = WW;
      return [wW, (0, AW.G)({
        class: "cm-foldGutter",
        markers(WW) {
          var RW;
          return (null === (RW = WW.plugin(wW)) || void 0 === RW ? void 0 : RW.markers) || zR.s.empty
        },
        initialSpacer: () => new JR(WW, !1),
        domEventHandlers: {
          ...CW,
          click: (WW, RW, MW) => {
            if (CW.click && CW.click(WW, RW, MW)) return !0;
            let wW = zM(WW.state, RW.from, RW.to);
            if (wW) return WW.dispatch({
              effects: RR.of(wW)
            }), !0;
            let zR = ZW(WW.state, RW.from, RW.to);
            return !!zR && (WW.dispatch({
              effects: WR.of(zR)
            }), !0)
          }
        }
      }), tM()]
    }
    const IR = AW.g.baseTheme({
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
    class oR {
      constructor(WW, RW) {
        let MW;

        function wW(WW) {
          let RW = yR.c.newName();
          return (MW || (MW = Object.create(null)))["." + RW] = WW, RW
        }
        this.specs = WW;
        const CW = "string" == typeof RW.all ? RW.all : RW.all ? wW(RW.all) : void 0,
          zR = RW.scope;
        this.scope = zR instanceof tR ? WW => WW.prop(NW) == zR.data : zR ? WW => WW == zR : void 0, this.style = (0, bR.j)(WW.map((WW => ({
          tag: WW.tag,
          class: WW.class || wW(Object.assign({}, WW, {
            tag: null
          }))
        }))), {
          all: CW
        }).style, this.module = MW ? new yR.c(MW) : null, this.themeType = RW.themeType
      }
      static define(WW, RW) {
        return new oR(WW, RW || {})
      }
    }
    const lR = zR.m.define(),
      FR = zR.m.define({
        combine: WW => WW.length ? [WW[0]] : null
      });

    function fR(WW) {
      let RW = WW.facet(lR);
      return RW.length ? RW : WW.facet(FR)
    }

    function QR(WW, RW) {
      let MW, wW = [cM];
      return WW instanceof oR && (WW.module && wW.push(AW.g.styleModule.of(WW.module)), MW = WW.themeType), (null === RW || void 0 === RW ? void 0 : RW.fallback) ? wW.push(FR.of(WW)) : MW ? wW.push(lR.computeN([AW.g.darkTheme], (RW => RW.facet(AW.g.darkTheme) == ("dark" == MW) ? [WW] : []))) : wW.push(lR.of(WW)), wW
    }
    class rM {
      constructor(WW) {
        this.markCache = Object.create(null), this.tree = iR(WW.state), this.vA = this.buildDeco(WW, fR(WW.state)), this.decoratedTo = WW.viewport.to
      }
      update(WW) {
        let RW = iR(WW.state),
          MW = fR(WW.state),
          wW = MW != fR(WW.startState),
          {
            viewport: CW
          } = WW.view,
          zR = WW.changes.mapPos(this.decoratedTo, 1);
        RW.length < CW.to && !wW && RW.type == this.tree.type && zR >= CW.to ? (this.vA = this.vA.map(WW.changes), this.decoratedTo = zR) : (RW != this.tree || WW.viewportChanged || wW) && (this.tree = RW, this.vA = this.buildDeco(WW.view, MW), this.decoratedTo = CW.to)
      }
      buildDeco(WW, RW) {
        if (!RW || !this.tree.length) return AW.c.none;
        let MW = new zR.q;
        for (let {
            from: wW,
            to: CW
          }
          of WW.EzW)(0, bR.e)(this.tree, RW, ((WW, RW, wW) => {
          MW.add(WW, RW, this.markCache[wW] || (this.markCache[wW] = AW.c.mark({
            class: wW
          })))
        }), wW, CW);
        return MW.finish()
      }
    }
    const cM = zR.p.high(AW.n.fromClass(rM, {
        vA: WW => WW.vA
      })),
      XR = oR.define([{
        tag: bR.n.meta,
        color: "#404740"
      }, {
        tag: bR.n.link,
        textDecoration: "underline"
      }, {
        tag: bR.n.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: bR.n.emphasis,
        fontStyle: "italic"
      }, {
        tag: bR.n.strong,
        fontWeight: "bold"
      }, {
        tag: bR.n.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: bR.n.keyword,
        color: "#708"
      }, {
        tag: [bR.n.atom, bR.n.bool, bR.n.url, bR.n.contentSeparator, bR.n.labelName],
        color: "#219"
      }, {
        tag: [bR.n.literal, bR.n.inserted],
        color: "#164"
      }, {
        tag: [bR.n.string, bR.n.deleted],
        color: "#a11"
      }, {
        tag: [bR.n.regexp, bR.n.escape, bR.n.special(bR.n.string)],
        color: "#e40"
      }, {
        tag: bR.n.definition(bR.n.variableName),
        color: "#00f"
      }, {
        tag: bR.n.local(bR.n.variableName),
        color: "#30a"
      }, {
        tag: [bR.n.typeName, bR.n.namespace],
        color: "#085"
      }, {
        tag: bR.n.className,
        color: "#167"
      }, {
        tag: [bR.n.special(bR.n.variableName), bR.n.macroName],
        color: "#256"
      }, {
        tag: bR.n.definition(bR.n.propertyName),
        color: "#00c"
      }, {
        tag: bR.n.comment,
        color: "#940"
      }, {
        tag: bR.n.invalid,
        color: "#f00"
      }]),
      jM = AW.g.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      kM = 1e4,
      aM = "()[]{}",
      sR = zR.m.define({
        combine: WW => (0, zR.O)(WW, {
          afterCursor: !0,
          brackets: aM,
          maxScanDistance: kM,
          renderMatch: hR
        })
      }),
      dR = AW.c.mark({
        class: "cm-matchingBracket"
      }),
      pR = AW.c.mark({
        class: "cm-nonmatchingBracket"
      });

    function hR(WW) {
      let RW = [],
        MW = WW.matched ? dR : pR;
      return RW.push(MW.range(WW.start.from, WW.start.to)), WW.end && RW.push(MW.range(WW.end.from, WW.end.to)), RW
    }

    function UR(WW) {
      let RW = [],
        MW = WW.facet(sR);
      for (let wW of WW.selection.WA) {
        if (!wW.empty) continue;
        let CW = KR(WW, wW.head, -1, MW) || wW.head > 0 && KR(WW, wW.head - 1, 1, MW) || MW.afterCursor && (KR(WW, wW.head, 1, MW) || wW.head < WW.doc.length && KR(WW, wW.head + 1, -1, MW));
        CW && (RW = RW.concat(MW.renderMatch(CW, WW)))
      }
      return AW.c.set(RW, !0)
    }
    const ER = [AW.n.fromClass(class {
      constructor(WW) {
        this.paused = !1, this.vA = UR(WW.state)
      }
      update(WW) {
        (WW.docChanged || WW.selectionSet || this.paused) && (WW.view.composing ? (this.vA = this.vA.map(WW.changes), this.paused = !0) : (this.vA = UR(WW.state), this.paused = !1))
      }
    }, {
      vA: WW => WW.vA
    }), jM];

    function VR() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [sR.of(WW), ER]
    }
    const mM = new CW.j;

    function xM(WW, RW, MW) {
      let wW = WW.prop(RW < 0 ? CW.j.openedBy : CW.j.closedBy);
      if (wW) return wW;
      if (1 == WW.name.length) {
        let wW = MW.indexOf(WW.name);
        if (wW > -1 && wW % 2 == (RW < 0 ? 1 : 0)) return [MW[wW + RW]]
      }
      return null
    }

    function vM(WW) {
      let RW = WW.type.prop(mM);
      return RW ? RW(WW.node) : WW
    }

    function KR(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        CW = wW.maxScanDistance || kM,
        zR = wW.brackets || aM,
        AW = iR(WW),
        bR = AW.resolveInner(RW, MW);
      for (let yR = bR; yR; yR = yR.parent) {
        let wW = xM(yR.type, MW, zR);
        if (wW && yR.from < yR.to) {
          let CW = vM(yR);
          if (CW && (MW > 0 ? RW >= CW.from && RW < CW.to : RW > CW.from && RW <= CW.to)) return uR(WW, RW, MW, yR, CW, wW, zR)
        }
      }
      return function(WW, RW, MW, wW, CW, zR, AW) {
        if (MW < 0 ? !RW : RW == WW.doc.length) return null;
        let bR = MW < 0 ? WW.sliceDoc(RW - 1, RW) : WW.sliceDoc(RW, RW + 1),
          yR = AW.indexOf(bR);
        if (yR < 0 || yR % 2 == 0 != MW > 0) return null;
        let NW = {
            from: MW < 0 ? RW - 1 : RW,
            to: MW > 0 ? RW + 1 : RW
          },
          eW = WW.doc.iterRange(RW, MW > 0 ? WW.doc.length : 0),
          BW = 0;
        for (let tR = 0; !eW.next().done && tR <= zR;) {
          let WW = eW.value;
          MW < 0 && (tR += WW.length);
          let zR = RW + tR * MW;
          for (let RW = MW > 0 ? 0 : WW.length - 1, bR = MW > 0 ? WW.length : -1; RW != bR; RW += MW) {
            let bR = AW.indexOf(WW[RW]);
            if (!(bR < 0 || wW.resolveInner(zR + RW, 1).type != CW))
              if (bR % 2 == 0 == MW > 0) BW++;
              else {
                if (1 == BW) return {
                  start: NW,
                  end: {
                    from: zR + RW,
                    to: zR + RW + 1
                  },
                  matched: bR >> 1 == yR >> 1
                };
                BW--
              }
          }
          MW > 0 && (tR += WW.length)
        }
        return eW.done ? {
          start: NW,
          matched: !1
        } : null
      }(WW, RW, MW, AW, bR.type, CW, zR)
    }

    function uR(WW, RW, MW, wW, CW, zR, AW) {
      let bR = wW.parent,
        yR = {
          from: CW.from,
          to: CW.to
        },
        NW = 0,
        eW = null === bR || void 0 === bR ? void 0 : bR.cursor();
      if (eW && (MW < 0 ? eW.childBefore(wW.from) : eW.childAfter(wW.to)))
        do {
          if (MW < 0 ? eW.to <= wW.from : eW.from >= wW.to) {
            if (0 == NW && zR.indexOf(eW.type.name) > -1 && eW.from < eW.to) {
              let WW = vM(eW);
              return {
                start: yR,
                end: WW ? {
                  from: WW.from,
                  to: WW.to
                } : void 0,
                matched: !0
              }
            }
            if (xM(eW.type, MW, AW)) NW++;
            else if (xM(eW.type, -MW, AW)) {
              if (0 == NW) {
                let WW = vM(eW);
                return {
                  start: yR,
                  end: WW && WW.from < WW.to ? {
                    from: WW.from,
                    to: WW.to
                  } : void 0,
                  matched: !1
                }
              }
              NW--
            }
          }
        } while (MW < 0 ? eW.prevSibling() : eW.nextSibling());
      return {
        start: yR,
        matched: !1
      }
    }
    const OR = Object.create(null),
      nR = [CW.r.none],
      GR = [],
      LR = Object.create(null),
      HR = Object.create(null);
    for (let [ZR, SR] of [
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
      ]) HR[ZR] = qM(OR, SR);

    function DR(WW, RW) {
      GR.indexOf(WW) > -1 || (GR.push(WW), console.warn(RW))
    }

    function qM(WW, RW) {
      let MW = [];
      for (let CW of RW.split(" ")) {
        let RW = [];
        for (let MW of CW.split(".")) {
          let wW = WW[MW] || bR.n[MW];
          wW ? "function" == typeof wW ? RW.length ? RW = RW.map(wW) : DR(MW, `Modifier ${MW} used at start of tag`) : RW.length ? DR(MW, `Tag ${MW} used as modifier`) : RW = Array.isArray(wW) ? wW : [wW] : DR(MW, `Unknown highlighting tag ${MW}`)
        }
        for (let WW of RW) MW.push(WW)
      }
      if (!MW.length) return 0;
      let wW = RW.replace(/ /g, "_"),
        zR = wW + " " + MW.map((WW => WW.id)),
        AW = LR[zR];
      if (AW) return AW.id;
      let yR = LR[zR] = CW.r.define({
        id: nR.length,
        name: wW,
        props: [(0, bR.f)({
          [wW]: MW
        })]
      });
      return nR.push(yR), yR.id
    }
    AW.d.RTL, AW.d.LTR
  },
  38840: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => IW,
      c: () => fW
    });
    var wW = MW(38784),
      CW = MW(38778),
      zR = MW(38797);
    class AW {
      constructor(WW, RW, MW) {
        this.from = WW, this.to = RW, this.diagnostic = MW
      }
    }
    class bR {
      constructor(WW, RW, MW) {
        this.diagnostics = WW, this.panel = RW, this.selected = MW
      }
      static init(WW, RW, MW) {
        let zR = MW.facet(lW).markerFilter;
        zR && (WW = zR(WW, MW));
        let AW = WW.slice().sort(((WW, RW) => WW.from - RW.from || WW.to - RW.to)),
          NW = new CW.q,
          eW = [],
          BW = 0,
          tR = MW.doc.iter(),
          TW = 0,
          gR = MW.doc.length;
        for (let CW = 0;;) {
          let WW, RW, MW = CW == AW.length ? null : AW[CW];
          if (!MW && !eW.length) break;
          if (eW.length) WW = BW, RW = eW.reduce(((WW, RW) => Math.min(WW, RW.to)), MW && MW.from > WW ? MW.from : 1e8);
          else {
            if (WW = MW.from, WW > gR) break;
            RW = MW.to, eW.push(MW), CW++
          }
          for (; CW < AW.length;) {
            let MW = AW[CW];
            if (MW.from != WW || !(MW.to > MW.from || MW.to == WW)) {
              RW = Math.min(MW.from, RW);
              break
            }
            eW.push(MW), CW++, RW = Math.min(MW.to, RW)
          }
          RW = Math.min(RW, gR);
          let zR = !1;
          if (eW.some((MW => MW.from == WW && (MW.to == RW || RW == gR))) && (zR = WW == RW, !zR && RW - WW < 10)) {
            let MW = WW - (TW + tR.value.length);
            MW > 0 && (tR.next(MW), TW = WW);
            for (let wW = WW;;) {
              if (wW >= RW) {
                zR = !0;
                break
              }
              if (!tR.lineBreak && TW + tR.value.length > wW) break;
              wW = TW + tR.value.length, TW += tR.value.length, tR.next()
            }
          }
          let bR = pW(eW);
          if (zR) NW.add(WW, WW, wW.c.widget({
            widget: new cR(bR),
            diagnostics: eW.slice()
          }));
          else {
            let MW = eW.reduce(((WW, RW) => RW.markClass ? WW + " " + RW.markClass : WW), "");
            NW.add(WW, RW, wW.c.mark({
              class: "cm-lintRange cm-lintRange-" + bR + MW,
              diagnostics: eW.slice(),
              inclusiveEnd: eW.some((WW => WW.to > RW))
            }))
          }
          if (BW = RW, BW == gR) break;
          for (let wW = 0; wW < eW.length; wW++) eW[wW].to <= BW && eW.splice(wW--, 1)
        }
        let iR = NW.finish();
        return new bR(iR, RW, yR(iR))
      }
    }

    function yR(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wW = null;
      return WW.between(MW, 1e9, ((WW, MW, CW) => {
        let {
          spec: zR
        } = CW;
        if (!(RW && zR.diagnostics.indexOf(RW) < 0))
          if (wW) {
            if (zR.diagnostics.indexOf(wW.diagnostic) < 0) return !1;
            wW = new AW(wW.from, MW, wW.diagnostic)
          } else wW = new AW(WW, MW, RW || zR.diagnostics[0])
      })), wW
    }

    function NW(WW, RW) {
      let MW = RW.pos,
        wW = RW.end || MW,
        CW = WW.state.facet(lW).hideOn(WW, MW, wW);
      if (null != CW) return CW;
      let zR = WW.startState.doc.lineAt(RW.pos);
      return !(!WW.effects.some((WW => WW.is(BW))) && !WW.changes.touchesRange(zR.from, Math.max(zR.to, wW)))
    }

    function eW(WW, RW) {
      return WW.field(gR, !1) ? RW : RW.concat(CW.A.appendConfig.of(hW))
    }
    const BW = CW.A.define(),
      tR = CW.A.define(),
      TW = CW.A.define(),
      gR = CW.C.define({
        create: () => new bR(wW.c.none, null, null),
        update(WW, RW) {
          if (RW.docChanged && WW.diagnostics.size) {
            let MW = WW.diagnostics.map(RW.changes),
              wW = null,
              CW = WW.panel;
            if (WW.selected) {
              let CW = RW.changes.mapPos(WW.selected.from, 1);
              wW = yR(MW, WW.selected.diagnostic, CW) || yR(MW, null, CW)
            }!MW.size && CW && RW.state.facet(lW).autoPanel && (CW = null), WW = new bR(MW, CW, wW)
          }
          for (let MW of RW.effects)
            if (MW.is(BW)) {
              let wW = RW.state.facet(lW).autoPanel ? MW.value.length ? jR.open : null : WW.panel;
              WW = bR.init(MW.value, wW, RW.state)
            } else MW.is(tR) ? WW = new bR(WW.diagnostics, MW.value ? jR.open : null, WW.selected) : MW.is(TW) && (WW = new bR(WW.diagnostics, WW.panel, MW.value));
          return WW
        },
        provide: WW => [wW.db.from(WW, (WW => WW.panel)), wW.g.vA.from(WW, (WW => WW.diagnostics))]
      });
    const iR = wW.c.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function YW(WW, RW, MW) {
      let wW, {
          diagnostics: CW
        } = WW.state.field(gR),
        zR = -1,
        AW = -1;
      CW.between(RW - (MW < 0 ? 1 : 0), RW + (MW > 0 ? 1 : 0), ((WW, CW, bR) => {
        let {
          spec: yR
        } = bR;
        if (RW >= WW && RW <= CW && (WW == CW || (RW > WW || MW > 0) && (RW < CW || MW < 0))) return wW = yR.diagnostics, zR = WW, AW = CW, !1
      }));
      let bR = WW.state.facet(lW).tooltipFilter;
      return wW && bR && (wW = bR(wW, WW.state)), wW ? {
        pos: zR,
        end: AW,
        above: WW.state.doc.lineAt(zR).to < AW,
        create: () => ({
          dom: JW(WW, wW)
        })
      } : null
    }

    function JW(WW, RW) {
      return (0, zR.c)("ul", {
        class: "cm-tooltip-lint"
      }, RW.map((RW => rR(WW, RW, !1))))
    }
    const PW = WW => {
        let RW = WW.state.field(gR, !1);
        return !(!RW || !RW.panel) && (WW.dispatch({
          effects: tR.of(!1)
        }), !0)
      },
      IW = [{
        key: "Mod-Shift-m",
        run: WW => {
          let RW = WW.state.field(gR, !1);
          RW && RW.panel || WW.dispatch({
            effects: eW(WW.state, [tR.of(!0)])
          });
          let MW = (0, wW.B)(WW, jR.open);
          return MW && MW.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: WW => {
          let RW = WW.state.field(gR, !1);
          if (!RW) return !1;
          let MW = WW.state.selection.main,
            wW = yR(RW.diagnostics, null, MW.to + 1);
          return !(!wW && (wW = yR(RW.diagnostics, null, 0), !wW || wW.from == MW.from && wW.to == MW.to)) && (WW.dispatch({
            selection: {
              anchor: wW.from,
              head: wW.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      oW = wW.n.fromClass(class {
        constructor(WW) {
          this.view = WW, this.timeout = -1, this.set = !0;
          let {
            delay: RW
          } = WW.state.facet(lW);
          this.lintTime = Date.now() + RW, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, RW)
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
              sources: RW
            } = WW.facet(lW);
            RW.length && function(WW, RW, MW) {
              let wW = [],
                CW = -1;
              for (let zR of WW) zR.then((MW => {
                wW.push(MW), clearTimeout(CW), wW.length == WW.length ? RW(wW) : CW = setTimeout((() => RW(wW)), 200)
              }), MW)
            }(RW.map((WW => Promise.resolve(WW(this.view)))), (RW => {
              this.view.state.doc == WW.doc && this.view.dispatch(function(WW, RW) {
                return {
                  effects: eW(WW, [BW.of(RW)])
                }
              }(this.view.state, RW.reduce(((WW, RW) => WW.concat(RW)))))
            }), (WW => {
              (0, wW.X)(this.view.state, WW)
            }))
          }
        }
        update(WW) {
          let RW = WW.state.facet(lW);
          (WW.docChanged || RW != WW.startState.facet(lW) || RW.needsRefresh && RW.needsRefresh(WW)) && (this.lintTime = Date.now() + RW.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, RW.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const lW = CW.m.define({
      combine: WW => ({
        sources: WW.map((WW => WW.source)).filter((WW => null != WW)),
        ...(0, CW.O)(WW.map((WW => WW.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: FW,
          tooltipFilter: FW,
          needsRefresh: (WW, RW) => WW ? RW ? MW => WW(MW) || RW(MW) : WW : RW,
          hideOn: (WW, RW) => WW ? RW ? (MW, wW, CW) => WW(MW, wW, CW) || RW(MW, wW, CW) : WW : RW,
          autoPanel: (WW, RW) => WW || RW
        })
      })
    });

    function FW(WW, RW) {
      return WW ? RW ? (MW, wW) => RW(WW(MW, wW), wW) : WW : RW
    }

    function fW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [lW.of({
        source: WW,
        config: RW
      }), oW, hW]
    }

    function QW(WW) {
      let RW = [];
      if (WW) WW: for (let {
          name: MW
        }
        of WW) {
        for (let WW = 0; WW < MW.length; WW++) {
          let wW = MW[WW];
          if (/[a-zA-Z]/.test(wW) && !RW.some((WW => WW.toLowerCase() == wW.toLowerCase()))) {
            RW.push(wW);
            continue WW
          }
        }
        RW.push("")
      }
      return RW
    }

    function rR(WW, RW, MW) {
      var wW;
      let CW = MW ? QW(RW.actions) : [];
      return (0, zR.c)("li", {
        class: "cm-diagnostic cm-diagnostic-" + RW.severity
      }, (0, zR.c)("span", {
        class: "cm-diagnosticText"
      }, RW.renderMessage ? RW.renderMessage(WW) : RW.message), null === (wW = RW.actions) || void 0 === wW ? void 0 : wW.map(((MW, wW) => {
        let AW = !1,
          bR = wW => {
            if (wW.preventDefault(), AW) return;
            AW = !0;
            let CW = yR(WW.state.field(gR).diagnostics, RW);
            CW && MW.apply(WW, CW.from, CW.to)
          },
          {
            name: NW
          } = MW,
          eW = CW[wW] ? NW.indexOf(CW[wW]) : -1,
          BW = eW < 0 ? NW : [NW.slice(0, eW), (0, zR.c)("u", NW.slice(eW, eW + 1)), NW.slice(eW + 1)],
          tR = MW.markClass ? " " + MW.markClass : "";
        return (0, zR.c)("button", {
          type: "button",
          class: "cm-diagnosticAction" + tR,
          onclick: bR,
          onmousedown: bR,
          "aria-label": ` Action: ${NW}${eW<0?"":` (access key "${CW[wW]})"`}.`
        }, BW)
      })), RW.source && (0, zR.c)("div", {
        class: "cm-diagnosticSource"
      }, RW.source))
    }
    class cR extends wW.r {
      constructor(WW) {
        super(), this.sev = WW
      }
      eq(WW) {
        return WW.sev == this.sev
      }
      toDOM() {
        return (0, zR.c)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class XW {
      constructor(WW, RW) {
        this.diagnostic = RW, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = rR(WW, RW, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class jR {
      constructor(WW) {
        this.view = WW, this.items = [];
        this.list = (0, zR.c)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: RW => {
            if (!(RW.ctrlKey || RW.altKey || RW.metaKey)) {
              if (27 == RW.keyCode) PW(this.view), this.view.focus();
              else if (38 == RW.keyCode || 33 == RW.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == RW.keyCode || 34 == RW.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == RW.keyCode) this.moveSelection(0);
              else if (35 == RW.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == RW.keyCode) this.view.focus();
              else {
                if (!(RW.keyCode >= 65 && RW.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: MW
                  } = this.items[this.selectedIndex], wW = QW(MW.actions);
                  for (let CW = 0; CW < wW.length; CW++)
                    if (wW[CW].toUpperCase().charCodeAt(0) == RW.keyCode) {
                      let RW = yR(this.view.state.field(gR).diagnostics, MW);
                      RW && MW.actions[CW].apply(WW, RW.from, RW.to)
                    }
                }
              }
              RW.preventDefault()
            }
          },
          onclick: WW => {
            for (let RW = 0; RW < this.items.length; RW++) this.items[RW].dom.contains(WW.target) && this.moveSelection(RW)
          }
        }), this.dom = (0, zR.c)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, zR.c)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => PW(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let WW = this.view.state.field(gR).selected;
        if (!WW) return -1;
        for (let RW = 0; RW < this.items.length; RW++)
          if (this.items[RW].diagnostic == WW.diagnostic) return RW;
        return -1
      }
      update() {
        let {
          diagnostics: WW,
          selected: RW
        } = this.view.state.field(gR), MW = 0, wW = !1, CW = null, zR = new Set;
        for (WW.between(0, this.view.state.doc.length, ((WW, AW, bR) => {
            let {
              spec: yR
            } = bR;
            for (let NW of yR.diagnostics) {
              if (zR.has(NW)) continue;
              zR.add(NW);
              let WW, AW = -1;
              for (let RW = MW; RW < this.items.length; RW++)
                if (this.items[RW].diagnostic == NW) {
                  AW = RW;
                  break
                } AW < 0 ? (WW = new XW(this.view, NW), this.items.splice(MW, 0, WW), wW = !0) : (WW = this.items[AW], AW > MW && (this.items.splice(MW, AW - MW), wW = !0)), RW && WW.diagnostic == RW.diagnostic ? WW.dom.hasAttribute("aria-selected") || (WW.dom.setAttribute("aria-selected", "true"), CW = WW) : WW.dom.hasAttribute("aria-selected") && WW.dom.removeAttribute("aria-selected"), MW++
            }
          })); MW < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) wW = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new XW(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), wW = !0), CW ? (this.list.setAttribute("aria-activedescendant", CW.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: CW.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: WW => {
            let {
              sel: RW,
              panel: MW
            } = WW, wW = MW.height / this.list.offsetHeight;
            RW.top < MW.top ? this.list.scrollTop -= (MW.top - RW.top) / wW : RW.bottom > MW.bottom && (this.list.scrollTop += (RW.bottom - MW.bottom) / wW)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), wW && this.sync()
      }
      sync() {
        let WW = this.list.firstChild;

        function RW() {
          let RW = WW;
          WW = RW.nextSibling, RW.remove()
        }
        for (let MW of this.items)
          if (MW.dom.parentNode == this.list) {
            for (; WW != MW.dom;) RW();
            WW = MW.dom.nextSibling
          } else this.list.insertBefore(MW.dom, WW);
        for (; WW;) RW()
      }
      moveSelection(WW) {
        if (this.selectedIndex < 0) return;
        let RW = yR(this.view.state.field(gR).diagnostics, this.items[WW].diagnostic);
        RW && this.view.dispatch({
          selection: {
            anchor: RW.from,
            head: RW.to
          },
          scrollIntoView: !0,
          effects: TW.of(RW)
        })
      }
      static open(WW) {
        return new jR(WW)
      }
    }

    function kR(WW) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(WW)}</svg>')`
    }

    function aR(WW) {
      return kR(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${WW}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const sW = wW.g.baseTheme({
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
        backgroundImage: aR("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: aR("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: aR("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: aR("#66d")
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

    function pW(WW) {
      let RW = "hint",
        MW = 1;
      for (let wW of WW) {
        let WW = dW(wW.severity);
        WW > MW && (MW = WW, RW = wW.severity)
      }
      return RW
    }
    wW.k;
    const hW = [gR, wW.g.vA.compute([gR], (WW => {
      let {
        selected: RW,
        panel: MW
      } = WW.field(gR);
      return RW && MW && RW.from != RW.to ? wW.c.set([iR.range(RW.from, RW.to)]) : wW.c.none
    })), (0, wW.P)(YW, {
      hideOn: NW
    }), sW]
  },
  38836: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => ZW,
      f: () => JW,
      i: () => SW
    });
    var wW = MW(38784),
      CW = MW(38778),
      zR = MW(38797);
    const AW = "function" == typeof String.prototype.normalize ? WW => WW.normalize("NFKD") : WW => WW;
    class bR {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW.length,
          CW = arguments.length > 4 ? arguments[4] : void 0,
          zR = arguments.length > 5 ? arguments[5] : void 0;
        this.test = zR, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = WW.iterRange(MW, wW), this.bufferStart = MW, this.normalize = CW ? WW => CW(AW(WW)) : AW, this.query = this.normalize(RW)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, CW.J)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let WW = this.peek();
          if (WW < 0) return this.done = !0, this;
          let RW = (0, CW.X)(WW),
            MW = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, CW.L)(WW);
          let wW = this.normalize(RW);
          if (wW.length)
            for (let CW = 0, zR = MW;; CW++) {
              let WW = wW.charCodeAt(CW),
                AW = this.match(WW, zR, this.bufferPos + this.bufferStart);
              if (CW == wW.length - 1) {
                if (AW) return this.value = AW, this;
                break
              }
              zR == MW && CW < RW.length && RW.charCodeAt(CW) == WW && zR++
            }
        }
      }
      match(WW, RW, MW) {
        let wW = null;
        for (let CW = 0; CW < this.matches.length; CW += 2) {
          let RW = this.matches[CW],
            zR = !1;
          this.query.charCodeAt(RW) == WW && (RW == this.query.length - 1 ? wW = {
            from: this.matches[CW + 1],
            to: MW
          } : (this.matches[CW]++, zR = !0)), zR || (this.matches.splice(CW, 2), CW -= 2)
        }
        return this.query.charCodeAt(0) == WW && (1 == this.query.length ? wW = {
          from: RW,
          to: MW
        } : this.matches.push(1, RW)), wW && this.test && !this.test(wW.from, wW.to, this.buffer, this.bufferStart) && (wW = null), wW
      }
    }
    "undefined" != typeof Symbol && (bR.prototype[Symbol.iterator] = function() {
      return this
    });
    const yR = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      NW = "gm" + (null == /x/.unicode ? "" : "u");
    class eW {
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : WW.length;
        if (this.text = WW, this.to = CW, this.curLine = "", this.done = !1, this.value = yR, /\\[sWDnr]|\n|\r|\[\^/.test(RW)) return new TW(WW, RW, MW, wW, CW);
        this.re = new RegExp(RW, NW + ((null === MW || void 0 === MW ? void 0 : MW.ignoreCase) ? "i" : "")), this.test = null === MW || void 0 === MW ? void 0 : MW.test, this.iter = WW.iter();
        let zR = WW.lineAt(wW);
        this.curLineStart = zR.from, this.matchPos = gR(WW, wW), this.getLine(this.curLineStart)
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
          let RW = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (RW) {
            let MW = this.curLineStart + RW.index,
              wW = MW + RW[0].length;
            if (this.matchPos = gR(this.text, wW + (MW == wW ? 1 : 0)), MW == this.curLineStart + this.curLine.length && this.nextLine(), (MW < wW || MW > this.value.to) && (!this.test || this.test(MW, wW, RW))) return this.value = {
              from: MW,
              to: wW,
              match: RW
            }, this;
            WW = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), WW = 0
          }
        }
      }
    }
    const BW = new WeakMap;
    class tR {
      constructor(WW, RW) {
        this.from = WW, this.text = RW
      }
      get to() {
        return this.from + this.text.length
      }
      static get(WW, RW, MW) {
        let wW = BW.get(WW);
        if (!wW || wW.from >= MW || wW.to <= RW) {
          let wW = new tR(RW, WW.sliceString(RW, MW));
          return BW.set(WW, wW), wW
        }
        if (wW.from == RW && wW.to == MW) return wW;
        let {
          text: CW,
          from: zR
        } = wW;
        return zR > RW && (CW = WW.sliceString(RW, zR) + CW, zR = RW), wW.to < MW && (CW += WW.sliceString(wW.to, MW)), BW.set(WW, new tR(zR, CW)), new tR(RW, CW.slice(RW - zR, MW - zR))
      }
    }
    class TW {
      constructor(WW, RW, MW, wW, CW) {
        this.text = WW, this.to = CW, this.done = !1, this.value = yR, this.matchPos = gR(WW, wW), this.re = new RegExp(RW, NW + ((null === MW || void 0 === MW ? void 0 : MW.ignoreCase) ? "i" : "")), this.test = null === MW || void 0 === MW ? void 0 : MW.test, this.flat = tR.get(WW, wW, this.chunkEnd(wW + 5e3))
      }
      chunkEnd(WW) {
        return WW >= this.to ? this.to : this.text.lineAt(WW).to
      }
      next() {
        for (;;) {
          let WW = this.re.lastIndex = this.matchPos - this.flat.from,
            RW = this.re.exec(this.flat.text);
          if (RW && !RW[0] && RW.index == WW && (this.re.lastIndex = WW + 1, RW = this.re.exec(this.flat.text)), RW) {
            let WW = this.flat.from + RW.index,
              MW = WW + RW[0].length;
            if ((this.flat.to >= this.to || RW.index + RW[0].length <= this.flat.text.length - 10) && (!this.test || this.test(WW, MW, RW))) return this.value = {
              from: WW,
              to: MW,
              match: RW
            }, this.matchPos = gR(this.text, MW + (WW == MW ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = tR.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function gR(WW, RW) {
      if (RW >= WW.length) return RW;
      let MW, wW = WW.lineAt(RW);
      for (; RW < wW.to && (MW = wW.text.charCodeAt(RW - wW.from)) >= 56320 && MW < 57344;) RW++;
      return RW
    }
    "undefined" != typeof Symbol && (eW.prototype[Symbol.iterator] = TW.prototype[Symbol.iterator] = function() {
      return this
    });
    const iR = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      YW = CW.m.define({
        combine: WW => (0, CW.O)(WW, iR, {
          highlightWordAroundCursor: (WW, RW) => WW || RW,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function JW(WW) {
      let RW = [FW, lW];
      return WW && RW.push(YW.of(WW)), RW
    }
    const PW = wW.c.mark({
        class: "cm-selectionMatch"
      }),
      IW = wW.c.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function oW(WW, RW, MW, wW) {
      return (0 == MW || WW(RW.sliceDoc(MW - 1, MW)) != CW.g.Word) && (wW == RW.doc.length || WW(RW.sliceDoc(wW, wW + 1)) != CW.g.Word)
    }
    const lW = wW.n.fromClass(class {
        constructor(WW) {
          this.vA = this.getDeco(WW)
        }
        update(WW) {
          (WW.selectionSet || WW.docChanged || WW.viewportChanged) && (this.vA = this.getDeco(WW.view))
        }
        getDeco(WW) {
          let RW = WW.state.facet(YW),
            {
              state: MW
            } = WW,
            zR = MW.selection;
          if (zR.WA.length > 1) return wW.c.none;
          let AW, yR = zR.main,
            NW = null;
          if (yR.empty) {
            if (!RW.highlightWordAroundCursor) return wW.c.none;
            let WW = MW.wordAt(yR.head);
            if (!WW) return wW.c.none;
            NW = MW.charCategorizer(yR.head), AW = MW.sliceDoc(WW.from, WW.to)
          } else {
            let WW = yR.to - yR.from;
            if (WW < RW.minSelectionLength || WW > 200) return wW.c.none;
            if (RW.wholeWords) {
              if (AW = MW.sliceDoc(yR.from, yR.to), NW = MW.charCategorizer(yR.head), !oW(NW, MW, yR.from, yR.to) || ! function(WW, RW, MW, wW) {
                  return WW(RW.sliceDoc(MW, MW + 1)) == CW.g.Word && WW(RW.sliceDoc(wW - 1, wW)) == CW.g.Word
                }(NW, MW, yR.from, yR.to)) return wW.c.none
            } else if (AW = MW.sliceDoc(yR.from, yR.to), !AW) return wW.c.none
          }
          let eW = [];
          for (let CW of WW.EzW) {
            let WW = new bR(MW.doc, AW, CW.from, CW.to);
            for (; !WW.next().done;) {
              let {
                from: CW,
                to: zR
              } = WW.value;
              if ((!NW || oW(NW, MW, CW, zR)) && (yR.empty && CW <= yR.from && zR >= yR.to ? eW.push(IW.range(CW, zR)) : (CW >= yR.to || zR <= yR.from) && eW.push(PW.range(CW, zR)), eW.length > RW.maxMatches)) return wW.c.none
            }
          }
          return wW.c.set(eW)
        }
      }, {
        vA: WW => WW.vA
      }),
      FW = wW.g.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const fW = CW.m.define({
      combine: WW => (0, CW.O)(WW, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: WW => new WR(WW),
        scrollToMatch: WW => wW.g.scrollIntoView(WW)
      })
    });
    class QW {
      constructor(WW) {
        this.search = WW.search, this.caseSensitive = !!WW.caseSensitive, this.literal = !!WW.literal, this.regexp = !!WW.regexp, this.replace = WW.replace || "", this.valid = !!this.search && (!this.regexp || function(WW) {
          try {
            return new RegExp(WW, NW), !0
          } catch (RW) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!WW.wholeWord, this.test = WW.test
      }
      unquote(WW) {
        return this.literal ? WW : WW.replace(/\\([nrt\\])/g, ((WW, RW) => "n" == RW ? "\n" : "r" == RW ? "\r" : "t" == RW ? "\t" : "\\"))
      }
      eq(WW) {
        return this.search == WW.search && this.replace == WW.replace && this.caseSensitive == WW.caseSensitive && this.regexp == WW.regexp && this.wholeWord == WW.wholeWord && this.test == WW.test
      }
      create() {
        return this.regexp ? new sW(this) : new XW(this)
      }
      getCursor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = WW.doc ? WW : CW.l.create({
            doc: WW
          });
        return null == MW && (MW = wW.doc.length), this.regexp ? jR(this, wW, RW, MW) : cR(this, wW, RW, MW)
      }
    }
    class rR {
      constructor(WW) {
        this.spec = WW
      }
    }

    function cR(WW, RW, MW, wW) {
      let zR;
      var AW, yR;
      return WW.wholeWord && (AW = RW.doc, yR = RW.charCategorizer(RW.selection.main.head), zR = (WW, RW, MW, wW) => ((wW > WW || wW + MW.length < RW) && (wW = Math.max(0, WW - 2), MW = AW.sliceString(wW, Math.min(AW.length, RW + 2))), (yR(kR(MW, WW - wW)) != CW.g.Word || yR(aR(MW, WW - wW)) != CW.g.Word) && (yR(aR(MW, RW - wW)) != CW.g.Word || yR(kR(MW, RW - wW)) != CW.g.Word))), WW.test && (zR = function(WW, RW, MW) {
        return (wW, CW, zR, AW) => {
          if (MW && !MW(wW, CW, zR, AW)) return !1;
          let bR = wW >= AW && CW <= AW + zR.length ? zR.slice(wW - AW, CW - AW) : RW.doc.sliceString(wW, CW);
          return WW(bR, RW, wW, CW)
        }
      }(WW.test, RW, zR)), new bR(RW.doc, WW.unquoted, MW, wW, WW.caseSensitive ? void 0 : WW => WW.toLowerCase(), zR)
    }
    class XW extends rR {
      constructor(WW) {
        super(WW)
      }
      nextMatch(WW, RW, MW) {
        let wW = cR(this.spec, WW, MW, WW.doc.length).nextOverlapping();
        if (wW.done) {
          let MW = Math.min(WW.doc.length, RW + this.spec.unquoted.length);
          wW = cR(this.spec, WW, 0, MW).nextOverlapping()
        }
        return wW.done || wW.value.from == RW && wW.value.to == MW ? null : wW.value
      }
      prevMatchInRange(WW, RW, MW) {
        for (let wW = MW;;) {
          let MW = Math.max(RW, wW - 1e4 - this.spec.unquoted.length),
            CW = cR(this.spec, WW, MW, wW),
            zR = null;
          for (; !CW.nextOverlapping().done;) zR = CW.value;
          if (zR) return zR;
          if (MW == RW) return null;
          wW -= 1e4
        }
      }
      prevMatch(WW, RW, MW) {
        let wW = this.prevMatchInRange(WW, 0, RW);
        return wW || (wW = this.prevMatchInRange(WW, Math.max(0, MW - this.spec.unquoted.length), WW.doc.length)), !wW || wW.from == RW && wW.to == MW ? null : wW
      }
      getReplacement(WW) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(WW, RW) {
        let MW = cR(this.spec, WW, 0, WW.doc.length),
          wW = [];
        for (; !MW.next().done;) {
          if (wW.length >= RW) return null;
          wW.push(MW.value)
        }
        return wW
      }
      highlight(WW, RW, MW, wW) {
        let CW = cR(this.spec, WW, Math.max(0, RW - this.spec.unquoted.length), Math.min(MW + this.spec.unquoted.length, WW.doc.length));
        for (; !CW.next().done;) wW(CW.value.from, CW.value.to)
      }
    }

    function jR(WW, RW, MW, wW) {
      let zR;
      var AW;
      return WW.wholeWord && (AW = RW.charCategorizer(RW.selection.main.head), zR = (WW, RW, MW) => !MW[0].length || (AW(kR(MW.input, MW.index)) != CW.g.Word || AW(aR(MW.input, MW.index)) != CW.g.Word) && (AW(aR(MW.input, MW.index + MW[0].length)) != CW.g.Word || AW(kR(MW.input, MW.index + MW[0].length)) != CW.g.Word)), WW.test && (zR = function(WW, RW, MW) {
        return (wW, CW, zR) => (!MW || MW(wW, CW, zR)) && WW(zR[0], RW, wW, CW)
      }(WW.test, RW, zR)), new eW(RW.doc, WW.search, {
        ignoreCase: !WW.caseSensitive,
        test: zR
      }, MW, wW)
    }

    function kR(WW, RW) {
      return WW.slice((0, CW.S)(WW, RW, !1), RW)
    }

    function aR(WW, RW) {
      return WW.slice(RW, (0, CW.S)(WW, RW))
    }
    class sW extends rR {
      nextMatch(WW, RW, MW) {
        let wW = jR(this.spec, WW, MW, WW.doc.length).next();
        return wW.done && (wW = jR(this.spec, WW, 0, RW).next()), wW.done ? null : wW.value
      }
      prevMatchInRange(WW, RW, MW) {
        for (let wW = 1;; wW++) {
          let CW = Math.max(RW, MW - 1e4 * wW),
            zR = jR(this.spec, WW, CW, MW),
            AW = null;
          for (; !zR.next().done;) AW = zR.value;
          if (AW && (CW == RW || AW.from > CW + 10)) return AW;
          if (CW == RW) return null
        }
      }
      prevMatch(WW, RW, MW) {
        return this.prevMatchInRange(WW, 0, RW) || this.prevMatchInRange(WW, MW, WW.doc.length)
      }
      getReplacement(WW) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((RW, MW) => {
          if ("&" == MW) return WW.match[0];
          if ("$" == MW) return "$";
          for (let wW = MW.length; wW > 0; wW--) {
            let RW = +MW.slice(0, wW);
            if (RW > 0 && RW < WW.match.length) return WW.match[RW] + MW.slice(wW)
          }
          return RW
        }))
      }
      matchAll(WW, RW) {
        let MW = jR(this.spec, WW, 0, WW.doc.length),
          wW = [];
        for (; !MW.next().done;) {
          if (wW.length >= RW) return null;
          wW.push(MW.value)
        }
        return wW
      }
      highlight(WW, RW, MW, wW) {
        let CW = jR(this.spec, WW, Math.max(0, RW - 250), Math.min(MW + 250, WW.doc.length));
        for (; !CW.next().done;) wW(CW.value.from, CW.value.to)
      }
    }
    const dW = CW.A.define(),
      pW = CW.A.define(),
      hW = CW.C.define({
        create: WW => new UW(LW(WW).create(), null),
        update(WW, RW) {
          for (let MW of RW.effects) MW.is(dW) ? WW = new UW(MW.value.create(), WW.panel) : MW.is(pW) && (WW = new UW(WW.query, MW.value ? GW : null));
          return WW
        },
        provide: WW => wW.db.from(WW, (WW => WW.panel))
      });
    class UW {
      constructor(WW, RW) {
        this.query = WW, this.panel = RW
      }
    }
    const EW = wW.c.mark({
        class: "cm-searchMatch"
      }),
      VW = wW.c.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      mR = wW.n.fromClass(class {
        constructor(WW) {
          this.view = WW, this.vA = this.highlight(WW.state.field(hW))
        }
        update(WW) {
          let RW = WW.state.field(hW);
          (RW != WW.startState.field(hW) || WW.docChanged || WW.selectionSet || WW.viewportChanged) && (this.vA = this.highlight(RW))
        }
        highlight(WW) {
          let {
            query: RW,
            panel: MW
          } = WW;
          if (!MW || !RW.spec.valid) return wW.c.none;
          let {
            view: zR
          } = this, AW = new CW.q;
          for (let wW = 0, CW = zR.EzW, bR = CW.length; wW < bR; wW++) {
            let {
              from: WW,
              to: MW
            } = CW[wW];
            for (; wW < bR - 1 && MW > CW[wW + 1].from - 500;) MW = CW[++wW].to;
            RW.highlight(zR.state, WW, MW, ((WW, RW) => {
              let MW = zR.state.selection.WA.some((MW => MW.from == WW && MW.to == RW));
              AW.add(WW, RW, MW ? VW : EW)
            }))
          }
          return AW.finish()
        }
      }, {
        vA: WW => WW.vA
      });

    function xR(WW) {
      return RW => {
        let MW = RW.state.field(hW, !1);
        return MW && MW.query.spec.valid ? WW(RW, MW) : qR(RW)
      }
    }
    const vR = xR(((WW, RW) => {
        let {
          query: MW
        } = RW, {
          to: wW
        } = WW.state.selection.main, zR = MW.nextMatch(WW.state, wW, wW);
        if (!zR) return !1;
        let AW = CW.j.single(zR.from, zR.to),
          bR = WW.state.facet(fW);
        return WW.dispatch({
          selection: AW,
          effects: [CR(WW, zR), bR.scrollToMatch(AW.main, WW)],
          userEvent: "select.search"
        }), DW(WW), !0
      })),
      KW = xR(((WW, RW) => {
        let {
          query: MW
        } = RW, {
          state: wW
        } = WW, {
          from: zR
        } = wW.selection.main, AW = MW.prevMatch(wW, zR, zR);
        if (!AW) return !1;
        let bR = CW.j.single(AW.from, AW.to),
          yR = WW.state.facet(fW);
        return WW.dispatch({
          selection: bR,
          effects: [CR(WW, AW), yR.scrollToMatch(bR.main, WW)],
          userEvent: "select.search"
        }), DW(WW), !0
      })),
      uW = xR(((WW, RW) => {
        let {
          query: MW
        } = RW, wW = MW.matchAll(WW.state, 1e3);
        return !(!wW || !wW.length) && (WW.dispatch({
          selection: CW.j.create(wW.map((WW => CW.j.range(WW.from, WW.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      OW = xR(((WW, RW) => {
        let {
          query: MW
        } = RW, {
          state: zR
        } = WW, {
          from: AW,
          to: bR
        } = zR.selection.main;
        if (zR.readOnly) return !1;
        let yR = MW.nextMatch(zR, AW, AW);
        if (!yR) return !1;
        let NW, eW, BW = yR,
          tR = [],
          TW = [];
        BW.from == AW && BW.to == bR && (eW = zR.toText(MW.getReplacement(BW)), tR.push({
          from: BW.from,
          to: BW.to,
          insert: eW
        }), BW = MW.nextMatch(zR, BW.from, BW.to), TW.push(wW.g.announce.of(zR.phrase("replaced match on line $", zR.doc.lineAt(AW).number) + ".")));
        let gR = WW.state.changes(tR);
        return BW && (NW = CW.j.single(BW.from, BW.to).map(gR), TW.push(CR(WW, BW)), TW.push(zR.facet(fW).scrollToMatch(NW.main, WW))), WW.dispatch({
          changes: gR,
          selection: NW,
          effects: TW,
          userEvent: "input.replace"
        }), !0
      })),
      nW = xR(((WW, RW) => {
        let {
          query: MW
        } = RW;
        if (WW.state.readOnly) return !1;
        let CW = MW.matchAll(WW.state, 1e9).map((WW => {
          let {
            from: RW,
            to: wW
          } = WW;
          return {
            from: RW,
            to: wW,
            insert: MW.getReplacement(WW)
          }
        }));
        if (!CW.length) return !1;
        let zR = WW.state.phrase("replaced $ matches", CW.length) + ".";
        return WW.dispatch({
          changes: CW,
          effects: wW.g.announce.of(zR),
          userEvent: "input.replace.all"
        }), !0
      }));

    function GW(WW) {
      return WW.state.facet(fW).createPanel(WW)
    }

    function LW(WW, RW) {
      var MW, wW, CW, zR, AW;
      let bR = WW.selection.main,
        yR = bR.empty || bR.to > bR.from + 100 ? "" : WW.sliceDoc(bR.from, bR.to);
      if (RW && !yR) return RW;
      let NW = WW.facet(fW);
      return new QW({
        search: (null !== (MW = null === RW || void 0 === RW ? void 0 : RW.literal) && void 0 !== MW ? MW : NW.literal) ? yR : yR.replace(/\n/g, "\\n"),
        caseSensitive: null !== (wW = null === RW || void 0 === RW ? void 0 : RW.caseSensitive) && void 0 !== wW ? wW : NW.caseSensitive,
        literal: null !== (CW = null === RW || void 0 === RW ? void 0 : RW.literal) && void 0 !== CW ? CW : NW.literal,
        regexp: null !== (zR = null === RW || void 0 === RW ? void 0 : RW.regexp) && void 0 !== zR ? zR : NW.regexp,
        wholeWord: null !== (AW = null === RW || void 0 === RW ? void 0 : RW.wholeWord) && void 0 !== AW ? AW : NW.wholeWord
      })
    }

    function HW(WW) {
      let RW = (0, wW.B)(WW, GW);
      return RW && RW.dom.querySelector("[main-field]")
    }

    function DW(WW) {
      let RW = HW(WW);
      RW && RW == WW.root.activeElement && RW.select()
    }
    const qR = WW => {
        let RW = WW.state.field(hW, !1);
        if (RW && RW.panel) {
          let MW = HW(WW);
          if (MW && MW != WW.root.activeElement) {
            let wW = LW(WW.state, RW.query.spec);
            wW.valid && WW.dispatch({
              effects: dW.of(wW)
            }), MW.focus(), MW.select()
          }
        } else WW.dispatch({
          effects: [pW.of(!0), RW ? dW.of(LW(WW.state, RW.query.spec)) : CW.A.appendConfig.of(AR)]
        });
        return !0
      },
      ZW = WW => {
        let RW = WW.state.field(hW, !1);
        if (!RW || !RW.panel) return !1;
        let MW = (0, wW.B)(WW, GW);
        return MW && MW.dom.contains(WW.root.activeElement) && WW.focus(), WW.dispatch({
          effects: pW.of(!1)
        }), !0
      },
      SW = [{
        key: "Mod-f",
        run: qR,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: vR,
        shift: KW,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: vR,
        shift: KW,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: ZW,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: WW => {
          let {
            state: RW,
            dispatch: MW
          } = WW, wW = RW.selection;
          if (wW.WA.length > 1 || wW.main.empty) return !1;
          let {
            from: zR,
            to: AW
          } = wW.main, yR = [], NW = 0;
          for (let eW = new bR(RW.doc, RW.sliceDoc(zR, AW)); !eW.next().done;) {
            if (yR.length > 1e3) return !1;
            eW.value.from == zR && (NW = yR.length), yR.push(CW.j.range(eW.value.from, eW.value.to))
          }
          return MW(RW.update({
            selection: CW.j.create(yR, NW),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: WW => {
          let {
            state: RW
          } = WW, MW = String(RW.doc.lineAt(WW.state.selection.main.head).number), {
            close: zR,
            result: AW
          } = (0, wW.ab)(WW, {
            label: RW.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: MW
            },
            focus: !0,
            submitLabel: RW.phrase("go")
          });
          return AW.then((MW => {
            let AW = MW && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(MW.elements.line.value);
            if (!AW) return void WW.dispatch({
              effects: zR
            });
            let bR = RW.doc.lineAt(RW.selection.main.head),
              [, yR, NW, eW, BW] = AW,
              tR = eW ? +eW.slice(1) : 0,
              TW = NW ? +NW : bR.number;
            if (NW && BW) {
              let WW = TW / 100;
              yR && (WW = WW * ("-" == yR ? -1 : 1) + bR.number / RW.doc.lines), TW = Math.round(RW.doc.lines * WW)
            } else NW && yR && (TW = TW * ("-" == yR ? -1 : 1) + bR.number);
            let gR = RW.doc.line(Math.max(1, Math.min(RW.doc.lines, TW))),
              iR = CW.j.cursor(gR.from + Math.max(0, Math.min(tR, gR.length)));
            WW.dispatch({
              effects: [zR, wW.g.scrollIntoView(iR.from, {
                y: "center"
              })],
              selection: iR
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: WW => {
          let {
            state: RW,
            dispatch: MW
          } = WW, {
            WA: zR
          } = RW.selection;
          if (zR.some((WW => WW.from === WW.to))) return (WW => {
            let {
              state: RW,
              dispatch: MW
            } = WW, {
              selection: wW
            } = RW, zR = CW.j.create(wW.WA.map((WW => RW.wordAt(WW.head) || CW.j.cursor(WW.head))), wW.mainIndex);
            return !zR.eq(wW) && (MW(RW.update({
              selection: zR
            })), !0)
          })({
            state: RW,
            dispatch: MW
          });
          let AW = RW.sliceDoc(zR[0].from, zR[0].to);
          if (RW.selection.WA.some((WW => RW.sliceDoc(WW.from, WW.to) != AW))) return !1;
          let yR = function(WW, RW) {
            let {
              main: MW,
              WA: wW
            } = WW.selection, CW = WW.wordAt(MW.head), zR = CW && CW.from == MW.from && CW.to == MW.to;
            for (let AW = !1, yR = new bR(WW.doc, RW, wW[wW.length - 1].to);;) {
              if (yR.next(), !yR.done) {
                if (AW && wW.some((WW => WW.from == yR.value.from))) continue;
                if (zR) {
                  let RW = WW.wordAt(yR.value.from);
                  if (!RW || RW.from != yR.value.from || RW.to != yR.value.to) continue
                }
                return yR.value
              }
              if (AW) return null;
              yR = new bR(WW.doc, RW, 0, Math.max(0, wW[wW.length - 1].from - 1)), AW = !0
            }
          }(RW, AW);
          return !!yR && (MW(RW.update({
            selection: RW.selection.addRange(CW.j.range(yR.from, yR.to), !1),
            effects: wW.g.scrollIntoView(yR.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class WR {
      constructor(WW) {
        this.view = WW;
        let RW = this.query = WW.state.field(hW).query.spec;

        function MW(WW, RW, MW) {
          return (0, zR.c)("button", {
            class: "cm-button",
            name: WW,
            onclick: RW,
            type: "button"
          }, MW)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, zR.c)("input", {
          value: RW.search,
          placeholder: RR(WW, "Find"),
          "aria-label": RR(WW, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, zR.c)("input", {
          value: RW.replace,
          placeholder: RR(WW, "Replace"),
          "aria-label": RR(WW, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, zR.c)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: RW.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, zR.c)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: RW.regexp,
          onchange: this.commit
        }), this.wordField = (0, zR.c)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: RW.wholeWord,
          onchange: this.commit
        }), this.dom = (0, zR.c)("div", {
          onkeydown: WW => this.keydown(WW),
          class: "cm-search"
        }, [this.searchField, MW("next", (() => vR(WW)), [RR(WW, "next")]), MW("prev", (() => KW(WW)), [RR(WW, "previous")]), MW("select", (() => uW(WW)), [RR(WW, "all")]), (0, zR.c)("label", null, [this.caseField, RR(WW, "match case")]), (0, zR.c)("label", null, [this.reField, RR(WW, "regexp")]), (0, zR.c)("label", null, [this.wordField, RR(WW, "by word")]), ...WW.state.readOnly ? [] : [(0, zR.c)("br"), this.replaceField, MW("replace", (() => OW(WW)), [RR(WW, "replace")]), MW("replaceAll", (() => nW(WW)), [RR(WW, "replace all")])], (0, zR.c)("button", {
          name: "close",
          onclick: () => ZW(WW),
          "aria-label": RR(WW, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let WW = new QW({
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
        (0, wW.$)(this.view, WW, "search-panel") ? WW.preventDefault(): 13 == WW.keyCode && WW.target == this.searchField ? (WW.preventDefault(), (WW.shiftKey ? KW : vR)(this.view)) : 13 == WW.keyCode && WW.target == this.replaceField && (WW.preventDefault(), OW(this.view))
      }
      update(WW) {
        for (let RW of WW.transactions)
          for (let WW of RW.effects) WW.is(dW) && !WW.value.eq(this.query) && this.setQuery(WW.value)
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
        return this.view.state.facet(fW).top
      }
    }

    function RR(WW, RW) {
      return WW.state.phrase(RW)
    }
    const MR = 30,
      wR = /[\s\.,:;?!]/;

    function CR(WW, RW) {
      let {
        from: MW,
        to: CW
      } = RW, zR = WW.state.doc.lineAt(MW), AW = WW.state.doc.lineAt(CW).to, bR = Math.max(zR.from, MW - MR), yR = Math.min(AW, CW + MR), NW = WW.state.sliceDoc(bR, yR);
      if (bR != zR.from)
        for (let wW = 0; wW < MR; wW++)
          if (!wR.test(NW[wW + 1]) && wR.test(NW[wW])) {
            NW = NW.slice(wW);
            break
          } if (yR != AW)
        for (let wW = NW.length - 1; wW > NW.length - MR; wW--)
          if (!wR.test(NW[wW - 1]) && wR.test(NW[wW])) {
            NW = NW.slice(0, wW);
            break
          } return wW.g.announce.of(`${WW.state.phrase("current match")}. ${NW} ${WW.state.phrase("on line")} ${zR.number}.`)
    }
    const zM = wW.g.baseTheme({
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
      AR = [hW, CW.p.low(mR), zM]
  },
  38784: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => sW,
      d: () => NR,
      g: () => rz,
      k: () => zb,
      n: () => DR,
      r: () => kR,
      t: () => jA,
      x: () => DC,
      y: () => zA,
      B: () => Dz,
      F: () => Gz,
      G: () => eA,
      K: () => Jz,
      H: () => kb,
      O: () => Tz,
      P: () => nz,
      S: () => pC,
      V: () => rb,
      X: () => nR,
      Z: () => lz,
      _: () => rA,
      $: () => EC,
      ab: () => RA,
      db: () => WA,
      fb: () => mA
    });
    for (var wW = MW(38778), CW = MW(38789), zR = {
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
      }, AW = {
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
      }, bR = "undefined" != typeof navigator && /Mac/.test(navigator.platform), yR = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), NW = 0; NW < 10; NW++) zR[48 + NW] = zR[96 + NW] = String(NW);
    for (NW = 1; NW <= 24; NW++) zR[NW + 111] = "F" + NW;
    for (NW = 65; NW <= 90; NW++) zR[NW] = String.fromCharCode(NW + 32), AW[NW] = String.fromCharCode(NW);
    for (var eW in zR) AW.hasOwnProperty(eW) || (AW[eW] = zR[eW]);
    var BW = MW(38797);
    let tR = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      TW = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const gR = /Edge\/(\d+)/.exec(tR.userAgent),
      iR = /MSIE \d/.test(tR.userAgent),
      YW = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(tR.userAgent),
      JW = !!(iR || YW || gR),
      PW = !JW && /gecko\/(\d+)/i.test(tR.userAgent),
      IW = !JW && /Chrome\/(\d+)/.exec(tR.userAgent),
      oW = "webkitFontSmoothing" in TW.documentElement.style,
      lW = !JW && /Apple Computer/.test(tR.vendor),
      FW = lW && (/Mobile\/\w+/.test(tR.userAgent) || tR.maxTouchPoints > 2);
    var fW = {
      mac: FW || /Mac/.test(tR.platform),
      windows: /Win/.test(tR.platform),
      linux: /Linux|X11/.test(tR.platform),
      ie: JW,
      ie_version: iR ? TW.documentMode || 6 : YW ? +YW[1] : gR ? +gR[1] : 0,
      gecko: PW,
      gecko_version: PW ? +(/Firefox\/(\d+)/.exec(tR.userAgent) || [0, 0])[1] : 0,
      chrome: !!IW,
      chrome_version: IW ? +IW[1] : 0,
      ios: FW,
      android: /Android\b/.test(tR.userAgent),
      webkit: oW,
      webkit_version: oW ? +(/\bAppleWebKit\/(\d+)/.exec(tR.userAgent) || [0, 0])[1] : 0,
      safari: lW,
      safari_version: lW ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(tR.userAgent) || [0, 0])[1] : 0,
      tabSize: null != TW.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function QW(WW, RW) {
      for (let MW in WW) "class" == MW && RW.class ? RW.class += " " + WW.class : "style" == MW && RW.style ? RW.style += ";" + WW.style : RW[MW] = WW[MW];
      return RW
    }
    const rR = Object.create(null);

    function cR(WW, RW, MW) {
      if (WW == RW) return !0;
      WW || (WW = rR), RW || (RW = rR);
      let wW = Object.keys(WW),
        CW = Object.keys(RW);
      if (wW.length - (MW && wW.indexOf(MW) > -1 ? 1 : 0) != CW.length - (MW && CW.indexOf(MW) > -1 ? 1 : 0)) return !1;
      for (let zR of wW)
        if (zR != MW && (-1 == CW.indexOf(zR) || WW[zR] !== RW[zR])) return !1;
      return !0
    }

    function XW(WW, RW, MW) {
      let wW = !1;
      if (RW)
        for (let CW in RW) MW && CW in MW || (wW = !0, "style" == CW ? WW.style.cssText = "" : WW.removeAttribute(CW));
      if (MW)
        for (let CW in MW) RW && RW[CW] == MW[CW] || (wW = !0, "style" == CW ? WW.style.cssText = MW[CW] : WW.setAttribute(CW, MW[CW]));
      return wW
    }

    function jR(WW) {
      let RW = Object.create(null);
      for (let MW = 0; MW < WW.attributes.length; MW++) {
        let wW = WW.attributes[MW];
        RW[wW.name] = wW.value
      }
      return RW
    }
    class kR {
      eq(WW) {
        return !1
      }
      updateDOM(WW, RW, MW) {
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
      coordsAt(WW, RW, MW) {
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
    var aR = function(WW) {
      return WW[WW.Text = 0] = "Text", WW[WW.WidgetBefore = 1] = "WidgetBefore", WW[WW.WidgetAfter = 2] = "WidgetAfter", WW[WW.WidgetRange = 3] = "WidgetRange", WW
    }(aR || (aR = {}));
    class sW extends wW.w {
      constructor(WW, RW, MW, wW) {
        super(), this.startSide = WW, this.endSide = RW, this.widget = MW, this.spec = wW
      }
      get heightRelevant() {
        return !1
      }
      static mark(WW) {
        return new dW(WW)
      }
      static widget(WW) {
        let RW = Math.max(-1e4, Math.min(1e4, WW.side || 0)),
          MW = !!WW.block;
        return RW += MW && !WW.inlineOrder ? RW > 0 ? 3e8 : -4e8 : RW > 0 ? 1e8 : -1e8, new hW(WW, RW, RW, MW, WW.widget || null, !1)
      }
      static replace(WW) {
        let RW, MW, wW = !!WW.block;
        if (WW.isBlockGap) RW = -5e8, MW = 4e8;
        else {
          let {
            start: CW,
            end: zR
          } = UW(WW, wW);
          RW = (CW ? wW ? -3e8 : -1 : 5e8) - 1, MW = 1 + (zR ? wW ? 2e8 : 1 : -6e8)
        }
        return new hW(WW, RW, MW, wW, WW.widget || null, !0)
      }
      static line(WW) {
        return new pW(WW)
      }
      static set(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return wW.s.of(WW, RW)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    sW.none = wW.s.empty;
    class dW extends sW {
      constructor(WW) {
        let {
          start: RW,
          end: MW
        } = UW(WW);
        super(RW ? -1 : 5e8, MW ? 1 : -6e8, null, WW), this.tagName = WW.tagName || "span", this.attrs = WW.class && WW.attributes ? QW(WW.attributes, {
          class: WW.class
        }) : WW.class ? {
          class: WW.class
        } : WW.attributes || rR
      }
      eq(WW) {
        return this == WW || WW instanceof dW && this.tagName == WW.tagName && cR(this.attrs, WW.attrs)
      }
      range(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW;
        if (WW >= RW) throw new RangeError("Mark decorations may not be empty");
        return super.range(WW, RW)
      }
    }
    dW.prototype.point = !1;
    class pW extends sW {
      constructor(WW) {
        super(-2e8, -2e8, null, WW)
      }
      eq(WW) {
        return WW instanceof pW && this.spec.class == WW.spec.class && cR(this.spec.attributes, WW.spec.attributes)
      }
      range(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW;
        if (RW != WW) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(WW, RW)
      }
    }
    pW.prototype.mapMode = wW.n.TrackBefore, pW.prototype.point = !0;
    class hW extends sW {
      constructor(WW, RW, MW, CW, zR, AW) {
        super(RW, MW, zR, WW), this.block = CW, this.isReplace = AW, this.mapMode = CW ? RW <= 0 ? wW.n.TrackBefore : wW.n.TrackAfter : wW.n.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? aR.WidgetRange : this.startSide <= 0 ? aR.WidgetBefore : aR.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(WW) {
        return WW instanceof hW && (RW = this.widget, MW = WW.widget, RW == MW || !!(RW && MW && RW.compare(MW))) && this.block == WW.block && this.startSide == WW.startSide && this.endSide == WW.endSide;
        var RW, MW
      }
      range(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW;
        if (this.isReplace && (WW > RW || WW == RW && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && RW != WW) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(WW, RW)
      }
    }

    function UW(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: MW,
          inclusiveEnd: wW
        } = WW;
      return null == MW && (MW = WW.inclusive), null == wW && (wW = WW.inclusive), {
        start: null !== MW && void 0 !== MW ? MW : RW,
        end: null !== wW && void 0 !== wW ? wW : RW
      }
    }

    function EW(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        CW = MW.length - 1;
      CW >= 0 && MW[CW] + wW >= WW ? MW[CW] = Math.max(MW[CW], RW) : MW.push(WW, RW)
    }
    hW.prototype.point = !0;
    class VW extends wW.w {
      constructor(WW, RW) {
        super(), this.tagName = WW, this.attributes = RW
      }
      eq(WW) {
        return WW == this || WW instanceof VW && this.tagName == WW.tagName && cR(this.attributes, WW.attributes)
      }
      static create(WW) {
        return new VW(WW.tagName, WW.attributes || rR)
      }
      static set(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return wW.s.of(WW, RW)
      }
    }

    function mR(WW) {
      let RW;
      return RW = 11 == WW.nodeType ? WW.getSelection ? WW : WW.ownerDocument : WW, RW.getSelection()
    }

    function xR(WW, RW) {
      return !!RW && (WW == RW || WW.contains(1 != RW.nodeType ? RW.parentNode : RW))
    }

    function vR(WW, RW) {
      if (!RW.anchorNode) return !1;
      try {
        return xR(WW, RW.anchorNode)
      } catch (MW) {
        return !1
      }
    }

    function KW(WW) {
      return 3 == WW.nodeType ? wR(WW, 0, WW.nodeValue.length).getClientRects() : 1 == WW.nodeType ? WW.getClientRects() : []
    }

    function uW(WW, RW, MW, wW) {
      return !!MW && (GW(WW, RW, MW, wW, -1) || GW(WW, RW, MW, wW, 1))
    }

    function OW(WW) {
      for (var RW = 0;; RW++)
        if (!(WW = WW.previousSibling)) return RW
    }

    function nW(WW) {
      return 1 == WW.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(WW.nodeName)
    }

    function GW(WW, RW, MW, wW, CW) {
      for (;;) {
        if (WW == MW && RW == wW) return !0;
        if (RW == (CW < 0 ? 0 : LW(WW))) {
          if ("DIV" == WW.nodeName) return !1;
          let MW = WW.parentNode;
          if (!MW || 1 != MW.nodeType) return !1;
          RW = OW(WW) + (CW < 0 ? 0 : 1), WW = MW
        } else {
          if (1 != WW.nodeType) return !1;
          if (1 == (WW = WW.childNodes[RW + (CW < 0 ? -1 : 0)]).nodeType && "false" == WW.contentEditable) return !1;
          RW = CW < 0 ? LW(WW) : 0
        }
      }
    }

    function LW(WW) {
      return 3 == WW.nodeType ? WW.nodeValue.length : WW.childNodes.length
    }

    function HW(WW, RW) {
      let MW = RW ? WW.left : WW.right;
      return {
        left: MW,
        right: MW,
        top: WW.top,
        bottom: WW.bottom
      }
    }

    function DW(WW) {
      let RW = WW.visualViewport;
      return RW ? {
        left: 0,
        right: RW.width,
        top: 0,
        bottom: RW.height
      } : {
        left: 0,
        right: WW.innerWidth,
        top: 0,
        bottom: WW.innerHeight
      }
    }

    function qR(WW, RW) {
      let MW = RW.width / WW.offsetWidth,
        wW = RW.height / WW.offsetHeight;
      return (MW > .995 && MW < 1.005 || !isFinite(MW) || Math.abs(RW.width - WW.offsetWidth) < 1) && (MW = 1), (wW > .995 && wW < 1.005 || !isFinite(wW) || Math.abs(RW.height - WW.offsetHeight) < 1) && (wW = 1), {
        scaleX: MW,
        scaleY: wW
      }
    }

    function ZW(WW) {
      let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        MW = WW.ownerDocument,
        wW = null,
        CW = null;
      for (let zR = WW.parentNode; zR && (zR != MW.body && (RW && !wW || !CW));)
        if (1 == zR.nodeType) !CW && zR.scrollHeight > zR.clientHeight && (CW = zR), RW && !wW && zR.scrollWidth > zR.clientWidth && (wW = zR), zR = zR.assignedSlot || zR.parentNode;
        else {
          if (11 != zR.nodeType) break;
          zR = zR.host
        } return {
        x: wW,
        y: CW
      }
    }
    VW.prototype.startSide = VW.prototype.endSide = -1;
    class SW {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(WW) {
        return this.anchorNode == WW.anchorNode && this.anchorOffset == WW.anchorOffset && this.focusNode == WW.focusNode && this.focusOffset == WW.focusOffset
      }
      setRange(WW) {
        let {
          anchorNode: RW,
          focusNode: MW
        } = WW;
        this.set(RW, Math.min(WW.anchorOffset, RW ? LW(RW) : 0), MW, Math.min(WW.focusOffset, MW ? LW(MW) : 0))
      }
      set(WW, RW, MW, wW) {
        this.anchorNode = WW, this.anchorOffset = RW, this.focusNode = MW, this.focusOffset = wW
      }
    }
    let WR, RR = null;

    function MR(WW) {
      if (WW.setActive) return WW.setActive();
      if (RR) return WW.focus(RR);
      let RW = [];
      for (let MW = WW; MW && (RW.push(MW, MW.scrollTop, MW.scrollLeft), MW != MW.ownerDocument); MW = MW.parentNode);
      if (WW.focus(null == RR ? {
          get preventScroll() {
            return RR = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !RR) {
        RR = !1;
        for (let WW = 0; WW < RW.length;) {
          let MW = RW[WW++],
            wW = RW[WW++],
            CW = RW[WW++];
          MW.scrollTop != wW && (MW.scrollTop = wW), MW.scrollLeft != CW && (MW.scrollLeft = CW)
        }
      }
    }

    function wR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RW,
        wW = WR || (WR = document.createRange());
      return wW.setEnd(WW, MW), wW.setStart(WW, RW), wW
    }

    function CR(WW, RW, MW, wW) {
      let CW = {
        key: RW,
        code: RW,
        keyCode: MW,
        which: MW,
        cancelable: !0
      };
      wW && ({
        altKey: CW.altKey,
        ctrlKey: CW.ctrlKey,
        shiftKey: CW.shiftKey,
        metaKey: CW.metaKey
      } = wW);
      let zR = new KeyboardEvent("keydown", CW);
      zR.synthetic = !0, WW.dispatchEvent(zR);
      let AW = new KeyboardEvent("keyup", CW);
      return AW.synthetic = !0, WW.dispatchEvent(AW), zR.defaultPrevented || AW.defaultPrevented
    }

    function zM(WW) {
      return WW instanceof Window ? WW.pageYOffset > Math.max(0, WW.document.documentElement.scrollHeight - WW.innerHeight - 4) : WW.scrollTop > Math.max(1, WW.scrollHeight - WW.clientHeight - 4)
    }

    function AR(WW, RW) {
      for (let MW = WW, wW = RW;;) {
        if (3 == MW.nodeType && wW > 0) return {
          node: MW,
          offset: wW
        };
        if (1 == MW.nodeType && wW > 0) {
          if ("false" == MW.contentEditable) return null;
          MW = MW.childNodes[wW - 1], wW = LW(MW)
        } else {
          if (!MW.parentNode || nW(MW)) return null;
          wW = OW(MW), MW = MW.parentNode
        }
      }
    }

    function bM(WW, RW) {
      for (let MW = WW, wW = RW;;) {
        if (3 == MW.nodeType && wW < MW.nodeValue.length) return {
          node: MW,
          offset: wW
        };
        if (1 == MW.nodeType && wW < MW.childNodes.length) {
          if ("false" == MW.contentEditable) return null;
          MW = MW.childNodes[wW], wW = 0
        } else {
          if (!MW.parentNode || nW(MW)) return null;
          wW = OW(MW) + 1, MW = MW.parentNode
        }
      }
    }
    fW.safari && fW.safari_version >= 26 && (RR = !1);
    class yM {
      constructor(WW, RW) {
        let MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = WW, this.offset = RW, this.precise = MW
      }
      static before(WW, RW) {
        return new yM(WW.parentNode, OW(WW), RW)
      }
      static after(WW, RW) {
        return new yM(WW.parentNode, OW(WW) + 1, RW)
      }
    }
    var NR = function(WW) {
      return WW[WW.LTR = 0] = "LTR", WW[WW.RTL = 1] = "RTL", WW
    }(NR || (NR = {}));
    const eR = NR.LTR,
      BR = NR.RTL;

    function tM(WW) {
      let RW = [];
      for (let MW = 0; MW < WW.length; MW++) RW.push(1 << +WW[MW]);
      return RW
    }
    const TR = tM("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      gM = tM("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      iM = Object.create(null),
      YR = [];
    for (let ab of ["()", "[]", "{}"]) {
      let WW = ab.charCodeAt(0),
        RW = ab.charCodeAt(1);
      iM[WW] = RW, iM[RW] = -WW
    }

    function JR(WW) {
      return WW <= 247 ? TR[WW] : 1424 <= WW && WW <= 1524 ? 2 : 1536 <= WW && WW <= 1785 ? gM[WW - 1536] : 1774 <= WW && WW <= 2220 ? 4 : 8192 <= WW && WW <= 8204 ? 256 : 64336 <= WW && WW <= 65023 ? 4 : 1
    }
    const PR = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class IR {
      get dir() {
        return this.level % 2 ? BR : eR
      }
      constructor(WW, RW, MW) {
        this.from = WW, this.to = RW, this.level = MW
      }
      side(WW, RW) {
        return this.dir == RW == WW ? this.to : this.from
      }
      forward(WW, RW) {
        return WW == (this.dir == RW)
      }
      static find(WW, RW, MW, wW) {
        let CW = -1;
        for (let zR = 0; zR < WW.length; zR++) {
          let AW = WW[zR];
          if (AW.from <= RW && AW.to >= RW) {
            if (AW.level == MW) return zR;
            (CW < 0 || (0 != wW ? wW < 0 ? AW.from < RW : AW.to > RW : WW[CW].level > AW.level)) && (CW = zR)
          }
        }
        if (CW < 0) throw new RangeError("Index out of range");
        return CW
      }
    }

    function oR(WW, RW) {
      if (WW.length != RW.length) return !1;
      for (let MW = 0; MW < WW.length; MW++) {
        let wW = WW[MW],
          CW = RW[MW];
        if (wW.from != CW.from || wW.to != CW.to || wW.direction != CW.direction || !oR(wW.inner, CW.inner)) return !1
      }
      return !0
    }
    const lR = [];

    function FR(WW, RW, MW, wW, CW, zR, AW) {
      let bR = wW % 2 ? 2 : 1;
      if (wW % 2 == CW % 2)
        for (let yR = RW, NW = 0; yR < MW;) {
          let RW = !0,
            eW = !1;
          if (NW == zR.length || yR < zR[NW].from) {
            let WW = lR[yR];
            WW != bR && (RW = !1, eW = 16 == WW)
          }
          let BW = RW || 1 != bR ? null : [],
            tR = RW ? wW : wW + 1,
            TW = yR;
          WW: for (;;)
            if (NW < zR.length && TW == zR[NW].from) {
              if (eW) break WW;
              let gR = zR[NW];
              if (!RW)
                for (let WW = gR.to, RW = NW + 1;;) {
                  if (WW == MW) break WW;
                  if (!(RW < zR.length && zR[RW].from == WW)) {
                    if (lR[WW] == bR) break WW;
                    break
                  }
                  WW = zR[RW++].to
                }
              if (NW++, BW) BW.push(gR);
              else {
                gR.from > yR && AW.push(new IR(yR, gR.from, tR)), fR(WW, gR.direction == eR != !(tR % 2) ? wW + 1 : wW, CW, gR.inner, gR.from, gR.to, AW), yR = gR.to
              }
              TW = gR.to
            } else {
              if (TW == MW || (RW ? lR[TW] != bR : lR[TW] == bR)) break;
              TW++
            } BW ? FR(WW, yR, TW, wW + 1, CW, BW, AW) : yR < TW && AW.push(new IR(yR, TW, tR)), yR = TW
        } else
          for (let yR = MW, NW = zR.length; yR > RW;) {
            let MW = !0,
              eW = !1;
            if (!NW || yR > zR[NW - 1].to) {
              let WW = lR[yR - 1];
              WW != bR && (MW = !1, eW = 16 == WW)
            }
            let BW = MW || 1 != bR ? null : [],
              tR = MW ? wW : wW + 1,
              TW = yR;
            WW: for (;;)
              if (NW && TW == zR[NW - 1].to) {
                if (eW) break WW;
                let gR = zR[--NW];
                if (!MW)
                  for (let WW = gR.from, MW = NW;;) {
                    if (WW == RW) break WW;
                    if (!MW || zR[MW - 1].to != WW) {
                      if (lR[WW - 1] == bR) break WW;
                      break
                    }
                    WW = zR[--MW].from
                  }
                if (BW) BW.push(gR);
                else {
                  gR.to < yR && AW.push(new IR(gR.to, yR, tR)), fR(WW, gR.direction == eR != !(tR % 2) ? wW + 1 : wW, CW, gR.inner, gR.from, gR.to, AW), yR = gR.from
                }
                TW = gR.from
              } else {
                if (TW == RW || (MW ? lR[TW - 1] != bR : lR[TW - 1] == bR)) break;
                TW--
              } BW ? FR(WW, TW, yR, wW + 1, CW, BW, AW) : TW < yR && AW.push(new IR(TW, yR, tR)), yR = TW
          }
    }

    function fR(WW, RW, MW, wW, CW, zR, AW) {
      let bR = RW % 2 ? 2 : 1;
      ! function(WW, RW, MW, wW, CW) {
        for (let zR = 0; zR <= wW.length; zR++) {
          let AW = zR ? wW[zR - 1].to : RW,
            bR = zR < wW.length ? wW[zR].from : MW,
            yR = zR ? 256 : CW;
          for (let RW = AW, MW = yR, wW = yR; RW < bR; RW++) {
            let CW = JR(WW.charCodeAt(RW));
            512 == CW ? CW = MW : 8 == CW && 4 == wW && (CW = 16), lR[RW] = 4 == CW ? 2 : CW, 7 & CW && (wW = CW), MW = CW
          }
          for (let WW = AW, RW = yR, wW = yR; WW < bR; WW++) {
            let CW = lR[WW];
            if (128 == CW) WW < bR - 1 && RW == lR[WW + 1] && 24 & RW ? CW = lR[WW] = RW : lR[WW] = 256;
            else if (64 == CW) {
              let CW = WW + 1;
              for (; CW < bR && 64 == lR[CW];) CW++;
              let zR = WW && 8 == RW || CW < MW && 8 == lR[CW] ? 1 == wW ? 1 : 8 : 256;
              for (let RW = WW; RW < CW; RW++) lR[RW] = zR;
              WW = CW - 1
            } else 8 == CW && 1 == wW && (lR[WW] = 1);
            RW = CW, 7 & CW && (wW = CW)
          }
        }
      }(WW, CW, zR, wW, bR),
      function(WW, RW, MW, wW, CW) {
        let zR = 1 == CW ? 2 : 1;
        for (let AW = 0, bR = 0, yR = 0; AW <= wW.length; AW++) {
          let NW = AW ? wW[AW - 1].to : RW,
            eW = AW < wW.length ? wW[AW].from : MW;
          for (let RW, MW, wW, AW = NW; AW < eW; AW++)
            if (MW = iM[RW = WW.charCodeAt(AW)])
              if (MW < 0) {
                for (let WW = bR - 3; WW >= 0; WW -= 3)
                  if (YR[WW + 1] == -MW) {
                    let RW = YR[WW + 2],
                      MW = 2 & RW ? CW : 4 & RW ? 1 & RW ? zR : CW : 0;
                    MW && (lR[AW] = lR[YR[WW]] = MW), bR = WW;
                    break
                  }
              } else {
                if (189 == YR.length) break;
                YR[bR++] = AW, YR[bR++] = RW, YR[bR++] = yR
              }
          else if (2 == (wW = lR[AW]) || 1 == wW) {
            let WW = wW == CW;
            yR = WW ? 0 : 1;
            for (let RW = bR - 3; RW >= 0; RW -= 3) {
              let MW = YR[RW + 2];
              if (2 & MW) break;
              if (WW) YR[RW + 2] |= 2;
              else {
                if (4 & MW) break;
                YR[RW + 2] |= 4
              }
            }
          }
        }
      }(WW, CW, zR, wW, bR),
      function(WW, RW, MW, wW) {
        for (let CW = 0, zR = wW; CW <= MW.length; CW++) {
          let AW = CW ? MW[CW - 1].to : WW,
            bR = CW < MW.length ? MW[CW].from : RW;
          for (let yR = AW; yR < bR;) {
            let AW = lR[yR];
            if (256 == AW) {
              let AW = yR + 1;
              for (;;)
                if (AW == bR) {
                  if (CW == MW.length) break;
                  AW = MW[CW++].to, bR = CW < MW.length ? MW[CW].from : RW
                } else {
                  if (256 != lR[AW]) break;
                  AW++
                } let NW = 1 == zR,
                eW = NW == (1 == (AW < RW ? lR[AW] : wW)) ? NW ? 1 : 2 : wW;
              for (let RW = AW, wW = CW, zR = wW ? MW[wW - 1].to : WW; RW > yR;) RW == zR && (RW = MW[--wW].from, zR = wW ? MW[wW - 1].to : WW), lR[--RW] = eW;
              yR = AW
            } else zR = AW, yR++
          }
        }
      }(CW, zR, wW, bR), FR(WW, CW, zR, RW, MW, wW, AW)
    }

    function QR(WW, RW, MW) {
      if (!WW) return [new IR(0, 0, RW == BR ? 1 : 0)];
      if (RW == eR && !MW.length && !PR.test(WW)) return rM(WW.length);
      if (MW.length)
        for (; WW.length > lR.length;) lR[lR.length] = 256;
      let wW = [],
        CW = RW == eR ? 0 : 1;
      return fR(WW, CW, CW, MW, 0, WW.length, wW), wW
    }

    function rM(WW) {
      return [new IR(0, WW, 0)]
    }
    let cM = "";

    function XR(WW, RW, MW, CW, zR) {
      var AW;
      let bR = CW.head - WW.from,
        yR = IR.find(RW, bR, null !== (AW = CW.bidiLevel) && void 0 !== AW ? AW : -1, CW.assoc),
        NW = RW[yR],
        eW = NW.side(zR, MW);
      if (bR == eW) {
        let WW = yR += zR ? 1 : -1;
        if (WW < 0 || WW >= RW.length) return null;
        NW = RW[yR = WW], bR = NW.side(!zR, MW), eW = NW.side(zR, MW)
      }
      let BW = (0, wW.S)(WW.text, bR, NW.forward(zR, MW));
      (BW < NW.from || BW > NW.to) && (BW = eW), cM = WW.text.slice(Math.min(bR, BW), Math.max(bR, BW));
      let tR = yR == (zR ? RW.length - 1 : 0) ? null : RW[yR + (zR ? 1 : -1)];
      return tR && BW == eW && tR.level + (zR ? 0 : 1) < NW.level ? wW.j.cursor(tR.side(!zR, MW) + WW.from, tR.forward(zR, MW) ? 1 : -1, tR.level) : wW.j.cursor(BW + WW.from, NW.forward(zR, MW) ? -1 : 1, NW.level)
    }

    function jM(WW, RW, MW) {
      for (let wW = RW; wW < MW; wW++) {
        let RW = JR(WW.charCodeAt(wW));
        if (1 == RW) return eR;
        if (2 == RW || 4 == RW) return BR
      }
      return eR
    }
    const kM = wW.m.define(),
      aM = wW.m.define(),
      sR = wW.m.define(),
      dR = wW.m.define(),
      pR = wW.m.define(),
      hR = wW.m.define(),
      UR = wW.m.define(),
      ER = wW.m.define(),
      VR = wW.m.define(),
      mM = wW.m.define({
        combine: WW => WW.some((WW => WW))
      }),
      xM = wW.m.define({
        combine: WW => WW.some((WW => WW))
      }),
      vM = wW.m.define();
    class KR {
      constructor(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = WW, this.y = RW, this.x = MW, this.yMargin = wW, this.xMargin = CW, this.isSnapshot = zR
      }
      map(WW) {
        return WW.empty ? this : new KR(this.range.map(WW), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(WW) {
        return this.range.to <= WW.doc.length ? this : new KR(wW.j.cursor(WW.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const uR = wW.A.define({
        map: (WW, RW) => WW.map(RW)
      }),
      OR = wW.A.define();

    function nR(WW, RW, MW) {
      let wW = WW.facet(dR);
      wW.length ? wW[0](RW) : window.onerror && window.onerror(String(RW), MW, void 0, void 0, RW) || (MW ? console.error(MW + ":", RW) : console.error(RW))
    }
    const GR = wW.m.define({
      combine: WW => !WW.length || WW[0]
    });
    let LR = 0;
    const HR = wW.m.define({
      combine: WW => WW.filter(((RW, MW) => {
        for (let wW = 0; wW < MW; wW++)
          if (WW[wW].plugin == RW.plugin) return !1;
        return !0
      }))
    });
    class DR {
      constructor(WW, RW, MW, wW, CW) {
        this.id = WW, this.create = RW, this.domEventHandlers = MW, this.domEventObservers = wW, this.baseExtensions = CW(this), this.extension = this.baseExtensions.concat(HR.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(WW) {
        return this.baseExtensions.concat(HR.of({
          plugin: this,
          arg: WW
        }))
      }
      static define(WW, RW) {
        const {
          eventHandlers: MW,
          eventObservers: wW,
          provide: CW,
          vA: zR
        } = RW || {};
        return new DR(LR++, WW, MW, wW, (WW => {
          let RW = [];
          return zR && RW.push(WM.of((RW => {
            let MW = RW.plugin(WW);
            return MW ? zR(MW) : sW.none
          }))), CW && RW.push(CW(WW)), RW
        }))
      }
      static fromClass(WW, RW) {
        return DR.define(((RW, MW) => new WW(RW, MW)), RW)
      }
    }
    class qM {
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
            } catch (RW) {
              if (nR(WW.state, RW, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (MW) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(WW, this.spec.arg)
        } catch (RW) {
          nR(WW.state, RW, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(WW) {
        var RW;
        if (null === (RW = this.value) || void 0 === RW ? void 0 : RW.destroy) try {
          this.value.destroy()
        } catch (MW) {
          nR(WW.state, MW, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const ZR = wW.m.define(),
      SR = wW.m.define(),
      WM = wW.m.define(),
      RM = wW.m.define(),
      MM = wW.m.define(),
      wM = wW.m.define(),
      CM = wW.m.define();

    function zw(WW, RW) {
      let MW = WW.state.facet(CM);
      if (!MW.length) return MW;
      let CW = MW.map((RW => RW instanceof Function ? RW(WW) : RW)),
        zR = [];
      return wW.s.spans(CW, RW.from, RW.to, {
        point() {},
        span(WW, MW, wW, CW) {
          let AW = WW - RW.from,
            bR = MW - RW.from,
            yR = zR;
          for (let zR = wW.length - 1; zR >= 0; zR--, CW--) {
            let WW, MW = wW[zR].spec.bidiIsolate;
            if (null == MW && (MW = jM(RW.text, AW, bR)), CW > 0 && yR.length && (WW = yR[yR.length - 1]).to == AW && WW.direction == MW) WW.to = bR, yR = WW.inner;
            else {
              let WW = {
                from: AW,
                to: bR,
                direction: MW,
                inner: []
              };
              yR.push(WW), yR = WW.inner
            }
          }
        }
      }), zR
    }
    const AM = wW.m.define();

    function bw(WW) {
      let RW = 0,
        MW = 0,
        wW = 0,
        CW = 0;
      for (let zR of WW.state.facet(AM)) {
        let AW = zR(WW);
        AW && (null != AW.left && (RW = Math.max(RW, AW.left)), null != AW.right && (MW = Math.max(MW, AW.right)), null != AW.top && (wW = Math.max(wW, AW.top)), null != AW.bottom && (CW = Math.max(CW, AW.bottom)))
      }
      return {
        left: RW,
        right: MW,
        top: wW,
        bottom: CW
      }
    }
    const yw = wW.m.define();
    class NM {
      constructor(WW, RW, MW, wW) {
        this.fromA = WW, this.toA = RW, this.fromB = MW, this.toB = wW
      }
      join(WW) {
        return new NM(Math.min(this.fromA, WW.fromA), Math.max(this.toA, WW.toA), Math.min(this.fromB, WW.fromB), Math.max(this.toB, WW.toB))
      }
      addToSet(WW) {
        let RW = WW.length,
          MW = this;
        for (; RW > 0; RW--) {
          let wW = WW[RW - 1];
          if (!(wW.fromA > MW.toA)) {
            if (wW.toA < MW.fromA) break;
            MW = MW.join(wW), WW.splice(RW - 1, 1)
          }
        }
        return WW.splice(RW, 0, MW), WW
      }
      static extendWithRanges(WW, RW) {
        if (0 == RW.length) return WW;
        let MW = [];
        for (let wW = 0, CW = 0, zR = 0;;) {
          let AW = wW < WW.length ? WW[wW].fromB : 1e9,
            bR = CW < RW.length ? RW[CW] : 1e9,
            yR = Math.min(AW, bR);
          if (1e9 == yR) break;
          let NW = yR + zR,
            eW = yR,
            BW = NW;
          for (;;)
            if (CW < RW.length && RW[CW] <= eW) {
              let MW = RW[CW + 1];
              CW += 2, eW = Math.max(eW, MW);
              for (let RW = wW; RW < WW.length && WW[RW].fromB <= eW; RW++) zR = WW[RW].toA - WW[RW].toB;
              BW = Math.max(BW, MW + zR)
            } else {
              if (!(wW < WW.length && WW[wW].fromB <= eW)) break;
              {
                let RW = WW[wW++];
                eW = Math.max(eW, RW.toB), BW = Math.max(BW, RW.toA), zR = RW.toA - RW.toB
              }
            } MW.push(new NM(NW, BW, yR, eW))
        }
        return MW
      }
    }
    class eM {
      constructor(WW, RW, MW) {
        this.view = WW, this.state = RW, this.transactions = MW, this.flags = 0, this.startState = WW.state, this.changes = wW.ChangeSet.empty(this.startState.doc.length);
        for (let wW of MW) this.changes = this.changes.compose(wW.changes);
        let CW = [];
        this.changes.iterChangedRanges(((WW, RW, MW, wW) => CW.push(new NM(WW, RW, MW, wW)))), this.changedRanges = CW
      }
      static create(WW, RW, MW) {
        return new eM(WW, RW, MW)
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
    const BM = [];
    class tw {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = WW, this.length = RW, this.flags = MW, this.parent = null, WW.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return BM
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
          WW && function(WW, RW) {
            for (let MW = WW.attributes.length - 1; MW >= 0; MW--) {
              let wW = WW.attributes[MW].name;
              null == RW[wW] && WW.removeAttribute(wW)
            }
            for (let MW in RW) {
              let wW = RW[MW];
              "style" == MW ? WW.style.cssText = wW : WW.getAttribute(MW) != wW && WW.setAttribute(MW, wW)
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
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let MW of this.children) {
          if (MW == WW) return RW;
          RW += MW.length + MW.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(WW) {
        return this.posBefore(WW) + WW.length
      }
      covers(WW) {
        return !0
      }
      coordsIn(WW, RW) {
        return null
      }
      domPosFor(WW, RW) {
        let MW = OW(this.dom),
          wW = this.length ? WW > 0 : RW > 0;
        return new yM(this.parent.dom, MW + (wW ? 1 : 0), 0 == WW || WW == this.length)
      }
      markDirty(WW) {
        this.flags &= -3, WW && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let WW = this; WW; WW = WW.parent)
          if (WW instanceof iw) return WW;
        return null
      }
      static get(WW) {
        return WW.cmTile
      }
    }
    class TM extends tw {
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
        let RW, MW = this.dom,
          wW = null,
          CW = (null === WW || void 0 === WW ? void 0 : WW.node) == MW ? WW : null,
          zR = 0;
        for (let AW of this.children) {
          if (AW.sync(WW), zR += AW.length + AW.breakAfter, RW = wW ? wW.nextSibling : MW.firstChild, CW && RW != AW.dom && (CW.written = !0), AW.dom.parentNode == MW)
            for (; RW && RW != AW.dom;) RW = gw(RW);
          else MW.insertBefore(AW.dom, RW);
          wW = AW.dom
        }
        for (RW = wW ? wW.nextSibling : MW.firstChild, CW && RW && (CW.written = !0); RW;) RW = gw(RW);
        this.length = zR
      }
    }

    function gw(WW) {
      let RW = WW.nextSibling;
      return WW.parentNode.removeChild(WW), RW
    }
    class iw extends TM {
      constructor(WW, RW) {
        super(RW), this.view = WW
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
          let RW = tw.get(WW);
          if (RW && this.owns(RW)) return RW;
          WW = WW.parentNode
        }
      }
      blockTiles(WW) {
        for (let RW = [], MW = this, wW = 0, CW = 0;;)
          if (wW == MW.children.length) {
            if (!RW.length) return;
            MW = MW.parent, MW.breakAfter && CW++, wW = RW.pop()
          } else {
            let zR = MW.children[wW++];
            if (zR instanceof YM) RW.push(wW), MW = zR, wW = 0;
            else {
              let RW = CW + zR.length,
                MW = WW(zR, CW);
              if (void 0 !== MW) return MW;
              CW = RW + zR.breakAfter
            }
          }
      }
      resolveBlock(WW, RW) {
        let MW, wW, CW = -1,
          zR = -1;
        if (this.blockTiles(((AW, bR) => {
            let yR = bR + AW.length;
            if (WW >= bR && WW <= yR) {
              if (AW.isWidget() && RW >= -1 && RW <= 1) {
                if (32 & AW.flags) return !0;
                16 & AW.flags && (MW = void 0)
              }(bR < WW || WW == yR && (RW < -1 ? AW.length : AW.covers(1))) && (!MW || !AW.isWidget() && MW.isWidget()) && (MW = AW, CW = WW - bR), (yR > WW || WW == bR && (RW > 1 ? AW.length : AW.covers(-1))) && (!wW || !AW.isWidget() && wW.isWidget()) && (wW = AW, zR = WW - bR)
            }
          })), !MW && !wW) throw new Error("No tile at position " + WW);
        return MW && RW < 0 || !wW ? {
          tile: MW,
          offset: CW
        } : {
          tile: wW,
          offset: zR
        }
      }
    }
    class YM extends TM {
      constructor(WW, RW) {
        super(WW), this.wrapper = RW
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
      static of (WW, RW) {
        let MW = new YM(RW || document.createElement(WW.tagName), WW);
        return RW || (MW.flags |= 4), MW
      }
    }
    class JM extends TM {
      constructor(WW, RW) {
        super(WW), this.attrs = RW
      }
      isLine() {
        return !0
      }
      static start(WW, RW, MW) {
        let wW = new JM(RW || document.createElement("div"), WW);
        return RW && MW || (wW.flags |= 4), wW
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(WW, RW, MW) {
        let wW = null,
          CW = -1,
          zR = null,
          AW = -1;
        ! function WW(bR, yR) {
          for (let NW = 0, eW = 0; NW < bR.children.length && eW <= yR; NW++) {
            let BW = bR.children[NW],
              tR = eW + BW.length;
            tR >= yR && (BW.isComposite() ? WW(BW, yR - eW) : (!zR || zR.isHidden && (RW > 0 || MW && PM(zR, BW))) && (tR > yR || 32 & BW.flags) ? (zR = BW, AW = yR - eW) : (eW < yR || 16 & BW.flags && !BW.isHidden) && (wW = BW, CW = yR - eW)), eW = tR
          }
        }(this, WW);
        let bR = (RW < 0 ? wW : zR) || wW || zR;
        return bR ? {
          tile: bR,
          offset: bR == wW ? CW : AW
        } : null
      }
      coordsIn(WW, RW) {
        let MW = this.resolveInline(WW, RW, !0);
        return MW ? MW.tile.coordsIn(Math.max(0, MW.offset), RW) : function(WW) {
          let RW = WW.dom.lastChild;
          if (!RW) return WW.dom.getBoundingClientRect();
          let MW = KW(RW);
          return MW[MW.length - 1] || null
        }(this)
      }
      domIn(WW, RW) {
        let MW = this.resolveInline(WW, RW);
        if (MW) {
          let {
            tile: WW,
            offset: wW
          } = MW;
          if (this.dom.contains(WW.dom)) return WW.isText() ? new yM(WW.dom, Math.min(WW.dom.nodeValue.length, wW)) : WW.domPosFor(wW, 16 & WW.flags ? 1 : 32 & WW.flags ? -1 : RW);
          let CW = MW.tile.parent,
            zR = !1;
          for (let RW of CW.children) {
            if (zR) return new yM(RW.dom, 0);
            RW == MW.tile && (zR = !0)
          }
        }
        return new yM(this.dom, 0)
      }
    }

    function PM(WW, RW) {
      let MW = WW.coordsIn(0, 1),
        wW = RW.coordsIn(0, 1);
      return MW && wW && wW.top < MW.bottom
    }
    class IM extends TM {
      constructor(WW, RW) {
        super(WW), this.mark = RW
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (WW, RW) {
        let MW = new IM(RW || document.createElement(WW.tagName), WW);
        return RW || (MW.flags |= 4), MW
      }
    }
    class oM extends tw {
      constructor(WW, RW) {
        super(WW, RW.length), this.text = RW
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
      coordsIn(WW, RW) {
        let MW = this.dom.nodeValue.length;
        WW > MW && (WW = MW);
        let wW = WW,
          CW = WW,
          zR = 0;
        0 == WW && RW < 0 || WW == MW && RW >= 0 ? fW.chrome || fW.gecko || (WW ? (wW--, zR = 1) : CW < MW && (CW++, zR = -1)) : RW < 0 ? wW-- : CW < MW && CW++;
        let AW = wR(this.dom, wW, CW).getClientRects();
        if (!AW.length) return null;
        let bR = AW[(zR ? zR < 0 : RW >= 0) ? 0 : AW.length - 1];
        return fW.safari && !zR && 0 == bR.width && (bR = Array.prototype.find.call(AW, (WW => WW.width)) || bR), zR ? HW(bR, zR < 0) : bR || null
      }
      static of (WW, RW) {
        let MW = new oM(RW || document.createTextNode(WW), WW);
        return RW || (MW.flags |= 2), MW
      }
    }
    class lM extends tw {
      constructor(WW, RW, MW, wW) {
        super(WW, RW, wW), this.widget = MW
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
      coordsIn(WW, RW) {
        return this.coordsInWidget(WW, RW, !1)
      }
      coordsInWidget(WW, RW, MW) {
        let wW = this.widget.coordsAt(this.dom, WW, RW);
        if (wW) return wW;
        if (MW) return HW(this.dom.getBoundingClientRect(), this.length ? 0 == WW : RW <= 0);
        {
          let RW = this.dom.getClientRects(),
            MW = null;
          if (!RW.length) return null;
          let wW = !!(16 & this.flags) || !(32 & this.flags) && WW > 0;
          for (let CW = wW ? RW.length - 1 : 0; MW = RW[CW], !(WW > 0 ? 0 == CW : CW == RW.length - 1 || MW.top < MW.bottom); CW += wW ? -1 : 1);
          return HW(MW, !wW)
        }
      }
      get overrideDOMText() {
        if (!this.length) return wW.D.empty;
        let {
          root: WW
        } = this;
        if (!WW) return wW.D.empty;
        let RW = this.posAtStart;
        return WW.view.state.doc.slice(RW, RW + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (WW, RW, MW, wW, CW) {
        return CW || (CW = WW.toDOM(RW), WW.editable || (CW.contentEditable = "false")), new lM(CW, MW, WW, wW)
      }
    }
    class FM extends tw {
      constructor(WW) {
        let RW = document.createElement("img");
        RW.className = "cm-widgetBuffer", RW.setAttribute("aria-hidden", "true"), super(RW, 0, WW)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return wW.D.empty
      }
      coordsIn(WW) {
        return this.dom.getBoundingClientRect()
      }
    }
    class fM {
      constructor(WW) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = WW
      }
      advance(WW, RW, MW) {
        let {
          tile: wW,
          index: CW,
          beforeBreak: zR,
          parents: AW
        } = this;
        for (; WW || RW > 0;)
          if (wW.isComposite())
            if (zR) {
              if (!WW) break;
              MW && MW.break(), WW--, zR = !1
            } else if (CW == wW.children.length) {
          if (!WW && !AW.length) break;
          MW && MW.Cw(wW), zR = !!wW.breakAfter, ({
            tile: wW,
            index: CW
          } = AW.pop()), CW++
        } else {
          let bR = wW.children[CW],
            yR = bR.breakAfter;
          !(RW > 0 ? bR.length <= WW : bR.length < WW) || MW && !1 === MW.skip(bR, 0, bR.length) && bR.isComposite ? (AW.push({
            tile: wW,
            index: CW
          }), wW = bR, CW = 0, MW && bR.isComposite() && MW.enter(bR)) : (zR = !!yR, CW++, WW -= bR.length)
        } else if (CW == wW.length) zR = !!wW.breakAfter, ({
          tile: wW,
          index: CW
        } = AW.pop()), CW++;
        else {
          if (!WW) break;
          {
            let RW = Math.min(WW, wW.length - CW);
            MW && MW.skip(wW, CW, CW + RW), WW -= RW, CW += RW
          }
        }
        return this.tile = wW, this.index = CW, this.beforeBreak = zR, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class QM {
      constructor(WW, RW, MW, wW) {
        this.from = WW, this.to = RW, this.wrapper = MW, this.rank = wW
      }
    }
    class rw {
      constructor(WW, RW, MW) {
        this.cache = WW, this.root = RW, this.blockWrappers = MW, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(WW, RW, MW, wW) {
        var CW;
        this.flushBuffer();
        let zR = this.ensureMarks(RW, MW),
          AW = zR.lastChild;
        if (AW && AW.isText() && !(8 & AW.flags) && AW.length + WW.length < 512) {
          this.cache.reused.set(AW, 2), (zR.children[zR.children.length - 1] = new oM(AW.dom, AW.text + WW)).parent = zR
        } else zR.append(wW || oM.of(WW, null === (CW = this.cache.find(oM)) || void 0 === CW ? void 0 : CW.dom));
        this.pos += WW.length, this.afterWidget = null
      }
      addComposition(WW, RW) {
        let MW = this.curLine;
        MW.dom != RW.line.dom && (MW.setDOM(this.cache.reused.has(RW.line) ? dM(RW.line.dom) : RW.line.dom), this.cache.reused.set(RW.line, 2));
        let wW = MW;
        for (let AW = RW.marks.length - 1; AW >= 0; AW--) {
          let WW = RW.marks[AW],
            MW = wW.lastChild;
          if (MW instanceof IM && MW.mark.eq(WW.mark)) MW.dom != WW.dom && MW.setDOM(dM(WW.dom)), wW = MW;
          else {
            if (this.cache.reused.get(WW)) {
              let RW = tw.get(WW.dom);
              RW && RW.setDOM(dM(WW.dom))
            }
            let RW = IM.of(WW.mark, WW.dom);
            wW.append(RW), wW = RW
          }
          this.cache.reused.set(WW, 2)
        }
        let CW = tw.get(WW.text);
        CW && this.cache.reused.set(CW, 2);
        let zR = new oM(WW.text, WW.text.nodeValue);
        zR.flags |= 8, wW.append(zR)
      }
      addInlineWidget(WW, RW, MW) {
        let wW = this.afterWidget && 48 & WW.flags && (48 & this.afterWidget.flags) == (48 & WW.flags);
        wW || this.flushBuffer();
        let CW = this.ensureMarks(RW, MW);
        wW || 16 & WW.flags || CW.append(this.getBuffer(1)), CW.append(WW), this.pos += WW.length, this.afterWidget = WW
      }
      addMark(WW, RW, MW) {
        this.flushBuffer(), this.ensureMarks(RW, MW).append(WW), this.pos += WW.length, this.afterWidget = null
      }
      addBlockWidget(WW) {
        this.getBlockPos().append(WW), this.pos += WW.length, this.lastBlock = WW, this.endLine()
      }
      continueWidget(WW) {
        (this.afterWidget || this.lastBlock).length += WW, this.pos += WW
      }
      addLineStart(WW, RW) {
        var MW;
        WW || (WW = sM);
        let wW = JM.start(WW, RW || (null === (MW = this.cache.find(JM)) || void 0 === MW ? void 0 : MW.dom), !!RW);
        this.getBlockPos().append(this.lastBlock = this.curLine = wW)
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
      ensureMarks(WW, RW) {
        var MW;
        let wW = this.curLine;
        for (let CW = WW.length - 1; CW >= 0; CW--) {
          let zR, AW = WW[CW];
          if (RW > 0 && (zR = wW.lastChild) && zR instanceof IM && zR.mark.eq(AW)) wW = zR, RW--;
          else {
            let WW = IM.of(AW, null === (MW = this.cache.find(IM, (WW => WW.mark.eq(AW)))) || void 0 === MW ? void 0 : MW.dom);
            wW.append(WW), wW = WW, RW = 0
          }
        }
        return wW
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let WW = this.curLine.lastChild;
          WW && aw(this.curLine, !1) && ("BR" == WW.dom.nodeName || !WW.isWidget() || fW.ios && aw(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(hM, 0, 32) || new lM(hM.toDOM(), 0, hM, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let WW = this.wrappers.length - 1; WW >= 0; WW--) this.wrappers[WW].to < this.pos && this.wrappers.splice(WW, 1);
        for (let WW = this.blockWrappers; WW.value && WW.from <= this.pos; WW.next())
          if (WW.to >= this.pos) {
            let RW = new QM(WW.from, WW.to, WW.value, WW.rank),
              MW = this.wrappers.length;
            for (; MW > 0 && (this.wrappers[MW - 1].rank - RW.rank || this.wrappers[MW - 1].to - RW.to) < 0;) MW--;
            this.wrappers.splice(MW, 0, RW)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var WW;
        this.updateBlockWrappers();
        let RW = this.root;
        for (let MW of this.wrappers) {
          let wW = RW.lastChild;
          if (MW.from < this.pos && wW instanceof YM && wW.wrapper.eq(MW.wrapper)) RW = wW;
          else {
            let wW = YM.of(MW.wrapper, null === (WW = this.cache.find(YM, (WW => WW.wrapper.eq(MW.wrapper)))) || void 0 === WW ? void 0 : WW.dom);
            RW.append(wW), RW = wW
          }
        }
        return RW
      }
      blockPosCovered() {
        let WW = this.lastBlock;
        return null != WW && !WW.breakAfter && (!WW.isWidget() || (160 & WW.flags) > 0)
      }
      getBuffer(WW) {
        let RW = 2 | (WW < 0 ? 16 : 32),
          MW = this.cache.find(FM, void 0, 1);
        return MW && (MW.flags = RW), MW || new FM(RW)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class cwW {
      constructor(WW) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = WW.iter()
      }
      skip(WW) {
        this.textOff + WW <= this.text.length ? this.textOff += WW : (this.skipCount += WW - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(WW) {
        if (this.textOff == this.text.length) {
          let {
            value: RW,
            lineBreak: MW,
            done: wW
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, wW) throw new Error("Ran out of text content when drawing inline views");
          this.text = RW;
          let CW = this.textOff = Math.min(WW, RW.length);
          return MW ? null : RW.slice(0, CW)
        }
        let RW = Math.min(this.text.length, this.textOff + WW),
          MW = this.text.slice(this.textOff, RW);
        return this.textOff = RW, MW
      }
    }
    const XM = [lM, JM, oM, IM, FM, YM, iw];
    for (let ab = 0; ab < XM.length; ab++) XM[ab].bucket = ab;
    class jw {
      constructor(WW) {
        this.view = WW, this.buckets = XM.map((() => [])), this.index = XM.map((() => 0)), this.reused = new Map
      }
      add(WW) {
        let RW = WW.constructor.bucket,
          MW = this.buckets[RW];
        MW.length < 6 ? MW.push(WW) : MW[this.index[RW] = (this.index[RW] + 1) % 6] = WW
      }
      find(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          wW = WW.bucket,
          CW = this.buckets[wW],
          zR = this.index[wW];
        for (let AW = CW.length - 1; AW >= 0; AW--) {
          let WW = (AW + zR) % CW.length,
            bR = CW[WW];
          if ((!RW || RW(bR)) && !this.reused.has(bR)) return CW.splice(WW, 1), WW < zR && this.index[wW]--, this.reused.set(bR, MW), bR
        }
        return null
      }
      findWidget(WW, RW, MW) {
        let wW = this.buckets[0];
        if (wW.length)
          for (let CW = 0, zR = 0;; CW++) {
            if (CW == wW.length) {
              if (zR) return null;
              zR = 1, CW = 0
            }
            let AW = wW[CW];
            if (!this.reused.has(AW) && (0 == zR ? AW.widget.compare(WW) : AW.widget.constructor == WW.constructor && WW.updateDOM(AW.dom, this.view, AW.widget))) return wW.splice(CW, 1), CW < this.index[0] && this.index[0]--, AW.widget == WW && AW.length == RW && (497 & AW.flags) == MW ? (this.reused.set(AW, 1), AW) : (this.reused.set(AW, 2), new lM(AW.dom, RW, WW, -498 & AW.flags | MW))
          }
      }
      reuse(WW) {
        return this.reused.set(WW, 1), WW
      }
      maybeReuse(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(WW)) return this.reused.set(WW, RW), WW.dom
      }
      clear() {
        for (let WW = 0; WW < this.buckets.length; WW++) this.buckets[WW].length = this.index[WW] = 0
      }
    }
    class kw {
      constructor(WW, RW, MW, CW, zR) {
        this.view = WW, this.vA = CW, this.disallowBlockEffectsFor = zR, this.openWidget = !1, this.openMarks = 0, this.cache = new jw(WW), this.text = new cwW(WW.state.doc), this.builder = new rw(this.cache, new iw(WW, WW.contentDOM), wW.s.iter(MW)), this.cache.reused.set(RW, 2), this.old = new fM(RW), this.reuseWalker = {
          skip: (WW, RW, MW) => {
            if (this.cache.add(WW), WW.isComposite()) return !1
          },
          enter: WW => this.cache.add(WW),
          Cw: () => {},
          break: () => {}
        }
      }
      run(WW, RW) {
        let MW = RW && this.getCompositionContext(RW.text);
        for (let wW = 0, CW = 0, zR = 0;;) {
          let AW = zR < WW.length ? WW[zR++] : null,
            bR = AW ? AW.fromA : this.old.root.length;
          if (bR > wW) {
            let WW = bR - wW;
            this.preserve(WW, !zR, !AW), wW = bR, CW += WW
          }
          if (!AW) break;
          RW && AW.fromA <= RW.range.fromA && AW.toA >= RW.range.toA ? (this.forward(AW.fromA, RW.range.fromA, RW.range.fromA < RW.range.toA ? 1 : -1), this.emit(CW, RW.range.fromB), this.cache.clear(), this.builder.addComposition(RW, MW), this.text.skip(RW.range.toB - RW.range.fromB), this.forward(RW.range.fromA, AW.toA), this.emit(RW.range.toB, AW.toB)) : (this.forward(AW.fromA, AW.toA), this.emit(CW, AW.toB)), CW = AW.toB, wW = AW.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(WW, RW, MW) {
        let wW = function(WW) {
            let RW = [];
            for (let MW = WW.parents.length; MW > 1; MW--) {
              let wW = MW == WW.parents.length ? WW.tile : WW.parents[MW].tile;
              wW instanceof IM && RW.push(wW.mark)
            }
            return RW
          }(this.old),
          CW = this.openMarks;
        this.old.advance(WW, MW ? 1 : -1, {
          skip: (WW, RW, MW) => {
            if (WW.isWidget())
              if (this.openWidget) this.builder.continueWidget(MW - RW);
              else {
                let zR = MW > 0 || RW < WW.length ? lM.of(WW.widget, this.view, MW - RW, 496 & WW.flags, this.cache.maybeReuse(WW)) : this.cache.reuse(WW);
                256 & zR.flags ? (zR.flags &= -2, this.builder.addBlockWidget(zR)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(zR, wW, CW), CW = wW.length)
              }
            else if (WW.isText()) this.builder.ensureLine(null), RW || MW != WW.length || this.cache.reused.has(WW) ? (this.cache.add(WW), this.builder.addText(WW.text.slice(RW, MW), wW, CW)) : this.builder.addText(WW.text, wW, CW, this.cache.reuse(WW)), CW = wW.length;
            else if (WW.isLine()) WW.flags &= -2, this.cache.reused.set(WW, 1), this.builder.addLine(WW);
            else if (WW instanceof FM) this.cache.add(WW);
            else {
              if (!(WW instanceof IM)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(WW, wW, CW), this.cache.reused.set(WW, 1), CW = wW.length
            }
            this.openWidget = !1
          },
          enter: WW => {
            WW.isLine() ? this.builder.addLineStart(WW.attrs, this.cache.maybeReuse(WW)) : (this.cache.add(WW), WW instanceof IM && wW.unshift(WW.mark)), this.openWidget = !1
          },
          Cw: WW => {
            WW.isLine() ? wW.length && (wW.length = CW = 0) : WW instanceof IM && (wW.shift(), CW = Math.min(CW, wW.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(WW)
      }
      emit(WW, RW) {
        let MW = null,
          CW = this.builder,
          zR = 0,
          AW = wW.s.spans(this.vA, WW, RW, {
            point: (WW, RW, wW, AW, bR, yR) => {
              if (wW instanceof hW) {
                if (this.disallowBlockEffectsFor[yR]) {
                  if (wW.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (RW > this.view.state.doc.lineAt(WW).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (zR = AW.length, bR > AW.length) CW.continueWidget(RW - WW);
                else {
                  let zR = wW.widget || (wW.block ? pM.block : pM.inline),
                    yR = function(WW) {
                      let RW = WW.isReplace ? (WW.startSide < 0 ? 64 : 0) | (WW.endSide > 0 ? 128 : 0) : WW.startSide > 0 ? 32 : 16;
                      WW.block && (RW |= 256);
                      return RW
                    }(wW),
                    NW = this.cache.findWidget(zR, RW - WW, yR) || lM.of(zR, this.view, RW - WW, yR);
                  wW.block ? (wW.startSide > 0 && CW.addLineStartIfNotCovered(MW), CW.addBlockWidget(NW)) : (CW.ensureLine(MW), CW.addInlineWidget(NW, AW, bR))
                }
                MW = null
              } else MW = function(WW, RW) {
                let MW = RW.spec.attributes,
                  wW = RW.spec.class;
                if (!MW && !wW) return WW;
                WW || (WW = {
                  class: "cm-line"
                });
                MW && QW(MW, WW);
                wW && (WW.class += " " + wW);
                return WW
              }(MW, wW);
              RW > WW && this.text.skip(RW - WW)
            },
            span: (WW, RW, wW, zR) => {
              for (let AW = WW; AW < RW;) {
                let bR = this.text.next(Math.min(512, RW - AW));
                null == bR ? (CW.addLineStartIfNotCovered(MW), CW.addBreak(), AW++) : (CW.ensureLine(MW), CW.addText(bR, wW, AW == WW ? zR : wW.length), AW += bR.length), MW = null
              }
            }
          });
        CW.addLineStartIfNotCovered(MW), this.openWidget = AW > zR, this.openMarks = AW
      }
      forward(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        RW - WW <= 10 ? this.old.advance(RW - WW, MW, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(RW - WW - 10, -1), this.old.advance(5, MW, this.reuseWalker))
      }
      getCompositionContext(WW) {
        let RW = [],
          MW = null;
        for (let wW = WW.parentNode;; wW = wW.parentNode) {
          let WW = tw.get(wW);
          if (wW == this.view.contentDOM) break;
          WW instanceof IM ? RW.push(WW) : (null === WW || void 0 === WW ? void 0 : WW.isLine()) ? MW = WW : WW instanceof YM || ("DIV" != wW.nodeName || MW || wW == this.view.contentDOM ? MW || RW.push(IM.of(new dW({
            tagName: wW.nodeName.toLowerCase(),
            attributes: jR(wW)
          }), wW)) : MW = new JM(wW, sM))
        }
        return {
          line: MW,
          marks: RW
        }
      }
    }

    function aw(WW, RW) {
      let MW = WW => {
        for (let wW of WW.children)
          if ((RW ? wW.isText() : wW.length) || MW(wW)) return !0;
        return !1
      };
      return MW(WW)
    }
    const sM = {
      class: "cm-line"
    };

    function dM(WW) {
      let RW = tw.get(WW);
      return RW && RW.setDOM(WW.cloneNode()), WW
    }
    class pM extends kR {
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
    pM.inline = new pM("span"), pM.block = new pM("div");
    const hM = new class extends kR {
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
    class UM {
      constructor(WW) {
        this.view = WW, this.vA = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = sW.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new iw(WW, WW.contentDOM), this.updateInner([new NM(0, 0, 0, WW.state.doc.length)], null)
      }
      update(WW) {
        var RW;
        let MW = WW.changedRanges;
        this.minWidth > 0 && MW.length && (MW.every((WW => {
          let {
            fromA: RW,
            toA: MW
          } = WW;
          return MW < this.minWidthFrom || RW > this.minWidthTo
        })) ? (this.minWidthFrom = WW.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = WW.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(WW);
        let CW = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (RW = this.domChanged) || void 0 === RW ? void 0 : RW.newSel) ? CW = this.domChanged.newSel.head : function(WW, RW) {
          let MW = !1;
          RW && WW.iterChangedRanges(((WW, wW) => {
            WW < RW.to && wW > RW.from && (MW = !0)
          }));
          return MW
        }(WW.changes, this.hasComposition) || WW.selectionSet || (CW = WW.state.selection.main.head));
        let zR = CW > -1 ? function(WW, RW, MW) {
          let wW = VM(WW, MW);
          if (!wW) return null;
          let {
            node: CW,
            from: zR,
            to: AW
          } = wW, bR = CW.nodeValue;
          if (/[\n\r]/.test(bR)) return null;
          if (WW.state.doc.sliceString(wW.from, wW.to) != bR) return null;
          let yR = RW.invertedDesc;
          return {
            range: new NM(yR.mapPos(zR), yR.mapPos(AW), zR, AW),
            text: CW
          }
        }(this.view, WW.changes, CW) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: RW,
            to: wW
          } = this.hasComposition;
          MW = new NM(RW, wW, WW.changes.mapPos(RW, -1), WW.changes.mapPos(wW, 1)).addToSet(MW.slice())
        }
        this.hasComposition = zR ? {
          from: zR.range.fromB,
          to: zR.range.toB
        } : null, (fW.ie || fW.chrome) && !zR && WW && WW.state.doc.lines != WW.startState.doc.lines && (this.forceSelection = !0);
        let AW = this.vA,
          bR = this.blockWrappers;
        this.updateDeco();
        let yR = function(WW, RW, MW) {
          let CW = new mw;
          return wW.s.compare(WW, RW, MW, CW), CW.changes
        }(AW, this.vA, WW.changes);
        yR.length && (MW = NM.extendWithRanges(MW, yR));
        let NW = function(WW, RW, MW) {
          let CW = new xw;
          return wW.s.compare(WW, RW, MW, CW), CW.changes
        }(bR, this.blockWrappers, WW.changes);
        return NW.length && (MW = NM.extendWithRanges(MW, NW)), zR && !MW.some((WW => WW.fromA <= zR.range.fromA && WW.toA >= zR.range.toA)) && (MW = zR.range.addToSet(MW.slice())), !(2 & this.tile.flags && 0 == MW.length) && (this.updateInner(MW, zR), WW.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(WW, RW) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: MW
        } = this.view;
        MW.ignore((() => {
          if (RW || WW.length) {
            let MW = this.tile,
              wW = new kw(this.view, MW, this.blockWrappers, this.vA, this.dynamicDecorationMap);
            RW && tw.get(RW.text) && wW.cache.reused.set(tw.get(RW.text), 2), this.tile = wW.run(WW, RW), EM(MW, wW.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let wW = fW.chrome || fW.ios ? {
            node: MW.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(wW), !wW || !wW.written && MW.selectionRange.focusNode == wW.node && this.tile.dom.contains(wW.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let wW = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let CW of this.tile.children) CW.isWidget() && CW.widget instanceof vw && wW.push(CW.dom);
        MW.updateGaps(wW)
      }
      updateEditContextFormatting(WW) {
        this.editContextFormatting = this.editContextFormatting.map(WW.changes);
        for (let RW of WW.transactions)
          for (let WW of RW.effects) WW.is(OR) && (this.editContextFormatting = WW.value)
      }
      updateSelection() {
        let WW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: RW
        } = this.tile, MW = this.view.root.activeElement, wW = MW == RW, CW = !wW && !(this.view.state.facet(GR) || RW.tabIndex > -1) && vR(RW, this.view.observer.selectionRange) && !(MW && RW.contains(MW));
        if (!(wW || WW || CW)) return;
        let zR = this.forceSelection;
        this.forceSelection = !1;
        let AW, bR, yR = this.view.state.selection.main;
        if (yR.empty ? bR = AW = this.inlineDOMNearPos(yR.anchor, yR.assoc || 1) : (bR = this.inlineDOMNearPos(yR.head, yR.head == yR.from ? 1 : -1), AW = this.inlineDOMNearPos(yR.anchor, yR.anchor == yR.from ? 1 : -1)), fW.gecko && yR.empty && !this.hasComposition && (1 == (NW = AW).node.nodeType && NW.node.firstChild && (0 == NW.offset || "false" == NW.node.childNodes[NW.offset - 1].contentEditable) && (NW.offset == NW.node.childNodes.length || "false" == NW.node.childNodes[NW.offset].contentEditable))) {
          let WW = document.createTextNode("");
          this.view.observer.ignore((() => AW.node.insertBefore(WW, AW.node.childNodes[AW.offset] || null))), AW = bR = new yM(WW, 0), zR = !0
        }
        var NW;
        let eW = this.view.observer.selectionRange;
        !zR && eW.focusNode && (uW(AW.node, AW.offset, eW.anchorNode, eW.anchorOffset) && uW(bR.node, bR.offset, eW.focusNode, eW.focusOffset) || this.suppressWidgetCursorChange(eW, yR)) || (this.view.observer.ignore((() => {
          fW.android && fW.chrome && RW.contains(eW.focusNode) && function(WW, RW) {
            for (let MW = WW; MW && MW != RW; MW = MW.assignedSlot || MW.parentNode)
              if (1 == MW.nodeType && "false" == MW.contentEditable) return !0;
            return !1
          }(eW.focusNode, RW) && (RW.blur(), RW.focus({
            preventScroll: !0
          }));
          let WW = mR(this.view.root);
          if (WW)
            if (yR.empty) {
              if (fW.gecko) {
                let WW = (wW = AW.node, zR = AW.offset, 1 != wW.nodeType ? 0 : (zR && "false" == wW.childNodes[zR - 1].contentEditable ? 1 : 0) | (zR < wW.childNodes.length && "false" == wW.childNodes[zR].contentEditable ? 2 : 0));
                if (WW && 3 != WW) {
                  let RW = (1 == WW ? AR : bM)(AW.node, AW.offset);
                  RW && (AW = new yM(RW.node, RW.offset))
                }
              }
              WW.collapse(AW.node, AW.offset), null != yR.bidiLevel && void 0 !== WW.caretBidiLevel && (WW.caretBidiLevel = yR.bidiLevel)
            } else if (WW.extend) {
            WW.collapse(AW.node, AW.offset);
            try {
              WW.extend(bR.node, bR.offset)
            } catch (NW) {}
          } else {
            let RW = document.createRange();
            yR.anchor > yR.head && ([AW, bR] = [bR, AW]), RW.setEnd(bR.node, bR.offset), RW.setStart(AW.node, AW.offset), WW.removeAllRanges(), WW.addRange(RW)
          } else;
          var wW, zR;
          CW && this.view.root.activeElement == RW && (RW.blur(), MW && MW.focus())
        })), this.view.observer.setSelectionRange(AW, bR)), this.impreciseAnchor = AW.precise ? null : new yM(eW.anchorNode, eW.anchorOffset), this.impreciseHead = bR.precise ? null : new yM(eW.focusNode, eW.focusOffset)
      }
      suppressWidgetCursorChange(WW, RW) {
        return this.hasComposition && RW.empty && uW(WW.focusNode, WW.focusOffset, WW.anchorNode, WW.anchorOffset) && this.posFromDOM(WW.focusNode, WW.focusOffset) == RW.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: WW
        } = this, RW = WW.state.selection.main, MW = mR(WW.root), {
          anchorNode: wW,
          anchorOffset: CW
        } = WW.observer.selectionRange;
        if (!MW || !RW.empty || !RW.assoc || !MW.modify) return;
        let zR = this.lineAt(RW.head, RW.assoc);
        if (!zR) return;
        let AW = zR.posAtStart;
        if (RW.head == AW || RW.head == AW + zR.length) return;
        let bR = this.coordsAt(RW.head, -1),
          yR = this.coordsAt(RW.head, 1);
        if (!bR || !yR || bR.bottom > yR.top) return;
        let NW = this.domAtPos(RW.head + RW.assoc, RW.assoc);
        MW.collapse(NW.node, NW.offset), MW.modify("move", RW.assoc < 0 ? "forward" : "backward", "lineboundary"), WW.observer.readSelectionRange();
        let eW = WW.observer.selectionRange;
        WW.docView.posFromDOM(eW.anchorNode, eW.anchorOffset) != RW.from && MW.collapse(wW, CW)
      }
      posFromDOM(WW, RW) {
        let MW = this.tile.nearest(WW);
        if (!MW) return 2 & this.tile.dom.compareDocumentPosition(WW) ? 0 : this.view.state.doc.length;
        let wW = MW.posAtStart;
        if (!MW.isComposite()) return MW.isText() ? WW == MW.dom ? wW + RW : wW + (RW ? MW.length : 0) : wW;
        {
          let CW;
          if (WW == MW.dom) CW = MW.dom.childNodes[RW];
          else {
            let wW = 0 == LW(WW) ? 0 : 0 == RW ? -1 : 1;
            for (;;) {
              let RW = WW.parentNode;
              if (RW == MW.dom) break;
              0 == wW && RW.firstChild != RW.lastChild && (wW = WW == RW.firstChild ? -1 : 1), WW = RW
            }
            CW = wW < 0 ? WW : WW.nextSibling
          }
          if (CW == MW.dom.firstChild) return wW;
          for (; CW && !tw.get(CW);) CW = CW.nextSibling;
          if (!CW) return wW + MW.length;
          for (let WW = 0, RW = wW;; WW++) {
            let wW = MW.children[WW];
            if (wW.dom == CW) return RW;
            RW += wW.length + wW.breakAfter
          }
        }
      }
      domAtPos(WW, RW) {
        let {
          tile: MW,
          offset: wW
        } = this.tile.resolveBlock(WW, RW);
        return MW.isWidget() ? MW.domPosFor(WW, RW) : MW.domIn(wW, RW)
      }
      inlineDOMNearPos(WW, RW) {
        let MW, wW, CW = -1,
          zR = !1,
          AW = -1,
          bR = !1;
        return this.tile.blockTiles(((RW, yR) => {
          if (RW.isWidget()) {
            if (32 & RW.flags && yR >= WW) return !0;
            16 & RW.flags && (zR = !0)
          } else {
            let NW = yR + RW.length;
            if (yR <= WW && (MW = RW, CW = WW - yR, zR = NW < WW), NW >= WW && !wW && (wW = RW, AW = WW - yR, bR = yR > WW), yR > WW && wW) return !0
          }
        })), MW || wW ? (zR && wW ? MW = null : bR && MW && (wW = null), MW && RW < 0 || !wW ? MW.domIn(CW, RW) : wW.domIn(AW, RW)) : this.domAtPos(WW, RW)
      }
      coordsAt(WW, RW) {
        let {
          tile: MW,
          offset: wW
        } = this.tile.resolveBlock(WW, RW);
        return MW.isWidget() ? MW.widget instanceof vw ? null : MW.coordsInWidget(wW, RW, !0) : MW.coordsIn(wW, RW)
      }
      lineAt(WW, RW) {
        let {
          tile: MW
        } = this.tile.resolveBlock(WW, RW);
        return MW.isLine() ? MW : null
      }
      coordsForChar(WW) {
        let {
          tile: RW,
          offset: MW
        } = this.tile.resolveBlock(WW, 1);
        if (!RW.isLine()) return null;
        return function WW(RW, MW) {
          if (RW.isComposite())
            for (let wW of RW.children) {
              if (wW.length >= MW) {
                let RW = WW(wW, MW);
                if (RW) return RW
              }
              if ((MW -= wW.length) < 0) break
            } else if (RW.isText() && MW < RW.length) {
              let WW = (0, wW.S)(RW.text, MW);
              if (WW == MW) return null;
              let CW = wR(RW.dom, MW, WW).getClientRects();
              for (let RW = 0; RW < CW.length; RW++) {
                let WW = CW[RW];
                if (RW == CW.length - 1 || WW.top < WW.bottom && WW.left < WW.right) return WW
              }
            } return null
        }(RW, MW)
      }
      measureVisibleLineHeights(WW) {
        let RW = [],
          {
            from: MW,
            to: wW
          } = WW,
          CW = this.view.contentDOM.clientWidth,
          zR = CW > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          AW = -1,
          bR = this.view.textDirection == NR.LTR,
          yR = 0,
          NW = (WW, eW, BW) => {
            for (let tR = 0; tR < WW.children.length && !(eW > wW); tR++) {
              let wW = WW.children[tR],
                TW = eW + wW.length,
                gR = wW.dom.getBoundingClientRect(),
                {
                  height: iR
                } = gR;
              if (BW && !tR && (yR += gR.top - BW.top), wW instanceof YM) TW > MW && NW(wW, eW, gR);
              else if (eW >= MW && (yR > 0 && RW.push(-yR), RW.push(iR + yR), yR = 0, zR)) {
                let WW = wW.dom.lastChild,
                  RW = WW ? KW(WW) : [];
                if (RW.length) {
                  let WW = RW[RW.length - 1],
                    MW = bR ? WW.right - gR.left : gR.right - WW.left;
                  MW > AW && (AW = MW, this.minWidth = CW, this.minWidthFrom = eW, this.minWidthTo = TW)
                }
              }
              BW && tR == WW.children.length - 1 && (yR += BW.bottom - gR.bottom), eW = TW + wW.breakAfter
            }
          };
        return NW(this.tile, 0, null), RW
      }
      textDirectionAt(WW) {
        let {
          tile: RW
        } = this.tile.resolveBlock(WW, 1);
        return "rtl" == getComputedStyle(RW.dom).direction ? NR.RTL : NR.LTR
      }
      measureTextSize() {
        let WW = this.tile.blockTiles((WW => {
          if (WW.isLine() && WW.children.length && WW.length <= 20) {
            let RW, MW = 0;
            for (let wW of WW.children) {
              if (!wW.isText() || /[^ -~]/.test(wW.text)) return;
              let WW = KW(wW.dom);
              if (1 != WW.length) return;
              MW += WW[0].width, RW = WW[0].height
            }
            if (MW) return {
              lineHeight: WW.dom.getBoundingClientRect().height,
              charWidth: MW / WW.length,
              textHeight: RW
            }
          }
        }));
        if (WW) return WW;
        let RW, MW, wW, CW = document.createElement("div");
        return CW.className = "cm-line", CW.style.width = "99999px", CW.style.position = "absolute", CW.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(CW);
          let WW = KW(CW.firstChild)[0];
          RW = CW.getBoundingClientRect().height, MW = WW && WW.width ? WW.width / 27 : 7, wW = WW && WW.height ? WW.height : RW, CW.remove()
        })), {
          lineHeight: RW,
          charWidth: MW,
          textHeight: wW
        }
      }
      computeBlockGapDeco() {
        let WW = [],
          RW = this.view.viewState;
        for (let MW = 0, wW = 0;; wW++) {
          let CW = wW == RW.viewports.length ? null : RW.viewports[wW],
            zR = CW ? CW.from - 1 : this.view.state.doc.length;
          if (zR > MW) {
            let wW = (RW.lineBlockAt(zR).bottom - RW.lineBlockAt(MW).top) / this.view.scaleY;
            WW.push(sW.replace({
              widget: new vw(wW),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(MW, zR))
          }
          if (!CW) break;
          MW = CW.to + 1
        }
        return sW.set(WW)
      }
      updateDeco() {
        let WW = 1,
          RW = this.view.state.facet(WM).map((RW => (this.dynamicDecorationMap[WW++] = "function" == typeof RW) ? RW(this.view) : RW)),
          MW = !1,
          CW = this.view.state.facet(MM).map(((WW, RW) => {
            let wW = "function" == typeof WW;
            return wW && (MW = !0), wW ? WW(this.view) : WW
          }));
        for (CW.length && (this.dynamicDecorationMap[WW++] = MW, RW.push(wW.s.join(CW))), this.vA = [this.editContextFormatting, ...RW, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; WW < this.vA.length;) this.dynamicDecorationMap[WW++] = !1;
        this.blockWrappers = this.view.state.facet(RM).map((WW => "function" == typeof WW ? WW(this.view) : WW))
      }
      scrollIntoView(WW) {
        var RW;
        if (WW.isSnapshot) {
          let RW = this.view.viewState.lineBlockAt(WW.range.head);
          return this.view.scrollDOM.scrollTop = RW.top - WW.yMargin, void(this.view.scrollDOM.scrollLeft = WW.xMargin)
        }
        for (let eW of this.view.state.facet(vM)) try {
          if (eW(this.view, WW.range, WW)) return !0
        } catch (NW) {
          nR(this.view.state, NW, "scroll handler")
        }
        let MW, {
            range: wW
          } = WW,
          CW = this.coordsAt(wW.head, null !== (RW = wW.assoc) && void 0 !== RW ? RW : wW.empty ? 0 : wW.head > wW.anchor ? -1 : 1);
        if (!CW) return;
        !wW.empty && (MW = this.coordsAt(wW.anchor, wW.anchor > wW.head ? -1 : 1)) && (CW = {
          left: Math.min(CW.left, MW.left),
          top: Math.min(CW.top, MW.top),
          right: Math.max(CW.right, MW.right),
          bottom: Math.max(CW.bottom, MW.bottom)
        });
        let zR = bw(this.view),
          AW = {
            left: CW.left - zR.left,
            top: CW.top - zR.top,
            right: CW.right + zR.right,
            bottom: CW.bottom + zR.bottom
          },
          {
            offsetWidth: bR,
            offsetHeight: yR
          } = this.view.scrollDOM;
        if (function(WW, RW, MW, wW, CW, zR, AW, bR) {
            let yR = WW.ownerDocument,
              NW = yR.defaultView || window;
            for (let eW = WW, BW = !1; eW && !BW;)
              if (1 == eW.nodeType) {
                let WW, tR = eW == yR.body,
                  TW = 1,
                  gR = 1;
                if (tR) WW = DW(NW);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(eW).position) && (BW = !0), eW.scrollHeight <= eW.clientHeight && eW.scrollWidth <= eW.clientWidth) {
                    eW = eW.assignedSlot || eW.parentNode;
                    continue
                  }
                  let RW = eW.getBoundingClientRect();
                  ({
                    scaleX: TW,
                    scaleY: gR
                  } = qR(eW, RW)), WW = {
                    left: RW.left,
                    right: RW.left + eW.clientWidth * TW,
                    top: RW.top,
                    bottom: RW.top + eW.clientHeight * gR
                  }
                }
                let iR = 0,
                  YW = 0;
                if ("nearest" == CW) RW.top < WW.top + AW ? (YW = RW.top - (WW.top + AW), MW > 0 && RW.bottom > WW.bottom + YW && (YW = RW.bottom - WW.bottom + AW)) : RW.bottom > WW.bottom - AW && (YW = RW.bottom - WW.bottom + AW, MW < 0 && RW.top - YW < WW.top && (YW = RW.top - (WW.top + AW)));
                else {
                  let wW = RW.bottom - RW.top,
                    zR = WW.bottom - WW.top;
                  YW = ("center" == CW && wW <= zR ? RW.top + wW / 2 - zR / 2 : "start" == CW || "center" == CW && MW < 0 ? RW.top - AW : RW.bottom - zR + AW) - WW.top
                }
                if ("nearest" == wW ? RW.left < WW.left + zR ? (iR = RW.left - (WW.left + zR), MW > 0 && RW.right > WW.right + iR && (iR = RW.right - WW.right + zR)) : RW.right > WW.right - zR && (iR = RW.right - WW.right + zR, MW < 0 && RW.left < WW.left + iR && (iR = RW.left - (WW.left + zR))) : iR = ("center" == wW ? RW.left + (RW.right - RW.left) / 2 - (WW.right - WW.left) / 2 : "start" == wW == bR ? RW.left - zR : RW.right - (WW.right - WW.left) + zR) - WW.left, iR || YW)
                  if (tR) NW.scrollBy(iR, YW);
                  else {
                    let WW = 0,
                      MW = 0;
                    if (YW) {
                      let WW = eW.scrollTop;
                      eW.scrollTop += YW / gR, MW = (eW.scrollTop - WW) * gR
                    }
                    if (iR) {
                      let RW = eW.scrollLeft;
                      eW.scrollLeft += iR / TW, WW = (eW.scrollLeft - RW) * TW
                    }
                    RW = {
                      left: RW.left - WW,
                      top: RW.top - MW,
                      right: RW.right - WW,
                      bottom: RW.bottom - MW
                    }, WW && Math.abs(WW - iR) < 1 && (wW = "nearest"), MW && Math.abs(MW - YW) < 1 && (CW = "nearest")
                  } if (tR) break;
                (RW.top < WW.top || RW.bottom > WW.bottom || RW.left < WW.left || RW.right > WW.right) && (RW = {
                  left: Math.max(RW.left, WW.left),
                  right: Math.min(RW.right, WW.right),
                  top: Math.max(RW.top, WW.top),
                  bottom: Math.min(RW.bottom, WW.bottom)
                }), eW = eW.assignedSlot || eW.parentNode
              } else {
                if (11 != eW.nodeType) break;
                eW = eW.host
              }
          }(this.view.scrollDOM, AW, wW.head < wW.anchor ? -1 : 1, WW.x, WW.y, Math.max(Math.min(WW.xMargin, bR), -bR), Math.max(Math.min(WW.yMargin, yR), -yR), this.view.textDirection == NR.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (CW.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || CW.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let WW = this.view.docView.lineAt(wW.head, 1);
          WW && WW.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(WW) {
        let RW = WW => WW.isWidget() || WW.children.some(RW);
        return RW(this.tile.resolveBlock(WW, 1).tile)
      }
      destroy() {
        EM(this.tile)
      }
    }

    function EM(WW, RW) {
      let MW = null === RW || void 0 === RW ? void 0 : RW.get(WW);
      if (1 != MW) {
        null == MW && WW.destroy();
        for (let MW of WW.children) EM(MW, RW)
      }
    }

    function VM(WW, RW) {
      let MW = WW.observer.selectionRange;
      if (!MW.focusNode) return null;
      let wW = AR(MW.focusNode, MW.focusOffset),
        CW = bM(MW.focusNode, MW.focusOffset),
        zR = wW || CW;
      if (CW && wW && CW.node != wW.node) {
        let RW = tw.get(CW.node);
        if (!RW || RW.isText() && RW.text != CW.node.nodeValue) zR = CW;
        else if (WW.docView.lastCompositionAfterCursor) {
          let WW = tw.get(wW.node);
          !WW || WW.isText() && WW.text != wW.node.nodeValue || (zR = CW)
        }
      }
      if (WW.docView.lastCompositionAfterCursor = zR != wW, !zR) return null;
      let AW = RW - zR.offset;
      return {
        from: AW,
        to: AW + zR.node.nodeValue.length,
        node: zR.node
      }
    }
    let mw = class {
      constructor() {
        this.changes = []
      }
      compareRange(WW, RW) {
        EW(WW, RW, this.changes)
      }
      comparePoint(WW, RW) {
        EW(WW, RW, this.changes)
      }
      boundChange(WW) {
        EW(WW, WW, this.changes)
      }
    };
    class xw {
      constructor() {
        this.changes = []
      }
      compareRange(WW, RW) {
        EW(WW, RW, this.changes)
      }
      comparePoint() {}
      boundChange(WW) {
        EW(WW, WW, this.changes)
      }
    }
    class vw extends kR {
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

    function KM(WW, RW, MW) {
      let wW = WW.lineBlockAt(RW);
      if (Array.isArray(wW.type)) {
        let WW;
        for (let CW of wW.type) {
          if (CW.from > RW) break;
          if (!(CW.to < RW)) {
            if (CW.from < RW && CW.to > RW) return CW;
            WW && (CW.type != aR.Text || WW.type == CW.type && !(MW < 0 ? CW.from < RW : CW.to > RW)) || (WW = CW)
          }
        }
        return WW || wW
      }
      return wW
    }

    function uM(WW, RW, MW, wW) {
      let CW = WW.state.doc.lineAt(RW.head),
        zR = WW.bidiSpans(CW),
        AW = WW.textDirectionAt(CW.from);
      for (let bR = RW, yR = null;;) {
        let RW = XR(CW, zR, AW, bR, MW),
          NW = cM;
        if (!RW) {
          if (CW.number == (MW ? WW.state.doc.lines : 1)) return bR;
          NW = "\n", CW = WW.state.doc.line(CW.number + (MW ? 1 : -1)), zR = WW.bidiSpans(CW), RW = WW.visualLineSide(CW, !MW)
        }
        if (yR) {
          if (!yR(NW)) return bR
        } else {
          if (!wW) return RW;
          yR = wW(NW)
        }
        bR = RW
      }
    }

    function OM(WW, RW, MW) {
      for (;;) {
        let wW = 0;
        for (let CW of WW) CW.between(RW - 1, RW + 1, ((WW, CW, zR) => {
          if (RW > WW && RW < CW) {
            let zR = wW || MW || (RW - WW < CW - RW ? -1 : 1);
            RW = zR < 0 ? WW : CW, wW = zR
          }
        }));
        if (!wW) return RW
      }
    }

    function nM(WW, RW) {
      let MW = null;
      for (let CW = 0; CW < RW.WA.length; CW++) {
        let zR = RW.WA[CW],
          AW = null;
        if (zR.empty) {
          let RW = OM(WW, zR.from, 0);
          RW != zR.from && (AW = wW.j.cursor(RW, -1))
        } else {
          let RW = OM(WW, zR.from, -1),
            MW = OM(WW, zR.to, 1);
          RW == zR.from && MW == zR.to || (AW = wW.j.range(zR.from == zR.anchor ? RW : MW, zR.from == zR.head ? RW : MW))
        }
        AW && (MW || (MW = RW.WA.slice()), MW[CW] = AW)
      }
      return MW ? wW.j.create(MW, RW.mainIndex) : RW
    }

    function GM(WW, RW, MW) {
      let CW = OM(WW.state.facet(wM).map((RW => RW(WW))), MW.from, RW.head > MW.from ? -1 : 1);
      return CW == MW.from ? MW : wW.j.cursor(CW, CW < MW.from ? 1 : -1)
    }
    class LM {
      constructor(WW, RW) {
        this.pos = WW, this.assoc = RW
      }
    }

    function HM(WW, RW, MW, CW) {
      let zR, AW = WW.contentDOM.getBoundingClientRect(),
        bR = AW.top + WW.viewState.paddingTop,
        {
          x: yR,
          y: NW
        } = RW,
        eW = NW - bR;
      for (;;) {
        if (eW < 0) return new LM(0, 1);
        if (eW > WW.viewState.docHeight) return new LM(WW.state.doc.length, -1);
        if (zR = WW.elementAtHeight(eW), null == CW) break;
        if (zR.type == aR.Text) {
          if (CW < 0 ? zR.to < WW.viewport.from : zR.from > WW.viewport.to) break;
          let RW = WW.docView.coordsAt(CW < 0 ? zR.from : zR.to, CW > 0 ? -1 : 1);
          if (RW && (CW < 0 ? RW.top <= eW + bR : RW.bottom >= eW + bR)) break
        }
        let RW = WW.viewState.heightOracle.textHeight / 2;
        eW = CW > 0 ? zR.bottom + RW : zR.top - RW
      }
      if (WW.viewport.from >= zR.to || WW.viewport.to <= zR.from) {
        if (MW) return null;
        if (zR.type == aR.Text) {
          let RW = function(WW, RW, MW, CW, zR) {
            let AW = Math.round((CW - RW.left) * WW.defaultCharacterWidth);
            if (WW.lineWrapping && MW.height > 1.5 * WW.defaultLineHeight) {
              let RW = WW.viewState.heightOracle.textHeight;
              AW += Math.floor((zR - MW.top - .5 * (WW.defaultLineHeight - RW)) / RW) * WW.viewState.heightOracle.lineLength
            }
            let bR = WW.state.sliceDoc(MW.from, MW.to);
            return MW.from + (0, wW.U)(bR, AW, WW.state.tabSize)
          }(WW, AW, zR, yR, NW);
          return new LM(RW, RW == zR.from ? 1 : -1)
        }
      }
      if (zR.type != aR.Text) return eW < (zR.top + zR.bottom) / 2 ? new LM(zR.from, 1) : new LM(zR.to, -1);
      let BW = WW.docView.lineAt(zR.from, 2);
      return BW && BW.length == zR.length || (BW = WW.docView.lineAt(zR.from, -2)), new DM(WW, yR, NW, WW.textDirectionAt(zR.from)).scanTile(BW, zR.from)
    }
    class DM {
      constructor(WW, RW, MW, wW) {
        this.view = WW, this.x = RW, this.y = MW, this.baseDir = wW, this.line = null, this.spans = null
      }
      bidiSpansAt(WW) {
        return (!this.line || this.line.from > WW || this.line.to < WW) && (this.line = this.view.state.doc.lineAt(WW), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(WW, RW) {
        let {
          line: MW,
          spans: wW
        } = this.bidiSpansAt(WW);
        return wW[IR.find(wW, WW - MW.from, -1, RW)].level == this.baseDir
      }
      dirAt(WW, RW) {
        let {
          line: MW,
          spans: wW
        } = this.bidiSpansAt(WW);
        return wW[IR.find(wW, WW - MW.from, -1, RW)].dir
      }
      bidiIn(WW, RW) {
        let {
          spans: MW,
          line: wW
        } = this.bidiSpansAt(WW);
        return MW.length > 1 || MW.length && (MW[0].level != this.baseDir || MW[0].to + wW.from < RW)
      }
      scan(WW, RW) {
        let MW, wW, CW, zR = 0,
          AW = WW.length - 1,
          bR = new Set,
          yR = this.bidiIn(WW[0], WW[AW]),
          NW = -1,
          eW = 1e9;
        WW: for (; zR < AW;) {
          let BW = AW - zR,
            tR = zR + AW >> 1;
          RW: if (bR.has(tR)) {
            let WW = zR + Math.floor(Math.random() * BW);
            for (let RW = 0; RW < BW; RW++) {
              if (!bR.has(WW)) {
                tR = WW;
                break RW
              }
              WW++, WW == AW && (WW = zR)
            }
            break WW
          } bR.add(tR);
          let TW = RW(tR);
          if (TW)
            for (let RW = 0; RW < TW.length; RW++) {
              let bR = TW[RW],
                BW = 0;
              if (!(0 == bR.width && TW.length > 1)) {
                if (bR.bottom < this.y)(!MW || MW.bottom < bR.bottom) && (MW = bR), BW = 1;
                else if (bR.top > this.y)(!wW || wW.top > bR.top) && (wW = bR), BW = -1;
                else {
                  let WW = bR.left > this.x ? this.x - bR.left : bR.right < this.x ? this.x - bR.right : 0,
                    RW = Math.abs(WW);
                  RW < eW && (NW = tR, eW = RW, CW = bR), WW && (BW = WW < 0 == (this.baseDir == NR.LTR) ? -1 : 1)
                } - 1 != BW || yR && !this.baseDirAt(WW[tR], 1) ? 1 != BW || yR && !this.baseDirAt(WW[tR + 1], -1) || (zR = tR + 1) : AW = tR
              }
            }
        }
        if (!CW) {
          let CW = MW && (!wW || this.y - MW.bottom < wW.top - this.y) ? MW : wW;
          return this.y = (CW.top + CW.bottom) / 2, this.scan(WW, RW)
        }
        if (eW) {
          if (MW && MW.bottom > CW.top) return this.y = MW.bottom - 1, this.scan(WW, RW);
          if (wW && wW.top < CW.bottom) return this.y = wW.top + 1, this.scan(WW, RW)
        }
        let BW = (yR ? this.dirAt(WW[NW], 1) : this.baseDir) == NR.LTR;
        return {
          i: NW,
          after: this.x > (CW.left + CW.right) / 2 == BW
        }
      }
      scanText(WW, RW) {
        let MW = [];
        for (let zR = 0; zR < WW.length; zR = (0, wW.S)(WW.text, zR)) MW.push(RW + zR);
        MW.push(RW + WW.length);
        let CW = this.scan(MW, (wW => {
          let CW = MW[wW] - RW,
            zR = MW[wW + 1] - RW;
          return wR(WW.dom, CW, zR).getClientRects()
        }));
        return CW.after ? new LM(MW[CW.i + 1], -1) : new LM(MW[CW.i], 1)
      }
      scanTile(WW, RW) {
        if (!WW.length) return new LM(RW, 1);
        if (1 == WW.children.length) {
          let MW = WW.children[0];
          if (MW.isText()) return this.scanText(MW, RW);
          if (MW.isComposite()) return this.scanTile(MW, RW)
        }
        let MW = [RW];
        for (let AW = 0, bR = RW; AW < WW.children.length; AW++) MW.push(bR += WW.children[AW].length);
        let wW = this.scan(MW, (RW => {
            let MW = WW.children[RW];
            return 48 & MW.flags ? null : (1 == MW.dom.nodeType ? MW.dom : wR(MW.dom, 0, MW.length)).getClientRects()
          })),
          CW = WW.children[wW.i],
          zR = MW[wW.i];
        return CW.isText() ? this.scanText(CW, zR) : CW.isComposite() ? this.scanTile(CW, zR) : wW.after ? new LM(MW[wW.i + 1], -1) : new LM(zR, 1)
      }
    }
    const qw = "\uffff";
    class ZM {
      constructor(WW, RW) {
        this.points = WW, this.view = RW, this.text = "", this.lineSeparator = RW.state.facet(wW.l.lineSeparator)
      }
      append(WW) {
        this.text += WW
      }
      lineBreak() {
        this.text += qw
      }
      readRange(WW, RW) {
        if (!WW) return this;
        let MW = WW.parentNode;
        for (let wW = WW;;) {
          this.findPointBefore(MW, wW);
          let WW = this.text.length;
          this.readNode(wW);
          let CW = tw.get(wW),
            zR = wW.nextSibling;
          if (zR == RW) {
            (null === CW || void 0 === CW ? void 0 : CW.breakAfter) && !zR && MW != this.view.contentDOM && this.lineBreak();
            break
          }
          let AW = tw.get(zR);
          (CW && AW ? CW.breakAfter : (CW ? CW.breakAfter : nW(wW)) || nW(zR) && ("BR" != wW.nodeName || (null === CW || void 0 === CW ? void 0 : CW.isWidget())) && this.text.length > WW) && !Ww(zR, RW) && this.lineBreak(), wW = zR
        }
        return this.findPointBefore(MW, RW), this
      }
      readTextNode(WW) {
        let RW = WW.nodeValue;
        for (let MW of this.points) MW.node == WW && (MW.pos = this.text.length + Math.min(MW.offset, RW.length));
        for (let MW = 0, wW = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let CW, zR = -1,
            AW = 1;
          if (this.lineSeparator ? (zR = RW.indexOf(this.lineSeparator, MW), AW = this.lineSeparator.length) : (CW = wW.exec(RW)) && (zR = CW.index, AW = CW[0].length), this.append(RW.slice(MW, zR < 0 ? RW.length : zR)), zR < 0) break;
          if (this.lineBreak(), AW > 1)
            for (let RW of this.points) RW.node == WW && RW.pos > this.text.length && (RW.pos -= AW - 1);
          MW = zR + AW
        }
      }
      readNode(WW) {
        let RW = tw.get(WW),
          MW = RW && RW.overrideDOMText;
        if (null != MW) {
          this.findPointInside(WW, MW.length);
          for (let WW = MW.iter(); !WW.next().done;) WW.lineBreak ? this.lineBreak() : this.append(WW.value)
        } else 3 == WW.nodeType ? this.readTextNode(WW) : "BR" == WW.nodeName ? WW.nextSibling && this.lineBreak() : 1 == WW.nodeType && this.readRange(WW.firstChild, null)
      }
      findPointBefore(WW, RW) {
        for (let MW of this.points) MW.node == WW && WW.childNodes[MW.offset] == RW && (MW.pos = this.text.length)
      }
      findPointInside(WW, RW) {
        for (let MW of this.points)(3 == WW.nodeType ? MW.node == WW : WW.contains(MW.node)) && (MW.pos = this.text.length + (SM(WW, MW.node, MW.offset) ? RW : 0))
      }
    }

    function SM(WW, RW, MW) {
      for (;;) {
        if (!RW || MW < LW(RW)) return !1;
        if (RW == WW) return !0;
        MW = OW(RW) + 1, RW = RW.parentNode
      }
    }

    function Ww(WW, RW) {
      let MW;
      for (; WW != RW && WW; WW = WW.nextSibling) {
        let RW = tw.get(WW);
        if (!(null === RW || void 0 === RW ? void 0 : RW.isWidget())) return !1;
        RW && (MW || (MW = [])).push(RW)
      }
      if (MW)
        for (let wW of MW) {
          let WW = wW.overrideDOMText;
          if (null === WW || void 0 === WW ? void 0 : WW.length) return !1
        }
      return !0
    }
    class Rw {
      constructor(WW, RW) {
        this.node = WW, this.offset = RW, this.pos = -1
      }
    }
    class Mw {
      constructor(WW, RW, MW, CW) {
        this.typeOver = CW, this.bounds = null, this.text = "", this.domChanged = RW > -1;
        let {
          impreciseHead: zR,
          impreciseAnchor: AW
        } = WW.docView, bR = WW.state.selection;
        if (WW.state.readOnly && RW > -1) this.newSel = null;
        else if (RW > -1 && (this.bounds = ww(WW.docView.tile, RW, MW, 0))) {
          let RW = zR || AW ? [] : function(WW) {
              let RW = [];
              if (WW.root.activeElement != WW.contentDOM) return RW;
              let {
                anchorNode: MW,
                anchorOffset: wW,
                focusNode: CW,
                focusOffset: zR
              } = WW.observer.selectionRange;
              MW && (RW.push(new Rw(MW, wW)), CW == MW && zR == wW || RW.push(new Rw(CW, zR)));
              return RW
            }(WW),
            MW = new ZM(RW, WW);
          MW.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = MW.text, this.newSel = function(WW, RW) {
            if (0 == WW.length) return null;
            let MW = WW[0].pos,
              CW = 2 == WW.length ? WW[1].pos : MW;
            return MW > -1 && CW > -1 ? wW.j.single(MW + RW, CW + RW) : null
          }(RW, this.bounds.from)
        } else {
          let RW = WW.observer.selectionRange,
            MW = zR && zR.node == RW.focusNode && zR.offset == RW.focusOffset || !xR(WW.contentDOM, RW.focusNode) ? bR.main.head : WW.docView.posFromDOM(RW.focusNode, RW.focusOffset),
            CW = AW && AW.node == RW.anchorNode && AW.offset == RW.anchorOffset || !xR(WW.contentDOM, RW.anchorNode) ? bR.main.anchor : WW.docView.posFromDOM(RW.anchorNode, RW.anchorOffset),
            yR = WW.viewport;
          if ((fW.ios || fW.chrome) && bR.main.empty && MW != CW && (yR.from > 0 || yR.to < WW.state.doc.length)) {
            let RW = Math.min(MW, CW),
              wW = Math.max(MW, CW),
              zR = yR.from - RW,
              AW = yR.to - wW;
            0 != zR && 1 != zR && 0 != RW || 0 != AW && -1 != AW && wW != WW.state.doc.length || (MW = 0, CW = WW.state.doc.length)
          }
          if (WW.inputState.composing > -1 && bR.WA.length > 1) this.newSel = bR.replaceRange(wW.j.range(CW, MW));
          else if (WW.lineWrapping && CW == MW && (!bR.main.empty || bR.main.head != MW) && WW.inputState.lastTouchTime > Date.now() - 100) {
            let RW = WW.coordsAtPos(MW, -1),
              CW = 0;
            RW && (CW = WW.inputState.lastTouchY <= RW.bottom ? -1 : 1), this.newSel = wW.j.create([wW.j.cursor(MW, CW)])
          } else this.newSel = wW.j.single(CW, MW)
        }
      }
    }

    function ww(WW, RW, MW, wW) {
      if (WW.isComposite()) {
        let CW = -1,
          zR = -1,
          AW = -1,
          bR = -1;
        for (let yR = 0, NW = wW, eW = wW; yR < WW.children.length; yR++) {
          let wW = WW.children[yR],
            BW = NW + wW.length;
          if (NW < RW && BW > MW) return ww(wW, RW, MW, NW);
          if (BW >= RW && -1 == CW && (CW = yR, zR = NW), NW > MW && wW.dom.parentNode == WW.dom) {
            AW = yR, bR = eW;
            break
          }
          eW = BW, NW = BW + wW.breakAfter
        }
        return {
          from: zR,
          to: bR < 0 ? wW + WW.length : bR,
          startDOM: (CW ? WW.children[CW - 1].dom.nextSibling : null) || WW.dom.firstChild,
          endDOM: AW < WW.children.length && AW >= 0 ? WW.children[AW].dom : null
        }
      }
      return WW.isText() ? {
        from: wW,
        to: wW + WW.length,
        startDOM: WW.dom,
        endDOM: WW.dom.nextSibling
      } : null
    }

    function Cw(WW, RW) {
      let MW, {
          newSel: CW
        } = RW,
        {
          state: zR
        } = WW,
        AW = zR.selection.main,
        bR = WW.inputState.lastKeyTime > Date.now() - 100 ? WW.inputState.lastKeyCode : -1;
      if (RW.bounds) {
        let {
          from: WW,
          to: CW
        } = RW.bounds, yR = AW.from, NW = null;
        (8 === bR || fW.android && RW.text.length < CW - WW) && (yR = AW.to, NW = "end");
        let eW, BW, tR = zR.doc.sliceString(WW, CW, qw);
        !AW.empty && AW.from >= WW && AW.to <= CW && (RW.typeOver || tR != RW.text) && tR.slice(0, AW.from - WW) == RW.text.slice(0, AW.from - WW) && tR.slice(AW.to - WW) == RW.text.slice(eW = RW.text.length - (tR.length - (AW.to - WW))) ? MW = {
          from: AW.from,
          to: AW.to,
          insert: wW.D.of(RW.text.slice(AW.from - WW, eW).split(qw))
        } : (BW = Aw(tR, RW.text, yR - WW, NW)) && (fW.chrome && 13 == bR && BW.toB == BW.from + 2 && RW.text.slice(BW.from, BW.toB) == qw + qw && BW.toB--, MW = {
          from: WW + BW.from,
          to: WW + BW.toA,
          insert: wW.D.of(RW.text.slice(BW.from, BW.toB).split(qw))
        })
      } else CW && (!WW.hasFocus && zR.facet(GR) || bC(CW, AW)) && (CW = null);
      if (!MW && !CW) return !1;
      if ((fW.mac || fW.android) && MW && MW.from == MW.to && MW.from == AW.head - 1 && /^\. ?$/.test(MW.insert.toString()) && "off" == WW.contentDOM.getAttribute("autocorrect") ? (CW && 2 == MW.insert.length && (CW = wW.j.single(CW.main.anchor - 1, CW.main.head - 1)), MW = {
          from: MW.from,
          to: MW.to,
          insert: wW.D.of([MW.insert.toString().replace(".", " ")])
        }) : zR.doc.lineAt(AW.from).to < AW.to && WW.docView.lineHasWidget(AW.to) && WW.inputState.insertingTextAt > Date.now() - 50 ? MW = {
          from: AW.from,
          to: AW.to,
          insert: zR.toText(WW.inputState.insertingText)
        } : fW.chrome && MW && MW.from == MW.to && MW.from == AW.head && "\n " == MW.insert.toString() && WW.lineWrapping && (CW && (CW = wW.j.single(CW.main.anchor - 1, CW.main.head - 1)), MW = {
          from: AW.from,
          to: AW.to,
          insert: wW.D.of([" "])
        }), MW) return zC(WW, MW, CW, bR);
      if (CW && !bC(CW, AW)) {
        let RW = !1,
          MW = "select";
        return WW.inputState.lastSelectionTime > Date.now() - 50 && ("select" == WW.inputState.lastSelectionOrigin && (RW = !0), MW = WW.inputState.lastSelectionOrigin, "select.pointer" == MW && (CW = nM(zR.facet(wM).map((RW => RW(WW))), CW))), WW.dispatch({
          selection: CW,
          scrollIntoView: RW,
          userEvent: MW
        }), !0
      }
      return !1
    }

    function zC(WW, RW, MW) {
      let CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (fW.ios && WW.inputState.flushIOSKey(RW)) return !0;
      let zR = WW.state.selection.main;
      if (fW.android && (RW.to == zR.to && (RW.from == zR.from || RW.from == zR.from - 1 && " " == WW.state.sliceDoc(RW.from, zR.from)) && 1 == RW.insert.length && 2 == RW.insert.lines && CR(WW.contentDOM, "Enter", 13) || (RW.from == zR.from - 1 && RW.to == zR.to && 0 == RW.insert.length || 8 == CW && RW.insert.length < RW.to - RW.from && RW.to > zR.head) && CR(WW.contentDOM, "Backspace", 8) || RW.from == zR.from && RW.to == zR.to + 1 && 0 == RW.insert.length && CR(WW.contentDOM, "Delete", 46))) return !0;
      let AW, bR = RW.insert.toString();
      WW.inputState.composing >= 0 && WW.inputState.composing++;
      let yR = () => AW || (AW = function(WW, RW, MW) {
        let CW, zR = WW.state,
          AW = zR.selection.main,
          bR = -1;
        if (RW.from == RW.to && RW.from < AW.from || RW.from > AW.to) {
          let MW = RW.from < AW.from ? -1 : 1,
            wW = MW < 0 ? AW.from : AW.to,
            CW = OM(zR.facet(wM).map((RW => RW(WW))), wW, MW);
          RW.from == CW && (bR = CW)
        }
        if (bR > -1) CW = {
          changes: RW,
          selection: wW.j.cursor(RW.from + RW.insert.length, -1)
        };
        else if (RW.from >= AW.from && RW.to <= AW.to && RW.to - RW.from >= (AW.to - AW.from) / 3 && (!MW || MW.main.empty && MW.main.from == RW.from + RW.insert.length) && WW.inputState.composing < 0) {
          let MW = AW.from < RW.from ? zR.sliceDoc(AW.from, RW.from) : "",
            wW = AW.to > RW.to ? zR.sliceDoc(RW.to, AW.to) : "";
          CW = zR.replaceSelection(WW.state.toText(MW + RW.insert.sliceString(0, void 0, WW.state.lineBreak) + wW))
        } else {
          let bR = zR.changes(RW),
            yR = MW && MW.main.to <= bR.newLength ? MW.main : void 0;
          if (zR.selection.WA.length > 1 && (WW.inputState.composing >= 0 || WW.inputState.compositionPendingChange) && RW.to <= AW.to + 10 && RW.to >= AW.to - 10) {
            let NW, eW = WW.state.sliceDoc(RW.from, RW.to),
              BW = MW && VM(WW, MW.main.head);
            if (BW) {
              let WW = RW.insert.length - (RW.to - RW.from);
              NW = {
                from: BW.from,
                to: BW.to - WW
              }
            } else NW = WW.state.doc.lineAt(AW.head);
            let tR = AW.to - RW.to;
            CW = zR.changeByRange((MW => {
              if (MW.from == AW.from && MW.to == AW.to) return {
                changes: bR,
                range: yR || MW.map(bR)
              };
              let CW = MW.to - tR,
                BW = CW - eW.length;
              if (WW.state.sliceDoc(BW, CW) != eW || CW >= NW.from && BW <= NW.to) return {
                range: MW
              };
              let TW = zR.changes({
                  from: BW,
                  to: CW,
                  insert: RW.insert
                }),
                gR = MW.to - AW.to;
              return {
                changes: TW,
                range: yR ? wW.j.range(Math.max(0, yR.anchor + gR), Math.max(0, yR.head + gR)) : MW.map(TW)
              }
            }))
          } else CW = {
            changes: bR,
            selection: yR && zR.selection.replaceRange(yR)
          }
        }
        let yR = "input.type";
        (WW.composing || WW.inputState.compositionPendingChange && WW.inputState.compositionEndedAt > Date.now() - 50) && (WW.inputState.compositionPendingChange = !1, yR += ".compose", WW.inputState.compositionFirstChange && (yR += ".start", WW.inputState.compositionFirstChange = !1));
        return zR.update(CW, {
          userEvent: yR,
          scrollIntoView: !0
        })
      }(WW, RW, MW));
      return WW.state.facet(hR).some((MW => MW(WW, RW.from, RW.to, bR, yR))) || WW.dispatch(yR()), !0
    }

    function Aw(WW, RW, MW, wW) {
      let CW = Math.min(WW.length, RW.length),
        zR = 0;
      for (; zR < CW && WW.charCodeAt(zR) == RW.charCodeAt(zR);) zR++;
      if (zR == CW && WW.length == RW.length) return null;
      let AW = WW.length,
        bR = RW.length;
      for (; AW > 0 && bR > 0 && WW.charCodeAt(AW - 1) == RW.charCodeAt(bR - 1);) AW--, bR--;
      if ("end" == wW) {
        MW -= AW + Math.max(0, zR - Math.min(AW, bR)) - zR
      }
      if (AW < zR && WW.length < RW.length) {
        zR -= MW <= zR && MW >= AW ? zR - MW : 0, bR = zR + (bR - AW), AW = zR
      } else if (bR < zR) {
        zR -= MW <= zR && MW >= bR ? zR - MW : 0, AW = zR + (AW - bR), bR = zR
      }
      return {
        from: zR,
        toA: AW,
        toB: bR
      }
    }

    function bC(WW, RW) {
      return RW.head == WW.main.head && RW.anchor == WW.main.anchor
    }
    class yC {
      setSelectionOrigin(WW) {
        this.lastSelectionOrigin = WW, this.lastSelectionTime = Date.now()
      }
      constructor(WW) {
        this.view = WW, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = WW.hasFocus, fW.safari && WW.contentDOM.addEventListener("input", (() => null)), fW.gecko && function(WW) {
          dw.has(WW) || (dw.add(WW), WW.addEventListener("copy", (() => {})), WW.addEventListener("cut", (() => {})))
        }(WW.contentDOM.ownerDocument)
      }
      handleEvent(WW) {
        (function(WW, RW) {
          if (!RW.bubbles) return !0;
          if (RW.defaultPrevented) return !1;
          for (let MW, wW = RW.target; wW != WW.contentDOM; wW = wW.parentNode)
            if (!wW || 11 == wW.nodeType || (MW = tw.get(wW)) && MW.isWidget() && !MW.isHidden && MW.widget.ignoreEvent(RW)) return !1;
          return !0
        })(this.view, WW) && !this.ignoreDuringComposition(WW) && ("keydown" == WW.type && this.keydown(WW) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(WW.type, WW))) : this.runHandlers(WW.type, WW)))
      }
      runHandlers(WW, RW) {
        let MW = this.handlers[WW];
        if (MW) {
          for (let WW of MW.observers) WW(this.view, RW);
          for (let WW of MW.handlers) {
            if (RW.defaultPrevented) break;
            if (WW(this.view, RW)) {
              RW.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(WW) {
        let RW = ew(WW),
          MW = this.handlers,
          wW = this.view.contentDOM;
        for (let CW in RW)
          if ("scroll" != CW) {
            let WW = !RW[CW].handlers.length,
              zR = MW[CW];
            zR && WW != !zR.handlers.length && (wW.removeEventListener(CW, this.handleEvent), zR = null), zR || wW.addEventListener(CW, this.handleEvent, {
              passive: WW
            })
          } for (let CW in MW) "scroll" == CW || RW[CW] || wW.removeEventListener(CW, this.handleEvent);
        this.handlers = RW
      }
      keydown(WW) {
        if (this.lastKeyCode = WW.keyCode, this.lastKeyTime = Date.now(), 9 == WW.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != WW.keyCode && Tw.indexOf(WW.keyCode) < 0 && (this.tabFocusMode = -1), fW.android && fW.chrome && !WW.synthetic && (13 == WW.keyCode || 8 == WW.keyCode)) return this.view.observer.delayAndroidKey(WW.key, WW.keyCode), !0;
        let RW;
        return !fW.ios || WW.synthetic || WW.altKey || WW.metaKey || WW.shiftKey || !((RW = Bw.find((RW => RW.keyCode == WW.keyCode))) && !WW.ctrlKey || tC.indexOf(WW.key) > -1 && WW.ctrlKey) ? (229 != WW.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = RW || WW, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(WW) {
        let RW = this.pendingIOSKey;
        return !!RW && (!("Enter" == RW.key && WW && WW.from < WW.to && /^\S+$/.test(WW.insert.toString())) && (this.pendingIOSKey = void 0, CR(this.view.contentDOM, RW.key, RW.keyCode, RW instanceof KeyboardEvent ? RW : void 0)))
      }
      ignoreDuringComposition(WW) {
        return !(!/^key/.test(WW.type) || WW.synthetic) && (this.composing > 0 || !!(fW.safari && !fW.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
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

    function Nw(WW, RW) {
      return (MW, wW) => {
        try {
          return RW.call(WW, wW, MW)
        } catch (CW) {
          nR(MW.state, CW)
        }
      }
    }

    function ew(WW) {
      let RW = Object.create(null);

      function MW(WW) {
        return RW[WW] || (RW[WW] = {
          observers: [],
          handlers: []
        })
      }
      for (let wW of WW) {
        let WW = wW.spec,
          RW = WW && WW.plugin.domEventHandlers,
          CW = WW && WW.plugin.domEventObservers;
        if (RW)
          for (let zR in RW) {
            let WW = RW[zR];
            WW && MW(zR).handlers.push(Nw(wW.value, WW))
          }
        if (CW)
          for (let zR in CW) {
            let WW = CW[zR];
            WW && MW(zR).observers.push(Nw(wW.value, WW))
          }
      }
      for (let wW in Yw) MW(wW).handlers.push(Yw[wW]);
      for (let wW in Jw) MW(wW).observers.push(Jw[wW]);
      return RW
    }
    const Bw = [{
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
      tC = "dthko",
      Tw = [16, 17, 18, 20, 91, 92, 224, 225];

    function gC(WW) {
      return .7 * Math.max(0, WW) + 8
    }
    class iC {
      constructor(WW, RW, MW, CW) {
        this.view = WW, this.startEvent = RW, this.style = MW, this.mustSelect = CW, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = RW, this.scrollParents = ZW(WW.contentDOM), this.atoms = WW.state.facet(wM).map((RW => RW(WW)));
        let zR = WW.contentDOM.ownerDocument;
        zR.addEventListener("mousemove", this.move = this.move.bind(this)), zR.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = RW.shiftKey, this.multiple = WW.state.facet(wW.l.allowMultipleSelections) && function(WW, RW) {
          let MW = WW.state.facet(kM);
          return MW.length ? MW[0](RW) : fW.mac ? RW.metaKey : RW.ctrlKey
        }(WW, RW), this.dragging = !(! function(WW, RW) {
          let {
            main: MW
          } = WW.state.selection;
          if (MW.empty) return !1;
          let wW = mR(WW.root);
          if (!wW || 0 == wW.rangeCount) return !0;
          let CW = wW.getRangeAt(0).getClientRects();
          for (let zR = 0; zR < CW.length; zR++) {
            let WW = CW[zR];
            if (WW.left <= RW.clientX && WW.right >= RW.clientX && WW.top <= RW.clientY && WW.bottom >= RW.clientY) return !0
          }
          return !1
        }(WW, RW) || 1 != cC(RW)) && null
      }
      start(WW) {
        !1 === this.dragging && this.select(WW)
      }
      move(WW) {
        if (0 == WW.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (RW = this.startEvent, MW = WW, Math.max(Math.abs(RW.clientX - MW.clientX), Math.abs(RW.clientY - MW.clientY)) < 10)) return;
        var RW, MW;
        this.select(this.lastEvent = WW);
        let wW = 0,
          CW = 0,
          zR = 0,
          AW = 0,
          bR = this.view.win.innerWidth,
          yR = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: zR,
          right: bR
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: AW,
          bottom: yR
        } = this.scrollParents.y.getBoundingClientRect());
        let NW = bw(this.view);
        WW.clientX - NW.left <= zR + 6 ? wW = -gC(zR - WW.clientX) : WW.clientX + NW.right >= bR - 6 && (wW = gC(WW.clientX - bR)), WW.clientY - NW.top <= AW + 6 ? CW = -gC(AW - WW.clientY) : WW.clientY + NW.bottom >= yR - 6 && (CW = gC(WW.clientY - yR)), this.setScrollSpeed(wW, CW)
      }
      up(WW) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || WW.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let WW = this.view.contentDOM.ownerDocument;
        WW.removeEventListener("mousemove", this.move), WW.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(WW, RW) {
        this.scrollSpeed = {
          x: WW,
          y: RW
        }, WW || RW ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: WW,
          y: RW
        } = this.scrollSpeed;
        WW && this.scrollParents.x && (this.scrollParents.x.scrollLeft += WW, WW = 0), RW && this.scrollParents.y && (this.scrollParents.y.scrollTop += RW, RW = 0), (WW || RW) && this.view.win.scrollBy(WW, RW), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(WW) {
        let {
          view: RW
        } = this, MW = nM(this.atoms, this.style.get(WW, this.extend, this.multiple));
        !this.mustSelect && MW.eq(RW.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: MW,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(WW) {
        WW.transactions.some((WW => WW.isUserEvent("input.type"))) ? this.destroy() : this.style.update(WW) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const Yw = Object.create(null),
      Jw = Object.create(null),
      Pw = fW.ie && fW.ie_version < 15 || fW.ios && fW.webkit_version < 604;

    function Iw(WW, RW, MW) {
      for (let wW of WW.facet(RW)) MW = wW(MW, WW);
      return MW
    }

    function ow(WW, RW) {
      RW = Iw(WW.state, ER, RW);
      let MW, {
          state: CW
        } = WW,
        zR = 1,
        AW = CW.toText(RW),
        bR = AW.lines == CW.selection.WA.length;
      if (null != jC && CW.selection.WA.every((WW => WW.empty)) && jC == AW.toString()) {
        let WW = -1;
        MW = CW.changeByRange((MW => {
          let yR = CW.doc.lineAt(MW.from);
          if (yR.from == WW) return {
            range: MW
          };
          WW = yR.from;
          let NW = CW.toText((bR ? AW.line(zR++).text : RW) + CW.lineBreak);
          return {
            changes: {
              from: yR.from,
              insert: NW
            },
            range: wW.j.cursor(MW.from + NW.length)
          }
        }))
      } else MW = bR ? CW.changeByRange((WW => {
        let RW = AW.line(zR++);
        return {
          changes: {
            from: WW.from,
            to: WW.to,
            insert: RW.text
          },
          range: wW.j.cursor(WW.from + RW.length)
        }
      })) : CW.replaceSelection(AW);
      WW.dispatch(MW, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function lw(WW, RW, MW, CW) {
      if (1 == CW) return wW.j.cursor(RW, MW);
      if (2 == CW) return function(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          CW = WW.charCategorizer(RW),
          zR = WW.doc.lineAt(RW),
          AW = RW - zR.from;
        if (0 == zR.length) return wW.j.cursor(RW);
        0 == AW ? MW = 1 : AW == zR.length && (MW = -1);
        let bR = AW,
          yR = AW;
        MW < 0 ? bR = (0, wW.S)(zR.text, AW, !1) : yR = (0, wW.S)(zR.text, AW);
        let NW = CW(zR.text.slice(bR, yR));
        for (; bR > 0;) {
          let WW = (0, wW.S)(zR.text, bR, !1);
          if (CW(zR.text.slice(WW, bR)) != NW) break;
          bR = WW
        }
        for (; yR < zR.length;) {
          let WW = (0, wW.S)(zR.text, yR);
          if (CW(zR.text.slice(yR, WW)) != NW) break;
          yR = WW
        }
        return wW.j.range(bR + zR.from, yR + zR.from)
      }(WW.state, RW, MW);
      {
        let CW = WW.docView.lineAt(RW, MW),
          zR = WW.state.doc.lineAt(CW ? CW.posAtEnd : RW),
          AW = CW ? CW.posAtStart : zR.from,
          bR = CW ? CW.posAtEnd : zR.to;
        return bR < WW.state.doc.length && bR == zR.to && bR++, wW.j.range(AW, bR)
      }
    }
    Jw.scroll = WW => {
      WW.inputState.lastScrollTop = WW.scrollDOM.scrollTop, WW.inputState.lastScrollLeft = WW.scrollDOM.scrollLeft
    }, Jw.wheel = Jw.mousewheel = WW => {
      WW.inputState.lastWheelEvent = Date.now()
    }, Yw.keydown = (WW, RW) => (WW.inputState.setSelectionOrigin("select"), 27 == RW.keyCode && 0 != WW.inputState.tabFocusMode && (WW.inputState.tabFocusMode = Date.now() + 2e3), !1), Jw.touchstart = (WW, RW) => {
      let MW = WW.inputState,
        wW = RW.targetTouches[0];
      MW.lastTouchTime = Date.now(), wW && (MW.lastTouchX = wW.clientX, MW.lastTouchY = wW.clientY), MW.setSelectionOrigin("select.pointer")
    }, Jw.touchmove = WW => {
      WW.inputState.setSelectionOrigin("select.pointer")
    }, Yw.mousedown = (WW, RW) => {
      if (WW.observer.flush(), WW.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let MW = null;
      for (let wW of WW.state.facet(sR))
        if (MW = wW(WW, RW), MW) break;
      if (MW || 0 != RW.button || (MW = function(WW, RW) {
          let MW = WW.posAndSideAtCoords({
              x: RW.clientX,
              y: RW.clientY
            }, !1),
            CW = cC(RW),
            zR = WW.state.selection;
          return {
            update(WW) {
              WW.docChanged && (MW.pos = WW.changes.mapPos(MW.pos), zR = zR.map(WW.changes))
            },
            get(RW, AW, bR) {
              let yR, NW = WW.posAndSideAtCoords({
                  x: RW.clientX,
                  y: RW.clientY
                }, !1),
                eW = lw(WW, NW.pos, NW.assoc, CW);
              if (MW.pos != NW.pos && !AW) {
                let RW = lw(WW, MW.pos, MW.assoc, CW),
                  zR = Math.min(RW.from, eW.from),
                  AW = Math.max(RW.to, eW.to);
                eW = zR < eW.from ? wW.j.range(zR, AW, eW.assoc) : wW.j.range(AW, zR, eW.assoc)
              }
              return AW ? zR.replaceRange(zR.main.extend(eW.from, eW.to, eW.assoc)) : bR && 1 == CW && zR.WA.length > 1 && (yR = function(WW, RW) {
                for (let MW = 0; MW < WW.WA.length; MW++) {
                  let {
                    from: CW,
                    to: zR
                  } = WW.WA[MW];
                  if (CW <= RW && zR >= RW) return wW.j.create(WW.WA.slice(0, MW).concat(WW.WA.slice(MW + 1)), WW.mainIndex == MW ? 0 : WW.mainIndex - (WW.mainIndex > MW ? 1 : 0))
                }
                return null
              }(zR, NW.pos)) ? yR : bR ? zR.addRange(eW) : wW.j.create([eW])
            }
          }
        }(WW, RW)), MW) {
        let wW = !WW.hasFocus;
        WW.inputState.startMouseSelection(new iC(WW, RW, MW, wW)), wW && WW.observer.ignore((() => {
          MR(WW.contentDOM);
          let RW = WW.root.activeElement;
          RW && !RW.contains(WW.contentDOM) && RW.blur()
        }));
        let CW = WW.inputState.mouseSelection;
        if (CW) return CW.start(RW), !1 === CW.dragging
      } else WW.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const Fw = fW.ie && fW.ie_version <= 11;
    let fw = null,
      Qw = 0,
      rC = 0;

    function cC(WW) {
      if (!Fw) return WW.detail;
      let RW = fw,
        MW = rC;
      return fw = WW, rC = Date.now(), Qw = !RW || MW > Date.now() - 400 && Math.abs(RW.clientX - WW.clientX) < 2 && Math.abs(RW.clientY - WW.clientY) < 2 ? (Qw + 1) % 3 : 1
    }

    function Xw(WW, RW, MW, wW) {
      if (!(MW = Iw(WW.state, ER, MW))) return;
      let CW = WW.posAtCoords({
          x: RW.clientX,
          y: RW.clientY
        }, !1),
        {
          draggedContent: zR
        } = WW.inputState,
        AW = wW && zR && function(WW, RW) {
          let MW = WW.state.facet(aM);
          return MW.length ? MW[0](RW) : fW.mac ? !RW.altKey : !RW.ctrlKey
        }(WW, RW) ? {
          from: zR.from,
          to: zR.to
        } : null,
        bR = {
          from: CW,
          insert: MW
        },
        yR = WW.state.changes(AW ? [AW, bR] : bR);
      WW.focus(), WW.dispatch({
        changes: yR,
        selection: {
          anchor: yR.mapPos(CW, -1),
          head: yR.mapPos(CW, 1)
        },
        userEvent: AW ? "move.drop" : "input.drop"
      }), WW.inputState.draggedContent = null
    }
    Yw.dragstart = (WW, RW) => {
      let {
        selection: {
          main: MW
        }
      } = WW.state;
      if (RW.target.draggable) {
        let CW = WW.docView.tile.nearest(RW.target);
        if (CW && CW.isWidget()) {
          let WW = CW.posAtStart,
            RW = WW + CW.length;
          (WW >= MW.to || RW <= MW.from) && (MW = wW.j.range(WW, RW))
        }
      }
      let {
        inputState: CW
      } = WW;
      return CW.mouseSelection && (CW.mouseSelection.dragging = !0), CW.draggedContent = MW, RW.dataTransfer && (RW.dataTransfer.setData("Text", Iw(WW.state, VR, WW.state.sliceDoc(MW.from, MW.to))), RW.dataTransfer.effectAllowed = "copyMove"), !1
    }, Yw.dragend = WW => (WW.inputState.draggedContent = null, !1), Yw.drop = (WW, RW) => {
      if (!RW.dataTransfer) return !1;
      if (WW.state.readOnly) return !0;
      let MW = RW.dataTransfer.files;
      if (MW && MW.length) {
        let wW = Array(MW.length),
          CW = 0,
          zR = () => {
            ++CW == MW.length && Xw(WW, RW, wW.filter((WW => null != WW)).join(WW.state.lineBreak), !1)
          };
        for (let WW = 0; WW < MW.length; WW++) {
          let RW = new FileReader;
          RW.onerror = zR, RW.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(RW.result) || (wW[WW] = RW.result), zR()
          }, RW.readAsText(MW[WW])
        }
        return !0
      } {
        let MW = RW.dataTransfer.getData("Text");
        if (MW) return Xw(WW, RW, MW, !0), !0
      }
      return !1
    }, Yw.paste = (WW, RW) => {
      if (WW.state.readOnly) return !0;
      WW.observer.flush();
      let MW = Pw ? null : RW.clipboardData;
      return MW ? (ow(WW, MW.getData("text/plain") || MW.getData("text/uri-list")), !0) : (function(WW) {
        let RW = WW.dom.parentNode;
        if (!RW) return;
        let MW = RW.appendChild(document.createElement("textarea"));
        MW.style.cssText = "position: fixed; left: -10000px; top: 10px", MW.focus(), setTimeout((() => {
          WW.focus(), MW.remove(), ow(WW, MW.value)
        }), 50)
      }(WW), !1)
    };
    let jC = null;
    Yw.copy = Yw.cut = (WW, RW) => {
      if (!vR(WW.contentDOM, WW.observer.selectionRange)) return !1;
      let {
        text: MW,
        WA: wW,
        linewise: CW
      } = function(WW) {
        let RW = [],
          MW = [],
          wW = !1;
        for (let CW of WW.selection.WA) CW.empty || (RW.push(WW.sliceDoc(CW.from, CW.to)), MW.push(CW));
        if (!RW.length) {
          let CW = -1;
          for (let {
              from: wW
            }
            of WW.selection.WA) {
            let zR = WW.doc.lineAt(wW);
            zR.number > CW && (RW.push(zR.text), MW.push({
              from: zR.from,
              to: Math.min(WW.doc.length, zR.to + 1)
            })), CW = zR.number
          }
          wW = !0
        }
        return {
          text: Iw(WW, VR, RW.join(WW.lineBreak)),
          WA: MW,
          linewise: wW
        }
      }(WW.state);
      if (!MW && !CW) return !1;
      jC = CW ? MW : null, "cut" != RW.type || WW.state.readOnly || WW.dispatch({
        changes: wW,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let zR = Pw ? null : RW.clipboardData;
      return zR ? (zR.clearData(), zR.setData("text/plain", MW), !0) : (function(WW, RW) {
        let MW = WW.dom.parentNode;
        if (!MW) return;
        let wW = MW.appendChild(document.createElement("textarea"));
        wW.style.cssText = "position: fixed; left: -10000px; top: 10px", wW.value = RW, wW.focus(), wW.selectionEnd = RW.length, wW.selectionStart = 0, setTimeout((() => {
          wW.remove(), WW.focus()
        }), 50)
      }(WW, MW), !1)
    };
    const kC = wW.d.define();

    function aC(WW, RW) {
      let MW = [];
      for (let wW of WW.facet(UR)) {
        let CW = wW(WW, RW);
        CW && MW.push(CW)
      }
      return MW.length ? WW.update({
        effects: MW,
        annotations: kC.of(!0)
      }) : null
    }

    function sw(WW) {
      setTimeout((() => {
        let RW = WW.hasFocus;
        if (RW != WW.inputState.notifiedFocused) {
          let MW = aC(WW.state, RW);
          MW ? WW.dispatch(MW) : WW.update([])
        }
      }), 10)
    }
    Jw.focus = WW => {
      WW.inputState.lastFocusTime = Date.now(), WW.scrollDOM.scrollTop || !WW.inputState.lastScrollTop && !WW.inputState.lastScrollLeft || (WW.scrollDOM.scrollTop = WW.inputState.lastScrollTop, WW.scrollDOM.scrollLeft = WW.inputState.lastScrollLeft), sw(WW)
    }, Jw.blur = WW => {
      WW.observer.clearSelectionRange(), sw(WW)
    }, Jw.compositionstart = Jw.compositionupdate = WW => {
      WW.observer.editContext || (null == WW.inputState.compositionFirstChange && (WW.inputState.compositionFirstChange = !0), WW.inputState.composing < 0 && (WW.inputState.composing = 0))
    }, Jw.compositionend = WW => {
      WW.observer.editContext || (WW.inputState.composing = -1, WW.inputState.compositionEndedAt = Date.now(), WW.inputState.compositionPendingKey = !0, WW.inputState.compositionPendingChange = WW.observer.pendingRecords().length > 0, WW.inputState.compositionFirstChange = null, fW.chrome && fW.android ? WW.observer.flushSoon() : WW.inputState.compositionPendingChange ? Promise.resolve().then((() => WW.observer.flush())) : setTimeout((() => {
        WW.inputState.composing < 0 && WW.docView.hasComposition && WW.update([])
      }), 50))
    }, Jw.contextmenu = WW => {
      WW.inputState.lastContextMenu = Date.now()
    }, Yw.beforeinput = (WW, RW) => {
      var MW, wW;
      if ("insertText" != RW.inputType && "insertCompositionText" != RW.inputType || (WW.inputState.insertingText = RW.data, WW.inputState.insertingTextAt = Date.now()), "insertReplacementText" == RW.inputType && WW.observer.editContext) {
        let wW = null === (MW = RW.dataTransfer) || void 0 === MW ? void 0 : MW.getData("text/plain"),
          CW = RW.getTargetRanges();
        if (wW && CW.length) {
          let RW = CW[0],
            MW = WW.posAtDOM(RW.startContainer, RW.startOffset),
            zR = WW.posAtDOM(RW.endContainer, RW.endOffset);
          return zC(WW, {
            from: MW,
            to: zR,
            insert: WW.state.toText(wW)
          }, null), !0
        }
      }
      let CW;
      if (fW.chrome && fW.android && (CW = Bw.find((WW => WW.inputType == RW.inputType))) && (WW.observer.delayAndroidKey(CW.key, CW.keyCode), "Backspace" == CW.key || "Delete" == CW.key)) {
        let RW = (null === (wW = window.visualViewport) || void 0 === wW ? void 0 : wW.height) || 0;
        setTimeout((() => {
          var MW;
          ((null === (MW = window.visualViewport) || void 0 === MW ? void 0 : MW.height) || 0) > RW + 10 && WW.hasFocus && (WW.contentDOM.blur(), WW.focus())
        }), 100)
      }
      return fW.ios && "deleteContentForward" == RW.inputType && WW.observer.flushSoon(), fW.safari && "insertText" == RW.inputType && WW.inputState.composing >= 0 && setTimeout((() => Jw.compositionend(WW, RW)), 20), !1
    };
    const dw = new Set;
    const pw = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let hw = !1;

    function Uw() {
      hw = !1
    }
    class Ew {
      constructor(WW) {
        this.lineWrapping = WW, this.doc = wW.D.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(WW, RW) {
        let MW = this.doc.lineAt(RW).number - this.doc.lineAt(WW).number + 1;
        return this.lineWrapping && (MW += Math.max(0, Math.ceil((RW - WW - MW * this.lineLength * .5) / this.lineLength))), this.lineHeight * MW
      }
      heightForLine(WW) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((WW - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(WW) {
        return this.doc = WW, this
      }
      mustRefreshForWrapping(WW) {
        return pw.indexOf(WW) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(WW) {
        let RW = !1;
        for (let MW = 0; MW < WW.length; MW++) {
          let wW = WW[MW];
          wW < 0 ? MW++ : this.heightSamples[Math.floor(10 * wW)] || (RW = !0, this.heightSamples[Math.floor(10 * wW)] = !0)
        }
        return RW
      }
      refresh(WW, RW, MW, wW, CW, zR) {
        let AW = pw.indexOf(WW) > -1,
          bR = Math.abs(RW - this.lineHeight) > .3 || this.lineWrapping != AW || Math.abs(MW - this.charWidth) > .1;
        if (this.lineWrapping = AW, this.lineHeight = RW, this.charWidth = MW, this.textHeight = wW, this.lineLength = CW, bR) {
          this.heightSamples = {};
          for (let WW = 0; WW < zR.length; WW++) {
            let RW = zR[WW];
            RW < 0 ? WW++ : this.heightSamples[Math.floor(10 * RW)] = !0
          }
        }
        return bR
      }
    }
    class Vw {
      constructor(WW, RW) {
        this.from = WW, this.heights = RW, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class mC {
      constructor(WW, RW, MW, wW, CW) {
        this.from = WW, this.length = RW, this.top = MW, this.height = wW, this._content = CW
      }
      get type() {
        return "number" == typeof this._content ? aR.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof hW ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(WW) {
        let RW = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(WW._content) ? WW._content : [WW]);
        return new mC(this.from, this.length + WW.length, this.top, this.height + WW.height, RW)
      }
    }
    var xC = function(WW) {
      return WW[WW.ByPos = 0] = "ByPos", WW[WW.ByHeight = 1] = "ByHeight", WW[WW.ByPosNoHeight = 2] = "ByPosNoHeight", WW
    }(xC || (xC = {}));
    const vC = .001;
    class Kw {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = WW, this.height = RW, this.flags = MW
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(WW) {
        this.flags = (WW ? 2 : 0) | -3 & this.flags
      }
      setHeight(WW) {
        this.height != WW && (Math.abs(this.height - WW) > vC && (hw = !0), this.height = WW)
      }
      replace(WW, RW, MW) {
        return Kw.of(MW)
      }
      decomposeLeft(WW, RW) {
        RW.push(this)
      }
      decomposeRight(WW, RW) {
        RW.push(this)
      }
      applyChanges(WW, RW, MW, wW) {
        let CW = this,
          zR = MW.doc;
        for (let AW = wW.length - 1; AW >= 0; AW--) {
          let {
            fromA: bR,
            toA: yR,
            fromB: NW,
            toB: eW
          } = wW[AW], BW = CW.lineAt(bR, xC.ByPosNoHeight, MW.setDoc(RW), 0, 0), tR = BW.to >= yR ? BW : CW.lineAt(yR, xC.ByPosNoHeight, MW, 0, 0);
          for (eW += tR.to - yR, yR = tR.to; AW > 0 && BW.from <= wW[AW - 1].toA;) bR = wW[AW - 1].fromA, NW = wW[AW - 1].fromB, AW--, bR < BW.from && (BW = CW.lineAt(bR, xC.ByPosNoHeight, MW, 0, 0));
          NW += BW.from - bR, bR = BW.from;
          let TW = qC.build(MW.setDoc(zR), WW, NW, eW);
          CW = uw(CW, CW.replace(bR, yR, TW))
        }
        return CW.updateHeight(MW, 0)
      }
      static empty() {
        return new Gw(0, 0, 0)
      }
      static of (WW) {
        if (1 == WW.length) return WW[0];
        let RW = 0,
          MW = WW.length,
          wW = 0,
          CW = 0;
        for (;;)
          if (RW == MW)
            if (wW > 2 * CW) {
              let CW = WW[RW - 1];
              CW.break ? WW.splice(--RW, 1, CW.left, null, CW.right) : WW.splice(--RW, 1, CW.left, CW.right), MW += 1 + CW.break, wW -= CW.size
            } else {
              if (!(CW > 2 * wW)) break;
              {
                let RW = WW[MW];
                RW.break ? WW.splice(MW, 1, RW.left, null, RW.right) : WW.splice(MW, 1, RW.left, RW.right), MW += 2 + RW.break, CW -= RW.size
              }
            }
        else if (wW < CW) {
          let MW = WW[RW++];
          MW && (wW += MW.size)
        } else {
          let RW = WW[--MW];
          RW && (CW += RW.size)
        }
        let zR = 0;
        return null == WW[RW - 1] ? (zR = 1, RW--) : null == WW[RW] && (zR = 1, MW++), new Hw(Kw.of(WW.slice(0, RW)), zR, Kw.of(WW.slice(MW)))
      }
    }

    function uw(WW, RW) {
      return WW == RW ? WW : (WW.constructor != RW.constructor && (hw = !0), RW)
    }
    Kw.prototype.size = 1;
    const Ow = sW.replace({});
    class nw extends Kw {
      constructor(WW, RW, MW) {
        super(WW, RW), this.deco = MW, this.spaceAbove = 0
      }
      mainBlock(WW, RW) {
        return new mC(RW, this.length, WW + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(WW, RW, MW, wW) {
        return this.spaceAbove && WW < MW + this.spaceAbove ? new mC(wW, 0, MW, this.spaceAbove, Ow) : this.mainBlock(MW, wW)
      }
      lineAt(WW, RW, MW, wW, CW) {
        let zR = this.mainBlock(wW, CW);
        return this.spaceAbove ? this.blockAt(0, MW, wW, CW).join(zR) : zR
      }
      forEachLine(WW, RW, MW, wW, CW, zR) {
        WW <= CW + this.length && RW >= CW && zR(this.lineAt(0, xC.ByPos, MW, wW, CW))
      }
      setMeasuredHeight(WW) {
        let RW = WW.heights[WW.index++];
        RW < 0 ? (this.spaceAbove = -RW, RW = WW.heights[WW.index++]) : this.spaceAbove = 0, this.setHeight(RW)
      }
      updateHeight(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 3 ? arguments[3] : void 0;
        return MW && MW.from <= RW && MW.more && this.setMeasuredHeight(MW), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class Gw extends nw {
      constructor(WW, RW, MW) {
        super(WW, RW, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = MW
      }
      mainBlock(WW, RW) {
        return new mC(RW, this.length, WW + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(WW, RW, MW) {
        let wW = MW[0];
        return 1 == MW.length && (wW instanceof Gw || wW instanceof Lw && 4 & wW.flags) && Math.abs(this.length - wW.length) < 10 ? (wW instanceof Lw ? wW = new Gw(wW.length, this.height, this.spaceAbove) : wW.height = this.height, this.outdated || (wW.outdated = !1), wW) : Kw.of(MW)
      }
      updateHeight(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = arguments.length > 3 ? arguments[3] : void 0;
        return wW && wW.from <= RW && wW.more ? this.setMeasuredHeight(wW) : (MW || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, WW.heightForLine(this.length - this.collapsed)) + this.breaks * WW.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class Lw extends Kw {
      constructor(WW) {
        super(WW, 0)
      }
      heightMetrics(WW, RW) {
        let MW, wW = WW.doc.lineAt(RW).number,
          CW = WW.doc.lineAt(RW + this.length).number,
          zR = CW - wW + 1,
          AW = 0;
        if (WW.lineWrapping) {
          let RW = Math.min(this.height, WW.lineHeight * zR);
          MW = RW / zR, this.length > zR + 1 && (AW = (this.height - RW) / (this.length - zR - 1))
        } else MW = this.height / zR;
        return {
          firstLine: wW,
          lastLine: CW,
          perLine: MW,
          perChar: AW
        }
      }
      blockAt(WW, RW, MW, wW) {
        let {
          firstLine: CW,
          lastLine: zR,
          perLine: AW,
          perChar: bR
        } = this.heightMetrics(RW, wW);
        if (RW.lineWrapping) {
          let CW = wW + (WW < RW.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (WW - MW) / this.height)) * this.length)),
            zR = RW.doc.lineAt(CW),
            yR = AW + zR.length * bR,
            NW = Math.max(MW, WW - yR / 2);
          return new mC(zR.from, zR.length, NW, yR, 0)
        } {
          let wW = Math.max(0, Math.min(zR - CW, Math.floor((WW - MW) / AW))),
            {
              from: bR,
              length: yR
            } = RW.doc.line(CW + wW);
          return new mC(bR, yR, MW + AW * wW, AW, 0)
        }
      }
      lineAt(WW, RW, MW, wW, CW) {
        if (RW == xC.ByHeight) return this.blockAt(WW, MW, wW, CW);
        if (RW == xC.ByPosNoHeight) {
          let {
            from: RW,
            to: wW
          } = MW.doc.lineAt(WW);
          return new mC(RW, wW - RW, 0, 0, 0)
        }
        let {
          firstLine: zR,
          perLine: AW,
          perChar: bR
        } = this.heightMetrics(MW, CW), yR = MW.doc.lineAt(WW), NW = AW + yR.length * bR, eW = yR.number - zR, BW = wW + AW * eW + bR * (yR.from - CW - eW);
        return new mC(yR.from, yR.length, Math.max(wW, Math.min(BW, wW + this.height - NW)), NW, 0)
      }
      forEachLine(WW, RW, MW, wW, CW, zR) {
        WW = Math.max(WW, CW), RW = Math.min(RW, CW + this.length);
        let {
          firstLine: AW,
          perLine: bR,
          perChar: yR
        } = this.heightMetrics(MW, CW);
        for (let NW = WW, eW = wW; NW <= RW;) {
          let RW = MW.doc.lineAt(NW);
          if (NW == WW) {
            let MW = RW.number - AW;
            eW += bR * MW + yR * (WW - CW - MW)
          }
          let wW = bR + yR * RW.length;
          zR(new mC(RW.from, RW.length, eW, wW, 0)), eW += wW, NW = RW.to + 1
        }
      }
      replace(WW, RW, MW) {
        let wW = this.length - RW;
        if (wW > 0) {
          let WW = MW[MW.length - 1];
          WW instanceof Lw ? MW[MW.length - 1] = new Lw(WW.length + wW) : MW.push(null, new Lw(wW - 1))
        }
        if (WW > 0) {
          let RW = MW[0];
          RW instanceof Lw ? MW[0] = new Lw(WW + RW.length) : MW.unshift(new Lw(WW - 1), null)
        }
        return Kw.of(MW)
      }
      decomposeLeft(WW, RW) {
        RW.push(new Lw(WW - 1), null)
      }
      decomposeRight(WW, RW) {
        RW.push(null, new Lw(this.length - WW - 1))
      }
      updateHeight(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = arguments.length > 3 ? arguments[3] : void 0,
          CW = RW + this.length;
        if (wW && wW.from <= RW + this.length && wW.more) {
          let MW = [],
            zR = Math.max(RW, wW.from),
            AW = -1;
          for (wW.from > RW && MW.push(new Lw(wW.from - RW - 1).updateHeight(WW, RW)); zR <= CW && wW.more;) {
            let RW = WW.doc.lineAt(zR).length;
            MW.length && MW.push(null);
            let CW = wW.heights[wW.index++],
              bR = 0;
            CW < 0 && (bR = -CW, CW = wW.heights[wW.index++]), -1 == AW ? AW = CW : Math.abs(CW - AW) >= vC && (AW = -2);
            let yR = new Gw(RW, CW, bR);
            yR.outdated = !1, MW.push(yR), zR += RW + 1
          }
          zR <= CW && MW.push(null, new Lw(CW - zR).updateHeight(WW, zR));
          let bR = Kw.of(MW);
          return (AW < 0 || Math.abs(bR.height - this.height) >= vC || Math.abs(AW - this.heightMetrics(WW, RW).perLine) >= vC) && (hw = !0), uw(this, bR)
        }
        return (MW || this.outdated) && (this.setHeight(WW.heightForGap(RW, RW + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class Hw extends Kw {
      constructor(WW, RW, MW) {
        super(WW.length + RW + MW.length, WW.height + MW.height, RW | (WW.outdated || MW.outdated ? 2 : 0)), this.left = WW, this.right = MW, this.size = WW.size + MW.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(WW, RW, MW, wW) {
        let CW = MW + this.left.height;
        return WW < CW ? this.left.blockAt(WW, RW, MW, wW) : this.right.blockAt(WW, RW, CW, wW + this.left.length + this.break)
      }
      lineAt(WW, RW, MW, wW, CW) {
        let zR = wW + this.left.height,
          AW = CW + this.left.length + this.break,
          bR = RW == xC.ByHeight ? WW < zR : WW < AW,
          yR = bR ? this.left.lineAt(WW, RW, MW, wW, CW) : this.right.lineAt(WW, RW, MW, zR, AW);
        if (this.break || (bR ? yR.to < AW : yR.from > AW)) return yR;
        let NW = RW == xC.ByPosNoHeight ? xC.ByPosNoHeight : xC.ByPos;
        return bR ? yR.join(this.right.lineAt(AW, NW, MW, zR, AW)) : this.left.lineAt(AW, NW, MW, wW, CW).join(yR)
      }
      forEachLine(WW, RW, MW, wW, CW, zR) {
        let AW = wW + this.left.height,
          bR = CW + this.left.length + this.break;
        if (this.break) WW < bR && this.left.forEachLine(WW, RW, MW, wW, CW, zR), RW >= bR && this.right.forEachLine(WW, RW, MW, AW, bR, zR);
        else {
          let yR = this.lineAt(bR, xC.ByPos, MW, wW, CW);
          WW < yR.from && this.left.forEachLine(WW, yR.from - 1, MW, wW, CW, zR), yR.to >= WW && yR.from <= RW && zR(yR), RW > yR.to && this.right.forEachLine(yR.to + 1, RW, MW, AW, bR, zR)
        }
      }
      replace(WW, RW, MW) {
        let wW = this.left.length + this.break;
        if (RW < wW) return this.balanced(this.left.replace(WW, RW, MW), this.right);
        if (WW > this.left.length) return this.balanced(this.left, this.right.replace(WW - wW, RW - wW, MW));
        let CW = [];
        WW > 0 && this.decomposeLeft(WW, CW);
        let zR = CW.length;
        for (let AW of MW) CW.push(AW);
        if (WW > 0 && Dw(CW, zR - 1), RW < this.length) {
          let WW = CW.length;
          this.decomposeRight(RW, CW), Dw(CW, WW)
        }
        return Kw.of(CW)
      }
      decomposeLeft(WW, RW) {
        let MW = this.left.length;
        if (WW <= MW) return this.left.decomposeLeft(WW, RW);
        RW.push(this.left), this.break && (MW++, WW >= MW && RW.push(null)), WW > MW && this.right.decomposeLeft(WW - MW, RW)
      }
      decomposeRight(WW, RW) {
        let MW = this.left.length,
          wW = MW + this.break;
        if (WW >= wW) return this.right.decomposeRight(WW - wW, RW);
        WW < MW && this.left.decomposeRight(WW, RW), this.break && WW < wW && RW.push(null), RW.push(this.right)
      }
      balanced(WW, RW) {
        return WW.size > 2 * RW.size || RW.size > 2 * WW.size ? Kw.of(this.break ? [WW, null, RW] : [WW, RW]) : (this.left = uw(this.left, WW), this.right = uw(this.right, RW), this.setHeight(WW.height + RW.height), this.outdated = WW.outdated || RW.outdated, this.size = WW.size + RW.size, this.length = WW.length + this.break+RW.length, this)
      }
      updateHeight(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: CW,
            right: zR
          } = this,
          AW = RW + CW.length + this.break,
          bR = null;
        return wW && wW.from <= RW + CW.length && wW.more ? bR = CW = CW.updateHeight(WW, RW, MW, wW) : CW.updateHeight(WW, RW, MW), wW && wW.from <= AW + zR.length && wW.more ? bR = zR = zR.updateHeight(WW, AW, MW, wW) : zR.updateHeight(WW, AW, MW), bR ? this.balanced(CW, zR) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function Dw(WW, RW) {
      let MW, wW;
      null == WW[RW] && (MW = WW[RW - 1]) instanceof Lw && (wW = WW[RW + 1]) instanceof Lw && WW.splice(RW - 1, 3, new Lw(MW.length + 1 + wW.length))
    }
    class qC {
      constructor(WW, RW) {
        this.pos = WW, this.oracle = RW, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = WW
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(WW, RW) {
        if (this.lineStart > -1) {
          let WW = Math.min(RW, this.lineEnd),
            MW = this.nodes[this.nodes.length - 1];
          MW instanceof Gw ? MW.length += WW - this.pos : (WW > this.pos || !this.isCovered) && this.nodes.push(new Gw(WW - this.pos, -1, 0)), this.writtenTo = WW, RW > WW && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = RW
      }
      point(WW, RW, MW) {
        if (WW < RW || MW.heightRelevant) {
          let wW = MW.widget ? MW.widget.estimatedHeight : 0,
            CW = MW.widget ? MW.widget.lineBreaks : 0;
          wW < 0 && (wW = this.oracle.lineHeight);
          let zR = RW - WW;
          MW.block ? this.BbW(new nw(zR, wW, MW)) : (zR || CW || wW >= 5) && this.addLineDeco(wW, CW, zR)
        } else RW > WW && this.span(WW, RW);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: WW,
          to: RW
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = WW, this.lineEnd = RW, this.writtenTo < WW && ((this.writtenTo < WW - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, WW - 1)), this.nodes.push(null)), this.pos > WW && this.nodes.push(new Gw(this.pos - WW, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(WW, RW) {
        let MW = new Lw(RW - WW);
        return this.oracle.doc.lineAt(WW).to == RW && (MW.flags |= 4), MW
      }
      ensureLine() {
        this.enterLine();
        let WW = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (WW instanceof Gw) return WW;
        let RW = new Gw(0, -1, 0);
        return this.nodes.push(RW), RW
      }
      BbW(WW) {
        this.enterLine();
        let RW = WW.deco;
        RW && RW.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(WW), this.writtenTo = this.pos = this.pos + WW.length, RW && RW.endSide > 0 && (this.covering = WW)
      }
      addLineDeco(WW, RW, MW) {
        let wW = this.ensureLine();
        wW.length += MW, wW.collapsed += MW, wW.widgetHeight = Math.max(wW.widgetHeight, WW), wW.breaks += RW, this.writtenTo = this.pos = this.pos + MW
      }
      finish(WW) {
        let RW = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || RW instanceof Gw || this.isCovered ? (this.writtenTo < this.pos || null == RW) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new Gw(0, -1, 0));
        let MW = WW;
        for (let wW of this.nodes) wW instanceof Gw && wW.updateHeight(this.oracle, MW), MW += wW ? wW.length : 1;
        return this.nodes
      }
      static build(WW, RW, MW, CW) {
        let zR = new qC(MW, WW);
        return wW.s.spans(RW, MW, CW, zR, 0), zR.finish(MW)
      }
    }
    class Zw {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(WW, RW, MW, wW) {
        (WW < RW || MW && MW.heightRelevant || wW && wW.heightRelevant) && EW(WW, RW, this.changes, 5)
      }
    }

    function Sw(WW, RW) {
      let MW = WW.getBoundingClientRect(),
        wW = WW.ownerDocument,
        CW = wW.defaultView || window,
        zR = Math.max(0, MW.left),
        AW = Math.min(CW.innerWidth, MW.right),
        bR = Math.max(0, MW.top),
        yR = Math.min(CW.innerHeight, MW.bottom);
      for (let NW = WW.parentNode; NW && NW != wW.body;)
        if (1 == NW.nodeType) {
          let RW = NW,
            MW = window.getComputedStyle(RW);
          if ((RW.scrollHeight > RW.clientHeight || RW.scrollWidth > RW.clientWidth) && "visible" != MW.overflow) {
            let MW = RW.getBoundingClientRect();
            zR = Math.max(zR, MW.left), AW = Math.min(AW, MW.right), bR = Math.max(bR, MW.top), yR = Math.min(NW == WW.parentNode ? CW.innerHeight : yR, MW.bottom)
          }
          NW = "absolute" == MW.position || "fixed" == MW.position ? RW.offsetParent : RW.parentNode
        } else {
          if (11 != NW.nodeType) break;
          NW = NW.host
        } return {
        left: zR - MW.left,
        right: Math.max(zR, AW) - MW.left,
        top: bR - (MW.top + RW),
        bottom: Math.max(bR, yR) - (MW.top + RW)
      }
    }

    function WC(WW, RW) {
      let MW = WW.getBoundingClientRect();
      return {
        left: 0,
        right: MW.right - MW.left,
        top: RW,
        bottom: MW.bottom - (MW.top + RW)
      }
    }
    class RC {
      constructor(WW, RW, MW, wW) {
        this.from = WW, this.to = RW, this.size = MW, this.displaySize = wW
      }
      static same(WW, RW) {
        if (WW.length != RW.length) return !1;
        for (let MW = 0; MW < WW.length; MW++) {
          let wW = WW[MW],
            CW = RW[MW];
          if (wW.from != CW.from || wW.to != CW.to || wW.size != CW.size) return !1
        }
        return !0
      }
      draw(WW, RW) {
        return sW.replace({
          widget: new MC(this.displaySize * (RW ? WW.scaleY : WW.scaleX), RW)
        }).range(this.from, this.to)
      }
    }
    class MC extends kR {
      constructor(WW, RW) {
        super(), this.size = WW, this.vertical = RW
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
    class wC {
      constructor(WW, RW) {
        this.view = WW, this.state = RW, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = bz, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = NR.LTR, this.EzW = [], this.mustEnforceCursorAssoc = !1;
        let MW = RW.facet(SR).some((WW => "function" != typeof WW && "cm-lineWrapping" == WW.class));
        this.heightOracle = new Ew(MW), this.stateDeco = yz(RW), this.heightMap = Kw.empty().applyChanges(this.stateDeco, wW.D.empty, this.heightOracle.setDoc(RW.doc), [new NM(0, 0, 0, RW.doc.length)]);
        for (let wW = 0; wW < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); wW++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = sW.set(this.lineGaps.map((WW => WW.draw(this, !1)))), this.scrollParent = WW.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let WW = [this.viewport],
          {
            main: RW
          } = this.state.selection;
        for (let MW = 0; MW <= 1; MW++) {
          let wW = MW ? RW.head : RW.anchor;
          if (!WW.some((WW => {
              let {
                from: RW,
                to: MW
              } = WW;
              return wW >= RW && wW <= MW
            }))) {
            let {
              from: RW,
              to: MW
            } = this.lineBlockAt(wW);
            WW.push(new CC(RW, MW))
          }
        }
        return this.viewports = WW.sort(((WW, RW) => WW.from - RW.from)), this.updateScaler()
      }
      updateScaler() {
        let WW = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? bz : new NC(this.heightOracle, this.heightMap, this.viewports), WW.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (WW => {
          this.viewportLines.push(eC(WW, this.scaler))
        }))
      }
      update(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = WW.state;
        let MW = this.stateDeco;
        this.stateDeco = yz(this.state);
        let CW = WW.changedRanges,
          zR = NM.extendWithRanges(CW, function(WW, RW, MW) {
            let CW = new Zw;
            return wW.s.compare(WW, RW, MW, CW, 0), CW.changes
          }(MW, this.stateDeco, WW ? WW.changes : wW.ChangeSet.empty(this.state.doc.length))),
          AW = this.heightMap.height,
          bR = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        Uw(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, WW.startState.doc, this.heightOracle.setDoc(this.state.doc), zR), (this.heightMap.height != AW || hw) && (WW.flags |= 2), bR ? (this.scrollAnchorPos = WW.changes.mapPos(bR.from, -1), this.scrollAnchorHeight = bR.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = AW);
        let yR = zR.length ? this.mapViewport(this.viewport, WW.changes) : this.viewport;
        (RW && (RW.range.head < yR.from || RW.range.head > yR.to) || !this.viewportIsAppropriate(yR)) && (yR = this.getViewport(0, RW));
        let NW = yR.from != this.viewport.from || yR.to != this.viewport.to;
        this.viewport = yR, WW.flags |= this.updateForViewport(), (NW || !WW.changes.empty || 2 & WW.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, WW.changes))), WW.flags |= this.computeVisibleRanges(WW.changes), RW && (this.scrollTarget = RW), !this.mustEnforceCursorAssoc && (WW.selectionSet || WW.focusChanged) && WW.view.lineWrapping && WW.state.selection.main.empty && WW.state.selection.main.assoc && !WW.state.facet(xM) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: WW
        } = this, RW = WW.contentDOM, MW = window.getComputedStyle(RW), CW = this.heightOracle, zR = MW.whiteSpace;
        this.defaultTextDirection = "rtl" == MW.direction ? NR.RTL : NR.LTR;
        let AW = this.heightOracle.mustRefreshForWrapping(zR) || "refresh" === this.mustMeasureContent,
          bR = RW.getBoundingClientRect(),
          yR = AW || this.mustMeasureContent || this.contentDOMHeight != bR.height;
        this.contentDOMHeight = bR.height, this.mustMeasureContent = !1;
        let NW = 0,
          eW = 0;
        if (bR.width && bR.height) {
          let {
            scaleX: WW,
            scaleY: MW
          } = qR(RW, bR);
          (WW > .005 && Math.abs(this.scaleX - WW) > .005 || MW > .005 && Math.abs(this.scaleY - MW) > .005) && (this.scaleX = WW, this.scaleY = MW, NW |= 16, AW = yR = !0)
        }
        let BW = (parseInt(MW.paddingTop) || 0) * this.scaleY,
          tR = (parseInt(MW.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == BW && this.paddingBottom == tR || (this.paddingTop = BW, this.paddingBottom = tR, NW |= 18), this.editorWidth != WW.scrollDOM.clientWidth && (CW.lineWrapping && (yR = !0), this.editorWidth = WW.scrollDOM.clientWidth, NW |= 16);
        let TW = ZW(this.view.contentDOM, !1).y;
        TW != this.scrollParent && (this.scrollParent = TW, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let gR = this.getScrollOffset();
        this.scrollOffset != gR && (this.scrollAnchorHeight = -1, this.scrollOffset = gR), this.scrolledToBottom = zM(this.scrollParent || WW.win);
        let iR = (this.printing ? WC : Sw)(RW, this.paddingTop),
          YW = iR.top - this.pixelViewport.top,
          JW = iR.bottom - this.pixelViewport.bottom;
        this.pixelViewport = iR;
        let PW = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (PW != this.inView && (this.inView = PW, PW && (yR = !0)), !this.inView && !this.scrollTarget && ! function(WW) {
            let RW = WW.getBoundingClientRect(),
              MW = WW.ownerDocument.defaultView || window;
            return RW.left < MW.innerWidth && RW.right > 0 && RW.top < MW.innerHeight && RW.bottom > 0
          }(WW.dom)) return 0;
        let IW = bR.width;
        if (this.contentDOMWidth == IW && this.editorHeight == WW.scrollDOM.clientHeight || (this.contentDOMWidth = bR.width, this.editorHeight = WW.scrollDOM.clientHeight, NW |= 16), yR) {
          let RW = WW.docView.measureVisibleLineHeights(this.viewport);
          if (CW.mustRefreshForHeights(RW) && (AW = !0), AW || CW.lineWrapping && Math.abs(IW - this.contentDOMWidth) > CW.charWidth) {
            let {
              lineHeight: MW,
              charWidth: wW,
              textHeight: bR
            } = WW.docView.measureTextSize();
            AW = MW > 0 && CW.refresh(zR, MW, wW, bR, Math.max(5, IW / wW), RW), AW && (WW.docView.minWidth = 0, NW |= 16)
          }
          YW > 0 && JW > 0 ? eW = Math.max(YW, JW) : YW < 0 && JW < 0 && (eW = Math.min(YW, JW)), Uw();
          for (let MW of this.viewports) {
            let zR = MW.from == this.viewport.from ? RW : WW.docView.measureVisibleLineHeights(MW);
            this.heightMap = (AW ? Kw.empty().applyChanges(this.stateDeco, wW.D.empty, this.heightOracle, [new NM(0, 0, 0, WW.state.doc.length)]) : this.heightMap).updateHeight(CW, 0, AW, new Vw(MW.from, zR))
          }
          hw && (NW |= 2)
        }
        let oW = !this.viewportIsAppropriate(this.viewport, eW) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return oW && (2 & NW && (NW |= this.updateScaler()), this.viewport = this.getViewport(eW, this.scrollTarget), NW |= this.updateForViewport()), (2 & NW || oW) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(AW ? [] : this.lineGaps, WW)), NW |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, WW.docView.enforceCursorAssoc()), NW
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(WW, RW) {
        let MW = .5 - Math.max(-.5, Math.min(.5, WW / 1e3 / 2)),
          wW = this.heightMap,
          CW = this.heightOracle,
          {
            visibleTop: zR,
            visibleBottom: AW
          } = this,
          bR = new CC(wW.lineAt(zR - 1e3 * MW, xC.ByHeight, CW, 0, 0).from, wW.lineAt(AW + 1e3 * (1 - MW), xC.ByHeight, CW, 0, 0).to);
        if (RW) {
          let {
            head: WW
          } = RW.range;
          if (WW < bR.from || WW > bR.to) {
            let MW, zR = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              AW = wW.lineAt(WW, xC.ByPos, CW, 0, 0);
            MW = "center" == RW.y ? (AW.top + AW.bottom) / 2 - zR / 2 : "start" == RW.y || "nearest" == RW.y && WW < bR.from ? AW.top : AW.bottom - zR, bR = new CC(wW.lineAt(MW - 500, xC.ByHeight, CW, 0, 0).from, wW.lineAt(MW + zR + 500, xC.ByHeight, CW, 0, 0).to)
          }
        }
        return bR
      }
      mapViewport(WW, RW) {
        let MW = RW.mapPos(WW.from, -1),
          wW = RW.mapPos(WW.to, 1);
        return new CC(this.heightMap.lineAt(MW, xC.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(wW, xC.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(WW) {
        let {
          from: RW,
          to: MW
        } = WW, wW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: CW
        } = this.heightMap.lineAt(RW, xC.ByPos, this.heightOracle, 0, 0), {
          bottom: zR
        } = this.heightMap.lineAt(MW, xC.ByPos, this.heightOracle, 0, 0), {
          visibleTop: AW,
          visibleBottom: bR
        } = this;
        return (0 == RW || CW <= AW - Math.max(10, Math.min(-wW, 250))) && (MW == this.state.doc.length || zR >= bR + Math.max(10, Math.min(wW, 250))) && CW > AW - 2e3 && zR < bR + 2e3
      }
      mapLineGaps(WW, RW) {
        if (!WW.length || RW.empty) return WW;
        let MW = [];
        for (let wW of WW) RW.touchesRange(wW.from, wW.to) || MW.push(new RC(RW.mapPos(wW.from), RW.mapPos(wW.to), wW.size, wW.displaySize));
        return MW
      }
      ensureLineGaps(WW, RW) {
        let MW = this.heightOracle.lineWrapping,
          CW = MW ? 1e4 : 2e3,
          zR = CW >> 1,
          AW = CW << 1;
        if (this.defaultTextDirection != NR.LTR && !MW) return [];
        let bR = [],
          yR = (CW, AW, NW, eW) => {
            if (AW - CW < zR) return;
            let BW = this.state.selection.main,
              tR = [BW.from];
            BW.empty || tR.push(BW.to);
            for (let WW of tR)
              if (WW > CW && WW < AW) return yR(CW, WW - 10, NW, eW), void yR(WW + 10, AW, NW, eW);
            let TW = function(WW, RW) {
              for (let MW of WW)
                if (RW(MW)) return MW;
              return
            }(WW, (WW => WW.from >= NW.from && WW.to <= NW.to && Math.abs(WW.from - CW) < zR && Math.abs(WW.to - AW) < zR && !tR.some((RW => WW.from < RW && WW.to > RW))));
            if (!TW) {
              if (AW < NW.to && RW && MW && RW.EzW.some((WW => WW.from <= AW && WW.to >= AW))) {
                let WW = RW.moveToLineBoundary(wW.j.cursor(AW), !1, !0).head;
                WW > CW && (AW = WW)
              }
              let WW = this.gapSize(NW, CW, AW, eW);
              TW = new RC(CW, AW, WW, MW || WW < 2e6 ? WW : 2e6)
            }
            bR.push(TW)
          },
          NW = RW => {
            if (RW.length < AW || RW.type != aR.Text) return;
            let zR = function(WW, RW, MW) {
              let CW = [],
                zR = WW,
                AW = 0;
              wW.s.spans(MW, WW, RW, {
                span() {},
                point(WW, RW) {
                  WW > zR && (CW.push({
                    from: zR,
                    to: WW
                  }), AW += WW - zR), zR = RW
                }
              }, 20), zR < RW && (CW.push({
                from: zR,
                to: RW
              }), AW += RW - zR);
              return {
                total: AW,
                WA: CW
              }
            }(RW.from, RW.to, this.stateDeco);
            if (zR.total < AW) return;
            let bR, NW, eW = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (MW) {
              let WW, MW, wW = CW / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != eW) {
                let CW = AC(zR, eW),
                  AW = ((this.visibleBottom - this.visibleTop) / 2 + wW) / RW.height;
                WW = CW - AW, MW = CW + AW
              } else WW = (this.visibleTop - RW.top - wW) / RW.height, MW = (this.visibleBottom - RW.top + wW) / RW.height;
              bR = zz(zR, WW), NW = zz(zR, MW)
            } else {
              let MW = zR.total * this.heightOracle.charWidth,
                wW = CW * this.heightOracle.charWidth,
                AW = 0;
              if (MW > 2e6)
                for (let CW of WW) CW.from >= RW.from && CW.from < RW.to && CW.size != CW.displaySize && CW.from * this.heightOracle.charWidth + AW < this.pixelViewport.left && (AW = CW.size - CW.displaySize);
              let yR, BW, tR = this.pixelViewport.left + AW,
                TW = this.pixelViewport.right + AW;
              if (null != eW) {
                let WW = AC(zR, eW),
                  RW = ((TW - tR) / 2 + wW) / MW;
                yR = WW - RW, BW = WW + RW
              } else yR = (tR - wW) / MW, BW = (TW + wW) / MW;
              bR = zz(zR, yR), NW = zz(zR, BW)
            }
            bR > RW.from && yR(RW.from, bR, RW, zR), NW < RW.to && yR(NW, RW.to, RW, zR)
          };
        for (let wW of this.viewportLines) Array.isArray(wW.type) ? wW.type.forEach(NW) : NW(wW);
        return bR
      }
      gapSize(WW, RW, MW, wW) {
        let CW = AC(wW, MW) - AC(wW, RW);
        return this.heightOracle.lineWrapping ? WW.height * CW : wW.total * this.heightOracle.charWidth * CW
      }
      updateLineGaps(WW) {
        RC.same(WW, this.lineGaps) || (this.lineGaps = WW, this.lineGapDeco = sW.set(WW.map((WW => WW.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(WW) {
        let RW = this.stateDeco;
        this.lineGaps.length && (RW = RW.concat(this.lineGapDeco));
        let MW = [];
        wW.s.spans(RW, this.viewport.from, this.viewport.to, {
          span(WW, RW) {
            MW.push({
              from: WW,
              to: RW
            })
          },
          point() {}
        }, 20);
        let CW = 0;
        if (MW.length != this.EzW.length) CW = 12;
        else
          for (let wW = 0; wW < MW.length && !(8 & CW); wW++) {
            let RW = this.EzW[wW],
              zR = MW[wW];
            RW.from == zR.from && RW.to == zR.to || (CW |= 4, WW && WW.mapPos(RW.from, -1) == zR.from && WW.mapPos(RW.to, 1) == zR.to || (CW |= 8))
          }
        return this.EzW = MW, CW
      }
      lineBlockAt(WW) {
        return WW >= this.viewport.from && WW <= this.viewport.to && this.viewportLines.find((RW => RW.from <= WW && RW.to >= WW)) || eC(this.heightMap.lineAt(WW, xC.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(WW) {
        return WW >= this.viewportLines[0].top && WW <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((RW => RW.top <= WW && RW.bottom >= WW)) || eC(this.heightMap.lineAt(this.scaler.fromDOM(WW), xC.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(WW) {
        let RW = this.lineBlockAtHeight(WW + 8);
        return RW.from >= this.viewport.from || this.viewportLines[0].top - WW > 200 ? RW : this.viewportLines[0]
      }
      elementAtHeight(WW) {
        return eC(this.heightMap.blockAt(this.scaler.fromDOM(WW), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class CC {
      constructor(WW, RW) {
        this.from = WW, this.to = RW
      }
    }

    function zz(WW, RW) {
      let {
        total: MW,
        WA: wW
      } = WW;
      if (RW <= 0) return wW[0].from;
      if (RW >= 1) return wW[wW.length - 1].to;
      let CW = Math.floor(MW * RW);
      for (let zR = 0;; zR++) {
        let {
          from: WW,
          to: RW
        } = wW[zR], MW = RW - WW;
        if (CW <= MW) return WW + CW;
        CW -= MW
      }
    }

    function AC(WW, RW) {
      let MW = 0;
      for (let {
          from: wW,
          to: CW
        }
        of WW.WA) {
        if (RW <= CW) {
          MW += RW - wW;
          break
        }
        MW += CW - wW
      }
      return MW / WW.total
    }
    const bz = {
      toDOM: WW => WW,
      fromDOM: WW => WW,
      scale: 1,
      eq(WW) {
        return WW == this
      }
    };

    function yz(WW) {
      let RW = WW.facet(WM).filter((WW => "function" != typeof WW)),
        MW = WW.facet(MM).filter((WW => "function" != typeof WW));
      return MW.length && RW.push(wW.s.join(MW)), RW
    }
    class NC {
      constructor(WW, RW, MW) {
        let wW = 0,
          CW = 0,
          zR = 0;
        this.viewports = MW.map((MW => {
          let {
            from: CW,
            to: zR
          } = MW, AW = RW.lineAt(CW, xC.ByPos, WW, 0, 0).top, bR = RW.lineAt(zR, xC.ByPos, WW, 0, 0).bottom;
          return wW += bR - AW, {
            from: CW,
            to: zR,
            top: AW,
            bottom: bR,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - wW) / (RW.height - wW);
        for (let AW of this.viewports) AW.domTop = zR + (AW.top - CW) * this.scale, zR = AW.domBottom = AW.domTop + (AW.bottom - AW.top), CW = AW.bottom
      }
      toDOM(WW) {
        for (let RW = 0, MW = 0, wW = 0;; RW++) {
          let CW = RW < this.viewports.length ? this.viewports[RW] : null;
          if (!CW || WW < CW.top) return wW + (WW - MW) * this.scale;
          if (WW <= CW.bottom) return CW.domTop + (WW - CW.top);
          MW = CW.bottom, wW = CW.domBottom
        }
      }
      fromDOM(WW) {
        for (let RW = 0, MW = 0, wW = 0;; RW++) {
          let CW = RW < this.viewports.length ? this.viewports[RW] : null;
          if (!CW || WW < CW.domTop) return MW + (WW - wW) / this.scale;
          if (WW <= CW.domBottom) return CW.top + (WW - CW.domTop);
          MW = CW.bottom, wW = CW.domBottom
        }
      }
      eq(WW) {
        return WW instanceof NC && (this.scale == WW.scale && this.viewports.length == WW.viewports.length && this.viewports.every(((RW, MW) => RW.from == WW.viewports[MW].from && RW.to == WW.viewports[MW].to)))
      }
    }

    function eC(WW, RW) {
      if (1 == RW.scale) return WW;
      let MW = RW.toDOM(WW.top),
        wW = RW.toDOM(WW.bottom);
      return new mC(WW.from, WW.length, MW, wW - MW, Array.isArray(WW._content) ? WW._content.map((WW => eC(WW, RW))) : WW._content)
    }
    const BC = wW.m.define({
        combine: WW => WW.join(" ")
      }),
      tz = wW.m.define({
        combine: WW => WW.indexOf(!0) > -1
      }),
      TC = CW.c.newName(),
      gz = CW.c.newName(),
      iz = CW.c.newName(),
      YC = {
        "&light": "." + gz,
        "&dark": "." + iz
      };

    function JC(WW, RW, MW) {
      return new CW.c(RW, {
        finish: RW => /&/.test(RW) ? RW.replace(/&\w*/, (RW => {
          if ("&" == RW) return WW;
          if (!MW || !MW[RW]) throw new RangeError(`Unsupported selector: ${RW}`);
          return MW[RW]
        })) : WW + " " + RW
      })
    }
    const PC = JC("." + TC, {
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
      }, YC),
      IC = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      oC = fW.ie && fW.ie_version <= 11;
    class lC {
      constructor(WW) {
        this.view = WW, this.active = !1, this.editContext = null, this.selectionRange = new SW, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = WW.contentDOM, this.observer = new MutationObserver((RW => {
          for (let WW of RW) this.queue.push(WW);
          (fW.ie && fW.ie_version <= 11 || fW.ios && WW.composing) && RW.some((WW => "childList" == WW.type && WW.removedNodes.length || "characterData" == WW.type && WW.oldValue.length > WW.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !fW.android || !1 === WW.constructor.EDIT_CONTEXT || fW.chrome && fW.chrome_version < 126 || (this.editContext = new QC(WW), WW.state.facet(GR) && (WW.contentDOM.editContext = this.editContext.editContext)), oC && (this.onCharData = WW => {
          this.queue.push({
            target: WW.target,
            type: "characterData",
            oldValue: WW.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.FQ = this.FQ.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var WW;
          (null === (WW = this.view.docView) || void 0 === WW ? void 0 : WW.lastUpdate) < Date.now() - 75 && this.FQ()
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
      FQ() {
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
        if (this.gapIntersection && (WW.length != this.gaps.length || this.gaps.some(((RW, MW) => RW != WW[MW])))) {
          this.gapIntersection.disconnect();
          for (let RW of WW) this.gapIntersection.observe(RW);
          this.gaps = WW
        }
      }
      onSelectionChange(WW) {
        let RW = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: MW
        } = this, wW = this.selectionRange;
        if (MW.state.facet(GR) ? MW.root.activeElement != this.dom : !vR(this.dom, wW)) return;
        let CW = wW.anchorNode && MW.docView.tile.nearest(wW.anchorNode);
        CW && CW.isWidget() && CW.widget.ignoreEvent(WW) ? RW || (this.selectionChanged = !1) : (fW.ie && fW.ie_version <= 11 || fW.android && fW.chrome) && !MW.state.selection.main.empty && wW.focusNode && uW(wW.focusNode, wW.focusOffset, wW.anchorNode, wW.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: WW
        } = this, RW = mR(WW.root);
        if (!RW) return !1;
        let MW = fW.safari && 11 == WW.root.nodeType && WW.root.activeElement == this.dom && function(WW, RW) {
          if (RW.getComposedRanges) {
            let MW = RW.getComposedRanges(WW.root)[0];
            if (MW) return fC(WW, MW)
          }
          let MW = null;

          function wW(WW) {
            WW.preventDefault(), WW.stopImmediatePropagation(), MW = WW.getTargetRanges()[0]
          }
          return WW.contentDOM.addEventListener("beforeinput", wW, !0), WW.dom.ownerDocument.execCommand("indent"), WW.contentDOM.removeEventListener("beforeinput", wW, !0), MW ? fC(WW, MW) : null
        }(this.view, RW) || RW;
        if (!MW || this.selectionRange.eq(MW)) return !1;
        let wW = vR(this.dom, MW);
        return wW && !this.selectionChanged && WW.inputState.lastFocusTime > Date.now() - 200 && WW.inputState.lastTouchTime < Date.now() - 300 && function(WW, RW) {
          let MW = RW.focusNode,
            wW = RW.focusOffset;
          if (!MW || RW.anchorNode != MW || RW.anchorOffset != wW) return !1;
          for (wW = Math.min(wW, LW(MW));;)
            if (wW) {
              if (1 != MW.nodeType) return !1;
              let WW = MW.childNodes[wW - 1];
              "false" == WW.contentEditable ? wW-- : (MW = WW, wW = LW(MW))
            } else {
              if (MW == WW) return !0;
              wW = OW(MW), MW = MW.parentNode
            }
        }(this.dom, MW) ? (this.view.inputState.lastFocusTime = 0, WW.docView.updateSelection(), !1) : (this.selectionRange.setRange(MW), wW && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(WW, RW) {
        this.selectionRange.set(WW.node, WW.offset, RW.node, RW.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let WW = 0,
          RW = null;
        for (let MW = this.dom; MW;)
          if (1 == MW.nodeType) !RW && WW < this.scrollTargets.length && this.scrollTargets[WW] == MW ? WW++ : RW || (RW = this.scrollTargets.slice(0, WW)), RW && RW.push(MW), MW = MW.assignedSlot || MW.parentNode;
          else {
            if (11 != MW.nodeType) break;
            MW = MW.host
          } if (WW < this.scrollTargets.length && !RW && (RW = this.scrollTargets.slice(0, WW)), RW) {
          for (let WW of this.scrollTargets) WW.removeEventListener("scroll", this.onScroll);
          for (let WW of this.scrollTargets = RW) WW.addEventListener("scroll", this.onScroll)
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
        this.active || (this.observer.observe(this.dom, IC), oC && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), oC && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(WW, RW) {
        var MW;
        if (!this.delayedAndroidKey) {
          let WW = () => {
            let WW = this.delayedAndroidKey;
            if (WW) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = WW.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && WW.force && CR(this.dom, WW.key, WW.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(WW)
        }
        this.delayedAndroidKey && "Enter" != WW || (this.delayedAndroidKey = {
          key: WW,
          keyCode: RW,
          force: this.lastChange < Date.now() - 50 || !!(null === (MW = this.delayedAndroidKey) || void 0 === MW ? void 0 : MW.force)
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
        let RW = -1,
          MW = -1,
          wW = !1;
        for (let CW of WW) {
          let WW = this.readMutation(CW);
          WW && (WW.typeOver && (wW = !0), -1 == RW ? ({
            from: RW,
            to: MW
          } = WW) : (RW = Math.min(WW.from, RW), MW = Math.max(WW.to, MW)))
        }
        return {
          from: RW,
          to: MW,
          typeOver: wW
        }
      }
      readChange() {
        let {
          from: WW,
          to: RW,
          typeOver: MW
        } = this.processRecords(), wW = this.selectionChanged && vR(this.dom, this.selectionRange);
        if (WW < 0 && !wW) return null;
        WW > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let CW = new Mw(this.view, WW, RW, MW);
        return this.view.docView.domChanged = {
          newSel: CW.newSel ? CW.newSel.main : null
        }, CW
      }
      flush() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        WW && this.readSelectionRange();
        let RW = this.readChange();
        if (!RW) return this.view.requestMeasure(), !1;
        let MW = this.view.state,
          wW = Cw(this.view, RW);
        return this.view.state == MW && (RW.domChanged || RW.newSel && !bC(this.view.state.selection, RW.newSel.main)) && this.view.update([]), wW
      }
      readMutation(WW) {
        let RW = this.view.docView.tile.nearest(WW.target);
        if (!RW || RW.isWidget()) return null;
        if (RW.markDirty("attributes" == WW.type), "childList" == WW.type) {
          let MW = FC(RW, WW.previousSibling || WW.target.previousSibling, -1),
            wW = FC(RW, WW.nextSibling || WW.target.nextSibling, 1);
          return {
            from: MW ? RW.posAfter(MW) : RW.posAtStart,
            to: wW ? RW.posBefore(wW) : RW.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == WW.type ? {
          from: RW.posAtStart,
          to: RW.posAtEnd,
          typeOver: WW.target.nodeValue == WW.oldValue
        } : null
      }
      setWindow(WW) {
        WW != this.win && (this.removeWindowListeners(this.win), this.win = WW, this.addWindowListeners(this.win))
      }
      addWindowListeners(WW) {
        WW.addEventListener("resize", this.FQ), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : WW.addEventListener("beforeprint", this.onPrint), WW.addEventListener("scroll", this.onScroll), WW.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(WW) {
        WW.removeEventListener("scroll", this.onScroll), WW.removeEventListener("resize", this.FQ), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : WW.removeEventListener("beforeprint", this.onPrint), WW.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(WW) {
        this.editContext && (this.editContext.update(WW), WW.startState.facet(GR) != WW.state.facet(GR) && (WW.view.contentDOM.editContext = WW.state.facet(GR) ? this.editContext.editContext : null))
      }
      destroy() {
        var WW, RW, MW;
        this.stop(), null === (WW = this.intersection) || void 0 === WW || WW.disconnect(), null === (RW = this.gapIntersection) || void 0 === RW || RW.disconnect(), null === (MW = this.resizeScroll) || void 0 === MW || MW.disconnect();
        for (let wW of this.scrollTargets) wW.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function FC(WW, RW, MW) {
      for (; RW;) {
        let wW = tw.get(RW);
        if (wW && wW.parent == WW) return wW;
        let CW = RW.parentNode;
        RW = CW != WW.dom ? CW : MW > 0 ? RW.nextSibling : RW.previousSibling
      }
      return null
    }

    function fC(WW, RW) {
      let MW = RW.startContainer,
        wW = RW.startOffset,
        CW = RW.endContainer,
        zR = RW.endOffset,
        AW = WW.docView.domAtPos(WW.state.selection.main.anchor, 1);
      return uW(AW.node, AW.offset, CW, zR) && ([MW, wW, CW, zR] = [CW, zR, MW, wW]), {
        anchorNode: MW,
        anchorOffset: wW,
        focusNode: CW,
        focusOffset: zR
      }
    }
    class QC {
      constructor(WW) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(WW.state);
        let RW = this.editContext = new window.EditContext({
          text: WW.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, WW.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(WW.state.selection.main.head)
        });
        this.handlers.textupdate = MW => {
          let CW = WW.state.selection.main,
            {
              anchor: zR,
              head: AW
            } = CW,
            bR = this.toEditorPos(MW.updateRangeStart),
            yR = this.toEditorPos(MW.updateRangeEnd);
          WW.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: MW.updateRangeStart,
            editorBase: bR,
            drifted: !1
          });
          let NW = yR - bR > MW.text.length;
          bR == this.from && zR < this.from ? bR = zR : yR == this.to && zR > this.to && (yR = zR);
          let eW = Aw(WW.state.sliceDoc(bR, yR), MW.text, (NW ? CW.from : CW.to) - bR, NW ? "end" : null);
          if (!eW) {
            let RW = wW.j.single(this.toEditorPos(MW.selectionStart), this.toEditorPos(MW.selectionEnd));
            return void(bC(RW, CW) || WW.dispatch({
              selection: RW,
              userEvent: "select"
            }))
          }
          let BW = {
            from: eW.from + bR,
            to: eW.toA + bR,
            insert: wW.D.of(MW.text.slice(eW.from, eW.toB).split("\n"))
          };
          if ((fW.mac || fW.android) && BW.from == AW - 1 && /^\. ?$/.test(MW.text) && "off" == WW.contentDOM.getAttribute("autocorrect") && (BW = {
              from: bR,
              to: yR,
              insert: wW.D.of([MW.text.replace(".", " ")])
            }), this.pendingContextChange = BW, !WW.state.readOnly) {
            let RW = this.to - this.from + (BW.to - BW.from + BW.insert.length);
            zC(WW, BW, wW.j.single(this.toEditorPos(MW.selectionStart, RW), this.toEditorPos(MW.selectionEnd, RW)))
          }
          this.pendingContextChange && (this.revertPending(WW.state), this.setSelection(WW.state)), BW.from < BW.to && !BW.insert.length && WW.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(RW.text.slice(Math.max(0, MW.updateRangeStart - 1), Math.min(RW.text.length, MW.updateRangeStart + 1))) && this.handlers.compositionend(MW)
        }, this.handlers.characterboundsupdate = MW => {
          let wW = [],
            CW = null;
          for (let RW = this.toEditorPos(MW.rangeStart), zR = this.toEditorPos(MW.rangeEnd); RW < zR; RW++) {
            let MW = WW.coordsForChar(RW);
            CW = MW && new DOMRect(MW.left, MW.top, MW.right - MW.left, MW.bottom - MW.top) || CW || new DOMRect, wW.push(CW)
          }
          RW.updateCharacterBounds(MW.rangeStart, wW)
        }, this.handlers.textformatupdate = RW => {
          let MW = [];
          for (let WW of RW.getTextFormats()) {
            let RW = WW.underlineStyle,
              wW = WW.underlineThickness;
            if (!/none/i.test(RW) && !/none/i.test(wW)) {
              let CW = this.toEditorPos(WW.rangeStart),
                zR = this.toEditorPos(WW.rangeEnd);
              if (CW < zR) {
                let WW = `text-decoration: underline ${/^[a-z]/.test(RW)?RW+" ":"Dashed"==RW?"dashed ":"Squiggle"==RW?"wavy ":""}${/thin/i.test(wW)?1:2}px`;
                MW.push(sW.mark({
                  attributes: {
                    style: WW
                  }
                }).range(CW, zR))
              }
            }
          }
          WW.dispatch({
            effects: OR.of(sW.set(MW))
          })
        }, this.handlers.compositionstart = () => {
          WW.inputState.composing < 0 && (WW.inputState.composing = 0, WW.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (WW.inputState.composing = -1, WW.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: RW
            } = this.composing;
            this.composing = null, RW && this.reset(WW.state)
          }
        };
        for (let MW in this.handlers) RW.addEventListener(MW, this.handlers[MW]);
        this.measureReq = {
          read: WW => {
            this.editContext.updateControlBounds(WW.contentDOM.getBoundingClientRect());
            let RW = mR(WW.root);
            RW && RW.rangeCount && this.editContext.updateSelectionBounds(RW.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(WW) {
        let RW = 0,
          MW = !1,
          wW = this.pendingContextChange;
        return WW.changes.iterChanges(((CW, zR, AW, bR, yR) => {
          if (MW) return;
          let NW = yR.length - (zR - CW);
          if (wW && zR >= wW.to) {
            if (wW.from == CW && wW.to == zR && wW.insert.eq(yR)) return wW = this.pendingContextChange = null, RW += NW, void(this.to += NW);
            wW = null, this.revertPending(WW.state)
          }
          if (CW += RW, (zR += RW) <= this.from) this.from += NW, this.to += NW;
          else if (CW < this.to) {
            if (CW < this.from || zR > this.to || this.to - this.from + yR.length > 3e4) return void(MW = !0);
            this.editContext.updateText(this.toContextPos(CW), this.toContextPos(zR), yR.toString()), this.to += NW
          }
          RW += NW
        })), wW && !MW && this.revertPending(WW.state), !MW
      }
      update(WW) {
        let RW = this.pendingContextChange,
          MW = WW.startState.selection.main;
        this.composing && (this.composing.drifted || !WW.changes.touchesRange(MW.from, MW.to) && WW.transactions.some((WW => !WW.isUserEvent("input.type") && WW.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = WW.changes.mapPos(this.composing.editorBase)) : this.applyEdits(WW) && this.rangeIsValid(WW.state) ? (WW.docChanged || WW.selectionSet || RW) && this.setSelection(WW.state) : (this.pendingContextChange = null, this.reset(WW.state)), (WW.geometryChanged || WW.docChanged || WW.selectionSet) && WW.view.requestMeasure(this.measureReq)
      }
      resetRange(WW) {
        let {
          head: RW
        } = WW.selection.main;
        this.from = Math.max(0, RW - 1e4), this.to = Math.min(WW.doc.length, RW + 1e4)
      }
      reset(WW) {
        this.resetRange(WW), this.editContext.updateText(0, this.editContext.text.length, WW.doc.sliceString(this.from, this.to)), this.setSelection(WW)
      }
      revertPending(WW) {
        let RW = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(RW.from), this.toContextPos(RW.from + RW.insert.length), WW.doc.sliceString(RW.from, RW.to))
      }
      setSelection(WW) {
        let {
          main: RW
        } = WW.selection, MW = this.toContextPos(Math.max(this.from, Math.min(this.to, RW.anchor))), wW = this.toContextPos(RW.head);
        this.editContext.selectionStart == MW && this.editContext.selectionEnd == wW || this.editContext.updateSelection(MW, wW)
      }
      rangeIsValid(WW) {
        let {
          head: RW
        } = WW.selection.main;
        return !(this.from > 0 && RW - this.from < 500 || this.to < WW.doc.length && this.to - RW < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        WW = Math.min(WW, RW);
        let MW = this.composing;
        return MW && MW.drifted ? MW.editorBase + (WW - MW.contextBase) : WW + this.from
      }
      toContextPos(WW) {
        let RW = this.composing;
        return RW && RW.drifted ? RW.contextBase + (WW - RW.editorBase) : WW - this.from
      }
      destroy() {
        for (let WW in this.handlers) this.editContext.removeEventListener(WW, this.handlers[WW])
      }
    }
    class rz {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get EzW() {
        return this.viewState.EzW
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
        var RW;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), WW.parent && WW.parent.appendChild(this.dom);
        let {
          dispatch: MW
        } = WW;
        this.dispatchTransactions = WW.dispatchTransactions || MW && (WW => WW.forEach((WW => MW(WW, this)))) || (WW => this.update(WW)), this.dispatch = this.dispatch.bind(this), this._root = WW.root || function(WW) {
          for (; WW;) {
            if (WW && (9 == WW.nodeType || 11 == WW.nodeType && WW.host)) return WW;
            WW = WW.assignedSlot || WW.parentNode
          }
          return null
        }(WW.parent) || document, this.viewState = new wC(this, WW.state || wW.l.create(WW)), WW.scrollTo && WW.scrollTo.is(uR) && (this.viewState.scrollTarget = WW.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(HR).map((WW => new qM(WW)));
        for (let wW of this.plugins) wW.update(this);
        this.observer = new lC(this), this.inputState = new yC(this), this.inputState.ensureHandlers(this.plugins), this.docView = new UM(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (RW = document.fonts) || void 0 === RW ? void 0 : RW.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        let CW = 1 == RW.length && RW[0] instanceof wW.G ? RW : 1 == RW.length && Array.isArray(RW[0]) ? RW[0] : [this.state.update(...RW)];
        this.dispatchTransactions(CW, this)
      }
      update(WW) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let RW, MW = !1,
          CW = !1,
          zR = this.state;
        for (let wW of WW) {
          if (wW.startState != zR) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          zR = wW.state
        }
        if (this.destroyed) return void(this.viewState.state = zR);
        let AW = this.hasFocus,
          bR = 0,
          yR = null;
        WW.some((WW => WW.annotation(kC))) ? (this.inputState.notifiedFocused = AW, bR = 1) : AW != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = AW, yR = aC(zR, AW), yR || (bR = 1));
        let NW = this.observer.delayedAndroidKey,
          eW = null;
        if (NW ? (this.observer.clearDelayedAndroidKey(), eW = this.observer.readChange(), (eW && !this.state.doc.eq(zR.doc) || !this.state.selection.eq(zR.selection)) && (eW = null)) : this.observer.clear(), zR.facet(wW.l.phrases) != this.state.facet(wW.l.phrases)) return this.setState(zR);
        RW = eM.create(this, zR, WW), RW.flags |= bR;
        let BW = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let RW of WW) {
            if (BW && (BW = BW.map(RW.changes)), RW.scrollIntoView) {
              let {
                main: WW
              } = RW.state.selection, {
                x: MW,
                y: CW
              } = this.state.facet(rz.cursorScrollMargin);
              BW = new KR(WW.empty ? WW : wW.j.cursor(WW.head, WW.head > WW.anchor ? -1 : 1), "nearest", "nearest", CW, MW)
            }
            for (let WW of RW.effects) WW.is(uR) && (BW = WW.value.clip(this.state))
          }
          this.viewState.update(RW, BW), this.bidiCache = jz.update(this.bidiCache, RW.changes), RW.empty || (this.updatePlugins(RW), this.inputState.update(RW)), MW = this.docView.update(RW), this.state.facet(yw) != this.styleModules && this.mountStyles(), CW = this.updateAttrs(), this.showAnnouncements(WW), this.docView.updateSelection(MW, WW.some((WW => WW.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (RW.startState.facet(BC) != RW.state.facet(BC) && (this.viewState.mustMeasureContent = !0), (MW || CW || BW || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), MW && this.docViewUpdate(), !RW.empty)
          for (let wW of this.state.facet(pR)) try {
            wW(RW)
          } catch (tR) {
            nR(this.state, tR, "update listener")
          }(yR || eW) && Promise.resolve().then((() => {
            yR && this.state == yR.startState && this.dispatch(yR), eW && !Cw(this, eW) && NW.force && CR(this.contentDOM, NW.key, NW.keyCode)
          }))
      }
      setState(WW) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = WW);
        this.updateState = 2;
        let RW = this.hasFocus;
        try {
          for (let WW of this.plugins) WW.destroy(this);
          this.viewState = new wC(this, WW), this.plugins = WW.facet(HR).map((WW => new qM(WW))), this.pluginMap.clear();
          for (let WW of this.plugins) WW.update(this);
          this.docView.destroy(), this.docView = new UM(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        RW && this.focus(), this.requestMeasure()
      }
      updatePlugins(WW) {
        let RW = WW.startState.facet(HR),
          MW = WW.state.facet(HR);
        if (RW != MW) {
          let wW = [];
          for (let CW of MW) {
            let MW = RW.indexOf(CW);
            if (MW < 0) wW.push(new qM(CW));
            else {
              let RW = this.plugins[MW];
              RW.mustUpdate = WW, wW.push(RW)
            }
          }
          for (let RW of this.plugins) RW.mustUpdate != WW && RW.destroy(this);
          this.plugins = wW, this.pluginMap.clear()
        } else
          for (let wW of this.plugins) wW.mustUpdate = WW;
        for (let wW = 0; wW < this.plugins.length; wW++) this.plugins[wW].update(this);
        RW != MW && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let RW of this.plugins) {
          let MW = RW.value;
          if (MW && MW.docViewUpdate) try {
            MW.docViewUpdate(this)
          } catch (WW) {
            nR(this.state, WW, "doc view update listener")
          }
        }
      }
      measure() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, WW && this.observer.forceFlush();
        let RW = null,
          MW = this.viewState.scrollParent,
          wW = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: CW,
            scrollAnchorHeight: zR
          } = this.viewState;
        Math.abs(wW - this.viewState.scrollOffset) > 1 && (zR = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let WW = 0;; WW++) {
            if (zR < 0)
              if (zM(MW || this.win)) CW = -1, zR = this.viewState.heightMap.height;
              else {
                let WW = this.viewState.scrollAnchorAt(wW);
                CW = WW.from, zR = WW.top
              } this.updateState = 1;
            let bR = this.viewState.measure();
            if (!bR && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (WW > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let yR = [];
            4 & bR || ([this.measureRequests, yR] = [yR, this.measureRequests]);
            let NW = yR.map((WW => {
                try {
                  return WW.read(this)
                } catch (RW) {
                  return nR(this.state, RW), XC
                }
              })),
              eW = eM.create(this, this.state, []),
              BW = !1;
            eW.flags |= bR, RW ? RW.flags |= bR : RW = eW, this.updateState = 2, eW.empty || (this.updatePlugins(eW), this.inputState.update(eW), this.updateAttrs(), BW = this.docView.update(eW), BW && this.docViewUpdate());
            for (let WW = 0; WW < yR.length; WW++)
              if (NW[WW] != XC) try {
                let RW = yR[WW];
                RW.write && RW.write(NW[WW], this)
              } catch (AW) {
                nR(this.state, AW)
              }
            if (BW && this.docView.updateSelection(!0), !eW.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, zR = -1;
                  continue
                } {
                  let WW = ((CW < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(CW).top) - zR) / this.scaleY;
                  if ((WW > 1 || WW < -1) && (MW == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    wW += WW, MW ? MW.scrollTop += WW : this.win.scrollBy(0, WW), zR = -1;
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
        if (RW && !RW.empty)
          for (let bR of this.state.facet(pR)) bR(RW)
      }
      get themeClasses() {
        return TC + " " + (this.state.facet(tz) ? iz : gz) + " " + this.state.facet(BC)
      }
      updateAttrs() {
        let WW = kz(this, ZR, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          RW = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(GR) ? "true" : "false",
            class: "cm-content",
            style: `${fW.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (RW["aria-readonly"] = "true"), kz(this, SR, RW);
        let MW = this.observer.ignore((() => {
          let MW = XW(this.contentDOM, this.contentAttrs, RW),
            wW = XW(this.dom, this.editorAttrs, WW);
          return MW || wW
        }));
        return this.editorAttrs = WW, this.contentAttrs = RW, MW
      }
      showAnnouncements(WW) {
        let RW = !0;
        for (let MW of WW)
          for (let WW of MW.effects)
            if (WW.is(rz.announce)) {
              RW && (this.announceDOM.textContent = ""), RW = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = WW.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(yw);
        let WW = this.state.facet(rz.cspNonce);
        CW.c.mount(this.root, this.styleModules.concat(PC).reverse(), WW ? {
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
            for (let RW = 0; RW < this.measureRequests.length; RW++)
              if (this.measureRequests[RW].key === WW.key) return void(this.measureRequests[RW] = WW);
          this.measureRequests.push(WW)
        }
      }
      plugin(WW) {
        let RW = this.pluginMap.get(WW);
        return (void 0 === RW || RW && RW.plugin != WW) && this.pluginMap.set(WW, RW = this.plugins.find((RW => RW.plugin == WW)) || null), RW && RW.update(this).value
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
      moveByChar(WW, RW, MW) {
        return GM(this, WW, uM(this, WW, RW, MW))
      }
      moveByGroup(WW, RW) {
        return GM(this, WW, uM(this, WW, RW, (RW => function(WW, RW, MW) {
          let CW = WW.state.charCategorizer(RW),
            zR = CW(MW);
          return WW => {
            let RW = CW(WW);
            return zR == wW.g.Space && (zR = RW), zR == RW
          }
        }(this, WW.head, RW))))
      }
      visualLineSide(WW, RW) {
        let MW = this.bidiSpans(WW),
          CW = this.textDirectionAt(WW.from),
          zR = MW[RW ? MW.length - 1 : 0];
        return wW.j.cursor(zR.side(RW, CW) + WW.from, zR.forward(!RW, CW) ? 1 : -1)
      }
      moveToLineBoundary(WW, RW) {
        return function(WW, RW, MW, CW) {
          let zR = KM(WW, RW.head, RW.assoc || -1),
            AW = CW && zR.type == aR.Text && (WW.lineWrapping || zR.widgetLineBreaks) ? WW.coordsAtPos(RW.assoc < 0 && RW.head > zR.from ? RW.head - 1 : RW.head) : null;
          if (AW) {
            let RW = WW.dom.getBoundingClientRect(),
              CW = WW.textDirectionAt(zR.from),
              bR = WW.posAtCoords({
                x: MW == (CW == NR.LTR) ? RW.right - 1 : RW.left + 1,
                y: (AW.top + AW.bottom) / 2
              });
            if (null != bR) return wW.j.cursor(bR, MW ? -1 : 1)
          }
          return wW.j.cursor(MW ? zR.to : zR.from, MW ? -1 : 1)
        }(this, WW, RW, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(WW, RW, MW) {
        return GM(this, WW, function(WW, RW, MW, CW) {
          let zR = RW.head,
            AW = MW ? 1 : -1;
          if (zR == (MW ? WW.state.doc.length : 0)) return wW.j.cursor(zR, RW.assoc);
          let bR, yR = RW.goalColumn,
            NW = WW.contentDOM.getBoundingClientRect(),
            eW = WW.coordsAtPos(zR, RW.assoc || ((RW.empty ? MW : RW.head == RW.from) ? 1 : -1)),
            BW = WW.documentTop;
          if (eW) null == yR && (yR = eW.left - NW.left), bR = AW < 0 ? eW.top : eW.bottom;
          else {
            let RW = WW.viewState.lineBlockAt(zR);
            null == yR && (yR = Math.min(NW.right - NW.left, WW.defaultCharacterWidth * (zR - RW.from))), bR = (AW < 0 ? RW.top : RW.bottom) + BW
          }
          let tR = NW.left + yR,
            TW = WW.viewState.heightOracle.textHeight >> 1,
            gR = null !== CW && void 0 !== CW ? CW : TW;
          for (let iR = 0;; iR += TW) {
            let RW = bR + (gR + iR) * AW,
              CW = HM(WW, {
                x: tR,
                y: RW
              }, !1, AW);
            if (MW ? RW > NW.bottom : RW < NW.top) return wW.j.cursor(CW.pos, CW.assoc);
            let zR = WW.coordsAtPos(CW.pos, CW.assoc),
              eW = zR ? (zR.top + zR.bottom) / 2 : 0;
            if (!zR || (MW ? eW > bR : eW < bR)) return wW.j.cursor(CW.pos, CW.assoc, void 0, yR)
          }
        }(this, WW, RW, MW))
      }
      domAtPos(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(WW, RW)
      }
      posAtDOM(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(WW, RW)
      }
      posAtCoords(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let MW = HM(this, WW, RW);
        return MW && MW.pos
      }
      posAndSideAtCoords(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), HM(this, WW, RW)
      }
      coordsAtPos(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let MW = this.docView.coordsAt(WW, RW);
        if (!MW || MW.left == MW.right) return MW;
        let wW = this.state.doc.lineAt(WW),
          CW = this.bidiSpans(wW);
        return HW(MW, CW[IR.find(CW, WW - wW.from, -1, RW)].dir == NR.LTR == RW > 0)
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
        return !this.state.facet(mM) || WW < this.viewport.from || WW > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(WW))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(WW) {
        if (WW.length > cz) return rM(WW.length);
        let RW, MW = this.textDirectionAt(WW.from);
        for (let CW of this.bidiCache)
          if (CW.from == WW.from && CW.dir == MW && (CW.fresh || oR(CW.isolates, RW = zw(this, WW)))) return CW.order;
        RW || (RW = zw(this, WW));
        let wW = QR(WW.text, MW, RW);
        return this.bidiCache.push(new jz(WW.from, WW.to, MW, RW, !0, wW)), wW
      }
      get hasFocus() {
        var WW;
        return (this.dom.ownerDocument.hasFocus() || fW.safari && (null === (WW = this.inputState) || void 0 === WW ? void 0 : WW.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          MR(this.contentDOM), this.docView.updateSelection()
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
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var MW, CW, zR, AW;
        return uR.of(new KR("number" == typeof WW ? wW.j.cursor(WW) : WW, null !== (MW = RW.y) && void 0 !== MW ? MW : "nearest", null !== (CW = RW.x) && void 0 !== CW ? CW : "nearest", null !== (zR = RW.yMargin) && void 0 !== zR ? zR : 5, null !== (AW = RW.xMargin) && void 0 !== AW ? AW : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: WW,
          scrollLeft: RW
        } = this.scrollDOM, MW = this.viewState.scrollAnchorAt(WW);
        return uR.of(new KR(wW.j.cursor(MW.from), "start", "start", MW.top - WW, RW, !0))
      }
      setTabFocusMode(WW) {
        null == WW ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof WW ? this.inputState.tabFocusMode = WW ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + WW)
      }
      static domEventHandlers(WW) {
        return DR.define((() => ({})), {
          eventHandlers: WW
        })
      }
      static domEventObservers(WW) {
        return DR.define((() => ({})), {
          eventObservers: WW
        })
      }
      static theme(WW, RW) {
        let MW = CW.c.newName(),
          wW = [BC.of(MW), yw.of(JC(`.${MW}`, WW))];
        return RW && RW.dark && wW.push(tz.of(!0)), wW
      }
      static baseTheme(WW) {
        return wW.p.lowest(yw.of(JC("." + TC, WW, YC)))
      }
      static findFromDOM(WW) {
        var RW;
        let MW = WW.querySelector(".cm-content"),
          wW = MW && tw.get(MW) || tw.get(WW);
        return (null === (RW = null === wW || void 0 === wW ? void 0 : wW.root) || void 0 === RW ? void 0 : RW.view) || null
      }
    }
    rz.styleModule = yw, rz.inputHandler = hR, rz.clipboardInputFilter = ER, rz.clipboardOutputFilter = VR, rz.scrollHandler = vM, rz.focusChangeEffect = UR, rz.perLineTextDirection = mM, rz.exceptionSink = dR, rz.updateListener = pR, rz.editable = GR, rz.mouseSelectionStyle = sR, rz.dragMovesSelection = aM, rz.clickAddsSelectionRange = kM, rz.vA = WM, rz.blockWrappers = RM, rz.outerDecorations = MM, rz.atomicRanges = wM, rz.bidiIsolatedRanges = CM, rz.cursorScrollMargin = wW.m.define({
      combine: WW => {
        let RW = 5,
          MW = 5;
        for (let wW of WW) "number" == typeof wW ? RW = MW = wW : ({
          x: RW,
          y: MW
        } = wW);
        return {
          x: RW,
          y: MW
        }
      }
    }), rz.scrollMargins = AM, rz.darkTheme = tz, rz.cspNonce = wW.m.define({
      combine: WW => WW.length ? WW[0] : ""
    }), rz.contentAttributes = SR, rz.editorAttributes = ZR, rz.lineWrapping = rz.contentAttributes.of({
      class: "cm-lineWrapping"
    }), rz.announce = wW.A.define();
    const cz = 4096,
      XC = {};
    class jz {
      constructor(WW, RW, MW, wW, CW, zR) {
        this.from = WW, this.to = RW, this.dir = MW, this.isolates = wW, this.fresh = CW, this.order = zR
      }
      static update(WW, RW) {
        if (RW.empty && !WW.some((WW => WW.fresh))) return WW;
        let MW = [],
          wW = WW.length ? WW[WW.length - 1].dir : NR.LTR;
        for (let CW = Math.max(0, WW.length - 10); CW < WW.length; CW++) {
          let zR = WW[CW];
          zR.dir != wW || RW.touchesRange(zR.from, zR.to) || MW.push(new jz(RW.mapPos(zR.from, 1), RW.mapPos(zR.to, -1), zR.dir, zR.isolates, !1, zR.order))
        }
        return MW
      }
    }

    function kz(WW, RW, MW) {
      for (let wW = WW.state.facet(RW), CW = wW.length - 1; CW >= 0; CW--) {
        let RW = wW[CW],
          zR = "function" == typeof RW ? RW(WW) : RW;
        zR && QW(zR, MW)
      }
      return MW
    }
    const az = fW.mac ? "mac" : fW.windows ? "win" : fW.linux ? "linux" : "key";

    function sC(WW, RW, MW) {
      return RW.altKey && (WW = "Alt-" + WW), RW.ctrlKey && (WW = "Ctrl-" + WW), RW.metaKey && (WW = "Meta-" + WW), !1 !== MW && RW.shiftKey && (WW = "Shift-" + WW), WW
    }
    const dC = wW.p.default(rz.domEventHandlers({
        keydown: (WW, RW) => vz(UC(RW.state), WW, RW, "editor")
      })),
      pC = wW.m.define({
        enables: dC
      }),
      hC = new WeakMap;

    function UC(WW) {
      let RW = WW.facet(pC),
        MW = hC.get(RW);
      return MW || hC.set(RW, MW = function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : az,
          MW = Object.create(null),
          wW = Object.create(null),
          CW = (WW, RW) => {
            let MW = wW[WW];
            if (null == MW) wW[WW] = RW;
            else if (MW != RW) throw new Error("Key binding " + WW + " is used both as a regular binding and as a multi-stroke prefix")
          },
          zR = (WW, wW, zR, AW, bR) => {
            var yR, NW;
            let eW = MW[WW] || (MW[WW] = Object.create(null)),
              BW = wW.split(/ (?!$)/).map((WW => function(WW, RW) {
                const MW = WW.split(/-(?!$)/);
                let wW, CW, zR, AW, bR = MW[MW.length - 1];
                "Space" == bR && (bR = " ");
                for (let yR = 0; yR < MW.length - 1; ++yR) {
                  const WW = MW[yR];
                  if (/^(cmd|meta|m)$/i.test(WW)) AW = !0;
                  else if (/^a(lt)?$/i.test(WW)) wW = !0;
                  else if (/^(c|ctrl|control)$/i.test(WW)) CW = !0;
                  else if (/^s(hift)?$/i.test(WW)) zR = !0;
                  else {
                    if (!/^mod$/i.test(WW)) throw new Error("Unrecognized modifier name: " + WW);
                    "mac" == RW ? AW = !0 : CW = !0
                  }
                }
                return wW && (bR = "Alt-" + bR), CW && (bR = "Ctrl-" + bR), AW && (bR = "Meta-" + bR), zR && (bR = "Shift-" + bR), bR
              }(WW, RW)));
            for (let RW = 1; RW < BW.length; RW++) {
              let MW = BW.slice(0, RW).join(" ");
              CW(MW, !0), eW[MW] || (eW[MW] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [RW => {
                  let wW = VC = {
                    view: RW,
                    prefix: MW,
                    scope: WW
                  };
                  return setTimeout((() => {
                    VC == wW && (VC = null)
                  }), mz), !0
                }]
              })
            }
            let tR = BW.join(" ");
            CW(tR, !1);
            let TW = eW[tR] || (eW[tR] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (NW = null === (yR = eW._any) || void 0 === yR ? void 0 : yR.run) || void 0 === NW ? void 0 : NW.slice()) || []
            });
            zR && TW.run.push(zR), AW && (TW.preventDefault = !0), bR && (TW.stopPropagation = !0)
          };
        for (let AW of WW) {
          let WW = AW.scope ? AW.scope.split(" ") : ["editor"];
          if (AW.any)
            for (let RW of WW) {
              let WW = MW[RW] || (MW[RW] = Object.create(null));
              WW._any || (WW._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: wW
              } = AW;
              for (let RW in WW) WW[RW].run.push((WW => wW(WW, xz)))
            }
          let wW = AW[RW] || AW.key;
          if (wW)
            for (let RW of WW) zR(RW, wW, AW.run, AW.preventDefault, AW.stopPropagation), AW.shift && zR(RW, "Shift-" + wW, AW.shift, AW.preventDefault, AW.stopPropagation)
        }
        return MW
      }(RW.reduce(((WW, RW) => WW.concat(RW)), []))), MW
    }

    function EC(WW, RW, MW) {
      return vz(UC(WW.state), RW, WW, MW)
    }
    let VC = null;
    const mz = 4e3;
    let xz = null;

    function vz(WW, RW, MW, CW) {
      xz = RW;
      let NW = function(WW) {
          var RW = !(bR && WW.metaKey && WW.shiftKey && !WW.ctrlKey && !WW.altKey || yR && WW.shiftKey && WW.key && 1 == WW.key.length || "Unidentified" == WW.key) && WW.key || (WW.shiftKey ? AW : zR)[WW.keyCode] || WW.key || "Unidentified";
          return "Esc" == RW && (RW = "Escape"), "Del" == RW && (RW = "Delete"), "Left" == RW && (RW = "ArrowLeft"), "Up" == RW && (RW = "ArrowUp"), "Right" == RW && (RW = "ArrowRight"), "Down" == RW && (RW = "ArrowDown"), RW
        }(RW),
        eW = (0, wW.J)(NW, 0),
        BW = (0, wW.L)(eW) == NW.length && " " != NW,
        tR = "",
        TW = !1,
        gR = !1,
        iR = !1;
      VC && VC.view == MW && VC.scope == CW && (tR = VC.prefix + " ", Tw.indexOf(RW.keyCode) < 0 && (gR = !0, VC = null));
      let YW, JW, PW = new Set,
        IW = WW => {
          if (WW) {
            for (let RW of WW.run)
              if (!PW.has(RW) && (PW.add(RW), RW(MW))) return WW.stopPropagation && (iR = !0), !0;
            WW.preventDefault && (WW.stopPropagation && (iR = !0), gR = !0)
          }
          return !1
        },
        oW = WW[CW];
      return oW && (IW(oW[tR + sC(NW, RW, !BW)]) ? TW = !0 : !BW || !(RW.altKey || RW.metaKey || RW.ctrlKey) || fW.windows && RW.ctrlKey && RW.altKey || fW.mac && RW.altKey && !RW.ctrlKey && !RW.metaKey || !(YW = zR[RW.keyCode]) || YW == NW ? BW && RW.shiftKey && IW(oW[tR + sC(NW, RW, !0)]) && (TW = !0) : (IW(oW[tR + sC(YW, RW, !0)]) || RW.shiftKey && (JW = AW[RW.keyCode]) != NW && JW != YW && IW(oW[tR + sC(JW, RW, !1)])) && (TW = !0), !TW && IW(oW._any) && (TW = !0)), gR && (TW = !0), TW && iR && RW.stopPropagation(), xz = null, TW
    }
    class KC {
      constructor(WW, RW, MW, wW, CW) {
        this.className = WW, this.left = RW, this.top = MW, this.width = wW, this.height = CW
      }
      draw() {
        let WW = document.createElement("div");
        return WW.className = this.className, this.adjust(WW), WW
      }
      update(WW, RW) {
        return RW.className == this.className && (this.adjust(WW), !0)
      }
      adjust(WW) {
        WW.style.left = this.left + "px", WW.style.top = this.top + "px", null != this.width && (WW.style.width = this.width + "px"), WW.style.height = this.height + "px"
      }
      eq(WW) {
        return this.left == WW.left && this.top == WW.top && this.width == WW.width && this.height == WW.height && this.className == WW.className
      }
      static forRange(WW, RW, MW) {
        if (MW.empty) {
          let wW = WW.coordsAtPos(MW.head, MW.assoc || 1);
          if (!wW) return [];
          let CW = uC(WW);
          return [new KC(RW, wW.left - CW.left, wW.top - CW.top, null, wW.bottom - wW.top)]
        }
        return function(WW, RW, MW) {
          if (MW.to <= WW.viewport.from || MW.from >= WW.viewport.to) return [];
          let wW = Math.max(MW.from, WW.viewport.from),
            CW = Math.min(MW.to, WW.viewport.to),
            zR = WW.textDirection == NR.LTR,
            AW = WW.contentDOM,
            bR = AW.getBoundingClientRect(),
            yR = uC(WW),
            NW = AW.querySelector(".cm-line"),
            eW = NW && window.getComputedStyle(NW),
            BW = bR.left + (eW ? parseInt(eW.paddingLeft) + Math.min(0, parseInt(eW.textIndent)) : 0),
            tR = bR.right - (eW ? parseInt(eW.paddingRight) : 0),
            TW = KM(WW, wW, 1),
            gR = KM(WW, CW, -1),
            iR = TW.type == aR.Text ? TW : null,
            YW = gR.type == aR.Text ? gR : null;
          iR && (WW.lineWrapping || TW.widgetLineBreaks) && (iR = OC(WW, wW, 1, iR));
          YW && (WW.lineWrapping || gR.widgetLineBreaks) && (YW = OC(WW, CW, -1, YW));
          if (iR && YW && iR.from == YW.from && iR.to == YW.to) return PW(IW(MW.from, MW.to, iR));
          {
            let RW = iR ? IW(MW.from, null, iR) : oW(TW, !1),
              wW = YW ? IW(null, MW.to, YW) : oW(gR, !0),
              CW = [];
            return (iR || TW).to < (YW || gR).from - (iR && YW ? 1 : 0) || TW.widgetLineBreaks > 1 && RW.bottom + WW.defaultLineHeight / 2 < wW.top ? CW.push(JW(BW, RW.bottom, tR, wW.top)) : RW.bottom < wW.top && WW.elementAtHeight((RW.bottom + wW.top) / 2).type == aR.Text && (RW.bottom = wW.top = (RW.bottom + wW.top) / 2), PW(RW).concat(CW).concat(PW(wW))
          }

          function JW(WW, MW, wW, CW) {
            return new KC(RW, WW - yR.left, MW - yR.top, Math.max(0, wW - WW), CW - MW)
          }

          function PW(WW) {
            let {
              top: RW,
              bottom: MW,
              horizontal: wW
            } = WW, CW = [];
            for (let zR = 0; zR < wW.length; zR += 2) CW.push(JW(wW[zR], RW, wW[zR + 1], MW));
            return CW
          }

          function IW(RW, MW, wW) {
            let CW = 1e9,
              AW = -1e9,
              bR = [];

            function yR(RW, MW, yR, NW, eW) {
              let TW = WW.coordsAtPos(RW, RW == wW.to ? -2 : 2),
                gR = WW.coordsAtPos(yR, yR == wW.from ? 2 : -2);
              TW && gR && (CW = Math.min(TW.top, gR.top, CW), AW = Math.max(TW.bottom, gR.bottom, AW), eW == NR.LTR ? bR.push(zR && MW ? BW : TW.left, zR && NW ? tR : gR.right) : bR.push(!zR && NW ? BW : gR.left, !zR && MW ? tR : TW.right))
            }
            let NW = null !== RW && void 0 !== RW ? RW : wW.from,
              eW = null !== MW && void 0 !== MW ? MW : wW.to;
            for (let zR of WW.EzW)
              if (zR.to > NW && zR.from < eW)
                for (let wW = Math.max(zR.from, NW), CW = Math.min(zR.to, eW);;) {
                  let zR = WW.state.doc.lineAt(wW);
                  for (let AW of WW.bidiSpans(zR)) {
                    let WW = AW.from + zR.from,
                      bR = AW.to + zR.from;
                    if (WW >= CW) break;
                    bR > wW && yR(Math.max(WW, wW), null == RW && WW <= NW, Math.min(bR, CW), null == MW && bR >= eW, AW.dir)
                  }
                  if (wW = zR.to + 1, wW >= CW) break
                }
            return 0 == bR.length && yR(NW, null == RW, eW, null == MW, WW.textDirection), {
              top: CW,
              bottom: AW,
              horizontal: bR
            }
          }

          function oW(WW, RW) {
            let MW = bR.top + (RW ? WW.top : WW.bottom);
            return {
              top: MW,
              bottom: MW,
              horizontal: []
            }
          }
        }(WW, RW, MW)
      }
    }

    function uC(WW) {
      let RW = WW.scrollDOM.getBoundingClientRect();
      return {
        left: (WW.textDirection == NR.LTR ? RW.left : RW.right - WW.scrollDOM.clientWidth * WW.scaleX) - WW.scrollDOM.scrollLeft * WW.scaleX,
        top: RW.top - WW.scrollDOM.scrollTop * WW.scaleY
      }
    }

    function OC(WW, RW, MW, wW) {
      let CW = WW.coordsAtPos(RW, 2 * MW);
      if (!CW) return wW;
      let zR = WW.dom.getBoundingClientRect(),
        AW = (CW.top + CW.bottom) / 2,
        bR = WW.posAtCoords({
          x: zR.left + 1,
          y: AW
        }),
        yR = WW.posAtCoords({
          x: zR.right - 1,
          y: AW
        });
      return null == bR || null == yR ? wW : {
        from: Math.max(wW.from, Math.min(bR, yR)),
        to: Math.min(wW.to, Math.max(bR, yR))
      }
    }
    class nC {
      constructor(WW, RW) {
        this.view = WW, this.layer = RW, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = WW.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), RW.above && this.dom.classList.add("cm-layer-above"), RW.class && this.dom.classList.add(RW.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(WW.state), WW.requestMeasure(this.measureReq), RW.mount && RW.mount(this.dom, WW)
      }
      update(WW) {
        WW.startState.facet(GC) != WW.state.facet(GC) && this.setOrder(WW.state), (this.layer.update(WW, this.dom) || WW.geometryChanged) && (this.scale(), WW.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(WW) {
        !1 !== this.layer.updateOnDocViewUpdate && WW.requestMeasure(this.measureReq)
      }
      setOrder(WW) {
        let RW = 0,
          MW = WW.facet(GC);
        for (; RW < MW.length && MW[RW] != this.layer;) RW++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - RW)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: WW,
          scaleY: RW
        } = this.view;
        WW == this.scaleX && RW == this.scaleY || (this.scaleX = WW, this.scaleY = RW, this.dom.style.transform = `scale(${1/WW}, ${1/RW})`)
      }
      draw(WW) {
        if (WW.length != this.drawn.length || WW.some(((WW, RW) => {
            return MW = WW, wW = this.drawn[RW], !(MW.constructor == wW.constructor && MW.eq(wW));
            var MW, wW
          }))) {
          let RW = this.dom.firstChild,
            MW = 0;
          for (let wW of WW) wW.update && RW && wW.constructor && this.drawn[MW].constructor && wW.update(RW, this.drawn[MW]) ? (RW = RW.nextSibling, MW++) : this.dom.insertBefore(wW.draw(), RW);
          for (; RW;) {
            let WW = RW.nextSibling;
            RW.remove(), RW = WW
          }
          this.drawn = WW, fW.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const GC = wW.m.define();

    function LC(WW) {
      return [DR.define((RW => new nC(RW, WW))), GC.of(WW)]
    }
    const HC = wW.m.define({
      combine: WW => (0, wW.O)(WW, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (WW, RW) => Math.min(WW, RW),
        drawRangeCursor: (WW, RW) => WW || RW
      })
    });

    function DC() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [HC.of(WW), ZC, Wz, Rz, xM.of(!0)]
    }

    function qz(WW) {
      return WW.startState.facet(HC) != WW.state.facet(HC)
    }
    const ZC = LC({
      above: !0,
      markers(WW) {
        let {
          state: RW
        } = WW, MW = RW.facet(HC), CW = [];
        for (let zR of RW.selection.WA) {
          let AW = zR == RW.selection.main;
          if (zR.empty || MW.drawRangeCursor && !(AW && fW.ios && MW.iosSelectionHandles)) {
            let RW = AW ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              MW = zR.empty ? zR : wW.j.cursor(zR.head, zR.assoc);
            for (let wW of KC.forRange(WW, RW, MW)) CW.push(wW)
          }
        }
        return CW
      },
      update(WW, RW) {
        WW.transactions.some((WW => WW.selection)) && (RW.style.animationName = "cm-blink" == RW.style.animationName ? "cm-blink2" : "cm-blink");
        let MW = qz(WW);
        return MW && SC(WW.state, RW), WW.docChanged || WW.selectionSet || MW
      },
      mount(WW, RW) {
        SC(RW.state, WW)
      },
      class: "cm-cursorLayer"
    });

    function SC(WW, RW) {
      RW.style.animationDuration = WW.facet(HC).cursorBlinkRate + "ms"
    }
    const Wz = LC({
        above: !1,
        markers(WW) {
          let RW = [],
            {
              main: MW,
              WA: CW
            } = WW.state.selection;
          for (let wW of CW)
            if (!wW.empty)
              for (let MW of KC.forRange(WW, "cm-selectionBackground", wW)) RW.push(MW);
          if (fW.ios && !MW.empty && WW.state.facet(HC).iosSelectionHandles) {
            for (let CW of KC.forRange(WW, "cm-selectionHandle cm-selectionHandle-start", wW.j.cursor(MW.from, 1))) RW.push(CW);
            for (let CW of KC.forRange(WW, "cm-selectionHandle cm-selectionHandle-end", wW.j.cursor(MW.to, 1))) RW.push(CW)
          }
          return RW
        },
        update: (WW, RW) => WW.docChanged || WW.selectionSet || WW.viewportChanged || qz(WW),
        class: "cm-selectionLayer"
      }),
      Rz = wW.p.highest(rz.theme({
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
      Mz = wW.A.define({
        map: (WW, RW) => null == WW ? null : RW.mapPos(WW)
      }),
      wz = wW.C.define({
        create: () => null,
        update: (WW, RW) => (null != WW && (WW = RW.changes.mapPos(WW)), RW.effects.reduce(((WW, RW) => RW.is(Mz) ? RW.value : WW), WW))
      }),
      Cz = DR.fromClass(class {
        constructor(WW) {
          this.view = WW, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(WW) {
          var RW;
          let MW = WW.state.field(wz);
          null == MW ? null != this.cursor && (null === (RW = this.cursor) || void 0 === RW || RW.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (WW.startState.field(wz) != MW || WW.docChanged || WW.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: WW
          } = this, RW = WW.state.field(wz), MW = null != RW && WW.coordsAtPos(RW);
          if (!MW) return null;
          let wW = WW.scrollDOM.getBoundingClientRect();
          return {
            left: MW.left - wW.left + WW.scrollDOM.scrollLeft * WW.scaleX,
            top: MW.top - wW.top + WW.scrollDOM.scrollTop * WW.scaleY,
            height: MW.bottom - MW.top
          }
        }
        drawCursor(WW) {
          if (this.cursor) {
            let {
              scaleX: RW,
              scaleY: MW
            } = this.view;
            WW ? (this.cursor.style.left = WW.left / RW + "px", this.cursor.style.top = WW.top / MW + "px", this.cursor.style.height = WW.height / MW + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(WW) {
          this.view.state.field(wz) != WW && this.view.dispatch({
            effects: Mz.of(WW)
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

    function zA() {
      return [wz, Cz]
    }

    function Az(WW, RW, MW, wW, CW) {
      RW.lastIndex = 0;
      for (let zR, AW = WW.iterRange(MW, wW), bR = MW; !AW.next().done; bR += AW.value.length)
        if (!AW.lineBreak)
          for (; zR = RW.exec(AW.value);) CW(bR + zR.index, zR)
    }
    class bA {
      constructor(WW) {
        const {
          regexp: RW,
          decoration: MW,
          decorate: wW,
          boundary: CW,
          maxLength: zR = 1e3
        } = WW;
        if (!RW.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = RW, wW) this.addMatch = (WW, RW, MW, CW) => wW(CW, MW, MW + WW[0].length, WW, RW);
        else if ("function" == typeof MW) this.addMatch = (WW, RW, wW, CW) => {
          let zR = MW(WW, RW, wW);
          zR && CW(wW, wW + WW[0].length, zR)
        };
        else {
          if (!MW) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (WW, RW, wW, CW) => CW(wW, wW + WW[0].length, MW)
        }
        this.boundary = CW, this.maxLength = zR
      }
      createDeco(WW) {
        let RW = new wW.q,
          MW = RW.add.bind(RW);
        for (let {
            from: wW,
            to: CW
          }
          of
          function(WW, RW) {
            let MW = WW.EzW;
            if (1 == MW.length && MW[0].from == WW.viewport.from && MW[0].to == WW.viewport.to) return MW;
            let wW = [];
            for (let {
                from: CW,
                to: zR
              }
              of MW) CW = Math.max(WW.state.doc.lineAt(CW).from, CW - RW), zR = Math.min(WW.state.doc.lineAt(zR).to, zR + RW), wW.length && wW[wW.length - 1].to >= CW ? wW[wW.length - 1].to = zR : wW.push({
              from: CW,
              to: zR
            });
            return wW
          }(WW, this.maxLength)) Az(WW.state.doc, this.regexp, wW, CW, ((RW, wW) => this.addMatch(wW, WW, RW, MW)));
        return RW.finish()
      }
      updateDeco(WW, RW) {
        let MW = 1e9,
          wW = -1;
        return WW.docChanged && WW.changes.iterChanges(((RW, CW, zR, AW) => {
          AW >= WW.view.viewport.from && zR <= WW.view.viewport.to && (MW = Math.min(zR, MW), wW = Math.max(AW, wW))
        })), WW.viewportMoved || wW - MW > 1e3 ? this.createDeco(WW.view) : wW > -1 ? this.updateRange(WW.view, RW.map(WW.changes), MW, wW) : RW
      }
      updateRange(WW, RW, MW, wW) {
        for (let CW of WW.EzW) {
          let zR = Math.max(CW.from, MW),
            AW = Math.min(CW.to, wW);
          if (AW >= zR) {
            let MW = WW.state.doc.lineAt(zR),
              wW = MW.to < AW ? WW.state.doc.lineAt(AW) : MW,
              bR = Math.max(CW.from, MW.from),
              yR = Math.min(CW.to, wW.to);
            if (this.boundary) {
              for (; zR > MW.from; zR--)
                if (this.boundary.test(MW.text[zR - 1 - MW.from])) {
                  bR = zR;
                  break
                } for (; AW < wW.to; AW++)
                if (this.boundary.test(wW.text[AW - wW.from])) {
                  yR = AW;
                  break
                }
            }
            let NW, eW = [],
              BW = (WW, RW, MW) => eW.push(MW.range(WW, RW));
            if (MW == wW)
              for (this.regexp.lastIndex = bR - MW.from;
                (NW = this.regexp.exec(MW.text)) && NW.index < yR - MW.from;) this.addMatch(NW, WW, NW.index + MW.from, BW);
            else Az(WW.state.doc, this.regexp, bR, yR, ((RW, MW) => this.addMatch(MW, WW, RW, BW)));
            RW = RW.update({
              filterFrom: bR,
              filterTo: yR,
              filter: (WW, RW) => WW < bR || RW > yR,
              add: eW
            })
          }
        }
        return RW
      }
    }
    const yA = null != /x/.unicode ? "gu" : "g",
      Nz = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", yA),
      ez = {
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
    let Bz = null;
    const tA = wW.m.define({
      combine(WW) {
        let RW = (0, wW.O)(WW, {
          render: null,
          specialChars: Nz,
          addSpecialChars: null
        });
        return (RW.replaceTabs = ! function() {
          var WW;
          if (null == Bz && "undefined" != typeof document && document.body) {
            let RW = document.body.style;
            Bz = null != (null !== (WW = RW.tabSize) && void 0 !== WW ? WW : RW.MozTabSize)
          }
          return Bz || !1
        }()) && (RW.specialChars = new RegExp("\t|" + RW.specialChars.source, yA)), RW.addSpecialChars && (RW.specialChars = new RegExp(RW.specialChars.source + "|" + RW.addSpecialChars.source, yA)), RW
      }
    });

    function Tz() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [tA.of(WW), gA || (gA = DR.fromClass(class {
        constructor(WW) {
          this.view = WW, this.vA = sW.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(WW.state.facet(tA)), this.vA = this.decorator.createDeco(WW)
        }
        makeDecorator(WW) {
          return new bA({
            regexp: WW.specialChars,
            decoration: (RW, MW, CW) => {
              let {
                doc: zR
              } = MW.state, AW = (0, wW.J)(RW[0], 0);
              if (9 == AW) {
                let WW = zR.lineAt(CW),
                  RW = MW.state.tabSize,
                  AW = (0, wW.P)(WW.text, RW, CW - WW.from);
                return sW.replace({
                  widget: new Yz((RW - AW % RW) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[AW] || (this.decorationCache[AW] = sW.replace({
                widget: new iA(WW, AW)
              }))
            },
            boundary: WW.replaceTabs ? void 0 : /[^]/
          })
        }
        update(WW) {
          let RW = WW.state.facet(tA);
          WW.startState.facet(tA) != RW ? (this.decorator = this.makeDecorator(RW), this.vA = this.decorator.createDeco(WW.view)) : this.vA = this.decorator.updateDeco(WW, this.vA)
        }
      }, {
        vA: WW => WW.vA
      }))]
    }
    let gA = null;
    class iA extends kR {
      constructor(WW, RW) {
        super(), this.options = WW, this.code = RW
      }
      eq(WW) {
        return WW.code == this.code
      }
      toDOM(WW) {
        let RW = function(WW) {
            return WW >= 32 ? "\u2022" : 10 == WW ? "\u2424" : String.fromCharCode(9216 + WW)
          }(this.code),
          MW = WW.state.phrase("Control character") + " " + (ez[this.code] || "0x" + this.code.toString(16)),
          wW = this.options.render && this.options.render(this.code, MW, RW);
        if (wW) return wW;
        let CW = document.createElement("span");
        return CW.textContent = RW, CW.title = MW, CW.setAttribute("aria-label", MW), CW.className = "cm-specialChar", CW
      }
      ignoreEvent() {
        return !1
      }
    }
    class Yz extends kR {
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

    function Jz() {
      return Iz
    }
    const Pz = sW.line({
        class: "cm-activeLine"
      }),
      Iz = DR.fromClass(class {
        constructor(WW) {
          this.vA = this.getDeco(WW)
        }
        update(WW) {
          (WW.docChanged || WW.selectionSet) && (this.vA = this.getDeco(WW.view))
        }
        getDeco(WW) {
          let RW = -1,
            MW = [];
          for (let wW of WW.state.selection.WA) {
            let CW = WW.lineBlockAt(wW.head);
            CW.from > RW && (MW.push(Pz.range(CW.from)), RW = CW.from)
          }
          return sW.set(MW)
        }
      }, {
        vA: WW => WW.vA
      });
    class oz extends kR {
      constructor(WW) {
        super(), this.content = WW
      }
      toDOM(WW) {
        let RW = document.createElement("span");
        return RW.className = "cm-placeholder", RW.style.pointerEvents = "none", RW.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(WW) : this.content.cloneNode(!0)), RW.setAttribute("aria-hidden", "true"), RW
      }
      coordsAt(WW) {
        let RW = WW.firstChild ? KW(WW.firstChild) : [];
        if (!RW.length) return null;
        let MW = window.getComputedStyle(WW.parentNode),
          wW = HW(RW[0], "rtl" != MW.direction),
          CW = parseInt(MW.lineHeight);
        return wW.bottom - wW.top > 1.5 * CW ? {
          left: wW.left,
          right: wW.right,
          top: wW.top,
          bottom: wW.top + CW
        } : wW
      }
      ignoreEvent() {
        return !1
      }
    }

    function lz(WW) {
      let RW = DR.fromClass(class {
        constructor(RW) {
          this.view = RW, this.placeholder = WW ? sW.set([sW.widget({
            widget: new oz(WW),
            side: 1
          }).range(0)]) : sW.none
        }
        get vA() {
          return this.view.state.doc.length ? sW.none : this.placeholder
        }
      }, {
        vA: WW => WW.vA
      });
      return "string" == typeof WW ? [RW, rz.contentAttributes.of({
        "aria-placeholder": WW
      })] : RW
    }
    const Fz = 2e3;

    function fz(WW, RW) {
      let MW = WW.posAtCoords({
          x: RW.clientX,
          y: RW.clientY
        }, !1),
        CW = WW.state.doc.lineAt(MW),
        zR = MW - CW.from,
        AW = zR > Fz ? -1 : zR == CW.length ? function(WW, RW) {
          let MW = WW.coordsAtPos(WW.viewport.from);
          return MW ? Math.round(Math.abs((MW.left - RW) / WW.defaultCharacterWidth)) : -1
        }(WW, RW.clientX) : (0, wW.P)(CW.text, WW.state.tabSize, MW - CW.from);
      return {
        line: CW.number,
        col: AW,
        off: zR
      }
    }

    function Qz(WW, RW) {
      let MW = fz(WW, RW),
        CW = WW.state.selection;
      return MW ? {
        update(WW) {
          if (WW.docChanged) {
            let RW = WW.changes.mapPos(WW.startState.doc.line(MW.line).from),
              wW = WW.state.doc.lineAt(RW);
            MW = {
              line: wW.number,
              col: MW.col,
              off: Math.min(MW.off, wW.length)
            }, CW = CW.map(WW.changes)
          }
        },
        get(RW, zR, AW) {
          let bR = fz(WW, RW);
          if (!bR) return CW;
          let yR = function(WW, RW, MW) {
            let CW = Math.min(RW.line, MW.line),
              zR = Math.max(RW.line, MW.line),
              AW = [];
            if (RW.off > Fz || MW.off > Fz || RW.col < 0 || MW.col < 0) {
              let bR = Math.min(RW.off, MW.off),
                yR = Math.max(RW.off, MW.off);
              for (let RW = CW; RW <= zR; RW++) {
                let MW = WW.doc.line(RW);
                MW.length <= yR && AW.push(wW.j.range(MW.from + bR, MW.to + yR))
              }
            } else {
              let bR = Math.min(RW.col, MW.col),
                yR = Math.max(RW.col, MW.col);
              for (let RW = CW; RW <= zR; RW++) {
                let MW = WW.doc.line(RW),
                  CW = (0, wW.U)(MW.text, bR, WW.tabSize, !0);
                if (CW < 0) AW.push(wW.j.cursor(MW.to));
                else {
                  let RW = (0, wW.U)(MW.text, yR, WW.tabSize);
                  AW.push(wW.j.range(MW.from + CW, MW.from + RW))
                }
              }
            }
            return AW
          }(WW.state, MW, bR);
          return yR.length ? AW ? wW.j.create(yR.concat(CW.WA)) : wW.j.create(yR) : CW
        }
      } : null
    }

    function rA(WW) {
      let RW = (null === WW || void 0 === WW ? void 0 : WW.eventFilter) || (WW => WW.altKey && 0 == WW.button);
      return rz.mouseSelectionStyle.of(((WW, MW) => RW(MW) ? Qz(WW, MW) : null))
    }
    const cA = {
        Alt: [18, WW => !!WW.altKey],
        Control: [17, WW => !!WW.ctrlKey],
        Shift: [16, WW => !!WW.shiftKey],
        Meta: [91, WW => !!WW.metaKey]
      },
      Xz = {
        style: "cursor: crosshair"
      };

    function jA() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [RW, MW] = cA[WW.key || "Alt"],
        wW = DR.fromClass(class {
          constructor(WW) {
            this.view = WW, this.isDown = !1
          }
          set(WW) {
            this.isDown != WW && (this.isDown = WW, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(WW) {
              this.set(WW.keyCode == RW || MW(WW))
            },
            keyup(WW) {
              WW.keyCode != RW && MW(WW) || this.set(!1)
            },
            mousemove(WW) {
              this.set(MW(WW))
            }
          }
        });
      return [wW, rz.contentAttributes.of((WW => {
        var RW;
        return (null === (RW = WW.plugin(wW)) || void 0 === RW ? void 0 : RW.isDown) ? Xz : null
      }))]
    }
    const kA = "-10000px";
    class aA {
      constructor(WW, RW, MW, wW) {
        this.facet = RW, this.createTooltipView = MW, this.removeTooltipView = wW, this.input = WW.state.facet(RW), this.tooltips = this.input.filter((WW => WW));
        let CW = null;
        this.tooltipViews = this.tooltips.map((WW => CW = MW(WW, CW)))
      }
      update(WW, RW) {
        var MW;
        let wW = WW.state.facet(this.facet),
          CW = wW.filter((WW => WW));
        if (wW === this.input) {
          for (let RW of this.tooltipViews) RW.update && RW.update(WW);
          return !1
        }
        let zR = [],
          AW = RW ? [] : null;
        for (let bR = 0; bR < CW.length; bR++) {
          let MW = CW[bR],
            wW = -1;
          if (MW) {
            for (let WW = 0; WW < this.tooltips.length; WW++) {
              let RW = this.tooltips[WW];
              RW && RW.create == MW.create && (wW = WW)
            }
            if (wW < 0) zR[bR] = this.createTooltipView(MW, bR ? zR[bR - 1] : null), AW && (AW[bR] = !!MW.above);
            else {
              let MW = zR[bR] = this.tooltipViews[wW];
              AW && (AW[bR] = RW[wW]), MW.update && MW.update(WW)
            }
          }
        }
        for (let bR of this.tooltipViews) zR.indexOf(bR) < 0 && (this.removeTooltipView(bR), null === (MW = bR.destroy) || void 0 === MW || MW.call(bR));
        return RW && (AW.forEach(((WW, MW) => RW[MW] = WW)), RW.length = AW.length), this.input = wW, this.tooltips = CW, this.tooltipViews = zR, !0
      }
    }

    function sz(WW) {
      let RW = WW.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: RW.clientHeight,
        right: RW.clientWidth
      }
    }
    const dz = wW.m.define({
        combine: WW => {
          var RW, MW, wW;
          return {
            position: fW.ios ? "absolute" : (null === (RW = WW.find((WW => WW.position))) || void 0 === RW ? void 0 : RW.position) || "fixed",
            parent: (null === (MW = WW.find((WW => WW.parent))) || void 0 === MW ? void 0 : MW.parent) || null,
            tooltipSpace: (null === (wW = WW.find((WW => WW.tooltipSpace))) || void 0 === wW ? void 0 : wW.tooltipSpace) || sz
          }
        }
      }),
      pz = new WeakMap,
      hz = DR.fromClass(class {
        constructor(WW) {
          this.view = WW, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let RW = WW.state.facet(dz);
          this.position = RW.position, this.parent = RW.parent, this.classes = WW.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new aA(WW, mA, ((WW, RW) => this.createTooltip(WW, RW)), (WW => {
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
          let RW = this.manager.update(WW, this.above);
          RW && this.observeIntersection();
          let MW = RW || WW.geometryChanged,
            wW = WW.state.facet(dz);
          if (wW.position != this.position && !this.madeAbsolute) {
            this.position = wW.position;
            for (let WW of this.manager.tooltipViews) WW.dom.style.position = this.position;
            MW = !0
          }
          if (wW.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = wW.parent, this.createContainer();
            for (let WW of this.manager.tooltipViews) this.container.appendChild(WW.dom);
            MW = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          MW && this.maybeMeasure()
        }
        createTooltip(WW, RW) {
          let MW = WW.create(this.view),
            wW = RW ? RW.dom : null;
          if (MW.dom.classList.add("cm-tooltip"), WW.arrow && !MW.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let WW = document.createElement("div");
            WW.className = "cm-tooltip-arrow", MW.dom.appendChild(WW)
          }
          return MW.dom.style.position = this.position, MW.dom.style.top = kA, MW.dom.style.left = "0px", this.container.insertBefore(MW.dom, wW), MW.mount && MW.mount(this.view), this.resizeObserver && this.resizeObserver.observe(MW.dom), MW
        }
        destroy() {
          var WW, RW, MW;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let wW of this.manager.tooltipViews) wW.dom.remove(), null === (WW = wW.destroy) || void 0 === WW || WW.call(wW);
          this.parent && this.container.remove(), null === (RW = this.resizeObserver) || void 0 === RW || RW.disconnect(), null === (MW = this.intersectionObserver) || void 0 === MW || MW.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let WW = 1,
            RW = 1,
            MW = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: WW
            } = this.manager.tooltipViews[0];
            if (fW.safari) {
              let RW = WW.getBoundingClientRect();
              MW = Math.abs(RW.top + 1e4) > 1 || Math.abs(RW.left) > 1
            } else MW = !!WW.offsetParent && WW.offsetParent != this.container.ownerDocument.body
          }
          if (MW || "absolute" == this.position)
            if (this.parent) {
              let MW = this.parent.getBoundingClientRect();
              MW.width && MW.height && (WW = MW.width / this.parent.offsetWidth, RW = MW.height / this.parent.offsetHeight)
            } else({
              scaleX: WW,
              scaleY: RW
            } = this.view.viewState);
          let wW = this.view.scrollDOM.getBoundingClientRect(),
            CW = bw(this.view);
          return {
            visible: {
              left: wW.left + CW.left,
              top: wW.top + CW.top,
              right: wW.right - CW.right,
              bottom: wW.bottom - CW.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((WW, RW) => {
              let MW = this.manager.tooltipViews[RW];
              return MW.getCoords ? MW.getCoords(WW.pos) : this.view.coordsAtPos(WW.pos)
            })),
            size: this.manager.tooltipViews.map((WW => {
              let {
                dom: RW
              } = WW;
              return RW.getBoundingClientRect()
            })),
            space: this.view.state.facet(dz).tooltipSpace(this.view),
            scaleX: WW,
            scaleY: RW,
            makeAbsolute: MW
          }
        }
        writeMeasure(WW) {
          var RW;
          if (WW.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let WW of this.manager.tooltipViews) WW.dom.style.position = "absolute"
          }
          let {
            visible: MW,
            space: wW,
            scaleX: CW,
            scaleY: zR
          } = WW, AW = [];
          for (let bR = 0; bR < this.manager.tooltips.length; bR++) {
            let yR = this.manager.tooltips[bR],
              NW = this.manager.tooltipViews[bR],
              {
                dom: eW
              } = NW,
              BW = WW.pos[bR],
              tR = WW.size[bR];
            if (!BW || !1 !== yR.clip && (BW.bottom <= Math.max(MW.top, wW.top) || BW.top >= Math.min(MW.bottom, wW.bottom) || BW.right < Math.max(MW.left, wW.left) - .1 || BW.left > Math.min(MW.right, wW.right) + .1)) {
              eW.style.top = kA;
              continue
            }
            let TW = yR.arrow ? NW.dom.querySelector(".cm-tooltip-arrow") : null,
              gR = TW ? 7 : 0,
              iR = tR.right - tR.left,
              YW = null !== (RW = pz.get(NW)) && void 0 !== RW ? RW : tR.bottom - tR.top,
              JW = NW.offset || Vz,
              PW = this.view.textDirection == NR.LTR,
              IW = tR.width > wW.right - wW.left ? PW ? wW.left : wW.right - tR.width : PW ? Math.max(wW.left, Math.min(BW.left - (TW ? 14 : 0) + JW.x, wW.right - iR)) : Math.min(Math.max(wW.left, BW.left - iR + (TW ? 14 : 0) - JW.x), wW.right - iR),
              oW = this.above[bR];
            !yR.strictSide && (oW ? BW.top - YW - gR - JW.y < wW.top : BW.bottom + YW + gR + JW.y > wW.bottom) && oW == wW.bottom - BW.bottom > BW.top - wW.top && (oW = this.above[bR] = !oW);
            let lW = (oW ? BW.top - wW.top : wW.bottom - BW.bottom) - gR;
            if (lW < YW && !1 !== NW.resize) {
              if (lW < this.view.defaultLineHeight) {
                eW.style.top = kA;
                continue
              }
              pz.set(NW, YW), eW.style.height = (YW = lW) / zR + "px"
            } else eW.style.height && (eW.style.height = "");
            let FW = oW ? BW.top - YW - gR - JW.y : BW.bottom + gR + JW.y,
              fW = IW + iR;
            if (!0 !== NW.overlap)
              for (let WW of AW) WW.left < fW && WW.right > IW && WW.top < FW + YW && WW.bottom > FW && (FW = oW ? WW.top - YW - 2 - gR : WW.bottom + gR + 2);
            if ("absolute" == this.position ? (eW.style.top = (FW - WW.parent.top) / zR + "px", Uz(eW, (IW - WW.parent.left) / CW)) : (eW.style.top = FW / zR + "px", Uz(eW, IW / CW)), TW) {
              let WW = BW.left + (PW ? JW.x : -JW.x) - (IW + 14 - 7);
              TW.style.left = WW / CW + "px"
            }!0 !== NW.overlap && AW.push({
              left: IW,
              top: FW,
              right: fW,
              bottom: FW + YW
            }), eW.classList.toggle("cm-tooltip-above", oW), eW.classList.toggle("cm-tooltip-below", !oW), NW.positioned && NW.positioned(WW.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let WW of this.manager.tooltipViews) WW.dom.style.top = kA
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function Uz(WW, RW) {
      let MW = parseInt(WW.style.left, 10);
      (isNaN(MW) || Math.abs(RW - MW) > 1) && (WW.style.left = RW + "px")
    }
    const Ez = rz.baseTheme({
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
      Vz = {
        x: 0,
        y: 0
      },
      mA = wW.m.define({
        enables: [hz, Ez]
      }),
      xA = wW.m.define({
        combine: WW => WW.reduce(((WW, RW) => WW.concat(RW)), [])
      });
    class vA {
      static create(WW) {
        return new vA(WW)
      }
      constructor(WW) {
        this.view = WW, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new aA(WW, xA, ((WW, RW) => this.createHostedView(WW, RW)), (WW => WW.dom.remove()))
      }
      createHostedView(WW, RW) {
        let MW = WW.create(this.view);
        return MW.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(MW.dom, RW ? RW.dom.nextSibling : this.dom.firstChild), this.mounted && MW.mount && MW.mount(this.view), MW
      }
      mount(WW) {
        for (let RW of this.manager.tooltipViews) RW.mount && RW.mount(WW);
        this.mounted = !0
      }
      positioned(WW) {
        for (let RW of this.manager.tooltipViews) RW.positioned && RW.positioned(WW)
      }
      update(WW) {
        this.manager.update(WW)
      }
      destroy() {
        var WW;
        for (let RW of this.manager.tooltipViews) null === (WW = RW.destroy) || void 0 === WW || WW.call(RW)
      }
      passProp(WW) {
        let RW;
        for (let MW of this.manager.tooltipViews) {
          let wW = MW[WW];
          if (void 0 !== wW)
            if (void 0 === RW) RW = wW;
            else if (RW !== wW) return
        }
        return RW
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
    const Kz = mA.compute([xA], (WW => {
      let RW = WW.facet(xA);
      return 0 === RW.length ? null : {
        pos: Math.min(...RW.map((WW => WW.pos))),
        end: Math.max(...RW.map((WW => {
          var RW;
          return null !== (RW = WW.end) && void 0 !== RW ? RW : WW.pos
        }))),
        create: vA.create,
        above: RW[0].above,
        arrow: RW.some((WW => WW.arrow))
      }
    }));
    class uz {
      constructor(WW, RW, MW, wW, CW) {
        this.view = WW, this.source = RW, this.field = MW, this.setHover = wW, this.hoverTime = CW, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
          lastMove: RW
        } = this, MW = WW.docView.tile.nearest(RW.target);
        if (!MW) return;
        let wW, CW = 1;
        if (MW.isWidget()) wW = MW.posAtStart;
        else {
          if (wW = WW.posAtCoords(RW), null == wW) return;
          let MW = WW.coordsAtPos(wW);
          if (!MW || RW.y < MW.top || RW.y > MW.bottom || RW.x < MW.left - WW.defaultCharacterWidth || RW.x > MW.right + WW.defaultCharacterWidth) return;
          let zR = WW.bidiSpans(WW.state.doc.lineAt(wW)).find((WW => WW.from <= wW && WW.to >= wW)),
            AW = zR && zR.dir == NR.RTL ? -1 : 1;
          CW = RW.x < MW.left ? -AW : AW
        }
        let zR = this.source(WW, wW, CW);
        if (null === zR || void 0 === zR ? void 0 : zR.then) {
          let RW = this.pending = {
            pos: wW
          };
          zR.then((MW => {
            this.pending == RW && (this.pending = null, !MW || Array.isArray(MW) && !MW.length || WW.dispatch({
              effects: this.setHover.of(Array.isArray(MW) ? MW : [MW])
            }))
          }), (RW => nR(WW.state, RW, "hover tooltip")))
        } else !zR || Array.isArray(zR) && !zR.length || WW.dispatch({
          effects: this.setHover.of(Array.isArray(zR) ? zR : [zR])
        })
      }
      get tooltip() {
        let WW = this.view.plugin(hz),
          RW = WW ? WW.manager.tooltips.findIndex((WW => WW.create == vA.create)) : -1;
        return RW > -1 ? WW.manager.tooltipViews[RW] : null
      }
      mousemove(WW) {
        var RW, MW;
        this.lastMove = {
          x: WW.clientX,
          y: WW.clientY,
          target: WW.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: wW,
          tooltip: CW
        } = this;
        if (wW.length && CW && ! function(WW, RW) {
            let MW, {
              left: wW,
              right: CW,
              top: zR,
              bottom: AW
            } = WW.getBoundingClientRect();
            if (MW = WW.querySelector(".cm-tooltip-arrow")) {
              let WW = MW.getBoundingClientRect();
              zR = Math.min(WW.top, zR), AW = Math.max(WW.bottom, AW)
            }
            return RW.clientX >= wW - Oz && RW.clientX <= CW + Oz && RW.clientY >= zR - Oz && RW.clientY <= AW + Oz
          }(CW.dom, WW) || this.pending) {
          let {
            pos: CW
          } = wW[0] || this.pending, zR = null !== (MW = null === (RW = wW[0]) || void 0 === RW ? void 0 : RW.end) && void 0 !== MW ? MW : CW;
          (CW == zR ? this.view.posAtCoords(this.lastMove) == CW : function(WW, RW, MW, wW, CW) {
            let zR = WW.scrollDOM.getBoundingClientRect(),
              AW = WW.documentTop + WW.documentPadding.top + WW.contentHeight;
            if (zR.left > wW || zR.right < wW || zR.top > CW || Math.min(zR.bottom, AW) < CW) return !1;
            let bR = WW.posAtCoords({
              x: wW,
              y: CW
            }, !1);
            return bR >= RW && bR <= MW
          }(this.view, CW, zR, WW.clientX, WW.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(WW) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: RW
        } = this;
        if (RW.length) {
          let {
            tooltip: RW
          } = this;
          RW && RW.dom.contains(WW.relatedTarget) ? this.watchTooltipLeave(RW.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(WW) {
        let RW = MW => {
          WW.removeEventListener("mouseleave", RW), this.active.length && !this.view.dom.contains(MW.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        WW.addEventListener("mouseleave", RW)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const Oz = 4;

    function nz(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        MW = wW.A.define(),
        CW = wW.C.define({
          create: () => [],
          update(WW, CW) {
            if (WW.length && (RW.hideOnChange && (CW.docChanged || CW.selection) ? WW = [] : RW.hideOn && (WW = WW.filter((WW => !RW.hideOn(CW, WW)))), CW.docChanged)) {
              let RW = [];
              for (let MW of WW) {
                let WW = CW.changes.mapPos(MW.pos, -1, wW.n.TrackDel);
                if (null != WW) {
                  let wW = Object.assign(Object.create(null), MW);
                  wW.pos = WW, null != wW.end && (wW.end = CW.changes.mapPos(wW.end)), RW.push(wW)
                }
              }
              WW = RW
            }
            for (let RW of CW.effects) RW.is(MW) && (WW = RW.value), RW.is(Lz) && (WW = []);
            return WW
          },
          provide: WW => xA.from(WW)
        });
      return {
        active: CW,
        extension: [CW, DR.define((wW => new uz(wW, WW, CW, MW, RW.hoverTime || 300))), Kz]
      }
    }

    function Gz(WW, RW) {
      let MW = WW.plugin(hz);
      if (!MW) return null;
      let wW = MW.manager.tooltips.indexOf(RW);
      return wW < 0 ? null : MW.manager.tooltipViews[wW]
    }
    const Lz = wW.A.define();
    const Hz = wW.m.define({
      combine(WW) {
        let RW, MW;
        for (let wW of WW) RW = RW || wW.topContainer, MW = MW || wW.bottomContainer;
        return {
          topContainer: RW,
          bottomContainer: MW
        }
      }
    });

    function Dz(WW, RW) {
      let MW = WW.plugin(qA),
        wW = MW ? MW.specs.indexOf(RW) : -1;
      return wW > -1 ? MW.panels[wW] : null
    }
    const qA = DR.fromClass(class {
      constructor(WW) {
        this.input = WW.state.facet(WA), this.specs = this.input.filter((WW => WW)), this.panels = this.specs.map((RW => RW(WW)));
        let RW = WW.state.facet(Hz);
        this.top = new Zz(WW, !0, RW.topContainer), this.bottom = new Zz(WW, !1, RW.bottomContainer), this.top.sync(this.panels.filter((WW => WW.top))), this.bottom.sync(this.panels.filter((WW => !WW.top)));
        for (let MW of this.panels) MW.dom.classList.add("cm-panel"), MW.mount && MW.mount()
      }
      update(WW) {
        let RW = WW.state.facet(Hz);
        this.top.container != RW.topContainer && (this.top.sync([]), this.top = new Zz(WW.view, !0, RW.topContainer)), this.bottom.container != RW.bottomContainer && (this.bottom.sync([]), this.bottom = new Zz(WW.view, !1, RW.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let MW = WW.state.facet(WA);
        if (MW != this.input) {
          let RW = MW.filter((WW => WW)),
            wW = [],
            CW = [],
            zR = [],
            AW = [];
          for (let MW of RW) {
            let RW, bR = this.specs.indexOf(MW);
            bR < 0 ? (RW = MW(WW.view), AW.push(RW)) : (RW = this.panels[bR], RW.update && RW.update(WW)), wW.push(RW), (RW.top ? CW : zR).push(RW)
          }
          this.specs = RW, this.panels = wW, this.top.sync(CW), this.bottom.sync(zR);
          for (let WW of AW) WW.dom.classList.add("cm-panel"), WW.mount && WW.mount()
        } else
          for (let wW of this.panels) wW.update && wW.update(WW)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: WW => rz.scrollMargins.of((RW => {
        let MW = RW.plugin(WW);
        return MW && {
          top: MW.top.scrollMargin(),
          bottom: MW.bottom.scrollMargin()
        }
      }))
    });
    class Zz {
      constructor(WW, RW, MW) {
        this.view = WW, this.top = RW, this.container = MW, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(WW) {
        for (let RW of this.panels) RW.destroy && WW.indexOf(RW) < 0 && RW.destroy();
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
        for (let RW of this.panels)
          if (RW.dom.parentNode == this.dom) {
            for (; WW != RW.dom;) WW = Sz(WW);
            WW = WW.nextSibling
          } else this.dom.insertBefore(RW.dom, WW);
        for (; WW;) WW = Sz(WW)
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

    function Sz(WW) {
      let RW = WW.nextSibling;
      return WW.remove(), RW
    }
    const WA = wW.m.define({
      enables: qA
    });

    function RA(WW, RW) {
      let MW, CW = new Promise((WW => MW = WW)),
        zR = WW => function(WW, RW, MW) {
          let wW = RW.content ? RW.content(WW, (() => AW(null))) : null;
          if (!wW) {
            if (wW = (0, BW.c)("form"), RW.input) {
              let WW = (0, BW.c)("input", RW.input);
              /^(text|password|number|email|tel|url)$/.test(WW.type) && WW.classList.add("cm-textfield"), WW.name || (WW.name = "input"), wW.appendChild((0, BW.c)("label", (RW.label || "") + ": ", WW))
            } else wW.appendChild(document.createTextNode(RW.label || ""));
            wW.appendChild(document.createTextNode(" ")), wW.appendChild((0, BW.c)("button", {
              class: "cm-button",
              type: "submit"
            }, RW.submitLabel || "OK"))
          }
          let CW = "FORM" == wW.nodeName ? [wW] : wW.querySelectorAll("form");
          for (let bR = 0; bR < CW.length; bR++) {
            let WW = CW[bR];
            WW.addEventListener("keydown", (RW => {
              27 == RW.keyCode ? (RW.preventDefault(), AW(null)) : 13 == RW.keyCode && (RW.preventDefault(), AW(WW))
            })), WW.addEventListener("submit", (RW => {
              RW.preventDefault(), AW(WW)
            }))
          }
          let zR = (0, BW.c)("div", wW, (0, BW.c)("button", {
            onclick: () => AW(null),
            "aria-label": WW.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          RW.class && (zR.className = RW.class);

          function AW(RW) {
            zR.contains(zR.ownerDocument.activeElement) && WW.focus(), MW(RW)
          }
          return zR.classList.add("cm-dialog"), {
            dom: zR,
            top: RW.top,
            mount: () => {
              if (RW.focus) {
                let WW;
                WW = "string" == typeof RW.focus ? wW.querySelector(RW.focus) : wW.querySelector("input") || wW.querySelector("button"), WW && "select" in WW ? WW.select() : WW && "focus" in WW && WW.focus()
              }
            }
          }
        }(WW, RW, MW);
      WW.state.field(MA, !1) ? WW.dispatch({
        effects: wA.of(zR)
      }) : WW.dispatch({
        effects: wW.A.appendConfig.of(MA.init((() => [zR])))
      });
      let AW = CA.of(zR);
      return {
        close: AW,
        result: CW.then((RW => ((WW.win.queueMicrotask || (RW => WW.win.setTimeout(RW, 10)))((() => {
          WW.state.field(MA).indexOf(zR) > -1 && WW.dispatch({
            effects: AW
          })
        })), RW)))
      }
    }
    const MA = wW.C.define({
        create: () => [],
        update(WW, RW) {
          for (let MW of RW.effects) MW.is(wA) ? WW = [MW.value].concat(WW) : MW.is(CA) && (WW = WW.filter((WW => WW != MW.value)));
          return WW
        },
        provide: WW => WA.computeN([WW], (RW => RW.field(WW)))
      }),
      wA = wW.A.define(),
      CA = wW.A.define();
    class zb extends wW.w {
      compare(WW) {
        return this == WW || this.constructor == WW.constructor && this.eq(WW)
      }
      eq(WW) {
        return !1
      }
      destroy(WW) {}
    }
    zb.prototype.elementClass = "", zb.prototype.toDOM = void 0, zb.prototype.mapMode = wW.n.TrackBefore, zb.prototype.startSide = zb.prototype.endSide = -1, zb.prototype.point = !0;
    const AA = wW.m.define(),
      bb = wW.m.define(),
      yb = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => wW.s.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      NA = wW.m.define();

    function eA(WW) {
      return [tb(), NA.of({
        ...yb,
        ...WW
      })]
    }
    const BA = wW.m.define({
      combine: WW => WW.some((WW => WW))
    });

    function tb(WW) {
      let RW = [TA];
      return WW && !1 === WW.fixed && RW.push(BA.of(!0)), RW
    }
    const TA = DR.fromClass(class {
      constructor(WW) {
        this.view = WW, this.domAfter = null, this.prevViewport = WW.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = WW.state.facet(NA).map((RW => new JA(WW, RW))), this.fixed = !WW.state.facet(BA);
        for (let RW of this.gutters) "after" == RW.config.side ? this.getDOMAfter().appendChild(RW.dom) : this.dom.appendChild(RW.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), WW.scrollDOM.insertBefore(this.dom, WW.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(WW) {
        if (this.updateGutters(WW)) {
          let RW = this.prevViewport,
            MW = WW.view.viewport,
            wW = Math.min(RW.to, MW.to) - Math.max(RW.from, MW.from);
          this.syncGutters(wW < .8 * (MW.to - MW.from))
        }
        if (WW.geometryChanged) {
          let WW = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = WW, this.domAfter && (this.domAfter.style.minHeight = WW)
        }
        this.view.state.facet(BA) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = WW.view.viewport
      }
      syncGutters(WW) {
        let RW = this.dom.nextSibling;
        WW && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let MW = wW.s.iter(this.view.state.facet(AA), this.view.viewport.from),
          CW = [],
          zR = this.gutters.map((WW => new YA(WW, this.view.viewport, -this.view.documentPadding.top)));
        for (let wW of this.view.viewportLineBlocks)
          if (CW.length && (CW = []), Array.isArray(wW.type)) {
            let WW = !0;
            for (let RW of wW.type)
              if (RW.type == aR.Text && WW) {
                ib(MW, CW, RW.from);
                for (let WW of zR) WW.line(this.view, RW, CW);
                WW = !1
              } else if (RW.widget)
              for (let WW of zR) WW.widget(this.view, RW)
          } else if (wW.type == aR.Text) {
          ib(MW, CW, wW.from);
          for (let WW of zR) WW.line(this.view, wW, CW)
        } else if (wW.widget)
          for (let WW of zR) WW.widget(this.view, wW);
        for (let wW of zR) wW.finish();
        WW && (this.view.scrollDOM.insertBefore(this.dom, RW), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(WW) {
        let RW = WW.startState.facet(NA),
          MW = WW.state.facet(NA),
          CW = WW.docChanged || WW.heightChanged || WW.viewportChanged || !wW.s.eq(WW.startState.facet(AA), WW.state.facet(AA), WW.view.viewport.from, WW.view.viewport.to);
        if (RW == MW)
          for (let wW of this.gutters) wW.update(WW) && (CW = !0);
        else {
          CW = !0;
          let wW = [];
          for (let CW of MW) {
            let MW = RW.indexOf(CW);
            MW < 0 ? wW.push(new JA(this.view, CW)) : (this.gutters[MW].update(WW), wW.push(this.gutters[MW]))
          }
          for (let WW of this.gutters) WW.dom.remove(), wW.indexOf(WW) < 0 && WW.destroy();
          for (let WW of wW) "after" == WW.config.side ? this.getDOMAfter().appendChild(WW.dom) : this.dom.appendChild(WW.dom);
          this.gutters = wW
        }
        return CW
      }
      destroy() {
        for (let WW of this.gutters) WW.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: WW => rz.scrollMargins.of((RW => {
        let MW = RW.plugin(WW);
        if (!MW || 0 == MW.gutters.length || !MW.fixed) return null;
        let wW = MW.dom.offsetWidth * RW.scaleX,
          CW = MW.domAfter ? MW.domAfter.offsetWidth * RW.scaleX : 0;
        return RW.textDirection == NR.LTR ? {
          left: wW,
          right: CW
        } : {
          right: wW,
          left: CW
        }
      }))
    });

    function gb(WW) {
      return Array.isArray(WW) ? WW : [WW]
    }

    function ib(WW, RW, MW) {
      for (; WW.value && WW.from <= MW;) WW.from == MW && RW.push(WW.value), WW.next()
    }
    class YA {
      constructor(WW, RW, MW) {
        this.gutter = WW, this.height = MW, this.i = 0, this.cursor = wW.s.iter(WW.markers, RW.from)
      }
      addElement(WW, RW, MW) {
        let {
          gutter: wW
        } = this, CW = (RW.top - this.height) / WW.scaleY, zR = RW.height / WW.scaleY;
        if (this.i == wW.elements.length) {
          let RW = new PA(WW, zR, CW, MW);
          wW.elements.push(RW), wW.dom.appendChild(RW.dom)
        } else wW.elements[this.i].update(WW, zR, CW, MW);
        this.height = RW.bottom, this.i++
      }
      line(WW, RW, MW) {
        let wW = [];
        ib(this.cursor, wW, RW.from), MW.length && (wW = wW.concat(MW));
        let CW = this.gutter.config.lineMarker(WW, RW, wW);
        CW && wW.unshift(CW);
        let zR = this.gutter;
        (0 != wW.length || zR.config.renderEmptyElements) && this.addElement(WW, RW, wW)
      }
      widget(WW, RW) {
        let MW = this.gutter.config.widgetMarker(WW, RW.widget, RW),
          wW = MW ? [MW] : null;
        for (let CW of WW.state.facet(bb)) {
          let MW = CW(WW, RW.widget, RW);
          MW && (wW || (wW = [])).push(MW)
        }
        wW && this.addElement(WW, RW, wW)
      }
      finish() {
        let WW = this.gutter;
        for (; WW.elements.length > this.i;) {
          let RW = WW.elements.pop();
          WW.dom.removeChild(RW.dom), RW.destroy()
        }
      }
    }
    class JA {
      constructor(WW, RW) {
        this.view = WW, this.config = RW, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let MW in RW.domEventHandlers) this.dom.addEventListener(MW, (wW => {
          let CW, zR = wW.target;
          if (zR != this.dom && this.dom.contains(zR)) {
            for (; zR.parentNode != this.dom;) zR = zR.parentNode;
            let WW = zR.getBoundingClientRect();
            CW = (WW.top + WW.bottom) / 2
          } else CW = wW.clientY;
          let AW = WW.lineBlockAtHeight(CW - WW.documentTop);
          RW.domEventHandlers[MW](WW, AW, wW) && wW.preventDefault()
        }));
        this.markers = gb(RW.markers(WW)), RW.initialSpacer && (this.spacer = new PA(WW, 0, 0, [RW.initialSpacer(WW)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(WW) {
        let RW = this.markers;
        if (this.markers = gb(this.config.markers(WW.view)), this.spacer && this.config.updateSpacer) {
          let RW = this.config.updateSpacer(this.spacer.markers[0], WW);
          RW != this.spacer.markers[0] && this.spacer.update(WW.view, 0, 0, [RW])
        }
        let MW = WW.view.viewport;
        return !wW.s.eq(this.markers, RW, MW.from, MW.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(WW)
      }
      destroy() {
        for (let WW of this.elements) WW.destroy()
      }
    }
    class PA {
      constructor(WW, RW, MW, wW) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(WW, RW, MW, wW)
      }
      update(WW, RW, MW, wW) {
        this.height != RW && (this.height = RW, this.dom.style.height = RW + "px"), this.above != MW && (this.dom.style.marginTop = (this.above = MW) ? MW + "px" : ""),
          function(WW, RW) {
            if (WW.length != RW.length) return !1;
            for (let MW = 0; MW < WW.length; MW++)
              if (!WW[MW].compare(RW[MW])) return !1;
            return !0
          }(this.markers, wW) || this.setMarkers(WW, wW)
      }
      setMarkers(WW, RW) {
        let MW = "cm-gutterElement",
          wW = this.dom.firstChild;
        for (let CW = 0, zR = 0;;) {
          let AW = zR,
            bR = CW < RW.length ? RW[CW++] : null,
            yR = !1;
          if (bR) {
            let WW = bR.elementClass;
            WW && (MW += " " + WW);
            for (let RW = zR; RW < this.markers.length; RW++)
              if (this.markers[RW].compare(bR)) {
                AW = RW, yR = !0;
                break
              }
          } else AW = this.markers.length;
          for (; zR < AW;) {
            let WW = this.markers[zR++];
            if (WW.toDOM) {
              WW.destroy(wW);
              let RW = wW.nextSibling;
              wW.remove(), wW = RW
            }
          }
          if (!bR) break;
          bR.toDOM && (yR ? wW = wW.nextSibling : this.dom.insertBefore(bR.toDOM(WW), wW)), yR && zR++
        }
        this.dom.className = MW, this.markers = RW
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const IA = wW.m.define(),
      oA = wW.m.define(),
      lA = wW.m.define({
        combine: WW => (0, wW.O)(WW, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(WW, RW) {
            let MW = Object.assign({}, WW);
            for (let wW in RW) {
              let WW = MW[wW],
                CW = RW[wW];
              MW[wW] = WW ? (RW, MW, wW) => WW(RW, MW, wW) || CW(RW, MW, wW) : CW
            }
            return MW
          }
        })
      });
    class FA extends zb {
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

    function fA(WW, RW) {
      return WW.state.facet(lA).formatNumber(RW, WW.state)
    }
    const QA = NA.compute([lA], (WW => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: WW => WW.state.facet(IA),
      lineMarker: (WW, RW, MW) => MW.some((WW => WW.toDOM)) ? null : new FA(fA(WW, WW.state.doc.lineAt(RW.from).number)),
      widgetMarker: (WW, RW, MW) => {
        for (let wW of WW.state.facet(oA)) {
          let CW = wW(WW, RW, MW);
          if (CW) return CW
        }
        return null
      },
      lineMarkerChange: WW => WW.startState.facet(lA) != WW.state.facet(lA),
      initialSpacer: WW => new FA(fA(WW, cb(WW.state.doc.lines))),
      updateSpacer(WW, RW) {
        let MW = fA(RW.view, cb(RW.view.state.doc.lines));
        return MW == WW.number ? WW : new FA(MW)
      },
      domEventHandlers: WW.facet(lA).domEventHandlers,
      side: "before"
    })));

    function rb() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [lA.of(WW), tb(), QA]
    }

    function cb(WW) {
      let RW = 9;
      for (; RW < WW;) RW = 10 * RW + 9;
      return RW
    }
    const XA = new class extends zb {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      jb = AA.compute(["selection"], (WW => {
        let RW = [],
          MW = -1;
        for (let wW of WW.selection.WA) {
          let CW = WW.doc.lineAt(wW.head).from;
          CW > MW && (MW = CW, RW.push(XA.range(CW)))
        }
        return wW.s.of(RW)
      }));

    function kb() {
      return jb
    }
  },
  38808: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW,
      g: () => TW,
      j: () => AW,
      n: () => eW,
      r: () => NW,
      t: () => dW,
      w: () => hW,
      x: () => pW,
      z: () => gR
    });
    const wW = 1024;
    let CW = 0;
    class zR {
      constructor(WW, RW) {
        this.from = WW, this.to = RW
      }
    }
    class AW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = CW++, this.perNode = !!WW.perNode, this.deserialize = WW.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = WW.combine || null
      }
      add(WW) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof WW && (WW = NW.match(WW)), RW => {
          let MW = WW(RW);
          return void 0 === MW ? null : [this, MW]
        }
      }
    }
    AW.closedBy = new AW({
      deserialize: WW => WW.split(" ")
    }), AW.openedBy = new AW({
      deserialize: WW => WW.split(" ")
    }), AW.group = new AW({
      deserialize: WW => WW.split(" ")
    }), AW.isolate = new AW({
      deserialize: WW => {
        if (WW && "rtl" != WW && "ltr" != WW && "auto" != WW) throw new RangeError("Invalid value for isolate: " + WW);
        return WW || "auto"
      }
    }), AW.contextHash = new AW({
      perNode: !0
    }), AW.lookAhead = new AW({
      perNode: !0
    }), AW.mounted = new AW({
      perNode: !0
    });
    class bR {
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = WW, this.overlay = RW, this.parser = MW, this.bracketed = wW
      }
      static get(WW) {
        return WW && WW.props && WW.props[AW.mounted.id]
      }
    }
    const yR = Object.create(null);
    class NW {
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = WW, this.props = RW, this.id = MW, this.flags = wW
      }
      static define(WW) {
        let RW = WW.props && WW.props.length ? Object.create(null) : yR,
          MW = (WW.top ? 1 : 0) | (WW.skipped ? 2 : 0) | (WW.error ? 4 : 0) | (null == WW.name ? 8 : 0),
          wW = new NW(WW.name || "", RW, WW.id, MW);
        if (WW.props)
          for (let CW of WW.props)
            if (Array.isArray(CW) || (CW = CW(wW)), CW) {
              if (CW[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              RW[CW[0].id] = CW[1]
            } return wW
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
          let RW = this.prop(AW.group);
          return !!RW && RW.indexOf(WW) > -1
        }
        return this.id == WW
      }
      static match(WW) {
        let RW = Object.create(null);
        for (let MW in WW)
          for (let wW of MW.split(" ")) RW[wW] = WW[MW];
        return WW => {
          for (let MW = WW.prop(AW.group), wW = -1; wW < (MW ? MW.length : 0); wW++) {
            let CW = RW[wW < 0 ? WW.name : MW[wW]];
            if (CW) return CW
          }
        }
      }
    }
    NW.none = new NW("", Object.create(null), 0, 8);
    class eW {
      constructor(WW) {
        this.types = WW;
        for (let RW = 0; RW < WW.length; RW++)
          if (WW[RW].id != RW) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let WW = [];
        for (var RW = arguments.length, MW = new Array(RW), wW = 0; wW < RW; wW++) MW[wW] = arguments[wW];
        for (let CW of this.types) {
          let RW = null;
          for (let WW of MW) {
            let MW = WW(CW);
            if (MW) {
              RW || (RW = Object.assign({}, CW.props));
              let WW = MW[1],
                wW = MW[0];
              wW.combine && wW.id in RW && (WW = wW.combine(RW[wW.id], WW)), RW[wW.id] = WW
            }
          }
          WW.push(RW ? new NW(CW.name, RW, CW.id, CW.flags) : CW)
        }
        return new eW(WW)
      }
    }
    const BW = new WeakMap,
      tR = new WeakMap;
    var TW;
    ! function(WW) {
      WW[WW.ExcludeBuffers = 1] = "ExcludeBuffers", WW[WW.IncludeAnonymous = 2] = "IncludeAnonymous", WW[WW.IgnoreMounts = 4] = "IgnoreMounts", WW[WW.IgnoreOverlays = 8] = "IgnoreOverlays", WW[WW.EnterBracketed = 16] = "EnterBracketed"
    }(TW || (TW = {}));
    class gR {
      constructor(WW, RW, MW, wW, CW) {
        if (this.type = WW, this.children = RW, this.positions = MW, this.length = wW, this.props = null, CW && CW.length) {
          this.props = Object.create(null);
          for (let [WW, RW] of CW) this.props["number" == typeof WW ? WW : WW.id] = RW
        }
      }
      toString() {
        let WW = bR.get(this);
        if (WW && !WW.overlay) return WW.tree.toString();
        let RW = "";
        for (let MW of this.children) {
          let WW = MW.toString();
          WW && (RW && (RW += ","), RW += WW)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (RW.length ? "(" + RW + ")" : "") : RW
      }
      cursor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new XW(this.topNode, WW)
      }
      cursorAt(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = BW.get(this) || this.topNode,
          wW = new XW(MW);
        return wW.moveTo(WW, RW), BW.set(this, wW._tree), wW
      }
      get topNode() {
        return new oW(this, 0, 0, null)
      }
      resolve(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = PW(BW.get(this) || this.topNode, WW, RW, !1);
        return BW.set(this, MW), MW
      }
      resolveInner(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = PW(tR.get(this) || this.topNode, WW, RW, !0);
        return tR.set(this, MW), MW
      }
      resolveStack(WW) {
        return function(WW, RW, MW) {
          let wW = WW.resolveInner(RW, MW),
            CW = null;
          for (let zR = wW instanceof oW ? wW : wW.context.parent; zR; zR = zR.parent)
            if (zR.index < 0) {
              let WW = zR.parent;
              (CW || (CW = [wW])).push(WW.resolve(RW, MW)), zR = WW
            } else {
              let WW = bR.get(zR.tree);
              if (WW && WW.overlay && WW.overlay[0].from <= RW && WW.overlay[WW.overlay.length - 1].to >= RW) {
                let AW = new oW(WW.tree, WW.overlay[0].from + zR.from, -1, zR);
                (CW || (CW = [wW])).push(PW(AW, RW, MW, !1))
              }
            } return CW ? rR(CW) : wW
        }(this, WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(WW) {
        let {
          enter: RW,
          Cw: MW,
          from: wW = 0,
          to: CW = this.length
        } = WW, zR = WW.mode || 0, AW = (zR & TW.IncludeAnonymous) > 0;
        for (let bR = this.cursor(zR | TW.IncludeAnonymous);;) {
          let WW = !1;
          if (bR.from <= CW && bR.to >= wW && (!AW && bR.type.isAnonymous || !1 !== RW(bR))) {
            if (bR.firstChild()) continue;
            WW = !0
          }
          for (; WW && MW && (AW || !bR.type.isAnonymous) && MW(bR), !bR.nextSibling();) {
            if (!bR.parent()) return;
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
          for (let RW in this.props) WW.push([+RW, this.props[RW]]);
        return WW
      }
      balance() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : sW(NW.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((WW, RW, MW) => new gR(this.type, WW, RW, MW, this.propValues)), WW.makeTree || ((WW, RW, MW) => new gR(NW.none, WW, RW, MW)))
      }
      static build(WW) {
        return function(WW) {
          var RW;
          let {
            buffer: MW,
            nodeSet: CW,
            maxBufferLength: zR = wW,
            reused: bR = [],
            minRepeatType: yR = CW.types.length
          } = WW, NW = Array.isArray(MW) ? new iR(MW, MW.length) : MW, eW = CW.types, BW = 0, tR = 0;

          function TW(WW, RW, MW, wW, AW, gR) {
            let {
              id: iR,
              start: fW,
              end: QW,
              size: rR
            } = NW, cR = tR, XW = BW;
            if (rR < 0) {
              if (NW.next(), -1 == rR) {
                let RW = bR[iR];
                return MW.push(RW), void wW.push(fW - WW)
              }
              if (-3 == rR) return void(BW = iR);
              if (-4 == rR) return void(tR = iR);
              throw new RangeError(`Unrecognized record size: ${rR}`)
            }
            let jR, kR, aR = eW[iR],
              dW = fW - WW;
            if (QW - fW <= zR && (kR = lW(NW.pos - RW, AW))) {
              let RW = new Uint16Array(kR.size - kR.skip),
                MW = NW.pos - kR.size,
                wW = RW.length;
              for (; NW.pos > MW;) wW = FW(kR.start, RW, wW);
              jR = new YW(RW, QW - kR.start, CW), dW = kR.start - WW
            } else {
              let WW = NW.pos - rR;
              NW.next();
              let RW = [],
                MW = [],
                wW = iR >= yR ? iR : -1,
                CW = 0,
                AW = QW;
              for (; NW.pos > WW;) wW >= 0 && NW.id == wW && NW.size >= 0 ? (NW.end <= AW - zR && (IW(RW, MW, fW, CW, NW.end, AW, wW, cR, XW), CW = RW.length, AW = NW.end), NW.next()) : gR > 2500 ? JW(fW, WW, RW, MW) : TW(fW, WW, RW, MW, wW, gR + 1);
              if (wW >= 0 && CW > 0 && CW < RW.length && IW(RW, MW, fW, CW, fW, AW, wW, cR, XW), RW.reverse(), MW.reverse(), wW > -1 && CW > 0) {
                let WW = PW(aR, XW);
                jR = sW(aR, RW, MW, 0, RW.length, 0, QW - fW, WW, WW)
              } else jR = oW(aR, RW, MW, QW - fW, cR - QW, XW)
            }
            MW.push(jR), wW.push(dW)
          }

          function JW(WW, RW, MW, wW) {
            let AW = [],
              bR = 0,
              yR = -1;
            for (; NW.pos > RW;) {
              let {
                id: WW,
                start: RW,
                end: MW,
                size: wW
              } = NW;
              if (wW > 4) NW.next();
              else {
                if (yR > -1 && RW < yR) break;
                yR < 0 && (yR = MW - zR), AW.push(WW, RW, MW), bR++, NW.next()
              }
            }
            if (bR) {
              let RW = new Uint16Array(4 * bR),
                zR = AW[AW.length - 2];
              for (let WW = AW.length - 3, MW = 0; WW >= 0; WW -= 3) RW[MW++] = AW[WW], RW[MW++] = AW[WW + 1] - zR, RW[MW++] = AW[WW + 2] - zR, RW[MW++] = MW;
              MW.push(new YW(RW, AW[2] - zR, CW)), wW.push(zR - WW)
            }
          }

          function PW(WW, RW) {
            return (MW, wW, CW) => {
              let zR, bR, yR = 0,
                NW = MW.length - 1;
              if (NW >= 0 && (zR = MW[NW]) instanceof gR) {
                if (!NW && zR.type == WW && zR.length == CW) return zR;
                (bR = zR.prop(AW.lookAhead)) && (yR = wW[NW] + zR.length + bR)
              }
              return oW(WW, MW, wW, CW, yR, RW)
            }
          }

          function IW(WW, RW, MW, wW, zR, AW, bR, yR, NW) {
            let eW = [],
              BW = [];
            for (; WW.length > wW;) eW.push(WW.pop()), BW.push(RW.pop() + MW - zR);
            WW.push(oW(CW.types[bR], eW, BW, AW - zR, yR - AW, NW)), RW.push(zR - MW)
          }

          function oW(WW, RW, MW, wW, CW, zR, bR) {
            if (zR) {
              let WW = [AW.contextHash, zR];
              bR = bR ? [WW].concat(bR) : [WW]
            }
            if (CW > 25) {
              let WW = [AW.lookAhead, CW];
              bR = bR ? [WW].concat(bR) : [WW]
            }
            return new gR(WW, RW, MW, wW, bR)
          }

          function lW(WW, RW) {
            let MW = NW.fork(),
              wW = 0,
              CW = 0,
              AW = 0,
              bR = MW.end - zR,
              eW = {
                size: 0,
                start: 0,
                skip: 0
              };
            WW: for (let zR = MW.pos - WW; MW.pos > zR;) {
              let WW = MW.size;
              if (MW.id == RW && WW >= 0) {
                eW.size = wW, eW.start = CW, eW.skip = AW, AW += 4, wW += 4, MW.next();
                continue
              }
              let NW = MW.pos - WW;
              if (WW < 0 || NW < zR || MW.start < bR) break;
              let BW = MW.id >= yR ? 4 : 0,
                tR = MW.start;
              for (MW.next(); MW.pos > NW;) {
                if (MW.size < 0) {
                  if (-3 != MW.size && -4 != MW.size) break WW;
                  BW += 4
                } else MW.id >= yR && (BW += 4);
                MW.next()
              }
              CW = tR, wW += WW, AW += BW
            }
            return (RW < 0 || wW == WW) && (eW.size = wW, eW.start = CW, eW.skip = AW), eW.size > 4 ? eW : void 0
          }

          function FW(WW, RW, MW) {
            let {
              id: wW,
              start: CW,
              end: zR,
              size: AW
            } = NW;
            if (NW.next(), AW >= 0 && wW < yR) {
              let bR = MW;
              if (AW > 4) {
                let wW = NW.pos - (AW - 4);
                for (; NW.pos > wW;) MW = FW(WW, RW, MW)
              }
              RW[--MW] = bR, RW[--MW] = zR - WW, RW[--MW] = CW - WW, RW[--MW] = wW
            } else - 3 == AW ? BW = wW : -4 == AW && (tR = wW);
            return MW
          }
          let fW = [],
            QW = [];
          for (; NW.pos > 0;) TW(WW.start || 0, WW.bufferStart || 0, fW, QW, -1, 0);
          let rR = null !== (RW = WW.length) && void 0 !== RW ? RW : fW.length ? QW[0] + fW[0].length : 0;
          return new gR(eW[WW.topID], fW.reverse(), QW.reverse(), rR)
        }(WW)
      }
    }
    gR.empty = new gR(NW.none, [], [], 0);
    class iR {
      constructor(WW, RW) {
        this.buffer = WW, this.index = RW
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
        return new iR(this.buffer, this.index)
      }
    }
    class YW {
      constructor(WW, RW, MW) {
        this.buffer = WW, this.length = RW, this.set = MW
      }
      get type() {
        return NW.none
      }
      toString() {
        let WW = [];
        for (let RW = 0; RW < this.buffer.length;) WW.push(this.childString(RW)), RW = this.buffer[RW + 3];
        return WW.join(",")
      }
      childString(WW) {
        let RW = this.buffer[WW],
          MW = this.buffer[WW + 3],
          wW = this.set.types[RW],
          CW = wW.name;
        if (/\W/.test(CW) && !wW.isError && (CW = JSON.stringify(CW)), MW == (WW += 4)) return CW;
        let zR = [];
        for (; WW < MW;) zR.push(this.childString(WW)), WW = this.buffer[WW + 3];
        return CW + "(" + zR.join(",") + ")"
      }
      findChild(WW, RW, MW, wW, CW) {
        let {
          buffer: zR
        } = this, AW = -1;
        for (let bR = WW; bR != RW && !(JW(CW, wW, zR[bR + 1], zR[bR + 2]) && (AW = bR, MW > 0)); bR = zR[bR + 3]);
        return AW
      }
      slice(WW, RW, MW) {
        let wW = this.buffer,
          CW = new Uint16Array(RW - WW),
          zR = 0;
        for (let AW = WW, bR = 0; AW < RW;) {
          CW[bR++] = wW[AW++], CW[bR++] = wW[AW++] - MW;
          let RW = CW[bR++] = wW[AW++] - MW;
          CW[bR++] = wW[AW++] - WW, zR = Math.max(zR, RW)
        }
        return new YW(CW, zR, this.set)
      }
    }

    function JW(WW, RW, MW, wW) {
      switch (WW) {
        case -2:
          return MW < RW;
        case -1:
          return wW >= RW && MW < RW;
        case 0:
          return MW < RW && wW > RW;
        case 1:
          return MW <= RW && wW > RW;
        case 2:
          return wW > RW;
        case 4:
          return !0
      }
    }

    function PW(WW, RW, MW, wW) {
      for (var CW; WW.from == WW.to || (MW < 1 ? WW.from >= RW : WW.from > RW) || (MW > -1 ? WW.to <= RW : WW.to < RW);) {
        let RW = !wW && WW instanceof oW && WW.index < 0 ? null : WW.parent;
        if (!RW) return WW;
        WW = RW
      }
      let zR = wW ? 0 : TW.IgnoreOverlays;
      if (wW)
        for (let AW = WW, bR = AW.parent; bR; AW = bR, bR = AW.parent) AW instanceof oW && AW.index < 0 && (null === (CW = bR.enter(RW, MW, zR)) || void 0 === CW ? void 0 : CW.from) != AW.from && (WW = bR);
      for (;;) {
        let wW = WW.enter(RW, MW, zR);
        if (!wW) return WW;
        WW = wW
      }
    }
    class IW {
      cursor() {
        return new XW(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(WW) {
        let RW = lW(this, WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return RW.length ? RW[0] : null
      }
      getChildren(WW) {
        return lW(this, WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(WW) {
        return PW(this, WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(WW) {
        return PW(this, WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(WW) {
        return FW(this.parent, WW)
      }
      enterUnfinishedNodesBefore(WW) {
        let RW = this.childBefore(WW),
          MW = this;
        for (; RW;) {
          let WW = RW.lastChild;
          if (!WW || WW.to != RW.to) break;
          WW.type.isError && WW.from == WW.to ? (MW = RW, RW = WW.prevSibling) : RW = WW
        }
        return MW
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class oW extends IW {
      constructor(WW, RW, MW, wW) {
        super(), this._tree = WW, this.from = RW, this.index = MW, this._parent = wW
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
      nextChild(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let zR = this;;) {
          for (let {
              children: AW,
              positions: yR
            } = zR._tree, NW = RW > 0 ? AW.length : -1; WW != NW; WW += RW) {
            let NW, eW = AW[WW],
              BW = yR[WW] + zR.from;
            if (CW & TW.EnterBracketed && eW instanceof gR && (NW = bR.get(eW)) && !NW.overlay && NW.bracketed && MW >= BW && MW <= BW + eW.length || JW(wW, MW, BW, BW + eW.length))
              if (eW instanceof YW) {
                if (CW & TW.ExcludeBuffers) continue;
                let AW = eW.findChild(0, eW.buffer.length, RW, MW - BW, wW);
                if (AW > -1) return new QW(new fW(zR, eW, WW, BW), null, AW)
              } else if (CW & TW.IncludeAnonymous || !eW.type.isAnonymous || jR(eW)) {
              let AW;
              if (!(CW & TW.IgnoreMounts) && (AW = bR.get(eW)) && !AW.overlay) return new oW(AW.tree, BW, WW, zR);
              let yR = new oW(eW, BW, WW, zR);
              return CW & TW.IncludeAnonymous || !yR.type.isAnonymous ? yR : yR.nextChild(RW < 0 ? eW.children.length - 1 : 0, RW, MW, wW, CW)
            }
          }
          if (CW & TW.IncludeAnonymous || !zR.type.isAnonymous) return null;
          if (WW = zR.index >= 0 ? zR.index + RW : RW < 0 ? -1 : zR._parent._tree.children.length, zR = zR._parent, !zR) return null
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
      enter(WW, RW) {
        let MW, wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(wW & TW.IgnoreOverlays) && (MW = bR.get(this._tree)) && MW.overlay) {
          let CW = WW - this.from,
            zR = wW & TW.EnterBracketed && MW.bracketed;
          for (let {
              from: WW,
              to: wW
            }
            of MW.overlay)
            if ((RW > 0 || zR ? WW <= CW : WW < CW) && (RW < 0 || zR ? wW >= CW : wW > CW)) return new oW(MW.tree, MW.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, WW, RW, wW)
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

    function lW(WW, RW, MW, wW) {
      let CW = WW.cursor(),
        zR = [];
      if (!CW.firstChild()) return zR;
      if (null != MW)
        for (let AW = !1; !AW;)
          if (AW = CW.type.is(MW), !CW.nextSibling()) return zR;
      for (;;) {
        if (null != wW && CW.type.is(wW)) return zR;
        if (CW.type.is(RW) && zR.push(CW.node), !CW.nextSibling()) return null == wW ? zR : []
      }
    }

    function FW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RW.length - 1;
      for (let wW = WW; MW >= 0; wW = wW.parent) {
        if (!wW) return !1;
        if (!wW.type.isAnonymous) {
          if (RW[MW] && RW[MW] != wW.name) return !1;
          MW--
        }
      }
      return !0
    }
    class fW {
      constructor(WW, RW, MW, wW) {
        this.parent = WW, this.buffer = RW, this.index = MW, this.start = wW
      }
    }
    class QW extends IW {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(WW, RW, MW) {
        super(), this.context = WW, this._parent = RW, this.index = MW, this.type = WW.buffer.set.types[WW.buffer.buffer[MW]]
      }
      child(WW, RW, MW) {
        let {
          buffer: wW
        } = this.context, CW = wW.findChild(this.index + 4, wW.buffer[this.index + 3], WW, RW - this.context.start, MW);
        return CW < 0 ? null : new QW(this.context, this, CW)
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
      enter(WW, RW) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & TW.ExcludeBuffers) return null;
        let {
          buffer: MW
        } = this.context, wW = MW.findChild(this.index + 4, MW.buffer[this.index + 3], RW > 0 ? 1 : -1, WW - this.context.start, RW);
        return wW < 0 ? null : new QW(this.context, this, wW)
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
        } = this.context, RW = WW.buffer[this.index + 3];
        return RW < (this._parent ? WW.buffer[this._parent.index + 3] : WW.buffer.length) ? new QW(this.context, this._parent, RW) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: WW
        } = this.context, RW = this._parent ? this._parent.index + 4 : 0;
        return this.index == RW ? this.externalSibling(-1) : new QW(this.context, this._parent, WW.findChild(RW, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let WW = [],
          RW = [],
          {
            buffer: MW
          } = this.context,
          wW = this.index + 4,
          CW = MW.buffer[this.index + 3];
        if (CW > wW) {
          let zR = MW.buffer[this.index + 1];
          WW.push(MW.slice(wW, CW, zR)), RW.push(0)
        }
        return new gR(this.type, WW, RW, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function rR(WW) {
      if (!WW.length) return null;
      let RW = 0,
        MW = WW[0];
      for (let zR = 1; zR < WW.length; zR++) {
        let wW = WW[zR];
        (wW.from > MW.from || wW.to < MW.to) && (MW = wW, RW = zR)
      }
      let wW = MW instanceof oW && MW.index < 0 ? null : MW.parent,
        CW = WW.slice();
      return wW ? CW[RW] = wW : CW.splice(RW, 1), new cR(CW, MW)
    }
    class cR {
      constructor(WW, RW) {
        this.heads = WW, this.node = RW
      }
      get next() {
        return rR(this.heads)
      }
    }
    class XW {
      get name() {
        return this.type.name
      }
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = RW & ~TW.EnterBracketed, WW instanceof oW) this.yieldNode(WW);
        else {
          this._tree = WW.context.parent, this.buffer = WW.context;
          for (let RW = WW._parent; RW; RW = RW._parent) this.stack.unshift(RW.index);
          this.bufferNode = WW, this.yieldBuf(WW.index)
        }
      }
      yieldNode(WW) {
        return !!WW && (this._tree = WW, this.type = WW.type, this.from = WW.from, this.to = WW.to, !0)
      }
      yieldBuf(WW, RW) {
        this.index = WW;
        let {
          start: MW,
          buffer: wW
        } = this.buffer;
        return this.type = RW || wW.set.types[wW.buffer[WW]], this.from = MW + wW.buffer[WW + 1], this.to = MW + wW.buffer[WW + 2], !0
      }
      yield(WW) {
        return !!WW && (WW instanceof oW ? (this.buffer = null, this.yieldNode(WW)) : (this.buffer = WW.context, this.yieldBuf(WW.index, WW.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(WW, RW, MW) {
        if (!this.buffer) return this.yield(this._tree.nextChild(WW < 0 ? this._tree._tree.children.length - 1 : 0, WW, RW, MW, this.mode));
        let {
          buffer: wW
        } = this.buffer, CW = wW.findChild(this.index + 4, wW.buffer[this.index + 3], WW, RW - this.buffer.start, MW);
        return !(CW < 0) && (this.stack.push(this.index), this.yieldBuf(CW))
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
      enter(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(MW & TW.ExcludeBuffers) && this.enterChild(1, WW, RW) : this.yield(this._tree.enter(WW, RW, MW))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & TW.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let WW = this.mode & TW.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(WW)
      }
      sibling(WW) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + WW, WW, 0, 4, this.mode));
        let {
          buffer: RW
        } = this.buffer, MW = this.stack.length - 1;
        if (WW < 0) {
          let WW = MW < 0 ? 0 : this.stack[MW] + 4;
          if (this.index != WW) return this.yieldBuf(RW.findChild(WW, this.index, -1, 0, 4))
        } else {
          let WW = RW.buffer[this.index + 3];
          if (WW < (MW < 0 ? RW.buffer.length : RW.buffer[this.stack[MW] + 3])) return this.yieldBuf(WW)
        }
        return MW < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + WW, WW, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(WW) {
        let RW, MW, {
          buffer: wW
        } = this;
        if (wW) {
          if (WW > 0) {
            if (this.index < wW.buffer.buffer.length) return !1
          } else
            for (let WW = 0; WW < this.index; WW++)
              if (wW.buffer.buffer[WW + 3] < this.index) return !1;
          ({
            index: RW,
            parent: MW
          } = wW)
        } else({
          index: RW,
          _parent: MW
        } = this._tree);
        for (; MW;
          ({
            index: RW,
            _parent: MW
          } = MW))
          if (RW > -1)
            for (let wW = RW + WW, CW = WW < 0 ? -1 : MW._tree.children.length; wW != CW; wW += WW) {
              let WW = MW._tree.children[wW];
              if (this.mode & TW.IncludeAnonymous || WW instanceof YW || !WW.type.isAnonymous || jR(WW)) return !1
            }
        return !0
      }
      move(WW, RW) {
        if (RW && this.enterChild(WW, 0, 4)) return !0;
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
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (RW < 1 ? this.from >= WW : this.from > WW) || (RW > -1 ? this.to <= WW : this.to < WW)) && this.parent(););
        for (; this.enterChild(1, WW, RW););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let WW = this.bufferNode,
          RW = null,
          MW = 0;
        if (WW && WW.context == this.buffer) WW: for (let wW = this.index, CW = this.stack.length; CW >= 0;) {
          for (let zR = WW; zR; zR = zR._parent)
            if (zR.index == wW) {
              if (wW == this.index) return zR;
              RW = zR, MW = CW + 1;
              break WW
            } wW = this.stack[--CW]
        }
        for (let wW = MW; wW < this.stack.length; wW++) RW = new QW(this.buffer, RW, this.stack[wW]);
        return this.bufferNode = new QW(this.buffer, RW, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(WW, RW) {
        for (let MW = 0;;) {
          let wW = !1;
          if (this.type.isAnonymous || !1 !== WW(this)) {
            if (this.firstChild()) {
              MW++;
              continue
            }
            this.type.isAnonymous || (wW = !0)
          }
          for (;;) {
            if (wW && RW && RW(this), wW = this.type.isAnonymous, !MW) return;
            if (this.nextSibling()) break;
            this.parent(), MW--, wW = !0
          }
        }
      }
      matchContext(WW) {
        if (!this.buffer) return FW(this.node.parent, WW);
        let {
          buffer: RW
        } = this.buffer, {
          types: MW
        } = RW.set;
        for (let wW = WW.length - 1, CW = this.stack.length - 1; wW >= 0; CW--) {
          if (CW < 0) return FW(this._tree, WW, wW);
          let zR = MW[RW.buffer[this.stack[CW]]];
          if (!zR.isAnonymous) {
            if (WW[wW] && WW[wW] != zR.name) return !1;
            wW--
          }
        }
        return !0
      }
    }

    function jR(WW) {
      return WW.children.some((WW => WW instanceof YW || !WW.type.isAnonymous || jR(WW)))
    }
    const kR = new WeakMap;

    function aR(WW, RW) {
      if (!WW.isAnonymous || RW instanceof YW || RW.type != WW) return 1;
      let MW = kR.get(RW);
      if (null == MW) {
        MW = 1;
        for (let wW of RW.children) {
          if (wW.type != WW || !(wW instanceof gR)) {
            MW = 1;
            break
          }
          MW += aR(WW, wW)
        }
        kR.set(RW, MW)
      }
      return MW
    }

    function sW(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
      let NW = 0;
      for (let TW = wW; TW < CW; TW++) NW += aR(WW, RW[TW]);
      let eW = Math.ceil(1.5 * NW / 8),
        BW = [],
        tR = [];
      return function RW(MW, wW, CW, AW, bR) {
        for (let NW = CW; NW < AW;) {
          let CW = NW,
            TW = wW[NW],
            gR = aR(WW, MW[NW]);
          for (NW++; NW < AW; NW++) {
            let RW = aR(WW, MW[NW]);
            if (gR + RW >= eW) break;
            gR += RW
          }
          if (NW == CW + 1) {
            if (gR > eW) {
              let WW = MW[CW];
              RW(WW.children, WW.positions, 0, WW.children.length, wW[CW] + bR);
              continue
            }
            BW.push(MW[CW])
          } else {
            let RW = wW[NW - 1] + MW[NW - 1].length - TW;
            BW.push(sW(WW, MW, wW, CW, NW, TW, RW, null, yR))
          }
          tR.push(TW + bR - zR)
        }
      }(RW, MW, wW, CW, 0), (bR || yR)(BW, tR, AW)
    }
    class dW {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(WW, RW, MW) {
        let wW = this.map.get(WW);
        wW || this.map.set(WW, wW = new Map), wW.set(RW, MW)
      }
      getBuffer(WW, RW) {
        let MW = this.map.get(WW);
        return MW && MW.get(RW)
      }
      set(WW, RW) {
        WW instanceof QW ? this.setBuffer(WW.context.buffer, WW.index, RW) : WW instanceof oW && this.map.set(WW.tree, RW)
      }
      get(WW) {
        return WW instanceof QW ? this.getBuffer(WW.context.buffer, WW.index) : WW instanceof oW ? this.map.get(WW.tree) : void 0
      }
      cursorSet(WW, RW) {
        WW.buffer ? this.setBuffer(WW.buffer.buffer, WW.index, RW) : this.map.set(WW.tree, RW)
      }
      cursorGet(WW) {
        return WW.buffer ? this.getBuffer(WW.buffer.buffer, WW.index) : this.map.get(WW.tree)
      }
    }
    class pW {
      constructor(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          zR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = WW, this.to = RW, this.tree = MW, this.offset = wW, this.open = (CW ? 1 : 0) | (zR ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = [new pW(0, WW.length, WW, 0, !1, MW)];
        for (let CW of RW) CW.to > WW.length && wW.push(CW);
        return wW
      }
      static applyChanges(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!RW.length) return WW;
        let wW = [],
          CW = 1,
          zR = WW.length ? WW[0] : null;
        for (let AW = 0, bR = 0, yR = 0;; AW++) {
          let NW = AW < RW.length ? RW[AW] : null,
            eW = NW ? NW.fromA : 1e9;
          if (eW - bR >= MW)
            for (; zR && zR.from < eW;) {
              let RW = zR;
              if (bR >= RW.from || eW <= RW.to || yR) {
                let WW = Math.max(RW.from, bR) - yR,
                  MW = Math.min(RW.to, eW) - yR;
                RW = WW >= MW ? null : new pW(WW, MW, RW.tree, RW.offset + yR, AW > 0, !!NW)
              }
              if (RW && wW.push(RW), zR.to > eW) break;
              zR = CW < WW.length ? WW[CW++] : null
            }
          if (!NW) break;
          bR = NW.toA, yR = NW.toA - NW.toB
        }
        return wW
      }
    }
    class hW {
      startParse(WW, RW, MW) {
        return "string" == typeof WW && (WW = new UW(WW)), MW = MW ? MW.length ? MW.map((WW => new zR(WW.from, WW.to))) : [new zR(0, 0)] : [new zR(0, WW.length)], this.createParse(WW, RW || [], MW)
      }
      parse(WW, RW, MW) {
        let wW = this.startParse(WW, RW, MW);
        for (;;) {
          let WW = wW.advance();
          if (WW) return WW
        }
      }
    }
    class UW {
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
      read(WW, RW) {
        return this.string.slice(WW, RW)
      }
    }
    new AW({
      perNode: !0
    })
  },
  38816: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => tR,
      f: () => yR,
      j: () => BW,
      n: () => kR
    });
    var wW = MW(38808);
    let CW = 0;
    class zR {
      constructor(WW, RW, MW, wW) {
        this.name = WW, this.set = RW, this.base = MW, this.modified = wW, this.id = CW++
      }
      toString() {
        let {
          name: WW
        } = this;
        for (let RW of this.modified) RW.name && (WW = `${RW.name}(${WW})`);
        return WW
      }
      static define(WW, RW) {
        let MW = "string" == typeof WW ? WW : "?";
        if (WW instanceof zR && (RW = WW), null === RW || void 0 === RW ? void 0 : RW.base) throw new Error("Can not derive from a modified tag");
        let wW = new zR(MW, [], null, []);
        if (wW.set.push(wW), RW)
          for (let CW of RW.set) wW.set.push(CW);
        return wW
      }
      static defineModifier(WW) {
        let RW = new bR(WW);
        return WW => WW.modified.indexOf(RW) > -1 ? WW : bR.get(WW.base || WW, WW.modified.concat(RW).sort(((WW, RW) => WW.id - RW.id)))
      }
    }
    let AW = 0;
    class bR {
      constructor(WW) {
        this.name = WW, this.instances = [], this.id = AW++
      }
      static get(WW, RW) {
        if (!RW.length) return WW;
        let MW = RW[0].instances.find((MW => {
          return MW.base == WW && (wW = RW, CW = MW.modified, wW.length == CW.length && wW.every(((WW, RW) => WW == CW[RW])));
          var wW, CW
        }));
        if (MW) return MW;
        let wW = [],
          CW = new zR(WW.name, wW, WW, RW);
        for (let zR of RW) zR.instances.push(CW);
        let AW = function(WW) {
          let RW = [
            []
          ];
          for (let MW = 0; MW < WW.length; MW++)
            for (let wW = 0, CW = RW.length; wW < CW; wW++) RW.push(RW[wW].concat(WW[MW]));
          return RW.sort(((WW, RW) => RW.length - WW.length))
        }(RW);
        for (let zR of WW.set)
          if (!zR.modified.length)
            for (let WW of AW) wW.push(bR.get(zR, WW));
        return CW
      }
    }

    function yR(WW) {
      let RW = Object.create(null);
      for (let MW in WW) {
        let wW = WW[MW];
        Array.isArray(wW) || (wW = [wW]);
        for (let WW of MW.split(" "))
          if (WW) {
            let MW = [],
              CW = 2,
              zR = WW;
            for (let RW = 0;;) {
              if ("..." == zR && RW > 0 && RW + 3 == WW.length) {
                CW = 1;
                break
              }
              let wW = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(zR);
              if (!wW) throw new RangeError("Invalid path: " + WW);
              if (MW.push("*" == wW[0] ? "" : '"' == wW[0][0] ? JSON.parse(wW[0]) : wW[0]), RW += wW[0].length, RW == WW.length) break;
              let AW = WW[RW++];
              if (RW == WW.length && "!" == AW) {
                CW = 0;
                break
              }
              if ("/" != AW) throw new RangeError("Invalid path: " + WW);
              zR = WW.slice(RW)
            }
            let AW = MW.length - 1,
              bR = MW[AW];
            if (!bR) throw new RangeError("Invalid path: " + WW);
            let yR = new eW(wW, CW, AW > 0 ? MW.slice(0, AW) : null);
            RW[bR] = yR.sort(RW[bR])
          }
      }
      return NW.add(RW)
    }
    const NW = new wW.j({
      combine(WW, RW) {
        let MW, wW, CW;
        for (; WW || RW;) {
          if (!WW || RW && WW.depth >= RW.depth ? (CW = RW, RW = RW.next) : (CW = WW, WW = WW.next), MW && MW.mode == CW.mode && !CW.context && !MW.context) continue;
          let zR = new eW(CW.tags, CW.mode, CW.context);
          MW ? MW.next = zR : wW = zR, MW = zR
        }
        return wW
      }
    });
    class eW {
      constructor(WW, RW, MW, wW) {
        this.tags = WW, this.mode = RW, this.context = MW, this.next = wW
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

    function BW(WW, RW) {
      let MW = Object.create(null);
      for (let zR of WW)
        if (Array.isArray(zR.tag))
          for (let WW of zR.tag) MW[WW.id] = zR.class;
        else MW[zR.tag.id] = zR.class;
      let {
        scope: wW,
        all: CW = null
      } = RW || {};
      return {
        style: WW => {
          let RW = CW;
          for (let wW of WW)
            for (let WW of wW.set) {
              let wW = MW[WW.id];
              if (wW) {
                RW = RW ? RW + " " + wW : wW;
                break
              }
            }
          return RW
        },
        scope: wW
      }
    }

    function tR(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : WW.length,
        zR = new TW(wW, Array.isArray(RW) ? RW : [RW], MW);
      zR.highlightRange(WW.cursor(), wW, CW, "", zR.highlighters), zR.flush(CW)
    }
    eW.empty = new eW([], 2, null);
    class TW {
      constructor(WW, RW, MW) {
        this.at = WW, this.highlighters = RW, this.span = MW, this.class = ""
      }
      startSpan(WW, RW) {
        RW != this.class && (this.flush(WW), WW > this.at && (this.at = WW), this.class = RW)
      }
      flush(WW) {
        WW > this.at && this.class && this.span(this.at, WW, this.class)
      }
      highlightRange(WW, RW, MW, CW, zR) {
        let {
          type: AW,
          from: bR,
          to: yR
        } = WW;
        if (bR >= MW || yR <= RW) return;
        AW.isTop && (zR = this.highlighters.filter((WW => !WW.scope || WW.scope(AW))));
        let BW = CW,
          tR = function(WW) {
            let RW = WW.type.prop(NW);
            for (; RW && RW.context && !WW.matchContext(RW.context);) RW = RW.next;
            return RW || null
          }(WW) || eW.empty,
          TW = function(WW, RW) {
            let MW = null;
            for (let wW of WW) {
              let WW = wW.style(RW);
              WW && (MW = MW ? MW + " " + WW : WW)
            }
            return MW
          }(zR, tR.tags);
        if (TW && (BW && (BW += " "), BW += TW, 1 == tR.mode && (CW += (CW ? " " : "") + TW)), this.startSpan(Math.max(RW, bR), BW), tR.opaque) return;
        let gR = WW.tree && WW.tree.prop(wW.j.mounted);
        if (gR && gR.overlay) {
          let wW = WW.node.enter(gR.overlay[0].from + bR, 1),
            AW = this.highlighters.filter((WW => !WW.scope || WW.scope(gR.tree.type))),
            NW = WW.firstChild();
          for (let eW = 0, tR = bR;; eW++) {
            let TW = eW < gR.overlay.length ? gR.overlay[eW] : null,
              iR = TW ? TW.from + bR : yR,
              YW = Math.max(RW, tR),
              JW = Math.min(MW, iR);
            if (YW < JW && NW)
              for (; WW.from < JW && (this.highlightRange(WW, YW, JW, CW, zR), this.startSpan(Math.min(JW, WW.to), BW), !(WW.to >= iR) && WW.nextSibling()););
            if (!TW || iR > MW) break;
            tR = TW.to + bR, tR > RW && (this.highlightRange(wW.cursor(), Math.max(RW, TW.from + bR), Math.min(MW, tR), "", AW), this.startSpan(Math.min(MW, tR), BW))
          }
          NW && WW.parent()
        } else if (WW.firstChild()) {
          gR && (CW = "");
          do {
            if (!(WW.to <= RW)) {
              if (WW.from >= MW) break;
              this.highlightRange(WW, RW, MW, CW, zR), this.startSpan(Math.min(MW, WW.to), BW)
            }
          } while (WW.nextSibling());
          WW.parent()
        }
      }
    }
    const gR = zR.define,
      iR = gR(),
      YW = gR(),
      JW = gR(YW),
      PW = gR(YW),
      IW = gR(),
      oW = gR(IW),
      lW = gR(IW),
      FW = gR(),
      fW = gR(FW),
      QW = gR(),
      rR = gR(),
      cR = gR(),
      XW = gR(cR),
      jR = gR(),
      kR = {
        comment: iR,
        lineComment: gR(iR),
        blockComment: gR(iR),
        docComment: gR(iR),
        name: YW,
        variableName: gR(YW),
        typeName: JW,
        tagName: gR(JW),
        propertyName: PW,
        attributeName: gR(PW),
        className: gR(YW),
        labelName: gR(YW),
        namespace: gR(YW),
        macroName: gR(YW),
        literal: IW,
        string: oW,
        docString: gR(oW),
        character: gR(oW),
        attributeValue: gR(oW),
        number: lW,
        integer: gR(lW),
        float: gR(lW),
        bool: gR(IW),
        regexp: gR(IW),
        escape: gR(IW),
        color: gR(IW),
        url: gR(IW),
        keyword: QW,
        self: gR(QW),
        null: gR(QW),
        atom: gR(QW),
        unit: gR(QW),
        modifier: gR(QW),
        operatorKeyword: gR(QW),
        controlKeyword: gR(QW),
        definitionKeyword: gR(QW),
        moduleKeyword: gR(QW),
        operator: rR,
        derefOperator: gR(rR),
        arithmeticOperator: gR(rR),
        logicOperator: gR(rR),
        bitwiseOperator: gR(rR),
        compareOperator: gR(rR),
        updateOperator: gR(rR),
        definitionOperator: gR(rR),
        typeOperator: gR(rR),
        controlOperator: gR(rR),
        punctuation: cR,
        separator: gR(cR),
        bracket: XW,
        angleBracket: gR(XW),
        squareBracket: gR(XW),
        paren: gR(XW),
        brace: gR(XW),
        content: FW,
        heading: fW,
        heading1: gR(fW),
        heading2: gR(fW),
        heading3: gR(fW),
        heading4: gR(fW),
        heading5: gR(fW),
        heading6: gR(fW),
        contentSeparator: gR(FW),
        list: gR(FW),
        quote: gR(FW),
        emphasis: gR(FW),
        strong: gR(FW),
        link: gR(FW),
        monospace: gR(FW),
        strikethrough: gR(FW),
        inserted: gR(),
        deleted: gR(),
        changed: gR(),
        invalid: gR(),
        meta: jR,
        documentMeta: gR(jR),
        annotation: gR(jR),
        processingInstruction: gR(jR),
        definition: zR.defineModifier("definition"),
        constant: zR.defineModifier("constant"),
        function: zR.defineModifier("function"),
        standard: zR.defineModifier("standard"),
        local: zR.defineModifier("local"),
        special: zR.defineModifier("special")
      };
    for (let aR in kR) {
      let WW = kR[aR];
      WW instanceof zR && (WW.name = aR)
    }
    BW([{
      tag: kR.link,
      class: "tok-link"
    }, {
      tag: kR.heading,
      class: "tok-heading"
    }, {
      tag: kR.emphasis,
      class: "tok-emphasis"
    }, {
      tag: kR.strong,
      class: "tok-strong"
    }, {
      tag: kR.keyword,
      class: "tok-keyword"
    }, {
      tag: kR.atom,
      class: "tok-atom"
    }, {
      tag: kR.bool,
      class: "tok-bool"
    }, {
      tag: kR.url,
      class: "tok-url"
    }, {
      tag: kR.labelName,
      class: "tok-labelName"
    }, {
      tag: kR.inserted,
      class: "tok-inserted"
    }, {
      tag: kR.deleted,
      class: "tok-deleted"
    }, {
      tag: kR.literal,
      class: "tok-literal"
    }, {
      tag: kR.string,
      class: "tok-string"
    }, {
      tag: kR.number,
      class: "tok-number"
    }, {
      tag: [kR.regexp, kR.escape, kR.special(kR.string)],
      class: "tok-string2"
    }, {
      tag: kR.variableName,
      class: "tok-variableName"
    }, {
      tag: kR.local(kR.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: kR.definition(kR.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: kR.special(kR.variableName),
      class: "tok-variableName2"
    }, {
      tag: kR.definition(kR.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: kR.typeName,
      class: "tok-typeName"
    }, {
      tag: kR.namespace,
      class: "tok-namespace"
    }, {
      tag: kR.className,
      class: "tok-className"
    }, {
      tag: kR.macroName,
      class: "tok-macroName"
    }, {
      tag: kR.propertyName,
      class: "tok-propertyName"
    }, {
      tag: kR.operator,
      class: "tok-operator"
    }, {
      tag: kR.comment,
      class: "tok-comment"
    }, {
      tag: kR.meta,
      class: "tok-meta"
    }, {
      tag: kR.invalid,
      class: "tok-invalid"
    }, {
      tag: kR.punctuation,
      class: "tok-punctuation"
    }])
  },
  38828: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => bR.g,
      h: () => AW.p,
      j: () => AW.A,
      m: () => AW.C,
      p: () => bR.n,
      r: () => fM,
      u: () => bR.P,
      x: () => bR.fb
    });
    var wW = MW(1199),
      CW = MW(1193),
      zR = MW(75),
      AW = MW(38778),
      bR = MW(38784),
      yR = MW(38800),
      NW = MW(38808);

    function eW(WW, RW) {
      return MW => {
        let {
          state: wW,
          dispatch: CW
        } = MW;
        if (wW.readOnly) return !1;
        let zR = WW(RW, wW);
        return !!zR && (CW(wW.update(zR)), !0)
      }
    }
    const BW = eW(JW, 0),
      tR = eW(YW, 0),
      TW = eW(((WW, RW) => YW(WW, RW, function(WW) {
        let RW = [];
        for (let MW of WW.selection.WA) {
          let wW = WW.doc.lineAt(MW.from),
            CW = MW.to <= wW.to ? wW : WW.doc.lineAt(MW.to);
          CW.from > wW.from && CW.from == MW.to && (CW = MW.to == wW.to + 1 ? wW : WW.doc.lineAt(MW.to - 1));
          let zR = RW.length - 1;
          zR >= 0 && RW[zR].to > wW.from ? RW[zR].to = CW.to : RW.push({
            from: wW.from + /^\s*/.exec(wW.text)[0].length,
            to: CW.to
          })
        }
        return RW
      }(RW))), 0);

    function gR(WW, RW) {
      let MW = WW.languageDataAt("commentTokens", RW, 1);
      return MW.length ? MW[0] : {}
    }
    const iR = 50;

    function YW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RW.selection.WA,
        wW = MW.map((WW => gR(RW, WW.from).block));
      if (!wW.every((WW => WW))) return null;
      let CW = MW.map(((WW, MW) => function(WW, RW, MW, wW) {
        let CW, zR, {
            open: AW,
            close: bR
          } = RW,
          yR = WW.sliceDoc(MW - iR, MW),
          NW = WW.sliceDoc(wW, wW + iR),
          eW = /\s*$/.exec(yR)[0].length,
          BW = /^\s*/.exec(NW)[0].length,
          tR = yR.length - eW;
        if (yR.slice(tR - AW.length, tR) == AW && NW.slice(BW, BW + bR.length) == bR) return {
          open: {
            pos: MW - eW,
            margin: eW && 1
          },
          close: {
            pos: wW + BW,
            margin: BW && 1
          }
        };
        wW - MW <= 2 * iR ? CW = zR = WW.sliceDoc(MW, wW) : (CW = WW.sliceDoc(MW, MW + iR), zR = WW.sliceDoc(wW - iR, wW));
        let TW = /^\s*/.exec(CW)[0].length,
          gR = /\s*$/.exec(zR)[0].length,
          YW = zR.length - gR - bR.length;
        return CW.slice(TW, TW + AW.length) == AW && zR.slice(YW, YW + bR.length) == bR ? {
          open: {
            pos: MW + TW + AW.length,
            margin: /\s/.test(CW.charAt(TW + AW.length)) ? 1 : 0
          },
          close: {
            pos: wW - gR - bR.length,
            margin: /\s/.test(zR.charAt(YW - 1)) ? 1 : 0
          }
        } : null
      }(RW, wW[MW], WW.from, WW.to)));
      if (2 != WW && !CW.every((WW => WW))) return {
        changes: RW.changes(MW.map(((WW, RW) => CW[RW] ? [] : [{
          from: WW.from,
          insert: wW[RW].open + " "
        }, {
          from: WW.to,
          insert: " " + wW[RW].close
        }])))
      };
      if (1 != WW && CW.some((WW => WW))) {
        let WW = [];
        for (let RW, MW = 0; MW < CW.length; MW++)
          if (RW = CW[MW]) {
            let CW = wW[MW],
              {
                open: zR,
                close: AW
              } = RW;
            WW.push({
              from: zR.pos - CW.open.length,
              to: zR.pos + zR.margin
            }, {
              from: AW.pos - AW.margin,
              to: AW.pos + CW.close.length
            })
          } return {
          changes: WW
        }
      }
      return null
    }

    function JW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RW.selection.WA,
        wW = [],
        CW = -1;
      WW: for (let {
          from: zR,
          to: AW
        }
        of MW) {
        let WW, MW = wW.length,
          bR = 1e9;
        for (let yR = zR; yR <= AW;) {
          let MW = RW.doc.lineAt(yR);
          if (void 0 == WW && (WW = gR(RW, MW.from).line, !WW)) continue WW;
          if (MW.from > CW && (zR == AW || AW > MW.from)) {
            CW = MW.from;
            let RW = /^\s*/.exec(MW.text)[0].length,
              zR = RW == MW.length,
              AW = MW.text.slice(RW, RW + WW.length) == WW ? RW : -1;
            RW < MW.text.length && RW < bR && (bR = RW), wW.push({
              line: MW,
              comment: AW,
              token: WW,
              indent: RW,
              empty: zR,
              single: !1
            })
          }
          yR = MW.to + 1
        }
        if (bR < 1e9)
          for (let RW = MW; RW < wW.length; RW++) wW[RW].indent < wW[RW].line.text.length && (wW[RW].indent = bR);
        wW.length == MW + 1 && (wW[MW].single = !0)
      }
      if (2 != WW && wW.some((WW => WW.comment < 0 && (!WW.empty || WW.single)))) {
        let WW = [];
        for (let {
            line: RW,
            token: CW,
            indent: zR,
            empty: AW,
            single: bR
          }
          of wW) !bR && AW || WW.push({
          from: RW.from + zR,
          insert: CW + " "
        });
        let MW = RW.changes(WW);
        return {
          changes: MW,
          selection: RW.selection.map(MW, 1)
        }
      }
      if (1 != WW && wW.some((WW => WW.comment >= 0))) {
        let WW = [];
        for (let {
            line: RW,
            comment: MW,
            token: CW
          }
          of wW)
          if (MW >= 0) {
            let wW = RW.from + MW,
              zR = wW + CW.length;
            " " == RW.text[zR - RW.from] && zR++, WW.push({
              from: wW,
              to: zR
            })
          } return {
          changes: WW
        }
      }
      return null
    }
    const PW = AW.d.define(),
      IW = AW.d.define(),
      oW = AW.m.define(),
      lW = AW.m.define({
        combine: WW => (0, AW.O)(WW, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (WW, RW) => RW
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (WW, RW) => (MW, wW) => WW(MW, wW) || RW(MW, wW)
        })
      }),
      FW = AW.C.define({
        create: () => mR.empty,
        update(WW, RW) {
          let MW = RW.state.facet(lW),
            wW = RW.annotation(PW);
          if (wW) {
            let CW = jR.fromTransaction(RW, wW.selection),
              zR = wW.side,
              AW = 0 == zR ? WW.undone : WW.done;
            return AW = CW ? kR(AW, AW.length, MW.minDepth, CW) : pW(AW, RW.startState.selection), new mR(0 == zR ? wW.rest : AW, 0 == zR ? AW : wW.rest)
          }
          let CW = RW.annotation(IW);
          if ("full" != CW && "before" != CW || (WW = WW.isolate()), !1 === RW.annotation(AW.G.addToHistory)) return RW.changes.empty ? WW : WW.addMapping(RW.changes.desc);
          let zR = jR.fromTransaction(RW),
            bR = RW.annotation(AW.G.time),
            yR = RW.annotation(AW.G.userEvent);
          return zR ? WW = WW.addChanges(zR, bR, yR, MW, RW) : RW.selection && (WW = WW.addSelection(RW.startState.selection, bR, yR, MW.newGroupDelay)), "full" != CW && "after" != CW || (WW = WW.isolate()), WW
        },
        toJSON: WW => ({
          done: WW.done.map((WW => WW.toJSON())),
          undone: WW.undone.map((WW => WW.toJSON()))
        }),
        fromJSON: WW => new mR(WW.done.map(jR.fromJSON), WW.undone.map(jR.fromJSON))
      });

    function fW(WW, RW) {
      return function(MW) {
        let {
          state: wW,
          dispatch: CW
        } = MW;
        if (!RW && wW.readOnly) return !1;
        let zR = wW.field(FW, !1);
        if (!zR) return !1;
        let AW = zR.pop(WW, wW, RW);
        return !!AW && (CW(AW), !0)
      }
    }
    const QW = fW(0, !1),
      rR = fW(1, !1),
      cR = fW(0, !0),
      XW = fW(1, !0);
    class jR {
      constructor(WW, RW, MW, wW, CW) {
        this.changes = WW, this.effects = RW, this.mapped = MW, this.startSelection = wW, this.selectionsAfter = CW
      }
      setSelAfter(WW) {
        return new jR(this.changes, this.effects, this.mapped, this.startSelection, WW)
      }
      toJSON() {
        var WW, RW, MW;
        return {
          changes: null === (WW = this.changes) || void 0 === WW ? void 0 : WW.toJSON(),
          mapped: null === (RW = this.mapped) || void 0 === RW ? void 0 : RW.toJSON(),
          startSelection: null === (MW = this.startSelection) || void 0 === MW ? void 0 : MW.toJSON(),
          selectionsAfter: this.selectionsAfter.map((WW => WW.toJSON()))
        }
      }
      static fromJSON(WW) {
        return new jR(WW.changes && AW.ChangeSet.fromJSON(WW.changes), [], WW.mapped && AW.f.fromJSON(WW.mapped), WW.startSelection && AW.j.fromJSON(WW.startSelection), WW.selectionsAfter.map(AW.j.fromJSON))
      }
      static fromTransaction(WW, RW) {
        let MW = sW;
        for (let wW of WW.startState.facet(oW)) {
          let RW = wW(WW);
          RW.length && (MW = MW.concat(RW))
        }
        return !MW.length && WW.changes.empty ? null : new jR(WW.changes.invert(WW.startState.doc), MW, void 0, RW || WW.startState.selection, sW)
      }
      static selection(WW) {
        return new jR(void 0, sW, void 0, void 0, WW)
      }
    }

    function kR(WW, RW, MW, wW) {
      let CW = RW + 1 > MW + 20 ? RW - MW - 1 : 0,
        zR = WW.slice(CW, RW);
      return zR.push(wW), zR
    }

    function aR(WW, RW) {
      return WW.length ? RW.length ? WW.concat(RW) : WW : RW
    }
    const sW = [],
      dW = 200;

    function pW(WW, RW) {
      if (WW.length) {
        let MW = WW[WW.length - 1],
          wW = MW.selectionsAfter.slice(Math.max(0, MW.selectionsAfter.length - dW));
        return wW.length && wW[wW.length - 1].eq(RW) ? WW : (wW.push(RW), kR(WW, WW.length - 1, 1e9, MW.setSelAfter(wW)))
      }
      return [jR.selection([RW])]
    }

    function hW(WW) {
      let RW = WW[WW.length - 1],
        MW = WW.slice();
      return MW[WW.length - 1] = RW.setSelAfter(RW.selectionsAfter.slice(0, RW.selectionsAfter.length - 1)), MW
    }

    function UW(WW, RW) {
      if (!WW.length) return WW;
      let MW = WW.length,
        wW = sW;
      for (; MW;) {
        let CW = EW(WW[MW - 1], RW, wW);
        if (CW.changes && !CW.changes.empty || CW.effects.length) {
          let RW = WW.slice(0, MW);
          return RW[MW - 1] = CW, RW
        }
        RW = CW.mapped, MW--, wW = CW.selectionsAfter
      }
      return wW.length ? [jR.selection(wW)] : sW
    }

    function EW(WW, RW, MW) {
      let wW = aR(WW.selectionsAfter.length ? WW.selectionsAfter.map((WW => WW.map(RW))) : sW, MW);
      if (!WW.changes) return jR.selection(wW);
      let CW = WW.changes.map(RW),
        zR = RW.mapDesc(WW.changes, !0),
        bR = WW.mapped ? WW.mapped.composeDesc(zR) : zR;
      return new jR(CW, AW.A.mapEffects(WW.effects, RW), bR, WW.startSelection.map(zR), wW)
    }
    const VW = /^(input\.type|delete)($|\.)/;
    class mR {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = WW, this.undone = RW, this.prevTime = MW, this.prevUserEvent = wW
      }
      isolate() {
        return this.prevTime ? new mR(this.done, this.undone) : this
      }
      addChanges(WW, RW, MW, wW, CW) {
        let zR = this.done,
          bR = zR[zR.length - 1];
        return zR = bR && bR.changes && !bR.changes.empty && WW.changes && (!MW || VW.test(MW)) && (!bR.selectionsAfter.length && RW - this.prevTime < wW.newGroupDelay && wW.joinToEvent(CW, function(WW, RW) {
          let MW = [],
            wW = !1;
          return WW.iterChangedRanges(((WW, RW) => MW.push(WW, RW))), RW.iterChangedRanges(((WW, RW, CW, zR) => {
            for (let AW = 0; AW < MW.length;) {
              let WW = MW[AW++],
                RW = MW[AW++];
              zR >= WW && CW <= RW && (wW = !0)
            }
          })), wW
        }(bR.changes, WW.changes)) || "input.type.compose" == MW) ? kR(zR, zR.length - 1, wW.minDepth, new jR(WW.changes.compose(bR.changes), aR(AW.A.mapEffects(WW.effects, bR.changes), bR.effects), bR.mapped, bR.startSelection, sW)) : kR(zR, zR.length, wW.minDepth, WW), new mR(zR, sW, RW, MW)
      }
      addSelection(WW, RW, MW, wW) {
        let CW = this.done.length ? this.done[this.done.length - 1].selectionsAfter : sW;
        return CW.length > 0 && RW - this.prevTime < wW && MW == this.prevUserEvent && MW && /^select($|\.)/.test(MW) && (zR = CW[CW.length - 1], AW = WW, zR.WA.length == AW.WA.length && 0 === zR.WA.filter(((WW, RW) => WW.empty != AW.WA[RW].empty)).length) ? this : new mR(pW(this.done, WW), this.undone, RW, MW);
        var zR, AW
      }
      addMapping(WW) {
        return new mR(UW(this.done, WW), UW(this.undone, WW), this.prevTime, this.prevUserEvent)
      }
      pop(WW, RW, MW) {
        let wW = 0 == WW ? this.done : this.undone;
        if (0 == wW.length) return null;
        let CW = wW[wW.length - 1],
          zR = CW.selectionsAfter[0] || (CW.startSelection ? CW.startSelection.map(CW.changes.invertedDesc, 1) : RW.selection);
        if (MW && CW.selectionsAfter.length) return RW.update({
          selection: CW.selectionsAfter[CW.selectionsAfter.length - 1],
          annotations: PW.of({
            side: WW,
            rest: hW(wW),
            selection: zR
          }),
          userEvent: 0 == WW ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (CW.changes) {
          let MW = 1 == wW.length ? sW : wW.slice(0, wW.length - 1);
          return CW.mapped && (MW = UW(MW, CW.mapped)), RW.update({
            changes: CW.changes,
            selection: CW.startSelection,
            effects: CW.effects,
            annotations: PW.of({
              side: WW,
              rest: MW,
              selection: zR
            }),
            filter: !1,
            userEvent: 0 == WW ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    mR.empty = new mR(sW, sW);
    const xR = [{
      key: "Mod-z",
      run: QW,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: rR,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: rR,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: cR,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: XW,
      preventDefault: !0
    }];

    function vR(WW, RW) {
      return AW.j.create(WW.WA.map(RW), WW.mainIndex)
    }

    function KW(WW, RW) {
      return WW.update({
        selection: RW,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function uW(WW, RW) {
      let {
        state: MW,
        dispatch: wW
      } = WW, CW = vR(MW.selection, RW);
      return !CW.eq(MW.selection, !0) && (wW(KW(MW, CW)), !0)
    }

    function OW(WW, RW) {
      return AW.j.cursor(RW ? WW.to : WW.from)
    }

    function nW(WW, RW) {
      return uW(WW, (MW => MW.empty ? WW.moveByChar(MW, RW) : OW(MW, RW)))
    }

    function GW(WW) {
      return WW.textDirectionAt(WW.state.selection.main.head) == bR.d.LTR
    }
    const LW = WW => nW(WW, !GW(WW)),
      HW = WW => nW(WW, GW(WW));

    function DW(WW, RW) {
      return uW(WW, (MW => MW.empty ? WW.moveByGroup(MW, RW) : OW(MW, RW)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function qR(WW, RW, MW) {
      if (RW.type.prop(MW)) return !0;
      let wW = RW.to - RW.from;
      return wW && (wW > 2 || /[^\s,.;:]/.test(WW.sliceDoc(RW.from, RW.to))) || RW.firstChild
    }

    function ZW(WW, RW, MW) {
      let wW, CW, zR = (0, yR.nb)(WW).resolveInner(RW.head),
        bR = MW ? NW.j.closedBy : NW.j.openedBy;
      for (let AW = RW.head;;) {
        let RW = MW ? zR.childAfter(AW) : zR.childBefore(AW);
        if (!RW) break;
        qR(WW, RW, bR) ? zR = RW : AW = MW ? RW.to : RW.from
      }
      return CW = zR.type.prop(bR) && (wW = MW ? (0, yR.db)(WW, zR.from, 1) : (0, yR.db)(WW, zR.to, -1)) && wW.matched ? MW ? wW.end.to : wW.end.from : MW ? zR.to : zR.from, AW.j.cursor(CW, MW ? -1 : 1)
    }

    function SW(WW, RW) {
      return uW(WW, (MW => {
        if (!MW.empty) return OW(MW, RW);
        let wW = WW.moveVertically(MW, RW);
        return wW.head != MW.head ? wW : WW.moveToLineBoundary(MW, RW)
      }))
    }
    const WR = WW => SW(WW, !1),
      RR = WW => SW(WW, !0);

    function MR(WW) {
      let RW, MW = WW.scrollDOM.clientHeight < WW.scrollDOM.scrollHeight - 2,
        wW = 0,
        CW = 0;
      if (MW) {
        for (let RW of WW.state.facet(bR.g.scrollMargins)) {
          let MW = RW(WW);
          (null === MW || void 0 === MW ? void 0 : MW.top) && (wW = Math.max(null === MW || void 0 === MW ? void 0 : MW.top, wW)), (null === MW || void 0 === MW ? void 0 : MW.bottom) && (CW = Math.max(null === MW || void 0 === MW ? void 0 : MW.bottom, CW))
        }
        RW = WW.scrollDOM.clientHeight - wW - CW
      } else RW = (WW.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: wW,
        marginBottom: CW,
        selfScroll: MW,
        height: Math.max(WW.defaultLineHeight, RW - 5)
      }
    }

    function wR(WW, RW) {
      let MW, wW = MR(WW),
        {
          state: CW
        } = WW,
        zR = vR(CW.selection, (MW => MW.empty ? WW.moveVertically(MW, RW, wW.height) : OW(MW, RW)));
      if (zR.eq(CW.selection)) return !1;
      if (wW.selfScroll) {
        let RW = WW.coordsAtPos(CW.selection.main.head),
          AW = WW.scrollDOM.getBoundingClientRect(),
          yR = AW.top + wW.marginTop,
          NW = AW.bottom - wW.marginBottom;
        RW && RW.top > yR && RW.bottom < NW && (MW = bR.g.scrollIntoView(zR.main.head, {
          y: "start",
          yMargin: RW.top - yR
        }))
      }
      return WW.dispatch(KW(CW, zR), {
        effects: MW
      }), !0
    }
    const CR = WW => wR(WW, !1),
      zM = WW => wR(WW, !0);

    function AR(WW, RW, MW) {
      let wW = WW.lineBlockAt(RW.head),
        CW = WW.moveToLineBoundary(RW, MW);
      if (CW.head == RW.head && CW.head != (MW ? wW.to : wW.from) && (CW = WW.moveToLineBoundary(RW, MW, !1)), !MW && CW.head == wW.from && wW.length) {
        let MW = /^\s*/.exec(WW.state.sliceDoc(wW.from, Math.min(wW.from + 100, wW.to)))[0].length;
        MW && RW.head != wW.from + MW && (CW = AW.j.cursor(wW.from + MW))
      }
      return CW
    }

    function bM(WW, RW, MW) {
      let wW = !1,
        CW = vR(WW.selection, (RW => {
          let CW = (0, yR.db)(WW, RW.head, -1) || (0, yR.db)(WW, RW.head, 1) || RW.head > 0 && (0, yR.db)(WW, RW.head - 1, 1) || RW.head < WW.doc.length && (0, yR.db)(WW, RW.head + 1, -1);
          if (!CW || !CW.end) return RW;
          wW = !0;
          let zR = CW.start.from == RW.head ? CW.end.to : CW.end.from;
          return MW ? AW.j.range(RW.anchor, zR) : AW.j.cursor(zR)
        }));
      return !!wW && (RW(KW(WW, CW)), !0)
    }

    function yM(WW, RW) {
      let MW = vR(WW.state.selection, (WW => {
        let MW = RW(WW);
        return AW.j.range(WW.anchor, MW.head, MW.goalColumn, MW.bidiLevel || void 0, MW.assoc)
      }));
      return !MW.eq(WW.state.selection) && (WW.dispatch(KW(WW.state, MW)), !0)
    }

    function NR(WW, RW) {
      return yM(WW, (MW => WW.moveByChar(MW, RW)))
    }
    const eR = WW => NR(WW, !GW(WW)),
      BR = WW => NR(WW, GW(WW));

    function tM(WW, RW) {
      return yM(WW, (MW => WW.moveByGroup(MW, RW)))
    }

    function TR(WW, RW) {
      return yM(WW, (MW => WW.moveVertically(MW, RW)))
    }
    const gM = WW => TR(WW, !1),
      iM = WW => TR(WW, !0);

    function YR(WW, RW) {
      return yM(WW, (MW => WW.moveVertically(MW, RW, MR(WW).height)))
    }
    const JR = WW => YR(WW, !1),
      PR = WW => YR(WW, !0),
      IR = WW => {
        let {
          state: RW,
          dispatch: MW
        } = WW;
        return MW(KW(RW, {
          anchor: 0
        })), !0
      },
      oR = WW => {
        let {
          state: RW,
          dispatch: MW
        } = WW;
        return MW(KW(RW, {
          anchor: RW.doc.length
        })), !0
      },
      lR = WW => {
        let {
          state: RW,
          dispatch: MW
        } = WW;
        return MW(KW(RW, {
          anchor: RW.selection.main.anchor,
          head: 0
        })), !0
      },
      FR = WW => {
        let {
          state: RW,
          dispatch: MW
        } = WW;
        return MW(KW(RW, {
          anchor: RW.selection.main.anchor,
          head: RW.doc.length
        })), !0
      };

    function fR(WW, RW) {
      let {
        state: MW
      } = WW, wW = MW.selection, CW = MW.selection.WA.slice();
      for (let zR of MW.selection.WA) {
        let wW = MW.doc.lineAt(zR.head);
        if (RW ? wW.to < WW.state.doc.length : wW.from > 0)
          for (let MW = zR;;) {
            let zR = WW.moveVertically(MW, RW);
            if (zR.head < wW.from || zR.head > wW.to) {
              CW.some((WW => WW.head == zR.head)) || CW.push(zR);
              break
            }
            if (zR.head == MW.head) break;
            MW = zR
          }
      }
      return CW.length != wW.WA.length && (WW.dispatch(KW(MW, AW.j.create(CW, CW.length - 1))), !0)
    }

    function QR(WW, RW) {
      if (WW.state.readOnly) return !1;
      let MW = "delete.selection",
        {
          state: wW
        } = WW,
        CW = wW.changeByRange((wW => {
          let {
            from: CW,
            to: zR
          } = wW;
          if (CW == zR) {
            let AW = RW(wW);
            AW < CW ? (MW = "delete.backward", AW = rM(WW, AW, !1)) : AW > CW && (MW = "delete.forward", AW = rM(WW, AW, !0)), CW = Math.min(CW, AW), zR = Math.max(zR, AW)
          } else CW = rM(WW, CW, !1), zR = rM(WW, zR, !0);
          return CW == zR ? {
            range: wW
          } : {
            changes: {
              from: CW,
              to: zR
            },
            range: AW.j.cursor(CW, CW < wW.head ? -1 : 1)
          }
        }));
      return !CW.changes.empty && (WW.dispatch(wW.update(CW, {
        scrollIntoView: !0,
        userEvent: MW,
        effects: "delete.selection" == MW ? bR.g.announce.of(wW.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function rM(WW, RW, MW) {
      if (WW instanceof bR.g)
        for (let wW of WW.state.facet(bR.g.atomicRanges).map((RW => RW(WW)))) wW.between(RW, RW, ((WW, wW) => {
          WW < RW && wW > RW && (RW = MW ? wW : WW)
        }));
      return RW
    }
    const cM = (WW, RW, MW) => QR(WW, (wW => {
        let CW, zR, bR = wW.from,
          {
            state: NW
          } = WW,
          eW = NW.doc.lineAt(bR);
        if (MW && !RW && bR > eW.from && bR < eW.from + 200 && !/[^ \t]/.test(CW = eW.text.slice(0, bR - eW.from))) {
          if ("\t" == CW[CW.length - 1]) return bR - 1;
          let WW = (0, AW.P)(CW, NW.tabSize) % (0, yR.Q)(NW) || (0, yR.Q)(NW);
          for (let RW = 0; RW < WW && " " == CW[CW.length - 1 - RW]; RW++) bR--;
          zR = bR
        } else zR = (0, AW.S)(eW.text, bR - eW.from, RW, RW) + eW.from, zR == bR && eW.number != (RW ? NW.doc.lines : 1) ? zR += RW ? 1 : -1 : !RW && /[\ufe00-\ufe0f]/.test(eW.text.slice(zR - eW.from, bR - eW.from)) && (zR = (0, AW.S)(eW.text, zR - eW.from, !1, !1) + eW.from);
        return zR
      })),
      XR = WW => cM(WW, !1, !0),
      jM = WW => cM(WW, !0, !1),
      kM = (WW, RW) => QR(WW, (MW => {
        let wW = MW.head,
          {
            state: CW
          } = WW,
          zR = CW.doc.lineAt(wW),
          bR = CW.charCategorizer(wW);
        for (let WW = null;;) {
          if (wW == (RW ? zR.to : zR.from)) {
            wW == MW.head && zR.number != (RW ? CW.doc.lines : 1) && (wW += RW ? 1 : -1);
            break
          }
          let yR = (0, AW.S)(zR.text, wW - zR.from, RW) + zR.from,
            NW = zR.text.slice(Math.min(wW, yR) - zR.from, Math.max(wW, yR) - zR.from),
            eW = bR(NW);
          if (null != WW && eW != WW) break;
          " " == NW && wW == MW.head || (WW = eW), wW = yR
        }
        return wW
      })),
      aM = WW => kM(WW, !1);

    function sR(WW) {
      let RW = [],
        MW = -1;
      for (let wW of WW.selection.WA) {
        let CW = WW.doc.lineAt(wW.from),
          zR = WW.doc.lineAt(wW.to);
        if (wW.empty || wW.to != zR.from || (zR = WW.doc.lineAt(wW.to - 1)), MW >= CW.number) {
          let WW = RW[RW.length - 1];
          WW.to = zR.to, WW.WA.push(wW)
        } else RW.push({
          from: CW.from,
          to: zR.to,
          WA: [wW]
        });
        MW = zR.number + 1
      }
      return RW
    }

    function dR(WW, RW, MW) {
      if (WW.readOnly) return !1;
      let wW = [],
        CW = [];
      for (let zR of sR(WW)) {
        if (MW ? zR.to == WW.doc.length : 0 == zR.from) continue;
        let RW = WW.doc.lineAt(MW ? zR.to + 1 : zR.from - 1),
          bR = RW.length + 1;
        if (MW) {
          wW.push({
            from: zR.to,
            to: RW.to
          }, {
            from: zR.from,
            insert: RW.text + WW.lineBreak
          });
          for (let RW of zR.WA) CW.push(AW.j.range(Math.min(WW.doc.length, RW.anchor + bR), Math.min(WW.doc.length, RW.head + bR)))
        } else {
          wW.push({
            from: RW.from,
            to: zR.from
          }, {
            from: zR.to,
            insert: WW.lineBreak + RW.text
          });
          for (let WW of zR.WA) CW.push(AW.j.range(WW.anchor - bR, WW.head - bR))
        }
      }
      return !!wW.length && (RW(WW.update({
        changes: wW,
        scrollIntoView: !0,
        selection: AW.j.create(CW, WW.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function pR(WW, RW, MW) {
      if (WW.readOnly) return !1;
      let wW = [];
      for (let zR of sR(WW)) MW ? wW.push({
        from: zR.from,
        insert: WW.doc.slice(zR.from, zR.to) + WW.lineBreak
      }) : wW.push({
        from: zR.to,
        insert: WW.lineBreak + WW.doc.slice(zR.from, zR.to)
      });
      let CW = WW.changes(wW);
      return RW(WW.update({
        changes: CW,
        selection: WW.selection.map(CW, MW ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const hR = UR(!1);

    function UR(WW) {
      return RW => {
        let {
          state: MW,
          dispatch: wW
        } = RW;
        if (MW.readOnly) return !1;
        let CW = MW.changeByRange((RW => {
          let {
            from: wW,
            to: CW
          } = RW, zR = MW.doc.lineAt(wW), bR = !WW && wW == CW && function(WW, RW) {
            if (/\(\)|\[\]|\{\}/.test(WW.sliceDoc(RW - 1, RW + 1))) return {
              from: RW,
              to: RW
            };
            let MW, wW = (0, yR.nb)(WW).resolveInner(RW),
              CW = wW.childBefore(RW),
              zR = wW.childAfter(RW);
            return CW && zR && CW.to <= RW && zR.from >= RW && (MW = CW.type.prop(NW.j.closedBy)) && MW.indexOf(zR.name) > -1 && WW.doc.lineAt(CW.to).from == WW.doc.lineAt(zR.from).from && !/\S/.test(WW.sliceDoc(CW.to, zR.from)) ? {
              from: CW.to,
              to: zR.from
            } : null
          }(MW, wW);
          WW && (wW = CW = (CW <= zR.to ? zR : MW.doc.lineAt(CW)).to);
          let eW = new yR.f(MW, {
              simulateBreak: wW,
              simulateDoubleBreak: !!bR
            }),
            BW = (0, yR.U)(eW, wW);
          for (null == BW && (BW = (0, AW.P)(/^\s*/.exec(MW.doc.lineAt(wW).text)[0], MW.tabSize)); CW < zR.to && /\s/.test(zR.text[CW - zR.from]);) CW++;
          bR ? ({
            from: wW,
            to: CW
          } = bR) : wW > zR.from && wW < zR.from + 100 && !/\S/.test(zR.text.slice(0, wW)) && (wW = zR.from);
          let tR = ["", (0, yR.$)(MW, BW)];
          return bR && tR.push((0, yR.$)(MW, eW.lineIndent(zR.from, -1))), {
            changes: {
              from: wW,
              to: CW,
              insert: AW.D.of(tR)
            },
            range: AW.j.cursor(wW + 1 + tR[1].length)
          }
        }));
        return wW(MW.update(CW, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function ER(WW, RW) {
      let MW = -1;
      return WW.changeByRange((wW => {
        let CW = [];
        for (let AW = wW.from; AW <= wW.to;) {
          let zR = WW.doc.lineAt(AW);
          zR.number > MW && (wW.empty || wW.to > zR.from) && (RW(zR, CW, wW), MW = zR.number), AW = zR.to + 1
        }
        let zR = WW.changes(CW);
        return {
          changes: CW,
          range: AW.j.range(zR.mapPos(wW.anchor, 1), zR.mapPos(wW.head, 1))
        }
      }))
    }
    const VR = WW => {
        let {
          state: RW,
          dispatch: MW
        } = WW;
        return !RW.readOnly && (MW(RW.update(ER(RW, ((WW, MW) => {
          MW.push({
            from: WW.from,
            insert: RW.facet(yR.cb)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      mM = WW => {
        let {
          state: RW,
          dispatch: MW
        } = WW;
        return !RW.readOnly && (MW(RW.update(ER(RW, ((WW, MW) => {
          let wW = /^\s*/.exec(WW.text)[0];
          if (!wW) return;
          let CW = (0, AW.P)(wW, RW.tabSize),
            zR = 0,
            bR = (0, yR.$)(RW, Math.max(0, CW - (0, yR.Q)(RW)));
          for (; zR < wW.length && zR < bR.length && wW.charCodeAt(zR) == bR.charCodeAt(zR);) zR++;
          MW.push({
            from: WW.from + zR,
            to: WW.from + wW.length,
            insert: bR.slice(zR)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      xM = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: WW => uW(WW, (RW => ZW(WW.state, RW, !GW(WW)))),
        shift: WW => yM(WW, (RW => ZW(WW.state, RW, !GW(WW))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: WW => uW(WW, (RW => ZW(WW.state, RW, GW(WW)))),
        shift: WW => yM(WW, (RW => ZW(WW.state, RW, GW(WW))))
      }, {
        key: "Alt-ArrowUp",
        run: WW => {
          let {
            state: RW,
            dispatch: MW
          } = WW;
          return dR(RW, MW, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: WW => {
          let {
            state: RW,
            dispatch: MW
          } = WW;
          return pR(RW, MW, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: WW => {
          let {
            state: RW,
            dispatch: MW
          } = WW;
          return dR(RW, MW, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: WW => {
          let {
            state: RW,
            dispatch: MW
          } = WW;
          return pR(RW, MW, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: WW => fR(WW, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: WW => fR(WW, !0)
      }, {
        key: "Escape",
        run: WW => {
          let {
            state: RW,
            dispatch: MW
          } = WW, wW = RW.selection, CW = null;
          return wW.WA.length > 1 ? CW = AW.j.create([wW.main]) : wW.main.empty || (CW = AW.j.create([AW.j.cursor(wW.main.head)])), !!CW && (MW(KW(RW, CW)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: UR(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: WW => {
          let {
            state: RW,
            dispatch: MW
          } = WW, wW = sR(RW).map((WW => {
            let {
              from: MW,
              to: wW
            } = WW;
            return AW.j.range(MW, Math.min(wW + 1, RW.doc.length))
          }));
          return MW(RW.update({
            selection: AW.j.create(wW),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: WW => {
          let {
            state: RW,
            dispatch: MW
          } = WW, wW = vR(RW.selection, (WW => {
            let MW = (0, yR.nb)(RW),
              wW = MW.resolveStack(WW.from, 1);
            if (WW.empty) {
              let RW = MW.resolveStack(WW.from, -1);
              RW.node.from >= wW.node.from && RW.node.to <= wW.node.to && (wW = RW)
            }
            for (let RW = wW; RW; RW = RW.next) {
              let {
                node: MW
              } = RW;
              if ((MW.from < WW.from && MW.to >= WW.to || MW.to > WW.to && MW.from <= WW.from) && RW.next) return AW.j.range(MW.to, MW.from)
            }
            return WW
          }));
          return !wW.eq(RW.selection) && (MW(KW(RW, wW)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: mM
      }, {
        key: "Mod-]",
        run: VR
      }, {
        key: "Mod-Alt-\\",
        run: WW => {
          let {
            state: RW,
            dispatch: MW
          } = WW;
          if (RW.readOnly) return !1;
          let wW = Object.create(null),
            CW = new yR.f(RW, {
              overrideIndentation: WW => {
                let RW = wW[WW];
                return null == RW ? -1 : RW
              }
            }),
            zR = ER(RW, ((WW, MW, zR) => {
              let AW = (0, yR.U)(CW, WW.from);
              if (null == AW) return;
              /\S/.test(WW.text) || (AW = 0);
              let bR = /^\s*/.exec(WW.text)[0],
                NW = (0, yR.$)(RW, AW);
              (bR != NW || zR.from < WW.from + bR.length) && (wW[WW.from] = AW, MW.push({
                from: WW.from,
                to: WW.from + bR.length,
                insert: NW
              }))
            }));
          return zR.changes.empty || MW(RW.update(zR, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: WW => {
          if (WW.state.readOnly) return !1;
          let {
            state: RW
          } = WW, MW = RW.changes(sR(RW).map((WW => {
            let {
              from: MW,
              to: wW
            } = WW;
            return MW > 0 ? MW-- : wW < RW.doc.length && wW++, {
              from: MW,
              to: wW
            }
          }))), wW = vR(RW.selection, (RW => {
            let MW;
            if (WW.lineWrapping) {
              let wW = WW.lineBlockAt(RW.head),
                CW = WW.coordsAtPos(RW.head, RW.assoc || 1);
              CW && (MW = wW.bottom + WW.documentTop - CW.bottom + WW.defaultLineHeight / 2)
            }
            return WW.moveVertically(RW, !0, MW)
          })).map(MW);
          return WW.dispatch({
            changes: MW,
            selection: wW,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: WW => {
          let {
            state: RW,
            dispatch: MW
          } = WW;
          return bM(RW, MW, !1)
        }
      }, {
        key: "Mod-/",
        run: WW => {
          let {
            state: RW
          } = WW, MW = RW.doc.lineAt(RW.selection.main.from), wW = gR(WW.state, MW.from);
          return wW.line ? BW(WW) : !!wW.block && TW(WW)
        }
      }, {
        key: "Alt-A",
        run: tR
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: WW => (WW.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: LW,
        shift: eR,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: WW => DW(WW, !GW(WW)),
        shift: WW => tM(WW, !GW(WW)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: WW => uW(WW, (RW => AR(WW, RW, !GW(WW)))),
        shift: WW => yM(WW, (RW => AR(WW, RW, !GW(WW)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: HW,
        shift: BR,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: WW => DW(WW, GW(WW)),
        shift: WW => tM(WW, GW(WW)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: WW => uW(WW, (RW => AR(WW, RW, GW(WW)))),
        shift: WW => yM(WW, (RW => AR(WW, RW, GW(WW)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: WR,
        shift: gM,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: IR,
        shift: lR
      }, {
        mac: "Ctrl-ArrowUp",
        run: CR,
        shift: JR
      }, {
        key: "ArrowDown",
        run: RR,
        shift: iM,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: oR,
        shift: FR
      }, {
        mac: "Ctrl-ArrowDown",
        run: zM,
        shift: PR
      }, {
        key: "PageUp",
        run: CR,
        shift: JR
      }, {
        key: "PageDown",
        run: zM,
        shift: PR
      }, {
        key: "Home",
        run: WW => uW(WW, (RW => AR(WW, RW, !1))),
        shift: WW => yM(WW, (RW => AR(WW, RW, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: IR,
        shift: lR
      }, {
        key: "End",
        run: WW => uW(WW, (RW => AR(WW, RW, !0))),
        shift: WW => yM(WW, (RW => AR(WW, RW, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: oR,
        shift: FR
      }, {
        key: "Enter",
        run: hR,
        shift: hR
      }, {
        key: "Mod-a",
        run: WW => {
          let {
            state: RW,
            dispatch: MW
          } = WW;
          return MW(RW.update({
            selection: {
              anchor: 0,
              head: RW.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: XR,
        shift: XR,
        preventDefault: !0
      }, {
        key: "Delete",
        run: jM,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: aM,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: WW => kM(WW, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: WW => QR(WW, (RW => {
          let MW = WW.moveToLineBoundary(RW, !1).head;
          return RW.head > MW ? MW : Math.max(0, RW.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: WW => QR(WW, (RW => {
          let MW = WW.moveToLineBoundary(RW, !0).head;
          return RW.head < MW ? MW : Math.min(WW.state.doc.length, RW.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: LW,
        shift: eR,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: HW,
        shift: BR
      }, {
        key: "Ctrl-p",
        run: WR,
        shift: gM
      }, {
        key: "Ctrl-n",
        run: RR,
        shift: iM
      }, {
        key: "Ctrl-a",
        run: WW => uW(WW, (RW => AW.j.cursor(WW.lineBlockAt(RW.head).from, 1))),
        shift: WW => yM(WW, (RW => AW.j.cursor(WW.lineBlockAt(RW.head).from)))
      }, {
        key: "Ctrl-e",
        run: WW => uW(WW, (RW => AW.j.cursor(WW.lineBlockAt(RW.head).to, -1))),
        shift: WW => yM(WW, (RW => AW.j.cursor(WW.lineBlockAt(RW.head).to)))
      }, {
        key: "Ctrl-d",
        run: jM
      }, {
        key: "Ctrl-h",
        run: XR
      }, {
        key: "Ctrl-k",
        run: WW => QR(WW, (RW => {
          let MW = WW.lineBlockAt(RW.head).to;
          return RW.head < MW ? MW : Math.min(WW.state.doc.length, RW.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: aM
      }, {
        key: "Ctrl-o",
        run: WW => {
          let {
            state: RW,
            dispatch: MW
          } = WW;
          if (RW.readOnly) return !1;
          let wW = RW.changeByRange((WW => ({
            changes: {
              from: WW.from,
              to: WW.to,
              insert: AW.D.of(["", ""])
            },
            range: AW.j.cursor(WW.from)
          })));
          return MW(RW.update(wW, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: WW => {
          let {
            state: RW,
            dispatch: MW
          } = WW;
          if (RW.readOnly) return !1;
          let wW = RW.changeByRange((WW => {
            if (!WW.empty || 0 == WW.from || WW.from == RW.doc.length) return {
              range: WW
            };
            let MW = WW.from,
              wW = RW.doc.lineAt(MW),
              CW = MW == wW.from ? MW - 1 : (0, AW.S)(wW.text, MW - wW.from, !1) + wW.from,
              zR = MW == wW.to ? MW + 1 : (0, AW.S)(wW.text, MW - wW.from, !0) + wW.from;
            return {
              changes: {
                from: CW,
                to: zR,
                insert: RW.doc.slice(MW, zR).append(RW.doc.slice(CW, MW))
              },
              range: AW.j.cursor(zR)
            }
          }));
          return !wW.changes.empty && (MW(RW.update(wW, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: zM
      }].map((WW => ({
        mac: WW.key,
        run: WW.run,
        shift: WW.shift
      }))))),
      vM = {
        key: "Tab",
        run: VR,
        shift: mM
      };
    var KR = MW(38836),
      uR = MW(38776),
      OR = MW(38840),
      nR = function(WW) {
        void 0 === WW && (WW = {});
        var {
          crosshairCursor: RW = !1
        } = WW, MW = [];
        !1 !== WW.closeBracketsKeymap && (MW = MW.concat(uR.e)), !1 !== WW.defaultKeymap && (MW = MW.concat(xM)), !1 !== WW.searchKeymap && (MW = MW.concat(KR.i)), !1 !== WW.historyKeymap && (MW = MW.concat(xR)), !1 !== WW.foldKeymap && (MW = MW.concat(yR.J)), !1 !== WW.completionKeymap && (MW = MW.concat(uR.l)), !1 !== WW.lintKeymap && (MW = MW.concat(OR.b));
        var wW = [];
        return !1 !== WW.lineNumbers && wW.push((0, bR.V)()), !1 !== WW.highlightActiveLineGutter && wW.push((0, bR.H)()), !1 !== WW.highlightSpecialChars && wW.push((0, bR.O)()), !1 !== WW.history && wW.push(function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [FW, lW.of(WW), bR.g.domEventHandlers({
            beforeinput(WW, RW) {
              let MW = "historyUndo" == WW.inputType ? QW : "historyRedo" == WW.inputType ? rR : null;
              return !!MW && (WW.preventDefault(), MW(RW))
            }
          })]
        }()), !1 !== WW.foldGutter && wW.push((0, yR.E)()), !1 !== WW.drawSelection && wW.push((0, bR.x)()), !1 !== WW.dropCursor && wW.push((0, bR.y)()), !1 !== WW.allowMultipleSelections && wW.push(AW.l.allowMultipleSelections.of(!0)), !1 !== WW.indentOnInput && wW.push((0, yR._)()), !1 !== WW.syntaxHighlighting && wW.push((0, yR.hb)(yR.s, {
          fallback: !0
        })), !1 !== WW.bracketMatching && wW.push((0, yR.o)()), !1 !== WW.closeBrackets && wW.push((0, uR.h)()), !1 !== WW.autocompletion && wW.push((0, uR.d)()), !1 !== WW.rectangularSelection && wW.push((0, bR._)()), !1 !== RW && wW.push((0, bR.t)()), !1 !== WW.highlightActiveLine && wW.push((0, bR.K)()), !1 !== WW.highlightSelectionMatches && wW.push((0, KR.f)()), WW.tabSize && "number" === typeof WW.tabSize && wW.push(yR.cb.of(" ".repeat(WW.tabSize))), wW.concat([bR.S.of(MW.flat())]).filter(Boolean)
      },
      GR = MW(38816);
    const LR = "#e5c07b",
      HR = "#e06c75",
      DR = "#56b6c2",
      qM = "#ffffff",
      ZR = "#abb2bf",
      SR = "#7d8799",
      WM = "#61afef",
      RM = "#98c379",
      MM = "#d19a66",
      wM = "#c678dd",
      CM = "#21252b",
      zw = "#2c313a",
      AM = "#282c34",
      bw = "#353a42",
      yw = "#3E4451",
      NM = "#528bff",
      eM = bR.g.theme({
        "&": {
          color: ZR,
          backgroundColor: AM
        },
        ".cm-content": {
          caretColor: NM
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: NM
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: yw
        },
        ".cm-panels": {
          backgroundColor: CM,
          color: ZR
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
          backgroundColor: AM,
          color: SR,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: zw
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: bw
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: bw,
          borderBottomColor: bw
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: zw,
            color: ZR
          }
        }
      }, {
        dark: !0
      }),
      BM = yR.c.define([{
        tag: GR.n.keyword,
        color: wM
      }, {
        tag: [GR.n.name, GR.n.deleted, GR.n.character, GR.n.propertyName, GR.n.macroName],
        color: HR
      }, {
        tag: [GR.n.function(GR.n.variableName), GR.n.labelName],
        color: WM
      }, {
        tag: [GR.n.color, GR.n.constant(GR.n.name), GR.n.standard(GR.n.name)],
        color: MM
      }, {
        tag: [GR.n.definition(GR.n.name), GR.n.separator],
        color: ZR
      }, {
        tag: [GR.n.typeName, GR.n.className, GR.n.number, GR.n.changed, GR.n.annotation, GR.n.modifier, GR.n.self, GR.n.namespace],
        color: LR
      }, {
        tag: [GR.n.operator, GR.n.operatorKeyword, GR.n.url, GR.n.escape, GR.n.regexp, GR.n.link, GR.n.special(GR.n.string)],
        color: DR
      }, {
        tag: [GR.n.meta, GR.n.comment],
        color: SR
      }, {
        tag: GR.n.strong,
        fontWeight: "bold"
      }, {
        tag: GR.n.emphasis,
        fontStyle: "italic"
      }, {
        tag: GR.n.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: GR.n.link,
        color: SR,
        textDecoration: "underline"
      }, {
        tag: GR.n.heading,
        fontWeight: "bold",
        color: HR
      }, {
        tag: [GR.n.atom, GR.n.bool, GR.n.special(GR.n.variableName)],
        color: MM
      }, {
        tag: [GR.n.processingInstruction, GR.n.string, GR.n.inserted],
        color: RM
      }, {
        tag: GR.n.invalid,
        color: qM
      }]),
      tw = [eM, (0, yR.hb)(BM)];
    var TM = bR.g.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class gw {
      constructor(WW, RW) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = RW, this.timeoutMS = RW, this.callbacks.push(WW)
      }
      WR() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var WW = this.callbacks.slice();
          this.callbacks.length = 0, WW.forEach((WW => {
            try {
              WW()
            } catch (RW) {
              console.error("TimeoutLatch callback error:", RW)
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
    class iw {
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
            WW.WR(), WW.isDone && this.remove(WW)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var YM = null,
      JM = AW.d.define(),
      PM = [];

    function IM(WW) {
      var {
        value: RW,
        selection: MW,
        onChange: wW,
        onStatistics: CW,
        onCreateEditor: yR,
        onUpdate: NW,
        extensions: eW = PM,
        autoFocus: BW,
        theme: tR = "light",
        height: TW = null,
        minHeight: gR = null,
        maxHeight: iR = null,
        width: YW = null,
        minWidth: JW = null,
        maxWidth: PW = null,
        placeholder: IW = "",
        editable: oW = !0,
        readOnly: lW = !1,
        indentWithTab: FW = !0,
        basicSetup: fW = !0,
        root: QW,
        initialState: rR
      } = WW, [cR, XW] = (0, zR.useState)(), [jR, kR] = (0, zR.useState)(), [aR, sW] = (0, zR.useState)(), dW = (0, zR.useState)((() => ({
        current: null
      })))[0], pW = (0, zR.useState)((() => ({
        current: null
      })))[0], hW = bR.g.theme({
        "&": {
          height: TW,
          minHeight: gR,
          maxHeight: iR,
          width: YW,
          minWidth: JW,
          maxWidth: PW
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), UW = bR.g.updateListener.of((WW => {
        if (WW.docChanged && "function" === typeof wW && !WW.transactions.some((WW => WW.annotation(JM)))) {
          dW.current ? dW.current.reset() : (dW.current = new gw((() => {
            if (pW.current) {
              var WW = pW.current;
              pW.current = null, WW()
            }
            dW.current = null
          }), 200), ("undefined" === typeof window ? new iw : (YM || (YM = new iw), YM)).add(dW.current));
          var RW = WW.state.doc.toString();
          wW(RW, WW)
        }
        CW && CW((WW => ({
          line: WW.state.doc.lineAt(WW.state.selection.main.from),
          lineCount: WW.state.doc.lines,
          lineBreak: WW.state.lineBreak,
          length: WW.state.doc.length,
          readOnly: WW.state.readOnly,
          tabSize: WW.state.tabSize,
          selection: WW.state.selection,
          selectionAsSingle: WW.state.selection.asSingle().main,
          WA: WW.state.selection.WA,
          selectionCode: WW.state.sliceDoc(WW.state.selection.main.from, WW.state.selection.main.to),
          selections: WW.state.selection.WA.map((RW => WW.state.sliceDoc(RW.from, RW.to))),
          selectedText: WW.state.selection.WA.some((WW => !WW.empty))
        }))(WW))
      })), EW = function(WW) {
        void 0 === WW && (WW = {});
        var {
          indentWithTab: RW = !0,
          editable: MW = !0,
          readOnly: wW = !1,
          theme: CW = "light",
          placeholder: zR = "",
          basicSetup: yR = !0
        } = WW, NW = [];
        switch (RW && NW.unshift(bR.S.of([vM])), yR && ("boolean" === typeof yR ? NW.unshift(nR()) : NW.unshift(nR(yR))), zR && NW.unshift((0, bR.Z)(zR)), CW) {
          case "light":
            NW.push(TM);
            break;
          case "dark":
            NW.push(tw);
            break;
          case "none":
            break;
          default:
            NW.push(CW)
        }
        return !1 === MW && NW.push(bR.g.editable.of(!1)), wW && NW.push(AW.l.readOnly.of(!0)), [...NW]
      }({
        theme: tR,
        editable: oW,
        readOnly: lW,
        placeholder: IW,
        indentWithTab: FW,
        basicSetup: fW
      }), VW = [UW, hW, ...EW];
      return NW && "function" === typeof NW && VW.push(bR.g.updateListener.of(NW)), VW = VW.concat(eW), (0, zR.useLayoutEffect)((() => {
        if (cR && !aR) {
          var WW = {
              doc: RW,
              selection: MW,
              extensions: VW
            },
            wW = rR ? AW.l.fromJSON(rR.json, WW, rR.fields) : AW.l.create(WW);
          if (sW(wW), !jR) {
            var CW = new bR.g({
              state: wW,
              parent: cR,
              root: QW
            });
            kR(CW), yR && yR(CW, wW)
          }
        }
        return () => {
          jR && (sW(void 0), kR(void 0))
        }
      }), [cR, aR]), (0, zR.useEffect)((() => {
        WW.container && XW(WW.container)
      }), [WW.container]), (0, zR.useEffect)((() => () => {
        jR && (jR.destroy(), kR(void 0)), dW.current && (dW.current.cancel(), dW.current = null)
      }), [jR]), (0, zR.useEffect)((() => {
        BW && jR && jR.focus()
      }), [BW, jR]), (0, zR.useEffect)((() => {
        jR && jR.dispatch({
          effects: AW.A.reconfigure.of(VW)
        })
      }), [tR, eW, TW, gR, iR, YW, JW, PW, IW, oW, lW, FW, fW, wW, NW]), (0, zR.useEffect)((() => {
        if (void 0 !== RW) {
          var WW = jR ? jR.state.doc.toString() : "";
          if (jR && RW !== WW) {
            var MW = () => {
              jR && RW !== jR.state.doc.toString() && jR.dispatch({
                changes: {
                  from: 0,
                  to: jR.state.doc.toString().length,
                  insert: RW || ""
                },
                annotations: [JM.of(!0)]
              })
            };
            dW.current && !dW.current.isDone ? pW.current = MW : MW()
          }
        }
      }), [RW, jR]), {
        state: aR,
        setState: sW,
        view: jR,
        setView: kR,
        container: cR,
        setContainer: XW
      }
    }
    var oM = MW(940),
      lM = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      FM = (0, zR.forwardRef)(((WW, RW) => {
        var {
          className: MW,
          value: AW = "",
          selection: bR,
          extensions: yR = [],
          onChange: NW,
          onStatistics: eW,
          onCreateEditor: BW,
          onUpdate: tR,
          autoFocus: TW,
          theme: gR = "light",
          height: iR,
          minHeight: YW,
          maxHeight: JW,
          width: PW,
          minWidth: IW,
          maxWidth: oW,
          basicSetup: lW,
          placeholder: FW,
          indentWithTab: fW,
          editable: QW,
          readOnly: rR,
          root: cR,
          initialState: XW
        } = WW, jR = (0, CW.e)(WW, lM), kR = (0, zR.useRef)(null), {
          state: aR,
          view: sW,
          container: dW,
          setContainer: pW
        } = IM({
          root: cR,
          value: AW,
          autoFocus: TW,
          theme: gR,
          height: iR,
          minHeight: YW,
          maxHeight: JW,
          width: PW,
          minWidth: IW,
          maxWidth: oW,
          basicSetup: lW,
          placeholder: FW,
          indentWithTab: fW,
          editable: QW,
          readOnly: rR,
          selection: bR,
          onChange: NW,
          onStatistics: eW,
          onCreateEditor: BW,
          onUpdate: tR,
          extensions: yR,
          initialState: XW
        });
        (0, zR.useImperativeHandle)(RW, (() => ({
          editor: kR.current,
          state: aR,
          view: sW
        })), [kR, dW, aR, sW]);
        var hW = (0, zR.useCallback)((WW => {
          kR.current = WW, pW(WW)
        }), [pW]);
        if ("string" !== typeof AW) throw new Error("value must be typeof string but got " + typeof AW);
        var UW = "string" === typeof gR ? "cm-theme-" + gR : "cm-theme";
        return (0, oM.jsx)("div", (0, wW.e)({
          ref: hW,
          className: UW + (MW ? " " + MW : "")
        }, jR))
      }));
    FM.displayName = "CodeMirror";
    const fM = FM
  },
  38797: (WW, RW, MW) => {
    function wW() {
      var WW = arguments[0];
      "string" == typeof WW && (WW = document.createElement(WW));
      var RW = 1,
        MW = arguments[1];
      if (MW && "object" == typeof MW && null == MW.nodeType && !Array.isArray(MW)) {
        for (var wW in MW)
          if (Object.prototype.hasOwnProperty.call(MW, wW)) {
            var zR = MW[wW];
            "string" == typeof zR ? WW.setAttribute(wW, zR) : null != zR && (WW[wW] = zR)
          } RW++
      }
      for (; RW < arguments.length; RW++) CW(WW, arguments[RW]);
      return WW
    }

    function CW(WW, RW) {
      if ("string" == typeof RW) WW.appendChild(document.createTextNode(RW));
      else if (null == RW);
      else if (null != RW.nodeType) WW.appendChild(RW);
      else {
        if (!Array.isArray(RW)) throw new RangeError("Unsupported child node: " + RW);
        for (var MW = 0; MW < RW.length; MW++) CW(WW, RW[MW])
      }
    }
    MW.d(RW, {
      c: () => wW
    })
  },
  38789: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    const wW = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      CW = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      zR = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class AW {
      constructor(WW, RW) {
        this.rules = [];
        let {
          finish: MW
        } = RW || {};

        function wW(WW) {
          return /^@/.test(WW) ? [WW] : WW.split(/,\s*/)
        }

        function CW(WW, RW, zR, AW) {
          let bR = [],
            yR = /^@(\w+)\b/.exec(WW[0]),
            NW = yR && "keyframes" == yR[1];
          if (yR && null == RW) return zR.push(WW[0] + ";");
          for (let MW in RW) {
            let AW = RW[MW];
            if (/&/.test(MW)) CW(MW.split(/,\s*/).map((RW => WW.map((WW => RW.replace(/&/, WW))))).reduce(((WW, RW) => WW.concat(RW))), AW, zR);
            else if (AW && "object" == typeof AW) {
              if (!yR) throw new RangeError("The value of a property (" + MW + ") should be a primitive value.");
              CW(wW(MW), AW, bR, NW)
            } else null != AW && bR.push(MW.replace(/_.*/, "").replace(/[A-Z]/g, (WW => "-" + WW.toLowerCase())) + ": " + AW + ";")
          }(bR.length || NW) && zR.push((!MW || yR || AW ? WW : WW.map(MW)).join(", ") + " {" + bR.join(" ") + "}")
        }
        for (let zR in WW) CW(wW(zR), WW[zR], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let WW = zR[wW] || 1;
        return zR[wW] = WW + 1, "\u037c" + WW.toString(36)
      }
      static mount(WW, RW, MW) {
        let wW = WW[CW],
          zR = MW && MW.nonce;
        wW ? zR && wW.setNonce(zR) : wW = new yR(WW, zR), wW.mount(Array.isArray(RW) ? RW : [RW], WW)
      }
    }
    let bR = new Map;
    class yR {
      constructor(WW, RW) {
        let MW = WW.ownerDocument || WW,
          wW = MW.defaultView;
        if (!WW.head && WW.adoptedStyleSheets && wW.CSSStyleSheet) {
          let RW = bR.get(MW);
          if (RW) return WW[CW] = RW;
          this.sheet = new wW.CSSStyleSheet, bR.set(MW, this)
        } else this.styleTag = MW.createElement("style"), RW && this.styleTag.setAttribute("nonce", RW);
        this.modules = [], WW[CW] = this
      }
      mount(WW, RW) {
        let MW = this.sheet,
          wW = 0,
          CW = 0;
        for (let zR = 0; zR < WW.length; zR++) {
          let RW = WW[zR],
            AW = this.modules.indexOf(RW);
          if (AW < CW && AW > -1 && (this.modules.splice(AW, 1), CW--, AW = -1), -1 == AW) {
            if (this.modules.splice(CW++, 0, RW), MW)
              for (let WW = 0; WW < RW.rules.length; WW++) MW.insertRule(RW.rules[WW], wW++)
          } else {
            for (; CW < AW;) wW += this.modules[CW++].rules.length;
            wW += RW.rules.length, CW++
          }
        }
        if (MW) RW.adoptedStyleSheets.indexOf(this.sheet) < 0 && (RW.adoptedStyleSheets = [this.sheet, ...RW.adoptedStyleSheets]);
        else {
          let WW = "";
          for (let RW = 0; RW < this.modules.length; RW++) WW += this.modules[RW].getRules() + "\n";
          this.styleTag.textContent = WW;
          let MW = RW.head || RW;
          this.styleTag.parentNode != MW && MW.insertBefore(this.styleTag, MW.firstChild)
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