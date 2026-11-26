export const id = 603;
export const ids = [603];
export const modules = {
  44814: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => KB,
      f: () => OB,
      g: () => xB,
      h: () => zH,
      l: () => cB,
      p: () => CH,
      s: () => GB
    });
    var AH = LH(44818),
      rH = LH(44823),
      SH = LH(44839);
    class hH {
      constructor(HH, BH, LH, AH) {
        this.state = HH, this.pos = BH, this.explicit = LH, this.view = AH, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(HH) {
        let BH = (0, SH.pb)(this.state).resolveInner(this.pos, -1);
        for (; BH && HH.indexOf(BH.name) < 0;) BH = BH.parent;
        return BH ? {
          from: BH.from,
          to: this.pos,
          text: this.state.sliceDoc(BH.from, this.pos),
          type: BH.type
        } : null
      }
      matchBefore(HH) {
        let BH = this.state.doc.lineAt(this.pos),
          LH = Math.max(BH.from, this.pos - 250),
          AH = BH.text.slice(LH - BH.from, this.pos - BH.from),
          rH = AH.search(GH(HH, !1));
        return rH < 0 ? null : {
          from: LH + rH,
          to: this.pos,
          text: AH.slice(rH)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(HH, BH, LH) {
        "abort" == HH && this.abortListeners && (this.abortListeners.push(BH), LH && LH.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function tH(HH) {
      let BH = Object.keys(HH).join(""),
        LH = /\w/.test(BH);
      return LH && (BH = BH.replace(/\w/g, "")), `[${LH?"\\w":""}${BH.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function zH(HH) {
      let BH = HH.map((HH => "string" == typeof HH ? {
          label: HH
        } : HH)),
        [LH, AH] = BH.every((HH => /^\w+$/.test(HH.label))) ? [/\w*$/, /\w+$/] : function(HH) {
          let BH = Object.create(null),
            LH = Object.create(null);
          for (let {
              label: rH
            }
            of HH) {
            BH[rH[0]] = !0;
            for (let HH = 1; HH < rH.length; HH++) LH[rH[HH]] = !0
          }
          let AH = tH(BH) + tH(LH) + "*$";
          return [new RegExp("^" + AH), new RegExp(AH)]
        }(BH);
      return HH => {
        let rH = HH.matchBefore(AH);
        return rH || HH.explicit ? {
          from: rH ? rH.from : HH.pos,
          options: BH,
          validFor: LH
        } : null
      }
    }

    function CH(HH, BH) {
      return LH => {
        for (let BH = (0, SH.pb)(LH.state).resolveInner(LH.pos, -1); BH; BH = BH.parent) {
          if (HH.indexOf(BH.name) > -1) return null;
          if (BH.type.isTop) break
        }
        return BH(LH)
      }
    }
    class EH {
      constructor(HH, BH, LH, AH) {
        this.completion = HH, this.source = BH, this.match = LH, this.score = AH
      }
    }

    function XH(HH) {
      return HH.selection.main.from
    }

    function GH(HH, BH) {
      var LH;
      let {
        source: AH
      } = HH, rH = BH && "^" != AH[0], SH = "$" != AH[AH.length - 1];
      return rH || SH ? new RegExp(`${rH?"^":""}(?:${AH})${SH?"$":""}`, null !== (LH = HH.flags) && void 0 !== LH ? LH : HH.ignoreCase ? "i" : "") : HH
    }
    const YH = AH.c.define();

    function uH(HH, BH, LH, rH) {
      let {
        main: SH
      } = HH.selection, hH = LH - SH.from, tH = rH - SH.from;
      return {
        ...HH.changeByRange((zH => {
          if (zH != SH && LH != rH && HH.sliceDoc(zH.from + hH, zH.from + tH) != HH.sliceDoc(LH, rH)) return {
            range: zH
          };
          let CH = HH.toText(BH);
          return {
            changes: {
              from: zH.from + hH,
              to: rH == SH.from ? zH.to : zH.from + tH,
              insert: CH
            },
            range: AH.i.cursor(zH.from + hH + CH.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const QH = new WeakMap;

    function WH(HH) {
      if (!Array.isArray(HH)) return HH;
      let BH = QH.get(HH);
      return BH || QH.set(HH, BH = zH(HH)), BH
    }
    const MH = AH.B.define(),
      xH = AH.B.define();
    class vH {
      constructor(HH) {
        this.pattern = HH, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let BH = 0; BH < HH.length;) {
          let LH = (0, AH.N)(HH, BH),
            rH = (0, AH.Q)(LH);
          this.chars.push(LH);
          let SH = HH.slice(BH, BH + rH),
            hH = SH.toUpperCase();
          this.folded.push((0, AH.N)(hH == SH ? SH.toLowerCase() : hH, 0)), BH += rH
        }
        this.astral = HH.length != this.chars.length
      }
      ret(HH, BH) {
        return this.score = HH, this.matched = BH, this
      }
      match(HH) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (HH.length < this.pattern.length) return null;
        let {
          chars: BH,
          folded: LH,
          any: rH,
          precise: SH,
          byWord: hH
        } = this;
        if (1 == BH.length) {
          let rH = (0, AH.N)(HH, 0),
            SH = (0, AH.Q)(rH),
            hH = SH == HH.length ? 0 : -100;
          if (rH == BH[0]);
          else {
            if (rH != LH[0]) return null;
            hH += -200
          }
          return this.ret(hH, [0, SH])
        }
        let tH = HH.indexOf(this.pattern);
        if (0 == tH) return this.ret(HH.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let zH = BH.length,
          CH = 0;
        if (tH < 0) {
          for (let SH = 0, hH = Math.min(HH.length, 200); SH < hH && CH < zH;) {
            let hH = (0, AH.N)(HH, SH);
            hH != BH[CH] && hH != LH[CH] || (rH[CH++] = SH), SH += (0, AH.Q)(hH)
          }
          if (CH < zH) return null
        }
        let EH = 0,
          XH = 0,
          GH = !1,
          YH = 0,
          uH = -1,
          QH = -1,
          WH = /[a-z]/.test(HH),
          MH = !0;
        for (let xH = 0, vH = Math.min(HH.length, 200), PH = 0; xH < vH && XH < zH;) {
          let rH = (0, AH.N)(HH, xH);
          tH < 0 && (EH < zH && rH == BH[EH] && (SH[EH++] = xH), YH < zH && (rH == BH[YH] || rH == LH[YH] ? (0 == YH && (uH = xH), QH = xH + 1, YH++) : YH = 0));
          let CH, vH = rH < 255 ? rH >= 48 && rH <= 57 || rH >= 97 && rH <= 122 ? 2 : rH >= 65 && rH <= 90 ? 1 : 0 : (CH = (0, AH.hb)(rH)) != CH.toLowerCase() ? 1 : CH != CH.toUpperCase() ? 2 : 0;
          (!xH || 1 == vH && WH || 0 == PH && 0 != vH) && (BH[XH] == rH || LH[XH] == rH && (GH = !0) ? hH[XH++] = xH : hH.length && (MH = !1)), PH = vH, xH += (0, AH.Q)(rH)
        }
        return XH == zH && 0 == hH[0] && MH ? this.result((GH ? -200 : 0) - 100, hH, HH) : YH == zH && 0 == uH ? this.ret(-200 - HH.length + (QH == HH.length ? 0 : -100), [0, QH]) : tH > -1 ? this.ret(-700 - HH.length, [tH, tH + this.pattern.length]) : YH == zH ? this.ret(-900 - HH.length, [uH, QH]) : XH == zH ? this.result((GH ? -200 : 0) - 100 - 700 + (MH ? 0 : -1100), hH, HH) : 2 == BH.length ? null : this.result((rH[0] ? -700 : 0) - 200 - 1100, rH, HH)
      }
      result(HH, BH, LH) {
        let rH = [],
          SH = 0;
        for (let hH of BH) {
          let HH = hH + (this.astral ? (0, AH.Q)((0, AH.N)(LH, hH)) : 1);
          SH && rH[SH - 1] == hH ? rH[SH - 1] = HH : (rH[SH++] = hH, rH[SH++] = HH)
        }
        return this.ret(HH - LH.length, rH)
      }
    }
    class PH {
      constructor(HH) {
        this.pattern = HH, this.matched = [], this.score = 0, this.folded = HH.toLowerCase()
      }
      match(HH) {
        if (HH.length < this.pattern.length) return null;
        let BH = HH.slice(0, this.pattern.length),
          LH = BH == this.pattern ? 0 : BH.toLowerCase() == this.folded ? -200 : null;
        return null == LH ? null : (this.matched = [0, BH.length], this.score = LH + (HH.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const TH = AH.l.define({
      combine: HH => (0, AH.U)(HH, {
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
        positionInfo: VH,
        filterStrict: !1,
        compareCompletions: (HH, BH) => (HH.sortText || HH.label).localeCompare(BH.sortText || BH.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (HH, BH) => HH && BH,
        closeOnBlur: (HH, BH) => HH && BH,
        icons: (HH, BH) => HH && BH,
        tooltipClass: (HH, BH) => LH => UH(HH(LH), BH(LH)),
        optionClass: (HH, BH) => LH => UH(HH(LH), BH(LH)),
        addToOptions: (HH, BH) => HH.concat(BH),
        filterStrict: (HH, BH) => HH || BH
      })
    });

    function UH(HH, BH) {
      return HH ? BH ? HH + " " + BH : HH : BH
    }

    function VH(HH, BH, LH, AH, SH, hH) {
      let tH, zH, CH = HH.textDirection == rH.g.RTL,
        EH = CH,
        XH = !1,
        GH = "top",
        YH = BH.left - SH.left,
        uH = SH.right - BH.right,
        QH = AH.right - AH.left,
        WH = AH.bottom - AH.top;
      if (EH && YH < Math.min(QH, uH) ? EH = !1 : !EH && uH < Math.min(QH, YH) && (EH = !0), QH <= (EH ? YH : uH)) tH = Math.max(SH.top, Math.min(LH.top, SH.bottom - WH)) - BH.top, zH = Math.min(400, EH ? YH : uH);
      else {
        XH = !0, zH = Math.min(400, (CH ? BH.right : SH.right - BH.left) - 30);
        let HH = SH.bottom - BH.bottom;
        HH >= WH || HH > BH.top ? tH = LH.bottom - BH.top : (GH = "bottom", tH = BH.bottom - LH.top)
      }
      return {
        style: `${GH}: ${tH/((BH.bottom-BH.top)/hH.offsetHeight)}px; max-width: ${zH/((BH.right-BH.left)/hH.offsetWidth)}px`,
        class: "cm-completionInfo-" + (XH ? CH ? "left-narrow" : "right-narrow" : EH ? "left" : "right")
      }
    }
    const OH = AH.B.define();

    function bH(HH, BH, LH) {
      if (HH <= LH) return {
        from: 0,
        to: HH
      };
      if (BH < 0 && (BH = 0), BH <= HH >> 1) {
        let HH = Math.floor(BH / LH);
        return {
          from: HH * LH,
          to: (HH + 1) * LH
        }
      }
      let AH = Math.floor((HH - BH) / LH);
      return {
        from: HH - (AH + 1) * LH,
        to: HH - AH * LH
      }
    }
    class kH {
      constructor(HH, BH, LH) {
        this.view = HH, this.stateField = BH, this.applyCompletion = LH, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: HH => this.placeInfo(HH),
          key: this
        }, this.space = null, this.currentClass = "";
        let AH = HH.state.field(BH),
          {
            options: rH,
            selected: SH
          } = AH.open,
          hH = HH.state.facet(TH);
        this.optionContent = function(HH) {
          let BH = HH.addToOptions.slice();
          return HH.icons && BH.push({
            render(HH) {
              let BH = document.createElement("div");
              return BH.classList.add("cm-completionIcon"), HH.type && BH.classList.add(...HH.type.split(/\s+/g).map((HH => "cm-completionIcon-" + HH))), BH.setAttribute("aria-hidden", "true"), BH
            },
            position: 20
          }), BH.push({
            render(HH, BH, LH, AH) {
              let rH = document.createElement("span");
              rH.className = "cm-completionLabel";
              let SH = HH.displayLabel || HH.label,
                hH = 0;
              for (let tH = 0; tH < AH.length;) {
                let HH = AH[tH++],
                  BH = AH[tH++];
                HH > hH && rH.appendChild(document.createTextNode(SH.slice(hH, HH)));
                let LH = rH.appendChild(document.createElement("span"));
                LH.appendChild(document.createTextNode(SH.slice(HH, BH))), LH.className = "cm-completionMatchedText", hH = BH
              }
              return hH < SH.length && rH.appendChild(document.createTextNode(SH.slice(hH))), rH
            },
            position: 50
          }, {
            render(HH) {
              if (!HH.detail) return null;
              let BH = document.createElement("span");
              return BH.className = "cm-completionDetail", BH.textContent = HH.detail, BH
            },
            position: 80
          }), BH.sort(((HH, BH) => HH.position - BH.position)).map((HH => HH.render))
        }(hH), this.optionClass = hH.optionClass, this.tooltipClass = hH.tooltipClass, this.range = bH(rH.length, SH, hH.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(HH.state), this.dom.addEventListener("mousedown", (LH => {
          let {
            options: AH
          } = HH.state.field(BH).open;
          for (let BH, rH = LH.target; rH && rH != this.dom; rH = rH.parentNode)
            if ("LI" == rH.nodeName && (BH = /-(\d+)$/.exec(rH.id)) && +BH[1] < AH.length) return this.applyCompletion(HH, AH[+BH[1]]), void LH.preventDefault();
          if (LH.target == this.list) {
            let BH = this.list.classList.contains("cm-completionListIncompleteTop") && LH.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && LH.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != BH && (HH.dispatch({
              effects: OH.of(BH)
            }), LH.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (BH => {
          let LH = HH.state.field(this.stateField, !1);
          LH && LH.tooltip && HH.state.facet(TH).closeOnBlur && BH.relatedTarget != HH.contentDOM && HH.dispatch({
            effects: xH.of(null)
          })
        })), this.showOptions(rH, AH.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(HH, BH) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(HH, BH, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(HH) {
        var BH;
        let LH = HH.state.field(this.stateField),
          AH = HH.startState.field(this.stateField);
        if (this.updateTooltipClass(HH.state), LH != AH) {
          let {
            options: rH,
            selected: SH,
            disabled: hH
          } = LH.open;
          AH.open && AH.open.options == rH || (this.range = bH(rH.length, SH, HH.state.facet(TH).maxRenderedOptions), this.showOptions(rH, LH.id)), this.updateSel(), hH != (null === (BH = AH.open) || void 0 === BH ? void 0 : BH.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!hH)
        }
      }
      updateTooltipClass(HH) {
        let BH = this.tooltipClass(HH);
        if (BH != this.currentClass) {
          for (let HH of this.currentClass.split(" ")) HH && this.dom.classList.remove(HH);
          for (let HH of BH.split(" ")) HH && this.dom.classList.add(HH);
          this.currentClass = BH
        }
      }
      positioned(HH) {
        this.space = HH, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let HH = this.view.state.field(this.stateField),
          BH = HH.open;
        (BH.selected > -1 && BH.selected < this.range.from || BH.selected >= this.range.to) && (this.range = bH(BH.options.length, BH.selected, this.view.state.facet(TH).maxRenderedOptions), this.showOptions(BH.options, HH.id));
        let LH = this.updateSelectedOption(BH.selected);
        if (LH) {
          this.destroyInfo();
          let {
            completion: AH
          } = BH.options[BH.selected], {
            info: SH
          } = AH;
          if (!SH) return;
          let hH = "string" === typeof SH ? document.createTextNode(SH) : SH(AH);
          if (!hH) return;
          "then" in hH ? hH.then((BH => {
            BH && this.view.state.field(this.stateField, !1) == HH && this.addInfoPane(BH, AH)
          })).catch((HH => (0, rH.$)(this.view.state, HH, "completion info"))) : (this.addInfoPane(hH, AH), LH.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(HH, BH) {
        this.destroyInfo();
        let LH = this.info = document.createElement("div");
        if (LH.className = "cm-tooltip cm-completionInfo", LH.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != HH.nodeType) LH.appendChild(HH), this.infoDestroy = null;
        else {
          let {
            dom: BH,
            destroy: AH
          } = HH;
          LH.appendChild(BH), this.infoDestroy = AH || null
        }
        this.dom.appendChild(LH), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(HH) {
        let BH = null;
        for (let LH = this.list.firstChild, AH = this.range.from; LH; LH = LH.nextSibling, AH++) "LI" == LH.nodeName && LH.id ? AH == HH ? LH.hasAttribute("aria-selected") || (LH.setAttribute("aria-selected", "true"), BH = LH) : LH.hasAttribute("aria-selected") && (LH.removeAttribute("aria-selected"), LH.removeAttribute("aria-describedby")) : AH--;
        return BH && function(HH, BH) {
          let LH = HH.getBoundingClientRect(),
            AH = BH.getBoundingClientRect(),
            rH = LH.height / HH.offsetHeight;
          AH.top < LH.top ? HH.scrollTop -= (LH.top - AH.top) / rH : AH.bottom > LH.bottom && (HH.scrollTop += (AH.bottom - LH.bottom) / rH)
        }(this.list, BH), BH
      }
      measureInfo() {
        let HH = this.dom.querySelector("[aria-selected]");
        if (!HH || !this.info) return null;
        let BH = this.dom.getBoundingClientRect(),
          LH = this.info.getBoundingClientRect(),
          AH = HH.getBoundingClientRect(),
          rH = this.space;
        if (!rH) {
          let HH = this.dom.ownerDocument.documentElement;
          rH = {
            left: 0,
            top: 0,
            right: HH.clientWidth,
            bottom: HH.clientHeight
          }
        }
        return AH.top > Math.min(rH.bottom, BH.bottom) - 10 || AH.bottom < Math.max(rH.top, BH.top) + 10 ? null : this.view.state.facet(TH).positionInfo(this.view, BH, AH, LH, rH, this.dom)
      }
      placeInfo(HH) {
        this.info && (HH ? (HH.style && (this.info.style.cssText = HH.style), this.info.className = "cm-tooltip cm-completionInfo " + (HH.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(HH, BH, LH) {
        const AH = document.createElement("ul");
        AH.id = BH, AH.setAttribute("role", "listbox"), AH.setAttribute("aria-expanded", "true"), AH.setAttribute("aria-label", this.view.state.phrase("Completions")), AH.addEventListener("mousedown", (HH => {
          HH.target == AH && HH.preventDefault()
        }));
        let rH = null;
        for (let SH = LH.from; SH < LH.to; SH++) {
          let {
            completion: hH,
            match: tH
          } = HH[SH], {
            section: zH
          } = hH;
          if (zH) {
            let HH = "string" == typeof zH ? zH : zH.name;
            if (HH != rH && (SH > LH.from || 0 == LH.from))
              if (rH = HH, "string" != typeof zH && zH.header) AH.appendChild(zH.header(zH));
              else {
                AH.appendChild(document.createElement("completion-section")).textContent = HH
              }
          }
          const CH = AH.appendChild(document.createElement("li"));
          CH.id = BH + "-" + SH, CH.setAttribute("role", "option");
          let EH = this.optionClass(hH);
          EH && (CH.className = EH);
          for (let HH of this.optionContent) {
            let BH = HH(hH, this.view.state, this.view, tH);
            BH && CH.appendChild(BH)
          }
        }
        return LH.from && AH.classList.add("cm-completionListIncompleteTop"), LH.to < HH.length && AH.classList.add("cm-completionListIncompleteBottom"), AH
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function mH(HH, BH) {
      return LH => new kH(LH, HH, BH)
    }

    function oH(HH) {
      return 100 * (HH.boost || 0) + (HH.apply ? 10 : 0) + (HH.info ? 5 : 0) + (HH.type ? 1 : 0)
    }
    class IH {
      constructor(HH, BH, LH, AH, rH, SH) {
        this.options = HH, this.attrs = BH, this.tooltip = LH, this.timestamp = AH, this.selected = rH, this.disabled = SH
      }
      setSelected(HH, BH) {
        return HH == this.selected || HH >= this.options.length ? this : new IH(this.options, cH(BH, HH), this.tooltip, this.timestamp, HH, this.disabled)
      }
      static build(HH, BH, LH, AH, rH, SH) {
        if (AH && !SH && HH.some((HH => HH.isPending))) return AH.setDisabled();
        let hH = function(HH, BH) {
          let LH = [],
            AH = null,
            rH = null,
            SH = HH => {
              LH.push(HH);
              let {
                section: BH
              } = HH.completion;
              if (BH) {
                AH || (AH = []);
                let HH = "string" == typeof BH ? BH : BH.name;
                AH.some((BH => BH.name == HH)) || AH.push("string" == typeof BH ? {
                  name: HH
                } : BH)
              }
            },
            hH = BH.facet(TH);
          for (let XH of HH)
            if (XH.hasResult()) {
              let HH = XH.result.getMatch;
              if (!1 === XH.result.filter)
                for (let BH of XH.result.options) SH(new EH(BH, XH.source, HH ? HH(BH) : [], 1e9 - LH.length));
              else {
                let LH, AH = BH.sliceDoc(XH.from, XH.to),
                  tH = hH.filterStrict ? new PH(AH) : new vH(AH);
                for (let BH of XH.result.options)
                  if (LH = tH.match(BH.label)) {
                    let AH = BH.displayLabel ? HH ? HH(BH, LH.matched) : [] : LH.matched,
                      hH = LH.score + (BH.boost || 0);
                    if (SH(new EH(BH, XH.source, AH, hH)), "object" == typeof BH.section && "dynamic" === BH.section.rank) {
                      let {
                        name: HH
                      } = BH.section;
                      rH || (rH = Object.create(null)), rH[HH] = Math.max(hH, rH[HH] || -1e9)
                    }
                  }
              }
            } if (AH) {
            let HH = Object.create(null),
              BH = 0,
              SH = (HH, BH) => ("dynamic" === HH.rank && "dynamic" === BH.rank ? rH[BH.name] - rH[HH.name] : 0) || ("number" == typeof HH.rank ? HH.rank : 1e9) - ("number" == typeof BH.rank ? BH.rank : 1e9) || (HH.name < BH.name ? -1 : 1);
            for (let LH of AH.sort(SH)) BH -= 1e5, HH[LH.name] = BH;
            for (let AH of LH) {
              let {
                section: BH
              } = AH.completion;
              BH && (AH.score += HH["string" == typeof BH ? BH : BH.name])
            }
          }
          let tH = [],
            zH = null,
            CH = hH.compareCompletions;
          for (let EH of LH.sort(((HH, BH) => BH.score - HH.score || CH(HH.completion, BH.completion)))) {
            let HH = EH.completion;
            !zH || zH.label != HH.label || zH.detail != HH.detail || null != zH.type && null != HH.type && zH.type != HH.type || zH.apply != HH.apply || zH.boost != HH.boost ? tH.push(EH) : oH(EH.completion) > oH(zH) && (tH[tH.length - 1] = EH), zH = EH.completion
          }
          return tH
        }(HH, BH);
        if (!hH.length) return AH && HH.some((HH => HH.isPending)) ? AH.setDisabled() : null;
        let tH = BH.facet(TH).selectOnOpen ? 0 : -1;
        if (AH && AH.selected != tH && -1 != AH.selected) {
          let HH = AH.options[AH.selected].completion;
          for (let BH = 0; BH < hH.length; BH++)
            if (hH[BH].completion == HH) {
              tH = BH;
              break
            }
        }
        return new IH(hH, cH(LH, tH), {
          pos: HH.reduce(((HH, BH) => BH.hasResult() ? Math.min(HH, BH.from) : HH), 1e8),
          create: FH,
          above: rH.aboveCursor
        }, AH ? AH.timestamp : Date.now(), tH, !1)
      }
      map(HH) {
        return new IH(this.options, this.attrs, {
          ...this.tooltip,
          pos: HH.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new IH(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class fH {
      constructor(HH, BH, LH) {
        this.active = HH, this.id = BH, this.open = LH
      }
      static start() {
        return new fH(eH, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(HH) {
        let {
          state: BH
        } = HH, LH = BH.facet(TH), AH = (LH.override || BH.languageDataAt("autocomplete", XH(BH)).map(WH)).map((BH => (this.active.find((HH => HH.source == BH)) || new gH(BH, this.active.some((HH => 0 != HH.state)) ? 1 : 0)).update(HH, LH)));
        AH.length == this.active.length && AH.every(((HH, BH) => HH == this.active[BH])) && (AH = this.active);
        let rH = this.open,
          SH = HH.effects.some((HH => HH.is(RH)));
        rH && HH.docChanged && (rH = rH.map(HH.changes)), HH.selection || AH.some((BH => BH.hasResult() && HH.changes.touchesRange(BH.from, BH.to))) || ! function(HH, BH) {
          if (HH == BH) return !0;
          for (let LH = 0, AH = 0;;) {
            for (; LH < HH.length && !HH[LH].hasResult();) LH++;
            for (; AH < BH.length && !BH[AH].hasResult();) AH++;
            let rH = LH == HH.length,
              SH = AH == BH.length;
            if (rH || SH) return rH == SH;
            if (HH[LH++].result != BH[AH++].result) return !1
          }
        }(AH, this.active) || SH ? rH = IH.build(AH, BH, this.id, rH, LH, SH) : rH && rH.disabled && !AH.some((HH => HH.isPending)) && (rH = null), !rH && AH.every((HH => !HH.isPending)) && AH.some((HH => HH.hasResult())) && (AH = AH.map((HH => HH.hasResult() ? new gH(HH.source, 0) : HH)));
        for (let hH of HH.effects) hH.is(OH) && (rH = rH && rH.setSelected(hH.value, this.id));
        return AH == this.active && rH == this.open ? this : new fH(AH, this.id, rH)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? lH : KH
      }
    }
    const lH = {
        "aria-autocomplete": "list"
      },
      KH = {};

    function cH(HH, BH) {
      let LH = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": HH
      };
      return BH > -1 && (LH["aria-activedescendant"] = HH + "-" + BH), LH
    }
    const eH = [];

    function qH(HH, BH) {
      if (HH.isUserEvent("input.complete")) {
        let LH = HH.annotation(YH);
        if (LH && BH.activateOnCompletion(LH)) return 12
      }
      let LH = HH.isUserEvent("input.type");
      return LH && BH.activateOnTyping ? 5 : LH ? 1 : HH.isUserEvent("delete.backward") ? 2 : HH.selection ? 8 : HH.docChanged ? 16 : 0
    }
    class gH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = HH, this.state = BH, this.explicit = LH
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(HH, BH) {
        let LH = qH(HH, BH),
          AH = this;
        (8 & LH || 16 & LH && this.touches(HH)) && (AH = new gH(AH.source, 0)), 4 & LH && 0 == AH.state && (AH = new gH(this.source, 1)), AH = AH.updateFor(HH, LH);
        for (let rH of HH.effects)
          if (rH.is(MH)) AH = new gH(AH.source, 1, rH.value);
          else if (rH.is(xH)) AH = new gH(AH.source, 0);
        else if (rH.is(RH))
          for (let HH of rH.value) HH.source == AH.source && (AH = HH);
        return AH
      }
      updateFor(HH, BH) {
        return this.map(HH.changes)
      }
      map(HH) {
        return this
      }
      touches(HH) {
        return HH.changes.touchesRange(XH(HH.state))
      }
    }
    class NH extends gH {
      constructor(HH, BH, LH, AH, rH, SH) {
        super(HH, 3, BH), this.limit = LH, this.result = AH, this.from = rH, this.to = SH
      }
      hasResult() {
        return !0
      }
      updateFor(HH, BH) {
        var LH;
        if (!(3 & BH)) return this.map(HH.changes);
        let AH = this.result;
        AH.map && !HH.changes.empty && (AH = AH.map(AH, HH.changes));
        let rH = HH.changes.mapPos(this.from),
          SH = HH.changes.mapPos(this.to, 1),
          tH = XH(HH.state);
        if (tH > SH || !AH || 2 & BH && (XH(HH.startState) == this.from || tH < this.limit)) return new gH(this.source, 4 & BH ? 1 : 0);
        let zH = HH.changes.mapPos(this.limit);
        return function(HH, BH, LH, AH) {
          if (!HH) return !1;
          let rH = BH.sliceDoc(LH, AH);
          return "function" == typeof HH ? HH(rH, LH, AH, BH) : GH(HH, !0).test(rH)
        }(AH.validFor, HH.state, rH, SH) ? new NH(this.source, this.explicit, zH, AH, rH, SH) : AH.update && (AH = AH.update(AH, rH, SH, new hH(HH.state, tH, !1))) ? new NH(this.source, this.explicit, zH, AH, AH.from, null !== (LH = AH.to) && void 0 !== LH ? LH : XH(HH.state)) : new gH(this.source, 1, this.explicit)
      }
      map(HH) {
        if (HH.empty) return this;
        return (this.result.map ? this.result.map(this.result, HH) : this.result) ? new NH(this.source, this.explicit, HH.mapPos(this.limit), this.result, HH.mapPos(this.from), HH.mapPos(this.to, 1)) : new gH(this.source, 0)
      }
      touches(HH) {
        return HH.changes.touchesRange(this.from, this.to)
      }
    }
    const RH = AH.B.define({
        map: (HH, BH) => HH.map((HH => HH.map(BH)))
      }),
      jH = AH.E.define({
        create: () => fH.start(),
        update: (HH, BH) => HH.update(BH),
        provide: HH => [rH.pb.from(HH, (HH => HH.tooltip)), rH.h.contentAttributes.from(HH, (HH => HH.attrs))]
      });

    function nH(HH, BH) {
      const LH = BH.completion.apply || BH.completion.label;
      let AH = HH.state.field(jH).active.find((HH => HH.source == BH.source));
      return AH instanceof NH && ("string" == typeof LH ? HH.dispatch({
        ...uH(HH.state, LH, AH.from, AH.to),
        annotations: YH.of(BH.completion)
      }) : LH(HH, BH.completion, AH.from, AH.to), !0)
    }
    const FH = mH(jH, nH);

    function DH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return LH => {
        let AH = LH.state.field(jH, !1);
        if (!AH || !AH.open || AH.open.disabled || Date.now() - AH.open.timestamp < LH.state.facet(TH).interactionDelay) return !1;
        let SH, hH = 1;
        "page" == BH && (SH = (0, rH.D)(LH, AH.open.tooltip)) && (hH = Math.max(2, Math.floor(SH.dom.offsetHeight / SH.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: tH
        } = AH.open.options, zH = AH.open.selected > -1 ? AH.open.selected + hH * (HH ? 1 : -1) : HH ? 0 : tH - 1;
        return zH < 0 ? zH = "page" == BH ? 0 : tH - 1 : zH >= tH && (zH = "page" == BH ? tH - 1 : 0), LH.dispatch({
          effects: OH.of(zH)
        }), !0
      }
    }
    const wH = HH => !!HH.state.field(jH, !1) && (HH.dispatch({
      effects: MH.of(!0)
    }), !0);
    class ZH {
      constructor(HH, BH) {
        this.active = HH, this.context = BH, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const dH = rH.p.fromClass(class {
        constructor(HH) {
          this.view = HH, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let BH of HH.state.field(jH).active) BH.isPending && this.startQuery(BH)
        }
        update(HH) {
          let BH = HH.state.field(jH),
            LH = HH.state.facet(TH);
          if (!HH.selectionSet && !HH.docChanged && HH.startState.field(jH) == BH) return;
          let AH = HH.transactions.some((HH => {
            let BH = qH(HH, LH);
            return 8 & BH || (HH.selection || HH.docChanged) && !(3 & BH)
          }));
          for (let tH = 0; tH < this.running.length; tH++) {
            let BH = this.running[tH];
            if (AH || BH.context.abortOnDocChange && HH.docChanged || BH.updates.length + HH.transactions.length > 50 && Date.now() - BH.time > 1e3) {
              for (let HH of BH.context.abortListeners) try {
                HH()
              } catch (hH) {
                (0, rH.$)(this.view.state, hH)
              }
              BH.context.abortListeners = null, this.running.splice(tH--, 1)
            } else BH.updates.push(...HH.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), HH.transactions.some((HH => HH.effects.some((HH => HH.is(MH))))) && (this.pendingStart = !0);
          let SH = this.pendingStart ? 50 : LH.activateOnTypingDelay;
          if (this.debounceUpdate = BH.active.some((HH => HH.isPending && !this.running.some((BH => BH.active.source == HH.source)))) ? setTimeout((() => this.startUpdate()), SH) : -1, 0 != this.composing)
            for (let rH of HH.transactions) rH.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && rH.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: HH
          } = this.view, BH = HH.field(jH);
          for (let LH of BH.active) LH.isPending && !this.running.some((HH => HH.active.source == LH.source)) && this.startQuery(LH);
          this.running.length && BH.open && BH.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(TH).updateSyncTime))
        }
        startQuery(HH) {
          let {
            state: BH
          } = this.view, LH = XH(BH), AH = new hH(BH, LH, HH.explicit, this.view), SH = new ZH(HH, AH);
          this.running.push(SH), Promise.resolve(HH.source(AH)).then((HH => {
            SH.context.aborted || (SH.done = HH || null, this.scheduleAccept())
          }), (HH => {
            this.view.dispatch({
              effects: xH.of(null)
            }), (0, rH.$)(this.view.state, HH)
          }))
        }
        scheduleAccept() {
          this.running.every((HH => void 0 !== HH.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(TH).updateSyncTime))
        }
        accept() {
          var HH;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let BH = [],
            LH = this.view.state.facet(TH),
            AH = this.view.state.field(jH);
          for (let rH = 0; rH < this.running.length; rH++) {
            let SH = this.running[rH];
            if (void 0 === SH.done) continue;
            if (this.running.splice(rH--, 1), SH.done) {
              let AH = XH(SH.updates.length ? SH.updates[0].startState : this.view.state),
                rH = Math.min(AH, SH.done.from + (SH.active.explicit ? 0 : 1)),
                hH = new NH(SH.active.source, SH.active.explicit, rH, SH.done, SH.done.from, null !== (HH = SH.done.to) && void 0 !== HH ? HH : AH);
              for (let HH of SH.updates) hH = hH.update(HH, LH);
              if (hH.hasResult()) {
                BH.push(hH);
                continue
              }
            }
            let hH = AH.active.find((HH => HH.source == SH.active.source));
            if (hH && hH.isPending)
              if (null == SH.done) {
                let HH = new gH(SH.active.source, 0);
                for (let BH of SH.updates) HH = HH.update(BH, LH);
                HH.isPending || BH.push(HH)
              } else this.startQuery(hH)
          }(BH.length || AH.open && AH.open.disabled) && this.view.dispatch({
            effects: RH.of(BH)
          })
        }
      }, {
        eventHandlers: {
          blur(HH) {
            let BH = this.view.state.field(jH, !1);
            if (BH && BH.tooltip && this.view.state.facet(TH).closeOnBlur) {
              let LH = BH.open && (0, rH.D)(this.view, BH.open.tooltip);
              LH && LH.dom.contains(HH.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: xH.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: MH.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      aH = "object" == typeof navigator && /Win/.test(navigator.platform),
      sH = AH.p.highest(rH.h.domEventHandlers({
        keydown(HH, BH) {
          let LH = BH.state.field(jH, !1);
          if (!LH || !LH.open || LH.open.disabled || LH.open.selected < 0 || HH.key.length > 1 || HH.ctrlKey && (!aH || !HH.altKey) || HH.metaKey) return !1;
          let AH = LH.open.options[LH.open.selected],
            rH = LH.active.find((HH => HH.source == AH.source)),
            SH = AH.completion.commitCharacters || rH.result.commitCharacters;
          return SH && SH.indexOf(HH.key) > -1 && nH(BH, AH), !1
        }
      })),
      JH = rH.h.baseTheme({
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
    class iH {
      constructor(HH, BH, LH, AH) {
        this.field = HH, this.line = BH, this.from = LH, this.to = AH
      }
    }
    class pH {
      constructor(HH, BH, LH) {
        this.field = HH, this.from = BH, this.to = LH
      }
      map(HH) {
        let BH = HH.mapPos(this.from, -1, AH.n.TrackDel),
          LH = HH.mapPos(this.to, 1, AH.n.TrackDel);
        return null == BH || null == LH ? null : new pH(this.field, BH, LH)
      }
    }
    class yH {
      constructor(HH, BH) {
        this.lines = HH, this.fieldPositions = BH
      }
      instantiate(HH, BH) {
        let LH = [],
          AH = [BH],
          rH = HH.doc.lineAt(BH),
          hH = /^\s*/.exec(rH.text)[0];
        for (let zH of this.lines) {
          if (LH.length) {
            let LH = hH,
              rH = /^\t*/.exec(zH)[0].length;
            for (let BH = 0; BH < rH; BH++) LH += HH.facet(SH.gb);
            AH.push(BH + LH.length - rH), zH = LH + zH.slice(rH)
          }
          LH.push(zH), BH += zH.length + 1
        }
        let tH = this.fieldPositions.map((HH => new pH(HH.field, AH[HH.line] + HH.from, AH[HH.line] + HH.to)));
        return {
          text: LH,
          rW: tH
        }
      }
      static parse(HH) {
        let BH, LH = [],
          AH = [],
          rH = [];
        for (let SH of HH.split(/\r\n?|\n/)) {
          for (; BH = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(SH);) {
            let HH = BH[1] ? +BH[1] : null,
              hH = BH[2] || BH[3] || "",
              tH = -1,
              zH = hH.replace(/\\[{}]/g, (HH => HH[1]));
            for (let BH = 0; BH < LH.length; BH++)(null != HH ? LH[BH].seq == HH : zH && LH[BH].name == zH) && (tH = BH);
            if (tH < 0) {
              let BH = 0;
              for (; BH < LH.length && (null == HH || null != LH[BH].seq && LH[BH].seq < HH);) BH++;
              LH.splice(BH, 0, {
                seq: HH,
                name: zH
              }), tH = BH;
              for (let HH of rH) HH.field >= tH && HH.field++
            }
            for (let LH of rH)
              if (LH.line == AH.length && LH.from > BH.index) {
                let HH = BH[2] ? 3 + (BH[1] || "").length : 2;
                LH.from -= HH, LH.to -= HH
              } rH.push(new iH(tH, AH.length, BH.index, BH.index + zH.length)), SH = SH.slice(0, BH.index) + hH + SH.slice(BH.index + BH[0].length)
          }
          SH = SH.replace(/\\([{}])/g, ((HH, BH, LH) => {
            for (let SH of rH) SH.line == AH.length && SH.from > LH && (SH.from--, SH.to--);
            return BH
          })), AH.push(SH)
        }
        return new yH(AH, rH)
      }
    }
    let HB = rH.e.widget({
        widget: new class extends rH.r {
          toDOM() {
            let HH = document.createElement("span");
            return HH.className = "cm-snippetFieldPosition", HH
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      BB = rH.e.mark({
        class: "cm-snippetField"
      });
    class LB {
      constructor(HH, BH) {
        this.rW = HH, this.active = BH, this.deco = rH.e.set(HH.map((HH => (HH.from == HH.to ? HB : BB).range(HH.from, HH.to))), !0)
      }
      map(HH) {
        let BH = [];
        for (let LH of this.rW) {
          let AH = LH.map(HH);
          if (!AH) return null;
          BH.push(AH)
        }
        return new LB(BH, this.active)
      }
      selectionInsideField(HH) {
        return HH.rW.every((HH => this.rW.some((BH => BH.field == this.active && BH.from <= HH.from && BH.to >= HH.to))))
      }
    }
    const AB = AH.B.define({
        map: (HH, BH) => HH && HH.map(BH)
      }),
      rB = AH.B.define(),
      SB = AH.E.define({
        create: () => null,
        update(HH, BH) {
          for (let LH of BH.effects) {
            if (LH.is(AB)) return LH.value;
            if (LH.is(rB) && HH) return new LB(HH.rW, LH.value)
          }
          return HH && BH.docChanged && (HH = HH.map(BH.changes)), HH && BH.selection && !HH.selectionInsideField(BH.selection) && (HH = null), HH
        },
        provide: HH => rH.h.Gr.from(HH, (HH => HH ? HH.deco : rH.e.none))
      });

    function hB(HH, BH) {
      return AH.i.create(HH.filter((HH => HH.field == BH)).map((HH => AH.i.range(HH.from, HH.to))))
    }

    function tB(HH) {
      let BH = yH.parse(HH);
      return (HH, LH, rH, SH) => {
        let {
          text: hH,
          rW: tH
        } = BH.instantiate(HH.state, rH), {
          main: zH
        } = HH.state.selection, CH = {
          changes: {
            from: rH,
            to: SH == zH.from ? zH.to : SH,
            insert: AH.F.of(hH)
          },
          scrollIntoView: !0,
          annotations: LH ? [YH.of(LH), AH.J.userEvent.of("input.complete")] : void 0
        };
        if (tH.length && (CH.selection = hB(tH, 0)), tH.some((HH => HH.field > 0))) {
          let BH = new LB(tH, 0),
            LH = CH.effects = [AB.of(BH)];
          void 0 === HH.state.field(SB, !1) && LH.push(AH.B.appendConfig.of([SB, XB, YB, JH]))
        }
        HH.dispatch(HH.state.update(CH))
      }
    }

    function zB(HH) {
      return BH => {
        let {
          state: LH,
          dispatch: AH
        } = BH, rH = LH.field(SB, !1);
        if (!rH || HH < 0 && 0 == rH.active) return !1;
        let SH = rH.active + HH,
          hH = HH > 0 && !rH.rW.some((BH => BH.field == SH + HH));
        return AH(LH.update({
          selection: hB(rH.rW, SH),
          effects: AB.of(hH ? null : new LB(rH.rW, SH)),
          scrollIntoView: !0
        })), !0
      }
    }
    const CB = [{
        key: "Tab",
        run: zB(1),
        shift: zB(-1)
      }, {
        key: "Escape",
        run: HH => {
          let {
            state: BH,
            dispatch: LH
          } = HH;
          return !!BH.field(SB, !1) && (LH(BH.update({
            effects: AB.of(null)
          })), !0)
        }
      }],
      EB = AH.l.define({
        combine: HH => HH.length ? HH[0] : CB
      }),
      XB = AH.p.highest(rH.Y.compute([EB], (HH => HH.facet(EB))));

    function GB(HH, BH) {
      return {
        ...BH,
        apply: tB(HH)
      }
    }
    const YB = rH.h.domEventHandlers({
      mousedown(HH, BH) {
        let LH, AH = BH.state.field(SB, !1);
        if (!AH || null == (LH = BH.posAtCoords({
            x: HH.clientX,
            y: HH.clientY
          }))) return !1;
        let rH = AH.rW.find((HH => HH.from <= LH && HH.to >= LH));
        return !(!rH || rH.field == AH.active) && (BH.dispatch({
          selection: hB(AH.rW, rH.field),
          effects: AB.of(AH.rW.some((HH => HH.field > rH.field)) ? new LB(AH.rW, rH.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const uB = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      QB = AH.B.define({
        map(HH, BH) {
          let LH = BH.mapPos(HH, -1, AH.n.TrackAfter);
          return null == LH ? void 0 : LH
        }
      }),
      WB = new class extends AH.A {};
    WB.startSide = 1, WB.endSide = -1;
    const MB = AH.E.define({
      create: () => AH.x.empty,
      update(HH, BH) {
        if (HH = HH.map(BH.changes), BH.selection) {
          let LH = BH.state.doc.lineAt(BH.selection.main.head);
          HH = HH.update({
            filter: HH => HH >= LH.from && HH <= LH.to
          })
        }
        for (let LH of BH.effects) LH.is(QB) && (HH = HH.update({
          add: [WB.range(LH.value, LH.value + 1)]
        }));
        return HH
      }
    });

    function xB() {
      return [VB, MB]
    }
    const vB = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function PB(HH) {
      for (let BH = 0; BH < 16; BH += 2)
        if (vB.charCodeAt(BH) == HH) return vB.charAt(BH + 1);
      return (0, AH.hb)(HH < 128 ? HH : HH + 1)
    }

    function TB(HH, BH) {
      return HH.languageDataAt("closeBrackets", BH)[0] || uB
    }
    const UB = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      VB = rH.h.inputHandler.of(((HH, BH, LH, rH) => {
        if ((UB ? HH.composing : HH.compositionStarted) || HH.state.readOnly) return !1;
        let SH = HH.state.selection.main;
        if (rH.length > 2 || 2 == rH.length && 1 == (0, AH.Q)((0, AH.N)(rH, 0)) || BH != SH.from || LH != SH.to) return !1;
        let hH = function(HH, BH) {
          let LH = TB(HH, HH.selection.main.head),
            rH = LH.brackets || uB.brackets;
          for (let SH of rH) {
            let hH = PB((0, AH.N)(SH, 0));
            if (BH == SH) return hH == SH ? IB(HH, SH, rH.indexOf(SH + SH + SH) > -1, LH) : mB(HH, SH, hH, LH.before || uB.before);
            if (BH == hH && bB(HH, HH.selection.main.from)) return oB(HH, SH, hH)
          }
          return null
        }(HH.state, rH);
        return !!hH && (HH.dispatch(hH), !0)
      })),
      OB = [{
        key: "Backspace",
        run: HH => {
          let {
            state: BH,
            dispatch: LH
          } = HH;
          if (BH.readOnly) return !1;
          let rH = TB(BH, BH.selection.main.head).brackets || uB.brackets,
            SH = null,
            hH = BH.changeByRange((HH => {
              if (HH.empty) {
                let LH = function(HH, BH) {
                  let LH = HH.sliceString(BH - 2, BH);
                  return (0, AH.Q)((0, AH.N)(LH, 0)) == LH.length ? LH : LH.slice(1)
                }(BH.doc, HH.head);
                for (let SH of rH)
                  if (SH == LH && kB(BH.doc, HH.head) == PB((0, AH.N)(SH, 0))) return {
                    changes: {
                      from: HH.head - SH.length,
                      to: HH.head + SH.length
                    },
                    range: AH.i.cursor(HH.head - SH.length)
                  }
              }
              return {
                range: SH = HH
              }
            }));
          return SH || LH(BH.update(hH, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !SH
        }
      }];

    function bB(HH, BH) {
      let LH = !1;
      return HH.field(MB).between(0, HH.doc.length, (HH => {
        HH == BH && (LH = !0)
      })), LH
    }

    function kB(HH, BH) {
      let LH = HH.sliceString(BH, BH + 2);
      return LH.slice(0, (0, AH.Q)((0, AH.N)(LH, 0)))
    }

    function mB(HH, BH, LH, rH) {
      let SH = null,
        hH = HH.changeByRange((hH => {
          if (!hH.empty) return {
            changes: [{
              insert: BH,
              from: hH.from
            }, {
              insert: LH,
              from: hH.to
            }],
            effects: QB.of(hH.to + BH.length),
            range: AH.i.range(hH.anchor + BH.length, hH.head + BH.length)
          };
          let tH = kB(HH.doc, hH.head);
          return !tH || /\s/.test(tH) || rH.indexOf(tH) > -1 ? {
            changes: {
              insert: BH + LH,
              from: hH.head
            },
            effects: QB.of(hH.head + BH.length),
            range: AH.i.cursor(hH.head + BH.length)
          } : {
            range: SH = hH
          }
        }));
      return SH ? null : HH.update(hH, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function oB(HH, BH, LH) {
      let rH = null,
        SH = HH.changeByRange((BH => BH.empty && kB(HH.doc, BH.head) == LH ? {
          changes: {
            from: BH.head,
            to: BH.head + LH.length,
            insert: LH
          },
          range: AH.i.cursor(BH.head + LH.length)
        } : rH = {
          range: BH
        }));
      return rH ? null : HH.update(SH, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function IB(HH, BH, LH, rH) {
      let hH = rH.stringPrefixes || uB.stringPrefixes,
        tH = null,
        zH = HH.changeByRange((rH => {
          if (!rH.empty) return {
            changes: [{
              insert: BH,
              from: rH.from
            }, {
              insert: BH,
              from: rH.to
            }],
            effects: QB.of(rH.to + BH.length),
            range: AH.i.range(rH.anchor + BH.length, rH.head + BH.length)
          };
          let zH, CH = rH.head,
            EH = kB(HH.doc, CH);
          if (EH == BH) {
            if (fB(HH, CH)) return {
              changes: {
                insert: BH + BH,
                from: CH
              },
              effects: QB.of(CH + BH.length),
              range: AH.i.cursor(CH + BH.length)
            };
            if (bB(HH, CH)) {
              let rH = LH && HH.sliceDoc(CH, CH + 3 * BH.length) == BH + BH + BH ? BH + BH + BH : BH;
              return {
                changes: {
                  from: CH,
                  to: CH + rH.length,
                  insert: rH
                },
                range: AH.i.cursor(CH + rH.length)
              }
            }
          } else {
            if (LH && HH.sliceDoc(CH - 2 * BH.length, CH) == BH + BH && (zH = lB(HH, CH - 2 * BH.length, hH)) > -1 && fB(HH, zH)) return {
              changes: {
                insert: BH + BH + BH + BH,
                from: CH
              },
              effects: QB.of(CH + BH.length),
              range: AH.i.cursor(CH + BH.length)
            };
            if (HH.charCategorizer(CH)(EH) != AH.h.Word && lB(HH, CH, hH) > -1 && ! function(HH, BH, LH, AH) {
                let rH = (0, SH.pb)(HH).resolveInner(BH, -1),
                  hH = AH.reduce(((HH, BH) => Math.max(HH, BH.length)), 0);
                for (let SH = 0; SH < 5; SH++) {
                  let SH = HH.sliceDoc(rH.from, Math.min(rH.to, rH.from + LH.length + hH)),
                    tH = SH.indexOf(LH);
                  if (!tH || tH > -1 && AH.indexOf(SH.slice(0, tH)) > -1) {
                    let BH = rH.firstChild;
                    for (; BH && BH.from == rH.from && BH.to - BH.from > LH.length + tH;) {
                      if (HH.sliceDoc(BH.to - LH.length, BH.to) == LH) return !1;
                      BH = BH.firstChild
                    }
                    return !0
                  }
                  let zH = rH.to == BH && rH.parent;
                  if (!zH) break;
                  rH = zH
                }
                return !1
              }(HH, CH, BH, hH)) return {
              changes: {
                insert: BH + BH,
                from: CH
              },
              effects: QB.of(CH + BH.length),
              range: AH.i.cursor(CH + BH.length)
            }
          }
          return {
            range: tH = rH
          }
        }));
      return tH ? null : HH.update(zH, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function fB(HH, BH) {
      let LH = (0, SH.pb)(HH).resolveInner(BH + 1);
      return LH.parent && LH.from == BH
    }

    function lB(HH, BH, LH) {
      let rH = HH.charCategorizer(BH);
      if (rH(HH.sliceDoc(BH - 1, BH)) != AH.h.Word) return BH;
      for (let SH of LH) {
        let LH = BH - SH.length;
        if (HH.sliceDoc(LH, BH) == SH && rH(HH.sliceDoc(LH - 1, LH)) != AH.h.Word) return LH
      }
      return -1
    }

    function KB() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [sH, jH, TH.of(HH), dH, eB, JH]
    }
    const cB = [{
        key: "Ctrl-Space",
        run: wH
      }, {
        mac: "Alt-`",
        run: wH
      }, {
        mac: "Alt-i",
        run: wH
      }, {
        key: "Escape",
        run: HH => {
          let BH = HH.state.field(jH, !1);
          return !(!BH || !BH.active.some((HH => 0 != HH.state))) && (HH.dispatch({
            effects: xH.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: DH(!0)
      }, {
        key: "ArrowUp",
        run: DH(!1)
      }, {
        key: "PageDown",
        run: DH(!0, "page")
      }, {
        key: "PageUp",
        run: DH(!1, "page")
      }, {
        key: "Enter",
        run: HH => {
          let BH = HH.state.field(jH, !1);
          return !(HH.state.readOnly || !BH || !BH.open || BH.open.selected < 0 || BH.open.disabled || Date.now() - BH.open.timestamp < HH.state.facet(TH).interactionDelay) && nH(HH, BH.open.options[BH.open.selected])
        }
      }],
      eB = AH.p.highest(rH.Y.computeN([TH], (HH => HH.facet(TH).defaultKeymap ? [cB] : [])))
  },
  44945: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => CH,
      f: () => GH,
      g: () => EH,
      j: () => XH
    });
    var AH = LH(44818);
    class rH {
      constructor(HH, BH, LH, AH) {
        this.origin = HH, this.changes = BH, this.effects = LH, this.clientID = AH
      }
    }
    class SH {
      constructor(HH, BH) {
        this.version = HH, this.unconfirmed = BH
      }
    }
    const hH = AH.l.define({
        combine(HH) {
          let BH = (0, AH.U)(HH, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: HH => HH
          });
          return null == BH.clientID && (BH.clientID = HH.length && HH[0].generatedID || ""), BH
        }
      }),
      tH = AH.c.define(),
      zH = AH.E.define({
        create: HH => new SH(HH.facet(hH).startVersion, []),
        update(HH, BH) {
          let LH = BH.annotation(tH);
          if (LH) return LH;
          let {
            sharedEffects: AH,
            clientID: zH
          } = BH.startState.facet(hH), CH = AH(BH);
          return CH.length || !BH.changes.empty ? new SH(HH.version, HH.unconfirmed.concat(new rH(BH, BH.changes, CH, zH))) : HH
        }
      });

    function CH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [zH, hH.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, HH))]
    }

    function EH(HH, BH) {
      let {
        version: LH,
        unconfirmed: CH
      } = HH.field(zH), {
        clientID: EH
      } = HH.facet(hH);
      LH += BH.length;
      let XH = [],
        GH = null,
        YH = 0;
      for (let rH of BH) {
        let HH = YH < CH.length ? CH[YH] : null;
        HH && HH.clientID == rH.clientID ? (GH && (GH = GH.map(HH.changes, !0)), XH = AH.B.mapEffects(XH, rH.changes), YH++) : (XH = AH.B.mapEffects(XH, rH.changes), rH.effects && (XH = XH.concat(rH.effects)), GH = GH ? GH.compose(rH.changes) : rH.changes)
      }
      if (YH && (CH = CH.slice(YH)), CH.length && (GH && (CH = CH.map((HH => {
          let BH = HH.changes.map(GH);
          return GH = GH.map(HH.changes, !0), new rH(HH.origin, BH, AH.B.mapEffects(HH.effects, GH), EH)
        }))), XH.length)) {
        let HH = CH.reduce(((HH, BH) => HH.compose(BH.changes)), AH.ChangeSet.empty(CH[0].changes.length));
        XH = AH.B.mapEffects(XH, HH)
      }
      return GH ? HH.update({
        changes: GH,
        effects: XH,
        annotations: [AH.J.addToHistory.of(!1), AH.J.remote.of(!0), tH.of(new SH(LH, CH))],
        filter: !1
      }) : HH.update({
        annotations: [tH.of(new SH(LH, CH))]
      })
    }

    function XH(HH) {
      return HH.field(zH).unconfirmed
    }

    function GH(HH) {
      return HH.field(zH).version
    }
  },
  44853: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => QB
    });
    var AH = LH(44848);
    class rH {
      constructor(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
        let CH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          EH = arguments.length > 10 ? arguments[10] : void 0;
        this.p = HH, this.stack = BH, this.state = LH, this.reducePos = AH, this.pos = rH, this.score = SH, this.buffer = hH, this.bufferBase = tH, this.curContext = zH, this.lookAhead = CH, this.parent = EH
      }
      toString() {
        return `[${this.stack.filter(((HH,BH)=>BH%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          AH = HH.parser.context;
        return new rH(HH, [], BH, LH, LH, 0, [], 0, AH ? new SH(AH, AH.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(HH, BH) {
        this.stack.push(this.state, BH, this.bufferBase + this.buffer.length), this.state = HH
      }
      reduce(HH) {
        var BH;
        let LH = HH >> 19,
          AH = 65535 & HH,
          {
            parser: rH
          } = this.p,
          SH = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          hH = rH.dynamicPrecedence(AH);
        if (hH && (this.score += hH), 0 == LH) return this.pushState(rH.getGoto(this.state, AH, !0), this.reducePos), AH < rH.minRepeatTerm && this.storeNode(AH, this.reducePos, this.reducePos, SH ? 8 : 4, !0), void this.reduceContext(AH, this.reducePos);
        let tH = this.stack.length - 3 * (LH - 1) - (262144 & HH ? 6 : 0),
          zH = tH ? this.stack[tH - 2] : this.p.rW[0].from,
          CH = this.reducePos - zH;
        CH >= 2e3 && !(null === (BH = this.p.parser.nodeSet.types[AH]) || void 0 === BH ? void 0 : BH.isAnonymous) && (zH == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = CH) : this.p.lastBigReductionSize < CH && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = zH, this.p.lastBigReductionSize = CH));
        let EH = tH ? this.stack[tH - 1] : 0,
          XH = this.bufferBase + this.buffer.length - EH;
        if (AH < rH.minRepeatTerm || 131072 & HH) {
          let HH = rH.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(AH, zH, HH, XH + 4, !0)
        }
        if (262144 & HH) this.state = this.stack[tH];
        else {
          let HH = this.stack[tH - 3];
          this.state = rH.getGoto(HH, AH, !0)
        }
        for (; this.stack.length > tH;) this.stack.pop();
        this.reduceContext(AH, zH)
      }
      storeNode(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == HH && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let HH = this,
            AH = this.buffer.length;
          if (0 == AH && HH.parent && (AH = HH.bufferBase - HH.parent.bufferBase, HH = HH.parent), AH > 0 && 0 == HH.buffer[AH - 4] && HH.buffer[AH - 1] > -1) {
            if (BH == LH) return;
            if (HH.buffer[AH - 2] >= BH) return void(HH.buffer[AH - 2] = LH)
          }
        }
        if (rH && this.pos != LH) {
          let rH = this.buffer.length;
          if (rH > 0 && (0 != this.buffer[rH - 4] || this.buffer[rH - 1] < 0)) {
            let HH = !1;
            for (let BH = rH; BH > 0 && this.buffer[BH - 2] > LH; BH -= 4)
              if (this.buffer[BH - 1] >= 0) {
                HH = !0;
                break
              } if (HH)
              for (; rH > 0 && this.buffer[rH - 2] > LH;) this.buffer[rH] = this.buffer[rH - 4], this.buffer[rH + 1] = this.buffer[rH - 3], this.buffer[rH + 2] = this.buffer[rH - 2], this.buffer[rH + 3] = this.buffer[rH - 1], rH -= 4, AH > 4 && (AH -= 4)
          }
          this.buffer[rH] = HH, this.buffer[rH + 1] = BH, this.buffer[rH + 2] = LH, this.buffer[rH + 3] = AH
        } else this.buffer.push(HH, BH, LH, AH)
      }
      shift(HH, BH, LH, AH) {
        if (131072 & HH) this.pushState(65535 & HH, this.pos);
        else if (0 == (262144 & HH)) {
          let rH = HH,
            {
              parser: SH
            } = this.p;
          this.pos = AH;
          let hH = SH.stateFlag(rH, 1);
          !hH && (AH > LH || BH <= SH.maxNode) && (this.reducePos = AH), this.pushState(rH, hH ? LH : Math.min(LH, this.reducePos)), this.shiftContext(BH, LH), BH <= SH.maxNode && this.buffer.push(BH, LH, AH, 4)
        } else this.pos = AH, this.shiftContext(BH, LH), BH <= this.p.parser.maxNode && this.buffer.push(BH, LH, AH, 4)
      }
      apply(HH, BH, LH, AH) {
        65536 & HH ? this.reduce(HH) : this.shift(HH, BH, LH, AH)
      }
      useNode(HH, BH) {
        let LH = this.p.reused.length - 1;
        (LH < 0 || this.p.reused[LH] != HH) && (this.p.reused.push(HH), LH++);
        let AH = this.pos;
        this.reducePos = this.pos = AH + HH.length, this.pushState(BH, AH), this.buffer.push(LH, AH, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, HH, this, this.p.stream.reset(this.pos - HH.length)))
      }
      split() {
        let HH = this,
          BH = HH.buffer.length;
        for (; BH > 0 && HH.buffer[BH - 2] > HH.reducePos;) BH -= 4;
        let LH = HH.buffer.slice(BH),
          AH = HH.bufferBase + BH;
        for (; HH && AH == HH.bufferBase;) HH = HH.parent;
        return new rH(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, LH, AH, this.curContext, this.lookAhead, HH)
      }
      recoverByDelete(HH, BH) {
        let LH = HH <= this.p.parser.maxNode;
        LH && this.storeNode(HH, this.pos, BH, 4), this.storeNode(0, this.pos, BH, LH ? 8 : 4), this.pos = this.reducePos = BH, this.score -= 190
      }
      canShift(HH) {
        for (let BH = new hH(this);;) {
          let LH = this.p.parser.stateSlot(BH.state, 4) || this.p.parser.hasAction(BH.state, HH);
          if (0 == LH) return !1;
          if (0 == (65536 & LH)) return !0;
          BH.reduce(LH)
        }
      }
      recoverByInsert(HH) {
        if (this.stack.length >= 300) return [];
        let BH = this.p.parser.nextStates(this.state);
        if (BH.length > 8 || this.stack.length >= 120) {
          let LH = [];
          for (let AH, rH = 0; rH < BH.length; rH += 2)(AH = BH[rH + 1]) != this.state && this.p.parser.hasAction(AH, HH) && LH.push(BH[rH], AH);
          if (this.stack.length < 120)
            for (let HH = 0; LH.length < 8 && HH < BH.length; HH += 2) {
              let AH = BH[HH + 1];
              LH.some(((HH, BH) => 1 & BH && HH == AH)) || LH.push(BH[HH], AH)
            }
          BH = LH
        }
        let LH = [];
        for (let AH = 0; AH < BH.length && LH.length < 4; AH += 2) {
          let HH = BH[AH + 1];
          if (HH == this.state) continue;
          let rH = this.split();
          rH.pushState(HH, this.pos), rH.storeNode(0, rH.pos, rH.pos, 4, !0), rH.shiftContext(BH[AH], this.pos), rH.reducePos = this.pos, rH.score -= 200, LH.push(rH)
        }
        return LH
      }
      forceReduce() {
        let {
          parser: HH
        } = this.p, BH = HH.stateSlot(this.state, 5);
        if (0 == (65536 & BH)) return !1;
        if (!HH.validAction(this.state, BH)) {
          let LH = BH >> 19,
            AH = 65535 & BH,
            rH = this.stack.length - 3 * LH;
          if (rH < 0 || HH.getGoto(this.stack[rH], AH, !1) < 0) {
            let HH = this.findForcedReduction();
            if (null == HH) return !1;
            BH = HH
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(BH), !0
      }
      findForcedReduction() {
        let {
          parser: HH
        } = this.p, BH = [], LH = (AH, rH) => {
          if (!BH.includes(AH)) return BH.push(AH), HH.allActions(AH, (BH => {
            if (393216 & BH);
            else if (65536 & BH) {
              let LH = (BH >> 19) - rH;
              if (LH > 1) {
                let AH = 65535 & BH,
                  rH = this.stack.length - 3 * LH;
                if (rH >= 0 && HH.getGoto(this.stack[rH], AH, !1) >= 0) return LH << 19 | 65536 | AH
              }
            } else {
              let HH = LH(BH, rH + 1);
              if (null != HH) return HH
            }
          }))
        };
        return LH(this.state, 0)
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
          parser: HH
        } = this.p;
        return 65535 == HH.data[HH.stateSlot(this.state, 1)] && !HH.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(HH) {
        if (this.state != HH.state || this.stack.length != HH.stack.length) return !1;
        for (let BH = 0; BH < this.stack.length; BH += 3)
          if (this.stack[BH] != HH.stack[BH]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(HH) {
        return this.p.parser.dialect.flags[HH]
      }
      shiftContext(HH, BH) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, HH, this, this.p.stream.reset(BH)))
      }
      reduceContext(HH, BH) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, HH, this, this.p.stream.reset(BH)))
      }
      emitContext() {
        let HH = this.buffer.length - 1;
        (HH < 0 || -3 != this.buffer[HH]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let HH = this.buffer.length - 1;
        (HH < 0 || -4 != this.buffer[HH]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(HH) {
        if (HH != this.curContext.context) {
          let BH = new SH(this.curContext.tracker, HH);
          BH.hash != this.curContext.hash && this.emitContext(), this.curContext = BH
        }
      }
      setLookAhead(HH) {
        return !(HH <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = HH, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class SH {
      constructor(HH, BH) {
        this.tracker = HH, this.context = BH, this.hash = HH.strict ? HH.hash(BH) : 0
      }
    }
    class hH {
      constructor(HH) {
        this.start = HH, this.state = HH.state, this.stack = HH.stack, this.base = this.stack.length
      }
      reduce(HH) {
        let BH = 65535 & HH,
          LH = HH >> 19;
        0 == LH ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (LH - 1);
        let AH = this.start.p.parser.getGoto(this.stack[this.base - 3], BH, !0);
        this.state = AH
      }
    }
    class tH {
      constructor(HH, BH, LH) {
        this.stack = HH, this.pos = BH, this.index = LH, this.buffer = HH.buffer, 0 == this.index && this.maybeNext()
      }
      static create(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH.bufferBase + HH.buffer.length;
        return new tH(HH, BH, BH - HH.bufferBase)
      }
      maybeNext() {
        let HH = this.stack.parent;
        null != HH && (this.index = this.stack.bufferBase - HH.bufferBase, this.stack = HH, this.buffer = HH.buffer)
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
        return new tH(this.stack, this.pos, this.index)
      }
    }

    function zH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof HH) return HH;
      let LH = null;
      for (let AH = 0, rH = 0; AH < HH.length;) {
        let SH = 0;
        for (;;) {
          let BH = HH.charCodeAt(AH++),
            LH = !1;
          if (126 == BH) {
            SH = 65535;
            break
          }
          BH >= 92 && BH--, BH >= 34 && BH--;
          let rH = BH - 32;
          if (rH >= 46 && (rH -= 46, LH = !0), SH += rH, LH) break;
          SH *= 46
        }
        LH ? LH[rH++] = SH : LH = new BH(SH)
      }
      return LH
    }
    class CH {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const EH = new CH;
    class XH {
      constructor(HH, BH) {
        this.input = HH, this.rW = BH, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = EH, this.rangeIndex = 0, this.pos = this.chunkPos = BH[0].from, this.range = BH[0], this.end = BH[BH.length - 1].to, this.readNext()
      }
      resolveOffset(HH, BH) {
        let LH = this.range,
          AH = this.rangeIndex,
          rH = this.pos + HH;
        for (; rH < LH.from;) {
          if (!AH) return null;
          let HH = this.rW[--AH];
          rH -= LH.from - HH.to, LH = HH
        }
        for (; BH < 0 ? rH > LH.to : rH >= LH.to;) {
          if (AH == this.rW.length - 1) return null;
          let HH = this.rW[++AH];
          rH += HH.from - LH.to, LH = HH
        }
        return rH
      }
      clipPos(HH) {
        if (HH >= this.range.from && HH < this.range.to) return HH;
        for (let BH of this.rW)
          if (BH.to > HH) return Math.max(HH, BH.from);
        return this.end
      }
      peek(HH) {
        let BH, LH, AH = this.chunkOff + HH;
        if (AH >= 0 && AH < this.chunk.length) BH = this.pos + HH, LH = this.chunk.charCodeAt(AH);
        else {
          let AH = this.resolveOffset(HH, 1);
          if (null == AH) return -1;
          if (BH = AH, BH >= this.chunk2Pos && BH < this.chunk2Pos + this.chunk2.length) LH = this.chunk2.charCodeAt(BH - this.chunk2Pos);
          else {
            let HH = this.rangeIndex,
              AH = this.range;
            for (; AH.to <= BH;) AH = this.rW[++HH];
            this.chunk2 = this.input.chunk(this.chunk2Pos = BH), BH + this.chunk2.length > AH.to && (this.chunk2 = this.chunk2.slice(0, AH.to - BH)), LH = this.chunk2.charCodeAt(0)
          }
        }
        return BH >= this.token.lookAhead && (this.token.lookAhead = BH + 1), LH
      }
      acceptToken(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = BH ? this.resolveOffset(BH, -1) : this.pos;
        if (null == LH || LH < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = HH, this.token.end = LH
      }
      acceptTokenTo(HH, BH) {
        this.token.value = HH, this.token.end = BH
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: HH,
            chunkPos: BH
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = HH, this.chunk2Pos = BH, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let HH = this.input.chunk(this.pos),
            BH = this.pos + HH.length;
          this.chunk = BH > this.range.to ? HH.slice(0, this.range.to - this.pos) : HH, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += HH; this.pos + HH >= this.range.to;) {
          if (this.rangeIndex == this.rW.length - 1) return this.setDone();
          HH -= this.range.to - this.pos, this.range = this.rW[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += HH, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.rW[this.rangeIndex = this.rW.length - 1], this.chunk = "", this.next = -1
      }
      reset(HH, BH) {
        if (BH ? (this.token = BH, BH.start = HH, BH.lookAhead = HH + 1, BH.value = BH.extended = -1) : this.token = EH, this.pos != HH) {
          if (this.pos = HH, HH == this.end) return this.setDone(), this;
          for (; HH < this.range.from;) this.range = this.rW[--this.rangeIndex];
          for (; HH >= this.range.to;) this.range = this.rW[++this.rangeIndex];
          HH >= this.chunkPos && HH < this.chunkPos + this.chunk.length ? this.chunkOff = HH - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(HH, BH) {
        if (HH >= this.chunkPos && BH <= this.chunkPos + this.chunk.length) return this.chunk.slice(HH - this.chunkPos, BH - this.chunkPos);
        if (HH >= this.chunk2Pos && BH <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(HH - this.chunk2Pos, BH - this.chunk2Pos);
        if (HH >= this.range.from && BH <= this.range.to) return this.input.read(HH, BH);
        let LH = "";
        for (let AH of this.rW) {
          if (AH.from >= BH) break;
          AH.to > HH && (LH += this.input.read(Math.max(AH.from, HH), Math.min(AH.to, BH)))
        }
        return LH
      }
    }
    class GH {
      constructor(HH, BH) {
        this.data = HH, this.id = BH
      }
      token(HH, BH) {
        let {
          parser: LH
        } = BH.p;
        QH(this.data, HH, BH, this.id, LH.data, LH.tokenPrecTable)
      }
    }
    GH.prototype.contextual = GH.prototype.fallback = GH.prototype.extend = !1;
    class YH {
      constructor(HH, BH, LH) {
        this.precTable = BH, this.elseToken = LH, this.data = "string" == typeof HH ? zH(HH) : HH
      }
      token(HH, BH) {
        let LH = HH.pos,
          AH = 0;
        for (;;) {
          let LH = HH.next < 0,
            rH = HH.resolveOffset(1, 1);
          if (QH(this.data, HH, BH, 0, this.data, this.precTable), HH.token.value > -1) break;
          if (null == this.elseToken) return;
          if (LH || AH++, null == rH) break;
          HH.reset(rH, HH.token)
        }
        AH && (HH.reset(LH, HH.token), HH.acceptToken(this.elseToken, AH))
      }
    }
    YH.prototype.contextual = GH.prototype.fallback = GH.prototype.extend = !1;
    class uH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = HH, this.contextual = !!BH.contextual, this.fallback = !!BH.fallback, this.extend = !!BH.extend
      }
    }

    function QH(HH, BH, LH, AH, rH, SH) {
      let hH = 0,
        tH = 1 << AH,
        {
          dialect: zH
        } = LH.p.parser;
      HH: for (; 0 != (tH & HH[hH]);) {
        let LH = HH[hH + 1];
        for (let XH = hH + 3; XH < LH; XH += 2)
          if ((HH[XH + 1] & tH) > 0) {
            let LH = HH[XH];
            if (zH.allows(LH) && (-1 == BH.token.value || BH.token.value == LH || MH(LH, BH.token.value, rH, SH))) {
              BH.acceptToken(LH);
              break
            }
          } let AH = BH.next,
          CH = 0,
          EH = HH[hH + 2];
        if (!(BH.next < 0 && EH > CH && 65535 == HH[LH + 3 * EH - 3])) {
          for (; CH < EH;) {
            let rH = CH + EH >> 1,
              SH = LH + rH + (rH << 1),
              tH = HH[SH],
              zH = HH[SH + 1] || 65536;
            if (AH < tH) EH = rH;
            else {
              if (!(AH >= zH)) {
                hH = HH[SH + 2], BH.advance();
                continue HH
              }
              CH = rH + 1
            }
          }
          break
        }
        hH = HH[LH + 3 * EH - 1]
      }
    }

    function WH(HH, BH, LH) {
      for (let AH, rH = BH; 65535 != (AH = HH[rH]); rH++)
        if (AH == LH) return rH - BH;
      return -1
    }

    function MH(HH, BH, LH, AH) {
      let rH = WH(LH, AH, BH);
      return rH < 0 || WH(LH, AH, HH) < rH
    }
    const xH = "undefined" != typeof process && {
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
    let vH = null;

    function PH(HH, BH, LH) {
      let rH = HH.cursor(AH.d.IncludeAnonymous);
      for (rH.moveTo(BH);;)
        if (!(LH < 0 ? rH.childBefore(BH) : rH.childAfter(BH)))
          for (;;) {
            if ((LH < 0 ? rH.to < BH : rH.from > BH) && !rH.type.isError) return LH < 0 ? Math.max(0, Math.min(rH.to - 1, BH - 25)) : Math.min(HH.length, Math.max(rH.from + 1, BH + 25));
            if (LH < 0 ? rH.prevSibling() : rH.nextSibling()) break;
            if (!rH.parent()) return LH < 0 ? 0 : HH.length
          }
    }
    class TH {
      constructor(HH, BH) {
        this.fragments = HH, this.nodeSet = BH, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let HH = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (HH) {
          for (this.safeFrom = HH.openStart ? PH(HH.tree, HH.from + HH.offset, 1) - HH.offset : HH.from, this.safeTo = HH.openEnd ? PH(HH.tree, HH.to + HH.offset, -1) - HH.offset : HH.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(HH.tree), this.start.push(-HH.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(HH) {
        if (HH < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= HH;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let BH = this.trees.length - 1;
          if (BH < 0) return this.nextFragment(), null;
          let LH = this.trees[BH],
            rH = this.index[BH];
          if (rH == LH.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let SH = LH.children[rH],
            hH = this.start[BH] + LH.positions[rH];
          if (hH > HH) return this.nextStart = hH, null;
          if (SH instanceof AH.t) {
            if (hH == HH) {
              if (hH < this.safeFrom) return null;
              let HH = hH + SH.length;
              if (HH <= this.safeTo) {
                let BH = SH.prop(AH.f.lookAhead);
                if (!BH || HH + BH < this.fragment.to) return SH
              }
            }
            this.index[BH]++, hH + SH.length >= Math.max(this.safeFrom, HH) && (this.trees.push(SH), this.start.push(hH), this.index.push(0))
          } else this.index[BH]++, this.nextStart = hH + SH.length
        }
      }
    }
    class UH {
      constructor(HH, BH) {
        this.stream = BH, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = HH.tokenizers.map((HH => new CH))
      }
      getActions(HH) {
        let BH = 0,
          LH = null,
          {
            parser: AH
          } = HH.p,
          {
            tokenizers: rH
          } = AH,
          SH = AH.stateSlot(HH.state, 3),
          hH = HH.curContext ? HH.curContext.hash : 0,
          tH = 0;
        for (let zH = 0; zH < rH.length; zH++) {
          if (0 == (1 << zH & SH)) continue;
          let AH = rH[zH],
            CH = this.tokens[zH];
          if ((!LH || AH.fallback) && ((AH.contextual || CH.start != HH.pos || CH.mask != SH || CH.context != hH) && (this.updateCachedToken(CH, AH, HH), CH.mask = SH, CH.context = hH), CH.lookAhead > CH.end + 25 && (tH = Math.max(CH.lookAhead, tH)), 0 != CH.value)) {
            let rH = BH;
            if (CH.extended > -1 && (BH = this.addActions(HH, CH.extended, CH.end, BH)), BH = this.addActions(HH, CH.value, CH.end, BH), !AH.extend && (LH = CH, BH > rH)) break
          }
        }
        for (; this.actions.length > BH;) this.actions.pop();
        return tH && HH.setLookAhead(tH), LH || HH.pos != this.stream.end || (LH = new CH, LH.value = HH.p.parser.eofTerm, LH.start = LH.end = HH.pos, BH = this.addActions(HH, LH.value, LH.end, BH)), this.mainToken = LH, this.actions
      }
      getMainToken(HH) {
        if (this.mainToken) return this.mainToken;
        let BH = new CH,
          {
            pos: LH,
            p: AH
          } = HH;
        return BH.start = LH, BH.end = Math.min(LH + 1, AH.stream.end), BH.value = LH == AH.stream.end ? AH.parser.eofTerm : 0, BH
      }
      updateCachedToken(HH, BH, LH) {
        let AH = this.stream.clipPos(LH.pos);
        if (BH.token(this.stream.reset(AH, HH), LH), HH.value > -1) {
          let {
            parser: BH
          } = LH.p;
          for (let AH = 0; AH < BH.specialized.length; AH++)
            if (BH.specialized[AH] == HH.value) {
              let rH = BH.specializers[AH](this.stream.read(HH.start, HH.end), LH);
              if (rH >= 0 && LH.p.parser.dialect.allows(rH >> 1)) {
                0 == (1 & rH) ? HH.value = rH >> 1 : HH.extended = rH >> 1;
                break
              }
            }
        } else HH.value = 0, HH.end = this.stream.clipPos(AH + 1)
      }
      putAction(HH, BH, LH, AH) {
        for (let rH = 0; rH < AH; rH += 3)
          if (this.actions[rH] == HH) return AH;
        return this.actions[AH++] = HH, this.actions[AH++] = BH, this.actions[AH++] = LH, AH
      }
      addActions(HH, BH, LH, AH) {
        let {
          state: rH
        } = HH, {
          parser: SH
        } = HH.p, {
          data: hH
        } = SH;
        for (let tH = 0; tH < 2; tH++)
          for (let HH = SH.stateSlot(rH, tH ? 2 : 1);; HH += 3) {
            if (65535 == hH[HH]) {
              if (1 != hH[HH + 1]) {
                0 == AH && 2 == hH[HH + 1] && (AH = this.putAction(oH(hH, HH + 2), BH, LH, AH));
                break
              }
              HH = oH(hH, HH + 2)
            }
            hH[HH] == BH && (AH = this.putAction(oH(hH, HH + 1), BH, LH, AH))
          }
        return AH
      }
    }
    class VH {
      constructor(HH, BH, LH, AH) {
        this.parser = HH, this.input = BH, this.rW = AH, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new XH(BH, AH), this.tokens = new UH(HH, this.stream), this.topTerm = HH.top[1];
        let {
          from: SH
        } = AH[0];
        this.stacks = [rH.start(this, HH.top[0], SH)], this.fragments = LH.length && this.stream.end - SH > 4 * HH.bufferLength ? new TH(LH, HH.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let HH, BH, LH = this.stacks,
          AH = this.minStackPos,
          rH = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == LH.length) {
          let [HH] = LH;
          for (; HH.forceReduce() && HH.stack.length && HH.stack[HH.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let SH = 0; SH < LH.length; SH++) {
          let hH = LH[SH];
          for (;;) {
            if (this.tokens.mainToken = null, hH.pos > AH) rH.push(hH);
            else {
              if (this.advanceStack(hH, rH, LH)) continue;
              {
                HH || (HH = [], BH = []), HH.push(hH);
                let LH = this.tokens.getMainToken(hH);
                BH.push(LH.value, LH.end)
              }
            }
            break
          }
        }
        if (!rH.length) {
          let BH = HH && function(HH) {
            let BH = null;
            for (let LH of HH) {
              let HH = LH.p.stoppedAt;
              (LH.pos == LH.p.stream.end || null != HH && LH.pos > HH) && LH.p.parser.stateFlag(LH.state, 2) && (!BH || BH.score < LH.score) && (BH = LH)
            }
            return BH
          }(HH);
          if (BH) return xH && console.log("Finish with " + this.stackID(BH)), this.stackToTree(BH);
          if (this.parser.strict) throw xH && HH && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + AH);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && HH) {
          let LH = null != this.stoppedAt && HH[0].pos > this.stoppedAt ? HH[0] : this.runRecovery(HH, BH, rH);
          if (LH) return xH && console.log("Force-finish " + this.stackID(LH)), this.stackToTree(LH.forceAll())
        }
        if (this.recovering) {
          let HH = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (rH.length > HH)
            for (rH.sort(((HH, BH) => BH.score - HH.score)); rH.length > HH;) rH.pop();
          rH.some((HH => HH.reducePos > AH)) && this.recovering--
        } else if (rH.length > 1) {
          HH: for (let HH = 0; HH < rH.length - 1; HH++) {
            let BH = rH[HH];
            for (let LH = HH + 1; LH < rH.length; LH++) {
              let AH = rH[LH];
              if (BH.sameState(AH) || BH.buffer.length > 500 && AH.buffer.length > 500) {
                if (!((BH.score - AH.score || BH.buffer.length - AH.buffer.length) > 0)) {
                  rH.splice(HH--, 1);
                  continue HH
                }
                rH.splice(LH--, 1)
              }
            }
          }
          rH.length > 12 && (rH.sort(((HH, BH) => BH.score - HH.score)), rH.splice(12, rH.length - 12))
        }
        this.minStackPos = rH[0].pos;
        for (let SH = 1; SH < rH.length; SH++) rH[SH].pos < this.minStackPos && (this.minStackPos = rH[SH].pos);
        return null
      }
      stopAt(HH) {
        if (null != this.stoppedAt && this.stoppedAt < HH) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = HH
      }
      advanceStack(HH, BH, LH) {
        let rH = HH.pos,
          {
            parser: SH
          } = this,
          hH = xH ? this.stackID(HH) + " -> " : "";
        if (null != this.stoppedAt && rH > this.stoppedAt) return HH.forceReduce() ? HH : null;
        if (this.fragments) {
          let BH = HH.curContext && HH.curContext.tracker.strict,
            LH = BH ? HH.curContext.hash : 0;
          for (let tH = this.fragments.nodeAt(rH); tH;) {
            let rH = this.parser.nodeSet.types[tH.type.id] == tH.type ? SH.getGoto(HH.state, tH.type.id) : -1;
            if (rH > -1 && tH.length && (!BH || (tH.prop(AH.f.contextHash) || 0) == LH)) return HH.useNode(tH, rH), xH && console.log(hH + this.stackID(HH) + ` (via reuse of ${SH.getName(tH.type.id)})`), !0;
            if (!(tH instanceof AH.t) || 0 == tH.children.length || tH.positions[0] > 0) break;
            let zH = tH.children[0];
            if (!(zH instanceof AH.t && 0 == tH.positions[0])) break;
            tH = zH
          }
        }
        let tH = SH.stateSlot(HH.state, 4);
        if (tH > 0) return HH.reduce(tH), xH && console.log(hH + this.stackID(HH) + ` (via always-reduce ${SH.getName(65535&tH)})`), !0;
        if (HH.stack.length >= 8400)
          for (; HH.stack.length > 6e3 && HH.forceReduce(););
        let zH = this.tokens.getActions(HH);
        for (let AH = 0; AH < zH.length;) {
          let tH = zH[AH++],
            CH = zH[AH++],
            EH = zH[AH++],
            XH = AH == zH.length || !LH,
            GH = XH ? HH : HH.split(),
            YH = this.tokens.mainToken;
          if (GH.apply(tH, CH, YH ? YH.start : GH.pos, EH), xH && console.log(hH + this.stackID(GH) + ` (via ${0==(65536&tH)?"shift":`reduce of ${SH.getName(65535&tH)}`} for ${SH.getName(CH)} @ ${rH}${GH==HH?"":", split"})`), XH) return !0;
          GH.pos > rH ? BH.push(GH) : LH.push(GH)
        }
        return !1
      }
      advanceFully(HH, BH) {
        let LH = HH.pos;
        for (;;) {
          if (!this.advanceStack(HH, null, null)) return !1;
          if (HH.pos > LH) return OH(HH, BH), !0
        }
      }
      runRecovery(HH, BH, LH) {
        let AH = null,
          rH = !1;
        for (let SH = 0; SH < HH.length; SH++) {
          let hH = HH[SH],
            tH = BH[SH << 1],
            zH = BH[1 + (SH << 1)],
            CH = xH ? this.stackID(hH) + " -> " : "";
          if (hH.deadEnd) {
            if (rH) continue;
            if (rH = !0, hH.restart(), xH && console.log(CH + this.stackID(hH) + " (restarted)"), this.advanceFully(hH, LH)) continue
          }
          let EH = hH.split(),
            XH = CH;
          for (let HH = 0; HH < 10 && EH.forceReduce(); HH++) {
            if (xH && console.log(XH + this.stackID(EH) + " (via force-reduce)"), this.advanceFully(EH, LH)) break;
            xH && (XH = this.stackID(EH) + " -> ")
          }
          for (let HH of hH.recoverByInsert(tH)) xH && console.log(CH + this.stackID(HH) + " (via recover-insert)"), this.advanceFully(HH, LH);
          this.stream.end > hH.pos ? (zH == hH.pos && (zH++, tH = 0), hH.recoverByDelete(tH, zH), xH && console.log(CH + this.stackID(hH) + ` (via recover-delete ${this.parser.getName(tH)})`), OH(hH, LH)) : (!AH || AH.score < EH.score) && (AH = EH)
        }
        return AH
      }
      stackToTree(HH) {
        return HH.close(), AH.t.build({
          buffer: tH.create(HH),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.rW[0].from,
          length: HH.pos - this.rW[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(HH) {
        let BH = (vH || (vH = new WeakMap)).get(HH);
        return BH || vH.set(HH, BH = String.fromCodePoint(this.nextStackID++)), BH + HH
      }
    }

    function OH(HH, BH) {
      for (let LH = 0; LH < BH.length; LH++) {
        let AH = BH[LH];
        if (AH.pos == HH.pos && AH.sameState(HH)) return void(BH[LH].score < HH.score && (BH[LH] = HH))
      }
      BH.push(HH)
    }
    class bH {
      constructor(HH, BH, LH) {
        this.source = HH, this.flags = BH, this.disabled = LH
      }
      allows(HH) {
        return !this.disabled || 0 == this.disabled[HH]
      }
    }
    const kH = HH => HH;
    class mH extends AH.o {
      constructor(HH) {
        if (super(), this.wrappers = [], 14 != HH.version) throw new RangeError(`Parser version (${HH.version}) doesn't match runtime version (14)`);
        let BH = HH.nodeNames.split(" ");
        this.minRepeatTerm = BH.length;
        for (let AH = 0; AH < HH.repeatNodeCount; AH++) BH.push("");
        let LH = Object.keys(HH.topRules).map((BH => HH.topRules[BH][1])),
          rH = [];
        for (let AH = 0; AH < BH.length; AH++) rH.push([]);

        function SH(HH, BH, LH) {
          rH[HH].push([BH, BH.deserialize(String(LH))])
        }
        if (HH.nodeProps)
          for (let tH of HH.nodeProps) {
            let HH = tH[0];
            "string" == typeof HH && (HH = AH.f[HH]);
            for (let BH = 1; BH < tH.length;) {
              let LH = tH[BH++];
              if (LH >= 0) SH(LH, HH, tH[BH++]);
              else {
                let AH = tH[BH + -LH];
                for (let rH = -LH; rH > 0; rH--) SH(tH[BH++], HH, AH);
                BH++
              }
            }
          }
        this.nodeSet = new AH.i(BH.map(((BH, SH) => AH.j.define({
          name: SH >= this.minRepeatTerm ? void 0 : BH,
          id: SH,
          props: rH[SH],
          top: LH.indexOf(SH) > -1,
          error: 0 == SH,
          skipped: HH.skippedNodes && HH.skippedNodes.indexOf(SH) > -1
        })))), HH.propSources && (this.nodeSet = this.nodeSet.extend(...HH.propSources)), this.strict = !1, this.bufferLength = AH.b;
        let hH = zH(HH.tokenData);
        this.context = HH.context, this.specializerSpecs = HH.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let AH = 0; AH < this.specializerSpecs.length; AH++) this.specialized[AH] = this.specializerSpecs[AH].term;
        this.specializers = this.specializerSpecs.map(IH), this.states = zH(HH.states, Uint32Array), this.data = zH(HH.stateData), this.goto = zH(HH.goto), this.maxTerm = HH.maxTerm, this.tokenizers = HH.tokenizers.map((HH => "number" == typeof HH ? new GH(hH, HH) : HH)), this.topRules = HH.topRules, this.dialects = HH.dialects || {}, this.dynamicPrecedences = HH.dynamicPrecedences || null, this.tokenPrecTable = HH.tokenPrec, this.termNames = HH.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(HH, BH, LH) {
        let AH = new VH(this, HH, BH, LH);
        for (let rH of this.wrappers) AH = rH(AH, HH, BH, LH);
        return AH
      }
      getGoto(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = this.goto;
        if (BH >= AH[0]) return -1;
        for (let rH = AH[BH + 1];;) {
          let BH = AH[rH++],
            SH = 1 & BH,
            hH = AH[rH++];
          if (SH && LH) return hH;
          for (let LH = rH + (BH >> 1); rH < LH; rH++)
            if (AH[rH] == HH) return hH;
          if (SH) return -1
        }
      }
      hasAction(HH, BH) {
        let LH = this.data;
        for (let AH = 0; AH < 2; AH++)
          for (let rH, SH = this.stateSlot(HH, AH ? 2 : 1);; SH += 3) {
            if (65535 == (rH = LH[SH])) {
              if (1 != LH[SH + 1]) {
                if (2 == LH[SH + 1]) return oH(LH, SH + 2);
                break
              }
              rH = LH[SH = oH(LH, SH + 2)]
            }
            if (rH == BH || 0 == rH) return oH(LH, SH + 1)
          }
        return 0
      }
      stateSlot(HH, BH) {
        return this.states[6 * HH + BH]
      }
      stateFlag(HH, BH) {
        return (this.stateSlot(HH, 0) & BH) > 0
      }
      validAction(HH, BH) {
        return !!this.allActions(HH, (HH => HH == BH || null))
      }
      allActions(HH, BH) {
        let LH = this.stateSlot(HH, 4),
          AH = LH ? BH(LH) : void 0;
        for (let rH = this.stateSlot(HH, 1); null == AH; rH += 3) {
          if (65535 == this.data[rH]) {
            if (1 != this.data[rH + 1]) break;
            rH = oH(this.data, rH + 2)
          }
          AH = BH(oH(this.data, rH + 1))
        }
        return AH
      }
      nextStates(HH) {
        let BH = [];
        for (let LH = this.stateSlot(HH, 1);; LH += 3) {
          if (65535 == this.data[LH]) {
            if (1 != this.data[LH + 1]) break;
            LH = oH(this.data, LH + 2)
          }
          if (0 == (1 & this.data[LH + 2])) {
            let HH = this.data[LH + 1];
            BH.some(((BH, LH) => 1 & LH && BH == HH)) || BH.push(this.data[LH], HH)
          }
        }
        return BH
      }
      configure(HH) {
        let BH = Object.assign(Object.create(mH.prototype), this);
        if (HH.props && (BH.nodeSet = this.nodeSet.extend(...HH.props)), HH.top) {
          let LH = this.topRules[HH.top];
          if (!LH) throw new RangeError(`Invalid top rule name ${HH.top}`);
          BH.top = LH
        }
        return HH.tokenizers && (BH.tokenizers = this.tokenizers.map((BH => {
          let LH = HH.tokenizers.find((HH => HH.from == BH));
          return LH ? LH.to : BH
        }))), HH.specializers && (BH.specializers = this.specializers.slice(), BH.specializerSpecs = this.specializerSpecs.map(((LH, AH) => {
          let rH = HH.specializers.find((HH => HH.from == LH.external));
          if (!rH) return LH;
          let SH = Object.assign(Object.assign({}, LH), {
            external: rH.to
          });
          return BH.specializers[AH] = IH(SH), SH
        }))), HH.contextTracker && (BH.context = HH.contextTracker), HH.dialect && (BH.dialect = this.parseDialect(HH.dialect)), null != HH.strict && (BH.strict = HH.strict), HH.wrap && (BH.wrappers = BH.wrappers.concat(HH.wrap)), null != HH.bufferLength && (BH.bufferLength = HH.bufferLength), BH
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(HH) {
        return this.termNames ? this.termNames[HH] : String(HH <= this.maxNode && this.nodeSet.types[HH].name || HH)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(HH) {
        let BH = this.dynamicPrecedences;
        return null == BH ? 0 : BH[HH] || 0
      }
      parseDialect(HH) {
        let BH = Object.keys(this.dialects),
          LH = BH.map((() => !1));
        if (HH)
          for (let rH of HH.split(" ")) {
            let HH = BH.indexOf(rH);
            HH >= 0 && (LH[HH] = !0)
          }
        let AH = null;
        for (let rH = 0; rH < BH.length; rH++)
          if (!LH[rH])
            for (let HH, LH = this.dialects[BH[rH]]; 65535 != (HH = this.data[LH++]);)(AH || (AH = new Uint8Array(this.maxTerm + 1)))[HH] = 1;
        return new bH(HH, LH, AH)
      }
      static deserialize(HH) {
        return new mH(HH)
      }
    }

    function oH(HH, BH) {
      return HH[BH] | HH[BH + 1] << 16
    }

    function IH(HH) {
      if (HH.external) {
        let BH = HH.extend ? 1 : 0;
        return (LH, AH) => HH.external(LH, AH) << 1 | BH
      }
      return HH.get
    }
    var fH = LH(44851);
    const lH = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      KH = new class {
        constructor(HH) {
          this.start = HH.start, this.shift = HH.shift || kH, this.reduce = HH.reduce || kH, this.reuse = HH.reuse || kH, this.hash = HH.hash || (() => 0), this.strict = !1 !== HH.strict
        }
      }({
        start: !1,
        shift: (HH, BH) => 5 == BH || 6 == BH || 320 == BH ? HH : 321 == BH,
        strict: !1
      }),
      cH = new uH(((HH, BH) => {
        let {
          next: LH
        } = HH;
        (125 == LH || -1 == LH || BH.context) && HH.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      eH = new uH(((HH, BH) => {
        let LH, {
          next: AH
        } = HH;
        lH.indexOf(AH) > -1 || (47 != AH || 47 != (LH = HH.peek(1)) && 42 != LH) && (125 == AH || 59 == AH || -1 == AH || BH.context || HH.acceptToken(316))
      }), {
        contextual: !0
      }),
      qH = new uH(((HH, BH) => {
        91 != HH.next || BH.context || HH.acceptToken(317)
      }), {
        contextual: !0
      }),
      gH = new uH(((HH, BH) => {
        let {
          next: LH
        } = HH;
        if (43 == LH || 45 == LH) {
          if (HH.advance(), LH == HH.next) {
            HH.advance();
            let LH = !BH.context && BH.canShift(1);
            HH.acceptToken(LH ? 1 : 2)
          }
        } else 63 == LH && 46 == HH.peek(1) && (HH.advance(), HH.advance(), (HH.next < 48 || HH.next > 57) && HH.acceptToken(3))
      }), {
        contextual: !0
      });

    function NH(HH, BH) {
      return HH >= 65 && HH <= 90 || HH >= 97 && HH <= 122 || 95 == HH || HH >= 192 || !BH && HH >= 48 && HH <= 57
    }
    const RH = new uH(((HH, BH) => {
        if (60 != HH.next || !BH.dialectEnabled(0)) return;
        if (HH.advance(), 47 == HH.next) return;
        let LH = 0;
        for (; lH.indexOf(HH.next) > -1;) HH.advance(), LH++;
        if (NH(HH.next, !0)) {
          for (HH.advance(), LH++; NH(HH.next, !1);) HH.advance(), LH++;
          for (; lH.indexOf(HH.next) > -1;) HH.advance(), LH++;
          if (44 == HH.next) return;
          for (let BH = 0;; BH++) {
            if (7 == BH) {
              if (!NH(HH.next, !0)) return;
              break
            }
            if (HH.next != "extends".charCodeAt(BH)) break;
            HH.advance(), LH++
          }
        }
        HH.acceptToken(4, -LH)
      })),
      jH = (0, fH.d)({
        "get set async static": fH.j.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": fH.j.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": fH.j.operatorKeyword,
        "let var const using function class extends": fH.j.definitionKeyword,
        "import export from": fH.j.moduleKeyword,
        "with debugger new": fH.j.keyword,
        TemplateString: fH.j.special(fH.j.string),
        super: fH.j.atom,
        BooleanLiteral: fH.j.bool,
        this: fH.j.self,
        null: fH.j.null,
        Star: fH.j.modifier,
        VariableName: fH.j.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": fH.j.function(fH.j.variableName),
        VariableDefinition: fH.j.definition(fH.j.variableName),
        Label: fH.j.labelName,
        PropertyName: fH.j.propertyName,
        PrivatePropertyName: fH.j.special(fH.j.propertyName),
        "CallExpression/MemberExpression/PropertyName": fH.j.function(fH.j.propertyName),
        "FunctionDeclaration/VariableDefinition": fH.j.function(fH.j.definition(fH.j.variableName)),
        "ClassDeclaration/VariableDefinition": fH.j.definition(fH.j.className),
        "NewExpression/VariableName": fH.j.className,
        PropertyDefinition: fH.j.definition(fH.j.propertyName),
        PrivatePropertyDefinition: fH.j.definition(fH.j.special(fH.j.propertyName)),
        UpdateOp: fH.j.updateOperator,
        "LineComment Hashbang": fH.j.lineComment,
        BlockComment: fH.j.blockComment,
        Number: fH.j.number,
        String: fH.j.string,
        Escape: fH.j.escape,
        ArithOp: fH.j.arithmeticOperator,
        LogicOp: fH.j.logicOperator,
        BitOp: fH.j.bitwiseOperator,
        CompareOp: fH.j.compareOperator,
        RegExp: fH.j.regexp,
        Equals: fH.j.definitionOperator,
        Arrow: fH.j.function(fH.j.punctuation),
        ": Spread": fH.j.punctuation,
        "( )": fH.j.paren,
        "[ ]": fH.j.squareBracket,
        "{ }": fH.j.brace,
        "InterpolationStart InterpolationEnd": fH.j.special(fH.j.brace),
        ".": fH.j.derefOperator,
        ", ;": fH.j.separator,
        "@": fH.j.meta,
        TypeName: fH.j.typeName,
        TypeDefinition: fH.j.definition(fH.j.typeName),
        "type enum interface implements namespace module declare": fH.j.definitionKeyword,
        "abstract global Privacy readonly override": fH.j.modifier,
        "is keyof unique infer asserts": fH.j.operatorKeyword,
        JSXAttributeValue: fH.j.attributeValue,
        JSXText: fH.j.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": fH.j.angleBracket,
        "JSXIdentifier JSXNameSpacedName": fH.j.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": fH.j.attributeName,
        "JSXBuiltin/JSXIdentifier": fH.j.standard(fH.j.tagName)
      }),
      nH = {
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
      FH = {
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
      DH = {
        __proto__: null,
        "<": 193
      },
      wH = mH.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: KH,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [jH],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [eH, qH, gH, RH, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, cH, new YH("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new YH("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: HH => nH[HH] || -1
        }, {
          term: 343,
          get: HH => FH[HH] || -1
        }, {
          term: 95,
          get: HH => DH[HH] || -1
        }],
        tokenPrec: 15201
      });
    var ZH = LH(44839),
      dH = LH(44818),
      aH = LH(44823),
      sH = LH(44814);
    const JH = [(0, sH.s)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, sH.s)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, sH.s)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, sH.s)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, sH.s)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, sH.s)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, sH.s)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, sH.s)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, sH.s)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, sH.s)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, sH.s)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      iH = JH.concat([(0, sH.s)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, sH.s)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, sH.s)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      pH = new AH.l,
      yH = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function HB(HH) {
      return (BH, LH) => {
        let AH = BH.node.getChild("VariableDefinition");
        return AH && LH(AH, HH), !0
      }
    }
    const BB = ["FunctionDeclaration"],
      LB = {
        FunctionDeclaration: HB("function"),
        ClassDeclaration: HB("class"),
        ClassExpression: () => !0,
        EnumDeclaration: HB("constant"),
        TypeAliasDeclaration: HB("type"),
        NamespaceDeclaration: HB("namespace"),
        VariableDefinition(HH, BH) {
          HH.matchContext(BB) || BH(HH, "variable")
        },
        TypeDefinition(HH, BH) {
          BH(HH, "type")
        },
        __proto__: null
      };

    function AB(HH, BH) {
      let LH = pH.get(BH);
      if (LH) return LH;
      let rH = [],
        SH = !0;

      function hH(BH, LH) {
        let AH = HH.sliceString(BH.from, BH.to);
        rH.push({
          label: AH,
          type: LH
        })
      }
      return BH.cursor(AH.d.IncludeAnonymous).iterate((BH => {
        if (SH) SH = !1;
        else if (BH.name) {
          let HH = LB[BH.name];
          if (HH && HH(BH, hH) || yH.has(BH.name)) return !1
        } else if (BH.to - BH.from > 8192) {
          for (let LH of AB(HH, BH.node)) rH.push(LH);
          return !1
        }
      })), pH.set(BH, rH), rH
    }
    const rB = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      SB = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function hB(HH) {
      let BH = (0, ZH.pb)(HH.state).resolveInner(HH.pos, -1);
      if (SB.indexOf(BH.name) > -1) return null;
      let LH = "VariableName" == BH.name || BH.to - BH.from < 20 && rB.test(HH.state.sliceDoc(BH.from, BH.to));
      if (!LH && !HH.explicit) return null;
      let AH = [];
      for (let rH = BH; rH; rH = rH.parent) yH.has(rH.name) && (AH = AH.concat(AB(HH.state.doc, rH)));
      return {
        options: AH,
        from: LH ? BH.from : HH.pos,
        validFor: rB
      }
    }
    const tB = ZH.h.define({
        name: "javascript",
        parser: wH.configure({
          props: [ZH.X.add({
            IfStatement: (0, ZH.p)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, ZH.p)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: ZH.C,
            SwitchBody: HH => {
              let BH = HH.textAfter,
                LH = /^\s*\}/.test(BH),
                AH = /^\s*(case|default)\b/.test(BH);
              return HH.baseIndent + (LH ? 0 : AH ? 1 : 2) * HH.unit
            },
            Block: (0, ZH.z)({
              closing: "}"
            }),
            ArrowFunction: HH => HH.baseIndent + HH.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, ZH.p)({
              except: /^\s*{/
            }),
            JSXElement(HH) {
              let BH = /^\s*<\//.test(HH.textAfter);
              return HH.lineIndent(HH.node.from) + (BH ? 0 : HH.unit)
            },
            JSXEscape(HH) {
              let BH = /\s*\}/.test(HH.textAfter);
              return HH.lineIndent(HH.node.from) + (BH ? 0 : HH.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": HH => HH.column(HH.node.from) + HH.unit
          }), ZH.N.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": ZH.H,
            BlockComment: HH => ({
              from: HH.from + 2,
              to: HH.to - 2
            }),
            JSXElement(HH) {
              let BH = HH.firstChild;
              if (!BH || "JSXSelfClosingTag" == BH.name) return null;
              let LH = HH.lastChild;
              return {
                from: BH.to,
                to: LH.type.isError ? HH.to : LH.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(HH) {
              var BH;
              let LH = null === (BH = HH.firstChild) || void 0 === BH ? void 0 : BH.nextSibling,
                AH = HH.lastChild;
              return !LH || LH.type.isError ? null : {
                from: LH.to,
                to: AH.type.isError ? HH.to : AH.from
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
      zB = {
        test: HH => /^JSX/.test(HH.name),
        facet: (0, ZH.x)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      CB = tB.configure({
        dialect: "ts"
      }, "typescript"),
      EB = tB.configure({
        dialect: "jsx",
        props: [ZH.ib.add((HH => HH.isTop ? [zB] : void 0))]
      }),
      XB = tB.configure({
        dialect: "jsx ts",
        props: [ZH.ib.add((HH => HH.isTop ? [zB] : void 0))]
      }, "typescript");
    let GB = HH => ({
      label: HH,
      type: "keyword"
    });
    const YB = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(GB),
      uB = YB.concat(["declare", "implements", "private", "protected", "public"].map(GB));

    function QB() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        BH = HH.jsx ? HH.typescript ? XB : EB : HH.typescript ? CB : tB,
        LH = HH.typescript ? iH.concat(uB) : JH.concat(YB);
      return new ZH.j(BH, [tB.data.of({
        autocomplete: (0, sH.p)(SB, (0, sH.h)(LH))
      }), tB.data.of({
        autocomplete: hB
      }), HH.jsx ? xB : []])
    }

    function WB(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HH.length;
      for (let AH = null === BH || void 0 === BH ? void 0 : BH.firstChild; AH; AH = AH.nextSibling)
        if ("JSXIdentifier" == AH.name || "JSXBuiltin" == AH.name || "JSXNamespacedName" == AH.name || "JSXMemberExpression" == AH.name) return HH.sliceString(AH.from, Math.min(AH.to, LH));
      return ""
    }
    const MB = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      xB = aH.h.inputHandler.of(((HH, BH, LH, AH, rH) => {
        if ((MB ? HH.composing : HH.compositionStarted) || HH.state.readOnly || BH != LH || ">" != AH && "/" != AH || !tB.isActiveAt(HH.state, BH, -1)) return !1;
        let SH = rH(),
          {
            state: hH
          } = SH,
          tH = hH.changeByRange((HH => {
            var BH;
            let LH, {
                head: rH
              } = HH,
              SH = (0, ZH.pb)(hH).resolveInner(rH - 1, -1);
            if ("JSXStartTag" == SH.name && (SH = SH.parent), hH.doc.sliceString(rH - 1, rH) != AH || "JSXAttributeValue" == SH.name && SH.to > rH);
            else {
              if (">" == AH && "JSXFragmentTag" == SH.name) return {
                range: HH,
                changes: {
                  from: rH,
                  insert: "</>"
                }
              };
              if ("/" == AH && "JSXStartCloseTag" == SH.name) {
                let HH = SH.parent,
                  AH = HH.parent;
                if (AH && HH.from == rH - 2 && ((LH = WB(hH.doc, AH.firstChild, rH)) || "JSXFragmentTag" == (null === (BH = AH.firstChild) || void 0 === BH ? void 0 : BH.name))) {
                  let HH = `${LH}>`;
                  return {
                    range: dH.i.cursor(rH + HH.length, -1),
                    changes: {
                      from: rH,
                      insert: HH
                    }
                  }
                }
              } else if (">" == AH) {
                let BH = function(HH) {
                  for (;;) {
                    if ("JSXOpenTag" == HH.name || "JSXSelfClosingTag" == HH.name || "JSXFragmentTag" == HH.name) return HH;
                    if ("JSXEscape" == HH.name || !HH.parent) return null;
                    HH = HH.parent
                  }
                }(SH);
                if (BH && "JSXOpenTag" == BH.name && !/^\/?>|^<\//.test(hH.doc.sliceString(rH, rH + 2)) && (LH = WB(hH.doc, BH, rH))) return {
                  range: HH,
                  changes: {
                    from: rH,
                    insert: `</${LH}>`
                  }
                }
              }
            }
            return {
              range: HH
            }
          }));
        return !tH.changes.empty && (HH.dispatch([SH, hH.update(tH, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  44839: (HH, BH, LH) => {
    LH.d(BH, {
      $: () => dH,
      C: () => DH,
      G: () => xB,
      H: () => JH,
      J: () => CB,
      N: () => sH,
      Q: () => MH,
      T: () => fH,
      W: () => KH,
      X: () => eH,
      cb: () => lH,
      d: () => PB,
      g: () => cH,
      gb: () => IH,
      h: () => uH,
      hb: () => FB,
      ib: () => XH,
      j: () => mH,
      kb: () => OB,
      mb: () => WH,
      n: () => NB,
      p: () => wH,
      pb: () => QH,
      t: () => mB,
      x: () => EH,
      z: () => nH
    });
    var AH, rH = LH(44848),
      SH = LH(44818),
      hH = LH(44823),
      tH = LH(44851),
      zH = LH(44828);
    const CH = new rH.f;

    function EH(HH) {
      return SH.l.define({
        combine: HH ? BH => BH.concat(HH) : void 0
      })
    }
    const XH = new rH.f;
    class GH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = HH, this.name = AH, SH.k.prototype.hasOwnProperty("tree") || Object.defineProperty(SH.k.prototype, "tree", {
          get() {
            return QH(this)
          }
        }), this.parser = BH, this.extension = [kH.of(this), SH.k.languageData.of(((HH, BH, LH) => {
          let AH = YH(HH, BH, LH),
            rH = AH.type.prop(CH);
          if (!rH) return [];
          let SH = HH.facet(rH),
            hH = AH.type.prop(XH);
          if (hH) {
            let rH = AH.resolve(BH - AH.from, LH);
            for (let BH of hH)
              if (BH.test(rH, HH)) {
                let LH = HH.facet(BH.facet);
                return "replace" == BH.type ? LH : LH.concat(SH)
              }
          }
          return SH
        }))].concat(LH)
      }
      isActiveAt(HH, BH) {
        return YH(HH, BH, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(CH) == this.data
      }
      findRegions(HH) {
        let BH = HH.facet(kH);
        if ((null === BH || void 0 === BH ? void 0 : BH.data) == this.data) return [{
          from: 0,
          to: HH.doc.length
        }];
        if (!BH || !BH.allowsNesting) return [];
        let LH = [],
          AH = (HH, BH) => {
            if (HH.prop(CH) == this.data) return void LH.push({
              from: BH,
              to: BH + HH.length
            });
            let SH = HH.prop(rH.f.mounted);
            if (SH) {
              if (SH.tree.prop(CH) == this.data) {
                if (SH.overlay)
                  for (let HH of SH.overlay) LH.push({
                    from: HH.from + BH,
                    to: HH.to + BH
                  });
                else LH.push({
                  from: BH,
                  to: BH + HH.length
                });
                return
              }
              if (SH.overlay) {
                let HH = LH.length;
                if (AH(SH.tree, SH.overlay[0].from + BH), LH.length > HH) return
              }
            }
            for (let LH = 0; LH < HH.children.length; LH++) {
              let SH = HH.children[LH];
              SH instanceof rH.t && AH(SH, HH.positions[LH] + BH)
            }
          };
        return AH(QH(HH), 0), LH
      }
      get allowsNesting() {
        return !0
      }
    }

    function YH(HH, BH, LH) {
      let AH = HH.facet(kH),
        SH = QH(HH).topNode;
      if (!AH || AH.allowsNesting)
        for (let hH = SH; hH; hH = hH.enter(BH, LH, rH.d.ExcludeBuffers | rH.d.EnterBracketed)) hH.type.isTop && (SH = hH);
      return SH
    }
    GH.setState = SH.B.define();
    class uH extends GH {
      constructor(HH, BH, LH) {
        super(HH, BH, [], LH), this.parser = BH
      }
      static define(HH) {
        let BH = EH(HH.languageData);
        return new uH(BH, HH.parser.configure({
          props: [CH.add((HH => HH.isTop ? BH : void 0))]
        }), HH.name)
      }
      configure(HH, BH) {
        return new uH(this.data, this.parser.configure(HH), BH || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function QH(HH) {
      let BH = HH.field(GH.state, !1);
      return BH ? BH.tree : rH.t.empty
    }

    function WH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH.doc.length;
      var LH;
      return (null === (LH = HH.field(GH.state, !1)) || void 0 === LH ? void 0 : LH.context.isDone(BH)) || !1
    }

    function MH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH.viewport.to,
        LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        AH = function(HH, BH) {
          let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var AH;
          let rH = null === (AH = HH.field(GH.state, !1)) || void 0 === AH ? void 0 : AH.context;
          if (!rH) return null;
          let SH = rH.viewport;
          rH.updateViewport({
            from: 0,
            to: BH
          });
          let hH = rH.isDone(BH) || rH.work(LH, BH) ? rH.tree : null;
          return rH.updateViewport(SH), hH
        }(HH.state, BH, LH);
      return AH != QH(HH.state) && HH.dispatch({}), !!AH
    }
    class xH {
      constructor(HH) {
        this.doc = HH, this.cursorPos = 0, this.string = "", this.cursor = HH.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(HH) {
        return this.string = this.cursor.next(HH - this.cursorPos).value, this.cursorPos = HH + this.string.length, this.cursorPos - this.string.length
      }
      chunk(HH) {
        return this.syncTo(HH), this.string
      }
      get lineChunks() {
        return !0
      }
      read(HH, BH) {
        let LH = this.cursorPos - this.string.length;
        return HH < LH || BH >= this.cursorPos ? this.doc.sliceString(HH, BH) : this.string.slice(HH - LH, BH - LH)
      }
    }
    let vH = null;
    class PH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          AH = arguments.length > 3 ? arguments[3] : void 0,
          rH = arguments.length > 4 ? arguments[4] : void 0,
          SH = arguments.length > 5 ? arguments[5] : void 0,
          hH = arguments.length > 6 ? arguments[6] : void 0,
          tH = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = HH, this.state = BH, this.fragments = LH, this.tree = AH, this.treeLen = rH, this.viewport = SH, this.skipped = hH, this.scheduleOn = tH, this.parse = null, this.tempSkipped = []
      }
      static create(HH, BH, LH) {
        return new PH(HH, BH, [], rH.t.empty, 0, LH, [], null)
      }
      startParse() {
        return this.parser.startParse(new xH(this.state.doc), this.fragments)
      }
      work(HH, BH) {
        return null != BH && BH >= this.state.doc.length && (BH = void 0), this.tree != rH.t.empty && this.isDone(null !== BH && void 0 !== BH ? BH : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var LH;
          if ("number" == typeof HH) {
            let BH = Date.now() + HH;
            HH = () => Date.now() > BH
          }
          for (this.parse || (this.parse = this.startParse()), null != BH && (null == this.parse.stoppedAt || this.parse.stoppedAt > BH) && BH < this.state.doc.length && this.parse.stopAt(BH);;) {
            let AH = this.parse.advance();
            if (AH) {
              if (this.fragments = this.withoutTempSkipped(rH.r.addTree(AH, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (LH = this.parse.stoppedAt) && void 0 !== LH ? LH : this.state.doc.length, this.tree = AH, this.parse = null, !(this.treeLen < (null !== BH && void 0 !== BH ? BH : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (HH()) return !1
          }
        }))
      }
      takeTree() {
        let HH, BH;
        this.parse && (HH = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > HH) && this.parse.stopAt(HH), this.withContext((() => {
          for (; !(BH = this.parse.advance()););
        })), this.treeLen = HH, this.tree = BH, this.fragments = this.withoutTempSkipped(rH.r.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(HH) {
        let BH = vH;
        vH = this;
        try {
          return HH()
        } finally {
          vH = BH
        }
      }
      withoutTempSkipped(HH) {
        for (let BH; BH = this.tempSkipped.pop();) HH = TH(HH, BH.from, BH.to);
        return HH
      }
      changes(HH, BH) {
        let {
          fragments: LH,
          tree: AH,
          treeLen: SH,
          viewport: hH,
          skipped: tH
        } = this;
        if (this.takeTree(), !HH.empty) {
          let BH = [];
          if (HH.iterChangedRanges(((HH, LH, AH, rH) => BH.push({
              fromA: HH,
              toA: LH,
              fromB: AH,
              toB: rH
            }))), LH = rH.r.applyChanges(LH, BH), AH = rH.t.empty, SH = 0, hH = {
              from: HH.mapPos(hH.from, -1),
              to: HH.mapPos(hH.to, 1)
            }, this.skipped.length) {
            tH = [];
            for (let BH of this.skipped) {
              let LH = HH.mapPos(BH.from, 1),
                AH = HH.mapPos(BH.to, -1);
              LH < AH && tH.push({
                from: LH,
                to: AH
              })
            }
          }
        }
        return new PH(this.parser, BH, LH, AH, SH, hH, tH, this.scheduleOn)
      }
      updateViewport(HH) {
        if (this.viewport.from == HH.from && this.viewport.to == HH.to) return !1;
        this.viewport = HH;
        let BH = this.skipped.length;
        for (let LH = 0; LH < this.skipped.length; LH++) {
          let {
            from: BH,
            to: AH
          } = this.skipped[LH];
          BH < HH.to && AH > HH.from && (this.fragments = TH(this.fragments, BH, AH), this.skipped.splice(LH--, 1))
        }
        return !(this.skipped.length >= BH) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(HH, BH) {
        this.skipped.push({
          from: HH,
          to: BH
        })
      }
      static getSkippingParser(HH) {
        return new class extends rH.o {
          createParse(BH, LH, AH) {
            let SH = AH[0].from,
              hH = AH[AH.length - 1].to;
            return {
              parsedPos: SH,
              advance() {
                let BH = vH;
                if (BH) {
                  for (let HH of AH) BH.tempSkipped.push(HH);
                  HH && (BH.scheduleOn = BH.scheduleOn ? Promise.all([BH.scheduleOn, HH]) : HH)
                }
                return this.parsedPos = hH, new rH.t(rH.j.none, [], [], hH - SH)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(HH) {
        HH = Math.min(HH, this.state.doc.length);
        let BH = this.fragments;
        return this.treeLen >= HH && BH.length && 0 == BH[0].from && BH[0].to >= HH
      }
      static get() {
        return vH
      }
    }

    function TH(HH, BH, LH) {
      return rH.r.applyChanges(HH, [{
        fromA: BH,
        toA: LH,
        fromB: BH,
        toB: LH
      }])
    }
    class UH {
      constructor(HH) {
        this.context = HH, this.tree = HH.tree
      }
      apply(HH) {
        if (!HH.docChanged && this.tree == this.context.tree) return this;
        let BH = this.context.changes(HH.changes, HH.state),
          LH = this.context.treeLen == HH.startState.doc.length ? void 0 : Math.max(HH.changes.mapPos(this.context.treeLen), BH.viewport.to);
        return BH.work(20, LH) || BH.takeTree(), new UH(BH)
      }
      static init(HH) {
        let BH = Math.min(3e3, HH.doc.length),
          LH = PH.create(HH.facet(kH).parser, HH, {
            from: 0,
            to: BH
          });
        return LH.work(20, BH) || LH.takeTree(), new UH(LH)
      }
    }
    GH.state = SH.E.define({
      create: UH.init,
      update(HH, BH) {
        for (let LH of BH.effects)
          if (LH.is(GH.setState)) return LH.value;
        return BH.startState.facet(kH) != BH.state.facet(kH) ? UH.init(BH.state) : HH.apply(BH)
      }
    });
    let VH = HH => {
      let BH = setTimeout((() => HH()), 500);
      return () => clearTimeout(BH)
    };
    "undefined" != typeof requestIdleCallback && (VH = HH => {
      let BH = -1,
        LH = setTimeout((() => {
          BH = requestIdleCallback(HH, {
            timeout: 400
          })
        }), 100);
      return () => BH < 0 ? clearTimeout(LH) : cancelIdleCallback(BH)
    });
    const OH = "undefined" != typeof navigator && (null === (AH = navigator.scheduling) || void 0 === AH ? void 0 : AH.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      bH = hH.p.fromClass(class {
        constructor(HH) {
          this.view = HH, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(HH) {
          let BH = this.view.state.field(GH.state).context;
          (BH.updateViewport(HH.view.viewport) || this.view.viewport.to > BH.treeLen) && this.scheduleWork(), (HH.docChanged || HH.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(BH)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: HH
          } = this.view, BH = HH.field(GH.state);
          BH.tree == BH.context.tree && BH.context.isDone(HH.doc.length) || (this.working = VH(this.work))
        }
        work(HH) {
          this.working = null;
          let BH = Date.now();
          if (this.chunkEnd < BH && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = BH + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: LH,
            viewport: {
              to: AH
            }
          } = this.view, rH = LH.field(GH.state);
          if (rH.tree == rH.context.tree && rH.context.isDone(AH + 1e5)) return;
          let SH = Date.now() + Math.min(this.chunkBudget, 100, HH && !OH ? Math.max(25, HH.timeRemaining() - 5) : 1e9),
            hH = rH.context.treeLen < AH && LH.doc.length > AH + 1e3,
            tH = rH.context.work((() => OH && OH() || Date.now() > SH), AH + (hH ? 0 : 1e5));
          this.chunkBudget -= Date.now() - BH, (tH || this.chunkBudget <= 0) && (rH.context.takeTree(), this.view.dispatch({
            effects: GH.setState.of(new UH(rH.context))
          })), this.chunkBudget > 0 && (!tH || hH) && this.scheduleWork(), this.checkAsyncSchedule(rH.context)
        }
        checkAsyncSchedule(HH) {
          HH.scheduleOn && (this.workScheduled++, HH.scheduleOn.then((() => this.scheduleWork())).catch((HH => (0, hH.$)(this.view.state, HH))).then((() => this.workScheduled--)), HH.scheduleOn = null)
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
      kH = SH.l.define({
        combine: HH => HH.length ? HH[0] : null,
        enables: HH => [GH.state, bH, hH.h.contentAttributes.compute([HH], (BH => {
          let LH = BH.facet(HH);
          return LH && LH.name ? {
            "data-language": LH.name
          } : {}
        }))]
      });
    class mH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = HH, this.support = BH, this.extension = [HH, BH]
      }
    }
    const oH = SH.l.define(),
      IH = SH.l.define({
        combine: HH => {
          if (!HH.length) return "  ";
          let BH = HH[0];
          if (!BH || /\S/.test(BH) || Array.from(BH).some((HH => HH != BH[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(HH[0]));
          return BH
        }
      });

    function fH(HH) {
      let BH = HH.facet(IH);
      return 9 == BH.charCodeAt(0) ? HH.tabSize * BH.length : BH.length
    }

    function lH(HH, BH) {
      let LH = "",
        AH = HH.tabSize,
        rH = HH.facet(IH)[0];
      if ("\t" == rH) {
        for (; BH >= AH;) LH += "\t", BH -= AH;
        rH = " "
      }
      for (let SH = 0; SH < BH; SH++) LH += rH;
      return LH
    }

    function KH(HH, BH) {
      HH instanceof SH.k && (HH = new cH(HH));
      for (let AH of HH.state.facet(oH)) {
        let LH = AH(HH, BH);
        if (void 0 !== LH) return LH
      }
      let LH = QH(HH.state);
      return LH.length >= BH ? function(HH, BH, LH) {
        let AH = BH.resolveStack(LH),
          rH = BH.resolveInner(LH, -1).resolve(LH, 0).enterUnfinishedNodesBefore(LH);
        if (rH != AH.node) {
          let HH = [];
          for (let BH = rH; BH && !(BH.from < AH.node.from || BH.to > AH.node.to || BH.from == AH.node.from && BH.type == AH.node.type); BH = BH.parent) HH.push(BH);
          for (let BH = HH.length - 1; BH >= 0; BH--) AH = {
            node: HH[BH],
            next: AH
          }
        }
        return qH(AH, HH, LH)
      }(HH, LH, BH) : null
    }
    class cH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = HH, this.options = BH, this.unit = fH(HH)
      }
      lineAt(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          LH = this.state.doc.lineAt(HH),
          {
            simulateBreak: AH,
            simulateDoubleBreak: rH
          } = this.options;
        return null != AH && AH >= LH.from && AH <= LH.to ? rH && AH == HH ? {
          text: "",
          from: HH
        } : (BH < 0 ? AH < HH : AH <= HH) ? {
          text: LH.text.slice(AH - LH.from),
          from: AH
        } : {
          text: LH.text.slice(0, AH - LH.from),
          from: LH.from
        } : LH
      }
      textAfterPos(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && HH == this.options.simulateBreak) return "";
        let {
          text: LH,
          from: AH
        } = this.lineAt(HH, BH);
        return LH.slice(HH - AH, Math.min(LH.length, HH + 100 - AH))
      }
      column(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: LH,
            from: AH
          } = this.lineAt(HH, BH),
          rH = this.countColumn(LH, HH - AH),
          SH = this.options.overrideIndentation ? this.options.overrideIndentation(AH) : -1;
        return SH > -1 && (rH += SH - this.countColumn(LH, LH.search(/\S|$/))), rH
      }
      countColumn(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH.length;
        return (0, SH.Y)(HH, this.state.tabSize, BH)
      }
      lineIndent(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: LH,
            from: AH
          } = this.lineAt(HH, BH),
          rH = this.options.overrideIndentation;
        if (rH) {
          let HH = rH(AH);
          if (HH > -1) return HH
        }
        return this.countColumn(LH, LH.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const eH = new rH.f;

    function qH(HH, BH, LH) {
      for (let AH = HH; AH; AH = AH.next) {
        let HH = gH(AH.node);
        if (HH) return HH(RH.create(BH, LH, AH))
      }
      return 0
    }

    function gH(HH) {
      let BH = HH.type.prop(eH);
      if (BH) return BH;
      let LH, AH = HH.firstChild;
      if (AH && (LH = AH.type.prop(rH.f.closedBy))) {
        let BH = HH.lastChild,
          AH = BH && LH.indexOf(BH.name) > -1;
        return HH => FH(HH, !0, 1, void 0, AH && ! function(HH) {
          return HH.pos == HH.options.simulateBreak && HH.options.simulateDoubleBreak
        }(HH) ? BH.from : void 0)
      }
      return null == HH.parent ? NH : null
    }

    function NH() {
      return 0
    }
    class RH extends cH {
      constructor(HH, BH, LH) {
        super(HH.state, HH.options), this.base = HH, this.pos = BH, this.context = LH
      }
      get node() {
        return this.context.node
      }
      static create(HH, BH, LH) {
        return new RH(HH, BH, LH)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(HH) {
        let BH = this.state.doc.lineAt(HH.from);
        for (;;) {
          let LH = HH.resolve(BH.from);
          for (; LH.parent && LH.parent.from == LH.from;) LH = LH.parent;
          if (jH(LH, HH)) break;
          BH = this.state.doc.lineAt(LH.from)
        }
        return this.lineIndent(BH.from)
      }
      continue () {
        return qH(this.context.next, this.base, this.pos)
      }
    }

    function jH(HH, BH) {
      for (let LH = BH; LH; LH = LH.parent)
        if (HH == LH) return !0;
      return !1
    }

    function nH(HH) {
      let {
        closing: BH,
        align: LH = !0,
        units: AH = 1
      } = HH;
      return HH => FH(HH, LH, AH, BH)
    }

    function FH(HH, BH, LH, AH, rH) {
      let SH = HH.textAfter,
        hH = SH.match(/^\s*/)[0].length,
        tH = AH && SH.slice(hH, hH + AH.length) == AH || rH == HH.pos + hH,
        zH = BH ? function(HH) {
          let BH = HH.node,
            LH = BH.childAfter(BH.from),
            AH = BH.lastChild;
          if (!LH) return null;
          let rH = HH.options.simulateBreak,
            SH = HH.state.doc.lineAt(LH.from),
            hH = null == rH || rH <= SH.from ? SH.to : Math.min(SH.to, rH);
          for (let tH = LH.to;;) {
            let HH = BH.childAfter(tH);
            if (!HH || HH == AH) return null;
            if (!HH.type.isSkipped) {
              if (HH.from >= hH) return null;
              let BH = /^ */.exec(SH.text.slice(LH.to - SH.from))[0].length;
              return {
                from: LH.from,
                to: LH.to + BH
              }
            }
            tH = HH.to
          }
        }(HH) : null;
      return zH ? tH ? HH.column(zH.from) : HH.column(zH.to) : HH.baseIndent + (tH ? 0 : HH.unit * LH)
    }
    const DH = HH => HH.baseIndent;

    function wH() {
      let {
        except: HH,
        units: BH = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return LH => {
        let AH = HH && HH.test(LH.textAfter);
        return LH.baseIndent + (AH ? 0 : BH * LH.unit)
      }
    }
    const ZH = 200;

    function dH() {
      return SH.k.transactionFilter.of((HH => {
        if (!HH.docChanged || !HH.isUserEvent("input.type") && !HH.isUserEvent("input.complete")) return HH;
        let BH = HH.startState.languageDataAt("indentOnInput", HH.startState.selection.main.head);
        if (!BH.length) return HH;
        let LH = HH.newDoc,
          {
            head: AH
          } = HH.newSelection.main,
          rH = LH.lineAt(AH);
        if (AH > rH.from + ZH) return HH;
        let SH = LH.sliceString(rH.from, AH);
        if (!BH.some((HH => HH.test(SH)))) return HH;
        let {
          state: hH
        } = HH, tH = -1, zH = [];
        for (let {
            head: CH
          }
          of hH.selection.rW) {
          let HH = hH.doc.lineAt(CH);
          if (HH.from == tH) continue;
          tH = HH.from;
          let BH = KH(hH, HH.from);
          if (null == BH) continue;
          let LH = /^\s*/.exec(HH.text)[0],
            AH = lH(hH, BH);
          LH != AH && zH.push({
            from: HH.from,
            to: HH.from + LH.length,
            insert: AH
          })
        }
        return zH.length ? [HH, {
          changes: zH,
          sequential: !0
        }] : HH
      }))
    }
    const aH = SH.l.define(),
      sH = new rH.f;

    function JH(HH) {
      let BH = HH.firstChild,
        LH = HH.lastChild;
      return BH && BH.to < LH.from ? {
        from: BH.to,
        to: LH.type.isError ? HH.to : LH.from
      } : null
    }

    function iH(HH) {
      let BH = HH.lastChild;
      return BH && BH.to == HH.to && BH.type.isError
    }

    function pH(HH, BH, LH) {
      for (let AH of HH.facet(aH)) {
        let rH = AH(HH, BH, LH);
        if (rH) return rH
      }
      return function(HH, BH, LH) {
        let AH = QH(HH);
        if (AH.length < LH) return null;
        let rH = null;
        for (let SH = AH.resolveStack(LH, 1); SH; SH = SH.next) {
          let hH = SH.node;
          if (hH.to <= LH || hH.from > LH) continue;
          if (rH && hH.from < BH) break;
          let tH = hH.type.prop(sH);
          if (tH && (hH.to < AH.length - 50 || AH.length == HH.doc.length || !iH(hH))) {
            let AH = tH(hH, HH);
            AH && AH.from <= LH && AH.from >= BH && AH.to > LH && (rH = AH)
          }
        }
        return rH
      }(HH, BH, LH)
    }

    function yH(HH, BH) {
      let LH = BH.mapPos(HH.from, 1),
        AH = BH.mapPos(HH.to, -1);
      return LH >= AH ? void 0 : {
        from: LH,
        to: AH
      }
    }
    const HB = SH.B.define({
        map: yH
      }),
      BB = SH.B.define({
        map: yH
      });

    function LB(HH) {
      let BH = [];
      for (let {
          head: LH
        }
        of HH.state.selection.rW) BH.some((HH => HH.from <= LH && HH.to >= LH)) || BH.push(HH.lineBlockAt(LH));
      return BH
    }
    const AB = SH.E.define({
      create: () => hH.e.none,
      update(HH, BH) {
        BH.isUserEvent("delete") && BH.changes.iterChangedRanges(((BH, LH) => HH = rB(HH, BH, LH))), HH = HH.map(BH.changes);
        for (let LH of BH.effects)
          if (LH.is(HB) && !hB(HH, LH.value.from, LH.value.to)) {
            let {
              preparePlaceholder: AH
            } = BH.state.facet(XB), rH = AH ? hH.e.replace({
              widget: new QB(AH(BH.state, LH.value))
            }) : uB;
            HH = HH.update({
              add: [rH.range(LH.value.from, LH.value.to)]
            })
          } else LH.is(BB) && (HH = HH.update({
            filter: (HH, BH) => LH.value.from != HH || LH.value.to != BH,
            filterFrom: LH.value.from,
            filterTo: LH.value.to
          }));
        return BH.selection && (HH = rB(HH, BH.selection.main.head)), HH
      },
      provide: HH => hH.h.Gr.from(HH),
      toJSON(HH, BH) {
        let LH = [];
        return HH.between(0, BH.doc.length, ((HH, BH) => {
          LH.push(HH, BH)
        })), LH
      },
      fromJSON(HH) {
        if (!Array.isArray(HH) || HH.length % 2) throw new RangeError("Invalid JSON for fold state");
        let BH = [];
        for (let LH = 0; LH < HH.length;) {
          let AH = HH[LH++],
            rH = HH[LH++];
          if ("number" != typeof AH || "number" != typeof rH) throw new RangeError("Invalid JSON for fold state");
          BH.push(uB.range(AH, rH))
        }
        return hH.e.set(BH, !0)
      }
    });

    function rB(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BH,
        AH = !1;
      return HH.between(BH, LH, ((HH, rH) => {
        HH < LH && rH > BH && (AH = !0)
      })), AH ? HH.update({
        filterFrom: BH,
        filterTo: LH,
        filter: (HH, AH) => HH >= LH || AH <= BH
      }) : HH
    }

    function SB(HH, BH, LH) {
      var AH;
      let rH = null;
      return null === (AH = HH.field(AB, !1)) || void 0 === AH || AH.between(BH, LH, ((HH, BH) => {
        (!rH || rH.from > HH) && (rH = {
          from: HH,
          to: BH
        })
      })), rH
    }

    function hB(HH, BH, LH) {
      let AH = !1;
      return HH.between(BH, BH, ((HH, rH) => {
        HH == BH && rH == LH && (AH = !0)
      })), AH
    }

    function tB(HH, BH) {
      return HH.field(AB, !1) ? BH : BH.concat(SH.B.appendConfig.of(GB()))
    }

    function zB(HH, BH) {
      let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        AH = HH.state.doc.lineAt(BH.from).number,
        rH = HH.state.doc.lineAt(BH.to).number;
      return hH.h.announce.of(`${HH.state.phrase(LH?"Folded lines":"Unfolded lines")} ${AH} ${HH.state.phrase("to")} ${rH}.`)
    }
    const CB = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: HH => {
          for (let BH of LB(HH)) {
            let LH = pH(HH.state, BH.from, BH.to);
            if (LH) return HH.dispatch({
              effects: tB(HH.state, [HB.of(LH), zB(HH, LH)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: HH => {
          if (!HH.state.field(AB, !1)) return !1;
          let BH = [];
          for (let LH of LB(HH)) {
            let AH = SB(HH.state, LH.from, LH.to);
            AH && BH.push(BB.of(AH), zB(HH, AH, !1))
          }
          return BH.length && HH.dispatch({
            effects: BH
          }), BH.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: HH => {
          let {
            state: BH
          } = HH, LH = [];
          for (let AH = 0; AH < BH.doc.length;) {
            let rH = HH.lineBlockAt(AH),
              SH = pH(BH, rH.from, rH.to);
            SH && LH.push(HB.of(SH)), AH = (SH ? HH.lineBlockAt(SH.to) : rH).to + 1
          }
          return LH.length && HH.dispatch({
            effects: tB(HH.state, LH)
          }), !!LH.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: HH => {
          let BH = HH.state.field(AB, !1);
          if (!BH || !BH.size) return !1;
          let LH = [];
          return BH.between(0, HH.state.doc.length, ((HH, BH) => {
            LH.push(BB.of({
              from: HH,
              to: BH
            }))
          })), HH.dispatch({
            effects: LH
          }), !0
        }
      }],
      EB = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      XB = SH.l.define({
        combine: HH => (0, SH.U)(HH, EB)
      });

    function GB(HH) {
      let BH = [AB, vB];
      return HH && BH.push(XB.of(HH)), BH
    }

    function YB(HH, BH) {
      let {
        state: LH
      } = HH, AH = LH.facet(XB), rH = BH => {
        let LH = HH.lineBlockAt(HH.posAtDOM(BH.target)),
          AH = SB(HH.state, LH.from, LH.to);
        AH && HH.dispatch({
          effects: BB.of(AH)
        }), BH.preventDefault()
      };
      if (AH.placeholderDOM) return AH.placeholderDOM(HH, rH, BH);
      let SH = document.createElement("span");
      return SH.textContent = AH.placeholderText, SH.setAttribute("aria-label", LH.phrase("folded code")), SH.title = LH.phrase("unfold"), SH.className = "cm-foldPlaceholder", SH.onclick = rH, SH
    }
    const uB = hH.e.replace({
      widget: new class extends hH.r {
        toDOM(HH) {
          return YB(HH, null)
        }
      }
    });
    class QB extends hH.r {
      constructor(HH) {
        super(), this.value = HH
      }
      eq(HH) {
        return this.value == HH.value
      }
      toDOM(HH) {
        return YB(HH, this.value)
      }
    }
    const WB = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class MB extends hH.l {
      constructor(HH, BH) {
        super(), this.config = HH, this.open = BH
      }
      eq(HH) {
        return this.config == HH.config && this.open == HH.open
      }
      toDOM(HH) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let BH = document.createElement("span");
        return BH.textContent = this.open ? this.config.openText : this.config.closedText, BH.title = HH.state.phrase(this.open ? "Fold line" : "Unfold line"), BH
      }
    }

    function xB() {
      let HH = {
          ...WB,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        BH = new MB(HH, !0),
        LH = new MB(HH, !1),
        AH = hH.p.fromClass(class {
          constructor(HH) {
            this.from = HH.viewport.from, this.markers = this.buildMarkers(HH)
          }
          update(BH) {
            (BH.docChanged || BH.viewportChanged || BH.startState.facet(kH) != BH.state.facet(kH) || BH.startState.field(AB, !1) != BH.state.field(AB, !1) || QH(BH.startState) != QH(BH.state) || HH.foldingChanged(BH)) && (this.markers = this.buildMarkers(BH.view))
          }
          buildMarkers(HH) {
            let AH = new SH.t;
            for (let rH of HH.viewportLineBlocks) {
              let SH = SB(HH.state, rH.from, rH.to) ? LH : pH(HH.state, rH.from, rH.to) ? BH : null;
              SH && AH.add(rH.from, rH.from, SH)
            }
            return AH.finish()
          }
        }),
        {
          domEventHandlers: rH
        } = HH;
      return [AH, (0, hH.G)({
        class: "cm-foldGutter",
        markers(HH) {
          var BH;
          return (null === (BH = HH.plugin(AH)) || void 0 === BH ? void 0 : BH.markers) || SH.x.empty
        },
        initialSpacer: () => new MB(HH, !1),
        domEventHandlers: {
          ...rH,
          click: (HH, BH, LH) => {
            if (rH.click && rH.click(HH, BH, LH)) return !0;
            let AH = SB(HH.state, BH.from, BH.to);
            if (AH) return HH.dispatch({
              effects: BB.of(AH)
            }), !0;
            let SH = pH(HH.state, BH.from, BH.to);
            return !!SH && (HH.dispatch({
              effects: HB.of(SH)
            }), !0)
          }
        }
      }), GB()]
    }
    const vB = hH.h.baseTheme({
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
    class PB {
      constructor(HH, BH) {
        let LH;

        function AH(HH) {
          let BH = zH.e.newName();
          return (LH || (LH = Object.create(null)))["." + BH] = HH, BH
        }
        this.specs = HH;
        const rH = "string" == typeof BH.all ? BH.all : BH.all ? AH(BH.all) : void 0,
          SH = BH.scope;
        this.scope = SH instanceof GH ? HH => HH.prop(CH) == SH.data : SH ? HH => HH == SH : void 0, this.style = (0, tH.g)(HH.map((HH => ({
          tag: HH.tag,
          class: HH.class || AH(Object.assign({}, HH, {
            tag: null
          }))
        }))), {
          all: rH
        }).style, this.module = LH ? new zH.e(LH) : null, this.themeType = BH.themeType
      }
      static define(HH, BH) {
        return new PB(HH, BH || {})
      }
    }
    const TB = SH.l.define(),
      UB = SH.l.define({
        combine: HH => HH.length ? [HH[0]] : null
      });

    function VB(HH) {
      let BH = HH.facet(TB);
      return BH.length ? BH : HH.facet(UB)
    }

    function OB(HH, BH) {
      let LH, AH = [kB];
      return HH instanceof PB && (HH.module && AH.push(hH.h.styleModule.of(HH.module)), LH = HH.themeType), (null === BH || void 0 === BH ? void 0 : BH.fallback) ? AH.push(UB.of(HH)) : LH ? AH.push(TB.computeN([hH.h.darkTheme], (BH => BH.facet(hH.h.darkTheme) == ("dark" == LH) ? [HH] : []))) : AH.push(TB.of(HH)), AH
    }
    class bB {
      constructor(HH) {
        this.markCache = Object.create(null), this.tree = QH(HH.state), this.Gr = this.buildDeco(HH, VB(HH.state)), this.decoratedTo = HH.viewport.to
      }
      update(HH) {
        let BH = QH(HH.state),
          LH = VB(HH.state),
          AH = LH != VB(HH.startState),
          {
            viewport: rH
          } = HH.view,
          SH = HH.changes.mapPos(this.decoratedTo, 1);
        BH.length < rH.to && !AH && BH.type == this.tree.type && SH >= rH.to ? (this.Gr = this.Gr.map(HH.changes), this.decoratedTo = SH) : (BH != this.tree || HH.viewportChanged || AH) && (this.tree = BH, this.Gr = this.buildDeco(HH.view, LH), this.decoratedTo = rH.to)
      }
      buildDeco(HH, BH) {
        if (!BH || !this.tree.length) return hH.e.none;
        let LH = new SH.t;
        for (let {
            from: AH,
            to: rH
          }
          of HH.iHH)(0, tH.c)(this.tree, BH, ((HH, BH, AH) => {
          LH.add(HH, BH, this.markCache[AH] || (this.markCache[AH] = hH.e.mark({
            class: AH
          })))
        }), AH, rH);
        return LH.finish()
      }
    }
    const kB = SH.p.high(hH.p.fromClass(bB, {
        Gr: HH => HH.Gr
      })),
      mB = PB.define([{
        tag: tH.j.meta,
        color: "#404740"
      }, {
        tag: tH.j.link,
        textDecoration: "underline"
      }, {
        tag: tH.j.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: tH.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: tH.j.strong,
        fontWeight: "bold"
      }, {
        tag: tH.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: tH.j.keyword,
        color: "#708"
      }, {
        tag: [tH.j.atom, tH.j.bool, tH.j.url, tH.j.contentSeparator, tH.j.labelName],
        color: "#219"
      }, {
        tag: [tH.j.literal, tH.j.inserted],
        color: "#164"
      }, {
        tag: [tH.j.string, tH.j.deleted],
        color: "#a11"
      }, {
        tag: [tH.j.regexp, tH.j.escape, tH.j.special(tH.j.string)],
        color: "#e40"
      }, {
        tag: tH.j.definition(tH.j.variableName),
        color: "#00f"
      }, {
        tag: tH.j.local(tH.j.variableName),
        color: "#30a"
      }, {
        tag: [tH.j.typeName, tH.j.namespace],
        color: "#085"
      }, {
        tag: tH.j.className,
        color: "#167"
      }, {
        tag: [tH.j.special(tH.j.variableName), tH.j.macroName],
        color: "#256"
      }, {
        tag: tH.j.definition(tH.j.propertyName),
        color: "#00c"
      }, {
        tag: tH.j.comment,
        color: "#940"
      }, {
        tag: tH.j.invalid,
        color: "#f00"
      }]),
      oB = hH.h.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      IB = 1e4,
      fB = "()[]{}",
      lB = SH.l.define({
        combine: HH => (0, SH.U)(HH, {
          afterCursor: !0,
          brackets: fB,
          maxScanDistance: IB,
          renderMatch: eB
        })
      }),
      KB = hH.e.mark({
        class: "cm-matchingBracket"
      }),
      cB = hH.e.mark({
        class: "cm-nonmatchingBracket"
      });

    function eB(HH) {
      let BH = [],
        LH = HH.matched ? KB : cB;
      return BH.push(LH.range(HH.start.from, HH.start.to)), HH.end && BH.push(LH.range(HH.end.from, HH.end.to)), BH
    }

    function qB(HH) {
      let BH = [],
        LH = HH.facet(lB);
      for (let AH of HH.selection.rW) {
        if (!AH.empty) continue;
        let rH = FB(HH, AH.head, -1, LH) || AH.head > 0 && FB(HH, AH.head - 1, 1, LH) || LH.afterCursor && (FB(HH, AH.head, 1, LH) || AH.head < HH.doc.length && FB(HH, AH.head + 1, -1, LH));
        rH && (BH = BH.concat(LH.renderMatch(rH, HH)))
      }
      return hH.e.set(BH, !0)
    }
    const gB = [hH.p.fromClass(class {
      constructor(HH) {
        this.paused = !1, this.Gr = qB(HH.state)
      }
      update(HH) {
        (HH.docChanged || HH.selectionSet || this.paused) && (HH.view.composing ? (this.Gr = this.Gr.map(HH.changes), this.paused = !0) : (this.Gr = qB(HH.state), this.paused = !1))
      }
    }, {
      Gr: HH => HH.Gr
    }), oB];

    function NB() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [lB.of(HH), gB]
    }
    const RB = new rH.f;

    function jB(HH, BH, LH) {
      let AH = HH.prop(BH < 0 ? rH.f.openedBy : rH.f.closedBy);
      if (AH) return AH;
      if (1 == HH.name.length) {
        let AH = LH.indexOf(HH.name);
        if (AH > -1 && AH % 2 == (BH < 0 ? 1 : 0)) return [LH[AH + BH]]
      }
      return null
    }

    function nB(HH) {
      let BH = HH.type.prop(RB);
      return BH ? BH(HH.node) : HH
    }

    function FB(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        rH = AH.maxScanDistance || IB,
        SH = AH.brackets || fB,
        hH = QH(HH),
        tH = hH.resolveInner(BH, LH);
      for (let zH = tH; zH; zH = zH.parent) {
        let AH = jB(zH.type, LH, SH);
        if (AH && zH.from < zH.to) {
          let rH = nB(zH);
          if (rH && (LH > 0 ? BH >= rH.from && BH < rH.to : BH > rH.from && BH <= rH.to)) return DB(HH, BH, LH, zH, rH, AH, SH)
        }
      }
      return function(HH, BH, LH, AH, rH, SH, hH) {
        if (LH < 0 ? !BH : BH == HH.doc.length) return null;
        let tH = LH < 0 ? HH.sliceDoc(BH - 1, BH) : HH.sliceDoc(BH, BH + 1),
          zH = hH.indexOf(tH);
        if (zH < 0 || zH % 2 == 0 != LH > 0) return null;
        let CH = {
            from: LH < 0 ? BH - 1 : BH,
            to: LH > 0 ? BH + 1 : BH
          },
          EH = HH.doc.iterRange(BH, LH > 0 ? HH.doc.length : 0),
          XH = 0;
        for (let GH = 0; !EH.next().done && GH <= SH;) {
          let HH = EH.value;
          LH < 0 && (GH += HH.length);
          let SH = BH + GH * LH;
          for (let BH = LH > 0 ? 0 : HH.length - 1, tH = LH > 0 ? HH.length : -1; BH != tH; BH += LH) {
            let tH = hH.indexOf(HH[BH]);
            if (!(tH < 0 || AH.resolveInner(SH + BH, 1).type != rH))
              if (tH % 2 == 0 == LH > 0) XH++;
              else {
                if (1 == XH) return {
                  start: CH,
                  end: {
                    from: SH + BH,
                    to: SH + BH + 1
                  },
                  matched: tH >> 1 == zH >> 1
                };
                XH--
              }
          }
          LH > 0 && (GH += HH.length)
        }
        return EH.done ? {
          start: CH,
          matched: !1
        } : null
      }(HH, BH, LH, hH, tH.type, rH, SH)
    }

    function DB(HH, BH, LH, AH, rH, SH, hH) {
      let tH = AH.parent,
        zH = {
          from: rH.from,
          to: rH.to
        },
        CH = 0,
        EH = null === tH || void 0 === tH ? void 0 : tH.cursor();
      if (EH && (LH < 0 ? EH.childBefore(AH.from) : EH.childAfter(AH.to)))
        do {
          if (LH < 0 ? EH.to <= AH.from : EH.from >= AH.to) {
            if (0 == CH && SH.indexOf(EH.type.name) > -1 && EH.from < EH.to) {
              let HH = nB(EH);
              return {
                start: zH,
                end: HH ? {
                  from: HH.from,
                  to: HH.to
                } : void 0,
                matched: !0
              }
            }
            if (jB(EH.type, LH, hH)) CH++;
            else if (jB(EH.type, -LH, hH)) {
              if (0 == CH) {
                let HH = nB(EH);
                return {
                  start: zH,
                  end: HH && HH.from < HH.to ? {
                    from: HH.from,
                    to: HH.to
                  } : void 0,
                  matched: !1
                }
              }
              CH--
            }
          }
        } while (LH < 0 ? EH.prevSibling() : EH.nextSibling());
      return {
        start: zH,
        matched: !1
      }
    }
    const wB = Object.create(null),
      ZB = [rH.j.none],
      dB = [],
      aB = Object.create(null),
      sB = Object.create(null);
    for (let [pB, yB] of [
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
      ]) sB[pB] = iB(wB, yB);

    function JB(HH, BH) {
      dB.indexOf(HH) > -1 || (dB.push(HH), console.warn(BH))
    }

    function iB(HH, BH) {
      let LH = [];
      for (let rH of BH.split(" ")) {
        let BH = [];
        for (let LH of rH.split(".")) {
          let AH = HH[LH] || tH.j[LH];
          AH ? "function" == typeof AH ? BH.length ? BH = BH.map(AH) : JB(LH, `Modifier ${LH} used at start of tag`) : BH.length ? JB(LH, `Tag ${LH} used as modifier`) : BH = Array.isArray(AH) ? AH : [AH] : JB(LH, `Unknown highlighting tag ${LH}`)
        }
        for (let HH of BH) LH.push(HH)
      }
      if (!LH.length) return 0;
      let AH = BH.replace(/ /g, "_"),
        SH = AH + " " + LH.map((HH => HH.id)),
        hH = aB[SH];
      if (hH) return hH.id;
      let zH = aB[SH] = rH.j.define({
        id: ZB.length,
        name: AH,
        props: [(0, tH.d)({
          [AH]: LH
        })]
      });
      return ZB.push(zH), zH.id
    }
    hH.g.RTL, hH.g.LTR
  },
  44863: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => vH,
      f: () => VH
    });
    var AH = LH(44823),
      rH = LH(44818),
      SH = LH(44834);
    class hH {
      constructor(HH, BH, LH) {
        this.from = HH, this.to = BH, this.diagnostic = LH
      }
    }
    class tH {
      constructor(HH, BH, LH) {
        this.diagnostics = HH, this.panel = BH, this.selected = LH
      }
      static init(HH, BH, LH) {
        let SH = LH.facet(TH).markerFilter;
        SH && (HH = SH(HH, LH));
        let hH = HH.slice().sort(((HH, BH) => HH.from - BH.from || HH.to - BH.to)),
          CH = new rH.t,
          EH = [],
          XH = 0,
          GH = LH.doc.iter(),
          YH = 0,
          uH = LH.doc.length;
        for (let rH = 0;;) {
          let HH, BH, LH = rH == hH.length ? null : hH[rH];
          if (!LH && !EH.length) break;
          if (EH.length) HH = XH, BH = EH.reduce(((HH, BH) => Math.min(HH, BH.to)), LH && LH.from > HH ? LH.from : 1e8);
          else {
            if (HH = LH.from, HH > uH) break;
            BH = LH.to, EH.push(LH), rH++
          }
          for (; rH < hH.length;) {
            let LH = hH[rH];
            if (LH.from != HH || !(LH.to > LH.from || LH.to == HH)) {
              BH = Math.min(LH.from, BH);
              break
            }
            EH.push(LH), rH++, BH = Math.min(LH.to, BH)
          }
          BH = Math.min(BH, uH);
          let SH = !1;
          if (EH.some((LH => LH.from == HH && (LH.to == BH || BH == uH))) && (SH = HH == BH, !SH && BH - HH < 10)) {
            let LH = HH - (YH + GH.value.length);
            LH > 0 && (GH.next(LH), YH = HH);
            for (let AH = HH;;) {
              if (AH >= BH) {
                SH = !0;
                break
              }
              if (!GH.lineBreak && YH + GH.value.length > AH) break;
              AH = YH + GH.value.length, YH += GH.value.length, GH.next()
            }
          }
          let tH = cH(EH);
          if (SH) CH.add(HH, HH, AH.e.widget({
            widget: new kH(tH),
            diagnostics: EH.slice()
          }));
          else {
            let LH = EH.reduce(((HH, BH) => BH.markClass ? HH + " " + BH.markClass : HH), "");
            CH.add(HH, BH, AH.e.mark({
              class: "cm-lintRange cm-lintRange-" + tH + LH,
              diagnostics: EH.slice(),
              inclusiveEnd: EH.some((HH => HH.to > BH))
            }))
          }
          if (XH = BH, XH == uH) break;
          for (let AH = 0; AH < EH.length; AH++) EH[AH].to <= XH && EH.splice(AH--, 1)
        }
        let QH = CH.finish();
        return new tH(QH, BH, zH(QH))
      }
    }

    function zH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        AH = null;
      return HH.between(LH, 1e9, ((HH, LH, rH) => {
        let {
          spec: SH
        } = rH;
        if (!(BH && SH.diagnostics.indexOf(BH) < 0))
          if (AH) {
            if (SH.diagnostics.indexOf(AH.diagnostic) < 0) return !1;
            AH = new hH(AH.from, LH, AH.diagnostic)
          } else AH = new hH(HH, LH, BH || SH.diagnostics[0])
      })), AH
    }

    function CH(HH, BH) {
      let LH = BH.pos,
        AH = BH.end || LH,
        rH = HH.state.facet(TH).hideOn(HH, LH, AH);
      if (null != rH) return rH;
      let SH = HH.startState.doc.lineAt(BH.pos);
      return !(!HH.effects.some((HH => HH.is(XH))) && !HH.changes.touchesRange(SH.from, Math.max(SH.to, AH)))
    }

    function EH(HH, BH) {
      return HH.field(uH, !1) ? BH : BH.concat(rH.B.appendConfig.of(eH))
    }
    const XH = rH.B.define(),
      GH = rH.B.define(),
      YH = rH.B.define(),
      uH = rH.E.define({
        create: () => new tH(AH.e.none, null, null),
        update(HH, BH) {
          if (BH.docChanged && HH.diagnostics.size) {
            let LH = HH.diagnostics.map(BH.changes),
              AH = null,
              rH = HH.panel;
            if (HH.selected) {
              let rH = BH.changes.mapPos(HH.selected.from, 1);
              AH = zH(LH, HH.selected.diagnostic, rH) || zH(LH, null, rH)
            }!LH.size && rH && BH.state.facet(TH).autoPanel && (rH = null), HH = new tH(LH, rH, AH)
          }
          for (let LH of BH.effects)
            if (LH.is(XH)) {
              let AH = BH.state.facet(TH).autoPanel ? LH.value.length ? oH.open : null : HH.panel;
              HH = tH.init(LH.value, AH, BH.state)
            } else LH.is(GH) ? HH = new tH(HH.diagnostics, LH.value ? oH.open : null, HH.selected) : LH.is(YH) && (HH = new tH(HH.diagnostics, HH.panel, LH.value));
          return HH
        },
        provide: HH => [AH.mb.from(HH, (HH => HH.panel)), AH.h.Gr.from(HH, (HH => HH.diagnostics))]
      });
    const QH = AH.e.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function WH(HH, BH, LH) {
      let AH, {
          diagnostics: rH
        } = HH.state.field(uH),
        SH = -1,
        hH = -1;
      rH.between(BH - (LH < 0 ? 1 : 0), BH + (LH > 0 ? 1 : 0), ((HH, rH, tH) => {
        let {
          spec: zH
        } = tH;
        if (BH >= HH && BH <= rH && (HH == rH || (BH > HH || LH > 0) && (BH < rH || LH < 0))) return AH = zH.diagnostics, SH = HH, hH = rH, !1
      }));
      let tH = HH.state.facet(TH).tooltipFilter;
      return AH && tH && (AH = tH(AH, HH.state)), AH ? {
        pos: SH,
        end: hH,
        above: HH.state.doc.lineAt(SH).to < hH,
        create: () => ({
          dom: MH(HH, AH)
        })
      } : null
    }

    function MH(HH, BH) {
      return (0, SH.d)("ul", {
        class: "cm-tooltip-lint"
      }, BH.map((BH => bH(HH, BH, !1))))
    }
    const xH = HH => {
        let BH = HH.state.field(uH, !1);
        return !(!BH || !BH.panel) && (HH.dispatch({
          effects: GH.of(!1)
        }), !0)
      },
      vH = [{
        key: "Mod-Shift-m",
        run: HH => {
          let BH = HH.state.field(uH, !1);
          BH && BH.panel || HH.dispatch({
            effects: EH(HH.state, [GH.of(!0)])
          });
          let LH = (0, AH.A)(HH, oH.open);
          return LH && LH.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: HH => {
          let BH = HH.state.field(uH, !1);
          if (!BH) return !1;
          let LH = HH.state.selection.main,
            AH = zH(BH.diagnostics, null, LH.to + 1);
          return !(!AH && (AH = zH(BH.diagnostics, null, 0), !AH || AH.from == LH.from && AH.to == LH.to)) && (HH.dispatch({
            selection: {
              anchor: AH.from,
              head: AH.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      PH = AH.p.fromClass(class {
        constructor(HH) {
          this.view = HH, this.timeout = -1, this.set = !0;
          let {
            delay: BH
          } = HH.state.facet(TH);
          this.lintTime = Date.now() + BH, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, BH)
        }
        run() {
          clearTimeout(this.timeout);
          let HH = Date.now();
          if (HH < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - HH);
          else {
            this.set = !1;
            let {
              state: HH
            } = this.view, {
              sources: BH
            } = HH.facet(TH);
            BH.length && function(HH, BH, LH) {
              let AH = [],
                rH = -1;
              for (let SH of HH) SH.then((LH => {
                AH.push(LH), clearTimeout(rH), AH.length == HH.length ? BH(AH) : rH = setTimeout((() => BH(AH)), 200)
              }), LH)
            }(BH.map((HH => Promise.resolve(HH(this.view)))), (BH => {
              this.view.state.doc == HH.doc && this.view.dispatch(function(HH, BH) {
                return {
                  effects: EH(HH, [XH.of(BH)])
                }
              }(this.view.state, BH.reduce(((HH, BH) => HH.concat(BH)))))
            }), (HH => {
              (0, AH.$)(this.view.state, HH)
            }))
          }
        }
        update(HH) {
          let BH = HH.state.facet(TH);
          (HH.docChanged || BH != HH.startState.facet(TH) || BH.needsRefresh && BH.needsRefresh(HH)) && (this.lintTime = Date.now() + BH.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, BH.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const TH = rH.l.define({
      combine: HH => ({
        sources: HH.map((HH => HH.source)).filter((HH => null != HH)),
        ...(0, rH.U)(HH.map((HH => HH.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: UH,
          tooltipFilter: UH,
          needsRefresh: (HH, BH) => HH ? BH ? LH => HH(LH) || BH(LH) : HH : BH,
          hideOn: (HH, BH) => HH ? BH ? (LH, AH, rH) => HH(LH, AH, rH) || BH(LH, AH, rH) : HH : BH,
          autoPanel: (HH, BH) => HH || BH
        })
      })
    });

    function UH(HH, BH) {
      return HH ? BH ? (LH, AH) => BH(HH(LH, AH), AH) : HH : BH
    }

    function VH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [TH.of({
        source: HH,
        config: BH
      }), PH, eH]
    }

    function OH(HH) {
      let BH = [];
      if (HH) HH: for (let {
          name: LH
        }
        of HH) {
        for (let HH = 0; HH < LH.length; HH++) {
          let AH = LH[HH];
          if (/[a-zA-Z]/.test(AH) && !BH.some((HH => HH.toLowerCase() == AH.toLowerCase()))) {
            BH.push(AH);
            continue HH
          }
        }
        BH.push("")
      }
      return BH
    }

    function bH(HH, BH, LH) {
      var AH;
      let rH = LH ? OH(BH.actions) : [];
      return (0, SH.d)("li", {
        class: "cm-diagnostic cm-diagnostic-" + BH.severity
      }, (0, SH.d)("span", {
        class: "cm-diagnosticText"
      }, BH.renderMessage ? BH.renderMessage(HH) : BH.message), null === (AH = BH.actions) || void 0 === AH ? void 0 : AH.map(((LH, AH) => {
        let hH = !1,
          tH = AH => {
            if (AH.preventDefault(), hH) return;
            hH = !0;
            let rH = zH(HH.state.field(uH).diagnostics, BH);
            rH && LH.apply(HH, rH.from, rH.to)
          },
          {
            name: CH
          } = LH,
          EH = rH[AH] ? CH.indexOf(rH[AH]) : -1,
          XH = EH < 0 ? CH : [CH.slice(0, EH), (0, SH.d)("u", CH.slice(EH, EH + 1)), CH.slice(EH + 1)],
          GH = LH.markClass ? " " + LH.markClass : "";
        return (0, SH.d)("button", {
          type: "button",
          class: "cm-diagnosticAction" + GH,
          onclick: tH,
          onmousedown: tH,
          "aria-label": ` Action: ${CH}${EH<0?"":` (access key "${rH[AH]})"`}.`
        }, XH)
      })), BH.source && (0, SH.d)("div", {
        class: "cm-diagnosticSource"
      }, BH.source))
    }
    class kH extends AH.r {
      constructor(HH) {
        super(), this.sev = HH
      }
      eq(HH) {
        return HH.sev == this.sev
      }
      toDOM() {
        return (0, SH.d)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class mH {
      constructor(HH, BH) {
        this.diagnostic = BH, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = bH(HH, BH, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class oH {
      constructor(HH) {
        this.view = HH, this.items = [];
        this.list = (0, SH.d)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: BH => {
            if (!(BH.ctrlKey || BH.altKey || BH.metaKey)) {
              if (27 == BH.keyCode) xH(this.view), this.view.focus();
              else if (38 == BH.keyCode || 33 == BH.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == BH.keyCode || 34 == BH.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == BH.keyCode) this.moveSelection(0);
              else if (35 == BH.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == BH.keyCode) this.view.focus();
              else {
                if (!(BH.keyCode >= 65 && BH.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: LH
                  } = this.items[this.selectedIndex], AH = OH(LH.actions);
                  for (let rH = 0; rH < AH.length; rH++)
                    if (AH[rH].toUpperCase().charCodeAt(0) == BH.keyCode) {
                      let BH = zH(this.view.state.field(uH).diagnostics, LH);
                      BH && LH.actions[rH].apply(HH, BH.from, BH.to)
                    }
                }
              }
              BH.preventDefault()
            }
          },
          onclick: HH => {
            for (let BH = 0; BH < this.items.length; BH++) this.items[BH].dom.contains(HH.target) && this.moveSelection(BH)
          }
        }), this.dom = (0, SH.d)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, SH.d)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => xH(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let HH = this.view.state.field(uH).selected;
        if (!HH) return -1;
        for (let BH = 0; BH < this.items.length; BH++)
          if (this.items[BH].diagnostic == HH.diagnostic) return BH;
        return -1
      }
      update() {
        let {
          diagnostics: HH,
          selected: BH
        } = this.view.state.field(uH), LH = 0, AH = !1, rH = null, SH = new Set;
        for (HH.between(0, this.view.state.doc.length, ((HH, hH, tH) => {
            let {
              spec: zH
            } = tH;
            for (let CH of zH.diagnostics) {
              if (SH.has(CH)) continue;
              SH.add(CH);
              let HH, hH = -1;
              for (let BH = LH; BH < this.items.length; BH++)
                if (this.items[BH].diagnostic == CH) {
                  hH = BH;
                  break
                } hH < 0 ? (HH = new mH(this.view, CH), this.items.splice(LH, 0, HH), AH = !0) : (HH = this.items[hH], hH > LH && (this.items.splice(LH, hH - LH), AH = !0)), BH && HH.diagnostic == BH.diagnostic ? HH.dom.hasAttribute("aria-selected") || (HH.dom.setAttribute("aria-selected", "true"), rH = HH) : HH.dom.hasAttribute("aria-selected") && HH.dom.removeAttribute("aria-selected"), LH++
            }
          })); LH < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) AH = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new mH(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), AH = !0), rH ? (this.list.setAttribute("aria-activedescendant", rH.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: rH.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: HH => {
            let {
              sel: BH,
              panel: LH
            } = HH, AH = LH.height / this.list.offsetHeight;
            BH.top < LH.top ? this.list.scrollTop -= (LH.top - BH.top) / AH : BH.bottom > LH.bottom && (this.list.scrollTop += (BH.bottom - LH.bottom) / AH)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), AH && this.sync()
      }
      sync() {
        let HH = this.list.firstChild;

        function BH() {
          let BH = HH;
          HH = BH.nextSibling, BH.remove()
        }
        for (let LH of this.items)
          if (LH.dom.parentNode == this.list) {
            for (; HH != LH.dom;) BH();
            HH = LH.dom.nextSibling
          } else this.list.insertBefore(LH.dom, HH);
        for (; HH;) BH()
      }
      moveSelection(HH) {
        if (this.selectedIndex < 0) return;
        let BH = zH(this.view.state.field(uH).diagnostics, this.items[HH].diagnostic);
        BH && this.view.dispatch({
          selection: {
            anchor: BH.from,
            head: BH.to
          },
          scrollIntoView: !0,
          effects: YH.of(BH)
        })
      }
      static open(HH) {
        return new oH(HH)
      }
    }

    function IH(HH) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(HH)}</svg>')`
    }

    function fH(HH) {
      return IH(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${HH}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const lH = AH.h.baseTheme({
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
        backgroundImage: fH("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: fH("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: fH("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: fH("#66d")
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

    function KH(HH) {
      return "error" == HH ? 4 : "warning" == HH ? 3 : "info" == HH ? 2 : 1
    }

    function cH(HH) {
      let BH = "hint",
        LH = 1;
      for (let AH of HH) {
        let HH = KH(AH.severity);
        HH > LH && (LH = HH, BH = AH.severity)
      }
      return BH
    }
    AH.l;
    const eH = [uH, AH.h.Gr.compute([uH], (HH => {
      let {
        selected: BH,
        panel: LH
      } = HH.field(uH);
      return BH && LH && BH.from != BH.to ? AH.e.set([QH.range(BH.from, BH.to)]) : AH.e.none
    })), (0, AH.U)(WH, {
      hideOn: CH
    }), lH]
  },
  44860: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => pH,
      h: () => MH,
      k: () => yH
    });
    var AH = LH(44823),
      rH = LH(44818),
      SH = LH(44834);
    const hH = "function" == typeof String.prototype.normalize ? HH => HH.normalize("NFKD") : HH => HH;
    class tH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : HH.length,
          rH = arguments.length > 4 ? arguments[4] : void 0,
          SH = arguments.length > 5 ? arguments[5] : void 0;
        this.test = SH, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = HH.iterRange(LH, AH), this.bufferStart = LH, this.normalize = rH ? HH => rH(hH(HH)) : hH, this.query = this.normalize(BH)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, rH.N)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let HH = this.peek();
          if (HH < 0) return this.done = !0, this;
          let BH = (0, rH.hb)(HH),
            LH = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, rH.Q)(HH);
          let AH = this.normalize(BH);
          if (AH.length)
            for (let rH = 0, SH = LH;; rH++) {
              let HH = AH.charCodeAt(rH),
                hH = this.match(HH, SH, this.bufferPos + this.bufferStart);
              if (rH == AH.length - 1) {
                if (hH) return this.value = hH, this;
                break
              }
              SH == LH && rH < BH.length && BH.charCodeAt(rH) == HH && SH++
            }
        }
      }
      match(HH, BH, LH) {
        let AH = null;
        for (let rH = 0; rH < this.matches.length; rH += 2) {
          let BH = this.matches[rH],
            SH = !1;
          this.query.charCodeAt(BH) == HH && (BH == this.query.length - 1 ? AH = {
            from: this.matches[rH + 1],
            to: LH
          } : (this.matches[rH]++, SH = !0)), SH || (this.matches.splice(rH, 2), rH -= 2)
        }
        return this.query.charCodeAt(0) == HH && (1 == this.query.length ? AH = {
          from: BH,
          to: LH
        } : this.matches.push(1, BH)), AH && this.test && !this.test(AH.from, AH.to, this.buffer, this.bufferStart) && (AH = null), AH
      }
    }
    "undefined" != typeof Symbol && (tH.prototype[Symbol.iterator] = function() {
      return this
    });
    const zH = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      CH = "gm" + (null == /x/.unicode ? "" : "u");
    class EH {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : HH.length;
        if (this.text = HH, this.to = rH, this.curLine = "", this.done = !1, this.value = zH, /\\[sWDnr]|\n|\r|\[\^/.test(BH)) return new YH(HH, BH, LH, AH, rH);
        this.re = new RegExp(BH, CH + ((null === LH || void 0 === LH ? void 0 : LH.ignoreCase) ? "i" : "")), this.test = null === LH || void 0 === LH ? void 0 : LH.test, this.iter = HH.iter();
        let SH = HH.lineAt(AH);
        this.curLineStart = SH.from, this.matchPos = uH(HH, AH), this.getLine(this.curLineStart)
      }
      getLine(HH) {
        this.iter.next(HH), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let HH = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = HH;
          let BH = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (BH) {
            let LH = this.curLineStart + BH.index,
              AH = LH + BH[0].length;
            if (this.matchPos = uH(this.text, AH + (LH == AH ? 1 : 0)), LH == this.curLineStart + this.curLine.length && this.nextLine(), (LH < AH || LH > this.value.to) && (!this.test || this.test(LH, AH, BH))) return this.value = {
              from: LH,
              to: AH,
              match: BH
            }, this;
            HH = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), HH = 0
          }
        }
      }
    }
    const XH = new WeakMap;
    class GH {
      constructor(HH, BH) {
        this.from = HH, this.text = BH
      }
      get to() {
        return this.from + this.text.length
      }
      static get(HH, BH, LH) {
        let AH = XH.get(HH);
        if (!AH || AH.from >= LH || AH.to <= BH) {
          let AH = new GH(BH, HH.sliceString(BH, LH));
          return XH.set(HH, AH), AH
        }
        if (AH.from == BH && AH.to == LH) return AH;
        let {
          text: rH,
          from: SH
        } = AH;
        return SH > BH && (rH = HH.sliceString(BH, SH) + rH, SH = BH), AH.to < LH && (rH += HH.sliceString(AH.to, LH)), XH.set(HH, new GH(SH, rH)), new GH(BH, rH.slice(BH - SH, LH - SH))
      }
    }
    class YH {
      constructor(HH, BH, LH, AH, rH) {
        this.text = HH, this.to = rH, this.done = !1, this.value = zH, this.matchPos = uH(HH, AH), this.re = new RegExp(BH, CH + ((null === LH || void 0 === LH ? void 0 : LH.ignoreCase) ? "i" : "")), this.test = null === LH || void 0 === LH ? void 0 : LH.test, this.flat = GH.get(HH, AH, this.chunkEnd(AH + 5e3))
      }
      chunkEnd(HH) {
        return HH >= this.to ? this.to : this.text.lineAt(HH).to
      }
      next() {
        for (;;) {
          let HH = this.re.lastIndex = this.matchPos - this.flat.from,
            BH = this.re.exec(this.flat.text);
          if (BH && !BH[0] && BH.index == HH && (this.re.lastIndex = HH + 1, BH = this.re.exec(this.flat.text)), BH) {
            let HH = this.flat.from + BH.index,
              LH = HH + BH[0].length;
            if ((this.flat.to >= this.to || BH.index + BH[0].length <= this.flat.text.length - 10) && (!this.test || this.test(HH, LH, BH))) return this.value = {
              from: HH,
              to: LH,
              match: BH
            }, this.matchPos = uH(this.text, LH + (HH == LH ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = GH.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function uH(HH, BH) {
      if (BH >= HH.length) return BH;
      let LH, AH = HH.lineAt(BH);
      for (; BH < AH.to && (LH = AH.text.charCodeAt(BH - AH.from)) >= 56320 && LH < 57344;) BH++;
      return BH
    }
    "undefined" != typeof Symbol && (EH.prototype[Symbol.iterator] = YH.prototype[Symbol.iterator] = function() {
      return this
    });
    const QH = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      WH = rH.l.define({
        combine: HH => (0, rH.U)(HH, QH, {
          highlightWordAroundCursor: (HH, BH) => HH || BH,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function MH(HH) {
      let BH = [UH, TH];
      return HH && BH.push(WH.of(HH)), BH
    }
    const xH = AH.e.mark({
        class: "cm-selectionMatch"
      }),
      vH = AH.e.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function PH(HH, BH, LH, AH) {
      return (0 == LH || HH(BH.sliceDoc(LH - 1, LH)) != rH.h.Word) && (AH == BH.doc.length || HH(BH.sliceDoc(AH, AH + 1)) != rH.h.Word)
    }
    const TH = AH.p.fromClass(class {
        constructor(HH) {
          this.Gr = this.getDeco(HH)
        }
        update(HH) {
          (HH.selectionSet || HH.docChanged || HH.viewportChanged) && (this.Gr = this.getDeco(HH.view))
        }
        getDeco(HH) {
          let BH = HH.state.facet(WH),
            {
              state: LH
            } = HH,
            SH = LH.selection;
          if (SH.rW.length > 1) return AH.e.none;
          let hH, zH = SH.main,
            CH = null;
          if (zH.empty) {
            if (!BH.highlightWordAroundCursor) return AH.e.none;
            let HH = LH.wordAt(zH.head);
            if (!HH) return AH.e.none;
            CH = LH.charCategorizer(zH.head), hH = LH.sliceDoc(HH.from, HH.to)
          } else {
            let HH = zH.to - zH.from;
            if (HH < BH.minSelectionLength || HH > 200) return AH.e.none;
            if (BH.wholeWords) {
              if (hH = LH.sliceDoc(zH.from, zH.to), CH = LH.charCategorizer(zH.head), !PH(CH, LH, zH.from, zH.to) || ! function(HH, BH, LH, AH) {
                  return HH(BH.sliceDoc(LH, LH + 1)) == rH.h.Word && HH(BH.sliceDoc(AH - 1, AH)) == rH.h.Word
                }(CH, LH, zH.from, zH.to)) return AH.e.none
            } else if (hH = LH.sliceDoc(zH.from, zH.to), !hH) return AH.e.none
          }
          let EH = [];
          for (let rH of HH.iHH) {
            let HH = new tH(LH.doc, hH, rH.from, rH.to);
            for (; !HH.next().done;) {
              let {
                from: rH,
                to: SH
              } = HH.value;
              if ((!CH || PH(CH, LH, rH, SH)) && (zH.empty && rH <= zH.from && SH >= zH.to ? EH.push(vH.range(rH, SH)) : (rH >= zH.to || SH <= zH.from) && EH.push(xH.range(rH, SH)), EH.length > BH.maxMatches)) return AH.e.none
            }
          }
          return AH.e.set(EH)
        }
      }, {
        Gr: HH => HH.Gr
      }),
      UH = AH.h.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const VH = rH.l.define({
      combine: HH => (0, rH.U)(HH, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: HH => new HB(HH),
        scrollToMatch: HH => AH.h.scrollIntoView(HH)
      })
    });
    class OH {
      constructor(HH) {
        this.search = HH.search, this.caseSensitive = !!HH.caseSensitive, this.literal = !!HH.literal, this.regexp = !!HH.regexp, this.replace = HH.replace || "", this.valid = !!this.search && (!this.regexp || function(HH) {
          try {
            return new RegExp(HH, CH), !0
          } catch (BH) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!HH.wholeWord, this.test = HH.test
      }
      unquote(HH) {
        return this.literal ? HH : HH.replace(/\\([nrt\\])/g, ((HH, BH) => "n" == BH ? "\n" : "r" == BH ? "\r" : "t" == BH ? "\t" : "\\"))
      }
      eq(HH) {
        return this.search == HH.search && this.replace == HH.replace && this.caseSensitive == HH.caseSensitive && this.regexp == HH.regexp && this.wholeWord == HH.wholeWord && this.test == HH.test
      }
      create() {
        return this.regexp ? new lH(this) : new mH(this)
      }
      getCursor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = HH.doc ? HH : rH.k.create({
            doc: HH
          });
        return null == LH && (LH = AH.doc.length), this.regexp ? oH(this, AH, BH, LH) : kH(this, AH, BH, LH)
      }
    }
    class bH {
      constructor(HH) {
        this.spec = HH
      }
    }

    function kH(HH, BH, LH, AH) {
      let SH;
      var hH, zH;
      return HH.wholeWord && (hH = BH.doc, zH = BH.charCategorizer(BH.selection.main.head), SH = (HH, BH, LH, AH) => ((AH > HH || AH + LH.length < BH) && (AH = Math.max(0, HH - 2), LH = hH.sliceString(AH, Math.min(hH.length, BH + 2))), (zH(IH(LH, HH - AH)) != rH.h.Word || zH(fH(LH, HH - AH)) != rH.h.Word) && (zH(fH(LH, BH - AH)) != rH.h.Word || zH(IH(LH, BH - AH)) != rH.h.Word))), HH.test && (SH = function(HH, BH, LH) {
        return (AH, rH, SH, hH) => {
          if (LH && !LH(AH, rH, SH, hH)) return !1;
          let tH = AH >= hH && rH <= hH + SH.length ? SH.slice(AH - hH, rH - hH) : BH.doc.sliceString(AH, rH);
          return HH(tH, BH, AH, rH)
        }
      }(HH.test, BH, SH)), new tH(BH.doc, HH.unquoted, LH, AH, HH.caseSensitive ? void 0 : HH => HH.toLowerCase(), SH)
    }
    class mH extends bH {
      constructor(HH) {
        super(HH)
      }
      nextMatch(HH, BH, LH) {
        let AH = kH(this.spec, HH, LH, HH.doc.length).nextOverlapping();
        if (AH.done) {
          let LH = Math.min(HH.doc.length, BH + this.spec.unquoted.length);
          AH = kH(this.spec, HH, 0, LH).nextOverlapping()
        }
        return AH.done || AH.value.from == BH && AH.value.to == LH ? null : AH.value
      }
      prevMatchInRange(HH, BH, LH) {
        for (let AH = LH;;) {
          let LH = Math.max(BH, AH - 1e4 - this.spec.unquoted.length),
            rH = kH(this.spec, HH, LH, AH),
            SH = null;
          for (; !rH.nextOverlapping().done;) SH = rH.value;
          if (SH) return SH;
          if (LH == BH) return null;
          AH -= 1e4
        }
      }
      prevMatch(HH, BH, LH) {
        let AH = this.prevMatchInRange(HH, 0, BH);
        return AH || (AH = this.prevMatchInRange(HH, Math.max(0, LH - this.spec.unquoted.length), HH.doc.length)), !AH || AH.from == BH && AH.to == LH ? null : AH
      }
      getReplacement(HH) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(HH, BH) {
        let LH = kH(this.spec, HH, 0, HH.doc.length),
          AH = [];
        for (; !LH.next().done;) {
          if (AH.length >= BH) return null;
          AH.push(LH.value)
        }
        return AH
      }
      highlight(HH, BH, LH, AH) {
        let rH = kH(this.spec, HH, Math.max(0, BH - this.spec.unquoted.length), Math.min(LH + this.spec.unquoted.length, HH.doc.length));
        for (; !rH.next().done;) AH(rH.value.from, rH.value.to)
      }
    }

    function oH(HH, BH, LH, AH) {
      let SH;
      var hH;
      return HH.wholeWord && (hH = BH.charCategorizer(BH.selection.main.head), SH = (HH, BH, LH) => !LH[0].length || (hH(IH(LH.input, LH.index)) != rH.h.Word || hH(fH(LH.input, LH.index)) != rH.h.Word) && (hH(fH(LH.input, LH.index + LH[0].length)) != rH.h.Word || hH(IH(LH.input, LH.index + LH[0].length)) != rH.h.Word)), HH.test && (SH = function(HH, BH, LH) {
        return (AH, rH, SH) => (!LH || LH(AH, rH, SH)) && HH(SH[0], BH, AH, rH)
      }(HH.test, BH, SH)), new EH(BH.doc, HH.search, {
        ignoreCase: !HH.caseSensitive,
        test: SH
      }, LH, AH)
    }

    function IH(HH, BH) {
      return HH.slice((0, rH.$)(HH, BH, !1), BH)
    }

    function fH(HH, BH) {
      return HH.slice(BH, (0, rH.$)(HH, BH))
    }
    class lH extends bH {
      nextMatch(HH, BH, LH) {
        let AH = oH(this.spec, HH, LH, HH.doc.length).next();
        return AH.done && (AH = oH(this.spec, HH, 0, BH).next()), AH.done ? null : AH.value
      }
      prevMatchInRange(HH, BH, LH) {
        for (let AH = 1;; AH++) {
          let rH = Math.max(BH, LH - 1e4 * AH),
            SH = oH(this.spec, HH, rH, LH),
            hH = null;
          for (; !SH.next().done;) hH = SH.value;
          if (hH && (rH == BH || hH.from > rH + 10)) return hH;
          if (rH == BH) return null
        }
      }
      prevMatch(HH, BH, LH) {
        return this.prevMatchInRange(HH, 0, BH) || this.prevMatchInRange(HH, LH, HH.doc.length)
      }
      getReplacement(HH) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((BH, LH) => {
          if ("&" == LH) return HH.match[0];
          if ("$" == LH) return "$";
          for (let AH = LH.length; AH > 0; AH--) {
            let BH = +LH.slice(0, AH);
            if (BH > 0 && BH < HH.match.length) return HH.match[BH] + LH.slice(AH)
          }
          return BH
        }))
      }
      matchAll(HH, BH) {
        let LH = oH(this.spec, HH, 0, HH.doc.length),
          AH = [];
        for (; !LH.next().done;) {
          if (AH.length >= BH) return null;
          AH.push(LH.value)
        }
        return AH
      }
      highlight(HH, BH, LH, AH) {
        let rH = oH(this.spec, HH, Math.max(0, BH - 250), Math.min(LH + 250, HH.doc.length));
        for (; !rH.next().done;) AH(rH.value.from, rH.value.to)
      }
    }
    const KH = rH.B.define(),
      cH = rH.B.define(),
      eH = rH.E.define({
        create: HH => new qH(aH(HH).create(), null),
        update(HH, BH) {
          for (let LH of BH.effects) LH.is(KH) ? HH = new qH(LH.value.create(), HH.panel) : LH.is(cH) && (HH = new qH(HH.query, LH.value ? dH : null));
          return HH
        },
        provide: HH => AH.mb.from(HH, (HH => HH.panel))
      });
    class qH {
      constructor(HH, BH) {
        this.query = HH, this.panel = BH
      }
    }
    const gH = AH.e.mark({
        class: "cm-searchMatch"
      }),
      NH = AH.e.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      RH = AH.p.fromClass(class {
        constructor(HH) {
          this.view = HH, this.Gr = this.highlight(HH.state.field(eH))
        }
        update(HH) {
          let BH = HH.state.field(eH);
          (BH != HH.startState.field(eH) || HH.docChanged || HH.selectionSet || HH.viewportChanged) && (this.Gr = this.highlight(BH))
        }
        highlight(HH) {
          let {
            query: BH,
            panel: LH
          } = HH;
          if (!LH || !BH.spec.valid) return AH.e.none;
          let {
            view: SH
          } = this, hH = new rH.t;
          for (let AH = 0, rH = SH.iHH, tH = rH.length; AH < tH; AH++) {
            let {
              from: HH,
              to: LH
            } = rH[AH];
            for (; AH < tH - 1 && LH > rH[AH + 1].from - 500;) LH = rH[++AH].to;
            BH.highlight(SH.state, HH, LH, ((HH, BH) => {
              let LH = SH.state.selection.rW.some((LH => LH.from == HH && LH.to == BH));
              hH.add(HH, BH, LH ? NH : gH)
            }))
          }
          return hH.finish()
        }
      }, {
        Gr: HH => HH.Gr
      });

    function jH(HH) {
      return BH => {
        let LH = BH.state.field(eH, !1);
        return LH && LH.query.spec.valid ? HH(BH, LH) : iH(BH)
      }
    }
    const nH = jH(((HH, BH) => {
        let {
          query: LH
        } = BH, {
          to: AH
        } = HH.state.selection.main, SH = LH.nextMatch(HH.state, AH, AH);
        if (!SH) return !1;
        let hH = rH.i.single(SH.from, SH.to),
          tH = HH.state.facet(VH);
        return HH.dispatch({
          selection: hH,
          effects: [rB(HH, SH), tH.scrollToMatch(hH.main, HH)],
          userEvent: "select.search"
        }), JH(HH), !0
      })),
      FH = jH(((HH, BH) => {
        let {
          query: LH
        } = BH, {
          state: AH
        } = HH, {
          from: SH
        } = AH.selection.main, hH = LH.prevMatch(AH, SH, SH);
        if (!hH) return !1;
        let tH = rH.i.single(hH.from, hH.to),
          zH = HH.state.facet(VH);
        return HH.dispatch({
          selection: tH,
          effects: [rB(HH, hH), zH.scrollToMatch(tH.main, HH)],
          userEvent: "select.search"
        }), JH(HH), !0
      })),
      DH = jH(((HH, BH) => {
        let {
          query: LH
        } = BH, AH = LH.matchAll(HH.state, 1e3);
        return !(!AH || !AH.length) && (HH.dispatch({
          selection: rH.i.create(AH.map((HH => rH.i.range(HH.from, HH.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      wH = jH(((HH, BH) => {
        let {
          query: LH
        } = BH, {
          state: SH
        } = HH, {
          from: hH,
          to: tH
        } = SH.selection.main;
        if (SH.readOnly) return !1;
        let zH = LH.nextMatch(SH, hH, hH);
        if (!zH) return !1;
        let CH, EH, XH = zH,
          GH = [],
          YH = [];
        XH.from == hH && XH.to == tH && (EH = SH.toText(LH.getReplacement(XH)), GH.push({
          from: XH.from,
          to: XH.to,
          insert: EH
        }), XH = LH.nextMatch(SH, XH.from, XH.to), YH.push(AH.h.announce.of(SH.phrase("replaced match on line $", SH.doc.lineAt(hH).number) + ".")));
        let uH = HH.state.changes(GH);
        return XH && (CH = rH.i.single(XH.from, XH.to).map(uH), YH.push(rB(HH, XH)), YH.push(SH.facet(VH).scrollToMatch(CH.main, HH))), HH.dispatch({
          changes: uH,
          selection: CH,
          effects: YH,
          userEvent: "input.replace"
        }), !0
      })),
      ZH = jH(((HH, BH) => {
        let {
          query: LH
        } = BH;
        if (HH.state.readOnly) return !1;
        let rH = LH.matchAll(HH.state, 1e9).map((HH => {
          let {
            from: BH,
            to: AH
          } = HH;
          return {
            from: BH,
            to: AH,
            insert: LH.getReplacement(HH)
          }
        }));
        if (!rH.length) return !1;
        let SH = HH.state.phrase("replaced $ matches", rH.length) + ".";
        return HH.dispatch({
          changes: rH,
          effects: AH.h.announce.of(SH),
          userEvent: "input.replace.all"
        }), !0
      }));

    function dH(HH) {
      return HH.state.facet(VH).createPanel(HH)
    }

    function aH(HH, BH) {
      var LH, AH, rH, SH, hH;
      let tH = HH.selection.main,
        zH = tH.empty || tH.to > tH.from + 100 ? "" : HH.sliceDoc(tH.from, tH.to);
      if (BH && !zH) return BH;
      let CH = HH.facet(VH);
      return new OH({
        search: (null !== (LH = null === BH || void 0 === BH ? void 0 : BH.literal) && void 0 !== LH ? LH : CH.literal) ? zH : zH.replace(/\n/g, "\\n"),
        caseSensitive: null !== (AH = null === BH || void 0 === BH ? void 0 : BH.caseSensitive) && void 0 !== AH ? AH : CH.caseSensitive,
        literal: null !== (rH = null === BH || void 0 === BH ? void 0 : BH.literal) && void 0 !== rH ? rH : CH.literal,
        regexp: null !== (SH = null === BH || void 0 === BH ? void 0 : BH.regexp) && void 0 !== SH ? SH : CH.regexp,
        wholeWord: null !== (hH = null === BH || void 0 === BH ? void 0 : BH.wholeWord) && void 0 !== hH ? hH : CH.wholeWord
      })
    }

    function sH(HH) {
      let BH = (0, AH.A)(HH, dH);
      return BH && BH.dom.querySelector("[main-field]")
    }

    function JH(HH) {
      let BH = sH(HH);
      BH && BH == HH.root.activeElement && BH.select()
    }
    const iH = HH => {
        let BH = HH.state.field(eH, !1);
        if (BH && BH.panel) {
          let LH = sH(HH);
          if (LH && LH != HH.root.activeElement) {
            let AH = aH(HH.state, BH.query.spec);
            AH.valid && HH.dispatch({
              effects: KH.of(AH)
            }), LH.focus(), LH.select()
          }
        } else HH.dispatch({
          effects: [cH.of(!0), BH ? KH.of(aH(HH.state, BH.query.spec)) : rH.B.appendConfig.of(hB)]
        });
        return !0
      },
      pH = HH => {
        let BH = HH.state.field(eH, !1);
        if (!BH || !BH.panel) return !1;
        let LH = (0, AH.A)(HH, dH);
        return LH && LH.dom.contains(HH.root.activeElement) && HH.focus(), HH.dispatch({
          effects: cH.of(!1)
        }), !0
      },
      yH = [{
        key: "Mod-f",
        run: iH,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: nH,
        shift: FH,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: nH,
        shift: FH,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: pH,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: HH => {
          let {
            state: BH,
            dispatch: LH
          } = HH, AH = BH.selection;
          if (AH.rW.length > 1 || AH.main.empty) return !1;
          let {
            from: SH,
            to: hH
          } = AH.main, zH = [], CH = 0;
          for (let EH = new tH(BH.doc, BH.sliceDoc(SH, hH)); !EH.next().done;) {
            if (zH.length > 1e3) return !1;
            EH.value.from == SH && (CH = zH.length), zH.push(rH.i.range(EH.value.from, EH.value.to))
          }
          return LH(BH.update({
            selection: rH.i.create(zH, CH),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: HH => {
          let {
            state: BH
          } = HH, LH = String(BH.doc.lineAt(HH.state.selection.main.head).number), {
            close: SH,
            result: hH
          } = (0, AH.jb)(HH, {
            label: BH.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: LH
            },
            focus: !0,
            submitLabel: BH.phrase("go")
          });
          return hH.then((LH => {
            let hH = LH && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(LH.elements.line.value);
            if (!hH) return void HH.dispatch({
              effects: SH
            });
            let tH = BH.doc.lineAt(BH.selection.main.head),
              [, zH, CH, EH, XH] = hH,
              GH = EH ? +EH.slice(1) : 0,
              YH = CH ? +CH : tH.number;
            if (CH && XH) {
              let HH = YH / 100;
              zH && (HH = HH * ("-" == zH ? -1 : 1) + tH.number / BH.doc.lines), YH = Math.round(BH.doc.lines * HH)
            } else CH && zH && (YH = YH * ("-" == zH ? -1 : 1) + tH.number);
            let uH = BH.doc.line(Math.max(1, Math.min(BH.doc.lines, YH))),
              QH = rH.i.cursor(uH.from + Math.max(0, Math.min(GH, uH.length)));
            HH.dispatch({
              effects: [SH, AH.h.scrollIntoView(QH.from, {
                y: "center"
              })],
              selection: QH
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: HH => {
          let {
            state: BH,
            dispatch: LH
          } = HH, {
            rW: SH
          } = BH.selection;
          if (SH.some((HH => HH.from === HH.to))) return (HH => {
            let {
              state: BH,
              dispatch: LH
            } = HH, {
              selection: AH
            } = BH, SH = rH.i.create(AH.rW.map((HH => BH.wordAt(HH.head) || rH.i.cursor(HH.head))), AH.mainIndex);
            return !SH.eq(AH) && (LH(BH.update({
              selection: SH
            })), !0)
          })({
            state: BH,
            dispatch: LH
          });
          let hH = BH.sliceDoc(SH[0].from, SH[0].to);
          if (BH.selection.rW.some((HH => BH.sliceDoc(HH.from, HH.to) != hH))) return !1;
          let zH = function(HH, BH) {
            let {
              main: LH,
              rW: AH
            } = HH.selection, rH = HH.wordAt(LH.head), SH = rH && rH.from == LH.from && rH.to == LH.to;
            for (let hH = !1, zH = new tH(HH.doc, BH, AH[AH.length - 1].to);;) {
              if (zH.next(), !zH.done) {
                if (hH && AH.some((HH => HH.from == zH.value.from))) continue;
                if (SH) {
                  let BH = HH.wordAt(zH.value.from);
                  if (!BH || BH.from != zH.value.from || BH.to != zH.value.to) continue
                }
                return zH.value
              }
              if (hH) return null;
              zH = new tH(HH.doc, BH, 0, Math.max(0, AH[AH.length - 1].from - 1)), hH = !0
            }
          }(BH, hH);
          return !!zH && (LH(BH.update({
            selection: BH.selection.addRange(rH.i.range(zH.from, zH.to), !1),
            effects: AH.h.scrollIntoView(zH.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class HB {
      constructor(HH) {
        this.view = HH;
        let BH = this.query = HH.state.field(eH).query.spec;

        function LH(HH, BH, LH) {
          return (0, SH.d)("button", {
            class: "cm-button",
            name: HH,
            onclick: BH,
            type: "button"
          }, LH)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, SH.d)("input", {
          value: BH.search,
          placeholder: BB(HH, "Find"),
          "aria-label": BB(HH, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, SH.d)("input", {
          value: BH.replace,
          placeholder: BB(HH, "Replace"),
          "aria-label": BB(HH, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, SH.d)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: BH.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, SH.d)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: BH.regexp,
          onchange: this.commit
        }), this.wordField = (0, SH.d)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: BH.wholeWord,
          onchange: this.commit
        }), this.dom = (0, SH.d)("div", {
          onkeydown: HH => this.keydown(HH),
          class: "cm-search"
        }, [this.searchField, LH("next", (() => nH(HH)), [BB(HH, "next")]), LH("prev", (() => FH(HH)), [BB(HH, "previous")]), LH("select", (() => DH(HH)), [BB(HH, "all")]), (0, SH.d)("label", null, [this.caseField, BB(HH, "match case")]), (0, SH.d)("label", null, [this.reField, BB(HH, "regexp")]), (0, SH.d)("label", null, [this.wordField, BB(HH, "by word")]), ...HH.state.readOnly ? [] : [(0, SH.d)("br"), this.replaceField, LH("replace", (() => wH(HH)), [BB(HH, "replace")]), LH("replaceAll", (() => ZH(HH)), [BB(HH, "replace all")])], (0, SH.d)("button", {
          name: "close",
          onclick: () => pH(HH),
          "aria-label": BB(HH, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let HH = new OH({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        HH.eq(this.query) || (this.query = HH, this.view.dispatch({
          effects: KH.of(HH)
        }))
      }
      keydown(HH) {
        (0, AH.hb)(this.view, HH, "search-panel") ? HH.preventDefault(): 13 == HH.keyCode && HH.target == this.searchField ? (HH.preventDefault(), (HH.shiftKey ? FH : nH)(this.view)) : 13 == HH.keyCode && HH.target == this.replaceField && (HH.preventDefault(), wH(this.view))
      }
      update(HH) {
        for (let BH of HH.transactions)
          for (let HH of BH.effects) HH.is(KH) && !HH.value.eq(this.query) && this.setQuery(HH.value)
      }
      setQuery(HH) {
        this.query = HH, this.searchField.value = HH.search, this.replaceField.value = HH.replace, this.caseField.checked = HH.caseSensitive, this.reField.checked = HH.regexp, this.wordField.checked = HH.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(VH).top
      }
    }

    function BB(HH, BH) {
      return HH.state.phrase(BH)
    }
    const LB = 30,
      AB = /[\s\.,:;?!]/;

    function rB(HH, BH) {
      let {
        from: LH,
        to: rH
      } = BH, SH = HH.state.doc.lineAt(LH), hH = HH.state.doc.lineAt(rH).to, tH = Math.max(SH.from, LH - LB), zH = Math.min(hH, rH + LB), CH = HH.state.sliceDoc(tH, zH);
      if (tH != SH.from)
        for (let AH = 0; AH < LB; AH++)
          if (!AB.test(CH[AH + 1]) && AB.test(CH[AH])) {
            CH = CH.slice(AH);
            break
          } if (zH != hH)
        for (let AH = CH.length - 1; AH > CH.length - LB; AH--)
          if (!AB.test(CH[AH - 1]) && AB.test(CH[AH])) {
            CH = CH.slice(0, AH);
            break
          } return AH.h.announce.of(`${HH.state.phrase("current match")}. ${CH} ${HH.state.phrase("on line")} ${SH.number}.`)
    }
    const SB = AH.h.baseTheme({
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
      hB = [eH, rH.p.low(RH), SB]
  },
  44823: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => lH,
      g: () => CB,
      h: () => br,
      l: () => Sh,
      p: () => JB,
      r: () => IH,
      t: () => oS,
      x: () => Jr,
      y: () => SS,
      A: () => JS,
      D: () => dS,
      G: () => Eh,
      N: () => MS,
      J: () => Ih,
      Q: () => YS,
      U: () => ZS,
      Y: () => cr,
      Z: () => bh,
      $: () => ZB,
      cb: () => TS,
      gb: () => bS,
      hb: () => gr,
      jb: () => Bh,
      mb: () => Hh,
      pb: () => RS
    });
    for (var AH = LH(44818), rH = LH(44828), SH = {
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
      }, hH = {
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
      }, tH = "undefined" != typeof navigator && /Mac/.test(navigator.platform), zH = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), CH = 0; CH < 10; CH++) SH[48 + CH] = SH[96 + CH] = String(CH);
    for (CH = 1; CH <= 24; CH++) SH[CH + 111] = "F" + CH;
    for (CH = 65; CH <= 90; CH++) SH[CH] = String.fromCharCode(CH + 32), hH[CH] = String.fromCharCode(CH);
    for (var EH in SH) hH.hasOwnProperty(EH) || (hH[EH] = SH[EH]);
    var XH = LH(44834);
    let GH = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      YH = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const uH = /Edge\/(\d+)/.exec(GH.userAgent),
      QH = /MSIE \d/.test(GH.userAgent),
      WH = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(GH.userAgent),
      MH = !!(QH || WH || uH),
      xH = !MH && /gecko\/(\d+)/i.test(GH.userAgent),
      vH = !MH && /Chrome\/(\d+)/.exec(GH.userAgent),
      PH = "webkitFontSmoothing" in YH.documentElement.style,
      TH = !MH && /Apple Computer/.test(GH.vendor),
      UH = TH && (/Mobile\/\w+/.test(GH.userAgent) || GH.maxTouchPoints > 2);
    var VH = {
      mac: UH || /Mac/.test(GH.platform),
      windows: /Win/.test(GH.platform),
      linux: /Linux|X11/.test(GH.platform),
      ie: MH,
      ie_version: QH ? YH.documentMode || 6 : WH ? +WH[1] : uH ? +uH[1] : 0,
      gecko: xH,
      gecko_version: xH ? +(/Firefox\/(\d+)/.exec(GH.userAgent) || [0, 0])[1] : 0,
      chrome: !!vH,
      chrome_version: vH ? +vH[1] : 0,
      ios: UH,
      android: /Android\b/.test(GH.userAgent),
      webkit: PH,
      webkit_version: PH ? +(/\bAppleWebKit\/(\d+)/.exec(GH.userAgent) || [0, 0])[1] : 0,
      safari: TH,
      safari_version: TH ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(GH.userAgent) || [0, 0])[1] : 0,
      tabSize: null != YH.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function OH(HH, BH) {
      for (let LH in HH) "class" == LH && BH.class ? BH.class += " " + HH.class : "style" == LH && BH.style ? BH.style += ";" + HH.style : BH[LH] = HH[LH];
      return BH
    }
    const bH = Object.create(null);

    function kH(HH, BH, LH) {
      if (HH == BH) return !0;
      HH || (HH = bH), BH || (BH = bH);
      let AH = Object.keys(HH),
        rH = Object.keys(BH);
      if (AH.length - (LH && AH.indexOf(LH) > -1 ? 1 : 0) != rH.length - (LH && rH.indexOf(LH) > -1 ? 1 : 0)) return !1;
      for (let SH of AH)
        if (SH != LH && (-1 == rH.indexOf(SH) || HH[SH] !== BH[SH])) return !1;
      return !0
    }

    function mH(HH, BH, LH) {
      let AH = !1;
      if (BH)
        for (let rH in BH) LH && rH in LH || (AH = !0, "style" == rH ? HH.style.cssText = "" : HH.removeAttribute(rH));
      if (LH)
        for (let rH in LH) BH && BH[rH] == LH[rH] || (AH = !0, "style" == rH ? HH.style.cssText = LH[rH] : HH.setAttribute(rH, LH[rH]));
      return AH
    }

    function oH(HH) {
      let BH = Object.create(null);
      for (let LH = 0; LH < HH.attributes.length; LH++) {
        let AH = HH.attributes[LH];
        BH[AH.name] = AH.value
      }
      return BH
    }
    class IH {
      eq(HH) {
        return !1
      }
      updateDOM(HH, BH, LH) {
        return !1
      }
      compare(HH) {
        return this == HH || this.constructor == HH.constructor && this.eq(HH)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(HH) {
        return !0
      }
      coordsAt(HH, BH, LH) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(HH) {}
    }
    var fH = function(HH) {
      return HH[HH.Text = 0] = "Text", HH[HH.WidgetBefore = 1] = "WidgetBefore", HH[HH.WidgetAfter = 2] = "WidgetAfter", HH[HH.WidgetRange = 3] = "WidgetRange", HH
    }(fH || (fH = {}));
    class lH extends AH.A {
      constructor(HH, BH, LH, AH) {
        super(), this.startSide = HH, this.endSide = BH, this.widget = LH, this.spec = AH
      }
      get heightRelevant() {
        return !1
      }
      static mark(HH) {
        return new KH(HH)
      }
      static widget(HH) {
        let BH = Math.max(-1e4, Math.min(1e4, HH.side || 0)),
          LH = !!HH.block;
        return BH += LH && !HH.inlineOrder ? BH > 0 ? 3e8 : -4e8 : BH > 0 ? 1e8 : -1e8, new eH(HH, BH, BH, LH, HH.widget || null, !1)
      }
      static replace(HH) {
        let BH, LH, AH = !!HH.block;
        if (HH.isBlockGap) BH = -5e8, LH = 4e8;
        else {
          let {
            start: rH,
            end: SH
          } = qH(HH, AH);
          BH = (rH ? AH ? -3e8 : -1 : 5e8) - 1, LH = 1 + (SH ? AH ? 2e8 : 1 : -6e8)
        }
        return new eH(HH, BH, LH, AH, HH.widget || null, !0)
      }
      static line(HH) {
        return new cH(HH)
      }
      static set(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return AH.x.of(HH, BH)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    lH.none = AH.x.empty;
    class KH extends lH {
      constructor(HH) {
        let {
          start: BH,
          end: LH
        } = qH(HH);
        super(BH ? -1 : 5e8, LH ? 1 : -6e8, null, HH), this.tagName = HH.tagName || "span", this.attrs = HH.class && HH.attributes ? OH(HH.attributes, {
          class: HH.class
        }) : HH.class ? {
          class: HH.class
        } : HH.attributes || bH
      }
      eq(HH) {
        return this == HH || HH instanceof KH && this.tagName == HH.tagName && kH(this.attrs, HH.attrs)
      }
      range(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH;
        if (HH >= BH) throw new RangeError("Mark decorations may not be empty");
        return super.range(HH, BH)
      }
    }
    KH.prototype.point = !1;
    class cH extends lH {
      constructor(HH) {
        super(-2e8, -2e8, null, HH)
      }
      eq(HH) {
        return HH instanceof cH && this.spec.class == HH.spec.class && kH(this.spec.attributes, HH.spec.attributes)
      }
      range(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH;
        if (BH != HH) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(HH, BH)
      }
    }
    cH.prototype.mapMode = AH.n.TrackBefore, cH.prototype.point = !0;
    class eH extends lH {
      constructor(HH, BH, LH, rH, SH, hH) {
        super(BH, LH, SH, HH), this.block = rH, this.isReplace = hH, this.mapMode = rH ? BH <= 0 ? AH.n.TrackBefore : AH.n.TrackAfter : AH.n.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? fH.WidgetRange : this.startSide <= 0 ? fH.WidgetBefore : fH.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(HH) {
        return HH instanceof eH && (BH = this.widget, LH = HH.widget, BH == LH || !!(BH && LH && BH.compare(LH))) && this.block == HH.block && this.startSide == HH.startSide && this.endSide == HH.endSide;
        var BH, LH
      }
      range(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH;
        if (this.isReplace && (HH > BH || HH == BH && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && BH != HH) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(HH, BH)
      }
    }

    function qH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: LH,
          inclusiveEnd: AH
        } = HH;
      return null == LH && (LH = HH.inclusive), null == AH && (AH = HH.inclusive), {
        start: null !== LH && void 0 !== LH ? LH : BH,
        end: null !== AH && void 0 !== AH ? AH : BH
      }
    }

    function gH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        rH = LH.length - 1;
      rH >= 0 && LH[rH] + AH >= HH ? LH[rH] = Math.max(LH[rH], BH) : LH.push(HH, BH)
    }
    eH.prototype.point = !0;
    class NH extends AH.A {
      constructor(HH, BH) {
        super(), this.tagName = HH, this.attributes = BH
      }
      eq(HH) {
        return HH == this || HH instanceof NH && this.tagName == HH.tagName && kH(this.attributes, HH.attributes)
      }
      static create(HH) {
        return new NH(HH.tagName, HH.attributes || bH)
      }
      static set(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return AH.x.of(HH, BH)
      }
    }

    function RH(HH) {
      let BH;
      return BH = 11 == HH.nodeType ? HH.getSelection ? HH : HH.ownerDocument : HH, BH.getSelection()
    }

    function jH(HH, BH) {
      return !!BH && (HH == BH || HH.contains(1 != BH.nodeType ? BH.parentNode : BH))
    }

    function nH(HH, BH) {
      if (!BH.anchorNode) return !1;
      try {
        return jH(HH, BH.anchorNode)
      } catch (LH) {
        return !1
      }
    }

    function FH(HH) {
      return 3 == HH.nodeType ? AB(HH, 0, HH.nodeValue.length).getClientRects() : 1 == HH.nodeType ? HH.getClientRects() : []
    }

    function DH(HH, BH, LH, AH) {
      return !!LH && (dH(HH, BH, LH, AH, -1) || dH(HH, BH, LH, AH, 1))
    }

    function wH(HH) {
      for (var BH = 0;; BH++)
        if (!(HH = HH.previousSibling)) return BH
    }

    function ZH(HH) {
      return 1 == HH.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(HH.nodeName)
    }

    function dH(HH, BH, LH, AH, rH) {
      for (;;) {
        if (HH == LH && BH == AH) return !0;
        if (BH == (rH < 0 ? 0 : aH(HH))) {
          if ("DIV" == HH.nodeName) return !1;
          let LH = HH.parentNode;
          if (!LH || 1 != LH.nodeType) return !1;
          BH = wH(HH) + (rH < 0 ? 0 : 1), HH = LH
        } else {
          if (1 != HH.nodeType) return !1;
          if (1 == (HH = HH.childNodes[BH + (rH < 0 ? -1 : 0)]).nodeType && "false" == HH.contentEditable) return !1;
          BH = rH < 0 ? aH(HH) : 0
        }
      }
    }

    function aH(HH) {
      return 3 == HH.nodeType ? HH.nodeValue.length : HH.childNodes.length
    }

    function sH(HH, BH) {
      let LH = BH ? HH.left : HH.right;
      return {
        left: LH,
        right: LH,
        top: HH.top,
        bottom: HH.bottom
      }
    }

    function JH(HH) {
      let BH = HH.visualViewport;
      return BH ? {
        left: 0,
        right: BH.width,
        top: 0,
        bottom: BH.height
      } : {
        left: 0,
        right: HH.innerWidth,
        top: 0,
        bottom: HH.innerHeight
      }
    }

    function iH(HH, BH) {
      let LH = BH.width / HH.offsetWidth,
        AH = BH.height / HH.offsetHeight;
      return (LH > .995 && LH < 1.005 || !isFinite(LH) || Math.abs(BH.width - HH.offsetWidth) < 1) && (LH = 1), (AH > .995 && AH < 1.005 || !isFinite(AH) || Math.abs(BH.height - HH.offsetHeight) < 1) && (AH = 1), {
        scaleX: LH,
        scaleY: AH
      }
    }

    function pH(HH) {
      let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        LH = HH.ownerDocument,
        AH = null,
        rH = null;
      for (let SH = HH.parentNode; SH && (SH != LH.body && (BH && !AH || !rH));)
        if (1 == SH.nodeType) !rH && SH.scrollHeight > SH.clientHeight && (rH = SH), BH && !AH && SH.scrollWidth > SH.clientWidth && (AH = SH), SH = SH.assignedSlot || SH.parentNode;
        else {
          if (11 != SH.nodeType) break;
          SH = SH.host
        } return {
        x: AH,
        y: rH
      }
    }
    NH.prototype.startSide = NH.prototype.endSide = -1;
    class yH {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(HH) {
        return this.anchorNode == HH.anchorNode && this.anchorOffset == HH.anchorOffset && this.focusNode == HH.focusNode && this.focusOffset == HH.focusOffset
      }
      setRange(HH) {
        let {
          anchorNode: BH,
          focusNode: LH
        } = HH;
        this.set(BH, Math.min(HH.anchorOffset, BH ? aH(BH) : 0), LH, Math.min(HH.focusOffset, LH ? aH(LH) : 0))
      }
      set(HH, BH, LH, AH) {
        this.anchorNode = HH, this.anchorOffset = BH, this.focusNode = LH, this.focusOffset = AH
      }
    }
    let HB, BB = null;

    function LB(HH) {
      if (HH.setActive) return HH.setActive();
      if (BB) return HH.focus(BB);
      let BH = [];
      for (let LH = HH; LH && (BH.push(LH, LH.scrollTop, LH.scrollLeft), LH != LH.ownerDocument); LH = LH.parentNode);
      if (HH.focus(null == BB ? {
          get preventScroll() {
            return BB = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !BB) {
        BB = !1;
        for (let HH = 0; HH < BH.length;) {
          let LH = BH[HH++],
            AH = BH[HH++],
            rH = BH[HH++];
          LH.scrollTop != AH && (LH.scrollTop = AH), LH.scrollLeft != rH && (LH.scrollLeft = rH)
        }
      }
    }

    function AB(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BH,
        AH = HB || (HB = document.createRange());
      return AH.setEnd(HH, LH), AH.setStart(HH, BH), AH
    }

    function rB(HH, BH, LH, AH) {
      let rH = {
        key: BH,
        code: BH,
        keyCode: LH,
        which: LH,
        cancelable: !0
      };
      AH && ({
        altKey: rH.altKey,
        ctrlKey: rH.ctrlKey,
        shiftKey: rH.shiftKey,
        metaKey: rH.metaKey
      } = AH);
      let SH = new KeyboardEvent("keydown", rH);
      SH.synthetic = !0, HH.dispatchEvent(SH);
      let hH = new KeyboardEvent("keyup", rH);
      return hH.synthetic = !0, HH.dispatchEvent(hH), SH.defaultPrevented || hH.defaultPrevented
    }

    function SB(HH) {
      return HH instanceof Window ? HH.pageYOffset > Math.max(0, HH.document.documentElement.scrollHeight - HH.innerHeight - 4) : HH.scrollTop > Math.max(1, HH.scrollHeight - HH.clientHeight - 4)
    }

    function hB(HH, BH) {
      for (let LH = HH, AH = BH;;) {
        if (3 == LH.nodeType && AH > 0) return {
          node: LH,
          offset: AH
        };
        if (1 == LH.nodeType && AH > 0) {
          if ("false" == LH.contentEditable) return null;
          LH = LH.childNodes[AH - 1], AH = aH(LH)
        } else {
          if (!LH.parentNode || ZH(LH)) return null;
          AH = wH(LH), LH = LH.parentNode
        }
      }
    }

    function tB(HH, BH) {
      for (let LH = HH, AH = BH;;) {
        if (3 == LH.nodeType && AH < LH.nodeValue.length) return {
          node: LH,
          offset: AH
        };
        if (1 == LH.nodeType && AH < LH.childNodes.length) {
          if ("false" == LH.contentEditable) return null;
          LH = LH.childNodes[AH], AH = 0
        } else {
          if (!LH.parentNode || ZH(LH)) return null;
          AH = wH(LH) + 1, LH = LH.parentNode
        }
      }
    }
    VH.safari && VH.safari_version >= 26 && (BB = !1);
    class zB {
      constructor(HH, BH) {
        let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = HH, this.offset = BH, this.precise = LH
      }
      static before(HH, BH) {
        return new zB(HH.parentNode, wH(HH), BH)
      }
      static after(HH, BH) {
        return new zB(HH.parentNode, wH(HH) + 1, BH)
      }
    }
    var CB = function(HH) {
      return HH[HH.LTR = 0] = "LTR", HH[HH.RTL = 1] = "RTL", HH
    }(CB || (CB = {}));
    const EB = CB.LTR,
      XB = CB.RTL;

    function GB(HH) {
      let BH = [];
      for (let LH = 0; LH < HH.length; LH++) BH.push(1 << +HH[LH]);
      return BH
    }
    const YB = GB("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      uB = GB("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      QB = Object.create(null),
      WB = [];
    for (let fh of ["()", "[]", "{}"]) {
      let HH = fh.charCodeAt(0),
        BH = fh.charCodeAt(1);
      QB[HH] = BH, QB[BH] = -HH
    }

    function MB(HH) {
      return HH <= 247 ? YB[HH] : 1424 <= HH && HH <= 1524 ? 2 : 1536 <= HH && HH <= 1785 ? uB[HH - 1536] : 1774 <= HH && HH <= 2220 ? 4 : 8192 <= HH && HH <= 8204 ? 256 : 64336 <= HH && HH <= 65023 ? 4 : 1
    }
    const xB = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class vB {
      get dir() {
        return this.level % 2 ? XB : EB
      }
      constructor(HH, BH, LH) {
        this.from = HH, this.to = BH, this.level = LH
      }
      side(HH, BH) {
        return this.dir == BH == HH ? this.to : this.from
      }
      forward(HH, BH) {
        return HH == (this.dir == BH)
      }
      static find(HH, BH, LH, AH) {
        let rH = -1;
        for (let SH = 0; SH < HH.length; SH++) {
          let hH = HH[SH];
          if (hH.from <= BH && hH.to >= BH) {
            if (hH.level == LH) return SH;
            (rH < 0 || (0 != AH ? AH < 0 ? hH.from < BH : hH.to > BH : HH[rH].level > hH.level)) && (rH = SH)
          }
        }
        if (rH < 0) throw new RangeError("Index out of range");
        return rH
      }
    }

    function PB(HH, BH) {
      if (HH.length != BH.length) return !1;
      for (let LH = 0; LH < HH.length; LH++) {
        let AH = HH[LH],
          rH = BH[LH];
        if (AH.from != rH.from || AH.to != rH.to || AH.direction != rH.direction || !PB(AH.inner, rH.inner)) return !1
      }
      return !0
    }
    const TB = [];

    function UB(HH, BH, LH, AH, rH, SH, hH) {
      let tH = AH % 2 ? 2 : 1;
      if (AH % 2 == rH % 2)
        for (let zH = BH, CH = 0; zH < LH;) {
          let BH = !0,
            EH = !1;
          if (CH == SH.length || zH < SH[CH].from) {
            let HH = TB[zH];
            HH != tH && (BH = !1, EH = 16 == HH)
          }
          let XH = BH || 1 != tH ? null : [],
            GH = BH ? AH : AH + 1,
            YH = zH;
          HH: for (;;)
            if (CH < SH.length && YH == SH[CH].from) {
              if (EH) break HH;
              let uH = SH[CH];
              if (!BH)
                for (let HH = uH.to, BH = CH + 1;;) {
                  if (HH == LH) break HH;
                  if (!(BH < SH.length && SH[BH].from == HH)) {
                    if (TB[HH] == tH) break HH;
                    break
                  }
                  HH = SH[BH++].to
                }
              if (CH++, XH) XH.push(uH);
              else {
                uH.from > zH && hH.push(new vB(zH, uH.from, GH)), VB(HH, uH.direction == EB != !(GH % 2) ? AH + 1 : AH, rH, uH.inner, uH.from, uH.to, hH), zH = uH.to
              }
              YH = uH.to
            } else {
              if (YH == LH || (BH ? TB[YH] != tH : TB[YH] == tH)) break;
              YH++
            } XH ? UB(HH, zH, YH, AH + 1, rH, XH, hH) : zH < YH && hH.push(new vB(zH, YH, GH)), zH = YH
        } else
          for (let zH = LH, CH = SH.length; zH > BH;) {
            let LH = !0,
              EH = !1;
            if (!CH || zH > SH[CH - 1].to) {
              let HH = TB[zH - 1];
              HH != tH && (LH = !1, EH = 16 == HH)
            }
            let XH = LH || 1 != tH ? null : [],
              GH = LH ? AH : AH + 1,
              YH = zH;
            HH: for (;;)
              if (CH && YH == SH[CH - 1].to) {
                if (EH) break HH;
                let uH = SH[--CH];
                if (!LH)
                  for (let HH = uH.from, LH = CH;;) {
                    if (HH == BH) break HH;
                    if (!LH || SH[LH - 1].to != HH) {
                      if (TB[HH - 1] == tH) break HH;
                      break
                    }
                    HH = SH[--LH].from
                  }
                if (XH) XH.push(uH);
                else {
                  uH.to < zH && hH.push(new vB(uH.to, zH, GH)), VB(HH, uH.direction == EB != !(GH % 2) ? AH + 1 : AH, rH, uH.inner, uH.from, uH.to, hH), zH = uH.from
                }
                YH = uH.from
              } else {
                if (YH == BH || (LH ? TB[YH - 1] != tH : TB[YH - 1] == tH)) break;
                YH--
              } XH ? UB(HH, YH, zH, AH + 1, rH, XH, hH) : YH < zH && hH.push(new vB(YH, zH, GH)), zH = YH
          }
    }

    function VB(HH, BH, LH, AH, rH, SH, hH) {
      let tH = BH % 2 ? 2 : 1;
      ! function(HH, BH, LH, AH, rH) {
        for (let SH = 0; SH <= AH.length; SH++) {
          let hH = SH ? AH[SH - 1].to : BH,
            tH = SH < AH.length ? AH[SH].from : LH,
            zH = SH ? 256 : rH;
          for (let BH = hH, LH = zH, AH = zH; BH < tH; BH++) {
            let rH = MB(HH.charCodeAt(BH));
            512 == rH ? rH = LH : 8 == rH && 4 == AH && (rH = 16), TB[BH] = 4 == rH ? 2 : rH, 7 & rH && (AH = rH), LH = rH
          }
          for (let HH = hH, BH = zH, AH = zH; HH < tH; HH++) {
            let rH = TB[HH];
            if (128 == rH) HH < tH - 1 && BH == TB[HH + 1] && 24 & BH ? rH = TB[HH] = BH : TB[HH] = 256;
            else if (64 == rH) {
              let rH = HH + 1;
              for (; rH < tH && 64 == TB[rH];) rH++;
              let SH = HH && 8 == BH || rH < LH && 8 == TB[rH] ? 1 == AH ? 1 : 8 : 256;
              for (let BH = HH; BH < rH; BH++) TB[BH] = SH;
              HH = rH - 1
            } else 8 == rH && 1 == AH && (TB[HH] = 1);
            BH = rH, 7 & rH && (AH = rH)
          }
        }
      }(HH, rH, SH, AH, tH),
      function(HH, BH, LH, AH, rH) {
        let SH = 1 == rH ? 2 : 1;
        for (let hH = 0, tH = 0, zH = 0; hH <= AH.length; hH++) {
          let CH = hH ? AH[hH - 1].to : BH,
            EH = hH < AH.length ? AH[hH].from : LH;
          for (let BH, LH, AH, hH = CH; hH < EH; hH++)
            if (LH = QB[BH = HH.charCodeAt(hH)])
              if (LH < 0) {
                for (let HH = tH - 3; HH >= 0; HH -= 3)
                  if (WB[HH + 1] == -LH) {
                    let BH = WB[HH + 2],
                      LH = 2 & BH ? rH : 4 & BH ? 1 & BH ? SH : rH : 0;
                    LH && (TB[hH] = TB[WB[HH]] = LH), tH = HH;
                    break
                  }
              } else {
                if (189 == WB.length) break;
                WB[tH++] = hH, WB[tH++] = BH, WB[tH++] = zH
              }
          else if (2 == (AH = TB[hH]) || 1 == AH) {
            let HH = AH == rH;
            zH = HH ? 0 : 1;
            for (let BH = tH - 3; BH >= 0; BH -= 3) {
              let LH = WB[BH + 2];
              if (2 & LH) break;
              if (HH) WB[BH + 2] |= 2;
              else {
                if (4 & LH) break;
                WB[BH + 2] |= 4
              }
            }
          }
        }
      }(HH, rH, SH, AH, tH),
      function(HH, BH, LH, AH) {
        for (let rH = 0, SH = AH; rH <= LH.length; rH++) {
          let hH = rH ? LH[rH - 1].to : HH,
            tH = rH < LH.length ? LH[rH].from : BH;
          for (let zH = hH; zH < tH;) {
            let hH = TB[zH];
            if (256 == hH) {
              let hH = zH + 1;
              for (;;)
                if (hH == tH) {
                  if (rH == LH.length) break;
                  hH = LH[rH++].to, tH = rH < LH.length ? LH[rH].from : BH
                } else {
                  if (256 != TB[hH]) break;
                  hH++
                } let CH = 1 == SH,
                EH = CH == (1 == (hH < BH ? TB[hH] : AH)) ? CH ? 1 : 2 : AH;
              for (let BH = hH, AH = rH, SH = AH ? LH[AH - 1].to : HH; BH > zH;) BH == SH && (BH = LH[--AH].from, SH = AH ? LH[AH - 1].to : HH), TB[--BH] = EH;
              zH = hH
            } else SH = hH, zH++
          }
        }
      }(rH, SH, AH, tH), UB(HH, rH, SH, BH, LH, AH, hH)
    }

    function OB(HH, BH, LH) {
      if (!HH) return [new vB(0, 0, BH == XB ? 1 : 0)];
      if (BH == EB && !LH.length && !xB.test(HH)) return bB(HH.length);
      if (LH.length)
        for (; HH.length > TB.length;) TB[TB.length] = 256;
      let AH = [],
        rH = BH == EB ? 0 : 1;
      return VB(HH, rH, rH, LH, 0, HH.length, AH), AH
    }

    function bB(HH) {
      return [new vB(0, HH, 0)]
    }
    let kB = "";

    function mB(HH, BH, LH, rH, SH) {
      var hH;
      let tH = rH.head - HH.from,
        zH = vB.find(BH, tH, null !== (hH = rH.bidiLevel) && void 0 !== hH ? hH : -1, rH.assoc),
        CH = BH[zH],
        EH = CH.side(SH, LH);
      if (tH == EH) {
        let HH = zH += SH ? 1 : -1;
        if (HH < 0 || HH >= BH.length) return null;
        CH = BH[zH = HH], tH = CH.side(!SH, LH), EH = CH.side(SH, LH)
      }
      let XH = (0, AH.$)(HH.text, tH, CH.forward(SH, LH));
      (XH < CH.from || XH > CH.to) && (XH = EH), kB = HH.text.slice(Math.min(tH, XH), Math.max(tH, XH));
      let GH = zH == (SH ? BH.length - 1 : 0) ? null : BH[zH + (SH ? 1 : -1)];
      return GH && XH == EH && GH.level + (SH ? 0 : 1) < CH.level ? AH.i.cursor(GH.side(!SH, LH) + HH.from, GH.forward(SH, LH) ? 1 : -1, GH.level) : AH.i.cursor(XH + HH.from, CH.forward(SH, LH) ? -1 : 1, CH.level)
    }

    function oB(HH, BH, LH) {
      for (let AH = BH; AH < LH; AH++) {
        let BH = MB(HH.charCodeAt(AH));
        if (1 == BH) return EB;
        if (2 == BH || 4 == BH) return XB
      }
      return EB
    }
    const IB = AH.l.define(),
      fB = AH.l.define(),
      lB = AH.l.define(),
      KB = AH.l.define(),
      cB = AH.l.define(),
      eB = AH.l.define(),
      qB = AH.l.define(),
      gB = AH.l.define(),
      NB = AH.l.define(),
      RB = AH.l.define({
        combine: HH => HH.some((HH => HH))
      }),
      jB = AH.l.define({
        combine: HH => HH.some((HH => HH))
      }),
      nB = AH.l.define();
    class FB {
      constructor(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = HH, this.y = BH, this.x = LH, this.yMargin = AH, this.xMargin = rH, this.isSnapshot = SH
      }
      map(HH) {
        return HH.empty ? this : new FB(this.range.map(HH), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(HH) {
        return this.range.to <= HH.doc.length ? this : new FB(AH.i.cursor(HH.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const DB = AH.B.define({
        map: (HH, BH) => HH.map(BH)
      }),
      wB = AH.B.define();

    function ZB(HH, BH, LH) {
      let AH = HH.facet(KB);
      AH.length ? AH[0](BH) : window.onerror && window.onerror(String(BH), LH, void 0, void 0, BH) || (LH ? console.error(LH + ":", BH) : console.error(BH))
    }
    const dB = AH.l.define({
      combine: HH => !HH.length || HH[0]
    });
    let aB = 0;
    const sB = AH.l.define({
      combine: HH => HH.filter(((BH, LH) => {
        for (let AH = 0; AH < LH; AH++)
          if (HH[AH].plugin == BH.plugin) return !1;
        return !0
      }))
    });
    class JB {
      constructor(HH, BH, LH, AH, rH) {
        this.id = HH, this.create = BH, this.domEventHandlers = LH, this.domEventObservers = AH, this.baseExtensions = rH(this), this.extension = this.baseExtensions.concat(sB.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(HH) {
        return this.baseExtensions.concat(sB.of({
          plugin: this,
          arg: HH
        }))
      }
      static define(HH, BH) {
        const {
          eventHandlers: LH,
          eventObservers: AH,
          provide: rH,
          Gr: SH
        } = BH || {};
        return new JB(aB++, HH, LH, AH, (HH => {
          let BH = [];
          return SH && BH.push(HL.of((BH => {
            let LH = BH.plugin(HH);
            return LH ? SH(LH) : lH.none
          }))), rH && BH.push(rH(HH)), BH
        }))
      }
      static fromClass(HH, BH) {
        return JB.define(((BH, LH) => new HH(BH, LH)), BH)
      }
    }
    class iB {
      constructor(HH) {
        this.spec = HH, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(HH) {
        if (this.value) {
          if (this.mustUpdate) {
            let HH = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(HH)
            } catch (BH) {
              if (ZB(HH.state, BH, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (LH) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(HH, this.spec.arg)
        } catch (BH) {
          ZB(HH.state, BH, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(HH) {
        var BH;
        if (null === (BH = this.value) || void 0 === BH ? void 0 : BH.destroy) try {
          this.value.destroy()
        } catch (LH) {
          ZB(HH.state, LH, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const pB = AH.l.define(),
      yB = AH.l.define(),
      HL = AH.l.define(),
      BL = AH.l.define(),
      LL = AH.l.define(),
      AL = AH.l.define(),
      rL = AH.l.define();

    function SL(HH, BH) {
      let LH = HH.state.facet(rL);
      if (!LH.length) return LH;
      let rH = LH.map((BH => BH instanceof Function ? BH(HH) : BH)),
        SH = [];
      return AH.x.spans(rH, BH.from, BH.to, {
        point() {},
        span(HH, LH, AH, rH) {
          let hH = HH - BH.from,
            tH = LH - BH.from,
            zH = SH;
          for (let SH = AH.length - 1; SH >= 0; SH--, rH--) {
            let HH, LH = AH[SH].spec.bidiIsolate;
            if (null == LH && (LH = oB(BH.text, hH, tH)), rH > 0 && zH.length && (HH = zH[zH.length - 1]).to == hH && HH.direction == LH) HH.to = tH, zH = HH.inner;
            else {
              let HH = {
                from: hH,
                to: tH,
                direction: LH,
                inner: []
              };
              zH.push(HH), zH = HH.inner
            }
          }
        }
      }), SH
    }
    const hL = AH.l.define();

    function tL(HH) {
      let BH = 0,
        LH = 0,
        AH = 0,
        rH = 0;
      for (let SH of HH.state.facet(hL)) {
        let hH = SH(HH);
        hH && (null != hH.left && (BH = Math.max(BH, hH.left)), null != hH.right && (LH = Math.max(LH, hH.right)), null != hH.top && (AH = Math.max(AH, hH.top)), null != hH.bottom && (rH = Math.max(rH, hH.bottom)))
      }
      return {
        left: BH,
        right: LH,
        top: AH,
        bottom: rH
      }
    }
    const zL = AH.l.define();
    class CL {
      constructor(HH, BH, LH, AH) {
        this.fromA = HH, this.toA = BH, this.fromB = LH, this.toB = AH
      }
      join(HH) {
        return new CL(Math.min(this.fromA, HH.fromA), Math.max(this.toA, HH.toA), Math.min(this.fromB, HH.fromB), Math.max(this.toB, HH.toB))
      }
      addToSet(HH) {
        let BH = HH.length,
          LH = this;
        for (; BH > 0; BH--) {
          let AH = HH[BH - 1];
          if (!(AH.fromA > LH.toA)) {
            if (AH.toA < LH.fromA) break;
            LH = LH.join(AH), HH.splice(BH - 1, 1)
          }
        }
        return HH.splice(BH, 0, LH), HH
      }
      static extendWithRanges(HH, BH) {
        if (0 == BH.length) return HH;
        let LH = [];
        for (let AH = 0, rH = 0, SH = 0;;) {
          let hH = AH < HH.length ? HH[AH].fromB : 1e9,
            tH = rH < BH.length ? BH[rH] : 1e9,
            zH = Math.min(hH, tH);
          if (1e9 == zH) break;
          let CH = zH + SH,
            EH = zH,
            XH = CH;
          for (;;)
            if (rH < BH.length && BH[rH] <= EH) {
              let LH = BH[rH + 1];
              rH += 2, EH = Math.max(EH, LH);
              for (let BH = AH; BH < HH.length && HH[BH].fromB <= EH; BH++) SH = HH[BH].toA - HH[BH].toB;
              XH = Math.max(XH, LH + SH)
            } else {
              if (!(AH < HH.length && HH[AH].fromB <= EH)) break;
              {
                let BH = HH[AH++];
                EH = Math.max(EH, BH.toB), XH = Math.max(XH, BH.toA), SH = BH.toA - BH.toB
              }
            } LH.push(new CL(CH, XH, zH, EH))
        }
        return LH
      }
    }
    class EL {
      constructor(HH, BH, LH) {
        this.view = HH, this.state = BH, this.transactions = LH, this.flags = 0, this.startState = HH.state, this.changes = AH.ChangeSet.empty(this.startState.doc.length);
        for (let AH of LH) this.changes = this.changes.compose(AH.changes);
        let rH = [];
        this.changes.iterChangedRanges(((HH, BH, LH, AH) => rH.push(new CL(HH, BH, LH, AH)))), this.changedRanges = rH
      }
      static create(HH, BH, LH) {
        return new EL(HH, BH, LH)
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
        return this.transactions.some((HH => HH.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const XL = [];
    class GL {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = HH, this.length = BH, this.flags = LH, this.parent = null, HH.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return XL
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
      sync(HH) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let HH = this.domAttrs;
          HH && function(HH, BH) {
            for (let LH = HH.attributes.length - 1; LH >= 0; LH--) {
              let AH = HH.attributes[LH].name;
              null == BH[AH] && HH.removeAttribute(AH)
            }
            for (let LH in BH) {
              let AH = BH[LH];
              "style" == LH ? HH.style.cssText = AH : HH.getAttribute(LH) != AH && HH.setAttribute(LH, AH)
            }
          }(this.dom, HH)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(HH) {
        this.dom = HH, HH.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let LH of this.children) {
          if (LH == HH) return BH;
          BH += LH.length + LH.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(HH) {
        return this.posBefore(HH) + HH.length
      }
      covers(HH) {
        return !0
      }
      coordsIn(HH, BH) {
        return null
      }
      domPosFor(HH, BH) {
        let LH = wH(this.dom),
          AH = this.length ? HH > 0 : BH > 0;
        return new zB(this.parent.dom, LH + (AH ? 1 : 0), 0 == HH || HH == this.length)
      }
      markDirty(HH) {
        this.flags &= -3, HH && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let HH = this; HH; HH = HH.parent)
          if (HH instanceof QL) return HH;
        return null
      }
      static get(HH) {
        return HH.cmTile
      }
    }
    class YL extends GL {
      constructor(HH) {
        super(HH, 0), this._children = []
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
      append(HH) {
        this.children.push(HH), HH.parent = this
      }
      sync(HH) {
        if (2 & this.flags) return;
        super.sync(HH);
        let BH, LH = this.dom,
          AH = null,
          rH = (null === HH || void 0 === HH ? void 0 : HH.node) == LH ? HH : null,
          SH = 0;
        for (let hH of this.children) {
          if (hH.sync(HH), SH += hH.length + hH.breakAfter, BH = AH ? AH.nextSibling : LH.firstChild, rH && BH != hH.dom && (rH.written = !0), hH.dom.parentNode == LH)
            for (; BH && BH != hH.dom;) BH = uL(BH);
          else LH.insertBefore(hH.dom, BH);
          AH = hH.dom
        }
        for (BH = AH ? AH.nextSibling : LH.firstChild, rH && BH && (rH.written = !0); BH;) BH = uL(BH);
        this.length = SH
      }
    }

    function uL(HH) {
      let BH = HH.nextSibling;
      return HH.parentNode.removeChild(HH), BH
    }
    class QL extends YL {
      constructor(HH, BH) {
        super(BH), this.view = HH
      }
      owns(HH) {
        for (; HH; HH = HH.parent)
          if (HH == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(HH) {
        for (;;) {
          if (!HH) return null;
          let BH = GL.get(HH);
          if (BH && this.owns(BH)) return BH;
          HH = HH.parentNode
        }
      }
      blockTiles(HH) {
        for (let BH = [], LH = this, AH = 0, rH = 0;;)
          if (AH == LH.children.length) {
            if (!BH.length) return;
            LH = LH.parent, LH.breakAfter && rH++, AH = BH.pop()
          } else {
            let SH = LH.children[AH++];
            if (SH instanceof WL) BH.push(AH), LH = SH, AH = 0;
            else {
              let BH = rH + SH.length,
                LH = HH(SH, rH);
              if (void 0 !== LH) return LH;
              rH = BH + SH.breakAfter
            }
          }
      }
      resolveBlock(HH, BH) {
        let LH, AH, rH = -1,
          SH = -1;
        if (this.blockTiles(((hH, tH) => {
            let zH = tH + hH.length;
            if (HH >= tH && HH <= zH) {
              if (hH.isWidget() && BH >= -1 && BH <= 1) {
                if (32 & hH.flags) return !0;
                16 & hH.flags && (LH = void 0)
              }(tH < HH || HH == zH && (BH < -1 ? hH.length : hH.covers(1))) && (!LH || !hH.isWidget() && LH.isWidget()) && (LH = hH, rH = HH - tH), (zH > HH || HH == tH && (BH > 1 ? hH.length : hH.covers(-1))) && (!AH || !hH.isWidget() && AH.isWidget()) && (AH = hH, SH = HH - tH)
            }
          })), !LH && !AH) throw new Error("No tile at position " + HH);
        return LH && BH < 0 || !AH ? {
          tile: LH,
          offset: rH
        } : {
          tile: AH,
          offset: SH
        }
      }
    }
    class WL extends YL {
      constructor(HH, BH) {
        super(HH), this.wrapper = BH
      }
      isBlock() {
        return !0
      }
      covers(HH) {
        return !!this.children.length && (HH < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (HH, BH) {
        let LH = new WL(BH || document.createElement(HH.tagName), HH);
        return BH || (LH.flags |= 4), LH
      }
    }
    class ML extends YL {
      constructor(HH, BH) {
        super(HH), this.attrs = BH
      }
      isLine() {
        return !0
      }
      static start(HH, BH, LH) {
        let AH = new ML(BH || document.createElement("div"), HH);
        return BH && LH || (AH.flags |= 4), AH
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(HH, BH, LH) {
        let AH = null,
          rH = -1,
          SH = null,
          hH = -1;
        ! function HH(tH, zH) {
          for (let CH = 0, EH = 0; CH < tH.children.length && EH <= zH; CH++) {
            let XH = tH.children[CH],
              GH = EH + XH.length;
            GH >= zH && (XH.isComposite() ? HH(XH, zH - EH) : (!SH || SH.isHidden && (BH > 0 || LH && xL(SH, XH))) && (GH > zH || 32 & XH.flags) ? (SH = XH, hH = zH - EH) : (EH < zH || 16 & XH.flags && !XH.isHidden) && (AH = XH, rH = zH - EH)), EH = GH
          }
        }(this, HH);
        let tH = (BH < 0 ? AH : SH) || AH || SH;
        return tH ? {
          tile: tH,
          offset: tH == AH ? rH : hH
        } : null
      }
      coordsIn(HH, BH) {
        let LH = this.resolveInline(HH, BH, !0);
        return LH ? LH.tile.coordsIn(Math.max(0, LH.offset), BH) : function(HH) {
          let BH = HH.dom.lastChild;
          if (!BH) return HH.dom.getBoundingClientRect();
          let LH = FH(BH);
          return LH[LH.length - 1] || null
        }(this)
      }
      domIn(HH, BH) {
        let LH = this.resolveInline(HH, BH);
        if (LH) {
          let {
            tile: HH,
            offset: AH
          } = LH;
          if (this.dom.contains(HH.dom)) return HH.isText() ? new zB(HH.dom, Math.min(HH.dom.nodeValue.length, AH)) : HH.domPosFor(AH, 16 & HH.flags ? 1 : 32 & HH.flags ? -1 : BH);
          let rH = LH.tile.parent,
            SH = !1;
          for (let BH of rH.children) {
            if (SH) return new zB(BH.dom, 0);
            BH == LH.tile && (SH = !0)
          }
        }
        return new zB(this.dom, 0)
      }
    }

    function xL(HH, BH) {
      let LH = HH.coordsIn(0, 1),
        AH = BH.coordsIn(0, 1);
      return LH && AH && AH.top < LH.bottom
    }
    class vL extends YL {
      constructor(HH, BH) {
        super(HH), this.mark = BH
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (HH, BH) {
        let LH = new vL(BH || document.createElement(HH.tagName), HH);
        return BH || (LH.flags |= 4), LH
      }
    }
    class PL extends GL {
      constructor(HH, BH) {
        super(HH, BH.length), this.text = BH
      }
      sync(HH) {
        2 & this.flags || (super.sync(HH), this.dom.nodeValue != this.text && (HH && HH.node == this.dom && (HH.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(HH, BH) {
        let LH = this.dom.nodeValue.length;
        HH > LH && (HH = LH);
        let AH = HH,
          rH = HH,
          SH = 0;
        0 == HH && BH < 0 || HH == LH && BH >= 0 ? VH.chrome || VH.gecko || (HH ? (AH--, SH = 1) : rH < LH && (rH++, SH = -1)) : BH < 0 ? AH-- : rH < LH && rH++;
        let hH = AB(this.dom, AH, rH).getClientRects();
        if (!hH.length) return null;
        let tH = hH[(SH ? SH < 0 : BH >= 0) ? 0 : hH.length - 1];
        return VH.safari && !SH && 0 == tH.width && (tH = Array.prototype.find.call(hH, (HH => HH.width)) || tH), SH ? sH(tH, SH < 0) : tH || null
      }
      static of (HH, BH) {
        let LH = new PL(BH || document.createTextNode(HH), HH);
        return BH || (LH.flags |= 2), LH
      }
    }
    class TL extends GL {
      constructor(HH, BH, LH, AH) {
        super(HH, BH, AH), this.widget = LH
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(HH) {
        return !(48 & this.flags) && (this.flags & (HH < 0 ? 64 : 128)) > 0
      }
      coordsIn(HH, BH) {
        return this.coordsInWidget(HH, BH, !1)
      }
      coordsInWidget(HH, BH, LH) {
        let AH = this.widget.coordsAt(this.dom, HH, BH);
        if (AH) return AH;
        if (LH) return sH(this.dom.getBoundingClientRect(), this.length ? 0 == HH : BH <= 0);
        {
          let BH = this.dom.getClientRects(),
            LH = null;
          if (!BH.length) return null;
          let AH = !!(16 & this.flags) || !(32 & this.flags) && HH > 0;
          for (let rH = AH ? BH.length - 1 : 0; LH = BH[rH], !(HH > 0 ? 0 == rH : rH == BH.length - 1 || LH.top < LH.bottom); rH += AH ? -1 : 1);
          return sH(LH, !AH)
        }
      }
      get overrideDOMText() {
        if (!this.length) return AH.F.empty;
        let {
          root: HH
        } = this;
        if (!HH) return AH.F.empty;
        let BH = this.posAtStart;
        return HH.view.state.doc.slice(BH, BH + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (HH, BH, LH, AH, rH) {
        return rH || (rH = HH.toDOM(BH), HH.editable || (rH.contentEditable = "false")), new TL(rH, LH, HH, AH)
      }
    }
    class UL extends GL {
      constructor(HH) {
        let BH = document.createElement("img");
        BH.className = "cm-widgetBuffer", BH.setAttribute("aria-hidden", "true"), super(BH, 0, HH)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return AH.F.empty
      }
      coordsIn(HH) {
        return this.dom.getBoundingClientRect()
      }
    }
    class VL {
      constructor(HH) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = HH
      }
      advance(HH, BH, LH) {
        let {
          tile: AH,
          index: rH,
          beforeBreak: SH,
          parents: hH
        } = this;
        for (; HH || BH > 0;)
          if (AH.isComposite())
            if (SH) {
              if (!HH) break;
              LH && LH.break(), HH--, SH = !1
            } else if (rH == AH.children.length) {
          if (!HH && !hH.length) break;
          LH && LH.leave(AH), SH = !!AH.breakAfter, ({
            tile: AH,
            index: rH
          } = hH.pop()), rH++
        } else {
          let tH = AH.children[rH],
            zH = tH.breakAfter;
          !(BH > 0 ? tH.length <= HH : tH.length < HH) || LH && !1 === LH.skip(tH, 0, tH.length) && tH.isComposite ? (hH.push({
            tile: AH,
            index: rH
          }), AH = tH, rH = 0, LH && tH.isComposite() && LH.enter(tH)) : (SH = !!zH, rH++, HH -= tH.length)
        } else if (rH == AH.length) SH = !!AH.breakAfter, ({
          tile: AH,
          index: rH
        } = hH.pop()), rH++;
        else {
          if (!HH) break;
          {
            let BH = Math.min(HH, AH.length - rH);
            LH && LH.skip(AH, rH, rH + BH), HH -= BH, rH += BH
          }
        }
        return this.tile = AH, this.index = rH, this.beforeBreak = SH, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class OL {
      constructor(HH, BH, LH, AH) {
        this.from = HH, this.to = BH, this.wrapper = LH, this.rank = AH
      }
    }
    class bL {
      constructor(HH, BH, LH) {
        this.cache = HH, this.root = BH, this.blockWrappers = LH, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(HH, BH, LH, AH) {
        var rH;
        this.flushBuffer();
        let SH = this.ensureMarks(BH, LH),
          hH = SH.lastChild;
        if (hH && hH.isText() && !(8 & hH.flags) && hH.length + HH.length < 512) {
          this.cache.reused.set(hH, 2), (SH.children[SH.children.length - 1] = new PL(hH.dom, hH.text + HH)).parent = SH
        } else SH.append(AH || PL.of(HH, null === (rH = this.cache.find(PL)) || void 0 === rH ? void 0 : rH.dom));
        this.pos += HH.length, this.afterWidget = null
      }
      addComposition(HH, BH) {
        let LH = this.curLine;
        LH.dom != BH.line.dom && (LH.setDOM(this.cache.reused.has(BH.line) ? KL(BH.line.dom) : BH.line.dom), this.cache.reused.set(BH.line, 2));
        let AH = LH;
        for (let hH = BH.marks.length - 1; hH >= 0; hH--) {
          let HH = BH.marks[hH],
            LH = AH.lastChild;
          if (LH instanceof vL && LH.mark.eq(HH.mark)) LH.dom != HH.dom && LH.setDOM(KL(HH.dom)), AH = LH;
          else {
            if (this.cache.reused.get(HH)) {
              let BH = GL.get(HH.dom);
              BH && BH.setDOM(KL(HH.dom))
            }
            let BH = vL.of(HH.mark, HH.dom);
            AH.append(BH), AH = BH
          }
          this.cache.reused.set(HH, 2)
        }
        let rH = GL.get(HH.text);
        rH && this.cache.reused.set(rH, 2);
        let SH = new PL(HH.text, HH.text.nodeValue);
        SH.flags |= 8, AH.append(SH)
      }
      addInlineWidget(HH, BH, LH) {
        let AH = this.afterWidget && 48 & HH.flags && (48 & this.afterWidget.flags) == (48 & HH.flags);
        AH || this.flushBuffer();
        let rH = this.ensureMarks(BH, LH);
        AH || 16 & HH.flags || rH.append(this.getBuffer(1)), rH.append(HH), this.pos += HH.length, this.afterWidget = HH
      }
      addMark(HH, BH, LH) {
        this.flushBuffer(), this.ensureMarks(BH, LH).append(HH), this.pos += HH.length, this.afterWidget = null
      }
      addBlockWidget(HH) {
        this.getBlockPos().append(HH), this.pos += HH.length, this.lastBlock = HH, this.endLine()
      }
      continueWidget(HH) {
        (this.afterWidget || this.lastBlock).length += HH, this.pos += HH
      }
      addLineStart(HH, BH) {
        var LH;
        HH || (HH = lL);
        let AH = ML.start(HH, BH || (null === (LH = this.cache.find(ML)) || void 0 === LH ? void 0 : LH.dom), !!BH);
        this.getBlockPos().append(this.lastBlock = this.curLine = AH)
      }
      addLine(HH) {
        this.getBlockPos().append(HH), this.pos += HH.length, this.lastBlock = HH, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(HH) {
        this.blockPosCovered() || this.addLineStart(HH)
      }
      ensureLine(HH) {
        this.curLine || this.addLineStart(HH)
      }
      ensureMarks(HH, BH) {
        var LH;
        let AH = this.curLine;
        for (let rH = HH.length - 1; rH >= 0; rH--) {
          let SH, hH = HH[rH];
          if (BH > 0 && (SH = AH.lastChild) && SH instanceof vL && SH.mark.eq(hH)) AH = SH, BH--;
          else {
            let HH = vL.of(hH, null === (LH = this.cache.find(vL, (HH => HH.mark.eq(hH)))) || void 0 === LH ? void 0 : LH.dom);
            AH.append(HH), AH = HH, BH = 0
          }
        }
        return AH
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let HH = this.curLine.lastChild;
          HH && fL(this.curLine, !1) && ("BR" == HH.dom.nodeName || !HH.isWidget() || VH.ios && fL(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(eL, 0, 32) || new TL(eL.toDOM(), 0, eL, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let HH = this.wrappers.length - 1; HH >= 0; HH--) this.wrappers[HH].to < this.pos && this.wrappers.splice(HH, 1);
        for (let HH = this.blockWrappers; HH.value && HH.from <= this.pos; HH.next())
          if (HH.to >= this.pos) {
            let BH = new OL(HH.from, HH.to, HH.value, HH.rank),
              LH = this.wrappers.length;
            for (; LH > 0 && (this.wrappers[LH - 1].rank - BH.rank || this.wrappers[LH - 1].to - BH.to) < 0;) LH--;
            this.wrappers.splice(LH, 0, BH)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var HH;
        this.updateBlockWrappers();
        let BH = this.root;
        for (let LH of this.wrappers) {
          let AH = BH.lastChild;
          if (LH.from < this.pos && AH instanceof WL && AH.wrapper.eq(LH.wrapper)) BH = AH;
          else {
            let AH = WL.of(LH.wrapper, null === (HH = this.cache.find(WL, (HH => HH.wrapper.eq(LH.wrapper)))) || void 0 === HH ? void 0 : HH.dom);
            BH.append(AH), BH = AH
          }
        }
        return BH
      }
      blockPosCovered() {
        let HH = this.lastBlock;
        return null != HH && !HH.breakAfter && (!HH.isWidget() || (160 & HH.flags) > 0)
      }
      getBuffer(HH) {
        let BH = 2 | (HH < 0 ? 16 : 32),
          LH = this.cache.find(UL, void 0, 1);
        return LH && (LH.flags = BH), LH || new UL(BH)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class kL {
      constructor(HH) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = HH.iter()
      }
      skip(HH) {
        this.textOff + HH <= this.text.length ? this.textOff += HH : (this.skipCount += HH - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(HH) {
        if (this.textOff == this.text.length) {
          let {
            value: BH,
            lineBreak: LH,
            done: AH
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, AH) throw new Error("Ran out of text content when drawing inline views");
          this.text = BH;
          let rH = this.textOff = Math.min(HH, BH.length);
          return LH ? null : BH.slice(0, rH)
        }
        let BH = Math.min(this.text.length, this.textOff + HH),
          LH = this.text.slice(this.textOff, BH);
        return this.textOff = BH, LH
      }
    }
    const mL = [TL, ML, PL, vL, UL, WL, QL];
    for (let fh = 0; fh < mL.length; fh++) mL[fh].bucket = fh;
    class oL {
      constructor(HH) {
        this.view = HH, this.buckets = mL.map((() => [])), this.index = mL.map((() => 0)), this.reused = new Map
      }
      add(HH) {
        let BH = HH.constructor.bucket,
          LH = this.buckets[BH];
        LH.length < 6 ? LH.push(HH) : LH[this.index[BH] = (this.index[BH] + 1) % 6] = HH
      }
      find(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          AH = HH.bucket,
          rH = this.buckets[AH],
          SH = this.index[AH];
        for (let hH = rH.length - 1; hH >= 0; hH--) {
          let HH = (hH + SH) % rH.length,
            tH = rH[HH];
          if ((!BH || BH(tH)) && !this.reused.has(tH)) return rH.splice(HH, 1), HH < SH && this.index[AH]--, this.reused.set(tH, LH), tH
        }
        return null
      }
      findWidget(HH, BH, LH) {
        let AH = this.buckets[0];
        if (AH.length)
          for (let rH = 0, SH = 0;; rH++) {
            if (rH == AH.length) {
              if (SH) return null;
              SH = 1, rH = 0
            }
            let hH = AH[rH];
            if (!this.reused.has(hH) && (0 == SH ? hH.widget.compare(HH) : hH.widget.constructor == HH.constructor && HH.updateDOM(hH.dom, this.view, hH.widget))) return AH.splice(rH, 1), rH < this.index[0] && this.index[0]--, hH.widget == HH && hH.length == BH && (497 & hH.flags) == LH ? (this.reused.set(hH, 1), hH) : (this.reused.set(hH, 2), new TL(hH.dom, BH, HH, -498 & hH.flags | LH))
          }
      }
      reuse(HH) {
        return this.reused.set(HH, 1), HH
      }
      maybeReuse(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(HH)) return this.reused.set(HH, BH), HH.dom
      }
      clear() {
        for (let HH = 0; HH < this.buckets.length; HH++) this.buckets[HH].length = this.index[HH] = 0
      }
    }
    class IL {
      constructor(HH, BH, LH, rH, SH) {
        this.view = HH, this.Gr = rH, this.disallowBlockEffectsFor = SH, this.openWidget = !1, this.openMarks = 0, this.cache = new oL(HH), this.text = new kL(HH.state.doc), this.builder = new bL(this.cache, new QL(HH, HH.contentDOM), AH.x.iter(LH)), this.cache.reused.set(BH, 2), this.old = new VL(BH), this.reuseWalker = {
          skip: (HH, BH, LH) => {
            if (this.cache.add(HH), HH.isComposite()) return !1
          },
          enter: HH => this.cache.add(HH),
          leave: () => {},
          break: () => {}
        }
      }
      run(HH, BH) {
        let LH = BH && this.getCompositionContext(BH.text);
        for (let AH = 0, rH = 0, SH = 0;;) {
          let hH = SH < HH.length ? HH[SH++] : null,
            tH = hH ? hH.fromA : this.old.root.length;
          if (tH > AH) {
            let HH = tH - AH;
            this.preserve(HH, !SH, !hH), AH = tH, rH += HH
          }
          if (!hH) break;
          BH && hH.fromA <= BH.range.fromA && hH.toA >= BH.range.toA ? (this.forward(hH.fromA, BH.range.fromA, BH.range.fromA < BH.range.toA ? 1 : -1), this.emit(rH, BH.range.fromB), this.cache.clear(), this.builder.addComposition(BH, LH), this.text.skip(BH.range.toB - BH.range.fromB), this.forward(BH.range.fromA, hH.toA), this.emit(BH.range.toB, hH.toB)) : (this.forward(hH.fromA, hH.toA), this.emit(rH, hH.toB)), rH = hH.toB, AH = hH.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(HH, BH, LH) {
        let AH = function(HH) {
            let BH = [];
            for (let LH = HH.parents.length; LH > 1; LH--) {
              let AH = LH == HH.parents.length ? HH.tile : HH.parents[LH].tile;
              AH instanceof vL && BH.push(AH.mark)
            }
            return BH
          }(this.old),
          rH = this.openMarks;
        this.old.advance(HH, LH ? 1 : -1, {
          skip: (HH, BH, LH) => {
            if (HH.isWidget())
              if (this.openWidget) this.builder.continueWidget(LH - BH);
              else {
                let SH = LH > 0 || BH < HH.length ? TL.of(HH.widget, this.view, LH - BH, 496 & HH.flags, this.cache.maybeReuse(HH)) : this.cache.reuse(HH);
                256 & SH.flags ? (SH.flags &= -2, this.builder.addBlockWidget(SH)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(SH, AH, rH), rH = AH.length)
              }
            else if (HH.isText()) this.builder.ensureLine(null), BH || LH != HH.length || this.cache.reused.has(HH) ? (this.cache.add(HH), this.builder.addText(HH.text.slice(BH, LH), AH, rH)) : this.builder.addText(HH.text, AH, rH, this.cache.reuse(HH)), rH = AH.length;
            else if (HH.isLine()) HH.flags &= -2, this.cache.reused.set(HH, 1), this.builder.addLine(HH);
            else if (HH instanceof UL) this.cache.add(HH);
            else {
              if (!(HH instanceof vL)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(HH, AH, rH), this.cache.reused.set(HH, 1), rH = AH.length
            }
            this.openWidget = !1
          },
          enter: HH => {
            HH.isLine() ? this.builder.addLineStart(HH.attrs, this.cache.maybeReuse(HH)) : (this.cache.add(HH), HH instanceof vL && AH.unshift(HH.mark)), this.openWidget = !1
          },
          leave: HH => {
            HH.isLine() ? AH.length && (AH.length = rH = 0) : HH instanceof vL && (AH.shift(), rH = Math.min(rH, AH.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(HH)
      }
      emit(HH, BH) {
        let LH = null,
          rH = this.builder,
          SH = 0,
          hH = AH.x.spans(this.Gr, HH, BH, {
            point: (HH, BH, AH, hH, tH, zH) => {
              if (AH instanceof eH) {
                if (this.disallowBlockEffectsFor[zH]) {
                  if (AH.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (BH > this.view.state.doc.lineAt(HH).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (SH = hH.length, tH > hH.length) rH.continueWidget(BH - HH);
                else {
                  let SH = AH.widget || (AH.block ? cL.block : cL.inline),
                    zH = function(HH) {
                      let BH = HH.isReplace ? (HH.startSide < 0 ? 64 : 0) | (HH.endSide > 0 ? 128 : 0) : HH.startSide > 0 ? 32 : 16;
                      HH.block && (BH |= 256);
                      return BH
                    }(AH),
                    CH = this.cache.findWidget(SH, BH - HH, zH) || TL.of(SH, this.view, BH - HH, zH);
                  AH.block ? (AH.startSide > 0 && rH.addLineStartIfNotCovered(LH), rH.addBlockWidget(CH)) : (rH.ensureLine(LH), rH.addInlineWidget(CH, hH, tH))
                }
                LH = null
              } else LH = function(HH, BH) {
                let LH = BH.spec.attributes,
                  AH = BH.spec.class;
                if (!LH && !AH) return HH;
                HH || (HH = {
                  class: "cm-line"
                });
                LH && OH(LH, HH);
                AH && (HH.class += " " + AH);
                return HH
              }(LH, AH);
              BH > HH && this.text.skip(BH - HH)
            },
            span: (HH, BH, AH, SH) => {
              for (let hH = HH; hH < BH;) {
                let tH = this.text.next(Math.min(512, BH - hH));
                null == tH ? (rH.addLineStartIfNotCovered(LH), rH.addBreak(), hH++) : (rH.ensureLine(LH), rH.addText(tH, AH, hH == HH ? SH : AH.length), hH += tH.length), LH = null
              }
            }
          });
        rH.addLineStartIfNotCovered(LH), this.openWidget = hH > SH, this.openMarks = hH
      }
      forward(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        BH - HH <= 10 ? this.old.advance(BH - HH, LH, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(BH - HH - 10, -1), this.old.advance(5, LH, this.reuseWalker))
      }
      getCompositionContext(HH) {
        let BH = [],
          LH = null;
        for (let AH = HH.parentNode;; AH = AH.parentNode) {
          let HH = GL.get(AH);
          if (AH == this.view.contentDOM) break;
          HH instanceof vL ? BH.push(HH) : (null === HH || void 0 === HH ? void 0 : HH.isLine()) ? LH = HH : HH instanceof WL || ("DIV" != AH.nodeName || LH || AH == this.view.contentDOM ? LH || BH.push(vL.of(new KH({
            tagName: AH.nodeName.toLowerCase(),
            attributes: oH(AH)
          }), AH)) : LH = new ML(AH, lL))
        }
        return {
          line: LH,
          marks: BH
        }
      }
    }

    function fL(HH, BH) {
      let LH = HH => {
        for (let AH of HH.children)
          if ((BH ? AH.isText() : AH.length) || LH(AH)) return !0;
        return !1
      };
      return LH(HH)
    }
    const lL = {
      class: "cm-line"
    };

    function KL(HH) {
      let BH = GL.get(HH);
      return BH && BH.setDOM(HH.cloneNode()), HH
    }
    class cL extends IH {
      constructor(HH) {
        super(), this.tag = HH
      }
      eq(HH) {
        return HH.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(HH) {
        return HH.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    cL.inline = new cL("span"), cL.block = new cL("div");
    const eL = new class extends IH {
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
    class qL {
      constructor(HH) {
        this.view = HH, this.Gr = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = lH.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new QL(HH, HH.contentDOM), this.updateInner([new CL(0, 0, 0, HH.state.doc.length)], null)
      }
      update(HH) {
        var BH;
        let LH = HH.changedRanges;
        this.minWidth > 0 && LH.length && (LH.every((HH => {
          let {
            fromA: BH,
            toA: LH
          } = HH;
          return LH < this.minWidthFrom || BH > this.minWidthTo
        })) ? (this.minWidthFrom = HH.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = HH.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(HH);
        let rH = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (BH = this.domChanged) || void 0 === BH ? void 0 : BH.newSel) ? rH = this.domChanged.newSel.head : function(HH, BH) {
          let LH = !1;
          BH && HH.iterChangedRanges(((HH, AH) => {
            HH < BH.to && AH > BH.from && (LH = !0)
          }));
          return LH
        }(HH.changes, this.hasComposition) || HH.selectionSet || (rH = HH.state.selection.main.head));
        let SH = rH > -1 ? function(HH, BH, LH) {
          let AH = NL(HH, LH);
          if (!AH) return null;
          let {
            node: rH,
            from: SH,
            to: hH
          } = AH, tH = rH.nodeValue;
          if (/[\n\r]/.test(tH)) return null;
          if (HH.state.doc.sliceString(AH.from, AH.to) != tH) return null;
          let zH = BH.invertedDesc;
          return {
            range: new CL(zH.mapPos(SH), zH.mapPos(hH), SH, hH),
            text: rH
          }
        }(this.view, HH.changes, rH) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: BH,
            to: AH
          } = this.hasComposition;
          LH = new CL(BH, AH, HH.changes.mapPos(BH, -1), HH.changes.mapPos(AH, 1)).addToSet(LH.slice())
        }
        this.hasComposition = SH ? {
          from: SH.range.fromB,
          to: SH.range.toB
        } : null, (VH.ie || VH.chrome) && !SH && HH && HH.state.doc.lines != HH.startState.doc.lines && (this.forceSelection = !0);
        let hH = this.Gr,
          tH = this.blockWrappers;
        this.updateDeco();
        let zH = function(HH, BH, LH) {
          let rH = new RL;
          return AH.x.compare(HH, BH, LH, rH), rH.changes
        }(hH, this.Gr, HH.changes);
        zH.length && (LH = CL.extendWithRanges(LH, zH));
        let CH = function(HH, BH, LH) {
          let rH = new jL;
          return AH.x.compare(HH, BH, LH, rH), rH.changes
        }(tH, this.blockWrappers, HH.changes);
        return CH.length && (LH = CL.extendWithRanges(LH, CH)), SH && !LH.some((HH => HH.fromA <= SH.range.fromA && HH.toA >= SH.range.toA)) && (LH = SH.range.addToSet(LH.slice())), !(2 & this.tile.flags && 0 == LH.length) && (this.updateInner(LH, SH), HH.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(HH, BH) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: LH
        } = this.view;
        LH.ignore((() => {
          if (BH || HH.length) {
            let LH = this.tile,
              AH = new IL(this.view, LH, this.blockWrappers, this.Gr, this.dynamicDecorationMap);
            BH && GL.get(BH.text) && AH.cache.reused.set(GL.get(BH.text), 2), this.tile = AH.run(HH, BH), gL(LH, AH.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let AH = VH.chrome || VH.ios ? {
            node: LH.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(AH), !AH || !AH.written && LH.selectionRange.focusNode == AH.node && this.tile.dom.contains(AH.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let AH = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let rH of this.tile.children) rH.isWidget() && rH.widget instanceof nL && AH.push(rH.dom);
        LH.updateGaps(AH)
      }
      updateEditContextFormatting(HH) {
        this.editContextFormatting = this.editContextFormatting.map(HH.changes);
        for (let BH of HH.transactions)
          for (let HH of BH.effects) HH.is(wB) && (this.editContextFormatting = HH.value)
      }
      updateSelection() {
        let HH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: BH
        } = this.tile, LH = this.view.root.activeElement, AH = LH == BH, rH = !AH && !(this.view.state.facet(dB) || BH.tabIndex > -1) && nH(BH, this.view.observer.selectionRange) && !(LH && BH.contains(LH));
        if (!(AH || HH || rH)) return;
        let SH = this.forceSelection;
        this.forceSelection = !1;
        let hH, tH, zH = this.view.state.selection.main;
        if (zH.empty ? tH = hH = this.inlineDOMNearPos(zH.anchor, zH.assoc || 1) : (tH = this.inlineDOMNearPos(zH.head, zH.head == zH.from ? 1 : -1), hH = this.inlineDOMNearPos(zH.anchor, zH.anchor == zH.from ? 1 : -1)), VH.gecko && zH.empty && !this.hasComposition && (1 == (CH = hH).node.nodeType && CH.node.firstChild && (0 == CH.offset || "false" == CH.node.childNodes[CH.offset - 1].contentEditable) && (CH.offset == CH.node.childNodes.length || "false" == CH.node.childNodes[CH.offset].contentEditable))) {
          let HH = document.createTextNode("");
          this.view.observer.ignore((() => hH.node.insertBefore(HH, hH.node.childNodes[hH.offset] || null))), hH = tH = new zB(HH, 0), SH = !0
        }
        var CH;
        let EH = this.view.observer.selectionRange;
        !SH && EH.focusNode && (DH(hH.node, hH.offset, EH.anchorNode, EH.anchorOffset) && DH(tH.node, tH.offset, EH.focusNode, EH.focusOffset) || this.suppressWidgetCursorChange(EH, zH)) || (this.view.observer.ignore((() => {
          VH.android && VH.chrome && BH.contains(EH.focusNode) && function(HH, BH) {
            for (let LH = HH; LH && LH != BH; LH = LH.assignedSlot || LH.parentNode)
              if (1 == LH.nodeType && "false" == LH.contentEditable) return !0;
            return !1
          }(EH.focusNode, BH) && (BH.blur(), BH.focus({
            preventScroll: !0
          }));
          let HH = RH(this.view.root);
          if (HH)
            if (zH.empty) {
              if (VH.gecko) {
                let HH = (AH = hH.node, SH = hH.offset, 1 != AH.nodeType ? 0 : (SH && "false" == AH.childNodes[SH - 1].contentEditable ? 1 : 0) | (SH < AH.childNodes.length && "false" == AH.childNodes[SH].contentEditable ? 2 : 0));
                if (HH && 3 != HH) {
                  let BH = (1 == HH ? hB : tB)(hH.node, hH.offset);
                  BH && (hH = new zB(BH.node, BH.offset))
                }
              }
              HH.collapse(hH.node, hH.offset), null != zH.bidiLevel && void 0 !== HH.caretBidiLevel && (HH.caretBidiLevel = zH.bidiLevel)
            } else if (HH.extend) {
            HH.collapse(hH.node, hH.offset);
            try {
              HH.extend(tH.node, tH.offset)
            } catch (CH) {}
          } else {
            let BH = document.createRange();
            zH.anchor > zH.head && ([hH, tH] = [tH, hH]), BH.setEnd(tH.node, tH.offset), BH.setStart(hH.node, hH.offset), HH.removeAllRanges(), HH.addRange(BH)
          } else;
          var AH, SH;
          rH && this.view.root.activeElement == BH && (BH.blur(), LH && LH.focus())
        })), this.view.observer.setSelectionRange(hH, tH)), this.impreciseAnchor = hH.precise ? null : new zB(EH.anchorNode, EH.anchorOffset), this.impreciseHead = tH.precise ? null : new zB(EH.focusNode, EH.focusOffset)
      }
      suppressWidgetCursorChange(HH, BH) {
        return this.hasComposition && BH.empty && DH(HH.focusNode, HH.focusOffset, HH.anchorNode, HH.anchorOffset) && this.posFromDOM(HH.focusNode, HH.focusOffset) == BH.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: HH
        } = this, BH = HH.state.selection.main, LH = RH(HH.root), {
          anchorNode: AH,
          anchorOffset: rH
        } = HH.observer.selectionRange;
        if (!LH || !BH.empty || !BH.assoc || !LH.modify) return;
        let SH = this.lineAt(BH.head, BH.assoc);
        if (!SH) return;
        let hH = SH.posAtStart;
        if (BH.head == hH || BH.head == hH + SH.length) return;
        let tH = this.coordsAt(BH.head, -1),
          zH = this.coordsAt(BH.head, 1);
        if (!tH || !zH || tH.bottom > zH.top) return;
        let CH = this.domAtPos(BH.head + BH.assoc, BH.assoc);
        LH.collapse(CH.node, CH.offset), LH.modify("move", BH.assoc < 0 ? "forward" : "backward", "lineboundary"), HH.observer.readSelectionRange();
        let EH = HH.observer.selectionRange;
        HH.docView.posFromDOM(EH.anchorNode, EH.anchorOffset) != BH.from && LH.collapse(AH, rH)
      }
      posFromDOM(HH, BH) {
        let LH = this.tile.nearest(HH);
        if (!LH) return 2 & this.tile.dom.compareDocumentPosition(HH) ? 0 : this.view.state.doc.length;
        let AH = LH.posAtStart;
        if (!LH.isComposite()) return LH.isText() ? HH == LH.dom ? AH + BH : AH + (BH ? LH.length : 0) : AH;
        {
          let rH;
          if (HH == LH.dom) rH = LH.dom.childNodes[BH];
          else {
            let AH = 0 == aH(HH) ? 0 : 0 == BH ? -1 : 1;
            for (;;) {
              let BH = HH.parentNode;
              if (BH == LH.dom) break;
              0 == AH && BH.firstChild != BH.lastChild && (AH = HH == BH.firstChild ? -1 : 1), HH = BH
            }
            rH = AH < 0 ? HH : HH.nextSibling
          }
          if (rH == LH.dom.firstChild) return AH;
          for (; rH && !GL.get(rH);) rH = rH.nextSibling;
          if (!rH) return AH + LH.length;
          for (let HH = 0, BH = AH;; HH++) {
            let AH = LH.children[HH];
            if (AH.dom == rH) return BH;
            BH += AH.length + AH.breakAfter
          }
        }
      }
      domAtPos(HH, BH) {
        let {
          tile: LH,
          offset: AH
        } = this.tile.resolveBlock(HH, BH);
        return LH.isWidget() ? LH.domPosFor(HH, BH) : LH.domIn(AH, BH)
      }
      inlineDOMNearPos(HH, BH) {
        let LH, AH, rH = -1,
          SH = !1,
          hH = -1,
          tH = !1;
        return this.tile.blockTiles(((BH, zH) => {
          if (BH.isWidget()) {
            if (32 & BH.flags && zH >= HH) return !0;
            16 & BH.flags && (SH = !0)
          } else {
            let CH = zH + BH.length;
            if (zH <= HH && (LH = BH, rH = HH - zH, SH = CH < HH), CH >= HH && !AH && (AH = BH, hH = HH - zH, tH = zH > HH), zH > HH && AH) return !0
          }
        })), LH || AH ? (SH && AH ? LH = null : tH && LH && (AH = null), LH && BH < 0 || !AH ? LH.domIn(rH, BH) : AH.domIn(hH, BH)) : this.domAtPos(HH, BH)
      }
      coordsAt(HH, BH) {
        let {
          tile: LH,
          offset: AH
        } = this.tile.resolveBlock(HH, BH);
        return LH.isWidget() ? LH.widget instanceof nL ? null : LH.coordsInWidget(AH, BH, !0) : LH.coordsIn(AH, BH)
      }
      lineAt(HH, BH) {
        let {
          tile: LH
        } = this.tile.resolveBlock(HH, BH);
        return LH.isLine() ? LH : null
      }
      coordsForChar(HH) {
        let {
          tile: BH,
          offset: LH
        } = this.tile.resolveBlock(HH, 1);
        if (!BH.isLine()) return null;
        return function HH(BH, LH) {
          if (BH.isComposite())
            for (let AH of BH.children) {
              if (AH.length >= LH) {
                let BH = HH(AH, LH);
                if (BH) return BH
              }
              if ((LH -= AH.length) < 0) break
            } else if (BH.isText() && LH < BH.length) {
              let HH = (0, AH.$)(BH.text, LH);
              if (HH == LH) return null;
              let rH = AB(BH.dom, LH, HH).getClientRects();
              for (let BH = 0; BH < rH.length; BH++) {
                let HH = rH[BH];
                if (BH == rH.length - 1 || HH.top < HH.bottom && HH.left < HH.right) return HH
              }
            } return null
        }(BH, LH)
      }
      measureVisibleLineHeights(HH) {
        let BH = [],
          {
            from: LH,
            to: AH
          } = HH,
          rH = this.view.contentDOM.clientWidth,
          SH = rH > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          hH = -1,
          tH = this.view.textDirection == CB.LTR,
          zH = 0,
          CH = (HH, EH, XH) => {
            for (let GH = 0; GH < HH.children.length && !(EH > AH); GH++) {
              let AH = HH.children[GH],
                YH = EH + AH.length,
                uH = AH.dom.getBoundingClientRect(),
                {
                  height: QH
                } = uH;
              if (XH && !GH && (zH += uH.top - XH.top), AH instanceof WL) YH > LH && CH(AH, EH, uH);
              else if (EH >= LH && (zH > 0 && BH.push(-zH), BH.push(QH + zH), zH = 0, SH)) {
                let HH = AH.dom.lastChild,
                  BH = HH ? FH(HH) : [];
                if (BH.length) {
                  let HH = BH[BH.length - 1],
                    LH = tH ? HH.right - uH.left : uH.right - HH.left;
                  LH > hH && (hH = LH, this.minWidth = rH, this.minWidthFrom = EH, this.minWidthTo = YH)
                }
              }
              XH && GH == HH.children.length - 1 && (zH += XH.bottom - uH.bottom), EH = YH + AH.breakAfter
            }
          };
        return CH(this.tile, 0, null), BH
      }
      textDirectionAt(HH) {
        let {
          tile: BH
        } = this.tile.resolveBlock(HH, 1);
        return "rtl" == getComputedStyle(BH.dom).direction ? CB.RTL : CB.LTR
      }
      measureTextSize() {
        let HH = this.tile.blockTiles((HH => {
          if (HH.isLine() && HH.children.length && HH.length <= 20) {
            let BH, LH = 0;
            for (let AH of HH.children) {
              if (!AH.isText() || /[^ -~]/.test(AH.text)) return;
              let HH = FH(AH.dom);
              if (1 != HH.length) return;
              LH += HH[0].width, BH = HH[0].height
            }
            if (LH) return {
              lineHeight: HH.dom.getBoundingClientRect().height,
              charWidth: LH / HH.length,
              textHeight: BH
            }
          }
        }));
        if (HH) return HH;
        let BH, LH, AH, rH = document.createElement("div");
        return rH.className = "cm-line", rH.style.width = "99999px", rH.style.position = "absolute", rH.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(rH);
          let HH = FH(rH.firstChild)[0];
          BH = rH.getBoundingClientRect().height, LH = HH && HH.width ? HH.width / 27 : 7, AH = HH && HH.height ? HH.height : BH, rH.remove()
        })), {
          lineHeight: BH,
          charWidth: LH,
          textHeight: AH
        }
      }
      computeBlockGapDeco() {
        let HH = [],
          BH = this.view.viewState;
        for (let LH = 0, AH = 0;; AH++) {
          let rH = AH == BH.viewports.length ? null : BH.viewports[AH],
            SH = rH ? rH.from - 1 : this.view.state.doc.length;
          if (SH > LH) {
            let AH = (BH.lineBlockAt(SH).bottom - BH.lineBlockAt(LH).top) / this.view.scaleY;
            HH.push(lH.replace({
              widget: new nL(AH),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(LH, SH))
          }
          if (!rH) break;
          LH = rH.to + 1
        }
        return lH.set(HH)
      }
      updateDeco() {
        let HH = 1,
          BH = this.view.state.facet(HL).map((BH => (this.dynamicDecorationMap[HH++] = "function" == typeof BH) ? BH(this.view) : BH)),
          LH = !1,
          rH = this.view.state.facet(LL).map(((HH, BH) => {
            let AH = "function" == typeof HH;
            return AH && (LH = !0), AH ? HH(this.view) : HH
          }));
        for (rH.length && (this.dynamicDecorationMap[HH++] = LH, BH.push(AH.x.join(rH))), this.Gr = [this.editContextFormatting, ...BH, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; HH < this.Gr.length;) this.dynamicDecorationMap[HH++] = !1;
        this.blockWrappers = this.view.state.facet(BL).map((HH => "function" == typeof HH ? HH(this.view) : HH))
      }
      scrollIntoView(HH) {
        var BH;
        if (HH.isSnapshot) {
          let BH = this.view.viewState.lineBlockAt(HH.range.head);
          return this.view.scrollDOM.scrollTop = BH.top - HH.yMargin, void(this.view.scrollDOM.scrollLeft = HH.xMargin)
        }
        for (let EH of this.view.state.facet(nB)) try {
          if (EH(this.view, HH.range, HH)) return !0
        } catch (CH) {
          ZB(this.view.state, CH, "scroll handler")
        }
        let LH, {
            range: AH
          } = HH,
          rH = this.coordsAt(AH.head, null !== (BH = AH.assoc) && void 0 !== BH ? BH : AH.empty ? 0 : AH.head > AH.anchor ? -1 : 1);
        if (!rH) return;
        !AH.empty && (LH = this.coordsAt(AH.anchor, AH.anchor > AH.head ? -1 : 1)) && (rH = {
          left: Math.min(rH.left, LH.left),
          top: Math.min(rH.top, LH.top),
          right: Math.max(rH.right, LH.right),
          bottom: Math.max(rH.bottom, LH.bottom)
        });
        let SH = tL(this.view),
          hH = {
            left: rH.left - SH.left,
            top: rH.top - SH.top,
            right: rH.right + SH.right,
            bottom: rH.bottom + SH.bottom
          },
          {
            offsetWidth: tH,
            offsetHeight: zH
          } = this.view.scrollDOM;
        if (function(HH, BH, LH, AH, rH, SH, hH, tH) {
            let zH = HH.ownerDocument,
              CH = zH.defaultView || window;
            for (let EH = HH, XH = !1; EH && !XH;)
              if (1 == EH.nodeType) {
                let HH, GH = EH == zH.body,
                  YH = 1,
                  uH = 1;
                if (GH) HH = JH(CH);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(EH).position) && (XH = !0), EH.scrollHeight <= EH.clientHeight && EH.scrollWidth <= EH.clientWidth) {
                    EH = EH.assignedSlot || EH.parentNode;
                    continue
                  }
                  let BH = EH.getBoundingClientRect();
                  ({
                    scaleX: YH,
                    scaleY: uH
                  } = iH(EH, BH)), HH = {
                    left: BH.left,
                    right: BH.left + EH.clientWidth * YH,
                    top: BH.top,
                    bottom: BH.top + EH.clientHeight * uH
                  }
                }
                let QH = 0,
                  WH = 0;
                if ("nearest" == rH) BH.top < HH.top + hH ? (WH = BH.top - (HH.top + hH), LH > 0 && BH.bottom > HH.bottom + WH && (WH = BH.bottom - HH.bottom + hH)) : BH.bottom > HH.bottom - hH && (WH = BH.bottom - HH.bottom + hH, LH < 0 && BH.top - WH < HH.top && (WH = BH.top - (HH.top + hH)));
                else {
                  let AH = BH.bottom - BH.top,
                    SH = HH.bottom - HH.top;
                  WH = ("center" == rH && AH <= SH ? BH.top + AH / 2 - SH / 2 : "start" == rH || "center" == rH && LH < 0 ? BH.top - hH : BH.bottom - SH + hH) - HH.top
                }
                if ("nearest" == AH ? BH.left < HH.left + SH ? (QH = BH.left - (HH.left + SH), LH > 0 && BH.right > HH.right + QH && (QH = BH.right - HH.right + SH)) : BH.right > HH.right - SH && (QH = BH.right - HH.right + SH, LH < 0 && BH.left < HH.left + QH && (QH = BH.left - (HH.left + SH))) : QH = ("center" == AH ? BH.left + (BH.right - BH.left) / 2 - (HH.right - HH.left) / 2 : "start" == AH == tH ? BH.left - SH : BH.right - (HH.right - HH.left) + SH) - HH.left, QH || WH)
                  if (GH) CH.scrollBy(QH, WH);
                  else {
                    let HH = 0,
                      LH = 0;
                    if (WH) {
                      let HH = EH.scrollTop;
                      EH.scrollTop += WH / uH, LH = (EH.scrollTop - HH) * uH
                    }
                    if (QH) {
                      let BH = EH.scrollLeft;
                      EH.scrollLeft += QH / YH, HH = (EH.scrollLeft - BH) * YH
                    }
                    BH = {
                      left: BH.left - HH,
                      top: BH.top - LH,
                      right: BH.right - HH,
                      bottom: BH.bottom - LH
                    }, HH && Math.abs(HH - QH) < 1 && (AH = "nearest"), LH && Math.abs(LH - WH) < 1 && (rH = "nearest")
                  } if (GH) break;
                (BH.top < HH.top || BH.bottom > HH.bottom || BH.left < HH.left || BH.right > HH.right) && (BH = {
                  left: Math.max(BH.left, HH.left),
                  right: Math.min(BH.right, HH.right),
                  top: Math.max(BH.top, HH.top),
                  bottom: Math.min(BH.bottom, HH.bottom)
                }), EH = EH.assignedSlot || EH.parentNode
              } else {
                if (11 != EH.nodeType) break;
                EH = EH.host
              }
          }(this.view.scrollDOM, hH, AH.head < AH.anchor ? -1 : 1, HH.x, HH.y, Math.max(Math.min(HH.xMargin, tH), -tH), Math.max(Math.min(HH.yMargin, zH), -zH), this.view.textDirection == CB.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (rH.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || rH.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let HH = this.view.docView.lineAt(AH.head, 1);
          HH && HH.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(HH) {
        let BH = HH => HH.isWidget() || HH.children.some(BH);
        return BH(this.tile.resolveBlock(HH, 1).tile)
      }
      destroy() {
        gL(this.tile)
      }
    }

    function gL(HH, BH) {
      let LH = null === BH || void 0 === BH ? void 0 : BH.get(HH);
      if (1 != LH) {
        null == LH && HH.destroy();
        for (let LH of HH.children) gL(LH, BH)
      }
    }

    function NL(HH, BH) {
      let LH = HH.observer.selectionRange;
      if (!LH.focusNode) return null;
      let AH = hB(LH.focusNode, LH.focusOffset),
        rH = tB(LH.focusNode, LH.focusOffset),
        SH = AH || rH;
      if (rH && AH && rH.node != AH.node) {
        let BH = GL.get(rH.node);
        if (!BH || BH.isText() && BH.text != rH.node.nodeValue) SH = rH;
        else if (HH.docView.lastCompositionAfterCursor) {
          let HH = GL.get(AH.node);
          !HH || HH.isText() && HH.text != AH.node.nodeValue || (SH = rH)
        }
      }
      if (HH.docView.lastCompositionAfterCursor = SH != AH, !SH) return null;
      let hH = BH - SH.offset;
      return {
        from: hH,
        to: hH + SH.node.nodeValue.length,
        node: SH.node
      }
    }
    let RL = class {
      constructor() {
        this.changes = []
      }
      compareRange(HH, BH) {
        gH(HH, BH, this.changes)
      }
      comparePoint(HH, BH) {
        gH(HH, BH, this.changes)
      }
      boundChange(HH) {
        gH(HH, HH, this.changes)
      }
    };
    class jL {
      constructor() {
        this.changes = []
      }
      compareRange(HH, BH) {
        gH(HH, BH, this.changes)
      }
      comparePoint() {}
      boundChange(HH) {
        gH(HH, HH, this.changes)
      }
    }
    class nL extends IH {
      constructor(HH) {
        super(), this.height = HH
      }
      toDOM() {
        let HH = document.createElement("div");
        return HH.className = "cm-gap", this.updateDOM(HH), HH
      }
      eq(HH) {
        return HH.height == this.height
      }
      updateDOM(HH) {
        return HH.style.height = this.height + "px", !0
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

    function FL(HH, BH, LH) {
      let AH = HH.lineBlockAt(BH);
      if (Array.isArray(AH.type)) {
        let HH;
        for (let rH of AH.type) {
          if (rH.from > BH) break;
          if (!(rH.to < BH)) {
            if (rH.from < BH && rH.to > BH) return rH;
            HH && (rH.type != fH.Text || HH.type == rH.type && !(LH < 0 ? rH.from < BH : rH.to > BH)) || (HH = rH)
          }
        }
        return HH || AH
      }
      return AH
    }

    function DL(HH, BH, LH, AH) {
      let rH = HH.state.doc.lineAt(BH.head),
        SH = HH.bidiSpans(rH),
        hH = HH.textDirectionAt(rH.from);
      for (let tH = BH, zH = null;;) {
        let BH = mB(rH, SH, hH, tH, LH),
          CH = kB;
        if (!BH) {
          if (rH.number == (LH ? HH.state.doc.lines : 1)) return tH;
          CH = "\n", rH = HH.state.doc.line(rH.number + (LH ? 1 : -1)), SH = HH.bidiSpans(rH), BH = HH.visualLineSide(rH, !LH)
        }
        if (zH) {
          if (!zH(CH)) return tH
        } else {
          if (!AH) return BH;
          zH = AH(CH)
        }
        tH = BH
      }
    }

    function wL(HH, BH, LH) {
      for (;;) {
        let AH = 0;
        for (let rH of HH) rH.between(BH - 1, BH + 1, ((HH, rH, SH) => {
          if (BH > HH && BH < rH) {
            let SH = AH || LH || (BH - HH < rH - BH ? -1 : 1);
            BH = SH < 0 ? HH : rH, AH = SH
          }
        }));
        if (!AH) return BH
      }
    }

    function ZL(HH, BH) {
      let LH = null;
      for (let rH = 0; rH < BH.rW.length; rH++) {
        let SH = BH.rW[rH],
          hH = null;
        if (SH.empty) {
          let BH = wL(HH, SH.from, 0);
          BH != SH.from && (hH = AH.i.cursor(BH, -1))
        } else {
          let BH = wL(HH, SH.from, -1),
            LH = wL(HH, SH.to, 1);
          BH == SH.from && LH == SH.to || (hH = AH.i.range(SH.from == SH.anchor ? BH : LH, SH.from == SH.head ? BH : LH))
        }
        hH && (LH || (LH = BH.rW.slice()), LH[rH] = hH)
      }
      return LH ? AH.i.create(LH, BH.mainIndex) : BH
    }

    function dL(HH, BH, LH) {
      let rH = wL(HH.state.facet(AL).map((BH => BH(HH))), LH.from, BH.head > LH.from ? -1 : 1);
      return rH == LH.from ? LH : AH.i.cursor(rH, rH < LH.from ? 1 : -1)
    }
    class aL {
      constructor(HH, BH) {
        this.pos = HH, this.assoc = BH
      }
    }

    function sL(HH, BH, LH, rH) {
      let SH, hH = HH.contentDOM.getBoundingClientRect(),
        tH = hH.top + HH.viewState.paddingTop,
        {
          x: zH,
          y: CH
        } = BH,
        EH = CH - tH;
      for (;;) {
        if (EH < 0) return new aL(0, 1);
        if (EH > HH.viewState.docHeight) return new aL(HH.state.doc.length, -1);
        if (SH = HH.elementAtHeight(EH), null == rH) break;
        if (SH.type == fH.Text) {
          if (rH < 0 ? SH.to < HH.viewport.from : SH.from > HH.viewport.to) break;
          let BH = HH.docView.coordsAt(rH < 0 ? SH.from : SH.to, rH > 0 ? -1 : 1);
          if (BH && (rH < 0 ? BH.top <= EH + tH : BH.bottom >= EH + tH)) break
        }
        let BH = HH.viewState.heightOracle.textHeight / 2;
        EH = rH > 0 ? SH.bottom + BH : SH.top - BH
      }
      if (HH.viewport.from >= SH.to || HH.viewport.to <= SH.from) {
        if (LH) return null;
        if (SH.type == fH.Text) {
          let BH = function(HH, BH, LH, rH, SH) {
            let hH = Math.round((rH - BH.left) * HH.defaultCharacterWidth);
            if (HH.lineWrapping && LH.height > 1.5 * HH.defaultLineHeight) {
              let BH = HH.viewState.heightOracle.textHeight;
              hH += Math.floor((SH - LH.top - .5 * (HH.defaultLineHeight - BH)) / BH) * HH.viewState.heightOracle.lineLength
            }
            let tH = HH.state.sliceDoc(LH.from, LH.to);
            return LH.from + (0, AH.db)(tH, hH, HH.state.tabSize)
          }(HH, hH, SH, zH, CH);
          return new aL(BH, BH == SH.from ? 1 : -1)
        }
      }
      if (SH.type != fH.Text) return EH < (SH.top + SH.bottom) / 2 ? new aL(SH.from, 1) : new aL(SH.to, -1);
      let XH = HH.docView.lineAt(SH.from, 2);
      return XH && XH.length == SH.length || (XH = HH.docView.lineAt(SH.from, -2)), new JL(HH, zH, CH, HH.textDirectionAt(SH.from)).scanTile(XH, SH.from)
    }
    class JL {
      constructor(HH, BH, LH, AH) {
        this.view = HH, this.x = BH, this.y = LH, this.baseDir = AH, this.line = null, this.spans = null
      }
      bidiSpansAt(HH) {
        return (!this.line || this.line.from > HH || this.line.to < HH) && (this.line = this.view.state.doc.lineAt(HH), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(HH, BH) {
        let {
          line: LH,
          spans: AH
        } = this.bidiSpansAt(HH);
        return AH[vB.find(AH, HH - LH.from, -1, BH)].level == this.baseDir
      }
      dirAt(HH, BH) {
        let {
          line: LH,
          spans: AH
        } = this.bidiSpansAt(HH);
        return AH[vB.find(AH, HH - LH.from, -1, BH)].dir
      }
      bidiIn(HH, BH) {
        let {
          spans: LH,
          line: AH
        } = this.bidiSpansAt(HH);
        return LH.length > 1 || LH.length && (LH[0].level != this.baseDir || LH[0].to + AH.from < BH)
      }
      scan(HH, BH) {
        let LH, AH, rH, SH = 0,
          hH = HH.length - 1,
          tH = new Set,
          zH = this.bidiIn(HH[0], HH[hH]),
          CH = -1,
          EH = 1e9;
        HH: for (; SH < hH;) {
          let XH = hH - SH,
            GH = SH + hH >> 1;
          BH: if (tH.has(GH)) {
            let HH = SH + Math.floor(Math.random() * XH);
            for (let BH = 0; BH < XH; BH++) {
              if (!tH.has(HH)) {
                GH = HH;
                break BH
              }
              HH++, HH == hH && (HH = SH)
            }
            break HH
          } tH.add(GH);
          let YH = BH(GH);
          if (YH)
            for (let BH = 0; BH < YH.length; BH++) {
              let tH = YH[BH],
                XH = 0;
              if (!(0 == tH.width && YH.length > 1)) {
                if (tH.bottom < this.y)(!LH || LH.bottom < tH.bottom) && (LH = tH), XH = 1;
                else if (tH.top > this.y)(!AH || AH.top > tH.top) && (AH = tH), XH = -1;
                else {
                  let HH = tH.left > this.x ? this.x - tH.left : tH.right < this.x ? this.x - tH.right : 0,
                    BH = Math.abs(HH);
                  BH < EH && (CH = GH, EH = BH, rH = tH), HH && (XH = HH < 0 == (this.baseDir == CB.LTR) ? -1 : 1)
                } - 1 != XH || zH && !this.baseDirAt(HH[GH], 1) ? 1 != XH || zH && !this.baseDirAt(HH[GH + 1], -1) || (SH = GH + 1) : hH = GH
              }
            }
        }
        if (!rH) {
          let rH = LH && (!AH || this.y - LH.bottom < AH.top - this.y) ? LH : AH;
          return this.y = (rH.top + rH.bottom) / 2, this.scan(HH, BH)
        }
        if (EH) {
          if (LH && LH.bottom > rH.top) return this.y = LH.bottom - 1, this.scan(HH, BH);
          if (AH && AH.top < rH.bottom) return this.y = AH.top + 1, this.scan(HH, BH)
        }
        let XH = (zH ? this.dirAt(HH[CH], 1) : this.baseDir) == CB.LTR;
        return {
          i: CH,
          after: this.x > (rH.left + rH.right) / 2 == XH
        }
      }
      scanText(HH, BH) {
        let LH = [];
        for (let SH = 0; SH < HH.length; SH = (0, AH.$)(HH.text, SH)) LH.push(BH + SH);
        LH.push(BH + HH.length);
        let rH = this.scan(LH, (AH => {
          let rH = LH[AH] - BH,
            SH = LH[AH + 1] - BH;
          return AB(HH.dom, rH, SH).getClientRects()
        }));
        return rH.after ? new aL(LH[rH.i + 1], -1) : new aL(LH[rH.i], 1)
      }
      scanTile(HH, BH) {
        if (!HH.length) return new aL(BH, 1);
        if (1 == HH.children.length) {
          let LH = HH.children[0];
          if (LH.isText()) return this.scanText(LH, BH);
          if (LH.isComposite()) return this.scanTile(LH, BH)
        }
        let LH = [BH];
        for (let hH = 0, tH = BH; hH < HH.children.length; hH++) LH.push(tH += HH.children[hH].length);
        let AH = this.scan(LH, (BH => {
            let LH = HH.children[BH];
            return 48 & LH.flags ? null : (1 == LH.dom.nodeType ? LH.dom : AB(LH.dom, 0, LH.length)).getClientRects()
          })),
          rH = HH.children[AH.i],
          SH = LH[AH.i];
        return rH.isText() ? this.scanText(rH, SH) : rH.isComposite() ? this.scanTile(rH, SH) : AH.after ? new aL(LH[AH.i + 1], -1) : new aL(SH, 1)
      }
    }
    const iL = "\uffff";
    class pL {
      constructor(HH, BH) {
        this.points = HH, this.view = BH, this.text = "", this.lineSeparator = BH.state.facet(AH.k.lineSeparator)
      }
      append(HH) {
        this.text += HH
      }
      lineBreak() {
        this.text += iL
      }
      readRange(HH, BH) {
        if (!HH) return this;
        let LH = HH.parentNode;
        for (let AH = HH;;) {
          this.findPointBefore(LH, AH);
          let HH = this.text.length;
          this.readNode(AH);
          let rH = GL.get(AH),
            SH = AH.nextSibling;
          if (SH == BH) {
            (null === rH || void 0 === rH ? void 0 : rH.breakAfter) && !SH && LH != this.view.contentDOM && this.lineBreak();
            break
          }
          let hH = GL.get(SH);
          (rH && hH ? rH.breakAfter : (rH ? rH.breakAfter : ZH(AH)) || ZH(SH) && ("BR" != AH.nodeName || (null === rH || void 0 === rH ? void 0 : rH.isWidget())) && this.text.length > HH) && !HA(SH, BH) && this.lineBreak(), AH = SH
        }
        return this.findPointBefore(LH, BH), this
      }
      readTextNode(HH) {
        let BH = HH.nodeValue;
        for (let LH of this.points) LH.node == HH && (LH.pos = this.text.length + Math.min(LH.offset, BH.length));
        for (let LH = 0, AH = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let rH, SH = -1,
            hH = 1;
          if (this.lineSeparator ? (SH = BH.indexOf(this.lineSeparator, LH), hH = this.lineSeparator.length) : (rH = AH.exec(BH)) && (SH = rH.index, hH = rH[0].length), this.append(BH.slice(LH, SH < 0 ? BH.length : SH)), SH < 0) break;
          if (this.lineBreak(), hH > 1)
            for (let BH of this.points) BH.node == HH && BH.pos > this.text.length && (BH.pos -= hH - 1);
          LH = SH + hH
        }
      }
      readNode(HH) {
        let BH = GL.get(HH),
          LH = BH && BH.overrideDOMText;
        if (null != LH) {
          this.findPointInside(HH, LH.length);
          for (let HH = LH.iter(); !HH.next().done;) HH.lineBreak ? this.lineBreak() : this.append(HH.value)
        } else 3 == HH.nodeType ? this.readTextNode(HH) : "BR" == HH.nodeName ? HH.nextSibling && this.lineBreak() : 1 == HH.nodeType && this.readRange(HH.firstChild, null)
      }
      findPointBefore(HH, BH) {
        for (let LH of this.points) LH.node == HH && HH.childNodes[LH.offset] == BH && (LH.pos = this.text.length)
      }
      findPointInside(HH, BH) {
        for (let LH of this.points)(3 == HH.nodeType ? LH.node == HH : HH.contains(LH.node)) && (LH.pos = this.text.length + (yL(HH, LH.node, LH.offset) ? BH : 0))
      }
    }

    function yL(HH, BH, LH) {
      for (;;) {
        if (!BH || LH < aH(BH)) return !1;
        if (BH == HH) return !0;
        LH = wH(BH) + 1, BH = BH.parentNode
      }
    }

    function HA(HH, BH) {
      let LH;
      for (; HH != BH && HH; HH = HH.nextSibling) {
        let BH = GL.get(HH);
        if (!(null === BH || void 0 === BH ? void 0 : BH.isWidget())) return !1;
        BH && (LH || (LH = [])).push(BH)
      }
      if (LH)
        for (let AH of LH) {
          let HH = AH.overrideDOMText;
          if (null === HH || void 0 === HH ? void 0 : HH.length) return !1
        }
      return !0
    }
    class BA {
      constructor(HH, BH) {
        this.node = HH, this.offset = BH, this.pos = -1
      }
    }
    class LA {
      constructor(HH, BH, LH, rH) {
        this.typeOver = rH, this.bounds = null, this.text = "", this.domChanged = BH > -1;
        let {
          impreciseHead: SH,
          impreciseAnchor: hH
        } = HH.docView, tH = HH.state.selection;
        if (HH.state.readOnly && BH > -1) this.newSel = null;
        else if (BH > -1 && (this.bounds = AA(HH.docView.tile, BH, LH, 0))) {
          let BH = SH || hH ? [] : function(HH) {
              let BH = [];
              if (HH.root.activeElement != HH.contentDOM) return BH;
              let {
                anchorNode: LH,
                anchorOffset: AH,
                focusNode: rH,
                focusOffset: SH
              } = HH.observer.selectionRange;
              LH && (BH.push(new BA(LH, AH)), rH == LH && SH == AH || BH.push(new BA(rH, SH)));
              return BH
            }(HH),
            LH = new pL(BH, HH);
          LH.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = LH.text, this.newSel = function(HH, BH) {
            if (0 == HH.length) return null;
            let LH = HH[0].pos,
              rH = 2 == HH.length ? HH[1].pos : LH;
            return LH > -1 && rH > -1 ? AH.i.single(LH + BH, rH + BH) : null
          }(BH, this.bounds.from)
        } else {
          let BH = HH.observer.selectionRange,
            LH = SH && SH.node == BH.focusNode && SH.offset == BH.focusOffset || !jH(HH.contentDOM, BH.focusNode) ? tH.main.head : HH.docView.posFromDOM(BH.focusNode, BH.focusOffset),
            rH = hH && hH.node == BH.anchorNode && hH.offset == BH.anchorOffset || !jH(HH.contentDOM, BH.anchorNode) ? tH.main.anchor : HH.docView.posFromDOM(BH.anchorNode, BH.anchorOffset),
            zH = HH.viewport;
          if ((VH.ios || VH.chrome) && tH.main.empty && LH != rH && (zH.from > 0 || zH.to < HH.state.doc.length)) {
            let BH = Math.min(LH, rH),
              AH = Math.max(LH, rH),
              SH = zH.from - BH,
              hH = zH.to - AH;
            0 != SH && 1 != SH && 0 != BH || 0 != hH && -1 != hH && AH != HH.state.doc.length || (LH = 0, rH = HH.state.doc.length)
          }
          if (HH.inputState.composing > -1 && tH.rW.length > 1) this.newSel = tH.replaceRange(AH.i.range(rH, LH));
          else if (HH.lineWrapping && rH == LH && (!tH.main.empty || tH.main.head != LH) && HH.inputState.lastTouchTime > Date.now() - 100) {
            let BH = HH.coordsAtPos(LH, -1),
              rH = 0;
            BH && (rH = HH.inputState.lastTouchY <= BH.bottom ? -1 : 1), this.newSel = AH.i.create([AH.i.cursor(LH, rH)])
          } else this.newSel = AH.i.single(rH, LH)
        }
      }
    }

    function AA(HH, BH, LH, AH) {
      if (HH.isComposite()) {
        let rH = -1,
          SH = -1,
          hH = -1,
          tH = -1;
        for (let zH = 0, CH = AH, EH = AH; zH < HH.children.length; zH++) {
          let AH = HH.children[zH],
            XH = CH + AH.length;
          if (CH < BH && XH > LH) return AA(AH, BH, LH, CH);
          if (XH >= BH && -1 == rH && (rH = zH, SH = CH), CH > LH && AH.dom.parentNode == HH.dom) {
            hH = zH, tH = EH;
            break
          }
          EH = XH, CH = XH + AH.breakAfter
        }
        return {
          from: SH,
          to: tH < 0 ? AH + HH.length : tH,
          startDOM: (rH ? HH.children[rH - 1].dom.nextSibling : null) || HH.dom.firstChild,
          endDOM: hH < HH.children.length && hH >= 0 ? HH.children[hH].dom : null
        }
      }
      return HH.isText() ? {
        from: AH,
        to: AH + HH.length,
        startDOM: HH.dom,
        endDOM: HH.dom.nextSibling
      } : null
    }

    function rA(HH, BH) {
      let LH, {
          newSel: rH
        } = BH,
        {
          state: SH
        } = HH,
        hH = SH.selection.main,
        tH = HH.inputState.lastKeyTime > Date.now() - 100 ? HH.inputState.lastKeyCode : -1;
      if (BH.bounds) {
        let {
          from: HH,
          to: rH
        } = BH.bounds, zH = hH.from, CH = null;
        (8 === tH || VH.android && BH.text.length < rH - HH) && (zH = hH.to, CH = "end");
        let EH, XH, GH = SH.doc.sliceString(HH, rH, iL);
        !hH.empty && hH.from >= HH && hH.to <= rH && (BH.typeOver || GH != BH.text) && GH.slice(0, hH.from - HH) == BH.text.slice(0, hH.from - HH) && GH.slice(hH.to - HH) == BH.text.slice(EH = BH.text.length - (GH.length - (hH.to - HH))) ? LH = {
          from: hH.from,
          to: hH.to,
          insert: AH.F.of(BH.text.slice(hH.from - HH, EH).split(iL))
        } : (XH = hA(GH, BH.text, zH - HH, CH)) && (VH.chrome && 13 == tH && XH.toB == XH.from + 2 && BH.text.slice(XH.from, XH.toB) == iL + iL && XH.toB--, LH = {
          from: HH + XH.from,
          to: HH + XH.toA,
          insert: AH.F.of(BH.text.slice(XH.from, XH.toB).split(iL))
        })
      } else rH && (!HH.hasFocus && SH.facet(dB) || tA(rH, hH)) && (rH = null);
      if (!LH && !rH) return !1;
      if ((VH.mac || VH.android) && LH && LH.from == LH.to && LH.from == hH.head - 1 && /^\. ?$/.test(LH.insert.toString()) && "off" == HH.contentDOM.getAttribute("autocorrect") ? (rH && 2 == LH.insert.length && (rH = AH.i.single(rH.main.anchor - 1, rH.main.head - 1)), LH = {
          from: LH.from,
          to: LH.to,
          insert: AH.F.of([LH.insert.toString().replace(".", " ")])
        }) : SH.doc.lineAt(hH.from).to < hH.to && HH.docView.lineHasWidget(hH.to) && HH.inputState.insertingTextAt > Date.now() - 50 ? LH = {
          from: hH.from,
          to: hH.to,
          insert: SH.toText(HH.inputState.insertingText)
        } : VH.chrome && LH && LH.from == LH.to && LH.from == hH.head && "\n " == LH.insert.toString() && HH.lineWrapping && (rH && (rH = AH.i.single(rH.main.anchor - 1, rH.main.head - 1)), LH = {
          from: hH.from,
          to: hH.to,
          insert: AH.F.of([" "])
        }), LH) return SA(HH, LH, rH, tH);
      if (rH && !tA(rH, hH)) {
        let BH = !1,
          LH = "select";
        return HH.inputState.lastSelectionTime > Date.now() - 50 && ("select" == HH.inputState.lastSelectionOrigin && (BH = !0), LH = HH.inputState.lastSelectionOrigin, "select.pointer" == LH && (rH = ZL(SH.facet(AL).map((BH => BH(HH))), rH))), HH.dispatch({
          selection: rH,
          scrollIntoView: BH,
          userEvent: LH
        }), !0
      }
      return !1
    }

    function SA(HH, BH, LH) {
      let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (VH.ios && HH.inputState.flushIOSKey(BH)) return !0;
      let SH = HH.state.selection.main;
      if (VH.android && (BH.to == SH.to && (BH.from == SH.from || BH.from == SH.from - 1 && " " == HH.state.sliceDoc(BH.from, SH.from)) && 1 == BH.insert.length && 2 == BH.insert.lines && rB(HH.contentDOM, "Enter", 13) || (BH.from == SH.from - 1 && BH.to == SH.to && 0 == BH.insert.length || 8 == rH && BH.insert.length < BH.to - BH.from && BH.to > SH.head) && rB(HH.contentDOM, "Backspace", 8) || BH.from == SH.from && BH.to == SH.to + 1 && 0 == BH.insert.length && rB(HH.contentDOM, "Delete", 46))) return !0;
      let hH, tH = BH.insert.toString();
      HH.inputState.composing >= 0 && HH.inputState.composing++;
      let zH = () => hH || (hH = function(HH, BH, LH) {
        let rH, SH = HH.state,
          hH = SH.selection.main,
          tH = -1;
        if (BH.from == BH.to && BH.from < hH.from || BH.from > hH.to) {
          let LH = BH.from < hH.from ? -1 : 1,
            AH = LH < 0 ? hH.from : hH.to,
            rH = wL(SH.facet(AL).map((BH => BH(HH))), AH, LH);
          BH.from == rH && (tH = rH)
        }
        if (tH > -1) rH = {
          changes: BH,
          selection: AH.i.cursor(BH.from + BH.insert.length, -1)
        };
        else if (BH.from >= hH.from && BH.to <= hH.to && BH.to - BH.from >= (hH.to - hH.from) / 3 && (!LH || LH.main.empty && LH.main.from == BH.from + BH.insert.length) && HH.inputState.composing < 0) {
          let LH = hH.from < BH.from ? SH.sliceDoc(hH.from, BH.from) : "",
            AH = hH.to > BH.to ? SH.sliceDoc(BH.to, hH.to) : "";
          rH = SH.replaceSelection(HH.state.toText(LH + BH.insert.sliceString(0, void 0, HH.state.lineBreak) + AH))
        } else {
          let tH = SH.changes(BH),
            zH = LH && LH.main.to <= tH.newLength ? LH.main : void 0;
          if (SH.selection.rW.length > 1 && (HH.inputState.composing >= 0 || HH.inputState.compositionPendingChange) && BH.to <= hH.to + 10 && BH.to >= hH.to - 10) {
            let CH, EH = HH.state.sliceDoc(BH.from, BH.to),
              XH = LH && NL(HH, LH.main.head);
            if (XH) {
              let HH = BH.insert.length - (BH.to - BH.from);
              CH = {
                from: XH.from,
                to: XH.to - HH
              }
            } else CH = HH.state.doc.lineAt(hH.head);
            let GH = hH.to - BH.to;
            rH = SH.changeByRange((LH => {
              if (LH.from == hH.from && LH.to == hH.to) return {
                changes: tH,
                range: zH || LH.map(tH)
              };
              let rH = LH.to - GH,
                XH = rH - EH.length;
              if (HH.state.sliceDoc(XH, rH) != EH || rH >= CH.from && XH <= CH.to) return {
                range: LH
              };
              let YH = SH.changes({
                  from: XH,
                  to: rH,
                  insert: BH.insert
                }),
                uH = LH.to - hH.to;
              return {
                changes: YH,
                range: zH ? AH.i.range(Math.max(0, zH.anchor + uH), Math.max(0, zH.head + uH)) : LH.map(YH)
              }
            }))
          } else rH = {
            changes: tH,
            selection: zH && SH.selection.replaceRange(zH)
          }
        }
        let zH = "input.type";
        (HH.composing || HH.inputState.compositionPendingChange && HH.inputState.compositionEndedAt > Date.now() - 50) && (HH.inputState.compositionPendingChange = !1, zH += ".compose", HH.inputState.compositionFirstChange && (zH += ".start", HH.inputState.compositionFirstChange = !1));
        return SH.update(rH, {
          userEvent: zH,
          scrollIntoView: !0
        })
      }(HH, BH, LH));
      return HH.state.facet(eB).some((LH => LH(HH, BH.from, BH.to, tH, zH))) || HH.dispatch(zH()), !0
    }

    function hA(HH, BH, LH, AH) {
      let rH = Math.min(HH.length, BH.length),
        SH = 0;
      for (; SH < rH && HH.charCodeAt(SH) == BH.charCodeAt(SH);) SH++;
      if (SH == rH && HH.length == BH.length) return null;
      let hH = HH.length,
        tH = BH.length;
      for (; hH > 0 && tH > 0 && HH.charCodeAt(hH - 1) == BH.charCodeAt(tH - 1);) hH--, tH--;
      if ("end" == AH) {
        LH -= hH + Math.max(0, SH - Math.min(hH, tH)) - SH
      }
      if (hH < SH && HH.length < BH.length) {
        SH -= LH <= SH && LH >= hH ? SH - LH : 0, tH = SH + (tH - hH), hH = SH
      } else if (tH < SH) {
        SH -= LH <= SH && LH >= tH ? SH - LH : 0, hH = SH + (hH - tH), tH = SH
      }
      return {
        from: SH,
        toA: hH,
        toB: tH
      }
    }

    function tA(HH, BH) {
      return BH.head == HH.main.head && BH.anchor == HH.main.anchor
    }
    class zA {
      setSelectionOrigin(HH) {
        this.lastSelectionOrigin = HH, this.lastSelectionTime = Date.now()
      }
      constructor(HH) {
        this.view = HH, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = HH.hasFocus, VH.safari && HH.contentDOM.addEventListener("input", (() => null)), VH.gecko && function(HH) {
          KA.has(HH) || (KA.add(HH), HH.addEventListener("copy", (() => {})), HH.addEventListener("cut", (() => {})))
        }(HH.contentDOM.ownerDocument)
      }
      handleEvent(HH) {
        (function(HH, BH) {
          if (!BH.bubbles) return !0;
          if (BH.defaultPrevented) return !1;
          for (let LH, AH = BH.target; AH != HH.contentDOM; AH = AH.parentNode)
            if (!AH || 11 == AH.nodeType || (LH = GL.get(AH)) && LH.isWidget() && !LH.isHidden && LH.widget.ignoreEvent(BH)) return !1;
          return !0
        })(this.view, HH) && !this.ignoreDuringComposition(HH) && ("keydown" == HH.type && this.keydown(HH) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(HH.type, HH))) : this.runHandlers(HH.type, HH)))
      }
      runHandlers(HH, BH) {
        let LH = this.handlers[HH];
        if (LH) {
          for (let HH of LH.observers) HH(this.view, BH);
          for (let HH of LH.handlers) {
            if (BH.defaultPrevented) break;
            if (HH(this.view, BH)) {
              BH.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(HH) {
        let BH = EA(HH),
          LH = this.handlers,
          AH = this.view.contentDOM;
        for (let rH in BH)
          if ("scroll" != rH) {
            let HH = !BH[rH].handlers.length,
              SH = LH[rH];
            SH && HH != !SH.handlers.length && (AH.removeEventListener(rH, this.handleEvent), SH = null), SH || AH.addEventListener(rH, this.handleEvent, {
              passive: HH
            })
          } for (let rH in LH) "scroll" == rH || BH[rH] || AH.removeEventListener(rH, this.handleEvent);
        this.handlers = BH
      }
      keydown(HH) {
        if (this.lastKeyCode = HH.keyCode, this.lastKeyTime = Date.now(), 9 == HH.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != HH.keyCode && YA.indexOf(HH.keyCode) < 0 && (this.tabFocusMode = -1), VH.android && VH.chrome && !HH.synthetic && (13 == HH.keyCode || 8 == HH.keyCode)) return this.view.observer.delayAndroidKey(HH.key, HH.keyCode), !0;
        let BH;
        return !VH.ios || HH.synthetic || HH.altKey || HH.metaKey || HH.shiftKey || !((BH = XA.find((BH => BH.keyCode == HH.keyCode))) && !HH.ctrlKey || GA.indexOf(HH.key) > -1 && HH.ctrlKey) ? (229 != HH.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = BH || HH, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(HH) {
        let BH = this.pendingIOSKey;
        return !!BH && (!("Enter" == BH.key && HH && HH.from < HH.to && /^\S+$/.test(HH.insert.toString())) && (this.pendingIOSKey = void 0, rB(this.view.contentDOM, BH.key, BH.keyCode, BH instanceof KeyboardEvent ? BH : void 0)))
      }
      ignoreDuringComposition(HH) {
        return !(!/^key/.test(HH.type) || HH.synthetic) && (this.composing > 0 || !!(VH.safari && !VH.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(HH) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = HH
      }
      update(HH) {
        this.view.observer.update(HH), this.mouseSelection && this.mouseSelection.update(HH), this.draggedContent && HH.docChanged && (this.draggedContent = this.draggedContent.map(HH.changes)), HH.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function CA(HH, BH) {
      return (LH, AH) => {
        try {
          return BH.call(HH, AH, LH)
        } catch (rH) {
          ZB(LH.state, rH)
        }
      }
    }

    function EA(HH) {
      let BH = Object.create(null);

      function LH(HH) {
        return BH[HH] || (BH[HH] = {
          observers: [],
          handlers: []
        })
      }
      for (let AH of HH) {
        let HH = AH.spec,
          BH = HH && HH.plugin.domEventHandlers,
          rH = HH && HH.plugin.domEventObservers;
        if (BH)
          for (let SH in BH) {
            let HH = BH[SH];
            HH && LH(SH).handlers.push(CA(AH.value, HH))
          }
        if (rH)
          for (let SH in rH) {
            let HH = rH[SH];
            HH && LH(SH).observers.push(CA(AH.value, HH))
          }
      }
      for (let AH in WA) LH(AH).handlers.push(WA[AH]);
      for (let AH in MA) LH(AH).observers.push(MA[AH]);
      return BH
    }
    const XA = [{
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
      GA = "dthko",
      YA = [16, 17, 18, 20, 91, 92, 224, 225];

    function uA(HH) {
      return .7 * Math.max(0, HH) + 8
    }
    class QA {
      constructor(HH, BH, LH, rH) {
        this.view = HH, this.startEvent = BH, this.style = LH, this.mustSelect = rH, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = BH, this.scrollParents = pH(HH.contentDOM), this.atoms = HH.state.facet(AL).map((BH => BH(HH)));
        let SH = HH.contentDOM.ownerDocument;
        SH.addEventListener("mousemove", this.move = this.move.bind(this)), SH.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = BH.shiftKey, this.multiple = HH.state.facet(AH.k.allowMultipleSelections) && function(HH, BH) {
          let LH = HH.state.facet(IB);
          return LH.length ? LH[0](BH) : VH.mac ? BH.metaKey : BH.ctrlKey
        }(HH, BH), this.dragging = !(! function(HH, BH) {
          let {
            main: LH
          } = HH.state.selection;
          if (LH.empty) return !1;
          let AH = RH(HH.root);
          if (!AH || 0 == AH.rangeCount) return !0;
          let rH = AH.getRangeAt(0).getClientRects();
          for (let SH = 0; SH < rH.length; SH++) {
            let HH = rH[SH];
            if (HH.left <= BH.clientX && HH.right >= BH.clientX && HH.top <= BH.clientY && HH.bottom >= BH.clientY) return !0
          }
          return !1
        }(HH, BH) || 1 != kA(BH)) && null
      }
      start(HH) {
        !1 === this.dragging && this.select(HH)
      }
      move(HH) {
        if (0 == HH.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (BH = this.startEvent, LH = HH, Math.max(Math.abs(BH.clientX - LH.clientX), Math.abs(BH.clientY - LH.clientY)) < 10)) return;
        var BH, LH;
        this.select(this.lastEvent = HH);
        let AH = 0,
          rH = 0,
          SH = 0,
          hH = 0,
          tH = this.view.win.innerWidth,
          zH = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: SH,
          right: tH
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: hH,
          bottom: zH
        } = this.scrollParents.y.getBoundingClientRect());
        let CH = tL(this.view);
        HH.clientX - CH.left <= SH + 6 ? AH = -uA(SH - HH.clientX) : HH.clientX + CH.right >= tH - 6 && (AH = uA(HH.clientX - tH)), HH.clientY - CH.top <= hH + 6 ? rH = -uA(hH - HH.clientY) : HH.clientY + CH.bottom >= zH - 6 && (rH = uA(HH.clientY - zH)), this.setScrollSpeed(AH, rH)
      }
      up(HH) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || HH.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let HH = this.view.contentDOM.ownerDocument;
        HH.removeEventListener("mousemove", this.move), HH.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(HH, BH) {
        this.scrollSpeed = {
          x: HH,
          y: BH
        }, HH || BH ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: HH,
          y: BH
        } = this.scrollSpeed;
        HH && this.scrollParents.x && (this.scrollParents.x.scrollLeft += HH, HH = 0), BH && this.scrollParents.y && (this.scrollParents.y.scrollTop += BH, BH = 0), (HH || BH) && this.view.win.scrollBy(HH, BH), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(HH) {
        let {
          view: BH
        } = this, LH = ZL(this.atoms, this.style.get(HH, this.extend, this.multiple));
        !this.mustSelect && LH.eq(BH.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: LH,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(HH) {
        HH.transactions.some((HH => HH.isUserEvent("input.type"))) ? this.destroy() : this.style.update(HH) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const WA = Object.create(null),
      MA = Object.create(null),
      xA = VH.ie && VH.ie_version < 15 || VH.ios && VH.webkit_version < 604;

    function vA(HH, BH, LH) {
      for (let AH of HH.facet(BH)) LH = AH(LH, HH);
      return LH
    }

    function PA(HH, BH) {
      BH = vA(HH.state, gB, BH);
      let LH, {
          state: rH
        } = HH,
        SH = 1,
        hH = rH.toText(BH),
        tH = hH.lines == rH.selection.rW.length;
      if (null != oA && rH.selection.rW.every((HH => HH.empty)) && oA == hH.toString()) {
        let HH = -1;
        LH = rH.changeByRange((LH => {
          let zH = rH.doc.lineAt(LH.from);
          if (zH.from == HH) return {
            range: LH
          };
          HH = zH.from;
          let CH = rH.toText((tH ? hH.line(SH++).text : BH) + rH.lineBreak);
          return {
            changes: {
              from: zH.from,
              insert: CH
            },
            range: AH.i.cursor(LH.from + CH.length)
          }
        }))
      } else LH = tH ? rH.changeByRange((HH => {
        let BH = hH.line(SH++);
        return {
          changes: {
            from: HH.from,
            to: HH.to,
            insert: BH.text
          },
          range: AH.i.cursor(HH.from + BH.length)
        }
      })) : rH.replaceSelection(hH);
      HH.dispatch(LH, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function TA(HH, BH, LH, rH) {
      if (1 == rH) return AH.i.cursor(BH, LH);
      if (2 == rH) return function(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          rH = HH.charCategorizer(BH),
          SH = HH.doc.lineAt(BH),
          hH = BH - SH.from;
        if (0 == SH.length) return AH.i.cursor(BH);
        0 == hH ? LH = 1 : hH == SH.length && (LH = -1);
        let tH = hH,
          zH = hH;
        LH < 0 ? tH = (0, AH.$)(SH.text, hH, !1) : zH = (0, AH.$)(SH.text, hH);
        let CH = rH(SH.text.slice(tH, zH));
        for (; tH > 0;) {
          let HH = (0, AH.$)(SH.text, tH, !1);
          if (rH(SH.text.slice(HH, tH)) != CH) break;
          tH = HH
        }
        for (; zH < SH.length;) {
          let HH = (0, AH.$)(SH.text, zH);
          if (rH(SH.text.slice(zH, HH)) != CH) break;
          zH = HH
        }
        return AH.i.range(tH + SH.from, zH + SH.from)
      }(HH.state, BH, LH);
      {
        let rH = HH.docView.lineAt(BH, LH),
          SH = HH.state.doc.lineAt(rH ? rH.posAtEnd : BH),
          hH = rH ? rH.posAtStart : SH.from,
          tH = rH ? rH.posAtEnd : SH.to;
        return tH < HH.state.doc.length && tH == SH.to && tH++, AH.i.range(hH, tH)
      }
    }
    MA.scroll = HH => {
      HH.inputState.lastScrollTop = HH.scrollDOM.scrollTop, HH.inputState.lastScrollLeft = HH.scrollDOM.scrollLeft
    }, MA.wheel = MA.mousewheel = HH => {
      HH.inputState.lastWheelEvent = Date.now()
    }, WA.keydown = (HH, BH) => (HH.inputState.setSelectionOrigin("select"), 27 == BH.keyCode && 0 != HH.inputState.tabFocusMode && (HH.inputState.tabFocusMode = Date.now() + 2e3), !1), MA.touchstart = (HH, BH) => {
      let LH = HH.inputState,
        AH = BH.targetTouches[0];
      LH.lastTouchTime = Date.now(), AH && (LH.lastTouchX = AH.clientX, LH.lastTouchY = AH.clientY), LH.setSelectionOrigin("select.pointer")
    }, MA.touchmove = HH => {
      HH.inputState.setSelectionOrigin("select.pointer")
    }, WA.mousedown = (HH, BH) => {
      if (HH.observer.flush(), HH.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let LH = null;
      for (let AH of HH.state.facet(lB))
        if (LH = AH(HH, BH), LH) break;
      if (LH || 0 != BH.button || (LH = function(HH, BH) {
          let LH = HH.posAndSideAtCoords({
              x: BH.clientX,
              y: BH.clientY
            }, !1),
            rH = kA(BH),
            SH = HH.state.selection;
          return {
            update(HH) {
              HH.docChanged && (LH.pos = HH.changes.mapPos(LH.pos), SH = SH.map(HH.changes))
            },
            get(BH, hH, tH) {
              let zH, CH = HH.posAndSideAtCoords({
                  x: BH.clientX,
                  y: BH.clientY
                }, !1),
                EH = TA(HH, CH.pos, CH.assoc, rH);
              if (LH.pos != CH.pos && !hH) {
                let BH = TA(HH, LH.pos, LH.assoc, rH),
                  SH = Math.min(BH.from, EH.from),
                  hH = Math.max(BH.to, EH.to);
                EH = SH < EH.from ? AH.i.range(SH, hH, EH.assoc) : AH.i.range(hH, SH, EH.assoc)
              }
              return hH ? SH.replaceRange(SH.main.extend(EH.from, EH.to, EH.assoc)) : tH && 1 == rH && SH.rW.length > 1 && (zH = function(HH, BH) {
                for (let LH = 0; LH < HH.rW.length; LH++) {
                  let {
                    from: rH,
                    to: SH
                  } = HH.rW[LH];
                  if (rH <= BH && SH >= BH) return AH.i.create(HH.rW.slice(0, LH).concat(HH.rW.slice(LH + 1)), HH.mainIndex == LH ? 0 : HH.mainIndex - (HH.mainIndex > LH ? 1 : 0))
                }
                return null
              }(SH, CH.pos)) ? zH : tH ? SH.addRange(EH) : AH.i.create([EH])
            }
          }
        }(HH, BH)), LH) {
        let AH = !HH.hasFocus;
        HH.inputState.startMouseSelection(new QA(HH, BH, LH, AH)), AH && HH.observer.ignore((() => {
          LB(HH.contentDOM);
          let BH = HH.root.activeElement;
          BH && !BH.contains(HH.contentDOM) && BH.blur()
        }));
        let rH = HH.inputState.mouseSelection;
        if (rH) return rH.start(BH), !1 === rH.dragging
      } else HH.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const UA = VH.ie && VH.ie_version <= 11;
    let VA = null,
      OA = 0,
      bA = 0;

    function kA(HH) {
      if (!UA) return HH.detail;
      let BH = VA,
        LH = bA;
      return VA = HH, bA = Date.now(), OA = !BH || LH > Date.now() - 400 && Math.abs(BH.clientX - HH.clientX) < 2 && Math.abs(BH.clientY - HH.clientY) < 2 ? (OA + 1) % 3 : 1
    }

    function mA(HH, BH, LH, AH) {
      if (!(LH = vA(HH.state, gB, LH))) return;
      let rH = HH.posAtCoords({
          x: BH.clientX,
          y: BH.clientY
        }, !1),
        {
          draggedContent: SH
        } = HH.inputState,
        hH = AH && SH && function(HH, BH) {
          let LH = HH.state.facet(fB);
          return LH.length ? LH[0](BH) : VH.mac ? !BH.altKey : !BH.ctrlKey
        }(HH, BH) ? {
          from: SH.from,
          to: SH.to
        } : null,
        tH = {
          from: rH,
          insert: LH
        },
        zH = HH.state.changes(hH ? [hH, tH] : tH);
      HH.focus(), HH.dispatch({
        changes: zH,
        selection: {
          anchor: zH.mapPos(rH, -1),
          head: zH.mapPos(rH, 1)
        },
        userEvent: hH ? "move.drop" : "input.drop"
      }), HH.inputState.draggedContent = null
    }
    WA.dragstart = (HH, BH) => {
      let {
        selection: {
          main: LH
        }
      } = HH.state;
      if (BH.target.draggable) {
        let rH = HH.docView.tile.nearest(BH.target);
        if (rH && rH.isWidget()) {
          let HH = rH.posAtStart,
            BH = HH + rH.length;
          (HH >= LH.to || BH <= LH.from) && (LH = AH.i.range(HH, BH))
        }
      }
      let {
        inputState: rH
      } = HH;
      return rH.mouseSelection && (rH.mouseSelection.dragging = !0), rH.draggedContent = LH, BH.dataTransfer && (BH.dataTransfer.setData("Text", vA(HH.state, NB, HH.state.sliceDoc(LH.from, LH.to))), BH.dataTransfer.effectAllowed = "copyMove"), !1
    }, WA.dragend = HH => (HH.inputState.draggedContent = null, !1), WA.drop = (HH, BH) => {
      if (!BH.dataTransfer) return !1;
      if (HH.state.readOnly) return !0;
      let LH = BH.dataTransfer.files;
      if (LH && LH.length) {
        let AH = Array(LH.length),
          rH = 0,
          SH = () => {
            ++rH == LH.length && mA(HH, BH, AH.filter((HH => null != HH)).join(HH.state.lineBreak), !1)
          };
        for (let HH = 0; HH < LH.length; HH++) {
          let BH = new FileReader;
          BH.onerror = SH, BH.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(BH.result) || (AH[HH] = BH.result), SH()
          }, BH.readAsText(LH[HH])
        }
        return !0
      } {
        let LH = BH.dataTransfer.getData("Text");
        if (LH) return mA(HH, BH, LH, !0), !0
      }
      return !1
    }, WA.paste = (HH, BH) => {
      if (HH.state.readOnly) return !0;
      HH.observer.flush();
      let LH = xA ? null : BH.clipboardData;
      return LH ? (PA(HH, LH.getData("text/plain") || LH.getData("text/uri-list")), !0) : (function(HH) {
        let BH = HH.dom.parentNode;
        if (!BH) return;
        let LH = BH.appendChild(document.createElement("textarea"));
        LH.style.cssText = "position: fixed; left: -10000px; top: 10px", LH.focus(), setTimeout((() => {
          HH.focus(), LH.remove(), PA(HH, LH.value)
        }), 50)
      }(HH), !1)
    };
    let oA = null;
    WA.copy = WA.cut = (HH, BH) => {
      if (!nH(HH.contentDOM, HH.observer.selectionRange)) return !1;
      let {
        text: LH,
        rW: AH,
        linewise: rH
      } = function(HH) {
        let BH = [],
          LH = [],
          AH = !1;
        for (let rH of HH.selection.rW) rH.empty || (BH.push(HH.sliceDoc(rH.from, rH.to)), LH.push(rH));
        if (!BH.length) {
          let rH = -1;
          for (let {
              from: AH
            }
            of HH.selection.rW) {
            let SH = HH.doc.lineAt(AH);
            SH.number > rH && (BH.push(SH.text), LH.push({
              from: SH.from,
              to: Math.min(HH.doc.length, SH.to + 1)
            })), rH = SH.number
          }
          AH = !0
        }
        return {
          text: vA(HH, NB, BH.join(HH.lineBreak)),
          rW: LH,
          linewise: AH
        }
      }(HH.state);
      if (!LH && !rH) return !1;
      oA = rH ? LH : null, "cut" != BH.type || HH.state.readOnly || HH.dispatch({
        changes: AH,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let SH = xA ? null : BH.clipboardData;
      return SH ? (SH.clearData(), SH.setData("text/plain", LH), !0) : (function(HH, BH) {
        let LH = HH.dom.parentNode;
        if (!LH) return;
        let AH = LH.appendChild(document.createElement("textarea"));
        AH.style.cssText = "position: fixed; left: -10000px; top: 10px", AH.value = BH, AH.focus(), AH.selectionEnd = BH.length, AH.selectionStart = 0, setTimeout((() => {
          AH.remove(), HH.focus()
        }), 50)
      }(HH, LH), !1)
    };
    const IA = AH.c.define();

    function fA(HH, BH) {
      let LH = [];
      for (let AH of HH.facet(qB)) {
        let rH = AH(HH, BH);
        rH && LH.push(rH)
      }
      return LH.length ? HH.update({
        effects: LH,
        annotations: IA.of(!0)
      }) : null
    }

    function lA(HH) {
      setTimeout((() => {
        let BH = HH.hasFocus;
        if (BH != HH.inputState.notifiedFocused) {
          let LH = fA(HH.state, BH);
          LH ? HH.dispatch(LH) : HH.update([])
        }
      }), 10)
    }
    MA.focus = HH => {
      HH.inputState.lastFocusTime = Date.now(), HH.scrollDOM.scrollTop || !HH.inputState.lastScrollTop && !HH.inputState.lastScrollLeft || (HH.scrollDOM.scrollTop = HH.inputState.lastScrollTop, HH.scrollDOM.scrollLeft = HH.inputState.lastScrollLeft), lA(HH)
    }, MA.blur = HH => {
      HH.observer.clearSelectionRange(), lA(HH)
    }, MA.compositionstart = MA.compositionupdate = HH => {
      HH.observer.editContext || (null == HH.inputState.compositionFirstChange && (HH.inputState.compositionFirstChange = !0), HH.inputState.composing < 0 && (HH.inputState.composing = 0))
    }, MA.compositionend = HH => {
      HH.observer.editContext || (HH.inputState.composing = -1, HH.inputState.compositionEndedAt = Date.now(), HH.inputState.compositionPendingKey = !0, HH.inputState.compositionPendingChange = HH.observer.pendingRecords().length > 0, HH.inputState.compositionFirstChange = null, VH.chrome && VH.android ? HH.observer.flushSoon() : HH.inputState.compositionPendingChange ? Promise.resolve().then((() => HH.observer.flush())) : setTimeout((() => {
        HH.inputState.composing < 0 && HH.docView.hasComposition && HH.update([])
      }), 50))
    }, MA.contextmenu = HH => {
      HH.inputState.lastContextMenu = Date.now()
    }, WA.beforeinput = (HH, BH) => {
      var LH, AH;
      if ("insertText" != BH.inputType && "insertCompositionText" != BH.inputType || (HH.inputState.insertingText = BH.data, HH.inputState.insertingTextAt = Date.now()), "insertReplacementText" == BH.inputType && HH.observer.editContext) {
        let AH = null === (LH = BH.dataTransfer) || void 0 === LH ? void 0 : LH.getData("text/plain"),
          rH = BH.getTargetRanges();
        if (AH && rH.length) {
          let BH = rH[0],
            LH = HH.posAtDOM(BH.startContainer, BH.startOffset),
            SH = HH.posAtDOM(BH.endContainer, BH.endOffset);
          return SA(HH, {
            from: LH,
            to: SH,
            insert: HH.state.toText(AH)
          }, null), !0
        }
      }
      let rH;
      if (VH.chrome && VH.android && (rH = XA.find((HH => HH.inputType == BH.inputType))) && (HH.observer.delayAndroidKey(rH.key, rH.keyCode), "Backspace" == rH.key || "Delete" == rH.key)) {
        let BH = (null === (AH = window.visualViewport) || void 0 === AH ? void 0 : AH.height) || 0;
        setTimeout((() => {
          var LH;
          ((null === (LH = window.visualViewport) || void 0 === LH ? void 0 : LH.height) || 0) > BH + 10 && HH.hasFocus && (HH.contentDOM.blur(), HH.focus())
        }), 100)
      }
      return VH.ios && "deleteContentForward" == BH.inputType && HH.observer.flushSoon(), VH.safari && "insertText" == BH.inputType && HH.inputState.composing >= 0 && setTimeout((() => MA.compositionend(HH, BH)), 20), !1
    };
    const KA = new Set;
    const cA = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let eA = !1;

    function qA() {
      eA = !1
    }
    class gA {
      constructor(HH) {
        this.lineWrapping = HH, this.doc = AH.F.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(HH, BH) {
        let LH = this.doc.lineAt(BH).number - this.doc.lineAt(HH).number + 1;
        return this.lineWrapping && (LH += Math.max(0, Math.ceil((BH - HH - LH * this.lineLength * .5) / this.lineLength))), this.lineHeight * LH
      }
      heightForLine(HH) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((HH - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(HH) {
        return this.doc = HH, this
      }
      mustRefreshForWrapping(HH) {
        return cA.indexOf(HH) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(HH) {
        let BH = !1;
        for (let LH = 0; LH < HH.length; LH++) {
          let AH = HH[LH];
          AH < 0 ? LH++ : this.heightSamples[Math.floor(10 * AH)] || (BH = !0, this.heightSamples[Math.floor(10 * AH)] = !0)
        }
        return BH
      }
      refresh(HH, BH, LH, AH, rH, SH) {
        let hH = cA.indexOf(HH) > -1,
          tH = Math.abs(BH - this.lineHeight) > .3 || this.lineWrapping != hH || Math.abs(LH - this.charWidth) > .1;
        if (this.lineWrapping = hH, this.lineHeight = BH, this.charWidth = LH, this.textHeight = AH, this.lineLength = rH, tH) {
          this.heightSamples = {};
          for (let HH = 0; HH < SH.length; HH++) {
            let BH = SH[HH];
            BH < 0 ? HH++ : this.heightSamples[Math.floor(10 * BH)] = !0
          }
        }
        return tH
      }
    }
    class NA {
      constructor(HH, BH) {
        this.from = HH, this.heights = BH, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class RA {
      constructor(HH, BH, LH, AH, rH) {
        this.from = HH, this.length = BH, this.top = LH, this.height = AH, this._content = rH
      }
      get type() {
        return "number" == typeof this._content ? fH.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof eH ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(HH) {
        let BH = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(HH._content) ? HH._content : [HH]);
        return new RA(this.from, this.length + HH.length, this.top, this.height + HH.height, BH)
      }
    }
    var jA = function(HH) {
      return HH[HH.ByPos = 0] = "ByPos", HH[HH.ByHeight = 1] = "ByHeight", HH[HH.ByPosNoHeight = 2] = "ByPosNoHeight", HH
    }(jA || (jA = {}));
    const nA = .001;
    class FA {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = HH, this.height = BH, this.flags = LH
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(HH) {
        this.flags = (HH ? 2 : 0) | -3 & this.flags
      }
      setHeight(HH) {
        this.height != HH && (Math.abs(this.height - HH) > nA && (eA = !0), this.height = HH)
      }
      replace(HH, BH, LH) {
        return FA.of(LH)
      }
      decomposeLeft(HH, BH) {
        BH.push(this)
      }
      decomposeRight(HH, BH) {
        BH.push(this)
      }
      applyChanges(HH, BH, LH, AH) {
        let rH = this,
          SH = LH.doc;
        for (let hH = AH.length - 1; hH >= 0; hH--) {
          let {
            fromA: tH,
            toA: zH,
            fromB: CH,
            toB: EH
          } = AH[hH], XH = rH.lineAt(tH, jA.ByPosNoHeight, LH.setDoc(BH), 0, 0), GH = XH.to >= zH ? XH : rH.lineAt(zH, jA.ByPosNoHeight, LH, 0, 0);
          for (EH += GH.to - zH, zH = GH.to; hH > 0 && XH.from <= AH[hH - 1].toA;) tH = AH[hH - 1].fromA, CH = AH[hH - 1].fromB, hH--, tH < XH.from && (XH = rH.lineAt(tH, jA.ByPosNoHeight, LH, 0, 0));
          CH += XH.from - tH, tH = XH.from;
          let YH = iA.build(LH.setDoc(SH), HH, CH, EH);
          rH = DA(rH, rH.replace(tH, zH, YH))
        }
        return rH.updateHeight(LH, 0)
      }
      static empty() {
        return new dA(0, 0, 0)
      }
      static of (HH) {
        if (1 == HH.length) return HH[0];
        let BH = 0,
          LH = HH.length,
          AH = 0,
          rH = 0;
        for (;;)
          if (BH == LH)
            if (AH > 2 * rH) {
              let rH = HH[BH - 1];
              rH.break ? HH.splice(--BH, 1, rH.left, null, rH.right) : HH.splice(--BH, 1, rH.left, rH.right), LH += 1 + rH.break, AH -= rH.size
            } else {
              if (!(rH > 2 * AH)) break;
              {
                let BH = HH[LH];
                BH.break ? HH.splice(LH, 1, BH.left, null, BH.right) : HH.splice(LH, 1, BH.left, BH.right), LH += 2 + BH.break, rH -= BH.size
              }
            }
        else if (AH < rH) {
          let LH = HH[BH++];
          LH && (AH += LH.size)
        } else {
          let BH = HH[--LH];
          BH && (rH += BH.size)
        }
        let SH = 0;
        return null == HH[BH - 1] ? (SH = 1, BH--) : null == HH[BH] && (SH = 1, LH++), new sA(FA.of(HH.slice(0, BH)), SH, FA.of(HH.slice(LH)))
      }
    }

    function DA(HH, BH) {
      return HH == BH ? HH : (HH.constructor != BH.constructor && (eA = !0), BH)
    }
    FA.prototype.size = 1;
    const wA = lH.replace({});
    class ZA extends FA {
      constructor(HH, BH, LH) {
        super(HH, BH), this.deco = LH, this.spaceAbove = 0
      }
      mainBlock(HH, BH) {
        return new RA(BH, this.length, HH + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(HH, BH, LH, AH) {
        return this.spaceAbove && HH < LH + this.spaceAbove ? new RA(AH, 0, LH, this.spaceAbove, wA) : this.mainBlock(LH, AH)
      }
      lineAt(HH, BH, LH, AH, rH) {
        let SH = this.mainBlock(AH, rH);
        return this.spaceAbove ? this.blockAt(0, LH, AH, rH).join(SH) : SH
      }
      forEachLine(HH, BH, LH, AH, rH, SH) {
        HH <= rH + this.length && BH >= rH && SH(this.lineAt(0, jA.ByPos, LH, AH, rH))
      }
      setMeasuredHeight(HH) {
        let BH = HH.heights[HH.index++];
        BH < 0 ? (this.spaceAbove = -BH, BH = HH.heights[HH.index++]) : this.spaceAbove = 0, this.setHeight(BH)
      }
      updateHeight(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 3 ? arguments[3] : void 0;
        return LH && LH.from <= BH && LH.more && this.setMeasuredHeight(LH), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class dA extends ZA {
      constructor(HH, BH, LH) {
        super(HH, BH, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = LH
      }
      mainBlock(HH, BH) {
        return new RA(BH, this.length, HH + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(HH, BH, LH) {
        let AH = LH[0];
        return 1 == LH.length && (AH instanceof dA || AH instanceof aA && 4 & AH.flags) && Math.abs(this.length - AH.length) < 10 ? (AH instanceof aA ? AH = new dA(AH.length, this.height, this.spaceAbove) : AH.height = this.height, this.outdated || (AH.outdated = !1), AH) : FA.of(LH)
      }
      updateHeight(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = arguments.length > 3 ? arguments[3] : void 0;
        return AH && AH.from <= BH && AH.more ? this.setMeasuredHeight(AH) : (LH || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, HH.heightForLine(this.length - this.collapsed)) + this.breaks * HH.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class aA extends FA {
      constructor(HH) {
        super(HH, 0)
      }
      heightMetrics(HH, BH) {
        let LH, AH = HH.doc.lineAt(BH).number,
          rH = HH.doc.lineAt(BH + this.length).number,
          SH = rH - AH + 1,
          hH = 0;
        if (HH.lineWrapping) {
          let BH = Math.min(this.height, HH.lineHeight * SH);
          LH = BH / SH, this.length > SH + 1 && (hH = (this.height - BH) / (this.length - SH - 1))
        } else LH = this.height / SH;
        return {
          firstLine: AH,
          lastLine: rH,
          perLine: LH,
          perChar: hH
        }
      }
      blockAt(HH, BH, LH, AH) {
        let {
          firstLine: rH,
          lastLine: SH,
          perLine: hH,
          perChar: tH
        } = this.heightMetrics(BH, AH);
        if (BH.lineWrapping) {
          let rH = AH + (HH < BH.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (HH - LH) / this.height)) * this.length)),
            SH = BH.doc.lineAt(rH),
            zH = hH + SH.length * tH,
            CH = Math.max(LH, HH - zH / 2);
          return new RA(SH.from, SH.length, CH, zH, 0)
        } {
          let AH = Math.max(0, Math.min(SH - rH, Math.floor((HH - LH) / hH))),
            {
              from: tH,
              length: zH
            } = BH.doc.line(rH + AH);
          return new RA(tH, zH, LH + hH * AH, hH, 0)
        }
      }
      lineAt(HH, BH, LH, AH, rH) {
        if (BH == jA.ByHeight) return this.blockAt(HH, LH, AH, rH);
        if (BH == jA.ByPosNoHeight) {
          let {
            from: BH,
            to: AH
          } = LH.doc.lineAt(HH);
          return new RA(BH, AH - BH, 0, 0, 0)
        }
        let {
          firstLine: SH,
          perLine: hH,
          perChar: tH
        } = this.heightMetrics(LH, rH), zH = LH.doc.lineAt(HH), CH = hH + zH.length * tH, EH = zH.number - SH, XH = AH + hH * EH + tH * (zH.from - rH - EH);
        return new RA(zH.from, zH.length, Math.max(AH, Math.min(XH, AH + this.height - CH)), CH, 0)
      }
      forEachLine(HH, BH, LH, AH, rH, SH) {
        HH = Math.max(HH, rH), BH = Math.min(BH, rH + this.length);
        let {
          firstLine: hH,
          perLine: tH,
          perChar: zH
        } = this.heightMetrics(LH, rH);
        for (let CH = HH, EH = AH; CH <= BH;) {
          let BH = LH.doc.lineAt(CH);
          if (CH == HH) {
            let LH = BH.number - hH;
            EH += tH * LH + zH * (HH - rH - LH)
          }
          let AH = tH + zH * BH.length;
          SH(new RA(BH.from, BH.length, EH, AH, 0)), EH += AH, CH = BH.to + 1
        }
      }
      replace(HH, BH, LH) {
        let AH = this.length - BH;
        if (AH > 0) {
          let HH = LH[LH.length - 1];
          HH instanceof aA ? LH[LH.length - 1] = new aA(HH.length + AH) : LH.push(null, new aA(AH - 1))
        }
        if (HH > 0) {
          let BH = LH[0];
          BH instanceof aA ? LH[0] = new aA(HH + BH.length) : LH.unshift(new aA(HH - 1), null)
        }
        return FA.of(LH)
      }
      decomposeLeft(HH, BH) {
        BH.push(new aA(HH - 1), null)
      }
      decomposeRight(HH, BH) {
        BH.push(null, new aA(this.length - HH - 1))
      }
      updateHeight(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = arguments.length > 3 ? arguments[3] : void 0,
          rH = BH + this.length;
        if (AH && AH.from <= BH + this.length && AH.more) {
          let LH = [],
            SH = Math.max(BH, AH.from),
            hH = -1;
          for (AH.from > BH && LH.push(new aA(AH.from - BH - 1).updateHeight(HH, BH)); SH <= rH && AH.more;) {
            let BH = HH.doc.lineAt(SH).length;
            LH.length && LH.push(null);
            let rH = AH.heights[AH.index++],
              tH = 0;
            rH < 0 && (tH = -rH, rH = AH.heights[AH.index++]), -1 == hH ? hH = rH : Math.abs(rH - hH) >= nA && (hH = -2);
            let zH = new dA(BH, rH, tH);
            zH.outdated = !1, LH.push(zH), SH += BH + 1
          }
          SH <= rH && LH.push(null, new aA(rH - SH).updateHeight(HH, SH));
          let tH = FA.of(LH);
          return (hH < 0 || Math.abs(tH.height - this.height) >= nA || Math.abs(hH - this.heightMetrics(HH, BH).perLine) >= nA) && (eA = !0), DA(this, tH)
        }
        return (LH || this.outdated) && (this.setHeight(HH.heightForGap(BH, BH + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class sA extends FA {
      constructor(HH, BH, LH) {
        super(HH.length + BH + LH.length, HH.height + LH.height, BH | (HH.outdated || LH.outdated ? 2 : 0)), this.left = HH, this.right = LH, this.size = HH.size + LH.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(HH, BH, LH, AH) {
        let rH = LH + this.left.height;
        return HH < rH ? this.left.blockAt(HH, BH, LH, AH) : this.right.blockAt(HH, BH, rH, AH + this.left.length + this.break)
      }
      lineAt(HH, BH, LH, AH, rH) {
        let SH = AH + this.left.height,
          hH = rH + this.left.length + this.break,
          tH = BH == jA.ByHeight ? HH < SH : HH < hH,
          zH = tH ? this.left.lineAt(HH, BH, LH, AH, rH) : this.right.lineAt(HH, BH, LH, SH, hH);
        if (this.break || (tH ? zH.to < hH : zH.from > hH)) return zH;
        let CH = BH == jA.ByPosNoHeight ? jA.ByPosNoHeight : jA.ByPos;
        return tH ? zH.join(this.right.lineAt(hH, CH, LH, SH, hH)) : this.left.lineAt(hH, CH, LH, AH, rH).join(zH)
      }
      forEachLine(HH, BH, LH, AH, rH, SH) {
        let hH = AH + this.left.height,
          tH = rH + this.left.length + this.break;
        if (this.break) HH < tH && this.left.forEachLine(HH, BH, LH, AH, rH, SH), BH >= tH && this.right.forEachLine(HH, BH, LH, hH, tH, SH);
        else {
          let zH = this.lineAt(tH, jA.ByPos, LH, AH, rH);
          HH < zH.from && this.left.forEachLine(HH, zH.from - 1, LH, AH, rH, SH), zH.to >= HH && zH.from <= BH && SH(zH), BH > zH.to && this.right.forEachLine(zH.to + 1, BH, LH, hH, tH, SH)
        }
      }
      replace(HH, BH, LH) {
        let AH = this.left.length + this.break;
        if (BH < AH) return this.balanced(this.left.replace(HH, BH, LH), this.right);
        if (HH > this.left.length) return this.balanced(this.left, this.right.replace(HH - AH, BH - AH, LH));
        let rH = [];
        HH > 0 && this.decomposeLeft(HH, rH);
        let SH = rH.length;
        for (let hH of LH) rH.push(hH);
        if (HH > 0 && JA(rH, SH - 1), BH < this.length) {
          let HH = rH.length;
          this.decomposeRight(BH, rH), JA(rH, HH)
        }
        return FA.of(rH)
      }
      decomposeLeft(HH, BH) {
        let LH = this.left.length;
        if (HH <= LH) return this.left.decomposeLeft(HH, BH);
        BH.push(this.left), this.break && (LH++, HH >= LH && BH.push(null)), HH > LH && this.right.decomposeLeft(HH - LH, BH)
      }
      decomposeRight(HH, BH) {
        let LH = this.left.length,
          AH = LH + this.break;
        if (HH >= AH) return this.right.decomposeRight(HH - AH, BH);
        HH < LH && this.left.decomposeRight(HH, BH), this.break && HH < AH && BH.push(null), BH.push(this.right)
      }
      balanced(HH, BH) {
        return HH.size > 2 * BH.size || BH.size > 2 * HH.size ? FA.of(this.break ? [HH, null, BH] : [HH, BH]) : (this.left = DA(this.left, HH), this.right = DA(this.right, BH), this.setHeight(HH.height + BH.height), this.outdated = HH.outdated || BH.outdated, this.size = HH.size + BH.size, this.length = HH.length + this.break+BH.length, this)
      }
      updateHeight(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: rH,
            right: SH
          } = this,
          hH = BH + rH.length + this.break,
          tH = null;
        return AH && AH.from <= BH + rH.length && AH.more ? tH = rH = rH.updateHeight(HH, BH, LH, AH) : rH.updateHeight(HH, BH, LH), AH && AH.from <= hH + SH.length && AH.more ? tH = SH = SH.updateHeight(HH, hH, LH, AH) : SH.updateHeight(HH, hH, LH), tH ? this.balanced(rH, SH) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function JA(HH, BH) {
      let LH, AH;
      null == HH[BH] && (LH = HH[BH - 1]) instanceof aA && (AH = HH[BH + 1]) instanceof aA && HH.splice(BH - 1, 3, new aA(LH.length + 1 + AH.length))
    }
    class iA {
      constructor(HH, BH) {
        this.pos = HH, this.oracle = BH, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = HH
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(HH, BH) {
        if (this.lineStart > -1) {
          let HH = Math.min(BH, this.lineEnd),
            LH = this.nodes[this.nodes.length - 1];
          LH instanceof dA ? LH.length += HH - this.pos : (HH > this.pos || !this.isCovered) && this.nodes.push(new dA(HH - this.pos, -1, 0)), this.writtenTo = HH, BH > HH && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = BH
      }
      point(HH, BH, LH) {
        if (HH < BH || LH.heightRelevant) {
          let AH = LH.widget ? LH.widget.estimatedHeight : 0,
            rH = LH.widget ? LH.widget.lineBreaks : 0;
          AH < 0 && (AH = this.oracle.lineHeight);
          let SH = BH - HH;
          LH.block ? this.vLH(new ZA(SH, AH, LH)) : (SH || rH || AH >= 5) && this.addLineDeco(AH, rH, SH)
        } else BH > HH && this.span(HH, BH);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: HH,
          to: BH
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = HH, this.lineEnd = BH, this.writtenTo < HH && ((this.writtenTo < HH - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, HH - 1)), this.nodes.push(null)), this.pos > HH && this.nodes.push(new dA(this.pos - HH, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(HH, BH) {
        let LH = new aA(BH - HH);
        return this.oracle.doc.lineAt(HH).to == BH && (LH.flags |= 4), LH
      }
      ensureLine() {
        this.enterLine();
        let HH = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (HH instanceof dA) return HH;
        let BH = new dA(0, -1, 0);
        return this.nodes.push(BH), BH
      }
      vLH(HH) {
        this.enterLine();
        let BH = HH.deco;
        BH && BH.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(HH), this.writtenTo = this.pos = this.pos + HH.length, BH && BH.endSide > 0 && (this.covering = HH)
      }
      addLineDeco(HH, BH, LH) {
        let AH = this.ensureLine();
        AH.length += LH, AH.collapsed += LH, AH.widgetHeight = Math.max(AH.widgetHeight, HH), AH.breaks += BH, this.writtenTo = this.pos = this.pos + LH
      }
      finish(HH) {
        let BH = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || BH instanceof dA || this.isCovered ? (this.writtenTo < this.pos || null == BH) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new dA(0, -1, 0));
        let LH = HH;
        for (let AH of this.nodes) AH instanceof dA && AH.updateHeight(this.oracle, LH), LH += AH ? AH.length : 1;
        return this.nodes
      }
      static build(HH, BH, LH, rH) {
        let SH = new iA(LH, HH);
        return AH.x.spans(BH, LH, rH, SH, 0), SH.finish(LH)
      }
    }
    class pA {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(HH, BH, LH, AH) {
        (HH < BH || LH && LH.heightRelevant || AH && AH.heightRelevant) && gH(HH, BH, this.changes, 5)
      }
    }

    function yA(HH, BH) {
      let LH = HH.getBoundingClientRect(),
        AH = HH.ownerDocument,
        rH = AH.defaultView || window,
        SH = Math.max(0, LH.left),
        hH = Math.min(rH.innerWidth, LH.right),
        tH = Math.max(0, LH.top),
        zH = Math.min(rH.innerHeight, LH.bottom);
      for (let CH = HH.parentNode; CH && CH != AH.body;)
        if (1 == CH.nodeType) {
          let BH = CH,
            LH = window.getComputedStyle(BH);
          if ((BH.scrollHeight > BH.clientHeight || BH.scrollWidth > BH.clientWidth) && "visible" != LH.overflow) {
            let LH = BH.getBoundingClientRect();
            SH = Math.max(SH, LH.left), hH = Math.min(hH, LH.right), tH = Math.max(tH, LH.top), zH = Math.min(CH == HH.parentNode ? rH.innerHeight : zH, LH.bottom)
          }
          CH = "absolute" == LH.position || "fixed" == LH.position ? BH.offsetParent : BH.parentNode
        } else {
          if (11 != CH.nodeType) break;
          CH = CH.host
        } return {
        left: SH - LH.left,
        right: Math.max(SH, hH) - LH.left,
        top: tH - (LH.top + BH),
        bottom: Math.max(tH, zH) - (LH.top + BH)
      }
    }

    function Hr(HH, BH) {
      let LH = HH.getBoundingClientRect();
      return {
        left: 0,
        right: LH.right - LH.left,
        top: BH,
        bottom: LH.bottom - (LH.top + BH)
      }
    }
    class Br {
      constructor(HH, BH, LH, AH) {
        this.from = HH, this.to = BH, this.size = LH, this.displaySize = AH
      }
      static same(HH, BH) {
        if (HH.length != BH.length) return !1;
        for (let LH = 0; LH < HH.length; LH++) {
          let AH = HH[LH],
            rH = BH[LH];
          if (AH.from != rH.from || AH.to != rH.to || AH.size != rH.size) return !1
        }
        return !0
      }
      draw(HH, BH) {
        return lH.replace({
          widget: new Lr(this.displaySize * (BH ? HH.scaleY : HH.scaleX), BH)
        }).range(this.from, this.to)
      }
    }
    class Lr extends IH {
      constructor(HH, BH) {
        super(), this.size = HH, this.vertical = BH
      }
      eq(HH) {
        return HH.size == this.size && HH.vertical == this.vertical
      }
      toDOM() {
        let HH = document.createElement("div");
        return this.vertical ? HH.style.height = this.size + "px" : (HH.style.width = this.size + "px", HH.style.height = "2px", HH.style.display = "inline-block"), HH
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class Ar {
      constructor(HH, BH) {
        this.view = HH, this.state = BH, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = tr, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = CB.LTR, this.iHH = [], this.mustEnforceCursorAssoc = !1;
        let LH = BH.facet(yB).some((HH => "function" != typeof HH && "cm-lineWrapping" == HH.class));
        this.heightOracle = new gA(LH), this.stateDeco = zr(BH), this.heightMap = FA.empty().applyChanges(this.stateDeco, AH.F.empty, this.heightOracle.setDoc(BH.doc), [new CL(0, 0, 0, BH.doc.length)]);
        for (let AH = 0; AH < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); AH++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = lH.set(this.lineGaps.map((HH => HH.draw(this, !1)))), this.scrollParent = HH.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let HH = [this.viewport],
          {
            main: BH
          } = this.state.selection;
        for (let LH = 0; LH <= 1; LH++) {
          let AH = LH ? BH.head : BH.anchor;
          if (!HH.some((HH => {
              let {
                from: BH,
                to: LH
              } = HH;
              return AH >= BH && AH <= LH
            }))) {
            let {
              from: BH,
              to: LH
            } = this.lineBlockAt(AH);
            HH.push(new rr(BH, LH))
          }
        }
        return this.viewports = HH.sort(((HH, BH) => HH.from - BH.from)), this.updateScaler()
      }
      updateScaler() {
        let HH = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? tr : new Cr(this.heightOracle, this.heightMap, this.viewports), HH.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (HH => {
          this.viewportLines.push(Er(HH, this.scaler))
        }))
      }
      update(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = HH.state;
        let LH = this.stateDeco;
        this.stateDeco = zr(this.state);
        let rH = HH.changedRanges,
          SH = CL.extendWithRanges(rH, function(HH, BH, LH) {
            let rH = new pA;
            return AH.x.compare(HH, BH, LH, rH, 0), rH.changes
          }(LH, this.stateDeco, HH ? HH.changes : AH.ChangeSet.empty(this.state.doc.length))),
          hH = this.heightMap.height,
          tH = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        qA(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, HH.startState.doc, this.heightOracle.setDoc(this.state.doc), SH), (this.heightMap.height != hH || eA) && (HH.flags |= 2), tH ? (this.scrollAnchorPos = HH.changes.mapPos(tH.from, -1), this.scrollAnchorHeight = tH.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = hH);
        let zH = SH.length ? this.mapViewport(this.viewport, HH.changes) : this.viewport;
        (BH && (BH.range.head < zH.from || BH.range.head > zH.to) || !this.viewportIsAppropriate(zH)) && (zH = this.getViewport(0, BH));
        let CH = zH.from != this.viewport.from || zH.to != this.viewport.to;
        this.viewport = zH, HH.flags |= this.updateForViewport(), (CH || !HH.changes.empty || 2 & HH.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, HH.changes))), HH.flags |= this.computeVisibleRanges(HH.changes), BH && (this.scrollTarget = BH), !this.mustEnforceCursorAssoc && (HH.selectionSet || HH.focusChanged) && HH.view.lineWrapping && HH.state.selection.main.empty && HH.state.selection.main.assoc && !HH.state.facet(jB) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: HH
        } = this, BH = HH.contentDOM, LH = window.getComputedStyle(BH), rH = this.heightOracle, SH = LH.whiteSpace;
        this.defaultTextDirection = "rtl" == LH.direction ? CB.RTL : CB.LTR;
        let hH = this.heightOracle.mustRefreshForWrapping(SH) || "refresh" === this.mustMeasureContent,
          tH = BH.getBoundingClientRect(),
          zH = hH || this.mustMeasureContent || this.contentDOMHeight != tH.height;
        this.contentDOMHeight = tH.height, this.mustMeasureContent = !1;
        let CH = 0,
          EH = 0;
        if (tH.width && tH.height) {
          let {
            scaleX: HH,
            scaleY: LH
          } = iH(BH, tH);
          (HH > .005 && Math.abs(this.scaleX - HH) > .005 || LH > .005 && Math.abs(this.scaleY - LH) > .005) && (this.scaleX = HH, this.scaleY = LH, CH |= 16, hH = zH = !0)
        }
        let XH = (parseInt(LH.paddingTop) || 0) * this.scaleY,
          GH = (parseInt(LH.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == XH && this.paddingBottom == GH || (this.paddingTop = XH, this.paddingBottom = GH, CH |= 18), this.editorWidth != HH.scrollDOM.clientWidth && (rH.lineWrapping && (zH = !0), this.editorWidth = HH.scrollDOM.clientWidth, CH |= 16);
        let YH = pH(this.view.contentDOM, !1).y;
        YH != this.scrollParent && (this.scrollParent = YH, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let uH = this.getScrollOffset();
        this.scrollOffset != uH && (this.scrollAnchorHeight = -1, this.scrollOffset = uH), this.scrolledToBottom = SB(this.scrollParent || HH.win);
        let QH = (this.printing ? Hr : yA)(BH, this.paddingTop),
          WH = QH.top - this.pixelViewport.top,
          MH = QH.bottom - this.pixelViewport.bottom;
        this.pixelViewport = QH;
        let xH = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (xH != this.inView && (this.inView = xH, xH && (zH = !0)), !this.inView && !this.scrollTarget && ! function(HH) {
            let BH = HH.getBoundingClientRect(),
              LH = HH.ownerDocument.defaultView || window;
            return BH.left < LH.innerWidth && BH.right > 0 && BH.top < LH.innerHeight && BH.bottom > 0
          }(HH.dom)) return 0;
        let vH = tH.width;
        if (this.contentDOMWidth == vH && this.editorHeight == HH.scrollDOM.clientHeight || (this.contentDOMWidth = tH.width, this.editorHeight = HH.scrollDOM.clientHeight, CH |= 16), zH) {
          let BH = HH.docView.measureVisibleLineHeights(this.viewport);
          if (rH.mustRefreshForHeights(BH) && (hH = !0), hH || rH.lineWrapping && Math.abs(vH - this.contentDOMWidth) > rH.charWidth) {
            let {
              lineHeight: LH,
              charWidth: AH,
              textHeight: tH
            } = HH.docView.measureTextSize();
            hH = LH > 0 && rH.refresh(SH, LH, AH, tH, Math.max(5, vH / AH), BH), hH && (HH.docView.minWidth = 0, CH |= 16)
          }
          WH > 0 && MH > 0 ? EH = Math.max(WH, MH) : WH < 0 && MH < 0 && (EH = Math.min(WH, MH)), qA();
          for (let LH of this.viewports) {
            let SH = LH.from == this.viewport.from ? BH : HH.docView.measureVisibleLineHeights(LH);
            this.heightMap = (hH ? FA.empty().applyChanges(this.stateDeco, AH.F.empty, this.heightOracle, [new CL(0, 0, 0, HH.state.doc.length)]) : this.heightMap).updateHeight(rH, 0, hH, new NA(LH.from, SH))
          }
          eA && (CH |= 2)
        }
        let PH = !this.viewportIsAppropriate(this.viewport, EH) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return PH && (2 & CH && (CH |= this.updateScaler()), this.viewport = this.getViewport(EH, this.scrollTarget), CH |= this.updateForViewport()), (2 & CH || PH) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(hH ? [] : this.lineGaps, HH)), CH |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, HH.docView.enforceCursorAssoc()), CH
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(HH, BH) {
        let LH = .5 - Math.max(-.5, Math.min(.5, HH / 1e3 / 2)),
          AH = this.heightMap,
          rH = this.heightOracle,
          {
            visibleTop: SH,
            visibleBottom: hH
          } = this,
          tH = new rr(AH.lineAt(SH - 1e3 * LH, jA.ByHeight, rH, 0, 0).from, AH.lineAt(hH + 1e3 * (1 - LH), jA.ByHeight, rH, 0, 0).to);
        if (BH) {
          let {
            head: HH
          } = BH.range;
          if (HH < tH.from || HH > tH.to) {
            let LH, SH = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              hH = AH.lineAt(HH, jA.ByPos, rH, 0, 0);
            LH = "center" == BH.y ? (hH.top + hH.bottom) / 2 - SH / 2 : "start" == BH.y || "nearest" == BH.y && HH < tH.from ? hH.top : hH.bottom - SH, tH = new rr(AH.lineAt(LH - 500, jA.ByHeight, rH, 0, 0).from, AH.lineAt(LH + SH + 500, jA.ByHeight, rH, 0, 0).to)
          }
        }
        return tH
      }
      mapViewport(HH, BH) {
        let LH = BH.mapPos(HH.from, -1),
          AH = BH.mapPos(HH.to, 1);
        return new rr(this.heightMap.lineAt(LH, jA.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(AH, jA.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(HH) {
        let {
          from: BH,
          to: LH
        } = HH, AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: rH
        } = this.heightMap.lineAt(BH, jA.ByPos, this.heightOracle, 0, 0), {
          bottom: SH
        } = this.heightMap.lineAt(LH, jA.ByPos, this.heightOracle, 0, 0), {
          visibleTop: hH,
          visibleBottom: tH
        } = this;
        return (0 == BH || rH <= hH - Math.max(10, Math.min(-AH, 250))) && (LH == this.state.doc.length || SH >= tH + Math.max(10, Math.min(AH, 250))) && rH > hH - 2e3 && SH < tH + 2e3
      }
      mapLineGaps(HH, BH) {
        if (!HH.length || BH.empty) return HH;
        let LH = [];
        for (let AH of HH) BH.touchesRange(AH.from, AH.to) || LH.push(new Br(BH.mapPos(AH.from), BH.mapPos(AH.to), AH.size, AH.displaySize));
        return LH
      }
      ensureLineGaps(HH, BH) {
        let LH = this.heightOracle.lineWrapping,
          rH = LH ? 1e4 : 2e3,
          SH = rH >> 1,
          hH = rH << 1;
        if (this.defaultTextDirection != CB.LTR && !LH) return [];
        let tH = [],
          zH = (rH, hH, CH, EH) => {
            if (hH - rH < SH) return;
            let XH = this.state.selection.main,
              GH = [XH.from];
            XH.empty || GH.push(XH.to);
            for (let HH of GH)
              if (HH > rH && HH < hH) return zH(rH, HH - 10, CH, EH), void zH(HH + 10, hH, CH, EH);
            let YH = function(HH, BH) {
              for (let LH of HH)
                if (BH(LH)) return LH;
              return
            }(HH, (HH => HH.from >= CH.from && HH.to <= CH.to && Math.abs(HH.from - rH) < SH && Math.abs(HH.to - hH) < SH && !GH.some((BH => HH.from < BH && HH.to > BH))));
            if (!YH) {
              if (hH < CH.to && BH && LH && BH.iHH.some((HH => HH.from <= hH && HH.to >= hH))) {
                let HH = BH.moveToLineBoundary(AH.i.cursor(hH), !1, !0).head;
                HH > rH && (hH = HH)
              }
              let HH = this.gapSize(CH, rH, hH, EH);
              YH = new Br(rH, hH, HH, LH || HH < 2e6 ? HH : 2e6)
            }
            tH.push(YH)
          },
          CH = BH => {
            if (BH.length < hH || BH.type != fH.Text) return;
            let SH = function(HH, BH, LH) {
              let rH = [],
                SH = HH,
                hH = 0;
              AH.x.spans(LH, HH, BH, {
                span() {},
                point(HH, BH) {
                  HH > SH && (rH.push({
                    from: SH,
                    to: HH
                  }), hH += HH - SH), SH = BH
                }
              }, 20), SH < BH && (rH.push({
                from: SH,
                to: BH
              }), hH += BH - SH);
              return {
                total: hH,
                rW: rH
              }
            }(BH.from, BH.to, this.stateDeco);
            if (SH.total < hH) return;
            let tH, CH, EH = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (LH) {
              let HH, LH, AH = rH / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != EH) {
                let rH = hr(SH, EH),
                  hH = ((this.visibleBottom - this.visibleTop) / 2 + AH) / BH.height;
                HH = rH - hH, LH = rH + hH
              } else HH = (this.visibleTop - BH.top - AH) / BH.height, LH = (this.visibleBottom - BH.top + AH) / BH.height;
              tH = Sr(SH, HH), CH = Sr(SH, LH)
            } else {
              let LH = SH.total * this.heightOracle.charWidth,
                AH = rH * this.heightOracle.charWidth,
                hH = 0;
              if (LH > 2e6)
                for (let rH of HH) rH.from >= BH.from && rH.from < BH.to && rH.size != rH.displaySize && rH.from * this.heightOracle.charWidth + hH < this.pixelViewport.left && (hH = rH.size - rH.displaySize);
              let zH, XH, GH = this.pixelViewport.left + hH,
                YH = this.pixelViewport.right + hH;
              if (null != EH) {
                let HH = hr(SH, EH),
                  BH = ((YH - GH) / 2 + AH) / LH;
                zH = HH - BH, XH = HH + BH
              } else zH = (GH - AH) / LH, XH = (YH + AH) / LH;
              tH = Sr(SH, zH), CH = Sr(SH, XH)
            }
            tH > BH.from && zH(BH.from, tH, BH, SH), CH < BH.to && zH(CH, BH.to, BH, SH)
          };
        for (let AH of this.viewportLines) Array.isArray(AH.type) ? AH.type.forEach(CH) : CH(AH);
        return tH
      }
      gapSize(HH, BH, LH, AH) {
        let rH = hr(AH, LH) - hr(AH, BH);
        return this.heightOracle.lineWrapping ? HH.height * rH : AH.total * this.heightOracle.charWidth * rH
      }
      updateLineGaps(HH) {
        Br.same(HH, this.lineGaps) || (this.lineGaps = HH, this.lineGapDeco = lH.set(HH.map((HH => HH.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(HH) {
        let BH = this.stateDeco;
        this.lineGaps.length && (BH = BH.concat(this.lineGapDeco));
        let LH = [];
        AH.x.spans(BH, this.viewport.from, this.viewport.to, {
          span(HH, BH) {
            LH.push({
              from: HH,
              to: BH
            })
          },
          point() {}
        }, 20);
        let rH = 0;
        if (LH.length != this.iHH.length) rH = 12;
        else
          for (let AH = 0; AH < LH.length && !(8 & rH); AH++) {
            let BH = this.iHH[AH],
              SH = LH[AH];
            BH.from == SH.from && BH.to == SH.to || (rH |= 4, HH && HH.mapPos(BH.from, -1) == SH.from && HH.mapPos(BH.to, 1) == SH.to || (rH |= 8))
          }
        return this.iHH = LH, rH
      }
      lineBlockAt(HH) {
        return HH >= this.viewport.from && HH <= this.viewport.to && this.viewportLines.find((BH => BH.from <= HH && BH.to >= HH)) || Er(this.heightMap.lineAt(HH, jA.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(HH) {
        return HH >= this.viewportLines[0].top && HH <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((BH => BH.top <= HH && BH.bottom >= HH)) || Er(this.heightMap.lineAt(this.scaler.fromDOM(HH), jA.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(HH) {
        let BH = this.lineBlockAtHeight(HH + 8);
        return BH.from >= this.viewport.from || this.viewportLines[0].top - HH > 200 ? BH : this.viewportLines[0]
      }
      elementAtHeight(HH) {
        return Er(this.heightMap.blockAt(this.scaler.fromDOM(HH), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class rr {
      constructor(HH, BH) {
        this.from = HH, this.to = BH
      }
    }

    function Sr(HH, BH) {
      let {
        total: LH,
        rW: AH
      } = HH;
      if (BH <= 0) return AH[0].from;
      if (BH >= 1) return AH[AH.length - 1].to;
      let rH = Math.floor(LH * BH);
      for (let SH = 0;; SH++) {
        let {
          from: HH,
          to: BH
        } = AH[SH], LH = BH - HH;
        if (rH <= LH) return HH + rH;
        rH -= LH
      }
    }

    function hr(HH, BH) {
      let LH = 0;
      for (let {
          from: AH,
          to: rH
        }
        of HH.rW) {
        if (BH <= rH) {
          LH += BH - AH;
          break
        }
        LH += rH - AH
      }
      return LH / HH.total
    }
    const tr = {
      toDOM: HH => HH,
      fromDOM: HH => HH,
      scale: 1,
      eq(HH) {
        return HH == this
      }
    };

    function zr(HH) {
      let BH = HH.facet(HL).filter((HH => "function" != typeof HH)),
        LH = HH.facet(LL).filter((HH => "function" != typeof HH));
      return LH.length && BH.push(AH.x.join(LH)), BH
    }
    class Cr {
      constructor(HH, BH, LH) {
        let AH = 0,
          rH = 0,
          SH = 0;
        this.viewports = LH.map((LH => {
          let {
            from: rH,
            to: SH
          } = LH, hH = BH.lineAt(rH, jA.ByPos, HH, 0, 0).top, tH = BH.lineAt(SH, jA.ByPos, HH, 0, 0).bottom;
          return AH += tH - hH, {
            from: rH,
            to: SH,
            top: hH,
            bottom: tH,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - AH) / (BH.height - AH);
        for (let hH of this.viewports) hH.domTop = SH + (hH.top - rH) * this.scale, SH = hH.domBottom = hH.domTop + (hH.bottom - hH.top), rH = hH.bottom
      }
      toDOM(HH) {
        for (let BH = 0, LH = 0, AH = 0;; BH++) {
          let rH = BH < this.viewports.length ? this.viewports[BH] : null;
          if (!rH || HH < rH.top) return AH + (HH - LH) * this.scale;
          if (HH <= rH.bottom) return rH.domTop + (HH - rH.top);
          LH = rH.bottom, AH = rH.domBottom
        }
      }
      fromDOM(HH) {
        for (let BH = 0, LH = 0, AH = 0;; BH++) {
          let rH = BH < this.viewports.length ? this.viewports[BH] : null;
          if (!rH || HH < rH.domTop) return LH + (HH - AH) / this.scale;
          if (HH <= rH.domBottom) return rH.top + (HH - rH.domTop);
          LH = rH.bottom, AH = rH.domBottom
        }
      }
      eq(HH) {
        return HH instanceof Cr && (this.scale == HH.scale && this.viewports.length == HH.viewports.length && this.viewports.every(((BH, LH) => BH.from == HH.viewports[LH].from && BH.to == HH.viewports[LH].to)))
      }
    }

    function Er(HH, BH) {
      if (1 == BH.scale) return HH;
      let LH = BH.toDOM(HH.top),
        AH = BH.toDOM(HH.bottom);
      return new RA(HH.from, HH.length, LH, AH - LH, Array.isArray(HH._content) ? HH._content.map((HH => Er(HH, BH))) : HH._content)
    }
    const Xr = AH.l.define({
        combine: HH => HH.join(" ")
      }),
      Gr = AH.l.define({
        combine: HH => HH.indexOf(!0) > -1
      }),
      Yr = rH.e.newName(),
      ur = rH.e.newName(),
      Qr = rH.e.newName(),
      Wr = {
        "&light": "." + ur,
        "&dark": "." + Qr
      };

    function Mr(HH, BH, LH) {
      return new rH.e(BH, {
        finish: BH => /&/.test(BH) ? BH.replace(/&\w*/, (BH => {
          if ("&" == BH) return HH;
          if (!LH || !LH[BH]) throw new RangeError(`Unsupported selector: ${BH}`);
          return LH[BH]
        })) : HH + " " + BH
      })
    }
    const xr = Mr("." + Yr, {
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
      }, Wr),
      vr = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      Pr = VH.ie && VH.ie_version <= 11;
    class Tr {
      constructor(HH) {
        this.view = HH, this.active = !1, this.editContext = null, this.selectionRange = new yH, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = HH.contentDOM, this.observer = new MutationObserver((BH => {
          for (let HH of BH) this.queue.push(HH);
          (VH.ie && VH.ie_version <= 11 || VH.ios && HH.composing) && BH.some((HH => "childList" == HH.type && HH.removedNodes.length || "characterData" == HH.type && HH.oldValue.length > HH.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !VH.android || !1 === HH.constructor.EDIT_CONTEXT || VH.chrome && VH.chrome_version < 126 || (this.editContext = new Or(HH), HH.state.facet(dB) && (HH.contentDOM.editContext = this.editContext.editContext)), Pr && (this.onCharData = HH => {
          this.queue.push({
            target: HH.target,
            type: "characterData",
            oldValue: HH.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.Av = this.Av.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var HH;
          (null === (HH = this.view.docView) || void 0 === HH ? void 0 : HH.lastUpdate) < Date.now() - 75 && this.Av()
        })), this.resizeScroll.observe(HH.scrollDOM)), this.addWindowListeners(this.win = HH.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((HH => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), HH.length > 0 && HH[HH.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((HH => {
          HH.length > 0 && HH[HH.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(HH) {
        this.view.inputState.runHandlers("scroll", HH), this.intersecting && this.view.measure()
      }
      onScroll(HH) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(HH)
      }
      Av() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(HH) {
        ("change" != HH.type && HH.type || HH.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(HH) {
        if (this.gapIntersection && (HH.length != this.gaps.length || this.gaps.some(((BH, LH) => BH != HH[LH])))) {
          this.gapIntersection.disconnect();
          for (let BH of HH) this.gapIntersection.observe(BH);
          this.gaps = HH
        }
      }
      onSelectionChange(HH) {
        let BH = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: LH
        } = this, AH = this.selectionRange;
        if (LH.state.facet(dB) ? LH.root.activeElement != this.dom : !nH(this.dom, AH)) return;
        let rH = AH.anchorNode && LH.docView.tile.nearest(AH.anchorNode);
        rH && rH.isWidget() && rH.widget.ignoreEvent(HH) ? BH || (this.selectionChanged = !1) : (VH.ie && VH.ie_version <= 11 || VH.android && VH.chrome) && !LH.state.selection.main.empty && AH.focusNode && DH(AH.focusNode, AH.focusOffset, AH.anchorNode, AH.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: HH
        } = this, BH = RH(HH.root);
        if (!BH) return !1;
        let LH = VH.safari && 11 == HH.root.nodeType && HH.root.activeElement == this.dom && function(HH, BH) {
          if (BH.getComposedRanges) {
            let LH = BH.getComposedRanges(HH.root)[0];
            if (LH) return Vr(HH, LH)
          }
          let LH = null;

          function AH(HH) {
            HH.preventDefault(), HH.stopImmediatePropagation(), LH = HH.getTargetRanges()[0]
          }
          return HH.contentDOM.addEventListener("beforeinput", AH, !0), HH.dom.ownerDocument.execCommand("indent"), HH.contentDOM.removeEventListener("beforeinput", AH, !0), LH ? Vr(HH, LH) : null
        }(this.view, BH) || BH;
        if (!LH || this.selectionRange.eq(LH)) return !1;
        let AH = nH(this.dom, LH);
        return AH && !this.selectionChanged && HH.inputState.lastFocusTime > Date.now() - 200 && HH.inputState.lastTouchTime < Date.now() - 300 && function(HH, BH) {
          let LH = BH.focusNode,
            AH = BH.focusOffset;
          if (!LH || BH.anchorNode != LH || BH.anchorOffset != AH) return !1;
          for (AH = Math.min(AH, aH(LH));;)
            if (AH) {
              if (1 != LH.nodeType) return !1;
              let HH = LH.childNodes[AH - 1];
              "false" == HH.contentEditable ? AH-- : (LH = HH, AH = aH(LH))
            } else {
              if (LH == HH) return !0;
              AH = wH(LH), LH = LH.parentNode
            }
        }(this.dom, LH) ? (this.view.inputState.lastFocusTime = 0, HH.docView.updateSelection(), !1) : (this.selectionRange.setRange(LH), AH && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(HH, BH) {
        this.selectionRange.set(HH.node, HH.offset, BH.node, BH.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let HH = 0,
          BH = null;
        for (let LH = this.dom; LH;)
          if (1 == LH.nodeType) !BH && HH < this.scrollTargets.length && this.scrollTargets[HH] == LH ? HH++ : BH || (BH = this.scrollTargets.slice(0, HH)), BH && BH.push(LH), LH = LH.assignedSlot || LH.parentNode;
          else {
            if (11 != LH.nodeType) break;
            LH = LH.host
          } if (HH < this.scrollTargets.length && !BH && (BH = this.scrollTargets.slice(0, HH)), BH) {
          for (let HH of this.scrollTargets) HH.removeEventListener("scroll", this.onScroll);
          for (let HH of this.scrollTargets = BH) HH.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(HH) {
        if (!this.active) return HH();
        try {
          return this.stop(), HH()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, vr), Pr && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), Pr && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(HH, BH) {
        var LH;
        if (!this.delayedAndroidKey) {
          let HH = () => {
            let HH = this.delayedAndroidKey;
            if (HH) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = HH.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && HH.force && rB(this.dom, HH.key, HH.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(HH)
        }
        this.delayedAndroidKey && "Enter" != HH || (this.delayedAndroidKey = {
          key: HH,
          keyCode: BH,
          force: this.lastChange < Date.now() - 50 || !!(null === (LH = this.delayedAndroidKey) || void 0 === LH ? void 0 : LH.force)
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
        for (let HH of this.observer.takeRecords()) this.queue.push(HH);
        return this.queue
      }
      processRecords() {
        let HH = this.pendingRecords();
        HH.length && (this.queue = []);
        let BH = -1,
          LH = -1,
          AH = !1;
        for (let rH of HH) {
          let HH = this.readMutation(rH);
          HH && (HH.typeOver && (AH = !0), -1 == BH ? ({
            from: BH,
            to: LH
          } = HH) : (BH = Math.min(HH.from, BH), LH = Math.max(HH.to, LH)))
        }
        return {
          from: BH,
          to: LH,
          typeOver: AH
        }
      }
      readChange() {
        let {
          from: HH,
          to: BH,
          typeOver: LH
        } = this.processRecords(), AH = this.selectionChanged && nH(this.dom, this.selectionRange);
        if (HH < 0 && !AH) return null;
        HH > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let rH = new LA(this.view, HH, BH, LH);
        return this.view.docView.domChanged = {
          newSel: rH.newSel ? rH.newSel.main : null
        }, rH
      }
      flush() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        HH && this.readSelectionRange();
        let BH = this.readChange();
        if (!BH) return this.view.requestMeasure(), !1;
        let LH = this.view.state,
          AH = rA(this.view, BH);
        return this.view.state == LH && (BH.domChanged || BH.newSel && !tA(this.view.state.selection, BH.newSel.main)) && this.view.update([]), AH
      }
      readMutation(HH) {
        let BH = this.view.docView.tile.nearest(HH.target);
        if (!BH || BH.isWidget()) return null;
        if (BH.markDirty("attributes" == HH.type), "childList" == HH.type) {
          let LH = Ur(BH, HH.previousSibling || HH.target.previousSibling, -1),
            AH = Ur(BH, HH.nextSibling || HH.target.nextSibling, 1);
          return {
            from: LH ? BH.posAfter(LH) : BH.posAtStart,
            to: AH ? BH.posBefore(AH) : BH.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == HH.type ? {
          from: BH.posAtStart,
          to: BH.posAtEnd,
          typeOver: HH.target.nodeValue == HH.oldValue
        } : null
      }
      setWindow(HH) {
        HH != this.win && (this.removeWindowListeners(this.win), this.win = HH, this.addWindowListeners(this.win))
      }
      addWindowListeners(HH) {
        HH.addEventListener("resize", this.Av), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : HH.addEventListener("beforeprint", this.onPrint), HH.addEventListener("scroll", this.onScroll), HH.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(HH) {
        HH.removeEventListener("scroll", this.onScroll), HH.removeEventListener("resize", this.Av), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : HH.removeEventListener("beforeprint", this.onPrint), HH.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(HH) {
        this.editContext && (this.editContext.update(HH), HH.startState.facet(dB) != HH.state.facet(dB) && (HH.view.contentDOM.editContext = HH.state.facet(dB) ? this.editContext.editContext : null))
      }
      destroy() {
        var HH, BH, LH;
        this.stop(), null === (HH = this.intersection) || void 0 === HH || HH.disconnect(), null === (BH = this.gapIntersection) || void 0 === BH || BH.disconnect(), null === (LH = this.resizeScroll) || void 0 === LH || LH.disconnect();
        for (let AH of this.scrollTargets) AH.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function Ur(HH, BH, LH) {
      for (; BH;) {
        let AH = GL.get(BH);
        if (AH && AH.parent == HH) return AH;
        let rH = BH.parentNode;
        BH = rH != HH.dom ? rH : LH > 0 ? BH.nextSibling : BH.previousSibling
      }
      return null
    }

    function Vr(HH, BH) {
      let LH = BH.startContainer,
        AH = BH.startOffset,
        rH = BH.endContainer,
        SH = BH.endOffset,
        hH = HH.docView.domAtPos(HH.state.selection.main.anchor, 1);
      return DH(hH.node, hH.offset, rH, SH) && ([LH, AH, rH, SH] = [rH, SH, LH, AH]), {
        anchorNode: LH,
        anchorOffset: AH,
        focusNode: rH,
        focusOffset: SH
      }
    }
    class Or {
      constructor(HH) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(HH.state);
        let BH = this.editContext = new window.EditContext({
          text: HH.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, HH.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(HH.state.selection.main.head)
        });
        this.handlers.textupdate = LH => {
          let rH = HH.state.selection.main,
            {
              anchor: SH,
              head: hH
            } = rH,
            tH = this.toEditorPos(LH.updateRangeStart),
            zH = this.toEditorPos(LH.updateRangeEnd);
          HH.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: LH.updateRangeStart,
            editorBase: tH,
            drifted: !1
          });
          let CH = zH - tH > LH.text.length;
          tH == this.from && SH < this.from ? tH = SH : zH == this.to && SH > this.to && (zH = SH);
          let EH = hA(HH.state.sliceDoc(tH, zH), LH.text, (CH ? rH.from : rH.to) - tH, CH ? "end" : null);
          if (!EH) {
            let BH = AH.i.single(this.toEditorPos(LH.selectionStart), this.toEditorPos(LH.selectionEnd));
            return void(tA(BH, rH) || HH.dispatch({
              selection: BH,
              userEvent: "select"
            }))
          }
          let XH = {
            from: EH.from + tH,
            to: EH.toA + tH,
            insert: AH.F.of(LH.text.slice(EH.from, EH.toB).split("\n"))
          };
          if ((VH.mac || VH.android) && XH.from == hH - 1 && /^\. ?$/.test(LH.text) && "off" == HH.contentDOM.getAttribute("autocorrect") && (XH = {
              from: tH,
              to: zH,
              insert: AH.F.of([LH.text.replace(".", " ")])
            }), this.pendingContextChange = XH, !HH.state.readOnly) {
            let BH = this.to - this.from + (XH.to - XH.from + XH.insert.length);
            SA(HH, XH, AH.i.single(this.toEditorPos(LH.selectionStart, BH), this.toEditorPos(LH.selectionEnd, BH)))
          }
          this.pendingContextChange && (this.revertPending(HH.state), this.setSelection(HH.state)), XH.from < XH.to && !XH.insert.length && HH.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(BH.text.slice(Math.max(0, LH.updateRangeStart - 1), Math.min(BH.text.length, LH.updateRangeStart + 1))) && this.handlers.compositionend(LH)
        }, this.handlers.characterboundsupdate = LH => {
          let AH = [],
            rH = null;
          for (let BH = this.toEditorPos(LH.rangeStart), SH = this.toEditorPos(LH.rangeEnd); BH < SH; BH++) {
            let LH = HH.coordsForChar(BH);
            rH = LH && new DOMRect(LH.left, LH.top, LH.right - LH.left, LH.bottom - LH.top) || rH || new DOMRect, AH.push(rH)
          }
          BH.updateCharacterBounds(LH.rangeStart, AH)
        }, this.handlers.textformatupdate = BH => {
          let LH = [];
          for (let HH of BH.getTextFormats()) {
            let BH = HH.underlineStyle,
              AH = HH.underlineThickness;
            if (!/none/i.test(BH) && !/none/i.test(AH)) {
              let rH = this.toEditorPos(HH.rangeStart),
                SH = this.toEditorPos(HH.rangeEnd);
              if (rH < SH) {
                let HH = `text-decoration: underline ${/^[a-z]/.test(BH)?BH+" ":"Dashed"==BH?"dashed ":"Squiggle"==BH?"wavy ":""}${/thin/i.test(AH)?1:2}px`;
                LH.push(lH.mark({
                  attributes: {
                    style: HH
                  }
                }).range(rH, SH))
              }
            }
          }
          HH.dispatch({
            effects: wB.of(lH.set(LH))
          })
        }, this.handlers.compositionstart = () => {
          HH.inputState.composing < 0 && (HH.inputState.composing = 0, HH.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (HH.inputState.composing = -1, HH.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: BH
            } = this.composing;
            this.composing = null, BH && this.reset(HH.state)
          }
        };
        for (let LH in this.handlers) BH.addEventListener(LH, this.handlers[LH]);
        this.measureReq = {
          read: HH => {
            this.editContext.updateControlBounds(HH.contentDOM.getBoundingClientRect());
            let BH = RH(HH.root);
            BH && BH.rangeCount && this.editContext.updateSelectionBounds(BH.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(HH) {
        let BH = 0,
          LH = !1,
          AH = this.pendingContextChange;
        return HH.changes.iterChanges(((rH, SH, hH, tH, zH) => {
          if (LH) return;
          let CH = zH.length - (SH - rH);
          if (AH && SH >= AH.to) {
            if (AH.from == rH && AH.to == SH && AH.insert.eq(zH)) return AH = this.pendingContextChange = null, BH += CH, void(this.to += CH);
            AH = null, this.revertPending(HH.state)
          }
          if (rH += BH, (SH += BH) <= this.from) this.from += CH, this.to += CH;
          else if (rH < this.to) {
            if (rH < this.from || SH > this.to || this.to - this.from + zH.length > 3e4) return void(LH = !0);
            this.editContext.updateText(this.toContextPos(rH), this.toContextPos(SH), zH.toString()), this.to += CH
          }
          BH += CH
        })), AH && !LH && this.revertPending(HH.state), !LH
      }
      update(HH) {
        let BH = this.pendingContextChange,
          LH = HH.startState.selection.main;
        this.composing && (this.composing.drifted || !HH.changes.touchesRange(LH.from, LH.to) && HH.transactions.some((HH => !HH.isUserEvent("input.type") && HH.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = HH.changes.mapPos(this.composing.editorBase)) : this.applyEdits(HH) && this.rangeIsValid(HH.state) ? (HH.docChanged || HH.selectionSet || BH) && this.setSelection(HH.state) : (this.pendingContextChange = null, this.reset(HH.state)), (HH.geometryChanged || HH.docChanged || HH.selectionSet) && HH.view.requestMeasure(this.measureReq)
      }
      resetRange(HH) {
        let {
          head: BH
        } = HH.selection.main;
        this.from = Math.max(0, BH - 1e4), this.to = Math.min(HH.doc.length, BH + 1e4)
      }
      reset(HH) {
        this.resetRange(HH), this.editContext.updateText(0, this.editContext.text.length, HH.doc.sliceString(this.from, this.to)), this.setSelection(HH)
      }
      revertPending(HH) {
        let BH = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(BH.from), this.toContextPos(BH.from + BH.insert.length), HH.doc.sliceString(BH.from, BH.to))
      }
      setSelection(HH) {
        let {
          main: BH
        } = HH.selection, LH = this.toContextPos(Math.max(this.from, Math.min(this.to, BH.anchor))), AH = this.toContextPos(BH.head);
        this.editContext.selectionStart == LH && this.editContext.selectionEnd == AH || this.editContext.updateSelection(LH, AH)
      }
      rangeIsValid(HH) {
        let {
          head: BH
        } = HH.selection.main;
        return !(this.from > 0 && BH - this.from < 500 || this.to < HH.doc.length && this.to - BH < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        HH = Math.min(HH, BH);
        let LH = this.composing;
        return LH && LH.drifted ? LH.editorBase + (HH - LH.contextBase) : HH + this.from
      }
      toContextPos(HH) {
        let BH = this.composing;
        return BH && BH.drifted ? BH.contextBase + (HH - BH.editorBase) : HH - this.from
      }
      destroy() {
        for (let HH in this.handlers) this.editContext.removeEventListener(HH, this.handlers[HH])
      }
    }
    class br {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get iHH() {
        return this.viewState.iHH
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
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var BH;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), HH.parent && HH.parent.appendChild(this.dom);
        let {
          dispatch: LH
        } = HH;
        this.dispatchTransactions = HH.dispatchTransactions || LH && (HH => HH.forEach((HH => LH(HH, this)))) || (HH => this.update(HH)), this.dispatch = this.dispatch.bind(this), this._root = HH.root || function(HH) {
          for (; HH;) {
            if (HH && (9 == HH.nodeType || 11 == HH.nodeType && HH.host)) return HH;
            HH = HH.assignedSlot || HH.parentNode
          }
          return null
        }(HH.parent) || document, this.viewState = new Ar(this, HH.state || AH.k.create(HH)), HH.scrollTo && HH.scrollTo.is(DB) && (this.viewState.scrollTarget = HH.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(sB).map((HH => new iB(HH)));
        for (let AH of this.plugins) AH.update(this);
        this.observer = new Tr(this), this.inputState = new zA(this), this.inputState.ensureHandlers(this.plugins), this.docView = new qL(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (BH = document.fonts) || void 0 === BH ? void 0 : BH.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        let rH = 1 == BH.length && BH[0] instanceof AH.J ? BH : 1 == BH.length && Array.isArray(BH[0]) ? BH[0] : [this.state.update(...BH)];
        this.dispatchTransactions(rH, this)
      }
      update(HH) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let BH, LH = !1,
          rH = !1,
          SH = this.state;
        for (let AH of HH) {
          if (AH.startState != SH) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          SH = AH.state
        }
        if (this.destroyed) return void(this.viewState.state = SH);
        let hH = this.hasFocus,
          tH = 0,
          zH = null;
        HH.some((HH => HH.annotation(IA))) ? (this.inputState.notifiedFocused = hH, tH = 1) : hH != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = hH, zH = fA(SH, hH), zH || (tH = 1));
        let CH = this.observer.delayedAndroidKey,
          EH = null;
        if (CH ? (this.observer.clearDelayedAndroidKey(), EH = this.observer.readChange(), (EH && !this.state.doc.eq(SH.doc) || !this.state.selection.eq(SH.selection)) && (EH = null)) : this.observer.clear(), SH.facet(AH.k.phrases) != this.state.facet(AH.k.phrases)) return this.setState(SH);
        BH = EL.create(this, SH, HH), BH.flags |= tH;
        let XH = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let BH of HH) {
            if (XH && (XH = XH.map(BH.changes)), BH.scrollIntoView) {
              let {
                main: HH
              } = BH.state.selection, {
                x: LH,
                y: rH
              } = this.state.facet(br.cursorScrollMargin);
              XH = new FB(HH.empty ? HH : AH.i.cursor(HH.head, HH.head > HH.anchor ? -1 : 1), "nearest", "nearest", rH, LH)
            }
            for (let HH of BH.effects) HH.is(DB) && (XH = HH.value.clip(this.state))
          }
          this.viewState.update(BH, XH), this.bidiCache = or.update(this.bidiCache, BH.changes), BH.empty || (this.updatePlugins(BH), this.inputState.update(BH)), LH = this.docView.update(BH), this.state.facet(zL) != this.styleModules && this.mountStyles(), rH = this.updateAttrs(), this.showAnnouncements(HH), this.docView.updateSelection(LH, HH.some((HH => HH.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (BH.startState.facet(Xr) != BH.state.facet(Xr) && (this.viewState.mustMeasureContent = !0), (LH || rH || XH || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), LH && this.docViewUpdate(), !BH.empty)
          for (let AH of this.state.facet(cB)) try {
            AH(BH)
          } catch (GH) {
            ZB(this.state, GH, "update listener")
          }(zH || EH) && Promise.resolve().then((() => {
            zH && this.state == zH.startState && this.dispatch(zH), EH && !rA(this, EH) && CH.force && rB(this.contentDOM, CH.key, CH.keyCode)
          }))
      }
      setState(HH) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = HH);
        this.updateState = 2;
        let BH = this.hasFocus;
        try {
          for (let HH of this.plugins) HH.destroy(this);
          this.viewState = new Ar(this, HH), this.plugins = HH.facet(sB).map((HH => new iB(HH))), this.pluginMap.clear();
          for (let HH of this.plugins) HH.update(this);
          this.docView.destroy(), this.docView = new qL(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        BH && this.focus(), this.requestMeasure()
      }
      updatePlugins(HH) {
        let BH = HH.startState.facet(sB),
          LH = HH.state.facet(sB);
        if (BH != LH) {
          let AH = [];
          for (let rH of LH) {
            let LH = BH.indexOf(rH);
            if (LH < 0) AH.push(new iB(rH));
            else {
              let BH = this.plugins[LH];
              BH.mustUpdate = HH, AH.push(BH)
            }
          }
          for (let BH of this.plugins) BH.mustUpdate != HH && BH.destroy(this);
          this.plugins = AH, this.pluginMap.clear()
        } else
          for (let AH of this.plugins) AH.mustUpdate = HH;
        for (let AH = 0; AH < this.plugins.length; AH++) this.plugins[AH].update(this);
        BH != LH && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let BH of this.plugins) {
          let LH = BH.value;
          if (LH && LH.docViewUpdate) try {
            LH.docViewUpdate(this)
          } catch (HH) {
            ZB(this.state, HH, "doc view update listener")
          }
        }
      }
      measure() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, HH && this.observer.forceFlush();
        let BH = null,
          LH = this.viewState.scrollParent,
          AH = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: rH,
            scrollAnchorHeight: SH
          } = this.viewState;
        Math.abs(AH - this.viewState.scrollOffset) > 1 && (SH = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let HH = 0;; HH++) {
            if (SH < 0)
              if (SB(LH || this.win)) rH = -1, SH = this.viewState.heightMap.height;
              else {
                let HH = this.viewState.scrollAnchorAt(AH);
                rH = HH.from, SH = HH.top
              } this.updateState = 1;
            let tH = this.viewState.measure();
            if (!tH && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (HH > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let zH = [];
            4 & tH || ([this.measureRequests, zH] = [zH, this.measureRequests]);
            let CH = zH.map((HH => {
                try {
                  return HH.read(this)
                } catch (BH) {
                  return ZB(this.state, BH), mr
                }
              })),
              EH = EL.create(this, this.state, []),
              XH = !1;
            EH.flags |= tH, BH ? BH.flags |= tH : BH = EH, this.updateState = 2, EH.empty || (this.updatePlugins(EH), this.inputState.update(EH), this.updateAttrs(), XH = this.docView.update(EH), XH && this.docViewUpdate());
            for (let HH = 0; HH < zH.length; HH++)
              if (CH[HH] != mr) try {
                let BH = zH[HH];
                BH.write && BH.write(CH[HH], this)
              } catch (hH) {
                ZB(this.state, hH)
              }
            if (XH && this.docView.updateSelection(!0), !EH.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, SH = -1;
                  continue
                } {
                  let HH = ((rH < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(rH).top) - SH) / this.scaleY;
                  if ((HH > 1 || HH < -1) && (LH == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    AH += HH, LH ? LH.scrollTop += HH : this.win.scrollBy(0, HH), SH = -1;
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
        if (BH && !BH.empty)
          for (let tH of this.state.facet(cB)) tH(BH)
      }
      get themeClasses() {
        return Yr + " " + (this.state.facet(Gr) ? Qr : ur) + " " + this.state.facet(Xr)
      }
      updateAttrs() {
        let HH = Ir(this, pB, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          BH = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(dB) ? "true" : "false",
            class: "cm-content",
            style: `${VH.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (BH["aria-readonly"] = "true"), Ir(this, yB, BH);
        let LH = this.observer.ignore((() => {
          let LH = mH(this.contentDOM, this.contentAttrs, BH),
            AH = mH(this.dom, this.editorAttrs, HH);
          return LH || AH
        }));
        return this.editorAttrs = HH, this.contentAttrs = BH, LH
      }
      showAnnouncements(HH) {
        let BH = !0;
        for (let LH of HH)
          for (let HH of LH.effects)
            if (HH.is(br.announce)) {
              BH && (this.announceDOM.textContent = ""), BH = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = HH.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(zL);
        let HH = this.state.facet(br.cspNonce);
        rH.e.mount(this.root, this.styleModules.concat(xr).reverse(), HH ? {
          nonce: HH
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(HH) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), HH) {
          if (this.measureRequests.indexOf(HH) > -1) return;
          if (null != HH.key)
            for (let BH = 0; BH < this.measureRequests.length; BH++)
              if (this.measureRequests[BH].key === HH.key) return void(this.measureRequests[BH] = HH);
          this.measureRequests.push(HH)
        }
      }
      plugin(HH) {
        let BH = this.pluginMap.get(HH);
        return (void 0 === BH || BH && BH.plugin != HH) && this.pluginMap.set(HH, BH = this.plugins.find((BH => BH.plugin == HH)) || null), BH && BH.update(this).value
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
      elementAtHeight(HH) {
        return this.readMeasured(), this.viewState.elementAtHeight(HH)
      }
      lineBlockAtHeight(HH) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(HH)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(HH) {
        return this.viewState.lineBlockAt(HH)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(HH, BH, LH) {
        return dL(this, HH, DL(this, HH, BH, LH))
      }
      moveByGroup(HH, BH) {
        return dL(this, HH, DL(this, HH, BH, (BH => function(HH, BH, LH) {
          let rH = HH.state.charCategorizer(BH),
            SH = rH(LH);
          return HH => {
            let BH = rH(HH);
            return SH == AH.h.Space && (SH = BH), SH == BH
          }
        }(this, HH.head, BH))))
      }
      visualLineSide(HH, BH) {
        let LH = this.bidiSpans(HH),
          rH = this.textDirectionAt(HH.from),
          SH = LH[BH ? LH.length - 1 : 0];
        return AH.i.cursor(SH.side(BH, rH) + HH.from, SH.forward(!BH, rH) ? 1 : -1)
      }
      moveToLineBoundary(HH, BH) {
        return function(HH, BH, LH, rH) {
          let SH = FL(HH, BH.head, BH.assoc || -1),
            hH = rH && SH.type == fH.Text && (HH.lineWrapping || SH.widgetLineBreaks) ? HH.coordsAtPos(BH.assoc < 0 && BH.head > SH.from ? BH.head - 1 : BH.head) : null;
          if (hH) {
            let BH = HH.dom.getBoundingClientRect(),
              rH = HH.textDirectionAt(SH.from),
              tH = HH.posAtCoords({
                x: LH == (rH == CB.LTR) ? BH.right - 1 : BH.left + 1,
                y: (hH.top + hH.bottom) / 2
              });
            if (null != tH) return AH.i.cursor(tH, LH ? -1 : 1)
          }
          return AH.i.cursor(LH ? SH.to : SH.from, LH ? -1 : 1)
        }(this, HH, BH, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(HH, BH, LH) {
        return dL(this, HH, function(HH, BH, LH, rH) {
          let SH = BH.head,
            hH = LH ? 1 : -1;
          if (SH == (LH ? HH.state.doc.length : 0)) return AH.i.cursor(SH, BH.assoc);
          let tH, zH = BH.goalColumn,
            CH = HH.contentDOM.getBoundingClientRect(),
            EH = HH.coordsAtPos(SH, BH.assoc || ((BH.empty ? LH : BH.head == BH.from) ? 1 : -1)),
            XH = HH.documentTop;
          if (EH) null == zH && (zH = EH.left - CH.left), tH = hH < 0 ? EH.top : EH.bottom;
          else {
            let BH = HH.viewState.lineBlockAt(SH);
            null == zH && (zH = Math.min(CH.right - CH.left, HH.defaultCharacterWidth * (SH - BH.from))), tH = (hH < 0 ? BH.top : BH.bottom) + XH
          }
          let GH = CH.left + zH,
            YH = HH.viewState.heightOracle.textHeight >> 1,
            uH = null !== rH && void 0 !== rH ? rH : YH;
          for (let QH = 0;; QH += YH) {
            let BH = tH + (uH + QH) * hH,
              rH = sL(HH, {
                x: GH,
                y: BH
              }, !1, hH);
            if (LH ? BH > CH.bottom : BH < CH.top) return AH.i.cursor(rH.pos, rH.assoc);
            let SH = HH.coordsAtPos(rH.pos, rH.assoc),
              EH = SH ? (SH.top + SH.bottom) / 2 : 0;
            if (!SH || (LH ? EH > tH : EH < tH)) return AH.i.cursor(rH.pos, rH.assoc, void 0, zH)
          }
        }(this, HH, BH, LH))
      }
      domAtPos(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(HH, BH)
      }
      posAtDOM(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(HH, BH)
      }
      posAtCoords(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let LH = sL(this, HH, BH);
        return LH && LH.pos
      }
      posAndSideAtCoords(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), sL(this, HH, BH)
      }
      coordsAtPos(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let LH = this.docView.coordsAt(HH, BH);
        if (!LH || LH.left == LH.right) return LH;
        let AH = this.state.doc.lineAt(HH),
          rH = this.bidiSpans(AH);
        return sH(LH, rH[vB.find(rH, HH - AH.from, -1, BH)].dir == CB.LTR == BH > 0)
      }
      coordsForChar(HH) {
        return this.readMeasured(), this.docView.coordsForChar(HH)
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
      textDirectionAt(HH) {
        return !this.state.facet(RB) || HH < this.viewport.from || HH > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(HH))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(HH) {
        if (HH.length > kr) return bB(HH.length);
        let BH, LH = this.textDirectionAt(HH.from);
        for (let rH of this.bidiCache)
          if (rH.from == HH.from && rH.dir == LH && (rH.fresh || PB(rH.isolates, BH = SL(this, HH)))) return rH.order;
        BH || (BH = SL(this, HH));
        let AH = OB(HH.text, LH, BH);
        return this.bidiCache.push(new or(HH.from, HH.to, LH, BH, !0, AH)), AH
      }
      get hasFocus() {
        var HH;
        return (this.dom.ownerDocument.hasFocus() || VH.safari && (null === (HH = this.inputState) || void 0 === HH ? void 0 : HH.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          LB(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(HH) {
        this._root != HH && (this._root = HH, this.observer.setWindow((9 == HH.nodeType ? HH : HH.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let HH of this.plugins) HH.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var LH, rH, SH, hH;
        return DB.of(new FB("number" == typeof HH ? AH.i.cursor(HH) : HH, null !== (LH = BH.y) && void 0 !== LH ? LH : "nearest", null !== (rH = BH.x) && void 0 !== rH ? rH : "nearest", null !== (SH = BH.yMargin) && void 0 !== SH ? SH : 5, null !== (hH = BH.xMargin) && void 0 !== hH ? hH : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: HH,
          scrollLeft: BH
        } = this.scrollDOM, LH = this.viewState.scrollAnchorAt(HH);
        return DB.of(new FB(AH.i.cursor(LH.from), "start", "start", LH.top - HH, BH, !0))
      }
      setTabFocusMode(HH) {
        null == HH ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof HH ? this.inputState.tabFocusMode = HH ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + HH)
      }
      static domEventHandlers(HH) {
        return JB.define((() => ({})), {
          eventHandlers: HH
        })
      }
      static domEventObservers(HH) {
        return JB.define((() => ({})), {
          eventObservers: HH
        })
      }
      static theme(HH, BH) {
        let LH = rH.e.newName(),
          AH = [Xr.of(LH), zL.of(Mr(`.${LH}`, HH))];
        return BH && BH.dark && AH.push(Gr.of(!0)), AH
      }
      static baseTheme(HH) {
        return AH.p.lowest(zL.of(Mr("." + Yr, HH, Wr)))
      }
      static findFromDOM(HH) {
        var BH;
        let LH = HH.querySelector(".cm-content"),
          AH = LH && GL.get(LH) || GL.get(HH);
        return (null === (BH = null === AH || void 0 === AH ? void 0 : AH.root) || void 0 === BH ? void 0 : BH.view) || null
      }
    }
    br.styleModule = zL, br.inputHandler = eB, br.clipboardInputFilter = gB, br.clipboardOutputFilter = NB, br.scrollHandler = nB, br.focusChangeEffect = qB, br.perLineTextDirection = RB, br.exceptionSink = KB, br.updateListener = cB, br.editable = dB, br.mouseSelectionStyle = lB, br.dragMovesSelection = fB, br.clickAddsSelectionRange = IB, br.Gr = HL, br.blockWrappers = BL, br.outerDecorations = LL, br.atomicRanges = AL, br.bidiIsolatedRanges = rL, br.cursorScrollMargin = AH.l.define({
      combine: HH => {
        let BH = 5,
          LH = 5;
        for (let AH of HH) "number" == typeof AH ? BH = LH = AH : ({
          x: BH,
          y: LH
        } = AH);
        return {
          x: BH,
          y: LH
        }
      }
    }), br.scrollMargins = hL, br.darkTheme = Gr, br.cspNonce = AH.l.define({
      combine: HH => HH.length ? HH[0] : ""
    }), br.contentAttributes = yB, br.editorAttributes = pB, br.lineWrapping = br.contentAttributes.of({
      class: "cm-lineWrapping"
    }), br.announce = AH.B.define();
    const kr = 4096,
      mr = {};
    class or {
      constructor(HH, BH, LH, AH, rH, SH) {
        this.from = HH, this.to = BH, this.dir = LH, this.isolates = AH, this.fresh = rH, this.order = SH
      }
      static update(HH, BH) {
        if (BH.empty && !HH.some((HH => HH.fresh))) return HH;
        let LH = [],
          AH = HH.length ? HH[HH.length - 1].dir : CB.LTR;
        for (let rH = Math.max(0, HH.length - 10); rH < HH.length; rH++) {
          let SH = HH[rH];
          SH.dir != AH || BH.touchesRange(SH.from, SH.to) || LH.push(new or(BH.mapPos(SH.from, 1), BH.mapPos(SH.to, -1), SH.dir, SH.isolates, !1, SH.order))
        }
        return LH
      }
    }

    function Ir(HH, BH, LH) {
      for (let AH = HH.state.facet(BH), rH = AH.length - 1; rH >= 0; rH--) {
        let BH = AH[rH],
          SH = "function" == typeof BH ? BH(HH) : BH;
        SH && OH(SH, LH)
      }
      return LH
    }
    const fr = VH.mac ? "mac" : VH.windows ? "win" : VH.linux ? "linux" : "key";

    function lr(HH, BH, LH) {
      return BH.altKey && (HH = "Alt-" + HH), BH.ctrlKey && (HH = "Ctrl-" + HH), BH.metaKey && (HH = "Meta-" + HH), !1 !== LH && BH.shiftKey && (HH = "Shift-" + HH), HH
    }
    const Kr = AH.p.default(br.domEventHandlers({
        keydown: (HH, BH) => nr(qr(BH.state), HH, BH, "editor")
      })),
      cr = AH.l.define({
        enables: Kr
      }),
      er = new WeakMap;

    function qr(HH) {
      let BH = HH.facet(cr),
        LH = er.get(BH);
      return LH || er.set(BH, LH = function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fr,
          LH = Object.create(null),
          AH = Object.create(null),
          rH = (HH, BH) => {
            let LH = AH[HH];
            if (null == LH) AH[HH] = BH;
            else if (LH != BH) throw new Error("Key binding " + HH + " is used both as a regular binding and as a multi-stroke prefix")
          },
          SH = (HH, AH, SH, hH, tH) => {
            var zH, CH;
            let EH = LH[HH] || (LH[HH] = Object.create(null)),
              XH = AH.split(/ (?!$)/).map((HH => function(HH, BH) {
                const LH = HH.split(/-(?!$)/);
                let AH, rH, SH, hH, tH = LH[LH.length - 1];
                "Space" == tH && (tH = " ");
                for (let zH = 0; zH < LH.length - 1; ++zH) {
                  const HH = LH[zH];
                  if (/^(cmd|meta|m)$/i.test(HH)) hH = !0;
                  else if (/^a(lt)?$/i.test(HH)) AH = !0;
                  else if (/^(c|ctrl|control)$/i.test(HH)) rH = !0;
                  else if (/^s(hift)?$/i.test(HH)) SH = !0;
                  else {
                    if (!/^mod$/i.test(HH)) throw new Error("Unrecognized modifier name: " + HH);
                    "mac" == BH ? hH = !0 : rH = !0
                  }
                }
                return AH && (tH = "Alt-" + tH), rH && (tH = "Ctrl-" + tH), hH && (tH = "Meta-" + tH), SH && (tH = "Shift-" + tH), tH
              }(HH, BH)));
            for (let BH = 1; BH < XH.length; BH++) {
              let LH = XH.slice(0, BH).join(" ");
              rH(LH, !0), EH[LH] || (EH[LH] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [BH => {
                  let AH = Nr = {
                    view: BH,
                    prefix: LH,
                    scope: HH
                  };
                  return setTimeout((() => {
                    Nr == AH && (Nr = null)
                  }), Rr), !0
                }]
              })
            }
            let GH = XH.join(" ");
            rH(GH, !1);
            let YH = EH[GH] || (EH[GH] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (CH = null === (zH = EH._any) || void 0 === zH ? void 0 : zH.run) || void 0 === CH ? void 0 : CH.slice()) || []
            });
            SH && YH.run.push(SH), hH && (YH.preventDefault = !0), tH && (YH.stopPropagation = !0)
          };
        for (let hH of HH) {
          let HH = hH.scope ? hH.scope.split(" ") : ["editor"];
          if (hH.any)
            for (let BH of HH) {
              let HH = LH[BH] || (LH[BH] = Object.create(null));
              HH._any || (HH._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: AH
              } = hH;
              for (let BH in HH) HH[BH].run.push((HH => AH(HH, jr)))
            }
          let AH = hH[BH] || hH.key;
          if (AH)
            for (let BH of HH) SH(BH, AH, hH.run, hH.preventDefault, hH.stopPropagation), hH.shift && SH(BH, "Shift-" + AH, hH.shift, hH.preventDefault, hH.stopPropagation)
        }
        return LH
      }(BH.reduce(((HH, BH) => HH.concat(BH)), []))), LH
    }

    function gr(HH, BH, LH) {
      return nr(qr(HH.state), BH, HH, LH)
    }
    let Nr = null;
    const Rr = 4e3;
    let jr = null;

    function nr(HH, BH, LH, rH) {
      jr = BH;
      let CH = function(HH) {
          var BH = !(tH && HH.metaKey && HH.shiftKey && !HH.ctrlKey && !HH.altKey || zH && HH.shiftKey && HH.key && 1 == HH.key.length || "Unidentified" == HH.key) && HH.key || (HH.shiftKey ? hH : SH)[HH.keyCode] || HH.key || "Unidentified";
          return "Esc" == BH && (BH = "Escape"), "Del" == BH && (BH = "Delete"), "Left" == BH && (BH = "ArrowLeft"), "Up" == BH && (BH = "ArrowUp"), "Right" == BH && (BH = "ArrowRight"), "Down" == BH && (BH = "ArrowDown"), BH
        }(BH),
        EH = (0, AH.N)(CH, 0),
        XH = (0, AH.Q)(EH) == CH.length && " " != CH,
        GH = "",
        YH = !1,
        uH = !1,
        QH = !1;
      Nr && Nr.view == LH && Nr.scope == rH && (GH = Nr.prefix + " ", YA.indexOf(BH.keyCode) < 0 && (uH = !0, Nr = null));
      let WH, MH, xH = new Set,
        vH = HH => {
          if (HH) {
            for (let BH of HH.run)
              if (!xH.has(BH) && (xH.add(BH), BH(LH))) return HH.stopPropagation && (QH = !0), !0;
            HH.preventDefault && (HH.stopPropagation && (QH = !0), uH = !0)
          }
          return !1
        },
        PH = HH[rH];
      return PH && (vH(PH[GH + lr(CH, BH, !XH)]) ? YH = !0 : !XH || !(BH.altKey || BH.metaKey || BH.ctrlKey) || VH.windows && BH.ctrlKey && BH.altKey || VH.mac && BH.altKey && !BH.ctrlKey && !BH.metaKey || !(WH = SH[BH.keyCode]) || WH == CH ? XH && BH.shiftKey && vH(PH[GH + lr(CH, BH, !0)]) && (YH = !0) : (vH(PH[GH + lr(WH, BH, !0)]) || BH.shiftKey && (MH = hH[BH.keyCode]) != CH && MH != WH && vH(PH[GH + lr(MH, BH, !1)])) && (YH = !0), !YH && vH(PH._any) && (YH = !0)), uH && (YH = !0), YH && QH && BH.stopPropagation(), jr = null, YH
    }
    class Fr {
      constructor(HH, BH, LH, AH, rH) {
        this.className = HH, this.left = BH, this.top = LH, this.width = AH, this.height = rH
      }
      draw() {
        let HH = document.createElement("div");
        return HH.className = this.className, this.adjust(HH), HH
      }
      update(HH, BH) {
        return BH.className == this.className && (this.adjust(HH), !0)
      }
      adjust(HH) {
        HH.style.left = this.left + "px", HH.style.top = this.top + "px", null != this.width && (HH.style.width = this.width + "px"), HH.style.height = this.height + "px"
      }
      eq(HH) {
        return this.left == HH.left && this.top == HH.top && this.width == HH.width && this.height == HH.height && this.className == HH.className
      }
      static forRange(HH, BH, LH) {
        if (LH.empty) {
          let AH = HH.coordsAtPos(LH.head, LH.assoc || 1);
          if (!AH) return [];
          let rH = Dr(HH);
          return [new Fr(BH, AH.left - rH.left, AH.top - rH.top, null, AH.bottom - AH.top)]
        }
        return function(HH, BH, LH) {
          if (LH.to <= HH.viewport.from || LH.from >= HH.viewport.to) return [];
          let AH = Math.max(LH.from, HH.viewport.from),
            rH = Math.min(LH.to, HH.viewport.to),
            SH = HH.textDirection == CB.LTR,
            hH = HH.contentDOM,
            tH = hH.getBoundingClientRect(),
            zH = Dr(HH),
            CH = hH.querySelector(".cm-line"),
            EH = CH && window.getComputedStyle(CH),
            XH = tH.left + (EH ? parseInt(EH.paddingLeft) + Math.min(0, parseInt(EH.textIndent)) : 0),
            GH = tH.right - (EH ? parseInt(EH.paddingRight) : 0),
            YH = FL(HH, AH, 1),
            uH = FL(HH, rH, -1),
            QH = YH.type == fH.Text ? YH : null,
            WH = uH.type == fH.Text ? uH : null;
          QH && (HH.lineWrapping || YH.widgetLineBreaks) && (QH = wr(HH, AH, 1, QH));
          WH && (HH.lineWrapping || uH.widgetLineBreaks) && (WH = wr(HH, rH, -1, WH));
          if (QH && WH && QH.from == WH.from && QH.to == WH.to) return xH(vH(LH.from, LH.to, QH));
          {
            let BH = QH ? vH(LH.from, null, QH) : PH(YH, !1),
              AH = WH ? vH(null, LH.to, WH) : PH(uH, !0),
              rH = [];
            return (QH || YH).to < (WH || uH).from - (QH && WH ? 1 : 0) || YH.widgetLineBreaks > 1 && BH.bottom + HH.defaultLineHeight / 2 < AH.top ? rH.push(MH(XH, BH.bottom, GH, AH.top)) : BH.bottom < AH.top && HH.elementAtHeight((BH.bottom + AH.top) / 2).type == fH.Text && (BH.bottom = AH.top = (BH.bottom + AH.top) / 2), xH(BH).concat(rH).concat(xH(AH))
          }

          function MH(HH, LH, AH, rH) {
            return new Fr(BH, HH - zH.left, LH - zH.top, Math.max(0, AH - HH), rH - LH)
          }

          function xH(HH) {
            let {
              top: BH,
              bottom: LH,
              horizontal: AH
            } = HH, rH = [];
            for (let SH = 0; SH < AH.length; SH += 2) rH.push(MH(AH[SH], BH, AH[SH + 1], LH));
            return rH
          }

          function vH(BH, LH, AH) {
            let rH = 1e9,
              hH = -1e9,
              tH = [];

            function zH(BH, LH, zH, CH, EH) {
              let YH = HH.coordsAtPos(BH, BH == AH.to ? -2 : 2),
                uH = HH.coordsAtPos(zH, zH == AH.from ? 2 : -2);
              YH && uH && (rH = Math.min(YH.top, uH.top, rH), hH = Math.max(YH.bottom, uH.bottom, hH), EH == CB.LTR ? tH.push(SH && LH ? XH : YH.left, SH && CH ? GH : uH.right) : tH.push(!SH && CH ? XH : uH.left, !SH && LH ? GH : YH.right))
            }
            let CH = null !== BH && void 0 !== BH ? BH : AH.from,
              EH = null !== LH && void 0 !== LH ? LH : AH.to;
            for (let SH of HH.iHH)
              if (SH.to > CH && SH.from < EH)
                for (let AH = Math.max(SH.from, CH), rH = Math.min(SH.to, EH);;) {
                  let SH = HH.state.doc.lineAt(AH);
                  for (let hH of HH.bidiSpans(SH)) {
                    let HH = hH.from + SH.from,
                      tH = hH.to + SH.from;
                    if (HH >= rH) break;
                    tH > AH && zH(Math.max(HH, AH), null == BH && HH <= CH, Math.min(tH, rH), null == LH && tH >= EH, hH.dir)
                  }
                  if (AH = SH.to + 1, AH >= rH) break
                }
            return 0 == tH.length && zH(CH, null == BH, EH, null == LH, HH.textDirection), {
              top: rH,
              bottom: hH,
              horizontal: tH
            }
          }

          function PH(HH, BH) {
            let LH = tH.top + (BH ? HH.top : HH.bottom);
            return {
              top: LH,
              bottom: LH,
              horizontal: []
            }
          }
        }(HH, BH, LH)
      }
    }

    function Dr(HH) {
      let BH = HH.scrollDOM.getBoundingClientRect();
      return {
        left: (HH.textDirection == CB.LTR ? BH.left : BH.right - HH.scrollDOM.clientWidth * HH.scaleX) - HH.scrollDOM.scrollLeft * HH.scaleX,
        top: BH.top - HH.scrollDOM.scrollTop * HH.scaleY
      }
    }

    function wr(HH, BH, LH, AH) {
      let rH = HH.coordsAtPos(BH, 2 * LH);
      if (!rH) return AH;
      let SH = HH.dom.getBoundingClientRect(),
        hH = (rH.top + rH.bottom) / 2,
        tH = HH.posAtCoords({
          x: SH.left + 1,
          y: hH
        }),
        zH = HH.posAtCoords({
          x: SH.right - 1,
          y: hH
        });
      return null == tH || null == zH ? AH : {
        from: Math.max(AH.from, Math.min(tH, zH)),
        to: Math.min(AH.to, Math.max(tH, zH))
      }
    }
    class Zr {
      constructor(HH, BH) {
        this.view = HH, this.layer = BH, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = HH.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), BH.above && this.dom.classList.add("cm-layer-above"), BH.class && this.dom.classList.add(BH.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(HH.state), HH.requestMeasure(this.measureReq), BH.mount && BH.mount(this.dom, HH)
      }
      update(HH) {
        HH.startState.facet(dr) != HH.state.facet(dr) && this.setOrder(HH.state), (this.layer.update(HH, this.dom) || HH.geometryChanged) && (this.scale(), HH.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(HH) {
        !1 !== this.layer.updateOnDocViewUpdate && HH.requestMeasure(this.measureReq)
      }
      setOrder(HH) {
        let BH = 0,
          LH = HH.facet(dr);
        for (; BH < LH.length && LH[BH] != this.layer;) BH++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - BH)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: HH,
          scaleY: BH
        } = this.view;
        HH == this.scaleX && BH == this.scaleY || (this.scaleX = HH, this.scaleY = BH, this.dom.style.transform = `scale(${1/HH}, ${1/BH})`)
      }
      draw(HH) {
        if (HH.length != this.drawn.length || HH.some(((HH, BH) => {
            return LH = HH, AH = this.drawn[BH], !(LH.constructor == AH.constructor && LH.eq(AH));
            var LH, AH
          }))) {
          let BH = this.dom.firstChild,
            LH = 0;
          for (let AH of HH) AH.update && BH && AH.constructor && this.drawn[LH].constructor && AH.update(BH, this.drawn[LH]) ? (BH = BH.nextSibling, LH++) : this.dom.insertBefore(AH.draw(), BH);
          for (; BH;) {
            let HH = BH.nextSibling;
            BH.remove(), BH = HH
          }
          this.drawn = HH, VH.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const dr = AH.l.define();

    function ar(HH) {
      return [JB.define((BH => new Zr(BH, HH))), dr.of(HH)]
    }
    const sr = AH.l.define({
      combine: HH => (0, AH.U)(HH, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (HH, BH) => Math.min(HH, BH),
        drawRangeCursor: (HH, BH) => HH || BH
      })
    });

    function Jr() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [sr.of(HH), pr, HS, BS, jB.of(!0)]
    }

    function ir(HH) {
      return HH.startState.facet(sr) != HH.state.facet(sr)
    }
    const pr = ar({
      above: !0,
      markers(HH) {
        let {
          state: BH
        } = HH, LH = BH.facet(sr), rH = [];
        for (let SH of BH.selection.rW) {
          let hH = SH == BH.selection.main;
          if (SH.empty || LH.drawRangeCursor && !(hH && VH.ios && LH.iosSelectionHandles)) {
            let BH = hH ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              LH = SH.empty ? SH : AH.i.cursor(SH.head, SH.assoc);
            for (let AH of Fr.forRange(HH, BH, LH)) rH.push(AH)
          }
        }
        return rH
      },
      update(HH, BH) {
        HH.transactions.some((HH => HH.selection)) && (BH.style.animationName = "cm-blink" == BH.style.animationName ? "cm-blink2" : "cm-blink");
        let LH = ir(HH);
        return LH && yr(HH.state, BH), HH.docChanged || HH.selectionSet || LH
      },
      mount(HH, BH) {
        yr(BH.state, HH)
      },
      class: "cm-cursorLayer"
    });

    function yr(HH, BH) {
      BH.style.animationDuration = HH.facet(sr).cursorBlinkRate + "ms"
    }
    const HS = ar({
        above: !1,
        markers(HH) {
          let BH = [],
            {
              main: LH,
              rW: rH
            } = HH.state.selection;
          for (let AH of rH)
            if (!AH.empty)
              for (let LH of Fr.forRange(HH, "cm-selectionBackground", AH)) BH.push(LH);
          if (VH.ios && !LH.empty && HH.state.facet(sr).iosSelectionHandles) {
            for (let rH of Fr.forRange(HH, "cm-selectionHandle cm-selectionHandle-start", AH.i.cursor(LH.from, 1))) BH.push(rH);
            for (let rH of Fr.forRange(HH, "cm-selectionHandle cm-selectionHandle-end", AH.i.cursor(LH.to, 1))) BH.push(rH)
          }
          return BH
        },
        update: (HH, BH) => HH.docChanged || HH.selectionSet || HH.viewportChanged || ir(HH),
        class: "cm-selectionLayer"
      }),
      BS = AH.p.highest(br.theme({
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
      LS = AH.B.define({
        map: (HH, BH) => null == HH ? null : BH.mapPos(HH)
      }),
      AS = AH.E.define({
        create: () => null,
        update: (HH, BH) => (null != HH && (HH = BH.changes.mapPos(HH)), BH.effects.reduce(((HH, BH) => BH.is(LS) ? BH.value : HH), HH))
      }),
      rS = JB.fromClass(class {
        constructor(HH) {
          this.view = HH, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(HH) {
          var BH;
          let LH = HH.state.field(AS);
          null == LH ? null != this.cursor && (null === (BH = this.cursor) || void 0 === BH || BH.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (HH.startState.field(AS) != LH || HH.docChanged || HH.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: HH
          } = this, BH = HH.state.field(AS), LH = null != BH && HH.coordsAtPos(BH);
          if (!LH) return null;
          let AH = HH.scrollDOM.getBoundingClientRect();
          return {
            left: LH.left - AH.left + HH.scrollDOM.scrollLeft * HH.scaleX,
            top: LH.top - AH.top + HH.scrollDOM.scrollTop * HH.scaleY,
            height: LH.bottom - LH.top
          }
        }
        drawCursor(HH) {
          if (this.cursor) {
            let {
              scaleX: BH,
              scaleY: LH
            } = this.view;
            HH ? (this.cursor.style.left = HH.left / BH + "px", this.cursor.style.top = HH.top / LH + "px", this.cursor.style.height = HH.height / LH + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(HH) {
          this.view.state.field(AS) != HH && this.view.dispatch({
            effects: LS.of(HH)
          })
        }
      }, {
        eventObservers: {
          dragover(HH) {
            this.setDropPos(this.view.posAtCoords({
              x: HH.clientX,
              y: HH.clientY
            }))
          },
          dragleave(HH) {
            HH.target != this.view.contentDOM && this.view.contentDOM.contains(HH.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function SS() {
      return [AS, rS]
    }

    function hS(HH, BH, LH, AH, rH) {
      BH.lastIndex = 0;
      for (let SH, hH = HH.iterRange(LH, AH), tH = LH; !hH.next().done; tH += hH.value.length)
        if (!hH.lineBreak)
          for (; SH = BH.exec(hH.value);) rH(tH + SH.index, SH)
    }
    class tS {
      constructor(HH) {
        const {
          regexp: BH,
          decoration: LH,
          decorate: AH,
          boundary: rH,
          maxLength: SH = 1e3
        } = HH;
        if (!BH.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = BH, AH) this.addMatch = (HH, BH, LH, rH) => AH(rH, LH, LH + HH[0].length, HH, BH);
        else if ("function" == typeof LH) this.addMatch = (HH, BH, AH, rH) => {
          let SH = LH(HH, BH, AH);
          SH && rH(AH, AH + HH[0].length, SH)
        };
        else {
          if (!LH) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (HH, BH, AH, rH) => rH(AH, AH + HH[0].length, LH)
        }
        this.boundary = rH, this.maxLength = SH
      }
      createDeco(HH) {
        let BH = new AH.t,
          LH = BH.add.bind(BH);
        for (let {
            from: AH,
            to: rH
          }
          of
          function(HH, BH) {
            let LH = HH.iHH;
            if (1 == LH.length && LH[0].from == HH.viewport.from && LH[0].to == HH.viewport.to) return LH;
            let AH = [];
            for (let {
                from: rH,
                to: SH
              }
              of LH) rH = Math.max(HH.state.doc.lineAt(rH).from, rH - BH), SH = Math.min(HH.state.doc.lineAt(SH).to, SH + BH), AH.length && AH[AH.length - 1].to >= rH ? AH[AH.length - 1].to = SH : AH.push({
              from: rH,
              to: SH
            });
            return AH
          }(HH, this.maxLength)) hS(HH.state.doc, this.regexp, AH, rH, ((BH, AH) => this.addMatch(AH, HH, BH, LH)));
        return BH.finish()
      }
      updateDeco(HH, BH) {
        let LH = 1e9,
          AH = -1;
        return HH.docChanged && HH.changes.iterChanges(((BH, rH, SH, hH) => {
          hH >= HH.view.viewport.from && SH <= HH.view.viewport.to && (LH = Math.min(SH, LH), AH = Math.max(hH, AH))
        })), HH.viewportMoved || AH - LH > 1e3 ? this.createDeco(HH.view) : AH > -1 ? this.updateRange(HH.view, BH.map(HH.changes), LH, AH) : BH
      }
      updateRange(HH, BH, LH, AH) {
        for (let rH of HH.iHH) {
          let SH = Math.max(rH.from, LH),
            hH = Math.min(rH.to, AH);
          if (hH >= SH) {
            let LH = HH.state.doc.lineAt(SH),
              AH = LH.to < hH ? HH.state.doc.lineAt(hH) : LH,
              tH = Math.max(rH.from, LH.from),
              zH = Math.min(rH.to, AH.to);
            if (this.boundary) {
              for (; SH > LH.from; SH--)
                if (this.boundary.test(LH.text[SH - 1 - LH.from])) {
                  tH = SH;
                  break
                } for (; hH < AH.to; hH++)
                if (this.boundary.test(AH.text[hH - AH.from])) {
                  zH = hH;
                  break
                }
            }
            let CH, EH = [],
              XH = (HH, BH, LH) => EH.push(LH.range(HH, BH));
            if (LH == AH)
              for (this.regexp.lastIndex = tH - LH.from;
                (CH = this.regexp.exec(LH.text)) && CH.index < zH - LH.from;) this.addMatch(CH, HH, CH.index + LH.from, XH);
            else hS(HH.state.doc, this.regexp, tH, zH, ((BH, LH) => this.addMatch(LH, HH, BH, XH)));
            BH = BH.update({
              filterFrom: tH,
              filterTo: zH,
              filter: (HH, BH) => HH < tH || BH > zH,
              add: EH
            })
          }
        }
        return BH
      }
    }
    const zS = null != /x/.unicode ? "gu" : "g",
      CS = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", zS),
      ES = {
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
    let XS = null;
    const GS = AH.l.define({
      combine(HH) {
        let BH = (0, AH.U)(HH, {
          render: null,
          specialChars: CS,
          addSpecialChars: null
        });
        return (BH.replaceTabs = ! function() {
          var HH;
          if (null == XS && "undefined" != typeof document && document.body) {
            let BH = document.body.style;
            XS = null != (null !== (HH = BH.tabSize) && void 0 !== HH ? HH : BH.MozTabSize)
          }
          return XS || !1
        }()) && (BH.specialChars = new RegExp("\t|" + BH.specialChars.source, zS)), BH.addSpecialChars && (BH.specialChars = new RegExp(BH.specialChars.source + "|" + BH.addSpecialChars.source, zS)), BH
      }
    });

    function YS() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [GS.of(HH), uS || (uS = JB.fromClass(class {
        constructor(HH) {
          this.view = HH, this.Gr = lH.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(HH.state.facet(GS)), this.Gr = this.decorator.createDeco(HH)
        }
        makeDecorator(HH) {
          return new tS({
            regexp: HH.specialChars,
            decoration: (BH, LH, rH) => {
              let {
                doc: SH
              } = LH.state, hH = (0, AH.N)(BH[0], 0);
              if (9 == hH) {
                let HH = SH.lineAt(rH),
                  BH = LH.state.tabSize,
                  hH = (0, AH.Y)(HH.text, BH, rH - HH.from);
                return lH.replace({
                  widget: new WS((BH - hH % BH) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[hH] || (this.decorationCache[hH] = lH.replace({
                widget: new QS(HH, hH)
              }))
            },
            boundary: HH.replaceTabs ? void 0 : /[^]/
          })
        }
        update(HH) {
          let BH = HH.state.facet(GS);
          HH.startState.facet(GS) != BH ? (this.decorator = this.makeDecorator(BH), this.Gr = this.decorator.createDeco(HH.view)) : this.Gr = this.decorator.updateDeco(HH, this.Gr)
        }
      }, {
        Gr: HH => HH.Gr
      }))]
    }
    let uS = null;
    class QS extends IH {
      constructor(HH, BH) {
        super(), this.options = HH, this.code = BH
      }
      eq(HH) {
        return HH.code == this.code
      }
      toDOM(HH) {
        let BH = function(HH) {
            return HH >= 32 ? "\u2022" : 10 == HH ? "\u2424" : String.fromCharCode(9216 + HH)
          }(this.code),
          LH = HH.state.phrase("Control character") + " " + (ES[this.code] || "0x" + this.code.toString(16)),
          AH = this.options.render && this.options.render(this.code, LH, BH);
        if (AH) return AH;
        let rH = document.createElement("span");
        return rH.textContent = BH, rH.title = LH, rH.setAttribute("aria-label", LH), rH.className = "cm-specialChar", rH
      }
      ignoreEvent() {
        return !1
      }
    }
    class WS extends IH {
      constructor(HH) {
        super(), this.width = HH
      }
      eq(HH) {
        return HH.width == this.width
      }
      toDOM() {
        let HH = document.createElement("span");
        return HH.textContent = "\t", HH.className = "cm-tab", HH.style.width = this.width + "px", HH
      }
      ignoreEvent() {
        return !1
      }
    }

    function MS() {
      return vS
    }
    const xS = lH.line({
        class: "cm-activeLine"
      }),
      vS = JB.fromClass(class {
        constructor(HH) {
          this.Gr = this.getDeco(HH)
        }
        update(HH) {
          (HH.docChanged || HH.selectionSet) && (this.Gr = this.getDeco(HH.view))
        }
        getDeco(HH) {
          let BH = -1,
            LH = [];
          for (let AH of HH.state.selection.rW) {
            let rH = HH.lineBlockAt(AH.head);
            rH.from > BH && (LH.push(xS.range(rH.from)), BH = rH.from)
          }
          return lH.set(LH)
        }
      }, {
        Gr: HH => HH.Gr
      });
    class PS extends IH {
      constructor(HH) {
        super(), this.content = HH
      }
      toDOM(HH) {
        let BH = document.createElement("span");
        return BH.className = "cm-placeholder", BH.style.pointerEvents = "none", BH.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(HH) : this.content.cloneNode(!0)), BH.setAttribute("aria-hidden", "true"), BH
      }
      coordsAt(HH) {
        let BH = HH.firstChild ? FH(HH.firstChild) : [];
        if (!BH.length) return null;
        let LH = window.getComputedStyle(HH.parentNode),
          AH = sH(BH[0], "rtl" != LH.direction),
          rH = parseInt(LH.lineHeight);
        return AH.bottom - AH.top > 1.5 * rH ? {
          left: AH.left,
          right: AH.right,
          top: AH.top,
          bottom: AH.top + rH
        } : AH
      }
      ignoreEvent() {
        return !1
      }
    }

    function TS(HH) {
      let BH = JB.fromClass(class {
        constructor(BH) {
          this.view = BH, this.placeholder = HH ? lH.set([lH.widget({
            widget: new PS(HH),
            side: 1
          }).range(0)]) : lH.none
        }
        get Gr() {
          return this.view.state.doc.length ? lH.none : this.placeholder
        }
      }, {
        Gr: HH => HH.Gr
      });
      return "string" == typeof HH ? [BH, br.contentAttributes.of({
        "aria-placeholder": HH
      })] : BH
    }
    const US = 2e3;

    function VS(HH, BH) {
      let LH = HH.posAtCoords({
          x: BH.clientX,
          y: BH.clientY
        }, !1),
        rH = HH.state.doc.lineAt(LH),
        SH = LH - rH.from,
        hH = SH > US ? -1 : SH == rH.length ? function(HH, BH) {
          let LH = HH.coordsAtPos(HH.viewport.from);
          return LH ? Math.round(Math.abs((LH.left - BH) / HH.defaultCharacterWidth)) : -1
        }(HH, BH.clientX) : (0, AH.Y)(rH.text, HH.state.tabSize, LH - rH.from);
      return {
        line: rH.number,
        col: hH,
        off: SH
      }
    }

    function OS(HH, BH) {
      let LH = VS(HH, BH),
        rH = HH.state.selection;
      return LH ? {
        update(HH) {
          if (HH.docChanged) {
            let BH = HH.changes.mapPos(HH.startState.doc.line(LH.line).from),
              AH = HH.state.doc.lineAt(BH);
            LH = {
              line: AH.number,
              col: LH.col,
              off: Math.min(LH.off, AH.length)
            }, rH = rH.map(HH.changes)
          }
        },
        get(BH, SH, hH) {
          let tH = VS(HH, BH);
          if (!tH) return rH;
          let zH = function(HH, BH, LH) {
            let rH = Math.min(BH.line, LH.line),
              SH = Math.max(BH.line, LH.line),
              hH = [];
            if (BH.off > US || LH.off > US || BH.col < 0 || LH.col < 0) {
              let tH = Math.min(BH.off, LH.off),
                zH = Math.max(BH.off, LH.off);
              for (let BH = rH; BH <= SH; BH++) {
                let LH = HH.doc.line(BH);
                LH.length <= zH && hH.push(AH.i.range(LH.from + tH, LH.to + zH))
              }
            } else {
              let tH = Math.min(BH.col, LH.col),
                zH = Math.max(BH.col, LH.col);
              for (let BH = rH; BH <= SH; BH++) {
                let LH = HH.doc.line(BH),
                  rH = (0, AH.db)(LH.text, tH, HH.tabSize, !0);
                if (rH < 0) hH.push(AH.i.cursor(LH.to));
                else {
                  let BH = (0, AH.db)(LH.text, zH, HH.tabSize);
                  hH.push(AH.i.range(LH.from + rH, LH.from + BH))
                }
              }
            }
            return hH
          }(HH.state, LH, tH);
          return zH.length ? hH ? AH.i.create(zH.concat(rH.rW)) : AH.i.create(zH) : rH
        }
      } : null
    }

    function bS(HH) {
      let BH = (null === HH || void 0 === HH ? void 0 : HH.eventFilter) || (HH => HH.altKey && 0 == HH.button);
      return br.mouseSelectionStyle.of(((HH, LH) => BH(LH) ? OS(HH, LH) : null))
    }
    const kS = {
        Alt: [18, HH => !!HH.altKey],
        Control: [17, HH => !!HH.ctrlKey],
        Shift: [16, HH => !!HH.shiftKey],
        Meta: [91, HH => !!HH.metaKey]
      },
      mS = {
        style: "cursor: crosshair"
      };

    function oS() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [BH, LH] = kS[HH.key || "Alt"],
        AH = JB.fromClass(class {
          constructor(HH) {
            this.view = HH, this.isDown = !1
          }
          set(HH) {
            this.isDown != HH && (this.isDown = HH, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(HH) {
              this.set(HH.keyCode == BH || LH(HH))
            },
            keyup(HH) {
              HH.keyCode != BH && LH(HH) || this.set(!1)
            },
            mousemove(HH) {
              this.set(LH(HH))
            }
          }
        });
      return [AH, br.contentAttributes.of((HH => {
        var BH;
        return (null === (BH = HH.plugin(AH)) || void 0 === BH ? void 0 : BH.isDown) ? mS : null
      }))]
    }
    const IS = "-10000px";
    class fS {
      constructor(HH, BH, LH, AH) {
        this.facet = BH, this.createTooltipView = LH, this.removeTooltipView = AH, this.input = HH.state.facet(BH), this.tooltips = this.input.filter((HH => HH));
        let rH = null;
        this.tooltipViews = this.tooltips.map((HH => rH = LH(HH, rH)))
      }
      update(HH, BH) {
        var LH;
        let AH = HH.state.facet(this.facet),
          rH = AH.filter((HH => HH));
        if (AH === this.input) {
          for (let BH of this.tooltipViews) BH.update && BH.update(HH);
          return !1
        }
        let SH = [],
          hH = BH ? [] : null;
        for (let tH = 0; tH < rH.length; tH++) {
          let LH = rH[tH],
            AH = -1;
          if (LH) {
            for (let HH = 0; HH < this.tooltips.length; HH++) {
              let BH = this.tooltips[HH];
              BH && BH.create == LH.create && (AH = HH)
            }
            if (AH < 0) SH[tH] = this.createTooltipView(LH, tH ? SH[tH - 1] : null), hH && (hH[tH] = !!LH.above);
            else {
              let LH = SH[tH] = this.tooltipViews[AH];
              hH && (hH[tH] = BH[AH]), LH.update && LH.update(HH)
            }
          }
        }
        for (let tH of this.tooltipViews) SH.indexOf(tH) < 0 && (this.removeTooltipView(tH), null === (LH = tH.destroy) || void 0 === LH || LH.call(tH));
        return BH && (hH.forEach(((HH, LH) => BH[LH] = HH)), BH.length = hH.length), this.input = AH, this.tooltips = rH, this.tooltipViews = SH, !0
      }
    }

    function lS(HH) {
      let BH = HH.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: BH.clientHeight,
        right: BH.clientWidth
      }
    }
    const KS = AH.l.define({
        combine: HH => {
          var BH, LH, AH;
          return {
            position: VH.ios ? "absolute" : (null === (BH = HH.find((HH => HH.position))) || void 0 === BH ? void 0 : BH.position) || "fixed",
            parent: (null === (LH = HH.find((HH => HH.parent))) || void 0 === LH ? void 0 : LH.parent) || null,
            tooltipSpace: (null === (AH = HH.find((HH => HH.tooltipSpace))) || void 0 === AH ? void 0 : AH.tooltipSpace) || lS
          }
        }
      }),
      cS = new WeakMap,
      eS = JB.fromClass(class {
        constructor(HH) {
          this.view = HH, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let BH = HH.state.facet(KS);
          this.position = BH.position, this.parent = BH.parent, this.classes = HH.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new fS(HH, RS, ((HH, BH) => this.createTooltip(HH, BH)), (HH => {
            this.resizeObserver && this.resizeObserver.unobserve(HH.dom), HH.dom.remove()
          })), this.above = this.manager.tooltips.map((HH => !!HH.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((HH => {
            Date.now() > this.lastTransaction - 50 && HH.length > 0 && HH[HH.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), HH.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let HH of this.manager.tooltipViews) this.intersectionObserver.observe(HH.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(HH) {
          HH.transactions.length && (this.lastTransaction = Date.now());
          let BH = this.manager.update(HH, this.above);
          BH && this.observeIntersection();
          let LH = BH || HH.geometryChanged,
            AH = HH.state.facet(KS);
          if (AH.position != this.position && !this.madeAbsolute) {
            this.position = AH.position;
            for (let HH of this.manager.tooltipViews) HH.dom.style.position = this.position;
            LH = !0
          }
          if (AH.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = AH.parent, this.createContainer();
            for (let HH of this.manager.tooltipViews) this.container.appendChild(HH.dom);
            LH = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          LH && this.maybeMeasure()
        }
        createTooltip(HH, BH) {
          let LH = HH.create(this.view),
            AH = BH ? BH.dom : null;
          if (LH.dom.classList.add("cm-tooltip"), HH.arrow && !LH.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let HH = document.createElement("div");
            HH.className = "cm-tooltip-arrow", LH.dom.appendChild(HH)
          }
          return LH.dom.style.position = this.position, LH.dom.style.top = IS, LH.dom.style.left = "0px", this.container.insertBefore(LH.dom, AH), LH.mount && LH.mount(this.view), this.resizeObserver && this.resizeObserver.observe(LH.dom), LH
        }
        destroy() {
          var HH, BH, LH;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let AH of this.manager.tooltipViews) AH.dom.remove(), null === (HH = AH.destroy) || void 0 === HH || HH.call(AH);
          this.parent && this.container.remove(), null === (BH = this.resizeObserver) || void 0 === BH || BH.disconnect(), null === (LH = this.intersectionObserver) || void 0 === LH || LH.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let HH = 1,
            BH = 1,
            LH = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: HH
            } = this.manager.tooltipViews[0];
            if (VH.safari) {
              let BH = HH.getBoundingClientRect();
              LH = Math.abs(BH.top + 1e4) > 1 || Math.abs(BH.left) > 1
            } else LH = !!HH.offsetParent && HH.offsetParent != this.container.ownerDocument.body
          }
          if (LH || "absolute" == this.position)
            if (this.parent) {
              let LH = this.parent.getBoundingClientRect();
              LH.width && LH.height && (HH = LH.width / this.parent.offsetWidth, BH = LH.height / this.parent.offsetHeight)
            } else({
              scaleX: HH,
              scaleY: BH
            } = this.view.viewState);
          let AH = this.view.scrollDOM.getBoundingClientRect(),
            rH = tL(this.view);
          return {
            visible: {
              left: AH.left + rH.left,
              top: AH.top + rH.top,
              right: AH.right - rH.right,
              bottom: AH.bottom - rH.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((HH, BH) => {
              let LH = this.manager.tooltipViews[BH];
              return LH.getCoords ? LH.getCoords(HH.pos) : this.view.coordsAtPos(HH.pos)
            })),
            size: this.manager.tooltipViews.map((HH => {
              let {
                dom: BH
              } = HH;
              return BH.getBoundingClientRect()
            })),
            space: this.view.state.facet(KS).tooltipSpace(this.view),
            scaleX: HH,
            scaleY: BH,
            makeAbsolute: LH
          }
        }
        writeMeasure(HH) {
          var BH;
          if (HH.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let HH of this.manager.tooltipViews) HH.dom.style.position = "absolute"
          }
          let {
            visible: LH,
            space: AH,
            scaleX: rH,
            scaleY: SH
          } = HH, hH = [];
          for (let tH = 0; tH < this.manager.tooltips.length; tH++) {
            let zH = this.manager.tooltips[tH],
              CH = this.manager.tooltipViews[tH],
              {
                dom: EH
              } = CH,
              XH = HH.pos[tH],
              GH = HH.size[tH];
            if (!XH || !1 !== zH.clip && (XH.bottom <= Math.max(LH.top, AH.top) || XH.top >= Math.min(LH.bottom, AH.bottom) || XH.right < Math.max(LH.left, AH.left) - .1 || XH.left > Math.min(LH.right, AH.right) + .1)) {
              EH.style.top = IS;
              continue
            }
            let YH = zH.arrow ? CH.dom.querySelector(".cm-tooltip-arrow") : null,
              uH = YH ? 7 : 0,
              QH = GH.right - GH.left,
              WH = null !== (BH = cS.get(CH)) && void 0 !== BH ? BH : GH.bottom - GH.top,
              MH = CH.offset || NS,
              xH = this.view.textDirection == CB.LTR,
              vH = GH.width > AH.right - AH.left ? xH ? AH.left : AH.right - GH.width : xH ? Math.max(AH.left, Math.min(XH.left - (YH ? 14 : 0) + MH.x, AH.right - QH)) : Math.min(Math.max(AH.left, XH.left - QH + (YH ? 14 : 0) - MH.x), AH.right - QH),
              PH = this.above[tH];
            !zH.strictSide && (PH ? XH.top - WH - uH - MH.y < AH.top : XH.bottom + WH + uH + MH.y > AH.bottom) && PH == AH.bottom - XH.bottom > XH.top - AH.top && (PH = this.above[tH] = !PH);
            let TH = (PH ? XH.top - AH.top : AH.bottom - XH.bottom) - uH;
            if (TH < WH && !1 !== CH.resize) {
              if (TH < this.view.defaultLineHeight) {
                EH.style.top = IS;
                continue
              }
              cS.set(CH, WH), EH.style.height = (WH = TH) / SH + "px"
            } else EH.style.height && (EH.style.height = "");
            let UH = PH ? XH.top - WH - uH - MH.y : XH.bottom + uH + MH.y,
              VH = vH + QH;
            if (!0 !== CH.overlap)
              for (let HH of hH) HH.left < VH && HH.right > vH && HH.top < UH + WH && HH.bottom > UH && (UH = PH ? HH.top - WH - 2 - uH : HH.bottom + uH + 2);
            if ("absolute" == this.position ? (EH.style.top = (UH - HH.parent.top) / SH + "px", qS(EH, (vH - HH.parent.left) / rH)) : (EH.style.top = UH / SH + "px", qS(EH, vH / rH)), YH) {
              let HH = XH.left + (xH ? MH.x : -MH.x) - (vH + 14 - 7);
              YH.style.left = HH / rH + "px"
            }!0 !== CH.overlap && hH.push({
              left: vH,
              top: UH,
              right: VH,
              bottom: UH + WH
            }), EH.classList.toggle("cm-tooltip-above", PH), EH.classList.toggle("cm-tooltip-below", !PH), CH.positioned && CH.positioned(HH.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let HH of this.manager.tooltipViews) HH.dom.style.top = IS
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function qS(HH, BH) {
      let LH = parseInt(HH.style.left, 10);
      (isNaN(LH) || Math.abs(BH - LH) > 1) && (HH.style.left = BH + "px")
    }
    const gS = br.baseTheme({
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
      NS = {
        x: 0,
        y: 0
      },
      RS = AH.l.define({
        enables: [eS, gS]
      }),
      jS = AH.l.define({
        combine: HH => HH.reduce(((HH, BH) => HH.concat(BH)), [])
      });
    class nS {
      static create(HH) {
        return new nS(HH)
      }
      constructor(HH) {
        this.view = HH, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new fS(HH, jS, ((HH, BH) => this.createHostedView(HH, BH)), (HH => HH.dom.remove()))
      }
      createHostedView(HH, BH) {
        let LH = HH.create(this.view);
        return LH.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(LH.dom, BH ? BH.dom.nextSibling : this.dom.firstChild), this.mounted && LH.mount && LH.mount(this.view), LH
      }
      mount(HH) {
        for (let BH of this.manager.tooltipViews) BH.mount && BH.mount(HH);
        this.mounted = !0
      }
      positioned(HH) {
        for (let BH of this.manager.tooltipViews) BH.positioned && BH.positioned(HH)
      }
      update(HH) {
        this.manager.update(HH)
      }
      destroy() {
        var HH;
        for (let BH of this.manager.tooltipViews) null === (HH = BH.destroy) || void 0 === HH || HH.call(BH)
      }
      passProp(HH) {
        let BH;
        for (let LH of this.manager.tooltipViews) {
          let AH = LH[HH];
          if (void 0 !== AH)
            if (void 0 === BH) BH = AH;
            else if (BH !== AH) return
        }
        return BH
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
    const FS = RS.compute([jS], (HH => {
      let BH = HH.facet(jS);
      return 0 === BH.length ? null : {
        pos: Math.min(...BH.map((HH => HH.pos))),
        end: Math.max(...BH.map((HH => {
          var BH;
          return null !== (BH = HH.end) && void 0 !== BH ? BH : HH.pos
        }))),
        create: nS.create,
        above: BH[0].above,
        arrow: BH.some((HH => HH.arrow))
      }
    }));
    class DS {
      constructor(HH, BH, LH, AH, rH) {
        this.view = HH, this.source = BH, this.field = LH, this.setHover = AH, this.hoverTime = rH, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: HH.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), HH.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), HH.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let HH = Date.now() - this.lastMove.time;
        HH < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - HH) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: HH,
          lastMove: BH
        } = this, LH = HH.docView.tile.nearest(BH.target);
        if (!LH) return;
        let AH, rH = 1;
        if (LH.isWidget()) AH = LH.posAtStart;
        else {
          if (AH = HH.posAtCoords(BH), null == AH) return;
          let LH = HH.coordsAtPos(AH);
          if (!LH || BH.y < LH.top || BH.y > LH.bottom || BH.x < LH.left - HH.defaultCharacterWidth || BH.x > LH.right + HH.defaultCharacterWidth) return;
          let SH = HH.bidiSpans(HH.state.doc.lineAt(AH)).find((HH => HH.from <= AH && HH.to >= AH)),
            hH = SH && SH.dir == CB.RTL ? -1 : 1;
          rH = BH.x < LH.left ? -hH : hH
        }
        let SH = this.source(HH, AH, rH);
        if (null === SH || void 0 === SH ? void 0 : SH.then) {
          let BH = this.pending = {
            pos: AH
          };
          SH.then((LH => {
            this.pending == BH && (this.pending = null, !LH || Array.isArray(LH) && !LH.length || HH.dispatch({
              effects: this.setHover.of(Array.isArray(LH) ? LH : [LH])
            }))
          }), (BH => ZB(HH.state, BH, "hover tooltip")))
        } else !SH || Array.isArray(SH) && !SH.length || HH.dispatch({
          effects: this.setHover.of(Array.isArray(SH) ? SH : [SH])
        })
      }
      get tooltip() {
        let HH = this.view.plugin(eS),
          BH = HH ? HH.manager.tooltips.findIndex((HH => HH.create == nS.create)) : -1;
        return BH > -1 ? HH.manager.tooltipViews[BH] : null
      }
      mousemove(HH) {
        var BH, LH;
        this.lastMove = {
          x: HH.clientX,
          y: HH.clientY,
          target: HH.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: AH,
          tooltip: rH
        } = this;
        if (AH.length && rH && ! function(HH, BH) {
            let LH, {
              left: AH,
              right: rH,
              top: SH,
              bottom: hH
            } = HH.getBoundingClientRect();
            if (LH = HH.querySelector(".cm-tooltip-arrow")) {
              let HH = LH.getBoundingClientRect();
              SH = Math.min(HH.top, SH), hH = Math.max(HH.bottom, hH)
            }
            return BH.clientX >= AH - wS && BH.clientX <= rH + wS && BH.clientY >= SH - wS && BH.clientY <= hH + wS
          }(rH.dom, HH) || this.pending) {
          let {
            pos: rH
          } = AH[0] || this.pending, SH = null !== (LH = null === (BH = AH[0]) || void 0 === BH ? void 0 : BH.end) && void 0 !== LH ? LH : rH;
          (rH == SH ? this.view.posAtCoords(this.lastMove) == rH : function(HH, BH, LH, AH, rH) {
            let SH = HH.scrollDOM.getBoundingClientRect(),
              hH = HH.documentTop + HH.documentPadding.top + HH.contentHeight;
            if (SH.left > AH || SH.right < AH || SH.top > rH || Math.min(SH.bottom, hH) < rH) return !1;
            let tH = HH.posAtCoords({
              x: AH,
              y: rH
            }, !1);
            return tH >= BH && tH <= LH
          }(this.view, rH, SH, HH.clientX, HH.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(HH) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: BH
        } = this;
        if (BH.length) {
          let {
            tooltip: BH
          } = this;
          BH && BH.dom.contains(HH.relatedTarget) ? this.watchTooltipLeave(BH.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(HH) {
        let BH = LH => {
          HH.removeEventListener("mouseleave", BH), this.active.length && !this.view.dom.contains(LH.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        HH.addEventListener("mouseleave", BH)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const wS = 4;

    function ZS(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        LH = AH.B.define(),
        rH = AH.E.define({
          create: () => [],
          update(HH, rH) {
            if (HH.length && (BH.hideOnChange && (rH.docChanged || rH.selection) ? HH = [] : BH.hideOn && (HH = HH.filter((HH => !BH.hideOn(rH, HH)))), rH.docChanged)) {
              let BH = [];
              for (let LH of HH) {
                let HH = rH.changes.mapPos(LH.pos, -1, AH.n.TrackDel);
                if (null != HH) {
                  let AH = Object.assign(Object.create(null), LH);
                  AH.pos = HH, null != AH.end && (AH.end = rH.changes.mapPos(AH.end)), BH.push(AH)
                }
              }
              HH = BH
            }
            for (let BH of rH.effects) BH.is(LH) && (HH = BH.value), BH.is(aS) && (HH = []);
            return HH
          },
          provide: HH => jS.from(HH)
        });
      return {
        active: rH,
        extension: [rH, JB.define((AH => new DS(AH, HH, rH, LH, BH.hoverTime || 300))), FS]
      }
    }

    function dS(HH, BH) {
      let LH = HH.plugin(eS);
      if (!LH) return null;
      let AH = LH.manager.tooltips.indexOf(BH);
      return AH < 0 ? null : LH.manager.tooltipViews[AH]
    }
    const aS = AH.B.define();
    const sS = AH.l.define({
      combine(HH) {
        let BH, LH;
        for (let AH of HH) BH = BH || AH.topContainer, LH = LH || AH.bottomContainer;
        return {
          topContainer: BH,
          bottomContainer: LH
        }
      }
    });

    function JS(HH, BH) {
      let LH = HH.plugin(iS),
        AH = LH ? LH.specs.indexOf(BH) : -1;
      return AH > -1 ? LH.panels[AH] : null
    }
    const iS = JB.fromClass(class {
      constructor(HH) {
        this.input = HH.state.facet(Hh), this.specs = this.input.filter((HH => HH)), this.panels = this.specs.map((BH => BH(HH)));
        let BH = HH.state.facet(sS);
        this.top = new pS(HH, !0, BH.topContainer), this.bottom = new pS(HH, !1, BH.bottomContainer), this.top.sync(this.panels.filter((HH => HH.top))), this.bottom.sync(this.panels.filter((HH => !HH.top)));
        for (let LH of this.panels) LH.dom.classList.add("cm-panel"), LH.mount && LH.mount()
      }
      update(HH) {
        let BH = HH.state.facet(sS);
        this.top.container != BH.topContainer && (this.top.sync([]), this.top = new pS(HH.view, !0, BH.topContainer)), this.bottom.container != BH.bottomContainer && (this.bottom.sync([]), this.bottom = new pS(HH.view, !1, BH.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let LH = HH.state.facet(Hh);
        if (LH != this.input) {
          let BH = LH.filter((HH => HH)),
            AH = [],
            rH = [],
            SH = [],
            hH = [];
          for (let LH of BH) {
            let BH, tH = this.specs.indexOf(LH);
            tH < 0 ? (BH = LH(HH.view), hH.push(BH)) : (BH = this.panels[tH], BH.update && BH.update(HH)), AH.push(BH), (BH.top ? rH : SH).push(BH)
          }
          this.specs = BH, this.panels = AH, this.top.sync(rH), this.bottom.sync(SH);
          for (let HH of hH) HH.dom.classList.add("cm-panel"), HH.mount && HH.mount()
        } else
          for (let AH of this.panels) AH.update && AH.update(HH)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: HH => br.scrollMargins.of((BH => {
        let LH = BH.plugin(HH);
        return LH && {
          top: LH.top.scrollMargin(),
          bottom: LH.bottom.scrollMargin()
        }
      }))
    });
    class pS {
      constructor(HH, BH, LH) {
        this.view = HH, this.top = BH, this.container = LH, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(HH) {
        for (let BH of this.panels) BH.destroy && HH.indexOf(BH) < 0 && BH.destroy();
        this.panels = HH, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let HH = this.container || this.view.dom;
          HH.insertBefore(this.dom, this.top ? HH.firstChild : null)
        }
        let HH = this.dom.firstChild;
        for (let BH of this.panels)
          if (BH.dom.parentNode == this.dom) {
            for (; HH != BH.dom;) HH = yS(HH);
            HH = HH.nextSibling
          } else this.dom.insertBefore(BH.dom, HH);
        for (; HH;) HH = yS(HH)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let HH of this.classes.split(" ")) HH && this.container.classList.remove(HH);
          for (let HH of (this.classes = this.view.themeClasses).split(" ")) HH && this.container.classList.add(HH)
        }
      }
    }

    function yS(HH) {
      let BH = HH.nextSibling;
      return HH.remove(), BH
    }
    const Hh = AH.l.define({
      enables: iS
    });

    function Bh(HH, BH) {
      let LH, rH = new Promise((HH => LH = HH)),
        SH = HH => function(HH, BH, LH) {
          let AH = BH.content ? BH.content(HH, (() => hH(null))) : null;
          if (!AH) {
            if (AH = (0, XH.d)("form"), BH.input) {
              let HH = (0, XH.d)("input", BH.input);
              /^(text|password|number|email|tel|url)$/.test(HH.type) && HH.classList.add("cm-textfield"), HH.name || (HH.name = "input"), AH.appendChild((0, XH.d)("label", (BH.label || "") + ": ", HH))
            } else AH.appendChild(document.createTextNode(BH.label || ""));
            AH.appendChild(document.createTextNode(" ")), AH.appendChild((0, XH.d)("button", {
              class: "cm-button",
              type: "submit"
            }, BH.submitLabel || "OK"))
          }
          let rH = "FORM" == AH.nodeName ? [AH] : AH.querySelectorAll("form");
          for (let tH = 0; tH < rH.length; tH++) {
            let HH = rH[tH];
            HH.addEventListener("keydown", (BH => {
              27 == BH.keyCode ? (BH.preventDefault(), hH(null)) : 13 == BH.keyCode && (BH.preventDefault(), hH(HH))
            })), HH.addEventListener("submit", (BH => {
              BH.preventDefault(), hH(HH)
            }))
          }
          let SH = (0, XH.d)("div", AH, (0, XH.d)("button", {
            onclick: () => hH(null),
            "aria-label": HH.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          BH.class && (SH.className = BH.class);

          function hH(BH) {
            SH.contains(SH.ownerDocument.activeElement) && HH.focus(), LH(BH)
          }
          return SH.classList.add("cm-dialog"), {
            dom: SH,
            top: BH.top,
            mount: () => {
              if (BH.focus) {
                let HH;
                HH = "string" == typeof BH.focus ? AH.querySelector(BH.focus) : AH.querySelector("input") || AH.querySelector("button"), HH && "select" in HH ? HH.select() : HH && "focus" in HH && HH.focus()
              }
            }
          }
        }(HH, BH, LH);
      HH.state.field(Lh, !1) ? HH.dispatch({
        effects: Ah.of(SH)
      }) : HH.dispatch({
        effects: AH.B.appendConfig.of(Lh.init((() => [SH])))
      });
      let hH = rh.of(SH);
      return {
        close: hH,
        result: rH.then((BH => ((HH.win.queueMicrotask || (BH => HH.win.setTimeout(BH, 10)))((() => {
          HH.state.field(Lh).indexOf(SH) > -1 && HH.dispatch({
            effects: hH
          })
        })), BH)))
      }
    }
    const Lh = AH.E.define({
        create: () => [],
        update(HH, BH) {
          for (let LH of BH.effects) LH.is(Ah) ? HH = [LH.value].concat(HH) : LH.is(rh) && (HH = HH.filter((HH => HH != LH.value)));
          return HH
        },
        provide: HH => Hh.computeN([HH], (BH => BH.field(HH)))
      }),
      Ah = AH.B.define(),
      rh = AH.B.define();
    class Sh extends AH.A {
      compare(HH) {
        return this == HH || this.constructor == HH.constructor && this.eq(HH)
      }
      eq(HH) {
        return !1
      }
      destroy(HH) {}
    }
    Sh.prototype.elementClass = "", Sh.prototype.toDOM = void 0, Sh.prototype.mapMode = AH.n.TrackBefore, Sh.prototype.startSide = Sh.prototype.endSide = -1, Sh.prototype.point = !0;
    const hh = AH.l.define(),
      th = AH.l.define(),
      zh = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => AH.x.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      Ch = AH.l.define();

    function Eh(HH) {
      return [Gh(), Ch.of({
        ...zh,
        ...HH
      })]
    }
    const Xh = AH.l.define({
      combine: HH => HH.some((HH => HH))
    });

    function Gh(HH) {
      let BH = [Yh];
      return HH && !1 === HH.fixed && BH.push(Xh.of(!0)), BH
    }
    const Yh = JB.fromClass(class {
      constructor(HH) {
        this.view = HH, this.domAfter = null, this.prevViewport = HH.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = HH.state.facet(Ch).map((BH => new Mh(HH, BH))), this.fixed = !HH.state.facet(Xh);
        for (let BH of this.gutters) "after" == BH.config.side ? this.getDOMAfter().appendChild(BH.dom) : this.dom.appendChild(BH.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), HH.scrollDOM.insertBefore(this.dom, HH.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(HH) {
        if (this.updateGutters(HH)) {
          let BH = this.prevViewport,
            LH = HH.view.viewport,
            AH = Math.min(BH.to, LH.to) - Math.max(BH.from, LH.from);
          this.syncGutters(AH < .8 * (LH.to - LH.from))
        }
        if (HH.geometryChanged) {
          let HH = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = HH, this.domAfter && (this.domAfter.style.minHeight = HH)
        }
        this.view.state.facet(Xh) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = HH.view.viewport
      }
      syncGutters(HH) {
        let BH = this.dom.nextSibling;
        HH && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let LH = AH.x.iter(this.view.state.facet(hh), this.view.viewport.from),
          rH = [],
          SH = this.gutters.map((HH => new Wh(HH, this.view.viewport, -this.view.documentPadding.top)));
        for (let AH of this.view.viewportLineBlocks)
          if (rH.length && (rH = []), Array.isArray(AH.type)) {
            let HH = !0;
            for (let BH of AH.type)
              if (BH.type == fH.Text && HH) {
                Qh(LH, rH, BH.from);
                for (let HH of SH) HH.line(this.view, BH, rH);
                HH = !1
              } else if (BH.widget)
              for (let HH of SH) HH.widget(this.view, BH)
          } else if (AH.type == fH.Text) {
          Qh(LH, rH, AH.from);
          for (let HH of SH) HH.line(this.view, AH, rH)
        } else if (AH.widget)
          for (let HH of SH) HH.widget(this.view, AH);
        for (let AH of SH) AH.finish();
        HH && (this.view.scrollDOM.insertBefore(this.dom, BH), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(HH) {
        let BH = HH.startState.facet(Ch),
          LH = HH.state.facet(Ch),
          rH = HH.docChanged || HH.heightChanged || HH.viewportChanged || !AH.x.eq(HH.startState.facet(hh), HH.state.facet(hh), HH.view.viewport.from, HH.view.viewport.to);
        if (BH == LH)
          for (let AH of this.gutters) AH.update(HH) && (rH = !0);
        else {
          rH = !0;
          let AH = [];
          for (let rH of LH) {
            let LH = BH.indexOf(rH);
            LH < 0 ? AH.push(new Mh(this.view, rH)) : (this.gutters[LH].update(HH), AH.push(this.gutters[LH]))
          }
          for (let HH of this.gutters) HH.dom.remove(), AH.indexOf(HH) < 0 && HH.destroy();
          for (let HH of AH) "after" == HH.config.side ? this.getDOMAfter().appendChild(HH.dom) : this.dom.appendChild(HH.dom);
          this.gutters = AH
        }
        return rH
      }
      destroy() {
        for (let HH of this.gutters) HH.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: HH => br.scrollMargins.of((BH => {
        let LH = BH.plugin(HH);
        if (!LH || 0 == LH.gutters.length || !LH.fixed) return null;
        let AH = LH.dom.offsetWidth * BH.scaleX,
          rH = LH.domAfter ? LH.domAfter.offsetWidth * BH.scaleX : 0;
        return BH.textDirection == CB.LTR ? {
          left: AH,
          right: rH
        } : {
          right: AH,
          left: rH
        }
      }))
    });

    function uh(HH) {
      return Array.isArray(HH) ? HH : [HH]
    }

    function Qh(HH, BH, LH) {
      for (; HH.value && HH.from <= LH;) HH.from == LH && BH.push(HH.value), HH.next()
    }
    class Wh {
      constructor(HH, BH, LH) {
        this.gutter = HH, this.height = LH, this.i = 0, this.cursor = AH.x.iter(HH.markers, BH.from)
      }
      addElement(HH, BH, LH) {
        let {
          gutter: AH
        } = this, rH = (BH.top - this.height) / HH.scaleY, SH = BH.height / HH.scaleY;
        if (this.i == AH.elements.length) {
          let BH = new xh(HH, SH, rH, LH);
          AH.elements.push(BH), AH.dom.appendChild(BH.dom)
        } else AH.elements[this.i].update(HH, SH, rH, LH);
        this.height = BH.bottom, this.i++
      }
      line(HH, BH, LH) {
        let AH = [];
        Qh(this.cursor, AH, BH.from), LH.length && (AH = AH.concat(LH));
        let rH = this.gutter.config.lineMarker(HH, BH, AH);
        rH && AH.unshift(rH);
        let SH = this.gutter;
        (0 != AH.length || SH.config.renderEmptyElements) && this.addElement(HH, BH, AH)
      }
      widget(HH, BH) {
        let LH = this.gutter.config.widgetMarker(HH, BH.widget, BH),
          AH = LH ? [LH] : null;
        for (let rH of HH.state.facet(th)) {
          let LH = rH(HH, BH.widget, BH);
          LH && (AH || (AH = [])).push(LH)
        }
        AH && this.addElement(HH, BH, AH)
      }
      finish() {
        let HH = this.gutter;
        for (; HH.elements.length > this.i;) {
          let BH = HH.elements.pop();
          HH.dom.removeChild(BH.dom), BH.destroy()
        }
      }
    }
    class Mh {
      constructor(HH, BH) {
        this.view = HH, this.config = BH, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let LH in BH.domEventHandlers) this.dom.addEventListener(LH, (AH => {
          let rH, SH = AH.target;
          if (SH != this.dom && this.dom.contains(SH)) {
            for (; SH.parentNode != this.dom;) SH = SH.parentNode;
            let HH = SH.getBoundingClientRect();
            rH = (HH.top + HH.bottom) / 2
          } else rH = AH.clientY;
          let hH = HH.lineBlockAtHeight(rH - HH.documentTop);
          BH.domEventHandlers[LH](HH, hH, AH) && AH.preventDefault()
        }));
        this.markers = uh(BH.markers(HH)), BH.initialSpacer && (this.spacer = new xh(HH, 0, 0, [BH.initialSpacer(HH)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(HH) {
        let BH = this.markers;
        if (this.markers = uh(this.config.markers(HH.view)), this.spacer && this.config.updateSpacer) {
          let BH = this.config.updateSpacer(this.spacer.markers[0], HH);
          BH != this.spacer.markers[0] && this.spacer.update(HH.view, 0, 0, [BH])
        }
        let LH = HH.view.viewport;
        return !AH.x.eq(this.markers, BH, LH.from, LH.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(HH)
      }
      destroy() {
        for (let HH of this.elements) HH.destroy()
      }
    }
    class xh {
      constructor(HH, BH, LH, AH) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(HH, BH, LH, AH)
      }
      update(HH, BH, LH, AH) {
        this.height != BH && (this.height = BH, this.dom.style.height = BH + "px"), this.above != LH && (this.dom.style.marginTop = (this.above = LH) ? LH + "px" : ""),
          function(HH, BH) {
            if (HH.length != BH.length) return !1;
            for (let LH = 0; LH < HH.length; LH++)
              if (!HH[LH].compare(BH[LH])) return !1;
            return !0
          }(this.markers, AH) || this.setMarkers(HH, AH)
      }
      setMarkers(HH, BH) {
        let LH = "cm-gutterElement",
          AH = this.dom.firstChild;
        for (let rH = 0, SH = 0;;) {
          let hH = SH,
            tH = rH < BH.length ? BH[rH++] : null,
            zH = !1;
          if (tH) {
            let HH = tH.elementClass;
            HH && (LH += " " + HH);
            for (let BH = SH; BH < this.markers.length; BH++)
              if (this.markers[BH].compare(tH)) {
                hH = BH, zH = !0;
                break
              }
          } else hH = this.markers.length;
          for (; SH < hH;) {
            let HH = this.markers[SH++];
            if (HH.toDOM) {
              HH.destroy(AH);
              let BH = AH.nextSibling;
              AH.remove(), AH = BH
            }
          }
          if (!tH) break;
          tH.toDOM && (zH ? AH = AH.nextSibling : this.dom.insertBefore(tH.toDOM(HH), AH)), zH && SH++
        }
        this.dom.className = LH, this.markers = BH
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const vh = AH.l.define(),
      Ph = AH.l.define(),
      Th = AH.l.define({
        combine: HH => (0, AH.U)(HH, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(HH, BH) {
            let LH = Object.assign({}, HH);
            for (let AH in BH) {
              let HH = LH[AH],
                rH = BH[AH];
              LH[AH] = HH ? (BH, LH, AH) => HH(BH, LH, AH) || rH(BH, LH, AH) : rH
            }
            return LH
          }
        })
      });
    class Uh extends Sh {
      constructor(HH) {
        super(), this.number = HH
      }
      eq(HH) {
        return this.number == HH.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function Vh(HH, BH) {
      return HH.state.facet(Th).formatNumber(BH, HH.state)
    }
    const Oh = Ch.compute([Th], (HH => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: HH => HH.state.facet(vh),
      lineMarker: (HH, BH, LH) => LH.some((HH => HH.toDOM)) ? null : new Uh(Vh(HH, HH.state.doc.lineAt(BH.from).number)),
      widgetMarker: (HH, BH, LH) => {
        for (let AH of HH.state.facet(Ph)) {
          let rH = AH(HH, BH, LH);
          if (rH) return rH
        }
        return null
      },
      lineMarkerChange: HH => HH.startState.facet(Th) != HH.state.facet(Th),
      initialSpacer: HH => new Uh(Vh(HH, kh(HH.state.doc.lines))),
      updateSpacer(HH, BH) {
        let LH = Vh(BH.view, kh(BH.view.state.doc.lines));
        return LH == HH.number ? HH : new Uh(LH)
      },
      domEventHandlers: HH.facet(Th).domEventHandlers,
      side: "before"
    })));

    function bh() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Th.of(HH), Gh(), Oh]
    }

    function kh(HH) {
      let BH = 9;
      for (; BH < HH;) BH = 10 * BH + 9;
      return BH
    }
    const mh = new class extends Sh {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      oh = hh.compute(["selection"], (HH => {
        let BH = [],
          LH = -1;
        for (let AH of HH.selection.rW) {
          let rH = HH.doc.lineAt(AH.head).from;
          rH > LH && (LH = rH, BH.push(mh.range(rH)))
        }
        return AH.x.of(BH)
      }));

    function Ih() {
      return oh
    }
  },
  44848: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      d: () => YH,
      f: () => hH,
      i: () => EH,
      j: () => CH,
      l: () => KH,
      o: () => eH,
      r: () => cH,
      t: () => uH
    });
    const AH = 1024;
    let rH = 0;
    class SH {
      constructor(HH, BH) {
        this.from = HH, this.to = BH
      }
    }
    class hH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = rH++, this.perNode = !!HH.perNode, this.deserialize = HH.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = HH.combine || null
      }
      add(HH) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof HH && (HH = CH.match(HH)), BH => {
          let LH = HH(BH);
          return void 0 === LH ? null : [this, LH]
        }
      }
    }
    hH.closedBy = new hH({
      deserialize: HH => HH.split(" ")
    }), hH.openedBy = new hH({
      deserialize: HH => HH.split(" ")
    }), hH.group = new hH({
      deserialize: HH => HH.split(" ")
    }), hH.isolate = new hH({
      deserialize: HH => {
        if (HH && "rtl" != HH && "ltr" != HH && "auto" != HH) throw new RangeError("Invalid value for isolate: " + HH);
        return HH || "auto"
      }
    }), hH.contextHash = new hH({
      perNode: !0
    }), hH.lookAhead = new hH({
      perNode: !0
    }), hH.mounted = new hH({
      perNode: !0
    });
    class tH {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = HH, this.overlay = BH, this.parser = LH, this.bracketed = AH
      }
      static get(HH) {
        return HH && HH.props && HH.props[hH.mounted.id]
      }
    }
    const zH = Object.create(null);
    class CH {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = HH, this.props = BH, this.id = LH, this.flags = AH
      }
      static define(HH) {
        let BH = HH.props && HH.props.length ? Object.create(null) : zH,
          LH = (HH.top ? 1 : 0) | (HH.skipped ? 2 : 0) | (HH.error ? 4 : 0) | (null == HH.name ? 8 : 0),
          AH = new CH(HH.name || "", BH, HH.id, LH);
        if (HH.props)
          for (let rH of HH.props)
            if (Array.isArray(rH) || (rH = rH(AH)), rH) {
              if (rH[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              BH[rH[0].id] = rH[1]
            } return AH
      }
      prop(HH) {
        return this.props[HH.id]
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
      is(HH) {
        if ("string" == typeof HH) {
          if (this.name == HH) return !0;
          let BH = this.prop(hH.group);
          return !!BH && BH.indexOf(HH) > -1
        }
        return this.id == HH
      }
      static match(HH) {
        let BH = Object.create(null);
        for (let LH in HH)
          for (let AH of LH.split(" ")) BH[AH] = HH[LH];
        return HH => {
          for (let LH = HH.prop(hH.group), AH = -1; AH < (LH ? LH.length : 0); AH++) {
            let rH = BH[AH < 0 ? HH.name : LH[AH]];
            if (rH) return rH
          }
        }
      }
    }
    CH.none = new CH("", Object.create(null), 0, 8);
    class EH {
      constructor(HH) {
        this.types = HH;
        for (let BH = 0; BH < HH.length; BH++)
          if (HH[BH].id != BH) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let HH = [];
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        for (let rH of this.types) {
          let BH = null;
          for (let HH of LH) {
            let LH = HH(rH);
            if (LH) {
              BH || (BH = Object.assign({}, rH.props));
              let HH = LH[1],
                AH = LH[0];
              AH.combine && AH.id in BH && (HH = AH.combine(BH[AH.id], HH)), BH[AH.id] = HH
            }
          }
          HH.push(BH ? new CH(rH.name, BH, rH.id, rH.flags) : rH)
        }
        return new EH(HH)
      }
    }
    const XH = new WeakMap,
      GH = new WeakMap;
    var YH;
    ! function(HH) {
      HH[HH.ExcludeBuffers = 1] = "ExcludeBuffers", HH[HH.IncludeAnonymous = 2] = "IncludeAnonymous", HH[HH.IgnoreMounts = 4] = "IgnoreMounts", HH[HH.IgnoreOverlays = 8] = "IgnoreOverlays", HH[HH.EnterBracketed = 16] = "EnterBracketed"
    }(YH || (YH = {}));
    class uH {
      constructor(HH, BH, LH, AH, rH) {
        if (this.type = HH, this.children = BH, this.positions = LH, this.length = AH, this.props = null, rH && rH.length) {
          this.props = Object.create(null);
          for (let [HH, BH] of rH) this.props["number" == typeof HH ? HH : HH.id] = BH
        }
      }
      toString() {
        let HH = tH.get(this);
        if (HH && !HH.overlay) return HH.tree.toString();
        let BH = "";
        for (let LH of this.children) {
          let HH = LH.toString();
          HH && (BH && (BH += ","), BH += HH)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (BH.length ? "(" + BH + ")" : "") : BH
      }
      cursor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new mH(this.topNode, HH)
      }
      cursorAt(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = XH.get(this) || this.topNode,
          AH = new mH(LH);
        return AH.moveTo(HH, BH), XH.set(this, AH._tree), AH
      }
      get topNode() {
        return new PH(this, 0, 0, null)
      }
      resolve(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = xH(XH.get(this) || this.topNode, HH, BH, !1);
        return XH.set(this, LH), LH
      }
      resolveInner(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = xH(GH.get(this) || this.topNode, HH, BH, !0);
        return GH.set(this, LH), LH
      }
      resolveStack(HH) {
        return function(HH, BH, LH) {
          let AH = HH.resolveInner(BH, LH),
            rH = null;
          for (let SH = AH instanceof PH ? AH : AH.context.parent; SH; SH = SH.parent)
            if (SH.index < 0) {
              let HH = SH.parent;
              (rH || (rH = [AH])).push(HH.resolve(BH, LH)), SH = HH
            } else {
              let HH = tH.get(SH.tree);
              if (HH && HH.overlay && HH.overlay[0].from <= BH && HH.overlay[HH.overlay.length - 1].to >= BH) {
                let hH = new PH(HH.tree, HH.overlay[0].from + SH.from, -1, SH);
                (rH || (rH = [AH])).push(xH(hH, BH, LH, !1))
              }
            } return rH ? bH(rH) : AH
        }(this, HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(HH) {
        let {
          enter: BH,
          leave: LH,
          from: AH = 0,
          to: rH = this.length
        } = HH, SH = HH.mode || 0, hH = (SH & YH.IncludeAnonymous) > 0;
        for (let tH = this.cursor(SH | YH.IncludeAnonymous);;) {
          let HH = !1;
          if (tH.from <= rH && tH.to >= AH && (!hH && tH.type.isAnonymous || !1 !== BH(tH))) {
            if (tH.firstChild()) continue;
            HH = !0
          }
          for (; HH && LH && (hH || !tH.type.isAnonymous) && LH(tH), !tH.nextSibling();) {
            if (!tH.parent()) return;
            HH = !0
          }
        }
      }
      prop(HH) {
        return HH.perNode ? this.props ? this.props[HH.id] : void 0 : this.type.prop(HH)
      }
      get propValues() {
        let HH = [];
        if (this.props)
          for (let BH in this.props) HH.push([+BH, this.props[BH]]);
        return HH
      }
      balance() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : lH(CH.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((HH, BH, LH) => new uH(this.type, HH, BH, LH, this.propValues)), HH.makeTree || ((HH, BH, LH) => new uH(CH.none, HH, BH, LH)))
      }
      static build(HH) {
        return function(HH) {
          var BH;
          let {
            buffer: LH,
            nodeSet: rH,
            maxBufferLength: SH = AH,
            reused: tH = [],
            minRepeatType: zH = rH.types.length
          } = HH, CH = Array.isArray(LH) ? new QH(LH, LH.length) : LH, EH = rH.types, XH = 0, GH = 0;

          function YH(HH, BH, LH, AH, hH, uH) {
            let {
              id: QH,
              start: VH,
              end: OH,
              size: bH
            } = CH, kH = GH, mH = XH;
            if (bH < 0) {
              if (CH.next(), -1 == bH) {
                let BH = tH[QH];
                return LH.push(BH), void AH.push(VH - HH)
              }
              if (-3 == bH) return void(XH = QH);
              if (-4 == bH) return void(GH = QH);
              throw new RangeError(`Unrecognized record size: ${bH}`)
            }
            let oH, IH, fH = EH[QH],
              KH = VH - HH;
            if (OH - VH <= SH && (IH = TH(CH.pos - BH, hH))) {
              let BH = new Uint16Array(IH.size - IH.skip),
                LH = CH.pos - IH.size,
                AH = BH.length;
              for (; CH.pos > LH;) AH = UH(IH.start, BH, AH);
              oH = new WH(BH, OH - IH.start, rH), KH = IH.start - HH
            } else {
              let HH = CH.pos - bH;
              CH.next();
              let BH = [],
                LH = [],
                AH = QH >= zH ? QH : -1,
                rH = 0,
                hH = OH;
              for (; CH.pos > HH;) AH >= 0 && CH.id == AH && CH.size >= 0 ? (CH.end <= hH - SH && (vH(BH, LH, VH, rH, CH.end, hH, AH, kH, mH), rH = BH.length, hH = CH.end), CH.next()) : uH > 2500 ? MH(VH, HH, BH, LH) : YH(VH, HH, BH, LH, AH, uH + 1);
              if (AH >= 0 && rH > 0 && rH < BH.length && vH(BH, LH, VH, rH, VH, hH, AH, kH, mH), BH.reverse(), LH.reverse(), AH > -1 && rH > 0) {
                let HH = xH(fH, mH);
                oH = lH(fH, BH, LH, 0, BH.length, 0, OH - VH, HH, HH)
              } else oH = PH(fH, BH, LH, OH - VH, kH - OH, mH)
            }
            LH.push(oH), AH.push(KH)
          }

          function MH(HH, BH, LH, AH) {
            let hH = [],
              tH = 0,
              zH = -1;
            for (; CH.pos > BH;) {
              let {
                id: HH,
                start: BH,
                end: LH,
                size: AH
              } = CH;
              if (AH > 4) CH.next();
              else {
                if (zH > -1 && BH < zH) break;
                zH < 0 && (zH = LH - SH), hH.push(HH, BH, LH), tH++, CH.next()
              }
            }
            if (tH) {
              let BH = new Uint16Array(4 * tH),
                SH = hH[hH.length - 2];
              for (let HH = hH.length - 3, LH = 0; HH >= 0; HH -= 3) BH[LH++] = hH[HH], BH[LH++] = hH[HH + 1] - SH, BH[LH++] = hH[HH + 2] - SH, BH[LH++] = LH;
              LH.push(new WH(BH, hH[2] - SH, rH)), AH.push(SH - HH)
            }
          }

          function xH(HH, BH) {
            return (LH, AH, rH) => {
              let SH, tH, zH = 0,
                CH = LH.length - 1;
              if (CH >= 0 && (SH = LH[CH]) instanceof uH) {
                if (!CH && SH.type == HH && SH.length == rH) return SH;
                (tH = SH.prop(hH.lookAhead)) && (zH = AH[CH] + SH.length + tH)
              }
              return PH(HH, LH, AH, rH, zH, BH)
            }
          }

          function vH(HH, BH, LH, AH, SH, hH, tH, zH, CH) {
            let EH = [],
              XH = [];
            for (; HH.length > AH;) EH.push(HH.pop()), XH.push(BH.pop() + LH - SH);
            HH.push(PH(rH.types[tH], EH, XH, hH - SH, zH - hH, CH)), BH.push(SH - LH)
          }

          function PH(HH, BH, LH, AH, rH, SH, tH) {
            if (SH) {
              let HH = [hH.contextHash, SH];
              tH = tH ? [HH].concat(tH) : [HH]
            }
            if (rH > 25) {
              let HH = [hH.lookAhead, rH];
              tH = tH ? [HH].concat(tH) : [HH]
            }
            return new uH(HH, BH, LH, AH, tH)
          }

          function TH(HH, BH) {
            let LH = CH.fork(),
              AH = 0,
              rH = 0,
              hH = 0,
              tH = LH.end - SH,
              EH = {
                size: 0,
                start: 0,
                skip: 0
              };
            HH: for (let SH = LH.pos - HH; LH.pos > SH;) {
              let HH = LH.size;
              if (LH.id == BH && HH >= 0) {
                EH.size = AH, EH.start = rH, EH.skip = hH, hH += 4, AH += 4, LH.next();
                continue
              }
              let CH = LH.pos - HH;
              if (HH < 0 || CH < SH || LH.start < tH) break;
              let XH = LH.id >= zH ? 4 : 0,
                GH = LH.start;
              for (LH.next(); LH.pos > CH;) {
                if (LH.size < 0) {
                  if (-3 != LH.size && -4 != LH.size) break HH;
                  XH += 4
                } else LH.id >= zH && (XH += 4);
                LH.next()
              }
              rH = GH, AH += HH, hH += XH
            }
            return (BH < 0 || AH == HH) && (EH.size = AH, EH.start = rH, EH.skip = hH), EH.size > 4 ? EH : void 0
          }

          function UH(HH, BH, LH) {
            let {
              id: AH,
              start: rH,
              end: SH,
              size: hH
            } = CH;
            if (CH.next(), hH >= 0 && AH < zH) {
              let tH = LH;
              if (hH > 4) {
                let AH = CH.pos - (hH - 4);
                for (; CH.pos > AH;) LH = UH(HH, BH, LH)
              }
              BH[--LH] = tH, BH[--LH] = SH - HH, BH[--LH] = rH - HH, BH[--LH] = AH
            } else - 3 == hH ? XH = AH : -4 == hH && (GH = AH);
            return LH
          }
          let VH = [],
            OH = [];
          for (; CH.pos > 0;) YH(HH.start || 0, HH.bufferStart || 0, VH, OH, -1, 0);
          let bH = null !== (BH = HH.length) && void 0 !== BH ? BH : VH.length ? OH[0] + VH[0].length : 0;
          return new uH(EH[HH.topID], VH.reverse(), OH.reverse(), bH)
        }(HH)
      }
    }
    uH.empty = new uH(CH.none, [], [], 0);
    class QH {
      constructor(HH, BH) {
        this.buffer = HH, this.index = BH
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
        return new QH(this.buffer, this.index)
      }
    }
    class WH {
      constructor(HH, BH, LH) {
        this.buffer = HH, this.length = BH, this.set = LH
      }
      get type() {
        return CH.none
      }
      toString() {
        let HH = [];
        for (let BH = 0; BH < this.buffer.length;) HH.push(this.childString(BH)), BH = this.buffer[BH + 3];
        return HH.join(",")
      }
      childString(HH) {
        let BH = this.buffer[HH],
          LH = this.buffer[HH + 3],
          AH = this.set.types[BH],
          rH = AH.name;
        if (/\W/.test(rH) && !AH.isError && (rH = JSON.stringify(rH)), LH == (HH += 4)) return rH;
        let SH = [];
        for (; HH < LH;) SH.push(this.childString(HH)), HH = this.buffer[HH + 3];
        return rH + "(" + SH.join(",") + ")"
      }
      findChild(HH, BH, LH, AH, rH) {
        let {
          buffer: SH
        } = this, hH = -1;
        for (let tH = HH; tH != BH && !(MH(rH, AH, SH[tH + 1], SH[tH + 2]) && (hH = tH, LH > 0)); tH = SH[tH + 3]);
        return hH
      }
      slice(HH, BH, LH) {
        let AH = this.buffer,
          rH = new Uint16Array(BH - HH),
          SH = 0;
        for (let hH = HH, tH = 0; hH < BH;) {
          rH[tH++] = AH[hH++], rH[tH++] = AH[hH++] - LH;
          let BH = rH[tH++] = AH[hH++] - LH;
          rH[tH++] = AH[hH++] - HH, SH = Math.max(SH, BH)
        }
        return new WH(rH, SH, this.set)
      }
    }

    function MH(HH, BH, LH, AH) {
      switch (HH) {
        case -2:
          return LH < BH;
        case -1:
          return AH >= BH && LH < BH;
        case 0:
          return LH < BH && AH > BH;
        case 1:
          return LH <= BH && AH > BH;
        case 2:
          return AH > BH;
        case 4:
          return !0
      }
    }

    function xH(HH, BH, LH, AH) {
      for (var rH; HH.from == HH.to || (LH < 1 ? HH.from >= BH : HH.from > BH) || (LH > -1 ? HH.to <= BH : HH.to < BH);) {
        let BH = !AH && HH instanceof PH && HH.index < 0 ? null : HH.parent;
        if (!BH) return HH;
        HH = BH
      }
      let SH = AH ? 0 : YH.IgnoreOverlays;
      if (AH)
        for (let hH = HH, tH = hH.parent; tH; hH = tH, tH = hH.parent) hH instanceof PH && hH.index < 0 && (null === (rH = tH.enter(BH, LH, SH)) || void 0 === rH ? void 0 : rH.from) != hH.from && (HH = tH);
      for (;;) {
        let AH = HH.enter(BH, LH, SH);
        if (!AH) return HH;
        HH = AH
      }
    }
    class vH {
      cursor() {
        return new mH(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(HH) {
        let BH = TH(this, HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return BH.length ? BH[0] : null
      }
      getChildren(HH) {
        return TH(this, HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(HH) {
        return xH(this, HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(HH) {
        return xH(this, HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(HH) {
        return UH(this.parent, HH)
      }
      enterUnfinishedNodesBefore(HH) {
        let BH = this.childBefore(HH),
          LH = this;
        for (; BH;) {
          let HH = BH.lastChild;
          if (!HH || HH.to != BH.to) break;
          HH.type.isError && HH.from == HH.to ? (LH = BH, BH = HH.prevSibling) : BH = HH
        }
        return LH
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class PH extends vH {
      constructor(HH, BH, LH, AH) {
        super(), this._tree = HH, this.from = BH, this.index = LH, this._parent = AH
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
      nextChild(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let SH = this;;) {
          for (let {
              children: hH,
              positions: zH
            } = SH._tree, CH = BH > 0 ? hH.length : -1; HH != CH; HH += BH) {
            let CH, EH = hH[HH],
              XH = zH[HH] + SH.from;
            if (rH & YH.EnterBracketed && EH instanceof uH && (CH = tH.get(EH)) && !CH.overlay && CH.bracketed && LH >= XH && LH <= XH + EH.length || MH(AH, LH, XH, XH + EH.length))
              if (EH instanceof WH) {
                if (rH & YH.ExcludeBuffers) continue;
                let hH = EH.findChild(0, EH.buffer.length, BH, LH - XH, AH);
                if (hH > -1) return new OH(new VH(SH, EH, HH, XH), null, hH)
              } else if (rH & YH.IncludeAnonymous || !EH.type.isAnonymous || oH(EH)) {
              let hH;
              if (!(rH & YH.IgnoreMounts) && (hH = tH.get(EH)) && !hH.overlay) return new PH(hH.tree, XH, HH, SH);
              let zH = new PH(EH, XH, HH, SH);
              return rH & YH.IncludeAnonymous || !zH.type.isAnonymous ? zH : zH.nextChild(BH < 0 ? EH.children.length - 1 : 0, BH, LH, AH, rH)
            }
          }
          if (rH & YH.IncludeAnonymous || !SH.type.isAnonymous) return null;
          if (HH = SH.index >= 0 ? SH.index + BH : BH < 0 ? -1 : SH._parent._tree.children.length, SH = SH._parent, !SH) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(HH) {
        return this.nextChild(0, 1, HH, 2)
      }
      childBefore(HH) {
        return this.nextChild(this._tree.children.length - 1, -1, HH, -2)
      }
      prop(HH) {
        return this._tree.prop(HH)
      }
      enter(HH, BH) {
        let LH, AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(AH & YH.IgnoreOverlays) && (LH = tH.get(this._tree)) && LH.overlay) {
          let rH = HH - this.from,
            SH = AH & YH.EnterBracketed && LH.bracketed;
          for (let {
              from: HH,
              to: AH
            }
            of LH.overlay)
            if ((BH > 0 || SH ? HH <= rH : HH < rH) && (BH < 0 || SH ? AH >= rH : AH > rH)) return new PH(LH.tree, LH.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, HH, BH, AH)
      }
      nextSignificantParent() {
        let HH = this;
        for (; HH.type.isAnonymous && HH._parent;) HH = HH._parent;
        return HH
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

    function TH(HH, BH, LH, AH) {
      let rH = HH.cursor(),
        SH = [];
      if (!rH.firstChild()) return SH;
      if (null != LH)
        for (let hH = !1; !hH;)
          if (hH = rH.type.is(LH), !rH.nextSibling()) return SH;
      for (;;) {
        if (null != AH && rH.type.is(AH)) return SH;
        if (rH.type.is(BH) && SH.push(rH.node), !rH.nextSibling()) return null == AH ? SH : []
      }
    }

    function UH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BH.length - 1;
      for (let AH = HH; LH >= 0; AH = AH.parent) {
        if (!AH) return !1;
        if (!AH.type.isAnonymous) {
          if (BH[LH] && BH[LH] != AH.name) return !1;
          LH--
        }
      }
      return !0
    }
    class VH {
      constructor(HH, BH, LH, AH) {
        this.parent = HH, this.buffer = BH, this.index = LH, this.start = AH
      }
    }
    class OH extends vH {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(HH, BH, LH) {
        super(), this.context = HH, this._parent = BH, this.index = LH, this.type = HH.buffer.set.types[HH.buffer.buffer[LH]]
      }
      child(HH, BH, LH) {
        let {
          buffer: AH
        } = this.context, rH = AH.findChild(this.index + 4, AH.buffer[this.index + 3], HH, BH - this.context.start, LH);
        return rH < 0 ? null : new OH(this.context, this, rH)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(HH) {
        return this.child(1, HH, 2)
      }
      childBefore(HH) {
        return this.child(-1, HH, -2)
      }
      prop(HH) {
        return this.type.prop(HH)
      }
      enter(HH, BH) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & YH.ExcludeBuffers) return null;
        let {
          buffer: LH
        } = this.context, AH = LH.findChild(this.index + 4, LH.buffer[this.index + 3], BH > 0 ? 1 : -1, HH - this.context.start, BH);
        return AH < 0 ? null : new OH(this.context, this, AH)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(HH) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + HH, HH, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: HH
        } = this.context, BH = HH.buffer[this.index + 3];
        return BH < (this._parent ? HH.buffer[this._parent.index + 3] : HH.buffer.length) ? new OH(this.context, this._parent, BH) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: HH
        } = this.context, BH = this._parent ? this._parent.index + 4 : 0;
        return this.index == BH ? this.externalSibling(-1) : new OH(this.context, this._parent, HH.findChild(BH, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let HH = [],
          BH = [],
          {
            buffer: LH
          } = this.context,
          AH = this.index + 4,
          rH = LH.buffer[this.index + 3];
        if (rH > AH) {
          let SH = LH.buffer[this.index + 1];
          HH.push(LH.slice(AH, rH, SH)), BH.push(0)
        }
        return new uH(this.type, HH, BH, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function bH(HH) {
      if (!HH.length) return null;
      let BH = 0,
        LH = HH[0];
      for (let SH = 1; SH < HH.length; SH++) {
        let AH = HH[SH];
        (AH.from > LH.from || AH.to < LH.to) && (LH = AH, BH = SH)
      }
      let AH = LH instanceof PH && LH.index < 0 ? null : LH.parent,
        rH = HH.slice();
      return AH ? rH[BH] = AH : rH.splice(BH, 1), new kH(rH, LH)
    }
    class kH {
      constructor(HH, BH) {
        this.heads = HH, this.node = BH
      }
      get next() {
        return bH(this.heads)
      }
    }
    class mH {
      get name() {
        return this.type.name
      }
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = BH & ~YH.EnterBracketed, HH instanceof PH) this.yieldNode(HH);
        else {
          this._tree = HH.context.parent, this.buffer = HH.context;
          for (let BH = HH._parent; BH; BH = BH._parent) this.stack.unshift(BH.index);
          this.bufferNode = HH, this.yieldBuf(HH.index)
        }
      }
      yieldNode(HH) {
        return !!HH && (this._tree = HH, this.type = HH.type, this.from = HH.from, this.to = HH.to, !0)
      }
      yieldBuf(HH, BH) {
        this.index = HH;
        let {
          start: LH,
          buffer: AH
        } = this.buffer;
        return this.type = BH || AH.set.types[AH.buffer[HH]], this.from = LH + AH.buffer[HH + 1], this.to = LH + AH.buffer[HH + 2], !0
      }
      yield(HH) {
        return !!HH && (HH instanceof PH ? (this.buffer = null, this.yieldNode(HH)) : (this.buffer = HH.context, this.yieldBuf(HH.index, HH.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(HH, BH, LH) {
        if (!this.buffer) return this.yield(this._tree.nextChild(HH < 0 ? this._tree._tree.children.length - 1 : 0, HH, BH, LH, this.mode));
        let {
          buffer: AH
        } = this.buffer, rH = AH.findChild(this.index + 4, AH.buffer[this.index + 3], HH, BH - this.buffer.start, LH);
        return !(rH < 0) && (this.stack.push(this.index), this.yieldBuf(rH))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(HH) {
        return this.enterChild(1, HH, 2)
      }
      childBefore(HH) {
        return this.enterChild(-1, HH, -2)
      }
      enter(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(LH & YH.ExcludeBuffers) && this.enterChild(1, HH, BH) : this.yield(this._tree.enter(HH, BH, LH))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & YH.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let HH = this.mode & YH.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(HH)
      }
      sibling(HH) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + HH, HH, 0, 4, this.mode));
        let {
          buffer: BH
        } = this.buffer, LH = this.stack.length - 1;
        if (HH < 0) {
          let HH = LH < 0 ? 0 : this.stack[LH] + 4;
          if (this.index != HH) return this.yieldBuf(BH.findChild(HH, this.index, -1, 0, 4))
        } else {
          let HH = BH.buffer[this.index + 3];
          if (HH < (LH < 0 ? BH.buffer.length : BH.buffer[this.stack[LH] + 3])) return this.yieldBuf(HH)
        }
        return LH < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + HH, HH, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(HH) {
        let BH, LH, {
          buffer: AH
        } = this;
        if (AH) {
          if (HH > 0) {
            if (this.index < AH.buffer.buffer.length) return !1
          } else
            for (let HH = 0; HH < this.index; HH++)
              if (AH.buffer.buffer[HH + 3] < this.index) return !1;
          ({
            index: BH,
            parent: LH
          } = AH)
        } else({
          index: BH,
          _parent: LH
        } = this._tree);
        for (; LH;
          ({
            index: BH,
            _parent: LH
          } = LH))
          if (BH > -1)
            for (let AH = BH + HH, rH = HH < 0 ? -1 : LH._tree.children.length; AH != rH; AH += HH) {
              let HH = LH._tree.children[AH];
              if (this.mode & YH.IncludeAnonymous || HH instanceof WH || !HH.type.isAnonymous || oH(HH)) return !1
            }
        return !0
      }
      move(HH, BH) {
        if (BH && this.enterChild(HH, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(HH)) return !0;
          if (this.atLastNode(HH) || !this.parent()) return !1
        }
      }
      next() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, HH)
      }
      prev() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, HH)
      }
      moveTo(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (BH < 1 ? this.from >= HH : this.from > HH) || (BH > -1 ? this.to <= HH : this.to < HH)) && this.parent(););
        for (; this.enterChild(1, HH, BH););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let HH = this.bufferNode,
          BH = null,
          LH = 0;
        if (HH && HH.context == this.buffer) HH: for (let AH = this.index, rH = this.stack.length; rH >= 0;) {
          for (let SH = HH; SH; SH = SH._parent)
            if (SH.index == AH) {
              if (AH == this.index) return SH;
              BH = SH, LH = rH + 1;
              break HH
            } AH = this.stack[--rH]
        }
        for (let AH = LH; AH < this.stack.length; AH++) BH = new OH(this.buffer, BH, this.stack[AH]);
        return this.bufferNode = new OH(this.buffer, BH, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(HH, BH) {
        for (let LH = 0;;) {
          let AH = !1;
          if (this.type.isAnonymous || !1 !== HH(this)) {
            if (this.firstChild()) {
              LH++;
              continue
            }
            this.type.isAnonymous || (AH = !0)
          }
          for (;;) {
            if (AH && BH && BH(this), AH = this.type.isAnonymous, !LH) return;
            if (this.nextSibling()) break;
            this.parent(), LH--, AH = !0
          }
        }
      }
      matchContext(HH) {
        if (!this.buffer) return UH(this.node.parent, HH);
        let {
          buffer: BH
        } = this.buffer, {
          types: LH
        } = BH.set;
        for (let AH = HH.length - 1, rH = this.stack.length - 1; AH >= 0; rH--) {
          if (rH < 0) return UH(this._tree, HH, AH);
          let SH = LH[BH.buffer[this.stack[rH]]];
          if (!SH.isAnonymous) {
            if (HH[AH] && HH[AH] != SH.name) return !1;
            AH--
          }
        }
        return !0
      }
    }

    function oH(HH) {
      return HH.children.some((HH => HH instanceof WH || !HH.type.isAnonymous || oH(HH)))
    }
    const IH = new WeakMap;

    function fH(HH, BH) {
      if (!HH.isAnonymous || BH instanceof WH || BH.type != HH) return 1;
      let LH = IH.get(BH);
      if (null == LH) {
        LH = 1;
        for (let AH of BH.children) {
          if (AH.type != HH || !(AH instanceof uH)) {
            LH = 1;
            break
          }
          LH += fH(HH, AH)
        }
        IH.set(BH, LH)
      }
      return LH
    }

    function lH(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
      let CH = 0;
      for (let YH = AH; YH < rH; YH++) CH += fH(HH, BH[YH]);
      let EH = Math.ceil(1.5 * CH / 8),
        XH = [],
        GH = [];
      return function BH(LH, AH, rH, hH, tH) {
        for (let CH = rH; CH < hH;) {
          let rH = CH,
            YH = AH[CH],
            uH = fH(HH, LH[CH]);
          for (CH++; CH < hH; CH++) {
            let BH = fH(HH, LH[CH]);
            if (uH + BH >= EH) break;
            uH += BH
          }
          if (CH == rH + 1) {
            if (uH > EH) {
              let HH = LH[rH];
              BH(HH.children, HH.positions, 0, HH.children.length, AH[rH] + tH);
              continue
            }
            XH.push(LH[rH])
          } else {
            let BH = AH[CH - 1] + LH[CH - 1].length - YH;
            XH.push(lH(HH, LH, AH, rH, CH, YH, BH, null, zH))
          }
          GH.push(YH + tH - SH)
        }
      }(BH, LH, AH, rH, 0), (tH || zH)(XH, GH, hH)
    }
    class KH {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(HH, BH, LH) {
        let AH = this.map.get(HH);
        AH || this.map.set(HH, AH = new Map), AH.set(BH, LH)
      }
      getBuffer(HH, BH) {
        let LH = this.map.get(HH);
        return LH && LH.get(BH)
      }
      set(HH, BH) {
        HH instanceof OH ? this.setBuffer(HH.context.buffer, HH.index, BH) : HH instanceof PH && this.map.set(HH.tree, BH)
      }
      get(HH) {
        return HH instanceof OH ? this.getBuffer(HH.context.buffer, HH.index) : HH instanceof PH ? this.map.get(HH.tree) : void 0
      }
      cursorSet(HH, BH) {
        HH.buffer ? this.setBuffer(HH.buffer.buffer, HH.index, BH) : this.map.set(HH.tree, BH)
      }
      cursorGet(HH) {
        return HH.buffer ? this.getBuffer(HH.buffer.buffer, HH.index) : this.map.get(HH.tree)
      }
    }
    class cH {
      constructor(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = HH, this.to = BH, this.tree = LH, this.offset = AH, this.open = (rH ? 1 : 0) | (SH ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = [new cH(0, HH.length, HH, 0, !1, LH)];
        for (let rH of BH) rH.to > HH.length && AH.push(rH);
        return AH
      }
      static applyChanges(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!BH.length) return HH;
        let AH = [],
          rH = 1,
          SH = HH.length ? HH[0] : null;
        for (let hH = 0, tH = 0, zH = 0;; hH++) {
          let CH = hH < BH.length ? BH[hH] : null,
            EH = CH ? CH.fromA : 1e9;
          if (EH - tH >= LH)
            for (; SH && SH.from < EH;) {
              let BH = SH;
              if (tH >= BH.from || EH <= BH.to || zH) {
                let HH = Math.max(BH.from, tH) - zH,
                  LH = Math.min(BH.to, EH) - zH;
                BH = HH >= LH ? null : new cH(HH, LH, BH.tree, BH.offset + zH, hH > 0, !!CH)
              }
              if (BH && AH.push(BH), SH.to > EH) break;
              SH = rH < HH.length ? HH[rH++] : null
            }
          if (!CH) break;
          tH = CH.toA, zH = CH.toA - CH.toB
        }
        return AH
      }
    }
    class eH {
      startParse(HH, BH, LH) {
        return "string" == typeof HH && (HH = new qH(HH)), LH = LH ? LH.length ? LH.map((HH => new SH(HH.from, HH.to))) : [new SH(0, 0)] : [new SH(0, HH.length)], this.createParse(HH, BH || [], LH)
      }
      parse(HH, BH, LH) {
        let AH = this.startParse(HH, BH, LH);
        for (;;) {
          let HH = AH.advance();
          if (HH) return HH
        }
      }
    }
    class qH {
      constructor(HH) {
        this.string = HH
      }
      get length() {
        return this.string.length
      }
      chunk(HH) {
        return this.string.slice(HH)
      }
      get lineChunks() {
        return !1
      }
      read(HH, BH) {
        return this.string.slice(HH, BH)
      }
    }
    new hH({
      perNode: !0
    })
  },
  44851: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => GH,
      d: () => zH,
      g: () => XH,
      j: () => IH
    });
    var AH = LH(44848);
    let rH = 0;
    class SH {
      constructor(HH, BH, LH, AH) {
        this.name = HH, this.set = BH, this.base = LH, this.modified = AH, this.id = rH++
      }
      toString() {
        let {
          name: HH
        } = this;
        for (let BH of this.modified) BH.name && (HH = `${BH.name}(${HH})`);
        return HH
      }
      static define(HH, BH) {
        let LH = "string" == typeof HH ? HH : "?";
        if (HH instanceof SH && (BH = HH), null === BH || void 0 === BH ? void 0 : BH.base) throw new Error("Can not derive from a modified tag");
        let AH = new SH(LH, [], null, []);
        if (AH.set.push(AH), BH)
          for (let rH of BH.set) AH.set.push(rH);
        return AH
      }
      static defineModifier(HH) {
        let BH = new tH(HH);
        return HH => HH.modified.indexOf(BH) > -1 ? HH : tH.get(HH.base || HH, HH.modified.concat(BH).sort(((HH, BH) => HH.id - BH.id)))
      }
    }
    let hH = 0;
    class tH {
      constructor(HH) {
        this.name = HH, this.instances = [], this.id = hH++
      }
      static get(HH, BH) {
        if (!BH.length) return HH;
        let LH = BH[0].instances.find((LH => {
          return LH.base == HH && (AH = BH, rH = LH.modified, AH.length == rH.length && AH.every(((HH, BH) => HH == rH[BH])));
          var AH, rH
        }));
        if (LH) return LH;
        let AH = [],
          rH = new SH(HH.name, AH, HH, BH);
        for (let SH of BH) SH.instances.push(rH);
        let hH = function(HH) {
          let BH = [
            []
          ];
          for (let LH = 0; LH < HH.length; LH++)
            for (let AH = 0, rH = BH.length; AH < rH; AH++) BH.push(BH[AH].concat(HH[LH]));
          return BH.sort(((HH, BH) => BH.length - HH.length))
        }(BH);
        for (let SH of HH.set)
          if (!SH.modified.length)
            for (let HH of hH) AH.push(tH.get(SH, HH));
        return rH
      }
    }

    function zH(HH) {
      let BH = Object.create(null);
      for (let LH in HH) {
        let AH = HH[LH];
        Array.isArray(AH) || (AH = [AH]);
        for (let HH of LH.split(" "))
          if (HH) {
            let LH = [],
              rH = 2,
              SH = HH;
            for (let BH = 0;;) {
              if ("..." == SH && BH > 0 && BH + 3 == HH.length) {
                rH = 1;
                break
              }
              let AH = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(SH);
              if (!AH) throw new RangeError("Invalid path: " + HH);
              if (LH.push("*" == AH[0] ? "" : '"' == AH[0][0] ? JSON.parse(AH[0]) : AH[0]), BH += AH[0].length, BH == HH.length) break;
              let hH = HH[BH++];
              if (BH == HH.length && "!" == hH) {
                rH = 0;
                break
              }
              if ("/" != hH) throw new RangeError("Invalid path: " + HH);
              SH = HH.slice(BH)
            }
            let hH = LH.length - 1,
              tH = LH[hH];
            if (!tH) throw new RangeError("Invalid path: " + HH);
            let zH = new EH(AH, rH, hH > 0 ? LH.slice(0, hH) : null);
            BH[tH] = zH.sort(BH[tH])
          }
      }
      return CH.add(BH)
    }
    const CH = new AH.f({
      combine(HH, BH) {
        let LH, AH, rH;
        for (; HH || BH;) {
          if (!HH || BH && HH.depth >= BH.depth ? (rH = BH, BH = BH.next) : (rH = HH, HH = HH.next), LH && LH.mode == rH.mode && !rH.context && !LH.context) continue;
          let SH = new EH(rH.tags, rH.mode, rH.context);
          LH ? LH.next = SH : AH = SH, LH = SH
        }
        return AH
      }
    });
    class EH {
      constructor(HH, BH, LH, AH) {
        this.tags = HH, this.mode = BH, this.context = LH, this.next = AH
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(HH) {
        return !HH || HH.depth < this.depth ? (this.next = HH, this) : (HH.next = this.sort(HH.next), HH)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function XH(HH, BH) {
      let LH = Object.create(null);
      for (let SH of HH)
        if (Array.isArray(SH.tag))
          for (let HH of SH.tag) LH[HH.id] = SH.class;
        else LH[SH.tag.id] = SH.class;
      let {
        scope: AH,
        all: rH = null
      } = BH || {};
      return {
        style: HH => {
          let BH = rH;
          for (let AH of HH)
            for (let HH of AH.set) {
              let AH = LH[HH.id];
              if (AH) {
                BH = BH ? BH + " " + AH : AH;
                break
              }
            }
          return BH
        },
        scope: AH
      }
    }

    function GH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : HH.length,
        SH = new YH(AH, Array.isArray(BH) ? BH : [BH], LH);
      SH.highlightRange(HH.cursor(), AH, rH, "", SH.highlighters), SH.flush(rH)
    }
    EH.empty = new EH([], 2, null);
    class YH {
      constructor(HH, BH, LH) {
        this.at = HH, this.highlighters = BH, this.span = LH, this.class = ""
      }
      startSpan(HH, BH) {
        BH != this.class && (this.flush(HH), HH > this.at && (this.at = HH), this.class = BH)
      }
      flush(HH) {
        HH > this.at && this.class && this.span(this.at, HH, this.class)
      }
      highlightRange(HH, BH, LH, rH, SH) {
        let {
          type: hH,
          from: tH,
          to: zH
        } = HH;
        if (tH >= LH || zH <= BH) return;
        hH.isTop && (SH = this.highlighters.filter((HH => !HH.scope || HH.scope(hH))));
        let XH = rH,
          GH = function(HH) {
            let BH = HH.type.prop(CH);
            for (; BH && BH.context && !HH.matchContext(BH.context);) BH = BH.next;
            return BH || null
          }(HH) || EH.empty,
          YH = function(HH, BH) {
            let LH = null;
            for (let AH of HH) {
              let HH = AH.style(BH);
              HH && (LH = LH ? LH + " " + HH : HH)
            }
            return LH
          }(SH, GH.tags);
        if (YH && (XH && (XH += " "), XH += YH, 1 == GH.mode && (rH += (rH ? " " : "") + YH)), this.startSpan(Math.max(BH, tH), XH), GH.opaque) return;
        let uH = HH.tree && HH.tree.prop(AH.f.mounted);
        if (uH && uH.overlay) {
          let AH = HH.node.enter(uH.overlay[0].from + tH, 1),
            hH = this.highlighters.filter((HH => !HH.scope || HH.scope(uH.tree.type))),
            CH = HH.firstChild();
          for (let EH = 0, GH = tH;; EH++) {
            let YH = EH < uH.overlay.length ? uH.overlay[EH] : null,
              QH = YH ? YH.from + tH : zH,
              WH = Math.max(BH, GH),
              MH = Math.min(LH, QH);
            if (WH < MH && CH)
              for (; HH.from < MH && (this.highlightRange(HH, WH, MH, rH, SH), this.startSpan(Math.min(MH, HH.to), XH), !(HH.to >= QH) && HH.nextSibling()););
            if (!YH || QH > LH) break;
            GH = YH.to + tH, GH > BH && (this.highlightRange(AH.cursor(), Math.max(BH, YH.from + tH), Math.min(LH, GH), "", hH), this.startSpan(Math.min(LH, GH), XH))
          }
          CH && HH.parent()
        } else if (HH.firstChild()) {
          uH && (rH = "");
          do {
            if (!(HH.to <= BH)) {
              if (HH.from >= LH) break;
              this.highlightRange(HH, BH, LH, rH, SH), this.startSpan(Math.min(LH, HH.to), XH)
            }
          } while (HH.nextSibling());
          HH.parent()
        }
      }
    }
    const uH = SH.define,
      QH = uH(),
      WH = uH(),
      MH = uH(WH),
      xH = uH(WH),
      vH = uH(),
      PH = uH(vH),
      TH = uH(vH),
      UH = uH(),
      VH = uH(UH),
      OH = uH(),
      bH = uH(),
      kH = uH(),
      mH = uH(kH),
      oH = uH(),
      IH = {
        comment: QH,
        lineComment: uH(QH),
        blockComment: uH(QH),
        docComment: uH(QH),
        name: WH,
        variableName: uH(WH),
        typeName: MH,
        tagName: uH(MH),
        propertyName: xH,
        attributeName: uH(xH),
        className: uH(WH),
        labelName: uH(WH),
        namespace: uH(WH),
        macroName: uH(WH),
        literal: vH,
        string: PH,
        docString: uH(PH),
        character: uH(PH),
        attributeValue: uH(PH),
        number: TH,
        integer: uH(TH),
        float: uH(TH),
        bool: uH(vH),
        regexp: uH(vH),
        escape: uH(vH),
        color: uH(vH),
        url: uH(vH),
        keyword: OH,
        self: uH(OH),
        null: uH(OH),
        atom: uH(OH),
        unit: uH(OH),
        modifier: uH(OH),
        operatorKeyword: uH(OH),
        controlKeyword: uH(OH),
        definitionKeyword: uH(OH),
        moduleKeyword: uH(OH),
        operator: bH,
        derefOperator: uH(bH),
        arithmeticOperator: uH(bH),
        logicOperator: uH(bH),
        bitwiseOperator: uH(bH),
        compareOperator: uH(bH),
        updateOperator: uH(bH),
        definitionOperator: uH(bH),
        typeOperator: uH(bH),
        controlOperator: uH(bH),
        punctuation: kH,
        separator: uH(kH),
        bracket: mH,
        angleBracket: uH(mH),
        squareBracket: uH(mH),
        paren: uH(mH),
        brace: uH(mH),
        content: UH,
        heading: VH,
        heading1: uH(VH),
        heading2: uH(VH),
        heading3: uH(VH),
        heading4: uH(VH),
        heading5: uH(VH),
        heading6: uH(VH),
        contentSeparator: uH(UH),
        list: uH(UH),
        quote: uH(UH),
        emphasis: uH(UH),
        strong: uH(UH),
        link: uH(UH),
        monospace: uH(UH),
        strikethrough: uH(UH),
        inserted: uH(),
        deleted: uH(),
        changed: uH(),
        invalid: uH(),
        meta: oH,
        documentMeta: uH(oH),
        annotation: uH(oH),
        processingInstruction: uH(oH),
        definition: SH.defineModifier("definition"),
        constant: SH.defineModifier("constant"),
        function: SH.defineModifier("function"),
        standard: SH.defineModifier("standard"),
        local: SH.defineModifier("local"),
        special: SH.defineModifier("special")
      };
    for (let fH in IH) {
      let HH = IH[fH];
      HH instanceof SH && (HH.name = fH)
    }
    XH([{
      tag: IH.link,
      class: "tok-link"
    }, {
      tag: IH.heading,
      class: "tok-heading"
    }, {
      tag: IH.emphasis,
      class: "tok-emphasis"
    }, {
      tag: IH.strong,
      class: "tok-strong"
    }, {
      tag: IH.keyword,
      class: "tok-keyword"
    }, {
      tag: IH.atom,
      class: "tok-atom"
    }, {
      tag: IH.bool,
      class: "tok-bool"
    }, {
      tag: IH.url,
      class: "tok-url"
    }, {
      tag: IH.labelName,
      class: "tok-labelName"
    }, {
      tag: IH.inserted,
      class: "tok-inserted"
    }, {
      tag: IH.deleted,
      class: "tok-deleted"
    }, {
      tag: IH.literal,
      class: "tok-literal"
    }, {
      tag: IH.string,
      class: "tok-string"
    }, {
      tag: IH.number,
      class: "tok-number"
    }, {
      tag: [IH.regexp, IH.escape, IH.special(IH.string)],
      class: "tok-string2"
    }, {
      tag: IH.variableName,
      class: "tok-variableName"
    }, {
      tag: IH.local(IH.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: IH.definition(IH.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: IH.special(IH.variableName),
      class: "tok-variableName2"
    }, {
      tag: IH.definition(IH.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: IH.typeName,
      class: "tok-typeName"
    }, {
      tag: IH.namespace,
      class: "tok-namespace"
    }, {
      tag: IH.className,
      class: "tok-className"
    }, {
      tag: IH.macroName,
      class: "tok-macroName"
    }, {
      tag: IH.propertyName,
      class: "tok-propertyName"
    }, {
      tag: IH.operator,
      class: "tok-operator"
    }, {
      tag: IH.comment,
      class: "tok-comment"
    }, {
      tag: IH.meta,
      class: "tok-meta"
    }, {
      tag: IH.invalid,
      class: "tok-invalid"
    }, {
      tag: IH.punctuation,
      class: "tok-punctuation"
    }])
  },
  44856: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH.h,
      g: () => hH.p,
      k: () => hH.B,
      l: () => hH.E,
      n: () => tH.p,
      o: () => VL,
      q: () => tH.U,
      t: () => tH.pb
    });
    var AH = LH(1379),
      rH = LH(1375),
      SH = LH(45),
      hH = LH(44818),
      tH = LH(44823),
      zH = LH(44839),
      CH = LH(44848);

    function EH(HH, BH) {
      return LH => {
        let {
          state: AH,
          dispatch: rH
        } = LH;
        if (AH.readOnly) return !1;
        let SH = HH(BH, AH);
        return !!SH && (rH(AH.update(SH)), !0)
      }
    }
    const XH = EH(MH, 0),
      GH = EH(WH, 0),
      YH = EH(((HH, BH) => WH(HH, BH, function(HH) {
        let BH = [];
        for (let LH of HH.selection.rW) {
          let AH = HH.doc.lineAt(LH.from),
            rH = LH.to <= AH.to ? AH : HH.doc.lineAt(LH.to);
          rH.from > AH.from && rH.from == LH.to && (rH = LH.to == AH.to + 1 ? AH : HH.doc.lineAt(LH.to - 1));
          let SH = BH.length - 1;
          SH >= 0 && BH[SH].to > AH.from ? BH[SH].to = rH.to : BH.push({
            from: AH.from + /^\s*/.exec(AH.text)[0].length,
            to: rH.to
          })
        }
        return BH
      }(BH))), 0);

    function uH(HH, BH) {
      let LH = HH.languageDataAt("commentTokens", BH, 1);
      return LH.length ? LH[0] : {}
    }
    const QH = 50;

    function WH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BH.selection.rW,
        AH = LH.map((HH => uH(BH, HH.from).block));
      if (!AH.every((HH => HH))) return null;
      let rH = LH.map(((HH, LH) => function(HH, BH, LH, AH) {
        let rH, SH, {
            open: hH,
            close: tH
          } = BH,
          zH = HH.sliceDoc(LH - QH, LH),
          CH = HH.sliceDoc(AH, AH + QH),
          EH = /\s*$/.exec(zH)[0].length,
          XH = /^\s*/.exec(CH)[0].length,
          GH = zH.length - EH;
        if (zH.slice(GH - hH.length, GH) == hH && CH.slice(XH, XH + tH.length) == tH) return {
          open: {
            pos: LH - EH,
            margin: EH && 1
          },
          close: {
            pos: AH + XH,
            margin: XH && 1
          }
        };
        AH - LH <= 2 * QH ? rH = SH = HH.sliceDoc(LH, AH) : (rH = HH.sliceDoc(LH, LH + QH), SH = HH.sliceDoc(AH - QH, AH));
        let YH = /^\s*/.exec(rH)[0].length,
          uH = /\s*$/.exec(SH)[0].length,
          WH = SH.length - uH - tH.length;
        return rH.slice(YH, YH + hH.length) == hH && SH.slice(WH, WH + tH.length) == tH ? {
          open: {
            pos: LH + YH + hH.length,
            margin: /\s/.test(rH.charAt(YH + hH.length)) ? 1 : 0
          },
          close: {
            pos: AH - uH - tH.length,
            margin: /\s/.test(SH.charAt(WH - 1)) ? 1 : 0
          }
        } : null
      }(BH, AH[LH], HH.from, HH.to)));
      if (2 != HH && !rH.every((HH => HH))) return {
        changes: BH.changes(LH.map(((HH, BH) => rH[BH] ? [] : [{
          from: HH.from,
          insert: AH[BH].open + " "
        }, {
          from: HH.to,
          insert: " " + AH[BH].close
        }])))
      };
      if (1 != HH && rH.some((HH => HH))) {
        let HH = [];
        for (let BH, LH = 0; LH < rH.length; LH++)
          if (BH = rH[LH]) {
            let rH = AH[LH],
              {
                open: SH,
                close: hH
              } = BH;
            HH.push({
              from: SH.pos - rH.open.length,
              to: SH.pos + SH.margin
            }, {
              from: hH.pos - hH.margin,
              to: hH.pos + rH.close.length
            })
          } return {
          changes: HH
        }
      }
      return null
    }

    function MH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BH.selection.rW,
        AH = [],
        rH = -1;
      HH: for (let {
          from: SH,
          to: hH
        }
        of LH) {
        let HH, LH = AH.length,
          tH = 1e9;
        for (let zH = SH; zH <= hH;) {
          let LH = BH.doc.lineAt(zH);
          if (void 0 == HH && (HH = uH(BH, LH.from).line, !HH)) continue HH;
          if (LH.from > rH && (SH == hH || hH > LH.from)) {
            rH = LH.from;
            let BH = /^\s*/.exec(LH.text)[0].length,
              SH = BH == LH.length,
              hH = LH.text.slice(BH, BH + HH.length) == HH ? BH : -1;
            BH < LH.text.length && BH < tH && (tH = BH), AH.push({
              line: LH,
              comment: hH,
              token: HH,
              indent: BH,
              empty: SH,
              single: !1
            })
          }
          zH = LH.to + 1
        }
        if (tH < 1e9)
          for (let BH = LH; BH < AH.length; BH++) AH[BH].indent < AH[BH].line.text.length && (AH[BH].indent = tH);
        AH.length == LH + 1 && (AH[LH].single = !0)
      }
      if (2 != HH && AH.some((HH => HH.comment < 0 && (!HH.empty || HH.single)))) {
        let HH = [];
        for (let {
            line: BH,
            token: rH,
            indent: SH,
            empty: hH,
            single: tH
          }
          of AH) !tH && hH || HH.push({
          from: BH.from + SH,
          insert: rH + " "
        });
        let LH = BH.changes(HH);
        return {
          changes: LH,
          selection: BH.selection.map(LH, 1)
        }
      }
      if (1 != HH && AH.some((HH => HH.comment >= 0))) {
        let HH = [];
        for (let {
            line: BH,
            comment: LH,
            token: rH
          }
          of AH)
          if (LH >= 0) {
            let AH = BH.from + LH,
              SH = AH + rH.length;
            " " == BH.text[SH - BH.from] && SH++, HH.push({
              from: AH,
              to: SH
            })
          } return {
          changes: HH
        }
      }
      return null
    }
    const xH = hH.c.define(),
      vH = hH.c.define(),
      PH = hH.l.define(),
      TH = hH.l.define({
        combine: HH => (0, hH.U)(HH, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (HH, BH) => BH
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (HH, BH) => (LH, AH) => HH(LH, AH) || BH(LH, AH)
        })
      }),
      UH = hH.E.define({
        create: () => RH.empty,
        update(HH, BH) {
          let LH = BH.state.facet(TH),
            AH = BH.annotation(xH);
          if (AH) {
            let rH = oH.fromTransaction(BH, AH.selection),
              SH = AH.side,
              hH = 0 == SH ? HH.undone : HH.done;
            return hH = rH ? IH(hH, hH.length, LH.minDepth, rH) : cH(hH, BH.startState.selection), new RH(0 == SH ? AH.rest : hH, 0 == SH ? hH : AH.rest)
          }
          let rH = BH.annotation(vH);
          if ("full" != rH && "before" != rH || (HH = HH.isolate()), !1 === BH.annotation(hH.J.addToHistory)) return BH.changes.empty ? HH : HH.addMapping(BH.changes.desc);
          let SH = oH.fromTransaction(BH),
            tH = BH.annotation(hH.J.time),
            zH = BH.annotation(hH.J.userEvent);
          return SH ? HH = HH.addChanges(SH, tH, zH, LH, BH) : BH.selection && (HH = HH.addSelection(BH.startState.selection, tH, zH, LH.newGroupDelay)), "full" != rH && "after" != rH || (HH = HH.isolate()), HH
        },
        toJSON: HH => ({
          done: HH.done.map((HH => HH.toJSON())),
          undone: HH.undone.map((HH => HH.toJSON()))
        }),
        fromJSON: HH => new RH(HH.done.map(oH.fromJSON), HH.undone.map(oH.fromJSON))
      });

    function VH(HH, BH) {
      return function(LH) {
        let {
          state: AH,
          dispatch: rH
        } = LH;
        if (!BH && AH.readOnly) return !1;
        let SH = AH.field(UH, !1);
        if (!SH) return !1;
        let hH = SH.pop(HH, AH, BH);
        return !!hH && (rH(hH), !0)
      }
    }
    const OH = VH(0, !1),
      bH = VH(1, !1),
      kH = VH(0, !0),
      mH = VH(1, !0);
    class oH {
      constructor(HH, BH, LH, AH, rH) {
        this.changes = HH, this.effects = BH, this.mapped = LH, this.startSelection = AH, this.selectionsAfter = rH
      }
      setSelAfter(HH) {
        return new oH(this.changes, this.effects, this.mapped, this.startSelection, HH)
      }
      toJSON() {
        var HH, BH, LH;
        return {
          changes: null === (HH = this.changes) || void 0 === HH ? void 0 : HH.toJSON(),
          mapped: null === (BH = this.mapped) || void 0 === BH ? void 0 : BH.toJSON(),
          startSelection: null === (LH = this.startSelection) || void 0 === LH ? void 0 : LH.toJSON(),
          selectionsAfter: this.selectionsAfter.map((HH => HH.toJSON()))
        }
      }
      static fromJSON(HH) {
        return new oH(HH.changes && hH.ChangeSet.fromJSON(HH.changes), [], HH.mapped && hH.d.fromJSON(HH.mapped), HH.startSelection && hH.i.fromJSON(HH.startSelection), HH.selectionsAfter.map(hH.i.fromJSON))
      }
      static fromTransaction(HH, BH) {
        let LH = lH;
        for (let AH of HH.startState.facet(PH)) {
          let BH = AH(HH);
          BH.length && (LH = LH.concat(BH))
        }
        return !LH.length && HH.changes.empty ? null : new oH(HH.changes.invert(HH.startState.doc), LH, void 0, BH || HH.startState.selection, lH)
      }
      static selection(HH) {
        return new oH(void 0, lH, void 0, void 0, HH)
      }
    }

    function IH(HH, BH, LH, AH) {
      let rH = BH + 1 > LH + 20 ? BH - LH - 1 : 0,
        SH = HH.slice(rH, BH);
      return SH.push(AH), SH
    }

    function fH(HH, BH) {
      return HH.length ? BH.length ? HH.concat(BH) : HH : BH
    }
    const lH = [],
      KH = 200;

    function cH(HH, BH) {
      if (HH.length) {
        let LH = HH[HH.length - 1],
          AH = LH.selectionsAfter.slice(Math.max(0, LH.selectionsAfter.length - KH));
        return AH.length && AH[AH.length - 1].eq(BH) ? HH : (AH.push(BH), IH(HH, HH.length - 1, 1e9, LH.setSelAfter(AH)))
      }
      return [oH.selection([BH])]
    }

    function eH(HH) {
      let BH = HH[HH.length - 1],
        LH = HH.slice();
      return LH[HH.length - 1] = BH.setSelAfter(BH.selectionsAfter.slice(0, BH.selectionsAfter.length - 1)), LH
    }

    function qH(HH, BH) {
      if (!HH.length) return HH;
      let LH = HH.length,
        AH = lH;
      for (; LH;) {
        let rH = gH(HH[LH - 1], BH, AH);
        if (rH.changes && !rH.changes.empty || rH.effects.length) {
          let BH = HH.slice(0, LH);
          return BH[LH - 1] = rH, BH
        }
        BH = rH.mapped, LH--, AH = rH.selectionsAfter
      }
      return AH.length ? [oH.selection(AH)] : lH
    }

    function gH(HH, BH, LH) {
      let AH = fH(HH.selectionsAfter.length ? HH.selectionsAfter.map((HH => HH.map(BH))) : lH, LH);
      if (!HH.changes) return oH.selection(AH);
      let rH = HH.changes.map(BH),
        SH = BH.mapDesc(HH.changes, !0),
        tH = HH.mapped ? HH.mapped.composeDesc(SH) : SH;
      return new oH(rH, hH.B.mapEffects(HH.effects, BH), tH, HH.startSelection.map(SH), AH)
    }
    const NH = /^(input\.type|delete)($|\.)/;
    class RH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = HH, this.undone = BH, this.prevTime = LH, this.prevUserEvent = AH
      }
      isolate() {
        return this.prevTime ? new RH(this.done, this.undone) : this
      }
      addChanges(HH, BH, LH, AH, rH) {
        let SH = this.done,
          tH = SH[SH.length - 1];
        return SH = tH && tH.changes && !tH.changes.empty && HH.changes && (!LH || NH.test(LH)) && (!tH.selectionsAfter.length && BH - this.prevTime < AH.newGroupDelay && AH.joinToEvent(rH, function(HH, BH) {
          let LH = [],
            AH = !1;
          return HH.iterChangedRanges(((HH, BH) => LH.push(HH, BH))), BH.iterChangedRanges(((HH, BH, rH, SH) => {
            for (let hH = 0; hH < LH.length;) {
              let HH = LH[hH++],
                BH = LH[hH++];
              SH >= HH && rH <= BH && (AH = !0)
            }
          })), AH
        }(tH.changes, HH.changes)) || "input.type.compose" == LH) ? IH(SH, SH.length - 1, AH.minDepth, new oH(HH.changes.compose(tH.changes), fH(hH.B.mapEffects(HH.effects, tH.changes), tH.effects), tH.mapped, tH.startSelection, lH)) : IH(SH, SH.length, AH.minDepth, HH), new RH(SH, lH, BH, LH)
      }
      addSelection(HH, BH, LH, AH) {
        let rH = this.done.length ? this.done[this.done.length - 1].selectionsAfter : lH;
        return rH.length > 0 && BH - this.prevTime < AH && LH == this.prevUserEvent && LH && /^select($|\.)/.test(LH) && (SH = rH[rH.length - 1], hH = HH, SH.rW.length == hH.rW.length && 0 === SH.rW.filter(((HH, BH) => HH.empty != hH.rW[BH].empty)).length) ? this : new RH(cH(this.done, HH), this.undone, BH, LH);
        var SH, hH
      }
      addMapping(HH) {
        return new RH(qH(this.done, HH), qH(this.undone, HH), this.prevTime, this.prevUserEvent)
      }
      pop(HH, BH, LH) {
        let AH = 0 == HH ? this.done : this.undone;
        if (0 == AH.length) return null;
        let rH = AH[AH.length - 1],
          SH = rH.selectionsAfter[0] || (rH.startSelection ? rH.startSelection.map(rH.changes.invertedDesc, 1) : BH.selection);
        if (LH && rH.selectionsAfter.length) return BH.update({
          selection: rH.selectionsAfter[rH.selectionsAfter.length - 1],
          annotations: xH.of({
            side: HH,
            rest: eH(AH),
            selection: SH
          }),
          userEvent: 0 == HH ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (rH.changes) {
          let LH = 1 == AH.length ? lH : AH.slice(0, AH.length - 1);
          return rH.mapped && (LH = qH(LH, rH.mapped)), BH.update({
            changes: rH.changes,
            selection: rH.startSelection,
            effects: rH.effects,
            annotations: xH.of({
              side: HH,
              rest: LH,
              selection: SH
            }),
            filter: !1,
            userEvent: 0 == HH ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    RH.empty = new RH(lH, lH);
    const jH = [{
      key: "Mod-z",
      run: OH,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: bH,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: bH,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: kH,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: mH,
      preventDefault: !0
    }];

    function nH(HH, BH) {
      return hH.i.create(HH.rW.map(BH), HH.mainIndex)
    }

    function FH(HH, BH) {
      return HH.update({
        selection: BH,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function DH(HH, BH) {
      let {
        state: LH,
        dispatch: AH
      } = HH, rH = nH(LH.selection, BH);
      return !rH.eq(LH.selection, !0) && (AH(FH(LH, rH)), !0)
    }

    function wH(HH, BH) {
      return hH.i.cursor(BH ? HH.to : HH.from)
    }

    function ZH(HH, BH) {
      return DH(HH, (LH => LH.empty ? HH.moveByChar(LH, BH) : wH(LH, BH)))
    }

    function dH(HH) {
      return HH.textDirectionAt(HH.state.selection.main.head) == tH.g.LTR
    }
    const aH = HH => ZH(HH, !dH(HH)),
      sH = HH => ZH(HH, dH(HH));

    function JH(HH, BH) {
      return DH(HH, (LH => LH.empty ? HH.moveByGroup(LH, BH) : wH(LH, BH)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function iH(HH, BH, LH) {
      if (BH.type.prop(LH)) return !0;
      let AH = BH.to - BH.from;
      return AH && (AH > 2 || /[^\s,.;:]/.test(HH.sliceDoc(BH.from, BH.to))) || BH.firstChild
    }

    function pH(HH, BH, LH) {
      let AH, rH, SH = (0, zH.pb)(HH).resolveInner(BH.head),
        tH = LH ? CH.f.closedBy : CH.f.openedBy;
      for (let hH = BH.head;;) {
        let BH = LH ? SH.childAfter(hH) : SH.childBefore(hH);
        if (!BH) break;
        iH(HH, BH, tH) ? SH = BH : hH = LH ? BH.to : BH.from
      }
      return rH = SH.type.prop(tH) && (AH = LH ? (0, zH.hb)(HH, SH.from, 1) : (0, zH.hb)(HH, SH.to, -1)) && AH.matched ? LH ? AH.end.to : AH.end.from : LH ? SH.to : SH.from, hH.i.cursor(rH, LH ? -1 : 1)
    }

    function yH(HH, BH) {
      return DH(HH, (LH => {
        if (!LH.empty) return wH(LH, BH);
        let AH = HH.moveVertically(LH, BH);
        return AH.head != LH.head ? AH : HH.moveToLineBoundary(LH, BH)
      }))
    }
    const HB = HH => yH(HH, !1),
      BB = HH => yH(HH, !0);

    function LB(HH) {
      let BH, LH = HH.scrollDOM.clientHeight < HH.scrollDOM.scrollHeight - 2,
        AH = 0,
        rH = 0;
      if (LH) {
        for (let BH of HH.state.facet(tH.h.scrollMargins)) {
          let LH = BH(HH);
          (null === LH || void 0 === LH ? void 0 : LH.top) && (AH = Math.max(null === LH || void 0 === LH ? void 0 : LH.top, AH)), (null === LH || void 0 === LH ? void 0 : LH.bottom) && (rH = Math.max(null === LH || void 0 === LH ? void 0 : LH.bottom, rH))
        }
        BH = HH.scrollDOM.clientHeight - AH - rH
      } else BH = (HH.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: AH,
        marginBottom: rH,
        selfScroll: LH,
        height: Math.max(HH.defaultLineHeight, BH - 5)
      }
    }

    function AB(HH, BH) {
      let LH, AH = LB(HH),
        {
          state: rH
        } = HH,
        SH = nH(rH.selection, (LH => LH.empty ? HH.moveVertically(LH, BH, AH.height) : wH(LH, BH)));
      if (SH.eq(rH.selection)) return !1;
      if (AH.selfScroll) {
        let BH = HH.coordsAtPos(rH.selection.main.head),
          hH = HH.scrollDOM.getBoundingClientRect(),
          zH = hH.top + AH.marginTop,
          CH = hH.bottom - AH.marginBottom;
        BH && BH.top > zH && BH.bottom < CH && (LH = tH.h.scrollIntoView(SH.main.head, {
          y: "start",
          yMargin: BH.top - zH
        }))
      }
      return HH.dispatch(FH(rH, SH), {
        effects: LH
      }), !0
    }
    const rB = HH => AB(HH, !1),
      SB = HH => AB(HH, !0);

    function hB(HH, BH, LH) {
      let AH = HH.lineBlockAt(BH.head),
        rH = HH.moveToLineBoundary(BH, LH);
      if (rH.head == BH.head && rH.head != (LH ? AH.to : AH.from) && (rH = HH.moveToLineBoundary(BH, LH, !1)), !LH && rH.head == AH.from && AH.length) {
        let LH = /^\s*/.exec(HH.state.sliceDoc(AH.from, Math.min(AH.from + 100, AH.to)))[0].length;
        LH && BH.head != AH.from + LH && (rH = hH.i.cursor(AH.from + LH))
      }
      return rH
    }

    function tB(HH, BH, LH) {
      let AH = !1,
        rH = nH(HH.selection, (BH => {
          let rH = (0, zH.hb)(HH, BH.head, -1) || (0, zH.hb)(HH, BH.head, 1) || BH.head > 0 && (0, zH.hb)(HH, BH.head - 1, 1) || BH.head < HH.doc.length && (0, zH.hb)(HH, BH.head + 1, -1);
          if (!rH || !rH.end) return BH;
          AH = !0;
          let SH = rH.start.from == BH.head ? rH.end.to : rH.end.from;
          return LH ? hH.i.range(BH.anchor, SH) : hH.i.cursor(SH)
        }));
      return !!AH && (BH(FH(HH, rH)), !0)
    }

    function zB(HH, BH) {
      let LH = nH(HH.state.selection, (HH => {
        let LH = BH(HH);
        return hH.i.range(HH.anchor, LH.head, LH.goalColumn, LH.bidiLevel || void 0, LH.assoc)
      }));
      return !LH.eq(HH.state.selection) && (HH.dispatch(FH(HH.state, LH)), !0)
    }

    function CB(HH, BH) {
      return zB(HH, (LH => HH.moveByChar(LH, BH)))
    }
    const EB = HH => CB(HH, !dH(HH)),
      XB = HH => CB(HH, dH(HH));

    function GB(HH, BH) {
      return zB(HH, (LH => HH.moveByGroup(LH, BH)))
    }

    function YB(HH, BH) {
      return zB(HH, (LH => HH.moveVertically(LH, BH)))
    }
    const uB = HH => YB(HH, !1),
      QB = HH => YB(HH, !0);

    function WB(HH, BH) {
      return zB(HH, (LH => HH.moveVertically(LH, BH, LB(HH).height)))
    }
    const MB = HH => WB(HH, !1),
      xB = HH => WB(HH, !0),
      vB = HH => {
        let {
          state: BH,
          dispatch: LH
        } = HH;
        return LH(FH(BH, {
          anchor: 0
        })), !0
      },
      PB = HH => {
        let {
          state: BH,
          dispatch: LH
        } = HH;
        return LH(FH(BH, {
          anchor: BH.doc.length
        })), !0
      },
      TB = HH => {
        let {
          state: BH,
          dispatch: LH
        } = HH;
        return LH(FH(BH, {
          anchor: BH.selection.main.anchor,
          head: 0
        })), !0
      },
      UB = HH => {
        let {
          state: BH,
          dispatch: LH
        } = HH;
        return LH(FH(BH, {
          anchor: BH.selection.main.anchor,
          head: BH.doc.length
        })), !0
      };

    function VB(HH, BH) {
      let {
        state: LH
      } = HH, AH = LH.selection, rH = LH.selection.rW.slice();
      for (let SH of LH.selection.rW) {
        let AH = LH.doc.lineAt(SH.head);
        if (BH ? AH.to < HH.state.doc.length : AH.from > 0)
          for (let LH = SH;;) {
            let SH = HH.moveVertically(LH, BH);
            if (SH.head < AH.from || SH.head > AH.to) {
              rH.some((HH => HH.head == SH.head)) || rH.push(SH);
              break
            }
            if (SH.head == LH.head) break;
            LH = SH
          }
      }
      return rH.length != AH.rW.length && (HH.dispatch(FH(LH, hH.i.create(rH, rH.length - 1))), !0)
    }

    function OB(HH, BH) {
      if (HH.state.readOnly) return !1;
      let LH = "delete.selection",
        {
          state: AH
        } = HH,
        rH = AH.changeByRange((AH => {
          let {
            from: rH,
            to: SH
          } = AH;
          if (rH == SH) {
            let hH = BH(AH);
            hH < rH ? (LH = "delete.backward", hH = bB(HH, hH, !1)) : hH > rH && (LH = "delete.forward", hH = bB(HH, hH, !0)), rH = Math.min(rH, hH), SH = Math.max(SH, hH)
          } else rH = bB(HH, rH, !1), SH = bB(HH, SH, !0);
          return rH == SH ? {
            range: AH
          } : {
            changes: {
              from: rH,
              to: SH
            },
            range: hH.i.cursor(rH, rH < AH.head ? -1 : 1)
          }
        }));
      return !rH.changes.empty && (HH.dispatch(AH.update(rH, {
        scrollIntoView: !0,
        userEvent: LH,
        effects: "delete.selection" == LH ? tH.h.announce.of(AH.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function bB(HH, BH, LH) {
      if (HH instanceof tH.h)
        for (let AH of HH.state.facet(tH.h.atomicRanges).map((BH => BH(HH)))) AH.between(BH, BH, ((HH, AH) => {
          HH < BH && AH > BH && (BH = LH ? AH : HH)
        }));
      return BH
    }
    const kB = (HH, BH, LH) => OB(HH, (AH => {
        let rH, SH, tH = AH.from,
          {
            state: CH
          } = HH,
          EH = CH.doc.lineAt(tH);
        if (LH && !BH && tH > EH.from && tH < EH.from + 200 && !/[^ \t]/.test(rH = EH.text.slice(0, tH - EH.from))) {
          if ("\t" == rH[rH.length - 1]) return tH - 1;
          let HH = (0, hH.Y)(rH, CH.tabSize) % (0, zH.T)(CH) || (0, zH.T)(CH);
          for (let BH = 0; BH < HH && " " == rH[rH.length - 1 - BH]; BH++) tH--;
          SH = tH
        } else SH = (0, hH.$)(EH.text, tH - EH.from, BH, BH) + EH.from, SH == tH && EH.number != (BH ? CH.doc.lines : 1) ? SH += BH ? 1 : -1 : !BH && /[\ufe00-\ufe0f]/.test(EH.text.slice(SH - EH.from, tH - EH.from)) && (SH = (0, hH.$)(EH.text, SH - EH.from, !1, !1) + EH.from);
        return SH
      })),
      mB = HH => kB(HH, !1, !0),
      oB = HH => kB(HH, !0, !1),
      IB = (HH, BH) => OB(HH, (LH => {
        let AH = LH.head,
          {
            state: rH
          } = HH,
          SH = rH.doc.lineAt(AH),
          tH = rH.charCategorizer(AH);
        for (let HH = null;;) {
          if (AH == (BH ? SH.to : SH.from)) {
            AH == LH.head && SH.number != (BH ? rH.doc.lines : 1) && (AH += BH ? 1 : -1);
            break
          }
          let zH = (0, hH.$)(SH.text, AH - SH.from, BH) + SH.from,
            CH = SH.text.slice(Math.min(AH, zH) - SH.from, Math.max(AH, zH) - SH.from),
            EH = tH(CH);
          if (null != HH && EH != HH) break;
          " " == CH && AH == LH.head || (HH = EH), AH = zH
        }
        return AH
      })),
      fB = HH => IB(HH, !1);

    function lB(HH) {
      let BH = [],
        LH = -1;
      for (let AH of HH.selection.rW) {
        let rH = HH.doc.lineAt(AH.from),
          SH = HH.doc.lineAt(AH.to);
        if (AH.empty || AH.to != SH.from || (SH = HH.doc.lineAt(AH.to - 1)), LH >= rH.number) {
          let HH = BH[BH.length - 1];
          HH.to = SH.to, HH.rW.push(AH)
        } else BH.push({
          from: rH.from,
          to: SH.to,
          rW: [AH]
        });
        LH = SH.number + 1
      }
      return BH
    }

    function KB(HH, BH, LH) {
      if (HH.readOnly) return !1;
      let AH = [],
        rH = [];
      for (let SH of lB(HH)) {
        if (LH ? SH.to == HH.doc.length : 0 == SH.from) continue;
        let BH = HH.doc.lineAt(LH ? SH.to + 1 : SH.from - 1),
          tH = BH.length + 1;
        if (LH) {
          AH.push({
            from: SH.to,
            to: BH.to
          }, {
            from: SH.from,
            insert: BH.text + HH.lineBreak
          });
          for (let BH of SH.rW) rH.push(hH.i.range(Math.min(HH.doc.length, BH.anchor + tH), Math.min(HH.doc.length, BH.head + tH)))
        } else {
          AH.push({
            from: BH.from,
            to: SH.from
          }, {
            from: SH.to,
            insert: HH.lineBreak + BH.text
          });
          for (let HH of SH.rW) rH.push(hH.i.range(HH.anchor - tH, HH.head - tH))
        }
      }
      return !!AH.length && (BH(HH.update({
        changes: AH,
        scrollIntoView: !0,
        selection: hH.i.create(rH, HH.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function cB(HH, BH, LH) {
      if (HH.readOnly) return !1;
      let AH = [];
      for (let SH of lB(HH)) LH ? AH.push({
        from: SH.from,
        insert: HH.doc.slice(SH.from, SH.to) + HH.lineBreak
      }) : AH.push({
        from: SH.to,
        insert: HH.lineBreak + HH.doc.slice(SH.from, SH.to)
      });
      let rH = HH.changes(AH);
      return BH(HH.update({
        changes: rH,
        selection: HH.selection.map(rH, LH ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const eB = qB(!1);

    function qB(HH) {
      return BH => {
        let {
          state: LH,
          dispatch: AH
        } = BH;
        if (LH.readOnly) return !1;
        let rH = LH.changeByRange((BH => {
          let {
            from: AH,
            to: rH
          } = BH, SH = LH.doc.lineAt(AH), tH = !HH && AH == rH && function(HH, BH) {
            if (/\(\)|\[\]|\{\}/.test(HH.sliceDoc(BH - 1, BH + 1))) return {
              from: BH,
              to: BH
            };
            let LH, AH = (0, zH.pb)(HH).resolveInner(BH),
              rH = AH.childBefore(BH),
              SH = AH.childAfter(BH);
            return rH && SH && rH.to <= BH && SH.from >= BH && (LH = rH.type.prop(CH.f.closedBy)) && LH.indexOf(SH.name) > -1 && HH.doc.lineAt(rH.to).from == HH.doc.lineAt(SH.from).from && !/\S/.test(HH.sliceDoc(rH.to, SH.from)) ? {
              from: rH.to,
              to: SH.from
            } : null
          }(LH, AH);
          HH && (AH = rH = (rH <= SH.to ? SH : LH.doc.lineAt(rH)).to);
          let EH = new zH.g(LH, {
              simulateBreak: AH,
              simulateDoubleBreak: !!tH
            }),
            XH = (0, zH.W)(EH, AH);
          for (null == XH && (XH = (0, hH.Y)(/^\s*/.exec(LH.doc.lineAt(AH).text)[0], LH.tabSize)); rH < SH.to && /\s/.test(SH.text[rH - SH.from]);) rH++;
          tH ? ({
            from: AH,
            to: rH
          } = tH) : AH > SH.from && AH < SH.from + 100 && !/\S/.test(SH.text.slice(0, AH)) && (AH = SH.from);
          let GH = ["", (0, zH.cb)(LH, XH)];
          return tH && GH.push((0, zH.cb)(LH, EH.lineIndent(SH.from, -1))), {
            changes: {
              from: AH,
              to: rH,
              insert: hH.F.of(GH)
            },
            range: hH.i.cursor(AH + 1 + GH[1].length)
          }
        }));
        return AH(LH.update(rH, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function gB(HH, BH) {
      let LH = -1;
      return HH.changeByRange((AH => {
        let rH = [];
        for (let hH = AH.from; hH <= AH.to;) {
          let SH = HH.doc.lineAt(hH);
          SH.number > LH && (AH.empty || AH.to > SH.from) && (BH(SH, rH, AH), LH = SH.number), hH = SH.to + 1
        }
        let SH = HH.changes(rH);
        return {
          changes: rH,
          range: hH.i.range(SH.mapPos(AH.anchor, 1), SH.mapPos(AH.head, 1))
        }
      }))
    }
    const NB = HH => {
        let {
          state: BH,
          dispatch: LH
        } = HH;
        return !BH.readOnly && (LH(BH.update(gB(BH, ((HH, LH) => {
          LH.push({
            from: HH.from,
            insert: BH.facet(zH.gb)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      RB = HH => {
        let {
          state: BH,
          dispatch: LH
        } = HH;
        return !BH.readOnly && (LH(BH.update(gB(BH, ((HH, LH) => {
          let AH = /^\s*/.exec(HH.text)[0];
          if (!AH) return;
          let rH = (0, hH.Y)(AH, BH.tabSize),
            SH = 0,
            tH = (0, zH.cb)(BH, Math.max(0, rH - (0, zH.T)(BH)));
          for (; SH < AH.length && SH < tH.length && AH.charCodeAt(SH) == tH.charCodeAt(SH);) SH++;
          LH.push({
            from: HH.from + SH,
            to: HH.from + AH.length,
            insert: tH.slice(SH)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      jB = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: HH => DH(HH, (BH => pH(HH.state, BH, !dH(HH)))),
        shift: HH => zB(HH, (BH => pH(HH.state, BH, !dH(HH))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: HH => DH(HH, (BH => pH(HH.state, BH, dH(HH)))),
        shift: HH => zB(HH, (BH => pH(HH.state, BH, dH(HH))))
      }, {
        key: "Alt-ArrowUp",
        run: HH => {
          let {
            state: BH,
            dispatch: LH
          } = HH;
          return KB(BH, LH, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: HH => {
          let {
            state: BH,
            dispatch: LH
          } = HH;
          return cB(BH, LH, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: HH => {
          let {
            state: BH,
            dispatch: LH
          } = HH;
          return KB(BH, LH, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: HH => {
          let {
            state: BH,
            dispatch: LH
          } = HH;
          return cB(BH, LH, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: HH => VB(HH, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: HH => VB(HH, !0)
      }, {
        key: "Escape",
        run: HH => {
          let {
            state: BH,
            dispatch: LH
          } = HH, AH = BH.selection, rH = null;
          return AH.rW.length > 1 ? rH = hH.i.create([AH.main]) : AH.main.empty || (rH = hH.i.create([hH.i.cursor(AH.main.head)])), !!rH && (LH(FH(BH, rH)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: qB(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: HH => {
          let {
            state: BH,
            dispatch: LH
          } = HH, AH = lB(BH).map((HH => {
            let {
              from: LH,
              to: AH
            } = HH;
            return hH.i.range(LH, Math.min(AH + 1, BH.doc.length))
          }));
          return LH(BH.update({
            selection: hH.i.create(AH),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: HH => {
          let {
            state: BH,
            dispatch: LH
          } = HH, AH = nH(BH.selection, (HH => {
            let LH = (0, zH.pb)(BH),
              AH = LH.resolveStack(HH.from, 1);
            if (HH.empty) {
              let BH = LH.resolveStack(HH.from, -1);
              BH.node.from >= AH.node.from && BH.node.to <= AH.node.to && (AH = BH)
            }
            for (let BH = AH; BH; BH = BH.next) {
              let {
                node: LH
              } = BH;
              if ((LH.from < HH.from && LH.to >= HH.to || LH.to > HH.to && LH.from <= HH.from) && BH.next) return hH.i.range(LH.to, LH.from)
            }
            return HH
          }));
          return !AH.eq(BH.selection) && (LH(FH(BH, AH)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: RB
      }, {
        key: "Mod-]",
        run: NB
      }, {
        key: "Mod-Alt-\\",
        run: HH => {
          let {
            state: BH,
            dispatch: LH
          } = HH;
          if (BH.readOnly) return !1;
          let AH = Object.create(null),
            rH = new zH.g(BH, {
              overrideIndentation: HH => {
                let BH = AH[HH];
                return null == BH ? -1 : BH
              }
            }),
            SH = gB(BH, ((HH, LH, SH) => {
              let hH = (0, zH.W)(rH, HH.from);
              if (null == hH) return;
              /\S/.test(HH.text) || (hH = 0);
              let tH = /^\s*/.exec(HH.text)[0],
                CH = (0, zH.cb)(BH, hH);
              (tH != CH || SH.from < HH.from + tH.length) && (AH[HH.from] = hH, LH.push({
                from: HH.from,
                to: HH.from + tH.length,
                insert: CH
              }))
            }));
          return SH.changes.empty || LH(BH.update(SH, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: HH => {
          if (HH.state.readOnly) return !1;
          let {
            state: BH
          } = HH, LH = BH.changes(lB(BH).map((HH => {
            let {
              from: LH,
              to: AH
            } = HH;
            return LH > 0 ? LH-- : AH < BH.doc.length && AH++, {
              from: LH,
              to: AH
            }
          }))), AH = nH(BH.selection, (BH => {
            let LH;
            if (HH.lineWrapping) {
              let AH = HH.lineBlockAt(BH.head),
                rH = HH.coordsAtPos(BH.head, BH.assoc || 1);
              rH && (LH = AH.bottom + HH.documentTop - rH.bottom + HH.defaultLineHeight / 2)
            }
            return HH.moveVertically(BH, !0, LH)
          })).map(LH);
          return HH.dispatch({
            changes: LH,
            selection: AH,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: HH => {
          let {
            state: BH,
            dispatch: LH
          } = HH;
          return tB(BH, LH, !1)
        }
      }, {
        key: "Mod-/",
        run: HH => {
          let {
            state: BH
          } = HH, LH = BH.doc.lineAt(BH.selection.main.from), AH = uH(HH.state, LH.from);
          return AH.line ? XH(HH) : !!AH.block && YH(HH)
        }
      }, {
        key: "Alt-A",
        run: GH
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: HH => (HH.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: aH,
        shift: EB,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: HH => JH(HH, !dH(HH)),
        shift: HH => GB(HH, !dH(HH)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: HH => DH(HH, (BH => hB(HH, BH, !dH(HH)))),
        shift: HH => zB(HH, (BH => hB(HH, BH, !dH(HH)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: sH,
        shift: XB,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: HH => JH(HH, dH(HH)),
        shift: HH => GB(HH, dH(HH)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: HH => DH(HH, (BH => hB(HH, BH, dH(HH)))),
        shift: HH => zB(HH, (BH => hB(HH, BH, dH(HH)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: HB,
        shift: uB,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: vB,
        shift: TB
      }, {
        mac: "Ctrl-ArrowUp",
        run: rB,
        shift: MB
      }, {
        key: "ArrowDown",
        run: BB,
        shift: QB,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: PB,
        shift: UB
      }, {
        mac: "Ctrl-ArrowDown",
        run: SB,
        shift: xB
      }, {
        key: "PageUp",
        run: rB,
        shift: MB
      }, {
        key: "PageDown",
        run: SB,
        shift: xB
      }, {
        key: "Home",
        run: HH => DH(HH, (BH => hB(HH, BH, !1))),
        shift: HH => zB(HH, (BH => hB(HH, BH, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: vB,
        shift: TB
      }, {
        key: "End",
        run: HH => DH(HH, (BH => hB(HH, BH, !0))),
        shift: HH => zB(HH, (BH => hB(HH, BH, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: PB,
        shift: UB
      }, {
        key: "Enter",
        run: eB,
        shift: eB
      }, {
        key: "Mod-a",
        run: HH => {
          let {
            state: BH,
            dispatch: LH
          } = HH;
          return LH(BH.update({
            selection: {
              anchor: 0,
              head: BH.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: mB,
        shift: mB,
        preventDefault: !0
      }, {
        key: "Delete",
        run: oB,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: fB,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: HH => IB(HH, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: HH => OB(HH, (BH => {
          let LH = HH.moveToLineBoundary(BH, !1).head;
          return BH.head > LH ? LH : Math.max(0, BH.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: HH => OB(HH, (BH => {
          let LH = HH.moveToLineBoundary(BH, !0).head;
          return BH.head < LH ? LH : Math.min(HH.state.doc.length, BH.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: aH,
        shift: EB,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: sH,
        shift: XB
      }, {
        key: "Ctrl-p",
        run: HB,
        shift: uB
      }, {
        key: "Ctrl-n",
        run: BB,
        shift: QB
      }, {
        key: "Ctrl-a",
        run: HH => DH(HH, (BH => hH.i.cursor(HH.lineBlockAt(BH.head).from, 1))),
        shift: HH => zB(HH, (BH => hH.i.cursor(HH.lineBlockAt(BH.head).from)))
      }, {
        key: "Ctrl-e",
        run: HH => DH(HH, (BH => hH.i.cursor(HH.lineBlockAt(BH.head).to, -1))),
        shift: HH => zB(HH, (BH => hH.i.cursor(HH.lineBlockAt(BH.head).to)))
      }, {
        key: "Ctrl-d",
        run: oB
      }, {
        key: "Ctrl-h",
        run: mB
      }, {
        key: "Ctrl-k",
        run: HH => OB(HH, (BH => {
          let LH = HH.lineBlockAt(BH.head).to;
          return BH.head < LH ? LH : Math.min(HH.state.doc.length, BH.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: fB
      }, {
        key: "Ctrl-o",
        run: HH => {
          let {
            state: BH,
            dispatch: LH
          } = HH;
          if (BH.readOnly) return !1;
          let AH = BH.changeByRange((HH => ({
            changes: {
              from: HH.from,
              to: HH.to,
              insert: hH.F.of(["", ""])
            },
            range: hH.i.cursor(HH.from)
          })));
          return LH(BH.update(AH, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: HH => {
          let {
            state: BH,
            dispatch: LH
          } = HH;
          if (BH.readOnly) return !1;
          let AH = BH.changeByRange((HH => {
            if (!HH.empty || 0 == HH.from || HH.from == BH.doc.length) return {
              range: HH
            };
            let LH = HH.from,
              AH = BH.doc.lineAt(LH),
              rH = LH == AH.from ? LH - 1 : (0, hH.$)(AH.text, LH - AH.from, !1) + AH.from,
              SH = LH == AH.to ? LH + 1 : (0, hH.$)(AH.text, LH - AH.from, !0) + AH.from;
            return {
              changes: {
                from: rH,
                to: SH,
                insert: BH.doc.slice(LH, SH).append(BH.doc.slice(rH, LH))
              },
              range: hH.i.cursor(SH)
            }
          }));
          return !AH.changes.empty && (LH(BH.update(AH, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: SB
      }].map((HH => ({
        mac: HH.key,
        run: HH.run,
        shift: HH.shift
      }))))),
      nB = {
        key: "Tab",
        run: NB,
        shift: RB
      };
    var FB = LH(44860),
      DB = LH(44814),
      wB = LH(44863),
      ZB = function(HH) {
        void 0 === HH && (HH = {});
        var {
          crosshairCursor: BH = !1
        } = HH, LH = [];
        !1 !== HH.closeBracketsKeymap && (LH = LH.concat(DB.f)), !1 !== HH.defaultKeymap && (LH = LH.concat(jB)), !1 !== HH.searchKeymap && (LH = LH.concat(FB.k)), !1 !== HH.historyKeymap && (LH = LH.concat(jH)), !1 !== HH.foldKeymap && (LH = LH.concat(zH.J)), !1 !== HH.completionKeymap && (LH = LH.concat(DB.l)), !1 !== HH.lintKeymap && (LH = LH.concat(wB.c));
        var AH = [];
        return !1 !== HH.lineNumbers && AH.push((0, tH.Z)()), !1 !== HH.highlightActiveLineGutter && AH.push((0, tH.J)()), !1 !== HH.highlightSpecialChars && AH.push((0, tH.Q)()), !1 !== HH.history && AH.push(function() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [UH, TH.of(HH), tH.h.domEventHandlers({
            beforeinput(HH, BH) {
              let LH = "historyUndo" == HH.inputType ? OH : "historyRedo" == HH.inputType ? bH : null;
              return !!LH && (HH.preventDefault(), LH(BH))
            }
          })]
        }()), !1 !== HH.foldGutter && AH.push((0, zH.G)()), !1 !== HH.drawSelection && AH.push((0, tH.x)()), !1 !== HH.dropCursor && AH.push((0, tH.y)()), !1 !== HH.allowMultipleSelections && AH.push(hH.k.allowMultipleSelections.of(!0)), !1 !== HH.indentOnInput && AH.push((0, zH.$)()), !1 !== HH.syntaxHighlighting && AH.push((0, zH.kb)(zH.t, {
          fallback: !0
        })), !1 !== HH.bracketMatching && AH.push((0, zH.n)()), !1 !== HH.closeBrackets && AH.push((0, DB.g)()), !1 !== HH.autocompletion && AH.push((0, DB.e)()), !1 !== HH.rectangularSelection && AH.push((0, tH.gb)()), !1 !== BH && AH.push((0, tH.t)()), !1 !== HH.highlightActiveLine && AH.push((0, tH.N)()), !1 !== HH.highlightSelectionMatches && AH.push((0, FB.h)()), HH.tabSize && "number" === typeof HH.tabSize && AH.push(zH.gb.of(" ".repeat(HH.tabSize))), AH.concat([tH.Y.of(LH.flat())]).filter(Boolean)
      },
      dB = LH(44851);
    const aB = "#e5c07b",
      sB = "#e06c75",
      JB = "#56b6c2",
      iB = "#ffffff",
      pB = "#abb2bf",
      yB = "#7d8799",
      HL = "#61afef",
      BL = "#98c379",
      LL = "#d19a66",
      AL = "#c678dd",
      rL = "#21252b",
      SL = "#2c313a",
      hL = "#282c34",
      tL = "#353a42",
      zL = "#3E4451",
      CL = "#528bff",
      EL = tH.h.theme({
        "&": {
          color: pB,
          backgroundColor: hL
        },
        ".cm-content": {
          caretColor: CL
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: CL
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: zL
        },
        ".cm-panels": {
          backgroundColor: rL,
          color: pB
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
          backgroundColor: hL,
          color: yB,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: SL
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: tL
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: tL,
          borderBottomColor: tL
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: SL,
            color: pB
          }
        }
      }, {
        dark: !0
      }),
      XL = zH.d.define([{
        tag: dB.j.keyword,
        color: AL
      }, {
        tag: [dB.j.name, dB.j.deleted, dB.j.character, dB.j.propertyName, dB.j.macroName],
        color: sB
      }, {
        tag: [dB.j.function(dB.j.variableName), dB.j.labelName],
        color: HL
      }, {
        tag: [dB.j.color, dB.j.constant(dB.j.name), dB.j.standard(dB.j.name)],
        color: LL
      }, {
        tag: [dB.j.definition(dB.j.name), dB.j.separator],
        color: pB
      }, {
        tag: [dB.j.typeName, dB.j.className, dB.j.number, dB.j.changed, dB.j.annotation, dB.j.modifier, dB.j.self, dB.j.namespace],
        color: aB
      }, {
        tag: [dB.j.operator, dB.j.operatorKeyword, dB.j.url, dB.j.escape, dB.j.regexp, dB.j.link, dB.j.special(dB.j.string)],
        color: JB
      }, {
        tag: [dB.j.meta, dB.j.comment],
        color: yB
      }, {
        tag: dB.j.strong,
        fontWeight: "bold"
      }, {
        tag: dB.j.emphasis,
        fontStyle: "italic"
      }, {
        tag: dB.j.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: dB.j.link,
        color: yB,
        textDecoration: "underline"
      }, {
        tag: dB.j.heading,
        fontWeight: "bold",
        color: sB
      }, {
        tag: [dB.j.atom, dB.j.bool, dB.j.special(dB.j.variableName)],
        color: LL
      }, {
        tag: [dB.j.processingInstruction, dB.j.string, dB.j.inserted],
        color: BL
      }, {
        tag: dB.j.invalid,
        color: iB
      }]),
      GL = [EL, (0, zH.kb)(XL)];
    var YL = tH.h.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class uL {
      constructor(HH, BH) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = BH, this.timeoutMS = BH, this.callbacks.push(HH)
      }
      IX() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var HH = this.callbacks.slice();
          this.callbacks.length = 0, HH.forEach((HH => {
            try {
              HH()
            } catch (BH) {
              console.error("TimeoutLatch callback error:", BH)
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
    class QL {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(HH) {
        this.latches.add(HH), this.start()
      }
      remove(HH) {
        this.latches.delete(HH), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((HH => {
            HH.IX(), HH.isDone && this.remove(HH)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var WL = null,
      ML = hH.c.define(),
      xL = [];

    function vL(HH) {
      var {
        value: BH,
        selection: LH,
        onChange: AH,
        onStatistics: rH,
        onCreateEditor: zH,
        onUpdate: CH,
        extensions: EH = xL,
        autoFocus: XH,
        theme: GH = "light",
        height: YH = null,
        minHeight: uH = null,
        maxHeight: QH = null,
        width: WH = null,
        minWidth: MH = null,
        maxWidth: xH = null,
        placeholder: vH = "",
        editable: PH = !0,
        readOnly: TH = !1,
        indentWithTab: UH = !0,
        basicSetup: VH = !0,
        root: OH,
        initialState: bH
      } = HH, [kH, mH] = (0, SH.useState)(), [oH, IH] = (0, SH.useState)(), [fH, lH] = (0, SH.useState)(), KH = (0, SH.useState)((() => ({
        current: null
      })))[0], cH = (0, SH.useState)((() => ({
        current: null
      })))[0], eH = tH.h.theme({
        "&": {
          height: YH,
          minHeight: uH,
          maxHeight: QH,
          width: WH,
          minWidth: MH,
          maxWidth: xH
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), qH = tH.h.updateListener.of((HH => {
        if (HH.docChanged && "function" === typeof AH && !HH.transactions.some((HH => HH.annotation(ML)))) {
          KH.current ? KH.current.reset() : (KH.current = new uL((() => {
            if (cH.current) {
              var HH = cH.current;
              cH.current = null, HH()
            }
            KH.current = null
          }), 200), ("undefined" === typeof window ? new QL : (WL || (WL = new QL), WL)).add(KH.current));
          var BH = HH.state.doc.toString();
          AH(BH, HH)
        }
        rH && rH((HH => ({
          line: HH.state.doc.lineAt(HH.state.selection.main.from),
          lineCount: HH.state.doc.lines,
          lineBreak: HH.state.lineBreak,
          length: HH.state.doc.length,
          readOnly: HH.state.readOnly,
          tabSize: HH.state.tabSize,
          selection: HH.state.selection,
          selectionAsSingle: HH.state.selection.asSingle().main,
          rW: HH.state.selection.rW,
          selectionCode: HH.state.sliceDoc(HH.state.selection.main.from, HH.state.selection.main.to),
          selections: HH.state.selection.rW.map((BH => HH.state.sliceDoc(BH.from, BH.to))),
          selectedText: HH.state.selection.rW.some((HH => !HH.empty))
        }))(HH))
      })), gH = function(HH) {
        void 0 === HH && (HH = {});
        var {
          indentWithTab: BH = !0,
          editable: LH = !0,
          readOnly: AH = !1,
          theme: rH = "light",
          placeholder: SH = "",
          basicSetup: zH = !0
        } = HH, CH = [];
        switch (BH && CH.unshift(tH.Y.of([nB])), zH && ("boolean" === typeof zH ? CH.unshift(ZB()) : CH.unshift(ZB(zH))), SH && CH.unshift((0, tH.cb)(SH)), rH) {
          case "light":
            CH.push(YL);
            break;
          case "dark":
            CH.push(GL);
            break;
          case "none":
            break;
          default:
            CH.push(rH)
        }
        return !1 === LH && CH.push(tH.h.editable.of(!1)), AH && CH.push(hH.k.readOnly.of(!0)), [...CH]
      }({
        theme: GH,
        editable: PH,
        readOnly: TH,
        placeholder: vH,
        indentWithTab: UH,
        basicSetup: VH
      }), NH = [qH, eH, ...gH];
      return CH && "function" === typeof CH && NH.push(tH.h.updateListener.of(CH)), NH = NH.concat(EH), (0, SH.useLayoutEffect)((() => {
        if (kH && !fH) {
          var HH = {
              doc: BH,
              selection: LH,
              extensions: NH
            },
            AH = bH ? hH.k.fromJSON(bH.json, HH, bH.fields) : hH.k.create(HH);
          if (lH(AH), !oH) {
            var rH = new tH.h({
              state: AH,
              parent: kH,
              root: OH
            });
            IH(rH), zH && zH(rH, AH)
          }
        }
        return () => {
          oH && (lH(void 0), IH(void 0))
        }
      }), [kH, fH]), (0, SH.useEffect)((() => {
        HH.container && mH(HH.container)
      }), [HH.container]), (0, SH.useEffect)((() => () => {
        oH && (oH.destroy(), IH(void 0)), KH.current && (KH.current.cancel(), KH.current = null)
      }), [oH]), (0, SH.useEffect)((() => {
        XH && oH && oH.focus()
      }), [XH, oH]), (0, SH.useEffect)((() => {
        oH && oH.dispatch({
          effects: hH.B.reconfigure.of(NH)
        })
      }), [GH, EH, YH, uH, QH, WH, MH, xH, vH, PH, TH, UH, VH, AH, CH]), (0, SH.useEffect)((() => {
        if (void 0 !== BH) {
          var HH = oH ? oH.state.doc.toString() : "";
          if (oH && BH !== HH) {
            var LH = () => {
              oH && BH !== oH.state.doc.toString() && oH.dispatch({
                changes: {
                  from: 0,
                  to: oH.state.doc.toString().length,
                  insert: BH || ""
                },
                annotations: [ML.of(!0)]
              })
            };
            KH.current && !KH.current.isDone ? cH.current = LH : LH()
          }
        }
      }), [BH, oH]), {
        state: fH,
        setState: lH,
        view: oH,
        setView: IH,
        container: kH,
        setContainer: mH
      }
    }
    var PL = LH(1225),
      TL = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      UL = (0, SH.forwardRef)(((HH, BH) => {
        var {
          className: LH,
          value: hH = "",
          selection: tH,
          extensions: zH = [],
          onChange: CH,
          onStatistics: EH,
          onCreateEditor: XH,
          onUpdate: GH,
          autoFocus: YH,
          theme: uH = "light",
          height: QH,
          minHeight: WH,
          maxHeight: MH,
          width: xH,
          minWidth: vH,
          maxWidth: PH,
          basicSetup: TH,
          placeholder: UH,
          indentWithTab: VH,
          editable: OH,
          readOnly: bH,
          root: kH,
          initialState: mH
        } = HH, oH = (0, rH.c)(HH, TL), IH = (0, SH.useRef)(null), {
          state: fH,
          view: lH,
          container: KH,
          setContainer: cH
        } = vL({
          root: kH,
          value: hH,
          autoFocus: YH,
          theme: uH,
          height: QH,
          minHeight: WH,
          maxHeight: MH,
          width: xH,
          minWidth: vH,
          maxWidth: PH,
          basicSetup: TH,
          placeholder: UH,
          indentWithTab: VH,
          editable: OH,
          readOnly: bH,
          selection: tH,
          onChange: CH,
          onStatistics: EH,
          onCreateEditor: XH,
          onUpdate: GH,
          extensions: zH,
          initialState: mH
        });
        (0, SH.useImperativeHandle)(BH, (() => ({
          editor: IH.current,
          state: fH,
          view: lH
        })), [IH, KH, fH, lH]);
        var eH = (0, SH.useCallback)((HH => {
          IH.current = HH, cH(HH)
        }), [cH]);
        if ("string" !== typeof hH) throw new Error("value must be typeof string but got " + typeof hH);
        var qH = "string" === typeof uH ? "cm-theme-" + uH : "cm-theme";
        return (0, PL.jsx)("div", (0, AH.d)({
          ref: eH,
          className: qH + (LH ? " " + LH : "")
        }, oH))
      }));
    UL.displayName = "CodeMirror";
    const VL = UL
  },
  44834: (HH, BH, LH) => {
    function AH() {
      var HH = arguments[0];
      "string" == typeof HH && (HH = document.createElement(HH));
      var BH = 1,
        LH = arguments[1];
      if (LH && "object" == typeof LH && null == LH.nodeType && !Array.isArray(LH)) {
        for (var AH in LH)
          if (Object.prototype.hasOwnProperty.call(LH, AH)) {
            var SH = LH[AH];
            "string" == typeof SH ? HH.setAttribute(AH, SH) : null != SH && (HH[AH] = SH)
          } BH++
      }
      for (; BH < arguments.length; BH++) rH(HH, arguments[BH]);
      return HH
    }

    function rH(HH, BH) {
      if ("string" == typeof BH) HH.appendChild(document.createTextNode(BH));
      else if (null == BH);
      else if (null != BH.nodeType) HH.appendChild(BH);
      else {
        if (!Array.isArray(BH)) throw new RangeError("Unsupported child node: " + BH);
        for (var LH = 0; LH < BH.length; LH++) rH(HH, BH[LH])
      }
    }
    LH.d(BH, {
      d: () => AH
    })
  },
  44828: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH
    });
    const AH = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      rH = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      SH = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class hH {
      constructor(HH, BH) {
        this.rules = [];
        let {
          finish: LH
        } = BH || {};

        function AH(HH) {
          return /^@/.test(HH) ? [HH] : HH.split(/,\s*/)
        }

        function rH(HH, BH, SH, hH) {
          let tH = [],
            zH = /^@(\w+)\b/.exec(HH[0]),
            CH = zH && "keyframes" == zH[1];
          if (zH && null == BH) return SH.push(HH[0] + ";");
          for (let LH in BH) {
            let hH = BH[LH];
            if (/&/.test(LH)) rH(LH.split(/,\s*/).map((BH => HH.map((HH => BH.replace(/&/, HH))))).reduce(((HH, BH) => HH.concat(BH))), hH, SH);
            else if (hH && "object" == typeof hH) {
              if (!zH) throw new RangeError("The value of a property (" + LH + ") should be a primitive value.");
              rH(AH(LH), hH, tH, CH)
            } else null != hH && tH.push(LH.replace(/_.*/, "").replace(/[A-Z]/g, (HH => "-" + HH.toLowerCase())) + ": " + hH + ";")
          }(tH.length || CH) && SH.push((!LH || zH || hH ? HH : HH.map(LH)).join(", ") + " {" + tH.join(" ") + "}")
        }
        for (let SH in HH) rH(AH(SH), HH[SH], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let HH = SH[AH] || 1;
        return SH[AH] = HH + 1, "\u037c" + HH.toString(36)
      }
      static mount(HH, BH, LH) {
        let AH = HH[rH],
          SH = LH && LH.nonce;
        AH ? SH && AH.setNonce(SH) : AH = new zH(HH, SH), AH.mount(Array.isArray(BH) ? BH : [BH], HH)
      }
    }
    let tH = new Map;
    class zH {
      constructor(HH, BH) {
        let LH = HH.ownerDocument || HH,
          AH = LH.defaultView;
        if (!HH.head && HH.adoptedStyleSheets && AH.CSSStyleSheet) {
          let BH = tH.get(LH);
          if (BH) return HH[rH] = BH;
          this.sheet = new AH.CSSStyleSheet, tH.set(LH, this)
        } else this.styleTag = LH.createElement("style"), BH && this.styleTag.setAttribute("nonce", BH);
        this.modules = [], HH[rH] = this
      }
      mount(HH, BH) {
        let LH = this.sheet,
          AH = 0,
          rH = 0;
        for (let SH = 0; SH < HH.length; SH++) {
          let BH = HH[SH],
            hH = this.modules.indexOf(BH);
          if (hH < rH && hH > -1 && (this.modules.splice(hH, 1), rH--, hH = -1), -1 == hH) {
            if (this.modules.splice(rH++, 0, BH), LH)
              for (let HH = 0; HH < BH.rules.length; HH++) LH.insertRule(BH.rules[HH], AH++)
          } else {
            for (; rH < hH;) AH += this.modules[rH++].rules.length;
            AH += BH.rules.length, rH++
          }
        }
        if (LH) BH.adoptedStyleSheets.indexOf(this.sheet) < 0 && (BH.adoptedStyleSheets = [this.sheet, ...BH.adoptedStyleSheets]);
        else {
          let HH = "";
          for (let BH = 0; BH < this.modules.length; BH++) HH += this.modules[BH].getRules() + "\n";
          this.styleTag.textContent = HH;
          let LH = BH.head || BH;
          this.styleTag.parentNode != LH && LH.insertBefore(this.styleTag, LH.firstChild)
        }
      }
      setNonce(HH) {
        this.styleTag && this.styleTag.getAttribute("nonce") != HH && this.styleTag.setAttribute("nonce", HH)
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);