export const id = 298;
export const ids = [298];
export const modules = {
  41451: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => XU,
      e: () => YU,
      i: () => fU,
      k: () => HT,
      o: () => IU,
      p: () => kT,
      q: () => LU
    });
    var WT = mT(41459),
      zT = mT(41466),
      MT = mT(41482);
    class gT {
      constructor(TT, UT, mT, WT) {
        this.state = TT, this.pos = UT, this.explicit = mT, this.view = WT, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(TT) {
        let UT = (0, MT.jb)(this.state).resolveInner(this.pos, -1);
        for (; UT && TT.indexOf(UT.name) < 0;) UT = UT.parent;
        return UT ? {
          from: UT.from,
          to: this.pos,
          text: this.state.sliceDoc(UT.from, this.pos),
          type: UT.type
        } : null
      }
      matchBefore(TT) {
        let UT = this.state.doc.lineAt(this.pos),
          mT = Math.max(UT.from, this.pos - 250),
          WT = UT.text.slice(mT - UT.from, this.pos - UT.from),
          zT = WT.search(LT(TT, !1));
        return zT < 0 ? null : {
          from: mT + zT,
          to: this.pos,
          text: WT.slice(zT)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(TT, UT, mT) {
        "abort" == TT && this.abortListeners && (this.abortListeners.push(UT), mT && mT.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function nT(TT) {
      let UT = Object.keys(TT).join(""),
        mT = /\w/.test(UT);
      return mT && (UT = UT.replace(/\w/g, "")), `[${mT?"\\w":""}${UT.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function HT(TT) {
      let UT = TT.map((TT => "string" == typeof TT ? {
          label: TT
        } : TT)),
        [mT, WT] = UT.every((TT => /^\w+$/.test(TT.label))) ? [/\w*$/, /\w+$/] : function(TT) {
          let UT = Object.create(null),
            mT = Object.create(null);
          for (let {
              label: zT
            }
            of TT) {
            UT[zT[0]] = !0;
            for (let TT = 1; TT < zT.length; TT++) mT[zT[TT]] = !0
          }
          let WT = nT(UT) + nT(mT) + "*$";
          return [new RegExp("^" + WT), new RegExp(WT)]
        }(UT);
      return TT => {
        let zT = TT.matchBefore(WT);
        return zT || TT.explicit ? {
          from: zT ? zT.from : TT.pos,
          options: UT,
          validFor: mT
        } : null
      }
    }

    function kT(TT, UT) {
      return mT => {
        for (let UT = (0, MT.jb)(mT.state).resolveInner(mT.pos, -1); UT; UT = UT.parent) {
          if (TT.indexOf(UT.name) > -1) return null;
          if (UT.type.isTop) break
        }
        return UT(mT)
      }
    }
    class jT {
      constructor(TT, UT, mT, WT) {
        this.completion = TT, this.source = UT, this.match = mT, this.score = WT
      }
    }

    function lT(TT) {
      return TT.selection.main.from
    }

    function LT(TT, UT) {
      var mT;
      let {
        source: WT
      } = TT, zT = UT && "^" != WT[0], MT = "$" != WT[WT.length - 1];
      return zT || MT ? new RegExp(`${zT?"^":""}(?:${WT})${MT?"$":""}`, null !== (mT = TT.flags) && void 0 !== mT ? mT : TT.ignoreCase ? "i" : "") : TT
    }
    const pT = WT.b.define();

    function BT(TT, UT, mT, zT) {
      let {
        main: MT
      } = TT.selection, gT = mT - MT.from, nT = zT - MT.from;
      return {
        ...TT.changeByRange((HT => {
          if (HT != MT && mT != zT && TT.sliceDoc(HT.from + gT, HT.from + nT) != TT.sliceDoc(mT, zT)) return {
            range: HT
          };
          let kT = TT.toText(UT);
          return {
            changes: {
              from: HT.from + gT,
              to: zT == MT.from ? HT.to : HT.from + nT,
              insert: kT
            },
            range: WT.l.cursor(HT.from + gT + kT.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const ZT = new WeakMap;

    function cT(TT) {
      if (!Array.isArray(TT)) return TT;
      let UT = ZT.get(TT);
      return UT || ZT.set(TT, UT = HT(TT)), UT
    }
    const vT = WT.B.define(),
      fT = WT.B.define();
    class qT {
      constructor(TT) {
        this.pattern = TT, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let UT = 0; UT < TT.length;) {
          let mT = (0, WT.M)(TT, UT),
            zT = (0, WT.P)(mT);
          this.chars.push(mT);
          let MT = TT.slice(UT, UT + zT),
            gT = MT.toUpperCase();
          this.folded.push((0, WT.M)(gT == MT ? MT.toLowerCase() : gT, 0)), UT += zT
        }
        this.astral = TT.length != this.chars.length
      }
      ret(TT, UT) {
        return this.score = TT, this.matched = UT, this
      }
      match(TT) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (TT.length < this.pattern.length) return null;
        let {
          chars: UT,
          folded: mT,
          any: zT,
          precise: MT,
          byWord: gT
        } = this;
        if (1 == UT.length) {
          let zT = (0, WT.M)(TT, 0),
            MT = (0, WT.P)(zT),
            gT = MT == TT.length ? 0 : -100;
          if (zT == UT[0]);
          else {
            if (zT != mT[0]) return null;
            gT += -200
          }
          return this.ret(gT, [0, MT])
        }
        let nT = TT.indexOf(this.pattern);
        if (0 == nT) return this.ret(TT.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let HT = UT.length,
          kT = 0;
        if (nT < 0) {
          for (let MT = 0, gT = Math.min(TT.length, 200); MT < gT && kT < HT;) {
            let gT = (0, WT.M)(TT, MT);
            gT != UT[kT] && gT != mT[kT] || (zT[kT++] = MT), MT += (0, WT.P)(gT)
          }
          if (kT < HT) return null
        }
        let jT = 0,
          lT = 0,
          LT = !1,
          pT = 0,
          BT = -1,
          ZT = -1,
          cT = /[a-z]/.test(TT),
          vT = !0;
        for (let fT = 0, qT = Math.min(TT.length, 200), iT = 0; fT < qT && lT < HT;) {
          let zT = (0, WT.M)(TT, fT);
          nT < 0 && (jT < HT && zT == UT[jT] && (MT[jT++] = fT), pT < HT && (zT == UT[pT] || zT == mT[pT] ? (0 == pT && (BT = fT), ZT = fT + 1, pT++) : pT = 0));
          let kT, qT = zT < 255 ? zT >= 48 && zT <= 57 || zT >= 97 && zT <= 122 ? 2 : zT >= 65 && zT <= 90 ? 1 : 0 : (kT = (0, WT.$)(zT)) != kT.toLowerCase() ? 1 : kT != kT.toUpperCase() ? 2 : 0;
          (!fT || 1 == qT && cT || 0 == iT && 0 != qT) && (UT[lT] == zT || mT[lT] == zT && (LT = !0) ? gT[lT++] = fT : gT.length && (vT = !1)), iT = qT, fT += (0, WT.P)(zT)
        }
        return lT == HT && 0 == gT[0] && vT ? this.result((LT ? -200 : 0) - 100, gT, TT) : pT == HT && 0 == BT ? this.ret(-200 - TT.length + (ZT == TT.length ? 0 : -100), [0, ZT]) : nT > -1 ? this.ret(-700 - TT.length, [nT, nT + this.pattern.length]) : pT == HT ? this.ret(-900 - TT.length, [BT, ZT]) : lT == HT ? this.result((LT ? -200 : 0) - 100 - 700 + (vT ? 0 : -1100), gT, TT) : 2 == UT.length ? null : this.result((zT[0] ? -700 : 0) - 200 - 1100, zT, TT)
      }
      result(TT, UT, mT) {
        let zT = [],
          MT = 0;
        for (let gT of UT) {
          let TT = gT + (this.astral ? (0, WT.P)((0, WT.M)(mT, gT)) : 1);
          MT && zT[MT - 1] == gT ? zT[MT - 1] = TT : (zT[MT++] = gT, zT[MT++] = TT)
        }
        return this.ret(TT - mT.length, zT)
      }
    }
    class iT {
      constructor(TT) {
        this.pattern = TT, this.matched = [], this.score = 0, this.folded = TT.toLowerCase()
      }
      match(TT) {
        if (TT.length < this.pattern.length) return null;
        let UT = TT.slice(0, this.pattern.length),
          mT = UT == this.pattern ? 0 : UT.toLowerCase() == this.folded ? -200 : null;
        return null == mT ? null : (this.matched = [0, UT.length], this.score = mT + (TT.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const bT = WT.o.define({
      combine: TT => (0, WT.Q)(TT, {
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
        compareCompletions: (TT, UT) => (TT.sortText || TT.label).localeCompare(UT.sortText || UT.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (TT, UT) => TT && UT,
        closeOnBlur: (TT, UT) => TT && UT,
        icons: (TT, UT) => TT && UT,
        tooltipClass: (TT, UT) => mT => OT(TT(mT), UT(mT)),
        optionClass: (TT, UT) => mT => OT(TT(mT), UT(mT)),
        addToOptions: (TT, UT) => TT.concat(UT),
        filterStrict: (TT, UT) => TT || UT
      })
    });

    function OT(TT, UT) {
      return TT ? UT ? TT + " " + UT : TT : UT
    }

    function eT(TT, UT, mT, WT, MT, gT) {
      let nT, HT, kT = TT.textDirection == zT.e.RTL,
        jT = kT,
        lT = !1,
        LT = "top",
        pT = UT.left - MT.left,
        BT = MT.right - UT.right,
        ZT = WT.right - WT.left,
        cT = WT.bottom - WT.top;
      if (jT && pT < Math.min(ZT, BT) ? jT = !1 : !jT && BT < Math.min(ZT, pT) && (jT = !0), ZT <= (jT ? pT : BT)) nT = Math.max(MT.top, Math.min(mT.top, MT.bottom - cT)) - UT.top, HT = Math.min(400, jT ? pT : BT);
      else {
        lT = !0, HT = Math.min(400, (kT ? UT.right : MT.right - UT.left) - 30);
        let TT = MT.bottom - UT.bottom;
        TT >= cT || TT > UT.top ? nT = mT.bottom - UT.top : (LT = "bottom", nT = UT.bottom - mT.top)
      }
      return {
        style: `${LT}: ${nT/((UT.bottom-UT.top)/gT.offsetHeight)}px; max-width: ${HT/((UT.right-UT.left)/gT.offsetWidth)}px`,
        class: "cm-completionInfo-" + (lT ? kT ? "left-narrow" : "right-narrow" : jT ? "left" : "right")
      }
    }
    const YT = WT.B.define();

    function JT(TT, UT, mT) {
      if (TT <= mT) return {
        from: 0,
        to: TT
      };
      if (UT < 0 && (UT = 0), UT <= TT >> 1) {
        let TT = Math.floor(UT / mT);
        return {
          from: TT * mT,
          to: (TT + 1) * mT
        }
      }
      let WT = Math.floor((TT - UT) / mT);
      return {
        from: TT - (WT + 1) * mT,
        to: TT - WT * mT
      }
    }
    class xT {
      constructor(TT, UT, mT) {
        this.view = TT, this.stateField = UT, this.applyCompletion = mT, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: TT => this.placeInfo(TT),
          key: this
        }, this.space = null, this.currentClass = "";
        let WT = TT.state.field(UT),
          {
            options: zT,
            selected: MT
          } = WT.open,
          gT = TT.state.facet(bT);
        this.optionContent = function(TT) {
          let UT = TT.addToOptions.slice();
          return TT.icons && UT.push({
            render(TT) {
              let UT = document.createElement("div");
              return UT.classList.add("cm-completionIcon"), TT.type && UT.classList.add(...TT.type.split(/\s+/g).map((TT => "cm-completionIcon-" + TT))), UT.setAttribute("aria-hidden", "true"), UT
            },
            position: 20
          }), UT.push({
            render(TT, UT, mT, WT) {
              let zT = document.createElement("span");
              zT.className = "cm-completionLabel";
              let MT = TT.displayLabel || TT.label,
                gT = 0;
              for (let nT = 0; nT < WT.length;) {
                let TT = WT[nT++],
                  UT = WT[nT++];
                TT > gT && zT.appendChild(document.createTextNode(MT.slice(gT, TT)));
                let mT = zT.appendChild(document.createElement("span"));
                mT.appendChild(document.createTextNode(MT.slice(TT, UT))), mT.className = "cm-completionMatchedText", gT = UT
              }
              return gT < MT.length && zT.appendChild(document.createTextNode(MT.slice(gT))), zT
            },
            position: 50
          }, {
            render(TT) {
              if (!TT.detail) return null;
              let UT = document.createElement("span");
              return UT.className = "cm-completionDetail", UT.textContent = TT.detail, UT
            },
            position: 80
          }), UT.sort(((TT, UT) => TT.position - UT.position)).map((TT => TT.render))
        }(gT), this.optionClass = gT.optionClass, this.tooltipClass = gT.tooltipClass, this.range = JT(zT.length, MT, gT.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(TT.state), this.dom.addEventListener("mousedown", (mT => {
          let {
            options: WT
          } = TT.state.field(UT).open;
          for (let UT, zT = mT.target; zT && zT != this.dom; zT = zT.parentNode)
            if ("LI" == zT.nodeName && (UT = /-(\d+)$/.exec(zT.id)) && +UT[1] < WT.length) return this.applyCompletion(TT, WT[+UT[1]]), void mT.preventDefault();
          if (mT.target == this.list) {
            let UT = this.list.classList.contains("cm-completionListIncompleteTop") && mT.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && mT.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != UT && (TT.dispatch({
              effects: YT.of(UT)
            }), mT.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (UT => {
          let mT = TT.state.field(this.stateField, !1);
          mT && mT.tooltip && TT.state.facet(bT).closeOnBlur && UT.relatedTarget != TT.contentDOM && TT.dispatch({
            effects: fT.of(null)
          })
        })), this.showOptions(zT, WT.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(TT, UT) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(TT, UT, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(TT) {
        var UT;
        let mT = TT.state.field(this.stateField),
          WT = TT.startState.field(this.stateField);
        if (this.updateTooltipClass(TT.state), mT != WT) {
          let {
            options: zT,
            selected: MT,
            disabled: gT
          } = mT.open;
          WT.open && WT.open.options == zT || (this.range = JT(zT.length, MT, TT.state.facet(bT).maxRenderedOptions), this.showOptions(zT, mT.id)), this.updateSel(), gT != (null === (UT = WT.open) || void 0 === UT ? void 0 : UT.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!gT)
        }
      }
      updateTooltipClass(TT) {
        let UT = this.tooltipClass(TT);
        if (UT != this.currentClass) {
          for (let TT of this.currentClass.split(" ")) TT && this.dom.classList.remove(TT);
          for (let TT of UT.split(" ")) TT && this.dom.classList.add(TT);
          this.currentClass = UT
        }
      }
      positioned(TT) {
        this.space = TT, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let TT = this.view.state.field(this.stateField),
          UT = TT.open;
        (UT.selected > -1 && UT.selected < this.range.from || UT.selected >= this.range.to) && (this.range = JT(UT.options.length, UT.selected, this.view.state.facet(bT).maxRenderedOptions), this.showOptions(UT.options, TT.id));
        let mT = this.updateSelectedOption(UT.selected);
        if (mT) {
          this.destroyInfo();
          let {
            completion: WT
          } = UT.options[UT.selected], {
            info: MT
          } = WT;
          if (!MT) return;
          let gT = "string" === typeof MT ? document.createTextNode(MT) : MT(WT);
          if (!gT) return;
          "then" in gT ? gT.then((UT => {
            UT && this.view.state.field(this.stateField, !1) == TT && this.addInfoPane(UT, WT)
          })).catch((TT => (0, zT.ab)(this.view.state, TT, "completion info"))) : (this.addInfoPane(gT, WT), mT.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(TT, UT) {
        this.destroyInfo();
        let mT = this.info = document.createElement("div");
        if (mT.className = "cm-tooltip cm-completionInfo", mT.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != TT.nodeType) mT.appendChild(TT), this.infoDestroy = null;
        else {
          let {
            dom: UT,
            destroy: WT
          } = TT;
          mT.appendChild(UT), this.infoDestroy = WT || null
        }
        this.dom.appendChild(mT), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(TT) {
        let UT = null;
        for (let mT = this.list.firstChild, WT = this.range.from; mT; mT = mT.nextSibling, WT++) "LI" == mT.nodeName && mT.id ? WT == TT ? mT.hasAttribute("aria-selected") || (mT.setAttribute("aria-selected", "true"), UT = mT) : mT.hasAttribute("aria-selected") && (mT.removeAttribute("aria-selected"), mT.removeAttribute("aria-describedby")) : WT--;
        return UT && function(TT, UT) {
          let mT = TT.getBoundingClientRect(),
            WT = UT.getBoundingClientRect(),
            zT = mT.height / TT.offsetHeight;
          WT.top < mT.top ? TT.scrollTop -= (mT.top - WT.top) / zT : WT.bottom > mT.bottom && (TT.scrollTop += (WT.bottom - mT.bottom) / zT)
        }(this.list, UT), UT
      }
      measureInfo() {
        let TT = this.dom.querySelector("[aria-selected]");
        if (!TT || !this.info) return null;
        let UT = this.dom.getBoundingClientRect(),
          mT = this.info.getBoundingClientRect(),
          WT = TT.getBoundingClientRect(),
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
        return WT.top > Math.min(zT.bottom, UT.bottom) - 10 || WT.bottom < Math.max(zT.top, UT.top) + 10 ? null : this.view.state.facet(bT).positionInfo(this.view, UT, WT, mT, zT, this.dom)
      }
      placeInfo(TT) {
        this.info && (TT ? (TT.style && (this.info.style.cssText = TT.style), this.info.className = "cm-tooltip cm-completionInfo " + (TT.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(TT, UT, mT) {
        const WT = document.createElement("ul");
        WT.id = UT, WT.setAttribute("role", "listbox"), WT.setAttribute("aria-expanded", "true"), WT.setAttribute("aria-label", this.view.state.phrase("Completions")), WT.addEventListener("mousedown", (TT => {
          TT.target == WT && TT.preventDefault()
        }));
        let zT = null;
        for (let MT = mT.from; MT < mT.to; MT++) {
          let {
            completion: gT,
            match: nT
          } = TT[MT], {
            section: HT
          } = gT;
          if (HT) {
            let TT = "string" == typeof HT ? HT : HT.name;
            if (TT != zT && (MT > mT.from || 0 == mT.from))
              if (zT = TT, "string" != typeof HT && HT.header) WT.appendChild(HT.header(HT));
              else {
                WT.appendChild(document.createElement("completion-section")).textContent = TT
              }
          }
          const kT = WT.appendChild(document.createElement("li"));
          kT.id = UT + "-" + MT, kT.setAttribute("role", "option");
          let jT = this.optionClass(gT);
          jT && (kT.className = jT);
          for (let TT of this.optionContent) {
            let UT = TT(gT, this.view.state, this.view, nT);
            UT && kT.appendChild(UT)
          }
        }
        return mT.from && WT.classList.add("cm-completionListIncompleteTop"), mT.to < TT.length && WT.classList.add("cm-completionListIncompleteBottom"), WT
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function dT(TT, UT) {
      return mT => new xT(mT, TT, UT)
    }

    function wT(TT) {
      return 100 * (TT.boost || 0) + (TT.apply ? 10 : 0) + (TT.info ? 5 : 0) + (TT.type ? 1 : 0)
    }
    class tT {
      constructor(TT, UT, mT, WT, zT, MT) {
        this.options = TT, this.attrs = UT, this.tooltip = mT, this.timestamp = WT, this.selected = zT, this.disabled = MT
      }
      setSelected(TT, UT) {
        return TT == this.selected || TT >= this.options.length ? this : new tT(this.options, IT(UT, TT), this.tooltip, this.timestamp, TT, this.disabled)
      }
      static build(TT, UT, mT, WT, zT, MT) {
        if (WT && !MT && TT.some((TT => TT.isPending))) return WT.setDisabled();
        let gT = function(TT, UT) {
          let mT = [],
            WT = null,
            zT = null,
            MT = TT => {
              mT.push(TT);
              let {
                section: UT
              } = TT.completion;
              if (UT) {
                WT || (WT = []);
                let TT = "string" == typeof UT ? UT : UT.name;
                WT.some((UT => UT.name == TT)) || WT.push("string" == typeof UT ? {
                  name: TT
                } : UT)
              }
            },
            gT = UT.facet(bT);
          for (let lT of TT)
            if (lT.hasResult()) {
              let TT = lT.result.getMatch;
              if (!1 === lT.result.filter)
                for (let UT of lT.result.options) MT(new jT(UT, lT.source, TT ? TT(UT) : [], 1e9 - mT.length));
              else {
                let mT, WT = UT.sliceDoc(lT.from, lT.to),
                  nT = gT.filterStrict ? new iT(WT) : new qT(WT);
                for (let UT of lT.result.options)
                  if (mT = nT.match(UT.label)) {
                    let WT = UT.displayLabel ? TT ? TT(UT, mT.matched) : [] : mT.matched,
                      gT = mT.score + (UT.boost || 0);
                    if (MT(new jT(UT, lT.source, WT, gT)), "object" == typeof UT.section && "dynamic" === UT.section.rank) {
                      let {
                        name: TT
                      } = UT.section;
                      zT || (zT = Object.create(null)), zT[TT] = Math.max(gT, zT[TT] || -1e9)
                    }
                  }
              }
            } if (WT) {
            let TT = Object.create(null),
              UT = 0,
              MT = (TT, UT) => ("dynamic" === TT.rank && "dynamic" === UT.rank ? zT[UT.name] - zT[TT.name] : 0) || ("number" == typeof TT.rank ? TT.rank : 1e9) - ("number" == typeof UT.rank ? UT.rank : 1e9) || (TT.name < UT.name ? -1 : 1);
            for (let mT of WT.sort(MT)) UT -= 1e5, TT[mT.name] = UT;
            for (let WT of mT) {
              let {
                section: UT
              } = WT.completion;
              UT && (WT.score += TT["string" == typeof UT ? UT : UT.name])
            }
          }
          let nT = [],
            HT = null,
            kT = gT.compareCompletions;
          for (let jT of mT.sort(((TT, UT) => UT.score - TT.score || kT(TT.completion, UT.completion)))) {
            let TT = jT.completion;
            !HT || HT.label != TT.label || HT.detail != TT.detail || null != HT.type && null != TT.type && HT.type != TT.type || HT.apply != TT.apply || HT.boost != TT.boost ? nT.push(jT) : wT(jT.completion) > wT(HT) && (nT[nT.length - 1] = jT), HT = jT.completion
          }
          return nT
        }(TT, UT);
        if (!gT.length) return WT && TT.some((TT => TT.isPending)) ? WT.setDisabled() : null;
        let nT = UT.facet(bT).selectOnOpen ? 0 : -1;
        if (WT && WT.selected != nT && -1 != WT.selected) {
          let TT = WT.options[WT.selected].completion;
          for (let UT = 0; UT < gT.length; UT++)
            if (gT[UT].completion == TT) {
              nT = UT;
              break
            }
        }
        return new tT(gT, IT(mT, nT), {
          pos: TT.reduce(((TT, UT) => UT.hasResult() ? Math.min(TT, UT.from) : TT), 1e8),
          create: rT,
          above: zT.aboveCursor
        }, WT ? WT.timestamp : Date.now(), nT, !1)
      }
      map(TT) {
        return new tT(this.options, this.attrs, {
          ...this.tooltip,
          pos: TT.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new tT(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class aT {
      constructor(TT, UT, mT) {
        this.active = TT, this.id = UT, this.open = mT
      }
      static start() {
        return new aT(QT, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(TT) {
        let {
          state: UT
        } = TT, mT = UT.facet(bT), WT = (mT.override || UT.languageDataAt("autocomplete", lT(UT)).map(cT)).map((UT => (this.active.find((TT => TT.source == UT)) || new FT(UT, this.active.some((TT => 0 != TT.state)) ? 1 : 0)).update(TT, mT)));
        WT.length == this.active.length && WT.every(((TT, UT) => TT == this.active[UT])) && (WT = this.active);
        let zT = this.open,
          MT = TT.effects.some((TT => TT.is(VT)));
        zT && TT.docChanged && (zT = zT.map(TT.changes)), TT.selection || WT.some((UT => UT.hasResult() && TT.changes.touchesRange(UT.from, UT.to))) || ! function(TT, UT) {
          if (TT == UT) return !0;
          for (let mT = 0, WT = 0;;) {
            for (; mT < TT.length && !TT[mT].hasResult();) mT++;
            for (; WT < UT.length && !UT[WT].hasResult();) WT++;
            let zT = mT == TT.length,
              MT = WT == UT.length;
            if (zT || MT) return zT == MT;
            if (TT[mT++].result != UT[WT++].result) return !1
          }
        }(WT, this.active) || MT ? zT = tT.build(WT, UT, this.id, zT, mT, MT) : zT && zT.disabled && !WT.some((TT => TT.isPending)) && (zT = null), !zT && WT.every((TT => !TT.isPending)) && WT.some((TT => TT.hasResult())) && (WT = WT.map((TT => TT.hasResult() ? new FT(TT.source, 0) : TT)));
        for (let gT of TT.effects) gT.is(YT) && (zT = zT && zT.setSelected(gT.value, this.id));
        return WT == this.active && zT == this.open ? this : new aT(WT, this.id, zT)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? yT : XT
      }
    }
    const yT = {
        "aria-autocomplete": "list"
      },
      XT = {};

    function IT(TT, UT) {
      let mT = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": TT
      };
      return UT > -1 && (mT["aria-activedescendant"] = TT + "-" + UT), mT
    }
    const QT = [];

    function sT(TT, UT) {
      if (TT.isUserEvent("input.complete")) {
        let mT = TT.annotation(pT);
        if (mT && UT.activateOnCompletion(mT)) return 12
      }
      let mT = TT.isUserEvent("input.type");
      return mT && UT.activateOnTyping ? 5 : mT ? 1 : TT.isUserEvent("delete.backward") ? 2 : TT.selection ? 8 : TT.docChanged ? 16 : 0
    }
    class FT {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = TT, this.state = UT, this.explicit = mT
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(TT, UT) {
        let mT = sT(TT, UT),
          WT = this;
        (8 & mT || 16 & mT && this.touches(TT)) && (WT = new FT(WT.source, 0)), 4 & mT && 0 == WT.state && (WT = new FT(this.source, 1)), WT = WT.updateFor(TT, mT);
        for (let zT of TT.effects)
          if (zT.is(vT)) WT = new FT(WT.source, 1, zT.value);
          else if (zT.is(fT)) WT = new FT(WT.source, 0);
        else if (zT.is(VT))
          for (let TT of zT.value) TT.source == WT.source && (WT = TT);
        return WT
      }
      updateFor(TT, UT) {
        return this.map(TT.changes)
      }
      map(TT) {
        return this
      }
      touches(TT) {
        return TT.changes.touchesRange(lT(TT.state))
      }
    }
    class PT extends FT {
      constructor(TT, UT, mT, WT, zT, MT) {
        super(TT, 3, UT), this.limit = mT, this.result = WT, this.from = zT, this.to = MT
      }
      hasResult() {
        return !0
      }
      updateFor(TT, UT) {
        var mT;
        if (!(3 & UT)) return this.map(TT.changes);
        let WT = this.result;
        WT.map && !TT.changes.empty && (WT = WT.map(WT, TT.changes));
        let zT = TT.changes.mapPos(this.from),
          MT = TT.changes.mapPos(this.to, 1),
          nT = lT(TT.state);
        if (nT > MT || !WT || 2 & UT && (lT(TT.startState) == this.from || nT < this.limit)) return new FT(this.source, 4 & UT ? 1 : 0);
        let HT = TT.changes.mapPos(this.limit);
        return function(TT, UT, mT, WT) {
          if (!TT) return !1;
          let zT = UT.sliceDoc(mT, WT);
          return "function" == typeof TT ? TT(zT, mT, WT, UT) : LT(TT, !0).test(zT)
        }(WT.validFor, TT.state, zT, MT) ? new PT(this.source, this.explicit, HT, WT, zT, MT) : WT.update && (WT = WT.update(WT, zT, MT, new gT(TT.state, nT, !1))) ? new PT(this.source, this.explicit, HT, WT, WT.from, null !== (mT = WT.to) && void 0 !== mT ? mT : lT(TT.state)) : new FT(this.source, 1, this.explicit)
      }
      map(TT) {
        if (TT.empty) return this;
        return (this.result.map ? this.result.map(this.result, TT) : this.result) ? new PT(this.source, this.explicit, TT.mapPos(this.limit), this.result, TT.mapPos(this.from), TT.mapPos(this.to, 1)) : new FT(this.source, 0)
      }
      touches(TT) {
        return TT.changes.touchesRange(this.from, this.to)
      }
    }
    const VT = WT.B.define({
        map: (TT, UT) => TT.map((TT => TT.map(UT)))
      }),
      uT = WT.E.define({
        create: () => aT.start(),
        update: (TT, UT) => TT.update(UT),
        provide: TT => [zT.pb.from(TT, (TT => TT.tooltip)), zT.i.contentAttributes.from(TT, (TT => TT.attrs))]
      });

    function CT(TT, UT) {
      const mT = UT.completion.apply || UT.completion.label;
      let WT = TT.state.field(uT).active.find((TT => TT.source == UT.source));
      return WT instanceof PT && ("string" == typeof mT ? TT.dispatch({
        ...BT(TT.state, mT, WT.from, WT.to),
        annotations: pT.of(UT.completion)
      }) : mT(TT, UT.completion, WT.from, WT.to), !0)
    }
    const rT = dT(uT, CT);

    function KT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return mT => {
        let WT = mT.state.field(uT, !1);
        if (!WT || !WT.open || WT.open.disabled || Date.now() - WT.open.timestamp < mT.state.facet(bT).interactionDelay) return !1;
        let MT, gT = 1;
        "page" == UT && (MT = (0, zT.J)(mT, WT.open.tooltip)) && (gT = Math.max(2, Math.floor(MT.dom.offsetHeight / MT.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: nT
        } = WT.open.options, HT = WT.open.selected > -1 ? WT.open.selected + gT * (TT ? 1 : -1) : TT ? 0 : nT - 1;
        return HT < 0 ? HT = "page" == UT ? 0 : nT - 1 : HT >= nT && (HT = "page" == UT ? nT - 1 : 0), mT.dispatch({
          effects: YT.of(HT)
        }), !0
      }
    }
    const ST = TT => !!TT.state.field(uT, !1) && (TT.dispatch({
      effects: vT.of(!0)
    }), !0);
    class GT {
      constructor(TT, UT) {
        this.active = TT, this.context = UT, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const NT = zT.q.fromClass(class {
        constructor(TT) {
          this.view = TT, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let UT of TT.state.field(uT).active) UT.isPending && this.startQuery(UT)
        }
        update(TT) {
          let UT = TT.state.field(uT),
            mT = TT.state.facet(bT);
          if (!TT.selectionSet && !TT.docChanged && TT.startState.field(uT) == UT) return;
          let WT = TT.transactions.some((TT => {
            let UT = sT(TT, mT);
            return 8 & UT || (TT.selection || TT.docChanged) && !(3 & UT)
          }));
          for (let nT = 0; nT < this.running.length; nT++) {
            let UT = this.running[nT];
            if (WT || UT.context.abortOnDocChange && TT.docChanged || UT.updates.length + TT.transactions.length > 50 && Date.now() - UT.time > 1e3) {
              for (let TT of UT.context.abortListeners) try {
                TT()
              } catch (gT) {
                (0, zT.ab)(this.view.state, gT)
              }
              UT.context.abortListeners = null, this.running.splice(nT--, 1)
            } else UT.updates.push(...TT.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), TT.transactions.some((TT => TT.effects.some((TT => TT.is(vT))))) && (this.pendingStart = !0);
          let MT = this.pendingStart ? 50 : mT.activateOnTypingDelay;
          if (this.debounceUpdate = UT.active.some((TT => TT.isPending && !this.running.some((UT => UT.active.source == TT.source)))) ? setTimeout((() => this.startUpdate()), MT) : -1, 0 != this.composing)
            for (let zT of TT.transactions) zT.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && zT.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: TT
          } = this.view, UT = TT.field(uT);
          for (let mT of UT.active) mT.isPending && !this.running.some((TT => TT.active.source == mT.source)) && this.startQuery(mT);
          this.running.length && UT.open && UT.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(bT).updateSyncTime))
        }
        startQuery(TT) {
          let {
            state: UT
          } = this.view, mT = lT(UT), WT = new gT(UT, mT, TT.explicit, this.view), MT = new GT(TT, WT);
          this.running.push(MT), Promise.resolve(TT.source(WT)).then((TT => {
            MT.context.aborted || (MT.done = TT || null, this.scheduleAccept())
          }), (TT => {
            this.view.dispatch({
              effects: fT.of(null)
            }), (0, zT.ab)(this.view.state, TT)
          }))
        }
        scheduleAccept() {
          this.running.every((TT => void 0 !== TT.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(bT).updateSyncTime))
        }
        accept() {
          var TT;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let UT = [],
            mT = this.view.state.facet(bT),
            WT = this.view.state.field(uT);
          for (let zT = 0; zT < this.running.length; zT++) {
            let MT = this.running[zT];
            if (void 0 === MT.done) continue;
            if (this.running.splice(zT--, 1), MT.done) {
              let WT = lT(MT.updates.length ? MT.updates[0].startState : this.view.state),
                zT = Math.min(WT, MT.done.from + (MT.active.explicit ? 0 : 1)),
                gT = new PT(MT.active.source, MT.active.explicit, zT, MT.done, MT.done.from, null !== (TT = MT.done.to) && void 0 !== TT ? TT : WT);
              for (let TT of MT.updates) gT = gT.update(TT, mT);
              if (gT.hasResult()) {
                UT.push(gT);
                continue
              }
            }
            let gT = WT.active.find((TT => TT.source == MT.active.source));
            if (gT && gT.isPending)
              if (null == MT.done) {
                let TT = new FT(MT.active.source, 0);
                for (let UT of MT.updates) TT = TT.update(UT, mT);
                TT.isPending || UT.push(TT)
              } else this.startQuery(gT)
          }(UT.length || WT.open && WT.open.disabled) && this.view.dispatch({
            effects: VT.of(UT)
          })
        }
      }, {
        eventHandlers: {
          blur(TT) {
            let UT = this.view.state.field(uT, !1);
            if (UT && UT.tooltip && this.view.state.facet(bT).closeOnBlur) {
              let mT = UT.open && (0, zT.J)(this.view, UT.open.tooltip);
              mT && mT.dom.contains(TT.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: fT.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: vT.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      ET = "object" == typeof navigator && /Win/.test(navigator.platform),
      hT = WT.u.highest(zT.i.domEventHandlers({
        keydown(TT, UT) {
          let mT = UT.state.field(uT, !1);
          if (!mT || !mT.open || mT.open.disabled || mT.open.selected < 0 || TT.key.length > 1 || TT.ctrlKey && (!ET || !TT.altKey) || TT.metaKey) return !1;
          let WT = mT.open.options[mT.open.selected],
            zT = mT.active.find((TT => TT.source == WT.source)),
            MT = WT.completion.commitCharacters || zT.result.commitCharacters;
          return MT && MT.indexOf(TT.key) > -1 && CT(UT, WT), !1
        }
      })),
      DT = zT.i.baseTheme({
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
    class oT {
      constructor(TT, UT, mT, WT) {
        this.field = TT, this.line = UT, this.from = mT, this.to = WT
      }
    }
    class AT {
      constructor(TT, UT, mT) {
        this.field = TT, this.from = UT, this.to = mT
      }
      map(TT) {
        let UT = TT.mapPos(this.from, -1, WT.q.TrackDel),
          mT = TT.mapPos(this.to, 1, WT.q.TrackDel);
        return null == UT || null == mT ? null : new AT(this.field, UT, mT)
      }
    }
    class RT {
      constructor(TT, UT) {
        this.lines = TT, this.fieldPositions = UT
      }
      instantiate(TT, UT) {
        let mT = [],
          WT = [UT],
          zT = TT.doc.lineAt(UT),
          gT = /^\s*/.exec(zT.text)[0];
        for (let HT of this.lines) {
          if (mT.length) {
            let mT = gT,
              zT = /^\t*/.exec(HT)[0].length;
            for (let UT = 0; UT < zT; UT++) mT += TT.facet(MT.X);
            WT.push(UT + mT.length - zT), HT = mT + HT.slice(zT)
          }
          mT.push(HT), UT += HT.length + 1
        }
        let nT = this.fieldPositions.map((TT => new AT(TT.field, WT[TT.line] + TT.from, WT[TT.line] + TT.to)));
        return {
          text: mT,
          hZ: nT
        }
      }
      static parse(TT) {
        let UT, mT = [],
          WT = [],
          zT = [];
        for (let MT of TT.split(/\r\n?|\n/)) {
          for (; UT = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(MT);) {
            let TT = UT[1] ? +UT[1] : null,
              gT = UT[2] || UT[3] || "",
              nT = -1,
              HT = gT.replace(/\\[{}]/g, (TT => TT[1]));
            for (let UT = 0; UT < mT.length; UT++)(null != TT ? mT[UT].seq == TT : HT && mT[UT].name == HT) && (nT = UT);
            if (nT < 0) {
              let UT = 0;
              for (; UT < mT.length && (null == TT || null != mT[UT].seq && mT[UT].seq < TT);) UT++;
              mT.splice(UT, 0, {
                seq: TT,
                name: HT
              }), nT = UT;
              for (let TT of zT) TT.field >= nT && TT.field++
            }
            for (let mT of zT)
              if (mT.line == WT.length && mT.from > UT.index) {
                let TT = UT[2] ? 3 + (UT[1] || "").length : 2;
                mT.from -= TT, mT.to -= TT
              } zT.push(new oT(nT, WT.length, UT.index, UT.index + HT.length)), MT = MT.slice(0, UT.index) + gT + MT.slice(UT.index + UT[0].length)
          }
          MT = MT.replace(/\\([{}])/g, ((TT, UT, mT) => {
            for (let MT of zT) MT.line == WT.length && MT.from > mT && (MT.from--, MT.to--);
            return UT
          })), WT.push(MT)
        }
        return new RT(WT, zT)
      }
    }
    let TU = zT.c.widget({
        widget: new class extends zT.u {
          toDOM() {
            let TT = document.createElement("span");
            return TT.className = "cm-snippetFieldPosition", TT
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      UU = zT.c.mark({
        class: "cm-snippetField"
      });
    class mU {
      constructor(TT, UT) {
        this.hZ = TT, this.active = UT, this.deco = zT.c.set(TT.map((TT => (TT.from == TT.to ? TU : UU).range(TT.from, TT.to))), !0)
      }
      map(TT) {
        let UT = [];
        for (let mT of this.hZ) {
          let WT = mT.map(TT);
          if (!WT) return null;
          UT.push(WT)
        }
        return new mU(UT, this.active)
      }
      selectionInsideField(TT) {
        return TT.hZ.every((TT => this.hZ.some((UT => UT.field == this.active && UT.from <= TT.from && UT.to >= TT.to))))
      }
    }
    const WU = WT.B.define({
        map: (TT, UT) => TT && TT.map(UT)
      }),
      zU = WT.B.define(),
      MU = WT.E.define({
        create: () => null,
        update(TT, UT) {
          for (let mT of UT.effects) {
            if (mT.is(WU)) return mT.value;
            if (mT.is(zU) && TT) return new mU(TT.hZ, mT.value)
          }
          return TT && UT.docChanged && (TT = TT.map(UT.changes)), TT && UT.selection && !TT.selectionInsideField(UT.selection) && (TT = null), TT
        },
        provide: TT => zT.i.HW.from(TT, (TT => TT ? TT.deco : zT.c.none))
      });

    function gU(TT, UT) {
      return WT.l.create(TT.filter((TT => TT.field == UT)).map((TT => WT.l.range(TT.from, TT.to))))
    }

    function nU(TT) {
      let UT = RT.parse(TT);
      return (TT, mT, zT, MT) => {
        let {
          text: gT,
          hZ: nT
        } = UT.instantiate(TT.state, zT), {
          main: HT
        } = TT.state.selection, kT = {
          changes: {
            from: zT,
            to: MT == HT.from ? HT.to : MT,
            insert: WT.I.of(gT)
          },
          scrollIntoView: !0,
          annotations: mT ? [pT.of(mT), WT.K.userEvent.of("input.complete")] : void 0
        };
        if (nT.length && (kT.selection = gU(nT, 0)), nT.some((TT => TT.field > 0))) {
          let UT = new mU(nT, 0),
            mT = kT.effects = [WU.of(UT)];
          void 0 === TT.state.field(MU, !1) && mT.push(WT.B.appendConfig.of([MU, lU, pU, DT]))
        }
        TT.dispatch(TT.state.update(kT))
      }
    }

    function HU(TT) {
      return UT => {
        let {
          state: mT,
          dispatch: WT
        } = UT, zT = mT.field(MU, !1);
        if (!zT || TT < 0 && 0 == zT.active) return !1;
        let MT = zT.active + TT,
          gT = TT > 0 && !zT.hZ.some((UT => UT.field == MT + TT));
        return WT(mT.update({
          selection: gU(zT.hZ, MT),
          effects: WU.of(gT ? null : new mU(zT.hZ, MT)),
          scrollIntoView: !0
        })), !0
      }
    }
    const kU = [{
        key: "Tab",
        run: HU(1),
        shift: HU(-1)
      }, {
        key: "Escape",
        run: TT => {
          let {
            state: UT,
            dispatch: mT
          } = TT;
          return !!UT.field(MU, !1) && (mT(UT.update({
            effects: WU.of(null)
          })), !0)
        }
      }],
      jU = WT.o.define({
        combine: TT => TT.length ? TT[0] : kU
      }),
      lU = WT.u.highest(zT.W.compute([jU], (TT => TT.facet(jU))));

    function LU(TT, UT) {
      return {
        ...UT,
        apply: nU(TT)
      }
    }
    const pU = zT.i.domEventHandlers({
      mousedown(TT, UT) {
        let mT, WT = UT.state.field(MU, !1);
        if (!WT || null == (mT = UT.posAtCoords({
            x: TT.clientX,
            y: TT.clientY
          }))) return !1;
        let zT = WT.hZ.find((TT => TT.from <= mT && TT.to >= mT));
        return !(!zT || zT.field == WT.active) && (UT.dispatch({
          selection: gU(WT.hZ, zT.field),
          effects: WU.of(WT.hZ.some((TT => TT.field > zT.field)) ? new mU(WT.hZ, zT.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const BU = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      ZU = WT.B.define({
        map(TT, UT) {
          let mT = UT.mapPos(TT, -1, WT.q.TrackAfter);
          return null == mT ? void 0 : mT
        }
      }),
      cU = new class extends WT.A {};
    cU.startSide = 1, cU.endSide = -1;
    const vU = WT.E.define({
      create: () => WT.x.empty,
      update(TT, UT) {
        if (TT = TT.map(UT.changes), UT.selection) {
          let mT = UT.state.doc.lineAt(UT.selection.main.head);
          TT = TT.update({
            filter: TT => TT >= mT.from && TT <= mT.to
          })
        }
        for (let mT of UT.effects) mT.is(ZU) && (TT = TT.update({
          add: [cU.range(mT.value, mT.value + 1)]
        }));
        return TT
      }
    });

    function fU() {
      return [eU, vU]
    }
    const qU = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function iU(TT) {
      for (let UT = 0; UT < 16; UT += 2)
        if (qU.charCodeAt(UT) == TT) return qU.charAt(UT + 1);
      return (0, WT.$)(TT < 128 ? TT : TT + 1)
    }

    function bU(TT, UT) {
      return TT.languageDataAt("closeBrackets", UT)[0] || BU
    }
    const OU = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      eU = zT.i.inputHandler.of(((TT, UT, mT, zT) => {
        if ((OU ? TT.composing : TT.compositionStarted) || TT.state.readOnly) return !1;
        let MT = TT.state.selection.main;
        if (zT.length > 2 || 2 == zT.length && 1 == (0, WT.P)((0, WT.M)(zT, 0)) || UT != MT.from || mT != MT.to) return !1;
        let gT = function(TT, UT) {
          let mT = bU(TT, TT.selection.main.head),
            zT = mT.brackets || BU.brackets;
          for (let MT of zT) {
            let gT = iU((0, WT.M)(MT, 0));
            if (UT == MT) return gT == MT ? tU(TT, MT, zT.indexOf(MT + MT + MT) > -1, mT) : dU(TT, MT, gT, mT.before || BU.before);
            if (UT == gT && JU(TT, TT.selection.main.from)) return wU(TT, MT, gT)
          }
          return null
        }(TT.state, zT);
        return !!gT && (TT.dispatch(gT), !0)
      })),
      YU = [{
        key: "Backspace",
        run: TT => {
          let {
            state: UT,
            dispatch: mT
          } = TT;
          if (UT.readOnly) return !1;
          let zT = bU(UT, UT.selection.main.head).brackets || BU.brackets,
            MT = null,
            gT = UT.changeByRange((TT => {
              if (TT.empty) {
                let mT = function(TT, UT) {
                  let mT = TT.sliceString(UT - 2, UT);
                  return (0, WT.P)((0, WT.M)(mT, 0)) == mT.length ? mT : mT.slice(1)
                }(UT.doc, TT.head);
                for (let MT of zT)
                  if (MT == mT && xU(UT.doc, TT.head) == iU((0, WT.M)(MT, 0))) return {
                    changes: {
                      from: TT.head - MT.length,
                      to: TT.head + MT.length
                    },
                    range: WT.l.cursor(TT.head - MT.length)
                  }
              }
              return {
                range: MT = TT
              }
            }));
          return MT || mT(UT.update(gT, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !MT
        }
      }];

    function JU(TT, UT) {
      let mT = !1;
      return TT.field(vU).between(0, TT.doc.length, (TT => {
        TT == UT && (mT = !0)
      })), mT
    }

    function xU(TT, UT) {
      let mT = TT.sliceString(UT, UT + 2);
      return mT.slice(0, (0, WT.P)((0, WT.M)(mT, 0)))
    }

    function dU(TT, UT, mT, zT) {
      let MT = null,
        gT = TT.changeByRange((gT => {
          if (!gT.empty) return {
            changes: [{
              insert: UT,
              from: gT.from
            }, {
              insert: mT,
              from: gT.to
            }],
            effects: ZU.of(gT.to + UT.length),
            range: WT.l.range(gT.anchor + UT.length, gT.head + UT.length)
          };
          let nT = xU(TT.doc, gT.head);
          return !nT || /\s/.test(nT) || zT.indexOf(nT) > -1 ? {
            changes: {
              insert: UT + mT,
              from: gT.head
            },
            effects: ZU.of(gT.head + UT.length),
            range: WT.l.cursor(gT.head + UT.length)
          } : {
            range: MT = gT
          }
        }));
      return MT ? null : TT.update(gT, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function wU(TT, UT, mT) {
      let zT = null,
        MT = TT.changeByRange((UT => UT.empty && xU(TT.doc, UT.head) == mT ? {
          changes: {
            from: UT.head,
            to: UT.head + mT.length,
            insert: mT
          },
          range: WT.l.cursor(UT.head + mT.length)
        } : zT = {
          range: UT
        }));
      return zT ? null : TT.update(MT, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function tU(TT, UT, mT, zT) {
      let gT = zT.stringPrefixes || BU.stringPrefixes,
        nT = null,
        HT = TT.changeByRange((zT => {
          if (!zT.empty) return {
            changes: [{
              insert: UT,
              from: zT.from
            }, {
              insert: UT,
              from: zT.to
            }],
            effects: ZU.of(zT.to + UT.length),
            range: WT.l.range(zT.anchor + UT.length, zT.head + UT.length)
          };
          let HT, kT = zT.head,
            jT = xU(TT.doc, kT);
          if (jT == UT) {
            if (aU(TT, kT)) return {
              changes: {
                insert: UT + UT,
                from: kT
              },
              effects: ZU.of(kT + UT.length),
              range: WT.l.cursor(kT + UT.length)
            };
            if (JU(TT, kT)) {
              let zT = mT && TT.sliceDoc(kT, kT + 3 * UT.length) == UT + UT + UT ? UT + UT + UT : UT;
              return {
                changes: {
                  from: kT,
                  to: kT + zT.length,
                  insert: zT
                },
                range: WT.l.cursor(kT + zT.length)
              }
            }
          } else {
            if (mT && TT.sliceDoc(kT - 2 * UT.length, kT) == UT + UT && (HT = yU(TT, kT - 2 * UT.length, gT)) > -1 && aU(TT, HT)) return {
              changes: {
                insert: UT + UT + UT + UT,
                from: kT
              },
              effects: ZU.of(kT + UT.length),
              range: WT.l.cursor(kT + UT.length)
            };
            if (TT.charCategorizer(kT)(jT) != WT.j.Word && yU(TT, kT, gT) > -1 && ! function(TT, UT, mT, WT) {
                let zT = (0, MT.jb)(TT).resolveInner(UT, -1),
                  gT = WT.reduce(((TT, UT) => Math.max(TT, UT.length)), 0);
                for (let MT = 0; MT < 5; MT++) {
                  let MT = TT.sliceDoc(zT.from, Math.min(zT.to, zT.from + mT.length + gT)),
                    nT = MT.indexOf(mT);
                  if (!nT || nT > -1 && WT.indexOf(MT.slice(0, nT)) > -1) {
                    let UT = zT.firstChild;
                    for (; UT && UT.from == zT.from && UT.to - UT.from > mT.length + nT;) {
                      if (TT.sliceDoc(UT.to - mT.length, UT.to) == mT) return !1;
                      UT = UT.firstChild
                    }
                    return !0
                  }
                  let HT = zT.to == UT && zT.parent;
                  if (!HT) break;
                  zT = HT
                }
                return !1
              }(TT, kT, UT, gT)) return {
              changes: {
                insert: UT + UT,
                from: kT
              },
              effects: ZU.of(kT + UT.length),
              range: WT.l.cursor(kT + UT.length)
            }
          }
          return {
            range: nT = zT
          }
        }));
      return nT ? null : TT.update(HT, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function aU(TT, UT) {
      let mT = (0, MT.jb)(TT).resolveInner(UT + 1);
      return mT.parent && mT.from == UT
    }

    function yU(TT, UT, mT) {
      let zT = TT.charCategorizer(UT);
      if (zT(TT.sliceDoc(UT - 1, UT)) != WT.j.Word) return UT;
      for (let MT of mT) {
        let mT = UT - MT.length;
        if (TT.sliceDoc(mT, UT) == MT && zT(TT.sliceDoc(mT - 1, mT)) != WT.j.Word) return mT
      }
      return -1
    }

    function XU() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [hT, uT, bT.of(TT), NT, QU, DT]
    }
    const IU = [{
        key: "Ctrl-Space",
        run: ST
      }, {
        mac: "Alt-`",
        run: ST
      }, {
        mac: "Alt-i",
        run: ST
      }, {
        key: "Escape",
        run: TT => {
          let UT = TT.state.field(uT, !1);
          return !(!UT || !UT.active.some((TT => 0 != TT.state))) && (TT.dispatch({
            effects: fT.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: KT(!0)
      }, {
        key: "ArrowUp",
        run: KT(!1)
      }, {
        key: "PageDown",
        run: KT(!0, "page")
      }, {
        key: "PageUp",
        run: KT(!1, "page")
      }, {
        key: "Enter",
        run: TT => {
          let UT = TT.state.field(uT, !1);
          return !(TT.state.readOnly || !UT || !UT.open || UT.open.selected < 0 || UT.open.disabled || Date.now() - UT.open.timestamp < TT.state.facet(bT).interactionDelay) && CT(TT, UT.open.options[UT.open.selected])
        }
      }],
      QU = WT.u.highest(zT.W.computeN([bT], (TT => TT.facet(bT).defaultKeymap ? [IU] : [])))
  },
  41590: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => kT,
      f: () => LT,
      i: () => jT,
      k: () => lT
    });
    var WT = mT(41459);
    class zT {
      constructor(TT, UT, mT, WT) {
        this.origin = TT, this.changes = UT, this.effects = mT, this.clientID = WT
      }
    }
    class MT {
      constructor(TT, UT) {
        this.version = TT, this.unconfirmed = UT
      }
    }
    const gT = WT.o.define({
        combine(TT) {
          let UT = (0, WT.Q)(TT, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: TT => TT
          });
          return null == UT.clientID && (UT.clientID = TT.length && TT[0].generatedID || ""), UT
        }
      }),
      nT = WT.b.define(),
      HT = WT.E.define({
        create: TT => new MT(TT.facet(gT).startVersion, []),
        update(TT, UT) {
          let mT = UT.annotation(nT);
          if (mT) return mT;
          let {
            sharedEffects: WT,
            clientID: HT
          } = UT.startState.facet(gT), kT = WT(UT);
          return kT.length || !UT.changes.empty ? new MT(TT.version, TT.unconfirmed.concat(new zT(UT, UT.changes, kT, HT))) : TT
        }
      });

    function kT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [HT, gT.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, TT))]
    }

    function jT(TT, UT) {
      let {
        version: mT,
        unconfirmed: kT
      } = TT.field(HT), {
        clientID: jT
      } = TT.facet(gT);
      mT += UT.length;
      let lT = [],
        LT = null,
        pT = 0;
      for (let zT of UT) {
        let TT = pT < kT.length ? kT[pT] : null;
        TT && TT.clientID == zT.clientID ? (LT && (LT = LT.map(TT.changes, !0)), lT = WT.B.mapEffects(lT, zT.changes), pT++) : (lT = WT.B.mapEffects(lT, zT.changes), zT.effects && (lT = lT.concat(zT.effects)), LT = LT ? LT.compose(zT.changes) : zT.changes)
      }
      if (pT && (kT = kT.slice(pT)), kT.length && (LT && (kT = kT.map((TT => {
          let UT = TT.changes.map(LT);
          return LT = LT.map(TT.changes, !0), new zT(TT.origin, UT, WT.B.mapEffects(TT.effects, LT), jT)
        }))), lT.length)) {
        let TT = kT.reduce(((TT, UT) => TT.compose(UT.changes)), WT.ChangeSet.empty(kT[0].changes.length));
        lT = WT.B.mapEffects(lT, TT)
      }
      return LT ? TT.update({
        changes: LT,
        effects: lT,
        annotations: [WT.K.addToHistory.of(!1), WT.K.remote.of(!0), nT.of(new MT(mT, kT))],
        filter: !1
      }) : TT.update({
        annotations: [nT.of(new MT(mT, kT))]
      })
    }

    function lT(TT) {
      return TT.field(HT).unconfirmed
    }

    function LT(TT) {
      return TT.field(HT).version
    }
  },
  41500: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => ZU
    });
    var WT = mT(41485);
    class zT {
      constructor(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
        let kT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          jT = arguments.length > 10 ? arguments[10] : void 0;
        this.p = TT, this.stack = UT, this.state = mT, this.reducePos = WT, this.pos = zT, this.score = MT, this.buffer = gT, this.bufferBase = nT, this.curContext = HT, this.lookAhead = kT, this.parent = jT
      }
      toString() {
        return `[${this.stack.filter(((TT,UT)=>UT%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          WT = TT.parser.context;
        return new zT(TT, [], UT, mT, mT, 0, [], 0, WT ? new MT(WT, WT.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(TT, UT) {
        this.stack.push(this.state, UT, this.bufferBase + this.buffer.length), this.state = TT
      }
      reduce(TT) {
        var UT;
        let mT = TT >> 19,
          WT = 65535 & TT,
          {
            parser: zT
          } = this.p,
          MT = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          gT = zT.dynamicPrecedence(WT);
        if (gT && (this.score += gT), 0 == mT) return this.pushState(zT.getGoto(this.state, WT, !0), this.reducePos), WT < zT.minRepeatTerm && this.storeNode(WT, this.reducePos, this.reducePos, MT ? 8 : 4, !0), void this.reduceContext(WT, this.reducePos);
        let nT = this.stack.length - 3 * (mT - 1) - (262144 & TT ? 6 : 0),
          HT = nT ? this.stack[nT - 2] : this.p.hZ[0].from,
          kT = this.reducePos - HT;
        kT >= 2e3 && !(null === (UT = this.p.parser.nodeSet.types[WT]) || void 0 === UT ? void 0 : UT.isAnonymous) && (HT == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = kT) : this.p.lastBigReductionSize < kT && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = HT, this.p.lastBigReductionSize = kT));
        let jT = nT ? this.stack[nT - 1] : 0,
          lT = this.bufferBase + this.buffer.length - jT;
        if (WT < zT.minRepeatTerm || 131072 & TT) {
          let TT = zT.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(WT, HT, TT, lT + 4, !0)
        }
        if (262144 & TT) this.state = this.stack[nT];
        else {
          let TT = this.stack[nT - 3];
          this.state = zT.getGoto(TT, WT, !0)
        }
        for (; this.stack.length > nT;) this.stack.pop();
        this.reduceContext(WT, HT)
      }
      storeNode(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == TT && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let TT = this,
            WT = this.buffer.length;
          if (0 == WT && TT.parent && (WT = TT.bufferBase - TT.parent.bufferBase, TT = TT.parent), WT > 0 && 0 == TT.buffer[WT - 4] && TT.buffer[WT - 1] > -1) {
            if (UT == mT) return;
            if (TT.buffer[WT - 2] >= UT) return void(TT.buffer[WT - 2] = mT)
          }
        }
        if (zT && this.pos != mT) {
          let zT = this.buffer.length;
          if (zT > 0 && (0 != this.buffer[zT - 4] || this.buffer[zT - 1] < 0)) {
            let TT = !1;
            for (let UT = zT; UT > 0 && this.buffer[UT - 2] > mT; UT -= 4)
              if (this.buffer[UT - 1] >= 0) {
                TT = !0;
                break
              } if (TT)
              for (; zT > 0 && this.buffer[zT - 2] > mT;) this.buffer[zT] = this.buffer[zT - 4], this.buffer[zT + 1] = this.buffer[zT - 3], this.buffer[zT + 2] = this.buffer[zT - 2], this.buffer[zT + 3] = this.buffer[zT - 1], zT -= 4, WT > 4 && (WT -= 4)
          }
          this.buffer[zT] = TT, this.buffer[zT + 1] = UT, this.buffer[zT + 2] = mT, this.buffer[zT + 3] = WT
        } else this.buffer.push(TT, UT, mT, WT)
      }
      shift(TT, UT, mT, WT) {
        if (131072 & TT) this.pushState(65535 & TT, this.pos);
        else if (0 == (262144 & TT)) {
          let zT = TT,
            {
              parser: MT
            } = this.p;
          this.pos = WT;
          let gT = MT.stateFlag(zT, 1);
          !gT && (WT > mT || UT <= MT.maxNode) && (this.reducePos = WT), this.pushState(zT, gT ? mT : Math.min(mT, this.reducePos)), this.shiftContext(UT, mT), UT <= MT.maxNode && this.buffer.push(UT, mT, WT, 4)
        } else this.pos = WT, this.shiftContext(UT, mT), UT <= this.p.parser.maxNode && this.buffer.push(UT, mT, WT, 4)
      }
      apply(TT, UT, mT, WT) {
        65536 & TT ? this.reduce(TT) : this.shift(TT, UT, mT, WT)
      }
      useNode(TT, UT) {
        let mT = this.p.reused.length - 1;
        (mT < 0 || this.p.reused[mT] != TT) && (this.p.reused.push(TT), mT++);
        let WT = this.pos;
        this.reducePos = this.pos = WT + TT.length, this.pushState(UT, WT), this.buffer.push(mT, WT, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, TT, this, this.p.stream.reset(this.pos - TT.length)))
      }
      split() {
        let TT = this,
          UT = TT.buffer.length;
        for (; UT > 0 && TT.buffer[UT - 2] > TT.reducePos;) UT -= 4;
        let mT = TT.buffer.slice(UT),
          WT = TT.bufferBase + UT;
        for (; TT && WT == TT.bufferBase;) TT = TT.parent;
        return new zT(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, mT, WT, this.curContext, this.lookAhead, TT)
      }
      recoverByDelete(TT, UT) {
        let mT = TT <= this.p.parser.maxNode;
        mT && this.storeNode(TT, this.pos, UT, 4), this.storeNode(0, this.pos, UT, mT ? 8 : 4), this.pos = this.reducePos = UT, this.score -= 190
      }
      canShift(TT) {
        for (let UT = new gT(this);;) {
          let mT = this.p.parser.stateSlot(UT.state, 4) || this.p.parser.hasAction(UT.state, TT);
          if (0 == mT) return !1;
          if (0 == (65536 & mT)) return !0;
          UT.reduce(mT)
        }
      }
      recoverByInsert(TT) {
        if (this.stack.length >= 300) return [];
        let UT = this.p.parser.nextStates(this.state);
        if (UT.length > 8 || this.stack.length >= 120) {
          let mT = [];
          for (let WT, zT = 0; zT < UT.length; zT += 2)(WT = UT[zT + 1]) != this.state && this.p.parser.hasAction(WT, TT) && mT.push(UT[zT], WT);
          if (this.stack.length < 120)
            for (let TT = 0; mT.length < 8 && TT < UT.length; TT += 2) {
              let WT = UT[TT + 1];
              mT.some(((TT, UT) => 1 & UT && TT == WT)) || mT.push(UT[TT], WT)
            }
          UT = mT
        }
        let mT = [];
        for (let WT = 0; WT < UT.length && mT.length < 4; WT += 2) {
          let TT = UT[WT + 1];
          if (TT == this.state) continue;
          let zT = this.split();
          zT.pushState(TT, this.pos), zT.storeNode(0, zT.pos, zT.pos, 4, !0), zT.shiftContext(UT[WT], this.pos), zT.reducePos = this.pos, zT.score -= 200, mT.push(zT)
        }
        return mT
      }
      forceReduce() {
        let {
          parser: TT
        } = this.p, UT = TT.stateSlot(this.state, 5);
        if (0 == (65536 & UT)) return !1;
        if (!TT.validAction(this.state, UT)) {
          let mT = UT >> 19,
            WT = 65535 & UT,
            zT = this.stack.length - 3 * mT;
          if (zT < 0 || TT.getGoto(this.stack[zT], WT, !1) < 0) {
            let TT = this.findForcedReduction();
            if (null == TT) return !1;
            UT = TT
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(UT), !0
      }
      findForcedReduction() {
        let {
          parser: TT
        } = this.p, UT = [], mT = (WT, zT) => {
          if (!UT.includes(WT)) return UT.push(WT), TT.allActions(WT, (UT => {
            if (393216 & UT);
            else if (65536 & UT) {
              let mT = (UT >> 19) - zT;
              if (mT > 1) {
                let WT = 65535 & UT,
                  zT = this.stack.length - 3 * mT;
                if (zT >= 0 && TT.getGoto(this.stack[zT], WT, !1) >= 0) return mT << 19 | 65536 | WT
              }
            } else {
              let TT = mT(UT, zT + 1);
              if (null != TT) return TT
            }
          }))
        };
        return mT(this.state, 0)
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
        for (let UT = 0; UT < this.stack.length; UT += 3)
          if (this.stack[UT] != TT.stack[UT]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(TT) {
        return this.p.parser.dialect.flags[TT]
      }
      shiftContext(TT, UT) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, TT, this, this.p.stream.reset(UT)))
      }
      reduceContext(TT, UT) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, TT, this, this.p.stream.reset(UT)))
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
          let UT = new MT(this.curContext.tracker, TT);
          UT.hash != this.curContext.hash && this.emitContext(), this.curContext = UT
        }
      }
      setLookAhead(TT) {
        return !(TT <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = TT, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class MT {
      constructor(TT, UT) {
        this.tracker = TT, this.context = UT, this.hash = TT.strict ? TT.hash(UT) : 0
      }
    }
    class gT {
      constructor(TT) {
        this.start = TT, this.state = TT.state, this.stack = TT.stack, this.base = this.stack.length
      }
      reduce(TT) {
        let UT = 65535 & TT,
          mT = TT >> 19;
        0 == mT ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (mT - 1);
        let WT = this.start.p.parser.getGoto(this.stack[this.base - 3], UT, !0);
        this.state = WT
      }
    }
    class nT {
      constructor(TT, UT, mT) {
        this.stack = TT, this.pos = UT, this.index = mT, this.buffer = TT.buffer, 0 == this.index && this.maybeNext()
      }
      static create(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.bufferBase + TT.buffer.length;
        return new nT(TT, UT, UT - TT.bufferBase)
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
        return new nT(this.stack, this.pos, this.index)
      }
    }

    function HT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof TT) return TT;
      let mT = null;
      for (let WT = 0, zT = 0; WT < TT.length;) {
        let MT = 0;
        for (;;) {
          let UT = TT.charCodeAt(WT++),
            mT = !1;
          if (126 == UT) {
            MT = 65535;
            break
          }
          UT >= 92 && UT--, UT >= 34 && UT--;
          let zT = UT - 32;
          if (zT >= 46 && (zT -= 46, mT = !0), MT += zT, mT) break;
          MT *= 46
        }
        mT ? mT[zT++] = MT : mT = new UT(MT)
      }
      return mT
    }
    class kT {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const jT = new kT;
    class lT {
      constructor(TT, UT) {
        this.input = TT, this.hZ = UT, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = jT, this.rangeIndex = 0, this.pos = this.chunkPos = UT[0].from, this.range = UT[0], this.end = UT[UT.length - 1].to, this.readNext()
      }
      resolveOffset(TT, UT) {
        let mT = this.range,
          WT = this.rangeIndex,
          zT = this.pos + TT;
        for (; zT < mT.from;) {
          if (!WT) return null;
          let TT = this.hZ[--WT];
          zT -= mT.from - TT.to, mT = TT
        }
        for (; UT < 0 ? zT > mT.to : zT >= mT.to;) {
          if (WT == this.hZ.length - 1) return null;
          let TT = this.hZ[++WT];
          zT += TT.from - mT.to, mT = TT
        }
        return zT
      }
      clipPos(TT) {
        if (TT >= this.range.from && TT < this.range.to) return TT;
        for (let UT of this.hZ)
          if (UT.to > TT) return Math.max(TT, UT.from);
        return this.end
      }
      peek(TT) {
        let UT, mT, WT = this.chunkOff + TT;
        if (WT >= 0 && WT < this.chunk.length) UT = this.pos + TT, mT = this.chunk.charCodeAt(WT);
        else {
          let WT = this.resolveOffset(TT, 1);
          if (null == WT) return -1;
          if (UT = WT, UT >= this.chunk2Pos && UT < this.chunk2Pos + this.chunk2.length) mT = this.chunk2.charCodeAt(UT - this.chunk2Pos);
          else {
            let TT = this.rangeIndex,
              WT = this.range;
            for (; WT.to <= UT;) WT = this.hZ[++TT];
            this.chunk2 = this.input.chunk(this.chunk2Pos = UT), UT + this.chunk2.length > WT.to && (this.chunk2 = this.chunk2.slice(0, WT.to - UT)), mT = this.chunk2.charCodeAt(0)
          }
        }
        return UT >= this.token.lookAhead && (this.token.lookAhead = UT + 1), mT
      }
      acceptToken(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = UT ? this.resolveOffset(UT, -1) : this.pos;
        if (null == mT || mT < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = TT, this.token.end = mT
      }
      acceptTokenTo(TT, UT) {
        this.token.value = TT, this.token.end = UT
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: TT,
            chunkPos: UT
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = TT, this.chunk2Pos = UT, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let TT = this.input.chunk(this.pos),
            UT = this.pos + TT.length;
          this.chunk = UT > this.range.to ? TT.slice(0, this.range.to - this.pos) : TT, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += TT; this.pos + TT >= this.range.to;) {
          if (this.rangeIndex == this.hZ.length - 1) return this.setDone();
          TT -= this.range.to - this.pos, this.range = this.hZ[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += TT, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.hZ[this.rangeIndex = this.hZ.length - 1], this.chunk = "", this.next = -1
      }
      reset(TT, UT) {
        if (UT ? (this.token = UT, UT.start = TT, UT.lookAhead = TT + 1, UT.value = UT.extended = -1) : this.token = jT, this.pos != TT) {
          if (this.pos = TT, TT == this.end) return this.setDone(), this;
          for (; TT < this.range.from;) this.range = this.hZ[--this.rangeIndex];
          for (; TT >= this.range.to;) this.range = this.hZ[++this.rangeIndex];
          TT >= this.chunkPos && TT < this.chunkPos + this.chunk.length ? this.chunkOff = TT - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(TT, UT) {
        if (TT >= this.chunkPos && UT <= this.chunkPos + this.chunk.length) return this.chunk.slice(TT - this.chunkPos, UT - this.chunkPos);
        if (TT >= this.chunk2Pos && UT <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(TT - this.chunk2Pos, UT - this.chunk2Pos);
        if (TT >= this.range.from && UT <= this.range.to) return this.input.read(TT, UT);
        let mT = "";
        for (let WT of this.hZ) {
          if (WT.from >= UT) break;
          WT.to > TT && (mT += this.input.read(Math.max(WT.from, TT), Math.min(WT.to, UT)))
        }
        return mT
      }
    }
    class LT {
      constructor(TT, UT) {
        this.data = TT, this.id = UT
      }
      token(TT, UT) {
        let {
          parser: mT
        } = UT.p;
        ZT(this.data, TT, UT, this.id, mT.data, mT.tokenPrecTable)
      }
    }
    LT.prototype.contextual = LT.prototype.fallback = LT.prototype.extend = !1;
    class pT {
      constructor(TT, UT, mT) {
        this.precTable = UT, this.elseToken = mT, this.data = "string" == typeof TT ? HT(TT) : TT
      }
      token(TT, UT) {
        let mT = TT.pos,
          WT = 0;
        for (;;) {
          let mT = TT.next < 0,
            zT = TT.resolveOffset(1, 1);
          if (ZT(this.data, TT, UT, 0, this.data, this.precTable), TT.token.value > -1) break;
          if (null == this.elseToken) return;
          if (mT || WT++, null == zT) break;
          TT.reset(zT, TT.token)
        }
        WT && (TT.reset(mT, TT.token), TT.acceptToken(this.elseToken, WT))
      }
    }
    pT.prototype.contextual = LT.prototype.fallback = LT.prototype.extend = !1;
    class BT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = TT, this.contextual = !!UT.contextual, this.fallback = !!UT.fallback, this.extend = !!UT.extend
      }
    }

    function ZT(TT, UT, mT, WT, zT, MT) {
      let gT = 0,
        nT = 1 << WT,
        {
          dialect: HT
        } = mT.p.parser;
      TT: for (; 0 != (nT & TT[gT]);) {
        let mT = TT[gT + 1];
        for (let lT = gT + 3; lT < mT; lT += 2)
          if ((TT[lT + 1] & nT) > 0) {
            let mT = TT[lT];
            if (HT.allows(mT) && (-1 == UT.token.value || UT.token.value == mT || vT(mT, UT.token.value, zT, MT))) {
              UT.acceptToken(mT);
              break
            }
          } let WT = UT.next,
          kT = 0,
          jT = TT[gT + 2];
        if (!(UT.next < 0 && jT > kT && 65535 == TT[mT + 3 * jT - 3])) {
          for (; kT < jT;) {
            let zT = kT + jT >> 1,
              MT = mT + zT + (zT << 1),
              nT = TT[MT],
              HT = TT[MT + 1] || 65536;
            if (WT < nT) jT = zT;
            else {
              if (!(WT >= HT)) {
                gT = TT[MT + 2], UT.advance();
                continue TT
              }
              kT = zT + 1
            }
          }
          break
        }
        gT = TT[mT + 3 * jT - 1]
      }
    }

    function cT(TT, UT, mT) {
      for (let WT, zT = UT; 65535 != (WT = TT[zT]); zT++)
        if (WT == mT) return zT - UT;
      return -1
    }

    function vT(TT, UT, mT, WT) {
      let zT = cT(mT, WT, UT);
      return zT < 0 || cT(mT, WT, TT) < zT
    }
    const fT = "undefined" != typeof process && {
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
    let qT = null;

    function iT(TT, UT, mT) {
      let zT = TT.cursor(WT.f.IncludeAnonymous);
      for (zT.moveTo(UT);;)
        if (!(mT < 0 ? zT.childBefore(UT) : zT.childAfter(UT)))
          for (;;) {
            if ((mT < 0 ? zT.to < UT : zT.from > UT) && !zT.type.isError) return mT < 0 ? Math.max(0, Math.min(zT.to - 1, UT - 25)) : Math.min(TT.length, Math.max(zT.from + 1, UT + 25));
            if (mT < 0 ? zT.prevSibling() : zT.nextSibling()) break;
            if (!zT.parent()) return mT < 0 ? 0 : TT.length
          }
    }
    class bT {
      constructor(TT, UT) {
        this.fragments = TT, this.nodeSet = UT, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let TT = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (TT) {
          for (this.safeFrom = TT.openStart ? iT(TT.tree, TT.from + TT.offset, 1) - TT.offset : TT.from, this.safeTo = TT.openEnd ? iT(TT.tree, TT.to + TT.offset, -1) - TT.offset : TT.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(TT.tree), this.start.push(-TT.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(TT) {
        if (TT < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= TT;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let UT = this.trees.length - 1;
          if (UT < 0) return this.nextFragment(), null;
          let mT = this.trees[UT],
            zT = this.index[UT];
          if (zT == mT.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let MT = mT.children[zT],
            gT = this.start[UT] + mT.positions[zT];
          if (gT > TT) return this.nextStart = gT, null;
          if (MT instanceof WT.x) {
            if (gT == TT) {
              if (gT < this.safeFrom) return null;
              let TT = gT + MT.length;
              if (TT <= this.safeTo) {
                let UT = MT.prop(WT.g.lookAhead);
                if (!UT || TT + UT < this.fragment.to) return MT
              }
            }
            this.index[UT]++, gT + MT.length >= Math.max(this.safeFrom, TT) && (this.trees.push(MT), this.start.push(gT), this.index.push(0))
          } else this.index[UT]++, this.nextStart = gT + MT.length
        }
      }
    }
    class OT {
      constructor(TT, UT) {
        this.stream = UT, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = TT.tokenizers.map((TT => new kT))
      }
      getActions(TT) {
        let UT = 0,
          mT = null,
          {
            parser: WT
          } = TT.p,
          {
            tokenizers: zT
          } = WT,
          MT = WT.stateSlot(TT.state, 3),
          gT = TT.curContext ? TT.curContext.hash : 0,
          nT = 0;
        for (let HT = 0; HT < zT.length; HT++) {
          if (0 == (1 << HT & MT)) continue;
          let WT = zT[HT],
            kT = this.tokens[HT];
          if ((!mT || WT.fallback) && ((WT.contextual || kT.start != TT.pos || kT.mask != MT || kT.context != gT) && (this.updateCachedToken(kT, WT, TT), kT.mask = MT, kT.context = gT), kT.lookAhead > kT.end + 25 && (nT = Math.max(kT.lookAhead, nT)), 0 != kT.value)) {
            let zT = UT;
            if (kT.extended > -1 && (UT = this.addActions(TT, kT.extended, kT.end, UT)), UT = this.addActions(TT, kT.value, kT.end, UT), !WT.extend && (mT = kT, UT > zT)) break
          }
        }
        for (; this.actions.length > UT;) this.actions.pop();
        return nT && TT.setLookAhead(nT), mT || TT.pos != this.stream.end || (mT = new kT, mT.value = TT.p.parser.eofTerm, mT.start = mT.end = TT.pos, UT = this.addActions(TT, mT.value, mT.end, UT)), this.mainToken = mT, this.actions
      }
      getMainToken(TT) {
        if (this.mainToken) return this.mainToken;
        let UT = new kT,
          {
            pos: mT,
            p: WT
          } = TT;
        return UT.start = mT, UT.end = Math.min(mT + 1, WT.stream.end), UT.value = mT == WT.stream.end ? WT.parser.eofTerm : 0, UT
      }
      updateCachedToken(TT, UT, mT) {
        let WT = this.stream.clipPos(mT.pos);
        if (UT.token(this.stream.reset(WT, TT), mT), TT.value > -1) {
          let {
            parser: UT
          } = mT.p;
          for (let WT = 0; WT < UT.specialized.length; WT++)
            if (UT.specialized[WT] == TT.value) {
              let zT = UT.specializers[WT](this.stream.read(TT.start, TT.end), mT);
              if (zT >= 0 && mT.p.parser.dialect.allows(zT >> 1)) {
                0 == (1 & zT) ? TT.value = zT >> 1 : TT.extended = zT >> 1;
                break
              }
            }
        } else TT.value = 0, TT.end = this.stream.clipPos(WT + 1)
      }
      putAction(TT, UT, mT, WT) {
        for (let zT = 0; zT < WT; zT += 3)
          if (this.actions[zT] == TT) return WT;
        return this.actions[WT++] = TT, this.actions[WT++] = UT, this.actions[WT++] = mT, WT
      }
      addActions(TT, UT, mT, WT) {
        let {
          state: zT
        } = TT, {
          parser: MT
        } = TT.p, {
          data: gT
        } = MT;
        for (let nT = 0; nT < 2; nT++)
          for (let TT = MT.stateSlot(zT, nT ? 2 : 1);; TT += 3) {
            if (65535 == gT[TT]) {
              if (1 != gT[TT + 1]) {
                0 == WT && 2 == gT[TT + 1] && (WT = this.putAction(wT(gT, TT + 2), UT, mT, WT));
                break
              }
              TT = wT(gT, TT + 2)
            }
            gT[TT] == UT && (WT = this.putAction(wT(gT, TT + 1), UT, mT, WT))
          }
        return WT
      }
    }
    class eT {
      constructor(TT, UT, mT, WT) {
        this.parser = TT, this.input = UT, this.hZ = WT, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new lT(UT, WT), this.tokens = new OT(TT, this.stream), this.topTerm = TT.top[1];
        let {
          from: MT
        } = WT[0];
        this.stacks = [zT.start(this, TT.top[0], MT)], this.fragments = mT.length && this.stream.end - MT > 4 * TT.bufferLength ? new bT(mT, TT.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let TT, UT, mT = this.stacks,
          WT = this.minStackPos,
          zT = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == mT.length) {
          let [TT] = mT;
          for (; TT.forceReduce() && TT.stack.length && TT.stack[TT.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let MT = 0; MT < mT.length; MT++) {
          let gT = mT[MT];
          for (;;) {
            if (this.tokens.mainToken = null, gT.pos > WT) zT.push(gT);
            else {
              if (this.advanceStack(gT, zT, mT)) continue;
              {
                TT || (TT = [], UT = []), TT.push(gT);
                let mT = this.tokens.getMainToken(gT);
                UT.push(mT.value, mT.end)
              }
            }
            break
          }
        }
        if (!zT.length) {
          let UT = TT && function(TT) {
            let UT = null;
            for (let mT of TT) {
              let TT = mT.p.stoppedAt;
              (mT.pos == mT.p.stream.end || null != TT && mT.pos > TT) && mT.p.parser.stateFlag(mT.state, 2) && (!UT || UT.score < mT.score) && (UT = mT)
            }
            return UT
          }(TT);
          if (UT) return fT && console.log("Finish with " + this.stackID(UT)), this.stackToTree(UT);
          if (this.parser.strict) throw fT && TT && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + WT);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && TT) {
          let mT = null != this.stoppedAt && TT[0].pos > this.stoppedAt ? TT[0] : this.runRecovery(TT, UT, zT);
          if (mT) return fT && console.log("Force-finish " + this.stackID(mT)), this.stackToTree(mT.forceAll())
        }
        if (this.recovering) {
          let TT = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (zT.length > TT)
            for (zT.sort(((TT, UT) => UT.score - TT.score)); zT.length > TT;) zT.pop();
          zT.some((TT => TT.reducePos > WT)) && this.recovering--
        } else if (zT.length > 1) {
          TT: for (let TT = 0; TT < zT.length - 1; TT++) {
            let UT = zT[TT];
            for (let mT = TT + 1; mT < zT.length; mT++) {
              let WT = zT[mT];
              if (UT.sameState(WT) || UT.buffer.length > 500 && WT.buffer.length > 500) {
                if (!((UT.score - WT.score || UT.buffer.length - WT.buffer.length) > 0)) {
                  zT.splice(TT--, 1);
                  continue TT
                }
                zT.splice(mT--, 1)
              }
            }
          }
          zT.length > 12 && (zT.sort(((TT, UT) => UT.score - TT.score)), zT.splice(12, zT.length - 12))
        }
        this.minStackPos = zT[0].pos;
        for (let MT = 1; MT < zT.length; MT++) zT[MT].pos < this.minStackPos && (this.minStackPos = zT[MT].pos);
        return null
      }
      stopAt(TT) {
        if (null != this.stoppedAt && this.stoppedAt < TT) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = TT
      }
      advanceStack(TT, UT, mT) {
        let zT = TT.pos,
          {
            parser: MT
          } = this,
          gT = fT ? this.stackID(TT) + " -> " : "";
        if (null != this.stoppedAt && zT > this.stoppedAt) return TT.forceReduce() ? TT : null;
        if (this.fragments) {
          let UT = TT.curContext && TT.curContext.tracker.strict,
            mT = UT ? TT.curContext.hash : 0;
          for (let nT = this.fragments.nodeAt(zT); nT;) {
            let zT = this.parser.nodeSet.types[nT.type.id] == nT.type ? MT.getGoto(TT.state, nT.type.id) : -1;
            if (zT > -1 && nT.length && (!UT || (nT.prop(WT.g.contextHash) || 0) == mT)) return TT.useNode(nT, zT), fT && console.log(gT + this.stackID(TT) + ` (via reuse of ${MT.getName(nT.type.id)})`), !0;
            if (!(nT instanceof WT.x) || 0 == nT.children.length || nT.positions[0] > 0) break;
            let HT = nT.children[0];
            if (!(HT instanceof WT.x && 0 == nT.positions[0])) break;
            nT = HT
          }
        }
        let nT = MT.stateSlot(TT.state, 4);
        if (nT > 0) return TT.reduce(nT), fT && console.log(gT + this.stackID(TT) + ` (via always-reduce ${MT.getName(65535&nT)})`), !0;
        if (TT.stack.length >= 8400)
          for (; TT.stack.length > 6e3 && TT.forceReduce(););
        let HT = this.tokens.getActions(TT);
        for (let WT = 0; WT < HT.length;) {
          let nT = HT[WT++],
            kT = HT[WT++],
            jT = HT[WT++],
            lT = WT == HT.length || !mT,
            LT = lT ? TT : TT.split(),
            pT = this.tokens.mainToken;
          if (LT.apply(nT, kT, pT ? pT.start : LT.pos, jT), fT && console.log(gT + this.stackID(LT) + ` (via ${0==(65536&nT)?"shift":`reduce of ${MT.getName(65535&nT)}`} for ${MT.getName(kT)} @ ${zT}${LT==TT?"":", split"})`), lT) return !0;
          LT.pos > zT ? UT.push(LT) : mT.push(LT)
        }
        return !1
      }
      advanceFully(TT, UT) {
        let mT = TT.pos;
        for (;;) {
          if (!this.advanceStack(TT, null, null)) return !1;
          if (TT.pos > mT) return YT(TT, UT), !0
        }
      }
      runRecovery(TT, UT, mT) {
        let WT = null,
          zT = !1;
        for (let MT = 0; MT < TT.length; MT++) {
          let gT = TT[MT],
            nT = UT[MT << 1],
            HT = UT[1 + (MT << 1)],
            kT = fT ? this.stackID(gT) + " -> " : "";
          if (gT.deadEnd) {
            if (zT) continue;
            if (zT = !0, gT.restart(), fT && console.log(kT + this.stackID(gT) + " (restarted)"), this.advanceFully(gT, mT)) continue
          }
          let jT = gT.split(),
            lT = kT;
          for (let TT = 0; TT < 10 && jT.forceReduce(); TT++) {
            if (fT && console.log(lT + this.stackID(jT) + " (via force-reduce)"), this.advanceFully(jT, mT)) break;
            fT && (lT = this.stackID(jT) + " -> ")
          }
          for (let TT of gT.recoverByInsert(nT)) fT && console.log(kT + this.stackID(TT) + " (via recover-insert)"), this.advanceFully(TT, mT);
          this.stream.end > gT.pos ? (HT == gT.pos && (HT++, nT = 0), gT.recoverByDelete(nT, HT), fT && console.log(kT + this.stackID(gT) + ` (via recover-delete ${this.parser.getName(nT)})`), YT(gT, mT)) : (!WT || WT.score < jT.score) && (WT = jT)
        }
        return WT
      }
      stackToTree(TT) {
        return TT.close(), WT.x.build({
          buffer: nT.create(TT),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.hZ[0].from,
          length: TT.pos - this.hZ[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(TT) {
        let UT = (qT || (qT = new WeakMap)).get(TT);
        return UT || qT.set(TT, UT = String.fromCodePoint(this.nextStackID++)), UT + TT
      }
    }

    function YT(TT, UT) {
      for (let mT = 0; mT < UT.length; mT++) {
        let WT = UT[mT];
        if (WT.pos == TT.pos && WT.sameState(TT)) return void(UT[mT].score < TT.score && (UT[mT] = TT))
      }
      UT.push(TT)
    }
    class JT {
      constructor(TT, UT, mT) {
        this.source = TT, this.flags = UT, this.disabled = mT
      }
      allows(TT) {
        return !this.disabled || 0 == this.disabled[TT]
      }
    }
    const xT = TT => TT;
    class dT extends WT.q {
      constructor(TT) {
        if (super(), this.wrappers = [], 14 != TT.version) throw new RangeError(`Parser version (${TT.version}) doesn't match runtime version (14)`);
        let UT = TT.nodeNames.split(" ");
        this.minRepeatTerm = UT.length;
        for (let WT = 0; WT < TT.repeatNodeCount; WT++) UT.push("");
        let mT = Object.keys(TT.topRules).map((UT => TT.topRules[UT][1])),
          zT = [];
        for (let WT = 0; WT < UT.length; WT++) zT.push([]);

        function MT(TT, UT, mT) {
          zT[TT].push([UT, UT.deserialize(String(mT))])
        }
        if (TT.nodeProps)
          for (let nT of TT.nodeProps) {
            let TT = nT[0];
            "string" == typeof TT && (TT = WT.g[TT]);
            for (let UT = 1; UT < nT.length;) {
              let mT = nT[UT++];
              if (mT >= 0) MT(mT, TT, nT[UT++]);
              else {
                let WT = nT[UT + -mT];
                for (let zT = -mT; zT > 0; zT--) MT(nT[UT++], TT, WT);
                UT++
              }
            }
          }
        this.nodeSet = new WT.j(UT.map(((UT, MT) => WT.l.define({
          name: MT >= this.minRepeatTerm ? void 0 : UT,
          id: MT,
          props: zT[MT],
          top: mT.indexOf(MT) > -1,
          error: 0 == MT,
          skipped: TT.skippedNodes && TT.skippedNodes.indexOf(MT) > -1
        })))), TT.propSources && (this.nodeSet = this.nodeSet.extend(...TT.propSources)), this.strict = !1, this.bufferLength = WT.b;
        let gT = HT(TT.tokenData);
        this.context = TT.context, this.specializerSpecs = TT.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let WT = 0; WT < this.specializerSpecs.length; WT++) this.specialized[WT] = this.specializerSpecs[WT].term;
        this.specializers = this.specializerSpecs.map(tT), this.states = HT(TT.states, Uint32Array), this.data = HT(TT.stateData), this.goto = HT(TT.goto), this.maxTerm = TT.maxTerm, this.tokenizers = TT.tokenizers.map((TT => "number" == typeof TT ? new LT(gT, TT) : TT)), this.topRules = TT.topRules, this.dialects = TT.dialects || {}, this.dynamicPrecedences = TT.dynamicPrecedences || null, this.tokenPrecTable = TT.tokenPrec, this.termNames = TT.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(TT, UT, mT) {
        let WT = new eT(this, TT, UT, mT);
        for (let zT of this.wrappers) WT = zT(WT, TT, UT, mT);
        return WT
      }
      getGoto(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = this.goto;
        if (UT >= WT[0]) return -1;
        for (let zT = WT[UT + 1];;) {
          let UT = WT[zT++],
            MT = 1 & UT,
            gT = WT[zT++];
          if (MT && mT) return gT;
          for (let mT = zT + (UT >> 1); zT < mT; zT++)
            if (WT[zT] == TT) return gT;
          if (MT) return -1
        }
      }
      hasAction(TT, UT) {
        let mT = this.data;
        for (let WT = 0; WT < 2; WT++)
          for (let zT, MT = this.stateSlot(TT, WT ? 2 : 1);; MT += 3) {
            if (65535 == (zT = mT[MT])) {
              if (1 != mT[MT + 1]) {
                if (2 == mT[MT + 1]) return wT(mT, MT + 2);
                break
              }
              zT = mT[MT = wT(mT, MT + 2)]
            }
            if (zT == UT || 0 == zT) return wT(mT, MT + 1)
          }
        return 0
      }
      stateSlot(TT, UT) {
        return this.states[6 * TT + UT]
      }
      stateFlag(TT, UT) {
        return (this.stateSlot(TT, 0) & UT) > 0
      }
      validAction(TT, UT) {
        return !!this.allActions(TT, (TT => TT == UT || null))
      }
      allActions(TT, UT) {
        let mT = this.stateSlot(TT, 4),
          WT = mT ? UT(mT) : void 0;
        for (let zT = this.stateSlot(TT, 1); null == WT; zT += 3) {
          if (65535 == this.data[zT]) {
            if (1 != this.data[zT + 1]) break;
            zT = wT(this.data, zT + 2)
          }
          WT = UT(wT(this.data, zT + 1))
        }
        return WT
      }
      nextStates(TT) {
        let UT = [];
        for (let mT = this.stateSlot(TT, 1);; mT += 3) {
          if (65535 == this.data[mT]) {
            if (1 != this.data[mT + 1]) break;
            mT = wT(this.data, mT + 2)
          }
          if (0 == (1 & this.data[mT + 2])) {
            let TT = this.data[mT + 1];
            UT.some(((UT, mT) => 1 & mT && UT == TT)) || UT.push(this.data[mT], TT)
          }
        }
        return UT
      }
      configure(TT) {
        let UT = Object.assign(Object.create(dT.prototype), this);
        if (TT.props && (UT.nodeSet = this.nodeSet.extend(...TT.props)), TT.top) {
          let mT = this.topRules[TT.top];
          if (!mT) throw new RangeError(`Invalid top rule name ${TT.top}`);
          UT.top = mT
        }
        return TT.tokenizers && (UT.tokenizers = this.tokenizers.map((UT => {
          let mT = TT.tokenizers.find((TT => TT.from == UT));
          return mT ? mT.to : UT
        }))), TT.specializers && (UT.specializers = this.specializers.slice(), UT.specializerSpecs = this.specializerSpecs.map(((mT, WT) => {
          let zT = TT.specializers.find((TT => TT.from == mT.external));
          if (!zT) return mT;
          let MT = Object.assign(Object.assign({}, mT), {
            external: zT.to
          });
          return UT.specializers[WT] = tT(MT), MT
        }))), TT.contextTracker && (UT.context = TT.contextTracker), TT.dialect && (UT.dialect = this.parseDialect(TT.dialect)), null != TT.strict && (UT.strict = TT.strict), TT.wrap && (UT.wrappers = UT.wrappers.concat(TT.wrap)), null != TT.bufferLength && (UT.bufferLength = TT.bufferLength), UT
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
        let UT = this.dynamicPrecedences;
        return null == UT ? 0 : UT[TT] || 0
      }
      parseDialect(TT) {
        let UT = Object.keys(this.dialects),
          mT = UT.map((() => !1));
        if (TT)
          for (let zT of TT.split(" ")) {
            let TT = UT.indexOf(zT);
            TT >= 0 && (mT[TT] = !0)
          }
        let WT = null;
        for (let zT = 0; zT < UT.length; zT++)
          if (!mT[zT])
            for (let TT, mT = this.dialects[UT[zT]]; 65535 != (TT = this.data[mT++]);)(WT || (WT = new Uint8Array(this.maxTerm + 1)))[TT] = 1;
        return new JT(TT, mT, WT)
      }
      static deserialize(TT) {
        return new dT(TT)
      }
    }

    function wT(TT, UT) {
      return TT[UT] | TT[UT + 1] << 16
    }

    function tT(TT) {
      if (TT.external) {
        let UT = TT.extend ? 1 : 0;
        return (mT, WT) => TT.external(mT, WT) << 1 | UT
      }
      return TT.get
    }
    var aT = mT(41493);
    const yT = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      XT = new class {
        constructor(TT) {
          this.start = TT.start, this.shift = TT.shift || xT, this.reduce = TT.reduce || xT, this.reuse = TT.reuse || xT, this.hash = TT.hash || (() => 0), this.strict = !1 !== TT.strict
        }
      }({
        start: !1,
        shift: (TT, UT) => 5 == UT || 6 == UT || 320 == UT ? TT : 321 == UT,
        strict: !1
      }),
      IT = new BT(((TT, UT) => {
        let {
          next: mT
        } = TT;
        (125 == mT || -1 == mT || UT.context) && TT.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      QT = new BT(((TT, UT) => {
        let mT, {
          next: WT
        } = TT;
        yT.indexOf(WT) > -1 || (47 != WT || 47 != (mT = TT.peek(1)) && 42 != mT) && (125 == WT || 59 == WT || -1 == WT || UT.context || TT.acceptToken(316))
      }), {
        contextual: !0
      }),
      sT = new BT(((TT, UT) => {
        91 != TT.next || UT.context || TT.acceptToken(317)
      }), {
        contextual: !0
      }),
      FT = new BT(((TT, UT) => {
        let {
          next: mT
        } = TT;
        if (43 == mT || 45 == mT) {
          if (TT.advance(), mT == TT.next) {
            TT.advance();
            let mT = !UT.context && UT.canShift(1);
            TT.acceptToken(mT ? 1 : 2)
          }
        } else 63 == mT && 46 == TT.peek(1) && (TT.advance(), TT.advance(), (TT.next < 48 || TT.next > 57) && TT.acceptToken(3))
      }), {
        contextual: !0
      });

    function PT(TT, UT) {
      return TT >= 65 && TT <= 90 || TT >= 97 && TT <= 122 || 95 == TT || TT >= 192 || !UT && TT >= 48 && TT <= 57
    }
    const VT = new BT(((TT, UT) => {
        if (60 != TT.next || !UT.dialectEnabled(0)) return;
        if (TT.advance(), 47 == TT.next) return;
        let mT = 0;
        for (; yT.indexOf(TT.next) > -1;) TT.advance(), mT++;
        if (PT(TT.next, !0)) {
          for (TT.advance(), mT++; PT(TT.next, !1);) TT.advance(), mT++;
          for (; yT.indexOf(TT.next) > -1;) TT.advance(), mT++;
          if (44 == TT.next) return;
          for (let UT = 0;; UT++) {
            if (7 == UT) {
              if (!PT(TT.next, !0)) return;
              break
            }
            if (TT.next != "extends".charCodeAt(UT)) break;
            TT.advance(), mT++
          }
        }
        TT.acceptToken(4, -mT)
      })),
      uT = (0, aT.g)({
        "get set async static": aT.k.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": aT.k.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": aT.k.operatorKeyword,
        "let var const using function class extends": aT.k.definitionKeyword,
        "import export from": aT.k.moduleKeyword,
        "with debugger new": aT.k.keyword,
        TemplateString: aT.k.special(aT.k.string),
        super: aT.k.atom,
        BooleanLiteral: aT.k.bool,
        this: aT.k.self,
        null: aT.k.null,
        Star: aT.k.modifier,
        VariableName: aT.k.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": aT.k.function(aT.k.variableName),
        VariableDefinition: aT.k.definition(aT.k.variableName),
        Label: aT.k.labelName,
        PropertyName: aT.k.propertyName,
        PrivatePropertyName: aT.k.special(aT.k.propertyName),
        "CallExpression/MemberExpression/PropertyName": aT.k.function(aT.k.propertyName),
        "FunctionDeclaration/VariableDefinition": aT.k.function(aT.k.definition(aT.k.variableName)),
        "ClassDeclaration/VariableDefinition": aT.k.definition(aT.k.className),
        "NewExpression/VariableName": aT.k.className,
        PropertyDefinition: aT.k.definition(aT.k.propertyName),
        PrivatePropertyDefinition: aT.k.definition(aT.k.special(aT.k.propertyName)),
        UpdateOp: aT.k.updateOperator,
        "LineComment Hashbang": aT.k.lineComment,
        BlockComment: aT.k.blockComment,
        Number: aT.k.number,
        String: aT.k.string,
        Escape: aT.k.escape,
        ArithOp: aT.k.arithmeticOperator,
        LogicOp: aT.k.logicOperator,
        BitOp: aT.k.bitwiseOperator,
        CompareOp: aT.k.compareOperator,
        RegExp: aT.k.regexp,
        Equals: aT.k.definitionOperator,
        Arrow: aT.k.function(aT.k.punctuation),
        ": Spread": aT.k.punctuation,
        "( )": aT.k.paren,
        "[ ]": aT.k.squareBracket,
        "{ }": aT.k.brace,
        "InterpolationStart InterpolationEnd": aT.k.special(aT.k.brace),
        ".": aT.k.derefOperator,
        ", ;": aT.k.separator,
        "@": aT.k.meta,
        TypeName: aT.k.typeName,
        TypeDefinition: aT.k.definition(aT.k.typeName),
        "type enum interface implements namespace module declare": aT.k.definitionKeyword,
        "abstract global Privacy readonly override": aT.k.modifier,
        "is keyof unique infer asserts": aT.k.operatorKeyword,
        JSXAttributeValue: aT.k.attributeValue,
        JSXText: aT.k.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": aT.k.angleBracket,
        "JSXIdentifier JSXNameSpacedName": aT.k.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": aT.k.attributeName,
        "JSXBuiltin/JSXIdentifier": aT.k.standard(aT.k.tagName)
      }),
      CT = {
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
      rT = {
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
      KT = {
        __proto__: null,
        "<": 193
      },
      ST = dT.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: XT,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [uT],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [QT, sT, FT, VT, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, IT, new pT("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new pT("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: TT => CT[TT] || -1
        }, {
          term: 343,
          get: TT => rT[TT] || -1
        }, {
          term: 95,
          get: TT => KT[TT] || -1
        }],
        tokenPrec: 15201
      });
    var GT = mT(41482),
      NT = mT(41459),
      ET = mT(41466),
      hT = mT(41451);
    const DT = [(0, hT.q)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, hT.q)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, hT.q)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, hT.q)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, hT.q)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, hT.q)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, hT.q)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, hT.q)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, hT.q)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, hT.q)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, hT.q)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      oT = DT.concat([(0, hT.q)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, hT.q)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, hT.q)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      AT = new WT.o,
      RT = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function TU(TT) {
      return (UT, mT) => {
        let WT = UT.node.getChild("VariableDefinition");
        return WT && mT(WT, TT), !0
      }
    }
    const UU = ["FunctionDeclaration"],
      mU = {
        FunctionDeclaration: TU("function"),
        ClassDeclaration: TU("class"),
        ClassExpression: () => !0,
        EnumDeclaration: TU("constant"),
        TypeAliasDeclaration: TU("type"),
        NamespaceDeclaration: TU("namespace"),
        VariableDefinition(TT, UT) {
          TT.matchContext(UU) || UT(TT, "variable")
        },
        TypeDefinition(TT, UT) {
          UT(TT, "type")
        },
        __proto__: null
      };

    function WU(TT, UT) {
      let mT = AT.get(UT);
      if (mT) return mT;
      let zT = [],
        MT = !0;

      function gT(UT, mT) {
        let WT = TT.sliceString(UT.from, UT.to);
        zT.push({
          label: WT,
          type: mT
        })
      }
      return UT.cursor(WT.f.IncludeAnonymous).iterate((UT => {
        if (MT) MT = !1;
        else if (UT.name) {
          let TT = mU[UT.name];
          if (TT && TT(UT, gT) || RT.has(UT.name)) return !1
        } else if (UT.to - UT.from > 8192) {
          for (let mT of WU(TT, UT.node)) zT.push(mT);
          return !1
        }
      })), AT.set(UT, zT), zT
    }
    const zU = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      MU = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function gU(TT) {
      let UT = (0, GT.jb)(TT.state).resolveInner(TT.pos, -1);
      if (MU.indexOf(UT.name) > -1) return null;
      let mT = "VariableName" == UT.name || UT.to - UT.from < 20 && zU.test(TT.state.sliceDoc(UT.from, UT.to));
      if (!mT && !TT.explicit) return null;
      let WT = [];
      for (let zT = UT; zT; zT = zT.parent) RT.has(zT.name) && (WT = WT.concat(WU(TT.state.doc, zT)));
      return {
        options: WT,
        from: mT ? UT.from : TT.pos,
        validFor: zU
      }
    }
    const nU = GT.f.define({
        name: "javascript",
        parser: ST.configure({
          props: [GT.P.add({
            IfStatement: (0, GT.n)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, GT.n)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: GT.v,
            SwitchBody: TT => {
              let UT = TT.textAfter,
                mT = /^\s*\}/.test(UT),
                WT = /^\s*(case|default)\b/.test(UT);
              return TT.baseIndent + (mT ? 0 : WT ? 1 : 2) * TT.unit
            },
            Block: (0, GT.t)({
              closing: "}"
            }),
            ArrowFunction: TT => TT.baseIndent + TT.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, GT.n)({
              except: /^\s*{/
            }),
            JSXElement(TT) {
              let UT = /^\s*<\//.test(TT.textAfter);
              return TT.lineIndent(TT.node.from) + (UT ? 0 : TT.unit)
            },
            JSXEscape(TT) {
              let UT = /\s*\}/.test(TT.textAfter);
              return TT.lineIndent(TT.node.from) + (UT ? 0 : TT.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": TT => TT.column(TT.node.from) + TT.unit
          }), GT.F.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": GT.B,
            BlockComment: TT => ({
              from: TT.from + 2,
              to: TT.to - 2
            }),
            JSXElement(TT) {
              let UT = TT.firstChild;
              if (!UT || "JSXSelfClosingTag" == UT.name) return null;
              let mT = TT.lastChild;
              return {
                from: UT.to,
                to: mT.type.isError ? TT.to : mT.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(TT) {
              var UT;
              let mT = null === (UT = TT.firstChild) || void 0 === UT ? void 0 : UT.nextSibling,
                WT = TT.lastChild;
              return !mT || mT.type.isError ? null : {
                from: mT.to,
                to: WT.type.isError ? TT.to : WT.from
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
      HU = {
        test: TT => /^JSX/.test(TT.name),
        facet: (0, GT.s)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      kU = nU.configure({
        dialect: "ts"
      }, "typescript"),
      jU = nU.configure({
        dialect: "jsx",
        props: [GT.$.add((TT => TT.isTop ? [HU] : void 0))]
      }),
      lU = nU.configure({
        dialect: "jsx ts",
        props: [GT.$.add((TT => TT.isTop ? [HU] : void 0))]
      }, "typescript");
    let LU = TT => ({
      label: TT,
      type: "keyword"
    });
    const pU = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(LU),
      BU = pU.concat(["declare", "implements", "private", "protected", "public"].map(LU));

    function ZU() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        UT = TT.jsx ? TT.typescript ? lU : jU : TT.typescript ? kU : nU,
        mT = TT.typescript ? oT.concat(BU) : DT.concat(pU);
      return new GT.h(UT, [nU.data.of({
        autocomplete: (0, hT.p)(MU, (0, hT.k)(mT))
      }), nU.data.of({
        autocomplete: gU
      }), TT.jsx ? fU : []])
    }

    function cU(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT.length;
      for (let WT = null === UT || void 0 === UT ? void 0 : UT.firstChild; WT; WT = WT.nextSibling)
        if ("JSXIdentifier" == WT.name || "JSXBuiltin" == WT.name || "JSXNamespacedName" == WT.name || "JSXMemberExpression" == WT.name) return TT.sliceString(WT.from, Math.min(WT.to, mT));
      return ""
    }
    const vU = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      fU = ET.i.inputHandler.of(((TT, UT, mT, WT, zT) => {
        if ((vU ? TT.composing : TT.compositionStarted) || TT.state.readOnly || UT != mT || ">" != WT && "/" != WT || !nU.isActiveAt(TT.state, UT, -1)) return !1;
        let MT = zT(),
          {
            state: gT
          } = MT,
          nT = gT.changeByRange((TT => {
            var UT;
            let mT, {
                head: zT
              } = TT,
              MT = (0, GT.jb)(gT).resolveInner(zT - 1, -1);
            if ("JSXStartTag" == MT.name && (MT = MT.parent), gT.doc.sliceString(zT - 1, zT) != WT || "JSXAttributeValue" == MT.name && MT.to > zT);
            else {
              if (">" == WT && "JSXFragmentTag" == MT.name) return {
                range: TT,
                changes: {
                  from: zT,
                  insert: "</>"
                }
              };
              if ("/" == WT && "JSXStartCloseTag" == MT.name) {
                let TT = MT.parent,
                  WT = TT.parent;
                if (WT && TT.from == zT - 2 && ((mT = cU(gT.doc, WT.firstChild, zT)) || "JSXFragmentTag" == (null === (UT = WT.firstChild) || void 0 === UT ? void 0 : UT.name))) {
                  let TT = `${mT}>`;
                  return {
                    range: NT.l.cursor(zT + TT.length, -1),
                    changes: {
                      from: zT,
                      insert: TT
                    }
                  }
                }
              } else if (">" == WT) {
                let UT = function(TT) {
                  for (;;) {
                    if ("JSXOpenTag" == TT.name || "JSXSelfClosingTag" == TT.name || "JSXFragmentTag" == TT.name) return TT;
                    if ("JSXEscape" == TT.name || !TT.parent) return null;
                    TT = TT.parent
                  }
                }(MT);
                if (UT && "JSXOpenTag" == UT.name && !/^\/?>|^<\//.test(gT.doc.sliceString(zT, zT + 2)) && (mT = cU(gT.doc, UT, zT))) return {
                  range: TT,
                  changes: {
                    from: zT,
                    insert: `</${mT}>`
                  }
                }
              }
            }
            return {
              range: TT
            }
          }));
        return !nT.changes.empty && (TT.dispatch([MT, gT.update(nT, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  41482: (TT, UT, mT) => {
    mT.d(UT, {
      $: () => lT,
      B: () => DT,
      D: () => kU,
      F: () => hT,
      J: () => vT,
      K: () => aT,
      O: () => XT,
      P: () => QT,
      S: () => NT,
      T: () => yT,
      X: () => tT,
      Z: () => rU,
      bb: () => YU,
      d: () => iU,
      e: () => IT,
      f: () => BT,
      fb: () => cT,
      h: () => dT,
      jb: () => ZT,
      k: () => PU,
      n: () => ST,
      r: () => dU,
      s: () => jT,
      t: () => CT,
      v: () => KT,
      z: () => fU
    });
    var WT, zT = mT(41485),
      MT = mT(41459),
      gT = mT(41466),
      nT = mT(41493),
      HT = mT(41469);
    const kT = new zT.g;

    function jT(TT) {
      return MT.o.define({
        combine: TT ? UT => UT.concat(TT) : void 0
      })
    }
    const lT = new zT.g;
    class LT {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = TT, this.name = WT, MT.m.prototype.hasOwnProperty("tree") || Object.defineProperty(MT.m.prototype, "tree", {
          get() {
            return ZT(this)
          }
        }), this.parser = UT, this.extension = [xT.of(this), MT.m.languageData.of(((TT, UT, mT) => {
          let WT = pT(TT, UT, mT),
            zT = WT.type.prop(kT);
          if (!zT) return [];
          let MT = TT.facet(zT),
            gT = WT.type.prop(lT);
          if (gT) {
            let zT = WT.resolve(UT - WT.from, mT);
            for (let UT of gT)
              if (UT.test(zT, TT)) {
                let mT = TT.facet(UT.facet);
                return "replace" == UT.type ? mT : mT.concat(MT)
              }
          }
          return MT
        }))].concat(mT)
      }
      isActiveAt(TT, UT) {
        return pT(TT, UT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(kT) == this.data
      }
      findRegions(TT) {
        let UT = TT.facet(xT);
        if ((null === UT || void 0 === UT ? void 0 : UT.data) == this.data) return [{
          from: 0,
          to: TT.doc.length
        }];
        if (!UT || !UT.allowsNesting) return [];
        let mT = [],
          WT = (TT, UT) => {
            if (TT.prop(kT) == this.data) return void mT.push({
              from: UT,
              to: UT + TT.length
            });
            let MT = TT.prop(zT.g.mounted);
            if (MT) {
              if (MT.tree.prop(kT) == this.data) {
                if (MT.overlay)
                  for (let TT of MT.overlay) mT.push({
                    from: TT.from + UT,
                    to: TT.to + UT
                  });
                else mT.push({
                  from: UT,
                  to: UT + TT.length
                });
                return
              }
              if (MT.overlay) {
                let TT = mT.length;
                if (WT(MT.tree, MT.overlay[0].from + UT), mT.length > TT) return
              }
            }
            for (let mT = 0; mT < TT.children.length; mT++) {
              let MT = TT.children[mT];
              MT instanceof zT.x && WT(MT, TT.positions[mT] + UT)
            }
          };
        return WT(ZT(TT), 0), mT
      }
      get allowsNesting() {
        return !0
      }
    }

    function pT(TT, UT, mT) {
      let WT = TT.facet(xT),
        MT = ZT(TT).topNode;
      if (!WT || WT.allowsNesting)
        for (let gT = MT; gT; gT = gT.enter(UT, mT, zT.f.ExcludeBuffers | zT.f.EnterBracketed)) gT.type.isTop && (MT = gT);
      return MT
    }
    LT.setState = MT.B.define();
    class BT extends LT {
      constructor(TT, UT, mT) {
        super(TT, UT, [], mT), this.parser = UT
      }
      static define(TT) {
        let UT = jT(TT.languageData);
        return new BT(UT, TT.parser.configure({
          props: [kT.add((TT => TT.isTop ? UT : void 0))]
        }), TT.name)
      }
      configure(TT, UT) {
        return new BT(this.data, this.parser.configure(TT), UT || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function ZT(TT) {
      let UT = TT.field(LT.state, !1);
      return UT ? UT.tree : zT.x.empty
    }

    function cT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.doc.length;
      var mT;
      return (null === (mT = TT.field(LT.state, !1)) || void 0 === mT ? void 0 : mT.context.isDone(UT)) || !1
    }

    function vT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.viewport.to,
        mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        WT = function(TT, UT) {
          let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var WT;
          let zT = null === (WT = TT.field(LT.state, !1)) || void 0 === WT ? void 0 : WT.context;
          if (!zT) return null;
          let MT = zT.viewport;
          zT.updateViewport({
            from: 0,
            to: UT
          });
          let gT = zT.isDone(UT) || zT.work(mT, UT) ? zT.tree : null;
          return zT.updateViewport(MT), gT
        }(TT.state, UT, mT);
      return WT != ZT(TT.state) && TT.dispatch({}), !!WT
    }
    class fT {
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
      read(TT, UT) {
        let mT = this.cursorPos - this.string.length;
        return TT < mT || UT >= this.cursorPos ? this.doc.sliceString(TT, UT) : this.string.slice(TT - mT, UT - mT)
      }
    }
    let qT = null;
    class iT {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          WT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          MT = arguments.length > 5 ? arguments[5] : void 0,
          gT = arguments.length > 6 ? arguments[6] : void 0,
          nT = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = TT, this.state = UT, this.fragments = mT, this.tree = WT, this.treeLen = zT, this.viewport = MT, this.skipped = gT, this.scheduleOn = nT, this.parse = null, this.tempSkipped = []
      }
      static create(TT, UT, mT) {
        return new iT(TT, UT, [], zT.x.empty, 0, mT, [], null)
      }
      startParse() {
        return this.parser.startParse(new fT(this.state.doc), this.fragments)
      }
      work(TT, UT) {
        return null != UT && UT >= this.state.doc.length && (UT = void 0), this.tree != zT.x.empty && this.isDone(null !== UT && void 0 !== UT ? UT : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var mT;
          if ("number" == typeof TT) {
            let UT = Date.now() + TT;
            TT = () => Date.now() > UT
          }
          for (this.parse || (this.parse = this.startParse()), null != UT && (null == this.parse.stoppedAt || this.parse.stoppedAt > UT) && UT < this.state.doc.length && this.parse.stopAt(UT);;) {
            let WT = this.parse.advance();
            if (WT) {
              if (this.fragments = this.withoutTempSkipped(zT.u.addTree(WT, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (mT = this.parse.stoppedAt) && void 0 !== mT ? mT : this.state.doc.length, this.tree = WT, this.parse = null, !(this.treeLen < (null !== UT && void 0 !== UT ? UT : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (TT()) return !1
          }
        }))
      }
      takeTree() {
        let TT, UT;
        this.parse && (TT = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > TT) && this.parse.stopAt(TT), this.withContext((() => {
          for (; !(UT = this.parse.advance()););
        })), this.treeLen = TT, this.tree = UT, this.fragments = this.withoutTempSkipped(zT.u.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(TT) {
        let UT = qT;
        qT = this;
        try {
          return TT()
        } finally {
          qT = UT
        }
      }
      withoutTempSkipped(TT) {
        for (let UT; UT = this.tempSkipped.pop();) TT = bT(TT, UT.from, UT.to);
        return TT
      }
      changes(TT, UT) {
        let {
          fragments: mT,
          tree: WT,
          treeLen: MT,
          viewport: gT,
          skipped: nT
        } = this;
        if (this.takeTree(), !TT.empty) {
          let UT = [];
          if (TT.iterChangedRanges(((TT, mT, WT, zT) => UT.push({
              fromA: TT,
              toA: mT,
              fromB: WT,
              toB: zT
            }))), mT = zT.u.applyChanges(mT, UT), WT = zT.x.empty, MT = 0, gT = {
              from: TT.mapPos(gT.from, -1),
              to: TT.mapPos(gT.to, 1)
            }, this.skipped.length) {
            nT = [];
            for (let UT of this.skipped) {
              let mT = TT.mapPos(UT.from, 1),
                WT = TT.mapPos(UT.to, -1);
              mT < WT && nT.push({
                from: mT,
                to: WT
              })
            }
          }
        }
        return new iT(this.parser, UT, mT, WT, MT, gT, nT, this.scheduleOn)
      }
      updateViewport(TT) {
        if (this.viewport.from == TT.from && this.viewport.to == TT.to) return !1;
        this.viewport = TT;
        let UT = this.skipped.length;
        for (let mT = 0; mT < this.skipped.length; mT++) {
          let {
            from: UT,
            to: WT
          } = this.skipped[mT];
          UT < TT.to && WT > TT.from && (this.fragments = bT(this.fragments, UT, WT), this.skipped.splice(mT--, 1))
        }
        return !(this.skipped.length >= UT) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(TT, UT) {
        this.skipped.push({
          from: TT,
          to: UT
        })
      }
      static getSkippingParser(TT) {
        return new class extends zT.q {
          createParse(UT, mT, WT) {
            let MT = WT[0].from,
              gT = WT[WT.length - 1].to;
            return {
              parsedPos: MT,
              advance() {
                let UT = qT;
                if (UT) {
                  for (let TT of WT) UT.tempSkipped.push(TT);
                  TT && (UT.scheduleOn = UT.scheduleOn ? Promise.all([UT.scheduleOn, TT]) : TT)
                }
                return this.parsedPos = gT, new zT.x(zT.l.none, [], [], gT - MT)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(TT) {
        TT = Math.min(TT, this.state.doc.length);
        let UT = this.fragments;
        return this.treeLen >= TT && UT.length && 0 == UT[0].from && UT[0].to >= TT
      }
      static get() {
        return qT
      }
    }

    function bT(TT, UT, mT) {
      return zT.u.applyChanges(TT, [{
        fromA: UT,
        toA: mT,
        fromB: UT,
        toB: mT
      }])
    }
    class OT {
      constructor(TT) {
        this.context = TT, this.tree = TT.tree
      }
      apply(TT) {
        if (!TT.docChanged && this.tree == this.context.tree) return this;
        let UT = this.context.changes(TT.changes, TT.state),
          mT = this.context.treeLen == TT.startState.doc.length ? void 0 : Math.max(TT.changes.mapPos(this.context.treeLen), UT.viewport.to);
        return UT.work(20, mT) || UT.takeTree(), new OT(UT)
      }
      static init(TT) {
        let UT = Math.min(3e3, TT.doc.length),
          mT = iT.create(TT.facet(xT).parser, TT, {
            from: 0,
            to: UT
          });
        return mT.work(20, UT) || mT.takeTree(), new OT(mT)
      }
    }
    LT.state = MT.E.define({
      create: OT.init,
      update(TT, UT) {
        for (let mT of UT.effects)
          if (mT.is(LT.setState)) return mT.value;
        return UT.startState.facet(xT) != UT.state.facet(xT) ? OT.init(UT.state) : TT.apply(UT)
      }
    });
    let eT = TT => {
      let UT = setTimeout((() => TT()), 500);
      return () => clearTimeout(UT)
    };
    "undefined" != typeof requestIdleCallback && (eT = TT => {
      let UT = -1,
        mT = setTimeout((() => {
          UT = requestIdleCallback(TT, {
            timeout: 400
          })
        }), 100);
      return () => UT < 0 ? clearTimeout(mT) : cancelIdleCallback(UT)
    });
    const YT = "undefined" != typeof navigator && (null === (WT = navigator.scheduling) || void 0 === WT ? void 0 : WT.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      JT = gT.q.fromClass(class {
        constructor(TT) {
          this.view = TT, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(TT) {
          let UT = this.view.state.field(LT.state).context;
          (UT.updateViewport(TT.view.viewport) || this.view.viewport.to > UT.treeLen) && this.scheduleWork(), (TT.docChanged || TT.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(UT)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: TT
          } = this.view, UT = TT.field(LT.state);
          UT.tree == UT.context.tree && UT.context.isDone(TT.doc.length) || (this.working = eT(this.work))
        }
        work(TT) {
          this.working = null;
          let UT = Date.now();
          if (this.chunkEnd < UT && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = UT + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: mT,
            viewport: {
              to: WT
            }
          } = this.view, zT = mT.field(LT.state);
          if (zT.tree == zT.context.tree && zT.context.isDone(WT + 1e5)) return;
          let MT = Date.now() + Math.min(this.chunkBudget, 100, TT && !YT ? Math.max(25, TT.timeRemaining() - 5) : 1e9),
            gT = zT.context.treeLen < WT && mT.doc.length > WT + 1e3,
            nT = zT.context.work((() => YT && YT() || Date.now() > MT), WT + (gT ? 0 : 1e5));
          this.chunkBudget -= Date.now() - UT, (nT || this.chunkBudget <= 0) && (zT.context.takeTree(), this.view.dispatch({
            effects: LT.setState.of(new OT(zT.context))
          })), this.chunkBudget > 0 && (!nT || gT) && this.scheduleWork(), this.checkAsyncSchedule(zT.context)
        }
        checkAsyncSchedule(TT) {
          TT.scheduleOn && (this.workScheduled++, TT.scheduleOn.then((() => this.scheduleWork())).catch((TT => (0, gT.ab)(this.view.state, TT))).then((() => this.workScheduled--)), TT.scheduleOn = null)
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
      xT = MT.o.define({
        combine: TT => TT.length ? TT[0] : null,
        enables: TT => [LT.state, JT, gT.i.contentAttributes.compute([TT], (UT => {
          let mT = UT.facet(TT);
          return mT && mT.name ? {
            "data-language": mT.name
          } : {}
        }))]
      });
    class dT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = TT, this.support = UT, this.extension = [TT, UT]
      }
    }
    const wT = MT.o.define(),
      tT = MT.o.define({
        combine: TT => {
          if (!TT.length) return "  ";
          let UT = TT[0];
          if (!UT || /\S/.test(UT) || Array.from(UT).some((TT => TT != UT[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(TT[0]));
          return UT
        }
      });

    function aT(TT) {
      let UT = TT.facet(tT);
      return 9 == UT.charCodeAt(0) ? TT.tabSize * UT.length : UT.length
    }

    function yT(TT, UT) {
      let mT = "",
        WT = TT.tabSize,
        zT = TT.facet(tT)[0];
      if ("\t" == zT) {
        for (; UT >= WT;) mT += "\t", UT -= WT;
        zT = " "
      }
      for (let MT = 0; MT < UT; MT++) mT += zT;
      return mT
    }

    function XT(TT, UT) {
      TT instanceof MT.m && (TT = new IT(TT));
      for (let WT of TT.state.facet(wT)) {
        let mT = WT(TT, UT);
        if (void 0 !== mT) return mT
      }
      let mT = ZT(TT.state);
      return mT.length >= UT ? function(TT, UT, mT) {
        let WT = UT.resolveStack(mT),
          zT = UT.resolveInner(mT, -1).resolve(mT, 0).enterUnfinishedNodesBefore(mT);
        if (zT != WT.node) {
          let TT = [];
          for (let UT = zT; UT && !(UT.from < WT.node.from || UT.to > WT.node.to || UT.from == WT.node.from && UT.type == WT.node.type); UT = UT.parent) TT.push(UT);
          for (let UT = TT.length - 1; UT >= 0; UT--) WT = {
            node: TT[UT],
            next: WT
          }
        }
        return sT(WT, TT, mT)
      }(TT, mT, UT) : null
    }
    class IT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = TT, this.options = UT, this.unit = aT(TT)
      }
      lineAt(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          mT = this.state.doc.lineAt(TT),
          {
            simulateBreak: WT,
            simulateDoubleBreak: zT
          } = this.options;
        return null != WT && WT >= mT.from && WT <= mT.to ? zT && WT == TT ? {
          text: "",
          from: TT
        } : (UT < 0 ? WT < TT : WT <= TT) ? {
          text: mT.text.slice(WT - mT.from),
          from: WT
        } : {
          text: mT.text.slice(0, WT - mT.from),
          from: mT.from
        } : mT
      }
      textAfterPos(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && TT == this.options.simulateBreak) return "";
        let {
          text: mT,
          from: WT
        } = this.lineAt(TT, UT);
        return mT.slice(TT - WT, Math.min(mT.length, TT + 100 - WT))
      }
      column(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: mT,
            from: WT
          } = this.lineAt(TT, UT),
          zT = this.countColumn(mT, TT - WT),
          MT = this.options.overrideIndentation ? this.options.overrideIndentation(WT) : -1;
        return MT > -1 && (zT += MT - this.countColumn(mT, mT.search(/\S|$/))), zT
      }
      countColumn(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.length;
        return (0, MT.S)(TT, this.state.tabSize, UT)
      }
      lineIndent(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: mT,
            from: WT
          } = this.lineAt(TT, UT),
          zT = this.options.overrideIndentation;
        if (zT) {
          let TT = zT(WT);
          if (TT > -1) return TT
        }
        return this.countColumn(mT, mT.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const QT = new zT.g;

    function sT(TT, UT, mT) {
      for (let WT = TT; WT; WT = WT.next) {
        let TT = FT(WT.node);
        if (TT) return TT(VT.create(UT, mT, WT))
      }
      return 0
    }

    function FT(TT) {
      let UT = TT.type.prop(QT);
      if (UT) return UT;
      let mT, WT = TT.firstChild;
      if (WT && (mT = WT.type.prop(zT.g.closedBy))) {
        let UT = TT.lastChild,
          WT = UT && mT.indexOf(UT.name) > -1;
        return TT => rT(TT, !0, 1, void 0, WT && ! function(TT) {
          return TT.pos == TT.options.simulateBreak && TT.options.simulateDoubleBreak
        }(TT) ? UT.from : void 0)
      }
      return null == TT.parent ? PT : null
    }

    function PT() {
      return 0
    }
    class VT extends IT {
      constructor(TT, UT, mT) {
        super(TT.state, TT.options), this.base = TT, this.pos = UT, this.context = mT
      }
      get node() {
        return this.context.node
      }
      static create(TT, UT, mT) {
        return new VT(TT, UT, mT)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(TT) {
        let UT = this.state.doc.lineAt(TT.from);
        for (;;) {
          let mT = TT.resolve(UT.from);
          for (; mT.parent && mT.parent.from == mT.from;) mT = mT.parent;
          if (uT(mT, TT)) break;
          UT = this.state.doc.lineAt(mT.from)
        }
        return this.lineIndent(UT.from)
      }
      continue () {
        return sT(this.context.next, this.base, this.pos)
      }
    }

    function uT(TT, UT) {
      for (let mT = UT; mT; mT = mT.parent)
        if (TT == mT) return !0;
      return !1
    }

    function CT(TT) {
      let {
        closing: UT,
        align: mT = !0,
        units: WT = 1
      } = TT;
      return TT => rT(TT, mT, WT, UT)
    }

    function rT(TT, UT, mT, WT, zT) {
      let MT = TT.textAfter,
        gT = MT.match(/^\s*/)[0].length,
        nT = WT && MT.slice(gT, gT + WT.length) == WT || zT == TT.pos + gT,
        HT = UT ? function(TT) {
          let UT = TT.node,
            mT = UT.childAfter(UT.from),
            WT = UT.lastChild;
          if (!mT) return null;
          let zT = TT.options.simulateBreak,
            MT = TT.state.doc.lineAt(mT.from),
            gT = null == zT || zT <= MT.from ? MT.to : Math.min(MT.to, zT);
          for (let nT = mT.to;;) {
            let TT = UT.childAfter(nT);
            if (!TT || TT == WT) return null;
            if (!TT.type.isSkipped) {
              if (TT.from >= gT) return null;
              let UT = /^ */.exec(MT.text.slice(mT.to - MT.from))[0].length;
              return {
                from: mT.from,
                to: mT.to + UT
              }
            }
            nT = TT.to
          }
        }(TT) : null;
      return HT ? nT ? TT.column(HT.from) : TT.column(HT.to) : TT.baseIndent + (nT ? 0 : TT.unit * mT)
    }
    const KT = TT => TT.baseIndent;

    function ST() {
      let {
        except: TT,
        units: UT = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return mT => {
        let WT = TT && TT.test(mT.textAfter);
        return mT.baseIndent + (WT ? 0 : UT * mT.unit)
      }
    }
    const GT = 200;

    function NT() {
      return MT.m.transactionFilter.of((TT => {
        if (!TT.docChanged || !TT.isUserEvent("input.type") && !TT.isUserEvent("input.complete")) return TT;
        let UT = TT.startState.languageDataAt("indentOnInput", TT.startState.selection.main.head);
        if (!UT.length) return TT;
        let mT = TT.newDoc,
          {
            head: WT
          } = TT.newSelection.main,
          zT = mT.lineAt(WT);
        if (WT > zT.from + GT) return TT;
        let MT = mT.sliceString(zT.from, WT);
        if (!UT.some((TT => TT.test(MT)))) return TT;
        let {
          state: gT
        } = TT, nT = -1, HT = [];
        for (let {
            head: kT
          }
          of gT.selection.hZ) {
          let TT = gT.doc.lineAt(kT);
          if (TT.from == nT) continue;
          nT = TT.from;
          let UT = XT(gT, TT.from);
          if (null == UT) continue;
          let mT = /^\s*/.exec(TT.text)[0],
            WT = yT(gT, UT);
          mT != WT && HT.push({
            from: TT.from,
            to: TT.from + mT.length,
            insert: WT
          })
        }
        return HT.length ? [TT, {
          changes: HT,
          sequential: !0
        }] : TT
      }))
    }
    const ET = MT.o.define(),
      hT = new zT.g;

    function DT(TT) {
      let UT = TT.firstChild,
        mT = TT.lastChild;
      return UT && UT.to < mT.from ? {
        from: UT.to,
        to: mT.type.isError ? TT.to : mT.from
      } : null
    }

    function oT(TT) {
      let UT = TT.lastChild;
      return UT && UT.to == TT.to && UT.type.isError
    }

    function AT(TT, UT, mT) {
      for (let WT of TT.facet(ET)) {
        let zT = WT(TT, UT, mT);
        if (zT) return zT
      }
      return function(TT, UT, mT) {
        let WT = ZT(TT);
        if (WT.length < mT) return null;
        let zT = null;
        for (let MT = WT.resolveStack(mT, 1); MT; MT = MT.next) {
          let gT = MT.node;
          if (gT.to <= mT || gT.from > mT) continue;
          if (zT && gT.from < UT) break;
          let nT = gT.type.prop(hT);
          if (nT && (gT.to < WT.length - 50 || WT.length == TT.doc.length || !oT(gT))) {
            let WT = nT(gT, TT);
            WT && WT.from <= mT && WT.from >= UT && WT.to > mT && (zT = WT)
          }
        }
        return zT
      }(TT, UT, mT)
    }

    function RT(TT, UT) {
      let mT = UT.mapPos(TT.from, 1),
        WT = UT.mapPos(TT.to, -1);
      return mT >= WT ? void 0 : {
        from: mT,
        to: WT
      }
    }
    const TU = MT.B.define({
        map: RT
      }),
      UU = MT.B.define({
        map: RT
      });

    function mU(TT) {
      let UT = [];
      for (let {
          head: mT
        }
        of TT.state.selection.hZ) UT.some((TT => TT.from <= mT && TT.to >= mT)) || UT.push(TT.lineBlockAt(mT));
      return UT
    }
    const WU = MT.E.define({
      create: () => gT.c.none,
      update(TT, UT) {
        UT.isUserEvent("delete") && UT.changes.iterChangedRanges(((UT, mT) => TT = zU(TT, UT, mT))), TT = TT.map(UT.changes);
        for (let mT of UT.effects)
          if (mT.is(TU) && !gU(TT, mT.value.from, mT.value.to)) {
            let {
              preparePlaceholder: WT
            } = UT.state.facet(lU), zT = WT ? gT.c.replace({
              widget: new ZU(WT(UT.state, mT.value))
            }) : BU;
            TT = TT.update({
              add: [zT.range(mT.value.from, mT.value.to)]
            })
          } else mT.is(UU) && (TT = TT.update({
            filter: (TT, UT) => mT.value.from != TT || mT.value.to != UT,
            filterFrom: mT.value.from,
            filterTo: mT.value.to
          }));
        return UT.selection && (TT = zU(TT, UT.selection.main.head)), TT
      },
      provide: TT => gT.i.HW.from(TT),
      toJSON(TT, UT) {
        let mT = [];
        return TT.between(0, UT.doc.length, ((TT, UT) => {
          mT.push(TT, UT)
        })), mT
      },
      fromJSON(TT) {
        if (!Array.isArray(TT) || TT.length % 2) throw new RangeError("Invalid JSON for fold state");
        let UT = [];
        for (let mT = 0; mT < TT.length;) {
          let WT = TT[mT++],
            zT = TT[mT++];
          if ("number" != typeof WT || "number" != typeof zT) throw new RangeError("Invalid JSON for fold state");
          UT.push(BU.range(WT, zT))
        }
        return gT.c.set(UT, !0)
      }
    });

    function zU(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UT,
        WT = !1;
      return TT.between(UT, mT, ((TT, zT) => {
        TT < mT && zT > UT && (WT = !0)
      })), WT ? TT.update({
        filterFrom: UT,
        filterTo: mT,
        filter: (TT, WT) => TT >= mT || WT <= UT
      }) : TT
    }

    function MU(TT, UT, mT) {
      var WT;
      let zT = null;
      return null === (WT = TT.field(WU, !1)) || void 0 === WT || WT.between(UT, mT, ((TT, UT) => {
        (!zT || zT.from > TT) && (zT = {
          from: TT,
          to: UT
        })
      })), zT
    }

    function gU(TT, UT, mT) {
      let WT = !1;
      return TT.between(UT, UT, ((TT, zT) => {
        TT == UT && zT == mT && (WT = !0)
      })), WT
    }

    function nU(TT, UT) {
      return TT.field(WU, !1) ? UT : UT.concat(MT.B.appendConfig.of(LU()))
    }

    function HU(TT, UT) {
      let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        WT = TT.state.doc.lineAt(UT.from).number,
        zT = TT.state.doc.lineAt(UT.to).number;
      return gT.i.announce.of(`${TT.state.phrase(mT?"Folded lines":"Unfolded lines")} ${WT} ${TT.state.phrase("to")} ${zT}.`)
    }
    const kU = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: TT => {
          for (let UT of mU(TT)) {
            let mT = AT(TT.state, UT.from, UT.to);
            if (mT) return TT.dispatch({
              effects: nU(TT.state, [TU.of(mT), HU(TT, mT)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: TT => {
          if (!TT.state.field(WU, !1)) return !1;
          let UT = [];
          for (let mT of mU(TT)) {
            let WT = MU(TT.state, mT.from, mT.to);
            WT && UT.push(UU.of(WT), HU(TT, WT, !1))
          }
          return UT.length && TT.dispatch({
            effects: UT
          }), UT.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: TT => {
          let {
            state: UT
          } = TT, mT = [];
          for (let WT = 0; WT < UT.doc.length;) {
            let zT = TT.lineBlockAt(WT),
              MT = AT(UT, zT.from, zT.to);
            MT && mT.push(TU.of(MT)), WT = (MT ? TT.lineBlockAt(MT.to) : zT).to + 1
          }
          return mT.length && TT.dispatch({
            effects: nU(TT.state, mT)
          }), !!mT.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: TT => {
          let UT = TT.state.field(WU, !1);
          if (!UT || !UT.size) return !1;
          let mT = [];
          return UT.between(0, TT.state.doc.length, ((TT, UT) => {
            mT.push(UU.of({
              from: TT,
              to: UT
            }))
          })), TT.dispatch({
            effects: mT
          }), !0
        }
      }],
      jU = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      lU = MT.o.define({
        combine: TT => (0, MT.Q)(TT, jU)
      });

    function LU(TT) {
      let UT = [WU, qU];
      return TT && UT.push(lU.of(TT)), UT
    }

    function pU(TT, UT) {
      let {
        state: mT
      } = TT, WT = mT.facet(lU), zT = UT => {
        let mT = TT.lineBlockAt(TT.posAtDOM(UT.target)),
          WT = MU(TT.state, mT.from, mT.to);
        WT && TT.dispatch({
          effects: UU.of(WT)
        }), UT.preventDefault()
      };
      if (WT.placeholderDOM) return WT.placeholderDOM(TT, zT, UT);
      let MT = document.createElement("span");
      return MT.textContent = WT.placeholderText, MT.setAttribute("aria-label", mT.phrase("folded code")), MT.title = mT.phrase("unfold"), MT.className = "cm-foldPlaceholder", MT.onclick = zT, MT
    }
    const BU = gT.c.replace({
      widget: new class extends gT.u {
        toDOM(TT) {
          return pU(TT, null)
        }
      }
    });
    class ZU extends gT.u {
      constructor(TT) {
        super(), this.value = TT
      }
      eq(TT) {
        return this.value == TT.value
      }
      toDOM(TT) {
        return pU(TT, this.value)
      }
    }
    const cU = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class vU extends gT.m {
      constructor(TT, UT) {
        super(), this.config = TT, this.open = UT
      }
      eq(TT) {
        return this.config == TT.config && this.open == TT.open
      }
      toDOM(TT) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let UT = document.createElement("span");
        return UT.textContent = this.open ? this.config.openText : this.config.closedText, UT.title = TT.state.phrase(this.open ? "Fold line" : "Unfold line"), UT
      }
    }

    function fU() {
      let TT = {
          ...cU,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        UT = new vU(TT, !0),
        mT = new vU(TT, !1),
        WT = gT.q.fromClass(class {
          constructor(TT) {
            this.from = TT.viewport.from, this.markers = this.buildMarkers(TT)
          }
          update(UT) {
            (UT.docChanged || UT.viewportChanged || UT.startState.facet(xT) != UT.state.facet(xT) || UT.startState.field(WU, !1) != UT.state.field(WU, !1) || ZT(UT.startState) != ZT(UT.state) || TT.foldingChanged(UT)) && (this.markers = this.buildMarkers(UT.view))
          }
          buildMarkers(TT) {
            let WT = new MT.w;
            for (let zT of TT.viewportLineBlocks) {
              let MT = MU(TT.state, zT.from, zT.to) ? mT : AT(TT.state, zT.from, zT.to) ? UT : null;
              MT && WT.add(zT.from, zT.from, MT)
            }
            return WT.finish()
          }
        }),
        {
          domEventHandlers: zT
        } = TT;
      return [WT, (0, gT.K)({
        class: "cm-foldGutter",
        markers(TT) {
          var UT;
          return (null === (UT = TT.plugin(WT)) || void 0 === UT ? void 0 : UT.markers) || MT.x.empty
        },
        initialSpacer: () => new vU(TT, !1),
        domEventHandlers: {
          ...zT,
          click: (TT, UT, mT) => {
            if (zT.click && zT.click(TT, UT, mT)) return !0;
            let WT = MU(TT.state, UT.from, UT.to);
            if (WT) return TT.dispatch({
              effects: UU.of(WT)
            }), !0;
            let MT = AT(TT.state, UT.from, UT.to);
            return !!MT && (TT.dispatch({
              effects: TU.of(MT)
            }), !0)
          }
        }
      }), LU()]
    }
    const qU = gT.i.baseTheme({
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
    class iU {
      constructor(TT, UT) {
        let mT;

        function WT(TT) {
          let UT = HT.b.newName();
          return (mT || (mT = Object.create(null)))["." + UT] = TT, UT
        }
        this.specs = TT;
        const zT = "string" == typeof UT.all ? UT.all : UT.all ? WT(UT.all) : void 0,
          MT = UT.scope;
        this.scope = MT instanceof LT ? TT => TT.prop(kT) == MT.data : MT ? TT => TT == MT : void 0, this.style = (0, nT.j)(TT.map((TT => ({
          tag: TT.tag,
          class: TT.class || WT(Object.assign({}, TT, {
            tag: null
          }))
        }))), {
          all: zT
        }).style, this.module = mT ? new HT.b(mT) : null, this.themeType = UT.themeType
      }
      static define(TT, UT) {
        return new iU(TT, UT || {})
      }
    }
    const bU = MT.o.define(),
      OU = MT.o.define({
        combine: TT => TT.length ? [TT[0]] : null
      });

    function eU(TT) {
      let UT = TT.facet(bU);
      return UT.length ? UT : TT.facet(OU)
    }

    function YU(TT, UT) {
      let mT, WT = [xU];
      return TT instanceof iU && (TT.module && WT.push(gT.i.styleModule.of(TT.module)), mT = TT.themeType), (null === UT || void 0 === UT ? void 0 : UT.fallback) ? WT.push(OU.of(TT)) : mT ? WT.push(bU.computeN([gT.i.darkTheme], (UT => UT.facet(gT.i.darkTheme) == ("dark" == mT) ? [TT] : []))) : WT.push(bU.of(TT)), WT
    }
    class JU {
      constructor(TT) {
        this.markCache = Object.create(null), this.tree = ZT(TT.state), this.HW = this.buildDeco(TT, eU(TT.state)), this.decoratedTo = TT.viewport.to
      }
      update(TT) {
        let UT = ZT(TT.state),
          mT = eU(TT.state),
          WT = mT != eU(TT.startState),
          {
            viewport: zT
          } = TT.view,
          MT = TT.changes.mapPos(this.decoratedTo, 1);
        UT.length < zT.to && !WT && UT.type == this.tree.type && MT >= zT.to ? (this.HW = this.HW.map(TT.changes), this.decoratedTo = MT) : (UT != this.tree || TT.viewportChanged || WT) && (this.tree = UT, this.HW = this.buildDeco(TT.view, mT), this.decoratedTo = zT.to)
      }
      buildDeco(TT, UT) {
        if (!UT || !this.tree.length) return gT.c.none;
        let mT = new MT.w;
        for (let {
            from: WT,
            to: zT
          }
          of TT.M6)(0, nT.e)(this.tree, UT, ((TT, UT, WT) => {
          mT.add(TT, UT, this.markCache[WT] || (this.markCache[WT] = gT.c.mark({
            class: WT
          })))
        }), WT, zT);
        return mT.finish()
      }
    }
    const xU = MT.u.high(gT.q.fromClass(JU, {
        HW: TT => TT.HW
      })),
      dU = iU.define([{
        tag: nT.k.meta,
        color: "#404740"
      }, {
        tag: nT.k.link,
        textDecoration: "underline"
      }, {
        tag: nT.k.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: nT.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: nT.k.strong,
        fontWeight: "bold"
      }, {
        tag: nT.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: nT.k.keyword,
        color: "#708"
      }, {
        tag: [nT.k.atom, nT.k.bool, nT.k.url, nT.k.contentSeparator, nT.k.labelName],
        color: "#219"
      }, {
        tag: [nT.k.literal, nT.k.inserted],
        color: "#164"
      }, {
        tag: [nT.k.string, nT.k.deleted],
        color: "#a11"
      }, {
        tag: [nT.k.regexp, nT.k.escape, nT.k.special(nT.k.string)],
        color: "#e40"
      }, {
        tag: nT.k.definition(nT.k.variableName),
        color: "#00f"
      }, {
        tag: nT.k.local(nT.k.variableName),
        color: "#30a"
      }, {
        tag: [nT.k.typeName, nT.k.namespace],
        color: "#085"
      }, {
        tag: nT.k.className,
        color: "#167"
      }, {
        tag: [nT.k.special(nT.k.variableName), nT.k.macroName],
        color: "#256"
      }, {
        tag: nT.k.definition(nT.k.propertyName),
        color: "#00c"
      }, {
        tag: nT.k.comment,
        color: "#940"
      }, {
        tag: nT.k.invalid,
        color: "#f00"
      }]),
      wU = gT.i.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      tU = 1e4,
      aU = "()[]{}",
      yU = MT.o.define({
        combine: TT => (0, MT.Q)(TT, {
          afterCursor: !0,
          brackets: aU,
          maxScanDistance: tU,
          renderMatch: QU
        })
      }),
      XU = gT.c.mark({
        class: "cm-matchingBracket"
      }),
      IU = gT.c.mark({
        class: "cm-nonmatchingBracket"
      });

    function QU(TT) {
      let UT = [],
        mT = TT.matched ? XU : IU;
      return UT.push(mT.range(TT.start.from, TT.start.to)), TT.end && UT.push(mT.range(TT.end.from, TT.end.to)), UT
    }

    function sU(TT) {
      let UT = [],
        mT = TT.facet(yU);
      for (let WT of TT.selection.hZ) {
        if (!WT.empty) continue;
        let zT = rU(TT, WT.head, -1, mT) || WT.head > 0 && rU(TT, WT.head - 1, 1, mT) || mT.afterCursor && (rU(TT, WT.head, 1, mT) || WT.head < TT.doc.length && rU(TT, WT.head + 1, -1, mT));
        zT && (UT = UT.concat(mT.renderMatch(zT, TT)))
      }
      return gT.c.set(UT, !0)
    }
    const FU = [gT.q.fromClass(class {
      constructor(TT) {
        this.paused = !1, this.HW = sU(TT.state)
      }
      update(TT) {
        (TT.docChanged || TT.selectionSet || this.paused) && (TT.view.composing ? (this.HW = this.HW.map(TT.changes), this.paused = !0) : (this.HW = sU(TT.state), this.paused = !1))
      }
    }, {
      HW: TT => TT.HW
    }), wU];

    function PU() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [yU.of(TT), FU]
    }
    const VU = new zT.g;

    function uU(TT, UT, mT) {
      let WT = TT.prop(UT < 0 ? zT.g.openedBy : zT.g.closedBy);
      if (WT) return WT;
      if (1 == TT.name.length) {
        let WT = mT.indexOf(TT.name);
        if (WT > -1 && WT % 2 == (UT < 0 ? 1 : 0)) return [mT[WT + UT]]
      }
      return null
    }

    function CU(TT) {
      let UT = TT.type.prop(VU);
      return UT ? UT(TT.node) : TT
    }

    function rU(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        zT = WT.maxScanDistance || tU,
        MT = WT.brackets || aU,
        gT = ZT(TT),
        nT = gT.resolveInner(UT, mT);
      for (let HT = nT; HT; HT = HT.parent) {
        let WT = uU(HT.type, mT, MT);
        if (WT && HT.from < HT.to) {
          let zT = CU(HT);
          if (zT && (mT > 0 ? UT >= zT.from && UT < zT.to : UT > zT.from && UT <= zT.to)) return KU(TT, UT, mT, HT, zT, WT, MT)
        }
      }
      return function(TT, UT, mT, WT, zT, MT, gT) {
        if (mT < 0 ? !UT : UT == TT.doc.length) return null;
        let nT = mT < 0 ? TT.sliceDoc(UT - 1, UT) : TT.sliceDoc(UT, UT + 1),
          HT = gT.indexOf(nT);
        if (HT < 0 || HT % 2 == 0 != mT > 0) return null;
        let kT = {
            from: mT < 0 ? UT - 1 : UT,
            to: mT > 0 ? UT + 1 : UT
          },
          jT = TT.doc.iterRange(UT, mT > 0 ? TT.doc.length : 0),
          lT = 0;
        for (let LT = 0; !jT.next().done && LT <= MT;) {
          let TT = jT.value;
          mT < 0 && (LT += TT.length);
          let MT = UT + LT * mT;
          for (let UT = mT > 0 ? 0 : TT.length - 1, nT = mT > 0 ? TT.length : -1; UT != nT; UT += mT) {
            let nT = gT.indexOf(TT[UT]);
            if (!(nT < 0 || WT.resolveInner(MT + UT, 1).type != zT))
              if (nT % 2 == 0 == mT > 0) lT++;
              else {
                if (1 == lT) return {
                  start: kT,
                  end: {
                    from: MT + UT,
                    to: MT + UT + 1
                  },
                  matched: nT >> 1 == HT >> 1
                };
                lT--
              }
          }
          mT > 0 && (LT += TT.length)
        }
        return jT.done ? {
          start: kT,
          matched: !1
        } : null
      }(TT, UT, mT, gT, nT.type, zT, MT)
    }

    function KU(TT, UT, mT, WT, zT, MT, gT) {
      let nT = WT.parent,
        HT = {
          from: zT.from,
          to: zT.to
        },
        kT = 0,
        jT = null === nT || void 0 === nT ? void 0 : nT.cursor();
      if (jT && (mT < 0 ? jT.childBefore(WT.from) : jT.childAfter(WT.to)))
        do {
          if (mT < 0 ? jT.to <= WT.from : jT.from >= WT.to) {
            if (0 == kT && MT.indexOf(jT.type.name) > -1 && jT.from < jT.to) {
              let TT = CU(jT);
              return {
                start: HT,
                end: TT ? {
                  from: TT.from,
                  to: TT.to
                } : void 0,
                matched: !0
              }
            }
            if (uU(jT.type, mT, gT)) kT++;
            else if (uU(jT.type, -mT, gT)) {
              if (0 == kT) {
                let TT = CU(jT);
                return {
                  start: HT,
                  end: TT && TT.from < TT.to ? {
                    from: TT.from,
                    to: TT.to
                  } : void 0,
                  matched: !1
                }
              }
              kT--
            }
          }
        } while (mT < 0 ? jT.prevSibling() : jT.nextSibling());
      return {
        start: HT,
        matched: !1
      }
    }
    const SU = Object.create(null),
      GU = [zT.l.none],
      NU = [],
      EU = Object.create(null),
      hU = Object.create(null);
    for (let [AU, RU] of [
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
      ]) hU[AU] = oU(SU, RU);

    function DU(TT, UT) {
      NU.indexOf(TT) > -1 || (NU.push(TT), console.warn(UT))
    }

    function oU(TT, UT) {
      let mT = [];
      for (let zT of UT.split(" ")) {
        let UT = [];
        for (let mT of zT.split(".")) {
          let WT = TT[mT] || nT.k[mT];
          WT ? "function" == typeof WT ? UT.length ? UT = UT.map(WT) : DU(mT, `Modifier ${mT} used at start of tag`) : UT.length ? DU(mT, `Tag ${mT} used as modifier`) : UT = Array.isArray(WT) ? WT : [WT] : DU(mT, `Unknown highlighting tag ${mT}`)
        }
        for (let TT of UT) mT.push(TT)
      }
      if (!mT.length) return 0;
      let WT = UT.replace(/ /g, "_"),
        MT = WT + " " + mT.map((TT => TT.id)),
        gT = EU[MT];
      if (gT) return gT.id;
      let HT = EU[MT] = zT.l.define({
        id: GU.length,
        name: WT,
        props: [(0, nT.g)({
          [WT]: mT
        })]
      });
      return GU.push(HT), HT.id
    }
    gT.e.RTL, gT.e.LTR
  },
  41519: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => qT,
      h: () => eT
    });
    var WT = mT(41466),
      zT = mT(41459),
      MT = mT(41475);
    class gT {
      constructor(TT, UT, mT) {
        this.from = TT, this.to = UT, this.diagnostic = mT
      }
    }
    class nT {
      constructor(TT, UT, mT) {
        this.diagnostics = TT, this.panel = UT, this.selected = mT
      }
      static init(TT, UT, mT) {
        let MT = mT.facet(bT).markerFilter;
        MT && (TT = MT(TT, mT));
        let gT = TT.slice().sort(((TT, UT) => TT.from - UT.from || TT.to - UT.to)),
          kT = new zT.w,
          jT = [],
          lT = 0,
          LT = mT.doc.iter(),
          pT = 0,
          BT = mT.doc.length;
        for (let zT = 0;;) {
          let TT, UT, mT = zT == gT.length ? null : gT[zT];
          if (!mT && !jT.length) break;
          if (jT.length) TT = lT, UT = jT.reduce(((TT, UT) => Math.min(TT, UT.to)), mT && mT.from > TT ? mT.from : 1e8);
          else {
            if (TT = mT.from, TT > BT) break;
            UT = mT.to, jT.push(mT), zT++
          }
          for (; zT < gT.length;) {
            let mT = gT[zT];
            if (mT.from != TT || !(mT.to > mT.from || mT.to == TT)) {
              UT = Math.min(mT.from, UT);
              break
            }
            jT.push(mT), zT++, UT = Math.min(mT.to, UT)
          }
          UT = Math.min(UT, BT);
          let MT = !1;
          if (jT.some((mT => mT.from == TT && (mT.to == UT || UT == BT))) && (MT = TT == UT, !MT && UT - TT < 10)) {
            let mT = TT - (pT + LT.value.length);
            mT > 0 && (LT.next(mT), pT = TT);
            for (let WT = TT;;) {
              if (WT >= UT) {
                MT = !0;
                break
              }
              if (!LT.lineBreak && pT + LT.value.length > WT) break;
              WT = pT + LT.value.length, pT += LT.value.length, LT.next()
            }
          }
          let nT = IT(jT);
          if (MT) kT.add(TT, TT, WT.c.widget({
            widget: new xT(nT),
            diagnostics: jT.slice()
          }));
          else {
            let mT = jT.reduce(((TT, UT) => UT.markClass ? TT + " " + UT.markClass : TT), "");
            kT.add(TT, UT, WT.c.mark({
              class: "cm-lintRange cm-lintRange-" + nT + mT,
              diagnostics: jT.slice(),
              inclusiveEnd: jT.some((TT => TT.to > UT))
            }))
          }
          if (lT = UT, lT == BT) break;
          for (let WT = 0; WT < jT.length; WT++) jT[WT].to <= lT && jT.splice(WT--, 1)
        }
        let ZT = kT.finish();
        return new nT(ZT, UT, HT(ZT))
      }
    }

    function HT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        WT = null;
      return TT.between(mT, 1e9, ((TT, mT, zT) => {
        let {
          spec: MT
        } = zT;
        if (!(UT && MT.diagnostics.indexOf(UT) < 0))
          if (WT) {
            if (MT.diagnostics.indexOf(WT.diagnostic) < 0) return !1;
            WT = new gT(WT.from, mT, WT.diagnostic)
          } else WT = new gT(TT, mT, UT || MT.diagnostics[0])
      })), WT
    }

    function kT(TT, UT) {
      let mT = UT.pos,
        WT = UT.end || mT,
        zT = TT.state.facet(bT).hideOn(TT, mT, WT);
      if (null != zT) return zT;
      let MT = TT.startState.doc.lineAt(UT.pos);
      return !(!TT.effects.some((TT => TT.is(lT))) && !TT.changes.touchesRange(MT.from, Math.max(MT.to, WT)))
    }

    function jT(TT, UT) {
      return TT.field(BT, !1) ? UT : UT.concat(zT.B.appendConfig.of(QT))
    }
    const lT = zT.B.define(),
      LT = zT.B.define(),
      pT = zT.B.define(),
      BT = zT.E.define({
        create: () => new nT(WT.c.none, null, null),
        update(TT, UT) {
          if (UT.docChanged && TT.diagnostics.size) {
            let mT = TT.diagnostics.map(UT.changes),
              WT = null,
              zT = TT.panel;
            if (TT.selected) {
              let zT = UT.changes.mapPos(TT.selected.from, 1);
              WT = HT(mT, TT.selected.diagnostic, zT) || HT(mT, null, zT)
            }!mT.size && zT && UT.state.facet(bT).autoPanel && (zT = null), TT = new nT(mT, zT, WT)
          }
          for (let mT of UT.effects)
            if (mT.is(lT)) {
              let WT = UT.state.facet(bT).autoPanel ? mT.value.length ? wT.open : null : TT.panel;
              TT = nT.init(mT.value, WT, UT.state)
            } else mT.is(LT) ? TT = new nT(TT.diagnostics, mT.value ? wT.open : null, TT.selected) : mT.is(pT) && (TT = new nT(TT.diagnostics, TT.panel, mT.value));
          return TT
        },
        provide: TT => [WT.lb.from(TT, (TT => TT.panel)), WT.i.HW.from(TT, (TT => TT.diagnostics))]
      });
    const ZT = WT.c.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function cT(TT, UT, mT) {
      let WT, {
          diagnostics: zT
        } = TT.state.field(BT),
        MT = -1,
        gT = -1;
      zT.between(UT - (mT < 0 ? 1 : 0), UT + (mT > 0 ? 1 : 0), ((TT, zT, nT) => {
        let {
          spec: HT
        } = nT;
        if (UT >= TT && UT <= zT && (TT == zT || (UT > TT || mT > 0) && (UT < zT || mT < 0))) return WT = HT.diagnostics, MT = TT, gT = zT, !1
      }));
      let nT = TT.state.facet(bT).tooltipFilter;
      return WT && nT && (WT = nT(WT, TT.state)), WT ? {
        pos: MT,
        end: gT,
        above: TT.state.doc.lineAt(MT).to < gT,
        create: () => ({
          dom: vT(TT, WT)
        })
      } : null
    }

    function vT(TT, UT) {
      return (0, MT.e)("ul", {
        class: "cm-tooltip-lint"
      }, UT.map((UT => JT(TT, UT, !1))))
    }
    const fT = TT => {
        let UT = TT.state.field(BT, !1);
        return !(!UT || !UT.panel) && (TT.dispatch({
          effects: LT.of(!1)
        }), !0)
      },
      qT = [{
        key: "Mod-Shift-m",
        run: TT => {
          let UT = TT.state.field(BT, !1);
          UT && UT.panel || TT.dispatch({
            effects: jT(TT.state, [LT.of(!0)])
          });
          let mT = (0, WT.G)(TT, wT.open);
          return mT && mT.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: TT => {
          let UT = TT.state.field(BT, !1);
          if (!UT) return !1;
          let mT = TT.state.selection.main,
            WT = HT(UT.diagnostics, null, mT.to + 1);
          return !(!WT && (WT = HT(UT.diagnostics, null, 0), !WT || WT.from == mT.from && WT.to == mT.to)) && (TT.dispatch({
            selection: {
              anchor: WT.from,
              head: WT.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      iT = WT.q.fromClass(class {
        constructor(TT) {
          this.view = TT, this.timeout = -1, this.set = !0;
          let {
            delay: UT
          } = TT.state.facet(bT);
          this.lintTime = Date.now() + UT, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, UT)
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
              sources: UT
            } = TT.facet(bT);
            UT.length && function(TT, UT, mT) {
              let WT = [],
                zT = -1;
              for (let MT of TT) MT.then((mT => {
                WT.push(mT), clearTimeout(zT), WT.length == TT.length ? UT(WT) : zT = setTimeout((() => UT(WT)), 200)
              }), mT)
            }(UT.map((TT => Promise.resolve(TT(this.view)))), (UT => {
              this.view.state.doc == TT.doc && this.view.dispatch(function(TT, UT) {
                return {
                  effects: jT(TT, [lT.of(UT)])
                }
              }(this.view.state, UT.reduce(((TT, UT) => TT.concat(UT)))))
            }), (TT => {
              (0, WT.ab)(this.view.state, TT)
            }))
          }
        }
        update(TT) {
          let UT = TT.state.facet(bT);
          (TT.docChanged || UT != TT.startState.facet(bT) || UT.needsRefresh && UT.needsRefresh(TT)) && (this.lintTime = Date.now() + UT.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, UT.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const bT = zT.o.define({
      combine: TT => ({
        sources: TT.map((TT => TT.source)).filter((TT => null != TT)),
        ...(0, zT.Q)(TT.map((TT => TT.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: OT,
          tooltipFilter: OT,
          needsRefresh: (TT, UT) => TT ? UT ? mT => TT(mT) || UT(mT) : TT : UT,
          hideOn: (TT, UT) => TT ? UT ? (mT, WT, zT) => TT(mT, WT, zT) || UT(mT, WT, zT) : TT : UT,
          autoPanel: (TT, UT) => TT || UT
        })
      })
    });

    function OT(TT, UT) {
      return TT ? UT ? (mT, WT) => UT(TT(mT, WT), WT) : TT : UT
    }

    function eT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [bT.of({
        source: TT,
        config: UT
      }), iT, QT]
    }

    function YT(TT) {
      let UT = [];
      if (TT) TT: for (let {
          name: mT
        }
        of TT) {
        for (let TT = 0; TT < mT.length; TT++) {
          let WT = mT[TT];
          if (/[a-zA-Z]/.test(WT) && !UT.some((TT => TT.toLowerCase() == WT.toLowerCase()))) {
            UT.push(WT);
            continue TT
          }
        }
        UT.push("")
      }
      return UT
    }

    function JT(TT, UT, mT) {
      var WT;
      let zT = mT ? YT(UT.actions) : [];
      return (0, MT.e)("li", {
        class: "cm-diagnostic cm-diagnostic-" + UT.severity
      }, (0, MT.e)("span", {
        class: "cm-diagnosticText"
      }, UT.renderMessage ? UT.renderMessage(TT) : UT.message), null === (WT = UT.actions) || void 0 === WT ? void 0 : WT.map(((mT, WT) => {
        let gT = !1,
          nT = WT => {
            if (WT.preventDefault(), gT) return;
            gT = !0;
            let zT = HT(TT.state.field(BT).diagnostics, UT);
            zT && mT.apply(TT, zT.from, zT.to)
          },
          {
            name: kT
          } = mT,
          jT = zT[WT] ? kT.indexOf(zT[WT]) : -1,
          lT = jT < 0 ? kT : [kT.slice(0, jT), (0, MT.e)("u", kT.slice(jT, jT + 1)), kT.slice(jT + 1)],
          LT = mT.markClass ? " " + mT.markClass : "";
        return (0, MT.e)("button", {
          type: "button",
          class: "cm-diagnosticAction" + LT,
          onclick: nT,
          onmousedown: nT,
          "aria-label": ` Action: ${kT}${jT<0?"":` (access key "${zT[WT]})"`}.`
        }, lT)
      })), UT.source && (0, MT.e)("div", {
        class: "cm-diagnosticSource"
      }, UT.source))
    }
    class xT extends WT.u {
      constructor(TT) {
        super(), this.sev = TT
      }
      eq(TT) {
        return TT.sev == this.sev
      }
      toDOM() {
        return (0, MT.e)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class dT {
      constructor(TT, UT) {
        this.diagnostic = UT, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = JT(TT, UT, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class wT {
      constructor(TT) {
        this.view = TT, this.items = [];
        this.list = (0, MT.e)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: UT => {
            if (!(UT.ctrlKey || UT.altKey || UT.metaKey)) {
              if (27 == UT.keyCode) fT(this.view), this.view.focus();
              else if (38 == UT.keyCode || 33 == UT.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == UT.keyCode || 34 == UT.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == UT.keyCode) this.moveSelection(0);
              else if (35 == UT.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == UT.keyCode) this.view.focus();
              else {
                if (!(UT.keyCode >= 65 && UT.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: mT
                  } = this.items[this.selectedIndex], WT = YT(mT.actions);
                  for (let zT = 0; zT < WT.length; zT++)
                    if (WT[zT].toUpperCase().charCodeAt(0) == UT.keyCode) {
                      let UT = HT(this.view.state.field(BT).diagnostics, mT);
                      UT && mT.actions[zT].apply(TT, UT.from, UT.to)
                    }
                }
              }
              UT.preventDefault()
            }
          },
          onclick: TT => {
            for (let UT = 0; UT < this.items.length; UT++) this.items[UT].dom.contains(TT.target) && this.moveSelection(UT)
          }
        }), this.dom = (0, MT.e)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, MT.e)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => fT(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let TT = this.view.state.field(BT).selected;
        if (!TT) return -1;
        for (let UT = 0; UT < this.items.length; UT++)
          if (this.items[UT].diagnostic == TT.diagnostic) return UT;
        return -1
      }
      update() {
        let {
          diagnostics: TT,
          selected: UT
        } = this.view.state.field(BT), mT = 0, WT = !1, zT = null, MT = new Set;
        for (TT.between(0, this.view.state.doc.length, ((TT, gT, nT) => {
            let {
              spec: HT
            } = nT;
            for (let kT of HT.diagnostics) {
              if (MT.has(kT)) continue;
              MT.add(kT);
              let TT, gT = -1;
              for (let UT = mT; UT < this.items.length; UT++)
                if (this.items[UT].diagnostic == kT) {
                  gT = UT;
                  break
                } gT < 0 ? (TT = new dT(this.view, kT), this.items.splice(mT, 0, TT), WT = !0) : (TT = this.items[gT], gT > mT && (this.items.splice(mT, gT - mT), WT = !0)), UT && TT.diagnostic == UT.diagnostic ? TT.dom.hasAttribute("aria-selected") || (TT.dom.setAttribute("aria-selected", "true"), zT = TT) : TT.dom.hasAttribute("aria-selected") && TT.dom.removeAttribute("aria-selected"), mT++
            }
          })); mT < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) WT = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new dT(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), WT = !0), zT ? (this.list.setAttribute("aria-activedescendant", zT.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: zT.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: TT => {
            let {
              sel: UT,
              panel: mT
            } = TT, WT = mT.height / this.list.offsetHeight;
            UT.top < mT.top ? this.list.scrollTop -= (mT.top - UT.top) / WT : UT.bottom > mT.bottom && (this.list.scrollTop += (UT.bottom - mT.bottom) / WT)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), WT && this.sync()
      }
      sync() {
        let TT = this.list.firstChild;

        function UT() {
          let UT = TT;
          TT = UT.nextSibling, UT.remove()
        }
        for (let mT of this.items)
          if (mT.dom.parentNode == this.list) {
            for (; TT != mT.dom;) UT();
            TT = mT.dom.nextSibling
          } else this.list.insertBefore(mT.dom, TT);
        for (; TT;) UT()
      }
      moveSelection(TT) {
        if (this.selectedIndex < 0) return;
        let UT = HT(this.view.state.field(BT).diagnostics, this.items[TT].diagnostic);
        UT && this.view.dispatch({
          selection: {
            anchor: UT.from,
            head: UT.to
          },
          scrollIntoView: !0,
          effects: pT.of(UT)
        })
      }
      static open(TT) {
        return new wT(TT)
      }
    }

    function tT(TT) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(TT)}</svg>')`
    }

    function aT(TT) {
      return tT(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${TT}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const yT = WT.i.baseTheme({
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
        backgroundImage: aT("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: aT("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: aT("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: aT("#66d")
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

    function XT(TT) {
      return "error" == TT ? 4 : "warning" == TT ? 3 : "info" == TT ? 2 : 1
    }

    function IT(TT) {
      let UT = "hint",
        mT = 1;
      for (let WT of TT) {
        let TT = XT(WT.severity);
        TT > mT && (mT = TT, UT = WT.severity)
      }
      return UT
    }
    WT.m;
    const QT = [BT, WT.i.HW.compute([BT], (TT => {
      let {
        selected: UT,
        panel: mT
      } = TT.field(BT);
      return UT && mT && UT.from != UT.to ? WT.c.set([ZT.range(UT.from, UT.to)]) : WT.c.none
    })), (0, WT.T)(cT, {
      hideOn: kT
    }), yT]
  },
  41512: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => AT,
      d: () => vT,
      g: () => RT
    });
    var WT = mT(41466),
      zT = mT(41459),
      MT = mT(41475);
    const gT = "function" == typeof String.prototype.normalize ? TT => TT.normalize("NFKD") : TT => TT;
    class nT {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.length,
          zT = arguments.length > 4 ? arguments[4] : void 0,
          MT = arguments.length > 5 ? arguments[5] : void 0;
        this.test = MT, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = TT.iterRange(mT, WT), this.bufferStart = mT, this.normalize = zT ? TT => zT(gT(TT)) : gT, this.query = this.normalize(UT)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, zT.M)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let TT = this.peek();
          if (TT < 0) return this.done = !0, this;
          let UT = (0, zT.$)(TT),
            mT = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, zT.P)(TT);
          let WT = this.normalize(UT);
          if (WT.length)
            for (let zT = 0, MT = mT;; zT++) {
              let TT = WT.charCodeAt(zT),
                gT = this.match(TT, MT, this.bufferPos + this.bufferStart);
              if (zT == WT.length - 1) {
                if (gT) return this.value = gT, this;
                break
              }
              MT == mT && zT < UT.length && UT.charCodeAt(zT) == TT && MT++
            }
        }
      }
      match(TT, UT, mT) {
        let WT = null;
        for (let zT = 0; zT < this.matches.length; zT += 2) {
          let UT = this.matches[zT],
            MT = !1;
          this.query.charCodeAt(UT) == TT && (UT == this.query.length - 1 ? WT = {
            from: this.matches[zT + 1],
            to: mT
          } : (this.matches[zT]++, MT = !0)), MT || (this.matches.splice(zT, 2), zT -= 2)
        }
        return this.query.charCodeAt(0) == TT && (1 == this.query.length ? WT = {
          from: UT,
          to: mT
        } : this.matches.push(1, UT)), WT && this.test && !this.test(WT.from, WT.to, this.buffer, this.bufferStart) && (WT = null), WT
      }
    }
    "undefined" != typeof Symbol && (nT.prototype[Symbol.iterator] = function() {
      return this
    });
    const HT = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      kT = "gm" + (null == /x/.unicode ? "" : "u");
    class jT {
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : TT.length;
        if (this.text = TT, this.to = zT, this.curLine = "", this.done = !1, this.value = HT, /\\[sWDnr]|\n|\r|\[\^/.test(UT)) return new pT(TT, UT, mT, WT, zT);
        this.re = new RegExp(UT, kT + ((null === mT || void 0 === mT ? void 0 : mT.ignoreCase) ? "i" : "")), this.test = null === mT || void 0 === mT ? void 0 : mT.test, this.iter = TT.iter();
        let MT = TT.lineAt(WT);
        this.curLineStart = MT.from, this.matchPos = BT(TT, WT), this.getLine(this.curLineStart)
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
          let UT = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (UT) {
            let mT = this.curLineStart + UT.index,
              WT = mT + UT[0].length;
            if (this.matchPos = BT(this.text, WT + (mT == WT ? 1 : 0)), mT == this.curLineStart + this.curLine.length && this.nextLine(), (mT < WT || mT > this.value.to) && (!this.test || this.test(mT, WT, UT))) return this.value = {
              from: mT,
              to: WT,
              match: UT
            }, this;
            TT = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), TT = 0
          }
        }
      }
    }
    const lT = new WeakMap;
    class LT {
      constructor(TT, UT) {
        this.from = TT, this.text = UT
      }
      get to() {
        return this.from + this.text.length
      }
      static get(TT, UT, mT) {
        let WT = lT.get(TT);
        if (!WT || WT.from >= mT || WT.to <= UT) {
          let WT = new LT(UT, TT.sliceString(UT, mT));
          return lT.set(TT, WT), WT
        }
        if (WT.from == UT && WT.to == mT) return WT;
        let {
          text: zT,
          from: MT
        } = WT;
        return MT > UT && (zT = TT.sliceString(UT, MT) + zT, MT = UT), WT.to < mT && (zT += TT.sliceString(WT.to, mT)), lT.set(TT, new LT(MT, zT)), new LT(UT, zT.slice(UT - MT, mT - MT))
      }
    }
    class pT {
      constructor(TT, UT, mT, WT, zT) {
        this.text = TT, this.to = zT, this.done = !1, this.value = HT, this.matchPos = BT(TT, WT), this.re = new RegExp(UT, kT + ((null === mT || void 0 === mT ? void 0 : mT.ignoreCase) ? "i" : "")), this.test = null === mT || void 0 === mT ? void 0 : mT.test, this.flat = LT.get(TT, WT, this.chunkEnd(WT + 5e3))
      }
      chunkEnd(TT) {
        return TT >= this.to ? this.to : this.text.lineAt(TT).to
      }
      next() {
        for (;;) {
          let TT = this.re.lastIndex = this.matchPos - this.flat.from,
            UT = this.re.exec(this.flat.text);
          if (UT && !UT[0] && UT.index == TT && (this.re.lastIndex = TT + 1, UT = this.re.exec(this.flat.text)), UT) {
            let TT = this.flat.from + UT.index,
              mT = TT + UT[0].length;
            if ((this.flat.to >= this.to || UT.index + UT[0].length <= this.flat.text.length - 10) && (!this.test || this.test(TT, mT, UT))) return this.value = {
              from: TT,
              to: mT,
              match: UT
            }, this.matchPos = BT(this.text, mT + (TT == mT ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = LT.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function BT(TT, UT) {
      if (UT >= TT.length) return UT;
      let mT, WT = TT.lineAt(UT);
      for (; UT < WT.to && (mT = WT.text.charCodeAt(UT - WT.from)) >= 56320 && mT < 57344;) UT++;
      return UT
    }
    "undefined" != typeof Symbol && (jT.prototype[Symbol.iterator] = pT.prototype[Symbol.iterator] = function() {
      return this
    });
    const ZT = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      cT = zT.o.define({
        combine: TT => (0, zT.Q)(TT, ZT, {
          highlightWordAroundCursor: (TT, UT) => TT || UT,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function vT(TT) {
      let UT = [OT, bT];
      return TT && UT.push(cT.of(TT)), UT
    }
    const fT = WT.c.mark({
        class: "cm-selectionMatch"
      }),
      qT = WT.c.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function iT(TT, UT, mT, WT) {
      return (0 == mT || TT(UT.sliceDoc(mT - 1, mT)) != zT.j.Word) && (WT == UT.doc.length || TT(UT.sliceDoc(WT, WT + 1)) != zT.j.Word)
    }
    const bT = WT.q.fromClass(class {
        constructor(TT) {
          this.HW = this.getDeco(TT)
        }
        update(TT) {
          (TT.selectionSet || TT.docChanged || TT.viewportChanged) && (this.HW = this.getDeco(TT.view))
        }
        getDeco(TT) {
          let UT = TT.state.facet(cT),
            {
              state: mT
            } = TT,
            MT = mT.selection;
          if (MT.hZ.length > 1) return WT.c.none;
          let gT, HT = MT.main,
            kT = null;
          if (HT.empty) {
            if (!UT.highlightWordAroundCursor) return WT.c.none;
            let TT = mT.wordAt(HT.head);
            if (!TT) return WT.c.none;
            kT = mT.charCategorizer(HT.head), gT = mT.sliceDoc(TT.from, TT.to)
          } else {
            let TT = HT.to - HT.from;
            if (TT < UT.minSelectionLength || TT > 200) return WT.c.none;
            if (UT.wholeWords) {
              if (gT = mT.sliceDoc(HT.from, HT.to), kT = mT.charCategorizer(HT.head), !iT(kT, mT, HT.from, HT.to) || ! function(TT, UT, mT, WT) {
                  return TT(UT.sliceDoc(mT, mT + 1)) == zT.j.Word && TT(UT.sliceDoc(WT - 1, WT)) == zT.j.Word
                }(kT, mT, HT.from, HT.to)) return WT.c.none
            } else if (gT = mT.sliceDoc(HT.from, HT.to), !gT) return WT.c.none
          }
          let jT = [];
          for (let zT of TT.M6) {
            let TT = new nT(mT.doc, gT, zT.from, zT.to);
            for (; !TT.next().done;) {
              let {
                from: zT,
                to: MT
              } = TT.value;
              if ((!kT || iT(kT, mT, zT, MT)) && (HT.empty && zT <= HT.from && MT >= HT.to ? jT.push(qT.range(zT, MT)) : (zT >= HT.to || MT <= HT.from) && jT.push(fT.range(zT, MT)), jT.length > UT.maxMatches)) return WT.c.none
            }
          }
          return WT.c.set(jT)
        }
      }, {
        HW: TT => TT.HW
      }),
      OT = WT.i.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const eT = zT.o.define({
      combine: TT => (0, zT.Q)(TT, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: TT => new TU(TT),
        scrollToMatch: TT => WT.i.scrollIntoView(TT)
      })
    });
    class YT {
      constructor(TT) {
        this.search = TT.search, this.caseSensitive = !!TT.caseSensitive, this.literal = !!TT.literal, this.regexp = !!TT.regexp, this.replace = TT.replace || "", this.valid = !!this.search && (!this.regexp || function(TT) {
          try {
            return new RegExp(TT, kT), !0
          } catch (UT) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!TT.wholeWord, this.test = TT.test
      }
      unquote(TT) {
        return this.literal ? TT : TT.replace(/\\([nrt\\])/g, ((TT, UT) => "n" == UT ? "\n" : "r" == UT ? "\r" : "t" == UT ? "\t" : "\\"))
      }
      eq(TT) {
        return this.search == TT.search && this.replace == TT.replace && this.caseSensitive == TT.caseSensitive && this.regexp == TT.regexp && this.wholeWord == TT.wholeWord && this.test == TT.test
      }
      create() {
        return this.regexp ? new yT(this) : new dT(this)
      }
      getCursor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = TT.doc ? TT : zT.m.create({
            doc: TT
          });
        return null == mT && (mT = WT.doc.length), this.regexp ? wT(this, WT, UT, mT) : xT(this, WT, UT, mT)
      }
    }
    class JT {
      constructor(TT) {
        this.spec = TT
      }
    }

    function xT(TT, UT, mT, WT) {
      let MT;
      var gT, HT;
      return TT.wholeWord && (gT = UT.doc, HT = UT.charCategorizer(UT.selection.main.head), MT = (TT, UT, mT, WT) => ((WT > TT || WT + mT.length < UT) && (WT = Math.max(0, TT - 2), mT = gT.sliceString(WT, Math.min(gT.length, UT + 2))), (HT(tT(mT, TT - WT)) != zT.j.Word || HT(aT(mT, TT - WT)) != zT.j.Word) && (HT(aT(mT, UT - WT)) != zT.j.Word || HT(tT(mT, UT - WT)) != zT.j.Word))), TT.test && (MT = function(TT, UT, mT) {
        return (WT, zT, MT, gT) => {
          if (mT && !mT(WT, zT, MT, gT)) return !1;
          let nT = WT >= gT && zT <= gT + MT.length ? MT.slice(WT - gT, zT - gT) : UT.doc.sliceString(WT, zT);
          return TT(nT, UT, WT, zT)
        }
      }(TT.test, UT, MT)), new nT(UT.doc, TT.unquoted, mT, WT, TT.caseSensitive ? void 0 : TT => TT.toLowerCase(), MT)
    }
    class dT extends JT {
      constructor(TT) {
        super(TT)
      }
      nextMatch(TT, UT, mT) {
        let WT = xT(this.spec, TT, mT, TT.doc.length).nextOverlapping();
        if (WT.done) {
          let mT = Math.min(TT.doc.length, UT + this.spec.unquoted.length);
          WT = xT(this.spec, TT, 0, mT).nextOverlapping()
        }
        return WT.done || WT.value.from == UT && WT.value.to == mT ? null : WT.value
      }
      prevMatchInRange(TT, UT, mT) {
        for (let WT = mT;;) {
          let mT = Math.max(UT, WT - 1e4 - this.spec.unquoted.length),
            zT = xT(this.spec, TT, mT, WT),
            MT = null;
          for (; !zT.nextOverlapping().done;) MT = zT.value;
          if (MT) return MT;
          if (mT == UT) return null;
          WT -= 1e4
        }
      }
      prevMatch(TT, UT, mT) {
        let WT = this.prevMatchInRange(TT, 0, UT);
        return WT || (WT = this.prevMatchInRange(TT, Math.max(0, mT - this.spec.unquoted.length), TT.doc.length)), !WT || WT.from == UT && WT.to == mT ? null : WT
      }
      getReplacement(TT) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(TT, UT) {
        let mT = xT(this.spec, TT, 0, TT.doc.length),
          WT = [];
        for (; !mT.next().done;) {
          if (WT.length >= UT) return null;
          WT.push(mT.value)
        }
        return WT
      }
      highlight(TT, UT, mT, WT) {
        let zT = xT(this.spec, TT, Math.max(0, UT - this.spec.unquoted.length), Math.min(mT + this.spec.unquoted.length, TT.doc.length));
        for (; !zT.next().done;) WT(zT.value.from, zT.value.to)
      }
    }

    function wT(TT, UT, mT, WT) {
      let MT;
      var gT;
      return TT.wholeWord && (gT = UT.charCategorizer(UT.selection.main.head), MT = (TT, UT, mT) => !mT[0].length || (gT(tT(mT.input, mT.index)) != zT.j.Word || gT(aT(mT.input, mT.index)) != zT.j.Word) && (gT(aT(mT.input, mT.index + mT[0].length)) != zT.j.Word || gT(tT(mT.input, mT.index + mT[0].length)) != zT.j.Word)), TT.test && (MT = function(TT, UT, mT) {
        return (WT, zT, MT) => (!mT || mT(WT, zT, MT)) && TT(MT[0], UT, WT, zT)
      }(TT.test, UT, MT)), new jT(UT.doc, TT.search, {
        ignoreCase: !TT.caseSensitive,
        test: MT
      }, mT, WT)
    }

    function tT(TT, UT) {
      return TT.slice((0, zT.U)(TT, UT, !1), UT)
    }

    function aT(TT, UT) {
      return TT.slice(UT, (0, zT.U)(TT, UT))
    }
    class yT extends JT {
      nextMatch(TT, UT, mT) {
        let WT = wT(this.spec, TT, mT, TT.doc.length).next();
        return WT.done && (WT = wT(this.spec, TT, 0, UT).next()), WT.done ? null : WT.value
      }
      prevMatchInRange(TT, UT, mT) {
        for (let WT = 1;; WT++) {
          let zT = Math.max(UT, mT - 1e4 * WT),
            MT = wT(this.spec, TT, zT, mT),
            gT = null;
          for (; !MT.next().done;) gT = MT.value;
          if (gT && (zT == UT || gT.from > zT + 10)) return gT;
          if (zT == UT) return null
        }
      }
      prevMatch(TT, UT, mT) {
        return this.prevMatchInRange(TT, 0, UT) || this.prevMatchInRange(TT, mT, TT.doc.length)
      }
      getReplacement(TT) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((UT, mT) => {
          if ("&" == mT) return TT.match[0];
          if ("$" == mT) return "$";
          for (let WT = mT.length; WT > 0; WT--) {
            let UT = +mT.slice(0, WT);
            if (UT > 0 && UT < TT.match.length) return TT.match[UT] + mT.slice(WT)
          }
          return UT
        }))
      }
      matchAll(TT, UT) {
        let mT = wT(this.spec, TT, 0, TT.doc.length),
          WT = [];
        for (; !mT.next().done;) {
          if (WT.length >= UT) return null;
          WT.push(mT.value)
        }
        return WT
      }
      highlight(TT, UT, mT, WT) {
        let zT = wT(this.spec, TT, Math.max(0, UT - 250), Math.min(mT + 250, TT.doc.length));
        for (; !zT.next().done;) WT(zT.value.from, zT.value.to)
      }
    }
    const XT = zT.B.define(),
      IT = zT.B.define(),
      QT = zT.E.define({
        create: TT => new sT(ET(TT).create(), null),
        update(TT, UT) {
          for (let mT of UT.effects) mT.is(XT) ? TT = new sT(mT.value.create(), TT.panel) : mT.is(IT) && (TT = new sT(TT.query, mT.value ? NT : null));
          return TT
        },
        provide: TT => WT.lb.from(TT, (TT => TT.panel))
      });
    class sT {
      constructor(TT, UT) {
        this.query = TT, this.panel = UT
      }
    }
    const FT = WT.c.mark({
        class: "cm-searchMatch"
      }),
      PT = WT.c.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      VT = WT.q.fromClass(class {
        constructor(TT) {
          this.view = TT, this.HW = this.highlight(TT.state.field(QT))
        }
        update(TT) {
          let UT = TT.state.field(QT);
          (UT != TT.startState.field(QT) || TT.docChanged || TT.selectionSet || TT.viewportChanged) && (this.HW = this.highlight(UT))
        }
        highlight(TT) {
          let {
            query: UT,
            panel: mT
          } = TT;
          if (!mT || !UT.spec.valid) return WT.c.none;
          let {
            view: MT
          } = this, gT = new zT.w;
          for (let WT = 0, zT = MT.M6, nT = zT.length; WT < nT; WT++) {
            let {
              from: TT,
              to: mT
            } = zT[WT];
            for (; WT < nT - 1 && mT > zT[WT + 1].from - 500;) mT = zT[++WT].to;
            UT.highlight(MT.state, TT, mT, ((TT, UT) => {
              let mT = MT.state.selection.hZ.some((mT => mT.from == TT && mT.to == UT));
              gT.add(TT, UT, mT ? PT : FT)
            }))
          }
          return gT.finish()
        }
      }, {
        HW: TT => TT.HW
      });

    function uT(TT) {
      return UT => {
        let mT = UT.state.field(QT, !1);
        return mT && mT.query.spec.valid ? TT(UT, mT) : oT(UT)
      }
    }
    const CT = uT(((TT, UT) => {
        let {
          query: mT
        } = UT, {
          to: WT
        } = TT.state.selection.main, MT = mT.nextMatch(TT.state, WT, WT);
        if (!MT) return !1;
        let gT = zT.l.single(MT.from, MT.to),
          nT = TT.state.facet(eT);
        return TT.dispatch({
          selection: gT,
          effects: [zU(TT, MT), nT.scrollToMatch(gT.main, TT)],
          userEvent: "select.search"
        }), DT(TT), !0
      })),
      rT = uT(((TT, UT) => {
        let {
          query: mT
        } = UT, {
          state: WT
        } = TT, {
          from: MT
        } = WT.selection.main, gT = mT.prevMatch(WT, MT, MT);
        if (!gT) return !1;
        let nT = zT.l.single(gT.from, gT.to),
          HT = TT.state.facet(eT);
        return TT.dispatch({
          selection: nT,
          effects: [zU(TT, gT), HT.scrollToMatch(nT.main, TT)],
          userEvent: "select.search"
        }), DT(TT), !0
      })),
      KT = uT(((TT, UT) => {
        let {
          query: mT
        } = UT, WT = mT.matchAll(TT.state, 1e3);
        return !(!WT || !WT.length) && (TT.dispatch({
          selection: zT.l.create(WT.map((TT => zT.l.range(TT.from, TT.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      ST = uT(((TT, UT) => {
        let {
          query: mT
        } = UT, {
          state: MT
        } = TT, {
          from: gT,
          to: nT
        } = MT.selection.main;
        if (MT.readOnly) return !1;
        let HT = mT.nextMatch(MT, gT, gT);
        if (!HT) return !1;
        let kT, jT, lT = HT,
          LT = [],
          pT = [];
        lT.from == gT && lT.to == nT && (jT = MT.toText(mT.getReplacement(lT)), LT.push({
          from: lT.from,
          to: lT.to,
          insert: jT
        }), lT = mT.nextMatch(MT, lT.from, lT.to), pT.push(WT.i.announce.of(MT.phrase("replaced match on line $", MT.doc.lineAt(gT).number) + ".")));
        let BT = TT.state.changes(LT);
        return lT && (kT = zT.l.single(lT.from, lT.to).map(BT), pT.push(zU(TT, lT)), pT.push(MT.facet(eT).scrollToMatch(kT.main, TT))), TT.dispatch({
          changes: BT,
          selection: kT,
          effects: pT,
          userEvent: "input.replace"
        }), !0
      })),
      GT = uT(((TT, UT) => {
        let {
          query: mT
        } = UT;
        if (TT.state.readOnly) return !1;
        let zT = mT.matchAll(TT.state, 1e9).map((TT => {
          let {
            from: UT,
            to: WT
          } = TT;
          return {
            from: UT,
            to: WT,
            insert: mT.getReplacement(TT)
          }
        }));
        if (!zT.length) return !1;
        let MT = TT.state.phrase("replaced $ matches", zT.length) + ".";
        return TT.dispatch({
          changes: zT,
          effects: WT.i.announce.of(MT),
          userEvent: "input.replace.all"
        }), !0
      }));

    function NT(TT) {
      return TT.state.facet(eT).createPanel(TT)
    }

    function ET(TT, UT) {
      var mT, WT, zT, MT, gT;
      let nT = TT.selection.main,
        HT = nT.empty || nT.to > nT.from + 100 ? "" : TT.sliceDoc(nT.from, nT.to);
      if (UT && !HT) return UT;
      let kT = TT.facet(eT);
      return new YT({
        search: (null !== (mT = null === UT || void 0 === UT ? void 0 : UT.literal) && void 0 !== mT ? mT : kT.literal) ? HT : HT.replace(/\n/g, "\\n"),
        caseSensitive: null !== (WT = null === UT || void 0 === UT ? void 0 : UT.caseSensitive) && void 0 !== WT ? WT : kT.caseSensitive,
        literal: null !== (zT = null === UT || void 0 === UT ? void 0 : UT.literal) && void 0 !== zT ? zT : kT.literal,
        regexp: null !== (MT = null === UT || void 0 === UT ? void 0 : UT.regexp) && void 0 !== MT ? MT : kT.regexp,
        wholeWord: null !== (gT = null === UT || void 0 === UT ? void 0 : UT.wholeWord) && void 0 !== gT ? gT : kT.wholeWord
      })
    }

    function hT(TT) {
      let UT = (0, WT.G)(TT, NT);
      return UT && UT.dom.querySelector("[main-field]")
    }

    function DT(TT) {
      let UT = hT(TT);
      UT && UT == TT.root.activeElement && UT.select()
    }
    const oT = TT => {
        let UT = TT.state.field(QT, !1);
        if (UT && UT.panel) {
          let mT = hT(TT);
          if (mT && mT != TT.root.activeElement) {
            let WT = ET(TT.state, UT.query.spec);
            WT.valid && TT.dispatch({
              effects: XT.of(WT)
            }), mT.focus(), mT.select()
          }
        } else TT.dispatch({
          effects: [IT.of(!0), UT ? XT.of(ET(TT.state, UT.query.spec)) : zT.B.appendConfig.of(gU)]
        });
        return !0
      },
      AT = TT => {
        let UT = TT.state.field(QT, !1);
        if (!UT || !UT.panel) return !1;
        let mT = (0, WT.G)(TT, NT);
        return mT && mT.dom.contains(TT.root.activeElement) && TT.focus(), TT.dispatch({
          effects: IT.of(!1)
        }), !0
      },
      RT = [{
        key: "Mod-f",
        run: oT,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: CT,
        shift: rT,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: CT,
        shift: rT,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: AT,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: TT => {
          let {
            state: UT,
            dispatch: mT
          } = TT, WT = UT.selection;
          if (WT.hZ.length > 1 || WT.main.empty) return !1;
          let {
            from: MT,
            to: gT
          } = WT.main, HT = [], kT = 0;
          for (let jT = new nT(UT.doc, UT.sliceDoc(MT, gT)); !jT.next().done;) {
            if (HT.length > 1e3) return !1;
            jT.value.from == MT && (kT = HT.length), HT.push(zT.l.range(jT.value.from, jT.value.to))
          }
          return mT(UT.update({
            selection: zT.l.create(HT, kT),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: TT => {
          let {
            state: UT
          } = TT, mT = String(UT.doc.lineAt(TT.state.selection.main.head).number), {
            close: MT,
            result: gT
          } = (0, WT.ib)(TT, {
            label: UT.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: mT
            },
            focus: !0,
            submitLabel: UT.phrase("go")
          });
          return gT.then((mT => {
            let gT = mT && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(mT.elements.line.value);
            if (!gT) return void TT.dispatch({
              effects: MT
            });
            let nT = UT.doc.lineAt(UT.selection.main.head),
              [, HT, kT, jT, lT] = gT,
              LT = jT ? +jT.slice(1) : 0,
              pT = kT ? +kT : nT.number;
            if (kT && lT) {
              let TT = pT / 100;
              HT && (TT = TT * ("-" == HT ? -1 : 1) + nT.number / UT.doc.lines), pT = Math.round(UT.doc.lines * TT)
            } else kT && HT && (pT = pT * ("-" == HT ? -1 : 1) + nT.number);
            let BT = UT.doc.line(Math.max(1, Math.min(UT.doc.lines, pT))),
              ZT = zT.l.cursor(BT.from + Math.max(0, Math.min(LT, BT.length)));
            TT.dispatch({
              effects: [MT, WT.i.scrollIntoView(ZT.from, {
                y: "center"
              })],
              selection: ZT
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: TT => {
          let {
            state: UT,
            dispatch: mT
          } = TT, {
            hZ: MT
          } = UT.selection;
          if (MT.some((TT => TT.from === TT.to))) return (TT => {
            let {
              state: UT,
              dispatch: mT
            } = TT, {
              selection: WT
            } = UT, MT = zT.l.create(WT.hZ.map((TT => UT.wordAt(TT.head) || zT.l.cursor(TT.head))), WT.mainIndex);
            return !MT.eq(WT) && (mT(UT.update({
              selection: MT
            })), !0)
          })({
            state: UT,
            dispatch: mT
          });
          let gT = UT.sliceDoc(MT[0].from, MT[0].to);
          if (UT.selection.hZ.some((TT => UT.sliceDoc(TT.from, TT.to) != gT))) return !1;
          let HT = function(TT, UT) {
            let {
              main: mT,
              hZ: WT
            } = TT.selection, zT = TT.wordAt(mT.head), MT = zT && zT.from == mT.from && zT.to == mT.to;
            for (let gT = !1, HT = new nT(TT.doc, UT, WT[WT.length - 1].to);;) {
              if (HT.next(), !HT.done) {
                if (gT && WT.some((TT => TT.from == HT.value.from))) continue;
                if (MT) {
                  let UT = TT.wordAt(HT.value.from);
                  if (!UT || UT.from != HT.value.from || UT.to != HT.value.to) continue
                }
                return HT.value
              }
              if (gT) return null;
              HT = new nT(TT.doc, UT, 0, Math.max(0, WT[WT.length - 1].from - 1)), gT = !0
            }
          }(UT, gT);
          return !!HT && (mT(UT.update({
            selection: UT.selection.addRange(zT.l.range(HT.from, HT.to), !1),
            effects: WT.i.scrollIntoView(HT.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class TU {
      constructor(TT) {
        this.view = TT;
        let UT = this.query = TT.state.field(QT).query.spec;

        function mT(TT, UT, mT) {
          return (0, MT.e)("button", {
            class: "cm-button",
            name: TT,
            onclick: UT,
            type: "button"
          }, mT)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, MT.e)("input", {
          value: UT.search,
          placeholder: UU(TT, "Find"),
          "aria-label": UU(TT, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, MT.e)("input", {
          value: UT.replace,
          placeholder: UU(TT, "Replace"),
          "aria-label": UU(TT, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, MT.e)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: UT.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, MT.e)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: UT.regexp,
          onchange: this.commit
        }), this.wordField = (0, MT.e)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: UT.wholeWord,
          onchange: this.commit
        }), this.dom = (0, MT.e)("div", {
          onkeydown: TT => this.keydown(TT),
          class: "cm-search"
        }, [this.searchField, mT("next", (() => CT(TT)), [UU(TT, "next")]), mT("prev", (() => rT(TT)), [UU(TT, "previous")]), mT("select", (() => KT(TT)), [UU(TT, "all")]), (0, MT.e)("label", null, [this.caseField, UU(TT, "match case")]), (0, MT.e)("label", null, [this.reField, UU(TT, "regexp")]), (0, MT.e)("label", null, [this.wordField, UU(TT, "by word")]), ...TT.state.readOnly ? [] : [(0, MT.e)("br"), this.replaceField, mT("replace", (() => ST(TT)), [UU(TT, "replace")]), mT("replaceAll", (() => GT(TT)), [UU(TT, "replace all")])], (0, MT.e)("button", {
          name: "close",
          onclick: () => AT(TT),
          "aria-label": UU(TT, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let TT = new YT({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        TT.eq(this.query) || (this.query = TT, this.view.dispatch({
          effects: XT.of(TT)
        }))
      }
      keydown(TT) {
        (0, WT.gb)(this.view, TT, "search-panel") ? TT.preventDefault(): 13 == TT.keyCode && TT.target == this.searchField ? (TT.preventDefault(), (TT.shiftKey ? rT : CT)(this.view)) : 13 == TT.keyCode && TT.target == this.replaceField && (TT.preventDefault(), ST(this.view))
      }
      update(TT) {
        for (let UT of TT.transactions)
          for (let TT of UT.effects) TT.is(XT) && !TT.value.eq(this.query) && this.setQuery(TT.value)
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

    function UU(TT, UT) {
      return TT.state.phrase(UT)
    }
    const mU = 30,
      WU = /[\s\.,:;?!]/;

    function zU(TT, UT) {
      let {
        from: mT,
        to: zT
      } = UT, MT = TT.state.doc.lineAt(mT), gT = TT.state.doc.lineAt(zT).to, nT = Math.max(MT.from, mT - mU), HT = Math.min(gT, zT + mU), kT = TT.state.sliceDoc(nT, HT);
      if (nT != MT.from)
        for (let WT = 0; WT < mU; WT++)
          if (!WU.test(kT[WT + 1]) && WU.test(kT[WT])) {
            kT = kT.slice(WT);
            break
          } if (HT != gT)
        for (let WT = kT.length - 1; WT > kT.length - mU; WT--)
          if (!WU.test(kT[WT - 1]) && WU.test(kT[WT])) {
            kT = kT.slice(0, WT);
            break
          } return WT.i.announce.of(`${TT.state.phrase("current match")}. ${kT} ${TT.state.phrase("on line")} ${MT.number}.`)
    }
    const MU = WT.i.baseTheme({
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
      gU = [QT, zT.u.low(VT), MU]
  },
  41466: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => yT,
      e: () => kU,
      i: () => xz,
      m: () => gg,
      q: () => DU,
      u: () => tT,
      x: () => tM,
      z: () => oz,
      D: () => gM,
      G: () => oM,
      J: () => EM,
      K: () => lg,
      P: () => fM,
      O: () => ag,
      R: () => BM,
      T: () => NM,
      W: () => Qz,
      Y: () => xg,
      ab: () => GU,
      cb: () => OM,
      db: () => xM,
      gb: () => Pz,
      ib: () => mg,
      lb: () => Ug,
      pb: () => uM
    });
    for (var WT = mT(41459), zT = mT(41469), MT = {
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
      }, gT = {
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
      }, nT = "undefined" != typeof navigator && /Mac/.test(navigator.platform), HT = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), kT = 0; kT < 10; kT++) MT[48 + kT] = MT[96 + kT] = String(kT);
    for (kT = 1; kT <= 24; kT++) MT[kT + 111] = "F" + kT;
    for (kT = 65; kT <= 90; kT++) MT[kT] = String.fromCharCode(kT + 32), gT[kT] = String.fromCharCode(kT);
    for (var jT in MT) gT.hasOwnProperty(jT) || (gT[jT] = MT[jT]);
    var lT = mT(41475);
    let LT = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      pT = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const BT = /Edge\/(\d+)/.exec(LT.userAgent),
      ZT = /MSIE \d/.test(LT.userAgent),
      cT = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(LT.userAgent),
      vT = !!(ZT || cT || BT),
      fT = !vT && /gecko\/(\d+)/i.test(LT.userAgent),
      qT = !vT && /Chrome\/(\d+)/.exec(LT.userAgent),
      iT = "webkitFontSmoothing" in pT.documentElement.style,
      bT = !vT && /Apple Computer/.test(LT.vendor),
      OT = bT && (/Mobile\/\w+/.test(LT.userAgent) || LT.maxTouchPoints > 2);
    var eT = {
      mac: OT || /Mac/.test(LT.platform),
      windows: /Win/.test(LT.platform),
      linux: /Linux|X11/.test(LT.platform),
      ie: vT,
      ie_version: ZT ? pT.documentMode || 6 : cT ? +cT[1] : BT ? +BT[1] : 0,
      gecko: fT,
      gecko_version: fT ? +(/Firefox\/(\d+)/.exec(LT.userAgent) || [0, 0])[1] : 0,
      chrome: !!qT,
      chrome_version: qT ? +qT[1] : 0,
      ios: OT,
      android: /Android\b/.test(LT.userAgent),
      webkit: iT,
      webkit_version: iT ? +(/\bAppleWebKit\/(\d+)/.exec(LT.userAgent) || [0, 0])[1] : 0,
      safari: bT,
      safari_version: bT ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(LT.userAgent) || [0, 0])[1] : 0,
      tabSize: null != pT.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function YT(TT, UT) {
      for (let mT in TT) "class" == mT && UT.class ? UT.class += " " + TT.class : "style" == mT && UT.style ? UT.style += ";" + TT.style : UT[mT] = TT[mT];
      return UT
    }
    const JT = Object.create(null);

    function xT(TT, UT, mT) {
      if (TT == UT) return !0;
      TT || (TT = JT), UT || (UT = JT);
      let WT = Object.keys(TT),
        zT = Object.keys(UT);
      if (WT.length - (mT && WT.indexOf(mT) > -1 ? 1 : 0) != zT.length - (mT && zT.indexOf(mT) > -1 ? 1 : 0)) return !1;
      for (let MT of WT)
        if (MT != mT && (-1 == zT.indexOf(MT) || TT[MT] !== UT[MT])) return !1;
      return !0
    }

    function dT(TT, UT, mT) {
      let WT = !1;
      if (UT)
        for (let zT in UT) mT && zT in mT || (WT = !0, "style" == zT ? TT.style.cssText = "" : TT.removeAttribute(zT));
      if (mT)
        for (let zT in mT) UT && UT[zT] == mT[zT] || (WT = !0, "style" == zT ? TT.style.cssText = mT[zT] : TT.setAttribute(zT, mT[zT]));
      return WT
    }

    function wT(TT) {
      let UT = Object.create(null);
      for (let mT = 0; mT < TT.attributes.length; mT++) {
        let WT = TT.attributes[mT];
        UT[WT.name] = WT.value
      }
      return UT
    }
    class tT {
      eq(TT) {
        return !1
      }
      updateDOM(TT, UT, mT) {
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
      coordsAt(TT, UT, mT) {
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
    var aT = function(TT) {
      return TT[TT.Text = 0] = "Text", TT[TT.WidgetBefore = 1] = "WidgetBefore", TT[TT.WidgetAfter = 2] = "WidgetAfter", TT[TT.WidgetRange = 3] = "WidgetRange", TT
    }(aT || (aT = {}));
    class yT extends WT.A {
      constructor(TT, UT, mT, WT) {
        super(), this.startSide = TT, this.endSide = UT, this.widget = mT, this.spec = WT
      }
      get heightRelevant() {
        return !1
      }
      static mark(TT) {
        return new XT(TT)
      }
      static widget(TT) {
        let UT = Math.max(-1e4, Math.min(1e4, TT.side || 0)),
          mT = !!TT.block;
        return UT += mT && !TT.inlineOrder ? UT > 0 ? 3e8 : -4e8 : UT > 0 ? 1e8 : -1e8, new QT(TT, UT, UT, mT, TT.widget || null, !1)
      }
      static replace(TT) {
        let UT, mT, WT = !!TT.block;
        if (TT.isBlockGap) UT = -5e8, mT = 4e8;
        else {
          let {
            start: zT,
            end: MT
          } = sT(TT, WT);
          UT = (zT ? WT ? -3e8 : -1 : 5e8) - 1, mT = 1 + (MT ? WT ? 2e8 : 1 : -6e8)
        }
        return new QT(TT, UT, mT, WT, TT.widget || null, !0)
      }
      static line(TT) {
        return new IT(TT)
      }
      static set(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return WT.x.of(TT, UT)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    yT.none = WT.x.empty;
    class XT extends yT {
      constructor(TT) {
        let {
          start: UT,
          end: mT
        } = sT(TT);
        super(UT ? -1 : 5e8, mT ? 1 : -6e8, null, TT), this.tagName = TT.tagName || "span", this.attrs = TT.class && TT.attributes ? YT(TT.attributes, {
          class: TT.class
        }) : TT.class ? {
          class: TT.class
        } : TT.attributes || JT
      }
      eq(TT) {
        return this == TT || TT instanceof XT && this.tagName == TT.tagName && xT(this.attrs, TT.attrs)
      }
      range(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        if (TT >= UT) throw new RangeError("Mark decorations may not be empty");
        return super.range(TT, UT)
      }
    }
    XT.prototype.point = !1;
    class IT extends yT {
      constructor(TT) {
        super(-2e8, -2e8, null, TT)
      }
      eq(TT) {
        return TT instanceof IT && this.spec.class == TT.spec.class && xT(this.spec.attributes, TT.spec.attributes)
      }
      range(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        if (UT != TT) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(TT, UT)
      }
    }
    IT.prototype.mapMode = WT.q.TrackBefore, IT.prototype.point = !0;
    class QT extends yT {
      constructor(TT, UT, mT, zT, MT, gT) {
        super(UT, mT, MT, TT), this.block = zT, this.isReplace = gT, this.mapMode = zT ? UT <= 0 ? WT.q.TrackBefore : WT.q.TrackAfter : WT.q.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? aT.WidgetRange : this.startSide <= 0 ? aT.WidgetBefore : aT.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(TT) {
        return TT instanceof QT && (UT = this.widget, mT = TT.widget, UT == mT || !!(UT && mT && UT.compare(mT))) && this.block == TT.block && this.startSide == TT.startSide && this.endSide == TT.endSide;
        var UT, mT
      }
      range(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        if (this.isReplace && (TT > UT || TT == UT && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && UT != TT) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(TT, UT)
      }
    }

    function sT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: mT,
          inclusiveEnd: WT
        } = TT;
      return null == mT && (mT = TT.inclusive), null == WT && (WT = TT.inclusive), {
        start: null !== mT && void 0 !== mT ? mT : UT,
        end: null !== WT && void 0 !== WT ? WT : UT
      }
    }

    function FT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        zT = mT.length - 1;
      zT >= 0 && mT[zT] + WT >= TT ? mT[zT] = Math.max(mT[zT], UT) : mT.push(TT, UT)
    }
    QT.prototype.point = !0;
    class PT extends WT.A {
      constructor(TT, UT) {
        super(), this.tagName = TT, this.attributes = UT
      }
      eq(TT) {
        return TT == this || TT instanceof PT && this.tagName == TT.tagName && xT(this.attributes, TT.attributes)
      }
      static create(TT) {
        return new PT(TT.tagName, TT.attributes || JT)
      }
      static set(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return WT.x.of(TT, UT)
      }
    }

    function VT(TT) {
      let UT;
      return UT = 11 == TT.nodeType ? TT.getSelection ? TT : TT.ownerDocument : TT, UT.getSelection()
    }

    function uT(TT, UT) {
      return !!UT && (TT == UT || TT.contains(1 != UT.nodeType ? UT.parentNode : UT))
    }

    function CT(TT, UT) {
      if (!UT.anchorNode) return !1;
      try {
        return uT(TT, UT.anchorNode)
      } catch (mT) {
        return !1
      }
    }

    function rT(TT) {
      return 3 == TT.nodeType ? WU(TT, 0, TT.nodeValue.length).getClientRects() : 1 == TT.nodeType ? TT.getClientRects() : []
    }

    function KT(TT, UT, mT, WT) {
      return !!mT && (NT(TT, UT, mT, WT, -1) || NT(TT, UT, mT, WT, 1))
    }

    function ST(TT) {
      for (var UT = 0;; UT++)
        if (!(TT = TT.previousSibling)) return UT
    }

    function GT(TT) {
      return 1 == TT.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(TT.nodeName)
    }

    function NT(TT, UT, mT, WT, zT) {
      for (;;) {
        if (TT == mT && UT == WT) return !0;
        if (UT == (zT < 0 ? 0 : ET(TT))) {
          if ("DIV" == TT.nodeName) return !1;
          let mT = TT.parentNode;
          if (!mT || 1 != mT.nodeType) return !1;
          UT = ST(TT) + (zT < 0 ? 0 : 1), TT = mT
        } else {
          if (1 != TT.nodeType) return !1;
          if (1 == (TT = TT.childNodes[UT + (zT < 0 ? -1 : 0)]).nodeType && "false" == TT.contentEditable) return !1;
          UT = zT < 0 ? ET(TT) : 0
        }
      }
    }

    function ET(TT) {
      return 3 == TT.nodeType ? TT.nodeValue.length : TT.childNodes.length
    }

    function hT(TT, UT) {
      let mT = UT ? TT.left : TT.right;
      return {
        left: mT,
        right: mT,
        top: TT.top,
        bottom: TT.bottom
      }
    }

    function DT(TT) {
      let UT = TT.visualViewport;
      return UT ? {
        left: 0,
        right: UT.width,
        top: 0,
        bottom: UT.height
      } : {
        left: 0,
        right: TT.innerWidth,
        top: 0,
        bottom: TT.innerHeight
      }
    }

    function oT(TT, UT) {
      let mT = UT.width / TT.offsetWidth,
        WT = UT.height / TT.offsetHeight;
      return (mT > .995 && mT < 1.005 || !isFinite(mT) || Math.abs(UT.width - TT.offsetWidth) < 1) && (mT = 1), (WT > .995 && WT < 1.005 || !isFinite(WT) || Math.abs(UT.height - TT.offsetHeight) < 1) && (WT = 1), {
        scaleX: mT,
        scaleY: WT
      }
    }

    function AT(TT) {
      let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        mT = TT.ownerDocument,
        WT = null,
        zT = null;
      for (let MT = TT.parentNode; MT && (MT != mT.body && (UT && !WT || !zT));)
        if (1 == MT.nodeType) !zT && MT.scrollHeight > MT.clientHeight && (zT = MT), UT && !WT && MT.scrollWidth > MT.clientWidth && (WT = MT), MT = MT.assignedSlot || MT.parentNode;
        else {
          if (11 != MT.nodeType) break;
          MT = MT.host
        } return {
        x: WT,
        y: zT
      }
    }
    PT.prototype.startSide = PT.prototype.endSide = -1;
    class RT {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(TT) {
        return this.anchorNode == TT.anchorNode && this.anchorOffset == TT.anchorOffset && this.focusNode == TT.focusNode && this.focusOffset == TT.focusOffset
      }
      setRange(TT) {
        let {
          anchorNode: UT,
          focusNode: mT
        } = TT;
        this.set(UT, Math.min(TT.anchorOffset, UT ? ET(UT) : 0), mT, Math.min(TT.focusOffset, mT ? ET(mT) : 0))
      }
      set(TT, UT, mT, WT) {
        this.anchorNode = TT, this.anchorOffset = UT, this.focusNode = mT, this.focusOffset = WT
      }
    }
    let TU, UU = null;

    function mU(TT) {
      if (TT.setActive) return TT.setActive();
      if (UU) return TT.focus(UU);
      let UT = [];
      for (let mT = TT; mT && (UT.push(mT, mT.scrollTop, mT.scrollLeft), mT != mT.ownerDocument); mT = mT.parentNode);
      if (TT.focus(null == UU ? {
          get preventScroll() {
            return UU = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !UU) {
        UU = !1;
        for (let TT = 0; TT < UT.length;) {
          let mT = UT[TT++],
            WT = UT[TT++],
            zT = UT[TT++];
          mT.scrollTop != WT && (mT.scrollTop = WT), mT.scrollLeft != zT && (mT.scrollLeft = zT)
        }
      }
    }

    function WU(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UT,
        WT = TU || (TU = document.createRange());
      return WT.setEnd(TT, mT), WT.setStart(TT, UT), WT
    }

    function zU(TT, UT, mT, WT) {
      let zT = {
        key: UT,
        code: UT,
        keyCode: mT,
        which: mT,
        cancelable: !0
      };
      WT && ({
        altKey: zT.altKey,
        ctrlKey: zT.ctrlKey,
        shiftKey: zT.shiftKey,
        metaKey: zT.metaKey
      } = WT);
      let MT = new KeyboardEvent("keydown", zT);
      MT.synthetic = !0, TT.dispatchEvent(MT);
      let gT = new KeyboardEvent("keyup", zT);
      return gT.synthetic = !0, TT.dispatchEvent(gT), MT.defaultPrevented || gT.defaultPrevented
    }

    function MU(TT) {
      return TT instanceof Window ? TT.pageYOffset > Math.max(0, TT.document.documentElement.scrollHeight - TT.innerHeight - 4) : TT.scrollTop > Math.max(1, TT.scrollHeight - TT.clientHeight - 4)
    }

    function gU(TT, UT) {
      for (let mT = TT, WT = UT;;) {
        if (3 == mT.nodeType && WT > 0) return {
          node: mT,
          offset: WT
        };
        if (1 == mT.nodeType && WT > 0) {
          if ("false" == mT.contentEditable) return null;
          mT = mT.childNodes[WT - 1], WT = ET(mT)
        } else {
          if (!mT.parentNode || GT(mT)) return null;
          WT = ST(mT), mT = mT.parentNode
        }
      }
    }

    function nU(TT, UT) {
      for (let mT = TT, WT = UT;;) {
        if (3 == mT.nodeType && WT < mT.nodeValue.length) return {
          node: mT,
          offset: WT
        };
        if (1 == mT.nodeType && WT < mT.childNodes.length) {
          if ("false" == mT.contentEditable) return null;
          mT = mT.childNodes[WT], WT = 0
        } else {
          if (!mT.parentNode || GT(mT)) return null;
          WT = ST(mT) + 1, mT = mT.parentNode
        }
      }
    }
    eT.safari && eT.safari_version >= 26 && (UU = !1);
    class HU {
      constructor(TT, UT) {
        let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = TT, this.offset = UT, this.precise = mT
      }
      static before(TT, UT) {
        return new HU(TT.parentNode, ST(TT), UT)
      }
      static after(TT, UT) {
        return new HU(TT.parentNode, ST(TT) + 1, UT)
      }
    }
    var kU = function(TT) {
      return TT[TT.LTR = 0] = "LTR", TT[TT.RTL = 1] = "RTL", TT
    }(kU || (kU = {}));
    const jU = kU.LTR,
      lU = kU.RTL;

    function LU(TT) {
      let UT = [];
      for (let mT = 0; mT < TT.length; mT++) UT.push(1 << +TT[mT]);
      return UT
    }
    const pU = LU("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      BU = LU("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      ZU = Object.create(null),
      cU = [];
    for (let yg of ["()", "[]", "{}"]) {
      let TT = yg.charCodeAt(0),
        UT = yg.charCodeAt(1);
      ZU[TT] = UT, ZU[UT] = -TT
    }

    function vU(TT) {
      return TT <= 247 ? pU[TT] : 1424 <= TT && TT <= 1524 ? 2 : 1536 <= TT && TT <= 1785 ? BU[TT - 1536] : 1774 <= TT && TT <= 2220 ? 4 : 8192 <= TT && TT <= 8204 ? 256 : 64336 <= TT && TT <= 65023 ? 4 : 1
    }
    const fU = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class qU {
      get dir() {
        return this.level % 2 ? lU : jU
      }
      constructor(TT, UT, mT) {
        this.from = TT, this.to = UT, this.level = mT
      }
      side(TT, UT) {
        return this.dir == UT == TT ? this.to : this.from
      }
      forward(TT, UT) {
        return TT == (this.dir == UT)
      }
      static find(TT, UT, mT, WT) {
        let zT = -1;
        for (let MT = 0; MT < TT.length; MT++) {
          let gT = TT[MT];
          if (gT.from <= UT && gT.to >= UT) {
            if (gT.level == mT) return MT;
            (zT < 0 || (0 != WT ? WT < 0 ? gT.from < UT : gT.to > UT : TT[zT].level > gT.level)) && (zT = MT)
          }
        }
        if (zT < 0) throw new RangeError("Index out of range");
        return zT
      }
    }

    function iU(TT, UT) {
      if (TT.length != UT.length) return !1;
      for (let mT = 0; mT < TT.length; mT++) {
        let WT = TT[mT],
          zT = UT[mT];
        if (WT.from != zT.from || WT.to != zT.to || WT.direction != zT.direction || !iU(WT.inner, zT.inner)) return !1
      }
      return !0
    }
    const bU = [];

    function OU(TT, UT, mT, WT, zT, MT, gT) {
      let nT = WT % 2 ? 2 : 1;
      if (WT % 2 == zT % 2)
        for (let HT = UT, kT = 0; HT < mT;) {
          let UT = !0,
            jT = !1;
          if (kT == MT.length || HT < MT[kT].from) {
            let TT = bU[HT];
            TT != nT && (UT = !1, jT = 16 == TT)
          }
          let lT = UT || 1 != nT ? null : [],
            LT = UT ? WT : WT + 1,
            pT = HT;
          TT: for (;;)
            if (kT < MT.length && pT == MT[kT].from) {
              if (jT) break TT;
              let BT = MT[kT];
              if (!UT)
                for (let TT = BT.to, UT = kT + 1;;) {
                  if (TT == mT) break TT;
                  if (!(UT < MT.length && MT[UT].from == TT)) {
                    if (bU[TT] == nT) break TT;
                    break
                  }
                  TT = MT[UT++].to
                }
              if (kT++, lT) lT.push(BT);
              else {
                BT.from > HT && gT.push(new qU(HT, BT.from, LT)), eU(TT, BT.direction == jU != !(LT % 2) ? WT + 1 : WT, zT, BT.inner, BT.from, BT.to, gT), HT = BT.to
              }
              pT = BT.to
            } else {
              if (pT == mT || (UT ? bU[pT] != nT : bU[pT] == nT)) break;
              pT++
            } lT ? OU(TT, HT, pT, WT + 1, zT, lT, gT) : HT < pT && gT.push(new qU(HT, pT, LT)), HT = pT
        } else
          for (let HT = mT, kT = MT.length; HT > UT;) {
            let mT = !0,
              jT = !1;
            if (!kT || HT > MT[kT - 1].to) {
              let TT = bU[HT - 1];
              TT != nT && (mT = !1, jT = 16 == TT)
            }
            let lT = mT || 1 != nT ? null : [],
              LT = mT ? WT : WT + 1,
              pT = HT;
            TT: for (;;)
              if (kT && pT == MT[kT - 1].to) {
                if (jT) break TT;
                let BT = MT[--kT];
                if (!mT)
                  for (let TT = BT.from, mT = kT;;) {
                    if (TT == UT) break TT;
                    if (!mT || MT[mT - 1].to != TT) {
                      if (bU[TT - 1] == nT) break TT;
                      break
                    }
                    TT = MT[--mT].from
                  }
                if (lT) lT.push(BT);
                else {
                  BT.to < HT && gT.push(new qU(BT.to, HT, LT)), eU(TT, BT.direction == jU != !(LT % 2) ? WT + 1 : WT, zT, BT.inner, BT.from, BT.to, gT), HT = BT.from
                }
                pT = BT.from
              } else {
                if (pT == UT || (mT ? bU[pT - 1] != nT : bU[pT - 1] == nT)) break;
                pT--
              } lT ? OU(TT, pT, HT, WT + 1, zT, lT, gT) : pT < HT && gT.push(new qU(pT, HT, LT)), HT = pT
          }
    }

    function eU(TT, UT, mT, WT, zT, MT, gT) {
      let nT = UT % 2 ? 2 : 1;
      ! function(TT, UT, mT, WT, zT) {
        for (let MT = 0; MT <= WT.length; MT++) {
          let gT = MT ? WT[MT - 1].to : UT,
            nT = MT < WT.length ? WT[MT].from : mT,
            HT = MT ? 256 : zT;
          for (let UT = gT, mT = HT, WT = HT; UT < nT; UT++) {
            let zT = vU(TT.charCodeAt(UT));
            512 == zT ? zT = mT : 8 == zT && 4 == WT && (zT = 16), bU[UT] = 4 == zT ? 2 : zT, 7 & zT && (WT = zT), mT = zT
          }
          for (let TT = gT, UT = HT, WT = HT; TT < nT; TT++) {
            let zT = bU[TT];
            if (128 == zT) TT < nT - 1 && UT == bU[TT + 1] && 24 & UT ? zT = bU[TT] = UT : bU[TT] = 256;
            else if (64 == zT) {
              let zT = TT + 1;
              for (; zT < nT && 64 == bU[zT];) zT++;
              let MT = TT && 8 == UT || zT < mT && 8 == bU[zT] ? 1 == WT ? 1 : 8 : 256;
              for (let UT = TT; UT < zT; UT++) bU[UT] = MT;
              TT = zT - 1
            } else 8 == zT && 1 == WT && (bU[TT] = 1);
            UT = zT, 7 & zT && (WT = zT)
          }
        }
      }(TT, zT, MT, WT, nT),
      function(TT, UT, mT, WT, zT) {
        let MT = 1 == zT ? 2 : 1;
        for (let gT = 0, nT = 0, HT = 0; gT <= WT.length; gT++) {
          let kT = gT ? WT[gT - 1].to : UT,
            jT = gT < WT.length ? WT[gT].from : mT;
          for (let UT, mT, WT, gT = kT; gT < jT; gT++)
            if (mT = ZU[UT = TT.charCodeAt(gT)])
              if (mT < 0) {
                for (let TT = nT - 3; TT >= 0; TT -= 3)
                  if (cU[TT + 1] == -mT) {
                    let UT = cU[TT + 2],
                      mT = 2 & UT ? zT : 4 & UT ? 1 & UT ? MT : zT : 0;
                    mT && (bU[gT] = bU[cU[TT]] = mT), nT = TT;
                    break
                  }
              } else {
                if (189 == cU.length) break;
                cU[nT++] = gT, cU[nT++] = UT, cU[nT++] = HT
              }
          else if (2 == (WT = bU[gT]) || 1 == WT) {
            let TT = WT == zT;
            HT = TT ? 0 : 1;
            for (let UT = nT - 3; UT >= 0; UT -= 3) {
              let mT = cU[UT + 2];
              if (2 & mT) break;
              if (TT) cU[UT + 2] |= 2;
              else {
                if (4 & mT) break;
                cU[UT + 2] |= 4
              }
            }
          }
        }
      }(TT, zT, MT, WT, nT),
      function(TT, UT, mT, WT) {
        for (let zT = 0, MT = WT; zT <= mT.length; zT++) {
          let gT = zT ? mT[zT - 1].to : TT,
            nT = zT < mT.length ? mT[zT].from : UT;
          for (let HT = gT; HT < nT;) {
            let gT = bU[HT];
            if (256 == gT) {
              let gT = HT + 1;
              for (;;)
                if (gT == nT) {
                  if (zT == mT.length) break;
                  gT = mT[zT++].to, nT = zT < mT.length ? mT[zT].from : UT
                } else {
                  if (256 != bU[gT]) break;
                  gT++
                } let kT = 1 == MT,
                jT = kT == (1 == (gT < UT ? bU[gT] : WT)) ? kT ? 1 : 2 : WT;
              for (let UT = gT, WT = zT, MT = WT ? mT[WT - 1].to : TT; UT > HT;) UT == MT && (UT = mT[--WT].from, MT = WT ? mT[WT - 1].to : TT), bU[--UT] = jT;
              HT = gT
            } else MT = gT, HT++
          }
        }
      }(zT, MT, WT, nT), OU(TT, zT, MT, UT, mT, WT, gT)
    }

    function YU(TT, UT, mT) {
      if (!TT) return [new qU(0, 0, UT == lU ? 1 : 0)];
      if (UT == jU && !mT.length && !fU.test(TT)) return JU(TT.length);
      if (mT.length)
        for (; TT.length > bU.length;) bU[bU.length] = 256;
      let WT = [],
        zT = UT == jU ? 0 : 1;
      return eU(TT, zT, zT, mT, 0, TT.length, WT), WT
    }

    function JU(TT) {
      return [new qU(0, TT, 0)]
    }
    let xU = "";

    function dU(TT, UT, mT, zT, MT) {
      var gT;
      let nT = zT.head - TT.from,
        HT = qU.find(UT, nT, null !== (gT = zT.bidiLevel) && void 0 !== gT ? gT : -1, zT.assoc),
        kT = UT[HT],
        jT = kT.side(MT, mT);
      if (nT == jT) {
        let TT = HT += MT ? 1 : -1;
        if (TT < 0 || TT >= UT.length) return null;
        kT = UT[HT = TT], nT = kT.side(!MT, mT), jT = kT.side(MT, mT)
      }
      let lT = (0, WT.U)(TT.text, nT, kT.forward(MT, mT));
      (lT < kT.from || lT > kT.to) && (lT = jT), xU = TT.text.slice(Math.min(nT, lT), Math.max(nT, lT));
      let LT = HT == (MT ? UT.length - 1 : 0) ? null : UT[HT + (MT ? 1 : -1)];
      return LT && lT == jT && LT.level + (MT ? 0 : 1) < kT.level ? WT.l.cursor(LT.side(!MT, mT) + TT.from, LT.forward(MT, mT) ? 1 : -1, LT.level) : WT.l.cursor(lT + TT.from, kT.forward(MT, mT) ? -1 : 1, kT.level)
    }

    function wU(TT, UT, mT) {
      for (let WT = UT; WT < mT; WT++) {
        let UT = vU(TT.charCodeAt(WT));
        if (1 == UT) return jU;
        if (2 == UT || 4 == UT) return lU
      }
      return jU
    }
    const tU = WT.o.define(),
      aU = WT.o.define(),
      yU = WT.o.define(),
      XU = WT.o.define(),
      IU = WT.o.define(),
      QU = WT.o.define(),
      sU = WT.o.define(),
      FU = WT.o.define(),
      PU = WT.o.define(),
      VU = WT.o.define({
        combine: TT => TT.some((TT => TT))
      }),
      uU = WT.o.define({
        combine: TT => TT.some((TT => TT))
      }),
      CU = WT.o.define();
    class rU {
      constructor(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = TT, this.y = UT, this.x = mT, this.yMargin = WT, this.xMargin = zT, this.isSnapshot = MT
      }
      map(TT) {
        return TT.empty ? this : new rU(this.range.map(TT), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(TT) {
        return this.range.to <= TT.doc.length ? this : new rU(WT.l.cursor(TT.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const KU = WT.B.define({
        map: (TT, UT) => TT.map(UT)
      }),
      SU = WT.B.define();

    function GU(TT, UT, mT) {
      let WT = TT.facet(XU);
      WT.length ? WT[0](UT) : window.onerror && window.onerror(String(UT), mT, void 0, void 0, UT) || (mT ? console.error(mT + ":", UT) : console.error(UT))
    }
    const NU = WT.o.define({
      combine: TT => !TT.length || TT[0]
    });
    let EU = 0;
    const hU = WT.o.define({
      combine: TT => TT.filter(((UT, mT) => {
        for (let WT = 0; WT < mT; WT++)
          if (TT[WT].plugin == UT.plugin) return !1;
        return !0
      }))
    });
    class DU {
      constructor(TT, UT, mT, WT, zT) {
        this.id = TT, this.create = UT, this.domEventHandlers = mT, this.domEventObservers = WT, this.baseExtensions = zT(this), this.extension = this.baseExtensions.concat(hU.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(TT) {
        return this.baseExtensions.concat(hU.of({
          plugin: this,
          arg: TT
        }))
      }
      static define(TT, UT) {
        const {
          eventHandlers: mT,
          eventObservers: WT,
          provide: zT,
          HW: MT
        } = UT || {};
        return new DU(EU++, TT, mT, WT, (TT => {
          let UT = [];
          return MT && UT.push(Tm.of((UT => {
            let mT = UT.plugin(TT);
            return mT ? MT(mT) : yT.none
          }))), zT && UT.push(zT(TT)), UT
        }))
      }
      static fromClass(TT, UT) {
        return DU.define(((UT, mT) => new TT(UT, mT)), UT)
      }
    }
    class oU {
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
            } catch (UT) {
              if (GU(TT.state, UT, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (mT) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(TT, this.spec.arg)
        } catch (UT) {
          GU(TT.state, UT, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(TT) {
        var UT;
        if (null === (UT = this.value) || void 0 === UT ? void 0 : UT.destroy) try {
          this.value.destroy()
        } catch (mT) {
          GU(TT.state, mT, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const AU = WT.o.define(),
      RU = WT.o.define(),
      Tm = WT.o.define(),
      Um = WT.o.define(),
      mm = WT.o.define(),
      Wm = WT.o.define(),
      zm = WT.o.define();

    function Mm(TT, UT) {
      let mT = TT.state.facet(zm);
      if (!mT.length) return mT;
      let zT = mT.map((UT => UT instanceof Function ? UT(TT) : UT)),
        MT = [];
      return WT.x.spans(zT, UT.from, UT.to, {
        point() {},
        span(TT, mT, WT, zT) {
          let gT = TT - UT.from,
            nT = mT - UT.from,
            HT = MT;
          for (let MT = WT.length - 1; MT >= 0; MT--, zT--) {
            let TT, mT = WT[MT].spec.bidiIsolate;
            if (null == mT && (mT = wU(UT.text, gT, nT)), zT > 0 && HT.length && (TT = HT[HT.length - 1]).to == gT && TT.direction == mT) TT.to = nT, HT = TT.inner;
            else {
              let TT = {
                from: gT,
                to: nT,
                direction: mT,
                inner: []
              };
              HT.push(TT), HT = TT.inner
            }
          }
        }
      }), MT
    }
    const gm = WT.o.define();

    function nm(TT) {
      let UT = 0,
        mT = 0,
        WT = 0,
        zT = 0;
      for (let MT of TT.state.facet(gm)) {
        let gT = MT(TT);
        gT && (null != gT.left && (UT = Math.max(UT, gT.left)), null != gT.right && (mT = Math.max(mT, gT.right)), null != gT.top && (WT = Math.max(WT, gT.top)), null != gT.bottom && (zT = Math.max(zT, gT.bottom)))
      }
      return {
        left: UT,
        right: mT,
        top: WT,
        bottom: zT
      }
    }
    const Hm = WT.o.define();
    class km {
      constructor(TT, UT, mT, WT) {
        this.fromA = TT, this.toA = UT, this.fromB = mT, this.toB = WT
      }
      join(TT) {
        return new km(Math.min(this.fromA, TT.fromA), Math.max(this.toA, TT.toA), Math.min(this.fromB, TT.fromB), Math.max(this.toB, TT.toB))
      }
      addToSet(TT) {
        let UT = TT.length,
          mT = this;
        for (; UT > 0; UT--) {
          let WT = TT[UT - 1];
          if (!(WT.fromA > mT.toA)) {
            if (WT.toA < mT.fromA) break;
            mT = mT.join(WT), TT.splice(UT - 1, 1)
          }
        }
        return TT.splice(UT, 0, mT), TT
      }
      static extendWithRanges(TT, UT) {
        if (0 == UT.length) return TT;
        let mT = [];
        for (let WT = 0, zT = 0, MT = 0;;) {
          let gT = WT < TT.length ? TT[WT].fromB : 1e9,
            nT = zT < UT.length ? UT[zT] : 1e9,
            HT = Math.min(gT, nT);
          if (1e9 == HT) break;
          let kT = HT + MT,
            jT = HT,
            lT = kT;
          for (;;)
            if (zT < UT.length && UT[zT] <= jT) {
              let mT = UT[zT + 1];
              zT += 2, jT = Math.max(jT, mT);
              for (let UT = WT; UT < TT.length && TT[UT].fromB <= jT; UT++) MT = TT[UT].toA - TT[UT].toB;
              lT = Math.max(lT, mT + MT)
            } else {
              if (!(WT < TT.length && TT[WT].fromB <= jT)) break;
              {
                let UT = TT[WT++];
                jT = Math.max(jT, UT.toB), lT = Math.max(lT, UT.toA), MT = UT.toA - UT.toB
              }
            } mT.push(new km(kT, lT, HT, jT))
        }
        return mT
      }
    }
    class jm {
      constructor(TT, UT, mT) {
        this.view = TT, this.state = UT, this.transactions = mT, this.flags = 0, this.startState = TT.state, this.changes = WT.ChangeSet.empty(this.startState.doc.length);
        for (let WT of mT) this.changes = this.changes.compose(WT.changes);
        let zT = [];
        this.changes.iterChangedRanges(((TT, UT, mT, WT) => zT.push(new km(TT, UT, mT, WT)))), this.changedRanges = zT
      }
      static create(TT, UT, mT) {
        return new jm(TT, UT, mT)
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
    const lm = [];
    class Lm {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = TT, this.length = UT, this.flags = mT, this.parent = null, TT.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return lm
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
          TT && function(TT, UT) {
            for (let mT = TT.attributes.length - 1; mT >= 0; mT--) {
              let WT = TT.attributes[mT].name;
              null == UT[WT] && TT.removeAttribute(WT)
            }
            for (let mT in UT) {
              let WT = UT[mT];
              "style" == mT ? TT.style.cssText = WT : TT.getAttribute(mT) != WT && TT.setAttribute(mT, WT)
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
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let mT of this.children) {
          if (mT == TT) return UT;
          UT += mT.length + mT.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(TT) {
        return this.posBefore(TT) + TT.length
      }
      covers(TT) {
        return !0
      }
      coordsIn(TT, UT) {
        return null
      }
      domPosFor(TT, UT) {
        let mT = ST(this.dom),
          WT = this.length ? TT > 0 : UT > 0;
        return new HU(this.parent.dom, mT + (WT ? 1 : 0), 0 == TT || TT == this.length)
      }
      markDirty(TT) {
        this.flags &= -3, TT && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let TT = this; TT; TT = TT.parent)
          if (TT instanceof Zm) return TT;
        return null
      }
      static get(TT) {
        return TT.cmTile
      }
    }
    class pm extends Lm {
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
        let UT, mT = this.dom,
          WT = null,
          zT = (null === TT || void 0 === TT ? void 0 : TT.node) == mT ? TT : null,
          MT = 0;
        for (let gT of this.children) {
          if (gT.sync(TT), MT += gT.length + gT.breakAfter, UT = WT ? WT.nextSibling : mT.firstChild, zT && UT != gT.dom && (zT.written = !0), gT.dom.parentNode == mT)
            for (; UT && UT != gT.dom;) UT = Bm(UT);
          else mT.insertBefore(gT.dom, UT);
          WT = gT.dom
        }
        for (UT = WT ? WT.nextSibling : mT.firstChild, zT && UT && (zT.written = !0); UT;) UT = Bm(UT);
        this.length = MT
      }
    }

    function Bm(TT) {
      let UT = TT.nextSibling;
      return TT.parentNode.removeChild(TT), UT
    }
    class Zm extends pm {
      constructor(TT, UT) {
        super(UT), this.view = TT
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
          let UT = Lm.get(TT);
          if (UT && this.owns(UT)) return UT;
          TT = TT.parentNode
        }
      }
      blockTiles(TT) {
        for (let UT = [], mT = this, WT = 0, zT = 0;;)
          if (WT == mT.children.length) {
            if (!UT.length) return;
            mT = mT.parent, mT.breakAfter && zT++, WT = UT.pop()
          } else {
            let MT = mT.children[WT++];
            if (MT instanceof cm) UT.push(WT), mT = MT, WT = 0;
            else {
              let UT = zT + MT.length,
                mT = TT(MT, zT);
              if (void 0 !== mT) return mT;
              zT = UT + MT.breakAfter
            }
          }
      }
      resolveBlock(TT, UT) {
        let mT, WT, zT = -1,
          MT = -1;
        if (this.blockTiles(((gT, nT) => {
            let HT = nT + gT.length;
            if (TT >= nT && TT <= HT) {
              if (gT.isWidget() && UT >= -1 && UT <= 1) {
                if (32 & gT.flags) return !0;
                16 & gT.flags && (mT = void 0)
              }(nT < TT || TT == HT && (UT < -1 ? gT.length : gT.covers(1))) && (!mT || !gT.isWidget() && mT.isWidget()) && (mT = gT, zT = TT - nT), (HT > TT || TT == nT && (UT > 1 ? gT.length : gT.covers(-1))) && (!WT || !gT.isWidget() && WT.isWidget()) && (WT = gT, MT = TT - nT)
            }
          })), !mT && !WT) throw new Error("No tile at position " + TT);
        return mT && UT < 0 || !WT ? {
          tile: mT,
          offset: zT
        } : {
          tile: WT,
          offset: MT
        }
      }
    }
    class cm extends pm {
      constructor(TT, UT) {
        super(TT), this.wrapper = UT
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
      static of (TT, UT) {
        let mT = new cm(UT || document.createElement(TT.tagName), TT);
        return UT || (mT.flags |= 4), mT
      }
    }
    class fm extends pm {
      constructor(TT, UT) {
        super(TT), this.attrs = UT
      }
      isLine() {
        return !0
      }
      static start(TT, UT, mT) {
        let WT = new fm(UT || document.createElement("div"), TT);
        return UT && mT || (WT.flags |= 4), WT
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(TT, UT, mT) {
        let WT = null,
          zT = -1,
          MT = null,
          gT = -1;
        ! function TT(nT, HT) {
          for (let kT = 0, jT = 0; kT < nT.children.length && jT <= HT; kT++) {
            let lT = nT.children[kT],
              LT = jT + lT.length;
            LT >= HT && (lT.isComposite() ? TT(lT, HT - jT) : (!MT || MT.isHidden && (UT > 0 || mT && qm(MT, lT))) && (LT > HT || 32 & lT.flags) ? (MT = lT, gT = HT - jT) : (jT < HT || 16 & lT.flags && !lT.isHidden) && (WT = lT, zT = HT - jT)), jT = LT
          }
        }(this, TT);
        let nT = (UT < 0 ? WT : MT) || WT || MT;
        return nT ? {
          tile: nT,
          offset: nT == WT ? zT : gT
        } : null
      }
      coordsIn(TT, UT) {
        let mT = this.resolveInline(TT, UT, !0);
        return mT ? mT.tile.coordsIn(Math.max(0, mT.offset), UT) : function(TT) {
          let UT = TT.dom.lastChild;
          if (!UT) return TT.dom.getBoundingClientRect();
          let mT = rT(UT);
          return mT[mT.length - 1] || null
        }(this)
      }
      domIn(TT, UT) {
        let mT = this.resolveInline(TT, UT);
        if (mT) {
          let {
            tile: TT,
            offset: WT
          } = mT;
          if (this.dom.contains(TT.dom)) return TT.isText() ? new HU(TT.dom, Math.min(TT.dom.nodeValue.length, WT)) : TT.domPosFor(WT, 16 & TT.flags ? 1 : 32 & TT.flags ? -1 : UT);
          let zT = mT.tile.parent,
            MT = !1;
          for (let UT of zT.children) {
            if (MT) return new HU(UT.dom, 0);
            UT == mT.tile && (MT = !0)
          }
        }
        return new HU(this.dom, 0)
      }
    }

    function qm(TT, UT) {
      let mT = TT.coordsIn(0, 1),
        WT = UT.coordsIn(0, 1);
      return mT && WT && WT.top < mT.bottom
    }
    class im extends pm {
      constructor(TT, UT) {
        super(TT), this.mark = UT
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (TT, UT) {
        let mT = new im(UT || document.createElement(TT.tagName), TT);
        return UT || (mT.flags |= 4), mT
      }
    }
    class bm extends Lm {
      constructor(TT, UT) {
        super(TT, UT.length), this.text = UT
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
      coordsIn(TT, UT) {
        let mT = this.dom.nodeValue.length;
        TT > mT && (TT = mT);
        let WT = TT,
          zT = TT,
          MT = 0;
        0 == TT && UT < 0 || TT == mT && UT >= 0 ? eT.chrome || eT.gecko || (TT ? (WT--, MT = 1) : zT < mT && (zT++, MT = -1)) : UT < 0 ? WT-- : zT < mT && zT++;
        let gT = WU(this.dom, WT, zT).getClientRects();
        if (!gT.length) return null;
        let nT = gT[(MT ? MT < 0 : UT >= 0) ? 0 : gT.length - 1];
        return eT.safari && !MT && 0 == nT.width && (nT = Array.prototype.find.call(gT, (TT => TT.width)) || nT), MT ? hT(nT, MT < 0) : nT || null
      }
      static of (TT, UT) {
        let mT = new bm(UT || document.createTextNode(TT), TT);
        return UT || (mT.flags |= 2), mT
      }
    }
    class Om extends Lm {
      constructor(TT, UT, mT, WT) {
        super(TT, UT, WT), this.widget = mT
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
      coordsIn(TT, UT) {
        return this.coordsInWidget(TT, UT, !1)
      }
      coordsInWidget(TT, UT, mT) {
        let WT = this.widget.coordsAt(this.dom, TT, UT);
        if (WT) return WT;
        if (mT) return hT(this.dom.getBoundingClientRect(), this.length ? 0 == TT : UT <= 0);
        {
          let UT = this.dom.getClientRects(),
            mT = null;
          if (!UT.length) return null;
          let WT = !!(16 & this.flags) || !(32 & this.flags) && TT > 0;
          for (let zT = WT ? UT.length - 1 : 0; mT = UT[zT], !(TT > 0 ? 0 == zT : zT == UT.length - 1 || mT.top < mT.bottom); zT += WT ? -1 : 1);
          return hT(mT, !WT)
        }
      }
      get overrideDOMText() {
        if (!this.length) return WT.I.empty;
        let {
          root: TT
        } = this;
        if (!TT) return WT.I.empty;
        let UT = this.posAtStart;
        return TT.view.state.doc.slice(UT, UT + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (TT, UT, mT, WT, zT) {
        return zT || (zT = TT.toDOM(UT), TT.editable || (zT.contentEditable = "false")), new Om(zT, mT, TT, WT)
      }
    }
    class em extends Lm {
      constructor(TT) {
        let UT = document.createElement("img");
        UT.className = "cm-widgetBuffer", UT.setAttribute("aria-hidden", "true"), super(UT, 0, TT)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return WT.I.empty
      }
      coordsIn(TT) {
        return this.dom.getBoundingClientRect()
      }
    }
    class Ym {
      constructor(TT) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = TT
      }
      advance(TT, UT, mT) {
        let {
          tile: WT,
          index: zT,
          beforeBreak: MT,
          parents: gT
        } = this;
        for (; TT || UT > 0;)
          if (WT.isComposite())
            if (MT) {
              if (!TT) break;
              mT && mT.break(), TT--, MT = !1
            } else if (zT == WT.children.length) {
          if (!TT && !gT.length) break;
          mT && mT.leave(WT), MT = !!WT.breakAfter, ({
            tile: WT,
            index: zT
          } = gT.pop()), zT++
        } else {
          let nT = WT.children[zT],
            HT = nT.breakAfter;
          !(UT > 0 ? nT.length <= TT : nT.length < TT) || mT && !1 === mT.skip(nT, 0, nT.length) && nT.isComposite ? (gT.push({
            tile: WT,
            index: zT
          }), WT = nT, zT = 0, mT && nT.isComposite() && mT.enter(nT)) : (MT = !!HT, zT++, TT -= nT.length)
        } else if (zT == WT.length) MT = !!WT.breakAfter, ({
          tile: WT,
          index: zT
        } = gT.pop()), zT++;
        else {
          if (!TT) break;
          {
            let UT = Math.min(TT, WT.length - zT);
            mT && mT.skip(WT, zT, zT + UT), TT -= UT, zT += UT
          }
        }
        return this.tile = WT, this.index = zT, this.beforeBreak = MT, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class Jm {
      constructor(TT, UT, mT, WT) {
        this.from = TT, this.to = UT, this.wrapper = mT, this.rank = WT
      }
    }
    class xm {
      constructor(TT, UT, mT) {
        this.cache = TT, this.root = UT, this.blockWrappers = mT, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(TT, UT, mT, WT) {
        var zT;
        this.flushBuffer();
        let MT = this.ensureMarks(UT, mT),
          gT = MT.lastChild;
        if (gT && gT.isText() && !(8 & gT.flags) && gT.length + TT.length < 512) {
          this.cache.reused.set(gT, 2), (MT.children[MT.children.length - 1] = new bm(gT.dom, gT.text + TT)).parent = MT
        } else MT.append(WT || bm.of(TT, null === (zT = this.cache.find(bm)) || void 0 === zT ? void 0 : zT.dom));
        this.pos += TT.length, this.afterWidget = null
      }
      addComposition(TT, UT) {
        let mT = this.curLine;
        mT.dom != UT.line.dom && (mT.setDOM(this.cache.reused.has(UT.line) ? Im(UT.line.dom) : UT.line.dom), this.cache.reused.set(UT.line, 2));
        let WT = mT;
        for (let gT = UT.marks.length - 1; gT >= 0; gT--) {
          let TT = UT.marks[gT],
            mT = WT.lastChild;
          if (mT instanceof im && mT.mark.eq(TT.mark)) mT.dom != TT.dom && mT.setDOM(Im(TT.dom)), WT = mT;
          else {
            if (this.cache.reused.get(TT)) {
              let UT = Lm.get(TT.dom);
              UT && UT.setDOM(Im(TT.dom))
            }
            let UT = im.of(TT.mark, TT.dom);
            WT.append(UT), WT = UT
          }
          this.cache.reused.set(TT, 2)
        }
        let zT = Lm.get(TT.text);
        zT && this.cache.reused.set(zT, 2);
        let MT = new bm(TT.text, TT.text.nodeValue);
        MT.flags |= 8, WT.append(MT)
      }
      addInlineWidget(TT, UT, mT) {
        let WT = this.afterWidget && 48 & TT.flags && (48 & this.afterWidget.flags) == (48 & TT.flags);
        WT || this.flushBuffer();
        let zT = this.ensureMarks(UT, mT);
        WT || 16 & TT.flags || zT.append(this.getBuffer(1)), zT.append(TT), this.pos += TT.length, this.afterWidget = TT
      }
      addMark(TT, UT, mT) {
        this.flushBuffer(), this.ensureMarks(UT, mT).append(TT), this.pos += TT.length, this.afterWidget = null
      }
      addBlockWidget(TT) {
        this.getBlockPos().append(TT), this.pos += TT.length, this.lastBlock = TT, this.endLine()
      }
      continueWidget(TT) {
        (this.afterWidget || this.lastBlock).length += TT, this.pos += TT
      }
      addLineStart(TT, UT) {
        var mT;
        TT || (TT = Xm);
        let WT = fm.start(TT, UT || (null === (mT = this.cache.find(fm)) || void 0 === mT ? void 0 : mT.dom), !!UT);
        this.getBlockPos().append(this.lastBlock = this.curLine = WT)
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
      ensureMarks(TT, UT) {
        var mT;
        let WT = this.curLine;
        for (let zT = TT.length - 1; zT >= 0; zT--) {
          let MT, gT = TT[zT];
          if (UT > 0 && (MT = WT.lastChild) && MT instanceof im && MT.mark.eq(gT)) WT = MT, UT--;
          else {
            let TT = im.of(gT, null === (mT = this.cache.find(im, (TT => TT.mark.eq(gT)))) || void 0 === mT ? void 0 : mT.dom);
            WT.append(TT), WT = TT, UT = 0
          }
        }
        return WT
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let TT = this.curLine.lastChild;
          TT && ym(this.curLine, !1) && ("BR" == TT.dom.nodeName || !TT.isWidget() || eT.ios && ym(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(sm, 0, 32) || new Om(sm.toDOM(), 0, sm, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let TT = this.wrappers.length - 1; TT >= 0; TT--) this.wrappers[TT].to < this.pos && this.wrappers.splice(TT, 1);
        for (let TT = this.blockWrappers; TT.value && TT.from <= this.pos; TT.next())
          if (TT.to >= this.pos) {
            let UT = new Jm(TT.from, TT.to, TT.value, TT.rank),
              mT = this.wrappers.length;
            for (; mT > 0 && (this.wrappers[mT - 1].rank - UT.rank || this.wrappers[mT - 1].to - UT.to) < 0;) mT--;
            this.wrappers.splice(mT, 0, UT)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var TT;
        this.updateBlockWrappers();
        let UT = this.root;
        for (let mT of this.wrappers) {
          let WT = UT.lastChild;
          if (mT.from < this.pos && WT instanceof cm && WT.wrapper.eq(mT.wrapper)) UT = WT;
          else {
            let WT = cm.of(mT.wrapper, null === (TT = this.cache.find(cm, (TT => TT.wrapper.eq(mT.wrapper)))) || void 0 === TT ? void 0 : TT.dom);
            UT.append(WT), UT = WT
          }
        }
        return UT
      }
      blockPosCovered() {
        let TT = this.lastBlock;
        return null != TT && !TT.breakAfter && (!TT.isWidget() || (160 & TT.flags) > 0)
      }
      getBuffer(TT) {
        let UT = 2 | (TT < 0 ? 16 : 32),
          mT = this.cache.find(em, void 0, 1);
        return mT && (mT.flags = UT), mT || new em(UT)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class dm {
      constructor(TT) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = TT.iter()
      }
      skip(TT) {
        this.textOff + TT <= this.text.length ? this.textOff += TT : (this.skipCount += TT - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(TT) {
        if (this.textOff == this.text.length) {
          let {
            value: UT,
            lineBreak: mT,
            done: WT
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, WT) throw new Error("Ran out of text content when drawing inline views");
          this.text = UT;
          let zT = this.textOff = Math.min(TT, UT.length);
          return mT ? null : UT.slice(0, zT)
        }
        let UT = Math.min(this.text.length, this.textOff + TT),
          mT = this.text.slice(this.textOff, UT);
        return this.textOff = UT, mT
      }
    }
    const wm = [Om, fm, bm, im, em, cm, Zm];
    for (let yg = 0; yg < wm.length; yg++) wm[yg].bucket = yg;
    class tm {
      constructor(TT) {
        this.view = TT, this.buckets = wm.map((() => [])), this.index = wm.map((() => 0)), this.reused = new Map
      }
      add(TT) {
        let UT = TT.constructor.bucket,
          mT = this.buckets[UT];
        mT.length < 6 ? mT.push(TT) : mT[this.index[UT] = (this.index[UT] + 1) % 6] = TT
      }
      find(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          WT = TT.bucket,
          zT = this.buckets[WT],
          MT = this.index[WT];
        for (let gT = zT.length - 1; gT >= 0; gT--) {
          let TT = (gT + MT) % zT.length,
            nT = zT[TT];
          if ((!UT || UT(nT)) && !this.reused.has(nT)) return zT.splice(TT, 1), TT < MT && this.index[WT]--, this.reused.set(nT, mT), nT
        }
        return null
      }
      findWidget(TT, UT, mT) {
        let WT = this.buckets[0];
        if (WT.length)
          for (let zT = 0, MT = 0;; zT++) {
            if (zT == WT.length) {
              if (MT) return null;
              MT = 1, zT = 0
            }
            let gT = WT[zT];
            if (!this.reused.has(gT) && (0 == MT ? gT.widget.compare(TT) : gT.widget.constructor == TT.constructor && TT.updateDOM(gT.dom, this.view, gT.widget))) return WT.splice(zT, 1), zT < this.index[0] && this.index[0]--, gT.widget == TT && gT.length == UT && (497 & gT.flags) == mT ? (this.reused.set(gT, 1), gT) : (this.reused.set(gT, 2), new Om(gT.dom, UT, TT, -498 & gT.flags | mT))
          }
      }
      reuse(TT) {
        return this.reused.set(TT, 1), TT
      }
      maybeReuse(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(TT)) return this.reused.set(TT, UT), TT.dom
      }
      clear() {
        for (let TT = 0; TT < this.buckets.length; TT++) this.buckets[TT].length = this.index[TT] = 0
      }
    }
    class am {
      constructor(TT, UT, mT, zT, MT) {
        this.view = TT, this.HW = zT, this.disallowBlockEffectsFor = MT, this.openWidget = !1, this.openMarks = 0, this.cache = new tm(TT), this.text = new dm(TT.state.doc), this.builder = new xm(this.cache, new Zm(TT, TT.contentDOM), WT.x.iter(mT)), this.cache.reused.set(UT, 2), this.old = new Ym(UT), this.reuseWalker = {
          skip: (TT, UT, mT) => {
            if (this.cache.add(TT), TT.isComposite()) return !1
          },
          enter: TT => this.cache.add(TT),
          leave: () => {},
          break: () => {}
        }
      }
      run(TT, UT) {
        let mT = UT && this.getCompositionContext(UT.text);
        for (let WT = 0, zT = 0, MT = 0;;) {
          let gT = MT < TT.length ? TT[MT++] : null,
            nT = gT ? gT.fromA : this.old.root.length;
          if (nT > WT) {
            let TT = nT - WT;
            this.preserve(TT, !MT, !gT), WT = nT, zT += TT
          }
          if (!gT) break;
          UT && gT.fromA <= UT.range.fromA && gT.toA >= UT.range.toA ? (this.forward(gT.fromA, UT.range.fromA, UT.range.fromA < UT.range.toA ? 1 : -1), this.emit(zT, UT.range.fromB), this.cache.clear(), this.builder.addComposition(UT, mT), this.text.skip(UT.range.toB - UT.range.fromB), this.forward(UT.range.fromA, gT.toA), this.emit(UT.range.toB, gT.toB)) : (this.forward(gT.fromA, gT.toA), this.emit(zT, gT.toB)), zT = gT.toB, WT = gT.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(TT, UT, mT) {
        let WT = function(TT) {
            let UT = [];
            for (let mT = TT.parents.length; mT > 1; mT--) {
              let WT = mT == TT.parents.length ? TT.tile : TT.parents[mT].tile;
              WT instanceof im && UT.push(WT.mark)
            }
            return UT
          }(this.old),
          zT = this.openMarks;
        this.old.advance(TT, mT ? 1 : -1, {
          skip: (TT, UT, mT) => {
            if (TT.isWidget())
              if (this.openWidget) this.builder.continueWidget(mT - UT);
              else {
                let MT = mT > 0 || UT < TT.length ? Om.of(TT.widget, this.view, mT - UT, 496 & TT.flags, this.cache.maybeReuse(TT)) : this.cache.reuse(TT);
                256 & MT.flags ? (MT.flags &= -2, this.builder.addBlockWidget(MT)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(MT, WT, zT), zT = WT.length)
              }
            else if (TT.isText()) this.builder.ensureLine(null), UT || mT != TT.length || this.cache.reused.has(TT) ? (this.cache.add(TT), this.builder.addText(TT.text.slice(UT, mT), WT, zT)) : this.builder.addText(TT.text, WT, zT, this.cache.reuse(TT)), zT = WT.length;
            else if (TT.isLine()) TT.flags &= -2, this.cache.reused.set(TT, 1), this.builder.addLine(TT);
            else if (TT instanceof em) this.cache.add(TT);
            else {
              if (!(TT instanceof im)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(TT, WT, zT), this.cache.reused.set(TT, 1), zT = WT.length
            }
            this.openWidget = !1
          },
          enter: TT => {
            TT.isLine() ? this.builder.addLineStart(TT.attrs, this.cache.maybeReuse(TT)) : (this.cache.add(TT), TT instanceof im && WT.unshift(TT.mark)), this.openWidget = !1
          },
          leave: TT => {
            TT.isLine() ? WT.length && (WT.length = zT = 0) : TT instanceof im && (WT.shift(), zT = Math.min(zT, WT.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(TT)
      }
      emit(TT, UT) {
        let mT = null,
          zT = this.builder,
          MT = 0,
          gT = WT.x.spans(this.HW, TT, UT, {
            point: (TT, UT, WT, gT, nT, HT) => {
              if (WT instanceof QT) {
                if (this.disallowBlockEffectsFor[HT]) {
                  if (WT.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (UT > this.view.state.doc.lineAt(TT).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (MT = gT.length, nT > gT.length) zT.continueWidget(UT - TT);
                else {
                  let MT = WT.widget || (WT.block ? Qm.block : Qm.inline),
                    HT = function(TT) {
                      let UT = TT.isReplace ? (TT.startSide < 0 ? 64 : 0) | (TT.endSide > 0 ? 128 : 0) : TT.startSide > 0 ? 32 : 16;
                      TT.block && (UT |= 256);
                      return UT
                    }(WT),
                    kT = this.cache.findWidget(MT, UT - TT, HT) || Om.of(MT, this.view, UT - TT, HT);
                  WT.block ? (WT.startSide > 0 && zT.addLineStartIfNotCovered(mT), zT.addBlockWidget(kT)) : (zT.ensureLine(mT), zT.addInlineWidget(kT, gT, nT))
                }
                mT = null
              } else mT = function(TT, UT) {
                let mT = UT.spec.attributes,
                  WT = UT.spec.class;
                if (!mT && !WT) return TT;
                TT || (TT = {
                  class: "cm-line"
                });
                mT && YT(mT, TT);
                WT && (TT.class += " " + WT);
                return TT
              }(mT, WT);
              UT > TT && this.text.skip(UT - TT)
            },
            span: (TT, UT, WT, MT) => {
              for (let gT = TT; gT < UT;) {
                let nT = this.text.next(Math.min(512, UT - gT));
                null == nT ? (zT.addLineStartIfNotCovered(mT), zT.addBreak(), gT++) : (zT.ensureLine(mT), zT.addText(nT, WT, gT == TT ? MT : WT.length), gT += nT.length), mT = null
              }
            }
          });
        zT.addLineStartIfNotCovered(mT), this.openWidget = gT > MT, this.openMarks = gT
      }
      forward(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        UT - TT <= 10 ? this.old.advance(UT - TT, mT, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(UT - TT - 10, -1), this.old.advance(5, mT, this.reuseWalker))
      }
      getCompositionContext(TT) {
        let UT = [],
          mT = null;
        for (let WT = TT.parentNode;; WT = WT.parentNode) {
          let TT = Lm.get(WT);
          if (WT == this.view.contentDOM) break;
          TT instanceof im ? UT.push(TT) : (null === TT || void 0 === TT ? void 0 : TT.isLine()) ? mT = TT : TT instanceof cm || ("DIV" != WT.nodeName || mT || WT == this.view.contentDOM ? mT || UT.push(im.of(new XT({
            tagName: WT.nodeName.toLowerCase(),
            attributes: wT(WT)
          }), WT)) : mT = new fm(WT, Xm))
        }
        return {
          line: mT,
          marks: UT
        }
      }
    }

    function ym(TT, UT) {
      let mT = TT => {
        for (let WT of TT.children)
          if ((UT ? WT.isText() : WT.length) || mT(WT)) return !0;
        return !1
      };
      return mT(TT)
    }
    const Xm = {
      class: "cm-line"
    };

    function Im(TT) {
      let UT = Lm.get(TT);
      return UT && UT.setDOM(TT.cloneNode()), TT
    }
    class Qm extends tT {
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
    Qm.inline = new Qm("span"), Qm.block = new Qm("div");
    const sm = new class extends tT {
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
    class Fm {
      constructor(TT) {
        this.view = TT, this.HW = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = yT.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new Zm(TT, TT.contentDOM), this.updateInner([new km(0, 0, 0, TT.state.doc.length)], null)
      }
      update(TT) {
        var UT;
        let mT = TT.changedRanges;
        this.minWidth > 0 && mT.length && (mT.every((TT => {
          let {
            fromA: UT,
            toA: mT
          } = TT;
          return mT < this.minWidthFrom || UT > this.minWidthTo
        })) ? (this.minWidthFrom = TT.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = TT.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(TT);
        let zT = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (UT = this.domChanged) || void 0 === UT ? void 0 : UT.newSel) ? zT = this.domChanged.newSel.head : function(TT, UT) {
          let mT = !1;
          UT && TT.iterChangedRanges(((TT, WT) => {
            TT < UT.to && WT > UT.from && (mT = !0)
          }));
          return mT
        }(TT.changes, this.hasComposition) || TT.selectionSet || (zT = TT.state.selection.main.head));
        let MT = zT > -1 ? function(TT, UT, mT) {
          let WT = Vm(TT, mT);
          if (!WT) return null;
          let {
            node: zT,
            from: MT,
            to: gT
          } = WT, nT = zT.nodeValue;
          if (/[\n\r]/.test(nT)) return null;
          if (TT.state.doc.sliceString(WT.from, WT.to) != nT) return null;
          let HT = UT.invertedDesc;
          return {
            range: new km(HT.mapPos(MT), HT.mapPos(gT), MT, gT),
            text: zT
          }
        }(this.view, TT.changes, zT) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: UT,
            to: WT
          } = this.hasComposition;
          mT = new km(UT, WT, TT.changes.mapPos(UT, -1), TT.changes.mapPos(WT, 1)).addToSet(mT.slice())
        }
        this.hasComposition = MT ? {
          from: MT.range.fromB,
          to: MT.range.toB
        } : null, (eT.ie || eT.chrome) && !MT && TT && TT.state.doc.lines != TT.startState.doc.lines && (this.forceSelection = !0);
        let gT = this.HW,
          nT = this.blockWrappers;
        this.updateDeco();
        let HT = function(TT, UT, mT) {
          let zT = new um;
          return WT.x.compare(TT, UT, mT, zT), zT.changes
        }(gT, this.HW, TT.changes);
        HT.length && (mT = km.extendWithRanges(mT, HT));
        let kT = function(TT, UT, mT) {
          let zT = new Cm;
          return WT.x.compare(TT, UT, mT, zT), zT.changes
        }(nT, this.blockWrappers, TT.changes);
        return kT.length && (mT = km.extendWithRanges(mT, kT)), MT && !mT.some((TT => TT.fromA <= MT.range.fromA && TT.toA >= MT.range.toA)) && (mT = MT.range.addToSet(mT.slice())), !(2 & this.tile.flags && 0 == mT.length) && (this.updateInner(mT, MT), TT.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(TT, UT) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: mT
        } = this.view;
        mT.ignore((() => {
          if (UT || TT.length) {
            let mT = this.tile,
              WT = new am(this.view, mT, this.blockWrappers, this.HW, this.dynamicDecorationMap);
            UT && Lm.get(UT.text) && WT.cache.reused.set(Lm.get(UT.text), 2), this.tile = WT.run(TT, UT), Pm(mT, WT.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let WT = eT.chrome || eT.ios ? {
            node: mT.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(WT), !WT || !WT.written && mT.selectionRange.focusNode == WT.node && this.tile.dom.contains(WT.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let WT = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let zT of this.tile.children) zT.isWidget() && zT.widget instanceof rm && WT.push(zT.dom);
        mT.updateGaps(WT)
      }
      updateEditContextFormatting(TT) {
        this.editContextFormatting = this.editContextFormatting.map(TT.changes);
        for (let UT of TT.transactions)
          for (let TT of UT.effects) TT.is(SU) && (this.editContextFormatting = TT.value)
      }
      updateSelection() {
        let TT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: UT
        } = this.tile, mT = this.view.root.activeElement, WT = mT == UT, zT = !WT && !(this.view.state.facet(NU) || UT.tabIndex > -1) && CT(UT, this.view.observer.selectionRange) && !(mT && UT.contains(mT));
        if (!(WT || TT || zT)) return;
        let MT = this.forceSelection;
        this.forceSelection = !1;
        let gT, nT, HT = this.view.state.selection.main;
        if (HT.empty ? nT = gT = this.inlineDOMNearPos(HT.anchor, HT.assoc || 1) : (nT = this.inlineDOMNearPos(HT.head, HT.head == HT.from ? 1 : -1), gT = this.inlineDOMNearPos(HT.anchor, HT.anchor == HT.from ? 1 : -1)), eT.gecko && HT.empty && !this.hasComposition && (1 == (kT = gT).node.nodeType && kT.node.firstChild && (0 == kT.offset || "false" == kT.node.childNodes[kT.offset - 1].contentEditable) && (kT.offset == kT.node.childNodes.length || "false" == kT.node.childNodes[kT.offset].contentEditable))) {
          let TT = document.createTextNode("");
          this.view.observer.ignore((() => gT.node.insertBefore(TT, gT.node.childNodes[gT.offset] || null))), gT = nT = new HU(TT, 0), MT = !0
        }
        var kT;
        let jT = this.view.observer.selectionRange;
        !MT && jT.focusNode && (KT(gT.node, gT.offset, jT.anchorNode, jT.anchorOffset) && KT(nT.node, nT.offset, jT.focusNode, jT.focusOffset) || this.suppressWidgetCursorChange(jT, HT)) || (this.view.observer.ignore((() => {
          eT.android && eT.chrome && UT.contains(jT.focusNode) && function(TT, UT) {
            for (let mT = TT; mT && mT != UT; mT = mT.assignedSlot || mT.parentNode)
              if (1 == mT.nodeType && "false" == mT.contentEditable) return !0;
            return !1
          }(jT.focusNode, UT) && (UT.blur(), UT.focus({
            preventScroll: !0
          }));
          let TT = VT(this.view.root);
          if (TT)
            if (HT.empty) {
              if (eT.gecko) {
                let TT = (WT = gT.node, MT = gT.offset, 1 != WT.nodeType ? 0 : (MT && "false" == WT.childNodes[MT - 1].contentEditable ? 1 : 0) | (MT < WT.childNodes.length && "false" == WT.childNodes[MT].contentEditable ? 2 : 0));
                if (TT && 3 != TT) {
                  let UT = (1 == TT ? gU : nU)(gT.node, gT.offset);
                  UT && (gT = new HU(UT.node, UT.offset))
                }
              }
              TT.collapse(gT.node, gT.offset), null != HT.bidiLevel && void 0 !== TT.caretBidiLevel && (TT.caretBidiLevel = HT.bidiLevel)
            } else if (TT.extend) {
            TT.collapse(gT.node, gT.offset);
            try {
              TT.extend(nT.node, nT.offset)
            } catch (kT) {}
          } else {
            let UT = document.createRange();
            HT.anchor > HT.head && ([gT, nT] = [nT, gT]), UT.setEnd(nT.node, nT.offset), UT.setStart(gT.node, gT.offset), TT.removeAllRanges(), TT.addRange(UT)
          } else;
          var WT, MT;
          zT && this.view.root.activeElement == UT && (UT.blur(), mT && mT.focus())
        })), this.view.observer.setSelectionRange(gT, nT)), this.impreciseAnchor = gT.precise ? null : new HU(jT.anchorNode, jT.anchorOffset), this.impreciseHead = nT.precise ? null : new HU(jT.focusNode, jT.focusOffset)
      }
      suppressWidgetCursorChange(TT, UT) {
        return this.hasComposition && UT.empty && KT(TT.focusNode, TT.focusOffset, TT.anchorNode, TT.anchorOffset) && this.posFromDOM(TT.focusNode, TT.focusOffset) == UT.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: TT
        } = this, UT = TT.state.selection.main, mT = VT(TT.root), {
          anchorNode: WT,
          anchorOffset: zT
        } = TT.observer.selectionRange;
        if (!mT || !UT.empty || !UT.assoc || !mT.modify) return;
        let MT = this.lineAt(UT.head, UT.assoc);
        if (!MT) return;
        let gT = MT.posAtStart;
        if (UT.head == gT || UT.head == gT + MT.length) return;
        let nT = this.coordsAt(UT.head, -1),
          HT = this.coordsAt(UT.head, 1);
        if (!nT || !HT || nT.bottom > HT.top) return;
        let kT = this.domAtPos(UT.head + UT.assoc, UT.assoc);
        mT.collapse(kT.node, kT.offset), mT.modify("move", UT.assoc < 0 ? "forward" : "backward", "lineboundary"), TT.observer.readSelectionRange();
        let jT = TT.observer.selectionRange;
        TT.docView.posFromDOM(jT.anchorNode, jT.anchorOffset) != UT.from && mT.collapse(WT, zT)
      }
      posFromDOM(TT, UT) {
        let mT = this.tile.nearest(TT);
        if (!mT) return 2 & this.tile.dom.compareDocumentPosition(TT) ? 0 : this.view.state.doc.length;
        let WT = mT.posAtStart;
        if (!mT.isComposite()) return mT.isText() ? TT == mT.dom ? WT + UT : WT + (UT ? mT.length : 0) : WT;
        {
          let zT;
          if (TT == mT.dom) zT = mT.dom.childNodes[UT];
          else {
            let WT = 0 == ET(TT) ? 0 : 0 == UT ? -1 : 1;
            for (;;) {
              let UT = TT.parentNode;
              if (UT == mT.dom) break;
              0 == WT && UT.firstChild != UT.lastChild && (WT = TT == UT.firstChild ? -1 : 1), TT = UT
            }
            zT = WT < 0 ? TT : TT.nextSibling
          }
          if (zT == mT.dom.firstChild) return WT;
          for (; zT && !Lm.get(zT);) zT = zT.nextSibling;
          if (!zT) return WT + mT.length;
          for (let TT = 0, UT = WT;; TT++) {
            let WT = mT.children[TT];
            if (WT.dom == zT) return UT;
            UT += WT.length + WT.breakAfter
          }
        }
      }
      domAtPos(TT, UT) {
        let {
          tile: mT,
          offset: WT
        } = this.tile.resolveBlock(TT, UT);
        return mT.isWidget() ? mT.domPosFor(TT, UT) : mT.domIn(WT, UT)
      }
      inlineDOMNearPos(TT, UT) {
        let mT, WT, zT = -1,
          MT = !1,
          gT = -1,
          nT = !1;
        return this.tile.blockTiles(((UT, HT) => {
          if (UT.isWidget()) {
            if (32 & UT.flags && HT >= TT) return !0;
            16 & UT.flags && (MT = !0)
          } else {
            let kT = HT + UT.length;
            if (HT <= TT && (mT = UT, zT = TT - HT, MT = kT < TT), kT >= TT && !WT && (WT = UT, gT = TT - HT, nT = HT > TT), HT > TT && WT) return !0
          }
        })), mT || WT ? (MT && WT ? mT = null : nT && mT && (WT = null), mT && UT < 0 || !WT ? mT.domIn(zT, UT) : WT.domIn(gT, UT)) : this.domAtPos(TT, UT)
      }
      coordsAt(TT, UT) {
        let {
          tile: mT,
          offset: WT
        } = this.tile.resolveBlock(TT, UT);
        return mT.isWidget() ? mT.widget instanceof rm ? null : mT.coordsInWidget(WT, UT, !0) : mT.coordsIn(WT, UT)
      }
      lineAt(TT, UT) {
        let {
          tile: mT
        } = this.tile.resolveBlock(TT, UT);
        return mT.isLine() ? mT : null
      }
      coordsForChar(TT) {
        let {
          tile: UT,
          offset: mT
        } = this.tile.resolveBlock(TT, 1);
        if (!UT.isLine()) return null;
        return function TT(UT, mT) {
          if (UT.isComposite())
            for (let WT of UT.children) {
              if (WT.length >= mT) {
                let UT = TT(WT, mT);
                if (UT) return UT
              }
              if ((mT -= WT.length) < 0) break
            } else if (UT.isText() && mT < UT.length) {
              let TT = (0, WT.U)(UT.text, mT);
              if (TT == mT) return null;
              let zT = WU(UT.dom, mT, TT).getClientRects();
              for (let UT = 0; UT < zT.length; UT++) {
                let TT = zT[UT];
                if (UT == zT.length - 1 || TT.top < TT.bottom && TT.left < TT.right) return TT
              }
            } return null
        }(UT, mT)
      }
      measureVisibleLineHeights(TT) {
        let UT = [],
          {
            from: mT,
            to: WT
          } = TT,
          zT = this.view.contentDOM.clientWidth,
          MT = zT > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          gT = -1,
          nT = this.view.textDirection == kU.LTR,
          HT = 0,
          kT = (TT, jT, lT) => {
            for (let LT = 0; LT < TT.children.length && !(jT > WT); LT++) {
              let WT = TT.children[LT],
                pT = jT + WT.length,
                BT = WT.dom.getBoundingClientRect(),
                {
                  height: ZT
                } = BT;
              if (lT && !LT && (HT += BT.top - lT.top), WT instanceof cm) pT > mT && kT(WT, jT, BT);
              else if (jT >= mT && (HT > 0 && UT.push(-HT), UT.push(ZT + HT), HT = 0, MT)) {
                let TT = WT.dom.lastChild,
                  UT = TT ? rT(TT) : [];
                if (UT.length) {
                  let TT = UT[UT.length - 1],
                    mT = nT ? TT.right - BT.left : BT.right - TT.left;
                  mT > gT && (gT = mT, this.minWidth = zT, this.minWidthFrom = jT, this.minWidthTo = pT)
                }
              }
              lT && LT == TT.children.length - 1 && (HT += lT.bottom - BT.bottom), jT = pT + WT.breakAfter
            }
          };
        return kT(this.tile, 0, null), UT
      }
      textDirectionAt(TT) {
        let {
          tile: UT
        } = this.tile.resolveBlock(TT, 1);
        return "rtl" == getComputedStyle(UT.dom).direction ? kU.RTL : kU.LTR
      }
      measureTextSize() {
        let TT = this.tile.blockTiles((TT => {
          if (TT.isLine() && TT.children.length && TT.length <= 20) {
            let UT, mT = 0;
            for (let WT of TT.children) {
              if (!WT.isText() || /[^ -~]/.test(WT.text)) return;
              let TT = rT(WT.dom);
              if (1 != TT.length) return;
              mT += TT[0].width, UT = TT[0].height
            }
            if (mT) return {
              lineHeight: TT.dom.getBoundingClientRect().height,
              charWidth: mT / TT.length,
              textHeight: UT
            }
          }
        }));
        if (TT) return TT;
        let UT, mT, WT, zT = document.createElement("div");
        return zT.className = "cm-line", zT.style.width = "99999px", zT.style.position = "absolute", zT.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(zT);
          let TT = rT(zT.firstChild)[0];
          UT = zT.getBoundingClientRect().height, mT = TT && TT.width ? TT.width / 27 : 7, WT = TT && TT.height ? TT.height : UT, zT.remove()
        })), {
          lineHeight: UT,
          charWidth: mT,
          textHeight: WT
        }
      }
      computeBlockGapDeco() {
        let TT = [],
          UT = this.view.viewState;
        for (let mT = 0, WT = 0;; WT++) {
          let zT = WT == UT.viewports.length ? null : UT.viewports[WT],
            MT = zT ? zT.from - 1 : this.view.state.doc.length;
          if (MT > mT) {
            let WT = (UT.lineBlockAt(MT).bottom - UT.lineBlockAt(mT).top) / this.view.scaleY;
            TT.push(yT.replace({
              widget: new rm(WT),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(mT, MT))
          }
          if (!zT) break;
          mT = zT.to + 1
        }
        return yT.set(TT)
      }
      updateDeco() {
        let TT = 1,
          UT = this.view.state.facet(Tm).map((UT => (this.dynamicDecorationMap[TT++] = "function" == typeof UT) ? UT(this.view) : UT)),
          mT = !1,
          zT = this.view.state.facet(mm).map(((TT, UT) => {
            let WT = "function" == typeof TT;
            return WT && (mT = !0), WT ? TT(this.view) : TT
          }));
        for (zT.length && (this.dynamicDecorationMap[TT++] = mT, UT.push(WT.x.join(zT))), this.HW = [this.editContextFormatting, ...UT, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; TT < this.HW.length;) this.dynamicDecorationMap[TT++] = !1;
        this.blockWrappers = this.view.state.facet(Um).map((TT => "function" == typeof TT ? TT(this.view) : TT))
      }
      scrollIntoView(TT) {
        var UT;
        if (TT.isSnapshot) {
          let UT = this.view.viewState.lineBlockAt(TT.range.head);
          return this.view.scrollDOM.scrollTop = UT.top - TT.yMargin, void(this.view.scrollDOM.scrollLeft = TT.xMargin)
        }
        for (let jT of this.view.state.facet(CU)) try {
          if (jT(this.view, TT.range, TT)) return !0
        } catch (kT) {
          GU(this.view.state, kT, "scroll handler")
        }
        let mT, {
            range: WT
          } = TT,
          zT = this.coordsAt(WT.head, null !== (UT = WT.assoc) && void 0 !== UT ? UT : WT.empty ? 0 : WT.head > WT.anchor ? -1 : 1);
        if (!zT) return;
        !WT.empty && (mT = this.coordsAt(WT.anchor, WT.anchor > WT.head ? -1 : 1)) && (zT = {
          left: Math.min(zT.left, mT.left),
          top: Math.min(zT.top, mT.top),
          right: Math.max(zT.right, mT.right),
          bottom: Math.max(zT.bottom, mT.bottom)
        });
        let MT = nm(this.view),
          gT = {
            left: zT.left - MT.left,
            top: zT.top - MT.top,
            right: zT.right + MT.right,
            bottom: zT.bottom + MT.bottom
          },
          {
            offsetWidth: nT,
            offsetHeight: HT
          } = this.view.scrollDOM;
        if (function(TT, UT, mT, WT, zT, MT, gT, nT) {
            let HT = TT.ownerDocument,
              kT = HT.defaultView || window;
            for (let jT = TT, lT = !1; jT && !lT;)
              if (1 == jT.nodeType) {
                let TT, LT = jT == HT.body,
                  pT = 1,
                  BT = 1;
                if (LT) TT = DT(kT);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(jT).position) && (lT = !0), jT.scrollHeight <= jT.clientHeight && jT.scrollWidth <= jT.clientWidth) {
                    jT = jT.assignedSlot || jT.parentNode;
                    continue
                  }
                  let UT = jT.getBoundingClientRect();
                  ({
                    scaleX: pT,
                    scaleY: BT
                  } = oT(jT, UT)), TT = {
                    left: UT.left,
                    right: UT.left + jT.clientWidth * pT,
                    top: UT.top,
                    bottom: UT.top + jT.clientHeight * BT
                  }
                }
                let ZT = 0,
                  cT = 0;
                if ("nearest" == zT) UT.top < TT.top + gT ? (cT = UT.top - (TT.top + gT), mT > 0 && UT.bottom > TT.bottom + cT && (cT = UT.bottom - TT.bottom + gT)) : UT.bottom > TT.bottom - gT && (cT = UT.bottom - TT.bottom + gT, mT < 0 && UT.top - cT < TT.top && (cT = UT.top - (TT.top + gT)));
                else {
                  let WT = UT.bottom - UT.top,
                    MT = TT.bottom - TT.top;
                  cT = ("center" == zT && WT <= MT ? UT.top + WT / 2 - MT / 2 : "start" == zT || "center" == zT && mT < 0 ? UT.top - gT : UT.bottom - MT + gT) - TT.top
                }
                if ("nearest" == WT ? UT.left < TT.left + MT ? (ZT = UT.left - (TT.left + MT), mT > 0 && UT.right > TT.right + ZT && (ZT = UT.right - TT.right + MT)) : UT.right > TT.right - MT && (ZT = UT.right - TT.right + MT, mT < 0 && UT.left < TT.left + ZT && (ZT = UT.left - (TT.left + MT))) : ZT = ("center" == WT ? UT.left + (UT.right - UT.left) / 2 - (TT.right - TT.left) / 2 : "start" == WT == nT ? UT.left - MT : UT.right - (TT.right - TT.left) + MT) - TT.left, ZT || cT)
                  if (LT) kT.scrollBy(ZT, cT);
                  else {
                    let TT = 0,
                      mT = 0;
                    if (cT) {
                      let TT = jT.scrollTop;
                      jT.scrollTop += cT / BT, mT = (jT.scrollTop - TT) * BT
                    }
                    if (ZT) {
                      let UT = jT.scrollLeft;
                      jT.scrollLeft += ZT / pT, TT = (jT.scrollLeft - UT) * pT
                    }
                    UT = {
                      left: UT.left - TT,
                      top: UT.top - mT,
                      right: UT.right - TT,
                      bottom: UT.bottom - mT
                    }, TT && Math.abs(TT - ZT) < 1 && (WT = "nearest"), mT && Math.abs(mT - cT) < 1 && (zT = "nearest")
                  } if (LT) break;
                (UT.top < TT.top || UT.bottom > TT.bottom || UT.left < TT.left || UT.right > TT.right) && (UT = {
                  left: Math.max(UT.left, TT.left),
                  right: Math.min(UT.right, TT.right),
                  top: Math.max(UT.top, TT.top),
                  bottom: Math.min(UT.bottom, TT.bottom)
                }), jT = jT.assignedSlot || jT.parentNode
              } else {
                if (11 != jT.nodeType) break;
                jT = jT.host
              }
          }(this.view.scrollDOM, gT, WT.head < WT.anchor ? -1 : 1, TT.x, TT.y, Math.max(Math.min(TT.xMargin, nT), -nT), Math.max(Math.min(TT.yMargin, HT), -HT), this.view.textDirection == kU.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (zT.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || zT.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let TT = this.view.docView.lineAt(WT.head, 1);
          TT && TT.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(TT) {
        let UT = TT => TT.isWidget() || TT.children.some(UT);
        return UT(this.tile.resolveBlock(TT, 1).tile)
      }
      destroy() {
        Pm(this.tile)
      }
    }

    function Pm(TT, UT) {
      let mT = null === UT || void 0 === UT ? void 0 : UT.get(TT);
      if (1 != mT) {
        null == mT && TT.destroy();
        for (let mT of TT.children) Pm(mT, UT)
      }
    }

    function Vm(TT, UT) {
      let mT = TT.observer.selectionRange;
      if (!mT.focusNode) return null;
      let WT = gU(mT.focusNode, mT.focusOffset),
        zT = nU(mT.focusNode, mT.focusOffset),
        MT = WT || zT;
      if (zT && WT && zT.node != WT.node) {
        let UT = Lm.get(zT.node);
        if (!UT || UT.isText() && UT.text != zT.node.nodeValue) MT = zT;
        else if (TT.docView.lastCompositionAfterCursor) {
          let TT = Lm.get(WT.node);
          !TT || TT.isText() && TT.text != WT.node.nodeValue || (MT = zT)
        }
      }
      if (TT.docView.lastCompositionAfterCursor = MT != WT, !MT) return null;
      let gT = UT - MT.offset;
      return {
        from: gT,
        to: gT + MT.node.nodeValue.length,
        node: MT.node
      }
    }
    let um = class {
      constructor() {
        this.changes = []
      }
      compareRange(TT, UT) {
        FT(TT, UT, this.changes)
      }
      comparePoint(TT, UT) {
        FT(TT, UT, this.changes)
      }
      boundChange(TT) {
        FT(TT, TT, this.changes)
      }
    };
    class Cm {
      constructor() {
        this.changes = []
      }
      compareRange(TT, UT) {
        FT(TT, UT, this.changes)
      }
      comparePoint() {}
      boundChange(TT) {
        FT(TT, TT, this.changes)
      }
    }
    class rm extends tT {
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

    function Km(TT, UT, mT) {
      let WT = TT.lineBlockAt(UT);
      if (Array.isArray(WT.type)) {
        let TT;
        for (let zT of WT.type) {
          if (zT.from > UT) break;
          if (!(zT.to < UT)) {
            if (zT.from < UT && zT.to > UT) return zT;
            TT && (zT.type != aT.Text || TT.type == zT.type && !(mT < 0 ? zT.from < UT : zT.to > UT)) || (TT = zT)
          }
        }
        return TT || WT
      }
      return WT
    }

    function Sm(TT, UT, mT, WT) {
      let zT = TT.state.doc.lineAt(UT.head),
        MT = TT.bidiSpans(zT),
        gT = TT.textDirectionAt(zT.from);
      for (let nT = UT, HT = null;;) {
        let UT = dU(zT, MT, gT, nT, mT),
          kT = xU;
        if (!UT) {
          if (zT.number == (mT ? TT.state.doc.lines : 1)) return nT;
          kT = "\n", zT = TT.state.doc.line(zT.number + (mT ? 1 : -1)), MT = TT.bidiSpans(zT), UT = TT.visualLineSide(zT, !mT)
        }
        if (HT) {
          if (!HT(kT)) return nT
        } else {
          if (!WT) return UT;
          HT = WT(kT)
        }
        nT = UT
      }
    }

    function Gm(TT, UT, mT) {
      for (;;) {
        let WT = 0;
        for (let zT of TT) zT.between(UT - 1, UT + 1, ((TT, zT, MT) => {
          if (UT > TT && UT < zT) {
            let MT = WT || mT || (UT - TT < zT - UT ? -1 : 1);
            UT = MT < 0 ? TT : zT, WT = MT
          }
        }));
        if (!WT) return UT
      }
    }

    function Nm(TT, UT) {
      let mT = null;
      for (let zT = 0; zT < UT.hZ.length; zT++) {
        let MT = UT.hZ[zT],
          gT = null;
        if (MT.empty) {
          let UT = Gm(TT, MT.from, 0);
          UT != MT.from && (gT = WT.l.cursor(UT, -1))
        } else {
          let UT = Gm(TT, MT.from, -1),
            mT = Gm(TT, MT.to, 1);
          UT == MT.from && mT == MT.to || (gT = WT.l.range(MT.from == MT.anchor ? UT : mT, MT.from == MT.head ? UT : mT))
        }
        gT && (mT || (mT = UT.hZ.slice()), mT[zT] = gT)
      }
      return mT ? WT.l.create(mT, UT.mainIndex) : UT
    }

    function Em(TT, UT, mT) {
      let zT = Gm(TT.state.facet(Wm).map((UT => UT(TT))), mT.from, UT.head > mT.from ? -1 : 1);
      return zT == mT.from ? mT : WT.l.cursor(zT, zT < mT.from ? 1 : -1)
    }
    class hm {
      constructor(TT, UT) {
        this.pos = TT, this.assoc = UT
      }
    }

    function Dm(TT, UT, mT, zT) {
      let MT, gT = TT.contentDOM.getBoundingClientRect(),
        nT = gT.top + TT.viewState.paddingTop,
        {
          x: HT,
          y: kT
        } = UT,
        jT = kT - nT;
      for (;;) {
        if (jT < 0) return new hm(0, 1);
        if (jT > TT.viewState.docHeight) return new hm(TT.state.doc.length, -1);
        if (MT = TT.elementAtHeight(jT), null == zT) break;
        if (MT.type == aT.Text) {
          if (zT < 0 ? MT.to < TT.viewport.from : MT.from > TT.viewport.to) break;
          let UT = TT.docView.coordsAt(zT < 0 ? MT.from : MT.to, zT > 0 ? -1 : 1);
          if (UT && (zT < 0 ? UT.top <= jT + nT : UT.bottom >= jT + nT)) break
        }
        let UT = TT.viewState.heightOracle.textHeight / 2;
        jT = zT > 0 ? MT.bottom + UT : MT.top - UT
      }
      if (TT.viewport.from >= MT.to || TT.viewport.to <= MT.from) {
        if (mT) return null;
        if (MT.type == aT.Text) {
          let UT = function(TT, UT, mT, zT, MT) {
            let gT = Math.round((zT - UT.left) * TT.defaultCharacterWidth);
            if (TT.lineWrapping && mT.height > 1.5 * TT.defaultLineHeight) {
              let UT = TT.viewState.heightOracle.textHeight;
              gT += Math.floor((MT - mT.top - .5 * (TT.defaultLineHeight - UT)) / UT) * TT.viewState.heightOracle.lineLength
            }
            let nT = TT.state.sliceDoc(mT.from, mT.to);
            return mT.from + (0, WT.Y)(nT, gT, TT.state.tabSize)
          }(TT, gT, MT, HT, kT);
          return new hm(UT, UT == MT.from ? 1 : -1)
        }
      }
      if (MT.type != aT.Text) return jT < (MT.top + MT.bottom) / 2 ? new hm(MT.from, 1) : new hm(MT.to, -1);
      let lT = TT.docView.lineAt(MT.from, 2);
      return lT && lT.length == MT.length || (lT = TT.docView.lineAt(MT.from, -2)), new om(TT, HT, kT, TT.textDirectionAt(MT.from)).scanTile(lT, MT.from)
    }
    class om {
      constructor(TT, UT, mT, WT) {
        this.view = TT, this.x = UT, this.y = mT, this.baseDir = WT, this.line = null, this.spans = null
      }
      bidiSpansAt(TT) {
        return (!this.line || this.line.from > TT || this.line.to < TT) && (this.line = this.view.state.doc.lineAt(TT), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(TT, UT) {
        let {
          line: mT,
          spans: WT
        } = this.bidiSpansAt(TT);
        return WT[qU.find(WT, TT - mT.from, -1, UT)].level == this.baseDir
      }
      dirAt(TT, UT) {
        let {
          line: mT,
          spans: WT
        } = this.bidiSpansAt(TT);
        return WT[qU.find(WT, TT - mT.from, -1, UT)].dir
      }
      bidiIn(TT, UT) {
        let {
          spans: mT,
          line: WT
        } = this.bidiSpansAt(TT);
        return mT.length > 1 || mT.length && (mT[0].level != this.baseDir || mT[0].to + WT.from < UT)
      }
      scan(TT, UT) {
        let mT, WT, zT, MT = 0,
          gT = TT.length - 1,
          nT = new Set,
          HT = this.bidiIn(TT[0], TT[gT]),
          kT = -1,
          jT = 1e9;
        TT: for (; MT < gT;) {
          let lT = gT - MT,
            LT = MT + gT >> 1;
          UT: if (nT.has(LT)) {
            let TT = MT + Math.floor(Math.random() * lT);
            for (let UT = 0; UT < lT; UT++) {
              if (!nT.has(TT)) {
                LT = TT;
                break UT
              }
              TT++, TT == gT && (TT = MT)
            }
            break TT
          } nT.add(LT);
          let pT = UT(LT);
          if (pT)
            for (let UT = 0; UT < pT.length; UT++) {
              let nT = pT[UT],
                lT = 0;
              if (!(0 == nT.width && pT.length > 1)) {
                if (nT.bottom < this.y)(!mT || mT.bottom < nT.bottom) && (mT = nT), lT = 1;
                else if (nT.top > this.y)(!WT || WT.top > nT.top) && (WT = nT), lT = -1;
                else {
                  let TT = nT.left > this.x ? this.x - nT.left : nT.right < this.x ? this.x - nT.right : 0,
                    UT = Math.abs(TT);
                  UT < jT && (kT = LT, jT = UT, zT = nT), TT && (lT = TT < 0 == (this.baseDir == kU.LTR) ? -1 : 1)
                } - 1 != lT || HT && !this.baseDirAt(TT[LT], 1) ? 1 != lT || HT && !this.baseDirAt(TT[LT + 1], -1) || (MT = LT + 1) : gT = LT
              }
            }
        }
        if (!zT) {
          let zT = mT && (!WT || this.y - mT.bottom < WT.top - this.y) ? mT : WT;
          return this.y = (zT.top + zT.bottom) / 2, this.scan(TT, UT)
        }
        if (jT) {
          if (mT && mT.bottom > zT.top) return this.y = mT.bottom - 1, this.scan(TT, UT);
          if (WT && WT.top < zT.bottom) return this.y = WT.top + 1, this.scan(TT, UT)
        }
        let lT = (HT ? this.dirAt(TT[kT], 1) : this.baseDir) == kU.LTR;
        return {
          i: kT,
          after: this.x > (zT.left + zT.right) / 2 == lT
        }
      }
      scanText(TT, UT) {
        let mT = [];
        for (let MT = 0; MT < TT.length; MT = (0, WT.U)(TT.text, MT)) mT.push(UT + MT);
        mT.push(UT + TT.length);
        let zT = this.scan(mT, (WT => {
          let zT = mT[WT] - UT,
            MT = mT[WT + 1] - UT;
          return WU(TT.dom, zT, MT).getClientRects()
        }));
        return zT.after ? new hm(mT[zT.i + 1], -1) : new hm(mT[zT.i], 1)
      }
      scanTile(TT, UT) {
        if (!TT.length) return new hm(UT, 1);
        if (1 == TT.children.length) {
          let mT = TT.children[0];
          if (mT.isText()) return this.scanText(mT, UT);
          if (mT.isComposite()) return this.scanTile(mT, UT)
        }
        let mT = [UT];
        for (let gT = 0, nT = UT; gT < TT.children.length; gT++) mT.push(nT += TT.children[gT].length);
        let WT = this.scan(mT, (UT => {
            let mT = TT.children[UT];
            return 48 & mT.flags ? null : (1 == mT.dom.nodeType ? mT.dom : WU(mT.dom, 0, mT.length)).getClientRects()
          })),
          zT = TT.children[WT.i],
          MT = mT[WT.i];
        return zT.isText() ? this.scanText(zT, MT) : zT.isComposite() ? this.scanTile(zT, MT) : WT.after ? new hm(mT[WT.i + 1], -1) : new hm(MT, 1)
      }
    }
    const Am = "\uffff";
    class Rm {
      constructor(TT, UT) {
        this.points = TT, this.view = UT, this.text = "", this.lineSeparator = UT.state.facet(WT.m.lineSeparator)
      }
      append(TT) {
        this.text += TT
      }
      lineBreak() {
        this.text += Am
      }
      readRange(TT, UT) {
        if (!TT) return this;
        let mT = TT.parentNode;
        for (let WT = TT;;) {
          this.findPointBefore(mT, WT);
          let TT = this.text.length;
          this.readNode(WT);
          let zT = Lm.get(WT),
            MT = WT.nextSibling;
          if (MT == UT) {
            (null === zT || void 0 === zT ? void 0 : zT.breakAfter) && !MT && mT != this.view.contentDOM && this.lineBreak();
            break
          }
          let gT = Lm.get(MT);
          (zT && gT ? zT.breakAfter : (zT ? zT.breakAfter : GT(WT)) || GT(MT) && ("BR" != WT.nodeName || (null === zT || void 0 === zT ? void 0 : zT.isWidget())) && this.text.length > TT) && !UW(MT, UT) && this.lineBreak(), WT = MT
        }
        return this.findPointBefore(mT, UT), this
      }
      readTextNode(TT) {
        let UT = TT.nodeValue;
        for (let mT of this.points) mT.node == TT && (mT.pos = this.text.length + Math.min(mT.offset, UT.length));
        for (let mT = 0, WT = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let zT, MT = -1,
            gT = 1;
          if (this.lineSeparator ? (MT = UT.indexOf(this.lineSeparator, mT), gT = this.lineSeparator.length) : (zT = WT.exec(UT)) && (MT = zT.index, gT = zT[0].length), this.append(UT.slice(mT, MT < 0 ? UT.length : MT)), MT < 0) break;
          if (this.lineBreak(), gT > 1)
            for (let UT of this.points) UT.node == TT && UT.pos > this.text.length && (UT.pos -= gT - 1);
          mT = MT + gT
        }
      }
      readNode(TT) {
        let UT = Lm.get(TT),
          mT = UT && UT.overrideDOMText;
        if (null != mT) {
          this.findPointInside(TT, mT.length);
          for (let TT = mT.iter(); !TT.next().done;) TT.lineBreak ? this.lineBreak() : this.append(TT.value)
        } else 3 == TT.nodeType ? this.readTextNode(TT) : "BR" == TT.nodeName ? TT.nextSibling && this.lineBreak() : 1 == TT.nodeType && this.readRange(TT.firstChild, null)
      }
      findPointBefore(TT, UT) {
        for (let mT of this.points) mT.node == TT && TT.childNodes[mT.offset] == UT && (mT.pos = this.text.length)
      }
      findPointInside(TT, UT) {
        for (let mT of this.points)(3 == TT.nodeType ? mT.node == TT : TT.contains(mT.node)) && (mT.pos = this.text.length + (TW(TT, mT.node, mT.offset) ? UT : 0))
      }
    }

    function TW(TT, UT, mT) {
      for (;;) {
        if (!UT || mT < ET(UT)) return !1;
        if (UT == TT) return !0;
        mT = ST(UT) + 1, UT = UT.parentNode
      }
    }

    function UW(TT, UT) {
      let mT;
      for (; TT != UT && TT; TT = TT.nextSibling) {
        let UT = Lm.get(TT);
        if (!(null === UT || void 0 === UT ? void 0 : UT.isWidget())) return !1;
        UT && (mT || (mT = [])).push(UT)
      }
      if (mT)
        for (let WT of mT) {
          let TT = WT.overrideDOMText;
          if (null === TT || void 0 === TT ? void 0 : TT.length) return !1
        }
      return !0
    }
    class mW {
      constructor(TT, UT) {
        this.node = TT, this.offset = UT, this.pos = -1
      }
    }
    class WW {
      constructor(TT, UT, mT, zT) {
        this.typeOver = zT, this.bounds = null, this.text = "", this.domChanged = UT > -1;
        let {
          impreciseHead: MT,
          impreciseAnchor: gT
        } = TT.docView, nT = TT.state.selection;
        if (TT.state.readOnly && UT > -1) this.newSel = null;
        else if (UT > -1 && (this.bounds = zW(TT.docView.tile, UT, mT, 0))) {
          let UT = MT || gT ? [] : function(TT) {
              let UT = [];
              if (TT.root.activeElement != TT.contentDOM) return UT;
              let {
                anchorNode: mT,
                anchorOffset: WT,
                focusNode: zT,
                focusOffset: MT
              } = TT.observer.selectionRange;
              mT && (UT.push(new mW(mT, WT)), zT == mT && MT == WT || UT.push(new mW(zT, MT)));
              return UT
            }(TT),
            mT = new Rm(UT, TT);
          mT.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = mT.text, this.newSel = function(TT, UT) {
            if (0 == TT.length) return null;
            let mT = TT[0].pos,
              zT = 2 == TT.length ? TT[1].pos : mT;
            return mT > -1 && zT > -1 ? WT.l.single(mT + UT, zT + UT) : null
          }(UT, this.bounds.from)
        } else {
          let UT = TT.observer.selectionRange,
            mT = MT && MT.node == UT.focusNode && MT.offset == UT.focusOffset || !uT(TT.contentDOM, UT.focusNode) ? nT.main.head : TT.docView.posFromDOM(UT.focusNode, UT.focusOffset),
            zT = gT && gT.node == UT.anchorNode && gT.offset == UT.anchorOffset || !uT(TT.contentDOM, UT.anchorNode) ? nT.main.anchor : TT.docView.posFromDOM(UT.anchorNode, UT.anchorOffset),
            HT = TT.viewport;
          if ((eT.ios || eT.chrome) && nT.main.empty && mT != zT && (HT.from > 0 || HT.to < TT.state.doc.length)) {
            let UT = Math.min(mT, zT),
              WT = Math.max(mT, zT),
              MT = HT.from - UT,
              gT = HT.to - WT;
            0 != MT && 1 != MT && 0 != UT || 0 != gT && -1 != gT && WT != TT.state.doc.length || (mT = 0, zT = TT.state.doc.length)
          }
          if (TT.inputState.composing > -1 && nT.hZ.length > 1) this.newSel = nT.replaceRange(WT.l.range(zT, mT));
          else if (TT.lineWrapping && zT == mT && (!nT.main.empty || nT.main.head != mT) && TT.inputState.lastTouchTime > Date.now() - 100) {
            let UT = TT.coordsAtPos(mT, -1),
              zT = 0;
            UT && (zT = TT.inputState.lastTouchY <= UT.bottom ? -1 : 1), this.newSel = WT.l.create([WT.l.cursor(mT, zT)])
          } else this.newSel = WT.l.single(zT, mT)
        }
      }
    }

    function zW(TT, UT, mT, WT) {
      if (TT.isComposite()) {
        let zT = -1,
          MT = -1,
          gT = -1,
          nT = -1;
        for (let HT = 0, kT = WT, jT = WT; HT < TT.children.length; HT++) {
          let WT = TT.children[HT],
            lT = kT + WT.length;
          if (kT < UT && lT > mT) return zW(WT, UT, mT, kT);
          if (lT >= UT && -1 == zT && (zT = HT, MT = kT), kT > mT && WT.dom.parentNode == TT.dom) {
            gT = HT, nT = jT;
            break
          }
          jT = lT, kT = lT + WT.breakAfter
        }
        return {
          from: MT,
          to: nT < 0 ? WT + TT.length : nT,
          startDOM: (zT ? TT.children[zT - 1].dom.nextSibling : null) || TT.dom.firstChild,
          endDOM: gT < TT.children.length && gT >= 0 ? TT.children[gT].dom : null
        }
      }
      return TT.isText() ? {
        from: WT,
        to: WT + TT.length,
        startDOM: TT.dom,
        endDOM: TT.dom.nextSibling
      } : null
    }

    function MW(TT, UT) {
      let mT, {
          newSel: zT
        } = UT,
        {
          state: MT
        } = TT,
        gT = MT.selection.main,
        nT = TT.inputState.lastKeyTime > Date.now() - 100 ? TT.inputState.lastKeyCode : -1;
      if (UT.bounds) {
        let {
          from: TT,
          to: zT
        } = UT.bounds, HT = gT.from, kT = null;
        (8 === nT || eT.android && UT.text.length < zT - TT) && (HT = gT.to, kT = "end");
        let jT, lT, LT = MT.doc.sliceString(TT, zT, Am);
        !gT.empty && gT.from >= TT && gT.to <= zT && (UT.typeOver || LT != UT.text) && LT.slice(0, gT.from - TT) == UT.text.slice(0, gT.from - TT) && LT.slice(gT.to - TT) == UT.text.slice(jT = UT.text.length - (LT.length - (gT.to - TT))) ? mT = {
          from: gT.from,
          to: gT.to,
          insert: WT.I.of(UT.text.slice(gT.from - TT, jT).split(Am))
        } : (lT = nW(LT, UT.text, HT - TT, kT)) && (eT.chrome && 13 == nT && lT.toB == lT.from + 2 && UT.text.slice(lT.from, lT.toB) == Am + Am && lT.toB--, mT = {
          from: TT + lT.from,
          to: TT + lT.toA,
          insert: WT.I.of(UT.text.slice(lT.from, lT.toB).split(Am))
        })
      } else zT && (!TT.hasFocus && MT.facet(NU) || HW(zT, gT)) && (zT = null);
      if (!mT && !zT) return !1;
      if ((eT.mac || eT.android) && mT && mT.from == mT.to && mT.from == gT.head - 1 && /^\. ?$/.test(mT.insert.toString()) && "off" == TT.contentDOM.getAttribute("autocorrect") ? (zT && 2 == mT.insert.length && (zT = WT.l.single(zT.main.anchor - 1, zT.main.head - 1)), mT = {
          from: mT.from,
          to: mT.to,
          insert: WT.I.of([mT.insert.toString().replace(".", " ")])
        }) : MT.doc.lineAt(gT.from).to < gT.to && TT.docView.lineHasWidget(gT.to) && TT.inputState.insertingTextAt > Date.now() - 50 ? mT = {
          from: gT.from,
          to: gT.to,
          insert: MT.toText(TT.inputState.insertingText)
        } : eT.chrome && mT && mT.from == mT.to && mT.from == gT.head && "\n " == mT.insert.toString() && TT.lineWrapping && (zT && (zT = WT.l.single(zT.main.anchor - 1, zT.main.head - 1)), mT = {
          from: gT.from,
          to: gT.to,
          insert: WT.I.of([" "])
        }), mT) return gW(TT, mT, zT, nT);
      if (zT && !HW(zT, gT)) {
        let UT = !1,
          mT = "select";
        return TT.inputState.lastSelectionTime > Date.now() - 50 && ("select" == TT.inputState.lastSelectionOrigin && (UT = !0), mT = TT.inputState.lastSelectionOrigin, "select.pointer" == mT && (zT = Nm(MT.facet(Wm).map((UT => UT(TT))), zT))), TT.dispatch({
          selection: zT,
          scrollIntoView: UT,
          userEvent: mT
        }), !0
      }
      return !1
    }

    function gW(TT, UT, mT) {
      let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (eT.ios && TT.inputState.flushIOSKey(UT)) return !0;
      let MT = TT.state.selection.main;
      if (eT.android && (UT.to == MT.to && (UT.from == MT.from || UT.from == MT.from - 1 && " " == TT.state.sliceDoc(UT.from, MT.from)) && 1 == UT.insert.length && 2 == UT.insert.lines && zU(TT.contentDOM, "Enter", 13) || (UT.from == MT.from - 1 && UT.to == MT.to && 0 == UT.insert.length || 8 == zT && UT.insert.length < UT.to - UT.from && UT.to > MT.head) && zU(TT.contentDOM, "Backspace", 8) || UT.from == MT.from && UT.to == MT.to + 1 && 0 == UT.insert.length && zU(TT.contentDOM, "Delete", 46))) return !0;
      let gT, nT = UT.insert.toString();
      TT.inputState.composing >= 0 && TT.inputState.composing++;
      let HT = () => gT || (gT = function(TT, UT, mT) {
        let zT, MT = TT.state,
          gT = MT.selection.main,
          nT = -1;
        if (UT.from == UT.to && UT.from < gT.from || UT.from > gT.to) {
          let mT = UT.from < gT.from ? -1 : 1,
            WT = mT < 0 ? gT.from : gT.to,
            zT = Gm(MT.facet(Wm).map((UT => UT(TT))), WT, mT);
          UT.from == zT && (nT = zT)
        }
        if (nT > -1) zT = {
          changes: UT,
          selection: WT.l.cursor(UT.from + UT.insert.length, -1)
        };
        else if (UT.from >= gT.from && UT.to <= gT.to && UT.to - UT.from >= (gT.to - gT.from) / 3 && (!mT || mT.main.empty && mT.main.from == UT.from + UT.insert.length) && TT.inputState.composing < 0) {
          let mT = gT.from < UT.from ? MT.sliceDoc(gT.from, UT.from) : "",
            WT = gT.to > UT.to ? MT.sliceDoc(UT.to, gT.to) : "";
          zT = MT.replaceSelection(TT.state.toText(mT + UT.insert.sliceString(0, void 0, TT.state.lineBreak) + WT))
        } else {
          let nT = MT.changes(UT),
            HT = mT && mT.main.to <= nT.newLength ? mT.main : void 0;
          if (MT.selection.hZ.length > 1 && (TT.inputState.composing >= 0 || TT.inputState.compositionPendingChange) && UT.to <= gT.to + 10 && UT.to >= gT.to - 10) {
            let kT, jT = TT.state.sliceDoc(UT.from, UT.to),
              lT = mT && Vm(TT, mT.main.head);
            if (lT) {
              let TT = UT.insert.length - (UT.to - UT.from);
              kT = {
                from: lT.from,
                to: lT.to - TT
              }
            } else kT = TT.state.doc.lineAt(gT.head);
            let LT = gT.to - UT.to;
            zT = MT.changeByRange((mT => {
              if (mT.from == gT.from && mT.to == gT.to) return {
                changes: nT,
                range: HT || mT.map(nT)
              };
              let zT = mT.to - LT,
                lT = zT - jT.length;
              if (TT.state.sliceDoc(lT, zT) != jT || zT >= kT.from && lT <= kT.to) return {
                range: mT
              };
              let pT = MT.changes({
                  from: lT,
                  to: zT,
                  insert: UT.insert
                }),
                BT = mT.to - gT.to;
              return {
                changes: pT,
                range: HT ? WT.l.range(Math.max(0, HT.anchor + BT), Math.max(0, HT.head + BT)) : mT.map(pT)
              }
            }))
          } else zT = {
            changes: nT,
            selection: HT && MT.selection.replaceRange(HT)
          }
        }
        let HT = "input.type";
        (TT.composing || TT.inputState.compositionPendingChange && TT.inputState.compositionEndedAt > Date.now() - 50) && (TT.inputState.compositionPendingChange = !1, HT += ".compose", TT.inputState.compositionFirstChange && (HT += ".start", TT.inputState.compositionFirstChange = !1));
        return MT.update(zT, {
          userEvent: HT,
          scrollIntoView: !0
        })
      }(TT, UT, mT));
      return TT.state.facet(QU).some((mT => mT(TT, UT.from, UT.to, nT, HT))) || TT.dispatch(HT()), !0
    }

    function nW(TT, UT, mT, WT) {
      let zT = Math.min(TT.length, UT.length),
        MT = 0;
      for (; MT < zT && TT.charCodeAt(MT) == UT.charCodeAt(MT);) MT++;
      if (MT == zT && TT.length == UT.length) return null;
      let gT = TT.length,
        nT = UT.length;
      for (; gT > 0 && nT > 0 && TT.charCodeAt(gT - 1) == UT.charCodeAt(nT - 1);) gT--, nT--;
      if ("end" == WT) {
        mT -= gT + Math.max(0, MT - Math.min(gT, nT)) - MT
      }
      if (gT < MT && TT.length < UT.length) {
        MT -= mT <= MT && mT >= gT ? MT - mT : 0, nT = MT + (nT - gT), gT = MT
      } else if (nT < MT) {
        MT -= mT <= MT && mT >= nT ? MT - mT : 0, gT = MT + (gT - nT), nT = MT
      }
      return {
        from: MT,
        toA: gT,
        toB: nT
      }
    }

    function HW(TT, UT) {
      return UT.head == TT.main.head && UT.anchor == TT.main.anchor
    }
    class kW {
      setSelectionOrigin(TT) {
        this.lastSelectionOrigin = TT, this.lastSelectionTime = Date.now()
      }
      constructor(TT) {
        this.view = TT, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = TT.hasFocus, eT.safari && TT.contentDOM.addEventListener("input", (() => null)), eT.gecko && function(TT) {
          IW.has(TT) || (IW.add(TT), TT.addEventListener("copy", (() => {})), TT.addEventListener("cut", (() => {})))
        }(TT.contentDOM.ownerDocument)
      }
      handleEvent(TT) {
        (function(TT, UT) {
          if (!UT.bubbles) return !0;
          if (UT.defaultPrevented) return !1;
          for (let mT, WT = UT.target; WT != TT.contentDOM; WT = WT.parentNode)
            if (!WT || 11 == WT.nodeType || (mT = Lm.get(WT)) && mT.isWidget() && !mT.isHidden && mT.widget.ignoreEvent(UT)) return !1;
          return !0
        })(this.view, TT) && !this.ignoreDuringComposition(TT) && ("keydown" == TT.type && this.keydown(TT) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(TT.type, TT))) : this.runHandlers(TT.type, TT)))
      }
      runHandlers(TT, UT) {
        let mT = this.handlers[TT];
        if (mT) {
          for (let TT of mT.observers) TT(this.view, UT);
          for (let TT of mT.handlers) {
            if (UT.defaultPrevented) break;
            if (TT(this.view, UT)) {
              UT.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(TT) {
        let UT = lW(TT),
          mT = this.handlers,
          WT = this.view.contentDOM;
        for (let zT in UT)
          if ("scroll" != zT) {
            let TT = !UT[zT].handlers.length,
              MT = mT[zT];
            MT && TT != !MT.handlers.length && (WT.removeEventListener(zT, this.handleEvent), MT = null), MT || WT.addEventListener(zT, this.handleEvent, {
              passive: TT
            })
          } for (let zT in mT) "scroll" == zT || UT[zT] || WT.removeEventListener(zT, this.handleEvent);
        this.handlers = UT
      }
      keydown(TT) {
        if (this.lastKeyCode = TT.keyCode, this.lastKeyTime = Date.now(), 9 == TT.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != TT.keyCode && BW.indexOf(TT.keyCode) < 0 && (this.tabFocusMode = -1), eT.android && eT.chrome && !TT.synthetic && (13 == TT.keyCode || 8 == TT.keyCode)) return this.view.observer.delayAndroidKey(TT.key, TT.keyCode), !0;
        let UT;
        return !eT.ios || TT.synthetic || TT.altKey || TT.metaKey || TT.shiftKey || !((UT = LW.find((UT => UT.keyCode == TT.keyCode))) && !TT.ctrlKey || pW.indexOf(TT.key) > -1 && TT.ctrlKey) ? (229 != TT.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = UT || TT, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(TT) {
        let UT = this.pendingIOSKey;
        return !!UT && (!("Enter" == UT.key && TT && TT.from < TT.to && /^\S+$/.test(TT.insert.toString())) && (this.pendingIOSKey = void 0, zU(this.view.contentDOM, UT.key, UT.keyCode, UT instanceof KeyboardEvent ? UT : void 0)))
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

    function jW(TT, UT) {
      return (mT, WT) => {
        try {
          return UT.call(TT, WT, mT)
        } catch (zT) {
          GU(mT.state, zT)
        }
      }
    }

    function lW(TT) {
      let UT = Object.create(null);

      function mT(TT) {
        return UT[TT] || (UT[TT] = {
          observers: [],
          handlers: []
        })
      }
      for (let WT of TT) {
        let TT = WT.spec,
          UT = TT && TT.plugin.domEventHandlers,
          zT = TT && TT.plugin.domEventObservers;
        if (UT)
          for (let MT in UT) {
            let TT = UT[MT];
            TT && mT(MT).handlers.push(jW(WT.value, TT))
          }
        if (zT)
          for (let MT in zT) {
            let TT = zT[MT];
            TT && mT(MT).observers.push(jW(WT.value, TT))
          }
      }
      for (let WT in vW) mT(WT).handlers.push(vW[WT]);
      for (let WT in fW) mT(WT).observers.push(fW[WT]);
      return UT
    }
    const LW = [{
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
      pW = "dthko",
      BW = [16, 17, 18, 20, 91, 92, 224, 225];

    function ZW(TT) {
      return .7 * Math.max(0, TT) + 8
    }
    class cW {
      constructor(TT, UT, mT, zT) {
        this.view = TT, this.startEvent = UT, this.style = mT, this.mustSelect = zT, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = UT, this.scrollParents = AT(TT.contentDOM), this.atoms = TT.state.facet(Wm).map((UT => UT(TT)));
        let MT = TT.contentDOM.ownerDocument;
        MT.addEventListener("mousemove", this.move = this.move.bind(this)), MT.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = UT.shiftKey, this.multiple = TT.state.facet(WT.m.allowMultipleSelections) && function(TT, UT) {
          let mT = TT.state.facet(tU);
          return mT.length ? mT[0](UT) : eT.mac ? UT.metaKey : UT.ctrlKey
        }(TT, UT), this.dragging = !(! function(TT, UT) {
          let {
            main: mT
          } = TT.state.selection;
          if (mT.empty) return !1;
          let WT = VT(TT.root);
          if (!WT || 0 == WT.rangeCount) return !0;
          let zT = WT.getRangeAt(0).getClientRects();
          for (let MT = 0; MT < zT.length; MT++) {
            let TT = zT[MT];
            if (TT.left <= UT.clientX && TT.right >= UT.clientX && TT.top <= UT.clientY && TT.bottom >= UT.clientY) return !0
          }
          return !1
        }(TT, UT) || 1 != dW(UT)) && null
      }
      start(TT) {
        !1 === this.dragging && this.select(TT)
      }
      move(TT) {
        if (0 == TT.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (UT = this.startEvent, mT = TT, Math.max(Math.abs(UT.clientX - mT.clientX), Math.abs(UT.clientY - mT.clientY)) < 10)) return;
        var UT, mT;
        this.select(this.lastEvent = TT);
        let WT = 0,
          zT = 0,
          MT = 0,
          gT = 0,
          nT = this.view.win.innerWidth,
          HT = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: MT,
          right: nT
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: gT,
          bottom: HT
        } = this.scrollParents.y.getBoundingClientRect());
        let kT = nm(this.view);
        TT.clientX - kT.left <= MT + 6 ? WT = -ZW(MT - TT.clientX) : TT.clientX + kT.right >= nT - 6 && (WT = ZW(TT.clientX - nT)), TT.clientY - kT.top <= gT + 6 ? zT = -ZW(gT - TT.clientY) : TT.clientY + kT.bottom >= HT - 6 && (zT = ZW(TT.clientY - HT)), this.setScrollSpeed(WT, zT)
      }
      up(TT) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || TT.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let TT = this.view.contentDOM.ownerDocument;
        TT.removeEventListener("mousemove", this.move), TT.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(TT, UT) {
        this.scrollSpeed = {
          x: TT,
          y: UT
        }, TT || UT ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: TT,
          y: UT
        } = this.scrollSpeed;
        TT && this.scrollParents.x && (this.scrollParents.x.scrollLeft += TT, TT = 0), UT && this.scrollParents.y && (this.scrollParents.y.scrollTop += UT, UT = 0), (TT || UT) && this.view.win.scrollBy(TT, UT), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(TT) {
        let {
          view: UT
        } = this, mT = Nm(this.atoms, this.style.get(TT, this.extend, this.multiple));
        !this.mustSelect && mT.eq(UT.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: mT,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(TT) {
        TT.transactions.some((TT => TT.isUserEvent("input.type"))) ? this.destroy() : this.style.update(TT) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const vW = Object.create(null),
      fW = Object.create(null),
      qW = eT.ie && eT.ie_version < 15 || eT.ios && eT.webkit_version < 604;

    function iW(TT, UT, mT) {
      for (let WT of TT.facet(UT)) mT = WT(mT, TT);
      return mT
    }

    function bW(TT, UT) {
      UT = iW(TT.state, FU, UT);
      let mT, {
          state: zT
        } = TT,
        MT = 1,
        gT = zT.toText(UT),
        nT = gT.lines == zT.selection.hZ.length;
      if (null != tW && zT.selection.hZ.every((TT => TT.empty)) && tW == gT.toString()) {
        let TT = -1;
        mT = zT.changeByRange((mT => {
          let HT = zT.doc.lineAt(mT.from);
          if (HT.from == TT) return {
            range: mT
          };
          TT = HT.from;
          let kT = zT.toText((nT ? gT.line(MT++).text : UT) + zT.lineBreak);
          return {
            changes: {
              from: HT.from,
              insert: kT
            },
            range: WT.l.cursor(mT.from + kT.length)
          }
        }))
      } else mT = nT ? zT.changeByRange((TT => {
        let UT = gT.line(MT++);
        return {
          changes: {
            from: TT.from,
            to: TT.to,
            insert: UT.text
          },
          range: WT.l.cursor(TT.from + UT.length)
        }
      })) : zT.replaceSelection(gT);
      TT.dispatch(mT, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function OW(TT, UT, mT, zT) {
      if (1 == zT) return WT.l.cursor(UT, mT);
      if (2 == zT) return function(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          zT = TT.charCategorizer(UT),
          MT = TT.doc.lineAt(UT),
          gT = UT - MT.from;
        if (0 == MT.length) return WT.l.cursor(UT);
        0 == gT ? mT = 1 : gT == MT.length && (mT = -1);
        let nT = gT,
          HT = gT;
        mT < 0 ? nT = (0, WT.U)(MT.text, gT, !1) : HT = (0, WT.U)(MT.text, gT);
        let kT = zT(MT.text.slice(nT, HT));
        for (; nT > 0;) {
          let TT = (0, WT.U)(MT.text, nT, !1);
          if (zT(MT.text.slice(TT, nT)) != kT) break;
          nT = TT
        }
        for (; HT < MT.length;) {
          let TT = (0, WT.U)(MT.text, HT);
          if (zT(MT.text.slice(HT, TT)) != kT) break;
          HT = TT
        }
        return WT.l.range(nT + MT.from, HT + MT.from)
      }(TT.state, UT, mT);
      {
        let zT = TT.docView.lineAt(UT, mT),
          MT = TT.state.doc.lineAt(zT ? zT.posAtEnd : UT),
          gT = zT ? zT.posAtStart : MT.from,
          nT = zT ? zT.posAtEnd : MT.to;
        return nT < TT.state.doc.length && nT == MT.to && nT++, WT.l.range(gT, nT)
      }
    }
    fW.scroll = TT => {
      TT.inputState.lastScrollTop = TT.scrollDOM.scrollTop, TT.inputState.lastScrollLeft = TT.scrollDOM.scrollLeft
    }, fW.wheel = fW.mousewheel = TT => {
      TT.inputState.lastWheelEvent = Date.now()
    }, vW.keydown = (TT, UT) => (TT.inputState.setSelectionOrigin("select"), 27 == UT.keyCode && 0 != TT.inputState.tabFocusMode && (TT.inputState.tabFocusMode = Date.now() + 2e3), !1), fW.touchstart = (TT, UT) => {
      let mT = TT.inputState,
        WT = UT.targetTouches[0];
      mT.lastTouchTime = Date.now(), WT && (mT.lastTouchX = WT.clientX, mT.lastTouchY = WT.clientY), mT.setSelectionOrigin("select.pointer")
    }, fW.touchmove = TT => {
      TT.inputState.setSelectionOrigin("select.pointer")
    }, vW.mousedown = (TT, UT) => {
      if (TT.observer.flush(), TT.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let mT = null;
      for (let WT of TT.state.facet(yU))
        if (mT = WT(TT, UT), mT) break;
      if (mT || 0 != UT.button || (mT = function(TT, UT) {
          let mT = TT.posAndSideAtCoords({
              x: UT.clientX,
              y: UT.clientY
            }, !1),
            zT = dW(UT),
            MT = TT.state.selection;
          return {
            update(TT) {
              TT.docChanged && (mT.pos = TT.changes.mapPos(mT.pos), MT = MT.map(TT.changes))
            },
            get(UT, gT, nT) {
              let HT, kT = TT.posAndSideAtCoords({
                  x: UT.clientX,
                  y: UT.clientY
                }, !1),
                jT = OW(TT, kT.pos, kT.assoc, zT);
              if (mT.pos != kT.pos && !gT) {
                let UT = OW(TT, mT.pos, mT.assoc, zT),
                  MT = Math.min(UT.from, jT.from),
                  gT = Math.max(UT.to, jT.to);
                jT = MT < jT.from ? WT.l.range(MT, gT, jT.assoc) : WT.l.range(gT, MT, jT.assoc)
              }
              return gT ? MT.replaceRange(MT.main.extend(jT.from, jT.to, jT.assoc)) : nT && 1 == zT && MT.hZ.length > 1 && (HT = function(TT, UT) {
                for (let mT = 0; mT < TT.hZ.length; mT++) {
                  let {
                    from: zT,
                    to: MT
                  } = TT.hZ[mT];
                  if (zT <= UT && MT >= UT) return WT.l.create(TT.hZ.slice(0, mT).concat(TT.hZ.slice(mT + 1)), TT.mainIndex == mT ? 0 : TT.mainIndex - (TT.mainIndex > mT ? 1 : 0))
                }
                return null
              }(MT, kT.pos)) ? HT : nT ? MT.addRange(jT) : WT.l.create([jT])
            }
          }
        }(TT, UT)), mT) {
        let WT = !TT.hasFocus;
        TT.inputState.startMouseSelection(new cW(TT, UT, mT, WT)), WT && TT.observer.ignore((() => {
          mU(TT.contentDOM);
          let UT = TT.root.activeElement;
          UT && !UT.contains(TT.contentDOM) && UT.blur()
        }));
        let zT = TT.inputState.mouseSelection;
        if (zT) return zT.start(UT), !1 === zT.dragging
      } else TT.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const eW = eT.ie && eT.ie_version <= 11;
    let YW = null,
      JW = 0,
      xW = 0;

    function dW(TT) {
      if (!eW) return TT.detail;
      let UT = YW,
        mT = xW;
      return YW = TT, xW = Date.now(), JW = !UT || mT > Date.now() - 400 && Math.abs(UT.clientX - TT.clientX) < 2 && Math.abs(UT.clientY - TT.clientY) < 2 ? (JW + 1) % 3 : 1
    }

    function wW(TT, UT, mT, WT) {
      if (!(mT = iW(TT.state, FU, mT))) return;
      let zT = TT.posAtCoords({
          x: UT.clientX,
          y: UT.clientY
        }, !1),
        {
          draggedContent: MT
        } = TT.inputState,
        gT = WT && MT && function(TT, UT) {
          let mT = TT.state.facet(aU);
          return mT.length ? mT[0](UT) : eT.mac ? !UT.altKey : !UT.ctrlKey
        }(TT, UT) ? {
          from: MT.from,
          to: MT.to
        } : null,
        nT = {
          from: zT,
          insert: mT
        },
        HT = TT.state.changes(gT ? [gT, nT] : nT);
      TT.focus(), TT.dispatch({
        changes: HT,
        selection: {
          anchor: HT.mapPos(zT, -1),
          head: HT.mapPos(zT, 1)
        },
        userEvent: gT ? "move.drop" : "input.drop"
      }), TT.inputState.draggedContent = null
    }
    vW.dragstart = (TT, UT) => {
      let {
        selection: {
          main: mT
        }
      } = TT.state;
      if (UT.target.draggable) {
        let zT = TT.docView.tile.nearest(UT.target);
        if (zT && zT.isWidget()) {
          let TT = zT.posAtStart,
            UT = TT + zT.length;
          (TT >= mT.to || UT <= mT.from) && (mT = WT.l.range(TT, UT))
        }
      }
      let {
        inputState: zT
      } = TT;
      return zT.mouseSelection && (zT.mouseSelection.dragging = !0), zT.draggedContent = mT, UT.dataTransfer && (UT.dataTransfer.setData("Text", iW(TT.state, PU, TT.state.sliceDoc(mT.from, mT.to))), UT.dataTransfer.effectAllowed = "copyMove"), !1
    }, vW.dragend = TT => (TT.inputState.draggedContent = null, !1), vW.drop = (TT, UT) => {
      if (!UT.dataTransfer) return !1;
      if (TT.state.readOnly) return !0;
      let mT = UT.dataTransfer.files;
      if (mT && mT.length) {
        let WT = Array(mT.length),
          zT = 0,
          MT = () => {
            ++zT == mT.length && wW(TT, UT, WT.filter((TT => null != TT)).join(TT.state.lineBreak), !1)
          };
        for (let TT = 0; TT < mT.length; TT++) {
          let UT = new FileReader;
          UT.onerror = MT, UT.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(UT.result) || (WT[TT] = UT.result), MT()
          }, UT.readAsText(mT[TT])
        }
        return !0
      } {
        let mT = UT.dataTransfer.getData("Text");
        if (mT) return wW(TT, UT, mT, !0), !0
      }
      return !1
    }, vW.paste = (TT, UT) => {
      if (TT.state.readOnly) return !0;
      TT.observer.flush();
      let mT = qW ? null : UT.clipboardData;
      return mT ? (bW(TT, mT.getData("text/plain") || mT.getData("text/uri-list")), !0) : (function(TT) {
        let UT = TT.dom.parentNode;
        if (!UT) return;
        let mT = UT.appendChild(document.createElement("textarea"));
        mT.style.cssText = "position: fixed; left: -10000px; top: 10px", mT.focus(), setTimeout((() => {
          TT.focus(), mT.remove(), bW(TT, mT.value)
        }), 50)
      }(TT), !1)
    };
    let tW = null;
    vW.copy = vW.cut = (TT, UT) => {
      if (!CT(TT.contentDOM, TT.observer.selectionRange)) return !1;
      let {
        text: mT,
        hZ: WT,
        linewise: zT
      } = function(TT) {
        let UT = [],
          mT = [],
          WT = !1;
        for (let zT of TT.selection.hZ) zT.empty || (UT.push(TT.sliceDoc(zT.from, zT.to)), mT.push(zT));
        if (!UT.length) {
          let zT = -1;
          for (let {
              from: WT
            }
            of TT.selection.hZ) {
            let MT = TT.doc.lineAt(WT);
            MT.number > zT && (UT.push(MT.text), mT.push({
              from: MT.from,
              to: Math.min(TT.doc.length, MT.to + 1)
            })), zT = MT.number
          }
          WT = !0
        }
        return {
          text: iW(TT, PU, UT.join(TT.lineBreak)),
          hZ: mT,
          linewise: WT
        }
      }(TT.state);
      if (!mT && !zT) return !1;
      tW = zT ? mT : null, "cut" != UT.type || TT.state.readOnly || TT.dispatch({
        changes: WT,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let MT = qW ? null : UT.clipboardData;
      return MT ? (MT.clearData(), MT.setData("text/plain", mT), !0) : (function(TT, UT) {
        let mT = TT.dom.parentNode;
        if (!mT) return;
        let WT = mT.appendChild(document.createElement("textarea"));
        WT.style.cssText = "position: fixed; left: -10000px; top: 10px", WT.value = UT, WT.focus(), WT.selectionEnd = UT.length, WT.selectionStart = 0, setTimeout((() => {
          WT.remove(), TT.focus()
        }), 50)
      }(TT, mT), !1)
    };
    const aW = WT.b.define();

    function yW(TT, UT) {
      let mT = [];
      for (let WT of TT.facet(sU)) {
        let zT = WT(TT, UT);
        zT && mT.push(zT)
      }
      return mT.length ? TT.update({
        effects: mT,
        annotations: aW.of(!0)
      }) : null
    }

    function XW(TT) {
      setTimeout((() => {
        let UT = TT.hasFocus;
        if (UT != TT.inputState.notifiedFocused) {
          let mT = yW(TT.state, UT);
          mT ? TT.dispatch(mT) : TT.update([])
        }
      }), 10)
    }
    fW.focus = TT => {
      TT.inputState.lastFocusTime = Date.now(), TT.scrollDOM.scrollTop || !TT.inputState.lastScrollTop && !TT.inputState.lastScrollLeft || (TT.scrollDOM.scrollTop = TT.inputState.lastScrollTop, TT.scrollDOM.scrollLeft = TT.inputState.lastScrollLeft), XW(TT)
    }, fW.blur = TT => {
      TT.observer.clearSelectionRange(), XW(TT)
    }, fW.compositionstart = fW.compositionupdate = TT => {
      TT.observer.editContext || (null == TT.inputState.compositionFirstChange && (TT.inputState.compositionFirstChange = !0), TT.inputState.composing < 0 && (TT.inputState.composing = 0))
    }, fW.compositionend = TT => {
      TT.observer.editContext || (TT.inputState.composing = -1, TT.inputState.compositionEndedAt = Date.now(), TT.inputState.compositionPendingKey = !0, TT.inputState.compositionPendingChange = TT.observer.pendingRecords().length > 0, TT.inputState.compositionFirstChange = null, eT.chrome && eT.android ? TT.observer.flushSoon() : TT.inputState.compositionPendingChange ? Promise.resolve().then((() => TT.observer.flush())) : setTimeout((() => {
        TT.inputState.composing < 0 && TT.docView.hasComposition && TT.update([])
      }), 50))
    }, fW.contextmenu = TT => {
      TT.inputState.lastContextMenu = Date.now()
    }, vW.beforeinput = (TT, UT) => {
      var mT, WT;
      if ("insertText" != UT.inputType && "insertCompositionText" != UT.inputType || (TT.inputState.insertingText = UT.data, TT.inputState.insertingTextAt = Date.now()), "insertReplacementText" == UT.inputType && TT.observer.editContext) {
        let WT = null === (mT = UT.dataTransfer) || void 0 === mT ? void 0 : mT.getData("text/plain"),
          zT = UT.getTargetRanges();
        if (WT && zT.length) {
          let UT = zT[0],
            mT = TT.posAtDOM(UT.startContainer, UT.startOffset),
            MT = TT.posAtDOM(UT.endContainer, UT.endOffset);
          return gW(TT, {
            from: mT,
            to: MT,
            insert: TT.state.toText(WT)
          }, null), !0
        }
      }
      let zT;
      if (eT.chrome && eT.android && (zT = LW.find((TT => TT.inputType == UT.inputType))) && (TT.observer.delayAndroidKey(zT.key, zT.keyCode), "Backspace" == zT.key || "Delete" == zT.key)) {
        let UT = (null === (WT = window.visualViewport) || void 0 === WT ? void 0 : WT.height) || 0;
        setTimeout((() => {
          var mT;
          ((null === (mT = window.visualViewport) || void 0 === mT ? void 0 : mT.height) || 0) > UT + 10 && TT.hasFocus && (TT.contentDOM.blur(), TT.focus())
        }), 100)
      }
      return eT.ios && "deleteContentForward" == UT.inputType && TT.observer.flushSoon(), eT.safari && "insertText" == UT.inputType && TT.inputState.composing >= 0 && setTimeout((() => fW.compositionend(TT, UT)), 20), !1
    };
    const IW = new Set;
    const QW = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let sW = !1;

    function FW() {
      sW = !1
    }
    class PW {
      constructor(TT) {
        this.lineWrapping = TT, this.doc = WT.I.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(TT, UT) {
        let mT = this.doc.lineAt(UT).number - this.doc.lineAt(TT).number + 1;
        return this.lineWrapping && (mT += Math.max(0, Math.ceil((UT - TT - mT * this.lineLength * .5) / this.lineLength))), this.lineHeight * mT
      }
      heightForLine(TT) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((TT - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(TT) {
        return this.doc = TT, this
      }
      mustRefreshForWrapping(TT) {
        return QW.indexOf(TT) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(TT) {
        let UT = !1;
        for (let mT = 0; mT < TT.length; mT++) {
          let WT = TT[mT];
          WT < 0 ? mT++ : this.heightSamples[Math.floor(10 * WT)] || (UT = !0, this.heightSamples[Math.floor(10 * WT)] = !0)
        }
        return UT
      }
      refresh(TT, UT, mT, WT, zT, MT) {
        let gT = QW.indexOf(TT) > -1,
          nT = Math.abs(UT - this.lineHeight) > .3 || this.lineWrapping != gT || Math.abs(mT - this.charWidth) > .1;
        if (this.lineWrapping = gT, this.lineHeight = UT, this.charWidth = mT, this.textHeight = WT, this.lineLength = zT, nT) {
          this.heightSamples = {};
          for (let TT = 0; TT < MT.length; TT++) {
            let UT = MT[TT];
            UT < 0 ? TT++ : this.heightSamples[Math.floor(10 * UT)] = !0
          }
        }
        return nT
      }
    }
    class VW {
      constructor(TT, UT) {
        this.from = TT, this.heights = UT, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class uW {
      constructor(TT, UT, mT, WT, zT) {
        this.from = TT, this.length = UT, this.top = mT, this.height = WT, this._content = zT
      }
      get type() {
        return "number" == typeof this._content ? aT.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof QT ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(TT) {
        let UT = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(TT._content) ? TT._content : [TT]);
        return new uW(this.from, this.length + TT.length, this.top, this.height + TT.height, UT)
      }
    }
    var CW = function(TT) {
      return TT[TT.ByPos = 0] = "ByPos", TT[TT.ByHeight = 1] = "ByHeight", TT[TT.ByPosNoHeight = 2] = "ByPosNoHeight", TT
    }(CW || (CW = {}));
    const rW = .001;
    class KW {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = TT, this.height = UT, this.flags = mT
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(TT) {
        this.flags = (TT ? 2 : 0) | -3 & this.flags
      }
      setHeight(TT) {
        this.height != TT && (Math.abs(this.height - TT) > rW && (sW = !0), this.height = TT)
      }
      replace(TT, UT, mT) {
        return KW.of(mT)
      }
      decomposeLeft(TT, UT) {
        UT.push(this)
      }
      decomposeRight(TT, UT) {
        UT.push(this)
      }
      applyChanges(TT, UT, mT, WT) {
        let zT = this,
          MT = mT.doc;
        for (let gT = WT.length - 1; gT >= 0; gT--) {
          let {
            fromA: nT,
            toA: HT,
            fromB: kT,
            toB: jT
          } = WT[gT], lT = zT.lineAt(nT, CW.ByPosNoHeight, mT.setDoc(UT), 0, 0), LT = lT.to >= HT ? lT : zT.lineAt(HT, CW.ByPosNoHeight, mT, 0, 0);
          for (jT += LT.to - HT, HT = LT.to; gT > 0 && lT.from <= WT[gT - 1].toA;) nT = WT[gT - 1].fromA, kT = WT[gT - 1].fromB, gT--, nT < lT.from && (lT = zT.lineAt(nT, CW.ByPosNoHeight, mT, 0, 0));
          kT += lT.from - nT, nT = lT.from;
          let pT = AW.build(mT.setDoc(MT), TT, kT, jT);
          zT = SW(zT, zT.replace(nT, HT, pT))
        }
        return zT.updateHeight(mT, 0)
      }
      static empty() {
        return new EW(0, 0, 0)
      }
      static of (TT) {
        if (1 == TT.length) return TT[0];
        let UT = 0,
          mT = TT.length,
          WT = 0,
          zT = 0;
        for (;;)
          if (UT == mT)
            if (WT > 2 * zT) {
              let zT = TT[UT - 1];
              zT.break ? TT.splice(--UT, 1, zT.left, null, zT.right) : TT.splice(--UT, 1, zT.left, zT.right), mT += 1 + zT.break, WT -= zT.size
            } else {
              if (!(zT > 2 * WT)) break;
              {
                let UT = TT[mT];
                UT.break ? TT.splice(mT, 1, UT.left, null, UT.right) : TT.splice(mT, 1, UT.left, UT.right), mT += 2 + UT.break, zT -= UT.size
              }
            }
        else if (WT < zT) {
          let mT = TT[UT++];
          mT && (WT += mT.size)
        } else {
          let UT = TT[--mT];
          UT && (zT += UT.size)
        }
        let MT = 0;
        return null == TT[UT - 1] ? (MT = 1, UT--) : null == TT[UT] && (MT = 1, mT++), new DW(KW.of(TT.slice(0, UT)), MT, KW.of(TT.slice(mT)))
      }
    }

    function SW(TT, UT) {
      return TT == UT ? TT : (TT.constructor != UT.constructor && (sW = !0), UT)
    }
    KW.prototype.size = 1;
    const GW = yT.replace({});
    class NW extends KW {
      constructor(TT, UT, mT) {
        super(TT, UT), this.deco = mT, this.spaceAbove = 0
      }
      mainBlock(TT, UT) {
        return new uW(UT, this.length, TT + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(TT, UT, mT, WT) {
        return this.spaceAbove && TT < mT + this.spaceAbove ? new uW(WT, 0, mT, this.spaceAbove, GW) : this.mainBlock(mT, WT)
      }
      lineAt(TT, UT, mT, WT, zT) {
        let MT = this.mainBlock(WT, zT);
        return this.spaceAbove ? this.blockAt(0, mT, WT, zT).join(MT) : MT
      }
      forEachLine(TT, UT, mT, WT, zT, MT) {
        TT <= zT + this.length && UT >= zT && MT(this.lineAt(0, CW.ByPos, mT, WT, zT))
      }
      setMeasuredHeight(TT) {
        let UT = TT.heights[TT.index++];
        UT < 0 ? (this.spaceAbove = -UT, UT = TT.heights[TT.index++]) : this.spaceAbove = 0, this.setHeight(UT)
      }
      updateHeight(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 3 ? arguments[3] : void 0;
        return mT && mT.from <= UT && mT.more && this.setMeasuredHeight(mT), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class EW extends NW {
      constructor(TT, UT, mT) {
        super(TT, UT, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = mT
      }
      mainBlock(TT, UT) {
        return new uW(UT, this.length, TT + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(TT, UT, mT) {
        let WT = mT[0];
        return 1 == mT.length && (WT instanceof EW || WT instanceof hW && 4 & WT.flags) && Math.abs(this.length - WT.length) < 10 ? (WT instanceof hW ? WT = new EW(WT.length, this.height, this.spaceAbove) : WT.height = this.height, this.outdated || (WT.outdated = !1), WT) : KW.of(mT)
      }
      updateHeight(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = arguments.length > 3 ? arguments[3] : void 0;
        return WT && WT.from <= UT && WT.more ? this.setMeasuredHeight(WT) : (mT || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, TT.heightForLine(this.length - this.collapsed)) + this.breaks * TT.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class hW extends KW {
      constructor(TT) {
        super(TT, 0)
      }
      heightMetrics(TT, UT) {
        let mT, WT = TT.doc.lineAt(UT).number,
          zT = TT.doc.lineAt(UT + this.length).number,
          MT = zT - WT + 1,
          gT = 0;
        if (TT.lineWrapping) {
          let UT = Math.min(this.height, TT.lineHeight * MT);
          mT = UT / MT, this.length > MT + 1 && (gT = (this.height - UT) / (this.length - MT - 1))
        } else mT = this.height / MT;
        return {
          firstLine: WT,
          lastLine: zT,
          perLine: mT,
          perChar: gT
        }
      }
      blockAt(TT, UT, mT, WT) {
        let {
          firstLine: zT,
          lastLine: MT,
          perLine: gT,
          perChar: nT
        } = this.heightMetrics(UT, WT);
        if (UT.lineWrapping) {
          let zT = WT + (TT < UT.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (TT - mT) / this.height)) * this.length)),
            MT = UT.doc.lineAt(zT),
            HT = gT + MT.length * nT,
            kT = Math.max(mT, TT - HT / 2);
          return new uW(MT.from, MT.length, kT, HT, 0)
        } {
          let WT = Math.max(0, Math.min(MT - zT, Math.floor((TT - mT) / gT))),
            {
              from: nT,
              length: HT
            } = UT.doc.line(zT + WT);
          return new uW(nT, HT, mT + gT * WT, gT, 0)
        }
      }
      lineAt(TT, UT, mT, WT, zT) {
        if (UT == CW.ByHeight) return this.blockAt(TT, mT, WT, zT);
        if (UT == CW.ByPosNoHeight) {
          let {
            from: UT,
            to: WT
          } = mT.doc.lineAt(TT);
          return new uW(UT, WT - UT, 0, 0, 0)
        }
        let {
          firstLine: MT,
          perLine: gT,
          perChar: nT
        } = this.heightMetrics(mT, zT), HT = mT.doc.lineAt(TT), kT = gT + HT.length * nT, jT = HT.number - MT, lT = WT + gT * jT + nT * (HT.from - zT - jT);
        return new uW(HT.from, HT.length, Math.max(WT, Math.min(lT, WT + this.height - kT)), kT, 0)
      }
      forEachLine(TT, UT, mT, WT, zT, MT) {
        TT = Math.max(TT, zT), UT = Math.min(UT, zT + this.length);
        let {
          firstLine: gT,
          perLine: nT,
          perChar: HT
        } = this.heightMetrics(mT, zT);
        for (let kT = TT, jT = WT; kT <= UT;) {
          let UT = mT.doc.lineAt(kT);
          if (kT == TT) {
            let mT = UT.number - gT;
            jT += nT * mT + HT * (TT - zT - mT)
          }
          let WT = nT + HT * UT.length;
          MT(new uW(UT.from, UT.length, jT, WT, 0)), jT += WT, kT = UT.to + 1
        }
      }
      replace(TT, UT, mT) {
        let WT = this.length - UT;
        if (WT > 0) {
          let TT = mT[mT.length - 1];
          TT instanceof hW ? mT[mT.length - 1] = new hW(TT.length + WT) : mT.push(null, new hW(WT - 1))
        }
        if (TT > 0) {
          let UT = mT[0];
          UT instanceof hW ? mT[0] = new hW(TT + UT.length) : mT.unshift(new hW(TT - 1), null)
        }
        return KW.of(mT)
      }
      decomposeLeft(TT, UT) {
        UT.push(new hW(TT - 1), null)
      }
      decomposeRight(TT, UT) {
        UT.push(null, new hW(this.length - TT - 1))
      }
      updateHeight(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = arguments.length > 3 ? arguments[3] : void 0,
          zT = UT + this.length;
        if (WT && WT.from <= UT + this.length && WT.more) {
          let mT = [],
            MT = Math.max(UT, WT.from),
            gT = -1;
          for (WT.from > UT && mT.push(new hW(WT.from - UT - 1).updateHeight(TT, UT)); MT <= zT && WT.more;) {
            let UT = TT.doc.lineAt(MT).length;
            mT.length && mT.push(null);
            let zT = WT.heights[WT.index++],
              nT = 0;
            zT < 0 && (nT = -zT, zT = WT.heights[WT.index++]), -1 == gT ? gT = zT : Math.abs(zT - gT) >= rW && (gT = -2);
            let HT = new EW(UT, zT, nT);
            HT.outdated = !1, mT.push(HT), MT += UT + 1
          }
          MT <= zT && mT.push(null, new hW(zT - MT).updateHeight(TT, MT));
          let nT = KW.of(mT);
          return (gT < 0 || Math.abs(nT.height - this.height) >= rW || Math.abs(gT - this.heightMetrics(TT, UT).perLine) >= rW) && (sW = !0), SW(this, nT)
        }
        return (mT || this.outdated) && (this.setHeight(TT.heightForGap(UT, UT + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class DW extends KW {
      constructor(TT, UT, mT) {
        super(TT.length + UT + mT.length, TT.height + mT.height, UT | (TT.outdated || mT.outdated ? 2 : 0)), this.left = TT, this.right = mT, this.size = TT.size + mT.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(TT, UT, mT, WT) {
        let zT = mT + this.left.height;
        return TT < zT ? this.left.blockAt(TT, UT, mT, WT) : this.right.blockAt(TT, UT, zT, WT + this.left.length + this.break)
      }
      lineAt(TT, UT, mT, WT, zT) {
        let MT = WT + this.left.height,
          gT = zT + this.left.length + this.break,
          nT = UT == CW.ByHeight ? TT < MT : TT < gT,
          HT = nT ? this.left.lineAt(TT, UT, mT, WT, zT) : this.right.lineAt(TT, UT, mT, MT, gT);
        if (this.break || (nT ? HT.to < gT : HT.from > gT)) return HT;
        let kT = UT == CW.ByPosNoHeight ? CW.ByPosNoHeight : CW.ByPos;
        return nT ? HT.join(this.right.lineAt(gT, kT, mT, MT, gT)) : this.left.lineAt(gT, kT, mT, WT, zT).join(HT)
      }
      forEachLine(TT, UT, mT, WT, zT, MT) {
        let gT = WT + this.left.height,
          nT = zT + this.left.length + this.break;
        if (this.break) TT < nT && this.left.forEachLine(TT, UT, mT, WT, zT, MT), UT >= nT && this.right.forEachLine(TT, UT, mT, gT, nT, MT);
        else {
          let HT = this.lineAt(nT, CW.ByPos, mT, WT, zT);
          TT < HT.from && this.left.forEachLine(TT, HT.from - 1, mT, WT, zT, MT), HT.to >= TT && HT.from <= UT && MT(HT), UT > HT.to && this.right.forEachLine(HT.to + 1, UT, mT, gT, nT, MT)
        }
      }
      replace(TT, UT, mT) {
        let WT = this.left.length + this.break;
        if (UT < WT) return this.balanced(this.left.replace(TT, UT, mT), this.right);
        if (TT > this.left.length) return this.balanced(this.left, this.right.replace(TT - WT, UT - WT, mT));
        let zT = [];
        TT > 0 && this.decomposeLeft(TT, zT);
        let MT = zT.length;
        for (let gT of mT) zT.push(gT);
        if (TT > 0 && oW(zT, MT - 1), UT < this.length) {
          let TT = zT.length;
          this.decomposeRight(UT, zT), oW(zT, TT)
        }
        return KW.of(zT)
      }
      decomposeLeft(TT, UT) {
        let mT = this.left.length;
        if (TT <= mT) return this.left.decomposeLeft(TT, UT);
        UT.push(this.left), this.break && (mT++, TT >= mT && UT.push(null)), TT > mT && this.right.decomposeLeft(TT - mT, UT)
      }
      decomposeRight(TT, UT) {
        let mT = this.left.length,
          WT = mT + this.break;
        if (TT >= WT) return this.right.decomposeRight(TT - WT, UT);
        TT < mT && this.left.decomposeRight(TT, UT), this.break && TT < WT && UT.push(null), UT.push(this.right)
      }
      balanced(TT, UT) {
        return TT.size > 2 * UT.size || UT.size > 2 * TT.size ? KW.of(this.break ? [TT, null, UT] : [TT, UT]) : (this.left = SW(this.left, TT), this.right = SW(this.right, UT), this.setHeight(TT.height + UT.height), this.outdated = TT.outdated || UT.outdated, this.size = TT.size + UT.size, this.length = TT.length + this.break+UT.length, this)
      }
      updateHeight(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: zT,
            right: MT
          } = this,
          gT = UT + zT.length + this.break,
          nT = null;
        return WT && WT.from <= UT + zT.length && WT.more ? nT = zT = zT.updateHeight(TT, UT, mT, WT) : zT.updateHeight(TT, UT, mT), WT && WT.from <= gT + MT.length && WT.more ? nT = MT = MT.updateHeight(TT, gT, mT, WT) : MT.updateHeight(TT, gT, mT), nT ? this.balanced(zT, MT) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function oW(TT, UT) {
      let mT, WT;
      null == TT[UT] && (mT = TT[UT - 1]) instanceof hW && (WT = TT[UT + 1]) instanceof hW && TT.splice(UT - 1, 3, new hW(mT.length + 1 + WT.length))
    }
    class AW {
      constructor(TT, UT) {
        this.pos = TT, this.oracle = UT, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = TT
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(TT, UT) {
        if (this.lineStart > -1) {
          let TT = Math.min(UT, this.lineEnd),
            mT = this.nodes[this.nodes.length - 1];
          mT instanceof EW ? mT.length += TT - this.pos : (TT > this.pos || !this.isCovered) && this.nodes.push(new EW(TT - this.pos, -1, 0)), this.writtenTo = TT, UT > TT && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = UT
      }
      point(TT, UT, mT) {
        if (TT < UT || mT.heightRelevant) {
          let WT = mT.widget ? mT.widget.estimatedHeight : 0,
            zT = mT.widget ? mT.widget.lineBreaks : 0;
          WT < 0 && (WT = this.oracle.lineHeight);
          let MT = UT - TT;
          mT.block ? this.vUT(new NW(MT, WT, mT)) : (MT || zT || WT >= 5) && this.addLineDeco(WT, zT, MT)
        } else UT > TT && this.span(TT, UT);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: TT,
          to: UT
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = TT, this.lineEnd = UT, this.writtenTo < TT && ((this.writtenTo < TT - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, TT - 1)), this.nodes.push(null)), this.pos > TT && this.nodes.push(new EW(this.pos - TT, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(TT, UT) {
        let mT = new hW(UT - TT);
        return this.oracle.doc.lineAt(TT).to == UT && (mT.flags |= 4), mT
      }
      ensureLine() {
        this.enterLine();
        let TT = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (TT instanceof EW) return TT;
        let UT = new EW(0, -1, 0);
        return this.nodes.push(UT), UT
      }
      vUT(TT) {
        this.enterLine();
        let UT = TT.deco;
        UT && UT.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(TT), this.writtenTo = this.pos = this.pos + TT.length, UT && UT.endSide > 0 && (this.covering = TT)
      }
      addLineDeco(TT, UT, mT) {
        let WT = this.ensureLine();
        WT.length += mT, WT.collapsed += mT, WT.widgetHeight = Math.max(WT.widgetHeight, TT), WT.breaks += UT, this.writtenTo = this.pos = this.pos + mT
      }
      finish(TT) {
        let UT = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || UT instanceof EW || this.isCovered ? (this.writtenTo < this.pos || null == UT) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new EW(0, -1, 0));
        let mT = TT;
        for (let WT of this.nodes) WT instanceof EW && WT.updateHeight(this.oracle, mT), mT += WT ? WT.length : 1;
        return this.nodes
      }
      static build(TT, UT, mT, zT) {
        let MT = new AW(mT, TT);
        return WT.x.spans(UT, mT, zT, MT, 0), MT.finish(mT)
      }
    }
    class RW {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(TT, UT, mT, WT) {
        (TT < UT || mT && mT.heightRelevant || WT && WT.heightRelevant) && FT(TT, UT, this.changes, 5)
      }
    }

    function Tz(TT, UT) {
      let mT = TT.getBoundingClientRect(),
        WT = TT.ownerDocument,
        zT = WT.defaultView || window,
        MT = Math.max(0, mT.left),
        gT = Math.min(zT.innerWidth, mT.right),
        nT = Math.max(0, mT.top),
        HT = Math.min(zT.innerHeight, mT.bottom);
      for (let kT = TT.parentNode; kT && kT != WT.body;)
        if (1 == kT.nodeType) {
          let UT = kT,
            mT = window.getComputedStyle(UT);
          if ((UT.scrollHeight > UT.clientHeight || UT.scrollWidth > UT.clientWidth) && "visible" != mT.overflow) {
            let mT = UT.getBoundingClientRect();
            MT = Math.max(MT, mT.left), gT = Math.min(gT, mT.right), nT = Math.max(nT, mT.top), HT = Math.min(kT == TT.parentNode ? zT.innerHeight : HT, mT.bottom)
          }
          kT = "absolute" == mT.position || "fixed" == mT.position ? UT.offsetParent : UT.parentNode
        } else {
          if (11 != kT.nodeType) break;
          kT = kT.host
        } return {
        left: MT - mT.left,
        right: Math.max(MT, gT) - mT.left,
        top: nT - (mT.top + UT),
        bottom: Math.max(nT, HT) - (mT.top + UT)
      }
    }

    function Uz(TT, UT) {
      let mT = TT.getBoundingClientRect();
      return {
        left: 0,
        right: mT.right - mT.left,
        top: UT,
        bottom: mT.bottom - (mT.top + UT)
      }
    }
    class mz {
      constructor(TT, UT, mT, WT) {
        this.from = TT, this.to = UT, this.size = mT, this.displaySize = WT
      }
      static same(TT, UT) {
        if (TT.length != UT.length) return !1;
        for (let mT = 0; mT < TT.length; mT++) {
          let WT = TT[mT],
            zT = UT[mT];
          if (WT.from != zT.from || WT.to != zT.to || WT.size != zT.size) return !1
        }
        return !0
      }
      draw(TT, UT) {
        return yT.replace({
          widget: new Wz(this.displaySize * (UT ? TT.scaleY : TT.scaleX), UT)
        }).range(this.from, this.to)
      }
    }
    class Wz extends tT {
      constructor(TT, UT) {
        super(), this.size = TT, this.vertical = UT
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
    class zz {
      constructor(TT, UT) {
        this.view = TT, this.state = UT, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Hz, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = kU.LTR, this.M6 = [], this.mustEnforceCursorAssoc = !1;
        let mT = UT.facet(RU).some((TT => "function" != typeof TT && "cm-lineWrapping" == TT.class));
        this.heightOracle = new PW(mT), this.stateDeco = kz(UT), this.heightMap = KW.empty().applyChanges(this.stateDeco, WT.I.empty, this.heightOracle.setDoc(UT.doc), [new km(0, 0, 0, UT.doc.length)]);
        for (let WT = 0; WT < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); WT++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = yT.set(this.lineGaps.map((TT => TT.draw(this, !1)))), this.scrollParent = TT.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let TT = [this.viewport],
          {
            main: UT
          } = this.state.selection;
        for (let mT = 0; mT <= 1; mT++) {
          let WT = mT ? UT.head : UT.anchor;
          if (!TT.some((TT => {
              let {
                from: UT,
                to: mT
              } = TT;
              return WT >= UT && WT <= mT
            }))) {
            let {
              from: UT,
              to: mT
            } = this.lineBlockAt(WT);
            TT.push(new Mz(UT, mT))
          }
        }
        return this.viewports = TT.sort(((TT, UT) => TT.from - UT.from)), this.updateScaler()
      }
      updateScaler() {
        let TT = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? Hz : new jz(this.heightOracle, this.heightMap, this.viewports), TT.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (TT => {
          this.viewportLines.push(lz(TT, this.scaler))
        }))
      }
      update(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = TT.state;
        let mT = this.stateDeco;
        this.stateDeco = kz(this.state);
        let zT = TT.changedRanges,
          MT = km.extendWithRanges(zT, function(TT, UT, mT) {
            let zT = new RW;
            return WT.x.compare(TT, UT, mT, zT, 0), zT.changes
          }(mT, this.stateDeco, TT ? TT.changes : WT.ChangeSet.empty(this.state.doc.length))),
          gT = this.heightMap.height,
          nT = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        FW(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, TT.startState.doc, this.heightOracle.setDoc(this.state.doc), MT), (this.heightMap.height != gT || sW) && (TT.flags |= 2), nT ? (this.scrollAnchorPos = TT.changes.mapPos(nT.from, -1), this.scrollAnchorHeight = nT.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = gT);
        let HT = MT.length ? this.mapViewport(this.viewport, TT.changes) : this.viewport;
        (UT && (UT.range.head < HT.from || UT.range.head > HT.to) || !this.viewportIsAppropriate(HT)) && (HT = this.getViewport(0, UT));
        let kT = HT.from != this.viewport.from || HT.to != this.viewport.to;
        this.viewport = HT, TT.flags |= this.updateForViewport(), (kT || !TT.changes.empty || 2 & TT.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, TT.changes))), TT.flags |= this.computeVisibleRanges(TT.changes), UT && (this.scrollTarget = UT), !this.mustEnforceCursorAssoc && (TT.selectionSet || TT.focusChanged) && TT.view.lineWrapping && TT.state.selection.main.empty && TT.state.selection.main.assoc && !TT.state.facet(uU) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: TT
        } = this, UT = TT.contentDOM, mT = window.getComputedStyle(UT), zT = this.heightOracle, MT = mT.whiteSpace;
        this.defaultTextDirection = "rtl" == mT.direction ? kU.RTL : kU.LTR;
        let gT = this.heightOracle.mustRefreshForWrapping(MT) || "refresh" === this.mustMeasureContent,
          nT = UT.getBoundingClientRect(),
          HT = gT || this.mustMeasureContent || this.contentDOMHeight != nT.height;
        this.contentDOMHeight = nT.height, this.mustMeasureContent = !1;
        let kT = 0,
          jT = 0;
        if (nT.width && nT.height) {
          let {
            scaleX: TT,
            scaleY: mT
          } = oT(UT, nT);
          (TT > .005 && Math.abs(this.scaleX - TT) > .005 || mT > .005 && Math.abs(this.scaleY - mT) > .005) && (this.scaleX = TT, this.scaleY = mT, kT |= 16, gT = HT = !0)
        }
        let lT = (parseInt(mT.paddingTop) || 0) * this.scaleY,
          LT = (parseInt(mT.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == lT && this.paddingBottom == LT || (this.paddingTop = lT, this.paddingBottom = LT, kT |= 18), this.editorWidth != TT.scrollDOM.clientWidth && (zT.lineWrapping && (HT = !0), this.editorWidth = TT.scrollDOM.clientWidth, kT |= 16);
        let pT = AT(this.view.contentDOM, !1).y;
        pT != this.scrollParent && (this.scrollParent = pT, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let BT = this.getScrollOffset();
        this.scrollOffset != BT && (this.scrollAnchorHeight = -1, this.scrollOffset = BT), this.scrolledToBottom = MU(this.scrollParent || TT.win);
        let ZT = (this.printing ? Uz : Tz)(UT, this.paddingTop),
          cT = ZT.top - this.pixelViewport.top,
          vT = ZT.bottom - this.pixelViewport.bottom;
        this.pixelViewport = ZT;
        let fT = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (fT != this.inView && (this.inView = fT, fT && (HT = !0)), !this.inView && !this.scrollTarget && ! function(TT) {
            let UT = TT.getBoundingClientRect(),
              mT = TT.ownerDocument.defaultView || window;
            return UT.left < mT.innerWidth && UT.right > 0 && UT.top < mT.innerHeight && UT.bottom > 0
          }(TT.dom)) return 0;
        let qT = nT.width;
        if (this.contentDOMWidth == qT && this.editorHeight == TT.scrollDOM.clientHeight || (this.contentDOMWidth = nT.width, this.editorHeight = TT.scrollDOM.clientHeight, kT |= 16), HT) {
          let UT = TT.docView.measureVisibleLineHeights(this.viewport);
          if (zT.mustRefreshForHeights(UT) && (gT = !0), gT || zT.lineWrapping && Math.abs(qT - this.contentDOMWidth) > zT.charWidth) {
            let {
              lineHeight: mT,
              charWidth: WT,
              textHeight: nT
            } = TT.docView.measureTextSize();
            gT = mT > 0 && zT.refresh(MT, mT, WT, nT, Math.max(5, qT / WT), UT), gT && (TT.docView.minWidth = 0, kT |= 16)
          }
          cT > 0 && vT > 0 ? jT = Math.max(cT, vT) : cT < 0 && vT < 0 && (jT = Math.min(cT, vT)), FW();
          for (let mT of this.viewports) {
            let MT = mT.from == this.viewport.from ? UT : TT.docView.measureVisibleLineHeights(mT);
            this.heightMap = (gT ? KW.empty().applyChanges(this.stateDeco, WT.I.empty, this.heightOracle, [new km(0, 0, 0, TT.state.doc.length)]) : this.heightMap).updateHeight(zT, 0, gT, new VW(mT.from, MT))
          }
          sW && (kT |= 2)
        }
        let iT = !this.viewportIsAppropriate(this.viewport, jT) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return iT && (2 & kT && (kT |= this.updateScaler()), this.viewport = this.getViewport(jT, this.scrollTarget), kT |= this.updateForViewport()), (2 & kT || iT) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(gT ? [] : this.lineGaps, TT)), kT |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, TT.docView.enforceCursorAssoc()), kT
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(TT, UT) {
        let mT = .5 - Math.max(-.5, Math.min(.5, TT / 1e3 / 2)),
          WT = this.heightMap,
          zT = this.heightOracle,
          {
            visibleTop: MT,
            visibleBottom: gT
          } = this,
          nT = new Mz(WT.lineAt(MT - 1e3 * mT, CW.ByHeight, zT, 0, 0).from, WT.lineAt(gT + 1e3 * (1 - mT), CW.ByHeight, zT, 0, 0).to);
        if (UT) {
          let {
            head: TT
          } = UT.range;
          if (TT < nT.from || TT > nT.to) {
            let mT, MT = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              gT = WT.lineAt(TT, CW.ByPos, zT, 0, 0);
            mT = "center" == UT.y ? (gT.top + gT.bottom) / 2 - MT / 2 : "start" == UT.y || "nearest" == UT.y && TT < nT.from ? gT.top : gT.bottom - MT, nT = new Mz(WT.lineAt(mT - 500, CW.ByHeight, zT, 0, 0).from, WT.lineAt(mT + MT + 500, CW.ByHeight, zT, 0, 0).to)
          }
        }
        return nT
      }
      mapViewport(TT, UT) {
        let mT = UT.mapPos(TT.from, -1),
          WT = UT.mapPos(TT.to, 1);
        return new Mz(this.heightMap.lineAt(mT, CW.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(WT, CW.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(TT) {
        let {
          from: UT,
          to: mT
        } = TT, WT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: zT
        } = this.heightMap.lineAt(UT, CW.ByPos, this.heightOracle, 0, 0), {
          bottom: MT
        } = this.heightMap.lineAt(mT, CW.ByPos, this.heightOracle, 0, 0), {
          visibleTop: gT,
          visibleBottom: nT
        } = this;
        return (0 == UT || zT <= gT - Math.max(10, Math.min(-WT, 250))) && (mT == this.state.doc.length || MT >= nT + Math.max(10, Math.min(WT, 250))) && zT > gT - 2e3 && MT < nT + 2e3
      }
      mapLineGaps(TT, UT) {
        if (!TT.length || UT.empty) return TT;
        let mT = [];
        for (let WT of TT) UT.touchesRange(WT.from, WT.to) || mT.push(new mz(UT.mapPos(WT.from), UT.mapPos(WT.to), WT.size, WT.displaySize));
        return mT
      }
      ensureLineGaps(TT, UT) {
        let mT = this.heightOracle.lineWrapping,
          zT = mT ? 1e4 : 2e3,
          MT = zT >> 1,
          gT = zT << 1;
        if (this.defaultTextDirection != kU.LTR && !mT) return [];
        let nT = [],
          HT = (zT, gT, kT, jT) => {
            if (gT - zT < MT) return;
            let lT = this.state.selection.main,
              LT = [lT.from];
            lT.empty || LT.push(lT.to);
            for (let TT of LT)
              if (TT > zT && TT < gT) return HT(zT, TT - 10, kT, jT), void HT(TT + 10, gT, kT, jT);
            let pT = function(TT, UT) {
              for (let mT of TT)
                if (UT(mT)) return mT;
              return
            }(TT, (TT => TT.from >= kT.from && TT.to <= kT.to && Math.abs(TT.from - zT) < MT && Math.abs(TT.to - gT) < MT && !LT.some((UT => TT.from < UT && TT.to > UT))));
            if (!pT) {
              if (gT < kT.to && UT && mT && UT.M6.some((TT => TT.from <= gT && TT.to >= gT))) {
                let TT = UT.moveToLineBoundary(WT.l.cursor(gT), !1, !0).head;
                TT > zT && (gT = TT)
              }
              let TT = this.gapSize(kT, zT, gT, jT);
              pT = new mz(zT, gT, TT, mT || TT < 2e6 ? TT : 2e6)
            }
            nT.push(pT)
          },
          kT = UT => {
            if (UT.length < gT || UT.type != aT.Text) return;
            let MT = function(TT, UT, mT) {
              let zT = [],
                MT = TT,
                gT = 0;
              WT.x.spans(mT, TT, UT, {
                span() {},
                point(TT, UT) {
                  TT > MT && (zT.push({
                    from: MT,
                    to: TT
                  }), gT += TT - MT), MT = UT
                }
              }, 20), MT < UT && (zT.push({
                from: MT,
                to: UT
              }), gT += UT - MT);
              return {
                total: gT,
                hZ: zT
              }
            }(UT.from, UT.to, this.stateDeco);
            if (MT.total < gT) return;
            let nT, kT, jT = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (mT) {
              let TT, mT, WT = zT / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != jT) {
                let zT = nz(MT, jT),
                  gT = ((this.visibleBottom - this.visibleTop) / 2 + WT) / UT.height;
                TT = zT - gT, mT = zT + gT
              } else TT = (this.visibleTop - UT.top - WT) / UT.height, mT = (this.visibleBottom - UT.top + WT) / UT.height;
              nT = gz(MT, TT), kT = gz(MT, mT)
            } else {
              let mT = MT.total * this.heightOracle.charWidth,
                WT = zT * this.heightOracle.charWidth,
                gT = 0;
              if (mT > 2e6)
                for (let zT of TT) zT.from >= UT.from && zT.from < UT.to && zT.size != zT.displaySize && zT.from * this.heightOracle.charWidth + gT < this.pixelViewport.left && (gT = zT.size - zT.displaySize);
              let HT, lT, LT = this.pixelViewport.left + gT,
                pT = this.pixelViewport.right + gT;
              if (null != jT) {
                let TT = nz(MT, jT),
                  UT = ((pT - LT) / 2 + WT) / mT;
                HT = TT - UT, lT = TT + UT
              } else HT = (LT - WT) / mT, lT = (pT + WT) / mT;
              nT = gz(MT, HT), kT = gz(MT, lT)
            }
            nT > UT.from && HT(UT.from, nT, UT, MT), kT < UT.to && HT(kT, UT.to, UT, MT)
          };
        for (let WT of this.viewportLines) Array.isArray(WT.type) ? WT.type.forEach(kT) : kT(WT);
        return nT
      }
      gapSize(TT, UT, mT, WT) {
        let zT = nz(WT, mT) - nz(WT, UT);
        return this.heightOracle.lineWrapping ? TT.height * zT : WT.total * this.heightOracle.charWidth * zT
      }
      updateLineGaps(TT) {
        mz.same(TT, this.lineGaps) || (this.lineGaps = TT, this.lineGapDeco = yT.set(TT.map((TT => TT.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(TT) {
        let UT = this.stateDeco;
        this.lineGaps.length && (UT = UT.concat(this.lineGapDeco));
        let mT = [];
        WT.x.spans(UT, this.viewport.from, this.viewport.to, {
          span(TT, UT) {
            mT.push({
              from: TT,
              to: UT
            })
          },
          point() {}
        }, 20);
        let zT = 0;
        if (mT.length != this.M6.length) zT = 12;
        else
          for (let WT = 0; WT < mT.length && !(8 & zT); WT++) {
            let UT = this.M6[WT],
              MT = mT[WT];
            UT.from == MT.from && UT.to == MT.to || (zT |= 4, TT && TT.mapPos(UT.from, -1) == MT.from && TT.mapPos(UT.to, 1) == MT.to || (zT |= 8))
          }
        return this.M6 = mT, zT
      }
      lineBlockAt(TT) {
        return TT >= this.viewport.from && TT <= this.viewport.to && this.viewportLines.find((UT => UT.from <= TT && UT.to >= TT)) || lz(this.heightMap.lineAt(TT, CW.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(TT) {
        return TT >= this.viewportLines[0].top && TT <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((UT => UT.top <= TT && UT.bottom >= TT)) || lz(this.heightMap.lineAt(this.scaler.fromDOM(TT), CW.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(TT) {
        let UT = this.lineBlockAtHeight(TT + 8);
        return UT.from >= this.viewport.from || this.viewportLines[0].top - TT > 200 ? UT : this.viewportLines[0]
      }
      elementAtHeight(TT) {
        return lz(this.heightMap.blockAt(this.scaler.fromDOM(TT), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class Mz {
      constructor(TT, UT) {
        this.from = TT, this.to = UT
      }
    }

    function gz(TT, UT) {
      let {
        total: mT,
        hZ: WT
      } = TT;
      if (UT <= 0) return WT[0].from;
      if (UT >= 1) return WT[WT.length - 1].to;
      let zT = Math.floor(mT * UT);
      for (let MT = 0;; MT++) {
        let {
          from: TT,
          to: UT
        } = WT[MT], mT = UT - TT;
        if (zT <= mT) return TT + zT;
        zT -= mT
      }
    }

    function nz(TT, UT) {
      let mT = 0;
      for (let {
          from: WT,
          to: zT
        }
        of TT.hZ) {
        if (UT <= zT) {
          mT += UT - WT;
          break
        }
        mT += zT - WT
      }
      return mT / TT.total
    }
    const Hz = {
      toDOM: TT => TT,
      fromDOM: TT => TT,
      scale: 1,
      eq(TT) {
        return TT == this
      }
    };

    function kz(TT) {
      let UT = TT.facet(Tm).filter((TT => "function" != typeof TT)),
        mT = TT.facet(mm).filter((TT => "function" != typeof TT));
      return mT.length && UT.push(WT.x.join(mT)), UT
    }
    class jz {
      constructor(TT, UT, mT) {
        let WT = 0,
          zT = 0,
          MT = 0;
        this.viewports = mT.map((mT => {
          let {
            from: zT,
            to: MT
          } = mT, gT = UT.lineAt(zT, CW.ByPos, TT, 0, 0).top, nT = UT.lineAt(MT, CW.ByPos, TT, 0, 0).bottom;
          return WT += nT - gT, {
            from: zT,
            to: MT,
            top: gT,
            bottom: nT,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - WT) / (UT.height - WT);
        for (let gT of this.viewports) gT.domTop = MT + (gT.top - zT) * this.scale, MT = gT.domBottom = gT.domTop + (gT.bottom - gT.top), zT = gT.bottom
      }
      toDOM(TT) {
        for (let UT = 0, mT = 0, WT = 0;; UT++) {
          let zT = UT < this.viewports.length ? this.viewports[UT] : null;
          if (!zT || TT < zT.top) return WT + (TT - mT) * this.scale;
          if (TT <= zT.bottom) return zT.domTop + (TT - zT.top);
          mT = zT.bottom, WT = zT.domBottom
        }
      }
      fromDOM(TT) {
        for (let UT = 0, mT = 0, WT = 0;; UT++) {
          let zT = UT < this.viewports.length ? this.viewports[UT] : null;
          if (!zT || TT < zT.domTop) return mT + (TT - WT) / this.scale;
          if (TT <= zT.domBottom) return zT.top + (TT - zT.domTop);
          mT = zT.bottom, WT = zT.domBottom
        }
      }
      eq(TT) {
        return TT instanceof jz && (this.scale == TT.scale && this.viewports.length == TT.viewports.length && this.viewports.every(((UT, mT) => UT.from == TT.viewports[mT].from && UT.to == TT.viewports[mT].to)))
      }
    }

    function lz(TT, UT) {
      if (1 == UT.scale) return TT;
      let mT = UT.toDOM(TT.top),
        WT = UT.toDOM(TT.bottom);
      return new uW(TT.from, TT.length, mT, WT - mT, Array.isArray(TT._content) ? TT._content.map((TT => lz(TT, UT))) : TT._content)
    }
    const Lz = WT.o.define({
        combine: TT => TT.join(" ")
      }),
      pz = WT.o.define({
        combine: TT => TT.indexOf(!0) > -1
      }),
      Bz = zT.b.newName(),
      Zz = zT.b.newName(),
      cz = zT.b.newName(),
      vz = {
        "&light": "." + Zz,
        "&dark": "." + cz
      };

    function fz(TT, UT, mT) {
      return new zT.b(UT, {
        finish: UT => /&/.test(UT) ? UT.replace(/&\w*/, (UT => {
          if ("&" == UT) return TT;
          if (!mT || !mT[UT]) throw new RangeError(`Unsupported selector: ${UT}`);
          return mT[UT]
        })) : TT + " " + UT
      })
    }
    const qz = fz("." + Bz, {
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
      }, vz),
      iz = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      bz = eT.ie && eT.ie_version <= 11;
    class Oz {
      constructor(TT) {
        this.view = TT, this.active = !1, this.editContext = null, this.selectionRange = new RT, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = TT.contentDOM, this.observer = new MutationObserver((UT => {
          for (let TT of UT) this.queue.push(TT);
          (eT.ie && eT.ie_version <= 11 || eT.ios && TT.composing) && UT.some((TT => "childList" == TT.type && TT.removedNodes.length || "characterData" == TT.type && TT.oldValue.length > TT.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !eT.android || !1 === TT.constructor.EDIT_CONTEXT || eT.chrome && eT.chrome_version < 126 || (this.editContext = new Jz(TT), TT.state.facet(NU) && (TT.contentDOM.editContext = this.editContext.editContext)), bz && (this.onCharData = TT => {
          this.queue.push({
            target: TT.target,
            type: "characterData",
            oldValue: TT.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.Qq = this.Qq.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var TT;
          (null === (TT = this.view.docView) || void 0 === TT ? void 0 : TT.lastUpdate) < Date.now() - 75 && this.Qq()
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
      Qq() {
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
        if (this.gapIntersection && (TT.length != this.gaps.length || this.gaps.some(((UT, mT) => UT != TT[mT])))) {
          this.gapIntersection.disconnect();
          for (let UT of TT) this.gapIntersection.observe(UT);
          this.gaps = TT
        }
      }
      onSelectionChange(TT) {
        let UT = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: mT
        } = this, WT = this.selectionRange;
        if (mT.state.facet(NU) ? mT.root.activeElement != this.dom : !CT(this.dom, WT)) return;
        let zT = WT.anchorNode && mT.docView.tile.nearest(WT.anchorNode);
        zT && zT.isWidget() && zT.widget.ignoreEvent(TT) ? UT || (this.selectionChanged = !1) : (eT.ie && eT.ie_version <= 11 || eT.android && eT.chrome) && !mT.state.selection.main.empty && WT.focusNode && KT(WT.focusNode, WT.focusOffset, WT.anchorNode, WT.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: TT
        } = this, UT = VT(TT.root);
        if (!UT) return !1;
        let mT = eT.safari && 11 == TT.root.nodeType && TT.root.activeElement == this.dom && function(TT, UT) {
          if (UT.getComposedRanges) {
            let mT = UT.getComposedRanges(TT.root)[0];
            if (mT) return Yz(TT, mT)
          }
          let mT = null;

          function WT(TT) {
            TT.preventDefault(), TT.stopImmediatePropagation(), mT = TT.getTargetRanges()[0]
          }
          return TT.contentDOM.addEventListener("beforeinput", WT, !0), TT.dom.ownerDocument.execCommand("indent"), TT.contentDOM.removeEventListener("beforeinput", WT, !0), mT ? Yz(TT, mT) : null
        }(this.view, UT) || UT;
        if (!mT || this.selectionRange.eq(mT)) return !1;
        let WT = CT(this.dom, mT);
        return WT && !this.selectionChanged && TT.inputState.lastFocusTime > Date.now() - 200 && TT.inputState.lastTouchTime < Date.now() - 300 && function(TT, UT) {
          let mT = UT.focusNode,
            WT = UT.focusOffset;
          if (!mT || UT.anchorNode != mT || UT.anchorOffset != WT) return !1;
          for (WT = Math.min(WT, ET(mT));;)
            if (WT) {
              if (1 != mT.nodeType) return !1;
              let TT = mT.childNodes[WT - 1];
              "false" == TT.contentEditable ? WT-- : (mT = TT, WT = ET(mT))
            } else {
              if (mT == TT) return !0;
              WT = ST(mT), mT = mT.parentNode
            }
        }(this.dom, mT) ? (this.view.inputState.lastFocusTime = 0, TT.docView.updateSelection(), !1) : (this.selectionRange.setRange(mT), WT && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(TT, UT) {
        this.selectionRange.set(TT.node, TT.offset, UT.node, UT.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let TT = 0,
          UT = null;
        for (let mT = this.dom; mT;)
          if (1 == mT.nodeType) !UT && TT < this.scrollTargets.length && this.scrollTargets[TT] == mT ? TT++ : UT || (UT = this.scrollTargets.slice(0, TT)), UT && UT.push(mT), mT = mT.assignedSlot || mT.parentNode;
          else {
            if (11 != mT.nodeType) break;
            mT = mT.host
          } if (TT < this.scrollTargets.length && !UT && (UT = this.scrollTargets.slice(0, TT)), UT) {
          for (let TT of this.scrollTargets) TT.removeEventListener("scroll", this.onScroll);
          for (let TT of this.scrollTargets = UT) TT.addEventListener("scroll", this.onScroll)
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
        this.active || (this.observer.observe(this.dom, iz), bz && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), bz && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(TT, UT) {
        var mT;
        if (!this.delayedAndroidKey) {
          let TT = () => {
            let TT = this.delayedAndroidKey;
            if (TT) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = TT.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && TT.force && zU(this.dom, TT.key, TT.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(TT)
        }
        this.delayedAndroidKey && "Enter" != TT || (this.delayedAndroidKey = {
          key: TT,
          keyCode: UT,
          force: this.lastChange < Date.now() - 50 || !!(null === (mT = this.delayedAndroidKey) || void 0 === mT ? void 0 : mT.force)
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
        let UT = -1,
          mT = -1,
          WT = !1;
        for (let zT of TT) {
          let TT = this.readMutation(zT);
          TT && (TT.typeOver && (WT = !0), -1 == UT ? ({
            from: UT,
            to: mT
          } = TT) : (UT = Math.min(TT.from, UT), mT = Math.max(TT.to, mT)))
        }
        return {
          from: UT,
          to: mT,
          typeOver: WT
        }
      }
      readChange() {
        let {
          from: TT,
          to: UT,
          typeOver: mT
        } = this.processRecords(), WT = this.selectionChanged && CT(this.dom, this.selectionRange);
        if (TT < 0 && !WT) return null;
        TT > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let zT = new WW(this.view, TT, UT, mT);
        return this.view.docView.domChanged = {
          newSel: zT.newSel ? zT.newSel.main : null
        }, zT
      }
      flush() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        TT && this.readSelectionRange();
        let UT = this.readChange();
        if (!UT) return this.view.requestMeasure(), !1;
        let mT = this.view.state,
          WT = MW(this.view, UT);
        return this.view.state == mT && (UT.domChanged || UT.newSel && !HW(this.view.state.selection, UT.newSel.main)) && this.view.update([]), WT
      }
      readMutation(TT) {
        let UT = this.view.docView.tile.nearest(TT.target);
        if (!UT || UT.isWidget()) return null;
        if (UT.markDirty("attributes" == TT.type), "childList" == TT.type) {
          let mT = ez(UT, TT.previousSibling || TT.target.previousSibling, -1),
            WT = ez(UT, TT.nextSibling || TT.target.nextSibling, 1);
          return {
            from: mT ? UT.posAfter(mT) : UT.posAtStart,
            to: WT ? UT.posBefore(WT) : UT.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == TT.type ? {
          from: UT.posAtStart,
          to: UT.posAtEnd,
          typeOver: TT.target.nodeValue == TT.oldValue
        } : null
      }
      setWindow(TT) {
        TT != this.win && (this.removeWindowListeners(this.win), this.win = TT, this.addWindowListeners(this.win))
      }
      addWindowListeners(TT) {
        TT.addEventListener("resize", this.Qq), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : TT.addEventListener("beforeprint", this.onPrint), TT.addEventListener("scroll", this.onScroll), TT.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(TT) {
        TT.removeEventListener("scroll", this.onScroll), TT.removeEventListener("resize", this.Qq), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : TT.removeEventListener("beforeprint", this.onPrint), TT.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(TT) {
        this.editContext && (this.editContext.update(TT), TT.startState.facet(NU) != TT.state.facet(NU) && (TT.view.contentDOM.editContext = TT.state.facet(NU) ? this.editContext.editContext : null))
      }
      destroy() {
        var TT, UT, mT;
        this.stop(), null === (TT = this.intersection) || void 0 === TT || TT.disconnect(), null === (UT = this.gapIntersection) || void 0 === UT || UT.disconnect(), null === (mT = this.resizeScroll) || void 0 === mT || mT.disconnect();
        for (let WT of this.scrollTargets) WT.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function ez(TT, UT, mT) {
      for (; UT;) {
        let WT = Lm.get(UT);
        if (WT && WT.parent == TT) return WT;
        let zT = UT.parentNode;
        UT = zT != TT.dom ? zT : mT > 0 ? UT.nextSibling : UT.previousSibling
      }
      return null
    }

    function Yz(TT, UT) {
      let mT = UT.startContainer,
        WT = UT.startOffset,
        zT = UT.endContainer,
        MT = UT.endOffset,
        gT = TT.docView.domAtPos(TT.state.selection.main.anchor, 1);
      return KT(gT.node, gT.offset, zT, MT) && ([mT, WT, zT, MT] = [zT, MT, mT, WT]), {
        anchorNode: mT,
        anchorOffset: WT,
        focusNode: zT,
        focusOffset: MT
      }
    }
    class Jz {
      constructor(TT) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(TT.state);
        let UT = this.editContext = new window.EditContext({
          text: TT.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, TT.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(TT.state.selection.main.head)
        });
        this.handlers.textupdate = mT => {
          let zT = TT.state.selection.main,
            {
              anchor: MT,
              head: gT
            } = zT,
            nT = this.toEditorPos(mT.updateRangeStart),
            HT = this.toEditorPos(mT.updateRangeEnd);
          TT.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: mT.updateRangeStart,
            editorBase: nT,
            drifted: !1
          });
          let kT = HT - nT > mT.text.length;
          nT == this.from && MT < this.from ? nT = MT : HT == this.to && MT > this.to && (HT = MT);
          let jT = nW(TT.state.sliceDoc(nT, HT), mT.text, (kT ? zT.from : zT.to) - nT, kT ? "end" : null);
          if (!jT) {
            let UT = WT.l.single(this.toEditorPos(mT.selectionStart), this.toEditorPos(mT.selectionEnd));
            return void(HW(UT, zT) || TT.dispatch({
              selection: UT,
              userEvent: "select"
            }))
          }
          let lT = {
            from: jT.from + nT,
            to: jT.toA + nT,
            insert: WT.I.of(mT.text.slice(jT.from, jT.toB).split("\n"))
          };
          if ((eT.mac || eT.android) && lT.from == gT - 1 && /^\. ?$/.test(mT.text) && "off" == TT.contentDOM.getAttribute("autocorrect") && (lT = {
              from: nT,
              to: HT,
              insert: WT.I.of([mT.text.replace(".", " ")])
            }), this.pendingContextChange = lT, !TT.state.readOnly) {
            let UT = this.to - this.from + (lT.to - lT.from + lT.insert.length);
            gW(TT, lT, WT.l.single(this.toEditorPos(mT.selectionStart, UT), this.toEditorPos(mT.selectionEnd, UT)))
          }
          this.pendingContextChange && (this.revertPending(TT.state), this.setSelection(TT.state)), lT.from < lT.to && !lT.insert.length && TT.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(UT.text.slice(Math.max(0, mT.updateRangeStart - 1), Math.min(UT.text.length, mT.updateRangeStart + 1))) && this.handlers.compositionend(mT)
        }, this.handlers.characterboundsupdate = mT => {
          let WT = [],
            zT = null;
          for (let UT = this.toEditorPos(mT.rangeStart), MT = this.toEditorPos(mT.rangeEnd); UT < MT; UT++) {
            let mT = TT.coordsForChar(UT);
            zT = mT && new DOMRect(mT.left, mT.top, mT.right - mT.left, mT.bottom - mT.top) || zT || new DOMRect, WT.push(zT)
          }
          UT.updateCharacterBounds(mT.rangeStart, WT)
        }, this.handlers.textformatupdate = UT => {
          let mT = [];
          for (let TT of UT.getTextFormats()) {
            let UT = TT.underlineStyle,
              WT = TT.underlineThickness;
            if (!/none/i.test(UT) && !/none/i.test(WT)) {
              let zT = this.toEditorPos(TT.rangeStart),
                MT = this.toEditorPos(TT.rangeEnd);
              if (zT < MT) {
                let TT = `text-decoration: underline ${/^[a-z]/.test(UT)?UT+" ":"Dashed"==UT?"dashed ":"Squiggle"==UT?"wavy ":""}${/thin/i.test(WT)?1:2}px`;
                mT.push(yT.mark({
                  attributes: {
                    style: TT
                  }
                }).range(zT, MT))
              }
            }
          }
          TT.dispatch({
            effects: SU.of(yT.set(mT))
          })
        }, this.handlers.compositionstart = () => {
          TT.inputState.composing < 0 && (TT.inputState.composing = 0, TT.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (TT.inputState.composing = -1, TT.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: UT
            } = this.composing;
            this.composing = null, UT && this.reset(TT.state)
          }
        };
        for (let mT in this.handlers) UT.addEventListener(mT, this.handlers[mT]);
        this.measureReq = {
          read: TT => {
            this.editContext.updateControlBounds(TT.contentDOM.getBoundingClientRect());
            let UT = VT(TT.root);
            UT && UT.rangeCount && this.editContext.updateSelectionBounds(UT.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(TT) {
        let UT = 0,
          mT = !1,
          WT = this.pendingContextChange;
        return TT.changes.iterChanges(((zT, MT, gT, nT, HT) => {
          if (mT) return;
          let kT = HT.length - (MT - zT);
          if (WT && MT >= WT.to) {
            if (WT.from == zT && WT.to == MT && WT.insert.eq(HT)) return WT = this.pendingContextChange = null, UT += kT, void(this.to += kT);
            WT = null, this.revertPending(TT.state)
          }
          if (zT += UT, (MT += UT) <= this.from) this.from += kT, this.to += kT;
          else if (zT < this.to) {
            if (zT < this.from || MT > this.to || this.to - this.from + HT.length > 3e4) return void(mT = !0);
            this.editContext.updateText(this.toContextPos(zT), this.toContextPos(MT), HT.toString()), this.to += kT
          }
          UT += kT
        })), WT && !mT && this.revertPending(TT.state), !mT
      }
      update(TT) {
        let UT = this.pendingContextChange,
          mT = TT.startState.selection.main;
        this.composing && (this.composing.drifted || !TT.changes.touchesRange(mT.from, mT.to) && TT.transactions.some((TT => !TT.isUserEvent("input.type") && TT.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = TT.changes.mapPos(this.composing.editorBase)) : this.applyEdits(TT) && this.rangeIsValid(TT.state) ? (TT.docChanged || TT.selectionSet || UT) && this.setSelection(TT.state) : (this.pendingContextChange = null, this.reset(TT.state)), (TT.geometryChanged || TT.docChanged || TT.selectionSet) && TT.view.requestMeasure(this.measureReq)
      }
      resetRange(TT) {
        let {
          head: UT
        } = TT.selection.main;
        this.from = Math.max(0, UT - 1e4), this.to = Math.min(TT.doc.length, UT + 1e4)
      }
      reset(TT) {
        this.resetRange(TT), this.editContext.updateText(0, this.editContext.text.length, TT.doc.sliceString(this.from, this.to)), this.setSelection(TT)
      }
      revertPending(TT) {
        let UT = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(UT.from), this.toContextPos(UT.from + UT.insert.length), TT.doc.sliceString(UT.from, UT.to))
      }
      setSelection(TT) {
        let {
          main: UT
        } = TT.selection, mT = this.toContextPos(Math.max(this.from, Math.min(this.to, UT.anchor))), WT = this.toContextPos(UT.head);
        this.editContext.selectionStart == mT && this.editContext.selectionEnd == WT || this.editContext.updateSelection(mT, WT)
      }
      rangeIsValid(TT) {
        let {
          head: UT
        } = TT.selection.main;
        return !(this.from > 0 && UT - this.from < 500 || this.to < TT.doc.length && this.to - UT < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        TT = Math.min(TT, UT);
        let mT = this.composing;
        return mT && mT.drifted ? mT.editorBase + (TT - mT.contextBase) : TT + this.from
      }
      toContextPos(TT) {
        let UT = this.composing;
        return UT && UT.drifted ? UT.contextBase + (TT - UT.editorBase) : TT - this.from
      }
      destroy() {
        for (let TT in this.handlers) this.editContext.removeEventListener(TT, this.handlers[TT])
      }
    }
    class xz {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get M6() {
        return this.viewState.M6
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
        var UT;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), TT.parent && TT.parent.appendChild(this.dom);
        let {
          dispatch: mT
        } = TT;
        this.dispatchTransactions = TT.dispatchTransactions || mT && (TT => TT.forEach((TT => mT(TT, this)))) || (TT => this.update(TT)), this.dispatch = this.dispatch.bind(this), this._root = TT.root || function(TT) {
          for (; TT;) {
            if (TT && (9 == TT.nodeType || 11 == TT.nodeType && TT.host)) return TT;
            TT = TT.assignedSlot || TT.parentNode
          }
          return null
        }(TT.parent) || document, this.viewState = new zz(this, TT.state || WT.m.create(TT)), TT.scrollTo && TT.scrollTo.is(KU) && (this.viewState.scrollTarget = TT.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(hU).map((TT => new oU(TT)));
        for (let WT of this.plugins) WT.update(this);
        this.observer = new Oz(this), this.inputState = new kW(this), this.inputState.ensureHandlers(this.plugins), this.docView = new Fm(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (UT = document.fonts) || void 0 === UT ? void 0 : UT.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
        let zT = 1 == UT.length && UT[0] instanceof WT.K ? UT : 1 == UT.length && Array.isArray(UT[0]) ? UT[0] : [this.state.update(...UT)];
        this.dispatchTransactions(zT, this)
      }
      update(TT) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let UT, mT = !1,
          zT = !1,
          MT = this.state;
        for (let WT of TT) {
          if (WT.startState != MT) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          MT = WT.state
        }
        if (this.destroyed) return void(this.viewState.state = MT);
        let gT = this.hasFocus,
          nT = 0,
          HT = null;
        TT.some((TT => TT.annotation(aW))) ? (this.inputState.notifiedFocused = gT, nT = 1) : gT != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = gT, HT = yW(MT, gT), HT || (nT = 1));
        let kT = this.observer.delayedAndroidKey,
          jT = null;
        if (kT ? (this.observer.clearDelayedAndroidKey(), jT = this.observer.readChange(), (jT && !this.state.doc.eq(MT.doc) || !this.state.selection.eq(MT.selection)) && (jT = null)) : this.observer.clear(), MT.facet(WT.m.phrases) != this.state.facet(WT.m.phrases)) return this.setState(MT);
        UT = jm.create(this, MT, TT), UT.flags |= nT;
        let lT = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let UT of TT) {
            if (lT && (lT = lT.map(UT.changes)), UT.scrollIntoView) {
              let {
                main: TT
              } = UT.state.selection, {
                x: mT,
                y: zT
              } = this.state.facet(xz.cursorScrollMargin);
              lT = new rU(TT.empty ? TT : WT.l.cursor(TT.head, TT.head > TT.anchor ? -1 : 1), "nearest", "nearest", zT, mT)
            }
            for (let TT of UT.effects) TT.is(KU) && (lT = TT.value.clip(this.state))
          }
          this.viewState.update(UT, lT), this.bidiCache = tz.update(this.bidiCache, UT.changes), UT.empty || (this.updatePlugins(UT), this.inputState.update(UT)), mT = this.docView.update(UT), this.state.facet(Hm) != this.styleModules && this.mountStyles(), zT = this.updateAttrs(), this.showAnnouncements(TT), this.docView.updateSelection(mT, TT.some((TT => TT.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (UT.startState.facet(Lz) != UT.state.facet(Lz) && (this.viewState.mustMeasureContent = !0), (mT || zT || lT || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), mT && this.docViewUpdate(), !UT.empty)
          for (let WT of this.state.facet(IU)) try {
            WT(UT)
          } catch (LT) {
            GU(this.state, LT, "update listener")
          }(HT || jT) && Promise.resolve().then((() => {
            HT && this.state == HT.startState && this.dispatch(HT), jT && !MW(this, jT) && kT.force && zU(this.contentDOM, kT.key, kT.keyCode)
          }))
      }
      setState(TT) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = TT);
        this.updateState = 2;
        let UT = this.hasFocus;
        try {
          for (let TT of this.plugins) TT.destroy(this);
          this.viewState = new zz(this, TT), this.plugins = TT.facet(hU).map((TT => new oU(TT))), this.pluginMap.clear();
          for (let TT of this.plugins) TT.update(this);
          this.docView.destroy(), this.docView = new Fm(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        UT && this.focus(), this.requestMeasure()
      }
      updatePlugins(TT) {
        let UT = TT.startState.facet(hU),
          mT = TT.state.facet(hU);
        if (UT != mT) {
          let WT = [];
          for (let zT of mT) {
            let mT = UT.indexOf(zT);
            if (mT < 0) WT.push(new oU(zT));
            else {
              let UT = this.plugins[mT];
              UT.mustUpdate = TT, WT.push(UT)
            }
          }
          for (let UT of this.plugins) UT.mustUpdate != TT && UT.destroy(this);
          this.plugins = WT, this.pluginMap.clear()
        } else
          for (let WT of this.plugins) WT.mustUpdate = TT;
        for (let WT = 0; WT < this.plugins.length; WT++) this.plugins[WT].update(this);
        UT != mT && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let UT of this.plugins) {
          let mT = UT.value;
          if (mT && mT.docViewUpdate) try {
            mT.docViewUpdate(this)
          } catch (TT) {
            GU(this.state, TT, "doc view update listener")
          }
        }
      }
      measure() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, TT && this.observer.forceFlush();
        let UT = null,
          mT = this.viewState.scrollParent,
          WT = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: zT,
            scrollAnchorHeight: MT
          } = this.viewState;
        Math.abs(WT - this.viewState.scrollOffset) > 1 && (MT = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let TT = 0;; TT++) {
            if (MT < 0)
              if (MU(mT || this.win)) zT = -1, MT = this.viewState.heightMap.height;
              else {
                let TT = this.viewState.scrollAnchorAt(WT);
                zT = TT.from, MT = TT.top
              } this.updateState = 1;
            let nT = this.viewState.measure();
            if (!nT && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (TT > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let HT = [];
            4 & nT || ([this.measureRequests, HT] = [HT, this.measureRequests]);
            let kT = HT.map((TT => {
                try {
                  return TT.read(this)
                } catch (UT) {
                  return GU(this.state, UT), wz
                }
              })),
              jT = jm.create(this, this.state, []),
              lT = !1;
            jT.flags |= nT, UT ? UT.flags |= nT : UT = jT, this.updateState = 2, jT.empty || (this.updatePlugins(jT), this.inputState.update(jT), this.updateAttrs(), lT = this.docView.update(jT), lT && this.docViewUpdate());
            for (let TT = 0; TT < HT.length; TT++)
              if (kT[TT] != wz) try {
                let UT = HT[TT];
                UT.write && UT.write(kT[TT], this)
              } catch (gT) {
                GU(this.state, gT)
              }
            if (lT && this.docView.updateSelection(!0), !jT.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, MT = -1;
                  continue
                } {
                  let TT = ((zT < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(zT).top) - MT) / this.scaleY;
                  if ((TT > 1 || TT < -1) && (mT == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    WT += TT, mT ? mT.scrollTop += TT : this.win.scrollBy(0, TT), MT = -1;
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
        if (UT && !UT.empty)
          for (let nT of this.state.facet(IU)) nT(UT)
      }
      get themeClasses() {
        return Bz + " " + (this.state.facet(pz) ? cz : Zz) + " " + this.state.facet(Lz)
      }
      updateAttrs() {
        let TT = az(this, AU, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          UT = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(NU) ? "true" : "false",
            class: "cm-content",
            style: `${eT.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (UT["aria-readonly"] = "true"), az(this, RU, UT);
        let mT = this.observer.ignore((() => {
          let mT = dT(this.contentDOM, this.contentAttrs, UT),
            WT = dT(this.dom, this.editorAttrs, TT);
          return mT || WT
        }));
        return this.editorAttrs = TT, this.contentAttrs = UT, mT
      }
      showAnnouncements(TT) {
        let UT = !0;
        for (let mT of TT)
          for (let TT of mT.effects)
            if (TT.is(xz.announce)) {
              UT && (this.announceDOM.textContent = ""), UT = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = TT.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(Hm);
        let TT = this.state.facet(xz.cspNonce);
        zT.b.mount(this.root, this.styleModules.concat(qz).reverse(), TT ? {
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
            for (let UT = 0; UT < this.measureRequests.length; UT++)
              if (this.measureRequests[UT].key === TT.key) return void(this.measureRequests[UT] = TT);
          this.measureRequests.push(TT)
        }
      }
      plugin(TT) {
        let UT = this.pluginMap.get(TT);
        return (void 0 === UT || UT && UT.plugin != TT) && this.pluginMap.set(TT, UT = this.plugins.find((UT => UT.plugin == TT)) || null), UT && UT.update(this).value
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
      moveByChar(TT, UT, mT) {
        return Em(this, TT, Sm(this, TT, UT, mT))
      }
      moveByGroup(TT, UT) {
        return Em(this, TT, Sm(this, TT, UT, (UT => function(TT, UT, mT) {
          let zT = TT.state.charCategorizer(UT),
            MT = zT(mT);
          return TT => {
            let UT = zT(TT);
            return MT == WT.j.Space && (MT = UT), MT == UT
          }
        }(this, TT.head, UT))))
      }
      visualLineSide(TT, UT) {
        let mT = this.bidiSpans(TT),
          zT = this.textDirectionAt(TT.from),
          MT = mT[UT ? mT.length - 1 : 0];
        return WT.l.cursor(MT.side(UT, zT) + TT.from, MT.forward(!UT, zT) ? 1 : -1)
      }
      moveToLineBoundary(TT, UT) {
        return function(TT, UT, mT, zT) {
          let MT = Km(TT, UT.head, UT.assoc || -1),
            gT = zT && MT.type == aT.Text && (TT.lineWrapping || MT.widgetLineBreaks) ? TT.coordsAtPos(UT.assoc < 0 && UT.head > MT.from ? UT.head - 1 : UT.head) : null;
          if (gT) {
            let UT = TT.dom.getBoundingClientRect(),
              zT = TT.textDirectionAt(MT.from),
              nT = TT.posAtCoords({
                x: mT == (zT == kU.LTR) ? UT.right - 1 : UT.left + 1,
                y: (gT.top + gT.bottom) / 2
              });
            if (null != nT) return WT.l.cursor(nT, mT ? -1 : 1)
          }
          return WT.l.cursor(mT ? MT.to : MT.from, mT ? -1 : 1)
        }(this, TT, UT, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(TT, UT, mT) {
        return Em(this, TT, function(TT, UT, mT, zT) {
          let MT = UT.head,
            gT = mT ? 1 : -1;
          if (MT == (mT ? TT.state.doc.length : 0)) return WT.l.cursor(MT, UT.assoc);
          let nT, HT = UT.goalColumn,
            kT = TT.contentDOM.getBoundingClientRect(),
            jT = TT.coordsAtPos(MT, UT.assoc || ((UT.empty ? mT : UT.head == UT.from) ? 1 : -1)),
            lT = TT.documentTop;
          if (jT) null == HT && (HT = jT.left - kT.left), nT = gT < 0 ? jT.top : jT.bottom;
          else {
            let UT = TT.viewState.lineBlockAt(MT);
            null == HT && (HT = Math.min(kT.right - kT.left, TT.defaultCharacterWidth * (MT - UT.from))), nT = (gT < 0 ? UT.top : UT.bottom) + lT
          }
          let LT = kT.left + HT,
            pT = TT.viewState.heightOracle.textHeight >> 1,
            BT = null !== zT && void 0 !== zT ? zT : pT;
          for (let ZT = 0;; ZT += pT) {
            let UT = nT + (BT + ZT) * gT,
              zT = Dm(TT, {
                x: LT,
                y: UT
              }, !1, gT);
            if (mT ? UT > kT.bottom : UT < kT.top) return WT.l.cursor(zT.pos, zT.assoc);
            let MT = TT.coordsAtPos(zT.pos, zT.assoc),
              jT = MT ? (MT.top + MT.bottom) / 2 : 0;
            if (!MT || (mT ? jT > nT : jT < nT)) return WT.l.cursor(zT.pos, zT.assoc, void 0, HT)
          }
        }(this, TT, UT, mT))
      }
      domAtPos(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(TT, UT)
      }
      posAtDOM(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(TT, UT)
      }
      posAtCoords(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let mT = Dm(this, TT, UT);
        return mT && mT.pos
      }
      posAndSideAtCoords(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), Dm(this, TT, UT)
      }
      coordsAtPos(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let mT = this.docView.coordsAt(TT, UT);
        if (!mT || mT.left == mT.right) return mT;
        let WT = this.state.doc.lineAt(TT),
          zT = this.bidiSpans(WT);
        return hT(mT, zT[qU.find(zT, TT - WT.from, -1, UT)].dir == kU.LTR == UT > 0)
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
        return !this.state.facet(VU) || TT < this.viewport.from || TT > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(TT))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(TT) {
        if (TT.length > dz) return JU(TT.length);
        let UT, mT = this.textDirectionAt(TT.from);
        for (let zT of this.bidiCache)
          if (zT.from == TT.from && zT.dir == mT && (zT.fresh || iU(zT.isolates, UT = Mm(this, TT)))) return zT.order;
        UT || (UT = Mm(this, TT));
        let WT = YU(TT.text, mT, UT);
        return this.bidiCache.push(new tz(TT.from, TT.to, mT, UT, !0, WT)), WT
      }
      get hasFocus() {
        var TT;
        return (this.dom.ownerDocument.hasFocus() || eT.safari && (null === (TT = this.inputState) || void 0 === TT ? void 0 : TT.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          mU(this.contentDOM), this.docView.updateSelection()
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
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var mT, zT, MT, gT;
        return KU.of(new rU("number" == typeof TT ? WT.l.cursor(TT) : TT, null !== (mT = UT.y) && void 0 !== mT ? mT : "nearest", null !== (zT = UT.x) && void 0 !== zT ? zT : "nearest", null !== (MT = UT.yMargin) && void 0 !== MT ? MT : 5, null !== (gT = UT.xMargin) && void 0 !== gT ? gT : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: TT,
          scrollLeft: UT
        } = this.scrollDOM, mT = this.viewState.scrollAnchorAt(TT);
        return KU.of(new rU(WT.l.cursor(mT.from), "start", "start", mT.top - TT, UT, !0))
      }
      setTabFocusMode(TT) {
        null == TT ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof TT ? this.inputState.tabFocusMode = TT ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + TT)
      }
      static domEventHandlers(TT) {
        return DU.define((() => ({})), {
          eventHandlers: TT
        })
      }
      static domEventObservers(TT) {
        return DU.define((() => ({})), {
          eventObservers: TT
        })
      }
      static theme(TT, UT) {
        let mT = zT.b.newName(),
          WT = [Lz.of(mT), Hm.of(fz(`.${mT}`, TT))];
        return UT && UT.dark && WT.push(pz.of(!0)), WT
      }
      static baseTheme(TT) {
        return WT.u.lowest(Hm.of(fz("." + Bz, TT, vz)))
      }
      static findFromDOM(TT) {
        var UT;
        let mT = TT.querySelector(".cm-content"),
          WT = mT && Lm.get(mT) || Lm.get(TT);
        return (null === (UT = null === WT || void 0 === WT ? void 0 : WT.root) || void 0 === UT ? void 0 : UT.view) || null
      }
    }
    xz.styleModule = Hm, xz.inputHandler = QU, xz.clipboardInputFilter = FU, xz.clipboardOutputFilter = PU, xz.scrollHandler = CU, xz.focusChangeEffect = sU, xz.perLineTextDirection = VU, xz.exceptionSink = XU, xz.updateListener = IU, xz.editable = NU, xz.mouseSelectionStyle = yU, xz.dragMovesSelection = aU, xz.clickAddsSelectionRange = tU, xz.HW = Tm, xz.blockWrappers = Um, xz.outerDecorations = mm, xz.atomicRanges = Wm, xz.bidiIsolatedRanges = zm, xz.cursorScrollMargin = WT.o.define({
      combine: TT => {
        let UT = 5,
          mT = 5;
        for (let WT of TT) "number" == typeof WT ? UT = mT = WT : ({
          x: UT,
          y: mT
        } = WT);
        return {
          x: UT,
          y: mT
        }
      }
    }), xz.scrollMargins = gm, xz.darkTheme = pz, xz.cspNonce = WT.o.define({
      combine: TT => TT.length ? TT[0] : ""
    }), xz.contentAttributes = RU, xz.editorAttributes = AU, xz.lineWrapping = xz.contentAttributes.of({
      class: "cm-lineWrapping"
    }), xz.announce = WT.B.define();
    const dz = 4096,
      wz = {};
    class tz {
      constructor(TT, UT, mT, WT, zT, MT) {
        this.from = TT, this.to = UT, this.dir = mT, this.isolates = WT, this.fresh = zT, this.order = MT
      }
      static update(TT, UT) {
        if (UT.empty && !TT.some((TT => TT.fresh))) return TT;
        let mT = [],
          WT = TT.length ? TT[TT.length - 1].dir : kU.LTR;
        for (let zT = Math.max(0, TT.length - 10); zT < TT.length; zT++) {
          let MT = TT[zT];
          MT.dir != WT || UT.touchesRange(MT.from, MT.to) || mT.push(new tz(UT.mapPos(MT.from, 1), UT.mapPos(MT.to, -1), MT.dir, MT.isolates, !1, MT.order))
        }
        return mT
      }
    }

    function az(TT, UT, mT) {
      for (let WT = TT.state.facet(UT), zT = WT.length - 1; zT >= 0; zT--) {
        let UT = WT[zT],
          MT = "function" == typeof UT ? UT(TT) : UT;
        MT && YT(MT, mT)
      }
      return mT
    }
    const yz = eT.mac ? "mac" : eT.windows ? "win" : eT.linux ? "linux" : "key";

    function Xz(TT, UT, mT) {
      return UT.altKey && (TT = "Alt-" + TT), UT.ctrlKey && (TT = "Ctrl-" + TT), UT.metaKey && (TT = "Meta-" + TT), !1 !== mT && UT.shiftKey && (TT = "Shift-" + TT), TT
    }
    const Iz = WT.u.default(xz.domEventHandlers({
        keydown: (TT, UT) => rz(Fz(UT.state), TT, UT, "editor")
      })),
      Qz = WT.o.define({
        enables: Iz
      }),
      sz = new WeakMap;

    function Fz(TT) {
      let UT = TT.facet(Qz),
        mT = sz.get(UT);
      return mT || sz.set(UT, mT = function(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yz,
          mT = Object.create(null),
          WT = Object.create(null),
          zT = (TT, UT) => {
            let mT = WT[TT];
            if (null == mT) WT[TT] = UT;
            else if (mT != UT) throw new Error("Key binding " + TT + " is used both as a regular binding and as a multi-stroke prefix")
          },
          MT = (TT, WT, MT, gT, nT) => {
            var HT, kT;
            let jT = mT[TT] || (mT[TT] = Object.create(null)),
              lT = WT.split(/ (?!$)/).map((TT => function(TT, UT) {
                const mT = TT.split(/-(?!$)/);
                let WT, zT, MT, gT, nT = mT[mT.length - 1];
                "Space" == nT && (nT = " ");
                for (let HT = 0; HT < mT.length - 1; ++HT) {
                  const TT = mT[HT];
                  if (/^(cmd|meta|m)$/i.test(TT)) gT = !0;
                  else if (/^a(lt)?$/i.test(TT)) WT = !0;
                  else if (/^(c|ctrl|control)$/i.test(TT)) zT = !0;
                  else if (/^s(hift)?$/i.test(TT)) MT = !0;
                  else {
                    if (!/^mod$/i.test(TT)) throw new Error("Unrecognized modifier name: " + TT);
                    "mac" == UT ? gT = !0 : zT = !0
                  }
                }
                return WT && (nT = "Alt-" + nT), zT && (nT = "Ctrl-" + nT), gT && (nT = "Meta-" + nT), MT && (nT = "Shift-" + nT), nT
              }(TT, UT)));
            for (let UT = 1; UT < lT.length; UT++) {
              let mT = lT.slice(0, UT).join(" ");
              zT(mT, !0), jT[mT] || (jT[mT] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [UT => {
                  let WT = Vz = {
                    view: UT,
                    prefix: mT,
                    scope: TT
                  };
                  return setTimeout((() => {
                    Vz == WT && (Vz = null)
                  }), uz), !0
                }]
              })
            }
            let LT = lT.join(" ");
            zT(LT, !1);
            let pT = jT[LT] || (jT[LT] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (kT = null === (HT = jT._any) || void 0 === HT ? void 0 : HT.run) || void 0 === kT ? void 0 : kT.slice()) || []
            });
            MT && pT.run.push(MT), gT && (pT.preventDefault = !0), nT && (pT.stopPropagation = !0)
          };
        for (let gT of TT) {
          let TT = gT.scope ? gT.scope.split(" ") : ["editor"];
          if (gT.any)
            for (let UT of TT) {
              let TT = mT[UT] || (mT[UT] = Object.create(null));
              TT._any || (TT._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: WT
              } = gT;
              for (let UT in TT) TT[UT].run.push((TT => WT(TT, Cz)))
            }
          let WT = gT[UT] || gT.key;
          if (WT)
            for (let UT of TT) MT(UT, WT, gT.run, gT.preventDefault, gT.stopPropagation), gT.shift && MT(UT, "Shift-" + WT, gT.shift, gT.preventDefault, gT.stopPropagation)
        }
        return mT
      }(UT.reduce(((TT, UT) => TT.concat(UT)), []))), mT
    }

    function Pz(TT, UT, mT) {
      return rz(Fz(TT.state), UT, TT, mT)
    }
    let Vz = null;
    const uz = 4e3;
    let Cz = null;

    function rz(TT, UT, mT, zT) {
      Cz = UT;
      let kT = function(TT) {
          var UT = !(nT && TT.metaKey && TT.shiftKey && !TT.ctrlKey && !TT.altKey || HT && TT.shiftKey && TT.key && 1 == TT.key.length || "Unidentified" == TT.key) && TT.key || (TT.shiftKey ? gT : MT)[TT.keyCode] || TT.key || "Unidentified";
          return "Esc" == UT && (UT = "Escape"), "Del" == UT && (UT = "Delete"), "Left" == UT && (UT = "ArrowLeft"), "Up" == UT && (UT = "ArrowUp"), "Right" == UT && (UT = "ArrowRight"), "Down" == UT && (UT = "ArrowDown"), UT
        }(UT),
        jT = (0, WT.M)(kT, 0),
        lT = (0, WT.P)(jT) == kT.length && " " != kT,
        LT = "",
        pT = !1,
        BT = !1,
        ZT = !1;
      Vz && Vz.view == mT && Vz.scope == zT && (LT = Vz.prefix + " ", BW.indexOf(UT.keyCode) < 0 && (BT = !0, Vz = null));
      let cT, vT, fT = new Set,
        qT = TT => {
          if (TT) {
            for (let UT of TT.run)
              if (!fT.has(UT) && (fT.add(UT), UT(mT))) return TT.stopPropagation && (ZT = !0), !0;
            TT.preventDefault && (TT.stopPropagation && (ZT = !0), BT = !0)
          }
          return !1
        },
        iT = TT[zT];
      return iT && (qT(iT[LT + Xz(kT, UT, !lT)]) ? pT = !0 : !lT || !(UT.altKey || UT.metaKey || UT.ctrlKey) || eT.windows && UT.ctrlKey && UT.altKey || eT.mac && UT.altKey && !UT.ctrlKey && !UT.metaKey || !(cT = MT[UT.keyCode]) || cT == kT ? lT && UT.shiftKey && qT(iT[LT + Xz(kT, UT, !0)]) && (pT = !0) : (qT(iT[LT + Xz(cT, UT, !0)]) || UT.shiftKey && (vT = gT[UT.keyCode]) != kT && vT != cT && qT(iT[LT + Xz(vT, UT, !1)])) && (pT = !0), !pT && qT(iT._any) && (pT = !0)), BT && (pT = !0), pT && ZT && UT.stopPropagation(), Cz = null, pT
    }
    class Kz {
      constructor(TT, UT, mT, WT, zT) {
        this.className = TT, this.left = UT, this.top = mT, this.width = WT, this.height = zT
      }
      draw() {
        let TT = document.createElement("div");
        return TT.className = this.className, this.adjust(TT), TT
      }
      update(TT, UT) {
        return UT.className == this.className && (this.adjust(TT), !0)
      }
      adjust(TT) {
        TT.style.left = this.left + "px", TT.style.top = this.top + "px", null != this.width && (TT.style.width = this.width + "px"), TT.style.height = this.height + "px"
      }
      eq(TT) {
        return this.left == TT.left && this.top == TT.top && this.width == TT.width && this.height == TT.height && this.className == TT.className
      }
      static forRange(TT, UT, mT) {
        if (mT.empty) {
          let WT = TT.coordsAtPos(mT.head, mT.assoc || 1);
          if (!WT) return [];
          let zT = Sz(TT);
          return [new Kz(UT, WT.left - zT.left, WT.top - zT.top, null, WT.bottom - WT.top)]
        }
        return function(TT, UT, mT) {
          if (mT.to <= TT.viewport.from || mT.from >= TT.viewport.to) return [];
          let WT = Math.max(mT.from, TT.viewport.from),
            zT = Math.min(mT.to, TT.viewport.to),
            MT = TT.textDirection == kU.LTR,
            gT = TT.contentDOM,
            nT = gT.getBoundingClientRect(),
            HT = Sz(TT),
            kT = gT.querySelector(".cm-line"),
            jT = kT && window.getComputedStyle(kT),
            lT = nT.left + (jT ? parseInt(jT.paddingLeft) + Math.min(0, parseInt(jT.textIndent)) : 0),
            LT = nT.right - (jT ? parseInt(jT.paddingRight) : 0),
            pT = Km(TT, WT, 1),
            BT = Km(TT, zT, -1),
            ZT = pT.type == aT.Text ? pT : null,
            cT = BT.type == aT.Text ? BT : null;
          ZT && (TT.lineWrapping || pT.widgetLineBreaks) && (ZT = Gz(TT, WT, 1, ZT));
          cT && (TT.lineWrapping || BT.widgetLineBreaks) && (cT = Gz(TT, zT, -1, cT));
          if (ZT && cT && ZT.from == cT.from && ZT.to == cT.to) return fT(qT(mT.from, mT.to, ZT));
          {
            let UT = ZT ? qT(mT.from, null, ZT) : iT(pT, !1),
              WT = cT ? qT(null, mT.to, cT) : iT(BT, !0),
              zT = [];
            return (ZT || pT).to < (cT || BT).from - (ZT && cT ? 1 : 0) || pT.widgetLineBreaks > 1 && UT.bottom + TT.defaultLineHeight / 2 < WT.top ? zT.push(vT(lT, UT.bottom, LT, WT.top)) : UT.bottom < WT.top && TT.elementAtHeight((UT.bottom + WT.top) / 2).type == aT.Text && (UT.bottom = WT.top = (UT.bottom + WT.top) / 2), fT(UT).concat(zT).concat(fT(WT))
          }

          function vT(TT, mT, WT, zT) {
            return new Kz(UT, TT - HT.left, mT - HT.top, Math.max(0, WT - TT), zT - mT)
          }

          function fT(TT) {
            let {
              top: UT,
              bottom: mT,
              horizontal: WT
            } = TT, zT = [];
            for (let MT = 0; MT < WT.length; MT += 2) zT.push(vT(WT[MT], UT, WT[MT + 1], mT));
            return zT
          }

          function qT(UT, mT, WT) {
            let zT = 1e9,
              gT = -1e9,
              nT = [];

            function HT(UT, mT, HT, kT, jT) {
              let pT = TT.coordsAtPos(UT, UT == WT.to ? -2 : 2),
                BT = TT.coordsAtPos(HT, HT == WT.from ? 2 : -2);
              pT && BT && (zT = Math.min(pT.top, BT.top, zT), gT = Math.max(pT.bottom, BT.bottom, gT), jT == kU.LTR ? nT.push(MT && mT ? lT : pT.left, MT && kT ? LT : BT.right) : nT.push(!MT && kT ? lT : BT.left, !MT && mT ? LT : pT.right))
            }
            let kT = null !== UT && void 0 !== UT ? UT : WT.from,
              jT = null !== mT && void 0 !== mT ? mT : WT.to;
            for (let MT of TT.M6)
              if (MT.to > kT && MT.from < jT)
                for (let WT = Math.max(MT.from, kT), zT = Math.min(MT.to, jT);;) {
                  let MT = TT.state.doc.lineAt(WT);
                  for (let gT of TT.bidiSpans(MT)) {
                    let TT = gT.from + MT.from,
                      nT = gT.to + MT.from;
                    if (TT >= zT) break;
                    nT > WT && HT(Math.max(TT, WT), null == UT && TT <= kT, Math.min(nT, zT), null == mT && nT >= jT, gT.dir)
                  }
                  if (WT = MT.to + 1, WT >= zT) break
                }
            return 0 == nT.length && HT(kT, null == UT, jT, null == mT, TT.textDirection), {
              top: zT,
              bottom: gT,
              horizontal: nT
            }
          }

          function iT(TT, UT) {
            let mT = nT.top + (UT ? TT.top : TT.bottom);
            return {
              top: mT,
              bottom: mT,
              horizontal: []
            }
          }
        }(TT, UT, mT)
      }
    }

    function Sz(TT) {
      let UT = TT.scrollDOM.getBoundingClientRect();
      return {
        left: (TT.textDirection == kU.LTR ? UT.left : UT.right - TT.scrollDOM.clientWidth * TT.scaleX) - TT.scrollDOM.scrollLeft * TT.scaleX,
        top: UT.top - TT.scrollDOM.scrollTop * TT.scaleY
      }
    }

    function Gz(TT, UT, mT, WT) {
      let zT = TT.coordsAtPos(UT, 2 * mT);
      if (!zT) return WT;
      let MT = TT.dom.getBoundingClientRect(),
        gT = (zT.top + zT.bottom) / 2,
        nT = TT.posAtCoords({
          x: MT.left + 1,
          y: gT
        }),
        HT = TT.posAtCoords({
          x: MT.right - 1,
          y: gT
        });
      return null == nT || null == HT ? WT : {
        from: Math.max(WT.from, Math.min(nT, HT)),
        to: Math.min(WT.to, Math.max(nT, HT))
      }
    }
    class Nz {
      constructor(TT, UT) {
        this.view = TT, this.layer = UT, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = TT.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), UT.above && this.dom.classList.add("cm-layer-above"), UT.class && this.dom.classList.add(UT.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(TT.state), TT.requestMeasure(this.measureReq), UT.mount && UT.mount(this.dom, TT)
      }
      update(TT) {
        TT.startState.facet(Ez) != TT.state.facet(Ez) && this.setOrder(TT.state), (this.layer.update(TT, this.dom) || TT.geometryChanged) && (this.scale(), TT.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(TT) {
        !1 !== this.layer.updateOnDocViewUpdate && TT.requestMeasure(this.measureReq)
      }
      setOrder(TT) {
        let UT = 0,
          mT = TT.facet(Ez);
        for (; UT < mT.length && mT[UT] != this.layer;) UT++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - UT)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: TT,
          scaleY: UT
        } = this.view;
        TT == this.scaleX && UT == this.scaleY || (this.scaleX = TT, this.scaleY = UT, this.dom.style.transform = `scale(${1/TT}, ${1/UT})`)
      }
      draw(TT) {
        if (TT.length != this.drawn.length || TT.some(((TT, UT) => {
            return mT = TT, WT = this.drawn[UT], !(mT.constructor == WT.constructor && mT.eq(WT));
            var mT, WT
          }))) {
          let UT = this.dom.firstChild,
            mT = 0;
          for (let WT of TT) WT.update && UT && WT.constructor && this.drawn[mT].constructor && WT.update(UT, this.drawn[mT]) ? (UT = UT.nextSibling, mT++) : this.dom.insertBefore(WT.draw(), UT);
          for (; UT;) {
            let TT = UT.nextSibling;
            UT.remove(), UT = TT
          }
          this.drawn = TT, eT.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const Ez = WT.o.define();

    function hz(TT) {
      return [DU.define((UT => new Nz(UT, TT))), Ez.of(TT)]
    }
    const Dz = WT.o.define({
      combine: TT => (0, WT.Q)(TT, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (TT, UT) => Math.min(TT, UT),
        drawRangeCursor: (TT, UT) => TT || UT
      })
    });

    function oz() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Dz.of(TT), Rz, UM, mM, uU.of(!0)]
    }

    function Az(TT) {
      return TT.startState.facet(Dz) != TT.state.facet(Dz)
    }
    const Rz = hz({
      above: !0,
      markers(TT) {
        let {
          state: UT
        } = TT, mT = UT.facet(Dz), zT = [];
        for (let MT of UT.selection.hZ) {
          let gT = MT == UT.selection.main;
          if (MT.empty || mT.drawRangeCursor && !(gT && eT.ios && mT.iosSelectionHandles)) {
            let UT = gT ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              mT = MT.empty ? MT : WT.l.cursor(MT.head, MT.assoc);
            for (let WT of Kz.forRange(TT, UT, mT)) zT.push(WT)
          }
        }
        return zT
      },
      update(TT, UT) {
        TT.transactions.some((TT => TT.selection)) && (UT.style.animationName = "cm-blink" == UT.style.animationName ? "cm-blink2" : "cm-blink");
        let mT = Az(TT);
        return mT && TM(TT.state, UT), TT.docChanged || TT.selectionSet || mT
      },
      mount(TT, UT) {
        TM(UT.state, TT)
      },
      class: "cm-cursorLayer"
    });

    function TM(TT, UT) {
      UT.style.animationDuration = TT.facet(Dz).cursorBlinkRate + "ms"
    }
    const UM = hz({
        above: !1,
        markers(TT) {
          let UT = [],
            {
              main: mT,
              hZ: zT
            } = TT.state.selection;
          for (let WT of zT)
            if (!WT.empty)
              for (let mT of Kz.forRange(TT, "cm-selectionBackground", WT)) UT.push(mT);
          if (eT.ios && !mT.empty && TT.state.facet(Dz).iosSelectionHandles) {
            for (let zT of Kz.forRange(TT, "cm-selectionHandle cm-selectionHandle-start", WT.l.cursor(mT.from, 1))) UT.push(zT);
            for (let zT of Kz.forRange(TT, "cm-selectionHandle cm-selectionHandle-end", WT.l.cursor(mT.to, 1))) UT.push(zT)
          }
          return UT
        },
        update: (TT, UT) => TT.docChanged || TT.selectionSet || TT.viewportChanged || Az(TT),
        class: "cm-selectionLayer"
      }),
      mM = WT.u.highest(xz.theme({
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
      WM = WT.B.define({
        map: (TT, UT) => null == TT ? null : UT.mapPos(TT)
      }),
      zM = WT.E.define({
        create: () => null,
        update: (TT, UT) => (null != TT && (TT = UT.changes.mapPos(TT)), UT.effects.reduce(((TT, UT) => UT.is(WM) ? UT.value : TT), TT))
      }),
      MM = DU.fromClass(class {
        constructor(TT) {
          this.view = TT, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(TT) {
          var UT;
          let mT = TT.state.field(zM);
          null == mT ? null != this.cursor && (null === (UT = this.cursor) || void 0 === UT || UT.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (TT.startState.field(zM) != mT || TT.docChanged || TT.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: TT
          } = this, UT = TT.state.field(zM), mT = null != UT && TT.coordsAtPos(UT);
          if (!mT) return null;
          let WT = TT.scrollDOM.getBoundingClientRect();
          return {
            left: mT.left - WT.left + TT.scrollDOM.scrollLeft * TT.scaleX,
            top: mT.top - WT.top + TT.scrollDOM.scrollTop * TT.scaleY,
            height: mT.bottom - mT.top
          }
        }
        drawCursor(TT) {
          if (this.cursor) {
            let {
              scaleX: UT,
              scaleY: mT
            } = this.view;
            TT ? (this.cursor.style.left = TT.left / UT + "px", this.cursor.style.top = TT.top / mT + "px", this.cursor.style.height = TT.height / mT + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(TT) {
          this.view.state.field(zM) != TT && this.view.dispatch({
            effects: WM.of(TT)
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

    function gM() {
      return [zM, MM]
    }

    function nM(TT, UT, mT, WT, zT) {
      UT.lastIndex = 0;
      for (let MT, gT = TT.iterRange(mT, WT), nT = mT; !gT.next().done; nT += gT.value.length)
        if (!gT.lineBreak)
          for (; MT = UT.exec(gT.value);) zT(nT + MT.index, MT)
    }
    class HM {
      constructor(TT) {
        const {
          regexp: UT,
          decoration: mT,
          decorate: WT,
          boundary: zT,
          maxLength: MT = 1e3
        } = TT;
        if (!UT.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = UT, WT) this.addMatch = (TT, UT, mT, zT) => WT(zT, mT, mT + TT[0].length, TT, UT);
        else if ("function" == typeof mT) this.addMatch = (TT, UT, WT, zT) => {
          let MT = mT(TT, UT, WT);
          MT && zT(WT, WT + TT[0].length, MT)
        };
        else {
          if (!mT) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (TT, UT, WT, zT) => zT(WT, WT + TT[0].length, mT)
        }
        this.boundary = zT, this.maxLength = MT
      }
      createDeco(TT) {
        let UT = new WT.w,
          mT = UT.add.bind(UT);
        for (let {
            from: WT,
            to: zT
          }
          of
          function(TT, UT) {
            let mT = TT.M6;
            if (1 == mT.length && mT[0].from == TT.viewport.from && mT[0].to == TT.viewport.to) return mT;
            let WT = [];
            for (let {
                from: zT,
                to: MT
              }
              of mT) zT = Math.max(TT.state.doc.lineAt(zT).from, zT - UT), MT = Math.min(TT.state.doc.lineAt(MT).to, MT + UT), WT.length && WT[WT.length - 1].to >= zT ? WT[WT.length - 1].to = MT : WT.push({
              from: zT,
              to: MT
            });
            return WT
          }(TT, this.maxLength)) nM(TT.state.doc, this.regexp, WT, zT, ((UT, WT) => this.addMatch(WT, TT, UT, mT)));
        return UT.finish()
      }
      updateDeco(TT, UT) {
        let mT = 1e9,
          WT = -1;
        return TT.docChanged && TT.changes.iterChanges(((UT, zT, MT, gT) => {
          gT >= TT.view.viewport.from && MT <= TT.view.viewport.to && (mT = Math.min(MT, mT), WT = Math.max(gT, WT))
        })), TT.viewportMoved || WT - mT > 1e3 ? this.createDeco(TT.view) : WT > -1 ? this.updateRange(TT.view, UT.map(TT.changes), mT, WT) : UT
      }
      updateRange(TT, UT, mT, WT) {
        for (let zT of TT.M6) {
          let MT = Math.max(zT.from, mT),
            gT = Math.min(zT.to, WT);
          if (gT >= MT) {
            let mT = TT.state.doc.lineAt(MT),
              WT = mT.to < gT ? TT.state.doc.lineAt(gT) : mT,
              nT = Math.max(zT.from, mT.from),
              HT = Math.min(zT.to, WT.to);
            if (this.boundary) {
              for (; MT > mT.from; MT--)
                if (this.boundary.test(mT.text[MT - 1 - mT.from])) {
                  nT = MT;
                  break
                } for (; gT < WT.to; gT++)
                if (this.boundary.test(WT.text[gT - WT.from])) {
                  HT = gT;
                  break
                }
            }
            let kT, jT = [],
              lT = (TT, UT, mT) => jT.push(mT.range(TT, UT));
            if (mT == WT)
              for (this.regexp.lastIndex = nT - mT.from;
                (kT = this.regexp.exec(mT.text)) && kT.index < HT - mT.from;) this.addMatch(kT, TT, kT.index + mT.from, lT);
            else nM(TT.state.doc, this.regexp, nT, HT, ((UT, mT) => this.addMatch(mT, TT, UT, lT)));
            UT = UT.update({
              filterFrom: nT,
              filterTo: HT,
              filter: (TT, UT) => TT < nT || UT > HT,
              add: jT
            })
          }
        }
        return UT
      }
    }
    const kM = null != /x/.unicode ? "gu" : "g",
      jM = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", kM),
      lM = {
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
    let LM = null;
    const pM = WT.o.define({
      combine(TT) {
        let UT = (0, WT.Q)(TT, {
          render: null,
          specialChars: jM,
          addSpecialChars: null
        });
        return (UT.replaceTabs = ! function() {
          var TT;
          if (null == LM && "undefined" != typeof document && document.body) {
            let UT = document.body.style;
            LM = null != (null !== (TT = UT.tabSize) && void 0 !== TT ? TT : UT.MozTabSize)
          }
          return LM || !1
        }()) && (UT.specialChars = new RegExp("\t|" + UT.specialChars.source, kM)), UT.addSpecialChars && (UT.specialChars = new RegExp(UT.specialChars.source + "|" + UT.addSpecialChars.source, kM)), UT
      }
    });

    function BM() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [pM.of(TT), ZM || (ZM = DU.fromClass(class {
        constructor(TT) {
          this.view = TT, this.HW = yT.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(TT.state.facet(pM)), this.HW = this.decorator.createDeco(TT)
        }
        makeDecorator(TT) {
          return new HM({
            regexp: TT.specialChars,
            decoration: (UT, mT, zT) => {
              let {
                doc: MT
              } = mT.state, gT = (0, WT.M)(UT[0], 0);
              if (9 == gT) {
                let TT = MT.lineAt(zT),
                  UT = mT.state.tabSize,
                  gT = (0, WT.S)(TT.text, UT, zT - TT.from);
                return yT.replace({
                  widget: new vM((UT - gT % UT) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[gT] || (this.decorationCache[gT] = yT.replace({
                widget: new cM(TT, gT)
              }))
            },
            boundary: TT.replaceTabs ? void 0 : /[^]/
          })
        }
        update(TT) {
          let UT = TT.state.facet(pM);
          TT.startState.facet(pM) != UT ? (this.decorator = this.makeDecorator(UT), this.HW = this.decorator.createDeco(TT.view)) : this.HW = this.decorator.updateDeco(TT, this.HW)
        }
      }, {
        HW: TT => TT.HW
      }))]
    }
    let ZM = null;
    class cM extends tT {
      constructor(TT, UT) {
        super(), this.options = TT, this.code = UT
      }
      eq(TT) {
        return TT.code == this.code
      }
      toDOM(TT) {
        let UT = function(TT) {
            return TT >= 32 ? "\u2022" : 10 == TT ? "\u2424" : String.fromCharCode(9216 + TT)
          }(this.code),
          mT = TT.state.phrase("Control character") + " " + (lM[this.code] || "0x" + this.code.toString(16)),
          WT = this.options.render && this.options.render(this.code, mT, UT);
        if (WT) return WT;
        let zT = document.createElement("span");
        return zT.textContent = UT, zT.title = mT, zT.setAttribute("aria-label", mT), zT.className = "cm-specialChar", zT
      }
      ignoreEvent() {
        return !1
      }
    }
    class vM extends tT {
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

    function fM() {
      return iM
    }
    const qM = yT.line({
        class: "cm-activeLine"
      }),
      iM = DU.fromClass(class {
        constructor(TT) {
          this.HW = this.getDeco(TT)
        }
        update(TT) {
          (TT.docChanged || TT.selectionSet) && (this.HW = this.getDeco(TT.view))
        }
        getDeco(TT) {
          let UT = -1,
            mT = [];
          for (let WT of TT.state.selection.hZ) {
            let zT = TT.lineBlockAt(WT.head);
            zT.from > UT && (mT.push(qM.range(zT.from)), UT = zT.from)
          }
          return yT.set(mT)
        }
      }, {
        HW: TT => TT.HW
      });
    class bM extends tT {
      constructor(TT) {
        super(), this.content = TT
      }
      toDOM(TT) {
        let UT = document.createElement("span");
        return UT.className = "cm-placeholder", UT.style.pointerEvents = "none", UT.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(TT) : this.content.cloneNode(!0)), UT.setAttribute("aria-hidden", "true"), UT
      }
      coordsAt(TT) {
        let UT = TT.firstChild ? rT(TT.firstChild) : [];
        if (!UT.length) return null;
        let mT = window.getComputedStyle(TT.parentNode),
          WT = hT(UT[0], "rtl" != mT.direction),
          zT = parseInt(mT.lineHeight);
        return WT.bottom - WT.top > 1.5 * zT ? {
          left: WT.left,
          right: WT.right,
          top: WT.top,
          bottom: WT.top + zT
        } : WT
      }
      ignoreEvent() {
        return !1
      }
    }

    function OM(TT) {
      let UT = DU.fromClass(class {
        constructor(UT) {
          this.view = UT, this.placeholder = TT ? yT.set([yT.widget({
            widget: new bM(TT),
            side: 1
          }).range(0)]) : yT.none
        }
        get HW() {
          return this.view.state.doc.length ? yT.none : this.placeholder
        }
      }, {
        HW: TT => TT.HW
      });
      return "string" == typeof TT ? [UT, xz.contentAttributes.of({
        "aria-placeholder": TT
      })] : UT
    }
    const eM = 2e3;

    function YM(TT, UT) {
      let mT = TT.posAtCoords({
          x: UT.clientX,
          y: UT.clientY
        }, !1),
        zT = TT.state.doc.lineAt(mT),
        MT = mT - zT.from,
        gT = MT > eM ? -1 : MT == zT.length ? function(TT, UT) {
          let mT = TT.coordsAtPos(TT.viewport.from);
          return mT ? Math.round(Math.abs((mT.left - UT) / TT.defaultCharacterWidth)) : -1
        }(TT, UT.clientX) : (0, WT.S)(zT.text, TT.state.tabSize, mT - zT.from);
      return {
        line: zT.number,
        col: gT,
        off: MT
      }
    }

    function JM(TT, UT) {
      let mT = YM(TT, UT),
        zT = TT.state.selection;
      return mT ? {
        update(TT) {
          if (TT.docChanged) {
            let UT = TT.changes.mapPos(TT.startState.doc.line(mT.line).from),
              WT = TT.state.doc.lineAt(UT);
            mT = {
              line: WT.number,
              col: mT.col,
              off: Math.min(mT.off, WT.length)
            }, zT = zT.map(TT.changes)
          }
        },
        get(UT, MT, gT) {
          let nT = YM(TT, UT);
          if (!nT) return zT;
          let HT = function(TT, UT, mT) {
            let zT = Math.min(UT.line, mT.line),
              MT = Math.max(UT.line, mT.line),
              gT = [];
            if (UT.off > eM || mT.off > eM || UT.col < 0 || mT.col < 0) {
              let nT = Math.min(UT.off, mT.off),
                HT = Math.max(UT.off, mT.off);
              for (let UT = zT; UT <= MT; UT++) {
                let mT = TT.doc.line(UT);
                mT.length <= HT && gT.push(WT.l.range(mT.from + nT, mT.to + HT))
              }
            } else {
              let nT = Math.min(UT.col, mT.col),
                HT = Math.max(UT.col, mT.col);
              for (let UT = zT; UT <= MT; UT++) {
                let mT = TT.doc.line(UT),
                  zT = (0, WT.Y)(mT.text, nT, TT.tabSize, !0);
                if (zT < 0) gT.push(WT.l.cursor(mT.to));
                else {
                  let UT = (0, WT.Y)(mT.text, HT, TT.tabSize);
                  gT.push(WT.l.range(mT.from + zT, mT.from + UT))
                }
              }
            }
            return gT
          }(TT.state, mT, nT);
          return HT.length ? gT ? WT.l.create(HT.concat(zT.hZ)) : WT.l.create(HT) : zT
        }
      } : null
    }

    function xM(TT) {
      let UT = (null === TT || void 0 === TT ? void 0 : TT.eventFilter) || (TT => TT.altKey && 0 == TT.button);
      return xz.mouseSelectionStyle.of(((TT, mT) => UT(mT) ? JM(TT, mT) : null))
    }
    const dM = {
        Alt: [18, TT => !!TT.altKey],
        Control: [17, TT => !!TT.ctrlKey],
        Shift: [16, TT => !!TT.shiftKey],
        Meta: [91, TT => !!TT.metaKey]
      },
      wM = {
        style: "cursor: crosshair"
      };

    function tM() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [UT, mT] = dM[TT.key || "Alt"],
        WT = DU.fromClass(class {
          constructor(TT) {
            this.view = TT, this.isDown = !1
          }
          set(TT) {
            this.isDown != TT && (this.isDown = TT, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(TT) {
              this.set(TT.keyCode == UT || mT(TT))
            },
            keyup(TT) {
              TT.keyCode != UT && mT(TT) || this.set(!1)
            },
            mousemove(TT) {
              this.set(mT(TT))
            }
          }
        });
      return [WT, xz.contentAttributes.of((TT => {
        var UT;
        return (null === (UT = TT.plugin(WT)) || void 0 === UT ? void 0 : UT.isDown) ? wM : null
      }))]
    }
    const aM = "-10000px";
    class yM {
      constructor(TT, UT, mT, WT) {
        this.facet = UT, this.createTooltipView = mT, this.removeTooltipView = WT, this.input = TT.state.facet(UT), this.tooltips = this.input.filter((TT => TT));
        let zT = null;
        this.tooltipViews = this.tooltips.map((TT => zT = mT(TT, zT)))
      }
      update(TT, UT) {
        var mT;
        let WT = TT.state.facet(this.facet),
          zT = WT.filter((TT => TT));
        if (WT === this.input) {
          for (let UT of this.tooltipViews) UT.update && UT.update(TT);
          return !1
        }
        let MT = [],
          gT = UT ? [] : null;
        for (let nT = 0; nT < zT.length; nT++) {
          let mT = zT[nT],
            WT = -1;
          if (mT) {
            for (let TT = 0; TT < this.tooltips.length; TT++) {
              let UT = this.tooltips[TT];
              UT && UT.create == mT.create && (WT = TT)
            }
            if (WT < 0) MT[nT] = this.createTooltipView(mT, nT ? MT[nT - 1] : null), gT && (gT[nT] = !!mT.above);
            else {
              let mT = MT[nT] = this.tooltipViews[WT];
              gT && (gT[nT] = UT[WT]), mT.update && mT.update(TT)
            }
          }
        }
        for (let nT of this.tooltipViews) MT.indexOf(nT) < 0 && (this.removeTooltipView(nT), null === (mT = nT.destroy) || void 0 === mT || mT.call(nT));
        return UT && (gT.forEach(((TT, mT) => UT[mT] = TT)), UT.length = gT.length), this.input = WT, this.tooltips = zT, this.tooltipViews = MT, !0
      }
    }

    function XM(TT) {
      let UT = TT.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: UT.clientHeight,
        right: UT.clientWidth
      }
    }
    const IM = WT.o.define({
        combine: TT => {
          var UT, mT, WT;
          return {
            position: eT.ios ? "absolute" : (null === (UT = TT.find((TT => TT.position))) || void 0 === UT ? void 0 : UT.position) || "fixed",
            parent: (null === (mT = TT.find((TT => TT.parent))) || void 0 === mT ? void 0 : mT.parent) || null,
            tooltipSpace: (null === (WT = TT.find((TT => TT.tooltipSpace))) || void 0 === WT ? void 0 : WT.tooltipSpace) || XM
          }
        }
      }),
      QM = new WeakMap,
      sM = DU.fromClass(class {
        constructor(TT) {
          this.view = TT, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let UT = TT.state.facet(IM);
          this.position = UT.position, this.parent = UT.parent, this.classes = TT.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new yM(TT, uM, ((TT, UT) => this.createTooltip(TT, UT)), (TT => {
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
          let UT = this.manager.update(TT, this.above);
          UT && this.observeIntersection();
          let mT = UT || TT.geometryChanged,
            WT = TT.state.facet(IM);
          if (WT.position != this.position && !this.madeAbsolute) {
            this.position = WT.position;
            for (let TT of this.manager.tooltipViews) TT.dom.style.position = this.position;
            mT = !0
          }
          if (WT.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = WT.parent, this.createContainer();
            for (let TT of this.manager.tooltipViews) this.container.appendChild(TT.dom);
            mT = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          mT && this.maybeMeasure()
        }
        createTooltip(TT, UT) {
          let mT = TT.create(this.view),
            WT = UT ? UT.dom : null;
          if (mT.dom.classList.add("cm-tooltip"), TT.arrow && !mT.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let TT = document.createElement("div");
            TT.className = "cm-tooltip-arrow", mT.dom.appendChild(TT)
          }
          return mT.dom.style.position = this.position, mT.dom.style.top = aM, mT.dom.style.left = "0px", this.container.insertBefore(mT.dom, WT), mT.mount && mT.mount(this.view), this.resizeObserver && this.resizeObserver.observe(mT.dom), mT
        }
        destroy() {
          var TT, UT, mT;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let WT of this.manager.tooltipViews) WT.dom.remove(), null === (TT = WT.destroy) || void 0 === TT || TT.call(WT);
          this.parent && this.container.remove(), null === (UT = this.resizeObserver) || void 0 === UT || UT.disconnect(), null === (mT = this.intersectionObserver) || void 0 === mT || mT.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let TT = 1,
            UT = 1,
            mT = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: TT
            } = this.manager.tooltipViews[0];
            if (eT.safari) {
              let UT = TT.getBoundingClientRect();
              mT = Math.abs(UT.top + 1e4) > 1 || Math.abs(UT.left) > 1
            } else mT = !!TT.offsetParent && TT.offsetParent != this.container.ownerDocument.body
          }
          if (mT || "absolute" == this.position)
            if (this.parent) {
              let mT = this.parent.getBoundingClientRect();
              mT.width && mT.height && (TT = mT.width / this.parent.offsetWidth, UT = mT.height / this.parent.offsetHeight)
            } else({
              scaleX: TT,
              scaleY: UT
            } = this.view.viewState);
          let WT = this.view.scrollDOM.getBoundingClientRect(),
            zT = nm(this.view);
          return {
            visible: {
              left: WT.left + zT.left,
              top: WT.top + zT.top,
              right: WT.right - zT.right,
              bottom: WT.bottom - zT.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((TT, UT) => {
              let mT = this.manager.tooltipViews[UT];
              return mT.getCoords ? mT.getCoords(TT.pos) : this.view.coordsAtPos(TT.pos)
            })),
            size: this.manager.tooltipViews.map((TT => {
              let {
                dom: UT
              } = TT;
              return UT.getBoundingClientRect()
            })),
            space: this.view.state.facet(IM).tooltipSpace(this.view),
            scaleX: TT,
            scaleY: UT,
            makeAbsolute: mT
          }
        }
        writeMeasure(TT) {
          var UT;
          if (TT.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let TT of this.manager.tooltipViews) TT.dom.style.position = "absolute"
          }
          let {
            visible: mT,
            space: WT,
            scaleX: zT,
            scaleY: MT
          } = TT, gT = [];
          for (let nT = 0; nT < this.manager.tooltips.length; nT++) {
            let HT = this.manager.tooltips[nT],
              kT = this.manager.tooltipViews[nT],
              {
                dom: jT
              } = kT,
              lT = TT.pos[nT],
              LT = TT.size[nT];
            if (!lT || !1 !== HT.clip && (lT.bottom <= Math.max(mT.top, WT.top) || lT.top >= Math.min(mT.bottom, WT.bottom) || lT.right < Math.max(mT.left, WT.left) - .1 || lT.left > Math.min(mT.right, WT.right) + .1)) {
              jT.style.top = aM;
              continue
            }
            let pT = HT.arrow ? kT.dom.querySelector(".cm-tooltip-arrow") : null,
              BT = pT ? 7 : 0,
              ZT = LT.right - LT.left,
              cT = null !== (UT = QM.get(kT)) && void 0 !== UT ? UT : LT.bottom - LT.top,
              vT = kT.offset || VM,
              fT = this.view.textDirection == kU.LTR,
              qT = LT.width > WT.right - WT.left ? fT ? WT.left : WT.right - LT.width : fT ? Math.max(WT.left, Math.min(lT.left - (pT ? 14 : 0) + vT.x, WT.right - ZT)) : Math.min(Math.max(WT.left, lT.left - ZT + (pT ? 14 : 0) - vT.x), WT.right - ZT),
              iT = this.above[nT];
            !HT.strictSide && (iT ? lT.top - cT - BT - vT.y < WT.top : lT.bottom + cT + BT + vT.y > WT.bottom) && iT == WT.bottom - lT.bottom > lT.top - WT.top && (iT = this.above[nT] = !iT);
            let bT = (iT ? lT.top - WT.top : WT.bottom - lT.bottom) - BT;
            if (bT < cT && !1 !== kT.resize) {
              if (bT < this.view.defaultLineHeight) {
                jT.style.top = aM;
                continue
              }
              QM.set(kT, cT), jT.style.height = (cT = bT) / MT + "px"
            } else jT.style.height && (jT.style.height = "");
            let OT = iT ? lT.top - cT - BT - vT.y : lT.bottom + BT + vT.y,
              eT = qT + ZT;
            if (!0 !== kT.overlap)
              for (let TT of gT) TT.left < eT && TT.right > qT && TT.top < OT + cT && TT.bottom > OT && (OT = iT ? TT.top - cT - 2 - BT : TT.bottom + BT + 2);
            if ("absolute" == this.position ? (jT.style.top = (OT - TT.parent.top) / MT + "px", FM(jT, (qT - TT.parent.left) / zT)) : (jT.style.top = OT / MT + "px", FM(jT, qT / zT)), pT) {
              let TT = lT.left + (fT ? vT.x : -vT.x) - (qT + 14 - 7);
              pT.style.left = TT / zT + "px"
            }!0 !== kT.overlap && gT.push({
              left: qT,
              top: OT,
              right: eT,
              bottom: OT + cT
            }), jT.classList.toggle("cm-tooltip-above", iT), jT.classList.toggle("cm-tooltip-below", !iT), kT.positioned && kT.positioned(TT.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let TT of this.manager.tooltipViews) TT.dom.style.top = aM
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function FM(TT, UT) {
      let mT = parseInt(TT.style.left, 10);
      (isNaN(mT) || Math.abs(UT - mT) > 1) && (TT.style.left = UT + "px")
    }
    const PM = xz.baseTheme({
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
      VM = {
        x: 0,
        y: 0
      },
      uM = WT.o.define({
        enables: [sM, PM]
      }),
      CM = WT.o.define({
        combine: TT => TT.reduce(((TT, UT) => TT.concat(UT)), [])
      });
    class rM {
      static create(TT) {
        return new rM(TT)
      }
      constructor(TT) {
        this.view = TT, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new yM(TT, CM, ((TT, UT) => this.createHostedView(TT, UT)), (TT => TT.dom.remove()))
      }
      createHostedView(TT, UT) {
        let mT = TT.create(this.view);
        return mT.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(mT.dom, UT ? UT.dom.nextSibling : this.dom.firstChild), this.mounted && mT.mount && mT.mount(this.view), mT
      }
      mount(TT) {
        for (let UT of this.manager.tooltipViews) UT.mount && UT.mount(TT);
        this.mounted = !0
      }
      positioned(TT) {
        for (let UT of this.manager.tooltipViews) UT.positioned && UT.positioned(TT)
      }
      update(TT) {
        this.manager.update(TT)
      }
      destroy() {
        var TT;
        for (let UT of this.manager.tooltipViews) null === (TT = UT.destroy) || void 0 === TT || TT.call(UT)
      }
      passProp(TT) {
        let UT;
        for (let mT of this.manager.tooltipViews) {
          let WT = mT[TT];
          if (void 0 !== WT)
            if (void 0 === UT) UT = WT;
            else if (UT !== WT) return
        }
        return UT
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
    const KM = uM.compute([CM], (TT => {
      let UT = TT.facet(CM);
      return 0 === UT.length ? null : {
        pos: Math.min(...UT.map((TT => TT.pos))),
        end: Math.max(...UT.map((TT => {
          var UT;
          return null !== (UT = TT.end) && void 0 !== UT ? UT : TT.pos
        }))),
        create: rM.create,
        above: UT[0].above,
        arrow: UT.some((TT => TT.arrow))
      }
    }));
    class SM {
      constructor(TT, UT, mT, WT, zT) {
        this.view = TT, this.source = UT, this.field = mT, this.setHover = WT, this.hoverTime = zT, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
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
          lastMove: UT
        } = this, mT = TT.docView.tile.nearest(UT.target);
        if (!mT) return;
        let WT, zT = 1;
        if (mT.isWidget()) WT = mT.posAtStart;
        else {
          if (WT = TT.posAtCoords(UT), null == WT) return;
          let mT = TT.coordsAtPos(WT);
          if (!mT || UT.y < mT.top || UT.y > mT.bottom || UT.x < mT.left - TT.defaultCharacterWidth || UT.x > mT.right + TT.defaultCharacterWidth) return;
          let MT = TT.bidiSpans(TT.state.doc.lineAt(WT)).find((TT => TT.from <= WT && TT.to >= WT)),
            gT = MT && MT.dir == kU.RTL ? -1 : 1;
          zT = UT.x < mT.left ? -gT : gT
        }
        let MT = this.source(TT, WT, zT);
        if (null === MT || void 0 === MT ? void 0 : MT.then) {
          let UT = this.pending = {
            pos: WT
          };
          MT.then((mT => {
            this.pending == UT && (this.pending = null, !mT || Array.isArray(mT) && !mT.length || TT.dispatch({
              effects: this.setHover.of(Array.isArray(mT) ? mT : [mT])
            }))
          }), (UT => GU(TT.state, UT, "hover tooltip")))
        } else !MT || Array.isArray(MT) && !MT.length || TT.dispatch({
          effects: this.setHover.of(Array.isArray(MT) ? MT : [MT])
        })
      }
      get tooltip() {
        let TT = this.view.plugin(sM),
          UT = TT ? TT.manager.tooltips.findIndex((TT => TT.create == rM.create)) : -1;
        return UT > -1 ? TT.manager.tooltipViews[UT] : null
      }
      mousemove(TT) {
        var UT, mT;
        this.lastMove = {
          x: TT.clientX,
          y: TT.clientY,
          target: TT.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: WT,
          tooltip: zT
        } = this;
        if (WT.length && zT && ! function(TT, UT) {
            let mT, {
              left: WT,
              right: zT,
              top: MT,
              bottom: gT
            } = TT.getBoundingClientRect();
            if (mT = TT.querySelector(".cm-tooltip-arrow")) {
              let TT = mT.getBoundingClientRect();
              MT = Math.min(TT.top, MT), gT = Math.max(TT.bottom, gT)
            }
            return UT.clientX >= WT - GM && UT.clientX <= zT + GM && UT.clientY >= MT - GM && UT.clientY <= gT + GM
          }(zT.dom, TT) || this.pending) {
          let {
            pos: zT
          } = WT[0] || this.pending, MT = null !== (mT = null === (UT = WT[0]) || void 0 === UT ? void 0 : UT.end) && void 0 !== mT ? mT : zT;
          (zT == MT ? this.view.posAtCoords(this.lastMove) == zT : function(TT, UT, mT, WT, zT) {
            let MT = TT.scrollDOM.getBoundingClientRect(),
              gT = TT.documentTop + TT.documentPadding.top + TT.contentHeight;
            if (MT.left > WT || MT.right < WT || MT.top > zT || Math.min(MT.bottom, gT) < zT) return !1;
            let nT = TT.posAtCoords({
              x: WT,
              y: zT
            }, !1);
            return nT >= UT && nT <= mT
          }(this.view, zT, MT, TT.clientX, TT.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(TT) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: UT
        } = this;
        if (UT.length) {
          let {
            tooltip: UT
          } = this;
          UT && UT.dom.contains(TT.relatedTarget) ? this.watchTooltipLeave(UT.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(TT) {
        let UT = mT => {
          TT.removeEventListener("mouseleave", UT), this.active.length && !this.view.dom.contains(mT.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        TT.addEventListener("mouseleave", UT)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const GM = 4;

    function NM(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        mT = WT.B.define(),
        zT = WT.E.define({
          create: () => [],
          update(TT, zT) {
            if (TT.length && (UT.hideOnChange && (zT.docChanged || zT.selection) ? TT = [] : UT.hideOn && (TT = TT.filter((TT => !UT.hideOn(zT, TT)))), zT.docChanged)) {
              let UT = [];
              for (let mT of TT) {
                let TT = zT.changes.mapPos(mT.pos, -1, WT.q.TrackDel);
                if (null != TT) {
                  let WT = Object.assign(Object.create(null), mT);
                  WT.pos = TT, null != WT.end && (WT.end = zT.changes.mapPos(WT.end)), UT.push(WT)
                }
              }
              TT = UT
            }
            for (let UT of zT.effects) UT.is(mT) && (TT = UT.value), UT.is(hM) && (TT = []);
            return TT
          },
          provide: TT => CM.from(TT)
        });
      return {
        active: zT,
        extension: [zT, DU.define((WT => new SM(WT, TT, zT, mT, UT.hoverTime || 300))), KM]
      }
    }

    function EM(TT, UT) {
      let mT = TT.plugin(sM);
      if (!mT) return null;
      let WT = mT.manager.tooltips.indexOf(UT);
      return WT < 0 ? null : mT.manager.tooltipViews[WT]
    }
    const hM = WT.B.define();
    const DM = WT.o.define({
      combine(TT) {
        let UT, mT;
        for (let WT of TT) UT = UT || WT.topContainer, mT = mT || WT.bottomContainer;
        return {
          topContainer: UT,
          bottomContainer: mT
        }
      }
    });

    function oM(TT, UT) {
      let mT = TT.plugin(AM),
        WT = mT ? mT.specs.indexOf(UT) : -1;
      return WT > -1 ? mT.panels[WT] : null
    }
    const AM = DU.fromClass(class {
      constructor(TT) {
        this.input = TT.state.facet(Ug), this.specs = this.input.filter((TT => TT)), this.panels = this.specs.map((UT => UT(TT)));
        let UT = TT.state.facet(DM);
        this.top = new RM(TT, !0, UT.topContainer), this.bottom = new RM(TT, !1, UT.bottomContainer), this.top.sync(this.panels.filter((TT => TT.top))), this.bottom.sync(this.panels.filter((TT => !TT.top)));
        for (let mT of this.panels) mT.dom.classList.add("cm-panel"), mT.mount && mT.mount()
      }
      update(TT) {
        let UT = TT.state.facet(DM);
        this.top.container != UT.topContainer && (this.top.sync([]), this.top = new RM(TT.view, !0, UT.topContainer)), this.bottom.container != UT.bottomContainer && (this.bottom.sync([]), this.bottom = new RM(TT.view, !1, UT.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let mT = TT.state.facet(Ug);
        if (mT != this.input) {
          let UT = mT.filter((TT => TT)),
            WT = [],
            zT = [],
            MT = [],
            gT = [];
          for (let mT of UT) {
            let UT, nT = this.specs.indexOf(mT);
            nT < 0 ? (UT = mT(TT.view), gT.push(UT)) : (UT = this.panels[nT], UT.update && UT.update(TT)), WT.push(UT), (UT.top ? zT : MT).push(UT)
          }
          this.specs = UT, this.panels = WT, this.top.sync(zT), this.bottom.sync(MT);
          for (let TT of gT) TT.dom.classList.add("cm-panel"), TT.mount && TT.mount()
        } else
          for (let WT of this.panels) WT.update && WT.update(TT)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: TT => xz.scrollMargins.of((UT => {
        let mT = UT.plugin(TT);
        return mT && {
          top: mT.top.scrollMargin(),
          bottom: mT.bottom.scrollMargin()
        }
      }))
    });
    class RM {
      constructor(TT, UT, mT) {
        this.view = TT, this.top = UT, this.container = mT, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(TT) {
        for (let UT of this.panels) UT.destroy && TT.indexOf(UT) < 0 && UT.destroy();
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
        for (let UT of this.panels)
          if (UT.dom.parentNode == this.dom) {
            for (; TT != UT.dom;) TT = Tg(TT);
            TT = TT.nextSibling
          } else this.dom.insertBefore(UT.dom, TT);
        for (; TT;) TT = Tg(TT)
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

    function Tg(TT) {
      let UT = TT.nextSibling;
      return TT.remove(), UT
    }
    const Ug = WT.o.define({
      enables: AM
    });

    function mg(TT, UT) {
      let mT, zT = new Promise((TT => mT = TT)),
        MT = TT => function(TT, UT, mT) {
          let WT = UT.content ? UT.content(TT, (() => gT(null))) : null;
          if (!WT) {
            if (WT = (0, lT.e)("form"), UT.input) {
              let TT = (0, lT.e)("input", UT.input);
              /^(text|password|number|email|tel|url)$/.test(TT.type) && TT.classList.add("cm-textfield"), TT.name || (TT.name = "input"), WT.appendChild((0, lT.e)("label", (UT.label || "") + ": ", TT))
            } else WT.appendChild(document.createTextNode(UT.label || ""));
            WT.appendChild(document.createTextNode(" ")), WT.appendChild((0, lT.e)("button", {
              class: "cm-button",
              type: "submit"
            }, UT.submitLabel || "OK"))
          }
          let zT = "FORM" == WT.nodeName ? [WT] : WT.querySelectorAll("form");
          for (let nT = 0; nT < zT.length; nT++) {
            let TT = zT[nT];
            TT.addEventListener("keydown", (UT => {
              27 == UT.keyCode ? (UT.preventDefault(), gT(null)) : 13 == UT.keyCode && (UT.preventDefault(), gT(TT))
            })), TT.addEventListener("submit", (UT => {
              UT.preventDefault(), gT(TT)
            }))
          }
          let MT = (0, lT.e)("div", WT, (0, lT.e)("button", {
            onclick: () => gT(null),
            "aria-label": TT.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          UT.class && (MT.className = UT.class);

          function gT(UT) {
            MT.contains(MT.ownerDocument.activeElement) && TT.focus(), mT(UT)
          }
          return MT.classList.add("cm-dialog"), {
            dom: MT,
            top: UT.top,
            mount: () => {
              if (UT.focus) {
                let TT;
                TT = "string" == typeof UT.focus ? WT.querySelector(UT.focus) : WT.querySelector("input") || WT.querySelector("button"), TT && "select" in TT ? TT.select() : TT && "focus" in TT && TT.focus()
              }
            }
          }
        }(TT, UT, mT);
      TT.state.field(Wg, !1) ? TT.dispatch({
        effects: zg.of(MT)
      }) : TT.dispatch({
        effects: WT.B.appendConfig.of(Wg.init((() => [MT])))
      });
      let gT = Mg.of(MT);
      return {
        close: gT,
        result: zT.then((UT => ((TT.win.queueMicrotask || (UT => TT.win.setTimeout(UT, 10)))((() => {
          TT.state.field(Wg).indexOf(MT) > -1 && TT.dispatch({
            effects: gT
          })
        })), UT)))
      }
    }
    const Wg = WT.E.define({
        create: () => [],
        update(TT, UT) {
          for (let mT of UT.effects) mT.is(zg) ? TT = [mT.value].concat(TT) : mT.is(Mg) && (TT = TT.filter((TT => TT != mT.value)));
          return TT
        },
        provide: TT => Ug.computeN([TT], (UT => UT.field(TT)))
      }),
      zg = WT.B.define(),
      Mg = WT.B.define();
    class gg extends WT.A {
      compare(TT) {
        return this == TT || this.constructor == TT.constructor && this.eq(TT)
      }
      eq(TT) {
        return !1
      }
      destroy(TT) {}
    }
    gg.prototype.elementClass = "", gg.prototype.toDOM = void 0, gg.prototype.mapMode = WT.q.TrackBefore, gg.prototype.startSide = gg.prototype.endSide = -1, gg.prototype.point = !0;
    const ng = WT.o.define(),
      Hg = WT.o.define(),
      kg = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => WT.x.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      jg = WT.o.define();

    function lg(TT) {
      return [pg(), jg.of({
        ...kg,
        ...TT
      })]
    }
    const Lg = WT.o.define({
      combine: TT => TT.some((TT => TT))
    });

    function pg(TT) {
      let UT = [Bg];
      return TT && !1 === TT.fixed && UT.push(Lg.of(!0)), UT
    }
    const Bg = DU.fromClass(class {
      constructor(TT) {
        this.view = TT, this.domAfter = null, this.prevViewport = TT.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = TT.state.facet(jg).map((UT => new fg(TT, UT))), this.fixed = !TT.state.facet(Lg);
        for (let UT of this.gutters) "after" == UT.config.side ? this.getDOMAfter().appendChild(UT.dom) : this.dom.appendChild(UT.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), TT.scrollDOM.insertBefore(this.dom, TT.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(TT) {
        if (this.updateGutters(TT)) {
          let UT = this.prevViewport,
            mT = TT.view.viewport,
            WT = Math.min(UT.to, mT.to) - Math.max(UT.from, mT.from);
          this.syncGutters(WT < .8 * (mT.to - mT.from))
        }
        if (TT.geometryChanged) {
          let TT = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = TT, this.domAfter && (this.domAfter.style.minHeight = TT)
        }
        this.view.state.facet(Lg) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = TT.view.viewport
      }
      syncGutters(TT) {
        let UT = this.dom.nextSibling;
        TT && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let mT = WT.x.iter(this.view.state.facet(ng), this.view.viewport.from),
          zT = [],
          MT = this.gutters.map((TT => new vg(TT, this.view.viewport, -this.view.documentPadding.top)));
        for (let WT of this.view.viewportLineBlocks)
          if (zT.length && (zT = []), Array.isArray(WT.type)) {
            let TT = !0;
            for (let UT of WT.type)
              if (UT.type == aT.Text && TT) {
                cg(mT, zT, UT.from);
                for (let TT of MT) TT.line(this.view, UT, zT);
                TT = !1
              } else if (UT.widget)
              for (let TT of MT) TT.widget(this.view, UT)
          } else if (WT.type == aT.Text) {
          cg(mT, zT, WT.from);
          for (let TT of MT) TT.line(this.view, WT, zT)
        } else if (WT.widget)
          for (let TT of MT) TT.widget(this.view, WT);
        for (let WT of MT) WT.finish();
        TT && (this.view.scrollDOM.insertBefore(this.dom, UT), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(TT) {
        let UT = TT.startState.facet(jg),
          mT = TT.state.facet(jg),
          zT = TT.docChanged || TT.heightChanged || TT.viewportChanged || !WT.x.eq(TT.startState.facet(ng), TT.state.facet(ng), TT.view.viewport.from, TT.view.viewport.to);
        if (UT == mT)
          for (let WT of this.gutters) WT.update(TT) && (zT = !0);
        else {
          zT = !0;
          let WT = [];
          for (let zT of mT) {
            let mT = UT.indexOf(zT);
            mT < 0 ? WT.push(new fg(this.view, zT)) : (this.gutters[mT].update(TT), WT.push(this.gutters[mT]))
          }
          for (let TT of this.gutters) TT.dom.remove(), WT.indexOf(TT) < 0 && TT.destroy();
          for (let TT of WT) "after" == TT.config.side ? this.getDOMAfter().appendChild(TT.dom) : this.dom.appendChild(TT.dom);
          this.gutters = WT
        }
        return zT
      }
      destroy() {
        for (let TT of this.gutters) TT.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: TT => xz.scrollMargins.of((UT => {
        let mT = UT.plugin(TT);
        if (!mT || 0 == mT.gutters.length || !mT.fixed) return null;
        let WT = mT.dom.offsetWidth * UT.scaleX,
          zT = mT.domAfter ? mT.domAfter.offsetWidth * UT.scaleX : 0;
        return UT.textDirection == kU.LTR ? {
          left: WT,
          right: zT
        } : {
          right: WT,
          left: zT
        }
      }))
    });

    function Zg(TT) {
      return Array.isArray(TT) ? TT : [TT]
    }

    function cg(TT, UT, mT) {
      for (; TT.value && TT.from <= mT;) TT.from == mT && UT.push(TT.value), TT.next()
    }
    class vg {
      constructor(TT, UT, mT) {
        this.gutter = TT, this.height = mT, this.i = 0, this.cursor = WT.x.iter(TT.markers, UT.from)
      }
      addElement(TT, UT, mT) {
        let {
          gutter: WT
        } = this, zT = (UT.top - this.height) / TT.scaleY, MT = UT.height / TT.scaleY;
        if (this.i == WT.elements.length) {
          let UT = new qg(TT, MT, zT, mT);
          WT.elements.push(UT), WT.dom.appendChild(UT.dom)
        } else WT.elements[this.i].update(TT, MT, zT, mT);
        this.height = UT.bottom, this.i++
      }
      line(TT, UT, mT) {
        let WT = [];
        cg(this.cursor, WT, UT.from), mT.length && (WT = WT.concat(mT));
        let zT = this.gutter.config.lineMarker(TT, UT, WT);
        zT && WT.unshift(zT);
        let MT = this.gutter;
        (0 != WT.length || MT.config.renderEmptyElements) && this.addElement(TT, UT, WT)
      }
      widget(TT, UT) {
        let mT = this.gutter.config.widgetMarker(TT, UT.widget, UT),
          WT = mT ? [mT] : null;
        for (let zT of TT.state.facet(Hg)) {
          let mT = zT(TT, UT.widget, UT);
          mT && (WT || (WT = [])).push(mT)
        }
        WT && this.addElement(TT, UT, WT)
      }
      finish() {
        let TT = this.gutter;
        for (; TT.elements.length > this.i;) {
          let UT = TT.elements.pop();
          TT.dom.removeChild(UT.dom), UT.destroy()
        }
      }
    }
    class fg {
      constructor(TT, UT) {
        this.view = TT, this.config = UT, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let mT in UT.domEventHandlers) this.dom.addEventListener(mT, (WT => {
          let zT, MT = WT.target;
          if (MT != this.dom && this.dom.contains(MT)) {
            for (; MT.parentNode != this.dom;) MT = MT.parentNode;
            let TT = MT.getBoundingClientRect();
            zT = (TT.top + TT.bottom) / 2
          } else zT = WT.clientY;
          let gT = TT.lineBlockAtHeight(zT - TT.documentTop);
          UT.domEventHandlers[mT](TT, gT, WT) && WT.preventDefault()
        }));
        this.markers = Zg(UT.markers(TT)), UT.initialSpacer && (this.spacer = new qg(TT, 0, 0, [UT.initialSpacer(TT)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(TT) {
        let UT = this.markers;
        if (this.markers = Zg(this.config.markers(TT.view)), this.spacer && this.config.updateSpacer) {
          let UT = this.config.updateSpacer(this.spacer.markers[0], TT);
          UT != this.spacer.markers[0] && this.spacer.update(TT.view, 0, 0, [UT])
        }
        let mT = TT.view.viewport;
        return !WT.x.eq(this.markers, UT, mT.from, mT.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(TT)
      }
      destroy() {
        for (let TT of this.elements) TT.destroy()
      }
    }
    class qg {
      constructor(TT, UT, mT, WT) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(TT, UT, mT, WT)
      }
      update(TT, UT, mT, WT) {
        this.height != UT && (this.height = UT, this.dom.style.height = UT + "px"), this.above != mT && (this.dom.style.marginTop = (this.above = mT) ? mT + "px" : ""),
          function(TT, UT) {
            if (TT.length != UT.length) return !1;
            for (let mT = 0; mT < TT.length; mT++)
              if (!TT[mT].compare(UT[mT])) return !1;
            return !0
          }(this.markers, WT) || this.setMarkers(TT, WT)
      }
      setMarkers(TT, UT) {
        let mT = "cm-gutterElement",
          WT = this.dom.firstChild;
        for (let zT = 0, MT = 0;;) {
          let gT = MT,
            nT = zT < UT.length ? UT[zT++] : null,
            HT = !1;
          if (nT) {
            let TT = nT.elementClass;
            TT && (mT += " " + TT);
            for (let UT = MT; UT < this.markers.length; UT++)
              if (this.markers[UT].compare(nT)) {
                gT = UT, HT = !0;
                break
              }
          } else gT = this.markers.length;
          for (; MT < gT;) {
            let TT = this.markers[MT++];
            if (TT.toDOM) {
              TT.destroy(WT);
              let UT = WT.nextSibling;
              WT.remove(), WT = UT
            }
          }
          if (!nT) break;
          nT.toDOM && (HT ? WT = WT.nextSibling : this.dom.insertBefore(nT.toDOM(TT), WT)), HT && MT++
        }
        this.dom.className = mT, this.markers = UT
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const ig = WT.o.define(),
      bg = WT.o.define(),
      Og = WT.o.define({
        combine: TT => (0, WT.Q)(TT, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(TT, UT) {
            let mT = Object.assign({}, TT);
            for (let WT in UT) {
              let TT = mT[WT],
                zT = UT[WT];
              mT[WT] = TT ? (UT, mT, WT) => TT(UT, mT, WT) || zT(UT, mT, WT) : zT
            }
            return mT
          }
        })
      });
    class eg extends gg {
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

    function Yg(TT, UT) {
      return TT.state.facet(Og).formatNumber(UT, TT.state)
    }
    const Jg = jg.compute([Og], (TT => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: TT => TT.state.facet(ig),
      lineMarker: (TT, UT, mT) => mT.some((TT => TT.toDOM)) ? null : new eg(Yg(TT, TT.state.doc.lineAt(UT.from).number)),
      widgetMarker: (TT, UT, mT) => {
        for (let WT of TT.state.facet(bg)) {
          let zT = WT(TT, UT, mT);
          if (zT) return zT
        }
        return null
      },
      lineMarkerChange: TT => TT.startState.facet(Og) != TT.state.facet(Og),
      initialSpacer: TT => new eg(Yg(TT, dg(TT.state.doc.lines))),
      updateSpacer(TT, UT) {
        let mT = Yg(UT.view, dg(UT.view.state.doc.lines));
        return mT == TT.number ? TT : new eg(mT)
      },
      domEventHandlers: TT.facet(Og).domEventHandlers,
      side: "before"
    })));

    function xg() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [Og.of(TT), pg(), Jg]
    }

    function dg(TT) {
      let UT = 9;
      for (; UT < TT;) UT = 10 * UT + 9;
      return UT
    }
    const wg = new class extends gg {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      tg = ng.compute(["selection"], (TT => {
        let UT = [],
          mT = -1;
        for (let WT of TT.selection.hZ) {
          let zT = TT.doc.lineAt(WT.head).from;
          zT > mT && (mT = zT, UT.push(wg.range(zT)))
        }
        return WT.x.of(UT)
      }));

    function ag() {
      return tg
    }
  },
  41485: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT,
      f: () => pT,
      g: () => gT,
      j: () => jT,
      l: () => kT,
      o: () => XT,
      q: () => QT,
      u: () => IT,
      x: () => BT
    });
    const WT = 1024;
    let zT = 0;
    class MT {
      constructor(TT, UT) {
        this.from = TT, this.to = UT
      }
    }
    class gT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = zT++, this.perNode = !!TT.perNode, this.deserialize = TT.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = TT.combine || null
      }
      add(TT) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof TT && (TT = kT.match(TT)), UT => {
          let mT = TT(UT);
          return void 0 === mT ? null : [this, mT]
        }
      }
    }
    gT.closedBy = new gT({
      deserialize: TT => TT.split(" ")
    }), gT.openedBy = new gT({
      deserialize: TT => TT.split(" ")
    }), gT.group = new gT({
      deserialize: TT => TT.split(" ")
    }), gT.isolate = new gT({
      deserialize: TT => {
        if (TT && "rtl" != TT && "ltr" != TT && "auto" != TT) throw new RangeError("Invalid value for isolate: " + TT);
        return TT || "auto"
      }
    }), gT.contextHash = new gT({
      perNode: !0
    }), gT.lookAhead = new gT({
      perNode: !0
    }), gT.mounted = new gT({
      perNode: !0
    });
    class nT {
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = TT, this.overlay = UT, this.parser = mT, this.bracketed = WT
      }
      static get(TT) {
        return TT && TT.props && TT.props[gT.mounted.id]
      }
    }
    const HT = Object.create(null);
    class kT {
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = TT, this.props = UT, this.id = mT, this.flags = WT
      }
      static define(TT) {
        let UT = TT.props && TT.props.length ? Object.create(null) : HT,
          mT = (TT.top ? 1 : 0) | (TT.skipped ? 2 : 0) | (TT.error ? 4 : 0) | (null == TT.name ? 8 : 0),
          WT = new kT(TT.name || "", UT, TT.id, mT);
        if (TT.props)
          for (let zT of TT.props)
            if (Array.isArray(zT) || (zT = zT(WT)), zT) {
              if (zT[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              UT[zT[0].id] = zT[1]
            } return WT
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
          let UT = this.prop(gT.group);
          return !!UT && UT.indexOf(TT) > -1
        }
        return this.id == TT
      }
      static match(TT) {
        let UT = Object.create(null);
        for (let mT in TT)
          for (let WT of mT.split(" ")) UT[WT] = TT[mT];
        return TT => {
          for (let mT = TT.prop(gT.group), WT = -1; WT < (mT ? mT.length : 0); WT++) {
            let zT = UT[WT < 0 ? TT.name : mT[WT]];
            if (zT) return zT
          }
        }
      }
    }
    kT.none = new kT("", Object.create(null), 0, 8);
    class jT {
      constructor(TT) {
        this.types = TT;
        for (let UT = 0; UT < TT.length; UT++)
          if (TT[UT].id != UT) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let TT = [];
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        for (let zT of this.types) {
          let UT = null;
          for (let TT of mT) {
            let mT = TT(zT);
            if (mT) {
              UT || (UT = Object.assign({}, zT.props));
              let TT = mT[1],
                WT = mT[0];
              WT.combine && WT.id in UT && (TT = WT.combine(UT[WT.id], TT)), UT[WT.id] = TT
            }
          }
          TT.push(UT ? new kT(zT.name, UT, zT.id, zT.flags) : zT)
        }
        return new jT(TT)
      }
    }
    const lT = new WeakMap,
      LT = new WeakMap;
    var pT;
    ! function(TT) {
      TT[TT.ExcludeBuffers = 1] = "ExcludeBuffers", TT[TT.IncludeAnonymous = 2] = "IncludeAnonymous", TT[TT.IgnoreMounts = 4] = "IgnoreMounts", TT[TT.IgnoreOverlays = 8] = "IgnoreOverlays", TT[TT.EnterBracketed = 16] = "EnterBracketed"
    }(pT || (pT = {}));
    class BT {
      constructor(TT, UT, mT, WT, zT) {
        if (this.type = TT, this.children = UT, this.positions = mT, this.length = WT, this.props = null, zT && zT.length) {
          this.props = Object.create(null);
          for (let [TT, UT] of zT) this.props["number" == typeof TT ? TT : TT.id] = UT
        }
      }
      toString() {
        let TT = nT.get(this);
        if (TT && !TT.overlay) return TT.tree.toString();
        let UT = "";
        for (let mT of this.children) {
          let TT = mT.toString();
          TT && (UT && (UT += ","), UT += TT)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (UT.length ? "(" + UT + ")" : "") : UT
      }
      cursor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new dT(this.topNode, TT)
      }
      cursorAt(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = lT.get(this) || this.topNode,
          WT = new dT(mT);
        return WT.moveTo(TT, UT), lT.set(this, WT._tree), WT
      }
      get topNode() {
        return new iT(this, 0, 0, null)
      }
      resolve(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = fT(lT.get(this) || this.topNode, TT, UT, !1);
        return lT.set(this, mT), mT
      }
      resolveInner(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = fT(LT.get(this) || this.topNode, TT, UT, !0);
        return LT.set(this, mT), mT
      }
      resolveStack(TT) {
        return function(TT, UT, mT) {
          let WT = TT.resolveInner(UT, mT),
            zT = null;
          for (let MT = WT instanceof iT ? WT : WT.context.parent; MT; MT = MT.parent)
            if (MT.index < 0) {
              let TT = MT.parent;
              (zT || (zT = [WT])).push(TT.resolve(UT, mT)), MT = TT
            } else {
              let TT = nT.get(MT.tree);
              if (TT && TT.overlay && TT.overlay[0].from <= UT && TT.overlay[TT.overlay.length - 1].to >= UT) {
                let gT = new iT(TT.tree, TT.overlay[0].from + MT.from, -1, MT);
                (zT || (zT = [WT])).push(fT(gT, UT, mT, !1))
              }
            } return zT ? JT(zT) : WT
        }(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(TT) {
        let {
          enter: UT,
          leave: mT,
          from: WT = 0,
          to: zT = this.length
        } = TT, MT = TT.mode || 0, gT = (MT & pT.IncludeAnonymous) > 0;
        for (let nT = this.cursor(MT | pT.IncludeAnonymous);;) {
          let TT = !1;
          if (nT.from <= zT && nT.to >= WT && (!gT && nT.type.isAnonymous || !1 !== UT(nT))) {
            if (nT.firstChild()) continue;
            TT = !0
          }
          for (; TT && mT && (gT || !nT.type.isAnonymous) && mT(nT), !nT.nextSibling();) {
            if (!nT.parent()) return;
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
          for (let UT in this.props) TT.push([+UT, this.props[UT]]);
        return TT
      }
      balance() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : yT(kT.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((TT, UT, mT) => new BT(this.type, TT, UT, mT, this.propValues)), TT.makeTree || ((TT, UT, mT) => new BT(kT.none, TT, UT, mT)))
      }
      static build(TT) {
        return function(TT) {
          var UT;
          let {
            buffer: mT,
            nodeSet: zT,
            maxBufferLength: MT = WT,
            reused: nT = [],
            minRepeatType: HT = zT.types.length
          } = TT, kT = Array.isArray(mT) ? new ZT(mT, mT.length) : mT, jT = zT.types, lT = 0, LT = 0;

          function pT(TT, UT, mT, WT, gT, BT) {
            let {
              id: ZT,
              start: eT,
              end: YT,
              size: JT
            } = kT, xT = LT, dT = lT;
            if (JT < 0) {
              if (kT.next(), -1 == JT) {
                let UT = nT[ZT];
                return mT.push(UT), void WT.push(eT - TT)
              }
              if (-3 == JT) return void(lT = ZT);
              if (-4 == JT) return void(LT = ZT);
              throw new RangeError(`Unrecognized record size: ${JT}`)
            }
            let wT, tT, aT = jT[ZT],
              XT = eT - TT;
            if (YT - eT <= MT && (tT = bT(kT.pos - UT, gT))) {
              let UT = new Uint16Array(tT.size - tT.skip),
                mT = kT.pos - tT.size,
                WT = UT.length;
              for (; kT.pos > mT;) WT = OT(tT.start, UT, WT);
              wT = new cT(UT, YT - tT.start, zT), XT = tT.start - TT
            } else {
              let TT = kT.pos - JT;
              kT.next();
              let UT = [],
                mT = [],
                WT = ZT >= HT ? ZT : -1,
                zT = 0,
                gT = YT;
              for (; kT.pos > TT;) WT >= 0 && kT.id == WT && kT.size >= 0 ? (kT.end <= gT - MT && (qT(UT, mT, eT, zT, kT.end, gT, WT, xT, dT), zT = UT.length, gT = kT.end), kT.next()) : BT > 2500 ? vT(eT, TT, UT, mT) : pT(eT, TT, UT, mT, WT, BT + 1);
              if (WT >= 0 && zT > 0 && zT < UT.length && qT(UT, mT, eT, zT, eT, gT, WT, xT, dT), UT.reverse(), mT.reverse(), WT > -1 && zT > 0) {
                let TT = fT(aT, dT);
                wT = yT(aT, UT, mT, 0, UT.length, 0, YT - eT, TT, TT)
              } else wT = iT(aT, UT, mT, YT - eT, xT - YT, dT)
            }
            mT.push(wT), WT.push(XT)
          }

          function vT(TT, UT, mT, WT) {
            let gT = [],
              nT = 0,
              HT = -1;
            for (; kT.pos > UT;) {
              let {
                id: TT,
                start: UT,
                end: mT,
                size: WT
              } = kT;
              if (WT > 4) kT.next();
              else {
                if (HT > -1 && UT < HT) break;
                HT < 0 && (HT = mT - MT), gT.push(TT, UT, mT), nT++, kT.next()
              }
            }
            if (nT) {
              let UT = new Uint16Array(4 * nT),
                MT = gT[gT.length - 2];
              for (let TT = gT.length - 3, mT = 0; TT >= 0; TT -= 3) UT[mT++] = gT[TT], UT[mT++] = gT[TT + 1] - MT, UT[mT++] = gT[TT + 2] - MT, UT[mT++] = mT;
              mT.push(new cT(UT, gT[2] - MT, zT)), WT.push(MT - TT)
            }
          }

          function fT(TT, UT) {
            return (mT, WT, zT) => {
              let MT, nT, HT = 0,
                kT = mT.length - 1;
              if (kT >= 0 && (MT = mT[kT]) instanceof BT) {
                if (!kT && MT.type == TT && MT.length == zT) return MT;
                (nT = MT.prop(gT.lookAhead)) && (HT = WT[kT] + MT.length + nT)
              }
              return iT(TT, mT, WT, zT, HT, UT)
            }
          }

          function qT(TT, UT, mT, WT, MT, gT, nT, HT, kT) {
            let jT = [],
              lT = [];
            for (; TT.length > WT;) jT.push(TT.pop()), lT.push(UT.pop() + mT - MT);
            TT.push(iT(zT.types[nT], jT, lT, gT - MT, HT - gT, kT)), UT.push(MT - mT)
          }

          function iT(TT, UT, mT, WT, zT, MT, nT) {
            if (MT) {
              let TT = [gT.contextHash, MT];
              nT = nT ? [TT].concat(nT) : [TT]
            }
            if (zT > 25) {
              let TT = [gT.lookAhead, zT];
              nT = nT ? [TT].concat(nT) : [TT]
            }
            return new BT(TT, UT, mT, WT, nT)
          }

          function bT(TT, UT) {
            let mT = kT.fork(),
              WT = 0,
              zT = 0,
              gT = 0,
              nT = mT.end - MT,
              jT = {
                size: 0,
                start: 0,
                skip: 0
              };
            TT: for (let MT = mT.pos - TT; mT.pos > MT;) {
              let TT = mT.size;
              if (mT.id == UT && TT >= 0) {
                jT.size = WT, jT.start = zT, jT.skip = gT, gT += 4, WT += 4, mT.next();
                continue
              }
              let kT = mT.pos - TT;
              if (TT < 0 || kT < MT || mT.start < nT) break;
              let lT = mT.id >= HT ? 4 : 0,
                LT = mT.start;
              for (mT.next(); mT.pos > kT;) {
                if (mT.size < 0) {
                  if (-3 != mT.size && -4 != mT.size) break TT;
                  lT += 4
                } else mT.id >= HT && (lT += 4);
                mT.next()
              }
              zT = LT, WT += TT, gT += lT
            }
            return (UT < 0 || WT == TT) && (jT.size = WT, jT.start = zT, jT.skip = gT), jT.size > 4 ? jT : void 0
          }

          function OT(TT, UT, mT) {
            let {
              id: WT,
              start: zT,
              end: MT,
              size: gT
            } = kT;
            if (kT.next(), gT >= 0 && WT < HT) {
              let nT = mT;
              if (gT > 4) {
                let WT = kT.pos - (gT - 4);
                for (; kT.pos > WT;) mT = OT(TT, UT, mT)
              }
              UT[--mT] = nT, UT[--mT] = MT - TT, UT[--mT] = zT - TT, UT[--mT] = WT
            } else - 3 == gT ? lT = WT : -4 == gT && (LT = WT);
            return mT
          }
          let eT = [],
            YT = [];
          for (; kT.pos > 0;) pT(TT.start || 0, TT.bufferStart || 0, eT, YT, -1, 0);
          let JT = null !== (UT = TT.length) && void 0 !== UT ? UT : eT.length ? YT[0] + eT[0].length : 0;
          return new BT(jT[TT.topID], eT.reverse(), YT.reverse(), JT)
        }(TT)
      }
    }
    BT.empty = new BT(kT.none, [], [], 0);
    class ZT {
      constructor(TT, UT) {
        this.buffer = TT, this.index = UT
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
        return new ZT(this.buffer, this.index)
      }
    }
    class cT {
      constructor(TT, UT, mT) {
        this.buffer = TT, this.length = UT, this.set = mT
      }
      get type() {
        return kT.none
      }
      toString() {
        let TT = [];
        for (let UT = 0; UT < this.buffer.length;) TT.push(this.childString(UT)), UT = this.buffer[UT + 3];
        return TT.join(",")
      }
      childString(TT) {
        let UT = this.buffer[TT],
          mT = this.buffer[TT + 3],
          WT = this.set.types[UT],
          zT = WT.name;
        if (/\W/.test(zT) && !WT.isError && (zT = JSON.stringify(zT)), mT == (TT += 4)) return zT;
        let MT = [];
        for (; TT < mT;) MT.push(this.childString(TT)), TT = this.buffer[TT + 3];
        return zT + "(" + MT.join(",") + ")"
      }
      findChild(TT, UT, mT, WT, zT) {
        let {
          buffer: MT
        } = this, gT = -1;
        for (let nT = TT; nT != UT && !(vT(zT, WT, MT[nT + 1], MT[nT + 2]) && (gT = nT, mT > 0)); nT = MT[nT + 3]);
        return gT
      }
      slice(TT, UT, mT) {
        let WT = this.buffer,
          zT = new Uint16Array(UT - TT),
          MT = 0;
        for (let gT = TT, nT = 0; gT < UT;) {
          zT[nT++] = WT[gT++], zT[nT++] = WT[gT++] - mT;
          let UT = zT[nT++] = WT[gT++] - mT;
          zT[nT++] = WT[gT++] - TT, MT = Math.max(MT, UT)
        }
        return new cT(zT, MT, this.set)
      }
    }

    function vT(TT, UT, mT, WT) {
      switch (TT) {
        case -2:
          return mT < UT;
        case -1:
          return WT >= UT && mT < UT;
        case 0:
          return mT < UT && WT > UT;
        case 1:
          return mT <= UT && WT > UT;
        case 2:
          return WT > UT;
        case 4:
          return !0
      }
    }

    function fT(TT, UT, mT, WT) {
      for (var zT; TT.from == TT.to || (mT < 1 ? TT.from >= UT : TT.from > UT) || (mT > -1 ? TT.to <= UT : TT.to < UT);) {
        let UT = !WT && TT instanceof iT && TT.index < 0 ? null : TT.parent;
        if (!UT) return TT;
        TT = UT
      }
      let MT = WT ? 0 : pT.IgnoreOverlays;
      if (WT)
        for (let gT = TT, nT = gT.parent; nT; gT = nT, nT = gT.parent) gT instanceof iT && gT.index < 0 && (null === (zT = nT.enter(UT, mT, MT)) || void 0 === zT ? void 0 : zT.from) != gT.from && (TT = nT);
      for (;;) {
        let WT = TT.enter(UT, mT, MT);
        if (!WT) return TT;
        TT = WT
      }
    }
    class qT {
      cursor() {
        return new dT(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(TT) {
        let UT = bT(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return UT.length ? UT[0] : null
      }
      getChildren(TT) {
        return bT(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(TT) {
        return fT(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(TT) {
        return fT(this, TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(TT) {
        return OT(this.parent, TT)
      }
      enterUnfinishedNodesBefore(TT) {
        let UT = this.childBefore(TT),
          mT = this;
        for (; UT;) {
          let TT = UT.lastChild;
          if (!TT || TT.to != UT.to) break;
          TT.type.isError && TT.from == TT.to ? (mT = UT, UT = TT.prevSibling) : UT = TT
        }
        return mT
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class iT extends qT {
      constructor(TT, UT, mT, WT) {
        super(), this._tree = TT, this.from = UT, this.index = mT, this._parent = WT
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
      nextChild(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let MT = this;;) {
          for (let {
              children: gT,
              positions: HT
            } = MT._tree, kT = UT > 0 ? gT.length : -1; TT != kT; TT += UT) {
            let kT, jT = gT[TT],
              lT = HT[TT] + MT.from;
            if (zT & pT.EnterBracketed && jT instanceof BT && (kT = nT.get(jT)) && !kT.overlay && kT.bracketed && mT >= lT && mT <= lT + jT.length || vT(WT, mT, lT, lT + jT.length))
              if (jT instanceof cT) {
                if (zT & pT.ExcludeBuffers) continue;
                let gT = jT.findChild(0, jT.buffer.length, UT, mT - lT, WT);
                if (gT > -1) return new YT(new eT(MT, jT, TT, lT), null, gT)
              } else if (zT & pT.IncludeAnonymous || !jT.type.isAnonymous || wT(jT)) {
              let gT;
              if (!(zT & pT.IgnoreMounts) && (gT = nT.get(jT)) && !gT.overlay) return new iT(gT.tree, lT, TT, MT);
              let HT = new iT(jT, lT, TT, MT);
              return zT & pT.IncludeAnonymous || !HT.type.isAnonymous ? HT : HT.nextChild(UT < 0 ? jT.children.length - 1 : 0, UT, mT, WT, zT)
            }
          }
          if (zT & pT.IncludeAnonymous || !MT.type.isAnonymous) return null;
          if (TT = MT.index >= 0 ? MT.index + UT : UT < 0 ? -1 : MT._parent._tree.children.length, MT = MT._parent, !MT) return null
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
      enter(TT, UT) {
        let mT, WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(WT & pT.IgnoreOverlays) && (mT = nT.get(this._tree)) && mT.overlay) {
          let zT = TT - this.from,
            MT = WT & pT.EnterBracketed && mT.bracketed;
          for (let {
              from: TT,
              to: WT
            }
            of mT.overlay)
            if ((UT > 0 || MT ? TT <= zT : TT < zT) && (UT < 0 || MT ? WT >= zT : WT > zT)) return new iT(mT.tree, mT.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, TT, UT, WT)
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

    function bT(TT, UT, mT, WT) {
      let zT = TT.cursor(),
        MT = [];
      if (!zT.firstChild()) return MT;
      if (null != mT)
        for (let gT = !1; !gT;)
          if (gT = zT.type.is(mT), !zT.nextSibling()) return MT;
      for (;;) {
        if (null != WT && zT.type.is(WT)) return MT;
        if (zT.type.is(UT) && MT.push(zT.node), !zT.nextSibling()) return null == WT ? MT : []
      }
    }

    function OT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UT.length - 1;
      for (let WT = TT; mT >= 0; WT = WT.parent) {
        if (!WT) return !1;
        if (!WT.type.isAnonymous) {
          if (UT[mT] && UT[mT] != WT.name) return !1;
          mT--
        }
      }
      return !0
    }
    class eT {
      constructor(TT, UT, mT, WT) {
        this.parent = TT, this.buffer = UT, this.index = mT, this.start = WT
      }
    }
    class YT extends qT {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(TT, UT, mT) {
        super(), this.context = TT, this._parent = UT, this.index = mT, this.type = TT.buffer.set.types[TT.buffer.buffer[mT]]
      }
      child(TT, UT, mT) {
        let {
          buffer: WT
        } = this.context, zT = WT.findChild(this.index + 4, WT.buffer[this.index + 3], TT, UT - this.context.start, mT);
        return zT < 0 ? null : new YT(this.context, this, zT)
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
      enter(TT, UT) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & pT.ExcludeBuffers) return null;
        let {
          buffer: mT
        } = this.context, WT = mT.findChild(this.index + 4, mT.buffer[this.index + 3], UT > 0 ? 1 : -1, TT - this.context.start, UT);
        return WT < 0 ? null : new YT(this.context, this, WT)
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
        } = this.context, UT = TT.buffer[this.index + 3];
        return UT < (this._parent ? TT.buffer[this._parent.index + 3] : TT.buffer.length) ? new YT(this.context, this._parent, UT) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: TT
        } = this.context, UT = this._parent ? this._parent.index + 4 : 0;
        return this.index == UT ? this.externalSibling(-1) : new YT(this.context, this._parent, TT.findChild(UT, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let TT = [],
          UT = [],
          {
            buffer: mT
          } = this.context,
          WT = this.index + 4,
          zT = mT.buffer[this.index + 3];
        if (zT > WT) {
          let MT = mT.buffer[this.index + 1];
          TT.push(mT.slice(WT, zT, MT)), UT.push(0)
        }
        return new BT(this.type, TT, UT, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function JT(TT) {
      if (!TT.length) return null;
      let UT = 0,
        mT = TT[0];
      for (let MT = 1; MT < TT.length; MT++) {
        let WT = TT[MT];
        (WT.from > mT.from || WT.to < mT.to) && (mT = WT, UT = MT)
      }
      let WT = mT instanceof iT && mT.index < 0 ? null : mT.parent,
        zT = TT.slice();
      return WT ? zT[UT] = WT : zT.splice(UT, 1), new xT(zT, mT)
    }
    class xT {
      constructor(TT, UT) {
        this.heads = TT, this.node = UT
      }
      get next() {
        return JT(this.heads)
      }
    }
    class dT {
      get name() {
        return this.type.name
      }
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = UT & ~pT.EnterBracketed, TT instanceof iT) this.yieldNode(TT);
        else {
          this._tree = TT.context.parent, this.buffer = TT.context;
          for (let UT = TT._parent; UT; UT = UT._parent) this.stack.unshift(UT.index);
          this.bufferNode = TT, this.yieldBuf(TT.index)
        }
      }
      yieldNode(TT) {
        return !!TT && (this._tree = TT, this.type = TT.type, this.from = TT.from, this.to = TT.to, !0)
      }
      yieldBuf(TT, UT) {
        this.index = TT;
        let {
          start: mT,
          buffer: WT
        } = this.buffer;
        return this.type = UT || WT.set.types[WT.buffer[TT]], this.from = mT + WT.buffer[TT + 1], this.to = mT + WT.buffer[TT + 2], !0
      }
      yield(TT) {
        return !!TT && (TT instanceof iT ? (this.buffer = null, this.yieldNode(TT)) : (this.buffer = TT.context, this.yieldBuf(TT.index, TT.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(TT, UT, mT) {
        if (!this.buffer) return this.yield(this._tree.nextChild(TT < 0 ? this._tree._tree.children.length - 1 : 0, TT, UT, mT, this.mode));
        let {
          buffer: WT
        } = this.buffer, zT = WT.findChild(this.index + 4, WT.buffer[this.index + 3], TT, UT - this.buffer.start, mT);
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
      enter(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(mT & pT.ExcludeBuffers) && this.enterChild(1, TT, UT) : this.yield(this._tree.enter(TT, UT, mT))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & pT.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let TT = this.mode & pT.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(TT)
      }
      sibling(TT) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + TT, TT, 0, 4, this.mode));
        let {
          buffer: UT
        } = this.buffer, mT = this.stack.length - 1;
        if (TT < 0) {
          let TT = mT < 0 ? 0 : this.stack[mT] + 4;
          if (this.index != TT) return this.yieldBuf(UT.findChild(TT, this.index, -1, 0, 4))
        } else {
          let TT = UT.buffer[this.index + 3];
          if (TT < (mT < 0 ? UT.buffer.length : UT.buffer[this.stack[mT] + 3])) return this.yieldBuf(TT)
        }
        return mT < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + TT, TT, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(TT) {
        let UT, mT, {
          buffer: WT
        } = this;
        if (WT) {
          if (TT > 0) {
            if (this.index < WT.buffer.buffer.length) return !1
          } else
            for (let TT = 0; TT < this.index; TT++)
              if (WT.buffer.buffer[TT + 3] < this.index) return !1;
          ({
            index: UT,
            parent: mT
          } = WT)
        } else({
          index: UT,
          _parent: mT
        } = this._tree);
        for (; mT;
          ({
            index: UT,
            _parent: mT
          } = mT))
          if (UT > -1)
            for (let WT = UT + TT, zT = TT < 0 ? -1 : mT._tree.children.length; WT != zT; WT += TT) {
              let TT = mT._tree.children[WT];
              if (this.mode & pT.IncludeAnonymous || TT instanceof cT || !TT.type.isAnonymous || wT(TT)) return !1
            }
        return !0
      }
      move(TT, UT) {
        if (UT && this.enterChild(TT, 0, 4)) return !0;
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
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (UT < 1 ? this.from >= TT : this.from > TT) || (UT > -1 ? this.to <= TT : this.to < TT)) && this.parent(););
        for (; this.enterChild(1, TT, UT););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let TT = this.bufferNode,
          UT = null,
          mT = 0;
        if (TT && TT.context == this.buffer) TT: for (let WT = this.index, zT = this.stack.length; zT >= 0;) {
          for (let MT = TT; MT; MT = MT._parent)
            if (MT.index == WT) {
              if (WT == this.index) return MT;
              UT = MT, mT = zT + 1;
              break TT
            } WT = this.stack[--zT]
        }
        for (let WT = mT; WT < this.stack.length; WT++) UT = new YT(this.buffer, UT, this.stack[WT]);
        return this.bufferNode = new YT(this.buffer, UT, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(TT, UT) {
        for (let mT = 0;;) {
          let WT = !1;
          if (this.type.isAnonymous || !1 !== TT(this)) {
            if (this.firstChild()) {
              mT++;
              continue
            }
            this.type.isAnonymous || (WT = !0)
          }
          for (;;) {
            if (WT && UT && UT(this), WT = this.type.isAnonymous, !mT) return;
            if (this.nextSibling()) break;
            this.parent(), mT--, WT = !0
          }
        }
      }
      matchContext(TT) {
        if (!this.buffer) return OT(this.node.parent, TT);
        let {
          buffer: UT
        } = this.buffer, {
          types: mT
        } = UT.set;
        for (let WT = TT.length - 1, zT = this.stack.length - 1; WT >= 0; zT--) {
          if (zT < 0) return OT(this._tree, TT, WT);
          let MT = mT[UT.buffer[this.stack[zT]]];
          if (!MT.isAnonymous) {
            if (TT[WT] && TT[WT] != MT.name) return !1;
            WT--
          }
        }
        return !0
      }
    }

    function wT(TT) {
      return TT.children.some((TT => TT instanceof cT || !TT.type.isAnonymous || wT(TT)))
    }
    const tT = new WeakMap;

    function aT(TT, UT) {
      if (!TT.isAnonymous || UT instanceof cT || UT.type != TT) return 1;
      let mT = tT.get(UT);
      if (null == mT) {
        mT = 1;
        for (let WT of UT.children) {
          if (WT.type != TT || !(WT instanceof BT)) {
            mT = 1;
            break
          }
          mT += aT(TT, WT)
        }
        tT.set(UT, mT)
      }
      return mT
    }

    function yT(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
      let kT = 0;
      for (let pT = WT; pT < zT; pT++) kT += aT(TT, UT[pT]);
      let jT = Math.ceil(1.5 * kT / 8),
        lT = [],
        LT = [];
      return function UT(mT, WT, zT, gT, nT) {
        for (let kT = zT; kT < gT;) {
          let zT = kT,
            pT = WT[kT],
            BT = aT(TT, mT[kT]);
          for (kT++; kT < gT; kT++) {
            let UT = aT(TT, mT[kT]);
            if (BT + UT >= jT) break;
            BT += UT
          }
          if (kT == zT + 1) {
            if (BT > jT) {
              let TT = mT[zT];
              UT(TT.children, TT.positions, 0, TT.children.length, WT[zT] + nT);
              continue
            }
            lT.push(mT[zT])
          } else {
            let UT = WT[kT - 1] + mT[kT - 1].length - pT;
            lT.push(yT(TT, mT, WT, zT, kT, pT, UT, null, HT))
          }
          LT.push(pT + nT - MT)
        }
      }(UT, mT, WT, zT, 0), (nT || HT)(lT, LT, gT)
    }
    class XT {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(TT, UT, mT) {
        let WT = this.map.get(TT);
        WT || this.map.set(TT, WT = new Map), WT.set(UT, mT)
      }
      getBuffer(TT, UT) {
        let mT = this.map.get(TT);
        return mT && mT.get(UT)
      }
      set(TT, UT) {
        TT instanceof YT ? this.setBuffer(TT.context.buffer, TT.index, UT) : TT instanceof iT && this.map.set(TT.tree, UT)
      }
      get(TT) {
        return TT instanceof YT ? this.getBuffer(TT.context.buffer, TT.index) : TT instanceof iT ? this.map.get(TT.tree) : void 0
      }
      cursorSet(TT, UT) {
        TT.buffer ? this.setBuffer(TT.buffer.buffer, TT.index, UT) : this.map.set(TT.tree, UT)
      }
      cursorGet(TT) {
        return TT.buffer ? this.getBuffer(TT.buffer.buffer, TT.index) : this.map.get(TT.tree)
      }
    }
    class IT {
      constructor(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = TT, this.to = UT, this.tree = mT, this.offset = WT, this.open = (zT ? 1 : 0) | (MT ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = [new IT(0, TT.length, TT, 0, !1, mT)];
        for (let zT of UT) zT.to > TT.length && WT.push(zT);
        return WT
      }
      static applyChanges(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!UT.length) return TT;
        let WT = [],
          zT = 1,
          MT = TT.length ? TT[0] : null;
        for (let gT = 0, nT = 0, HT = 0;; gT++) {
          let kT = gT < UT.length ? UT[gT] : null,
            jT = kT ? kT.fromA : 1e9;
          if (jT - nT >= mT)
            for (; MT && MT.from < jT;) {
              let UT = MT;
              if (nT >= UT.from || jT <= UT.to || HT) {
                let TT = Math.max(UT.from, nT) - HT,
                  mT = Math.min(UT.to, jT) - HT;
                UT = TT >= mT ? null : new IT(TT, mT, UT.tree, UT.offset + HT, gT > 0, !!kT)
              }
              if (UT && WT.push(UT), MT.to > jT) break;
              MT = zT < TT.length ? TT[zT++] : null
            }
          if (!kT) break;
          nT = kT.toA, HT = kT.toA - kT.toB
        }
        return WT
      }
    }
    class QT {
      startParse(TT, UT, mT) {
        return "string" == typeof TT && (TT = new sT(TT)), mT = mT ? mT.length ? mT.map((TT => new MT(TT.from, TT.to))) : [new MT(0, 0)] : [new MT(0, TT.length)], this.createParse(TT, UT || [], mT)
      }
      parse(TT, UT, mT) {
        let WT = this.startParse(TT, UT, mT);
        for (;;) {
          let TT = WT.advance();
          if (TT) return TT
        }
      }
    }
    class sT {
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
      read(TT, UT) {
        return this.string.slice(TT, UT)
      }
    }
    new gT({
      perNode: !0
    })
  },
  41493: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => LT,
      g: () => HT,
      j: () => lT,
      k: () => tT
    });
    var WT = mT(41485);
    let zT = 0;
    class MT {
      constructor(TT, UT, mT, WT) {
        this.name = TT, this.set = UT, this.base = mT, this.modified = WT, this.id = zT++
      }
      toString() {
        let {
          name: TT
        } = this;
        for (let UT of this.modified) UT.name && (TT = `${UT.name}(${TT})`);
        return TT
      }
      static define(TT, UT) {
        let mT = "string" == typeof TT ? TT : "?";
        if (TT instanceof MT && (UT = TT), null === UT || void 0 === UT ? void 0 : UT.base) throw new Error("Can not derive from a modified tag");
        let WT = new MT(mT, [], null, []);
        if (WT.set.push(WT), UT)
          for (let zT of UT.set) WT.set.push(zT);
        return WT
      }
      static defineModifier(TT) {
        let UT = new nT(TT);
        return TT => TT.modified.indexOf(UT) > -1 ? TT : nT.get(TT.base || TT, TT.modified.concat(UT).sort(((TT, UT) => TT.id - UT.id)))
      }
    }
    let gT = 0;
    class nT {
      constructor(TT) {
        this.name = TT, this.instances = [], this.id = gT++
      }
      static get(TT, UT) {
        if (!UT.length) return TT;
        let mT = UT[0].instances.find((mT => {
          return mT.base == TT && (WT = UT, zT = mT.modified, WT.length == zT.length && WT.every(((TT, UT) => TT == zT[UT])));
          var WT, zT
        }));
        if (mT) return mT;
        let WT = [],
          zT = new MT(TT.name, WT, TT, UT);
        for (let MT of UT) MT.instances.push(zT);
        let gT = function(TT) {
          let UT = [
            []
          ];
          for (let mT = 0; mT < TT.length; mT++)
            for (let WT = 0, zT = UT.length; WT < zT; WT++) UT.push(UT[WT].concat(TT[mT]));
          return UT.sort(((TT, UT) => UT.length - TT.length))
        }(UT);
        for (let MT of TT.set)
          if (!MT.modified.length)
            for (let TT of gT) WT.push(nT.get(MT, TT));
        return zT
      }
    }

    function HT(TT) {
      let UT = Object.create(null);
      for (let mT in TT) {
        let WT = TT[mT];
        Array.isArray(WT) || (WT = [WT]);
        for (let TT of mT.split(" "))
          if (TT) {
            let mT = [],
              zT = 2,
              MT = TT;
            for (let UT = 0;;) {
              if ("..." == MT && UT > 0 && UT + 3 == TT.length) {
                zT = 1;
                break
              }
              let WT = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(MT);
              if (!WT) throw new RangeError("Invalid path: " + TT);
              if (mT.push("*" == WT[0] ? "" : '"' == WT[0][0] ? JSON.parse(WT[0]) : WT[0]), UT += WT[0].length, UT == TT.length) break;
              let gT = TT[UT++];
              if (UT == TT.length && "!" == gT) {
                zT = 0;
                break
              }
              if ("/" != gT) throw new RangeError("Invalid path: " + TT);
              MT = TT.slice(UT)
            }
            let gT = mT.length - 1,
              nT = mT[gT];
            if (!nT) throw new RangeError("Invalid path: " + TT);
            let HT = new jT(WT, zT, gT > 0 ? mT.slice(0, gT) : null);
            UT[nT] = HT.sort(UT[nT])
          }
      }
      return kT.add(UT)
    }
    const kT = new WT.g({
      combine(TT, UT) {
        let mT, WT, zT;
        for (; TT || UT;) {
          if (!TT || UT && TT.depth >= UT.depth ? (zT = UT, UT = UT.next) : (zT = TT, TT = TT.next), mT && mT.mode == zT.mode && !zT.context && !mT.context) continue;
          let MT = new jT(zT.tags, zT.mode, zT.context);
          mT ? mT.next = MT : WT = MT, mT = MT
        }
        return WT
      }
    });
    class jT {
      constructor(TT, UT, mT, WT) {
        this.tags = TT, this.mode = UT, this.context = mT, this.next = WT
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

    function lT(TT, UT) {
      let mT = Object.create(null);
      for (let MT of TT)
        if (Array.isArray(MT.tag))
          for (let TT of MT.tag) mT[TT.id] = MT.class;
        else mT[MT.tag.id] = MT.class;
      let {
        scope: WT,
        all: zT = null
      } = UT || {};
      return {
        style: TT => {
          let UT = zT;
          for (let WT of TT)
            for (let TT of WT.set) {
              let WT = mT[TT.id];
              if (WT) {
                UT = UT ? UT + " " + WT : WT;
                break
              }
            }
          return UT
        },
        scope: WT
      }
    }

    function LT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : TT.length,
        MT = new pT(WT, Array.isArray(UT) ? UT : [UT], mT);
      MT.highlightRange(TT.cursor(), WT, zT, "", MT.highlighters), MT.flush(zT)
    }
    jT.empty = new jT([], 2, null);
    class pT {
      constructor(TT, UT, mT) {
        this.at = TT, this.highlighters = UT, this.span = mT, this.class = ""
      }
      startSpan(TT, UT) {
        UT != this.class && (this.flush(TT), TT > this.at && (this.at = TT), this.class = UT)
      }
      flush(TT) {
        TT > this.at && this.class && this.span(this.at, TT, this.class)
      }
      highlightRange(TT, UT, mT, zT, MT) {
        let {
          type: gT,
          from: nT,
          to: HT
        } = TT;
        if (nT >= mT || HT <= UT) return;
        gT.isTop && (MT = this.highlighters.filter((TT => !TT.scope || TT.scope(gT))));
        let lT = zT,
          LT = function(TT) {
            let UT = TT.type.prop(kT);
            for (; UT && UT.context && !TT.matchContext(UT.context);) UT = UT.next;
            return UT || null
          }(TT) || jT.empty,
          pT = function(TT, UT) {
            let mT = null;
            for (let WT of TT) {
              let TT = WT.style(UT);
              TT && (mT = mT ? mT + " " + TT : TT)
            }
            return mT
          }(MT, LT.tags);
        if (pT && (lT && (lT += " "), lT += pT, 1 == LT.mode && (zT += (zT ? " " : "") + pT)), this.startSpan(Math.max(UT, nT), lT), LT.opaque) return;
        let BT = TT.tree && TT.tree.prop(WT.g.mounted);
        if (BT && BT.overlay) {
          let WT = TT.node.enter(BT.overlay[0].from + nT, 1),
            gT = this.highlighters.filter((TT => !TT.scope || TT.scope(BT.tree.type))),
            kT = TT.firstChild();
          for (let jT = 0, LT = nT;; jT++) {
            let pT = jT < BT.overlay.length ? BT.overlay[jT] : null,
              ZT = pT ? pT.from + nT : HT,
              cT = Math.max(UT, LT),
              vT = Math.min(mT, ZT);
            if (cT < vT && kT)
              for (; TT.from < vT && (this.highlightRange(TT, cT, vT, zT, MT), this.startSpan(Math.min(vT, TT.to), lT), !(TT.to >= ZT) && TT.nextSibling()););
            if (!pT || ZT > mT) break;
            LT = pT.to + nT, LT > UT && (this.highlightRange(WT.cursor(), Math.max(UT, pT.from + nT), Math.min(mT, LT), "", gT), this.startSpan(Math.min(mT, LT), lT))
          }
          kT && TT.parent()
        } else if (TT.firstChild()) {
          BT && (zT = "");
          do {
            if (!(TT.to <= UT)) {
              if (TT.from >= mT) break;
              this.highlightRange(TT, UT, mT, zT, MT), this.startSpan(Math.min(mT, TT.to), lT)
            }
          } while (TT.nextSibling());
          TT.parent()
        }
      }
    }
    const BT = MT.define,
      ZT = BT(),
      cT = BT(),
      vT = BT(cT),
      fT = BT(cT),
      qT = BT(),
      iT = BT(qT),
      bT = BT(qT),
      OT = BT(),
      eT = BT(OT),
      YT = BT(),
      JT = BT(),
      xT = BT(),
      dT = BT(xT),
      wT = BT(),
      tT = {
        comment: ZT,
        lineComment: BT(ZT),
        blockComment: BT(ZT),
        docComment: BT(ZT),
        name: cT,
        variableName: BT(cT),
        typeName: vT,
        tagName: BT(vT),
        propertyName: fT,
        attributeName: BT(fT),
        className: BT(cT),
        labelName: BT(cT),
        namespace: BT(cT),
        macroName: BT(cT),
        literal: qT,
        string: iT,
        docString: BT(iT),
        character: BT(iT),
        attributeValue: BT(iT),
        number: bT,
        integer: BT(bT),
        float: BT(bT),
        bool: BT(qT),
        regexp: BT(qT),
        escape: BT(qT),
        color: BT(qT),
        url: BT(qT),
        keyword: YT,
        self: BT(YT),
        null: BT(YT),
        atom: BT(YT),
        unit: BT(YT),
        modifier: BT(YT),
        operatorKeyword: BT(YT),
        controlKeyword: BT(YT),
        definitionKeyword: BT(YT),
        moduleKeyword: BT(YT),
        operator: JT,
        derefOperator: BT(JT),
        arithmeticOperator: BT(JT),
        logicOperator: BT(JT),
        bitwiseOperator: BT(JT),
        compareOperator: BT(JT),
        updateOperator: BT(JT),
        definitionOperator: BT(JT),
        typeOperator: BT(JT),
        controlOperator: BT(JT),
        punctuation: xT,
        separator: BT(xT),
        bracket: dT,
        angleBracket: BT(dT),
        squareBracket: BT(dT),
        paren: BT(dT),
        brace: BT(dT),
        content: OT,
        heading: eT,
        heading1: BT(eT),
        heading2: BT(eT),
        heading3: BT(eT),
        heading4: BT(eT),
        heading5: BT(eT),
        heading6: BT(eT),
        contentSeparator: BT(OT),
        list: BT(OT),
        quote: BT(OT),
        emphasis: BT(OT),
        strong: BT(OT),
        link: BT(OT),
        monospace: BT(OT),
        strikethrough: BT(OT),
        inserted: BT(),
        deleted: BT(),
        changed: BT(),
        invalid: BT(),
        meta: wT,
        documentMeta: BT(wT),
        annotation: BT(wT),
        processingInstruction: BT(wT),
        definition: MT.defineModifier("definition"),
        constant: MT.defineModifier("constant"),
        function: MT.defineModifier("function"),
        standard: MT.defineModifier("standard"),
        local: MT.defineModifier("local"),
        special: MT.defineModifier("special")
      };
    for (let aT in tT) {
      let TT = tT[aT];
      TT instanceof MT && (TT.name = aT)
    }
    lT([{
      tag: tT.link,
      class: "tok-link"
    }, {
      tag: tT.heading,
      class: "tok-heading"
    }, {
      tag: tT.emphasis,
      class: "tok-emphasis"
    }, {
      tag: tT.strong,
      class: "tok-strong"
    }, {
      tag: tT.keyword,
      class: "tok-keyword"
    }, {
      tag: tT.atom,
      class: "tok-atom"
    }, {
      tag: tT.bool,
      class: "tok-bool"
    }, {
      tag: tT.url,
      class: "tok-url"
    }, {
      tag: tT.labelName,
      class: "tok-labelName"
    }, {
      tag: tT.inserted,
      class: "tok-inserted"
    }, {
      tag: tT.deleted,
      class: "tok-deleted"
    }, {
      tag: tT.literal,
      class: "tok-literal"
    }, {
      tag: tT.string,
      class: "tok-string"
    }, {
      tag: tT.number,
      class: "tok-number"
    }, {
      tag: [tT.regexp, tT.escape, tT.special(tT.string)],
      class: "tok-string2"
    }, {
      tag: tT.variableName,
      class: "tok-variableName"
    }, {
      tag: tT.local(tT.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: tT.definition(tT.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: tT.special(tT.variableName),
      class: "tok-variableName2"
    }, {
      tag: tT.definition(tT.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: tT.typeName,
      class: "tok-typeName"
    }, {
      tag: tT.namespace,
      class: "tok-namespace"
    }, {
      tag: tT.className,
      class: "tok-className"
    }, {
      tag: tT.macroName,
      class: "tok-macroName"
    }, {
      tag: tT.propertyName,
      class: "tok-propertyName"
    }, {
      tag: tT.operator,
      class: "tok-operator"
    }, {
      tag: tT.comment,
      class: "tok-comment"
    }, {
      tag: tT.meta,
      class: "tok-meta"
    }, {
      tag: tT.invalid,
      class: "tok-invalid"
    }, {
      tag: tT.punctuation,
      class: "tok-punctuation"
    }])
  },
  41506: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => nT.i,
      f: () => gT.u,
      j: () => gT.B,
      n: () => gT.E,
      p: () => nT.q,
      t: () => Ym,
      u: () => nT.T,
      x: () => nT.pb
    });
    var WT = mT(1498),
      zT = mT(1490),
      MT = mT(63),
      gT = mT(41459),
      nT = mT(41466),
      HT = mT(41482),
      kT = mT(41485);

    function jT(TT, UT) {
      return mT => {
        let {
          state: WT,
          dispatch: zT
        } = mT;
        if (WT.readOnly) return !1;
        let MT = TT(UT, WT);
        return !!MT && (zT(WT.update(MT)), !0)
      }
    }
    const lT = jT(vT, 0),
      LT = jT(cT, 0),
      pT = jT(((TT, UT) => cT(TT, UT, function(TT) {
        let UT = [];
        for (let mT of TT.selection.hZ) {
          let WT = TT.doc.lineAt(mT.from),
            zT = mT.to <= WT.to ? WT : TT.doc.lineAt(mT.to);
          zT.from > WT.from && zT.from == mT.to && (zT = mT.to == WT.to + 1 ? WT : TT.doc.lineAt(mT.to - 1));
          let MT = UT.length - 1;
          MT >= 0 && UT[MT].to > WT.from ? UT[MT].to = zT.to : UT.push({
            from: WT.from + /^\s*/.exec(WT.text)[0].length,
            to: zT.to
          })
        }
        return UT
      }(UT))), 0);

    function BT(TT, UT) {
      let mT = TT.languageDataAt("commentTokens", UT, 1);
      return mT.length ? mT[0] : {}
    }
    const ZT = 50;

    function cT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UT.selection.hZ,
        WT = mT.map((TT => BT(UT, TT.from).block));
      if (!WT.every((TT => TT))) return null;
      let zT = mT.map(((TT, mT) => function(TT, UT, mT, WT) {
        let zT, MT, {
            open: gT,
            close: nT
          } = UT,
          HT = TT.sliceDoc(mT - ZT, mT),
          kT = TT.sliceDoc(WT, WT + ZT),
          jT = /\s*$/.exec(HT)[0].length,
          lT = /^\s*/.exec(kT)[0].length,
          LT = HT.length - jT;
        if (HT.slice(LT - gT.length, LT) == gT && kT.slice(lT, lT + nT.length) == nT) return {
          open: {
            pos: mT - jT,
            margin: jT && 1
          },
          close: {
            pos: WT + lT,
            margin: lT && 1
          }
        };
        WT - mT <= 2 * ZT ? zT = MT = TT.sliceDoc(mT, WT) : (zT = TT.sliceDoc(mT, mT + ZT), MT = TT.sliceDoc(WT - ZT, WT));
        let pT = /^\s*/.exec(zT)[0].length,
          BT = /\s*$/.exec(MT)[0].length,
          cT = MT.length - BT - nT.length;
        return zT.slice(pT, pT + gT.length) == gT && MT.slice(cT, cT + nT.length) == nT ? {
          open: {
            pos: mT + pT + gT.length,
            margin: /\s/.test(zT.charAt(pT + gT.length)) ? 1 : 0
          },
          close: {
            pos: WT - BT - nT.length,
            margin: /\s/.test(MT.charAt(cT - 1)) ? 1 : 0
          }
        } : null
      }(UT, WT[mT], TT.from, TT.to)));
      if (2 != TT && !zT.every((TT => TT))) return {
        changes: UT.changes(mT.map(((TT, UT) => zT[UT] ? [] : [{
          from: TT.from,
          insert: WT[UT].open + " "
        }, {
          from: TT.to,
          insert: " " + WT[UT].close
        }])))
      };
      if (1 != TT && zT.some((TT => TT))) {
        let TT = [];
        for (let UT, mT = 0; mT < zT.length; mT++)
          if (UT = zT[mT]) {
            let zT = WT[mT],
              {
                open: MT,
                close: gT
              } = UT;
            TT.push({
              from: MT.pos - zT.open.length,
              to: MT.pos + MT.margin
            }, {
              from: gT.pos - gT.margin,
              to: gT.pos + zT.close.length
            })
          } return {
          changes: TT
        }
      }
      return null
    }

    function vT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UT.selection.hZ,
        WT = [],
        zT = -1;
      TT: for (let {
          from: MT,
          to: gT
        }
        of mT) {
        let TT, mT = WT.length,
          nT = 1e9;
        for (let HT = MT; HT <= gT;) {
          let mT = UT.doc.lineAt(HT);
          if (void 0 == TT && (TT = BT(UT, mT.from).line, !TT)) continue TT;
          if (mT.from > zT && (MT == gT || gT > mT.from)) {
            zT = mT.from;
            let UT = /^\s*/.exec(mT.text)[0].length,
              MT = UT == mT.length,
              gT = mT.text.slice(UT, UT + TT.length) == TT ? UT : -1;
            UT < mT.text.length && UT < nT && (nT = UT), WT.push({
              line: mT,
              comment: gT,
              token: TT,
              indent: UT,
              empty: MT,
              single: !1
            })
          }
          HT = mT.to + 1
        }
        if (nT < 1e9)
          for (let UT = mT; UT < WT.length; UT++) WT[UT].indent < WT[UT].line.text.length && (WT[UT].indent = nT);
        WT.length == mT + 1 && (WT[mT].single = !0)
      }
      if (2 != TT && WT.some((TT => TT.comment < 0 && (!TT.empty || TT.single)))) {
        let TT = [];
        for (let {
            line: UT,
            token: zT,
            indent: MT,
            empty: gT,
            single: nT
          }
          of WT) !nT && gT || TT.push({
          from: UT.from + MT,
          insert: zT + " "
        });
        let mT = UT.changes(TT);
        return {
          changes: mT,
          selection: UT.selection.map(mT, 1)
        }
      }
      if (1 != TT && WT.some((TT => TT.comment >= 0))) {
        let TT = [];
        for (let {
            line: UT,
            comment: mT,
            token: zT
          }
          of WT)
          if (mT >= 0) {
            let WT = UT.from + mT,
              MT = WT + zT.length;
            " " == UT.text[MT - UT.from] && MT++, TT.push({
              from: WT,
              to: MT
            })
          } return {
          changes: TT
        }
      }
      return null
    }
    const fT = gT.b.define(),
      qT = gT.b.define(),
      iT = gT.o.define(),
      bT = gT.o.define({
        combine: TT => (0, gT.Q)(TT, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (TT, UT) => UT
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (TT, UT) => (mT, WT) => TT(mT, WT) || UT(mT, WT)
        })
      }),
      OT = gT.E.define({
        create: () => VT.empty,
        update(TT, UT) {
          let mT = UT.state.facet(bT),
            WT = UT.annotation(fT);
          if (WT) {
            let zT = wT.fromTransaction(UT, WT.selection),
              MT = WT.side,
              gT = 0 == MT ? TT.undone : TT.done;
            return gT = zT ? tT(gT, gT.length, mT.minDepth, zT) : IT(gT, UT.startState.selection), new VT(0 == MT ? WT.rest : gT, 0 == MT ? gT : WT.rest)
          }
          let zT = UT.annotation(qT);
          if ("full" != zT && "before" != zT || (TT = TT.isolate()), !1 === UT.annotation(gT.K.addToHistory)) return UT.changes.empty ? TT : TT.addMapping(UT.changes.desc);
          let MT = wT.fromTransaction(UT),
            nT = UT.annotation(gT.K.time),
            HT = UT.annotation(gT.K.userEvent);
          return MT ? TT = TT.addChanges(MT, nT, HT, mT, UT) : UT.selection && (TT = TT.addSelection(UT.startState.selection, nT, HT, mT.newGroupDelay)), "full" != zT && "after" != zT || (TT = TT.isolate()), TT
        },
        toJSON: TT => ({
          done: TT.done.map((TT => TT.toJSON())),
          undone: TT.undone.map((TT => TT.toJSON()))
        }),
        fromJSON: TT => new VT(TT.done.map(wT.fromJSON), TT.undone.map(wT.fromJSON))
      });

    function eT(TT, UT) {
      return function(mT) {
        let {
          state: WT,
          dispatch: zT
        } = mT;
        if (!UT && WT.readOnly) return !1;
        let MT = WT.field(OT, !1);
        if (!MT) return !1;
        let gT = MT.pop(TT, WT, UT);
        return !!gT && (zT(gT), !0)
      }
    }
    const YT = eT(0, !1),
      JT = eT(1, !1),
      xT = eT(0, !0),
      dT = eT(1, !0);
    class wT {
      constructor(TT, UT, mT, WT, zT) {
        this.changes = TT, this.effects = UT, this.mapped = mT, this.startSelection = WT, this.selectionsAfter = zT
      }
      setSelAfter(TT) {
        return new wT(this.changes, this.effects, this.mapped, this.startSelection, TT)
      }
      toJSON() {
        var TT, UT, mT;
        return {
          changes: null === (TT = this.changes) || void 0 === TT ? void 0 : TT.toJSON(),
          mapped: null === (UT = this.mapped) || void 0 === UT ? void 0 : UT.toJSON(),
          startSelection: null === (mT = this.startSelection) || void 0 === mT ? void 0 : mT.toJSON(),
          selectionsAfter: this.selectionsAfter.map((TT => TT.toJSON()))
        }
      }
      static fromJSON(TT) {
        return new wT(TT.changes && gT.ChangeSet.fromJSON(TT.changes), [], TT.mapped && gT.f.fromJSON(TT.mapped), TT.startSelection && gT.l.fromJSON(TT.startSelection), TT.selectionsAfter.map(gT.l.fromJSON))
      }
      static fromTransaction(TT, UT) {
        let mT = yT;
        for (let WT of TT.startState.facet(iT)) {
          let UT = WT(TT);
          UT.length && (mT = mT.concat(UT))
        }
        return !mT.length && TT.changes.empty ? null : new wT(TT.changes.invert(TT.startState.doc), mT, void 0, UT || TT.startState.selection, yT)
      }
      static selection(TT) {
        return new wT(void 0, yT, void 0, void 0, TT)
      }
    }

    function tT(TT, UT, mT, WT) {
      let zT = UT + 1 > mT + 20 ? UT - mT - 1 : 0,
        MT = TT.slice(zT, UT);
      return MT.push(WT), MT
    }

    function aT(TT, UT) {
      return TT.length ? UT.length ? TT.concat(UT) : TT : UT
    }
    const yT = [],
      XT = 200;

    function IT(TT, UT) {
      if (TT.length) {
        let mT = TT[TT.length - 1],
          WT = mT.selectionsAfter.slice(Math.max(0, mT.selectionsAfter.length - XT));
        return WT.length && WT[WT.length - 1].eq(UT) ? TT : (WT.push(UT), tT(TT, TT.length - 1, 1e9, mT.setSelAfter(WT)))
      }
      return [wT.selection([UT])]
    }

    function QT(TT) {
      let UT = TT[TT.length - 1],
        mT = TT.slice();
      return mT[TT.length - 1] = UT.setSelAfter(UT.selectionsAfter.slice(0, UT.selectionsAfter.length - 1)), mT
    }

    function sT(TT, UT) {
      if (!TT.length) return TT;
      let mT = TT.length,
        WT = yT;
      for (; mT;) {
        let zT = FT(TT[mT - 1], UT, WT);
        if (zT.changes && !zT.changes.empty || zT.effects.length) {
          let UT = TT.slice(0, mT);
          return UT[mT - 1] = zT, UT
        }
        UT = zT.mapped, mT--, WT = zT.selectionsAfter
      }
      return WT.length ? [wT.selection(WT)] : yT
    }

    function FT(TT, UT, mT) {
      let WT = aT(TT.selectionsAfter.length ? TT.selectionsAfter.map((TT => TT.map(UT))) : yT, mT);
      if (!TT.changes) return wT.selection(WT);
      let zT = TT.changes.map(UT),
        MT = UT.mapDesc(TT.changes, !0),
        nT = TT.mapped ? TT.mapped.composeDesc(MT) : MT;
      return new wT(zT, gT.B.mapEffects(TT.effects, UT), nT, TT.startSelection.map(MT), WT)
    }
    const PT = /^(input\.type|delete)($|\.)/;
    class VT {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = TT, this.undone = UT, this.prevTime = mT, this.prevUserEvent = WT
      }
      isolate() {
        return this.prevTime ? new VT(this.done, this.undone) : this
      }
      addChanges(TT, UT, mT, WT, zT) {
        let MT = this.done,
          nT = MT[MT.length - 1];
        return MT = nT && nT.changes && !nT.changes.empty && TT.changes && (!mT || PT.test(mT)) && (!nT.selectionsAfter.length && UT - this.prevTime < WT.newGroupDelay && WT.joinToEvent(zT, function(TT, UT) {
          let mT = [],
            WT = !1;
          return TT.iterChangedRanges(((TT, UT) => mT.push(TT, UT))), UT.iterChangedRanges(((TT, UT, zT, MT) => {
            for (let gT = 0; gT < mT.length;) {
              let TT = mT[gT++],
                UT = mT[gT++];
              MT >= TT && zT <= UT && (WT = !0)
            }
          })), WT
        }(nT.changes, TT.changes)) || "input.type.compose" == mT) ? tT(MT, MT.length - 1, WT.minDepth, new wT(TT.changes.compose(nT.changes), aT(gT.B.mapEffects(TT.effects, nT.changes), nT.effects), nT.mapped, nT.startSelection, yT)) : tT(MT, MT.length, WT.minDepth, TT), new VT(MT, yT, UT, mT)
      }
      addSelection(TT, UT, mT, WT) {
        let zT = this.done.length ? this.done[this.done.length - 1].selectionsAfter : yT;
        return zT.length > 0 && UT - this.prevTime < WT && mT == this.prevUserEvent && mT && /^select($|\.)/.test(mT) && (MT = zT[zT.length - 1], gT = TT, MT.hZ.length == gT.hZ.length && 0 === MT.hZ.filter(((TT, UT) => TT.empty != gT.hZ[UT].empty)).length) ? this : new VT(IT(this.done, TT), this.undone, UT, mT);
        var MT, gT
      }
      addMapping(TT) {
        return new VT(sT(this.done, TT), sT(this.undone, TT), this.prevTime, this.prevUserEvent)
      }
      pop(TT, UT, mT) {
        let WT = 0 == TT ? this.done : this.undone;
        if (0 == WT.length) return null;
        let zT = WT[WT.length - 1],
          MT = zT.selectionsAfter[0] || (zT.startSelection ? zT.startSelection.map(zT.changes.invertedDesc, 1) : UT.selection);
        if (mT && zT.selectionsAfter.length) return UT.update({
          selection: zT.selectionsAfter[zT.selectionsAfter.length - 1],
          annotations: fT.of({
            side: TT,
            rest: QT(WT),
            selection: MT
          }),
          userEvent: 0 == TT ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (zT.changes) {
          let mT = 1 == WT.length ? yT : WT.slice(0, WT.length - 1);
          return zT.mapped && (mT = sT(mT, zT.mapped)), UT.update({
            changes: zT.changes,
            selection: zT.startSelection,
            effects: zT.effects,
            annotations: fT.of({
              side: TT,
              rest: mT,
              selection: MT
            }),
            filter: !1,
            userEvent: 0 == TT ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    VT.empty = new VT(yT, yT);
    const uT = [{
      key: "Mod-z",
      run: YT,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: JT,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: JT,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: xT,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: dT,
      preventDefault: !0
    }];

    function CT(TT, UT) {
      return gT.l.create(TT.hZ.map(UT), TT.mainIndex)
    }

    function rT(TT, UT) {
      return TT.update({
        selection: UT,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function KT(TT, UT) {
      let {
        state: mT,
        dispatch: WT
      } = TT, zT = CT(mT.selection, UT);
      return !zT.eq(mT.selection, !0) && (WT(rT(mT, zT)), !0)
    }

    function ST(TT, UT) {
      return gT.l.cursor(UT ? TT.to : TT.from)
    }

    function GT(TT, UT) {
      return KT(TT, (mT => mT.empty ? TT.moveByChar(mT, UT) : ST(mT, UT)))
    }

    function NT(TT) {
      return TT.textDirectionAt(TT.state.selection.main.head) == nT.e.LTR
    }
    const ET = TT => GT(TT, !NT(TT)),
      hT = TT => GT(TT, NT(TT));

    function DT(TT, UT) {
      return KT(TT, (mT => mT.empty ? TT.moveByGroup(mT, UT) : ST(mT, UT)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function oT(TT, UT, mT) {
      if (UT.type.prop(mT)) return !0;
      let WT = UT.to - UT.from;
      return WT && (WT > 2 || /[^\s,.;:]/.test(TT.sliceDoc(UT.from, UT.to))) || UT.firstChild
    }

    function AT(TT, UT, mT) {
      let WT, zT, MT = (0, HT.jb)(TT).resolveInner(UT.head),
        nT = mT ? kT.g.closedBy : kT.g.openedBy;
      for (let gT = UT.head;;) {
        let UT = mT ? MT.childAfter(gT) : MT.childBefore(gT);
        if (!UT) break;
        oT(TT, UT, nT) ? MT = UT : gT = mT ? UT.to : UT.from
      }
      return zT = MT.type.prop(nT) && (WT = mT ? (0, HT.Z)(TT, MT.from, 1) : (0, HT.Z)(TT, MT.to, -1)) && WT.matched ? mT ? WT.end.to : WT.end.from : mT ? MT.to : MT.from, gT.l.cursor(zT, mT ? -1 : 1)
    }

    function RT(TT, UT) {
      return KT(TT, (mT => {
        if (!mT.empty) return ST(mT, UT);
        let WT = TT.moveVertically(mT, UT);
        return WT.head != mT.head ? WT : TT.moveToLineBoundary(mT, UT)
      }))
    }
    const TU = TT => RT(TT, !1),
      UU = TT => RT(TT, !0);

    function mU(TT) {
      let UT, mT = TT.scrollDOM.clientHeight < TT.scrollDOM.scrollHeight - 2,
        WT = 0,
        zT = 0;
      if (mT) {
        for (let UT of TT.state.facet(nT.i.scrollMargins)) {
          let mT = UT(TT);
          (null === mT || void 0 === mT ? void 0 : mT.top) && (WT = Math.max(null === mT || void 0 === mT ? void 0 : mT.top, WT)), (null === mT || void 0 === mT ? void 0 : mT.bottom) && (zT = Math.max(null === mT || void 0 === mT ? void 0 : mT.bottom, zT))
        }
        UT = TT.scrollDOM.clientHeight - WT - zT
      } else UT = (TT.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: WT,
        marginBottom: zT,
        selfScroll: mT,
        height: Math.max(TT.defaultLineHeight, UT - 5)
      }
    }

    function WU(TT, UT) {
      let mT, WT = mU(TT),
        {
          state: zT
        } = TT,
        MT = CT(zT.selection, (mT => mT.empty ? TT.moveVertically(mT, UT, WT.height) : ST(mT, UT)));
      if (MT.eq(zT.selection)) return !1;
      if (WT.selfScroll) {
        let UT = TT.coordsAtPos(zT.selection.main.head),
          gT = TT.scrollDOM.getBoundingClientRect(),
          HT = gT.top + WT.marginTop,
          kT = gT.bottom - WT.marginBottom;
        UT && UT.top > HT && UT.bottom < kT && (mT = nT.i.scrollIntoView(MT.main.head, {
          y: "start",
          yMargin: UT.top - HT
        }))
      }
      return TT.dispatch(rT(zT, MT), {
        effects: mT
      }), !0
    }
    const zU = TT => WU(TT, !1),
      MU = TT => WU(TT, !0);

    function gU(TT, UT, mT) {
      let WT = TT.lineBlockAt(UT.head),
        zT = TT.moveToLineBoundary(UT, mT);
      if (zT.head == UT.head && zT.head != (mT ? WT.to : WT.from) && (zT = TT.moveToLineBoundary(UT, mT, !1)), !mT && zT.head == WT.from && WT.length) {
        let mT = /^\s*/.exec(TT.state.sliceDoc(WT.from, Math.min(WT.from + 100, WT.to)))[0].length;
        mT && UT.head != WT.from + mT && (zT = gT.l.cursor(WT.from + mT))
      }
      return zT
    }

    function nU(TT, UT, mT) {
      let WT = !1,
        zT = CT(TT.selection, (UT => {
          let zT = (0, HT.Z)(TT, UT.head, -1) || (0, HT.Z)(TT, UT.head, 1) || UT.head > 0 && (0, HT.Z)(TT, UT.head - 1, 1) || UT.head < TT.doc.length && (0, HT.Z)(TT, UT.head + 1, -1);
          if (!zT || !zT.end) return UT;
          WT = !0;
          let MT = zT.start.from == UT.head ? zT.end.to : zT.end.from;
          return mT ? gT.l.range(UT.anchor, MT) : gT.l.cursor(MT)
        }));
      return !!WT && (UT(rT(TT, zT)), !0)
    }

    function HU(TT, UT) {
      let mT = CT(TT.state.selection, (TT => {
        let mT = UT(TT);
        return gT.l.range(TT.anchor, mT.head, mT.goalColumn, mT.bidiLevel || void 0, mT.assoc)
      }));
      return !mT.eq(TT.state.selection) && (TT.dispatch(rT(TT.state, mT)), !0)
    }

    function kU(TT, UT) {
      return HU(TT, (mT => TT.moveByChar(mT, UT)))
    }
    const jU = TT => kU(TT, !NT(TT)),
      lU = TT => kU(TT, NT(TT));

    function LU(TT, UT) {
      return HU(TT, (mT => TT.moveByGroup(mT, UT)))
    }

    function pU(TT, UT) {
      return HU(TT, (mT => TT.moveVertically(mT, UT)))
    }
    const BU = TT => pU(TT, !1),
      ZU = TT => pU(TT, !0);

    function cU(TT, UT) {
      return HU(TT, (mT => TT.moveVertically(mT, UT, mU(TT).height)))
    }
    const vU = TT => cU(TT, !1),
      fU = TT => cU(TT, !0),
      qU = TT => {
        let {
          state: UT,
          dispatch: mT
        } = TT;
        return mT(rT(UT, {
          anchor: 0
        })), !0
      },
      iU = TT => {
        let {
          state: UT,
          dispatch: mT
        } = TT;
        return mT(rT(UT, {
          anchor: UT.doc.length
        })), !0
      },
      bU = TT => {
        let {
          state: UT,
          dispatch: mT
        } = TT;
        return mT(rT(UT, {
          anchor: UT.selection.main.anchor,
          head: 0
        })), !0
      },
      OU = TT => {
        let {
          state: UT,
          dispatch: mT
        } = TT;
        return mT(rT(UT, {
          anchor: UT.selection.main.anchor,
          head: UT.doc.length
        })), !0
      };

    function eU(TT, UT) {
      let {
        state: mT
      } = TT, WT = mT.selection, zT = mT.selection.hZ.slice();
      for (let MT of mT.selection.hZ) {
        let WT = mT.doc.lineAt(MT.head);
        if (UT ? WT.to < TT.state.doc.length : WT.from > 0)
          for (let mT = MT;;) {
            let MT = TT.moveVertically(mT, UT);
            if (MT.head < WT.from || MT.head > WT.to) {
              zT.some((TT => TT.head == MT.head)) || zT.push(MT);
              break
            }
            if (MT.head == mT.head) break;
            mT = MT
          }
      }
      return zT.length != WT.hZ.length && (TT.dispatch(rT(mT, gT.l.create(zT, zT.length - 1))), !0)
    }

    function YU(TT, UT) {
      if (TT.state.readOnly) return !1;
      let mT = "delete.selection",
        {
          state: WT
        } = TT,
        zT = WT.changeByRange((WT => {
          let {
            from: zT,
            to: MT
          } = WT;
          if (zT == MT) {
            let gT = UT(WT);
            gT < zT ? (mT = "delete.backward", gT = JU(TT, gT, !1)) : gT > zT && (mT = "delete.forward", gT = JU(TT, gT, !0)), zT = Math.min(zT, gT), MT = Math.max(MT, gT)
          } else zT = JU(TT, zT, !1), MT = JU(TT, MT, !0);
          return zT == MT ? {
            range: WT
          } : {
            changes: {
              from: zT,
              to: MT
            },
            range: gT.l.cursor(zT, zT < WT.head ? -1 : 1)
          }
        }));
      return !zT.changes.empty && (TT.dispatch(WT.update(zT, {
        scrollIntoView: !0,
        userEvent: mT,
        effects: "delete.selection" == mT ? nT.i.announce.of(WT.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function JU(TT, UT, mT) {
      if (TT instanceof nT.i)
        for (let WT of TT.state.facet(nT.i.atomicRanges).map((UT => UT(TT)))) WT.between(UT, UT, ((TT, WT) => {
          TT < UT && WT > UT && (UT = mT ? WT : TT)
        }));
      return UT
    }
    const xU = (TT, UT, mT) => YU(TT, (WT => {
        let zT, MT, nT = WT.from,
          {
            state: kT
          } = TT,
          jT = kT.doc.lineAt(nT);
        if (mT && !UT && nT > jT.from && nT < jT.from + 200 && !/[^ \t]/.test(zT = jT.text.slice(0, nT - jT.from))) {
          if ("\t" == zT[zT.length - 1]) return nT - 1;
          let TT = (0, gT.S)(zT, kT.tabSize) % (0, HT.K)(kT) || (0, HT.K)(kT);
          for (let UT = 0; UT < TT && " " == zT[zT.length - 1 - UT]; UT++) nT--;
          MT = nT
        } else MT = (0, gT.U)(jT.text, nT - jT.from, UT, UT) + jT.from, MT == nT && jT.number != (UT ? kT.doc.lines : 1) ? MT += UT ? 1 : -1 : !UT && /[\ufe00-\ufe0f]/.test(jT.text.slice(MT - jT.from, nT - jT.from)) && (MT = (0, gT.U)(jT.text, MT - jT.from, !1, !1) + jT.from);
        return MT
      })),
      dU = TT => xU(TT, !1, !0),
      wU = TT => xU(TT, !0, !1),
      tU = (TT, UT) => YU(TT, (mT => {
        let WT = mT.head,
          {
            state: zT
          } = TT,
          MT = zT.doc.lineAt(WT),
          nT = zT.charCategorizer(WT);
        for (let TT = null;;) {
          if (WT == (UT ? MT.to : MT.from)) {
            WT == mT.head && MT.number != (UT ? zT.doc.lines : 1) && (WT += UT ? 1 : -1);
            break
          }
          let HT = (0, gT.U)(MT.text, WT - MT.from, UT) + MT.from,
            kT = MT.text.slice(Math.min(WT, HT) - MT.from, Math.max(WT, HT) - MT.from),
            jT = nT(kT);
          if (null != TT && jT != TT) break;
          " " == kT && WT == mT.head || (TT = jT), WT = HT
        }
        return WT
      })),
      aU = TT => tU(TT, !1);

    function yU(TT) {
      let UT = [],
        mT = -1;
      for (let WT of TT.selection.hZ) {
        let zT = TT.doc.lineAt(WT.from),
          MT = TT.doc.lineAt(WT.to);
        if (WT.empty || WT.to != MT.from || (MT = TT.doc.lineAt(WT.to - 1)), mT >= zT.number) {
          let TT = UT[UT.length - 1];
          TT.to = MT.to, TT.hZ.push(WT)
        } else UT.push({
          from: zT.from,
          to: MT.to,
          hZ: [WT]
        });
        mT = MT.number + 1
      }
      return UT
    }

    function XU(TT, UT, mT) {
      if (TT.readOnly) return !1;
      let WT = [],
        zT = [];
      for (let MT of yU(TT)) {
        if (mT ? MT.to == TT.doc.length : 0 == MT.from) continue;
        let UT = TT.doc.lineAt(mT ? MT.to + 1 : MT.from - 1),
          nT = UT.length + 1;
        if (mT) {
          WT.push({
            from: MT.to,
            to: UT.to
          }, {
            from: MT.from,
            insert: UT.text + TT.lineBreak
          });
          for (let UT of MT.hZ) zT.push(gT.l.range(Math.min(TT.doc.length, UT.anchor + nT), Math.min(TT.doc.length, UT.head + nT)))
        } else {
          WT.push({
            from: UT.from,
            to: MT.from
          }, {
            from: MT.to,
            insert: TT.lineBreak + UT.text
          });
          for (let TT of MT.hZ) zT.push(gT.l.range(TT.anchor - nT, TT.head - nT))
        }
      }
      return !!WT.length && (UT(TT.update({
        changes: WT,
        scrollIntoView: !0,
        selection: gT.l.create(zT, TT.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function IU(TT, UT, mT) {
      if (TT.readOnly) return !1;
      let WT = [];
      for (let MT of yU(TT)) mT ? WT.push({
        from: MT.from,
        insert: TT.doc.slice(MT.from, MT.to) + TT.lineBreak
      }) : WT.push({
        from: MT.to,
        insert: TT.lineBreak + TT.doc.slice(MT.from, MT.to)
      });
      let zT = TT.changes(WT);
      return UT(TT.update({
        changes: zT,
        selection: TT.selection.map(zT, mT ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const QU = sU(!1);

    function sU(TT) {
      return UT => {
        let {
          state: mT,
          dispatch: WT
        } = UT;
        if (mT.readOnly) return !1;
        let zT = mT.changeByRange((UT => {
          let {
            from: WT,
            to: zT
          } = UT, MT = mT.doc.lineAt(WT), nT = !TT && WT == zT && function(TT, UT) {
            if (/\(\)|\[\]|\{\}/.test(TT.sliceDoc(UT - 1, UT + 1))) return {
              from: UT,
              to: UT
            };
            let mT, WT = (0, HT.jb)(TT).resolveInner(UT),
              zT = WT.childBefore(UT),
              MT = WT.childAfter(UT);
            return zT && MT && zT.to <= UT && MT.from >= UT && (mT = zT.type.prop(kT.g.closedBy)) && mT.indexOf(MT.name) > -1 && TT.doc.lineAt(zT.to).from == TT.doc.lineAt(MT.from).from && !/\S/.test(TT.sliceDoc(zT.to, MT.from)) ? {
              from: zT.to,
              to: MT.from
            } : null
          }(mT, WT);
          TT && (WT = zT = (zT <= MT.to ? MT : mT.doc.lineAt(zT)).to);
          let jT = new HT.e(mT, {
              simulateBreak: WT,
              simulateDoubleBreak: !!nT
            }),
            lT = (0, HT.O)(jT, WT);
          for (null == lT && (lT = (0, gT.S)(/^\s*/.exec(mT.doc.lineAt(WT).text)[0], mT.tabSize)); zT < MT.to && /\s/.test(MT.text[zT - MT.from]);) zT++;
          nT ? ({
            from: WT,
            to: zT
          } = nT) : WT > MT.from && WT < MT.from + 100 && !/\S/.test(MT.text.slice(0, WT)) && (WT = MT.from);
          let LT = ["", (0, HT.T)(mT, lT)];
          return nT && LT.push((0, HT.T)(mT, jT.lineIndent(MT.from, -1))), {
            changes: {
              from: WT,
              to: zT,
              insert: gT.I.of(LT)
            },
            range: gT.l.cursor(WT + 1 + LT[1].length)
          }
        }));
        return WT(mT.update(zT, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function FU(TT, UT) {
      let mT = -1;
      return TT.changeByRange((WT => {
        let zT = [];
        for (let gT = WT.from; gT <= WT.to;) {
          let MT = TT.doc.lineAt(gT);
          MT.number > mT && (WT.empty || WT.to > MT.from) && (UT(MT, zT, WT), mT = MT.number), gT = MT.to + 1
        }
        let MT = TT.changes(zT);
        return {
          changes: zT,
          range: gT.l.range(MT.mapPos(WT.anchor, 1), MT.mapPos(WT.head, 1))
        }
      }))
    }
    const PU = TT => {
        let {
          state: UT,
          dispatch: mT
        } = TT;
        return !UT.readOnly && (mT(UT.update(FU(UT, ((TT, mT) => {
          mT.push({
            from: TT.from,
            insert: UT.facet(HT.X)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      VU = TT => {
        let {
          state: UT,
          dispatch: mT
        } = TT;
        return !UT.readOnly && (mT(UT.update(FU(UT, ((TT, mT) => {
          let WT = /^\s*/.exec(TT.text)[0];
          if (!WT) return;
          let zT = (0, gT.S)(WT, UT.tabSize),
            MT = 0,
            nT = (0, HT.T)(UT, Math.max(0, zT - (0, HT.K)(UT)));
          for (; MT < WT.length && MT < nT.length && WT.charCodeAt(MT) == nT.charCodeAt(MT);) MT++;
          mT.push({
            from: TT.from + MT,
            to: TT.from + WT.length,
            insert: nT.slice(MT)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      uU = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: TT => KT(TT, (UT => AT(TT.state, UT, !NT(TT)))),
        shift: TT => HU(TT, (UT => AT(TT.state, UT, !NT(TT))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: TT => KT(TT, (UT => AT(TT.state, UT, NT(TT)))),
        shift: TT => HU(TT, (UT => AT(TT.state, UT, NT(TT))))
      }, {
        key: "Alt-ArrowUp",
        run: TT => {
          let {
            state: UT,
            dispatch: mT
          } = TT;
          return XU(UT, mT, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: TT => {
          let {
            state: UT,
            dispatch: mT
          } = TT;
          return IU(UT, mT, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: TT => {
          let {
            state: UT,
            dispatch: mT
          } = TT;
          return XU(UT, mT, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: TT => {
          let {
            state: UT,
            dispatch: mT
          } = TT;
          return IU(UT, mT, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: TT => eU(TT, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: TT => eU(TT, !0)
      }, {
        key: "Escape",
        run: TT => {
          let {
            state: UT,
            dispatch: mT
          } = TT, WT = UT.selection, zT = null;
          return WT.hZ.length > 1 ? zT = gT.l.create([WT.main]) : WT.main.empty || (zT = gT.l.create([gT.l.cursor(WT.main.head)])), !!zT && (mT(rT(UT, zT)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: sU(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: TT => {
          let {
            state: UT,
            dispatch: mT
          } = TT, WT = yU(UT).map((TT => {
            let {
              from: mT,
              to: WT
            } = TT;
            return gT.l.range(mT, Math.min(WT + 1, UT.doc.length))
          }));
          return mT(UT.update({
            selection: gT.l.create(WT),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: TT => {
          let {
            state: UT,
            dispatch: mT
          } = TT, WT = CT(UT.selection, (TT => {
            let mT = (0, HT.jb)(UT),
              WT = mT.resolveStack(TT.from, 1);
            if (TT.empty) {
              let UT = mT.resolveStack(TT.from, -1);
              UT.node.from >= WT.node.from && UT.node.to <= WT.node.to && (WT = UT)
            }
            for (let UT = WT; UT; UT = UT.next) {
              let {
                node: mT
              } = UT;
              if ((mT.from < TT.from && mT.to >= TT.to || mT.to > TT.to && mT.from <= TT.from) && UT.next) return gT.l.range(mT.to, mT.from)
            }
            return TT
          }));
          return !WT.eq(UT.selection) && (mT(rT(UT, WT)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: VU
      }, {
        key: "Mod-]",
        run: PU
      }, {
        key: "Mod-Alt-\\",
        run: TT => {
          let {
            state: UT,
            dispatch: mT
          } = TT;
          if (UT.readOnly) return !1;
          let WT = Object.create(null),
            zT = new HT.e(UT, {
              overrideIndentation: TT => {
                let UT = WT[TT];
                return null == UT ? -1 : UT
              }
            }),
            MT = FU(UT, ((TT, mT, MT) => {
              let gT = (0, HT.O)(zT, TT.from);
              if (null == gT) return;
              /\S/.test(TT.text) || (gT = 0);
              let nT = /^\s*/.exec(TT.text)[0],
                kT = (0, HT.T)(UT, gT);
              (nT != kT || MT.from < TT.from + nT.length) && (WT[TT.from] = gT, mT.push({
                from: TT.from,
                to: TT.from + nT.length,
                insert: kT
              }))
            }));
          return MT.changes.empty || mT(UT.update(MT, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: TT => {
          if (TT.state.readOnly) return !1;
          let {
            state: UT
          } = TT, mT = UT.changes(yU(UT).map((TT => {
            let {
              from: mT,
              to: WT
            } = TT;
            return mT > 0 ? mT-- : WT < UT.doc.length && WT++, {
              from: mT,
              to: WT
            }
          }))), WT = CT(UT.selection, (UT => {
            let mT;
            if (TT.lineWrapping) {
              let WT = TT.lineBlockAt(UT.head),
                zT = TT.coordsAtPos(UT.head, UT.assoc || 1);
              zT && (mT = WT.bottom + TT.documentTop - zT.bottom + TT.defaultLineHeight / 2)
            }
            return TT.moveVertically(UT, !0, mT)
          })).map(mT);
          return TT.dispatch({
            changes: mT,
            selection: WT,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: TT => {
          let {
            state: UT,
            dispatch: mT
          } = TT;
          return nU(UT, mT, !1)
        }
      }, {
        key: "Mod-/",
        run: TT => {
          let {
            state: UT
          } = TT, mT = UT.doc.lineAt(UT.selection.main.from), WT = BT(TT.state, mT.from);
          return WT.line ? lT(TT) : !!WT.block && pT(TT)
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
        run: ET,
        shift: jU,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: TT => DT(TT, !NT(TT)),
        shift: TT => LU(TT, !NT(TT)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: TT => KT(TT, (UT => gU(TT, UT, !NT(TT)))),
        shift: TT => HU(TT, (UT => gU(TT, UT, !NT(TT)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: hT,
        shift: lU,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: TT => DT(TT, NT(TT)),
        shift: TT => LU(TT, NT(TT)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: TT => KT(TT, (UT => gU(TT, UT, NT(TT)))),
        shift: TT => HU(TT, (UT => gU(TT, UT, NT(TT)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: TU,
        shift: BU,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: qU,
        shift: bU
      }, {
        mac: "Ctrl-ArrowUp",
        run: zU,
        shift: vU
      }, {
        key: "ArrowDown",
        run: UU,
        shift: ZU,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: iU,
        shift: OU
      }, {
        mac: "Ctrl-ArrowDown",
        run: MU,
        shift: fU
      }, {
        key: "PageUp",
        run: zU,
        shift: vU
      }, {
        key: "PageDown",
        run: MU,
        shift: fU
      }, {
        key: "Home",
        run: TT => KT(TT, (UT => gU(TT, UT, !1))),
        shift: TT => HU(TT, (UT => gU(TT, UT, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: qU,
        shift: bU
      }, {
        key: "End",
        run: TT => KT(TT, (UT => gU(TT, UT, !0))),
        shift: TT => HU(TT, (UT => gU(TT, UT, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: iU,
        shift: OU
      }, {
        key: "Enter",
        run: QU,
        shift: QU
      }, {
        key: "Mod-a",
        run: TT => {
          let {
            state: UT,
            dispatch: mT
          } = TT;
          return mT(UT.update({
            selection: {
              anchor: 0,
              head: UT.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: dU,
        shift: dU,
        preventDefault: !0
      }, {
        key: "Delete",
        run: wU,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: aU,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: TT => tU(TT, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: TT => YU(TT, (UT => {
          let mT = TT.moveToLineBoundary(UT, !1).head;
          return UT.head > mT ? mT : Math.max(0, UT.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: TT => YU(TT, (UT => {
          let mT = TT.moveToLineBoundary(UT, !0).head;
          return UT.head < mT ? mT : Math.min(TT.state.doc.length, UT.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: ET,
        shift: jU,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: hT,
        shift: lU
      }, {
        key: "Ctrl-p",
        run: TU,
        shift: BU
      }, {
        key: "Ctrl-n",
        run: UU,
        shift: ZU
      }, {
        key: "Ctrl-a",
        run: TT => KT(TT, (UT => gT.l.cursor(TT.lineBlockAt(UT.head).from, 1))),
        shift: TT => HU(TT, (UT => gT.l.cursor(TT.lineBlockAt(UT.head).from)))
      }, {
        key: "Ctrl-e",
        run: TT => KT(TT, (UT => gT.l.cursor(TT.lineBlockAt(UT.head).to, -1))),
        shift: TT => HU(TT, (UT => gT.l.cursor(TT.lineBlockAt(UT.head).to)))
      }, {
        key: "Ctrl-d",
        run: wU
      }, {
        key: "Ctrl-h",
        run: dU
      }, {
        key: "Ctrl-k",
        run: TT => YU(TT, (UT => {
          let mT = TT.lineBlockAt(UT.head).to;
          return UT.head < mT ? mT : Math.min(TT.state.doc.length, UT.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: aU
      }, {
        key: "Ctrl-o",
        run: TT => {
          let {
            state: UT,
            dispatch: mT
          } = TT;
          if (UT.readOnly) return !1;
          let WT = UT.changeByRange((TT => ({
            changes: {
              from: TT.from,
              to: TT.to,
              insert: gT.I.of(["", ""])
            },
            range: gT.l.cursor(TT.from)
          })));
          return mT(UT.update(WT, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: TT => {
          let {
            state: UT,
            dispatch: mT
          } = TT;
          if (UT.readOnly) return !1;
          let WT = UT.changeByRange((TT => {
            if (!TT.empty || 0 == TT.from || TT.from == UT.doc.length) return {
              range: TT
            };
            let mT = TT.from,
              WT = UT.doc.lineAt(mT),
              zT = mT == WT.from ? mT - 1 : (0, gT.U)(WT.text, mT - WT.from, !1) + WT.from,
              MT = mT == WT.to ? mT + 1 : (0, gT.U)(WT.text, mT - WT.from, !0) + WT.from;
            return {
              changes: {
                from: zT,
                to: MT,
                insert: UT.doc.slice(mT, MT).append(UT.doc.slice(zT, mT))
              },
              range: gT.l.cursor(MT)
            }
          }));
          return !WT.changes.empty && (mT(UT.update(WT, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: MU
      }].map((TT => ({
        mac: TT.key,
        run: TT.run,
        shift: TT.shift
      }))))),
      CU = {
        key: "Tab",
        run: PU,
        shift: VU
      };
    var rU = mT(41512),
      KU = mT(41451),
      SU = mT(41519),
      GU = function(TT) {
        void 0 === TT && (TT = {});
        var {
          crosshairCursor: UT = !1
        } = TT, mT = [];
        !1 !== TT.closeBracketsKeymap && (mT = mT.concat(KU.e)), !1 !== TT.defaultKeymap && (mT = mT.concat(uU)), !1 !== TT.searchKeymap && (mT = mT.concat(rU.g)), !1 !== TT.historyKeymap && (mT = mT.concat(uT)), !1 !== TT.foldKeymap && (mT = mT.concat(HT.D)), !1 !== TT.completionKeymap && (mT = mT.concat(KU.o)), !1 !== TT.lintKeymap && (mT = mT.concat(SU.e));
        var WT = [];
        return !1 !== TT.lineNumbers && WT.push((0, nT.Y)()), !1 !== TT.highlightActiveLineGutter && WT.push((0, nT.O)()), !1 !== TT.highlightSpecialChars && WT.push((0, nT.R)()), !1 !== TT.history && WT.push(function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [OT, bT.of(TT), nT.i.domEventHandlers({
            beforeinput(TT, UT) {
              let mT = "historyUndo" == TT.inputType ? YT : "historyRedo" == TT.inputType ? JT : null;
              return !!mT && (TT.preventDefault(), mT(UT))
            }
          })]
        }()), !1 !== TT.foldGutter && WT.push((0, HT.z)()), !1 !== TT.drawSelection && WT.push((0, nT.z)()), !1 !== TT.dropCursor && WT.push((0, nT.D)()), !1 !== TT.allowMultipleSelections && WT.push(gT.m.allowMultipleSelections.of(!0)), !1 !== TT.indentOnInput && WT.push((0, HT.S)()), !1 !== TT.syntaxHighlighting && WT.push((0, HT.bb)(HT.r, {
          fallback: !0
        })), !1 !== TT.bracketMatching && WT.push((0, HT.k)()), !1 !== TT.closeBrackets && WT.push((0, KU.i)()), !1 !== TT.autocompletion && WT.push((0, KU.b)()), !1 !== TT.rectangularSelection && WT.push((0, nT.db)()), !1 !== UT && WT.push((0, nT.x)()), !1 !== TT.highlightActiveLine && WT.push((0, nT.P)()), !1 !== TT.highlightSelectionMatches && WT.push((0, rU.d)()), TT.tabSize && "number" === typeof TT.tabSize && WT.push(HT.X.of(" ".repeat(TT.tabSize))), WT.concat([nT.W.of(mT.flat())]).filter(Boolean)
      },
      NU = mT(41493);
    const EU = "#e5c07b",
      hU = "#e06c75",
      DU = "#56b6c2",
      oU = "#ffffff",
      AU = "#abb2bf",
      RU = "#7d8799",
      Tm = "#61afef",
      Um = "#98c379",
      mm = "#d19a66",
      Wm = "#c678dd",
      zm = "#21252b",
      Mm = "#2c313a",
      gm = "#282c34",
      nm = "#353a42",
      Hm = "#3E4451",
      km = "#528bff",
      jm = nT.i.theme({
        "&": {
          color: AU,
          backgroundColor: gm
        },
        ".cm-content": {
          caretColor: km
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: km
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: Hm
        },
        ".cm-panels": {
          backgroundColor: zm,
          color: AU
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
          backgroundColor: gm,
          color: RU,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: Mm
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: nm
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: nm,
          borderBottomColor: nm
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: Mm,
            color: AU
          }
        }
      }, {
        dark: !0
      }),
      lm = HT.d.define([{
        tag: NU.k.keyword,
        color: Wm
      }, {
        tag: [NU.k.name, NU.k.deleted, NU.k.character, NU.k.propertyName, NU.k.macroName],
        color: hU
      }, {
        tag: [NU.k.function(NU.k.variableName), NU.k.labelName],
        color: Tm
      }, {
        tag: [NU.k.color, NU.k.constant(NU.k.name), NU.k.standard(NU.k.name)],
        color: mm
      }, {
        tag: [NU.k.definition(NU.k.name), NU.k.separator],
        color: AU
      }, {
        tag: [NU.k.typeName, NU.k.className, NU.k.number, NU.k.changed, NU.k.annotation, NU.k.modifier, NU.k.self, NU.k.namespace],
        color: EU
      }, {
        tag: [NU.k.operator, NU.k.operatorKeyword, NU.k.url, NU.k.escape, NU.k.regexp, NU.k.link, NU.k.special(NU.k.string)],
        color: DU
      }, {
        tag: [NU.k.meta, NU.k.comment],
        color: RU
      }, {
        tag: NU.k.strong,
        fontWeight: "bold"
      }, {
        tag: NU.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: NU.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: NU.k.link,
        color: RU,
        textDecoration: "underline"
      }, {
        tag: NU.k.heading,
        fontWeight: "bold",
        color: hU
      }, {
        tag: [NU.k.atom, NU.k.bool, NU.k.special(NU.k.variableName)],
        color: mm
      }, {
        tag: [NU.k.processingInstruction, NU.k.string, NU.k.inserted],
        color: Um
      }, {
        tag: NU.k.invalid,
        color: oU
      }]),
      Lm = [jm, (0, HT.bb)(lm)];
    var pm = nT.i.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class Bm {
      constructor(TT, UT) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = UT, this.timeoutMS = UT, this.callbacks.push(TT)
      }
      Cl() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var TT = this.callbacks.slice();
          this.callbacks.length = 0, TT.forEach((TT => {
            try {
              TT()
            } catch (UT) {
              console.error("TimeoutLatch callback error:", UT)
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
    class Zm {
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
            TT.Cl(), TT.isDone && this.remove(TT)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var cm = null,
      fm = gT.b.define(),
      qm = [];

    function im(TT) {
      var {
        value: UT,
        selection: mT,
        onChange: WT,
        onStatistics: zT,
        onCreateEditor: HT,
        onUpdate: kT,
        extensions: jT = qm,
        autoFocus: lT,
        theme: LT = "light",
        height: pT = null,
        minHeight: BT = null,
        maxHeight: ZT = null,
        width: cT = null,
        minWidth: vT = null,
        maxWidth: fT = null,
        placeholder: qT = "",
        editable: iT = !0,
        readOnly: bT = !1,
        indentWithTab: OT = !0,
        basicSetup: eT = !0,
        root: YT,
        initialState: JT
      } = TT, [xT, dT] = (0, MT.useState)(), [wT, tT] = (0, MT.useState)(), [aT, yT] = (0, MT.useState)(), XT = (0, MT.useState)((() => ({
        current: null
      })))[0], IT = (0, MT.useState)((() => ({
        current: null
      })))[0], QT = nT.i.theme({
        "&": {
          height: pT,
          minHeight: BT,
          maxHeight: ZT,
          width: cT,
          minWidth: vT,
          maxWidth: fT
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), sT = nT.i.updateListener.of((TT => {
        if (TT.docChanged && "function" === typeof WT && !TT.transactions.some((TT => TT.annotation(fm)))) {
          XT.current ? XT.current.reset() : (XT.current = new Bm((() => {
            if (IT.current) {
              var TT = IT.current;
              IT.current = null, TT()
            }
            XT.current = null
          }), 200), ("undefined" === typeof window ? new Zm : (cm || (cm = new Zm), cm)).add(XT.current));
          var UT = TT.state.doc.toString();
          WT(UT, TT)
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
          hZ: TT.state.selection.hZ,
          selectionCode: TT.state.sliceDoc(TT.state.selection.main.from, TT.state.selection.main.to),
          selections: TT.state.selection.hZ.map((UT => TT.state.sliceDoc(UT.from, UT.to))),
          selectedText: TT.state.selection.hZ.some((TT => !TT.empty))
        }))(TT))
      })), FT = function(TT) {
        void 0 === TT && (TT = {});
        var {
          indentWithTab: UT = !0,
          editable: mT = !0,
          readOnly: WT = !1,
          theme: zT = "light",
          placeholder: MT = "",
          basicSetup: HT = !0
        } = TT, kT = [];
        switch (UT && kT.unshift(nT.W.of([CU])), HT && ("boolean" === typeof HT ? kT.unshift(GU()) : kT.unshift(GU(HT))), MT && kT.unshift((0, nT.cb)(MT)), zT) {
          case "light":
            kT.push(pm);
            break;
          case "dark":
            kT.push(Lm);
            break;
          case "none":
            break;
          default:
            kT.push(zT)
        }
        return !1 === mT && kT.push(nT.i.editable.of(!1)), WT && kT.push(gT.m.readOnly.of(!0)), [...kT]
      }({
        theme: LT,
        editable: iT,
        readOnly: bT,
        placeholder: qT,
        indentWithTab: OT,
        basicSetup: eT
      }), PT = [sT, QT, ...FT];
      return kT && "function" === typeof kT && PT.push(nT.i.updateListener.of(kT)), PT = PT.concat(jT), (0, MT.useLayoutEffect)((() => {
        if (xT && !aT) {
          var TT = {
              doc: UT,
              selection: mT,
              extensions: PT
            },
            WT = JT ? gT.m.fromJSON(JT.json, TT, JT.fields) : gT.m.create(TT);
          if (yT(WT), !wT) {
            var zT = new nT.i({
              state: WT,
              parent: xT,
              root: YT
            });
            tT(zT), HT && HT(zT, WT)
          }
        }
        return () => {
          wT && (yT(void 0), tT(void 0))
        }
      }), [xT, aT]), (0, MT.useEffect)((() => {
        TT.container && dT(TT.container)
      }), [TT.container]), (0, MT.useEffect)((() => () => {
        wT && (wT.destroy(), tT(void 0)), XT.current && (XT.current.cancel(), XT.current = null)
      }), [wT]), (0, MT.useEffect)((() => {
        lT && wT && wT.focus()
      }), [lT, wT]), (0, MT.useEffect)((() => {
        wT && wT.dispatch({
          effects: gT.B.reconfigure.of(PT)
        })
      }), [LT, jT, pT, BT, ZT, cT, vT, fT, qT, iT, bT, OT, eT, WT, kT]), (0, MT.useEffect)((() => {
        if (void 0 !== UT) {
          var TT = wT ? wT.state.doc.toString() : "";
          if (wT && UT !== TT) {
            var mT = () => {
              wT && UT !== wT.state.doc.toString() && wT.dispatch({
                changes: {
                  from: 0,
                  to: wT.state.doc.toString().length,
                  insert: UT || ""
                },
                annotations: [fm.of(!0)]
              })
            };
            XT.current && !XT.current.isDone ? IT.current = mT : mT()
          }
        }
      }), [UT, wT]), {
        state: aT,
        setState: yT,
        view: wT,
        setView: tT,
        container: xT,
        setContainer: dT
      }
    }
    var bm = mT(1188),
      Om = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      em = (0, MT.forwardRef)(((TT, UT) => {
        var {
          className: mT,
          value: gT = "",
          selection: nT,
          extensions: HT = [],
          onChange: kT,
          onStatistics: jT,
          onCreateEditor: lT,
          onUpdate: LT,
          autoFocus: pT,
          theme: BT = "light",
          height: ZT,
          minHeight: cT,
          maxHeight: vT,
          width: fT,
          minWidth: qT,
          maxWidth: iT,
          basicSetup: bT,
          placeholder: OT,
          indentWithTab: eT,
          editable: YT,
          readOnly: JT,
          root: xT,
          initialState: dT
        } = TT, wT = (0, zT.b)(TT, Om), tT = (0, MT.useRef)(null), {
          state: aT,
          view: yT,
          container: XT,
          setContainer: IT
        } = im({
          root: xT,
          value: gT,
          autoFocus: pT,
          theme: BT,
          height: ZT,
          minHeight: cT,
          maxHeight: vT,
          width: fT,
          minWidth: qT,
          maxWidth: iT,
          basicSetup: bT,
          placeholder: OT,
          indentWithTab: eT,
          editable: YT,
          readOnly: JT,
          selection: nT,
          onChange: kT,
          onStatistics: jT,
          onCreateEditor: lT,
          onUpdate: LT,
          extensions: HT,
          initialState: dT
        });
        (0, MT.useImperativeHandle)(UT, (() => ({
          editor: tT.current,
          state: aT,
          view: yT
        })), [tT, XT, aT, yT]);
        var QT = (0, MT.useCallback)((TT => {
          tT.current = TT, IT(TT)
        }), [IT]);
        if ("string" !== typeof gT) throw new Error("value must be typeof string but got " + typeof gT);
        var sT = "string" === typeof BT ? "cm-theme-" + BT : "cm-theme";
        return (0, bm.jsx)("div", (0, WT.d)({
          ref: QT,
          className: sT + (mT ? " " + mT : "")
        }, wT))
      }));
    em.displayName = "CodeMirror";
    const Ym = em
  },
  41475: (TT, UT, mT) => {
    function WT() {
      var TT = arguments[0];
      "string" == typeof TT && (TT = document.createElement(TT));
      var UT = 1,
        mT = arguments[1];
      if (mT && "object" == typeof mT && null == mT.nodeType && !Array.isArray(mT)) {
        for (var WT in mT)
          if (Object.prototype.hasOwnProperty.call(mT, WT)) {
            var MT = mT[WT];
            "string" == typeof MT ? TT.setAttribute(WT, MT) : null != MT && (TT[WT] = MT)
          } UT++
      }
      for (; UT < arguments.length; UT++) zT(TT, arguments[UT]);
      return TT
    }

    function zT(TT, UT) {
      if ("string" == typeof UT) TT.appendChild(document.createTextNode(UT));
      else if (null == UT);
      else if (null != UT.nodeType) TT.appendChild(UT);
      else {
        if (!Array.isArray(UT)) throw new RangeError("Unsupported child node: " + UT);
        for (var mT = 0; mT < UT.length; mT++) zT(TT, UT[mT])
      }
    }
    mT.d(UT, {
      e: () => WT
    })
  },
  41469: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT
    });
    const WT = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      zT = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      MT = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class gT {
      constructor(TT, UT) {
        this.rules = [];
        let {
          finish: mT
        } = UT || {};

        function WT(TT) {
          return /^@/.test(TT) ? [TT] : TT.split(/,\s*/)
        }

        function zT(TT, UT, MT, gT) {
          let nT = [],
            HT = /^@(\w+)\b/.exec(TT[0]),
            kT = HT && "keyframes" == HT[1];
          if (HT && null == UT) return MT.push(TT[0] + ";");
          for (let mT in UT) {
            let gT = UT[mT];
            if (/&/.test(mT)) zT(mT.split(/,\s*/).map((UT => TT.map((TT => UT.replace(/&/, TT))))).reduce(((TT, UT) => TT.concat(UT))), gT, MT);
            else if (gT && "object" == typeof gT) {
              if (!HT) throw new RangeError("The value of a property (" + mT + ") should be a primitive value.");
              zT(WT(mT), gT, nT, kT)
            } else null != gT && nT.push(mT.replace(/_.*/, "").replace(/[A-Z]/g, (TT => "-" + TT.toLowerCase())) + ": " + gT + ";")
          }(nT.length || kT) && MT.push((!mT || HT || gT ? TT : TT.map(mT)).join(", ") + " {" + nT.join(" ") + "}")
        }
        for (let MT in TT) zT(WT(MT), TT[MT], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let TT = MT[WT] || 1;
        return MT[WT] = TT + 1, "\u037c" + TT.toString(36)
      }
      static mount(TT, UT, mT) {
        let WT = TT[zT],
          MT = mT && mT.nonce;
        WT ? MT && WT.setNonce(MT) : WT = new HT(TT, MT), WT.mount(Array.isArray(UT) ? UT : [UT], TT)
      }
    }
    let nT = new Map;
    class HT {
      constructor(TT, UT) {
        let mT = TT.ownerDocument || TT,
          WT = mT.defaultView;
        if (!TT.head && TT.adoptedStyleSheets && WT.CSSStyleSheet) {
          let UT = nT.get(mT);
          if (UT) return TT[zT] = UT;
          this.sheet = new WT.CSSStyleSheet, nT.set(mT, this)
        } else this.styleTag = mT.createElement("style"), UT && this.styleTag.setAttribute("nonce", UT);
        this.modules = [], TT[zT] = this
      }
      mount(TT, UT) {
        let mT = this.sheet,
          WT = 0,
          zT = 0;
        for (let MT = 0; MT < TT.length; MT++) {
          let UT = TT[MT],
            gT = this.modules.indexOf(UT);
          if (gT < zT && gT > -1 && (this.modules.splice(gT, 1), zT--, gT = -1), -1 == gT) {
            if (this.modules.splice(zT++, 0, UT), mT)
              for (let TT = 0; TT < UT.rules.length; TT++) mT.insertRule(UT.rules[TT], WT++)
          } else {
            for (; zT < gT;) WT += this.modules[zT++].rules.length;
            WT += UT.rules.length, zT++
          }
        }
        if (mT) UT.adoptedStyleSheets.indexOf(this.sheet) < 0 && (UT.adoptedStyleSheets = [this.sheet, ...UT.adoptedStyleSheets]);
        else {
          let TT = "";
          for (let UT = 0; UT < this.modules.length; UT++) TT += this.modules[UT].getRules() + "\n";
          this.styleTag.textContent = TT;
          let mT = UT.head || UT;
          this.styleTag.parentNode != mT && mT.insertBefore(this.styleTag, mT.firstChild)
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