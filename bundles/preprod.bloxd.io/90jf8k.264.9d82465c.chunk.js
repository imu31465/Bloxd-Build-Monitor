export const id = 264;
export const ids = [264];
export const modules = {
  39146: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => MW,
      h: () => DW,
      i: () => TW,
      m: () => dF,
      p: () => cS,
      s: () => PF,
      u: () => eW
    });
    var CF = SF(39153),
      AF = SF(39162),
      uF = SF(39170);
    class hF {
      constructor(FF, WF, SF, CF) {
        this.state = FF, this.pos = WF, this.explicit = SF, this.view = CF, this.abortListeners = [], this.abortOnDocChange = !1
      }
      tokenBefore(FF) {
        let WF = (0, uF.ib)(this.state).resolveInner(this.pos, -1);
        for (; WF && FF.indexOf(WF.name) < 0;) WF = WF.parent;
        return WF ? {
          from: WF.from,
          to: this.pos,
          text: this.state.sliceDoc(WF.from, this.pos),
          type: WF.type
        } : null
      }
      matchBefore(FF) {
        let WF = this.state.doc.lineAt(this.pos),
          SF = Math.max(WF.from, this.pos - 250),
          CF = WF.text.slice(SF - WF.from, this.pos - WF.from),
          AF = CF.search(eF(FF, !1));
        return AF < 0 ? null : {
          from: SF + AF,
          to: this.pos,
          text: CF.slice(AF)
        }
      }
      get aborted() {
        return null == this.abortListeners
      }
      addEventListener(FF, WF, SF) {
        "abort" == FF && this.abortListeners && (this.abortListeners.push(WF), SF && SF.onDocChange && (this.abortOnDocChange = !0))
      }
    }

    function bW(FF) {
      let WF = Object.keys(FF).join(""),
        SF = /\w/.test(WF);
      return SF && (WF = WF.replace(/\w/g, "")), `[${SF?"\\w":""}${WF.replace(/[^\w\s]/g,"\\$&")}]`
    }

    function dF(FF) {
      let WF = FF.map((FF => "string" == typeof FF ? {
          label: FF
        } : FF)),
        [SF, CF] = WF.every((FF => /^\w+$/.test(FF.label))) ? [/\w*$/, /\w+$/] : function(FF) {
          let WF = Object.create(null),
            SF = Object.create(null);
          for (let {
              label: AF
            }
            of FF) {
            WF[AF[0]] = !0;
            for (let FF = 1; FF < AF.length; FF++) SF[AF[FF]] = !0
          }
          let CF = bW(WF) + bW(SF) + "*$";
          return [new RegExp("^" + CF), new RegExp(CF)]
        }(WF);
      return FF => {
        let AF = FF.matchBefore(CF);
        return AF || FF.explicit ? {
          from: AF ? AF.from : FF.pos,
          options: WF,
          validFor: SF
        } : null
      }
    }

    function PF(FF, WF) {
      return SF => {
        for (let WF = (0, uF.ib)(SF.state).resolveInner(SF.pos, -1); WF; WF = WF.parent) {
          if (FF.indexOf(WF.name) > -1) return null;
          if (WF.type.isTop) break
        }
        return WF(SF)
      }
    }
    class RF {
      constructor(FF, WF, SF, CF) {
        this.completion = FF, this.source = WF, this.match = SF, this.score = CF
      }
    }

    function iW(FF) {
      return FF.selection.main.from
    }

    function eF(FF, WF) {
      var SF;
      let {
        source: CF
      } = FF, AF = WF && "^" != CF[0], uF = "$" != CF[CF.length - 1];
      return AF || uF ? new RegExp(`${AF?"^":""}(?:${CF})${uF?"$":""}`, null !== (SF = FF.flags) && void 0 !== SF ? SF : FF.ignoreCase ? "i" : "") : FF
    }
    const EF = CF.e.define();

    function QF(FF, WF, SF, AF) {
      let {
        main: uF
      } = FF.selection, hF = SF - uF.from, bW = AF - uF.from;
      return {
        ...FF.changeByRange((dF => {
          if (dF != uF && SF != AF && FF.sliceDoc(dF.from + hF, dF.from + bW) != FF.sliceDoc(SF, AF)) return {
            range: dF
          };
          let PF = FF.toText(WF);
          return {
            changes: {
              from: dF.from + hF,
              to: AF == uF.from ? dF.to : dF.from + bW,
              insert: PF
            },
            range: CF.m.cursor(dF.from + hF + PF.length)
          }
        })),
        scrollIntoView: !0,
        userEvent: "input.complete"
      }
    }
    const rW = new WeakMap;

    function gW(FF) {
      if (!Array.isArray(FF)) return FF;
      let WF = rW.get(FF);
      return WF || rW.set(FF, WF = dF(FF)), WF
    }
    const tW = CF.H.define(),
      TF = CF.H.define();
    class aW {
      constructor(FF) {
        this.pattern = FF, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
        for (let WF = 0; WF < FF.length;) {
          let SF = (0, CF.S)(FF, WF),
            AF = (0, CF.W)(SF);
          this.chars.push(SF);
          let uF = FF.slice(WF, WF + AF),
            hF = uF.toUpperCase();
          this.folded.push((0, CF.S)(hF == uF ? uF.toLowerCase() : hF, 0)), WF += AF
        }
        this.astral = FF.length != this.chars.length
      }
      ret(FF, WF) {
        return this.score = FF, this.matched = WF, this
      }
      match(FF) {
        if (0 == this.pattern.length) return this.ret(-100, []);
        if (FF.length < this.pattern.length) return null;
        let {
          chars: WF,
          folded: SF,
          any: AF,
          precise: uF,
          byWord: hF
        } = this;
        if (1 == WF.length) {
          let AF = (0, CF.S)(FF, 0),
            uF = (0, CF.W)(AF),
            hF = uF == FF.length ? 0 : -100;
          if (AF == WF[0]);
          else {
            if (AF != SF[0]) return null;
            hF += -200
          }
          return this.ret(hF, [0, uF])
        }
        let bW = FF.indexOf(this.pattern);
        if (0 == bW) return this.ret(FF.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
        let dF = WF.length,
          PF = 0;
        if (bW < 0) {
          for (let uF = 0, hF = Math.min(FF.length, 200); uF < hF && PF < dF;) {
            let hF = (0, CF.S)(FF, uF);
            hF != WF[PF] && hF != SF[PF] || (AF[PF++] = uF), uF += (0, CF.W)(hF)
          }
          if (PF < dF) return null
        }
        let RF = 0,
          iW = 0,
          eF = !1,
          EF = 0,
          QF = -1,
          rW = -1,
          gW = /[a-z]/.test(FF),
          tW = !0;
        for (let TF = 0, aW = Math.min(FF.length, 200), kW = 0; TF < aW && iW < dF;) {
          let AF = (0, CF.S)(FF, TF);
          bW < 0 && (RF < dF && AF == WF[RF] && (uF[RF++] = TF), EF < dF && (AF == WF[EF] || AF == SF[EF] ? (0 == EF && (QF = TF), rW = TF + 1, EF++) : EF = 0));
          let PF, aW = AF < 255 ? AF >= 48 && AF <= 57 || AF >= 97 && AF <= 122 ? 2 : AF >= 65 && AF <= 90 ? 1 : 0 : (PF = (0, CF.fb)(AF)) != PF.toLowerCase() ? 1 : PF != PF.toUpperCase() ? 2 : 0;
          (!TF || 1 == aW && gW || 0 == kW && 0 != aW) && (WF[iW] == AF || SF[iW] == AF && (eF = !0) ? hF[iW++] = TF : hF.length && (tW = !1)), kW = aW, TF += (0, CF.W)(AF)
        }
        return iW == dF && 0 == hF[0] && tW ? this.result((eF ? -200 : 0) - 100, hF, FF) : EF == dF && 0 == QF ? this.ret(-200 - FF.length + (rW == FF.length ? 0 : -100), [0, rW]) : bW > -1 ? this.ret(-700 - FF.length, [bW, bW + this.pattern.length]) : EF == dF ? this.ret(-900 - FF.length, [QF, rW]) : iW == dF ? this.result((eF ? -200 : 0) - 100 - 700 + (tW ? 0 : -1100), hF, FF) : 2 == WF.length ? null : this.result((AF[0] ? -700 : 0) - 200 - 1100, AF, FF)
      }
      result(FF, WF, SF) {
        let AF = [],
          uF = 0;
        for (let hF of WF) {
          let FF = hF + (this.astral ? (0, CF.W)((0, CF.S)(SF, hF)) : 1);
          uF && AF[uF - 1] == hF ? AF[uF - 1] = FF : (AF[uF++] = hF, AF[uF++] = FF)
        }
        return this.ret(FF - SF.length, AF)
      }
    }
    class kW {
      constructor(FF) {
        this.pattern = FF, this.matched = [], this.score = 0, this.folded = FF.toLowerCase()
      }
      match(FF) {
        if (FF.length < this.pattern.length) return null;
        let WF = FF.slice(0, this.pattern.length),
          SF = WF == this.pattern ? 0 : WF.toLowerCase() == this.folded ? -200 : null;
        return null == SF ? null : (this.matched = [0, WF.length], this.score = SF + (FF.length == this.pattern.length ? 0 : -100), this)
      }
    }
    const qW = CF.t.define({
      combine: FF => (0, CF.Y)(FF, {
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
        positionInfo: NF,
        filterStrict: !1,
        compareCompletions: (FF, WF) => (FF.sortText || FF.label).localeCompare(WF.sortText || WF.label),
        interactionDelay: 75,
        updateSyncTime: 100
      }, {
        defaultKeymap: (FF, WF) => FF && WF,
        closeOnBlur: (FF, WF) => FF && WF,
        icons: (FF, WF) => FF && WF,
        tooltipClass: (FF, WF) => SF => VF(FF(SF), WF(SF)),
        optionClass: (FF, WF) => SF => VF(FF(SF), WF(SF)),
        addToOptions: (FF, WF) => FF.concat(WF),
        filterStrict: (FF, WF) => FF || WF
      })
    });

    function VF(FF, WF) {
      return FF ? WF ? FF + " " + WF : FF : WF
    }

    function NF(FF, WF, SF, CF, uF, hF) {
      let bW, dF, PF = FF.textDirection == AF.h.RTL,
        RF = PF,
        iW = !1,
        eF = "top",
        EF = WF.left - uF.left,
        QF = uF.right - WF.right,
        rW = CF.right - CF.left,
        gW = CF.bottom - CF.top;
      if (RF && EF < Math.min(rW, QF) ? RF = !1 : !RF && QF < Math.min(rW, EF) && (RF = !0), rW <= (RF ? EF : QF)) bW = Math.max(uF.top, Math.min(SF.top, uF.bottom - gW)) - WF.top, dF = Math.min(400, RF ? EF : QF);
      else {
        iW = !0, dF = Math.min(400, (PF ? WF.right : uF.right - WF.left) - 30);
        let FF = uF.bottom - WF.bottom;
        FF >= gW || FF > WF.top ? bW = SF.bottom - WF.top : (eF = "bottom", bW = WF.bottom - SF.top)
      }
      return {
        style: `${eF}: ${bW/((WF.bottom-WF.top)/hF.offsetHeight)}px; max-width: ${dF/((WF.right-WF.left)/hF.offsetWidth)}px`,
        class: "cm-completionInfo-" + (iW ? PF ? "left-narrow" : "right-narrow" : RF ? "left" : "right")
      }
    }
    const DF = CF.H.define();

    function LF(FF, WF, SF) {
      if (FF <= SF) return {
        from: 0,
        to: FF
      };
      if (WF < 0 && (WF = 0), WF <= FF >> 1) {
        let FF = Math.floor(WF / SF);
        return {
          from: FF * SF,
          to: (FF + 1) * SF
        }
      }
      let CF = Math.floor((FF - WF) / SF);
      return {
        from: FF - (CF + 1) * SF,
        to: FF - CF * SF
      }
    }
    class mW {
      constructor(FF, WF, SF) {
        this.view = FF, this.stateField = WF, this.applyCompletion = SF, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
          read: () => this.measureInfo(),
          write: FF => this.placeInfo(FF),
          key: this
        }, this.space = null, this.currentClass = "";
        let CF = FF.state.field(WF),
          {
            options: AF,
            selected: uF
          } = CF.open,
          hF = FF.state.facet(qW);
        this.optionContent = function(FF) {
          let WF = FF.addToOptions.slice();
          return FF.icons && WF.push({
            render(FF) {
              let WF = document.createElement("div");
              return WF.classList.add("cm-completionIcon"), FF.type && WF.classList.add(...FF.type.split(/\s+/g).map((FF => "cm-completionIcon-" + FF))), WF.setAttribute("aria-hidden", "true"), WF
            },
            position: 20
          }), WF.push({
            render(FF, WF, SF, CF) {
              let AF = document.createElement("span");
              AF.className = "cm-completionLabel";
              let uF = FF.displayLabel || FF.label,
                hF = 0;
              for (let bW = 0; bW < CF.length;) {
                let FF = CF[bW++],
                  WF = CF[bW++];
                FF > hF && AF.appendChild(document.createTextNode(uF.slice(hF, FF)));
                let SF = AF.appendChild(document.createElement("span"));
                SF.appendChild(document.createTextNode(uF.slice(FF, WF))), SF.className = "cm-completionMatchedText", hF = WF
              }
              return hF < uF.length && AF.appendChild(document.createTextNode(uF.slice(hF))), AF
            },
            position: 50
          }, {
            render(FF) {
              if (!FF.detail) return null;
              let WF = document.createElement("span");
              return WF.className = "cm-completionDetail", WF.textContent = FF.detail, WF
            },
            position: 80
          }), WF.sort(((FF, WF) => FF.position - WF.position)).map((FF => FF.render))
        }(hF), this.optionClass = hF.optionClass, this.tooltipClass = hF.tooltipClass, this.range = LF(AF.length, uF, hF.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(FF.state), this.dom.addEventListener("mousedown", (SF => {
          let {
            options: CF
          } = FF.state.field(WF).open;
          for (let WF, AF = SF.target; AF && AF != this.dom; AF = AF.parentNode)
            if ("LI" == AF.nodeName && (WF = /-(\d+)$/.exec(AF.id)) && +WF[1] < CF.length) return this.applyCompletion(FF, CF[+WF[1]]), void SF.preventDefault();
          if (SF.target == this.list) {
            let WF = this.list.classList.contains("cm-completionListIncompleteTop") && SF.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && SF.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
            null != WF && (FF.dispatch({
              effects: DF.of(WF)
            }), SF.preventDefault())
          }
        })), this.dom.addEventListener("focusout", (WF => {
          let SF = FF.state.field(this.stateField, !1);
          SF && SF.tooltip && FF.state.facet(qW).closeOnBlur && WF.relatedTarget != FF.contentDOM && FF.dispatch({
            effects: TF.of(null)
          })
        })), this.showOptions(AF, CF.id)
      }
      mount() {
        this.updateSel()
      }
      showOptions(FF, WF) {
        this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(FF, WF, this.range)), this.list.addEventListener("scroll", (() => {
          this.info && this.view.requestMeasure(this.placeInfoReq)
        }))
      }
      update(FF) {
        var WF;
        let SF = FF.state.field(this.stateField),
          CF = FF.startState.field(this.stateField);
        if (this.updateTooltipClass(FF.state), SF != CF) {
          let {
            options: AF,
            selected: uF,
            disabled: hF
          } = SF.open;
          CF.open && CF.open.options == AF || (this.range = LF(AF.length, uF, FF.state.facet(qW).maxRenderedOptions), this.showOptions(AF, SF.id)), this.updateSel(), hF != (null === (WF = CF.open) || void 0 === WF ? void 0 : WF.disabled) && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!hF)
        }
      }
      updateTooltipClass(FF) {
        let WF = this.tooltipClass(FF);
        if (WF != this.currentClass) {
          for (let FF of this.currentClass.split(" ")) FF && this.dom.classList.remove(FF);
          for (let FF of WF.split(" ")) FF && this.dom.classList.add(FF);
          this.currentClass = WF
        }
      }
      positioned(FF) {
        this.space = FF, this.info && this.view.requestMeasure(this.placeInfoReq)
      }
      updateSel() {
        let FF = this.view.state.field(this.stateField),
          WF = FF.open;
        (WF.selected > -1 && WF.selected < this.range.from || WF.selected >= this.range.to) && (this.range = LF(WF.options.length, WF.selected, this.view.state.facet(qW).maxRenderedOptions), this.showOptions(WF.options, FF.id));
        let SF = this.updateSelectedOption(WF.selected);
        if (SF) {
          this.destroyInfo();
          let {
            completion: CF
          } = WF.options[WF.selected], {
            info: uF
          } = CF;
          if (!uF) return;
          let hF = "string" === typeof uF ? document.createTextNode(uF) : uF(CF);
          if (!hF) return;
          "then" in hF ? hF.then((WF => {
            WF && this.view.state.field(this.stateField, !1) == FF && this.addInfoPane(WF, CF)
          })).catch((FF => (0, AF.ab)(this.view.state, FF, "completion info"))) : (this.addInfoPane(hF, CF), SF.setAttribute("aria-describedby", this.info.id))
        }
      }
      addInfoPane(FF, WF) {
        this.destroyInfo();
        let SF = this.info = document.createElement("div");
        if (SF.className = "cm-tooltip cm-completionInfo", SF.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != FF.nodeType) SF.appendChild(FF), this.infoDestroy = null;
        else {
          let {
            dom: WF,
            destroy: CF
          } = FF;
          SF.appendChild(WF), this.infoDestroy = CF || null
        }
        this.dom.appendChild(SF), this.view.requestMeasure(this.placeInfoReq)
      }
      updateSelectedOption(FF) {
        let WF = null;
        for (let SF = this.list.firstChild, CF = this.range.from; SF; SF = SF.nextSibling, CF++) "LI" == SF.nodeName && SF.id ? CF == FF ? SF.hasAttribute("aria-selected") || (SF.setAttribute("aria-selected", "true"), WF = SF) : SF.hasAttribute("aria-selected") && (SF.removeAttribute("aria-selected"), SF.removeAttribute("aria-describedby")) : CF--;
        return WF && function(FF, WF) {
          let SF = FF.getBoundingClientRect(),
            CF = WF.getBoundingClientRect(),
            AF = SF.height / FF.offsetHeight;
          CF.top < SF.top ? FF.scrollTop -= (SF.top - CF.top) / AF : CF.bottom > SF.bottom && (FF.scrollTop += (CF.bottom - SF.bottom) / AF)
        }(this.list, WF), WF
      }
      measureInfo() {
        let FF = this.dom.querySelector("[aria-selected]");
        if (!FF || !this.info) return null;
        let WF = this.dom.getBoundingClientRect(),
          SF = this.info.getBoundingClientRect(),
          CF = FF.getBoundingClientRect(),
          AF = this.space;
        if (!AF) {
          let FF = this.dom.ownerDocument.documentElement;
          AF = {
            left: 0,
            top: 0,
            right: FF.clientWidth,
            bottom: FF.clientHeight
          }
        }
        return CF.top > Math.min(AF.bottom, WF.bottom) - 10 || CF.bottom < Math.max(AF.top, WF.top) + 10 ? null : this.view.state.facet(qW).positionInfo(this.view, WF, CF, SF, AF, this.dom)
      }
      placeInfo(FF) {
        this.info && (FF ? (FF.style && (this.info.style.cssText = FF.style), this.info.className = "cm-tooltip cm-completionInfo " + (FF.class || "")) : this.info.style.cssText = "top: -1e6px")
      }
      createListBox(FF, WF, SF) {
        const CF = document.createElement("ul");
        CF.id = WF, CF.setAttribute("role", "listbox"), CF.setAttribute("aria-expanded", "true"), CF.setAttribute("aria-label", this.view.state.phrase("Completions")), CF.addEventListener("mousedown", (FF => {
          FF.target == CF && FF.preventDefault()
        }));
        let AF = null;
        for (let uF = SF.from; uF < SF.to; uF++) {
          let {
            completion: hF,
            match: bW
          } = FF[uF], {
            section: dF
          } = hF;
          if (dF) {
            let FF = "string" == typeof dF ? dF : dF.name;
            if (FF != AF && (uF > SF.from || 0 == SF.from))
              if (AF = FF, "string" != typeof dF && dF.header) CF.appendChild(dF.header(dF));
              else {
                CF.appendChild(document.createElement("completion-section")).textContent = FF
              }
          }
          const PF = CF.appendChild(document.createElement("li"));
          PF.id = WF + "-" + uF, PF.setAttribute("role", "option");
          let RF = this.optionClass(hF);
          RF && (PF.className = RF);
          for (let FF of this.optionContent) {
            let WF = FF(hF, this.view.state, this.view, bW);
            WF && PF.appendChild(WF)
          }
        }
        return SF.from && CF.classList.add("cm-completionListIncompleteTop"), SF.to < FF.length && CF.classList.add("cm-completionListIncompleteBottom"), CF
      }
      destroyInfo() {
        this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
      }
      destroy() {
        this.destroyInfo()
      }
    }

    function OF(FF, WF) {
      return SF => new mW(SF, FF, WF)
    }

    function xW(FF) {
      return 100 * (FF.boost || 0) + (FF.apply ? 10 : 0) + (FF.info ? 5 : 0) + (FF.type ? 1 : 0)
    }
    class ZF {
      constructor(FF, WF, SF, CF, AF, uF) {
        this.options = FF, this.attrs = WF, this.tooltip = SF, this.timestamp = CF, this.selected = AF, this.disabled = uF
      }
      setSelected(FF, WF) {
        return FF == this.selected || FF >= this.options.length ? this : new ZF(this.options, cW(WF, FF), this.tooltip, this.timestamp, FF, this.disabled)
      }
      static build(FF, WF, SF, CF, AF, uF) {
        if (CF && !uF && FF.some((FF => FF.isPending))) return CF.setDisabled();
        let hF = function(FF, WF) {
          let SF = [],
            CF = null,
            AF = null,
            uF = FF => {
              SF.push(FF);
              let {
                section: WF
              } = FF.completion;
              if (WF) {
                CF || (CF = []);
                let FF = "string" == typeof WF ? WF : WF.name;
                CF.some((WF => WF.name == FF)) || CF.push("string" == typeof WF ? {
                  name: FF
                } : WF)
              }
            },
            hF = WF.facet(qW);
          for (let iW of FF)
            if (iW.hasResult()) {
              let FF = iW.result.getMatch;
              if (!1 === iW.result.filter)
                for (let WF of iW.result.options) uF(new RF(WF, iW.source, FF ? FF(WF) : [], 1e9 - SF.length));
              else {
                let SF, CF = WF.sliceDoc(iW.from, iW.to),
                  bW = hF.filterStrict ? new kW(CF) : new aW(CF);
                for (let WF of iW.result.options)
                  if (SF = bW.match(WF.label)) {
                    let CF = WF.displayLabel ? FF ? FF(WF, SF.matched) : [] : SF.matched,
                      hF = SF.score + (WF.boost || 0);
                    if (uF(new RF(WF, iW.source, CF, hF)), "object" == typeof WF.section && "dynamic" === WF.section.rank) {
                      let {
                        name: FF
                      } = WF.section;
                      AF || (AF = Object.create(null)), AF[FF] = Math.max(hF, AF[FF] || -1e9)
                    }
                  }
              }
            } if (CF) {
            let FF = Object.create(null),
              WF = 0,
              uF = (FF, WF) => ("dynamic" === FF.rank && "dynamic" === WF.rank ? AF[WF.name] - AF[FF.name] : 0) || ("number" == typeof FF.rank ? FF.rank : 1e9) - ("number" == typeof WF.rank ? WF.rank : 1e9) || (FF.name < WF.name ? -1 : 1);
            for (let SF of CF.sort(uF)) WF -= 1e5, FF[SF.name] = WF;
            for (let CF of SF) {
              let {
                section: WF
              } = CF.completion;
              WF && (CF.score += FF["string" == typeof WF ? WF : WF.name])
            }
          }
          let bW = [],
            dF = null,
            PF = hF.compareCompletions;
          for (let RF of SF.sort(((FF, WF) => WF.score - FF.score || PF(FF.completion, WF.completion)))) {
            let FF = RF.completion;
            !dF || dF.label != FF.label || dF.detail != FF.detail || null != dF.type && null != FF.type && dF.type != FF.type || dF.apply != FF.apply || dF.boost != FF.boost ? bW.push(RF) : xW(RF.completion) > xW(dF) && (bW[bW.length - 1] = RF), dF = RF.completion
          }
          return bW
        }(FF, WF);
        if (!hF.length) return CF && FF.some((FF => FF.isPending)) ? CF.setDisabled() : null;
        let bW = WF.facet(qW).selectOnOpen ? 0 : -1;
        if (CF && CF.selected != bW && -1 != CF.selected) {
          let FF = CF.options[CF.selected].completion;
          for (let WF = 0; WF < hF.length; WF++)
            if (hF[WF].completion == FF) {
              bW = WF;
              break
            }
        }
        return new ZF(hF, cW(SF, bW), {
          pos: FF.reduce(((FF, WF) => WF.hasResult() ? Math.min(FF, WF.from) : FF), 1e8),
          create: HF,
          above: AF.aboveCursor
        }, CF ? CF.timestamp : Date.now(), bW, !1)
      }
      map(FF) {
        return new ZF(this.options, this.attrs, {
          ...this.tooltip,
          pos: FF.mapPos(this.tooltip.pos)
        }, this.timestamp, this.selected, this.disabled)
      }
      setDisabled() {
        return new ZF(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0)
      }
    }
    class oF {
      constructor(FF, WF, SF) {
        this.active = FF, this.id = WF, this.open = SF
      }
      static start() {
        return new oF(GF, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null)
      }
      update(FF) {
        let {
          state: WF
        } = FF, SF = WF.facet(qW), CF = (SF.override || WF.languageDataAt("autocomplete", iW(WF)).map(gW)).map((WF => (this.active.find((FF => FF.source == WF)) || new IF(WF, this.active.some((FF => 0 != FF.state)) ? 1 : 0)).update(FF, SF)));
        CF.length == this.active.length && CF.every(((FF, WF) => FF == this.active[WF])) && (CF = this.active);
        let AF = this.open,
          uF = FF.effects.some((FF => FF.is(yW)));
        AF && FF.docChanged && (AF = AF.map(FF.changes)), FF.selection || CF.some((WF => WF.hasResult() && FF.changes.touchesRange(WF.from, WF.to))) || ! function(FF, WF) {
          if (FF == WF) return !0;
          for (let SF = 0, CF = 0;;) {
            for (; SF < FF.length && !FF[SF].hasResult();) SF++;
            for (; CF < WF.length && !WF[CF].hasResult();) CF++;
            let AF = SF == FF.length,
              uF = CF == WF.length;
            if (AF || uF) return AF == uF;
            if (FF[SF++].result != WF[CF++].result) return !1
          }
        }(CF, this.active) || uF ? AF = ZF.build(CF, WF, this.id, AF, SF, uF) : AF && AF.disabled && !CF.some((FF => FF.isPending)) && (AF = null), !AF && CF.every((FF => !FF.isPending)) && CF.some((FF => FF.hasResult())) && (CF = CF.map((FF => FF.hasResult() ? new IF(FF.source, 0) : FF)));
        for (let hF of FF.effects) hF.is(DF) && (AF = AF && AF.setSelected(hF.value, this.id));
        return CF == this.active && AF == this.open ? this : new oF(CF, this.id, AF)
      }
      get tooltip() {
        return this.open ? this.open.tooltip : null
      }
      get attrs() {
        return this.open ? this.open.attrs : this.active.length ? YF : MF
      }
    }
    const YF = {
        "aria-autocomplete": "list"
      },
      MF = {};

    function cW(FF, WF) {
      let SF = {
        "aria-autocomplete": "list",
        "aria-haspopup": "listbox",
        "aria-controls": FF
      };
      return WF > -1 && (SF["aria-activedescendant"] = FF + "-" + WF), SF
    }
    const GF = [];

    function zW(FF, WF) {
      if (FF.isUserEvent("input.complete")) {
        let SF = FF.annotation(EF);
        if (SF && WF.activateOnCompletion(SF)) return 12
      }
      let SF = FF.isUserEvent("input.type");
      return SF && WF.activateOnTyping ? 5 : SF ? 1 : FF.isUserEvent("delete.backward") ? 2 : FF.selection ? 8 : FF.docChanged ? 16 : 0
    }
    class IF {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.source = FF, this.state = WF, this.explicit = SF
      }
      hasResult() {
        return !1
      }
      get isPending() {
        return 1 == this.state
      }
      update(FF, WF) {
        let SF = zW(FF, WF),
          CF = this;
        (8 & SF || 16 & SF && this.touches(FF)) && (CF = new IF(CF.source, 0)), 4 & SF && 0 == CF.state && (CF = new IF(this.source, 1)), CF = CF.updateFor(FF, SF);
        for (let AF of FF.effects)
          if (AF.is(tW)) CF = new IF(CF.source, 1, AF.value);
          else if (AF.is(TF)) CF = new IF(CF.source, 0);
        else if (AF.is(yW))
          for (let FF of AF.value) FF.source == CF.source && (CF = FF);
        return CF
      }
      updateFor(FF, WF) {
        return this.map(FF.changes)
      }
      map(FF) {
        return this
      }
      touches(FF) {
        return FF.changes.touchesRange(iW(FF.state))
      }
    }
    class fF extends IF {
      constructor(FF, WF, SF, CF, AF, uF) {
        super(FF, 3, WF), this.limit = SF, this.result = CF, this.from = AF, this.to = uF
      }
      hasResult() {
        return !0
      }
      updateFor(FF, WF) {
        var SF;
        if (!(3 & WF)) return this.map(FF.changes);
        let CF = this.result;
        CF.map && !FF.changes.empty && (CF = CF.map(CF, FF.changes));
        let AF = FF.changes.mapPos(this.from),
          uF = FF.changes.mapPos(this.to, 1),
          bW = iW(FF.state);
        if (bW > uF || !CF || 2 & WF && (iW(FF.startState) == this.from || bW < this.limit)) return new IF(this.source, 4 & WF ? 1 : 0);
        let dF = FF.changes.mapPos(this.limit);
        return function(FF, WF, SF, CF) {
          if (!FF) return !1;
          let AF = WF.sliceDoc(SF, CF);
          return "function" == typeof FF ? FF(AF, SF, CF, WF) : eF(FF, !0).test(AF)
        }(CF.validFor, FF.state, AF, uF) ? new fF(this.source, this.explicit, dF, CF, AF, uF) : CF.update && (CF = CF.update(CF, AF, uF, new hF(FF.state, bW, !1))) ? new fF(this.source, this.explicit, dF, CF, CF.from, null !== (SF = CF.to) && void 0 !== SF ? SF : iW(FF.state)) : new IF(this.source, 1, this.explicit)
      }
      map(FF) {
        if (FF.empty) return this;
        return (this.result.map ? this.result.map(this.result, FF) : this.result) ? new fF(this.source, this.explicit, FF.mapPos(this.limit), this.result, FF.mapPos(this.from), FF.mapPos(this.to, 1)) : new IF(this.source, 0)
      }
      touches(FF) {
        return FF.changes.touchesRange(this.from, this.to)
      }
    }
    const yW = CF.H.define({
        map: (FF, WF) => FF.map((FF => FF.map(WF)))
      }),
      sF = CF.J.define({
        create: () => oF.start(),
        update: (FF, WF) => FF.update(WF),
        provide: FF => [AF.sb.from(FF, (FF => FF.tooltip)), AF.k.contentAttributes.from(FF, (FF => FF.attrs))]
      });

    function nF(FF, WF) {
      const SF = WF.completion.apply || WF.completion.label;
      let CF = FF.state.field(sF).active.find((FF => FF.source == WF.source));
      return CF instanceof fF && ("string" == typeof SF ? FF.dispatch({
        ...QF(FF.state, SF, CF.from, CF.to),
        annotations: EF.of(WF.completion)
      }) : SF(FF, WF.completion, CF.from, CF.to), !0)
    }
    const HF = OF(sF, nF);

    function KF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "option";
      return SF => {
        let CF = SF.state.field(sF, !1);
        if (!CF || !CF.open || CF.open.disabled || Date.now() - CF.open.timestamp < SF.state.facet(qW).interactionDelay) return !1;
        let uF, hF = 1;
        "page" == WF && (uF = (0, AF.I)(SF, CF.open.tooltip)) && (hF = Math.max(2, Math.floor(uF.dom.offsetHeight / uF.dom.querySelector("li").offsetHeight) - 1));
        let {
          length: bW
        } = CF.open.options, dF = CF.open.selected > -1 ? CF.open.selected + hF * (FF ? 1 : -1) : FF ? 0 : bW - 1;
        return dF < 0 ? dF = "page" == WF ? 0 : bW - 1 : dF >= bW && (dF = "page" == WF ? bW - 1 : 0), SF.dispatch({
          effects: DF.of(dF)
        }), !0
      }
    }
    const wF = FF => !!FF.state.field(sF, !1) && (FF.dispatch({
      effects: tW.of(!0)
    }), !0);
    class XF {
      constructor(FF, WF) {
        this.active = FF, this.context = WF, this.time = Date.now(), this.updates = [], this.done = void 0
      }
    }
    const UF = AF.o.fromClass(class {
        constructor(FF) {
          this.view = FF, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
          for (let WF of FF.state.field(sF).active) WF.isPending && this.startQuery(WF)
        }
        update(FF) {
          let WF = FF.state.field(sF),
            SF = FF.state.facet(qW);
          if (!FF.selectionSet && !FF.docChanged && FF.startState.field(sF) == WF) return;
          let CF = FF.transactions.some((FF => {
            let WF = zW(FF, SF);
            return 8 & WF || (FF.selection || FF.docChanged) && !(3 & WF)
          }));
          for (let bW = 0; bW < this.running.length; bW++) {
            let WF = this.running[bW];
            if (CF || WF.context.abortOnDocChange && FF.docChanged || WF.updates.length + FF.transactions.length > 50 && Date.now() - WF.time > 1e3) {
              for (let FF of WF.context.abortListeners) try {
                FF()
              } catch (hF) {
                (0, AF.ab)(this.view.state, hF)
              }
              WF.context.abortListeners = null, this.running.splice(bW--, 1)
            } else WF.updates.push(...FF.transactions)
          }
          this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), FF.transactions.some((FF => FF.effects.some((FF => FF.is(tW))))) && (this.pendingStart = !0);
          let uF = this.pendingStart ? 50 : SF.activateOnTypingDelay;
          if (this.debounceUpdate = WF.active.some((FF => FF.isPending && !this.running.some((WF => WF.active.source == FF.source)))) ? setTimeout((() => this.startUpdate()), uF) : -1, 0 != this.composing)
            for (let AF of FF.transactions) AF.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && AF.selection && (this.composing = 3)
        }
        startUpdate() {
          this.debounceUpdate = -1, this.pendingStart = !1;
          let {
            state: FF
          } = this.view, WF = FF.field(sF);
          for (let SF of WF.active) SF.isPending && !this.running.some((FF => FF.active.source == SF.source)) && this.startQuery(SF);
          this.running.length && WF.open && WF.open.disabled && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(qW).updateSyncTime))
        }
        startQuery(FF) {
          let {
            state: WF
          } = this.view, SF = iW(WF), CF = new hF(WF, SF, FF.explicit, this.view), uF = new XF(FF, CF);
          this.running.push(uF), Promise.resolve(FF.source(CF)).then((FF => {
            uF.context.aborted || (uF.done = FF || null, this.scheduleAccept())
          }), (FF => {
            this.view.dispatch({
              effects: TF.of(null)
            }), (0, AF.ab)(this.view.state, FF)
          }))
        }
        scheduleAccept() {
          this.running.every((FF => void 0 !== FF.done)) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout((() => this.accept()), this.view.state.facet(qW).updateSyncTime))
        }
        accept() {
          var FF;
          this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
          let WF = [],
            SF = this.view.state.facet(qW),
            CF = this.view.state.field(sF);
          for (let AF = 0; AF < this.running.length; AF++) {
            let uF = this.running[AF];
            if (void 0 === uF.done) continue;
            if (this.running.splice(AF--, 1), uF.done) {
              let CF = iW(uF.updates.length ? uF.updates[0].startState : this.view.state),
                AF = Math.min(CF, uF.done.from + (uF.active.explicit ? 0 : 1)),
                hF = new fF(uF.active.source, uF.active.explicit, AF, uF.done, uF.done.from, null !== (FF = uF.done.to) && void 0 !== FF ? FF : CF);
              for (let FF of uF.updates) hF = hF.update(FF, SF);
              if (hF.hasResult()) {
                WF.push(hF);
                continue
              }
            }
            let hF = CF.active.find((FF => FF.source == uF.active.source));
            if (hF && hF.isPending)
              if (null == uF.done) {
                let FF = new IF(uF.active.source, 0);
                for (let WF of uF.updates) FF = FF.update(WF, SF);
                FF.isPending || WF.push(FF)
              } else this.startQuery(hF)
          }(WF.length || CF.open && CF.open.disabled) && this.view.dispatch({
            effects: yW.of(WF)
          })
        }
      }, {
        eventHandlers: {
          blur(FF) {
            let WF = this.view.state.field(sF, !1);
            if (WF && WF.tooltip && this.view.state.facet(qW).closeOnBlur) {
              let SF = WF.open && (0, AF.I)(this.view, WF.open.tooltip);
              SF && SF.dom.contains(FF.relatedTarget) || setTimeout((() => this.view.dispatch({
                effects: TF.of(null)
              })), 10)
            }
          },
          compositionstart() {
            this.composing = 1
          },
          compositionend() {
            3 == this.composing && setTimeout((() => this.view.dispatch({
              effects: tW.of(!1)
            })), 20), this.composing = 0
          }
        }
      }),
      BF = "object" == typeof navigator && /Win/.test(navigator.platform),
      jW = CF.x.highest(AF.k.domEventHandlers({
        keydown(FF, WF) {
          let SF = WF.state.field(sF, !1);
          if (!SF || !SF.open || SF.open.disabled || SF.open.selected < 0 || FF.key.length > 1 || FF.ctrlKey && (!BF || !FF.altKey) || FF.metaKey) return !1;
          let CF = SF.open.options[SF.open.selected],
            AF = SF.active.find((FF => FF.source == CF.source)),
            uF = CF.completion.commitCharacters || AF.result.commitCharacters;
          return uF && uF.indexOf(FF.key) > -1 && nF(WF, CF), !1
        }
      })),
      vW = AF.k.baseTheme({
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
    class JF {
      constructor(FF, WF, SF, CF) {
        this.field = FF, this.line = WF, this.from = SF, this.to = CF
      }
    }
    class pF {
      constructor(FF, WF, SF) {
        this.field = FF, this.from = WF, this.to = SF
      }
      map(FF) {
        let WF = FF.mapPos(this.from, -1, CF.v.TrackDel),
          SF = FF.mapPos(this.to, 1, CF.v.TrackDel);
        return null == WF || null == SF ? null : new pF(this.field, WF, SF)
      }
    }
    class lF {
      constructor(FF, WF) {
        this.lines = FF, this.fieldPositions = WF
      }
      instantiate(FF, WF) {
        let SF = [],
          CF = [WF],
          AF = FF.doc.lineAt(WF),
          hF = /^\s*/.exec(AF.text)[0];
        for (let dF of this.lines) {
          if (SF.length) {
            let SF = hF,
              AF = /^\t*/.exec(dF)[0].length;
            for (let WF = 0; WF < AF; WF++) SF += FF.facet(uF.X);
            CF.push(WF + SF.length - AF), dF = SF + dF.slice(AF)
          }
          SF.push(dF), WF += dF.length + 1
        }
        let bW = this.fieldPositions.map((FF => new pF(FF.field, CF[FF.line] + FF.from, CF[FF.line] + FF.to)));
        return {
          text: SF,
          Bu: bW
        }
      }
      static parse(FF) {
        let WF, SF = [],
          CF = [],
          AF = [];
        for (let uF of FF.split(/\r\n?|\n/)) {
          for (; WF = /[#$]\{(?:(\d+)(?::([^{}]*))?|((?:\\[{}]|[^{}])*))\}/.exec(uF);) {
            let FF = WF[1] ? +WF[1] : null,
              hF = WF[2] || WF[3] || "",
              bW = -1,
              dF = hF.replace(/\\[{}]/g, (FF => FF[1]));
            for (let WF = 0; WF < SF.length; WF++)(null != FF ? SF[WF].seq == FF : dF && SF[WF].name == dF) && (bW = WF);
            if (bW < 0) {
              let WF = 0;
              for (; WF < SF.length && (null == FF || null != SF[WF].seq && SF[WF].seq < FF);) WF++;
              SF.splice(WF, 0, {
                seq: FF,
                name: dF
              }), bW = WF;
              for (let FF of AF) FF.field >= bW && FF.field++
            }
            for (let SF of AF)
              if (SF.line == CF.length && SF.from > WF.index) {
                let FF = WF[2] ? 3 + (WF[1] || "").length : 2;
                SF.from -= FF, SF.to -= FF
              } AF.push(new JF(bW, CF.length, WF.index, WF.index + dF.length)), uF = uF.slice(0, WF.index) + hF + uF.slice(WF.index + WF[0].length)
          }
          uF = uF.replace(/\\([{}])/g, ((FF, WF, SF) => {
            for (let uF of AF) uF.line == CF.length && uF.from > SF && (uF.from--, uF.to--);
            return WF
          })), CF.push(uF)
        }
        return new lF(CF, AF)
      }
    }
    let FW = AF.e.widget({
        widget: new class extends AF.s {
          toDOM() {
            let FF = document.createElement("span");
            return FF.className = "cm-snippetFieldPosition", FF
          }
          ignoreEvent() {
            return !1
          }
        }
      }),
      WW = AF.e.mark({
        class: "cm-snippetField"
      });
    class SW {
      constructor(FF, WF) {
        this.Bu = FF, this.active = WF, this.deco = AF.e.set(FF.map((FF => (FF.from == FF.to ? FW : WW).range(FF.from, FF.to))), !0)
      }
      map(FF) {
        let WF = [];
        for (let SF of this.Bu) {
          let CF = SF.map(FF);
          if (!CF) return null;
          WF.push(CF)
        }
        return new SW(WF, this.active)
      }
      selectionInsideField(FF) {
        return FF.Bu.every((FF => this.Bu.some((WF => WF.field == this.active && WF.from <= FF.from && WF.to >= FF.to))))
      }
    }
    const CW = CF.H.define({
        map: (FF, WF) => FF && FF.map(WF)
      }),
      AW = CF.H.define(),
      uW = CF.J.define({
        create: () => null,
        update(FF, WF) {
          for (let SF of WF.effects) {
            if (SF.is(CW)) return SF.value;
            if (SF.is(AW) && FF) return new SW(FF.Bu, SF.value)
          }
          return FF && WF.docChanged && (FF = FF.map(WF.changes)), FF && WF.selection && !FF.selectionInsideField(WF.selection) && (FF = null), FF
        },
        provide: FF => AF.k.Iu.from(FF, (FF => FF ? FF.deco : AF.e.none))
      });

    function hW(FF, WF) {
      return CF.m.create(FF.filter((FF => FF.field == WF)).map((FF => CF.m.range(FF.from, FF.to))))
    }

    function bS(FF) {
      let WF = lF.parse(FF);
      return (FF, SF, AF, uF) => {
        let {
          text: hF,
          Bu: bW
        } = WF.instantiate(FF.state, AF), {
          main: dF
        } = FF.state.selection, PF = {
          changes: {
            from: AF,
            to: uF == dF.from ? dF.to : uF,
            insert: CF.L.of(hF)
          },
          scrollIntoView: !0,
          annotations: SF ? [EF.of(SF), CF.P.userEvent.of("input.complete")] : void 0
        };
        if (bW.length && (PF.selection = hW(bW, 0)), bW.some((FF => FF.field > 0))) {
          let WF = new SW(bW, 0),
            SF = PF.effects = [CW.of(WF)];
          void 0 === FF.state.field(uW, !1) && SF.push(CF.H.appendConfig.of([uW, iS, EW, vW]))
        }
        FF.dispatch(FF.state.update(PF))
      }
    }

    function dW(FF) {
      return WF => {
        let {
          state: SF,
          dispatch: CF
        } = WF, AF = SF.field(uW, !1);
        if (!AF || FF < 0 && 0 == AF.active) return !1;
        let uF = AF.active + FF,
          hF = FF > 0 && !AF.Bu.some((WF => WF.field == uF + FF));
        return CF(SF.update({
          selection: hW(AF.Bu, uF),
          effects: CW.of(hF ? null : new SW(AF.Bu, uF)),
          scrollIntoView: !0
        })), !0
      }
    }
    const PW = [{
        key: "Tab",
        run: dW(1),
        shift: dW(-1)
      }, {
        key: "Escape",
        run: FF => {
          let {
            state: WF,
            dispatch: SF
          } = FF;
          return !!WF.field(uW, !1) && (SF(WF.update({
            effects: CW.of(null)
          })), !0)
        }
      }],
      RW = CF.t.define({
        combine: FF => FF.length ? FF[0] : PW
      }),
      iS = CF.x.highest(AF.U.compute([RW], (FF => FF.facet(RW))));

    function eW(FF, WF) {
      return {
        ...WF,
        apply: bS(FF)
      }
    }
    const EW = AF.k.domEventHandlers({
      mousedown(FF, WF) {
        let SF, CF = WF.state.field(uW, !1);
        if (!CF || null == (SF = WF.posAtCoords({
            x: FF.clientX,
            y: FF.clientY
          }))) return !1;
        let AF = CF.Bu.find((FF => FF.from <= SF && FF.to >= SF));
        return !(!AF || AF.field == CF.active) && (WF.dispatch({
          selection: hW(CF.Bu, AF.field),
          effects: CW.of(CF.Bu.some((FF => FF.field > AF.field)) ? new SW(CF.Bu, AF.field) : null),
          scrollIntoView: !0
        }), !0)
      }
    });
    const QW = {
        brackets: ["(", "[", "{", "'", '"'],
        before: ")]}:;>",
        stringPrefixes: []
      },
      rS = CF.H.define({
        map(FF, WF) {
          let SF = WF.mapPos(FF, -1, CF.v.TrackAfter);
          return null == SF ? void 0 : SF
        }
      }),
      gS = new class extends CF.G {};
    gS.startSide = 1, gS.endSide = -1;
    const tS = CF.J.define({
      create: () => CF.C.empty,
      update(FF, WF) {
        if (FF = FF.map(WF.changes), WF.selection) {
          let SF = WF.state.doc.lineAt(WF.selection.main.head);
          FF = FF.update({
            filter: FF => FF >= SF.from && FF <= SF.to
          })
        }
        for (let SF of WF.effects) SF.is(rS) && (FF = FF.update({
          add: [gS.range(SF.value, SF.value + 1)]
        }));
        return FF
      }
    });

    function TW() {
      return [NW, tS]
    }
    const aS = "()[]{}<>\xab\xbb\xbb\xab\uff3b\uff3d\uff5b\uff5d";

    function kS(FF) {
      for (let WF = 0; WF < 16; WF += 2)
        if (aS.charCodeAt(WF) == FF) return aS.charAt(WF + 1);
      return (0, CF.fb)(FF < 128 ? FF : FF + 1)
    }

    function qS(FF, WF) {
      return FF.languageDataAt("closeBrackets", WF)[0] || QW
    }
    const VW = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      NW = AF.k.inputHandler.of(((FF, WF, SF, AF) => {
        if ((VW ? FF.composing : FF.compositionStarted) || FF.state.readOnly) return !1;
        let uF = FF.state.selection.main;
        if (AF.length > 2 || 2 == AF.length && 1 == (0, CF.W)((0, CF.S)(AF, 0)) || WF != uF.from || SF != uF.to) return !1;
        let hF = function(FF, WF) {
          let SF = qS(FF, FF.selection.main.head),
            AF = SF.brackets || QW.brackets;
          for (let uF of AF) {
            let hF = kS((0, CF.S)(uF, 0));
            if (WF == uF) return hF == uF ? ZW(FF, uF, AF.indexOf(uF + uF + uF) > -1, SF) : OW(FF, uF, hF, SF.before || QW.before);
            if (WF == hF && LW(FF, FF.selection.main.from)) return xS(FF, uF, hF)
          }
          return null
        }(FF.state, AF);
        return !!hF && (FF.dispatch(hF), !0)
      })),
      DW = [{
        key: "Backspace",
        run: FF => {
          let {
            state: WF,
            dispatch: SF
          } = FF;
          if (WF.readOnly) return !1;
          let AF = qS(WF, WF.selection.main.head).brackets || QW.brackets,
            uF = null,
            hF = WF.changeByRange((FF => {
              if (FF.empty) {
                let SF = function(FF, WF) {
                  let SF = FF.sliceString(WF - 2, WF);
                  return (0, CF.W)((0, CF.S)(SF, 0)) == SF.length ? SF : SF.slice(1)
                }(WF.doc, FF.head);
                for (let uF of AF)
                  if (uF == SF && mS(WF.doc, FF.head) == kS((0, CF.S)(uF, 0))) return {
                    changes: {
                      from: FF.head - uF.length,
                      to: FF.head + uF.length
                    },
                    range: CF.m.cursor(FF.head - uF.length)
                  }
              }
              return {
                range: uF = FF
              }
            }));
          return uF || SF(WF.update(hF, {
            scrollIntoView: !0,
            userEvent: "delete.backward"
          })), !uF
        }
      }];

    function LW(FF, WF) {
      let SF = !1;
      return FF.field(tS).between(0, FF.doc.length, (FF => {
        FF == WF && (SF = !0)
      })), SF
    }

    function mS(FF, WF) {
      let SF = FF.sliceString(WF, WF + 2);
      return SF.slice(0, (0, CF.W)((0, CF.S)(SF, 0)))
    }

    function OW(FF, WF, SF, AF) {
      let uF = null,
        hF = FF.changeByRange((hF => {
          if (!hF.empty) return {
            changes: [{
              insert: WF,
              from: hF.from
            }, {
              insert: SF,
              from: hF.to
            }],
            effects: rS.of(hF.to + WF.length),
            range: CF.m.range(hF.anchor + WF.length, hF.head + WF.length)
          };
          let bW = mS(FF.doc, hF.head);
          return !bW || /\s/.test(bW) || AF.indexOf(bW) > -1 ? {
            changes: {
              insert: WF + SF,
              from: hF.head
            },
            effects: rS.of(hF.head + WF.length),
            range: CF.m.cursor(hF.head + WF.length)
          } : {
            range: uF = hF
          }
        }));
      return uF ? null : FF.update(hF, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function xS(FF, WF, SF) {
      let AF = null,
        uF = FF.changeByRange((WF => WF.empty && mS(FF.doc, WF.head) == SF ? {
          changes: {
            from: WF.head,
            to: WF.head + SF.length,
            insert: SF
          },
          range: CF.m.cursor(WF.head + SF.length)
        } : AF = {
          range: WF
        }));
      return AF ? null : FF.update(uF, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function ZW(FF, WF, SF, AF) {
      let hF = AF.stringPrefixes || QW.stringPrefixes,
        bW = null,
        dF = FF.changeByRange((AF => {
          if (!AF.empty) return {
            changes: [{
              insert: WF,
              from: AF.from
            }, {
              insert: WF,
              from: AF.to
            }],
            effects: rS.of(AF.to + WF.length),
            range: CF.m.range(AF.anchor + WF.length, AF.head + WF.length)
          };
          let dF, PF = AF.head,
            RF = mS(FF.doc, PF);
          if (RF == WF) {
            if (oW(FF, PF)) return {
              changes: {
                insert: WF + WF,
                from: PF
              },
              effects: rS.of(PF + WF.length),
              range: CF.m.cursor(PF + WF.length)
            };
            if (LW(FF, PF)) {
              let AF = SF && FF.sliceDoc(PF, PF + 3 * WF.length) == WF + WF + WF ? WF + WF + WF : WF;
              return {
                changes: {
                  from: PF,
                  to: PF + AF.length,
                  insert: AF
                },
                range: CF.m.cursor(PF + AF.length)
              }
            }
          } else {
            if (SF && FF.sliceDoc(PF - 2 * WF.length, PF) == WF + WF && (dF = YW(FF, PF - 2 * WF.length, hF)) > -1 && oW(FF, dF)) return {
              changes: {
                insert: WF + WF + WF + WF,
                from: PF
              },
              effects: rS.of(PF + WF.length),
              range: CF.m.cursor(PF + WF.length)
            };
            if (FF.charCategorizer(PF)(RF) != CF.l.Word && YW(FF, PF, hF) > -1 && ! function(FF, WF, SF, CF) {
                let AF = (0, uF.ib)(FF).resolveInner(WF, -1),
                  hF = CF.reduce(((FF, WF) => Math.max(FF, WF.length)), 0);
                for (let uF = 0; uF < 5; uF++) {
                  let uF = FF.sliceDoc(AF.from, Math.min(AF.to, AF.from + SF.length + hF)),
                    bW = uF.indexOf(SF);
                  if (!bW || bW > -1 && CF.indexOf(uF.slice(0, bW)) > -1) {
                    let WF = AF.firstChild;
                    for (; WF && WF.from == AF.from && WF.to - WF.from > SF.length + bW;) {
                      if (FF.sliceDoc(WF.to - SF.length, WF.to) == SF) return !1;
                      WF = WF.firstChild
                    }
                    return !0
                  }
                  let dF = AF.to == WF && AF.parent;
                  if (!dF) break;
                  AF = dF
                }
                return !1
              }(FF, PF, WF, hF)) return {
              changes: {
                insert: WF + WF,
                from: PF
              },
              effects: rS.of(PF + WF.length),
              range: CF.m.cursor(PF + WF.length)
            }
          }
          return {
            range: bW = AF
          }
        }));
      return bW ? null : FF.update(dF, {
        scrollIntoView: !0,
        userEvent: "input.type"
      })
    }

    function oW(FF, WF) {
      let SF = (0, uF.ib)(FF).resolveInner(WF + 1);
      return SF.parent && SF.from == WF
    }

    function YW(FF, WF, SF) {
      let AF = FF.charCategorizer(WF);
      if (AF(FF.sliceDoc(WF - 1, WF)) != CF.l.Word) return WF;
      for (let uF of SF) {
        let SF = WF - uF.length;
        if (FF.sliceDoc(SF, WF) == uF && AF(FF.sliceDoc(SF - 1, SF)) != CF.l.Word) return SF
      }
      return -1
    }

    function MW() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [jW, sF, qW.of(FF), UF, GW, vW]
    }
    const cS = [{
        key: "Ctrl-Space",
        run: wF
      }, {
        mac: "Alt-`",
        run: wF
      }, {
        mac: "Alt-i",
        run: wF
      }, {
        key: "Escape",
        run: FF => {
          let WF = FF.state.field(sF, !1);
          return !(!WF || !WF.active.some((FF => 0 != FF.state))) && (FF.dispatch({
            effects: TF.of(null)
          }), !0)
        }
      }, {
        key: "ArrowDown",
        run: KF(!0)
      }, {
        key: "ArrowUp",
        run: KF(!1)
      }, {
        key: "PageDown",
        run: KF(!0, "page")
      }, {
        key: "PageUp",
        run: KF(!1, "page")
      }, {
        key: "Enter",
        run: FF => {
          let WF = FF.state.field(sF, !1);
          return !(FF.state.readOnly || !WF || !WF.open || WF.open.selected < 0 || WF.open.disabled || Date.now() - WF.open.timestamp < FF.state.facet(qW).interactionDelay) && nF(FF, WF.open.options[WF.open.selected])
        }
      }],
      GW = CF.x.highest(AF.U.computeN([qW], (FF => FF.facet(qW).defaultKeymap ? [cS] : [])))
  },
  39312: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => PF,
      h: () => eF,
      j: () => RF,
      n: () => iW
    });
    var CF = SF(39153);
    class AF {
      constructor(FF, WF, SF, CF) {
        this.origin = FF, this.changes = WF, this.effects = SF, this.clientID = CF
      }
    }
    class uF {
      constructor(FF, WF) {
        this.version = FF, this.unconfirmed = WF
      }
    }
    const hF = CF.t.define({
        combine(FF) {
          let WF = (0, CF.Y)(FF, {
            startVersion: 0,
            clientID: null,
            sharedEffects: () => []
          }, {
            generatedID: FF => FF
          });
          return null == WF.clientID && (WF.clientID = FF.length && FF[0].generatedID || ""), WF
        }
      }),
      bW = CF.e.define(),
      dF = CF.J.define({
        create: FF => new uF(FF.facet(hF).startVersion, []),
        update(FF, WF) {
          let SF = WF.annotation(bW);
          if (SF) return SF;
          let {
            sharedEffects: CF,
            clientID: dF
          } = WF.startState.facet(hF), PF = CF(WF);
          return PF.length || !WF.changes.empty ? new uF(FF.version, FF.unconfirmed.concat(new AF(WF, WF.changes, PF, dF))) : FF
        }
      });

    function PF() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [dF, hF.of(Object.assign({
        generatedID: Math.floor(1e9 * Math.random()).toString(36)
      }, FF))]
    }

    function RF(FF, WF) {
      let {
        version: SF,
        unconfirmed: PF
      } = FF.field(dF), {
        clientID: RF
      } = FF.facet(hF);
      SF += WF.length;
      let iW = [],
        eF = null,
        EF = 0;
      for (let AF of WF) {
        let FF = EF < PF.length ? PF[EF] : null;
        FF && FF.clientID == AF.clientID ? (eF && (eF = eF.map(FF.changes, !0)), iW = CF.H.mapEffects(iW, AF.changes), EF++) : (iW = CF.H.mapEffects(iW, AF.changes), AF.effects && (iW = iW.concat(AF.effects)), eF = eF ? eF.compose(AF.changes) : AF.changes)
      }
      if (EF && (PF = PF.slice(EF)), PF.length && (eF && (PF = PF.map((FF => {
          let WF = FF.changes.map(eF);
          return eF = eF.map(FF.changes, !0), new AF(FF.origin, WF, CF.H.mapEffects(FF.effects, eF), RF)
        }))), iW.length)) {
        let FF = PF.reduce(((FF, WF) => FF.compose(WF.changes)), CF.ChangeSet.empty(PF[0].changes.length));
        iW = CF.H.mapEffects(iW, FF)
      }
      return eF ? FF.update({
        changes: eF,
        effects: iW,
        annotations: [CF.P.addToHistory.of(!1), CF.P.remote.of(!0), bW.of(new uF(SF, PF))],
        filter: !1
      }) : FF.update({
        annotations: [bW.of(new uF(SF, PF))]
      })
    }

    function iW(FF) {
      return FF.field(dF).unconfirmed
    }

    function eF(FF) {
      return FF.field(dF).version
    }
  },
  39195: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => rS
    });
    var CF = SF(39179);
    class AF {
      constructor(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
        let PF = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          RF = arguments.length > 10 ? arguments[10] : void 0;
        this.p = FF, this.stack = WF, this.state = SF, this.reducePos = CF, this.pos = AF, this.score = uF, this.buffer = hF, this.bufferBase = bW, this.curContext = dF, this.lookAhead = PF, this.parent = RF
      }
      toString() {
        return `[${this.stack.filter(((FF,WF)=>WF%3==0)).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`
      }
      static start(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          CF = FF.parser.context;
        return new AF(FF, [], WF, SF, SF, 0, [], 0, CF ? new uF(CF, CF.start) : null, 0, null)
      }
      get context() {
        return this.curContext ? this.curContext.context : null
      }
      pushState(FF, WF) {
        this.stack.push(this.state, WF, this.bufferBase + this.buffer.length), this.state = FF
      }
      reduce(FF) {
        var WF;
        let SF = FF >> 19,
          CF = 65535 & FF,
          {
            parser: AF
          } = this.p,
          uF = this.reducePos < this.pos - 25 && this.setLookAhead(this.pos),
          hF = AF.dynamicPrecedence(CF);
        if (hF && (this.score += hF), 0 == SF) return this.pushState(AF.getGoto(this.state, CF, !0), this.reducePos), CF < AF.minRepeatTerm && this.storeNode(CF, this.reducePos, this.reducePos, uF ? 8 : 4, !0), void this.reduceContext(CF, this.reducePos);
        let bW = this.stack.length - 3 * (SF - 1) - (262144 & FF ? 6 : 0),
          dF = bW ? this.stack[bW - 2] : this.p.Bu[0].from,
          PF = this.reducePos - dF;
        PF >= 2e3 && !(null === (WF = this.p.parser.nodeSet.types[CF]) || void 0 === WF ? void 0 : WF.isAnonymous) && (dF == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = PF) : this.p.lastBigReductionSize < PF && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = dF, this.p.lastBigReductionSize = PF));
        let RF = bW ? this.stack[bW - 1] : 0,
          iW = this.bufferBase + this.buffer.length - RF;
        if (CF < AF.minRepeatTerm || 131072 & FF) {
          let FF = AF.stateFlag(this.state, 1) ? this.pos : this.reducePos;
          this.storeNode(CF, dF, FF, iW + 4, !0)
        }
        if (262144 & FF) this.state = this.stack[bW];
        else {
          let FF = this.stack[bW - 3];
          this.state = AF.getGoto(FF, CF, !0)
        }
        for (; this.stack.length > bW;) this.stack.pop();
        this.reduceContext(CF, dF)
      }
      storeNode(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
          AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (0 == FF && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
          let FF = this,
            CF = this.buffer.length;
          if (0 == CF && FF.parent && (CF = FF.bufferBase - FF.parent.bufferBase, FF = FF.parent), CF > 0 && 0 == FF.buffer[CF - 4] && FF.buffer[CF - 1] > -1) {
            if (WF == SF) return;
            if (FF.buffer[CF - 2] >= WF) return void(FF.buffer[CF - 2] = SF)
          }
        }
        if (AF && this.pos != SF) {
          let AF = this.buffer.length;
          if (AF > 0 && (0 != this.buffer[AF - 4] || this.buffer[AF - 1] < 0)) {
            let FF = !1;
            for (let WF = AF; WF > 0 && this.buffer[WF - 2] > SF; WF -= 4)
              if (this.buffer[WF - 1] >= 0) {
                FF = !0;
                break
              } if (FF)
              for (; AF > 0 && this.buffer[AF - 2] > SF;) this.buffer[AF] = this.buffer[AF - 4], this.buffer[AF + 1] = this.buffer[AF - 3], this.buffer[AF + 2] = this.buffer[AF - 2], this.buffer[AF + 3] = this.buffer[AF - 1], AF -= 4, CF > 4 && (CF -= 4)
          }
          this.buffer[AF] = FF, this.buffer[AF + 1] = WF, this.buffer[AF + 2] = SF, this.buffer[AF + 3] = CF
        } else this.buffer.push(FF, WF, SF, CF)
      }
      shift(FF, WF, SF, CF) {
        if (131072 & FF) this.pushState(65535 & FF, this.pos);
        else if (0 == (262144 & FF)) {
          let AF = FF,
            {
              parser: uF
            } = this.p;
          this.pos = CF;
          let hF = uF.stateFlag(AF, 1);
          !hF && (CF > SF || WF <= uF.maxNode) && (this.reducePos = CF), this.pushState(AF, hF ? SF : Math.min(SF, this.reducePos)), this.shiftContext(WF, SF), WF <= uF.maxNode && this.buffer.push(WF, SF, CF, 4)
        } else this.pos = CF, this.shiftContext(WF, SF), WF <= this.p.parser.maxNode && this.buffer.push(WF, SF, CF, 4)
      }
      apply(FF, WF, SF, CF) {
        65536 & FF ? this.reduce(FF) : this.shift(FF, WF, SF, CF)
      }
      useNode(FF, WF) {
        let SF = this.p.reused.length - 1;
        (SF < 0 || this.p.reused[SF] != FF) && (this.p.reused.push(FF), SF++);
        let CF = this.pos;
        this.reducePos = this.pos = CF + FF.length, this.pushState(WF, CF), this.buffer.push(SF, CF, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, FF, this, this.p.stream.reset(this.pos - FF.length)))
      }
      split() {
        let FF = this,
          WF = FF.buffer.length;
        for (; WF > 0 && FF.buffer[WF - 2] > FF.reducePos;) WF -= 4;
        let SF = FF.buffer.slice(WF),
          CF = FF.bufferBase + WF;
        for (; FF && CF == FF.bufferBase;) FF = FF.parent;
        return new AF(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, SF, CF, this.curContext, this.lookAhead, FF)
      }
      recoverByDelete(FF, WF) {
        let SF = FF <= this.p.parser.maxNode;
        SF && this.storeNode(FF, this.pos, WF, 4), this.storeNode(0, this.pos, WF, SF ? 8 : 4), this.pos = this.reducePos = WF, this.score -= 190
      }
      canShift(FF) {
        for (let WF = new hF(this);;) {
          let SF = this.p.parser.stateSlot(WF.state, 4) || this.p.parser.hasAction(WF.state, FF);
          if (0 == SF) return !1;
          if (0 == (65536 & SF)) return !0;
          WF.reduce(SF)
        }
      }
      recoverByInsert(FF) {
        if (this.stack.length >= 300) return [];
        let WF = this.p.parser.nextStates(this.state);
        if (WF.length > 8 || this.stack.length >= 120) {
          let SF = [];
          for (let CF, AF = 0; AF < WF.length; AF += 2)(CF = WF[AF + 1]) != this.state && this.p.parser.hasAction(CF, FF) && SF.push(WF[AF], CF);
          if (this.stack.length < 120)
            for (let FF = 0; SF.length < 8 && FF < WF.length; FF += 2) {
              let CF = WF[FF + 1];
              SF.some(((FF, WF) => 1 & WF && FF == CF)) || SF.push(WF[FF], CF)
            }
          WF = SF
        }
        let SF = [];
        for (let CF = 0; CF < WF.length && SF.length < 4; CF += 2) {
          let FF = WF[CF + 1];
          if (FF == this.state) continue;
          let AF = this.split();
          AF.pushState(FF, this.pos), AF.storeNode(0, AF.pos, AF.pos, 4, !0), AF.shiftContext(WF[CF], this.pos), AF.reducePos = this.pos, AF.score -= 200, SF.push(AF)
        }
        return SF
      }
      forceReduce() {
        let {
          parser: FF
        } = this.p, WF = FF.stateSlot(this.state, 5);
        if (0 == (65536 & WF)) return !1;
        if (!FF.validAction(this.state, WF)) {
          let SF = WF >> 19,
            CF = 65535 & WF,
            AF = this.stack.length - 3 * SF;
          if (AF < 0 || FF.getGoto(this.stack[AF], CF, !1) < 0) {
            let FF = this.findForcedReduction();
            if (null == FF) return !1;
            WF = FF
          }
          this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100
        }
        return this.reducePos = this.pos, this.reduce(WF), !0
      }
      findForcedReduction() {
        let {
          parser: FF
        } = this.p, WF = [], SF = (CF, AF) => {
          if (!WF.includes(CF)) return WF.push(CF), FF.allActions(CF, (WF => {
            if (393216 & WF);
            else if (65536 & WF) {
              let SF = (WF >> 19) - AF;
              if (SF > 1) {
                let CF = 65535 & WF,
                  AF = this.stack.length - 3 * SF;
                if (AF >= 0 && FF.getGoto(this.stack[AF], CF, !1) >= 0) return SF << 19 | 65536 | CF
              }
            } else {
              let FF = SF(WF, AF + 1);
              if (null != FF) return FF
            }
          }))
        };
        return SF(this.state, 0)
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
          parser: FF
        } = this.p;
        return 65535 == FF.data[FF.stateSlot(this.state, 1)] && !FF.stateSlot(this.state, 4)
      }
      restart() {
        this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0
      }
      sameState(FF) {
        if (this.state != FF.state || this.stack.length != FF.stack.length) return !1;
        for (let WF = 0; WF < this.stack.length; WF += 3)
          if (this.stack[WF] != FF.stack[WF]) return !1;
        return !0
      }
      get parser() {
        return this.p.parser
      }
      dialectEnabled(FF) {
        return this.p.parser.dialect.flags[FF]
      }
      shiftContext(FF, WF) {
        this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, FF, this, this.p.stream.reset(WF)))
      }
      reduceContext(FF, WF) {
        this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, FF, this, this.p.stream.reset(WF)))
      }
      emitContext() {
        let FF = this.buffer.length - 1;
        (FF < 0 || -3 != this.buffer[FF]) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3)
      }
      emitLookAhead() {
        let FF = this.buffer.length - 1;
        (FF < 0 || -4 != this.buffer[FF]) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4)
      }
      updateContext(FF) {
        if (FF != this.curContext.context) {
          let WF = new uF(this.curContext.tracker, FF);
          WF.hash != this.curContext.hash && this.emitContext(), this.curContext = WF
        }
      }
      setLookAhead(FF) {
        return !(FF <= this.lookAhead) && (this.emitLookAhead(), this.lookAhead = FF, !0)
      }
      close() {
        this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead()
      }
    }
    class uF {
      constructor(FF, WF) {
        this.tracker = FF, this.context = WF, this.hash = FF.strict ? FF.hash(WF) : 0
      }
    }
    class hF {
      constructor(FF) {
        this.start = FF, this.state = FF.state, this.stack = FF.stack, this.base = this.stack.length
      }
      reduce(FF) {
        let WF = 65535 & FF,
          SF = FF >> 19;
        0 == SF ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= 3 * (SF - 1);
        let CF = this.start.p.parser.getGoto(this.stack[this.base - 3], WF, !0);
        this.state = CF
      }
    }
    class bW {
      constructor(FF, WF, SF) {
        this.stack = FF, this.pos = WF, this.index = SF, this.buffer = FF.buffer, 0 == this.index && this.maybeNext()
      }
      static create(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF.bufferBase + FF.buffer.length;
        return new bW(FF, WF, WF - FF.bufferBase)
      }
      maybeNext() {
        let FF = this.stack.parent;
        null != FF && (this.index = this.stack.bufferBase - FF.bufferBase, this.stack = FF, this.buffer = FF.buffer)
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
        return new bW(this.stack, this.pos, this.index)
      }
    }

    function dF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uint16Array;
      if ("string" != typeof FF) return FF;
      let SF = null;
      for (let CF = 0, AF = 0; CF < FF.length;) {
        let uF = 0;
        for (;;) {
          let WF = FF.charCodeAt(CF++),
            SF = !1;
          if (126 == WF) {
            uF = 65535;
            break
          }
          WF >= 92 && WF--, WF >= 34 && WF--;
          let AF = WF - 32;
          if (AF >= 46 && (AF -= 46, SF = !0), uF += AF, SF) break;
          uF *= 46
        }
        SF ? SF[AF++] = uF : SF = new WF(uF)
      }
      return SF
    }
    class PF {
      constructor() {
        this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0
      }
    }
    const RF = new PF;
    class iW {
      constructor(FF, WF) {
        this.input = FF, this.Bu = WF, this.chunk = "", this.chunkOff = 0, this.chunk2 = "", this.chunk2Pos = 0, this.next = -1, this.token = RF, this.rangeIndex = 0, this.pos = this.chunkPos = WF[0].from, this.range = WF[0], this.end = WF[WF.length - 1].to, this.readNext()
      }
      resolveOffset(FF, WF) {
        let SF = this.range,
          CF = this.rangeIndex,
          AF = this.pos + FF;
        for (; AF < SF.from;) {
          if (!CF) return null;
          let FF = this.Bu[--CF];
          AF -= SF.from - FF.to, SF = FF
        }
        for (; WF < 0 ? AF > SF.to : AF >= SF.to;) {
          if (CF == this.Bu.length - 1) return null;
          let FF = this.Bu[++CF];
          AF += FF.from - SF.to, SF = FF
        }
        return AF
      }
      clipPos(FF) {
        if (FF >= this.range.from && FF < this.range.to) return FF;
        for (let WF of this.Bu)
          if (WF.to > FF) return Math.max(FF, WF.from);
        return this.end
      }
      peek(FF) {
        let WF, SF, CF = this.chunkOff + FF;
        if (CF >= 0 && CF < this.chunk.length) WF = this.pos + FF, SF = this.chunk.charCodeAt(CF);
        else {
          let CF = this.resolveOffset(FF, 1);
          if (null == CF) return -1;
          if (WF = CF, WF >= this.chunk2Pos && WF < this.chunk2Pos + this.chunk2.length) SF = this.chunk2.charCodeAt(WF - this.chunk2Pos);
          else {
            let FF = this.rangeIndex,
              CF = this.range;
            for (; CF.to <= WF;) CF = this.Bu[++FF];
            this.chunk2 = this.input.chunk(this.chunk2Pos = WF), WF + this.chunk2.length > CF.to && (this.chunk2 = this.chunk2.slice(0, CF.to - WF)), SF = this.chunk2.charCodeAt(0)
          }
        }
        return WF >= this.token.lookAhead && (this.token.lookAhead = WF + 1), SF
      }
      acceptToken(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = WF ? this.resolveOffset(WF, -1) : this.pos;
        if (null == SF || SF < this.token.start) throw new RangeError("Token end out of bounds");
        this.token.value = FF, this.token.end = SF
      }
      acceptTokenTo(FF, WF) {
        this.token.value = FF, this.token.end = WF
      }
      getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
          let {
            chunk: FF,
            chunkPos: WF
          } = this;
          this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = FF, this.chunk2Pos = WF, this.chunkOff = this.pos - this.chunkPos
        } else {
          this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
          let FF = this.input.chunk(this.pos),
            WF = this.pos + FF.length;
          this.chunk = WF > this.range.to ? FF.slice(0, this.range.to - this.pos) : FF, this.chunkPos = this.pos, this.chunkOff = 0
        }
      }
      readNext() {
        return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff)
      }
      advance() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        for (this.chunkOff += FF; this.pos + FF >= this.range.to;) {
          if (this.rangeIndex == this.Bu.length - 1) return this.setDone();
          FF -= this.range.to - this.pos, this.range = this.Bu[++this.rangeIndex], this.pos = this.range.from
        }
        return this.pos += FF, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext()
      }
      setDone() {
        return this.pos = this.chunkPos = this.end, this.range = this.Bu[this.rangeIndex = this.Bu.length - 1], this.chunk = "", this.next = -1
      }
      reset(FF, WF) {
        if (WF ? (this.token = WF, WF.start = FF, WF.lookAhead = FF + 1, WF.value = WF.extended = -1) : this.token = RF, this.pos != FF) {
          if (this.pos = FF, FF == this.end) return this.setDone(), this;
          for (; FF < this.range.from;) this.range = this.Bu[--this.rangeIndex];
          for (; FF >= this.range.to;) this.range = this.Bu[++this.rangeIndex];
          FF >= this.chunkPos && FF < this.chunkPos + this.chunk.length ? this.chunkOff = FF - this.chunkPos : (this.chunk = "", this.chunkOff = 0), this.readNext()
        }
        return this
      }
      read(FF, WF) {
        if (FF >= this.chunkPos && WF <= this.chunkPos + this.chunk.length) return this.chunk.slice(FF - this.chunkPos, WF - this.chunkPos);
        if (FF >= this.chunk2Pos && WF <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(FF - this.chunk2Pos, WF - this.chunk2Pos);
        if (FF >= this.range.from && WF <= this.range.to) return this.input.read(FF, WF);
        let SF = "";
        for (let CF of this.Bu) {
          if (CF.from >= WF) break;
          CF.to > FF && (SF += this.input.read(Math.max(CF.from, FF), Math.min(CF.to, WF)))
        }
        return SF
      }
    }
    class eF {
      constructor(FF, WF) {
        this.data = FF, this.id = WF
      }
      token(FF, WF) {
        let {
          parser: SF
        } = WF.p;
        rW(this.data, FF, WF, this.id, SF.data, SF.tokenPrecTable)
      }
    }
    eF.prototype.contextual = eF.prototype.fallback = eF.prototype.extend = !1;
    class EF {
      constructor(FF, WF, SF) {
        this.precTable = WF, this.elseToken = SF, this.data = "string" == typeof FF ? dF(FF) : FF
      }
      token(FF, WF) {
        let SF = FF.pos,
          CF = 0;
        for (;;) {
          let SF = FF.next < 0,
            AF = FF.resolveOffset(1, 1);
          if (rW(this.data, FF, WF, 0, this.data, this.precTable), FF.token.value > -1) break;
          if (null == this.elseToken) return;
          if (SF || CF++, null == AF) break;
          FF.reset(AF, FF.token)
        }
        CF && (FF.reset(SF, FF.token), FF.acceptToken(this.elseToken, CF))
      }
    }
    EF.prototype.contextual = eF.prototype.fallback = eF.prototype.extend = !1;
    class QF {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.token = FF, this.contextual = !!WF.contextual, this.fallback = !!WF.fallback, this.extend = !!WF.extend
      }
    }

    function rW(FF, WF, SF, CF, AF, uF) {
      let hF = 0,
        bW = 1 << CF,
        {
          dialect: dF
        } = SF.p.parser;
      FF: for (; 0 != (bW & FF[hF]);) {
        let SF = FF[hF + 1];
        for (let iW = hF + 3; iW < SF; iW += 2)
          if ((FF[iW + 1] & bW) > 0) {
            let SF = FF[iW];
            if (dF.allows(SF) && (-1 == WF.token.value || WF.token.value == SF || tW(SF, WF.token.value, AF, uF))) {
              WF.acceptToken(SF);
              break
            }
          } let CF = WF.next,
          PF = 0,
          RF = FF[hF + 2];
        if (!(WF.next < 0 && RF > PF && 65535 == FF[SF + 3 * RF - 3])) {
          for (; PF < RF;) {
            let AF = PF + RF >> 1,
              uF = SF + AF + (AF << 1),
              bW = FF[uF],
              dF = FF[uF + 1] || 65536;
            if (CF < bW) RF = AF;
            else {
              if (!(CF >= dF)) {
                hF = FF[uF + 2], WF.advance();
                continue FF
              }
              PF = AF + 1
            }
          }
          break
        }
        hF = FF[SF + 3 * RF - 1]
      }
    }

    function gW(FF, WF, SF) {
      for (let CF, AF = WF; 65535 != (CF = FF[AF]); AF++)
        if (CF == SF) return AF - WF;
      return -1
    }

    function tW(FF, WF, SF, CF) {
      let AF = gW(SF, CF, WF);
      return AF < 0 || gW(SF, CF, FF) < AF
    }
    const TF = "undefined" != typeof process && {
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
    let aW = null;

    function kW(FF, WF, SF) {
      let AF = FF.cursor(CF.e.IncludeAnonymous);
      for (AF.moveTo(WF);;)
        if (!(SF < 0 ? AF.childBefore(WF) : AF.childAfter(WF)))
          for (;;) {
            if ((SF < 0 ? AF.to < WF : AF.from > WF) && !AF.type.isError) return SF < 0 ? Math.max(0, Math.min(AF.to - 1, WF - 25)) : Math.min(FF.length, Math.max(AF.from + 1, WF + 25));
            if (SF < 0 ? AF.prevSibling() : AF.nextSibling()) break;
            if (!AF.parent()) return SF < 0 ? 0 : FF.length
          }
    }
    class qW {
      constructor(FF, WF) {
        this.fragments = FF, this.nodeSet = WF, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment()
      }
      nextFragment() {
        let FF = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (FF) {
          for (this.safeFrom = FF.openStart ? kW(FF.tree, FF.from + FF.offset, 1) - FF.offset : FF.from, this.safeTo = FF.openEnd ? kW(FF.tree, FF.to + FF.offset, -1) - FF.offset : FF.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
          this.trees.push(FF.tree), this.start.push(-FF.offset), this.index.push(0), this.nextStart = this.safeFrom
        } else this.nextStart = 1e9
      }
      nodeAt(FF) {
        if (FF < this.nextStart) return null;
        for (; this.fragment && this.safeTo <= FF;) this.nextFragment();
        if (!this.fragment) return null;
        for (;;) {
          let WF = this.trees.length - 1;
          if (WF < 0) return this.nextFragment(), null;
          let SF = this.trees[WF],
            AF = this.index[WF];
          if (AF == SF.children.length) {
            this.trees.pop(), this.start.pop(), this.index.pop();
            continue
          }
          let uF = SF.children[AF],
            hF = this.start[WF] + SF.positions[AF];
          if (hF > FF) return this.nextStart = hF, null;
          if (uF instanceof CF.B) {
            if (hF == FF) {
              if (hF < this.safeFrom) return null;
              let FF = hF + uF.length;
              if (FF <= this.safeTo) {
                let WF = uF.prop(CF.i.lookAhead);
                if (!WF || FF + WF < this.fragment.to) return uF
              }
            }
            this.index[WF]++, hF + uF.length >= Math.max(this.safeFrom, FF) && (this.trees.push(uF), this.start.push(hF), this.index.push(0))
          } else this.index[WF]++, this.nextStart = hF + uF.length
        }
      }
    }
    class VF {
      constructor(FF, WF) {
        this.stream = WF, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = FF.tokenizers.map((FF => new PF))
      }
      getActions(FF) {
        let WF = 0,
          SF = null,
          {
            parser: CF
          } = FF.p,
          {
            tokenizers: AF
          } = CF,
          uF = CF.stateSlot(FF.state, 3),
          hF = FF.curContext ? FF.curContext.hash : 0,
          bW = 0;
        for (let dF = 0; dF < AF.length; dF++) {
          if (0 == (1 << dF & uF)) continue;
          let CF = AF[dF],
            PF = this.tokens[dF];
          if ((!SF || CF.fallback) && ((CF.contextual || PF.start != FF.pos || PF.mask != uF || PF.context != hF) && (this.updateCachedToken(PF, CF, FF), PF.mask = uF, PF.context = hF), PF.lookAhead > PF.end + 25 && (bW = Math.max(PF.lookAhead, bW)), 0 != PF.value)) {
            let AF = WF;
            if (PF.extended > -1 && (WF = this.addActions(FF, PF.extended, PF.end, WF)), WF = this.addActions(FF, PF.value, PF.end, WF), !CF.extend && (SF = PF, WF > AF)) break
          }
        }
        for (; this.actions.length > WF;) this.actions.pop();
        return bW && FF.setLookAhead(bW), SF || FF.pos != this.stream.end || (SF = new PF, SF.value = FF.p.parser.eofTerm, SF.start = SF.end = FF.pos, WF = this.addActions(FF, SF.value, SF.end, WF)), this.mainToken = SF, this.actions
      }
      getMainToken(FF) {
        if (this.mainToken) return this.mainToken;
        let WF = new PF,
          {
            pos: SF,
            p: CF
          } = FF;
        return WF.start = SF, WF.end = Math.min(SF + 1, CF.stream.end), WF.value = SF == CF.stream.end ? CF.parser.eofTerm : 0, WF
      }
      updateCachedToken(FF, WF, SF) {
        let CF = this.stream.clipPos(SF.pos);
        if (WF.token(this.stream.reset(CF, FF), SF), FF.value > -1) {
          let {
            parser: WF
          } = SF.p;
          for (let CF = 0; CF < WF.specialized.length; CF++)
            if (WF.specialized[CF] == FF.value) {
              let AF = WF.specializers[CF](this.stream.read(FF.start, FF.end), SF);
              if (AF >= 0 && SF.p.parser.dialect.allows(AF >> 1)) {
                0 == (1 & AF) ? FF.value = AF >> 1 : FF.extended = AF >> 1;
                break
              }
            }
        } else FF.value = 0, FF.end = this.stream.clipPos(CF + 1)
      }
      putAction(FF, WF, SF, CF) {
        for (let AF = 0; AF < CF; AF += 3)
          if (this.actions[AF] == FF) return CF;
        return this.actions[CF++] = FF, this.actions[CF++] = WF, this.actions[CF++] = SF, CF
      }
      addActions(FF, WF, SF, CF) {
        let {
          state: AF
        } = FF, {
          parser: uF
        } = FF.p, {
          data: hF
        } = uF;
        for (let bW = 0; bW < 2; bW++)
          for (let FF = uF.stateSlot(AF, bW ? 2 : 1);; FF += 3) {
            if (65535 == hF[FF]) {
              if (1 != hF[FF + 1]) {
                0 == CF && 2 == hF[FF + 1] && (CF = this.putAction(xW(hF, FF + 2), WF, SF, CF));
                break
              }
              FF = xW(hF, FF + 2)
            }
            hF[FF] == WF && (CF = this.putAction(xW(hF, FF + 1), WF, SF, CF))
          }
        return CF
      }
    }
    class NF {
      constructor(FF, WF, SF, CF) {
        this.parser = FF, this.input = WF, this.Bu = CF, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new iW(WF, CF), this.tokens = new VF(FF, this.stream), this.topTerm = FF.top[1];
        let {
          from: uF
        } = CF[0];
        this.stacks = [AF.start(this, FF.top[0], uF)], this.fragments = SF.length && this.stream.end - uF > 4 * FF.bufferLength ? new qW(SF, FF.nodeSet) : null
      }
      get parsedPos() {
        return this.minStackPos
      }
      advance() {
        let FF, WF, SF = this.stacks,
          CF = this.minStackPos,
          AF = this.stacks = [];
        if (this.bigReductionCount > 300 && 1 == SF.length) {
          let [FF] = SF;
          for (; FF.forceReduce() && FF.stack.length && FF.stack[FF.stack.length - 2] >= this.lastBigReductionStart;);
          this.bigReductionCount = this.lastBigReductionSize = 0
        }
        for (let uF = 0; uF < SF.length; uF++) {
          let hF = SF[uF];
          for (;;) {
            if (this.tokens.mainToken = null, hF.pos > CF) AF.push(hF);
            else {
              if (this.advanceStack(hF, AF, SF)) continue;
              {
                FF || (FF = [], WF = []), FF.push(hF);
                let SF = this.tokens.getMainToken(hF);
                WF.push(SF.value, SF.end)
              }
            }
            break
          }
        }
        if (!AF.length) {
          let WF = FF && function(FF) {
            let WF = null;
            for (let SF of FF) {
              let FF = SF.p.stoppedAt;
              (SF.pos == SF.p.stream.end || null != FF && SF.pos > FF) && SF.p.parser.stateFlag(SF.state, 2) && (!WF || WF.score < SF.score) && (WF = SF)
            }
            return WF
          }(FF);
          if (WF) return TF && console.log("Finish with " + this.stackID(WF)), this.stackToTree(WF);
          if (this.parser.strict) throw TF && FF && console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")), new SyntaxError("No parse at " + CF);
          this.recovering || (this.recovering = 5)
        }
        if (this.recovering && FF) {
          let SF = null != this.stoppedAt && FF[0].pos > this.stoppedAt ? FF[0] : this.runRecovery(FF, WF, AF);
          if (SF) return TF && console.log("Force-finish " + this.stackID(SF)), this.stackToTree(SF.forceAll())
        }
        if (this.recovering) {
          let FF = 1 == this.recovering ? 1 : 3 * this.recovering;
          if (AF.length > FF)
            for (AF.sort(((FF, WF) => WF.score - FF.score)); AF.length > FF;) AF.pop();
          AF.some((FF => FF.reducePos > CF)) && this.recovering--
        } else if (AF.length > 1) {
          FF: for (let FF = 0; FF < AF.length - 1; FF++) {
            let WF = AF[FF];
            for (let SF = FF + 1; SF < AF.length; SF++) {
              let CF = AF[SF];
              if (WF.sameState(CF) || WF.buffer.length > 500 && CF.buffer.length > 500) {
                if (!((WF.score - CF.score || WF.buffer.length - CF.buffer.length) > 0)) {
                  AF.splice(FF--, 1);
                  continue FF
                }
                AF.splice(SF--, 1)
              }
            }
          }
          AF.length > 12 && (AF.sort(((FF, WF) => WF.score - FF.score)), AF.splice(12, AF.length - 12))
        }
        this.minStackPos = AF[0].pos;
        for (let uF = 1; uF < AF.length; uF++) AF[uF].pos < this.minStackPos && (this.minStackPos = AF[uF].pos);
        return null
      }
      stopAt(FF) {
        if (null != this.stoppedAt && this.stoppedAt < FF) throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = FF
      }
      advanceStack(FF, WF, SF) {
        let AF = FF.pos,
          {
            parser: uF
          } = this,
          hF = TF ? this.stackID(FF) + " -> " : "";
        if (null != this.stoppedAt && AF > this.stoppedAt) return FF.forceReduce() ? FF : null;
        if (this.fragments) {
          let WF = FF.curContext && FF.curContext.tracker.strict,
            SF = WF ? FF.curContext.hash : 0;
          for (let bW = this.fragments.nodeAt(AF); bW;) {
            let AF = this.parser.nodeSet.types[bW.type.id] == bW.type ? uF.getGoto(FF.state, bW.type.id) : -1;
            if (AF > -1 && bW.length && (!WF || (bW.prop(CF.i.contextHash) || 0) == SF)) return FF.useNode(bW, AF), TF && console.log(hF + this.stackID(FF) + ` (via reuse of ${uF.getName(bW.type.id)})`), !0;
            if (!(bW instanceof CF.B) || 0 == bW.children.length || bW.positions[0] > 0) break;
            let dF = bW.children[0];
            if (!(dF instanceof CF.B && 0 == bW.positions[0])) break;
            bW = dF
          }
        }
        let bW = uF.stateSlot(FF.state, 4);
        if (bW > 0) return FF.reduce(bW), TF && console.log(hF + this.stackID(FF) + ` (via always-reduce ${uF.getName(65535&bW)})`), !0;
        if (FF.stack.length >= 8400)
          for (; FF.stack.length > 6e3 && FF.forceReduce(););
        let dF = this.tokens.getActions(FF);
        for (let CF = 0; CF < dF.length;) {
          let bW = dF[CF++],
            PF = dF[CF++],
            RF = dF[CF++],
            iW = CF == dF.length || !SF,
            eF = iW ? FF : FF.split(),
            EF = this.tokens.mainToken;
          if (eF.apply(bW, PF, EF ? EF.start : eF.pos, RF), TF && console.log(hF + this.stackID(eF) + ` (via ${0==(65536&bW)?"shift":`reduce of ${uF.getName(65535&bW)}`} for ${uF.getName(PF)} @ ${AF}${eF==FF?"":", split"})`), iW) return !0;
          eF.pos > AF ? WF.push(eF) : SF.push(eF)
        }
        return !1
      }
      advanceFully(FF, WF) {
        let SF = FF.pos;
        for (;;) {
          if (!this.advanceStack(FF, null, null)) return !1;
          if (FF.pos > SF) return DF(FF, WF), !0
        }
      }
      runRecovery(FF, WF, SF) {
        let CF = null,
          AF = !1;
        for (let uF = 0; uF < FF.length; uF++) {
          let hF = FF[uF],
            bW = WF[uF << 1],
            dF = WF[1 + (uF << 1)],
            PF = TF ? this.stackID(hF) + " -> " : "";
          if (hF.deadEnd) {
            if (AF) continue;
            if (AF = !0, hF.restart(), TF && console.log(PF + this.stackID(hF) + " (restarted)"), this.advanceFully(hF, SF)) continue
          }
          let RF = hF.split(),
            iW = PF;
          for (let FF = 0; FF < 10 && RF.forceReduce(); FF++) {
            if (TF && console.log(iW + this.stackID(RF) + " (via force-reduce)"), this.advanceFully(RF, SF)) break;
            TF && (iW = this.stackID(RF) + " -> ")
          }
          for (let FF of hF.recoverByInsert(bW)) TF && console.log(PF + this.stackID(FF) + " (via recover-insert)"), this.advanceFully(FF, SF);
          this.stream.end > hF.pos ? (dF == hF.pos && (dF++, bW = 0), hF.recoverByDelete(bW, dF), TF && console.log(PF + this.stackID(hF) + ` (via recover-delete ${this.parser.getName(bW)})`), DF(hF, SF)) : (!CF || CF.score < RF.score) && (CF = RF)
        }
        return CF
      }
      stackToTree(FF) {
        return FF.close(), CF.B.build({
          buffer: bW.create(FF),
          nodeSet: this.parser.nodeSet,
          topID: this.topTerm,
          maxBufferLength: this.parser.bufferLength,
          reused: this.reused,
          start: this.Bu[0].from,
          length: FF.pos - this.Bu[0].from,
          minRepeatType: this.parser.minRepeatTerm
        })
      }
      stackID(FF) {
        let WF = (aW || (aW = new WeakMap)).get(FF);
        return WF || aW.set(FF, WF = String.fromCodePoint(this.nextStackID++)), WF + FF
      }
    }

    function DF(FF, WF) {
      for (let SF = 0; SF < WF.length; SF++) {
        let CF = WF[SF];
        if (CF.pos == FF.pos && CF.sameState(FF)) return void(WF[SF].score < FF.score && (WF[SF] = FF))
      }
      WF.push(FF)
    }
    class LF {
      constructor(FF, WF, SF) {
        this.source = FF, this.flags = WF, this.disabled = SF
      }
      allows(FF) {
        return !this.disabled || 0 == this.disabled[FF]
      }
    }
    const mW = FF => FF;
    class OF extends CF.t {
      constructor(FF) {
        if (super(), this.wrappers = [], 14 != FF.version) throw new RangeError(`Parser version (${FF.version}) doesn't match runtime version (14)`);
        let WF = FF.nodeNames.split(" ");
        this.minRepeatTerm = WF.length;
        for (let CF = 0; CF < FF.repeatNodeCount; CF++) WF.push("");
        let SF = Object.keys(FF.topRules).map((WF => FF.topRules[WF][1])),
          AF = [];
        for (let CF = 0; CF < WF.length; CF++) AF.push([]);

        function uF(FF, WF, SF) {
          AF[FF].push([WF, WF.deserialize(String(SF))])
        }
        if (FF.nodeProps)
          for (let bW of FF.nodeProps) {
            let FF = bW[0];
            "string" == typeof FF && (FF = CF.i[FF]);
            for (let WF = 1; WF < bW.length;) {
              let SF = bW[WF++];
              if (SF >= 0) uF(SF, FF, bW[WF++]);
              else {
                let CF = bW[WF + -SF];
                for (let AF = -SF; AF > 0; AF--) uF(bW[WF++], FF, CF);
                WF++
              }
            }
          }
        this.nodeSet = new CF.k(WF.map(((WF, uF) => CF.m.define({
          name: uF >= this.minRepeatTerm ? void 0 : WF,
          id: uF,
          props: AF[uF],
          top: SF.indexOf(uF) > -1,
          error: 0 == uF,
          skipped: FF.skippedNodes && FF.skippedNodes.indexOf(uF) > -1
        })))), FF.propSources && (this.nodeSet = this.nodeSet.extend(...FF.propSources)), this.strict = !1, this.bufferLength = CF.c;
        let hF = dF(FF.tokenData);
        this.context = FF.context, this.specializerSpecs = FF.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
        for (let CF = 0; CF < this.specializerSpecs.length; CF++) this.specialized[CF] = this.specializerSpecs[CF].term;
        this.specializers = this.specializerSpecs.map(ZF), this.states = dF(FF.states, Uint32Array), this.data = dF(FF.stateData), this.goto = dF(FF.goto), this.maxTerm = FF.maxTerm, this.tokenizers = FF.tokenizers.map((FF => "number" == typeof FF ? new eF(hF, FF) : FF)), this.topRules = FF.topRules, this.dialects = FF.dialects || {}, this.dynamicPrecedences = FF.dynamicPrecedences || null, this.tokenPrecTable = FF.tokenPrec, this.termNames = FF.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]]
      }
      createParse(FF, WF, SF) {
        let CF = new NF(this, FF, WF, SF);
        for (let AF of this.wrappers) CF = AF(CF, FF, WF, SF);
        return CF
      }
      getGoto(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = this.goto;
        if (WF >= CF[0]) return -1;
        for (let AF = CF[WF + 1];;) {
          let WF = CF[AF++],
            uF = 1 & WF,
            hF = CF[AF++];
          if (uF && SF) return hF;
          for (let SF = AF + (WF >> 1); AF < SF; AF++)
            if (CF[AF] == FF) return hF;
          if (uF) return -1
        }
      }
      hasAction(FF, WF) {
        let SF = this.data;
        for (let CF = 0; CF < 2; CF++)
          for (let AF, uF = this.stateSlot(FF, CF ? 2 : 1);; uF += 3) {
            if (65535 == (AF = SF[uF])) {
              if (1 != SF[uF + 1]) {
                if (2 == SF[uF + 1]) return xW(SF, uF + 2);
                break
              }
              AF = SF[uF = xW(SF, uF + 2)]
            }
            if (AF == WF || 0 == AF) return xW(SF, uF + 1)
          }
        return 0
      }
      stateSlot(FF, WF) {
        return this.states[6 * FF + WF]
      }
      stateFlag(FF, WF) {
        return (this.stateSlot(FF, 0) & WF) > 0
      }
      validAction(FF, WF) {
        return !!this.allActions(FF, (FF => FF == WF || null))
      }
      allActions(FF, WF) {
        let SF = this.stateSlot(FF, 4),
          CF = SF ? WF(SF) : void 0;
        for (let AF = this.stateSlot(FF, 1); null == CF; AF += 3) {
          if (65535 == this.data[AF]) {
            if (1 != this.data[AF + 1]) break;
            AF = xW(this.data, AF + 2)
          }
          CF = WF(xW(this.data, AF + 1))
        }
        return CF
      }
      nextStates(FF) {
        let WF = [];
        for (let SF = this.stateSlot(FF, 1);; SF += 3) {
          if (65535 == this.data[SF]) {
            if (1 != this.data[SF + 1]) break;
            SF = xW(this.data, SF + 2)
          }
          if (0 == (1 & this.data[SF + 2])) {
            let FF = this.data[SF + 1];
            WF.some(((WF, SF) => 1 & SF && WF == FF)) || WF.push(this.data[SF], FF)
          }
        }
        return WF
      }
      configure(FF) {
        let WF = Object.assign(Object.create(OF.prototype), this);
        if (FF.props && (WF.nodeSet = this.nodeSet.extend(...FF.props)), FF.top) {
          let SF = this.topRules[FF.top];
          if (!SF) throw new RangeError(`Invalid top rule name ${FF.top}`);
          WF.top = SF
        }
        return FF.tokenizers && (WF.tokenizers = this.tokenizers.map((WF => {
          let SF = FF.tokenizers.find((FF => FF.from == WF));
          return SF ? SF.to : WF
        }))), FF.specializers && (WF.specializers = this.specializers.slice(), WF.specializerSpecs = this.specializerSpecs.map(((SF, CF) => {
          let AF = FF.specializers.find((FF => FF.from == SF.external));
          if (!AF) return SF;
          let uF = Object.assign(Object.assign({}, SF), {
            external: AF.to
          });
          return WF.specializers[CF] = ZF(uF), uF
        }))), FF.contextTracker && (WF.context = FF.contextTracker), FF.dialect && (WF.dialect = this.parseDialect(FF.dialect)), null != FF.strict && (WF.strict = FF.strict), FF.wrap && (WF.wrappers = WF.wrappers.concat(FF.wrap)), null != FF.bufferLength && (WF.bufferLength = FF.bufferLength), WF
      }
      hasWrappers() {
        return this.wrappers.length > 0
      }
      getName(FF) {
        return this.termNames ? this.termNames[FF] : String(FF <= this.maxNode && this.nodeSet.types[FF].name || FF)
      }
      get eofTerm() {
        return this.maxNode + 1
      }
      get topNode() {
        return this.nodeSet.types[this.top[1]]
      }
      dynamicPrecedence(FF) {
        let WF = this.dynamicPrecedences;
        return null == WF ? 0 : WF[FF] || 0
      }
      parseDialect(FF) {
        let WF = Object.keys(this.dialects),
          SF = WF.map((() => !1));
        if (FF)
          for (let AF of FF.split(" ")) {
            let FF = WF.indexOf(AF);
            FF >= 0 && (SF[FF] = !0)
          }
        let CF = null;
        for (let AF = 0; AF < WF.length; AF++)
          if (!SF[AF])
            for (let FF, SF = this.dialects[WF[AF]]; 65535 != (FF = this.data[SF++]);)(CF || (CF = new Uint8Array(this.maxTerm + 1)))[FF] = 1;
        return new LF(FF, SF, CF)
      }
      static deserialize(FF) {
        return new OF(FF)
      }
    }

    function xW(FF, WF) {
      return FF[WF] | FF[WF + 1] << 16
    }

    function ZF(FF) {
      if (FF.external) {
        let WF = FF.extend ? 1 : 0;
        return (SF, CF) => FF.external(SF, CF) << 1 | WF
      }
      return FF.get
    }
    var oF = SF(39188);
    const YF = [9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288],
      MF = new class {
        constructor(FF) {
          this.start = FF.start, this.shift = FF.shift || mW, this.reduce = FF.reduce || mW, this.reuse = FF.reuse || mW, this.hash = FF.hash || (() => 0), this.strict = !1 !== FF.strict
        }
      }({
        start: !1,
        shift: (FF, WF) => 5 == WF || 6 == WF || 320 == WF ? FF : 321 == WF,
        strict: !1
      }),
      cW = new QF(((FF, WF) => {
        let {
          next: SF
        } = FF;
        (125 == SF || -1 == SF || WF.context) && FF.acceptToken(318)
      }), {
        contextual: !0,
        fallback: !0
      }),
      GF = new QF(((FF, WF) => {
        let SF, {
          next: CF
        } = FF;
        YF.indexOf(CF) > -1 || (47 != CF || 47 != (SF = FF.peek(1)) && 42 != SF) && (125 == CF || 59 == CF || -1 == CF || WF.context || FF.acceptToken(316))
      }), {
        contextual: !0
      }),
      zW = new QF(((FF, WF) => {
        91 != FF.next || WF.context || FF.acceptToken(317)
      }), {
        contextual: !0
      }),
      IF = new QF(((FF, WF) => {
        let {
          next: SF
        } = FF;
        if (43 == SF || 45 == SF) {
          if (FF.advance(), SF == FF.next) {
            FF.advance();
            let SF = !WF.context && WF.canShift(1);
            FF.acceptToken(SF ? 1 : 2)
          }
        } else 63 == SF && 46 == FF.peek(1) && (FF.advance(), FF.advance(), (FF.next < 48 || FF.next > 57) && FF.acceptToken(3))
      }), {
        contextual: !0
      });

    function fF(FF, WF) {
      return FF >= 65 && FF <= 90 || FF >= 97 && FF <= 122 || 95 == FF || FF >= 192 || !WF && FF >= 48 && FF <= 57
    }
    const yW = new QF(((FF, WF) => {
        if (60 != FF.next || !WF.dialectEnabled(0)) return;
        if (FF.advance(), 47 == FF.next) return;
        let SF = 0;
        for (; YF.indexOf(FF.next) > -1;) FF.advance(), SF++;
        if (fF(FF.next, !0)) {
          for (FF.advance(), SF++; fF(FF.next, !1);) FF.advance(), SF++;
          for (; YF.indexOf(FF.next) > -1;) FF.advance(), SF++;
          if (44 == FF.next) return;
          for (let WF = 0;; WF++) {
            if (7 == WF) {
              if (!fF(FF.next, !0)) return;
              break
            }
            if (FF.next != "extends".charCodeAt(WF)) break;
            FF.advance(), SF++
          }
        }
        FF.acceptToken(4, -SF)
      })),
      sF = (0, oF.f)({
        "get set async static": oF.k.modifier,
        "for while do if else switch try catch finally return throw break continue default case defer": oF.k.controlKeyword,
        "in of await yield void typeof delete instanceof as satisfies": oF.k.operatorKeyword,
        "let var const using function class extends": oF.k.definitionKeyword,
        "import export from": oF.k.moduleKeyword,
        "with debugger new": oF.k.keyword,
        TemplateString: oF.k.special(oF.k.string),
        super: oF.k.atom,
        BooleanLiteral: oF.k.bool,
        this: oF.k.self,
        null: oF.k.null,
        Star: oF.k.modifier,
        VariableName: oF.k.variableName,
        "CallExpression/VariableName TaggedTemplateExpression/VariableName": oF.k.function(oF.k.variableName),
        VariableDefinition: oF.k.definition(oF.k.variableName),
        Label: oF.k.labelName,
        PropertyName: oF.k.propertyName,
        PrivatePropertyName: oF.k.special(oF.k.propertyName),
        "CallExpression/MemberExpression/PropertyName": oF.k.function(oF.k.propertyName),
        "FunctionDeclaration/VariableDefinition": oF.k.function(oF.k.definition(oF.k.variableName)),
        "ClassDeclaration/VariableDefinition": oF.k.definition(oF.k.className),
        "NewExpression/VariableName": oF.k.className,
        PropertyDefinition: oF.k.definition(oF.k.propertyName),
        PrivatePropertyDefinition: oF.k.definition(oF.k.special(oF.k.propertyName)),
        UpdateOp: oF.k.updateOperator,
        "LineComment Hashbang": oF.k.lineComment,
        BlockComment: oF.k.blockComment,
        Number: oF.k.number,
        String: oF.k.string,
        Escape: oF.k.escape,
        ArithOp: oF.k.arithmeticOperator,
        LogicOp: oF.k.logicOperator,
        BitOp: oF.k.bitwiseOperator,
        CompareOp: oF.k.compareOperator,
        RegExp: oF.k.regexp,
        Equals: oF.k.definitionOperator,
        Arrow: oF.k.function(oF.k.punctuation),
        ": Spread": oF.k.punctuation,
        "( )": oF.k.paren,
        "[ ]": oF.k.squareBracket,
        "{ }": oF.k.brace,
        "InterpolationStart InterpolationEnd": oF.k.special(oF.k.brace),
        ".": oF.k.derefOperator,
        ", ;": oF.k.separator,
        "@": oF.k.meta,
        TypeName: oF.k.typeName,
        TypeDefinition: oF.k.definition(oF.k.typeName),
        "type enum interface implements namespace module declare": oF.k.definitionKeyword,
        "abstract global Privacy readonly override": oF.k.modifier,
        "is keyof unique infer asserts": oF.k.operatorKeyword,
        JSXAttributeValue: oF.k.attributeValue,
        JSXText: oF.k.content,
        "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": oF.k.angleBracket,
        "JSXIdentifier JSXNameSpacedName": oF.k.tagName,
        "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": oF.k.attributeName,
        "JSXBuiltin/JSXIdentifier": oF.k.standard(oF.k.tagName)
      }),
      nF = {
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
      HF = {
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
      KF = {
        __proto__: null,
        "<": 193
      },
      wF = OF.deserialize({
        version: 14,
        states: "$F|Q%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#DaO.QQlO'#DgO.bQlO'#DrO%[QlO'#DzO0fQlO'#ESOOQ!0Lf'#E['#E[O1PQ`O'#EXOOQO'#Ep'#EpOOQO'#Il'#IlO1XQ`O'#GsO1dQ`O'#EoO1iQ`O'#EoO3hQ!0MxO'#JrO6[Q!0MxO'#JsO6uQ`O'#F]O6zQ,UO'#FtOOQ!0Lf'#Ff'#FfO7VO7dO'#FfO9XQMhO'#F|O9`Q`O'#F{OOQ!0Lf'#Js'#JsOOQ!0Lb'#Jr'#JrO9eQ`O'#GwOOQ['#K_'#K_O9pQ`O'#IYO9uQ!0LrO'#IZOOQ['#J`'#J`OOQ['#I_'#I_Q`QlOOQ`QlOOO9}Q!L^O'#DvO:UQlO'#EOO:]QlO'#EQO9kQ`O'#GsO:dQMhO'#CoO:rQ`O'#EnO:}Q`O'#EyO;hQMhO'#FeO;xQ`O'#GsOOQO'#K`'#K`O;}Q`O'#K`O<]Q`O'#G{O<]Q`O'#G|O<]Q`O'#HOO9kQ`O'#HRO=SQ`O'#HUO>kQ`O'#CeO>{Q`O'#HcO?TQ`O'#HiO?TQ`O'#HkO`QlO'#HmO?TQ`O'#HoO?TQ`O'#HrO?YQ`O'#HxO?_Q!0LsO'#IOO%[QlO'#IQO?jQ!0LsO'#ISO?uQ!0LsO'#IUO9uQ!0LrO'#IWO@QQ!0MxO'#CiOASQpO'#DlQOQ`OOO%[QlO'#EQOAjQ`O'#ETO:dQMhO'#EnOAuQ`O'#EnOBQQ!bO'#FeOOQ['#Cg'#CgOOQ!0Lb'#Dq'#DqOOQ!0Lb'#Jv'#JvO%[QlO'#JvOOQO'#Jy'#JyOOQO'#Ih'#IhOCQQpO'#EgOOQ!0Lb'#Ef'#EfOOQ!0Lb'#J}'#J}OC|Q!0MSO'#EgODWQpO'#EWOOQO'#Jx'#JxODlQpO'#JyOEyQpO'#EWODWQpO'#EgPFWO&2DjO'#CbPOOO)CD})CD}OOOO'#I`'#I`OFcO#tO,59UOOQ!0Lh,59U,59UOOOO'#Ia'#IaOFqO&jO,59UOGPQ!L^O'#DcOOOO'#Ic'#IcOGWO#@ItO,59{OOQ!0Lf,59{,59{OGfQlO'#IdOGyQ`O'#JtOIxQ!fO'#JtO+}QlO'#JtOJPQ`O,5:ROJgQ`O'#EpOJtQ`O'#KTOKPQ`O'#KSOKPQ`O'#KSOKXQ`O,5;^OK^Q`O'#KROOQ!0Ln,5:^,5:^OKeQlO,5:^OMcQ!0MxO,5:fONSQ`O,5:nONmQ!0LrO'#KQONtQ`O'#KPO9eQ`O'#KPO! YQ`O'#KPO! bQ`O,5;]O! gQ`O'#KPO!#lQ!fO'#JsOOQ!0Lh'#Ci'#CiO%[QlO'#ESO!$[Q!fO,5:sOOQS'#Jz'#JzOOQO-E<j-E<jO9kQ`O,5=_O!$rQ`O,5=_O!$wQlO,5;ZO!&zQMhO'#EkO!(eQ`O,5;ZO!(jQlO'#DyO!(tQpO,5;dO!(|QpO,5;dO%[QlO,5;dOOQ['#FT'#FTOOQ['#FV'#FVO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eO%[QlO,5;eOOQ['#FZ'#FZO!)[QlO,5;tOOQ!0Lf,5;y,5;yOOQ!0Lf,5;z,5;zOOQ!0Lf,5;|,5;|O%[QlO'#IpO!+_Q!0LrO,5<iO%[QlO,5;eO!&zQMhO,5;eO!+|QMhO,5;eO!-nQMhO'#E^O%[QlO,5;wOOQ!0Lf,5;{,5;{O!-uQ,UO'#FjO!.rQ,UO'#KXO!.^Q,UO'#KXO!.yQ,UO'#KXOOQO'#KX'#KXO!/_Q,UO,5<SOOOW,5<`,5<`O!/pQlO'#FvOOOW'#Io'#IoO7VO7dO,5<QO!/wQ,UO'#FxOOQ!0Lf,5<Q,5<QO!0hQ$IUO'#CyOOQ!0Lh'#C}'#C}O!0{O#@ItO'#DRO!1iQMjO,5<eO!1pQ`O,5<hO!3YQ(CWO'#GXO!3jQ`O'#GYO!3oQ`O'#GYO!5_Q(CWO'#G^O!6dQpO'#GbOOQO'#Gn'#GnO!,TQMhO'#GmOOQO'#Gp'#GpO!,TQMhO'#GoO!7VQ$IUO'#JlOOQ!0Lh'#Jl'#JlO!7aQ`O'#JkO!7oQ`O'#JjO!7wQ`O'#CuOOQ!0Lh'#C{'#C{O!8YQ`O'#C}OOQ!0Lh'#DV'#DVOOQ!0Lh'#DX'#DXO!8_Q`O,5<eO1SQ`O'#DZO!,TQMhO'#GPO!,TQMhO'#GRO!8gQ`O'#GTO!8lQ`O'#GUO!3oQ`O'#G[O!,TQMhO'#GaO<]Q`O'#JkO!8qQ`O'#EqO!9`Q`O,5<gOOQ!0Lb'#Cr'#CrO!9hQ`O'#ErO!:bQpO'#EsOOQ!0Lb'#KR'#KRO!:iQ!0LrO'#KaO9uQ!0LrO,5=cO`QlO,5>tOOQ['#Jh'#JhOOQ[,5>u,5>uOOQ[-E<]-E<]O!<hQ!0MxO,5:bO!:]QpO,5:`O!?RQ!0MxO,5:jO%[QlO,5:jO!AiQ!0MxO,5:lOOQO,5@z,5@zO!BYQMhO,5=_O!BhQ!0LrO'#JiO9`Q`O'#JiO!ByQ!0LrO,59ZO!CUQpO,59ZO!C^QMhO,59ZO:dQMhO,59ZO!CiQ`O,5;ZO!CqQ`O'#HbO!DVQ`O'#KdO%[QlO,5;}O!:]QpO,5<PO!D_Q`O,5=zO!DdQ`O,5=zO!DiQ`O,5=zO!DwQ`O,5=zO9uQ!0LrO,5=zO<]Q`O,5=jOOQO'#Cy'#CyO!EOQpO,5=gO!EWQMhO,5=hO!EcQ`O,5=jO!EhQ!bO,5=mO!EpQ`O'#K`O?YQ`O'#HWO9kQ`O'#HYO!EuQ`O'#HYO:dQMhO'#H[O!EzQ`O'#H[OOQ[,5=p,5=pO!FPQ`O'#H]O!FbQ`O'#CoO!FgQ`O,59PO!FqQ`O,59PO!HvQlO,59POOQ[,59P,59PO!IWQ!0LrO,59PO%[QlO,59PO!KcQlO'#HeOOQ['#Hf'#HfOOQ['#Hg'#HgO`QlO,5=}O!KyQ`O,5=}O`QlO,5>TO`QlO,5>VO!LOQ`O,5>XO`QlO,5>ZO!LTQ`O,5>^O!LYQlO,5>dOOQ[,5>j,5>jO%[QlO,5>jO9uQ!0LrO,5>lOOQ[,5>n,5>nO#!dQ`O,5>nOOQ[,5>p,5>pO#!dQ`O,5>pOOQ[,5>r,5>rO##QQpO'#D_O%[QlO'#JvO##sQpO'#JvO##}QpO'#DmO#$`QpO'#DmO#&qQlO'#DmO#&xQ`O'#JuO#'QQ`O,5:WO#'VQ`O'#EtO#'eQ`O'#KUO#'mQ`O,5;_O#'rQpO'#DmO#(PQpO'#EVOOQ!0Lf,5:o,5:oO%[QlO,5:oO#(WQ`O,5:oO?YQ`O,5;YO!CUQpO,5;YO!C^QMhO,5;YO:dQMhO,5;YO#(`Q`O,5@bO#(eQ07dO,5:sOOQO-E<f-E<fO#)kQ!0MSO,5;RODWQpO,5:rO#)uQpO,5:rODWQpO,5;RO!ByQ!0LrO,5:rOOQ!0Lb'#Ej'#EjOOQO,5;R,5;RO%[QlO,5;RO#*SQ!0LrO,5;RO#*_Q!0LrO,5;RO!CUQpO,5:rOOQO,5;X,5;XO#*mQ!0LrO,5;RPOOO'#I^'#I^P#+RO&2DjO,58|POOO,58|,58|OOOO-E<^-E<^OOQ!0Lh1G.p1G.pOOOO-E<_-E<_OOOO,59},59}O#+^Q!bO,59}OOOO-E<a-E<aOOQ!0Lf1G/g1G/gO#+cQ!fO,5?OO+}QlO,5?OOOQO,5?U,5?UO#+mQlO'#IdOOQO-E<b-E<bO#+zQ`O,5@`O#,SQ!fO,5@`O#,ZQ`O,5@nOOQ!0Lf1G/m1G/mO%[QlO,5@oO#,cQ`O'#IjOOQO-E<h-E<hO#,ZQ`O,5@nOOQ!0Lb1G0x1G0xOOQ!0Ln1G/x1G/xOOQ!0Ln1G0Y1G0YO%[QlO,5@lO#,wQ!0LrO,5@lO#-YQ!0LrO,5@lO#-aQ`O,5@kO9eQ`O,5@kO#-iQ`O,5@kO#-wQ`O'#ImO#-aQ`O,5@kOOQ!0Lb1G0w1G0wO!(tQpO,5:uO!)PQpO,5:uOOQS,5:w,5:wO#.iQdO,5:wO#.qQMhO1G2yO9kQ`O1G2yOOQ!0Lf1G0u1G0uO#/PQ!0MxO1G0uO#0UQ!0MvO,5;VOOQ!0Lh'#GW'#GWO#0rQ!0MzO'#JlO!$wQlO1G0uO#2}Q!fO'#JwO%[QlO'#JwO#3XQ`O,5:eOOQ!0Lh'#D_'#D_OOQ!0Lf1G1O1G1OO%[QlO1G1OOOQ!0Lf1G1f1G1fO#3^Q`O1G1OO#5rQ!0MxO1G1PO#5yQ!0MxO1G1PO#8aQ!0MxO1G1PO#8hQ!0MxO1G1PO#;OQ!0MxO1G1PO#=fQ!0MxO1G1PO#=mQ!0MxO1G1PO#=tQ!0MxO1G1PO#@[Q!0MxO1G1PO#@cQ!0MxO1G1PO#BpQ?MtO'#CiO#DkQ?MtO1G1`O#DrQ?MtO'#JsO#EVQ!0MxO,5?[OOQ!0Lb-E<n-E<nO#GdQ!0MxO1G1PO#HaQ!0MzO1G1POOQ!0Lf1G1P1G1PO#IdQMjO'#J|O#InQ`O,5:xO#IsQ!0MxO1G1cO#JgQ,UO,5<WO#JoQ,UO,5<XO#JwQ,UO'#FoO#K`Q`O'#FnOOQO'#KY'#KYOOQO'#In'#InO#KeQ,UO1G1nOOQ!0Lf1G1n1G1nOOOW1G1y1G1yO#KvQ?MtO'#JrO#LQQ`O,5<bO!)[QlO,5<bOOOW-E<m-E<mOOQ!0Lf1G1l1G1lO#LVQpO'#KXOOQ!0Lf,5<d,5<dO#L_QpO,5<dO#LdQMhO'#DTOOOO'#Ib'#IbO#LkO#@ItO,59mOOQ!0Lh,59m,59mO%[QlO1G2PO!8lQ`O'#IrO#LvQ`O,5<zOOQ!0Lh,5<w,5<wO!,TQMhO'#IuO#MdQMjO,5=XO!,TQMhO'#IwO#NVQMjO,5=ZO!&zQMhO,5=]OOQO1G2S1G2SO#NaQ!dO'#CrO#NtQ(CWO'#ErO$ |QpO'#GbO$!dQ!dO,5<sO$!kQ`O'#K[O9eQ`O'#K[O$!yQ`O,5<uO$#aQ!dO'#C{O!,TQMhO,5<tO$#kQ`O'#GZO$$PQ`O,5<tO$$UQ!dO'#GWO$$cQ!dO'#K]O$$mQ`O'#K]O!&zQMhO'#K]O$$rQ`O,5<xO$$wQlO'#JvO$%RQpO'#GcO#$`QpO'#GcO$%dQ`O'#GgO!3oQ`O'#GkO$%iQ!0LrO'#ItO$%tQpO,5<|OOQ!0Lp,5<|,5<|O$%{QpO'#GcO$&YQpO'#GdO$&kQpO'#GdO$&pQMjO,5=XO$'QQMjO,5=ZOOQ!0Lh,5=^,5=^O!,TQMhO,5@VO!,TQMhO,5@VO$'bQ`O'#IyO$'vQ`O,5@UO$(OQ`O,59aOOQ!0Lh,59i,59iO$(TQ`O,5@VO$)TQ$IYO,59uOOQ!0Lh'#Jp'#JpO$)vQMjO,5<kO$*iQMjO,5<mO@zQ`O,5<oOOQ!0Lh,5<p,5<pO$*sQ`O,5<vO$*xQMjO,5<{O$+YQ`O'#KPO!$wQlO1G2RO$+_Q`O1G2RO9eQ`O'#KSO9eQ`O'#EtO%[QlO'#EtO9eQ`O'#I{O$+dQ!0LrO,5@{OOQ[1G2}1G2}OOQ[1G4`1G4`OOQ!0Lf1G/|1G/|OOQ!0Lf1G/z1G/zO$-fQ!0MxO1G0UOOQ[1G2y1G2yO!&zQMhO1G2yO%[QlO1G2yO#.tQ`O1G2yO$/jQMhO'#EkOOQ!0Lb,5@T,5@TO$/wQ!0LrO,5@TOOQ[1G.u1G.uO!ByQ!0LrO1G.uO!CUQpO1G.uO!C^QMhO1G.uO$0YQ`O1G0uO$0_Q`O'#CiO$0jQ`O'#KeO$0rQ`O,5=|O$0wQ`O'#KeO$0|Q`O'#KeO$1[Q`O'#JRO$1jQ`O,5AOO$1rQ!fO1G1iOOQ!0Lf1G1k1G1kO9kQ`O1G3fO@zQ`O1G3fO$1yQ`O1G3fO$2OQ`O1G3fO!DiQ`O1G3fO9uQ!0LrO1G3fOOQ[1G3f1G3fO!EcQ`O1G3UO!&zQMhO1G3RO$2TQ`O1G3ROOQ[1G3S1G3SO!&zQMhO1G3SO$2YQ`O1G3SO$2bQpO'#HQOOQ[1G3U1G3UO!6_QpO'#I}O!EhQ!bO1G3XOOQ[1G3X1G3XOOQ[,5=r,5=rO$2jQMhO,5=tO9kQ`O,5=tO$%dQ`O,5=vO9`Q`O,5=vO!CUQpO,5=vO!C^QMhO,5=vO:dQMhO,5=vO$2xQ`O'#KcO$3TQ`O,5=wOOQ[1G.k1G.kO$3YQ!0LrO1G.kO@zQ`O1G.kO$3eQ`O1G.kO9uQ!0LrO1G.kO$5mQ!fO,5AQO$5zQ`O,5AQO9eQ`O,5AQO$6VQlO,5>PO$6^Q`O,5>POOQ[1G3i1G3iO`QlO1G3iOOQ[1G3o1G3oOOQ[1G3q1G3qO?TQ`O1G3sO$6cQlO1G3uO$:gQlO'#HtOOQ[1G3x1G3xO$:tQ`O'#HzO?YQ`O'#H|OOQ[1G4O1G4OO$:|QlO1G4OO9uQ!0LrO1G4UOOQ[1G4W1G4WOOQ!0Lb'#G_'#G_O9uQ!0LrO1G4YO9uQ!0LrO1G4[O$?TQ`O,5@bO!)[QlO,5;`O9eQ`O,5;`O?YQ`O,5:XO!)[QlO,5:XO!CUQpO,5:XO$?YQ?MtO,5:XOOQO,5;`,5;`O$?dQpO'#IeO$?zQ`O,5@aOOQ!0Lf1G/r1G/rO$@SQpO'#IkO$@^Q`O,5@pOOQ!0Lb1G0y1G0yO#$`QpO,5:XOOQO'#Ig'#IgO$@fQpO,5:qOOQ!0Ln,5:q,5:qO#(ZQ`O1G0ZOOQ!0Lf1G0Z1G0ZO%[QlO1G0ZOOQ!0Lf1G0t1G0tO?YQ`O1G0tO!CUQpO1G0tO!C^QMhO1G0tOOQ!0Lb1G5|1G5|O!ByQ!0LrO1G0^OOQO1G0m1G0mO%[QlO1G0mO$@mQ!0LrO1G0mO$@xQ!0LrO1G0mO!CUQpO1G0^ODWQpO1G0^O$AWQ!0LrO1G0mOOQO1G0^1G0^O$AlQ!0MxO1G0mPOOO-E<[-E<[POOO1G.h1G.hOOOO1G/i1G/iO$AvQ!bO,5<iO$BOQ!fO1G4jOOQO1G4p1G4pO%[QlO,5?OO$BYQ`O1G5zO$BbQ`O1G6YO$BjQ!fO1G6ZO9eQ`O,5?UO$BtQ!0MxO1G6WO%[QlO1G6WO$CUQ!0LrO1G6WO$CgQ`O1G6VO$CgQ`O1G6VO9eQ`O1G6VO$CoQ`O,5?XO9eQ`O,5?XOOQO,5?X,5?XO$DTQ`O,5?XO$+YQ`O,5?XOOQO-E<k-E<kOOQS1G0a1G0aOOQS1G0c1G0cO#.lQ`O1G0cOOQ[7+(e7+(eO!&zQMhO7+(eO%[QlO7+(eO$DcQ`O7+(eO$DnQMhO7+(eO$D|Q!0MzO,5=XO$GXQ!0MzO,5=ZO$IdQ!0MzO,5=XO$KuQ!0MzO,5=ZO$NWQ!0MzO,59uO%!]Q!0MzO,5<kO%$hQ!0MzO,5<mO%&sQ!0MzO,5<{OOQ!0Lf7+&a7+&aO%)UQ!0MxO7+&aO%)xQlO'#IfO%*VQ`O,5@cO%*_Q!fO,5@cOOQ!0Lf1G0P1G0PO%*iQ`O7+&jOOQ!0Lf7+&j7+&jO%*nQ?MtO,5:fO%[QlO7+&zO%*xQ?MtO,5:bO%+VQ?MtO,5:jO%+aQ?MtO,5:lO%+kQMhO'#IiO%+uQ`O,5@hOOQ!0Lh1G0d1G0dOOQO1G1r1G1rOOQO1G1s1G1sO%+}Q!jO,5<ZO!)[QlO,5<YOOQO-E<l-E<lOOQ!0Lf7+'Y7+'YOOOW7+'e7+'eOOOW1G1|1G1|O%,YQ`O1G1|OOQ!0Lf1G2O1G2OOOOO,59o,59oO%,_Q!dO,59oOOOO-E<`-E<`OOQ!0Lh1G/X1G/XO%,fQ!0MxO7+'kOOQ!0Lh,5?^,5?^O%-YQMhO1G2fP%-aQ`O'#IrPOQ!0Lh-E<p-E<pO%-}QMjO,5?aOOQ!0Lh-E<s-E<sO%.pQMjO,5?cOOQ!0Lh-E<u-E<uO%.zQ!dO1G2wO%/RQ!dO'#CrO%/iQMhO'#KSO$$wQlO'#JvOOQ!0Lh1G2_1G2_O%/sQ`O'#IqO%0[Q`O,5@vO%0[Q`O,5@vO%0dQ`O,5@vO%0oQ`O,5@vOOQO1G2a1G2aO%0}QMjO1G2`O$+YQ`O'#K[O!,TQMhO1G2`O%1_Q(CWO'#IsO%1lQ`O,5@wO!&zQMhO,5@wO%1tQ!dO,5@wOOQ!0Lh1G2d1G2dO%4UQ!fO'#CiO%4`Q`O,5=POOQ!0Lb,5<},5<}O%4hQpO,5<}OOQ!0Lb,5=O,5=OOCwQ`O,5<}O%4sQpO,5<}OOQ!0Lb,5=R,5=RO$+YQ`O,5=VOOQO,5?`,5?`OOQO-E<r-E<rOOQ!0Lp1G2h1G2hO#$`QpO,5<}O$$wQlO,5=PO%5RQ`O,5=OO%5^QpO,5=OO!,TQMhO'#IuO%6WQMjO1G2sO!,TQMhO'#IwO%6yQMjO1G2uO%7TQMjO1G5qO%7_QMjO1G5qOOQO,5?e,5?eOOQO-E<w-E<wOOQO1G.{1G.{O!,TQMhO1G5qO!,TQMhO1G5qO!:]QpO,59wO%[QlO,59wOOQ!0Lh,5<j,5<jO%7lQ`O1G2ZO!,TQMhO1G2bO%7qQ!0MxO7+'mOOQ!0Lf7+'m7+'mO!$wQlO7+'mO%8eQ`O,5;`OOQ!0Lb,5?g,5?gOOQ!0Lb-E<y-E<yO%8jQ!dO'#K^O#(ZQ`O7+(eO4UQ!fO7+(eO$DfQ`O7+(eO%8tQ!0MvO'#CiO%9XQ!0MvO,5=SO%9lQ`O,5=SO%9tQ`O,5=SOOQ!0Lb1G5o1G5oOOQ[7+$a7+$aO!ByQ!0LrO7+$aO!CUQpO7+$aO!$wQlO7+&aO%9yQ`O'#JQO%:bQ`O,5APOOQO1G3h1G3hO9kQ`O,5APO%:bQ`O,5APO%:jQ`O,5APOOQO,5?m,5?mOOQO-E=P-E=POOQ!0Lf7+'T7+'TO%:oQ`O7+)QO9uQ!0LrO7+)QO9kQ`O7+)QO@zQ`O7+)QO%:tQ`O7+)QOOQ[7+)Q7+)QOOQ[7+(p7+(pO%:yQ!0MvO7+(mO!&zQMhO7+(mO!E^Q`O7+(nOOQ[7+(n7+(nO!&zQMhO7+(nO%;TQ`O'#KbO%;`Q`O,5=lOOQO,5?i,5?iOOQO-E<{-E<{OOQ[7+(s7+(sO%<rQpO'#HZOOQ[1G3`1G3`O!&zQMhO1G3`O%[QlO1G3`O%<yQ`O1G3`O%=UQMhO1G3`O9uQ!0LrO1G3bO$%dQ`O1G3bO9`Q`O1G3bO!CUQpO1G3bO!C^QMhO1G3bO%=dQ`O'#JPO%=xQ`O,5@}O%>QQpO,5@}OOQ!0Lb1G3c1G3cOOQ[7+$V7+$VO@zQ`O7+$VO9uQ!0LrO7+$VO%>]Q`O7+$VO%[QlO1G6lO%[QlO1G6mO%>bQ!0LrO1G6lO%>lQlO1G3kO%>sQ`O1G3kO%>xQlO1G3kOOQ[7+)T7+)TO9uQ!0LrO7+)_O`QlO7+)aOOQ['#Kh'#KhOOQ['#JS'#JSO%?PQlO,5>`OOQ[,5>`,5>`O%[QlO'#HuO%?^Q`O'#HwOOQ[,5>f,5>fO9eQ`O,5>fOOQ[,5>h,5>hOOQ[7+)j7+)jOOQ[7+)p7+)pOOQ[7+)t7+)tOOQ[7+)v7+)vO%?cQpO1G5|O%?}Q?MtO1G0zO%@XQ`O1G0zOOQO1G/s1G/sO%@dQ?MtO1G/sO?YQ`O1G/sO!)[QlO'#DmOOQO,5?P,5?POOQO-E<c-E<cOOQO,5?V,5?VOOQO-E<i-E<iO!CUQpO1G/sOOQO-E<e-E<eOOQ!0Ln1G0]1G0]OOQ!0Lf7+%u7+%uO#(ZQ`O7+%uOOQ!0Lf7+&`7+&`O?YQ`O7+&`O!CUQpO7+&`OOQO7+%x7+%xO$AlQ!0MxO7+&XOOQO7+&X7+&XO%[QlO7+&XO%@nQ!0LrO7+&XO!ByQ!0LrO7+%xO!CUQpO7+%xO%@yQ!0LrO7+&XO%AXQ!0MxO7++rO%[QlO7++rO%AiQ`O7++qO%AiQ`O7++qOOQO1G4s1G4sO9eQ`O1G4sO%AqQ`O1G4sOOQS7+%}7+%}O#(ZQ`O<<LPO4UQ!fO<<LPO%BPQ`O<<LPOOQ[<<LP<<LPO!&zQMhO<<LPO%[QlO<<LPO%BXQ`O<<LPO%BdQ!0MzO,5?aO%DoQ!0MzO,5?cO%FzQ!0MzO1G2`O%I]Q!0MzO1G2sO%KhQ!0MzO1G2uO%MsQ!fO,5?QO%[QlO,5?QOOQO-E<d-E<dO%M}Q`O1G5}OOQ!0Lf<<JU<<JUO%NVQ?MtO1G0uO&!^Q?MtO1G1PO&!eQ?MtO1G1PO&$fQ?MtO1G1PO&$mQ?MtO1G1PO&&nQ?MtO1G1PO&(oQ?MtO1G1PO&(vQ?MtO1G1PO&(}Q?MtO1G1PO&+OQ?MtO1G1PO&+VQ?MtO1G1PO&+^Q!0MxO<<JfO&-UQ?MtO1G1PO&.RQ?MvO1G1PO&/UQ?MvO'#JlO&1[Q?MtO1G1cO&1iQ?MtO1G0UO&1sQMjO,5?TOOQO-E<g-E<gO!)[QlO'#FqOOQO'#KZ'#KZOOQO1G1u1G1uO&1}Q`O1G1tO&2SQ?MtO,5?[OOOW7+'h7+'hOOOO1G/Z1G/ZO&2^Q!dO1G4xOOQ!0Lh7+(Q7+(QP!&zQMhO,5?^O!,TQMhO7+(cO&2eQ`O,5?]O9eQ`O,5?]O$+YQ`O,5?]OOQO-E<o-E<oO&2sQ`O1G6bO&2sQ`O1G6bO&2{Q`O1G6bO&3WQMjO7+'zO&3hQ!dO,5?_O&3rQ`O,5?_O!&zQMhO,5?_OOQO-E<q-E<qO&3wQ!dO1G6cO&4RQ`O1G6cO&4ZQ`O1G2kO!&zQMhO1G2kOOQ!0Lb1G2i1G2iOOQ!0Lb1G2j1G2jO%4hQpO1G2iO!CUQpO1G2iOCwQ`O1G2iOOQ!0Lb1G2q1G2qO&4`QpO1G2iO&4nQ`O1G2kO$+YQ`O1G2jOCwQ`O1G2jO$$wQlO1G2kO&4vQ`O1G2jO&5jQMjO,5?aOOQ!0Lh-E<t-E<tO&6]QMjO,5?cOOQ!0Lh-E<v-E<vO!,TQMhO7++]O&6gQMjO7++]O&6qQMjO7++]OOQ!0Lh1G/c1G/cO&7OQ`O1G/cOOQ!0Lh7+'u7+'uO&7TQMjO7+'|O&7eQ!0MxO<<KXOOQ!0Lf<<KX<<KXO&8XQ`O1G0zO!&zQMhO'#IzO&8^Q`O,5@xO&:`Q!fO<<LPO!&zQMhO1G2nO&:gQ!0LrO1G2nOOQ[<<G{<<G{O!ByQ!0LrO<<G{O&:xQ!0MxO<<I{OOQ!0Lf<<I{<<I{OOQO,5?l,5?lO&;lQ`O,5?lO&;qQ`O,5?lOOQO-E=O-E=OO&<PQ`O1G6kO&<PQ`O1G6kO9kQ`O1G6kO@zQ`O<<LlOOQ[<<Ll<<LlO&<XQ`O<<LlO9uQ!0LrO<<LlO9kQ`O<<LlOOQ[<<LX<<LXO%:yQ!0MvO<<LXOOQ[<<LY<<LYO!E^Q`O<<LYO&<^QpO'#I|O&<iQ`O,5@|O!)[QlO,5@|OOQ[1G3W1G3WOOQO'#JO'#JOO9uQ!0LrO'#JOO&<qQpO,5=uOOQ[,5=u,5=uO&<xQpO'#EgO&=PQpO'#GeO&=UQ`O7+(zO&=ZQ`O7+(zOOQ[7+(z7+(zO!&zQMhO7+(zO%[QlO7+(zO&=cQ`O7+(zOOQ[7+(|7+(|O9uQ!0LrO7+(|O$%dQ`O7+(|O9`Q`O7+(|O!CUQpO7+(|O&=nQ`O,5?kOOQO-E<}-E<}OOQO'#H^'#H^O&=yQ`O1G6iO9uQ!0LrO<<GqOOQ[<<Gq<<GqO@zQ`O<<GqO&>RQ`O7+,WO&>WQ`O7+,XO%[QlO7+,WO%[QlO7+,XOOQ[7+)V7+)VO&>]Q`O7+)VO&>bQlO7+)VO&>iQ`O7+)VOOQ[<<Ly<<LyOOQ[<<L{<<L{OOQ[-E=Q-E=QOOQ[1G3z1G3zO&>nQ`O,5>aOOQ[,5>c,5>cO&>sQ`O1G4QO9eQ`O7+&fO!)[QlO7+&fOOQO7+%_7+%_O&>xQ?MtO1G6ZO?YQ`O7+%_OOQ!0Lf<<Ia<<IaOOQ!0Lf<<Iz<<IzO?YQ`O<<IzOOQO<<Is<<IsO$AlQ!0MxO<<IsO%[QlO<<IsOOQO<<Id<<IdO!ByQ!0LrO<<IdO&?SQ!0LrO<<IsO&?_Q!0MxO<= ^O&?oQ`O<= ]OOQO7+*_7+*_O9eQ`O7+*_OOQ[ANAkANAkO&?wQ!fOANAkO!&zQMhOANAkO#(ZQ`OANAkO4UQ!fOANAkO&@OQ`OANAkO%[QlOANAkO&@WQ!0MzO7+'zO&BiQ!0MzO,5?aO&DtQ!0MzO,5?cO&GPQ!0MzO7+'|O&IbQ!fO1G4lO&IlQ?MtO7+&aO&KpQ?MvO,5=XO&MwQ?MvO,5=ZO&NXQ?MvO,5=XO&NiQ?MvO,5=ZO&NyQ?MvO,59uO'#PQ?MvO,5<kO'%SQ?MvO,5<mO''hQ?MvO,5<{O')^Q?MtO7+'kO')kQ?MtO7+'mO')xQ`O,5<]OOQO7+'`7+'`OOQ!0Lh7+*d7+*dO')}QMjO<<K}OOQO1G4w1G4wO'*UQ`O1G4wO'*aQ`O1G4wO'*oQ`O7++|O'*oQ`O7++|O!&zQMhO1G4yO'*wQ!dO1G4yO'+RQ`O7++}O'+ZQ`O7+(VO'+fQ!dO7+(VOOQ!0Lb7+(T7+(TOOQ!0Lb7+(U7+(UO!CUQpO7+(TOCwQ`O7+(TO'+pQ`O7+(VO!&zQMhO7+(VO$+YQ`O7+(UO'+uQ`O7+(VOCwQ`O7+(UO'+}QMjO<<NwO!,TQMhO<<NwOOQ!0Lh7+$}7+$}O',XQ!dO,5?fOOQO-E<x-E<xO',cQ!0MvO7+(YO!&zQMhO7+(YOOQ[AN=gAN=gO9kQ`O1G5WOOQO1G5W1G5WO',sQ`O1G5WO',xQ`O7+,VO',xQ`O7+,VO9uQ!0LrOANBWO@zQ`OANBWOOQ[ANBWANBWO'-QQ`OANBWOOQ[ANAsANAsOOQ[ANAtANAtO'-VQ`O,5?hOOQO-E<z-E<zO'-bQ?MtO1G6hOOQO,5?j,5?jOOQO-E<|-E<|OOQ[1G3a1G3aO'-lQ`O,5=POOQ[<<Lf<<LfO!&zQMhO<<LfO&=UQ`O<<LfO'-qQ`O<<LfO%[QlO<<LfOOQ[<<Lh<<LhO9uQ!0LrO<<LhO$%dQ`O<<LhO9`Q`O<<LhO'-yQpO1G5VO'.UQ`O7+,TOOQ[AN=]AN=]O9uQ!0LrOAN=]OOQ[<= r<= rOOQ[<= s<= sO'.^Q`O<= rO'.cQ`O<= sOOQ[<<Lq<<LqO'.hQ`O<<LqO'.mQlO<<LqOOQ[1G3{1G3{O?YQ`O7+)lO'.tQ`O<<JQO'/PQ?MtO<<JQOOQO<<Hy<<HyOOQ!0LfAN?fAN?fOOQOAN?_AN?_O$AlQ!0MxOAN?_OOQOAN?OAN?OO%[QlOAN?_OOQO<<My<<MyOOQ[G27VG27VO!&zQMhOG27VO#(ZQ`OG27VO'/ZQ!fOG27VO4UQ!fOG27VO'/bQ`OG27VO'/jQ?MtO<<JfO'/wQ?MvO1G2`O'1mQ?MvO,5?aO'3pQ?MvO,5?cO'5sQ?MvO1G2sO'7vQ?MvO1G2uO'9yQ?MtO<<KXO':WQ?MtO<<I{OOQO1G1w1G1wO!,TQMhOANAiOOQO7+*c7+*cO':eQ`O7+*cO':pQ`O<= hO':xQ!dO7+*eOOQ!0Lb<<Kq<<KqO$+YQ`O<<KqOCwQ`O<<KqO';SQ`O<<KqO!&zQMhO<<KqOOQ!0Lb<<Ko<<KoO!CUQpO<<KoO';_Q!dO<<KqOOQ!0Lb<<Kp<<KpO';iQ`O<<KqO!&zQMhO<<KqO$+YQ`O<<KpO';nQMjOANDcO';xQ!0MvO<<KtOOQO7+*r7+*rO9kQ`O7+*rO'<YQ`O<= qOOQ[G27rG27rO9uQ!0LrOG27rO@zQ`OG27rO!)[QlO1G5SO'<bQ`O7+,SO'<jQ`O1G2kO&=UQ`OANBQOOQ[ANBQANBQO!&zQMhOANBQO'<oQ`OANBQOOQ[ANBSANBSO9uQ!0LrOANBSO$%dQ`OANBSOOQO'#H_'#H_OOQO7+*q7+*qOOQ[G22wG22wOOQ[ANE^ANE^OOQ[ANE_ANE_OOQ[ANB]ANB]O'<wQ`OANB]OOQ[<<MW<<MWO!)[QlOAN?lOOQOG24yG24yO$AlQ!0MxOG24yO#(ZQ`OLD,qOOQ[LD,qLD,qO!&zQMhOLD,qO'<|Q!fOLD,qO'=TQ?MvO7+'zO'>yQ?MvO,5?aO'@|Q?MvO,5?cO'CPQ?MvO7+'|O'DuQMjOG27TOOQO<<M}<<M}OOQ!0LbANA]ANA]O$+YQ`OANA]OCwQ`OANA]O'EVQ!dOANA]OOQ!0LbANAZANAZO'E^Q`OANA]O!&zQMhOANA]O'EiQ!dOANA]OOQ!0LbANA[ANA[OOQO<<N^<<N^OOQ[LD-^LD-^O9uQ!0LrOLD-^O'EsQ?MtO7+*nOOQO'#Gf'#GfOOQ[G27lG27lO&=UQ`OG27lO!&zQMhOG27lOOQ[G27nG27nO9uQ!0LrOG27nOOQ[G27wG27wO'E}Q?MtOG25WOOQOLD*eLD*eOOQ[!$(!]!$(!]O#(ZQ`O!$(!]O!&zQMhO!$(!]O'FXQ!0MzOG27TOOQ!0LbG26wG26wO$+YQ`OG26wO'HjQ`OG26wOCwQ`OG26wO'HuQ!dOG26wO!&zQMhOG26wOOQ[!$(!x!$(!xOOQ[LD-WLD-WO&=UQ`OLD-WOOQ[LD-YLD-YOOQ[!)9Ew!)9EwO#(ZQ`O!)9EwOOQ!0LbLD,cLD,cO$+YQ`OLD,cOCwQ`OLD,cO'H|Q`OLD,cO'IXQ!dOLD,cOOQ[!$(!r!$(!rOOQ[!.K;c!.K;cO'I`Q?MvOG27TOOQ!0Lb!$( }!$( }O$+YQ`O!$( }OCwQ`O!$( }O'KUQ`O!$( }OOQ!0Lb!)9Ei!)9EiO$+YQ`O!)9EiOCwQ`O!)9EiOOQ!0Lb!.K;T!.K;TO$+YQ`O!.K;TOOQ!0Lb!4/0o!4/0oO!)[QlO'#DzO1PQ`O'#EXO'KaQ!fO'#JrO'KhQ!L^O'#DvO'KoQlO'#EOO'KvQ!fO'#CiO'N^Q!fO'#CiO!)[QlO'#EQO'NnQlO,5;ZO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO,5;eO!)[QlO'#IpO(!qQ`O,5<iO!)[QlO,5;eO(!yQMhO,5;eO($dQMhO,5;eO!)[QlO,5;wO!&zQMhO'#GmO(!yQMhO'#GmO!&zQMhO'#GoO(!yQMhO'#GoO1SQ`O'#DZO1SQ`O'#DZO!&zQMhO'#GPO(!yQMhO'#GPO!&zQMhO'#GRO(!yQMhO'#GRO!&zQMhO'#GaO(!yQMhO'#GaO!)[QlO,5:jO($kQpO'#D_O($uQpO'#JvO!)[QlO,5@oO'NnQlO1G0uO(%PQ?MtO'#CiO!)[QlO1G2PO!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO(%ZQ!dO'#CrO!&zQMhO,5<tO(!yQMhO,5<tO'NnQlO1G2RO!)[QlO7+&zO!&zQMhO1G2`O(!yQMhO1G2`O!&zQMhO'#IuO(!yQMhO'#IuO!&zQMhO'#IwO(!yQMhO'#IwO!&zQMhO1G2bO(!yQMhO1G2bO'NnQlO7+'mO'NnQlO7+&aO!&zQMhOANAiO(!yQMhOANAiO(%nQ`O'#EoO(%sQ`O'#EoO(%{Q`O'#F]O(&QQ`O'#EyO(&VQ`O'#KTO(&bQ`O'#KRO(&mQ`O,5;ZO(&rQMjO,5<eO(&yQ`O'#GYO('OQ`O'#GYO('TQ`O,5<eO(']Q`O,5<gO('eQ`O,5;ZO('mQ?MtO1G1`O('tQ`O,5<tO('yQ`O,5<tO((OQ`O,5<vO((TQ`O,5<vO((YQ`O1G2RO((_Q`O1G0uO((dQMjO<<K}O((kQMjO<<K}O((rQMhO'#F|O9`Q`O'#F{OAuQ`O'#EnO!)[QlO,5;tO!3oQ`O'#GYO!3oQ`O'#GYO!3oQ`O'#G[O!3oQ`O'#G[O!,TQMhO7+(cO!,TQMhO7+(cO%.zQ!dO1G2wO%.zQ!dO1G2wO!&zQMhO,5=]O!&zQMhO,5=]",
        stateData: "()x~O'|OS'}OSTOS(ORQ~OPYOQYOSfOY!VOaqOdzOeyOl!POpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!uwO!xxO!|]O$W|O$niO%h}O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO&W!WO&^!XO&`!YO&b!ZO&d![O&g!]O&m!^O&s!_O&u!`O&w!aO&y!bO&{!cO(TSO(VTO(YUO(aVO(o[O~OWtO~P`OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa!wOs!nO!S!oO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!xO#W!pO#X!pO#[!zO#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O(O!{O~OP]XR]X[]Xa]Xj]Xr]X!Q]X!S]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X'z]X(a]X(r]X(y]X(z]X~O!g%RX~P(qO_!}O(V#PO(W!}O(X#PO~O_#QO(X#PO(Y#PO(Z#QO~Ox#SO!U#TO(b#TO(c#VO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T<ZO(VTO(YUO(aVO(o[O~O![#ZO!]#WO!Y(hP!Y(vP~P+}O!^#cO~P`OPYOQYOSfOd!jOe!iOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(VTO(YUO(aVO(o[O~Op#mO![#iO!|]O#i#lO#j#iO(T<[O!k(sP~P.iO!l#oO(T#nO~O!x#sO!|]O%h#tO~O#k#uO~O!g#vO#k#uO~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!]$_O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa(fX'z(fX'w(fX!k(fX!Y(fX!_(fX%i(fX!g(fX~P1qO#S$dO#`$eO$Q$eOP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX!_(gX%i(gX~Oa(gX'z(gX'w(gX!Y(gX!k(gXv(gX!g(gX~P4UO#`$eO~O$]$hO$_$gO$f$mO~OSfO!_$nO$i$oO$k$qO~Oh%VOj%dOk%dOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T$sO(VTO(YUO(a$uO(y$}O(z%POg(^P~Ol%[O~P7eO!l%eO~O!S%hO!_%iO(T%gO~O!g%mO~Oa%nO'z%nO~O!Q%rO~P%[O(U!lO~P%[O%n%vO~P%[Oh%VO!l%eO(T%gO(U!lO~Oe%}O!l%eO(T%gO~Oj$RO~O!_&PO(T%gO(U!lO(VTO(YUO`)WP~O!Q&SO!l&RO%j&VO&T&WO~P;SO!x#sO~O%s&YO!S)SX!_)SX(T)SX~O(T&ZO~Ol!PO!u&`O%j!QO%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO~Od&eOe&dO!x&bO%h&cO%{&aO~P<bOd&hOeyOl!PO!_&gO!u&`O!xxO!|]O%h}O%l!OO%m!OO%n!OO%q!RO%s!SO%v!TO%w!TO%y!UO~Ob&kO#`&nO%j&iO(U!lO~P=gO!l&oO!u&sO~O!l#oO~O!_XO~Oa%nO'x&{O'z%nO~Oa%nO'x'OO'z%nO~Oa%nO'x'QO'z%nO~O'w]X!Y]Xv]X!k]X&[]X!_]X%i]X!g]X~P(qO!b'_O!c'WO!d'WO(U!lO(VTO(YUO~Os'UO!S'TO!['XO(e'SO!^(iP!^(xP~P@nOn'bO!_'`O(T%gO~Oe'gO!l%eO(T%gO~O!Q&SO!l&RO~Os!nO!S!oO!|<VO#T!pO#U!pO#W!pO#X!pO(U!lO(VTO(YUO(e!mO(o!sO~O!b'mO!c'lO!d'lO#V!pO#['nO#]'nO~PBYOa%nOh%VO!g#vO!l%eO'z%nO(r'pO~O!p'tO#`'rO~PChOs!nO!S!oO(VTO(YUO(e!mO(o!sO~O!_XOs(mX!S(mX!b(mX!c(mX!d(mX!|(mX#T(mX#U(mX#V(mX#W(mX#X(mX#[(mX#](mX(U(mX(V(mX(Y(mX(e(mX(o(mX~O!c'lO!d'lO(U!lO~PDWO(P'xO(Q'xO(R'zO~O_!}O(V'|O(W!}O(X'|O~O_#QO(X'|O(Y'|O(Z#QO~Ov(OO~P%[Ox#SO!U#TO(b#TO(c(RO~O![(TO!Y'WX!Y'^X!]'WX!]'^X~P+}O!](VO!Y(hX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!](VO!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~O!Y(hX~PHRO!Y([O~O!Y(uX!](uX!g(uX!k(uX(r(uX~O#`(uX#k#dX!^(uX~PJUO#`(]O!Y(wX!](wX~O!](^O!Y(vX~O!Y(aO~O#`$eO~PJUO!^(bO~P`OR#zO!Q#yO!S#{O!l#xO(aVOP!na[!naj!nar!na!]!na!p!na#R!na#n!na#o!na#p!na#q!na#r!na#s!na#t!na#u!na#v!na#x!na#z!na#{!na(r!na(y!na(z!na~Oa!na'z!na'w!na!Y!na!k!nav!na!_!na%i!na!g!na~PKlO!k(cO~O!g#vO#`(dO(r'pO!](tXa(tX'z(tX~O!k(tX~PNXO!S%hO!_%iO!|]O#i(iO#j(hO(T%gO~O!](jO!k(sX~O!k(lO~O!S%hO!_%iO#j(hO(T%gO~OP(gXR(gX[(gXj(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~O!g#vO!k(gX~P! uOR(nO!Q(mO!l#xO#S$dO!|!{a!S!{a~O!x!{a%h!{a!_!{a#i!{a#j!{a(T!{a~P!#vO!x(rO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_XO!iuO!lZO!oYO!pYO!qYO!svO!u!gO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~O#k(xO~O![(zO!k(kP~P%[O(e(|O(o[O~O!S)OO!l#xO(e(|O(o[O~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]$_Oa$qa'z$qa'w$qa!k$qa!Y$qa!_$qa%i$qa!g$qa~Ol)dO~P!&zOh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O%]O!S${O!_$|O!i%bO!l$xO#j%cO$W%`O$t%^O$v%_O$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Og(pP~P!,TO!Q)iO!g)hO!_$^X$Z$^X$]$^X$_$^X$f$^X~O!g)hO!_({X$Z({X$]({X$_({X$f({X~O!Q)iO~P!.^O!Q)iO!_({X$Z({X$]({X$_({X$f({X~O!_)kO$Z)oO$])jO$_)jO$f)pO~O![)sO~P!)[O$]$hO$_$gO$f)wO~On$zX!Q$zX#S$zX'y$zX(y$zX(z$zX~OgmXg$zXnmX!]mX#`mX~P!0SOx)yO(b)zO(c)|O~On*VO!Q*OO'y*PO(y$}O(z%PO~Og)}O~P!1WOg*WO~Oh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S*YO!_*ZO!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op*`O![*^O(T*XO!k)OP~P!1uO#k*aO~O!l*bO~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(T*dO(VTO(YUO(a$uO(y$}O(z%PO~O![*gO!Y)PP~P!3tOr*sOs!nO!S*iO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO(e!mO~O!^*pO~P!5iO#S$dOn(`X!Q(`X'y(`X(y(`X(z(`X!](`X#`(`X~Og(`X$O(`X~P!6kOn*xO#`*wOg(_X!](_X~O!]*yOg(^X~Oj%dOk%dOl%dO(T&ZOg(^P~Os*|O~Og)}O(T&ZO~O!l+SO~O(T(vO~Op+WO!S%hO![#iO!_%iO!|]O#i#lO#j#iO(T%gO!k(sP~O!g#vO#k+XO~O!S%hO![+ZO!](^O!_%iO(T%gO!Y(vP~Os'[O!S+]O![+[O(VTO(YUO(e(|O~O!^(xP~P!9|O!]+^Oa)TX'z)TX~OP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO#z$WO#{$XO(aVO(r$YO(y#|O(z#}O~Oa!ja!]!ja'z!ja'w!ja!Y!ja!k!jav!ja!_!ja%i!ja!g!ja~P!:tOR#zO!Q#yO!S#{O!l#xO(aVOP!ra[!raj!rar!ra!]!ra!p!ra#R!ra#n!ra#o!ra#p!ra#q!ra#r!ra#s!ra#t!ra#u!ra#v!ra#x!ra#z!ra#{!ra(r!ra(y!ra(z!ra~Oa!ra'z!ra'w!ra!Y!ra!k!rav!ra!_!ra%i!ra!g!ra~P!=[OR#zO!Q#yO!S#{O!l#xO(aVOP!ta[!taj!tar!ta!]!ta!p!ta#R!ta#n!ta#o!ta#p!ta#q!ta#r!ta#s!ta#t!ta#u!ta#v!ta#x!ta#z!ta#{!ta(r!ta(y!ta(z!ta~Oa!ta'z!ta'w!ta!Y!ta!k!tav!ta!_!ta%i!ta!g!ta~P!?rOh%VOn+gO!_'`O%i+fO~O!g+iOa(]X!_(]X'z(]X!](]X~Oa%nO!_XO'z%nO~Oh%VO!l%eO~Oh%VO!l%eO(T%gO~O!g#vO#k(xO~Ob+tO%j+uO(T+qO(VTO(YUO!^)XP~O!]+vO`)WX~O[+zO~O`+{O~O!_&PO(T%gO(U!lO`)WP~O%j,OO~P;SOh%VO#`,SO~Oh%VOn,VO!_$|O~O!_,XO~O!Q,ZO!_XO~O%n%vO~O!x,`O~Oe,eO~Ob,fO(T#nO(VTO(YUO!^)VP~Oe%}O~O%j!QO(T&ZO~P=gO[,kO`,jO~OPYOQYOSfOdzOeyOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!iuO!lZO!oYO!pYO!qYO!svO!xxO!|]O$niO%h}O(VTO(YUO(aVO(o[O~O!_!eO!u!gO$W!kO(T!dO~P!FyO`,jOa%nO'z%nO~OPYOQYOSfOd!jOe!iOpkOrYOskOtkOzkO|YO!OYO!SWO!WkO!XkO!_!eO!iuO!lZO!oYO!pYO!qYO!svO!x!hO$W!kO$niO(T!dO(VTO(YUO(aVO(o[O~Oa,pOl!OO!uwO%l!OO%m!OO%n!OO~P!IcO!l&oO~O&^,vO~O!_,xO~O&o,zO&q,{OP&laQ&laS&laY&laa&lad&lae&lal&lap&lar&las&lat&laz&la|&la!O&la!S&la!W&la!X&la!_&la!i&la!l&la!o&la!p&la!q&la!s&la!u&la!x&la!|&la$W&la$n&la%h&la%j&la%l&la%m&la%n&la%q&la%s&la%v&la%w&la%y&la&W&la&^&la&`&la&b&la&d&la&g&la&m&la&s&la&u&la&w&la&y&la&{&la'w&la(T&la(V&la(Y&la(a&la(o&la!^&la&e&lab&la&j&la~O(T-QO~Oh!eX!]!RX!^!RX!g!RX!g!eX!l!eX#`!RX~O!]!eX!^!eX~P#!iO!g-VO#`-UOh(jX!]#hX!^#hX!g(jX!l(jX~O!](jX!^(jX~P##[Oh%VO!g-XO!l%eO!]!aX!^!aX~Os!nO!S!oO(VTO(YUO(e!mO~OP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_!eO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(VTO(YUO(aVO(o[O~O(T=QO~P#$qO!]-]O!^(iX~O!^-_O~O!g-VO#`-UO!]#hX!^#hX~O!]-`O!^(xX~O!^-bO~O!c-cO!d-cO(U!lO~P#$`O!^-fO~P'_On-iO!_'`O~O!Y-nO~Os!{a!b!{a!c!{a!d!{a#T!{a#U!{a#V!{a#W!{a#X!{a#[!{a#]!{a(U!{a(V!{a(Y!{a(e!{a(o!{a~P!#vO!p-sO#`-qO~PChO!c-uO!d-uO(U!lO~PDWOa%nO#`-qO'z%nO~Oa%nO!g#vO#`-qO'z%nO~Oa%nO!g#vO!p-sO#`-qO'z%nO(r'pO~O(P'xO(Q'xO(R-zO~Ov-{O~O!Y'Wa!]'Wa~P!:tO![.PO!Y'WX!]'WX~P%[O!](VO!Y(ha~O!Y(ha~PHRO!](^O!Y(va~O!S%hO![.TO!_%iO(T%gO!Y'^X!]'^X~O#`.VO!](ta!k(taa(ta'z(ta~O!g#vO~P#,wO!](jO!k(sa~O!S%hO!_%iO#j.ZO(T%gO~Op.`O!S%hO![.]O!_%iO!|]O#i._O#j.]O(T%gO!]'aX!k'aX~OR.dO!l#xO~Oh%VOn.gO!_'`O%i.fO~Oa#ci!]#ci'z#ci'w#ci!Y#ci!k#civ#ci!_#ci%i#ci!g#ci~P!:tOn>]O!Q*OO'y*PO(y$}O(z%PO~O#k#_aa#_a#`#_a'z#_a!]#_a!k#_a!_#_a!Y#_a~P#/sO#k(`XP(`XR(`X[(`Xa(`Xj(`Xr(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X'z(`X(a(`X(r(`X!k(`X!Y(`X'w(`Xv(`X!_(`X%i(`X!g(`X~P!6kO!].tO!k(kX~P!:tO!k.wO~O!Y.yO~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mia#mij#mir#mi!]#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#n#mi~P#3cO#n$OO~P#3cOP$[OR#zOr$aO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO[#mia#mij#mi!]#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#r#mi~P#6QO#r$QO~P#6QOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO(aVOa#mi!]#mi#x#mi#z#mi#{#mi'z#mi(r#mi(y#mi(z#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#v#mi~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO(aVO(z#}Oa#mi!]#mi#z#mi#{#mi'z#mi(r#mi(y#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#x$UO~P#;VO#x#mi~P#;VO#v$SO~P#8oOP$[OR#zO[$cOj$ROr$aO!Q#yO!S#{O!l#xO!p$[O#R$RO#n$OO#o$PO#p$PO#q$PO#r$QO#s$RO#t$RO#u$bO#v$SO#x$UO(aVO(y#|O(z#}Oa#mi!]#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~O#z#mi~P#={O#z$WO~P#={OP]XR]X[]Xj]Xr]X!Q]X!S]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X!]]X!^]X~O$O]X~P#@jOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO#z<gO#{<hO(aVO(r$YO(y#|O(z#}O~O$O.{O~P#BwO#S$dO#`<nO$Q<nO$O(gX!^(gX~P! uOa'da!]'da'z'da'w'da!k'da!Y'dav'da!_'da%i'da!g'da~P!:tO[#mia#mij#mir#mi!]#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi'z#mi(r#mi'w#mi!Y#mi!k#miv#mi!_#mi%i#mi!g#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n$OO#o$PO#p$PO#q$PO(aVO(y#mi(z#mi~P#EyOn>]O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P#EyO!]/POg(pX~P!1WOg/RO~Oa$Pi!]$Pi'z$Pi'w$Pi!Y$Pi!k$Piv$Pi!_$Pi%i$Pi!g$Pi~P!:tO$]/SO$_/SO~O$]/TO$_/TO~O!g)hO#`/UO!_$cX$Z$cX$]$cX$_$cX$f$cX~O![/VO~O!_)kO$Z/XO$])jO$_)jO$f/YO~O!]<iO!^(fX~P#BwO!^/ZO~O!g)hO$f({X~O$f/]O~Ov/^O~P!&zOx)yO(b)zO(c/aO~O!S/dO~O(y$}On%aa!Q%aa'y%aa(z%aa!]%aa#`%aa~Og%aa$O%aa~P#L{O(z%POn%ca!Q%ca'y%ca(y%ca!]%ca#`%ca~Og%ca$O%ca~P#MnO!]fX!gfX!kfX!k$zX(rfX~P!0SOp%WO![/mO!](^O(T/lO!Y(vP!Y)PP~P!1uOr*sO!b*qO!c*kO!d*kO!l*bO#[*rO%`*mO(U!lO(VTO(YUO~Os<}O!S/nO![+[O!^*pO(e<|O!^(xP~P$ [O!k/oO~P#/sO!]/pO!g#vO(r'pO!k)OX~O!k/uO~OnoX!QoX'yoX(yoX(zoX~O!g#vO!koX~P$#OOp/wO!S%hO![*^O!_%iO(T%gO!k)OP~O#k/xO~O!Y$zX!]$zX!g%RX~P!0SO!]/yO!Y)PX~P#/sO!g/{O~O!Y/}O~OpkO(T0OO~P.iOh%VOr0TO!g#vO!l%eO(r'pO~O!g+iO~Oa%nO!]0XO'z%nO~O!^0ZO~P!5iO!c0[O!d0[O(U!lO~P#$`Os!nO!S0]O(VTO(YUO(e!mO~O#[0_O~Og%aa!]%aa#`%aa$O%aa~P!1WOg%ca!]%ca#`%ca$O%ca~P!1WOj%dOk%dOl%dO(T&ZOg'mX!]'mX~O!]*yOg(^a~Og0hO~On0jO#`0iOg(_a!](_a~OR0kO!Q0kO!S0lO#S$dOn}a'y}a(y}a(z}a!]}a#`}a~Og}a$O}a~P$(cO!Q*OO'y*POn$sa(y$sa(z$sa!]$sa#`$sa~Og$sa$O$sa~P$)_O!Q*OO'y*POn$ua(y$ua(z$ua!]$ua#`$ua~Og$ua$O$ua~P$*QO#k0oO~Og%Ta!]%Ta#`%Ta$O%Ta~P!1WO!g#vO~O#k0rO~O!]+^Oa)Ta'z)Ta~OR#zO!Q#yO!S#{O!l#xO(aVOP!ri[!rij!rir!ri!]!ri!p!ri#R!ri#n!ri#o!ri#p!ri#q!ri#r!ri#s!ri#t!ri#u!ri#v!ri#x!ri#z!ri#{!ri(r!ri(y!ri(z!ri~Oa!ri'z!ri'w!ri!Y!ri!k!riv!ri!_!ri%i!ri!g!ri~P$+oOh%VOr%XOs$tOt$tOz%YO|%ZO!O<sO!S${O!_$|O!i>VO!l$xO#j<yO$W%`O$t<uO$v<wO$y%aO(VTO(YUO(a$uO(y$}O(z%PO~Op0{O%]0|O(T0zO~P$.VO!g+iOa(]a!_(]a'z(]a!](]a~O#k1SO~O[]X!]fX!^fX~O!]1TO!^)XX~O!^1VO~O[1WO~Ob1YO(T+qO(VTO(YUO~O!_&PO(T%gO`'uX!]'uX~O!]+vO`)Wa~O!k1]O~P!:tO[1`O~O`1aO~O#`1fO~On1iO!_$|O~O(e(|O!^)UP~Oh%VOn1rO!_1oO%i1qO~O[1|O!]1zO!^)VX~O!^1}O~O`2POa%nO'z%nO~O(T#nO(VTO(YUO~O#S$dO#`$eO$Q$eOP(gXR(gX[(gXr(gX!Q(gX!S(gX!](gX!l(gX!p(gX#R(gX#n(gX#o(gX#p(gX#q(gX#r(gX#s(gX#t(gX#u(gX#v(gX#x(gX#z(gX#{(gX(a(gX(r(gX(y(gX(z(gX~Oj2SO&[2TOa(gX~P$3pOj2SO#`$eO&[2TO~Oa2VO~P%[Oa2XO~O&e2[OP&ciQ&ciS&ciY&cia&cid&cie&cil&cip&cir&cis&cit&ciz&ci|&ci!O&ci!S&ci!W&ci!X&ci!_&ci!i&ci!l&ci!o&ci!p&ci!q&ci!s&ci!u&ci!x&ci!|&ci$W&ci$n&ci%h&ci%j&ci%l&ci%m&ci%n&ci%q&ci%s&ci%v&ci%w&ci%y&ci&W&ci&^&ci&`&ci&b&ci&d&ci&g&ci&m&ci&s&ci&u&ci&w&ci&y&ci&{&ci'w&ci(T&ci(V&ci(Y&ci(a&ci(o&ci!^&cib&ci&j&ci~Ob2bO!^2`O&j2aO~P`O!_XO!l2dO~O&q,{OP&liQ&liS&liY&lia&lid&lie&lil&lip&lir&lis&lit&liz&li|&li!O&li!S&li!W&li!X&li!_&li!i&li!l&li!o&li!p&li!q&li!s&li!u&li!x&li!|&li$W&li$n&li%h&li%j&li%l&li%m&li%n&li%q&li%s&li%v&li%w&li%y&li&W&li&^&li&`&li&b&li&d&li&g&li&m&li&s&li&u&li&w&li&y&li&{&li'w&li(T&li(V&li(Y&li(a&li(o&li!^&li&e&lib&li&j&li~O!Y2jO~O!]!aa!^!aa~P#BwOs!nO!S!oO![2pO(e!mO!]'XX!^'XX~P@nO!]-]O!^(ia~O!]'_X!^'_X~P!9|O!]-`O!^(xa~O!^2wO~P'_Oa%nO#`3QO'z%nO~Oa%nO!g#vO#`3QO'z%nO~Oa%nO!g#vO!p3UO#`3QO'z%nO(r'pO~Oa%nO'z%nO~P!:tO!]$_Ov$qa~O!Y'Wi!]'Wi~P!:tO!](VO!Y(hi~O!](^O!Y(vi~O!Y(wi!](wi~P!:tO!](ti!k(tia(ti'z(ti~P!:tO#`3WO!](ti!k(tia(ti'z(ti~O!](jO!k(si~O!S%hO!_%iO!|]O#i3]O#j3[O(T%gO~O!S%hO!_%iO#j3[O(T%gO~On3dO!_'`O%i3cO~Oh%VOn3dO!_'`O%i3cO~O#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aav%aa!_%aa%i%aa!g%aa~P#L{O#k%caP%caR%ca[%caa%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%cav%ca!_%ca%i%ca!g%ca~P#MnO#k%aaP%aaR%aa[%aaa%aaj%aar%aa!S%aa!]%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa'z%aa(a%aa(r%aa!k%aa!Y%aa'w%aa#`%aav%aa!_%aa%i%aa!g%aa~P#/sO#k%caP%caR%ca[%caa%caj%car%ca!S%ca!]%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca'z%ca(a%ca(r%ca!k%ca!Y%ca'w%ca#`%cav%ca!_%ca%i%ca!g%ca~P#/sO#k}aP}a[}aa}aj}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a'z}a(a}a(r}a!k}a!Y}a'w}av}a!_}a%i}a!g}a~P$(cO#k$saP$saR$sa[$saa$saj$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa'z$sa(a$sa(r$sa!k$sa!Y$sa'w$sav$sa!_$sa%i$sa!g$sa~P$)_O#k$uaP$uaR$ua[$uaa$uaj$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua'z$ua(a$ua(r$ua!k$ua!Y$ua'w$uav$ua!_$ua%i$ua!g$ua~P$*QO#k%TaP%TaR%Ta[%Taa%Taj%Tar%Ta!S%Ta!]%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta'z%Ta(a%Ta(r%Ta!k%Ta!Y%Ta'w%Ta#`%Tav%Ta!_%Ta%i%Ta!g%Ta~P#/sOa#cq!]#cq'z#cq'w#cq!Y#cq!k#cqv#cq!_#cq%i#cq!g#cq~P!:tO![3lO!]'YX!k'YX~P%[O!].tO!k(ka~O!].tO!k(ka~P!:tO!Y3oO~O$O!na!^!na~PKlO$O!ja!]!ja!^!ja~P#BwO$O!ra!^!ra~P!=[O$O!ta!^!ta~P!?rOg']X!]']X~P!,TO!]/POg(pa~OSfO!_4TO$d4UO~O!^4YO~Ov4ZO~P#/sOa$mq!]$mq'z$mq'w$mq!Y$mq!k$mqv$mq!_$mq%i$mq!g$mq~P!:tO!Y4]O~P!&zO!S4^O~O!Q*OO'y*PO(z%POn'ia(y'ia!]'ia#`'ia~Og'ia$O'ia~P%-fO!Q*OO'y*POn'ka(y'ka(z'ka!]'ka#`'ka~Og'ka$O'ka~P%.XO(r$YO~P#/sO!YfX!Y$zX!]fX!]$zX!g%RX#`fX~P!0SOp%WO(T=WO~P!1uOp4bO!S%hO![4aO!_%iO(T%gO!]'eX!k'eX~O!]/pO!k)Oa~O!]/pO!g#vO!k)Oa~O!]/pO!g#vO(r'pO!k)Oa~Og$|i!]$|i#`$|i$O$|i~P!1WO![4jO!Y'gX!]'gX~P!3tO!]/yO!Y)Pa~O!]/yO!Y)Pa~P#/sOP]XR]X[]Xj]Xr]X!Q]X!S]X!Y]X!]]X!l]X!p]X#R]X#S]X#`]X#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~Oj%YX!g%YX~P%2OOj4oO!g#vO~Oh%VO!g#vO!l%eO~Oh%VOr4tO!l%eO(r'pO~Or4yO!g#vO(r'pO~Os!nO!S4zO(VTO(YUO(e!mO~O(y$}On%ai!Q%ai'y%ai(z%ai!]%ai#`%ai~Og%ai$O%ai~P%5oO(z%POn%ci!Q%ci'y%ci(y%ci!]%ci#`%ci~Og%ci$O%ci~P%6bOg(_i!](_i~P!1WO#`5QOg(_i!](_i~P!1WO!k5VO~Oa$oq!]$oq'z$oq'w$oq!Y$oq!k$oqv$oq!_$oq%i$oq!g$oq~P!:tO!Y5ZO~O!]5[O!_)QX~P#/sOa$zX!_$zX%^]X'z$zX!]$zX~P!0SO%^5_OaoX!_oX'zoX!]oX~P$#OOp5`O(T#nO~O%^5_O~Ob5fO%j5gO(T+qO(VTO(YUO!]'tX!^'tX~O!]1TO!^)Xa~O[5kO~O`5lO~O[5pO~Oa%nO'z%nO~P#/sO!]5uO#`5wO!^)UX~O!^5xO~Or6OOs!nO!S*iO!b!yO!c!vO!d!vO!|<VO#T!pO#U!pO#V!pO#W!pO#X!pO#[5}O#]!zO(U!lO(VTO(YUO(e!mO(o!sO~O!^5|O~P%;eOn6TO!_1oO%i6SO~Oh%VOn6TO!_1oO%i6SO~Ob6[O(T#nO(VTO(YUO!]'sX!^'sX~O!]1zO!^)Va~O(VTO(YUO(e6^O~O`6bO~Oj6eO&[6fO~PNXO!k6gO~P%[Oa6iO~Oa6iO~P%[Ob2bO!^6nO&j2aO~P`O!g6pO~O!g6rOh(ji!](ji!^(ji!g(ji!l(jir(ji(r(ji~O!]#hi!^#hi~P#BwO#`6sO!]#hi!^#hi~O!]!ai!^!ai~P#BwOa%nO#`6|O'z%nO~Oa%nO!g#vO#`6|O'z%nO~O!](tq!k(tqa(tq'z(tq~P!:tO!](jO!k(sq~O!S%hO!_%iO#j7TO(T%gO~O!_'`O%i7WO~On7[O!_'`O%i7WO~O#k'iaP'iaR'ia['iaa'iaj'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia'z'ia(a'ia(r'ia!k'ia!Y'ia'w'iav'ia!_'ia%i'ia!g'ia~P%-fO#k'kaP'kaR'ka['kaa'kaj'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka'z'ka(a'ka(r'ka!k'ka!Y'ka'w'kav'ka!_'ka%i'ka!g'ka~P%.XO#k$|iP$|iR$|i[$|ia$|ij$|ir$|i!S$|i!]$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i'z$|i(a$|i(r$|i!k$|i!Y$|i'w$|i#`$|iv$|i!_$|i%i$|i!g$|i~P#/sO#k%aiP%aiR%ai[%aia%aij%air%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai'z%ai(a%ai(r%ai!k%ai!Y%ai'w%aiv%ai!_%ai%i%ai!g%ai~P%5oO#k%ciP%ciR%ci[%cia%cij%cir%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci'z%ci(a%ci(r%ci!k%ci!Y%ci'w%civ%ci!_%ci%i%ci!g%ci~P%6bO!]'Ya!k'Ya~P!:tO!].tO!k(ki~O$O#ci!]#ci!^#ci~P#BwOP$[OR#zO!Q#yO!S#{O!l#xO!p$[O(aVO[#mij#mir#mi#R#mi#o#mi#p#mi#q#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#n#mi~P%NdO#n<_O~P%NdOP$[OR#zOr<kO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO[#mij#mi#R#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#r#mi~P&!lO#r<aO~P&!lOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO(aVO#x#mi#z#mi#{#mi$O#mi(r#mi(y#mi(z#mi!]#mi!^#mi~O#v#mi~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO(aVO(z#}O#z#mi#{#mi$O#mi(r#mi(y#mi!]#mi!^#mi~O#x<eO~P&&uO#x#mi~P&&uO#v<cO~P&$tOP$[OR#zO[<mOj<bOr<kO!Q#yO!S#{O!l#xO!p$[O#R<bO#n<_O#o<`O#p<`O#q<`O#r<aO#s<bO#t<bO#u<lO#v<cO#x<eO(aVO(y#|O(z#}O#{#mi$O#mi(r#mi!]#mi!^#mi~O#z#mi~P&)UO#z<gO~P&)UOa#|y!]#|y'z#|y'w#|y!Y#|y!k#|yv#|y!_#|y%i#|y!g#|y~P!:tO[#mij#mir#mi#R#mi#r#mi#s#mi#t#mi#u#mi#v#mi#x#mi#z#mi#{#mi$O#mi(r#mi!]#mi!^#mi~OP$[OR#zO!Q#yO!S#{O!l#xO!p$[O#n<_O#o<`O#p<`O#q<`O(aVO(y#mi(z#mi~P&,QOn>^O!Q*OO'y*PO(y$}O(z%POP#miR#mi!S#mi!l#mi!p#mi#n#mi#o#mi#p#mi#q#mi(a#mi~P&,QO#S$dOP(`XR(`X[(`Xj(`Xn(`Xr(`X!Q(`X!S(`X!l(`X!p(`X#R(`X#n(`X#o(`X#p(`X#q(`X#r(`X#s(`X#t(`X#u(`X#v(`X#x(`X#z(`X#{(`X$O(`X'y(`X(a(`X(r(`X(y(`X(z(`X!](`X!^(`X~O$O$Pi!]$Pi!^$Pi~P#BwO$O!ri!^!ri~P$+oOg']a!]']a~P!1WO!^7nO~O!]'da!^'da~P#BwO!Y7oO~P#/sO!g#vO(r'pO!]'ea!k'ea~O!]/pO!k)Oi~O!]/pO!g#vO!k)Oi~Og$|q!]$|q#`$|q$O$|q~P!1WO!Y'ga!]'ga~P#/sO!g7vO~O!]/yO!Y)Pi~P#/sO!]/yO!Y)Pi~O!Y7yO~Oh%VOr8OO!l%eO(r'pO~Oj8QO!g#vO~Or8TO!g#vO(r'pO~O!Q*OO'y*PO(z%POn'ja(y'ja!]'ja#`'ja~Og'ja$O'ja~P&5RO!Q*OO'y*POn'la(y'la(z'la!]'la#`'la~Og'la$O'la~P&5tOg(_q!](_q~P!1WO#`8VOg(_q!](_q~P!1WO!Y8WO~Og%Oq!]%Oq#`%Oq$O%Oq~P!1WOa$oy!]$oy'z$oy'w$oy!Y$oy!k$oyv$oy!_$oy%i$oy!g$oy~P!:tO!g6rO~O!]5[O!_)Qa~O!_'`OP$TaR$Ta[$Taj$Tar$Ta!Q$Ta!S$Ta!]$Ta!l$Ta!p$Ta#R$Ta#n$Ta#o$Ta#p$Ta#q$Ta#r$Ta#s$Ta#t$Ta#u$Ta#v$Ta#x$Ta#z$Ta#{$Ta(a$Ta(r$Ta(y$Ta(z$Ta~O%i7WO~P&8fO%^8[Oa%[i!_%[i'z%[i!]%[i~Oa#cy!]#cy'z#cy'w#cy!Y#cy!k#cyv#cy!_#cy%i#cy!g#cy~P!:tO[8^O~Ob8`O(T+qO(VTO(YUO~O!]1TO!^)Xi~O`8dO~O(e(|O!]'pX!^'pX~O!]5uO!^)Ua~O!^8nO~P%;eO(o!sO~P$&YO#[8oO~O!_1oO~O!_1oO%i8qO~On8tO!_1oO%i8qO~O[8yO!]'sa!^'sa~O!]1zO!^)Vi~O!k8}O~O!k9OO~O!k9RO~O!k9RO~P%[Oa9TO~O!g9UO~O!k9VO~O!](wi!^(wi~P#BwOa%nO#`9_O'z%nO~O!](ty!k(tya(ty'z(ty~P!:tO!](jO!k(sy~O%i9bO~P&8fO!_'`O%i9bO~O#k$|qP$|qR$|q[$|qa$|qj$|qr$|q!S$|q!]$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q'z$|q(a$|q(r$|q!k$|q!Y$|q'w$|q#`$|qv$|q!_$|q%i$|q!g$|q~P#/sO#k'jaP'jaR'ja['jaa'jaj'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja'z'ja(a'ja(r'ja!k'ja!Y'ja'w'jav'ja!_'ja%i'ja!g'ja~P&5RO#k'laP'laR'la['laa'laj'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la'z'la(a'la(r'la!k'la!Y'la'w'lav'la!_'la%i'la!g'la~P&5tO#k%OqP%OqR%Oq[%Oqa%Oqj%Oqr%Oq!S%Oq!]%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq'z%Oq(a%Oq(r%Oq!k%Oq!Y%Oq'w%Oq#`%Oqv%Oq!_%Oq%i%Oq!g%Oq~P#/sO!]'Yi!k'Yi~P!:tO$O#cq!]#cq!^#cq~P#BwO(y$}OP%aaR%aa[%aaj%aar%aa!S%aa!l%aa!p%aa#R%aa#n%aa#o%aa#p%aa#q%aa#r%aa#s%aa#t%aa#u%aa#v%aa#x%aa#z%aa#{%aa$O%aa(a%aa(r%aa!]%aa!^%aa~On%aa!Q%aa'y%aa(z%aa~P&IyO(z%POP%caR%ca[%caj%car%ca!S%ca!l%ca!p%ca#R%ca#n%ca#o%ca#p%ca#q%ca#r%ca#s%ca#t%ca#u%ca#v%ca#x%ca#z%ca#{%ca$O%ca(a%ca(r%ca!]%ca!^%ca~On%ca!Q%ca'y%ca(y%ca~P&LQOn>^O!Q*OO'y*PO(z%PO~P&IyOn>^O!Q*OO'y*PO(y$}O~P&LQOR0kO!Q0kO!S0lO#S$dOP}a[}aj}an}ar}a!l}a!p}a#R}a#n}a#o}a#p}a#q}a#r}a#s}a#t}a#u}a#v}a#x}a#z}a#{}a$O}a'y}a(a}a(r}a(y}a(z}a!]}a!^}a~O!Q*OO'y*POP$saR$sa[$saj$san$sar$sa!S$sa!l$sa!p$sa#R$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#t$sa#u$sa#v$sa#x$sa#z$sa#{$sa$O$sa(a$sa(r$sa(y$sa(z$sa!]$sa!^$sa~O!Q*OO'y*POP$uaR$ua[$uaj$uan$uar$ua!S$ua!l$ua!p$ua#R$ua#n$ua#o$ua#p$ua#q$ua#r$ua#s$ua#t$ua#u$ua#v$ua#x$ua#z$ua#{$ua$O$ua(a$ua(r$ua(y$ua(z$ua!]$ua!^$ua~On>^O!Q*OO'y*PO(y$}O(z%PO~OP%TaR%Ta[%Taj%Tar%Ta!S%Ta!l%Ta!p%Ta#R%Ta#n%Ta#o%Ta#p%Ta#q%Ta#r%Ta#s%Ta#t%Ta#u%Ta#v%Ta#x%Ta#z%Ta#{%Ta$O%Ta(a%Ta(r%Ta!]%Ta!^%Ta~P''VO$O$mq!]$mq!^$mq~P#BwO$O$oq!]$oq!^$oq~P#BwO!^9oO~O$O9pO~P!1WO!g#vO!]'ei!k'ei~O!g#vO(r'pO!]'ei!k'ei~O!]/pO!k)Oq~O!Y'gi!]'gi~P#/sO!]/yO!Y)Pq~Or9wO!g#vO(r'pO~O[9yO!Y9xO~P#/sO!Y9xO~Oj:PO!g#vO~Og(_y!](_y~P!1WO!]'na!_'na~P#/sOa%[q!_%[q'z%[q!]%[q~P#/sO[:UO~O!]1TO!^)Xq~O`:YO~O#`:ZO!]'pa!^'pa~O!]5uO!^)Ui~P#BwO!S:]O~O!_1oO%i:`O~O(VTO(YUO(e:eO~O!]1zO!^)Vq~O!k:hO~O!k:iO~O!k:jO~O!k:jO~P%[O#`:mO!]#hy!^#hy~O!]#hy!^#hy~P#BwO%i:rO~P&8fO!_'`O%i:rO~O$O#|y!]#|y!^#|y~P#BwOP$|iR$|i[$|ij$|ir$|i!S$|i!l$|i!p$|i#R$|i#n$|i#o$|i#p$|i#q$|i#r$|i#s$|i#t$|i#u$|i#v$|i#x$|i#z$|i#{$|i$O$|i(a$|i(r$|i!]$|i!^$|i~P''VO!Q*OO'y*PO(z%POP'iaR'ia['iaj'ian'iar'ia!S'ia!l'ia!p'ia#R'ia#n'ia#o'ia#p'ia#q'ia#r'ia#s'ia#t'ia#u'ia#v'ia#x'ia#z'ia#{'ia$O'ia(a'ia(r'ia(y'ia!]'ia!^'ia~O!Q*OO'y*POP'kaR'ka['kaj'kan'kar'ka!S'ka!l'ka!p'ka#R'ka#n'ka#o'ka#p'ka#q'ka#r'ka#s'ka#t'ka#u'ka#v'ka#x'ka#z'ka#{'ka$O'ka(a'ka(r'ka(y'ka(z'ka!]'ka!^'ka~O(y$}OP%aiR%ai[%aij%ain%air%ai!Q%ai!S%ai!l%ai!p%ai#R%ai#n%ai#o%ai#p%ai#q%ai#r%ai#s%ai#t%ai#u%ai#v%ai#x%ai#z%ai#{%ai$O%ai'y%ai(a%ai(r%ai(z%ai!]%ai!^%ai~O(z%POP%ciR%ci[%cij%cin%cir%ci!Q%ci!S%ci!l%ci!p%ci#R%ci#n%ci#o%ci#p%ci#q%ci#r%ci#s%ci#t%ci#u%ci#v%ci#x%ci#z%ci#{%ci$O%ci'y%ci(a%ci(r%ci(y%ci!]%ci!^%ci~O$O$oy!]$oy!^$oy~P#BwO$O#cy!]#cy!^#cy~P#BwO!g#vO!]'eq!k'eq~O!]/pO!k)Oy~O!Y'gq!]'gq~P#/sOr:|O!g#vO(r'pO~O[;QO!Y;PO~P#/sO!Y;PO~Og(_!R!](_!R~P!1WOa%[y!_%[y'z%[y!]%[y~P#/sO!]1TO!^)Xy~O!]5uO!^)Uq~O(T;XO~O!_1oO%i;[O~O!k;_O~O%i;dO~P&8fOP$|qR$|q[$|qj$|qr$|q!S$|q!l$|q!p$|q#R$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#t$|q#u$|q#v$|q#x$|q#z$|q#{$|q$O$|q(a$|q(r$|q!]$|q!^$|q~P''VO!Q*OO'y*PO(z%POP'jaR'ja['jaj'jan'jar'ja!S'ja!l'ja!p'ja#R'ja#n'ja#o'ja#p'ja#q'ja#r'ja#s'ja#t'ja#u'ja#v'ja#x'ja#z'ja#{'ja$O'ja(a'ja(r'ja(y'ja!]'ja!^'ja~O!Q*OO'y*POP'laR'la['laj'lan'lar'la!S'la!l'la!p'la#R'la#n'la#o'la#p'la#q'la#r'la#s'la#t'la#u'la#v'la#x'la#z'la#{'la$O'la(a'la(r'la(y'la(z'la!]'la!^'la~OP%OqR%Oq[%Oqj%Oqr%Oq!S%Oq!l%Oq!p%Oq#R%Oq#n%Oq#o%Oq#p%Oq#q%Oq#r%Oq#s%Oq#t%Oq#u%Oq#v%Oq#x%Oq#z%Oq#{%Oq$O%Oq(a%Oq(r%Oq!]%Oq!^%Oq~P''VOg%e!Z!]%e!Z#`%e!Z$O%e!Z~P!1WO!Y;hO~P#/sOr;iO!g#vO(r'pO~O[;kO!Y;hO~P#/sO!]'pq!^'pq~P#BwO!]#h!Z!^#h!Z~P#BwO#k%e!ZP%e!ZR%e!Z[%e!Za%e!Zj%e!Zr%e!Z!S%e!Z!]%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z'z%e!Z(a%e!Z(r%e!Z!k%e!Z!Y%e!Z'w%e!Z#`%e!Zv%e!Z!_%e!Z%i%e!Z!g%e!Z~P#/sOr;tO!g#vO(r'pO~O!Y;uO~P#/sOr;|O!g#vO(r'pO~O!Y;}O~P#/sOP%e!ZR%e!Z[%e!Zj%e!Zr%e!Z!S%e!Z!l%e!Z!p%e!Z#R%e!Z#n%e!Z#o%e!Z#p%e!Z#q%e!Z#r%e!Z#s%e!Z#t%e!Z#u%e!Z#v%e!Z#x%e!Z#z%e!Z#{%e!Z$O%e!Z(a%e!Z(r%e!Z!]%e!Z!^%e!Z~P''VOr<QO!g#vO(r'pO~Ov(fX~P1qO!Q%rO~P!)[O(U!lO~P!)[O!YfX!]fX#`fX~P%2OOP]XR]X[]Xj]Xr]X!Q]X!S]X!]]X!]fX!l]X!p]X#R]X#S]X#`]X#`fX#kfX#n]X#o]X#p]X#q]X#r]X#s]X#t]X#u]X#v]X#x]X#z]X#{]X$Q]X(a]X(r]X(y]X(z]X~O!gfX!k]X!kfX(rfX~P'LTOP<UOQ<UOSfOd>ROe!iOpkOr<UOskOtkOzkO|<UO!O<UO!SWO!WkO!XkO!_XO!i<XO!lZO!o<UO!p<UO!q<UO!s<YO!u<]O!x!hO$W!kO$n>PO(T)]O(VTO(YUO(aVO(o[O~O!]<iO!^$qa~Oh%VOp%WOr%XOs$tOt$tOz%YO|%ZO!O<tO!S${O!_$|O!i>WO!l$xO#j<zO$W%`O$t<vO$v<xO$y%aO(T(vO(VTO(YUO(a$uO(y$}O(z%PO~Ol)dO~P(!yOr!eX(r!eX~P#!iOr(jX(r(jX~P##[O!^]X!^fX~P'LTO!YfX!Y$zX!]fX!]$zX#`fX~P!0SO#k<^O~O!g#vO#k<^O~O#`<nO~Oj<bO~O#`=OO!](wX!^(wX~O#`<nO!](uX!^(uX~O#k=PO~Og=RO~P!1WO#k=XO~O#k=YO~Og=RO(T&ZO~O!g#vO#k=ZO~O!g#vO#k=PO~O$O=[O~P#BwO#k=]O~O#k=^O~O#k=cO~O#k=dO~O#k=eO~O#k=fO~O$O=gO~P!1WO$O=hO~P!1WOl=sO~P7eOk#S#T#U#W#X#[#i#j#u$n$t$v$y%]%^%h%i%j%q%s%v%w%y%{~(OT#o!X'|(U#ps#n#qr!Q'}$]'}(T$_(e~",
        goto: "$9Y)]PPPPPP)^PP)aP)rP+W/]PPPP6mPP7TPP=QPPP@tPA^PA^PPPA^PCfPA^PA^PA^PCjPCoPD^PIWPPPI[PPPPI[L_PPPLeMVPI[PI[PP! eI[PPPI[PI[P!#lI[P!'S!(X!(bP!)U!)Y!)U!,gPPPPPPP!-W!(XPP!-h!/YP!2iI[I[!2n!5z!:h!:h!>gPPP!>oI[PPPPPPPPP!BOP!C]PPI[!DnPI[PI[I[I[I[I[PI[!FQP!I[P!LbP!Lf!Lp!Lt!LtP!IXP!Lx!LxP#!OP#!SI[PI[#!Y#%_CjA^PA^PA^A^P#&lA^A^#)OA^#+vA^#.SA^A^#.r#1W#1W#1]#1f#1W#1qPP#1WPA^#2ZA^#6YA^A^6mPPP#:_PPP#:x#:xP#:xP#;`#:xPP#;fP#;]P#;]#;y#;]#<e#<k#<n)aP#<q)aP#<z#<z#<zP)aP)aP)aP)aPP)aP#=Q#=TP#=T)aP#=XP#=[P)aP)aP)aP)aP)aP)a)aPP#=b#=h#=s#=y#>P#>V#>]#>k#>q#>{#?R#?]#?c#?s#?y#@k#@}#AT#AZ#Ai#BO#Cs#DR#DY#Et#FS#Gt#HS#HY#H`#Hf#Hp#Hv#H|#IW#Ij#IpPPPPPPPPPPP#IvPPPPPPP#Jk#Mx$ b$ i$ qPPP$']P$'f$*_$0x$0{$1O$1}$2Q$2X$2aP$2g$2jP$3W$3[$4S$5b$5g$5}PP$6S$6Y$6^$6a$6e$6i$7e$7|$8e$8i$8l$8o$8y$8|$9Q$9UR!|RoqOXst!Z#d%m&r&t&u&w,s,x2[2_Y!vQ'`-e1o5{Q%tvQ%|yQ&T|Q&j!VS'W!e-]Q'f!iS'l!r!yU*k$|*Z*oQ+o%}S+|&V&WQ,d&dQ-c'_Q-m'gQ-u'mQ0[*qQ1b,OQ1y,eR<{<Y%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_S#q]<V!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU+P%]<s<tQ+t&PQ,f&gQ,m&oQ0x+gQ0}+iQ1Y+uQ2R,kQ3`.gQ5`0|Q5f1TQ6[1zQ7Y3dQ8`5gR9e7['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S!S!nQ!r!v!y!z$|'W'_'`'l'm'n*k*o*q*r-]-c-e-u0[0_1o5{5}%[$ti#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q&X|Q'U!eS'[%i-`Q+t&PQ,P&WQ,f&gQ0n+SQ1Y+uQ1_+{Q2Q,jQ2R,kQ5f1TQ5o1aQ6[1zQ6_1|Q6`2PQ8`5gQ8c5lQ8|6bQ:X8dQ:f8yQ;V:YR<}*ZrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R,h&k&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'b'r(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>R>S[#]WZ#W#Z'X(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ%wxQ%{yW&Q|&V&W,OQ&_!TQ'c!hQ'e!iQ(q#sS+n%|%}Q+r&PQ,_&bQ,c&dS-l'f'gQ.i(rQ1R+oQ1X+uQ1Z+vQ1^+zQ1t,`S1x,d,eQ2|-mQ5e1TQ5i1WQ5n1`Q6Z1yQ8_5gQ8b5kQ8f5pQ:T8^R;T:U!U$zi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y!^%yy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{Q+h%wQ,T&[Q,W&]Q,b&dQ.h(qQ1s,_U1w,c,d,eQ3e.iQ6U1tS6Y1x1yQ8x6Z#f>T#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o>U<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hW%Ti%V*y>PS&[!Q&iQ&]!RQ&^!SU*}%[%d=sR,R&Y%]%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^T)z$u){V+P%]<s<tW'[!e%i*Z-`S(}#y#zQ+c%rQ+y&SS.b(m(nQ1j,XQ5T0kR8i5u'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S$i$^c#Y#e%q%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.|.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ'Y!eR2q-]!W!nQ!e!r!v!y!z$|'W'_'`'l'm'n*Z*k*o*q*r-]-c-e-u0[0_1o5{5}R1l,ZnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&y!^Q'v!xS(s#u<^Q+l%zQ,]&_Q,^&aQ-j'dQ-w'oS.r(x=PS0q+X=ZQ1P+mQ1n,[Q2c,zQ2e,{Q2m-WQ2z-kQ2}-oS5Y0r=eQ5a1QS5d1S=fQ6t2oQ6x2{Q6}3SQ8]5bQ9Y6vQ9Z6yQ9^7OR:l9V$d$]c#Y#e%s%u(S(Y(t(y)R)S)T)U)V)W)X)Y)Z)[)^)`)b)g)q+d+x-Z-x-}.S.U.s.v.z.}/O/b0p2k2n3O3V3k3p3q3r3s3t3u3v3w3x3y3z3{3|4P4Q4X5X5c6u6{7Q7a7b7k7l8k9X9]9g9m9n:o;W;`<W=vS(o#p'iQ)P#zS+b%q.|S.c(n(pR3^.d'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS#q]<VQ&t!XQ&u!YQ&w![Q&x!]R2Z,vQ'a!hQ+e%wQ-h'cS.e(q+hQ2x-gW3b.h.i0w0yQ6w2yW7U3_3a3e5^U9a7V7X7ZU:q9c9d9fS;b:p:sQ;p;cR;x;qU!wQ'`-eT5y1o5{!Q_OXZ`st!V!Z#d#h%e%m&i&k&r&t&u&w(j,s,x.[2[2_]!pQ!r'`-e1o5{T#q]<V%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S(}#y#zS.b(m(n!s=l$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SU$fd)_,mS(p#p'iU*v%R(w4OU0m+O.n7gQ5^0xQ7V3`Q9d7YR:s9em!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}Q't!uS(f#g2US-s'k'wQ/s*]Q0R*jQ3U-vQ4f/tQ4r0TQ4s0UQ4x0^Q7r4`S7}4t4vS8R4y4{Q9r7sQ9v7yQ9{8OQ:Q8TS:{9w9xS;g:|;PS;s;h;iS;{;t;uS<P;|;}R<S<QQ#wbQ's!uS(e#g2US(g#m+WQ+Y%fQ+j%xQ+p&OU-r'k't'wQ.W(fU/r*]*`/wQ0S*jQ0V*lQ1O+kQ1u,aS3R-s-vQ3Z.`S4e/s/tQ4n0PS4q0R0^Q4u0WQ6W1vQ7P3US7q4`4bQ7u4fU7|4r4x4{Q8P4wQ8v6XS9q7r7sQ9u7yQ9}8RQ:O8SQ:c8wQ:y9rS:z9v9xQ;S:QQ;^:dS;f:{;PS;r;g;hS;z;s;uS<O;{;}Q<R<PQ<T<SQ=o=jQ={=tR=|=uV!wQ'`-e%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_S#wz!j!r=i$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=o>R%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Q%fj!^%xy!i!u%{%|%}'V'e'f'g'k'u*j+n+o-Y-l-m-t0R0U1R2u2|3T4r4s4v7}9{S&Oz!jQ+k%yQ,a&dW1v,b,c,d,eU6X1w1x1yS8w6Y6ZQ:d8x!r=j$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ=t>QR=u>R%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_Y#bWZ#W#Z(T!b%jm#h#i#l$x%e%h(^(h(i(j*Y*^*b+Z+[+^,o-V.T.Z.[.]._/m/p2d3[3]4a6r7TQ,n&o!p=k$Z$n)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SR=n'XU']!e%i*ZR2s-`%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+],p,s,x-i-q.P.V.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3l4z6T6e6f6i6|8t9T9_!r)_$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SQ,m&oQ0x+gQ3`.gQ7Y3dR9e7[!b$Tc#Y%q(S(Y(t(y)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!P<d)^)q-Z.|2k2n3p3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!f$Vc#Y%q(S(Y(t(y)W)X)Z)[)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<W!T<f)^)q-Z.|2k2n3p3v3w3y3z4P4X6u7b7k7l8k9X9g9m9n;W;`=v!^$Zc#Y%q(S(Y(t(y)`)g+x-x-}.S.U.s.v/b0p3O3V3k3{5X5c6{7Q7a9]:o<WQ4_/kz>S)^)q-Z.|2k2n3p4P4X6u7b7k7l8k9X9g9m9n;W;`=vQ>X>ZR>Y>['QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>SS$oh$pR4U/U'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$kf$qQ$ifS)j$l)nR)v$qT$jf$qT)l$l)n'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%m%t&R&k&n&o&r&t&u&w&{'T'X'b'r(T(V(](d(x(z)O)s)}*i+X+]+g,p,s,x-U-X-i-q.P.V.g.t.{/U/V/n0]0l0r1S1r2S2T2V2X2[2_2a2p3Q3W3d3l4T4z5w6T6e6f6i6s6|7[8t9T9_:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>ST$oh$pQ$rhR)u$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%m%t&R&k&n&o&r&t&u&w&{'T'b'r(T(V(](d(x(z)O)}*i+X+]+g,p,s,x-i-q.P.V.g.t.{/n0]0l0r1S1r2S2T2V2X2[2_2a3Q3W3d3l4z6T6e6f6i6|7[8t9T9_!s>Q$Z$n'X)s-U-X/V2p4T5w6s:Z:m<U<X<Y<]<^<_<`<a<b<c<d<e<f<g<h<i<k<n<{=O=P=R=Z=[=e=f>S#glOPXZst!Z!`!o#S#d#o#{$n%m&k&n&o&r&t&u&w&{'T'b)O)s*i+]+g,p,s,x-i.g/V/n0]0l1r2S2T2V2X2[2_2a3d4T4z6T6e6f6i7[8t9T!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^Q+T%aQ/c*Oo4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!U$yi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>YQ*c$zU*l$|*Z*oQ+U%bQ0W*m#f=q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n=r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hQ=w>TQ=x>UQ=y>VR=z>W!U%Ri$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y#f(w#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^o4O<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=hnoOXst!Z#d%m&r&t&u&w,s,x2[2_S*f${*YQ-R'OQ-S'QR4i/y%[%Si#v$b$c$d$x${%O%Q%^%_%c)y*R*T*V*Y*a*g*w*x+f+i,S,V.f/P/d/m/x/y/{0`0b0i0j0o1f1i1q3c4^4_4j4o5Q5[5_6S7W7v8Q8V8[8q9b9p9y:P:`:r;Q;[;d;k<l<m<o<p<q<r<u<v<w<x<y<z=S=T=U=V=X=Y=]=^=_=`=a=b=c=d=g=h>P>X>Y>]>^Q,U&]Q1h,WQ5s1gR8h5tV*n$|*Z*oU*n$|*Z*oT5z1o5{S0P*i/nQ4w0]T8S4z:]Q+j%xQ0V*lQ1O+kQ1u,aQ6W1vQ8v6XQ:c8wR;^:d!U%Oi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Yx*R$v)e*S*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>OS0`*t0a#f<o#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<p<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!d=S(u)c*[*e.j.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[`=T3}7c7f7j9h:t:w;yS=_.l3iT=`7e9k!U%Qi$d%O%Q%^%_%c*R*T*a*w*x/P/x0`0b0i0j0o4_5Q8V9p>P>X>Y|*T$v)e*U*t+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>OS0b*u0c#f<q#v$b$c$x${)y*V*Y*g+f+i,S,V.f/d/m/y/{1f1i1q3c4^4j4o5[5_6S7W7v8Q8[8q9b9y:P:`:r;Q;[;d;k<o<q<u<w<y=S=U=X=]=_=a=c=g>]>^n<r<l<m<p<r<v<x<z=T=V=Y=^=`=b=d=h!h=U(u)c*[*e.k.l.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[d=V3}7d7e7j9h9i:t:u:w;yS=a.m3jT=b7f9lrnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q&f!UR,p&ornOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_R&f!UQ,Y&^R1d,RsnOXst!V!Z#d%m&i&r&t&u&w,s,x2[2_Q1p,_S6R1s1tU8p6P6Q6US:_8r8sS;Y:^:aQ;m;ZR;w;nQ&m!VR,i&iR6_1|R:f8yW&Q|&V&W,OR1Z+vQ&r!WR,s&sR,y&xT2],x2_R,}&yQ,|&yR2f,}Q'y!{R-y'ySsOtQ#dXT%ps#dQ#OTR'{#OQ#RUR'}#RQ){$uR/`){Q#UVR(Q#UQ#XWU(W#X(X.QQ(X#YR.Q(YQ-^'YR2r-^Q.u(yS3m.u3nR3n.vQ-e'`R2v-eY!rQ'`-e1o5{R'j!rQ/Q)eR4S/QU#_W%h*YU(_#_(`.RQ(`#`R.R(ZQ-a']R2t-at`OXst!V!Z#d%m&i&k&r&t&u&w,s,x2[2_S#hZ%eU#r`#h.[R.[(jQ(k#jQ.X(gW.a(k.X3X7RQ3X.YR7R3YQ)n$lR/W)nQ$phR)t$pQ$`cU)a$`-|<jQ-|<WR<j)qQ/q*]W4c/q4d7t9sU4d/r/s/tS7t4e4fR9s7u$e*Q$v(u)c)e*[*e*t*u+Q+R+V.l.m.o.p.q/_/g/i/k/v/|0d0e0v1e3f3g3h3}4R4[4g4h4l4|5O5R5S5W5r7]7^7_7`7e7f7h7i7j7p7w7z8U8X8Z9h9i9j9t9|:R:S:t:u:v:w:x:};R;e;j;v;y=p=}>O>Z>[Q/z*eU4k/z4m7xQ4m/|R7x4lS*o$|*ZR0Y*ox*S$v)e*t*u+V/v0d0e4R4g5R5S5W7p8U:R:x=p=}>O!d.j(u)c*[*e.l.m.q/_/k/|0v1e3h4[4h4l5r7]7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/h*S.j7ca7c3}7e7f7j9h:t:w;yQ0a*tQ3i.lU4}0a3i9kR9k7e|*U$v)e*t*u+V/g/v0d0e4R4g4|5R5S5W7p8U:R:x=p=}>O!h.k(u)c*[*e.l.m.q/_/k/|0v1e3f3h4[4h4l5r7]7^7`7w7z8X8Z9t9|:S:};R;e;j;v>Z>[U/j*U.k7de7d3}7e7f7j9h9i:t:u:w;yQ0c*uQ3j.mU5P0c3j9lR9l7fQ*z%UR0g*zQ5]0vR8Y5]Q+_%kR0u+_Q5v1jS8j5v:[R:[8kQ,[&_R1m,[Q5{1oR8m5{Q1{,fS6]1{8zR8z6_Q1U+rW5h1U5j8a:VQ5j1XQ8a5iR:V8bQ+w&QR1[+wQ2_,xR6m2_YrOXst#dQ&v!ZQ+a%mQ,r&rQ,t&tQ,u&uQ,w&wQ2Y,sS2],x2_R6l2[Q%opQ&z!_Q&}!aQ'P!bQ'R!cQ'q!uQ+`%lQ+l%zQ,Q&XQ,h&mQ-P&|W-p'k's't'wQ-w'oQ0X*nQ1P+mQ1c,PS2O,i,lQ2g-OQ2h-RQ2i-SQ2}-oW3P-r-s-v-xQ5a1QQ5m1_Q5q1eQ6V1uQ6a2QQ6k2ZU6z3O3R3UQ6}3SQ8]5bQ8e5oQ8g5rQ8l5zQ8u6WQ8{6`S9[6{7PQ9^7OQ:W8cQ:b8vQ:g8|Q:n9]Q;U:XQ;]:cQ;a:oQ;l;VR;o;^Q%zyQ'd!iQ'o!uU+m%{%|%}Q-W'VU-k'e'f'gS-o'k'uQ0Q*jS1Q+n+oQ2o-YS2{-l-mQ3S-tS4p0R0UQ5b1RQ6v2uQ6y2|Q7O3TU7{4r4s4vQ9z7}R;O9{S$wi>PR*{%VU%Ui%V>PR0f*yQ$viS(u#v+iS)c$b$cQ)e$dQ*[$xS*e${*YQ*t%OQ*u%QQ+Q%^Q+R%_Q+V%cQ.l<oQ.m<qQ.o<uQ.p<wQ.q<yQ/_)yQ/g*RQ/i*TQ/k*VQ/v*aS/|*g/mQ0d*wQ0e*xl0v+f,V.f1i1q3c6S7W8q9b:`:r;[;dQ1e,SQ3f=SQ3g=UQ3h=XS3}<l<mQ4R/PS4[/d4^Q4g/xQ4h/yQ4l/{Q4|0`Q5O0bQ5R0iQ5S0jQ5W0oQ5r1fQ7]=]Q7^=_Q7_=aQ7`=cQ7e<pQ7f<rQ7h<vQ7i<xQ7j<zQ7p4_Q7w4jQ7z4oQ8U5QQ8X5[Q8Z5_Q9h=YQ9i=TQ9j=VQ9t7vQ9|8QQ:R8VQ:S8[Q:t=^Q:u=`Q:v=bQ:w=dQ:x9pQ:}9yQ;R:PQ;e=gQ;j;QQ;v;kQ;y=hQ=p>PQ=}>XQ>O>YQ>Z>]R>[>^Q+O%]Q.n<sR7g<tnpOXst!Z#d%m&r&t&u&w,s,x2[2_Q!fPS#fZ#oQ&|!`W'h!o*i0]4zQ(P#SQ)Q#{Q)r$nS,l&k&nQ,q&oQ-O&{S-T'T/nQ-g'bQ.x)OQ/[)sQ0s+]Q0y+gQ2W,pQ2y-iQ3a.gQ4W/VQ5U0lQ6Q1rQ6c2SQ6d2TQ6h2VQ6j2XQ6o2aQ7Z3dQ7m4TQ8s6TQ9P6eQ9Q6fQ9S6iQ9f7[Q:a8tR:k9T#[cOPXZst!Z!`!o#d#o#{%m&k&n&o&r&t&u&w&{'T'b)O*i+]+g,p,s,x-i.g/n0]0l1r2S2T2V2X2[2_2a3d4z6T6e6f6i7[8t9TQ#YWQ#eYQ%quQ%svS%uw!gS(S#W(VQ(Y#ZQ(t#uQ(y#xQ)R$OQ)S$PQ)T$QQ)U$RQ)V$SQ)W$TQ)X$UQ)Y$VQ)Z$WQ)[$XQ)^$ZQ)`$_Q)b$aQ)g$eW)q$n)s/V4TQ+d%tQ+x&RS-Z'X2pQ-x'rS-}(T.PQ.S(]Q.U(dQ.s(xQ.v(zQ.z<UQ.|<XQ.}<YQ/O<]Q/b)}Q0p+XQ2k-UQ2n-XQ3O-qQ3V.VQ3k.tQ3p<^Q3q<_Q3r<`Q3s<aQ3t<bQ3u<cQ3v<dQ3w<eQ3x<fQ3y<gQ3z<hQ3{.{Q3|<kQ4P<nQ4Q<{Q4X<iQ5X0rQ5c1SQ6u=OQ6{3QQ7Q3WQ7a3lQ7b=PQ7k=RQ7l=ZQ8k5wQ9X6sQ9]6|Q9g=[Q9m=eQ9n=fQ:o9_Q;W:ZQ;`:mQ<W#SR=v>SR#[WR'Z!el!tQ!r!v!y!z'`'l'm'n-e-u1o5{5}S'V!e-]U*j$|*Z*oS-Y'W'_S0U*k*qQ0^*rQ2u-cQ4v0[R4{0_R({#xQ!fQT-d'`-e]!qQ!r'`-e1o5{Q#p]R'i<VR)f$dY!uQ'`-e1o5{Q'k!rS'u!v!yS'w!z5}S-t'l'mQ-v'nR3T-uT#kZ%eS#jZ%eS%km,oU(g#h#i#lS.Y(h(iQ.^(jQ0t+^Q3Y.ZU3Z.[.]._S7S3[3]R9`7Td#^W#W#Z%h(T(^*Y+Z.T/mr#gZm#h#i#l%e(h(i(j+^.Z.[.]._3[3]7TS*]$x*bQ/t*^Q2U,oQ2l-VQ4`/pQ6q2dQ7s4aQ9W6rT=m'X+[V#aW%h*YU#`W%h*YS(U#W(^U(Z#Z+Z/mS-['X+[T.O(T.TV'^!e%i*ZQ$lfR)x$qT)m$l)nR4V/UT*_$x*bT*h${*YQ0w+fQ1g,VQ3_.fQ5t1iQ6P1qQ7X3cQ8r6SQ9c7WQ:^8qQ:p9bQ;Z:`Q;c:rQ;n;[R;q;dnqOXst!Z#d%m&r&t&u&w,s,x2[2_Q&l!VR,h&itmOXst!U!V!Z#d%m&i&r&t&u&w,s,x2[2_R,o&oT%lm,oR1k,XR,g&gQ&U|S+}&V&WR1^,OR+s&PT&p!W&sT&q!W&sT2^,x2_",
        nodeNames: "\u26a0 ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList in out const TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast < ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate asserts is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration defer ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
        maxTerm: 380,
        context: MF,
        nodeProps: [
          ["isolate", -8, 5, 6, 14, 37, 39, 51, 53, 55, ""],
          ["group", -26, 9, 17, 19, 68, 207, 211, 215, 216, 218, 221, 224, 234, 237, 243, 245, 247, 249, 252, 258, 264, 266, 268, 270, 272, 274, 275, "Statement", -34, 13, 14, 32, 35, 36, 42, 51, 54, 55, 57, 62, 70, 72, 76, 80, 82, 84, 85, 110, 111, 120, 121, 136, 139, 141, 142, 143, 144, 145, 147, 148, 167, 169, 171, "Expression", -23, 31, 33, 37, 41, 43, 45, 173, 175, 177, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 201, 203, 205, 206, "Type", -3, 88, 103, 109, "ClassItem"],
          ["openedBy", 23, "<", 38, "InterpolationStart", 56, "[", 60, "{", 73, "(", 160, "JSXStartCloseTag"],
          ["closedBy", -2, 24, 168, ">", 40, "InterpolationEnd", 50, "]", 61, "}", 74, ")", 165, "JSXEndTag"]
        ],
        propSources: [sF],
        skippedNodes: [0, 5, 6, 278],
        repeatNodeCount: 37,
        tokenData: "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$i&j(Wp(Z!b'|0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(X#S$i&j'}0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$i&j(Wp(Z!b'}0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$i&j!p),Q(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#v(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(V':f$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$i&j(Z!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$i&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$d`$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$d``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$d`$i&j(Z!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(Z!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$d`(Z!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$i&j(Wp(Z!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$i&j(Wp(Z!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$i&j(Z!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$i&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(Z!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$i&j(WpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(WpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Wp(Z!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$i&j(o%1l(Wp(Z!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$i&j(Wp(Z!b$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$i&j(Wp(Z!b$]#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$i&j(Wp(Z!b#p(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$i&j$Q(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(z+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$i&j#z(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(Y';W$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$i&j(WpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$i&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$d`$i&j(WpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(WpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$d`(WpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!l/.^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!k!Lf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$i&j(Wp(Z!b(U%&f#q(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$i&j(Wp(Z!b#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$i&j(Wp(Z!br+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!]+Jf$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$i&j(Wp(Z!b!Q.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_![!L^$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$i&j(Wp(Z!b#o(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$i&j(Z!b!X7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$i&j!X7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$i&j!X7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!X7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!X7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$i&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$i&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$i&j(Z!b!X7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(Z!b!X7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(Z!b!X7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(Z!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$i&j(Z!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$i&j(Wp!X7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$i&j(Wp!X7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Wp!X7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Wp!X7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(WpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$i&j(WpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$i&j(Wp(Z!b!X7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Wp(Z!b!X7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Wp(Z!b!X7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Wp(Z!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$i&j(Wp(Z!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$i&j(Wp(Z!b(O0/l!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$i&j(Wp(Z!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$i&j(Z!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$i&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(Z!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$i&j(WpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(WpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Wp(Z!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$i&j$Q(Ch(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Z#t$i&j(Wp(Z!b!X7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$i&j(Wp(Z!bs'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!g$b$i&j$O)Lv(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#R-<U(Wp(Z!b$n7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$k&j(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#r(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$Q(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#s(Ch(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#`*!Y$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#k(Cl$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#s(Ch$f#|$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#s(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#r(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(r(Ct$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$i&j#{(Ch(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!|$Ip$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!S0,v$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$i&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$i&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$i&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$i&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$i&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$i&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!Y#)l$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#x(Ch$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$i&j(Wp(Z!b(a+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$i&j(Wp(Z!b(T,2j$_#t(e$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$i&j(Wp(Z!b$_#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X!_#Hb(Wp(Z!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(y+JY$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!^(CdvBr$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!q7`$i&j(Wp(Z!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$i&j(Wp(Z!b'|0/l$]#t(T,2j(e$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$i&j(Wp(Z!b'}0/l$]#t(T,2j(e$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
        tokenizers: [GF, zW, IF, yW, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, cW, new EF("$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOx~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!U~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(c~~", 141, 340), new EF("j~RQYZXz{^~^O(Q~~aP!P!Qd~iO(R~~", 25, 323)],
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
          get: FF => nF[FF] || -1
        }, {
          term: 343,
          get: FF => HF[FF] || -1
        }, {
          term: 95,
          get: FF => KF[FF] || -1
        }],
        tokenPrec: 15201
      });
    var XF = SF(39170),
      UF = SF(39153),
      BF = SF(39162),
      jW = SF(39146);
    const vW = [(0, jW.u)("function ${name}(${params}) {\n\t${}\n}", {
        label: "function",
        detail: "definition",
        type: "keyword"
      }), (0, jW.u)("for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}", {
        label: "for",
        detail: "loop",
        type: "keyword"
      }), (0, jW.u)("for (let ${name} of ${collection}) {\n\t${}\n}", {
        label: "for",
        detail: "of loop",
        type: "keyword"
      }), (0, jW.u)("do {\n\t${}\n} while (${})", {
        label: "do",
        detail: "loop",
        type: "keyword"
      }), (0, jW.u)("while (${}) {\n\t${}\n}", {
        label: "while",
        detail: "loop",
        type: "keyword"
      }), (0, jW.u)("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
        label: "try",
        detail: "/ catch block",
        type: "keyword"
      }), (0, jW.u)("if (${}) {\n\t${}\n}", {
        label: "if",
        detail: "block",
        type: "keyword"
      }), (0, jW.u)("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
        label: "if",
        detail: "/ else block",
        type: "keyword"
      }), (0, jW.u)("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
        label: "class",
        detail: "definition",
        type: "keyword"
      }), (0, jW.u)('import {${names}} from "${module}"\n${}', {
        label: "import",
        detail: "named",
        type: "keyword"
      }), (0, jW.u)('import ${name} from "${module}"\n${}', {
        label: "import",
        detail: "default",
        type: "keyword"
      })],
      JF = vW.concat([(0, jW.u)("interface ${name} {\n\t${}\n}", {
        label: "interface",
        detail: "definition",
        type: "keyword"
      }), (0, jW.u)("type ${name} = ${type}", {
        label: "type",
        detail: "definition",
        type: "keyword"
      }), (0, jW.u)("enum ${name} {\n\t${}\n}", {
        label: "enum",
        detail: "definition",
        type: "keyword"
      })]),
      pF = new CF.q,
      lF = new Set(["Script", "Block", "FunctionExpression", "FunctionDeclaration", "ArrowFunction", "MethodDeclaration", "ForStatement"]);

    function FW(FF) {
      return (WF, SF) => {
        let CF = WF.node.getChild("VariableDefinition");
        return CF && SF(CF, FF), !0
      }
    }
    const WW = ["FunctionDeclaration"],
      SW = {
        FunctionDeclaration: FW("function"),
        ClassDeclaration: FW("class"),
        ClassExpression: () => !0,
        EnumDeclaration: FW("constant"),
        TypeAliasDeclaration: FW("type"),
        NamespaceDeclaration: FW("namespace"),
        VariableDefinition(FF, WF) {
          FF.matchContext(WW) || WF(FF, "variable")
        },
        TypeDefinition(FF, WF) {
          WF(FF, "type")
        },
        __proto__: null
      };

    function CW(FF, WF) {
      let SF = pF.get(WF);
      if (SF) return SF;
      let AF = [],
        uF = !0;

      function hF(WF, SF) {
        let CF = FF.sliceString(WF.from, WF.to);
        AF.push({
          label: CF,
          type: SF
        })
      }
      return WF.cursor(CF.e.IncludeAnonymous).iterate((WF => {
        if (uF) uF = !1;
        else if (WF.name) {
          let FF = SW[WF.name];
          if (FF && FF(WF, hF) || lF.has(WF.name)) return !1
        } else if (WF.to - WF.from > 8192) {
          for (let SF of CW(FF, WF.node)) AF.push(SF);
          return !1
        }
      })), pF.set(WF, AF), AF
    }
    const AW = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
      uW = ["TemplateString", "String", "RegExp", "LineComment", "BlockComment", "VariableDefinition", "TypeDefinition", "Label", "PropertyDefinition", "PropertyName", "PrivatePropertyDefinition", "PrivatePropertyName", "JSXText", "JSXAttributeValue", "JSXOpenTag", "JSXCloseTag", "JSXSelfClosingTag", ".", "?."];

    function hW(FF) {
      let WF = (0, XF.ib)(FF.state).resolveInner(FF.pos, -1);
      if (uW.indexOf(WF.name) > -1) return null;
      let SF = "VariableName" == WF.name || WF.to - WF.from < 20 && AW.test(FF.state.sliceDoc(WF.from, WF.to));
      if (!SF && !FF.explicit) return null;
      let CF = [];
      for (let AF = WF; AF; AF = AF.parent) lF.has(AF.name) && (CF = CF.concat(CW(FF.state.doc, AF)));
      return {
        options: CF,
        from: SF ? WF.from : FF.pos,
        validFor: AW
      }
    }
    const bS = XF.j.define({
        name: "javascript",
        parser: wF.configure({
          props: [XF.Q.add({
            IfStatement: (0, XF.u)({
              except: /^\s*({|else\b)/
            }),
            TryStatement: (0, XF.u)({
              except: /^\s*({|catch\b|finally\b)/
            }),
            LabeledStatement: XF.B,
            SwitchBody: FF => {
              let WF = FF.textAfter,
                SF = /^\s*\}/.test(WF),
                CF = /^\s*(case|default)\b/.test(WF);
              return FF.baseIndent + (SF ? 0 : CF ? 1 : 2) * FF.unit
            },
            Block: (0, XF.A)({
              closing: "}"
            }),
            ArrowFunction: FF => FF.baseIndent + FF.unit,
            "TemplateString BlockComment": () => null,
            "Statement Property": (0, XF.u)({
              except: /^\s*{/
            }),
            JSXElement(FF) {
              let WF = /^\s*<\//.test(FF.textAfter);
              return FF.lineIndent(FF.node.from) + (WF ? 0 : FF.unit)
            },
            JSXEscape(FF) {
              let WF = /\s*\}/.test(FF.textAfter);
              return FF.lineIndent(FF.node.from) + (WF ? 0 : FF.unit)
            },
            "JSXOpenTag JSXSelfClosingTag": FF => FF.column(FF.node.from) + FF.unit
          }), XF.K.add({
            "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": XF.G,
            BlockComment: FF => ({
              from: FF.from + 2,
              to: FF.to - 2
            }),
            JSXElement(FF) {
              let WF = FF.firstChild;
              if (!WF || "JSXSelfClosingTag" == WF.name) return null;
              let SF = FF.lastChild;
              return {
                from: WF.to,
                to: SF.type.isError ? FF.to : SF.from
              }
            },
            "JSXSelfClosingTag JSXOpenTag"(FF) {
              var WF;
              let SF = null === (WF = FF.firstChild) || void 0 === WF ? void 0 : WF.nextSibling,
                CF = FF.lastChild;
              return !SF || SF.type.isError ? null : {
                from: SF.to,
                to: CF.type.isError ? FF.to : CF.from
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
      dW = {
        test: FF => /^JSX/.test(FF.name),
        facet: (0, XF.z)({
          commentTokens: {
            block: {
              open: "{/*",
              close: "*/}"
            }
          }
        })
      },
      PW = bS.configure({
        dialect: "ts"
      }, "typescript"),
      RW = bS.configure({
        dialect: "jsx",
        props: [XF.bb.add((FF => FF.isTop ? [dW] : void 0))]
      }),
      iS = bS.configure({
        dialect: "jsx ts",
        props: [XF.bb.add((FF => FF.isTop ? [dW] : void 0))]
      }, "typescript");
    let eW = FF => ({
      label: FF,
      type: "keyword"
    });
    const EW = "break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield".split(" ").map(eW),
      QW = EW.concat(["declare", "implements", "private", "protected", "public"].map(eW));

    function rS() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        WF = FF.jsx ? FF.typescript ? iS : RW : FF.typescript ? PW : bS,
        SF = FF.typescript ? JF.concat(QW) : vW.concat(EW);
      return new XF.n(WF, [bS.data.of({
        autocomplete: (0, jW.s)(uW, (0, jW.m)(SF))
      }), bS.data.of({
        autocomplete: hW
      }), FF.jsx ? TW : []])
    }

    function gS(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FF.length;
      for (let CF = null === WF || void 0 === WF ? void 0 : WF.firstChild; CF; CF = CF.nextSibling)
        if ("JSXIdentifier" == CF.name || "JSXBuiltin" == CF.name || "JSXNamespacedName" == CF.name || "JSXMemberExpression" == CF.name) return FF.sliceString(CF.from, Math.min(CF.to, SF));
      return ""
    }
    const tS = "object" == typeof navigator && /Android\b/.test(navigator.userAgent),
      TW = BF.k.inputHandler.of(((FF, WF, SF, CF, AF) => {
        if ((tS ? FF.composing : FF.compositionStarted) || FF.state.readOnly || WF != SF || ">" != CF && "/" != CF || !bS.isActiveAt(FF.state, WF, -1)) return !1;
        let uF = AF(),
          {
            state: hF
          } = uF,
          bW = hF.changeByRange((FF => {
            var WF;
            let SF, {
                head: AF
              } = FF,
              uF = (0, XF.ib)(hF).resolveInner(AF - 1, -1);
            if ("JSXStartTag" == uF.name && (uF = uF.parent), hF.doc.sliceString(AF - 1, AF) != CF || "JSXAttributeValue" == uF.name && uF.to > AF);
            else {
              if (">" == CF && "JSXFragmentTag" == uF.name) return {
                range: FF,
                changes: {
                  from: AF,
                  insert: "</>"
                }
              };
              if ("/" == CF && "JSXStartCloseTag" == uF.name) {
                let FF = uF.parent,
                  CF = FF.parent;
                if (CF && FF.from == AF - 2 && ((SF = gS(hF.doc, CF.firstChild, AF)) || "JSXFragmentTag" == (null === (WF = CF.firstChild) || void 0 === WF ? void 0 : WF.name))) {
                  let FF = `${SF}>`;
                  return {
                    range: UF.m.cursor(AF + FF.length, -1),
                    changes: {
                      from: AF,
                      insert: FF
                    }
                  }
                }
              } else if (">" == CF) {
                let WF = function(FF) {
                  for (;;) {
                    if ("JSXOpenTag" == FF.name || "JSXSelfClosingTag" == FF.name || "JSXFragmentTag" == FF.name) return FF;
                    if ("JSXEscape" == FF.name || !FF.parent) return null;
                    FF = FF.parent
                  }
                }(uF);
                if (WF && "JSXOpenTag" == WF.name && !/^\/?>|^<\//.test(hF.doc.sliceString(AF, AF + 2)) && (SF = gS(hF.doc, WF, AF))) return {
                  range: FF,
                  changes: {
                    from: AF,
                    insert: `</${SF}>`
                  }
                }
              }
            }
            return {
              range: FF
            }
          }));
        return !bW.changes.empty && (FF.dispatch([uF, hF.update(bW, {
          userEvent: "input.complete",
          scrollIntoView: !0
        })]), !0)
      }))
  },
  39170: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => nF,
      B: () => KF,
      D: () => TW,
      G: () => vW,
      I: () => PW,
      K: () => jW,
      L: () => tW,
      N: () => oF,
      O: () => MF,
      Q: () => GF,
      S: () => UF,
      W: () => YF,
      X: () => ZF,
      _: () => HW,
      bb: () => iW,
      db: () => DW,
      e: () => kS,
      eb: () => gW,
      i: () => cW,
      ib: () => rW,
      j: () => QF,
      n: () => OF,
      q: () => fW,
      u: () => wF,
      y: () => OW,
      z: () => RF
    });
    var CF, AF = SF(39179),
      uF = SF(39153),
      hF = SF(39162),
      bW = SF(39188),
      dF = SF(39165);
    const PF = new AF.i;

    function RF(FF) {
      return uF.t.define({
        combine: FF ? WF => WF.concat(FF) : void 0
      })
    }
    const iW = new AF.i;
    class eF {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this.data = FF, this.name = CF, uF.q.prototype.hasOwnProperty("tree") || Object.defineProperty(uF.q.prototype, "tree", {
          get() {
            return rW(this)
          }
        }), this.parser = WF, this.extension = [mW.of(this), uF.q.languageData.of(((FF, WF, SF) => {
          let CF = EF(FF, WF, SF),
            AF = CF.type.prop(PF);
          if (!AF) return [];
          let uF = FF.facet(AF),
            hF = CF.type.prop(iW);
          if (hF) {
            let AF = CF.resolve(WF - CF.from, SF);
            for (let WF of hF)
              if (WF.test(AF, FF)) {
                let SF = FF.facet(WF.facet);
                return "replace" == WF.type ? SF : SF.concat(uF)
              }
          }
          return uF
        }))].concat(SF)
      }
      isActiveAt(FF, WF) {
        return EF(FF, WF, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1).type.prop(PF) == this.data
      }
      findRegions(FF) {
        let WF = FF.facet(mW);
        if ((null === WF || void 0 === WF ? void 0 : WF.data) == this.data) return [{
          from: 0,
          to: FF.doc.length
        }];
        if (!WF || !WF.allowsNesting) return [];
        let SF = [],
          CF = (FF, WF) => {
            if (FF.prop(PF) == this.data) return void SF.push({
              from: WF,
              to: WF + FF.length
            });
            let uF = FF.prop(AF.i.mounted);
            if (uF) {
              if (uF.tree.prop(PF) == this.data) {
                if (uF.overlay)
                  for (let FF of uF.overlay) SF.push({
                    from: FF.from + WF,
                    to: FF.to + WF
                  });
                else SF.push({
                  from: WF,
                  to: WF + FF.length
                });
                return
              }
              if (uF.overlay) {
                let FF = SF.length;
                if (CF(uF.tree, uF.overlay[0].from + WF), SF.length > FF) return
              }
            }
            for (let SF = 0; SF < FF.children.length; SF++) {
              let uF = FF.children[SF];
              uF instanceof AF.B && CF(uF, FF.positions[SF] + WF)
            }
          };
        return CF(rW(FF), 0), SF
      }
      get allowsNesting() {
        return !0
      }
    }

    function EF(FF, WF, SF) {
      let CF = FF.facet(mW),
        uF = rW(FF).topNode;
      if (!CF || CF.allowsNesting)
        for (let hF = uF; hF; hF = hF.enter(WF, SF, AF.e.ExcludeBuffers | AF.e.EnterBracketed)) hF.type.isTop && (uF = hF);
      return uF
    }
    eF.setState = uF.H.define();
    class QF extends eF {
      constructor(FF, WF, SF) {
        super(FF, WF, [], SF), this.parser = WF
      }
      static define(FF) {
        let WF = RF(FF.languageData);
        return new QF(WF, FF.parser.configure({
          props: [PF.add((FF => FF.isTop ? WF : void 0))]
        }), FF.name)
      }
      configure(FF, WF) {
        return new QF(this.data, this.parser.configure(FF), WF || this.name)
      }
      get allowsNesting() {
        return this.parser.hasWrappers()
      }
    }

    function rW(FF) {
      let WF = FF.field(eF.state, !1);
      return WF ? WF.tree : AF.B.empty
    }

    function gW(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF.doc.length;
      var SF;
      return (null === (SF = FF.field(eF.state, !1)) || void 0 === SF ? void 0 : SF.context.isDone(WF)) || !1
    }

    function tW(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF.viewport.to,
        SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        CF = function(FF, WF) {
          let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
          var CF;
          let AF = null === (CF = FF.field(eF.state, !1)) || void 0 === CF ? void 0 : CF.context;
          if (!AF) return null;
          let uF = AF.viewport;
          AF.updateViewport({
            from: 0,
            to: WF
          });
          let hF = AF.isDone(WF) || AF.work(SF, WF) ? AF.tree : null;
          return AF.updateViewport(uF), hF
        }(FF.state, WF, SF);
      return CF != rW(FF.state) && FF.dispatch({}), !!CF
    }
    class TF {
      constructor(FF) {
        this.doc = FF, this.cursorPos = 0, this.string = "", this.cursor = FF.iter()
      }
      get length() {
        return this.doc.length
      }
      syncTo(FF) {
        return this.string = this.cursor.next(FF - this.cursorPos).value, this.cursorPos = FF + this.string.length, this.cursorPos - this.string.length
      }
      chunk(FF) {
        return this.syncTo(FF), this.string
      }
      get lineChunks() {
        return !0
      }
      read(FF, WF) {
        let SF = this.cursorPos - this.string.length;
        return FF < SF || WF >= this.cursorPos ? this.doc.sliceString(FF, WF) : this.string.slice(FF - SF, WF - SF)
      }
    }
    let aW = null;
    class kW {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          CF = arguments.length > 3 ? arguments[3] : void 0,
          AF = arguments.length > 4 ? arguments[4] : void 0,
          uF = arguments.length > 5 ? arguments[5] : void 0,
          hF = arguments.length > 6 ? arguments[6] : void 0,
          bW = arguments.length > 7 ? arguments[7] : void 0;
        this.parser = FF, this.state = WF, this.fragments = SF, this.tree = CF, this.treeLen = AF, this.viewport = uF, this.skipped = hF, this.scheduleOn = bW, this.parse = null, this.tempSkipped = []
      }
      static create(FF, WF, SF) {
        return new kW(FF, WF, [], AF.B.empty, 0, SF, [], null)
      }
      startParse() {
        return this.parser.startParse(new TF(this.state.doc), this.fragments)
      }
      work(FF, WF) {
        return null != WF && WF >= this.state.doc.length && (WF = void 0), this.tree != AF.B.empty && this.isDone(null !== WF && void 0 !== WF ? WF : this.state.doc.length) ? (this.takeTree(), !0) : this.withContext((() => {
          var SF;
          if ("number" == typeof FF) {
            let WF = Date.now() + FF;
            FF = () => Date.now() > WF
          }
          for (this.parse || (this.parse = this.startParse()), null != WF && (null == this.parse.stoppedAt || this.parse.stoppedAt > WF) && WF < this.state.doc.length && this.parse.stopAt(WF);;) {
            let CF = this.parse.advance();
            if (CF) {
              if (this.fragments = this.withoutTempSkipped(AF.x.addTree(CF, this.fragments, null != this.parse.stoppedAt)), this.treeLen = null !== (SF = this.parse.stoppedAt) && void 0 !== SF ? SF : this.state.doc.length, this.tree = CF, this.parse = null, !(this.treeLen < (null !== WF && void 0 !== WF ? WF : this.state.doc.length))) return !0;
              this.parse = this.startParse()
            }
            if (FF()) return !1
          }
        }))
      }
      takeTree() {
        let FF, WF;
        this.parse && (FF = this.parse.parsedPos) >= this.treeLen && ((null == this.parse.stoppedAt || this.parse.stoppedAt > FF) && this.parse.stopAt(FF), this.withContext((() => {
          for (; !(WF = this.parse.advance()););
        })), this.treeLen = FF, this.tree = WF, this.fragments = this.withoutTempSkipped(AF.x.addTree(this.tree, this.fragments, !0)), this.parse = null)
      }
      withContext(FF) {
        let WF = aW;
        aW = this;
        try {
          return FF()
        } finally {
          aW = WF
        }
      }
      withoutTempSkipped(FF) {
        for (let WF; WF = this.tempSkipped.pop();) FF = qW(FF, WF.from, WF.to);
        return FF
      }
      changes(FF, WF) {
        let {
          fragments: SF,
          tree: CF,
          treeLen: uF,
          viewport: hF,
          skipped: bW
        } = this;
        if (this.takeTree(), !FF.empty) {
          let WF = [];
          if (FF.iterChangedRanges(((FF, SF, CF, AF) => WF.push({
              fromA: FF,
              toA: SF,
              fromB: CF,
              toB: AF
            }))), SF = AF.x.applyChanges(SF, WF), CF = AF.B.empty, uF = 0, hF = {
              from: FF.mapPos(hF.from, -1),
              to: FF.mapPos(hF.to, 1)
            }, this.skipped.length) {
            bW = [];
            for (let WF of this.skipped) {
              let SF = FF.mapPos(WF.from, 1),
                CF = FF.mapPos(WF.to, -1);
              SF < CF && bW.push({
                from: SF,
                to: CF
              })
            }
          }
        }
        return new kW(this.parser, WF, SF, CF, uF, hF, bW, this.scheduleOn)
      }
      updateViewport(FF) {
        if (this.viewport.from == FF.from && this.viewport.to == FF.to) return !1;
        this.viewport = FF;
        let WF = this.skipped.length;
        for (let SF = 0; SF < this.skipped.length; SF++) {
          let {
            from: WF,
            to: CF
          } = this.skipped[SF];
          WF < FF.to && CF > FF.from && (this.fragments = qW(this.fragments, WF, CF), this.skipped.splice(SF--, 1))
        }
        return !(this.skipped.length >= WF) && (this.reset(), !0)
      }
      reset() {
        this.parse && (this.takeTree(), this.parse = null)
      }
      skipUntilInView(FF, WF) {
        this.skipped.push({
          from: FF,
          to: WF
        })
      }
      static getSkippingParser(FF) {
        return new class extends AF.t {
          createParse(WF, SF, CF) {
            let uF = CF[0].from,
              hF = CF[CF.length - 1].to;
            return {
              parsedPos: uF,
              advance() {
                let WF = aW;
                if (WF) {
                  for (let FF of CF) WF.tempSkipped.push(FF);
                  FF && (WF.scheduleOn = WF.scheduleOn ? Promise.all([WF.scheduleOn, FF]) : FF)
                }
                return this.parsedPos = hF, new AF.B(AF.m.none, [], [], hF - uF)
              },
              stoppedAt: null,
              stopAt() {}
            }
          }
        }
      }
      isDone(FF) {
        FF = Math.min(FF, this.state.doc.length);
        let WF = this.fragments;
        return this.treeLen >= FF && WF.length && 0 == WF[0].from && WF[0].to >= FF
      }
      static get() {
        return aW
      }
    }

    function qW(FF, WF, SF) {
      return AF.x.applyChanges(FF, [{
        fromA: WF,
        toA: SF,
        fromB: WF,
        toB: SF
      }])
    }
    class VF {
      constructor(FF) {
        this.context = FF, this.tree = FF.tree
      }
      apply(FF) {
        if (!FF.docChanged && this.tree == this.context.tree) return this;
        let WF = this.context.changes(FF.changes, FF.state),
          SF = this.context.treeLen == FF.startState.doc.length ? void 0 : Math.max(FF.changes.mapPos(this.context.treeLen), WF.viewport.to);
        return WF.work(20, SF) || WF.takeTree(), new VF(WF)
      }
      static init(FF) {
        let WF = Math.min(3e3, FF.doc.length),
          SF = kW.create(FF.facet(mW).parser, FF, {
            from: 0,
            to: WF
          });
        return SF.work(20, WF) || SF.takeTree(), new VF(SF)
      }
    }
    eF.state = uF.J.define({
      create: VF.init,
      update(FF, WF) {
        for (let SF of WF.effects)
          if (SF.is(eF.setState)) return SF.value;
        return WF.startState.facet(mW) != WF.state.facet(mW) ? VF.init(WF.state) : FF.apply(WF)
      }
    });
    let NF = FF => {
      let WF = setTimeout((() => FF()), 500);
      return () => clearTimeout(WF)
    };
    "undefined" != typeof requestIdleCallback && (NF = FF => {
      let WF = -1,
        SF = setTimeout((() => {
          WF = requestIdleCallback(FF, {
            timeout: 400
          })
        }), 100);
      return () => WF < 0 ? clearTimeout(SF) : cancelIdleCallback(WF)
    });
    const DF = "undefined" != typeof navigator && (null === (CF = navigator.scheduling) || void 0 === CF ? void 0 : CF.isInputPending) ? () => navigator.scheduling.isInputPending() : null,
      LF = hF.o.fromClass(class {
        constructor(FF) {
          this.view = FF, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork()
        }
        update(FF) {
          let WF = this.view.state.field(eF.state).context;
          (WF.updateViewport(FF.view.viewport) || this.view.viewport.to > WF.treeLen) && this.scheduleWork(), (FF.docChanged || FF.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(WF)
        }
        scheduleWork() {
          if (this.working) return;
          let {
            state: FF
          } = this.view, WF = FF.field(eF.state);
          WF.tree == WF.context.tree && WF.context.isDone(FF.doc.length) || (this.working = NF(this.work))
        }
        work(FF) {
          this.working = null;
          let WF = Date.now();
          if (this.chunkEnd < WF && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = WF + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
          let {
            state: SF,
            viewport: {
              to: CF
            }
          } = this.view, AF = SF.field(eF.state);
          if (AF.tree == AF.context.tree && AF.context.isDone(CF + 1e5)) return;
          let uF = Date.now() + Math.min(this.chunkBudget, 100, FF && !DF ? Math.max(25, FF.timeRemaining() - 5) : 1e9),
            hF = AF.context.treeLen < CF && SF.doc.length > CF + 1e3,
            bW = AF.context.work((() => DF && DF() || Date.now() > uF), CF + (hF ? 0 : 1e5));
          this.chunkBudget -= Date.now() - WF, (bW || this.chunkBudget <= 0) && (AF.context.takeTree(), this.view.dispatch({
            effects: eF.setState.of(new VF(AF.context))
          })), this.chunkBudget > 0 && (!bW || hF) && this.scheduleWork(), this.checkAsyncSchedule(AF.context)
        }
        checkAsyncSchedule(FF) {
          FF.scheduleOn && (this.workScheduled++, FF.scheduleOn.then((() => this.scheduleWork())).catch((FF => (0, hF.ab)(this.view.state, FF))).then((() => this.workScheduled--)), FF.scheduleOn = null)
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
      mW = uF.t.define({
        combine: FF => FF.length ? FF[0] : null,
        enables: FF => [eF.state, LF, hF.k.contentAttributes.compute([FF], (WF => {
          let SF = WF.facet(FF);
          return SF && SF.name ? {
            "data-language": SF.name
          } : {}
        }))]
      });
    class OF {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        this.language = FF, this.support = WF, this.extension = [FF, WF]
      }
    }
    const xW = uF.t.define(),
      ZF = uF.t.define({
        combine: FF => {
          if (!FF.length) return "  ";
          let WF = FF[0];
          if (!WF || /\S/.test(WF) || Array.from(WF).some((FF => FF != WF[0]))) throw new Error("Invalid indent unit: " + JSON.stringify(FF[0]));
          return WF
        }
      });

    function oF(FF) {
      let WF = FF.facet(ZF);
      return 9 == WF.charCodeAt(0) ? FF.tabSize * WF.length : WF.length
    }

    function YF(FF, WF) {
      let SF = "",
        CF = FF.tabSize,
        AF = FF.facet(ZF)[0];
      if ("\t" == AF) {
        for (; WF >= CF;) SF += "\t", WF -= CF;
        AF = " "
      }
      for (let uF = 0; uF < WF; uF++) SF += AF;
      return SF
    }

    function MF(FF, WF) {
      FF instanceof uF.q && (FF = new cW(FF));
      for (let CF of FF.state.facet(xW)) {
        let SF = CF(FF, WF);
        if (void 0 !== SF) return SF
      }
      let SF = rW(FF.state);
      return SF.length >= WF ? function(FF, WF, SF) {
        let CF = WF.resolveStack(SF),
          AF = WF.resolveInner(SF, -1).resolve(SF, 0).enterUnfinishedNodesBefore(SF);
        if (AF != CF.node) {
          let FF = [];
          for (let WF = AF; WF && !(WF.from < CF.node.from || WF.to > CF.node.to || WF.from == CF.node.from && WF.type == CF.node.type); WF = WF.parent) FF.push(WF);
          for (let WF = FF.length - 1; WF >= 0; WF--) CF = {
            node: FF[WF],
            next: CF
          }
        }
        return zW(CF, FF, SF)
      }(FF, SF, WF) : null
    }
    class cW {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.state = FF, this.options = WF, this.unit = oF(FF)
      }
      lineAt(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          SF = this.state.doc.lineAt(FF),
          {
            simulateBreak: CF,
            simulateDoubleBreak: AF
          } = this.options;
        return null != CF && CF >= SF.from && CF <= SF.to ? AF && CF == FF ? {
          text: "",
          from: FF
        } : (WF < 0 ? CF < FF : CF <= FF) ? {
          text: SF.text.slice(CF - SF.from),
          from: CF
        } : {
          text: SF.text.slice(0, CF - SF.from),
          from: SF.from
        } : SF
      }
      textAfterPos(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this.options.simulateDoubleBreak && FF == this.options.simulateBreak) return "";
        let {
          text: SF,
          from: CF
        } = this.lineAt(FF, WF);
        return SF.slice(FF - CF, Math.min(SF.length, FF + 100 - CF))
      }
      column(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: SF,
            from: CF
          } = this.lineAt(FF, WF),
          AF = this.countColumn(SF, FF - CF),
          uF = this.options.overrideIndentation ? this.options.overrideIndentation(CF) : -1;
        return uF > -1 && (AF += uF - this.countColumn(SF, SF.search(/\S|$/))), AF
      }
      countColumn(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF.length;
        return (0, uF.$)(FF, this.state.tabSize, WF)
      }
      lineIndent(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          {
            text: SF,
            from: CF
          } = this.lineAt(FF, WF),
          AF = this.options.overrideIndentation;
        if (AF) {
          let FF = AF(CF);
          if (FF > -1) return FF
        }
        return this.countColumn(SF, SF.search(/\S|$/))
      }
      get simulatedBreak() {
        return this.options.simulateBreak || null
      }
    }
    const GF = new AF.i;

    function zW(FF, WF, SF) {
      for (let CF = FF; CF; CF = CF.next) {
        let FF = IF(CF.node);
        if (FF) return FF(yW.create(WF, SF, CF))
      }
      return 0
    }

    function IF(FF) {
      let WF = FF.type.prop(GF);
      if (WF) return WF;
      let SF, CF = FF.firstChild;
      if (CF && (SF = CF.type.prop(AF.i.closedBy))) {
        let WF = FF.lastChild,
          CF = WF && SF.indexOf(WF.name) > -1;
        return FF => HF(FF, !0, 1, void 0, CF && ! function(FF) {
          return FF.pos == FF.options.simulateBreak && FF.options.simulateDoubleBreak
        }(FF) ? WF.from : void 0)
      }
      return null == FF.parent ? fF : null
    }

    function fF() {
      return 0
    }
    class yW extends cW {
      constructor(FF, WF, SF) {
        super(FF.state, FF.options), this.base = FF, this.pos = WF, this.context = SF
      }
      get node() {
        return this.context.node
      }
      static create(FF, WF, SF) {
        return new yW(FF, WF, SF)
      }
      get textAfter() {
        return this.textAfterPos(this.pos)
      }
      get baseIndent() {
        return this.baseIndentFor(this.node)
      }
      baseIndentFor(FF) {
        let WF = this.state.doc.lineAt(FF.from);
        for (;;) {
          let SF = FF.resolve(WF.from);
          for (; SF.parent && SF.parent.from == SF.from;) SF = SF.parent;
          if (sF(SF, FF)) break;
          WF = this.state.doc.lineAt(SF.from)
        }
        return this.lineIndent(WF.from)
      }
      continue () {
        return zW(this.context.next, this.base, this.pos)
      }
    }

    function sF(FF, WF) {
      for (let SF = WF; SF; SF = SF.parent)
        if (FF == SF) return !0;
      return !1
    }

    function nF(FF) {
      let {
        closing: WF,
        align: SF = !0,
        units: CF = 1
      } = FF;
      return FF => HF(FF, SF, CF, WF)
    }

    function HF(FF, WF, SF, CF, AF) {
      let uF = FF.textAfter,
        hF = uF.match(/^\s*/)[0].length,
        bW = CF && uF.slice(hF, hF + CF.length) == CF || AF == FF.pos + hF,
        dF = WF ? function(FF) {
          let WF = FF.node,
            SF = WF.childAfter(WF.from),
            CF = WF.lastChild;
          if (!SF) return null;
          let AF = FF.options.simulateBreak,
            uF = FF.state.doc.lineAt(SF.from),
            hF = null == AF || AF <= uF.from ? uF.to : Math.min(uF.to, AF);
          for (let bW = SF.to;;) {
            let FF = WF.childAfter(bW);
            if (!FF || FF == CF) return null;
            if (!FF.type.isSkipped) {
              if (FF.from >= hF) return null;
              let WF = /^ */.exec(uF.text.slice(SF.to - uF.from))[0].length;
              return {
                from: SF.from,
                to: SF.to + WF
              }
            }
            bW = FF.to
          }
        }(FF) : null;
      return dF ? bW ? FF.column(dF.from) : FF.column(dF.to) : FF.baseIndent + (bW ? 0 : FF.unit * SF)
    }
    const KF = FF => FF.baseIndent;

    function wF() {
      let {
        except: FF,
        units: WF = 1
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return SF => {
        let CF = FF && FF.test(SF.textAfter);
        return SF.baseIndent + (CF ? 0 : WF * SF.unit)
      }
    }
    const XF = 200;

    function UF() {
      return uF.q.transactionFilter.of((FF => {
        if (!FF.docChanged || !FF.isUserEvent("input.type") && !FF.isUserEvent("input.complete")) return FF;
        let WF = FF.startState.languageDataAt("indentOnInput", FF.startState.selection.main.head);
        if (!WF.length) return FF;
        let SF = FF.newDoc,
          {
            head: CF
          } = FF.newSelection.main,
          AF = SF.lineAt(CF);
        if (CF > AF.from + XF) return FF;
        let uF = SF.sliceString(AF.from, CF);
        if (!WF.some((FF => FF.test(uF)))) return FF;
        let {
          state: hF
        } = FF, bW = -1, dF = [];
        for (let {
            head: PF
          }
          of hF.selection.Bu) {
          let FF = hF.doc.lineAt(PF);
          if (FF.from == bW) continue;
          bW = FF.from;
          let WF = MF(hF, FF.from);
          if (null == WF) continue;
          let SF = /^\s*/.exec(FF.text)[0],
            CF = YF(hF, WF);
          SF != CF && dF.push({
            from: FF.from,
            to: FF.from + SF.length,
            insert: CF
          })
        }
        return dF.length ? [FF, {
          changes: dF,
          sequential: !0
        }] : FF
      }))
    }
    const BF = uF.t.define(),
      jW = new AF.i;

    function vW(FF) {
      let WF = FF.firstChild,
        SF = FF.lastChild;
      return WF && WF.to < SF.from ? {
        from: WF.to,
        to: SF.type.isError ? FF.to : SF.from
      } : null
    }

    function JF(FF) {
      let WF = FF.lastChild;
      return WF && WF.to == FF.to && WF.type.isError
    }

    function pF(FF, WF, SF) {
      for (let CF of FF.facet(BF)) {
        let AF = CF(FF, WF, SF);
        if (AF) return AF
      }
      return function(FF, WF, SF) {
        let CF = rW(FF);
        if (CF.length < SF) return null;
        let AF = null;
        for (let uF = CF.resolveStack(SF, 1); uF; uF = uF.next) {
          let hF = uF.node;
          if (hF.to <= SF || hF.from > SF) continue;
          if (AF && hF.from < WF) break;
          let bW = hF.type.prop(jW);
          if (bW && (hF.to < CF.length - 50 || CF.length == FF.doc.length || !JF(hF))) {
            let CF = bW(hF, FF);
            CF && CF.from <= SF && CF.from >= WF && CF.to > SF && (AF = CF)
          }
        }
        return AF
      }(FF, WF, SF)
    }

    function lF(FF, WF) {
      let SF = WF.mapPos(FF.from, 1),
        CF = WF.mapPos(FF.to, -1);
      return SF >= CF ? void 0 : {
        from: SF,
        to: CF
      }
    }
    const FW = uF.H.define({
        map: lF
      }),
      WW = uF.H.define({
        map: lF
      });

    function SW(FF) {
      let WF = [];
      for (let {
          head: SF
        }
        of FF.state.selection.Bu) WF.some((FF => FF.from <= SF && FF.to >= SF)) || WF.push(FF.lineBlockAt(SF));
      return WF
    }
    const CW = uF.J.define({
      create: () => hF.e.none,
      update(FF, WF) {
        WF.isUserEvent("delete") && WF.changes.iterChangedRanges(((WF, SF) => FF = AW(FF, WF, SF))), FF = FF.map(WF.changes);
        for (let SF of WF.effects)
          if (SF.is(FW) && !hW(FF, SF.value.from, SF.value.to)) {
            let {
              preparePlaceholder: CF
            } = WF.state.facet(iS), AF = CF ? hF.e.replace({
              widget: new rS(CF(WF.state, SF.value))
            }) : QW;
            FF = FF.update({
              add: [AF.range(SF.value.from, SF.value.to)]
            })
          } else SF.is(WW) && (FF = FF.update({
            filter: (FF, WF) => SF.value.from != FF || SF.value.to != WF,
            filterFrom: SF.value.from,
            filterTo: SF.value.to
          }));
        return WF.selection && (FF = AW(FF, WF.selection.main.head)), FF
      },
      provide: FF => hF.k.Iu.from(FF),
      toJSON(FF, WF) {
        let SF = [];
        return FF.between(0, WF.doc.length, ((FF, WF) => {
          SF.push(FF, WF)
        })), SF
      },
      fromJSON(FF) {
        if (!Array.isArray(FF) || FF.length % 2) throw new RangeError("Invalid JSON for fold state");
        let WF = [];
        for (let SF = 0; SF < FF.length;) {
          let CF = FF[SF++],
            AF = FF[SF++];
          if ("number" != typeof CF || "number" != typeof AF) throw new RangeError("Invalid JSON for fold state");
          WF.push(QW.range(CF, AF))
        }
        return hF.e.set(WF, !0)
      }
    });

    function AW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WF,
        CF = !1;
      return FF.between(WF, SF, ((FF, AF) => {
        FF < SF && AF > WF && (CF = !0)
      })), CF ? FF.update({
        filterFrom: WF,
        filterTo: SF,
        filter: (FF, CF) => FF >= SF || CF <= WF
      }) : FF
    }

    function uW(FF, WF, SF) {
      var CF;
      let AF = null;
      return null === (CF = FF.field(CW, !1)) || void 0 === CF || CF.between(WF, SF, ((FF, WF) => {
        (!AF || AF.from > FF) && (AF = {
          from: FF,
          to: WF
        })
      })), AF
    }

    function hW(FF, WF, SF) {
      let CF = !1;
      return FF.between(WF, WF, ((FF, AF) => {
        FF == WF && AF == SF && (CF = !0)
      })), CF
    }

    function bS(FF, WF) {
      return FF.field(CW, !1) ? WF : WF.concat(uF.H.appendConfig.of(eW()))
    }

    function dW(FF, WF) {
      let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        CF = FF.state.doc.lineAt(WF.from).number,
        AF = FF.state.doc.lineAt(WF.to).number;
      return hF.k.announce.of(`${FF.state.phrase(SF?"Folded lines":"Unfolded lines")} ${CF} ${FF.state.phrase("to")} ${AF}.`)
    }
    const PW = [{
        key: "Ctrl-Shift-[",
        mac: "Cmd-Alt-[",
        run: FF => {
          for (let WF of SW(FF)) {
            let SF = pF(FF.state, WF.from, WF.to);
            if (SF) return FF.dispatch({
              effects: bS(FF.state, [FW.of(SF), dW(FF, SF)])
            }), !0
          }
          return !1
        }
      }, {
        key: "Ctrl-Shift-]",
        mac: "Cmd-Alt-]",
        run: FF => {
          if (!FF.state.field(CW, !1)) return !1;
          let WF = [];
          for (let SF of SW(FF)) {
            let CF = uW(FF.state, SF.from, SF.to);
            CF && WF.push(WW.of(CF), dW(FF, CF, !1))
          }
          return WF.length && FF.dispatch({
            effects: WF
          }), WF.length > 0
        }
      }, {
        key: "Ctrl-Alt-[",
        run: FF => {
          let {
            state: WF
          } = FF, SF = [];
          for (let CF = 0; CF < WF.doc.length;) {
            let AF = FF.lineBlockAt(CF),
              uF = pF(WF, AF.from, AF.to);
            uF && SF.push(FW.of(uF)), CF = (uF ? FF.lineBlockAt(uF.to) : AF).to + 1
          }
          return SF.length && FF.dispatch({
            effects: bS(FF.state, SF)
          }), !!SF.length
        }
      }, {
        key: "Ctrl-Alt-]",
        run: FF => {
          let WF = FF.state.field(CW, !1);
          if (!WF || !WF.size) return !1;
          let SF = [];
          return WF.between(0, FF.state.doc.length, ((FF, WF) => {
            SF.push(WW.of({
              from: FF,
              to: WF
            }))
          })), FF.dispatch({
            effects: SF
          }), !0
        }
      }],
      RW = {
        placeholderDOM: null,
        preparePlaceholder: null,
        placeholderText: "\u2026"
      },
      iS = uF.t.define({
        combine: FF => (0, uF.Y)(FF, RW)
      });

    function eW(FF) {
      let WF = [CW, aS];
      return FF && WF.push(iS.of(FF)), WF
    }

    function EW(FF, WF) {
      let {
        state: SF
      } = FF, CF = SF.facet(iS), AF = WF => {
        let SF = FF.lineBlockAt(FF.posAtDOM(WF.target)),
          CF = uW(FF.state, SF.from, SF.to);
        CF && FF.dispatch({
          effects: WW.of(CF)
        }), WF.preventDefault()
      };
      if (CF.placeholderDOM) return CF.placeholderDOM(FF, AF, WF);
      let uF = document.createElement("span");
      return uF.textContent = CF.placeholderText, uF.setAttribute("aria-label", SF.phrase("folded code")), uF.title = SF.phrase("unfold"), uF.className = "cm-foldPlaceholder", uF.onclick = AF, uF
    }
    const QW = hF.e.replace({
      widget: new class extends hF.s {
        toDOM(FF) {
          return EW(FF, null)
        }
      }
    });
    class rS extends hF.s {
      constructor(FF) {
        super(), this.value = FF
      }
      eq(FF) {
        return this.value == FF.value
      }
      toDOM(FF) {
        return EW(FF, this.value)
      }
    }
    const gS = {
      openText: "\u2304",
      closedText: "\u203a",
      markerDOM: null,
      domEventHandlers: {},
      foldingChanged: () => !1
    };
    class tS extends hF.m {
      constructor(FF, WF) {
        super(), this.config = FF, this.open = WF
      }
      eq(FF) {
        return this.config == FF.config && this.open == FF.open
      }
      toDOM(FF) {
        if (this.config.markerDOM) return this.config.markerDOM(this.open);
        let WF = document.createElement("span");
        return WF.textContent = this.open ? this.config.openText : this.config.closedText, WF.title = FF.state.phrase(this.open ? "Fold line" : "Unfold line"), WF
      }
    }

    function TW() {
      let FF = {
          ...gS,
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        },
        WF = new tS(FF, !0),
        SF = new tS(FF, !1),
        CF = hF.o.fromClass(class {
          constructor(FF) {
            this.from = FF.viewport.from, this.markers = this.buildMarkers(FF)
          }
          update(WF) {
            (WF.docChanged || WF.viewportChanged || WF.startState.facet(mW) != WF.state.facet(mW) || WF.startState.field(CW, !1) != WF.state.field(CW, !1) || rW(WF.startState) != rW(WF.state) || FF.foldingChanged(WF)) && (this.markers = this.buildMarkers(WF.view))
          }
          buildMarkers(FF) {
            let CF = new uF.A;
            for (let AF of FF.viewportLineBlocks) {
              let uF = uW(FF.state, AF.from, AF.to) ? SF : pF(FF.state, AF.from, AF.to) ? WF : null;
              uF && CF.add(AF.from, AF.from, uF)
            }
            return CF.finish()
          }
        }),
        {
          domEventHandlers: AF
        } = FF;
      return [CF, (0, hF.J)({
        class: "cm-foldGutter",
        markers(FF) {
          var WF;
          return (null === (WF = FF.plugin(CF)) || void 0 === WF ? void 0 : WF.markers) || uF.C.empty
        },
        initialSpacer: () => new tS(FF, !1),
        domEventHandlers: {
          ...AF,
          click: (FF, WF, SF) => {
            if (AF.click && AF.click(FF, WF, SF)) return !0;
            let CF = uW(FF.state, WF.from, WF.to);
            if (CF) return FF.dispatch({
              effects: WW.of(CF)
            }), !0;
            let uF = pF(FF.state, WF.from, WF.to);
            return !!uF && (FF.dispatch({
              effects: FW.of(uF)
            }), !0)
          }
        }
      }), eW()]
    }
    const aS = hF.k.baseTheme({
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
    class kS {
      constructor(FF, WF) {
        let SF;

        function CF(FF) {
          let WF = dF.c.newName();
          return (SF || (SF = Object.create(null)))["." + WF] = FF, WF
        }
        this.specs = FF;
        const AF = "string" == typeof WF.all ? WF.all : WF.all ? CF(WF.all) : void 0,
          uF = WF.scope;
        this.scope = uF instanceof eF ? FF => FF.prop(PF) == uF.data : uF ? FF => FF == uF : void 0, this.style = (0, bW.i)(FF.map((FF => ({
          tag: FF.tag,
          class: FF.class || CF(Object.assign({}, FF, {
            tag: null
          }))
        }))), {
          all: AF
        }).style, this.module = SF ? new dF.c(SF) : null, this.themeType = WF.themeType
      }
      static define(FF, WF) {
        return new kS(FF, WF || {})
      }
    }
    const qS = uF.t.define(),
      VW = uF.t.define({
        combine: FF => FF.length ? [FF[0]] : null
      });

    function NW(FF) {
      let WF = FF.facet(qS);
      return WF.length ? WF : FF.facet(VW)
    }

    function DW(FF, WF) {
      let SF, CF = [mS];
      return FF instanceof kS && (FF.module && CF.push(hF.k.styleModule.of(FF.module)), SF = FF.themeType), (null === WF || void 0 === WF ? void 0 : WF.fallback) ? CF.push(VW.of(FF)) : SF ? CF.push(qS.computeN([hF.k.darkTheme], (WF => WF.facet(hF.k.darkTheme) == ("dark" == SF) ? [FF] : []))) : CF.push(qS.of(FF)), CF
    }
    class LW {
      constructor(FF) {
        this.markCache = Object.create(null), this.tree = rW(FF.state), this.Iu = this.buildDeco(FF, NW(FF.state)), this.decoratedTo = FF.viewport.to
      }
      update(FF) {
        let WF = rW(FF.state),
          SF = NW(FF.state),
          CF = SF != NW(FF.startState),
          {
            viewport: AF
          } = FF.view,
          uF = FF.changes.mapPos(this.decoratedTo, 1);
        WF.length < AF.to && !CF && WF.type == this.tree.type && uF >= AF.to ? (this.Iu = this.Iu.map(FF.changes), this.decoratedTo = uF) : (WF != this.tree || FF.viewportChanged || CF) && (this.tree = WF, this.Iu = this.buildDeco(FF.view, SF), this.decoratedTo = AF.to)
      }
      buildDeco(FF, WF) {
        if (!WF || !this.tree.length) return hF.e.none;
        let SF = new uF.A;
        for (let {
            from: CF,
            to: AF
          }
          of FF.XuF)(0, bW.d)(this.tree, WF, ((FF, WF, CF) => {
          SF.add(FF, WF, this.markCache[CF] || (this.markCache[CF] = hF.e.mark({
            class: CF
          })))
        }), CF, AF);
        return SF.finish()
      }
    }
    const mS = uF.x.high(hF.o.fromClass(LW, {
        Iu: FF => FF.Iu
      })),
      OW = kS.define([{
        tag: bW.k.meta,
        color: "#404740"
      }, {
        tag: bW.k.link,
        textDecoration: "underline"
      }, {
        tag: bW.k.heading,
        textDecoration: "underline",
        fontWeight: "bold"
      }, {
        tag: bW.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: bW.k.strong,
        fontWeight: "bold"
      }, {
        tag: bW.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: bW.k.keyword,
        color: "#708"
      }, {
        tag: [bW.k.atom, bW.k.bool, bW.k.url, bW.k.contentSeparator, bW.k.labelName],
        color: "#219"
      }, {
        tag: [bW.k.literal, bW.k.inserted],
        color: "#164"
      }, {
        tag: [bW.k.string, bW.k.deleted],
        color: "#a11"
      }, {
        tag: [bW.k.regexp, bW.k.escape, bW.k.special(bW.k.string)],
        color: "#e40"
      }, {
        tag: bW.k.definition(bW.k.variableName),
        color: "#00f"
      }, {
        tag: bW.k.local(bW.k.variableName),
        color: "#30a"
      }, {
        tag: [bW.k.typeName, bW.k.namespace],
        color: "#085"
      }, {
        tag: bW.k.className,
        color: "#167"
      }, {
        tag: [bW.k.special(bW.k.variableName), bW.k.macroName],
        color: "#256"
      }, {
        tag: bW.k.definition(bW.k.propertyName),
        color: "#00c"
      }, {
        tag: bW.k.comment,
        color: "#940"
      }, {
        tag: bW.k.invalid,
        color: "#f00"
      }]),
      xS = hF.k.baseTheme({
        "&.cm-focused .cm-matchingBracket": {
          backgroundColor: "#328c8252"
        },
        "&.cm-focused .cm-nonmatchingBracket": {
          backgroundColor: "#bb555544"
        }
      }),
      ZW = 1e4,
      oW = "()[]{}",
      YW = uF.t.define({
        combine: FF => (0, uF.Y)(FF, {
          afterCursor: !0,
          brackets: oW,
          maxScanDistance: ZW,
          renderMatch: GW
        })
      }),
      MW = hF.e.mark({
        class: "cm-matchingBracket"
      }),
      cS = hF.e.mark({
        class: "cm-nonmatchingBracket"
      });

    function GW(FF) {
      let WF = [],
        SF = FF.matched ? MW : cS;
      return WF.push(SF.range(FF.start.from, FF.start.to)), FF.end && WF.push(SF.range(FF.end.from, FF.end.to)), WF
    }

    function zS(FF) {
      let WF = [],
        SF = FF.facet(YW);
      for (let CF of FF.selection.Bu) {
        if (!CF.empty) continue;
        let AF = HW(FF, CF.head, -1, SF) || CF.head > 0 && HW(FF, CF.head - 1, 1, SF) || SF.afterCursor && (HW(FF, CF.head, 1, SF) || CF.head < FF.doc.length && HW(FF, CF.head + 1, -1, SF));
        AF && (WF = WF.concat(SF.renderMatch(AF, FF)))
      }
      return hF.e.set(WF, !0)
    }
    const IW = [hF.o.fromClass(class {
      constructor(FF) {
        this.paused = !1, this.Iu = zS(FF.state)
      }
      update(FF) {
        (FF.docChanged || FF.selectionSet || this.paused) && (FF.view.composing ? (this.Iu = this.Iu.map(FF.changes), this.paused = !0) : (this.Iu = zS(FF.state), this.paused = !1))
      }
    }, {
      Iu: FF => FF.Iu
    }), xS];

    function fW() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [YW.of(FF), IW]
    }
    const yS = new AF.i;

    function sW(FF, WF, SF) {
      let CF = FF.prop(WF < 0 ? AF.i.openedBy : AF.i.closedBy);
      if (CF) return CF;
      if (1 == FF.name.length) {
        let CF = SF.indexOf(FF.name);
        if (CF > -1 && CF % 2 == (WF < 0 ? 1 : 0)) return [SF[CF + WF]]
      }
      return null
    }

    function nW(FF) {
      let WF = FF.type.prop(yS);
      return WF ? WF(FF.node) : FF
    }

    function HW(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        AF = CF.maxScanDistance || ZW,
        uF = CF.brackets || oW,
        hF = rW(FF),
        bW = hF.resolveInner(WF, SF);
      for (let dF = bW; dF; dF = dF.parent) {
        let CF = sW(dF.type, SF, uF);
        if (CF && dF.from < dF.to) {
          let AF = nW(dF);
          if (AF && (SF > 0 ? WF >= AF.from && WF < AF.to : WF > AF.from && WF <= AF.to)) return KW(FF, WF, SF, dF, AF, CF, uF)
        }
      }
      return function(FF, WF, SF, CF, AF, uF, hF) {
        if (SF < 0 ? !WF : WF == FF.doc.length) return null;
        let bW = SF < 0 ? FF.sliceDoc(WF - 1, WF) : FF.sliceDoc(WF, WF + 1),
          dF = hF.indexOf(bW);
        if (dF < 0 || dF % 2 == 0 != SF > 0) return null;
        let PF = {
            from: SF < 0 ? WF - 1 : WF,
            to: SF > 0 ? WF + 1 : WF
          },
          RF = FF.doc.iterRange(WF, SF > 0 ? FF.doc.length : 0),
          iW = 0;
        for (let eF = 0; !RF.next().done && eF <= uF;) {
          let FF = RF.value;
          SF < 0 && (eF += FF.length);
          let uF = WF + eF * SF;
          for (let WF = SF > 0 ? 0 : FF.length - 1, bW = SF > 0 ? FF.length : -1; WF != bW; WF += SF) {
            let bW = hF.indexOf(FF[WF]);
            if (!(bW < 0 || CF.resolveInner(uF + WF, 1).type != AF))
              if (bW % 2 == 0 == SF > 0) iW++;
              else {
                if (1 == iW) return {
                  start: PF,
                  end: {
                    from: uF + WF,
                    to: uF + WF + 1
                  },
                  matched: bW >> 1 == dF >> 1
                };
                iW--
              }
          }
          SF > 0 && (eF += FF.length)
        }
        return RF.done ? {
          start: PF,
          matched: !1
        } : null
      }(FF, WF, SF, hF, bW.type, AF, uF)
    }

    function KW(FF, WF, SF, CF, AF, uF, hF) {
      let bW = CF.parent,
        dF = {
          from: AF.from,
          to: AF.to
        },
        PF = 0,
        RF = null === bW || void 0 === bW ? void 0 : bW.cursor();
      if (RF && (SF < 0 ? RF.childBefore(CF.from) : RF.childAfter(CF.to)))
        do {
          if (SF < 0 ? RF.to <= CF.from : RF.from >= CF.to) {
            if (0 == PF && uF.indexOf(RF.type.name) > -1 && RF.from < RF.to) {
              let FF = nW(RF);
              return {
                start: dF,
                end: FF ? {
                  from: FF.from,
                  to: FF.to
                } : void 0,
                matched: !0
              }
            }
            if (sW(RF.type, SF, hF)) PF++;
            else if (sW(RF.type, -SF, hF)) {
              if (0 == PF) {
                let FF = nW(RF);
                return {
                  start: dF,
                  end: FF && FF.from < FF.to ? {
                    from: FF.from,
                    to: FF.to
                  } : void 0,
                  matched: !1
                }
              }
              PF--
            }
          }
        } while (SF < 0 ? RF.prevSibling() : RF.nextSibling());
      return {
        start: dF,
        matched: !1
      }
    }
    const wW = Object.create(null),
      XW = [AF.m.none],
      UW = [],
      BW = Object.create(null),
      jS = Object.create(null);
    for (let [pW, lW] of [
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
      ]) jS[pW] = JW(wW, lW);

    function vS(FF, WF) {
      UW.indexOf(FF) > -1 || (UW.push(FF), console.warn(WF))
    }

    function JW(FF, WF) {
      let SF = [];
      for (let AF of WF.split(" ")) {
        let WF = [];
        for (let SF of AF.split(".")) {
          let CF = FF[SF] || bW.k[SF];
          CF ? "function" == typeof CF ? WF.length ? WF = WF.map(CF) : vS(SF, `Modifier ${SF} used at start of tag`) : WF.length ? vS(SF, `Tag ${SF} used as modifier`) : WF = Array.isArray(CF) ? CF : [CF] : vS(SF, `Unknown highlighting tag ${SF}`)
        }
        for (let FF of WF) SF.push(FF)
      }
      if (!SF.length) return 0;
      let CF = WF.replace(/ /g, "_"),
        uF = CF + " " + SF.map((FF => FF.id)),
        hF = BW[uF];
      if (hF) return hF.id;
      let dF = BW[uF] = AF.m.define({
        id: XW.length,
        name: CF,
        props: [(0, bW.f)({
          [CF]: SF
        })]
      });
      return XW.push(dF), dF.id
    }
    hF.h.RTL, hF.h.LTR
  },
  39215: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => aW,
      d: () => NF
    });
    var CF = SF(39162),
      AF = SF(39153),
      uF = SF(39168);
    class hF {
      constructor(FF, WF, SF) {
        this.from = FF, this.to = WF, this.diagnostic = SF
      }
    }
    class bW {
      constructor(FF, WF, SF) {
        this.diagnostics = FF, this.panel = WF, this.selected = SF
      }
      static init(FF, WF, SF) {
        let uF = SF.facet(qW).markerFilter;
        uF && (FF = uF(FF, SF));
        let hF = FF.slice().sort(((FF, WF) => FF.from - WF.from || FF.to - WF.to)),
          PF = new AF.A,
          RF = [],
          iW = 0,
          eF = SF.doc.iter(),
          EF = 0,
          QF = SF.doc.length;
        for (let AF = 0;;) {
          let FF, WF, SF = AF == hF.length ? null : hF[AF];
          if (!SF && !RF.length) break;
          if (RF.length) FF = iW, WF = RF.reduce(((FF, WF) => Math.min(FF, WF.to)), SF && SF.from > FF ? SF.from : 1e8);
          else {
            if (FF = SF.from, FF > QF) break;
            WF = SF.to, RF.push(SF), AF++
          }
          for (; AF < hF.length;) {
            let SF = hF[AF];
            if (SF.from != FF || !(SF.to > SF.from || SF.to == FF)) {
              WF = Math.min(SF.from, WF);
              break
            }
            RF.push(SF), AF++, WF = Math.min(SF.to, WF)
          }
          WF = Math.min(WF, QF);
          let uF = !1;
          if (RF.some((SF => SF.from == FF && (SF.to == WF || WF == QF))) && (uF = FF == WF, !uF && WF - FF < 10)) {
            let SF = FF - (EF + eF.value.length);
            SF > 0 && (eF.next(SF), EF = FF);
            for (let CF = FF;;) {
              if (CF >= WF) {
                uF = !0;
                break
              }
              if (!eF.lineBreak && EF + eF.value.length > CF) break;
              CF = EF + eF.value.length, EF += eF.value.length, eF.next()
            }
          }
          let bW = cW(RF);
          if (uF) PF.add(FF, FF, CF.e.widget({
            widget: new mW(bW),
            diagnostics: RF.slice()
          }));
          else {
            let SF = RF.reduce(((FF, WF) => WF.markClass ? FF + " " + WF.markClass : FF), "");
            PF.add(FF, WF, CF.e.mark({
              class: "cm-lintRange cm-lintRange-" + bW + SF,
              diagnostics: RF.slice(),
              inclusiveEnd: RF.some((FF => FF.to > WF))
            }))
          }
          if (iW = WF, iW == QF) break;
          for (let CF = 0; CF < RF.length; CF++) RF[CF].to <= iW && RF.splice(CF--, 1)
        }
        let rW = PF.finish();
        return new bW(rW, WF, dF(rW))
      }
    }

    function dF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        CF = null;
      return FF.between(SF, 1e9, ((FF, SF, AF) => {
        let {
          spec: uF
        } = AF;
        if (!(WF && uF.diagnostics.indexOf(WF) < 0))
          if (CF) {
            if (uF.diagnostics.indexOf(CF.diagnostic) < 0) return !1;
            CF = new hF(CF.from, SF, CF.diagnostic)
          } else CF = new hF(FF, SF, WF || uF.diagnostics[0])
      })), CF
    }

    function PF(FF, WF) {
      let SF = WF.pos,
        CF = WF.end || SF,
        AF = FF.state.facet(qW).hideOn(FF, SF, CF);
      if (null != AF) return AF;
      let uF = FF.startState.doc.lineAt(WF.pos);
      return !(!FF.effects.some((FF => FF.is(iW))) && !FF.changes.touchesRange(uF.from, Math.max(uF.to, CF)))
    }

    function RF(FF, WF) {
      return FF.field(QF, !1) ? WF : WF.concat(AF.H.appendConfig.of(GF))
    }
    const iW = AF.H.define(),
      eF = AF.H.define(),
      EF = AF.H.define(),
      QF = AF.J.define({
        create: () => new bW(CF.e.none, null, null),
        update(FF, WF) {
          if (WF.docChanged && FF.diagnostics.size) {
            let SF = FF.diagnostics.map(WF.changes),
              CF = null,
              AF = FF.panel;
            if (FF.selected) {
              let AF = WF.changes.mapPos(FF.selected.from, 1);
              CF = dF(SF, FF.selected.diagnostic, AF) || dF(SF, null, AF)
            }!SF.size && AF && WF.state.facet(qW).autoPanel && (AF = null), FF = new bW(SF, AF, CF)
          }
          for (let SF of WF.effects)
            if (SF.is(iW)) {
              let CF = WF.state.facet(qW).autoPanel ? SF.value.length ? xW.open : null : FF.panel;
              FF = bW.init(SF.value, CF, WF.state)
            } else SF.is(eF) ? FF = new bW(FF.diagnostics, SF.value ? xW.open : null, FF.selected) : SF.is(EF) && (FF = new bW(FF.diagnostics, FF.panel, SF.value));
          return FF
        },
        provide: FF => [CF.rb.from(FF, (FF => FF.panel)), CF.k.Iu.from(FF, (FF => FF.diagnostics))]
      });
    const rW = CF.e.mark({
      class: "cm-lintRange cm-lintRange-active"
    });

    function gW(FF, WF, SF) {
      let CF, {
          diagnostics: AF
        } = FF.state.field(QF),
        uF = -1,
        hF = -1;
      AF.between(WF - (SF < 0 ? 1 : 0), WF + (SF > 0 ? 1 : 0), ((FF, AF, bW) => {
        let {
          spec: dF
        } = bW;
        if (WF >= FF && WF <= AF && (FF == AF || (WF > FF || SF > 0) && (WF < AF || SF < 0))) return CF = dF.diagnostics, uF = FF, hF = AF, !1
      }));
      let bW = FF.state.facet(qW).tooltipFilter;
      return CF && bW && (CF = bW(CF, FF.state)), CF ? {
        pos: uF,
        end: hF,
        above: FF.state.doc.lineAt(uF).to < hF,
        create: () => ({
          dom: tW(FF, CF)
        })
      } : null
    }

    function tW(FF, WF) {
      return (0, uF.c)("ul", {
        class: "cm-tooltip-lint"
      }, WF.map((WF => LF(FF, WF, !1))))
    }
    const TF = FF => {
        let WF = FF.state.field(QF, !1);
        return !(!WF || !WF.panel) && (FF.dispatch({
          effects: eF.of(!1)
        }), !0)
      },
      aW = [{
        key: "Mod-Shift-m",
        run: FF => {
          let WF = FF.state.field(QF, !1);
          WF && WF.panel || FF.dispatch({
            effects: RF(FF.state, [eF.of(!0)])
          });
          let SF = (0, CF.F)(FF, xW.open);
          return SF && SF.dom.querySelector(".cm-panel-lint ul").focus(), !0
        },
        preventDefault: !0
      }, {
        key: "F8",
        run: FF => {
          let WF = FF.state.field(QF, !1);
          if (!WF) return !1;
          let SF = FF.state.selection.main,
            CF = dF(WF.diagnostics, null, SF.to + 1);
          return !(!CF && (CF = dF(WF.diagnostics, null, 0), !CF || CF.from == SF.from && CF.to == SF.to)) && (FF.dispatch({
            selection: {
              anchor: CF.from,
              head: CF.to
            },
            scrollIntoView: !0
          }), !0)
        }
      }],
      kW = CF.o.fromClass(class {
        constructor(FF) {
          this.view = FF, this.timeout = -1, this.set = !0;
          let {
            delay: WF
          } = FF.state.facet(qW);
          this.lintTime = Date.now() + WF, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, WF)
        }
        run() {
          clearTimeout(this.timeout);
          let FF = Date.now();
          if (FF < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - FF);
          else {
            this.set = !1;
            let {
              state: FF
            } = this.view, {
              sources: WF
            } = FF.facet(qW);
            WF.length && function(FF, WF, SF) {
              let CF = [],
                AF = -1;
              for (let uF of FF) uF.then((SF => {
                CF.push(SF), clearTimeout(AF), CF.length == FF.length ? WF(CF) : AF = setTimeout((() => WF(CF)), 200)
              }), SF)
            }(WF.map((FF => Promise.resolve(FF(this.view)))), (WF => {
              this.view.state.doc == FF.doc && this.view.dispatch(function(FF, WF) {
                return {
                  effects: RF(FF, [iW.of(WF)])
                }
              }(this.view.state, WF.reduce(((FF, WF) => FF.concat(WF)))))
            }), (FF => {
              (0, CF.ab)(this.view.state, FF)
            }))
          }
        }
        update(FF) {
          let WF = FF.state.facet(qW);
          (FF.docChanged || WF != FF.startState.facet(qW) || WF.needsRefresh && WF.needsRefresh(FF)) && (this.lintTime = Date.now() + WF.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, WF.delay)))
        }
        force() {
          this.set && (this.lintTime = Date.now(), this.run())
        }
        destroy() {
          clearTimeout(this.timeout)
        }
      });
    const qW = AF.t.define({
      combine: FF => ({
        sources: FF.map((FF => FF.source)).filter((FF => null != FF)),
        ...(0, AF.Y)(FF.map((FF => FF.config)), {
          delay: 750,
          markerFilter: null,
          tooltipFilter: null,
          needsRefresh: null,
          hideOn: () => null
        }, {
          delay: Math.max,
          markerFilter: VF,
          tooltipFilter: VF,
          needsRefresh: (FF, WF) => FF ? WF ? SF => FF(SF) || WF(SF) : FF : WF,
          hideOn: (FF, WF) => FF ? WF ? (SF, CF, AF) => FF(SF, CF, AF) || WF(SF, CF, AF) : FF : WF,
          autoPanel: (FF, WF) => FF || WF
        })
      })
    });

    function VF(FF, WF) {
      return FF ? WF ? (SF, CF) => WF(FF(SF, CF), CF) : FF : WF
    }

    function NF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return [qW.of({
        source: FF,
        config: WF
      }), kW, GF]
    }

    function DF(FF) {
      let WF = [];
      if (FF) FF: for (let {
          name: SF
        }
        of FF) {
        for (let FF = 0; FF < SF.length; FF++) {
          let CF = SF[FF];
          if (/[a-zA-Z]/.test(CF) && !WF.some((FF => FF.toLowerCase() == CF.toLowerCase()))) {
            WF.push(CF);
            continue FF
          }
        }
        WF.push("")
      }
      return WF
    }

    function LF(FF, WF, SF) {
      var CF;
      let AF = SF ? DF(WF.actions) : [];
      return (0, uF.c)("li", {
        class: "cm-diagnostic cm-diagnostic-" + WF.severity
      }, (0, uF.c)("span", {
        class: "cm-diagnosticText"
      }, WF.renderMessage ? WF.renderMessage(FF) : WF.message), null === (CF = WF.actions) || void 0 === CF ? void 0 : CF.map(((SF, CF) => {
        let hF = !1,
          bW = CF => {
            if (CF.preventDefault(), hF) return;
            hF = !0;
            let AF = dF(FF.state.field(QF).diagnostics, WF);
            AF && SF.apply(FF, AF.from, AF.to)
          },
          {
            name: PF
          } = SF,
          RF = AF[CF] ? PF.indexOf(AF[CF]) : -1,
          iW = RF < 0 ? PF : [PF.slice(0, RF), (0, uF.c)("u", PF.slice(RF, RF + 1)), PF.slice(RF + 1)],
          eF = SF.markClass ? " " + SF.markClass : "";
        return (0, uF.c)("button", {
          type: "button",
          class: "cm-diagnosticAction" + eF,
          onclick: bW,
          onmousedown: bW,
          "aria-label": ` Action: ${PF}${RF<0?"":` (access key "${AF[CF]})"`}.`
        }, iW)
      })), WF.source && (0, uF.c)("div", {
        class: "cm-diagnosticSource"
      }, WF.source))
    }
    class mW extends CF.s {
      constructor(FF) {
        super(), this.sev = FF
      }
      eq(FF) {
        return FF.sev == this.sev
      }
      toDOM() {
        return (0, uF.c)("span", {
          class: "cm-lintPoint cm-lintPoint-" + this.sev
        })
      }
    }
    class OF {
      constructor(FF, WF) {
        this.diagnostic = WF, this.id = "item_" + Math.floor(4294967295 * Math.random()).toString(16), this.dom = LF(FF, WF, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option")
      }
    }
    class xW {
      constructor(FF) {
        this.view = FF, this.items = [];
        this.list = (0, uF.c)("ul", {
          tabIndex: 0,
          role: "listbox",
          "aria-label": this.view.state.phrase("Diagnostics"),
          onkeydown: WF => {
            if (!(WF.ctrlKey || WF.altKey || WF.metaKey)) {
              if (27 == WF.keyCode) TF(this.view), this.view.focus();
              else if (38 == WF.keyCode || 33 == WF.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
              else if (40 == WF.keyCode || 34 == WF.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);
              else if (36 == WF.keyCode) this.moveSelection(0);
              else if (35 == WF.keyCode) this.moveSelection(this.items.length - 1);
              else if (13 == WF.keyCode) this.view.focus();
              else {
                if (!(WF.keyCode >= 65 && WF.keyCode <= 90 && this.selectedIndex >= 0)) return;
                {
                  let {
                    diagnostic: SF
                  } = this.items[this.selectedIndex], CF = DF(SF.actions);
                  for (let AF = 0; AF < CF.length; AF++)
                    if (CF[AF].toUpperCase().charCodeAt(0) == WF.keyCode) {
                      let WF = dF(this.view.state.field(QF).diagnostics, SF);
                      WF && SF.actions[AF].apply(FF, WF.from, WF.to)
                    }
                }
              }
              WF.preventDefault()
            }
          },
          onclick: FF => {
            for (let WF = 0; WF < this.items.length; WF++) this.items[WF].dom.contains(FF.target) && this.moveSelection(WF)
          }
        }), this.dom = (0, uF.c)("div", {
          class: "cm-panel-lint"
        }, this.list, (0, uF.c)("button", {
          type: "button",
          name: "close",
          "aria-label": this.view.state.phrase("close"),
          onclick: () => TF(this.view)
        }, "\xd7")), this.update()
      }
      get selectedIndex() {
        let FF = this.view.state.field(QF).selected;
        if (!FF) return -1;
        for (let WF = 0; WF < this.items.length; WF++)
          if (this.items[WF].diagnostic == FF.diagnostic) return WF;
        return -1
      }
      update() {
        let {
          diagnostics: FF,
          selected: WF
        } = this.view.state.field(QF), SF = 0, CF = !1, AF = null, uF = new Set;
        for (FF.between(0, this.view.state.doc.length, ((FF, hF, bW) => {
            let {
              spec: dF
            } = bW;
            for (let PF of dF.diagnostics) {
              if (uF.has(PF)) continue;
              uF.add(PF);
              let FF, hF = -1;
              for (let WF = SF; WF < this.items.length; WF++)
                if (this.items[WF].diagnostic == PF) {
                  hF = WF;
                  break
                } hF < 0 ? (FF = new OF(this.view, PF), this.items.splice(SF, 0, FF), CF = !0) : (FF = this.items[hF], hF > SF && (this.items.splice(SF, hF - SF), CF = !0)), WF && FF.diagnostic == WF.diagnostic ? FF.dom.hasAttribute("aria-selected") || (FF.dom.setAttribute("aria-selected", "true"), AF = FF) : FF.dom.hasAttribute("aria-selected") && FF.dom.removeAttribute("aria-selected"), SF++
            }
          })); SF < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) CF = !0, this.items.pop();
        0 == this.items.length && (this.items.push(new OF(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics")
        })), CF = !0), AF ? (this.list.setAttribute("aria-activedescendant", AF.id), this.view.requestMeasure({
          key: this,
          read: () => ({
            sel: AF.dom.getBoundingClientRect(),
            panel: this.list.getBoundingClientRect()
          }),
          write: FF => {
            let {
              sel: WF,
              panel: SF
            } = FF, CF = SF.height / this.list.offsetHeight;
            WF.top < SF.top ? this.list.scrollTop -= (SF.top - WF.top) / CF : WF.bottom > SF.bottom && (this.list.scrollTop += (WF.bottom - SF.bottom) / CF)
          }
        })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), CF && this.sync()
      }
      sync() {
        let FF = this.list.firstChild;

        function WF() {
          let WF = FF;
          FF = WF.nextSibling, WF.remove()
        }
        for (let SF of this.items)
          if (SF.dom.parentNode == this.list) {
            for (; FF != SF.dom;) WF();
            FF = SF.dom.nextSibling
          } else this.list.insertBefore(SF.dom, FF);
        for (; FF;) WF()
      }
      moveSelection(FF) {
        if (this.selectedIndex < 0) return;
        let WF = dF(this.view.state.field(QF).diagnostics, this.items[FF].diagnostic);
        WF && this.view.dispatch({
          selection: {
            anchor: WF.from,
            head: WF.to
          },
          scrollIntoView: !0,
          effects: EF.of(WF)
        })
      }
      static open(FF) {
        return new xW(FF)
      }
    }

    function ZF(FF) {
      return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${arguments.length>1&&void 0!==arguments[1]?arguments[1]:'viewBox="0 0 40 40"'}>${encodeURIComponent(FF)}</svg>')`
    }

    function oF(FF) {
      return ZF(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${FF}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"')
    }
    const YF = CF.k.baseTheme({
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
        backgroundImage: oF("#d11")
      },
      ".cm-lintRange-warning": {
        backgroundImage: oF("orange")
      },
      ".cm-lintRange-info": {
        backgroundImage: oF("#999")
      },
      ".cm-lintRange-hint": {
        backgroundImage: oF("#66d")
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

    function MF(FF) {
      return "error" == FF ? 4 : "warning" == FF ? 3 : "info" == FF ? 2 : 1
    }

    function cW(FF) {
      let WF = "hint",
        SF = 1;
      for (let CF of FF) {
        let FF = MF(CF.severity);
        FF > SF && (SF = FF, WF = CF.severity)
      }
      return WF
    }
    CF.m;
    const GF = [QF, CF.k.Iu.compute([QF], (FF => {
      let {
        selected: WF,
        panel: SF
      } = FF.field(QF);
      return WF && SF && WF.from != WF.to ? CF.e.set([rW.range(WF.from, WF.to)]) : CF.e.none
    })), (0, CF.Q)(gW, {
      hideOn: PF
    }), YF]
  },
  39211: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => pF,
      d: () => tW,
      h: () => lF
    });
    var CF = SF(39162),
      AF = SF(39153),
      uF = SF(39168);
    const hF = "function" == typeof String.prototype.normalize ? FF => FF.normalize("NFKD") : FF => FF;
    class bW {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FF.length,
          AF = arguments.length > 4 ? arguments[4] : void 0,
          uF = arguments.length > 5 ? arguments[5] : void 0;
        this.test = uF, this.value = {
          from: 0,
          to: 0
        }, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = FF.iterRange(SF, CF), this.bufferStart = SF, this.normalize = AF ? FF => AF(hF(FF)) : hF, this.query = this.normalize(WF)
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
          this.bufferPos = 0, this.buffer = this.iter.value
        }
        return (0, AF.S)(this.buffer, this.bufferPos)
      }
      next() {
        for (; this.matches.length;) this.matches.pop();
        return this.nextOverlapping()
      }
      nextOverlapping() {
        for (;;) {
          let FF = this.peek();
          if (FF < 0) return this.done = !0, this;
          let WF = (0, AF.fb)(FF),
            SF = this.bufferStart + this.bufferPos;
          this.bufferPos += (0, AF.W)(FF);
          let CF = this.normalize(WF);
          if (CF.length)
            for (let AF = 0, uF = SF;; AF++) {
              let FF = CF.charCodeAt(AF),
                hF = this.match(FF, uF, this.bufferPos + this.bufferStart);
              if (AF == CF.length - 1) {
                if (hF) return this.value = hF, this;
                break
              }
              uF == SF && AF < WF.length && WF.charCodeAt(AF) == FF && uF++
            }
        }
      }
      match(FF, WF, SF) {
        let CF = null;
        for (let AF = 0; AF < this.matches.length; AF += 2) {
          let WF = this.matches[AF],
            uF = !1;
          this.query.charCodeAt(WF) == FF && (WF == this.query.length - 1 ? CF = {
            from: this.matches[AF + 1],
            to: SF
          } : (this.matches[AF]++, uF = !0)), uF || (this.matches.splice(AF, 2), AF -= 2)
        }
        return this.query.charCodeAt(0) == FF && (1 == this.query.length ? CF = {
          from: WF,
          to: SF
        } : this.matches.push(1, WF)), CF && this.test && !this.test(CF.from, CF.to, this.buffer, this.bufferStart) && (CF = null), CF
      }
    }
    "undefined" != typeof Symbol && (bW.prototype[Symbol.iterator] = function() {
      return this
    });
    const dF = {
        from: -1,
        to: -1,
        match: /.*/.exec("")
      },
      PF = "gm" + (null == /x/.unicode ? "" : "u");
    class RF {
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : FF.length;
        if (this.text = FF, this.to = AF, this.curLine = "", this.done = !1, this.value = dF, /\\[sWDnr]|\n|\r|\[\^/.test(WF)) return new EF(FF, WF, SF, CF, AF);
        this.re = new RegExp(WF, PF + ((null === SF || void 0 === SF ? void 0 : SF.ignoreCase) ? "i" : "")), this.test = null === SF || void 0 === SF ? void 0 : SF.test, this.iter = FF.iter();
        let uF = FF.lineAt(CF);
        this.curLineStart = uF.from, this.matchPos = QF(FF, CF), this.getLine(this.curLineStart)
      }
      getLine(FF) {
        this.iter.next(FF), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next())
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0)
      }
      next() {
        for (let FF = this.matchPos - this.curLineStart;;) {
          this.re.lastIndex = FF;
          let WF = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (WF) {
            let SF = this.curLineStart + WF.index,
              CF = SF + WF[0].length;
            if (this.matchPos = QF(this.text, CF + (SF == CF ? 1 : 0)), SF == this.curLineStart + this.curLine.length && this.nextLine(), (SF < CF || SF > this.value.to) && (!this.test || this.test(SF, CF, WF))) return this.value = {
              from: SF,
              to: CF,
              match: WF
            }, this;
            FF = this.matchPos - this.curLineStart
          } else {
            if (!(this.curLineStart + this.curLine.length < this.to)) return this.done = !0, this;
            this.nextLine(), FF = 0
          }
        }
      }
    }
    const iW = new WeakMap;
    class eF {
      constructor(FF, WF) {
        this.from = FF, this.text = WF
      }
      get to() {
        return this.from + this.text.length
      }
      static get(FF, WF, SF) {
        let CF = iW.get(FF);
        if (!CF || CF.from >= SF || CF.to <= WF) {
          let CF = new eF(WF, FF.sliceString(WF, SF));
          return iW.set(FF, CF), CF
        }
        if (CF.from == WF && CF.to == SF) return CF;
        let {
          text: AF,
          from: uF
        } = CF;
        return uF > WF && (AF = FF.sliceString(WF, uF) + AF, uF = WF), CF.to < SF && (AF += FF.sliceString(CF.to, SF)), iW.set(FF, new eF(uF, AF)), new eF(WF, AF.slice(WF - uF, SF - uF))
      }
    }
    class EF {
      constructor(FF, WF, SF, CF, AF) {
        this.text = FF, this.to = AF, this.done = !1, this.value = dF, this.matchPos = QF(FF, CF), this.re = new RegExp(WF, PF + ((null === SF || void 0 === SF ? void 0 : SF.ignoreCase) ? "i" : "")), this.test = null === SF || void 0 === SF ? void 0 : SF.test, this.flat = eF.get(FF, CF, this.chunkEnd(CF + 5e3))
      }
      chunkEnd(FF) {
        return FF >= this.to ? this.to : this.text.lineAt(FF).to
      }
      next() {
        for (;;) {
          let FF = this.re.lastIndex = this.matchPos - this.flat.from,
            WF = this.re.exec(this.flat.text);
          if (WF && !WF[0] && WF.index == FF && (this.re.lastIndex = FF + 1, WF = this.re.exec(this.flat.text)), WF) {
            let FF = this.flat.from + WF.index,
              SF = FF + WF[0].length;
            if ((this.flat.to >= this.to || WF.index + WF[0].length <= this.flat.text.length - 10) && (!this.test || this.test(FF, SF, WF))) return this.value = {
              from: FF,
              to: SF,
              match: WF
            }, this.matchPos = QF(this.text, SF + (FF == SF ? 1 : 0)), this
          }
          if (this.flat.to == this.to) return this.done = !0, this;
          this.flat = eF.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + 2 * this.flat.text.length))
        }
      }
    }

    function QF(FF, WF) {
      if (WF >= FF.length) return WF;
      let SF, CF = FF.lineAt(WF);
      for (; WF < CF.to && (SF = CF.text.charCodeAt(WF - CF.from)) >= 56320 && SF < 57344;) WF++;
      return WF
    }
    "undefined" != typeof Symbol && (RF.prototype[Symbol.iterator] = EF.prototype[Symbol.iterator] = function() {
      return this
    });
    const rW = {
        highlightWordAroundCursor: !1,
        minSelectionLength: 1,
        maxMatches: 100,
        wholeWords: !1
      },
      gW = AF.t.define({
        combine: FF => (0, AF.Y)(FF, rW, {
          highlightWordAroundCursor: (FF, WF) => FF || WF,
          minSelectionLength: Math.min,
          maxMatches: Math.min
        })
      });

    function tW(FF) {
      let WF = [VF, qW];
      return FF && WF.push(gW.of(FF)), WF
    }
    const TF = CF.e.mark({
        class: "cm-selectionMatch"
      }),
      aW = CF.e.mark({
        class: "cm-selectionMatch cm-selectionMatch-main"
      });

    function kW(FF, WF, SF, CF) {
      return (0 == SF || FF(WF.sliceDoc(SF - 1, SF)) != AF.l.Word) && (CF == WF.doc.length || FF(WF.sliceDoc(CF, CF + 1)) != AF.l.Word)
    }
    const qW = CF.o.fromClass(class {
        constructor(FF) {
          this.Iu = this.getDeco(FF)
        }
        update(FF) {
          (FF.selectionSet || FF.docChanged || FF.viewportChanged) && (this.Iu = this.getDeco(FF.view))
        }
        getDeco(FF) {
          let WF = FF.state.facet(gW),
            {
              state: SF
            } = FF,
            uF = SF.selection;
          if (uF.Bu.length > 1) return CF.e.none;
          let hF, dF = uF.main,
            PF = null;
          if (dF.empty) {
            if (!WF.highlightWordAroundCursor) return CF.e.none;
            let FF = SF.wordAt(dF.head);
            if (!FF) return CF.e.none;
            PF = SF.charCategorizer(dF.head), hF = SF.sliceDoc(FF.from, FF.to)
          } else {
            let FF = dF.to - dF.from;
            if (FF < WF.minSelectionLength || FF > 200) return CF.e.none;
            if (WF.wholeWords) {
              if (hF = SF.sliceDoc(dF.from, dF.to), PF = SF.charCategorizer(dF.head), !kW(PF, SF, dF.from, dF.to) || ! function(FF, WF, SF, CF) {
                  return FF(WF.sliceDoc(SF, SF + 1)) == AF.l.Word && FF(WF.sliceDoc(CF - 1, CF)) == AF.l.Word
                }(PF, SF, dF.from, dF.to)) return CF.e.none
            } else if (hF = SF.sliceDoc(dF.from, dF.to), !hF) return CF.e.none
          }
          let RF = [];
          for (let AF of FF.XuF) {
            let FF = new bW(SF.doc, hF, AF.from, AF.to);
            for (; !FF.next().done;) {
              let {
                from: AF,
                to: uF
              } = FF.value;
              if ((!PF || kW(PF, SF, AF, uF)) && (dF.empty && AF <= dF.from && uF >= dF.to ? RF.push(aW.range(AF, uF)) : (AF >= dF.to || uF <= dF.from) && RF.push(TF.range(AF, uF)), RF.length > WF.maxMatches)) return CF.e.none
            }
          }
          return CF.e.set(RF)
        }
      }, {
        Iu: FF => FF.Iu
      }),
      VF = CF.k.baseTheme({
        ".cm-selectionMatch": {
          backgroundColor: "#99ff7780"
        },
        ".cm-searchMatch .cm-selectionMatch": {
          backgroundColor: "transparent"
        }
      });
    const NF = AF.t.define({
      combine: FF => (0, AF.Y)(FF, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: FF => new FW(FF),
        scrollToMatch: FF => CF.k.scrollIntoView(FF)
      })
    });
    class DF {
      constructor(FF) {
        this.search = FF.search, this.caseSensitive = !!FF.caseSensitive, this.literal = !!FF.literal, this.regexp = !!FF.regexp, this.replace = FF.replace || "", this.valid = !!this.search && (!this.regexp || function(FF) {
          try {
            return new RegExp(FF, PF), !0
          } catch (WF) {
            return !1
          }
        }(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!FF.wholeWord, this.test = FF.test
      }
      unquote(FF) {
        return this.literal ? FF : FF.replace(/\\([nrt\\])/g, ((FF, WF) => "n" == WF ? "\n" : "r" == WF ? "\r" : "t" == WF ? "\t" : "\\"))
      }
      eq(FF) {
        return this.search == FF.search && this.replace == FF.replace && this.caseSensitive == FF.caseSensitive && this.regexp == FF.regexp && this.wholeWord == FF.wholeWord && this.test == FF.test
      }
      create() {
        return this.regexp ? new YF(this) : new OF(this)
      }
      getCursor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = FF.doc ? FF : AF.q.create({
            doc: FF
          });
        return null == SF && (SF = CF.doc.length), this.regexp ? xW(this, CF, WF, SF) : mW(this, CF, WF, SF)
      }
    }
    class LF {
      constructor(FF) {
        this.spec = FF
      }
    }

    function mW(FF, WF, SF, CF) {
      let uF;
      var hF, dF;
      return FF.wholeWord && (hF = WF.doc, dF = WF.charCategorizer(WF.selection.main.head), uF = (FF, WF, SF, CF) => ((CF > FF || CF + SF.length < WF) && (CF = Math.max(0, FF - 2), SF = hF.sliceString(CF, Math.min(hF.length, WF + 2))), (dF(ZF(SF, FF - CF)) != AF.l.Word || dF(oF(SF, FF - CF)) != AF.l.Word) && (dF(oF(SF, WF - CF)) != AF.l.Word || dF(ZF(SF, WF - CF)) != AF.l.Word))), FF.test && (uF = function(FF, WF, SF) {
        return (CF, AF, uF, hF) => {
          if (SF && !SF(CF, AF, uF, hF)) return !1;
          let bW = CF >= hF && AF <= hF + uF.length ? uF.slice(CF - hF, AF - hF) : WF.doc.sliceString(CF, AF);
          return FF(bW, WF, CF, AF)
        }
      }(FF.test, WF, uF)), new bW(WF.doc, FF.unquoted, SF, CF, FF.caseSensitive ? void 0 : FF => FF.toLowerCase(), uF)
    }
    class OF extends LF {
      constructor(FF) {
        super(FF)
      }
      nextMatch(FF, WF, SF) {
        let CF = mW(this.spec, FF, SF, FF.doc.length).nextOverlapping();
        if (CF.done) {
          let SF = Math.min(FF.doc.length, WF + this.spec.unquoted.length);
          CF = mW(this.spec, FF, 0, SF).nextOverlapping()
        }
        return CF.done || CF.value.from == WF && CF.value.to == SF ? null : CF.value
      }
      prevMatchInRange(FF, WF, SF) {
        for (let CF = SF;;) {
          let SF = Math.max(WF, CF - 1e4 - this.spec.unquoted.length),
            AF = mW(this.spec, FF, SF, CF),
            uF = null;
          for (; !AF.nextOverlapping().done;) uF = AF.value;
          if (uF) return uF;
          if (SF == WF) return null;
          CF -= 1e4
        }
      }
      prevMatch(FF, WF, SF) {
        let CF = this.prevMatchInRange(FF, 0, WF);
        return CF || (CF = this.prevMatchInRange(FF, Math.max(0, SF - this.spec.unquoted.length), FF.doc.length)), !CF || CF.from == WF && CF.to == SF ? null : CF
      }
      getReplacement(FF) {
        return this.spec.unquote(this.spec.replace)
      }
      matchAll(FF, WF) {
        let SF = mW(this.spec, FF, 0, FF.doc.length),
          CF = [];
        for (; !SF.next().done;) {
          if (CF.length >= WF) return null;
          CF.push(SF.value)
        }
        return CF
      }
      highlight(FF, WF, SF, CF) {
        let AF = mW(this.spec, FF, Math.max(0, WF - this.spec.unquoted.length), Math.min(SF + this.spec.unquoted.length, FF.doc.length));
        for (; !AF.next().done;) CF(AF.value.from, AF.value.to)
      }
    }

    function xW(FF, WF, SF, CF) {
      let uF;
      var hF;
      return FF.wholeWord && (hF = WF.charCategorizer(WF.selection.main.head), uF = (FF, WF, SF) => !SF[0].length || (hF(ZF(SF.input, SF.index)) != AF.l.Word || hF(oF(SF.input, SF.index)) != AF.l.Word) && (hF(oF(SF.input, SF.index + SF[0].length)) != AF.l.Word || hF(ZF(SF.input, SF.index + SF[0].length)) != AF.l.Word)), FF.test && (uF = function(FF, WF, SF) {
        return (CF, AF, uF) => (!SF || SF(CF, AF, uF)) && FF(uF[0], WF, CF, AF)
      }(FF.test, WF, uF)), new RF(WF.doc, FF.search, {
        ignoreCase: !FF.caseSensitive,
        test: uF
      }, SF, CF)
    }

    function ZF(FF, WF) {
      return FF.slice((0, AF.bb)(FF, WF, !1), WF)
    }

    function oF(FF, WF) {
      return FF.slice(WF, (0, AF.bb)(FF, WF))
    }
    class YF extends LF {
      nextMatch(FF, WF, SF) {
        let CF = xW(this.spec, FF, SF, FF.doc.length).next();
        return CF.done && (CF = xW(this.spec, FF, 0, WF).next()), CF.done ? null : CF.value
      }
      prevMatchInRange(FF, WF, SF) {
        for (let CF = 1;; CF++) {
          let AF = Math.max(WF, SF - 1e4 * CF),
            uF = xW(this.spec, FF, AF, SF),
            hF = null;
          for (; !uF.next().done;) hF = uF.value;
          if (hF && (AF == WF || hF.from > AF + 10)) return hF;
          if (AF == WF) return null
        }
      }
      prevMatch(FF, WF, SF) {
        return this.prevMatchInRange(FF, 0, WF) || this.prevMatchInRange(FF, SF, FF.doc.length)
      }
      getReplacement(FF) {
        return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, ((WF, SF) => {
          if ("&" == SF) return FF.match[0];
          if ("$" == SF) return "$";
          for (let CF = SF.length; CF > 0; CF--) {
            let WF = +SF.slice(0, CF);
            if (WF > 0 && WF < FF.match.length) return FF.match[WF] + SF.slice(CF)
          }
          return WF
        }))
      }
      matchAll(FF, WF) {
        let SF = xW(this.spec, FF, 0, FF.doc.length),
          CF = [];
        for (; !SF.next().done;) {
          if (CF.length >= WF) return null;
          CF.push(SF.value)
        }
        return CF
      }
      highlight(FF, WF, SF, CF) {
        let AF = xW(this.spec, FF, Math.max(0, WF - 250), Math.min(SF + 250, FF.doc.length));
        for (; !AF.next().done;) CF(AF.value.from, AF.value.to)
      }
    }
    const MF = AF.H.define(),
      cW = AF.H.define(),
      GF = AF.J.define({
        create: FF => new zW(BF(FF).create(), null),
        update(FF, WF) {
          for (let SF of WF.effects) SF.is(MF) ? FF = new zW(SF.value.create(), FF.panel) : SF.is(cW) && (FF = new zW(FF.query, SF.value ? UF : null));
          return FF
        },
        provide: FF => CF.rb.from(FF, (FF => FF.panel))
      });
    class zW {
      constructor(FF, WF) {
        this.query = FF, this.panel = WF
      }
    }
    const IF = CF.e.mark({
        class: "cm-searchMatch"
      }),
      fF = CF.e.mark({
        class: "cm-searchMatch cm-searchMatch-selected"
      }),
      yW = CF.o.fromClass(class {
        constructor(FF) {
          this.view = FF, this.Iu = this.highlight(FF.state.field(GF))
        }
        update(FF) {
          let WF = FF.state.field(GF);
          (WF != FF.startState.field(GF) || FF.docChanged || FF.selectionSet || FF.viewportChanged) && (this.Iu = this.highlight(WF))
        }
        highlight(FF) {
          let {
            query: WF,
            panel: SF
          } = FF;
          if (!SF || !WF.spec.valid) return CF.e.none;
          let {
            view: uF
          } = this, hF = new AF.A;
          for (let CF = 0, AF = uF.XuF, bW = AF.length; CF < bW; CF++) {
            let {
              from: FF,
              to: SF
            } = AF[CF];
            for (; CF < bW - 1 && SF > AF[CF + 1].from - 500;) SF = AF[++CF].to;
            WF.highlight(uF.state, FF, SF, ((FF, WF) => {
              let SF = uF.state.selection.Bu.some((SF => SF.from == FF && SF.to == WF));
              hF.add(FF, WF, SF ? fF : IF)
            }))
          }
          return hF.finish()
        }
      }, {
        Iu: FF => FF.Iu
      });

    function sF(FF) {
      return WF => {
        let SF = WF.state.field(GF, !1);
        return SF && SF.query.spec.valid ? FF(WF, SF) : JF(WF)
      }
    }
    const nF = sF(((FF, WF) => {
        let {
          query: SF
        } = WF, {
          to: CF
        } = FF.state.selection.main, uF = SF.nextMatch(FF.state, CF, CF);
        if (!uF) return !1;
        let hF = AF.m.single(uF.from, uF.to),
          bW = FF.state.facet(NF);
        return FF.dispatch({
          selection: hF,
          effects: [AW(FF, uF), bW.scrollToMatch(hF.main, FF)],
          userEvent: "select.search"
        }), vW(FF), !0
      })),
      HF = sF(((FF, WF) => {
        let {
          query: SF
        } = WF, {
          state: CF
        } = FF, {
          from: uF
        } = CF.selection.main, hF = SF.prevMatch(CF, uF, uF);
        if (!hF) return !1;
        let bW = AF.m.single(hF.from, hF.to),
          dF = FF.state.facet(NF);
        return FF.dispatch({
          selection: bW,
          effects: [AW(FF, hF), dF.scrollToMatch(bW.main, FF)],
          userEvent: "select.search"
        }), vW(FF), !0
      })),
      KF = sF(((FF, WF) => {
        let {
          query: SF
        } = WF, CF = SF.matchAll(FF.state, 1e3);
        return !(!CF || !CF.length) && (FF.dispatch({
          selection: AF.m.create(CF.map((FF => AF.m.range(FF.from, FF.to)))),
          userEvent: "select.search.matches"
        }), !0)
      })),
      wF = sF(((FF, WF) => {
        let {
          query: SF
        } = WF, {
          state: uF
        } = FF, {
          from: hF,
          to: bW
        } = uF.selection.main;
        if (uF.readOnly) return !1;
        let dF = SF.nextMatch(uF, hF, hF);
        if (!dF) return !1;
        let PF, RF, iW = dF,
          eF = [],
          EF = [];
        iW.from == hF && iW.to == bW && (RF = uF.toText(SF.getReplacement(iW)), eF.push({
          from: iW.from,
          to: iW.to,
          insert: RF
        }), iW = SF.nextMatch(uF, iW.from, iW.to), EF.push(CF.k.announce.of(uF.phrase("replaced match on line $", uF.doc.lineAt(hF).number) + ".")));
        let QF = FF.state.changes(eF);
        return iW && (PF = AF.m.single(iW.from, iW.to).map(QF), EF.push(AW(FF, iW)), EF.push(uF.facet(NF).scrollToMatch(PF.main, FF))), FF.dispatch({
          changes: QF,
          selection: PF,
          effects: EF,
          userEvent: "input.replace"
        }), !0
      })),
      XF = sF(((FF, WF) => {
        let {
          query: SF
        } = WF;
        if (FF.state.readOnly) return !1;
        let AF = SF.matchAll(FF.state, 1e9).map((FF => {
          let {
            from: WF,
            to: CF
          } = FF;
          return {
            from: WF,
            to: CF,
            insert: SF.getReplacement(FF)
          }
        }));
        if (!AF.length) return !1;
        let uF = FF.state.phrase("replaced $ matches", AF.length) + ".";
        return FF.dispatch({
          changes: AF,
          effects: CF.k.announce.of(uF),
          userEvent: "input.replace.all"
        }), !0
      }));

    function UF(FF) {
      return FF.state.facet(NF).createPanel(FF)
    }

    function BF(FF, WF) {
      var SF, CF, AF, uF, hF;
      let bW = FF.selection.main,
        dF = bW.empty || bW.to > bW.from + 100 ? "" : FF.sliceDoc(bW.from, bW.to);
      if (WF && !dF) return WF;
      let PF = FF.facet(NF);
      return new DF({
        search: (null !== (SF = null === WF || void 0 === WF ? void 0 : WF.literal) && void 0 !== SF ? SF : PF.literal) ? dF : dF.replace(/\n/g, "\\n"),
        caseSensitive: null !== (CF = null === WF || void 0 === WF ? void 0 : WF.caseSensitive) && void 0 !== CF ? CF : PF.caseSensitive,
        literal: null !== (AF = null === WF || void 0 === WF ? void 0 : WF.literal) && void 0 !== AF ? AF : PF.literal,
        regexp: null !== (uF = null === WF || void 0 === WF ? void 0 : WF.regexp) && void 0 !== uF ? uF : PF.regexp,
        wholeWord: null !== (hF = null === WF || void 0 === WF ? void 0 : WF.wholeWord) && void 0 !== hF ? hF : PF.wholeWord
      })
    }

    function jW(FF) {
      let WF = (0, CF.F)(FF, UF);
      return WF && WF.dom.querySelector("[main-field]")
    }

    function vW(FF) {
      let WF = jW(FF);
      WF && WF == FF.root.activeElement && WF.select()
    }
    const JF = FF => {
        let WF = FF.state.field(GF, !1);
        if (WF && WF.panel) {
          let SF = jW(FF);
          if (SF && SF != FF.root.activeElement) {
            let CF = BF(FF.state, WF.query.spec);
            CF.valid && FF.dispatch({
              effects: MF.of(CF)
            }), SF.focus(), SF.select()
          }
        } else FF.dispatch({
          effects: [cW.of(!0), WF ? MF.of(BF(FF.state, WF.query.spec)) : AF.H.appendConfig.of(hW)]
        });
        return !0
      },
      pF = FF => {
        let WF = FF.state.field(GF, !1);
        if (!WF || !WF.panel) return !1;
        let SF = (0, CF.F)(FF, UF);
        return SF && SF.dom.contains(FF.root.activeElement) && FF.focus(), FF.dispatch({
          effects: cW.of(!1)
        }), !0
      },
      lF = [{
        key: "Mod-f",
        run: JF,
        scope: "editor search-panel"
      }, {
        key: "F3",
        run: nF,
        shift: HF,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Mod-g",
        run: nF,
        shift: HF,
        scope: "editor search-panel",
        preventDefault: !0
      }, {
        key: "Escape",
        run: pF,
        scope: "editor search-panel"
      }, {
        key: "Mod-Shift-l",
        run: FF => {
          let {
            state: WF,
            dispatch: SF
          } = FF, CF = WF.selection;
          if (CF.Bu.length > 1 || CF.main.empty) return !1;
          let {
            from: uF,
            to: hF
          } = CF.main, dF = [], PF = 0;
          for (let RF = new bW(WF.doc, WF.sliceDoc(uF, hF)); !RF.next().done;) {
            if (dF.length > 1e3) return !1;
            RF.value.from == uF && (PF = dF.length), dF.push(AF.m.range(RF.value.from, RF.value.to))
          }
          return SF(WF.update({
            selection: AF.m.create(dF, PF),
            userEvent: "select.search.matches"
          })), !0
        }
      }, {
        key: "Mod-Alt-g",
        run: FF => {
          let {
            state: WF
          } = FF, SF = String(WF.doc.lineAt(FF.state.selection.main.head).number), {
            close: uF,
            result: hF
          } = (0, CF.pb)(FF, {
            label: WF.phrase("Go to line"),
            input: {
              type: "text",
              name: "line",
              value: SF
            },
            focus: !0,
            submitLabel: WF.phrase("go")
          });
          return hF.then((SF => {
            let hF = SF && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(SF.elements.line.value);
            if (!hF) return void FF.dispatch({
              effects: uF
            });
            let bW = WF.doc.lineAt(WF.selection.main.head),
              [, dF, PF, RF, iW] = hF,
              eF = RF ? +RF.slice(1) : 0,
              EF = PF ? +PF : bW.number;
            if (PF && iW) {
              let FF = EF / 100;
              dF && (FF = FF * ("-" == dF ? -1 : 1) + bW.number / WF.doc.lines), EF = Math.round(WF.doc.lines * FF)
            } else PF && dF && (EF = EF * ("-" == dF ? -1 : 1) + bW.number);
            let QF = WF.doc.line(Math.max(1, Math.min(WF.doc.lines, EF))),
              rW = AF.m.cursor(QF.from + Math.max(0, Math.min(eF, QF.length)));
            FF.dispatch({
              effects: [uF, CF.k.scrollIntoView(rW.from, {
                y: "center"
              })],
              selection: rW
            })
          })), !0
        }
      }, {
        key: "Mod-d",
        run: FF => {
          let {
            state: WF,
            dispatch: SF
          } = FF, {
            Bu: uF
          } = WF.selection;
          if (uF.some((FF => FF.from === FF.to))) return (FF => {
            let {
              state: WF,
              dispatch: SF
            } = FF, {
              selection: CF
            } = WF, uF = AF.m.create(CF.Bu.map((FF => WF.wordAt(FF.head) || AF.m.cursor(FF.head))), CF.mainIndex);
            return !uF.eq(CF) && (SF(WF.update({
              selection: uF
            })), !0)
          })({
            state: WF,
            dispatch: SF
          });
          let hF = WF.sliceDoc(uF[0].from, uF[0].to);
          if (WF.selection.Bu.some((FF => WF.sliceDoc(FF.from, FF.to) != hF))) return !1;
          let dF = function(FF, WF) {
            let {
              main: SF,
              Bu: CF
            } = FF.selection, AF = FF.wordAt(SF.head), uF = AF && AF.from == SF.from && AF.to == SF.to;
            for (let hF = !1, dF = new bW(FF.doc, WF, CF[CF.length - 1].to);;) {
              if (dF.next(), !dF.done) {
                if (hF && CF.some((FF => FF.from == dF.value.from))) continue;
                if (uF) {
                  let WF = FF.wordAt(dF.value.from);
                  if (!WF || WF.from != dF.value.from || WF.to != dF.value.to) continue
                }
                return dF.value
              }
              if (hF) return null;
              dF = new bW(FF.doc, WF, 0, Math.max(0, CF[CF.length - 1].from - 1)), hF = !0
            }
          }(WF, hF);
          return !!dF && (SF(WF.update({
            selection: WF.selection.addRange(AF.m.range(dF.from, dF.to), !1),
            effects: CF.k.scrollIntoView(dF.to)
          })), !0)
        },
        preventDefault: !0
      }];
    class FW {
      constructor(FF) {
        this.view = FF;
        let WF = this.query = FF.state.field(GF).query.spec;

        function SF(FF, WF, SF) {
          return (0, uF.c)("button", {
            class: "cm-button",
            name: FF,
            onclick: WF,
            type: "button"
          }, SF)
        }
        this.commit = this.commit.bind(this), this.searchField = (0, uF.c)("input", {
          value: WF.search,
          placeholder: WW(FF, "Find"),
          "aria-label": WW(FF, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.replaceField = (0, uF.c)("input", {
          value: WF.replace,
          placeholder: WW(FF, "Replace"),
          "aria-label": WW(FF, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        }), this.caseField = (0, uF.c)("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: WF.caseSensitive,
          onchange: this.commit
        }), this.reField = (0, uF.c)("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: WF.regexp,
          onchange: this.commit
        }), this.wordField = (0, uF.c)("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: WF.wholeWord,
          onchange: this.commit
        }), this.dom = (0, uF.c)("div", {
          onkeydown: FF => this.keydown(FF),
          class: "cm-search"
        }, [this.searchField, SF("next", (() => nF(FF)), [WW(FF, "next")]), SF("prev", (() => HF(FF)), [WW(FF, "previous")]), SF("select", (() => KF(FF)), [WW(FF, "all")]), (0, uF.c)("label", null, [this.caseField, WW(FF, "match case")]), (0, uF.c)("label", null, [this.reField, WW(FF, "regexp")]), (0, uF.c)("label", null, [this.wordField, WW(FF, "by word")]), ...FF.state.readOnly ? [] : [(0, uF.c)("br"), this.replaceField, SF("replace", (() => wF(FF)), [WW(FF, "replace")]), SF("replaceAll", (() => XF(FF)), [WW(FF, "replace all")])], (0, uF.c)("button", {
          name: "close",
          onclick: () => pF(FF),
          "aria-label": WW(FF, "close"),
          type: "button"
        }, ["\xd7"])])
      }
      commit() {
        let FF = new DF({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        FF.eq(this.query) || (this.query = FF, this.view.dispatch({
          effects: MF.of(FF)
        }))
      }
      keydown(FF) {
        (0, CF.lb)(this.view, FF, "search-panel") ? FF.preventDefault(): 13 == FF.keyCode && FF.target == this.searchField ? (FF.preventDefault(), (FF.shiftKey ? HF : nF)(this.view)) : 13 == FF.keyCode && FF.target == this.replaceField && (FF.preventDefault(), wF(this.view))
      }
      update(FF) {
        for (let WF of FF.transactions)
          for (let FF of WF.effects) FF.is(MF) && !FF.value.eq(this.query) && this.setQuery(FF.value)
      }
      setQuery(FF) {
        this.query = FF, this.searchField.value = FF.search, this.replaceField.value = FF.replace, this.caseField.checked = FF.caseSensitive, this.reField.checked = FF.regexp, this.wordField.checked = FF.wholeWord
      }
      mount() {
        this.searchField.select()
      }
      get pos() {
        return 80
      }
      get top() {
        return this.view.state.facet(NF).top
      }
    }

    function WW(FF, WF) {
      return FF.state.phrase(WF)
    }
    const SW = 30,
      CW = /[\s\.,:;?!]/;

    function AW(FF, WF) {
      let {
        from: SF,
        to: AF
      } = WF, uF = FF.state.doc.lineAt(SF), hF = FF.state.doc.lineAt(AF).to, bW = Math.max(uF.from, SF - SW), dF = Math.min(hF, AF + SW), PF = FF.state.sliceDoc(bW, dF);
      if (bW != uF.from)
        for (let CF = 0; CF < SW; CF++)
          if (!CW.test(PF[CF + 1]) && CW.test(PF[CF])) {
            PF = PF.slice(CF);
            break
          } if (dF != hF)
        for (let CF = PF.length - 1; CF > PF.length - SW; CF--)
          if (!CW.test(PF[CF - 1]) && CW.test(PF[CF])) {
            PF = PF.slice(0, CF);
            break
          } return CF.k.announce.of(`${FF.state.phrase("current match")}. ${PF} ${FF.state.phrase("on line")} ${uF.number}.`)
    }
    const uW = CF.k.baseTheme({
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
      hW = [GF, AF.x.low(yW), uW]
  },
  39162: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => YF,
      h: () => PW,
      k: () => LA,
      m: () => uh,
      o: () => vS,
      s: () => ZF,
      w: () => xh,
      z: () => vu,
      B: () => uu,
      F: () => vh,
      I: () => Uu,
      J: () => Rh,
      O: () => th,
      N: () => Zh,
      P: () => Eu,
      Q: () => Xu,
      U: () => cu,
      Y: () => Lh,
      ab: () => XW,
      eb: () => qh,
      ib: () => Lu,
      lb: () => IA,
      pb: () => Wh,
      rb: () => Fh,
      sb: () => yh
    });
    for (var CF = SF(39153), AF = SF(39165), uF = {
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
      }, hF = {
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
      }, bW = "undefined" != typeof navigator && /Mac/.test(navigator.platform), dF = "undefined" != typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), PF = 0; PF < 10; PF++) uF[48 + PF] = uF[96 + PF] = String(PF);
    for (PF = 1; PF <= 24; PF++) uF[PF + 111] = "F" + PF;
    for (PF = 65; PF <= 90; PF++) uF[PF] = String.fromCharCode(PF + 32), hF[PF] = String.fromCharCode(PF);
    for (var RF in uF) hF.hasOwnProperty(RF) || (hF[RF] = uF[RF]);
    var iW = SF(39168);
    let eF = "undefined" != typeof navigator ? navigator : {
        userAgent: "",
        vendor: "",
        platform: ""
      },
      EF = "undefined" != typeof document ? document : {
        documentElement: {
          style: {}
        }
      };
    const QF = /Edge\/(\d+)/.exec(eF.userAgent),
      rW = /MSIE \d/.test(eF.userAgent),
      gW = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(eF.userAgent),
      tW = !!(rW || gW || QF),
      TF = !tW && /gecko\/(\d+)/i.test(eF.userAgent),
      aW = !tW && /Chrome\/(\d+)/.exec(eF.userAgent),
      kW = "webkitFontSmoothing" in EF.documentElement.style,
      qW = !tW && /Apple Computer/.test(eF.vendor),
      VF = qW && (/Mobile\/\w+/.test(eF.userAgent) || eF.maxTouchPoints > 2);
    var NF = {
      mac: VF || /Mac/.test(eF.platform),
      windows: /Win/.test(eF.platform),
      linux: /Linux|X11/.test(eF.platform),
      ie: tW,
      ie_version: rW ? EF.documentMode || 6 : gW ? +gW[1] : QF ? +QF[1] : 0,
      gecko: TF,
      gecko_version: TF ? +(/Firefox\/(\d+)/.exec(eF.userAgent) || [0, 0])[1] : 0,
      chrome: !!aW,
      chrome_version: aW ? +aW[1] : 0,
      ios: VF,
      android: /Android\b/.test(eF.userAgent),
      webkit: kW,
      webkit_version: kW ? +(/\bAppleWebKit\/(\d+)/.exec(eF.userAgent) || [0, 0])[1] : 0,
      safari: qW,
      safari_version: qW ? +(/\bVersion\/(\d+(\.\d+)?)/.exec(eF.userAgent) || [0, 0])[1] : 0,
      tabSize: null != EF.documentElement.style.tabSize ? "tab-size" : "-moz-tab-size"
    };

    function DF(FF, WF) {
      for (let SF in FF) "class" == SF && WF.class ? WF.class += " " + FF.class : "style" == SF && WF.style ? WF.style += ";" + FF.style : WF[SF] = FF[SF];
      return WF
    }
    const LF = Object.create(null);

    function mW(FF, WF, SF) {
      if (FF == WF) return !0;
      FF || (FF = LF), WF || (WF = LF);
      let CF = Object.keys(FF),
        AF = Object.keys(WF);
      if (CF.length - (SF && CF.indexOf(SF) > -1 ? 1 : 0) != AF.length - (SF && AF.indexOf(SF) > -1 ? 1 : 0)) return !1;
      for (let uF of CF)
        if (uF != SF && (-1 == AF.indexOf(uF) || FF[uF] !== WF[uF])) return !1;
      return !0
    }

    function OF(FF, WF, SF) {
      let CF = !1;
      if (WF)
        for (let AF in WF) SF && AF in SF || (CF = !0, "style" == AF ? FF.style.cssText = "" : FF.removeAttribute(AF));
      if (SF)
        for (let AF in SF) WF && WF[AF] == SF[AF] || (CF = !0, "style" == AF ? FF.style.cssText = SF[AF] : FF.setAttribute(AF, SF[AF]));
      return CF
    }

    function xW(FF) {
      let WF = Object.create(null);
      for (let SF = 0; SF < FF.attributes.length; SF++) {
        let CF = FF.attributes[SF];
        WF[CF.name] = CF.value
      }
      return WF
    }
    class ZF {
      eq(FF) {
        return !1
      }
      updateDOM(FF, WF, SF) {
        return !1
      }
      compare(FF) {
        return this == FF || this.constructor == FF.constructor && this.eq(FF)
      }
      get estimatedHeight() {
        return -1
      }
      get lineBreaks() {
        return 0
      }
      ignoreEvent(FF) {
        return !0
      }
      coordsAt(FF, WF, SF) {
        return null
      }
      get isHidden() {
        return !1
      }
      get editable() {
        return !1
      }
      destroy(FF) {}
    }
    var oF = function(FF) {
      return FF[FF.Text = 0] = "Text", FF[FF.WidgetBefore = 1] = "WidgetBefore", FF[FF.WidgetAfter = 2] = "WidgetAfter", FF[FF.WidgetRange = 3] = "WidgetRange", FF
    }(oF || (oF = {}));
    class YF extends CF.G {
      constructor(FF, WF, SF, CF) {
        super(), this.startSide = FF, this.endSide = WF, this.widget = SF, this.spec = CF
      }
      get heightRelevant() {
        return !1
      }
      static mark(FF) {
        return new MF(FF)
      }
      static widget(FF) {
        let WF = Math.max(-1e4, Math.min(1e4, FF.side || 0)),
          SF = !!FF.block;
        return WF += SF && !FF.inlineOrder ? WF > 0 ? 3e8 : -4e8 : WF > 0 ? 1e8 : -1e8, new GF(FF, WF, WF, SF, FF.widget || null, !1)
      }
      static replace(FF) {
        let WF, SF, CF = !!FF.block;
        if (FF.isBlockGap) WF = -5e8, SF = 4e8;
        else {
          let {
            start: AF,
            end: uF
          } = zW(FF, CF);
          WF = (AF ? CF ? -3e8 : -1 : 5e8) - 1, SF = 1 + (uF ? CF ? 2e8 : 1 : -6e8)
        }
        return new GF(FF, WF, SF, CF, FF.widget || null, !0)
      }
      static line(FF) {
        return new cW(FF)
      }
      static set(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return CF.C.of(FF, WF)
      }
      hasHeight() {
        return !!this.widget && this.widget.estimatedHeight > -1
      }
    }
    YF.none = CF.C.empty;
    class MF extends YF {
      constructor(FF) {
        let {
          start: WF,
          end: SF
        } = zW(FF);
        super(WF ? -1 : 5e8, SF ? 1 : -6e8, null, FF), this.tagName = FF.tagName || "span", this.attrs = FF.class && FF.attributes ? DF(FF.attributes, {
          class: FF.class
        }) : FF.class ? {
          class: FF.class
        } : FF.attributes || LF
      }
      eq(FF) {
        return this == FF || FF instanceof MF && this.tagName == FF.tagName && mW(this.attrs, FF.attrs)
      }
      range(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF;
        if (FF >= WF) throw new RangeError("Mark decorations may not be empty");
        return super.range(FF, WF)
      }
    }
    MF.prototype.point = !1;
    class cW extends YF {
      constructor(FF) {
        super(-2e8, -2e8, null, FF)
      }
      eq(FF) {
        return FF instanceof cW && this.spec.class == FF.spec.class && mW(this.spec.attributes, FF.spec.attributes)
      }
      range(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF;
        if (WF != FF) throw new RangeError("Line decoration ranges must be zero-length");
        return super.range(FF, WF)
      }
    }
    cW.prototype.mapMode = CF.v.TrackBefore, cW.prototype.point = !0;
    class GF extends YF {
      constructor(FF, WF, SF, AF, uF, hF) {
        super(WF, SF, uF, FF), this.block = AF, this.isReplace = hF, this.mapMode = AF ? WF <= 0 ? CF.v.TrackBefore : CF.v.TrackAfter : CF.v.TrackDel
      }
      get type() {
        return this.startSide != this.endSide ? oF.WidgetRange : this.startSide <= 0 ? oF.WidgetBefore : oF.WidgetAfter
      }
      get heightRelevant() {
        return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0)
      }
      eq(FF) {
        return FF instanceof GF && (WF = this.widget, SF = FF.widget, WF == SF || !!(WF && SF && WF.compare(SF))) && this.block == FF.block && this.startSide == FF.startSide && this.endSide == FF.endSide;
        var WF, SF
      }
      range(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF;
        if (this.isReplace && (FF > WF || FF == WF && this.startSide > 0 && this.endSide <= 0)) throw new RangeError("Invalid range for replacement decoration");
        if (!this.isReplace && WF != FF) throw new RangeError("Widget decorations can only have zero-length ranges");
        return super.range(FF, WF)
      }
    }

    function zW(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          inclusiveStart: SF,
          inclusiveEnd: CF
        } = FF;
      return null == SF && (SF = FF.inclusive), null == CF && (CF = FF.inclusive), {
        start: null !== SF && void 0 !== SF ? SF : WF,
        end: null !== CF && void 0 !== CF ? CF : WF
      }
    }

    function IF(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        AF = SF.length - 1;
      AF >= 0 && SF[AF] + CF >= FF ? SF[AF] = Math.max(SF[AF], WF) : SF.push(FF, WF)
    }
    GF.prototype.point = !0;
    class fF extends CF.G {
      constructor(FF, WF) {
        super(), this.tagName = FF, this.attributes = WF
      }
      eq(FF) {
        return FF == this || FF instanceof fF && this.tagName == FF.tagName && mW(this.attributes, FF.attributes)
      }
      static create(FF) {
        return new fF(FF.tagName, FF.attributes || LF)
      }
      static set(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return CF.C.of(FF, WF)
      }
    }

    function yW(FF) {
      let WF;
      return WF = 11 == FF.nodeType ? FF.getSelection ? FF : FF.ownerDocument : FF, WF.getSelection()
    }

    function sF(FF, WF) {
      return !!WF && (FF == WF || FF.contains(1 != WF.nodeType ? WF.parentNode : WF))
    }

    function nF(FF, WF) {
      if (!WF.anchorNode) return !1;
      try {
        return sF(FF, WF.anchorNode)
      } catch (SF) {
        return !1
      }
    }

    function HF(FF) {
      return 3 == FF.nodeType ? CW(FF, 0, FF.nodeValue.length).getClientRects() : 1 == FF.nodeType ? FF.getClientRects() : []
    }

    function KF(FF, WF, SF, CF) {
      return !!SF && (UF(FF, WF, SF, CF, -1) || UF(FF, WF, SF, CF, 1))
    }

    function wF(FF) {
      for (var WF = 0;; WF++)
        if (!(FF = FF.previousSibling)) return WF
    }

    function XF(FF) {
      return 1 == FF.nodeType && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(FF.nodeName)
    }

    function UF(FF, WF, SF, CF, AF) {
      for (;;) {
        if (FF == SF && WF == CF) return !0;
        if (WF == (AF < 0 ? 0 : BF(FF))) {
          if ("DIV" == FF.nodeName) return !1;
          let SF = FF.parentNode;
          if (!SF || 1 != SF.nodeType) return !1;
          WF = wF(FF) + (AF < 0 ? 0 : 1), FF = SF
        } else {
          if (1 != FF.nodeType) return !1;
          if (1 == (FF = FF.childNodes[WF + (AF < 0 ? -1 : 0)]).nodeType && "false" == FF.contentEditable) return !1;
          WF = AF < 0 ? BF(FF) : 0
        }
      }
    }

    function BF(FF) {
      return 3 == FF.nodeType ? FF.nodeValue.length : FF.childNodes.length
    }

    function jW(FF, WF) {
      let SF = WF ? FF.left : FF.right;
      return {
        left: SF,
        right: SF,
        top: FF.top,
        bottom: FF.bottom
      }
    }

    function vW(FF) {
      let WF = FF.visualViewport;
      return WF ? {
        left: 0,
        right: WF.width,
        top: 0,
        bottom: WF.height
      } : {
        left: 0,
        right: FF.innerWidth,
        top: 0,
        bottom: FF.innerHeight
      }
    }

    function JF(FF, WF) {
      let SF = WF.width / FF.offsetWidth,
        CF = WF.height / FF.offsetHeight;
      return (SF > .995 && SF < 1.005 || !isFinite(SF) || Math.abs(WF.width - FF.offsetWidth) < 1) && (SF = 1), (CF > .995 && CF < 1.005 || !isFinite(CF) || Math.abs(WF.height - FF.offsetHeight) < 1) && (CF = 1), {
        scaleX: SF,
        scaleY: CF
      }
    }

    function pF(FF) {
      let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        SF = FF.ownerDocument,
        CF = null,
        AF = null;
      for (let uF = FF.parentNode; uF && (uF != SF.body && (WF && !CF || !AF));)
        if (1 == uF.nodeType) !AF && uF.scrollHeight > uF.clientHeight && (AF = uF), WF && !CF && uF.scrollWidth > uF.clientWidth && (CF = uF), uF = uF.assignedSlot || uF.parentNode;
        else {
          if (11 != uF.nodeType) break;
          uF = uF.host
        } return {
        x: CF,
        y: AF
      }
    }
    fF.prototype.startSide = fF.prototype.endSide = -1;
    class lF {
      constructor() {
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
      }
      eq(FF) {
        return this.anchorNode == FF.anchorNode && this.anchorOffset == FF.anchorOffset && this.focusNode == FF.focusNode && this.focusOffset == FF.focusOffset
      }
      setRange(FF) {
        let {
          anchorNode: WF,
          focusNode: SF
        } = FF;
        this.set(WF, Math.min(FF.anchorOffset, WF ? BF(WF) : 0), SF, Math.min(FF.focusOffset, SF ? BF(SF) : 0))
      }
      set(FF, WF, SF, CF) {
        this.anchorNode = FF, this.anchorOffset = WF, this.focusNode = SF, this.focusOffset = CF
      }
    }
    let FW, WW = null;

    function SW(FF) {
      if (FF.setActive) return FF.setActive();
      if (WW) return FF.focus(WW);
      let WF = [];
      for (let SF = FF; SF && (WF.push(SF, SF.scrollTop, SF.scrollLeft), SF != SF.ownerDocument); SF = SF.parentNode);
      if (FF.focus(null == WW ? {
          get preventScroll() {
            return WW = {
              preventScroll: !0
            }, !0
          }
        } : void 0), !WW) {
        WW = !1;
        for (let FF = 0; FF < WF.length;) {
          let SF = WF[FF++],
            CF = WF[FF++],
            AF = WF[FF++];
          SF.scrollTop != CF && (SF.scrollTop = CF), SF.scrollLeft != AF && (SF.scrollLeft = AF)
        }
      }
    }

    function CW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WF,
        CF = FW || (FW = document.createRange());
      return CF.setEnd(FF, SF), CF.setStart(FF, WF), CF
    }

    function AW(FF, WF, SF, CF) {
      let AF = {
        key: WF,
        code: WF,
        keyCode: SF,
        which: SF,
        cancelable: !0
      };
      CF && ({
        altKey: AF.altKey,
        ctrlKey: AF.ctrlKey,
        shiftKey: AF.shiftKey,
        metaKey: AF.metaKey
      } = CF);
      let uF = new KeyboardEvent("keydown", AF);
      uF.synthetic = !0, FF.dispatchEvent(uF);
      let hF = new KeyboardEvent("keyup", AF);
      return hF.synthetic = !0, FF.dispatchEvent(hF), uF.defaultPrevented || hF.defaultPrevented
    }

    function uW(FF) {
      return FF instanceof Window ? FF.pageYOffset > Math.max(0, FF.document.documentElement.scrollHeight - FF.innerHeight - 4) : FF.scrollTop > Math.max(1, FF.scrollHeight - FF.clientHeight - 4)
    }

    function hW(FF, WF) {
      for (let SF = FF, CF = WF;;) {
        if (3 == SF.nodeType && CF > 0) return {
          node: SF,
          offset: CF
        };
        if (1 == SF.nodeType && CF > 0) {
          if ("false" == SF.contentEditable) return null;
          SF = SF.childNodes[CF - 1], CF = BF(SF)
        } else {
          if (!SF.parentNode || XF(SF)) return null;
          CF = wF(SF), SF = SF.parentNode
        }
      }
    }

    function bS(FF, WF) {
      for (let SF = FF, CF = WF;;) {
        if (3 == SF.nodeType && CF < SF.nodeValue.length) return {
          node: SF,
          offset: CF
        };
        if (1 == SF.nodeType && CF < SF.childNodes.length) {
          if ("false" == SF.contentEditable) return null;
          SF = SF.childNodes[CF], CF = 0
        } else {
          if (!SF.parentNode || XF(SF)) return null;
          CF = wF(SF) + 1, SF = SF.parentNode
        }
      }
    }
    NF.safari && NF.safari_version >= 26 && (WW = !1);
    class dW {
      constructor(FF, WF) {
        let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.node = FF, this.offset = WF, this.precise = SF
      }
      static before(FF, WF) {
        return new dW(FF.parentNode, wF(FF), WF)
      }
      static after(FF, WF) {
        return new dW(FF.parentNode, wF(FF) + 1, WF)
      }
    }
    var PW = function(FF) {
      return FF[FF.LTR = 0] = "LTR", FF[FF.RTL = 1] = "RTL", FF
    }(PW || (PW = {}));
    const RW = PW.LTR,
      iS = PW.RTL;

    function eW(FF) {
      let WF = [];
      for (let SF = 0; SF < FF.length; SF++) WF.push(1 << +FF[SF]);
      return WF
    }
    const EW = eW("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"),
      QW = eW("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"),
      rS = Object.create(null),
      gS = [];
    for (let oh of ["()", "[]", "{}"]) {
      let FF = oh.charCodeAt(0),
        WF = oh.charCodeAt(1);
      rS[FF] = WF, rS[WF] = -FF
    }

    function tS(FF) {
      return FF <= 247 ? EW[FF] : 1424 <= FF && FF <= 1524 ? 2 : 1536 <= FF && FF <= 1785 ? QW[FF - 1536] : 1774 <= FF && FF <= 2220 ? 4 : 8192 <= FF && FF <= 8204 ? 256 : 64336 <= FF && FF <= 65023 ? 4 : 1
    }
    const TW = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
    class aS {
      get dir() {
        return this.level % 2 ? iS : RW
      }
      constructor(FF, WF, SF) {
        this.from = FF, this.to = WF, this.level = SF
      }
      side(FF, WF) {
        return this.dir == WF == FF ? this.to : this.from
      }
      forward(FF, WF) {
        return FF == (this.dir == WF)
      }
      static find(FF, WF, SF, CF) {
        let AF = -1;
        for (let uF = 0; uF < FF.length; uF++) {
          let hF = FF[uF];
          if (hF.from <= WF && hF.to >= WF) {
            if (hF.level == SF) return uF;
            (AF < 0 || (0 != CF ? CF < 0 ? hF.from < WF : hF.to > WF : FF[AF].level > hF.level)) && (AF = uF)
          }
        }
        if (AF < 0) throw new RangeError("Index out of range");
        return AF
      }
    }

    function kS(FF, WF) {
      if (FF.length != WF.length) return !1;
      for (let SF = 0; SF < FF.length; SF++) {
        let CF = FF[SF],
          AF = WF[SF];
        if (CF.from != AF.from || CF.to != AF.to || CF.direction != AF.direction || !kS(CF.inner, AF.inner)) return !1
      }
      return !0
    }
    const qS = [];

    function VW(FF, WF, SF, CF, AF, uF, hF) {
      let bW = CF % 2 ? 2 : 1;
      if (CF % 2 == AF % 2)
        for (let dF = WF, PF = 0; dF < SF;) {
          let WF = !0,
            RF = !1;
          if (PF == uF.length || dF < uF[PF].from) {
            let FF = qS[dF];
            FF != bW && (WF = !1, RF = 16 == FF)
          }
          let iW = WF || 1 != bW ? null : [],
            eF = WF ? CF : CF + 1,
            EF = dF;
          FF: for (;;)
            if (PF < uF.length && EF == uF[PF].from) {
              if (RF) break FF;
              let QF = uF[PF];
              if (!WF)
                for (let FF = QF.to, WF = PF + 1;;) {
                  if (FF == SF) break FF;
                  if (!(WF < uF.length && uF[WF].from == FF)) {
                    if (qS[FF] == bW) break FF;
                    break
                  }
                  FF = uF[WF++].to
                }
              if (PF++, iW) iW.push(QF);
              else {
                QF.from > dF && hF.push(new aS(dF, QF.from, eF)), NW(FF, QF.direction == RW != !(eF % 2) ? CF + 1 : CF, AF, QF.inner, QF.from, QF.to, hF), dF = QF.to
              }
              EF = QF.to
            } else {
              if (EF == SF || (WF ? qS[EF] != bW : qS[EF] == bW)) break;
              EF++
            } iW ? VW(FF, dF, EF, CF + 1, AF, iW, hF) : dF < EF && hF.push(new aS(dF, EF, eF)), dF = EF
        } else
          for (let dF = SF, PF = uF.length; dF > WF;) {
            let SF = !0,
              RF = !1;
            if (!PF || dF > uF[PF - 1].to) {
              let FF = qS[dF - 1];
              FF != bW && (SF = !1, RF = 16 == FF)
            }
            let iW = SF || 1 != bW ? null : [],
              eF = SF ? CF : CF + 1,
              EF = dF;
            FF: for (;;)
              if (PF && EF == uF[PF - 1].to) {
                if (RF) break FF;
                let QF = uF[--PF];
                if (!SF)
                  for (let FF = QF.from, SF = PF;;) {
                    if (FF == WF) break FF;
                    if (!SF || uF[SF - 1].to != FF) {
                      if (qS[FF - 1] == bW) break FF;
                      break
                    }
                    FF = uF[--SF].from
                  }
                if (iW) iW.push(QF);
                else {
                  QF.to < dF && hF.push(new aS(QF.to, dF, eF)), NW(FF, QF.direction == RW != !(eF % 2) ? CF + 1 : CF, AF, QF.inner, QF.from, QF.to, hF), dF = QF.from
                }
                EF = QF.from
              } else {
                if (EF == WF || (SF ? qS[EF - 1] != bW : qS[EF - 1] == bW)) break;
                EF--
              } iW ? VW(FF, EF, dF, CF + 1, AF, iW, hF) : EF < dF && hF.push(new aS(EF, dF, eF)), dF = EF
          }
    }

    function NW(FF, WF, SF, CF, AF, uF, hF) {
      let bW = WF % 2 ? 2 : 1;
      ! function(FF, WF, SF, CF, AF) {
        for (let uF = 0; uF <= CF.length; uF++) {
          let hF = uF ? CF[uF - 1].to : WF,
            bW = uF < CF.length ? CF[uF].from : SF,
            dF = uF ? 256 : AF;
          for (let WF = hF, SF = dF, CF = dF; WF < bW; WF++) {
            let AF = tS(FF.charCodeAt(WF));
            512 == AF ? AF = SF : 8 == AF && 4 == CF && (AF = 16), qS[WF] = 4 == AF ? 2 : AF, 7 & AF && (CF = AF), SF = AF
          }
          for (let FF = hF, WF = dF, CF = dF; FF < bW; FF++) {
            let AF = qS[FF];
            if (128 == AF) FF < bW - 1 && WF == qS[FF + 1] && 24 & WF ? AF = qS[FF] = WF : qS[FF] = 256;
            else if (64 == AF) {
              let AF = FF + 1;
              for (; AF < bW && 64 == qS[AF];) AF++;
              let uF = FF && 8 == WF || AF < SF && 8 == qS[AF] ? 1 == CF ? 1 : 8 : 256;
              for (let WF = FF; WF < AF; WF++) qS[WF] = uF;
              FF = AF - 1
            } else 8 == AF && 1 == CF && (qS[FF] = 1);
            WF = AF, 7 & AF && (CF = AF)
          }
        }
      }(FF, AF, uF, CF, bW),
      function(FF, WF, SF, CF, AF) {
        let uF = 1 == AF ? 2 : 1;
        for (let hF = 0, bW = 0, dF = 0; hF <= CF.length; hF++) {
          let PF = hF ? CF[hF - 1].to : WF,
            RF = hF < CF.length ? CF[hF].from : SF;
          for (let WF, SF, CF, hF = PF; hF < RF; hF++)
            if (SF = rS[WF = FF.charCodeAt(hF)])
              if (SF < 0) {
                for (let FF = bW - 3; FF >= 0; FF -= 3)
                  if (gS[FF + 1] == -SF) {
                    let WF = gS[FF + 2],
                      SF = 2 & WF ? AF : 4 & WF ? 1 & WF ? uF : AF : 0;
                    SF && (qS[hF] = qS[gS[FF]] = SF), bW = FF;
                    break
                  }
              } else {
                if (189 == gS.length) break;
                gS[bW++] = hF, gS[bW++] = WF, gS[bW++] = dF
              }
          else if (2 == (CF = qS[hF]) || 1 == CF) {
            let FF = CF == AF;
            dF = FF ? 0 : 1;
            for (let WF = bW - 3; WF >= 0; WF -= 3) {
              let SF = gS[WF + 2];
              if (2 & SF) break;
              if (FF) gS[WF + 2] |= 2;
              else {
                if (4 & SF) break;
                gS[WF + 2] |= 4
              }
            }
          }
        }
      }(FF, AF, uF, CF, bW),
      function(FF, WF, SF, CF) {
        for (let AF = 0, uF = CF; AF <= SF.length; AF++) {
          let hF = AF ? SF[AF - 1].to : FF,
            bW = AF < SF.length ? SF[AF].from : WF;
          for (let dF = hF; dF < bW;) {
            let hF = qS[dF];
            if (256 == hF) {
              let hF = dF + 1;
              for (;;)
                if (hF == bW) {
                  if (AF == SF.length) break;
                  hF = SF[AF++].to, bW = AF < SF.length ? SF[AF].from : WF
                } else {
                  if (256 != qS[hF]) break;
                  hF++
                } let PF = 1 == uF,
                RF = PF == (1 == (hF < WF ? qS[hF] : CF)) ? PF ? 1 : 2 : CF;
              for (let WF = hF, CF = AF, uF = CF ? SF[CF - 1].to : FF; WF > dF;) WF == uF && (WF = SF[--CF].from, uF = CF ? SF[CF - 1].to : FF), qS[--WF] = RF;
              dF = hF
            } else uF = hF, dF++
          }
        }
      }(AF, uF, CF, bW), VW(FF, AF, uF, WF, SF, CF, hF)
    }

    function DW(FF, WF, SF) {
      if (!FF) return [new aS(0, 0, WF == iS ? 1 : 0)];
      if (WF == RW && !SF.length && !TW.test(FF)) return LW(FF.length);
      if (SF.length)
        for (; FF.length > qS.length;) qS[qS.length] = 256;
      let CF = [],
        AF = WF == RW ? 0 : 1;
      return NW(FF, AF, AF, SF, 0, FF.length, CF), CF
    }

    function LW(FF) {
      return [new aS(0, FF, 0)]
    }
    let mS = "";

    function OW(FF, WF, SF, AF, uF) {
      var hF;
      let bW = AF.head - FF.from,
        dF = aS.find(WF, bW, null !== (hF = AF.bidiLevel) && void 0 !== hF ? hF : -1, AF.assoc),
        PF = WF[dF],
        RF = PF.side(uF, SF);
      if (bW == RF) {
        let FF = dF += uF ? 1 : -1;
        if (FF < 0 || FF >= WF.length) return null;
        PF = WF[dF = FF], bW = PF.side(!uF, SF), RF = PF.side(uF, SF)
      }
      let iW = (0, CF.bb)(FF.text, bW, PF.forward(uF, SF));
      (iW < PF.from || iW > PF.to) && (iW = RF), mS = FF.text.slice(Math.min(bW, iW), Math.max(bW, iW));
      let eF = dF == (uF ? WF.length - 1 : 0) ? null : WF[dF + (uF ? 1 : -1)];
      return eF && iW == RF && eF.level + (uF ? 0 : 1) < PF.level ? CF.m.cursor(eF.side(!uF, SF) + FF.from, eF.forward(uF, SF) ? 1 : -1, eF.level) : CF.m.cursor(iW + FF.from, PF.forward(uF, SF) ? -1 : 1, PF.level)
    }

    function xS(FF, WF, SF) {
      for (let CF = WF; CF < SF; CF++) {
        let WF = tS(FF.charCodeAt(CF));
        if (1 == WF) return RW;
        if (2 == WF || 4 == WF) return iS
      }
      return RW
    }
    const ZW = CF.t.define(),
      oW = CF.t.define(),
      YW = CF.t.define(),
      MW = CF.t.define(),
      cS = CF.t.define(),
      GW = CF.t.define(),
      zS = CF.t.define(),
      IW = CF.t.define(),
      fW = CF.t.define(),
      yS = CF.t.define({
        combine: FF => FF.some((FF => FF))
      }),
      sW = CF.t.define({
        combine: FF => FF.some((FF => FF))
      }),
      nW = CF.t.define();
    class HW {
      constructor(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.range = FF, this.y = WF, this.x = SF, this.yMargin = CF, this.xMargin = AF, this.isSnapshot = uF
      }
      map(FF) {
        return FF.empty ? this : new HW(this.range.map(FF), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
      clip(FF) {
        return this.range.to <= FF.doc.length ? this : new HW(CF.m.cursor(FF.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot)
      }
    }
    const KW = CF.H.define({
        map: (FF, WF) => FF.map(WF)
      }),
      wW = CF.H.define();

    function XW(FF, WF, SF) {
      let CF = FF.facet(MW);
      CF.length ? CF[0](WF) : window.onerror && window.onerror(String(WF), SF, void 0, void 0, WF) || (SF ? console.error(SF + ":", WF) : console.error(WF))
    }
    const UW = CF.t.define({
      combine: FF => !FF.length || FF[0]
    });
    let BW = 0;
    const jS = CF.t.define({
      combine: FF => FF.filter(((WF, SF) => {
        for (let CF = 0; CF < SF; CF++)
          if (FF[CF].plugin == WF.plugin) return !1;
        return !0
      }))
    });
    class vS {
      constructor(FF, WF, SF, CF, AF) {
        this.id = FF, this.create = WF, this.domEventHandlers = SF, this.domEventObservers = CF, this.baseExtensions = AF(this), this.extension = this.baseExtensions.concat(jS.of({
          plugin: this,
          arg: void 0
        }))
      }
      of(FF) {
        return this.baseExtensions.concat(jS.of({
          plugin: this,
          arg: FF
        }))
      }
      static define(FF, WF) {
        const {
          eventHandlers: SF,
          eventObservers: CF,
          provide: AF,
          Iu: uF
        } = WF || {};
        return new vS(BW++, FF, SF, CF, (FF => {
          let WF = [];
          return uF && WF.push(FS.of((WF => {
            let SF = WF.plugin(FF);
            return SF ? uF(SF) : YF.none
          }))), AF && WF.push(AF(FF)), WF
        }))
      }
      static fromClass(FF, WF) {
        return vS.define(((WF, SF) => new FF(WF, SF)), WF)
      }
    }
    class JW {
      constructor(FF) {
        this.spec = FF, this.mustUpdate = null, this.value = null
      }
      get plugin() {
        return this.spec && this.spec.plugin
      }
      update(FF) {
        if (this.value) {
          if (this.mustUpdate) {
            let FF = this.mustUpdate;
            if (this.mustUpdate = null, this.value.update) try {
              this.value.update(FF)
            } catch (WF) {
              if (XW(FF.state, WF, "CodeMirror plugin crashed"), this.value.destroy) try {
                this.value.destroy()
              } catch (SF) {}
              this.deactivate()
            }
          }
        } else if (this.spec) try {
          this.value = this.spec.plugin.create(FF, this.spec.arg)
        } catch (WF) {
          XW(FF.state, WF, "CodeMirror plugin crashed"), this.deactivate()
        }
        return this
      }
      destroy(FF) {
        var WF;
        if (null === (WF = this.value) || void 0 === WF ? void 0 : WF.destroy) try {
          this.value.destroy()
        } catch (SF) {
          XW(FF.state, SF, "CodeMirror plugin crashed")
        }
      }
      deactivate() {
        this.spec = this.value = null
      }
    }
    const pW = CF.t.define(),
      lW = CF.t.define(),
      FS = CF.t.define(),
      WS = CF.t.define(),
      SS = CF.t.define(),
      CS = CF.t.define(),
      AS = CF.t.define();

    function uS(FF, WF) {
      let SF = FF.state.facet(AS);
      if (!SF.length) return SF;
      let AF = SF.map((WF => WF instanceof Function ? WF(FF) : WF)),
        uF = [];
      return CF.C.spans(AF, WF.from, WF.to, {
        point() {},
        span(FF, SF, CF, AF) {
          let hF = FF - WF.from,
            bW = SF - WF.from,
            dF = uF;
          for (let uF = CF.length - 1; uF >= 0; uF--, AF--) {
            let FF, SF = CF[uF].spec.bidiIsolate;
            if (null == SF && (SF = xS(WF.text, hF, bW)), AF > 0 && dF.length && (FF = dF[dF.length - 1]).to == hF && FF.direction == SF) FF.to = bW, dF = FF.inner;
            else {
              let FF = {
                from: hF,
                to: bW,
                direction: SF,
                inner: []
              };
              dF.push(FF), dF = FF.inner
            }
          }
        }
      }), uF
    }
    const hS = CF.t.define();

    function bC(FF) {
      let WF = 0,
        SF = 0,
        CF = 0,
        AF = 0;
      for (let uF of FF.state.facet(hS)) {
        let hF = uF(FF);
        hF && (null != hF.left && (WF = Math.max(WF, hF.left)), null != hF.right && (SF = Math.max(SF, hF.right)), null != hF.top && (CF = Math.max(CF, hF.top)), null != hF.bottom && (AF = Math.max(AF, hF.bottom)))
      }
      return {
        left: WF,
        right: SF,
        top: CF,
        bottom: AF
      }
    }
    const dS = CF.t.define();
    class PS {
      constructor(FF, WF, SF, CF) {
        this.fromA = FF, this.toA = WF, this.fromB = SF, this.toB = CF
      }
      join(FF) {
        return new PS(Math.min(this.fromA, FF.fromA), Math.max(this.toA, FF.toA), Math.min(this.fromB, FF.fromB), Math.max(this.toB, FF.toB))
      }
      addToSet(FF) {
        let WF = FF.length,
          SF = this;
        for (; WF > 0; WF--) {
          let CF = FF[WF - 1];
          if (!(CF.fromA > SF.toA)) {
            if (CF.toA < SF.fromA) break;
            SF = SF.join(CF), FF.splice(WF - 1, 1)
          }
        }
        return FF.splice(WF, 0, SF), FF
      }
      static extendWithRanges(FF, WF) {
        if (0 == WF.length) return FF;
        let SF = [];
        for (let CF = 0, AF = 0, uF = 0;;) {
          let hF = CF < FF.length ? FF[CF].fromB : 1e9,
            bW = AF < WF.length ? WF[AF] : 1e9,
            dF = Math.min(hF, bW);
          if (1e9 == dF) break;
          let PF = dF + uF,
            RF = dF,
            iW = PF;
          for (;;)
            if (AF < WF.length && WF[AF] <= RF) {
              let SF = WF[AF + 1];
              AF += 2, RF = Math.max(RF, SF);
              for (let WF = CF; WF < FF.length && FF[WF].fromB <= RF; WF++) uF = FF[WF].toA - FF[WF].toB;
              iW = Math.max(iW, SF + uF)
            } else {
              if (!(CF < FF.length && FF[CF].fromB <= RF)) break;
              {
                let WF = FF[CF++];
                RF = Math.max(RF, WF.toB), iW = Math.max(iW, WF.toA), uF = WF.toA - WF.toB
              }
            } SF.push(new PS(PF, iW, dF, RF))
        }
        return SF
      }
    }
    class RS {
      constructor(FF, WF, SF) {
        this.view = FF, this.state = WF, this.transactions = SF, this.flags = 0, this.startState = FF.state, this.changes = CF.ChangeSet.empty(this.startState.doc.length);
        for (let CF of SF) this.changes = this.changes.compose(CF.changes);
        let AF = [];
        this.changes.iterChangedRanges(((FF, WF, SF, CF) => AF.push(new PS(FF, WF, SF, CF)))), this.changedRanges = AF
      }
      static create(FF, WF, SF) {
        return new RS(FF, WF, SF)
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
        return this.transactions.some((FF => FF.selection))
      }
      get empty() {
        return 0 == this.flags && 0 == this.transactions.length
      }
    }
    const iC = [];
    class eS {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.dom = FF, this.length = WF, this.flags = SF, this.parent = null, FF.cmTile = this
      }
      get breakAfter() {
        return 1 & this.flags
      }
      get children() {
        return iC
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
      sync(FF) {
        if (this.flags |= 2, 4 & this.flags) {
          this.flags &= -5;
          let FF = this.domAttrs;
          FF && function(FF, WF) {
            for (let SF = FF.attributes.length - 1; SF >= 0; SF--) {
              let CF = FF.attributes[SF].name;
              null == WF[CF] && FF.removeAttribute(CF)
            }
            for (let SF in WF) {
              let CF = WF[SF];
              "style" == SF ? FF.style.cssText = CF : FF.getAttribute(SF) != CF && FF.setAttribute(SF, CF)
            }
          }(this.dom, FF)
        }
      }
      toString() {
        return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "")
      }
      destroy() {
        this.parent = null
      }
      setDOM(FF) {
        this.dom = FF, FF.cmTile = this
      }
      get posAtStart() {
        return this.parent ? this.parent.posBefore(this) : 0
      }
      get posAtEnd() {
        return this.posAtStart + this.length
      }
      posBefore(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.posAtStart;
        for (let SF of this.children) {
          if (SF == FF) return WF;
          WF += SF.length + SF.breakAfter
        }
        throw new RangeError("Invalid child in posBefore")
      }
      posAfter(FF) {
        return this.posBefore(FF) + FF.length
      }
      covers(FF) {
        return !0
      }
      coordsIn(FF, WF) {
        return null
      }
      domPosFor(FF, WF) {
        let SF = wF(this.dom),
          CF = this.length ? FF > 0 : WF > 0;
        return new dW(this.parent.dom, SF + (CF ? 1 : 0), 0 == FF || FF == this.length)
      }
      markDirty(FF) {
        this.flags &= -3, FF && (this.flags |= 4), this.parent && 2 & this.parent.flags && this.parent.markDirty(!1)
      }
      get overrideDOMText() {
        return null
      }
      get root() {
        for (let FF = this; FF; FF = FF.parent)
          if (FF instanceof rC) return FF;
        return null
      }
      static get(FF) {
        return FF.cmTile
      }
    }
    class ES extends eS {
      constructor(FF) {
        super(FF, 0), this._children = []
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
      append(FF) {
        this.children.push(FF), FF.parent = this
      }
      sync(FF) {
        if (2 & this.flags) return;
        super.sync(FF);
        let WF, SF = this.dom,
          CF = null,
          AF = (null === FF || void 0 === FF ? void 0 : FF.node) == SF ? FF : null,
          uF = 0;
        for (let hF of this.children) {
          if (hF.sync(FF), uF += hF.length + hF.breakAfter, WF = CF ? CF.nextSibling : SF.firstChild, AF && WF != hF.dom && (AF.written = !0), hF.dom.parentNode == SF)
            for (; WF && WF != hF.dom;) WF = QS(WF);
          else SF.insertBefore(hF.dom, WF);
          CF = hF.dom
        }
        for (WF = CF ? CF.nextSibling : SF.firstChild, AF && WF && (AF.written = !0); WF;) WF = QS(WF);
        this.length = uF
      }
    }

    function QS(FF) {
      let WF = FF.nextSibling;
      return FF.parentNode.removeChild(FF), WF
    }
    class rC extends ES {
      constructor(FF, WF) {
        super(WF), this.view = FF
      }
      owns(FF) {
        for (; FF; FF = FF.parent)
          if (FF == this) return !0;
        return !1
      }
      isBlock() {
        return !0
      }
      nearest(FF) {
        for (;;) {
          if (!FF) return null;
          let WF = eS.get(FF);
          if (WF && this.owns(WF)) return WF;
          FF = FF.parentNode
        }
      }
      blockTiles(FF) {
        for (let WF = [], SF = this, CF = 0, AF = 0;;)
          if (CF == SF.children.length) {
            if (!WF.length) return;
            SF = SF.parent, SF.breakAfter && AF++, CF = WF.pop()
          } else {
            let uF = SF.children[CF++];
            if (uF instanceof gC) WF.push(CF), SF = uF, CF = 0;
            else {
              let WF = AF + uF.length,
                SF = FF(uF, AF);
              if (void 0 !== SF) return SF;
              AF = WF + uF.breakAfter
            }
          }
      }
      resolveBlock(FF, WF) {
        let SF, CF, AF = -1,
          uF = -1;
        if (this.blockTiles(((hF, bW) => {
            let dF = bW + hF.length;
            if (FF >= bW && FF <= dF) {
              if (hF.isWidget() && WF >= -1 && WF <= 1) {
                if (32 & hF.flags) return !0;
                16 & hF.flags && (SF = void 0)
              }(bW < FF || FF == dF && (WF < -1 ? hF.length : hF.covers(1))) && (!SF || !hF.isWidget() && SF.isWidget()) && (SF = hF, AF = FF - bW), (dF > FF || FF == bW && (WF > 1 ? hF.length : hF.covers(-1))) && (!CF || !hF.isWidget() && CF.isWidget()) && (CF = hF, uF = FF - bW)
            }
          })), !SF && !CF) throw new Error("No tile at position " + FF);
        return SF && WF < 0 || !CF ? {
          tile: SF,
          offset: AF
        } : {
          tile: CF,
          offset: uF
        }
      }
    }
    class gC extends ES {
      constructor(FF, WF) {
        super(FF), this.wrapper = WF
      }
      isBlock() {
        return !0
      }
      covers(FF) {
        return !!this.children.length && (FF < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1))
      }
      get domAttrs() {
        return this.wrapper.attributes
      }
      static of (FF, WF) {
        let SF = new gC(WF || document.createElement(FF.tagName), FF);
        return WF || (SF.flags |= 4), SF
      }
    }
    class tC extends ES {
      constructor(FF, WF) {
        super(FF), this.attrs = WF
      }
      isLine() {
        return !0
      }
      static start(FF, WF, SF) {
        let CF = new tC(WF || document.createElement("div"), FF);
        return WF && SF || (CF.flags |= 4), CF
      }
      get domAttrs() {
        return this.attrs
      }
      resolveInline(FF, WF, SF) {
        let CF = null,
          AF = -1,
          uF = null,
          hF = -1;
        ! function FF(bW, dF) {
          for (let PF = 0, RF = 0; PF < bW.children.length && RF <= dF; PF++) {
            let iW = bW.children[PF],
              eF = RF + iW.length;
            eF >= dF && (iW.isComposite() ? FF(iW, dF - RF) : (!uF || uF.isHidden && (WF > 0 || SF && TS(uF, iW))) && (eF > dF || 32 & iW.flags) ? (uF = iW, hF = dF - RF) : (RF < dF || 16 & iW.flags && !iW.isHidden) && (CF = iW, AF = dF - RF)), RF = eF
          }
        }(this, FF);
        let bW = (WF < 0 ? CF : uF) || CF || uF;
        return bW ? {
          tile: bW,
          offset: bW == CF ? AF : hF
        } : null
      }
      coordsIn(FF, WF) {
        let SF = this.resolveInline(FF, WF, !0);
        return SF ? SF.tile.coordsIn(Math.max(0, SF.offset), WF) : function(FF) {
          let WF = FF.dom.lastChild;
          if (!WF) return FF.dom.getBoundingClientRect();
          let SF = HF(WF);
          return SF[SF.length - 1] || null
        }(this)
      }
      domIn(FF, WF) {
        let SF = this.resolveInline(FF, WF);
        if (SF) {
          let {
            tile: FF,
            offset: CF
          } = SF;
          if (this.dom.contains(FF.dom)) return FF.isText() ? new dW(FF.dom, Math.min(FF.dom.nodeValue.length, CF)) : FF.domPosFor(CF, 16 & FF.flags ? 1 : 32 & FF.flags ? -1 : WF);
          let AF = SF.tile.parent,
            uF = !1;
          for (let WF of AF.children) {
            if (uF) return new dW(WF.dom, 0);
            WF == SF.tile && (uF = !0)
          }
        }
        return new dW(this.dom, 0)
      }
    }

    function TS(FF, WF) {
      let SF = FF.coordsIn(0, 1),
        CF = WF.coordsIn(0, 1);
      return SF && CF && CF.top < SF.bottom
    }
    class aC extends ES {
      constructor(FF, WF) {
        super(FF), this.mark = WF
      }
      get domAttrs() {
        return this.mark.attrs
      }
      static of (FF, WF) {
        let SF = new aC(WF || document.createElement(FF.tagName), FF);
        return WF || (SF.flags |= 4), SF
      }
    }
    class kC extends eS {
      constructor(FF, WF) {
        super(FF, WF.length), this.text = WF
      }
      sync(FF) {
        2 & this.flags || (super.sync(FF), this.dom.nodeValue != this.text && (FF && FF.node == this.dom && (FF.written = !0), this.dom.nodeValue = this.text))
      }
      isText() {
        return !0
      }
      toString() {
        return JSON.stringify(this.text)
      }
      coordsIn(FF, WF) {
        let SF = this.dom.nodeValue.length;
        FF > SF && (FF = SF);
        let CF = FF,
          AF = FF,
          uF = 0;
        0 == FF && WF < 0 || FF == SF && WF >= 0 ? NF.chrome || NF.gecko || (FF ? (CF--, uF = 1) : AF < SF && (AF++, uF = -1)) : WF < 0 ? CF-- : AF < SF && AF++;
        let hF = CW(this.dom, CF, AF).getClientRects();
        if (!hF.length) return null;
        let bW = hF[(uF ? uF < 0 : WF >= 0) ? 0 : hF.length - 1];
        return NF.safari && !uF && 0 == bW.width && (bW = Array.prototype.find.call(hF, (FF => FF.width)) || bW), uF ? jW(bW, uF < 0) : bW || null
      }
      static of (FF, WF) {
        let SF = new kC(WF || document.createTextNode(FF), FF);
        return WF || (SF.flags |= 2), SF
      }
    }
    class qC extends eS {
      constructor(FF, WF, SF, CF) {
        super(FF, WF, CF), this.widget = SF
      }
      isWidget() {
        return !0
      }
      get isHidden() {
        return this.widget.isHidden
      }
      covers(FF) {
        return !(48 & this.flags) && (this.flags & (FF < 0 ? 64 : 128)) > 0
      }
      coordsIn(FF, WF) {
        return this.coordsInWidget(FF, WF, !1)
      }
      coordsInWidget(FF, WF, SF) {
        let CF = this.widget.coordsAt(this.dom, FF, WF);
        if (CF) return CF;
        if (SF) return jW(this.dom.getBoundingClientRect(), this.length ? 0 == FF : WF <= 0);
        {
          let WF = this.dom.getClientRects(),
            SF = null;
          if (!WF.length) return null;
          let CF = !!(16 & this.flags) || !(32 & this.flags) && FF > 0;
          for (let AF = CF ? WF.length - 1 : 0; SF = WF[AF], !(FF > 0 ? 0 == AF : AF == WF.length - 1 || SF.top < SF.bottom); AF += CF ? -1 : 1);
          return jW(SF, !CF)
        }
      }
      get overrideDOMText() {
        if (!this.length) return CF.L.empty;
        let {
          root: FF
        } = this;
        if (!FF) return CF.L.empty;
        let WF = this.posAtStart;
        return FF.view.state.doc.slice(WF, WF + this.length)
      }
      destroy() {
        super.destroy(), this.widget.destroy(this.dom)
      }
      static of (FF, WF, SF, CF, AF) {
        return AF || (AF = FF.toDOM(WF), FF.editable || (AF.contentEditable = "false")), new qC(AF, SF, FF, CF)
      }
    }
    class VS extends eS {
      constructor(FF) {
        let WF = document.createElement("img");
        WF.className = "cm-widgetBuffer", WF.setAttribute("aria-hidden", "true"), super(WF, 0, FF)
      }
      get isHidden() {
        return !0
      }
      get overrideDOMText() {
        return CF.L.empty
      }
      coordsIn(FF) {
        return this.dom.getBoundingClientRect()
      }
    }
    class NS {
      constructor(FF) {
        this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = FF
      }
      advance(FF, WF, SF) {
        let {
          tile: CF,
          index: AF,
          beforeBreak: uF,
          parents: hF
        } = this;
        for (; FF || WF > 0;)
          if (CF.isComposite())
            if (uF) {
              if (!FF) break;
              SF && SF.break(), FF--, uF = !1
            } else if (AF == CF.children.length) {
          if (!FF && !hF.length) break;
          SF && SF.AC(CF), uF = !!CF.breakAfter, ({
            tile: CF,
            index: AF
          } = hF.pop()), AF++
        } else {
          let bW = CF.children[AF],
            dF = bW.breakAfter;
          !(WF > 0 ? bW.length <= FF : bW.length < FF) || SF && !1 === SF.skip(bW, 0, bW.length) && bW.isComposite ? (hF.push({
            tile: CF,
            index: AF
          }), CF = bW, AF = 0, SF && bW.isComposite() && SF.enter(bW)) : (uF = !!dF, AF++, FF -= bW.length)
        } else if (AF == CF.length) uF = !!CF.breakAfter, ({
          tile: CF,
          index: AF
        } = hF.pop()), AF++;
        else {
          if (!FF) break;
          {
            let WF = Math.min(FF, CF.length - AF);
            SF && SF.skip(CF, AF, AF + WF), FF -= WF, AF += WF
          }
        }
        return this.tile = CF, this.index = AF, this.beforeBreak = uF, this
      }
      get root() {
        return this.parents.length ? this.parents[0].tile : this.tile
      }
    }
    class DS {
      constructor(FF, WF, SF, CF) {
        this.from = FF, this.to = WF, this.wrapper = SF, this.rank = CF
      }
    }
    class LS {
      constructor(FF, WF, SF) {
        this.cache = FF, this.root = WF, this.blockWrappers = SF, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0
      }
      addText(FF, WF, SF, CF) {
        var AF;
        this.flushBuffer();
        let uF = this.ensureMarks(WF, SF),
          hF = uF.lastChild;
        if (hF && hF.isText() && !(8 & hF.flags) && hF.length + FF.length < 512) {
          this.cache.reused.set(hF, 2), (uF.children[uF.children.length - 1] = new kC(hF.dom, hF.text + FF)).parent = uF
        } else uF.append(CF || kC.of(FF, null === (AF = this.cache.find(kC)) || void 0 === AF ? void 0 : AF.dom));
        this.pos += FF.length, this.afterWidget = null
      }
      addComposition(FF, WF) {
        let SF = this.curLine;
        SF.dom != WF.line.dom && (SF.setDOM(this.cache.reused.has(WF.line) ? MS(WF.line.dom) : WF.line.dom), this.cache.reused.set(WF.line, 2));
        let CF = SF;
        for (let hF = WF.marks.length - 1; hF >= 0; hF--) {
          let FF = WF.marks[hF],
            SF = CF.lastChild;
          if (SF instanceof aC && SF.mark.eq(FF.mark)) SF.dom != FF.dom && SF.setDOM(MS(FF.dom)), CF = SF;
          else {
            if (this.cache.reused.get(FF)) {
              let WF = eS.get(FF.dom);
              WF && WF.setDOM(MS(FF.dom))
            }
            let WF = aC.of(FF.mark, FF.dom);
            CF.append(WF), CF = WF
          }
          this.cache.reused.set(FF, 2)
        }
        let AF = eS.get(FF.text);
        AF && this.cache.reused.set(AF, 2);
        let uF = new kC(FF.text, FF.text.nodeValue);
        uF.flags |= 8, CF.append(uF)
      }
      addInlineWidget(FF, WF, SF) {
        let CF = this.afterWidget && 48 & FF.flags && (48 & this.afterWidget.flags) == (48 & FF.flags);
        CF || this.flushBuffer();
        let AF = this.ensureMarks(WF, SF);
        CF || 16 & FF.flags || AF.append(this.getBuffer(1)), AF.append(FF), this.pos += FF.length, this.afterWidget = FF
      }
      addMark(FF, WF, SF) {
        this.flushBuffer(), this.ensureMarks(WF, SF).append(FF), this.pos += FF.length, this.afterWidget = null
      }
      addBlockWidget(FF) {
        this.getBlockPos().append(FF), this.pos += FF.length, this.lastBlock = FF, this.endLine()
      }
      continueWidget(FF) {
        (this.afterWidget || this.lastBlock).length += FF, this.pos += FF
      }
      addLineStart(FF, WF) {
        var SF;
        FF || (FF = YS);
        let CF = tC.start(FF, WF || (null === (SF = this.cache.find(tC)) || void 0 === SF ? void 0 : SF.dom), !!WF);
        this.getBlockPos().append(this.lastBlock = this.curLine = CF)
      }
      addLine(FF) {
        this.getBlockPos().append(FF), this.pos += FF.length, this.lastBlock = FF, this.endLine()
      }
      addBreak() {
        this.lastBlock.flags |= 1, this.endLine(), this.pos++
      }
      addLineStartIfNotCovered(FF) {
        this.blockPosCovered() || this.addLineStart(FF)
      }
      ensureLine(FF) {
        this.curLine || this.addLineStart(FF)
      }
      ensureMarks(FF, WF) {
        var SF;
        let CF = this.curLine;
        for (let AF = FF.length - 1; AF >= 0; AF--) {
          let uF, hF = FF[AF];
          if (WF > 0 && (uF = CF.lastChild) && uF instanceof aC && uF.mark.eq(hF)) CF = uF, WF--;
          else {
            let FF = aC.of(hF, null === (SF = this.cache.find(aC, (FF => FF.mark.eq(hF)))) || void 0 === SF ? void 0 : SF.dom);
            CF.append(FF), CF = FF, WF = 0
          }
        }
        return CF
      }
      endLine() {
        if (this.curLine) {
          this.flushBuffer();
          let FF = this.curLine.lastChild;
          FF && oS(this.curLine, !1) && ("BR" == FF.dom.nodeName || !FF.isWidget() || NF.ios && oS(this.curLine, !0)) || this.curLine.append(this.cache.findWidget(GS, 0, 32) || new qC(GS.toDOM(), 0, GS, 32)), this.curLine = this.afterWidget = null
        }
      }
      updateBlockWrappers() {
        this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
        for (let FF = this.wrappers.length - 1; FF >= 0; FF--) this.wrappers[FF].to < this.pos && this.wrappers.splice(FF, 1);
        for (let FF = this.blockWrappers; FF.value && FF.from <= this.pos; FF.next())
          if (FF.to >= this.pos) {
            let WF = new DS(FF.from, FF.to, FF.value, FF.rank),
              SF = this.wrappers.length;
            for (; SF > 0 && (this.wrappers[SF - 1].rank - WF.rank || this.wrappers[SF - 1].to - WF.to) < 0;) SF--;
            this.wrappers.splice(SF, 0, WF)
          } this.wrapperPos = this.pos
      }
      getBlockPos() {
        var FF;
        this.updateBlockWrappers();
        let WF = this.root;
        for (let SF of this.wrappers) {
          let CF = WF.lastChild;
          if (SF.from < this.pos && CF instanceof gC && CF.wrapper.eq(SF.wrapper)) WF = CF;
          else {
            let CF = gC.of(SF.wrapper, null === (FF = this.cache.find(gC, (FF => FF.wrapper.eq(SF.wrapper)))) || void 0 === FF ? void 0 : FF.dom);
            WF.append(CF), WF = CF
          }
        }
        return WF
      }
      blockPosCovered() {
        let FF = this.lastBlock;
        return null != FF && !FF.breakAfter && (!FF.isWidget() || (160 & FF.flags) > 0)
      }
      getBuffer(FF) {
        let WF = 2 | (FF < 0 ? 16 : 32),
          SF = this.cache.find(VS, void 0, 1);
        return SF && (SF.flags = WF), SF || new VS(WF)
      }
      flushBuffer() {
        !this.afterWidget || 32 & this.afterWidget.flags || (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null)
      }
    }
    class mC {
      constructor(FF) {
        this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = FF.iter()
      }
      skip(FF) {
        this.textOff + FF <= this.text.length ? this.textOff += FF : (this.skipCount += FF - (this.text.length - this.textOff), this.text = "", this.textOff = 0)
      }
      next(FF) {
        if (this.textOff == this.text.length) {
          let {
            value: WF,
            lineBreak: SF,
            done: CF
          } = this.cursor.next(this.skipCount);
          if (this.skipCount = 0, CF) throw new Error("Ran out of text content when drawing inline views");
          this.text = WF;
          let AF = this.textOff = Math.min(FF, WF.length);
          return SF ? null : WF.slice(0, AF)
        }
        let WF = Math.min(this.text.length, this.textOff + FF),
          SF = this.text.slice(this.textOff, WF);
        return this.textOff = WF, SF
      }
    }
    const OS = [qC, tC, kC, aC, VS, gC, rC];
    for (let oh = 0; oh < OS.length; oh++) OS[oh].bucket = oh;
    class xC {
      constructor(FF) {
        this.view = FF, this.buckets = OS.map((() => [])), this.index = OS.map((() => 0)), this.reused = new Map
      }
      add(FF) {
        let WF = FF.constructor.bucket,
          SF = this.buckets[WF];
        SF.length < 6 ? SF.push(FF) : SF[this.index[WF] = (this.index[WF] + 1) % 6] = FF
      }
      find(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
          CF = FF.bucket,
          AF = this.buckets[CF],
          uF = this.index[CF];
        for (let hF = AF.length - 1; hF >= 0; hF--) {
          let FF = (hF + uF) % AF.length,
            bW = AF[FF];
          if ((!WF || WF(bW)) && !this.reused.has(bW)) return AF.splice(FF, 1), FF < uF && this.index[CF]--, this.reused.set(bW, SF), bW
        }
        return null
      }
      findWidget(FF, WF, SF) {
        let CF = this.buckets[0];
        if (CF.length)
          for (let AF = 0, uF = 0;; AF++) {
            if (AF == CF.length) {
              if (uF) return null;
              uF = 1, AF = 0
            }
            let hF = CF[AF];
            if (!this.reused.has(hF) && (0 == uF ? hF.widget.compare(FF) : hF.widget.constructor == FF.constructor && FF.updateDOM(hF.dom, this.view, hF.widget))) return CF.splice(AF, 1), AF < this.index[0] && this.index[0]--, hF.widget == FF && hF.length == WF && (497 & hF.flags) == SF ? (this.reused.set(hF, 1), hF) : (this.reused.set(hF, 2), new qC(hF.dom, WF, FF, -498 & hF.flags | SF))
          }
      }
      reuse(FF) {
        return this.reused.set(FF, 1), FF
      }
      maybeReuse(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        if (!this.reused.has(FF)) return this.reused.set(FF, WF), FF.dom
      }
      clear() {
        for (let FF = 0; FF < this.buckets.length; FF++) this.buckets[FF].length = this.index[FF] = 0
      }
    }
    class ZS {
      constructor(FF, WF, SF, AF, uF) {
        this.view = FF, this.Iu = AF, this.disallowBlockEffectsFor = uF, this.openWidget = !1, this.openMarks = 0, this.cache = new xC(FF), this.text = new mC(FF.state.doc), this.builder = new LS(this.cache, new rC(FF, FF.contentDOM), CF.C.iter(SF)), this.cache.reused.set(WF, 2), this.old = new NS(WF), this.reuseWalker = {
          skip: (FF, WF, SF) => {
            if (this.cache.add(FF), FF.isComposite()) return !1
          },
          enter: FF => this.cache.add(FF),
          AC: () => {},
          break: () => {}
        }
      }
      run(FF, WF) {
        let SF = WF && this.getCompositionContext(WF.text);
        for (let CF = 0, AF = 0, uF = 0;;) {
          let hF = uF < FF.length ? FF[uF++] : null,
            bW = hF ? hF.fromA : this.old.root.length;
          if (bW > CF) {
            let FF = bW - CF;
            this.preserve(FF, !uF, !hF), CF = bW, AF += FF
          }
          if (!hF) break;
          WF && hF.fromA <= WF.range.fromA && hF.toA >= WF.range.toA ? (this.forward(hF.fromA, WF.range.fromA, WF.range.fromA < WF.range.toA ? 1 : -1), this.emit(AF, WF.range.fromB), this.cache.clear(), this.builder.addComposition(WF, SF), this.text.skip(WF.range.toB - WF.range.fromB), this.forward(WF.range.fromA, hF.toA), this.emit(WF.range.toB, hF.toB)) : (this.forward(hF.fromA, hF.toA), this.emit(AF, hF.toB)), AF = hF.toB, CF = hF.toA
        }
        return this.builder.curLine && this.builder.endLine(), this.builder.root
      }
      preserve(FF, WF, SF) {
        let CF = function(FF) {
            let WF = [];
            for (let SF = FF.parents.length; SF > 1; SF--) {
              let CF = SF == FF.parents.length ? FF.tile : FF.parents[SF].tile;
              CF instanceof aC && WF.push(CF.mark)
            }
            return WF
          }(this.old),
          AF = this.openMarks;
        this.old.advance(FF, SF ? 1 : -1, {
          skip: (FF, WF, SF) => {
            if (FF.isWidget())
              if (this.openWidget) this.builder.continueWidget(SF - WF);
              else {
                let uF = SF > 0 || WF < FF.length ? qC.of(FF.widget, this.view, SF - WF, 496 & FF.flags, this.cache.maybeReuse(FF)) : this.cache.reuse(FF);
                256 & uF.flags ? (uF.flags &= -2, this.builder.addBlockWidget(uF)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(uF, CF, AF), AF = CF.length)
              }
            else if (FF.isText()) this.builder.ensureLine(null), WF || SF != FF.length || this.cache.reused.has(FF) ? (this.cache.add(FF), this.builder.addText(FF.text.slice(WF, SF), CF, AF)) : this.builder.addText(FF.text, CF, AF, this.cache.reuse(FF)), AF = CF.length;
            else if (FF.isLine()) FF.flags &= -2, this.cache.reused.set(FF, 1), this.builder.addLine(FF);
            else if (FF instanceof VS) this.cache.add(FF);
            else {
              if (!(FF instanceof aC)) return !1;
              this.builder.ensureLine(null), this.builder.addMark(FF, CF, AF), this.cache.reused.set(FF, 1), AF = CF.length
            }
            this.openWidget = !1
          },
          enter: FF => {
            FF.isLine() ? this.builder.addLineStart(FF.attrs, this.cache.maybeReuse(FF)) : (this.cache.add(FF), FF instanceof aC && CF.unshift(FF.mark)), this.openWidget = !1
          },
          AC: FF => {
            FF.isLine() ? CF.length && (CF.length = AF = 0) : FF instanceof aC && (CF.shift(), AF = Math.min(AF, CF.length))
          },
          break: () => {
            this.builder.addBreak(), this.openWidget = !1
          }
        }), this.text.skip(FF)
      }
      emit(FF, WF) {
        let SF = null,
          AF = this.builder,
          uF = 0,
          hF = CF.C.spans(this.Iu, FF, WF, {
            point: (FF, WF, CF, hF, bW, dF) => {
              if (CF instanceof GF) {
                if (this.disallowBlockEffectsFor[dF]) {
                  if (CF.block) throw new RangeError("Block decorations may not be specified via plugins");
                  if (WF > this.view.state.doc.lineAt(FF).to) throw new RangeError("Decorations that replace line breaks may not be specified via plugins")
                }
                if (uF = hF.length, bW > hF.length) AF.continueWidget(WF - FF);
                else {
                  let uF = CF.widget || (CF.block ? cC.block : cC.inline),
                    dF = function(FF) {
                      let WF = FF.isReplace ? (FF.startSide < 0 ? 64 : 0) | (FF.endSide > 0 ? 128 : 0) : FF.startSide > 0 ? 32 : 16;
                      FF.block && (WF |= 256);
                      return WF
                    }(CF),
                    PF = this.cache.findWidget(uF, WF - FF, dF) || qC.of(uF, this.view, WF - FF, dF);
                  CF.block ? (CF.startSide > 0 && AF.addLineStartIfNotCovered(SF), AF.addBlockWidget(PF)) : (AF.ensureLine(SF), AF.addInlineWidget(PF, hF, bW))
                }
                SF = null
              } else SF = function(FF, WF) {
                let SF = WF.spec.attributes,
                  CF = WF.spec.class;
                if (!SF && !CF) return FF;
                FF || (FF = {
                  class: "cm-line"
                });
                SF && DF(SF, FF);
                CF && (FF.class += " " + CF);
                return FF
              }(SF, CF);
              WF > FF && this.text.skip(WF - FF)
            },
            span: (FF, WF, CF, uF) => {
              for (let hF = FF; hF < WF;) {
                let bW = this.text.next(Math.min(512, WF - hF));
                null == bW ? (AF.addLineStartIfNotCovered(SF), AF.addBreak(), hF++) : (AF.ensureLine(SF), AF.addText(bW, CF, hF == FF ? uF : CF.length), hF += bW.length), SF = null
              }
            }
          });
        AF.addLineStartIfNotCovered(SF), this.openWidget = hF > uF, this.openMarks = hF
      }
      forward(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        WF - FF <= 10 ? this.old.advance(WF - FF, SF, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(WF - FF - 10, -1), this.old.advance(5, SF, this.reuseWalker))
      }
      getCompositionContext(FF) {
        let WF = [],
          SF = null;
        for (let CF = FF.parentNode;; CF = CF.parentNode) {
          let FF = eS.get(CF);
          if (CF == this.view.contentDOM) break;
          FF instanceof aC ? WF.push(FF) : (null === FF || void 0 === FF ? void 0 : FF.isLine()) ? SF = FF : FF instanceof gC || ("DIV" != CF.nodeName || SF || CF == this.view.contentDOM ? SF || WF.push(aC.of(new MF({
            tagName: CF.nodeName.toLowerCase(),
            attributes: xW(CF)
          }), CF)) : SF = new tC(CF, YS))
        }
        return {
          line: SF,
          marks: WF
        }
      }
    }

    function oS(FF, WF) {
      let SF = FF => {
        for (let CF of FF.children)
          if ((WF ? CF.isText() : CF.length) || SF(CF)) return !0;
        return !1
      };
      return SF(FF)
    }
    const YS = {
      class: "cm-line"
    };

    function MS(FF) {
      let WF = eS.get(FF);
      return WF && WF.setDOM(FF.cloneNode()), FF
    }
    class cC extends ZF {
      constructor(FF) {
        super(), this.tag = FF
      }
      eq(FF) {
        return FF.tag == this.tag
      }
      toDOM() {
        return document.createElement(this.tag)
      }
      updateDOM(FF) {
        return FF.nodeName.toLowerCase() == this.tag
      }
      get isHidden() {
        return !0
      }
    }
    cC.inline = new cC("span"), cC.block = new cC("div");
    const GS = new class extends ZF {
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
    class zC {
      constructor(FF) {
        this.view = FF, this.Iu = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = YF.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new rC(FF, FF.contentDOM), this.updateInner([new PS(0, 0, 0, FF.state.doc.length)], null)
      }
      update(FF) {
        var WF;
        let SF = FF.changedRanges;
        this.minWidth > 0 && SF.length && (SF.every((FF => {
          let {
            fromA: WF,
            toA: SF
          } = FF;
          return SF < this.minWidthFrom || WF > this.minWidthTo
        })) ? (this.minWidthFrom = FF.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = FF.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(FF);
        let AF = -1;
        this.view.inputState.composing >= 0 && !this.view.observer.editContext && ((null === (WF = this.domChanged) || void 0 === WF ? void 0 : WF.newSel) ? AF = this.domChanged.newSel.head : function(FF, WF) {
          let SF = !1;
          WF && FF.iterChangedRanges(((FF, CF) => {
            FF < WF.to && CF > WF.from && (SF = !0)
          }));
          return SF
        }(FF.changes, this.hasComposition) || FF.selectionSet || (AF = FF.state.selection.main.head));
        let uF = AF > -1 ? function(FF, WF, SF) {
          let CF = fS(FF, SF);
          if (!CF) return null;
          let {
            node: AF,
            from: uF,
            to: hF
          } = CF, bW = AF.nodeValue;
          if (/[\n\r]/.test(bW)) return null;
          if (FF.state.doc.sliceString(CF.from, CF.to) != bW) return null;
          let dF = WF.invertedDesc;
          return {
            range: new PS(dF.mapPos(uF), dF.mapPos(hF), uF, hF),
            text: AF
          }
        }(this.view, FF.changes, AF) : null;
        if (this.domChanged = null, this.hasComposition) {
          let {
            from: WF,
            to: CF
          } = this.hasComposition;
          SF = new PS(WF, CF, FF.changes.mapPos(WF, -1), FF.changes.mapPos(CF, 1)).addToSet(SF.slice())
        }
        this.hasComposition = uF ? {
          from: uF.range.fromB,
          to: uF.range.toB
        } : null, (NF.ie || NF.chrome) && !uF && FF && FF.state.doc.lines != FF.startState.doc.lines && (this.forceSelection = !0);
        let hF = this.Iu,
          bW = this.blockWrappers;
        this.updateDeco();
        let dF = function(FF, WF, SF) {
          let AF = new yC;
          return CF.C.compare(FF, WF, SF, AF), AF.changes
        }(hF, this.Iu, FF.changes);
        dF.length && (SF = PS.extendWithRanges(SF, dF));
        let PF = function(FF, WF, SF) {
          let AF = new sS;
          return CF.C.compare(FF, WF, SF, AF), AF.changes
        }(bW, this.blockWrappers, FF.changes);
        return PF.length && (SF = PS.extendWithRanges(SF, PF)), uF && !SF.some((FF => FF.fromA <= uF.range.fromA && FF.toA >= uF.range.toA)) && (SF = uF.range.addToSet(SF.slice())), !(2 & this.tile.flags && 0 == SF.length) && (this.updateInner(SF, uF), FF.transactions.length && (this.lastUpdate = Date.now()), !0)
      }
      updateInner(FF, WF) {
        this.view.viewState.mustMeasureContent = !0;
        let {
          observer: SF
        } = this.view;
        SF.ignore((() => {
          if (WF || FF.length) {
            let SF = this.tile,
              CF = new ZS(this.view, SF, this.blockWrappers, this.Iu, this.dynamicDecorationMap);
            WF && eS.get(WF.text) && CF.cache.reused.set(eS.get(WF.text), 2), this.tile = CF.run(FF, WF), IS(SF, CF.cache.reused)
          }
          this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
          let CF = NF.chrome || NF.ios ? {
            node: SF.selectionRange.focusNode,
            written: !1
          } : void 0;
          this.tile.sync(CF), !CF || !CF.written && SF.selectionRange.focusNode == CF.node && this.tile.dom.contains(CF.node) || (this.forceSelection = !0), this.tile.dom.style.height = ""
        }));
        let CF = [];
        if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
          for (let AF of this.tile.children) AF.isWidget() && AF.widget instanceof nS && CF.push(AF.dom);
        SF.updateGaps(CF)
      }
      updateEditContextFormatting(FF) {
        this.editContextFormatting = this.editContextFormatting.map(FF.changes);
        for (let WF of FF.transactions)
          for (let FF of WF.effects) FF.is(wW) && (this.editContextFormatting = FF.value)
      }
      updateSelection() {
        let FF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this.view.observer.selectionRange.focusNode || this.view.observer.readSelectionRange();
        let {
          dom: WF
        } = this.tile, SF = this.view.root.activeElement, CF = SF == WF, AF = !CF && !(this.view.state.facet(UW) || WF.tabIndex > -1) && nF(WF, this.view.observer.selectionRange) && !(SF && WF.contains(SF));
        if (!(CF || FF || AF)) return;
        let uF = this.forceSelection;
        this.forceSelection = !1;
        let hF, bW, dF = this.view.state.selection.main;
        if (dF.empty ? bW = hF = this.inlineDOMNearPos(dF.anchor, dF.assoc || 1) : (bW = this.inlineDOMNearPos(dF.head, dF.head == dF.from ? 1 : -1), hF = this.inlineDOMNearPos(dF.anchor, dF.anchor == dF.from ? 1 : -1)), NF.gecko && dF.empty && !this.hasComposition && (1 == (PF = hF).node.nodeType && PF.node.firstChild && (0 == PF.offset || "false" == PF.node.childNodes[PF.offset - 1].contentEditable) && (PF.offset == PF.node.childNodes.length || "false" == PF.node.childNodes[PF.offset].contentEditable))) {
          let FF = document.createTextNode("");
          this.view.observer.ignore((() => hF.node.insertBefore(FF, hF.node.childNodes[hF.offset] || null))), hF = bW = new dW(FF, 0), uF = !0
        }
        var PF;
        let RF = this.view.observer.selectionRange;
        !uF && RF.focusNode && (KF(hF.node, hF.offset, RF.anchorNode, RF.anchorOffset) && KF(bW.node, bW.offset, RF.focusNode, RF.focusOffset) || this.suppressWidgetCursorChange(RF, dF)) || (this.view.observer.ignore((() => {
          NF.android && NF.chrome && WF.contains(RF.focusNode) && function(FF, WF) {
            for (let SF = FF; SF && SF != WF; SF = SF.assignedSlot || SF.parentNode)
              if (1 == SF.nodeType && "false" == SF.contentEditable) return !0;
            return !1
          }(RF.focusNode, WF) && (WF.blur(), WF.focus({
            preventScroll: !0
          }));
          let FF = yW(this.view.root);
          if (FF)
            if (dF.empty) {
              if (NF.gecko) {
                let FF = (CF = hF.node, uF = hF.offset, 1 != CF.nodeType ? 0 : (uF && "false" == CF.childNodes[uF - 1].contentEditable ? 1 : 0) | (uF < CF.childNodes.length && "false" == CF.childNodes[uF].contentEditable ? 2 : 0));
                if (FF && 3 != FF) {
                  let WF = (1 == FF ? hW : bS)(hF.node, hF.offset);
                  WF && (hF = new dW(WF.node, WF.offset))
                }
              }
              FF.collapse(hF.node, hF.offset), null != dF.bidiLevel && void 0 !== FF.caretBidiLevel && (FF.caretBidiLevel = dF.bidiLevel)
            } else if (FF.extend) {
            FF.collapse(hF.node, hF.offset);
            try {
              FF.extend(bW.node, bW.offset)
            } catch (PF) {}
          } else {
            let WF = document.createRange();
            dF.anchor > dF.head && ([hF, bW] = [bW, hF]), WF.setEnd(bW.node, bW.offset), WF.setStart(hF.node, hF.offset), FF.removeAllRanges(), FF.addRange(WF)
          } else;
          var CF, uF;
          AF && this.view.root.activeElement == WF && (WF.blur(), SF && SF.focus())
        })), this.view.observer.setSelectionRange(hF, bW)), this.impreciseAnchor = hF.precise ? null : new dW(RF.anchorNode, RF.anchorOffset), this.impreciseHead = bW.precise ? null : new dW(RF.focusNode, RF.focusOffset)
      }
      suppressWidgetCursorChange(FF, WF) {
        return this.hasComposition && WF.empty && KF(FF.focusNode, FF.focusOffset, FF.anchorNode, FF.anchorOffset) && this.posFromDOM(FF.focusNode, FF.focusOffset) == WF.head
      }
      enforceCursorAssoc() {
        if (this.hasComposition) return;
        let {
          view: FF
        } = this, WF = FF.state.selection.main, SF = yW(FF.root), {
          anchorNode: CF,
          anchorOffset: AF
        } = FF.observer.selectionRange;
        if (!SF || !WF.empty || !WF.assoc || !SF.modify) return;
        let uF = this.lineAt(WF.head, WF.assoc);
        if (!uF) return;
        let hF = uF.posAtStart;
        if (WF.head == hF || WF.head == hF + uF.length) return;
        let bW = this.coordsAt(WF.head, -1),
          dF = this.coordsAt(WF.head, 1);
        if (!bW || !dF || bW.bottom > dF.top) return;
        let PF = this.domAtPos(WF.head + WF.assoc, WF.assoc);
        SF.collapse(PF.node, PF.offset), SF.modify("move", WF.assoc < 0 ? "forward" : "backward", "lineboundary"), FF.observer.readSelectionRange();
        let RF = FF.observer.selectionRange;
        FF.docView.posFromDOM(RF.anchorNode, RF.anchorOffset) != WF.from && SF.collapse(CF, AF)
      }
      posFromDOM(FF, WF) {
        let SF = this.tile.nearest(FF);
        if (!SF) return 2 & this.tile.dom.compareDocumentPosition(FF) ? 0 : this.view.state.doc.length;
        let CF = SF.posAtStart;
        if (!SF.isComposite()) return SF.isText() ? FF == SF.dom ? CF + WF : CF + (WF ? SF.length : 0) : CF;
        {
          let AF;
          if (FF == SF.dom) AF = SF.dom.childNodes[WF];
          else {
            let CF = 0 == BF(FF) ? 0 : 0 == WF ? -1 : 1;
            for (;;) {
              let WF = FF.parentNode;
              if (WF == SF.dom) break;
              0 == CF && WF.firstChild != WF.lastChild && (CF = FF == WF.firstChild ? -1 : 1), FF = WF
            }
            AF = CF < 0 ? FF : FF.nextSibling
          }
          if (AF == SF.dom.firstChild) return CF;
          for (; AF && !eS.get(AF);) AF = AF.nextSibling;
          if (!AF) return CF + SF.length;
          for (let FF = 0, WF = CF;; FF++) {
            let CF = SF.children[FF];
            if (CF.dom == AF) return WF;
            WF += CF.length + CF.breakAfter
          }
        }
      }
      domAtPos(FF, WF) {
        let {
          tile: SF,
          offset: CF
        } = this.tile.resolveBlock(FF, WF);
        return SF.isWidget() ? SF.domPosFor(FF, WF) : SF.domIn(CF, WF)
      }
      inlineDOMNearPos(FF, WF) {
        let SF, CF, AF = -1,
          uF = !1,
          hF = -1,
          bW = !1;
        return this.tile.blockTiles(((WF, dF) => {
          if (WF.isWidget()) {
            if (32 & WF.flags && dF >= FF) return !0;
            16 & WF.flags && (uF = !0)
          } else {
            let PF = dF + WF.length;
            if (dF <= FF && (SF = WF, AF = FF - dF, uF = PF < FF), PF >= FF && !CF && (CF = WF, hF = FF - dF, bW = dF > FF), dF > FF && CF) return !0
          }
        })), SF || CF ? (uF && CF ? SF = null : bW && SF && (CF = null), SF && WF < 0 || !CF ? SF.domIn(AF, WF) : CF.domIn(hF, WF)) : this.domAtPos(FF, WF)
      }
      coordsAt(FF, WF) {
        let {
          tile: SF,
          offset: CF
        } = this.tile.resolveBlock(FF, WF);
        return SF.isWidget() ? SF.widget instanceof nS ? null : SF.coordsInWidget(CF, WF, !0) : SF.coordsIn(CF, WF)
      }
      lineAt(FF, WF) {
        let {
          tile: SF
        } = this.tile.resolveBlock(FF, WF);
        return SF.isLine() ? SF : null
      }
      coordsForChar(FF) {
        let {
          tile: WF,
          offset: SF
        } = this.tile.resolveBlock(FF, 1);
        if (!WF.isLine()) return null;
        return function FF(WF, SF) {
          if (WF.isComposite())
            for (let CF of WF.children) {
              if (CF.length >= SF) {
                let WF = FF(CF, SF);
                if (WF) return WF
              }
              if ((SF -= CF.length) < 0) break
            } else if (WF.isText() && SF < WF.length) {
              let FF = (0, CF.bb)(WF.text, SF);
              if (FF == SF) return null;
              let AF = CW(WF.dom, SF, FF).getClientRects();
              for (let WF = 0; WF < AF.length; WF++) {
                let FF = AF[WF];
                if (WF == AF.length - 1 || FF.top < FF.bottom && FF.left < FF.right) return FF
              }
            } return null
        }(WF, SF)
      }
      measureVisibleLineHeights(FF) {
        let WF = [],
          {
            from: SF,
            to: CF
          } = FF,
          AF = this.view.contentDOM.clientWidth,
          uF = AF > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
          hF = -1,
          bW = this.view.textDirection == PW.LTR,
          dF = 0,
          PF = (FF, RF, iW) => {
            for (let eF = 0; eF < FF.children.length && !(RF > CF); eF++) {
              let CF = FF.children[eF],
                EF = RF + CF.length,
                QF = CF.dom.getBoundingClientRect(),
                {
                  height: rW
                } = QF;
              if (iW && !eF && (dF += QF.top - iW.top), CF instanceof gC) EF > SF && PF(CF, RF, QF);
              else if (RF >= SF && (dF > 0 && WF.push(-dF), WF.push(rW + dF), dF = 0, uF)) {
                let FF = CF.dom.lastChild,
                  WF = FF ? HF(FF) : [];
                if (WF.length) {
                  let FF = WF[WF.length - 1],
                    SF = bW ? FF.right - QF.left : QF.right - FF.left;
                  SF > hF && (hF = SF, this.minWidth = AF, this.minWidthFrom = RF, this.minWidthTo = EF)
                }
              }
              iW && eF == FF.children.length - 1 && (dF += iW.bottom - QF.bottom), RF = EF + CF.breakAfter
            }
          };
        return PF(this.tile, 0, null), WF
      }
      textDirectionAt(FF) {
        let {
          tile: WF
        } = this.tile.resolveBlock(FF, 1);
        return "rtl" == getComputedStyle(WF.dom).direction ? PW.RTL : PW.LTR
      }
      measureTextSize() {
        let FF = this.tile.blockTiles((FF => {
          if (FF.isLine() && FF.children.length && FF.length <= 20) {
            let WF, SF = 0;
            for (let CF of FF.children) {
              if (!CF.isText() || /[^ -~]/.test(CF.text)) return;
              let FF = HF(CF.dom);
              if (1 != FF.length) return;
              SF += FF[0].width, WF = FF[0].height
            }
            if (SF) return {
              lineHeight: FF.dom.getBoundingClientRect().height,
              charWidth: SF / FF.length,
              textHeight: WF
            }
          }
        }));
        if (FF) return FF;
        let WF, SF, CF, AF = document.createElement("div");
        return AF.className = "cm-line", AF.style.width = "99999px", AF.style.position = "absolute", AF.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore((() => {
          this.tile.dom.appendChild(AF);
          let FF = HF(AF.firstChild)[0];
          WF = AF.getBoundingClientRect().height, SF = FF && FF.width ? FF.width / 27 : 7, CF = FF && FF.height ? FF.height : WF, AF.remove()
        })), {
          lineHeight: WF,
          charWidth: SF,
          textHeight: CF
        }
      }
      computeBlockGapDeco() {
        let FF = [],
          WF = this.view.viewState;
        for (let SF = 0, CF = 0;; CF++) {
          let AF = CF == WF.viewports.length ? null : WF.viewports[CF],
            uF = AF ? AF.from - 1 : this.view.state.doc.length;
          if (uF > SF) {
            let CF = (WF.lineBlockAt(uF).bottom - WF.lineBlockAt(SF).top) / this.view.scaleY;
            FF.push(YF.replace({
              widget: new nS(CF),
              block: !0,
              inclusive: !0,
              isBlockGap: !0
            }).range(SF, uF))
          }
          if (!AF) break;
          SF = AF.to + 1
        }
        return YF.set(FF)
      }
      updateDeco() {
        let FF = 1,
          WF = this.view.state.facet(FS).map((WF => (this.dynamicDecorationMap[FF++] = "function" == typeof WF) ? WF(this.view) : WF)),
          SF = !1,
          AF = this.view.state.facet(SS).map(((FF, WF) => {
            let CF = "function" == typeof FF;
            return CF && (SF = !0), CF ? FF(this.view) : FF
          }));
        for (AF.length && (this.dynamicDecorationMap[FF++] = SF, WF.push(CF.C.join(AF))), this.Iu = [this.editContextFormatting, ...WF, this.computeBlockGapDeco(), this.view.viewState.lineGapDeco]; FF < this.Iu.length;) this.dynamicDecorationMap[FF++] = !1;
        this.blockWrappers = this.view.state.facet(WS).map((FF => "function" == typeof FF ? FF(this.view) : FF))
      }
      scrollIntoView(FF) {
        var WF;
        if (FF.isSnapshot) {
          let WF = this.view.viewState.lineBlockAt(FF.range.head);
          return this.view.scrollDOM.scrollTop = WF.top - FF.yMargin, void(this.view.scrollDOM.scrollLeft = FF.xMargin)
        }
        for (let RF of this.view.state.facet(nW)) try {
          if (RF(this.view, FF.range, FF)) return !0
        } catch (PF) {
          XW(this.view.state, PF, "scroll handler")
        }
        let SF, {
            range: CF
          } = FF,
          AF = this.coordsAt(CF.head, null !== (WF = CF.assoc) && void 0 !== WF ? WF : CF.empty ? 0 : CF.head > CF.anchor ? -1 : 1);
        if (!AF) return;
        !CF.empty && (SF = this.coordsAt(CF.anchor, CF.anchor > CF.head ? -1 : 1)) && (AF = {
          left: Math.min(AF.left, SF.left),
          top: Math.min(AF.top, SF.top),
          right: Math.max(AF.right, SF.right),
          bottom: Math.max(AF.bottom, SF.bottom)
        });
        let uF = bC(this.view),
          hF = {
            left: AF.left - uF.left,
            top: AF.top - uF.top,
            right: AF.right + uF.right,
            bottom: AF.bottom + uF.bottom
          },
          {
            offsetWidth: bW,
            offsetHeight: dF
          } = this.view.scrollDOM;
        if (function(FF, WF, SF, CF, AF, uF, hF, bW) {
            let dF = FF.ownerDocument,
              PF = dF.defaultView || window;
            for (let RF = FF, iW = !1; RF && !iW;)
              if (1 == RF.nodeType) {
                let FF, eF = RF == dF.body,
                  EF = 1,
                  QF = 1;
                if (eF) FF = vW(PF);
                else {
                  if (/^(fixed|sticky)$/.test(getComputedStyle(RF).position) && (iW = !0), RF.scrollHeight <= RF.clientHeight && RF.scrollWidth <= RF.clientWidth) {
                    RF = RF.assignedSlot || RF.parentNode;
                    continue
                  }
                  let WF = RF.getBoundingClientRect();
                  ({
                    scaleX: EF,
                    scaleY: QF
                  } = JF(RF, WF)), FF = {
                    left: WF.left,
                    right: WF.left + RF.clientWidth * EF,
                    top: WF.top,
                    bottom: WF.top + RF.clientHeight * QF
                  }
                }
                let rW = 0,
                  gW = 0;
                if ("nearest" == AF) WF.top < FF.top + hF ? (gW = WF.top - (FF.top + hF), SF > 0 && WF.bottom > FF.bottom + gW && (gW = WF.bottom - FF.bottom + hF)) : WF.bottom > FF.bottom - hF && (gW = WF.bottom - FF.bottom + hF, SF < 0 && WF.top - gW < FF.top && (gW = WF.top - (FF.top + hF)));
                else {
                  let CF = WF.bottom - WF.top,
                    uF = FF.bottom - FF.top;
                  gW = ("center" == AF && CF <= uF ? WF.top + CF / 2 - uF / 2 : "start" == AF || "center" == AF && SF < 0 ? WF.top - hF : WF.bottom - uF + hF) - FF.top
                }
                if ("nearest" == CF ? WF.left < FF.left + uF ? (rW = WF.left - (FF.left + uF), SF > 0 && WF.right > FF.right + rW && (rW = WF.right - FF.right + uF)) : WF.right > FF.right - uF && (rW = WF.right - FF.right + uF, SF < 0 && WF.left < FF.left + rW && (rW = WF.left - (FF.left + uF))) : rW = ("center" == CF ? WF.left + (WF.right - WF.left) / 2 - (FF.right - FF.left) / 2 : "start" == CF == bW ? WF.left - uF : WF.right - (FF.right - FF.left) + uF) - FF.left, rW || gW)
                  if (eF) PF.scrollBy(rW, gW);
                  else {
                    let FF = 0,
                      SF = 0;
                    if (gW) {
                      let FF = RF.scrollTop;
                      RF.scrollTop += gW / QF, SF = (RF.scrollTop - FF) * QF
                    }
                    if (rW) {
                      let WF = RF.scrollLeft;
                      RF.scrollLeft += rW / EF, FF = (RF.scrollLeft - WF) * EF
                    }
                    WF = {
                      left: WF.left - FF,
                      top: WF.top - SF,
                      right: WF.right - FF,
                      bottom: WF.bottom - SF
                    }, FF && Math.abs(FF - rW) < 1 && (CF = "nearest"), SF && Math.abs(SF - gW) < 1 && (AF = "nearest")
                  } if (eF) break;
                (WF.top < FF.top || WF.bottom > FF.bottom || WF.left < FF.left || WF.right > FF.right) && (WF = {
                  left: Math.max(WF.left, FF.left),
                  right: Math.min(WF.right, FF.right),
                  top: Math.max(WF.top, FF.top),
                  bottom: Math.min(WF.bottom, FF.bottom)
                }), RF = RF.assignedSlot || RF.parentNode
              } else {
                if (11 != RF.nodeType) break;
                RF = RF.host
              }
          }(this.view.scrollDOM, hF, CF.head < CF.anchor ? -1 : 1, FF.x, FF.y, Math.max(Math.min(FF.xMargin, bW), -bW), Math.max(Math.min(FF.yMargin, dF), -dF), this.view.textDirection == PW.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (AF.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || AF.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
          let FF = this.view.docView.lineAt(CF.head, 1);
          FF && FF.dom.scrollIntoView({
            block: "nearest"
          })
        }
      }
      lineHasWidget(FF) {
        let WF = FF => FF.isWidget() || FF.children.some(WF);
        return WF(this.tile.resolveBlock(FF, 1).tile)
      }
      destroy() {
        IS(this.tile)
      }
    }

    function IS(FF, WF) {
      let SF = null === WF || void 0 === WF ? void 0 : WF.get(FF);
      if (1 != SF) {
        null == SF && FF.destroy();
        for (let SF of FF.children) IS(SF, WF)
      }
    }

    function fS(FF, WF) {
      let SF = FF.observer.selectionRange;
      if (!SF.focusNode) return null;
      let CF = hW(SF.focusNode, SF.focusOffset),
        AF = bS(SF.focusNode, SF.focusOffset),
        uF = CF || AF;
      if (AF && CF && AF.node != CF.node) {
        let WF = eS.get(AF.node);
        if (!WF || WF.isText() && WF.text != AF.node.nodeValue) uF = AF;
        else if (FF.docView.lastCompositionAfterCursor) {
          let FF = eS.get(CF.node);
          !FF || FF.isText() && FF.text != CF.node.nodeValue || (uF = AF)
        }
      }
      if (FF.docView.lastCompositionAfterCursor = uF != CF, !uF) return null;
      let hF = WF - uF.offset;
      return {
        from: hF,
        to: hF + uF.node.nodeValue.length,
        node: uF.node
      }
    }
    let yC = class {
      constructor() {
        this.changes = []
      }
      compareRange(FF, WF) {
        IF(FF, WF, this.changes)
      }
      comparePoint(FF, WF) {
        IF(FF, WF, this.changes)
      }
      boundChange(FF) {
        IF(FF, FF, this.changes)
      }
    };
    class sS {
      constructor() {
        this.changes = []
      }
      compareRange(FF, WF) {
        IF(FF, WF, this.changes)
      }
      comparePoint() {}
      boundChange(FF) {
        IF(FF, FF, this.changes)
      }
    }
    class nS extends ZF {
      constructor(FF) {
        super(), this.height = FF
      }
      toDOM() {
        let FF = document.createElement("div");
        return FF.className = "cm-gap", this.updateDOM(FF), FF
      }
      eq(FF) {
        return FF.height == this.height
      }
      updateDOM(FF) {
        return FF.style.height = this.height + "px", !0
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

    function HS(FF, WF, SF) {
      let CF = FF.lineBlockAt(WF);
      if (Array.isArray(CF.type)) {
        let FF;
        for (let AF of CF.type) {
          if (AF.from > WF) break;
          if (!(AF.to < WF)) {
            if (AF.from < WF && AF.to > WF) return AF;
            FF && (AF.type != oF.Text || FF.type == AF.type && !(SF < 0 ? AF.from < WF : AF.to > WF)) || (FF = AF)
          }
        }
        return FF || CF
      }
      return CF
    }

    function KS(FF, WF, SF, CF) {
      let AF = FF.state.doc.lineAt(WF.head),
        uF = FF.bidiSpans(AF),
        hF = FF.textDirectionAt(AF.from);
      for (let bW = WF, dF = null;;) {
        let WF = OW(AF, uF, hF, bW, SF),
          PF = mS;
        if (!WF) {
          if (AF.number == (SF ? FF.state.doc.lines : 1)) return bW;
          PF = "\n", AF = FF.state.doc.line(AF.number + (SF ? 1 : -1)), uF = FF.bidiSpans(AF), WF = FF.visualLineSide(AF, !SF)
        }
        if (dF) {
          if (!dF(PF)) return bW
        } else {
          if (!CF) return WF;
          dF = CF(PF)
        }
        bW = WF
      }
    }

    function wS(FF, WF, SF) {
      for (;;) {
        let CF = 0;
        for (let AF of FF) AF.between(WF - 1, WF + 1, ((FF, AF, uF) => {
          if (WF > FF && WF < AF) {
            let uF = CF || SF || (WF - FF < AF - WF ? -1 : 1);
            WF = uF < 0 ? FF : AF, CF = uF
          }
        }));
        if (!CF) return WF
      }
    }

    function XS(FF, WF) {
      let SF = null;
      for (let AF = 0; AF < WF.Bu.length; AF++) {
        let uF = WF.Bu[AF],
          hF = null;
        if (uF.empty) {
          let WF = wS(FF, uF.from, 0);
          WF != uF.from && (hF = CF.m.cursor(WF, -1))
        } else {
          let WF = wS(FF, uF.from, -1),
            SF = wS(FF, uF.to, 1);
          WF == uF.from && SF == uF.to || (hF = CF.m.range(uF.from == uF.anchor ? WF : SF, uF.from == uF.head ? WF : SF))
        }
        hF && (SF || (SF = WF.Bu.slice()), SF[AF] = hF)
      }
      return SF ? CF.m.create(SF, WF.mainIndex) : WF
    }

    function US(FF, WF, SF) {
      let AF = wS(FF.state.facet(CS).map((WF => WF(FF))), SF.from, WF.head > SF.from ? -1 : 1);
      return AF == SF.from ? SF : CF.m.cursor(AF, AF < SF.from ? 1 : -1)
    }
    class BS {
      constructor(FF, WF) {
        this.pos = FF, this.assoc = WF
      }
    }

    function jC(FF, WF, SF, AF) {
      let uF, hF = FF.contentDOM.getBoundingClientRect(),
        bW = hF.top + FF.viewState.paddingTop,
        {
          x: dF,
          y: PF
        } = WF,
        RF = PF - bW;
      for (;;) {
        if (RF < 0) return new BS(0, 1);
        if (RF > FF.viewState.docHeight) return new BS(FF.state.doc.length, -1);
        if (uF = FF.elementAtHeight(RF), null == AF) break;
        if (uF.type == oF.Text) {
          if (AF < 0 ? uF.to < FF.viewport.from : uF.from > FF.viewport.to) break;
          let WF = FF.docView.coordsAt(AF < 0 ? uF.from : uF.to, AF > 0 ? -1 : 1);
          if (WF && (AF < 0 ? WF.top <= RF + bW : WF.bottom >= RF + bW)) break
        }
        let WF = FF.viewState.heightOracle.textHeight / 2;
        RF = AF > 0 ? uF.bottom + WF : uF.top - WF
      }
      if (FF.viewport.from >= uF.to || FF.viewport.to <= uF.from) {
        if (SF) return null;
        if (uF.type == oF.Text) {
          let WF = function(FF, WF, SF, AF, uF) {
            let hF = Math.round((AF - WF.left) * FF.defaultCharacterWidth);
            if (FF.lineWrapping && SF.height > 1.5 * FF.defaultLineHeight) {
              let WF = FF.viewState.heightOracle.textHeight;
              hF += Math.floor((uF - SF.top - .5 * (FF.defaultLineHeight - WF)) / WF) * FF.viewState.heightOracle.lineLength
            }
            let bW = FF.state.sliceDoc(SF.from, SF.to);
            return SF.from + (0, CF.db)(bW, hF, FF.state.tabSize)
          }(FF, hF, uF, dF, PF);
          return new BS(WF, WF == uF.from ? 1 : -1)
        }
      }
      if (uF.type != oF.Text) return RF < (uF.top + uF.bottom) / 2 ? new BS(uF.from, 1) : new BS(uF.to, -1);
      let iW = FF.docView.lineAt(uF.from, 2);
      return iW && iW.length == uF.length || (iW = FF.docView.lineAt(uF.from, -2)), new vC(FF, dF, PF, FF.textDirectionAt(uF.from)).scanTile(iW, uF.from)
    }
    class vC {
      constructor(FF, WF, SF, CF) {
        this.view = FF, this.x = WF, this.y = SF, this.baseDir = CF, this.line = null, this.spans = null
      }
      bidiSpansAt(FF) {
        return (!this.line || this.line.from > FF || this.line.to < FF) && (this.line = this.view.state.doc.lineAt(FF), this.spans = this.view.bidiSpans(this.line)), this
      }
      baseDirAt(FF, WF) {
        let {
          line: SF,
          spans: CF
        } = this.bidiSpansAt(FF);
        return CF[aS.find(CF, FF - SF.from, -1, WF)].level == this.baseDir
      }
      dirAt(FF, WF) {
        let {
          line: SF,
          spans: CF
        } = this.bidiSpansAt(FF);
        return CF[aS.find(CF, FF - SF.from, -1, WF)].dir
      }
      bidiIn(FF, WF) {
        let {
          spans: SF,
          line: CF
        } = this.bidiSpansAt(FF);
        return SF.length > 1 || SF.length && (SF[0].level != this.baseDir || SF[0].to + CF.from < WF)
      }
      scan(FF, WF) {
        let SF, CF, AF, uF = 0,
          hF = FF.length - 1,
          bW = new Set,
          dF = this.bidiIn(FF[0], FF[hF]),
          PF = -1,
          RF = 1e9;
        FF: for (; uF < hF;) {
          let iW = hF - uF,
            eF = uF + hF >> 1;
          WF: if (bW.has(eF)) {
            let FF = uF + Math.floor(Math.random() * iW);
            for (let WF = 0; WF < iW; WF++) {
              if (!bW.has(FF)) {
                eF = FF;
                break WF
              }
              FF++, FF == hF && (FF = uF)
            }
            break FF
          } bW.add(eF);
          let EF = WF(eF);
          if (EF)
            for (let WF = 0; WF < EF.length; WF++) {
              let bW = EF[WF],
                iW = 0;
              if (!(0 == bW.width && EF.length > 1)) {
                if (bW.bottom < this.y)(!SF || SF.bottom < bW.bottom) && (SF = bW), iW = 1;
                else if (bW.top > this.y)(!CF || CF.top > bW.top) && (CF = bW), iW = -1;
                else {
                  let FF = bW.left > this.x ? this.x - bW.left : bW.right < this.x ? this.x - bW.right : 0,
                    WF = Math.abs(FF);
                  WF < RF && (PF = eF, RF = WF, AF = bW), FF && (iW = FF < 0 == (this.baseDir == PW.LTR) ? -1 : 1)
                } - 1 != iW || dF && !this.baseDirAt(FF[eF], 1) ? 1 != iW || dF && !this.baseDirAt(FF[eF + 1], -1) || (uF = eF + 1) : hF = eF
              }
            }
        }
        if (!AF) {
          let AF = SF && (!CF || this.y - SF.bottom < CF.top - this.y) ? SF : CF;
          return this.y = (AF.top + AF.bottom) / 2, this.scan(FF, WF)
        }
        if (RF) {
          if (SF && SF.bottom > AF.top) return this.y = SF.bottom - 1, this.scan(FF, WF);
          if (CF && CF.top < AF.bottom) return this.y = CF.top + 1, this.scan(FF, WF)
        }
        let iW = (dF ? this.dirAt(FF[PF], 1) : this.baseDir) == PW.LTR;
        return {
          i: PF,
          after: this.x > (AF.left + AF.right) / 2 == iW
        }
      }
      scanText(FF, WF) {
        let SF = [];
        for (let uF = 0; uF < FF.length; uF = (0, CF.bb)(FF.text, uF)) SF.push(WF + uF);
        SF.push(WF + FF.length);
        let AF = this.scan(SF, (CF => {
          let AF = SF[CF] - WF,
            uF = SF[CF + 1] - WF;
          return CW(FF.dom, AF, uF).getClientRects()
        }));
        return AF.after ? new BS(SF[AF.i + 1], -1) : new BS(SF[AF.i], 1)
      }
      scanTile(FF, WF) {
        if (!FF.length) return new BS(WF, 1);
        if (1 == FF.children.length) {
          let SF = FF.children[0];
          if (SF.isText()) return this.scanText(SF, WF);
          if (SF.isComposite()) return this.scanTile(SF, WF)
        }
        let SF = [WF];
        for (let hF = 0, bW = WF; hF < FF.children.length; hF++) SF.push(bW += FF.children[hF].length);
        let CF = this.scan(SF, (WF => {
            let SF = FF.children[WF];
            return 48 & SF.flags ? null : (1 == SF.dom.nodeType ? SF.dom : CW(SF.dom, 0, SF.length)).getClientRects()
          })),
          AF = FF.children[CF.i],
          uF = SF[CF.i];
        return AF.isText() ? this.scanText(AF, uF) : AF.isComposite() ? this.scanTile(AF, uF) : CF.after ? new BS(SF[CF.i + 1], -1) : new BS(uF, 1)
      }
    }
    const JS = "\uffff";
    class pS {
      constructor(FF, WF) {
        this.points = FF, this.view = WF, this.text = "", this.lineSeparator = WF.state.facet(CF.q.lineSeparator)
      }
      append(FF) {
        this.text += FF
      }
      lineBreak() {
        this.text += JS
      }
      readRange(FF, WF) {
        if (!FF) return this;
        let SF = FF.parentNode;
        for (let CF = FF;;) {
          this.findPointBefore(SF, CF);
          let FF = this.text.length;
          this.readNode(CF);
          let AF = eS.get(CF),
            uF = CF.nextSibling;
          if (uF == WF) {
            (null === AF || void 0 === AF ? void 0 : AF.breakAfter) && !uF && SF != this.view.contentDOM && this.lineBreak();
            break
          }
          let hF = eS.get(uF);
          (AF && hF ? AF.breakAfter : (AF ? AF.breakAfter : XF(CF)) || XF(uF) && ("BR" != CF.nodeName || (null === AF || void 0 === AF ? void 0 : AF.isWidget())) && this.text.length > FF) && !FC(uF, WF) && this.lineBreak(), CF = uF
        }
        return this.findPointBefore(SF, WF), this
      }
      readTextNode(FF) {
        let WF = FF.nodeValue;
        for (let SF of this.points) SF.node == FF && (SF.pos = this.text.length + Math.min(SF.offset, WF.length));
        for (let SF = 0, CF = this.lineSeparator ? null : /\r\n?|\n/g;;) {
          let AF, uF = -1,
            hF = 1;
          if (this.lineSeparator ? (uF = WF.indexOf(this.lineSeparator, SF), hF = this.lineSeparator.length) : (AF = CF.exec(WF)) && (uF = AF.index, hF = AF[0].length), this.append(WF.slice(SF, uF < 0 ? WF.length : uF)), uF < 0) break;
          if (this.lineBreak(), hF > 1)
            for (let WF of this.points) WF.node == FF && WF.pos > this.text.length && (WF.pos -= hF - 1);
          SF = uF + hF
        }
      }
      readNode(FF) {
        let WF = eS.get(FF),
          SF = WF && WF.overrideDOMText;
        if (null != SF) {
          this.findPointInside(FF, SF.length);
          for (let FF = SF.iter(); !FF.next().done;) FF.lineBreak ? this.lineBreak() : this.append(FF.value)
        } else 3 == FF.nodeType ? this.readTextNode(FF) : "BR" == FF.nodeName ? FF.nextSibling && this.lineBreak() : 1 == FF.nodeType && this.readRange(FF.firstChild, null)
      }
      findPointBefore(FF, WF) {
        for (let SF of this.points) SF.node == FF && FF.childNodes[SF.offset] == WF && (SF.pos = this.text.length)
      }
      findPointInside(FF, WF) {
        for (let SF of this.points)(3 == FF.nodeType ? SF.node == FF : FF.contains(SF.node)) && (SF.pos = this.text.length + (lS(FF, SF.node, SF.offset) ? WF : 0))
      }
    }

    function lS(FF, WF, SF) {
      for (;;) {
        if (!WF || SF < BF(WF)) return !1;
        if (WF == FF) return !0;
        SF = wF(WF) + 1, WF = WF.parentNode
      }
    }

    function FC(FF, WF) {
      let SF;
      for (; FF != WF && FF; FF = FF.nextSibling) {
        let WF = eS.get(FF);
        if (!(null === WF || void 0 === WF ? void 0 : WF.isWidget())) return !1;
        WF && (SF || (SF = [])).push(WF)
      }
      if (SF)
        for (let CF of SF) {
          let FF = CF.overrideDOMText;
          if (null === FF || void 0 === FF ? void 0 : FF.length) return !1
        }
      return !0
    }
    class WC {
      constructor(FF, WF) {
        this.node = FF, this.offset = WF, this.pos = -1
      }
    }
    class SC {
      constructor(FF, WF, SF, AF) {
        this.typeOver = AF, this.bounds = null, this.text = "", this.domChanged = WF > -1;
        let {
          impreciseHead: uF,
          impreciseAnchor: hF
        } = FF.docView, bW = FF.state.selection;
        if (FF.state.readOnly && WF > -1) this.newSel = null;
        else if (WF > -1 && (this.bounds = CC(FF.docView.tile, WF, SF, 0))) {
          let WF = uF || hF ? [] : function(FF) {
              let WF = [];
              if (FF.root.activeElement != FF.contentDOM) return WF;
              let {
                anchorNode: SF,
                anchorOffset: CF,
                focusNode: AF,
                focusOffset: uF
              } = FF.observer.selectionRange;
              SF && (WF.push(new WC(SF, CF)), AF == SF && uF == CF || WF.push(new WC(AF, uF)));
              return WF
            }(FF),
            SF = new pS(WF, FF);
          SF.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = SF.text, this.newSel = function(FF, WF) {
            if (0 == FF.length) return null;
            let SF = FF[0].pos,
              AF = 2 == FF.length ? FF[1].pos : SF;
            return SF > -1 && AF > -1 ? CF.m.single(SF + WF, AF + WF) : null
          }(WF, this.bounds.from)
        } else {
          let WF = FF.observer.selectionRange,
            SF = uF && uF.node == WF.focusNode && uF.offset == WF.focusOffset || !sF(FF.contentDOM, WF.focusNode) ? bW.main.head : FF.docView.posFromDOM(WF.focusNode, WF.focusOffset),
            AF = hF && hF.node == WF.anchorNode && hF.offset == WF.anchorOffset || !sF(FF.contentDOM, WF.anchorNode) ? bW.main.anchor : FF.docView.posFromDOM(WF.anchorNode, WF.anchorOffset),
            dF = FF.viewport;
          if ((NF.ios || NF.chrome) && bW.main.empty && SF != AF && (dF.from > 0 || dF.to < FF.state.doc.length)) {
            let WF = Math.min(SF, AF),
              CF = Math.max(SF, AF),
              uF = dF.from - WF,
              hF = dF.to - CF;
            0 != uF && 1 != uF && 0 != WF || 0 != hF && -1 != hF && CF != FF.state.doc.length || (SF = 0, AF = FF.state.doc.length)
          }
          if (FF.inputState.composing > -1 && bW.Bu.length > 1) this.newSel = bW.replaceRange(CF.m.range(AF, SF));
          else if (FF.lineWrapping && AF == SF && (!bW.main.empty || bW.main.head != SF) && FF.inputState.lastTouchTime > Date.now() - 100) {
            let WF = FF.coordsAtPos(SF, -1),
              AF = 0;
            WF && (AF = FF.inputState.lastTouchY <= WF.bottom ? -1 : 1), this.newSel = CF.m.create([CF.m.cursor(SF, AF)])
          } else this.newSel = CF.m.single(AF, SF)
        }
      }
    }

    function CC(FF, WF, SF, CF) {
      if (FF.isComposite()) {
        let AF = -1,
          uF = -1,
          hF = -1,
          bW = -1;
        for (let dF = 0, PF = CF, RF = CF; dF < FF.children.length; dF++) {
          let CF = FF.children[dF],
            iW = PF + CF.length;
          if (PF < WF && iW > SF) return CC(CF, WF, SF, PF);
          if (iW >= WF && -1 == AF && (AF = dF, uF = PF), PF > SF && CF.dom.parentNode == FF.dom) {
            hF = dF, bW = RF;
            break
          }
          RF = iW, PF = iW + CF.breakAfter
        }
        return {
          from: uF,
          to: bW < 0 ? CF + FF.length : bW,
          startDOM: (AF ? FF.children[AF - 1].dom.nextSibling : null) || FF.dom.firstChild,
          endDOM: hF < FF.children.length && hF >= 0 ? FF.children[hF].dom : null
        }
      }
      return FF.isText() ? {
        from: CF,
        to: CF + FF.length,
        startDOM: FF.dom,
        endDOM: FF.dom.nextSibling
      } : null
    }

    function AC(FF, WF) {
      let SF, {
          newSel: AF
        } = WF,
        {
          state: uF
        } = FF,
        hF = uF.selection.main,
        bW = FF.inputState.lastKeyTime > Date.now() - 100 ? FF.inputState.lastKeyCode : -1;
      if (WF.bounds) {
        let {
          from: FF,
          to: AF
        } = WF.bounds, dF = hF.from, PF = null;
        (8 === bW || NF.android && WF.text.length < AF - FF) && (dF = hF.to, PF = "end");
        let RF, iW, eF = uF.doc.sliceString(FF, AF, JS);
        !hF.empty && hF.from >= FF && hF.to <= AF && (WF.typeOver || eF != WF.text) && eF.slice(0, hF.from - FF) == WF.text.slice(0, hF.from - FF) && eF.slice(hF.to - FF) == WF.text.slice(RF = WF.text.length - (eF.length - (hF.to - FF))) ? SF = {
          from: hF.from,
          to: hF.to,
          insert: CF.L.of(WF.text.slice(hF.from - FF, RF).split(JS))
        } : (iW = hC(eF, WF.text, dF - FF, PF)) && (NF.chrome && 13 == bW && iW.toB == iW.from + 2 && WF.text.slice(iW.from, iW.toB) == JS + JS && iW.toB--, SF = {
          from: FF + iW.from,
          to: FF + iW.toA,
          insert: CF.L.of(WF.text.slice(iW.from, iW.toB).split(JS))
        })
      } else AF && (!FF.hasFocus && uF.facet(UW) || bA(AF, hF)) && (AF = null);
      if (!SF && !AF) return !1;
      if ((NF.mac || NF.android) && SF && SF.from == SF.to && SF.from == hF.head - 1 && /^\. ?$/.test(SF.insert.toString()) && "off" == FF.contentDOM.getAttribute("autocorrect") ? (AF && 2 == SF.insert.length && (AF = CF.m.single(AF.main.anchor - 1, AF.main.head - 1)), SF = {
          from: SF.from,
          to: SF.to,
          insert: CF.L.of([SF.insert.toString().replace(".", " ")])
        }) : uF.doc.lineAt(hF.from).to < hF.to && FF.docView.lineHasWidget(hF.to) && FF.inputState.insertingTextAt > Date.now() - 50 ? SF = {
          from: hF.from,
          to: hF.to,
          insert: uF.toText(FF.inputState.insertingText)
        } : NF.chrome && SF && SF.from == SF.to && SF.from == hF.head && "\n " == SF.insert.toString() && FF.lineWrapping && (AF && (AF = CF.m.single(AF.main.anchor - 1, AF.main.head - 1)), SF = {
          from: hF.from,
          to: hF.to,
          insert: CF.L.of([" "])
        }), SF) return uC(FF, SF, AF, bW);
      if (AF && !bA(AF, hF)) {
        let WF = !1,
          SF = "select";
        return FF.inputState.lastSelectionTime > Date.now() - 50 && ("select" == FF.inputState.lastSelectionOrigin && (WF = !0), SF = FF.inputState.lastSelectionOrigin, "select.pointer" == SF && (AF = XS(uF.facet(CS).map((WF => WF(FF))), AF))), FF.dispatch({
          selection: AF,
          scrollIntoView: WF,
          userEvent: SF
        }), !0
      }
      return !1
    }

    function uC(FF, WF, SF) {
      let AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
      if (NF.ios && FF.inputState.flushIOSKey(WF)) return !0;
      let uF = FF.state.selection.main;
      if (NF.android && (WF.to == uF.to && (WF.from == uF.from || WF.from == uF.from - 1 && " " == FF.state.sliceDoc(WF.from, uF.from)) && 1 == WF.insert.length && 2 == WF.insert.lines && AW(FF.contentDOM, "Enter", 13) || (WF.from == uF.from - 1 && WF.to == uF.to && 0 == WF.insert.length || 8 == AF && WF.insert.length < WF.to - WF.from && WF.to > uF.head) && AW(FF.contentDOM, "Backspace", 8) || WF.from == uF.from && WF.to == uF.to + 1 && 0 == WF.insert.length && AW(FF.contentDOM, "Delete", 46))) return !0;
      let hF, bW = WF.insert.toString();
      FF.inputState.composing >= 0 && FF.inputState.composing++;
      let dF = () => hF || (hF = function(FF, WF, SF) {
        let AF, uF = FF.state,
          hF = uF.selection.main,
          bW = -1;
        if (WF.from == WF.to && WF.from < hF.from || WF.from > hF.to) {
          let SF = WF.from < hF.from ? -1 : 1,
            CF = SF < 0 ? hF.from : hF.to,
            AF = wS(uF.facet(CS).map((WF => WF(FF))), CF, SF);
          WF.from == AF && (bW = AF)
        }
        if (bW > -1) AF = {
          changes: WF,
          selection: CF.m.cursor(WF.from + WF.insert.length, -1)
        };
        else if (WF.from >= hF.from && WF.to <= hF.to && WF.to - WF.from >= (hF.to - hF.from) / 3 && (!SF || SF.main.empty && SF.main.from == WF.from + WF.insert.length) && FF.inputState.composing < 0) {
          let SF = hF.from < WF.from ? uF.sliceDoc(hF.from, WF.from) : "",
            CF = hF.to > WF.to ? uF.sliceDoc(WF.to, hF.to) : "";
          AF = uF.replaceSelection(FF.state.toText(SF + WF.insert.sliceString(0, void 0, FF.state.lineBreak) + CF))
        } else {
          let bW = uF.changes(WF),
            dF = SF && SF.main.to <= bW.newLength ? SF.main : void 0;
          if (uF.selection.Bu.length > 1 && (FF.inputState.composing >= 0 || FF.inputState.compositionPendingChange) && WF.to <= hF.to + 10 && WF.to >= hF.to - 10) {
            let PF, RF = FF.state.sliceDoc(WF.from, WF.to),
              iW = SF && fS(FF, SF.main.head);
            if (iW) {
              let FF = WF.insert.length - (WF.to - WF.from);
              PF = {
                from: iW.from,
                to: iW.to - FF
              }
            } else PF = FF.state.doc.lineAt(hF.head);
            let eF = hF.to - WF.to;
            AF = uF.changeByRange((SF => {
              if (SF.from == hF.from && SF.to == hF.to) return {
                changes: bW,
                range: dF || SF.map(bW)
              };
              let AF = SF.to - eF,
                iW = AF - RF.length;
              if (FF.state.sliceDoc(iW, AF) != RF || AF >= PF.from && iW <= PF.to) return {
                range: SF
              };
              let EF = uF.changes({
                  from: iW,
                  to: AF,
                  insert: WF.insert
                }),
                QF = SF.to - hF.to;
              return {
                changes: EF,
                range: dF ? CF.m.range(Math.max(0, dF.anchor + QF), Math.max(0, dF.head + QF)) : SF.map(EF)
              }
            }))
          } else AF = {
            changes: bW,
            selection: dF && uF.selection.replaceRange(dF)
          }
        }
        let dF = "input.type";
        (FF.composing || FF.inputState.compositionPendingChange && FF.inputState.compositionEndedAt > Date.now() - 50) && (FF.inputState.compositionPendingChange = !1, dF += ".compose", FF.inputState.compositionFirstChange && (dF += ".start", FF.inputState.compositionFirstChange = !1));
        return uF.update(AF, {
          userEvent: dF,
          scrollIntoView: !0
        })
      }(FF, WF, SF));
      return FF.state.facet(GW).some((SF => SF(FF, WF.from, WF.to, bW, dF))) || FF.dispatch(dF()), !0
    }

    function hC(FF, WF, SF, CF) {
      let AF = Math.min(FF.length, WF.length),
        uF = 0;
      for (; uF < AF && FF.charCodeAt(uF) == WF.charCodeAt(uF);) uF++;
      if (uF == AF && FF.length == WF.length) return null;
      let hF = FF.length,
        bW = WF.length;
      for (; hF > 0 && bW > 0 && FF.charCodeAt(hF - 1) == WF.charCodeAt(bW - 1);) hF--, bW--;
      if ("end" == CF) {
        SF -= hF + Math.max(0, uF - Math.min(hF, bW)) - uF
      }
      if (hF < uF && FF.length < WF.length) {
        uF -= SF <= uF && SF >= hF ? uF - SF : 0, bW = uF + (bW - hF), hF = uF
      } else if (bW < uF) {
        uF -= SF <= uF && SF >= bW ? uF - SF : 0, hF = uF + (hF - bW), bW = uF
      }
      return {
        from: uF,
        toA: hF,
        toB: bW
      }
    }

    function bA(FF, WF) {
      return WF.head == FF.main.head && WF.anchor == FF.main.anchor
    }
    class dC {
      setSelectionOrigin(FF) {
        this.lastSelectionOrigin = FF, this.lastSelectionTime = Date.now()
      }
      constructor(FF) {
        this.view = FF, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = FF.hasFocus, NF.safari && FF.contentDOM.addEventListener("input", (() => null)), NF.gecko && function(FF) {
          MC.has(FF) || (MC.add(FF), FF.addEventListener("copy", (() => {})), FF.addEventListener("cut", (() => {})))
        }(FF.contentDOM.ownerDocument)
      }
      handleEvent(FF) {
        (function(FF, WF) {
          if (!WF.bubbles) return !0;
          if (WF.defaultPrevented) return !1;
          for (let SF, CF = WF.target; CF != FF.contentDOM; CF = CF.parentNode)
            if (!CF || 11 == CF.nodeType || (SF = eS.get(CF)) && SF.isWidget() && !SF.isHidden && SF.widget.ignoreEvent(WF)) return !1;
          return !0
        })(this.view, FF) && !this.ignoreDuringComposition(FF) && ("keydown" == FF.type && this.keydown(FF) || (0 != this.view.updateState ? Promise.resolve().then((() => this.runHandlers(FF.type, FF))) : this.runHandlers(FF.type, FF)))
      }
      runHandlers(FF, WF) {
        let SF = this.handlers[FF];
        if (SF) {
          for (let FF of SF.observers) FF(this.view, WF);
          for (let FF of SF.handlers) {
            if (WF.defaultPrevented) break;
            if (FF(this.view, WF)) {
              WF.preventDefault();
              break
            }
          }
        }
      }
      ensureHandlers(FF) {
        let WF = RC(FF),
          SF = this.handlers,
          CF = this.view.contentDOM;
        for (let AF in WF)
          if ("scroll" != AF) {
            let FF = !WF[AF].handlers.length,
              uF = SF[AF];
            uF && FF != !uF.handlers.length && (CF.removeEventListener(AF, this.handleEvent), uF = null), uF || CF.addEventListener(AF, this.handleEvent, {
              passive: FF
            })
          } for (let AF in SF) "scroll" == AF || WF[AF] || CF.removeEventListener(AF, this.handleEvent);
        this.handlers = WF
      }
      keydown(FF) {
        if (this.lastKeyCode = FF.keyCode, this.lastKeyTime = Date.now(), 9 == FF.keyCode && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
        if (this.tabFocusMode > 0 && 27 != FF.keyCode && EC.indexOf(FF.keyCode) < 0 && (this.tabFocusMode = -1), NF.android && NF.chrome && !FF.synthetic && (13 == FF.keyCode || 8 == FF.keyCode)) return this.view.observer.delayAndroidKey(FF.key, FF.keyCode), !0;
        let WF;
        return !NF.ios || FF.synthetic || FF.altKey || FF.metaKey || FF.shiftKey || !((WF = iA.find((WF => WF.keyCode == FF.keyCode))) && !FF.ctrlKey || eC.indexOf(FF.key) > -1 && FF.ctrlKey) ? (229 != FF.keyCode && this.view.observer.forceFlush(), !1) : (this.pendingIOSKey = WF || FF, setTimeout((() => this.flushIOSKey()), 250), !0)
      }
      flushIOSKey(FF) {
        let WF = this.pendingIOSKey;
        return !!WF && (!("Enter" == WF.key && FF && FF.from < FF.to && /^\S+$/.test(FF.insert.toString())) && (this.pendingIOSKey = void 0, AW(this.view.contentDOM, WF.key, WF.keyCode, WF instanceof KeyboardEvent ? WF : void 0)))
      }
      ignoreDuringComposition(FF) {
        return !(!/^key/.test(FF.type) || FF.synthetic) && (this.composing > 0 || !!(NF.safari && !NF.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100) && (this.compositionPendingKey = !1, !0))
      }
      startMouseSelection(FF) {
        this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = FF
      }
      update(FF) {
        this.view.observer.update(FF), this.mouseSelection && this.mouseSelection.update(FF), this.draggedContent && FF.docChanged && (this.draggedContent = this.draggedContent.map(FF.changes)), FF.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0)
      }
      destroy() {
        this.mouseSelection && this.mouseSelection.destroy()
      }
    }

    function PC(FF, WF) {
      return (SF, CF) => {
        try {
          return WF.call(FF, CF, SF)
        } catch (AF) {
          XW(SF.state, AF)
        }
      }
    }

    function RC(FF) {
      let WF = Object.create(null);

      function SF(FF) {
        return WF[FF] || (WF[FF] = {
          observers: [],
          handlers: []
        })
      }
      for (let CF of FF) {
        let FF = CF.spec,
          WF = FF && FF.plugin.domEventHandlers,
          AF = FF && FF.plugin.domEventObservers;
        if (WF)
          for (let uF in WF) {
            let FF = WF[uF];
            FF && SF(uF).handlers.push(PC(CF.value, FF))
          }
        if (AF)
          for (let uF in AF) {
            let FF = AF[uF];
            FF && SF(uF).observers.push(PC(CF.value, FF))
          }
      }
      for (let CF in gA) SF(CF).handlers.push(gA[CF]);
      for (let CF in tA) SF(CF).observers.push(tA[CF]);
      return WF
    }
    const iA = [{
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
      eC = "dthko",
      EC = [16, 17, 18, 20, 91, 92, 224, 225];

    function QC(FF) {
      return .7 * Math.max(0, FF) + 8
    }
    class rA {
      constructor(FF, WF, SF, AF) {
        this.view = FF, this.startEvent = WF, this.style = SF, this.mustSelect = AF, this.scrollSpeed = {
          x: 0,
          y: 0
        }, this.scrolling = -1, this.lastEvent = WF, this.scrollParents = pF(FF.contentDOM), this.atoms = FF.state.facet(CS).map((WF => WF(FF)));
        let uF = FF.contentDOM.ownerDocument;
        uF.addEventListener("mousemove", this.move = this.move.bind(this)), uF.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = WF.shiftKey, this.multiple = FF.state.facet(CF.q.allowMultipleSelections) && function(FF, WF) {
          let SF = FF.state.facet(ZW);
          return SF.length ? SF[0](WF) : NF.mac ? WF.metaKey : WF.ctrlKey
        }(FF, WF), this.dragging = !(! function(FF, WF) {
          let {
            main: SF
          } = FF.state.selection;
          if (SF.empty) return !1;
          let CF = yW(FF.root);
          if (!CF || 0 == CF.rangeCount) return !0;
          let AF = CF.getRangeAt(0).getClientRects();
          for (let uF = 0; uF < AF.length; uF++) {
            let FF = AF[uF];
            if (FF.left <= WF.clientX && FF.right >= WF.clientX && FF.top <= WF.clientY && FF.bottom >= WF.clientY) return !0
          }
          return !1
        }(FF, WF) || 1 != mA(WF)) && null
      }
      start(FF) {
        !1 === this.dragging && this.select(FF)
      }
      move(FF) {
        if (0 == FF.buttons) return this.destroy();
        if (this.dragging || null == this.dragging && (WF = this.startEvent, SF = FF, Math.max(Math.abs(WF.clientX - SF.clientX), Math.abs(WF.clientY - SF.clientY)) < 10)) return;
        var WF, SF;
        this.select(this.lastEvent = FF);
        let CF = 0,
          AF = 0,
          uF = 0,
          hF = 0,
          bW = this.view.win.innerWidth,
          dF = this.view.win.innerHeight;
        this.scrollParents.x && ({
          left: uF,
          right: bW
        } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({
          top: hF,
          bottom: dF
        } = this.scrollParents.y.getBoundingClientRect());
        let PF = bC(this.view);
        FF.clientX - PF.left <= uF + 6 ? CF = -QC(uF - FF.clientX) : FF.clientX + PF.right >= bW - 6 && (CF = QC(FF.clientX - bW)), FF.clientY - PF.top <= hF + 6 ? AF = -QC(hF - FF.clientY) : FF.clientY + PF.bottom >= dF - 6 && (AF = QC(FF.clientY - dF)), this.setScrollSpeed(CF, AF)
      }
      up(FF) {
        null == this.dragging && this.select(this.lastEvent), this.dragging || FF.preventDefault(), this.destroy()
      }
      destroy() {
        this.setScrollSpeed(0, 0);
        let FF = this.view.contentDOM.ownerDocument;
        FF.removeEventListener("mousemove", this.move), FF.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null
      }
      setScrollSpeed(FF, WF) {
        this.scrollSpeed = {
          x: FF,
          y: WF
        }, FF || WF ? this.scrolling < 0 && (this.scrolling = setInterval((() => this.scroll()), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1)
      }
      scroll() {
        let {
          x: FF,
          y: WF
        } = this.scrollSpeed;
        FF && this.scrollParents.x && (this.scrollParents.x.scrollLeft += FF, FF = 0), WF && this.scrollParents.y && (this.scrollParents.y.scrollTop += WF, WF = 0), (FF || WF) && this.view.win.scrollBy(FF, WF), !1 === this.dragging && this.select(this.lastEvent)
      }
      select(FF) {
        let {
          view: WF
        } = this, SF = XS(this.atoms, this.style.get(FF, this.extend, this.multiple));
        !this.mustSelect && SF.eq(WF.state.selection, !1 === this.dragging) || this.view.dispatch({
          selection: SF,
          userEvent: "select.pointer"
        }), this.mustSelect = !1
      }
      update(FF) {
        FF.transactions.some((FF => FF.isUserEvent("input.type"))) ? this.destroy() : this.style.update(FF) && setTimeout((() => this.select(this.lastEvent)), 20)
      }
    }
    const gA = Object.create(null),
      tA = Object.create(null),
      TC = NF.ie && NF.ie_version < 15 || NF.ios && NF.webkit_version < 604;

    function aA(FF, WF, SF) {
      for (let CF of FF.facet(WF)) SF = CF(SF, FF);
      return SF
    }

    function kA(FF, WF) {
      WF = aA(FF.state, IW, WF);
      let SF, {
          state: AF
        } = FF,
        uF = 1,
        hF = AF.toText(WF),
        bW = hF.lines == AF.selection.Bu.length;
      if (null != xA && AF.selection.Bu.every((FF => FF.empty)) && xA == hF.toString()) {
        let FF = -1;
        SF = AF.changeByRange((SF => {
          let dF = AF.doc.lineAt(SF.from);
          if (dF.from == FF) return {
            range: SF
          };
          FF = dF.from;
          let PF = AF.toText((bW ? hF.line(uF++).text : WF) + AF.lineBreak);
          return {
            changes: {
              from: dF.from,
              insert: PF
            },
            range: CF.m.cursor(SF.from + PF.length)
          }
        }))
      } else SF = bW ? AF.changeByRange((FF => {
        let WF = hF.line(uF++);
        return {
          changes: {
            from: FF.from,
            to: FF.to,
            insert: WF.text
          },
          range: CF.m.cursor(FF.from + WF.length)
        }
      })) : AF.replaceSelection(hF);
      FF.dispatch(SF, {
        userEvent: "input.paste",
        scrollIntoView: !0
      })
    }

    function qA(FF, WF, SF, AF) {
      if (1 == AF) return CF.m.cursor(WF, SF);
      if (2 == AF) return function(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          AF = FF.charCategorizer(WF),
          uF = FF.doc.lineAt(WF),
          hF = WF - uF.from;
        if (0 == uF.length) return CF.m.cursor(WF);
        0 == hF ? SF = 1 : hF == uF.length && (SF = -1);
        let bW = hF,
          dF = hF;
        SF < 0 ? bW = (0, CF.bb)(uF.text, hF, !1) : dF = (0, CF.bb)(uF.text, hF);
        let PF = AF(uF.text.slice(bW, dF));
        for (; bW > 0;) {
          let FF = (0, CF.bb)(uF.text, bW, !1);
          if (AF(uF.text.slice(FF, bW)) != PF) break;
          bW = FF
        }
        for (; dF < uF.length;) {
          let FF = (0, CF.bb)(uF.text, dF);
          if (AF(uF.text.slice(dF, FF)) != PF) break;
          dF = FF
        }
        return CF.m.range(bW + uF.from, dF + uF.from)
      }(FF.state, WF, SF);
      {
        let AF = FF.docView.lineAt(WF, SF),
          uF = FF.state.doc.lineAt(AF ? AF.posAtEnd : WF),
          hF = AF ? AF.posAtStart : uF.from,
          bW = AF ? AF.posAtEnd : uF.to;
        return bW < FF.state.doc.length && bW == uF.to && bW++, CF.m.range(hF, bW)
      }
    }
    tA.scroll = FF => {
      FF.inputState.lastScrollTop = FF.scrollDOM.scrollTop, FF.inputState.lastScrollLeft = FF.scrollDOM.scrollLeft
    }, tA.wheel = tA.mousewheel = FF => {
      FF.inputState.lastWheelEvent = Date.now()
    }, gA.keydown = (FF, WF) => (FF.inputState.setSelectionOrigin("select"), 27 == WF.keyCode && 0 != FF.inputState.tabFocusMode && (FF.inputState.tabFocusMode = Date.now() + 2e3), !1), tA.touchstart = (FF, WF) => {
      let SF = FF.inputState,
        CF = WF.targetTouches[0];
      SF.lastTouchTime = Date.now(), CF && (SF.lastTouchX = CF.clientX, SF.lastTouchY = CF.clientY), SF.setSelectionOrigin("select.pointer")
    }, tA.touchmove = FF => {
      FF.inputState.setSelectionOrigin("select.pointer")
    }, gA.mousedown = (FF, WF) => {
      if (FF.observer.flush(), FF.inputState.lastTouchTime > Date.now() - 2e3) return !1;
      let SF = null;
      for (let CF of FF.state.facet(YW))
        if (SF = CF(FF, WF), SF) break;
      if (SF || 0 != WF.button || (SF = function(FF, WF) {
          let SF = FF.posAndSideAtCoords({
              x: WF.clientX,
              y: WF.clientY
            }, !1),
            AF = mA(WF),
            uF = FF.state.selection;
          return {
            update(FF) {
              FF.docChanged && (SF.pos = FF.changes.mapPos(SF.pos), uF = uF.map(FF.changes))
            },
            get(WF, hF, bW) {
              let dF, PF = FF.posAndSideAtCoords({
                  x: WF.clientX,
                  y: WF.clientY
                }, !1),
                RF = qA(FF, PF.pos, PF.assoc, AF);
              if (SF.pos != PF.pos && !hF) {
                let WF = qA(FF, SF.pos, SF.assoc, AF),
                  uF = Math.min(WF.from, RF.from),
                  hF = Math.max(WF.to, RF.to);
                RF = uF < RF.from ? CF.m.range(uF, hF, RF.assoc) : CF.m.range(hF, uF, RF.assoc)
              }
              return hF ? uF.replaceRange(uF.main.extend(RF.from, RF.to, RF.assoc)) : bW && 1 == AF && uF.Bu.length > 1 && (dF = function(FF, WF) {
                for (let SF = 0; SF < FF.Bu.length; SF++) {
                  let {
                    from: AF,
                    to: uF
                  } = FF.Bu[SF];
                  if (AF <= WF && uF >= WF) return CF.m.create(FF.Bu.slice(0, SF).concat(FF.Bu.slice(SF + 1)), FF.mainIndex == SF ? 0 : FF.mainIndex - (FF.mainIndex > SF ? 1 : 0))
                }
                return null
              }(uF, PF.pos)) ? dF : bW ? uF.addRange(RF) : CF.m.create([RF])
            }
          }
        }(FF, WF)), SF) {
        let CF = !FF.hasFocus;
        FF.inputState.startMouseSelection(new rA(FF, WF, SF, CF)), CF && FF.observer.ignore((() => {
          SW(FF.contentDOM);
          let WF = FF.root.activeElement;
          WF && !WF.contains(FF.contentDOM) && WF.blur()
        }));
        let AF = FF.inputState.mouseSelection;
        if (AF) return AF.start(WF), !1 === AF.dragging
      } else FF.inputState.setSelectionOrigin("select.pointer");
      return !1
    };
    const VC = NF.ie && NF.ie_version <= 11;
    let NC = null,
      DC = 0,
      LC = 0;

    function mA(FF) {
      if (!VC) return FF.detail;
      let WF = NC,
        SF = LC;
      return NC = FF, LC = Date.now(), DC = !WF || SF > Date.now() - 400 && Math.abs(WF.clientX - FF.clientX) < 2 && Math.abs(WF.clientY - FF.clientY) < 2 ? (DC + 1) % 3 : 1
    }

    function OC(FF, WF, SF, CF) {
      if (!(SF = aA(FF.state, IW, SF))) return;
      let AF = FF.posAtCoords({
          x: WF.clientX,
          y: WF.clientY
        }, !1),
        {
          draggedContent: uF
        } = FF.inputState,
        hF = CF && uF && function(FF, WF) {
          let SF = FF.state.facet(oW);
          return SF.length ? SF[0](WF) : NF.mac ? !WF.altKey : !WF.ctrlKey
        }(FF, WF) ? {
          from: uF.from,
          to: uF.to
        } : null,
        bW = {
          from: AF,
          insert: SF
        },
        dF = FF.state.changes(hF ? [hF, bW] : bW);
      FF.focus(), FF.dispatch({
        changes: dF,
        selection: {
          anchor: dF.mapPos(AF, -1),
          head: dF.mapPos(AF, 1)
        },
        userEvent: hF ? "move.drop" : "input.drop"
      }), FF.inputState.draggedContent = null
    }
    gA.dragstart = (FF, WF) => {
      let {
        selection: {
          main: SF
        }
      } = FF.state;
      if (WF.target.draggable) {
        let AF = FF.docView.tile.nearest(WF.target);
        if (AF && AF.isWidget()) {
          let FF = AF.posAtStart,
            WF = FF + AF.length;
          (FF >= SF.to || WF <= SF.from) && (SF = CF.m.range(FF, WF))
        }
      }
      let {
        inputState: AF
      } = FF;
      return AF.mouseSelection && (AF.mouseSelection.dragging = !0), AF.draggedContent = SF, WF.dataTransfer && (WF.dataTransfer.setData("Text", aA(FF.state, fW, FF.state.sliceDoc(SF.from, SF.to))), WF.dataTransfer.effectAllowed = "copyMove"), !1
    }, gA.dragend = FF => (FF.inputState.draggedContent = null, !1), gA.drop = (FF, WF) => {
      if (!WF.dataTransfer) return !1;
      if (FF.state.readOnly) return !0;
      let SF = WF.dataTransfer.files;
      if (SF && SF.length) {
        let CF = Array(SF.length),
          AF = 0,
          uF = () => {
            ++AF == SF.length && OC(FF, WF, CF.filter((FF => null != FF)).join(FF.state.lineBreak), !1)
          };
        for (let FF = 0; FF < SF.length; FF++) {
          let WF = new FileReader;
          WF.onerror = uF, WF.onload = () => {
            /[\x00-\x08\x0e-\x1f]{2}/.test(WF.result) || (CF[FF] = WF.result), uF()
          }, WF.readAsText(SF[FF])
        }
        return !0
      } {
        let SF = WF.dataTransfer.getData("Text");
        if (SF) return OC(FF, WF, SF, !0), !0
      }
      return !1
    }, gA.paste = (FF, WF) => {
      if (FF.state.readOnly) return !0;
      FF.observer.flush();
      let SF = TC ? null : WF.clipboardData;
      return SF ? (kA(FF, SF.getData("text/plain") || SF.getData("text/uri-list")), !0) : (function(FF) {
        let WF = FF.dom.parentNode;
        if (!WF) return;
        let SF = WF.appendChild(document.createElement("textarea"));
        SF.style.cssText = "position: fixed; left: -10000px; top: 10px", SF.focus(), setTimeout((() => {
          FF.focus(), SF.remove(), kA(FF, SF.value)
        }), 50)
      }(FF), !1)
    };
    let xA = null;
    gA.copy = gA.cut = (FF, WF) => {
      if (!nF(FF.contentDOM, FF.observer.selectionRange)) return !1;
      let {
        text: SF,
        Bu: CF,
        linewise: AF
      } = function(FF) {
        let WF = [],
          SF = [],
          CF = !1;
        for (let AF of FF.selection.Bu) AF.empty || (WF.push(FF.sliceDoc(AF.from, AF.to)), SF.push(AF));
        if (!WF.length) {
          let AF = -1;
          for (let {
              from: CF
            }
            of FF.selection.Bu) {
            let uF = FF.doc.lineAt(CF);
            uF.number > AF && (WF.push(uF.text), SF.push({
              from: uF.from,
              to: Math.min(FF.doc.length, uF.to + 1)
            })), AF = uF.number
          }
          CF = !0
        }
        return {
          text: aA(FF, fW, WF.join(FF.lineBreak)),
          Bu: SF,
          linewise: CF
        }
      }(FF.state);
      if (!SF && !AF) return !1;
      xA = AF ? SF : null, "cut" != WF.type || FF.state.readOnly || FF.dispatch({
        changes: CF,
        scrollIntoView: !0,
        userEvent: "delete.cut"
      });
      let uF = TC ? null : WF.clipboardData;
      return uF ? (uF.clearData(), uF.setData("text/plain", SF), !0) : (function(FF, WF) {
        let SF = FF.dom.parentNode;
        if (!SF) return;
        let CF = SF.appendChild(document.createElement("textarea"));
        CF.style.cssText = "position: fixed; left: -10000px; top: 10px", CF.value = WF, CF.focus(), CF.selectionEnd = WF.length, CF.selectionStart = 0, setTimeout((() => {
          CF.remove(), FF.focus()
        }), 50)
      }(FF, SF), !1)
    };
    const ZC = CF.e.define();

    function oC(FF, WF) {
      let SF = [];
      for (let CF of FF.facet(zS)) {
        let AF = CF(FF, WF);
        AF && SF.push(AF)
      }
      return SF.length ? FF.update({
        effects: SF,
        annotations: ZC.of(!0)
      }) : null
    }

    function YC(FF) {
      setTimeout((() => {
        let WF = FF.hasFocus;
        if (WF != FF.inputState.notifiedFocused) {
          let SF = oC(FF.state, WF);
          SF ? FF.dispatch(SF) : FF.update([])
        }
      }), 10)
    }
    tA.focus = FF => {
      FF.inputState.lastFocusTime = Date.now(), FF.scrollDOM.scrollTop || !FF.inputState.lastScrollTop && !FF.inputState.lastScrollLeft || (FF.scrollDOM.scrollTop = FF.inputState.lastScrollTop, FF.scrollDOM.scrollLeft = FF.inputState.lastScrollLeft), YC(FF)
    }, tA.blur = FF => {
      FF.observer.clearSelectionRange(), YC(FF)
    }, tA.compositionstart = tA.compositionupdate = FF => {
      FF.observer.editContext || (null == FF.inputState.compositionFirstChange && (FF.inputState.compositionFirstChange = !0), FF.inputState.composing < 0 && (FF.inputState.composing = 0))
    }, tA.compositionend = FF => {
      FF.observer.editContext || (FF.inputState.composing = -1, FF.inputState.compositionEndedAt = Date.now(), FF.inputState.compositionPendingKey = !0, FF.inputState.compositionPendingChange = FF.observer.pendingRecords().length > 0, FF.inputState.compositionFirstChange = null, NF.chrome && NF.android ? FF.observer.flushSoon() : FF.inputState.compositionPendingChange ? Promise.resolve().then((() => FF.observer.flush())) : setTimeout((() => {
        FF.inputState.composing < 0 && FF.docView.hasComposition && FF.update([])
      }), 50))
    }, tA.contextmenu = FF => {
      FF.inputState.lastContextMenu = Date.now()
    }, gA.beforeinput = (FF, WF) => {
      var SF, CF;
      if ("insertText" != WF.inputType && "insertCompositionText" != WF.inputType || (FF.inputState.insertingText = WF.data, FF.inputState.insertingTextAt = Date.now()), "insertReplacementText" == WF.inputType && FF.observer.editContext) {
        let CF = null === (SF = WF.dataTransfer) || void 0 === SF ? void 0 : SF.getData("text/plain"),
          AF = WF.getTargetRanges();
        if (CF && AF.length) {
          let WF = AF[0],
            SF = FF.posAtDOM(WF.startContainer, WF.startOffset),
            uF = FF.posAtDOM(WF.endContainer, WF.endOffset);
          return uC(FF, {
            from: SF,
            to: uF,
            insert: FF.state.toText(CF)
          }, null), !0
        }
      }
      let AF;
      if (NF.chrome && NF.android && (AF = iA.find((FF => FF.inputType == WF.inputType))) && (FF.observer.delayAndroidKey(AF.key, AF.keyCode), "Backspace" == AF.key || "Delete" == AF.key)) {
        let WF = (null === (CF = window.visualViewport) || void 0 === CF ? void 0 : CF.height) || 0;
        setTimeout((() => {
          var SF;
          ((null === (SF = window.visualViewport) || void 0 === SF ? void 0 : SF.height) || 0) > WF + 10 && FF.hasFocus && (FF.contentDOM.blur(), FF.focus())
        }), 100)
      }
      return NF.ios && "deleteContentForward" == WF.inputType && FF.observer.flushSoon(), NF.safari && "insertText" == WF.inputType && FF.inputState.composing >= 0 && setTimeout((() => tA.compositionend(FF, WF)), 20), !1
    };
    const MC = new Set;
    const cA = ["pre-wrap", "normal", "pre-line", "break-spaces"];
    let GC = !1;

    function zA() {
      GC = !1
    }
    class IC {
      constructor(FF) {
        this.lineWrapping = FF, this.doc = CF.L.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30
      }
      heightForGap(FF, WF) {
        let SF = this.doc.lineAt(WF).number - this.doc.lineAt(FF).number + 1;
        return this.lineWrapping && (SF += Math.max(0, Math.ceil((WF - FF - SF * this.lineLength * .5) / this.lineLength))), this.lineHeight * SF
      }
      heightForLine(FF) {
        if (!this.lineWrapping) return this.lineHeight;
        return (1 + Math.max(0, Math.ceil((FF - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight
      }
      setDoc(FF) {
        return this.doc = FF, this
      }
      mustRefreshForWrapping(FF) {
        return cA.indexOf(FF) > -1 != this.lineWrapping
      }
      mustRefreshForHeights(FF) {
        let WF = !1;
        for (let SF = 0; SF < FF.length; SF++) {
          let CF = FF[SF];
          CF < 0 ? SF++ : this.heightSamples[Math.floor(10 * CF)] || (WF = !0, this.heightSamples[Math.floor(10 * CF)] = !0)
        }
        return WF
      }
      refresh(FF, WF, SF, CF, AF, uF) {
        let hF = cA.indexOf(FF) > -1,
          bW = Math.abs(WF - this.lineHeight) > .3 || this.lineWrapping != hF || Math.abs(SF - this.charWidth) > .1;
        if (this.lineWrapping = hF, this.lineHeight = WF, this.charWidth = SF, this.textHeight = CF, this.lineLength = AF, bW) {
          this.heightSamples = {};
          for (let FF = 0; FF < uF.length; FF++) {
            let WF = uF[FF];
            WF < 0 ? FF++ : this.heightSamples[Math.floor(10 * WF)] = !0
          }
        }
        return bW
      }
    }
    class fC {
      constructor(FF, WF) {
        this.from = FF, this.heights = WF, this.index = 0
      }
      get more() {
        return this.index < this.heights.length
      }
    }
    class yA {
      constructor(FF, WF, SF, CF, AF) {
        this.from = FF, this.length = WF, this.top = SF, this.height = CF, this._content = AF
      }
      get type() {
        return "number" == typeof this._content ? oF.Text : Array.isArray(this._content) ? this._content : this._content.type
      }
      get to() {
        return this.from + this.length
      }
      get bottom() {
        return this.top + this.height
      }
      get widget() {
        return this._content instanceof GF ? this._content.widget : null
      }
      get widgetLineBreaks() {
        return "number" == typeof this._content ? this._content : 0
      }
      join(FF) {
        let WF = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(FF._content) ? FF._content : [FF]);
        return new yA(this.from, this.length + FF.length, this.top, this.height + FF.height, WF)
      }
    }
    var sC = function(FF) {
      return FF[FF.ByPos = 0] = "ByPos", FF[FF.ByHeight = 1] = "ByHeight", FF[FF.ByPosNoHeight = 2] = "ByPosNoHeight", FF
    }(sC || (sC = {}));
    const nC = .001;
    class HC {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.length = FF, this.height = WF, this.flags = SF
      }
      get outdated() {
        return (2 & this.flags) > 0
      }
      set outdated(FF) {
        this.flags = (FF ? 2 : 0) | -3 & this.flags
      }
      setHeight(FF) {
        this.height != FF && (Math.abs(this.height - FF) > nC && (GC = !0), this.height = FF)
      }
      replace(FF, WF, SF) {
        return HC.of(SF)
      }
      decomposeLeft(FF, WF) {
        WF.push(this)
      }
      decomposeRight(FF, WF) {
        WF.push(this)
      }
      applyChanges(FF, WF, SF, CF) {
        let AF = this,
          uF = SF.doc;
        for (let hF = CF.length - 1; hF >= 0; hF--) {
          let {
            fromA: bW,
            toA: dF,
            fromB: PF,
            toB: RF
          } = CF[hF], iW = AF.lineAt(bW, sC.ByPosNoHeight, SF.setDoc(WF), 0, 0), eF = iW.to >= dF ? iW : AF.lineAt(dF, sC.ByPosNoHeight, SF, 0, 0);
          for (RF += eF.to - dF, dF = eF.to; hF > 0 && iW.from <= CF[hF - 1].toA;) bW = CF[hF - 1].fromA, PF = CF[hF - 1].fromB, hF--, bW < iW.from && (iW = AF.lineAt(bW, sC.ByPosNoHeight, SF, 0, 0));
          PF += iW.from - bW, bW = iW.from;
          let EF = JC.build(SF.setDoc(uF), FF, PF, RF);
          AF = KC(AF, AF.replace(bW, dF, EF))
        }
        return AF.updateHeight(SF, 0)
      }
      static empty() {
        return new UC(0, 0, 0)
      }
      static of (FF) {
        if (1 == FF.length) return FF[0];
        let WF = 0,
          SF = FF.length,
          CF = 0,
          AF = 0;
        for (;;)
          if (WF == SF)
            if (CF > 2 * AF) {
              let AF = FF[WF - 1];
              AF.break ? FF.splice(--WF, 1, AF.left, null, AF.right) : FF.splice(--WF, 1, AF.left, AF.right), SF += 1 + AF.break, CF -= AF.size
            } else {
              if (!(AF > 2 * CF)) break;
              {
                let WF = FF[SF];
                WF.break ? FF.splice(SF, 1, WF.left, null, WF.right) : FF.splice(SF, 1, WF.left, WF.right), SF += 2 + WF.break, AF -= WF.size
              }
            }
        else if (CF < AF) {
          let SF = FF[WF++];
          SF && (CF += SF.size)
        } else {
          let WF = FF[--SF];
          WF && (AF += WF.size)
        }
        let uF = 0;
        return null == FF[WF - 1] ? (uF = 1, WF--) : null == FF[WF] && (uF = 1, SF++), new jA(HC.of(FF.slice(0, WF)), uF, HC.of(FF.slice(SF)))
      }
    }

    function KC(FF, WF) {
      return FF == WF ? FF : (FF.constructor != WF.constructor && (GC = !0), WF)
    }
    HC.prototype.size = 1;
    const wC = YF.replace({});
    class XC extends HC {
      constructor(FF, WF, SF) {
        super(FF, WF), this.deco = SF, this.spaceAbove = 0
      }
      mainBlock(FF, WF) {
        return new yA(WF, this.length, FF + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0)
      }
      blockAt(FF, WF, SF, CF) {
        return this.spaceAbove && FF < SF + this.spaceAbove ? new yA(CF, 0, SF, this.spaceAbove, wC) : this.mainBlock(SF, CF)
      }
      lineAt(FF, WF, SF, CF, AF) {
        let uF = this.mainBlock(CF, AF);
        return this.spaceAbove ? this.blockAt(0, SF, CF, AF).join(uF) : uF
      }
      forEachLine(FF, WF, SF, CF, AF, uF) {
        FF <= AF + this.length && WF >= AF && uF(this.lineAt(0, sC.ByPos, SF, CF, AF))
      }
      setMeasuredHeight(FF) {
        let WF = FF.heights[FF.index++];
        WF < 0 ? (this.spaceAbove = -WF, WF = FF.heights[FF.index++]) : this.spaceAbove = 0, this.setHeight(WF)
      }
      updateHeight(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 3 ? arguments[3] : void 0;
        return SF && SF.from <= WF && SF.more && this.setMeasuredHeight(SF), this.outdated = !1, this
      }
      toString() {
        return `block(${this.length})`
      }
    }
    class UC extends XC {
      constructor(FF, WF, SF) {
        super(FF, WF, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = SF
      }
      mainBlock(FF, WF) {
        return new yA(WF, this.length, FF + this.spaceAbove, this.height - this.spaceAbove, this.breaks)
      }
      replace(FF, WF, SF) {
        let CF = SF[0];
        return 1 == SF.length && (CF instanceof UC || CF instanceof BC && 4 & CF.flags) && Math.abs(this.length - CF.length) < 10 ? (CF instanceof BC ? CF = new UC(CF.length, this.height, this.spaceAbove) : CF.height = this.height, this.outdated || (CF.outdated = !1), CF) : HC.of(SF)
      }
      updateHeight(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = arguments.length > 3 ? arguments[3] : void 0;
        return CF && CF.from <= WF && CF.more ? this.setMeasuredHeight(CF) : (SF || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, FF.heightForLine(this.length - this.collapsed)) + this.breaks * FF.lineHeight)), this.outdated = !1, this
      }
      toString() {
        return `line(${this.length}${this.collapsed?-this.collapsed:""}${this.widgetHeight?":"+this.widgetHeight:""})`
      }
    }
    class BC extends HC {
      constructor(FF) {
        super(FF, 0)
      }
      heightMetrics(FF, WF) {
        let SF, CF = FF.doc.lineAt(WF).number,
          AF = FF.doc.lineAt(WF + this.length).number,
          uF = AF - CF + 1,
          hF = 0;
        if (FF.lineWrapping) {
          let WF = Math.min(this.height, FF.lineHeight * uF);
          SF = WF / uF, this.length > uF + 1 && (hF = (this.height - WF) / (this.length - uF - 1))
        } else SF = this.height / uF;
        return {
          firstLine: CF,
          lastLine: AF,
          perLine: SF,
          perChar: hF
        }
      }
      blockAt(FF, WF, SF, CF) {
        let {
          firstLine: AF,
          lastLine: uF,
          perLine: hF,
          perChar: bW
        } = this.heightMetrics(WF, CF);
        if (WF.lineWrapping) {
          let AF = CF + (FF < WF.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (FF - SF) / this.height)) * this.length)),
            uF = WF.doc.lineAt(AF),
            dF = hF + uF.length * bW,
            PF = Math.max(SF, FF - dF / 2);
          return new yA(uF.from, uF.length, PF, dF, 0)
        } {
          let CF = Math.max(0, Math.min(uF - AF, Math.floor((FF - SF) / hF))),
            {
              from: bW,
              length: dF
            } = WF.doc.line(AF + CF);
          return new yA(bW, dF, SF + hF * CF, hF, 0)
        }
      }
      lineAt(FF, WF, SF, CF, AF) {
        if (WF == sC.ByHeight) return this.blockAt(FF, SF, CF, AF);
        if (WF == sC.ByPosNoHeight) {
          let {
            from: WF,
            to: CF
          } = SF.doc.lineAt(FF);
          return new yA(WF, CF - WF, 0, 0, 0)
        }
        let {
          firstLine: uF,
          perLine: hF,
          perChar: bW
        } = this.heightMetrics(SF, AF), dF = SF.doc.lineAt(FF), PF = hF + dF.length * bW, RF = dF.number - uF, iW = CF + hF * RF + bW * (dF.from - AF - RF);
        return new yA(dF.from, dF.length, Math.max(CF, Math.min(iW, CF + this.height - PF)), PF, 0)
      }
      forEachLine(FF, WF, SF, CF, AF, uF) {
        FF = Math.max(FF, AF), WF = Math.min(WF, AF + this.length);
        let {
          firstLine: hF,
          perLine: bW,
          perChar: dF
        } = this.heightMetrics(SF, AF);
        for (let PF = FF, RF = CF; PF <= WF;) {
          let WF = SF.doc.lineAt(PF);
          if (PF == FF) {
            let SF = WF.number - hF;
            RF += bW * SF + dF * (FF - AF - SF)
          }
          let CF = bW + dF * WF.length;
          uF(new yA(WF.from, WF.length, RF, CF, 0)), RF += CF, PF = WF.to + 1
        }
      }
      replace(FF, WF, SF) {
        let CF = this.length - WF;
        if (CF > 0) {
          let FF = SF[SF.length - 1];
          FF instanceof BC ? SF[SF.length - 1] = new BC(FF.length + CF) : SF.push(null, new BC(CF - 1))
        }
        if (FF > 0) {
          let WF = SF[0];
          WF instanceof BC ? SF[0] = new BC(FF + WF.length) : SF.unshift(new BC(FF - 1), null)
        }
        return HC.of(SF)
      }
      decomposeLeft(FF, WF) {
        WF.push(new BC(FF - 1), null)
      }
      decomposeRight(FF, WF) {
        WF.push(null, new BC(this.length - FF - 1))
      }
      updateHeight(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = arguments.length > 3 ? arguments[3] : void 0,
          AF = WF + this.length;
        if (CF && CF.from <= WF + this.length && CF.more) {
          let SF = [],
            uF = Math.max(WF, CF.from),
            hF = -1;
          for (CF.from > WF && SF.push(new BC(CF.from - WF - 1).updateHeight(FF, WF)); uF <= AF && CF.more;) {
            let WF = FF.doc.lineAt(uF).length;
            SF.length && SF.push(null);
            let AF = CF.heights[CF.index++],
              bW = 0;
            AF < 0 && (bW = -AF, AF = CF.heights[CF.index++]), -1 == hF ? hF = AF : Math.abs(AF - hF) >= nC && (hF = -2);
            let dF = new UC(WF, AF, bW);
            dF.outdated = !1, SF.push(dF), uF += WF + 1
          }
          uF <= AF && SF.push(null, new BC(AF - uF).updateHeight(FF, uF));
          let bW = HC.of(SF);
          return (hF < 0 || Math.abs(bW.height - this.height) >= nC || Math.abs(hF - this.heightMetrics(FF, WF).perLine) >= nC) && (GC = !0), KC(this, bW)
        }
        return (SF || this.outdated) && (this.setHeight(FF.heightForGap(WF, WF + this.length)), this.outdated = !1), this
      }
      toString() {
        return `gap(${this.length})`
      }
    }
    class jA extends HC {
      constructor(FF, WF, SF) {
        super(FF.length + WF + SF.length, FF.height + SF.height, WF | (FF.outdated || SF.outdated ? 2 : 0)), this.left = FF, this.right = SF, this.size = FF.size + SF.size
      }
      get break() {
        return 1 & this.flags
      }
      blockAt(FF, WF, SF, CF) {
        let AF = SF + this.left.height;
        return FF < AF ? this.left.blockAt(FF, WF, SF, CF) : this.right.blockAt(FF, WF, AF, CF + this.left.length + this.break)
      }
      lineAt(FF, WF, SF, CF, AF) {
        let uF = CF + this.left.height,
          hF = AF + this.left.length + this.break,
          bW = WF == sC.ByHeight ? FF < uF : FF < hF,
          dF = bW ? this.left.lineAt(FF, WF, SF, CF, AF) : this.right.lineAt(FF, WF, SF, uF, hF);
        if (this.break || (bW ? dF.to < hF : dF.from > hF)) return dF;
        let PF = WF == sC.ByPosNoHeight ? sC.ByPosNoHeight : sC.ByPos;
        return bW ? dF.join(this.right.lineAt(hF, PF, SF, uF, hF)) : this.left.lineAt(hF, PF, SF, CF, AF).join(dF)
      }
      forEachLine(FF, WF, SF, CF, AF, uF) {
        let hF = CF + this.left.height,
          bW = AF + this.left.length + this.break;
        if (this.break) FF < bW && this.left.forEachLine(FF, WF, SF, CF, AF, uF), WF >= bW && this.right.forEachLine(FF, WF, SF, hF, bW, uF);
        else {
          let dF = this.lineAt(bW, sC.ByPos, SF, CF, AF);
          FF < dF.from && this.left.forEachLine(FF, dF.from - 1, SF, CF, AF, uF), dF.to >= FF && dF.from <= WF && uF(dF), WF > dF.to && this.right.forEachLine(dF.to + 1, WF, SF, hF, bW, uF)
        }
      }
      replace(FF, WF, SF) {
        let CF = this.left.length + this.break;
        if (WF < CF) return this.balanced(this.left.replace(FF, WF, SF), this.right);
        if (FF > this.left.length) return this.balanced(this.left, this.right.replace(FF - CF, WF - CF, SF));
        let AF = [];
        FF > 0 && this.decomposeLeft(FF, AF);
        let uF = AF.length;
        for (let hF of SF) AF.push(hF);
        if (FF > 0 && vA(AF, uF - 1), WF < this.length) {
          let FF = AF.length;
          this.decomposeRight(WF, AF), vA(AF, FF)
        }
        return HC.of(AF)
      }
      decomposeLeft(FF, WF) {
        let SF = this.left.length;
        if (FF <= SF) return this.left.decomposeLeft(FF, WF);
        WF.push(this.left), this.break && (SF++, FF >= SF && WF.push(null)), FF > SF && this.right.decomposeLeft(FF - SF, WF)
      }
      decomposeRight(FF, WF) {
        let SF = this.left.length,
          CF = SF + this.break;
        if (FF >= CF) return this.right.decomposeRight(FF - CF, WF);
        FF < SF && this.left.decomposeRight(FF, WF), this.break && FF < CF && WF.push(null), WF.push(this.right)
      }
      balanced(FF, WF) {
        return FF.size > 2 * WF.size || WF.size > 2 * FF.size ? HC.of(this.break ? [FF, null, WF] : [FF, WF]) : (this.left = KC(this.left, FF), this.right = KC(this.right, WF), this.setHeight(FF.height + WF.height), this.outdated = FF.outdated || WF.outdated, this.size = FF.size + WF.size, this.length = FF.length + this.break+WF.length, this)
      }
      updateHeight(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = arguments.length > 3 ? arguments[3] : void 0,
          {
            left: AF,
            right: uF
          } = this,
          hF = WF + AF.length + this.break,
          bW = null;
        return CF && CF.from <= WF + AF.length && CF.more ? bW = AF = AF.updateHeight(FF, WF, SF, CF) : AF.updateHeight(FF, WF, SF), CF && CF.from <= hF + uF.length && CF.more ? bW = uF = uF.updateHeight(FF, hF, SF, CF) : uF.updateHeight(FF, hF, SF), bW ? this.balanced(AF, uF) : (this.height = this.left.height + this.right.height, this.outdated = !1, this)
      }
      toString() {
        return this.left + (this.break ? " " : "-") + this.right
      }
    }

    function vA(FF, WF) {
      let SF, CF;
      null == FF[WF] && (SF = FF[WF - 1]) instanceof BC && (CF = FF[WF + 1]) instanceof BC && FF.splice(WF - 1, 3, new BC(SF.length + 1 + CF.length))
    }
    class JC {
      constructor(FF, WF) {
        this.pos = FF, this.oracle = WF, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = FF
      }
      get isCovered() {
        return this.covering && this.nodes[this.nodes.length - 1] == this.covering
      }
      span(FF, WF) {
        if (this.lineStart > -1) {
          let FF = Math.min(WF, this.lineEnd),
            SF = this.nodes[this.nodes.length - 1];
          SF instanceof UC ? SF.length += FF - this.pos : (FF > this.pos || !this.isCovered) && this.nodes.push(new UC(FF - this.pos, -1, 0)), this.writtenTo = FF, WF > FF && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1)
        }
        this.pos = WF
      }
      point(FF, WF, SF) {
        if (FF < WF || SF.heightRelevant) {
          let CF = SF.widget ? SF.widget.estimatedHeight : 0,
            AF = SF.widget ? SF.widget.lineBreaks : 0;
          CF < 0 && (CF = this.oracle.lineHeight);
          let uF = WF - FF;
          SF.block ? this.gdF(new XC(uF, CF, SF)) : (uF || AF || CF >= 5) && this.addLineDeco(CF, AF, uF)
        } else WF > FF && this.span(FF, WF);
        this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to)
      }
      enterLine() {
        if (this.lineStart > -1) return;
        let {
          from: FF,
          to: WF
        } = this.oracle.doc.lineAt(this.pos);
        this.lineStart = FF, this.lineEnd = WF, this.writtenTo < FF && ((this.writtenTo < FF - 1 || null == this.nodes[this.nodes.length - 1]) && this.nodes.push(this.blankContent(this.writtenTo, FF - 1)), this.nodes.push(null)), this.pos > FF && this.nodes.push(new UC(this.pos - FF, -1, 0)), this.writtenTo = this.pos
      }
      blankContent(FF, WF) {
        let SF = new BC(WF - FF);
        return this.oracle.doc.lineAt(FF).to == WF && (SF.flags |= 4), SF
      }
      ensureLine() {
        this.enterLine();
        let FF = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
        if (FF instanceof UC) return FF;
        let WF = new UC(0, -1, 0);
        return this.nodes.push(WF), WF
      }
      gdF(FF) {
        this.enterLine();
        let WF = FF.deco;
        WF && WF.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(FF), this.writtenTo = this.pos = this.pos + FF.length, WF && WF.endSide > 0 && (this.covering = FF)
      }
      addLineDeco(FF, WF, SF) {
        let CF = this.ensureLine();
        CF.length += SF, CF.collapsed += SF, CF.widgetHeight = Math.max(CF.widgetHeight, FF), CF.breaks += WF, this.writtenTo = this.pos = this.pos + SF
      }
      finish(FF) {
        let WF = 0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
        !(this.lineStart > -1) || WF instanceof UC || this.isCovered ? (this.writtenTo < this.pos || null == WF) && this.nodes.push(this.blankContent(this.writtenTo, this.pos)) : this.nodes.push(new UC(0, -1, 0));
        let SF = FF;
        for (let CF of this.nodes) CF instanceof UC && CF.updateHeight(this.oracle, SF), SF += CF ? CF.length : 1;
        return this.nodes
      }
      static build(FF, WF, SF, AF) {
        let uF = new JC(SF, FF);
        return CF.C.spans(WF, SF, AF, uF, 0), uF.finish(SF)
      }
    }
    class pC {
      constructor() {
        this.changes = []
      }
      compareRange() {}
      comparePoint(FF, WF, SF, CF) {
        (FF < WF || SF && SF.heightRelevant || CF && CF.heightRelevant) && IF(FF, WF, this.changes, 5)
      }
    }

    function lC(FF, WF) {
      let SF = FF.getBoundingClientRect(),
        CF = FF.ownerDocument,
        AF = CF.defaultView || window,
        uF = Math.max(0, SF.left),
        hF = Math.min(AF.innerWidth, SF.right),
        bW = Math.max(0, SF.top),
        dF = Math.min(AF.innerHeight, SF.bottom);
      for (let PF = FF.parentNode; PF && PF != CF.body;)
        if (1 == PF.nodeType) {
          let WF = PF,
            SF = window.getComputedStyle(WF);
          if ((WF.scrollHeight > WF.clientHeight || WF.scrollWidth > WF.clientWidth) && "visible" != SF.overflow) {
            let SF = WF.getBoundingClientRect();
            uF = Math.max(uF, SF.left), hF = Math.min(hF, SF.right), bW = Math.max(bW, SF.top), dF = Math.min(PF == FF.parentNode ? AF.innerHeight : dF, SF.bottom)
          }
          PF = "absolute" == SF.position || "fixed" == SF.position ? WF.offsetParent : WF.parentNode
        } else {
          if (11 != PF.nodeType) break;
          PF = PF.host
        } return {
        left: uF - SF.left,
        right: Math.max(uF, hF) - SF.left,
        top: bW - (SF.top + WF),
        bottom: Math.max(bW, dF) - (SF.top + WF)
      }
    }

    function FA(FF, WF) {
      let SF = FF.getBoundingClientRect();
      return {
        left: 0,
        right: SF.right - SF.left,
        top: WF,
        bottom: SF.bottom - (SF.top + WF)
      }
    }
    class WA {
      constructor(FF, WF, SF, CF) {
        this.from = FF, this.to = WF, this.size = SF, this.displaySize = CF
      }
      static same(FF, WF) {
        if (FF.length != WF.length) return !1;
        for (let SF = 0; SF < FF.length; SF++) {
          let CF = FF[SF],
            AF = WF[SF];
          if (CF.from != AF.from || CF.to != AF.to || CF.size != AF.size) return !1
        }
        return !0
      }
      draw(FF, WF) {
        return YF.replace({
          widget: new SA(this.displaySize * (WF ? FF.scaleY : FF.scaleX), WF)
        }).range(this.from, this.to)
      }
    }
    class SA extends ZF {
      constructor(FF, WF) {
        super(), this.size = FF, this.vertical = WF
      }
      eq(FF) {
        return FF.size == this.size && FF.vertical == this.vertical
      }
      toDOM() {
        let FF = document.createElement("div");
        return this.vertical ? FF.style.height = this.size + "px" : (FF.style.width = this.size + "px", FF.style.height = "2px", FF.style.display = "inline-block"), FF
      }
      get estimatedHeight() {
        return this.vertical ? this.size : -1
      }
    }
    class CA {
      constructor(FF, WF) {
        this.view = FF, this.state = WF, this.pixelViewport = {
          left: 0,
          right: window.innerWidth,
          top: 0,
          bottom: 0
        }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = bu, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = PW.LTR, this.XuF = [], this.mustEnforceCursorAssoc = !1;
        let SF = WF.facet(lW).some((FF => "function" != typeof FF && "cm-lineWrapping" == FF.class));
        this.heightOracle = new IC(SF), this.stateDeco = dA(WF), this.heightMap = HC.empty().applyChanges(this.stateDeco, CF.L.empty, this.heightOracle.setDoc(WF.doc), [new PS(0, 0, 0, WF.doc.length)]);
        for (let CF = 0; CF < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); CF++);
        this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = YF.set(this.lineGaps.map((FF => FF.draw(this, !1)))), this.scrollParent = FF.scrollDOM, this.computeVisibleRanges()
      }
      updateForViewport() {
        let FF = [this.viewport],
          {
            main: WF
          } = this.state.selection;
        for (let SF = 0; SF <= 1; SF++) {
          let CF = SF ? WF.head : WF.anchor;
          if (!FF.some((FF => {
              let {
                from: WF,
                to: SF
              } = FF;
              return CF >= WF && CF <= SF
            }))) {
            let {
              from: WF,
              to: SF
            } = this.lineBlockAt(CF);
            FF.push(new AA(WF, SF))
          }
        }
        return this.viewports = FF.sort(((FF, WF) => FF.from - WF.from)), this.updateScaler()
      }
      updateScaler() {
        let FF = this.scaler;
        return this.scaler = this.heightMap.height <= 7e6 ? bu : new PA(this.heightOracle, this.heightMap, this.viewports), FF.eq(this.scaler) ? 0 : 2
      }
      updateViewportLines() {
        this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (FF => {
          this.viewportLines.push(RA(FF, this.scaler))
        }))
      }
      update(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.state = FF.state;
        let SF = this.stateDeco;
        this.stateDeco = dA(this.state);
        let AF = FF.changedRanges,
          uF = PS.extendWithRanges(AF, function(FF, WF, SF) {
            let AF = new pC;
            return CF.C.compare(FF, WF, SF, AF, 0), AF.changes
          }(SF, this.stateDeco, FF ? FF.changes : CF.ChangeSet.empty(this.state.doc.length))),
          hF = this.heightMap.height,
          bW = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
        zA(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, FF.startState.doc, this.heightOracle.setDoc(this.state.doc), uF), (this.heightMap.height != hF || GC) && (FF.flags |= 2), bW ? (this.scrollAnchorPos = FF.changes.mapPos(bW.from, -1), this.scrollAnchorHeight = bW.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = hF);
        let dF = uF.length ? this.mapViewport(this.viewport, FF.changes) : this.viewport;
        (WF && (WF.range.head < dF.from || WF.range.head > dF.to) || !this.viewportIsAppropriate(dF)) && (dF = this.getViewport(0, WF));
        let PF = dF.from != this.viewport.from || dF.to != this.viewport.to;
        this.viewport = dF, FF.flags |= this.updateForViewport(), (PF || !FF.changes.empty || 2 & FF.flags) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, FF.changes))), FF.flags |= this.computeVisibleRanges(FF.changes), WF && (this.scrollTarget = WF), !this.mustEnforceCursorAssoc && (FF.selectionSet || FF.focusChanged) && FF.view.lineWrapping && FF.state.selection.main.empty && FF.state.selection.main.assoc && !FF.state.facet(sW) && (this.mustEnforceCursorAssoc = !0)
      }
      measure() {
        let {
          view: FF
        } = this, WF = FF.contentDOM, SF = window.getComputedStyle(WF), AF = this.heightOracle, uF = SF.whiteSpace;
        this.defaultTextDirection = "rtl" == SF.direction ? PW.RTL : PW.LTR;
        let hF = this.heightOracle.mustRefreshForWrapping(uF) || "refresh" === this.mustMeasureContent,
          bW = WF.getBoundingClientRect(),
          dF = hF || this.mustMeasureContent || this.contentDOMHeight != bW.height;
        this.contentDOMHeight = bW.height, this.mustMeasureContent = !1;
        let PF = 0,
          RF = 0;
        if (bW.width && bW.height) {
          let {
            scaleX: FF,
            scaleY: SF
          } = JF(WF, bW);
          (FF > .005 && Math.abs(this.scaleX - FF) > .005 || SF > .005 && Math.abs(this.scaleY - SF) > .005) && (this.scaleX = FF, this.scaleY = SF, PF |= 16, hF = dF = !0)
        }
        let iW = (parseInt(SF.paddingTop) || 0) * this.scaleY,
          eF = (parseInt(SF.paddingBottom) || 0) * this.scaleY;
        this.paddingTop == iW && this.paddingBottom == eF || (this.paddingTop = iW, this.paddingBottom = eF, PF |= 18), this.editorWidth != FF.scrollDOM.clientWidth && (AF.lineWrapping && (dF = !0), this.editorWidth = FF.scrollDOM.clientWidth, PF |= 16);
        let EF = pF(this.view.contentDOM, !1).y;
        EF != this.scrollParent && (this.scrollParent = EF, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
        let QF = this.getScrollOffset();
        this.scrollOffset != QF && (this.scrollAnchorHeight = -1, this.scrollOffset = QF), this.scrolledToBottom = uW(this.scrollParent || FF.win);
        let rW = (this.printing ? FA : lC)(WF, this.paddingTop),
          gW = rW.top - this.pixelViewport.top,
          tW = rW.bottom - this.pixelViewport.bottom;
        this.pixelViewport = rW;
        let TF = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
        if (TF != this.inView && (this.inView = TF, TF && (dF = !0)), !this.inView && !this.scrollTarget && ! function(FF) {
            let WF = FF.getBoundingClientRect(),
              SF = FF.ownerDocument.defaultView || window;
            return WF.left < SF.innerWidth && WF.right > 0 && WF.top < SF.innerHeight && WF.bottom > 0
          }(FF.dom)) return 0;
        let aW = bW.width;
        if (this.contentDOMWidth == aW && this.editorHeight == FF.scrollDOM.clientHeight || (this.contentDOMWidth = bW.width, this.editorHeight = FF.scrollDOM.clientHeight, PF |= 16), dF) {
          let WF = FF.docView.measureVisibleLineHeights(this.viewport);
          if (AF.mustRefreshForHeights(WF) && (hF = !0), hF || AF.lineWrapping && Math.abs(aW - this.contentDOMWidth) > AF.charWidth) {
            let {
              lineHeight: SF,
              charWidth: CF,
              textHeight: bW
            } = FF.docView.measureTextSize();
            hF = SF > 0 && AF.refresh(uF, SF, CF, bW, Math.max(5, aW / CF), WF), hF && (FF.docView.minWidth = 0, PF |= 16)
          }
          gW > 0 && tW > 0 ? RF = Math.max(gW, tW) : gW < 0 && tW < 0 && (RF = Math.min(gW, tW)), zA();
          for (let SF of this.viewports) {
            let uF = SF.from == this.viewport.from ? WF : FF.docView.measureVisibleLineHeights(SF);
            this.heightMap = (hF ? HC.empty().applyChanges(this.stateDeco, CF.L.empty, this.heightOracle, [new PS(0, 0, 0, FF.state.doc.length)]) : this.heightMap).updateHeight(AF, 0, hF, new fC(SF.from, uF))
          }
          GC && (PF |= 2)
        }
        let kW = !this.viewportIsAppropriate(this.viewport, RF) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
        return kW && (2 & PF && (PF |= this.updateScaler()), this.viewport = this.getViewport(RF, this.scrollTarget), PF |= this.updateForViewport()), (2 & PF || kW) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(hF ? [] : this.lineGaps, FF)), PF |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, FF.docView.enforceCursorAssoc()), PF
      }
      get visibleTop() {
        return this.scaler.fromDOM(this.pixelViewport.top)
      }
      get visibleBottom() {
        return this.scaler.fromDOM(this.pixelViewport.bottom)
      }
      getViewport(FF, WF) {
        let SF = .5 - Math.max(-.5, Math.min(.5, FF / 1e3 / 2)),
          CF = this.heightMap,
          AF = this.heightOracle,
          {
            visibleTop: uF,
            visibleBottom: hF
          } = this,
          bW = new AA(CF.lineAt(uF - 1e3 * SF, sC.ByHeight, AF, 0, 0).from, CF.lineAt(hF + 1e3 * (1 - SF), sC.ByHeight, AF, 0, 0).to);
        if (WF) {
          let {
            head: FF
          } = WF.range;
          if (FF < bW.from || FF > bW.to) {
            let SF, uF = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
              hF = CF.lineAt(FF, sC.ByPos, AF, 0, 0);
            SF = "center" == WF.y ? (hF.top + hF.bottom) / 2 - uF / 2 : "start" == WF.y || "nearest" == WF.y && FF < bW.from ? hF.top : hF.bottom - uF, bW = new AA(CF.lineAt(SF - 500, sC.ByHeight, AF, 0, 0).from, CF.lineAt(SF + uF + 500, sC.ByHeight, AF, 0, 0).to)
          }
        }
        return bW
      }
      mapViewport(FF, WF) {
        let SF = WF.mapPos(FF.from, -1),
          CF = WF.mapPos(FF.to, 1);
        return new AA(this.heightMap.lineAt(SF, sC.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(CF, sC.ByPos, this.heightOracle, 0, 0).to)
      }
      viewportIsAppropriate(FF) {
        let {
          from: WF,
          to: SF
        } = FF, CF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!this.inView) return !0;
        let {
          top: AF
        } = this.heightMap.lineAt(WF, sC.ByPos, this.heightOracle, 0, 0), {
          bottom: uF
        } = this.heightMap.lineAt(SF, sC.ByPos, this.heightOracle, 0, 0), {
          visibleTop: hF,
          visibleBottom: bW
        } = this;
        return (0 == WF || AF <= hF - Math.max(10, Math.min(-CF, 250))) && (SF == this.state.doc.length || uF >= bW + Math.max(10, Math.min(CF, 250))) && AF > hF - 2e3 && uF < bW + 2e3
      }
      mapLineGaps(FF, WF) {
        if (!FF.length || WF.empty) return FF;
        let SF = [];
        for (let CF of FF) WF.touchesRange(CF.from, CF.to) || SF.push(new WA(WF.mapPos(CF.from), WF.mapPos(CF.to), CF.size, CF.displaySize));
        return SF
      }
      ensureLineGaps(FF, WF) {
        let SF = this.heightOracle.lineWrapping,
          AF = SF ? 1e4 : 2e3,
          uF = AF >> 1,
          hF = AF << 1;
        if (this.defaultTextDirection != PW.LTR && !SF) return [];
        let bW = [],
          dF = (AF, hF, PF, RF) => {
            if (hF - AF < uF) return;
            let iW = this.state.selection.main,
              eF = [iW.from];
            iW.empty || eF.push(iW.to);
            for (let FF of eF)
              if (FF > AF && FF < hF) return dF(AF, FF - 10, PF, RF), void dF(FF + 10, hF, PF, RF);
            let EF = function(FF, WF) {
              for (let SF of FF)
                if (WF(SF)) return SF;
              return
            }(FF, (FF => FF.from >= PF.from && FF.to <= PF.to && Math.abs(FF.from - AF) < uF && Math.abs(FF.to - hF) < uF && !eF.some((WF => FF.from < WF && FF.to > WF))));
            if (!EF) {
              if (hF < PF.to && WF && SF && WF.XuF.some((FF => FF.from <= hF && FF.to >= hF))) {
                let FF = WF.moveToLineBoundary(CF.m.cursor(hF), !1, !0).head;
                FF > AF && (hF = FF)
              }
              let FF = this.gapSize(PF, AF, hF, RF);
              EF = new WA(AF, hF, FF, SF || FF < 2e6 ? FF : 2e6)
            }
            bW.push(EF)
          },
          PF = WF => {
            if (WF.length < hF || WF.type != oF.Text) return;
            let uF = function(FF, WF, SF) {
              let AF = [],
                uF = FF,
                hF = 0;
              CF.C.spans(SF, FF, WF, {
                span() {},
                point(FF, WF) {
                  FF > uF && (AF.push({
                    from: uF,
                    to: FF
                  }), hF += FF - uF), uF = WF
                }
              }, 20), uF < WF && (AF.push({
                from: uF,
                to: WF
              }), hF += WF - uF);
              return {
                total: hF,
                Bu: AF
              }
            }(WF.from, WF.to, this.stateDeco);
            if (uF.total < hF) return;
            let bW, PF, RF = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (SF) {
              let FF, SF, CF = AF / this.heightOracle.lineLength * this.heightOracle.lineHeight;
              if (null != RF) {
                let AF = hA(uF, RF),
                  hF = ((this.visibleBottom - this.visibleTop) / 2 + CF) / WF.height;
                FF = AF - hF, SF = AF + hF
              } else FF = (this.visibleTop - WF.top - CF) / WF.height, SF = (this.visibleBottom - WF.top + CF) / WF.height;
              bW = uA(uF, FF), PF = uA(uF, SF)
            } else {
              let SF = uF.total * this.heightOracle.charWidth,
                CF = AF * this.heightOracle.charWidth,
                hF = 0;
              if (SF > 2e6)
                for (let AF of FF) AF.from >= WF.from && AF.from < WF.to && AF.size != AF.displaySize && AF.from * this.heightOracle.charWidth + hF < this.pixelViewport.left && (hF = AF.size - AF.displaySize);
              let dF, iW, eF = this.pixelViewport.left + hF,
                EF = this.pixelViewport.right + hF;
              if (null != RF) {
                let FF = hA(uF, RF),
                  WF = ((EF - eF) / 2 + CF) / SF;
                dF = FF - WF, iW = FF + WF
              } else dF = (eF - CF) / SF, iW = (EF + CF) / SF;
              bW = uA(uF, dF), PF = uA(uF, iW)
            }
            bW > WF.from && dF(WF.from, bW, WF, uF), PF < WF.to && dF(PF, WF.to, WF, uF)
          };
        for (let CF of this.viewportLines) Array.isArray(CF.type) ? CF.type.forEach(PF) : PF(CF);
        return bW
      }
      gapSize(FF, WF, SF, CF) {
        let AF = hA(CF, SF) - hA(CF, WF);
        return this.heightOracle.lineWrapping ? FF.height * AF : CF.total * this.heightOracle.charWidth * AF
      }
      updateLineGaps(FF) {
        WA.same(FF, this.lineGaps) || (this.lineGaps = FF, this.lineGapDeco = YF.set(FF.map((FF => FF.draw(this, this.heightOracle.lineWrapping)))))
      }
      computeVisibleRanges(FF) {
        let WF = this.stateDeco;
        this.lineGaps.length && (WF = WF.concat(this.lineGapDeco));
        let SF = [];
        CF.C.spans(WF, this.viewport.from, this.viewport.to, {
          span(FF, WF) {
            SF.push({
              from: FF,
              to: WF
            })
          },
          point() {}
        }, 20);
        let AF = 0;
        if (SF.length != this.XuF.length) AF = 12;
        else
          for (let CF = 0; CF < SF.length && !(8 & AF); CF++) {
            let WF = this.XuF[CF],
              uF = SF[CF];
            WF.from == uF.from && WF.to == uF.to || (AF |= 4, FF && FF.mapPos(WF.from, -1) == uF.from && FF.mapPos(WF.to, 1) == uF.to || (AF |= 8))
          }
        return this.XuF = SF, AF
      }
      lineBlockAt(FF) {
        return FF >= this.viewport.from && FF <= this.viewport.to && this.viewportLines.find((WF => WF.from <= FF && WF.to >= FF)) || RA(this.heightMap.lineAt(FF, sC.ByPos, this.heightOracle, 0, 0), this.scaler)
      }
      lineBlockAtHeight(FF) {
        return FF >= this.viewportLines[0].top && FF <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((WF => WF.top <= FF && WF.bottom >= FF)) || RA(this.heightMap.lineAt(this.scaler.fromDOM(FF), sC.ByHeight, this.heightOracle, 0, 0), this.scaler)
      }
      getScrollOffset() {
        return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY
      }
      scrollAnchorAt(FF) {
        let WF = this.lineBlockAtHeight(FF + 8);
        return WF.from >= this.viewport.from || this.viewportLines[0].top - FF > 200 ? WF : this.viewportLines[0]
      }
      elementAtHeight(FF) {
        return RA(this.heightMap.blockAt(this.scaler.fromDOM(FF), this.heightOracle, 0, 0), this.scaler)
      }
      get docHeight() {
        return this.scaler.toDOM(this.heightMap.height)
      }
      get contentHeight() {
        return this.docHeight + this.paddingTop + this.paddingBottom
      }
    }
    class AA {
      constructor(FF, WF) {
        this.from = FF, this.to = WF
      }
    }

    function uA(FF, WF) {
      let {
        total: SF,
        Bu: CF
      } = FF;
      if (WF <= 0) return CF[0].from;
      if (WF >= 1) return CF[CF.length - 1].to;
      let AF = Math.floor(SF * WF);
      for (let uF = 0;; uF++) {
        let {
          from: FF,
          to: WF
        } = CF[uF], SF = WF - FF;
        if (AF <= SF) return FF + AF;
        AF -= SF
      }
    }

    function hA(FF, WF) {
      let SF = 0;
      for (let {
          from: CF,
          to: AF
        }
        of FF.Bu) {
        if (WF <= AF) {
          SF += WF - CF;
          break
        }
        SF += AF - CF
      }
      return SF / FF.total
    }
    const bu = {
      toDOM: FF => FF,
      fromDOM: FF => FF,
      scale: 1,
      eq(FF) {
        return FF == this
      }
    };

    function dA(FF) {
      let WF = FF.facet(FS).filter((FF => "function" != typeof FF)),
        SF = FF.facet(SS).filter((FF => "function" != typeof FF));
      return SF.length && WF.push(CF.C.join(SF)), WF
    }
    class PA {
      constructor(FF, WF, SF) {
        let CF = 0,
          AF = 0,
          uF = 0;
        this.viewports = SF.map((SF => {
          let {
            from: AF,
            to: uF
          } = SF, hF = WF.lineAt(AF, sC.ByPos, FF, 0, 0).top, bW = WF.lineAt(uF, sC.ByPos, FF, 0, 0).bottom;
          return CF += bW - hF, {
            from: AF,
            to: uF,
            top: hF,
            bottom: bW,
            domTop: 0,
            domBottom: 0
          }
        })), this.scale = (7e6 - CF) / (WF.height - CF);
        for (let hF of this.viewports) hF.domTop = uF + (hF.top - AF) * this.scale, uF = hF.domBottom = hF.domTop + (hF.bottom - hF.top), AF = hF.bottom
      }
      toDOM(FF) {
        for (let WF = 0, SF = 0, CF = 0;; WF++) {
          let AF = WF < this.viewports.length ? this.viewports[WF] : null;
          if (!AF || FF < AF.top) return CF + (FF - SF) * this.scale;
          if (FF <= AF.bottom) return AF.domTop + (FF - AF.top);
          SF = AF.bottom, CF = AF.domBottom
        }
      }
      fromDOM(FF) {
        for (let WF = 0, SF = 0, CF = 0;; WF++) {
          let AF = WF < this.viewports.length ? this.viewports[WF] : null;
          if (!AF || FF < AF.domTop) return SF + (FF - CF) / this.scale;
          if (FF <= AF.domBottom) return AF.top + (FF - AF.domTop);
          SF = AF.bottom, CF = AF.domBottom
        }
      }
      eq(FF) {
        return FF instanceof PA && (this.scale == FF.scale && this.viewports.length == FF.viewports.length && this.viewports.every(((WF, SF) => WF.from == FF.viewports[SF].from && WF.to == FF.viewports[SF].to)))
      }
    }

    function RA(FF, WF) {
      if (1 == WF.scale) return FF;
      let SF = WF.toDOM(FF.top),
        CF = WF.toDOM(FF.bottom);
      return new yA(FF.from, FF.length, SF, CF - SF, Array.isArray(FF._content) ? FF._content.map((FF => RA(FF, WF))) : FF._content)
    }
    const iu = CF.t.define({
        combine: FF => FF.join(" ")
      }),
      eA = CF.t.define({
        combine: FF => FF.indexOf(!0) > -1
      }),
      EA = AF.c.newName(),
      QA = AF.c.newName(),
      ru = AF.c.newName(),
      gu = {
        "&light": "." + QA,
        "&dark": "." + ru
      };

    function tu(FF, WF, SF) {
      return new AF.c(WF, {
        finish: WF => /&/.test(WF) ? WF.replace(/&\w*/, (WF => {
          if ("&" == WF) return FF;
          if (!SF || !SF[WF]) throw new RangeError(`Unsupported selector: ${WF}`);
          return SF[WF]
        })) : FF + " " + WF
      })
    }
    const TA = tu("." + EA, {
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
      }, gu),
      au = {
        childList: !0,
        characterData: !0,
        subtree: !0,
        attributes: !0,
        characterDataOldValue: !0
      },
      ku = NF.ie && NF.ie_version <= 11;
    class qu {
      constructor(FF) {
        this.view = FF, this.active = !1, this.editContext = null, this.selectionRange = new lF, this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = FF.contentDOM, this.observer = new MutationObserver((WF => {
          for (let FF of WF) this.queue.push(FF);
          (NF.ie && NF.ie_version <= 11 || NF.ios && FF.composing) && WF.some((FF => "childList" == FF.type && FF.removedNodes.length || "characterData" == FF.type && FF.oldValue.length > FF.target.nodeValue.length)) ? this.flushSoon() : this.flush()
        })), !window.EditContext || !NF.android || !1 === FF.constructor.EDIT_CONTEXT || NF.chrome && NF.chrome_version < 126 || (this.editContext = new DA(FF), FF.state.facet(UW) && (FF.contentDOM.editContext = this.editContext.editContext)), ku && (this.onCharData = FF => {
          this.queue.push({
            target: FF.target,
            type: "characterData",
            oldValue: FF.prevValue
          }), this.flushSoon()
        }), this.onSelectionChange = this.onSelectionChange.bind(this), this.tL = this.tL.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), "function" == typeof ResizeObserver && (this.resizeScroll = new ResizeObserver((() => {
          var FF;
          (null === (FF = this.view.docView) || void 0 === FF ? void 0 : FF.lastUpdate) < Date.now() - 75 && this.tL()
        })), this.resizeScroll.observe(FF.scrollDOM)), this.addWindowListeners(this.win = FF.win), this.start(), "function" == typeof IntersectionObserver && (this.intersection = new IntersectionObserver((FF => {
          this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), FF.length > 0 && FF[FF.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")))
        }), {
          threshold: [0, .001]
        }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((FF => {
          FF.length > 0 && FF[FF.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"))
        }), {})), this.listenForScroll(), this.readSelectionRange()
      }
      onScrollChanged(FF) {
        this.view.inputState.runHandlers("scroll", FF), this.intersecting && this.view.measure()
      }
      onScroll(FF) {
        this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(FF)
      }
      tL() {
        this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout((() => {
          this.resizeTimeout = -1, this.view.requestMeasure()
        }), 50))
      }
      onPrint(FF) {
        ("change" != FF.type && FF.type || FF.matches) && (this.view.viewState.printing = !0, this.view.measure(), setTimeout((() => {
          this.view.viewState.printing = !1, this.view.requestMeasure()
        }), 500))
      }
      updateGaps(FF) {
        if (this.gapIntersection && (FF.length != this.gaps.length || this.gaps.some(((WF, SF) => WF != FF[SF])))) {
          this.gapIntersection.disconnect();
          for (let WF of FF) this.gapIntersection.observe(WF);
          this.gaps = FF
        }
      }
      onSelectionChange(FF) {
        let WF = this.selectionChanged;
        if (!this.readSelectionRange() || this.delayedAndroidKey) return;
        let {
          view: SF
        } = this, CF = this.selectionRange;
        if (SF.state.facet(UW) ? SF.root.activeElement != this.dom : !nF(this.dom, CF)) return;
        let AF = CF.anchorNode && SF.docView.tile.nearest(CF.anchorNode);
        AF && AF.isWidget() && AF.widget.ignoreEvent(FF) ? WF || (this.selectionChanged = !1) : (NF.ie && NF.ie_version <= 11 || NF.android && NF.chrome) && !SF.state.selection.main.empty && CF.focusNode && KF(CF.focusNode, CF.focusOffset, CF.anchorNode, CF.anchorOffset) ? this.flushSoon() : this.flush(!1)
      }
      readSelectionRange() {
        let {
          view: FF
        } = this, WF = yW(FF.root);
        if (!WF) return !1;
        let SF = NF.safari && 11 == FF.root.nodeType && FF.root.activeElement == this.dom && function(FF, WF) {
          if (WF.getComposedRanges) {
            let SF = WF.getComposedRanges(FF.root)[0];
            if (SF) return NA(FF, SF)
          }
          let SF = null;

          function CF(FF) {
            FF.preventDefault(), FF.stopImmediatePropagation(), SF = FF.getTargetRanges()[0]
          }
          return FF.contentDOM.addEventListener("beforeinput", CF, !0), FF.dom.ownerDocument.execCommand("indent"), FF.contentDOM.removeEventListener("beforeinput", CF, !0), SF ? NA(FF, SF) : null
        }(this.view, WF) || WF;
        if (!SF || this.selectionRange.eq(SF)) return !1;
        let CF = nF(this.dom, SF);
        return CF && !this.selectionChanged && FF.inputState.lastFocusTime > Date.now() - 200 && FF.inputState.lastTouchTime < Date.now() - 300 && function(FF, WF) {
          let SF = WF.focusNode,
            CF = WF.focusOffset;
          if (!SF || WF.anchorNode != SF || WF.anchorOffset != CF) return !1;
          for (CF = Math.min(CF, BF(SF));;)
            if (CF) {
              if (1 != SF.nodeType) return !1;
              let FF = SF.childNodes[CF - 1];
              "false" == FF.contentEditable ? CF-- : (SF = FF, CF = BF(SF))
            } else {
              if (SF == FF) return !0;
              CF = wF(SF), SF = SF.parentNode
            }
        }(this.dom, SF) ? (this.view.inputState.lastFocusTime = 0, FF.docView.updateSelection(), !1) : (this.selectionRange.setRange(SF), CF && (this.selectionChanged = !0), !0)
      }
      setSelectionRange(FF, WF) {
        this.selectionRange.set(FF.node, FF.offset, WF.node, WF.offset), this.selectionChanged = !1
      }
      clearSelectionRange() {
        this.selectionRange.set(null, 0, null, 0)
      }
      listenForScroll() {
        this.parentCheck = -1;
        let FF = 0,
          WF = null;
        for (let SF = this.dom; SF;)
          if (1 == SF.nodeType) !WF && FF < this.scrollTargets.length && this.scrollTargets[FF] == SF ? FF++ : WF || (WF = this.scrollTargets.slice(0, FF)), WF && WF.push(SF), SF = SF.assignedSlot || SF.parentNode;
          else {
            if (11 != SF.nodeType) break;
            SF = SF.host
          } if (FF < this.scrollTargets.length && !WF && (WF = this.scrollTargets.slice(0, FF)), WF) {
          for (let FF of this.scrollTargets) FF.removeEventListener("scroll", this.onScroll);
          for (let FF of this.scrollTargets = WF) FF.addEventListener("scroll", this.onScroll)
        }
      }
      ignore(FF) {
        if (!this.active) return FF();
        try {
          return this.stop(), FF()
        } finally {
          this.start(), this.clear()
        }
      }
      start() {
        this.active || (this.observer.observe(this.dom, au), ku && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0)
      }
      stop() {
        this.active && (this.active = !1, this.observer.disconnect(), ku && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData))
      }
      clear() {
        this.processRecords(), this.queue.length = 0, this.selectionChanged = !1
      }
      delayAndroidKey(FF, WF) {
        var SF;
        if (!this.delayedAndroidKey) {
          let FF = () => {
            let FF = this.delayedAndroidKey;
            if (FF) {
              this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = FF.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && FF.force && AW(this.dom, FF.key, FF.keyCode)
            }
          };
          this.flushingAndroidKey = this.view.win.requestAnimationFrame(FF)
        }
        this.delayedAndroidKey && "Enter" != FF || (this.delayedAndroidKey = {
          key: FF,
          keyCode: WF,
          force: this.lastChange < Date.now() - 50 || !!(null === (SF = this.delayedAndroidKey) || void 0 === SF ? void 0 : SF.force)
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
        for (let FF of this.observer.takeRecords()) this.queue.push(FF);
        return this.queue
      }
      processRecords() {
        let FF = this.pendingRecords();
        FF.length && (this.queue = []);
        let WF = -1,
          SF = -1,
          CF = !1;
        for (let AF of FF) {
          let FF = this.readMutation(AF);
          FF && (FF.typeOver && (CF = !0), -1 == WF ? ({
            from: WF,
            to: SF
          } = FF) : (WF = Math.min(FF.from, WF), SF = Math.max(FF.to, SF)))
        }
        return {
          from: WF,
          to: SF,
          typeOver: CF
        }
      }
      readChange() {
        let {
          from: FF,
          to: WF,
          typeOver: SF
        } = this.processRecords(), CF = this.selectionChanged && nF(this.dom, this.selectionRange);
        if (FF < 0 && !CF) return null;
        FF > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
        let AF = new SC(this.view, FF, WF, SF);
        return this.view.docView.domChanged = {
          newSel: AF.newSel ? AF.newSel.main : null
        }, AF
      }
      flush() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
        FF && this.readSelectionRange();
        let WF = this.readChange();
        if (!WF) return this.view.requestMeasure(), !1;
        let SF = this.view.state,
          CF = AC(this.view, WF);
        return this.view.state == SF && (WF.domChanged || WF.newSel && !bA(this.view.state.selection, WF.newSel.main)) && this.view.update([]), CF
      }
      readMutation(FF) {
        let WF = this.view.docView.tile.nearest(FF.target);
        if (!WF || WF.isWidget()) return null;
        if (WF.markDirty("attributes" == FF.type), "childList" == FF.type) {
          let SF = VA(WF, FF.previousSibling || FF.target.previousSibling, -1),
            CF = VA(WF, FF.nextSibling || FF.target.nextSibling, 1);
          return {
            from: SF ? WF.posAfter(SF) : WF.posAtStart,
            to: CF ? WF.posBefore(CF) : WF.posAtEnd,
            typeOver: !1
          }
        }
        return "characterData" == FF.type ? {
          from: WF.posAtStart,
          to: WF.posAtEnd,
          typeOver: FF.target.nodeValue == FF.oldValue
        } : null
      }
      setWindow(FF) {
        FF != this.win && (this.removeWindowListeners(this.win), this.win = FF, this.addWindowListeners(this.win))
      }
      addWindowListeners(FF) {
        FF.addEventListener("resize", this.tL), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : FF.addEventListener("beforeprint", this.onPrint), FF.addEventListener("scroll", this.onScroll), FF.document.addEventListener("selectionchange", this.onSelectionChange)
      }
      removeWindowListeners(FF) {
        FF.removeEventListener("scroll", this.onScroll), FF.removeEventListener("resize", this.tL), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : FF.removeEventListener("beforeprint", this.onPrint), FF.document.removeEventListener("selectionchange", this.onSelectionChange)
      }
      update(FF) {
        this.editContext && (this.editContext.update(FF), FF.startState.facet(UW) != FF.state.facet(UW) && (FF.view.contentDOM.editContext = FF.state.facet(UW) ? this.editContext.editContext : null))
      }
      destroy() {
        var FF, WF, SF;
        this.stop(), null === (FF = this.intersection) || void 0 === FF || FF.disconnect(), null === (WF = this.gapIntersection) || void 0 === WF || WF.disconnect(), null === (SF = this.resizeScroll) || void 0 === SF || SF.disconnect();
        for (let CF of this.scrollTargets) CF.removeEventListener("scroll", this.onScroll);
        this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy())
      }
    }

    function VA(FF, WF, SF) {
      for (; WF;) {
        let CF = eS.get(WF);
        if (CF && CF.parent == FF) return CF;
        let AF = WF.parentNode;
        WF = AF != FF.dom ? AF : SF > 0 ? WF.nextSibling : WF.previousSibling
      }
      return null
    }

    function NA(FF, WF) {
      let SF = WF.startContainer,
        CF = WF.startOffset,
        AF = WF.endContainer,
        uF = WF.endOffset,
        hF = FF.docView.domAtPos(FF.state.selection.main.anchor, 1);
      return KF(hF.node, hF.offset, AF, uF) && ([SF, CF, AF, uF] = [AF, uF, SF, CF]), {
        anchorNode: SF,
        anchorOffset: CF,
        focusNode: AF,
        focusOffset: uF
      }
    }
    class DA {
      constructor(FF) {
        this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(FF.state);
        let WF = this.editContext = new window.EditContext({
          text: FF.state.doc.sliceString(this.from, this.to),
          selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, FF.state.selection.main.anchor))),
          selectionEnd: this.toContextPos(FF.state.selection.main.head)
        });
        this.handlers.textupdate = SF => {
          let AF = FF.state.selection.main,
            {
              anchor: uF,
              head: hF
            } = AF,
            bW = this.toEditorPos(SF.updateRangeStart),
            dF = this.toEditorPos(SF.updateRangeEnd);
          FF.inputState.composing >= 0 && !this.composing && (this.composing = {
            contextBase: SF.updateRangeStart,
            editorBase: bW,
            drifted: !1
          });
          let PF = dF - bW > SF.text.length;
          bW == this.from && uF < this.from ? bW = uF : dF == this.to && uF > this.to && (dF = uF);
          let RF = hC(FF.state.sliceDoc(bW, dF), SF.text, (PF ? AF.from : AF.to) - bW, PF ? "end" : null);
          if (!RF) {
            let WF = CF.m.single(this.toEditorPos(SF.selectionStart), this.toEditorPos(SF.selectionEnd));
            return void(bA(WF, AF) || FF.dispatch({
              selection: WF,
              userEvent: "select"
            }))
          }
          let iW = {
            from: RF.from + bW,
            to: RF.toA + bW,
            insert: CF.L.of(SF.text.slice(RF.from, RF.toB).split("\n"))
          };
          if ((NF.mac || NF.android) && iW.from == hF - 1 && /^\. ?$/.test(SF.text) && "off" == FF.contentDOM.getAttribute("autocorrect") && (iW = {
              from: bW,
              to: dF,
              insert: CF.L.of([SF.text.replace(".", " ")])
            }), this.pendingContextChange = iW, !FF.state.readOnly) {
            let WF = this.to - this.from + (iW.to - iW.from + iW.insert.length);
            uC(FF, iW, CF.m.single(this.toEditorPos(SF.selectionStart, WF), this.toEditorPos(SF.selectionEnd, WF)))
          }
          this.pendingContextChange && (this.revertPending(FF.state), this.setSelection(FF.state)), iW.from < iW.to && !iW.insert.length && FF.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(WF.text.slice(Math.max(0, SF.updateRangeStart - 1), Math.min(WF.text.length, SF.updateRangeStart + 1))) && this.handlers.compositionend(SF)
        }, this.handlers.characterboundsupdate = SF => {
          let CF = [],
            AF = null;
          for (let WF = this.toEditorPos(SF.rangeStart), uF = this.toEditorPos(SF.rangeEnd); WF < uF; WF++) {
            let SF = FF.coordsForChar(WF);
            AF = SF && new DOMRect(SF.left, SF.top, SF.right - SF.left, SF.bottom - SF.top) || AF || new DOMRect, CF.push(AF)
          }
          WF.updateCharacterBounds(SF.rangeStart, CF)
        }, this.handlers.textformatupdate = WF => {
          let SF = [];
          for (let FF of WF.getTextFormats()) {
            let WF = FF.underlineStyle,
              CF = FF.underlineThickness;
            if (!/none/i.test(WF) && !/none/i.test(CF)) {
              let AF = this.toEditorPos(FF.rangeStart),
                uF = this.toEditorPos(FF.rangeEnd);
              if (AF < uF) {
                let FF = `text-decoration: underline ${/^[a-z]/.test(WF)?WF+" ":"Dashed"==WF?"dashed ":"Squiggle"==WF?"wavy ":""}${/thin/i.test(CF)?1:2}px`;
                SF.push(YF.mark({
                  attributes: {
                    style: FF
                  }
                }).range(AF, uF))
              }
            }
          }
          FF.dispatch({
            effects: wW.of(YF.set(SF))
          })
        }, this.handlers.compositionstart = () => {
          FF.inputState.composing < 0 && (FF.inputState.composing = 0, FF.inputState.compositionFirstChange = !0)
        }, this.handlers.compositionend = () => {
          if (FF.inputState.composing = -1, FF.inputState.compositionFirstChange = null, this.composing) {
            let {
              drifted: WF
            } = this.composing;
            this.composing = null, WF && this.reset(FF.state)
          }
        };
        for (let SF in this.handlers) WF.addEventListener(SF, this.handlers[SF]);
        this.measureReq = {
          read: FF => {
            this.editContext.updateControlBounds(FF.contentDOM.getBoundingClientRect());
            let WF = yW(FF.root);
            WF && WF.rangeCount && this.editContext.updateSelectionBounds(WF.getRangeAt(0).getBoundingClientRect())
          }
        }
      }
      applyEdits(FF) {
        let WF = 0,
          SF = !1,
          CF = this.pendingContextChange;
        return FF.changes.iterChanges(((AF, uF, hF, bW, dF) => {
          if (SF) return;
          let PF = dF.length - (uF - AF);
          if (CF && uF >= CF.to) {
            if (CF.from == AF && CF.to == uF && CF.insert.eq(dF)) return CF = this.pendingContextChange = null, WF += PF, void(this.to += PF);
            CF = null, this.revertPending(FF.state)
          }
          if (AF += WF, (uF += WF) <= this.from) this.from += PF, this.to += PF;
          else if (AF < this.to) {
            if (AF < this.from || uF > this.to || this.to - this.from + dF.length > 3e4) return void(SF = !0);
            this.editContext.updateText(this.toContextPos(AF), this.toContextPos(uF), dF.toString()), this.to += PF
          }
          WF += PF
        })), CF && !SF && this.revertPending(FF.state), !SF
      }
      update(FF) {
        let WF = this.pendingContextChange,
          SF = FF.startState.selection.main;
        this.composing && (this.composing.drifted || !FF.changes.touchesRange(SF.from, SF.to) && FF.transactions.some((FF => !FF.isUserEvent("input.type") && FF.changes.touchesRange(this.from, this.to)))) ? (this.composing.drifted = !0, this.composing.editorBase = FF.changes.mapPos(this.composing.editorBase)) : this.applyEdits(FF) && this.rangeIsValid(FF.state) ? (FF.docChanged || FF.selectionSet || WF) && this.setSelection(FF.state) : (this.pendingContextChange = null, this.reset(FF.state)), (FF.geometryChanged || FF.docChanged || FF.selectionSet) && FF.view.requestMeasure(this.measureReq)
      }
      resetRange(FF) {
        let {
          head: WF
        } = FF.selection.main;
        this.from = Math.max(0, WF - 1e4), this.to = Math.min(FF.doc.length, WF + 1e4)
      }
      reset(FF) {
        this.resetRange(FF), this.editContext.updateText(0, this.editContext.text.length, FF.doc.sliceString(this.from, this.to)), this.setSelection(FF)
      }
      revertPending(FF) {
        let WF = this.pendingContextChange;
        this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(WF.from), this.toContextPos(WF.from + WF.insert.length), FF.doc.sliceString(WF.from, WF.to))
      }
      setSelection(FF) {
        let {
          main: WF
        } = FF.selection, SF = this.toContextPos(Math.max(this.from, Math.min(this.to, WF.anchor))), CF = this.toContextPos(WF.head);
        this.editContext.selectionStart == SF && this.editContext.selectionEnd == CF || this.editContext.updateSelection(SF, CF)
      }
      rangeIsValid(FF) {
        let {
          head: WF
        } = FF.selection.main;
        return !(this.from > 0 && WF - this.from < 500 || this.to < FF.doc.length && this.to - WF < 500 || this.to - this.from > 3e4)
      }
      toEditorPos(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.to - this.from;
        FF = Math.min(FF, WF);
        let SF = this.composing;
        return SF && SF.drifted ? SF.editorBase + (FF - SF.contextBase) : FF + this.from
      }
      toContextPos(FF) {
        let WF = this.composing;
        return WF && WF.drifted ? WF.contextBase + (FF - WF.editorBase) : FF - this.from
      }
      destroy() {
        for (let FF in this.handlers) this.editContext.removeEventListener(FF, this.handlers[FF])
      }
    }
    class LA {
      get state() {
        return this.viewState.state
      }
      get viewport() {
        return this.viewState.viewport
      }
      get XuF() {
        return this.viewState.XuF
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
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var WF;
        this.plugins = [], this.pluginMap = new Map, this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), FF.parent && FF.parent.appendChild(this.dom);
        let {
          dispatch: SF
        } = FF;
        this.dispatchTransactions = FF.dispatchTransactions || SF && (FF => FF.forEach((FF => SF(FF, this)))) || (FF => this.update(FF)), this.dispatch = this.dispatch.bind(this), this._root = FF.root || function(FF) {
          for (; FF;) {
            if (FF && (9 == FF.nodeType || 11 == FF.nodeType && FF.host)) return FF;
            FF = FF.assignedSlot || FF.parentNode
          }
          return null
        }(FF.parent) || document, this.viewState = new CA(this, FF.state || CF.q.create(FF)), FF.scrollTo && FF.scrollTo.is(KW) && (this.viewState.scrollTarget = FF.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(jS).map((FF => new JW(FF)));
        for (let CF of this.plugins) CF.update(this);
        this.observer = new qu(this), this.inputState = new dC(this), this.inputState.ensureHandlers(this.plugins), this.docView = new zC(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), (null === (WF = document.fonts) || void 0 === WF ? void 0 : WF.ready) && document.fonts.ready.then((() => {
          this.viewState.mustMeasureContent = "refresh", this.requestMeasure()
        }))
      }
      dispatch() {
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        let AF = 1 == WF.length && WF[0] instanceof CF.P ? WF : 1 == WF.length && Array.isArray(WF[0]) ? WF[0] : [this.state.update(...WF)];
        this.dispatchTransactions(AF, this)
      }
      update(FF) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
        let WF, SF = !1,
          AF = !1,
          uF = this.state;
        for (let CF of FF) {
          if (CF.startState != uF) throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
          uF = CF.state
        }
        if (this.destroyed) return void(this.viewState.state = uF);
        let hF = this.hasFocus,
          bW = 0,
          dF = null;
        FF.some((FF => FF.annotation(ZC))) ? (this.inputState.notifiedFocused = hF, bW = 1) : hF != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = hF, dF = oC(uF, hF), dF || (bW = 1));
        let PF = this.observer.delayedAndroidKey,
          RF = null;
        if (PF ? (this.observer.clearDelayedAndroidKey(), RF = this.observer.readChange(), (RF && !this.state.doc.eq(uF.doc) || !this.state.selection.eq(uF.selection)) && (RF = null)) : this.observer.clear(), uF.facet(CF.q.phrases) != this.state.facet(CF.q.phrases)) return this.setState(uF);
        WF = RS.create(this, uF, FF), WF.flags |= bW;
        let iW = this.viewState.scrollTarget;
        try {
          this.updateState = 2;
          for (let WF of FF) {
            if (iW && (iW = iW.map(WF.changes)), WF.scrollIntoView) {
              let {
                main: FF
              } = WF.state.selection, {
                x: SF,
                y: AF
              } = this.state.facet(LA.cursorScrollMargin);
              iW = new HW(FF.empty ? FF : CF.m.cursor(FF.head, FF.head > FF.anchor ? -1 : 1), "nearest", "nearest", AF, SF)
            }
            for (let FF of WF.effects) FF.is(KW) && (iW = FF.value.clip(this.state))
          }
          this.viewState.update(WF, iW), this.bidiCache = xu.update(this.bidiCache, WF.changes), WF.empty || (this.updatePlugins(WF), this.inputState.update(WF)), SF = this.docView.update(WF), this.state.facet(dS) != this.styleModules && this.mountStyles(), AF = this.updateAttrs(), this.showAnnouncements(FF), this.docView.updateSelection(SF, FF.some((FF => FF.isUserEvent("select.pointer"))))
        } finally {
          this.updateState = 0
        }
        if (WF.startState.facet(iu) != WF.state.facet(iu) && (this.viewState.mustMeasureContent = !0), (SF || AF || iW || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), SF && this.docViewUpdate(), !WF.empty)
          for (let CF of this.state.facet(cS)) try {
            CF(WF)
          } catch (eF) {
            XW(this.state, eF, "update listener")
          }(dF || RF) && Promise.resolve().then((() => {
            dF && this.state == dF.startState && this.dispatch(dF), RF && !AC(this, RF) && PF.force && AW(this.contentDOM, PF.key, PF.keyCode)
          }))
      }
      setState(FF) {
        if (0 != this.updateState) throw new Error("Calls to EditorView.setState are not allowed while an update is in progress");
        if (this.destroyed) return void(this.viewState.state = FF);
        this.updateState = 2;
        let WF = this.hasFocus;
        try {
          for (let FF of this.plugins) FF.destroy(this);
          this.viewState = new CA(this, FF), this.plugins = FF.facet(jS).map((FF => new JW(FF))), this.pluginMap.clear();
          for (let FF of this.plugins) FF.update(this);
          this.docView.destroy(), this.docView = new zC(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = []
        } finally {
          this.updateState = 0
        }
        WF && this.focus(), this.requestMeasure()
      }
      updatePlugins(FF) {
        let WF = FF.startState.facet(jS),
          SF = FF.state.facet(jS);
        if (WF != SF) {
          let CF = [];
          for (let AF of SF) {
            let SF = WF.indexOf(AF);
            if (SF < 0) CF.push(new JW(AF));
            else {
              let WF = this.plugins[SF];
              WF.mustUpdate = FF, CF.push(WF)
            }
          }
          for (let WF of this.plugins) WF.mustUpdate != FF && WF.destroy(this);
          this.plugins = CF, this.pluginMap.clear()
        } else
          for (let CF of this.plugins) CF.mustUpdate = FF;
        for (let CF = 0; CF < this.plugins.length; CF++) this.plugins[CF].update(this);
        WF != SF && this.inputState.ensureHandlers(this.plugins)
      }
      docViewUpdate() {
        for (let WF of this.plugins) {
          let SF = WF.value;
          if (SF && SF.docViewUpdate) try {
            SF.docViewUpdate(this)
          } catch (FF) {
            XW(this.state, FF, "doc view update listener")
          }
        }
      }
      measure() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this.destroyed) return;
        if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) return this.measureScheduled = -1, void this.requestMeasure();
        this.measureScheduled = 0, FF && this.observer.forceFlush();
        let WF = null,
          SF = this.viewState.scrollParent,
          CF = this.viewState.getScrollOffset(),
          {
            scrollAnchorPos: AF,
            scrollAnchorHeight: uF
          } = this.viewState;
        Math.abs(CF - this.viewState.scrollOffset) > 1 && (uF = -1), this.viewState.scrollAnchorHeight = -1;
        try {
          for (let FF = 0;; FF++) {
            if (uF < 0)
              if (uW(SF || this.win)) AF = -1, uF = this.viewState.heightMap.height;
              else {
                let FF = this.viewState.scrollAnchorAt(CF);
                AF = FF.from, uF = FF.top
              } this.updateState = 1;
            let bW = this.viewState.measure();
            if (!bW && !this.measureRequests.length && null == this.viewState.scrollTarget) break;
            if (FF > 5) {
              console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
              break
            }
            let dF = [];
            4 & bW || ([this.measureRequests, dF] = [dF, this.measureRequests]);
            let PF = dF.map((FF => {
                try {
                  return FF.read(this)
                } catch (WF) {
                  return XW(this.state, WF), OA
                }
              })),
              RF = RS.create(this, this.state, []),
              iW = !1;
            RF.flags |= bW, WF ? WF.flags |= bW : WF = RF, this.updateState = 2, RF.empty || (this.updatePlugins(RF), this.inputState.update(RF), this.updateAttrs(), iW = this.docView.update(RF), iW && this.docViewUpdate());
            for (let FF = 0; FF < dF.length; FF++)
              if (PF[FF] != OA) try {
                let WF = dF[FF];
                WF.write && WF.write(PF[FF], this)
              } catch (hF) {
                XW(this.state, hF)
              }
            if (iW && this.docView.updateSelection(!0), !RF.viewportChanged && 0 == this.measureRequests.length) {
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget) {
                  this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, uF = -1;
                  continue
                } {
                  let FF = ((AF < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(AF).top) - uF) / this.scaleY;
                  if ((FF > 1 || FF < -1) && (SF == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
                    CF += FF, SF ? SF.scrollTop += FF : this.win.scrollBy(0, FF), uF = -1;
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
        if (WF && !WF.empty)
          for (let bW of this.state.facet(cS)) bW(WF)
      }
      get themeClasses() {
        return EA + " " + (this.state.facet(eA) ? ru : QA) + " " + this.state.facet(iu)
      }
      updateAttrs() {
        let FF = ZA(this, pW, {
            class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
          }),
          WF = {
            spellcheck: "false",
            autocorrect: "off",
            autocapitalize: "off",
            writingsuggestions: "false",
            translate: "no",
            contenteditable: this.state.facet(UW) ? "true" : "false",
            class: "cm-content",
            style: `${NF.tabSize}: ${this.state.tabSize}`,
            role: "textbox",
            "aria-multiline": "true"
          };
        this.state.readOnly && (WF["aria-readonly"] = "true"), ZA(this, lW, WF);
        let SF = this.observer.ignore((() => {
          let SF = OF(this.contentDOM, this.contentAttrs, WF),
            CF = OF(this.dom, this.editorAttrs, FF);
          return SF || CF
        }));
        return this.editorAttrs = FF, this.contentAttrs = WF, SF
      }
      showAnnouncements(FF) {
        let WF = !0;
        for (let SF of FF)
          for (let FF of SF.effects)
            if (FF.is(LA.announce)) {
              WF && (this.announceDOM.textContent = ""), WF = !1, this.announceDOM.appendChild(document.createElement("div")).textContent = FF.value
            }
      }
      mountStyles() {
        this.styleModules = this.state.facet(dS);
        let FF = this.state.facet(LA.cspNonce);
        AF.c.mount(this.root, this.styleModules.concat(TA).reverse(), FF ? {
          nonce: FF
        } : void 0)
      }
      readMeasured() {
        if (2 == this.updateState) throw new Error("Reading the editor layout isn't allowed during an update");
        0 == this.updateState && this.measureScheduled > -1 && this.measure(!1)
      }
      requestMeasure(FF) {
        if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame((() => this.measure()))), FF) {
          if (this.measureRequests.indexOf(FF) > -1) return;
          if (null != FF.key)
            for (let WF = 0; WF < this.measureRequests.length; WF++)
              if (this.measureRequests[WF].key === FF.key) return void(this.measureRequests[WF] = FF);
          this.measureRequests.push(FF)
        }
      }
      plugin(FF) {
        let WF = this.pluginMap.get(FF);
        return (void 0 === WF || WF && WF.plugin != FF) && this.pluginMap.set(FF, WF = this.plugins.find((WF => WF.plugin == FF)) || null), WF && WF.update(this).value
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
      elementAtHeight(FF) {
        return this.readMeasured(), this.viewState.elementAtHeight(FF)
      }
      lineBlockAtHeight(FF) {
        return this.readMeasured(), this.viewState.lineBlockAtHeight(FF)
      }
      get viewportLineBlocks() {
        return this.viewState.viewportLines
      }
      lineBlockAt(FF) {
        return this.viewState.lineBlockAt(FF)
      }
      get contentHeight() {
        return this.viewState.contentHeight
      }
      moveByChar(FF, WF, SF) {
        return US(this, FF, KS(this, FF, WF, SF))
      }
      moveByGroup(FF, WF) {
        return US(this, FF, KS(this, FF, WF, (WF => function(FF, WF, SF) {
          let AF = FF.state.charCategorizer(WF),
            uF = AF(SF);
          return FF => {
            let WF = AF(FF);
            return uF == CF.l.Space && (uF = WF), uF == WF
          }
        }(this, FF.head, WF))))
      }
      visualLineSide(FF, WF) {
        let SF = this.bidiSpans(FF),
          AF = this.textDirectionAt(FF.from),
          uF = SF[WF ? SF.length - 1 : 0];
        return CF.m.cursor(uF.side(WF, AF) + FF.from, uF.forward(!WF, AF) ? 1 : -1)
      }
      moveToLineBoundary(FF, WF) {
        return function(FF, WF, SF, AF) {
          let uF = HS(FF, WF.head, WF.assoc || -1),
            hF = AF && uF.type == oF.Text && (FF.lineWrapping || uF.widgetLineBreaks) ? FF.coordsAtPos(WF.assoc < 0 && WF.head > uF.from ? WF.head - 1 : WF.head) : null;
          if (hF) {
            let WF = FF.dom.getBoundingClientRect(),
              AF = FF.textDirectionAt(uF.from),
              bW = FF.posAtCoords({
                x: SF == (AF == PW.LTR) ? WF.right - 1 : WF.left + 1,
                y: (hF.top + hF.bottom) / 2
              });
            if (null != bW) return CF.m.cursor(bW, SF ? -1 : 1)
          }
          return CF.m.cursor(SF ? uF.to : uF.from, SF ? -1 : 1)
        }(this, FF, WF, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2])
      }
      moveVertically(FF, WF, SF) {
        return US(this, FF, function(FF, WF, SF, AF) {
          let uF = WF.head,
            hF = SF ? 1 : -1;
          if (uF == (SF ? FF.state.doc.length : 0)) return CF.m.cursor(uF, WF.assoc);
          let bW, dF = WF.goalColumn,
            PF = FF.contentDOM.getBoundingClientRect(),
            RF = FF.coordsAtPos(uF, WF.assoc || ((WF.empty ? SF : WF.head == WF.from) ? 1 : -1)),
            iW = FF.documentTop;
          if (RF) null == dF && (dF = RF.left - PF.left), bW = hF < 0 ? RF.top : RF.bottom;
          else {
            let WF = FF.viewState.lineBlockAt(uF);
            null == dF && (dF = Math.min(PF.right - PF.left, FF.defaultCharacterWidth * (uF - WF.from))), bW = (hF < 0 ? WF.top : WF.bottom) + iW
          }
          let eF = PF.left + dF,
            EF = FF.viewState.heightOracle.textHeight >> 1,
            QF = null !== AF && void 0 !== AF ? AF : EF;
          for (let rW = 0;; rW += EF) {
            let WF = bW + (QF + rW) * hF,
              AF = jC(FF, {
                x: eF,
                y: WF
              }, !1, hF);
            if (SF ? WF > PF.bottom : WF < PF.top) return CF.m.cursor(AF.pos, AF.assoc);
            let uF = FF.coordsAtPos(AF.pos, AF.assoc),
              RF = uF ? (uF.top + uF.bottom) / 2 : 0;
            if (!uF || (SF ? RF > bW : RF < bW)) return CF.m.cursor(AF.pos, AF.assoc, void 0, dF)
          }
        }(this, FF, WF, SF))
      }
      domAtPos(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return this.docView.domAtPos(FF, WF)
      }
      posAtDOM(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.docView.posFromDOM(FF, WF)
      }
      posAtCoords(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this.readMeasured();
        let SF = jC(this, FF, WF);
        return SF && SF.pos
      }
      posAndSideAtCoords(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return this.readMeasured(), jC(this, FF, WF)
      }
      coordsAtPos(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.readMeasured();
        let SF = this.docView.coordsAt(FF, WF);
        if (!SF || SF.left == SF.right) return SF;
        let CF = this.state.doc.lineAt(FF),
          AF = this.bidiSpans(CF);
        return jW(SF, AF[aS.find(AF, FF - CF.from, -1, WF)].dir == PW.LTR == WF > 0)
      }
      coordsForChar(FF) {
        return this.readMeasured(), this.docView.coordsForChar(FF)
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
      textDirectionAt(FF) {
        return !this.state.facet(yS) || FF < this.viewport.from || FF > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(FF))
      }
      get lineWrapping() {
        return this.viewState.heightOracle.lineWrapping
      }
      bidiSpans(FF) {
        if (FF.length > mu) return LW(FF.length);
        let WF, SF = this.textDirectionAt(FF.from);
        for (let AF of this.bidiCache)
          if (AF.from == FF.from && AF.dir == SF && (AF.fresh || kS(AF.isolates, WF = uS(this, FF)))) return AF.order;
        WF || (WF = uS(this, FF));
        let CF = DW(FF.text, SF, WF);
        return this.bidiCache.push(new xu(FF.from, FF.to, SF, WF, !0, CF)), CF
      }
      get hasFocus() {
        var FF;
        return (this.dom.ownerDocument.hasFocus() || NF.safari && (null === (FF = this.inputState) || void 0 === FF ? void 0 : FF.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM
      }
      focus() {
        this.observer.ignore((() => {
          SW(this.contentDOM), this.docView.updateSelection()
        }))
      }
      setRoot(FF) {
        this._root != FF && (this._root = FF, this.observer.setWindow((9 == FF.nodeType ? FF : FF.ownerDocument).defaultView || window), this.mountStyles())
      }
      destroy() {
        this.root.activeElement == this.contentDOM && this.contentDOM.blur();
        for (let FF of this.plugins) FF.destroy(this);
        this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0
      }
      static scrollIntoView(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var SF, AF, uF, hF;
        return KW.of(new HW("number" == typeof FF ? CF.m.cursor(FF) : FF, null !== (SF = WF.y) && void 0 !== SF ? SF : "nearest", null !== (AF = WF.x) && void 0 !== AF ? AF : "nearest", null !== (uF = WF.yMargin) && void 0 !== uF ? uF : 5, null !== (hF = WF.xMargin) && void 0 !== hF ? hF : 5))
      }
      scrollSnapshot() {
        let {
          scrollTop: FF,
          scrollLeft: WF
        } = this.scrollDOM, SF = this.viewState.scrollAnchorAt(FF);
        return KW.of(new HW(CF.m.cursor(SF.from), "start", "start", SF.top - FF, WF, !0))
      }
      setTabFocusMode(FF) {
        null == FF ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : "boolean" == typeof FF ? this.inputState.tabFocusMode = FF ? 0 : -1 : 0 != this.inputState.tabFocusMode && (this.inputState.tabFocusMode = Date.now() + FF)
      }
      static domEventHandlers(FF) {
        return vS.define((() => ({})), {
          eventHandlers: FF
        })
      }
      static domEventObservers(FF) {
        return vS.define((() => ({})), {
          eventObservers: FF
        })
      }
      static theme(FF, WF) {
        let SF = AF.c.newName(),
          CF = [iu.of(SF), dS.of(tu(`.${SF}`, FF))];
        return WF && WF.dark && CF.push(eA.of(!0)), CF
      }
      static baseTheme(FF) {
        return CF.x.lowest(dS.of(tu("." + EA, FF, gu)))
      }
      static findFromDOM(FF) {
        var WF;
        let SF = FF.querySelector(".cm-content"),
          CF = SF && eS.get(SF) || eS.get(FF);
        return (null === (WF = null === CF || void 0 === CF ? void 0 : CF.root) || void 0 === WF ? void 0 : WF.view) || null
      }
    }
    LA.styleModule = dS, LA.inputHandler = GW, LA.clipboardInputFilter = IW, LA.clipboardOutputFilter = fW, LA.scrollHandler = nW, LA.focusChangeEffect = zS, LA.perLineTextDirection = yS, LA.exceptionSink = MW, LA.updateListener = cS, LA.editable = UW, LA.mouseSelectionStyle = YW, LA.dragMovesSelection = oW, LA.clickAddsSelectionRange = ZW, LA.Iu = FS, LA.blockWrappers = WS, LA.outerDecorations = SS, LA.atomicRanges = CS, LA.bidiIsolatedRanges = AS, LA.cursorScrollMargin = CF.t.define({
      combine: FF => {
        let WF = 5,
          SF = 5;
        for (let CF of FF) "number" == typeof CF ? WF = SF = CF : ({
          x: WF,
          y: SF
        } = CF);
        return {
          x: WF,
          y: SF
        }
      }
    }), LA.scrollMargins = hS, LA.darkTheme = eA, LA.cspNonce = CF.t.define({
      combine: FF => FF.length ? FF[0] : ""
    }), LA.contentAttributes = lW, LA.editorAttributes = pW, LA.lineWrapping = LA.contentAttributes.of({
      class: "cm-lineWrapping"
    }), LA.announce = CF.H.define();
    const mu = 4096,
      OA = {};
    class xu {
      constructor(FF, WF, SF, CF, AF, uF) {
        this.from = FF, this.to = WF, this.dir = SF, this.isolates = CF, this.fresh = AF, this.order = uF
      }
      static update(FF, WF) {
        if (WF.empty && !FF.some((FF => FF.fresh))) return FF;
        let SF = [],
          CF = FF.length ? FF[FF.length - 1].dir : PW.LTR;
        for (let AF = Math.max(0, FF.length - 10); AF < FF.length; AF++) {
          let uF = FF[AF];
          uF.dir != CF || WF.touchesRange(uF.from, uF.to) || SF.push(new xu(WF.mapPos(uF.from, 1), WF.mapPos(uF.to, -1), uF.dir, uF.isolates, !1, uF.order))
        }
        return SF
      }
    }

    function ZA(FF, WF, SF) {
      for (let CF = FF.state.facet(WF), AF = CF.length - 1; AF >= 0; AF--) {
        let WF = CF[AF],
          uF = "function" == typeof WF ? WF(FF) : WF;
        uF && DF(uF, SF)
      }
      return SF
    }
    const oA = NF.mac ? "mac" : NF.windows ? "win" : NF.linux ? "linux" : "key";

    function YA(FF, WF, SF) {
      return WF.altKey && (FF = "Alt-" + FF), WF.ctrlKey && (FF = "Ctrl-" + FF), WF.metaKey && (FF = "Meta-" + FF), !1 !== SF && WF.shiftKey && (FF = "Shift-" + FF), FF
    }
    const MA = CF.x.default(LA.domEventHandlers({
        keydown: (FF, WF) => nA(zu(WF.state), FF, WF, "editor")
      })),
      cu = CF.t.define({
        enables: MA
      }),
      GA = new WeakMap;

    function zu(FF) {
      let WF = FF.facet(cu),
        SF = GA.get(WF);
      return SF || GA.set(WF, SF = function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oA,
          SF = Object.create(null),
          CF = Object.create(null),
          AF = (FF, WF) => {
            let SF = CF[FF];
            if (null == SF) CF[FF] = WF;
            else if (SF != WF) throw new Error("Key binding " + FF + " is used both as a regular binding and as a multi-stroke prefix")
          },
          uF = (FF, CF, uF, hF, bW) => {
            var dF, PF;
            let RF = SF[FF] || (SF[FF] = Object.create(null)),
              iW = CF.split(/ (?!$)/).map((FF => function(FF, WF) {
                const SF = FF.split(/-(?!$)/);
                let CF, AF, uF, hF, bW = SF[SF.length - 1];
                "Space" == bW && (bW = " ");
                for (let dF = 0; dF < SF.length - 1; ++dF) {
                  const FF = SF[dF];
                  if (/^(cmd|meta|m)$/i.test(FF)) hF = !0;
                  else if (/^a(lt)?$/i.test(FF)) CF = !0;
                  else if (/^(c|ctrl|control)$/i.test(FF)) AF = !0;
                  else if (/^s(hift)?$/i.test(FF)) uF = !0;
                  else {
                    if (!/^mod$/i.test(FF)) throw new Error("Unrecognized modifier name: " + FF);
                    "mac" == WF ? hF = !0 : AF = !0
                  }
                }
                return CF && (bW = "Alt-" + bW), AF && (bW = "Ctrl-" + bW), hF && (bW = "Meta-" + bW), uF && (bW = "Shift-" + bW), bW
              }(FF, WF)));
            for (let WF = 1; WF < iW.length; WF++) {
              let SF = iW.slice(0, WF).join(" ");
              AF(SF, !0), RF[SF] || (RF[SF] = {
                preventDefault: !0,
                stopPropagation: !1,
                run: [WF => {
                  let CF = fA = {
                    view: WF,
                    prefix: SF,
                    scope: FF
                  };
                  return setTimeout((() => {
                    fA == CF && (fA = null)
                  }), yu), !0
                }]
              })
            }
            let eF = iW.join(" ");
            AF(eF, !1);
            let EF = RF[eF] || (RF[eF] = {
              preventDefault: !1,
              stopPropagation: !1,
              run: (null === (PF = null === (dF = RF._any) || void 0 === dF ? void 0 : dF.run) || void 0 === PF ? void 0 : PF.slice()) || []
            });
            uF && EF.run.push(uF), hF && (EF.preventDefault = !0), bW && (EF.stopPropagation = !0)
          };
        for (let hF of FF) {
          let FF = hF.scope ? hF.scope.split(" ") : ["editor"];
          if (hF.any)
            for (let WF of FF) {
              let FF = SF[WF] || (SF[WF] = Object.create(null));
              FF._any || (FF._any = {
                preventDefault: !1,
                stopPropagation: !1,
                run: []
              });
              let {
                any: CF
              } = hF;
              for (let WF in FF) FF[WF].run.push((FF => CF(FF, sA)))
            }
          let CF = hF[WF] || hF.key;
          if (CF)
            for (let WF of FF) uF(WF, CF, hF.run, hF.preventDefault, hF.stopPropagation), hF.shift && uF(WF, "Shift-" + CF, hF.shift, hF.preventDefault, hF.stopPropagation)
        }
        return SF
      }(WF.reduce(((FF, WF) => FF.concat(WF)), []))), SF
    }

    function IA(FF, WF, SF) {
      return nA(zu(FF.state), WF, FF, SF)
    }
    let fA = null;
    const yu = 4e3;
    let sA = null;

    function nA(FF, WF, SF, AF) {
      sA = WF;
      let PF = function(FF) {
          var WF = !(bW && FF.metaKey && FF.shiftKey && !FF.ctrlKey && !FF.altKey || dF && FF.shiftKey && FF.key && 1 == FF.key.length || "Unidentified" == FF.key) && FF.key || (FF.shiftKey ? hF : uF)[FF.keyCode] || FF.key || "Unidentified";
          return "Esc" == WF && (WF = "Escape"), "Del" == WF && (WF = "Delete"), "Left" == WF && (WF = "ArrowLeft"), "Up" == WF && (WF = "ArrowUp"), "Right" == WF && (WF = "ArrowRight"), "Down" == WF && (WF = "ArrowDown"), WF
        }(WF),
        RF = (0, CF.S)(PF, 0),
        iW = (0, CF.W)(RF) == PF.length && " " != PF,
        eF = "",
        EF = !1,
        QF = !1,
        rW = !1;
      fA && fA.view == SF && fA.scope == AF && (eF = fA.prefix + " ", EC.indexOf(WF.keyCode) < 0 && (QF = !0, fA = null));
      let gW, tW, TF = new Set,
        aW = FF => {
          if (FF) {
            for (let WF of FF.run)
              if (!TF.has(WF) && (TF.add(WF), WF(SF))) return FF.stopPropagation && (rW = !0), !0;
            FF.preventDefault && (FF.stopPropagation && (rW = !0), QF = !0)
          }
          return !1
        },
        kW = FF[AF];
      return kW && (aW(kW[eF + YA(PF, WF, !iW)]) ? EF = !0 : !iW || !(WF.altKey || WF.metaKey || WF.ctrlKey) || NF.windows && WF.ctrlKey && WF.altKey || NF.mac && WF.altKey && !WF.ctrlKey && !WF.metaKey || !(gW = uF[WF.keyCode]) || gW == PF ? iW && WF.shiftKey && aW(kW[eF + YA(PF, WF, !0)]) && (EF = !0) : (aW(kW[eF + YA(gW, WF, !0)]) || WF.shiftKey && (tW = hF[WF.keyCode]) != PF && tW != gW && aW(kW[eF + YA(tW, WF, !1)])) && (EF = !0), !EF && aW(kW._any) && (EF = !0)), QF && (EF = !0), EF && rW && WF.stopPropagation(), sA = null, EF
    }
    class HA {
      constructor(FF, WF, SF, CF, AF) {
        this.className = FF, this.left = WF, this.top = SF, this.width = CF, this.height = AF
      }
      draw() {
        let FF = document.createElement("div");
        return FF.className = this.className, this.adjust(FF), FF
      }
      update(FF, WF) {
        return WF.className == this.className && (this.adjust(FF), !0)
      }
      adjust(FF) {
        FF.style.left = this.left + "px", FF.style.top = this.top + "px", null != this.width && (FF.style.width = this.width + "px"), FF.style.height = this.height + "px"
      }
      eq(FF) {
        return this.left == FF.left && this.top == FF.top && this.width == FF.width && this.height == FF.height && this.className == FF.className
      }
      static forRange(FF, WF, SF) {
        if (SF.empty) {
          let CF = FF.coordsAtPos(SF.head, SF.assoc || 1);
          if (!CF) return [];
          let AF = KA(FF);
          return [new HA(WF, CF.left - AF.left, CF.top - AF.top, null, CF.bottom - CF.top)]
        }
        return function(FF, WF, SF) {
          if (SF.to <= FF.viewport.from || SF.from >= FF.viewport.to) return [];
          let CF = Math.max(SF.from, FF.viewport.from),
            AF = Math.min(SF.to, FF.viewport.to),
            uF = FF.textDirection == PW.LTR,
            hF = FF.contentDOM,
            bW = hF.getBoundingClientRect(),
            dF = KA(FF),
            PF = hF.querySelector(".cm-line"),
            RF = PF && window.getComputedStyle(PF),
            iW = bW.left + (RF ? parseInt(RF.paddingLeft) + Math.min(0, parseInt(RF.textIndent)) : 0),
            eF = bW.right - (RF ? parseInt(RF.paddingRight) : 0),
            EF = HS(FF, CF, 1),
            QF = HS(FF, AF, -1),
            rW = EF.type == oF.Text ? EF : null,
            gW = QF.type == oF.Text ? QF : null;
          rW && (FF.lineWrapping || EF.widgetLineBreaks) && (rW = wA(FF, CF, 1, rW));
          gW && (FF.lineWrapping || QF.widgetLineBreaks) && (gW = wA(FF, AF, -1, gW));
          if (rW && gW && rW.from == gW.from && rW.to == gW.to) return TF(aW(SF.from, SF.to, rW));
          {
            let WF = rW ? aW(SF.from, null, rW) : kW(EF, !1),
              CF = gW ? aW(null, SF.to, gW) : kW(QF, !0),
              AF = [];
            return (rW || EF).to < (gW || QF).from - (rW && gW ? 1 : 0) || EF.widgetLineBreaks > 1 && WF.bottom + FF.defaultLineHeight / 2 < CF.top ? AF.push(tW(iW, WF.bottom, eF, CF.top)) : WF.bottom < CF.top && FF.elementAtHeight((WF.bottom + CF.top) / 2).type == oF.Text && (WF.bottom = CF.top = (WF.bottom + CF.top) / 2), TF(WF).concat(AF).concat(TF(CF))
          }

          function tW(FF, SF, CF, AF) {
            return new HA(WF, FF - dF.left, SF - dF.top, Math.max(0, CF - FF), AF - SF)
          }

          function TF(FF) {
            let {
              top: WF,
              bottom: SF,
              horizontal: CF
            } = FF, AF = [];
            for (let uF = 0; uF < CF.length; uF += 2) AF.push(tW(CF[uF], WF, CF[uF + 1], SF));
            return AF
          }

          function aW(WF, SF, CF) {
            let AF = 1e9,
              hF = -1e9,
              bW = [];

            function dF(WF, SF, dF, PF, RF) {
              let EF = FF.coordsAtPos(WF, WF == CF.to ? -2 : 2),
                QF = FF.coordsAtPos(dF, dF == CF.from ? 2 : -2);
              EF && QF && (AF = Math.min(EF.top, QF.top, AF), hF = Math.max(EF.bottom, QF.bottom, hF), RF == PW.LTR ? bW.push(uF && SF ? iW : EF.left, uF && PF ? eF : QF.right) : bW.push(!uF && PF ? iW : QF.left, !uF && SF ? eF : EF.right))
            }
            let PF = null !== WF && void 0 !== WF ? WF : CF.from,
              RF = null !== SF && void 0 !== SF ? SF : CF.to;
            for (let uF of FF.XuF)
              if (uF.to > PF && uF.from < RF)
                for (let CF = Math.max(uF.from, PF), AF = Math.min(uF.to, RF);;) {
                  let uF = FF.state.doc.lineAt(CF);
                  for (let hF of FF.bidiSpans(uF)) {
                    let FF = hF.from + uF.from,
                      bW = hF.to + uF.from;
                    if (FF >= AF) break;
                    bW > CF && dF(Math.max(FF, CF), null == WF && FF <= PF, Math.min(bW, AF), null == SF && bW >= RF, hF.dir)
                  }
                  if (CF = uF.to + 1, CF >= AF) break
                }
            return 0 == bW.length && dF(PF, null == WF, RF, null == SF, FF.textDirection), {
              top: AF,
              bottom: hF,
              horizontal: bW
            }
          }

          function kW(FF, WF) {
            let SF = bW.top + (WF ? FF.top : FF.bottom);
            return {
              top: SF,
              bottom: SF,
              horizontal: []
            }
          }
        }(FF, WF, SF)
      }
    }

    function KA(FF) {
      let WF = FF.scrollDOM.getBoundingClientRect();
      return {
        left: (FF.textDirection == PW.LTR ? WF.left : WF.right - FF.scrollDOM.clientWidth * FF.scaleX) - FF.scrollDOM.scrollLeft * FF.scaleX,
        top: WF.top - FF.scrollDOM.scrollTop * FF.scaleY
      }
    }

    function wA(FF, WF, SF, CF) {
      let AF = FF.coordsAtPos(WF, 2 * SF);
      if (!AF) return CF;
      let uF = FF.dom.getBoundingClientRect(),
        hF = (AF.top + AF.bottom) / 2,
        bW = FF.posAtCoords({
          x: uF.left + 1,
          y: hF
        }),
        dF = FF.posAtCoords({
          x: uF.right - 1,
          y: hF
        });
      return null == bW || null == dF ? CF : {
        from: Math.max(CF.from, Math.min(bW, dF)),
        to: Math.min(CF.to, Math.max(bW, dF))
      }
    }
    class XA {
      constructor(FF, WF) {
        this.view = FF, this.layer = WF, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
          read: this.measure.bind(this),
          write: this.draw.bind(this)
        }, this.dom = FF.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), WF.above && this.dom.classList.add("cm-layer-above"), WF.class && this.dom.classList.add(WF.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(FF.state), FF.requestMeasure(this.measureReq), WF.mount && WF.mount(this.dom, FF)
      }
      update(FF) {
        FF.startState.facet(UA) != FF.state.facet(UA) && this.setOrder(FF.state), (this.layer.update(FF, this.dom) || FF.geometryChanged) && (this.scale(), FF.view.requestMeasure(this.measureReq))
      }
      docViewUpdate(FF) {
        !1 !== this.layer.updateOnDocViewUpdate && FF.requestMeasure(this.measureReq)
      }
      setOrder(FF) {
        let WF = 0,
          SF = FF.facet(UA);
        for (; WF < SF.length && SF[WF] != this.layer;) WF++;
        this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - WF)
      }
      measure() {
        return this.layer.markers(this.view)
      }
      scale() {
        let {
          scaleX: FF,
          scaleY: WF
        } = this.view;
        FF == this.scaleX && WF == this.scaleY || (this.scaleX = FF, this.scaleY = WF, this.dom.style.transform = `scale(${1/FF}, ${1/WF})`)
      }
      draw(FF) {
        if (FF.length != this.drawn.length || FF.some(((FF, WF) => {
            return SF = FF, CF = this.drawn[WF], !(SF.constructor == CF.constructor && SF.eq(CF));
            var SF, CF
          }))) {
          let WF = this.dom.firstChild,
            SF = 0;
          for (let CF of FF) CF.update && WF && CF.constructor && this.drawn[SF].constructor && CF.update(WF, this.drawn[SF]) ? (WF = WF.nextSibling, SF++) : this.dom.insertBefore(CF.draw(), WF);
          for (; WF;) {
            let FF = WF.nextSibling;
            WF.remove(), WF = FF
          }
          this.drawn = FF, NF.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none")
        }
      }
      destroy() {
        this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove()
      }
    }
    const UA = CF.t.define();

    function BA(FF) {
      return [vS.define((WF => new XA(WF, FF))), UA.of(FF)]
    }
    const ju = CF.t.define({
      combine: FF => (0, CF.Y)(FF, {
        cursorBlinkRate: 1200,
        drawRangeCursor: !0,
        iosSelectionHandles: !0
      }, {
        cursorBlinkRate: (FF, WF) => Math.min(FF, WF),
        drawRangeCursor: (FF, WF) => FF || WF
      })
    });

    function vu() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [ju.of(FF), pA, Fu, Wu, sW.of(!0)]
    }

    function JA(FF) {
      return FF.startState.facet(ju) != FF.state.facet(ju)
    }
    const pA = BA({
      above: !0,
      markers(FF) {
        let {
          state: WF
        } = FF, SF = WF.facet(ju), AF = [];
        for (let uF of WF.selection.Bu) {
          let hF = uF == WF.selection.main;
          if (uF.empty || SF.drawRangeCursor && !(hF && NF.ios && SF.iosSelectionHandles)) {
            let WF = hF ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
              SF = uF.empty ? uF : CF.m.cursor(uF.head, uF.assoc);
            for (let CF of HA.forRange(FF, WF, SF)) AF.push(CF)
          }
        }
        return AF
      },
      update(FF, WF) {
        FF.transactions.some((FF => FF.selection)) && (WF.style.animationName = "cm-blink" == WF.style.animationName ? "cm-blink2" : "cm-blink");
        let SF = JA(FF);
        return SF && lA(FF.state, WF), FF.docChanged || FF.selectionSet || SF
      },
      mount(FF, WF) {
        lA(WF.state, FF)
      },
      class: "cm-cursorLayer"
    });

    function lA(FF, WF) {
      WF.style.animationDuration = FF.facet(ju).cursorBlinkRate + "ms"
    }
    const Fu = BA({
        above: !1,
        markers(FF) {
          let WF = [],
            {
              main: SF,
              Bu: AF
            } = FF.state.selection;
          for (let CF of AF)
            if (!CF.empty)
              for (let SF of HA.forRange(FF, "cm-selectionBackground", CF)) WF.push(SF);
          if (NF.ios && !SF.empty && FF.state.facet(ju).iosSelectionHandles) {
            for (let AF of HA.forRange(FF, "cm-selectionHandle cm-selectionHandle-start", CF.m.cursor(SF.from, 1))) WF.push(AF);
            for (let AF of HA.forRange(FF, "cm-selectionHandle cm-selectionHandle-end", CF.m.cursor(SF.to, 1))) WF.push(AF)
          }
          return WF
        },
        update: (FF, WF) => FF.docChanged || FF.selectionSet || FF.viewportChanged || JA(FF),
        class: "cm-selectionLayer"
      }),
      Wu = CF.x.highest(LA.theme({
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
      Su = CF.H.define({
        map: (FF, WF) => null == FF ? null : WF.mapPos(FF)
      }),
      Cu = CF.J.define({
        create: () => null,
        update: (FF, WF) => (null != FF && (FF = WF.changes.mapPos(FF)), WF.effects.reduce(((FF, WF) => WF.is(Su) ? WF.value : FF), FF))
      }),
      Au = vS.fromClass(class {
        constructor(FF) {
          this.view = FF, this.cursor = null, this.measureReq = {
            read: this.readPos.bind(this),
            write: this.drawCursor.bind(this)
          }
        }
        update(FF) {
          var WF;
          let SF = FF.state.field(Cu);
          null == SF ? null != this.cursor && (null === (WF = this.cursor) || void 0 === WF || WF.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (FF.startState.field(Cu) != SF || FF.docChanged || FF.geometryChanged) && this.view.requestMeasure(this.measureReq))
        }
        readPos() {
          let {
            view: FF
          } = this, WF = FF.state.field(Cu), SF = null != WF && FF.coordsAtPos(WF);
          if (!SF) return null;
          let CF = FF.scrollDOM.getBoundingClientRect();
          return {
            left: SF.left - CF.left + FF.scrollDOM.scrollLeft * FF.scaleX,
            top: SF.top - CF.top + FF.scrollDOM.scrollTop * FF.scaleY,
            height: SF.bottom - SF.top
          }
        }
        drawCursor(FF) {
          if (this.cursor) {
            let {
              scaleX: WF,
              scaleY: SF
            } = this.view;
            FF ? (this.cursor.style.left = FF.left / WF + "px", this.cursor.style.top = FF.top / SF + "px", this.cursor.style.height = FF.height / SF + "px") : this.cursor.style.left = "-100000px"
          }
        }
        destroy() {
          this.cursor && this.cursor.remove()
        }
        setDropPos(FF) {
          this.view.state.field(Cu) != FF && this.view.dispatch({
            effects: Su.of(FF)
          })
        }
      }, {
        eventObservers: {
          dragover(FF) {
            this.setDropPos(this.view.posAtCoords({
              x: FF.clientX,
              y: FF.clientY
            }))
          },
          dragleave(FF) {
            FF.target != this.view.contentDOM && this.view.contentDOM.contains(FF.relatedTarget) || this.setDropPos(null)
          },
          dragend() {
            this.setDropPos(null)
          },
          drop() {
            this.setDropPos(null)
          }
        }
      });

    function uu() {
      return [Cu, Au]
    }

    function hu(FF, WF, SF, CF, AF) {
      WF.lastIndex = 0;
      for (let uF, hF = FF.iterRange(SF, CF), bW = SF; !hF.next().done; bW += hF.value.length)
        if (!hF.lineBreak)
          for (; uF = WF.exec(hF.value);) AF(bW + uF.index, uF)
    }
    class bh {
      constructor(FF) {
        const {
          regexp: WF,
          decoration: SF,
          decorate: CF,
          boundary: AF,
          maxLength: uF = 1e3
        } = FF;
        if (!WF.global) throw new RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
        if (this.regexp = WF, CF) this.addMatch = (FF, WF, SF, AF) => CF(AF, SF, SF + FF[0].length, FF, WF);
        else if ("function" == typeof SF) this.addMatch = (FF, WF, CF, AF) => {
          let uF = SF(FF, WF, CF);
          uF && AF(CF, CF + FF[0].length, uF)
        };
        else {
          if (!SF) throw new RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
          this.addMatch = (FF, WF, CF, AF) => AF(CF, CF + FF[0].length, SF)
        }
        this.boundary = AF, this.maxLength = uF
      }
      createDeco(FF) {
        let WF = new CF.A,
          SF = WF.add.bind(WF);
        for (let {
            from: CF,
            to: AF
          }
          of
          function(FF, WF) {
            let SF = FF.XuF;
            if (1 == SF.length && SF[0].from == FF.viewport.from && SF[0].to == FF.viewport.to) return SF;
            let CF = [];
            for (let {
                from: AF,
                to: uF
              }
              of SF) AF = Math.max(FF.state.doc.lineAt(AF).from, AF - WF), uF = Math.min(FF.state.doc.lineAt(uF).to, uF + WF), CF.length && CF[CF.length - 1].to >= AF ? CF[CF.length - 1].to = uF : CF.push({
              from: AF,
              to: uF
            });
            return CF
          }(FF, this.maxLength)) hu(FF.state.doc, this.regexp, CF, AF, ((WF, CF) => this.addMatch(CF, FF, WF, SF)));
        return WF.finish()
      }
      updateDeco(FF, WF) {
        let SF = 1e9,
          CF = -1;
        return FF.docChanged && FF.changes.iterChanges(((WF, AF, uF, hF) => {
          hF >= FF.view.viewport.from && uF <= FF.view.viewport.to && (SF = Math.min(uF, SF), CF = Math.max(hF, CF))
        })), FF.viewportMoved || CF - SF > 1e3 ? this.createDeco(FF.view) : CF > -1 ? this.updateRange(FF.view, WF.map(FF.changes), SF, CF) : WF
      }
      updateRange(FF, WF, SF, CF) {
        for (let AF of FF.XuF) {
          let uF = Math.max(AF.from, SF),
            hF = Math.min(AF.to, CF);
          if (hF >= uF) {
            let SF = FF.state.doc.lineAt(uF),
              CF = SF.to < hF ? FF.state.doc.lineAt(hF) : SF,
              bW = Math.max(AF.from, SF.from),
              dF = Math.min(AF.to, CF.to);
            if (this.boundary) {
              for (; uF > SF.from; uF--)
                if (this.boundary.test(SF.text[uF - 1 - SF.from])) {
                  bW = uF;
                  break
                } for (; hF < CF.to; hF++)
                if (this.boundary.test(CF.text[hF - CF.from])) {
                  dF = hF;
                  break
                }
            }
            let PF, RF = [],
              iW = (FF, WF, SF) => RF.push(SF.range(FF, WF));
            if (SF == CF)
              for (this.regexp.lastIndex = bW - SF.from;
                (PF = this.regexp.exec(SF.text)) && PF.index < dF - SF.from;) this.addMatch(PF, FF, PF.index + SF.from, iW);
            else hu(FF.state.doc, this.regexp, bW, dF, ((WF, SF) => this.addMatch(SF, FF, WF, iW)));
            WF = WF.update({
              filterFrom: bW,
              filterTo: dF,
              filter: (FF, WF) => FF < bW || WF > dF,
              add: RF
            })
          }
        }
        return WF
      }
    }
    const du = null != /x/.unicode ? "gu" : "g",
      Pu = new RegExp("[\0-\b\n-\x1f\x7f-\x9f\xad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]", du),
      Ru = {
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
    let ih = null;
    const eu = CF.t.define({
      combine(FF) {
        let WF = (0, CF.Y)(FF, {
          render: null,
          specialChars: Pu,
          addSpecialChars: null
        });
        return (WF.replaceTabs = ! function() {
          var FF;
          if (null == ih && "undefined" != typeof document && document.body) {
            let WF = document.body.style;
            ih = null != (null !== (FF = WF.tabSize) && void 0 !== FF ? FF : WF.MozTabSize)
          }
          return ih || !1
        }()) && (WF.specialChars = new RegExp("\t|" + WF.specialChars.source, du)), WF.addSpecialChars && (WF.specialChars = new RegExp(WF.specialChars.source + "|" + WF.addSpecialChars.source, du)), WF
      }
    });

    function Eu() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [eu.of(FF), Qu || (Qu = vS.fromClass(class {
        constructor(FF) {
          this.view = FF, this.Iu = YF.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(FF.state.facet(eu)), this.Iu = this.decorator.createDeco(FF)
        }
        makeDecorator(FF) {
          return new bh({
            regexp: FF.specialChars,
            decoration: (WF, SF, AF) => {
              let {
                doc: uF
              } = SF.state, hF = (0, CF.S)(WF[0], 0);
              if (9 == hF) {
                let FF = uF.lineAt(AF),
                  WF = SF.state.tabSize,
                  hF = (0, CF.$)(FF.text, WF, AF - FF.from);
                return YF.replace({
                  widget: new gh((WF - hF % WF) * this.view.defaultCharacterWidth / this.view.scaleX)
                })
              }
              return this.decorationCache[hF] || (this.decorationCache[hF] = YF.replace({
                widget: new rh(FF, hF)
              }))
            },
            boundary: FF.replaceTabs ? void 0 : /[^]/
          })
        }
        update(FF) {
          let WF = FF.state.facet(eu);
          FF.startState.facet(eu) != WF ? (this.decorator = this.makeDecorator(WF), this.Iu = this.decorator.createDeco(FF.view)) : this.Iu = this.decorator.updateDeco(FF, this.Iu)
        }
      }, {
        Iu: FF => FF.Iu
      }))]
    }
    let Qu = null;
    class rh extends ZF {
      constructor(FF, WF) {
        super(), this.options = FF, this.code = WF
      }
      eq(FF) {
        return FF.code == this.code
      }
      toDOM(FF) {
        let WF = function(FF) {
            return FF >= 32 ? "\u2022" : 10 == FF ? "\u2424" : String.fromCharCode(9216 + FF)
          }(this.code),
          SF = FF.state.phrase("Control character") + " " + (Ru[this.code] || "0x" + this.code.toString(16)),
          CF = this.options.render && this.options.render(this.code, SF, WF);
        if (CF) return CF;
        let AF = document.createElement("span");
        return AF.textContent = WF, AF.title = SF, AF.setAttribute("aria-label", SF), AF.className = "cm-specialChar", AF
      }
      ignoreEvent() {
        return !1
      }
    }
    class gh extends ZF {
      constructor(FF) {
        super(), this.width = FF
      }
      eq(FF) {
        return FF.width == this.width
      }
      toDOM() {
        let FF = document.createElement("span");
        return FF.textContent = "\t", FF.className = "cm-tab", FF.style.width = this.width + "px", FF
      }
      ignoreEvent() {
        return !1
      }
    }

    function th() {
      return ah
    }
    const Tu = YF.line({
        class: "cm-activeLine"
      }),
      ah = vS.fromClass(class {
        constructor(FF) {
          this.Iu = this.getDeco(FF)
        }
        update(FF) {
          (FF.docChanged || FF.selectionSet) && (this.Iu = this.getDeco(FF.view))
        }
        getDeco(FF) {
          let WF = -1,
            SF = [];
          for (let CF of FF.state.selection.Bu) {
            let AF = FF.lineBlockAt(CF.head);
            AF.from > WF && (SF.push(Tu.range(AF.from)), WF = AF.from)
          }
          return YF.set(SF)
        }
      }, {
        Iu: FF => FF.Iu
      });
    class kh extends ZF {
      constructor(FF) {
        super(), this.content = FF
      }
      toDOM(FF) {
        let WF = document.createElement("span");
        return WF.className = "cm-placeholder", WF.style.pointerEvents = "none", WF.appendChild("string" == typeof this.content ? document.createTextNode(this.content) : "function" == typeof this.content ? this.content(FF) : this.content.cloneNode(!0)), WF.setAttribute("aria-hidden", "true"), WF
      }
      coordsAt(FF) {
        let WF = FF.firstChild ? HF(FF.firstChild) : [];
        if (!WF.length) return null;
        let SF = window.getComputedStyle(FF.parentNode),
          CF = jW(WF[0], "rtl" != SF.direction),
          AF = parseInt(SF.lineHeight);
        return CF.bottom - CF.top > 1.5 * AF ? {
          left: CF.left,
          right: CF.right,
          top: CF.top,
          bottom: CF.top + AF
        } : CF
      }
      ignoreEvent() {
        return !1
      }
    }

    function qh(FF) {
      let WF = vS.fromClass(class {
        constructor(WF) {
          this.view = WF, this.placeholder = FF ? YF.set([YF.widget({
            widget: new kh(FF),
            side: 1
          }).range(0)]) : YF.none
        }
        get Iu() {
          return this.view.state.doc.length ? YF.none : this.placeholder
        }
      }, {
        Iu: FF => FF.Iu
      });
      return "string" == typeof FF ? [WF, LA.contentAttributes.of({
        "aria-placeholder": FF
      })] : WF
    }
    const Vu = 2e3;

    function Nu(FF, WF) {
      let SF = FF.posAtCoords({
          x: WF.clientX,
          y: WF.clientY
        }, !1),
        AF = FF.state.doc.lineAt(SF),
        uF = SF - AF.from,
        hF = uF > Vu ? -1 : uF == AF.length ? function(FF, WF) {
          let SF = FF.coordsAtPos(FF.viewport.from);
          return SF ? Math.round(Math.abs((SF.left - WF) / FF.defaultCharacterWidth)) : -1
        }(FF, WF.clientX) : (0, CF.$)(AF.text, FF.state.tabSize, SF - AF.from);
      return {
        line: AF.number,
        col: hF,
        off: uF
      }
    }

    function Du(FF, WF) {
      let SF = Nu(FF, WF),
        AF = FF.state.selection;
      return SF ? {
        update(FF) {
          if (FF.docChanged) {
            let WF = FF.changes.mapPos(FF.startState.doc.line(SF.line).from),
              CF = FF.state.doc.lineAt(WF);
            SF = {
              line: CF.number,
              col: SF.col,
              off: Math.min(SF.off, CF.length)
            }, AF = AF.map(FF.changes)
          }
        },
        get(WF, uF, hF) {
          let bW = Nu(FF, WF);
          if (!bW) return AF;
          let dF = function(FF, WF, SF) {
            let AF = Math.min(WF.line, SF.line),
              uF = Math.max(WF.line, SF.line),
              hF = [];
            if (WF.off > Vu || SF.off > Vu || WF.col < 0 || SF.col < 0) {
              let bW = Math.min(WF.off, SF.off),
                dF = Math.max(WF.off, SF.off);
              for (let WF = AF; WF <= uF; WF++) {
                let SF = FF.doc.line(WF);
                SF.length <= dF && hF.push(CF.m.range(SF.from + bW, SF.to + dF))
              }
            } else {
              let bW = Math.min(WF.col, SF.col),
                dF = Math.max(WF.col, SF.col);
              for (let WF = AF; WF <= uF; WF++) {
                let SF = FF.doc.line(WF),
                  AF = (0, CF.db)(SF.text, bW, FF.tabSize, !0);
                if (AF < 0) hF.push(CF.m.cursor(SF.to));
                else {
                  let WF = (0, CF.db)(SF.text, dF, FF.tabSize);
                  hF.push(CF.m.range(SF.from + AF, SF.from + WF))
                }
              }
            }
            return hF
          }(FF.state, SF, bW);
          return dF.length ? hF ? CF.m.create(dF.concat(AF.Bu)) : CF.m.create(dF) : AF
        }
      } : null
    }

    function Lu(FF) {
      let WF = (null === FF || void 0 === FF ? void 0 : FF.eventFilter) || (FF => FF.altKey && 0 == FF.button);
      return LA.mouseSelectionStyle.of(((FF, SF) => WF(SF) ? Du(FF, SF) : null))
    }
    const mh = {
        Alt: [18, FF => !!FF.altKey],
        Control: [17, FF => !!FF.ctrlKey],
        Shift: [16, FF => !!FF.shiftKey],
        Meta: [91, FF => !!FF.metaKey]
      },
      Ou = {
        style: "cursor: crosshair"
      };

    function xh() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [WF, SF] = mh[FF.key || "Alt"],
        CF = vS.fromClass(class {
          constructor(FF) {
            this.view = FF, this.isDown = !1
          }
          set(FF) {
            this.isDown != FF && (this.isDown = FF, this.view.update([]))
          }
        }, {
          eventObservers: {
            keydown(FF) {
              this.set(FF.keyCode == WF || SF(FF))
            },
            keyup(FF) {
              FF.keyCode != WF && SF(FF) || this.set(!1)
            },
            mousemove(FF) {
              this.set(SF(FF))
            }
          }
        });
      return [CF, LA.contentAttributes.of((FF => {
        var WF;
        return (null === (WF = FF.plugin(CF)) || void 0 === WF ? void 0 : WF.isDown) ? Ou : null
      }))]
    }
    const Zu = "-10000px";
    class ou {
      constructor(FF, WF, SF, CF) {
        this.facet = WF, this.createTooltipView = SF, this.removeTooltipView = CF, this.input = FF.state.facet(WF), this.tooltips = this.input.filter((FF => FF));
        let AF = null;
        this.tooltipViews = this.tooltips.map((FF => AF = SF(FF, AF)))
      }
      update(FF, WF) {
        var SF;
        let CF = FF.state.facet(this.facet),
          AF = CF.filter((FF => FF));
        if (CF === this.input) {
          for (let WF of this.tooltipViews) WF.update && WF.update(FF);
          return !1
        }
        let uF = [],
          hF = WF ? [] : null;
        for (let bW = 0; bW < AF.length; bW++) {
          let SF = AF[bW],
            CF = -1;
          if (SF) {
            for (let FF = 0; FF < this.tooltips.length; FF++) {
              let WF = this.tooltips[FF];
              WF && WF.create == SF.create && (CF = FF)
            }
            if (CF < 0) uF[bW] = this.createTooltipView(SF, bW ? uF[bW - 1] : null), hF && (hF[bW] = !!SF.above);
            else {
              let SF = uF[bW] = this.tooltipViews[CF];
              hF && (hF[bW] = WF[CF]), SF.update && SF.update(FF)
            }
          }
        }
        for (let bW of this.tooltipViews) uF.indexOf(bW) < 0 && (this.removeTooltipView(bW), null === (SF = bW.destroy) || void 0 === SF || SF.call(bW));
        return WF && (hF.forEach(((FF, SF) => WF[SF] = FF)), WF.length = hF.length), this.input = CF, this.tooltips = AF, this.tooltipViews = uF, !0
      }
    }

    function Yu(FF) {
      let WF = FF.dom.ownerDocument.documentElement;
      return {
        top: 0,
        left: 0,
        bottom: WF.clientHeight,
        right: WF.clientWidth
      }
    }
    const Mu = CF.t.define({
        combine: FF => {
          var WF, SF, CF;
          return {
            position: NF.ios ? "absolute" : (null === (WF = FF.find((FF => FF.position))) || void 0 === WF ? void 0 : WF.position) || "fixed",
            parent: (null === (SF = FF.find((FF => FF.parent))) || void 0 === SF ? void 0 : SF.parent) || null,
            tooltipSpace: (null === (CF = FF.find((FF => FF.tooltipSpace))) || void 0 === CF ? void 0 : CF.tooltipSpace) || Yu
          }
        }
      }),
      ch = new WeakMap,
      Gu = vS.fromClass(class {
        constructor(FF) {
          this.view = FF, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
          let WF = FF.state.facet(Mu);
          this.position = WF.position, this.parent = WF.parent, this.classes = FF.themeClasses, this.createContainer(), this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this
          }, this.resizeObserver = "function" == typeof ResizeObserver ? new ResizeObserver((() => this.measureSoon())) : null, this.manager = new ou(FF, yh, ((FF, WF) => this.createTooltip(FF, WF)), (FF => {
            this.resizeObserver && this.resizeObserver.unobserve(FF.dom), FF.dom.remove()
          })), this.above = this.manager.tooltips.map((FF => !!FF.above)), this.intersectionObserver = "function" == typeof IntersectionObserver ? new IntersectionObserver((FF => {
            Date.now() > this.lastTransaction - 50 && FF.length > 0 && FF[FF.length - 1].intersectionRatio < 1 && this.measureSoon()
          }), {
            threshold: [1]
          }) : null, this.observeIntersection(), FF.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure()
        }
        createContainer() {
          this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom
        }
        observeIntersection() {
          if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            for (let FF of this.manager.tooltipViews) this.intersectionObserver.observe(FF.dom)
          }
        }
        measureSoon() {
          this.measureTimeout < 0 && (this.measureTimeout = setTimeout((() => {
            this.measureTimeout = -1, this.maybeMeasure()
          }), 50))
        }
        update(FF) {
          FF.transactions.length && (this.lastTransaction = Date.now());
          let WF = this.manager.update(FF, this.above);
          WF && this.observeIntersection();
          let SF = WF || FF.geometryChanged,
            CF = FF.state.facet(Mu);
          if (CF.position != this.position && !this.madeAbsolute) {
            this.position = CF.position;
            for (let FF of this.manager.tooltipViews) FF.dom.style.position = this.position;
            SF = !0
          }
          if (CF.parent != this.parent) {
            this.parent && this.container.remove(), this.parent = CF.parent, this.createContainer();
            for (let FF of this.manager.tooltipViews) this.container.appendChild(FF.dom);
            SF = !0
          } else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
          SF && this.maybeMeasure()
        }
        createTooltip(FF, WF) {
          let SF = FF.create(this.view),
            CF = WF ? WF.dom : null;
          if (SF.dom.classList.add("cm-tooltip"), FF.arrow && !SF.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
            let FF = document.createElement("div");
            FF.className = "cm-tooltip-arrow", SF.dom.appendChild(FF)
          }
          return SF.dom.style.position = this.position, SF.dom.style.top = Zu, SF.dom.style.left = "0px", this.container.insertBefore(SF.dom, CF), SF.mount && SF.mount(this.view), this.resizeObserver && this.resizeObserver.observe(SF.dom), SF
        }
        destroy() {
          var FF, WF, SF;
          this.view.win.removeEventListener("resize", this.measureSoon);
          for (let CF of this.manager.tooltipViews) CF.dom.remove(), null === (FF = CF.destroy) || void 0 === FF || FF.call(CF);
          this.parent && this.container.remove(), null === (WF = this.resizeObserver) || void 0 === WF || WF.disconnect(), null === (SF = this.intersectionObserver) || void 0 === SF || SF.disconnect(), clearTimeout(this.measureTimeout)
        }
        readMeasure() {
          let FF = 1,
            WF = 1,
            SF = !1;
          if ("fixed" == this.position && this.manager.tooltipViews.length) {
            let {
              dom: FF
            } = this.manager.tooltipViews[0];
            if (NF.safari) {
              let WF = FF.getBoundingClientRect();
              SF = Math.abs(WF.top + 1e4) > 1 || Math.abs(WF.left) > 1
            } else SF = !!FF.offsetParent && FF.offsetParent != this.container.ownerDocument.body
          }
          if (SF || "absolute" == this.position)
            if (this.parent) {
              let SF = this.parent.getBoundingClientRect();
              SF.width && SF.height && (FF = SF.width / this.parent.offsetWidth, WF = SF.height / this.parent.offsetHeight)
            } else({
              scaleX: FF,
              scaleY: WF
            } = this.view.viewState);
          let CF = this.view.scrollDOM.getBoundingClientRect(),
            AF = bC(this.view);
          return {
            visible: {
              left: CF.left + AF.left,
              top: CF.top + AF.top,
              right: CF.right - AF.right,
              bottom: CF.bottom - AF.bottom
            },
            parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
            pos: this.manager.tooltips.map(((FF, WF) => {
              let SF = this.manager.tooltipViews[WF];
              return SF.getCoords ? SF.getCoords(FF.pos) : this.view.coordsAtPos(FF.pos)
            })),
            size: this.manager.tooltipViews.map((FF => {
              let {
                dom: WF
              } = FF;
              return WF.getBoundingClientRect()
            })),
            space: this.view.state.facet(Mu).tooltipSpace(this.view),
            scaleX: FF,
            scaleY: WF,
            makeAbsolute: SF
          }
        }
        writeMeasure(FF) {
          var WF;
          if (FF.makeAbsolute) {
            this.madeAbsolute = !0, this.position = "absolute";
            for (let FF of this.manager.tooltipViews) FF.dom.style.position = "absolute"
          }
          let {
            visible: SF,
            space: CF,
            scaleX: AF,
            scaleY: uF
          } = FF, hF = [];
          for (let bW = 0; bW < this.manager.tooltips.length; bW++) {
            let dF = this.manager.tooltips[bW],
              PF = this.manager.tooltipViews[bW],
              {
                dom: RF
              } = PF,
              iW = FF.pos[bW],
              eF = FF.size[bW];
            if (!iW || !1 !== dF.clip && (iW.bottom <= Math.max(SF.top, CF.top) || iW.top >= Math.min(SF.bottom, CF.bottom) || iW.right < Math.max(SF.left, CF.left) - .1 || iW.left > Math.min(SF.right, CF.right) + .1)) {
              RF.style.top = Zu;
              continue
            }
            let EF = dF.arrow ? PF.dom.querySelector(".cm-tooltip-arrow") : null,
              QF = EF ? 7 : 0,
              rW = eF.right - eF.left,
              gW = null !== (WF = ch.get(PF)) && void 0 !== WF ? WF : eF.bottom - eF.top,
              tW = PF.offset || fu,
              TF = this.view.textDirection == PW.LTR,
              aW = eF.width > CF.right - CF.left ? TF ? CF.left : CF.right - eF.width : TF ? Math.max(CF.left, Math.min(iW.left - (EF ? 14 : 0) + tW.x, CF.right - rW)) : Math.min(Math.max(CF.left, iW.left - rW + (EF ? 14 : 0) - tW.x), CF.right - rW),
              kW = this.above[bW];
            !dF.strictSide && (kW ? iW.top - gW - QF - tW.y < CF.top : iW.bottom + gW + QF + tW.y > CF.bottom) && kW == CF.bottom - iW.bottom > iW.top - CF.top && (kW = this.above[bW] = !kW);
            let qW = (kW ? iW.top - CF.top : CF.bottom - iW.bottom) - QF;
            if (qW < gW && !1 !== PF.resize) {
              if (qW < this.view.defaultLineHeight) {
                RF.style.top = Zu;
                continue
              }
              ch.set(PF, gW), RF.style.height = (gW = qW) / uF + "px"
            } else RF.style.height && (RF.style.height = "");
            let VF = kW ? iW.top - gW - QF - tW.y : iW.bottom + QF + tW.y,
              NF = aW + rW;
            if (!0 !== PF.overlap)
              for (let FF of hF) FF.left < NF && FF.right > aW && FF.top < VF + gW && FF.bottom > VF && (VF = kW ? FF.top - gW - 2 - QF : FF.bottom + QF + 2);
            if ("absolute" == this.position ? (RF.style.top = (VF - FF.parent.top) / uF + "px", zh(RF, (aW - FF.parent.left) / AF)) : (RF.style.top = VF / uF + "px", zh(RF, aW / AF)), EF) {
              let FF = iW.left + (TF ? tW.x : -tW.x) - (aW + 14 - 7);
              EF.style.left = FF / AF + "px"
            }!0 !== PF.overlap && hF.push({
              left: aW,
              top: VF,
              right: NF,
              bottom: VF + gW
            }), RF.classList.toggle("cm-tooltip-above", kW), RF.classList.toggle("cm-tooltip-below", !kW), PF.positioned && PF.positioned(FF.space)
          }
        }
        maybeMeasure() {
          if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView)))
            for (let FF of this.manager.tooltipViews) FF.dom.style.top = Zu
        }
      }, {
        eventObservers: {
          scroll() {
            this.maybeMeasure()
          }
        }
      });

    function zh(FF, WF) {
      let SF = parseInt(FF.style.left, 10);
      (isNaN(SF) || Math.abs(WF - SF) > 1) && (FF.style.left = WF + "px")
    }
    const Iu = LA.baseTheme({
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
      fu = {
        x: 0,
        y: 0
      },
      yh = CF.t.define({
        enables: [Gu, Iu]
      }),
      su = CF.t.define({
        combine: FF => FF.reduce(((FF, WF) => FF.concat(WF)), [])
      });
    class nu {
      static create(FF) {
        return new nu(FF)
      }
      constructor(FF) {
        this.view = FF, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new ou(FF, su, ((FF, WF) => this.createHostedView(FF, WF)), (FF => FF.dom.remove()))
      }
      createHostedView(FF, WF) {
        let SF = FF.create(this.view);
        return SF.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(SF.dom, WF ? WF.dom.nextSibling : this.dom.firstChild), this.mounted && SF.mount && SF.mount(this.view), SF
      }
      mount(FF) {
        for (let WF of this.manager.tooltipViews) WF.mount && WF.mount(FF);
        this.mounted = !0
      }
      positioned(FF) {
        for (let WF of this.manager.tooltipViews) WF.positioned && WF.positioned(FF)
      }
      update(FF) {
        this.manager.update(FF)
      }
      destroy() {
        var FF;
        for (let WF of this.manager.tooltipViews) null === (FF = WF.destroy) || void 0 === FF || FF.call(WF)
      }
      passProp(FF) {
        let WF;
        for (let SF of this.manager.tooltipViews) {
          let CF = SF[FF];
          if (void 0 !== CF)
            if (void 0 === WF) WF = CF;
            else if (WF !== CF) return
        }
        return WF
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
    const Hu = yh.compute([su], (FF => {
      let WF = FF.facet(su);
      return 0 === WF.length ? null : {
        pos: Math.min(...WF.map((FF => FF.pos))),
        end: Math.max(...WF.map((FF => {
          var WF;
          return null !== (WF = FF.end) && void 0 !== WF ? WF : FF.pos
        }))),
        create: nu.create,
        above: WF[0].above,
        arrow: WF.some((FF => FF.arrow))
      }
    }));
    class Ku {
      constructor(FF, WF, SF, CF, AF) {
        this.view = FF, this.source = WF, this.field = SF, this.setHover = CF, this.hoverTime = AF, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
          x: 0,
          y: 0,
          target: FF.dom,
          time: 0
        }, this.checkHover = this.checkHover.bind(this), FF.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), FF.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this))
      }
      update() {
        this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout((() => this.startHover()), 20))
      }
      get active() {
        return this.view.state.field(this.field)
      }
      checkHover() {
        if (this.hoverTimeout = -1, this.active.length) return;
        let FF = Date.now() - this.lastMove.time;
        FF < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - FF) : this.startHover()
      }
      startHover() {
        clearTimeout(this.restartTimeout);
        let {
          view: FF,
          lastMove: WF
        } = this, SF = FF.docView.tile.nearest(WF.target);
        if (!SF) return;
        let CF, AF = 1;
        if (SF.isWidget()) CF = SF.posAtStart;
        else {
          if (CF = FF.posAtCoords(WF), null == CF) return;
          let SF = FF.coordsAtPos(CF);
          if (!SF || WF.y < SF.top || WF.y > SF.bottom || WF.x < SF.left - FF.defaultCharacterWidth || WF.x > SF.right + FF.defaultCharacterWidth) return;
          let uF = FF.bidiSpans(FF.state.doc.lineAt(CF)).find((FF => FF.from <= CF && FF.to >= CF)),
            hF = uF && uF.dir == PW.RTL ? -1 : 1;
          AF = WF.x < SF.left ? -hF : hF
        }
        let uF = this.source(FF, CF, AF);
        if (null === uF || void 0 === uF ? void 0 : uF.then) {
          let WF = this.pending = {
            pos: CF
          };
          uF.then((SF => {
            this.pending == WF && (this.pending = null, !SF || Array.isArray(SF) && !SF.length || FF.dispatch({
              effects: this.setHover.of(Array.isArray(SF) ? SF : [SF])
            }))
          }), (WF => XW(FF.state, WF, "hover tooltip")))
        } else !uF || Array.isArray(uF) && !uF.length || FF.dispatch({
          effects: this.setHover.of(Array.isArray(uF) ? uF : [uF])
        })
      }
      get tooltip() {
        let FF = this.view.plugin(Gu),
          WF = FF ? FF.manager.tooltips.findIndex((FF => FF.create == nu.create)) : -1;
        return WF > -1 ? FF.manager.tooltipViews[WF] : null
      }
      mousemove(FF) {
        var WF, SF;
        this.lastMove = {
          x: FF.clientX,
          y: FF.clientY,
          target: FF.target,
          time: Date.now()
        }, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
        let {
          active: CF,
          tooltip: AF
        } = this;
        if (CF.length && AF && ! function(FF, WF) {
            let SF, {
              left: CF,
              right: AF,
              top: uF,
              bottom: hF
            } = FF.getBoundingClientRect();
            if (SF = FF.querySelector(".cm-tooltip-arrow")) {
              let FF = SF.getBoundingClientRect();
              uF = Math.min(FF.top, uF), hF = Math.max(FF.bottom, hF)
            }
            return WF.clientX >= CF - wu && WF.clientX <= AF + wu && WF.clientY >= uF - wu && WF.clientY <= hF + wu
          }(AF.dom, FF) || this.pending) {
          let {
            pos: AF
          } = CF[0] || this.pending, uF = null !== (SF = null === (WF = CF[0]) || void 0 === WF ? void 0 : WF.end) && void 0 !== SF ? SF : AF;
          (AF == uF ? this.view.posAtCoords(this.lastMove) == AF : function(FF, WF, SF, CF, AF) {
            let uF = FF.scrollDOM.getBoundingClientRect(),
              hF = FF.documentTop + FF.documentPadding.top + FF.contentHeight;
            if (uF.left > CF || uF.right < CF || uF.top > AF || Math.min(uF.bottom, hF) < AF) return !1;
            let bW = FF.posAtCoords({
              x: CF,
              y: AF
            }, !1);
            return bW >= WF && bW <= SF
          }(this.view, AF, uF, FF.clientX, FF.clientY)) || (this.view.dispatch({
            effects: this.setHover.of([])
          }), this.pending = null)
        }
      }
      mouseleave(FF) {
        clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
        let {
          active: WF
        } = this;
        if (WF.length) {
          let {
            tooltip: WF
          } = this;
          WF && WF.dom.contains(FF.relatedTarget) ? this.watchTooltipLeave(WF.dom) : this.view.dispatch({
            effects: this.setHover.of([])
          })
        }
      }
      watchTooltipLeave(FF) {
        let WF = SF => {
          FF.removeEventListener("mouseleave", WF), this.active.length && !this.view.dom.contains(SF.relatedTarget) && this.view.dispatch({
            effects: this.setHover.of([])
          })
        };
        FF.addEventListener("mouseleave", WF)
      }
      destroy() {
        clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove)
      }
    }
    const wu = 4;

    function Xu(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        SF = CF.H.define(),
        AF = CF.J.define({
          create: () => [],
          update(FF, AF) {
            if (FF.length && (WF.hideOnChange && (AF.docChanged || AF.selection) ? FF = [] : WF.hideOn && (FF = FF.filter((FF => !WF.hideOn(AF, FF)))), AF.docChanged)) {
              let WF = [];
              for (let SF of FF) {
                let FF = AF.changes.mapPos(SF.pos, -1, CF.v.TrackDel);
                if (null != FF) {
                  let CF = Object.assign(Object.create(null), SF);
                  CF.pos = FF, null != CF.end && (CF.end = AF.changes.mapPos(CF.end)), WF.push(CF)
                }
              }
              FF = WF
            }
            for (let WF of AF.effects) WF.is(SF) && (FF = WF.value), WF.is(Bu) && (FF = []);
            return FF
          },
          provide: FF => su.from(FF)
        });
      return {
        active: AF,
        extension: [AF, vS.define((CF => new Ku(CF, FF, AF, SF, WF.hoverTime || 300))), Hu]
      }
    }

    function Uu(FF, WF) {
      let SF = FF.plugin(Gu);
      if (!SF) return null;
      let CF = SF.manager.tooltips.indexOf(WF);
      return CF < 0 ? null : SF.manager.tooltipViews[CF]
    }
    const Bu = CF.H.define();
    const jh = CF.t.define({
      combine(FF) {
        let WF, SF;
        for (let CF of FF) WF = WF || CF.topContainer, SF = SF || CF.bottomContainer;
        return {
          topContainer: WF,
          bottomContainer: SF
        }
      }
    });

    function vh(FF, WF) {
      let SF = FF.plugin(Ju),
        CF = SF ? SF.specs.indexOf(WF) : -1;
      return CF > -1 ? SF.panels[CF] : null
    }
    const Ju = vS.fromClass(class {
      constructor(FF) {
        this.input = FF.state.facet(Fh), this.specs = this.input.filter((FF => FF)), this.panels = this.specs.map((WF => WF(FF)));
        let WF = FF.state.facet(jh);
        this.top = new pu(FF, !0, WF.topContainer), this.bottom = new pu(FF, !1, WF.bottomContainer), this.top.sync(this.panels.filter((FF => FF.top))), this.bottom.sync(this.panels.filter((FF => !FF.top)));
        for (let SF of this.panels) SF.dom.classList.add("cm-panel"), SF.mount && SF.mount()
      }
      update(FF) {
        let WF = FF.state.facet(jh);
        this.top.container != WF.topContainer && (this.top.sync([]), this.top = new pu(FF.view, !0, WF.topContainer)), this.bottom.container != WF.bottomContainer && (this.bottom.sync([]), this.bottom = new pu(FF.view, !1, WF.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
        let SF = FF.state.facet(Fh);
        if (SF != this.input) {
          let WF = SF.filter((FF => FF)),
            CF = [],
            AF = [],
            uF = [],
            hF = [];
          for (let SF of WF) {
            let WF, bW = this.specs.indexOf(SF);
            bW < 0 ? (WF = SF(FF.view), hF.push(WF)) : (WF = this.panels[bW], WF.update && WF.update(FF)), CF.push(WF), (WF.top ? AF : uF).push(WF)
          }
          this.specs = WF, this.panels = CF, this.top.sync(AF), this.bottom.sync(uF);
          for (let FF of hF) FF.dom.classList.add("cm-panel"), FF.mount && FF.mount()
        } else
          for (let CF of this.panels) CF.update && CF.update(FF)
      }
      destroy() {
        this.top.sync([]), this.bottom.sync([])
      }
    }, {
      provide: FF => LA.scrollMargins.of((WF => {
        let SF = WF.plugin(FF);
        return SF && {
          top: SF.top.scrollMargin(),
          bottom: SF.bottom.scrollMargin()
        }
      }))
    });
    class pu {
      constructor(FF, WF, SF) {
        this.view = FF, this.top = WF, this.container = SF, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses()
      }
      sync(FF) {
        for (let WF of this.panels) WF.destroy && FF.indexOf(WF) < 0 && WF.destroy();
        this.panels = FF, this.syncDOM()
      }
      syncDOM() {
        if (0 == this.panels.length) return void(this.dom && (this.dom.remove(), this.dom = void 0));
        if (!this.dom) {
          this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom", this.dom.style[this.top ? "top" : "bottom"] = "0";
          let FF = this.container || this.view.dom;
          FF.insertBefore(this.dom, this.top ? FF.firstChild : null)
        }
        let FF = this.dom.firstChild;
        for (let WF of this.panels)
          if (WF.dom.parentNode == this.dom) {
            for (; FF != WF.dom;) FF = lu(FF);
            FF = FF.nextSibling
          } else this.dom.insertBefore(WF.dom, FF);
        for (; FF;) FF = lu(FF)
      }
      scrollMargin() {
        return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top)
      }
      syncClasses() {
        if (this.container && this.classes != this.view.themeClasses) {
          for (let FF of this.classes.split(" ")) FF && this.container.classList.remove(FF);
          for (let FF of (this.classes = this.view.themeClasses).split(" ")) FF && this.container.classList.add(FF)
        }
      }
    }

    function lu(FF) {
      let WF = FF.nextSibling;
      return FF.remove(), WF
    }
    const Fh = CF.t.define({
      enables: Ju
    });

    function Wh(FF, WF) {
      let SF, AF = new Promise((FF => SF = FF)),
        uF = FF => function(FF, WF, SF) {
          let CF = WF.content ? WF.content(FF, (() => hF(null))) : null;
          if (!CF) {
            if (CF = (0, iW.c)("form"), WF.input) {
              let FF = (0, iW.c)("input", WF.input);
              /^(text|password|number|email|tel|url)$/.test(FF.type) && FF.classList.add("cm-textfield"), FF.name || (FF.name = "input"), CF.appendChild((0, iW.c)("label", (WF.label || "") + ": ", FF))
            } else CF.appendChild(document.createTextNode(WF.label || ""));
            CF.appendChild(document.createTextNode(" ")), CF.appendChild((0, iW.c)("button", {
              class: "cm-button",
              type: "submit"
            }, WF.submitLabel || "OK"))
          }
          let AF = "FORM" == CF.nodeName ? [CF] : CF.querySelectorAll("form");
          for (let bW = 0; bW < AF.length; bW++) {
            let FF = AF[bW];
            FF.addEventListener("keydown", (WF => {
              27 == WF.keyCode ? (WF.preventDefault(), hF(null)) : 13 == WF.keyCode && (WF.preventDefault(), hF(FF))
            })), FF.addEventListener("submit", (WF => {
              WF.preventDefault(), hF(FF)
            }))
          }
          let uF = (0, iW.c)("div", CF, (0, iW.c)("button", {
            onclick: () => hF(null),
            "aria-label": FF.state.phrase("close"),
            class: "cm-dialog-close",
            type: "button"
          }, ["\xd7"]));
          WF.class && (uF.className = WF.class);

          function hF(WF) {
            uF.contains(uF.ownerDocument.activeElement) && FF.focus(), SF(WF)
          }
          return uF.classList.add("cm-dialog"), {
            dom: uF,
            top: WF.top,
            mount: () => {
              if (WF.focus) {
                let FF;
                FF = "string" == typeof WF.focus ? CF.querySelector(WF.focus) : CF.querySelector("input") || CF.querySelector("button"), FF && "select" in FF ? FF.select() : FF && "focus" in FF && FF.focus()
              }
            }
          }
        }(FF, WF, SF);
      FF.state.field(Sh, !1) ? FF.dispatch({
        effects: Ch.of(uF)
      }) : FF.dispatch({
        effects: CF.H.appendConfig.of(Sh.init((() => [uF])))
      });
      let hF = Ah.of(uF);
      return {
        close: hF,
        result: AF.then((WF => ((FF.win.queueMicrotask || (WF => FF.win.setTimeout(WF, 10)))((() => {
          FF.state.field(Sh).indexOf(uF) > -1 && FF.dispatch({
            effects: hF
          })
        })), WF)))
      }
    }
    const Sh = CF.J.define({
        create: () => [],
        update(FF, WF) {
          for (let SF of WF.effects) SF.is(Ch) ? FF = [SF.value].concat(FF) : SF.is(Ah) && (FF = FF.filter((FF => FF != SF.value)));
          return FF
        },
        provide: FF => Fh.computeN([FF], (WF => WF.field(FF)))
      }),
      Ch = CF.H.define(),
      Ah = CF.H.define();
    class uh extends CF.G {
      compare(FF) {
        return this == FF || this.constructor == FF.constructor && this.eq(FF)
      }
      eq(FF) {
        return !1
      }
      destroy(FF) {}
    }
    uh.prototype.elementClass = "", uh.prototype.toDOM = void 0, uh.prototype.mapMode = CF.v.TrackBefore, uh.prototype.startSide = uh.prototype.endSide = -1, uh.prototype.point = !0;
    const hh = CF.t.define(),
      bb = CF.t.define(),
      dh = {
        class: "",
        renderEmptyElements: !1,
        elementStyle: "",
        markers: () => CF.C.empty,
        lineMarker: () => null,
        widgetMarker: () => null,
        lineMarkerChange: null,
        initialSpacer: null,
        updateSpacer: null,
        domEventHandlers: {},
        side: "before"
      },
      Ph = CF.t.define();

    function Rh(FF) {
      return [eh(), Ph.of({
        ...dh,
        ...FF
      })]
    }
    const ib = CF.t.define({
      combine: FF => FF.some((FF => FF))
    });

    function eh(FF) {
      let WF = [Eh];
      return FF && !1 === FF.fixed && WF.push(ib.of(!0)), WF
    }
    const Eh = vS.fromClass(class {
      constructor(FF) {
        this.view = FF, this.domAfter = null, this.prevViewport = FF.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = FF.state.facet(Ph).map((WF => new tb(FF, WF))), this.fixed = !FF.state.facet(ib);
        for (let WF of this.gutters) "after" == WF.config.side ? this.getDOMAfter().appendChild(WF.dom) : this.dom.appendChild(WF.dom);
        this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), FF.scrollDOM.insertBefore(this.dom, FF.contentDOM)
      }
      getDOMAfter() {
        return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter
      }
      update(FF) {
        if (this.updateGutters(FF)) {
          let WF = this.prevViewport,
            SF = FF.view.viewport,
            CF = Math.min(WF.to, SF.to) - Math.max(WF.from, SF.from);
          this.syncGutters(CF < .8 * (SF.to - SF.from))
        }
        if (FF.geometryChanged) {
          let FF = this.view.contentHeight / this.view.scaleY + "px";
          this.dom.style.minHeight = FF, this.domAfter && (this.domAfter.style.minHeight = FF)
        }
        this.view.state.facet(ib) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = FF.view.viewport
      }
      syncGutters(FF) {
        let WF = this.dom.nextSibling;
        FF && (this.dom.remove(), this.domAfter && this.domAfter.remove());
        let SF = CF.C.iter(this.view.state.facet(hh), this.view.viewport.from),
          AF = [],
          uF = this.gutters.map((FF => new gb(FF, this.view.viewport, -this.view.documentPadding.top)));
        for (let CF of this.view.viewportLineBlocks)
          if (AF.length && (AF = []), Array.isArray(CF.type)) {
            let FF = !0;
            for (let WF of CF.type)
              if (WF.type == oF.Text && FF) {
                rb(SF, AF, WF.from);
                for (let FF of uF) FF.line(this.view, WF, AF);
                FF = !1
              } else if (WF.widget)
              for (let FF of uF) FF.widget(this.view, WF)
          } else if (CF.type == oF.Text) {
          rb(SF, AF, CF.from);
          for (let FF of uF) FF.line(this.view, CF, AF)
        } else if (CF.widget)
          for (let FF of uF) FF.widget(this.view, CF);
        for (let CF of uF) CF.finish();
        FF && (this.view.scrollDOM.insertBefore(this.dom, WF), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter))
      }
      updateGutters(FF) {
        let WF = FF.startState.facet(Ph),
          SF = FF.state.facet(Ph),
          AF = FF.docChanged || FF.heightChanged || FF.viewportChanged || !CF.C.eq(FF.startState.facet(hh), FF.state.facet(hh), FF.view.viewport.from, FF.view.viewport.to);
        if (WF == SF)
          for (let CF of this.gutters) CF.update(FF) && (AF = !0);
        else {
          AF = !0;
          let CF = [];
          for (let AF of SF) {
            let SF = WF.indexOf(AF);
            SF < 0 ? CF.push(new tb(this.view, AF)) : (this.gutters[SF].update(FF), CF.push(this.gutters[SF]))
          }
          for (let FF of this.gutters) FF.dom.remove(), CF.indexOf(FF) < 0 && FF.destroy();
          for (let FF of CF) "after" == FF.config.side ? this.getDOMAfter().appendChild(FF.dom) : this.dom.appendChild(FF.dom);
          this.gutters = CF
        }
        return AF
      }
      destroy() {
        for (let FF of this.gutters) FF.destroy();
        this.dom.remove(), this.domAfter && this.domAfter.remove()
      }
    }, {
      provide: FF => LA.scrollMargins.of((WF => {
        let SF = WF.plugin(FF);
        if (!SF || 0 == SF.gutters.length || !SF.fixed) return null;
        let CF = SF.dom.offsetWidth * WF.scaleX,
          AF = SF.domAfter ? SF.domAfter.offsetWidth * WF.scaleX : 0;
        return WF.textDirection == PW.LTR ? {
          left: CF,
          right: AF
        } : {
          right: CF,
          left: AF
        }
      }))
    });

    function Qh(FF) {
      return Array.isArray(FF) ? FF : [FF]
    }

    function rb(FF, WF, SF) {
      for (; FF.value && FF.from <= SF;) FF.from == SF && WF.push(FF.value), FF.next()
    }
    class gb {
      constructor(FF, WF, SF) {
        this.gutter = FF, this.height = SF, this.i = 0, this.cursor = CF.C.iter(FF.markers, WF.from)
      }
      addElement(FF, WF, SF) {
        let {
          gutter: CF
        } = this, AF = (WF.top - this.height) / FF.scaleY, uF = WF.height / FF.scaleY;
        if (this.i == CF.elements.length) {
          let WF = new Th(FF, uF, AF, SF);
          CF.elements.push(WF), CF.dom.appendChild(WF.dom)
        } else CF.elements[this.i].update(FF, uF, AF, SF);
        this.height = WF.bottom, this.i++
      }
      line(FF, WF, SF) {
        let CF = [];
        rb(this.cursor, CF, WF.from), SF.length && (CF = CF.concat(SF));
        let AF = this.gutter.config.lineMarker(FF, WF, CF);
        AF && CF.unshift(AF);
        let uF = this.gutter;
        (0 != CF.length || uF.config.renderEmptyElements) && this.addElement(FF, WF, CF)
      }
      widget(FF, WF) {
        let SF = this.gutter.config.widgetMarker(FF, WF.widget, WF),
          CF = SF ? [SF] : null;
        for (let AF of FF.state.facet(bb)) {
          let SF = AF(FF, WF.widget, WF);
          SF && (CF || (CF = [])).push(SF)
        }
        CF && this.addElement(FF, WF, CF)
      }
      finish() {
        let FF = this.gutter;
        for (; FF.elements.length > this.i;) {
          let WF = FF.elements.pop();
          FF.dom.removeChild(WF.dom), WF.destroy()
        }
      }
    }
    class tb {
      constructor(FF, WF) {
        this.view = FF, this.config = WF, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
        for (let SF in WF.domEventHandlers) this.dom.addEventListener(SF, (CF => {
          let AF, uF = CF.target;
          if (uF != this.dom && this.dom.contains(uF)) {
            for (; uF.parentNode != this.dom;) uF = uF.parentNode;
            let FF = uF.getBoundingClientRect();
            AF = (FF.top + FF.bottom) / 2
          } else AF = CF.clientY;
          let hF = FF.lineBlockAtHeight(AF - FF.documentTop);
          WF.domEventHandlers[SF](FF, hF, CF) && CF.preventDefault()
        }));
        this.markers = Qh(WF.markers(FF)), WF.initialSpacer && (this.spacer = new Th(FF, 0, 0, [WF.initialSpacer(FF)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none")
      }
      update(FF) {
        let WF = this.markers;
        if (this.markers = Qh(this.config.markers(FF.view)), this.spacer && this.config.updateSpacer) {
          let WF = this.config.updateSpacer(this.spacer.markers[0], FF);
          WF != this.spacer.markers[0] && this.spacer.update(FF.view, 0, 0, [WF])
        }
        let SF = FF.view.viewport;
        return !CF.C.eq(this.markers, WF, SF.from, SF.to) || !!this.config.lineMarkerChange && this.config.lineMarkerChange(FF)
      }
      destroy() {
        for (let FF of this.elements) FF.destroy()
      }
    }
    class Th {
      constructor(FF, WF, SF, CF) {
        this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(FF, WF, SF, CF)
      }
      update(FF, WF, SF, CF) {
        this.height != WF && (this.height = WF, this.dom.style.height = WF + "px"), this.above != SF && (this.dom.style.marginTop = (this.above = SF) ? SF + "px" : ""),
          function(FF, WF) {
            if (FF.length != WF.length) return !1;
            for (let SF = 0; SF < FF.length; SF++)
              if (!FF[SF].compare(WF[SF])) return !1;
            return !0
          }(this.markers, CF) || this.setMarkers(FF, CF)
      }
      setMarkers(FF, WF) {
        let SF = "cm-gutterElement",
          CF = this.dom.firstChild;
        for (let AF = 0, uF = 0;;) {
          let hF = uF,
            bW = AF < WF.length ? WF[AF++] : null,
            dF = !1;
          if (bW) {
            let FF = bW.elementClass;
            FF && (SF += " " + FF);
            for (let WF = uF; WF < this.markers.length; WF++)
              if (this.markers[WF].compare(bW)) {
                hF = WF, dF = !0;
                break
              }
          } else hF = this.markers.length;
          for (; uF < hF;) {
            let FF = this.markers[uF++];
            if (FF.toDOM) {
              FF.destroy(CF);
              let WF = CF.nextSibling;
              CF.remove(), CF = WF
            }
          }
          if (!bW) break;
          bW.toDOM && (dF ? CF = CF.nextSibling : this.dom.insertBefore(bW.toDOM(FF), CF)), dF && uF++
        }
        this.dom.className = SF, this.markers = WF
      }
      destroy() {
        this.setMarkers(null, [])
      }
    }
    const ab = CF.t.define(),
      kb = CF.t.define(),
      qb = CF.t.define({
        combine: FF => (0, CF.Y)(FF, {
          formatNumber: String,
          domEventHandlers: {}
        }, {
          domEventHandlers(FF, WF) {
            let SF = Object.assign({}, FF);
            for (let CF in WF) {
              let FF = SF[CF],
                AF = WF[CF];
              SF[CF] = FF ? (WF, SF, CF) => FF(WF, SF, CF) || AF(WF, SF, CF) : AF
            }
            return SF
          }
        })
      });
    class Vh extends uh {
      constructor(FF) {
        super(), this.number = FF
      }
      eq(FF) {
        return this.number == FF.number
      }
      toDOM() {
        return document.createTextNode(this.number)
      }
    }

    function Nh(FF, WF) {
      return FF.state.facet(qb).formatNumber(WF, FF.state)
    }
    const Dh = Ph.compute([qb], (FF => ({
      class: "cm-lineNumbers",
      renderEmptyElements: !1,
      markers: FF => FF.state.facet(ab),
      lineMarker: (FF, WF, SF) => SF.some((FF => FF.toDOM)) ? null : new Vh(Nh(FF, FF.state.doc.lineAt(WF.from).number)),
      widgetMarker: (FF, WF, SF) => {
        for (let CF of FF.state.facet(kb)) {
          let AF = CF(FF, WF, SF);
          if (AF) return AF
        }
        return null
      },
      lineMarkerChange: FF => FF.startState.facet(qb) != FF.state.facet(qb),
      initialSpacer: FF => new Vh(Nh(FF, mb(FF.state.doc.lines))),
      updateSpacer(FF, WF) {
        let SF = Nh(WF.view, mb(WF.view.state.doc.lines));
        return SF == FF.number ? FF : new Vh(SF)
      },
      domEventHandlers: FF.facet(qb).domEventHandlers,
      side: "before"
    })));

    function Lh() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return [qb.of(FF), eh(), Dh]
    }

    function mb(FF) {
      let WF = 9;
      for (; WF < FF;) WF = 10 * WF + 9;
      return WF
    }
    const Oh = new class extends uh {
        constructor() {
          super(...arguments), this.elementClass = "cm-activeLineGutter"
        }
      },
      xb = hh.compute(["selection"], (FF => {
        let WF = [],
          SF = -1;
        for (let CF of FF.selection.Bu) {
          let AF = FF.doc.lineAt(CF.head).from;
          AF > SF && (SF = AF, WF.push(Oh.range(AF)))
        }
        return CF.C.of(WF)
      }));

    function Zh() {
      return xb
    }
  },
  39179: (FF, WF, SF) => {
    SF.d(WF, {
      B: () => QF,
      c: () => CF,
      e: () => EF,
      i: () => hF,
      k: () => RF,
      m: () => PF,
      q: () => MF,
      t: () => GF,
      x: () => cW
    });
    const CF = 1024;
    let AF = 0;
    class uF {
      constructor(FF, WF) {
        this.from = FF, this.to = WF
      }
    }
    class hF {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.id = AF++, this.perNode = !!FF.perNode, this.deserialize = FF.deserialize || (() => {
          throw new Error("This node type doesn't define a deserialize function")
        }), this.combine = FF.combine || null
      }
      add(FF) {
        if (this.perNode) throw new RangeError("Can't add per-node props to node types");
        return "function" != typeof FF && (FF = PF.match(FF)), WF => {
          let SF = FF(WF);
          return void 0 === SF ? null : [this, SF]
        }
      }
    }
    hF.closedBy = new hF({
      deserialize: FF => FF.split(" ")
    }), hF.openedBy = new hF({
      deserialize: FF => FF.split(" ")
    }), hF.group = new hF({
      deserialize: FF => FF.split(" ")
    }), hF.isolate = new hF({
      deserialize: FF => {
        if (FF && "rtl" != FF && "ltr" != FF && "auto" != FF) throw new RangeError("Invalid value for isolate: " + FF);
        return FF || "auto"
      }
    }), hF.contextHash = new hF({
      perNode: !0
    }), hF.lookAhead = new hF({
      perNode: !0
    }), hF.mounted = new hF({
      perNode: !0
    });
    class bW {
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this.tree = FF, this.overlay = WF, this.parser = SF, this.bracketed = CF
      }
      static get(FF) {
        return FF && FF.props && FF.props[hF.mounted.id]
      }
    }
    const dF = Object.create(null);
    class PF {
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.name = FF, this.props = WF, this.id = SF, this.flags = CF
      }
      static define(FF) {
        let WF = FF.props && FF.props.length ? Object.create(null) : dF,
          SF = (FF.top ? 1 : 0) | (FF.skipped ? 2 : 0) | (FF.error ? 4 : 0) | (null == FF.name ? 8 : 0),
          CF = new PF(FF.name || "", WF, FF.id, SF);
        if (FF.props)
          for (let AF of FF.props)
            if (Array.isArray(AF) || (AF = AF(CF)), AF) {
              if (AF[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
              WF[AF[0].id] = AF[1]
            } return CF
      }
      prop(FF) {
        return this.props[FF.id]
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
      is(FF) {
        if ("string" == typeof FF) {
          if (this.name == FF) return !0;
          let WF = this.prop(hF.group);
          return !!WF && WF.indexOf(FF) > -1
        }
        return this.id == FF
      }
      static match(FF) {
        let WF = Object.create(null);
        for (let SF in FF)
          for (let CF of SF.split(" ")) WF[CF] = FF[SF];
        return FF => {
          for (let SF = FF.prop(hF.group), CF = -1; CF < (SF ? SF.length : 0); CF++) {
            let AF = WF[CF < 0 ? FF.name : SF[CF]];
            if (AF) return AF
          }
        }
      }
    }
    PF.none = new PF("", Object.create(null), 0, 8);
    class RF {
      constructor(FF) {
        this.types = FF;
        for (let WF = 0; WF < FF.length; WF++)
          if (FF[WF].id != WF) throw new RangeError("Node type ids should correspond to array positions when creating a node set")
      }
      extend() {
        let FF = [];
        for (var WF = arguments.length, SF = new Array(WF), CF = 0; CF < WF; CF++) SF[CF] = arguments[CF];
        for (let AF of this.types) {
          let WF = null;
          for (let FF of SF) {
            let SF = FF(AF);
            if (SF) {
              WF || (WF = Object.assign({}, AF.props));
              let FF = SF[1],
                CF = SF[0];
              CF.combine && CF.id in WF && (FF = CF.combine(WF[CF.id], FF)), WF[CF.id] = FF
            }
          }
          FF.push(WF ? new PF(AF.name, WF, AF.id, AF.flags) : AF)
        }
        return new RF(FF)
      }
    }
    const iW = new WeakMap,
      eF = new WeakMap;
    var EF;
    ! function(FF) {
      FF[FF.ExcludeBuffers = 1] = "ExcludeBuffers", FF[FF.IncludeAnonymous = 2] = "IncludeAnonymous", FF[FF.IgnoreMounts = 4] = "IgnoreMounts", FF[FF.IgnoreOverlays = 8] = "IgnoreOverlays", FF[FF.EnterBracketed = 16] = "EnterBracketed"
    }(EF || (EF = {}));
    class QF {
      constructor(FF, WF, SF, CF, AF) {
        if (this.type = FF, this.children = WF, this.positions = SF, this.length = CF, this.props = null, AF && AF.length) {
          this.props = Object.create(null);
          for (let [FF, WF] of AF) this.props["number" == typeof FF ? FF : FF.id] = WF
        }
      }
      toString() {
        let FF = bW.get(this);
        if (FF && !FF.overlay) return FF.tree.toString();
        let WF = "";
        for (let SF of this.children) {
          let FF = SF.toString();
          FF && (WF && (WF += ","), WF += FF)
        }
        return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (WF.length ? "(" + WF + ")" : "") : WF
      }
      cursor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return new OF(this.topNode, FF)
      }
      cursorAt(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = iW.get(this) || this.topNode,
          CF = new OF(SF);
        return CF.moveTo(FF, WF), iW.set(this, CF._tree), CF
      }
      get topNode() {
        return new kW(this, 0, 0, null)
      }
      resolve(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = TF(iW.get(this) || this.topNode, FF, WF, !1);
        return iW.set(this, SF), SF
      }
      resolveInner(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = TF(eF.get(this) || this.topNode, FF, WF, !0);
        return eF.set(this, SF), SF
      }
      resolveStack(FF) {
        return function(FF, WF, SF) {
          let CF = FF.resolveInner(WF, SF),
            AF = null;
          for (let uF = CF instanceof kW ? CF : CF.context.parent; uF; uF = uF.parent)
            if (uF.index < 0) {
              let FF = uF.parent;
              (AF || (AF = [CF])).push(FF.resolve(WF, SF)), uF = FF
            } else {
              let FF = bW.get(uF.tree);
              if (FF && FF.overlay && FF.overlay[0].from <= WF && FF.overlay[FF.overlay.length - 1].to >= WF) {
                let hF = new kW(FF.tree, FF.overlay[0].from + uF.from, -1, uF);
                (AF || (AF = [CF])).push(TF(hF, WF, SF, !1))
              }
            } return AF ? LF(AF) : CF
        }(this, FF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
      }
      iterate(FF) {
        let {
          enter: WF,
          AC: SF,
          from: CF = 0,
          to: AF = this.length
        } = FF, uF = FF.mode || 0, hF = (uF & EF.IncludeAnonymous) > 0;
        for (let bW = this.cursor(uF | EF.IncludeAnonymous);;) {
          let FF = !1;
          if (bW.from <= AF && bW.to >= CF && (!hF && bW.type.isAnonymous || !1 !== WF(bW))) {
            if (bW.firstChild()) continue;
            FF = !0
          }
          for (; FF && SF && (hF || !bW.type.isAnonymous) && SF(bW), !bW.nextSibling();) {
            if (!bW.parent()) return;
            FF = !0
          }
        }
      }
      prop(FF) {
        return FF.perNode ? this.props ? this.props[FF.id] : void 0 : this.type.prop(FF)
      }
      get propValues() {
        let FF = [];
        if (this.props)
          for (let WF in this.props) FF.push([+WF, this.props[WF]]);
        return FF
      }
      balance() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this.children.length <= 8 ? this : YF(PF.none, this.children, this.positions, 0, this.children.length, 0, this.length, ((FF, WF, SF) => new QF(this.type, FF, WF, SF, this.propValues)), FF.makeTree || ((FF, WF, SF) => new QF(PF.none, FF, WF, SF)))
      }
      static build(FF) {
        return function(FF) {
          var WF;
          let {
            buffer: SF,
            nodeSet: AF,
            maxBufferLength: uF = CF,
            reused: bW = [],
            minRepeatType: dF = AF.types.length
          } = FF, PF = Array.isArray(SF) ? new rW(SF, SF.length) : SF, RF = AF.types, iW = 0, eF = 0;

          function EF(FF, WF, SF, CF, hF, QF) {
            let {
              id: rW,
              start: NF,
              end: DF,
              size: LF
            } = PF, mW = eF, OF = iW;
            if (LF < 0) {
              if (PF.next(), -1 == LF) {
                let WF = bW[rW];
                return SF.push(WF), void CF.push(NF - FF)
              }
              if (-3 == LF) return void(iW = rW);
              if (-4 == LF) return void(eF = rW);
              throw new RangeError(`Unrecognized record size: ${LF}`)
            }
            let xW, ZF, oF = RF[rW],
              MF = NF - FF;
            if (DF - NF <= uF && (ZF = qW(PF.pos - WF, hF))) {
              let WF = new Uint16Array(ZF.size - ZF.skip),
                SF = PF.pos - ZF.size,
                CF = WF.length;
              for (; PF.pos > SF;) CF = VF(ZF.start, WF, CF);
              xW = new gW(WF, DF - ZF.start, AF), MF = ZF.start - FF
            } else {
              let FF = PF.pos - LF;
              PF.next();
              let WF = [],
                SF = [],
                CF = rW >= dF ? rW : -1,
                AF = 0,
                hF = DF;
              for (; PF.pos > FF;) CF >= 0 && PF.id == CF && PF.size >= 0 ? (PF.end <= hF - uF && (aW(WF, SF, NF, AF, PF.end, hF, CF, mW, OF), AF = WF.length, hF = PF.end), PF.next()) : QF > 2500 ? tW(NF, FF, WF, SF) : EF(NF, FF, WF, SF, CF, QF + 1);
              if (CF >= 0 && AF > 0 && AF < WF.length && aW(WF, SF, NF, AF, NF, hF, CF, mW, OF), WF.reverse(), SF.reverse(), CF > -1 && AF > 0) {
                let FF = TF(oF, OF);
                xW = YF(oF, WF, SF, 0, WF.length, 0, DF - NF, FF, FF)
              } else xW = kW(oF, WF, SF, DF - NF, mW - DF, OF)
            }
            SF.push(xW), CF.push(MF)
          }

          function tW(FF, WF, SF, CF) {
            let hF = [],
              bW = 0,
              dF = -1;
            for (; PF.pos > WF;) {
              let {
                id: FF,
                start: WF,
                end: SF,
                size: CF
              } = PF;
              if (CF > 4) PF.next();
              else {
                if (dF > -1 && WF < dF) break;
                dF < 0 && (dF = SF - uF), hF.push(FF, WF, SF), bW++, PF.next()
              }
            }
            if (bW) {
              let WF = new Uint16Array(4 * bW),
                uF = hF[hF.length - 2];
              for (let FF = hF.length - 3, SF = 0; FF >= 0; FF -= 3) WF[SF++] = hF[FF], WF[SF++] = hF[FF + 1] - uF, WF[SF++] = hF[FF + 2] - uF, WF[SF++] = SF;
              SF.push(new gW(WF, hF[2] - uF, AF)), CF.push(uF - FF)
            }
          }

          function TF(FF, WF) {
            return (SF, CF, AF) => {
              let uF, bW, dF = 0,
                PF = SF.length - 1;
              if (PF >= 0 && (uF = SF[PF]) instanceof QF) {
                if (!PF && uF.type == FF && uF.length == AF) return uF;
                (bW = uF.prop(hF.lookAhead)) && (dF = CF[PF] + uF.length + bW)
              }
              return kW(FF, SF, CF, AF, dF, WF)
            }
          }

          function aW(FF, WF, SF, CF, uF, hF, bW, dF, PF) {
            let RF = [],
              iW = [];
            for (; FF.length > CF;) RF.push(FF.pop()), iW.push(WF.pop() + SF - uF);
            FF.push(kW(AF.types[bW], RF, iW, hF - uF, dF - hF, PF)), WF.push(uF - SF)
          }

          function kW(FF, WF, SF, CF, AF, uF, bW) {
            if (uF) {
              let FF = [hF.contextHash, uF];
              bW = bW ? [FF].concat(bW) : [FF]
            }
            if (AF > 25) {
              let FF = [hF.lookAhead, AF];
              bW = bW ? [FF].concat(bW) : [FF]
            }
            return new QF(FF, WF, SF, CF, bW)
          }

          function qW(FF, WF) {
            let SF = PF.fork(),
              CF = 0,
              AF = 0,
              hF = 0,
              bW = SF.end - uF,
              RF = {
                size: 0,
                start: 0,
                skip: 0
              };
            FF: for (let uF = SF.pos - FF; SF.pos > uF;) {
              let FF = SF.size;
              if (SF.id == WF && FF >= 0) {
                RF.size = CF, RF.start = AF, RF.skip = hF, hF += 4, CF += 4, SF.next();
                continue
              }
              let PF = SF.pos - FF;
              if (FF < 0 || PF < uF || SF.start < bW) break;
              let iW = SF.id >= dF ? 4 : 0,
                eF = SF.start;
              for (SF.next(); SF.pos > PF;) {
                if (SF.size < 0) {
                  if (-3 != SF.size && -4 != SF.size) break FF;
                  iW += 4
                } else SF.id >= dF && (iW += 4);
                SF.next()
              }
              AF = eF, CF += FF, hF += iW
            }
            return (WF < 0 || CF == FF) && (RF.size = CF, RF.start = AF, RF.skip = hF), RF.size > 4 ? RF : void 0
          }

          function VF(FF, WF, SF) {
            let {
              id: CF,
              start: AF,
              end: uF,
              size: hF
            } = PF;
            if (PF.next(), hF >= 0 && CF < dF) {
              let bW = SF;
              if (hF > 4) {
                let CF = PF.pos - (hF - 4);
                for (; PF.pos > CF;) SF = VF(FF, WF, SF)
              }
              WF[--SF] = bW, WF[--SF] = uF - FF, WF[--SF] = AF - FF, WF[--SF] = CF
            } else - 3 == hF ? iW = CF : -4 == hF && (eF = CF);
            return SF
          }
          let NF = [],
            DF = [];
          for (; PF.pos > 0;) EF(FF.start || 0, FF.bufferStart || 0, NF, DF, -1, 0);
          let LF = null !== (WF = FF.length) && void 0 !== WF ? WF : NF.length ? DF[0] + NF[0].length : 0;
          return new QF(RF[FF.topID], NF.reverse(), DF.reverse(), LF)
        }(FF)
      }
    }
    QF.empty = new QF(PF.none, [], [], 0);
    class rW {
      constructor(FF, WF) {
        this.buffer = FF, this.index = WF
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
        return new rW(this.buffer, this.index)
      }
    }
    class gW {
      constructor(FF, WF, SF) {
        this.buffer = FF, this.length = WF, this.set = SF
      }
      get type() {
        return PF.none
      }
      toString() {
        let FF = [];
        for (let WF = 0; WF < this.buffer.length;) FF.push(this.childString(WF)), WF = this.buffer[WF + 3];
        return FF.join(",")
      }
      childString(FF) {
        let WF = this.buffer[FF],
          SF = this.buffer[FF + 3],
          CF = this.set.types[WF],
          AF = CF.name;
        if (/\W/.test(AF) && !CF.isError && (AF = JSON.stringify(AF)), SF == (FF += 4)) return AF;
        let uF = [];
        for (; FF < SF;) uF.push(this.childString(FF)), FF = this.buffer[FF + 3];
        return AF + "(" + uF.join(",") + ")"
      }
      findChild(FF, WF, SF, CF, AF) {
        let {
          buffer: uF
        } = this, hF = -1;
        for (let bW = FF; bW != WF && !(tW(AF, CF, uF[bW + 1], uF[bW + 2]) && (hF = bW, SF > 0)); bW = uF[bW + 3]);
        return hF
      }
      slice(FF, WF, SF) {
        let CF = this.buffer,
          AF = new Uint16Array(WF - FF),
          uF = 0;
        for (let hF = FF, bW = 0; hF < WF;) {
          AF[bW++] = CF[hF++], AF[bW++] = CF[hF++] - SF;
          let WF = AF[bW++] = CF[hF++] - SF;
          AF[bW++] = CF[hF++] - FF, uF = Math.max(uF, WF)
        }
        return new gW(AF, uF, this.set)
      }
    }

    function tW(FF, WF, SF, CF) {
      switch (FF) {
        case -2:
          return SF < WF;
        case -1:
          return CF >= WF && SF < WF;
        case 0:
          return SF < WF && CF > WF;
        case 1:
          return SF <= WF && CF > WF;
        case 2:
          return CF > WF;
        case 4:
          return !0
      }
    }

    function TF(FF, WF, SF, CF) {
      for (var AF; FF.from == FF.to || (SF < 1 ? FF.from >= WF : FF.from > WF) || (SF > -1 ? FF.to <= WF : FF.to < WF);) {
        let WF = !CF && FF instanceof kW && FF.index < 0 ? null : FF.parent;
        if (!WF) return FF;
        FF = WF
      }
      let uF = CF ? 0 : EF.IgnoreOverlays;
      if (CF)
        for (let hF = FF, bW = hF.parent; bW; hF = bW, bW = hF.parent) hF instanceof kW && hF.index < 0 && (null === (AF = bW.enter(WF, SF, uF)) || void 0 === AF ? void 0 : AF.from) != hF.from && (FF = bW);
      for (;;) {
        let CF = FF.enter(WF, SF, uF);
        if (!CF) return FF;
        FF = CF
      }
    }
    class aW {
      cursor() {
        return new OF(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
      }
      getChild(FF) {
        let WF = qW(this, FF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null);
        return WF.length ? WF[0] : null
      }
      getChildren(FF) {
        return qW(this, FF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
      }
      resolve(FF) {
        return TF(this, FF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !1)
      }
      resolveInner(FF) {
        return TF(this, FF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, !0)
      }
      matchContext(FF) {
        return VF(this.parent, FF)
      }
      enterUnfinishedNodesBefore(FF) {
        let WF = this.childBefore(FF),
          SF = this;
        for (; WF;) {
          let FF = WF.lastChild;
          if (!FF || FF.to != WF.to) break;
          FF.type.isError && FF.from == FF.to ? (SF = WF, WF = FF.prevSibling) : WF = FF
        }
        return SF
      }
      get node() {
        return this
      }
      get next() {
        return this.parent
      }
    }
    class kW extends aW {
      constructor(FF, WF, SF, CF) {
        super(), this._tree = FF, this.from = WF, this.index = SF, this._parent = CF
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
      nextChild(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        for (let uF = this;;) {
          for (let {
              children: hF,
              positions: dF
            } = uF._tree, PF = WF > 0 ? hF.length : -1; FF != PF; FF += WF) {
            let PF, RF = hF[FF],
              iW = dF[FF] + uF.from;
            if (AF & EF.EnterBracketed && RF instanceof QF && (PF = bW.get(RF)) && !PF.overlay && PF.bracketed && SF >= iW && SF <= iW + RF.length || tW(CF, SF, iW, iW + RF.length))
              if (RF instanceof gW) {
                if (AF & EF.ExcludeBuffers) continue;
                let hF = RF.findChild(0, RF.buffer.length, WF, SF - iW, CF);
                if (hF > -1) return new DF(new NF(uF, RF, FF, iW), null, hF)
              } else if (AF & EF.IncludeAnonymous || !RF.type.isAnonymous || xW(RF)) {
              let hF;
              if (!(AF & EF.IgnoreMounts) && (hF = bW.get(RF)) && !hF.overlay) return new kW(hF.tree, iW, FF, uF);
              let dF = new kW(RF, iW, FF, uF);
              return AF & EF.IncludeAnonymous || !dF.type.isAnonymous ? dF : dF.nextChild(WF < 0 ? RF.children.length - 1 : 0, WF, SF, CF, AF)
            }
          }
          if (AF & EF.IncludeAnonymous || !uF.type.isAnonymous) return null;
          if (FF = uF.index >= 0 ? uF.index + WF : WF < 0 ? -1 : uF._parent._tree.children.length, uF = uF._parent, !uF) return null
        }
      }
      get firstChild() {
        return this.nextChild(0, 1, 0, 4)
      }
      get lastChild() {
        return this.nextChild(this._tree.children.length - 1, -1, 0, 4)
      }
      childAfter(FF) {
        return this.nextChild(0, 1, FF, 2)
      }
      childBefore(FF) {
        return this.nextChild(this._tree.children.length - 1, -1, FF, -2)
      }
      prop(FF) {
        return this._tree.prop(FF)
      }
      enter(FF, WF) {
        let SF, CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (!(CF & EF.IgnoreOverlays) && (SF = bW.get(this._tree)) && SF.overlay) {
          let AF = FF - this.from,
            uF = CF & EF.EnterBracketed && SF.bracketed;
          for (let {
              from: FF,
              to: CF
            }
            of SF.overlay)
            if ((WF > 0 || uF ? FF <= AF : FF < AF) && (WF < 0 || uF ? CF >= AF : CF > AF)) return new kW(SF.tree, SF.overlay[0].from + this.from, -1, this)
        }
        return this.nextChild(0, 1, FF, WF, CF)
      }
      nextSignificantParent() {
        let FF = this;
        for (; FF.type.isAnonymous && FF._parent;) FF = FF._parent;
        return FF
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

    function qW(FF, WF, SF, CF) {
      let AF = FF.cursor(),
        uF = [];
      if (!AF.firstChild()) return uF;
      if (null != SF)
        for (let hF = !1; !hF;)
          if (hF = AF.type.is(SF), !AF.nextSibling()) return uF;
      for (;;) {
        if (null != CF && AF.type.is(CF)) return uF;
        if (AF.type.is(WF) && uF.push(AF.node), !AF.nextSibling()) return null == CF ? uF : []
      }
    }

    function VF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WF.length - 1;
      for (let CF = FF; SF >= 0; CF = CF.parent) {
        if (!CF) return !1;
        if (!CF.type.isAnonymous) {
          if (WF[SF] && WF[SF] != CF.name) return !1;
          SF--
        }
      }
      return !0
    }
    class NF {
      constructor(FF, WF, SF, CF) {
        this.parent = FF, this.buffer = WF, this.index = SF, this.start = CF
      }
    }
    class DF extends aW {
      get name() {
        return this.type.name
      }
      get from() {
        return this.context.start + this.context.buffer.buffer[this.index + 1]
      }
      get to() {
        return this.context.start + this.context.buffer.buffer[this.index + 2]
      }
      constructor(FF, WF, SF) {
        super(), this.context = FF, this._parent = WF, this.index = SF, this.type = FF.buffer.set.types[FF.buffer.buffer[SF]]
      }
      child(FF, WF, SF) {
        let {
          buffer: CF
        } = this.context, AF = CF.findChild(this.index + 4, CF.buffer[this.index + 3], FF, WF - this.context.start, SF);
        return AF < 0 ? null : new DF(this.context, this, AF)
      }
      get firstChild() {
        return this.child(1, 0, 4)
      }
      get lastChild() {
        return this.child(-1, 0, 4)
      }
      childAfter(FF) {
        return this.child(1, FF, 2)
      }
      childBefore(FF) {
        return this.child(-1, FF, -2)
      }
      prop(FF) {
        return this.type.prop(FF)
      }
      enter(FF, WF) {
        if ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0) & EF.ExcludeBuffers) return null;
        let {
          buffer: SF
        } = this.context, CF = SF.findChild(this.index + 4, SF.buffer[this.index + 3], WF > 0 ? 1 : -1, FF - this.context.start, WF);
        return CF < 0 ? null : new DF(this.context, this, CF)
      }
      get parent() {
        return this._parent || this.context.parent.nextSignificantParent()
      }
      externalSibling(FF) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + FF, FF, 0, 4)
      }
      get nextSibling() {
        let {
          buffer: FF
        } = this.context, WF = FF.buffer[this.index + 3];
        return WF < (this._parent ? FF.buffer[this._parent.index + 3] : FF.buffer.length) ? new DF(this.context, this._parent, WF) : this.externalSibling(1)
      }
      get prevSibling() {
        let {
          buffer: FF
        } = this.context, WF = this._parent ? this._parent.index + 4 : 0;
        return this.index == WF ? this.externalSibling(-1) : new DF(this.context, this._parent, FF.findChild(WF, this.index, -1, 0, 4))
      }
      get tree() {
        return null
      }
      toTree() {
        let FF = [],
          WF = [],
          {
            buffer: SF
          } = this.context,
          CF = this.index + 4,
          AF = SF.buffer[this.index + 3];
        if (AF > CF) {
          let uF = SF.buffer[this.index + 1];
          FF.push(SF.slice(CF, AF, uF)), WF.push(0)
        }
        return new QF(this.type, FF, WF, this.to - this.from)
      }
      toString() {
        return this.context.buffer.childString(this.index)
      }
    }

    function LF(FF) {
      if (!FF.length) return null;
      let WF = 0,
        SF = FF[0];
      for (let uF = 1; uF < FF.length; uF++) {
        let CF = FF[uF];
        (CF.from > SF.from || CF.to < SF.to) && (SF = CF, WF = uF)
      }
      let CF = SF instanceof kW && SF.index < 0 ? null : SF.parent,
        AF = FF.slice();
      return CF ? AF[WF] = CF : AF.splice(WF, 1), new mW(AF, SF)
    }
    class mW {
      constructor(FF, WF) {
        this.heads = FF, this.node = WF
      }
      get next() {
        return LF(this.heads)
      }
    }
    class OF {
      get name() {
        return this.type.name
      }
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = WF & ~EF.EnterBracketed, FF instanceof kW) this.yieldNode(FF);
        else {
          this._tree = FF.context.parent, this.buffer = FF.context;
          for (let WF = FF._parent; WF; WF = WF._parent) this.stack.unshift(WF.index);
          this.bufferNode = FF, this.yieldBuf(FF.index)
        }
      }
      yieldNode(FF) {
        return !!FF && (this._tree = FF, this.type = FF.type, this.from = FF.from, this.to = FF.to, !0)
      }
      yieldBuf(FF, WF) {
        this.index = FF;
        let {
          start: SF,
          buffer: CF
        } = this.buffer;
        return this.type = WF || CF.set.types[CF.buffer[FF]], this.from = SF + CF.buffer[FF + 1], this.to = SF + CF.buffer[FF + 2], !0
      }
      yield(FF) {
        return !!FF && (FF instanceof kW ? (this.buffer = null, this.yieldNode(FF)) : (this.buffer = FF.context, this.yieldBuf(FF.index, FF.type)))
      }
      toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString()
      }
      enterChild(FF, WF, SF) {
        if (!this.buffer) return this.yield(this._tree.nextChild(FF < 0 ? this._tree._tree.children.length - 1 : 0, FF, WF, SF, this.mode));
        let {
          buffer: CF
        } = this.buffer, AF = CF.findChild(this.index + 4, CF.buffer[this.index + 3], FF, WF - this.buffer.start, SF);
        return !(AF < 0) && (this.stack.push(this.index), this.yieldBuf(AF))
      }
      firstChild() {
        return this.enterChild(1, 0, 4)
      }
      lastChild() {
        return this.enterChild(-1, 0, 4)
      }
      childAfter(FF) {
        return this.enterChild(1, FF, 2)
      }
      childBefore(FF) {
        return this.enterChild(-1, FF, -2)
      }
      enter(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.mode;
        return this.buffer ? !(SF & EF.ExcludeBuffers) && this.enterChild(1, FF, WF) : this.yield(this._tree.enter(FF, WF, SF))
      }
      parent() {
        if (!this.buffer) return this.yieldNode(this.mode & EF.IncludeAnonymous ? this._tree._parent : this._tree.parent);
        if (this.stack.length) return this.yieldBuf(this.stack.pop());
        let FF = this.mode & EF.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        return this.buffer = null, this.yieldNode(FF)
      }
      sibling(FF) {
        if (!this.buffer) return !!this._tree._parent && this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + FF, FF, 0, 4, this.mode));
        let {
          buffer: WF
        } = this.buffer, SF = this.stack.length - 1;
        if (FF < 0) {
          let FF = SF < 0 ? 0 : this.stack[SF] + 4;
          if (this.index != FF) return this.yieldBuf(WF.findChild(FF, this.index, -1, 0, 4))
        } else {
          let FF = WF.buffer[this.index + 3];
          if (FF < (SF < 0 ? WF.buffer.length : WF.buffer[this.stack[SF] + 3])) return this.yieldBuf(FF)
        }
        return SF < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + FF, FF, 0, 4, this.mode))
      }
      nextSibling() {
        return this.sibling(1)
      }
      prevSibling() {
        return this.sibling(-1)
      }
      atLastNode(FF) {
        let WF, SF, {
          buffer: CF
        } = this;
        if (CF) {
          if (FF > 0) {
            if (this.index < CF.buffer.buffer.length) return !1
          } else
            for (let FF = 0; FF < this.index; FF++)
              if (CF.buffer.buffer[FF + 3] < this.index) return !1;
          ({
            index: WF,
            parent: SF
          } = CF)
        } else({
          index: WF,
          _parent: SF
        } = this._tree);
        for (; SF;
          ({
            index: WF,
            _parent: SF
          } = SF))
          if (WF > -1)
            for (let CF = WF + FF, AF = FF < 0 ? -1 : SF._tree.children.length; CF != AF; CF += FF) {
              let FF = SF._tree.children[CF];
              if (this.mode & EF.IncludeAnonymous || FF instanceof gW || !FF.type.isAnonymous || xW(FF)) return !1
            }
        return !0
      }
      move(FF, WF) {
        if (WF && this.enterChild(FF, 0, 4)) return !0;
        for (;;) {
          if (this.sibling(FF)) return !0;
          if (this.atLastNode(FF) || !this.parent()) return !1
        }
      }
      next() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(1, FF)
      }
      prev() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return this.move(-1, FF)
      }
      moveTo(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (;
          (this.from == this.to || (WF < 1 ? this.from >= FF : this.from > FF) || (WF > -1 ? this.to <= FF : this.to < FF)) && this.parent(););
        for (; this.enterChild(1, FF, WF););
        return this
      }
      get node() {
        if (!this.buffer) return this._tree;
        let FF = this.bufferNode,
          WF = null,
          SF = 0;
        if (FF && FF.context == this.buffer) FF: for (let CF = this.index, AF = this.stack.length; AF >= 0;) {
          for (let uF = FF; uF; uF = uF._parent)
            if (uF.index == CF) {
              if (CF == this.index) return uF;
              WF = uF, SF = AF + 1;
              break FF
            } CF = this.stack[--AF]
        }
        for (let CF = SF; CF < this.stack.length; CF++) WF = new DF(this.buffer, WF, this.stack[CF]);
        return this.bufferNode = new DF(this.buffer, WF, this.index)
      }
      get tree() {
        return this.buffer ? null : this._tree._tree
      }
      iterate(FF, WF) {
        for (let SF = 0;;) {
          let CF = !1;
          if (this.type.isAnonymous || !1 !== FF(this)) {
            if (this.firstChild()) {
              SF++;
              continue
            }
            this.type.isAnonymous || (CF = !0)
          }
          for (;;) {
            if (CF && WF && WF(this), CF = this.type.isAnonymous, !SF) return;
            if (this.nextSibling()) break;
            this.parent(), SF--, CF = !0
          }
        }
      }
      matchContext(FF) {
        if (!this.buffer) return VF(this.node.parent, FF);
        let {
          buffer: WF
        } = this.buffer, {
          types: SF
        } = WF.set;
        for (let CF = FF.length - 1, AF = this.stack.length - 1; CF >= 0; AF--) {
          if (AF < 0) return VF(this._tree, FF, CF);
          let uF = SF[WF.buffer[this.stack[AF]]];
          if (!uF.isAnonymous) {
            if (FF[CF] && FF[CF] != uF.name) return !1;
            CF--
          }
        }
        return !0
      }
    }

    function xW(FF) {
      return FF.children.some((FF => FF instanceof gW || !FF.type.isAnonymous || xW(FF)))
    }
    const ZF = new WeakMap;

    function oF(FF, WF) {
      if (!FF.isAnonymous || WF instanceof gW || WF.type != FF) return 1;
      let SF = ZF.get(WF);
      if (null == SF) {
        SF = 1;
        for (let CF of WF.children) {
          if (CF.type != FF || !(CF instanceof QF)) {
            SF = 1;
            break
          }
          SF += oF(FF, CF)
        }
        ZF.set(WF, SF)
      }
      return SF
    }

    function YF(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
      let PF = 0;
      for (let EF = CF; EF < AF; EF++) PF += oF(FF, WF[EF]);
      let RF = Math.ceil(1.5 * PF / 8),
        iW = [],
        eF = [];
      return function WF(SF, CF, AF, hF, bW) {
        for (let PF = AF; PF < hF;) {
          let AF = PF,
            EF = CF[PF],
            QF = oF(FF, SF[PF]);
          for (PF++; PF < hF; PF++) {
            let WF = oF(FF, SF[PF]);
            if (QF + WF >= RF) break;
            QF += WF
          }
          if (PF == AF + 1) {
            if (QF > RF) {
              let FF = SF[AF];
              WF(FF.children, FF.positions, 0, FF.children.length, CF[AF] + bW);
              continue
            }
            iW.push(SF[AF])
          } else {
            let WF = CF[PF - 1] + SF[PF - 1].length - EF;
            iW.push(YF(FF, SF, CF, AF, PF, EF, WF, null, dF))
          }
          eF.push(EF + bW - uF)
        }
      }(WF, SF, CF, AF, 0), (bW || dF)(iW, eF, hF)
    }
    class MF {
      constructor() {
        this.map = new WeakMap
      }
      setBuffer(FF, WF, SF) {
        let CF = this.map.get(FF);
        CF || this.map.set(FF, CF = new Map), CF.set(WF, SF)
      }
      getBuffer(FF, WF) {
        let SF = this.map.get(FF);
        return SF && SF.get(WF)
      }
      set(FF, WF) {
        FF instanceof DF ? this.setBuffer(FF.context.buffer, FF.index, WF) : FF instanceof kW && this.map.set(FF.tree, WF)
      }
      get(FF) {
        return FF instanceof DF ? this.getBuffer(FF.context.buffer, FF.index) : FF instanceof kW ? this.map.get(FF.tree) : void 0
      }
      cursorSet(FF, WF) {
        FF.buffer ? this.setBuffer(FF.buffer.buffer, FF.index, WF) : this.map.set(FF.tree, WF)
      }
      cursorGet(FF) {
        return FF.buffer ? this.getBuffer(FF.buffer.buffer, FF.index) : this.map.get(FF.tree)
      }
    }
    class cW {
      constructor(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          uF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        this.from = FF, this.to = WF, this.tree = SF, this.offset = CF, this.open = (AF ? 1 : 0) | (uF ? 2 : 0)
      }
      get openStart() {
        return (1 & this.open) > 0
      }
      get openEnd() {
        return (2 & this.open) > 0
      }
      static addTree(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = [new cW(0, FF.length, FF, 0, !1, SF)];
        for (let AF of WF) AF.to > FF.length && CF.push(AF);
        return CF
      }
      static applyChanges(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
        if (!WF.length) return FF;
        let CF = [],
          AF = 1,
          uF = FF.length ? FF[0] : null;
        for (let hF = 0, bW = 0, dF = 0;; hF++) {
          let PF = hF < WF.length ? WF[hF] : null,
            RF = PF ? PF.fromA : 1e9;
          if (RF - bW >= SF)
            for (; uF && uF.from < RF;) {
              let WF = uF;
              if (bW >= WF.from || RF <= WF.to || dF) {
                let FF = Math.max(WF.from, bW) - dF,
                  SF = Math.min(WF.to, RF) - dF;
                WF = FF >= SF ? null : new cW(FF, SF, WF.tree, WF.offset + dF, hF > 0, !!PF)
              }
              if (WF && CF.push(WF), uF.to > RF) break;
              uF = AF < FF.length ? FF[AF++] : null
            }
          if (!PF) break;
          bW = PF.toA, dF = PF.toA - PF.toB
        }
        return CF
      }
    }
    class GF {
      startParse(FF, WF, SF) {
        return "string" == typeof FF && (FF = new zW(FF)), SF = SF ? SF.length ? SF.map((FF => new uF(FF.from, FF.to))) : [new uF(0, 0)] : [new uF(0, FF.length)], this.createParse(FF, WF || [], SF)
      }
      parse(FF, WF, SF) {
        let CF = this.startParse(FF, WF, SF);
        for (;;) {
          let FF = CF.advance();
          if (FF) return FF
        }
      }
    }
    class zW {
      constructor(FF) {
        this.string = FF
      }
      get length() {
        return this.string.length
      }
      chunk(FF) {
        return this.string.slice(FF)
      }
      get lineChunks() {
        return !1
      }
      read(FF, WF) {
        return this.string.slice(FF, WF)
      }
    }
    new hF({
      perNode: !0
    })
  },
  39188: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => eF,
      f: () => dF,
      i: () => iW,
      k: () => ZF
    });
    var CF = SF(39179);
    let AF = 0;
    class uF {
      constructor(FF, WF, SF, CF) {
        this.name = FF, this.set = WF, this.base = SF, this.modified = CF, this.id = AF++
      }
      toString() {
        let {
          name: FF
        } = this;
        for (let WF of this.modified) WF.name && (FF = `${WF.name}(${FF})`);
        return FF
      }
      static define(FF, WF) {
        let SF = "string" == typeof FF ? FF : "?";
        if (FF instanceof uF && (WF = FF), null === WF || void 0 === WF ? void 0 : WF.base) throw new Error("Can not derive from a modified tag");
        let CF = new uF(SF, [], null, []);
        if (CF.set.push(CF), WF)
          for (let AF of WF.set) CF.set.push(AF);
        return CF
      }
      static defineModifier(FF) {
        let WF = new bW(FF);
        return FF => FF.modified.indexOf(WF) > -1 ? FF : bW.get(FF.base || FF, FF.modified.concat(WF).sort(((FF, WF) => FF.id - WF.id)))
      }
    }
    let hF = 0;
    class bW {
      constructor(FF) {
        this.name = FF, this.instances = [], this.id = hF++
      }
      static get(FF, WF) {
        if (!WF.length) return FF;
        let SF = WF[0].instances.find((SF => {
          return SF.base == FF && (CF = WF, AF = SF.modified, CF.length == AF.length && CF.every(((FF, WF) => FF == AF[WF])));
          var CF, AF
        }));
        if (SF) return SF;
        let CF = [],
          AF = new uF(FF.name, CF, FF, WF);
        for (let uF of WF) uF.instances.push(AF);
        let hF = function(FF) {
          let WF = [
            []
          ];
          for (let SF = 0; SF < FF.length; SF++)
            for (let CF = 0, AF = WF.length; CF < AF; CF++) WF.push(WF[CF].concat(FF[SF]));
          return WF.sort(((FF, WF) => WF.length - FF.length))
        }(WF);
        for (let uF of FF.set)
          if (!uF.modified.length)
            for (let FF of hF) CF.push(bW.get(uF, FF));
        return AF
      }
    }

    function dF(FF) {
      let WF = Object.create(null);
      for (let SF in FF) {
        let CF = FF[SF];
        Array.isArray(CF) || (CF = [CF]);
        for (let FF of SF.split(" "))
          if (FF) {
            let SF = [],
              AF = 2,
              uF = FF;
            for (let WF = 0;;) {
              if ("..." == uF && WF > 0 && WF + 3 == FF.length) {
                AF = 1;
                break
              }
              let CF = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(uF);
              if (!CF) throw new RangeError("Invalid path: " + FF);
              if (SF.push("*" == CF[0] ? "" : '"' == CF[0][0] ? JSON.parse(CF[0]) : CF[0]), WF += CF[0].length, WF == FF.length) break;
              let hF = FF[WF++];
              if (WF == FF.length && "!" == hF) {
                AF = 0;
                break
              }
              if ("/" != hF) throw new RangeError("Invalid path: " + FF);
              uF = FF.slice(WF)
            }
            let hF = SF.length - 1,
              bW = SF[hF];
            if (!bW) throw new RangeError("Invalid path: " + FF);
            let dF = new RF(CF, AF, hF > 0 ? SF.slice(0, hF) : null);
            WF[bW] = dF.sort(WF[bW])
          }
      }
      return PF.add(WF)
    }
    const PF = new CF.i({
      combine(FF, WF) {
        let SF, CF, AF;
        for (; FF || WF;) {
          if (!FF || WF && FF.depth >= WF.depth ? (AF = WF, WF = WF.next) : (AF = FF, FF = FF.next), SF && SF.mode == AF.mode && !AF.context && !SF.context) continue;
          let uF = new RF(AF.tags, AF.mode, AF.context);
          SF ? SF.next = uF : CF = uF, SF = uF
        }
        return CF
      }
    });
    class RF {
      constructor(FF, WF, SF, CF) {
        this.tags = FF, this.mode = WF, this.context = SF, this.next = CF
      }
      get opaque() {
        return 0 == this.mode
      }
      get inherit() {
        return 1 == this.mode
      }
      sort(FF) {
        return !FF || FF.depth < this.depth ? (this.next = FF, this) : (FF.next = this.sort(FF.next), FF)
      }
      get depth() {
        return this.context ? this.context.length : 0
      }
    }

    function iW(FF, WF) {
      let SF = Object.create(null);
      for (let uF of FF)
        if (Array.isArray(uF.tag))
          for (let FF of uF.tag) SF[FF.id] = uF.class;
        else SF[uF.tag.id] = uF.class;
      let {
        scope: CF,
        all: AF = null
      } = WF || {};
      return {
        style: FF => {
          let WF = AF;
          for (let CF of FF)
            for (let FF of CF.set) {
              let CF = SF[FF.id];
              if (CF) {
                WF = WF ? WF + " " + CF : CF;
                break
              }
            }
          return WF
        },
        scope: CF
      }
    }

    function eF(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : FF.length,
        uF = new EF(CF, Array.isArray(WF) ? WF : [WF], SF);
      uF.highlightRange(FF.cursor(), CF, AF, "", uF.highlighters), uF.flush(AF)
    }
    RF.empty = new RF([], 2, null);
    class EF {
      constructor(FF, WF, SF) {
        this.at = FF, this.highlighters = WF, this.span = SF, this.class = ""
      }
      startSpan(FF, WF) {
        WF != this.class && (this.flush(FF), FF > this.at && (this.at = FF), this.class = WF)
      }
      flush(FF) {
        FF > this.at && this.class && this.span(this.at, FF, this.class)
      }
      highlightRange(FF, WF, SF, AF, uF) {
        let {
          type: hF,
          from: bW,
          to: dF
        } = FF;
        if (bW >= SF || dF <= WF) return;
        hF.isTop && (uF = this.highlighters.filter((FF => !FF.scope || FF.scope(hF))));
        let iW = AF,
          eF = function(FF) {
            let WF = FF.type.prop(PF);
            for (; WF && WF.context && !FF.matchContext(WF.context);) WF = WF.next;
            return WF || null
          }(FF) || RF.empty,
          EF = function(FF, WF) {
            let SF = null;
            for (let CF of FF) {
              let FF = CF.style(WF);
              FF && (SF = SF ? SF + " " + FF : FF)
            }
            return SF
          }(uF, eF.tags);
        if (EF && (iW && (iW += " "), iW += EF, 1 == eF.mode && (AF += (AF ? " " : "") + EF)), this.startSpan(Math.max(WF, bW), iW), eF.opaque) return;
        let QF = FF.tree && FF.tree.prop(CF.i.mounted);
        if (QF && QF.overlay) {
          let CF = FF.node.enter(QF.overlay[0].from + bW, 1),
            hF = this.highlighters.filter((FF => !FF.scope || FF.scope(QF.tree.type))),
            PF = FF.firstChild();
          for (let RF = 0, eF = bW;; RF++) {
            let EF = RF < QF.overlay.length ? QF.overlay[RF] : null,
              rW = EF ? EF.from + bW : dF,
              gW = Math.max(WF, eF),
              tW = Math.min(SF, rW);
            if (gW < tW && PF)
              for (; FF.from < tW && (this.highlightRange(FF, gW, tW, AF, uF), this.startSpan(Math.min(tW, FF.to), iW), !(FF.to >= rW) && FF.nextSibling()););
            if (!EF || rW > SF) break;
            eF = EF.to + bW, eF > WF && (this.highlightRange(CF.cursor(), Math.max(WF, EF.from + bW), Math.min(SF, eF), "", hF), this.startSpan(Math.min(SF, eF), iW))
          }
          PF && FF.parent()
        } else if (FF.firstChild()) {
          QF && (AF = "");
          do {
            if (!(FF.to <= WF)) {
              if (FF.from >= SF) break;
              this.highlightRange(FF, WF, SF, AF, uF), this.startSpan(Math.min(SF, FF.to), iW)
            }
          } while (FF.nextSibling());
          FF.parent()
        }
      }
    }
    const QF = uF.define,
      rW = QF(),
      gW = QF(),
      tW = QF(gW),
      TF = QF(gW),
      aW = QF(),
      kW = QF(aW),
      qW = QF(aW),
      VF = QF(),
      NF = QF(VF),
      DF = QF(),
      LF = QF(),
      mW = QF(),
      OF = QF(mW),
      xW = QF(),
      ZF = {
        comment: rW,
        lineComment: QF(rW),
        blockComment: QF(rW),
        docComment: QF(rW),
        name: gW,
        variableName: QF(gW),
        typeName: tW,
        tagName: QF(tW),
        propertyName: TF,
        attributeName: QF(TF),
        className: QF(gW),
        labelName: QF(gW),
        namespace: QF(gW),
        macroName: QF(gW),
        literal: aW,
        string: kW,
        docString: QF(kW),
        character: QF(kW),
        attributeValue: QF(kW),
        number: qW,
        integer: QF(qW),
        float: QF(qW),
        bool: QF(aW),
        regexp: QF(aW),
        escape: QF(aW),
        color: QF(aW),
        url: QF(aW),
        keyword: DF,
        self: QF(DF),
        null: QF(DF),
        atom: QF(DF),
        unit: QF(DF),
        modifier: QF(DF),
        operatorKeyword: QF(DF),
        controlKeyword: QF(DF),
        definitionKeyword: QF(DF),
        moduleKeyword: QF(DF),
        operator: LF,
        derefOperator: QF(LF),
        arithmeticOperator: QF(LF),
        logicOperator: QF(LF),
        bitwiseOperator: QF(LF),
        compareOperator: QF(LF),
        updateOperator: QF(LF),
        definitionOperator: QF(LF),
        typeOperator: QF(LF),
        controlOperator: QF(LF),
        punctuation: mW,
        separator: QF(mW),
        bracket: OF,
        angleBracket: QF(OF),
        squareBracket: QF(OF),
        paren: QF(OF),
        brace: QF(OF),
        content: VF,
        heading: NF,
        heading1: QF(NF),
        heading2: QF(NF),
        heading3: QF(NF),
        heading4: QF(NF),
        heading5: QF(NF),
        heading6: QF(NF),
        contentSeparator: QF(VF),
        list: QF(VF),
        quote: QF(VF),
        emphasis: QF(VF),
        strong: QF(VF),
        link: QF(VF),
        monospace: QF(VF),
        strikethrough: QF(VF),
        inserted: QF(),
        deleted: QF(),
        changed: QF(),
        invalid: QF(),
        meta: xW,
        documentMeta: QF(xW),
        annotation: QF(xW),
        processingInstruction: QF(xW),
        definition: uF.defineModifier("definition"),
        constant: uF.defineModifier("constant"),
        function: uF.defineModifier("function"),
        standard: uF.defineModifier("standard"),
        local: uF.defineModifier("local"),
        special: uF.defineModifier("special")
      };
    for (let oF in ZF) {
      let FF = ZF[oF];
      FF instanceof uF && (FF.name = oF)
    }
    iW([{
      tag: ZF.link,
      class: "tok-link"
    }, {
      tag: ZF.heading,
      class: "tok-heading"
    }, {
      tag: ZF.emphasis,
      class: "tok-emphasis"
    }, {
      tag: ZF.strong,
      class: "tok-strong"
    }, {
      tag: ZF.keyword,
      class: "tok-keyword"
    }, {
      tag: ZF.atom,
      class: "tok-atom"
    }, {
      tag: ZF.bool,
      class: "tok-bool"
    }, {
      tag: ZF.url,
      class: "tok-url"
    }, {
      tag: ZF.labelName,
      class: "tok-labelName"
    }, {
      tag: ZF.inserted,
      class: "tok-inserted"
    }, {
      tag: ZF.deleted,
      class: "tok-deleted"
    }, {
      tag: ZF.literal,
      class: "tok-literal"
    }, {
      tag: ZF.string,
      class: "tok-string"
    }, {
      tag: ZF.number,
      class: "tok-number"
    }, {
      tag: [ZF.regexp, ZF.escape, ZF.special(ZF.string)],
      class: "tok-string2"
    }, {
      tag: ZF.variableName,
      class: "tok-variableName"
    }, {
      tag: ZF.local(ZF.variableName),
      class: "tok-variableName tok-local"
    }, {
      tag: ZF.definition(ZF.variableName),
      class: "tok-variableName tok-definition"
    }, {
      tag: ZF.special(ZF.variableName),
      class: "tok-variableName2"
    }, {
      tag: ZF.definition(ZF.propertyName),
      class: "tok-propertyName tok-definition"
    }, {
      tag: ZF.typeName,
      class: "tok-typeName"
    }, {
      tag: ZF.namespace,
      class: "tok-namespace"
    }, {
      tag: ZF.className,
      class: "tok-className"
    }, {
      tag: ZF.macroName,
      class: "tok-macroName"
    }, {
      tag: ZF.propertyName,
      class: "tok-propertyName"
    }, {
      tag: ZF.operator,
      class: "tok-operator"
    }, {
      tag: ZF.comment,
      class: "tok-comment"
    }, {
      tag: ZF.meta,
      class: "tok-meta"
    }, {
      tag: ZF.invalid,
      class: "tok-invalid"
    }, {
      tag: ZF.punctuation,
      class: "tok-punctuation"
    }])
  },
  39202: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => bW.k,
      f: () => hF.x,
      g: () => hF.H,
      k: () => hF.J,
      o: () => bW.o,
      r: () => NS,
      u: () => bW.Q,
      y: () => bW.sb
    });
    var CF = SF(1217),
      AF = SF(1208),
      uF = SF(46),
      hF = SF(39153),
      bW = SF(39162),
      dF = SF(39170),
      PF = SF(39179);

    function RF(FF, WF) {
      return SF => {
        let {
          state: CF,
          dispatch: AF
        } = SF;
        if (CF.readOnly) return !1;
        let uF = FF(WF, CF);
        return !!uF && (AF(CF.update(uF)), !0)
      }
    }
    const iW = RF(tW, 0),
      eF = RF(gW, 0),
      EF = RF(((FF, WF) => gW(FF, WF, function(FF) {
        let WF = [];
        for (let SF of FF.selection.Bu) {
          let CF = FF.doc.lineAt(SF.from),
            AF = SF.to <= CF.to ? CF : FF.doc.lineAt(SF.to);
          AF.from > CF.from && AF.from == SF.to && (AF = SF.to == CF.to + 1 ? CF : FF.doc.lineAt(SF.to - 1));
          let uF = WF.length - 1;
          uF >= 0 && WF[uF].to > CF.from ? WF[uF].to = AF.to : WF.push({
            from: CF.from + /^\s*/.exec(CF.text)[0].length,
            to: AF.to
          })
        }
        return WF
      }(WF))), 0);

    function QF(FF, WF) {
      let SF = FF.languageDataAt("commentTokens", WF, 1);
      return SF.length ? SF[0] : {}
    }
    const rW = 50;

    function gW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WF.selection.Bu,
        CF = SF.map((FF => QF(WF, FF.from).block));
      if (!CF.every((FF => FF))) return null;
      let AF = SF.map(((FF, SF) => function(FF, WF, SF, CF) {
        let AF, uF, {
            open: hF,
            close: bW
          } = WF,
          dF = FF.sliceDoc(SF - rW, SF),
          PF = FF.sliceDoc(CF, CF + rW),
          RF = /\s*$/.exec(dF)[0].length,
          iW = /^\s*/.exec(PF)[0].length,
          eF = dF.length - RF;
        if (dF.slice(eF - hF.length, eF) == hF && PF.slice(iW, iW + bW.length) == bW) return {
          open: {
            pos: SF - RF,
            margin: RF && 1
          },
          close: {
            pos: CF + iW,
            margin: iW && 1
          }
        };
        CF - SF <= 2 * rW ? AF = uF = FF.sliceDoc(SF, CF) : (AF = FF.sliceDoc(SF, SF + rW), uF = FF.sliceDoc(CF - rW, CF));
        let EF = /^\s*/.exec(AF)[0].length,
          QF = /\s*$/.exec(uF)[0].length,
          gW = uF.length - QF - bW.length;
        return AF.slice(EF, EF + hF.length) == hF && uF.slice(gW, gW + bW.length) == bW ? {
          open: {
            pos: SF + EF + hF.length,
            margin: /\s/.test(AF.charAt(EF + hF.length)) ? 1 : 0
          },
          close: {
            pos: CF - QF - bW.length,
            margin: /\s/.test(uF.charAt(gW - 1)) ? 1 : 0
          }
        } : null
      }(WF, CF[SF], FF.from, FF.to)));
      if (2 != FF && !AF.every((FF => FF))) return {
        changes: WF.changes(SF.map(((FF, WF) => AF[WF] ? [] : [{
          from: FF.from,
          insert: CF[WF].open + " "
        }, {
          from: FF.to,
          insert: " " + CF[WF].close
        }])))
      };
      if (1 != FF && AF.some((FF => FF))) {
        let FF = [];
        for (let WF, SF = 0; SF < AF.length; SF++)
          if (WF = AF[SF]) {
            let AF = CF[SF],
              {
                open: uF,
                close: hF
              } = WF;
            FF.push({
              from: uF.pos - AF.open.length,
              to: uF.pos + uF.margin
            }, {
              from: hF.pos - hF.margin,
              to: hF.pos + AF.close.length
            })
          } return {
          changes: FF
        }
      }
      return null
    }

    function tW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WF.selection.Bu,
        CF = [],
        AF = -1;
      FF: for (let {
          from: uF,
          to: hF
        }
        of SF) {
        let FF, SF = CF.length,
          bW = 1e9;
        for (let dF = uF; dF <= hF;) {
          let SF = WF.doc.lineAt(dF);
          if (void 0 == FF && (FF = QF(WF, SF.from).line, !FF)) continue FF;
          if (SF.from > AF && (uF == hF || hF > SF.from)) {
            AF = SF.from;
            let WF = /^\s*/.exec(SF.text)[0].length,
              uF = WF == SF.length,
              hF = SF.text.slice(WF, WF + FF.length) == FF ? WF : -1;
            WF < SF.text.length && WF < bW && (bW = WF), CF.push({
              line: SF,
              comment: hF,
              token: FF,
              indent: WF,
              empty: uF,
              single: !1
            })
          }
          dF = SF.to + 1
        }
        if (bW < 1e9)
          for (let WF = SF; WF < CF.length; WF++) CF[WF].indent < CF[WF].line.text.length && (CF[WF].indent = bW);
        CF.length == SF + 1 && (CF[SF].single = !0)
      }
      if (2 != FF && CF.some((FF => FF.comment < 0 && (!FF.empty || FF.single)))) {
        let FF = [];
        for (let {
            line: WF,
            token: AF,
            indent: uF,
            empty: hF,
            single: bW
          }
          of CF) !bW && hF || FF.push({
          from: WF.from + uF,
          insert: AF + " "
        });
        let SF = WF.changes(FF);
        return {
          changes: SF,
          selection: WF.selection.map(SF, 1)
        }
      }
      if (1 != FF && CF.some((FF => FF.comment >= 0))) {
        let FF = [];
        for (let {
            line: WF,
            comment: SF,
            token: AF
          }
          of CF)
          if (SF >= 0) {
            let CF = WF.from + SF,
              uF = CF + AF.length;
            " " == WF.text[uF - WF.from] && uF++, FF.push({
              from: CF,
              to: uF
            })
          } return {
          changes: FF
        }
      }
      return null
    }
    const TF = hF.e.define(),
      aW = hF.e.define(),
      kW = hF.t.define(),
      qW = hF.t.define({
        combine: FF => (0, hF.Y)(FF, {
          minDepth: 100,
          newGroupDelay: 500,
          joinToEvent: (FF, WF) => WF
        }, {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (FF, WF) => (SF, CF) => FF(SF, CF) || WF(SF, CF)
        })
      }),
      VF = hF.J.define({
        create: () => yW.empty,
        update(FF, WF) {
          let SF = WF.state.facet(qW),
            CF = WF.annotation(TF);
          if (CF) {
            let AF = xW.fromTransaction(WF, CF.selection),
              uF = CF.side,
              hF = 0 == uF ? FF.undone : FF.done;
            return hF = AF ? ZF(hF, hF.length, SF.minDepth, AF) : cW(hF, WF.startState.selection), new yW(0 == uF ? CF.rest : hF, 0 == uF ? hF : CF.rest)
          }
          let AF = WF.annotation(aW);
          if ("full" != AF && "before" != AF || (FF = FF.isolate()), !1 === WF.annotation(hF.P.addToHistory)) return WF.changes.empty ? FF : FF.addMapping(WF.changes.desc);
          let uF = xW.fromTransaction(WF),
            bW = WF.annotation(hF.P.time),
            dF = WF.annotation(hF.P.userEvent);
          return uF ? FF = FF.addChanges(uF, bW, dF, SF, WF) : WF.selection && (FF = FF.addSelection(WF.startState.selection, bW, dF, SF.newGroupDelay)), "full" != AF && "after" != AF || (FF = FF.isolate()), FF
        },
        toJSON: FF => ({
          done: FF.done.map((FF => FF.toJSON())),
          undone: FF.undone.map((FF => FF.toJSON()))
        }),
        fromJSON: FF => new yW(FF.done.map(xW.fromJSON), FF.undone.map(xW.fromJSON))
      });

    function NF(FF, WF) {
      return function(SF) {
        let {
          state: CF,
          dispatch: AF
        } = SF;
        if (!WF && CF.readOnly) return !1;
        let uF = CF.field(VF, !1);
        if (!uF) return !1;
        let hF = uF.pop(FF, CF, WF);
        return !!hF && (AF(hF), !0)
      }
    }
    const DF = NF(0, !1),
      LF = NF(1, !1),
      mW = NF(0, !0),
      OF = NF(1, !0);
    class xW {
      constructor(FF, WF, SF, CF, AF) {
        this.changes = FF, this.effects = WF, this.mapped = SF, this.startSelection = CF, this.selectionsAfter = AF
      }
      setSelAfter(FF) {
        return new xW(this.changes, this.effects, this.mapped, this.startSelection, FF)
      }
      toJSON() {
        var FF, WF, SF;
        return {
          changes: null === (FF = this.changes) || void 0 === FF ? void 0 : FF.toJSON(),
          mapped: null === (WF = this.mapped) || void 0 === WF ? void 0 : WF.toJSON(),
          startSelection: null === (SF = this.startSelection) || void 0 === SF ? void 0 : SF.toJSON(),
          selectionsAfter: this.selectionsAfter.map((FF => FF.toJSON()))
        }
      }
      static fromJSON(FF) {
        return new xW(FF.changes && hF.ChangeSet.fromJSON(FF.changes), [], FF.mapped && hF.i.fromJSON(FF.mapped), FF.startSelection && hF.m.fromJSON(FF.startSelection), FF.selectionsAfter.map(hF.m.fromJSON))
      }
      static fromTransaction(FF, WF) {
        let SF = YF;
        for (let CF of FF.startState.facet(kW)) {
          let WF = CF(FF);
          WF.length && (SF = SF.concat(WF))
        }
        return !SF.length && FF.changes.empty ? null : new xW(FF.changes.invert(FF.startState.doc), SF, void 0, WF || FF.startState.selection, YF)
      }
      static selection(FF) {
        return new xW(void 0, YF, void 0, void 0, FF)
      }
    }

    function ZF(FF, WF, SF, CF) {
      let AF = WF + 1 > SF + 20 ? WF - SF - 1 : 0,
        uF = FF.slice(AF, WF);
      return uF.push(CF), uF
    }

    function oF(FF, WF) {
      return FF.length ? WF.length ? FF.concat(WF) : FF : WF
    }
    const YF = [],
      MF = 200;

    function cW(FF, WF) {
      if (FF.length) {
        let SF = FF[FF.length - 1],
          CF = SF.selectionsAfter.slice(Math.max(0, SF.selectionsAfter.length - MF));
        return CF.length && CF[CF.length - 1].eq(WF) ? FF : (CF.push(WF), ZF(FF, FF.length - 1, 1e9, SF.setSelAfter(CF)))
      }
      return [xW.selection([WF])]
    }

    function GF(FF) {
      let WF = FF[FF.length - 1],
        SF = FF.slice();
      return SF[FF.length - 1] = WF.setSelAfter(WF.selectionsAfter.slice(0, WF.selectionsAfter.length - 1)), SF
    }

    function zW(FF, WF) {
      if (!FF.length) return FF;
      let SF = FF.length,
        CF = YF;
      for (; SF;) {
        let AF = IF(FF[SF - 1], WF, CF);
        if (AF.changes && !AF.changes.empty || AF.effects.length) {
          let WF = FF.slice(0, SF);
          return WF[SF - 1] = AF, WF
        }
        WF = AF.mapped, SF--, CF = AF.selectionsAfter
      }
      return CF.length ? [xW.selection(CF)] : YF
    }

    function IF(FF, WF, SF) {
      let CF = oF(FF.selectionsAfter.length ? FF.selectionsAfter.map((FF => FF.map(WF))) : YF, SF);
      if (!FF.changes) return xW.selection(CF);
      let AF = FF.changes.map(WF),
        uF = WF.mapDesc(FF.changes, !0),
        bW = FF.mapped ? FF.mapped.composeDesc(uF) : uF;
      return new xW(AF, hF.H.mapEffects(FF.effects, WF), bW, FF.startSelection.map(uF), CF)
    }
    const fF = /^(input\.type|delete)($|\.)/;
    class yW {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
        this.done = FF, this.undone = WF, this.prevTime = SF, this.prevUserEvent = CF
      }
      isolate() {
        return this.prevTime ? new yW(this.done, this.undone) : this
      }
      addChanges(FF, WF, SF, CF, AF) {
        let uF = this.done,
          bW = uF[uF.length - 1];
        return uF = bW && bW.changes && !bW.changes.empty && FF.changes && (!SF || fF.test(SF)) && (!bW.selectionsAfter.length && WF - this.prevTime < CF.newGroupDelay && CF.joinToEvent(AF, function(FF, WF) {
          let SF = [],
            CF = !1;
          return FF.iterChangedRanges(((FF, WF) => SF.push(FF, WF))), WF.iterChangedRanges(((FF, WF, AF, uF) => {
            for (let hF = 0; hF < SF.length;) {
              let FF = SF[hF++],
                WF = SF[hF++];
              uF >= FF && AF <= WF && (CF = !0)
            }
          })), CF
        }(bW.changes, FF.changes)) || "input.type.compose" == SF) ? ZF(uF, uF.length - 1, CF.minDepth, new xW(FF.changes.compose(bW.changes), oF(hF.H.mapEffects(FF.effects, bW.changes), bW.effects), bW.mapped, bW.startSelection, YF)) : ZF(uF, uF.length, CF.minDepth, FF), new yW(uF, YF, WF, SF)
      }
      addSelection(FF, WF, SF, CF) {
        let AF = this.done.length ? this.done[this.done.length - 1].selectionsAfter : YF;
        return AF.length > 0 && WF - this.prevTime < CF && SF == this.prevUserEvent && SF && /^select($|\.)/.test(SF) && (uF = AF[AF.length - 1], hF = FF, uF.Bu.length == hF.Bu.length && 0 === uF.Bu.filter(((FF, WF) => FF.empty != hF.Bu[WF].empty)).length) ? this : new yW(cW(this.done, FF), this.undone, WF, SF);
        var uF, hF
      }
      addMapping(FF) {
        return new yW(zW(this.done, FF), zW(this.undone, FF), this.prevTime, this.prevUserEvent)
      }
      pop(FF, WF, SF) {
        let CF = 0 == FF ? this.done : this.undone;
        if (0 == CF.length) return null;
        let AF = CF[CF.length - 1],
          uF = AF.selectionsAfter[0] || (AF.startSelection ? AF.startSelection.map(AF.changes.invertedDesc, 1) : WF.selection);
        if (SF && AF.selectionsAfter.length) return WF.update({
          selection: AF.selectionsAfter[AF.selectionsAfter.length - 1],
          annotations: TF.of({
            side: FF,
            rest: GF(CF),
            selection: uF
          }),
          userEvent: 0 == FF ? "select.undo" : "select.redo",
          scrollIntoView: !0
        });
        if (AF.changes) {
          let SF = 1 == CF.length ? YF : CF.slice(0, CF.length - 1);
          return AF.mapped && (SF = zW(SF, AF.mapped)), WF.update({
            changes: AF.changes,
            selection: AF.startSelection,
            effects: AF.effects,
            annotations: TF.of({
              side: FF,
              rest: SF,
              selection: uF
            }),
            filter: !1,
            userEvent: 0 == FF ? "undo" : "redo",
            scrollIntoView: !0
          })
        }
        return null
      }
    }
    yW.empty = new yW(YF, YF);
    const sF = [{
      key: "Mod-z",
      run: DF,
      preventDefault: !0
    }, {
      key: "Mod-y",
      mac: "Mod-Shift-z",
      run: LF,
      preventDefault: !0
    }, {
      linux: "Ctrl-Shift-z",
      run: LF,
      preventDefault: !0
    }, {
      key: "Mod-u",
      run: mW,
      preventDefault: !0
    }, {
      key: "Alt-u",
      mac: "Mod-Shift-u",
      run: OF,
      preventDefault: !0
    }];

    function nF(FF, WF) {
      return hF.m.create(FF.Bu.map(WF), FF.mainIndex)
    }

    function HF(FF, WF) {
      return FF.update({
        selection: WF,
        scrollIntoView: !0,
        userEvent: "select"
      })
    }

    function KF(FF, WF) {
      let {
        state: SF,
        dispatch: CF
      } = FF, AF = nF(SF.selection, WF);
      return !AF.eq(SF.selection, !0) && (CF(HF(SF, AF)), !0)
    }

    function wF(FF, WF) {
      return hF.m.cursor(WF ? FF.to : FF.from)
    }

    function XF(FF, WF) {
      return KF(FF, (SF => SF.empty ? FF.moveByChar(SF, WF) : wF(SF, WF)))
    }

    function UF(FF) {
      return FF.textDirectionAt(FF.state.selection.main.head) == bW.h.LTR
    }
    const BF = FF => XF(FF, !UF(FF)),
      jW = FF => XF(FF, UF(FF));

    function vW(FF, WF) {
      return KF(FF, (SF => SF.empty ? FF.moveByGroup(SF, WF) : wF(SF, WF)))
    }
    "undefined" != typeof Intl && Intl.Segmenter;

    function JF(FF, WF, SF) {
      if (WF.type.prop(SF)) return !0;
      let CF = WF.to - WF.from;
      return CF && (CF > 2 || /[^\s,.;:]/.test(FF.sliceDoc(WF.from, WF.to))) || WF.firstChild
    }

    function pF(FF, WF, SF) {
      let CF, AF, uF = (0, dF.ib)(FF).resolveInner(WF.head),
        bW = SF ? PF.i.closedBy : PF.i.openedBy;
      for (let hF = WF.head;;) {
        let WF = SF ? uF.childAfter(hF) : uF.childBefore(hF);
        if (!WF) break;
        JF(FF, WF, bW) ? uF = WF : hF = SF ? WF.to : WF.from
      }
      return AF = uF.type.prop(bW) && (CF = SF ? (0, dF._)(FF, uF.from, 1) : (0, dF._)(FF, uF.to, -1)) && CF.matched ? SF ? CF.end.to : CF.end.from : SF ? uF.to : uF.from, hF.m.cursor(AF, SF ? -1 : 1)
    }

    function lF(FF, WF) {
      return KF(FF, (SF => {
        if (!SF.empty) return wF(SF, WF);
        let CF = FF.moveVertically(SF, WF);
        return CF.head != SF.head ? CF : FF.moveToLineBoundary(SF, WF)
      }))
    }
    const FW = FF => lF(FF, !1),
      WW = FF => lF(FF, !0);

    function SW(FF) {
      let WF, SF = FF.scrollDOM.clientHeight < FF.scrollDOM.scrollHeight - 2,
        CF = 0,
        AF = 0;
      if (SF) {
        for (let WF of FF.state.facet(bW.k.scrollMargins)) {
          let SF = WF(FF);
          (null === SF || void 0 === SF ? void 0 : SF.top) && (CF = Math.max(null === SF || void 0 === SF ? void 0 : SF.top, CF)), (null === SF || void 0 === SF ? void 0 : SF.bottom) && (AF = Math.max(null === SF || void 0 === SF ? void 0 : SF.bottom, AF))
        }
        WF = FF.scrollDOM.clientHeight - CF - AF
      } else WF = (FF.dom.ownerDocument.defaultView || window).innerHeight;
      return {
        marginTop: CF,
        marginBottom: AF,
        selfScroll: SF,
        height: Math.max(FF.defaultLineHeight, WF - 5)
      }
    }

    function CW(FF, WF) {
      let SF, CF = SW(FF),
        {
          state: AF
        } = FF,
        uF = nF(AF.selection, (SF => SF.empty ? FF.moveVertically(SF, WF, CF.height) : wF(SF, WF)));
      if (uF.eq(AF.selection)) return !1;
      if (CF.selfScroll) {
        let WF = FF.coordsAtPos(AF.selection.main.head),
          hF = FF.scrollDOM.getBoundingClientRect(),
          dF = hF.top + CF.marginTop,
          PF = hF.bottom - CF.marginBottom;
        WF && WF.top > dF && WF.bottom < PF && (SF = bW.k.scrollIntoView(uF.main.head, {
          y: "start",
          yMargin: WF.top - dF
        }))
      }
      return FF.dispatch(HF(AF, uF), {
        effects: SF
      }), !0
    }
    const AW = FF => CW(FF, !1),
      uW = FF => CW(FF, !0);

    function hW(FF, WF, SF) {
      let CF = FF.lineBlockAt(WF.head),
        AF = FF.moveToLineBoundary(WF, SF);
      if (AF.head == WF.head && AF.head != (SF ? CF.to : CF.from) && (AF = FF.moveToLineBoundary(WF, SF, !1)), !SF && AF.head == CF.from && CF.length) {
        let SF = /^\s*/.exec(FF.state.sliceDoc(CF.from, Math.min(CF.from + 100, CF.to)))[0].length;
        SF && WF.head != CF.from + SF && (AF = hF.m.cursor(CF.from + SF))
      }
      return AF
    }

    function bS(FF, WF, SF) {
      let CF = !1,
        AF = nF(FF.selection, (WF => {
          let AF = (0, dF._)(FF, WF.head, -1) || (0, dF._)(FF, WF.head, 1) || WF.head > 0 && (0, dF._)(FF, WF.head - 1, 1) || WF.head < FF.doc.length && (0, dF._)(FF, WF.head + 1, -1);
          if (!AF || !AF.end) return WF;
          CF = !0;
          let uF = AF.start.from == WF.head ? AF.end.to : AF.end.from;
          return SF ? hF.m.range(WF.anchor, uF) : hF.m.cursor(uF)
        }));
      return !!CF && (WF(HF(FF, AF)), !0)
    }

    function dW(FF, WF) {
      let SF = nF(FF.state.selection, (FF => {
        let SF = WF(FF);
        return hF.m.range(FF.anchor, SF.head, SF.goalColumn, SF.bidiLevel || void 0, SF.assoc)
      }));
      return !SF.eq(FF.state.selection) && (FF.dispatch(HF(FF.state, SF)), !0)
    }

    function PW(FF, WF) {
      return dW(FF, (SF => FF.moveByChar(SF, WF)))
    }
    const RW = FF => PW(FF, !UF(FF)),
      iS = FF => PW(FF, UF(FF));

    function eW(FF, WF) {
      return dW(FF, (SF => FF.moveByGroup(SF, WF)))
    }

    function EW(FF, WF) {
      return dW(FF, (SF => FF.moveVertically(SF, WF)))
    }
    const QW = FF => EW(FF, !1),
      rS = FF => EW(FF, !0);

    function gS(FF, WF) {
      return dW(FF, (SF => FF.moveVertically(SF, WF, SW(FF).height)))
    }
    const tS = FF => gS(FF, !1),
      TW = FF => gS(FF, !0),
      aS = FF => {
        let {
          state: WF,
          dispatch: SF
        } = FF;
        return SF(HF(WF, {
          anchor: 0
        })), !0
      },
      kS = FF => {
        let {
          state: WF,
          dispatch: SF
        } = FF;
        return SF(HF(WF, {
          anchor: WF.doc.length
        })), !0
      },
      qS = FF => {
        let {
          state: WF,
          dispatch: SF
        } = FF;
        return SF(HF(WF, {
          anchor: WF.selection.main.anchor,
          head: 0
        })), !0
      },
      VW = FF => {
        let {
          state: WF,
          dispatch: SF
        } = FF;
        return SF(HF(WF, {
          anchor: WF.selection.main.anchor,
          head: WF.doc.length
        })), !0
      };

    function NW(FF, WF) {
      let {
        state: SF
      } = FF, CF = SF.selection, AF = SF.selection.Bu.slice();
      for (let uF of SF.selection.Bu) {
        let CF = SF.doc.lineAt(uF.head);
        if (WF ? CF.to < FF.state.doc.length : CF.from > 0)
          for (let SF = uF;;) {
            let uF = FF.moveVertically(SF, WF);
            if (uF.head < CF.from || uF.head > CF.to) {
              AF.some((FF => FF.head == uF.head)) || AF.push(uF);
              break
            }
            if (uF.head == SF.head) break;
            SF = uF
          }
      }
      return AF.length != CF.Bu.length && (FF.dispatch(HF(SF, hF.m.create(AF, AF.length - 1))), !0)
    }

    function DW(FF, WF) {
      if (FF.state.readOnly) return !1;
      let SF = "delete.selection",
        {
          state: CF
        } = FF,
        AF = CF.changeByRange((CF => {
          let {
            from: AF,
            to: uF
          } = CF;
          if (AF == uF) {
            let hF = WF(CF);
            hF < AF ? (SF = "delete.backward", hF = LW(FF, hF, !1)) : hF > AF && (SF = "delete.forward", hF = LW(FF, hF, !0)), AF = Math.min(AF, hF), uF = Math.max(uF, hF)
          } else AF = LW(FF, AF, !1), uF = LW(FF, uF, !0);
          return AF == uF ? {
            range: CF
          } : {
            changes: {
              from: AF,
              to: uF
            },
            range: hF.m.cursor(AF, AF < CF.head ? -1 : 1)
          }
        }));
      return !AF.changes.empty && (FF.dispatch(CF.update(AF, {
        scrollIntoView: !0,
        userEvent: SF,
        effects: "delete.selection" == SF ? bW.k.announce.of(CF.phrase("Selection deleted")) : void 0
      })), !0)
    }

    function LW(FF, WF, SF) {
      if (FF instanceof bW.k)
        for (let CF of FF.state.facet(bW.k.atomicRanges).map((WF => WF(FF)))) CF.between(WF, WF, ((FF, CF) => {
          FF < WF && CF > WF && (WF = SF ? CF : FF)
        }));
      return WF
    }
    const mS = (FF, WF, SF) => DW(FF, (CF => {
        let AF, uF, bW = CF.from,
          {
            state: PF
          } = FF,
          RF = PF.doc.lineAt(bW);
        if (SF && !WF && bW > RF.from && bW < RF.from + 200 && !/[^ \t]/.test(AF = RF.text.slice(0, bW - RF.from))) {
          if ("\t" == AF[AF.length - 1]) return bW - 1;
          let FF = (0, hF.$)(AF, PF.tabSize) % (0, dF.N)(PF) || (0, dF.N)(PF);
          for (let WF = 0; WF < FF && " " == AF[AF.length - 1 - WF]; WF++) bW--;
          uF = bW
        } else uF = (0, hF.bb)(RF.text, bW - RF.from, WF, WF) + RF.from, uF == bW && RF.number != (WF ? PF.doc.lines : 1) ? uF += WF ? 1 : -1 : !WF && /[\ufe00-\ufe0f]/.test(RF.text.slice(uF - RF.from, bW - RF.from)) && (uF = (0, hF.bb)(RF.text, uF - RF.from, !1, !1) + RF.from);
        return uF
      })),
      OW = FF => mS(FF, !1, !0),
      xS = FF => mS(FF, !0, !1),
      ZW = (FF, WF) => DW(FF, (SF => {
        let CF = SF.head,
          {
            state: AF
          } = FF,
          uF = AF.doc.lineAt(CF),
          bW = AF.charCategorizer(CF);
        for (let FF = null;;) {
          if (CF == (WF ? uF.to : uF.from)) {
            CF == SF.head && uF.number != (WF ? AF.doc.lines : 1) && (CF += WF ? 1 : -1);
            break
          }
          let dF = (0, hF.bb)(uF.text, CF - uF.from, WF) + uF.from,
            PF = uF.text.slice(Math.min(CF, dF) - uF.from, Math.max(CF, dF) - uF.from),
            RF = bW(PF);
          if (null != FF && RF != FF) break;
          " " == PF && CF == SF.head || (FF = RF), CF = dF
        }
        return CF
      })),
      oW = FF => ZW(FF, !1);

    function YW(FF) {
      let WF = [],
        SF = -1;
      for (let CF of FF.selection.Bu) {
        let AF = FF.doc.lineAt(CF.from),
          uF = FF.doc.lineAt(CF.to);
        if (CF.empty || CF.to != uF.from || (uF = FF.doc.lineAt(CF.to - 1)), SF >= AF.number) {
          let FF = WF[WF.length - 1];
          FF.to = uF.to, FF.Bu.push(CF)
        } else WF.push({
          from: AF.from,
          to: uF.to,
          Bu: [CF]
        });
        SF = uF.number + 1
      }
      return WF
    }

    function MW(FF, WF, SF) {
      if (FF.readOnly) return !1;
      let CF = [],
        AF = [];
      for (let uF of YW(FF)) {
        if (SF ? uF.to == FF.doc.length : 0 == uF.from) continue;
        let WF = FF.doc.lineAt(SF ? uF.to + 1 : uF.from - 1),
          bW = WF.length + 1;
        if (SF) {
          CF.push({
            from: uF.to,
            to: WF.to
          }, {
            from: uF.from,
            insert: WF.text + FF.lineBreak
          });
          for (let WF of uF.Bu) AF.push(hF.m.range(Math.min(FF.doc.length, WF.anchor + bW), Math.min(FF.doc.length, WF.head + bW)))
        } else {
          CF.push({
            from: WF.from,
            to: uF.from
          }, {
            from: uF.to,
            insert: FF.lineBreak + WF.text
          });
          for (let FF of uF.Bu) AF.push(hF.m.range(FF.anchor - bW, FF.head - bW))
        }
      }
      return !!CF.length && (WF(FF.update({
        changes: CF,
        scrollIntoView: !0,
        selection: hF.m.create(AF, FF.selection.mainIndex),
        userEvent: "move.line"
      })), !0)
    }

    function cS(FF, WF, SF) {
      if (FF.readOnly) return !1;
      let CF = [];
      for (let uF of YW(FF)) SF ? CF.push({
        from: uF.from,
        insert: FF.doc.slice(uF.from, uF.to) + FF.lineBreak
      }) : CF.push({
        from: uF.to,
        insert: FF.lineBreak + FF.doc.slice(uF.from, uF.to)
      });
      let AF = FF.changes(CF);
      return WF(FF.update({
        changes: AF,
        selection: FF.selection.map(AF, SF ? 1 : -1),
        scrollIntoView: !0,
        userEvent: "input.copyline"
      })), !0
    }
    const GW = zS(!1);

    function zS(FF) {
      return WF => {
        let {
          state: SF,
          dispatch: CF
        } = WF;
        if (SF.readOnly) return !1;
        let AF = SF.changeByRange((WF => {
          let {
            from: CF,
            to: AF
          } = WF, uF = SF.doc.lineAt(CF), bW = !FF && CF == AF && function(FF, WF) {
            if (/\(\)|\[\]|\{\}/.test(FF.sliceDoc(WF - 1, WF + 1))) return {
              from: WF,
              to: WF
            };
            let SF, CF = (0, dF.ib)(FF).resolveInner(WF),
              AF = CF.childBefore(WF),
              uF = CF.childAfter(WF);
            return AF && uF && AF.to <= WF && uF.from >= WF && (SF = AF.type.prop(PF.i.closedBy)) && SF.indexOf(uF.name) > -1 && FF.doc.lineAt(AF.to).from == FF.doc.lineAt(uF.from).from && !/\S/.test(FF.sliceDoc(AF.to, uF.from)) ? {
              from: AF.to,
              to: uF.from
            } : null
          }(SF, CF);
          FF && (CF = AF = (AF <= uF.to ? uF : SF.doc.lineAt(AF)).to);
          let RF = new dF.i(SF, {
              simulateBreak: CF,
              simulateDoubleBreak: !!bW
            }),
            iW = (0, dF.O)(RF, CF);
          for (null == iW && (iW = (0, hF.$)(/^\s*/.exec(SF.doc.lineAt(CF).text)[0], SF.tabSize)); AF < uF.to && /\s/.test(uF.text[AF - uF.from]);) AF++;
          bW ? ({
            from: CF,
            to: AF
          } = bW) : CF > uF.from && CF < uF.from + 100 && !/\S/.test(uF.text.slice(0, CF)) && (CF = uF.from);
          let eF = ["", (0, dF.W)(SF, iW)];
          return bW && eF.push((0, dF.W)(SF, RF.lineIndent(uF.from, -1))), {
            changes: {
              from: CF,
              to: AF,
              insert: hF.L.of(eF)
            },
            range: hF.m.cursor(CF + 1 + eF[1].length)
          }
        }));
        return CF(SF.update(AF, {
          scrollIntoView: !0,
          userEvent: "input"
        })), !0
      }
    }

    function IW(FF, WF) {
      let SF = -1;
      return FF.changeByRange((CF => {
        let AF = [];
        for (let hF = CF.from; hF <= CF.to;) {
          let uF = FF.doc.lineAt(hF);
          uF.number > SF && (CF.empty || CF.to > uF.from) && (WF(uF, AF, CF), SF = uF.number), hF = uF.to + 1
        }
        let uF = FF.changes(AF);
        return {
          changes: AF,
          range: hF.m.range(uF.mapPos(CF.anchor, 1), uF.mapPos(CF.head, 1))
        }
      }))
    }
    const fW = FF => {
        let {
          state: WF,
          dispatch: SF
        } = FF;
        return !WF.readOnly && (SF(WF.update(IW(WF, ((FF, SF) => {
          SF.push({
            from: FF.from,
            insert: WF.facet(dF.X)
          })
        })), {
          userEvent: "input.indent"
        })), !0)
      },
      yS = FF => {
        let {
          state: WF,
          dispatch: SF
        } = FF;
        return !WF.readOnly && (SF(WF.update(IW(WF, ((FF, SF) => {
          let CF = /^\s*/.exec(FF.text)[0];
          if (!CF) return;
          let AF = (0, hF.$)(CF, WF.tabSize),
            uF = 0,
            bW = (0, dF.W)(WF, Math.max(0, AF - (0, dF.N)(WF)));
          for (; uF < CF.length && uF < bW.length && CF.charCodeAt(uF) == bW.charCodeAt(uF);) uF++;
          SF.push({
            from: FF.from + uF,
            to: FF.from + CF.length,
            insert: bW.slice(uF)
          })
        })), {
          userEvent: "delete.dedent"
        })), !0)
      },
      sW = [{
        key: "Alt-ArrowLeft",
        mac: "Ctrl-ArrowLeft",
        run: FF => KF(FF, (WF => pF(FF.state, WF, !UF(FF)))),
        shift: FF => dW(FF, (WF => pF(FF.state, WF, !UF(FF))))
      }, {
        key: "Alt-ArrowRight",
        mac: "Ctrl-ArrowRight",
        run: FF => KF(FF, (WF => pF(FF.state, WF, UF(FF)))),
        shift: FF => dW(FF, (WF => pF(FF.state, WF, UF(FF))))
      }, {
        key: "Alt-ArrowUp",
        run: FF => {
          let {
            state: WF,
            dispatch: SF
          } = FF;
          return MW(WF, SF, !1)
        }
      }, {
        key: "Shift-Alt-ArrowUp",
        run: FF => {
          let {
            state: WF,
            dispatch: SF
          } = FF;
          return cS(WF, SF, !1)
        }
      }, {
        key: "Alt-ArrowDown",
        run: FF => {
          let {
            state: WF,
            dispatch: SF
          } = FF;
          return MW(WF, SF, !0)
        }
      }, {
        key: "Shift-Alt-ArrowDown",
        run: FF => {
          let {
            state: WF,
            dispatch: SF
          } = FF;
          return cS(WF, SF, !0)
        }
      }, {
        key: "Mod-Alt-ArrowUp",
        run: FF => NW(FF, !1)
      }, {
        key: "Mod-Alt-ArrowDown",
        run: FF => NW(FF, !0)
      }, {
        key: "Escape",
        run: FF => {
          let {
            state: WF,
            dispatch: SF
          } = FF, CF = WF.selection, AF = null;
          return CF.Bu.length > 1 ? AF = hF.m.create([CF.main]) : CF.main.empty || (AF = hF.m.create([hF.m.cursor(CF.main.head)])), !!AF && (SF(HF(WF, AF)), !0)
        }
      }, {
        key: "Mod-Enter",
        run: zS(!0)
      }, {
        key: "Alt-l",
        mac: "Ctrl-l",
        run: FF => {
          let {
            state: WF,
            dispatch: SF
          } = FF, CF = YW(WF).map((FF => {
            let {
              from: SF,
              to: CF
            } = FF;
            return hF.m.range(SF, Math.min(CF + 1, WF.doc.length))
          }));
          return SF(WF.update({
            selection: hF.m.create(CF),
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Mod-i",
        run: FF => {
          let {
            state: WF,
            dispatch: SF
          } = FF, CF = nF(WF.selection, (FF => {
            let SF = (0, dF.ib)(WF),
              CF = SF.resolveStack(FF.from, 1);
            if (FF.empty) {
              let WF = SF.resolveStack(FF.from, -1);
              WF.node.from >= CF.node.from && WF.node.to <= CF.node.to && (CF = WF)
            }
            for (let WF = CF; WF; WF = WF.next) {
              let {
                node: SF
              } = WF;
              if ((SF.from < FF.from && SF.to >= FF.to || SF.to > FF.to && SF.from <= FF.from) && WF.next) return hF.m.range(SF.to, SF.from)
            }
            return FF
          }));
          return !CF.eq(WF.selection) && (SF(HF(WF, CF)), !0)
        },
        preventDefault: !0
      }, {
        key: "Mod-[",
        run: yS
      }, {
        key: "Mod-]",
        run: fW
      }, {
        key: "Mod-Alt-\\",
        run: FF => {
          let {
            state: WF,
            dispatch: SF
          } = FF;
          if (WF.readOnly) return !1;
          let CF = Object.create(null),
            AF = new dF.i(WF, {
              overrideIndentation: FF => {
                let WF = CF[FF];
                return null == WF ? -1 : WF
              }
            }),
            uF = IW(WF, ((FF, SF, uF) => {
              let hF = (0, dF.O)(AF, FF.from);
              if (null == hF) return;
              /\S/.test(FF.text) || (hF = 0);
              let bW = /^\s*/.exec(FF.text)[0],
                PF = (0, dF.W)(WF, hF);
              (bW != PF || uF.from < FF.from + bW.length) && (CF[FF.from] = hF, SF.push({
                from: FF.from,
                to: FF.from + bW.length,
                insert: PF
              }))
            }));
          return uF.changes.empty || SF(WF.update(uF, {
            userEvent: "indent"
          })), !0
        }
      }, {
        key: "Shift-Mod-k",
        run: FF => {
          if (FF.state.readOnly) return !1;
          let {
            state: WF
          } = FF, SF = WF.changes(YW(WF).map((FF => {
            let {
              from: SF,
              to: CF
            } = FF;
            return SF > 0 ? SF-- : CF < WF.doc.length && CF++, {
              from: SF,
              to: CF
            }
          }))), CF = nF(WF.selection, (WF => {
            let SF;
            if (FF.lineWrapping) {
              let CF = FF.lineBlockAt(WF.head),
                AF = FF.coordsAtPos(WF.head, WF.assoc || 1);
              AF && (SF = CF.bottom + FF.documentTop - AF.bottom + FF.defaultLineHeight / 2)
            }
            return FF.moveVertically(WF, !0, SF)
          })).map(SF);
          return FF.dispatch({
            changes: SF,
            selection: CF,
            scrollIntoView: !0,
            userEvent: "delete.line"
          }), !0
        }
      }, {
        key: "Shift-Mod-\\",
        run: FF => {
          let {
            state: WF,
            dispatch: SF
          } = FF;
          return bS(WF, SF, !1)
        }
      }, {
        key: "Mod-/",
        run: FF => {
          let {
            state: WF
          } = FF, SF = WF.doc.lineAt(WF.selection.main.from), CF = QF(FF.state, SF.from);
          return CF.line ? iW(FF) : !!CF.block && EF(FF)
        }
      }, {
        key: "Alt-A",
        run: eF
      }, {
        key: "Ctrl-m",
        mac: "Shift-Alt-m",
        run: FF => (FF.setTabFocusMode(), !0)
      }].concat([{
        key: "ArrowLeft",
        run: BF,
        shift: RW,
        preventDefault: !0
      }, {
        key: "Mod-ArrowLeft",
        mac: "Alt-ArrowLeft",
        run: FF => vW(FF, !UF(FF)),
        shift: FF => eW(FF, !UF(FF)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowLeft",
        run: FF => KF(FF, (WF => hW(FF, WF, !UF(FF)))),
        shift: FF => dW(FF, (WF => hW(FF, WF, !UF(FF)))),
        preventDefault: !0
      }, {
        key: "ArrowRight",
        run: jW,
        shift: iS,
        preventDefault: !0
      }, {
        key: "Mod-ArrowRight",
        mac: "Alt-ArrowRight",
        run: FF => vW(FF, UF(FF)),
        shift: FF => eW(FF, UF(FF)),
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowRight",
        run: FF => KF(FF, (WF => hW(FF, WF, UF(FF)))),
        shift: FF => dW(FF, (WF => hW(FF, WF, UF(FF)))),
        preventDefault: !0
      }, {
        key: "ArrowUp",
        run: FW,
        shift: QW,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowUp",
        run: aS,
        shift: qS
      }, {
        mac: "Ctrl-ArrowUp",
        run: AW,
        shift: tS
      }, {
        key: "ArrowDown",
        run: WW,
        shift: rS,
        preventDefault: !0
      }, {
        mac: "Cmd-ArrowDown",
        run: kS,
        shift: VW
      }, {
        mac: "Ctrl-ArrowDown",
        run: uW,
        shift: TW
      }, {
        key: "PageUp",
        run: AW,
        shift: tS
      }, {
        key: "PageDown",
        run: uW,
        shift: TW
      }, {
        key: "Home",
        run: FF => KF(FF, (WF => hW(FF, WF, !1))),
        shift: FF => dW(FF, (WF => hW(FF, WF, !1))),
        preventDefault: !0
      }, {
        key: "Mod-Home",
        run: aS,
        shift: qS
      }, {
        key: "End",
        run: FF => KF(FF, (WF => hW(FF, WF, !0))),
        shift: FF => dW(FF, (WF => hW(FF, WF, !0))),
        preventDefault: !0
      }, {
        key: "Mod-End",
        run: kS,
        shift: VW
      }, {
        key: "Enter",
        run: GW,
        shift: GW
      }, {
        key: "Mod-a",
        run: FF => {
          let {
            state: WF,
            dispatch: SF
          } = FF;
          return SF(WF.update({
            selection: {
              anchor: 0,
              head: WF.doc.length
            },
            userEvent: "select"
          })), !0
        }
      }, {
        key: "Backspace",
        run: OW,
        shift: OW,
        preventDefault: !0
      }, {
        key: "Delete",
        run: xS,
        preventDefault: !0
      }, {
        key: "Mod-Backspace",
        mac: "Alt-Backspace",
        run: oW,
        preventDefault: !0
      }, {
        key: "Mod-Delete",
        mac: "Alt-Delete",
        run: FF => ZW(FF, !0),
        preventDefault: !0
      }, {
        mac: "Mod-Backspace",
        run: FF => DW(FF, (WF => {
          let SF = FF.moveToLineBoundary(WF, !1).head;
          return WF.head > SF ? SF : Math.max(0, WF.head - 1)
        })),
        preventDefault: !0
      }, {
        mac: "Mod-Delete",
        run: FF => DW(FF, (WF => {
          let SF = FF.moveToLineBoundary(WF, !0).head;
          return WF.head < SF ? SF : Math.min(FF.state.doc.length, WF.head + 1)
        })),
        preventDefault: !0
      }].concat([{
        key: "Ctrl-b",
        run: BF,
        shift: RW,
        preventDefault: !0
      }, {
        key: "Ctrl-f",
        run: jW,
        shift: iS
      }, {
        key: "Ctrl-p",
        run: FW,
        shift: QW
      }, {
        key: "Ctrl-n",
        run: WW,
        shift: rS
      }, {
        key: "Ctrl-a",
        run: FF => KF(FF, (WF => hF.m.cursor(FF.lineBlockAt(WF.head).from, 1))),
        shift: FF => dW(FF, (WF => hF.m.cursor(FF.lineBlockAt(WF.head).from)))
      }, {
        key: "Ctrl-e",
        run: FF => KF(FF, (WF => hF.m.cursor(FF.lineBlockAt(WF.head).to, -1))),
        shift: FF => dW(FF, (WF => hF.m.cursor(FF.lineBlockAt(WF.head).to)))
      }, {
        key: "Ctrl-d",
        run: xS
      }, {
        key: "Ctrl-h",
        run: OW
      }, {
        key: "Ctrl-k",
        run: FF => DW(FF, (WF => {
          let SF = FF.lineBlockAt(WF.head).to;
          return WF.head < SF ? SF : Math.min(FF.state.doc.length, WF.head + 1)
        }))
      }, {
        key: "Ctrl-Alt-h",
        run: oW
      }, {
        key: "Ctrl-o",
        run: FF => {
          let {
            state: WF,
            dispatch: SF
          } = FF;
          if (WF.readOnly) return !1;
          let CF = WF.changeByRange((FF => ({
            changes: {
              from: FF.from,
              to: FF.to,
              insert: hF.L.of(["", ""])
            },
            range: hF.m.cursor(FF.from)
          })));
          return SF(WF.update(CF, {
            scrollIntoView: !0,
            userEvent: "input"
          })), !0
        }
      }, {
        key: "Ctrl-t",
        run: FF => {
          let {
            state: WF,
            dispatch: SF
          } = FF;
          if (WF.readOnly) return !1;
          let CF = WF.changeByRange((FF => {
            if (!FF.empty || 0 == FF.from || FF.from == WF.doc.length) return {
              range: FF
            };
            let SF = FF.from,
              CF = WF.doc.lineAt(SF),
              AF = SF == CF.from ? SF - 1 : (0, hF.bb)(CF.text, SF - CF.from, !1) + CF.from,
              uF = SF == CF.to ? SF + 1 : (0, hF.bb)(CF.text, SF - CF.from, !0) + CF.from;
            return {
              changes: {
                from: AF,
                to: uF,
                insert: WF.doc.slice(SF, uF).append(WF.doc.slice(AF, SF))
              },
              range: hF.m.cursor(uF)
            }
          }));
          return !CF.changes.empty && (SF(WF.update(CF, {
            scrollIntoView: !0,
            userEvent: "move.character"
          })), !0)
        }
      }, {
        key: "Ctrl-v",
        run: uW
      }].map((FF => ({
        mac: FF.key,
        run: FF.run,
        shift: FF.shift
      }))))),
      nW = {
        key: "Tab",
        run: fW,
        shift: yS
      };
    var HW = SF(39211),
      KW = SF(39146),
      wW = SF(39215),
      XW = function(FF) {
        void 0 === FF && (FF = {});
        var {
          crosshairCursor: WF = !1
        } = FF, SF = [];
        !1 !== FF.closeBracketsKeymap && (SF = SF.concat(KW.h)), !1 !== FF.defaultKeymap && (SF = SF.concat(sW)), !1 !== FF.searchKeymap && (SF = SF.concat(HW.h)), !1 !== FF.historyKeymap && (SF = SF.concat(sF)), !1 !== FF.foldKeymap && (SF = SF.concat(dF.I)), !1 !== FF.completionKeymap && (SF = SF.concat(KW.p)), !1 !== FF.lintKeymap && (SF = SF.concat(wW.c));
        var CF = [];
        return !1 !== FF.lineNumbers && CF.push((0, bW.Y)()), !1 !== FF.highlightActiveLineGutter && CF.push((0, bW.N)()), !1 !== FF.highlightSpecialChars && CF.push((0, bW.P)()), !1 !== FF.history && CF.push(function() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [VF, qW.of(FF), bW.k.domEventHandlers({
            beforeinput(FF, WF) {
              let SF = "historyUndo" == FF.inputType ? DF : "historyRedo" == FF.inputType ? LF : null;
              return !!SF && (FF.preventDefault(), SF(WF))
            }
          })]
        }()), !1 !== FF.foldGutter && CF.push((0, dF.D)()), !1 !== FF.drawSelection && CF.push((0, bW.z)()), !1 !== FF.dropCursor && CF.push((0, bW.B)()), !1 !== FF.allowMultipleSelections && CF.push(hF.q.allowMultipleSelections.of(!0)), !1 !== FF.indentOnInput && CF.push((0, dF.S)()), !1 !== FF.syntaxHighlighting && CF.push((0, dF.db)(dF.y, {
          fallback: !0
        })), !1 !== FF.bracketMatching && CF.push((0, dF.q)()), !1 !== FF.closeBrackets && CF.push((0, KW.i)()), !1 !== FF.autocompletion && CF.push((0, KW.d)()), !1 !== FF.rectangularSelection && CF.push((0, bW.ib)()), !1 !== WF && CF.push((0, bW.w)()), !1 !== FF.highlightActiveLine && CF.push((0, bW.O)()), !1 !== FF.highlightSelectionMatches && CF.push((0, HW.d)()), FF.tabSize && "number" === typeof FF.tabSize && CF.push(dF.X.of(" ".repeat(FF.tabSize))), CF.concat([bW.U.of(SF.flat())]).filter(Boolean)
      },
      UW = SF(39188);
    const BW = "#e5c07b",
      jS = "#e06c75",
      vS = "#56b6c2",
      JW = "#ffffff",
      pW = "#abb2bf",
      lW = "#7d8799",
      FS = "#61afef",
      WS = "#98c379",
      SS = "#d19a66",
      CS = "#c678dd",
      AS = "#21252b",
      uS = "#2c313a",
      hS = "#282c34",
      bC = "#353a42",
      dS = "#3E4451",
      PS = "#528bff",
      RS = bW.k.theme({
        "&": {
          color: pW,
          backgroundColor: hS
        },
        ".cm-content": {
          caretColor: PS
        },
        ".cm-cursor, .cm-dropCursor": {
          borderLeftColor: PS
        },
        "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
          backgroundColor: dS
        },
        ".cm-panels": {
          backgroundColor: AS,
          color: pW
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
          backgroundColor: hS,
          color: lW,
          border: "none"
        },
        ".cm-activeLineGutter": {
          backgroundColor: uS
        },
        ".cm-foldPlaceholder": {
          backgroundColor: "transparent",
          border: "none",
          color: "#ddd"
        },
        ".cm-tooltip": {
          border: "none",
          backgroundColor: bC
        },
        ".cm-tooltip .cm-tooltip-arrow:before": {
          borderTopColor: "transparent",
          borderBottomColor: "transparent"
        },
        ".cm-tooltip .cm-tooltip-arrow:after": {
          borderTopColor: bC,
          borderBottomColor: bC
        },
        ".cm-tooltip-autocomplete": {
          "& > ul > li[aria-selected]": {
            backgroundColor: uS,
            color: pW
          }
        }
      }, {
        dark: !0
      }),
      iC = dF.e.define([{
        tag: UW.k.keyword,
        color: CS
      }, {
        tag: [UW.k.name, UW.k.deleted, UW.k.character, UW.k.propertyName, UW.k.macroName],
        color: jS
      }, {
        tag: [UW.k.function(UW.k.variableName), UW.k.labelName],
        color: FS
      }, {
        tag: [UW.k.color, UW.k.constant(UW.k.name), UW.k.standard(UW.k.name)],
        color: SS
      }, {
        tag: [UW.k.definition(UW.k.name), UW.k.separator],
        color: pW
      }, {
        tag: [UW.k.typeName, UW.k.className, UW.k.number, UW.k.changed, UW.k.annotation, UW.k.modifier, UW.k.self, UW.k.namespace],
        color: BW
      }, {
        tag: [UW.k.operator, UW.k.operatorKeyword, UW.k.url, UW.k.escape, UW.k.regexp, UW.k.link, UW.k.special(UW.k.string)],
        color: vS
      }, {
        tag: [UW.k.meta, UW.k.comment],
        color: lW
      }, {
        tag: UW.k.strong,
        fontWeight: "bold"
      }, {
        tag: UW.k.emphasis,
        fontStyle: "italic"
      }, {
        tag: UW.k.strikethrough,
        textDecoration: "line-through"
      }, {
        tag: UW.k.link,
        color: lW,
        textDecoration: "underline"
      }, {
        tag: UW.k.heading,
        fontWeight: "bold",
        color: jS
      }, {
        tag: [UW.k.atom, UW.k.bool, UW.k.special(UW.k.variableName)],
        color: SS
      }, {
        tag: [UW.k.processingInstruction, UW.k.string, UW.k.inserted],
        color: WS
      }, {
        tag: UW.k.invalid,
        color: JW
      }]),
      eS = [RS, (0, dF.db)(iC)];
    var ES = bW.k.theme({
      "&": {
        backgroundColor: "#fff"
      }
    }, {
      dark: !1
    });
    class QS {
      constructor(FF, WF) {
        this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = WF, this.timeoutMS = WF, this.callbacks.push(FF)
      }
      lF() {
        if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
          this.isTimeExhausted = !0;
          var FF = this.callbacks.slice();
          this.callbacks.length = 0, FF.forEach((FF => {
            try {
              FF()
            } catch (WF) {
              console.error("TimeoutLatch callback error:", WF)
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
    class rC {
      constructor() {
        this.interval = null, this.latches = new Set
      }
      add(FF) {
        this.latches.add(FF), this.start()
      }
      remove(FF) {
        this.latches.delete(FF), 0 === this.latches.size && this.stop()
      }
      start() {
        null === this.interval && (this.interval = setInterval((() => {
          this.latches.forEach((FF => {
            FF.lF(), FF.isDone && this.remove(FF)
          }))
        }), 1))
      }
      stop() {
        null !== this.interval && (clearInterval(this.interval), this.interval = null)
      }
    }
    var gC = null,
      tC = hF.e.define(),
      TS = [];

    function aC(FF) {
      var {
        value: WF,
        selection: SF,
        onChange: CF,
        onStatistics: AF,
        onCreateEditor: dF,
        onUpdate: PF,
        extensions: RF = TS,
        autoFocus: iW,
        theme: eF = "light",
        height: EF = null,
        minHeight: QF = null,
        maxHeight: rW = null,
        width: gW = null,
        minWidth: tW = null,
        maxWidth: TF = null,
        placeholder: aW = "",
        editable: kW = !0,
        readOnly: qW = !1,
        indentWithTab: VF = !0,
        basicSetup: NF = !0,
        root: DF,
        initialState: LF
      } = FF, [mW, OF] = (0, uF.useState)(), [xW, ZF] = (0, uF.useState)(), [oF, YF] = (0, uF.useState)(), MF = (0, uF.useState)((() => ({
        current: null
      })))[0], cW = (0, uF.useState)((() => ({
        current: null
      })))[0], GF = bW.k.theme({
        "&": {
          height: EF,
          minHeight: QF,
          maxHeight: rW,
          width: gW,
          minWidth: tW,
          maxWidth: TF
        },
        "& .cm-scroller": {
          height: "100% !important"
        }
      }), zW = bW.k.updateListener.of((FF => {
        if (FF.docChanged && "function" === typeof CF && !FF.transactions.some((FF => FF.annotation(tC)))) {
          MF.current ? MF.current.reset() : (MF.current = new QS((() => {
            if (cW.current) {
              var FF = cW.current;
              cW.current = null, FF()
            }
            MF.current = null
          }), 200), ("undefined" === typeof window ? new rC : (gC || (gC = new rC), gC)).add(MF.current));
          var WF = FF.state.doc.toString();
          CF(WF, FF)
        }
        AF && AF((FF => ({
          line: FF.state.doc.lineAt(FF.state.selection.main.from),
          lineCount: FF.state.doc.lines,
          lineBreak: FF.state.lineBreak,
          length: FF.state.doc.length,
          readOnly: FF.state.readOnly,
          tabSize: FF.state.tabSize,
          selection: FF.state.selection,
          selectionAsSingle: FF.state.selection.asSingle().main,
          Bu: FF.state.selection.Bu,
          selectionCode: FF.state.sliceDoc(FF.state.selection.main.from, FF.state.selection.main.to),
          selections: FF.state.selection.Bu.map((WF => FF.state.sliceDoc(WF.from, WF.to))),
          selectedText: FF.state.selection.Bu.some((FF => !FF.empty))
        }))(FF))
      })), IF = function(FF) {
        void 0 === FF && (FF = {});
        var {
          indentWithTab: WF = !0,
          editable: SF = !0,
          readOnly: CF = !1,
          theme: AF = "light",
          placeholder: uF = "",
          basicSetup: dF = !0
        } = FF, PF = [];
        switch (WF && PF.unshift(bW.U.of([nW])), dF && ("boolean" === typeof dF ? PF.unshift(XW()) : PF.unshift(XW(dF))), uF && PF.unshift((0, bW.eb)(uF)), AF) {
          case "light":
            PF.push(ES);
            break;
          case "dark":
            PF.push(eS);
            break;
          case "none":
            break;
          default:
            PF.push(AF)
        }
        return !1 === SF && PF.push(bW.k.editable.of(!1)), CF && PF.push(hF.q.readOnly.of(!0)), [...PF]
      }({
        theme: eF,
        editable: kW,
        readOnly: qW,
        placeholder: aW,
        indentWithTab: VF,
        basicSetup: NF
      }), fF = [zW, GF, ...IF];
      return PF && "function" === typeof PF && fF.push(bW.k.updateListener.of(PF)), fF = fF.concat(RF), (0, uF.useLayoutEffect)((() => {
        if (mW && !oF) {
          var FF = {
              doc: WF,
              selection: SF,
              extensions: fF
            },
            CF = LF ? hF.q.fromJSON(LF.json, FF, LF.fields) : hF.q.create(FF);
          if (YF(CF), !xW) {
            var AF = new bW.k({
              state: CF,
              parent: mW,
              root: DF
            });
            ZF(AF), dF && dF(AF, CF)
          }
        }
        return () => {
          xW && (YF(void 0), ZF(void 0))
        }
      }), [mW, oF]), (0, uF.useEffect)((() => {
        FF.container && OF(FF.container)
      }), [FF.container]), (0, uF.useEffect)((() => () => {
        xW && (xW.destroy(), ZF(void 0)), MF.current && (MF.current.cancel(), MF.current = null)
      }), [xW]), (0, uF.useEffect)((() => {
        iW && xW && xW.focus()
      }), [iW, xW]), (0, uF.useEffect)((() => {
        xW && xW.dispatch({
          effects: hF.H.reconfigure.of(fF)
        })
      }), [eF, RF, EF, QF, rW, gW, tW, TF, aW, kW, qW, VF, NF, CF, PF]), (0, uF.useEffect)((() => {
        if (void 0 !== WF) {
          var FF = xW ? xW.state.doc.toString() : "";
          if (xW && WF !== FF) {
            var SF = () => {
              xW && WF !== xW.state.doc.toString() && xW.dispatch({
                changes: {
                  from: 0,
                  to: xW.state.doc.toString().length,
                  insert: WF || ""
                },
                annotations: [tC.of(!0)]
              })
            };
            MF.current && !MF.current.isDone ? cW.current = SF : SF()
          }
        }
      }), [WF, xW]), {
        state: oF,
        setState: YF,
        view: xW,
        setView: ZF,
        container: mW,
        setContainer: OF
      }
    }
    var kC = SF(971),
      qC = ["className", "value", "selection", "extensions", "onChange", "onStatistics", "onCreateEditor", "onUpdate", "autoFocus", "theme", "height", "minHeight", "maxHeight", "width", "minWidth", "maxWidth", "basicSetup", "placeholder", "indentWithTab", "editable", "readOnly", "root", "initialState"],
      VS = (0, uF.forwardRef)(((FF, WF) => {
        var {
          className: SF,
          value: hF = "",
          selection: bW,
          extensions: dF = [],
          onChange: PF,
          onStatistics: RF,
          onCreateEditor: iW,
          onUpdate: eF,
          autoFocus: EF,
          theme: QF = "light",
          height: rW,
          minHeight: gW,
          maxHeight: tW,
          width: TF,
          minWidth: aW,
          maxWidth: kW,
          basicSetup: qW,
          placeholder: VF,
          indentWithTab: NF,
          editable: DF,
          readOnly: LF,
          root: mW,
          initialState: OF
        } = FF, xW = (0, AF.b)(FF, qC), ZF = (0, uF.useRef)(null), {
          state: oF,
          view: YF,
          container: MF,
          setContainer: cW
        } = aC({
          root: mW,
          value: hF,
          autoFocus: EF,
          theme: QF,
          height: rW,
          minHeight: gW,
          maxHeight: tW,
          width: TF,
          minWidth: aW,
          maxWidth: kW,
          basicSetup: qW,
          placeholder: VF,
          indentWithTab: NF,
          editable: DF,
          readOnly: LF,
          selection: bW,
          onChange: PF,
          onStatistics: RF,
          onCreateEditor: iW,
          onUpdate: eF,
          extensions: dF,
          initialState: OF
        });
        (0, uF.useImperativeHandle)(WF, (() => ({
          editor: ZF.current,
          state: oF,
          view: YF
        })), [ZF, MF, oF, YF]);
        var GF = (0, uF.useCallback)((FF => {
          ZF.current = FF, cW(FF)
        }), [cW]);
        if ("string" !== typeof hF) throw new Error("value must be typeof string but got " + typeof hF);
        var zW = "string" === typeof QF ? "cm-theme-" + QF : "cm-theme";
        return (0, kC.jsx)("div", (0, CF.b)({
          ref: GF,
          className: zW + (SF ? " " + SF : "")
        }, xW))
      }));
    VS.displayName = "CodeMirror";
    const NS = VS
  },
  39168: (FF, WF, SF) => {
    function CF() {
      var FF = arguments[0];
      "string" == typeof FF && (FF = document.createElement(FF));
      var WF = 1,
        SF = arguments[1];
      if (SF && "object" == typeof SF && null == SF.nodeType && !Array.isArray(SF)) {
        for (var CF in SF)
          if (Object.prototype.hasOwnProperty.call(SF, CF)) {
            var uF = SF[CF];
            "string" == typeof uF ? FF.setAttribute(CF, uF) : null != uF && (FF[CF] = uF)
          } WF++
      }
      for (; WF < arguments.length; WF++) AF(FF, arguments[WF]);
      return FF
    }

    function AF(FF, WF) {
      if ("string" == typeof WF) FF.appendChild(document.createTextNode(WF));
      else if (null == WF);
      else if (null != WF.nodeType) FF.appendChild(WF);
      else {
        if (!Array.isArray(WF)) throw new RangeError("Unsupported child node: " + WF);
        for (var SF = 0; SF < WF.length; SF++) AF(FF, WF[SF])
      }
    }
    SF.d(WF, {
      c: () => CF
    })
  },
  39165: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF
    });
    const CF = "undefined" == typeof Symbol ? "__\u037c" : Symbol.for("\u037c"),
      AF = "undefined" == typeof Symbol ? "__styleSet" + Math.floor(1e8 * Math.random()) : Symbol("styleSet"),
      uF = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : {};
    class hF {
      constructor(FF, WF) {
        this.rules = [];
        let {
          finish: SF
        } = WF || {};

        function CF(FF) {
          return /^@/.test(FF) ? [FF] : FF.split(/,\s*/)
        }

        function AF(FF, WF, uF, hF) {
          let bW = [],
            dF = /^@(\w+)\b/.exec(FF[0]),
            PF = dF && "keyframes" == dF[1];
          if (dF && null == WF) return uF.push(FF[0] + ";");
          for (let SF in WF) {
            let hF = WF[SF];
            if (/&/.test(SF)) AF(SF.split(/,\s*/).map((WF => FF.map((FF => WF.replace(/&/, FF))))).reduce(((FF, WF) => FF.concat(WF))), hF, uF);
            else if (hF && "object" == typeof hF) {
              if (!dF) throw new RangeError("The value of a property (" + SF + ") should be a primitive value.");
              AF(CF(SF), hF, bW, PF)
            } else null != hF && bW.push(SF.replace(/_.*/, "").replace(/[A-Z]/g, (FF => "-" + FF.toLowerCase())) + ": " + hF + ";")
          }(bW.length || PF) && uF.push((!SF || dF || hF ? FF : FF.map(SF)).join(", ") + " {" + bW.join(" ") + "}")
        }
        for (let uF in FF) AF(CF(uF), FF[uF], this.rules)
      }
      getRules() {
        return this.rules.join("\n")
      }
      static newName() {
        let FF = uF[CF] || 1;
        return uF[CF] = FF + 1, "\u037c" + FF.toString(36)
      }
      static mount(FF, WF, SF) {
        let CF = FF[AF],
          uF = SF && SF.nonce;
        CF ? uF && CF.setNonce(uF) : CF = new dF(FF, uF), CF.mount(Array.isArray(WF) ? WF : [WF], FF)
      }
    }
    let bW = new Map;
    class dF {
      constructor(FF, WF) {
        let SF = FF.ownerDocument || FF,
          CF = SF.defaultView;
        if (!FF.head && FF.adoptedStyleSheets && CF.CSSStyleSheet) {
          let WF = bW.get(SF);
          if (WF) return FF[AF] = WF;
          this.sheet = new CF.CSSStyleSheet, bW.set(SF, this)
        } else this.styleTag = SF.createElement("style"), WF && this.styleTag.setAttribute("nonce", WF);
        this.modules = [], FF[AF] = this
      }
      mount(FF, WF) {
        let SF = this.sheet,
          CF = 0,
          AF = 0;
        for (let uF = 0; uF < FF.length; uF++) {
          let WF = FF[uF],
            hF = this.modules.indexOf(WF);
          if (hF < AF && hF > -1 && (this.modules.splice(hF, 1), AF--, hF = -1), -1 == hF) {
            if (this.modules.splice(AF++, 0, WF), SF)
              for (let FF = 0; FF < WF.rules.length; FF++) SF.insertRule(WF.rules[FF], CF++)
          } else {
            for (; AF < hF;) CF += this.modules[AF++].rules.length;
            CF += WF.rules.length, AF++
          }
        }
        if (SF) WF.adoptedStyleSheets.indexOf(this.sheet) < 0 && (WF.adoptedStyleSheets = [this.sheet, ...WF.adoptedStyleSheets]);
        else {
          let FF = "";
          for (let WF = 0; WF < this.modules.length; WF++) FF += this.modules[WF].getRules() + "\n";
          this.styleTag.textContent = FF;
          let SF = WF.head || WF;
          this.styleTag.parentNode != SF && SF.insertBefore(this.styleTag, SF.firstChild)
        }
      }
      setNonce(FF) {
        this.styleTag && this.styleTag.getAttribute("nonce") != FF && this.styleTag.setAttribute("nonce", FF)
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);